import React, { useState } from 'react';
import { Lock, Eye, EyeOff, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';

interface PasswordInputProps {
  passwordValue: string;
  confirmPasswordValue: string;
  onPasswordChange: (val: string) => void;
  onConfirmPasswordChange: (val: string) => void;
  passwordLabel: string;
  confirmPasswordLabel: string;
  passwordPlaceholder: string;
  confirmPasswordPlaceholder: string;
  passwordError?: string;
  confirmPasswordError?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  passwordValue,
  confirmPasswordValue,
  onPasswordChange,
  onConfirmPasswordChange,
  passwordLabel,
  confirmPasswordLabel,
  passwordPlaceholder,
  confirmPasswordPlaceholder,
  passwordError,
  confirmPasswordError
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Calculate password strength
  const getStrength = (pass: string) => {
    if (!pass) return { score: 0, label: '', color: 'bg-slate-200' };
    let score = 0;
    if (pass.length >= 8) score += 1;
    if (/[A-Z]/.test(pass) || /[a-z]/.test(pass)) score += 1;
    if (/[0-9]/.test(pass)) score += 1;
    if (/[^A-Za-z0-9]/.test(pass) || pass.length >= 10) score += 1;

    if (score <= 1) return { score: 25, label: 'Weak', color: 'bg-red-500', text: 'text-red-600' };
    if (score === 2 || score === 3) return { score: 65, label: 'Medium', color: 'bg-amber-500', text: 'text-amber-600' };
    return { score: 100, label: 'Strong', color: 'bg-emerald-500', text: 'text-emerald-600' };
  };

  const strength = getStrength(passwordValue);
  const isMatch = confirmPasswordValue.length > 0 && passwordValue === confirmPasswordValue;

  return (
    <div className="space-y-3.5 mb-3.5">
      {/* Create Password Field */}
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="text-xs font-semibold text-slate-800 flex items-center gap-1">
            <Lock className="w-3.5 h-3.5 text-blue-600" />
            <span>{passwordLabel}</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          {strength.label && (
            <span className={`text-[10px] font-bold ${strength.text}`}>
              Strength: {strength.label}
            </span>
          )}
        </div>

        <div className="relative flex items-center">
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            <Lock className="w-4 h-4 text-slate-400" />
          </div>

          <input
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={passwordValue}
            onChange={(e) => onPasswordChange(e.target.value)}
            placeholder={passwordPlaceholder}
            className={`
              w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none
              placeholder:text-slate-400 placeholder:text-xs font-medium
              ${
                passwordError
                  ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/30'
                  : passwordValue && strength.score >= 65
                  ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100/50'
                  : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50'
              }
            `}
          />

          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors cursor-pointer"
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {/* Strength Progress Bar */}
        {passwordValue && (
          <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1 flex items-center">
            <div
              className={`h-full transition-all duration-300 ${strength.color}`}
              style={{ width: `${strength.score}%` }}
            />
          </div>
        )}

        {passwordError && (
          <p className="text-[11px] text-red-600 font-medium flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3 text-red-500" />
            <span>{passwordError}</span>
          </p>
        )}
      </div>

      {/* Confirm Password Field */}
      <div className="flex flex-col space-y-1.5">
        <div className="flex items-center justify-between">
          <label htmlFor="confirmPassword" className="text-xs font-semibold text-slate-800 flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>{confirmPasswordLabel}</span>
            <span className="text-red-500 font-bold">*</span>
          </label>
          {isMatch && (
            <span className="text-[10px] text-emerald-600 font-semibold flex items-center gap-0.5">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              Passwords Match
            </span>
          )}
        </div>

        <div className="relative flex items-center">
          <div className="absolute left-3.5 text-slate-400 pointer-events-none">
            <ShieldCheck className="w-4 h-4 text-slate-400" />
          </div>

          <input
            id="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            value={confirmPasswordValue}
            onChange={(e) => onConfirmPasswordChange(e.target.value)}
            placeholder={confirmPasswordPlaceholder}
            className={`
              w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none
              placeholder:text-slate-400 placeholder:text-xs font-medium
              ${
                confirmPasswordError
                  ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/30'
                  : isMatch
                  ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100/50 bg-emerald-50/20'
                  : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50'
              }
            `}
          />

          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3.5 text-slate-400 hover:text-slate-600 p-1 rounded-md transition-colors cursor-pointer"
            aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
          >
            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {confirmPasswordError && (
          <p className="text-[11px] text-red-600 font-medium flex items-center gap-1 mt-0.5">
            <AlertCircle className="w-3 h-3 text-red-500" />
            <span>{confirmPasswordError}</span>
          </p>
        )}
      </div>
    </div>
  );
};
