import React, { useState } from 'react';
import { 
  BookOpen, 
  FileText, 
  CheckCircle2, 
  Play, 
  GitBranch, 
  Bot, 
  Calendar, 
  Clock, 
  Check, 
  Printer, 
  Share2, 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  ArrowLeft, 
  Volume2, 
  VolumeX, 
  Award, 
  RotateCcw, 
  CheckSquare, 
  ShieldCheck, 
  ExternalLink,
  Info,
  Maximize2
} from 'lucide-react';
import { 
  Language, 
  ClassLevel, 
  NoteItem, 
  SummaryItem, 
  ChapterQuiz, 
  SchematicDiagram, 
  VideoExplainer, 
  Chapter 
} from '../types';
import { 
  CHAPTER_NOTES, 
  CHAPTER_SUMMARIES, 
  CHAPTER_QUIZZES, 
  CHAPTER_DIAGRAMS, 
  CHAPTER_VIDEOS, 
  ALL_CHAPTERS, 
  SUBJECT_METADATA 
} from '../data/eduvoiceSyllabus';
import { getOrCreateChapterSuite } from '../data/class9TamilData';
import { getOrCreateEnglishChapterSuite } from '../data/class9EnglishData';
import { getOrCreateMathChapterSuite } from '../data/class9MathsData';
import { getOrCreateScienceChapterSuite } from '../data/class9ScienceData';
import { getOrCreateClass12TamilChapterSuite } from '../data/class12TamilData';
import { getOrCreateClass12EnglishChapterSuite } from '../data/class12EnglishData';

interface ChapterLearningSuiteProps {
  lang: Language;
  chapterId: string;
  onLanguageChange: (lang: Language) => void;
  onBackToDashboard: () => void;
  onQuizCompleted?: (score: number, maxScore: number) => void;
  onSwitchChapter?: (chapterId: string) => void;
}

