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
  Zap
} from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { EduVoiceLogo } from './EduVoiceLogo';
import { IllustrationBanner } from './IllustrationBanner';
import { ForgotPasswordModal } from './ForgotPasswordModal';
import { StudentDashboardModal } from './StudentDashboardModal';

interface LoginScreenProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onSwitchToSignUp: () => void;
}

export const LoginScreen: React.FC<LoginScreenProps> = ({
  language,
  onLanguageChange,
  onSwitchToSignUp
}) => {
  const safeLang: Language = language === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[safeLang] || TRANSLATIONS.ta;
  const isTa = safeLang === 'ta';

  // Form State
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  // Validation Errors
  const [errors, setErrors] = useState<{ identifier?: string; password?: string }>({});
  const [touched, setTouched] = useState<{ identifier?: boolean; password?: boolean }>({});

  // UI state
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isForgotPasswordOpen, setIsForgotPasswordOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [successToast, setSuccessToast] = useState<string | null>(null);

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

    const textToSpeak = t.voiceLoginInstruction;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = isTa ? 'ta-IN' : 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  // Quick Demo Auto-fill
  const handleAutoFillDemo = () => {
    setIdentifier('selvam.student@gmail.com');
    setPassword('TamilNadu@2026');
    setErrors({});
    setTouched({ identifier: true, password: true });
    setSuccessToast(isTa ? 'மாதிரி மாணவர் விவரங்கள் நிரப்பப்பட்டன!' : 'Demo student credentials loaded!');
    setTimeout(() => setSuccessToast(null), 3000);
  };

  // Real-time Identifier Validation
  const validateIdentifier = (val: string): string | undefined => {
    const trimmed = val.trim();
    if (!trimmed) {
      return t.errors.required;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    // If it has letters or @, treat as email
    if (/[a-zA-Z@]/.test(trimmed)) {
      if (!emailRegex.test(trimmed)) {
        return t.errors.invalidEmail;
      }
    } else {
      // Treat as phone number
      if (!phoneRegex.test(trimmed)) {
        return t.errors.invalidMobile;
      }
    }

    return undefined;
  };

  // Real-time Password Validation
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
    setTimeout(() => {
      setIsLoading(false);
      setIsDashboardOpen(true);
    }, 600);
  };

  // Handle Google Login Simulation
  const handleGoogleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIdentifier('student.google@gmail.com');
      setIsDashboardOpen(true);
    }, 800);
  };

  const isEmailInput = identifier.includes('@');
  const isPhoneInput = /^[0-9+]+$/.test(identifier.trim());

  return (
    <div className="w-full bg-white/75 backdrop-blur-2xl rounded-3xl p-4 sm:p-6 shadow-2xl border border-white/80 my-1 relative overflow-hidden text-slate-800">
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-blue-400/10 via-emerald-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-emerald-400/10 via-indigo-400/10 to-transparent rounded-full blur-2xl pointer-events-none" />

      {/* Top Controls: Language Switcher, Voice Help & Quick Demo */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/60 pb-3 mb-3 relative z-10">
        {/* Language Switch Toggle */}
        <div className="flex items-center bg-slate-100/90 backdrop-blur-md p-1 rounded-2xl border border-slate-200/70 shadow-2xs">
          <button
            type="button"
            onClick={() => onLanguageChange('en')}
            className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
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
            className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${
              language === 'ta'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            தமிழ்
          </button>
        </div>

        {/* Action Buttons: Voice Help & Quick Auto-Fill */}
        <div className="flex items-center gap-1.5">
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
            <span className="hidden sm:inline">{isSpeaking ? 'Stop' : t.audioHelpLogin}</span>
            <span className="sm:hidden">{isSpeaking ? 'Stop' : 'Voice'}</span>
          </button>

          <button
            type="button"
            onClick={handleAutoFillDemo}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100 text-xs font-bold border border-blue-200 shadow-2xs transition-all cursor-pointer active:scale-95"
            title="Auto-fill demo credentials"
          >
            <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>{t.demoFillLoginBtn}</span>
          </button>
        </div>
      </div>

      {/* Success Toast */}
      {successToast && (
        <div className="mb-3 p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
          <span>{successToast}</span>
        </div>
      )}

      {/* EduVoice / STEM Buddy Logo & Tagline */}
      <EduVoiceLogo lang={language} />

      {/* Subtle Illustration Banner with Books, AI Chatbot, Science, Math, Voice Learning */}
      <IllustrationBanner lang={language} />

      {/* Header & Subtitle */}
      <div className="text-center my-4">
        <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center justify-center gap-2">
          <span>{t.loginHeader}</span>
          <span className="inline-block animate-bounce">👋</span>
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-sm mx-auto font-medium">
          {t.loginSubtitle}
        </p>
      </div>

      {/* Main Login Form */}
      <form onSubmit={handleSubmit} className="space-y-4 text-left">
        {/* Field 1: Email Address or Mobile Number */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label 
              htmlFor="login-identifier"
              className="text-xs font-bold text-slate-800 flex items-center gap-1"
            >
              <span>{t.fields.identifier.label}</span>
              <span className="text-red-500 font-bold">*</span>
            </label>
            <span className="text-[11px] text-slate-400 font-medium">
              {isTa ? 'மின்னஞ்சல் / கைபேசி' : 'Email / Mobile'}
            </span>
          </div>

          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              {isEmailInput ? (
                <Mail className="w-4 h-4 text-blue-600" />
              ) : isPhoneInput ? (
                <Phone className="w-4 h-4 text-emerald-600" />
              ) : (
                <Mail className="w-4 h-4 text-slate-400" />
              )}
            </div>

            <input
              id="login-identifier"
              type="text"
              value={identifier}
              onChange={handleIdentifierChange}
              onBlur={() => handleBlur('identifier')}
              placeholder={t.fields.identifier.placeholder}
              className={`
                w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none
                placeholder:text-slate-400 placeholder:text-xs font-medium
                ${
                  errors.identifier
                    ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/30'
                    : touched.identifier && identifier
                    ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100/50 bg-emerald-50/20'
                    : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50 focus:bg-white/90 shadow-2xs'
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
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1 animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.identifier}</span>
            </p>
          ) : (
            <p className="text-[10px] text-slate-500 mt-1">
              {t.fields.identifier.hint}
            </p>
          )}
        </div>

        {/* Field 2: Password */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label 
              htmlFor="login-password"
              className="text-xs font-bold text-slate-800 flex items-center gap-1"
            >
              <span>{t.fields.password.label}</span>
              <span className="text-red-500 font-bold">*</span>
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
                w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none
                placeholder:text-slate-400 placeholder:text-xs font-medium
                ${
                  errors.password
                    ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/30'
                    : touched.password && password && password.length >= 6
                    ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100/50 bg-emerald-50/20'
                    : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50 focus:bg-white/90 shadow-2xs'
                }
              `}
              autoComplete="current-password"
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 cursor-pointer"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {errors.password ? (
            <p className="text-[11px] text-red-600 font-semibold mt-1 flex items-center gap-1 animate-fadeIn">
              <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{errors.password}</span>
            </p>
          ) : (
            <p className="text-[10px] text-slate-500 mt-1">
              {t.fields.password.hint}
            </p>
          )}
        </div>

        {/* Additional Options: Remember Me Checkbox */}
        <div className="flex items-center justify-between pt-1">
          <label className="flex items-center gap-2 cursor-pointer select-none group">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded-md border-slate-300 focus:ring-blue-500 cursor-pointer accent-blue-600"
            />
            <span className="text-xs font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">
              {t.rememberMe}
            </span>
          </label>

          <span className="text-[11px] text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            🔒 256-Bit SSL
          </span>
        </div>

        {/* Action Buttons: Primary Login & Secondary Google */}
        <div className="space-y-2.5 pt-2">
          {/* Primary Button: Login */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-700 hover:via-indigo-700 hover:to-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-98 disabled:opacity-75"
          >
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <LogIn className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{t.buttons.login}</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </>
            )}
          </button>

          {/* Divider */}
          <div className="relative flex items-center justify-center my-3">
            <div className="border-t border-slate-200/80 w-full" />
            <span className="bg-white/80 backdrop-blur-md px-3 text-[11px] font-bold text-slate-500 uppercase tracking-wider rounded-full border border-slate-200/60">
              {isTa ? 'அல்லது' : 'OR'}
            </span>
          </div>

          {/* Secondary Button: Continue with Google (Official Google Icon) */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-2xl bg-white/90 hover:bg-white text-slate-700 font-bold text-xs sm:text-sm border border-slate-200 shadow-xs hover:shadow-md transition-all duration-200 flex items-center justify-center gap-3 cursor-pointer active:scale-98"
          >
            {/* Official Google SVG Logo */}
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
            <span>{t.buttons.continueWithGoogle}</span>
          </button>
        </div>
      </form>

      {/* Bottom Switcher: Don't have an account? Sign Up */}
      <div className="mt-6 pt-4 border-t border-slate-200/60 text-center">
        <p className="text-xs sm:text-sm text-slate-600 font-medium">
          {t.buttons.dontHaveAccount}{' '}
          <button
            type="button"
            onClick={onSwitchToSignUp}
            className="text-blue-600 hover:text-blue-800 font-bold underline underline-offset-2 transition-colors cursor-pointer ml-1 inline-flex items-center gap-0.5"
          >
            <span>{t.buttons.signUpLink}</span>
            <ArrowRight className="w-3.5 h-3.5 inline" />
          </button>
        </p>
      </div>

      {/* Modals */}
      <ForgotPasswordModal
        isOpen={isForgotPasswordOpen}
        onClose={() => setIsForgotPasswordOpen(false)}
        lang={language}
        onSuccessReset={(resetId) => {
          setIdentifier(resetId);
          setSuccessToast(isTa ? 'கடவுச்சொல் புதுப்பிக்கப்பட்டது! உள்நுழையலாம்.' : 'Password reset! You can now log in.');
          setTimeout(() => setSuccessToast(null), 4000);
        }}
      />

      <StudentDashboardModal
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
        lang={language}
        studentIdentifier={identifier}
      />
    </div>
  );
};
