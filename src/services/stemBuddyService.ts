import { Language, ClassLevel } from '../types';
import { ALL_CHAPTERS, CHAPTER_NOTES, SUBJECT_METADATA } from '../data/eduvoiceSyllabus';
import { queryKnowledgeBank, DOUBT_KNOWLEDGE_BANK, DoubtKnowledgeItem } from '../data/doubtKnowledgeBank';

export interface AskDoubtParams {
  query: string;
  classLevel: ClassLevel;
  subjectName: string;
  chapterTitle?: string;
  chapterId?: string;
  language: Language;
}

export interface DoubtAnswerResult {
  text: string;
  textTa?: string;
  source: 'gemini_ai' | 'rag_knowledge_bank' | 'syllabus_note';
  citedNoteTitle: string;
  citedNoteDate: string;
  keyFormulas?: string[];
  examTip?: string;
  relatedTopics?: string[];
}

/**
 * Service to resolve student doubts instantly across Classes 9 to 12.
 * Tries server Gemini AI route first; if offline/fallback, falls back to RAG corpus & knowledge bank.
 */
export async function solveStudentDoubt(params: AskDoubtParams): Promise<DoubtAnswerResult> {
  const { query, classLevel, subjectName, chapterTitle, chapterId, language } = params;
  const isTa = language === 'ta';

  // 1. Locate relevant chapter note or active note from syllabus dataset
  let activeNote = chapterId ? CHAPTER_NOTES[chapterId] : null;

  if (!activeNote) {
    // Attempt lookup by subject or class level
    const matchingChapter = ALL_CHAPTERS.find(
      c => c.classLevel === classLevel && (c.titleEn.toLowerCase().includes(query.toLowerCase()) || c.titleTa.includes(query))
    ) || ALL_CHAPTERS.find(c => c.classLevel === classLevel);

    if (matchingChapter && CHAPTER_NOTES[matchingChapter.id]) {
      activeNote = CHAPTER_NOTES[matchingChapter.id];
    } else {
      activeNote = CHAPTER_NOTES['c10_sci_u1'];
    }
  }

  const defaultTitle = isTa ? (activeNote?.titleTa || 'சமச்சீர் கல்வி பாடத்திட்டம்') : (activeNote?.titleEn || 'Samacheer Kalvi Syllabus');
  const defaultDate = isTa ? (activeNote?.updatedAtTa || '21 செப் 2026') : (activeNote?.updatedAt || '21 Sep 2026');

  // 2. Prepare RAG syllabus text context
  const ragContext = activeNote ? `${activeNote.titleEn} / ${activeNote.titleTa}\n${activeNote.bodyEn || ''}\n${activeNote.bodyTa || ''}` : '';

  // 3. Try Gemini AI Server Route (/api/chat/stembuddy)
  try {
    const res = await fetch('/api/chat/stembuddy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        classLevel,
        subjectName,
        chapterTitle: chapterTitle || activeNote?.titleEn || '',
        chapterId: chapterId || activeNote?.chapterId || '',
        language,
        ragContext: ragContext.slice(0, 3000)
      })
    });

    if (res.ok) {
      const data = await res.json();
      if (data && data.answer && !data.fallback) {
        return {
          text: data.answer,
          source: 'gemini_ai',
          citedNoteTitle: defaultTitle,
          citedNoteDate: defaultDate,
          relatedTopics: [
            isTa ? 'மேலும் மாதிரி வினாக்கள்' : 'Practice More Questions',
            isTa ? 'தேர்வு குறிப்புகள்' : 'Board Exam Strategy'
          ]
        };
      }
    }
  } catch (err) {
    // Server endpoint not reachable or network offline, seamlessly fall back to local RAG
    console.warn('Gemini endpoint unreachable, using built-in high-precision RAG:', err);
  }

  // 4. High-Precision Curated Knowledge Bank Matcher
  const matchedKb = queryKnowledgeBank(query, classLevel);
  if (matchedKb) {
    const answerBody = isTa ? matchedKb.explanationTa : matchedKb.explanationEn;
    const formulas = matchedKb.keyFormulas || [];
    const examTip = isTa ? matchedKb.examTipTa : matchedKb.examTipEn;

    let compiledText = `${answerBody}\n\n`;
    if (formulas.length > 0) {
      compiledText += isTa ? `📌 முக்கியமான சமன்பாடுகள்:\n` : `📌 Core Formulas:\n`;
      compiledText += formulas.map(f => `• $${f}$`).join('\n') + `\n\n`;
    }
    if (examTip) {
      compiledText += isTa ? `🎯 தேர்வு குறிப்பு: ${examTip}\n\n` : `🎯 Board Exam Tip: ${examTip}\n\n`;
    }
    compiledText += isTa
      ? `மேற்கோள் குறிப்பு: "${matchedKb.chapterTitleTa} (வகுப்பு ${matchedKb.classLevel} ${matchedKb.subjectNameTa})" [சமச்சீர் கல்வி 2026–27].`
      : `Cited Source: "${matchedKb.chapterTitleEn} (Class ${matchedKb.classLevel} ${matchedKb.subjectNameEn})" [Samacheer Kalvi 2026–27].`;

    return {
      text: compiledText,
      source: 'rag_knowledge_bank',
      citedNoteTitle: isTa ? matchedKb.chapterTitleTa : matchedKb.chapterTitleEn,
      citedNoteDate: defaultDate,
      keyFormulas: formulas,
      examTip: examTip,
      relatedTopics: matchedKb.topics
    };
  }

  // 5. Syllabus Note Context Fallback
  let fallbackText = '';
  const lowerQ = query.toLowerCase();

  if (lowerQ.includes('formula') || lowerQ.includes('சூத்திரம்') || lowerQ.includes('equation')) {
    fallbackText = isTa
      ? `வகுப்பு ${classLevel} ${subjectName} பாடத்திற்கான முக்கிய சமன்பாடுகள்:\n` +
        `• விசை மற்றும் உந்தம்: $F = ma$, $p = mv$\n` +
        `• இயக்கச் சமன்பாடுகள்: $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 = u^2 + 2as$\n` +
        `• வேலை & திறன்: $W = F \\cdot s$, $P = \\frac{W}{t}$\n\n` +
        `🎯 தேர்வு குறிப்பு: அனைத்து கணக்குகளிலும் SI அலகுகளைக் குறிப்பிடுவது கட்டாயம் (விசை: N, உந்தம்: kg m/s).`
      : `Core Formulas for Class ${classLevel} ${subjectName}:\n` +
        `• Force & Momentum: $F = ma$, $p = mv$\n` +
        `• Equations of Motion: $v = u + at$, $s = ut + \\frac{1}{2}at^2$, $v^2 = u^2 + 2as$\n` +
        `• Work & Power: $W = F \\cdot s$, $P = \\frac{W}{t}$\n\n` +
        `🎯 Board Exam Tip: Always state the SI units explicitly (Force: N, Momentum: kg m/s).`;
  } else if (lowerQ.includes('exam') || lowerQ.includes('தேர்வு') || lowerQ.includes('5 mark') || lowerQ.includes('mark')) {
    fallbackText = isTa
      ? `வகுப்பு ${classLevel} பொதுத்தேர்வு உத்தி:\n` +
        `1. 2 & 3 மதிப்பெண் வினாக்களுக்கு வரையறைகள் மற்றும் SI அலகுகளைத் தெளிவாக எழுதவும்.\n` +
        `2. 5 & 7 மதிப்பெண் வினாக்களுக்கு தலைப்புகள், சமன்பாடு வருவித்தல் மற்றும் தெளிவான படம் வரையவும்.\n` +
        `3. முந்தைய 5 ஆண்டு தமிழ்நாடு அரசு மாதிரி வினாத்தாள்களைப் பயிற்சி செய்யவும்.\n\n` +
        `நீங்கள் தற்போது படிக்கும் பாடம்: "${chapterTitle || defaultTitle}".`
      : `Board Exam Strategy for Class ${classLevel} ${subjectName}:\n` +
        `1. For 2 & 3-mark questions: State exact definitions and specify SI units clearly.\n` +
        `2. For 5 & 7-mark questions: Structure with Title, Assumptions, Step-by-step Derivation, and neatly labeled diagrams.\n` +
        `3. Practice previous 5-year Tamil Nadu Board question papers.\n\n` +
        `Current Focus Chapter: "${chapterTitle || defaultTitle}".`;
  } else {
    fallbackText = isTa
      ? `உங்கள் சந்தேகம்: "${query}".\n\nவகுப்பு ${classLevel} ${subjectName} பாடத்திட்டக் குறிப்புகளின்படி ("${chapterTitle || defaultTitle}"):\n` +
        `அடிப்படை விதிகள் மற்றும் கொள்கைகள் எப்போதும் சமச்சீர் கல்வி அரசு பாடநூல் வழிகாட்டுதலுக்கு உட்பட்டவை. படிக்கும் போது முக்கிய சொற்களை அடிக்கோடிட்டுப் படிக்கவும்.\n\n` +
        `🎯 குறிப்பு: கூடுதல் விளக்கம் தேவைப்பட்டால் குறிப்பிட்ட சமன்பாடு அல்லது தலைப்பைக் குறிப்பிட்டு கேட்கவும்.`
      : `Regarding your doubt: "${query}" in Class ${classLevel} ${subjectName} ("${chapterTitle || defaultTitle}"):\n\n` +
        `As outlined in the Samacheer Kalvi syllabus, foundational principles require clear conceptual understanding and practice of worked numerical problems.\n\n` +
        `🎯 Tip: Ask with specific subtopic or formula names to get step-by-step mathematical derivations instantly!`;
  }

  return {
    text: fallbackText,
    source: 'syllabus_note',
    citedNoteTitle: defaultTitle,
    citedNoteDate: defaultDate
  };
}
