import React, { useState } from 'react';
import { RegistrationForm } from './components/RegistrationForm';
import { LoginScreen } from './components/LoginScreen';
import { AndroidFrame, AppViewType } from './components/AndroidFrame';
import { SuccessModal } from './components/SuccessModal';
import { TermsModal } from './components/TermsModal';
import { BotanyLearningStudio } from './components/BotanyLearningStudio';
import { PhysicsLearningStudio } from './components/PhysicsLearningStudio';
import { StudentDashboard } from './components/StudentDashboard';
import { ChapterLearningSuite } from './components/ChapterLearningSuite';
import { SubjectExplorer } from './components/SubjectExplorer';
import { TeacherPortal } from './components/TeacherPortal';
import { ParentPortal } from './components/ParentPortal';
import { AdminPortal } from './components/AdminPortal';
import { STEMBuddyFloatingChat } from './components/STEMBuddyFloatingChat';
import { Language, StudentProfile } from './types';
import { ALL_CHAPTERS } from './data/eduvoiceSyllabus';

export default function App() {
  const [currentView, setCurrentView] = useState<AppViewType>('studentDashboard');
  const [language, setLanguage] = useState<Language>('ta');
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [successProfile, setSuccessProfile] = useState<StudentProfile | null>(null);

  // Active chapter state for ChapterLearningSuite
  const [selectedChapterId, setSelectedChapterId] = useState<string>('c10_sci_u1');

  // Active Student Profile
  const [currentProfile, setCurrentProfile] = useState<StudentProfile>({
    studentId: 'EDU-TN-2026-9812',
    fullName: 'K. Selvamani',
    role: 'student',
    email: 'selvamani.student@gmail.com',
    mobile: '9876543210',
    grade: 'Class 10',
    classLevel: 10,
    schoolName: 'Govt Model Higher Secondary School, Triplicane',
    schoolAddress: 'Kamarajar Salai, Triplicane, Chennai - 600005',
    isManualSchool: false,
    verificationStatus: 'School Verified',
    district: 'Chennai',
    state: 'Tamil Nadu',
    language: 'ta',
    avatarSeed: 'Selvamani',
    parentName: 'M. Kumaravel',
    parentMobile: '9444123456'
  });

  const handleRegistrationSuccess = (profile: StudentProfile) => {
    setCurrentProfile(profile);
    setSuccessProfile(profile);
  };

  const handleOpenChapter = (chapterId: string) => {
    setSelectedChapterId(chapterId);
    setCurrentView('chapterLearning');
  };

  return (
    <div className="min-h-screen w-full bg-[radial-gradient(circle_at_top_right,_#dcfce7,_transparent_60%),radial-gradient(circle_at_bottom_left,_#dbeafe,_transparent_60%),radial-gradient(circle_at_center,_#f0fdf4,_transparent_80%)] bg-slate-50 text-slate-800 font-sans flex flex-col items-center justify-start py-3 px-2 sm:px-4 selection:bg-blue-200 selection:text-blue-900">
      {/* Android Device Mockup Frame with Evaluator Screen Switcher */}
      <AndroidFrame 
        activeLanguage={language}
        currentView={currentView}
        onViewChange={(view) => setCurrentView(view)}
      >
        {currentView === 'studentDashboard' ? (
          <StudentDashboard
            lang={language}
            profile={currentProfile}
            onLanguageChange={setLanguage}
            onOpenChapter={handleOpenChapter}
            onOpenSubjects={() => setCurrentView('subjectExplorer')}
            onSwitchRole={(role) => {
              if (role === 'teacher') setCurrentView('teacherPortal');
              else if (role === 'parent') setCurrentView('parentPortal');
              else if (role === 'admin') setCurrentView('adminPortal');
            }}
            onOpenSTEMBuddy={() => {
              // Trigger floating buddy to open or focus
              const buddyBtn = document.getElementById('stembuddy-trigger-btn');
              if (buddyBtn) buddyBtn.click();
            }}
          />
        ) : currentView === 'chapterLearning' ? (
          <ChapterLearningSuite
            lang={language}
            chapterId={selectedChapterId}
            onLanguageChange={setLanguage}
            onBackToDashboard={() => setCurrentView('studentDashboard')}
            onSwitchChapter={(newChapterId) => setSelectedChapterId(newChapterId)}
          />
        ) : currentView === 'subjectExplorer' ? (
          <SubjectExplorer
            lang={language}
            onLanguageChange={setLanguage}
            onSelectChapter={handleOpenChapter}
            onBackToDashboard={() => setCurrentView('studentDashboard')}
            initialClass={currentProfile.classLevel}
          />
        ) : currentView === 'physicsStudio' ? (
          <PhysicsLearningStudio
            language={language}
            onLanguageChange={setLanguage}
            onBackToPortal={() => setCurrentView('studentDashboard')}
          />
        ) : currentView === 'botanyStudio' ? (
          <BotanyLearningStudio
            language={language}
            onLanguageChange={setLanguage}
            onBackToPortal={() => setCurrentView('studentDashboard')}
          />
        ) : currentView === 'teacherPortal' ? (
          <TeacherPortal
            lang={language}
            onLanguageChange={setLanguage}
            onBackToDashboard={() => setCurrentView('studentDashboard')}
          />
        ) : currentView === 'parentPortal' ? (
          <ParentPortal
            lang={language}
            profile={currentProfile}
            onLanguageChange={setLanguage}
            onBackToDashboard={() => setCurrentView('studentDashboard')}
          />
        ) : currentView === 'adminPortal' ? (
          <AdminPortal
            lang={language}
            onLanguageChange={setLanguage}
            onBackToDashboard={() => setCurrentView('studentDashboard')}
          />
        ) : currentView === 'login' ? (
          <LoginScreen
            language={language}
            onLanguageChange={setLanguage}
            onSwitchToSignUp={() => setCurrentView('signUp')}
          />
        ) : (
          <RegistrationForm
            lang={language}
            onLanguageChange={setLanguage}
            onSuccess={handleRegistrationSuccess}
            onOpenTerms={() => setIsTermsOpen(true)}
            onSwitchToSignIn={() => setCurrentView('login')}
          />
        )}
      </AndroidFrame>

      {/* Floating STEMBuddy AI Tutor grounded in the active chapter notes */}
      <STEMBuddyFloatingChat
        lang={language}
        currentChapterId={selectedChapterId}
        onLanguageChange={setLanguage}
      />

      {/* Registration Success Modal */}
      <SuccessModal
        profile={successProfile}
        isOpen={!!successProfile}
        onClose={() => setSuccessProfile(null)}
        lang={language}
        onReset={() => {
          setSuccessProfile(null);
          setCurrentView('studentDashboard');
        }}
      />

      {/* Terms & Privacy Policy Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        lang={language}
      />

      {/* Footer Credentials */}
      <footer className="mt-6 mb-3 text-center text-xs text-slate-500 font-medium">
        <p className="font-bold text-slate-700">EduVoice / STEM Buddy • Tamil Nadu State Board (Samacheer Kalvi) 2026</p>
        <p className="text-[11px] text-slate-400 mt-0.5">Classes 9–12 • Bilingual Tamil & English • RAG-Grounded STEMBuddy AI • DPDP Act 2023 Compliant</p>
      </footer>
    </div>
  );
}
