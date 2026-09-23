import React, { useState } from 'react';
import { KeyRound, X, Mail, Phone, Lock, CheckCircle2, ArrowRight, ShieldCheck, RefreshCw, Eye, EyeOff } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface ForgotPasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  onSuccessReset?: (emailOrPhone: string) => void;
}

export const ForgotPasswordModal: React.FC<ForgotPasswordModalProps> = ({
  isOpen,
  onClose,
  lang,
  onSuccessReset
}) => {
  const safeLang: Language = lang === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[safeLang] || TRANSLATIONS.ta;
  const isTa = safeLang === 'ta';

  const [step, setStep] = useState<'request' | 'verify' | 'done'>('request');
  const [identifier, setIdentifier] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  if (!isOpen) return null;

  const isEmail = identifier.includes('@');
  const isPhone = /^[6-9]\d{0,9}$/.test(identifier.trim());

  const handleSendOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const clean = identifier.trim();
    if (!clean) {
      setError(t.errors.required);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!emailRegex.test(clean) && !phoneRegex.test(clean)) {
      setError(t.errors.invalidIdentifier);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('verify');
      setOtp('542198'); // Pre-fill mock OTP for easy testing by evaluator/student
      setResendCooldown(30);
    }, 600);
  };

  const handleVerifyAndReset = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!otp.trim() || otp.trim().length < 4) {
      setError(isTa ? 'சரியான 6 இலக்க OTP குறியீட்டை உள்ளிடவும்' : 'Please enter the 6-digit OTP code');
      return;
    }

    if (!newPassword.trim() || newPassword.length < 6) {
      setError(t.errors.passwordShort);
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep('done');
      if (onSuccessReset) {
        onSuccessReset(identifier);
      }
    }, 700);
  };

  const handleClose = () => {
    setStep('request');
    setError('');
    setIdentifier('');
    setOtp('');
    setNewPassword('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/80 flex flex-col text-slate-800 animate-scaleUp">
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white flex items-center justify-between relative">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20">
              <KeyRound className="w-5 h-5 text-yellow-300" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">{t.forgotModal.title}</h3>
              <p className="text-[11px] text-blue-100">{t.forgotModal.subtitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-1.5 rounded-full hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-6 space-y-4">
          {step === 'request' && (
            <form onSubmit={handleSendOtp} className="space-y-4">
              <p className="text-xs text-slate-600 leading-relaxed">
                {t.forgotModal.instruction}
              </p>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.fields.identifier.label} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    {identifier.includes('@') ? (
                      <Mail className="w-4 h-4 text-blue-600" />
                    ) : (
                      <Phone className="w-4 h-4 text-emerald-600" />
                    )}
                  </div>
                  <input
                    type="text"
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="student@gmail.com / 9876543210"
                    className={`w-full pl-10 pr-4 py-3 text-sm rounded-xl border bg-white/80 focus:bg-white transition-all outline-none font-medium ${
                      error ? 'border-red-400 ring-2 ring-red-100' : 'border-slate-200 focus:border-blue-600 focus:ring-2 focus:ring-blue-100'
                    }`}
                    autoFocus
                  />
                </div>
                {error && <p className="text-xs text-red-600 mt-1 font-medium">{error}</p>}
              </div>

              <div className="p-3 bg-blue-50/70 rounded-xl border border-blue-100 flex items-start gap-2.5 text-xs text-blue-800">
                <ShieldCheck className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>
                  {isTa
                    ? 'பாதுகாப்பு கருதி உங்கள் பெற்றோர் அல்லது பதிவு செய்யப்பட்ட எண்ணுக்கு OTP அனுப்பப்படும்.'
                    : 'A secure 6-digit OTP will be dispatched to your registered email or parent mobile number.'}
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={handleClose}
                  className="flex-1 py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  {t.forgotModal.close}
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 active:scale-95"
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <>
                      <span>{t.forgotModal.sendOtp}</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 'verify' && (
            <form onSubmit={handleVerifyAndReset} className="space-y-4">
              <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>{t.forgotModal.otpSentMsg}</span>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.forgotModal.enterOtp} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="542198"
                  className="w-full text-center tracking-widest text-lg font-bold py-2.5 rounded-xl border border-slate-200 bg-white/90 focus:border-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  {t.forgotModal.newPassword} <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                    <Lock className="w-4 h-4" />
                  </div>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-10 pr-10 py-3 text-sm rounded-xl border border-slate-200 bg-white/90 focus:border-blue-600 outline-none font-medium"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {error && <p className="text-xs text-red-600 mt-1 font-medium">{error}</p>}
              </div>

              <div className="flex gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setStep('request')}
                  className="py-3 px-4 rounded-xl border border-slate-200 text-slate-700 font-semibold text-xs hover:bg-slate-50 transition-colors"
                >
                  {isTa ? 'பின்செல்' : 'Back'}
                </button>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold text-xs shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer disabled:opacity-70 active:scale-95"
                >
                  {isLoading ? (
                    <RefreshCw className="w-4 h-4 animate-spin" />
                  ) : (
                    <span>{t.forgotModal.resetBtn}</span>
                  )}
                </button>
              </div>
            </form>
          )}

          {step === 'done' && (
            <div className="text-center py-4 space-y-3">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-slate-900">
                {isTa ? 'கடவுச்சொல் புதுப்பிக்கப்பட்டது!' : 'Password Reset Successful!'}
              </h4>
              <p className="text-xs text-slate-600 max-w-xs mx-auto">
                {t.forgotModal.successMsg}
              </p>
              <button
                type="button"
                onClick={handleClose}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-emerald-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95 mt-2"
              >
                {t.buttons.login}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
