import { Chapter, NoteItem, SummaryItem, ChapterQuiz } from '../types';
import { CLASS_9_SCIENCE_DIAGRAMS, CLASS_9_SCIENCE_VIDEOS } from './class9ScienceMedia';
export { CLASS_9_SCIENCE_DIAGRAMS, CLASS_9_SCIENCE_VIDEOS };

export const CLASS_9_SCIENCE_CHAPTERS: Chapter[] = [
  {
    id: 'c9_sci_u1',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 1,
    chapterNumber: 1,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Measurement',
    titleTa: 'இயற்பியல்: அளவீடு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u2',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 2,
    chapterNumber: 2,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Motion',
    titleTa: 'இயற்பியல்: இயக்கம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u3',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 3,
    chapterNumber: 3,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Fluids',
    titleTa: 'இயற்பியல்: பாய்மங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u4',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 4,
    chapterNumber: 4,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Electric Charge and Electric Current',
    titleTa: 'இயற்பியல்: மின்னூட்டமும் மின்னோட்டமும்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u5',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 5,
    chapterNumber: 5,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Magnetism and Electromagnetism',
    titleTa: 'இயற்பியல்: காந்தவியல் மற்றும் மின்காந்தவியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u6',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 6,
    chapterNumber: 6,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Light',
    titleTa: 'இயற்பியல்: ஒளியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u7',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 7,
    chapterNumber: 7,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Heat',
    titleTa: 'இயற்பியல்: வெப்பம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u8',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 8,
    chapterNumber: 8,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Sound',
    titleTa: 'இயற்பியல்: ஒலியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u9',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 9,
    chapterNumber: 9,
    unitNameEn: 'Physics',
    unitNameTa: 'இயற்பியல்',
    titleEn: 'Physics: Universe',
    titleTa: 'இயற்பியல்: அண்டம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u10',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 10,
    chapterNumber: 10,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Matter Around Us',
    titleTa: 'வேதியியல்: நம்மைச் சுற்றியுள்ள பொருட்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u11',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 11,
    chapterNumber: 11,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Atomic Structure',
    titleTa: 'வேதியியல்: அணு அமைப்பு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u12',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 12,
    chapterNumber: 12,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Periodic Classification of Elements',
    titleTa: 'வேதியியல்: தனிமங்களின் ஆவர்த்தன வகைப்பாடு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u13',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 13,
    chapterNumber: 13,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Chemical Bonding',
    titleTa: 'வேதியியல்: வேதிப்பிணைப்பு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u14',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 14,
    chapterNumber: 14,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Acids, Bases and Salts',
    titleTa: 'வேதியியல்: அமிலங்கள், காரங்கள் மற்றும் உப்புகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u15',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 15,
    chapterNumber: 15,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Carbon and Its Compounds',
    titleTa: 'வேதியியல்: கார்பனும் அதன் சேர்மங்களும்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u16',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 16,
    chapterNumber: 16,
    unitNameEn: 'Chemistry',
    unitNameTa: 'வேதியியல்',
    titleEn: 'Chemistry: Applied Chemistry',
    titleTa: 'வேதியியல்: பயன்பாட்டு வேதியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u17',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 17,
    chapterNumber: 17,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Animal Kingdom',
    titleTa: 'உயிரியல்: விலங்குலகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u18',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 18,
    chapterNumber: 18,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Organisation of Tissues',
    titleTa: 'உயிரியல்: திசுக்களின் அமைப்பு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u19',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 19,
    chapterNumber: 19,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Plant Physiology',
    titleTa: 'உயிரியல்: தாவர செயலியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u20',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 20,
    chapterNumber: 20,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Organ Systems in Animals',
    titleTa: 'உயிரியல்: விலங்குகளின் உறுப்பு மண்டலங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u21',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 21,
    chapterNumber: 21,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Nutrition and Health',
    titleTa: 'உயிரியல்: ஊட்டச்சத்து மற்றும் ஆரோக்கியம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u22',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 22,
    chapterNumber: 22,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: World of Microbes',
    titleTa: 'உயிரியல்: நுண்ணுயிரிகளின் உலகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u23',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 23,
    chapterNumber: 23,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Economic Biology',
    titleTa: 'உயிரியல்: பொருளாதார உயிரியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c9_sci_u24',
    classLevel: 9,
    subjectId: 'c9_science',
    unitNumber: 24,
    chapterNumber: 24,
    unitNameEn: 'Biology',
    unitNameTa: 'உயிரியல்',
    titleEn: 'Biology: Environmental Science',
    titleTa: 'உயிரியல்: சூழ்நிலை அறிவியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasDiagram: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CLASS_9_SCIENCE_NOTES: Record<string, NoteItem> = {
  c9_sci_u1: {
    id: 'note_c9_sci_u1',
    chapterId: 'c9_sci_u1',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Measurement - Study Notes',
    titleTa: 'இயற்பியல்: அளவீடு - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 12,
    bodyEn: "### 1. Introduction to Measurement\nFundamental and derived physical quantities, SI base units, Vernier caliper, screw gauge, and measuring mass vs weight.\n\n### 2. Core Scientific Concepts\n1. Physical quantities are divided into Fundamental (Length, Mass, Time, Temperature, Electric Current, Luminous Intensity, Amount of Substance) and Derived quantities.\n2. SI system provides international uniformity with defined standard base units.\n3. Vernier Caliper measures with a least count of 0.01 cm (0.1 mm) for internal and external dimensions.\n4. Screw Gauge measures extremely thin objects like wires and sheets with a precision least count of 0.01 mm.\n5. Mass is the quantity of matter (measured in kg using beam balance); Weight is the gravitational force W = mg (measured in N using spring balance).\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. அளவீடு அறிமுகம்\nஅடிப்படை மற்றும் வழி அளவுகள், SI அலகுகள், வெர்னியர் அளவி, திருகு அளவி மற்றும் நிறை-எடை ஒப்பீடு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. இயற்பியல் அளவுகள் அடிப்படை அளவுகள் (நீளம், நிறை, காலம், வெப்பநிலை, மின்னோட்டம், ஒளிச்செறிவு, பொருளின் அளவு) மற்றும் வழி அளவுகளாக வகைப்படுத்தப்படுகின்றன.\n2. SI அலகு முறை உலகளாவிய சீரான அளவீட்டுத் தரத்தை வழங்குகிறது.\n3. வெர்னியர் அளவியின் மீச்சிற்றளவு 0.01 செ.மீ (0.1 மி.மீ) ஆகும்; இது உள் மற்றும் வெளி விட்டங்களை அளவிட உதவுகிறது.\n4. திருகு அளவியின் மீச்சிற்றளவு 0.01 மி.மீ ஆகும்; இது மெல்லிய கம்பிகள், தாள்களைத் துல்லியமாக அளவிட உதவுகிறது.\n5. நிறை என்பது பருப்பொருளின் அளவு (கிகி, இயற்பியல் தராசு); எடை என்பது புவியீர்ப்பு விசை W = mg (நியூட்டன், சுருள்வில் தராசு).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u2: {
    id: 'note_c9_sci_u2',
    chapterId: 'c9_sci_u2',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Motion - Study Notes',
    titleTa: 'இயற்பியல்: இயக்கம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 14,
    bodyEn: "### 1. Introduction to Motion\nKinematics principles, distance vs displacement, speed and velocity, acceleration, equations of motion, and uniform circular motion.\n\n### 2. Core Scientific Concepts\n1. Distance is scalar (actual path length); Displacement is vector (shortest straight-line distance with direction).\n2. Speed = Distance / Time; Velocity = Displacement / Time.\n3. Acceleration a = (v - u) / t represents rate of change of velocity.\n4. Equations of motion for uniform acceleration: v = u + at, s = ut + ½at², v² = u² + 2as.\n5. In uniform circular motion, speed is constant but direction changes continuously, producing centripetal acceleration ac = v²/r directed towards the centre.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. இயக்கம் அறிமுகம்\nஇயக்கவியல் கோட்பாடுகள், தொலைவு-இடப்பெயர்ச்சி, வேகம்-திசைவேகம், முடுக்கம், இயக்கச் சமன்பாடுகள் மற்றும் சீரான வட்ட இயக்கம்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. தொலைவு என்பது திசையிலா அளவு (பாதை நீளம்); இடப்பெயர்ச்சி என்பது திசையன் அளவு (நேர்கோட்டு குறைந்தபட்ச தொலைவு).\n2. வேகம் = தொலைவு / காலம்; திசைவேகம் = இடப்பெயர்ச்சி / காலம்.\n3. முடுக்கம் a = (v - u) / t என்பது திசைவேக மாறுபாட்டு வீதமாகும்.\n4. சீரான முடுக்க இயக்கச் சமன்பாடுகள்: v = u + at, s = ut + ½at², v² = u² + 2as.\n5. சீரான வட்ட இயக்கத்தில் வேகம் மாறிலியாக இருந்தாலும் திசை மாறுவதால் மையநோக்கு முடுக்கம் உண்டாகிறது.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u3: {
    id: 'note_c9_sci_u3',
    chapterId: 'c9_sci_u3',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Fluids - Study Notes',
    titleTa: 'இயற்பியல்: பாய்மங்கள் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Fluids\nThrust and pressure, Pascal's law, liquid pressure factors, atmospheric pressure, Archimedes' principle, and flotation principles.\n\n### 2. Core Scientific Concepts\n1. Thrust is force acting perpendicular to a surface; Pressure = Thrust / Area (SI unit: Pascal or N/m²).\n2. Pressure inside a liquid depends on depth h, density ρ, and acceleration due to gravity g: P = hρg.\n3. Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished in all directions, as seen in hydraulic lifts and brakes.\n4. Atmospheric pressure at sea level is approximately 1.013 × 10⁵ Pa (measured using mercury barometer).\n5. Archimedes' Principle: A body immersed in fluid experiences an upward buoyant force equal to the weight of the displaced fluid.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. பாய்மங்கள் அறிமுகம்\nஉந்துவிசை மற்றும் அழுத்தம், பாஸ்கல் விதி, திரவ அழுத்தம், வளிமண்டல அழுத்தம், ஆர்க்கிமிடிஸ் தத்துவம் மற்றும் மிதத்தல் விதிகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. செங்குத்தாகச் செயல்படும் விசை உந்துவிசை எனப்படும்; அழுத்தம் = உந்துவிசை / பரப்பு (அலகு: பாஸ்கல்).\n2. திரவத்தின் உள்ளே அழுத்தம் ஆழம் h, அடர்த்தி ρ, புவியீர்ப்பு முடுக்கம் g-ஐப் பொறுத்தது: P = hρg.\n3. பாஸ்கல் விதியின்படி மூடப்பட்ட திரவத்தின் மீது செலுத்தப்படும் அழுத்தம் அனைத்துத் திசைகளிலும் சமமாகப் பரவும் (ஹைட்ராலிக் உயர்த்தி).\n4. ஆர்க்கிமிடிஸ் தத்துவம்: ஒரு பொருள் பாய்மத்தில் மூழ்கும்போது அது இடப்பெயர்ச்சி செய்த பாய்மத்தின் எடைக்குச் சமமான மிதப்பு விசை மேல்நோக்கிச் செயல்படும்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u4: {
    id: 'note_c9_sci_u4',
    chapterId: 'c9_sci_u4',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Electric Charge and Electric Current - Study Notes',
    titleTa: 'இயற்பியல்: மின்னூட்டமும் மின்னோட்டமும் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Electric Charge and Electric Current\nAtomic charges, electric force, electric field, potential difference, electric current I = Q/t, circuit diagrams, and electrical safety.\n\n### 2. Core Scientific Concepts\n1. Electric charge Q is measured in Coulombs (C); charge of an electron is e = 1.6 × 10⁻¹⁹ C.\n2. Electric current is the rate of flow of charges: I = Q / t (measured in Amperes using an ammeter in series).\n3. Electric potential difference V = W / Q is measured in Volts using a voltmeter in parallel.\n4. Ohm's fundamental concept connects potential difference and current resistance.\n5. Safety devices include electric fuses, miniature circuit breakers (MCBs), and grounding (earthing).\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. மின்னூட்டமும் மின்னோட்டமும் அறிமுகம்\nமின்னூட்டங்கள், மின்புலம், மின்னழுத்த வேறுபாடு, மின்னோட்டம் I = Q/t, மின்சுற்றுகள் மற்றும் மின்காப்பு பாதுகாப்பு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. மின்னூட்டம் Q கூலும் (C) அலகால் அளவிடப்படுகிறது; எலக்ட்ரானின் மின்னூட்டம் e = 1.6 × 10⁻¹⁹ C.\n2. மின்னோட்டம் என்பது மின்னூட்டம் பாயும் வீதமாகும்: I = Q / t (அலகு: ஆம்பியர், தொடரிணைப்பில் அம்மீட்டர்).\n3. மின்னழுத்த வேறுபாடு V = W / Q (அலகு: வோல்ட், பக்க இணைப்பில் வோல்ட்மீட்டர்).\n4. மின் பாதுகாப்பு சாதனங்கள்: மின் உருகி (fuse), MCB மற்றும் புவித்தொடர்பு (earthing).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u5: {
    id: 'note_c9_sci_u5',
    chapterId: 'c9_sci_u5',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Magnetism and Electromagnetism - Study Notes',
    titleTa: 'இயற்பியல்: காந்தவியல் மற்றும் மின்காந்தவியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Magnetism and Electromagnetism\nMagnetic field lines, Earth's magnetism, Oersted's experiment, right-hand thumb rule, Fleming's left-hand rule, and electric motors.\n\n### 2. Core Scientific Concepts\n1. Magnetic field lines emerge from North pole and enter South pole outside a magnet, forming closed continuous loops.\n2. Oersted discovered that an electric current in a wire produces a surrounding magnetic field.\n3. Maxwell's Right-Hand Thumb Rule gives the direction of magnetic field encircling a current-carrying wire.\n4. Fleming's Left-Hand Rule determines the direction of mechanical force on a current-carrying conductor in a magnetic field (foundation of Electric Motors).\n5. Faraday discovered electromagnetic induction, leading to electric generators and transformers.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. காந்தவியல் மற்றும் மின்காந்தவியல் அறிமுகம்\nகாந்தப்புலக் கோடுகள், புவிக் காந்தவியல், ஆயர்ஸ்டெட் சோதனை, வலக்கை கட்டைவிரல் விதி, ஃபிளெமிங்கின் இடக்கை விதி மற்றும் மின்மோட்டார்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. காந்தப்புலக் கோடுகள் வடதுருவத்தில் தொடங்கி தென்துருவத்தில் முடிவடையும் தொடர்ச்சியான மூடிய வளைகோடுகள்.\n2. ஆயர்ஸ்டெட் மின்னோட்டம் பாயும் கடத்தியைச் சுற்றிலும் காந்தப்புலம் உருவாவதை நிரூபித்தார்.\n3. வலக்கை கட்டைவிரல் விதி காந்தப்புலத்தின் திசையை அறிய உதவுகிறது.\n4. ஃபிளெமிங்கின் இடக்கை விதி காந்தப்புலத்தில் உள்ள கடத்தியின் மீதான விசையின் திசையைக் காட்டுகிறது (மின்மோட்டார் தத்துவம்).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u6: {
    id: 'note_c9_sci_u6',
    chapterId: 'c9_sci_u6',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Light - Study Notes',
    titleTa: 'இயற்பியல்: ஒளியியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 14,
    bodyEn: "### 1. Introduction to Light\nReflection of light, spherical mirrors (concave and convex), mirror formula, magnification, refraction, and refractive index.\n\n### 2. Core Scientific Concepts\n1. Laws of reflection: Angle of incidence i equals angle of reflection r; incident ray, reflected ray, and normal lie in the same plane.\n2. Concave mirrors converge light and produce real or virtual images depending on object distance; used in headlights and solar furnaces.\n3. Convex mirrors diverge light and always produce virtual, erect, and diminished images with a wide field of view; used as rear-view mirrors in vehicles.\n4. Mirror formula: 1/f = 1/v + 1/u, where f = R/2.\n5. Refraction occurs due to speed change across media; Snell's law: sin i / sin r = n₂/n₁.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. ஒளியியல் அறிமுகம்\nஒளி எதிரொளிப்பு, கோளக ஆடிகள் (குழி மற்றும் குவி ஆடிகள்), ஆடிச் சமன்பாடு, உருப்பெருக்கம் மற்றும் ஒளிவிலகல் எண்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. எதிரொளிப்பு விதிகள்: படுகோணம் = எதிரொளிப்புக் கோணம் (∠i = ∠r); படுகதிர், எதிரொளிப்புக் கதிர், குத்துக்கோடு ஒரே தளத்தில் அமையும்.\n2. குழி ஆடி கதிர்களைக் குவிக்கும் தன்மையுடையது; வாகன முகப்பு விளக்குகள், பல் மருத்துவர் கண்ணாடிகளில் பயன்படுகிறது.\n3. குவி ஆடி அகன்ற பார்வைப்புலத்தைக் கொண்ட நேரான சிறிய மாய பிம்பத்தை உருவாக்குகிறது; வாகனங்களின் பின்னோக்கு ஆடியாகப் பயன்படுகிறது.\n4. ஆடிச் சமன்பாடு: 1/f = 1/v + 1/u, f = R/2.\n5. ஒளிவிலகல் விதிகள்: ஸ்நெல் விதி (sin i / sin r = n₂ / n₁).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u7: {
    id: 'note_c9_sci_u7',
    chapterId: 'c9_sci_u7',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Heat - Study Notes',
    titleTa: 'இயற்பியல்: வெப்பம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 12,
    bodyEn: "### 1. Introduction to Heat\nTemperature scales (Celsius, Fahrenheit, Kelvin), heat transfer modes, thermal expansion, specific heat capacity, and latent heat.\n\n### 2. Core Scientific Concepts\n1. Heat is thermal energy in transit (measured in Joules); Temperature is the degree of hotness or coldness (measured in Kelvin).\n2. Conversion formula: C/100 = (F - 32)/180 = (K - 273.15)/100.\n3. Heat transfers through three modes: Conduction (solids), Convection (fluids), and Radiation (electromagnetic waves requiring no medium).\n4. Specific heat capacity Q = mcΔT is the heat required to raise 1 kg of a substance by 1 K.\n5. Latent heat Q = mL is heat absorbed or released during phase change at constant temperature.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. வெப்பம் அறிமுகம்\nவெப்பநிலை அளவீட்டு முறைகள் (செல்சியஸ், ஃபாரன்ஹீட், கெல்வின்), வெப்பப் பரவல் முறைகள், தன்வெப்ப ஏற்புத்திறன் மற்றும் உள்ளுறை வெப்பம்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. வெப்பம் என்பது பரிமாற்றப்படும் வெப்ப ஆற்றல் (ஜூல்); வெப்பநிலை என்பது ஒரு பொருளின் வெப்ப அல்லது குளிர்ச்சியின் அளவு (கெல்வின்).\n2. அளவீட்டு மாற்றீடு: C / 100 = (F - 32) / 180 = (K - 273.15) / 100.\n3. வெப்பப் பரவல் முறைகள்: வெப்பக் கடத்தல் (திண்மம்), வெப்பச் சலனம் (பாய்மம்), வெப்பக் கதிர்வீச்சு (ஊடகம் தேவையில்லை).\n4. தன்வெப்ப ஏற்புத்திறன்: Q = mcΔT; உள்ளுறை வெப்பம்: Q = mL.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u8: {
    id: 'note_c9_sci_u8',
    chapterId: 'c9_sci_u8',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Sound - Study Notes',
    titleTa: 'இயற்பியல்: ஒலியியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 12,
    bodyEn: "### 1. Introduction to Sound\nProduction and propagation of sound, longitudinal waves, wave equation v = fλ, speed in media, reflection, echo, and ultrasound application.\n\n### 2. Core Scientific Concepts\n1. Sound is produced by vibrating bodies and propagates as mechanical longitudinal waves consisting of compressions and rarefactions.\n2. Sound requires a material medium and cannot travel through a vacuum.\n3. Wave speed formula: v = f × λ (velocity = frequency × wavelength).\n4. Human audible range is 20 Hz to 20,000 Hz (20 kHz); sounds below 20 Hz are infrasonic, above 20 kHz are ultrasonic.\n5. Echo requires a minimum obstacle distance of 17.2 m in air (at 20°C); Ultrasound is used in SONAR and medical ultrasonography.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. ஒலியியல் அறிமுகம்\nஒலி உருவாக்கம் மற்றும் பரவுதல், நெட்டலைகள், அலைச் சமன்பாடு v = fλ, எதிரொலி, மீயொலி மற்றும் சோனார் பயன்பாடுகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. ஒலி அதிர்வடையும் பொருள்களால் உருவாக்கப்பட்டு, இறுக்கங்கள் மற்றும் தளர்ச்சிகள் கொண்ட நெட்டலைகளாகப் பரவுகிறது.\n2. ஒலி பரவ பருப்பொருள் ஊடகம் தேவை; அது வெற்றிடத்தில் பரவாது.\n3. அலைச் சமன்பாடு: v = f × λ (திசைவேகம் = அதிர்வெண் × அலைநீளம்).\n4. மனிதனின் கேட்கும் திறன் வரம்பு 20 Hz முதல் 20,000 Hz வரை ஆகும்.\n5. தெளிவான எதிரொலியைக் கேட்க எதிரொலிக்கும் பரப்பு குறைந்தபட்சம் 17.2 மீ தொலைவில் இருக்க வேண்டும்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u9: {
    id: 'note_c9_sci_u9',
    chapterId: 'c9_sci_u9',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Physics: Universe - Study Notes',
    titleTa: 'இயற்பியல்: அண்டம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 12,
    bodyEn: "### 1. Introduction to Universe\nOrigin of universe, Big Bang theory, galaxies, stars, solar system, satellites, and ISRO space missions (Chandrayaan & Mangalyaan).\n\n### 2. Core Scientific Concepts\n1. The Big Bang theory suggests the universe expanded from an extremely dense singularity about 13.7 billion years ago.\n2. A galaxy is a massive gravitationally bound system of stars, gas, and dust; Earth resides in the barred spiral Milky Way galaxy.\n3. Astronomical Unit (AU = 1.496 × 10¹¹ m) is average Earth-Sun distance; Light Year (9.46 × 10¹⁵ m) measures interstellar distances.\n4. Artificial satellites serve communication, meteorology, navigation, and remote sensing functions.\n5. ISRO missions: Chandrayaan discovered water molecules on the Moon; Mangalyaan entered Martian orbit successfully on first attempt.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. அண்டம் அறிமுகம்\nஅண்டத்தின் தோற்றம், பெருவெடிப்புக் கோட்பாடு, விண்மீன் திரள்கள், சூரிய குடும்பம் மற்றும் இஸ்ரோ விண்வெளித் திட்டங்கள் (சந்திரயான், மங்கள்யான்).\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. பெருவெடிப்புக் கோட்பாட்டின்படி அண்டம் சுமார் 13.7 பில்லியன் ஆண்டுகளுக்கு முன்பு உருவானது.\n2. பூமி அமைந்துள்ள விண்மீன் திரள் பால்வெளி (Milky Way) ஆகும்.\n3. வானியல் அலகு (AU = 1.496 × 10¹¹ மீ) மற்றும் ஒளி ஆண்டு (9.46 × 10¹⁵ மீ) விண்வெளி தூரங்களை அளவிடப் பயன்படுகின்றன.\n4. செயற்கைக்கோள்கள் தகவல் தொடர்பு, வானிலை மற்றும் வழிகாட்டுதலுக்குப் பயன்படுகின்றன.\n5. இஸ்ரோவின் சாதனைகள்: நிலவில் நீர் இருப்பதை உறுதி செய்த சந்திரயான், செவ்வாயை ஆய்வு செய்த மங்கள்யான்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u10: {
    id: 'note_c9_sci_u10',
    chapterId: 'c9_sci_u10',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Matter Around Us - Study Notes',
    titleTa: 'வேதியியல்: நம்மைச் சுற்றியுள்ள பொருட்கள் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Matter Around Us\nClassification of matter into elements, compounds, and mixtures; types of mixtures (homogeneous & heterogeneous), separation techniques, and colloids.\n\n### 2. Core Scientific Concepts\n1. Matter is classified into pure substances (elements and compounds) and mixtures.\n2. Mixtures are either homogeneous (uniform composition like solutions) or heterogeneous (non-uniform like suspensions).\n3. Separation techniques include filtration, sublimation, distillation, fractional distillation, and chromatography.\n4. Colloids display the Tyndall effect (scattering of light by dispersed particles) and Brownian motion.\n5. True solutions have particle sizes < 1 nm; Colloids 1–100 nm; Suspensions > 100 nm.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. நம்மைச் சுற்றியுள்ள பொருட்கள் அறிமுகம்\nபருப்பொருட்களின் வகைப்பாடு: தனிமங்கள், சேர்மங்கள், கலவைகள், கலவைகளைப் பிரித்தெடுக்கும் முறைகள் மற்றும் கூழ்மங்கள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. பருப்பொருட்கள் தூய பொருட்கள் (தனிமங்கள் மற்றும் சேர்மங்கள்) மற்றும் கலவைகளாகப் பிரிக்கப்படுகின்றன.\n2. கலவைகள் ஒருபடித்தானவை (கரைசல்கள்) அல்லது பலபடித்தானவை (தொங்கல்கள்).\n3. பிரித்தெடுக்கும் முறைகள்: வடிகட்டுதல், பதங்கமாதல், காய்ச்சி வடித்தல், பின்னக் காய்ச்சி வடித்தல் மற்றும் வண்ணப்பிரிகை முறை.\n4. கூழ்மங்கள் டின்டால் விளைவு மற்றும் பிரௌனியன் இயக்கத்தை வெளிப்படுத்துகின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u11: {
    id: 'note_c9_sci_u11',
    chapterId: 'c9_sci_u11',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Atomic Structure - Study Notes',
    titleTa: 'வேதியியல்: அணு அமைப்பு - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 14,
    bodyEn: "### 1. Introduction to Atomic Structure\nSubatomic particles (electrons, protons, neutrons), Thomson & Rutherford models, Bohr model, atomic and mass numbers, isotopes, and electronic configuration.\n\n### 2. Core Scientific Concepts\n1. Proton (+1 charge, discovered by Goldstein), Electron (-1, J.J. Thomson), and Neutron (0 charge, Chadwick).\n2. Atomic number Z = number of protons; Mass number A = protons + neutrons.\n3. Bohr model: Electrons revolve in stationary energy shells (K, L, M, N) with maximum capacity 2n².\n4. Valence electrons in the outermost shell determine chemical reactivity and valency.\n5. Isotopes have same atomic number Z but different mass number A (e.g., ¹H, ²H, ³H); Isobars have same A but different Z.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. அணு அமைப்பு அறிமுகம்\nஅணுவின் அடிப்படைத் துகள்கள், தாம்சன்-ரூதர்போர்டு-போர் அணு மாதிரிகள், அணு எண், நிறை எண், ஐசோடோப்புகள் மற்றும் எலக்ட்ரான் பகிர்வு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. புரோட்டான் (+1, கோல்ட்ஸ்டீன்), எலக்ட்ரான் (-1, ஜே.ஜே. தாம்சன்), நியூட்ரான் (மின்னூட்டமற்றது, சாட்விக்).\n2. அணு எண் Z = புரோட்டான்களின் எண்ணிக்கை; நிறை எண் A = புரோட்டான்கள் + நியூட்ரான்கள்.\n3. போர் மாதிரி: எலக்ட்ரான்கள் குறிப்பிட்ட வட்டப்பாதைகளில் (K, L, M, N) சுற்றுகின்றன (அதிகபட்ச எலக்ட்ரான்கள் 2n²).\n4. ஐசோடோப்புகள்: ஒத்த அணு எண்ணும் வேறுபட்ட நிறை எண்ணும் கொண்ட ஒரே தனிமத்தின் அணுக்கள்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u12: {
    id: 'note_c9_sci_u12',
    chapterId: 'c9_sci_u12',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Periodic Classification of Elements - Study Notes',
    titleTa: 'வேதியியல்: தனிமங்களின் ஆவர்த்தன வகைப்பாடு - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Periodic Classification of Elements\nHistorical developments (Dobereiner, Newlands, Mendeleev), Modern Periodic Law, Modern Periodic Table groups and periods, and periodic trends.\n\n### 2. Core Scientific Concepts\n1. Dobereiner's Triads grouped elements in threes; Newlands proposed the Law of Octaves.\n2. Mendeleev arranged elements in increasing atomic mass; Modern Periodic Table arranges elements by atomic number Z (Moseley).\n3. Modern Periodic Table contains 7 horizontal periods and 18 vertical groups.\n4. Periodic trends: Atomic radius increases down a group and decreases across a period.\n5. Valency, ionization energy, and electronegativity follow structured periodic variations.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. தனிமங்களின் ஆவர்த்தன வகைப்பாடு அறிமுகம்\nஆவர்த்தன வகைப்பாட்டின் வளர்ச்சி, மெண்டலீவ் அட்டவணை, நவீன ஆவர்த்தன விதி, 18 தொகுதிகள் மற்றும் 7 தொடர்கள், ஆவர்த்தனப் பண்புகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. டாபரீனரின் மும்மை விதி, நியூலேண்டின் எண்ம விதி மற்றும் மெண்டலீவின் ஆவர்த்தன அட்டவணை.\n2. நவீன ஆவர்த்தன விதி (மோஸ்லே): தனிமங்களின் இயற்பியல் மற்றும் வேதியியல் பண்புகள் அவற்றின் அணு எண்களின் ஆவர்த்தன செயல்பாடாகும்.\n3. நவீன ஆவர்த்தன அட்டவணையில் 7 தொடர்களும் 18 தொகுதிகளும் உள்ளன.\n4. தொகுதியில் கீழிறங்கும் போது அணு ஆரம் அதிகரிக்கும், தொடரில் இடமிருந்து வலம் செல்லும்போது குறையும்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u13: {
    id: 'note_c9_sci_u13',
    chapterId: 'c9_sci_u13',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Chemical Bonding - Study Notes',
    titleTa: 'வேதியியல்: வேதிப்பிணைப்பு - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Chemical Bonding\nOctet rule, ionic (electrovalent) bonding, covalent bonding, coordinate covalent bonding, and properties of ionic vs covalent compounds.\n\n### 2. Core Scientific Concepts\n1. Octet Rule: Atoms combine to achieve a stable electronic configuration with 8 valence electrons like noble gases.\n2. Ionic Bonding: Transfer of electrons from metal (cation) to non-metal (anion), e.g., NaCl, MgO.\n3. Covalent Bonding: Mutual sharing of electron pairs between non-metal atoms, e.g., H₂, O₂, CH₄.\n4. Ionic compounds have high melting points, dissolve in polar water, and conduct electricity in molten/solution states.\n5. Covalent compounds have lower melting points and generally do not conduct electricity.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. வேதிப்பிணைப்பு அறிமுகம்\nஎண்ம விதி, அயனிப் பிணைப்பு, சகப்பிணைப்பு, ஈதல் சகப்பிணைப்பு மற்றும் பிணைப்புச் சேர்மங்களின் பண்புகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. எண்ம விதி: மந்த வாயுக்களின் நிலையான எலக்ட்ரான் அமைப்பைப் பெற அணுக்கள் பிணைப்பை உருவாக்குகின்றன.\n2. அயனிப் பிணைப்பு: உலோகத்திற்கும் அலோகத்திற்கும் இடையே எலக்ட்ரான் பரிமாற்றத்தால் உருவாகிறது (NaCl).\n3. சகப்பிணைப்பு: அணுக்களுக்கிடையே எலக்ட்ரான்கள் சமமாகப் பகிரப்படுவதால் உருவாகிறது (H₂, O₂, CH₄).\n4. அயனிச் சேர்மங்கள் அதிக உருகுநிலை கொண்டவை மற்றும் கரைசலில் மின்சாரத்தைக் கடத்துகின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u14: {
    id: 'note_c9_sci_u14',
    chapterId: 'c9_sci_u14',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Acids, Bases and Salts - Study Notes',
    titleTa: 'வேதியியல்: அமிலங்கள், காரங்கள் மற்றும் உப்புகள் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Acids, Bases and Salts\nProperties of acids and bases, Arrhenius theory, pH scale, neutralization reaction, types of salts, and everyday applications.\n\n### 2. Core Scientific Concepts\n1. Acids release H⁺ ions in aqueous solutions, taste sour, and turn blue litmus red.\n2. Bases release OH⁻ ions, taste bitter, feel soapy, and turn red litmus blue; water-soluble bases are Alkalis.\n3. pH scale (0–14): pH < 7 is acidic, pH = 7 is neutral (pure water), pH > 7 is basic.\n4. Neutralization: Acid + Base → Salt + Water (e.g., HCl + NaOH → NaCl + H₂O).\n5. Important salts: Common salt (NaCl), Washing soda (Na₂CO₃·10H₂O), Baking soda (NaHCO₃), Bleaching powder (CaOCl₂).\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. அமிலங்கள், காரங்கள் மற்றும் உப்புகள் அறிமுகம்\nஅமிலங்கள் மற்றும் காரங்களின் பண்புகள், அர்ஹீனியஸ் கொள்கை, pH அளவீடு, நடுநிலையாக்கல் வினை மற்றும் உப்புகளின் வகைகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. அமிலங்கள் நீர்க்கரைசலில் H⁺ அயனிகளைத் தருகின்றன, புளிப்புச் சுவை கொண்டவை, நீல லிட்மஸை சிவப்பாக மாற்றுகின்றன.\n2. காரங்கள் OH⁻ அயனிகளைத் தருகின்றன, கசப்புச் சுவை கொண்டவை, சிவப்பு லிட்மஸை நீலமாக மாற்றுகின்றன.\n3. pH அளவீடு (0–14): pH < 7 அமிலம்; pH = 7 நடுநிலை; pH > 7 காரம்.\n4. நடுநிலையாக்கல் வினை: அமிலம் + காரம் → உப்பு + நீர்.\n5. பயன்பாட்டு உப்புகள்: சாதாரண உப்பு, சலவை சோடா, சமையல் சோடா மற்றும் சலவைத்தூள்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u15: {
    id: 'note_c9_sci_u15',
    chapterId: 'c9_sci_u15',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Carbon and Its Compounds - Study Notes',
    titleTa: 'வேதியியல்: கார்பனும் அதன் சேர்மங்களும் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Carbon and Its Compounds\nUnique nature of carbon (catenation, tetravalency), allotropes (diamond, graphite, fullerenes, graphene), hydrocarbons, and functional groups.\n\n### 2. Core Scientific Concepts\n1. Carbon has atomic number 6, electronic configuration 2, 4, exhibiting tetravalency.\n2. Catenation is carbon's unique ability to form long self-linking chains and rings.\n3. Allotropes of carbon: Diamond (hardest natural substance, non-conductor), Graphite (hexagonal layers, conductor), Fullerenes, and Graphene.\n4. Hydrocarbons: Saturated alkanes (CₙH₂ₙ₊₂ with single bonds) and unsaturated alkenes (CₙH₂ₙ) and alkynes (CₙH₂ₙ₋₂).\n5. Carbon compounds form the basis of organic chemistry, fuels, plastics, and pharmaceuticals.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. கார்பனும் அதன் சேர்மங்களும் அறிமுகம்\nகார்பனின் சிறப்புப் பண்புகள் (சங்கிலித் தொடராக்கம், நான்கு இணைதிறன்), புறவேற்றுமை வடிவங்கள் (வைரம், கிராஃபைட்), ஹைட்ரோகார்பன்கள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. கார்பன் அணு எண் 6, நான்கு இணைதிறன் கொண்டது.\n2. சங்கிலித் தொடராக்கம்: கார்பன் அணுக்கள் தங்களுக்குள்ளேயே இணைந்து நீண்ட சங்கிலிகளையும் வளையங்களையும் உருவாக்கும் திறன்.\n3. புறவேற்றுமை வடிவங்கள்: வைரம் (கடினமானது, மின்கடத்தா), கிராஃபைட் (அடுக்கு அமைப்பு, மின்கடத்தும்), புல்லரீன்.\n4. ஹைட்ரோகார்பன்கள்: ஆல்கேன்கள் (CₙH₂ₙ₊₂), ஆல்கீன்கள் (CₙH₂ₙ) மற்றும் ஆல்கைன்கள் (CₙH₂ₙ₋₂).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u16: {
    id: 'note_c9_sci_u16',
    chapterId: 'c9_sci_u16',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Chemistry: Applied Chemistry - Study Notes',
    titleTa: 'வேதியியல்: பயன்பாட்டு வேதியியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 12,
    bodyEn: "### 1. Introduction to Applied Chemistry\nIndustrial and everyday chemistry: Radiochemistry, agricultural chemistry (fertilizers & pesticides), forensic chemistry, dyes, cosmetics, and adhesives.\n\n### 2. Core Scientific Concepts\n1. Radiochemistry utilizes radioisotopes in medicine (Co-60 for cancer therapy, I-131 for thyroid diagnosis).\n2. Agricultural chemistry enhances crop yields with NPK fertilizers and protects crops with targeted pesticides.\n3. Forensic chemistry aids legal investigations through fingerprint analysis, toxicology, and blood detection.\n4. Dyes impart permanent color to textiles; cosmetics and soaps rely on emulsions and surfactants.\n5. Green chemistry focuses on sustainable practices reducing hazardous chemical by-products.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. பயன்பாட்டு வேதியியல் அறிமுகம்\nகதிரியக்க வேதியியல், வேளாண் வேதியியல் (உரங்கள், பூச்சிக்கொல்லிகள்), தடயவியல் வேதியியல், சாயங்கள், அழகுசாதனப் பொருட்கள் மற்றும் பசைகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. கதிரியக்க வேதியியல்: மருத்துவத்தில் கோபால்ட்-60 புற்றுநோய் சிகிச்சையிலும், அயோடின்-131 தைராய்டு கண்டறிதலிலும் பயன்படுகிறது.\n2. வேளாண் வேதியியல்: NPK உரங்கள் மூலம் விளைச்சலை அதிகரிக்கிறது.\n3. தடயவியல் வேதியியல்: கைரேகை ஆய்வு, நச்சுயியல் மூலம் குற்றப் புலனாய்வுக்கு உதவுகிறது.\n4. சாயங்கள், அழகுசாதனப் பொருட்கள் மற்றும் பசைகள் அன்றாட வாழ்வில் முக்கிய பங்கு வகிக்கின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u17: {
    id: 'note_c9_sci_u17',
    chapterId: 'c9_sci_u17',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Animal Kingdom - Study Notes',
    titleTa: 'உயிரியல்: விலங்குலகம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 14,
    bodyEn: "### 1. Introduction to Animal Kingdom\nBasis of animal classification, invertebrate phyla (Porifera to Echinodermata), chordate characteristics, and vertebrate classes (Pisces to Mammalia).\n\n### 2. Core Scientific Concepts\n1. Animals are classified based on cellular organization, symmetry (radial/bilateral), germ layers, and coelom (body cavity).\n2. Invertebrates lack a backbone: Porifera (sponges), Coelenterata (hydra), Platyhelminthes (flatworms), Nematoda (roundworms), Annelida (earthworm), Arthropoda (jointed legs - largest phylum), Mollusca (soft-bodied), and Echinodermata (spiny skin).\n3. Chordates possess a notochord, dorsal hollow nerve cord, and pharyngeal gill slits.\n4. Vertebrates: Pisces (cold-blooded, gills), Amphibia (dual life), Reptilia (scales, lay eggs on land), Aves (feathers, pneumatic bones), Mammalia (mammary glands, hair, warm-blooded).\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. விலங்குலகம் அறிமுகம்\nவிலங்குகளின் வகைப்பாட்டின் அடிப்படைகள், முதுகெலும்பற்றவை (துளை உடலிகள் முதல் முட்தோலிகள் வரை) மற்றும் முதுகெலும்புள்ளவை (மீன்கள் முதல் பாலூட்டிகள் வரை).\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. விலங்குகள் சமச்சீர் அமைப்பு, உடற்குழி மற்றும் செல்லுலார் அமைப்பின் அடிப்படையில் வகைப்படுத்தப்படுகின்றன.\n2. முதுகெலும்பற்றவை: துளை உடலிகள், குழியுடலிகள், தட்டைப்புழுக்கள், உருளைப்புழுக்கள், வளைதசைப் புழுக்கள், கணுக்காலிகள் (மிகப்பெரிய தொகுதி), மெல்லுடலிகள், முட்தோலிகள்.\n3. முதுகெலும்புள்ளவை: மீன்கள், இருவாழ்விகள், ஊர்வன, பறவைகள் மற்றும் பாலூட்டிகள் (பாலூட்டும் சுரப்பிகள், வெப்ப இரத்த விலங்குகள்).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u18: {
    id: 'note_c9_sci_u18',
    chapterId: 'c9_sci_u18',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Organisation of Tissues - Study Notes',
    titleTa: 'உயிரியல்: திசுக்களின் அமைப்பு - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Organisation of Tissues\nPlant tissues (meristematic and permanent: xylem and phloem) and animal tissues (epithelial, connective, muscular, and nervous tissues).\n\n### 2. Core Scientific Concepts\n1. A tissue is a cluster of similar cells performing a common specialized function.\n2. Plant tissues: Meristematic tissue divides actively (apical, intercalary, lateral); Permanent tissues include parenchyma, collenchyma, sclerenchyma, and vascular tissues (xylem conducts water, phloem translocates food).\n3. Animal tissues: Epithelial (covering), Connective (bone, cartilage, blood, adipose), Muscular (striated, smooth, cardiac), and Nervous tissue (neurons).\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. திசுக்களின் அமைப்பு அறிமுகம்\nதாவரத் திசுக்கள் (ஆக்குத்திசு மற்றும் நிலைத்த திசுக்கள்: சைலம் மற்றும் புளோயம்) மற்றும் விலங்குத் திசுக்கள் (எபிதீலியல், இணைப்பு, தசை, நரம்புத் திசு).\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. ஒரே மாதிரியான தோற்றமும் குறிப்பிட்ட பணியும் கொண்ட செல்களின் தொகுப்பு திசு எனப்படும்.\n2. தாவரத் திசுக்கள்: ஆக்குத்திசு மற்றும் நிலைத்த திசுக்கள் (சைலம் நீரை கடத்தும், புளோயம் உணவைக் கடத்தும்).\n3. விலங்குத் திசுக்கள்: எபிதீலியல் திசு, இணைப்புத் திசு (எலும்பு, இரத்தம்), தசைத் திசு மற்றும் நரம்புத் திசு (நியூரான்கள்).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u19: {
    id: 'note_c9_sci_u19',
    chapterId: 'c9_sci_u19',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Plant Physiology - Study Notes',
    titleTa: 'உயிரியல்: தாவர செயலியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Plant Physiology\nPlant movements (tropisms and nastic movements), photosynthesis mechanism, transpiration, and translocation.\n\n### 2. Core Scientific Concepts\n1. Tropisms are directional growth movements in response to stimuli: Phototropism (light), Geotropism (gravity), Hydrotropism (water), Thigmotropism (touch).\n2. Nastic movements are non-directional responses independent of stimulus direction, e.g., Thigmonasty in Mimosa pudica (Touch-me-not).\n3. Photosynthesis converts CO₂ and water into glucose and oxygen using chlorophyll and sunlight: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.\n4. Transpiration is the evaporation of water vapor through stomata, generating suction pull.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. தாவர செயலியல் அறிமுகம்\nதாவர அசைவுகள் (திசைசார் மற்றும் திசையுறா அசைவுகள்), ஒளிச்சேர்க்கை, நீராவிப்போக்கு மற்றும் உணவு கடத்துதல்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. திசைசார் அசைவுகள்: ஒளிச்சார்பசைவு (ஒளி), புவிச்சார்பசைவு (புவியீர்ப்பு), நீர்ச்சார்பசைவு (நீர்), தொடுவுறு வளைதல் (தொடுதல்).\n2. திசையுறா அசைவுகள்: தொட்டால் சுருங்கி (Mimosa pudica).\n3. ஒளிச்சேர்க்கை: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.\n4. நீராவிப்போக்கு இலைத்துளைகள் வழியாக நீராவியை வெளியேற்றி தாவரத்தை குளிர்ச்சியாக வைக்கிறது.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u20: {
    id: 'note_c9_sci_u20',
    chapterId: 'c9_sci_u20',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Organ Systems in Animals - Study Notes',
    titleTa: 'உயிரியல்: விலங்குகளின் உறுப்பு மண்டலங்கள் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 14,
    bodyEn: "### 1. Introduction to Organ Systems in Animals\nHuman organ systems overview: Digestive system, respiratory system, circulatory system, and excretory system structure and physiology.\n\n### 2. Core Scientific Concepts\n1. Digestive system: Alimentary canal and glands (liver, pancreas) break down food into absorbable nutrients.\n2. Respiratory system: Lungs and alveoli facilitate gaseous exchange (O₂ intake and CO₂ release).\n3. Circulatory system: Four-chambered heart, blood vessels (arteries, veins, capillaries), and blood transport oxygen and nutrients.\n4. Excretory system: Kidneys with millions of nephrons filter blood, removing nitrogenous urea and maintaining homeostasis.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. விலங்குகளின் உறுப்பு மண்டலங்கள் அறிமுகம்\nமனிதனின் உறுப்பு மண்டலங்கள்: செரிமான மண்டலம், சுவாச மண்டலம், இரத்த ஓட்ட மண்டலம் மற்றும் கழிவுநீக்க மண்டலங்களின் அமைப்பு மற்றும் செயல்முறைகள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. செரிமான மண்டலம்: உணவுக்குழல், கல்லீரல், கணையம் ஆகியவை உணவை எளிய ஊட்டச்சத்துக்களாக மாற்றுகின்றன.\n2. சுவாச மண்டலம்: நுரையீரல் மற்றும் நுண்காற்றுப் பைகள் வழியே வாயுப் பரிமாற்றம் நிகழ்கிறது.\n3. இரத்த ஓட்ட மண்டலம்: நான்கு அறைகளைக் கொண்ட இதயம் மற்றும் இரத்தக் குழாய்கள் மூலம் உடலெங்கும் இரத்தம் பாய்கிறது.\n4. கழிவுநீக்க மண்டலம்: சிறுநீரகத்திலுள்ள நெஃப்ரான்கள் இரத்தத்தை வடிகட்டி யூரியாவை வெளியேற்றுகின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u21: {
    id: 'note_c9_sci_u21',
    chapterId: 'c9_sci_u21',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Nutrition and Health - Study Notes',
    titleTa: 'உயிரியல்: ஊட்டச்சத்து மற்றும் ஆரோக்கியம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Nutrition and Health\nClasses of nutrients (carbohydrates, proteins, fats, vitamins, minerals), deficiency diseases, balanced diet, and food hygiene.\n\n### 2. Core Scientific Concepts\n1. Nutrients are energy-giving (carbohydrates, fats), body-building (proteins), and protective (vitamins, minerals).\n2. Protein deficiency causes Kwashiorkor and Marasmus in children.\n3. Vitamin deficiencies: Vitamin A (Night blindness), Vitamin B1 (Beriberi), Vitamin C (Scurvy), Vitamin D (Rickets).\n4. Mineral deficiencies: Iron (Anaemia), Iodine (Goitre), Calcium (weak bones and teeth).\n5. Food safety and hygiene prevent microbial spoilage and food adulteration.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. ஊட்டச்சத்து மற்றும் ஆரோக்கியம் அறிமுகம்\nஊட்டச்சத்துக்களின் வகைகள் (கார்போஹைட்ரேட், புரதம், கொழுப்பு, வைட்டமின்கள், தாதுக்கள்), ஊட்டச்சத்துக் குறைபாட்டு நோய்கள் மற்றும் சரிவிகித உணவு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. ஊட்டச்சத்துக்கள்: ஆற்றல் தருபவை (கார்போஹைட்ரேட்), உடல் வளர்ச்சிக்கு உதவுபவை (புரதம்), பாதுகாப்பளிப்பவை (வைட்டமின்கள், தாதுக்கள்).\n2. புரதக் குறைபாட்டு நோய்கள்: குவாஷியார்கர் மற்றும் மராஸ்மஸ்.\n3. வைட்டமின் குறைபாடுகள்: வைட்டமின் A (மாலைக்கண்), வைட்டமின் B1 (பெரிபெரி), வைட்டமின் C (ஸ்கர்வி), வைட்டமின் D (ரிக்கெட்ஸ்).\n4. தாது உப்பு குறைபாடுகள்: இரும்புச்சத்து (இரத்த சோகை), அயோடின் (முன்கழுத்துக் கழலை - காய்ட்டர்).\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u22: {
    id: 'note_c9_sci_u22',
    chapterId: 'c9_sci_u22',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: World of Microbes - Study Notes',
    titleTa: 'உயிரியல்: நுண்ணுயிரிகளின் உலகம் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to World of Microbes\nMicroorganisms (bacteria, viruses, fungi, protozoa), beneficial microbes in fermentation & antibiotics, and pathogenic microbes causing infectious diseases.\n\n### 2. Core Scientific Concepts\n1. Microbes include Bacteria (prokaryotic single-celled), Viruses (acellular obligate intracellular parasites), Fungi, and Protozoa.\n2. Beneficial roles: Lactobacillus converts milk to curd; Yeast ferments bread and alcohol; Penicillium yields antibiotics.\n3. Infectious diseases: Viral (Polio, Common cold, Rabies, COVID-19), Bacterial (Tuberculosis, Cholera, Typhoid), Fungal (Ringworm), Protozoan (Malaria).\n4. Vaccination and immunisation provide acquired immunity against deadly pathogens.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. நுண்ணுயிரிகளின் உலகம் அறிமுகம்\nநுண்ணுயிரிகள் (பாக்டீரியா, வைரஸ், பூஞ்சை, புரோட்டோசோவா), நன்மை பயக்கும் நுண்ணுயிரிகள் (நொதித்தல், ஆன்டிபயாடிக்) மற்றும் தொற்றுநோய்கள்.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. நுண்ணுயிரிகள்: பாக்டீரியாக்கள், வைரஸ்கள், பூஞ்சைகள் மற்றும் புரோட்டோசோவா.\n2. நன்மை தரும் நுண்ணுயிரிகள்: லாக்டோபேசில்லஸ் பாலைத் தயிராக்குகிறது; ஈஸ்ட் நொதித்தலுக்கு உதவுகிறது; பெனிசிலியம் நுண்ணுயிர்க்கொல்லி மருந்தை உருவாக்குகிறது.\n3. தொற்றுநோய்கள்: காசநோய் (பாக்டீரியா), போலியோ/சளி (வைரஸ்), மலேரியா (பிளாஸ்மோடியம் புரோட்டோசோவா).\n4. தடுப்பூசிகள் உடலின் நோய் எதிர்ப்புச் சக்தியைத் தூண்டுகின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u23: {
    id: 'note_c9_sci_u23',
    chapterId: 'c9_sci_u23',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Economic Biology - Study Notes',
    titleTa: 'உயிரியல்: பொருளாதார உயிரியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Economic Biology\nApplied biological practices: Horticulture, hydroponics, mushroom cultivation, sericulture, apiculture, aquaculture, and dairy farming.\n\n### 2. Core Scientific Concepts\n1. Horticulture involves cultivation of fruits, vegetables, and ornamental flowers.\n2. Hydroponics is the soilless cultivation of plants in nutrient-rich water solutions.\n3. Mushroom culture yields protein-rich edible mushrooms (e.g., Agaricus bisporus).\n4. Sericulture (silk production from Bombyx mori silkworm), Apiculture (honeybee rearing), and Aquaculture (fish and prawn farming) provide rural employment and high nutritional yield.\n5. Biofertilizers (Rhizobium, Azospirillum) enrich soil sustainably.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. பொருளாதார உயிரியல் அறிமுகம்\nபயன்பாட்டு உயிரியல் முறைகள்: தோட்டக்கலை, ஹைட்ரோபோனிக்ஸ் (மண்ணில்லா விவசாயம்), காளான் வளர்ப்பு, பட்டுப்புழு வளர்ப்பு, தேனீ வளர்ப்பு, மீன் வளர்ப்பு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. தோட்டக்கலை: பழங்கள், காய்கறிகள் மற்றும் அலங்கார மலர்களைப் பயிரிடுதல்.\n2. ஹைட்ரோபோனிக்ஸ்: மண்ணில்லாமல் ஊட்டச்சத்து நிறைந்த நீரில் தாவரங்களை வளர்க்கும் நவீன முறை.\n3. காளான் வளர்ப்பு புரதச்சத்து மிகுந்த உணவை வழங்குகிறது.\n4. பட்டுப்புழு வளர்ப்பு (செரிகல்ச்சர்), தேனீ வளர்ப்பு (ஏபிகல்ச்சர்), மீன் வளர்ப்பு (அக்வாகல்ச்சர்) ஆகியவை கிராமப்புற வேலைவாய்ப்பையும் வருமானத்தையும் அளிக்கின்றன.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
  c9_sci_u24: {
    id: 'note_c9_sci_u24',
    chapterId: 'c9_sci_u24',
    classLevel: 9,
    subjectId: 'c9_science',
    titleEn: 'Biology: Environmental Science - Study Notes',
    titleTa: 'உயிரியல்: சூழ்நிலை அறிவியல் - பாடக் குறிப்புகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. R. Meenakshi Sundaram, M.Sc., M.Ed., Ph.D.',
    reviewedByRole: 'Senior State Resource Person (TNSCERT Science)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Comprehensive curriculum alignment with Samacheer Kalvi State Board textbook',
    changeNoteTa: 'சமச்சீர் கல்வி பாடத்திட்டத் துல்லியம் மற்றும் முழுமையான விளக்கங்கள்',
    readTimeMinutes: 13,
    bodyEn: "### 1. Introduction to Environmental Science\nEcosystem components, biogeochemical cycles (water, nitrogen, carbon), environmental pollution, waste management (3Rs), and conservation of biodiversity.\n\n### 2. Core Scientific Concepts\n1. Biotic (living) and abiotic (physical) components interact in dynamic ecosystems.\n2. Biogeochemical cycles continuously recycle vital elements: Nitrogen cycle (fixation, nitrification, denitrification), carbon cycle, and water cycle.\n3. Pollution types: Air pollution (smog, acid rain), Water pollution (eutrophication), and Soil contamination.\n4. Sustainable waste management follows 3Rs: Reduce, Reuse, Recycle.\n5. Conservation strategies include wildlife sanctuaries, national parks, and biosphere reserves.\n\n### 3. Practical Applications & Laboratory Relevance\nThis unit forms a vital foundation for Class 10 Board examinations and STEM competitive readiness, emphasising real-life observations, scientific reasoning, and conceptual mastery.",
    bodyTa: "### 1. சூழ்நிலை அறிவியல் அறிமுகம்\nசூழல் மண்டலத்தின் கூறுகள், உயிர் வேதி சுழற்சிகள் (நீர், நைட்ரஜன், கார்பன்), சுற்றுச்சூழல் மாசுபாடு, கழிவு மேலாண்மை மற்றும் பல்லுயிர் பாதுகாப்பு.\n\n### 2. முக்கிய அறிவியல் கருத்துகள்\n1. சூழல் மண்டலம் உயிருள்ள மற்றும் உயிரற்ற காரணிகளின் ஒருங்கிணைப்பால் செயல்படுகிறது.\n2. உயிர் வேதி சுழற்சிகள்: நைட்ரஜன் சுழற்சி (நிலைநிறுத்துதல், நைட்ரேட்டாதல், நைட்ரஜன் வெளியேற்றம்), நீர் மற்றும் கார்பன் சுழற்சிகள்.\n3. மாசுபாடுகள்: காற்று, நீர், நில மாசுபாடு மற்றும் பசுமை இல்ல விளைவு.\n4. கழிவு மேலாண்மை 3R தத்துவம்: குறைத்தல் (Reduce), மறுபயன்பாடு (Reuse), மறுசுழற்சி (Recycle).\n5. பல்லுயிர் பாதுகாப்பு: தேசிய பூங்காக்கள் மற்றும் வனவிலங்கு சரணாலயங்கள்.\n\n### 3. செய்முறை மற்றும் தேர்வு வழிகாட்டுதல்\nஇப்பாடம் 10-ஆம் வகுப்பு பொதுத்தேர்வு மற்றும் அறிவியல் விழிப்புணர்வுக்கான முக்கிய அடித்தளமாகும். நடைமுறை வாழ்க்கையுடன் இணைந்த அறிவியல் அறிவை வளர்க்க உதவுகிறது.",
    rememberBoxes: [
      {
        tipEn: 'Focus on core definitions, formulas, and diagrams for high scores in 2-mark and 5-mark examination questions.',
        tipTa: 'தேர்வில் அதிக மதிப்பெண்கள் பெற முக்கிய வரைமுறைகள், சூத்திரங்கள் மற்றும் படங்களை நன்கு பயிற்சி செய்யவும்.'
      }
    ],
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. R. Meenakshi Sundaram',
        changeNote: 'Syllabus aligned with TNSCERT textbook standards',
        changeNoteTa: 'பாடத்திட்டத் துல்லியம் சரிபார்க்கப்பட்டது'
      }
    ]
  },
};

export const CLASS_9_SCIENCE_SUMMARIES: Record<string, SummaryItem> = {
  c9_sci_u1: {
    id: 'sum_c9_sci_u1',
    chapterId: 'c9_sci_u1',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Physical quantities are divided into Fundamental (Length, Mass, Time, Temperature, Electric Current, Luminous Intensity, Amount of Substance) and Derived quantities.",
      "SI system provides international uniformity with defined standard base units.",
      "Vernier Caliper measures with a least count of 0.01 cm (0.1 mm) for internal and external dimensions.",
      "Screw Gauge measures extremely thin objects like wires and sheets with a precision least count of 0.01 mm.",
      "Mass is the quantity of matter (measured in kg using beam balance); Weight is the gravitational force W = mg (measured in N using spring balance)."
],
    keyPointsTa: [
      "இயற்பியல் அளவுகள் அடிப்படை அளவுகள் (நீளம், நிறை, காலம், வெப்பநிலை, மின்னோட்டம், ஒளிச்செறிவு, பொருளின் அளவு) மற்றும் வழி அளவுகளாக வகைப்படுத்தப்படுகின்றன.",
      "SI அலகு முறை உலகளாவிய சீரான அளவீட்டுத் தரத்தை வழங்குகிறது.",
      "வெர்னியர் அளவியின் மீச்சிற்றளவு 0.01 செ.மீ (0.1 மி.மீ) ஆகும்; இது உள் மற்றும் வெளி விட்டங்களை அளவிட உதவுகிறது.",
      "திருகு அளவியின் மீச்சிற்றளவு 0.01 மி.மீ ஆகும்; இது மெல்லிய கம்பிகள், தாள்களைத் துல்லியமாக அளவிட உதவுகிறது.",
      "நிறை என்பது பருப்பொருளின் அளவு (கிகி, இயற்பியல் தராசு); எடை என்பது புவியீர்ப்பு விசை W = mg (நியூட்டன், சுருள்வில் தராசு)."
],
    simpleExplanationEn: "Fundamental and derived physical quantities, SI base units, Vernier caliper, screw gauge, and measuring mass vs weight.",
    simpleExplanationTa: "அடிப்படை மற்றும் வழி அளவுகள், SI அலகுகள், வெர்னியர் அளவி, திருகு அளவி மற்றும் நிறை-எடை ஒப்பீடு.",
    formulaCheatSheet: [
      {
            "formula": "LC of Vernier = 1 MSD - 1 VSD = 0.01 cm",
            "note": "Least count of standard vernier caliper"
      },
      {
            "formula": "LC of Screw Gauge = Pitch / No. of HSD = 0.01 mm",
            "note": "Least count of standard screw gauge"
      },
      {
            "formula": "W = m × g",
            "note": "Weight formula (mass × gravitational acceleration)"
      }
]
  },
  c9_sci_u2: {
    id: 'sum_c9_sci_u2',
    chapterId: 'c9_sci_u2',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Distance is scalar (actual path length); Displacement is vector (shortest straight-line distance with direction).",
      "Speed = Distance / Time; Velocity = Displacement / Time.",
      "Acceleration a = (v - u) / t represents rate of change of velocity.",
      "Equations of motion for uniform acceleration: v = u + at, s = ut + ½at², v² = u² + 2as.",
      "In uniform circular motion, speed is constant but direction changes continuously, producing centripetal acceleration ac = v²/r directed towards the centre."
],
    keyPointsTa: [
      "தொலைவு என்பது திசையிலா அளவு (பாதை நீளம்); இடப்பெயர்ச்சி என்பது திசையன் அளவு (நேர்கோட்டு குறைந்தபட்ச தொலைவு).",
      "வேகம் = தொலைவு / காலம்; திசைவேகம் = இடப்பெயர்ச்சி / காலம்.",
      "முடுக்கம் a = (v - u) / t என்பது திசைவேக மாறுபாட்டு வீதமாகும்.",
      "சீரான முடுக்க இயக்கச் சமன்பாடுகள்: v = u + at, s = ut + ½at², v² = u² + 2as.",
      "சீரான வட்ட இயக்கத்தில் வேகம் மாறிலியாக இருந்தாலும் திசை மாறுவதால் மையநோக்கு முடுக்கம் உண்டாகிறது."
],
    simpleExplanationEn: "Kinematics principles, distance vs displacement, speed and velocity, acceleration, equations of motion, and uniform circular motion.",
    simpleExplanationTa: "இயக்கவியல் கோட்பாடுகள், தொலைவு-இடப்பெயர்ச்சி, வேகம்-திசைவேகம், முடுக்கம், இயக்கச் சமன்பாடுகள் மற்றும் சீரான வட்ட இயக்கம்.",
    formulaCheatSheet: [
      {
            "formula": "v = u + at",
            "note": "First equation of motion"
      },
      {
            "formula": "s = ut + ½at²",
            "note": "Second equation of motion (displacement)"
      },
      {
            "formula": "v² = u² + 2as",
            "note": "Third equation of motion (velocity-displacement relation)"
      }
]
  },
  c9_sci_u3: {
    id: 'sum_c9_sci_u3',
    chapterId: 'c9_sci_u3',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Thrust is force acting perpendicular to a surface; Pressure = Thrust / Area (SI unit: Pascal or N/m²).",
      "Pressure inside a liquid depends on depth h, density ρ, and acceleration due to gravity g: P = hρg.",
      "Pascal's law states that pressure applied to an enclosed fluid is transmitted undiminished in all directions, as seen in hydraulic lifts and brakes.",
      "Atmospheric pressure at sea level is approximately 1.013 × 10⁵ Pa (measured using mercury barometer).",
      "Archimedes' Principle: A body immersed in fluid experiences an upward buoyant force equal to the weight of the displaced fluid."
],
    keyPointsTa: [
      "செங்குத்தாகச் செயல்படும் விசை உந்துவிசை எனப்படும்; அழுத்தம் = உந்துவிசை / பரப்பு (அலகு: பாஸ்கல்).",
      "திரவத்தின் உள்ளே அழுத்தம் ஆழம் h, அடர்த்தி ρ, புவியீர்ப்பு முடுக்கம் g-ஐப் பொறுத்தது: P = hρg.",
      "பாஸ்கல் விதியின்படி மூடப்பட்ட திரவத்தின் மீது செலுத்தப்படும் அழுத்தம் அனைத்துத் திசைகளிலும் சமமாகப் பரவும் (ஹைட்ராலிக் உயர்த்தி).",
      "ஆர்க்கிமிடிஸ் தத்துவம்: ஒரு பொருள் பாய்மத்தில் மூழ்கும்போது அது இடப்பெயர்ச்சி செய்த பாய்மத்தின் எடைக்குச் சமமான மிதப்பு விசை மேல்நோக்கிச் செயல்படும்."
],
    simpleExplanationEn: "Thrust and pressure, Pascal's law, liquid pressure factors, atmospheric pressure, Archimedes' principle, and flotation principles.",
    simpleExplanationTa: "உந்துவிசை மற்றும் அழுத்தம், பாஸ்கல் விதி, திரவ அழுத்தம், வளிமண்டல அழுத்தம், ஆர்க்கிமிடிஸ் தத்துவம் மற்றும் மிதத்தல் விதிகள்.",
    formulaCheatSheet: [
      {
            "formula": "P = F / A",
            "note": "Pressure definition formula"
      },
      {
            "formula": "P = h × ρ × g",
            "note": "Hydrostatic liquid pressure formula"
      },
      {
            "formula": "F₂ = F₁ × (A₂ / A₁)",
            "note": "Pascal hydraulic lift multiplication"
      }
]
  },
  c9_sci_u4: {
    id: 'sum_c9_sci_u4',
    chapterId: 'c9_sci_u4',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Electric charge Q is measured in Coulombs (C); charge of an electron is e = 1.6 × 10⁻¹⁹ C.",
      "Electric current is the rate of flow of charges: I = Q / t (measured in Amperes using an ammeter in series).",
      "Electric potential difference V = W / Q is measured in Volts using a voltmeter in parallel.",
      "Ohm's fundamental concept connects potential difference and current resistance.",
      "Safety devices include electric fuses, miniature circuit breakers (MCBs), and grounding (earthing)."
],
    keyPointsTa: [
      "மின்னூட்டம் Q கூலும் (C) அலகால் அளவிடப்படுகிறது; எலக்ட்ரானின் மின்னூட்டம் e = 1.6 × 10⁻¹⁹ C.",
      "மின்னோட்டம் என்பது மின்னூட்டம் பாயும் வீதமாகும்: I = Q / t (அலகு: ஆம்பியர், தொடரிணைப்பில் அம்மீட்டர்).",
      "மின்னழுத்த வேறுபாடு V = W / Q (அலகு: வோல்ட், பக்க இணைப்பில் வோல்ட்மீட்டர்).",
      "மின் பாதுகாப்பு சாதனங்கள்: மின் உருகி (fuse), MCB மற்றும் புவித்தொடர்பு (earthing)."
],
    simpleExplanationEn: "Atomic charges, electric force, electric field, potential difference, electric current I = Q/t, circuit diagrams, and electrical safety.",
    simpleExplanationTa: "மின்னூட்டங்கள், மின்புலம், மின்னழுத்த வேறுபாடு, மின்னோட்டம் I = Q/t, மின்சுற்றுகள் மற்றும் மின்காப்பு பாதுகாப்பு.",
    formulaCheatSheet: [
      {
            "formula": "I = Q / t",
            "note": "Electric current definition"
      },
      {
            "formula": "V = W / Q",
            "note": "Electric potential difference formula"
      },
      {
            "formula": "Q = n × e",
            "note": "Quantisation of electric charge"
      }
]
  },
  c9_sci_u5: {
    id: 'sum_c9_sci_u5',
    chapterId: 'c9_sci_u5',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Magnetic field lines emerge from North pole and enter South pole outside a magnet, forming closed continuous loops.",
      "Oersted discovered that an electric current in a wire produces a surrounding magnetic field.",
      "Maxwell's Right-Hand Thumb Rule gives the direction of magnetic field encircling a current-carrying wire.",
      "Fleming's Left-Hand Rule determines the direction of mechanical force on a current-carrying conductor in a magnetic field (foundation of Electric Motors).",
      "Faraday discovered electromagnetic induction, leading to electric generators and transformers."
],
    keyPointsTa: [
      "காந்தப்புலக் கோடுகள் வடதுருவத்தில் தொடங்கி தென்துருவத்தில் முடிவடையும் தொடர்ச்சியான மூடிய வளைகோடுகள்.",
      "ஆயர்ஸ்டெட் மின்னோட்டம் பாயும் கடத்தியைச் சுற்றிலும் காந்தப்புலம் உருவாவதை நிரூபித்தார்.",
      "வலக்கை கட்டைவிரல் விதி காந்தப்புலத்தின் திசையை அறிய உதவுகிறது.",
      "ஃபிளெமிங்கின் இடக்கை விதி காந்தப்புலத்தில் உள்ள கடத்தியின் மீதான விசையின் திசையைக் காட்டுகிறது (மின்மோட்டார் தத்துவம்)."
],
    simpleExplanationEn: "Magnetic field lines, Earth's magnetism, Oersted's experiment, right-hand thumb rule, Fleming's left-hand rule, and electric motors.",
    simpleExplanationTa: "காந்தப்புலக் கோடுகள், புவிக் காந்தவியல், ஆயர்ஸ்டெட் சோதனை, வலக்கை கட்டைவிரல் விதி, ஃபிளெமிங்கின் இடக்கை விதி மற்றும் மின்மோட்டார்.",
    formulaCheatSheet: [
      {
            "formula": "F = B × I × L",
            "note": "Force on conductor in magnetic field"
      },
      {
            "formula": "Fleming's Left Hand: Thumb=Force, Index=Field, Middle=Current",
            "note": "Motor rule mnemonics"
      }
]
  },
  c9_sci_u6: {
    id: 'sum_c9_sci_u6',
    chapterId: 'c9_sci_u6',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Laws of reflection: Angle of incidence i equals angle of reflection r; incident ray, reflected ray, and normal lie in the same plane.",
      "Concave mirrors converge light and produce real or virtual images depending on object distance; used in headlights and solar furnaces.",
      "Convex mirrors diverge light and always produce virtual, erect, and diminished images with a wide field of view; used as rear-view mirrors in vehicles.",
      "Mirror formula: 1/f = 1/v + 1/u, where f = R/2.",
      "Refraction occurs due to speed change across media; Snell's law: sin i / sin r = n₂/n₁."
],
    keyPointsTa: [
      "எதிரொளிப்பு விதிகள்: படுகோணம் = எதிரொளிப்புக் கோணம் (∠i = ∠r); படுகதிர், எதிரொளிப்புக் கதிர், குத்துக்கோடு ஒரே தளத்தில் அமையும்.",
      "குழி ஆடி கதிர்களைக் குவிக்கும் தன்மையுடையது; வாகன முகப்பு விளக்குகள், பல் மருத்துவர் கண்ணாடிகளில் பயன்படுகிறது.",
      "குவி ஆடி அகன்ற பார்வைப்புலத்தைக் கொண்ட நேரான சிறிய மாய பிம்பத்தை உருவாக்குகிறது; வாகனங்களின் பின்னோக்கு ஆடியாகப் பயன்படுகிறது.",
      "ஆடிச் சமன்பாடு: 1/f = 1/v + 1/u, f = R/2.",
      "ஒளிவிலகல் விதிகள்: ஸ்நெல் விதி (sin i / sin r = n₂ / n₁)."
],
    simpleExplanationEn: "Reflection of light, spherical mirrors (concave and convex), mirror formula, magnification, refraction, and refractive index.",
    simpleExplanationTa: "ஒளி எதிரொளிப்பு, கோளக ஆடிகள் (குழி மற்றும் குவி ஆடிகள்), ஆடிச் சமன்பாடு, உருப்பெருக்கம் மற்றும் ஒளிவிலகல் எண்.",
    formulaCheatSheet: [
      {
            "formula": "1/f = 1/v + 1/u",
            "note": "Mirror formula relating focal length and distances"
      },
      {
            "formula": "m = -v / u = h₂ / h₁",
            "note": "Spherical mirror magnification formula"
      },
      {
            "formula": "n = c / v",
            "note": "Absolute refractive index formula"
      }
]
  },
  c9_sci_u7: {
    id: 'sum_c9_sci_u7',
    chapterId: 'c9_sci_u7',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Heat is thermal energy in transit (measured in Joules); Temperature is the degree of hotness or coldness (measured in Kelvin).",
      "Conversion formula: C/100 = (F - 32)/180 = (K - 273.15)/100.",
      "Heat transfers through three modes: Conduction (solids), Convection (fluids), and Radiation (electromagnetic waves requiring no medium).",
      "Specific heat capacity Q = mcΔT is the heat required to raise 1 kg of a substance by 1 K.",
      "Latent heat Q = mL is heat absorbed or released during phase change at constant temperature."
],
    keyPointsTa: [
      "வெப்பம் என்பது பரிமாற்றப்படும் வெப்ப ஆற்றல் (ஜூல்); வெப்பநிலை என்பது ஒரு பொருளின் வெப்ப அல்லது குளிர்ச்சியின் அளவு (கெல்வின்).",
      "அளவீட்டு மாற்றீடு: C / 100 = (F - 32) / 180 = (K - 273.15) / 100.",
      "வெப்பப் பரவல் முறைகள்: வெப்பக் கடத்தல் (திண்மம்), வெப்பச் சலனம் (பாய்மம்), வெப்பக் கதிர்வீச்சு (ஊடகம் தேவையில்லை).",
      "தன்வெப்ப ஏற்புத்திறன்: Q = mcΔT; உள்ளுறை வெப்பம்: Q = mL."
],
    simpleExplanationEn: "Temperature scales (Celsius, Fahrenheit, Kelvin), heat transfer modes, thermal expansion, specific heat capacity, and latent heat.",
    simpleExplanationTa: "வெப்பநிலை அளவீட்டு முறைகள் (செல்சியஸ், ஃபாரன்ஹீட், கெல்வின்), வெப்பப் பரவல் முறைகள், தன்வெப்ப ஏற்புத்திறன் மற்றும் உள்ளுறை வெப்பம்.",
    formulaCheatSheet: [
      {
            "formula": "Q = m × c × ΔT",
            "note": "Heat energy equation"
      },
      {
            "formula": "K = °C + 273.15",
            "note": "Celsius to Kelvin conversion"
      },
      {
            "formula": "Q = m × L",
            "note": "Latent heat formula"
      }
]
  },
  c9_sci_u8: {
    id: 'sum_c9_sci_u8',
    chapterId: 'c9_sci_u8',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Sound is produced by vibrating bodies and propagates as mechanical longitudinal waves consisting of compressions and rarefactions.",
      "Sound requires a material medium and cannot travel through a vacuum.",
      "Wave speed formula: v = f × λ (velocity = frequency × wavelength).",
      "Human audible range is 20 Hz to 20,000 Hz (20 kHz); sounds below 20 Hz are infrasonic, above 20 kHz are ultrasonic.",
      "Echo requires a minimum obstacle distance of 17.2 m in air (at 20°C); Ultrasound is used in SONAR and medical ultrasonography."
],
    keyPointsTa: [
      "ஒலி அதிர்வடையும் பொருள்களால் உருவாக்கப்பட்டு, இறுக்கங்கள் மற்றும் தளர்ச்சிகள் கொண்ட நெட்டலைகளாகப் பரவுகிறது.",
      "ஒலி பரவ பருப்பொருள் ஊடகம் தேவை; அது வெற்றிடத்தில் பரவாது.",
      "அலைச் சமன்பாடு: v = f × λ (திசைவேகம் = அதிர்வெண் × அலைநீளம்).",
      "மனிதனின் கேட்கும் திறன் வரம்பு 20 Hz முதல் 20,000 Hz வரை ஆகும்.",
      "தெளிவான எதிரொலியைக் கேட்க எதிரொலிக்கும் பரப்பு குறைந்தபட்சம் 17.2 மீ தொலைவில் இருக்க வேண்டும்."
],
    simpleExplanationEn: "Production and propagation of sound, longitudinal waves, wave equation v = fλ, speed in media, reflection, echo, and ultrasound application.",
    simpleExplanationTa: "ஒலி உருவாக்கம் மற்றும் பரவுதல், நெட்டலைகள், அலைச் சமன்பாடு v = fλ, எதிரொலி, மீயொலி மற்றும் சோனார் பயன்பாடுகள்.",
    formulaCheatSheet: [
      {
            "formula": "v = f × λ",
            "note": "Wave velocity formula"
      },
      {
            "formula": "d = (v × t) / 2",
            "note": "Echo and SONAR distance calculation"
      }
]
  },
  c9_sci_u9: {
    id: 'sum_c9_sci_u9',
    chapterId: 'c9_sci_u9',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "The Big Bang theory suggests the universe expanded from an extremely dense singularity about 13.7 billion years ago.",
      "A galaxy is a massive gravitationally bound system of stars, gas, and dust; Earth resides in the barred spiral Milky Way galaxy.",
      "Astronomical Unit (AU = 1.496 × 10¹¹ m) is average Earth-Sun distance; Light Year (9.46 × 10¹⁵ m) measures interstellar distances.",
      "Artificial satellites serve communication, meteorology, navigation, and remote sensing functions.",
      "ISRO missions: Chandrayaan discovered water molecules on the Moon; Mangalyaan entered Martian orbit successfully on first attempt."
],
    keyPointsTa: [
      "பெருவெடிப்புக் கோட்பாட்டின்படி அண்டம் சுமார் 13.7 பில்லியன் ஆண்டுகளுக்கு முன்பு உருவானது.",
      "பூமி அமைந்துள்ள விண்மீன் திரள் பால்வெளி (Milky Way) ஆகும்.",
      "வானியல் அலகு (AU = 1.496 × 10¹¹ மீ) மற்றும் ஒளி ஆண்டு (9.46 × 10¹⁵ மீ) விண்வெளி தூரங்களை அளவிடப் பயன்படுகின்றன.",
      "செயற்கைக்கோள்கள் தகவல் தொடர்பு, வானிலை மற்றும் வழிகாட்டுதலுக்குப் பயன்படுகின்றன.",
      "இஸ்ரோவின் சாதனைகள்: நிலவில் நீர் இருப்பதை உறுதி செய்த சந்திரயான், செவ்வாயை ஆய்வு செய்த மங்கள்யான்."
],
    simpleExplanationEn: "Origin of universe, Big Bang theory, galaxies, stars, solar system, satellites, and ISRO space missions (Chandrayaan & Mangalyaan).",
    simpleExplanationTa: "அண்டத்தின் தோற்றம், பெருவெடிப்புக் கோட்பாடு, விண்மீன் திரள்கள், சூரிய குடும்பம் மற்றும் இஸ்ரோ விண்வெளித் திட்டங்கள் (சந்திரயான், மங்கள்யான்).",
    formulaCheatSheet: [
      {
            "formula": "1 AU = 1.496 × 10¹¹ m",
            "note": "Astronomical unit"
      },
      {
            "formula": "1 Light Year = 9.46 × 10¹⁵ m",
            "note": "Distance light travels in one vacuum year"
      }
]
  },
  c9_sci_u10: {
    id: 'sum_c9_sci_u10',
    chapterId: 'c9_sci_u10',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Matter is classified into pure substances (elements and compounds) and mixtures.",
      "Mixtures are either homogeneous (uniform composition like solutions) or heterogeneous (non-uniform like suspensions).",
      "Separation techniques include filtration, sublimation, distillation, fractional distillation, and chromatography.",
      "Colloids display the Tyndall effect (scattering of light by dispersed particles) and Brownian motion.",
      "True solutions have particle sizes < 1 nm; Colloids 1–100 nm; Suspensions > 100 nm."
],
    keyPointsTa: [
      "பருப்பொருட்கள் தூய பொருட்கள் (தனிமங்கள் மற்றும் சேர்மங்கள்) மற்றும் கலவைகளாகப் பிரிக்கப்படுகின்றன.",
      "கலவைகள் ஒருபடித்தானவை (கரைசல்கள்) அல்லது பலபடித்தானவை (தொங்கல்கள்).",
      "பிரித்தெடுக்கும் முறைகள்: வடிகட்டுதல், பதங்கமாதல், காய்ச்சி வடித்தல், பின்னக் காய்ச்சி வடித்தல் மற்றும் வண்ணப்பிரிகை முறை.",
      "கூழ்மங்கள் டின்டால் விளைவு மற்றும் பிரௌனியன் இயக்கத்தை வெளிப்படுத்துகின்றன."
],
    simpleExplanationEn: "Classification of matter into elements, compounds, and mixtures; types of mixtures (homogeneous & heterogeneous), separation techniques, and colloids.",
    simpleExplanationTa: "பருப்பொருட்களின் வகைப்பாடு: தனிமங்கள், சேர்மங்கள், கலவைகள், கலவைகளைப் பிரித்தெடுக்கும் முறைகள் மற்றும் கூழ்மங்கள்.",
    formulaCheatSheet: [
      {
            "formula": "True Solution < 1 nm < Colloid < 100 nm < Suspension",
            "note": "Particle size scale"
      }
]
  },
  c9_sci_u11: {
    id: 'sum_c9_sci_u11',
    chapterId: 'c9_sci_u11',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Proton (+1 charge, discovered by Goldstein), Electron (-1, J.J. Thomson), and Neutron (0 charge, Chadwick).",
      "Atomic number Z = number of protons; Mass number A = protons + neutrons.",
      "Bohr model: Electrons revolve in stationary energy shells (K, L, M, N) with maximum capacity 2n².",
      "Valence electrons in the outermost shell determine chemical reactivity and valency.",
      "Isotopes have same atomic number Z but different mass number A (e.g., ¹H, ²H, ³H); Isobars have same A but different Z."
],
    keyPointsTa: [
      "புரோட்டான் (+1, கோல்ட்ஸ்டீன்), எலக்ட்ரான் (-1, ஜே.ஜே. தாம்சன்), நியூட்ரான் (மின்னூட்டமற்றது, சாட்விக்).",
      "அணு எண் Z = புரோட்டான்களின் எண்ணிக்கை; நிறை எண் A = புரோட்டான்கள் + நியூட்ரான்கள்.",
      "போர் மாதிரி: எலக்ட்ரான்கள் குறிப்பிட்ட வட்டப்பாதைகளில் (K, L, M, N) சுற்றுகின்றன (அதிகபட்ச எலக்ட்ரான்கள் 2n²).",
      "ஐசோடோப்புகள்: ஒத்த அணு எண்ணும் வேறுபட்ட நிறை எண்ணும் கொண்ட ஒரே தனிமத்தின் அணுக்கள்."
],
    simpleExplanationEn: "Subatomic particles (electrons, protons, neutrons), Thomson & Rutherford models, Bohr model, atomic and mass numbers, isotopes, and electronic configuration.",
    simpleExplanationTa: "அணுவின் அடிப்படைத் துகள்கள், தாம்சன்-ரூதர்போர்டு-போர் அணு மாதிரிகள், அணு எண், நிறை எண், ஐசோடோப்புகள் மற்றும் எலக்ட்ரான் பகிர்வு.",
    formulaCheatSheet: [
      {
            "formula": "2n² rule (K=2, L=8, M=18, N=32)",
            "note": "Bohr-Bury maximum electron shell capacity"
      },
      {
            "formula": "A = Z + n",
            "note": "Mass number = Atomic number + Neutrons"
      }
]
  },
  c9_sci_u12: {
    id: 'sum_c9_sci_u12',
    chapterId: 'c9_sci_u12',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Dobereiner's Triads grouped elements in threes; Newlands proposed the Law of Octaves.",
      "Mendeleev arranged elements in increasing atomic mass; Modern Periodic Table arranges elements by atomic number Z (Moseley).",
      "Modern Periodic Table contains 7 horizontal periods and 18 vertical groups.",
      "Periodic trends: Atomic radius increases down a group and decreases across a period.",
      "Valency, ionization energy, and electronegativity follow structured periodic variations."
],
    keyPointsTa: [
      "டாபரீனரின் மும்மை விதி, நியூலேண்டின் எண்ம விதி மற்றும் மெண்டலீவின் ஆவர்த்தன அட்டவணை.",
      "நவீன ஆவர்த்தன விதி (மோஸ்லே): தனிமங்களின் இயற்பியல் மற்றும் வேதியியல் பண்புகள் அவற்றின் அணு எண்களின் ஆவர்த்தன செயல்பாடாகும்.",
      "நவீன ஆவர்த்தன அட்டவணையில் 7 தொடர்களும் 18 தொகுதிகளும் உள்ளன.",
      "தொகுதியில் கீழிறங்கும் போது அணு ஆரம் அதிகரிக்கும், தொடரில் இடமிருந்து வலம் செல்லும்போது குறையும்."
],
    simpleExplanationEn: "Historical developments (Dobereiner, Newlands, Mendeleev), Modern Periodic Law, Modern Periodic Table groups and periods, and periodic trends.",
    simpleExplanationTa: "ஆவர்த்தன வகைப்பாட்டின் வளர்ச்சி, மெண்டலீவ் அட்டவணை, நவீன ஆவர்த்தன விதி, 18 தொகுதிகள் மற்றும் 7 தொடர்கள், ஆவர்த்தனப் பண்புகள்.",
    formulaCheatSheet: [
      {
            "formula": "Modern Periodic Law: Properties are periodic functions of Atomic Number (Z)",
            "note": "Fundamental law"
      }
]
  },
  c9_sci_u13: {
    id: 'sum_c9_sci_u13',
    chapterId: 'c9_sci_u13',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Octet Rule: Atoms combine to achieve a stable electronic configuration with 8 valence electrons like noble gases.",
      "Ionic Bonding: Transfer of electrons from metal (cation) to non-metal (anion), e.g., NaCl, MgO.",
      "Covalent Bonding: Mutual sharing of electron pairs between non-metal atoms, e.g., H₂, O₂, CH₄.",
      "Ionic compounds have high melting points, dissolve in polar water, and conduct electricity in molten/solution states.",
      "Covalent compounds have lower melting points and generally do not conduct electricity."
],
    keyPointsTa: [
      "எண்ம விதி: மந்த வாயுக்களின் நிலையான எலக்ட்ரான் அமைப்பைப் பெற அணுக்கள் பிணைப்பை உருவாக்குகின்றன.",
      "அயனிப் பிணைப்பு: உலோகத்திற்கும் அலோகத்திற்கும் இடையே எலக்ட்ரான் பரிமாற்றத்தால் உருவாகிறது (NaCl).",
      "சகப்பிணைப்பு: அணுக்களுக்கிடையே எலக்ட்ரான்கள் சமமாகப் பகிரப்படுவதால் உருவாகிறது (H₂, O₂, CH₄).",
      "அயனிச் சேர்மங்கள் அதிக உருகுநிலை கொண்டவை மற்றும் கரைசலில் மின்சாரத்தைக் கடத்துகின்றன."
],
    simpleExplanationEn: "Octet rule, ionic (electrovalent) bonding, covalent bonding, coordinate covalent bonding, and properties of ionic vs covalent compounds.",
    simpleExplanationTa: "எண்ம விதி, அயனிப் பிணைப்பு, சகப்பிணைப்பு, ஈதல் சகப்பிணைப்பு மற்றும் பிணைப்புச் சேர்மங்களின் பண்புகள்.",
    formulaCheatSheet: [
      {
            "formula": "Ionic = Metal + Non-metal (transfer); Covalent = Non-metal + Non-metal (sharing)",
            "note": "Bond classification"
      }
]
  },
  c9_sci_u14: {
    id: 'sum_c9_sci_u14',
    chapterId: 'c9_sci_u14',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Acids release H⁺ ions in aqueous solutions, taste sour, and turn blue litmus red.",
      "Bases release OH⁻ ions, taste bitter, feel soapy, and turn red litmus blue; water-soluble bases are Alkalis.",
      "pH scale (0–14): pH < 7 is acidic, pH = 7 is neutral (pure water), pH > 7 is basic.",
      "Neutralization: Acid + Base → Salt + Water (e.g., HCl + NaOH → NaCl + H₂O).",
      "Important salts: Common salt (NaCl), Washing soda (Na₂CO₃·10H₂O), Baking soda (NaHCO₃), Bleaching powder (CaOCl₂)."
],
    keyPointsTa: [
      "அமிலங்கள் நீர்க்கரைசலில் H⁺ அயனிகளைத் தருகின்றன, புளிப்புச் சுவை கொண்டவை, நீல லிட்மஸை சிவப்பாக மாற்றுகின்றன.",
      "காரங்கள் OH⁻ அயனிகளைத் தருகின்றன, கசப்புச் சுவை கொண்டவை, சிவப்பு லிட்மஸை நீலமாக மாற்றுகின்றன.",
      "pH அளவீடு (0–14): pH < 7 அமிலம்; pH = 7 நடுநிலை; pH > 7 காரம்.",
      "நடுநிலையாக்கல் வினை: அமிலம் + காரம் → உப்பு + நீர்.",
      "பயன்பாட்டு உப்புகள்: சாதாரண உப்பு, சலவை சோடா, சமையல் சோடா மற்றும் சலவைத்தூள்."
],
    simpleExplanationEn: "Properties of acids and bases, Arrhenius theory, pH scale, neutralization reaction, types of salts, and everyday applications.",
    simpleExplanationTa: "அமிலங்கள் மற்றும் காரங்களின் பண்புகள், அர்ஹீனியஸ் கொள்கை, pH அளவீடு, நடுநிலையாக்கல் வினை மற்றும் உப்புகளின் வகைகள்.",
    formulaCheatSheet: [
      {
            "formula": "Acid + Base → Salt + Water (Neutralization)",
            "note": "Neutralization reaction"
      },
      {
            "formula": "pH = -log₁₀[H⁺]",
            "note": "pH scale definition"
      }
]
  },
  c9_sci_u15: {
    id: 'sum_c9_sci_u15',
    chapterId: 'c9_sci_u15',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Carbon has atomic number 6, electronic configuration 2, 4, exhibiting tetravalency.",
      "Catenation is carbon's unique ability to form long self-linking chains and rings.",
      "Allotropes of carbon: Diamond (hardest natural substance, non-conductor), Graphite (hexagonal layers, conductor), Fullerenes, and Graphene.",
      "Hydrocarbons: Saturated alkanes (CₙH₂ₙ₊₂ with single bonds) and unsaturated alkenes (CₙH₂ₙ) and alkynes (CₙH₂ₙ₋₂).",
      "Carbon compounds form the basis of organic chemistry, fuels, plastics, and pharmaceuticals."
],
    keyPointsTa: [
      "கார்பன் அணு எண் 6, நான்கு இணைதிறன் கொண்டது.",
      "சங்கிலித் தொடராக்கம்: கார்பன் அணுக்கள் தங்களுக்குள்ளேயே இணைந்து நீண்ட சங்கிலிகளையும் வளையங்களையும் உருவாக்கும் திறன்.",
      "புறவேற்றுமை வடிவங்கள்: வைரம் (கடினமானது, மின்கடத்தா), கிராஃபைட் (அடுக்கு அமைப்பு, மின்கடத்தும்), புல்லரீன்.",
      "ஹைட்ரோகார்பன்கள்: ஆல்கேன்கள் (CₙH₂ₙ₊₂), ஆல்கீன்கள் (CₙH₂ₙ) மற்றும் ஆல்கைன்கள் (CₙH₂ₙ₋₂)."
],
    simpleExplanationEn: "Unique nature of carbon (catenation, tetravalency), allotropes (diamond, graphite, fullerenes, graphene), hydrocarbons, and functional groups.",
    simpleExplanationTa: "கார்பனின் சிறப்புப் பண்புகள் (சங்கிலித் தொடராக்கம், நான்கு இணைதிறன்), புறவேற்றுமை வடிவங்கள் (வைரம், கிராஃபைட்), ஹைட்ரோகார்பன்கள்.",
    formulaCheatSheet: [
      {
            "formula": "Alkanes: CₙH₂ₙ₊₂, Alkenes: CₙH₂ₙ, Alkynes: CₙH₂ₙ₋₂",
            "note": "General hydrocarbon formulas"
      }
]
  },
  c9_sci_u16: {
    id: 'sum_c9_sci_u16',
    chapterId: 'c9_sci_u16',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Radiochemistry utilizes radioisotopes in medicine (Co-60 for cancer therapy, I-131 for thyroid diagnosis).",
      "Agricultural chemistry enhances crop yields with NPK fertilizers and protects crops with targeted pesticides.",
      "Forensic chemistry aids legal investigations through fingerprint analysis, toxicology, and blood detection.",
      "Dyes impart permanent color to textiles; cosmetics and soaps rely on emulsions and surfactants.",
      "Green chemistry focuses on sustainable practices reducing hazardous chemical by-products."
],
    keyPointsTa: [
      "கதிரியக்க வேதியியல்: மருத்துவத்தில் கோபால்ட்-60 புற்றுநோய் சிகிச்சையிலும், அயோடின்-131 தைராய்டு கண்டறிதலிலும் பயன்படுகிறது.",
      "வேளாண் வேதியியல்: NPK உரங்கள் மூலம் விளைச்சலை அதிகரிக்கிறது.",
      "தடயவியல் வேதியியல்: கைரேகை ஆய்வு, நச்சுயியல் மூலம் குற்றப் புலனாய்வுக்கு உதவுகிறது.",
      "சாயங்கள், அழகுசாதனப் பொருட்கள் மற்றும் பசைகள் அன்றாட வாழ்வில் முக்கிய பங்கு வகிக்கின்றன."
],
    simpleExplanationEn: "Industrial and everyday chemistry: Radiochemistry, agricultural chemistry (fertilizers & pesticides), forensic chemistry, dyes, cosmetics, and adhesives.",
    simpleExplanationTa: "கதிரியக்க வேதியியல், வேளாண் வேதியியல் (உரங்கள், பூச்சிக்கொல்லிகள்), தடயவியல் வேதியியல், சாயங்கள், அழகுசாதனப் பொருட்கள் மற்றும் பசைகள்.",
    formulaCheatSheet: [
      {
            "formula": "Cobalt-60: Cancer radiotherapy; Iodine-131: Thyroid treatment",
            "note": "Medical radioisotopes"
      }
]
  },
  c9_sci_u17: {
    id: 'sum_c9_sci_u17',
    chapterId: 'c9_sci_u17',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Animals are classified based on cellular organization, symmetry (radial/bilateral), germ layers, and coelom (body cavity).",
      "Invertebrates lack a backbone: Porifera (sponges), Coelenterata (hydra), Platyhelminthes (flatworms), Nematoda (roundworms), Annelida (earthworm), Arthropoda (jointed legs - largest phylum), Mollusca (soft-bodied), and Echinodermata (spiny skin).",
      "Chordates possess a notochord, dorsal hollow nerve cord, and pharyngeal gill slits.",
      "Vertebrates: Pisces (cold-blooded, gills), Amphibia (dual life), Reptilia (scales, lay eggs on land), Aves (feathers, pneumatic bones), Mammalia (mammary glands, hair, warm-blooded)."
],
    keyPointsTa: [
      "விலங்குகள் சமச்சீர் அமைப்பு, உடற்குழி மற்றும் செல்லுலார் அமைப்பின் அடிப்படையில் வகைப்படுத்தப்படுகின்றன.",
      "முதுகெலும்பற்றவை: துளை உடலிகள், குழியுடலிகள், தட்டைப்புழுக்கள், உருளைப்புழுக்கள், வளைதசைப் புழுக்கள், கணுக்காலிகள் (மிகப்பெரிய தொகுதி), மெல்லுடலிகள், முட்தோலிகள்.",
      "முதுகெலும்புள்ளவை: மீன்கள், இருவாழ்விகள், ஊர்வன, பறவைகள் மற்றும் பாலூட்டிகள் (பாலூட்டும் சுரப்பிகள், வெப்ப இரத்த விலங்குகள்)."
],
    simpleExplanationEn: "Basis of animal classification, invertebrate phyla (Porifera to Echinodermata), chordate characteristics, and vertebrate classes (Pisces to Mammalia).",
    simpleExplanationTa: "விலங்குகளின் வகைப்பாட்டின் அடிப்படைகள், முதுகெலும்பற்றவை (துளை உடலிகள் முதல் முட்தோலிகள் வரை) மற்றும் முதுகெலும்புள்ளவை (மீன்கள் முதல் பாலூட்டிகள் வரை).",
    formulaCheatSheet: [
      {
            "formula": "Arthropoda = Largest animal phylum (jointed appendages)",
            "note": "Taxonomic landmark"
      }
]
  },
  c9_sci_u18: {
    id: 'sum_c9_sci_u18',
    chapterId: 'c9_sci_u18',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "A tissue is a cluster of similar cells performing a common specialized function.",
      "Plant tissues: Meristematic tissue divides actively (apical, intercalary, lateral); Permanent tissues include parenchyma, collenchyma, sclerenchyma, and vascular tissues (xylem conducts water, phloem translocates food).",
      "Animal tissues: Epithelial (covering), Connective (bone, cartilage, blood, adipose), Muscular (striated, smooth, cardiac), and Nervous tissue (neurons)."
],
    keyPointsTa: [
      "ஒரே மாதிரியான தோற்றமும் குறிப்பிட்ட பணியும் கொண்ட செல்களின் தொகுப்பு திசு எனப்படும்.",
      "தாவரத் திசுக்கள்: ஆக்குத்திசு மற்றும் நிலைத்த திசுக்கள் (சைலம் நீரை கடத்தும், புளோயம் உணவைக் கடத்தும்).",
      "விலங்குத் திசுக்கள்: எபிதீலியல் திசு, இணைப்புத் திசு (எலும்பு, இரத்தம்), தசைத் திசு மற்றும் நரம்புத் திசு (நியூரான்கள்)."
],
    simpleExplanationEn: "Plant tissues (meristematic and permanent: xylem and phloem) and animal tissues (epithelial, connective, muscular, and nervous tissues).",
    simpleExplanationTa: "தாவரத் திசுக்கள் (ஆக்குத்திசு மற்றும் நிலைத்த திசுக்கள்: சைலம் மற்றும் புளோயம்) மற்றும் விலங்குத் திசுக்கள் (எபிதீலியல், இணைப்பு, தசை, நரம்புத் திசு).",
    formulaCheatSheet: [
      {
            "formula": "Xylem: Water & Minerals (Unidirectional); Phloem: Sucrose & Food (Bidirectional)",
            "note": "Vascular conduction"
      }
]
  },
  c9_sci_u19: {
    id: 'sum_c9_sci_u19',
    chapterId: 'c9_sci_u19',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Tropisms are directional growth movements in response to stimuli: Phototropism (light), Geotropism (gravity), Hydrotropism (water), Thigmotropism (touch).",
      "Nastic movements are non-directional responses independent of stimulus direction, e.g., Thigmonasty in Mimosa pudica (Touch-me-not).",
      "Photosynthesis converts CO₂ and water into glucose and oxygen using chlorophyll and sunlight: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
      "Transpiration is the evaporation of water vapor through stomata, generating suction pull."
],
    keyPointsTa: [
      "திசைசார் அசைவுகள்: ஒளிச்சார்பசைவு (ஒளி), புவிச்சார்பசைவு (புவியீர்ப்பு), நீர்ச்சார்பசைவு (நீர்), தொடுவுறு வளைதல் (தொடுதல்).",
      "திசையுறா அசைவுகள்: தொட்டால் சுருங்கி (Mimosa pudica).",
      "ஒளிச்சேர்க்கை: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.",
      "நீராவிப்போக்கு இலைத்துளைகள் வழியாக நீராவியை வெளியேற்றி தாவரத்தை குளிர்ச்சியாக வைக்கிறது."
],
    simpleExplanationEn: "Plant movements (tropisms and nastic movements), photosynthesis mechanism, transpiration, and translocation.",
    simpleExplanationTa: "தாவர அசைவுகள் (திசைசார் மற்றும் திசையுறா அசைவுகள்), ஒளிச்சேர்க்கை, நீராவிப்போக்கு மற்றும் உணவு கடத்துதல்.",
    formulaCheatSheet: [
      {
            "formula": "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (Photosynthesis)",
            "note": "Photosynthetic reaction"
      }
]
  },
  c9_sci_u20: {
    id: 'sum_c9_sci_u20',
    chapterId: 'c9_sci_u20',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Digestive system: Alimentary canal and glands (liver, pancreas) break down food into absorbable nutrients.",
      "Respiratory system: Lungs and alveoli facilitate gaseous exchange (O₂ intake and CO₂ release).",
      "Circulatory system: Four-chambered heart, blood vessels (arteries, veins, capillaries), and blood transport oxygen and nutrients.",
      "Excretory system: Kidneys with millions of nephrons filter blood, removing nitrogenous urea and maintaining homeostasis."
],
    keyPointsTa: [
      "செரிமான மண்டலம்: உணவுக்குழல், கல்லீரல், கணையம் ஆகியவை உணவை எளிய ஊட்டச்சத்துக்களாக மாற்றுகின்றன.",
      "சுவாச மண்டலம்: நுரையீரல் மற்றும் நுண்காற்றுப் பைகள் வழியே வாயுப் பரிமாற்றம் நிகழ்கிறது.",
      "இரத்த ஓட்ட மண்டலம்: நான்கு அறைகளைக் கொண்ட இதயம் மற்றும் இரத்தக் குழாய்கள் மூலம் உடலெங்கும் இரத்தம் பாய்கிறது.",
      "கழிவுநீக்க மண்டலம்: சிறுநீரகத்திலுள்ள நெஃப்ரான்கள் இரத்தத்தை வடிகட்டி யூரியாவை வெளியேற்றுகின்றன."
],
    simpleExplanationEn: "Human organ systems overview: Digestive system, respiratory system, circulatory system, and excretory system structure and physiology.",
    simpleExplanationTa: "மனிதனின் உறுப்பு மண்டலங்கள்: செரிமான மண்டலம், சுவாச மண்டலம், இரத்த ஓட்ட மண்டலம் மற்றும் கழிவுநீக்க மண்டலங்களின் அமைப்பு மற்றும் செயல்முறைகள்.",
    formulaCheatSheet: [
      {
            "formula": "Nephron = Structural and functional unit of the kidney",
            "note": "Excretory unit"
      }
]
  },
  c9_sci_u21: {
    id: 'sum_c9_sci_u21',
    chapterId: 'c9_sci_u21',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Nutrients are energy-giving (carbohydrates, fats), body-building (proteins), and protective (vitamins, minerals).",
      "Protein deficiency causes Kwashiorkor and Marasmus in children.",
      "Vitamin deficiencies: Vitamin A (Night blindness), Vitamin B1 (Beriberi), Vitamin C (Scurvy), Vitamin D (Rickets).",
      "Mineral deficiencies: Iron (Anaemia), Iodine (Goitre), Calcium (weak bones and teeth).",
      "Food safety and hygiene prevent microbial spoilage and food adulteration."
],
    keyPointsTa: [
      "ஊட்டச்சத்துக்கள்: ஆற்றல் தருபவை (கார்போஹைட்ரேட்), உடல் வளர்ச்சிக்கு உதவுபவை (புரதம்), பாதுகாப்பளிப்பவை (வைட்டமின்கள், தாதுக்கள்).",
      "புரதக் குறைபாட்டு நோய்கள்: குவாஷியார்கர் மற்றும் மராஸ்மஸ்.",
      "வைட்டமின் குறைபாடுகள்: வைட்டமின் A (மாலைக்கண்), வைட்டமின் B1 (பெரிபெரி), வைட்டமின் C (ஸ்கர்வி), வைட்டமின் D (ரிக்கெட்ஸ்).",
      "தாது உப்பு குறைபாடுகள்: இரும்புச்சத்து (இரத்த சோகை), அயோடின் (முன்கழுத்துக் கழலை - காய்ட்டர்)."
],
    simpleExplanationEn: "Classes of nutrients (carbohydrates, proteins, fats, vitamins, minerals), deficiency diseases, balanced diet, and food hygiene.",
    simpleExplanationTa: "ஊட்டச்சத்துக்களின் வகைகள் (கார்போஹைட்ரேட், புரதம், கொழுப்பு, வைட்டமின்கள், தாதுக்கள்), ஊட்டச்சத்துக் குறைபாட்டு நோய்கள் மற்றும் சரிவிகித உணவு.",
    formulaCheatSheet: [
      {
            "formula": "Vit A: Night Blindness; Vit C: Scurvy; Vit D: Rickets; Iodine: Goitre",
            "note": "Deficiency diseases"
      }
]
  },
  c9_sci_u22: {
    id: 'sum_c9_sci_u22',
    chapterId: 'c9_sci_u22',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Microbes include Bacteria (prokaryotic single-celled), Viruses (acellular obligate intracellular parasites), Fungi, and Protozoa.",
      "Beneficial roles: Lactobacillus converts milk to curd; Yeast ferments bread and alcohol; Penicillium yields antibiotics.",
      "Infectious diseases: Viral (Polio, Common cold, Rabies, COVID-19), Bacterial (Tuberculosis, Cholera, Typhoid), Fungal (Ringworm), Protozoan (Malaria).",
      "Vaccination and immunisation provide acquired immunity against deadly pathogens."
],
    keyPointsTa: [
      "நுண்ணுயிரிகள்: பாக்டீரியாக்கள், வைரஸ்கள், பூஞ்சைகள் மற்றும் புரோட்டோசோவா.",
      "நன்மை தரும் நுண்ணுயிரிகள்: லாக்டோபேசில்லஸ் பாலைத் தயிராக்குகிறது; ஈஸ்ட் நொதித்தலுக்கு உதவுகிறது; பெனிசிலியம் நுண்ணுயிர்க்கொல்லி மருந்தை உருவாக்குகிறது.",
      "தொற்றுநோய்கள்: காசநோய் (பாக்டீரியா), போலியோ/சளி (வைரஸ்), மலேரியா (பிளாஸ்மோடியம் புரோட்டோசோவா).",
      "தடுப்பூசிகள் உடலின் நோய் எதிர்ப்புச் சக்தியைத் தூண்டுகின்றன."
],
    simpleExplanationEn: "Microorganisms (bacteria, viruses, fungi, protozoa), beneficial microbes in fermentation & antibiotics, and pathogenic microbes causing infectious diseases.",
    simpleExplanationTa: "நுண்ணுயிரிகள் (பாக்டீரியா, வைரஸ், பூஞ்சை, புரோட்டோசோவா), நன்மை பயக்கும் நுண்ணுயிரிகள் (நொதித்தல், ஆன்டிபயாடிக்) மற்றும் தொற்றுநோய்கள்.",
    formulaCheatSheet: [
      {
            "formula": "Alexander Fleming (1928): Discovered Penicillin from Penicillium notatum",
            "note": "First antibiotic"
      }
]
  },
  c9_sci_u23: {
    id: 'sum_c9_sci_u23',
    chapterId: 'c9_sci_u23',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Horticulture involves cultivation of fruits, vegetables, and ornamental flowers.",
      "Hydroponics is the soilless cultivation of plants in nutrient-rich water solutions.",
      "Mushroom culture yields protein-rich edible mushrooms (e.g., Agaricus bisporus).",
      "Sericulture (silk production from Bombyx mori silkworm), Apiculture (honeybee rearing), and Aquaculture (fish and prawn farming) provide rural employment and high nutritional yield.",
      "Biofertilizers (Rhizobium, Azospirillum) enrich soil sustainably."
],
    keyPointsTa: [
      "தோட்டக்கலை: பழங்கள், காய்கறிகள் மற்றும் அலங்கார மலர்களைப் பயிரிடுதல்.",
      "ஹைட்ரோபோனிக்ஸ்: மண்ணில்லாமல் ஊட்டச்சத்து நிறைந்த நீரில் தாவரங்களை வளர்க்கும் நவீன முறை.",
      "காளான் வளர்ப்பு புரதச்சத்து மிகுந்த உணவை வழங்குகிறது.",
      "பட்டுப்புழு வளர்ப்பு (செரிகல்ச்சர்), தேனீ வளர்ப்பு (ஏபிகல்ச்சர்), மீன் வளர்ப்பு (அக்வாகல்ச்சர்) ஆகியவை கிராமப்புற வேலைவாய்ப்பையும் வருமானத்தையும் அளிக்கின்றன."
],
    simpleExplanationEn: "Applied biological practices: Horticulture, hydroponics, mushroom cultivation, sericulture, apiculture, aquaculture, and dairy farming.",
    simpleExplanationTa: "பயன்பாட்டு உயிரியல் முறைகள்: தோட்டக்கலை, ஹைட்ரோபோனிக்ஸ் (மண்ணில்லா விவசாயம்), காளான் வளர்ப்பு, பட்டுப்புழு வளர்ப்பு, தேனீ வளர்ப்பு, மீன் வளர்ப்பு.",
    formulaCheatSheet: [
      {
            "formula": "Apiculture = Bee keeping; Sericulture = Silk farming; Hydroponics = Soilless culture",
            "note": "Applied biology glossary"
      }
]
  },
  c9_sci_u24: {
    id: 'sum_c9_sci_u24',
    chapterId: 'c9_sci_u24',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      "Biotic (living) and abiotic (physical) components interact in dynamic ecosystems.",
      "Biogeochemical cycles continuously recycle vital elements: Nitrogen cycle (fixation, nitrification, denitrification), carbon cycle, and water cycle.",
      "Pollution types: Air pollution (smog, acid rain), Water pollution (eutrophication), and Soil contamination.",
      "Sustainable waste management follows 3Rs: Reduce, Reuse, Recycle.",
      "Conservation strategies include wildlife sanctuaries, national parks, and biosphere reserves."
],
    keyPointsTa: [
      "சூழல் மண்டலம் உயிருள்ள மற்றும் உயிரற்ற காரணிகளின் ஒருங்கிணைப்பால் செயல்படுகிறது.",
      "உயிர் வேதி சுழற்சிகள்: நைட்ரஜன் சுழற்சி (நிலைநிறுத்துதல், நைட்ரேட்டாதல், நைட்ரஜன் வெளியேற்றம்), நீர் மற்றும் கார்பன் சுழற்சிகள்.",
      "மாசுபாடுகள்: காற்று, நீர், நில மாசுபாடு மற்றும் பசுமை இல்ல விளைவு.",
      "கழிவு மேலாண்மை 3R தத்துவம்: குறைத்தல் (Reduce), மறுபயன்பாடு (Reuse), மறுசுழற்சி (Recycle).",
      "பல்லுயிர் பாதுகாப்பு: தேசிய பூங்காக்கள் மற்றும் வனவிலங்கு சரணாலயங்கள்."
],
    simpleExplanationEn: "Ecosystem components, biogeochemical cycles (water, nitrogen, carbon), environmental pollution, waste management (3Rs), and conservation of biodiversity.",
    simpleExplanationTa: "சூழல் மண்டலத்தின் கூறுகள், உயிர் வேதி சுழற்சிகள் (நீர், நைட்ரஜன், கார்பன்), சுற்றுச்சூழல் மாசுபாடு, கழிவு மேலாண்மை மற்றும் பல்லுயிர் பாதுகாப்பு.",
    formulaCheatSheet: [
      {
            "formula": "Rhizobium: Symbiotic nitrogen-fixing bacteria in legume root nodules",
            "note": "Nitrogen cycle"
      },
      {
            "formula": "3Rs = Reduce, Reuse, Recycle",
            "note": "Waste management principle"
      }
]
  },
};

