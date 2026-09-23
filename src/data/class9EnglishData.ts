import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';
import {
  CLASS_9_ENGLISH_DIAGRAMS,
  CLASS_9_ENGLISH_VIDEOS,
  generateEnglishDiagram,
  generateEnglishVideo
} from './class9EnglishMedia';

export { CLASS_9_ENGLISH_DIAGRAMS, CLASS_9_ENGLISH_VIDEOS };

/**
 * Authentic Samacheer Kalvi Class 9 English (Units 1–7 / All 21 Chapters)
 * Comprehensive Revision Notes, Summaries, and Exam Mastery Quizzes.
 */

export const CLASS_9_ENGLISH_CHAPTERS: Chapter[] = [
  {
    "id": "c9_eng_u1_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 1,
    "unitNameEn": "Unit 1: Sports & Nature",
    "unitNameTa": "அலகு 1: விளையாட்டு & இயற்கை",
    "chapterNumber": 1,
    "titleEn": "Prose: Learning the Game (Sachin Tendulkar)",
    "titleTa": "உரைநடை: ஆட்டத்தைக் கற்றல் (சச்சின் டெண்டுல்கர்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u1_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 1,
    "unitNameEn": "Unit 1: Sports & Nature",
    "unitNameTa": "அலகு 1: விளையாட்டு & இயற்கை",
    "chapterNumber": 2,
    "titleEn": "Poem: Stopping by Woods on a Snowy Evening (Robert Frost)",
    "titleTa": "கவிதை: பனிப்பொழிவு மாலையில் காட்டின் ஓரம் (ராபர்ட் ஃப்ராஸ்ட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u1_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 1,
    "unitNameEn": "Unit 1: Sports & Nature",
    "unitNameTa": "அலகு 1: விளையாட்டு & இயற்கை",
    "chapterNumber": 3,
    "titleEn": "Supplementary: The Envious Neighbour (Japanese Folk Tale)",
    "titleTa": "துணைப்பாடம்: பொறாமை கொண்ட பக்கத்து வீட்டுக்காரர்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u2_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 2,
    "unitNameEn": "Unit 2: Memories & Education",
    "unitNameTa": "அலகு 2: நினைவுகள் & கல்வி",
    "chapterNumber": 4,
    "titleEn": "Prose: I Can't Climb Trees Anymore (Ruskin Bond)",
    "titleTa": "உரைநடை: என்னால் இனி மரங்களில் ஏற முடியாது (ரஸ்கின் பாண்ட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u2_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 2,
    "unitNameEn": "Unit 2: Memories & Education",
    "unitNameTa": "அலகு 2: நினைவுகள் & கல்வி",
    "chapterNumber": 5,
    "titleEn": "Poem: A Poison Tree (William Blake)",
    "titleTa": "கவிதை: நச்சு மரம் (வில்லியம் பிளேக்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u2_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 2,
    "unitNameEn": "Unit 2: Memories & Education",
    "unitNameTa": "அலகு 2: நினைவுகள் & கல்வி",
    "chapterNumber": 6,
    "titleEn": "Supplementary: The Fun They Had (Isaac Asimov)",
    "titleTa": "துணைப்பாடம்: அவர்கள் அடைந்த மகிழ்ச்சி (ஐசக் அசிமோவ்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u3_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 3,
    "unitNameEn": "Unit 3: Bravery & Environment",
    "unitNameTa": "அலகு 3: துணிவு & சுற்றுச்சூழல்",
    "chapterNumber": 7,
    "titleEn": "Prose: Old Man River (Dorothy Deming)",
    "titleTa": "உரைநடை: வெள்ளப்பெருக்கு - ஓல்ட் மேன் ரிவர் (நாடகம்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u3_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 3,
    "unitNameEn": "Unit 3: Bravery & Environment",
    "unitNameTa": "அலகு 3: துணிவு & சுற்றுச்சூழல்",
    "chapterNumber": 8,
    "titleEn": "Poem: On Killing a Tree (Gieve Patel)",
    "titleTa": "கவிதை: மரத்தைக் கொல்வது எப்படி (ஜீவ் பட்டேல்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u3_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 3,
    "unitNameEn": "Unit 3: Bravery & Environment",
    "unitNameTa": "அலகு 3: துணிவு & சுற்றுச்சூழல்",
    "chapterNumber": 9,
    "titleEn": "Supplementary: Earthquake (M.S. Mahadevan)",
    "titleTa": "துணைப்பாடம்: நிலநடுக்கம் (எம்.எஸ். மகாதேவன்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u4_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 4,
    "unitNameEn": "Unit 4: Humour & Morals",
    "unitNameTa": "அலகு 4: நகைச்சுவை & அறநெறி",
    "chapterNumber": 10,
    "titleEn": "Prose: Seventeen Oranges (Bill Naughton)",
    "titleTa": "உரைநடை: பதினேழு ஆரஞ்சுகள் (பில் நாட்டன்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u4_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 4,
    "unitNameEn": "Unit 4: Humour & Morals",
    "unitNameTa": "அலகு 4: நகைச்சுவை & அறநெறி",
    "chapterNumber": 11,
    "titleEn": "Poem: The Spider and the Fly (Mary Botham Howitt)",
    "titleTa": "கவிதை: சிலந்தியும் ஈயும் (மேரி போதம் ஹோவிட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u4_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 4,
    "unitNameEn": "Unit 4: Humour & Morals",
    "unitNameTa": "அலகு 4: நகைச்சுவை & அறநெறி",
    "chapterNumber": 12,
    "titleEn": "Supplementary: The Cat and the Pain-Killer (Mark Twain)",
    "titleTa": "துணைப்பாடம்: பூனையும் வலி நிவாரணியும் (மார்க் ட்வைன்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u5_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 5,
    "unitNameEn": "Unit 5: Water & Living World",
    "unitNameTa": "அலகு 5: நீர் & உயிர்க்கோளம்",
    "chapterNumber": 13,
    "titleEn": "Prose: Water - The Elixir of Life (Sir C.V. Raman)",
    "titleTa": "உரைநடை: நீர் - வாழ்வின் அமிர்தம் (சர் சி.வி. இராமன்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u5_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 5,
    "unitNameEn": "Unit 5: Water & Living World",
    "unitNameTa": "அலகு 5: நீர் & உயிர்க்கோளம்",
    "chapterNumber": 14,
    "titleEn": "Poem: The River (Caroline Ann Bowles)",
    "titleTa": "கவிதை: நதி (கரோலின் ஆன் பௌல்ஸ்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u5_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 5,
    "unitNameEn": "Unit 5: Water & Living World",
    "unitNameTa": "அலகு 5: நீர் & உயிர்க்கோளம்",
    "chapterNumber": 15,
    "titleEn": "Supplementary: Little Cyclone: The Story of a Grizzly Cub (William T. Hornaday)",
    "titleTa": "துணைப்பாடம்: லிட்டில் சைக்ளோன் - கரடிக்குட்டியின் கதை",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u6_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 6,
    "unitNameEn": "Unit 6: Genius & Universe",
    "unitNameTa": "அலகு 6: மேதைமை & பிரபஞ்சம்",
    "chapterNumber": 16,
    "titleEn": "Prose: From Zero to Infinity - Srinivasa Ramanujan",
    "titleTa": "உரைநடை: பூஜ்ஜியத்திலிருந்து முடிவிலி வரை - சீனிவாச ராமானுஜன்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u6_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 6,
    "unitNameEn": "Unit 6: Genius & Universe",
    "unitNameTa": "அலகு 6: மேதைமை & பிரபஞ்சம்",
    "chapterNumber": 17,
    "titleEn": "Poem: The Comet (Norman Littleford)",
    "titleTa": "கவிதை: வால்நட்சத்திரம் (நார்மன் லிட்டில்ஃபோர்ட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u6_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 6,
    "unitNameEn": "Unit 6: Genius & Universe",
    "unitNameTa": "அலகு 6: மேதைமை & பிரபஞ்சம்",
    "chapterNumber": 18,
    "titleEn": "Supplementary: Mother's Voice (Vasil Berezhnoy)",
    "titleTa": "துணைப்பாடம்: தாயின் குரல் (வாசில் பெரெஷ்னாய்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u7_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 7,
    "unitNameEn": "Unit 7: Bonds & Brotherhood",
    "unitNameTa": "அலகு 7: பிணைப்புகள் & சகோதரத்துவம்",
    "chapterNumber": 19,
    "titleEn": "Prose: A Birthday Letter (Jawaharlal Nehru)",
    "titleTa": "உரைநடை: பிறந்தநாள் கடிதம் (ஜவஹர்லால் நேரு)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u7_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 7,
    "unitNameEn": "Unit 7: Bonds & Brotherhood",
    "unitNameTa": "அலகு 7: பிணைப்புகள் & சகோதரத்துவம்",
    "chapterNumber": 20,
    "titleEn": "Poem: The Stick-together Families (Edgar Albert Guest)",
    "titleTa": "கவிதை: இணைந்திருக்கும் குடும்பங்கள் (எட்கர் ஆல்பர்ட் கெஸ்ட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c9_eng_u7_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "unitNumber": 7,
    "unitNameEn": "Unit 7: Bonds & Brotherhood",
    "unitNameTa": "அலகு 7: பிணைப்புகள் & சகோதரத்துவம்",
    "chapterNumber": 21,
    "titleEn": "Supplementary: The Christmas Truce (Aaron Shepard)",
    "titleTa": "துணைப்பாடம்: கிறிஸ்துமஸ் போர் நிறுத்தம் (ஆரோன் ஷெப்பர்ட்)",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  }
];

