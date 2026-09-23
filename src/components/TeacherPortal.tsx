import React, { useState } from 'react';
import { 
  Users, 
  CheckSquare, 
  BookOpen, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  Plus, 
  Award, 
  Search,
  CheckCircle2,
  FileCheck
} from 'lucide-react';
import { Language } from '../types';

interface TeacherPortalProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onBackToDashboard: () => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({
  lang,
  onLanguageChange,
  onBackToDashboard
}) => {
  const isTa = lang === 'ta';
  const [activeTab, setActiveTab] = useState<'roster' | 'reviewQueue' | 'assignQuiz'>('roster');

  const students = [
    { id: 'st1', name: 'K. Selvamani', class: 10, streak: 5, timeStudied: '320m', avgScore: 88, status: 'Active' },
    { id: 'st2', name: 'R. Vignesh', class: 10, streak: 3, timeStudied: '210m', avgScore: 74, status: 'Active' },
    { id: 'st3', name: 'S. Preethi', class: 10, streak: 7, timeStudied: '410m', avgScore: 94, status: 'Top Performer' },
    { id: 'st4', name: 'M. Anand', class: 10, streak: 1, timeStudied: '90m', avgScore: 62, status: 'Needs Support' }
  ];

  const draftNotes = [
    {
      id: 'dn1',
      titleEn: 'Thermal Physics: Expansion of Solids & Gas Laws',
      titleTa: 'வெப்ப இயற்பியல்: திடப்பொருள் விரிவு & வாயு விதிகள்',
      classLevel: 10,
      subject: 'Science',
      submittedBy: 'AI Curriculum Assistant',
      submittedDate: '21 Sep 2026',
      status: 'Awaiting Review'
    },
    {
      id: 'dn2',
      titleEn: 'Electricity: Ohm’s Law & Resistors in Series-Parallel',
      titleTa: 'மின்னோட்டவியல்: ஓம் விதி மற்றும் மின்தடை இணைப்புகள்',
      classLevel: 10,
      subject: 'Science',
      submittedBy: 'AI Curriculum Assistant',
      submittedDate: '21 Sep 2026',
      status: 'Awaiting Review'
    }
  ];

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
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-800">
                Teacher Console
              </span>
              <span className="text-xs text-slate-500">Govt Model HSS, Triplicane</span>
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {isTa ? 'ஆசிரியர் பணித்தளம் (Teacher Portal)' : 'Teacher Classroom Portal'}
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

      {/* Tabs */}
      <div className="bg-white rounded-2xl p-1.5 border border-slate-200 shadow-xs flex items-center gap-1">
        <button
          type="button"
          onClick={() => setActiveTab('roster')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'roster' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {isTa ? 'மாணவர் பட்டியல் (Class Roster)' : 'Student Roster'}
        </button>
        <button
          type="button"
          onClick={() => setActiveTab('reviewQueue')}
          className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition-all ${
            activeTab === 'reviewQueue' ? 'bg-blue-600 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-100'
          }`}
        >
          {isTa ? 'குறிப்புகள் சரிபார்ப்பு வரிசை (Review Queue)' : 'Note Review Queue'}
        </button>
      </div>

      {/* Roster View */}
      {activeTab === 'roster' && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900">
              {isTa ? 'வகுப்பு 10-A மாணவர்கள் முன்னேற்றம்' : 'Class 10-A Student Progress'}
            </h2>
            <span className="text-xs font-bold text-slate-500">4 Students enrolled</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                <tr>
                  <th className="p-3">Student Name</th>
                  <th className="p-3">Streak</th>
                  <th className="p-3">Time Studied</th>
                  <th className="p-3">Avg Quiz Score</th>
                  <th className="p-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {students.map((st) => (
                  <tr key={st.id} className="hover:bg-slate-50">
                    <td className="p-3 font-bold text-slate-900">{st.name}</td>
                    <td className="p-3">{st.streak} Days 🔥</td>
                    <td className="p-3">{st.timeStudied}</td>
                    <td className="p-3 font-bold text-blue-700">{st.avgScore}%</td>
                    <td className="p-3">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        st.status === 'Top Performer' ? 'bg-emerald-100 text-emerald-800' :
                        st.status === 'Needs Support' ? 'bg-amber-100 text-amber-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {st.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Review Queue (Section 5.1 & 8) */}
      {activeTab === 'reviewQueue' && (
        <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200 shadow-xs flex flex-col gap-4">
          <div>
            <h2 className="text-base font-black text-slate-900">
              {isTa ? 'ஆசிரியர் சரிபார்ப்பு வரிசை (Notes Approval Queue)' : 'Draft Notes Awaiting Teacher Review'}
            </h2>
            <p className="text-xs text-slate-500">
              {isTa ? 'சரிபார்த்து அங்கீகரித்தால் மாணவர் பக்கத்தில் பாடக் குறிப்புகள் தோன்றும்.' : 'Once approved, notes will appear for students.'}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {draftNotes.map((dn) => (
              <div key={dn.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    Class {dn.classLevel} • {dn.subject}
                  </span>
                  <h3 className="font-bold text-xs sm:text-sm text-slate-900 mt-1">
                    {isTa ? dn.titleTa : dn.titleEn}
                  </h3>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Drafted on {dn.submittedDate} by {dn.submittedBy}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => alert(isTa ? 'பாடம் வெற்றிகரமாக அங்கீகரிக்கப்பட்டது!' : 'Note approved successfully!')}
                    className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs"
                  >
                    ✓ {isTa ? 'அங்கீகரி (Approve)' : 'Approve'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
