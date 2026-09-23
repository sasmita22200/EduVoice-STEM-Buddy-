import React from 'react';
import { 
  Heart, 
  Clock, 
  Flame, 
  Award, 
  ArrowLeft, 
  CheckCircle2, 
  ShieldCheck, 
  School,
  FileText
} from 'lucide-react';
import { Language, StudentProfile } from '../types';

interface ParentPortalProps {
  lang: Language;
  profile: StudentProfile;
  onLanguageChange: (lang: Language) => void;
  onBackToDashboard: () => void;
}

export const ParentPortal: React.FC<ParentPortalProps> = ({
  lang,
  profile,
  onLanguageChange,
  onBackToDashboard
}) => {
  const isTa = lang === 'ta';

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 pb-24 text-slate-800">
      {/* Header */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToDashboard}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-rose-100 text-rose-800">
                Parent View (Read-Only)
              </span>
              <span className="text-xs text-slate-500">Child: {profile.fullName}</span>
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {isTa ? 'பெற்றோர் கண்காணிப்பு பக்கம்' : 'Parent Progress Overview'}
            </h1>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onLanguageChange(isTa ? 'en' : 'ta')}
          className="px-3.5 py-1.5 text-xs font-black rounded-xl bg-blue-50 text-blue-700 border border-blue-200"
        >
          {isTa ? 'English' : 'தமிழ்'}
        </button>
      </div>

      {/* Progress Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-col gap-1">
          <p className="text-xs text-slate-500 font-bold">{isTa ? 'கற்றல் நேரம்' : 'Study Time'}</p>
          <p className="text-lg font-black text-blue-700">320 min</p>
          <span className="text-[10px] text-slate-400">This week</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-col gap-1">
          <p className="text-xs text-slate-500 font-bold">{isTa ? 'தொடர் கற்றல்' : 'Active Streak'}</p>
          <p className="text-lg font-black text-orange-600">5 Days 🔥</p>
          <span className="text-[10px] text-slate-400">Consistent</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-col gap-1">
          <p className="text-xs text-slate-500 font-bold">{isTa ? 'வினாடி வினா சராசரி' : 'Quiz Average'}</p>
          <p className="text-lg font-black text-emerald-700">88%</p>
          <span className="text-[10px] text-slate-400">Top 15% in class</span>
        </div>

        <div className="bg-white rounded-2xl p-4 border border-slate-200 flex flex-col gap-1">
          <p className="text-xs text-slate-500 font-bold">{isTa ? 'படித்த அலகுகள்' : 'Units Finished'}</p>
          <p className="text-lg font-black text-purple-700">12 Units</p>
          <span className="text-[10px] text-slate-400">Class {profile.classLevel}</span>
        </div>
      </div>

      {/* Summary Message for Parents */}
      <div className="bg-rose-50/70 border border-rose-200 rounded-3xl p-5 flex flex-col gap-2">
        <h3 className="font-black text-sm text-rose-900 flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-600" />
          <span>{isTa ? 'பெற்றோருக்கான கல்வி ஆலோசனை:' : 'Academic Note for Parents:'}</span>
        </h3>
        <p className="text-xs text-slate-700 leading-relaxed">
          {isTa 
            ? `${profile.fullName} அறிவியல் பாடத்தில் சிறந்த முன்னேற்றம் அடைந்துள்ளார். குறிப்பாக 'இயக்க விதிகள்' அலகில் 88% மதிப்பெண் பெற்றுள்ளார். தினசரி 30-40 நிமிடங்கள் தொடர்ந்து படித்து வருவது பாராட்டத்தக்கது.`
            : `${profile.fullName} is showing strong conceptual engagement, particularly in Science with an 88% average score in recent quizzes. Daily 30-40 minute sessions are well within recommended study targets.`}
        </p>
      </div>
    </div>
  );
};
