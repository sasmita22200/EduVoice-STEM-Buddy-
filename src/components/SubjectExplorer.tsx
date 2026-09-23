import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  Filter, 
  ArrowLeft, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  ChevronRight, 
  Sparkles,
  ExternalLink,
  Atom,
  Languages,
  Calculator,
  Globe,
  Briefcase,
  FileSpreadsheet,
  TrendingUp,
  Cpu,
  Leaf,
  Dna,
  FlaskConical,
  Landmark
} from 'lucide-react';
import { Language, ClassLevel, SubjectMetadata, Chapter } from '../types';
import { SUBJECT_METADATA, ALL_CHAPTERS, TN_GROUPS } from '../data/eduvoiceSyllabus';

interface SubjectExplorerProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onSelectChapter: (chapterId: string) => void;
  onBackToDashboard: () => void;
  initialClass?: ClassLevel;
}

export const SubjectExplorer: React.FC<SubjectExplorerProps> = ({
  lang,
  onLanguageChange,
  onSelectChapter,
  onBackToDashboard,
  initialClass = 10
}) => {
  const isTa = lang === 'ta';
  const [selectedClass, setSelectedClass] = useState<ClassLevel>(initialClass);
  const [selectedGroup, setSelectedGroup] = useState<string>('2502');
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<string>('all');
  const [selectedIyal, setSelectedIyal] = useState<string>('all');

  // Filter subjects for the selected class
  const classSubjects = SUBJECT_METADATA.filter(s => s.classLevel === selectedClass);

  // If class 11 or 12, filter based on active group
  const displayedSubjects = (selectedClass === 11 || selectedClass === 12)
    ? (() => {
        const group = TN_GROUPS.find(g => g.code === selectedGroup);
        if (!group) return classSubjects;
        return classSubjects.filter(s => {
          if (s.part === 'Part I' || s.part === 'Part II') return true;
          return group.subjectIds.some(sid => s.id.toLowerCase().includes(sid));
        });
      })()
    : classSubjects;

  // Filter chapters
  const filteredChapters = ALL_CHAPTERS.filter(c => {
    if (c.classLevel !== selectedClass) return false;
    if (selectedSubjectId && c.subjectId !== selectedSubjectId) return false;
    if (selectedIyal !== 'all' && String(c.unitNumber) !== selectedIyal) return false;
    if (selectedGenre !== 'all') {
      if (selectedSubjectId === 'c9_science') {
        if (selectedGenre === 'physics' && c.unitNameEn !== 'Physics') return false;
        if (selectedGenre === 'chemistry' && c.unitNameEn !== 'Chemistry') return false;
        if (selectedGenre === 'biology' && c.unitNameEn !== 'Biology') return false;
      } else {
        const isProse = c.titleTa.includes('உரைநடை') || c.titleEn.toLowerCase().includes('prose');
        const isPoetry = c.titleTa.includes('கவிதை') || c.titleEn.toLowerCase().includes('poem');
        const isGrammar = c.titleTa.includes('கற்கண்டு') || c.titleTa.includes('இலக்கணம்') || c.titleEn.toLowerCase().includes('grammar');
        const isSupplementary = c.titleTa.includes('விரிவானம்') || c.titleTa.includes('துணைப்பாடம்') || c.titleEn.toLowerCase().includes('supplementary');
        const isThirukkural = c.titleTa.includes('திருக்குறள்') || c.titleEn.toLowerCase().includes('thirukkural');

        if (selectedGenre === 'prose' && !isProse) return false;
        if (selectedGenre === 'poetry' && !isPoetry) return false;
        if (selectedGenre === 'grammar' && !isGrammar) return false;
        if (selectedGenre === 'supplementary' && !isSupplementary) return false;
        if (selectedGenre === 'thirukkural' && !isThirukkural) return false;
      }
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchEn = c.titleEn.toLowerCase().includes(q);
      const matchTa = c.titleTa.toLowerCase().includes(q);
      return matchEn || matchTa;
    }
    return true;
  });

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 pb-24 text-slate-800">
      {/* Top Header & Navigation */}
      <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onBackToDashboard}
            className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Back to Dashboard"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {isTa ? 'தமிழ்நாடு சமச்சீர் கல்வி பாடத்திட்டம்' : 'Tamil Nadu Samacheer Kalvi Curriculum'}
            </h1>
            <p className="text-xs text-slate-500">
              {isTa ? 'வகுப்புகள் 9, 10, 11 மற்றும் 12 முழுமையான பாடங்கள்' : 'Classes 9, 10, 11 and 12 Syllabus Explorer'}
            </p>
          </div>
        </div>

        {/* Bilingual Toggle */}
        <button
          type="button"
          onClick={() => onLanguageChange(isTa ? 'en' : 'ta')}
          className="px-3.5 py-1.5 text-xs font-black rounded-xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors self-end sm:self-auto"
        >
          {isTa ? 'English' : 'தமிழ்'}
        </button>
      </div>

      {/* Class Level Selector Tabs (Classes 9, 10, 11, 12) */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-xs grid grid-cols-4 gap-1">
        {([9, 10, 11, 12] as ClassLevel[]).map((cls) => (
          <button
            key={cls}
            type="button"
            onClick={() => {
              setSelectedClass(cls);
              setSelectedSubjectId(null);
            }}
            className={`py-2.5 rounded-xl text-xs sm:text-sm font-black transition-all cursor-pointer ${
              selectedClass === cls
                ? 'bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            {isTa ? `வகுப்பு ${cls}` : `Class ${cls}`}
          </button>
        ))}
      </div>

      {/* Stream / Group Picker for Class 11 & 12 (Section 4) */}
      {(selectedClass === 11 || selectedClass === 12) && (
        <div className="bg-purple-50/70 border border-purple-200 rounded-3xl p-4 flex flex-col gap-2.5">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold text-purple-900 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-purple-600" />
              {isTa ? 'வகுப்பு 11 & 12 பாடப்பிரிவு (Group Stream):' : 'Select Class 11/12 Stream / Group:'}
            </span>
            <span className="text-[11px] text-purple-700 font-semibold">
              {isTa ? 'பகுதி III பாடங்கள் மாறும்' : 'Sets Part III Subjects'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
            {TN_GROUPS.map((grp) => (
              <button
                key={grp.code}
                type="button"
                onClick={() => setSelectedGroup(grp.code)}
                className={`p-2.5 rounded-2xl text-left text-xs transition-all border ${
                  selectedGroup === grp.code
                    ? 'bg-purple-600 text-white border-purple-600 shadow-sm font-bold'
                    : 'bg-white hover:bg-purple-100/50 text-slate-800 border-purple-200'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono font-black text-xs">Grp {grp.code}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded font-bold ${
                    selectedGroup === grp.code ? 'bg-purple-500 text-white' : 'bg-purple-100 text-purple-800'
                  }`}>
                    {grp.stream}
                  </span>
                </div>
                <p className="text-[11px] mt-1 line-clamp-2">
                  {isTa ? grp.nameTa : grp.nameEn}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subjects Ribbon for the selected Class */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-extrabold text-slate-800">
            {isTa ? 'பாடங்கள் (Subjects)' : 'Subjects for this Class'}
          </h2>
          {selectedSubjectId && (
            <button
              onClick={() => setSelectedSubjectId(null)}
              className="text-xs text-blue-600 font-bold hover:underline"
            >
              {isTa ? 'அனைத்து பாடங்களையும் காட்டு' : 'Show All Subjects'}
            </button>
          )}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {displayedSubjects.map((sub) => {
            const isSelected = selectedSubjectId === sub.id;
            return (
              <button
                key={sub.id}
                onClick={() => setSelectedSubjectId(isSelected ? null : sub.id)}
                className={`p-3 rounded-2xl border text-left flex flex-col justify-between gap-2 transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-blue-50 border-blue-500 ring-2 ring-blue-300'
                    : 'bg-white hover:bg-slate-50 border-slate-200/90 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700">
                    {sub.part || 'Core'}
                  </span>
                  {/* Status Badge (Section 4) */}
                  {sub.status === 'verified' && (
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                      Verified
                    </span>
                  )}
                  {sub.status === 'needs_source' && (
                    <span className="text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                      Coming Soon
                    </span>
                  )}
                </div>

                <div>
                  <h3 className="font-black text-xs text-slate-900 leading-tight">
                    {isTa ? sub.nameTa : sub.nameEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    {sub.totalChapters} {isTa ? 'அலகுகள்' : 'Chapters'}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chapters Search and Listing Section */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col gap-4">
        {/* Search Bar */}
        <div className="flex items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={isTa ? 'பாடம் அல்லது அலகைத் தேடுக...' : 'Search chapters by name...'}
              className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
            />
          </div>
          <span className="text-xs font-bold text-slate-500 shrink-0">
            {filteredChapters.length} {isTa ? 'பாடங்கள்' : 'Chapters'}
          </span>
        </div>

        {/* Genre & Iyal Filter Pills */}
        <div className="flex flex-col gap-2 pt-1 border-t border-slate-100">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-[11px] font-extrabold text-slate-500 shrink-0 mr-1">
              {selectedSubjectId === 'c9_science'
                ? (isTa ? 'துறை:' : 'Branch:')
                : (isTa ? 'பிரிவு:' : 'Type:')}
            </span>
            {(selectedSubjectId === 'c9_science'
              ? [
                  { id: 'all', labelEn: 'All Branches', labelTa: 'அனைத்துப் பிரிவுகள்' },
                  { id: 'physics', labelEn: 'Physics (Units 1-9)', labelTa: 'இயற்பியல் (1-9)' },
                  { id: 'chemistry', labelEn: 'Chemistry (Units 10-16)', labelTa: 'வேதியியல் (10-16)' },
                  { id: 'biology', labelEn: 'Biology (Units 17-24)', labelTa: 'உயிரியல் (17-24)' }
                ]
              : [
                  { id: 'all', labelEn: 'All Types', labelTa: 'அனைத்து வகைகள்' },
                  { id: 'prose', labelEn: 'Prose', labelTa: 'உரைநடை' },
                  { id: 'poetry', labelEn: 'Poetry', labelTa: 'கவிதை' },
                  { id: 'grammar', labelEn: 'Grammar', labelTa: 'இலக்கணம்' },
                  { id: 'supplementary', labelEn: 'Supplementary', labelTa: 'விரிவானம்' },
                  { id: 'thirukkural', labelEn: 'Thirukkural', labelTa: 'திருக்குறள்' }
                ]
            ).map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelectedGenre(g.id)}
                className={`px-2.5 py-1 rounded-full text-[11px] font-bold shrink-0 transition-colors cursor-pointer ${
                  selectedGenre === g.id
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {isTa ? g.labelTa : g.labelEn}
              </button>
            ))}
          </div>

          {/* Iyal / Unit / Chapter filter (if Class 9, 10, or Class 12 Tamil/English) */}
          {(selectedClass === 9 || selectedClass === 10 || (selectedClass === 12 && (selectedSubjectId === 'c12_tamil' || selectedSubjectId === 'c12_english'))) && (
            <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
              <span className="text-[11px] font-extrabold text-slate-500 shrink-0 mr-1">
                {selectedSubjectId === 'c9_maths'
                  ? (isTa ? 'பாடம்:' : 'Chapter:')
                  : (selectedSubjectId === 'c9_english' || selectedSubjectId === 'c12_english' || selectedSubjectId === 'c9_science')
                  ? (isTa ? 'அலகு:' : 'Unit:')
                  : (isTa ? 'இயல் / அலகு:' : 'Iyal / Unit:')
                }
              </span>
              <button
                type="button"
                onClick={() => setSelectedIyal('all')}
                className={`px-2 py-0.5 rounded-lg text-[11px] font-bold shrink-0 transition-colors cursor-pointer ${
                  selectedIyal === 'all'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {selectedSubjectId === 'c9_maths'
                  ? (isTa ? 'அனைத்து பாடங்கள்' : 'All Chapters')
                  : (selectedSubjectId === 'c9_english' || selectedSubjectId === 'c12_english' || selectedSubjectId === 'c9_science')
                  ? (isTa ? 'அனைத்து அலகுகள்' : 'All Units')
                  : (isTa ? 'அனைத்து இயல்கள்' : 'All Iyals')
                }
              </button>
              {(selectedSubjectId === 'c12_english'
                ? ['1', '2', '3', '4', '5', '6']
                : selectedSubjectId === 'c9_english'
                ? ['1', '2', '3', '4', '5', '6', '7']
                : selectedSubjectId === 'c12_tamil'
                ? ['1', '2', '3', '4', '5', '6', '7', '8']
                : selectedSubjectId === 'c9_science'
                ? (selectedGenre === 'physics'
                    ? ['1', '2', '3', '4', '5', '6', '7', '8', '9']
                    : selectedGenre === 'chemistry'
                    ? ['10', '11', '12', '13', '14', '15', '16']
                    : selectedGenre === 'biology'
                    ? ['17', '18', '19', '20', '21', '22', '23', '24']
                    : Array.from({ length: 24 }, (_, i) => String(i + 1)))
                : ['1', '2', '3', '4', '5', '6', '7', '8', '9']
              ).map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => setSelectedIyal(num)}
                  className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold shrink-0 transition-colors cursor-pointer ${
                    selectedIyal === num
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                  }`}
                >
                  {selectedSubjectId === 'c9_maths'
                    ? (isTa ? `பாடம் ${num}` : `Ch ${num}`)
                    : (selectedSubjectId === 'c9_english' || selectedSubjectId === 'c12_english' || selectedSubjectId === 'c9_science')
                    ? (isTa ? `அலகு ${num}` : `Unit ${num}`)
                    : (isTa ? `இயல் ${num}` : `Iyal ${num}`)}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Chapters List */}
        <div className="flex flex-col gap-2.5">
          {filteredChapters.length === 0 ? (
            <div className="p-8 text-center text-slate-500 text-xs">
              {isTa ? 'தேடலுக்குரிய பாடங்கள் கிடைக்கவில்லை.' : 'No chapters found matching this filter.'}
            </div>
          ) : (
            filteredChapters.map((ch) => (
              <div
                key={ch.id}
                onClick={() => onSelectChapter(ch.id)}
                className="p-4 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-blue-600 text-white font-black text-xs flex items-center justify-center shrink-0 mt-0.5">
                    {ch.chapterNumber}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-extrabold text-sm text-slate-900 group-hover:text-blue-700 transition-colors">
                        {isTa ? ch.titleTa : ch.titleEn}
                      </h4>
                      {ch.status === 'verified' && (
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                      )}
                    </div>
                    {ch.unitNameEn && (
                      <p className="text-[11px] text-slate-500 font-semibold mt-0.5">
                        {isTa ? ch.unitNameTa : ch.unitNameEn}
                      </p>
                    )}
                  </div>
                </div>

                {/* Features Available Badges */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  {ch.hasNotes && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                      Notes
                    </span>
                  )}
                  {ch.hasQuiz && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                      Quiz
                    </span>
                  )}
                  {ch.hasVideo && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                      Video
                    </span>
                  )}
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
