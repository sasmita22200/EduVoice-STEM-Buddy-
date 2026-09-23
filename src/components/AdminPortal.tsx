import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  ArrowLeft, 
  PieChart, 
  BookOpen, 
  FileText, 
  AlertTriangle,
  Sparkles,
  Search,
  Database
} from 'lucide-react';
import { Language, SubjectMetadata } from '../types';
import { SUBJECT_METADATA } from '../data/eduvoiceSyllabus';

interface AdminPortalProps {
  lang: Language;
  onLanguageChange: (lang: Language) => void;
  onBackToDashboard: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  lang,
  onLanguageChange,
  onBackToDashboard
}) => {
  const isTa = lang === 'ta';
  const [filterStatus, setFilterStatus] = useState<'all' | 'verified' | 'from_upload' | 'needs_source'>('all');

  const verifiedCount = SUBJECT_METADATA.filter(s => s.status === 'verified').length;
  const uploadCount = SUBJECT_METADATA.filter(s => s.status === 'from_upload').length;
  const needsSourceCount = SUBJECT_METADATA.filter(s => s.status === 'needs_source').length;
  const totalSubjects = SUBJECT_METADATA.length;

  const filtered = filterStatus === 'all' 
    ? SUBJECT_METADATA 
    : SUBJECT_METADATA.filter(s => s.status === filterStatus);

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
              <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-slate-900 text-white">
                Admin Console
              </span>
              <span className="text-xs text-slate-500">TNSCERT Syllabus Oversight</span>
            </div>
            <h1 className="text-lg sm:text-xl font-black text-slate-900">
              {isTa ? 'நிர்வாகி கட்டுப்பாட்டு அறை (Admin CMS)' : 'Curriculum Admin & Completeness Report'}
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

      {/* Content Completeness Report by Status (Section 4 & 8) */}
      <div className="bg-white rounded-3xl p-5 sm:p-6 border border-slate-200/90 shadow-sm flex flex-col gap-4">
        <div>
          <h2 className="text-base font-black text-slate-900 flex items-center gap-2">
            <PieChart className="w-5 h-5 text-blue-600" />
            <span>{isTa ? 'பாடத்திட்ட முழுமை அறிக்கை (Content Completeness Report)' : 'Content Completeness Report by Status'}</span>
          </h2>
          <p className="text-xs text-slate-500">
            {isTa ? 'சமச்சீர் கல்வி பாடத்திட்டத்தின் தற்போதைய நிலை மற்றும் தேவைப்படும் மூலங்கள்:' : 'Current validation breakdown across Classes 9, 10, 11, and 12 subjects:'}
          </p>
        </div>

        {/* Status Metrics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Verified */}
          <div 
            onClick={() => setFilterStatus('verified')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              filterStatus === 'verified' ? 'ring-2 ring-emerald-500 bg-emerald-50/50' : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-800">✅ Verified (சரிபார்க்கப்பட்டது)</span>
              <span className="text-lg font-black text-emerald-700">{verifiedCount}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Cross-checked against 2026 index</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-emerald-600 h-full rounded-full" style={{ width: `${(verifiedCount / totalSubjects) * 100}%` }} />
            </div>
          </div>

          {/* From Upload */}
          <div 
            onClick={() => setFilterStatus('from_upload')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              filterStatus === 'from_upload' ? 'ring-2 ring-blue-500 bg-blue-50/50' : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-blue-800">⚠️ From Upload (சரிபார்க்கப்பட வேண்டியவை)</span>
              <span className="text-lg font-black text-blue-700">{uploadCount}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">From initial outline, not re-checked</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(uploadCount / totalSubjects) * 100}%` }} />
            </div>
          </div>

          {/* Needs Source */}
          <div 
            onClick={() => setFilterStatus('needs_source')}
            className={`p-4 rounded-2xl border transition-all cursor-pointer ${
              filterStatus === 'needs_source' ? 'ring-2 ring-amber-500 bg-amber-50/50' : 'bg-white hover:bg-slate-50 border-slate-200'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-amber-800">❓ Needs Source (Coming Soon)</span>
              <span className="text-lg font-black text-amber-700">{needsSourceCount}</span>
            </div>
            <p className="text-[11px] text-slate-500 mt-1">Fetch chapter index from textbook</p>
            <div className="w-full bg-slate-100 h-1.5 rounded-full mt-2 overflow-hidden">
              <div className="bg-amber-500 h-full rounded-full" style={{ width: `${(needsSourceCount / totalSubjects) * 100}%` }} />
            </div>
          </div>
        </div>

        {/* Filter bar */}
        <div className="flex items-center justify-between pt-2 border-t border-slate-100 text-xs">
          <span className="font-semibold text-slate-500">Showing {filtered.length} of {totalSubjects} subjects</span>
          {filterStatus !== 'all' && (
            <button
              onClick={() => setFilterStatus('all')}
              className="text-blue-600 font-bold hover:underline"
            >
              Reset Filter
            </button>
          )}
        </div>

        {/* Subjects Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
              <tr>
                <th className="p-3">Class</th>
                <th className="p-3">Subject Name</th>
                <th className="p-3">Part</th>
                <th className="p-3">Status</th>
                <th className="p-3">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 font-medium">
              {filtered.map((s) => (
                <tr key={s.id} className="hover:bg-slate-50">
                  <td className="p-3 font-bold text-slate-700">Class {s.classLevel}</td>
                  <td className="p-3 font-extrabold text-slate-900">{isTa ? s.nameTa : s.nameEn}</td>
                  <td className="p-3">{s.part || 'Core'}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      s.status === 'verified' ? 'bg-emerald-100 text-emerald-800' :
                      s.status === 'from_upload' ? 'bg-blue-100 text-blue-800' : 'bg-amber-100 text-amber-800'
                    }`}>
                      {s.status === 'verified' ? 'Verified' : s.status === 'from_upload' ? 'From Upload' : 'Needs Source (Coming Soon)'}
                    </span>
                  </td>
                  <td className="p-3">
                    <button
                      type="button"
                      onClick={() => alert(`Opening editor for ${s.nameEn}`)}
                      className="text-blue-600 hover:text-blue-800 font-bold"
                    >
                      Edit Chapters
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
