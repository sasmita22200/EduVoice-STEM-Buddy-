import React from 'react';
import { BookOpen, Bot, Sparkles, Binary, Dna, Calculator, Cpu, Mic, Brain, Lightbulb, Compass, Waves } from 'lucide-react';
import { Language } from '../types';

interface IllustrationBannerProps {
  lang?: Language;
}

export const IllustrationBanner: React.FC<IllustrationBannerProps> = ({ lang = 'en' }) => {
  const isTa = lang === 'ta';

  return (
    <div className="relative w-full rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 p-4 text-white shadow-lg overflow-hidden my-3 border border-white/20">
      {/* Decorative Blueprint & Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0c_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0c_1px,transparent_1px)] bg-[size:16px_16px]" />
      
      {/* Soft Glow Orbs */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-emerald-400/25 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 bg-blue-400/25 rounded-full blur-2xl pointer-events-none" />

      {/* Floating STEM Floating Mini Icons */}
      <div className="absolute top-2 right-28 opacity-25 text-white animate-pulse">
        <Dna className="w-4 h-4" />
      </div>
      <div className="absolute bottom-2 left-28 opacity-25 text-white">
        <Binary className="w-4 h-4" />
      </div>

      <div className="relative z-10 flex items-center justify-between gap-3">
        {/* Left Side Content & STEM Features */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-semibold text-emerald-200 mb-1.5 border border-white/20 shadow-xs">
            <Sparkles className="w-3 h-3 text-emerald-300 animate-pulse" />
            <span>{isTa ? 'AI குரல் உதவியாளர் • தமிழ் & EN' : 'AI Voice Buddy • Tamil & English'}</span>
          </div>

          <h3 className="text-sm font-bold text-white leading-tight">
            {isTa ? 'அரசு & தனியார் பள்ளி STEM மையம்' : 'Govt & Private School STEM Hub'}
          </h3>

          <p className="text-[11px] text-blue-100/90 mt-0.5 font-normal leading-tight">
            {isTa 
              ? 'இயற்பியல் • வேதியியல் • கணிதம் • உயிரியல் • AI' 
              : 'Physics • Chemistry • Mathematics • Biology • AI'}
          </p>

          {/* Interactive Feature Badges representing Books, AI Chatbot, Science, Math & Voice */}
          <div className="flex flex-wrap items-center gap-1.5 mt-2.5">
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/10">
              <Bot className="w-3 h-3 text-emerald-300" />
              {isTa ? 'AI சாட்பாட்' : 'AI Chatbot'}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/10">
              <Mic className="w-3 h-3 text-blue-200" />
              {isTa ? 'குரல் வழி கற்றல்' : 'Voice Learning'}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/10">
              <BookOpen className="w-3 h-3 text-amber-300" />
              {isTa ? 'பாடப்புத்தகம்' : 'Books & State Board'}
            </span>
            <span className="inline-flex items-center gap-1 text-[10px] px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white font-medium border border-white/10">
              <Calculator className="w-3 h-3 text-emerald-200" />
              {isTa ? 'கணிதம் & அறிவியல்' : 'Math & Science'}
            </span>
          </div>
        </div>

        {/* Right Side Rich Vector Illustration */}
        <div className="relative w-24 h-24 sm:w-28 sm:h-28 flex-shrink-0 flex items-center justify-center">
          <svg className="w-full h-full text-white drop-shadow-md" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Open Book Base */}
            <path d="M20 95C35 90 55 92 60 98C65 92 85 90 100 95V45C85 40 65 42 60 48C55 42 35 40 20 45V95Z" fill="white" fillOpacity="0.85" />
            <path d="M60 48V98" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            {/* Book Pages Shadow Line */}
            <path d="M22 55C36 51 52 53 58 57" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M22 68C36 64 52 66 58 70" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M98 55C84 51 68 53 62 57" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M98 68C84 64 68 66 62 70" stroke="#94A3B8" strokeWidth="1.5" strokeLinecap="round" />

            {/* Glowing AI Chatbot Head hovering over book */}
            <g transform="translate(42, 10)">
              {/* Bot Body & Antenna */}
              <rect x="6" y="8" width="24" height="20" rx="6" fill="#10B981" />
              <rect x="15.5" y="2" width="5" height="6" rx="2" fill="#38BDF8" />
              <circle cx="18" cy="2" r="2.5" fill="#FBBF24" />
              {/* Bot Screen & Eyes */}
              <rect x="9" y="12" width="18" height="12" rx="3" fill="#0F172A" />
              <circle cx="14" cy="18" r="2" fill="#34D399" />
              <circle cx="22" cy="18" r="2" fill="#34D399" />
              {/* Sound waves emitted from bot */}
              <path d="M2 14C0.5 16 0.5 20 2 22" stroke="#67E8F9" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M34 14C35.5 16 35.5 20 34 22" stroke="#67E8F9" strokeWidth="1.5" strokeLinecap="round" />
            </g>

            {/* Science Atom Rings Floating */}
            <ellipse cx="60" cy="50" rx="36" ry="12" stroke="#38BDF8" strokeWidth="1.2" strokeDasharray="3 3" transform="rotate(-25 60 50)" />
            <ellipse cx="60" cy="50" rx="36" ry="12" stroke="#10B981" strokeWidth="1.2" strokeDasharray="3 3" transform="rotate(35 60 50)" />

            {/* Math Symbols Floating */}
            <text x="12" y="32" fill="#FDE047" fontSize="11" fontWeight="bold" fontFamily="sans-serif">∑</text>
            <text x="96" y="30" fill="#67E8F9" fontSize="12" fontWeight="bold" fontFamily="sans-serif">π</text>
            <text x="88" y="108" fill="#F472B6" fontSize="10" fontWeight="bold" fontFamily="sans-serif">√x</text>
            <text x="16" y="110" fill="#34D399" fontSize="10" fontWeight="bold" fontFamily="sans-serif">E=mc²</text>
          </svg>
        </div>
      </div>
    </div>
  );
};
