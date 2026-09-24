export type Language = 'en' | 'ta';

export type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

export type Gender = 'Male' | 'Female' | 'Other' | 'Prefer not to say';
export type Grade = 'Grade 9' | 'Grade 10' | 'Grade 11' | 'Grade 12';
export type ClassLevel = 9 | 10 | 11 | 12;
export type PreferredLang = 'Tamil' | 'English';

export interface SchoolRecord {
  id: string;
  name: string;
  district: string;
  type: 'Matriculation' | 'Matriculation Higher Secondary' | 'Govt Higher Secondary' | 'Govt Aided' | 'CBSE / Private';
  city: string;
  address?: string;
}

export interface GroupStream {
  code: string;
  nameEn: string;
  nameTa: string;
  stream: 'Science' | 'Commerce' | 'Vocational';
  subjectIds: string[];
}

export type ContentStatus = 'verified' | 'from_upload' | 'needs_source';

export interface SubjectMetadata {
  id: string;
  classLevel: ClassLevel;
  code?: string;
  nameEn: string;
  nameTa: string;
  part?: 'Part I' | 'Part II' | 'Part III' | 'Core';
  sectionCount?: number;
  totalChapters: number;
  status: ContentStatus;
  themeColor: string;
  iconName: string;
  textbookUrl: string;
}

export interface Chapter {
  id: string;
  classLevel: ClassLevel;
  subjectId: string;
  unitNumber?: number | string;
  unitNameEn?: string;
  unitNameTa?: string;
  chapterNumber: number;
  titleEn: string;
  titleTa: string;
  status: ContentStatus;
  hasNotes?: boolean;
  hasSummary?: boolean;
  hasQuiz?: boolean;
  hasVideo?: boolean;
  hasDiagram?: boolean;
  textbookUrl?: string;
}

export interface NoteRevision {
  version: string;
  updatedAt: string;
  updatedAtTa: string;
  updatedBy: string;
  changeNote: string;
  changeNoteTa: string;
}

export interface NoteItem {
  id: string;
  chapterId: string;
  classLevel?: ClassLevel;
  subjectId?: string;
  titleEn: string;
  titleTa: string;
  publishedAt?: string; // e.g. "21 Sep 2026"
  publishedAtTa?: string; // e.g. "21 செப் 2026"
  updatedAt?: string;
  updatedAtTa?: string;
  syllabusYear?: string; // "Samacheer Kalvi 2026–27"
  syllabusYearTa?: string;
  reviewedBy?: string;
  reviewedByRole?: string;
  reviewedAt?: string;
  reviewedAtTa?: string;
  status?: 'published' | 'draft';
  version?: string;
  changeNote?: string;
  changeNoteTa?: string;
  isNew?: boolean;
  isUpdated?: boolean;
  readTimeMinutes?: number;
  bodyEn?: string;
  bodyTa?: string;
  contentEn?: string;
  contentTa?: string;
  author?: string;
  authorContext?: string;
  verifiedDate?: string;
  reviewerSignature?: string;
  keyFormulas?: Array<string | { nameEn: string; nameTa: string; formula: string; explanationEn: string; explanationTa: string }>;
  workedExamples?: Array<{ question?: string; solution?: string; questionEn?: string; questionTa?: string; solutionEn?: string; solutionTa?: string; answer?: string }>;
  rememberBoxes?: Array<{ tipEn: string; tipTa: string }>;
  overviewEn?: string;
  overviewTa?: string;
  learningObjectivesEn?: string[];
  learningObjectivesTa?: string[];
  whyItMattersEn?: string;
  whyItMattersTa?: string;
  importantTerms?: Array<{ termEn: string; termTa: string; definitionEn: string; definitionTa: string }>;
  examQuestions?: Array<{ type: 'vsa' | 'sa' | 'la' | 'conceptual' | 'application'; marks: number; questionEn: string; questionTa: string; answerEn: string; answerTa: string }>;
  commonMistakes?: Array<{ mistakeEn: string; mistakeTa: string; correctionEn: string; correctionTa: string }>;
  revisions?: NoteRevision[];
}

