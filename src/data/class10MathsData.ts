import { Chapter, NoteItem, SummaryItem, ChapterQuiz, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Complete Tamil Nadu Samacheer Kalvi Class 10 Mathematics Master Dataset (Chapters 1 to 8)
 * Full Notes, Summaries with Formula Cheat Sheets, Board Quizzes, Interactive SVG Diagrams & Video Storyboard Explainers.
 */

export const CLASS_10_MATHS_CHAPTERS: Chapter[] = [
  {
    "id": "c10_math_ch1",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 1",
    "unitNameTa": "பாடம் 1",
    "chapterNumber": 1,
    "titleEn": "Chapter 1: Relations and Functions",
    "titleTa": "பாடம் 1: உறவுகளும் சார்புகளும்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch2",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 2",
    "unitNameTa": "பாடம் 2",
    "chapterNumber": 2,
    "titleEn": "Chapter 2: Numbers and Sequences",
    "titleTa": "பாடம் 2: எண்களும் தொடர்வரிசைகளும்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch3",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 3",
    "unitNameTa": "பாடம் 3",
    "chapterNumber": 3,
    "titleEn": "Chapter 3: Algebra",
    "titleTa": "பாடம் 3: இயற்கணிதம்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch4",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 4",
    "unitNameTa": "பாடம் 4",
    "chapterNumber": 4,
    "titleEn": "Chapter 4: Geometry",
    "titleTa": "பாடம் 4: வடிவியல்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch5",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 5",
    "unitNameTa": "பாடம் 5",
    "chapterNumber": 5,
    "titleEn": "Chapter 5: Coordinate Geometry",
    "titleTa": "பாடம் 5: ஆயத்தொலை வடிவியல்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch6",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 6",
    "unitNameTa": "பாடம் 6",
    "chapterNumber": 6,
    "titleEn": "Chapter 6: Trigonometry",
    "titleTa": "பாடம் 6: முக்கோணவியல்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch7",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 7",
    "unitNameTa": "பாடம் 7",
    "chapterNumber": 7,
    "titleEn": "Chapter 7: Mensuration",
    "titleTa": "பாடம் 7: அளவியல்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  },
  {
    "id": "c10_math_ch8",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "unitNumber": 1,
    "unitNameEn": "Chapter 8",
    "unitNameTa": "பாடம் 8",
    "chapterNumber": 8,
    "titleEn": "Chapter 8: Statistics and Probability",
    "titleTa": "பாடம் 8: புள்ளியியலும் நிகழ்தகவும்",
    "status": "verified",
    "hasNotes": true,
    "hasSummary": true,
    "hasQuiz": true,
    "hasDiagram": true,
    "hasVideo": true,
    "textbookUrl": "https://www.tnschools.gov.in/textbooks"
  }
];

export const CLASS_10_MATHS_NOTES: Record<string, NoteItem> = {
  "c10_math_ch1": {
    "id": "note_c10_math_ch1",
    "chapterId": "c10_math_ch1",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 1: Relations and Functions",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 1: உறவுகளும் சார்புகளும்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Cartesian Product\nFor non-empty sets $A$ and $B$, $A \times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$. If $n(A) = p$ and $n(B) = q$, then $n(A \times B) = pq$.\n\n### 2. Relations\nA relation $R$ from $A$ to $B$ is a subset: $R \\subseteq A \times B$. The total number of relations from $A$ to $B$ is $2^{pq}$.\n- **Domain:** $\\{x \\in A \\mid (x, y) \\in R\\}$\n- **Range:** $\\{y \\in B \\mid (x, y) \\in R\\}$\n\n### 3. Functions\nA relation $f: A \rightarrow B$ is a function if:\n1. Every element $x \\in A$ has an image in $B$.\n2. The image is unique.\n\n### 4. Classification of Functions\n- **One-to-One (Injective):** Distinct elements have distinct images ($f(a) = f(b) \\implies a = b$).\n- **Onto (Surjective):** Range equals Co-domain ($R_f = B$).\n- **Bijective:** Both one-to-one and onto (invertible).\n- **Constant Function:** $f(x) = c$ for all $x$.\n- **Identity Function:** $f(x) = x$.\n\n### 5. Composition of Functions\nLet $f: A \rightarrow B$ and $g: B \rightarrow C$. The composite function $g \\circ f: A \rightarrow C$ is defined by $(g \\circ f)(x) = g(f(x))$.\n- $f \\circ g \neq g \\circ f$ in general.\n- $f \\circ (g \\circ h) = (f \\circ g) \\circ h$ (Associative property holds).",
    "bodyTa": "### 1. கார்ட்டீசியன் பெருக்கல்\n$A$ மற்றும் $B$ ஆகிய வெற்றில்லா கணங்களுக்கு, $A \times B = \\{(a, b) \\mid a \\in A, b \\in B\\}$. $n(A) = p, n(B) = q$ எனில் $n(A \times B) = pq$.\n\n### 2. உறவுகள்\n$A$-விலிருந்து $B$-க்கான உறவு $R \\subseteq A \times B$. மொத்த உறவுகளின் எண்ணிக்கை $2^{pq}$.\n\n### 3. சார்புகள் மற்றும் வகைகள்\n- **ஒன்றுக்கொன்றான சார்பு:** வெவ்வேறு உறுப்புகளுக்கு வெவ்வேறு நிழல் உருக்கள்.\n- **மேற்கோர்த்தல் சார்பு:** வீச்சகம் = துணை மதிப்பகம்.\n- **இருபுறச் சார்பு:** ஒன்றுக்கொன்றான மற்றும் மேற்கோர்த்தல் சார்பு.\n- **சார்புகளின் சேர்ப்பு:** $(f \\circ g)(x) = f(g(x))$. சேர்ப்பு விதி உண்மையாகும்.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch2": {
    "id": "note_c10_math_ch2",
    "chapterId": "c10_math_ch2",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 2: Numbers and Sequences",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 2: எண்களும் தொடர்வரிசைகளும்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Euclid's Division Lemma and Algorithm\nGiven positive integers $a$ and $b$, there exist unique integers $q$ and $r$ such that:\n$$a = bq + r, \\quad 0 \\leq r < b$$\nRepeated application of this lemma until remainder is zero finds the Highest Common Factor (HCF / GCD).\n\n### 2. Modular Arithmetic\nIf two integers $a$ and $b$ leave the same remainder when divided by $m$, then:\n$$a \\equiv b \\pmod{m} \\iff a - b \text{ is divisible by } m$$\n\n### 3. Arithmetic Progression (AP)\n- General Form: $a, a+d, a+2d, \\dots$\n- $n$-th Term: $t_n = a + (n - 1)d$\n- Sum of $n$ Terms: $S_n = \frac{n}{2}[2a + (n - 1)d] = \frac{n}{2}(a + l)$\n- Three terms in AP: $a - d, a, a + d$\n\n### 4. Geometric Progression (GP)\n- General Form: $a, ar, ar^2, \\dots$\n- $n$-th Term: $t_n = a \\cdot r^{n-1}$\n- Sum of $n$ Terms: $S_n = \frac{a(r^n - 1)}{r - 1}$ for $r \neq 1$\n- Sum to infinity ($|r| < 1$): $S_\\infty = \frac{a}{1 - r}$\n\n### 5. Special Series\n1. $\\sum_{k=1}^n k = \frac{n(n+1)}{2}$\n2. $\\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$\n3. $\\sum_{k=1}^n k^3 = \\left[\frac{n(n+1)}{2}\right]^2$",
    "bodyTa": "### 1. யூக்ளிடின் வகுத்தல் அல்காரிதம்\n$a = bq + r$ ($0 \\le r < b$). மீதி பூச்சியம் வரும் வரை தொடர்ந்து வகுப்பதன் மூலம் மீ.பொ.வ (GCD) கண்டறியலாம்.\n\n### 2. கூட்டுத்தொடர்வரிசை (AP)\n- பொது வடிவம்: $a, a+d, a+2d, \\dots$\n- $n$-வது உறுப்பு: $t_n = a + (n - 1)d$\n- முதல் $n$ உறுப்புகளின் கூடுதல்: $S_n = \frac{n}{2}[2a + (n - 1)d]$\n\n### 3. பெருக்குத்தொடர்வரிசை (GP)\n- $n$-வது உறுப்பு: $t_n = ar^{n-1}$\n- கூடுதல்: $S_n = \frac{a(r^n - 1)}{r - 1}$ ($r > 1$)\n\n### 4. சிறப்புத் தொடர்கள்\n- $\\sum n = \frac{n(n+1)}{2}$\n- $\\sum n^2 = \frac{n(n+1)(2n+1)}{6}$\n- $\\sum n^3 = \\left(\frac{n(n+1)}{2}\right)^2$",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch3": {
    "id": "note_c10_math_ch3",
    "chapterId": "c10_math_ch3",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 3: Algebra",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 3: இயற்கணிதம்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Linear Systems in Three Variables\nSystem of equations:\n$$a_1 x + b_1 y + c_1 z = d_1, \\quad a_2 x + b_2 y + c_2 z = d_2, \\quad a_3 x + b_3 y + c_3 z = d_3$$\n- Unique solution: Intersect at a single point.\n- Infinitely many solutions: Identity like $0 = 0$.\n- No solution: Inconsistent statement like $0 = 1$.\n\n### 2. Quadratic Equations & Nature of Roots\nFor $ax^2 + bx + c = 0$ ($a \neq 0$):\nRoots: $x = \frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$.\nDiscriminant $\\Delta = b^2 - 4ac$:\n- $\\Delta > 0$: Real and unequal roots.\n- $\\Delta = 0$: Real and equal roots.\n- $\\Delta < 0$: No real roots (imaginary).\n\n### 3. Relation between Roots and Coefficients\nIf $\u0007lpha, \beta$ are roots of $ax^2 + bx + c = 0$:\n$$\u0007lpha + \beta = -\frac{b}{a}, \\quad \u0007lpha \beta = \frac{c}{a}$$\nEquation formation: $x^2 - (\u0007lpha + \beta)x + \u0007lpha \beta = 0$.\n\n### 4. Matrices\n- **Order of Matrix:** $m \times n$ (rows $\times$ columns).\n- **Multiplication Rule:** $A_{m \times n} \times B_{n \times p} = C_{m \times p}$.\n- **Transpose Properties:** $(A^T)^T = A$, $(A + B)^T = A^T + B^T$, $(AB)^T = B^T A^T$.",
    "bodyTa": "### 1. இருபடிச் சமன்பாட்டின் மூலங்கள்\n$ax^2 + bx + c = 0$-ன் மூலங்கள்:\n$x = \frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$\nதன்மைக்காட்டி $\\Delta = b^2 - 4ac$:\n- $\\Delta > 0$: மெய் மற்றும் சமமற்றவை.\n- $\\Delta = 0$: மெய் மற்றும் சமமானவை.\n- $\\Delta < 0$: மெய் மூலங்கள் இல்லை.\n\n### 2. மூலங்களுக்கும் கெழுக்களுக்கும் உள்ள தொடர்பு\n$\u0007lpha + \beta = -\frac{b}{a}, \\quad \u0007lpha \beta = \frac{c}{a}$\n\n### 3. அணிகள்\n- பெருக்கல் விதி: முதல் அணியின் நிரல்களின் எண்ணிக்கை = இரண்டாம் அணியின் நிரைகளின் எண்ணிக்கை.\n- $(AB)^T = B^T A^T$.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch4": {
    "id": "note_c10_math_ch4",
    "chapterId": "c10_math_ch4",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 4: Geometry",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 4: வடிவியல்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Similar Triangles Criteria\nTwo triangles $\\Delta ABC \\sim \\Delta PQR$ if:\n- Corresponding angles are equal ($\u0007ngle A = \u0007ngle P, \u0007ngle B = \u0007ngle Q, \u0007ngle C = \u0007ngle R$).\n- Corresponding sides are proportional: $\frac{AB}{PQ} = \frac{BC}{QR} = \frac{AC}{PR}$.\n- Ratio of areas $= \\left(\frac{\text{side}_1}{\text{side}_2}\right)^2$.\n\n### 2. Core Theorems\n- **Thales Theorem (BPT):** If $DE \\parallel BC$, then $\frac{AD}{DB} = \frac{AE}{EC}$.\n- **Angle Bisector Theorem (ABT):** If $AD$ bisects $\u0007ngle A$, then $\frac{BD}{DC} = \frac{AB}{AC}$.\n- **Pythagoras Theorem:** In right $\\Delta ABC$ with $\u0007ngle A = 90^\\circ$: $BC^2 = AB^2 + AC^2$.\n\n### 3. Circles and Tangents\n- The tangent at any point of a circle is perpendicular to the radius through the point of contact ($OP \\perp PT$).\n- Two tangents drawn from an external point to a circle are equal in length ($PA = PB$).\n- **Alternate Segment Theorem:** Angle between tangent and chord equals angle in alternate segment.\n- **Chord Intersection:** If chords $AB$ and $CD$ intersect at $P$: $PA \\cdot PB = PC \\cdot PD$.",
    "bodyTa": "### 1. அடிப்படை வடிவவியல் தேற்றங்கள்\n- **தேல்ஸ் தேற்றம்:** முக்கோணம் $ABC$-ல் $DE \\parallel BC$ எனில், $\frac{AD}{DB} = \frac{AE}{EC}$.\n- **கோண இருசமவெட்டித் தேற்றம்:** $AD$ என்பது $\u0007ngle A$-ன் இருசமவெட்டி எனில், $\frac{BD}{DC} = \frac{AB}{AC}$.\n- **பிதாகரஸ் தேற்றம்:** செங்கோண முக்கோணத்தில், $\text{கர்ணம்}^2 = \text{பக்கம்}_1^2 + \text{பக்கம்}_2^2$.\n\n### 2. வட்டத்தின் தொடுகோடுகள்\n- தொடுபுள்ளியில் வரையப்படும் ஆரம் தொடுகோட்டிற்குச் செங்குத்தாகும் ($OP \\perp PT$).\n- வெளிப்புள்ளியிலிருந்து வட்டத்திற்கு வரையப்படும் இரு தொடுகோடுகளின் நீளங்கள் சமம் ($PA = PB$).",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch5": {
    "id": "note_c10_math_ch5",
    "chapterId": "c10_math_ch5",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 5: Coordinate Geometry",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 5: ஆயத்தொலை வடிவியல்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Area of Triangle & Collinear Points\nVertices $(x_1, y_1), (x_2, y_2), (x_3, y_3)$:\n$$\text{Area} = \frac{1}{2} |(x_1 y_2 + x_2 y_3 + x_3 y_1) - (x_2 y_1 + x_3 y_2 + x_1 y_3)|$$\n- If $\text{Area} = 0$, the points are collinear.\n\n### 2. Slope of a Straight Line\n- Angle of inclination $\theta$: $m = \tan \theta$ ($0^\\circ \\leq \theta \\leq 180^\\circ, \theta \neq 90^\\circ$).\n- Two points: $m = \frac{y_2 - y_1}{x_2 - x_1}$.\n- General equation $ax + by + c = 0$: $m = -\frac{a}{b}$.\n\n### 3. Parallel and Perpendicular Lines\n- Parallel: $m_1 = m_2$.\n- Perpendicular: $m_1 m_2 = -1 \\iff m_2 = -\frac{1}{m_1}$.\n\n### 4. Equations of Straight Lines\n1. Slope-intercept form: $y = mx + c$\n2. Point-slope form: $y - y_1 = m(x - x_1)$\n3. Two-point form: $\frac{y - y_1}{y_2 - y_1} = \frac{x - x_1}{x_2 - x_1}$\n4. Intercept form: $\frac{x}{a} + \frac{y}{b} = 1$",
    "bodyTa": "### 1. முக்கோணத்தின் பரப்பளவு\nபுள்ளிகள் $(x_1, y_1), (x_2, y_2), (x_3, y_3)$ எனில்:\n$\text{பரப்பு} = \frac{1}{2} |(x_1 y_2 + x_2 y_3 + x_3 y_1) - (x_2 y_1 + x_3 y_2 + x_1 y_3)|$\nபரப்பு = 0 எனில் புள்ளிகள் ஒரே நேர்க்கோட்டில் அமையும்.\n\n### 2. சாய்வு மற்றும் கோட்டின் சமன்பாடுகள்\n- சாய்வு $m = \tan \theta = \frac{y_2 - y_1}{x_2 - x_1}$.\n- இணைக்கோடுகள்: $m_1 = m_2$.\n- செங்குத்துக் கோடுகள்: $m_1 m_2 = -1$.\n- வெட்டுத்துண்டு வடிவம்: $\frac{x}{a} + \frac{y}{b} = 1$.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch6": {
    "id": "note_c10_math_ch6",
    "chapterId": "c10_math_ch6",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 6: Trigonometry",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 6: முக்கோணவியல்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Trigonometric Identities\n- $\\sin^2 \theta + \\cos^2 \theta = 1 \\implies \\sin^2 \theta = 1 - \\cos^2 \theta$\n- $1 + \tan^2 \theta = \\sec^2 \theta \\implies \\sec^2 \theta - \tan^2 \theta = 1$\n- $1 + \\cot^2 \theta = \\csc^2 \theta \\implies \\csc^2 \theta - \\cot^2 \theta = 1$\n\n### 2. Quotients & Reciprocals\n- $\tan \theta = \frac{\\sin \theta}{\\cos \theta}$, $\\cot \theta = \frac{\\cos \theta}{\\sin \theta}$\n- $\\sec \theta = \frac{1}{\\cos \theta}$, $\\csc \theta = \frac{1}{\\sin \theta}$\n\n### 3. Heights and Distances Terminology\n- **Horizontal Line:** Level sightline through the observer's eye.\n- **Angle of Elevation ($\theta$):** Look up ($\theta$ above horizontal).\n- **Angle of Depression ($\u0007lpha$):** Look down ($\u0007lpha$ below horizontal).\n- By alternate interior angles, angle of depression from top equals angle of elevation from bottom.\n\n### 4. Standard Values\n- $\tan 30^\\circ = \frac{1}{\\sqrt{3}}, \\quad \tan 45^\\circ = 1, \\quad \tan 60^\\circ = \\sqrt{3}$\n- $\\sin 30^\\circ = \frac{1}{2}, \\quad \\sin 45^\\circ = \frac{1}{\\sqrt{2}}, \\quad \\sin 60^\\circ = \frac{\\sqrt{3}}{2}$",
    "bodyTa": "### 1. முக்கோணவியல் முற்றொருமைகள்\n- $\\sin^2 \theta + \\cos^2 \theta = 1$\n- $\\sec^2 \theta - \tan^2 \theta = 1$\n- $\\csc^2 \theta - \\cot^2 \theta = 1$\n\n### 2. உயரங்களும் தொலைவுகளும்\n- **ஏற்றக் கோணம்:** மேலே உள்ள பொருளைப் பார்க்கும் கோணம்.\n- **இறக்கக் கோணம்:** கீழே உள்ள பொருளைப் பார்க்கும் கோணம்.\n- முக்கிய மதிப்புகள்: $\tan 30^\\circ = \frac{1}{\\sqrt{3}}, \tan 45^\\circ = 1, \tan 60^\\circ = \\sqrt{3}$.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch7": {
    "id": "note_c10_math_ch7",
    "chapterId": "c10_math_ch7",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 7: Mensuration",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 7: அளவியல்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Solid Formulas Master Reference\n| Solid | CSA | TSA | Volume |\n|---|---|---|---|\n| Cylinder | $2\\pi r h$ | $2\\pi r(h + r)$ | $\\pi r^2 h$ |\n| Hollow Cylinder | $2\\pi h(R + r)$ | $2\\pi(R + r)(R - r + h)$ | $\\pi h(R^2 - r^2)$ |\n| Cone | $\\pi r l$ | $\\pi r(l + r)$ | $\frac{1}{3}\\pi r^2 h$ |\n| Sphere | $4\\pi r^2$ | $4\\pi r^2$ | $\frac{4}{3}\\pi r^3$ |\n| Hemisphere | $2\\pi r^2$ | $3\\pi r^2$ | $\frac{2}{3}\\pi r^3$ |\n| Frustum | $\\pi(R + r)l$ | $\\pi(R + r)l + \\pi R^2 + \\pi r^2$ | $\frac{1}{3}\\pi h(R^2 + r^2 + Rr)$ |\n\n### 2. Slant Height of Cone & Frustum\n- Cone: $l = \\sqrt{r^2 + h^2}$\n- Frustum: $l = \\sqrt{h^2 + (R - r)^2}$\n\n### 3. Conversion and Combination of Solids\n- **Recasting:** $\text{Volume of original solid} = \text{Volume of recast solid}$.\n- **Combined Solids:** Total Volume = sum of individual volumes; TSA = exposed exterior surfaces only.",
    "bodyTa": "### 1. முக்கிய அளவியல் சூத்திரங்கள்\n- **உருளை:** வளைபரப்பு = $2\\pi rh$, கனஅளவு = $\\pi r^2 h$.\n- **கூம்பு:** சாயுயரம் $l = \\sqrt{r^2 + h^2}$, வளைபரப்பு = $\\pi rl$, கனஅளவு = $\frac{1}{3}\\pi r^2 h$.\n- **கோளம்:** புறப்பரப்பு = $4\\pi r^2$, கனஅளவு = $\frac{4}{3}\\pi r^3$.\n- **அரைக்கோளம்:** வளைபரப்பு = $2\\pi r^2$, மொத்தப் பரப்பு = $3\\pi r^2$, கனஅளவு = $\frac{2}{3}\\pi r^3$.\n- **உருக்கி வார்க்கப்படுதல்:** அசல் பொருளின் கனஅளவு = புதிய பொருளின் கனஅளவு.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  },
  "c10_math_ch8": {
    "id": "note_c10_math_ch8",
    "chapterId": "c10_math_ch8",
    "classLevel": 10,
    "subjectId": "c10_maths",
    "titleEn": "Board Revision Notes: Chapter 8: Statistics and Probability",
    "titleTa": "தேர்வு திருப்புதல் குறிப்புகள்: பாடம் 8: புள்ளியியலும் நிகழ்தகவும்",
    "publishedAt": "23 Sep 2026",
    "publishedAtTa": "23 செப் 2026",
    "updatedAt": "23 Sep 2026",
    "updatedAtTa": "23 செப் 2026",
    "syllabusYear": "Samacheer Kalvi 2026–27",
    "syllabusYearTa": "சமச்சீர் கல்வி 2026–27",
    "reviewedBy": "TN SCERT Mathematics Panel",
    "reviewedByRole": "State Board Senior Mathematics Specialist",
    "reviewedAt": "23 Sep 2026",
    "reviewedAtTa": "23 செப் 2026",
    "status": "published",
    "version": "2.0.0",
    "changeNote": "Comprehensive bilingual theory, formulas, derivations, and board problem steps.",
    "changeNoteTa": "முழுமையான இருமொழி கணித தேற்றங்கள், சூத்திரங்கள் மற்றும் தீர்வு வழிகாட்டி.",
    "readTimeMinutes": 14,
    "bodyEn": "### 1. Measures of Dispersion\n- **Range ($R$):** $R = L - S$ (Largest value $-$ Smallest value).\n- **Coefficient of Range:** $\frac{L - S}{L + S}$.\n- **Standard Deviation ($\\sigma$):**\n  - Direct method: $\\sigma = \\sqrt{\frac{\\sum (x_i - \bar{x})^2}{n}}$.\n  - Assumed mean method: $\\sigma = \\sqrt{\frac{\\sum d^2}{n} - \\left(\frac{\\sum d}{n}\right)^2}$ where $d = x - A$.\n  - First $n$ natural numbers: $\\sigma = \\sqrt{\frac{n^2 - 1}{12}}$.\n\n### 2. Properties of Standard Deviation\n- If a constant $k$ is added/subtracted to every observation, $\\sigma$ remains unchanged.\n- If every observation is multiplied/divided by $k$, $\\sigma$ becomes $k\\sigma$ or $\\sigma / k$.\n\n### 3. Coefficient of Variation (C.V.)\n$$\text{C.V.} = \frac{\\sigma}{\bar{x}} \times 100\\%$$\n- Lower C.V. $\\implies$ More consistent, stable, or uniform.\n- Higher C.V. $\\implies$ More variable, less consistent.\n\n### 4. Probability Foundations\n- $0 \\leq P(A) \\leq 1$, $P(\\emptyset) = 0$, $P(S) = 1$.\n- $P(A') = 1 - P(A)$.\n- **Addition Theorem:** $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\n- For three events: $P(A \\cup B \\cup C) = P(A) + P(B) + P(C) - P(A \\cap B) - P(B \\cap C) - P(A \\cap C) + P(A \\cap B \\cap C)$.",
    "bodyTa": "### 1. திட்டவிலக்கம் மற்றும் மாறுபாட்டுக் கெழு\n- வீச்சு $R = L - S$.\n- முதல் $n$ இயல் எண்களின் திட்டவிலக்கம் $\\sigma = \\sqrt{\frac{n^2 - 1}{12}}$.\n- மாறுபாட்டுக் கெழு $\text{C.V.} = \frac{\\sigma}{\bar{x}} \times 100\\%$.\n- C.V. குறைவாக உள்ள தொடர் அதிக நிலைத்தன்மை (More Consistent) கொண்டது.\n\n### 2. நிகழ்தகவின் கூட்டல் தேற்றம்\n$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$.\nஒன்றையொன்று விலக்கும் நிகழ்ச்சிகளுக்கு: $P(A \\cup B) = P(A) + P(B)$.",
    "rememberBoxes": [
      {
        "tipEn": "Step-by-Step Scoring: Always write the relevant formula and define variables first; Tamil Nadu Board awards marks for formula and working steps even if arithmetic slips.",
        "tipTa": "படிநிலை மதிப்பெண்: எப்போதும் பொருத்தமான சூத்திரத்தை முதலில் எழுதி மாறிகளை வரையறுக்கவும்; தமிழ்நாடு அரசு பொதுத்தேர்வில் சூத்திரத்திற்கு தனி மதிப்பெண் உண்டு."
      },
      {
        "tipEn": "Unit Check: Ensure consistent units (e.g., convert cm and m before computing volume or area in Mensuration).",
        "tipTa": "அளவீட்டு அலகு: பரப்பளவு, கனஅளவு கணக்குகளில் அனைத்து அளவுகளும் ஒரே அலகில் (செ.மீ அல்லது மீ) இருப்பதை உறுதிசெய்க."
      }
    ],
    "revisions": [
      {
        "version": "2.0.0",
        "updatedAt": "23 Sep 2026",
        "updatedAtTa": "23 செப் 2026",
        "updatedBy": "TN State Board Mathematics Faculty",
        "changeNote": "Strictly aligned to Tamil Nadu Class 10 Public Exam blueprint.",
        "changeNoteTa": "10-ஆம் வகுப்பு பொதுத்தேர்வு கணித வினாத்தாள் அமைப்பின்படி வடிவமைக்கப்பட்டது."
      }
    ]
  }
};

export const CLASS_10_MATHS_SUMMARIES: Record<string, SummaryItem> = {
  "c10_math_ch1": {
    "id": "sum_c10_math_ch1",
    "chapterId": "c10_math_ch1",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Cartesian Product A × B consists of all ordered pairs (a, b) where a ∈ A and b ∈ B.",
      "A Relation R from A to B is any subset of the Cartesian product A × B.",
      "A Function f: A → B is a special relation where every element in domain A associates with exactly one element in co-domain B.",
      "Vertical line test determines if a curve represents a function; horizontal line test checks if a function is one-to-one (injective).",
      "Function composition: (f ∘ g)(x) = f(g(x)) is associative: f ∘ (g ∘ h) = (f ∘ g) ∘ h, but generally not commutative."
    ],
    "keyPointsTa": [
      "கார்ட்டீசியன் பெருக்கல் A × B என்பது A-ன் உறுப்புகள் மற்றும் B-ன் உறுப்புகளால் ஆன அனைத்து வரிசைச் சோடிகளின் கணமாகும்.",
      "A-விலிருந்து B-க்கான உறவு R என்பது A × B-ன் உட்கணமாகும்.",
      "சார்பு f: A → B என்பது மதிப்பகம் A-ல் உள்ள ஒவ்வொரு உறுப்பிற்கும் துணை மதிப்பகம் B-ல் ஒரே ஒரு நிழல் உரு மட்டுமே கொண்ட சிறப்பு உறவாகும்.",
      "செங்குத்துக் கோட்டுச் சோதனை ஒரு வரைபடம் சார்பா என அறியவும், கிடைமட்டக் கோட்டுச் சோதனை ஒன்றுக்கொன்றான சார்பா என அறியவும் பயன்படுகிறது.",
      "சார்புகளின் சேர்ப்பு சேர்ப்பு விதியை நிறைவு செய்யும்: f ∘ (g ∘ h) = (f ∘ g) ∘ h; ஆனால் பரிமாற்று விதியை பொதுவாக நிறைவு செய்யாது."
    ],
    "simpleExplanationEn": "Relations connect elements between sets as ordered pairs, while functions are well-behaved relations assigning exactly one output for each input.",
    "simpleExplanationTa": "கணங்களுக்கிடையேயான தொடர்பை வரிசைச் சோடிகளாகக் காட்டுவது உறவு; ஒவ்வொரு உள்ளீட்டிற்கும் ஒரே ஒரு வெளியீட்டை மட்டும் தருவது சார்பு.",
    "formulaCheatSheet": [
      {
        "formula": "n(A × B) = n(A) × n(B)",
        "note": "Cartesian Product cardinality"
      },
      {
        "formula": "R ⊆ A × B",
        "note": "A relation R from set A to set B is a subset of A × B"
      },
      {
        "formula": "f: A → B, f(x) = y",
        "note": "Function condition: each x ∈ A has a unique image y ∈ B"
      },
      {
        "formula": "(f ∘ g)(x) = f(g(x))",
        "note": "Composition of functions (not generally commutative: f ∘ g ≠ g ∘ f)"
      }
    ]
  },
  "c10_math_ch2": {
    "id": "sum_c10_math_ch2",
    "chapterId": "c10_math_ch2",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Euclid's Division Lemma states that for positive integers a and b, unique integers q and r exist such that a = bq + r where 0 ≤ r < b.",
      "Fundamental Theorem of Arithmetic: Every composite number can be uniquely factored into prime powers.",
      "Arithmetic Progression (AP): Difference between consecutive terms is constant (common difference d = t_{n} - t_{n-1}).",
      "Geometric Progression (GP): Ratio between consecutive terms is constant (common ratio r = t_{n} / t_{n-1}).",
      "Special series identities connect sum of first n natural numbers, their squares, and cubes: ∑ n^3 = (∑ n)^2."
    ],
    "keyPointsTa": [
      "யூக்ளிடின் வகுத்தல் துணைத்தேற்றம்: a மற்றும் b மிகை முழுக்கள் எனில், a = bq + r (0 ≤ r < b) என்றவாறு q, r என்ற முழுக்கள் அமையும்.",
      "அடிப்படை எண்ணியல் தேற்றம்: ஒவ்வொரு பகு எண்ணையும் பகா எண்களின் அடுக்குகளின் பெருக்கற்பலனாக ஒரே ஒரு வழியில் காரணிப்படுத்தலாம்.",
      "கூட்டுத்தொடர்வரிசை (AP): அடுத்தடுத்த உறுப்புகளின் வித்தியாசம் பொது வித்தியாசம் d ஆக மாறிலியாக இருக்கும்.",
      "பெருக்குத்தொடர்வரிசை (GP): அடுத்தடுத்த உறுப்புகளின் விகிதம் பொது விகிதம் r ஆக மாறிலியாக இருக்கும்.",
      "சிறப்புத் தொடர்கள்: முதல் n இயல் எண்களின் கனங்களின் கூடுதல் அவற்றின் கூடுதலின் வர்க்கத்திற்குச் சமம்: ∑ n^3 = (∑ n)^2."
    ],
    "simpleExplanationEn": "Numbers follow structural patterns: Euclid's division finds GCD, prime factorization breaks down numbers, and AP/GP model constant step and multiplicative growth.",
    "simpleExplanationTa": "எண்கள் ஒழுங்கமைக்கப்பட்டவை: யூக்ளிட் வகுத்தல் மீப்பெரு பொது வகுத்தியைக் காண்கிறது; AP மாறாத கூடுதல் வளர்ச்சியையும், GP பெருக்கு வளர்ச்சியையும் விளக்குகின்றன.",
    "formulaCheatSheet": [
      {
        "formula": "a = bq + r,  0 ≤ r < b",
        "note": "Euclid's Division Lemma (dividend = divisor × quotient + remainder)"
      },
      {
        "formula": "t_n = a + (n - 1)d",
        "note": "nth term of an Arithmetic Progression (AP)"
      },
      {
        "formula": "S_n = (n / 2)[2a + (n - 1)d] = (n / 2)(a + l)",
        "note": "Sum of first n terms of an AP"
      },
      {
        "formula": "t_n = a · r^(n - 1)",
        "note": "nth term of a Geometric Progression (GP)"
      },
      {
        "formula": "S_n = a(r^n - 1) / (r - 1),  r ≠ 1",
        "note": "Sum of first n terms of a GP"
      },
      {
        "formula": "∑ n = n(n + 1)/2,  ∑ n^2 = n(n + 1)(2n + 1)/6,  ∑ n^3 = [n(n + 1)/2]^2",
        "note": "Sum of special series"
      }
    ]
  },
  "c10_math_ch3": {
    "id": "sum_c10_math_ch3",
    "chapterId": "c10_math_ch3",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Linear systems in three variables represent planes in 3D space with unique, infinitely many, or no solutions.",
      "GCD and LCM of polynomials satisfy: f(x) × g(x) = GCD × LCM.",
      "Square roots of polynomials are evaluated through long division using descending powers of variables.",
      "Quadratic equations ax^2 + bx + c = 0 are solved via factorization, completing the square, or formula.",
      "Nature of roots is determined by discriminant Δ = b^2 - 4ac.",
      "Matrices organize data in rows and columns; matrix multiplication is non-commutative (AB ≠ BA in general)."
    ],
    "keyPointsTa": [
      "மூன்று மாறிகளில் அமைந்த நேரியல் சமன்பாட்டுத் தொகுப்பு ஒரு தீர்வு, எண்ணற்ற தீர்வுகள் அல்லது தீர்வு இல்லை என்ற நிலைகளைப் பெறலாம்.",
      "பல்லுறுப்புக் கோவைகளின் பெருக்கற்பலன் = மீ.பொ.வ × மீ.பொ.ம.",
      "பல்லுறுப்புக் கோவைகளின் வர்க்கமூலம் நீள்வகுத்தல் முறையில் இறங்கு வரிசைப் படிகளைப் பயன்படுத்தி கணக்கிடப்படுகிறது.",
      "இருபடிச் சமன்பாட்டின் மூலங்களின் தன்மையை தன்மைக்காட்டி Δ = b^2 - 4ac தீர்மானிக்கிறது.",
      "அணிகள்: அணி பெருக்கல் பொதுவாக பரிமாற்று விதியை நிறைவு செய்யாது (AB ≠ BA)."
    ],
    "simpleExplanationEn": "Algebra unlocks unknown values: from solving systems of equations and quadratic curves to organizing complex data via matrices.",
    "simpleExplanationTa": "தெரியாத மாறிகளின் மதிப்புகளைக் கண்டறியும் கலை இயற்கணிதம்; சமன்பாடுகள், மூலங்கள் மற்றும் அணிகள் மூலம் தரவுகளைக் கையாள்கிறது.",
    "formulaCheatSheet": [
      {
        "formula": "f(x) × g(x) = LCM(f, g) × GCD(f, g)",
        "note": "Relationship between GCD, LCM, and polynomials"
      },
      {
        "formula": "x = [-b ± √(b^2 - 4ac)] / (2a)",
        "note": "Quadratic formula for ax^2 + bx + c = 0"
      },
      {
        "formula": "Δ = b^2 - 4ac",
        "note": "Discriminant: Δ > 0 (real & unequal), Δ = 0 (real & equal), Δ < 0 (no real roots)"
      },
      {
        "formula": "α + β = -b/a,  αβ = c/a",
        "note": "Sum and product of roots of quadratic equation"
      },
      {
        "formula": "A(m × n) × B(n × p) = C(m × p)",
        "note": "Matrix multiplication requirement (inner dimensions must match)"
      }
    ]
  },
  "c10_math_ch4": {
    "id": "sum_c10_math_ch4",
    "chapterId": "c10_math_ch4",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Similar triangles possess corresponding angles that are equal and corresponding sides in proportional ratios.",
      "Basic Proportionality Theorem (BPT / Thales): A line drawn parallel to one side of a triangle divides the other two sides proportionally.",
      "Angle Bisector Theorem (ABT): The internal bisector of an angle of a triangle divides the opposite side internally in the ratio of the adjacent sides.",
      "Pythagoras Theorem: In a right-angled triangle, the square of the hypotenuse is equal to the sum of the squares of the other two sides.",
      "Alternate Segment Theorem: The angle between a tangent and a chord through the point of contact is equal to the angle in the alternate segment."
    ],
    "keyPointsTa": [
      "வடிவொத்த முக்கோணங்களின் ஒத்த கோணங்கள் சமம் மற்றும் ஒத்த பக்கங்கள் விகித சமத்தில் இருக்கும்.",
      "தேல்ஸ் தேற்றம் (அடிப்படை விகிதசமத் தேற்றம்): ஒரு முக்கோணத்தின் ஒரு பக்கத்திற்கு இணையாக வரையப்படும் கோடு மற்ற இரு பக்கங்களை சம விகிதத்தில் பிரிக்கும்.",
      "கோண இருசமவெட்டித் தேற்றம்: ஒரு முக்கோணத்தின் ஒரு கோணத்தின் உட்புற இருசமவெட்டியானது எதிர்ப்பக்கத்தை அக்கோணத்தை அடக்கிய பக்கங்களின் விகிதத்தில் உட்புறமாகப் பிரிக்கும்.",
      "பிதாகரஸ் தேற்றம்: ஒரு செங்கோண முக்கோணத்தில் கர்ணத்தின் வர்க்கம் மற்ற இரு பக்கங்களின் வர்க்கங்களின் கூடுதலுக்குச் சமம்.",
      "தொடுகோடு-நாண் தேற்றம் (மாற்று வட்டத்துண்டு தேற்றம்): தொடுகோட்டிற்கும் நாணிற்கும் இடைப்பட்ட கோணம் மாற்று வட்டத்துண்டில் அமையும் கோணத்திற்குச் சமம்."
    ],
    "simpleExplanationEn": "Geometry explores proportional shapes, right-triangle relationships, and circle theorems that provide the foundation for architecture and engineering.",
    "simpleExplanationTa": "வடிவியல் முக்கோணங்களின் வடிவொப்புமை, பிதாகரஸ் தேற்றம் மற்றும் வட்டத்தின் தொடுகோட்டுப் பண்புகளை விளக்குகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "AD/DB = AE/EC",
        "note": "Basic Proportionality Theorem (Thales Theorem: DE ∥ BC)"
      },
      {
        "formula": "BD/DC = AB/AC",
        "note": "Angle Bisector Theorem (AD bisects ∠BAC)"
      },
      {
        "formula": "AB^2 + AC^2 = BC^2",
        "note": "Pythagoras Theorem for right triangle at ∠A = 90°"
      },
      {
        "formula": "PT^2 = PA × PB",
        "note": "Tangent-Secant Theorem for circle tangents"
      },
      {
        "formula": "(AF/FB) × (BD/DC) × (CE/EA) = 1",
        "note": "Ceva's Theorem for concurrent cevians"
      }
    ]
  },
  "c10_math_ch5": {
    "id": "sum_c10_math_ch5",
    "chapterId": "c10_math_ch5",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Area of a triangle formed by three points (x1, y1), (x2, y2), (x3, y3) is zero if and only if the points are collinear.",
      "Slope (gradient) m = tan θ represents the steepness and direction of a line.",
      "Two non-vertical lines are parallel if their slopes are equal (m1 = m2).",
      "Two lines are perpendicular if the product of their slopes is -1 (m1 × m2 = -1).",
      "Forms of straight line: Slope-intercept (y = mx + c), Point-slope, Two-point, and Intercept form (x/a + y/b = 1)."
    ],
    "keyPointsTa": [
      "மூன்று புள்ளிகளால் அமைக்கப்படும் முக்கோணத்தின் பரப்பளவு பூச்சியம் எனில் அப்புள்ளிகள் ஒரே நேர்க்கோட்டில் அமையும் (ஒரு கோடமை புள்ளிகள்).",
      "சாய்வு m = tan θ = (y2 - y1) / (x2 - x1) நேர்க்கோட்டின் சாய்வு நிலையைத் தருகிறது.",
      "இரு கோடுகள் இணையானவை எனில் அவற்றின் சாய்வுகள் சமம்: m1 = m2.",
      "இரு கோடுகள் ஒன்றுக்கொன்று செங்குத்தானவை எனில் அவற்றின் சாய்வுகளின் பெருக்கற்பலன் -1: m1 × m2 = -1.",
      "நேர்க்கோட்டின் சமன்பாட்டு வடிவங்கள்: சாய்வு-வெட்டுத்துண்டு வடிவம் (y = mx + c), வெட்டுத்துண்டு வடிவம் (x/a + y/b = 1)."
    ],
    "simpleExplanationEn": "Coordinate geometry merges algebra with visual graphs, letting us calculate geometric areas, slopes, and straight line equations on a numerical grid.",
    "simpleExplanationTa": "ஆயத்தொலை வடிவியல் வரைபடத் தளத்தில் புள்ளிகளை வைத்து முக்கோணத்தின் பரப்பு, கோட்டின் சாய்வு மற்றும் சமன்பாடுகளைக் கணக்கிட உதவுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "Area = 1/2 |(x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2))|",
        "note": "Area of triangle with vertices (x1, y1), (x2, y2), (x3, y3)"
      },
      {
        "formula": "m = tan θ = (y2 - y1) / (x2 - x1)",
        "note": "Slope of a straight line"
      },
      {
        "formula": "m1 = m2  (Parallel),   m1 × m2 = -1  (Perpendicular)",
        "note": "Conditions for parallel and perpendicular lines"
      },
      {
        "formula": "y = mx + c,   y - y1 = m(x - x1),   x/a + y/b = 1",
        "note": "Standard forms of straight line equations"
      }
    ]
  },
  "c10_math_ch6": {
    "id": "sum_c10_math_ch6",
    "chapterId": "c10_math_ch6",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Trigonometric identities: sin^2 θ + cos^2 θ = 1, 1 + tan^2 θ = sec^2 θ, 1 + cot^2 θ = csc^2 θ.",
      "Line of sight connects the observer's eye to the target object.",
      "Angle of Elevation: Formed by the line of sight with the horizontal when viewing an object above eye level.",
      "Angle of Depression: Formed by the line of sight with the horizontal when viewing an object below eye level.",
      "Trigonometry computes inaccessible heights (mountains, lighthouses, towers) and distances using right-angled triangles."
    ],
    "keyPointsTa": [
      "முக்கோணவியல் முற்றொருமைகள்: sin^2 θ + cos^2 θ = 1, 1 + tan^2 θ = sec^2 θ, 1 + cot^2 θ = csc^2 θ.",
      "பார்வைக் கோடு: பார்வையாளரின் கண்ணையும் பார்க்கப்படும் பொருளையும் இணைக்கும் கோடு.",
      "ஏற்றக் கோணம்: கிடைத்தளப் பார்வைக்கோட்டிற்கு மேலே உள்ள ஒரு பொருளைப் பார்க்கும் போது உண்டாகும் கோணம்.",
      "இறக்கக் கோணம்: கிடைத்தளப் பார்வைக்கோட்டிற்கு கீழே உள்ள ஒரு பொருளைப் பார்க்கும் போது உண்டாகும் கோணம்.",
      "அணுக முடியாத மலைகள், கலங்கரை விளக்கங்கள் மற்றும் கோபுரங்களின் உயரங்களை முக்கோணவியல் மூலம் துல்லியமாகக் கணக்கிடலாம்."
    ],
    "simpleExplanationEn": "Trigonometry uses angle-side ratios to prove elegant algebraic identities and calculate real-world heights and distances without direct measurement.",
    "simpleExplanationTa": "முக்கோணவியல் கோணங்களுக்கும் பக்கங்களுக்கும் உள்ள விகிதங்களைப் பயன்படுத்தி அணுக முடியாத கோபுரங்கள் மற்றும் மலைகளின் உயரங்களை அளவிடுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "sin^2 θ + cos^2 θ = 1",
        "note": "Fundamental Pythagorean Trigonometric Identity"
      },
      {
        "formula": "1 + tan^2 θ = sec^2 θ,   1 + cot^2 θ = csc^2 θ",
        "note": "Derived Pythagorean identities"
      },
      {
        "formula": "tan θ = Opposite / Adjacent",
        "note": "Primary ratio for heights and distances"
      },
      {
        "formula": "Angle of Elevation = Angle of Depression",
        "note": "Alternate interior angles between horizontal sightlines"
      }
    ]
  },
  "c10_math_ch7": {
    "id": "sum_c10_math_ch7",
    "chapterId": "c10_math_ch7",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Curved Surface Area (CSA) measures outer lateral boundary; Total Surface Area (TSA) includes base covers.",
      "Right circular cone slant height l = √(r^2 + h^2); volume is exactly one-third of the enclosing cylinder.",
      "A solid sphere has surface area 4πr^2; its hemisphere has CSA 2πr^2 and TSA 3πr^2 (adding circular base πr^2).",
      "A frustum is formed by slicing a cone with a plane parallel to its base.",
      "Conservation of volume: When a solid is melted and recast into another shape, volume remains invariant."
    ],
    "keyPointsTa": [
      "வளைபரப்பு (CSA) பக்கவாட்டு பரப்பை அளவிடுகிறது; மொத்தப் புறப்பரப்பு (TSA) அடிப்பரப்பையும் உள்ளடக்கியது.",
      "நேர்வட்டக் கூம்பின் சாயுயரம் l = √(r^2 + h^2); அதன் கனஅளவு சம உயரமும் ஆரமும் கொண்ட உருளையின் கனஅளவில் மூன்றில் ஒரு பங்காகும்.",
      "திண்மக் கோளத்தின் புறப்பரப்பு 4πr^2; அரைக்கோளத்தின் வளைபரப்பு 2πr^2, மொத்தப் பரப்பு 3πr^2 ஆகும்.",
      "இடைக்கண்டம் என்பது கூம்பை அதன் அடிக்கு இணையாக ஒரு தளத்தால் வெட்டும்போது கிடைக்கும் அடிப்பகுதியாகும்.",
      "கனஅளவு மாறாத்தன்மை: ஒரு திண்மப் பொருளை உருக்கி மற்றொரு வடிவாக மாற்றும் போது அதன் கனஅளவு மாறாது சமமாக இருக்கும்."
    ],
    "simpleExplanationEn": "Mensuration measures three-dimensional solid shapes—calculating surface wraps, volume capacities, and melting recasts across cylinders, cones, and spheres.",
    "simpleExplanationTa": "அளவியல் உருளை, கூம்பு, கோளம் போன்ற முப்பரிமாண வடிவங்களின் வளைபரப்பு, மொத்தப் பரப்பு மற்றும் கனஅளவைக் கணக்கிடுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "Cylinder: CSA = 2πrh,  TSA = 2πr(h + r),  V = πr^2h",
        "note": "Right circular cylinder formulas"
      },
      {
        "formula": "Cone: CSA = πrl,  TSA = πr(l + r),  V = (1/3)πr^2h",
        "note": "Right circular cone formulas (l = √(r^2 + h^2))"
      },
      {
        "formula": "Sphere: Surface Area = 4πr^2,  V = (4/3)πr^3",
        "note": "Solid sphere formulas"
      },
      {
        "formula": "Hemisphere: CSA = 2πr^2,  TSA = 3πr^2,  V = (2/3)πr^3",
        "note": "Solid hemisphere formulas"
      },
      {
        "formula": "Frustum: V = (1/3)πh(R^2 + r^2 + Rr)",
        "note": "Frustum of a right circular cone"
      }
    ]
  },
  "c10_math_ch8": {
    "id": "sum_c10_math_ch8",
    "chapterId": "c10_math_ch8",
    "lastUpdatedAt": "23 Sep 2026",
    "lastUpdatedAtTa": "23 செப் 2026",
    "keyPointsEn": [
      "Measures of dispersion (Range, Variance, Standard Deviation) evaluate how data spreads around central values.",
      "Standard deviation σ measures average deviation from the mean; variance is σ^2.",
      "Coefficient of Variation CV = (σ / x̄) × 100% compares consistency: lower CV indicates greater consistency.",
      "Addition theorem of probability: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      "For mutually exclusive events, P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)."
    ],
    "keyPointsTa": [
      "பரவல் அளவைகள் (வீச்சு, விலக்க வர்க்கச் சராசரி, திட்டவிலக்கம்) தரவுகள் சராசரியைச் சுற்றி எவ்வாறு பரவியுள்ளன என்பதை அளவிடுகின்றன.",
      "திட்டவிலக்கம் σ என்பது கூட்டுச் சராசரியிலிருந்து தரவுப் புள்ளிகளின் சராசரி விலகலைக் குறிக்கிறது; அதன் வர்க்கம் விலக்க வர்க்கச் சராசரி (σ^2).",
      "மாறுபாட்டுக் கெழு CV = (σ / x̄) × 100% நிலைத்தன்மையை ஒப்பிட உதவுகிறது; குறைந்த CV கொண்ட தொடர் அதிக நிலைத்தன்மை கொண்டது.",
      "நிகழ்தகவின் கூட்டல் தேற்றம்: P(A ∪ B) = P(A) + P(B) - P(A ∩ B).",
      "ஒன்றையொன்று விலக்கும் நிகழ்ச்சிகளுக்கு P(A ∩ B) = 0, எனவே P(A ∪ B) = P(A) + P(B)."
    ],
    "simpleExplanationEn": "Statistics quantifies how scattered numbers are using standard deviation, while probability calculates the likelihood of events and their combinations.",
    "simpleExplanationTa": "புள்ளியியல் தரவுகளின் பரவலையும் நிலைத்தன்மையையும் அளவிடுகிறது; நிகழ்தகவு ஒரு நிகழ்வு நடைபெறுவதற்கான வாய்ப்புகளைக் கணக்கிடுகிறது.",
    "formulaCheatSheet": [
      {
        "formula": "Range = L - S,  Coefficient of Range = (L - S) / (L + S)",
        "note": "Measures of dispersion: Range"
      },
      {
        "formula": "σ = √[∑(x - x̄)^2 / n] = √[∑ d^2 / n - (∑ d / n)^2]",
        "note": "Standard Deviation formulas"
      },
      {
        "formula": "CV = (σ / x̄) × 100%",
        "note": "Coefficient of Variation (lower CV = more consistent)"
      },
      {
        "formula": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B)",
        "note": "Addition Theorem of Probability"
      },
      {
        "formula": "P(A ∪ B) = P(A) + P(B)  [Mutually Exclusive]",
        "note": "When events cannot occur simultaneously: A ∩ B = ∅"
      }
    ]
  }
};

