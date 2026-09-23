import React, { useState } from 'react';
import { 
  Bot, 
  Volume2, 
  VolumeX, 
  Sparkles, 
  BookOpen, 
  Atom, 
  Calculator, 
  Dna, 
  Cpu, 
  LogOut, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  Flame, 
  Clock, 
  School,
  GraduationCap,
  Play,
  ShieldCheck
} from 'lucide-react';
import { Language } from '../types';

interface StudentDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  studentIdentifier: string;
}

export const StudentDashboardModal: React.FC<StudentDashboardModalProps> = ({
  isOpen,
  onClose,
  lang,
  studentIdentifier
}) => {
  const isTa = lang === 'ta';
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [activeSubject, setActiveSubject] = useState<string>('physics');
  const [quizAnswered, setQuizAnswered] = useState<number | null>(null);

  if (!isOpen) return null;

  const subjects = [
    {
      id: 'physics',
      name: isTa ? 'இயற்பியல் (Physics)' : 'Physics',
      icon: Atom,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-50 border-blue-200 text-blue-800',
      topics: isTa ? ['ஒளியியல் (Optics)', 'மின்னோட்டவியல்', 'வெப்ப இயக்கவியல்'] : ['Optics & Light', 'Current Electricity', 'Thermodynamics'],
      voiceSample: isTa 
        ? 'வணக்கம் செல்வம்! இன்று நாம் ஒளிவிலகல் விதிகளைப் பற்றி குரல் வழியாக எளிமையாகப் படிப்போம்.' 
        : 'Hello student! Today we will explore the laws of refraction through conversational AI.'
    },
    {
      id: 'chemistry',
      name: isTa ? 'வேதியியல் (Chemistry)' : 'Chemistry',
      icon: Flame,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-50 border-emerald-200 text-emerald-800',
      topics: isTa ? ['தனிம வரிசை அட்டவணை', 'வேதிப் பிணைப்புகள்', 'கரிம வேதியியல்'] : ['Periodic Table Trends', 'Chemical Bonding', 'Organic Reactions'],
      voiceSample: isTa 
        ? 'வேதியியல் சமன்பாடுகளை எவ்வாறு சமன் செய்வது என்பதை AI Buddy மூலம் கேட்கலாம்.' 
        : 'Learn how to balance chemical equations with real-time AI step-by-step guidance.'
    },
    {
      id: 'maths',
      name: isTa ? 'கணிதம் (Mathematics)' : 'Mathematics',
      icon: Calculator,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-50 border-amber-200 text-amber-800',
      topics: isTa ? ['முக்கோணவியல்', 'நுண்கணிதம் (Calculus)', 'அணிகள்'] : ['Trigonometry', 'Differential Calculus', 'Matrices & Determinants'],
      voiceSample: isTa 
        ? 'முக்கோணவியல் சூத்திரங்களை நினைவில் கொள்ள எளிய குரல் குறுக்குவழிகள் இங்கே உள்ளன.' 
        : 'Here are intuitive voice shortcuts to master trigonometry formulas.'
    },
    {
      id: 'biology',
      name: isTa ? 'உயிரியல் (Biology)' : 'Biology',
      icon: Dna,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-50 border-rose-200 text-rose-800',
      topics: isTa ? ['செல் உயிரியல்', 'மரபியல் (Genetics)', 'மனித உடலியல்'] : ['Cell Biology', 'Genetics & Evolution', 'Human Physiology'],
      voiceSample: isTa 
        ? 'மரபியல் மரபுவழியை தமிழ் விளக்கத்துடன் 3D வரைபடங்களுடன் கற்போம்.' 
        : 'Understand DNA replication and genetics with interactive bilingual AI models.'
    },
    {
      id: 'cs',
      name: isTa ? 'கணினி அறிவியல் (CS & AI)' : 'Computer Science & AI',
      icon: Cpu,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-50 border-purple-200 text-purple-800',
      topics: isTa ? ['பைதான் நிரலாக்கம் (Python)', 'AI அடிப்படைகள்', 'வலை வளர்ச்சி'] : ['Python Programming', 'AI & Neural Networks', 'Web Technologies'],
      voiceSample: isTa 
        ? 'பைதான் லூப்கள் மற்றும் நிபந்தனைகளை தமிழில் எளிதாகப் புரிந்து கொள்ளுங்கள்.' 
        : 'Master Python loops, algorithms, and prompt engineering in Tamil and English.'
    }
  ];

  const currentSub = subjects.find(s => s.id === activeSubject) || subjects[0];

  const handleSpeak = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      if (isPlayingAudio) {
        setIsPlayingAudio(false);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = isTa ? 'ta-IN' : 'en-US';
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);

      setIsPlayingAudio(true);
      window.speechSynthesis.speak(utterance);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/60 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/80 flex flex-col max-h-[90vh] text-slate-800 animate-scaleUp">
        {/* Top App Header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xs">
              <Bot className="w-6 h-6 text-emerald-300" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="font-bold text-sm text-white">EduVoice STEM Buddy</h3>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-400/20 text-emerald-200 font-semibold border border-emerald-300/30">
                  LIVE
                </span>
              </div>
              <p className="text-[11px] text-blue-100 font-medium">
                {studentIdentifier || 'selvam.student@gmail.com'}
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/15 hover:bg-white/25 text-white text-xs font-semibold backdrop-blur-md border border-white/20 transition-all cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>{isTa ? 'வெளியேறு' : 'Logout'}</span>
          </button>
        </div>

        {/* Scrollable Dashboard Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-left">
          {/* Welcome Banner Card */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-blue-500/10 to-indigo-500/10 border border-emerald-200/60 flex items-start justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-0.5 rounded-full">
                  {isTa ? 'வகுப்பு 11 • தமிழ்நாடு மாநிலப் பாடத்திட்டம்' : 'Grade 11 • TN State Board'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200/60">
                  <ShieldCheck className="w-3 h-3 text-blue-600" />
                  {isTa ? 'பள்ளி சரிபார்க்கப்பட்டது' : 'School Verified'}
                </span>
                <span className="flex items-center gap-1 text-[11px] font-bold text-amber-700 bg-amber-100/80 px-2 py-0.5 rounded-full">
                  <Flame className="w-3 h-3 text-amber-600" />
                  5 Day Streak
                </span>
              </div>
              <h4 className="text-base font-bold text-slate-900 pt-1">
                {isTa ? 'வணக்கம் செல்வகுமார்! 👋' : 'Welcome back, Selvakumar! 👋'}
              </h4>
              <p className="text-xs text-slate-600">
                {isTa 
                  ? 'இன்றைய STEM குரல் வழிக் கற்றலைத் தொடங்க எந்தப் பாடத்தையும் தேர்ந்தெடுக்கவும்.' 
                  : 'Your AI Voice Buddy is ready. Select a subject below to begin interactive STEM lessons.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => handleSpeak(currentSub.voiceSample)}
              className={`p-3 rounded-2xl shadow-md transition-all flex flex-col items-center justify-center gap-1 cursor-pointer flex-shrink-0 active:scale-95 ${
                isPlayingAudio 
                  ? 'bg-red-500 text-white animate-pulse' 
                  : 'bg-emerald-600 hover:bg-emerald-700 text-white'
              }`}
              title="Voice Tutor"
            >
              {isPlayingAudio ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              <span className="text-[9px] font-bold">{isPlayingAudio ? 'Stop' : 'Voice'}</span>
            </button>
          </div>

          {/* Subject Pills */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                {isTa ? 'STEM பாடங்கள்' : 'STEM Subjects'}
              </span>
              <span className="text-[11px] text-blue-600 font-semibold">
                {isTa ? 'தமிழ் & ஆங்கிலத்தில்' : 'Bilingual AI Mode'}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {subjects.map((sub) => {
                const Icon = sub.icon;
                const isSelected = activeSubject === sub.id;
                return (
                  <button
                    key={sub.id}
                    type="button"
                    onClick={() => setActiveSubject(sub.id)}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                      isSelected
                        ? 'bg-gradient-to-br from-blue-600 to-indigo-600 text-white border-blue-600 shadow-md scale-102'
                        : 'bg-white/70 hover:bg-white text-slate-700 border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center justify-between w-full mb-1">
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-white' : 'text-blue-600'}`} />
                      {isSelected && <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />}
                    </div>
                    <span className="text-xs font-bold leading-tight">{sub.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Subject Learning Hub */}
          <div className="p-4 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                  AI
                </div>
                <div>
                  <h5 className="text-xs font-bold text-slate-900">{currentSub.name}</h5>
                  <p className="text-[10px] text-slate-500">
                    {isTa ? 'தமிழ்நாடு அரசுப் பள்ளி பாடத்திட்டம் 2026-27' : 'TN State Board Syllabus 2026-27'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleSpeak(currentSub.voiceSample)}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-700 text-[11px] font-bold border border-blue-200 cursor-pointer"
              >
                <Volume2 className="w-3.5 h-3.5 text-blue-600" />
                <span>{isTa ? 'கேட்க' : 'Speak'}</span>
              </button>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-700 space-y-2">
              <div className="font-semibold text-slate-800 flex items-center gap-1.5">
                <BookOpen className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isTa ? 'முக்கிய தலைப்புகள் (Voice Lessons):' : 'Key Voice Lessons:'}</span>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {currentSub.topics.map((t, idx) => (
                  <span key={idx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700 shadow-2xs flex items-center gap-1">
                    <Play className="w-2.5 h-2.5 text-blue-600 fill-blue-600" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Daily STEM Voice Quiz Challenge */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-blue-50 border border-indigo-100 space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-900">
                <Award className="w-4 h-4 text-indigo-600" />
                <span>{isTa ? 'இன்றைய STEM விரைவு வினாடி வினா' : "Today's STEM Quick Quiz"}</span>
              </div>
              <span className="text-[10px] font-bold text-indigo-700 bg-white px-2 py-0.5 rounded-full border border-indigo-200">
                +20 XP
              </span>
            </div>

            <p className="text-xs text-slate-800 font-medium">
              {isTa 
                ? 'கேள்வி: வெற்றிடத்தில் ஒளியின் வேகம் என்ன? (What is the speed of light in vacuum?)'
                : 'Question: What is the exact speed of light in vacuum?'}
            </p>

            <div className="grid grid-cols-2 gap-2 pt-1">
              {[
                { id: 1, text: '3 × 10⁸ m/s', correct: true },
                { id: 2, text: '3 × 10⁶ m/s', correct: false },
                { id: 3, text: '1.5 × 10⁸ m/s', correct: false },
                { id: 4, text: '3 × 10¹⁰ m/s', correct: false }
              ].map((opt) => (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => setQuizAnswered(opt.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                    quizAnswered === opt.id
                      ? opt.correct
                        ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                        : 'bg-red-500 text-white border-red-500'
                      : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
                  }`}
                >
                  {opt.text}
                </button>
              ))}
            </div>

            {quizAnswered === 1 && (
              <div className="p-2.5 bg-emerald-100/80 rounded-xl text-emerald-800 text-xs font-bold flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>{isTa ? 'சரியான விடை! அருமை! 🎉' : 'Correct Answer! Awesome job! 🎉'}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span className="font-medium">EduVoice AI v2.4 (Android 15)</span>
          <button
            type="button"
            onClick={onClose}
            className="font-bold text-blue-600 hover:text-blue-700 cursor-pointer"
          >
            {isTa ? 'உள்நுழைவுப் பக்கத்திற்குத் திரும்பு' : 'Return to Login'}
          </button>
        </div>
      </div>
    </div>
  );
};