export interface SummaryItem {
  id: string;
  chapterId: string;
  lastUpdatedAt?: string;
  lastUpdatedAtTa?: string;
  keyPointsEn: string[];
  keyPointsTa: string[];
  simpleExplanationEn: string;
  simpleExplanationTa: string;
  formulaCheatSheet?: Array<string | { formula: string; note: string }>;
}

export interface QuizQuestion {
  id: string;
  type?: 'mcq' | 'fill_blank' | 'true_false' | 'match' | 'short_answer';
  difficulty?: 'easy' | 'medium' | 'hard';
  questionEn: string;
  questionTa: string;
  optionsEn?: string[];
  optionsTa?: string[];
  correctAnswer?: string | number | boolean;
  correctAnswerIndex?: number;
  explanationEn: string;
  explanationTa: string;
}

export interface ChapterQuiz {
  id: string;
  chapterId: string;
  titleEn: string;
  titleTa: string;
  totalMarks: number;
  timeLimitMinutes: number;
  questions: QuizQuestion[];
}

export interface SchematicDiagram {
  id: string;
  chapterId: string;
  titleEn: string;
  titleTa: string;
  descriptionEn?: string;
  descriptionTa?: string;
  diagramType?: 'svg_labeled' | 'flowchart' | 'concept_map' | 'timeline' | 'geometric_proof' | 'schematic_table' | 'coordinate_plane' | '3d_projection' | 'statistical_chart' | 'probability_tree';
  svgContent?: string;
  labels?: Array<{
    id: string;
    labelEn: string;
    labelTa: string;
    descriptionEn: string;
    descriptionTa: string;
    x: number;
    y: number;
  }>;
}

export interface VideoExplainer {
  id: string;
  chapterId: string;
  titleEn: string;
  titleTa: string;
  durationSeconds?: number;
  durationMinutes?: number;
  scenes: Array<{
    sceneNumber: number;
    titleEn: string;
    titleTa: string;
    visualDescription?: string;
    visualDescriptionEn?: string;
    narrationEn: string;
    narrationTa: string;
    conceptKey?: string;
    keyTakeaway?: string;
  }>;
}

export interface StudentProgress {
  studentId: string;
  completedChapterIds: string[];
  currentChapterId: string;
  currentSubjectId: string;
  currentTab: 'notes' | 'summary' | 'quiz' | 'video' | 'diagrams' | 'chat';
  dailyStreak: number;
  lastActiveDate: string;
  studyMinutesThisWeek: { day: string; dayTa: string; minutes: number }[];
  quizScores: { chapterId: string; subjectId: string; score: number; maxScore: number; date: string }[];
  weakTopics: { subjectId: string; topicEn: string; topicTa: string; accuracyPercent: number }[];
  bookmarkedNoteIds: string[];
  dailyGoalMinutes: number;
  todayMinutesStudied: number;
}

export interface FormData {
  fullName: string;
  email: string;
  mobile: string;
  dob: string;
  gender: Gender;
  grade: Grade;
  classLevel: ClassLevel;
  groupCode?: string;
  schoolName: string;
  schoolAddress?: string;
  isManualSchool?: boolean;
  district: string;
  state: string;
  preferredLanguage: PreferredLang;
  parentName: string;
  parentRelationship?: string;
  parentMobile: string;
  parentEmail?: string;
  parentConsent: boolean;
  password: string;
  confirmPassword: string;
  agreeTerms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  mobile?: string;
  dob?: string;
  gender?: string;
  grade?: string;
  groupCode?: string;
  schoolName?: string;
  schoolAddress?: string;
  district?: string;
  state?: string;
  preferredLanguage?: string;
  parentName?: string;
  parentRelationship?: string;
  parentMobile?: string;
  parentEmail?: string;
  parentConsent?: string;
  password?: string;
  confirmPassword?: string;
  agreeTerms?: string;
}

export interface StudentProfile {
  studentId: string;
  fullName: string;
  role: UserRole;
  email?: string;
  mobile?: string;
  grade: string;
  classLevel: ClassLevel;
  groupCode?: string;
  groupNameEn?: string;
  groupNameTa?: string;
  schoolName: string;
  schoolAddress?: string;
  isManualSchool?: boolean;
  verificationStatus: 'School Verified' | 'School Verification Pending';
  district: string;
  state: string;
  language: Language;
  avatarSeed: string;
  parentName?: string;
  parentMobile?: string;
}

