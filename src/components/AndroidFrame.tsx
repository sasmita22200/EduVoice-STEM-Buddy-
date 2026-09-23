import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  Signal, 
  Battery, 
  Smartphone, 
  Maximize2, 
  LogIn, 
  UserPlus, 
  BookOpen, 
  Zap, 
  LayoutDashboard, 
  GraduationCap, 
  Users, 
  Heart, 
  ShieldCheck,
  Compass
} from 'lucide-react';

export type AppViewType = 
  | 'studentDashboard'
  | 'chapterLearning'
  | 'subjectExplorer'
  | 'physicsStudio'
  | 'botanyStudio'
  | 'teacherPortal'
  | 'parentPortal'
  | 'adminPortal'
  | 'login'
  | 'signUp';

interface AndroidFrameProps {
  children: React.ReactNode;
  activeLanguage: string;
  currentView?: AppViewType;
  onViewChange?: (view: AppViewType) => void;
}

export const AndroidFrame: React.FC<AndroidFrameProps> = ({ 
  children, 
  activeLanguage,
  currentView = 'studentDashboard',
  onViewChange
}) => {
  const [currentTime, setCurrentTime] = useState('09:41');
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}`);
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col items-center justify-center p-1 sm:p-3 md:p-4 transition-all">
      {/* Top Controls Bar for Evaluators / Users */}
      <div className="w-full max-w-6xl flex flex-wrap items-center justify-between gap-2 mb-3 px-2 text-xs text-slate-600">
        {/* Screen Switcher */}
        {onViewChange && (
          <div className="flex flex-wrap items-center bg-white/95 backdrop-blur-xl p-1.5 rounded-2xl border border-slate-200/90 shadow-sm gap-1">
            {/* Student Dashboard */}
            <button
              type="button"
              onClick={() => onViewChange('studentDashboard')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentView === 'studentDashboard'
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>Student Home</span>
            </button>

            {/* Chapter Suite */}
            <button
              type="button"
              onClick={() => onViewChange('chapterLearning')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentView === 'chapterLearning'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Chapter Suite</span>
            </button>

            {/* Syllabus Explorer */}
            <button
              type="button"
              onClick={() => onViewChange('subjectExplorer')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                currentView === 'subjectExplorer'
                  ? 'bg-purple-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Compass className="w-3.5 h-3.5" />
              <span>Syllabus 9–12</span>
            </button>

            {/* Physics Studio */}
            <button
              type="button"
              onClick={() => onViewChange('physicsStudio')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'physicsStudio'
                  ? 'bg-cyan-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Zap className="w-3.5 h-3.5 text-cyan-300" />
              <span>Class 12 Physics</span>
            </button>

            {/* Botany Studio */}
            <button
              type="button"
              onClick={() => onViewChange('botanyStudio')}
              className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentView === 'botanyStudio'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>Class 11 Botany</span>
            </button>

            <span className="h-4 w-px bg-slate-200 mx-1" />

            {/* Roles */}
            <button
              type="button"
              onClick={() => onViewChange('teacherPortal')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                currentView === 'teacherPortal'
                  ? 'bg-blue-700 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Teacher Roster & Notes Review"
            >
              <Users className="w-3 h-3" />
              <span>Teacher</span>
            </button>

            <button
              type="button"
              onClick={() => onViewChange('parentPortal')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                currentView === 'parentPortal'
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Parent Progress View"
            >
              <Heart className="w-3 h-3" />
              <span>Parent</span>
            </button>

            <button
              type="button"
              onClick={() => onViewChange('adminPortal')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                currentView === 'adminPortal'
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
              title="Admin Completeness Report"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Admin</span>
            </button>

            <span className="h-4 w-px bg-slate-200 mx-1" />

            {/* Sign Up / Login */}
            <button
              type="button"
              onClick={() => onViewChange('signUp')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                currentView === 'signUp'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <UserPlus className="w-3 h-3" />
              <span>Sign Up</span>
            </button>

            <button
              type="button"
              onClick={() => onViewChange('login')}
              className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-[11px] font-bold transition-all cursor-pointer ${
                currentView === 'login'
                  ? 'bg-slate-800 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <LogIn className="w-3 h-3" />
              <span>Login</span>
            </button>
          </div>
        )}

        <button
          type="button"
          onClick={() => setIsPhoneFrame(!isPhoneFrame)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 hover:bg-white text-blue-700 font-semibold border border-slate-200 backdrop-blur-md shadow-xs transition-all cursor-pointer hover:shadow-md active:scale-95 ml-auto"
        >
          {isPhoneFrame ? (
            <>
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Expanded View</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span>Mobile Phone Frame</span>
            </>
          )}
        </button>
      </div>

      {/* Main Container */}
      <div 
        className={`w-full transition-all duration-300 ${
          isPhoneFrame 
            ? 'max-w-[420px] rounded-[48px] p-3.5 bg-slate-900 shadow-2xl ring-12 ring-slate-800/80 border-4 border-slate-700' 
            : 'max-w-5xl'
        }`}
      >
        <div className={`w-full overflow-hidden transition-all ${
          isPhoneFrame 
            ? 'rounded-[38px] bg-slate-50 min-h-[780px] max-h-[850px] overflow-y-auto relative' 
            : ''
        }`}>
          {/* Mobile Status Bar only shown in phone frame mode */}
          {isPhoneFrame && (
            <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md px-6 py-2 flex items-center justify-between text-xs text-slate-800 border-b border-slate-100">
              <span className="font-bold">{currentTime}</span>
              <div className="w-20 h-4 bg-slate-900 rounded-full mx-auto" />
              <div className="flex items-center space-x-1.5 text-slate-600">
                <Signal className="w-3.5 h-3.5" />
                <Wifi className="w-3.5 h-3.5" />
                <Battery className="w-3.5 h-3.5" />
              </div>
            </div>
          )}

          {/* Children View Content */}
          <div className="w-full">
            {children}
          </div>

          {/* Android Navigation Bar (Home, Back, Recent pill) in phone frame */}
          {isPhoneFrame && (
            <div className="sticky bottom-0 z-40 bg-white/80 backdrop-blur-md py-2.5 flex justify-center items-center border-t border-slate-100">
              <div className="w-28 h-1 bg-slate-400 rounded-full" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
