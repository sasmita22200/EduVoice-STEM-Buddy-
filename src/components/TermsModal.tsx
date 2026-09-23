import React from 'react';
import { X, ShieldCheck, Lock, FileText, Check } from 'lucide-react';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ta';
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose, lang }) => {
  if (!isOpen) return null;

  const isTa = lang === 'ta';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md animate-fadeIn">
      <div className="w-full max-w-lg bg-white/85 backdrop-blur-2xl rounded-2xl shadow-2xl overflow-hidden border border-white/80 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-blue-600 to-indigo-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-300" />
            <h3 className="text-base font-bold">
              {isTa ? 'தனியுரிமைக் கொள்கை & நிபந்தனைகள்' : 'Privacy Policy & Terms of Service'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-white/20 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs text-slate-700 leading-relaxed">
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-100 flex items-start gap-2 text-blue-900">
            <Lock className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <p>
              {isTa
                ? 'அரசு மேல்நிலைப் பள்ளி மாணவர்களுக்கான பாதுகாப்பான AI கற்றல் தளம்.'
                : 'A safe, secure AI learning platform dedicated to Govt School students in Tamil Nadu.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-sm">
              <FileText className="w-4 h-4 text-blue-600" />
              {isTa ? '1. மாணவர் தரவு பாதுகாப்பு' : '1. Student Data Protection'}
            </h4>
            <p>
              {isTa
                ? 'மாணவரின் பெயர், கைபேசி எண் மற்றும் பள்ளித் தகவல்கள் கல்வி நோக்கத்திற்காக மட்டுமே பயன்படுத்தப்படும்.'
                : 'All student profile details, school name, and mobile numbers are stored securely and used strictly for educational STEM tutoring and progress monitoring.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-sm">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              {isTa ? '2. பெற்றோர் / பாதுகாவலர் சம்மதம்' : '2. Parent & Guardian Consent'}
            </h4>
            <p>
              {isTa
                ? '18 வயதுக்குட்பட்ட மாணவர்களுக்கு பெற்றோர் அல்லது பாதுகாவலரின் அனுமதி அவசியம்.'
                : 'Parents or guardians will receive SMS or app progress alerts for their student’s AI learning journey.'}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-1 flex items-center gap-1.5 text-sm">
              <Check className="w-4 h-4 text-blue-600" />
              {isTa ? '3. இருமொழி AI வழிகாட்டல்' : '3. Bilingual AI Assistance'}
            </h4>
            <p>
              {isTa
                ? 'எஜுவாய்ஸ் AI உதவியாளர் தமிழ் மற்றும் ஆங்கிலத்தில் அரசு பாடத்திட்ட கேள்விகளுக்கு பதிலளிக்கும்.'
                : 'EduVoice / STEM Buddy provides generative AI hints and audio voice guidance in Tamil and English based on TN State Syllabus (Grades 9-12).'}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
          >
            {isTa ? 'புரிந்தது & ஒப்புக்கொள்கிறேன்' : 'I Understand & Agree'}
          </button>
        </div>
      </div>
    </div>
  );
};