export const ChapterLearningSuite: React.FC<ChapterLearningSuiteProps> = ({
  lang,
  chapterId,
  onLanguageChange,
  onBackToDashboard,
  onQuizCompleted,
  onSwitchChapter
}) => {
  const isTa = lang === 'ta';
  const [activeTab, setActiveTab] = useState<'notes' | 'summary' | 'quiz' | 'video' | 'diagrams'>('notes');
  const [isExplainSimply, setIsExplainSimply] = useState(false);
  const [isRevisionHistoryOpen, setIsRevisionHistoryOpen] = useState(false);

  // Video state
  const [activeVideoScene, setActiveVideoScene] = useState(0);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [isAudioOnlyMode, setIsAudioOnlyMode] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);

  // Quiz state
  const [userAnswers, setUserAnswers] = useState<Record<string, any>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedHotspot, setSelectedHotspot] = useState<string | null>('l1');

  // Find current chapter or fallback
  const chapter: Chapter = ALL_CHAPTERS.find(c => c.id === chapterId) || ALL_CHAPTERS[0];
  const subject = SUBJECT_METADATA.find(s => s.id === chapter.subjectId) || SUBJECT_METADATA[3];

  // Subject siblings for seamless navigation
  const subjectChapters = ALL_CHAPTERS.filter(c => c.subjectId === chapter.subjectId);
  const currentChapterIndex = subjectChapters.findIndex(c => c.id === chapter.id);
  const prevChapter = currentChapterIndex > 0 ? subjectChapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < subjectChapters.length - 1 ? subjectChapters[currentChapterIndex + 1] : null;

  // Chapter-specific notes, summaries, and quizzes (prevents wrong fallback to Laws of Motion)
  const dynamicSuite = chapter.subjectId === 'c9_english'
    ? getOrCreateEnglishChapterSuite(chapter, isTa)
    : chapter.subjectId === 'c9_maths'
    ? getOrCreateMathChapterSuite(chapter, isTa)
    : chapter.subjectId === 'c9_science'
    ? getOrCreateScienceChapterSuite(chapter, isTa)
    : chapter.subjectId === 'c12_tamil'
    ? getOrCreateClass12TamilChapterSuite(chapter, isTa)
    : chapter.subjectId === 'c12_english'
    ? getOrCreateClass12EnglishChapterSuite(chapter, isTa)
    : getOrCreateChapterSuite(chapter, isTa);
  const note: NoteItem = CHAPTER_NOTES[chapter.id] || dynamicSuite.note;
  const summary: SummaryItem = CHAPTER_SUMMARIES[chapter.id] || dynamicSuite.summary;
  const quiz: ChapterQuiz = CHAPTER_QUIZZES[chapter.id] || dynamicSuite.quiz;
  const diagram: SchematicDiagram = CHAPTER_DIAGRAMS[chapter.id] || (dynamicSuite as any)?.diagram || CHAPTER_DIAGRAMS['c10_sci_u1'];
  const video: VideoExplainer = CHAPTER_VIDEOS[chapter.id] || (dynamicSuite as any)?.video || CHAPTER_VIDEOS['c10_sci_u1'];

  // Audio speech synthesis helper
  const handleSpeak = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = isTa ? 'ta-IN' : 'en-US';
    utterance.rate = playbackSpeed;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    setIsPlayingAudio(true);
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utterance);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleQuizSubmit = () => {
    setIsSubmitted(true);
    let calculatedScore = 0;
    quiz.questions.forEach(q => {
      const userAns = userAnswers[q.id];
      const correctVal = q.correctAnswer !== undefined
        ? q.correctAnswer
        : (q.optionsEn && q.correctAnswerIndex !== undefined ? q.optionsEn[q.correctAnswerIndex] : '');
      if (String(userAns).trim().toLowerCase() === String(correctVal).trim().toLowerCase()) {
        calculatedScore += 5;
      }
    });
    if (onQuizCompleted) {
      onQuizCompleted(calculatedScore, quiz.totalMarks);
    }
  };

  const handleQuizRetry = () => {
    setUserAnswers({});
    setIsSubmitted(false);
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-4 pb-20">
      {/* Top Header & Breadcrumb */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/80 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToDashboard}
            type="button"
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500">
              <span>Class {chapter.classLevel}</span>
              <span>•</span>
              <span className="text-blue-600 font-extrabold">{isTa ? subject.nameTa : subject.nameEn}</span>
              {chapter.unitNameEn && (
                <>
                  <span>•</span>
                  <span>{isTa ? chapter.unitNameTa : chapter.unitNameEn}</span>
                </>
              )}
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {isTa ? chapter.titleTa : chapter.titleEn}
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-end md:self-auto">
          {/* Official Textbook Link (Section 5.2) */}
          <a
            href={chapter.textbookUrl || 'https://www.tnschools.gov.in/textbooks'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl border border-slate-300/70 transition-colors"
          >
            <ExternalLink className="w-3.5 h-3.5 text-blue-600" />
            <span>{isTa ? 'அரசு பாடநூல் படிக்க' : 'Read Textbook'}</span>
          </a>

          {/* Bilingual Toggle */}
          <button
            type="button"
            onClick={() => onLanguageChange(isTa ? 'en' : 'ta')}
            className="px-3 py-1.5 text-xs font-black rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            {isTa ? 'English-க்கு மாற' : 'தமிழ்-க்கு மாற'}
          </button>
        </div>
      </div>

      {/* Subject Chapter Quick Switcher Banner */}
      {subjectChapters.length > 1 && (
        <div className="bg-slate-50 border border-slate-200/90 rounded-2xl px-4 py-2.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-slate-700">
              {isTa ? 'அலகுகள் / பாடங்கள்:' : 'Chapters in Subject:'}
            </span>
            <span className="bg-blue-100 text-blue-800 font-bold px-2 py-0.5 rounded-full text-[11px]">
              {currentChapterIndex + 1} / {subjectChapters.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Quick dropdown */}
            <select
              value={chapter.id}
              onChange={(e) => onSwitchChapter && onSwitchChapter(e.target.value)}
              className="bg-white border border-slate-300 rounded-xl px-2.5 py-1 text-xs font-semibold text-slate-700 max-w-[200px] sm:max-w-[280px] truncate"
            >
              {subjectChapters.map((sc) => (
                <option key={sc.id} value={sc.id}>
                  {sc.chapterNumber}. {isTa ? sc.titleTa : sc.titleEn}
                </option>
              ))}
            </select>

            {/* Prev / Next buttons */}
            {prevChapter && onSwitchChapter && (
              <button
                type="button"
                onClick={() => onSwitchChapter(prevChapter.id)}
                className="px-2.5 py-1 rounded-xl bg-white border border-slate-300 hover:bg-slate-100 text-slate-700 font-bold cursor-pointer"
                title={isTa ? prevChapter.titleTa : prevChapter.titleEn}
              >
                ← {isTa ? 'முந்தைய பாடம்' : 'Prev'}
              </button>
            )}
            {nextChapter && onSwitchChapter && (
              <button
                type="button"
                onClick={() => onSwitchChapter(nextChapter.id)}
                className="px-2.5 py-1 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold cursor-pointer"
                title={isTa ? nextChapter.titleTa : nextChapter.titleEn}
              >
                {isTa ? 'அடுத்த பாடம்' : 'Next'} →
              </button>
            )}
          </div>
        </div>
      )}

      {/* Chapter Feature Tabs (Section 5) */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-xs flex items-center gap-1 overflow-x-auto no-scrollbar">
        {[
          { id: 'notes', labelEn: '1. Notes', labelTa: '1. பாடக் குறிப்புகள்', icon: BookOpen },
          { id: 'summary', labelEn: '2. Summary', labelTa: '2. சுருக்கம்', icon: FileText },
          { id: 'quiz', labelEn: '3. Quiz', labelTa: '3. மாதிரி வினாடி வினா', icon: CheckSquare },
          { id: 'video', labelEn: '4. Animated Video', labelTa: '4. காணொளி விளக்கம்', icon: Play },
          { id: 'diagrams', labelEn: '5. Diagrams', labelTa: '5. வரைபடங்கள்', icon: GitBranch }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 min-w-[130px] sm:min-w-fit flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                isActive
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span>{isTa ? tab.labelTa : tab.labelEn}</span>
            </button>
          );
        })}
      </div>

      {/* ================= TAB 1: NOTES WITH DATES (SECTION 5.1) ================= */}
      {activeTab === 'notes' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200/90 shadow-sm flex flex-col gap-6">
          {/* Mandatory Date & Review Metadata Box (Section 5.1) */}
          <div className="bg-gradient-to-r from-blue-50/80 via-indigo-50/50 to-slate-50 border border-blue-200/80 rounded-2xl p-4 sm:p-5 flex flex-col gap-3">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-blue-600 text-white">
                  v{note.version}
                </span>
                {note.isUpdated && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-cyan-600 text-white animate-pulse">
                    {isTa ? 'புதுப்பிக்கப்பட்டது (Updated)' : 'Updated'}
                  </span>
                )}
                {note.isNew && (
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-black bg-emerald-600 text-white">
                    {isTa ? 'புதியது (New)' : 'New'}
                  </span>
                )}
                <span className="text-xs font-bold text-slate-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {isTa ? note.syllabusYearTa : note.syllabusYear}
                </span>
              </div>

              {/* Revision History & Print Buttons */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsRevisionHistoryOpen(true)}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors"
                >
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  <span>{isTa ? 'பதிப்பு வரலாறு (Revisions)' : 'Revision History'}</span>
                </button>
                <button
                  type="button"
                  onClick={handlePrint}
                  className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 rounded-lg border border-slate-300 transition-colors"
                  title="Print Note / Save as PDF"
                >
                  <Printer className="w-3.5 h-3.5 text-slate-600" />
                  <span>{isTa ? 'PDF அச்சிடு' : 'Print / PDF'}</span>
                </button>
              </div>
            </div>

            {/* Note Metadata Details */}
            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-blue-200/60 text-xs">
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-slate-500 font-semibold">{isTa ? 'கடைசியாக புதுப்பிக்கப்பட்டது:' : 'Last updated on:'}</span>
                <span className="font-extrabold text-blue-700 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" />
                  {isTa ? note.updatedAtTa : note.updatedAt}
                </span>
              </div>
              {note.readTimeMinutes && (
                <div className="text-slate-500 font-medium">
                  {note.readTimeMinutes} {isTa ? 'நிமிட வாசிப்பு' : 'min read'}
                </div>
              )}
            </div>

            {/* What Changed Line */}
            <div className="bg-white/80 p-2.5 rounded-xl border border-blue-100 text-xs text-slate-700 flex items-start gap-2">
              <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">{isTa ? 'இப்பதிப்பில் மாறியவை: ' : 'What changed: '}</span>
                <span>{isTa ? note.changeNoteTa : note.changeNote}</span>
              </div>
            </div>
          </div>

          {/* Note Body Text */}
          <div className="prose prose-slate max-w-none text-sm text-slate-800 leading-relaxed space-y-4">
            <div className="whitespace-pre-line">
              {isTa ? (note.bodyTa || note.contentTa) : (note.bodyEn || note.contentEn)}
            </div>
          </div>

          {/* Key Formulas Section */}
          {note.keyFormulas && note.keyFormulas.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span>{isTa ? 'முக்கியமான தேர்வு சூத்திரங்கள் (Key Formulas)' : 'Important Formulas'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {note.keyFormulas.map((kf, idx) => {
                  const isStr = typeof kf === 'string';
                  const formulaStr = isStr ? kf : kf.formula;
                  const nameStr = isStr ? (isTa ? 'சூத்திரம்' : 'Formula') : (isTa ? kf.nameTa : kf.nameEn);
                  const expStr = isStr ? '' : (isTa ? kf.explanationTa : kf.explanationEn);
                  return (
                    <div key={idx} className="bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col gap-1.5">
                      <p className="text-xs font-bold text-blue-700">{nameStr}</p>
                      <div className="bg-white px-3 py-2 rounded-xl border border-blue-200 font-mono font-black text-sm text-slate-900 text-center shadow-xs">
                        {formulaStr}
                      </div>
                      {expStr && <p className="text-xs text-slate-600 mt-1">{expStr}</p>}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Worked Examples Section */}
          {note.workedExamples && note.workedExamples.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600"></span>
                <span>{isTa ? 'மாதிரி தீர்க்கப்பட்ட கணக்குகள் (Worked Examples)' : 'Step-by-Step Worked Problems'}</span>
              </h3>
              {note.workedExamples.map((we, idx) => {
                const qText = isTa ? (we.questionTa || we.question) : (we.questionEn || we.question);
                const solText = isTa ? (we.solutionTa || we.solution) : (we.solutionEn || we.solution);
                return (
                  <div key={idx} className="bg-emerald-50/50 rounded-2xl p-4 border border-emerald-200/80 flex flex-col gap-2">
                    <p className="text-xs font-extrabold text-emerald-900">{qText}</p>
                    <div className="bg-white p-3 rounded-xl border border-emerald-100 text-xs text-slate-700 whitespace-pre-line font-sans">
                      <p className="font-bold text-slate-800 mb-1">{isTa ? 'தீர்வு:' : 'Solution:'}</p>
                      {solText}
                    </div>
                    {we.answer && (
                      <div className="flex items-center justify-end gap-2 text-xs font-black text-emerald-800">
                        <span>{isTa ? 'விடை:' : 'Final Answer:'}</span>
                        <span className="px-2 py-0.5 rounded bg-emerald-600 text-white font-mono">{we.answer}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}

          {/* Remember Boxes */}
          {note.rememberBoxes && note.rememberBoxes.length > 0 && (
            <div className="flex flex-col gap-2">
              {note.rememberBoxes.map((rb, idx) => (
                <div key={idx} className="bg-amber-50 rounded-2xl p-4 border border-amber-200 flex items-start gap-3">
                  <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <p className="text-xs font-bold text-amber-900 leading-relaxed">
                    {isTa ? rb.tipTa : rb.tipEn}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 2: SUMMARY (SECTION 5) ================= */}
      {activeTab === 'summary' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {isTa ? 'ஒரு பக்க விரைவு திருப்புதல் (Quick Revision Sheet)' : 'One-Page Quick Revision'}
              </h2>
              <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{isTa ? 'கடைசியாக புதுப்பிக்கப்பட்டது:' : 'Last updated on:'} {isTa ? summary.lastUpdatedAtTa : summary.lastUpdatedAt}</span>
              </p>
            </div>

            {/* "Explain Simply" Mode Toggle (Section 5) */}
            <button
              type="button"
              onClick={() => setIsExplainSimply(!isExplainSimply)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black transition-all ${
                isExplainSimply
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'bg-purple-50 text-purple-700 border border-purple-200 hover:bg-purple-100'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{isTa ? 'எளிய நடையில் விளக்கு (Explain Simply)' : 'Explain Simply Mode'}</span>
            </button>
          </div>

          {/* Explain Simply Card */}
          {isExplainSimply ? (
            <div className="bg-purple-50/70 border border-purple-200 rounded-2xl p-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-purple-800 font-extrabold text-sm">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <span>{isTa ? 'எளிய கதை / அன்றாட வாழ்க்கை விளக்கம்:' : 'Simple Real-World Analogy:'}</span>
              </div>
              <p className="text-sm text-slate-800 leading-relaxed font-medium">
                {isTa ? summary.simpleExplanationTa : summary.simpleExplanationEn}
              </p>
            </div>
          ) : (
            /* Standard Bullet Points */
            <div className="flex flex-col gap-3">
              {(isTa ? summary.keyPointsTa : summary.keyPointsEn).map((pt, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-200/70">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">{pt}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ================= TAB 3: QUIZ (SECTION 5) ================= */}
      {activeTab === 'quiz' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col gap-6">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 pb-4">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {isTa ? quiz.titleTa : quiz.titleEn}
              </h2>
              <p className="text-xs text-slate-500">
                {quiz.questions.length} {isTa ? 'வினாக்கள்' : 'Questions'} • {quiz.totalMarks} {isTa ? 'மதிப்பெண்கள்' : 'Marks'} • {quiz.timeLimitMinutes} min
              </p>
            </div>

            {isSubmitted && (
              <button
                type="button"
                onClick={handleQuizRetry}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>{isTa ? 'மீண்டும் முயற்சிக்க' : 'Retry Quiz'}</span>
              </button>
            )}
          </div>

          {/* Quiz Questions */}
          <div className="flex flex-col gap-6">
            {quiz.questions.map((q, idx) => {
              const userAns = userAnswers[q.id];
              const correctVal = q.correctAnswer !== undefined
                ? q.correctAnswer
                : (q.optionsEn && q.correctAnswerIndex !== undefined ? q.optionsEn[q.correctAnswerIndex] : '');
              const isCorrect = isSubmitted && String(userAns).trim().toLowerCase() === String(correctVal).trim().toLowerCase();
              const qType = q.type || 'mcq';
              const qDiff = q.difficulty || 'medium';

              return (
                <div key={q.id} className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-xs sm:text-sm font-black text-slate-900 leading-relaxed">
                      <span className="text-blue-600 font-extrabold mr-1.5">Q{idx + 1}.</span>
                      {isTa ? q.questionTa : q.questionEn}
                    </p>
                    <span className="text-[10px] uppercase font-black px-2 py-0.5 rounded-full bg-slate-200 text-slate-700">
                      {qDiff}
                    </span>
                  </div>

                  {/* MCQ Options */}
                  {qType === 'mcq' && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-1">
                      {(isTa ? (q.optionsTa || q.optionsEn) : q.optionsEn)?.map((opt, optIdx) => {
                        const isSelected = userAns === (q.optionsEn?.[optIdx] || opt);
                        return (
                          <button
                            key={optIdx}
                            type="button"
                            disabled={isSubmitted}
                            onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: q.optionsEn?.[optIdx] || opt }))}
                            className={`p-3 rounded-xl text-xs font-bold text-left transition-all border ${
                              isSelected
                                ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                                : 'bg-white hover:bg-blue-50 text-slate-700 border-slate-200'
                            }`}
                          >
                            {opt}
                          </button>
                        );
                      })}
                    </div>
                  )}

                  {/* True / False Options */}
                  {q.type === 'true_false' && (
                    <div className="flex items-center gap-3 mt-1">
                      {[
                        { val: true, labelEn: 'True', labelTa: 'சரி' },
                        { val: false, labelEn: 'False', labelTa: 'தவறு' }
                      ].map((item) => (
                        <button
                          key={String(item.val)}
                          type="button"
                          disabled={isSubmitted}
                          onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: item.val }))}
                          className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all border ${
                            userAns === item.val
                              ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                              : 'bg-white hover:bg-blue-50 text-slate-700 border-slate-200'
                          }`}
                        >
                          {isTa ? item.labelTa : item.labelEn}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Fill in the blank input */}
                  {q.type === 'fill_blank' && (
                    <div className="mt-1">
                      <input
                        type="text"
                        disabled={isSubmitted}
                        value={userAns || ''}
                        onChange={(e) => setUserAnswers(prev => ({ ...prev, [q.id]: e.target.value }))}
                        placeholder={isTa ? 'உங்கள் விடையை தட்டச்சு செய்க...' : 'Type your answer...'}
                        className="w-full sm:w-80 px-3.5 py-2 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                      />
                    </div>
                  )}

                  {/* Explanation feedback after submit */}
                  {isSubmitted && (
                    <div className={`mt-2 p-3 rounded-xl border text-xs leading-relaxed ${
                      isCorrect 
                        ? 'bg-emerald-50 border-emerald-200 text-emerald-900' 
                        : 'bg-red-50 border-red-200 text-red-900'
                    }`}>
                      <div className="flex items-center gap-1.5 font-black mb-1">
                        {isCorrect ? (
                          <>
                            <Check className="w-4 h-4 text-emerald-600" />
                            <span>{isTa ? 'சரியான விடை!' : 'Correct!'}</span>
                          </>
                        ) : (
                          <>
                            <Info className="w-4 h-4 text-red-600" />
                            <span>{isTa ? `தவறு! சரியான விடை: ${String(q.correctAnswer)}` : `Incorrect! Correct answer: ${String(q.correctAnswer)}`}</span>
                          </>
                        )}
                      </div>
                      <p>{isTa ? q.explanationTa : q.explanationEn}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Submit Action */}
          {!isSubmitted && (
            <button
              type="button"
              onClick={handleQuizSubmit}
              className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black text-sm shadow-md transition-all active:scale-[0.99] cursor-pointer"
            >
              {isTa ? 'மதிப்பெண்களைச் சரிபார்க்க (Submit Quiz)' : 'Submit Quiz & View Score'}
            </button>
          )}
        </div>
      )}

      {/* ================= TAB 4: ANIMATED VIDEO EXPLAINER (SECTION 5) ================= */}
      {activeTab === 'video' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col gap-5">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
            <div>
              <h2 className="text-base sm:text-lg font-black text-slate-900">
                {isTa ? video.titleTa : video.titleEn}
              </h2>
              <p className="text-xs text-slate-500">
                {video.durationSeconds}s • {video.scenes.length} {isTa ? 'காட்சிகள்' : 'Scenes'}
              </p>
            </div>

            {/* Audio-only Mode for Low Data (Section 5) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsAudioOnlyMode(!isAudioOnlyMode)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-colors ${
                  isAudioOnlyMode 
                    ? 'bg-amber-100 border-amber-300 text-amber-900' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-300'
                }`}
              >
                {isAudioOnlyMode ? (isTa ? 'குறைந்த டேட்டா பயன்முறை (Active)' : 'Low Data Mode: ON') : (isTa ? 'ஆடியோ மட்டும் (Low Data)' : 'Audio Only Mode')}
              </button>
            </div>
          </div>

          {/* Interactive Scene Canvas */}
          <div className="aspect-video w-full rounded-2xl bg-gradient-to-br from-slate-900 via-indigo-950 to-blue-950 text-white p-6 flex flex-col justify-between shadow-inner relative overflow-hidden">
            <div className="flex items-center justify-between text-xs text-slate-300 z-10">
              <span className="font-bold px-2 py-0.5 rounded bg-white/10 backdrop-blur-md">
                Scene {video.scenes[activeVideoScene].sceneNumber} of {video.scenes.length}
              </span>
              <span className="text-cyan-300 font-extrabold">
                {video.scenes[activeVideoScene].conceptKey || video.scenes[activeVideoScene].keyTakeaway}
              </span>
            </div>

            {/* Visual Scene Graphic / Simulation */}
            <div className="my-auto text-center flex flex-col items-center justify-center gap-3 z-10">
              <div className="w-16 h-16 rounded-full bg-blue-500/20 border-2 border-blue-400 flex items-center justify-center animate-bounce">
                <Play className="w-8 h-8 text-cyan-300 ml-1" />
              </div>
              <h3 className="text-lg font-black text-white">
                {isTa ? video.scenes[activeVideoScene].titleTa : video.scenes[activeVideoScene].titleEn}
              </h3>
              <p className="text-xs text-slate-300 max-w-md">
                {video.scenes[activeVideoScene].visualDescription || video.scenes[activeVideoScene].visualDescriptionEn}
              </p>
            </div>

            {/* Subtitles & Audio Player Bar */}
            <div className="z-10 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 flex flex-col gap-2">
              <p className="text-xs sm:text-sm text-cyan-100 font-medium text-center">
                "{isTa ? video.scenes[activeVideoScene].narrationTa : video.scenes[activeVideoScene].narrationEn}"
              </p>
              <div className="flex items-center justify-between pt-1 text-xs">
                <button
                  type="button"
                  onClick={() => handleSpeak(isTa ? video.scenes[activeVideoScene].narrationTa : video.scenes[activeVideoScene].narrationEn)}
                  className="flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 font-bold"
                >
                  {isPlayingAudio ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                  <span>{isPlayingAudio ? (isTa ? 'ஆடியோ நிறுத்து' : 'Pause Audio') : (isTa ? 'குரல் விளக்கம் கேட்க' : 'Play Narration')}</span>
                </button>

                <div className="flex items-center gap-1.5">
                  <span className="text-[11px] text-slate-400">Speed:</span>
                  {[1, 1.25, 1.5].map((spd) => (
                    <button
                      key={spd}
                      onClick={() => setPlaybackSpeed(spd)}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                        playbackSpeed === spd ? 'bg-cyan-500 text-slate-950' : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {spd}x
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Scene Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {video.scenes.map((scene, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveVideoScene(idx);
                  if (isPlayingAudio) window.speechSynthesis.cancel();
                }}
                className={`p-3 rounded-xl border text-left text-xs transition-all ${
                  activeVideoScene === idx
                    ? 'bg-blue-50 border-blue-400 ring-2 ring-blue-200 font-bold text-blue-900'
                    : 'bg-white hover:bg-slate-50 border-slate-200 text-slate-700'
                }`}
              >
                <p className="text-[10px] font-bold text-blue-600">Scene {scene.sceneNumber}</p>
                <p className="font-extrabold truncate">{isTa ? scene.titleTa : scene.titleEn}</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ================= TAB 5: SCHEMATIC DIAGRAMS (SECTION 5) ================= */}
      {activeTab === 'diagrams' && (
        <div className="bg-white rounded-3xl p-5 sm:p-7 border border-slate-200 shadow-sm flex flex-col gap-5">
          <div className="border-b border-slate-200 pb-3">
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {isTa ? diagram.titleTa : diagram.titleEn}
            </h2>
            <p className="text-xs text-slate-500">
              {isTa ? 'வரைபடத்தின் மீது உள்ள புள்ளிகளை அழுத்தி விவரங்களை அறியவும்.' : 'Tap on interactive hot-spots to inspect labels and explanations.'}
            </p>
          </div>

          {/* Interactive SVG Diagram Display */}
          <div className="relative w-full h-80 rounded-2xl bg-gradient-to-b from-slate-50 to-blue-50/40 border border-slate-300 flex items-center justify-center p-4 overflow-hidden">
            {/* Schematic Illustration */}
            {diagram.svgContent ? (
              <div 
                className="w-full h-full flex items-center justify-center pointer-events-none"
                dangerouslySetInnerHTML={{ __html: diagram.svgContent }}
              />
            ) : (
              <svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
                {/* Fallback flow nodes */}
                <rect x="50" y="50" width="500" height="200" rx="14" fill="#ffffff" stroke="#cbd5e1" strokeWidth="2" />
                <line x1="150" y1="150" x2="450" y2="150" stroke="#3b82f6" strokeWidth="3" strokeDasharray="6" />
                {diagram.labels.map((lbl, idx) => (
                  <g key={lbl.id}>
                    <circle cx={100 + idx * 180} cy={150} r="35" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2.5" />
                    <text x={100 + idx * 180} y={155} textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">
                      {lbl.id.toUpperCase()}
                    </text>
                  </g>
                ))}
              </svg>
            )}

            {/* Hotspot Pins */}
            {diagram.labels.map((lbl) => (
              <button
                key={lbl.id}
                type="button"
                onClick={() => setSelectedHotspot(lbl.id)}
                style={{ left: `${lbl.x}%`, top: `${lbl.y}%` }}
                className={`absolute -translate-x-1/2 -translate-y-1/2 p-2 rounded-full shadow-lg transition-transform hover:scale-125 cursor-pointer ${
                  selectedHotspot === lbl.id
                    ? 'bg-blue-600 text-white ring-4 ring-blue-300 animate-pulse'
                    : 'bg-white text-slate-800 border-2 border-blue-500'
                }`}
                title={isTa ? lbl.labelTa : lbl.labelEn}
              >
                <span className="text-xs font-black px-1">{lbl.id.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Inspected Hotspot Details Box */}
          {selectedHotspot && (() => {
            const lbl = diagram.labels.find(l => l.id === selectedHotspot);
            if (!lbl) return null;
            return (
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs flex flex-col gap-1.5 animate-in fade-in">
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-[10px]">
                    {lbl.id.toUpperCase()}
                  </span>
                  <h4 className="font-extrabold text-sm text-blue-950">
                    {isTa ? lbl.labelTa : lbl.labelEn}
                  </h4>
                </div>
                <p className="text-slate-700 leading-relaxed font-medium">
                  {isTa ? lbl.descriptionTa : lbl.descriptionEn}
                </p>
              </div>
            );
          })()}
        </div>
      )}

      {/* Revision History Modal (Section 5.1) */}
      {isRevisionHistoryOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-lg w-full shadow-2xl border border-slate-200 flex flex-col gap-4 animate-in fade-in">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h3 className="font-black text-base text-slate-900 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span>{isTa ? 'பாடக் குறிப்பு பதிப்பு வரலாறு (Revision History)' : 'Note Revision History'}</span>
              </h3>
              <button
                type="button"
                onClick={() => setIsRevisionHistoryOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-black text-lg p-1"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-col gap-3 max-h-80 overflow-y-auto">
              {note.revisions.map((rev) => (
                <div key={rev.version} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col gap-1 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold text-blue-700">v{rev.version}</span>
                    <span className="text-slate-400">{isTa ? rev.updatedAtTa : rev.updatedAt}</span>
                  </div>
                  <p className="font-bold text-slate-800">{isTa ? rev.changeNoteTa : rev.changeNote}</p>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setIsRevisionHistoryOpen(false)}
              className="w-full py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs"
            >
              {isTa ? 'மூடுக' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
