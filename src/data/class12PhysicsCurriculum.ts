import { Language } from '../types';

export interface PhysicsVariable {
  symbol: string;
  name: string;
  nameTa: string;
  siUnit: string;
  dimension: string;
}

export interface PhysicsFormula {
  id: string;
  formula: string;
  meaning: string;
  meaningTa: string;
  variables: PhysicsVariable[];
  siUnit: string;
  dimension: string;
  whenToUse?: string;
  realLifeApplication?: string;
  memoryShortcut?: string;
  category?: 'fundamental' | 'derived' | 'frequently_used' | 'board_exam' | 'numerical_solving' | string;
}

export interface PhysicsDerivation {
  id: string;
  title: string;
  titleTa: string;
  aim: string;
  given: string[];
  toProve: string;
  assumptions: string[];
  steps: {
    stepNumber: number;
    description: string;
    descriptionTa: string;
    equation?: string;
    note?: string;
  }[];
  finalEquation: string;
  physicalMeaning: string;
  physicalMeaningTa: string;
  commonMistakes: string[];
  examImportance: 'Very Important' | 'Important' | 'Moderate' | string;
}

export interface PhysicsNumericalProblem {
  level: 'Easy' | 'Medium' | 'Exam-Level' | string;
  title: string;
  question: string;
  questionTa: string;
  given: { [key: string]: string };
  required: string;
  formulaUsed: string;
  unitConversion?: string;
  unitConversions?: string;
  steps: {
    stepNumber: number;
    description: string;
    math: string;
  }[];
  finalAnswer: string;
  siUnit: string;
  shortcutMethod?: string;
  commonErrors?: string[] | string;
  examTip?: string;
}

export interface PhysicsDiagram {
  id: string;
  name: string;
  nameTa: string;
  purpose: string;
  components: string[];
  labelsEn: string[];
  labelsTa: string[];
  stepByStepExplanation: string[];
  studentObservation?: string;
  examImportance: 'Very Important' | 'Important' | 'Moderate' | string;
  commonDrawingMistakes?: string[];
  commonMistakes?: string[];
  aiImagePrompt: string;
}

export interface PhysicsGraph {
  id: string;
  name: string;
  nameTa: string;
  xAxis: string;
  yAxis: string;
  units: string;
  shape: string;
  importantPoints: string[];
  slope?: string;
  intercept?: string;
  physicalMeaning: string;
  interpretation?: string;
  mathematicalRelationship: string;
  examQuestions?: string[];
  commonMistakes?: string[];
  howToDrawInExam: string;
  aiGraphPrompt: string;
}

export interface PhysicsExperiment {
  id: string;
  name: string;
  nameTa: string;
  apparatus: string[];
  principle: string;
  principleTa: string;
  procedure: string[];
  observation: string;
  result: string;
  precautions: string[];
  realLifeImportance: string;
  aiLabPrompt?: string;
}

export interface AIVisualizationScene {
  sceneNumber: number;
  sceneTitle: string;
  explanationEn: string;
  explanationTa: string;
  explanationBilingual?: string;
  narrationScript?: string;
  animationDescription: string;
  keywordsDisplayed: string[];
  realLifeExample?: string;
  interactiveQuestion: {
    question: string;
    questionTa: string;
    options: string[];
    optionsTa: string[];
    correctIndex: number;
    explanation: string;
  };
  cameraDirection?: string;
}

export interface PhysicsChapterTopic {
  id: string;
  topicNumber: string;
  title: string;
  titleTa: string;
  beginnerExplanation: string;
  beginnerExplanationTa: string;
  coreConcepts: string[];
  definitions: {
    term: string;
    termTa: string;
    definitionEn: string;
    definitionTa: string;
    keyPoints: string[];
  }[];
  realLifeExamples?: string[];
  analogies: string;
  commonMisconceptions: string[];
}