export const CLASS_10_MATHS_QUIZZES: Record<string, ChapterQuiz> = {
  "c10_math_ch1": {
    "id": "quiz_c10_math_ch1",
    "chapterId": "c10_math_ch1",
    "titleEn": "Board Mastery Quiz: Chapter 1: Relations and Functions",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 1: உறவுகளும் சார்புகளும்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch1_1",
        "questionEn": "If n(A) = 3 and n(B) = 2, what is the total number of relations from A to B?",
        "questionTa": "n(A) = 3 மற்றும் n(B) = 2 எனில், A-விலிருந்து B-க்கு வரையறுக்கப்படும் மொத்த உறவுகளின் எண்ணிக்கை என்ன?",
        "optionsEn": [
          "6",
          "16",
          "64",
          "8"
        ],
        "optionsTa": [
          "6",
          "16",
          "64",
          "8"
        ],
        "correctAnswer": "64",
        "correctAnswerIndex": 2,
        "explanationEn": "Number of relations = 2^(p × q) = 2^(3 × 2) = 2^6 = 64.",
        "explanationTa": "உறவுகளின் எண்ணிக்கை = 2^(p × q) = 2^(3 × 2) = 2^6 = 64.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch1_2",
        "questionEn": "Which test is used to determine if a curve in a coordinate plane represents a function?",
        "questionTa": "ஆயத்தளத்தில் உள்ள ஒரு வரைபடம் சார்பினைக் குறிக்கிறதா என்பதை அறியப் பயன்படும் சோதனை எது?",
        "optionsEn": [
          "Horizontal Line Test",
          "Vertical Line Test",
          "Diagonal Test",
          "Circle Test"
        ],
        "optionsTa": [
          "கிடைமட்டக் கோட்டுச் சோதனை",
          "செங்குத்துக் கோட்டுச் சோதனை",
          "மூலைவிட்டச் சோதனை",
          "வட்டச் சோதனை"
        ],
        "correctAnswer": "Vertical Line Test",
        "correctAnswerIndex": 1,
        "explanationEn": "A curve represents a function if every vertical line intersects the curve at most once.",
        "explanationTa": "எந்த ஒரு செங்குத்துக் கோடும் வரைபடத்தை அதிகபட்சமாக ஒரு புள்ளியில் மட்டுமே வெட்டினால் அது சார்பாகும்.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch1_3",
        "questionEn": "If f(x) = 2x + 1 and g(x) = x^2, what is (f ∘ g)(3)?",
        "questionTa": "f(x) = 2x + 1 மற்றும் g(x) = x^2 எனில், (f ∘ g)(3)-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "49",
          "19",
          "37",
          "18"
        ],
        "optionsTa": [
          "49",
          "19",
          "37",
          "18"
        ],
        "correctAnswer": "19",
        "correctAnswerIndex": 1,
        "explanationEn": "g(3) = 3^2 = 9. Then f(g(3)) = f(9) = 2(9) + 1 = 19.",
        "explanationTa": "g(3) = 3^2 = 9. எனவே f(9) = 2(9) + 1 = 18 + 1 = 19.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch1_4",
        "questionEn": "A function where Range equals Co-domain is called:",
        "questionTa": "வீச்சகம் மற்றும் துணை மதிப்பகம் சமமாக உள்ள சார்பு எவ்வாறு அழைக்கப்படுகிறது?",
        "optionsEn": [
          "Identity function",
          "Onto function (Surjective)",
          "Constant function",
          "Into function"
        ],
        "optionsTa": [
          "சமனிச் சார்பு",
          "மேற்கோர்த்தல் சார்பு",
          "மாறிலிச் சார்பு",
          "உள்நோக்கிய சார்பு"
        ],
        "correctAnswer": "Onto function (Surjective)",
        "correctAnswerIndex": 1,
        "explanationEn": "A function f: A → B is onto (surjective) if every element in co-domain B is an image of some element in domain A.",
        "explanationTa": "துணை மதிப்பகத்தின் அனைத்து உறுப்புகளுக்கும் முன் உருக்கள் இருந்தால் அது மேற்கோர்த்தல் சார்பாகும்.",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch2": {
    "id": "quiz_c10_math_ch2",
    "chapterId": "c10_math_ch2",
    "titleEn": "Board Mastery Quiz: Chapter 2: Numbers and Sequences",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 2: எண்களும் தொடர்வரிசைகளும்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch2_1",
        "questionEn": "If 1 + 2 + 3 + ... + n = 66, what is the value of n?",
        "questionTa": "1 + 2 + 3 + ... + n = 66 எனில், n-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "10",
          "11",
          "12",
          "13"
        ],
        "optionsTa": [
          "10",
          "11",
          "12",
          "13"
        ],
        "correctAnswer": "11",
        "correctAnswerIndex": 1,
        "explanationEn": "n(n+1)/2 = 66 => n(n+1) = 132 => n = 11 because 11 × 12 = 132.",
        "explanationTa": "n(n+1)/2 = 66 => n(n+1) = 132 => n = 11 (ஏனெனில் 11 × 12 = 132).",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch2_2",
        "questionEn": "What is the 10th term of the AP: 5, 8, 11, 14, ...?",
        "questionTa": "5, 8, 11, 14, ... என்ற கூட்டுத்தொடரின் 10-வது உறுப்பு யாது?",
        "optionsEn": [
          "32",
          "35",
          "30",
          "38"
        ],
        "optionsTa": [
          "32",
          "35",
          "30",
          "38"
        ],
        "correctAnswer": "32",
        "correctAnswerIndex": 0,
        "explanationEn": "a = 5, d = 3. t_10 = a + 9d = 5 + 9(3) = 5 + 27 = 32.",
        "explanationTa": "a = 5, d = 3. t_10 = 5 + 9(3) = 5 + 27 = 32.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch2_3",
        "questionEn": "If 1^3 + 2^3 + ... + k^3 = 44100, what is 1 + 2 + ... + k?",
        "questionTa": "1^3 + 2^3 + ... + k^3 = 44100 எனில், 1 + 2 + ... + k-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "210",
          "200",
          "220",
          "190"
        ],
        "optionsTa": [
          "210",
          "200",
          "220",
          "190"
        ],
        "correctAnswer": "210",
        "correctAnswerIndex": 0,
        "explanationEn": "∑ k^3 = (∑ k)^2 => ∑ k = √44100 = 210.",
        "explanationTa": "∑ k^3 = (∑ k)^2 => ∑ k = √44100 = 210.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch2_4",
        "questionEn": "What is the remainder when 7^4 is evaluated modulo 5?",
        "questionTa": "7^4-ஐ 5-ஆல் வகுக்கும் போது கிடைக்கும் மீதி என்ன?",
        "optionsEn": [
          "1",
          "2",
          "3",
          "4"
        ],
        "optionsTa": [
          "1",
          "2",
          "3",
          "4"
        ],
        "correctAnswer": "1",
        "correctAnswerIndex": 0,
        "explanationEn": "7 ≡ 2 (mod 5). 7^4 ≡ 2^4 = 16 ≡ 1 (mod 5).",
        "explanationTa": "7 ≡ 2 (mod 5). 7^4 ≡ 16 ≡ 1 (mod 5).",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch3": {
    "id": "quiz_c10_math_ch3",
    "chapterId": "c10_math_ch3",
    "titleEn": "Board Mastery Quiz: Chapter 3: Algebra",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 3: இயற்கணிதம்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch3_1",
        "questionEn": "If the discriminant of ax^2 + bx + c = 0 is zero, the roots are:",
        "questionTa": "ax^2 + bx + c = 0 சமன்பாட்டின் தன்மைக்காட்டி பூச்சியம் எனில் மூலங்கள்:",
        "optionsEn": [
          "Real and unequal",
          "Real and equal",
          "Imaginary",
          "Undefined"
        ],
        "optionsTa": [
          "மெய் மற்றும் சமமற்றவை",
          "மெய் மற்றும் சமமானவை",
          "மெய்யற்றவை",
          "வரையறுக்கப்படாதவை"
        ],
        "correctAnswer": "Real and equal",
        "correctAnswerIndex": 1,
        "explanationEn": "When Δ = b^2 - 4ac = 0, both roots are equal to -b/(2a).",
        "explanationTa": "Δ = 0 எனில் இரு மூலங்களும் சமமாகவும் -b/(2a) ஆகவும் இருக்கும்.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch3_2",
        "questionEn": "If matrix A has order 2 × 3 and matrix B has order 3 × 4, what is the order of AB?",
        "questionTa": "அணி A-ன் வரிசை 2 × 3 மற்றும் அணி B-ன் வரிசை 3 × 4 எனில், AB-ன் வரிசை என்ன?",
        "optionsEn": [
          "2 × 4",
          "3 × 3",
          "2 × 3",
          "Cannot be multiplied"
        ],
        "optionsTa": [
          "2 × 4",
          "3 × 3",
          "2 × 3",
          "பெருக்க முடியாது"
        ],
        "correctAnswer": "2 × 4",
        "correctAnswerIndex": 0,
        "explanationEn": "Inner dimensions match (3 = 3), resulting in outer dimensions 2 × 4.",
        "explanationTa": "உள் வரிசைகள் 3 பொருந்துவதால், விளைவு அணியின் வரிசை 2 × 4 ஆகும்.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch3_3",
        "questionEn": "If α and β are roots of x^2 - 7x + 12 = 0, find α + β and αβ:",
        "questionTa": "x^2 - 7x + 12 = 0-ன் மூலங்கள் α, β எனில், α + β மற்றும் αβ-ன் மதிப்புகள்:",
        "optionsEn": [
          "7 and 12",
          "-7 and 12",
          "12 and 7",
          "7 and -12"
        ],
        "optionsTa": [
          "7 மற்றும் 12",
          "-7 மற்றும் 12",
          "12 மற்றும் 7",
          "7 மற்றும் -12"
        ],
        "correctAnswer": "7 and 12",
        "correctAnswerIndex": 0,
        "explanationEn": "α + β = -(-7)/1 = 7; αβ = 12/1 = 12.",
        "explanationTa": "மூலங்களின் கூடுதல் = -(-7)/1 = 7; மூலங்களின் பெருக்கல் = 12/1 = 12.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch3_4",
        "questionEn": "Which matrix property is generally FALSE?",
        "questionTa": "பொதுவாக தவறான அணிப் பண்பு எது?",
        "optionsEn": [
          "(A + B)^T = A^T + B^T",
          "(AB)^T = B^T A^T",
          "AB = BA",
          "(A^T)^T = A"
        ],
        "optionsTa": [
          "(A + B)^T = A^T + B^T",
          "(AB)^T = B^T A^T",
          "AB = BA",
          "(A^T)^T = A"
        ],
        "correctAnswer": "AB = BA",
        "correctAnswerIndex": 2,
        "explanationEn": "Matrix multiplication is generally non-commutative (AB ≠ BA).",
        "explanationTa": "அணிப் பெருக்கல் பரிமாற்றுப் பண்பை நிறைவு செய்யாது (AB ≠ BA).",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch4": {
    "id": "quiz_c10_math_ch4",
    "chapterId": "c10_math_ch4",
    "titleEn": "Board Mastery Quiz: Chapter 4: Geometry",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 4: வடிவியல்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch4_1",
        "questionEn": "In triangle ABC, DE ∥ BC. If AD = 3 cm, DB = 5 cm, and AE = 6 cm, find EC:",
        "questionTa": "முக்கோணம் ABC-ல் DE ∥ BC. AD = 3 செ.மீ, DB = 5 செ.மீ, AE = 6 செ.மீ எனில், EC-ன் நீளம் என்ன?",
        "optionsEn": [
          "10 cm",
          "8 cm",
          "9 cm",
          "12 cm"
        ],
        "optionsTa": [
          "10 செ.மீ",
          "8 செ.மீ",
          "9 செ.மீ",
          "12 செ.மீ"
        ],
        "correctAnswer": "10 cm",
        "correctAnswerIndex": 0,
        "explanationEn": "By Thales Theorem: AD/DB = AE/EC => 3/5 = 6/EC => EC = (6 × 5)/3 = 10 cm.",
        "explanationTa": "தேல்ஸ் தேற்றப்படி: AD/DB = AE/EC => 3/5 = 6/EC => EC = 10 செ.மீ.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch4_2",
        "questionEn": "The length of tangents drawn from an external point to a circle are:",
        "questionTa": "ஒரு வட்டத்தின் வெளிப்புள்ளியிலிருந்து அவ்வட்டத்திற்கு வரையப்படும் தொடுகோடுகளின் நீளங்கள்:",
        "optionsEn": [
          "Always equal",
          "Always unequal",
          "Parallel",
          "Perpendicular"
        ],
        "optionsTa": [
          "எப்பொழுதும் சமம்",
          "சமமற்றவை",
          "இணையானவை",
          "செங்குத்தானவை"
        ],
        "correctAnswer": "Always equal",
        "correctAnswerIndex": 0,
        "explanationEn": "Tangents drawn from an external point to a circle are equal in length (PA = PB).",
        "explanationTa": "வெளிப்புள்ளியிலிருந்து வட்டத்திற்கு வரையப்படும் இரு தொடுகோடுகளின் நீளங்களும் சமமாகும்.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch4_3",
        "questionEn": "In a right triangle ABC with ∠B = 90°, if AB = 6 cm and BC = 8 cm, what is AC?",
        "questionTa": "செங்கோண முக்கோணம் ABC-ல் ∠B = 90°. AB = 6 செ.மீ, BC = 8 செ.மீ எனில், கர்ணம் AC-ன் நீளம் யாது?",
        "optionsEn": [
          "10 cm",
          "14 cm",
          "12 cm",
          "7 cm"
        ],
        "optionsTa": [
          "10 செ.மீ",
          "14 செ.மீ",
          "12 செ.மீ",
          "7 செ.மீ"
        ],
        "correctAnswer": "10 cm",
        "correctAnswerIndex": 0,
        "explanationEn": "AC^2 = AB^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100 => AC = 10 cm.",
        "explanationTa": "AC^2 = 36 + 64 = 100 => AC = √100 = 10 செ.மீ.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch4_4",
        "questionEn": "If the ratio of sides of two similar triangles is 3:5, the ratio of their areas is:",
        "questionTa": "இரு வடிவொத்த முக்கோணங்களின் ஒத்த பக்கங்களின் விகிதம் 3:5 எனில், அவற்றின் பரப்பளவுகளின் விகிதம்:",
        "optionsEn": [
          "9:25",
          "3:5",
          "6:10",
          "27:125"
        ],
        "optionsTa": [
          "9:25",
          "3:5",
          "6:10",
          "27:125"
        ],
        "correctAnswer": "9:25",
        "correctAnswerIndex": 0,
        "explanationEn": "Ratio of areas is the square of the ratio of corresponding sides: 3^2 : 5^2 = 9:25.",
        "explanationTa": "பரப்பளவுகளின் விகிதம் பக்கங்களின் வர்க்க விகிதத்திற்கு சமம்: 3^2 : 5^2 = 9:25.",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch5": {
    "id": "quiz_c10_math_ch5",
    "chapterId": "c10_math_ch5",
    "titleEn": "Board Mastery Quiz: Chapter 5: Coordinate Geometry",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 5: ஆயத்தொலை வடிவியல்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch5_1",
        "questionEn": "What is the slope of a line with inclination angle θ = 45°?",
        "questionTa": "சாய்வுக் கோணம் θ = 45° கொண்ட நேர்க்கோட்டின் சாய்வு என்ன?",
        "optionsEn": [
          "0",
          "1",
          "√3",
          "Undefined"
        ],
        "optionsTa": [
          "0",
          "1",
          "√3",
          "வரையறுக்கப்படவில்லை"
        ],
        "correctAnswer": "1",
        "correctAnswerIndex": 1,
        "explanationEn": "Slope m = tan(45°) = 1.",
        "explanationTa": "சாய்வு m = tan(45°) = 1.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch5_2",
        "questionEn": "If line 1 has slope 2/3, what is the slope of a line perpendicular to it?",
        "questionTa": "ஒரு கோட்டின் சாய்வு 2/3 எனில், அதற்குச் செங்குத்தான கோட்டின் சாய்வு என்ன?",
        "optionsEn": [
          "2/3",
          "-3/2",
          "3/2",
          "-2/3"
        ],
        "optionsTa": [
          "2/3",
          "-3/2",
          "3/2",
          "-2/3"
        ],
        "correctAnswer": "-3/2",
        "correctAnswerIndex": 1,
        "explanationEn": "For perpendicular lines, m1 × m2 = -1 => m2 = -1 / (2/3) = -3/2.",
        "explanationTa": "செங்குத்துக் கோடுகளுக்கு m1 × m2 = -1 => m2 = -3/2.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch5_3",
        "questionEn": "If the area of a triangle formed by three points is 0, the points are:",
        "questionTa": "மூன்று புள்ளிகளால் உருவாகும் முக்கோணத்தின் பரப்பளவு பூச்சியம் எனில், அப்புள்ளிகள்:",
        "optionsEn": [
          "Collinear",
          "Equilateral",
          "Concyclic",
          "Vertices of a square"
        ],
        "optionsTa": [
          "ஒரே நேர்க்கோட்டமை புள்ளிகள்",
          "சமபக்க முக்கோணம்",
          "ஒரே வட்டத்தமை புள்ளிகள்",
          "சதுரத்தின் உச்சிகள்"
        ],
        "correctAnswer": "Collinear",
        "correctAnswerIndex": 0,
        "explanationEn": "Three points are collinear if and only if the area of the triangle formed by them is zero.",
        "explanationTa": "பரப்பளவு பூச்சியம் எனில் அப்புள்ளிகள் ஒரே நேர்க்கோட்டில் அமைகின்றன.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch5_4",
        "questionEn": "Find the x-intercept of the line 3x + 4y = 12:",
        "questionTa": "3x + 4y = 12 என்ற கோட்டின் x-வெட்டுத்துண்டு என்ன?",
        "optionsEn": [
          "3",
          "4",
          "12",
          "7"
        ],
        "optionsTa": [
          "3",
          "4",
          "12",
          "7"
        ],
        "correctAnswer": "4",
        "correctAnswerIndex": 1,
        "explanationEn": "Divide by 12: x/4 + y/3 = 1. So x-intercept a = 4.",
        "explanationTa": "12-ஆல் வகுக்க: x/4 + y/3 = 1 => x-வெட்டுத்துண்டு = 4.",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch6": {
    "id": "quiz_c10_math_ch6",
    "chapterId": "c10_math_ch6",
    "titleEn": "Board Mastery Quiz: Chapter 6: Trigonometry",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 6: முக்கோணவியல்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch6_1",
        "questionEn": "What is the value of (sec^2 θ - tan^2 θ)?",
        "questionTa": "(sec^2 θ - tan^2 θ)-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "optionsTa": [
          "0",
          "1",
          "-1",
          "2"
        ],
        "correctAnswer": "1",
        "correctAnswerIndex": 1,
        "explanationEn": "By standard identity, 1 + tan^2 θ = sec^2 θ => sec^2 θ - tan^2 θ = 1.",
        "explanationTa": "முற்றொருமைப்படி, sec^2 θ - tan^2 θ = 1.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch6_2",
        "questionEn": "A tower of height 30 m casts a shadow of 30√3 m on the ground. What is the sun's angle of elevation?",
        "questionTa": "30 மீ உயரமுள்ள கோபுரம் தரையில் 30√3 மீ நீளமுள்ள நிழலை ஏற்படுத்துகிறது எனில், சூரியனின் ஏற்றக்கோணம் என்ன?",
        "optionsEn": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "optionsTa": [
          "30°",
          "45°",
          "60°",
          "90°"
        ],
        "correctAnswer": "30°",
        "correctAnswerIndex": 0,
        "explanationEn": "tan θ = Opposite/Adjacent = 30 / (30√3) = 1/√3 => θ = 30°.",
        "explanationTa": "tan θ = 30 / (30√3) = 1/√3 => θ = 30°.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch6_3",
        "questionEn": "If tan θ = 3/4, what is the value of cos θ?",
        "questionTa": "tan θ = 3/4 எனில், cos θ-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "4/5",
          "3/5",
          "5/4",
          "5/3"
        ],
        "optionsTa": [
          "4/5",
          "3/5",
          "5/4",
          "5/3"
        ],
        "correctAnswer": "4/5",
        "correctAnswerIndex": 0,
        "explanationEn": "Opposite = 3, Adjacent = 4, Hypotenuse = √(3^2 + 4^2) = 5. cos θ = 4/5.",
        "explanationTa": "எதிர்ப்பக்கம் = 3, அடுத்துள்ள பக்கம் = 4, கர்ணம் = 5 => cos θ = 4/5.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch6_4",
        "questionEn": "The angle of elevation of the top of a cliff from a boat 100 m away is 45°. The height of the cliff is:",
        "questionTa": "ஒரு படகிலிருந்து 100 மீ தொலைவில் உள்ள செங்குத்துப் பாறையின் உச்சியை நோக்கும் ஏற்றக்கோணம் 45° எனில், பாறையின் உயரம்:",
        "optionsEn": [
          "50 m",
          "100 m",
          "100√3 m",
          "200 m"
        ],
        "optionsTa": [
          "50 மீ",
          "100 மீ",
          "100√3 மீ",
          "200 மீ"
        ],
        "correctAnswer": "100 m",
        "correctAnswerIndex": 1,
        "explanationEn": "tan 45° = height / 100 => 1 = height / 100 => height = 100 m.",
        "explanationTa": "tan 45° = 1 = உயரம் / 100 => உயரம் = 100 மீ.",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch7": {
    "id": "quiz_c10_math_ch7",
    "chapterId": "c10_math_ch7",
    "titleEn": "Board Mastery Quiz: Chapter 7: Mensuration",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 7: அளவியல்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch7_1",
        "questionEn": "The ratio of the volumes of a cylinder and a cone having identical base radius and height is:",
        "questionTa": "சம ஆரமும் சம உயரமும் கொண்ட ஓர் உருளை மற்றும் கூம்பின் கனஅளவுகளின் விகிதம்:",
        "optionsEn": [
          "1:3",
          "3:1",
          "1:1",
          "3:2"
        ],
        "optionsTa": [
          "1:3",
          "3:1",
          "1:1",
          "3:2"
        ],
        "correctAnswer": "3:1",
        "correctAnswerIndex": 1,
        "explanationEn": "V_cylinder / V_cone = (πr^2h) / [(1/3)πr^2h] = 3/1 = 3:1.",
        "explanationTa": "உருளையின் கனஅளவு / கூம்பின் கனஅளவு = (πr^2h) / [(1/3)πr^2h] = 3:1.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch7_2",
        "questionEn": "Find the slant height of a cone whose radius is 5 cm and height is 12 cm:",
        "questionTa": "ஆரம் 5 செ.மீ மற்றும் உயரம் 12 செ.மீ கொண்ட கூம்பின் சாயுயரம் காண்க:",
        "optionsEn": [
          "13 cm",
          "17 cm",
          "15 cm",
          "14 cm"
        ],
        "optionsTa": [
          "13 செ.மீ",
          "17 செ.மீ",
          "15 செ.மீ",
          "14 செ.மீ"
        ],
        "correctAnswer": "13 cm",
        "correctAnswerIndex": 0,
        "explanationEn": "l = √(r^2 + h^2) = √(5^2 + 12^2) = √(25 + 144) = √169 = 13 cm.",
        "explanationTa": "l = √(5^2 + 12^2) = √169 = 13 செ.மீ.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch7_3",
        "questionEn": "What is the Total Surface Area (TSA) of a solid hemisphere of radius r?",
        "questionTa": "ஆரம் r கொண்ட திண்ம அரைக்கோளத்தின் மொத்தப் புறப்பரப்பு என்ன?",
        "optionsEn": [
          "2πr^2",
          "3πr^2",
          "4πr^2",
          "πr^2"
        ],
        "optionsTa": [
          "2πr^2",
          "3πr^2",
          "4πr^2",
          "πr^2"
        ],
        "correctAnswer": "3πr^2",
        "correctAnswerIndex": 1,
        "explanationEn": "TSA = CSA (2πr^2) + circular flat base (πr^2) = 3πr^2.",
        "explanationTa": "மொத்தப் பரப்பு = வளைபரப்பு (2πr^2) + அடிப்பரப்பு (πr^2) = 3πr^2.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch7_4",
        "questionEn": "When a solid metallic sphere of radius 6 cm is melted into smaller cones, what quantity remains conserved?",
        "questionTa": "6 செ.மீ ஆரமுள்ள திண்ம உலோகக் கோளத்தை உருக்கி சிறிய கூம்புகளாக மாற்றும் போது மாறாமல் இருப்பது எது?",
        "optionsEn": [
          "Total Surface Area",
          "Total Volume",
          "Diameter",
          "Slant height"
        ],
        "optionsTa": [
          "மொத்தப் புறப்பரப்பு",
          "மொத்தக் கனஅளவு",
          "விட்டம்",
          "சாயுயரம்"
        ],
        "correctAnswer": "Total Volume",
        "correctAnswerIndex": 1,
        "explanationEn": "During melting and recasting, total mass and volume remain perfectly conserved.",
        "explanationTa": "உருக்கி வார்க்கும் போது பொருளின் மொத்தக் கனஅளவு மாறாது.",
        "difficulty": "hard"
      }
    ]
  },
  "c10_math_ch8": {
    "id": "quiz_c10_math_ch8",
    "chapterId": "c10_math_ch8",
    "titleEn": "Board Mastery Quiz: Chapter 8: Statistics and Probability",
    "titleTa": "முழுத் தேர்வு வினாடி வினா: பாடம் 8: புள்ளியியலும் நிகழ்தகவும்",
    "totalMarks": 20,
    "timeLimitMinutes": 10,
    "questions": [
      {
        "id": "q_c10_math_ch8_1",
        "questionEn": "What is the standard deviation of the first 11 natural numbers?",
        "questionTa": "முதல் 11 இயல் எண்களின் திட்டவிலக்கம் என்ன?",
        "optionsEn": [
          "√10",
          "√12",
          "10",
          "12"
        ],
        "optionsTa": [
          "√10",
          "√12",
          "10",
          "12"
        ],
        "correctAnswer": "√10",
        "correctAnswerIndex": 0,
        "explanationEn": "σ = √[(n^2 - 1) / 12] = √[(121 - 1) / 12] = √(120 / 12) = √10.",
        "explanationTa": "σ = √[(n^2 - 1) / 12] = √[(121 - 1) / 12] = √10.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch8_2",
        "questionEn": "If the standard deviation of a dataset is 4.5 and each value is increased by 5, what is the new standard deviation?",
        "questionTa": "ஒரு தரவின் திட்டவிலக்கம் 4.5. ஒவ்வொரு மதிப்புடனும் 5-ஐக் கூட்டினால் கிடைக்கும் புதிய திட்டவிலக்கம் யாது?",
        "optionsEn": [
          "9.5",
          "4.5",
          "22.5",
          "0.9"
        ],
        "optionsTa": [
          "9.5",
          "4.5",
          "22.5",
          "0.9"
        ],
        "correctAnswer": "4.5",
        "correctAnswerIndex": 1,
        "explanationEn": "Adding a constant to each observation does not change the standard deviation.",
        "explanationTa": "ஒவ்வொரு மதிப்புடனும் மாறிலியைக் கூட்டும்போது திட்டவிலக்கம் மாறாது, 4.5 ஆகவே இருக்கும்.",
        "difficulty": "easy"
      },
      {
        "id": "q_c10_math_ch8_3",
        "questionEn": "Team A has CV = 15% and Team B has CV = 25%. Which team is more consistent?",
        "questionTa": "அணி A-ன் மாறுபாட்டுக் கெழு 15%, அணி B-ன் மாறுபாட்டுக் கெழு 25% எனில், எந்த அணி அதிக நிலைத்தன்மை உடையது?",
        "optionsEn": [
          "Team A",
          "Team B",
          "Both are equally consistent",
          "Cannot be determined"
        ],
        "optionsTa": [
          "அணி A",
          "அணி B",
          "இரு அணிகளும் சம நிலைத்தன்மை கொண்டவை",
          "தீர்மானிக்க முடியாது"
        ],
        "correctAnswer": "Team A",
        "correctAnswerIndex": 0,
        "explanationEn": "Lower Coefficient of Variation indicates greater consistency; hence Team A is more consistent.",
        "explanationTa": "மாறுபாட்டுக் கெழு குறைவாக உள்ள அணியே அதிக நிலைத்தன்மை கொண்டது; எனவே அணி A.",
        "difficulty": "medium"
      },
      {
        "id": "q_c10_math_ch8_4",
        "questionEn": "If P(A) = 0.5, P(B) = 0.6, and P(A ∩ B) = 0.2, what is P(A ∪ B)?",
        "questionTa": "P(A) = 0.5, P(B) = 0.6 மற்றும் P(A ∩ B) = 0.2 எனில், P(A ∪ B)-ன் மதிப்பு என்ன?",
        "optionsEn": [
          "0.9",
          "0.7",
          "0.8",
          "1.1"
        ],
        "optionsTa": [
          "0.9",
          "0.7",
          "0.8",
          "1.1"
        ],
        "correctAnswer": "0.9",
        "correctAnswerIndex": 0,
        "explanationEn": "P(A ∪ B) = P(A) + P(B) - P(A ∩ B) = 0.5 + 0.6 - 0.2 = 0.9.",
        "explanationTa": "P(A ∪ B) = 0.5 + 0.6 - 0.2 = 0.9.",
        "difficulty": "hard"
      }
    ]
  }
};

