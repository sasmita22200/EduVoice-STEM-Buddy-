import React, { useState } from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Volume2, 
  Award, 
  BookOpen, 
  ArrowRight, 
  X, 
  RefreshCw, 
  ShieldCheck, 
  Clock, 
  Upload, 
  FileText, 
  Info,
  ChevronRight,
  School,
  Building
} from 'lucide-react';
import { StudentProfile } from '../types';

interface SuccessModalProps {
  profile: StudentProfile | null;
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ta';
  onReset: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  profile,
  isOpen,
  onClose,
  lang,
  onReset
}) => {
  const [showVerificationDrawer, setShowVerificationDrawer] = useState(false);
  const [mockUploadedFile, setMockUploadedFile] = useState<string | null>(null);

  if (!isOpen || !profile) return null;

  const isTa = lang === 'ta';
  const isPending = profile.verificationStatus === 'School Verification Pending' || profile.isManualSchool;

  const speakWelcome = () => {
    if ('speechSynthesis' in window) {
      const msg = isTa
        ? `வாழ்த்துக்கள் ${profile.fullName}! எஜுவாய்ஸ் STEM படி கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது. உங்கள் பள்ளி விவரங்கள் பின்னணியில் சரிபார்க்கப்படும்.`
        : `Congratulations ${profile.fullName}! Your EduVoice STEM Buddy account has been created successfully.`;
      const utterance = new SpeechSynthesisUtterance(msg);
      utterance.lang = isTa ? 'ta-IN' : 'en-US';
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSimulateFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setMockUploadedFile(e.target.files[0].name);
    } else {
      setMockUploadedFile('student_school_id_card.jpg');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-md bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl overflow-hidden border border-white/80 relative text-center max-h-[90vh] flex flex-col">
        {/* Top Decorative Graphic Header */}
        <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-emerald-600 p-5 text-white relative flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="w-14 h-14 rounded-2xl bg-white text-emerald-600 mx-auto flex items-center justify-center shadow-lg mb-2.5">
            <CheckCircle2 className="w-9 h-9 text-emerald-500" />
          </div>

          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-emerald-400/20 text-emerald-200 text-xs font-bold border border-emerald-300/30 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            {isTa ? 'கணக்கு வெற்றிகரமாக உருவாக்கப்பட்டது!' : 'Account Created Successfully!'}
          </span>

          <h3 className="text-lg sm:text-xl font-black text-white">
            {isTa ? 'நல்வரவு,' : 'Welcome,'} {profile.fullName}!
          </h3>
          <p className="text-xs text-blue-100 opacity-90 mt-0.5">
            {isTa
              ? 'உங்கள் AI STEM கற்றல் பயணம் இப்போது தொடங்குகிறது.'
              : 'Instant access granted to STEM voice learning.'}
          </p>
        </div>

        {/* Scrollable Modal Content */}
        <div className="p-4 sm:p-5 space-y-3.5 overflow-y-auto text-left">
          {/* Student ID Card Badge with Verification Status */}
          <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/90 shadow-xs space-y-2.5">
            <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-xs font-bold text-slate-800">Student Profile Card</span>
              </div>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                {profile.studentId}
              </span>
            </div>

            {/* School & Verification Status Badge */}
            <div className="flex items-center justify-between gap-2 p-2 rounded-xl bg-white border border-slate-100">
              <div className="flex items-center gap-2 truncate">
                <School className="w-4 h-4 text-blue-600 flex-shrink-0" />
                <div className="truncate">
                  <p className="text-xs font-bold text-slate-900 truncate">{profile.schoolName}</p>
                  <p className="text-[10px] text-slate-500">{profile.district}, Tamil Nadu</p>
                </div>
              </div>

              {/* Status Badge */}
              {isPending ? (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 flex-shrink-0">
                  <Clock className="w-3 h-3 text-amber-600" />
                  <span>{isTa ? 'சரிபார்ப்பு நிலுவையில் உள்ளது' : 'School Verification Pending'}</span>
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 flex-shrink-0">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>{isTa ? 'பள்ளி சரிபார்க்கப்பட்டது' : 'School Verified'}</span>
                </span>
              )}
            </div>

            {/* Full School Address (if manually entered) */}
            {profile.schoolAddress && (
              <div className="text-[10px] text-slate-500 bg-slate-100/70 p-2 rounded-lg">
                <span className="font-semibold text-slate-700 block">{isTa ? 'பள்ளி முகவரி:' : 'School Address:'}</span>
                <span>{profile.schoolAddress}</span>
              </div>
            )}

            {/* Other details */}
            <div className="grid grid-cols-2 gap-2 text-xs pt-1">
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Grade / Class</span>
                <span className="font-bold text-blue-600">{profile.grade}</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block font-medium">Preferred Language</span>
                <span className="font-bold text-emerald-600">{profile.language}</span>
              </div>
            </div>
          </div>

          {/* School Verification Information Note */}
          {isPending ? (
            <div className="p-3 bg-blue-50/80 rounded-xl border border-blue-200 flex items-start gap-2.5 text-xs text-blue-900">
              <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
              <div className="space-y-1">
                <p className="font-bold text-blue-950">
                  {isTa ? 'முழுமையான உடனடி அணுகல் வழங்கப்பட்டுள்ளது' : 'Full Immediate Access Granted'}
                </p>
                <p className="text-[11px] leading-relaxed text-blue-800">
                  {isTa
                    ? 'உங்கள் பள்ளி விவரங்கள் பின்னர் எங்கள் குழுவால் சரிபார்க்கப்படும். பதிவின் போது எந்த ஆவணமும் தேவையில்லை. நீங்கள் இப்போதே கற்கத் தொடங்கலாம்!'
                    : 'Your account is fully active. Our admin team will verify the school details in the background. No documents are required right now.'}
                </p>
              </div>
            </div>
          ) : null}

          {/* Future Verification Flow Preview Trigger */}
          <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 space-y-2">
            <button
              type="button"
              onClick={() => setShowVerificationDrawer(!showVerificationDrawer)}
              className="w-full flex items-center justify-between text-xs font-bold text-slate-800 hover:text-blue-600 cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-600" />
                <span>{isTa ? 'எதிர்கால சரிபார்ப்பு வசதி (Profile → Verification)' : 'Future Verification Flow (Optional)'}</span>
              </div>
              <ChevronRight className={`w-4 h-4 text-slate-400 transition-transform ${showVerificationDrawer ? 'rotate-90' : ''}`} />
            </button>

            {showVerificationDrawer && (
              <div className="pt-2 border-t border-slate-200/80 space-y-2 text-xs text-slate-600 animate-fadeIn">
                <p className="text-[11px]">
                  {isTa
                    ? 'நிர்வாகிக்கு எதிர்காலத்தில் கூடுதல் சரிபார்ப்பு தேவைப்பட்டால், நீங்கள் உங்கள் பள்ளி அடையாள அட்டை (School ID Card) அல்லது ஏதேனும் பள்ளி ஆவணத்தைப் பதிவேற்றலாம்.'
                    : 'If an administrator requests additional verification in the future, you can upload one supporting document (School ID Card) in your profile.'}
                </p>

                {mockUploadedFile ? (
                  <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <span className="truncate">{mockUploadedFile} (Uploaded)</span>
                  </div>
                ) : (
                  <label className="flex items-center justify-center gap-2 p-2.5 rounded-xl border border-dashed border-slate-300 bg-white hover:bg-slate-50 cursor-pointer text-slate-600 font-medium text-xs transition-colors">
                    <Upload className="w-3.5 h-3.5 text-blue-600" />
                    <span>{isTa ? 'பள்ளி அடையாள அட்டை பதிவேற்ற முன்னோட்டம்' : 'Upload School ID Card Demo'}</span>
                    <input
                      type="file"
                      accept="image/*,.pdf"
                      onChange={handleSimulateFileUpload}
                      className="hidden"
                    />
                  </label>
                )}
              </div>
            )}
          </div>

          {/* Voice Greeting Button */}
          <button
            type="button"
            onClick={speakWelcome}
            className="w-full py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-xs border border-emerald-200 flex items-center justify-center gap-2 transition-all cursor-pointer"
          >
            <Volume2 className="w-4 h-4 text-emerald-600 animate-pulse" />
            <span>{isTa ? 'குரல் வாழ்த்து கேட்கவும்' : 'Listen to AI Voice Greeting'}</span>
          </button>
        </div>

        {/* Modal Action Buttons */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex flex-col gap-2 flex-shrink-0">
          <button
            onClick={onClose}
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white font-bold text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-98"
          >
            <span>{isTa ? 'உடனடியாக கற்றலைத் தொடங்குக' : 'Start Learning Now (Immediate Access)'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => {
              onClose();
              onReset();
            }}
            className="text-xs text-slate-500 hover:text-slate-800 font-medium py-1 flex items-center justify-center gap-1 cursor-pointer"
          >
            <RefreshCw className="w-3 h-3" />
            <span>{isTa ? 'படிவத்தை மீட்டமை' : 'Reset Registration Form'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
