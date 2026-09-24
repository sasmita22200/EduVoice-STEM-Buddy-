/**
 * Class 11 Business Mathematics and Statistics (Samacheer Kalvi)
 * Full 10 Chapters Comprehensive Dataset:
 * - Chapters metadata
 * - Board Revision Notes with Formulas, Worked Examples & Exam Tips
 * - Chapter Summaries & Formula Cheat Sheets
 * - Chapter Mastery Quizzes (MCQs with Bilingual Explanations)
 * - Interactive Vector Schematic Diagrams (SVGs) with Technical Labels
 * - Multi-Scene Concept Video Explainers with Bilingual Narration
 */

import {
  Chapter,
  NoteItem,
  SummaryItem,
  ChapterQuiz,
  SchematicDiagram,
  VideoExplainer,
} from '../types';

export const CLASS_11_BMATH_CHAPTERS: Chapter[] = [
  {
    "id": "c11_bm_ch1",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 1",
    "unitNameTa": "அத்தியாயம் 1",
    "chapterNumber": 1,
    "titleEn": "Chapter 1: Matrices and Determinants",
    "titleTa": "அத்தியாயம் 1: அணிகளும் அணிக்கோவைகளும்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch2",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 2,
    "unitNameEn": "Chapter 2",
    "unitNameTa": "அத்தியாயம் 2",
    "chapterNumber": 2,
    "titleEn": "Chapter 2: Algebra",
    "titleTa": "அத்தியாயம் 2: இயற்கணிதம்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch3",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 3,
    "unitNameEn": "Chapter 3",
    "unitNameTa": "அத்தியாயம் 3",
    "chapterNumber": 3,
    "titleEn": "Chapter 3: Analytical Geometry",
    "titleTa": "அத்தியாயம் 3: பகுமுறை வடிவியல்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch4",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 4,
    "unitNameEn": "Chapter 4",
    "unitNameTa": "அத்தியாயம் 4",
    "chapterNumber": 4,
    "titleEn": "Chapter 4: Trigonometry",
    "titleTa": "அத்தியாயம் 4: திரிகோணமிதி",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch5",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 5,
    "unitNameEn": "Chapter 5",
    "unitNameTa": "அத்தியாயம் 5",
    "chapterNumber": 5,
    "titleEn": "Chapter 5: Differential Calculus",
    "titleTa": "அத்தியாயம் 5: வகை நுண்கணிதம்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch6",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 6,
    "unitNameEn": "Chapter 6",
    "unitNameTa": "அத்தியாயம் 6",
    "chapterNumber": 6,
    "titleEn": "Chapter 6: Integral Calculus",
    "titleTa": "அத்தியாயம் 6: தொகை நுண்கணிதம்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch7",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 7,
    "unitNameEn": "Chapter 7",
    "unitNameTa": "அத்தியாயம் 7",
    "chapterNumber": 7,
    "titleEn": "Chapter 7: Financial Mathematics",
    "titleTa": "அத்தியாயம் 7: நிதி கணிதம்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch8",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 8,
    "unitNameEn": "Chapter 8",
    "unitNameTa": "அத்தியாயம் 8",
    "chapterNumber": 8,
    "titleEn": "Chapter 8: Descriptive Statistics and Probability",
    "titleTa": "அத்தியாயம் 8: விவரிப்பு புள்ளியியல் மற்றும் நிகழ்தகவு",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch9",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 9,
    "unitNameEn": "Chapter 9",
    "unitNameTa": "அத்தியாயம் 9",
    "chapterNumber": 9,
    "titleEn": "Chapter 9: Correlation and Regression Analysis",
    "titleTa": "அத்தியாயம் 9: உடன்தொடர்பு மற்றும் தொடர்போக்கு பகுப்பாய்வு",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c11_bm_ch10",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "unitNumber": 10,
    "unitNameEn": "Chapter 10",
    "unitNameTa": "அத்தியாயம் 10",
    "chapterNumber": 10,
    "titleEn": "Chapter 10: Operations Research",
    "titleTa": "அத்தியாயம் 10: செயல்பாட்டு ஆராய்ச்சி",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  }
];

