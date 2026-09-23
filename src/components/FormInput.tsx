import React from 'react';
import { CheckCircle2, AlertCircle } from 'lucide-react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  subLabel?: string;
  icon: React.ReactNode;
  error?: string;
  isValid?: boolean;
  isRequired?: boolean;
  hint?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  subLabel,
  icon,
  error,
  isValid,
  isRequired = true,
  hint,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col space-y-1.5 mb-3.5">
      {/* Field Label */}
      <div className="flex items-center justify-between">
        <label htmlFor={id} className="text-xs font-semibold text-slate-800 flex items-center gap-1">
          <span>{label}</span>
          {subLabel && <span className="text-[11px] text-slate-500 font-normal">({subLabel})</span>}
          {isRequired && <span className="text-red-500 font-bold">*</span>}
        </label>
        {isValid && (
          <span className="text-[10px] text-emerald-600 font-medium flex items-center gap-0.5">
            <CheckCircle2 className="w-3 h-3 text-emerald-500" />
            Valid
          </span>
        )}
      </div>

      {/* Input Container */}
      <div className="relative flex items-center">
        {/* Leading Icon */}
        <div className="absolute left-3.5 text-slate-400 pointer-events-none transition-colors group-focus-within:text-blue-600">
          {icon}
        </div>

        {/* Input Control */}
        <input
          id={id}
          aria-invalid={!!error}
          className={`
            w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 outline-none
            placeholder:text-slate-400 placeholder:text-xs font-medium
            ${
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50 bg-red-50/40'
                : isValid
                ? 'border-emerald-400 focus:border-emerald-500 focus:ring-3 focus:ring-emerald-100/50 bg-emerald-50/30'
                : 'border-white/80 hover:border-slate-300 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50 focus:bg-white/90'
            }
            ${className}
          `}
          {...props}
        />

        {/* Trailing Icon Validation Indicator */}
        <div className="absolute right-3.5 pointer-events-none flex items-center">
          {error ? (
            <AlertCircle className="w-4 h-4 text-red-500 animate-pulse" />
          ) : isValid ? (
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          ) : null}
        </div>
      </div>

      {/* Error / Helper Hint */}
      {error ? (
        <p className="text-[11px] text-red-600 font-medium flex items-center gap-1 mt-0.5 animate-fadeIn">
          <AlertCircle className="w-3 h-3 text-red-500 flex-shrink-0" />
          <span>{error}</span>
        </p>
      ) : hint ? (
        <p className="text-[10px] text-slate-400 font-normal px-0.5">
          {hint}
        </p>
      ) : null}
    </div>
  );
};
