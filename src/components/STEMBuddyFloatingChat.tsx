import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ThumbsUp, 
  Flag, 
  BookOpen, 
  Calendar, 
  Mic, 
  RotateCcw,
  Zap,
  HelpCircle,
  GraduationCap,
  Layers,
  ChevronDown,
  Loader2,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { Language, ClassLevel } from '../types';
import { ALL_CHAPTERS, CHAPTER_NOTES, SUBJECT_METADATA } from '../data/eduvoiceSyllabus';
import { solveStudentDoubt, DoubtAnswerResult } from '../services/stemBuddyService';
import { DOUBT_KNOWLEDGE_BANK } from '../data/doubtKnowledgeBank';

interface STEMBuddyFloatingChatProps {
  lang: Language;
  currentClass?: ClassLevel;
  currentSubjectName?: string;
  currentChapterTitle?: string;
  currentChapterId?: string;
  onLanguageChange?: (lang: Language) => void;
}

interface ChatMessage {
  id: string;
  sender: 'user' | 'buddy';
  text: string;
  source?: 'gemini_ai' | 'rag_knowledge_bank' | 'syllabus_note';
  citedNoteTitle?: string;
  citedNoteDate?: string;
  keyFormulas?: string[];
  examTip?: string;
  relatedTopics?: string[];
  timestamp: string;
  helpful?: boolean;
}

