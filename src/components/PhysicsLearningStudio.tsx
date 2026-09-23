import React, { useState, useEffect } from 'react';
import { 
  CLASS_12_PHYSICS_VOLUME_1_CHAPTERS, 
  CLASS_12_PHYSICS_UNITS_METADATA, 
  PhysicsChapter,
  PhysicsFormula,
  PhysicsDerivation,
  PhysicsNumericalProblem
} from '../data/class12PhysicsCurriculum';
import {
  CLASS_12_PHYSICS_VOLUME_2_CHAPTERS,
  CLASS_12_PHYSICS_VOL2_UNITS_METADATA
} from '../data/class12PhysicsVol2Curriculum';
import { Language } from '../types';
import { 
  Zap, 
  BookOpen, 
  Compass, 
  Layers, 
  Radio, 
  Award, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Search, 
  FileText, 
  Cpu, 
  Activity, 
  TrendingUp, 
  Sliders, 
  Info, 
  ArrowRight, 
  ChevronRight, 
  ChevronDown, 
  Bookmark, 
  Share2, 
  Eye, 
  Lightbulb, 
  Flame, 
  Check, 
  Atom, 
  ExternalLink,
  Code
} from 'lucide-react';

interface PhysicsLearningStudioProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBackToPortal?: () => void;
}

