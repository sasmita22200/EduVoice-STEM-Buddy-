import React, { useState, useEffect } from 'react';
import { 
  Mail, 
  Phone, 
  Lock, 
  Eye, 
  EyeOff, 
  LogIn, 
  Languages, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight,
  ShieldCheck,
  Zap,
  GraduationCap,
  Users,
  Heart,
  School,
  KeyRound,
  Check
} from 'lucide-react';
import { Language, StudentProfile, UserRole } from '../types';
import { AppViewType } from './AndroidFrame';
import { TRANSLATIONS } from '../data/translations';
import { EduVoiceLogo } from './EduVoiceLogo';
import { ForgotPasswordModal } from './ForgotPasswordModal';

interface LoginScreenProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSwitchToSignUp: () => void;
  onLoginSuccess?: (profile: StudentProfile, targetView?: AppViewType) => void;
}

// Pre-configured mock profiles for instant evaluation across all roles
interface DemoAccount {
  id: string;
  role: UserRole;
  roleLabelTa: string;
  roleLabelEn: string;
  badge: string;
  badgeColor: string;
  identifier: string;
  password: string;
  targetView: AppViewType;
  profile: StudentProfile;
}

const DEMO_ACCOUNTS: DemoAccount[] = [
  {
    id: 'student10',
    role: 'student',
    roleLabelTa: 'மாணவர் (வகுப்பு 10)',
    roleLabelEn: 'Student (Class 10)',
    badge: '10th Board',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    identifier: 'selvamani.student@gmail.com',
    password: 'TamilNadu@2026',
    targetView: 'studentDashboard',
    profile: {
      studentId: 'EDU-TN-2026-9812',
      fullName: 'K. Selvamani',
      role: 'student',
      email: 'selvamani.student@gmail.com',
      mobile: '9876543210',
      grade: 'Class 10',
      classLevel: 10,
      schoolName: 'Govt Model Higher Secondary School, Triplicane',
      schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
      isManualSchool: false,
      verificationStatus: 'School Verified',
      district: 'Chennai',
      state: 'Tamil Nadu',
      language: 'ta',
      avatarSeed: 'Selvamani',
      parentName: 'M. Kumaravel',
      parentMobile: '9444123456'
    }
  },
  {
    id: 'student12',
    role: 'student',
    roleLabelTa: 'மாணவர் (வகுப்பு 12)',
    roleLabelEn: 'Student (Class 12)',
    badge: '12th STEM',
    badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
    identifier: 'kavitha.class12@gmail.com',
    password: 'TamilNadu@2026',
    targetView: 'studentDashboard',
    profile: {
      studentId: 'EDU-TN-2026-1204',
      fullName: 'S. Kavitha',
      role: 'student',
      email: 'kavitha.class12@gmail.com',
      mobile: '9840123456',
      grade: 'Class 12',
      classLevel: 12,
      groupCode: 'bio_maths',
      groupNameEn: 'Physics, Chemistry, Biology, Mathematics',
      groupNameTa: 'இயற்பியல், வேதியியல், உயிரியல், கணிதம்',
      schoolName: 'Govt Higher Secondary School, Madurai West',
      schoolAddress: 'Melur Main Road, Madurai - 625020',
      isManualSchool: false,
      verificationStatus: 'School Verified',
      district: 'Madurai',
      state: 'Tamil Nadu',
      language: 'ta',
      avatarSeed: 'Kavitha',
      parentName: 'S. Sundaram',
      parentMobile: '9840998877'
    }
  },
  {
    id: 'teacher',
    role: 'teacher',
    roleLabelTa: 'ஆசிரியர் (PGT Science)',
    roleLabelEn: 'Teacher (PGT Science)',
    badge: 'Teacher',
    badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    identifier: 'malathi.teacher@tnschools.gov.in',
    password: 'Teacher@2026',
    targetView: 'teacherPortal',
    profile: {
      studentId: 'TCH-TN-7821',
      fullName: 'Mrs. Malathi Rajendran',
      role: 'teacher',
      email: 'malathi.teacher@tnschools.gov.in',
      mobile: '9443123890',
      grade: 'PGT Physics & Science',
      classLevel: 10,
      schoolName: 'Govt Model Higher Secondary School, Triplicane',
      schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
      isManualSchool: false,
      verificationStatus: 'School Verified',
      district: 'Chennai',
      state: 'Tamil Nadu',
      language: 'ta',
      avatarSeed: 'Malathi'
    }
  },
  {
    id: 'parent',
    role: 'parent',
    roleLabelTa: 'பெற்றோர் (Guardian)',
    roleLabelEn: 'Parent (Guardian)',
    badge: 'Parent',
    badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
    identifier: 'kumaravel.parent@gmail.com',
    password: 'Parent@2026',
    targetView: 'parentPortal',
    profile: {
      studentId: 'PAR-TN-4412',
      fullName: 'M. Kumaravel',
      role: 'parent',
      email: 'kumaravel.parent@gmail.com',
      mobile: '9444123456',
      grade: 'Guardian of K. Selvamani',
      classLevel: 10,
      schoolName: 'Govt Model Higher Secondary School, Triplicane',
      schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
      isManualSchool: false,
      verificationStatus: 'School Verified',
      district: 'Chennai',
      state: 'Tamil Nadu',
      language: 'ta',
      avatarSeed: 'Kumaravel'
    }
  },
  {
    id: 'admin',
    role: 'admin',
    roleLabelTa: 'நிர்வாகி (HM / DEO)',
    roleLabelEn: 'School Admin / HM',
    badge: 'Admin',
    badgeColor: 'bg-slate-200 text-slate-800 border-slate-300',
    identifier: 'admin.triplicane@tnschools.gov.in',
    password: 'Admin@2026',
    targetView: 'adminPortal',
    profile: {
      studentId: 'ADM-TN-001',
      fullName: 'Dr. R. Subramanian',
      role: 'admin',
      email: 'admin.triplicane@tnschools.gov.in',
      mobile: '9003124567',
      grade: 'Headmaster / Admin',
      classLevel: 12,
      schoolName: 'Govt Model Higher Secondary School, Triplicane',
      schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
      isManualSchool: false,
      verificationStatus: 'School Verified',
      district: 'Chennai',
      state: 'Tamil Nadu',
      language: 'ta',
      avatarSeed: 'Subramanian'
    }
  }
];

