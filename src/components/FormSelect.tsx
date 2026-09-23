import React from 'react';
import { Check, ChevronDown, MapPin, Globe, GraduationCap, Users } from 'lucide-react';
import { Gender, Grade, PreferredLang } from '../types';
import { TN_DISTRICTS } from '../data/tnDistricts';

// --- Grade Selector Component ---
interface GradeSelectorProps {
  id: string;
  value: Grade;
  onChange: (grade: Grade) => void;
  label: string;
  error?: string;
}

export const GradeSelector: React.FC<GradeSelectorProps> = ({
  id,
  value,
  onChange,
  label,
  error
}) => {
  const grades: Grade[] = ['Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];

  return (
    <div className="flex flex-col space-y-1.5 mb-3.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-800 flex items-center gap-1">
          <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
          <span>{label}</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <span className="text-[10px] text-slate-500 font-medium bg-blue-50 px-2 py-0.5 rounded-full border border-blue-100">
          Selected: {value}
        </span>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {grades.map((g) => {
          const isSelected = value === g;
          return (
            <button
              key={g}
              id={`${id}-${g.replace(/\s+/g, '')}`}
              type="button"
              onClick={() => onChange(g)}
              className={`
                py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 border shadow-2xs cursor-pointer
                ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                }
              `}
            >
              {isSelected && <Check className="w-3.5 h-3.5 text-white" />}
              <span>{g}</span>
            </button>
          );
        })}
      </div>

      {error && <p className="text-[11px] text-red-600 font-medium mt-0.5">{error}</p>}
    </div>
  );
};

// --- Gender Selector Component ---
interface GenderSelectorProps {
  id: string;
  value: Gender;
  onChange: (gender: Gender) => void;
  label: string;
  genderLabels: { male: string; female: string; other: string; preferNot: string };
  error?: string;
}

export const GenderSelector: React.FC<GenderSelectorProps> = ({
  id,
  value,
  onChange,
  label,
  genderLabels,
  error
}) => {
  const options: { key: Gender; label: string }[] = [
    { key: 'Male', label: genderLabels.male },
    { key: 'Female', label: genderLabels.female },
    { key: 'Other', label: genderLabels.other },
    { key: 'Prefer not to say', label: genderLabels.preferNot }
  ];

  return (
    <div className="flex flex-col space-y-1.5 mb-3.5">
      <label className="text-xs font-semibold text-slate-800 flex items-center gap-1">
        <Users className="w-3.5 h-3.5 text-blue-600" />
        <span>{label}</span>
        <span className="text-red-500 font-bold">*</span>
      </label>

      <div className="grid grid-cols-2 gap-2">
        {options.map((opt) => {
          const isSelected = value === opt.key;
          return (
            <button
              key={opt.key}
              id={`${id}-${opt.key.replace(/\s+/g, '')}`}
              type="button"
              onClick={() => onChange(opt.key)}
              className={`
                py-2.5 px-2.5 rounded-xl text-xs font-medium transition-all text-left flex items-center justify-between border cursor-pointer
                ${
                  isSelected
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold ring-2 ring-emerald-200'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                }
              `}
            >
              <span className="truncate">{opt.label}</span>
              <div
                className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                  isSelected ? 'border-emerald-600 bg-emerald-600' : 'border-slate-300 bg-white'
                }`}
              >
                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
            </button>
          );
        })}
      </div>

      {error && <p className="text-[11px] text-red-600 font-medium mt-0.5">{error}</p>}
    </div>
  );
};

// --- Preferred Language Selector Component ---
interface LanguageSelectorProps {
  id: string;
  value: PreferredLang;
  onChange: (lang: PreferredLang) => void;
  label: string;
  error?: string;
}

export const PreferredLanguageSelector: React.FC<LanguageSelectorProps> = ({
  id,
  value,
  onChange,
  label,
  error
}) => {
  return (
    <div className="flex flex-col space-y-1.5 mb-3.5">
      <div className="flex items-center justify-between">
        <label className="text-xs font-semibold text-slate-800 flex items-center gap-1">
          <Globe className="w-3.5 h-3.5 text-blue-600" />
          <span>{label}</span>
          <span className="text-red-500 font-bold">*</span>
        </label>
        <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
          Bilingual AI Assistant
        </span>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button
          id={`${id}-Tamil`}
          type="button"
          onClick={() => onChange('Tamil')}
          className={`
            py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border cursor-pointer
            ${
              value === 'Tamil'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-600 shadow-md ring-2 ring-emerald-200'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-emerald-300'
            }
          `}
        >
          <span className="text-sm">தமிழ்</span>
          <span className="opacity-80 font-normal">(Tamil)</span>
          {value === 'Tamil' && <Check className="w-3.5 h-3.5 text-white" />}
        </button>

        <button
          id={`${id}-English`}
          type="button"
          onClick={() => onChange('English')}
          className={`
            py-3 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 border cursor-pointer
            ${
              value === 'English'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-blue-600 shadow-md ring-2 ring-blue-200'
                : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-blue-300'
            }
          `}
        >
          <span>English</span>
          {value === 'English' && <Check className="w-3.5 h-3.5 text-white" />}
        </button>
      </div>

      {error && <p className="text-[11px] text-red-600 font-medium mt-0.5">{error}</p>}
    </div>
  );
};

// --- District Select Component ---
interface DistrictSelectProps {
  id: string;
  value: string;
  onChange: (district: string) => void;
  label: string;
  placeholder: string;
  error?: string;
}

export const DistrictSelect: React.FC<DistrictSelectProps> = ({
  id,
  value,
  onChange,
  label,
  placeholder,
  error
}) => {
  return (
    <div className="flex flex-col space-y-1.5 mb-3.5">
      <label htmlFor={id} className="text-xs font-semibold text-slate-800 flex items-center gap-1">
        <MapPin className="w-3.5 h-3.5 text-blue-600" />
        <span>{label}</span>
        <span className="text-red-500 font-bold">*</span>
      </label>

      <div className="relative flex items-center">
        <div className="absolute left-3.5 text-slate-400 pointer-events-none">
          <MapPin className="w-4 h-4 text-slate-400" />
        </div>

        <select
          id={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`
            w-full pl-10 pr-10 py-3 text-sm text-slate-900 bg-white/60 backdrop-blur-md rounded-xl border transition-all duration-200 appearance-none outline-none cursor-pointer
            ${
              error
                ? 'border-red-400 focus:border-red-500 focus:ring-3 focus:ring-red-100/50'
                : value
                ? 'border-emerald-400 bg-white/80 font-medium'
                : 'border-white/80 focus:border-blue-600 focus:ring-3 focus:ring-blue-100/50'
            }
          `}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {TN_DISTRICTS.map((d) => (
            <option key={d} value={d}>
              {d} District
            </option>
          ))}
        </select>

        <div className="absolute right-3.5 text-slate-400 pointer-events-none">
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      {error && <p className="text-[11px] text-red-600 font-medium mt-0.5">{error}</p>}
    </div>
  );
};