export interface PhysicsChapter {
  chapterNumber: number;
  chapterName: string;
  chapterNameTa: string;
  unitNumber: number;
  unitName: string;
  unitNameTa: string;
  overview: string;
  overviewTa: string;
  introduction?: string;
  introductionTa?: string;
  learningObjectives: string[];
  learningObjectivesTa?: string[];
  importance: string;
  prerequisites: string[];
  everydayApplications: string[];
  historicalBackground: string;
  scientists?: {
    name: string;
    contribution: string;
    year?: string;
  }[];
  scientistsAssociated?: string[];
  majorDiscoveries?: string[];
  realWorldRelevance?: string;
  topics: PhysicsChapterTopic[];
  formulas: PhysicsFormula[];
  derivations: PhysicsDerivation[];
  numericals: PhysicsNumericalProblem[];
  diagrams: PhysicsDiagram[];
  graphs: PhysicsGraph[];
  experiments: PhysicsExperiment[];
  aiLesson: {
    lessonTitle: string;
    targetDuration?: '30 Seconds' | '1 Minute' | '2 Minutes' | '5 Minutes' | string;
    totalDuration?: string;
    visualStyle?: string;
    format?: string;
    scenes: AIVisualizationScene[];
  };
  voiceNarration: {
    scriptEn: string;
    scriptTa: string;
    scriptBilingual: string;
    audioDurationSeconds?: number;
    durationSeconds?: number;
    recommendedTone?: string;
  };
  examPreparation: {
    oneMarkQuestions: { q: string; qTa: string; a: string; aTa: string }[];
    twoMarkQuestions: { q: string; qTa: string; a: string; aTa: string }[];
    threeMarkQuestions: { q: string; qTa: string; a: string; aTa: string }[];
    fiveMarkQuestions: { q: string; qTa: string; a: string; aTa: string }[];
    frequentlyRepeatedConcepts: string[];
  };
  faqs: {
    category: 'Basic' | 'Conceptual' | 'Formula' | 'Numerical' | 'Board Exam' | string;
    question: string;
    questionTa?: string;
    answer: string;
    answerTa?: string;
  }[];
  commonMistakes: {
    category: 'Formula' | 'Unit' | 'Sign' | 'Diagram' | 'Graph' | 'Exam Presentation' | string;
    mistake: string;
    correctWay: string;
  }[];
  memoryTricks: {
    title: string;
    titleTa: string;
    trick: string;
    explanation?: string;
  }[];
  summary?: {
    keyTakeaways: string[];
    quickRevisionNotes: string[];
  };
}

export interface PhysicsUnitMetadata {
  unitNumber: number;
  unitName: string;
  unitNameTa: string;
  themeColor: string;
  description: string;
  chaptersCount: number;
  chapterNumbers: number[];
}

export const CLASS_12_PHYSICS_UNITS_METADATA: PhysicsUnitMetadata[] = [
  {
    unitNumber: 1,
    unitName: 'Electrostatics',
    unitNameTa: 'நிலைமின்னியல்',
    themeColor: 'from-blue-600 to-cyan-500',
    description: 'Electric charges at rest, Coulomb’s Law, electric field & potential, Gauss’s law, capacitors & Van de Graaff generator.',
    chaptersCount: 1,
    chapterNumbers: [1]
  },
  {
    unitNumber: 2,
    unitName: 'Current Electricity',
    unitNameTa: 'மின்னோட்டவியல்',
    themeColor: 'from-amber-500 to-orange-600',
    description: 'Electric current, drift velocity, Ohm’s law, Kirchhoff’s rules, Wheatstone & Meter bridge, Potentiometer, and thermoelectricity.',
    chaptersCount: 1,
    chapterNumbers: [2]
  },
  {
    unitNumber: 3,
    unitName: 'Magnetism and Magnetic Effects of Electric Current',
    unitNameTa: 'காந்தவியல் மற்றும் மின்னோட்டத்தின் காந்த விளைவுகள்',
    themeColor: 'from-emerald-600 to-teal-500',
    description: 'Magnetic dipoles, Earth’s magnetism, Biot-Savart & Ampere’s law, Cyclotron, moving coil galvanometer, magnetic materials & hysteresis.',
    chaptersCount: 1,
    chapterNumbers: [3]
  },
  {
    unitNumber: 4,
    unitName: 'Electromagnetic Induction and Alternating Current',
    unitNameTa: 'மின்காந்தத் தூண்டலும் மாறுதிசை மின்னோட்டமும்',
    themeColor: 'from-indigo-600 to-purple-500',
    description: 'Faraday’s laws, Lenz’s law, self/mutual inductance, AC generator, Transformers, series LCR circuits, resonance & LC oscillations.',
    chaptersCount: 1,
    chapterNumbers: [4]
  },
  {
    unitNumber: 5,
    unitName: 'Electromagnetic Waves',
    unitNameTa: 'மின்காந்த அலைகள்',
    themeColor: 'from-rose-500 to-pink-600',
    description: 'Displacement current, Maxwell’s equations, characteristics & spectrum of EM waves (Radio to Gamma), emission & absorption spectra.',
    chaptersCount: 1,
    chapterNumbers: [5]
  }
];

import { CHAPTER_1_ELECTROSTATICS } from './physicsChaptersUnit1';
import { CHAPTER_2_CURRENT_ELECTRICITY } from './physicsChaptersUnit2';
import { CHAPTER_3_MAGNETISM_AND_MAGNETIC_EFFECTS } from './physicsChaptersUnit3';
import { CHAPTER_4_ELECTROMAGNETIC_INDUCTION_AND_AC } from './physicsChaptersUnit4';
import { CHAPTER_5_ELECTROMAGNETIC_WAVES } from './physicsChaptersUnit5';

export const CLASS_12_PHYSICS_VOLUME_1_CHAPTERS: PhysicsChapter[] = [
  CHAPTER_1_ELECTROSTATICS,
  CHAPTER_2_CURRENT_ELECTRICITY,
  CHAPTER_3_MAGNETISM_AND_MAGNETIC_EFFECTS,
  CHAPTER_4_ELECTROMAGNETIC_INDUCTION_AND_AC,
  CHAPTER_5_ELECTROMAGNETIC_WAVES
];

