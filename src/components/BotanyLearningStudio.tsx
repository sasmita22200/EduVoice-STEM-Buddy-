import React, { useState, useEffect } from 'react';
import { 
  BookOpen, Sparkles, Volume2, Video, Image as ImageIcon, 
  HelpCircle, CheckCircle2, ChevronRight, Download, Copy, Check,
  Search, Play, Pause, RotateCcw, Award, Lightbulb, Bookmark,
  Layers, ArrowLeft, ArrowRight, Share2, Eye, ShieldCheck, Microscope
} from 'lucide-react';
import { Language } from '../types';
import { COMPLETE_CLASS_11_BOTANY_CURRICULUM, BOTANY_UNITS_METADATA, generateBotanyMarkdownTable } from '../data/botanyAllChapters';
import { BotanyChapter } from '../data/class11BotanyCurriculum';

interface BotanyLearningStudioProps {
  language: Language;
  onLanguageChange?: (lang: Language) => void;
  onBackToPortal?: () => void;
}

export const BotanyLearningStudio: React.FC<BotanyLearningStudioProps> = ({
  language,
  onLanguageChange,
  onBackToPortal
}) => {
  const [selectedChapterNumber, setSelectedChapterNumber] = useState<number>(1);
  const [selectedUnit, setSelectedUnit] = useState<number | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'content' | 'shortNotes' | 'diagrams' | 'visualization' | 'narration' | 'fullTable'>('content');
  const [searchQuery, setSearchQuery] = useState('');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechRate, setSpeechRate] = useState(1.0);
  const [copiedMarkdown, setCopiedMarkdown] = useState(false);
  const [currentQuizAnswer, setCurrentQuizAnswer] = useState<number | null>(null);
  const [showQuizExplanation, setShowQuizExplanation] = useState(false);

  const isTa = language === 'ta';

  // Filtered chapters based on unit & search query
  const filteredChapters = COMPLETE_CLASS_11_BOTANY_CURRICULUM.filter((ch) => {
    const matchesUnit = selectedUnit === 'all' || ch.unitNumber === selectedUnit;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesUnit;
    const matchesSearch = 
      ch.chapterName.toLowerCase().includes(query) ||
      ch.chapterNameTa.includes(query) ||
      ch.overview.toLowerCase().includes(query) ||
      ch.overviewTa.includes(query) ||
      ch.coreConcepts.some(c => c.toLowerCase().includes(query)) ||
      ch.chapterNumber.toString() === query;
    return matchesUnit && matchesSearch;
  });

  const currentChapter: BotanyChapter = 
    COMPLETE_CLASS_11_BOTANY_CURRICULUM.find(c => c.chapterNumber === selectedChapterNumber) || 
    COMPLETE_CLASS_11_BOTANY_CURRICULUM[0];

  // Stop speech when changing chapter or tab
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    }
    setCurrentQuizAnswer(null);
    setShowQuizExplanation(false);
  }, [selectedChapterNumber, activeTab, language]);

  const handleSpeakNarration = () => {
    if (typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }

    const scriptToSpeak = isTa ? currentChapter.voiceNarration.scriptTa : currentChapter.voiceNarration.scriptEn;
    const utterance = new SpeechSynthesisUtterance(scriptToSpeak);
    utterance.rate = speechRate;
    utterance.lang = isTa ? 'ta-IN' : 'en-US';

    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);

    window.speechSynthesis.speak(utterance);
    setIsPlayingAudio(true);
  };

  const handleCopyMarkdown = () => {
    const md = generateBotanyMarkdownTable(language);
    navigator.clipboard.writeText(md);
    setCopiedMarkdown(true);
    setTimeout(() => setCopiedMarkdown(false), 2500);
  };

  const handleDownloadMarkdown = () => {
    const md = generateBotanyMarkdownTable(language);
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `TN_Class_11_Botany_2026_Curriculum_${language}.md`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const unitInfo = BOTANY_UNITS_METADATA.find(u => u.unitNumber === currentChapter.unitNumber);

  return (
    <div className="w-full flex flex-col items-center bg-slate-50 text-slate-800 pb-16">
      {/* Top Banner & EduVoice STEM Header */}
      <div className="w-full max-w-5xl bg-gradient-to-r from-blue-700 via-indigo-700 to-emerald-700 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden mb-6 mt-2 border border-white/20">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-emerald-400/20 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none" />
        
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold uppercase tracking-wider mb-2 border border-white/30 text-blue-100">
              <Sparkles className="w-3.5 h-3.5 text-yellow-300 animate-pulse" />
              <span>TN State Board • Class 11 Biology – Botany (2026 Syllabus)</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {isTa ? '11ஆம் வகுப்பு தாவரவியல் AI கற்றல் களம்' : 'Class 11 Botany AI Learning Studio'}
            </h1>
            <p className="text-blue-100 text-xs sm:text-sm mt-1 max-w-2xl">
              {isTa 
                ? 'அனைத்து 15 பாடங்களுக்கான முழுமையான கல்வி உள்ளடக்கம், வரைபடங்கள், 3D காட்சி தூண்டுதல்கள் மற்றும் ஆசிரியர் குரல் விளக்கம்.' 
                : 'Complete curriculum for all 15 chapters with AI image prompts, 3D visualization storyboards, and bilingual teacher voice narration.'}
            </p>
          </div>

          {/* Action Tools */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Language Switcher */}
            {onLanguageChange && (
              <div className="flex bg-black/30 p-1 rounded-2xl border border-white/20 backdrop-blur-md">
                <button
                  type="button"
                  onClick={() => onLanguageChange('ta')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    isTa ? 'bg-emerald-500 text-white shadow-sm' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  தமிழ்
                </button>
                <button
                  type="button"
                  onClick={() => onLanguageChange('en')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    !isTa ? 'bg-blue-500 text-white shadow-sm' : 'text-blue-200 hover:text-white'
                  }`}
                >
                  English
                </button>
              </div>
            )}

            {/* Markdown Table Export */}
            <button
              type="button"
              onClick={handleCopyMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold backdrop-blur-md border border-white/30 transition-all cursor-pointer active:scale-95"
              title="Copy Complete 15-Chapter Markdown Table"
            >
              {copiedMarkdown ? <Check className="w-3.5 h-3.5 text-emerald-300" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedMarkdown ? (isTa ? 'நகலெடுக்கப்பட்டது!' : 'Copied Table!') : (isTa ? 'அட்டவணை நகல்' : 'Copy Table')}</span>
            </button>

            <button
              type="button"
              onClick={handleDownloadMarkdown}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-xs font-bold shadow-md transition-all cursor-pointer active:scale-95"
              title="Download Full Markdown File"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{isTa ? 'பதிவிறக்கம்' : 'Download .md'}</span>
            </button>

            {onBackToPortal && (
              <button
                type="button"
                onClick={onBackToPortal}
                className="inline-flex items-center gap-1 px-3 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold border border-white/20 transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>{isTa ? 'போர்டல்' : 'Portal'}</span>
              </button>
            )}
          </div>
        </div>

        {/* 15 Chapter Pills Quick Selector */}
        <div className="mt-5 pt-4 border-t border-white/20 flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] font-bold text-blue-200 uppercase mr-1">
            {isTa ? 'பாடங்கள் (1-15):' : 'Chapters (1-15):'}
          </span>
          {COMPLETE_CLASS_11_BOTANY_CURRICULUM.map((ch) => {
            const isSelected = ch.chapterNumber === selectedChapterNumber;
            return (
              <button
                key={ch.chapterNumber}
                type="button"
                onClick={() => setSelectedChapterNumber(ch.chapterNumber)}
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg text-xs font-extrabold flex items-center justify-center transition-all cursor-pointer ${
                  isSelected 
                    ? 'bg-yellow-400 text-slate-950 shadow-md scale-110 ring-2 ring-white' 
                    : 'bg-white/20 text-white hover:bg-white/30'
                }`}
                title={`Chapter ${ch.chapterNumber}: ${isTa ? ch.chapterNameTa : ch.chapterName}`}
              >
                {ch.chapterNumber}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Studio Content Area */}
      <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-6 px-2">
        {/* Left Sidebar: Unit & Chapter Browser (3.5 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Search & Unit Filters */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80">
            <div className="relative mb-3">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isTa ? 'பாடம் அல்லது தலைப்பைத் தேடுக...' : 'Search chapter or concept...'}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-slate-50 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all"
              />
            </div>

            {/* Unit Tabs */}
            <div className="flex flex-col gap-1 text-xs">
              <button
                type="button"
                onClick={() => setSelectedUnit('all')}
                className={`text-left px-3 py-1.5 rounded-lg font-semibold transition-all cursor-pointer flex items-center justify-between ${
                  selectedUnit === 'all' ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span>{isTa ? 'அனைத்து அலகுகள் (1-5)' : 'All Units (1-5)'}</span>
                <span className="text-[10px] opacity-80">15 {isTa ? 'பாடங்கள்' : 'Chs'}</span>
              </button>
              {BOTANY_UNITS_METADATA.map((u) => (
                <button
                  key={u.unitNumber}
                  type="button"
                  onClick={() => setSelectedUnit(u.unitNumber)}
                  className={`text-left px-3 py-1.5 rounded-lg font-medium transition-all cursor-pointer flex items-center justify-between ${
                    selectedUnit === u.unitNumber 
                      ? 'bg-blue-100 text-blue-900 font-bold border border-blue-300' 
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <span className="truncate">{isTa ? u.titleTa : u.titleEn}</span>
                  <span className="text-[10px] text-slate-400 ml-2 shrink-0">Unit {u.unitNumber}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chapter List Card */}
          <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200/80 flex flex-col gap-2 max-h-[600px] overflow-y-auto">
            <div className="flex items-center justify-between mb-1 pb-2 border-b border-slate-100">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                {isTa ? 'பாடங்களின் பட்டியல்' : 'Chapters Curriculum'} ({filteredChapters.length})
              </h3>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">
                2026 Board Aligned
              </span>
            </div>

            {filteredChapters.map((ch) => {
              const isSelected = ch.chapterNumber === selectedChapterNumber;
              return (
                <button
                  key={ch.chapterNumber}
                  type="button"
                  onClick={() => setSelectedChapterNumber(ch.chapterNumber)}
                  className={`w-full text-left p-2.5 rounded-xl transition-all cursor-pointer border flex items-start gap-2.5 ${
                    isSelected 
                      ? 'bg-blue-50/90 border-blue-400 shadow-sm ring-1 ring-blue-300' 
                      : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/50'
                  }`}
                >
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center font-extrabold text-xs shrink-0 mt-0.5 ${
                    isSelected ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {ch.chapterNumber}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`text-xs font-bold truncate ${isSelected ? 'text-blue-900' : 'text-slate-800'}`}>
                      {isTa ? ch.chapterNameTa : ch.chapterName}
                    </p>
                    <p className="text-[10px] text-slate-500 truncate mt-0.5">
                      {isTa ? ch.unitNameTa : ch.unitName}
                    </p>
                  </div>
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-blue-600 translate-x-0.5' : 'text-slate-300'}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Main Panel: Chapter Deep-Dive (8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-4">
          {/* Chapter Header Card */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 shadow-sm border border-slate-200/80">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${unitInfo?.bgColor || 'bg-blue-50 text-blue-800 border-blue-200'}`}>
                {isTa ? currentChapter.unitNameTa : currentChapter.unitName}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium">
                <Microscope className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chapter {currentChapter.chapterNumber} of 15</span>
              </div>
            </div>

            <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              {isTa ? currentChapter.chapterNameTa : currentChapter.chapterName}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2 leading-relaxed">
              {isTa ? currentChapter.overviewTa : currentChapter.overview}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-2 mt-4 pt-3 border-t border-slate-100 text-xs">
              <div className="flex items-center gap-1 bg-amber-50 text-amber-800 px-2.5 py-1 rounded-lg font-medium border border-amber-200/60">
                <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
                <span>{currentChapter.diagrams.length} {isTa ? 'முக்கிய வரைபடங்கள்' : 'Key Diagrams'}</span>
              </div>
              <div className="flex items-center gap-1 bg-purple-50 text-purple-800 px-2.5 py-1 rounded-lg font-medium border border-purple-200/60">
                <Video className="w-3.5 h-3.5 text-purple-600" />
                <span>{currentChapter.aiVisualization.duration} {isTa ? '3D அனிமேஷன்' : '3D Animation'}</span>
              </div>
              <div className="flex items-center gap-1 bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-lg font-medium border border-emerald-200/60">
                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{isTa ? 'ஆசிரியர் குரல் வழிகாட்டி' : 'AI Voice Narration'}</span>
              </div>
            </div>

            {/* Navigation Tab Bar */}
            <div className="flex flex-wrap items-center gap-1 mt-5 bg-slate-100 p-1.5 rounded-2xl">
              <button
                type="button"
                onClick={() => setActiveTab('content')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'content' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                <span>{isTa ? 'கற்றல் பகுதி' : 'Learning Content'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('shortNotes')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'shortNotes' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Bookmark className="w-3.5 h-3.5" />
                <span>{isTa ? 'சுருக்கக் குறிப்புகள்' : 'Exam Notes & FAQs'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('diagrams')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'diagrams' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5" />
                <span>{isTa ? 'வரைபடங்கள்' : 'Diagrams & AI Image'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('visualization')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'visualization' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Video className="w-3.5 h-3.5" />
                <span>{isTa ? '3D அனிமேஷன்' : '3D AI Video Prompt'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('narration')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'narration' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Volume2 className="w-3.5 h-3.5" />
                <span>{isTa ? 'ஆசிரியர் குரல்' : 'Teacher Voice'}</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('fullTable')}
                className={`flex-1 min-w-[100px] inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  activeTab === 'fullTable' ? 'bg-white text-blue-700 shadow-sm' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{isTa ? 'முழு அட்டவணை' : 'Curriculum Table'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: LEARNING CONTENT */}
          {activeTab === 'content' && (
            <div className="flex flex-col gap-4">
              {/* Introduction & Core Concepts */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <h3 className="text-sm font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-blue-600" />
                  <span>{isTa ? 'பாட அறிமுகமும் முக்கிய கருத்துக்களும்' : 'Introduction & Core Concepts'}</span>
                </h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed bg-blue-50/60 p-3.5 rounded-2xl border border-blue-100 font-medium">
                  {currentChapter.introduction}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {currentChapter.coreConcepts.map((concept, idx) => (
                    <div key={idx} className="bg-slate-50 p-3 rounded-2xl border border-slate-200/80 flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <p className="text-xs text-slate-700 leading-snug">{concept}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Topic-Wise Explanations */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                  <BookOpen className="w-4 h-4 text-emerald-600" />
                  <span>{isTa ? 'தலைப்பு வாரியான விரிவான விளக்கங்கள்' : 'Topic-Wise Detailed Explanations'}</span>
                </h3>

                <div className="flex flex-col gap-4">
                  {currentChapter.topicWiseExplanation.map((topicItem, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-200 shadow-xs">
                      <h4 className="text-sm font-bold text-blue-950 mb-2">
                        {topicItem.topic}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                        {topicItem.explanation}
                      </p>
                      {topicItem.keyPoints && topicItem.keyPoints.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-slate-100 flex flex-wrap gap-2">
                          {topicItem.keyPoints.map((kp, kpIdx) => (
                            <span key={kpIdx} className="inline-flex items-center gap-1 text-[11px] bg-blue-50 text-blue-800 px-2.5 py-1 rounded-lg font-medium border border-blue-200/60">
                              <CheckCircle2 className="w-3 h-3 text-blue-600" />
                              <span>{kp}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Definitions Card */}
              {currentChapter.definitions.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                    <ShieldCheck className="w-4 h-4 text-purple-600" />
                    <span>{isTa ? 'முக்கிய அறிவியல் வரைவிலக்கணங்கள்' : 'Standard Scientific Definitions'}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentChapter.definitions.map((def, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-purple-50/50 border border-purple-100 flex flex-col justify-between">
                        <div>
                          <p className="text-xs font-bold text-purple-950">
                            {isTa ? def.termTa : def.term}
                          </p>
                          <p className="text-[11px] text-slate-700 mt-1 leading-relaxed">
                            {isTa ? def.definitionTa : def.definition}
                          </p>
                        </div>
                        <p className="text-[10px] text-purple-600 font-semibold mt-2">
                          {isTa ? `ஆங்கிலத்தில்: ${def.term}` : `In Tamil: ${def.termTa}`}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Tables (if present) */}
              {currentChapter.importantTables && currentChapter.importantTables.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 overflow-hidden">
                  {currentChapter.importantTables.map((table, tIdx) => (
                    <div key={tIdx} className="overflow-x-auto">
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                        📊 {table.title}
                      </h4>
                      <table className="w-full text-xs text-left border-collapse border border-slate-200 rounded-xl overflow-hidden">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            {table.headers.map((h, hIdx) => (
                              <th key={hIdx} className="p-2.5 font-bold border border-blue-500">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-slate-50' : 'bg-white'}>
                              {row.map((cell, cIdx) => (
                                <td key={cIdx} className="p-2.5 border border-slate-200 text-slate-700 leading-snug">
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* TAB 2: SHORT NOTES & FAQS */}
          {activeTab === 'shortNotes' && (
            <div className="flex flex-col gap-4">
              {/* 5 Key Takeaways Card */}
              <div className="bg-gradient-to-br from-emerald-500 to-teal-700 text-white rounded-3xl p-6 shadow-md relative overflow-hidden">
                <h3 className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4 text-yellow-300" />
                  <span>{isTa ? '5 முக்கிய நினைவூட்டல்கள்' : '5 Key Exam Takeaways'}</span>
                </h3>
                <div className="flex flex-col gap-2.5">
                  {currentChapter.fiveKeyTakeaways.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 bg-white/10 backdrop-blur-md p-2.5 rounded-xl border border-white/20">
                      <CheckCircle2 className="w-4 h-4 text-yellow-300 shrink-0 mt-0.5" />
                      <p className="text-xs leading-snug font-medium">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memory Tricks & Mnemonics */}
              {currentChapter.memoryTricks && currentChapter.memoryTricks.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                  <h3 className="text-sm font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <Lightbulb className="w-4 h-4 text-amber-500" />
                    <span>{isTa ? 'நினைவில் வைக்கும் உத்திகள் (Mnemonics)' : 'Memory Tricks & Mnemonics'}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentChapter.memoryTricks.map((trick, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200">
                        <p className="text-xs font-bold text-amber-900">💡 {trick.mnemonic}</p>
                        <p className="text-xs text-slate-700 mt-1 font-medium">{trick.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Common Pitfalls & Mistakes */}
              {currentChapter.commonMistakes && currentChapter.commonMistakes.length > 0 && (
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                  <h3 className="text-sm font-bold text-rose-900 uppercase tracking-wider flex items-center gap-2 mb-3">
                    <ShieldCheck className="w-4 h-4 text-rose-600" />
                    <span>{isTa ? 'தேர்வில் தவிர்க்க வேண்டிய தவறுகள்' : 'Common Exam Pitfalls & Fixes'}</span>
                  </h3>
                  <div className="flex flex-col gap-3">
                    {currentChapter.commonMistakes.map((cm, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-rose-50/60 border border-rose-200">
                        <p className="text-xs text-rose-900 font-semibold">❌ <span className="underline">தவறு / Mistake:</span> {cm.mistake}</p>
                        <p className="text-xs text-emerald-800 font-bold mt-1">✅ <span className="underline">சரியானது / Correction:</span> {cm.correction}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Board Exam FAQs with Mark Weights */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                  <HelpCircle className="w-4 h-4 text-blue-600" />
                  <span>{isTa ? 'அரசு பொதுத்தேர்வு வினாக்களும் விடைகளும்' : 'State Board Exam Questions & Model Answers'}</span>
                </h3>

                <div className="flex flex-col gap-3">
                  {currentChapter.faqs.map((faq, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-xs font-bold text-blue-900">Q{idx + 1}. {faq.question}</span>
                        <span className="text-[10px] bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-md shrink-0">
                          {faq.markWeight}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 leading-relaxed mt-1">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: DIAGRAMS & AI IMAGE PROMPTS */}
          {activeTab === 'diagrams' && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-blue-600" />
                    <span>{isTa ? 'பாடத்தின் முக்கிய வரைபடங்கள்' : 'Exam-Crucial Botanical Diagrams'}</span>
                  </h3>
                  <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-2.5 py-1 rounded-full border border-indigo-200">
                    AI Prompts Ready
                  </span>
                </div>

                <div className="flex flex-col gap-6">
                  {currentChapter.diagrams.map((diag) => (
                    <div key={diag.id} className="p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200">
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                        <h4 className="text-sm sm:text-base font-extrabold text-blue-950">
                          {isTa ? diag.nameTa : diag.name}
                        </h4>
                        <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                          {diag.examImportance}
                        </span>
                      </div>

                      <p className="text-xs text-slate-600 mb-3">
                        {isTa ? diag.purposeTa : diag.purpose}
                      </p>

                      {/* Labels Grid */}
                      <div className="mb-4">
                        <p className="text-[11px] font-bold text-slate-500 uppercase mb-1.5">
                          {isTa ? 'குறிக்க வேண்டிய முக்கிய பாகங்கள்:' : 'Mandatory Exam Labels:'}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {diag.labels.map((label, lIdx) => (
                            <span key={lIdx} className="text-[11px] bg-white text-slate-700 font-medium px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">
                              🏷️ {label}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* AI Image Generation Prompt Card */}
                      <div className="p-3.5 rounded-xl bg-slate-900 text-slate-100 border border-slate-800">
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-[10px] font-bold text-yellow-400 uppercase tracking-wider flex items-center gap-1">
                            <Sparkles className="w-3 h-3 text-yellow-400" />
                            AI Image Generation Prompt (Midjourney / Imagen / DALL-E)
                          </span>
                          <button
                            type="button"
                            onClick={() => {
                              navigator.clipboard.writeText(diag.aiImagePrompt);
                              alert('AI Image Prompt Copied!');
                            }}
                            className="text-[10px] text-blue-300 hover:text-white flex items-center gap-1 font-semibold cursor-pointer"
                          >
                            <Copy className="w-3 h-3" />
                            <span>Copy Prompt</span>
                          </button>
                        </div>
                        <p className="text-xs font-mono text-slate-300 leading-relaxed bg-black/40 p-2.5 rounded-lg border border-slate-700/60">
                          {diag.aiImagePrompt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 3D AI VISUALIZATION PROMPT */}
          {activeTab === 'visualization' && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Video className="w-4 h-4 text-purple-600" />
                      <span>{isTa ? '3D AI அனிமேஷன் காட்சி கட்டமைப்பு' : '3D AI Visualization Storyboard'}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Format: <strong className="text-purple-700">{currentChapter.aiVisualization.format}</strong> • Duration: <strong className="text-emerald-700">{currentChapter.aiVisualization.duration}</strong>
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      const promptText = `Format: ${currentChapter.aiVisualization.format}\nScenes:\n1. ${currentChapter.aiVisualization.sceneBreakdown.scene1}\n2. ${currentChapter.aiVisualization.sceneBreakdown.scene2}\n3. ${currentChapter.aiVisualization.sceneBreakdown.scene3}\n4. ${currentChapter.aiVisualization.sceneBreakdown.scene4}\nCamera: ${currentChapter.aiVisualization.cameraDirection}\nStyle: ${currentChapter.aiVisualization.visualStyle}`;
                      navigator.clipboard.writeText(promptText);
                      alert('3D Video Storyboard Prompt Copied!');
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-800 text-xs font-bold transition-all cursor-pointer"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Full Storyboard</span>
                  </button>
                </div>

                {/* 4-Scene Storyboard Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                  <div className="p-4 rounded-2xl bg-purple-50/50 border border-purple-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-purple-600 text-white font-black text-xs flex items-center justify-center">1</span>
                      <h4 className="text-xs font-bold text-purple-950 uppercase">{isTa ? 'காட்சி 1 (அறிமுகம்)' : 'Scene 1: Introduction'}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentChapter.aiVisualization.sceneBreakdown.scene1}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-black text-xs flex items-center justify-center">2</span>
                      <h4 className="text-xs font-bold text-blue-950 uppercase">{isTa ? 'காட்சி 2 (நுண்ணமைப்பு)' : 'Scene 2: Microscopic Deep-Dive'}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentChapter.aiVisualization.sceneBreakdown.scene2}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-black text-xs flex items-center justify-center">3</span>
                      <h4 className="text-xs font-bold text-emerald-950 uppercase">{isTa ? 'காட்சி 3 (உடலியல் வினை)' : 'Scene 3: Mechanism & Action'}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentChapter.aiVisualization.sceneBreakdown.scene3}
                    </p>
                  </div>

                  <div className="p-4 rounded-2xl bg-amber-50/50 border border-amber-100">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-6 h-6 rounded-lg bg-amber-600 text-white font-black text-xs flex items-center justify-center">4</span>
                      <h4 className="text-xs font-bold text-amber-950 uppercase">{isTa ? 'காட்சி 4 (முடிவு)' : 'Scene 4: Synthesis & Application'}</h4>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {currentChapter.aiVisualization.sceneBreakdown.scene4}
                    </p>
                  </div>
                </div>

                {/* Camera & Visual Style Parameters */}
                <div className="p-4 rounded-2xl bg-slate-900 text-slate-200 text-xs">
                  <div className="mb-2">
                    <strong className="text-cyan-400">🎥 Camera Direction:</strong> {currentChapter.aiVisualization.cameraDirection}
                  </div>
                  <div>
                    <strong className="text-pink-400">🎨 Visual Rendering Style:</strong> {currentChapter.aiVisualization.visualStyle}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: TEACHER VOICE NARRATION */}
          {activeTab === 'narration' && (
            <div className="flex flex-col gap-4">
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-emerald-600" />
                      <span>{isTa ? 'ஆசிரியர் குரல் வழி விளக்கம் (Audio Podcast)' : 'Interactive AI Teacher Voice Narration'}</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {isTa ? currentChapter.voiceNarration.audioTitleTa : currentChapter.voiceNarration.audioTitle}
                    </p>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleSpeakNarration}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer active:scale-95 shadow-md ${
                        isPlayingAudio 
                          ? 'bg-rose-600 hover:bg-rose-700 text-white animate-pulse' 
                          : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                      }`}
                    >
                      {isPlayingAudio ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      <span>{isPlayingAudio ? (isTa ? 'நிறுத்து' : 'Pause Voice') : (isTa ? 'குரல் கேள்' : 'Listen Now')}</span>
                    </button>
                  </div>
                </div>

                {/* Voice Tone Badge */}
                <div className="mb-4">
                  <span className="text-[11px] bg-slate-100 text-slate-700 font-medium px-3 py-1 rounded-full border border-slate-200">
                    🎙️ Voice Tone: <strong>{currentChapter.voiceNarration.teacherTone}</strong>
                  </span>
                </div>

                {/* Bilingual Script */}
                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/40 border border-emerald-100 leading-relaxed text-slate-800 text-xs sm:text-sm font-medium">
                  <p className="italic">
                    "{isTa ? currentChapter.voiceNarration.scriptTa : currentChapter.voiceNarration.scriptEn}"
                  </p>
                </div>

                {/* English Alternative if in Tamil or vice versa */}
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <p className="text-[11px] font-bold text-slate-400 uppercase mb-1">
                    {isTa ? 'ஆங்கில உரை (English Script):' : 'Tamil Script (தமிழ் உரை):'}
                  </p>
                  <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-xl border border-slate-200">
                    "{isTa ? currentChapter.voiceNarration.scriptEn : currentChapter.voiceNarration.scriptTa}"
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: FULL CURRICULUM TABLE VIEW */}
          {activeTab === 'fullTable' && (
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/80 overflow-hidden">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    📋 {isTa ? '11ஆம் வகுப்பு தாவரவியல் முழு பாடத்திட்ட அட்டவணை' : 'Class 11 Botany Full Curriculum Table'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {isTa ? 'அனைத்து 15 பாடங்களின் சுருக்கம் ஒரே பார்வையில்' : 'All 15 Chapters at a glance in standard Markdown columns'}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyMarkdown}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copiedMarkdown ? 'Copied Markdown!' : 'Copy Markdown'}</span>
                </button>
              </div>

              <div className="overflow-x-auto max-h-[500px]">
                <table className="w-full text-xs text-left border-collapse border border-slate-200">
                  <thead>
                    <tr className="bg-slate-900 text-white sticky top-0 z-10">
                      <th className="p-3 border border-slate-700 min-w-[140px]">Chapter Name</th>
                      <th className="p-3 border border-slate-700 min-w-[200px]">Learning Content</th>
                      <th className="p-3 border border-slate-700 min-w-[180px]">Short Notes</th>
                      <th className="p-3 border border-slate-700 min-w-[160px]">Important Diagrams</th>
                      <th className="p-3 border border-slate-700 min-w-[160px]">AI Image Prompt</th>
                      <th className="p-3 border border-slate-700 min-w-[160px]">AI Visualization Prompt</th>
                      <th className="p-3 border border-slate-700 min-w-[160px]">Voice Narration</th>
                      <th className="p-3 border border-slate-700 min-w-[100px]">Video Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPLETE_CLASS_11_BOTANY_CURRICULUM.map((ch, idx) => (
                      <tr key={ch.chapterNumber} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                        <td className="p-3 border border-slate-200 font-bold text-blue-900 align-top">
                          Ch {ch.chapterNumber}: {isTa ? ch.chapterNameTa : ch.chapterName}
                          <br />
                          <span className="text-[10px] text-slate-500 font-normal">{isTa ? ch.unitNameTa : ch.unitName}</span>
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-700 align-top">
                          <p className="line-clamp-4">{isTa ? ch.overviewTa : ch.overview}</p>
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-700 align-top">
                          <ul className="list-disc list-inside space-y-1">
                            {ch.shortNotes.slice(0, 2).map((sn, i) => (
                              <li key={i} className="line-clamp-2">{sn}</li>
                            ))}
                          </ul>
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-700 align-top">
                          {ch.diagrams.map(d => (
                            <div key={d.id} className="mb-1">
                              <strong>{isTa ? d.nameTa : d.name}</strong>
                              <p className="text-[10px] text-slate-500">Labels: {d.labels.slice(0, 3).join(', ')}...</p>
                            </div>
                          ))}
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-600 align-top font-mono text-[11px]">
                          <p className="line-clamp-3">"{ch.diagrams[0]?.aiImagePrompt}"</p>
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-600 align-top text-[11px]">
                          <p className="line-clamp-3"><strong>{ch.aiVisualization.format}:</strong> {ch.aiVisualization.sceneBreakdown.scene1}</p>
                        </td>
                        <td className="p-3 border border-slate-200 text-slate-600 align-top text-[11px] italic">
                          <p className="line-clamp-3">"{isTa ? ch.voiceNarration.scriptTa : ch.voiceNarration.scriptEn}"</p>
                        </td>
                        <td className="p-3 border border-slate-200 text-center font-bold text-purple-700 align-top">
                          {ch.aiVisualization.duration}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Chapter Navigation Footer (Prev / Next) */}
          <div className="flex items-center justify-between p-4 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
            <button
              type="button"
              disabled={currentChapter.chapterNumber <= 1}
              onClick={() => setSelectedChapterNumber(prev => Math.max(1, prev - 1))}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentChapter.chapterNumber <= 1
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{isTa ? 'முந்தைய பாடம்' : 'Previous Chapter'}</span>
            </button>

            <span className="text-xs font-bold text-slate-500">
              {currentChapter.chapterNumber} / 15
            </span>

            <button
              type="button"
              disabled={currentChapter.chapterNumber >= 15}
              onClick={() => setSelectedChapterNumber(prev => Math.min(15, prev + 1))}
              className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                currentChapter.chapterNumber >= 15
                  ? 'opacity-40 cursor-not-allowed text-slate-400'
                  : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
              }`}
            >
              <span>{isTa ? 'அடுத்த பாடம்' : 'Next Chapter'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