export const CLASS_11_BMATH_NOTES: Record<string, NoteItem> = {
  "c11_bm_ch1": {
    "id": "note_c11_bm_ch1",
    "chapterId": "c11_bm_ch1",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 1: Matrices and Determinants",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 1: அணிகளும் அணிக்கோவைகளும்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 1: Matrices and Determinants provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 1: அணிகளும் அணிக்கோவைகளும் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Determinant Expansion (3x3)",
        "nameTa": "அணிக்கோவை விரிவு (3x3)",
        "formula": "|A| = a11(a22*a33 - a23*a32) - a12(a21*a33 - a23*a31) + a13(a21*a32 - a22*a31)",
        "explanationEn": "Expands a 3x3 determinant along the first row.",
        "explanationTa": "முதல் நிரை வழியாக 3x3 அணிக்கோவையை விரித்து மதிப்புக் காணுதல்."
      },
      {
        "nameEn": "Inverse Matrix Formula",
        "nameTa": "நேர்மாறு அணி காணும் சூத்திரம்",
        "formula": "A^(-1) = (1 / |A|) * adj(A), where |A| != 0",
        "explanationEn": "Inverse of non-singular square matrix exists if |A| != 0.",
        "explanationTa": "பூச்சியமற்ற சதுர அணிக்கு |A| != 0 எனில் நேர்மாறு அணி காணும் சூத்திரம்."
      },
      {
        "nameEn": "Cramer's Rule",
        "nameTa": "கிராமரின் விதி",
        "formula": "x = Δx / Δ,  y = Δy / Δ,  z = Δz / Δ  (Δ != 0)",
        "explanationEn": "Solves non-homogeneous systems of linear equations using determinants.",
        "explanationTa": "அணிக்கோவைகளைப் பயன்படுத்தி நேரியல் சமன்பாட்டுத் தொகுப்பைத் தீர்க்கும் விதி."
      },
      {
        "nameEn": "Hawkins-Simon Conditions",
        "nameTa": "ஹாவ்கின்ஸ்-சைமன் நிபந்தனைகள்",
        "formula": "(i) Main diagonal elements of (I - B) > 0, (ii) |I - B| > 0",
        "explanationEn": "Viability conditions ensuring positive output in Leontief input-output models.",
        "explanationTa": "லியோன்டிஃப் உள்ளீடு-வெளியீடு மாதிரியில் உற்பத்தி சாத்தியமாவதற்கான நிபந்தனைகள்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Find the inverse of the matrix A = [[2, 3], [1, 4]].",
        "questionTa": "A = [[2, 3], [1, 4]] என்ற அணியின் நேர்மாறு அணியைக் காண்க.",
        "solutionEn": "Step 1: Compute |A| = (2)(4) - (3)(1) = 8 - 3 = 5 != 0 (Inverse exists).\nStep 2: Adjoint adj(A) = [[4, -3], [-1, 2]].\nStep 3: A^(-1) = (1/|A|) * adj(A) = (1/5) * [[4, -3], [-1, 2]].",
        "solutionTa": "படி 1: |A| = (2)(4) - (3)(1) = 8 - 3 = 5 != 0 (நேர்மாறு உண்டு).\nபடி 2: சேர்ப்பு அணி adj(A) = [[4, -3], [-1, 2]].\nபடி 3: A^(-1) = (1/5) * [[4, -3], [-1, 2]]."
      },
      {
        "questionEn": "Solve using Cramer's rule: 2x + 3y = 7 and 3x + 5y = 11.",
        "questionTa": "கிராமரின் விதியைப் பயன்படுத்தித் தீர்க்க: 2x + 3y = 7 மற்றும் 3x + 5y = 11.",
        "solutionEn": "Δ = |[2, 3], [3, 5]| = 10 - 9 = 1 != 0.\nΔx = |[7, 3], [11, 5]| = 35 - 33 = 2.\nΔy = |[2, 7], [3, 11]| = 22 - 21 = 1.\nTherefore, x = Δx / Δ = 2 / 1 = 2, and y = Δy / Δ = 1 / 1 = 1.",
        "solutionTa": "Δ = 10 - 9 = 1 != 0.\nΔx = 35 - 33 = 2.\nΔy = 22 - 21 = 1.\nஎனவே, x = 2 / 1 = 2 மற்றும் y = 1 / 1 = 1."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "Always verify determinant Δ != 0 before applying Cramer's rule. If Δ = 0, Cramer's rule fails.",
        "tipTa": "கிராமரின் விதியைப் பயன்படுத்துவதற்கு முன் அணிக்கோவை Δ != 0 என்பதை உறுதிப்படுத்தவும்."
      },
      {
        "tipEn": "Hawkins-Simon condition requires both diagonal terms of (I - B) > 0 and determinant |I - B| > 0.",
        "tipTa": "பொருளாதார ரீதியாக சாத்தியப்பட (I - B)-ன் முதன்மை மூலைவிட்ட உறுப்புகள் > 0 மற்றும் |I - B| > 0 ஆக இருக்க வேண்டும்."
      }
    ]
  },
  "c11_bm_ch2": {
    "id": "note_c11_bm_ch2",
    "chapterId": "c11_bm_ch2",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 2: Algebra",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 2: இயற்கணிதம்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 2: Algebra provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 2: இயற்கணிதம் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Permutations Formula",
        "nameTa": "வரிசை மாற்றங்கள் சூத்திரம்",
        "formula": "nPr = n! / (n - r)!, where 0 <= r <= n",
        "explanationEn": "Calculates number of ordered arrangements of n distinct items taken r at a time.",
        "explanationTa": "n பொருட்களில் r பொருட்களைத் தேர்ந்தெடுத்து வரிசைப்படுத்தும் வழிகளின் எண்ணிக்கை."
      },
      {
        "nameEn": "Combinations Formula",
        "nameTa": "சேர்வுகள் சூத்திரம்",
        "formula": "nCr = n! / (r! * (n - r)!) = nPr / r!",
        "explanationEn": "Calculates number of selections of r items from n distinct items regardless of order.",
        "explanationTa": "n பொருட்களில் இருந்து r பொருட்களை வரிசையைக் கருதாமல் தேர்வு செய்யும் வழிகள்."
      },
      {
        "nameEn": "Complementary Combination",
        "nameTa": "நிரப்புச் சேர்வுப் பண்பு",
        "formula": "nCr = nC(n - r)",
        "explanationEn": "Selecting r items is equivalent to leaving behind (n - r) items.",
        "explanationTa": "r பொருட்களைத் தேர்ந்தெடுப்பது என்பது (n - r) பொருட்களை நிராகரிப்பதற்குச் சமம்."
      },
      {
        "nameEn": "Binomial Theorem Expansion",
        "nameTa": "ஈருறுப்புத் தேற்ற விரிவு",
        "formula": "(x + a)^n = Σ (nCr * x^(n-r) * a^r) from r=0 to n",
        "explanationEn": "General algebraic expansion for any positive integer power n.",
        "explanationTa": "நேர்மறை முழு எண் அடுக்குக்கான ஈருறுப்பு விரிவு சூத்திரம்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Resolve into partial fractions: (3x + 1) / ((x - 1)(x + 2)).",
        "questionTa": "பகுதிப் பின்னங்களாகப் பிரிக்க: (3x + 1) / ((x - 1)(x + 2)).",
        "solutionEn": "Let (3x + 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2).\n3x + 1 = A(x + 2) + B(x - 1).\nPut x = 1: 4 = A(3) => A = 4/3.\nPut x = -2: -5 = B(-3) => B = 5/3.\nHence, (3x + 1) / ((x - 1)(x + 2)) = 4 / (3(x - 1)) + 5 / (3(x + 2)).",
        "solutionTa": "(3x + 1) / ((x - 1)(x + 2)) = A / (x - 1) + B / (x + 2) என்க.\n3x + 1 = A(x + 2) + B(x - 1).\nx = 1 எனில்: 4 = 3A => A = 4/3.\nx = -2 எனில்: -5 = -3B => B = 5/3.\nஎனவே, பகுதிப் பின்னங்கள் = 4 / (3(x - 1)) + 5 / (3(x + 2))."
      },
      {
        "questionEn": "Find the middle term in the expansion of (x + 2y)^8.",
        "questionTa": "(x + 2y)^8-ன் விரிவில் நடு உறுப்பைக் காண்க.",
        "solutionEn": "Since n = 8 (even), the number of terms is n + 1 = 9.\nThe middle term is (8/2 + 1) = 5th term (T_5).\nT_(r+1) = nCr * x^(n-r) * a^r. Here r = 4.\nT_5 = 8C4 * x^4 * (2y)^4 = 70 * x^4 * 16y^4 = 1120 x^4 y^4.",
        "solutionTa": "இங்கு n = 8 (இரட்டைப்படை), எனவே உறுப்புகளின் எண்ணிக்கை 9.\nநடு உறுப்பு = T_5 (5வது உறுப்பு).\nT_5 = 8C4 * x^4 * (2y)^4 = 70 * x^4 * 16 y^4 = 1120 x^4 y^4."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "General term in binomial expansion (x + a)^n is T_(r+1) = nCr * x^(n-r) * a^r.",
        "tipTa": "(x + a)^n ஈருறுப்பு விரிவின் பொது உறுப்பு T_(r+1) = nCr * x^(n-r) * a^r ஆகும்."
      },
      {
        "tipEn": "Remember nCr + nC(r-1) = (n+1)Cr (Pascal's rule).",
        "tipTa": "பாஸ்கலின் விதி: nCr + nC(r-1) = (n+1)Cr என்பதை நினைவில் கொள்க."
      }
    ]
  },
  "c11_bm_ch3": {
    "id": "note_c11_bm_ch3",
    "chapterId": "c11_bm_ch3",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 3: Analytical Geometry",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 3: பகுமுறை வடிவியல்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 3: Analytical Geometry provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 3: பகுமுறை வடிவியல் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Slope-Intercept Form",
        "nameTa": "சாய்வு-வெட்டுத்துண்டு வடிவம்",
        "formula": "y = mx + c",
        "explanationEn": "Equation of straight line with slope m and y-intercept c.",
        "explanationTa": "சாய்வு m மற்றும் y-வெட்டுத்துண்டு c கொண்ட நேர்க்கோட்டின் சமன்பாடு."
      },
      {
        "nameEn": "Angle Between Two Straight Lines",
        "nameTa": "இரு நேர்க்கோடுகளுக்கு இடைப்பட்ட கோணம்",
        "formula": "tan θ = |(m1 - m2) / (1 + m1 * m2)|",
        "explanationEn": "Calculates acute angle between lines with slopes m1 and m2.",
        "explanationTa": "m1 மற்றும் m2 சாய்வுகளைக் கொண்ட இரு கோடுகளுக்கு இடைப்பட்ட குறுங்கோணம்."
      },
      {
        "nameEn": "Perpendicular Distance to Line",
        "nameTa": "புள்ளியிலிருந்து கோட்டிற்கு செங்குத்துத் தொலைவு",
        "formula": "d = |ax1 + by1 + c| / √(a^2 + b^2)",
        "explanationEn": "Distance from point (x1, y1) to line ax + by + c = 0.",
        "explanationTa": "(x1, y1) புள்ளியிலிருந்து ax + by + c = 0 என்ற கோட்டிற்கான செங்குத்துத் தொலைவு."
      },
      {
        "nameEn": "General Equation of Circle",
        "nameTa": "வட்டத்தின் பொதுச் சமன்பாடு",
        "formula": "x^2 + y^2 + 2gx + 2fy + c = 0",
        "explanationEn": "Circle with Center (-g, -f) and Radius r = √(g^2 + f^2 - c).",
        "explanationTa": "மையம் (-g, -f) மற்றும் ஆரம் r = √(g^2 + f^2 - c) கொண்ட வட்டத்தின் பொதுச் சமன்பாடு."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Find the equation of a straight line passing through (2, 3) and perpendicular to 3x - 4y + 5 = 0.",
        "questionTa": "(2, 3) புள்ளி வழிச் செல்வதும் 3x - 4y + 5 = 0 என்ற கோட்டிற்குச் செங்குத்தானதுமான நேர்க்கோட்டின் சமன்பாட்டைக் காண்க.",
        "solutionEn": "Step 1: Any line perpendicular to 3x - 4y + 5 = 0 is of the form 4x + 3y + k = 0.\nStep 2: Since it passes through (2, 3), substitute x = 2, y = 3:\n4(2) + 3(3) + k = 0 => 8 + 9 + k = 0 => k = -17.\nHence, the required line is 4x + 3y - 17 = 0.",
        "solutionTa": "படி 1: 3x - 4y + 5 = 0-க்கு செங்குத்தான கோட்டின் வடிவம்: 4x + 3y + k = 0.\nபடி 2: இது (2, 3) வழிச் செல்வதால்: 4(2) + 3(3) + k = 0 => 17 + k = 0 => k = -17.\nஎனவே தேவையான சமன்பாடு 4x + 3y - 17 = 0."
      },
      {
        "questionEn": "Find the center and radius of the circle x^2 + y^2 - 6x + 8y - 24 = 0.",
        "questionTa": "x^2 + y^2 - 6x + 8y - 24 = 0 என்ற வட்டத்தின் மையம் மற்றும் ஆரத்தைக் காண்க.",
        "solutionEn": "Comparing with x^2 + y^2 + 2gx + 2fy + c = 0:\n2g = -6 => g = -3\n2f = 8 => f = 4\nc = -24.\nCenter = (-g, -f) = (3, -4).\nRadius = √(g^2 + f^2 - c) = √((-3)^2 + 4^2 - (-24)) = √(9 + 16 + 24) = √49 = 7 units.",
        "solutionTa": "2g = -6 => g = -3; 2f = 8 => f = 4; c = -24.\nமையம் = (-g, -f) = (3, -4).\nஆரம் = √(g^2 + f^2 - c) = √(9 + 16 + 24) = √49 = 7 அலகுகள்."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "Two non-vertical lines are parallel if m1 = m2, and perpendicular if m1 * m2 = -1.",
        "tipTa": "இரு கோடுகள் இணையானவை எனில் m1 = m2, செங்குத்தானவை எனில் m1 * m2 = -1."
      },
      {
        "tipEn": "In pair of straight lines ax^2 + 2hxy + by^2 = 0, lines are perpendicular if a + b = 0.",
        "tipTa": "ax^2 + 2hxy + by^2 = 0 என்ற இரட்டைக் கோடுகளில் a + b = 0 எனில் அவை செங்குத்தானவை."
      }
    ]
  },
  "c11_bm_ch4": {
    "id": "note_c11_bm_ch4",
    "chapterId": "c11_bm_ch4",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 4: Trigonometry",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 4: திரிகோணமிதி",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 4: Trigonometry provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 4: திரிகோணமிதி தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Compound Angle: sin(A ± B)",
        "nameTa": "கூட்டுக் கோணம்: sin(A ± B)",
        "formula": "sin(A ± B) = sin A cos B ± cos A sin B",
        "explanationEn": "Expands sine of sum and difference of two angles.",
        "explanationTa": "இரு கோணங்களின் கூடுதல் மற்றும் கழித்தலின் சைன் விரிவு."
      },
      {
        "nameEn": "Compound Angle: cos(A ± B)",
        "nameTa": "கூட்டுக் கோணம்: cos(A ± B)",
        "formula": "cos(A ± B) = cos A cos B ∓ sin A sin B",
        "explanationEn": "Expands cosine of sum and difference of two angles.",
        "explanationTa": "இரு கோணங்களின் கூடுதல் மற்றும் கழித்தலின் கொசைன் விரிவு."
      },
      {
        "nameEn": "Double Angle Formulas",
        "nameTa": "இரட்டைக் கோணச் சூத்திரங்கள்",
        "formula": "sin 2A = 2 sin A cos A,  cos 2A = cos^2 A - sin^2 A = 1 - 2 sin^2 A",
        "explanationEn": "Expresses trigonometric ratios of 2A in terms of A.",
        "explanationTa": "2A கோணத்தை A கோணத்தின் முக்கோணவியல் விகிதங்களாக மாற்றுதல்."
      },
      {
        "nameEn": "Product to Sum Transformation",
        "nameTa": "பெருக்கலை கூட்டலாக மாற்றுதல்",
        "formula": "2 sin A cos B = sin(A + B) + sin(A - B)",
        "explanationEn": "Transforms products of trigonometric ratios into additive sums.",
        "explanationTa": "முக்கோணவியல் பெருக்கல்களை கூட்டல் மற்றும் கழித்தல் வடிவங்களாக மாற்றுதல்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Find the exact value of sin 15° using compound angle formulas.",
        "questionTa": "கூட்டுக்கோணச் சூத்திரத்தைப் பயன்படுத்தி sin 15°-ன் துல்லிய மதிப்பைக் காண்க.",
        "solutionEn": "sin 15° = sin(45° - 30°)\n= sin 45° cos 30° - cos 45° sin 30°\n= (1/√2) * (√3/2) - (1/√2) * (1/2)\n= (√3 - 1) / (2√2).",
        "solutionTa": "sin 15° = sin(45° - 30°)\n= sin 45° cos 30° - cos 45° sin 30°\n= (1/√2) * (√3/2) - (1/√2) * (1/2)\n= (√3 - 1) / (2√2)."
      },
      {
        "questionEn": "Prove that (sin 2A) / (1 + cos 2A) = tan A.",
        "questionTa": "(sin 2A) / (1 + cos 2A) = tan A என நிறுவுக.",
        "solutionEn": "LHS = (sin 2A) / (1 + cos 2A)\nSince sin 2A = 2 sin A cos A and 1 + cos 2A = 2 cos^2 A:\nLHS = (2 sin A cos A) / (2 cos^2 A) = sin A / cos A = tan A = RHS.",
        "solutionTa": "LHS = (sin 2A) / (1 + cos 2A)\nsin 2A = 2 sin A cos A மற்றும் 1 + cos 2A = 2 cos^2 A என்பதால்:\nLHS = (2 sin A cos A) / (2 cos^2 A) = sin A / cos A = tan A = RHS."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "All-Silver-Tea-Cups mnemonic: Quadrant I (All +), Quadrant II (Sin +), Quadrant III (Tan +), Quadrant IV (Cos +).",
        "tipTa": "அனைத்து-வெள்ளி-தேனீர்-கோப்பைகள்: முதல் கால்பகுதி (அனைத்தும் +), இரண்டாம் (Sin +), மூன்றாம் (Tan +), நான்காம் (Cos +)."
      },
      {
        "tipEn": "Principal domain of sin^(-1) x is [-π/2, π/2], and for cos^(-1) x is [0, π].",
        "tipTa": "sin^(-1) x-ன் முதன்மை இடைவெளி [-π/2, π/2] மற்றும் cos^(-1) x-ன் முதன்மை இடைவெளி [0, π]."
      }
    ]
  },
  "c11_bm_ch5": {
    "id": "note_c11_bm_ch5",
    "chapterId": "c11_bm_ch5",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 5: Differential Calculus",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 5: வகை நுண்கணிதம்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 5: Differential Calculus provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 5: வகை நுண்கணிதம் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Marginal Cost (MC)",
        "nameTa": "இறுதிநிலைச் செலவு (MC)",
        "formula": "MC = dC / dx",
        "explanationEn": "Instantaneous rate of change of total cost C with respect to output x.",
        "explanationTa": "உற்பத்தி x-ஐப் பொறுத்து மொத்தச் செலவு C மாறும் உடனடி விகிதம்."
      },
      {
        "nameEn": "Marginal Revenue (MR)",
        "nameTa": "இறுதிநிலை வருவாய் (MR)",
        "formula": "MR = dR / dx",
        "explanationEn": "Instantaneous rate of change of total revenue R with respect to output x.",
        "explanationTa": "உற்பத்தி x-ஐப் பொறுத்து மொத்த வருவாய் R மாறும் உடனடி விகிதம்."
      },
      {
        "nameEn": "Elasticity of Demand (η_d)",
        "nameTa": "தேவை நெகிழ்ச்சிக் கெழு (η_d)",
        "formula": "η_d = - (p / x) * (dx / dp)",
        "explanationEn": "Measures responsiveness of quantity demanded x to changes in price p.",
        "explanationTa": "விலை p மாற்றத்திற்கு ஏற்ப தேவை அளவு x மாறும் நெகிழ்ச்சி விகிதம்."
      },
      {
        "nameEn": "Profit Maximization Condition",
        "nameTa": "லாப உச்சமாக்கல் நிபந்தனை",
        "formula": "MR = MC  and  (d^2 P / dx^2) < 0",
        "explanationEn": "Profit is maximized when marginal revenue equals marginal cost and second derivative is negative.",
        "explanationTa": "MR = MC ஆகவும் இரண்டாம் வகைக்கெழு எதிர்மறையாகவும் இருக்கும்போது லாபம் உச்சமடைகிறது."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "The total cost function is C(x) = 5x^2 + 20x + 100. Find the Marginal Cost (MC) and Average Cost (AC) when output x = 10.",
        "questionTa": "மொத்தச் செலவுச் சார்பு C(x) = 5x^2 + 20x + 100 எனில், x = 10 உற்பத்தியின் போது இறுதிநிலைச் செலவு (MC) மற்றும் சராசரிச் செலவு (AC) காண்க.",
        "solutionEn": "Step 1: MC = dC/dx = d/dx (5x^2 + 20x + 100) = 10x + 20.\nWhen x = 10: MC = 10(10) + 20 = 120.\nStep 2: AC = C(x) / x = 5x + 20 + 100/x.\nWhen x = 10: AC = 5(10) + 20 + 100/10 = 50 + 20 + 10 = 80.",
        "solutionTa": "படி 1: MC = dC/dx = 10x + 20.\nx = 10 எனில்: MC = 10(10) + 20 = 120.\nபடி 2: AC = C(x) / x = 5x + 20 + 100/x.\nx = 10 எனில்: AC = 50 + 20 + 10 = 80."
      },
      {
        "questionEn": "If the demand law is p = 100 - 2x, find the elasticity of demand η_d at x = 20.",
        "questionTa": "தேவை விதி p = 100 - 2x எனில், x = 20 என்ற அளவில் தேவை நெகிழ்ச்சி η_d-ஐக் காண்க.",
        "solutionEn": "At x = 20: p = 100 - 2(20) = 60.\nFrom p = 100 - 2x, dp/dx = -2 => dx/dp = -1/2.\nη_d = - (p / x) * (dx / dp) = - (60 / 20) * (-1/2) = 3 * (1/2) = 1.5 (Elastic).",
        "solutionTa": "x = 20 எனில்: p = 100 - 40 = 60.\ndp/dx = -2 => dx/dp = -1/2.\nη_d = - (p / x) * (dx / dp) = - (60 / 20) * (-1/2) = 1.5 (நெகிழ்ச்சியுடையது)."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "Demand is elastic if η_d > 1, inelastic if η_d < 1, and unit elastic if η_d = 1.",
        "tipTa": "η_d > 1 எனில் நெகிழ்ச்சியுடைய தேவை, η_d < 1 எனில் நெகிழ்ச்சியற்ற தேவை, η_d = 1 எனில் ஒன்றுக்குச் சமமான தேவை."
      },
      {
        "tipEn": "At minimum Average Cost (AC), Marginal Cost equals Average Cost (MC = AC).",
        "tipTa": "குறைந்தபட்ச சராசரிச் செலவில் (AC), இறுதிநிலைச் செலவு சராசரிச் செலவுக்குச் சமமாகும் (MC = AC)."
      }
    ]
  },
  "c11_bm_ch6": {
    "id": "note_c11_bm_ch6",
    "chapterId": "c11_bm_ch6",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 6: Integral Calculus",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 6: தொகை நுண்கணிதம்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 6: Integral Calculus provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 6: தொகை நுண்கணிதம் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Integration by Parts",
        "nameTa": "பகுதிவாரியாகத் தொகையிடல்",
        "formula": "∫ u dv = u*v - ∫ v du (ILATE rule)",
        "explanationEn": "Used to integrate the product of two functions.",
        "explanationTa": "இரு சார்புகளின் பெருக்கலை தொகையிடும் சூத்திரம் (ILATE வரிசை)."
      },
      {
        "nameEn": "Total Cost from Marginal Cost",
        "nameTa": "இறுதிநிலைச் செலவிலிருந்து மொத்தச் செலவு",
        "formula": "C(x) = ∫ MC dx + k",
        "explanationEn": "Recovers total cost by integrating marginal cost where k is fixed cost C(0).",
        "explanationTa": "இறுதிநிலைச் செலவைத் தொகையிட்டு நிலையான செலவு k-ஐக் கூட்டி மொத்தச் செலவைக் காணுதல்."
      },
      {
        "nameEn": "Consumer's Surplus (CS)",
        "nameTa": "நுகர்வோர் உபரி (CS)",
        "formula": "CS = ∫_0^(x0) f(x) dx - p0 * x0",
        "explanationEn": "Monetary benefit to consumers paying market price p0 below their willingness to pay.",
        "explanationTa": "சந்தை விலை p0-ல் வாங்கும் நுகர்வோர் பெறும் பொருளாதார உபரி."
      },
      {
        "nameEn": "Producer's Surplus (PS)",
        "nameTa": "உற்பத்தியாளர் உபரி (PS)",
        "formula": "PS = p0 * x0 - ∫_0^(x0) g(x) dx",
        "explanationEn": "Monetary benefit to producers receiving price p0 above their marginal supply cost.",
        "explanationTa": "சந்தை விலை p0-ல் விற்கும் உற்பத்தியாளர் பெறும் பொருளாதார உபரி."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "The marginal cost of production is given by MC = 3x^2 - 4x + 5. If fixed cost is Rs. 100, find the Total Cost function C(x).",
        "questionTa": "இறுதிநிலைச் செலவு MC = 3x^2 - 4x + 5 மற்றும் நிலையான செலவு ரூ. 100 எனில், மொத்தச் செலவுச் சார்பு C(x)-ஐக் காண்க.",
        "solutionEn": "C(x) = ∫ MC dx = ∫ (3x^2 - 4x + 5) dx = 3(x^3/3) - 4(x^2/2) + 5x + k\n= x^3 - 2x^2 + 5x + k.\nFixed cost is C(0) = 100 => k = 100.\nTherefore, C(x) = x^3 - 2x^2 + 5x + 100.",
        "solutionTa": "C(x) = ∫ (3x^2 - 4x + 5) dx = x^3 - 2x^2 + 5x + k.\nநிலையான செலவு C(0) = 100 => k = 100.\nஎனவே, மொத்தச் செலவுச் சார்பு C(x) = x^3 - 2x^2 + 5x + 100."
      },
      {
        "questionEn": "The demand function for a commodity is p = 30 - 2x. Find the Consumer's Surplus (CS) at equilibrium quantity x0 = 5.",
        "questionTa": "ஒரு பொருளின் தேவைச் சார்பு p = 30 - 2x எனில், சமநிலை அளவு x0 = 5-ல் நுகர்வோர் உபரியைக் (CS) காண்க.",
        "solutionEn": "At x0 = 5, equilibrium price p0 = 30 - 2(5) = 20.\nCS = ∫_0^5 (30 - 2x) dx - p0 * x0\n= [30x - x^2]_0^5 - (20 * 5)\n= (30(5) - 25) - 100 = 125 - 100 = 25 units.",
        "solutionTa": "x0 = 5 எனில், சமநிலை விலை p0 = 30 - 10 = 20.\nCS = ∫_0^5 (30 - 2x) dx - (20 * 5)\n= [30x - x^2]_0^5 - 100\n= (150 - 25) - 100 = 125 - 100 = 25 அலகுகள்."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "In Consumer Surplus, subtract the expenditure rectangle (p0 * x0) from the integral of demand curve.",
        "tipTa": "நுகர்வோர் உபரியில் தேவை வளைவரையின் தொகையீட்டு பரப்பிலிருந்து செவ்வகப் பரப்பை (p0 * x0) கழிக்க வேண்டும்."
      },
      {
        "tipEn": "In Producer Surplus, subtract the supply integral from the revenue rectangle (p0 * x0).",
        "tipTa": "உற்பத்தியாளர் உபரியில் செவ்வகப் பரப்பிலிருந்து (p0 * x0) அளிப்பு வளைவரையின் தொகையீட்டைக் கழிக்க வேண்டும்."
      }
    ]
  },
  "c11_bm_ch7": {
    "id": "note_c11_bm_ch7",
    "chapterId": "c11_bm_ch7",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 7: Financial Mathematics",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 7: நிதி கணிதம்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 7: Financial Mathematics provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 7: நிதி கணிதம் தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Simple Interest (SI)",
        "nameTa": "தனிவட்டி (SI)",
        "formula": "SI = (P * N * R) / 100",
        "explanationEn": "Calculates simple interest on principal P over N years at rate R%.",
        "explanationTa": "அசல் P, காலம் N ஆண்டுகள், வட்டி விகிதம் R%-ல் கணக்கிடப்படும் தனிவட்டி."
      },
      {
        "nameEn": "Compound Interest (CI)",
        "nameTa": "கூட்டுவட்டி (CI)",
        "formula": "A = P * (1 + i)^n,  where i = r / 100",
        "explanationEn": "Total accrued amount after n compounding periods at periodic interest rate i.",
        "explanationTa": "வட்டிக்கு வட்டி கணக்கிடப்பட்டு n கால முடிவில் கிடைக்கும் மொத்தத் தொகை."
      },
      {
        "nameEn": "Future Value of Ordinary Annuity (A)",
        "nameTa": "சாதாரண தவணைப் பங்கீட்டின் எதிர்கால மதிப்பு",
        "formula": "F = (a / i) * [(1 + i)^n - 1]",
        "explanationEn": "Accumulated value of periodic regular installment a paid at the end of each period.",
        "explanationTa": "ஒவ்வொரு கால முடிவிலும் செலுத்தப்படும் தவணை a-ன் எதிர்கால திரண்ட மதிப்பு."
      },
      {
        "nameEn": "Present Value of Ordinary Annuity (P)",
        "nameTa": "சாதாரண தவணைப் பங்கீட்டின் தற்போதைய மதிப்பு",
        "formula": "P = (a / i) * [1 - (1 + i)^(-n)]",
        "explanationEn": "Lump sum required today to fund future periodic annuity installments.",
        "explanationTa": "எதிர்கால சம தவணைகளை ஈடுகட்ட இன்று தேவைப்படும் முதலீட்டுத் தொகை."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Find the compound interest on Rs. 10,000 for 2 years at 10% per annum compounded annually.",
        "questionTa": "ரூ. 10,000 அசலுக்கு 10% ஆண்டு கூட்டுவட்டி வீதத்தில் 2 ஆண்டுகளுக்கு கூட்டுவட்டியைக் காண்க.",
        "solutionEn": "P = 10,000, r = 10% => i = 0.10, n = 2.\nA = P(1 + i)^n = 10,000 * (1 + 0.10)^2 = 10,000 * (1.1)^2 = 10,000 * 1.21 = Rs. 12,100.\nCompound Interest CI = A - P = 12,100 - 10,000 = Rs. 2,100.",
        "solutionTa": "P = 10,000, i = 0.10, n = 2.\nமொத்தத் தொகை A = 10,000 * (1.1)^2 = 10,000 * 1.21 = ரூ. 12,100.\nகூட்டுவட்டி CI = 12,100 - 10,000 = ரூ. 2,100."
      },
      {
        "questionEn": "Calculate the effective rate of interest corresponding to a nominal rate of 12% per annum compounded monthly.",
        "questionTa": "ஆண்டுக்கு 12% பெயரளவு வட்டி மாதந்தோறும் கூட்டப்பட்டால், அதன் உண்மை வட்டி வீதத்தைக் காண்க.",
        "solutionEn": "r = 12%, m = 12 compounding cycles per year.\ni = r / m = 12% / 12 = 1% = 0.01 per month.\nEffective Rate r_eff = (1 + i)^m - 1 = (1 + 0.01)^12 - 1 = (1.01)^12 - 1 = 1.1268 - 1 = 0.1268 = 12.68% p.a.",
        "solutionTa": "r = 12%, m = 12 மாதங்கள்.\ni = 12% / 12 = 1% = 0.01.\nஉண்மை வட்டி r_eff = (1 + 0.01)^12 - 1 = 1.1268 - 1 = 0.1268 = 12.68%."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "Compounding more frequently (quarterly, monthly, daily) always yields a higher effective interest rate than the nominal rate.",
        "tipTa": "அடிக்கடி கூட்டுவட்டி கணக்கிடப்படும்போது (காலாண்டு, மாதம்) உண்மை வட்டி பெயரளவு வட்டியை விட எப்போதும் அதிகமாகும்."
      },
      {
        "tipEn": "In a sinking fund, periodic deposits accumulate with interest to pay off a major future liability.",
        "tipTa": "கடன் தீர்வு நிதியில் (Sinking Fund) எதிர்கால கடனை அடைக்க குறிப்பிட்ட தொகையை வட்டியுடன் சேர்த்து சேமிக்கப்படுகிறது."
      }
    ]
  },
  "c11_bm_ch8": {
    "id": "note_c11_bm_ch8",
    "chapterId": "c11_bm_ch8",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 8: Descriptive Statistics and Probability",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 8: விவரிப்பு புள்ளியியல் மற்றும் நிகழ்தகவு",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 8: Descriptive Statistics and Probability provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 8: விவரிப்பு புள்ளியியல் மற்றும் நிகழ்தகவு தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Arithmetic Mean (Grouped)",
        "nameTa": "கூட்டுச் சராசரி (தொகுக்கப்பட்ட தரவு)",
        "formula": "x̄ = (Σ f*x) / (Σ f)",
        "explanationEn": "Weighted average of class midpoints weighted by frequencies.",
        "explanationTa": "அலைவெண்களைக் கொண்டு கணக்கிடப்படும் சராசரி மதிப்பு."
      },
      {
        "nameEn": "Standard Deviation (σ)",
        "nameTa": "திட்டவிலக்கம் (σ)",
        "formula": "σ = √[ (Σ f*d^2 / N) - (Σ f*d / N)^2 ] * c",
        "explanationEn": "Root-mean-square deviation of values from their arithmetic mean.",
        "explanationTa": "சராசரியிலிருந்து உறுப்புகளின் விலக்கங்களின் வர்க்க சராசரியின் வர்க்கமூலம்."
      },
      {
        "nameEn": "Coefficient of Variation (CV)",
        "nameTa": "மாறுபாட்டுக் கெழு (CV)",
        "formula": "CV = (σ / x̄) * 100",
        "explanationEn": "Measures relative variability; lower CV indicates higher consistency.",
        "explanationTa": "தரவுகளின் நிலைத்தன்மையை ஒப்பிட உதவும் சார்பு விலக்க அளவை. குறைவான CV அதிக நிலைத்தன்மையைக் குறிக்கும்."
      },
      {
        "nameEn": "Bayes' Theorem",
        "nameTa": "பேயீஸின் தேற்றம்",
        "formula": "P(A_i | B) = [ P(A_i) * P(B | A_i) ] / [ Σ P(A_j) * P(B | A_j) ]",
        "explanationEn": "Revises prior probabilities P(A_i) given occurrence of event B to obtain posterior probability.",
        "explanationTa": "நிகழ்ச்சி B நிகழ்ந்த பின் ஆரம்ப நிகழ்தகவை மாற்றியமைக்கும் பின்நிகழ்வு நிகழ்தகவுச் சூத்திரம்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Two factories produce light bulbs. Factory A has mean life 1500 hrs with SD 150 hrs. Factory B has mean life 1200 hrs with SD 96 hrs. Which factory has greater consistency?",
        "questionTa": "இரு ஆலைகள் மின்விளக்குகளைத் தயாரிக்கின்றன. ஆலை A சராசரி 1500 மணி, தி.வி 150 மணி. ஆலை B சராசரி 1200 மணி, தி.வி 96 மணி. எது அதிக நிலைத்தன்மை கொண்டது?",
        "solutionEn": "Factory A: CV_A = (σ / x̄) * 100 = (150 / 1500) * 100 = 10%.\nFactory B: CV_B = (σ / x̄) * 100 = (96 / 1200) * 100 = 8%.\nSince CV_B (8%) < CV_A (10%), Factory B exhibits greater consistency and uniformity.",
        "solutionTa": "ஆலை A: CV_A = (150 / 1500) * 100 = 10%.\nஆலை B: CV_B = (96 / 1200) * 100 = 8%.\nCV_B < CV_A என்பதால், ஆலை B அதிக நிலைத்தன்மை மற்றும் ஒரே சீரான தயாரிப்பைக் கொண்டுள்ளது."
      },
      {
        "questionEn": "A bag contains 5 red and 7 black balls. Two balls are drawn at random without replacement. Find the probability that both balls are red.",
        "questionTa": "ஒரு பையில் 5 சிவப்பு மற்றும் 7 கருப்புப் பந்துகள் உள்ளன. திரும்ப வைக்காமல் அடுத்தடுத்து இரு பந்துகள் எடுக்கப்பட்டால், இரண்டும் சிவப்பாக இருப்பதற்கான நிகழ்தகவு காண்க.",
        "solutionEn": "Total balls = 5 + 7 = 12.\nP(First is Red) = 5 / 12.\nP(Second is Red | First was Red) = 4 / 11.\nBy multiplication rule: P(Both Red) = (5 / 12) * (4 / 11) = 20 / 132 = 5 / 33.",
        "solutionTa": "மொத்தப் பந்துகள் = 12.\nமுதல் பந்து சிவப்பாக இருக்க = 5 / 12.\nஇரண்டாம் பந்தும் சிவப்பாக இருக்க = 4 / 11.\nபெருக்கல் விதிப்படி: P(இரு பந்தும் சிவப்பு) = (5 / 12) * (4 / 11) = 5 / 33."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "To check which brand or batsman is more consistent, compare Coefficient of Variation (CV). The one with lower CV is more consistent.",
        "tipTa": "எந்த நிறுவனம் அல்லது வீரர் அதிக நிலைத்தன்மை கொண்டவர் என்பதை அறிய CV-ஐ ஒப்பிட வேண்டும். குறைந்த CV உள்ளவர் அதிக நிலைத்தன்மை கொண்டவர்."
      },
      {
        "tipEn": "For mutually exclusive events A and B, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).",
        "tipTa": "ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகளுக்கு P(A ∩ B) = 0, எனவே P(A ∪ B) = P(A) + P(B)."
      }
    ]
  },
  "c11_bm_ch9": {
    "id": "note_c11_bm_ch9",
    "chapterId": "c11_bm_ch9",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 9: Correlation and Regression Analysis",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 9: உடன்தொடர்பு மற்றும் தொடர்போக்கு பகுப்பாய்வு",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 9: Correlation and Regression Analysis provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 9: உடன்தொடர்பு மற்றும் தொடர்போக்கு பகுப்பாய்வு தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Karl Pearson's Correlation Coefficient (r)",
        "nameTa": "கார்ல் பியர்சனின் உடன்தொடர்புக் கெழு (r)",
        "formula": "r = Cov(X, Y) / (σx * σy) = Σxy / √(Σx^2 * Σy^2)",
        "explanationEn": "Measures degree and direction of linear association between two variables (-1 <= r <= 1).",
        "explanationTa": "இரு மாறிகளுக்கு இடையிலான நேரியல் தொடர்பின் வலிமை மற்றும் திசையை அளவிடும் கெழு (-1 <= r <= 1)."
      },
      {
        "nameEn": "Spearman's Rank Correlation (ρ)",
        "nameTa": "ஸ்பியர்மேனின் தர உடன்தொடர்புக் கெழு (ρ)",
        "formula": "ρ = 1 - [ (6 * Σ d^2) / (n * (n^2 - 1)) ]",
        "explanationEn": "Calculates correlation between qualitative ranked attributes where d is difference in ranks.",
        "explanationTa": "தரவரிசைப்படுத்தப்பட்ட பண்புகளுக்கு இடையிலான உடன்தொடர்பை அளவிடும் சூத்திரம் (d என்பது தர வேறுபாடு)."
      },
      {
        "nameEn": "Regression Coefficients (b_yx and b_xy)",
        "nameTa": "தொடர்போக்குக் கெழுக்கள்",
        "formula": "b_yx = r * (σy / σx),  b_xy = r * (σx / σy)",
        "explanationEn": "Slopes of regression lines of Y on X and X on Y.",
        "explanationTa": "Y-ன் மீது X மற்றும் X-ன் மீது Y ஆகிய தொடர்போக்குக் கோடுகளின் சாய்வுகள்."
      },
      {
        "nameEn": "Regression Lines Property",
        "nameTa": "தொடர்போக்குக் கோடுகளின் பண்பு",
        "formula": "r = ± √(b_yx * b_xy)",
        "explanationEn": "Correlation coefficient is the geometric mean of two regression coefficients.",
        "explanationTa": "உடன்தொடர்புக் கெழுவானது இரு தொடர்போக்குக் கெழுக்களின் பெருக்குச் சராசரி ஆகும்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "If the two regression coefficients are b_yx = 0.8 and b_xy = 0.45, find the correlation coefficient r.",
        "questionTa": "இரு தொடர்போக்குக் கெழுக்கள் b_yx = 0.8 மற்றும் b_xy = 0.45 எனில், உடன்தொடர்புக் கெழு r-ஐக் காண்க.",
        "solutionEn": "Since both regression coefficients are positive, r is positive.\nr = + √(b_yx * b_xy) = √(0.8 * 0.45) = √0.36 = 0.6.\nHence, there is a moderate positive correlation (r = 0.6).",
        "solutionTa": "இரு தொடர்போக்குக் கெழுக்களும் நேர்மறை என்பதால் r நேர்மறையாகும்.\nr = + √(b_yx * b_xy) = √(0.8 * 0.45) = √0.36 = 0.6.\nஎனவே, இரு மாறிகளுக்கு இடையே மிதமான நேரிடை உடன்தொடர்பு உள்ளது."
      },
      {
        "questionEn": "The following ranks were assigned to 5 students by two judges: Judge 1: (1, 2, 3, 4, 5); Judge 2: (2, 1, 4, 3, 5). Calculate Spearman's rank correlation ρ.",
        "questionTa": "இரு நடுவர்களால் 5 மாணவர்களுக்கு வழங்கப்பட்ட தரவரிசைகள்: நடுவர் 1: (1, 2, 3, 4, 5); நடுவர் 2: (2, 1, 4, 3, 5). ஸ்பியர்மேனின் தர உடன்தொடர்பு ρ-ஐக் காண்க.",
        "solutionEn": "Differences d = R1 - R2: (1-2)=-1, (2-1)=1, (3-4)=-1, (4-3)=1, (5-5)=0.\nd^2: 1, 1, 1, 1, 0 => Σ d^2 = 4. Here n = 5.\nρ = 1 - [6 * Σ d^2 / (n(n^2 - 1))] = 1 - [6 * 4 / (5 * 24)] = 1 - [24 / 120] = 1 - 0.2 = 0.8.",
        "solutionTa": "வேறுபாடுகள் d: -1, 1, -1, 1, 0 => Σ d^2 = 4; n = 5.\nρ = 1 - [ (6 * 4) / (5 * 24) ] = 1 - [ 24 / 120 ] = 1 - 0.2 = 0.8."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "Both regression coefficients b_yx and b_xy and correlation r must always have the SAME sign.",
        "tipTa": "இரு தொடர்போக்குக் கெழுக்கள் (b_yx, b_xy) மற்றும் உடன்தொடர்புக் கெழு r மூன்றும் ஒரே குறியீட்டைக் கொண்டிருக்கும்."
      },
      {
        "tipEn": "The two regression lines intersect at the point of their arithmetic means (x̄, ȳ).",
        "tipTa": "இரு தொடர்போக்குக் கோடுகளும் அவற்றின் கூட்டுச் சராசரிப் புள்ளியில் (x̄, ȳ) ஒன்றையொன்று வெட்டிக்கொள்ளும்."
      }
    ]
  },
  "c11_bm_ch10": {
    "id": "note_c11_bm_ch10",
    "chapterId": "c11_bm_ch10",
    "classLevel": 11,
    "subjectId": "c11_business_maths",
    "titleEn": "Board Revision Notes: Chapter 10: Operations Research",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: அத்தியாயம் 10: செயல்பாட்டு ஆராய்ச்சி",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Business Mathematics Panel",
    "reviewedByRole": "State Board Senior Subject Expert",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "readTimeMinutes": 15,
    "bodyEn": "### 1. Conceptual Framework & Core Theory\nChapter 10: Operations Research provides vital mathematical methodologies tailored for commerce, corporate decision-making, and financial optimization in the Tamil Nadu Samacheer Kalvi Class 11 curriculum.\n\n### 2. Analytical Principles & Worked Methodologies\nStep-by-step mathematical reasoning, theorem derivations, algebraic formulations, and practical business applications essential for scoring centum in higher secondary examinations.",
    "bodyTa": "### 1. பாடக் கருத்துக்களும் சமச்சீர் கல்வி கோட்பாடுகளும்\nஅத்தியாயம் 10: செயல்பாட்டு ஆராய்ச்சி தமிழ்நாடு மேல்நிலைக் கல்வி வணிகக் கணிதம் மற்றும் புள்ளியியல் பாடத்திட்டத்தின் முக்கிய பகுதியாகும். வணிக முடிவுகள் மற்றும் நிதி நிர்வாகத்திற்குத் தேவையான முறைகளை இது வழங்குகிறது.\n\n### 2. கணக்கீட்டு முறைகளும் மாதிரித் தீர்வுகளும்\nமாணவர்கள் அரசு பொதுத்தேர்வில் முழு மதிப்பெண் பெறுவதற்குத் தேவையான படிநிலைகள், தேற்றங்கள், சூத்திரங்கள் மற்றும் பயன்பாட்டுக் கணக்குகளின் முழுமையான தீர்வுகள்.",
    "keyFormulas": [
      {
        "nameEn": "Linear Programming Problem (LPP)",
        "nameTa": "நேரியல் திட்டமிடல் கணக்கு (LPP)",
        "formula": "Maximize / Minimize Z = c1*x1 + c2*x2 subject to Ax <= b, x1, x2 >= 0",
        "explanationEn": "Mathematical formulation optimizing objective function Z subject to resource constraints.",
        "explanationTa": "வளக் கட்டுப்பாடுகளுக்கு உட்பட்டு குறிக்கோள் சார்பு Z-ஐ உச்சமாக்கும் அல்லது குறைக்கும் மாதிரி."
      },
      {
        "nameEn": "North-West Corner Rule (NWCR)",
        "nameTa": "வடமேற்கு மூலை விதி (NWCR)",
        "formula": "Allocate min(Supply, Demand) to cell (1, 1) and adjust row/column",
        "explanationEn": "Heuristic method for finding an initial basic feasible solution (IBFS) to transportation problems.",
        "explanationTa": "போக்குவரத்துக் கணக்குகளில் தொடக்க அடிப்படை சாத்தியத் தீர்வை எளிதாகப் பெறும் வழிமுறை."
      },
      {
        "nameEn": "Least Cost Method (LCM)",
        "nameTa": "குறைந்தபட்ச செலவு முறை (LCM)",
        "formula": "Allocate maximum possible units to cell with minimum unit transportation cost c_ij",
        "explanationEn": "Greedy cost-minimizing heuristic for finding superior initial transportation solutions.",
        "explanationTa": "மிகக் குறைந்த போக்குவரத்துச் செலவு கொண்ட கட்டத்திற்கு அதிகபட்ச அலகுகளை ஒதுக்கும் முறை."
      },
      {
        "nameEn": "Critical Path Method (CPM)",
        "nameTa": "தீர்வுப் பாதை முறை (CPM)",
        "formula": "Total Project Duration = Length of Longest Path in Network (Zero Slack)",
        "explanationEn": "Determines the sequence of critical activities controlling project completion time.",
        "explanationTa": "திட்டத்தை முடிக்கத் தேவைப்படும் மிக நீண்ட பாதையையும் அதிலுள்ள முக்கிய நடவடிக்கைகளையும் கண்டறிதல்."
      }
    ],
    "workedExamples": [
      {
        "questionEn": "Solve graphically: Maximize Z = 3x + 5y subject to x + 2y <= 20, x + y <= 15, and x, y >= 0.",
        "questionTa": "வரைபட முறையில் தீர்க்க: Maximize Z = 3x + 5y; கட்டுப்பாடுகள்: x + 2y <= 20, x + y <= 15, மற்றும் x, y >= 0.",
        "solutionEn": "Step 1: Plot boundary lines:\nLine 1: x + 2y = 20 => (0, 10) and (20, 0).\nLine 2: x + y = 15 => (0, 15) and (15, 0).\nIntersection of Line 1 and 2: Subtracting gives y = 5, then x = 10 => Point (10, 5).\nStep 2: Corner points of feasible region are O(0,0), A(15,0), B(10,5), C(0,10).\nStep 3: Evaluate Z:\nAt O(0, 0): Z = 0\nAt A(15, 0): Z = 3(15) + 0 = 45\nAt B(10, 5): Z = 3(10) + 5(5) = 30 + 25 = 55 (Maximum)\nAt C(0, 10): Z = 3(0) + 5(10) = 50.\nOptimal solution: x = 10, y = 5 with Maximum Z = 55.",
        "solutionTa": "படி 1: எல்லைக் கோடுகள் வரைதல்:\nகோடு 1: x + 2y = 20 => (0, 10) மற்றும் (20, 0).\nகோடு 2: x + y = 15 => (0, 15) மற்றும் (15, 0).\nஇரண்டும் வெட்டும் புள்ளி: (10, 5).\nபடி 2: சாத்தியப் பகுதியின் முனைப்புள்ளிகள்: O(0,0), A(15,0), B(10,5), C(0,10).\nபடி 3: Z-ன் மதிப்புகள்:\nO(0,0)-ல் Z = 0; A(15,0)-ல் Z = 45; B(10,5)-ல் Z = 55 (உச்சம்); C(0,10)-ல் Z = 50.\nஉகந்த தீர்வு: x = 10, y = 5, அதிகபட்ச Z = 55."
      },
      {
        "questionEn": "In a transportation problem with 3 origins and 4 destinations, what is the required number of non-negative basic allocations for a non-degenerate solution?",
        "questionTa": "3 தொடக்க இடங்கள் மற்றும் 4 போய்ச்சேரும் இடங்களைக் கொண்ட போக்குவரத்துக் கணக்கில், சிதைவற்ற தீர்வுக்கு எத்தனை அடிப்படை ஒதுக்கீடுகள் தேவை?",
        "solutionEn": "Number of origins m = 3, number of destinations n = 4.\nCondition for non-degeneracy: Allocations = m + n - 1 = 3 + 4 - 1 = 6 allocations.",
        "solutionTa": "தொடக்க இடங்கள் m = 3, சேருமிடங்கள் n = 4.\nசிதைவற்ற தீர்வுக்கு அடிப்படை ஒதுக்கீடுகள் = m + n - 1 = 3 + 4 - 1 = 6 ஒதுக்கீடுகள் தேவை."
      }
    ],
    "rememberBoxes": [
      {
        "tipEn": "In LPP, an optimal solution always occurs at one of the extreme corner vertices of the convex feasible region.",
        "tipTa": "நேரியல் திட்டமிடலில் உகந்த தீர்வு எப்போதும் குவிந்த சாத்தியப் பகுதியின் ஏதேனும் ஒரு முனைப்புள்ளியிலேயே அமையும்."
      },
      {
        "tipEn": "A transportation problem is balanced when Total Supply equals Total Demand (Σ a_i = Σ b_j). If unbalanced, add dummy row or column with zero costs.",
        "tipTa": "மொத்த அளிப்பு = மொத்தத் தேவை எனில் போக்குவரத்துக் கணக்கு சமநிலையானது. இல்லையெனில் பூச்சியச் செலவுடைய போலி நிரை அல்லது நிரலைச் சேர்க்க வேண்டும்."
      }
    ]
  }
};