export const PhysicsLearningStudio: React.FC<PhysicsLearningStudioProps> = ({
  language,
  onLanguageChange,
  onBackToPortal
}) => {
  const [selectedVolume, setSelectedVolume] = useState<1 | 2>(1);
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<'topics' | 'formulas' | 'derivations' | 'numericals' | 'diagrams' | 'lab' | 'aiLesson' | 'examPrep'>('topics');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(null);
  const [expandedDerivationId, setExpandedDerivationId] = useState<string | null>(null);
  const [selectedNumericalLevel, setSelectedNumericalLevel] = useState<'All' | 'Easy' | 'Medium' | 'Exam-Level'>('All');
  
  // Interactive AI Lesson states
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [isQuizAnswered, setIsQuizAnswered] = useState(false);
  const [lessonProgress, setLessonProgress] = useState(0);

  // Audio simulation state
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechRate, setSpeechRate] = useState<number>(1.0);

  // All 11 chapters across Volume 1 & Volume 2
  const allChapters: PhysicsChapter[] = [
    ...CLASS_12_PHYSICS_VOLUME_1_CHAPTERS,
    ...CLASS_12_PHYSICS_VOLUME_2_CHAPTERS
  ];

  const allUnitsMetadata = [
    ...CLASS_12_PHYSICS_UNITS_METADATA,
    ...CLASS_12_PHYSICS_VOL2_UNITS_METADATA
  ];

  // Current active chapter
  const currentChapter: PhysicsChapter = 
    allChapters.find(c => c.chapterNumber === selectedChapterNumber) || 
    allChapters[0];

  // Unit metadata
  const currentUnitMeta = 
    allUnitsMetadata.find(u => u.chapterNumbers.includes(selectedChapterNumber)) || 
    allUnitsMetadata[0];

  // Synchronize volume when chapter number changes
  const handleSelectChapter = (chNum: number) => {
    setSelectedChapterNumber(chNum);
    if (chNum <= 5) {
      setSelectedVolume(1);
    } else {
      setSelectedVolume(2);
    }
  };

  const handleSelectVolume = (vol: 1 | 2) => {
    setSelectedVolume(vol);
    if (vol === 1 && selectedChapterNumber > 5) {
      setSelectedChapterNumber(1);
    } else if (vol === 2 && selectedChapterNumber <= 5) {
      setSelectedChapterNumber(6);
    }
  };

  // Reset lesson states on chapter change
  useEffect(() => {
    setCurrentSceneIndex(0);
    setSelectedQuizOption(null);
    setIsQuizAnswered(false);
    setExpandedTopicId(null);
    setExpandedDerivationId(null);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, [selectedChapterNumber]);

  // Handle TTS
  const toggleSpeech = () => {
    if (!('speechSynthesis' in window)) {
      alert('Text-to-speech is not supported in this browser.');
      return;
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    } else {
      let textToRead = '';
      if (language === 'ta') {
        textToRead = currentChapter.voiceNarration.scriptTa;
      } else if (language === 'en') {
        textToRead = currentChapter.voiceNarration.scriptEn;
      } else {
        textToRead = currentChapter.voiceNarration.scriptBilingual;
      }

      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = speechRate;
      utterance.lang = language === 'ta' ? 'ta-IN' : 'en-IN';
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
      setIsSpeaking(true);
    }
  };

  const handleQuizSelect = (index: number) => {
    if (isQuizAnswered) return;
    setSelectedQuizOption(index);
    setIsQuizAnswered(true);
  };

  const handleNextScene = () => {
    if (currentSceneIndex < (currentChapter.aiLesson.scenes.length - 1)) {
      setCurrentSceneIndex(prev => prev + 1);
      setSelectedQuizOption(null);
      setIsQuizAnswered(false);
    }
  };

  const handlePrevScene = () => {
    if (currentSceneIndex > 0) {
      setCurrentSceneIndex(prev => prev - 1);
      setSelectedQuizOption(null);
      setIsQuizAnswered(false);
    }
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen text-slate-800 pb-16">
      {/* Top App Header with Tamil Nadu State Board Badge */}
      <header className="bg-gradient-to-r from-blue-700 via-blue-800 to-indigo-900 text-white shadow-lg sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          {/* Logo & Subject Badge */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-md ring-2 ring-white/20">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-wider bg-cyan-400/20 text-cyan-200 px-2 py-0.5 rounded-full border border-cyan-400/30">
                  TN State Board • Class 12
                </span>
                <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full border border-emerald-500/30">
                  Volume 1 (2026)
                </span>
              </div>
              <h1 className="text-lg sm:text-xl font-black tracking-tight text-white flex items-center gap-2">
                Physics Learning Studio
                <span className="text-sm font-semibold text-blue-200 hidden sm:inline">| இயற்பியல் பயிலகம்</span>
              </h1>
            </div>
          </div>

          {/* Language Selector & Actions */}
          <div className="flex items-center gap-2 ml-auto">
            {/* Language Switcher */}
            <div className="bg-white/10 p-1 rounded-xl backdrop-blur-md flex items-center border border-white/20 text-xs font-bold">
              <button
                onClick={() => onLanguageChange('ta')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === 'ta' ? 'bg-white text-blue-900 shadow-xs' : 'text-blue-100 hover:text-white'
                }`}
              >
                தமிழ்
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === 'en' ? 'bg-white text-blue-900 shadow-xs' : 'text-blue-100 hover:text-white'
                }`}
              >
                English
              </button>
              <button
                onClick={() => onLanguageChange('en')}
                className={`px-2.5 py-1 rounded-lg transition-all ${
                  language === 'en' ? 'text-blue-100 hover:text-white' : 'text-blue-100'
                }`}
                title="Bilingual"
              >
                Dual
              </button>
            </div>

            {/* Voice Narration Button */}
            <button
              onClick={toggleSpeech}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold text-xs shadow-xs transition-all cursor-pointer ${
                isSpeaking 
                  ? 'bg-rose-500 text-white animate-pulse' 
                  : 'bg-emerald-600 hover:bg-emerald-500 text-white'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Stop Audio' : 'AI Voice Lesson'}</span>
            </button>
          </div>
        </div>

        {/* Volume & Chapter Navigation Bar */}
        <div className="bg-blue-950/70 backdrop-blur-md border-t border-blue-800/40 px-3 sm:px-6 py-2">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-2.5">
            {/* Volume Switcher Tabs */}
            <div className="flex items-center gap-1.5 bg-blue-900/60 p-1 rounded-xl border border-blue-700/40 shrink-0">
              <button
                onClick={() => handleSelectVolume(1)}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  selectedVolume === 1
                    ? 'bg-blue-500 text-white shadow-xs'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                Vol 1 (Units 1-5)
              </button>
              <button
                onClick={() => handleSelectVolume(2)}
                className={`px-3 py-1 rounded-lg text-xs font-black transition-all cursor-pointer ${
                  selectedVolume === 2
                    ? 'bg-blue-500 text-white shadow-xs'
                    : 'text-blue-200 hover:text-white'
                }`}
              >
                Vol 2 (Units 6-11)
              </button>
            </div>

            {/* Chapter Pill Navigation Bar */}
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-thin py-0.5 min-w-0">
              {(selectedVolume === 1 ? CLASS_12_PHYSICS_VOLUME_1_CHAPTERS : CLASS_12_PHYSICS_VOLUME_2_CHAPTERS).map((ch) => {
                const isSelected = ch.chapterNumber === selectedChapterNumber;
                return (
                  <button
                    key={ch.chapterNumber}
                    onClick={() => handleSelectChapter(ch.chapterNumber)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                      isSelected
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-md ring-2 ring-white/40 scale-[1.02]'
                        : 'bg-blue-900/40 hover:bg-blue-800/60 text-blue-200 hover:text-white border border-blue-700/30'
                    }`}
                  >
                    <span className="w-5 h-5 rounded-full bg-white/20 text-white text-[10px] flex items-center justify-center font-black">
                      {ch.chapterNumber}
                    </span>
                    <span>
                      {language === 'ta' ? ch.chapterNameTa : ch.chapterName}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-7xl mx-auto px-3 sm:px-6 pt-5">
        {/* Chapter Hero Banner */}
        <div className="bg-gradient-to-br from-white via-blue-50/50 to-cyan-50/60 rounded-3xl p-5 sm:p-7 border border-blue-100 shadow-sm relative overflow-hidden mb-6">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-400/10 via-cyan-400/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div className="space-y-2 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-black uppercase tracking-wider shadow-xs">
                  Unit {currentChapter.unitNumber} • Chapter {currentChapter.chapterNumber}
                </span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold border border-emerald-200">
                  {currentChapter.importance}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                {language === 'ta' ? currentChapter.chapterNameTa : currentChapter.chapterName}
              </h2>
              {language !== 'ta' && (
                <p className="text-sm font-semibold text-blue-700">
                  {currentChapter.chapterNameTa}
                </p>
              )}

              <p className="text-sm text-slate-600 leading-relaxed pt-1">
                {language === 'ta' ? currentChapter.overviewTa : currentChapter.overview}
              </p>
            </div>

            {/* Quick Stats Pill Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-2.5 min-w-[280px]">
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs text-center">
                <div className="text-xl font-black text-blue-600">{currentChapter.topics.length}</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Topics</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs text-center">
                <div className="text-xl font-black text-emerald-600">{currentChapter.formulas.length}</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Key Formulas</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs text-center">
                <div className="text-xl font-black text-indigo-600">{currentChapter.derivations.length}</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">5-Mark Derivations</div>
              </div>
              <div className="bg-white p-3 rounded-2xl border border-slate-200/80 shadow-xs text-center">
                <div className="text-xl font-black text-amber-600">{currentChapter.numericals.length}</div>
                <div className="text-[11px] font-bold text-slate-500 uppercase">Solved Problems</div>
              </div>
            </div>
          </div>
        </div>

        {/* 8-Feature Tabbed Menu */}
        <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs mb-6 overflow-x-auto scrollbar-thin">
          {[
            { id: 'topics', label: 'Topics & Concepts', labelTa: 'பாடத் தலைப்புகள்', icon: BookOpen },
            { id: 'formulas', label: 'Formulas & Units', labelTa: 'சூத்திரங்கள் & அலகுகள்', icon: Zap },
            { id: 'derivations', label: 'Derivations (5M)', labelTa: 'வழிமுறைகள் (5M)', icon: Activity },
            { id: 'numericals', label: 'Numerical Solver', labelTa: 'கணக்கீட்டு தீர்வுகள்', icon: TrendingUp },
            { id: 'diagrams', label: 'Diagrams & Graphs', labelTa: 'படங்கள் & வரைபடங்கள்', icon: Eye },
            { id: 'lab', label: 'Lab & Experiments', labelTa: 'ஆய்வக சோதனைகள்', icon: Sliders },
            { id: 'aiLesson', label: '3D AI Lesson', labelTa: 'AI 3D பாடம்', icon: Sparkles },
            { id: 'examPrep', label: 'Exam Booster & Qs', labelTa: 'தேர்வு வினா வங்கி', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm ring-1 ring-blue-500'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-cyan-300' : 'text-slate-500'}`} />
                <span>{language === 'ta' ? tab.labelTa : tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* TAB CONTENT: 1. Topics & Core Concepts */}
        {activeTab === 'topics' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-600" />
                {language === 'ta' ? 'அடிப்படை பாடக் கருத்துகள்' : 'Core Topics & Systematic Concept Breakup'}
              </h3>
              <span className="text-xs font-bold text-slate-500">
                {currentChapter.topics.length} Sections Aligned to 2026 Syllabus
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentChapter.topics.map((topic) => {
                const isExpanded = expandedTopicId === topic.id;
                return (
                  <div
                    key={topic.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedTopicId(isExpanded ? null : topic.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/60"
                    >
                      <div className="flex items-center gap-3.5">
                        <span className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 font-black text-sm flex items-center justify-center border border-blue-200">
                          {topic.topicNumber}
                        </span>
                        <div>
                          <h4 className="text-base font-bold text-slate-900">
                            {language === 'ta' ? topic.titleTa : topic.title}
                          </h4>
                          {language !== 'ta' && (
                            <p className="text-xs font-semibold text-blue-600">{topic.titleTa}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-slate-400 hidden sm:inline">
                          {topic.coreConcepts.length} Concepts
                        </span>
                        <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-blue-600' : ''}`} />
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/40 space-y-4 text-sm">
                        {/* Explanation Box */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs">
                          <h5 className="font-bold text-xs uppercase tracking-wider text-blue-600 mb-1.5 flex items-center gap-1.5">
                            <Info className="w-3.5 h-3.5" /> Conceptual Explanation
                          </h5>
                          <p className="text-slate-700 leading-relaxed">
                            {language === 'ta' ? topic.beginnerExplanationTa : topic.beginnerExplanation}
                          </p>
                        </div>

                        {/* Core Key Bullet Points */}
                        <div className="bg-blue-50/60 p-4 rounded-xl border border-blue-100">
                          <h5 className="font-bold text-xs uppercase tracking-wider text-blue-800 mb-2 flex items-center gap-1.5">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-600" /> Key Principles to Master
                          </h5>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {topic.coreConcepts.map((concept, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-blue-100/80 shadow-2xs">
                                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                                <span>{concept}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Formal Definitions */}
                        {topic.definitions && topic.definitions.length > 0 && (
                          <div className="space-y-2">
                            <h5 className="font-bold text-xs uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
                              <Bookmark className="w-3.5 h-3.5 text-indigo-600" /> Standard Board Exam Definitions
                            </h5>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {topic.definitions.map((def, idx) => (
                                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-2xs space-y-1.5">
                                  <div className="flex items-center justify-between">
                                    <h6 className="font-bold text-xs text-indigo-900">{def.term}</h6>
                                    <span className="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">{def.termTa}</span>
                                  </div>
                                  <p className="text-xs text-slate-600 italic">
                                    "{language === 'ta' ? def.definitionTa : def.definitionEn}"
                                  </p>
                                  {def.keyPoints && (
                                    <div className="pt-1 text-[11px] text-slate-500 space-y-0.5">
                                      {def.keyPoints.map((kp, kpIdx) => (
                                        <div key={kpIdx} className="flex items-center gap-1.5">
                                          <span className="text-emerald-500 font-bold">✓</span>
                                          <span>{kp}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Analogy & Misconception Box */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                          {topic.analogies && (
                            <div className="bg-amber-50/70 p-3.5 rounded-xl border border-amber-200/80 text-xs">
                              <span className="font-bold text-amber-900 flex items-center gap-1.5 mb-1">
                                <Lightbulb className="w-3.5 h-3.5 text-amber-600" /> Intuitive Real-Life Analogy
                              </span>
                              <p className="text-amber-800 leading-relaxed">{topic.analogies}</p>
                            </div>
                          )}
                          {topic.commonMisconceptions && topic.commonMisconceptions.length > 0 && (
                            <div className="bg-rose-50/70 p-3.5 rounded-xl border border-rose-200/80 text-xs">
                              <span className="font-bold text-rose-900 flex items-center gap-1.5 mb-1">
                                <XCircle className="w-3.5 h-3.5 text-rose-600" /> Common Misconception Corrected
                              </span>
                              <p className="text-rose-800 leading-relaxed">{topic.commonMisconceptions[0]}</p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 2. Formulas, Units & Dimensional Analysis */}
        {activeTab === 'formulas' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Zap className="w-5 h-5 text-amber-500" />
                {language === 'ta' ? 'அனைத்து சூத்திரங்களும் பரிமாணங்களும்' : 'Master Physics Formulas, Units & Dimensions'}
              </h3>
              <span className="text-xs font-bold text-slate-500">
                {currentChapter.formulas.length} Core Formulas
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              {currentChapter.formulas.map((formula) => (
                <div
                  key={formula.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:shadow-md transition-all space-y-3"
                >
                  {/* Category Pill & ID */}
                  <div className="flex items-center justify-between">
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase tracking-wider">
                      {formula.category.replace('_', ' ')}
                    </span>
                    <span className="text-xs font-bold text-slate-400 font-mono">
                      {formula.id}
                    </span>
                  </div>

                  {/* Formula Display Box */}
                  <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-4 rounded-xl text-center shadow-inner font-mono text-base sm:text-lg font-black tracking-wide border border-slate-800 overflow-x-auto">
                    {formula.formula}
                  </div>

                  {/* Meaning */}
                  <div>
                    <h5 className="text-xs font-bold text-slate-900">
                      {language === 'ta' ? formula.meaningTa : formula.meaning}
                    </h5>
                  </div>

                  {/* Variables Table */}
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs space-y-1.5">
                    <div className="font-bold text-[10px] uppercase tracking-wider text-slate-500">
                      Variables & Quantities:
                    </div>
                    <div className="space-y-1">
                      {formula.variables.map((v, vIdx) => (
                        <div key={vIdx} className="flex items-center justify-between text-[11px] text-slate-700">
                          <span className="font-mono font-bold text-blue-600">{v.symbol}</span>
                          <span className="font-medium">{language === 'ta' ? v.nameTa : v.name}</span>
                          <span className="font-mono text-slate-500 bg-white px-1.5 py-0.5 rounded border border-slate-200 text-[10px]">{v.siUnit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* SI Unit & Dimension Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-1">
                    <div className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-bold">
                      SI Unit: <span className="font-mono text-emerald-900 font-black">{formula.siUnit}</span>
                    </div>
                    <div className="px-2.5 py-1 rounded-lg bg-indigo-50 text-indigo-800 border border-indigo-200 text-[11px] font-bold">
                      Dimension: <span className="font-mono text-indigo-900 font-black">{formula.dimension}</span>
                    </div>
                  </div>

                  {/* Memory Shortcut */}
                  {formula.memoryShortcut && (
                    <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-xs text-amber-900 flex items-start gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                      <div>
                        <span className="font-bold">Memory Trick: </span>
                        {formula.memoryShortcut}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 3. Derivations (5 Marks) */}
        {activeTab === 'derivations' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Activity className="w-5 h-5 text-indigo-600" />
                {language === 'ta' ? 'முக்கிய 5-மதிப்பெண் வழிமுறைகள்' : 'High-Yield 5-Mark Mathematical Derivations'}
              </h3>
              <span className="text-xs font-bold text-slate-500">
                Complete Step-by-Step Proofs
              </span>
            </div>

            <div className="space-y-4">
              {currentChapter.derivations.map((der) => {
                const isExpanded = expandedDerivationId === der.id;
                return (
                  <div
                    key={der.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedDerivationId(isExpanded ? null : der.id)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50"
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-800 text-[10px] font-black uppercase">
                            5 Marks Derivation
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                            {der.examImportance}
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-slate-900">
                          {language === 'ta' ? der.titleTa : der.title}
                        </h4>
                        {language !== 'ta' && (
                          <p className="text-xs font-semibold text-indigo-600">{der.titleTa}</p>
                        )}
                      </div>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${isExpanded ? 'rotate-180 text-indigo-600' : ''}`} />
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-6 pt-2 border-t border-slate-100 bg-slate-50/50 space-y-4 text-sm">
                        {/* Aim & To Prove Box */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div className="bg-white p-3.5 rounded-xl border border-slate-200">
                            <span className="font-bold text-xs uppercase text-slate-500 block mb-1">Aim:</span>
                            <p className="text-xs text-slate-700 font-medium">{der.aim}</p>
                          </div>
                          <div className="bg-indigo-50/80 p-3.5 rounded-xl border border-indigo-100">
                            <span className="font-bold text-xs uppercase text-indigo-800 block mb-1">To Prove:</span>
                            <p className="text-xs font-mono font-bold text-indigo-950">{der.toProve}</p>
                          </div>
                        </div>

                        {/* Given & Assumptions */}
                        <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                          <span className="font-bold text-xs uppercase tracking-wider text-slate-600 block">
                            Given Information & Initial Setup:
                          </span>
                          <ul className="space-y-1 text-slate-600">
                            {der.given.map((g, gIdx) => (
                              <li key={gIdx} className="flex items-start gap-1.5">
                                <span className="text-blue-500 font-bold">•</span>
                                <span>{g}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Step-by-Step Proof Stages */}
                        <div className="space-y-3">
                          <h5 className="font-bold text-xs uppercase tracking-wider text-slate-700">
                            Step-by-Step Derivation Procedure:
                          </h5>
                          {der.steps.map((step) => (
                            <div key={step.stepNumber} className="bg-white p-4 rounded-xl border border-slate-200 shadow-2xs space-y-2">
                              <div className="flex items-center gap-2">
                                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-black flex items-center justify-center">
                                  {step.stepNumber}
                                </span>
                                <span className="font-bold text-xs text-slate-800">
                                  {language === 'ta' ? step.descriptionTa : step.description}
                                </span>
                              </div>
                              {step.equation && (
                                <div className="bg-slate-900 text-cyan-300 p-3 rounded-lg font-mono text-xs overflow-x-auto shadow-inner">
                                  {step.equation}
                                </div>
                              )}
                              {step.note && (
                                <p className="text-[11px] text-slate-500 italic pl-8">
                                  Reason / Note: {step.note}
                                </p>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* Final Result Box */}
                        <div className="bg-gradient-to-r from-indigo-900 to-blue-900 text-white p-4 rounded-xl shadow-md space-y-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">Final Equation to Enclose in Box:</span>
                          <div className="text-base font-mono font-black text-amber-300">{der.finalEquation}</div>
                          <p className="text-xs text-blue-100 pt-1">
                            {language === 'ta' ? der.physicalMeaningTa : der.physicalMeaning}
                          </p>
                        </div>

                        {/* Common Mistakes Warning */}
                        {der.commonMistakes && der.commonMistakes.length > 0 && (
                          <div className="bg-rose-50 p-3.5 rounded-xl border border-rose-200 text-xs text-rose-900 space-y-1">
                            <span className="font-bold flex items-center gap-1.5">
                              <XCircle className="w-3.5 h-3.5 text-rose-600" /> Common Board Exam Mistakes to Avoid:
                            </span>
                            <ul className="list-disc list-inside space-y-0.5 pl-1 text-rose-800">
                              {der.commonMistakes.map((m, mIdx) => (
                                <li key={mIdx}>{m}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 4. Numerical Problem Solver */}
        {activeTab === 'numericals' && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-emerald-600" />
                {language === 'ta' ? 'படி வாரியாக தீர்க்கப்பட்ட கணக்குகள்' : 'Step-by-Step Solved Numerical Problems'}
              </h3>

              {/* Difficulty Level Filter */}
              <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-200 text-xs font-bold">
                {['All', 'Easy', 'Medium', 'Exam-Level'].map((lvl) => (
                  <button
                    key={lvl}
                    onClick={() => setSelectedNumericalLevel(lvl as any)}
                    className={`px-3 py-1 rounded-lg transition-all ${
                      selectedNumericalLevel === lvl
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {currentChapter.numericals
                .filter(num => selectedNumericalLevel === 'All' || num.level === selectedNumericalLevel)
                .map((num, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 hover:shadow-md transition-all space-y-4"
                  >
                    {/* Header: Level & Title */}
                    <div className="flex items-center justify-between">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-black uppercase tracking-wider ${
                        num.level === 'Easy' ? 'bg-emerald-100 text-emerald-800' :
                        num.level === 'Medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-rose-100 text-rose-800'
                      }`}>
                        {num.level} Problem
                      </span>
                      <h4 className="text-sm font-bold text-slate-800">{num.title}</h4>
                    </div>

                    {/* Question Prompt */}
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-sm space-y-1">
                      <p className="text-slate-800 font-medium leading-relaxed">
                        {language === 'ta' ? num.questionTa : num.question}
                      </p>
                      {language !== 'ta' && (
                        <p className="text-xs text-slate-500 font-medium">{num.questionTa}</p>
                      )}
                    </div>

                    {/* Given and Required Data */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="bg-blue-50/60 p-3 rounded-xl border border-blue-100">
                        <span className="font-bold text-blue-900 block mb-1">Given Data:</span>
                        <div className="space-y-0.5 font-mono text-slate-700">
                          {Object.entries(num.given).map(([k, v]) => (
                            <div key={k} className="flex justify-between">
                              <span className="font-bold text-blue-700">{k}:</span>
                              <span>{v}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-indigo-50/60 p-3 rounded-xl border border-indigo-100">
                        <span className="font-bold text-indigo-900 block mb-1">Formula to Apply:</span>
                        <div className="font-mono text-indigo-950 font-bold">{num.formulaUsed}</div>
                      </div>
                    </div>

                    {/* Step-by-Step Solution */}
                    <div className="space-y-2 text-xs">
                      <span className="font-bold uppercase tracking-wider text-slate-500 block">
                        Step-by-Step Calculation:
                      </span>
                      {num.steps.map((s) => (
                        <div key={s.stepNumber} className="bg-slate-50 p-3 rounded-lg border border-slate-200/60 space-y-1">
                          <div className="font-semibold text-slate-700">
                            Step {s.stepNumber}: {s.description}
                          </div>
                          <div className="bg-white p-2 rounded border border-slate-200 font-mono text-blue-700 overflow-x-auto">
                            {s.math}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Final Answer Banner */}
                    <div className="bg-emerald-50 border border-emerald-300 p-3.5 rounded-xl flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 block">Final Answer:</span>
                        <span className="text-sm font-mono font-black text-emerald-950">{num.finalAnswer}</span>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-emerald-600 text-white text-xs font-mono font-bold">
                        {num.siUnit}
                      </span>
                    </div>

                    {/* Shortcut & Common Errors */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
                      {num.shortcutMethod && (
                        <div className="bg-amber-50 p-2.5 rounded-lg border border-amber-200 text-amber-900">
                          <span className="font-bold">⚡ Shortcut Tip: </span>{num.shortcutMethod}
                        </div>
                      )}
                      {num.examTip && (
                        <div className="bg-blue-50 p-2.5 rounded-lg border border-blue-200 text-blue-900">
                          <span className="font-bold">🎯 Board Exam Tip: </span>{num.examTip}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 5. Diagrams & Graphs */}
        {activeTab === 'diagrams' && (
          <div className="space-y-6">
            {/* Scientific Diagrams */}
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <Eye className="w-5 h-5 text-blue-600" />
                  {language === 'ta' ? 'அறிவியல் வரைபடங்கள் & பாகங்கள்' : 'Scientific Diagrams, Parts & Drawing Guides'}
                </h3>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {currentChapter.diagrams.map((diag) => (
                  <div
                    key={diag.id}
                    className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 text-[10px] font-black uppercase">
                        {diag.examImportance}
                      </span>
                      <span className="text-xs font-bold text-slate-400 font-mono">{diag.id}</span>
                    </div>

                    <h4 className="text-base font-bold text-slate-900">
                      {language === 'ta' ? diag.nameTa : diag.name}
                    </h4>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {diag.purpose}
                    </p>

                    {/* Step-by-Step Drawing Guide */}
                    <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 text-xs space-y-1.5">
                      <span className="font-bold text-slate-800 block">How to Draw in Exam:</span>
                      <ol className="list-decimal list-inside space-y-1 text-slate-600">
                        {diag.stepByStepExplanation.map((step, sIdx) => (
                          <li key={sIdx}>{step}</li>
                        ))}
                      </ol>
                    </div>

                    {/* Labeled Parts List */}
                    <div className="flex flex-wrap gap-1.5">
                      {diag.labelsEn.map((label, lIdx) => (
                        <span key={lIdx} className="px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 border border-blue-200 text-[11px] font-semibold">
                          {label}
                        </span>
                      ))}
                    </div>

                    {/* AI Image Generation Prompt Box */}
                    {diag.aiImagePrompt && (
                      <div className="bg-slate-900 text-slate-300 p-3 rounded-xl text-[11px] font-mono space-y-1">
                        <div className="flex items-center justify-between text-cyan-400 font-bold text-[10px] uppercase">
                          <span className="flex items-center gap-1"><Sparkles className="w-3 h-3" /> AI Image Prompt:</span>
                        </div>
                        <p className="text-slate-400 line-clamp-2">{diag.aiImagePrompt}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Graphs */}
            {currentChapter.graphs && currentChapter.graphs.length > 0 && (
              <div className="space-y-4 pt-4 border-t border-slate-200">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-indigo-600" />
                  {language === 'ta' ? 'முக்கிய இயற்பியல் வரைபடங்கள்' : 'Characteristic Curves & Graphical Analysis'}
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {currentChapter.graphs.map((graph) => (
                    <div
                      key={graph.id}
                      className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-3"
                    >
                      <h4 className="text-base font-bold text-slate-900">
                        {language === 'ta' ? graph.nameTa : graph.name}
                      </h4>

                      {/* Axes info */}
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-500 block text-[10px] uppercase">X-Axis:</span>
                          <span className="font-semibold text-slate-800">{graph.xAxis}</span>
                        </div>
                        <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200">
                          <span className="font-bold text-slate-500 block text-[10px] uppercase">Y-Axis:</span>
                          <span className="font-semibold text-slate-800">{graph.yAxis}</span>
                        </div>
                      </div>

                      {/* Mathematical formula */}
                      <div className="bg-indigo-50/80 p-2.5 rounded-lg border border-indigo-100 text-xs font-mono font-bold text-indigo-950">
                        {graph.mathematicalRelationship}
                      </div>

                      {/* Physical Meaning */}
                      <p className="text-xs text-slate-600">
                        <span className="font-bold text-slate-800">Physical Interpretation: </span>
                        {graph.physicalMeaning}
                      </p>

                      {/* AI Graph Prompt */}
                      {graph.aiGraphPrompt && (
                        <div className="bg-slate-900 text-slate-300 p-3 rounded-xl text-[11px] font-mono space-y-1">
                          <div className="text-cyan-400 font-bold text-[10px] uppercase flex items-center gap-1">
                            <Sparkles className="w-3 h-3" /> AI Graph Render Prompt:
                          </div>
                          <p className="text-slate-400 line-clamp-2">{graph.aiGraphPrompt}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* TAB CONTENT: 6. Lab & Experiments */}
        {activeTab === 'lab' && (
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Sliders className="w-5 h-5 text-teal-600" />
                {language === 'ta' ? 'ஆய்வக சோதனைகளும் செயல்முறை விளக்கங்களும்' : 'Physics Laboratory Experiments & Practical Verifications'}
              </h3>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentChapter.experiments.map((exp) => (
                <div
                  key={exp.id}
                  className="bg-white rounded-2xl border border-slate-200 shadow-xs p-5 space-y-4"
                >
                  <h4 className="text-base font-bold text-slate-900">
                    {language === 'ta' ? exp.nameTa : exp.name}
                  </h4>

                  {/* Principle Box */}
                  <div className="bg-teal-50/80 p-4 rounded-xl border border-teal-100 text-xs space-y-1">
                    <span className="font-bold text-teal-900 uppercase tracking-wider block text-[10px]">Working Principle:</span>
                    <p className="text-teal-950 font-medium leading-relaxed">
                      {language === 'ta' ? exp.principleTa : exp.principle}
                    </p>
                  </div>

                  {/* Apparatus Required */}
                  <div>
                    <span className="text-xs font-bold text-slate-700 block mb-1.5">Apparatus Required:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {exp.apparatus.map((item, iIdx) => (
                        <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium border border-slate-200">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Step-by-Step Procedure */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-800 uppercase tracking-wider block text-[10px]">Step-by-Step Procedure:</span>
                    <ol className="list-decimal list-inside space-y-1 text-slate-700">
                      {exp.procedure.map((step, sIdx) => (
                        <li key={sIdx}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  {/* Observation & Result */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-500 block text-[10px] uppercase">Observation:</span>
                      <p className="text-slate-800">{exp.observation}</p>
                    </div>
                    <div className="bg-white p-3 rounded-xl border border-slate-200">
                      <span className="font-bold text-slate-500 block text-[10px] uppercase">Result:</span>
                      <p className="text-emerald-800 font-semibold">{exp.result}</p>
                    </div>
                  </div>

                  {/* Precautions */}
                  {exp.precautions && exp.precautions.length > 0 && (
                    <div className="bg-amber-50 p-3 rounded-xl border border-amber-200 text-xs text-amber-900">
                      <span className="font-bold">⚠️ Laboratory Precautions: </span>
                      {exp.precautions.join('; ')}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 7. Interactive 3D AI Lesson */}
        {activeTab === 'aiLesson' && (
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-indigo-800/40 relative overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 text-xs font-black uppercase tracking-wider border border-cyan-500/30">
                    Interactive 3D AI Lesson
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                    {currentChapter.aiLesson.lessonTitle}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">
                    Scene {currentSceneIndex + 1} of {currentChapter.aiLesson.scenes.length}
                  </span>
                </div>
              </div>

              {/* Current Scene Display */}
              {(() => {
                const scene = currentChapter.aiLesson.scenes[currentSceneIndex];
                if (!scene) return null;

                return (
                  <div className="space-y-6">
                    {/* Scene Header */}
                    <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                      <Sparkles className="w-4 h-4" />
                      <span>{scene.sceneTitle}</span>
                    </div>

                    {/* 3D Visualizer Simulation Box */}
                    <div className="bg-black/60 rounded-2xl p-6 border border-cyan-500/30 text-center space-y-3 relative overflow-hidden backdrop-blur-md">
                      <div className="w-16 h-16 mx-auto rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center animate-pulse">
                        <Atom className="w-8 h-8 text-cyan-300" />
                      </div>
                      <p className="text-xs font-mono text-cyan-200 max-w-xl mx-auto">
                        [3D Visual Engine]: {scene.animationDescription}
                      </p>
                      <div className="flex flex-wrap justify-center gap-2 pt-2">
                        {scene.keywordsDisplayed.map((kw, kIdx) => (
                          <span key={kIdx} className="px-2.5 py-1 rounded-full bg-cyan-900/60 text-cyan-300 border border-cyan-700/50 text-[11px] font-mono font-bold">
                            {kw}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Narration Script Box */}
                    <div className="bg-white/10 rounded-2xl p-4 border border-white/10 space-y-2 text-sm">
                      <span className="text-xs font-bold uppercase tracking-wider text-cyan-300 flex items-center gap-1.5">
                        <Volume2 className="w-3.5 h-3.5" /> AI Tutor Voice Explanation:
                      </span>
                      <p className="text-slate-100 leading-relaxed font-sans">
                        {language === 'ta' ? scene.explanationTa : scene.explanationEn}
                      </p>
                    </div>

                    {/* Interactive Checkpoint Quiz */}
                    {scene.interactiveQuestion && (
                      <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/40 rounded-2xl p-5 border border-indigo-400/30 space-y-3">
                        <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                          <HelpCircle className="w-4 h-4" /> Checkpoint Quiz
                        </div>
                        <p className="text-sm font-bold text-white">
                          {language === 'ta' ? scene.interactiveQuestion.questionTa : scene.interactiveQuestion.question}
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {(language === 'ta' ? scene.interactiveQuestion.optionsTa : scene.interactiveQuestion.options).map((opt, oIdx) => {
                            const isSelected = selectedQuizOption === oIdx;
                            const isCorrect = oIdx === scene.interactiveQuestion!.correctIndex;
                            let btnStyle = 'bg-white/10 text-slate-200 hover:bg-white/20 border-white/20';

                            if (isQuizAnswered) {
                              if (isCorrect) {
                                btnStyle = 'bg-emerald-600 text-white border-emerald-400 ring-2 ring-emerald-400';
                              } else if (isSelected) {
                                btnStyle = 'bg-rose-600 text-white border-rose-400';
                              } else {
                                btnStyle = 'bg-white/5 text-slate-400 border-white/10 opacity-50';
                              }
                            }

                            return (
                              <button
                                key={oIdx}
                                onClick={() => handleQuizSelect(oIdx)}
                                disabled={isQuizAnswered}
                                className={`p-3 rounded-xl border text-xs font-bold text-left transition-all cursor-pointer flex items-center justify-between ${btnStyle}`}
                              >
                                <span>{opt}</span>
                                {isQuizAnswered && isCorrect && <Check className="w-4 h-4 text-emerald-200" />}
                                {isQuizAnswered && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-rose-200" />}
                              </button>
                            );
                          })}
                        </div>

                        {isQuizAnswered && (
                          <div className="bg-white/10 p-3 rounded-xl text-xs text-cyan-200 border border-cyan-400/20 animate-fadeIn">
                            <span className="font-bold text-white">Explanation: </span>
                            {scene.interactiveQuestion.explanation}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Navigation Buttons */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <button
                        onClick={handlePrevScene}
                        disabled={currentSceneIndex === 0}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 disabled:opacity-30 text-white text-xs font-bold transition-all cursor-pointer"
                      >
                        ← Previous Scene
                      </button>
                      <button
                        onClick={handleNextScene}
                        disabled={currentSceneIndex === currentChapter.aiLesson.scenes.length - 1}
                        className="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 disabled:opacity-30 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
                      >
                        Next Scene →
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        )}

        {/* TAB CONTENT: 8. Exam Booster & Question Bank */}
        {activeTab === 'examPrep' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                {language === 'ta' ? 'அரசுத் தேர்வு வினா வங்கி (1M, 2M, 3M, 5M)' : 'TN State Board Exam Booster & Model Question Bank'}
              </h3>
            </div>

            {/* 1-Mark Questions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h4 className="text-sm font-black text-blue-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-800 text-xs flex items-center justify-center">1M</span>
                1-Mark Short Questions & Answers
              </h4>
              <div className="space-y-2.5">
                {currentChapter.examPreparation.oneMarkQuestions.map((q, idx) => (
                  <div key={idx} className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 text-xs space-y-1">
                    <p className="font-bold text-slate-800">Q{idx + 1}: {language === 'ta' ? q.qTa : q.q}</p>
                    <p className="text-emerald-700 font-semibold pl-4">Ans: {language === 'ta' ? q.aTa : q.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2-Mark Questions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h4 className="text-sm font-black text-indigo-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-indigo-100 text-indigo-800 text-xs flex items-center justify-center">2M</span>
                2-Mark Conceptual Questions & Answers
              </h4>
              <div className="space-y-2.5">
                {currentChapter.examPreparation.twoMarkQuestions.map((q, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
                    <p className="font-bold text-slate-900">Q{idx + 1}: {language === 'ta' ? q.qTa : q.q}</p>
                    <p className="text-slate-700 pl-4 leading-relaxed">Ans: {language === 'ta' ? q.aTa : q.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 3-Mark Questions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h4 className="text-sm font-black text-emerald-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 text-xs flex items-center justify-center">3M</span>
                3-Mark Detailed Questions & Explanations
              </h4>
              <div className="space-y-2.5">
                {currentChapter.examPreparation.threeMarkQuestions.map((q, idx) => (
                  <div key={idx} className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs space-y-1.5">
                    <p className="font-bold text-slate-900">Q{idx + 1}: {language === 'ta' ? q.qTa : q.q}</p>
                    <p className="text-slate-700 pl-4 leading-relaxed">Ans: {language === 'ta' ? q.aTa : q.a}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 5-Mark Essay Questions */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 space-y-3 shadow-xs">
              <h4 className="text-sm font-black text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 text-xs flex items-center justify-center">5M</span>
                5-Mark Major Derivations & Full Essay Topics
              </h4>
              <div className="space-y-3">
                {currentChapter.examPreparation.fiveMarkQuestions.map((q, idx) => (
                  <div key={idx} className="bg-amber-50/40 p-4 rounded-xl border border-amber-200/80 text-xs space-y-2">
                    <p className="font-bold text-slate-900 text-sm">Q{idx + 1}: {language === 'ta' ? q.qTa : q.q}</p>
                    <div className="bg-white p-3 rounded-lg border border-amber-200 text-slate-700 leading-relaxed">
                      <span className="font-bold text-amber-900 block mb-1">Model Answer Key:</span>
                      {language === 'ta' ? q.aTa : q.a}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frequently Repeated Concepts */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-2xl border border-blue-200 space-y-2">
              <h5 className="font-black text-xs uppercase tracking-wider text-blue-900 flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-rose-500" /> Frequently Repeated Board Exam Concepts (Most Important)
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {currentChapter.examPreparation.frequentlyRepeatedConcepts.map((item, idx) => (
                  <div key={idx} className="bg-white p-2.5 rounded-lg border border-blue-100 text-blue-950 font-bold flex items-center gap-2 shadow-2xs">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};