export const CLASS_9_SCIENCE_QUIZZES: Record<string, ChapterQuiz> = {
  c9_sci_u1: {
    id: 'quiz_c9_sci_u1',
    chapterId: 'c9_sci_u1',
    titleEn: 'Physics: Measurement: Mastery Quiz',
    titleTa: 'இயற்பியல்: அளவீடு: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u1_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "What is the least count of a standard screw gauge?",
            "questionTa": "ஒரு சாதாரண திருகு அளவியின் மீச்சிற்றளவு என்ன?",
            "optionsEn": [
                  "0.1 mm",
                  "0.01 mm",
                  "0.001 mm",
                  "1 mm"
            ],
            "optionsTa": [
                  "0.1 மி.மீ",
                  "0.01 மி.மீ",
                  "0.001 மி.மீ",
                  "1 மி.மீ"
            ],
            "correctAnswer": "0.01 mm",
            "explanationEn": "The least count of a standard screw gauge with pitch 1 mm and 100 head scale divisions is 1/100 = 0.01 mm.",
            "explanationTa": "1 மி.மீ புரிக்கோல் இடைவெளி மற்றும் 100 தலைக்கோல் பிரிவுகள் கொண்ட திருகு அளவியின் மீச்சிற்றளவு 0.01 மி.மீ."
      },
      {
            "id": "c9_sci_u1_q2",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which instrument is used to measure the weight of a body?",
            "questionTa": "ஒரு பொருளின் எடையை அளவிடப் பயன்படும் கருவி எது?",
            "optionsEn": [
                  "Beam balance",
                  "Spring balance",
                  "Physical balance",
                  "Common balance"
            ],
            "optionsTa": [
                  "இயற்பியல் தராசு",
                  "சுருள்வில் தராசு",
                  "பொதுத் தராசு",
                  "மின்னணு தராசு"
            ],
            "correctAnswer": "Spring balance",
            "explanationEn": "A spring balance measures the gravitational force acting on the body, which is its weight.",
            "explanationTa": "பொருளின் மீது செயல்படும் புவியீர்ப்பு விசையான எடையைச் சுருள்வில் தராசு அளவிடுகிறது."
      }
]
  },
  c9_sci_u2: {
    id: 'quiz_c9_sci_u2',
    chapterId: 'c9_sci_u2',
    titleEn: 'Physics: Motion: Mastery Quiz',
    titleTa: 'இயற்பியல்: இயக்கம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u2_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which of the following is a vector quantity?",
            "questionTa": "பின்வருவனவற்றுள் எது வெக்டர் (திசையன்) அளவு?",
            "optionsEn": [
                  "Speed",
                  "Distance",
                  "Displacement",
                  "Mass"
            ],
            "optionsTa": [
                  "வேகம்",
                  "தொலைவு",
                  "இடப்பெயர்ச்சி",
                  "நிறை"
            ],
            "correctAnswer": "Displacement",
            "explanationEn": "Displacement has both magnitude and specific direction, making it a vector quantity.",
            "explanationTa": "இடப்பெயர்ச்சி எண்மதிப்பும் குறிப்பிட்ட திசையும் கொண்டிருப்பதால் அது வெக்டர் அளவு ஆகும்."
      },
      {
            "id": "c9_sci_u2_q2",
            "type": "mcq",
            "difficulty": "medium",
            "questionEn": "A car accelerates uniformly from rest to 20 m/s in 5 seconds. What is its acceleration?",
            "questionTa": "ஓய்வு நிலையிலிருந்து புறப்படும் ஒரு மகிழுந்து 5 வினாடிகளில் 20 மீ/வி திசைவேகத்தை அடைகிறது எனில் அதன் முடுக்கம் என்ன?",
            "optionsEn": [
                  "2 m/s²",
                  "4 m/s²",
                  "5 m/s²",
                  "100 m/s²"
            ],
            "optionsTa": [
                  "2 மீ/வி²",
                  "4 மீ/வி²",
                  "5 மீ/வி²",
                  "100 மீ/வி²"
            ],
            "correctAnswer": "4 m/s²",
            "explanationEn": "a = (v - u) / t = (20 - 0) / 5 = 4 m/s².",
            "explanationTa": "முடுக்கம் a = (v - u) / t = (20 - 0) / 5 = 4 மீ/வி²."
      }
]
  },
  c9_sci_u3: {
    id: 'quiz_c9_sci_u3',
    chapterId: 'c9_sci_u3',
    titleEn: 'Physics: Fluids: Mastery Quiz',
    titleTa: 'இயற்பியல்: பாய்மங்கள்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u3_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "What is the SI unit of pressure?",
            "questionTa": "அழுத்தத்தின் SI அலகு எது?",
            "optionsEn": [
                  "Newton",
                  "Joule",
                  "Pascal",
                  "Watt"
            ],
            "optionsTa": [
                  "நியூட்டன்",
                  "ஜூல்",
                  "பாஸ்கல்",
                  "வாட்"
            ],
            "correctAnswer": "Pascal",
            "explanationEn": "The SI unit of pressure is Pascal (Pa), equivalent to 1 N/m².",
            "explanationTa": "அழுத்தத்தின் SI அலகு பாஸ்கல் (Pa), அதாவது 1 நியூட்டன் / சதுர மீட்டர்."
      },
      {
            "id": "c9_sci_u3_q2",
            "type": "mcq",
            "difficulty": "medium",
            "questionEn": "Hydraulic brakes in automobiles work on the basis of:",
            "questionTa": "வாகனங்களில் உள்ள ஹைட்ராலிக் பிரேக்குகள் எந்த விதியின் அடிப்படையில் செயல்படுகின்றன?",
            "optionsEn": [
                  "Newton's Law",
                  "Pascal's Law",
                  "Archimedes' Principle",
                  "Hooke's Law"
            ],
            "optionsTa": [
                  "நியூட்டன் விதி",
                  "பாஸ்கல் விதி",
                  "ஆர்க்கிமிடிஸ் தத்துவம்",
                  "ஹூக் விதி"
            ],
            "correctAnswer": "Pascal's Law",
            "explanationEn": "Hydraulic systems operate on Pascal's law of equal fluid pressure transmission.",
            "explanationTa": "ஹைட்ராலிக் பிரேக்குகள் பாஸ்கல் விதியின் அடிப்படையில் செயல்படுகின்றன."
      }
]
  },
  c9_sci_u4: {
    id: 'quiz_c9_sci_u4',
    chapterId: 'c9_sci_u4',
    titleEn: 'Physics: Electric Charge and Electric Current: Mastery Quiz',
    titleTa: 'இயற்பியல்: மின்னூட்டமும் மின்னோட்டமும்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u4_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "How should an ammeter be connected in an electric circuit to measure current?",
            "questionTa": "மின்னோட்டத்தை அளவிட அம்மீட்டரை மின்சுற்றில் எவ்வாறு இணைக்க வேண்டும்?",
            "optionsEn": [
                  "In parallel",
                  "In series",
                  "Across the battery only",
                  "Any direction"
            ],
            "optionsTa": [
                  "பக்க இணைப்பில்",
                  "தொடரிணைப்பில்",
                  "மின்கலத்திற்கு குறுக்கே மட்டும்",
                  "எந்த வகையிலும்"
            ],
            "correctAnswer": "In series",
            "explanationEn": "An ammeter has low resistance and must be connected in series so all current flows through it.",
            "explanationTa": "அம்மீட்டர் மிகக் குறைந்த மின்தடை கொண்டிருப்பதால் தொடரிணைப்பில் மட்டுமே இணைக்கப்பட வேண்டும்."
      },
      {
            "id": "c9_sci_u4_q2",
            "type": "mcq",
            "difficulty": "medium",
            "questionEn": "If a charge of 30 C flows through a conductor in 10 seconds, what is the electric current?",
            "questionTa": "10 வினாடிகளில் ஒரு கடத்தி வழியே 30 கூலும் மின்னூட்டம் பாய்ந்தால் மின்னோட்டம் என்ன?",
            "optionsEn": [
                  "3 A",
                  "300 A",
                  "0.33 A",
                  "20 A"
            ],
            "optionsTa": [
                  "3 A",
                  "300 A",
                  "0.33 A",
                  "20 A"
            ],
            "correctAnswer": "3 A",
            "explanationEn": "I = Q / t = 30 C / 10 s = 3 A.",
            "explanationTa": "மின்னோட்டம் I = Q / t = 30 / 10 = 3 ஆம்பியர்."
      }
]
  },
  c9_sci_u5: {
    id: 'quiz_c9_sci_u5',
    chapterId: 'c9_sci_u5',
    titleEn: 'Physics: Magnetism and Electromagnetism: Mastery Quiz',
    titleTa: 'இயற்பியல்: காந்தவியல் மற்றும் மின்காந்தவியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u5_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which rule is used to determine the working principle and direction of force in an electric motor?",
            "questionTa": "மின்மோட்டாரின் செயல்பாட்டுக் கொள்கை மற்றும் விசை திசையைத் தீர்மானிக்கும் விதி எது?",
            "optionsEn": [
                  "Fleming's Left-Hand Rule",
                  "Fleming's Right-Hand Rule",
                  "Pascal's Law",
                  "Ohm's Law"
            ],
            "optionsTa": [
                  "ஃபிளெமிங்கின் இடக்கை விதி",
                  "ஃபிளெமிங்கின் வலக்கை விதி",
                  "பாஸ்கல் விதி",
                  "ஓம் விதி"
            ],
            "correctAnswer": "Fleming's Left-Hand Rule",
            "explanationEn": "Fleming's Left-Hand Rule determines the direction of force in electric motors.",
            "explanationTa": "மின்மோட்டாரின் இயங்கும் விசையின் திசையைக் கண்டறிய ஃபிளெமிங்கின் இடக்கை விதி பயன்படுகிறது."
      }
]
  },
  c9_sci_u6: {
    id: 'quiz_c9_sci_u6',
    chapterId: 'c9_sci_u6',
    titleEn: 'Physics: Light: Mastery Quiz',
    titleTa: 'இயற்பியல்: ஒளியியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u6_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which type of mirror is commonly used as a rear-view mirror in motor vehicles?",
            "questionTa": "வாகனங்களில் பின்னால் வரும் பிற வாகனங்களைப் பார்க்கப் பயன்படும் ஆடி எது?",
            "optionsEn": [
                  "Concave mirror",
                  "Convex mirror",
                  "Plane mirror",
                  "Cylindrical mirror"
            ],
            "optionsTa": [
                  "குழி ஆடி",
                  "குவி ஆடி",
                  "சமதள ஆடி",
                  "உருளை ஆடி"
            ],
            "correctAnswer": "Convex mirror",
            "explanationEn": "Convex mirrors produce an erect, diminished image giving a wider field of view for drivers.",
            "explanationTa": "குவி ஆடி அகன்ற பார்வைப்புலத்தையும் நேரான சிறிய பிம்பத்தையும் தருவதால் வாகனப் பின்னோக்கு ஆடியாகப் பயன்படுகிறது."
      }
]
  },
  c9_sci_u7: {
    id: 'quiz_c9_sci_u7',
    chapterId: 'c9_sci_u7',
    titleEn: 'Physics: Heat: Mastery Quiz',
    titleTa: 'இயற்பியல்: வெப்பம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u7_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Through which process does heat from the Sun reach the Earth across empty space?",
            "questionTa": "வெற்றிடத்தின் வழியே சூரியனிலிருந்து புவிக்கு வெப்பம் எந்த முறையில் வந்தடைகிறது?",
            "optionsEn": [
                  "Conduction",
                  "Convection",
                  "Radiation",
                  "Advection"
            ],
            "optionsTa": [
                  "வெப்பக் கடத்தல்",
                  "வெப்பச் சலனம்",
                  "வெப்பக் கதிர்வீச்சு",
                  "சுழற்சி"
            ],
            "correctAnswer": "Radiation",
            "explanationEn": "Radiation transfers thermal energy via electromagnetic waves without requiring a material medium.",
            "explanationTa": "பருப்பொருள் ஊடகம் ஏதுமின்றி மின்காந்த அலைகளாகப் பரவும் வெப்பக் கதிர்வீச்சு மூலம் சூரிய வெப்பம் புவியை அடைகிறது."
      }
]
  },
  c9_sci_u8: {
    id: 'quiz_c9_sci_u8',
    chapterId: 'c9_sci_u8',
    titleEn: 'Physics: Sound: Mastery Quiz',
    titleTa: 'இயற்பியல்: ஒலியியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u8_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "What is the audible frequency range of human hearing?",
            "questionTa": "மனிதனின் கேட்கும் அதிர்வெண் வரம்பு என்ன?",
            "optionsEn": [
                  "20 Hz to 20,000 Hz",
                  "Below 20 Hz only",
                  "Above 20,000 Hz only",
                  "0 to 100 Hz"
            ],
            "optionsTa": [
                  "20 Hz முதல் 20,000 Hz வரை",
                  "20 Hz-க்குக் கீழ் மட்டும்",
                  "20,000 Hz-க்கு மேல் மட்டும்",
                  "0 முதல் 100 Hz"
            ],
            "correctAnswer": "20 Hz to 20,000 Hz",
            "explanationEn": "The normal human ear detects sounds between 20 Hz and 20,000 Hz (20 kHz).",
            "explanationTa": "மனிதனின் கேட்கும் அதிர்வெண் வரம்பு 20 Hz முதல் 20,000 Hz (20 kHz) வரை ஆகும்."
      }
]
  },
  c9_sci_u9: {
    id: 'quiz_c9_sci_u9',
    chapterId: 'c9_sci_u9',
    titleEn: 'Physics: Universe: Mastery Quiz',
    titleTa: 'இயற்பியல்: அண்டம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u9_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which galaxy contains our Solar System?",
            "questionTa": "நமது சூரியக் குடும்பம் அமைந்துள்ள விண்மீன் திரள் எது?",
            "optionsEn": [
                  "Andromeda",
                  "Milky Way",
                  "Whirlpool",
                  "Triangulum"
            ],
            "optionsTa": [
                  "ஆண்ட்ரோமிடா",
                  "பால்வெளி மண்டலம் (Milky Way)",
                  "சுழல் விண்மீன் திரள்",
                  "முக்கோண திரள்"
            ],
            "correctAnswer": "Milky Way",
            "explanationEn": "The Solar System is situated within the Milky Way spiral galaxy.",
            "explanationTa": "நமது சூரியக் குடும்பம் பால்வெளி (Milky Way) விண்மீன் திரளில் அமைந்துள்ளது."
      }
]
  },
  c9_sci_u10: {
    id: 'quiz_c9_sci_u10',
    chapterId: 'c9_sci_u10',
    titleEn: 'Chemistry: Matter Around Us: Mastery Quiz',
    titleTa: 'வேதியியல்: நம்மைச் சுற்றியுள்ள பொருட்கள்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u10_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "The scattering of light by colloidal particles is called:",
            "questionTa": "கூழ்மத் துகள்களால் ஒளிக்கற்றை சிதறடிக்கப்படும் நிகழ்வு எவ்வாறு அழைக்கப்படுகிறது?",
            "optionsEn": [
                  "Raman effect",
                  "Tyndall effect",
                  "Photoelectric effect",
                  "Doppler effect"
            ],
            "optionsTa": [
                  "ராமன் விளைவு",
                  "டின்டால் விளைவு",
                  "ஒளிமின் விளைவு",
                  "டாப்ளர் விளைவு"
            ],
            "correctAnswer": "Tyndall effect",
            "explanationEn": "The Tyndall effect is the scattering of visible light by colloidal particles.",
            "explanationTa": "கூழ்மக் கரைசலில் உள்ள துகள்களால் ஒளி சிதறடிக்கப்படுவது டின்டால் விளைவு எனப்படும்."
      }
]
  },
  c9_sci_u11: {
    id: 'quiz_c9_sci_u11',
    chapterId: 'c9_sci_u11',
    titleEn: 'Chemistry: Atomic Structure: Mastery Quiz',
    titleTa: 'வேதியியல்: அணு அமைப்பு: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u11_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Who discovered the neutron inside the atomic nucleus?",
            "questionTa": "அணுக்கருவில் உள்ள நியூட்ரானைக் கண்டறிந்தவர் யார்?",
            "optionsEn": [
                  "J.J. Thomson",
                  "Ernest Rutherford",
                  "James Chadwick",
                  "Niels Bohr"
            ],
            "optionsTa": [
                  "ஜே.ஜே. தாம்சன்",
                  "எர்னஸ்ட் ரூதர்போர்டு",
                  "ஜேம்ஸ் சாட்விக்",
                  "நீல்ஸ் போர்"
            ],
            "correctAnswer": "James Chadwick",
            "explanationEn": "James Chadwick discovered the neutral subatomic particle, the neutron, in 1932.",
            "explanationTa": "1932-ஆம் ஆண்டு ஜேம்ஸ் சாட்விக் நியூட்ரானைக் கண்டறிந்தார்."
      }
]
  },
  c9_sci_u12: {
    id: 'quiz_c9_sci_u12',
    chapterId: 'c9_sci_u12',
    titleEn: 'Chemistry: Periodic Classification of Elements: Mastery Quiz',
    titleTa: 'வேதியியல்: தனிமங்களின் ஆவர்த்தன வகைப்பாடு: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u12_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "How many periods and groups are there in the Modern Periodic Table?",
            "questionTa": "நவீன ஆவர்த்தன அட்டவணையில் எத்தனை தொடர்களும் தொகுதிகளும் உள்ளன?",
            "optionsEn": [
                  "7 periods and 18 groups",
                  "8 periods and 17 groups",
                  "7 periods and 8 groups",
                  "6 periods and 16 groups"
            ],
            "optionsTa": [
                  "7 தொடர்கள் மற்றும் 18 தொகுதிகள்",
                  "8 தொடர்கள் மற்றும் 17 தொகுதிகள்",
                  "7 தொடர்கள் மற்றும் 8 தொகுதிகள்",
                  "6 தொடர்கள் மற்றும் 16 தொகுதிகள்"
            ],
            "correctAnswer": "7 periods and 18 groups",
            "explanationEn": "The modern periodic table consists of 7 horizontal rows (periods) and 18 vertical columns (groups).",
            "explanationTa": "நவீன ஆவர்த்தன அட்டவணையில் 7 கிடைமட்டத் தொடர்களும் 18 செங்குத்துத் தொகுதிகளும் உள்ளன."
      }
]
  },
  c9_sci_u13: {
    id: 'quiz_c9_sci_u13',
    chapterId: 'c9_sci_u13',
    titleEn: 'Chemistry: Chemical Bonding: Mastery Quiz',
    titleTa: 'வேதியியல்: வேதிப்பிணைப்பு: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u13_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which type of bond is formed by the complete transfer of electrons from one atom to another?",
            "questionTa": "ஒரு அணுவிலிருந்து மற்றொரு அணுவிற்கு எலக்ட்ரான்கள் முழுமையாகப் பரிமாற்றம் செய்யப்படுவதால் உருவாகும் பிணைப்பு எது?",
            "optionsEn": [
                  "Covalent bond",
                  "Ionic bond",
                  "Hydrogen bond",
                  "Metallic bond"
            ],
            "optionsTa": [
                  "சகப்பிணைப்பு",
                  "அயனிப் பிணைப்பு",
                  "ஹைட்ரஜன் பிணைப்பு",
                  "உலோகப் பிணைப்பு"
            ],
            "correctAnswer": "Ionic bond",
            "explanationEn": "Ionic (electrovalent) bonds form when one atom transfers electrons to another, generating opposing ions.",
            "explanationTa": "எலக்ட்ரான்களின் முழுமையான பரிமாற்றத்தால் உருவாவது அயனிப் பிணைப்பாகும்."
      }
]
  },
  c9_sci_u14: {
    id: 'quiz_c9_sci_u14',
    chapterId: 'c9_sci_u14',
    titleEn: 'Chemistry: Acids, Bases and Salts: Mastery Quiz',
    titleTa: 'வேதியியல்: அமிலங்கள், காரங்கள் மற்றும் உப்புகள்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u14_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "What is the pH value of pure neutral water at 25°C?",
            "questionTa": "25°C வெப்பநிலையில் தூய நடுநிலை நீரின் pH மதிப்பு என்ன?",
            "optionsEn": [
                  "0",
                  "7",
                  "14",
                  "1"
            ],
            "optionsTa": [
                  "0",
                  "7",
                  "14",
                  "1"
            ],
            "correctAnswer": "7",
            "explanationEn": "Pure water is chemically neutral with a pH value of exactly 7.",
            "explanationTa": "தூய நீர் நடுநிலையானது என்பதால் அதன் pH மதிப்பு சரியாக 7 ஆகும்."
      }
]
  },
  c9_sci_u15: {
    id: 'quiz_c9_sci_u15',
    chapterId: 'c9_sci_u15',
    titleEn: 'Chemistry: Carbon and Its Compounds: Mastery Quiz',
    titleTa: 'வேதியியல்: கார்பனும் அதன் சேர்மங்களும்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u15_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which allotrope of carbon conducts electricity due to free delocalized electrons?",
            "questionTa": "கட்டற்ற எலக்ட்ரான்களைக் கொண்டுள்ளதால் மின்சாரத்தைக் கடத்தும் கார்பனின் புறவேற்றுமை வடிவம் எது?",
            "optionsEn": [
                  "Diamond",
                  "Graphite",
                  "Fullerene",
                  "Coal"
            ],
            "optionsTa": [
                  "வைரம்",
                  "கிராஃபைட்",
                  "புல்லரீன்",
                  "நிலக்கரி"
            ],
            "correctAnswer": "Graphite",
            "explanationEn": "Graphite contains free delocalized electrons between hexagonal layers, making it a good electrical conductor.",
            "explanationTa": "கிராஃபைட்டின் அறுகோண அடுக்குகளில் கட்டற்ற எலக்ட்ரான்கள் இருப்பதால் அது மின்சாரத்தைக் கடத்துகிறது."
      }
]
  },
  c9_sci_u16: {
    id: 'quiz_c9_sci_u16',
    chapterId: 'c9_sci_u16',
    titleEn: 'Chemistry: Applied Chemistry: Mastery Quiz',
    titleTa: 'வேதியியல்: பயன்பாட்டு வேதியியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u16_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which radioisotope is widely used in the treatment of cancer?",
            "questionTa": "புற்றுநோய் சிகிச்சையில் பெருமளவில் பயன்படும் கதிரியக்க ஐசோடோப்பு எது?",
            "optionsEn": [
                  "Cobalt-60",
                  "Iodine-131",
                  "Carbon-14",
                  "Sodium-24"
            ],
            "optionsTa": [
                  "கோபால்ட்-60",
                  "அயோடின்-131",
                  "கார்பன்-14",
                  "சோடியம்-24"
            ],
            "correctAnswer": "Cobalt-60",
            "explanationEn": "Cobalt-60 emits penetrating gamma radiation utilized in cancer radiation therapy.",
            "explanationTa": "கோபால்ட்-60 வெளியிடும் காமா கதிர்கள் புற்றுநோய் கட்டிகளை அழிக்கப் பயன்படுகின்றன."
      }
]
  },
  c9_sci_u17: {
    id: 'quiz_c9_sci_u17',
    chapterId: 'c9_sci_u17',
    titleEn: 'Biology: Animal Kingdom: Mastery Quiz',
    titleTa: 'உயிரியல்: விலங்குலகம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u17_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which is the largest phylum in the animal kingdom, characterized by jointed legs?",
            "questionTa": "இணைப்புக் கால்களைக் கொண்ட விலங்குலகின் மிகப்பெரிய தொகுதி எது?",
            "optionsEn": [
                  "Annelida",
                  "Arthropoda",
                  "Mollusca",
                  "Echinodermata"
            ],
            "optionsTa": [
                  "வளைதசைப் புழுக்கள்",
                  "கணுக்காலிகள் (Arthropoda)",
                  "மெல்லுடலிகள்",
                  "முட்தோலிகள்"
            ],
            "correctAnswer": "Arthropoda",
            "explanationEn": "Arthropoda is the largest phylum containing over 80% of all animal species.",
            "explanationTa": "விலங்குலகில் பூச்சிகள் அடங்கிய கணுக்காலிகள் (Arthropoda) மிகப்பெரிய தொகுதியாகும்."
      }
]
  },
  c9_sci_u18: {
    id: 'quiz_c9_sci_u18',
    chapterId: 'c9_sci_u18',
    titleEn: 'Biology: Organisation of Tissues: Mastery Quiz',
    titleTa: 'உயிரியல்: திசுக்களின் அமைப்பு: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u18_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which plant vascular tissue conducts water and dissolved mineral nutrients from roots to leaves?",
            "questionTa": "வேரிலிருந்து இலைகளுக்கு நீரையும் கனிமங்களையும் கடத்தும் தாவர கடத்து திசு எது?",
            "optionsEn": [
                  "Phloem",
                  "Xylem",
                  "Parenchyma",
                  "Collenchyma"
            ],
            "optionsTa": [
                  "புளோயம்",
                  "சைலம்",
                  "பாரன்கைமா",
                  "கோலன்கைமா"
            ],
            "correctAnswer": "Xylem",
            "explanationEn": "Xylem vessels and tracheids transport water and minerals upward from roots.",
            "explanationTa": "சைலம் வேரிலிருந்து தாவரத்தின் பிற பகுதிகளுக்கு நீரையும் கனிமங்களையும் கடத்துகிறது."
      }
]
  },
  c9_sci_u19: {
    id: 'quiz_c9_sci_u19',
    chapterId: 'c9_sci_u19',
    titleEn: 'Biology: Plant Physiology: Mastery Quiz',
    titleTa: 'உயிரியல்: தாவர செயலியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u19_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "The drooping movement of leaves in Mimosa pudica upon touching is an example of:",
            "questionTa": "தொட்டால் சுருங்கி (Mimosa pudica) தாவரத்தில் இலைகள் மூடிக்கொள்ளும் அசைவு எதற்கு உதாரணம்?",
            "optionsEn": [
                  "Phototropism",
                  "Thigmonasty",
                  "Geotropism",
                  "Hydrotropism"
            ],
            "optionsTa": [
                  "ஒளிச்சார்பசைவு",
                  "தொடுவுறு திசையுறா அசைவு (Thigmonasty)",
                  "புவிச்சார்பசைவு",
                  "நீர்ச்சார்பசைவு"
            ],
            "correctAnswer": "Thigmonasty",
            "explanationEn": "The rapid folding of Mimosa leaves on touch is a non-directional thigmonastic movement caused by turgor pressure changes.",
            "explanationTa": "தொட்டவுடன் இலைகள் சுருங்குவது தொடுவுறு திசையுறா அசைவு (Thigmonasty) ஆகும்."
      }
]
  },
  c9_sci_u20: {
    id: 'quiz_c9_sci_u20',
    chapterId: 'c9_sci_u20',
    titleEn: 'Biology: Organ Systems in Animals: Mastery Quiz',
    titleTa: 'உயிரியல்: விலங்குகளின் உறுப்பு மண்டலங்கள்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u20_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "What is the structural and functional filtering unit of the human kidney?",
            "questionTa": "மனித சிறுநீரகத்தின் அமைப்பு மற்றும் செயல்பாட்டு வடிகட்டும் அலகு எது?",
            "optionsEn": [
                  "Neuron",
                  "Nephron",
                  "Alveoli",
                  "Hepatocyte"
            ],
            "optionsTa": [
                  "நியூரான்",
                  "நெஃப்ரான்",
                  "அல்வியோலி",
                  "ஹெபடோசைட்"
            ],
            "correctAnswer": "Nephron",
            "explanationEn": "Each kidney contains about one million microscopic filtering units called nephrons.",
            "explanationTa": "சிறுநீரகத்தின் அடிப்படை வடிகட்டும் நுண்ணிய அலகு நெஃப்ரான் ஆகும்."
      }
]
  },
  c9_sci_u21: {
    id: 'quiz_c9_sci_u21',
    chapterId: 'c9_sci_u21',
    titleEn: 'Biology: Nutrition and Health: Mastery Quiz',
    titleTa: 'உயிரியல்: ஊட்டச்சத்து மற்றும் ஆரோக்கியம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u21_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which disease is caused by the severe deficiency of Vitamin C in diet?",
            "questionTa": "உணவில் வைட்டமின் C குறைபாட்டினால் ஏற்படும் நோய் எது?",
            "optionsEn": [
                  "Beriberi",
                  "Scurvy",
                  "Rickets",
                  "Goitre"
            ],
            "optionsTa": [
                  "பெரிபெரி",
                  "ஸ்கர்வி",
                  "ரிக்கெட்ஸ்",
                  "காய்ட்டர்"
            ],
            "correctAnswer": "Scurvy",
            "explanationEn": "Deficiency of Vitamin C (ascorbic acid) causes scurvy, characterized by bleeding gums.",
            "explanationTa": "வைட்டமின் C குறைபாட்டால் ஈறுகளில் இரத்தக் கசிவு ஏற்படும் ஸ்கர்வி நோய் உண்டாகிறது."
      }
]
  },
  c9_sci_u22: {
    id: 'quiz_c9_sci_u22',
    chapterId: 'c9_sci_u22',
    titleEn: 'Biology: World of Microbes: Mastery Quiz',
    titleTa: 'உயிரியல்: நுண்ணுயிரிகளின் உலகம்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u22_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Who discovered the world’s first antibiotic, Penicillin, in 1928?",
            "questionTa": "1928-ஆம் ஆண்டு உலகின் முதல் நுண்ணுயிர்க்கொல்லி மருந்தான பெனிசிலினைத் தயாரித்தவர் யார்?",
            "optionsEn": [
                  "Louis Pasteur",
                  "Alexander Fleming",
                  "Edward Jenner",
                  "Robert Koch"
            ],
            "optionsTa": [
                  "லூயிஸ் பாஸ்டர்",
                  "அலெக்சாண்டர் ஃபிளெமிங்",
                  "எட்வர்ட் ஜென்னர்",
                  "ராபர்ட் கோச்"
            ],
            "correctAnswer": "Alexander Fleming",
            "explanationEn": "Sir Alexander Fleming discovered penicillin from Penicillium notatum mold in 1928.",
            "explanationTa": "அலெக்சாண்டர் ஃபிளெமிங் 1928-இல் பெனிசிலின் மருந்தைக் கண்டறிந்தார்."
      }
]
  },
  c9_sci_u23: {
    id: 'quiz_c9_sci_u23',
    chapterId: 'c9_sci_u23',
    titleEn: 'Biology: Economic Biology: Mastery Quiz',
    titleTa: 'உயிரியல்: பொருளாதார உயிரியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u23_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "The practice of rearing honeybees for the production of honey and beeswax is called:",
            "questionTa": "தேன் மற்றும் மெழுகு உற்பத்திக்காகத் தேனீக்களை வளர்க்கும் முறை எவ்வாறு அழைக்கப்படுகிறது?",
            "optionsEn": [
                  "Sericulture",
                  "Apiculture",
                  "Aquaculture",
                  "Pisciculture"
            ],
            "optionsTa": [
                  "பட்டுப்புழு வளர்ப்பு",
                  "தேனீ வளர்ப்பு (Apiculture)",
                  "நீரியல் வளர்ப்பு",
                  "மீன் வளர்ப்பு"
            ],
            "correctAnswer": "Apiculture",
            "explanationEn": "Apiculture is the scientific rearing and management of honeybees.",
            "explanationTa": "தேனீக்களை வளர்க்கும் கலை ஏபிகல்ச்சர் (Apiculture) எனப்படுகிறது."
      }
]
  },
  c9_sci_u24: {
    id: 'quiz_c9_sci_u24',
    chapterId: 'c9_sci_u24',
    titleEn: 'Biology: Environmental Science: Mastery Quiz',
    titleTa: 'உயிரியல்: சூழ்நிலை அறிவியல்: மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
            "id": "c9_sci_u24_q1",
            "type": "mcq",
            "difficulty": "easy",
            "questionEn": "Which bacteria live symbiotically in the root nodules of leguminous plants to fix atmospheric nitrogen?",
            "questionTa": "பருப்பு வகைத் தாவரங்களின் வேர் முடிச்சுகளில் கூட்டுயிரியாக வாழ்ந்து வளிமண்டல நைட்ரஜனை நிலைநிறுத்தும் பாக்டீரியா எது?",
            "optionsEn": [
                  "Rhizobium",
                  "Lactobacillus",
                  "E. coli",
                  "Clostridium"
            ],
            "optionsTa": [
                  "ரைசோபியம் (Rhizobium)",
                  "லாக்டோபேசில்லஸ்",
                  "ஈ.கோலை",
                  "கிளாஸ்ட்ரிடியம்"
            ],
            "correctAnswer": "Rhizobium",
            "explanationEn": "Rhizobium bacteria convert atmospheric nitrogen into usable nitrates in legume root nodules.",
            "explanationTa": "ரைசோபியம் பாக்டீரியாக்கள் பருப்பு வகைத் தாவரங்களின் வேர் முடிச்சுகளில் நைட்ரஜனை நிலைநிறுத்துகின்றன."
      }
]
  },
};