export const CLASS_11_BMATH_SUMMARIES: Record<string, SummaryItem> = {
  "c11_bm_ch1": {
    "id": "sum_c11_bm_ch1",
    "chapterId": "c11_bm_ch1",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "A square matrix A has an inverse if and only if it is non-singular (|A| != 0).",
      "Adjoint of A is the transpose of the cofactor matrix: adj(A) = [A_ij]^T.",
      "Cramer's rule provides a determinant-based closed form solution for systems of linear equations.",
      "Leontief input-output analysis assesses the interdependence of industries in an economy."
    ],
    "keyPointsTa": [
      "ஒரு சதுர அணி பூச்சியமற்ற அணிக்கோவை மதிப்பு (|A| != 0) கொண்டிருந்தால் மட்டுமே நேர்மாறு பெற முடியும்.",
      "A-ன் சேர்ப்பு அணி என்பது இணைக்காரணி அணியின் நிரை-நிரல் மாற்று அணி ஆகும்.",
      "கிராமரின் விதி நேரியல் சமன்பாட்டுத் தொகுப்புகளுக்கு அணிக்கோவை முறை தீர்வை அளிக்கிறது.",
      "லியோன்டிஃப் உள்ளீடு-வெளியீடு பகுப்பாய்வு ஒரு பொருளாதாரத்தில் உள்ள தொழில்களுக்கு இடையிலான சார்புநிலையை விளக்குகிறது."
    ],
    "simpleExplanationEn": "Matrices and determinants form the mathematical bedrock of modern business computing, financial accounting models, linear programming input tables, and macro-economic input-output planning.",
    "simpleExplanationTa": "அணிகளும் அணிக்கோவைகளும் வணிகக் கணக்கீடுகள், நிதி அமைப்புகள், நேரியல் திட்டமிடல் மற்றும் பொருளாதார உள்ளீடு-வெளியீடு திட்டமிடலுக்கு அடிப்படை அடித்தளமாக விளங்குகின்றன.",
    "formulaCheatSheet": [
      {
        "formula": "|A^T| = |A|",
        "note": "Determinant of transpose equals determinant of original matrix."
      },
      {
        "formula": "A * adj(A) = adj(A) * A = |A| * I",
        "note": "Fundamental adjoint-matrix relationship."
      },
      {
        "formula": "(AB)^(-1) = B^(-1) * A^(-1)",
        "note": "Reversal law for inverse of product."
      },
      {
        "formula": "X = (I - B)^(-1) * D",
        "note": "Leontief output equation with technological matrix B and demand D."
      }
    ]
  },
  "c11_bm_ch2": {
    "id": "sum_c11_bm_ch2",
    "chapterId": "c11_bm_ch2",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Partial fractions decompose rational expressions into simpler additive terms for integration and series.",
      "Permutations account for order (arrangements), while combinations ignore order (selections).",
      "Mathematical induction verifies propositions P(n) for all natural numbers in three logical steps.",
      "Binomial expansion of (x + a)^n contains exactly (n + 1) terms."
    ],
    "keyPointsTa": [
      "பகுதிப் பின்னங்கள் சிக்கலான விகிதமுறு கோவைகளை எளிய பின்னங்களாகப் பிரிக்கின்றன.",
      "வரிசை மாற்றங்கள் வரிசையைக் கருத்தில் கொள்கின்றன; சேர்வுகள் வரிசையைக் கருத்தில் கொள்வதில்லை.",
      "கணிதத் தொகுத்தறிதல் முறை அனைத்து இயல் எண்களுக்கும் கூற்றுகளை மூன்று படிகளில் நிரூபிக்கிறது.",
      "(x + a)^n ஈருறுப்பு விரிவில் சரியாக (n + 1) உறுப்புகள் உள்ளன."
    ],
    "simpleExplanationEn": "Algebra develops structural tools including partial fractions, combinatorial counting (permutations and combinations), inductive reasoning, and binomial expansions vital for business calculations and probability.",
    "simpleExplanationTa": "இயற்கணிதம் பகுதிப் பின்னங்கள், வரிசை மாற்றங்கள், சேர்வுகள், கணிதத் தொகுத்தறிதல் மற்றும் ஈருறுப்புத் தேற்றம் வழியே வணிகக் கணக்கீடுகளுக்குத் தேவையான வலிமையான அடித்தளத்தை அமைக்கிறது.",
    "formulaCheatSheet": [
      {
        "formula": "nPr = n! / (n - r)!",
        "note": "Permutations of n items taken r at a time"
      },
      {
        "formula": "nCr = n! / (r! * (n - r)!)",
        "note": "Combinations formula"
      },
      {
        "formula": "nC0 + nC1 + ... + nCn = 2^n",
        "note": "Sum of binomial coefficients"
      },
      {
        "formula": "T_(r+1) = nCr * x^(n-r) * a^r",
        "note": "General term of (x + a)^n"
      }
    ]
  },
  "c11_bm_ch3": {
    "id": "sum_c11_bm_ch3",
    "chapterId": "c11_bm_ch3",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Locus is the geometric path traced by a point moving under given algebraic conditions.",
      "Straight line equations translate linear cost and revenue functions into coordinate geometry.",
      "Homogeneous second-degree equation ax^2 + 2hxy + by^2 = 0 represents two lines passing through the origin.",
      "A circle standard form (x - h)^2 + (y - k)^2 = r^2 establishes boundary zones in business logistics."
    ],
    "keyPointsTa": [
      "நியமப்பாதை என்பது கொடுக்கப்பட்ட நிபந்தனைகளுக்கு உட்பட்டு நகரும் புள்ளியின் வடிவியல் பாதை ஆகும்.",
      "நேர்க்கோட்டுச் சமன்பாடுகள் செலவு மற்றும் வருவாய் சார்புகளை வடிவியல் தளத்தில் வரைபடமாக்குகின்றன.",
      "ax^2 + 2hxy + by^2 = 0 என்ற சமபடிச் சமன்பாடு ஆதி வழிச் செல்லும் இரு நேர்க்கோடுகளைக் குறிக்கும்.",
      "வட்டச் சமன்பாடு வணிக விநியோக எல்லைப் பகுதிகளைத் தீர்மானிக்க உதவுகிறது."
    ],
    "simpleExplanationEn": "Analytical geometry bridges pure algebra and plane geometry, providing quantitative models for straight lines, market boundary perimeters, pair of lines, and circular distribution radiuses.",
    "simpleExplanationTa": "பகுமுறை வடிவியல் இயற்கணிதத்தையும் வடிவியலையும் இணைத்து நேர்க்கோடுகள், சந்தை எல்லைகள் மற்றும் வட்ட விநியோகப் பகுதிகளை துல்லியமாகக் கணக்கிட உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "m = (y2 - y1) / (x2 - x1)",
        "note": "Slope through two points"
      },
      {
        "formula": "m1 * m2 = -1",
        "note": "Condition for perpendicular lines"
      },
      {
        "formula": "tan θ = |2√(h^2 - ab) / (a + b)|",
        "note": "Angle between pair of lines"
      },
      {
        "formula": "x*x1 + y*y1 = r^2",
        "note": "Tangent to circle x^2 + y^2 = r^2 at (x1, y1)"
      }
    ]
  },
  "c11_bm_ch4": {
    "id": "sum_c11_bm_ch4",
    "chapterId": "c11_bm_ch4",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Trigonometric functions model cyclical business trends, seasonal price oscillations, and periodic economic demand.",
      "Allied angles (90°±θ, 180°±θ, 360°±θ) simplify trigonometric values across all four Cartesian quadrants.",
      "Compound angle identities allow exact algebraic evaluation of non-standard degree measures.",
      "Inverse trigonometric functions resolve cyclical period angles from known ratio values."
    ],
    "keyPointsTa": [
      "முக்கோணவியல் சார்புகள் பருவகால விலை ஏற்ற இறக்கங்கள் மற்றும் பொருளாதார சுழற்சிகளை கணக்கிட உதவுகின்றன.",
      "தொடர்புடைய கோணங்கள் அனைத்து நான்கு கால்பகுதிகளிலும் முக்கோணவியல் மதிப்புகளை எளிதாகக் கணக்கிட உதவுகின்றன.",
      "கூட்டுக்கோண முற்றொருமைகள் குறிப்பிட்ட கோணங்களின் துல்லிய மதிப்புகளைப் பெற வழிவகுக்கின்றன.",
      "நேர்மாறு முக்கோணவியல் சார்புகள் விகிதங்களிலிருந்து கோண மதிப்புகளைக் கணக்கிடுகின்றன."
    ],
    "simpleExplanationEn": "Trigonometry establishes foundational identities, compound angles, transformation formulas, and inverse functions that model harmonic business cycles and prepare students for advanced calculus.",
    "simpleExplanationTa": "திரிகோணமிதி அடிப்படைக் கூட்டுக் கோணங்கள், மடங்குக் கோணங்கள் மற்றும் நேர்மாறு சார்புகள் மூலம் பருவகால சுழற்சிகளை மாதிரியாக்கவும் நுண்கணிதத்திற்குத் தயாராகவும் உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "sin^2 θ + cos^2 θ = 1",
        "note": "Pythagorean identity"
      },
      {
        "formula": "tan 2A = 2 tan A / (1 - tan^2 A)",
        "note": "Double angle tangent formula"
      },
      {
        "formula": "cos 2A = 2 cos^2 A - 1 = 1 - 2 sin^2 A",
        "note": "Cosine double angle variants"
      },
      {
        "formula": "sin C + sin D = 2 sin((C+D)/2) cos((C-D)/2)",
        "note": "Sum to product identity"
      }
    ]
  },
  "c11_bm_ch5": {
    "id": "sum_c11_bm_ch5",
    "chapterId": "c11_bm_ch5",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Differentiation measures instantaneous rate of change and provides economic marginal concepts.",
      "Product rule (uv)' = u'v + uv' and quotient rule (u/v)' = (u'v - uv') / v^2 allow differentiation of combined revenue/cost models.",
      "Elasticity of demand η_d indicates whether price increases will expand or reduce total firm revenue.",
      "Profit maximization requires two orders of conditions: first derivative zero (MR = MC) and second derivative negative."
    ],
    "keyPointsTa": [
      "வகையிடல் உடனடி மாறுதல் விகிதத்தைக் கணக்கிட்டு இறுதிநிலை வணிகக் கருத்துகளை உருவாக்குகிறது.",
      "பெருக்கல் மற்றும் வகுத்தல் விதிகள் கூட்டு வணிகச் சார்புகளை வகையிடப் பயன்படுகின்றன.",
      "தேவை நெகிழ்ச்சி விலை மாற்றங்கள் நிறுவனத்தின் மொத்த வருவாயை அதிகரிக்குமா அல்லது குறைக்குமா என்பதை காட்டுகிறது.",
      "லாப உச்சமாக்கலுக்கு இரு நிபந்தனைகள் தேவை: முதல் வகைக்கெழு பூச்சியம் (MR = MC) மற்றும் இரண்டாம் வகைக்கெழு எதிர்மறை."
    ],
    "simpleExplanationEn": "Differential calculus equips business analysts to compute marginal revenues, marginal costs, demand elasticities, and optimize output levels for maximum profitability.",
    "simpleExplanationTa": "வகை நுண்கணிதம் இறுதிநிலை வருவாய், இறுதிநிலைச் செலவு, தேவை நெகிழ்ச்சி மற்றும் அதிகபட்ச லாபத்திற்கான உகந்த உற்பத்தி அளவைக் கணக்கிட உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "d/dx (x^n) = n * x^(n-1)",
        "note": "Power rule of differentiation"
      },
      {
        "formula": "MC = dC / dx,  MR = dR / dx",
        "note": "Marginal functions"
      },
      {
        "formula": "η_d = - (p/x) * (dx/dp)",
        "note": "Price elasticity of demand"
      },
      {
        "formula": "MR = p * (1 - 1/η_d)",
        "note": "Relationship between MR, price, and elasticity"
      }
    ]
  },
  "c11_bm_ch6": {
    "id": "sum_c11_bm_ch6",
    "chapterId": "c11_bm_ch6",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Integration is anti-differentiation that reconstructs total functions from marginal rates.",
      "Fixed cost k represents overhead costs when zero units are produced (k = C(0)).",
      "Consumer's Surplus measures the total economic savings enjoyed by consumers at market price.",
      "Producer's Surplus quantifies the net gain received by suppliers above their minimum production costs."
    ],
    "keyPointsTa": [
      "தொகையிடல் என்பது வகைப்படுத்தலின் எதிர் செயல்முறையாகும்; இறுதிநிலை மதிப்புகளிலிருந்து மொத்த சார்புகளை மீளமைக்கிறது.",
      "நிலையான செலவு k என்பது பூச்சிய உற்பத்தியின் போது ஏற்படும் மாறாச் செலவாகும்.",
      "நுகர்வோர் உபரி சந்தை விலையில் வாங்குவதால் நுகர்வோருக்குக் கிடைக்கும் பொருளாதார சேமிப்பை அளவிடுகிறது.",
      "உற்பத்தியாளர் உபரி உற்பத்தியாளர்களுக்குக் கிடைக்கும் நிகர ஆதாயத்தை அளவிடுகிறது."
    ],
    "simpleExplanationEn": "Integral calculus reconstructs total cost and revenue curves from marginal functions and calculates Consumer's and Producer's Surpluses to quantify total market welfare in commercial economies.",
    "simpleExplanationTa": "தொகை நுண்கணிதம் இறுதிநிலைச் சார்புகளிலிருந்து மொத்தச் செலவு மற்றும் வருவாய் வளைவரைகளை மீட்டெடுத்து நுகர்வோர் மற்றும் உற்பத்தியாளர் உபரியைக் கணக்கிடப் பயன்படுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "∫ x^n dx = (x^(n+1))/(n+1) + c (n != -1)",
        "note": "Power rule of integration"
      },
      {
        "formula": "∫ (1/x) dx = log |x| + c",
        "note": "Logarithmic integral"
      },
      {
        "formula": "CS = ∫_0^(x0) f(x) dx - p0*x0",
        "note": "Consumer's Surplus"
      },
      {
        "formula": "PS = p0*x0 - ∫_0^(x0) g(x) dx",
        "note": "Producer's Surplus"
      }
    ]
  },
  "c11_bm_ch7": {
    "id": "sum_c11_bm_ch7",
    "chapterId": "c11_bm_ch7",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Time Value of Money (TVM) states that money received today is worth more than the same sum in the future.",
      "Annuity Immediate is paid at the end of each period, whereas Annuity Due is paid at the beginning.",
      "Equated Monthly Installment (EMI) amortizes consumer loans across fixed monthly payments balancing principal and interest.",
      "Perpetuity is an annuity that continues indefinitely (P = a / i)."
    ],
    "keyPointsTa": [
      "பணத்தின் கால மதிப்பு: இன்று கையில் உள்ள பணம் எதிர்காலத்தில் கிடைக்கும் அதே தொகையை விட அதிக மதிப்புடையது.",
      "சாதாரண தவணைப்பங்கீடு கால முடிவிலும், முன்கூட்டிய தவணைப்பங்கீடு காலத் தொடக்கத்திலும் செலுத்தப்படுகிறது.",
      "சம மாதாந்திர தவணை (EMI) அசல் மற்றும் வட்டியைப் பிரித்து குறிப்பிட்ட காலத்திற்குள் கடனைத் தீர்க்கிறது.",
      "முடிவிலா தவணைப்பங்கீடு என்பது கால வரம்பின்றி தொடர்ந்து வழங்கப்படும் தவணையாகும் (P = a / i)."
    ],
    "simpleExplanationEn": "Financial mathematics equips commerce students with time-value-of-money analytics, annuity models, compound accumulation, loan amortization schedules, and investment appraisal calculations.",
    "simpleExplanationTa": "நிதி கணிதம் பணத்தின் கால மதிப்பு, கூட்டுவட்டி, தவணைப்பங்கீட்டு மாதிரிகள், கடன் திருப்பிச் செலுத்துதல் மற்றும் முதலீட்டுத் திட்டமிடலை துல்லியமாக கணக்கிட உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "A = P * (1 + r/100)^n",
        "note": "Compound Amount"
      },
      {
        "formula": "r_eff = (1 + r/m)^m - 1",
        "note": "Effective rate of interest"
      },
      {
        "formula": "F = (a/i) * [(1+i)^n - 1]",
        "note": "Future Value of Annuity"
      },
      {
        "formula": "P = a / i",
        "note": "Present Value of Perpetuity"
      }
    ]
  },
  "c11_bm_ch8": {
    "id": "sum_c11_bm_ch8",
    "chapterId": "c11_bm_ch8",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Measures of central tendency (Mean, Median, Mode) locate the center of frequency distribution.",
      "Measures of dispersion (Range, Quartile Deviation, Standard Deviation) gauge data spread around the mean.",
      "Standard deviation is the absolute measure of dispersion, whereas CV is the relative dimensionless measure.",
      "Bayes' Theorem updates prior probabilities with experimental evidence to determine posterior probabilities."
    ],
    "keyPointsTa": [
      "மையப்போக்கு அளவைகள் (சராசரி, இடைநிலை, முகடு) தரவுகளின் மையத்தை சுட்டிக்காட்டுகின்றன.",
      "சிதறல் அளவைகள் (வீச்சு, கால்மான விலக்கம், திட்டவிலக்கம்) தரவுகள் சராசரியை விட்டு எவ்வளவு பரவியுள்ளன என்பதை அளவிடுகின்றன.",
      "திட்டவிலக்கம் தனி அளவையாகவும், மாறுபாட்டுக் கெழு (CV) ஒப்பீட்டு அளவையாகவும் உள்ளது.",
      "பேயீஸின் தேற்றம் புதிய சான்றுகளின் அடிப்படையில் முந்தைய நிகழ்தகவுகளை மாற்றி அமைக்கிறது."
    ],
    "simpleExplanationEn": "Descriptive statistics and probability theory provide the empirical methods needed to summarize operational data, measure process variability using Standard Deviation, and evaluate business risks with Bayes' theorem.",
    "simpleExplanationTa": "விவரிப்பு புள்ளியியல் மற்றும் நிகழ்தகவுக் கோட்பாடு வணிகத் தரவுகளை சுருக்கவும், திட்டவிலக்கம் மூலம் மாறுபாட்டை அளவிடவும், பேயீஸின் தேற்றம் மூலம் இடர்களை பகுப்பாய்வு செய்யவும் உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "Range = L - S",
        "note": "Difference between largest and smallest"
      },
      {
        "formula": "QD = (Q3 - Q1) / 2",
        "note": "Quartile Deviation"
      },
      {
        "formula": "CV = (σ / x̄) * 100",
        "note": "Coefficient of Variation for consistency"
      },
      {
        "formula": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "note": "Addition theorem of probability"
      }
    ]
  },
  "c11_bm_ch9": {
    "id": "sum_c11_bm_ch9",
    "chapterId": "c11_bm_ch9",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Correlation assesses association and co-movement, while regression predicts the value of dependent variable from an independent variable.",
      "Pearson's r is bounded between -1 and +1; r = 0 indicates no linear correlation.",
      "Regression line of Y on X is: (y - ȳ) = b_yx * (x - x̄).",
      "If r = ±1, the two regression lines coincide; if r = 0, they are perpendicular."
    ],
    "keyPointsTa": [
      "உடன்தொடர்பு இரு மாறிகளுக்கு இடையிலான இணைப்பை அளவிடுகிறது; தொடர்போக்கு ஒரு மாறியிலிருந்து மற்றொரு மாறியை முன்கணிக்கிறது.",
      "பியர்சனின் r மதிப்பு -1 முதல் +1 வரை மட்டுமே இருக்கும்; r = 0 எனில் நேரியல் தொடர்பில்லை.",
      "X-ன் மீது Y-ன் தொடர்போக்குக் கோடு: (y - ȳ) = b_yx * (x - x̄).",
      "r = ±1 எனில் இரு தொடர்போக்குக் கோடுகளும் ஒன்றிணையும்; r = 0 எனில் அவை ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்."
    ],
    "simpleExplanationEn": "Correlation quantifies the direction and intensity of linear relationships between market variables, while regression establishes predictive structural equations for sales forecasting and financial risk management.",
    "simpleExplanationTa": "உடன்தொடர்பு வணிக மாறிகளுக்கு இடையிலான உறவின் வலிமையை அளவிடவும், தொடர்போக்கு எதிர்கால விற்பனை மற்றும் வருவாயை முன்கணிக்கவும் உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "-1 <= r <= +1",
        "note": "Bounds of Pearson correlation"
      },
      {
        "formula": "ρ = 1 - [6 Σ d^2 / (n(n^2 - 1))]",
        "note": "Spearman rank correlation"
      },
      {
        "formula": "(y - ȳ) = b_yx (x - x̄)",
        "note": "Regression line of Y on X"
      },
      {
        "formula": "r = ± √(b_yx * b_xy)",
        "note": "Geometric mean property of regression"
      }
    ]
  },
  "c11_bm_ch10": {
    "id": "sum_c11_bm_ch10",
    "chapterId": "c11_bm_ch10",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Operations Research applies scientific and mathematical modeling to executive decision-making and resource allocation.",
      "Linear programming models maximize profits or minimize costs under strict operational constraints.",
      "Transportation models (NWCR, LCM, VAM) minimize total shipping costs across manufacturing plants and retail hubs.",
      "CPM network analysis identifies the critical path where delays directly delay overall project completion."
    ],
    "keyPointsTa": [
      "செயல்பாட்டு ஆராய்ச்சி நிர்வாக முடிவெடுத்தல் மற்றும் வள ஒதுக்கீட்டிற்கு கணித மாதிரிகளைப் பயன்படுத்துகிறது.",
      "நேரியல் திட்டமிடல் கட்டுப்பாடுகளுக்கு உட்பட்டு லாபத்தை உச்சமாக்க அல்லது செலவைக் குறைக்க உதவுகிறது.",
      "போக்குவரத்து மாதிரிகள் தொழிற்சாலைகளிலிருந்து விற்பனை மையங்களுக்கு பொருட்களை அனுப்பும் செலவைக் குறைக்கின்றன.",
      "CPM வலைப்பின்னல் பகுப்பாய்வு எந்த நடவடிக்கைகளில் தாமதம் ஏற்பட்டால் முழுத் திட்டமும் தாமதமாகும் என்பதை அடையாளம் காட்டுகிறது."
    ],
    "simpleExplanationEn": "Operations Research delivers algorithmic tools—linear programming, transportation optimization, assignment techniques, and critical path network scheduling—to engineer maximum operational efficiency across industrial enterprises.",
    "simpleExplanationTa": "செயல்பாட்டு ஆராய்ச்சி நேரியல் திட்டமிடல், போக்குவரத்து மாதிரிகள் மற்றும் திட்ட மேலாண்மை (CPM) வழியே தொழில் நிறுவனங்களில் மிக உயர்ந்த இயக்கத் திறனை உருவாக்குகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "Z = c1*x1 + c2*x2",
        "note": "Objective function of LPP"
      },
      {
        "formula": "Allocations = m + n - 1",
        "note": "Non-degeneracy condition in transportation"
      },
      {
        "formula": "Critical Path = Longest path",
        "note": "Zero float / slack sequence in project network"
      },
      {
        "formula": "Total Float = LST - EST",
        "note": "Permissible delay on project activities"
      }
    ]
  }
};

