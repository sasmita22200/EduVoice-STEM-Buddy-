import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Calendar,
  Building,
  UserCheck,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Volume2,
  Check,
  HelpCircle,
  Wand2,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  GraduationCap,
  School,
  HeartHandshake
} from 'lucide-react';
import { FormInput } from './FormInput';
import { EduVoiceLogo } from './EduVoiceLogo';
import { SchoolSearchAutocomplete } from './SchoolSearchAutocomplete';
import { FormData, FormErrors, Language, StudentProfile, Gender, Grade, PreferredLang, SchoolRecord, ClassLevel } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { TN_DISTRICTS } from '../data/tnDistricts';
import { TN_GROUPS } from '../data/eduvoiceSyllabus';

interface RegistrationFormProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onSuccess: (profile: StudentProfile) => void;
  onOpenTerms: () => void;
  onSwitchToSignIn: () => void;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({
  lang,
  onLanguageChange,
  onSuccess,
  onOpenTerms,
  onSwitchToSignIn
}) => {
  const safeLang: Language = lang === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[safeLang] || TRANSLATIONS.ta;
  const isTa = safeLang === 'ta';

  // Current Step: 1 = Account, 2 = Student & Class, 3 = School, 4 = Parent & Consent
  const [currentStep, setCurrentStep] = useState<number>(1);

  // OTP State
  const [otpSent, setOtpSent] = useState(false);
  const [otpCode, setOtpCode] = useState('');
  const [isOtpVerified, setIsOtpVerified] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Form State
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    mobile: '',
    dob: '',
    gender: 'Female',
    grade: 'Grade 10',
    classLevel: 10,
    groupCode: '2502',
    schoolName: '',
    schoolAddress: '',
    isManualSchool: false,
    district: 'Chennai',
    state: 'Tamil Nadu',
    preferredLanguage: 'Tamil',
    parentName: '',
    parentRelationship: 'Father',
    parentMobile: '',
    parentEmail: '',
    parentConsent: true,
    password: '',
    confirmPassword: '',
    agreeTerms: true
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Password strength calculation
  const getPasswordStrength = (pwd: string) => {
    if (!pwd) return { score: 0, text: 'Empty', color: 'bg-slate-200' };
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;

    if (score <= 1) return { score: 25, text: isTa ? 'பலவீனமானது (Weak)' : 'Weak', color: 'bg-red-500' };
    if (score === 2) return { score: 50, text: isTa ? 'சுமாரானது (Fair)' : 'Fair', color: 'bg-amber-500' };
    if (score === 3) return { score: 75, text: isTa ? 'நல்லது (Good)' : 'Good', color: 'bg-blue-500' };
    return { score: 100, text: isTa ? 'மிக வலுவானது (Strong)' : 'Strong', color: 'bg-emerald-500' };
  };

  const strength = getPasswordStrength(formData.password);

  // Demo auto-fill helper
  const handleAutoFillDemo = () => {
    setFormData({
      fullName: 'K. Selvamani',
      email: 'selvamani.student@gmail.com',
      mobile: '9876543210',
      dob: '2009-05-14',
      gender: 'Female',
      grade: 'Grade 10',
      classLevel: 10,
      groupCode: '2502',
      schoolName: 'Govt Model Higher Secondary School, Triplicane',
      schoolAddress: 'Near Lady Willingdon Campus, Kamarajar Salai, Triplicane, Chennai - 600005',
      isManualSchool: false,
      district: 'Chennai',
      state: 'Tamil Nadu',
      preferredLanguage: 'Tamil',
      parentName: 'M. Kumaravel',
      parentRelationship: 'Father',
      parentMobile: '9444123456',
      parentEmail: 'kumaravel.parent@gmail.com',
      parentConsent: true,
      password: 'EduVoice2026#',
      confirmPassword: 'EduVoice2026#',
      agreeTerms: true
    });
    setIsOtpVerified(true);
    setErrors({});
  };

  const handleChange = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSchoolSelect = (school: SchoolRecord) => {
    setFormData((prev) => ({
      ...prev,
      schoolName: school.name,
      schoolAddress: school.address || `${school.city}, ${school.district}`,
      isManualSchool: false,
      district: school.district || prev.district
    }));
    setErrors((prev) => ({ ...prev, schoolName: undefined, schoolAddress: undefined }));
  };

  // Step Validation Logic
  const validateStep = (step: number): boolean => {
    const newErrors: FormErrors = {};

    if (step === 1) {
      if (!formData.email.trim()) {
        newErrors.email = t.errors.required;
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = t.errors.invalidEmail;
      }

      if (!formData.mobile.trim()) {
        newErrors.mobile = t.errors.required;
      } else if (!/^[6-9]\d{9}$/.test(formData.mobile.trim())) {
        newErrors.mobile = t.errors.invalidMobile;
      }

      if (!formData.password) {
        newErrors.password = t.errors.required;
      } else if (formData.password.length < 8) {
        newErrors.password = isTa ? 'குறைந்தது 8 எழுத்துகள் தேவை' : 'Minimum 8 characters required';
      }

      if (!formData.confirmPassword) {
        newErrors.confirmPassword = t.errors.required;
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = t.errors.passwordMismatch;
      }
    } else if (step === 2) {
      if (!formData.fullName.trim()) newErrors.fullName = t.errors.required;
      if (!formData.dob) newErrors.dob = t.errors.required;
      if (!formData.gender) newErrors.gender = t.errors.required;
    } else if (step === 3) {
      if (!formData.schoolName.trim()) newErrors.schoolName = t.errors.required;
      if (formData.isManualSchool && !formData.schoolAddress?.trim()) {
        newErrors.schoolAddress = isTa ? 'பள்ளி முகவரி தேவை' : 'School address required';
      }
      if (!formData.district) newErrors.district = t.errors.required;
    } else if (step === 4) {
      if (!formData.parentName.trim()) newErrors.parentName = t.errors.required;
      if (!formData.parentMobile.trim()) {
        newErrors.parentMobile = t.errors.required;
      } else if (!/^[6-9]\d{9}$/.test(formData.parentMobile.trim())) {
        newErrors.parentMobile = t.errors.invalidMobile;
      }
      if (!formData.parentConsent) {
        newErrors.parentConsent = isTa ? 'பெற்றோர் ஒப்புதல் கட்டாயம்' : 'Parental consent is required';
      }
      if (!formData.agreeTerms) {
        newErrors.agreeTerms = t.errors.mustAgreeTerms;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 4));
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const studentProfile: StudentProfile = {
        studentId: `EDU-TN-${Math.floor(100000 + Math.random() * 900000)}`,
        fullName: formData.fullName,
        role: 'student',
        email: formData.email,
        mobile: formData.mobile,
        grade: `Class ${formData.classLevel}`,
        classLevel: formData.classLevel,
        groupCode: (formData.classLevel === 11 || formData.classLevel === 12) ? formData.groupCode : undefined,
        schoolName: formData.schoolName,
        schoolAddress: formData.schoolAddress,
        isManualSchool: formData.isManualSchool,
        verificationStatus: 'School Verified',
        district: formData.district,
        state: formData.state,
        language: formData.preferredLanguage === 'Tamil' ? 'ta' : 'en',
        avatarSeed: formData.fullName,
        parentName: formData.parentName,
        parentMobile: formData.parentMobile
      };
      onSuccess(studentProfile);
    }, 800);
  };

  const steps = [
    { num: 1, titleEn: 'Account', titleTa: 'கணக்கு' },
    { num: 2, titleEn: 'Student & Class', titleTa: 'மாணவர்' },
    { num: 3, titleEn: 'School', titleTa: 'பள்ளி' },
    { num: 4, titleEn: 'Parent & Consent', titleTa: 'பெற்றோர்' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200/90 overflow-hidden text-slate-800">
      {/* Header Bar */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 p-5 sm:p-6 text-white flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <EduVoiceLogo lang={lang} variant="header" />
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleAutoFillDemo}
              className="px-2.5 py-1 text-[11px] font-bold bg-white/20 hover:bg-white/30 text-white rounded-xl backdrop-blur-md flex items-center gap-1 transition-all"
              title="Auto-fill sample student data"
            >
              <Wand2 className="w-3.5 h-3.5 text-cyan-300" />
              <span>Demo Fill</span>
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange(isTa ? 'en' : 'ta')}
              className="px-2.5 py-1 text-[11px] font-black bg-white/20 text-white rounded-xl"
            >
              {isTa ? 'English' : 'தமிழ்'}
            </button>
          </div>
        </div>

        <div>
          <h1 className="text-lg sm:text-xl font-black text-white">
            {isTa ? 'மாணவர் புதிய சேர்க்கைப் பதிவு' : 'Student Registration (Samacheer Kalvi)'}
          </h1>
          <p className="text-xs text-blue-100">
            {isTa 
              ? 'வகுப்புகள் 9 முதல் 12 மாணவர்களுக்கான பிரத்யேக கல்வி தளம்' 
              : 'Empowering Tamil Nadu State Board students in Classes 9–12'}
          </p>
        </div>

        {/* Progress Bar (Section 3) */}
        <div className="mt-2 flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-[11px] font-bold text-blue-200">
            <span>Step {currentStep} of 4: {isTa ? steps[currentStep - 1].titleTa : steps[currentStep - 1].titleEn}</span>
            <span>{currentStep * 25}%</span>
          </div>
          <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-400 h-full rounded-full transition-all duration-300" 
              style={{ width: `${currentStep * 25}%` }} 
            />
          </div>

          {/* Stepper Dots */}
          <div className="grid grid-cols-4 gap-1 pt-1 text-[10px] text-center font-bold">
            {steps.map((st) => (
              <span 
                key={st.num} 
                className={currentStep >= st.num ? 'text-white' : 'text-white/50'}
              >
                {st.num}. {isTa ? st.titleTa : st.titleEn}
              </span>
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-5 sm:p-7 flex flex-col gap-5">
        {/* ================= STEP 1: ACCOUNT (EMAIL, MOBILE, OTP, PASSWORD) ================= */}
        {currentStep === 1 && (
          <div className="flex flex-col gap-4 animate-in fade-in">
            <h2 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-600" />
              <span>{isTa ? 'படி 1: கணக்கு மற்றும் பாதுகாப்பு விவரங்கள்' : 'Step 1: Account & Credentials'}</span>
            </h2>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'மின்னஞ்சல் முகவரி (Email Address) *' : 'Email Address *'}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => handleChange('email', e.target.value)}
                placeholder="student.name@gmail.com"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                  errors.email ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.email && <p className="text-[11px] text-red-500 mt-1">{errors.email}</p>}
            </div>

            {/* 10-Digit Mobile with Simulated OTP (Section 3) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'கைப்பேசி எண் (10-Digit Indian Mobile) *' : 'Mobile Number (10-digit) *'}
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400">+91</span>
                  <input
                    type="tel"
                    maxLength={10}
                    value={formData.mobile}
                    onChange={(e) => handleChange('mobile', e.target.value.replace(/\D/g, ''))}
                    placeholder="9876543210"
                    className={`w-full pl-12 pr-3.5 py-2.5 text-xs rounded-xl border ${
                      errors.mobile ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setOtpSent(true);
                    setOtpCode('2026');
                  }}
                  disabled={formData.mobile.length !== 10 || isOtpVerified}
                  className="px-3 py-2 text-xs font-bold rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 disabled:opacity-50 transition-colors shrink-0"
                >
                  {isOtpVerified 
                    ? (isTa ? 'சரிபார்க்கப்பட்டது ✓' : 'Verified ✓') 
                    : otpSent 
                    ? (isTa ? 'OTP அனுப்பப்பட்டது' : 'Resend OTP') 
                    : (isTa ? 'OTP அனுப்புக' : 'Verify Mobile')}
                </button>
              </div>
              {errors.mobile && <p className="text-[11px] text-red-500 mt-1">{errors.mobile}</p>}

              {/* OTP Input Simulation */}
              {otpSent && !isOtpVerified && (
                <div className="mt-2.5 p-3 rounded-xl bg-blue-50/80 border border-blue-200 flex items-center justify-between gap-2">
                  <div>
                    <p className="text-[11px] font-bold text-blue-900">
                      {isTa ? 'மாதிரி OTP குறியீடு: 2026' : 'Enter OTP sent to mobile (Demo: 2026)'}
                    </p>
                    <input
                      type="text"
                      maxLength={4}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      className="mt-1 w-28 px-3 py-1 text-center font-mono font-bold text-xs bg-white rounded-lg border border-blue-300"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      if (otpCode === '2026') {
                        setIsOtpVerified(true);
                        setOtpSent(false);
                      } else {
                        alert('Enter 2026');
                      }
                    }}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs"
                  >
                    {isTa ? 'சரிபார்' : 'Verify OTP'}
                  </button>
                </div>
              )}
            </div>

            {/* Password with Strength Meter (Section 3) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'கடவுச்சொல் (Create Password - Min 8 chars) *' : 'Create Password (Min 8 chars) *'}
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={(e) => handleChange('password', e.target.value)}
                  placeholder="Min 8 characters, uppercase, symbol"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                    errors.password ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>

              {/* Strength Meter Bar */}
              {formData.password && (
                <div className="mt-1.5 flex flex-col gap-1">
                  <div className="flex items-center justify-between text-[10px] font-bold text-slate-500">
                    <span>Password Strength:</span>
                    <span className="font-extrabold">{strength.text}</span>
                  </div>
                  <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${strength.color}`} 
                      style={{ width: `${strength.score}%` }} 
                    />
                  </div>
                </div>
              )}
              {errors.password && <p className="text-[11px] text-red-500 mt-1">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'கடவுச்சொல்லை மீண்டும் உறுதிசெய்க *' : 'Confirm Password *'}
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={(e) => handleChange('confirmPassword', e.target.value)}
                  placeholder="Re-type password"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                    errors.confirmPassword ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500 pr-10`}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="text-[11px] text-red-500 mt-1">{errors.confirmPassword}</p>}
            </div>
          </div>
        )}

        {/* ================= STEP 2: STUDENT DETAILS & CLASS/GROUP SELECTION ================= */}
        {currentStep === 2 && (
          <div className="flex flex-col gap-4 animate-in fade-in">
            <h2 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <User className="w-4 h-4 text-blue-600" />
              <span>{isTa ? 'படி 2: மாணவர் மற்றும் வகுப்பு விவரங்கள்' : 'Step 2: Student & Class Details'}</span>
            </h2>

            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'மாணவர் முழுப் பெயர் (Student Full Name) *' : 'Student Full Name *'}
              </label>
              <input
                type="text"
                value={formData.fullName}
                onChange={(e) => handleChange('fullName', e.target.value)}
                placeholder="e.g. K. Selvamani"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                  errors.fullName ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.fullName && <p className="text-[11px] text-red-500 mt-1">{errors.fullName}</p>}
            </div>

            {/* DOB & Gender Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isTa ? 'பிறந்த தேதி (Date of Birth) *' : 'Date of Birth *'}
                </label>
                <input
                  type="date"
                  value={formData.dob}
                  onChange={(e) => handleChange('dob', e.target.value)}
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                    errors.dob ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.dob && <p className="text-[11px] text-red-500 mt-1">{errors.dob}</p>}
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isTa ? 'பாலினம் (Gender) *' : 'Gender *'}
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleChange('gender', e.target.value as Gender)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Female">{isTa ? 'பெண் (Female)' : 'Female'}</option>
                  <option value="Male">{isTa ? 'ஆண் (Male)' : 'Male'}</option>
                  <option value="Other">{isTa ? 'மற்றவை (Other)' : 'Other'}</option>
                </select>
              </div>
            </div>

            {/* Class Level Selector (9, 10, 11, 12) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'படிக்கும் வகுப்பு (Class) *' : 'Select Class (Samacheer Kalvi) *'}
              </label>
              <div className="grid grid-cols-4 gap-2">
                {([9, 10, 11, 12] as ClassLevel[]).map((cls) => (
                  <button
                    key={cls}
                    type="button"
                    onClick={() => {
                      handleChange('classLevel', cls);
                      handleChange('grade', `Grade ${cls}` as Grade);
                    }}
                    className={`py-2.5 rounded-xl text-xs font-black border transition-all ${
                      formData.classLevel === cls
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    Class {cls}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Group/Stream Selection for Class 11 and 12 (Section 3) */}
            {(formData.classLevel === 11 || formData.classLevel === 12) && (
              <div className="p-3.5 rounded-2xl bg-purple-50 border border-purple-200 flex flex-col gap-2">
                <label className="block text-xs font-black text-purple-900">
                  {isTa ? 'மேல்நிலை பாடப்பிரிவு (Class 11/12 Group) *' : 'Higher Secondary Group / Stream *'}
                </label>
                <select
                  value={formData.groupCode}
                  onChange={(e) => handleChange('groupCode', e.target.value)}
                  className="w-full px-3.5 py-2 text-xs rounded-xl border border-purple-300 bg-white font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {TN_GROUPS.map((g) => (
                    <option key={g.code} value={g.code}>
                      Group {g.code} ({g.stream}): {isTa ? g.nameTa : g.nameEn}
                    </option>
                  ))}
                </select>
                <p className="text-[11px] text-purple-700 font-semibold">
                  {isTa ? 'தேர்ந்தெடுக்கப்பட்ட பாடங்கள் தானாக உங்கள் முகப்பில் தோன்றும்.' : 'Your dashboard subjects will auto-populate from this group.'}
                </p>
              </div>
            )}

            {/* Preferred Language */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'விருப்ப பயிற்று மொழி (Preferred Medium) *' : 'Preferred Language *'}
              </label>
              <div className="grid grid-cols-2 gap-2">
                {(['Tamil', 'English'] as PreferredLang[]).map((pl) => (
                  <button
                    key={pl}
                    type="button"
                    onClick={() => handleChange('preferredLanguage', pl)}
                    className={`py-2 rounded-xl text-xs font-bold border transition-all ${
                      formData.preferredLanguage === pl
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                    }`}
                  >
                    {pl === 'Tamil' ? 'தமிழ் (Tamil Medium)' : 'English (English Medium)'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ================= STEP 3: SCHOOL & DISTRICT ================= */}
        {currentStep === 3 && (
          <div className="flex flex-col gap-4 animate-in fade-in">
            <h2 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <School className="w-4 h-4 text-blue-600" />
              <span>{isTa ? 'படி 3: பள்ளி மற்றும் மாவட்ட விவரங்கள்' : 'Step 3: School & District'}</span>
            </h2>

            {/* School Autocomplete & Manual */}
            <div>
              <SchoolSearchAutocomplete
                selectedSchoolName={formData.schoolName}
                selectedSchoolAddress={formData.schoolAddress || ''}
                selectedDistrict={formData.district}
                isManualSchool={formData.isManualSchool || false}
                onSelectSchool={handleSchoolSelect}
                onManualSchoolChange={(name, address) => {
                  handleChange('schoolName', name);
                  handleChange('schoolAddress', address);
                  handleChange('isManualSchool', true);
                }}
                onToggleManual={(isManual) => handleChange('isManualSchool', isManual)}
                errorMessage={errors.schoolName}
                addressErrorMessage={errors.schoolAddress}
                lang={lang}
              />
            </div>

            {/* District dropdown (All 38 TN Districts) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'மாவட்டம் (District - All 38 TN Districts) *' : 'District (Tamil Nadu) *'}
              </label>
              <select
                value={formData.district}
                onChange={(e) => handleChange('district', e.target.value)}
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500 font-medium"
              >
                {TN_DISTRICTS.map((dist) => (
                  <option key={dist} value={dist}>
                    {dist}
                  </option>
                ))}
              </select>
              {errors.district && <p className="text-[11px] text-red-500 mt-1">{errors.district}</p>}
            </div>

            {/* State */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'மாநிலம் (State)' : 'State'}
              </label>
              <input
                type="text"
                disabled
                value="Tamil Nadu"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-slate-100 text-slate-600 font-bold"
              />
            </div>
          </div>
        )}

        {/* ================= STEP 4: PARENT / GUARDIAN & DPDP ACT CONSENT ================= */}
        {currentStep === 4 && (
          <div className="flex flex-col gap-4 animate-in fade-in">
            <h2 className="text-sm font-black text-slate-900 border-b border-slate-100 pb-2 flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-blue-600" />
              <span>{isTa ? 'படி 4: பெற்றோர் விவரங்கள் மற்றும் சட்டப்பூர்வ ஒப்புதல்' : 'Step 4: Parent & DPDP Consent'}</span>
            </h2>

            {/* Parent Name */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'பெற்றோர் / பாதுகாவலர் பெயர் *' : 'Parent / Guardian Name *'}
              </label>
              <input
                type="text"
                value={formData.parentName}
                onChange={(e) => handleChange('parentName', e.target.value)}
                placeholder="e.g. M. Kumaravel"
                className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                  errors.parentName ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.parentName && <p className="text-[11px] text-red-500 mt-1">{errors.parentName}</p>}
            </div>

            {/* Relationship & Mobile */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isTa ? 'உறவுமுறை (Relationship) *' : 'Relationship *'}
                </label>
                <select
                  value={formData.parentRelationship}
                  onChange={(e) => handleChange('parentRelationship', e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Father">{isTa ? 'தந்தை (Father)' : 'Father'}</option>
                  <option value="Mother">{isTa ? 'தாய் (Mother)' : 'Mother'}</option>
                  <option value="Guardian">{isTa ? 'பாதுகாவலர் (Guardian)' : 'Guardian'}</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">
                  {isTa ? 'பெற்றோர் கைப்பேசி எண் *' : 'Parent Mobile Number *'}
                </label>
                <input
                  type="tel"
                  maxLength={10}
                  value={formData.parentMobile}
                  onChange={(e) => handleChange('parentMobile', e.target.value.replace(/\D/g, ''))}
                  placeholder="9444123456"
                  className={`w-full px-3.5 py-2.5 text-xs rounded-xl border ${
                    errors.parentMobile ? 'border-red-500 bg-red-50/50' : 'border-slate-300 bg-slate-50'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
                {errors.parentMobile && <p className="text-[11px] text-red-500 mt-1">{errors.parentMobile}</p>}
              </div>
            </div>

            {/* Parent Email (Optional) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">
                {isTa ? 'பெற்றோர் மின்னஞ்சல் (விருப்பத்தேர்வு)' : 'Parent Email (Optional)'}
              </label>
              <input
                type="email"
                value={formData.parentEmail || ''}
                onChange={(e) => handleChange('parentEmail', e.target.value)}
                placeholder="parent@example.com"
                className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-300 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* DPDP Act 2023 Parental Consent Box (Section 3) */}
            <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 flex flex-col gap-2">
              <div className="flex items-start gap-2.5">
                <input
                  type="checkbox"
                  id="parentConsent"
                  checked={formData.parentConsent}
                  onChange={(e) => handleChange('parentConsent', e.target.checked)}
                  className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                />
                <label htmlFor="parentConsent" className="text-xs text-slate-800 font-semibold leading-relaxed cursor-pointer">
                  {isTa ? (
                    <>
                      <strong>பெற்றோர் ஒப்புதல் மற்றும் தரவுப் பாதுகாப்பு அறிவிப்பு (DPDP சட்டம் 2023):</strong> எனது குழந்தை eduVoice தளத்தில் பயில்வதற்கும், கற்றல் முன்னேற்றம் மற்றும் வினாடி வினா மதிப்பெண்களைக் கண்காணிக்கத் தேவையான கல்வித் தரவுகளை சேமிப்பதற்கும் முழு ஒப்புதல் அளிக்கிறேன்.
                    </>
                  ) : (
                    <>
                      <strong>Parental Consent & DPDP Act 2023 Disclosure:</strong> I confirm that I am the parent/legal guardian and give consent for my child to access eduVoice. Learning performance and quiz analytics will be stored solely for educational personalization in compliance with India's Digital Personal Data Protection Act 2023.
                    </>
                  )}
                </label>
              </div>
              {errors.parentConsent && <p className="text-[11px] text-red-500 font-bold">{errors.parentConsent}</p>}
            </div>

            {/* Terms and Conditions */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="agreeTerms"
                checked={formData.agreeTerms}
                onChange={(e) => handleChange('agreeTerms', e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
              />
              <label htmlFor="agreeTerms" className="text-xs text-slate-600 cursor-pointer">
                {isTa ? 'நான் eduVoice சேவை விதிகள் மற்றும் நிபந்தனைகளை ஏற்கிறேன்.' : 'I agree to the Terms of Service & Privacy Policy.'}
              </label>
            </div>
            {errors.agreeTerms && <p className="text-[11px] text-red-500">{errors.agreeTerms}</p>}
          </div>
        )}

        {/* Stepper Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-slate-100">
          {currentStep > 1 ? (
            <button
              type="button"
              onClick={handlePrevStep}
              className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 text-xs font-bold flex items-center gap-1.5 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isTa ? 'முந்தைய படி' : 'Back'}</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={onSwitchToSignIn}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              {isTa ? 'ஏற்கனவே கணக்கு உள்ளதா? உள்நுழைக' : 'Already have account? Sign in'}
            </button>
          )}

          {currentStep < 4 ? (
            <button
              type="button"
              onClick={handleNextStep}
              className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-black shadow-md flex items-center gap-1.5 transition-all"
            >
              <span>{isTa ? 'அடுத்த படி' : 'Continue'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-black shadow-md flex items-center gap-2 transition-all cursor-pointer"
            >
              {isSubmitting ? (
                <span>{isTa ? 'பதிவு செய்யப்படுகிறது...' : 'Registering...'}</span>
              ) : (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isTa ? 'பதிவை முடிக்க (Complete Registration)' : 'Complete Sign-Up'}</span>
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