export const CLASS_9_ENGLISH_NOTES: Record<string, NoteItem> = {
  "c9_eng_u1_p1": {
    "id": "note_c9_eng_u1_p1",
    "chapterId": "c9_eng_u1_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: Learning the Game (Sachin Tendulkar): Study Notes",
    "titleTa": "உரைநடை: ஆட்டத்தைக் கற்றல் (சச்சின் டெண்டுல்கர்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 6,
    "bodyEn": "### 1. The Making of a Legend\nThis chapter is an excerpt from Sachin Tendulkar's autobiography, *\"Playing It My Way\"*. It details how his brother Ajit introduced eleven-year-old Sachin to coach Ramakant Achrekar at Shivaji Park in 1984.\n\n### 2. Rigorous Training at Shivaji Park\n* **Practice Schedule**: Morning sessions began at 7:30 AM until 10:30 AM, followed by afternoon sessions running till late dusk.\n* **School Transfer**: On Achrekar Sir's advice, Sachin joined Shardashram Vidyamandir to dedicate full time to cricket.\n\n### 3. The One-Rupee Coin Challenge\n* In the final sessions, Sir placed a one-rupee coin on the stumps. If Sachin batted through without getting dismissed by 60-70 fielders, the coin was his.\n* Sachin won 13 such coins, which he treasures as his most valuable awards.\n\n### 4. A Golden Lesson on Focus\n* When Sachin skipped practice to watch an inter-school match, Achrekar Sir reprimanded him: *\"Don't play for others to applaud you; play so that the world will applaud you!\"* That advice shaped his career.",
    "bodyTa": "### 1. ஒரு ஜாம்பவானின் தொடக்கம்\nசச்சின் டெண்டுல்கரின் \"பிளேயிங் இட் மை வே\" சுயசரிதையில் இருந்து இப்பாடம் எடுக்கப்பட்டுள்ளது. 1984-இல் அவரது அண்ணன் அஜித், சச்சினை மும்பை தாதரிலுள்ள சிவாஜி பார்க்கில் பயிற்சியாளர் ரமாகாந்த் அச்ரேக்கரிடம் அழைத்துச் சென்றார்.\n\n### 2. கடுமையான பயிற்சி\n* காலை 7:30 முதல் 10:30 மணி வரையிலும், மீண்டும் பிற்பகலிலும் இடைவிடாத வலைப்பயிற்சி நடந்தது.\n* கிரிக்கெட் பயிற்சிக்காக சாரதாஷ்ரம் வித்யாமந்திர் பள்ளிக்கு மாற்றப்பட்டார்.\n\n### 3. ஒரு ரூபாய் நாணய சவால்\n* ஸ்டம்பின் மீது ஒரு ரூபாய் நாணயத்தை வைத்து அவுட் ஆகாமல் ஆடினால் நாணயம் சச்சினுக்கே சொந்தம் எனப் பயிற்சியாளர் அறிவித்தார். சச்சின் வென்ற 13 நாணயங்கள் இன்றும் அவரது விலைமதிப்பற்ற பொக்கிஷங்கள்.\n\n### 4. முக்கியமான அறிவுரை\n* மற்றவர்களின் ஆட்டத்தைப் பார்க்கப் பயிற்சியைத் தவிர்த்த சச்சினிடம், \"நீ மற்றவர்களுக்கு கைதட்டாதே; உலகம் உனக்கு கைதட்டும் அளவுக்கு விளையாடு!\" என்று அச்ரேக்கர் அறிவுறுத்தினார்.",
    "rememberBoxes": [
      {
        "tipEn": "Key Fact: Sachin won 13 one-rupee coins placed on stumps by Coach Achrekar.",
        "tipTa": "முக்கியக் குறிப்பு: அச்ரேக்கர் ஸ்டம்பின் மீது வைத்த 13 ஒரு ரூபாய் நாணயங்களை சச்சின் வென்றார்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u1_p2": {
    "id": "note_c9_eng_u1_p2",
    "chapterId": "c9_eng_u1_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: Stopping by Woods on a Snowy Evening (Robert Frost): Study Notes",
    "titleTa": "கவிதை: பனிப்பொழிவு மாலையில் காட்டின் ஓரம் (ராபர்ட் ஃப்ராஸ்ட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Poetic Setting\nRobert Frost depicts a traveler pausing on the darkest evening of the year beside serene, snowy woods owned by a villager.\n\n### 2. Symbolic Elements\n* **The Horse**: Shakes its harness bells, questioning the halt where no farmhouse exists, representing practical duty.\n* **The Woods**: Lovely, dark and deep, symbolizing aesthetic escape and peaceful quietude.\n* **The Concluding Refrain**: *\"The woods are lovely, dark and deep, / But I have promises to keep, / And miles to go before I sleep, / And miles to go before I sleep.\"*\n\n### 3. Theme & Form\n* The poem contrasts the temptation of rest with the necessity of fulfilling life's obligations.\n* Written in Rubaiyat stanza format with rhyme scheme **aaba, bbcb, ccdc, dddd**.",
    "bodyTa": "### 1. கவிதைக் களம்\nஅமெரிக்கக் கவிஞர் ராபர்ட் ஃப்ராஸ்ட், பனி கொட்டும் மாலையில் ஓர் அடர்ந்த காட்டின் அருகே பயணி ஒருவர் குதிரை வண்டியை நிறுத்துவதை விவரிக்கிறார்.\n\n### 2. குறியீடுகள்\n* **குதிரை**: பண்ணை வீடு இல்லாத இடத்தில் நின்றதால், ஏதேனும் தவறா எனக் கேட்பது போல கழுத்து மணியை ஆட்டுகிறது.\n* **காடு**: அடர்ந்த அழகிய காடு மனதிற்கு அமைதியைத் தருகிறது.\n* **முக்கிய வரிகள்**: \"காடுகள் அழகாகவும் ஆழமாகவும் உள்ளன; ஆனால் நான் நிறைவேற்ற வேண்டிய கடமைகள் பல உள்ளன; தூங்குவதற்கு முன் நான் கடக்க வேண்டிய தொலைவு அதிகம்!\"\n\n### 3. மையக்கருத்து\n* வாழ்வின் கடமைகளை நிறைவேற்றுவதே முதன்மையானது என்பதை இக்கவிதை சுட்டுகிறது.",
    "rememberBoxes": [
      {
        "tipEn": "Rhyme scheme: aaba bbcb ccdc dddd in iambic tetrameter.",
        "tipTa": "எதுகை அமைப்பு: aaba bbcb ccdc dddd."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u1_s1": {
    "id": "note_c9_eng_u1_s1",
    "chapterId": "c9_eng_u1_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: The Envious Neighbour (Japanese Folk Tale): Study Notes",
    "titleTa": "துணைப்பாடம்: பொறாமை கொண்ட பக்கத்து வீட்டுக்காரர்: பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Folkloric Theme\n\"The Envious Neighbour\" is an ancient Japanese folktale highlighting the contrast between benevolence and destructive jealousy.\n\n### 2. The Loyal Dog Shiro\n* A kind elderly couple loved their little dog Shiro. Shiro guided them to dig under a pine tree, revealing a treasure of gold and silver.\n* The greedy neighbour dragged Shiro to his garden, but dug up only foul filth; in a rage, he killed Shiro.\n\n### 3. The Mortar & The Magic Ashes\n* Shiro appeared in a dream, telling the kind man to make a mortar from the pine tree. Pounding rice in it produced treasures for the kind man, but filth for the greedy neighbour, who burned it.\n* In another dream, Shiro directed the kind man to sprinkle the mortar's ashes on withered cherry trees. Before the Prince (Daimyo), the trees blossomed gloriously, earning the kind man riches and honors.\n* When the envious neighbour tried the same, ashes blew into the Prince's eyes, and guards punished him severely.",
    "bodyTa": "### 1. கதையின் சுருக்கம்\nநற்குணம் கொண்ட முதிய தம்பதியினரும், பொறாமை பிடித்த பக்கத்து வீட்டுக்காரர்களும் இக்கதையின் கதாபாத்திரங்கள்.\n\n### 2. விசுவாசமான நாய் ஷிரோ\n* அன்பான முதியவருக்கு நாய் ஷிரோ வழிகாட்ட, தங்கப் புதையல் கிடைத்தது.\n* பொறாமைக்காரன் நாயைக் கடத்திச் சென்று தோண்ட, குப்பையே கிடைத்ததால் நாயைக் கொன்றுவிட்டான்.\n\n### 3. மந்திர உலக்கையும் சாம்பலும்\n* நாயின் நினைவாகச் செய்த உலக்கையில் அரிசி இடிக்கத் தங்கம் கிடைத்தது; பொறாமைக்காரன் உலக்கையை எரித்தான்.\n* அந்தச் சாம்பலைக் காய்ந்த மரங்களில் தூவ அவை மலர்ந்தன; இளவரசர் முதியவருக்குப் பரிசுகள் அளித்தார்.\n* இதைப் பார்த்த பொறாமைக்காரன் சாம்பலைத் தூவ, அது இளவரசரின் கண்களில் விழுந்து தண்டனைக்குள்ளானான்.",
    "rememberBoxes": [
      {
        "tipEn": "Moral: Virtue brings rewards; malice and jealousy lead to ruin.",
        "tipTa": "நீதி: நற்குணம் நன்மையைத் தரும்; பொறாமை அழிவைத் தேடித்தரும்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u2_p1": {
    "id": "note_c9_eng_u2_p1",
    "chapterId": "c9_eng_u2_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: I Can't Climb Trees Anymore (Ruskin Bond): Study Notes",
    "titleTa": "உரைநடை: என்னால் இனி மரங்களில் ஏற முடியாது (ரஸ்கின் பாண்ட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Overview\nWritten by **Ruskin Bond**, the story explores nostalgic reminiscence and the passage of time as an adult revisits his old family home.\n\n### 2. Narrative Arc\n* A man stands outside his grandparents' former stone bungalow after twenty-five years.\n* A young girl living there welcomes him to explore the garden.\n* He recalls his favorite jackfruit tree where he spent hours as a child.\n\n### 3. The Iron Cross\n* He remembers hiding his grandfather's World War I German Iron Cross in a tree hollow.\n* The girl climbs the tree and retrieves the rusty relic.\n* He leaves the Iron Cross with the girl as a gift, realizing he returned not for the metal cross or the house, but to touch the spirit of his lost youth.",
    "bodyTa": "### 1. பாட அறிமுகம்\nரஸ்கின் பாண்ட் எழுதிய இக்கதை, 25 ஆண்டுகளுக்குப் பிறகு தனது பால்ய கால வீட்டைக் காண வரும் ஒரு மனிதனின் நினைவுகளை விவரிக்கிறது.\n\n### 2. கதை நிகழ்வுகள்\n* பழைய கல் வீட்டிற்கு வரும் நபரை அங்கு வசிக்கும் சிறுமி வரவேற்கிறாள்.\n* தோட்டத்தில் உள்ள பலா மரத்தைப் பார்த்து, சிறுவயதில் தான் விளையாடியதை நினைவு கூர்கிறார்.\n* மரத்தின் பொந்தில் ஒளித்து வைத்த தாத்தாவின் முதல் உலகப் போர் இரும்புச் சிலுவையைச் சிறுமி எடுத்துக் கொடுக்கிறாள்.\n\n### 3. முடிவு\n* அந்தச் சிலுவையைச் சிறுமிக்கே பரிசாக வழங்கிவிட்டு, தான் அங்கு வந்தது இளமைக்கால நினைவுகளை மீட்டெடுக்கவே என்பதை உணர்ந்து விடைபெறுகிறார்.",
    "rememberBoxes": [
      {
        "tipEn": "Theme: True youth lives on in cherished memories rather than physical possessions.",
        "tipTa": "கருத்து: இளமை என்பது பொருட்களில் இல்லை; அழியாத நினைவுகளில் வாழ்கிறது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u2_p2": {
    "id": "note_c9_eng_u2_p2",
    "chapterId": "c9_eng_u2_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: A Poison Tree (William Blake): Study Notes",
    "titleTa": "கவிதை: நச்சு மரம் (வில்லியம் பிளேக்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Poetic Theme\nWilliam Blake’s *\"A Poison Tree\"* (from *Songs of Experience*, 1794) examines the toxic effects of concealed resentment.\n\n### 2. Contrast in Communication\n* **Friend**: When angry with his friend, the poet spoke up and the anger vanished.\n* **Foe**: When angry with his enemy, he kept silent, allowing wrath to grow into a poisonous tree.\n\n### 3. Metaphor of Growth\n* He watered it with fears and tears, sunning it with deceitful smiles.\n* The malice produced a radiant but lethal apple. The enemy sneaked into the garden at night and ate it, ending up dead beneath the tree.",
    "bodyTa": "### 1. கவிதையின் மையக்கருத்து\nவில்லியம் பிளேக் எழுதிய இக்கவிதை, மனதிற்குள் அடக்கி வைக்கப்படும் பகையினால் ஏற்படும் பேரழிவை விவரிக்கிறது.\n\n### 2. இருவேறு அணுகுமுறைகள்\n* நண்பனிடம் கோபத்தை வெளிப்படுத்தியதால் அது தீர்ந்தது.\n* எதிரியிடம் மறைத்ததால் அது ஒரு நச்சு மரமாக வளர்ந்தது.\n\n### 3. நச்சு ஆப்பிள்\n* போலிப் புன்னகையினாலும் கண்ணீரினாலும் வளர்க்கப்பட்ட அந்த மரம் ஒரு கவர்ச்சியான விஷ ஆப்பிளை உருவாக்கியது. அதை உண்ட எதிரி மரத்தடியில் சடலமாகக் கிடந்தான்.",
    "rememberBoxes": [
      {
        "tipEn": "Moral: Open dialogue heals anger; deceitful concealment poisons the soul.",
        "tipTa": "நீதி: கோபத்தை வெளிப்படையாகப் பேசித் தீர்க்க வேண்டும்; மறைத்து வைத்தால் நஞ்சாகும்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u2_s1": {
    "id": "note_c9_eng_u2_s1",
    "chapterId": "c9_eng_u2_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: The Fun They Had (Isaac Asimov): Study Notes",
    "titleTa": "துணைப்பாடம்: அவர்கள் அடைந்த மகிழ்ச்சி (ஐசக் அசிமோவ்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Sci-Fi Vision\nWritten by **Isaac Asimov**, set in the year **2157**.\n\n### 2. A Real Printed Book\n* Tommy finds an antique paper book in his attic describing how schools operated centuries earlier.\n* Margie, accustomed to moving words on computer screens (telebooks), finds printed books fascinating.\n\n### 3. Mechanical vs Human Schooling\n* Margie is educated by a robotic mechanical teacher in her bedroom with punch-card assessments.\n* She learns that children once gathered in real school buildings, guided by human teachers, playing and studying together. She wistfully dreams of *\"the fun they had.\"*",
    "bodyTa": "### 1. அறிவியல் பின்னணி\nஐசக் அசிமோவ் எழுதிய இக்கதை எதிர்காலத்தில் கி.பி. 2157-இல் நடப்பதாக அமைக்கப்பட்டுள்ளது.\n\n### 2. உண்மையான புத்தகம்\n* டாமி தனது பரணில் கண்டெடுத்த காகிதப் புத்தகத்தில் பழைய பள்ளிக்கூடங்கள் பற்றி எழுதப்பட்டிருந்தது.\n* கணினித் திரையில் படித்துப் பழகிய மார்கி, அசையாத எழுத்துக்களைக் கொண்ட புத்தகத்தை ஆச்சரியத்துடன் பார்த்தாள்.\n\n### 3. பழைய பள்ளிகளின் மீதான ஏக்கம்\n* எதிர்காலத்தில் வீட்டில் இயந்திர ஆசிரியரிடம் தனிமையில் படிக்கும் குழந்தைகள், பழைய காலத்தில் நண்பர்களோடு பள்ளிக்குச் சென்று மனித ஆசிரியரிடம் கற்ற மகிழ்ச்சியை எண்ணி ஏங்குகின்றனர்.",
    "rememberBoxes": [
      {
        "tipEn": "Theme: Human warmth, friendship, and shared learning cannot be replaced by machines.",
        "tipTa": "கருத்து: நண்பர்களோடு கூடிப் பயிலும் மகிழ்ச்சியை இயந்திரங்களால் தர இயலாது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u3_p1": {
    "id": "note_c9_eng_u3_p1",
    "chapterId": "c9_eng_u3_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: Old Man River (Dorothy Deming): Study Notes",
    "titleTa": "உரைநடை: வெள்ளப்பெருக்கு - ஓல்ட் மேன் ரிவர் (நாடகம்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 6,
    "bodyEn": "### 1. Drama of Crisis & Courage\n\"Old Man River\" is a suspenseful one-act disaster preparedness play set during a severe flood.\n\n### 2. Plot & Emergency Response\n* Amy Marshall, her sister Betty, and friends Rose and Sara are stranded at home as river floodwaters rise and the bridge washes away.\n* Teenage neighbor **Jim Hall** steps up as the leader, calmly orchestrating emergency survival measures:\n  * Filling bathtubs and pails with fresh drinking water before tap supplies are contaminated.\n  * Securing flashlights, candles, warm blankets, and canned provisions.\n  * Moving children safely to the attic and roof to signal rescuers.\n* A Red Cross rescue boat piloted by Mr. Peters and Penny arrives to evacuate them safely.",
    "bodyTa": "### 1. நாடகக் களம்\nவெள்ளப்பெருக்கின் போது குழந்தைகள் துணிவுடன் செயல்பட்டு உயிர் தப்பியதை விவரிக்கும் நாடகம் இது.\n\n### 2. ஜிம் ஹாலின் தலைமைத்துவம்\n* பாலம் அடித்துச் செல்லப்பட்டு, வெள்ள நீர் வீட்டைச் சூழ்கிறது.\n* ஜிம் ஹால் என்ற இளைஞன் சமயோசிதமாகச் செயல்பட்டு:\n  * குடிநீர் விநியோகம் தடைபடுவதற்குள் தொட்டிகளில் சுத்தமான நீரைச் சேமிக்கிறான்.\n  * டார்ச் லைட்டுகள், போர்வைகள், உணவுப் பொருட்களைச் சேகரிக்கிறான்.\n  * குழந்தைகளை மாடிக்கு அழைத்துச் சென்று காப்பாற்றுகிறான்.\n* செஞ்சிலுவைச் சங்கப் படகு வந்து அனைவரையும் பாதுகாப்பாக மீட்டது.",
    "rememberBoxes": [
      {
        "tipEn": "Preparedness tip: Safe drinking water and lighting are paramount during floods.",
        "tipTa": "பேரிடர் குறிப்பு: வெள்ளத்தின் போது சுத்தமான குடிநீரும் ஒளியும் முதன்மையானவை."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u3_p2": {
    "id": "note_c9_eng_u3_p2",
    "chapterId": "c9_eng_u3_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: On Killing a Tree (Gieve Patel): Study Notes",
    "titleTa": "கவிதை: மரத்தைக் கொல்வது எப்படி (ஜீவ் பட்டேல்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Poetic Theme\nIndian poet and medical doctor **Gieve Patel** presents a stark, ironic manual on what it truly takes to destroy a tree.\n\n### 2. Resilience of Nature\n* A simple chop or jab of a knife cannot kill a tree; its bark will bleed, heal, and sprout miniature green boughs.\n* Left unchecked, the tree will expand back to its former size.\n\n### 3. The Ruthless Process of Killing\n* To kill a tree, the **root** must be pulled entirely out of the anchoring earth.\n* The white, wet, sensitive root must be exposed to scorching sun and air, choked, browned, hardened, and withered into death.",
    "bodyTa": "### 1. கவிதை நயம்\nமருத்துவரும் கவிஞருமான ஜீவ் பட்டேல் எழுதிய இக்கவிதை, இயற்கையின் அபாரமான உயிர்வாழும் திறனையும், மனிதனின் இரக்கமற்ற செயலையும் படம் பிடித்துக் காட்டுகிறது.\n\n### 2. மரத்தின் உயிர் வலிமை\n* கத்தியால் வெட்டுவதாலோ, கிளைகளைச் சாய்ப்பதாலோ மரம் மடிந்துவிடாது; பட்டை ஆறி மீண்டும் துளிர்க்கும்.\n\n### 3. வேரோடு பிடுங்குதல்\n* பூமியின் ஆழத்தில் புதைந்திருக்கும் வேரை முழுமையாகப் பிடுங்கி, வெயிலிலும் காற்றிலும் காய வைத்து உலர்த்தினால் மட்டுமே மரம் முழுமையாக அழியும் என்று முரண் நயத்துடன் சாடுகிறார்.",
    "rememberBoxes": [
      {
        "tipEn": "Irony: The poem uses instructions for killing to protest environmental destruction.",
        "tipTa": "முரண் நயம்: மரத்தை வெட்டுவதை விவரிப்பதன் மூலம் காடழிப்பைக் கவிஞர் கண்டிக்கிறார்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u3_s1": {
    "id": "note_c9_eng_u3_s1",
    "chapterId": "c9_eng_u3_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: Earthquake (M.S. Mahadevan): Study Notes",
    "titleTa": "துணைப்பாடம்: நிலநடுக்கம் (எம்.எஸ். மகாதேவன்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Context of Disaster\nSet in the Garhwal Himalayas devastated by the calamitous Malthi earthquake.\n\n### 2. Brij’s Tragic Loss\n* Seventeen-year-old Brij lost his parents and grandmother in the quake.\n* His two-year-old baby sister **Bhuli** was buried beneath the collapsed rubble of their home.\n\n### 3. The Miracle Rescue\n* While villagers gave up hope, an unnamed Army Officer and his soldiers dug through the debris for hours.\n* Against all odds, they pulled baby Bhuli out alive and unharmed.\n\n### 4. Paying Gratitude Forward\n* Brij runs a small roadside tea stall on the highway. He refuses payment from tired weary travelers, serving them free tea as an act of perpetual gratitude to the officer who saved his sister.",
    "bodyTa": "### 1. பின்னணி\nகார்வால் இமயமலைப் பகுதியில் ஏற்பட்ட மால்தி நிலநடுக்கத்தின் பின்னணியில் அமைந்த நெகிழ்ச்சியான கதை.\n\n### 2. பிரிஜின் இழப்பு\n* நிலநடுக்கத்தில் பிரிஜின் பெற்றோரும் பாட்டியும் உயிரிழந்தனர்.\n* அவனது இரண்டு வயது தங்கை பூலி இடிபாடுகளுக்குள் சிக்கிக் கொண்டாள்.\n\n### 3. ராணுவ அதிகாரியின் கருணை\n* நம்பிக்கை இழந்த சூழலில், ராணுவ அதிகாரி ஒருவர் மணிக்கணக்கில் இடிபாடுகளைத் தோண்டி பூலியை உயிருடன் மீட்டெடுத்தார்.\n\n### 4. நன்றிக்கடன்\n* நெடுஞ்சாலையில் தேநீர்க் கடை நடத்தும் பிரிஜ், வழிப்போக்கர்களுக்கு இலவசமாகத் தேநீர் வழங்கி, தன் தங்கையைக் காப்பாற்றிய அந்த ராணுவ அதிகாரிக்கு நன்றிக்கடன் செலுத்துகிறான்.",
    "rememberBoxes": [
      {
        "tipEn": "Core theme: Paying gratitude forward ennobles human life.",
        "tipTa": "கருத்து: பெற்ற உதவியை மற்றவர்களுக்கு நன்மையாகச் செய்வதே உண்மையான நன்றியுணர்வாகும்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u4_p1": {
    "id": "note_c9_eng_u4_p1",
    "chapterId": "c9_eng_u4_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: Seventeen Oranges (Bill Naughton): Study Notes",
    "titleTa": "உரைநடை: பதினேழு ஆரஞ்சுகள் (பில் நாட்டன்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Humorous Narrative\nWritten by **Bill Naughton**, this story recounts a humorous escapade of dockyard pilfering and quick thinking.\n\n### 2. The Catch at the Gate\n* The narrator worked for a delivery firm at the docks and was fond of oranges.\n* Policeman **Pongo** stopped him at the gate and found seventeen juicy oranges concealed in his apron pockets.\n* Pongo locked him inside the police cabin and left to summon a sergeant as a witness.\n\n### 3. Swallowing the Evidence\n* Terrified of imprisonment and losing his job, an inner voice urged him to eat all seventeen oranges!\n* In a desperate race against time, he swallowed pulp, seeds, and bitter peels until not a shred was left.\n* When Pongo returned, there was zero evidence. Without evidence, Pongo had to let him go, though the narrator suffered an upset stomach for days!",
    "bodyTa": "### 1. நகைச்சுவைக் கதை\nதுறைமுகத்தில் நடந்த ஒரு சுவாரசியமான உண்மைச் சம்பவத்தை எழுத்தாளர் பில் நாட்டன் நகைச்சுவையுடன் விவரிக்கிறார்.\n\n### 2. மாட்டிக்கொண்ட தருணம்\n* துறைமுகத்தில் வேலை செய்த கதைசொல்லி, தனது ஆடைக்குள் 17 ஆரஞ்சுப் பழங்களை மறைத்து எடுத்து வந்தார்.\n* காவலர் போங்கோ அவரைப் பிடித்து, ஓர் அறையில் பூட்டிவிட்டு மற்றொரு சாட்சியை அழைக்கச் சென்றார்.\n\n### 3. சாட்சியை விழுங்குதல்\n* சிறைக்குச் செல்வதைத் தவிர்க்க, 17 ஆரஞ்சுப் பழங்களையும் தோல், விதை உட்பட முழுமையாக விழுங்கித் தீர்த்தார்.\n* காவலர் வந்து பார்த்தபோது எந்த ஆதாரமும் இல்லாததால் அவரை விடுவிக்க நேர்ந்தது; ஆனால் பழங்களை விழுங்கியதால் அவருக்கு வயிற்று வலி ஏற்பட்டது!",
    "rememberBoxes": [
      {
        "tipEn": "Humour quote: \"Evidence! Swallowed down to the seeds and bitter rinds!\"",
        "tipTa": "நகைச்சுவை: சாட்சியே இல்லாதவாறு விதைகளோடு ஆரஞ்சை விழுங்கித் தப்பித்தார்!"
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u4_p2": {
    "id": "note_c9_eng_u4_p2",
    "chapterId": "c9_eng_u4_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: The Spider and the Fly (Mary Botham Howitt): Study Notes",
    "titleTa": "கவிதை: சிலந்தியும் ஈயும் (மேரி போதம் ஹோவிட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. A Cautionary Fable\nMary Botham Howitt’s famous poem warns children against the perils of sweet, deceitful flattery.\n\n### 2. Dialogue of Deception\n* The cunning spider invites the fly: *\"Will you walk into my parlour?\"* praising his winding stair, cozy bed, and tasty pantry.\n* The cautious fly resists each physical temptation.\n\n### 3. The Power of Vain Flattery\n* The spider shifts tactics, praising the fly's pearl-and-silver wings, brilliant eyes, and crowned head.\n* Seduced by vanity, the foolish fly returns to admire herself in his glass, only to be snapped up, dragged into his den, and devoured.",
    "bodyTa": "### 1. எச்சரிக்கைக் கவிதை\nமேரி போதம் ஹோவிட் எழுதிய இக்கவிதை, வஞ்சகப் புகழ்ச்சியில் மயங்குபவர்களுக்கு ஏற்படும் ஆபத்தை விளக்கும் உருவகக் கதையாகும்.\n\n### 2. சிலந்தியின் தந்திரம்\n* சிலந்தி ஈயைத் தனது அழகிய வலைக்குள் வருமாறு பலவிதங்களில் அழைக்கிறது; ஈ ஆரம்பத்தில் மறுக்கிறது.\n* இறுதியாக, ஈயின் பளபளக்கும் இறக்கைகளையும், கண்களையும் புகழ்ந்து பேசுகிறது.\n* தன் அழகைப் புகழ்ந்ததால் மயங்கிய ஈ, வலையின் அருகே வர, சிலந்தி அதைப் பிடித்து உண்டு விடுகிறது.",
    "rememberBoxes": [
      {
        "tipEn": "Moral: Never listen to an evil counselor who flatters your vanity.",
        "tipTa": "நீதி: வஞ்சகப் புகழ்ச்சி பேசும் நபர்களின் பேச்சைக் கேட்டு மயங்கிவிடக் கூடாது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u4_s1": {
    "id": "note_c9_eng_u4_s1",
    "chapterId": "c9_eng_u4_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: The Cat and the Pain-Killer (Mark Twain): Study Notes",
    "titleTa": "துணைப்பாடம்: பூனையும் வலி நிவாரணியும் (மார்க் ட்வைன்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Tom Sawyer Escapade\nAn excerpt from Mark Twain's classic *\"The Adventures of Tom Sawyer\"*.\n\n### 2. Becky Thatcher & The Quack Cures\n* Tom is lovesick and miserable because Becky Thatcher has stopped attending school.\n* Aunt Polly, obsessed with health quackery, doses Tom with \"Pain-Killer\", which tastes like liquid fire.\n* Tom pretends to love the medicine, asks for it regularly, and secretly pours it into a floor crack.\n\n### 3. Peter the Cat's Wild Frenzy\n* Aunt Polly's yellow cat Peter begs for a taste. Tom administers a spoonful.\n* Peter erupts into frantic somersaults, wrecks flowerpots, and leaps out the window.\n* Aunt Polly realizes what was cruel to the cat was equally cruel to a growing boy, and stops dosing Tom.",
    "bodyTa": "### 1. டாம் சாயரின் சுட்டித்தனம்\nமார்க் ட்வைனின் புகழ்பெற்ற நாவலான \"டாம் சாயர்\" நாவலின் ஒரு பகுதி.\n\n### 2. பாலியின் மருத்துவம்\n* பெக்கி தாட்சர் பள்ளிக்கு வராததால் டாம் சோர்வாக இருந்தான். அவனுக்கு வலி நிவாரணி என்ற கசப்பான மருந்தைப் பாலி அத்தை ஊட்டினார்.\n* டாம் அந்த மருந்தை நிலத்தில் இருந்த இடுக்கில் ஊற்றி ஏமாற்றினான்.\n\n### 3. பூனை பீட்டரின் கூத்து\n* பீட்டர் என்ற பூனை மருந்தை வேண்ட, டாம் அதன் வாயில் ஊற்றினான். பூனை அந்தரத்தில் குதித்து, வீட்டைச் சின்னாபின்னமாக்கி ஜன்னல் வழியே ஓடியது.\n* பூனைக்கே இவ்வளவு கொடுமையான மருந்தை சிறுவனுக்குக் கொடுப்பது தவறு என்பதை உணர்ந்து அத்தை மருந்து தருவதை நிறுத்தினார்.",
    "rememberBoxes": [
      {
        "tipEn": "Twain’s satire: Quack cures often cause far more distress than the illness itself!",
        "tipTa": "நகைச்சுவை: தேவையற்ற போலி மருந்துகள் நோயை விட அதிகத் துன்பத்தைத் தரும்!"
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u5_p1": {
    "id": "note_c9_eng_u5_p1",
    "chapterId": "c9_eng_u5_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: Water - The Elixir of Life (Sir C.V. Raman): Study Notes",
    "titleTa": "உரைநடை: நீர் - வாழ்வின் அமிர்தம் (சர் சி.வி. இராமன்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 6,
    "bodyEn": "### 1. Scientific & Philosophical Overview\nNobel Laureate **Sir C.V. Raman** (Nobel Prize in Physics, 1930) explores water as the true, potent elixir of life.\n\n### 2. The Libyan Desert vs The Nile Valley\n* Raman describes looking across the line separating the barren Libyan Desert (without a single green blade) from the lush, fertile Nile Valley in Egypt.\n* The sole creator of this dramatic difference is the waters of the River Nile.\n\n### 3. Soil Erosion & Preventive Measures\n* Water carries fine, fertile silt. However, unchecked flow causes devastating soil erosion.\n* **Remedial Measures**:\n  * Terracing of sloping lands.\n  * Construction of check-bunds to retard water flow.\n  * Contour cultivation and afforestation (planting trees).\n\n### 4. Harnessing Water Resources\n* Systemic conservation of monsoon rainwater, harnessing rivers for hydroelectric power, and expanding inland waterways are essential for India's agricultural prosperity.",
    "bodyTa": "### 1. அறிவியல் பார்வை\nநோபல் பரிசு பெற்ற சர் சி.வி. இராமன், தண்ணீரே பூமியின் உண்மையான அமிர்தம் என்பதை இக்கட்டுரையில் விளக்குகிறார்.\n\n### 2. லிபியப் பாலைவனமும் நைல் நதியும்\n* ஒருபுறம் ஒரு புல் பூண்டு கூட இல்லாத லிபியப் பாலைவனம்; மறுபுறம் பசுமை கொழிக்கும் எகிப்தின் நைல் நதிப் பள்ளத்தாக்கு.\n* இந்த மாபெரும் மாற்றத்தை உருவாக்கியது நைல் நதியின் நீரே ஆகும்.\n\n### 3. மண் அரிப்பும் தடுப்பு முறைகளும்\n* நீர் வண்டல் மண்ணைக் கொண்டு சேர்க்கிறது; ஆனால் கட்டுப்படுத்தப்படாத வெள்ள நீர் மண்ணை அரித்து மலடாக்கிவிடும்.\n* **தடுப்பு வழிகள்**: படிமுறை விவசாயம், தடுப்பணைகள் அமைத்தல், சம உயர உழவு, காடுகளை வளர்த்தல்.\n\n### 4. நீர் மேலாண்மை\n* மழைநீரைச் சேமித்தல், நிலத்தடி நீரைப் பாதுகாத்தல் மற்றும் நீர்மின் திட்டங்களே நாட்டின் வளர்ச்சிக்கு அடிப்படை.",
    "rememberBoxes": [
      {
        "tipEn": "Nobel Fact: Sir C.V. Raman won the Nobel Prize in Physics in 1930 for the Raman Effect.",
        "tipTa": "முக்கியக் குறிப்பு: சர் சி.வி. இராமன் 1930-இல் இராமன் விளைவுக்காக இயற்பியல் நோபல் பரிசு பெற்றார்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u5_p2": {
    "id": "note_c9_eng_u5_p2",
    "chapterId": "c9_eng_u5_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: The River (Caroline Ann Bowles): Study Notes",
    "titleTa": "கவிதை: நதி (கரோலின் ஆன் பௌல்ஸ்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Allegorical Nature of the River\nCaroline Ann Bowles charts the journey of a river as an allegory for the four stages of human life.\n\n### 2. The Four Stages\n* **Childhood (Stanza 1)**: Little river sparkling, dancing over pebbles, smiling like a playful child.\n* **Youth (Stanza 2)**: Swelling river rushing through rough and smooth paths, brawling like reckless youth.\n* **Maturity / Prime of Manhood (Stanza 3)**: Broad, deep, and still, moving silently yet powerfully.\n* **Eternity (Stanza 4)**: Headlong river leaping into the boundless ocean, like mortal life merging into immortal eternity.",
    "bodyTa": "### 1. கவிதைக் கருத்து\nநதியின் பயணத்தை மனித வாழ்க்கையின் நான்கு பருவங்களோடு ஒப்பிட்டுப் பாடுகிறார் கரோலின் ஆன் பௌல்ஸ்.\n\n### 2. நான்கு பருவங்கள்\n* **குழந்தைப் பருவம்**: கூழாங்கற்கள் மீது துள்ளி ஓடும் சிற்றாறு.\n* **இளமைப் பருவம்**: கரைகளை மோதித் துள்ளிக் குதித்து ஓடும் காட்டாறு.\n* **முதுமை / முதிர்ச்சி**: அமைதியாகவும் ஆழமாகவும் ஓடும் பேராறு.\n* **முடிவிலி (மறுமை)**: எல்லையற்ற பெருங்கடலில் சங்கமித்து அமரத்துவம் அடையும் நதி.",
    "rememberBoxes": [
      {
        "tipEn": "Metaphor: Ocean represents the boundless sea of eternity.",
        "tipTa": "உருவகம்: பெருங்கடல் என்பது முடிவில்லாத மறுமை நிலையைக் குறிக்கிறது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u5_s1": {
    "id": "note_c9_eng_u5_s1",
    "chapterId": "c9_eng_u5_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: Little Cyclone: The Story of a Grizzly Cub (William T. Hornaday): Study Notes",
    "titleTa": "துணைப்பாடம்: லிட்டில் சைக்ளோன் - கரடிக்குட்டியின் கதை: பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. A True Animal Hero\nWritten by zoologist **William Temple Hornaday**, the story recounts the courage of an orphaned grizzly bear cub.\n\n### 2. Origins & The New York Bear Dens\n* Little Cyclone was born in the Upper Kootenay region of British Columbia. After his mother was killed, he was captured and sent to the New York Zoological Park.\n* The resident bully bears—big Canadian black bears and European brown bears—routinely bullied newcomers.\n\n### 3. The Test of Courage\n* A large bear tried to intimidate Little Cyclone.\n* Little Cyclone did not cower; he struck a lightning-quick left-paw counterblow that stunned the aggressor.\n* His unyielding dignity earned him lifelong peace and the undisputed respect of all bears in the enclosure.",
    "bodyTa": "### 1. உண்மை விலங்குக்கதை\nவிலங்கியல் அறிஞர் வில்லியம் டெம்பிள் ஹார்னடே எழுதிய இக்கதை, ஒரு கரடிக்குட்டியின் அஞ்சா நெஞ்சத்தை விவரிக்கிறது.\n\n### 2. நியூயார்க் விலங்குக் காட்சிச்சாலை\n* கனடாவில் தாய் கொல்லப்பட்ட பிறகு பிடிபட்ட 'லிட்டில் சைக்ளோன்' என்ற குட்டி கரடி, நியூயார்க் பூங்காவிற்கு அனுப்பப்பட்டது.\n* அங்குள்ள பெரிய கறுப்புக் கரடிகளும் ஐரோப்பியக் கரடிகளும் புதிய கரடிகளை அச்சுறுத்தி ஆதிக்கம் செலுத்தி வந்தன.\n\n### 3. துணிச்சலான பதிலடி\n* ஒரு பெரிய கரடி மிரட்டியபோது, லிட்டில் சைக்ளோன் அஞ்சாமல் தனது இடது காலால் மின்னல் வேகத்தில் ஒரே போடு போட்டது.\n* அதன் துணிவைக் கண்டு மற்ற கரடிகள் பணிந்தன; வாழ்நாள் முழுவதும் அது தன் சுயமரியாதையுடன் கம்பீரமாக வாழ்ந்தது.",
    "rememberBoxes": [
      {
        "tipEn": "Motto: Courage is not the absence of fear, but the refusal to be intimidated.",
        "tipTa": "முழக்கம்: துணிவு என்பது அச்சுறுத்தல்களுக்கு அடிபணியாமல் தலைநிமிர்ந்து நிற்பதே!"
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u6_p1": {
    "id": "note_c9_eng_u6_p1",
    "chapterId": "c9_eng_u6_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: From Zero to Infinity - Srinivasa Ramanujan: Study Notes",
    "titleTa": "உரைநடை: பூஜ்ஜியத்திலிருந்து முடிவிலி வரை - சீனிவாச ராமானுஜன்: பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 6,
    "bodyEn": "### 1. The Mathematical Wonder of Kumbakonam\nSrinivasa Ramanujan (1887–1920) was born in Erode and grew up in Kumbakonam, Tamil Nadu. By age thirteen, he had mastered advanced trigonometry without formal guidance.\n\n### 2. Trials & Recognition\n* His single-minded passion for mathematics caused him to fail non-mathematics subjects in college.\n* He lived in poverty, recording mathematical theorems in notebooks, supported by friends like Ramachandra Rao and Francis Spring at Madras Port Trust.\n\n### 3. The Letter to Cambridge\n* In 1913, Ramanujan sent a historic letter containing 120 mathematical theorems to celebrated English mathematician **G.H. Hardy** at Trinity College, Cambridge.\n* Hardy instantly recognized his peerless genius: *\"A single look was enough to show that they could only be written down by a mathematician of the highest class.\"*\n\n### 4. Hardy-Ramanujan Number (1729)\n* Visiting Ramanujan in hospital, Hardy remarked that his taxi number **1729** seemed dull.\n* Ramanujan replied instantly: *\"No, Hardy! It is a very interesting number; it is the smallest number expressible as the sum of two cubes in two different ways!\"*\n  * $$1^3 + 12^3 = 1 + 1728 = 1729$$\n  * $$9^3 + 10^3 = 729 + 1000 = 1729$$\n* India celebrates his birthday, **22 December**, as **National Mathematics Day**.",
    "bodyTa": "### 1. கும்பகோணத்துக் கணித மேதை\nசீனிவாச ராமானுஜன் (1887–1920) ஈரோட்டில் பிறந்து கும்பகோணத்தில் வளர்ந்தார். 13 வயதிற்குள் உயர் கணிதத்தில் இணையற்ற தேர்ச்சி பெற்றார்.\n\n### 2. வறுமையும் போராட்டமும்\n* கணிதத்தின் மீதான அதீத ஆர்வத்தால் பிற பாடங்களில் தோல்வியடைந்தார்.\n* வறுமையிலும் தனது கணிதக் கண்டுபிடிப்புகளைக் குறிப்பேடுகளில் எழுதினார். சென்னை துறைமுகப் பொறுப்புக் கழகத்தில் எழுத்தராகப் பணியாற்றினார்.\n\n### 3. கேம்பிரிட்ஜ் பேராசிரியரின் அங்கீகாரம்\n* 1913-இல் கேம்பிரிட்ஜ் பல்கலைக்கழகத்தின் புகழ்பெற்ற கணித மேதை ஜி.ஹெச். ஹார்டிக்கு 120 தேற்றங்களை அனுப்பி வைத்தார். அவரது மேதைமையை உணர்ந்த ஹார்டி அவரை இங்கிலாந்துக்கு அழைத்தார்.\n\n### 4. 1729 - ஹார்டி-ராமானுஜன் எண்\n* மருத்துவமனையில் இருந்த ராமானுஜனைச் சந்தித்த ஹார்டி, தான் வந்த டாக்ஸி எண் 1729 ஒரு சுவாரசியமில்லாத எண் என்றார்.\n* உடனே ராமானுஜன், \"இல்லை ஹார்டி, அது இரண்டு கனங்களின் கூடுதலாக இருவேறு வழிகளில் எழுதப்படக்கூடிய மிகச்சிறிய எண்!\" என்றார்.\n* இவரது பிறந்த நாளான **டிசம்பர் 22** தேசிய கணித தினமாகக் கொண்டாடப்படுகிறது.",
    "rememberBoxes": [
      {
        "tipEn": "Hardy-Ramanujan Number: 1729 = 1³ + 12³ = 9³ + 10³.",
        "tipTa": "ஹார்டி-ராமானுஜன் எண்: 1729 = 1³ + 12³ = 9³ + 10³."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u6_p2": {
    "id": "note_c9_eng_u6_p2",
    "chapterId": "c9_eng_u6_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: The Comet (Norman Littleford): Study Notes",
    "titleTa": "கவிதை: வால்நட்சத்திரம் (நார்மன் லிட்டில்ஃபோர்ட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Celestial Wonder\nNorman Littleford’s poem marvels at the majestic beauty, blazing speed, and scientific mysteries of comets.\n\n### 2. Cosmic Drama\n* A comet hurtles through space faster than a cheetah, with a tail stretching millions of miles.\n* When passing close to the sun, the ice evaporates into a glorious luminous vapor trail.\n\n### 3. Origin of Life Hypothesis\n* Scientists theorize that cometary dust falling on primitive Earth deposited essential organic chemicals and water, possibly triggering the genesis of life.",
    "bodyTa": "### 1. வானியல் கவிதை\nநார்மன் லிட்டில்ஃபோர்ட், பிரபஞ்சத்தில் மின்னல் வேகத்தில் சீறிப் பாயும் வால்நட்சத்திரத்தின் எழிலையும் அறிவியலையும் பாடுகிறார்.\n\n### 2. வான் காட்சி\n* சிறுத்தையை விட வேகமாகப் பாய்ந்து செல்லும் வால்நட்சத்திரம், பல மில்லியன் மைல்கள் நீண்ட வாலைக் கொண்டுள்ளது.\n* சூரியனின் அருகே வரும்போது உருகி ஒளிரும் தூசு மண்டலமாக மாறுகிறது.\n\n### 3. உயிர்களின் தோற்றம்\n* பூமியில் விழுந்த வால்நட்சத்திரத் துகள்களே உயிரினங்கள் தோன்றுவதற்குத் தேவையான கரிமப் பொருட்களைத் தந்திருக்கலாம் என விஞ்ஞானிகள் கருதுவதை இக்கவிதை சுட்டுகிறது.",
    "rememberBoxes": [
      {
        "tipEn": "Science quote: Comets are \"dirty snowballs\" composed of frozen gases, rock, and dust.",
        "tipTa": "அறிவியல் குறிப்பு: வால்நட்சத்திரங்கள் பனிக்கட்டி மற்றும் தூசு நிறைந்த விண்பொருட்கள்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u6_s1": {
    "id": "note_c9_eng_u6_s1",
    "chapterId": "c9_eng_u6_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: Mother's Voice (Vasil Berezhnoy): Study Notes",
    "titleTa": "துணைப்பாடம்: தாயின் குரல் (வாசில் பெரெஷ்னாய்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Sci-Fi Setting & Deep Emotional Core\nWritten by Ukrainian author **Vasil Berezhnoy**, the story is set on a futuristic scientific base on the Moon.\n\n### 2. Listening to Earth\n* A young astronaut is preparing for an arduous interstellar journey to a distant star system.\n* Before departure, he listens to a recorded audio tape of his mother's voice sent from Earth.\n\n### 3. The Song of Mother Earth\n* The mother lovingly recounts the sounds and smells of their village on Earth: blossoming lilacs, babbling mountain brooks, raindrops on windowpanes, and birdsong.\n* The astronaut realizes that no matter how deep into the cosmos humanity ventures, planet Earth remains our eternal, nurturing mother.",
    "bodyTa": "### 1. அறிவியல் பின்னணி\nஉக்ரைனிய எழுத்தாளர் வாசில் பெரெஷ்னாய் எழுதிய இக்கதை, நிலவில் உள்ள விண்வெளி ஆய்வு மையத்தில் நடப்பதாக அமைக்கப்பட்டுள்ளது.\n\n### 2. விண்வெளிப் பயணம்\n* தொலைதூர நட்சத்திர மண்டலத்திற்குப் புறப்படத் தயாராகும் இளம் விண்வெளி வீரர் ஒருவர், பூமியிலிருந்து தாய் அனுப்பிய குரல் பதிவைக் கேட்கிறார்.\n\n### 3. தாய்மண்ணின் பெருமை\n* கிராமத்தின் நறுமணம், ஓடும் நீரோடைகள், மழைத்துளிகள், பறவைகளின் ஓசை ஆகியவற்றைத் தாய் அன்புடன் விவரிக்கிறாள்.\n* விண்வெளியின் எந்த மூலைக்குச் சென்றாலும், பூமித்தாயே மனிதகுலத்தின் நிரந்தரத் தொட்டில் என்பதை அவர் உணர்கிறார்.",
    "rememberBoxes": [
      {
        "tipEn": "Theme: Earth is the irreplaceable cradle of human life and emotion.",
        "tipTa": "கருத்து: மனிதகுலத்தின் ஈடுஇணையற்ற தாய்மண்ணாக பூமி என்றும் திகழ்கிறது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u7_p1": {
    "id": "note_c9_eng_u7_p1",
    "chapterId": "c9_eng_u7_p1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Prose: A Birthday Letter (Jawaharlal Nehru): Study Notes",
    "titleTa": "உரைநடை: பிறந்தநாள் கடிதம் (ஜவஹர்லால் நேரு): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 6,
    "bodyEn": "### 1. Historical Context\nWritten by **Pandit Jawaharlal Nehru** on **26 October 1930** from Central Prison, Naini, to his daughter **Indira Priyadarshini** on her thirteenth birthday.\n\n### 2. Gifts of the Mind\n* Being in prison, Nehru could not send physical presents; instead, he sent reflections of mind and spirit.\n* He avoids sermonizing or preaching, advocating instead for discussion and questioning to discover truth.\n\n### 3. Ordinary People Transformed into Heroes\n* Nehru reminds Indira how ordinary men and women rarely think of noble deeds in normal times.\n* However, when a great cause arises—such as Mahatma Gandhi’s freedom struggle—ordinary folk become fearless soldiers of liberty. He cites **Joan of Arc**, whose heroic story Indira admired.\n\n### 4. The Golden Rule of Integrity\n* Nehru gives a universal test of right action: *\"Never do anything in secret or anything that you would wish to hide.\"*\n* Living openly in the light dispels fear, creating upright, courageous character.",
    "bodyTa": "### 1. வரலாற்றுப் பின்னணி\n1930 அக்டோபர் 26 அன்று நைனி மத்திய சிறையிலிருந்து, தனது 13-ஆவது பிறந்தநாளைக் கொண்டாடும் மகள் இந்திரா பிரியதர்சினிக்கு ஜவஹர்லால் நேரு எழுதிய கடிதம் இது.\n\n### 2. அறிவுப் பரிசு\n* சிறையிலிருந்த நேருவால் பொருள் பரிசுகள் தர முடியவில்லை; அதற்குப் பதிலாக அறிவுரைகளையும் சிந்தனைகளையும் பரிசாக அனுப்பினார்.\n* உபதேசம் செய்யாமல், உரையாடல் மூலமே உண்மையை அறிய வேண்டும் என்றார்.\n\n### 3. தலைவர்களின் தாக்கம்\n* காந்தியடிகளின் தலைமையில் நடக்கும் விடுதலைப் போராட்டம் சாதாரண மக்களையும் தியாகிகளாக மாற்றியதை எடுத்துரைக்கிறார். இந்திராவுக்குப் பிடித்த 'ஜோன் ஆஃப் ஆர்க்'கின் வீரத்தை நினைவுபடுத்துகிறார்.\n\n### 4. நேர்மையின் தங்க விதி\n* \"எதையுமே ரகசியமாகச் செய்யாதே; எதையுமே மறைக்க நினைக்காதே\" என்ற பொன்மொழியை மகளுக்கு வழங்குகிறார். அச்சமின்றி வெளிப்படையாக வாழ்வதே உண்மையான தைரியமாகும்.",
    "rememberBoxes": [
      {
        "tipEn": "Golden Rule: \"Never do anything in secret or wish to hide anything!\"",
        "tipTa": "பொன்மொழி: \"எதையுமே ரகசியமாகச் செய்யாதே; மறைக்க விரும்பாதே!\""
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u7_p2": {
    "id": "note_c9_eng_u7_p2",
    "chapterId": "c9_eng_u7_p2",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Poem: The Stick-together Families (Edgar Albert Guest): Study Notes",
    "titleTa": "கவிதை: இணைந்திருக்கும் குடும்பங்கள் (எட்கர் ஆல்பர்ட் கெஸ்ட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. The Value of Kinship\nWritten by **Edgar Albert Guest** (known as \"The People's Poet\"), this poem praises the enduring happiness of close-knit family bonds.\n\n### 2. Contrast of Families\n* **The Wandering Seekers**: Individuals who drift apart chasing selfish ambitions and solitary worldly pleasures often encounter disillusionment and loneliness.\n* **The Stick-Together Families**: Families that share meals, converse around firesides, and weather joys and sorrows together find true, lasting peace.\n\n### 3. Conclusion\n* Material wealth cannot substitute for the affectionate laughter and mutual support found in a united household.",
    "bodyTa": "### 1. குடும்பத்தின் மேன்மை\n\"மக்களின் கவிஞர்\" என அழைக்கப்படும் எட்கர் ஆல்பர்ட் கெஸ்ட் எழுதிய இக்கவிதை, ஒற்றுமையான குடும்பத்தின் மகிழ்ச்சியைப் பாடுகிறது.\n\n### 2. இருவேறு வாழ்வு\n* தனித்துச் சென்று உலக இன்பங்களைத் தேடும் மனிதர்கள் இறுதியில் தனிமையையும் ஏமாற்றத்தையுமே சந்திக்கின்றனர்.\n* இன்ப துன்பங்களை ஒன்றாகப் பகிர்ந்து, கூடி வாழும் குடும்பங்களே உலகில் உண்மையான மகிழ்ச்சியை அனுபவிக்கின்றன.\n\n### 3. முடிவு\n* எந்தப் செல்வமும் குடும்பத்தின் அன்பிற்கும் ஆதரவிற்கும் ஈடாக முடியாது என்பதை இக்கவிதை உணர்த்துகிறது.",
    "rememberBoxes": [
      {
        "tipEn": "Theme: The sweetest joys on earth are found at the family fireside.",
        "tipTa": "கருத்து: குடும்பத்தின் அன்பும் ஒற்றுமையுமே இவ்வுலகின் ஆகச்சிறந்த செல்வம்."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  },
  "c9_eng_u7_s1": {
    "id": "note_c9_eng_u7_s1",
    "chapterId": "c9_eng_u7_s1",
    "classLevel": 9,
    "subjectId": "c9_english",
    "titleEn": "Supplementary: The Christmas Truce (Aaron Shepard): Study Notes",
    "titleTa": "துணைப்பாடம்: கிறிஸ்துமஸ் போர் நிறுத்தம் (ஆரோன் ஷெப்பர்ட்): பாடக் குறிப்புகள்",
    "publishedAt": "21 Sep 2026",
    "publishedAtTa": "21 செப் 2026",
    "updatedAt": "21 Sep 2026",
    "updatedAtTa": "21 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "Mrs. Stella Aruldoss, M.A., B.Ed., PGT English",
    "reviewedByRole": "Senior State Resource Person (TNSCERT English)",
    "reviewedAt": "21 Sep 2026",
    "reviewedAtTa": "21 செப் 2026",
    "status": "published",
    "version": "1.0",
    "changeNote": "Comprehensive textual analysis, vocabulary, and grammar focus added.",
    "changeNoteTa": "முழுமையான பாடப் பகுப்பாய்வு, அருஞ்சொற்கள் மற்றும் இலக்கணம் சேர்க்கப்பட்டது.",
    "readTimeMinutes": 5,
    "bodyEn": "### 1. Historical Setting\nBased on the real events of **Christmas 1914** on the Western Front during World War I.\n\n### 2. The Letter from the Trenches\n* British soldier Tom writes to his sister Janet describing an extraordinary miracle in the trenches.\n* On Christmas Eve, German soldiers set up small lit fir trees along their trench parapets and sang *\"Stille Nacht\"* (Silent Night). British soldiers responded with *\"The First Noel\"*.\n\n### 3. Brotherhood in No Man’s Land\n* Unarmed soldiers climbed out of opposing trenches into \"No Man’s Land\" to shake hands, embrace, and wish each other a Merry Christmas.\n* They shared plum pudding, cigarettes, and photos of their loved ones, and even played an impromptu football match.\n* The story demonstrates that humanity, peace, and brotherhood transcend national enmities and the madness of war.",
    "bodyTa": "### 1. வரலாற்றுப் பின்னணி\nமுதல் உலகப் போரின் போது 1914 கிறிஸ்துமஸ் திருநாளில் போர்க்களத்தில் நடந்த உண்மைச் சம்பவத்தை அடிப்படையாகக் கொண்ட கதை.\n\n### 2. கடித விவரிப்பு\n* பிரிட்டிஷ் சிப்பாய் டாம் தன் தங்கை ஜானட்டுக்கு எழுதிய கடிதத்தில் இந்த அரிய சம்பவத்தை விவரிக்கிறான்.\n* கிறிஸ்துமஸ் இரவில் ஜெர்மன் வீரர்கள் தங்கள் பதுங்கு குழிகளில் மெழுகுவர்த்தி ஏற்றி வைத்து 'சைலண்ட் நைட்' பாடலைப் பாடினர்; பிரிட்டிஷ் வீரர்களும் பதிலுக்குப் பாடினர்.\n\n### 3. சகோதரத்துவம்\n* வீரர்கள் ஆயுதங்களின்றி நடுநிலைப் பகுதிக்கு வந்து கைகுலுக்கி, இனிப்புகளையும், புகைப்படங்களையும் பகிர்ந்து கொண்டனர்; கால்பந்து விளையாடி மகிழ்ந்தனர்.\n* மனிதநேயமும் அமைதியும் எந்தப் போரையும் விட வலிமையானது என்பதை இச்சம்பவம் உலகுக்கு உணர்த்தியது.",
    "rememberBoxes": [
      {
        "tipEn": "Historical fact: The 1914 Christmas Truce showed that common soldiers yearned for peace.",
        "tipTa": "வரலாற்று உண்மை: 1914 கிறிஸ்துமஸ் போர் நிறுத்தம் வீரர்களின் அமைதி தாகத்தை வெளிப்படுத்தியது."
      }
    ],
    "revisions": [
      {
        "version": "1.0",
        "updatedAt": "21 Sep 2026",
        "updatedAtTa": "21 செப் 2026",
        "updatedBy": "Mrs. Stella Aruldoss",
        "changeNote": "Verified syllabus curriculum revision notes published.",
        "changeNoteTa": "பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன."
      }
    ]
  }
};

export const CLASS_9_ENGLISH_SUMMARIES: Record<string, SummaryItem> = {
  "c9_eng_u1_p1": {
    "id": "sum_c9_eng_u1_p1",
    "chapterId": "c9_eng_u1_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Sachin Tendulkar trained rigorously under coach Ramakant Achrekar at Shivaji Park from age 11.",
      "He moved to Shardashram Vidyamandir to balance intensive cricket training with schooling.",
      "Coach Achrekar incentivized endurance with a one-rupee coin on the stumps; Sachin won 13 coins.",
      "The lesson emphasizes hard work, focus, and mentorship as foundations for excellence."
    ],
    "keyPointsTa": [
      "சச்சின் 11 வயதில் சிவாஜி பார்க்கில் அச்ரேக்கரிடம் கிரிக்கெட் பயிற்சியைத் தொடங்கினார்.",
      "பயிற்சிக்காக சாரதாஷ்ரம் வித்யாமந்திர் பள்ளிக்கு மாறினார்.",
      "ஸ்டம்பின் மீதிருந்த ஒரு ரூபாய் நாணய சவாலில் 13 நாணயங்களை வென்றார்.",
      "கடின உழைப்பும் குருவின் வழிகாட்டலுமே பெருவெற்றிக்கு வித்திடும் என்பதை உணர்த்துகிறது."
    ],
    "simpleExplanationEn": "A motivational account of how discipline, daily dedication, and Coach Achrekar’s tough mentoring shaped Sachin into a world-class batsman.",
    "simpleExplanationTa": "ஒழுக்கம், அர்ப்பணிப்பு மற்றும் குருவின் கண்டிப்பான வழிகாட்டல் சச்சினை உலகத்தரம் வாய்ந்த வீரராக உயர்த்திய கதை."
  },
  "c9_eng_u1_p2": {
    "id": "sum_c9_eng_u1_p2",
    "chapterId": "c9_eng_u1_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "The traveler pauses to observe snow filling the dark, peaceful woods.",
      "His horse shakes harness bells, surprised by the stop away from human habitation.",
      "The speaker is drawn to the serenity of nature but remembers his moral duties.",
      "The poem ends with the famous line: \"And miles to go before I sleep\"."
    ],
    "keyPointsTa": [
      "பனி பொழியும் காட்டின் அழகில் லயித்து பயணி ஒருவர் நிற்கிறார்.",
      "அருகில் வீடுகள் இல்லாத இடத்தில் நின்றதால் குதிரை மணியை ஆட்டுகிறது.",
      "காட்டின் அமைதியை விட, செய்து முடிக்க வேண்டிய சமூகக் கடமைகள் முக்கியமானவை.",
      "வாழ்க்கைப் பயணத்தைத் தொடர வேண்டும் என்ற உறுதியோடு புறப்படுகிறார்."
    ],
    "simpleExplanationEn": "A lyrical masterpiece reflecting on the balance between enjoying life’s peaceful beauty and fulfilling our solemn duties.",
    "simpleExplanationTa": "இயற்கையின் எழிலில் லயித்தாலும், நாம் செய்து முடிக்க வேண்டிய வாழ்நாள் கடமைகளை நினைவூட்டும் அழகிய கவிதை."
  },
  "c9_eng_u1_s1": {
    "id": "sum_c9_eng_u1_s1",
    "chapterId": "c9_eng_u1_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "A kind couple’s faithful dog Shiro guided them to hidden treasures.",
      "Greedy neighbours borrowed Shiro and killed him when they found only garbage.",
      "Magic ashes from Shiro’s mortar made dead cherry trees burst into blossom.",
      "The kind man was honored by the Daimyo, while the envious neighbour was punished."
    ],
    "keyPointsTa": [
      "விசுவாசமுள்ள நாய் முதியவருக்குப் புதையல் கிடைக்க உதவியது.",
      "பொறாமை கொண்ட பக்கத்து வீட்டுக்காரன் நாயைக் கொன்றான்.",
      "சாம்பலைத் தூவிக் காய்ந்த மரங்களை மலரச் செய்து முதியவர் பரிசு பெற்றார்.",
      "அதேபோல் செய்ய முயன்ற பொறாமைக்காரன் தண்டிக்கப்பட்டான்."
    ],
    "simpleExplanationEn": "A traditional Japanese folktale showing that honesty and kindness are rewarded, while greed and cruelty bring disgrace.",
    "simpleExplanationTa": "அன்பும் நேர்மையும் எப்போதுமே நற்பலன் தரும்; பொறாமையும் பேராசையும் கேடே தரும் என்பதை உணர்த்தும் கதை."
  },
  "c9_eng_u2_p1": {
    "id": "sum_c9_eng_u2_p1",
    "chapterId": "c9_eng_u2_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "A middle-aged man revisits his grandparents’ stone bungalow after 25 years.",
      "He converses with a friendly girl living in the home and recalls climbing the jackfruit tree.",
      "The girl retrieves his grandfather’s German Iron Cross from the hollow of the tree.",
      "He gifts the cross to the girl, content with having revisited his youthful memories."
    ],
    "keyPointsTa": [
      "கதைசொல்லி 25 ஆண்டுகளுக்குப் பிறகு தனது தாத்தா வாழ்ந்த வீட்டிற்கு வருகிறார்.",
      "அங்குள்ள சிறுமியிடம் பேசிப் பலா மர நினைவுகளைப் பகிர்ந்து கொள்கிறார்.",
      "மரப் பொந்தில் இருந்த தாத்தாவின் இரும்புச் சிலுவையைச் சிறுமி மீட்டுத் தருகிறாள்.",
      "அதை அவளுக்கே பரிசளித்துவிட்டு, இளமையின் நினைவோடு விடைபெறுகிறார்."
    ],
    "simpleExplanationEn": "A poignant story about how returning to places of our childhood revives the timeless warmth and innocence of youth.",
    "simpleExplanationTa": "பால்ய கால இடங்களுக்கு மீண்டும் செல்வது நம் மனதில் இளமையின் மகிழ்ச்சியை மீட்டெடுக்கும் என்பதை விளக்கும் கதை."
  },
  "c9_eng_u2_p2": {
    "id": "sum_c9_eng_u2_p2",
    "chapterId": "c9_eng_u2_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Speaking out resolved anger with a friend, but hiding anger with a foe made it grow.",
      "The speaker nurtured hostility with fears, tears, and hypocritical smiles.",
      "The tree grew until it bore a bright, tempting poison apple.",
      "The enemy stole into the garden and died eating the fruit of concealed hatred."
    ],
    "keyPointsTa": [
      "நண்பனிடம் பேசியதால் கோபம் தணிந்தது; எதிரியிடம் மறைத்ததால் பகை வளர்ந்தது.",
      "போலிப் புன்னகையாலும் வஞ்சகத்தாலும் பகையை வளர்த்தார்.",
      "நச்சு மரம் அழகான விஷ ஆப்பிளை ஈன்றது.",
      "அதை உண்ட எதிரி மரத்தடியில் மாண்டு கிடந்தான்."
    ],
    "simpleExplanationEn": "An insightful allegorical poem demonstrating how bottled-up fury transforms into destructive malice.",
    "simpleExplanationTa": "கோபத்தை அடக்கி வைப்பது விஷமாக மாறி இருவருக்குமே கேடு விளைவிக்கும் என்பதை விளக்கும் கவிதை."
  },
  "c9_eng_u2_s1": {
    "id": "sum_c9_eng_u2_s1",
    "chapterId": "c9_eng_u2_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Set in 2157, Tommy discovers an old printed book about ancient schools.",
      "Futuristic students study alone with mechanical television screen teachers.",
      "Margie struggled with fast-paced geography lessons until the County Inspector adjusted it.",
      "Margie ponders the joy of children learning and playing together in human schools."
    ],
    "keyPointsTa": [
      "2157-இல் பழைய காகிதப் புத்தகத்தை டாமி கண்டெடுக்கிறான்.",
      "எதிர்காலத்தில் வீட்டில் இயந்திர ஆசிரியரிடம் தனிமையில் படிக்கிறார்கள்.",
      "பழைய காலத்தில் மாணவர்கள் பள்ளிக்குச் சென்று ஒன்றாகப் படித்ததை மார்கி அறிகிறாள்.",
      "அவர்கள் எவ்வளவு மகிழ்ச்சியாக இருந்திருப்பார்கள் என்று வியக்கிறாள்."
    ],
    "simpleExplanationEn": "A futuristic tale contrasting solitary, computerized home schooling with the social warmth and fun of traditional classrooms.",
    "simpleExplanationTa": "எதிர்காலக் கணினிக் கல்வியையும், மனித ஆசிரியர்களோடு கூடிப் படித்த பழைய பள்ளியின் மகிழ்ச்சியையும் ஒப்பிடும் கதை."
  },
  "c9_eng_u3_p1": {
    "id": "sum_c9_eng_u3_p1",
    "chapterId": "c9_eng_u3_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Children are stranded in their house during a sudden severe river flood.",
      "Jim Hall organizes essential precautions: stockpiling clean water, food, and signals.",
      "Calm cooperation and discipline prevent panic.",
      "The Red Cross rescue boat safely evacuates the children."
    ],
    "keyPointsTa": [
      "திடீர் வெள்ளப்பெருக்கால் குழந்தைகள் வீட்டில் தனிமைப்படுத்தப்படுகிறார்கள்.",
      "ஜிம் ஹால் குடிநீர் சேமித்து, உணவு மற்றும் ஒளிரும் விளக்குகளைத் தயார் செய்கிறான்.",
      "பதற்றமின்றிச் செயல்பட்டு மாடியில் இருந்து சமிக்ஞை செய்கின்றனர்.",
      "செஞ்சிலுவைச் சங்கத்தினர் படகில் வந்து அனைவரையும் மீட்டனர்."
    ],
    "simpleExplanationEn": "A dramatic depiction of disaster survival highlighting presence of mind, calm leadership, and community rescue.",
    "simpleExplanationTa": "இயற்கைப் பேரிடரின் போது சமயோசித புத்தியும், துணிச்சலான தலைமைத்துவமும் உயிர்களைக் காக்கும் என்பதை உணர்த்தும் நாடகம்."
  },
  "c9_eng_u3_p2": {
    "id": "sum_c9_eng_u3_p2",
    "chapterId": "c9_eng_u3_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "A simple jab with a knife or hacking branches will not destroy a tree.",
      "The wounded bark heals, and fresh miniature twigs sprout from the stump.",
      "Complete destruction requires uprooting the root anchored deep in the earth.",
      "Exposed roots scorch, choke, and harden until death is complete."
    ],
    "keyPointsTa": [
      "கிளையை வெட்டுவதால் மரம் இறந்துவிடாது.",
      "காயம்பட்ட பட்டை ஆறி மீண்டும் பசுந்தளிர்கள் முளைக்கும்.",
      "பூமியின் வேரைப் பிடுங்கி வெயிலில் காய வைத்தால் மட்டுமே அழியும்.",
      "சுற்றுச்சூழலைப் பாதுகாக்க வேண்டும் என்ற விழிப்புணர்வை ஏற்படுத்துகிறது."
    ],
    "simpleExplanationEn": "A graphic, powerful environmental poem exposing the cruelty of deforestation and the stubborn resilience of nature.",
    "simpleExplanationTa": "இயற்கையின் அபாரமான வாழ்வாற்றலையும், காடழிப்பின் கொடுமையையும் உணர்த்தும் சூழலியல் கவிதை."
  },
  "c9_eng_u3_s1": {
    "id": "sum_c9_eng_u3_s1",
    "chapterId": "c9_eng_u3_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "A devastating earthquake destroyed Brij’s village in the Garhwal Himalayas.",
      "An army officer miraculously rescued Brij’s baby sister Bhuli from the rubble.",
      "Brij serves free tea to tired travelers on the highway.",
      "His selfless service is a living tribute of gratitude to the officer who saved his family."
    ],
    "keyPointsTa": [
      "கார்வால் நிலநடுக்கத்தில் பிரிஜின் கிராமமே அழிந்து போனது.",
      "ராணுவ அதிகாரி ஒருவரின் முயற்சியால் தங்கை பூலி உயிருடன் மீட்கப்பட்டாள்.",
      "நெடுஞ்சாலையில் பயணிப்போருக்குப் பிரிஜ் இலவசமாகத் தேநீர் வழங்குகிறான்.",
      "மனிதநேயத்திற்குச் செலுத்தும் நன்றிக்கடனாக அவனது சேவை விளங்குகிறது."
    ],
    "simpleExplanationEn": "A touching story of survival and endless gratitude, showing how an act of kindness can inspire a lifetime of generosity.",
    "simpleExplanationTa": "நிலநடுக்கத்தின் கோரத் தாண்டவத்தையும், தனக்கு உதவிய மனிதநேயத்திற்கு வாழ்நாள் முழுவதும் நன்றிக்கடன் செலுத்தும் சிறுவனின் கதையையும் விவரிக்கிறது."
  },
  "c9_eng_u4_p1": {
    "id": "sum_c9_eng_u4_p1",
    "chapterId": "c9_eng_u4_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "The narrator was caught at the docks with seventeen stolen oranges in his pockets.",
      "Policeman Pongo locked him in a cabin while fetching a witness for the prosecution.",
      "To eliminate evidence, the narrator ate all seventeen oranges—pulp, seeds, and peels.",
      "With no evidence remaining, Pongo was forced to release him."
    ],
    "keyPointsTa": [
      "துறைமுகத்தில் 17 ஆரஞ்சுப் பழங்களை மறைத்து எடுத்து வந்தபோது பிடிபட்டார்.",
      "காவலர் சாட்சியை அழைக்கச் சென்ற இடைவெளியில் சமயோசிதமாகச் செயல்பட்டார்.",
      "ஆதாரத்தை அழிக்க 17 பழங்களையும் தோல், விதைகளோடு விழுங்கினார்.",
      "ஆதாரம் இல்லாததால் காவலரால் வழக்குப் பதிவு செய்ய முடியாமல் தப்பினார்."
    ],
    "simpleExplanationEn": "A light-hearted story of a dock worker who disposed of incriminating stolen oranges by devouring every last one of them.",
    "simpleExplanationTa": "பிடிபட்ட ஆரஞ்சுப் பழங்களை முழுமையாக உண்டு, சாட்சியே இல்லாமல் தப்பித்த ஒரு தொழிலாளியின் நகைச்சுவை அனுபவம்."
  },
  "c9_eng_u4_p2": {
    "id": "sum_c9_eng_u4_p2",
    "chapterId": "c9_eng_u4_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "The spider tries to lure the fly into his web with offers of food and resting places.",
      "The fly resists until the spider flatters her sparkling eyes and gauze wings.",
      "Vanity blinds the fly, leading her straight into the spider’s trap.",
      "The poem concludes with an explicit moral warning against flatterers."
    ],
    "keyPointsTa": [
      "சிலந்தி பல கவர்ச்சியான ஆசைகளைக் காட்டி ஈயை அழைக்கிறது.",
      "ஈ தன் அழகைப் புகழ்ந்த புகழ்ச்சியில் மயங்கி வலையில் விழுகிறது.",
      "சிலந்தி ஈயைத் தன் வலைக்குள் இழுத்துக் கொன்றுவிடுகிறது.",
      "பொய்யான புகழ்ச்சியில் மயங்குவது அழிவைத் தரும் என்பதை உணர்த்துகிறது."
    ],
    "simpleExplanationEn": "A cautionary fable in verse demonstrating how hollow praise can disarm our defenses and lead to disaster.",
    "simpleExplanationTa": "பொய்யான புகழ்ச்சி மனிதனின் விவேகத்தைக் கெடுத்து ஆபத்தில் தள்ளிவிடும் என்பதை விளக்கும் கவிதை."
  },
  "c9_eng_u4_s1": {
    "id": "sum_c9_eng_u4_s1",
    "chapterId": "c9_eng_u4_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Depressed over Becky Thatcher’s illness, Tom is subjected to Aunt Polly’s quack cures.",
      "Aunt Polly doses him with fiery \"Pain-Killer\", which Tom pours into floor cracks.",
      "Tom gives a spoonful to Peter the cat, who goes into a hilarious frenzy around the room.",
      "Aunt Polly realizes the severity of the medicine and relents from forcing it on Tom."
    ],
    "keyPointsTa": [
      "டாம் சோர்வாக இருந்ததால் பாலி அத்தை அவனுக்கு வலி நிவாரணி புகட்டினார்.",
      "டாம் அந்த மருந்தை நில இடுக்கில் ஊற்றி மறைத்தான்.",
      "பூனைக்கு மருந்தை ஊட்ட, அது வீட்டில் குதித்துக் கூத்தடித்தது.",
      "தன் தவறை உணர்ந்த பாலி அத்தை டாமிற்கு மருந்து தருவதை நிறுத்தினார்."
    ],
    "simpleExplanationEn": "A delightful Mark Twain episode showing childhood mischief triumphing over well-meaning but misguided adult remedies.",
    "simpleExplanationTa": "டாம் சாயரின் குறும்புத்தனமும், தவறான மருத்துவ முறையால் ஏற்படும் நகைச்சுவையும் நிறைந்த கதை."
  },
  "c9_eng_u5_p1": {
    "id": "sum_c9_eng_u5_p1",
    "chapterId": "c9_eng_u5_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Water is the true elixir of life, sustaining all flora, fauna, and human civilization.",
      "The fertile Nile Valley stands in stark contrast to the Libyan desert solely due to water.",
      "Soil erosion threatens agriculture; terracing, contour bunds, and tree planting combat it.",
      "Rainwater harvesting and water conservation are vital imperatives for India’s economy."
    ],
    "keyPointsTa": [
      "தண்ணீரே உலக உயிர்களை வாழ வைக்கும் உண்மையான அமிர்தம்.",
      "நைல் நதியின் நீரே எகிப்தின் வளத்திற்குக் காரணமாக உள்ளது.",
      "மண் அரிப்பைத் தடுக்க சம உயர உழவு, தடுப்பணைகள் மற்றும் மரங்கள் நடுதல் அவசியம்.",
      "மழைநீர் சேகரிப்பும் நதிநீர் பயன்பாடும் நாட்டின் முன்னேற்றத்திற்கு இன்றியமையாதவை."
    ],
    "simpleExplanationEn": "A brilliant exposition by Sir C.V. Raman explaining why water is the foundation of life and why soil and water conservation are crucial.",
    "simpleExplanationTa": "தண்ணீரின் மகத்துவத்தையும், மண் அரிப்பைத் தடுத்து நீர் மேலாண்மை செய்ய வேண்டியதன் அவசியத்தையும் நோபல் அறிஞர் விளக்கும் கட்டுரை."
  },
  "c9_eng_u5_p2": {
    "id": "sum_c9_eng_u5_p2",
    "chapterId": "c9_eng_u5_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "The river dancing over yellow pebbles mirrors innocent childhood.",
      "The swelling, brawling river over rocks mirrors impetuous youth.",
      "The deep, still river moving onward represents reflective adulthood.",
      "The river merging into the ocean represents the soul returning to eternity."
    ],
    "keyPointsTa": [
      "கற்கள் மீது துள்ளி ஓடும் சிற்றாறு மழலைப் பருவத்தைக் குறிக்கிறது.",
      "வேகமாகப் பாயும் ஆறு துடிப்புமிக்க இளமைப் பருவத்தைக் குறிக்கிறது.",
      "அமைதியாக ஓடும் ஆழமான ஆறு முதிர்ந்த நடுவயதைக் குறிக்கிறது.",
      "கடலில் கலக்கும் நதி நித்தியமான வாழ்வை அடையும் ஆன்மாவைக் குறிக்கிறது."
    ],
    "simpleExplanationEn": "A lyrical comparison between the flow of a river and the unfolding stages of human existence from birth to eternity.",
    "simpleExplanationTa": "ஆற்றின் ஓட்டத்தை மனித வாழ்வின் பிறப்பு முதல் இறப்பு வரையிலான பருவங்களோடு ஒப்பிடும் அழகிய தத்துவக் கவிதை."
  },
  "c9_eng_u5_s1": {
    "id": "sum_c9_eng_u5_s1",
    "chapterId": "c9_eng_u5_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Little Cyclone, an orphaned grizzly cub from British Columbia, arrived at the New York Zoo.",
      "Resident bullies tested every new cub entering the nursery enclosure.",
      "Little Cyclone struck a swift, fierce counter-blow, defending his space fearlessly.",
      "His steadfast courage earned him permanent respect among all bears."
    ],
    "keyPointsTa": [
      "கனடாவிலிருந்து அனாதையான லிட்டில் சைக்ளோன் கரடிக்குட்டி நியூயார்க் பூங்காவுக்கு வந்தது.",
      "அங்கிருந்த பெரிய கரடிகள் புதிய கரடிகளை மிரட்டிப் பணிய வைக்க முயன்றன.",
      "லிட்டில் சைக்ளோன் துணிவுடன் எதிர்த்து நின்று பலமான பதிலடி கொடுத்தது.",
      "அதன் வீரத்தைக் கண்டு அனைத்துக் கரடிகளும் அதற்கு மரியாதை தந்தன."
    ],
    "simpleExplanationEn": "The inspiring true story of a small grizzly cub whose indomitable courage and self-respect subdued every bully in the yard.",
    "simpleExplanationTa": "அளவால் சிறியதாக இருந்தாலும், அஞ்சா நெஞ்சமும் சுயமரியாதையும் கொண்ட கரடிக்குட்டி மற்ற விலங்குகளை அடக்கிய உண்மைக்கதை."
  },
  "c9_eng_u6_p1": {
    "id": "sum_c9_eng_u6_p1",
    "chapterId": "c9_eng_u6_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Srinivasa Ramanujan was an extraordinary self-taught mathematical prodigy from Tamil Nadu.",
      "In 1913, his letter to G.H. Hardy opened the doors to Trinity College, Cambridge.",
      "He became a Fellow of the Royal Society (FRS) in recognition of his groundbreaking formulas.",
      "His birthday, December 22, is celebrated across India as National Mathematics Day."
    ],
    "keyPointsTa": [
      "சீனிவாச ராமானுஜன் தமிழகம் தந்த உலகப் புகழ்பெற்ற கணித மேதை ஆவார்.",
      "1913-இல் பேராசிரியர் ஹார்டிக்கு எழுதிய கடிதம் அவரது வாழ்க்கையை மாற்றியது.",
      "ராயல் சொசைட்டியின் ஃபெலோ (FRS) கௌரவம் பெற்ற முதல் இந்தியர்களில் ஒருவர்.",
      "டிசம்பர் 22-ஆம் நாள் தேசிய கணித தினமாகக் கொண்டாடப்படுகிறது."
    ],
    "simpleExplanationEn": "The inspiring biography of Srinivasa Ramanujan, who overcame extreme poverty and illness to reshape modern number theory and mathematics.",
    "simpleExplanationTa": "வறுமையையும் நோயையும் வென்று, பிரபஞ்சக் கணிதத்தில் புதுப்பாதையை உருவாக்கிய மேதை சீனிவாச ராமானுஜனின் வாழ்க்கை வரலாறு."
  },
  "c9_eng_u6_p2": {
    "id": "sum_c9_eng_u6_p2",
    "chapterId": "c9_eng_u6_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "A comet speeds through the heavens faster than a cheetah with a mammoth tail.",
      "Passing near the sun causes ice to sublimate into a glowing trail.",
      "Comet dust entering the atmosphere might have provided seeds for primordial life on Earth.",
      "The comet remains one of the grandest celestial spectacles in nature."
    ],
    "keyPointsTa": [
      "சிறுத்தையை விட வேகமாக நீண்ட வாலுடன் விண்வெளியில் பாய்கிறது.",
      "சூரியனின் வெப்பத்தால் ஒளிரும் வால் உருவாகிறது.",
      "வால்நட்சத்திரத்தின் தூசியே பூமியில் உயிர்கள் தோன்றக் காரணமாக இருந்திருக்கலாம்.",
      "வானில் தோன்றும் மிக அற்புதமான காட்சிகளில் இதுவும் ஒன்றாகும்."
    ],
    "simpleExplanationEn": "A poem exploring the majestic spectacle of comets and their possible role in seeding life on Earth.",
    "simpleExplanationTa": "வால்நட்சத்திரத்தின் பேரழகையும், பூமியில் உயிரினங்கள் தோன்றுவதற்கு அது ஆற்றிய பங்கையும் விவரிக்கும் கவிதை."
  },
  "c9_eng_u6_s1": {
    "id": "sum_c9_eng_u6_s1",
    "chapterId": "c9_eng_u6_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "An astronaut on the Moon prepares for a deep interstellar voyage.",
      "He listens to a recorded message from his mother describing nature on Earth.",
      "Her vivid descriptions of rain, flowers, and streams awaken profound emotion.",
      "He realizes that Mother Earth is the immortal home of humankind."
    ],
    "keyPointsTa": [
      "நிலவில் உள்ள விண்வெளி வீரர் விண்மீன் பயணத்திற்குத் தயாராகிறார்.",
      "பூமியிலிருந்து தாய் அனுப்பிய ஆடியோ பதிவைக் கேட்கிறார்.",
      "பூமியின் மழை, நதிகள் மற்றும் மலர்களின் எழிலை தாய் விவரிக்கிறாள்.",
      "பூமித்தாயே மனிதகுலத்தின் வாழ்வாதாரம் என்பதை உணர்கிறார்."
    ],
    "simpleExplanationEn": "A lyrical science fiction tale exploring the unbreakable bond between an astronaut and his home planet Earth through his mother’s voice.",
    "simpleExplanationTa": "விண்வெளியில் இருக்கும் ஒரு மகனுக்குத் தன் தாயின் குரல் மூலம் பூமித்தாயின் மகத்துவத்தை உணர்த்தும் அறிவியல் சிறுகதை."
  },
  "c9_eng_u7_p1": {
    "id": "sum_c9_eng_u7_p1",
    "chapterId": "c9_eng_u7_p1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "Nehru wrote this letter from Naini Central Prison on Indira’s 13th birthday in 1930.",
      "He emphasized that great historical movements transform ordinary people into heroes.",
      "He recalled Joan of Arc and Mahatma Gandhi’s moral leadership in the independence struggle.",
      "He advised Indira never to act in secret, as secrecy breeds fear and dishonesty."
    ],
    "keyPointsTa": [
      "1930-இல் நைனி சிறையிலிருந்து இந்திராவுக்கு நேரு இக்கடிதத்தை எழுதினார்.",
      "உன்னதமான நோக்கம் சாதாரண மக்களையும் வீரர்களாக மாற்றும் என்றார்.",
      "மகாத்மா காந்தி மற்றும் ஜோன் ஆஃப் ஆர்க்கின் தியாகத்தை நினைவூட்டினார்.",
      "ரகசியமாக எதையும் செய்யாமல் துணிவுடன் நேர்மையாக வாழ வழிகாட்டினார்."
    ],
    "simpleExplanationEn": "A historic fatherly letter from prison inspiring young Indira to live fearlessly, act with uncompromising integrity, and serve the nation.",
    "simpleExplanationTa": "சிறையிலிருந்து நேரு தன் மகளுக்கு எழுதிய கடிதம் மூலம் அச்சமின்மை, நேர்மை மற்றும் நாட்டுப்பற்றை உணர்த்தும் வரலாற்று ஆவணம்."
  },
  "c9_eng_u7_p2": {
    "id": "sum_c9_eng_u7_p2",
    "chapterId": "c9_eng_u7_p2",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "The happiest people are those in families that stick closely together.",
      "Brothers and sisters who drift away in search of solitary pursuits often find emptiness.",
      "Shared fireside laughter and mutual support create a sanctuary against life’s hardships.",
      "Family unity provides lasting fulfillment superior to worldly honors."
    ],
    "keyPointsTa": [
      "ஒற்றுமையாக வாழும் குடும்பங்களே உலகில் மிகவும் மகிழ்ச்சியானவை.",
      "தனித்து வாழும் மனிதர்கள் இறுதியில் தனிமையையே உணர்கின்றனர்.",
      "குடும்பத்தின் ஆதரவே வாழ்வின் துன்பங்களைத் தாங்கும் கேடயமாகும்.",
      "ஒற்றுமையே உண்மையான செல்வம் என்பதை வலியுறுத்துகிறது."
    ],
    "simpleExplanationEn": "A heartfelt tribute to the warmth, laughter, and lifelong security found in united families.",
    "simpleExplanationTa": "குடும்ப ஒற்றுமை, அன்பு மற்றும் பகிர்வின் மூலம் கிடைக்கும் அளவற்ற மகிழ்ச்சியைப் போற்றும் கவிதை."
  },
  "c9_eng_u7_s1": {
    "id": "sum_c9_eng_u7_s1",
    "chapterId": "c9_eng_u7_s1",
    "lastUpdatedAt": "21 Sep 2026",
    "lastUpdatedAtTa": "21 செப் 2026",
    "keyPointsEn": [
      "On Christmas Eve 1914, German and British troops initiated an informal ceasefire.",
      "Soldiers sang carols across trenches before meeting unarmed in No Man’s Land.",
      "They shared food, gifts, family photographs, and played football together.",
      "The truce proved that universal human brotherhood is more powerful than war."
    ],
    "keyPointsTa": [
      "1914 கிறிஸ்துமஸ் இரவில் வீரர்கள் தன்னிச்சையாகப் போர் நிறுத்தத்தை மேற்கொண்டனர்.",
      "ஆயுதங்களின்றி நடுநிலைப் பகுதியில் சந்தித்துப் பரிசுகளையும் அன்பையும் பரிமாறினர்.",
      "ஒன்றாகக் கூடிப் பாடி, கால்பந்து விளையாடி மகிழ்ந்தனர்.",
      "போரை விட அமைதியும் சகோதரத்துவமுமே மேலானது என்பதை இது நிரூபித்தது."
    ],
    "simpleExplanationEn": "A poignant, true account of the 1914 Christmas Truce when enemies put down their rifles and celebrated peace in the midst of World War I.",
    "simpleExplanationTa": "முதல் உலகப் போரின் போது வீரர்கள் ஆயுதங்களை எறிந்துவிட்டு, கிறிஸ்துமஸ் திருநாளில் சகோதரத்துவத்தைக் கொண்டாடிய மெய்சிலிர்க்கும் உண்மைக்கதை."
  }
};

export const CLASS_9_ENGLISH_QUIZZES: Record<string, ChapterQuiz> = {
  "c9_eng_u1_p1": {
    "id": "quiz_c9_eng_u1_p1",
    "chapterId": "c9_eng_u1_p1",
    "titleEn": "Prose: Learning the Game (Sachin Tendulkar): Mastery Quiz",
    "titleTa": "உரைநடை: ஆட்டத்தைக் கற்றல் (சச்சின் டெண்டுல்கர்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u1_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Who was Sachin Tendulkar’s childhood cricket coach?",
        "questionTa": "சச்சின் டெண்டுல்கரின் குழந்தைப் பருவ கிரிக்கெட் பயிற்சியாளர் யார்?",
        "optionsEn": [
          "Ramakant Achrekar",
          "Sunil Gavaskar",
          "Ajit Tendulkar",
          "Kapil Dev"
        ],
        "optionsTa": [
          "ரமாகாந்த் அச்ரேக்கர்",
          "சுனில் கவாஸ்கர்",
          "அஜித் டெண்டுல்கர்",
          "கபில் தேவ்"
        ],
        "correctAnswer": "Ramakant Achrekar",
        "explanationEn": "Ramakant Achrekar was his renowned coach at Shivaji Park.",
        "explanationTa": "சிவாஜி பார்க்கில் சச்சினுக்குப் பயிற்சி அளித்தவர் ரமாகாந்த் அச்ரேக்கர்."
      },
      {
        "id": "c9_eng_u1_p1_q2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "How many one-rupee coins did Sachin win during practice sessions?",
        "questionTa": "பயிற்சியின் போது சச்சின் எத்தனை ஒரு ரூபாய் நாணயங்களை வென்றார்?",
        "optionsEn": [
          "13",
          "10",
          "15",
          "21"
        ],
        "optionsTa": [
          "13",
          "10",
          "15",
          "21"
        ],
        "correctAnswer": "13",
        "explanationEn": "Sachin won 13 coins, which he treasures as prized possessions.",
        "explanationTa": "சச்சின் 13 நாணயங்களை வென்று பொக்கிஷமாகப் பாதுகாத்து வருகிறார்."
      }
    ]
  },
  "c9_eng_u1_p2": {
    "id": "quiz_c9_eng_u1_p2",
    "chapterId": "c9_eng_u1_p2",
    "titleEn": "Poem: Stopping by Woods on a Snowy Evening (Robert Frost): Mastery Quiz",
    "titleTa": "கவிதை: பனிப்பொழிவு மாலையில் காட்டின் ஓரம் (ராபர்ட் ஃப்ராஸ்ட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u1_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Why does the little horse shake its harness bells?",
        "questionTa": "குதிரை தன் கழுத்து மணியை ஏன் ஆட்டியது?",
        "optionsEn": [
          "To ask if there is some mistake",
          "Because it saw a wolf",
          "Because it was hungry",
          "To wake the villagers"
        ],
        "optionsTa": [
          "நின்றதில் ஏதேனும் தவறா என்று கேட்க",
          "ஓநாயைக் கண்டதால்",
          "பசியால்",
          "மக்களை எழுப்ப"
        ],
        "correctAnswer": "To ask if there is some mistake",
        "explanationEn": "The horse wonders why they have stopped far from any farmhouse.",
        "explanationTa": "பண்ணை வீடு இல்லாத காட்டின் நடுவே நின்றதால் குதிரை மணியை ஆட்டியது."
      },
      {
        "id": "c9_eng_u1_p2_q2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "What do the lines \"And miles to go before I sleep\" symbolize?",
        "questionTa": "\"And miles to go before I sleep\" என்ற வரிகள் எதனைக் குறிக்கின்றன?",
        "optionsEn": [
          "Life’s responsibilities and promises to fulfill",
          "A long night of walking",
          "Cold winter weather",
          "Losing one’s road in the woods"
        ],
        "optionsTa": [
          "வாழ்வில் நிறைவேற்ற வேண்டிய கடமைகளும் பொறுப்புகளும்",
          "நீண்ட இரவு நடை",
          "குளிர்காலம்",
          "காட்டில் வழி தவறுதல்"
        ],
        "correctAnswer": "Life’s responsibilities and promises to fulfill",
        "explanationEn": "Sleep represents rest or death, while miles symbolize life duties.",
        "explanationTa": "வாழ்க்கைக் கடமைகளை நிறைவேற்ற வேண்டிய அவசியத்தை இது உணர்த்துகிறது."
      }
    ]
  },
  "c9_eng_u1_s1": {
    "id": "quiz_c9_eng_u1_s1",
    "chapterId": "c9_eng_u1_s1",
    "titleEn": "Supplementary: The Envious Neighbour (Japanese Folk Tale): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: பொறாமை கொண்ட பக்கத்து வீட்டுக்காரர்: மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u1_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What did the faithful dog Shiro help the kind old couple find?",
        "questionTa": "விசுவாசமுள்ள நாய் முதியவருக்கு எதனைக் கண்டுபிடிக்க உதவியது?",
        "optionsEn": [
          "A treasure of gold coins",
          "A buried sword",
          "A secret well",
          "Ancient books"
        ],
        "optionsTa": [
          "தங்க நாணயங்களின் புதையல்",
          "புதையுண்ட வாள்",
          "ரகசிய கிணறு",
          "பழங்கால நூல்கள்"
        ],
        "correctAnswer": "A treasure of gold coins",
        "explanationEn": "Shiro pointed to a spot where buried gold and silver were discovered.",
        "explanationTa": "நாய் காட்டிய இடத்தில் தங்க, வெள்ளிப் புதையல் கிடைத்தது."
      },
      {
        "id": "c9_eng_u1_s1_q2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "How did the kind old man make dead cherry trees blossom?",
        "questionTa": "முதியவர் காய்ந்த செர்ரி மரங்களை எவ்வாறு மலரச் செய்தார்?",
        "optionsEn": [
          "By sprinkling ashes from the burned mortar",
          "By watering them with river water",
          "By singing a hymn",
          "By lighting lanterns"
        ],
        "optionsTa": [
          "எரிக்கப்பட்ட உலக்கையின் சாம்பலைத் தூவி",
          "ஆற்று நீரை ஊற்றி",
          "பாடல் பாடி",
          "விளக்கேற்றி"
        ],
        "correctAnswer": "By sprinkling ashes from the burned mortar",
        "explanationEn": "The ashes of the mortar had the magical power to make dead trees bloom.",
        "explanationTa": "எரிக்கப்பட்ட உலக்கையின் சாம்பல் காய்ந்த மரங்களை மலரச் செய்தது."
      }
    ]
  },
  "c9_eng_u2_p1": {
    "id": "quiz_c9_eng_u2_p1",
    "chapterId": "c9_eng_u2_p1",
    "titleEn": "Prose: I Can't Climb Trees Anymore (Ruskin Bond): Mastery Quiz",
    "titleTa": "உரைநடை: என்னால் இனி மரங்களில் ஏற முடியாது (ரஸ்கின் பாண்ட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u2_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What heirloom did the narrator hide in the jackfruit tree years ago?",
        "questionTa": "பலா மரப் பொந்தில் மறைத்து வைக்கப்பட்ட தாத்தாவின் பொருள் எது?",
        "optionsEn": [
          "A German Iron Cross",
          "A golden watch",
          "A silver coin",
          "A wooden flute"
        ],
        "optionsTa": [
          "ஜெர்மன் இரும்புச் சிலுவை",
          "தங்கக் கடிகாரம்",
          "வெள்ளி நாணயம்",
          "புல்லாங்குழல்"
        ],
        "correctAnswer": "A German Iron Cross",
        "explanationEn": "His grandfather had received a German Iron Cross during World War I.",
        "explanationTa": "முதல் உலகப் போரில் கிடைத்த ஜெர்மன் இரும்புச் சிலுவையை மறைத்து வைத்திருந்தார்."
      },
      {
        "id": "c9_eng_u2_p1_q2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "Why did the narrator give the cross to the young girl?",
        "questionTa": "சிலுவையை ஏன் கதைசொல்லி சிறுமியிடமே கொடுத்துவிட்டார்?",
        "optionsEn": [
          "He realized he came only to revisit his youth",
          "It was too heavy to carry",
          "The girl demanded it",
          "It was not valuable"
        ],
        "optionsTa": [
          "இளமையின் நினைவை மீட்டெடுக்கவே வந்ததை உணர்ந்ததால்",
          "சுமக்க கடினமாக இருந்ததால்",
          "சிறுமி கேட்டதால்",
          "மதிப்பில்லாததால்"
        ],
        "correctAnswer": "He realized he came only to revisit his youth",
        "explanationEn": "He valued the emotional remembrance of youth far above the physical object.",
        "explanationTa": "பொருட்களை விட நினைவுகளே முக்கியம் என்பதை அவர் உணர்ந்தார்."
      }
    ]
  },
  "c9_eng_u2_p2": {
    "id": "quiz_c9_eng_u2_p2",
    "chapterId": "c9_eng_u2_p2",
    "titleEn": "Poem: A Poison Tree (William Blake): Mastery Quiz",
    "titleTa": "கவிதை: நச்சு மரம் (வில்லியம் பிளேக்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u2_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What fruit did the poison tree bear in William Blake’s poem?",
        "questionTa": "நச்சு மரம் ஈன்ற கனி எது?",
        "optionsEn": [
          "A bright apple",
          "A golden pear",
          "A red pomegranate",
          "A purple grape"
        ],
        "optionsTa": [
          "பளபளப்பான ஆப்பிள்",
          "தங்க பேரிக்காய்",
          "மாதுளை",
          "திராட்சை"
        ],
        "correctAnswer": "A bright apple",
        "explanationEn": "The malice grew into an alluring, bright poisonous apple.",
        "explanationTa": "அந்த மரம் ஒரு கவர்ச்சியான விஷ ஆப்பிளை ஈன்றது."
      }
    ]
  },
  "c9_eng_u2_s1": {
    "id": "quiz_c9_eng_u2_s1",
    "chapterId": "c9_eng_u2_s1",
    "titleEn": "Supplementary: The Fun They Had (Isaac Asimov): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: அவர்கள் அடைந்த மகிழ்ச்சி (ஐசக் அசிமோவ்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u2_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "In which year is Isaac Asimov’s story \"The Fun They Had\" set?",
        "questionTa": "இக்கதை எந்த ஆண்டை மையமாகக் கொண்டு அமைக்கப்பட்டுள்ளது?",
        "optionsEn": [
          "2157",
          "2050",
          "2026",
          "2200"
        ],
        "optionsTa": [
          "2157",
          "2050",
          "2026",
          "2200"
        ],
        "correctAnswer": "2157",
        "explanationEn": "Margie writes her diary entry on 17 May 2157.",
        "explanationTa": "மார்கி 17 மே 2157 அன்று தன் நாட்குறிப்பில் எழுதுகிறாள்."
      }
    ]
  },
  "c9_eng_u3_p1": {
    "id": "quiz_c9_eng_u3_p1",
    "chapterId": "c9_eng_u3_p1",
    "titleEn": "Prose: Old Man River (Dorothy Deming): Mastery Quiz",
    "titleTa": "உரைநடை: வெள்ளப்பெருக்கு - ஓல்ட் மேன் ரிவர் (நாடகம்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u3_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Who took charge of emergency measures during the flood in \"Old Man River\"?",
        "questionTa": "வெள்ளத்தின் போது அவசரப் பணிகளுக்குத் தலைமை தாங்கியவர் யார்?",
        "optionsEn": [
          "Jim Hall",
          "Amy Marshall",
          "Mr. Peters",
          "Rose Field"
        ],
        "optionsTa": [
          "ஜிம் ஹால்",
          "ஏமி மார்ஷல்",
          "மிஸ்டர் பீட்டர்ஸ்",
          "ரோஸ் ஃபீல்ட்"
        ],
        "correctAnswer": "Jim Hall",
        "explanationEn": "Jim demonstrated remarkable presence of mind and organized survival tasks.",
        "explanationTa": "ஜிம் ஹால் சமயோசிதமாகச் செயல்பட்டு அனைவரையும் வழிநடத்தினான்."
      }
    ]
  },
  "c9_eng_u3_p2": {
    "id": "quiz_c9_eng_u3_p2",
    "chapterId": "c9_eng_u3_p2",
    "titleEn": "Poem: On Killing a Tree (Gieve Patel): Mastery Quiz",
    "titleTa": "கவிதை: மரத்தைக் கொல்வது எப்படி (ஜீவ் பட்டேல்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u3_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "According to Gieve Patel, what is the most vital part of the tree that must be uprooted?",
        "questionTa": "மரத்தை அழிக்க அதன் எந்தப் பகுதியை வேரோடு பிடுங்க வேண்டும்?",
        "optionsEn": [
          "The root anchored in the earth",
          "The top leaves",
          "The side branches",
          "The outer bark"
        ],
        "optionsTa": [
          "பூமியில் நிலைபெற்றுள்ள வேர்",
          "உச்சி இலைகள்",
          "பக்கக் கிளைகள்",
          "வெளிப்புறப் பட்டை"
        ],
        "correctAnswer": "The root anchored in the earth",
        "explanationEn": "The root is the sensitive source of the tree’s life and strength.",
        "explanationTa": "மரத்தின் வாழ்வாதாரமான வேரைப் பிடுங்கினால் மட்டுமே அது அழியும்."
      }
    ]
  },
  "c9_eng_u3_s1": {
    "id": "quiz_c9_eng_u3_s1",
    "chapterId": "c9_eng_u3_s1",
    "titleEn": "Supplementary: Earthquake (M.S. Mahadevan): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: நிலநடுக்கம் (எம்.எஸ். மகாதேவன்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u3_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Who was rescued alive from the earthquake rubble in Malthi?",
        "questionTa": "இடிபாடுகளிலிருந்து உயிருடன் மீட்கப்பட்ட குழந்தை யார்?",
        "optionsEn": [
          "Brij’s baby sister, Bhuli",
          "Brij’s grandmother",
          "The tea stall owner",
          "The village headman"
        ],
        "optionsTa": [
          "பிரிஜின் தங்கை பூலி",
          "பிரிஜின் பாட்டி",
          "தேநீர்க் கடைக்காரர்",
          "கிராமத் தலைவர்"
        ],
        "correctAnswer": "Brij’s baby sister, Bhuli",
        "explanationEn": "Baby Bhuli was pulled out alive after hours of digging by the Army rescue team.",
        "explanationTa": "ராணுவக் குழுவினர் தீவிரமாகத் தோண்டி பூலியை உயிருடன் மீட்டனர்."
      }
    ]
  },
  "c9_eng_u4_p1": {
    "id": "quiz_c9_eng_u4_p1",
    "chapterId": "c9_eng_u4_p1",
    "titleEn": "Prose: Seventeen Oranges (Bill Naughton): Mastery Quiz",
    "titleTa": "உரைநடை: பதினேழு ஆரஞ்சுகள் (பில் நாட்டன்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u4_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "How did the narrator get rid of the seventeen oranges?",
        "questionTa": "பதினேழு ஆரஞ்சுப் பழங்களை கதைசொல்லி எவ்வாறு அப்புறப்படுத்தினார்?",
        "optionsEn": [
          "He ate all of them including seeds and peels",
          "He threw them out of the window",
          "He hid them under the floor",
          "He gave them to another prisoner"
        ],
        "optionsTa": [
          "விதை, தோல் உட்பட அனைத்தையும் தின்று தீர்த்தார்",
          "ஜன்னல் வழியே எறிந்தார்",
          "தரைக்கடியில் மறைத்தார்",
          "மற்றொரு கைதியிடம் கொடுத்தார்"
        ],
        "correctAnswer": "He ate all of them including seeds and peels",
        "explanationEn": "He swallowed every trace of the oranges so no evidence remained.",
        "explanationTa": "ஆதாரத்தை அழிக்கப் பழங்கள் அனைத்தையும் முழுமையாக விழுங்கினார்."
      }
    ]
  },
  "c9_eng_u4_p2": {
    "id": "quiz_c9_eng_u4_p2",
    "chapterId": "c9_eng_u4_p2",
    "titleEn": "Poem: The Spider and the Fly (Mary Botham Howitt): Mastery Quiz",
    "titleTa": "கவிதை: சிலந்தியும் ஈயும் (மேரி போதம் ஹோவிட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u4_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What ultimately lured the fly into the spider’s web?",
        "questionTa": "ஈ சிலந்தியின் வலைக்குள் செல்லக் காரணமாக அமைந்தது எது?",
        "optionsEn": [
          "Flattery about her eyes and wings",
          "Delicious food in the pantry",
          "A warm bed to sleep on",
          "A mirror to look into"
        ],
        "optionsTa": [
          "அதன் அழகைப் புகழ்ந்த போலிப் புகழ்ச்சி",
          "சுவையான உணவு",
          "மென்மையான படுக்கை",
          "கண்ணாடி"
        ],
        "correctAnswer": "Flattery about her eyes and wings",
        "explanationEn": "The fly succumbed to vanity when the spider flattered her beauty.",
        "explanationTa": "தன் அழகைப் புகழ்ந்து பேசிய வஞ்சகப் புகழ்ச்சியில் ஈ மயங்கிப் போனது."
      }
    ]
  },
  "c9_eng_u4_s1": {
    "id": "quiz_c9_eng_u4_s1",
    "chapterId": "c9_eng_u4_s1",
    "titleEn": "Supplementary: The Cat and the Pain-Killer (Mark Twain): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: பூனையும் வலி நிவாரணியும் (மார்க் ட்வைன்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u4_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Who drank the Pain-Killer and leaped frantically around the room?",
        "questionTa": "வலி நிவாரணியைக் குடித்துவிட்டு வீடு முழுவதும் குதித்துக் கூத்தடித்தது எது?",
        "optionsEn": [
          "Peter the cat",
          "Tom Sawyer",
          "Aunt Polly",
          "Huckleberry Finn"
        ],
        "optionsTa": [
          "பீட்டர் என்ற பூனை",
          "டாம் சாயர்",
          "பாலி அத்தை",
          "ஹக்கிள்பெர்ரி ஃபின்"
        ],
        "correctAnswer": "Peter the cat",
        "explanationEn": "Peter somersaulted in frantic excitement after swallowing the fiery liquid.",
        "explanationTa": "காரமான மருந்தை உட்கொண்ட பீட்டர் பூனை அறை முழுவதும் துள்ளிக் குதித்தது."
      }
    ]
  },
  "c9_eng_u5_p1": {
    "id": "quiz_c9_eng_u5_p1",
    "chapterId": "c9_eng_u5_p1",
    "titleEn": "Prose: Water - The Elixir of Life (Sir C.V. Raman): Mastery Quiz",
    "titleTa": "உரைநடை: நீர் - வாழ்வின் அமிர்தம் (சர் சி.வி. இராமன்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u5_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What creates the sharp contrast between the Libyan Desert and the Nile Valley in Egypt?",
        "questionTa": "லிபியப் பாலைவனத்திற்கும் எகிப்தின் நைல் பள்ளத்தாக்கிற்கும் இடையிலான மாற்றத்திற்குக் காரணம் எது?",
        "optionsEn": [
          "The water of the River Nile",
          "A range of high mountains",
          "Abundant oil reserves",
          "Different soil chemicals"
        ],
        "optionsTa": [
          "நைல் நதியின் நீர்",
          "உயர்ந்த மலைத்தொடர்",
          "எண்ணெய் வளம்",
          "மண்ணின் வேதிப்பொருட்கள்"
        ],
        "correctAnswer": "The water of the River Nile",
        "explanationEn": "The life-giving waters of the River Nile transform Egypt into a fertile civilization.",
        "explanationTa": "நைல் நதியின் நீரே அந்த நிலத்தை வளமிக்கதாக மாற்றியுள்ளது."
      }
    ]
  },
  "c9_eng_u5_p2": {
    "id": "quiz_c9_eng_u5_p2",
    "chapterId": "c9_eng_u5_p2",
    "titleEn": "Poem: The River (Caroline Ann Bowles): Mastery Quiz",
    "titleTa": "கவிதை: நதி (கரோலின் ஆன் பௌல்ஸ்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u5_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "In Caroline Ann Bowles’s poem, what does the broad, still river represent?",
        "questionTa": "ஆழமாகவும் அமைதியாகவும் செல்லும் ஆறு மனிதனின் எந்தப் பருவத்தைக் குறிக்கிறது?",
        "optionsEn": [
          "Prime of manhood / mature adulthood",
          "Innocent childhood",
          "Wild youth",
          "Infancy"
        ],
        "optionsTa": [
          "முதிர்ந்த நடுவயதுப் பருவம்",
          "மழலைப் பருவம்",
          "துள்ளும் இளமை",
          "குழந்தைப் பருவம்"
        ],
        "correctAnswer": "Prime of manhood / mature adulthood",
        "explanationEn": "The calm, deep water symbolizes thoughtful, mature adulthood.",
        "explanationTa": "அமைதியான ஆழம் மனிதனின் முதிர்ந்த அறிவார்ந்த பருவத்தைக் குறிக்கிறது."
      }
    ]
  },
  "c9_eng_u5_s1": {
    "id": "quiz_c9_eng_u5_s1",
    "chapterId": "c9_eng_u5_s1",
    "titleEn": "Supplementary: Little Cyclone: The Story of a Grizzly Cub (William T. Hornaday): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: லிட்டில் சைக்ளோன் - கரடிக்குட்டியின் கதை: மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u5_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Where was Little Cyclone the grizzly cub born?",
        "questionTa": "லிட்டில் சைக்ளோன் கரடிக்குட்டி எங்கு பிறந்தது?",
        "optionsEn": [
          "Upper Kootenay, British Columbia",
          "Yellowstone National Park",
          "Siberian Tundra",
          "Himalayan Foothills"
        ],
        "optionsTa": [
          "கனடாவின் அப்பர் கூட்டேனே பகுதி",
          "யெல்லோஸ்டோன் தேசிய பூங்கா",
          "சைபீரியப் பகுதி",
          "இமயமலை அடிவாரம்"
        ],
        "correctAnswer": "Upper Kootenay, British Columbia",
        "explanationEn": "He was a true grizzly cub from the Upper Kootenay region of Canada.",
        "explanationTa": "கனடாவின் பிரிட்டிஷ் கொலம்பியாவில் அப்பர் கூட்டேனே பகுதியில் அது பிறந்தது."
      }
    ]
  },
  "c9_eng_u6_p1": {
    "id": "quiz_c9_eng_u6_p1",
    "chapterId": "c9_eng_u6_p1",
    "titleEn": "Prose: From Zero to Infinity - Srinivasa Ramanujan: Mastery Quiz",
    "titleTa": "உரைநடை: பூஜ்ஜியத்திலிருந்து முடிவிலி வரை - சீனிவாச ராமானுஜன்: மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u6_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Why is the number 1729 famous as the Hardy-Ramanujan number?",
        "questionTa": "1729 என்ற எண் ஹார்டி-ராமானுஜன் எண் என ஏன் அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Smallest number expressible as the sum of two cubes in two different ways",
          "It was Ramanujan’s roll number at Cambridge",
          "It represents the year Ramanujan was born",
          "It was the total number of theorems he published"
        ],
        "optionsTa": [
          "இரு கனங்களின் கூடுதலாக இருவேறு வழிகளில் எழுதப்படும் மிகச்சிறிய எண்",
          "ராமானுஜனின் தேர்வு எண்",
          "அவர் பிறந்த ஆண்டு",
          "அவர் எழுதிய தேற்றங்களின் எண்ணிக்கை"
        ],
        "correctAnswer": "Smallest number expressible as the sum of two cubes in two different ways",
        "explanationEn": "1729 = 1^3 + 12^3 = 9^3 + 10^3.",
        "explanationTa": "1³ + 12³ = 9³ + 10³ = 1729 ஆகும்."
      },
      {
        "id": "c9_eng_u6_p1_q2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "On which date is National Mathematics Day celebrated in India?",
        "questionTa": "இந்தியாவில் தேசிய கணித தினம் எப்போது கொண்டாடப்படுகிறது?",
        "optionsEn": [
          "December 22",
          "October 15",
          "January 26",
          "August 15"
        ],
        "optionsTa": [
          "டிசம்பர் 22",
          "அக்டோபர் 15",
          "ஜனவரி 26",
          "ஆகஸ்ட் 15"
        ],
        "correctAnswer": "December 22",
        "explanationEn": "December 22 is Ramanujan’s birth anniversary.",
        "explanationTa": "ராமானுஜனின் பிறந்த நாளான டிசம்பர் 22 கொண்டாடப்படுகிறது."
      }
    ]
  },
  "c9_eng_u6_p2": {
    "id": "quiz_c9_eng_u6_p2",
    "chapterId": "c9_eng_u6_p2",
    "titleEn": "Poem: The Comet (Norman Littleford): Mastery Quiz",
    "titleTa": "கவிதை: வால்நட்சத்திரம் (நார்மன் லிட்டில்ஃபோர்ட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u6_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "How does the poet describe the speed of the comet in the poem?",
        "questionTa": "வால்நட்சத்திரத்தின் வேகத்தை கவிஞர் எதனுடன் ஒப்பிடுகிறார்?",
        "optionsEn": [
          "Faster than a cheetah",
          "Like a shooting arrow",
          "Slower than the moon",
          "Like a rolling boulder"
        ],
        "optionsTa": [
          "சிறுத்தையை விட வேகமாக",
          "பாயும் அம்பைப் போல",
          "நிலவை விட மெதுவாக",
          "உருளும் பாறையைப் போல"
        ],
        "correctAnswer": "Faster than a cheetah",
        "explanationEn": "The poet writes that the comet speeds \"faster than a cheetah\".",
        "explanationTa": "சிறுத்தையை விட அதிவேகமாகப் பாய்கிறது என்று கவிஞர் பாடுகிறார்."
      }
    ]
  },
  "c9_eng_u6_s1": {
    "id": "quiz_c9_eng_u6_s1",
    "chapterId": "c9_eng_u6_s1",
    "titleEn": "Supplementary: Mother's Voice (Vasil Berezhnoy): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: தாயின் குரல் (வாசில் பெரெஷ்னாய்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u6_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "Where was the astronaut stationed when listening to his mother’s voice?",
        "questionTa": "தாயின் குரலைக் கேட்கும்போது விண்வெளி வீரர் எங்கு தங்கியிருந்தார்?",
        "optionsEn": [
          "On a lunar base on the Moon",
          "On Mars",
          "On an orbital space station",
          "On planet Venus"
        ],
        "optionsTa": [
          "நிலவில் உள்ள ஆய்வு மையத்தில்",
          "செவ்வாய் கிரகத்தில்",
          "விண்வெளி நிலையத்தில்",
          "வெள்ளி கிரகத்தில்"
        ],
        "correctAnswer": "On a lunar base on the Moon",
        "explanationEn": "He was on the Moon preparing for an expedition to another star system.",
        "explanationTa": "நிலவில் இருந்தபடியே தாயின் குரல் பதிவைக் கேட்டார்."
      }
    ]
  },
  "c9_eng_u7_p1": {
    "id": "quiz_c9_eng_u7_p1",
    "chapterId": "c9_eng_u7_p1",
    "titleEn": "Prose: A Birthday Letter (Jawaharlal Nehru): Mastery Quiz",
    "titleTa": "உரைநடை: பிறந்தநாள் கடிதம் (ஜவஹர்லால் நேரு): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u7_p1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "From which prison did Jawaharlal Nehru write this birthday letter to Indira?",
        "questionTa": "நேரு இந்திராவிற்கு எந்தச் சிறையிலிருந்து பிறந்தநாள் கடிதம் எழுதினார்?",
        "optionsEn": [
          "Central Prison, Naini",
          "Tihar Jail, Delhi",
          "Cellular Jail, Andaman",
          "Yerwada Jail, Pune"
        ],
        "optionsTa": [
          "நைனி மத்திய சிறை",
          "திகார் சிறை",
          "செல்லுலார் சிறை",
          "ஏர்வாடா சிறை"
        ],
        "correctAnswer": "Central Prison, Naini",
        "explanationEn": "Nehru was imprisoned in Central Prison, Naini in October 1930.",
        "explanationTa": "1930 அக்டோபரில் நைனி மத்திய சிறையில் இருந்தபோது இக்கடிதத்தை எழுதினார்."
      }
    ]
  },
  "c9_eng_u7_p2": {
    "id": "quiz_c9_eng_u7_p2",
    "chapterId": "c9_eng_u7_p2",
    "titleEn": "Poem: The Stick-together Families (Edgar Albert Guest): Mastery Quiz",
    "titleTa": "கவிதை: இணைந்திருக்கும் குடும்பங்கள் (எட்கர் ஆல்பர்ட் கெஸ்ட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u7_p2_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "According to Edgar Albert Guest, who are the happiest people in the world?",
        "questionTa": "கவிஞரின் கூற்றுப்படி உலகில் மிகவும் மகிழ்ச்சியானவர்கள் யார்?",
        "optionsEn": [
          "The stick-together families",
          "Wealthy merchants living alone",
          "Famous travelers",
          "Military conquerors"
        ],
        "optionsTa": [
          "ஒற்றுமையாக வாழும் குடும்பங்கள்",
          "தனித்து வாழும் செல்வந்தர்கள்",
          "பயணிகள்",
          "படைத்தளபதிகள்"
        ],
        "correctAnswer": "The stick-together families",
        "explanationEn": "The poet declares that united families who share life are by far the happiest.",
        "explanationTa": "கூடி வாழும் குடும்பங்களே உண்மையான மகிழ்ச்சியைப் பெறுகின்றன."
      }
    ]
  },
  "c9_eng_u7_s1": {
    "id": "quiz_c9_eng_u7_s1",
    "chapterId": "c9_eng_u7_s1",
    "titleEn": "Supplementary: The Christmas Truce (Aaron Shepard): Mastery Quiz",
    "titleTa": "துணைப்பாடம்: கிறிஸ்துமஸ் போர் நிறுத்தம் (ஆரோன் ஷெப்பர்ட்): மாதிரி வினாடி வினா",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "c9_eng_u7_s1_q1",
        "type": "mcq",
        "difficulty": "easy",
        "questionEn": "What carol did the German soldiers sing first across the trenches on Christmas Eve 1914?",
        "questionTa": "1914 கிறிஸ்துமஸ் இரவில் ஜெர்மன் வீரர்கள் முதலில் பாடிய பாடல் எது?",
        "optionsEn": [
          "Stille Nacht (Silent Night)",
          "Jingle Bells",
          "Joy to the World",
          "Hark! The Herald Angels Sing"
        ],
        "optionsTa": [
          "சைலண்ட் நைட் (Stille Nacht)",
          "ஜிங்கிள் பெல்ஸ்",
          "ஜாய் டு தி வேர்ல்ட்",
          "ஹார்க் தி ஹெரால்டு"
        ],
        "correctAnswer": "Stille Nacht (Silent Night)",
        "explanationEn": "The Germans sang Stille Nacht, prompting the British to respond with The First Noel.",
        "explanationTa": "ஜெர்மன் வீரர்கள் சைலண்ட் நைட் பாடலைப் பாடி அமைதியைத் தொடங்கினர்."
      }
    ]
  }
};