export const CLASS_10_MATHS_DIAGRAMS: Record<string, SchematicDiagram> = {
  "c10_math_ch1": {
    "id": "diag_c10_math_ch1",
    "chapterId": "c10_math_ch1",
    "titleEn": "Formula & Concept Map: Chapter 1: Relations and Functions",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 1: உறவுகளும் சார்புகளும்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 1: Relations and Functions.",
    "descriptionTa": "பாடம் 1: உறவுகளும் சார்புகளும் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch1\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch1)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 1: Relations and Functions</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch1)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Cartesian Set A </text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">× B</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch1)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Relation R ⊆ A ×</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\"> B</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch1)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Function Mapping</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\"> f(x)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Cartesian Set A × B",
        "labelTa": "கார்ட்டீசியன் பெருக்கல்",
        "descriptionEn": "Complete collection of ordered pairs (x, y).",
        "descriptionTa": "அனைத்து வரிசைச் சோடிகளின் கணம்.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Relation R ⊆ A × B",
        "labelTa": "உறவு R",
        "descriptionEn": "Subset satisfying specific relation rules.",
        "descriptionTa": "குறிப்பிட்ட நிபந்தனையை நிறைவு செய்யும் உட்கணம்.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Function Mapping f(x)",
        "labelTa": "சார்பு அமைவு",
        "descriptionEn": "Every input mapped to exactly one output.",
        "descriptionTa": "ஒவ்வொரு உள்ளீட்டிற்கும் ஒரே ஒரு வெளியீடு அமைதல்.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch2": {
    "id": "diag_c10_math_ch2",
    "chapterId": "c10_math_ch2",
    "titleEn": "Formula & Concept Map: Chapter 2: Numbers and Sequences",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 2: எண்களும் தொடர்வரிசைகளும்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 2: Numbers and Sequences.",
    "descriptionTa": "பாடம் 2: எண்களும் தொடர்வரிசைகளும் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch2\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch2\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch2)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 2: Numbers and Sequences</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch2)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Euclid&apos;s Di</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">vision Step</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch2)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Arithmetic Step </text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">(+d)</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch2)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Geometric Scalin</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">g (×r)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Euclid's Division Step",
        "labelTa": "யூக்ளிட் வகுத்தல் படி",
        "descriptionEn": "a = bq + r remainder cascade.",
        "descriptionTa": "மீ.பொ.வ காணும் மீதி படிநிலை.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Arithmetic Step (+d)",
        "labelTa": "கூட்டுத்தொடர் வளர்ச்சி",
        "descriptionEn": "Constant step additive progression.",
        "descriptionTa": "மாறாத வித்தியாசக் கூடுதல் படி.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Geometric Scaling (×r)",
        "labelTa": "பெருக்குத்தொடர் வளர்ச்சி",
        "descriptionEn": "Exponential multiplicative growth.",
        "descriptionTa": "அடுக்குக்குறி பெருக்கல் வளர்ச்சி.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch3": {
    "id": "diag_c10_math_ch3",
    "chapterId": "c10_math_ch3",
    "titleEn": "Formula & Concept Map: Chapter 3: Algebra",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 3: இயற்கணிதம்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 3: Algebra.",
    "descriptionTa": "பாடம் 3: இயற்கணிதம் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch3\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch3\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch3)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 3: Algebra</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch3)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Parabolic Curve </text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">(Quadratic)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch3)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Discriminant Δ T</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">hreshold</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch3)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Matrix Grid Arra</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">y (A × B)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Parabolic Curve (Quadratic)",
        "labelTa": "பரவளைய வளைவரை",
        "descriptionEn": "Roots where curve cuts x-axis.",
        "descriptionTa": "x-அச்சை வெட்டும் மூலப் புள்ளிகள்.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Discriminant Δ Threshold",
        "labelTa": "தன்மைக்காட்டி Δ எல்லை",
        "descriptionEn": "Determines real vs complex root nature.",
        "descriptionTa": "மூலங்களின் தன்மையைத் தீர்மானித்தல்.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Matrix Grid Array (A × B)",
        "labelTa": "அணிப் பெருக்கல் வரிசை",
        "descriptionEn": "Row-by-column transformation.",
        "descriptionTa": "நிரை மற்றும் நிரல் உருமாற்றம்.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch4": {
    "id": "diag_c10_math_ch4",
    "chapterId": "c10_math_ch4",
    "titleEn": "Formula & Concept Map: Chapter 4: Geometry",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 4: வடிவியல்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 4: Geometry.",
    "descriptionTa": "பாடம் 4: வடிவியல் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch4\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch4\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch4)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 4: Geometry</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch4)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Thales Parallel </text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">Line (DE ∥ BC)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch4)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Pythagoras Right</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\"> Angle (90°)</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch4)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Circle Tangent P</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">oint (PA = PB)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Thales Parallel Line (DE ∥ BC)",
        "labelTa": "தேல்ஸ் இணைக்கோடு",
        "descriptionEn": "Proportional side divider ratio.",
        "descriptionTa": "பக்கங்களை சமவிகிதத்தில் பிரிக்கும் கோடு.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Pythagoras Right Angle (90°)",
        "labelTa": "பிதாகரஸ் செங்கோணம்",
        "descriptionEn": "Hypotenuse squared = sum of side squares.",
        "descriptionTa": "கர்ணம்^2 = பக்கம்1^2 + பக்கம்2^2.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Circle Tangent Point (PA = PB)",
        "labelTa": "தொடுகோடு சமநீளம்",
        "descriptionEn": "Radius perpendicular to tangent line.",
        "descriptionTa": "தொடுபுள்ளியில் ஆரம் செங்குத்தாக அமைதல்.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch5": {
    "id": "diag_c10_math_ch5",
    "chapterId": "c10_math_ch5",
    "titleEn": "Formula & Concept Map: Chapter 5: Coordinate Geometry",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 5: ஆயத்தொலை வடிவியல்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 5: Coordinate Geometry.",
    "descriptionTa": "பாடம் 5: ஆயத்தொலை வடிவியல் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch5\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch5\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch5)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 5: Coordinate Geometry</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch5)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Triangle Vertice</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">s (x, y)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch5)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Slope Inclinatio</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">n θ</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch5)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Intercepts (a, 0</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">) & (0, b)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Triangle Vertices (x, y)",
        "labelTa": "முக்கோண உச்சிகள்",
        "descriptionEn": "Determinant coordinate area calculation.",
        "descriptionTa": "ஆயத்தொலைவு முக்கோண பரப்பு கணக்கீடு.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Slope Inclination θ",
        "labelTa": "சாய்வுக் கோணம் θ",
        "descriptionEn": "Gradient m = tan θ measuring steepness.",
        "descriptionTa": "செங்குத்து/கிடைமட்ட விகித சாய்வு.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Intercepts (a, 0) & (0, b)",
        "labelTa": "வெட்டுத்துண்டுகள்",
        "descriptionEn": "Line crossing x and y axes.",
        "descriptionTa": "அச்சுகளை வெட்டும் வெட்டுத்துண்டு வடிவம்.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch6": {
    "id": "diag_c10_math_ch6",
    "chapterId": "c10_math_ch6",
    "titleEn": "Formula & Concept Map: Chapter 6: Trigonometry",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 6: முக்கோணவியல்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 6: Trigonometry.",
    "descriptionTa": "பாடம் 6: முக்கோணவியல் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch6\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch6\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch6)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 6: Trigonometry</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch6)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Angle of Elevati</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">on (Upward)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch6)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Tower Height (Op</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">posite)</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch6)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Baseline Distanc</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">e (Adjacent)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Angle of Elevation (Upward)",
        "labelTa": "ஏற்றக் கோணம்",
        "descriptionEn": "Sightline rising above horizontal.",
        "descriptionTa": "கிடைமட்டத்திற்கு மேல் பார்க்கும் கோணம்.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Tower Height (Opposite)",
        "labelTa": "கோபுர உயரம்",
        "descriptionEn": "Vertical height h being computed.",
        "descriptionTa": "செங்குத்து உயரம் h கணக்கீடு.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Baseline Distance (Adjacent)",
        "labelTa": "அடிப்பகுதித் தொலைவு",
        "descriptionEn": "Horizontal ground distance to target.",
        "descriptionTa": "தரையில் அமைந்த கிடைமட்டத் தொலைவு.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch7": {
    "id": "diag_c10_math_ch7",
    "chapterId": "c10_math_ch7",
    "titleEn": "Formula & Concept Map: Chapter 7: Mensuration",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 7: அளவியல்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 7: Mensuration.",
    "descriptionTa": "பாடம் 7: அளவியல் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch7\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch7\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch7)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 7: Mensuration</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch7)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Cylinder Wall (2</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">πrh)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch7)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Cone Slant l = √</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">(r^2 + h^2)</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch7)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Sphere Envelope </text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">(4πr^2)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Cylinder Wall (2πrh)",
        "labelTa": "உருளை வளைபரப்பு",
        "descriptionEn": "Curved lateral wrapping area.",
        "descriptionTa": "பக்கவாட்டு வளைபரப்பு பரப்பு.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Cone Slant l = √(r^2 + h^2)",
        "labelTa": "கூம்பு சாயுயரம்",
        "descriptionEn": "Pythagorean slant hypotenuse.",
        "descriptionTa": "செங்கோண முக்கோண சாயுயரம்.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Sphere Envelope (4πr^2)",
        "labelTa": "கோளப் புறப்பரப்பு",
        "descriptionEn": "Complete spherical 3D surface area.",
        "descriptionTa": "முழு முப்பரிமாண கோளப் புறப்பரப்பு.",
        "x": 80,
        "y": 70
      }
    ]
  },
  "c10_math_ch8": {
    "id": "diag_c10_math_ch8",
    "chapterId": "c10_math_ch8",
    "titleEn": "Formula & Concept Map: Chapter 8: Statistics and Probability",
    "titleTa": "கருத்து மற்றும் சூத்திர விளக்க வரைபடம்: பாடம் 8: புள்ளியியலும் நிகழ்தகவும்",
    "descriptionEn": "Interactive structural concept map detailing core theorems and methods in Chapter 8: Statistics and Probability.",
    "descriptionTa": "பாடம் 8: புள்ளியியலும் நிகழ்தகவும் பாடத்தின் முக்கிய தேற்றங்கள் மற்றும் முறைகளை விளக்கும் வரைபடம்.",
    "diagramType": "svg_labeled",
    "svgContent": "<svg viewBox=\"0 0 800 450\" xmlns=\"http://www.w3.org/2000/svg\" className=\"w-full h-auto rounded-xl shadow-lg border border-teal-700/50 bg-slate-900\">\n  <defs>\n    <linearGradient id=\"grad_c10_math_ch8\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n      <stop offset=\"0%\" stopColor=\"#064e3b\" stopOpacity=\"0.8\" />\n      <stop offset=\"100%\" stopColor=\"#0f172a\" stopOpacity=\"0.95\" />\n    </linearGradient>\n    <filter id=\"glow_c10_math_ch8\">\n      <feGaussianBlur stdDeviation=\"3\" result=\"coloredBlur\"/>\n      <feMerge>\n        <feMergeNode in=\"coloredBlur\"/>\n        <feMergeNode in=\"SourceGraphic\"/>\n      </feMerge>\n    </filter>\n  </defs>\n\n  <rect width=\"800\" height=\"450\" fill=\"url(#grad_c10_math_ch8)\" rx=\"12\" />\n  <rect x=\"20\" y=\"20\" width=\"760\" height=\"60\" rx=\"8\" fill=\"#132e27\" stroke=\"#10b981\" strokeWidth=\"1.5\" />\n  <text x=\"400\" y=\"45\" fill=\"#34d399\" fontSize=\"15\" fontWeight=\"bold\" textAnchor=\"middle\" letterSpacing=\"1\">CLASS 10 MATHEMATICS • SAMACHEER KALVI</text>\n  <text x=\"400\" y=\"68\" fill=\"#f0fdf4\" fontSize=\"18\" fontWeight=\"bold\" textAnchor=\"middle\">Chapter 8: Statistics and Probability</text>\n\n  <!-- Flow connecting arrows -->\n  <path d=\"M 230 225 L 370 225\" stroke=\"#10b981\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"370,221 380,225 370,229\" fill=\"#10b981\" />\n  <path d=\"M 430 225 L 570 225\" stroke=\"#14b8a6\" strokeWidth=\"2.5\" strokeDasharray=\"5,5\" />\n  <polygon points=\"570,221 580,225 570,229\" fill=\"#14b8a6\" />\n\n  <!-- Node 1 -->\n  <g transform=\"translate(100, 150)\" filter=\"url(#glow_c10_math_ch8)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#059669\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#064e3b\" stroke=\"#34d399\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#6ee7b7\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">1</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Normal Bell Dist</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">ribution (σ Spre</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#34d399\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">FOUNDATION</text>\n  </g>\n\n  <!-- Node 2 -->\n  <g transform=\"translate(335, 140)\" filter=\"url(#glow_c10_math_ch8)\">\n    <rect width=\"130\" height=\"170\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0d9488\" strokeWidth=\"2.5\" />\n    <circle cx=\"65\" cy=\"45\" r=\"26\" fill=\"#134e4a\" stroke=\"#2dd4bf\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#99f6e4\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">2</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Coefficient of V</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\">ariation (CV %)</text>\n    <rect x=\"25\" y=\"135\" width=\"80\" height=\"18\" rx=\"4\" fill=\"#0f766e\" />\n    <text x=\"65\" y=\"148\" fill=\"#f0fdf4\" fontSize=\"10\" fontWeight=\"bold\" textAnchor=\"middle\">KEY THEOREM</text>\n  </g>\n\n  <!-- Node 3 -->\n  <g transform=\"translate(570, 150)\" filter=\"url(#glow_c10_math_ch8)\">\n    <rect width=\"130\" height=\"150\" rx=\"10\" fill=\"#0f172a\" stroke=\"#0284c7\" strokeWidth=\"2\" />\n    <circle cx=\"65\" cy=\"45\" r=\"24\" fill=\"#0c4a6e\" stroke=\"#38bdf8\" strokeWidth=\"2\" />\n    <text x=\"65\" y=\"52\" fill=\"#bae6fd\" fontSize=\"16\" fontWeight=\"bold\" textAnchor=\"middle\">3</text>\n    <text x=\"65\" y=\"95\" fill=\"#e2e8f0\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">Venn Overlap P(A</text>\n    <text x=\"65\" y=\"112\" fill=\"#94a3b8\" fontSize=\"10\" textAnchor=\"middle\"> ∩ B)</text>\n    <rect x=\"25\" y=\"125\" width=\"80\" height=\"16\" rx=\"4\" fill=\"#1e293b\" />\n    <text x=\"65\" y=\"137\" fill=\"#38bdf8\" fontSize=\"9\" fontWeight=\"bold\" textAnchor=\"middle\">MASTERY</text>\n  </g>\n\n  <!-- Footer Tag -->\n  <rect x=\"200\" y=\"380\" width=\"400\" height=\"40\" rx=\"20\" fill=\"#064e3b\" stroke=\"#10b981\" strokeWidth=\"1\" />\n  <text x=\"400\" y=\"405\" fill=\"#d1fae5\" fontSize=\"12\" fontWeight=\"bold\" textAnchor=\"middle\">EduVoice Visual STEM Schematic • Board Standard</text>\n</svg>",
    "labels": [
      {
        "id": "l1",
        "labelEn": "Normal Bell Distribution (σ Spread)",
        "labelTa": "திட்டவிலக்கப் பரவல்",
        "descriptionEn": "Standard deviation spread around mean.",
        "descriptionTa": "சராசரியைச் சுற்றிய திட்டவிலக்கப் பரவல்.",
        "x": 20,
        "y": 30
      },
      {
        "id": "l2",
        "labelEn": "Coefficient of Variation (CV %)",
        "labelTa": "மாறுபாட்டுக் கெழு",
        "descriptionEn": "Comparing consistency across datasets.",
        "descriptionTa": "இரு தொடர்களின் நிலைத்தன்மையை ஒப்பிடுதல்.",
        "x": 50,
        "y": 50
      },
      {
        "id": "l3",
        "labelEn": "Venn Overlap P(A ∩ B)",
        "labelTa": "வென் பட வெட்டுப் பகுதி",
        "descriptionEn": "Joint event probability subtracted in union.",
        "descriptionTa": "சேர்ப்பு நிகழ்ச்சியில் கழிக்கப்படும் பொதுப் பகுதி.",
        "x": 80,
        "y": 70
      }
    ]
  }
};