export const LoginScreen: React.FC<LoginScreenProps> = ({
  language,
  onLanguageChange,
  onSwitchToSignUp,
  onLoginSuccess
}) => {
  const safeLang: Language = language === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[safeLang] || TRANSLATIONS.ta;
  const isTa = safeLang === 'ta';

  // Active Role Tab
  const [selectedRole, setSelectedRole] = useState<UserRole>('student');

  // Form State
  const [identifier, setIdentifier] = useState('selvamani.student@gmail.com');
  const [password, setPassword] = useState('TamilNadu@2026');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ identifier?: boolean; password?: boolean }>({});

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

  // Load remembered credentials on mount
  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('eduvoice_remembered_user');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed.identifier) setIdentifier(parsed.identifier);
      }
    } catch {
      // Ignore localStorage errors in iframe
    }
  }, []);

  // Text-To-Speech Audio Instruction
  const handleToggleVoiceHelp = () => {
    if (!('speechSynthesis' in window)) {
      alert(isTa ? 'உங்கள் உலாவியில் குரல் வசதி இல்லை' : 'Voice synthesizer not supported on this browser');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }

    const textToSpeak = isTa
      ? 'வணக்கம்! எஜுவாய்ஸ் STEM படி உள்நுழைவுப் பக்கத்திற்கு நல்வரவு. உங்கள் மின்னஞ்சல், கைபேசி எண் அல்லது மாணவர் அடையாள எண்ணை உள்ளிட்டு கடவுச்சொல்லுடன் உள்நுழையவும்.'
      : 'Welcome to EduVoice STEM Buddy login. Enter your email, mobile number, or student ID and password to access your dashboard.';

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = isTa ? 'ta-IN' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Switch Role tab and pre-fill credentials for easy testing
  const handleSelectRoleTab = (role: UserRole) => {
    setSelectedRole(role);
    const demo = DEMO_ACCOUNTS.find(a => a.role === role);
    if (demo) {
      setIdentifier(demo.identifier);
      setPassword(demo.password);
      setErrors({});
      setTouched({});
    }
  };

  // Instant 1-Click Demo Login
  const handleInstantDemoLogin = (demo: DemoAccount) => {
    setIdentifier(demo.identifier);
    setPassword(demo.password);
    setSelectedRole(demo.role);
    setErrors({});
    setTouched({ identifier: true, password: true });

    setIsLoading(true);
    setSuccessToast(
      isTa 
        ? `${demo.profile.fullName} கணக்கில் உள்நுழைகிறது...` 
        : `Logging in as ${demo.profile.fullName}...`
    );

    setTimeout(() => {
      setIsLoading(false);
      if (rememberMe) {
        try {
          localStorage.setItem('eduvoice_remembered_user', JSON.stringify({ identifier: demo.identifier }));
        } catch {
          // Ignore
        }
      }
      if (onLoginSuccess) {
        onLoginSuccess(demo.profile, demo.targetView);
      }
    }, 500);
  };

  // Smart Identifier Validation: Accepts Email, 10-digit Phone, or Student ID / EMIS
  const validateIdentifier = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return t.errors.required;
    }

    // Email check
    if (trimmed.includes('@')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) {
        return t.errors.invalidEmail;
      }
      return undefined;
    }

    // Pure numeric mobile or EMIS check
    const digitsOnly = trimmed.replace(/\D/g, '');
    if (/^\+?\d+[\d\s-]*$/.test(trimmed)) {
      if (digitsOnly.length < 10) {
        return isTa 
          ? 'குறைந்தது 10 இலக்க கைபேசி எண் அல்லது EMIS எண் உள்ளிடவும்' 
          : 'Enter at least 10-digit mobile or EMIS number';
      }
      return undefined;
    }

    // Student ID / Username / Roll No check (e.g., EDU-TN-2026-9812, selvam, admin)
    if (trimmed.length < 3) {
      return isTa 
        ? 'சரியான மாணவர் எண் அல்லது பயனர்பெயர் உள்ளிடவும்' 
        : 'Enter valid student ID or username (min 3 chars)';
    }

    return undefined;
  };

  // Password Validation
  const validatePassword = (val: string): string | undefined => {
    if (!val) {
      return t.errors.required;
    }
    if (val.length < 6) {
      return t.errors.incorrectPassword;
    }
    return undefined;
  };

  const handleIdentifierChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setIdentifier(val);
    if (touched.identifier) {
      setErrors((prev) => ({ ...prev, identifier: validateIdentifier(val) }));
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setPassword(val);
    if (touched.password) {
      setErrors((prev) => ({ ...prev, password: validatePassword(val) }));
    }
  };

  const handleBlur = (field: 'identifier' | 'password') => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    if (field === 'identifier') {
      setErrors((prev) => ({ ...prev, identifier: validateIdentifier(identifier) }));
    }
    if (field === 'password') {
      setErrors((prev) => ({ ...prev, password: validatePassword(password) }));
    }
  };

  // Form Submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const idError = validateIdentifier(identifier);
    const passError = validatePassword(password);

    setTouched({ identifier: true, password: true });
    setErrors({
      identifier: idError,
      password: passError
    });

    if (idError || passError) {
      return;
    }

    setIsLoading(true);

    // Find if credentials match any known demo account
    const matchedAccount = DEMO_ACCOUNTS.find(
      a => a.identifier.toLowerCase() === identifier.trim().toLowerCase()
    );

    setTimeout(() => {
      setIsLoading(false);

      if (rememberMe) {
        try {
          localStorage.setItem('eduvoice_remembered_user', JSON.stringify({ identifier: identifier.trim() }));
        } catch {
          // Ignore
        }
      }

      if (matchedAccount) {
        setSuccessToast(
          isTa 
            ? `வணக்கம் ${matchedAccount.profile.fullName}! உள்நுழைவு வெற்றிகரமானது.` 
            : `Welcome back, ${matchedAccount.profile.fullName}! Signed in successfully.`
        );
        if (onLoginSuccess) {
          onLoginSuccess(matchedAccount.profile, matchedAccount.targetView);
        }
      } else {
        // Fallback default student profile for custom entered credentials
        const customProfile: StudentProfile = {
          studentId: 'EDU-TN-2026-USER',
          fullName: identifier.includes('@') ? identifier.split('@')[0] : 'Selvamani',
          role: selectedRole,
          email: identifier.includes('@') ? identifier : 'student@tnschools.gov.in',
          mobile: /^\d+$/.test(identifier) ? identifier : '9876543210',
          grade: selectedRole === 'student' ? 'Class 10' : selectedRole === 'teacher' ? 'PGT Science' : 'Parent',
          classLevel: 10,
          schoolName: 'Govt Model Higher Secondary School, Triplicane',
          schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
          isManualSchool: false,
          verificationStatus: 'School Verified',
          district: 'Chennai',
          state: 'Tamil Nadu',
          language: safeLang,
          avatarSeed: 'CustomUser'
        };

        const targetView: AppViewType = 
          selectedRole === 'teacher' ? 'teacherPortal' :
          selectedRole === 'parent' ? 'parentPortal' :
          selectedRole === 'admin' ? 'adminPortal' : 'studentDashboard';

        setSuccessToast(isTa ? 'உள்நுழைவு வெற்றிகரமானது! வழிசெலுத்தப்படுகிறது...' : 'Login successful! Redirecting to dashboard...');
        if (onLoginSuccess) {
          onLoginSuccess(customProfile, targetView);
        }
      }
    }, 550);
  };

  // Google Login Simulation
  const handleGoogleLogin = () => {
    setIsLoading(true);
    const googleAccount = DEMO_ACCOUNTS[0]; // K. Selvamani
    setSuccessToast(isTa ? 'கூகுள் கணக்கு சரிபார்க்கப்பட்டது!' : 'Google account authenticated!');

    setTimeout(() => {
      setIsLoading(false);
      setIdentifier('selvamani.student@gmail.com');
      if (onLoginSuccess) {
        onLoginSuccess(googleAccount.profile, 'studentDashboard');
      }
    }, 600);
  };

  // Determine which icon to display based on identifier
  const isEmailInput = identifier.includes('@');
  const isPhoneInput = /^\+?\d[\d\s-]*$/.test(identifier.trim());

  return (
    <div className="w-full max-w-xl mx-auto bg-white/95 backdrop-blur-2xl rounded-3xl p-4 sm:p-7 shadow-xl border border-slate-200/80 my-2 relative overflow-hidden text-slate-800">
      {/* Decorative gradient accents */}
      <div className="absolute top-0 right-0 w-60 h-60 bg-gradient-to-bl from-blue-400/10 via-indigo-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-gradient-to-tr from-emerald-400/10 via-teal-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Top Header Bar: Language Switcher, Voice Guide & TN Badge */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-3 mb-4 relative z-10">
        {/* Language Switcher */}
        <div className="flex items-center bg-slate-100 p-1 rounded-2xl border border-slate-200 shadow-2xs">
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
              language === 'en'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            English
          </button>
          <button
            type="button"
            onClick={() => onLanguageChange('ta')}
            className={`px-3 py-1 text-xs font-black rounded-xl transition-all cursor-pointer ${
              language === 'ta'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            தமிழ்
          </button>
        </div>

        {/* Action Controls: Audio Voice Assistance */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleToggleVoiceHelp}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold border transition-all cursor-pointer shadow-2xs ${
              isSpeaking
                ? 'bg-red-500 text-white border-red-400 animate-pulse'
                : 'bg-emerald-50 text-emerald-800 border-emerald-300 hover:bg-emerald-100 active:scale-95'
            }`}
            title={t.audioHelpLogin}
          >
            {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-600" />}
            <span>{isSpeaking ? (isTa ? 'நிறுத்து' : 'Stop') : (isTa ? 'குரல் உதவி' : 'Voice Help')}</span>
          </button>

          <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
            <School className="w-3 h-3 text-blue-600" />
            <span>TN Samacheer</span>
          </span>
        </div>
      </div>

      {/* Success Toast */}
      {successToast && (
        <div className="mb-4 p-3 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-bold flex items-center gap-2 shadow-xs animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* Brand Header */}
      <div className="text-center mb-5">
        <EduVoiceLogo lang={language} variant="header" />
        <div className="mt-3">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
            <span>{isTa ? 'வணக்கம்! மீண்டும் வருக' : 'Welcome Back'}</span>
            <span className="inline-block animate-bounce">👋</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto font-medium">
            {isTa 
              ? 'உங்கள் STEM AI கற்றல் கணக்கில் உள்நுழைக (வகுப்புகள் 9–12)' 
              : 'Sign in to access your bilingual AI STEM learning dashboard'}
          </p>
        </div>
      </div>

      {/* Role Selection Tabs */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <label className="text-xs font-black text-slate-700 uppercase tracking-wider flex items-center gap-1">
            <span>{isTa ? 'பயனர் வகை (Select Role)' : 'Select User Role'}</span>
          </label>
          <span className="text-[11px] text-blue-600 font-bold">
            {isTa ? '1-கிளிக் மாதிரி கணக்குகள்' : '1-Click Demo Profiles'}
          </span>
        </div>

        <div className="grid grid-cols-4 gap-1.5 p-1 bg-slate-100/90 rounded-2xl border border-slate-200">
          <button
            type="button"
            onClick={() => handleSelectRoleTab('student')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedRole === 'student'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span className="text-[11px]">{isTa ? 'மாணவர்' : 'Student'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectRoleTab('teacher')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedRole === 'teacher'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Users className="w-4 h-4" />
            <span className="text-[11px]">{isTa ? 'ஆசிரியர்' : 'Teacher'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectRoleTab('parent')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedRole === 'parent'
                ? 'bg-rose-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <Heart className="w-4 h-4" />
            <span className="text-[11px]">{isTa ? 'பெற்றோர்' : 'Parent'}</span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectRoleTab('admin')}
            className={`py-2 px-1 text-center rounded-xl text-xs font-bold transition-all cursor-pointer flex flex-col items-center gap-0.5 ${
              selectedRole === 'admin'
                ? 'bg-slate-900 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span className="text-[11px]">{isTa ? 'நிர்வாகி' : 'Admin'}</span>
          </button>
        </div>
      </div>

      {/* Quick 1-Click Evaluator Demo Accounts Banner */}
      <div className="mb-5 p-3 rounded-2xl bg-gradient-to-r from-blue-50/90 via-indigo-50/90 to-purple-50/90 border border-blue-200/90 space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs font-black text-blue-950">
            <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span>{isTa ? 'உடனடி மாதிரி உள்நுழைவு (Fast Demo)' : 'Instant 1-Click Demo Login'}</span>
          </div>
          <span className="text-[10px] text-blue-700 font-bold bg-white px-2 py-0.5 rounded-full border border-blue-200">
            Evaluator Mode
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 pt-0.5">
          {DEMO_ACCOUNTS.map((acc) => (
            <button
              key={acc.id}
              type="button"
              onClick={() => handleInstantDemoLogin(acc)}
              className="p-2 rounded-xl bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-left transition-all cursor-pointer shadow-2xs hover:shadow-xs group"
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[9px] font-black px-1.5 py-0.2 rounded border ${acc.badgeColor}`}>
                  {acc.badge}
                </span>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <p className="text-[11px] font-black text-slate-800 truncate">
                {acc.profile.fullName}
              </p>
              <p className="text-[10px] text-slate-500 truncate">
                {isTa ? acc.roleLabelTa : acc.roleLabelEn}
              </p>
            </button>
          ))}
        </div>
      </div>

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Field 1: Email / Mobile / Student ID */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label 
              htmlFor="login-identifier"
              className="text-xs font-black text-slate-800 flex items-center gap-1"
            >
              <span>{isTa ? 'மின்னஞ்சல் / கைபேசி / மாணவர் EMIS எண்' : 'Email / Mobile / Student ID'}</span>
              <span className="text-red-500 font-black">*</span>
            </label>
            <span className="text-[11px] text-slate-400 font-medium">
              {isTa ? 'தமிழ்நாடு அரசுப் பள்ளி EMIS' : 'Govt / Private School'}
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              {isEmailInput ? (
                <Mail className="w-4 h-4 text-blue-600" />
              ) : isPhoneInput ? (
                <Phone className="w-4 h-4 text-emerald-600" />
              ) : (
                <GraduationCap className="w-4 h-4 text-purple-600" />
              )}
            </div>

            <input
              id="login-identifier"
              type="text"
              value={identifier}
              onChange={handleIdentifierChange}
              onBlur={() => handleBlur('identifier')}
              placeholder={isTa ? 'எ.கா: selvamani.student@gmail.com அல்லது 9876543210' : 'e.g., student@gmail.com, 9876543210, or EDU-TN-9812'}
              className={`
                w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white rounded-xl border transition-all outline-none
                placeholder:text-slate-400 placeholder:text-xs font-medium shadow-2xs
                ${
                  errors.identifier
                    ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100 bg-red-50/20'
                    : touched.identifier && identifier && !errors.identifier
                    ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 bg-emerald-50/15'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100'
                }
              `}
              autoComplete="username"
              required
            />

            {touched.identifier && !errors.identifier && identifier && (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              </div>
            )}
          </div>

          {errors.identifier ? (
            <p className="text-[11px] text-red-600 font-bold mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.identifier}</span>
            </p>
          ) : (
            <p className="text-[10px] text-slate-500 mt-1">
              {isTa 
                ? 'உங்கள் பள்ளியில் பதிவு செய்த ஜிமெயில், தொலைபேசி அல்லது EMIS எண்ணை உள்ளிடவும்.' 
                : 'Enter your registered Gmail, 10-digit mobile, or official TN EMIS ID.'}
            </p>
          )}
        </div>

        {/* Field 2: Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label 
              htmlFor="login-password"
              className="text-xs font-black text-slate-800 flex items-center gap-1"
            >
              <span>{t.fields.password.label}</span>
              <span className="text-red-500 font-black">*</span>
            </label>

            <button
              type="button"
              onClick={() => setIsForgotPasswordOpen(true)}
              className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors cursor-pointer"
            >
              {t.forgotPassword}
            </button>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Lock className="w-4 h-4 text-slate-400" />
            </div>

            <input
              id="login-password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={handlePasswordChange}
              onBlur={() => handleBlur('password')}
              placeholder={t.fields.password.placeholder}
              className={`
                w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white rounded-xl border transition-all outline-none
                placeholder:text-slate-400 placeholder:text-xs font-medium shadow-2xs
                ${
                  errors.password
                    ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100 bg-red-50/20'
                    : touched.password && password && password.length >= 6
                    ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100 bg-emerald-50/15'
                    : 'border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100'
                }
              `}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-700 cursor-pointer"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {errors.password ? (
            <p className="text-[11px] text-red-600 font-bold mt-1 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.password}</span>
            </p>
          ) : (
            <p className="text-[10px] text-slate-500 mt-1">
              {isTa ? 'குறைந்தது 6 எழுத்துகள் கொண்ட உங்கள் பாதுகாப்பான கடவுச்சொல்.' : 'Minimum 6 characters.'}
            </p>
          )}
        </div>

        {/* Options: Remember Me & Security Badge */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
            />
            <span className="text-xs font-bold text-slate-700 group-hover:text-slate-900 transition-colors">
              {t.rememberMe}
            </span>
          </label>

          <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
            <ShieldCheck className="w-3 h-3 text-emerald-600" />
            <span>256-Bit SSL</span>
          </span>
        </div>

        {/* Submit Actions */}
        <div className="space-y-2.5 pt-2">
          {/* Primary Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-700 hover:via-indigo-700 hover:to-emerald-700 text-white font-black text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{isTa ? 'சரிபார்க்கிறது...' : 'Authenticating...'}</span>
              </div>
            ) : (
              <>
                <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{isTa ? 'உள்நுழைக (Sign In)' : 'Sign In to Dashboard'}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-slate-200 w-full" />
            <span className="bg-white px-3 text-[11px] font-black text-slate-400 uppercase tracking-wider rounded-full border border-slate-200">
              {isTa ? 'அல்லது' : 'OR'}
            </span>
          </div>

          {/* Google Sign-In Button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-2.5 px-4 rounded-2xl bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs sm:text-sm border border-slate-300 shadow-2xs hover:shadow-xs transition-all flex items-center justify-center gap-3 cursor-pointer active:scale-98"
          >
            {/* Google SVG */}
            <svg className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              />
            </svg>
            <span>{isTa ? 'கூகுள் வகுப்பறை வழியாக உள்நுழைக' : 'Continue with Google Classroom'}</span>
          </button>
        </div>
      </form>

      {/* Switch to Sign Up */}
      <div className="mt-5 pt-4 border-t border-slate-200/80 text-center">
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {isTa ? 'புதிய மாணவரா அல்லது கணக்கு இல்லையா?' : "Don't have a student account yet?"}{' '}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="text-blue-600 hover:text-blue-800 font-black underline underline-offset-2 transition-colors cursor-pointer ml-1 inline-flex items-center gap-0.5"
          >
            <span>{isTa ? 'இலவச கணக்கை உருவாக்கு (Sign Up)' : 'Create Free Account'}</span>
            <ArrowRight className="w-3.5 h-3.5 inline" />
          </button>
        </p>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        lang={language}
        onSuccessReset={(resetId) => {
          setIdentifier(resetId);
          setPassword('NewPassword@2026');
          setSuccessToast(isTa ? 'கடவுச்சொல் புதுப்பிக்கப்பட்டது! உள்நுழையலாம்.' : 'Password reset! Credentials filled.');
          setTimeout(() => setSuccessToast(null), 4000);
        }}
      />
    </div>
  );
};