export const STEMBuddyFloatingChat: React.FC<STEMBuddyFloatingChatProps> = ({
  lang,
  currentClass = 10,
  currentSubjectName = 'Science',
  currentChapterTitle,
  currentChapterId = 'c10_sci_u1',
  onLanguageChange
}) => {
  const isTa = lang === 'ta';
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reportedMessageId, setReportedMessageId] = useState<string | null>(null);

  // Active student class selector within chat (Classes 9, 10, 11, 12)
  const [activeClass, setActiveClass] = useState<ClassLevel>(currentClass);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string>('all');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sync activeClass when prop changes
  useEffect(() => {
    setActiveClass(currentClass);
  }, [currentClass]);

  // Associated chapter note metadata for RAG citations
  const activeNote = CHAPTER_NOTES[currentChapterId] || CHAPTER_NOTES['c10_sci_u1'];

  // Available subjects for the chosen class level
  const classSubjects = SUBJECT_METADATA.filter(s => s.classLevel === activeClass);

  useEffect(() => {
    // Initial greeting grounded in current student context
    const currentSub = classSubjects.find(s => s.id === selectedSubjectId);
    const subTitle = currentSub ? (isTa ? currentSub.nameTa : currentSub.nameEn) : currentSubjectName;

    setMessages([
      {
        id: 'msg_welcome',
        sender: 'buddy',
        text: isTa 
          ? `வணக்கம்! நான் உங்கள் STEMBuddy (AI Tutor) 🎓\nவகுப்பு 9 முதல் 12 வரையிலான அனைத்து பாடங்களின் (கணிதம், இயற்பியல், வேதியியல், உயிரியல், கணினி, வணிகவியல், தமிழ், ஆங்கிலம்) சந்தேகங்களுக்கும் உடனுக்குடன் பதிலளிக்கப் பயிற்சி பெற்றுள்ளேன்.\n\nதற்போது: வகுப்பு ${activeClass} • ${subTitle} – உங்களுக்கு என்ன சந்தேகம்?`
          : `Hello! I am your STEMBuddy (AI Tutor) 🎓\nTrained to answer doubts instantly across Classes 9 to 12 in all Tamil Nadu State Board subjects (Maths, Physics, Chemistry, Biology, CS, Commerce, Tamil & English).\n\nCurrent Context: Class ${activeClass} • ${subTitle} – How can I help you today?`,
        source: 'rag_knowledge_bank',
        citedNoteTitle: isTa ? activeNote.titleTa : activeNote.titleEn,
        citedNoteDate: isTa ? activeNote.updatedAtTa : activeNote.updatedAt,
        timestamp: isTa ? 'இப்போது' : 'Just now'
      }
    ]);
  }, [activeClass, selectedSubjectId, currentSubjectName, isTa]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen, isLoading]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const activeSub = classSubjects.find(s => s.id === selectedSubjectId);
    const activeSubName = activeSub ? activeSub.nameEn : currentSubjectName;

    try {
      // Call instant doubt engine (Gemini AI -> RAG Knowledge Bank -> Syllabus Notes)
      const result: DoubtAnswerResult = await solveStudentDoubt({
        query,
        classLevel: activeClass,
        subjectName: activeSubName,
        chapterTitle: currentChapterTitle || activeNote?.titleEn,
        chapterId: currentChapterId || activeNote?.chapterId,
        language: lang
      });

      const buddyMsg: ChatMessage = {
        id: `buddy_${Date.now()}`,
        sender: 'buddy',
        text: result.text,
        source: result.source,
        citedNoteTitle: result.citedNoteTitle,
        citedNoteDate: result.citedNoteDate,
        keyFormulas: result.keyFormulas,
        examTip: result.examTip,
        relatedTopics: result.relatedTopics,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, buddyMsg]);
    } catch (err) {
      console.error('Error resolving student doubt:', err);
      const fallbackBuddyMsg: ChatMessage = {
        id: `buddy_err_${Date.now()}`,
        sender: 'buddy',
        text: isTa 
          ? `மன்னிக்கவும், தகவலைப் பெறுவதில் சிறு தாமதம் ஏற்பட்டது. சமச்சீர் கல்வி பாடத்திட்டத்தின்படி இந்த தலைப்பில் முக்கியமான கொள்கைகள் மற்றும் சூத்திரங்களை கவனமாகப் படிக்கவும்.`
          : `Sorry, there was a brief delay in connecting to the doubt engine. Please review the highlighted Samacheer Kalvi formula sheet for this chapter.`,
        source: 'syllabus_note',
        citedNoteTitle: isTa ? activeNote.titleTa : activeNote.titleEn,
        citedNoteDate: isTa ? activeNote.updatedAtTa : activeNote.updatedAt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, fallbackBuddyMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const cleanText = text.replace(/[$#*_`]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = isTa ? 'ta-IN' : 'en-US';
    utterance.rate = 0.95;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handleSimulateVoiceInput = () => {
    setIsRecording(true);
    setTimeout(() => {
      setIsRecording(false);
      // Sample prompt matching the active class level
      const classKnowledge = DOUBT_KNOWLEDGE_BANK.filter(k => k.classLevel === activeClass);
      let sampleQ = isTa ? 'நிலைமம் என்றால் என்ன? சூத்திரம் விளக்கு' : 'What is Inertia and state Newton’s laws?';
      if (classKnowledge.length > 0) {
        const item = classKnowledge[Math.floor(Math.random() * classKnowledge.length)];
        const qPair = item.sampleQuestions[Math.floor(Math.random() * item.sampleQuestions.length)];
        sampleQ = isTa ? qPair.ta : qPair.en;
      }
      handleSend(sampleQ);
    }, 1500);
  };

  // Sample quick doubt prompts based on selected class
  const getQuickPrompts = () => {
    if (activeClass === 9) {
      return [
        { labelEn: "De Morgan's Laws", labelTa: 'டி மார்கன் விதிகள்', qEn: "Explain De Morgan's laws in Set Language with Venn diagram", qTa: 'கணமொழியில் டி மார்கன் விதிகளை விளக்குக' },
        { labelEn: 'Equations of Motion', labelTa: 'இயக்கச் சமன்பாடுகள்', qEn: 'Derive the 3 equations of motion: v=u+at, s=ut+1/2at^2', qTa: 'இயக்கச் சமன்பாடுகளை வருவிக்கவும்: v = u + at, s = ut + 1/2at^2' },
        { labelEn: 'Dravidian Languages', labelTa: 'திராவிட மொழிக்குடும்பம்', qEn: 'Classify the Dravidian family of languages', qTa: 'திராவிட மொழிக்குடும்பம் வகைப்பாட்டை விளக்குக' }
      ];
    } else if (activeClass === 10) {
      return [
        { labelEn: 'Momentum Conservation', labelTa: 'உந்த அழிவின்மை', qEn: 'State and prove the Law of Conservation of Linear Momentum', qTa: 'நேர்க்கோட்டு உந்த அழிவின்மை விதியை மெய்ப்பிக்க' },
        { labelEn: 'Myopia vs Hypermetropia', labelTa: 'கிட்டப்பார்வை vs தூரப்பார்வை', qEn: 'Differentiate between Myopia and Hypermetropia with correction lenses', qTa: 'கிட்டப்பார்வை மற்றும் தூரப்பார்வை வேறுபாடுகள் மற்றும் லென்ஸ்கள்' },
        { labelEn: 'Quadratic Roots', labelTa: 'இருபடி மூலங்கள்', qEn: 'How to find the nature of roots using discriminant in quadratics?', qTa: 'இருபடிச் சமன்பாட்டின் மூலங்களின் தன்மை அறிவது எப்படி?' }
      ];
    } else if (activeClass === 11) {
      return [
        { labelEn: 'Projectile Motion', labelTa: 'எறிபொருள் இயக்கம்', qEn: 'Derive formulas for maximum height and range of a projectile', qTa: 'எறிபொருளின் பெரும உயரம் மற்றும் நெடுக்கத்திற்கான சூத்திரங்கள்' },
        { labelEn: 'Limiting Reagent & Redox', labelTa: 'வரையறுக்கும் காரணி', qEn: 'What is a Limiting Reagent and calculate oxidation number in KMnO4', qTa: 'வரையறுக்கும் வினைபடு பொருள் மற்றும் ஆக்சிஜனேற்ற எண் கணக்கீடு' },
        { labelEn: 'Dicot vs Monocot Stem', labelTa: 'இருவித்திலை தண்டு', qEn: 'Explain internal anatomical differences between Dicot and Monocot stem', qTa: 'இருவித்திலை மற்றும் ஒருவித்திலை தாவரத் தண்டு வேறுபாடுகள்' }
      ];
    } else {
      return [
        { labelEn: 'Electric Dipole Field', labelTa: 'மின் இருமுனை மின்புலம்', qEn: 'Derive electric field at axial and equatorial points of a dipole', qTa: 'மின் இருமுனையின் அச்சுக்கோடு மற்றும் நடுவரைக்கோட்டு மின்புலம்' },
        { labelEn: "Cramer's Rule", labelTa: 'கிரேமரின் விதி', qEn: "Solve system of linear equations using Cramer's rule", qTa: 'கிரேமரின் விதியைப் பயன்படுத்தி சமன்பாட்டுத் தொகுப்பைத் தீர்க்க' },
        { labelEn: 'SEBI Functions', labelTa: 'செபி (SEBI) பணிகள்', qEn: 'Explain the regulatory and developmental functions of SEBI', qTa: 'செபியின் (SEBI) முக்கிய பணிகள் யாவை?' }
      ];
    }
  };

  const quickPrompts = getQuickPrompts();

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          id="stembuddy-trigger-btn"
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all ring-4 ring-blue-300/40 group cursor-pointer"
          title="Open STEMBuddy AI Tutor (Classes 9–12)"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white"></span>
          </div>
          <div className="text-left hidden sm:block">
            <div className="flex items-center gap-1">
              <p className="text-xs font-black uppercase tracking-wider text-cyan-200">STEMBuddy AI</p>
              <span className="text-[9px] px-1 py-0.2 rounded bg-white/20 text-white font-bold">9–12</span>
            </div>
            <p className="text-[11px] font-medium text-white/90">
              {isTa ? 'சந்தேகம் கேட்க (Instant Doubt)' : 'Instant Doubt Solver'}
            </p>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[95vw] sm:w-[460px] h-[640px] max-h-[92vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-black text-sm text-white">STEMBuddy AI Tutor</h3>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] font-bold border border-emerald-400/40 flex items-center gap-0.5">
                    <Sparkles className="w-2.5 h-2.5" /> Trained 9–12
                  </span>
                </div>
                <p className="text-[11px] text-blue-200 truncate max-w-[250px]">
                  Samacheer Kalvi • Bilingual Doubts Solver
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages([])}
                title="Clear Chat"
                className="p-1.5 rounded-xl hover:bg-white/10 text-white/80 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Class & Subject Selector Bar (Classes 9 to 12 Training Hub) */}
          <div className="bg-slate-100/90 border-b border-slate-200 px-3 py-2 flex items-center justify-between gap-2 text-xs">
            {/* Class Switcher */}
            <div className="flex items-center gap-1">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{isTa ? 'வகுப்பு:' : 'Class:'}</span>
              {([9, 10, 11, 12] as ClassLevel[]).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => {
                    setActiveClass(lvl);
                    setSelectedSubjectId('all');
                  }}
                  className={`px-2 py-0.5 rounded-lg font-black text-[11px] transition-all cursor-pointer ${
                    activeClass === lvl
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white hover:bg-slate-200 text-slate-700 border border-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Subject Selector */}
            <div className="flex items-center gap-1 max-w-[190px]">
              <select
                value={selectedSubjectId}
                onChange={(e) => setSelectedSubjectId(e.target.value)}
                className="w-full text-[11px] font-semibold bg-white border border-slate-300 rounded-lg px-1.5 py-1 text-slate-700 focus:outline-none focus:ring-1 focus:ring-blue-500 cursor-pointer"
              >
                <option value="all">{isTa ? 'அனைத்துப் பாடங்கள்' : 'All Subjects'}</option>
                {classSubjects.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {isTa ? sub.nameTa : sub.nameEn}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-1.5 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <span className="text-[10px] font-bold text-slate-400 shrink-0">⚡ {isTa ? 'விரைவு வினாக்கள்:' : 'Quick:'}</span>
            {quickPrompts.map((p, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleSend(isTa ? p.qTa : p.qEn)}
                className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-white hover:bg-blue-50 text-blue-800 font-semibold border border-blue-200 transition-colors shadow-2xs shrink-0 cursor-pointer"
              >
                {isTa ? p.labelTa : p.labelEn}
              </button>
            ))}
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[90%] p-3.5 rounded-2xl shadow-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                  }`}
                >
                  <p className="font-sans leading-relaxed">{msg.text}</p>

                  {/* High Yield Key Formulas Badge */}
                  {msg.sender === 'buddy' && msg.keyFormulas && msg.keyFormulas.length > 0 && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 bg-blue-50/80 -mx-1 px-2.5 py-1.5 rounded-xl border border-blue-100">
                      <div className="flex items-center gap-1 text-[11px] font-extrabold text-blue-900 mb-1">
                        <Zap className="w-3 h-3 text-amber-500 fill-amber-500" />
                        <span>{isTa ? 'முக்கிய சமன்பாடுகள் (Formulas):' : 'Key Formulas:'}</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {msg.keyFormulas.map((f, i) => (
                          <code key={i} className="px-2 py-0.5 rounded-md bg-white border border-blue-200 text-blue-800 text-[10px] font-mono font-bold">
                            ${f}$
                          </code>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Required Citation Stamp for RAG & Board Curriculum compliance */}
                  {msg.sender === 'buddy' && msg.citedNoteTitle && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col gap-0.5 text-[10px] text-slate-500 bg-slate-50/80 -mx-1 px-2 py-1.5 rounded-lg">
                      <div className="flex items-center justify-between gap-1">
                        <div className="flex items-center gap-1 font-semibold text-blue-700 truncate">
                          <BookOpen className="w-3 h-3 text-blue-600 shrink-0" />
                          <span className="truncate">{msg.citedNoteTitle}</span>
                        </div>
                        {msg.source && (
                          <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold shrink-0 ${
                            msg.source === 'gemini_ai'
                              ? 'bg-purple-100 text-purple-700 border border-purple-200'
                              : 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                          }`}>
                            {msg.source === 'gemini_ai' ? 'Gemini AI Verified' : 'RAG Knowledge Bank'}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-slate-400">
                        <Calendar className="w-2.5 h-2.5 shrink-0" />
                        <span>{isTa ? 'கடைசியாக புதுப்பிக்கப்பட்டது:' : 'Last updated:'} {msg.citedNoteDate}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* STEMBuddy Action Bar (Audio Read-Aloud, Thumbs Up, Report) */}
                {msg.sender === 'buddy' && (
                  <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-400">
                    <button
                      type="button"
                      onClick={() => speakText(msg.text)}
                      className="hover:text-blue-600 flex items-center gap-0.5 transition-colors cursor-pointer"
                    >
                      {isSpeaking ? <VolumeX className="w-3 h-3 text-red-500" /> : <Volume2 className="w-3 h-3" />}
                      <span>{isSpeaking ? (isTa ? 'நிறுத்து' : 'Stop') : (isTa ? 'கேட்க' : 'Listen')}</span>
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => {
                        setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, helpful: true } : m));
                      }}
                      className={`hover:text-emerald-600 flex items-center gap-0.5 transition-colors cursor-pointer ${msg.helpful ? 'text-emerald-600 font-bold' : ''}`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{msg.helpful ? (isTa ? 'நன்றி!' : 'Helpful!') : (isTa ? 'பயனுள்ளது' : 'Helpful')}</span>
                    </button>
                    <span>•</span>
                    <button
                      type="button"
                      onClick={() => {
                        setReportedMessageId(msg.id);
                        setTimeout(() => setReportedMessageId(null), 2500);
                      }}
                      className="hover:text-amber-600 flex items-center gap-0.5 transition-colors cursor-pointer"
                    >
                      <Flag className="w-3 h-3" />
                      <span>{reportedMessageId === msg.id ? (isTa ? 'அறிவிக்கப்பட்டது' : 'Reported') : (isTa ? 'தவறு என புகாரளி' : 'Report')}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}

            {/* Loading Indicator */}
            {isLoading && (
              <div className="flex items-start gap-2 animate-in fade-in">
                <div className="p-3 rounded-2xl bg-white border border-slate-200/90 text-slate-600 flex items-center gap-2 text-xs shadow-xs">
                  <Loader2 className="w-4 h-4 animate-spin text-blue-600" />
                  <span>
                    {isTa 
                      ? `வகுப்பு ${activeClass} பாடத்திட்டத்திலிருந்து உடனடி தீர்வு பெறுகிறது...` 
                      : `Resolving doubt instantly for Class ${activeClass}...`}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Voice status banner */}
          {isRecording && (
            <div className="bg-red-50 px-3 py-1.5 border-t border-red-100 flex items-center justify-between text-red-700 text-xs animate-pulse">
              <span className="flex items-center gap-1.5 font-bold">
                <span className="w-2 h-2 rounded-full bg-red-600 animate-ping"></span>
                {isTa ? 'குரல் பதிவு செய்யப்படுகிறது...' : 'Listening to student voice...'}
              </span>
              <span className="text-[10px] text-red-500">Tamil / English</span>
            </div>
          )}

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <button
              type="button"
              onClick={handleSimulateVoiceInput}
              disabled={isRecording || isLoading}
              className={`p-2.5 rounded-full transition-colors cursor-pointer ${
                isRecording 
                  ? 'bg-red-600 text-white' 
                  : 'bg-slate-100 hover:bg-blue-100 text-slate-700 hover:text-blue-700'
              }`}
              title="Voice Input (Tamil / English)"
            >
              <Mic className="w-4 h-4" />
            </button>

            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              disabled={isLoading}
              placeholder={
                isTa 
                  ? `வகுப்பு ${activeClass} சந்தேகத்தைக் கேளுங்கள் (Tamil/English)...` 
                  : `Ask doubt for Class ${activeClass} subjects (Tamil/Eng)...`
              }
              className="flex-1 px-3.5 py-2 text-xs rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />

            <button
              type="button"
              onClick={() => handleSend()}
              disabled={!input.trim() || isLoading}
              className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-all shadow-md cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