export function getOrCreateScienceChapterSuite(chapter: Chapter, isTa: boolean) {
  const existingNote = CLASS_9_SCIENCE_NOTES[chapter.id];
  const existingSummary = CLASS_9_SCIENCE_SUMMARIES[chapter.id];
  const existingQuiz = CLASS_9_SCIENCE_QUIZZES[chapter.id];

  if (existingNote && existingSummary && existingQuiz) {
    return { note: existingNote, summary: existingSummary, quiz: existingQuiz };
  }

  const note: NoteItem = {
    id: `note_${chapter.id}`,
    chapterId: chapter.id,
    classLevel: chapter.classLevel,
    subjectId: 'c9_science',
    titleEn: chapter.titleEn,
    titleTa: chapter.titleTa,
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'TNSCERT Science Panel',
    reviewedByRole: 'State Resource Group',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: 'v2.4',
    changeNote: 'Standard curriculum aligned',
    changeNoteTa: 'பாடத்திட்டம் சரிபார்க்கப்பட்டது',
    readTimeMinutes: 12,
    bodyEn: `### ${chapter.titleEn}\nComprehensive syllabus notes for Class 9 Science.\n\nKey concepts, laws, and examination points aligned with Samacheer Kalvi standards.`,
    bodyTa: `### ${chapter.titleTa}\n9-ஆம் வகுப்பு அறிவியல் பாடத்திற்கான முழுமையான குறிப்புகள்.\n\nசமச்சீர் கல்வி பாடத்திட்டத்தின்படி விரிவான அறிவியல் விளக்கங்கள்.`,
    revisions: [
      {
        version: 'v2.4',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'State Resource Group',
        changeNote: 'Verified syllabus alignment',
        changeNoteTa: 'பாடத்திட்ட சரிபார்ப்பு'
      }
    ]
  };

  const summary: SummaryItem = {
    id: `sum_${chapter.id}`,
    chapterId: chapter.id,
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      `Core concepts of ${chapter.titleEn} aligned with TN state board syllabus.`,
      'Key definitions, laws, and scientific principles explained.',
      'Examination question patterns and practice methods highlighted.'
    ],
    keyPointsTa: [
      `${chapter.titleTa} பாடத்தின் முக்கிய அறிவியல் கருத்துக்கள்.`,
      'அடிப்படை வரைமுறைகள், விதிகள் மற்றும் செய்முறை விளக்கங்கள்.',
      'தேர்வுக்குத் தேவையான மாதிரி வினாக்கள் மற்றும் பதில்கள்.'
    ],
    simpleExplanationEn: `Quick review of ${chapter.titleEn} core topics.`,
    simpleExplanationTa: `${chapter.titleTa} பாடத்தின் முக்கிய கருத்துக்களின் சுருக்கம்.`
  };

  const quiz: ChapterQuiz = {
    id: `quiz_${chapter.id}`,
    chapterId: chapter.id,
    titleEn: `${chapter.titleEn}: Quiz`,
    titleTa: `${chapter.titleTa}: வினாடி வினா`,
    timeLimitMinutes: 10,
    totalMarks: 5,
    questions: [
      {
        id: `${chapter.id}_q1`,
        type: 'mcq',
        difficulty: 'medium',
        questionEn: `What is the primary scientific focus of ${chapter.titleEn}?`,
        questionTa: `${chapter.titleTa} பாடத்தின் முக்கிய அறிவியல் கருத்து யாது?`,
        optionsEn: ['Foundational Concepts', 'Scientific Laws & Principles', 'Real-world Applications', 'All of the above'],
        optionsTa: ['அடிப்படை வரைமுறைகள்', 'விதிகள் மற்றும் தத்துவங்கள்', 'நடைமுறைப் பயன்பாடுகள்', 'மேற்கண்ட அனைத்தும்'],
        correctAnswer: 'All of the above',
        explanationEn: 'The chapter integrates core definitions, scientific laws, and practical applications.',
        explanationTa: 'இப்பாடம் அடிப்படைக் கருத்துக்கள், அறிவியல் விதிகள் மற்றும் நடைமுறைப் பயன்பாடுகளை உள்ளடக்கியுள்ளது.'
      }
    ]
  };

  return { note, summary, quiz };
}