export const CLASS_10_MATHS_VIDEOS: Record<string, VideoExplainer> = {
  "c10_math_ch1": {
    "id": "vid_c10_math_ch1",
    "chapterId": "c10_math_ch1",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 1: Relations and Functions",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 1: உறவுகளும் சார்புகளும்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "The Machine Metaphor",
        "titleTa": "இயந்திர உருவகம்",
        "visualDescription": "Animation of a functional vending machine: coin inserted (input), exactly one specific can drops (output).",
        "visualDescriptionEn": "Animation of a functional vending machine: coin inserted (input), exactly one specific can drops (output).",
        "narrationEn": "Think of a function like a reliable vending machine. Insert an input x, and you receive exactly one unique output f(x).",
        "narrationTa": "சார்பு என்பது ஒரு விற்பனை இயந்திரம் போன்றது; ஒரு உள்ளீட்டை செலுத்தினால் ஒரே ஒரு தனித்துவமான வெளியீடு மட்டுமே கிடைக்கும்.",
        "conceptKey": "Uniqueness of Output",
        "keyTakeaway": "Uniqueness of Output"
      },
      {
        "sceneNumber": 2,
        "titleEn": "Vertical Line Test",
        "titleTa": "செங்குத்துக் கோட்டுச் சோதனை",
        "visualDescription": "A luminous laser vertical line sweeping across a parabolic curve versus a circle.",
        "visualDescriptionEn": "A luminous laser vertical line sweeping across a parabolic curve versus a circle.",
        "narrationEn": "Sweep a vertical line across your graph. If it ever strikes two points at once, it fails the function test!",
        "narrationTa": "செங்குத்துக் கோடு ஒரு வரைபடத்தை இரு புள்ளிகளில் வெட்டினால் அது சார்பாக இருக்க முடியாது.",
        "conceptKey": "Graphical Function Test",
        "keyTakeaway": "Graphical Function Test"
      },
      {
        "sceneNumber": 3,
        "titleEn": "Function Composition Chain",
        "titleTa": "சார்புகளின் சேர்ப்பு",
        "visualDescription": "Two factory conveyor belts linked together: function g processes raw material, then passes it directly into function f.",
        "visualDescriptionEn": "Two factory conveyor belts linked together: function g processes raw material, then passes it directly into function f.",
        "narrationEn": "Function composition (f ∘ g)(x) links mathematical processes: g works first, and f processes its output!",
        "narrationTa": "சார்புகளின் சேர்ப்பு என்பது இரு கணித செயல்பாடுகளை வரிசையாக இணைப்பது: முதலில் g இயங்கி, பின் f இயங்குகிறது.",
        "conceptKey": "Chained Transformations",
        "keyTakeaway": "Chained Transformations"
      }
    ]
  },
  "c10_math_ch2": {
    "id": "vid_c10_math_ch2",
    "chapterId": "c10_math_ch2",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 2: Numbers and Sequences",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 2: எண்களும் தொடர்வரிசைகளும்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Euclid's GCD Staircase",
        "titleTa": "யூக்ளிடின் மீ.பொ.வ படிக்கட்டு",
        "visualDescription": "Visual measuring rod dividing two wooden beams until a perfect common divisor block remains.",
        "visualDescriptionEn": "Visual measuring rod dividing two wooden beams until a perfect common divisor block remains.",
        "narrationEn": "Euclid's lemma uses repeated division like a measuring tape, paring down remainders until the exact GCD emerges.",
        "narrationTa": "மீதியை மீண்டும் மீண்டும் வகுத்து மீப்பெரு பொது வகுத்தியை அடையும் எளிய வடிவியல் முறை.",
        "conceptKey": "Euclidean Algorithm",
        "keyTakeaway": "Euclidean Algorithm"
      },
      {
        "sceneNumber": 2,
        "titleEn": "The Staircase of AP",
        "titleTa": "கூட்டுத்தொடர் படிக்கட்டுகள்",
        "visualDescription": "Even steps rising steadily with a constant riser height d.",
        "visualDescriptionEn": "Even steps rising steadily with a constant riser height d.",
        "narrationEn": "An Arithmetic Progression climbs like an even flight of stairs: every step adds exactly d units of height.",
        "narrationTa": "கூட்டுத்தொடர் என்பது சீரான படிக்கட்டு போன்றது; ஒவ்வொரு படியும் d அளவு சீராக உயர்கிறது.",
        "conceptKey": "Linear Progression",
        "keyTakeaway": "Linear Progression"
      },
      {
        "sceneNumber": 3,
        "titleEn": "Geometric Doubling & Series",
        "titleTa": "பெருக்குத்தொடர் அசுர வளர்ச்சி",
        "visualDescription": "A golden grain of rice doubling on every chessboard square.",
        "visualDescriptionEn": "A golden grain of rice doubling on every chessboard square.",
        "narrationEn": "Geometric progressions multiply by r each step, generating rapid growth and stunning mathematical sums.",
        "narrationTa": "ஒவ்வொரு கட்டத்திலும் பெருகும் அரிசி தானியங்கள் போல, பெருக்குத்தொடர் வியக்கத்தக்க வேகத்தில் வளர்கிறது.",
        "conceptKey": "Exponential Growth",
        "keyTakeaway": "Exponential Growth"
      }
    ]
  },
  "c10_math_ch3": {
    "id": "vid_c10_math_ch3",
    "chapterId": "c10_math_ch3",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 3: Algebra",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 3: இயற்கணிதம்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "The Flight of a Projectile",
        "titleTa": "இருபடிப் பரவளையம்",
        "visualDescription": "A glowing soccer ball kicked in a parabolic arc matching y = -ax^2 + bx + c.",
        "visualDescriptionEn": "A glowing soccer ball kicked in a parabolic arc matching y = -ax^2 + bx + c.",
        "narrationEn": "Quadratic equations model reality: gravity pulls projectiles in smooth parabolas whose ground impacts are the roots!",
        "narrationTa": "எறியப்படும் பந்தின் பாதை இருபடிச் சமன்பாட்டின் பரவளையத்தைக் குறிக்கிறது; தரை தொடும் புள்ளிகளே மூலங்கள்!",
        "conceptKey": "Parabolic Trajectory",
        "keyTakeaway": "Parabolic Trajectory"
      },
      {
        "sceneNumber": 2,
        "titleEn": "The Discriminant Gateway",
        "titleTa": "தன்மைக்காட்டி வாயில்",
        "visualDescription": "A graph shifting vertically: crossing twice (Δ > 0), tangent once (Δ = 0), floating above (Δ < 0).",
        "visualDescriptionEn": "A graph shifting vertically: crossing twice (Δ > 0), tangent once (Δ = 0), floating above (Δ < 0).",
        "narrationEn": "Watch the parabola shift: cutting the x-axis twice gives two real roots, touching once means equal roots, floating above means no real roots.",
        "narrationTa": "வரைபடம் x-அச்சை இருமுறை வெட்டினால் இரு மூலங்கள்; தொட்டால் ஒரு மூலம்; தொடாவிட்டால் மெய் மூலங்கள் இல்லை.",
        "conceptKey": "Root Geometry",
        "keyTakeaway": "Root Geometry"
      },
      {
        "sceneNumber": 3,
        "titleEn": "Matrix Dimensions Dance",
        "titleTa": "அணிப் பெருக்கல் நடனம்",
        "visualDescription": "Row vectors rotating and computing dot products with column vectors to build the product matrix.",
        "visualDescriptionEn": "Row vectors rotating and computing dot products with column vectors to build the product matrix.",
        "narrationEn": "Matrix multiplication pairs rows with columns, transforming multidimensional data for games, physics, and graphics!",
        "narrationTa": "நிரைகளும் நிரல்களும் இணைந்து புதிய அணியை உருவாக்கும் விதம் கணினி வரைகலை மற்றும் அறிவியலின் அடித்தளம்.",
        "conceptKey": "Transformation Engines",
        "keyTakeaway": "Transformation Engines"
      }
    ]
  },
  "c10_math_ch4": {
    "id": "vid_c10_math_ch4",
    "chapterId": "c10_math_ch4",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 4: Geometry",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 4: வடிவியல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Thales at the Pyramids",
        "titleTa": "தேல்ஸின் அளவீட்டு ரகசியம்",
        "visualDescription": "Thales measuring the shadow of a staff to deduce the height of the Great Pyramid of Giza.",
        "visualDescriptionEn": "Thales measuring the shadow of a staff to deduce the height of the Great Pyramid of Giza.",
        "narrationEn": "Thales used the sun's parallel rays and shadow ratios to measure the colossal Great Pyramid without climbing it!",
        "narrationTa": "நிழலின் விகிதத்தைக் கொண்டு எகிப்தின் பிரம்மாண்ட பிரமிட்டின் உயரத்தை நிலத்தில் நின்றே அளந்த தேல்ஸ் முறை.",
        "conceptKey": "Proportional Triangles",
        "keyTakeaway": "Proportional Triangles"
      },
      {
        "sceneNumber": 2,
        "titleEn": "Pythagoras Square Proof",
        "titleTa": "பிதாகரஸ் சதுர நிரூபணம்",
        "visualDescription": "Water flowing from two smaller squares on legs filling the giant square on the hypotenuse perfectly.",
        "visualDescriptionEn": "Water flowing from two smaller squares on legs filling the giant square on the hypotenuse perfectly.",
        "narrationEn": "In every right triangle, the square built upon the hypotenuse matches the combined area of squares on the other two sides!",
        "narrationTa": "செங்கோண முக்கோணத்தில் கர்ணத்தின் மேல் அமையும் சதுரத்தின் பரப்பளவு மற்ற இரு சதுரங்களின் கூடுதலுக்குச் சமம்.",
        "conceptKey": "Geometric Invariance",
        "keyTakeaway": "Geometric Invariance"
      },
      {
        "sceneNumber": 3,
        "titleEn": "The Laser Tangent",
        "titleTa": "வட்டத்தின் தொடுகோடு",
        "visualDescription": "A circular radar beam touched by a straight tangent laser forming an exact 90-degree angle with the radius.",
        "visualDescriptionEn": "A circular radar beam touched by a straight tangent laser forming an exact 90-degree angle with the radius.",
        "narrationEn": "A tangent kisses the circle at exactly one point, always standing perpendicular to the radius.",
        "narrationTa": "தொடுகோடு வட்டத்தை ஒரே ஒரு புள்ளியில் மட்டுமே தொட்டுச் செல்லும்; ஆரத்துடன் 90 டிகிரி கோணத்தை உருவாக்கும்.",
        "conceptKey": "Perpendicular Tangency",
        "keyTakeaway": "Perpendicular Tangency"
      }
    ]
  },
  "c10_math_ch5": {
    "id": "vid_c10_math_ch5",
    "chapterId": "c10_math_ch5",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 5: Coordinate Geometry",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 5: ஆயத்தொலை வடிவியல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Shoelace Formula in Action",
        "titleTa": "காலணி வார்ப் பெருக்கல் முறை",
        "visualDescription": "Coordinates listed in a column with diagonal criss-cross shoelace arrows multiplying terms.",
        "visualDescriptionEn": "Coordinates listed in a column with diagonal criss-cross shoelace arrows multiplying terms.",
        "narrationEn": "The shoelace formula weaves through vertices in a circle, calculating exact polygon areas with simple arithmetic!",
        "narrationTa": "வரிசையாக எழுதப்பட்ட ஆயப்புள்ளிகளை குறுக்குப் பெருக்கல் செய்து முக்கோணத்தின் பரப்பளவை எளிதில் காணும் முறை.",
        "conceptKey": "Coordinate Area",
        "keyTakeaway": "Coordinate Area"
      },
      {
        "sceneNumber": 2,
        "titleEn": "The Slope Radar",
        "titleTa": "சாய்வு ரேடார்",
        "visualDescription": "A line tilting through 0°, 45°, 90° with a steepness readout showing 0, 1, and infinite slope.",
        "visualDescriptionEn": "A line tilting through 0°, 45°, 90° with a steepness readout showing 0, 1, and infinite slope.",
        "narrationEn": "Slope measures steepness: flat horizontal roads have slope 0, a 45-degree ramp has slope 1, and vertical cliffs have undefined slope!",
        "narrationTa": "கிடைமட்டக் கோட்டின் சாய்வு பூச்சியம்; 45 டிகிரி கோட்டில் சாய்வு 1; செங்குத்துக் கோட்டிற்கு சாய்வு வரையறுக்கப்படவில்லை.",
        "conceptKey": "Gradient Concept",
        "keyTakeaway": "Gradient Concept"
      },
      {
        "sceneNumber": 3,
        "titleEn": "The Perpendicular Flip",
        "titleTa": "செங்குத்து சாய்வின் தலைகீழ்",
        "visualDescription": "A vector of slope 2/3 rotating exactly 90 degrees into -3/2 with perpendicular grid ticks.",
        "visualDescriptionEn": "A vector of slope 2/3 rotating exactly 90 degrees into -3/2 with perpendicular grid ticks.",
        "narrationEn": "Whenever two lines cross at a perfect 90-degree right angle, their slopes are negative reciprocals: m1 times m2 equals minus 1!",
        "narrationTa": "இரு கோடுகள் செங்குத்தாக வெட்டும்போது, அவற்றின் சாய்வுகளின் பெருக்கற்பலன் மைனஸ் 1 ஆக மாறும்!",
        "conceptKey": "Orthogonal Geometry",
        "keyTakeaway": "Orthogonal Geometry"
      }
    ]
  },
  "c10_math_ch6": {
    "id": "vid_c10_math_ch6",
    "chapterId": "c10_math_ch6",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 6: Trigonometry",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 6: முக்கோணவியல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Measuring the Lighthouse",
        "titleTa": "கலங்கரை விளக்கத்தை அளத்தல்",
        "visualDescription": "A ship navigator peering through a sextant measuring angle θ to the lighthouse lantern.",
        "visualDescriptionEn": "A ship navigator peering through a sextant measuring angle θ to the lighthouse lantern.",
        "narrationEn": "From miles out at sea, a navigator measures the angle of elevation θ to compute exact distances and avoid reefs!",
        "narrationTa": "கடலில் செல்லும் மாலுமி ஏற்றக்கோணத்தை அளவிட்டு பாறைகளைத் தவிர்த்து தூரத்தைக் கணக்கிடும் முறை.",
        "conceptKey": "Navigational Trigonometry",
        "keyTakeaway": "Navigational Trigonometry"
      },
      {
        "sceneNumber": 2,
        "titleEn": "The Identity Circle",
        "titleTa": "முற்றொருமை வட்ட நடனம்",
        "visualDescription": "A unit circle with radius 1: x = cos θ, y = sin θ tracing the equation x^2 + y^2 = 1.",
        "visualDescriptionEn": "A unit circle with radius 1: x = cos θ, y = sin θ tracing the equation x^2 + y^2 = 1.",
        "narrationEn": "On a unit circle, sine and cosine form legs of a right triangle of hypotenuse 1, proving sin^2 θ + cos^2 θ = 1 for every angle!",
        "narrationTa": "ஓரலகு வட்டத்தில் sin மற்றும் cos கர்ணம் 1 கொண்ட செங்கோணத்தை உருவாக்குவதால் sin^2 θ + cos^2 θ = 1 எப்போதும் உண்மையாகும்.",
        "conceptKey": "Pythagorean Identity",
        "keyTakeaway": "Pythagorean Identity"
      },
      {
        "sceneNumber": 3,
        "titleEn": "Elevation vs Depression",
        "titleTa": "ஏற்றக்கோணம் vs இறக்கக்கோணம்",
        "visualDescription": "A hawk on a cliff looking down at a rabbit, while the rabbit looks up at the hawk: alternating angles highlighted.",
        "visualDescriptionEn": "A hawk on a cliff looking down at a rabbit, while the rabbit looks up at the hawk: alternating angles highlighted.",
        "narrationEn": "The eagle's angle of depression equals the rabbit's angle of elevation because horizontal sightlines are parallel!",
        "narrationTa": "கிடைமட்டக் கோடுகள் இணையானவை என்பதால் கழுகின் இறக்கக்கோணமும் முயலின் ஏற்றக்கோணமும் சமமாகும்!",
        "conceptKey": "Alternate Interior Angles",
        "keyTakeaway": "Alternate Interior Angles"
      }
    ]
  },
  "c10_math_ch7": {
    "id": "vid_c10_math_ch7",
    "chapterId": "c10_math_ch7",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 7: Mensuration",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 7: அளவியல்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "Unwrapping the Cylinder",
        "titleTa": "உருளையை விரித்தல்",
        "visualDescription": "A metallic cylinder unrolling like a sheet of paper into a rectangle of length 2πr and height h.",
        "visualDescriptionEn": "A metallic cylinder unrolling like a sheet of paper into a rectangle of length 2πr and height h.",
        "narrationEn": "Unroll a cylinder's curved wall and you get a flat rectangle! Its base is the circle's circumference 2πr and height is h, giving area 2πrh!",
        "narrationTa": "உருளையின் வளைந்த பகுதியை விரித்தால் அது 2πr நீளமும் h உயரமும் கொண்ட செவ்வகமாக மாறும்!",
        "conceptKey": "Lateral Surface Unfolding",
        "keyTakeaway": "Lateral Surface Unfolding"
      },
      {
        "sceneNumber": 2,
        "titleEn": "The Cone and Cylinder Ratio",
        "titleTa": "கூம்பும் உருளையும் - 1:3",
        "visualDescription": "Three identical cones filled with water poured one by one into an enclosing cylinder of identical height and radius.",
        "visualDescriptionEn": "Three identical cones filled with water poured one by one into an enclosing cylinder of identical height and radius.",
        "narrationEn": "Fill a cone with water and pour it into a matching cylinder: it takes exactly three cones to fill it, proving the one-third volume formula!",
        "narrationTa": "ஒரே அளவிலான கூம்பில் தண்ணீர் நிரப்பி உருளையில் ஊற்றினால், மூன்று முறை ஊற்றும்போது உருளை முழுமையாக நிறையும்!",
        "conceptKey": "One-Third Volume Relationship",
        "keyTakeaway": "One-Third Volume Relationship"
      },
      {
        "sceneNumber": 3,
        "titleEn": "Melting and Recasting Gold",
        "titleTa": "உலோகத்தை உருக்கி வார்த்தல்",
        "visualDescription": "A glowing spherical golden ball melting down into liquid and poured into ten miniature cones.",
        "visualDescriptionEn": "A glowing spherical golden ball melting down into liquid and poured into ten miniature cones.",
        "narrationEn": "Shapes change, but volume stays eternal! Melting solids conserves total liquid volume, letting us count recasts instantly.",
        "narrationTa": "வடிவம் மாறினாலும் கனஅளவு மாறாது! உருக்கி வார்க்கப்படும் போது மொத்தக் கனஅளவு சமமாக இருக்கும்.",
        "conceptKey": "Volume Invariance",
        "keyTakeaway": "Volume Invariance"
      }
    ]
  },
  "c10_math_ch8": {
    "id": "vid_c10_math_ch8",
    "chapterId": "c10_math_ch8",
    "titleEn": "Animated Storyboard Video Explainer: Chapter 8: Statistics and Probability",
    "titleTa": "அசைவூட்டக் காட்சி விளக்கக் காணொளி: பாடம் 8: புள்ளியியலும் நிகழ்தகவும்",
    "durationMinutes": 6,
    "durationSeconds": 360,
    "scenes": [
      {
        "sceneNumber": 1,
        "titleEn": "The Target Practice Analogy",
        "titleTa": "இலக்கு துப்பாக்கி சுடுதல்",
        "visualDescription": "Two archers: one with tightly clustered arrows (low σ), another with widely scattered arrows (high σ).",
        "visualDescriptionEn": "Two archers: one with tightly clustered arrows (low σ), another with widely scattered arrows (high σ).",
        "narrationEn": "Standard deviation measures precision! Tightly clustered shots have low deviation, while scattered shots have high dispersion.",
        "narrationTa": "திட்டவிலக்கம் என்பது துல்லியத்தின் அளவீடு; அம்புகள் நெருக்கமாகப் பாய்ந்தால் குறைந்த திட்டவிலக்கம், சிதறினால் அதிக திட்டவிலக்கம்!",
        "conceptKey": "Measure of Spread",
        "keyTakeaway": "Measure of Spread"
      },
      {
        "sceneNumber": 2,
        "titleEn": "Venn Diagrams & Probability",
        "titleTa": "வென் வரைபடமும் நிகழ்தகவும்",
        "visualDescription": "Two glowing circles overlapping: the intersection glow dims when subtracting double-counted overlap.",
        "visualDescriptionEn": "Two glowing circles overlapping: the intersection glow dims when subtracting double-counted overlap.",
        "narrationEn": "When combining probabilities P(A) and P(B), the middle overlap is counted twice—so we subtract P(A ∩ B) once!",
        "narrationTa": "இரு நிகழ்ச்சிகளையும் இணைக்கும்போது நடுவில் உள்ள பொதுப் பகுதி இருமுறை எண்ணப்படுவதால், அதை ஒருமுறை கழிக்க வேண்டும்!",
        "conceptKey": "Union Overlap Deduction",
        "keyTakeaway": "Union Overlap Deduction"
      },
      {
        "sceneNumber": 3,
        "titleEn": "The Cricket Consistency Test",
        "titleTa": "கிரிக்கெட் வீரரின் நிலைத்தன்மை",
        "visualDescription": "Two batsmen comparing scorecards: Player 1 has lower CV and wins Player of the Tournament for reliability.",
        "visualDescriptionEn": "Two batsmen comparing scorecards: Player 1 has lower CV and wins Player of the Tournament for reliability.",
        "narrationEn": "Who is the more dependable player? The one with the lower Coefficient of Variation wins for unmatched consistency!",
        "narrationTa": "யாருடைய ஆட்டம் அதிக நம்பகமானது? மாறுபாட்டுக் கெழு குறைவாக உள்ள வீரரே அதிக நிலைத்தன்மை கொண்டவர்!",
        "conceptKey": "CV Consistency Winner",
        "keyTakeaway": "CV Consistency Winner"
      }
    ]
  }
};
