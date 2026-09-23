# -*- coding: utf-8 -*-
import json

part2_content = '''import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 11 Computer Science - Part 2 (Chapters 10 to 18)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 10. Flow of Control (பாயக் கட்டுப்பாடு)
 * 11. Functions (செயற்கூறுகள்)
 * 12. Arrays and Structures (அணிகள் மற்றும் கட்டமைப்புகள்)
 * 13. Introduction to Object Oriented Programming (பொருள்நோக்கு நிரலாக்க நுட்பங்கள்)
 * 14. Classes and Objects (இனக்குழுக்கள் மற்றும் பொருள்கள்)
 * 15. Polymorphism (பல்லுருவாக்கம்)
 * 16. Inheritance (மரபுரிமம்)
 * 17. Computer Ethics and Cyber Security (கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு)
 * 18. Tamil Computing (தமிழ் கணினி)
 */

export const CLASS_11_CS_PART2_CHAPTERS: Chapter[] = [
  {
    id: 'c11_cs_ch10',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit III: Core C++ Programming',
    unitNameTa: 'அலகு III: அடிப்படை C++ நிரலாக்கம்',
    chapterNumber: 10,
    titleEn: 'Chapter 10: Flow of Control',
    titleTa: 'பாடம் 10: பாயக் கட்டுப்பாடு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch11',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit III: Core C++ Programming',
    unitNameTa: 'அலகு III: அடிப்படை C++ நிரலாக்கம்',
    chapterNumber: 11,
    titleEn: 'Chapter 11: Functions',
    titleTa: 'பாடம் 11: செயற்கூறுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch12',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit III: Core C++ Programming',
    unitNameTa: 'அலகு III: அடிப்படை C++ நிரலாக்கம்',
    chapterNumber: 12,
    titleEn: 'Chapter 12: Arrays and Structures',
    titleTa: 'பாடம் 12: அணிகள் மற்றும் கட்டமைப்புகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch13',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 3,
    unitNameEn: 'Unit IV: Object Oriented Programming with C++',
    unitNameTa: 'அலகு IV: C++ பொருள்நோக்கு நிரலாக்க நுட்பங்கள்',
    chapterNumber: 13,
    titleEn: 'Chapter 13: Introduction to Object Oriented Programming',
    titleTa: 'பாடம் 13: பொருள்நோக்கு நிரலாக்க நுட்பங்கள் ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch14',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 3,
    unitNameEn: 'Unit IV: Object Oriented Programming with C++',
    unitNameTa: 'அலகு IV: C++ பொருள்நோக்கு நிரலாக்க நுட்பங்கள்',
    chapterNumber: 14,
    titleEn: 'Chapter 14: Classes and Objects',
    titleTa: 'பாடம் 14: இனக்குழுக்கள் மற்றும் பொருள்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch15',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 3,
    unitNameEn: 'Unit IV: Object Oriented Programming with C++',
    unitNameTa: 'அலகு IV: C++ பொருள்நோக்கு நிரலாக்க நுட்பங்கள்',
    chapterNumber: 15,
    titleEn: 'Chapter 15: Polymorphism',
    titleTa: 'பாடம் 15: பல்லுருவாக்கம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch16',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 3,
    unitNameEn: 'Unit IV: Object Oriented Programming with C++',
    unitNameTa: 'அலகு IV: C++ பொருள்நோக்கு நிரலாக்க நுட்பங்கள்',
    chapterNumber: 16,
    titleEn: 'Chapter 16: Inheritance',
    titleTa: 'பாடம் 16: மரபுரிமம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch17',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 4,
    unitNameEn: 'Unit V: Cyber Security & Computing Ecosystem',
    unitNameTa: 'அலகு V: இணையப் பாதுகாப்பு & கணிப்பியல் சூழல்',
    chapterNumber: 17,
    titleEn: 'Chapter 17: Computer Ethics and Cyber Security',
    titleTa: 'பாடம் 17: கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch18',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 4,
    unitNameEn: 'Unit V: Cyber Security & Computing Ecosystem',
    unitNameTa: 'அலகு V: இணையப் பாதுகாப்பு & கணிப்பியல் சூழல்',
    chapterNumber: 18,
    titleEn: 'Chapter 18: Tamil Computing',
    titleTa: 'பாடம் 18: தமிழ் கணினி',
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

with open('src/data/class11CSPart2.ts', 'w', encoding='utf-8') as f:
    f.write(part2_content)

print("class11CSPart2.ts initialized")