export const CLASS_11_BMATH_QUIZZES: Record<string, ChapterQuiz> = {
  "c11_bm_ch1": {
    "id": "quiz_c11_bm_ch1",
    "chapterId": "c11_bm_ch1",
    "titleEn": "Board Mastery Quiz: Chapter 1: Matrices and Determinants",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 1: அணிகளும் அணிக்கோவைகளும்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch1_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If |A| = 0 for a square matrix A, then the matrix is called:",
        "questionTa": "ஒரு சதுர அணி A-க்கு |A| = 0 எனில், அவ்வணி எவ்வாறு அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Singular matrix",
          "Non-singular matrix",
          "Identity matrix",
          "Symmetric matrix"
        ],
        "optionsTa": [
          "பூச்சியக் கோவை அணி",
          "பூச்சியமற்ற கோவை அணி",
          "அலகு அணி",
          "சமச்சீர் அணி"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "A square matrix with determinant zero has no inverse and is defined as a singular matrix.",
        "explanationTa": "அணிக்கோவை மதிப்பு பூச்சியமாக இருக்கும் அணி பூச்சியக் கோவை அணி (Singular Matrix) எனப்படும்."
      },
      {
        "id": "q_c11_bm_ch1_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If A is a 2x2 matrix and |A| = 4, then |2A| is equal to:",
        "questionTa": "A என்பது 2x2 வரிசையுடைய அணி மற்றும் |A| = 4 எனில், |2A|-ன் மதிப்பு யாது?",
        "optionsEn": [
          "16",
          "8",
          "4",
          "32"
        ],
        "optionsTa": [
          "16",
          "8",
          "4",
          "32"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "For an n x n matrix, |kA| = k^n * |A|. Here n = 2, so |2A| = 2^2 * 4 = 4 * 4 = 16.",
        "explanationTa": "n வரிசையுடைய அணிக்கு |kA| = k^n * |A|. இங்கு n = 2, எனவே |2A| = 2^2 * 4 = 16."
      },
      {
        "id": "q_c11_bm_ch1_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "Cramer's rule is applicable to solve linear equations only when:",
        "questionTa": "நேரியல் சமன்பாடுகளைத் தீர்க்க கிராமரின் விதியைப் பயன்படுத்த எந்த நிபந்தனை பூர்த்தியாக வேண்டும்?",
        "optionsEn": [
          "Δ != 0",
          "Δ = 0",
          "Δ < 0",
          "Δ = 1"
        ],
        "optionsTa": [
          "Δ != 0",
          "Δ = 0",
          "Δ < 0",
          "Δ = 1"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Cramer's rule divides each variable determinant by Δ, requiring Δ != 0 to prevent division by zero.",
        "explanationTa": "கிராமரின் விதியில் மாறிகளின் மதிப்புகளைப் பெற Δ-ஆல் வகுக்கப்படுவதால் Δ != 0 ஆக இருக்க வேண்டும்."
      },
      {
        "id": "q_c11_bm_ch1_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The Hawkins-Simon conditions are applied to test the viability of:",
        "questionTa": "ஹாவ்கின்ஸ்-சைமன் நிபந்தனைகள் எதன் சாத்தியத்தன்மையை சோதிக்கப் பயன்படுகின்றன?",
        "optionsEn": [
          "Input-Output model",
          "Linear Programming",
          "Correlation analysis",
          "Annuity calculations"
        ],
        "optionsTa": [
          "உள்ளீடு-வெளியீடு மாதிரி",
          "நேரியல் திட்டமிடல்",
          "உடன்தொடர்பு பகுப்பாய்வு",
          "தவணைப் பங்கீடு"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Hawkins-Simon conditions determine whether an economic sector can produce positive net output in Leontief models.",
        "explanationTa": "லியோன்டிஃப் உள்ளீடு-வெளியீடு மாதிரியில் உற்பத்தி சாத்தியத்தன்மையை உறுதி செய்ய இந்நிபந்தனைகள் உதவுகின்றன."
      }
    ]
  },
  "c11_bm_ch2": {
    "id": "quiz_c11_bm_ch2",
    "chapterId": "c11_bm_ch2",
    "titleEn": "Board Mastery Quiz: Chapter 2: Algebra",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 2: இயற்கணிதம்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch2_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The value of 8C5 is equal to:",
        "questionTa": "8C5-ன் மதிப்பு யாது?",
        "optionsEn": [
          "56",
          "120",
          "28",
          "336"
        ],
        "optionsTa": [
          "56",
          "120",
          "28",
          "336"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "8C5 = 8C3 = (8 * 7 * 6) / (3 * 2 * 1) = 56.",
        "explanationTa": "8C5 = 8C(8-5) = 8C3 = (8 * 7 * 6) / (3 * 2 * 1) = 56."
      },
      {
        "id": "q_c11_bm_ch2_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The total number of terms in the expansion of (x + a)^12 is:",
        "questionTa": "(x + a)^12 என்ற ஈருறுப்பு விரிவில் உள்ள மொத்த உறுப்புகளின் எண்ணிக்கை:",
        "optionsEn": [
          "13",
          "12",
          "11",
          "24"
        ],
        "optionsTa": [
          "13",
          "12",
          "11",
          "24"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "The expansion of (x + a)^n contains (n + 1) terms. For n = 12, there are 12 + 1 = 13 terms.",
        "explanationTa": "(x + a)^n விரிவில் (n + 1) உறுப்புகள் இருக்கும். எனவே 12 + 1 = 13 உறுப்புகள்."
      },
      {
        "id": "q_c11_bm_ch2_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If nPr = 720 and nCr = 120, then the value of r is:",
        "questionTa": "nPr = 720 மற்றும் nCr = 120 எனில், r-ன் மதிப்பு யாது?",
        "optionsEn": [
          "3",
          "4",
          "5",
          "6"
        ],
        "optionsTa": [
          "3",
          "4",
          "5",
          "6"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "r! = nPr / nCr = 720 / 120 = 6. Since 3! = 6, r = 3.",
        "explanationTa": "r! = nPr / nCr = 720 / 120 = 6 = 3! எனவே r = 3."
      },
      {
        "id": "q_c11_bm_ch2_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The number of diagonals that can be drawn in an octagon (8-sided polygon) is:",
        "questionTa": "எண்கோணத்தில் (8 பக்கங்கள் கொண்ட பலகோணம்) வரையக்கூடிய மூலைவிட்டங்களின் எண்ணிக்கை:",
        "optionsEn": [
          "20",
          "28",
          "16",
          "24"
        ],
        "optionsTa": [
          "20",
          "28",
          "16",
          "24"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Number of diagonals in an n-sided polygon = nC2 - n = 8C2 - 8 = 28 - 8 = 20.",
        "explanationTa": "மூலைவிட்டங்களின் எண்ணிக்கை = nC2 - n = 8C2 - 8 = 28 - 8 = 20."
      }
    ]
  },
  "c11_bm_ch3": {
    "id": "quiz_c11_bm_ch3",
    "chapterId": "c11_bm_ch3",
    "titleEn": "Board Mastery Quiz: Chapter 3: Analytical Geometry",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 3: பகுமுறை வடிவியல்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch3_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If two lines 2x + 3y + 4 = 0 and 4x + ky + 7 = 0 are parallel, then the value of k is:",
        "questionTa": "2x + 3y + 4 = 0 மற்றும் 4x + ky + 7 = 0 என்ற இரு கோடுகள் இணையானவை எனில், k-ன் மதிப்பு:",
        "optionsEn": [
          "6",
          "3",
          "2",
          "-6"
        ],
        "optionsTa": [
          "6",
          "3",
          "2",
          "-6"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "For parallel lines, a1/a2 = b1/b2 => 2/4 = 3/k => 1/2 = 3/k => k = 6.",
        "explanationTa": "இணைக்கோடுகளுக்கு a1/a2 = b1/b2 => 2/4 = 3/k => k = 6."
      },
      {
        "id": "q_c11_bm_ch3_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The radius of the circle x^2 + y^2 = 25 is:",
        "questionTa": "x^2 + y^2 = 25 என்ற வட்டத்தின் ஆரம் யாது?",
        "optionsEn": [
          "5",
          "25",
          "10",
          "√5"
        ],
        "optionsTa": [
          "5",
          "25",
          "10",
          "√5"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Comparing with x^2 + y^2 = r^2 gives r^2 = 25, hence radius r = 5.",
        "explanationTa": "x^2 + y^2 = r^2 உடன் ஒப்பிட r^2 = 25, எனவே ஆரம் r = 5."
      },
      {
        "id": "q_c11_bm_ch3_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The lines represented by ax^2 + 2hxy + by^2 = 0 are perpendicular if:",
        "questionTa": "ax^2 + 2hxy + by^2 = 0 என்ற இரட்டை நேர்க்கோடுகள் செங்குத்தாக அமைய நிபந்தனை:",
        "optionsEn": [
          "a + b = 0",
          "h^2 = ab",
          "a - b = 0",
          "h = 0"
        ],
        "optionsTa": [
          "a + b = 0",
          "h^2 = ab",
          "a - b = 0",
          "h = 0"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "In the pair of straight lines, lines are perpendicular (θ = 90°) when denominator a + b = 0.",
        "explanationTa": "செங்குத்தான கோடுகளுக்கு cos θ = 0, அதாவது a + b = 0 ஆகும்."
      },
      {
        "id": "q_c11_bm_ch3_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The perpendicular distance from the origin (0, 0) to 3x + 4y - 15 = 0 is:",
        "questionTa": "ஆதிப்புள்ளி (0, 0)-விலிருந்து 3x + 4y - 15 = 0 என்ற கோட்டிற்கான செங்குத்துத் தொலைவு:",
        "optionsEn": [
          "3",
          "5",
          "15",
          "4"
        ],
        "optionsTa": [
          "3",
          "5",
          "15",
          "4"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "d = |3(0) + 4(0) - 15| / √(3^2 + 4^2) = 15 / √25 = 15 / 5 = 3.",
        "explanationTa": "d = |-15| / √(9 + 16) = 15 / 5 = 3 அலகுகள்."
      }
    ]
  },
  "c11_bm_ch4": {
    "id": "quiz_c11_bm_ch4",
    "chapterId": "c11_bm_ch4",
    "titleEn": "Board Mastery Quiz: Chapter 4: Trigonometry",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 4: திரிகோணமிதி",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch4_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The value of cos(-60°) is:",
        "questionTa": "cos(-60°)-ன் மதிப்பு யாது?",
        "optionsEn": [
          "1/2",
          "-1/2",
          "√3/2",
          "-√3/2"
        ],
        "optionsTa": [
          "1/2",
          "-1/2",
          "√3/2",
          "-√3/2"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Cosine is an even function: cos(-θ) = cos θ. Therefore, cos(-60°) = cos 60° = 1/2.",
        "explanationTa": "கொசைன் ஓர் இரட்டைச் சார்பு: cos(-θ) = cos θ. எனவே cos(-60°) = cos 60° = 1/2."
      },
      {
        "id": "q_c11_bm_ch4_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The value of sin 2A when tan A = 1/2 is:",
        "questionTa": "tan A = 1/2 எனில், sin 2A-ன் மதிப்பு யாது?",
        "optionsEn": [
          "4/5",
          "3/5",
          "1/2",
          "2/5"
        ],
        "optionsTa": [
          "4/5",
          "3/5",
          "1/2",
          "2/5"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "sin 2A = 2 tan A / (1 + tan^2 A) = 2(1/2) / (1 + 1/4) = 1 / (5/4) = 4/5.",
        "explanationTa": "sin 2A = 2 tan A / (1 + tan^2 A) = 1 / (5/4) = 4/5."
      },
      {
        "id": "q_c11_bm_ch4_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The principal value of sin^(-1)(1/2) is:",
        "questionTa": "sin^(-1)(1/2)-ன் முதன்மை மதிப்பு யாது?",
        "optionsEn": [
          "π/6 (30°)",
          "π/3 (60°)",
          "π/4 (45°)",
          "π/2 (90°)"
        ],
        "optionsTa": [
          "π/6 (30°)",
          "π/3 (60°)",
          "π/4 (45°)",
          "π/2 (90°)"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Since sin(π/6) = 1/2 and π/6 lies in the principal branch [-π/2, π/2], the value is π/6.",
        "explanationTa": "sin(π/6) = 1/2 மற்றும் π/6 என்பது [-π/2, π/2] இடைவெளியில் உள்ளதால் முதன்மை மதிப்பு π/6."
      },
      {
        "id": "q_c11_bm_ch4_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "In which quadrant are both sine and cosine negative?",
        "questionTa": "சைன் மற்றும் கொசைன் இரண்டும் எதிர்மறையாக இருக்கும் கால்பகுதி எது?",
        "optionsEn": [
          "Quadrant III",
          "Quadrant I",
          "Quadrant II",
          "Quadrant IV"
        ],
        "optionsTa": [
          "மூன்றாம் கால்பகுதி",
          "முதல் கால்பகுதி",
          "இரண்டாம் கால்பகுதி",
          "நான்காம் கால்பகுதி"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "In Quadrant III (180° to 270°), only tangent and cotangent are positive; both sine and cosine are negative.",
        "explanationTa": "மூன்றாம் கால்பகுதியில் (180° முதல் 270°) டேன் மட்டுமே நேர்மறை; சைன் மற்றும் கொசைன் இரண்டும் எதிர்மறை."
      }
    ]
  },
  "c11_bm_ch5": {
    "id": "quiz_c11_bm_ch5",
    "chapterId": "c11_bm_ch5",
    "titleEn": "Board Mastery Quiz: Chapter 5: Differential Calculus",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 5: வகை நுண்கணிதம்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch5_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If total cost C = 100 + 5x + x^2, the marginal cost when x = 10 is:",
        "questionTa": "மொத்தச் செலவு C = 100 + 5x + x^2 எனில், x = 10-ல் இறுதிநிலைச் செலவு யாது?",
        "optionsEn": [
          "25",
          "30",
          "15",
          "125"
        ],
        "optionsTa": [
          "25",
          "30",
          "15",
          "125"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "MC = dC/dx = 5 + 2x. At x = 10, MC = 5 + 2(10) = 25.",
        "explanationTa": "MC = dC/dx = 5 + 2x. x = 10 எனில், MC = 5 + 20 = 25."
      },
      {
        "id": "q_c11_bm_ch5_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "At the point of profit maximization of a firm, which condition holds true?",
        "questionTa": "ஒரு நிறுவனத்தின் லாப உச்சமாக்கல் புள்ளியில் எந்த நிபந்தனை உண்மையாகிறது?",
        "optionsEn": [
          "MR = MC",
          "MR > MC",
          "MR < MC",
          "AC = MC"
        ],
        "optionsTa": [
          "MR = MC",
          "MR > MC",
          "MR < MC",
          "AC = MC"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Profit is maximized when marginal revenue equals marginal cost (MR = MC) and d^2 P / dx^2 < 0.",
        "explanationTa": "இறுதிநிலை வருவாய் இறுதிநிலைச் செலவுக்குச் சமமாக (MR = MC) இருக்கும்போது லாபம் உச்சமடைகிறது."
      },
      {
        "id": "q_c11_bm_ch5_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "When the elasticity of demand |η_d| > 1, the demand is said to be:",
        "questionTa": "தேவை நெகிழ்ச்சி |η_d| > 1 ஆக இருக்கும்போது தேவை எவ்வாறு அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Elastic",
          "Inelastic",
          "Unit elastic",
          "Perfectively inelastic"
        ],
        "optionsTa": [
          "நெகிழ்ச்சியுடையது",
          "நெகிழ்ச்சியற்றது",
          "ஒன்றுக்குச் சமமான நெகிழ்ச்சி",
          "முழு நெகிழ்ச்சியற்றது"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "When |η_d| > 1, percentage change in quantity demanded exceeds percentage change in price, denoting elastic demand.",
        "explanationTa": "|η_d| > 1 எனில் விலையை விட தேவை அதிக விகிதத்தில் மாறுவதால் அது நெகிழ்ச்சியுடைய தேவை எனப்படும்."
      },
      {
        "id": "q_c11_bm_ch5_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The derivative of e^(3x) with respect to x is:",
        "questionTa": "e^(3x)-ஐ x-ஐப் பொறுத்து வகையிடக் கிடைப்பது:",
        "optionsEn": [
          "3 e^(3x)",
          "e^(3x)",
          "(1/3) e^(3x)",
          "3x e^(3x)"
        ],
        "optionsTa": [
          "3 e^(3x)",
          "e^(3x)",
          "(1/3) e^(3x)",
          "3x e^(3x)"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "By chain rule, d/dx (e^(ax)) = a * e^(ax). Here a = 3, so derivative is 3 e^(3x).",
        "explanationTa": "சங்கிலி விதிப்படி d/dx (e^(3x)) = 3 e^(3x)."
      }
    ]
  },
  "c11_bm_ch6": {
    "id": "quiz_c11_bm_ch6",
    "chapterId": "c11_bm_ch6",
    "titleEn": "Board Mastery Quiz: Chapter 6: Integral Calculus",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 6: தொகை நுண்கணிதம்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch6_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If marginal cost is MC = 4x + 3 and fixed cost is 50, then total cost C(x) is:",
        "questionTa": "இறுதிநிலைச் செலவு MC = 4x + 3 மற்றும் நிலையான செலவு 50 எனில், மொத்தச் செலவு C(x):",
        "optionsEn": [
          "2x^2 + 3x + 50",
          "4x^2 + 3x + 50",
          "2x^2 + 3x",
          "4x^2 + 50"
        ],
        "optionsTa": [
          "2x^2 + 3x + 50",
          "4x^2 + 3x + 50",
          "2x^2 + 3x",
          "4x^2 + 50"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "C(x) = ∫ (4x + 3) dx + k = 2x^2 + 3x + 50.",
        "explanationTa": "C(x) = ∫ (4x + 3) dx + k = 2x^2 + 3x + 50."
      },
      {
        "id": "q_c11_bm_ch6_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "Consumer's Surplus represents:",
        "questionTa": "நுகர்வோர் உபரி என்பது எதைக் குறிக்கிறது?",
        "optionsEn": [
          "What consumers are willing to pay minus what they actually pay",
          "What producers receive minus production cost",
          "Total revenue of the firm",
          "Fixed cost minus variable cost"
        ],
        "optionsTa": [
          "நுகர்வோர் கொடுக்க விரும்பும் தொகைக்கும் உண்மையில் கொடுக்கும் தொகைக்கும் உள்ள வேறுபாடு",
          "உற்பத்தியாளர் பெறும் தொகைக்கும் உற்பத்திச் செலவிற்கும் உள்ள வேறுபாடு",
          "நிறுவனத்தின் மொத்த வருவாய்",
          "நிலையான செலவுக்கும் மாறும் செலவுக்கும் உள்ள வேறுபாடு"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Consumer surplus is the difference between total utility (willingness to pay) and actual market expenditure.",
        "explanationTa": "நுகர்வோர் கொடுக்கத் தயாராக இருந்த தொகைக்கும் சந்தை விலைக்கும் உள்ள லாபகரமான வித்தியாசமே நுகர்வோர் உபரி ஆகும்."
      },
      {
        "id": "q_c11_bm_ch6_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The value of definite integral ∫_1^3 2x dx is:",
        "questionTa": "வரையறுத்த தொகையீடு ∫_1^3 2x dx-ன் மதிப்பு யாது?",
        "optionsEn": [
          "8",
          "9",
          "4",
          "6"
        ],
        "optionsTa": [
          "8",
          "9",
          "4",
          "6"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "∫ 2x dx = [x^2]_1^3 = 3^2 - 1^2 = 9 - 1 = 8.",
        "explanationTa": "∫ 2x dx = [x^2]_1^3 = 9 - 1 = 8."
      },
      {
        "id": "q_c11_bm_ch6_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "In integration by parts formula ∫ u dv = uv - ∫ v du, the order of choosing u follows:",
        "questionTa": "பகுதிவாரியாகத் தொகையிடும் சூத்திரத்தில் u-ஐத் தேர்வு செய்யப் பயன்படும் விதி:",
        "optionsEn": [
          "ILATE rule",
          "BODMAS rule",
          "Cramer's rule",
          "Simpson's rule"
        ],
        "optionsTa": [
          "ILATE விதி",
          "BODMAS விதி",
          "கிராமரின் விதி",
          "சிம்ப்சன் விதி"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "ILATE stands for Inverse, Logarithmic, Algebraic, Trigonometric, and Exponential functions.",
        "explanationTa": "ILATE என்பது நேர்மாறு, மடக்கை, இயற்கணிதம், முக்கோணவியல் மற்றும் அடுக்குக்குறி சார்புகளின் முன்னுரிமை வரிசையாகும்."
      }
    ]
  },
  "c11_bm_ch7": {
    "id": "quiz_c11_bm_ch7",
    "chapterId": "c11_bm_ch7",
    "titleEn": "Board Mastery Quiz: Chapter 7: Financial Mathematics",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 7: நிதி கணிதம்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch7_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The present value of a perpetuity of Rs. 600 per year at 10% per annum interest is:",
        "questionTa": "ஆண்டுக்கு 10% வட்டி வீதத்தில் ஆண்டுதோறும் ரூ. 600 தரும் முடிவிலாத் தவணையின் தற்போதைய மதிப்பு:",
        "optionsEn": [
          "Rs. 6,000",
          "Rs. 60,000",
          "Rs. 600",
          "Rs. 1,000"
        ],
        "optionsTa": [
          "ரூ. 6,000",
          "ரூ. 60,000",
          "ரூ. 600",
          "ரூ. 1,000"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Present value of perpetuity P = a / i = 600 / 0.10 = Rs. 6,000.",
        "explanationTa": "முடிவிலாத் தவணையின் தற்போதைய மதிப்பு P = a / i = 600 / 0.10 = ரூ. 6,000."
      },
      {
        "id": "q_c11_bm_ch7_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If an annuity payment is made at the beginning of each period, it is termed:",
        "questionTa": "ஒவ்வொரு காலத்தின் தொடக்கத்திலேயே செலுத்தப்படும் தவணைப்பங்கீடு எவ்வாறு அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Annuity Due",
          "Ordinary Annuity",
          "Perpetuity",
          "Deferred Annuity"
        ],
        "optionsTa": [
          "முன்கூட்டிய தவணைப்பங்கீடு (Annuity Due)",
          "சாதாரண தவணைப்பங்கீடு",
          "முடிவிலாத் தவணை",
          "தள்ளிப்போடப்பட்ட தவணை"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Payments made at the beginning of each payment interval constitute an Annuity Due.",
        "explanationTa": "ஒவ்வொரு தவணைக் காலத்தின் தொடக்கத்திலேயே செலுத்தப்படும் போது அது முன்கூட்டிய தவணைப்பங்கீடு ஆகும்."
      },
      {
        "id": "q_c11_bm_ch7_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The difference between Compound Interest and Simple Interest on Rs. P for 2 years at r% p.a. is:",
        "questionTa": "ரூ. P அசலுக்கு 2 ஆண்டுகளில் r% வட்டி வீதத்தில் கூட்டுவட்டிக்கும் தனிவட்டிக்கும் உள்ள வித்தியாசம்:",
        "optionsEn": [
          "P * (r/100)^2",
          "P * (r/100)",
          "2P * (r/100)",
          "P * (r/200)^2"
        ],
        "optionsTa": [
          "P * (r/100)^2",
          "P * (r/100)",
          "2P * (r/100)",
          "P * (r/200)^2"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "CI - SI for 2 years = P * (r/100)^2.",
        "explanationTa": "2 ஆண்டுகளுக்கான CI - SI வித்தியாசம் = P * (r/100)^2 ஆகும்."
      },
      {
        "id": "q_c11_bm_ch7_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "A sinking fund is primarily created for the purpose of:",
        "questionTa": "கடன் தீர்வு நிதி (Sinking Fund) எதற்காக உருவாக்கப்படுகிறது?",
        "optionsEn": [
          "Repaying a future liability or replacing assets",
          "Day-to-day office expenses",
          "Paying executive salaries",
          "Speculative trading"
        ],
        "optionsTa": [
          "எதிர்காலக் கடனை அடைக்க அல்லது தேய்மான சொத்துகளை மாற்ற",
          "அன்றாட அலுவலகச் செலவுகளுக்கு",
          "ஊழியர்களின் ஊதியத்திற்கு",
          "ஊக வணிகத்திற்கு"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "A sinking fund accumulates periodic amounts with interest to extinguish a long-term debt or replace depreciated capital assets.",
        "explanationTa": "எதிர்காலத்தில் முதிர்ச்சியடையும் பெரிய கடனைத் தீர்க்க அல்லது புதிய இயந்திரங்களை வாங்க சேமிக்கப்படும் நிதியாகும்."
      }
    ]
  },
  "c11_bm_ch8": {
    "id": "quiz_c11_bm_ch8",
    "chapterId": "c11_bm_ch8",
    "titleEn": "Board Mastery Quiz: Chapter 8: Descriptive Statistics and Probability",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 8: விவரிப்பு புள்ளியியல் மற்றும் நிகழ்தகவு",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch8_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The measure of dispersion which is independent of units of measurement is:",
        "questionTa": "அளவீட்டு அலகுகளைச் சாராத சிதறல் அளவை எது?",
        "optionsEn": [
          "Coefficient of Variation",
          "Standard Deviation",
          "Range",
          "Quartile Deviation"
        ],
        "optionsTa": [
          "மாறுபாட்டுக் கெழு (CV)",
          "திட்டவிலக்கம்",
          "வீச்சு",
          "கால்மான விலக்கம்"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Coefficient of variation (CV = σ/x̄ * 100) is a pure percentage ratio independent of measurement units.",
        "explanationTa": "மாறுபாட்டுக் கெழு என்பது அலகுகளற்ற ஒரு சதவீத ஒப்பீட்டு அளவையாகும்."
      },
      {
        "id": "q_c11_bm_ch8_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If the variance of a dataset is 64, then its standard deviation is:",
        "questionTa": "ஒரு தரவின் மாறுபாட்டளவை (variance) 64 எனில், அதன் திட்டவிலக்கம்:",
        "optionsEn": [
          "8",
          "64",
          "4",
          "16"
        ],
        "optionsTa": [
          "8",
          "64",
          "4",
          "16"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Standard Deviation σ = √Variance = √64 = 8.",
        "explanationTa": "திட்டவிலக்கம் σ = √மாறுபாட்டளவை = √64 = 8."
      },
      {
        "id": "q_c11_bm_ch8_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If P(A) = 0.4, P(B) = 0.5 and P(A ∩ B) = 0.2, then P(A ∪ B) is:",
        "questionTa": "P(A) = 0.4, P(B) = 0.5 மற்றும் P(A ∩ B) = 0.2 எனில், P(A ∪ B)-ன் மதிப்பு:",
        "optionsEn": [
          "0.7",
          "0.9",
          "0.3",
          "0.6"
        ],
        "optionsTa": [
          "0.7",
          "0.9",
          "0.3",
          "0.6"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.4 + 0.5 - 0.2 = 0.7.",
        "explanationTa": "P(A ∪ B) = 0.4 + 0.5 - 0.2 = 0.7."
      },
      {
        "id": "q_c11_bm_ch8_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "Bayes' theorem is used to compute:",
        "questionTa": "பேயீஸின் தேற்றம் எதைக் கணக்கிடப் பயன்படுகிறது?",
        "optionsEn": [
          "Posterior probability",
          "Prior probability only",
          "Joint frequency",
          "Arithmetic mean"
        ],
        "optionsTa": [
          "பின்நிகழ்வு நிகழ்தகவு (Posterior probability)",
          "முந்தைய நிகழ்தகவு மட்டும்",
          "இணைந்த அலைவெண்",
          "கூட்டுச் சராசரி"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Bayes' theorem updates prior probabilities using conditional information to calculate posterior probabilities.",
        "explanationTa": "நிபந்தனைத் தகவல்களைப் பயன்படுத்தி முந்தைய நிகழ்தகவை திருத்தி பின்நிகழ்வு நிகழ்தகவைக் கணக்கிடப் பயன்படுகிறது."
      }
    ]
  },
  "c11_bm_ch9": {
    "id": "quiz_c11_bm_ch9",
    "chapterId": "c11_bm_ch9",
    "titleEn": "Board Mastery Quiz: Chapter 9: Correlation and Regression Analysis",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 9: உடன்தொடர்பு மற்றும் தொடர்போக்கு பகுப்பாய்வு",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch9_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If r = 0 between two variables X and Y, it means that:",
        "questionTa": "X மற்றும் Y மாறிகளுக்கு இடையே r = 0 எனில் அதன் பொருள்:",
        "optionsEn": [
          "There is no linear correlation",
          "There is a perfect relationship",
          "Variables are identical",
          "Y is inversely proportional to X"
        ],
        "optionsTa": [
          "நேரியல் உடன்தொடர்பு இல்லை",
          "முழுமையான தொடர்பு உள்ளது",
          "மாறிகள் ஒன்றே",
          "Y என்பது X-க்கு எதிர்விகிதத்தில் உள்ளது"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "r = 0 implies absence of any linear relationship between the two variables.",
        "explanationTa": "r = 0 என்பது இரு மாறிகளுக்கு இடையே நேரியல் தொடர்பு எதுவும் இல்லை என்பதைக் குறிக்கிறது."
      },
      {
        "id": "q_c11_bm_ch9_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The two regression lines intersect at the point:",
        "questionTa": "இரு தொடர்போக்குக் கோடுகளும் வெட்டும் புள்ளி எது?",
        "optionsEn": [
          "(x̄, ȳ)",
          "(0, 0)",
          "(σx, σy)",
          "(1, 1)"
        ],
        "optionsTa": [
          "(x̄, ȳ)",
          "(0, 0)",
          "(σx, σy)",
          "(1, 1)"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Both regression lines pass through the respective arithmetic means of the variables, intersecting at (x̄, ȳ).",
        "explanationTa": "இரு தொடர்போக்குக் கோடுகளும் சராசரிப் புள்ளியான (x̄, ȳ) வழியாகச் செல்கின்றன."
      },
      {
        "id": "q_c11_bm_ch9_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "If b_yx = -0.9 and b_xy = -0.4, the correlation coefficient r is:",
        "questionTa": "b_yx = -0.9 மற்றும் b_xy = -0.4 எனில், உடன்தொடர்புக் கெழு r-ன் மதிப்பு:",
        "optionsEn": [
          "-0.6",
          "+0.6",
          "-0.36",
          "+0.36"
        ],
        "optionsTa": [
          "-0.6",
          "+0.6",
          "-0.36",
          "+0.36"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "r = - √(b_yx * b_xy) = - √((-0.9) * (-0.4)) = - √0.36 = -0.6 (sign must match regression coefficients).",
        "explanationTa": "r = - √(0.9 * 0.4) = - √0.36 = -0.6 (கெழுக்களின் அதே எதிர்மறைக் குறியீடு)."
      },
      {
        "id": "q_c11_bm_ch9_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "When the two regression lines are perpendicular to each other, the correlation coefficient r is:",
        "questionTa": "இரு தொடர்போக்குக் கோடுகளும் ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்போது r-ன் மதிப்பு:",
        "optionsEn": [
          "0",
          "1",
          "-1",
          "0.5"
        ],
        "optionsTa": [
          "0",
          "1",
          "-1",
          "0.5"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "When r = 0, tan θ = ∞ => θ = 90°, meaning the lines are perpendicular.",
        "explanationTa": "r = 0 ஆக இருக்கும்போது தொடர்போக்குக் கோடுகள் 90° கோணத்தில் செங்குத்தாக அமையும்."
      }
    ]
  },
  "c11_bm_ch10": {
    "id": "quiz_c11_bm_ch10",
    "chapterId": "c11_bm_ch10",
    "titleEn": "Board Mastery Quiz: Chapter 10: Operations Research",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: அத்தியாயம் 10: செயல்பாட்டு ஆராய்ச்சி",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c11_bm_ch10_1",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "In a linear programming problem, the optimal value of the objective function is always found at:",
        "questionTa": "நேரியல் திட்டமிடல் கணக்கில் குறிக்கோள் சார்பின் உகந்த மதிப்பு எப்போதும் எங்கு அமையும்?",
        "optionsEn": [
          "A corner point of the feasible region",
          "The exact center of the region",
          "Outside the feasible region",
          "On the horizontal axis only"
        ],
        "optionsTa": [
          "சாத்தியப் பகுதியின் ஒரு முனைப்புள்ளியில்",
          "பகுதியின் துல்லிய மையத்தில்",
          "சாத்தியப் பகுதிக்கு வெளியே",
          "கிடைமட்ட அச்சில் மட்டும்"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "By the fundamental theorem of linear programming, optimal solutions occur at extreme corner vertices of the convex polygon.",
        "explanationTa": "நேரியல் திட்டமிடலின் அடிப்படைத் தேற்றப்படி உகந்த தீர்வு எப்போதுமே பலகோண முனைப்புள்ளியிலேயே அமையும்."
      },
      {
        "id": "q_c11_bm_ch10_2",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "For an initial basic feasible solution of an m x n transportation problem to be non-degenerate, the number of allocations must be:",
        "questionTa": "m x n போக்குவரத்துக் கணக்கில் தீர்வு சிதைவடையாமல் இருக்க தேவையான ஒதுக்கீடுகளின் எண்ணிக்கை:",
        "optionsEn": [
          "m + n - 1",
          "m + n + 1",
          "m * n",
          "m + n"
        ],
        "optionsTa": [
          "m + n - 1",
          "m + n + 1",
          "m * n",
          "m + n"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "A basic feasible solution requires exactly m + n - 1 non-negative independent basic allocations.",
        "explanationTa": "சிதைவற்ற அடிப்படை சாத்தியத் தீர்வுக்கு சரியாக m + n - 1 ஒதுக்கீடுகள் இருக்க வேண்டும்."
      },
      {
        "id": "q_c11_bm_ch10_3",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "The Critical Path in a project network diagram represents:",
        "questionTa": "திட்ட வலைப்பின்னல் வரைபடத்தில் தீர்வுப் பாதை (Critical Path) எதைக் குறிக்கிறது?",
        "optionsEn": [
          "The longest time path through the network",
          "The shortest path through the network",
          "The path with maximum slack",
          "A path with circular loops"
        ],
        "optionsTa": [
          "வலைப்பின்னலின் மிக நீண்ட கால அளவு கொண்ட பாதை",
          "வலைப்பின்னலின் மிகக் குறுகிய பாதை",
          "அதிக ஓய்வு நேரம் கொண்ட பாதை",
          "சுழற்சி வளையம் கொண்ட பாதை"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "The critical path is the longest duration path from start to finish, determining minimal required completion time.",
        "explanationTa": "தீர்வுப் பாதை என்பது தொடக்கத்திலிருந்து இறுதி வரை செல்லும் மிக நீண்ட கால பாதையாகும்; இதுவே திட்டத்தின் குறைந்தபட்ச கால அளவைத் தீர்மானிக்கிறது."
      },
      {
        "id": "q_c11_bm_ch10_4",
        "type": "mcq",
        "difficulty": "medium",
        "questionEn": "A transportation problem is said to be balanced if:",
        "questionTa": "ஒரு போக்குவரத்துக் கணக்கு எப்போது சமநிலையானது என்று அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Total supply equals total demand",
          "Number of rows equals number of columns",
          "All costs are zero",
          "Every route is allocated"
        ],
        "optionsTa": [
          "மொத்த அளிப்பு மொத்தத் தேவைக்குச் சமமாக இருக்கும்போது",
          "நிரைகளின் எண்ணிக்கை நிரல்களின் எண்ணிக்கைக்குச் சமமாக இருக்கும்போது",
          "அனைத்து செலவுகளும் பூச்சியமாகும்போது",
          "ஒவ்வொரு வழியும் ஒதுக்கப்படும்போது"
        ],
        "correctAnswerIndex": 0,
        "explanationEn": "Balance condition requires Σ Supply = Σ Demand. If unequal, dummy rows or columns must be introduced.",
        "explanationTa": "மொத்த அளிப்பு = மொத்தத் தேவை (Σ Supply = Σ Demand) எனில் மட்டுமே போக்குவரத்துக் கணக்கு சமநிலையானது."
      }
    ]
  }
};

export const CLASS_11_BMATH_DIAGRAMS: Record<string, SchematicDiagram> = {
  "c11_bm_ch1": {
    "id": "diag_c11_bm_ch1",
    "chapterId": "c11_bm_ch1",
    "titleEn": "Diagram: Cramer's Rule & Matrix Inversion Architecture",
    "titleTa": "வரைபடம்: கிராமரின் விதி மற்றும் நேர்மாறு அணி கட்டமைப்பு",
    "descriptionEn": "Schematic workflow showing evaluation of determinants, minors, cofactors, and Hawkins-Simon viability.",
    "descriptionTa": "அணிக்கோவையின் மதிப்பு, சேர்ப்பு அணி, கிராமரின் விதி மற்றும் ஹாவ்கின்ஸ்-சைமன் நிபந்தனைகளின் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"25\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#1e293b\"/><text x=\"400\" y=\"52\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">MATRICES &amp; DETERMINANTS: CRAMER'S RULE &amp; LEONTIEF MODEL</text><rect x=\"40\" y=\"100\" width=\"200\" height=\"90\" rx=\"8\" fill=\"#e0f2fe\" stroke=\"#0284c7\" strokeWidth=\"2\"/><text x=\"140\" y=\"130\" fill=\"#0369a1\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Square Matrix [A]</text><text x=\"140\" y=\"155\" fill=\"#0c4a6e\" fontSize=\"12\" textAnchor=\"middle\">Compute |A|</text><text x=\"140\" y=\"175\" fill=\"#0284c7\" fontSize=\"11\" textAnchor=\"middle\">|A| != 0 (Non-singular)</text><line x1=\"240\" y1=\"145\" x2=\"300\" y2=\"145\" stroke=\"#0284c7\" strokeWidth=\"3\"/><rect x=\"300\" y=\"100\" width=\"200\" height=\"90\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" strokeWidth=\"2\"/><text x=\"400\" y=\"130\" fill=\"#b45309\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Cofactors &amp; Adjoint</text><text x=\"400\" y=\"155\" fill=\"#78350f\" fontSize=\"12\" textAnchor=\"middle\">adj(A) = [A_ij]^T</text><text x=\"400\" y=\"175\" fill=\"#d97706\" fontSize=\"11\" textAnchor=\"middle\">A^(-1) = adj(A)/|A|</text><line x1=\"500\" y1=\"145\" x2=\"560\" y2=\"145\" stroke=\"#d97706\" strokeWidth=\"3\"/><rect x=\"560\" y=\"100\" width=\"200\" height=\"90\" rx=\"8\" fill=\"#dcfce7\" stroke=\"#16a34a\" strokeWidth=\"2\"/><text x=\"660\" y=\"130\" fill=\"#15803d\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Cramer's Rule</text><text x=\"660\" y=\"155\" fill=\"#166534\" fontSize=\"12\" textAnchor=\"middle\">x = Δx/Δ, y = Δy/Δ</text><text x=\"660\" y=\"175\" fill=\"#15803d\" fontSize=\"11\" textAnchor=\"middle\">Direct Linear Solution</text><rect x=\"150\" y=\"240\" width=\"500\" height=\"130\" rx=\"10\" fill=\"#f1f5f9\" stroke=\"#64748b\" strokeWidth=\"2\"/><text x=\"400\" y=\"270\" fill=\"#334155\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Leontief Input-Output Viability (Hawkins-Simon)</text><text x=\"400\" y=\"300\" fill=\"#475569\" fontSize=\"12\" textAnchor=\"middle\">Condition 1: Diagonal elements of (I - B) must be strictly positive &gt; 0</text><text x=\"400\" y=\"325\" fill=\"#475569\" fontSize=\"12\" textAnchor=\"middle\">Condition 2: Determinant |I - B| &gt; 0 for the system to produce positive net output</text><text x=\"400\" y=\"350\" fill=\"#2563eb\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">X = (I - B)^(-1) * D gives industry production targets</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Determinant Evaluation",
        "labelTa": "அணிக்கோவை மதிப்பு",
        "descriptionEn": "Evaluated along any row or column to verify non-singularity.",
        "descriptionTa": "பூச்சியமற்ற கோவை என உறுதிசெய்ய அணிக்கோவை மதிப்பிடல்.",
        "x": 140,
        "y": 145
      },
      {
        "id": "l2",
        "labelEn": "Adjoint & Inverse",
        "labelTa": "சேர்ப்பு மற்றும் நேர்மாறு",
        "descriptionEn": "Transpose of cofactor matrix divided by determinant.",
        "descriptionTa": "இணைக்காரணி அணியின் இடமாற்றை அணிக்கோவையால் வகுத்தல்.",
        "x": 400,
        "y": 145
      },
      {
        "id": "l3",
        "labelEn": "Hawkins-Simon Check",
        "labelTa": "ஹாவ்கின்ஸ்-சைமன் சோதனை",
        "descriptionEn": "Verifies economic viability of an input-output system.",
        "descriptionTa": "உள்ளீடு-வெளியீடு பொருளாதாரத்தின் நடைமுறை சாத்தியத்தை உறுதிசெய்தல்.",
        "x": 400,
        "y": 310
      }
    ]
  },
  "c11_bm_ch2": {
    "id": "diag_c11_bm_ch2",
    "chapterId": "c11_bm_ch2",
    "titleEn": "Diagram: Combinatorics & Binomial Triangle Structure",
    "titleTa": "வரைபடம்: சேர்வியல் மற்றும் ஈருறுப்பு முக்கோணக் கட்டமைப்பு",
    "descriptionEn": "Illustrates Pascal's triangle generation, permutation vs combination comparison, and partial fractions breakdown.",
    "descriptionTa": "பாஸ்கல் முக்கோணம், வரிசை மாற்றம் மற்றும் சேர்வு ஒப்பீடு மற்றும் பகுதிப் பின்னப் பிரிப்பு முறை வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#1e1b4b\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">ALGEBRA: COMBINATORICS &amp; BINOMIAL THEOREM</text><rect x=\"50\" y=\"85\" width=\"330\" height=\"135\" rx=\"8\" fill=\"#ede9fe\" stroke=\"#7c3aed\" strokeWidth=\"2\"/><text x=\"215\" y=\"115\" fill=\"#5b21b6\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Permutations vs Combinations</text><text x=\"215\" y=\"140\" fill=\"#4c1d95\" fontSize=\"12\" textAnchor=\"middle\">Arrangement (Order matters): nPr = n! / (n-r)!</text><text x=\"215\" y=\"165\" fill=\"#4c1d95\" fontSize=\"12\" textAnchor=\"middle\">Selection (Order does not matter): nCr = n! / [r!(n-r)!]</text><text x=\"215\" y=\"195\" fill=\"#6d28d9\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Relation: nPr = r! * nCr</text><rect x=\"420\" y=\"85\" width=\"330\" height=\"135\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" strokeWidth=\"2\"/><text x=\"585\" y=\"115\" fill=\"#92400e\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Partial Fraction Types</text><text x=\"585\" y=\"140\" fill=\"#78350f\" fontSize=\"12\" textAnchor=\"middle\">Linear factors: A/(ax+b) + B/(cx+d)</text><text x=\"585\" y=\"165\" fill=\"#78350f\" fontSize=\"12\" textAnchor=\"middle\">Repeated: A/(ax+b) + B/(ax+b)^2</text><text x=\"585\" y=\"195\" fill=\"#b45309\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Irreducible quadratic: (Ax+B)/(ax^2+bx+c)</text><rect x=\"120\" y=\"240\" width=\"560\" height=\"155\" rx=\"10\" fill=\"#f0fdf4\" stroke=\"#16a34a\" strokeWidth=\"2\"/><text x=\"400\" y=\"270\" fill=\"#166534\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Binomial Theorem for Positive Integer n</text><text x=\"400\" y=\"300\" fill=\"#14532d\" fontSize=\"13\" textAnchor=\"middle\">(x + a)^n = nC0 x^n + nC1 x^(n-1)a + ... + nCn a^n</text><text x=\"400\" y=\"330\" fill=\"#15803d\" fontSize=\"12\" textAnchor=\"middle\">General Term: T_(r+1) = nCr * x^(n-r) * a^r</text><text x=\"400\" y=\"360\" fill=\"#166534\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Pascal's Identity: nCr + nC(r-1) = (n+1)Cr | Sum of coeffs = 2^n</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Arrangement Rule",
        "labelTa": "வரிசை மாற்ற விதி",
        "descriptionEn": "Used when order of selection is paramount.",
        "descriptionTa": "தேர்வு செய்யப்படும் வரிசை முக்கியத்துவம் பெறும்போது பயன்படுகிறது.",
        "x": 215,
        "y": 140
      },
      {
        "id": "l2",
        "labelEn": "Partial Fractions",
        "labelTa": "பகுதிப் பின்னங்கள்",
        "descriptionEn": "Simplifies rational functions for calculus integration.",
        "descriptionTa": "தொகையிடலுக்கு வசதியாக பின்னங்களைப் பிரித்தல்.",
        "x": 585,
        "y": 140
      },
      {
        "id": "l3",
        "labelEn": "Binomial Identity",
        "labelTa": "ஈருறுப்பு முற்றொருமை",
        "descriptionEn": "Generates expansion terms and probability coefficients.",
        "descriptionTa": "ஈருறுப்பு உறுப்புகள் மற்றும் நிகழ்தகவுக் கெழுக்களை உருவாக்குகிறது.",
        "x": 400,
        "y": 300
      }
    ]
  },
  "c11_bm_ch3": {
    "id": "diag_c11_bm_ch3",
    "chapterId": "c11_bm_ch3",
    "titleEn": "Diagram: Coordinate Geometry: Straight Lines & Circle Geometry",
    "titleTa": "வரைபடம்: பகுமுறை வடிவியல்: நேர்க்கோடுகள் மற்றும் வட்ட வடிவியல்",
    "descriptionEn": "Cartesian coordinate grid showcasing slopes, perpendicular intersections, tangent to circle, and distance from origin.",
    "descriptionTa": "சாய்வுகள், செங்குத்துக் கோடுகள், வட்டத்தின் தொடுகோடு மற்றும் ஆதியிலிருந்து தொலைவைக் காட்டும் கார்ட்டீசியன் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#0c4a6e\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">ANALYTICAL GEOMETRY: LINES &amp; CIRCLES</text><line x1=\"80\" y1=\"250\" x2=\"720\" y2=\"250\" stroke=\"#94a3b8\" strokeWidth=\"2\"/><line x1=\"280\" y1=\"80\" x2=\"280\" y2=\"380\" stroke=\"#94a3b8\" strokeWidth=\"2\"/><text x=\"710\" y=\"240\" fill=\"#64748b\" fontSize=\"12\" fontWeight=\"bold\">X</text><text x=\"290\" y=\"95\" fill=\"#64748b\" fontSize=\"12\" fontWeight=\"bold\">Y</text><text x=\"265\" y=\"265\" fill=\"#64748b\" fontSize=\"12\">O(0,0)</text><line x1=\"120\" y1=\"360\" x2=\"520\" y2=\"100\" stroke=\"#2563eb\" strokeWidth=\"3\"/><text x=\"480\" y=\"120\" fill=\"#2563eb\" fontSize=\"13\" fontWeight=\"bold\">L1: y = m1*x + c1</text><line x1=\"180\" y1=\"120\" x2=\"480\" y2=\"340\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"460\" y=\"360\" fill=\"#dc2626\" fontSize=\"13\" fontWeight=\"bold\">L2: m1*m2 = -1 (Perpendicular)</text><circle cx=\"580\" cy=\"220\" r=\"70\" fill=\"#e0f2fe\" fillOpacity=\"0.5\" stroke=\"#0284c7\" strokeWidth=\"3\"/><circle cx=\"580\" cy=\"220\" r=\"4\" fill=\"#0369a1\"/><text x=\"590\" y=\"225\" fill=\"#0369a1\" fontSize=\"12\" fontWeight=\"bold\">Center C(-g,-f)</text><line x1=\"580\" y1=\"220\" x2=\"630\" y2=\"171\" stroke=\"#0284c7\" strokeWidth=\"2\" strokeDasharray=\"4\"/><text x=\"615\" y=\"190\" fill=\"#0284c7\" fontSize=\"11\">Radius r</text><line x1=\"530\" y1=\"140\" x2=\"680\" y2=\"290\" stroke=\"#16a34a\" strokeWidth=\"2.5\"/><text x=\"690\" y=\"280\" fill=\"#16a34a\" fontSize=\"12\" fontWeight=\"bold\">Tangent: xx1+yy1=r^2</text><rect x=\"50\" y=\"330\" width=\"200\" height=\"60\" rx=\"6\" fill=\"#f1f5f9\" stroke=\"#94a3b8\"/><text x=\"150\" y=\"352\" fill=\"#334155\" fontSize=\"11\" fontWeight=\"bold\" textAnchor=\"middle\">Distance Formula</text><text x=\"150\" y=\"372\" fill=\"#475569\" fontSize=\"11\" textAnchor=\"middle\">d = |ax1+by1+c| / √(a^2+b^2)</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Perpendicular Slopes",
        "labelTa": "செங்குத்துச் சாய்வுகள்",
        "descriptionEn": "Product of slopes equals -1.",
        "descriptionTa": "சாய்வுகளின் பெருக்கற்பலன் -1 ஆகும்.",
        "x": 380,
        "y": 210
      },
      {
        "id": "l2",
        "labelEn": "Circle Radius",
        "labelTa": "வட்டத்தின் ஆரம்",
        "descriptionEn": "Calculated via r = √(g^2 + f^2 - c).",
        "descriptionTa": "r = √(g^2 + f^2 - c) வழியே கணக்கிடப்படும் ஆரம்.",
        "x": 605,
        "y": 195
      },
      {
        "id": "l3",
        "labelEn": "Perpendicular Distance",
        "labelTa": "செங்குத்துத் தொலைவு",
        "descriptionEn": "Shortest distance between a point and line.",
        "descriptionTa": "புள்ளிக்கும் கோட்டிற்கும் இடையிலான மிகக்குறைந்த தொலைவு.",
        "x": 150,
        "y": 355
      }
    ]
  },
  "c11_bm_ch4": {
    "id": "diag_c11_bm_ch4",
    "chapterId": "c11_bm_ch4",
    "titleEn": "Diagram: Trigonometric Unit Circle & ASTC Quadrants",
    "titleTa": "வரைபடம்: திரிகோணமிதி அலகு வட்டம் மற்றும் நான்கு கால்பகுதிகள்",
    "descriptionEn": "Unit circle demonstrating angle rotation, ASTC signs, compound angle decomposition, and periodic phase.",
    "descriptionTa": "அலகு வட்டம், நான்கு கால்பகுதிகளின் குறியீடுகள் (ASTC) மற்றும் கூட்டுக் கோணங்களை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#312e81\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">TRIGONOMETRY: UNIT CIRCLE &amp; QUADRANT SIGNS</text><circle cx=\"280\" cy=\"240\" r=\"120\" fill=\"#ede9fe\" stroke=\"#6366f1\" strokeWidth=\"3\"/><line x1=\"120\" y1=\"240\" x2=\"440\" y2=\"240\" stroke=\"#94a3b8\" strokeWidth=\"2\"/><line x1=\"280\" y1=\"90\" x2=\"280\" y2=\"380\" stroke=\"#94a3b8\" strokeWidth=\"2\"/><text x=\"340\" y=\"180\" fill=\"#4338ca\" fontSize=\"13\" fontWeight=\"bold\">Q I: ALL (+)</text><text x=\"180\" y=\"180\" fill=\"#4338ca\" fontSize=\"13\" fontWeight=\"bold\">Q II: SILVER (Sin +)</text><text x=\"180\" y=\"300\" fill=\"#4338ca\" fontSize=\"13\" fontWeight=\"bold\">Q III: TEA (Tan +)</text><text x=\"340\" y=\"300\" fill=\"#4338ca\" fontSize=\"13\" fontWeight=\"bold\">Q IV: CUPS (Cos +)</text><line x1=\"280\" y1=\"240\" x2=\"365\" y2=\"155\" stroke=\"#ef4444\" strokeWidth=\"3\"/><circle cx=\"365\" cy=\"155\" r=\"4\" fill=\"#ef4444\"/><text x=\"375\" y=\"150\" fill=\"#ef4444\" fontSize=\"12\" fontWeight=\"bold\">P(cos θ, sin θ)</text><rect x=\"470\" y=\"90\" width=\"290\" height=\"290\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><text x=\"615\" y=\"120\" fill=\"#1e1b4b\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Key Trigonometric Identities</text><text x=\"490\" y=\"155\" fill=\"#334155\" fontSize=\"12\">• sin(A ± B) = sinA cosB ± cosA sinB</text><text x=\"490\" y=\"185\" fill=\"#334155\" fontSize=\"12\">• cos(A ± B) = cosA cosB ∓ sinA sinB</text><text x=\"490\" y=\"215\" fill=\"#334155\" fontSize=\"12\">• sin 2A = 2 sinA cosA</text><text x=\"490\" y=\"245\" fill=\"#334155\" fontSize=\"12\">• cos 2A = cos^2 A - sin^2 A</text><text x=\"490\" y=\"275\" fill=\"#334155\" fontSize=\"12\">• tan 2A = 2 tanA / (1 - tan^2 A)</text><text x=\"490\" y=\"305\" fill=\"#2563eb\" fontSize=\"12\">• 2 sinA cosB = sin(A+B) + sin(A-B)</text><text x=\"490\" y=\"335\" fill=\"#16a34a\" fontSize=\"12\" fontWeight=\"bold\">• sin^2 θ + cos^2 θ = 1</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "ASTC Quadrants",
        "labelTa": "நான்கு கால்பகுதிகள்",
        "descriptionEn": "All, Silver, Tea, Cups quadrant sign rules.",
        "descriptionTa": "அனைத்து, வெள்ளி, தேனீர், கோப்பை குறியீட்டு விதிகள்.",
        "x": 340,
        "y": 180
      },
      {
        "id": "l2",
        "labelEn": "Unit Coordinates",
        "labelTa": "அலகு ஆயத்தொலைவுகள்",
        "descriptionEn": "Point coordinates (cos θ, sin θ) on unit circle.",
        "descriptionTa": "அலகு வட்டத்தில் (cos θ, sin θ) ஆயப்புள்ளி.",
        "x": 375,
        "y": 150
      },
      {
        "id": "l3",
        "labelEn": "Compound Formulas",
        "labelTa": "கூட்டுக்கோணச் சூத்திரங்கள்",
        "descriptionEn": "Addition theorems for trigonometric angles.",
        "descriptionTa": "முக்கோணவியல் கூட்டல் மற்றும் கழித்தல் தேற்றங்கள்.",
        "x": 615,
        "y": 155
      }
    ]
  },
  "c11_bm_ch5": {
    "id": "diag_c11_bm_ch5",
    "chapterId": "c11_bm_ch5",
    "titleEn": "Diagram: Marginal Cost, Marginal Revenue & Profit Maximization",
    "titleTa": "வரைபடம்: இறுதிநிலைச் செலவு, வருவாய் மற்றும் லாப உச்சமாக்கல் வரைபடம்",
    "descriptionEn": "Economic equilibrium curves showing intersection of MR and MC curves at optimal profit output.",
    "descriptionTa": "MR மற்றும் MC வளைவரைகள் வெட்டும் புள்ளியில் உகந்த லாப உற்பத்தி சமநிலையைக் காட்டும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#1e293b\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">DIFFERENTIAL CALCULUS: MARGINAL ANALYSIS &amp; OPTIMIZATION</text><line x1=\"80\" y1=\"360\" x2=\"720\" y2=\"360\" stroke=\"#475569\" strokeWidth=\"2\"/><line x1=\"80\" y1=\"360\" x2=\"80\" y2=\"80\" stroke=\"#475569\" strokeWidth=\"2\"/><text x=\"700\" y=\"380\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">Output (x)</text><text x=\"30\" y=\"95\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">Cost / Revenue</text><path d=\"M 120 120 Q 300 240 680 320\" fill=\"none\" stroke=\"#2563eb\" strokeWidth=\"3\"/><text x=\"690\" y=\"325\" fill=\"#2563eb\" fontSize=\"13\" fontWeight=\"bold\">MR = dR/dx</text><path d=\"M 120 320 Q 320 280 650 110\" fill=\"none\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"660\" y=\"115\" fill=\"#dc2626\" fontSize=\"13\" fontWeight=\"bold\">MC = dC/dx</text><circle cx=\"390\" cy=\"245\" r=\"6\" fill=\"#16a34a\"/><line x1=\"390\" y1=\"245\" x2=\"390\" y2=\"360\" stroke=\"#16a34a\" strokeWidth=\"2\" strokeDasharray=\"4\"/><line x1=\"80\" y1=\"245\" x2=\"390\" y2=\"245\" stroke=\"#16a34a\" strokeWidth=\"2\" strokeDasharray=\"4\"/><text x=\"390\" y=\"380\" fill=\"#16a34a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">x* (Optimal Output)</text><text x=\"400\" y=\"235\" fill=\"#16a34a\" fontSize=\"12\" fontWeight=\"bold\">MR = MC (Max Profit)</text><rect x=\"480\" y=\"170\" width=\"280\" height=\"95\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" strokeWidth=\"2\"/><text x=\"620\" y=\"195\" fill=\"#92400e\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Key Optimization Rules</text><text x=\"495\" y=\"220\" fill=\"#78350f\" fontSize=\"11\">• First Order: MR = MC (dP/dx = 0)</text><text x=\"495\" y=\"240\" fill=\"#78350f\" fontSize=\"11\">• Second Order: d^2P/dx^2 &lt; 0 (Concave)</text><text x=\"495\" y=\"258\" fill=\"#b45309\" fontSize=\"11\" fontWeight=\"bold\">• Elasticity: η_d = -(p/x)(dx/dp)</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Profit Equilibrium",
        "labelTa": "லாப சமநிலை",
        "descriptionEn": "Point where MR intersects MC curve.",
        "descriptionTa": "MR மற்றும் MC வளைவரைகள் வெட்டும் சமநிலைப் புள்ளி.",
        "x": 390,
        "y": 245
      },
      {
        "id": "l2",
        "labelEn": "Optimal Production",
        "labelTa": "உகந்த உற்பத்தி அளவு",
        "descriptionEn": "Output quantity x* producing peak profit.",
        "descriptionTa": "அதிகபட்ச லாபத்தை ஈட்டும் உற்பத்தி அளவு x*.",
        "x": 390,
        "y": 380
      },
      {
        "id": "l3",
        "labelEn": "Marginal Revenue Curve",
        "labelTa": "இறுதிநிலை வருவாய் வளைவரை",
        "descriptionEn": "Rate of change of revenue as sales expand.",
        "descriptionTa": "விற்பனை கூடும்போது வருவாய் மாறும் விகிதம்.",
        "x": 680,
        "y": 320
      }
    ]
  },
  "c11_bm_ch6": {
    "id": "diag_c11_bm_ch6",
    "chapterId": "c11_bm_ch6",
    "titleEn": "Diagram: Consumer's & Producer's Surplus Market Welfare",
    "titleTa": "வரைபடம்: நுகர்வோர் மற்றும் உற்பத்தியாளர் உபரி சந்தை வரைபடம்",
    "descriptionEn": "Market equilibrium showing demand and supply curves with shaded regions for Consumer's Surplus and Producer's Surplus.",
    "descriptionTa": "சந்தை சமநிலையில் தேவை மற்றும் அளிப்பு வளைவரைகளுக்கு இடைப்பட்ட நுகர்வோர் மற்றும் உற்பத்தியாளர் உபரி பரப்புகள்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#14532d\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">INTEGRAL CALCULUS: CONSUMER &amp; PRODUCER SURPLUS</text><line x1=\"80\" y1=\"360\" x2=\"720\" y2=\"360\" stroke=\"#475569\" strokeWidth=\"2\"/><line x1=\"80\" y1=\"360\" x2=\"80\" y2=\"80\" stroke=\"#475569\" strokeWidth=\"2\"/><text x=\"700\" y=\"380\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">Quantity (x)</text><text x=\"30\" y=\"95\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">Price (p)</text><path d=\"M 80 120 L 400 240 L 80 240 Z\" fill=\"#dbeafe\" stroke=\"#3b82f6\" strokeWidth=\"2\"/><text x=\"180\" y=\"200\" fill=\"#1d4ed8\" fontSize=\"14\" fontWeight=\"bold\">Consumer Surplus (CS)</text><path d=\"M 80 240 L 400 240 L 80 340 Z\" fill=\"#dcfce7\" stroke=\"#22c55e\" strokeWidth=\"2\"/><text x=\"180\" y=\"285\" fill=\"#15803d\" fontSize=\"14\" fontWeight=\"bold\">Producer Surplus (PS)</text><line x1=\"80\" y1=\"120\" x2=\"650\" y2=\"340\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"660\" y=\"345\" fill=\"#dc2626\" fontSize=\"13\" fontWeight=\"bold\">Demand: p = f(x)</text><line x1=\"80\" y1=\"340\" x2=\"650\" y2=\"120\" stroke=\"#16a34a\" strokeWidth=\"3\"/><text x=\"660\" y=\"125\" fill=\"#16a34a\" fontSize=\"13\" fontWeight=\"bold\">Supply: p = g(x)</text><circle cx=\"400\" cy=\"240\" r=\"6\" fill=\"#0f172a\"/><line x1=\"400\" y1=\"240\" x2=\"400\" y2=\"360\" stroke=\"#475569\" strokeWidth=\"2\" strokeDasharray=\"4\"/><line x1=\"80\" y1=\"240\" x2=\"400\" y2=\"240\" stroke=\"#475569\" strokeWidth=\"2\" strokeDasharray=\"4\"/><text x=\"400\" y=\"380\" fill=\"#0f172a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Equilibrium Qty (x0)</text><text x=\"65\" y=\"245\" fill=\"#0f172a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"end\">p0</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Consumer Surplus",
        "labelTa": "நுகர்வோர் உபரி",
        "descriptionEn": "Area below demand curve and above price line.",
        "descriptionTa": "தேவை வளைவரைக்குக் கீழும் விலைக்கோட்டிற்கு மேலும் உள்ள பரப்பு.",
        "x": 180,
        "y": 200
      },
      {
        "id": "l2",
        "labelEn": "Producer Surplus",
        "labelTa": "உற்பத்தியாளர் உபரி",
        "descriptionEn": "Area above supply curve and below price line.",
        "descriptionTa": "அளிப்பு வளைவரைக்கு மேலும் விலைக்கோட்டிற்கு கீழும் உள்ள பரப்பு.",
        "x": 180,
        "y": 285
      },
      {
        "id": "l3",
        "labelEn": "Market Equilibrium",
        "labelTa": "சந்தை சமநிலை",
        "descriptionEn": "Intersection where market clears at (x0, p0).",
        "descriptionTa": "தேவையும் அளிப்பும் சமமாகும் புள்ளி (x0, p0).",
        "x": 400,
        "y": 240
      }
    ]
  },
  "c11_bm_ch7": {
    "id": "diag_c11_bm_ch7",
    "chapterId": "c11_bm_ch7",
    "titleEn": "Diagram: Time Value of Money & Annuity Cash Flows",
    "titleTa": "வரைபடம்: பணத்தின் கால மதிப்பு மற்றும் தவணைப் பணப்புழக்க வரைபடம்",
    "descriptionEn": "Timeline illustrating discounting of future cash flows to Present Value and compounding to Future Value.",
    "descriptionTa": "எதிர்கால பணப்புழக்கத்தை தற்போதைய மதிப்புக்கு தள்ளுபடி செய்தல் மற்றும் எதிர்கால மதிப்புக்கு கூட்டுவட்டியாக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#831843\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">FINANCIAL MATHEMATICS: CASH FLOW TIMELINE &amp; ANNUITIES</text><line x1=\"100\" y1=\"210\" x2=\"700\" y2=\"210\" stroke=\"#475569\" strokeWidth=\"4\"/><circle cx=\"100\" cy=\"210\" r=\"10\" fill=\"#9d174d\"/><text x=\"100\" y=\"245\" fill=\"#9d174d\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">t = 0 (Present)</text><text x=\"100\" y=\"180\" fill=\"#9d174d\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">PV = P</text><circle cx=\"250\" cy=\"210\" r=\"8\" fill=\"#0284c7\"/><text x=\"250\" y=\"245\" fill=\"#0284c7\" fontSize=\"13\" textAnchor=\"middle\">t = 1</text><text x=\"250\" y=\"180\" fill=\"#0284c7\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Installment (a)</text><circle cx=\"400\" cy=\"210\" r=\"8\" fill=\"#0284c7\"/><text x=\"400\" y=\"245\" fill=\"#0284c7\" fontSize=\"13\" textAnchor=\"middle\">t = 2</text><text x=\"400\" y=\"180\" fill=\"#0284c7\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Installment (a)</text><circle cx=\"550\" cy=\"210\" r=\"8\" fill=\"#0284c7\"/><text x=\"550\" y=\"245\" fill=\"#0284c7\" fontSize=\"13\" textAnchor=\"middle\">t = 3</text><text x=\"550\" y=\"180\" fill=\"#0284c7\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Installment (a)</text><circle cx=\"700\" cy=\"210\" r=\"10\" fill=\"#15803d\"/><text x=\"700\" y=\"245\" fill=\"#15803d\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">t = n (Future)</text><text x=\"700\" y=\"180\" fill=\"#15803d\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">FV = F</text><path d=\"M 700 150 C 500 90 300 90 100 150\" fill=\"none\" stroke=\"#be123c\" strokeWidth=\"2.5\" strokeDasharray=\"5\"/><text x=\"400\" y=\"105\" fill=\"#be123c\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Discounting: P = a/i [1 - (1+i)^(-n)]</text><path d=\"M 100 270 C 300 330 500 330 700 270\" fill=\"none\" stroke=\"#16a34a\" strokeWidth=\"2.5\" strokeDasharray=\"5\"/><text x=\"400\" y=\"325\" fill=\"#16a34a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Compounding: F = a/i [(1+i)^n - 1]</text><rect x=\"200\" y=\"355\" width=\"400\" height=\"45\" rx=\"6\" fill=\"#fdf2f8\" stroke=\"#f472b6\"/><text x=\"400\" y=\"382\" fill=\"#9d174d\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Perpetuity (Indefinite Horizon): PV = a / i</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Present Value",
        "labelTa": "தற்போதைய மதிப்பு",
        "descriptionEn": "Current lump-sum equivalent of cash flow.",
        "descriptionTa": "பணப்புழக்கத்தின் இன்றைய ஒட்டுமொத்த மதிப்பு.",
        "x": 100,
        "y": 180
      },
      {
        "id": "l2",
        "labelEn": "Annuity Stream",
        "labelTa": "தவணைப் பணப்புழக்கம்",
        "descriptionEn": "Periodic equal installments a over n intervals.",
        "descriptionTa": "n காலங்களில் சமமாக செலுத்தப்படும் தவணை a.",
        "x": 400,
        "y": 180
      },
      {
        "id": "l3",
        "labelEn": "Future Value",
        "labelTa": "எதிர்கால மதிப்பு",
        "descriptionEn": "Accumulated terminal wealth with interest.",
        "descriptionTa": "வட்டியுடன் கூடி முதிர்ச்சியடையும் எதிர்காலத் தொகை.",
        "x": 700,
        "y": 180
      }
    ]
  },
  "c11_bm_ch8": {
    "id": "diag_c11_bm_ch8",
    "chapterId": "c11_bm_ch8",
    "titleEn": "Diagram: Normal Distribution & Dispersion Architecture",
    "titleTa": "வரைபடம்: இயல்நிலை பரவல் மற்றும் சிதறல் கட்டமைப்பு",
    "descriptionEn": "Bell-shaped curve illustrating central mean μ, standard deviations ±1σ, ±2σ, ±3σ, and probability boundaries.",
    "descriptionTa": "சராசரி μ மற்றும் திட்டவிலக்க எல்லைகளை (±1σ, ±2σ, ±3σ) விளக்கும் இயல்நிலை மணி வடிவ வளைவரை.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#0f172a\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">STATISTICS &amp; PROBABILITY: NORMAL DISPERSION &amp; BAYES</text><line x1=\"80\" y1=\"340\" x2=\"720\" y2=\"340\" stroke=\"#475569\" strokeWidth=\"2\"/><path d=\"M 100 338 C 220 335, 300 280, 400 120 C 500 280, 580 335, 700 338\" fill=\"none\" stroke=\"#2563eb\" strokeWidth=\"3\"/><line x1=\"400\" y1=\"120\" x2=\"400\" y2=\"340\" stroke=\"#dc2626\" strokeWidth=\"2.5\"/><text x=\"400\" y=\"360\" fill=\"#dc2626\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Mean (x̄ = μ)</text><line x1=\"320\" y1=\"200\" x2=\"320\" y2=\"340\" stroke=\"#64748b\" strokeWidth=\"1.5\" strokeDasharray=\"4\"/><line x1=\"480\" y1=\"200\" x2=\"480\" y2=\"340\" stroke=\"#64748b\" strokeWidth=\"1.5\" strokeDasharray=\"4\"/><text x=\"320\" y=\"360\" fill=\"#64748b\" fontSize=\"12\" textAnchor=\"middle\">-1σ</text><text x=\"480\" y=\"360\" fill=\"#64748b\" fontSize=\"12\" textAnchor=\"middle\">+1σ</text><rect x=\"335\" y=\"230\" width=\"130\" height=\"30\" rx=\"4\" fill=\"#dbeafe\" stroke=\"#3b82f6\"/><text x=\"400\" y=\"250\" fill=\"#1d4ed8\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">68.27% of Data</text><rect x=\"520\" y=\"90\" width=\"240\" height=\"110\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" strokeWidth=\"1.5\"/><text x=\"640\" y=\"115\" fill=\"#92400e\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Formulas</text><text x=\"535\" y=\"140\" fill=\"#78350f\" fontSize=\"11\">• CV = (σ / x̄) * 100 (Consistency)</text><text x=\"535\" y=\"160\" fill=\"#78350f\" fontSize=\"11\">• P(A∪B) = P(A)+P(B)-P(A∩B)</text><text x=\"535\" y=\"180\" fill=\"#b45309\" fontSize=\"11\" fontWeight=\"bold\">• Bayes: P(Ai|B) = Prior x Likelihood</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Arithmetic Mean",
        "labelTa": "கூட்டுச் சராசரி",
        "descriptionEn": "Central peak of the bell curve.",
        "descriptionTa": "மணி வடிவ வளைவரையின் மைய உச்சிப் புள்ளி.",
        "x": 400,
        "y": 120
      },
      {
        "id": "l2",
        "labelEn": "68% Empirical Spread",
        "labelTa": "68% திட்டவிலக்கப் பரப்பு",
        "descriptionEn": "Data within 1 standard deviation of mean.",
        "descriptionTa": "சராசரியிலிருந்து ±1 திட்டவிலக்கத்திற்குள் உள்ள தரவு.",
        "x": 400,
        "y": 250
      },
      {
        "id": "l3",
        "labelEn": "Coefficient of Variation",
        "labelTa": "மாறுபாட்டுக் கெழு",
        "descriptionEn": "Relative benchmark for risk and consistency.",
        "descriptionTa": "இடர் மற்றும் நிலைத்தன்மையை ஒப்பிடும் அளவை.",
        "x": 640,
        "y": 140
      }
    ]
  },
  "c11_bm_ch9": {
    "id": "diag_c11_bm_ch9",
    "chapterId": "c11_bm_ch9",
    "titleEn": "Diagram: Scatter Plot & Dual Regression Lines",
    "titleTa": "வரைபடம்: சிதறல் வரைபடம் மற்றும் இரட்டை தொடர்போக்குக் கோடுகள்",
    "descriptionEn": "Cartesian scatter plot with data points, mean intersection (x̄, ȳ), regression of Y on X and regression of X on Y.",
    "descriptionTa": "புள்ளிகள் சிதறல், சராசரி சந்திப்பு (x̄, ȳ) மற்றும் இரு தொடர்போக்குக் கோடுகளைக் காட்டும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#1e293b\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">CORRELATION &amp; REGRESSION: DUAL PREDICTIVE MODELS</text><line x1=\"80\" y1=\"360\" x2=\"720\" y2=\"360\" stroke=\"#475569\" strokeWidth=\"2\"/><line x1=\"80\" y1=\"360\" x2=\"80\" y2=\"80\" stroke=\"#475569\" strokeWidth=\"2\"/><text x=\"700\" y=\"380\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">X (Advertising)</text><text x=\"30\" y=\"95\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">Y (Sales)</text><circle cx=\"150\" cy=\"310\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"210\" cy=\"280\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"280\" cy=\"240\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"340\" cy=\"220\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"430\" cy=\"180\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"490\" cy=\"150\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"560\" cy=\"130\" r=\"4\" fill=\"#94a3b8\"/><circle cx=\"620\" cy=\"110\" r=\"4\" fill=\"#94a3b8\"/><line x1=\"120\" y1=\"330\" x2=\"650\" y2=\"100\" stroke=\"#2563eb\" strokeWidth=\"3\"/><text x=\"660\" y=\"105\" fill=\"#2563eb\" fontSize=\"13\" fontWeight=\"bold\">Line of Y on X (b_yx)</text><line x1=\"100\" y1=\"350\" x2=\"680\" y2=\"120\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"690\" y=\"135\" fill=\"#dc2626\" fontSize=\"13\" fontWeight=\"bold\">Line of X on Y (b_xy)</text><circle cx=\"380\" cy=\"217\" r=\"7\" fill=\"#16a34a\"/><line x1=\"380\" y1=\"217\" x2=\"380\" y2=\"360\" stroke=\"#16a34a\" strokeWidth=\"1.5\" strokeDasharray=\"4\"/><line x1=\"80\" y1=\"217\" x2=\"380\" y2=\"217\" stroke=\"#16a34a\" strokeWidth=\"1.5\" strokeDasharray=\"4\"/><text x=\"380\" y=\"380\" fill=\"#16a34a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Mean x̄</text><text x=\"65\" y=\"222\" fill=\"#16a34a\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"end\">Mean ȳ</text><rect x=\"490\" y=\"240\" width=\"270\" height=\"100\" rx=\"8\" fill=\"#fef3c7\" stroke=\"#d97706\" strokeWidth=\"1.5\"/><text x=\"625\" y=\"265\" fill=\"#92400e\" fontSize=\"13\" fontWeight=\"bold\" textAnchor=\"middle\">Key Properties</text><text x=\"505\" y=\"290\" fill=\"#78350f\" fontSize=\"11\">• Intersection point is strictly (x̄, ȳ)</text><text x=\"505\" y=\"310\" fill=\"#78350f\" fontSize=\"11\">• r = ± √(b_yx * b_xy)</text><text x=\"505\" y=\"330\" fill=\"#b45309\" fontSize=\"11\" fontWeight=\"bold\">• Both b_yx and b_xy share same sign</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Means Intersection",
        "labelTa": "சராசரி சந்திப்புப் புள்ளி",
        "descriptionEn": "Exact intersection of both regression lines at (x̄, ȳ).",
        "descriptionTa": "இரு தொடர்போக்குக் கோடுகளும் சந்திக்கும் புள்ளி (x̄, ȳ).",
        "x": 380,
        "y": 217
      },
      {
        "id": "l2",
        "labelEn": "Regression of Y on X",
        "labelTa": "X-ன் மீது Y தொடர்போக்கு",
        "descriptionEn": "Predicts dependent variable Y from known X.",
        "descriptionTa": "அறிந்த X மதிப்பிலிருந்து Y-ஐ முன்கணிக்கும் கோடு.",
        "x": 650,
        "y": 105
      },
      {
        "id": "l3",
        "labelEn": "Scatter Points",
        "labelTa": "சிதறல் புள்ளிகள்",
        "descriptionEn": "Bivariate paired observations.",
        "descriptionTa": "இருமாறி தரவுகளின் மாதிரிப் புள்ளிகள்.",
        "x": 280,
        "y": 240
      }
    ]
  },
  "c11_bm_ch10": {
    "id": "diag_c11_bm_ch10",
    "chapterId": "c11_bm_ch10",
    "titleEn": "Diagram: Linear Programming Feasible Region & CPM Network",
    "titleTa": "வரைபடம்: நேரியல் திட்டமிடல் சாத்தியப் பகுதி மற்றும் CPM வலைப்பின்னல்",
    "descriptionEn": "Convex polygonal feasible region with corner evaluation and project activity precedence network showing critical path.",
    "descriptionTa": "சாத்தியப் பகுதியின் முனைப்புள்ளிகள் மற்றும் தீர்வுப் பாதையைக் (Critical Path) காட்டும் திட்ட மேலாண்மை வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 420\" className=\"w-full h-auto\" xmlns=\"http://www.w3.org/2000/svg\"><rect width=\"800\" height=\"420\" fill=\"#f8fafc\" rx=\"12\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><rect x=\"30\" y=\"20\" width=\"740\" height=\"45\" rx=\"8\" fill=\"#1e293b\"/><text x=\"400\" y=\"48\" fill=\"#ffffff\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">OPERATIONS RESEARCH: LPP GRAPH &amp; CPM CRITICAL PATH</text><line x1=\"60\" y1=\"360\" x2=\"380\" y2=\"360\" stroke=\"#475569\" strokeWidth=\"2\"/><line x1=\"60\" y1=\"360\" x2=\"60\" y2=\"90\" stroke=\"#475569\" strokeWidth=\"2\"/><text x=\"360\" y=\"380\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">x1</text><text x=\"40\" y=\"105\" fill=\"#475569\" fontSize=\"12\" fontWeight=\"bold\">x2</text><polygon points=\"60,360 260,360 200,240 60,160\" fill=\"#bbf7d0\" stroke=\"#16a34a\" strokeWidth=\"2\"/><circle cx=\"60\" cy=\"360\" r=\"5\" fill=\"#0f172a\"/><circle cx=\"260\" cy=\"360\" r=\"5\" fill=\"#0f172a\"/><circle cx=\"200\" cy=\"240\" r=\"6\" fill=\"#dc2626\"/><circle cx=\"60\" cy=\"160\" r=\"5\" fill=\"#0f172a\"/><text x=\"210\" y=\"230\" fill=\"#dc2626\" fontSize=\"12\" fontWeight=\"bold\">Max Z*(10,5)</text><text x=\"140\" y=\"300\" fill=\"#15803d\" fontSize=\"12\" fontWeight=\"bold\">Feasible Region</text><rect x=\"420\" y=\"90\" width=\"350\" height=\"290\" rx=\"8\" fill=\"#ffffff\" stroke=\"#cbd5e1\" strokeWidth=\"2\"/><text x=\"595\" y=\"120\" fill=\"#0f172a\" fontSize=\"14\" fontWeight=\"bold\" textAnchor=\"middle\">Project CPM Network</text><circle cx=\"470\" cy=\"230\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" strokeWidth=\"2\"/><text x=\"470\" y=\"235\" fill=\"#4338ca\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">1</text><circle cx=\"560\" cy=\"170\" r=\"22\" fill=\"#fee2e2\" stroke=\"#dc2626\" strokeWidth=\"2\"/><text x=\"560\" y=\"175\" fill=\"#dc2626\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">2</text><circle cx=\"560\" cy=\"290\" r=\"22\" fill=\"#e0e7ff\" stroke=\"#4338ca\" strokeWidth=\"2\"/><text x=\"560\" y=\"295\" fill=\"#4338ca\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">3</text><circle cx=\"680\" cy=\"230\" r=\"22\" fill=\"#fee2e2\" stroke=\"#dc2626\" strokeWidth=\"2\"/><text x=\"680\" y=\"235\" fill=\"#dc2626\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">4</text><line x1=\"490\" y1=\"215\" x2=\"540\" y2=\"180\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"510\" y=\"190\" fill=\"#dc2626\" fontSize=\"11\" fontWeight=\"bold\">A (4d)</text><line x1=\"490\" y1=\"245\" x2=\"540\" y2=\"280\" stroke=\"#4338ca\" strokeWidth=\"2\"/><text x=\"510\" y=\"275\" fill=\"#4338ca\" fontSize=\"11\">B (2d)</text><line x1=\"582\" y1=\"180\" x2=\"660\" y2=\"215\" stroke=\"#dc2626\" strokeWidth=\"3\"/><text x=\"625\" y=\"190\" fill=\"#dc2626\" fontSize=\"11\" fontWeight=\"bold\">C (6d)</text><line x1=\"582\" y1=\"280\" x2=\"660\" y2=\"245\" stroke=\"#4338ca\" strokeWidth=\"2\"/><text x=\"625\" y=\"275\" fill=\"#4338ca\" fontSize=\"11\">D (3d)</text><text x=\"595\" y=\"355\" fill=\"#dc2626\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Critical Path: 1 -&gt; 2 -&gt; 4 (Duration: 10 days)</text></svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Feasible Polygon",
        "labelTa": "சாத்தியப் பலகோணம்",
        "descriptionEn": "Intersection satisfying all operational constraints.",
        "descriptionTa": "அனைத்து கட்டுப்பாடுகளையும் பூர்த்தி செய்யும் சாத்தியப் பகுதி.",
        "x": 140,
        "y": 300
      },
      {
        "id": "l2",
        "labelEn": "Optimal Vertex",
        "labelTa": "உகந்த முனைப்புள்ளி",
        "descriptionEn": "Vertex giving maximum objective value Z.",
        "descriptionTa": "அதிகபட்ச Z மதிப்பைத் தரும் முனைப்புள்ளி.",
        "x": 200,
        "y": 240
      },
      {
        "id": "l3",
        "labelEn": "Critical Network Path",
        "labelTa": "தீர்வுப் பாதை",
        "descriptionEn": "Bottleneck path dictating total project duration.",
        "descriptionTa": "திட்டத்தின் மொத்தக் காலத்தை நிர்ணயிக்கும் முக்கியப் பாதை.",
        "x": 595,
        "y": 355
      }
    ]
  }
};

