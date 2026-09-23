import React, { useState } from 'react';
import { 
  BookOpen, 
  Flame, 
  Clock, 
  Award, 
  TrendingUp, 
  Bell, 
  Sparkles, 
  ArrowRight, 
  RotateCcw, 
  Calendar, 
  CheckCircle, 
  Bot, 
  Atom, 
  Calculator, 
  Languages, 
  Globe, 
  GraduationCap, 
  School, 
  ChevronRight, 
  CheckCircle2, 
  FileText,
  Briefcase,
  FlaskConical,
  Dna,
  Cpu,
  BarChart3,
  Bookmark,
  AlertCircle
} from 'lucide-react';
import { Language, StudentProfile, ClassLevel, SubjectMetadata, NoteItem } from '../types';
import { SUBJECT_METADATA, ALL_CHAPTERS, CHAPTER_NOTES, TN_GROUPS } from '../data/eduvoiceSyllabus';

interface StudentDashboardProps {
  lang: Language;
  profile: StudentProfile;
  onLanguageChange: (lang: Language) => void;
  onOpenChapter: (chapterId: string) => void;
  onOpenSubjects: () => void;
  onSwitchRole: (role: any) => void;
  onOpenSTEMBuddy: () => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  lang,
  profile,
  onLanguageChange,
  onOpenChapter,
  onOpenSubjects,
  onSwitchRole,
  onOpenSTEMBuddy
}) => {
  const isTa = lang === 'ta';
  const [notificationsOpen, setNotificationsOpen] = useState(false);

  // Get subjects for student's class and group
  const classSubjects = SUBJECT_METADATA.filter(s => s.classLevel === profile.classLevel);

  // Filter for group stream if Class 11 or 12
  const activeSubjects = (profile.classLevel === 11 || profile.classLevel === 12) && profile.groupCode
    ? (() => {
        const group = TN_GROUPS.find(g => g.code === profile.groupCode);
        if (!group) return classSubjects;
        return classSubjects.filter(s => {
          if (s.id.includes('tamil') || s.id.includes('english')) return true;
          return group.subjectIds.some(sid => s.id.toLowerCase().includes(sid));
        });
      })()
    : classSubjects;

  // Study week minutes data
  const studyMinutesWeek = [
    { day: 'Mon', dayTa: 'திங்கள்', min: 35 },
    { day: 'Tue', dayTa: 'செவ்வாய்', min: 45 },
    { day: 'Wed', dayTa: 'புதன்', min: 50 },
    { day: 'Thu', dayTa: 'வியாழன்', min: 40 },
    { day: 'Fri', dayTa: 'வெள்ளி', min: 65 },
    { day: 'Sat', dayTa: 'சனி', min: 55 },
    { day: 'Sun', dayTa: 'ஞாயிறு', min: 30 }
  ];

  const recentNotes: NoteItem[] = Object.values(CHAPTER_NOTES)
    .sort((a, b) => (b.classLevel === profile.classLevel ? 1 : 0) - (a.classLevel === profile.classLevel ? 1 : 0))
    .slice(0, 6);

  const notifications = [
    {
      id: 'n1',
      titleEn: 'Physics Note Updated (v1.2)',
      titleTa: 'இயற்பியல் பாடம் புதுப்பிக்கப்பட்டது (v1.2)',
      descEn: 'Laws of Motion: Added 2026 blueprint derivations on 21 Sep 2026',
      descTa: 'இயக்க விதிகள்: 21 செப் 2026 அன்று புதிய 5 மதிப்பெண் கணக்குகள் சேர்க்கப்பட்டன',
      time: '1h ago',
      unread: true
    },
    {
      id: 'n2',
      titleEn: 'Teacher Assigned Practice Quiz',
      titleTa: 'ஆசிரியர் ஒப்படைத்த பயிற்சி வினாடி வினா',
      descEn: 'Class 10 Science Unit 1 due this Friday at 5:00 PM',
      descTa: '10-ஆம் வகுப்பு அறிவியல் அலகு 1 – இவ்வார வெள்ளிக்கிழமை மாலை 5:00 மணிக்குள் முடிக்கவும்',
      time: '3h ago',
      unread: true
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col gap-5 pb-24 text-slate-800">
      {/* Header (Section 6) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-black text-lg flex items-center justify-center shadow-md">
            {profile.fullName.charAt(0)}
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg sm:text-xl font-black text-slate-900">
                {profile.fullName}
              </h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-black bg-blue-100 text-blue-800 border border-blue-200">
                Class {profile.classLevel}
              </span>
              {profile.groupCode && (
                <span className="px-2 py-0.5 rounded-full text-[11px] font-bold bg-purple-100 text-purple-800">
                  Group {profile.groupCode}
                </span>
              )}
            </div>
            <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5">
              <School className="w-3.5 h-3.5 text-slate-400" />
              <span>{profile.schoolName}</span>
              <span>•</span>
              <span className="font-bold text-slate-600">{profile.district}</span>
            </p>
          </div>
        </div>

        {/* Actions: Notifications, Lang Toggle, Role Switcher */}
        <div className="flex items-center gap-2 self-end sm:self-auto">
          {/* Notification Bell */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="p-2.5 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors relative cursor-pointer"
              title="Notifications"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-red-500"></span>
            </button>

            {/* Notifications Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 top-12 z-50 w-72 sm:w-80 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 flex flex-col gap-2 animate-in fade-in">
                <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                  <h4 className="text-xs font-black text-slate-900">
                    {isTa ? 'அறிவிப்புகள் (Notifications)' : 'Notifications'}
                  </h4>
                  <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">2 New</span>
                </div>
                {notifications.map(n => (
                  <div key={n.id} className="p-2 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors text-xs flex flex-col gap-0.5">
                    <p className="font-bold text-slate-900">{isTa ? n.titleTa : n.titleEn}</p>
                    <p className="text-[11px] text-slate-500">{isTa ? n.descTa : n.descEn}</p>
                    <span className="text-[10px] text-slate-400 self-end mt-0.5">{n.time}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bilingual Language Toggle */}
          <button
            type="button"
            onClick={() => onLanguageChange(isTa ? 'en' : 'ta')}
            className="px-3 py-2 text-xs font-black rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            {isTa ? 'English' : 'தமிழ்'}
          </button>

          {/* Role switcher preview button */}
          <button
            type="button"
            onClick={() => onSwitchRole('teacher')}
            className="px-2.5 py-2 text-[11px] font-bold rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            title="Switch to Teacher View"
          >
            👩‍🏫 {isTa ? 'ஆசிரியர்' : 'Teacher'}
          </button>
        </div>
      </div>

      {/* Continue Learning Banner (Section 6) */}
      <div className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-800 text-white rounded-3xl p-5 sm:p-6 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[11px] font-extrabold uppercase tracking-wide backdrop-blur-md">
              {isTa ? 'கற்றலைத் தொடரவும் (Continue Learning)' : 'Continue Learning'}
            </span>
            <span className="text-xs text-blue-200 font-semibold">• 65% Completed</span>
          </div>
          <h2 className="text-lg sm:text-xl font-black text-white">
            {profile.classLevel === 12 ? 'Class 12 Physics: Electrostatics' : 'Class 10 Science: Laws of Motion'}
          </h2>
          <p className="text-xs text-blue-100 max-w-lg">
            {isTa 
              ? 'உந்த அழிவின்மை விதி மற்றும் மாதிரி வினாடி வினா காத்திருக்கிறது.'
              : 'Resume where you left off: Step-by-step momentum conservation derivation and practice quiz.'}
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenChapter(profile.classLevel === 12 ? 'c12_phy_u1' : 'c10_sci_u1')}
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-blue-800 hover:bg-blue-50 font-black text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer shrink-0"
        >
          <span>{isTa ? 'தொடரவும் (Resume)' : 'Resume Learning'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Quick Metrics & Streak Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {/* Streak */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
            <Flame className="w-5 h-5 fill-orange-500" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-black text-slate-900">5 {isTa ? 'நாட்கள்' : 'Days'}</p>
            <p className="text-[11px] text-slate-500 font-semibold">{isTa ? 'தொடர் கற்றல் (Streak)' : 'Daily Streak'}</p>
          </div>
        </div>

        {/* Study Time Today */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-black text-slate-900">45 {isTa ? 'நிமிடம்' : 'Mins'}</p>
            <p className="text-[11px] text-slate-500 font-semibold">{isTa ? 'இன்று படித்த நேரம்' : 'Studied Today'}</p>
          </div>
        </div>

        {/* Chapters Completed */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
            <CheckCircle className="w-5 h-5" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-black text-slate-900">12 / 23</p>
            <p className="text-[11px] text-slate-500 font-semibold">{isTa ? 'முடித்த பாடங்கள்' : 'Chapters Done'}</p>
          </div>
        </div>

        {/* Average Quiz Score */}
        <div className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-xs flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-600 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <p className="text-base sm:text-lg font-black text-slate-900">88%</p>
            <p className="text-[11px] text-slate-500 font-semibold">{isTa ? 'சராசரி மதிப்பெண்' : 'Avg Quiz Score'}</p>
          </div>
        </div>
      </div>

      {/* Main Section: My Subjects Cards (Section 6) */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900">
              {isTa ? 'என் பாடங்கள் (My Subjects)' : 'My Subjects'}
            </h2>
            <p className="text-xs text-slate-500">
              {profile.classLevel <= 10 
                ? (isTa ? '10-ஆம் வகுப்பு சமச்சீர் 5 முக்கிய பாடங்கள்' : 'Class 10 Core 5 Subjects')
                : (isTa ? `வகுப்பு ${profile.classLevel} குரூப் ${profile.groupCode} பாடங்கள்` : `Class ${profile.classLevel} Group ${profile.groupCode} Subjects`)}
            </p>
          </div>

          <button
            type="button"
            onClick={onOpenSubjects}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
          >
            <span>{isTa ? 'அனைத்து பாடத்திட்டம்' : 'View Full Syllabus'}</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Subjects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {activeSubjects.map((sub, idx) => {
            const completion = idx === 0 ? 80 : idx === 1 ? 60 : idx === 3 ? 75 : 40;
            return (
              <div
                key={sub.id}
                onClick={() => onOpenChapter(sub.id === 'c10_science' ? 'c10_sci_u1' : 'c10_sci_u1')}
                className="bg-white rounded-3xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between gap-3 cursor-pointer group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${sub.themeColor} text-white flex items-center justify-center shadow-xs`}>
                      <Atom className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-black text-sm text-slate-900 group-hover:text-blue-600 transition-colors">
                        {isTa ? sub.nameTa : sub.nameEn}
                      </h3>
                      <p className="text-[11px] text-slate-500 font-semibold">
                        {sub.totalChapters} {isTa ? 'அலகுகள் / பாடங்கள்' : 'Chapters'}
                      </p>
                    </div>
                  </div>

                  {/* Circular completion ring badge */}
                  <div className="flex flex-col items-end">
                    <span className="text-xs font-black text-blue-700">{completion}%</span>
                    <span className="text-[10px] text-slate-400">{isTa ? 'முடிக்கப்பட்டது' : 'Completed'}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${sub.themeColor} rounded-full transition-all`}
                    style={{ width: `${completion}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-xs pt-1 border-t border-slate-100 text-slate-500">
                  <span className="font-semibold">{isTa ? 'அடுத்த பாடம்: இயக்க விதிகள்' : 'Next: Laws of Motion'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Two Column Layout: Recent Dated Notes & Weekly Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Recent & Updated Notes with Mandatory Dates (Section 5.1 & 6) */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-600" />
              <span>{isTa ? 'சமீபத்திய & புதுப்பிக்கப்பட்ட குறிப்புகள்' : 'Recent & Updated Notes'}</span>
            </h3>
            <span className="text-[11px] text-blue-600 font-bold">{isTa ? 'தேதியுடன்' : 'With Dates'}</span>
          </div>

          <div className="flex flex-col gap-2.5">
            {recentNotes.map((nt) => (
              <div
                key={nt.id}
                onClick={() => onOpenChapter(nt.chapterId)}
                className="p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/70 border border-slate-200/80 transition-all flex flex-col gap-1.5 cursor-pointer group"
              >
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-extrabold text-xs text-slate-900 group-hover:text-blue-700 transition-colors line-clamp-1">
                    {isTa ? nt.titleTa : nt.titleEn}
                  </h4>
                  {nt.isUpdated && (
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-cyan-100 text-cyan-800 shrink-0">
                      {isTa ? 'Updated' : 'Updated'}
                    </span>
                  )}
                </div>

                {/* Note Updated Status */}
                <div className="flex items-center text-[11px] text-slate-500 font-semibold gap-2">
                  <span className="flex items-center gap-1 text-blue-700 font-bold">
                    <Clock className="w-3 h-3 text-blue-600" />
                    <span>{isTa ? 'புதுப்பிக்கப்பட்டது:' : 'Updated:'} {isTa ? nt.updatedAtTa : nt.updatedAt}</span>
                  </span>
                </div>
              </div>
            ))}
            <button
              type="button"
              onClick={onOpenSubjects}
              className="mt-1 py-2 px-3 text-xs font-bold text-center text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
            >
              {isTa ? 'அனைத்து பாடங்களையும் காண்க →' : 'View All Chapters & Subjects →'}
            </button>
          </div>
        </div>

        {/* Weekly Study Activity Chart & Weak Topics */}
        <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm flex flex-col gap-4">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <h3 className="font-black text-sm text-slate-900 flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-purple-600" />
              <span>{isTa ? 'கற்றல் நேரம் (Minutes Studied This Week)' : 'Study Activity This Week'}</span>
            </h3>
            <span className="text-xs font-bold text-slate-500">320 min total</span>
          </div>

          {/* Simple Bar Chart */}
          <div className="h-28 flex items-end justify-between gap-2 pt-2 px-1">
            {studyMinutesWeek.map((item, idx) => {
              const heightPercent = (item.min / 70) * 100;
              return (
                <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                  <div className="text-[10px] font-bold text-slate-500">{item.min}m</div>
                  <div
                    className="w-full max-w-[28px] rounded-t-lg bg-gradient-to-t from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-600 transition-all"
                    style={{ height: `${heightPercent}%` }}
                  />
                  <div className="text-[10px] font-semibold text-slate-600 truncate">
                    {isTa ? item.dayTa.slice(0, 3) : item.day}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Weak Topics Re-test Banner */}
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 text-xs flex items-center justify-between gap-2">
            <div>
              <p className="font-extrabold text-amber-900 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                <span>{isTa ? 'கவனம் தேவைப்படும் பகுதி: கணத்தாக்கு விசை' : 'Weak Topic: Impulse & Momentum'}</span>
              </p>
              <p className="text-[11px] text-amber-800">
                {isTa ? 'வினாடி வினாவில் 55% துல்லியம். மீண்டும் பயிற்சி செய்க.' : 'Accuracy: 55%. Practice to master.'}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onOpenChapter('c10_sci_u1')}
              className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shrink-0 cursor-pointer"
            >
              {isTa ? 'பயிற்சி' : 'Retry'}
            </button>
          </div>
        </div>
      </div>

      {/* STEMBuddy Shortcuts Banner (Section 6 & 7) */}
      <div className="bg-gradient-to-r from-purple-50 via-indigo-50 to-blue-50 rounded-3xl p-5 border border-purple-200/80 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center shadow-md">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-black text-sm text-slate-900">
              {isTa ? 'STEMBuddy AI ஆசிரியரிடம் கேளுங்கள்' : 'Need help? Ask STEMBuddy AI Tutor'}
            </h3>
            <p className="text-xs text-slate-600">
              {isTa 
                ? 'பாடக் குறிப்புகள் மற்றும் அரசு பாடநூல் அடிப்படையில் துல்லியமான பதில்கள்.'
                : 'Instant answers strictly grounded in Samacheer syllabus notes with dates.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={onOpenSTEMBuddy}
            className="px-4 py-2.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-black shadow-sm transition-all"
          >
            ⚡ {isTa ? 'சந்தேகம் கேட்க' : 'Ask a Doubt'}
          </button>
          <button
            type="button"
            onClick={onOpenSTEMBuddy}
            className="px-3.5 py-2.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 text-xs font-bold border border-purple-200 shadow-xs transition-all"
          >
            🎯 {isTa ? 'இன்றைய வினாடி வினா' : 'Quiz Me'}
          </button>
        </div>
      </div>
    </div>
  );
};
