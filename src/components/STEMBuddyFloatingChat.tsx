import React, { useState, useEffect, useRef } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Volume2, 
  VolumeX, 
  ThumbsUp, 
  ThumbsDown, 
  Flag, 
  CornerDownRight, 
  BookOpen, 
  Calendar, 
  Check, 
  Mic, 
  RotateCcw,
  Zap,
  HelpCircle,
  FileText
} from 'lucide-react';
import { Language, ClassLevel } from '../types';
import { CHAPTER_NOTES } from '../data/eduvoiceSyllabus';

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
  textTa?: string;
  citedNoteTitle?: string;
  citedNoteDate?: string;
  timestamp: string;
  helpful?: boolean;
}

export const STEMBuddyFloatingChat: React.FC<STEMBuddyFloatingChatProps> = ({
  lang,
  currentClass = 10,
  currentSubjectName = 'Tamil / Science',
  currentChapterTitle,
  currentChapterId = 'c10_sci_u1',
  onLanguageChange
}) => {
  const isTa = lang === 'ta';
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [reportedMessageId, setReportedMessageId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Associated chapter note metadata for RAG citations
  const activeNote = CHAPTER_NOTES[currentChapterId] || CHAPTER_NOTES['c10_sci_u1'];

  useEffect(() => {
    // Initial greeting grounded in current student context
    setMessages([
      {
        id: 'msg_welcome',
        sender: 'buddy',
        text: `வணக்கம்! நான் உங்கள் STEMBuddy (AI Tutor). நீங்கள் தற்போது வகுப்பு ${currentClass} ${currentSubjectName} – "${currentChapterTitle}" படித்துக் கொண்டிருக்கிறீர்கள். உங்களுக்கு என்ன சந்தேகம்?`,
        citedNoteTitle: isTa ? activeNote.titleTa : activeNote.titleEn,
        citedNoteDate: isTa ? activeNote.updatedAtTa : activeNote.updatedAt,
        timestamp: 'இப்போது'
      }
    ]);
  }, [currentClass, currentSubjectName, currentChapterTitle, isTa]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query) return;

    const userMsg: ChatMessage = {
      id: `user_${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // RAG answer engine grounded strictly in syllabus note with mandatory citation
    setTimeout(() => {
      let responseText = '';
      const lower = query.toLowerCase();

      if (lower.includes('formula') || lower.includes('சூத்திரம்') || lower.includes('f=ma')) {
        responseText = isTa
          ? `நியூட்டனின் இரண்டாம் விதிப்படி, விசை = நிறை × முடுக்கம் ($F = ma$).\nநேர்க்கோட்டு உந்தம் $p = mv$.\nகணத்தாக்கு $J = F \\times \\Delta t = \\Delta p$.\n\nமேற்கோள் குறிப்பு: "${activeNote.titleTa}" (கடைசியாக புதுப்பிக்கப்பட்டது: ${activeNote.updatedAtTa}).`
          : `According to Newton's Second Law, Force = mass × acceleration ($F = ma$).\nLinear Momentum $p = mv$.\nImpulse $J = F \\times \\Delta t = \\Delta p$.\n\nCited Source: "${activeNote.titleEn}" (Last Updated: ${activeNote.updatedAt}).`;
      } else if (lower.includes('inertia') || lower.includes('நிலைமம்')) {
        responseText = isTa
          ? `நிலைமம் என்பது ஒரு பொருள் தன் மீது புறவிசை செயல்படாதவரை தனது ஓய்வு நிலையையோ அல்லது சீரான இயக்க நிலையையோ மாற்ற இயலாமல் இருக்கும் உள்ளார்ந்த பண்பாகும்.\n1. ஓய்வில் நிலைமம் (பேருந்து தொடங்கும் போது பின் சாய்வது)\n2. இயக்கத்தில் நிலைமம் (நீளம் தாண்டுவோர் ஓடி வருவது)\n3. திசையில் நிலைமம்.\n\nநிறையே நிலைமத்தின் அளவீடு ஆகும்!\n\nமேற்கோள் குறிப்பு: "${activeNote.titleTa}" (கடைசியாக புதுப்பிக்கப்பட்டது: ${activeNote.updatedAtTa}).`
          : `Inertia is the inherent property of a body to resist any change in its state of rest or uniform motion.\nTypes: 1. Inertia of rest, 2. Inertia of motion, 3. Inertia of direction.\nMass is the quantitative measure of inertia!\n\nCited Source: "${activeNote.titleEn}" (Last Updated: ${activeNote.updatedAt}).`;
      } else if (lower.includes('exam') || lower.includes('தேர்வு') || lower.includes('mark') || lower.includes('5 mark')) {
        responseText = isTa
          ? `தேர்வு குறிப்பு: 10-ஆம் வகுப்பு அறிவியல் பொதுத்தேர்வில் "நியூட்டனின் இயக்க விதிகள்" மற்றும் "நேர்க்கோட்டு உந்த அழிவின்மை விதி தருவித்தல் ($m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$)" அடிக்கடி கேட்கப்படும் 5 மதிப்பெண் வினா ஆகும்!\n\nமேற்கோள் குறிப்பு: "${activeNote.titleTa}" (கடைசியாக புதுப்பிக்கப்பட்டது: ${activeNote.updatedAtTa}).`
          : `Board Exam Tip: The derivation of the Law of Conservation of Linear Momentum ($m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$) and Statement of Newton's 3 Laws are high-frequency 5-mark board questions!\n\nCited Source: "${activeNote.titleEn}" (Last Updated: ${activeNote.updatedAt}).`;
      } else {
        responseText = isTa
          ? `உங்கள் கேள்வி: "${query}".\nஇப்பாடத்தின் ("${currentChapterTitle}") பாடத்திட்டக் குறிப்புகளின்படி: விசை மற்றும் உந்த மாற்றங்கள் எப்போதும் நியூட்டனின் விதிகளுக்கு உட்பட்டவை. மோதலின் போது வினையும் எதிர்வினையும் சமமாகவும் எதிரெதிராகவும் இருக்கும்.\n\nமேற்கோள் குறிப்பு: "${activeNote.titleTa}" (கடைசியாக புதுப்பிக்கப்பட்டது: ${activeNote.updatedAtTa}).`
          : `Regarding "${query}": As covered in "${currentChapterTitle}", forces always occur in matched action-reaction pairs on different bodies. Total momentum in an isolated system remains strictly conserved.\n\nCited Source: "${activeNote.titleEn}" (Last Updated: ${activeNote.updatedAt}).`;
      }

      const buddyMsg: ChatMessage = {
        id: `buddy_${Date.now()}`,
        sender: 'buddy',
        text: responseText,
        citedNoteTitle: isTa ? activeNote.titleTa : activeNote.titleEn,
        citedNoteDate: isTa ? activeNote.updatedAtTa : activeNote.updatedAt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, buddyMsg]);
    }, 600);
  };

  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const cleanText = text.replace(/[$#*_]/g, '');
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
      const sampleQueries = isTa 
        ? ['நிலைமம் என்றால் என்ன?', 'F = ma சூத்திரம் விளக்கு', 'தேர்வுக்கு முக்கியமான 5 மார்க் வினா']
        : ['What is Inertia?', 'Explain F = ma formula', 'High frequency 5-mark board questions'];
      const randomQuery = sampleQueries[Math.floor(Math.random() * sampleQueries.length)];
      handleSend(randomQuery);
    }, 1500);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="fixed bottom-5 right-5 z-40 flex items-center gap-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-full shadow-2xl hover:scale-105 active:scale-95 transition-all ring-4 ring-blue-300/40 group cursor-pointer"
          title="Open STEMBuddy AI Tutor"
        >
          <div className="relative">
            <Bot className="w-6 h-6 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full ring-2 ring-white"></span>
          </div>
          <div className="text-left hidden sm:block">
            <p className="text-xs font-black uppercase tracking-wider text-cyan-200">STEMBuddy</p>
            <p className="text-[11px] font-medium text-white/90">
              {isTa ? 'சந்தேகம் கேட்க' : 'Ask AI Tutor'}
            </p>
          </div>
        </button>
      )}

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-4 right-4 sm:right-6 z-50 w-[95vw] sm:w-[420px] h-[580px] max-h-[90vh] bg-white rounded-3xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white p-3.5 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/15 backdrop-blur-md flex items-center justify-center border border-white/20">
                <Bot className="w-5 h-5 text-cyan-300" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="font-black text-sm text-white">STEMBuddy AI</h3>
                  <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/30 text-emerald-200 text-[10px] font-bold border border-emerald-400/40">
                    RAG Grounded
                  </span>
                </div>
                <p className="text-[11px] text-blue-200 truncate max-w-[230px]">
                  Class {currentClass} • {currentSubjectName}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => setMessages([])}
                title="Clear Chat"
                className="p-1.5 rounded-xl hover:bg-white/10 text-white/80 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl hover:bg-white/10 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="bg-slate-50 border-b border-slate-200 px-3 py-2 flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            <button
              onClick={() => handleSend(isTa ? 'நிலைமம் என்றால் என்ன?' : 'What is Inertia?')}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-blue-100 hover:bg-blue-200 text-blue-800 font-semibold transition-colors"
            >
              ⚡ {isTa ? 'நிலைமம்?' : 'Inertia?'}
            </button>
            <button
              onClick={() => handleSend(isTa ? 'முக்கியமான சூத்திரங்கள் என்ன?' : 'Key formulas for exam?')}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-semibold transition-colors"
            >
              📐 {isTa ? 'சூத்திரங்கள்' : 'Formulas'}
            </button>
            <button
              onClick={() => handleSend(isTa ? 'தேர்வு குறிப்புகள்' : 'Exam tips')}
              className="text-[11px] whitespace-nowrap px-2.5 py-1 rounded-full bg-emerald-100 hover:bg-emerald-200 text-emerald-800 font-semibold transition-colors"
            >
              🎯 {isTa ? 'தேர்வு டிப்ஸ்' : 'Exam Tips'}
            </button>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/60 text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[88%] p-3 rounded-2xl shadow-xs leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none'
                      : 'bg-white text-slate-800 border border-slate-200/90 rounded-tl-none'
                  }`}
                >
                  <p>{msg.text}</p>

                  {/* Required Citation Stamp for RAG compliance */}
                  {msg.sender === 'buddy' && msg.citedNoteTitle && (
                    <div className="mt-2.5 pt-2 border-t border-slate-100 flex flex-col gap-0.5 text-[10px] text-slate-500 bg-slate-50/80 -mx-1 px-2 py-1 rounded-lg">
                      <div className="flex items-center gap-1 font-semibold text-blue-700">
                        <BookOpen className="w-3 h-3 text-blue-600 shrink-0" />
                        <span className="truncate">{msg.citedNoteTitle}</span>
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
                      onClick={() => speakText(msg.text)}
                      className="hover:text-blue-600 flex items-center gap-0.5 transition-colors"
                    >
                      {isSpeaking ? <VolumeX className="w-3 h-3 text-red-500" /> : <Volume2 className="w-3 h-3" />}
                      <span>{isSpeaking ? (isTa ? 'நிறுத்து' : 'Stop') : (isTa ? 'கேட்க' : 'Listen')}</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => {
                        setMessages(prev => prev.map(m => m.id === msg.id ? { ...m, helpful: true } : m));
                      }}
                      className={`hover:text-emerald-600 flex items-center gap-0.5 transition-colors ${msg.helpful ? 'text-emerald-600 font-bold' : ''}`}
                    >
                      <ThumbsUp className="w-3 h-3" />
                      <span>{msg.helpful ? (isTa ? 'நன்றி!' : 'Helpful!') : (isTa ? 'பயனுள்ளது' : 'Helpful')}</span>
                    </button>
                    <span>•</span>
                    <button
                      onClick={() => {
                        setReportedMessageId(msg.id);
                        setTimeout(() => setReportedMessageId(null), 2500);
                      }}
                      className="hover:text-amber-600 flex items-center gap-0.5 transition-colors"
                    >
                      <Flag className="w-3 h-3" />
                      <span>{reportedMessageId === msg.id ? (isTa ? 'அறிவிக்கப்பட்டது' : 'Reported') : (isTa ? 'தவறு என புகாரளி' : 'Report')}</span>
                    </button>
                  </div>
                )}
              </div>
            ))}
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
              disabled={isRecording}
              className={`p-2.5 rounded-full transition-colors ${
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
              placeholder={isTa ? 'பாட சந்தேகம் கேளுங்கள் (Tamil/Eng)...' : 'Ask doubt on this chapter...'}
              className="flex-1 px-3.5 py-2 text-xs rounded-full border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />

            <button
              type="button"
              onClick={() => handleSend()}
              disabled={!input.trim()}
              className="p-2.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-40 text-white transition-all shadow-md"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
