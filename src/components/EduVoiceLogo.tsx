import React from 'react';
import { Sparkles, Volume2, Atom, GraduationCap, School } from 'lucide-react';
import { Language } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface EduVoiceLogoProps {
  lang?: Language;
  variant?: 'full' | 'header';
}

export const EduVoiceLogo: React.FC<EduVoiceLogoProps> = ({ 
  lang = 'ta',
  variant = 'full'
}) => {
  const currentLang: Language = lang === 'en' ? 'en' : 'ta';
  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.ta;
  const tagline = t?.tagline || (currentLang === 'ta' ? 'STEM கல்வியில் மொழித் தடைகளை தகர்த்தல்' : 'Breaking Language Barriers in STEM Education');

  if (variant === 'header') {
    return (
      <div className="flex items-center gap-2.5">
        <div className="relative w-9 h-9 rounded-xl bg-white/15 backdrop-blur-md p-0.5 border border-white/20 flex items-center justify-center flex-shrink-0 shadow-xs">
          <Atom className="w-5 h-5 text-cyan-300 animate-spin-slow opacity-80" />
          <Volume2 className="w-3.5 h-3.5 text-emerald-300 relative z-10" />
        </div>
        <div className="text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className="text-base sm:text-lg font-black tracking-tight text-white font-sans">
              Edu<span className="text-cyan-300">Voice</span>
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-white/20 text-white uppercase tracking-wider">
              AI
            </span>
            <span className="text-xs font-bold text-emerald-300">
              / STEM Buddy
            </span>
          </div>
          <p className="text-[11px] font-medium text-blue-100 mt-0.5 max-w-xs truncate">
            "{tagline}"
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center py-2 px-4">
      {/* TN Govt & Private School AI Partner Badge */}
      <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gradient-to-r from-emerald-50 to-blue-50 text-emerald-800 text-xs font-semibold border border-emerald-200/80 mb-3 shadow-xs">
        <School className="w-3.5 h-3.5 text-emerald-600" />
        <span>TN Govt & Private Schools • Grades 9–12</span>
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
      </div>

      {/* Main Logo Graphic & Brand Name */}
      <div className="flex items-center justify-center gap-3 mb-1">
        {/* Animated Icon Emblem */}
        <div className="relative w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-500 p-0.5 shadow-md flex items-center justify-center group">
          <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
            {/* Background glowing rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-emerald-50 opacity-80" />
            <div className="relative flex items-center justify-center text-blue-600">
              <Atom className="w-6 h-6 text-blue-600 absolute animate-spin-slow opacity-30" />
              <Volume2 className="w-5 h-5 text-emerald-600 relative z-10" />
              <Sparkles className="w-3.5 h-3.5 text-blue-600 absolute -top-1 -right-1 z-20" />
            </div>
          </div>
        </div>

        {/* Brand Text */}
        <div className="text-left">
          <div className="flex items-center gap-1.5">
            <span className="text-2xl font-black tracking-tight text-slate-900 font-sans">
              Edu<span className="text-blue-600">Voice</span>
            </span>
            <span className="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-blue-100 text-blue-700 uppercase tracking-wider">
              AI
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-emerald-600 tracking-medium">
              / STEM Buddy
            </span>
            <span className="text-[10px] text-slate-500 font-semibold px-1 rounded bg-slate-100">
              தமிழ் & EN
            </span>
          </div>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-xs font-semibold text-slate-700 max-w-xs mt-1 leading-snug">
        "{tagline}"
      </p>

      {/* Education & Technology Indicators */}
      <div className="flex items-center gap-2 mt-2 text-[11px] font-medium text-slate-600 bg-white/70 backdrop-blur-md px-3 py-1 rounded-full border border-slate-200/80 shadow-2xs">
        <span className="flex items-center gap-1 text-blue-700 font-semibold">
          <GraduationCap className="w-3 h-3 text-blue-600" />
          State Board & CBSE
        </span>
        <span className="text-slate-300">•</span>
        <span className="text-emerald-700 font-medium">Bilingual STEM AI</span>
      </div>
    </div>
  );
};