export function getOrCreateEnglishChapterSuite(chapter: Chapter, isTa: boolean): {
  note: NoteItem;
  summary: SummaryItem;
  quiz: ChapterQuiz;
  diagram: SchematicDiagram;
  video: VideoExplainer;
} {
  const diagram = generateEnglishDiagram(chapter, isTa);
  const video = generateEnglishVideo(chapter, isTa);

  const note = CLASS_9_ENGLISH_NOTES[chapter.id] || {
    id: `note_${chapter.id}`,
    chapterId: chapter.id,
    classLevel: 9,
    subjectId: 'c9_english',
    titleEn: `${chapter.titleEn}: Study Notes`,
    titleTa: `${chapter.titleTa}: பாடக் குறிப்புகள்`,
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Mrs. Stella Aruldoss, M.A., B.Ed., PGT English',
    reviewedByRole: 'Senior State Resource Person (TNSCERT English)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published' as const,
    version: '1.0',
    changeNote: 'Official curriculum notes published.',
    changeNoteTa: 'பாடப்பகுதி குறிப்புகள் வெளியிடப்பட்டன.',
    readTimeMinutes: 5,
    bodyEn: `### 1. ${chapter.titleEn}\nComprehensive syllabus-aligned revision notes.\n\n### 2. Key Themes\nCore themes and grammar insights.\n\n### 3. Exam Guidance\nTips for quarterly, half-yearly, and annual exams.`,
    bodyTa: `### 1. ${chapter.titleTa}\nசமச்சீர் கல்விப் பாடத்திட்டத்தின் அடிப்படையிலான முழுமையான பாடக் குறிப்புகள்.\n\n### 2. மையக்கருத்து\nமுக்கியக் கருத்துகள் மற்றும் இலக்கணக் குறிப்புகள்.\n\n### 3. தேர்வு வழிகாட்டுதல்\nஅரசுத் தேர்வில் முழு மதிப்பெண் பெறுவதற்கான குறிப்புகள்.`,
    rememberBoxes: [{ tipEn: 'Practice textbook questions thoroughly.', tipTa: 'பாடநூல் வினாக்களைத் தவறாமல் பயிற்சி செய்க.' }],
    revisions: [{ version: '1.0', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', updatedBy: 'Mrs. Stella Aruldoss', changeNote: 'Published.', changeNoteTa: 'வெளியிடப்பட்டது.' }]
  };

  const summary = CLASS_9_ENGLISH_SUMMARIES[chapter.id] || {
    id: `sum_${chapter.id}`,
    chapterId: chapter.id,
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      `Essential conceptual summary for ${chapter.titleEn}.`,
      'Character analysis and narrative flow.',
      'Vocabulary definitions and grammar focus.',
      'Model exam practice.'
    ],
    keyPointsTa: [
      `${chapter.titleTa} பாடத்தின் தேர்வுக்கான முழுமையான கருத்துச் சுருக்கம்.`,
      'கதைக்களம் மற்றும் பாத்திரப் படைப்பு.',
      'அருஞ்சொற்பொருள் மற்றும் இலக்கணம்.',
      'தேர்வு மாதிரி வினாக்கள்.'
    ],
    simpleExplanationEn: `Takeaway of ${chapter.titleEn}: understand foundational concepts and practice 2-mark and 5-mark questions.`,
    simpleExplanationTa: `${chapter.titleTa} பாடத்தின் எளிய சாரம்: மையக்கருத்தை நன்கு புரிந்து கொண்டு தேர்வுக்குத் தயாராகலாம்.`
  };

  const quiz = CLASS_9_ENGLISH_QUIZZES[chapter.id] || {
    id: `quiz_${chapter.id}`,
    chapterId: chapter.id,
    titleEn: `${chapter.titleEn}: Revision Quiz`,
    titleTa: `${chapter.titleTa}: மாதிரி வினாடி வினா`,
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: `${chapter.id}_q1`,
        type: 'mcq' as const,
        difficulty: 'easy' as const,
        questionEn: `Which grade and subject does "${chapter.titleEn}" belong to?`,
        questionTa: `"${chapter.titleTa}" எந்த வகுப்பின் ஆங்கிலப் பாடநூலில் இடம்பெற்றுள்ளது?`,
        optionsEn: ['Class 9 English', 'Class 10 English', 'Class 11 English', 'Class 12 English'],
        optionsTa: ['ஒன்பதாம் வகுப்பு ஆங்கிலம்', 'பத்தாம் வகுப்பு ஆங்கிலம்', 'பதினொன்றாம் வகுப்பு ஆங்கிலம்', 'பன்னிரண்டாம் வகுப்பு ஆங்கிலம்'],
        correctAnswer: 'Class 9 English',
        explanationEn: 'This lesson is part of the Tamil Nadu Class 9 English curriculum.',
        explanationTa: 'இப்பாடம் தமிழ்நாடு அரசின் 9-ஆம் வகுப்பு ஆங்கிலப் பாடநூலில் உள்ளது.'
      }
    ]
  };

  return { note, summary, quiz, diagram, video };
}

CLASS_9_ENGLISH_CHAPTERS.forEach(ch => {
  if (!CLASS_9_ENGLISH_DIAGRAMS[ch.id]) {
    CLASS_9_ENGLISH_DIAGRAMS[ch.id] = generateEnglishDiagram(ch, false);
  }
  if (!CLASS_9_ENGLISH_VIDEOS[ch.id]) {
    CLASS_9_ENGLISH_VIDEOS[ch.id] = generateEnglishVideo(ch, false);
  }
});
