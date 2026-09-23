# -*- coding: utf-8 -*-
import json

content = '''import { Chapter, NoteItem, SummaryItem, ChapterQuiz, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Authentic Tamil Nadu Samacheer Kalvi Class 11 Chemistry - Volume 1 (Units 1–7)
 * Complete Notes, Summaries, Board Question Banks, Interactive SVGs, and Video Explainers.
 */

export const CLASS_11_CHEM_VOL1_CHAPTERS: Chapter[] = [
  {
    id: 'c11_chem_u1',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Basic Principles & Physical Chemistry',
    unitNameTa: 'தொகுதி 1: அடிப்படைக் கொள்கைகள் மற்றும் இயற்பியல் வேதியியல்',
    chapterNumber: 1,
    titleEn: 'Basic Concepts of Chemistry and Chemical Calculations',
    titleTa: 'வேதியியலின் அடிப்படைக் கருத்துக்கள் மற்றும் வேதிக்கணக்கீடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u2',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Atomic Structure',
    unitNameTa: 'தொகுதி 1: அணுவின் அமைப்பு',
    chapterNumber: 2,
    titleEn: 'Quantum Mechanical Model of Atom',
    titleTa: 'அணுவின் குவாண்டம் இயக்கவியல் மாதிரி',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u3',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Periodic Trends',
    unitNameTa: 'தொகுதி 1: ஆவர்த்தனப் பண்புகள்',
    chapterNumber: 3,
    titleEn: 'Periodic Classification of Elements',
    titleTa: 'தனிமங்களின் ஆவர்த்தன வகைப்பாடு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u4',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 4,
    titleEn: 'Hydrogen',
    titleTa: 'ஹைட்ரஜன்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u5',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: s-Block Elements',
    unitNameTa: 'தொகுதி 1: s-தொகுதி தனிமங்கள்',
    chapterNumber: 5,
    titleEn: 'Alkali and Alkaline Earth Metals',
    titleTa: 'கார மற்றும் காரமண் உலோகங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u6',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: States of Matter',
    unitNameTa: 'தொகுதி 1: பருப்பொருளின் நிலைகள்',
    chapterNumber: 6,
    titleEn: 'Gaseous State',
    titleTa: 'வாயு நிலைமை',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_chem_u7',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Chemical Energetics',
    unitNameTa: 'தொகுதி 1: வேதி ஆற்றலியல்',
    chapterNumber: 7,
    titleEn: 'Thermodynamics',
    titleTa: 'வெப்ப இயக்கவியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];
'''

with open('src/data/class11ChemVol1.ts', 'w', encoding='utf-8') as f:
    f.write(content)
print("Base chapters written.")
