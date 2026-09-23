import React, { useState } from 'react';
import { Mail, Lock, LogIn, ArrowLeft, Eye, EyeOff, Sparkles, CheckCircle2 } from 'lucide-react';
import { EduVoiceLogo } from './EduVoiceLogo';
import { Language } from '../types';

interface SignInViewProps {
  lang: Language;
  onSwitchToSignUp: () => void;
}

export const SignInView: React.FC<SignInViewProps> = ({ lang, onSwitchToSignUp }) => {
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const isTa = lang === 'ta';

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    if (identifier && password) {
      setIsSuccess(true);
    }
  };

  return (
    <div className="w-full bg-white/75 backdrop-blur-2xl rounded-3xl p-5 sm:p-6 shadow-2xl border border-white/80 my-2 relative overflow-hidden">
      <button
        type="button"
        onClick={onSwitchToSignUp}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 mb-3 cursor-pointer"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>{isTa ? 'பதிவு படிவத்திற்குத் திரும்பு' : 'Back to Sign Up'}</span>
      </button>

      <EduVoiceLogo lang={lang} />

      <div className="text-center my-4">
        <h2 className="text-lg font-extrabold text-slate-900">
          {isTa ? 'மாணவர் உள்நுழைவு' : 'Student Sign In'}
        </h2>
        <p className="text-xs text-slate-500 mt-0.5">
          {isTa
            ? 'உங்கள் மின்னஞ்சல் அல்லது கைபேசி எண்ணுடன் உள்நுழையவும்'
            : 'Access your Tamil/English STEM learning dashboard'}
        </p>
      </div>

      {isSuccess ? (
        <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3 my-4">
          <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto" />
          <h3 className="font-bold text-emerald-900 text-base">
            {isTa ? 'வெற்றிகரமாக உள்நுழைந்துவிட்டீர்கள்!' : 'Signed In Successfully!'}
          </h3>
          <p className="text-xs text-emerald-700">
            {isTa
              ? 'உங்கள் STEM AI பாடங்கள் தயாராக உள்ளன.'
              : 'Welcome back! Redirecting to your STEM AI dashboard...'}
          </p>
          <button
            onClick={onSwitchToSignUp}
            className="w-full py-2.5 bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs"
          >
            {isTa ? 'மீண்டும் தொடங்கவும்' : 'Return to App'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSignIn} className="space-y-4">
          {/* Email / Mobile */}
          <div>
            <label className="block text-xs font-semibold text-slate-800 mb-1">
              {isTa ? 'மின்னஞ்சல் அல்லது கைபேசி எண்' : 'Email Address or Mobile Number'}
            </label>
            <div className="relative flex items-center">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="selvam.student@gmail.com / 9876543210"
                className="w-full pl-10 pr-4 py-3 text-sm bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:border-blue-600 focus:bg-white/90 outline-none font-medium"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-semibold text-slate-800">
                {isTa ? 'கடவுச்சொல்' : 'Password'}
              </label>
              <a href="#forgot" onClick={(e) => { e.preventDefault(); alert(isTa ? 'கடவுச்சொல் மீட்பு இணைப்பு அனுப்பப்பட்டது' : 'Password reset link sent to registered guardian mobile.'); }} className="text-[11px] font-semibold text-blue-600 hover:underline">
                {isTa ? 'கடவுச்சொல் மறந்ததா?' : 'Forgot Password?'}
              </a>
            </div>
            <div className="relative flex items-center">
              <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
              <input
                type={showPassword ? 'text' : 'password'}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-10 py-3 text-sm bg-white/60 backdrop-blur-md rounded-xl border border-white/80 focus:border-blue-600 focus:bg-white/90 outline-none font-medium"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
              >
                {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold text-sm rounded-xl shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
          >
            <LogIn className="w-4 h-4" />
            <span>{isTa ? 'உள்நுழை' : 'Sign In'}</span>
          </button>

          {/* Google */}
          <button
            type="button"
            onClick={() => alert('Google Sign In initiated.')}
            className="w-full py-2.5 border border-slate-200 rounded-xl bg-white hover:bg-slate-50 font-semibold text-xs text-slate-700 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
            </svg>
            <span>{isTa ? 'கூகுள் மூலம் உள்நுழைக' : 'Sign in with Google'}</span>
          </button>
        </form>
      )}

      <div className="mt-6 text-center text-xs text-slate-600">
        <span>{isTa ? 'புதிய மாணவரா?' : "Don't have an account?"} </span>
        <button
          type="button"
          onClick={onSwitchToSignUp}
          className="font-bold text-blue-600 hover:underline cursor-pointer"
        >
          {isTa ? 'கணக்கை உருவாக்கு' : 'Create Account'}
        </button>
      </div>
    </div>
  );
};