export const CLASS_11_BMATH_VIDEOS: Record<string, VideoExplainer> = {
  "c11_bm_ch1": {
    "id": "vid_c11_bm_ch1",
    "chapterId": "c11_bm_ch1",
    "titleEn": "Video Explainer: Mastering Matrices, Cramer's Rule, and Leontief Models",
    "titleTa": "காட்சி விளக்கம்: அணிகள், கிராமரின் விதி மற்றும் லியோன்டிஃப் மாதிரிகள்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Determinants and Inversion Fundamentals",
        "titleTa": "அணிக்கோவைகள் மற்றும் நேர்மாறு அடிப்படைகள்",
        "visualDescriptionEn": "Interactive animation showing calculation of minors and cofactors leading to the adjoint matrix.",
        "narrationEn": "Welcome to Chapter 1. A square matrix possesses an inverse only when its determinant is non-zero. By multiplying the inverse of |A| with the adjoint matrix, we unlock direct algebraic solutions.",
        "narrationTa": "அத்தியாயம் 1-க்கு உங்களை வரவேற்கிறோம். ஒரு சதுர அணியின் அணிக்கோவை பூச்சியமற்றதாக இருக்கும்போது மட்டுமே அதற்கு நேர்மாறு இருக்கும். சேர்ப்பு அணியைக் கணக்கிட்டு நேர்மாறு அணியைப் பெறுகிறோம்.",
        "conceptKey": "Determinant Non-singularity",
        "keyTakeaway": "Inverse matrix exists only when |A| != 0."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Solving Systems with Cramer's Rule",
        "titleTa": "கிராமரின் விதி மூலம் சமன்பாடுகளைத் தீர்த்தல்",
        "visualDescriptionEn": "Step-by-step substitution of coefficient columns by constant vectors in Δx and Δy.",
        "narrationEn": "Cramer's rule provides an elegant determinant-based method. By substituting the right-hand constant column into the determinant, we find each variable directly as x equals delta x divided by delta.",
        "narrationTa": "கிராமரின் விதி எளிய முறையில் சமன்பாடுகளுக்கு தீர்வு காண உதவுகிறது. மாறிலிகளை மாற்றி அமைத்து டெல்டா எக்ஸ் மற்றும் டெல்டா மூலம் எளிதில் மதிப்புகளைப் பெறலாம்.",
        "conceptKey": "Cramer's Rule",
        "keyTakeaway": "x = Δx/Δ, y = Δy/Δ when Δ != 0."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Economic Viability: Leontief & Hawkins-Simon",
        "titleTa": "பொருளாதார சாத்தியம்: லியோன்டிஃப் மற்றும் ஹாவ்கின்ஸ்-சைமன்",
        "visualDescriptionEn": "A diagram connecting raw materials, intermediate manufacturing, and consumer demand in a balanced matrix.",
        "narrationEn": "In real-world business planning, Leontief's model forecasts industrial targets. The Hawkins-Simon conditions guarantee that our production system produces positive net output for society.",
        "narrationTa": "நடைமுறை வணிகத் திட்டமிடலில் லியோன்டிஃப் மாதிரி தொழில் தேவைகளை முன்கணிக்கிறது. ஹாவ்கின்ஸ்-சைமன் நிபந்தனைகள் அமைப்பின் உற்பத்தியை உறுதி செய்கின்றன.",
        "conceptKey": "Hawkins-Simon Conditions",
        "keyTakeaway": "Diagonal elements of (I - B) > 0 and |I - B| > 0."
      }
    ]
  },
  "c11_bm_ch2": {
    "id": "vid_c11_bm_ch2",
    "chapterId": "c11_bm_ch2",
    "titleEn": "Video Explainer: Algebra: Counting, Induction, and Binomial Theorem",
    "titleTa": "காட்சி விளக்கம்: இயற்கணிதம்: எண்ணுதல், தொகுத்தறிதல் மற்றும் ஈருறுப்புத் தேற்றம்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Permutations vs. Combinations",
        "titleTa": "வரிசை மாற்றங்கள் மற்றும் சேர்வுகள்",
        "visualDescriptionEn": "Organizing colored billiard balls showing how order produces permutations while grouping yields combinations.",
        "narrationEn": "Chapter 2 begins with combinatorial counting. If order matters, we compute permutations using nPr. If we only select a group, we use combinations nCr.",
        "narrationTa": "அத்தியாயம் 2-ல் எண்ணும் கொள்கையைப் பயில்கிறோம். வரிசை முக்கியம் எனில் வரிசை மாற்றங்களையும், குழு தேர்வு எனில் சேர்வுகளையும் பயன்படுத்துகிறோம்.",
        "conceptKey": "Counting Principles",
        "keyTakeaway": "Permutations arrange with order; combinations select without order."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Decomposition via Partial Fractions",
        "titleTa": "பகுதிப் பின்னங்களாகப் பிரித்தல்",
        "visualDescriptionEn": "Splitting a single complex rational expression into two simple fractions with distinct denominators.",
        "narrationEn": "Partial fractions allow us to break complex rational algebraic fractions into simple manageable terms, making integration effortless.",
        "narrationTa": "பகுதிப் பின்னங்கள் சிக்கலான இயற்கணிதப் பின்னங்களை எளிய பின்னங்களாகப் பிரித்து தொகையிடுதலை மிக எளிதாக்குகின்றன.",
        "conceptKey": "Partial Fractions",
        "keyTakeaway": "Resolves rational expressions into sum of simpler fractions."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Binomial Expansion and Pascal's Pattern",
        "titleTa": "ஈருறுப்பு விரிவு மற்றும் பாஸ்கல் முக்கோணம்",
        "visualDescriptionEn": "Pascal's triangle animating downwards to generate binomial coefficients of (x + a)^n.",
        "narrationEn": "The Binomial Theorem expands any positive integer power of two terms into n plus one terms, driven by Pascal's symmetric combinatorial coefficients.",
        "narrationTa": "ஈருறுப்புத் தேற்றம் இரு உறுப்புகளின் அடுக்கை (n + 1) உறுப்புகளாக விரித்து, பாஸ்கலின் சேர்வியல் கெழுக்களைப் பயன்படுத்தி எளிய வடிவில் தருகிறது.",
        "conceptKey": "Binomial Theorem",
        "keyTakeaway": "Contains n + 1 terms with general term T_(r+1) = nCr * x^(n-r) * a^r."
      }
    ]
  },
  "c11_bm_ch3": {
    "id": "vid_c11_bm_ch3",
    "chapterId": "c11_bm_ch3",
    "titleEn": "Video Explainer: Analytical Geometry: Lines, Angles, and Circles",
    "titleTa": "காட்சி விளக்கம்: பகுமுறை வடிவியல்: கோடுகள், கோணங்கள் மற்றும் வட்டங்கள்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Straight Line Forms and Slopes",
        "titleTa": "நேர்க்கோட்டு வடிவங்கள் மற்றும் சாய்வு",
        "visualDescriptionEn": "A straight line rotating on the Cartesian plane with its slope m changing dynamically.",
        "narrationEn": "Chapter 3 investigates lines and curves. A straight line's inclination defines its slope m. Parallel lines share identical slopes, while perpendicular lines satisfy m1 times m2 equals negative one.",
        "narrationTa": "அத்தியாயம் 3-ல் நேர்க்கோடுகள் மற்றும் வளைவரைகளைப் பயில்கிறோம். கோட்டின் சாய்வு m ஆகும். இணைக்கோடுகள் சம சாய்வுகளையும், செங்குத்துக் கோடுகள் m1 * m2 = -1 பண்பையும் பெற்றுள்ளன.",
        "conceptKey": "Slope and Orientation",
        "keyTakeaway": "Parallel lines: m1 = m2; Perpendicular lines: m1 * m2 = -1."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Pair of Straight Lines",
        "titleTa": "இரட்டை நேர்க்கோடுகள்",
        "visualDescriptionEn": "Two lines passing through the origin splitting from a quadratic equation ax^2 + 2hxy + by^2 = 0.",
        "narrationEn": "When two lines pass through the origin, their joint equation is ax squared plus 2hxy plus by squared equals zero. They are perpendicular when the sum of coefficients a and b equals zero.",
        "narrationTa": "ஆதி வழிச் செல்லும் இரு கோடுகளை ax^2 + 2hxy + by^2 = 0 குறிக்கிறது. a + b = 0 எனில் அவை ஒன்றுக்கொன்று செங்குத்தானவை.",
        "conceptKey": "Pair of Lines",
        "keyTakeaway": "Perpendicular condition: a + b = 0."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Circles and Tangents",
        "titleTa": "வட்டங்கள் மற்றும் தொடுகோடுகள்",
        "visualDescriptionEn": "Tracing a circle from center (-g, -f) with radius r, and a tangent line touching at exactly one point.",
        "narrationEn": "A circle in general form has center (-g, -f) and radius root of g squared plus f squared minus c. A tangent touches the boundary at exactly one point, serving as an optimal business frontier.",
        "narrationTa": "வட்டத்தின் பொது வடிவில் மையம் (-g, -f) மற்றும் ஆரம் √(g^2 + f^2 - c) ஆகும். தொடுகோடு ஒரே ஒரு புள்ளியில் மட்டுமே வட்டத்தைத் தொட்டுச் செல்கிறது.",
        "conceptKey": "Circle & Tangent",
        "keyTakeaway": "Radius r = √(g^2 + f^2 - c); Tangent equation: xx1 + yy1 = r^2."
      }
    ]
  },
  "c11_bm_ch4": {
    "id": "vid_c11_bm_ch4",
    "chapterId": "c11_bm_ch4",
    "titleEn": "Video Explainer: Trigonometry: Angles, Identities, and Wave Functions",
    "titleTa": "காட்சி விளக்கம்: திரிகோணமிதி: கோணங்கள், முற்றொருமைகள் மற்றும் அலைச் சார்புகள்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Unit Circle and Four Quadrants",
        "titleTa": "அலகு வட்டம் மற்றும் நான்கு கால்பகுதிகள்",
        "visualDescriptionEn": "A ray rotating anti-clockwise through Quadrants I to IV showing sign changes of sine and cosine.",
        "narrationEn": "Chapter 4 unlocks trigonometry through the unit circle. The ASTC rule tells us which trigonometric ratios are positive as an angle sweeps across the four quadrants.",
        "narrationTa": "அத்தியாயம் 4-ல் அலகு வட்டம் வழி முக்கோணவியலை கற்கிறோம். நான்கு கால்பகுதிகளிலும் எந்தெந்த விகிதங்கள் நேர்மறை என்பதை ASTC விதி விளக்குகிறது.",
        "conceptKey": "ASTC Quadrant Rule",
        "keyTakeaway": "Q1: All +, Q2: Sin +, Q3: Tan +, Q4: Cos +."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Compound Angles & Double Angle Formulas",
        "titleTa": "கூட்டுக்கோணங்கள் மற்றும் இரட்டைக் கோணங்கள்",
        "visualDescriptionEn": "Combining two angles A and B to derive sin(A + B) geometrically.",
        "narrationEn": "Compound angle identities express sums and differences of angles. Double angle formulas like sin 2A equals 2 sin A cos A allow rapid algebraic simplification.",
        "narrationTa": "கூட்டுக்கோணச் சூத்திரங்கள் இரு கோணங்களின் கூடுதலுக்கு உதவுகின்றன. sin 2A = 2 sin A cos A போன்ற இரட்டைக் கோணச் சூத்திரங்கள் கணக்கீட்டை எளிதாக்குகின்றன.",
        "conceptKey": "Compound Angles",
        "keyTakeaway": "sin(A±B) and cos(A±B) break down complex angles."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Inverse Functions and Business Cycles",
        "titleTa": "நேர்மாறு சார்புகள் மற்றும் வணிக சுழற்சிகள்",
        "visualDescriptionEn": "A sinusoidal wave depicting periodic economic sales cycles and its inverse mapping.",
        "narrationEn": "Seasonal sales fluctuations follow periodic sinusoidal waves. Inverse trigonometric functions help business planners recover exact phase angles and turnaround times.",
        "narrationTa": "வணிக விற்பனை பருவகால அலைகளாக மாறும்போது, நேர்மாறு முக்கோணவியல் சார்புகள் துல்லியமான சுழற்சி காலத்தைக் கணக்கிட உதவுகின்றன.",
        "conceptKey": "Cyclic Modeling",
        "keyTakeaway": "Trigonometry models business periodicity and harmonic oscillations."
      }
    ]
  },
  "c11_bm_ch5": {
    "id": "vid_c11_bm_ch5",
    "chapterId": "c11_bm_ch5",
    "titleEn": "Video Explainer: Differential Calculus in Business: Marginals & Profit",
    "titleTa": "காட்சி விளக்கம்: வணிகத்தில் வகை நுண்கணிதம்: இறுதிநிலைகள் மற்றும் லாபம்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Rates of Change: Marginal Cost & Revenue",
        "titleTa": "மாறுதல் விகிதங்கள்: இறுதிநிலைச் செலவு மற்றும் வருவாய்",
        "visualDescriptionEn": "A factory production line producing an additional unit with cost meters updating instantly.",
        "narrationEn": "Chapter 5 introduces rates of change. In business economics, the derivative of total cost is Marginal Cost, and the derivative of total revenue is Marginal Revenue.",
        "narrationTa": "அத்தியாயம் 5-ல் மாறுதல் விகிதங்களைப் பயில்கிறோம். மொத்தச் செலவின் வகைக்கெழு இறுதிநிலைச் செலவாகும், மொத்த வருவாயின் வகைக்கெழு இறுதிநிலை வருவாயாகும்.",
        "conceptKey": "Marginal Concepts",
        "keyTakeaway": "MC = dC/dx; MR = dR/dx."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Elasticity of Demand",
        "titleTa": "தேவை நெகிழ்ச்சிக் கெழு",
        "visualDescriptionEn": "A pricing slider moving up while sales demand sliders adjust down, graphing the elasticity quotient.",
        "narrationEn": "Elasticity measures how responsive demand is to price changes. When elasticity exceeds one, price cuts boost total revenue, providing crucial pricing strategy.",
        "narrationTa": "தேவை நெகிழ்ச்சி விலை மாற்றங்களுக்கு தேவை எவ்வாறு பதிலளிக்கிறது என்பதை அளவிடுகிறது. நெகிழ்ச்சி ஒன்றை விட அதிகமாகும்போது விலை குறைப்பு வருவாயை அதிகரிக்கும்.",
        "conceptKey": "Price Elasticity",
        "keyTakeaway": "η_d = -(p/x)(dx/dp)."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Maximizing Business Profit",
        "titleTa": "வணிக லாபத்தை உச்சமாக்குதல்",
        "visualDescriptionEn": "MR and MC curves intersecting at peak profit dome on the coordinate plane.",
        "narrationEn": "A business achieves maximum profit at the exact output where marginal revenue equals marginal cost, verified by a negative second derivative.",
        "narrationTa": "இறுதிநிலை வருவாய் இறுதிநிலைச் செலவுக்குச் சமமாகவும், இரண்டாம் வகைக்கெழு எதிர்மறையாகவும் இருக்கும் புள்ளியில் நிறுவனம் உச்சபட்ச லாபத்தை அடைகிறது.",
        "conceptKey": "Profit Optimization",
        "keyTakeaway": "MR = MC and d^2P/dx^2 < 0 ensure maximum profit."
      }
    ]
  },
  "c11_bm_ch6": {
    "id": "vid_c11_bm_ch6",
    "chapterId": "c11_bm_ch6",
    "titleEn": "Video Explainer: Integral Calculus: Accumulation, Cost Recovery & Surplus",
    "titleTa": "காட்சி விளக்கம்: தொகை நுண்கணிதம்: செலவு மீட்பு மற்றும் பொருளாதார உபரி",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Reconstructing Total Cost from Marginals",
        "titleTa": "இறுதிநிலைச் செலவிலிருந்து மொத்தச் செலவை மீட்டல்",
        "visualDescriptionEn": "Integrating a marginal cost curve to reveal the rising total cost mountain plus fixed initial base.",
        "narrationEn": "Chapter 6 shows how integration acts as accumulation. By integrating marginal cost and adding fixed overheads, managers construct the complete total cost function.",
        "narrationTa": "அத்தியாயம் 6-ல் தொகையிடல் எவ்வாறு சேர்க்கையாக செயல்படுகிறது என்பதைக் கற்கிறோம். இறுதிநிலைச் செலவைத் தொகையிட்டு நிலையான செலவைக் கூட்டி மொத்தச் செலவுச் சார்பைப் பெறலாம்.",
        "conceptKey": "Cost Integration",
        "keyTakeaway": "C(x) = ∫ MC dx + k where k is fixed cost."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Consumer Surplus Explained",
        "titleTa": "நுகர்வோர் உபரி விளக்கம்",
        "visualDescriptionEn": "A shaded blue area expanding between the downward demand curve and horizontal market price line.",
        "narrationEn": "Consumer Surplus represents the aggregate savings customers experience when paying a single equilibrium price below what they were actually prepared to pay.",
        "narrationTa": "நுகர்வோர் உபரி என்பது நுகர்வோர் கொடுக்கத் தயாராக இருந்த அதிகபட்ச விலைக்கும், சந்தையில் செலுத்திய குறைந்த சமநிலை விலைக்கும் உள்ள சேமிப்பாகும்.",
        "conceptKey": "Consumer Welfare",
        "keyTakeaway": "CS = ∫_0^(x0) f(x) dx - p0*x0."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Producer Surplus and Total Economic Welfare",
        "titleTa": "உற்பத்தியாளர் உபரி மற்றும் பொருளாதார நலம்",
        "visualDescriptionEn": "Green shaded region below equilibrium price and above upward sloping supply curve.",
        "narrationEn": "Producer surplus quantifies net supplier gains. Together, consumer and producer surpluses determine total economic welfare generated by competitive markets.",
        "narrationTa": "உற்பத்தியாளர் உபரி உற்பத்தியாளர்களின் நிகர லாபத்தைக் குறிக்கிறது. இரண்டும் இணைந்து சந்தையின் ஒட்டுமொத்த பொருளாதார நல்வாழ்வை உறுதி செய்கின்றன.",
        "conceptKey": "Producer Welfare",
        "keyTakeaway": "PS = p0*x0 - ∫_0^(x0) g(x) dx."
      }
    ]
  },
  "c11_bm_ch7": {
    "id": "vid_c11_bm_ch7",
    "chapterId": "c11_bm_ch7",
    "titleEn": "Video Explainer: Financial Mathematics: Time Value of Money & Annuities",
    "titleTa": "காட்சி விளக்கம்: நிதி கணிதம்: பணத்தின் கால மதிப்பு மற்றும் தவணைகள்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "The Power of Compound Interest",
        "titleTa": "கூட்டுவட்டியின் ஆற்றல்",
        "visualDescriptionEn": "A growing stack of gold coins illustrating compound exponential growth compared to flat simple interest.",
        "narrationEn": "Chapter 7 centers on the Time Value of Money. Compound interest earns interest on accumulated interest, causing capital to expand exponentially according to A equals P times 1 plus i to the power n.",
        "narrationTa": "அத்தியாயம் 7 பணத்தின் கால மதிப்பை விளக்குகிறது. கூட்டுவட்டி வட்டிக்கும் சேர்த்து வட்டி ஈட்டுவதால் முதலீடு அதிவேகமாக வளர்கிறது.",
        "conceptKey": "Exponential Compounding",
        "keyTakeaway": "A = P(1+i)^n outpaces simple interest."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Annuities and Sinking Funds",
        "titleTa": "தவணைப்பங்கீடு மற்றும் கடன் தீர்வு நிதி",
        "visualDescriptionEn": "Regular recurring deposits building up step-by-step into a massive retirement or debt repayment fund.",
        "narrationEn": "Annuities represent equal periodic payments. In a sinking fund, regular installments accumulate compound interest to pay off corporate debentures or replace factory machinery.",
        "narrationTa": "தவணைப்பங்கீடு சம கால இடைவெளியில் செலுத்தப்படும் தவணைகளாகும். கடன் தீர்வு நிதி மூலம் எதிர்கால பெரும் கடன்களை எளிதில் அடைக்க முடியும்.",
        "conceptKey": "Annuity Accumulation",
        "keyTakeaway": "Future value of annuity aggregates deposits with interest."
      },
      {
        "sceneNumber": 3,
        "titleEn": "EMI and Loan Amortization",
        "titleTa": "EMI மற்றும் கடன் திருப்பிச் செலுத்துதல் அட்டவணை",
        "visualDescriptionEn": "An EMI bar chart breaking each monthly payment into decreasing interest and increasing principal repayment.",
        "narrationEn": "Equated Monthly Installments balance interest and principal smoothly. In early months, interest dominates; as the balance falls, principal repayment accelerates to zero debt.",
        "narrationTa": "சம மாதாந்திர தவணையில் (EMI) தொடக்க மாதங்களில் வட்டி அதிகமாகவும், காலப்போக்கில் அசல் திருப்பிச் செலுத்துதல் அதிகரித்து கடன் முழுமையாக அடைபடுகிறது.",
        "conceptKey": "Amortization Dynamics",
        "keyTakeaway": "EMI balances principal retirement and periodic interest."
      }
    ]
  },
  "c11_bm_ch8": {
    "id": "vid_c11_bm_ch8",
    "chapterId": "c11_bm_ch8",
    "titleEn": "Video Explainer: Descriptive Statistics: Spread, Consistency & Bayes' Risk",
    "titleTa": "காட்சி விளக்கம்: விவரிப்பு புள்ளியியல்: பரவல், நிலைத்தன்மை மற்றும் நிகழ்தகவு இடர்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Standard Deviation and Data Dispersion",
        "titleTa": "திட்டவிலக்கம் மற்றும் தரவுச் சிதறல்",
        "visualDescriptionEn": "Data points scattering around a central average line with standard deviation bands forming a bell curve.",
        "narrationEn": "Chapter 8 introduces descriptive statistics. While the arithmetic mean locates data central tendency, Standard Deviation measures dispersion and risk around that average.",
        "narrationTa": "அத்தியாயம் 8-ல் புள்ளியியலைக் கற்கிறோம். கூட்டுச் சராசரி மைய மதிப்பைக் குறிக்கும் அதே வேளையில், திட்டவிலக்கம் தரவுகளின் பரவலையும் இடரையும் அளவிடுகிறது.",
        "conceptKey": "Data Dispersion",
        "keyTakeaway": "Standard deviation measures variability from the arithmetic mean."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Coefficient of Variation for Consistency",
        "titleTa": "நிலைத்தன்மையை அளவிடும் மாறுபாட்டுக் கெழு",
        "visualDescriptionEn": "A side-by-side comparison of two stock investments displaying their respective CV percentages.",
        "narrationEn": "When comparing two investments or production lines of different magnitudes, Coefficient of Variation provides a dimensionless ratio. A lower CV indicates higher consistency and reliability.",
        "narrationTa": "இரு வேறு முதலீடுகள் அல்லது தயாரிப்பு நிறுவனங்களை ஒப்பிடும்போது, குறைந்த மாறுபாட்டுக் கெழு (CV) கொண்டதே அதிக நிலைத்தன்மை மற்றும் நம்பகத்தன்மை உடையதாகும்.",
        "conceptKey": "Process Consistency",
        "keyTakeaway": "Lower CV = higher consistency and stability."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Bayes' Theorem and Risk Updating",
        "titleTa": "பேயீஸின் தேற்றம் மற்றும் இடர் திருத்தம்",
        "visualDescriptionEn": "A decision tree branching into prior probabilities and revising into posterior probabilities upon testing.",
        "narrationEn": "Bayes' theorem is fundamental in modern decision sciences. It systematically updates prior risk estimates based on new diagnostic test evidence to establish posterior probabilities.",
        "narrationTa": "பேயீஸின் தேற்றம் முடிவெடுக்கும் அறிவியலின் அடித்தளமாகும். புதிய சான்றுகள் மற்றும் சோதனைகளின் அடிப்படையில் முந்தைய இடர் நிகழ்தகவை திருத்தி துல்லியமாக்குகிறது.",
        "conceptKey": "Bayesian Probability",
        "keyTakeaway": "Updates prior knowledge into posterior probability based on new data."
      }
    ]
  },
  "c11_bm_ch9": {
    "id": "vid_c11_bm_ch9",
    "chapterId": "c11_bm_ch9",
    "titleEn": "Video Explainer: Correlation & Regression: Discovering Market Relationships",
    "titleTa": "காட்சி விளக்கம்: உடன்தொடர்பு மற்றும் தொடர்போக்கு: சந்தை உறவுகளைக் கண்டறிதல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Measuring Association with Pearson's r",
        "titleTa": "பியர்சனின் r மூலம் தொடர்பை அளவிடுதல்",
        "visualDescriptionEn": "A scatter plot aligning closely along a positive trendline with r counter rising to +0.95.",
        "narrationEn": "Chapter 9 explores bivariate analytics. Correlation coefficient r measures how strongly two business metrics, such as advertising expenditure and quarterly sales revenue, move together.",
        "narrationTa": "அத்தியாயம் 9 இருமாறி பகுப்பாய்வை விளக்குகிறது. விளம்பரச் செலவு மற்றும் விற்பனை வருவாய் போன்ற இரு மாறிகள் எவ்வளவு வலிமையாக இணைகின்றன என்பதை r அளவிடுகிறது.",
        "conceptKey": "Correlation Strength",
        "keyTakeaway": "-1 <= r <= 1 measures direction and linear strength."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Forecasting with Regression Equations",
        "titleTa": "தொடர்போக்கு சமன்பாடுகள் மூலம் முன்கணித்தல்",
        "visualDescriptionEn": "Drawing the best-fit regression line through data points and projecting sales targets for the next year.",
        "narrationEn": "While correlation measures relationship strength, regression provides predictive equations. The line of Y on X forecasts dependent revenue outcomes from planned investment inputs.",
        "narrationTa": "உடன்தொடர்பு உறவின் வலிமையை அளவிட, தொடர்போக்கு எதிர்கால விற்பனை மதிப்புகளை முன்கணிக்கும் கணித சமன்பாடுகளை வழங்குகிறது.",
        "conceptKey": "Predictive Modeling",
        "keyTakeaway": "Regression lines predict Y from X and X from Y."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Properties of Regression Lines",
        "titleTa": "தொடர்போக்குக் கோடுகளின் சிறப்பியல்புகள்",
        "visualDescriptionEn": "Two lines pivoting around their central intersection point (x̄, ȳ) as correlation changes.",
        "narrationEn": "Both regression lines always intersect at the mean coordinates (x̄, ȳ). Their geometric mean recovers Pearson's r, linking correlation and regression into an integrated predictive framework.",
        "narrationTa": "இரு தொடர்போக்குக் கோடுகளும் எப்போதும் சராசரிப் புள்ளியான (x̄, ȳ)-ல் சந்திக்கின்றன. அவற்றின் பெருக்குச் சராசரியே உடன்தொடர்புக் கெழு r ஆகும்.",
        "conceptKey": "Regression Invariance",
        "keyTakeaway": "Intersect at (x̄, ȳ) and r = ± √(b_yx * b_xy)."
      }
    ]
  },
  "c11_bm_ch10": {
    "id": "vid_c11_bm_ch10",
    "chapterId": "c11_bm_ch10",
    "titleEn": "Video Explainer: Operations Research: Optimization, Logistics & Scheduling",
    "titleTa": "காட்சி விளக்கம்: செயல்பாட்டு ஆராய்ச்சி: உச்சமாக்கல், தளவாடம் மற்றும் திட்டமிடல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Linear Programming and Corner Point Method",
        "titleTa": "நேரியல் திட்டமிடல் மற்றும் முனைப்புள்ளி முறை",
        "visualDescriptionEn": "Drawing constraint lines onto the first quadrant, creating a shaded convex feasible polygon and testing vertices.",
        "narrationEn": "Chapter 10 presents quantitative decision science. Linear programming maps production limits into a convex feasible polygon. The optimal profit always lands right on one of the outer corner vertices.",
        "narrationTa": "அத்தியாயம் 10 முடிவு அறிவியல் கருவிகளைத் தருகிறது. நேரியல் திட்டமிடல் கட்டுப்பாடுகளை சாத்தியப் பலகோணமாக மாற்றுகிறது. அதிகபட்ச லாபம் எப்போதுமே ஒரு முனைப்புள்ளியில் கிடைக்கிறது.",
        "conceptKey": "LPP Vertex Solution",
        "keyTakeaway": "Optimal solution is achieved at a corner vertex of the feasible region."
      },
      {
        "sceneNumber": 2,
        "titleEn": "Transportation Optimization",
        "titleTa": "போக்குவரத்து செலவு உகந்ததாக்கல்",
        "visualDescriptionEn": "Moving cargo boxes from supply factories across routes to regional warehouses minimizing freight cost.",
        "narrationEn": "Transportation algorithms like the North-West Corner Rule and Least Cost Method allocate shipping volumes across factories and distribution warehouses to minimize total freight expenditure.",
        "narrationTa": "வடமேற்கு மூலை விதி மற்றும் குறைந்த செலவு முறைகள் தொழிற்சாலைகளில் இருந்து கிட்டங்கிகளுக்கு சரக்குகளை மிகக் குறைந்த செலவில் கொண்டு செல்ல வழிவகுக்கின்றன.",
        "conceptKey": "Transportation Problem",
        "keyTakeaway": "Minimizes total shipping cost across supply and demand hubs."
      },
      {
        "sceneNumber": 3,
        "titleEn": "Critical Path Method (CPM) in Project Management",
        "titleTa": "திட்ட மேலாண்மையில் தீர்வுப் பாதை முறை (CPM)",
        "visualDescriptionEn": "A project network lighting up the critical red path where zero slack activities pace the completion deadline.",
        "narrationEn": "The Critical Path Method isolates the sequence of critical activities with zero slack. Any delay along this critical path directly delays project completion, giving managers total execution control.",
        "narrationTa": "தீர்வுப் பாதை முறை (CPM) எந்த தாமதமும் செய்யக்கூடாத மிக நீண்ட பாதையை அடையாளம் காட்டுகிறது. இது திட்டங்களை குறித்த நேரத்தில் முடிக்க உதவுகிறது.",
        "conceptKey": "Critical Path Scheduling",
        "keyTakeaway": "Zero float path determines minimal total project completion time."
      }
    ]
  }
};
