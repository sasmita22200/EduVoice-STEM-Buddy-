import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Computer Science - Unit 1: Problem Solving Techniques
 * Chapters:
 * 1. Function (செயற்கூறு)
 * 2. Data Abstraction (தரவு அருவமாக்கம்)
 * 3. Scoping (வரையெல்லை)
 * 4. Algorithmic Strategies (நெறிமுறையின் உத்திகள்)
 */

export const CS_UNIT_1_CHAPTERS: Chapter[] = [
  {
    id: "c12_cs_u1_ch1",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 1,
    unitNameEn: "Unit 1: Problem Solving Techniques",
    unitNameTa: "அலகு 1: சிக்கல் தீர்க்கும் நுட்பங்கள்",
    chapterNumber: 1,
    titleEn: "Chapter 1: Function (செயற்கூறு)",
    titleTa: "பாடம் 1: செயற்கூறு",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u1_ch2",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 1,
    unitNameEn: "Unit 1: Problem Solving Techniques",
    unitNameTa: "அலகு 1: சிக்கல் தீர்க்கும் நுட்பங்கள்",
    chapterNumber: 2,
    titleEn: "Chapter 2: Data Abstraction (தரவு அருவமாக்கம்)",
    titleTa: "பாடம் 2: தரவு அருவமாக்கம்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u1_ch3",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 1,
    unitNameEn: "Unit 1: Problem Solving Techniques",
    unitNameTa: "அலகு 1: சிக்கல் தீர்க்கும் நுட்பங்கள்",
    chapterNumber: 3,
    titleEn: "Chapter 3: Scoping (வரையெல்லை)",
    titleTa: "பாடம் 3: வரையெல்லை",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u1_ch4",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 1,
    unitNameEn: "Unit 1: Problem Solving Techniques",
    unitNameTa: "அலகு 1: சிக்கல் தீர்க்கும் நுட்பங்கள்",
    chapterNumber: 4,
    titleEn: "Chapter 4: Algorithmic Strategies (நெறிமுறையின் உத்திகள்)",
    titleTa: "பாடம் 4: நெறிமுறையின் உத்திகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CS_UNIT_1_NOTES: Record<string, NoteItem> = {
  c12_cs_u1_ch1: {
    id: "note_c12_cs_u1_ch1",
    chapterId: "c12_cs_u1_ch1",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Function: Subroutines, Interfaces, and Pure Functions",
    titleTa: "செயற்கூறு: துணை நிரல்கள், இடைமுகங்கள் மற்றும் தூய செயற்கூறுகள்",
    publishedAt: "21 Sep 2026",
    publishedAtTa: "21 செப் 2026",
    updatedAt: "21 Sep 2026",
    updatedAtTa: "21 செப் 2026",
    syllabusYear: "Samacheer Kalvi 2026–27",
    syllabusYearTa: "சமச்சீர் கல்வி 2026–27",
    reviewedBy: "Dr. K. Anbarasan, M.Sc., M.Phil., Ph.D.",
    reviewedByRole: "Senior Subject Reviewer (TNSCERT Verified)",
    reviewedAt: "21 Sep 2026",
    reviewedAtTa: "21 செப் 2026",
    status: "published",
    version: "1.0",
    changeNote: "Aligned with Tamil Nadu State Board Class 12 CS textbook (Unit 1, Chapter 1).",
    changeNoteTa: "தமிழ்நாடு அரசு மேல்நிலை இரண்டாமாண்டு கணினி அறிவியல் பாடநூல் அலகு 1 அடிப்படையில் தயாரிக்கப்பட்டது.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Introduction to Subroutines and Functions
Subroutines (functions) are the basic building blocks of modern programming. A subroutine is a unit of code defined within a program structure that performs a specific task and can be invoked repeatedly.

### 2. Interface vs Implementation
* **Interface**: Specifies what operations an object or module can do without revealing how it accomplishes them. It forms a contract between caller and callee.
* **Implementation**: The actual algorithm and source code carrying out the interface specifications.

### 3. Parameters and Arguments
* **Parameters**: Variables defined in the function signature declaration (e.g. \`requires: b >= 0\`).
* **Arguments**: The actual data values supplied to the function upon execution.
* Parameter formats:
  1. Parameter without type: \`(requires: a > 0, b > 0)\`
  2. Parameter with explicit type: \`(a : int, b : int) : int\`

### 4. Pure vs Impure Functions
* **Pure Functions**: Return value depends solely on its arguments; zero side effects on external state or global memory (e.g. \`let square x = x * x\`).
* **Impure Functions**: May yield different results for identical arguments or modify external mutable variables (e.g. \`random()\`, date/time lookups, mutating global arrays).

### 5. Chameleon Problem (Algorithmic Invariant)
The chameleon puzzle involves chromatic transformations when chameleons of two colors meet and convert into the third color. Pure functions preserve state invariants to systematically determine when all chameleons can match a single uniform color.`,
    bodyTa: `### 1. துணை நிரல்கள் மற்றும் செயற்கூறுகள்
துணை நிரல்கள் (Subroutines) என்பவை நிரலின் அடிப்படை கட்டுமானத் தொகுதிகள் ஆகும். ஒரு குறிப்பிட்ட செயலைச் செய்ய மீண்டும் மீண்டும் அழைக்கப்படும் நிரல் தொகுதி செயற்கூறு எனப்படும்.

### 2. இடைமுகம் vs செயல்படுத்துதல் (Interface vs Implementation)
* **இடைமுகம் (Interface)**: ஒரு பொருள் என்ன செய்ய முடியும் என்பதை வெளிப்படுத்தும் ஒப்பந்தம். இது உள் அமைப்பை மறைக்கிறது.
* **செயல்படுத்துதல் (Implementation)**: இடைமுகத்தில் கூறப்பட்ட கட்டளைகளை நிறைவேற்றும் உண்மையான நிரல் குறியீடு ஆகும்.

### 3. அளபுருக்கள் மற்றும் செயலுருபுகள்
* **அளபுருக்கள் (Parameters)**: செயற்கூறு வரையறையில் உள்ள மாறிகள்.
* **செயலுருபுகள் (Arguments)**: செயற்கூறை அழைக்கும் போது வழங்கப்படும் உண்மையான மதிப்புகள்.

### 4. தூய மற்றும் தூய்மையற்ற செயற்கூறுகள்
* **தூய செயற்கூறு (Pure Function)**: ஒரே உள்ளீட்டிற்கு எப்போதும் ஒரே வெளியீட்டைத் தரும்; எவ்விதப் பக்க விளைவுகளையும் ஏற்படுத்தாது (எ.கா: \`square(x)\`).
* **தூய்மையற்ற செயற்கூறு (Impure Function)**: வெளிப்புற மாறிகள், சீரற்ற எண்களைச் சார்ந்து வெளியீட்டை மாற்றும்; பக்கவிளைவுகளை உண்டாக்கும்.`,
    keyFormulas: [
      {
        nameEn: "Function Specification Signature",
        nameTa: "செயற்கூறு வரையறை வடிவம்",
        formula: "func_name (param1: type1, param2: type2) : return_type",
        explanationEn: "Defines inputs, types, and return contract without exposing internal logic.",
        explanationTa: "உள் குறிமுறையைக் காட்டாமல் உள்ளீடுகள், தரவு வகைகள் மற்றும் வெளியீட்டை மட்டும் அறிவிக்கும் வடிவம்."
      }
    ],
    revisions: [
      {
        version: "1.0",
        updatedAt: "21 Sep 2026",
        updatedAtTa: "21 செப் 2026",
        updatedBy: "Dr. K. Anbarasan",
        changeNote: "Initial comprehensive board revision notes.",
        changeNoteTa: "முழுமையான தேர்வுப் பாடக் குறிப்புகள் சேர்க்கப்பட்டன."
      }
    ]
  },

  c12_cs_u1_ch2: {
    id: "note_c12_cs_u1_ch2",
    chapterId: "c12_cs_u1_ch2",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Data Abstraction: Constructors, Selectors, and Pairs",
    titleTa: "தரவு அருவமாக்கம்: ஆக்கிகள், தெரிவிப்பிகள் மற்றும் ஜோடிகள்",
    publishedAt: "21 Sep 2026",
    publishedAtTa: "21 செப் 2026",
    updatedAt: "21 Sep 2026",
    updatedAtTa: "21 செப் 2026",
    syllabusYear: "Samacheer Kalvi 2026–27",
    syllabusYearTa: "சமச்சீர் கல்வி 2026–27",
    reviewedBy: "Dr. K. Anbarasan, M.Sc., M.Phil., Ph.D.",
    reviewedByRole: "Senior Subject Reviewer (TNSCERT Verified)",
    reviewedAt: "21 Sep 2026",
    reviewedAtTa: "21 செப் 2026",
    status: "published",
    version: "1.0",
    changeNote: "Aligned with textbook Chapter 2: Abstract Data Types & concrete structures.",
    changeNoteTa: "அருவத் தரவு வகை, ஆக்கிகள் மற்றும் தெரிவிப்பிகள் பாடப்பகுதிக்கு ஏற்பத் தயாரிக்கப்பட்டது.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Abstract Data Type (ADT)
An Abstract Data Type is a type or class for objects whose behavior is defined by a set of values and operations. ADT focuses on what data represents rather than how it is stored.

### 2. Constructors and Selectors
* **Constructors**: Functions that create and bundle parts into an ADT instance.
  * Example: \`city = makecity(name, lat, lon)\` builds a city object.
* **Selectors**: Functions that query and retrieve components from an ADT instance.
  * Example: \`getname(city)\`, \`getlat(city)\`, \`getlon(city)\`.

### 3. Pairs and Representation
* A compound structure holding two values treated as a single entity is called a **Pair**.
* In Python, pairs can be implemented using lists \`[x, y]\` or tuples \`(x, y)\`.
* **Data Abstraction Barrier**: Application logic only calls selectors, allowing underlying storage to change from list to dictionary without rewriting external code.`,
    bodyTa: `### 1. அருவத் தரவு வகை (ADT)
அருவத் தரவு வகை (Abstract Data Type) என்பது மதிப்புகள் மற்றும் அதன் செயல்பாடுகளால் வரையறுக்கப்படும் தரவு அமைப்பாகும். இது நினைவகச் சேமிப்பு முறையை வெளிப்படுத்தாது.

### 2. ஆக்கிகள் மற்றும் தெரிவிப்பிகள்
* **ஆக்கி (Constructor)**: அருவத் தரவு வகையை உருவாக்கப் பயன்படும் செயற்கூறு (எ.கா: \`makecity(name, lat, lon)\`).
* **தெரிவிப்பி (Selector)**: உருவான பொருளிலிருந்து தகவல்களைப் பிரித்தெடுக்கப் பயன்படும் செயற்கூறு (எ.கா: \`getname(city)\`).

### 3. ஜோடிகள் (Pairs)
* இரு மதிப்புகளை இணைத்து ஒரே அலகாகக் கையாளும் முறை ஜோடி (Pair) எனப்படும். பைத்தானில் பட்டியல்கள் அல்லது வரிசைமுறைகள் மூலம் இது செயல்படுத்தப்படுகிறது.`,
    keyFormulas: [
      {
        nameEn: "Constructor-Selector Relationship",
        nameTa: "ஆக்கி-தெரிவிப்பி தொடர்பு",
        formula: "getX(make_point(x, y)) = x and getY(make_point(x, y)) = y",
        explanationEn: "Selectors faithfully recover the original constituent data supplied to the constructor.",
        explanationTa: "ஆக்கிக்கு அனுப்பிய மூல மதிப்புகளைத் தெரிவிப்பிகள் துல்லியமாக மீட்டெடுக்கின்றன."
      }
    ],
    revisions: [
      {
        version: "1.0",
        updatedAt: "21 Sep 2026",
        updatedAtTa: "21 செப் 2026",
        updatedBy: "Dr. K. Anbarasan",
        changeNote: "Initial comprehensive board revision notes.",
        changeNoteTa: "முழுமையான பாடக் குறிப்புகள் சேர்க்கப்பட்டன."
      }
    ]
  },

  c12_cs_u1_ch3: {
    id: "note_c12_cs_u1_ch3",
    chapterId: "c12_cs_u1_ch3",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Scoping: The LEGB Rule, Global and Nonlocal Namespaces",
    titleTa: "வரையெல்லை: LEGB விதி, முழுதளாவிய மற்றும் nonlocal பெயரெல்லைகள்",
    publishedAt: "21 Sep 2026",
    publishedAtTa: "21 செப் 2026",
    updatedAt: "21 Sep 2026",
    updatedAtTa: "21 செப் 2026",
    syllabusYear: "Samacheer Kalvi 2026–27",
    syllabusYearTa: "சமச்சீர் கல்வி 2026–27",
    reviewedBy: "Dr. K. Anbarasan, M.Sc., M.Phil., Ph.D.",
    reviewedByRole: "Senior Subject Reviewer (TNSCERT Verified)",
    reviewedAt: "21 Sep 2026",
    reviewedAtTa: "21 செப் 2026",
    status: "published",
    version: "1.0",
    changeNote: "Complete LEGB scope hierarchy with global and nonlocal examples.",
    changeNoteTa: "LEGB விதி, உலகளாவிய மற்றும் nonlocal பயன்பாடுகள் விரிவாகச் சேர்க்கப்பட்டன.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Scope Definition
Scope refers to the visibility and accessibility of variables, parameters, and functions across different blocks of a program.

### 2. The LEGB Scope Hierarchy
Python searches for names following the **LEGB Rule** strictly from inside out:
1. **L - Local**: Variables defined inside the active function or lambda.
2. **E - Enclosing**: Variables defined in the outer enclosing function in nested definitions.
3. **G - Global**: Variables defined at the top-level script outside all functions.
4. **B - Built-in**: Pre-assigned names loaded on interpreter startup (e.g. \`print\`, \`range\`, \`len\`).

### 3. Modifying Outer Scopes
* **global**: Declares that a variable inside a function refers to module-level global memory.
* **nonlocal**: Allows rebinding a variable in the nearest enclosing non-global scope of a nested function.`,
    bodyTa: `### 1. வரையெல்லை (Scope) அறிமுகம்
நிரலின் ஒரு பகுதியில் உள்ள மாறிகள் பிற பகுதிகளில் எந்த அளவிற்கு அணுகக்கூடியவை என்பதைக் குறிப்பது வரையெல்லை ஆகும்.

### 2. LEGB விதி
பைத்தானில் மாறிகளின் பெயர்கள் பின்வரும் நான்கு நிலைகளில் தேடப்படுகின்றன:
1. **L - Local (உள்ளமை)**: செயற்கூறுக்குள் அறிவிக்கப்படும் மாறிகள்.
2. **E - Enclosed (சூழ்ந்த)**: பின்னலான அமைப்பில் வெளி செயற்கூறின் மாறிகள்.
3. **G - Global (முழுதளாவிய)**: கோப்பின் மேல்மட்டத்தில் உள்ள உலகளாவிய மாறிகள்.
4. **B - Built-in (உள்ளிணைந்த)**: பைத்தான் தொடங்கும் போது ஏற்றப்படும் அடிப்படை பெயர்கள்.

### 3. global மற்றும் nonlocal
* \`global\`: உலகளாவிய மாறியைச் செயற்கூறுக்குள் மாற்றப் பயன்படுகிறது.
* \`nonlocal\`: பின்னலான வெளி செயற்கூறின் மாறியை மாற்றப் பயன்படுகிறது.`,
    keyFormulas: [
      {
        nameEn: "LEGB Scope Order",
        nameTa: "LEGB தேடல் வரிசை",
        formula: "Local -> Enclosing -> Global -> Built-in",
        explanationEn: "Search proceeds from innermost block outward to built-in system definitions.",
        explanationTa: "உள்ளார்ந்த உள்ளமை நிலையிலிருந்து வெளிப்புற உள்ளிணைந்த நிலை வரை தேடப்படுகிறது."
      }
    ],
    revisions: [
      {
        version: "1.0",
        updatedAt: "21 Sep 2026",
        updatedAtTa: "21 செப் 2026",
        updatedBy: "Dr. K. Anbarasan",
        changeNote: "Initial comprehensive board revision notes.",
        changeNoteTa: "முழுமையான பாடக் குறிப்புகள் சேர்க்கப்பட்டன."
      }
    ]
  },

  c12_cs_u1_ch4: {
    id: "note_c12_cs_u1_ch4",
    chapterId: "c12_cs_u1_ch4",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Algorithmic Strategies: Complexity, Search, Sort & Dynamic Programming",
    titleTa: "நெறிமுறையின் உத்திகள்: சிக்கல்தன்மை, தேடல், வரிசையாக்கம் & இயங்கு நிரலாக்கம்",
    publishedAt: "21 Sep 2026",
    publishedAtTa: "21 செப் 2026",
    updatedAt: "21 Sep 2026",
    updatedAtTa: "21 செப் 2026",
    syllabusYear: "Samacheer Kalvi 2026–27",
    syllabusYearTa: "சமச்சீர் கல்வி 2026–27",
    reviewedBy: "Dr. K. Anbarasan, M.Sc., M.Phil., Ph.D.",
    reviewedByRole: "Senior Subject Reviewer (TNSCERT Verified)",
    reviewedAt: "21 Sep 2026",
    reviewedAtTa: "21 செப் 2026",
    status: "published",
    version: "1.0",
    changeNote: "Searching, sorting algorithms and asymptotic complexity notations.",
    changeNoteTa: "தேடல், வரிசையாக்கம் மற்றும் Big-O கால சிக்கல்தன்மை சேர்க்கப்பட்டன.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Algorithm Characteristics
An algorithm is a finite sequence of unambiguous instructions. Characteristics: Input, Output, Finiteness, Definiteness, Effectiveness, Correctness, and Simplicity.

### 2. Time and Space Complexity
* **Time Complexity**: Number of fundamental operations executed.
* **Space Complexity**: Total RAM memory required (Fixed memory + Dynamic data memory).

### 3. Asymptotic Notations
* **Big-O ($O$)**: Worst-case upper bound.
* **Omega ($\\\\Omega$)**: Best-case lower bound.
* **Theta ($\\\\Theta$)**: Average-case tight bound.

### 4. Searching and Sorting Algorithms
* **Linear Search**: Sequentially inspects elements ($O(n)$).
* **Binary Search**: Halves sorted array at midpoint ($O(\\\\log n)$).
* **Bubble Sort**: Swaps adjacent unsorted pairs ($O(n^2)$).
* **Selection Sort**: Finds minimum and swaps to beginning ($O(n^2)$).
* **Insertion Sort**: Inserts elements into sorted prefix ($O(n^2)$).

### 5. Dynamic Programming
Solves problems by breaking them into overlapping subproblems and caching results via **Memoization** (e.g. Fibonacci series).`,
    bodyTa: `### 1. நெறிமுறை பண்புகள்
நெறிமுறை என்பது ஒரு சிக்கலைத் தீர்க்கும் வரையறுக்கப்பட்ட படிநிலைகள் ஆகும். முக்கிய பண்புகள்: உள்ளீடு, வெளியீடு, முடிவுறு தன்மை, தெளிவு, செயல்திறன்.

### 2. கால மற்றும் இடச் சிக்கல்தன்மை
* **கால சிக்கல்தன்மை**: நெறிமுறை இயங்க தேவைப்படும் செயல்பாடுகளின் எண்ணிக்கை.
* **இடச் சிக்கல்தன்மை**: நெறிமுறைக்கு தேவைப்படும் நினைவக இடம்.

### 3. தேடல் மற்றும் வரிசையாக்கம்
* **நேரியல் தேடல்**: வரிசையாகத் தேடுதல் ($O(n)$).
* **இருbinary தேடல்**: நடு உறுப்பைக் கொண்டு தேடுதல் ($O(\\\\log n)$).
* **குமிழி வரிசையாக்கம்**: அருகருகே உள்ள எண்களை இடமாற்றுதல் ($O(n^2)$).
* **இயங்கு நிரலாக்கம்**: முந்தைய தீர்வுகளைச் சேமித்து வைத்து (Memoization) தீர்க்கும் முறை.`,
    keyFormulas: [
      {
        nameEn: "Binary Search Complexity",
        nameTa: "இருbinary தேடல் சிக்கல்தன்மை",
        formula: "T(n) = O(log2 n) [Prerequisite: Sorted Data]",
        explanationEn: "Halving search space yields logarithmic worst-case running time.",
        explanationTa: "ஒவ்வொரு சுற்றிலும் பாதியாகப் பிரிப்பதால் O(log n) நேரத்தில் தேடுகிறது."
      }
    ],
    revisions: [
      {
        version: "1.0",
        updatedAt: "21 Sep 2026",
        updatedAtTa: "21 செப் 2026",
        updatedBy: "Dr. K. Anbarasan",
        changeNote: "Initial comprehensive board revision notes.",
        changeNoteTa: "முழுமையான பாடக் குறிப்புகள் சேர்க்கப்பட்டன."
      }
    ]
  }
};

export const CS_UNIT_1_SUMMARIES: Record<string, SummaryItem> = {
  c12_cs_u1_ch1: {
    id: "sum_c12_cs_u1_ch1",
    chapterId: "c12_cs_u1_ch1",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Functions encapsulate logic into modular units. Interfaces declare what a function does, while implementations handle internal computation. Pure functions guarantee no side effects.",
    simpleExplanationTa: "செயற்கூறுகள் நிரலை எளிய அலகுகளாகப் பிரிக்கின்றன. இடைமுகம் என்ன செய்ய வேண்டும் என்பதையும், செயல்படுத்தல் அதை எவ்வாறு செய்வது என்பதையும் குறிக்கும். தூய செயற்கூறுகள் பக்கவிளைவற்றவை.",
    keyPointsEn: [
      "Subroutines provide reusable code blocks.",
      "Interfaces decouple callers from internal algorithms.",
      "Pure functions are deterministic with zero side effects.",
      "Impure functions can mutate global state."
    ],
    keyPointsTa: [
      "செயற்கூறுகள் மீண்டும் பயன்படுத்தக்கூடிய நிரல் அலகுகள்.",
      "இடைமுகம் உள் செயல்பாடுகளை மறைக்கிறது.",
      "தூய செயற்கூறுகள் பக்கவிளைவுகள் அற்றவை.",
      "தூய்மையற்ற செயற்கூறுகள் உலகளாவிய மாறிகளை மாற்றக் கூடும்."
    ]
  },
  c12_cs_u1_ch2: {
    id: "sum_c12_cs_u1_ch2",
    chapterId: "c12_cs_u1_ch2",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Data Abstraction separates the conceptual use of data from its physical memory storage using Constructors to create objects and Selectors to extract components.",
    simpleExplanationTa: "தரவு அருவமாக்கம் என்பது தரவைப் பயன்படுத்துவதையும் அதைச் சேமிப்பதையும் தனித்தனியாகப் பிரிக்கும் உத்தி. ஆக்கிகள் உருவாக்குகின்றன, தெரிவிப்பிகள் தகவல்களைப் பிரித்தெடுக்கின்றன.",
    keyPointsEn: [
      "ADT specifies values and operations without revealing memory structures.",
      "Constructors assemble parts into ADT instances.",
      "Selectors safely read component attributes.",
      "Pairs unite two values into a compound unit."
    ],
    keyPointsTa: [
      "ADT நினைவக அமைப்பைக் காட்டாமல் செயல்பாடுகளை வரையறுக்கிறது.",
      "ஆக்கிகள் பொருள்களை உருவாக்குகின்றன.",
      "தெரிவிப்பிகள் உறுப்புத் தகவல்களைப் பெறுகின்றன.",
      "ஜோடிகள் இரு மதிப்புகளை ஒரே அலகாக இணைக்கின்றன."
    ]
  },
  c12_cs_u1_ch3: {
    id: "sum_c12_cs_u1_ch3",
    chapterId: "c12_cs_u1_ch3",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Variable scoping defines where variables can be accessed. Python follows the LEGB rule (Local, Enclosing, Global, Built-in) to resolve names from inside out.",
    simpleExplanationTa: "மாறிகளின் எல்லை அவற்றின் அணுகலைத் தீர்மானிக்கிறது. பைத்தான் LEGB விதிப்படி உள்ளமை, சூழ்ந்த, உலகளாவிய, உள்ளிணைந்த என்ற வரிசையில் மாறிகளைத் தேடுகிறது.",
    keyPointsEn: [
      "LEGB defines search order from innermost scope outward.",
      "Local variables exist only during function execution.",
      "'global' keyword enables writing to module variables.",
      "'nonlocal' allows modifying enclosing nested variables."
    ],
    keyPointsTa: [
      "LEGB விதி: உள்ளமை -> சூழ்ந்த -> உலகளாவிய -> உள்ளிணைந்த வரிசை.",
      "உள்ளமை மாறிகள் செயற்கூறு இயங்கும் போது மட்டுமே இருக்கும்.",
      "'global' சொல் உலகளாவிய மாறிகளை மாற்ற உதவுகிறது.",
      "'nonlocal' சொல் சூழ்ந்த வெளி செயற்கூறின் மாறிகளை மாற்றுகிறது."
    ]
  },
  c12_cs_u1_ch4: {
    id: "sum_c12_cs_u1_ch4",
    chapterId: "c12_cs_u1_ch4",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Algorithms solve problems via finite steps. Their efficiency is measured using Time and Space complexities, expressed through asymptotic Big-O notations.",
    simpleExplanationTa: "நெறிமுறைகள் வரையறுக்கப்பட்ட படிகளில் சிக்கலைத் தீர்க்கின்றன. கால மற்றும் இடச் சிக்கல்தன்மை மூலம் அவற்றின் வேகம் அளவிடப்படுகிறது.",
    keyPointsEn: [
      "Algorithms must have finiteness, definiteness, and correctness.",
      "Big-O evaluates worst-case running time upper bounds.",
      "Binary search achieves O(log n) efficiency on sorted lists.",
      "Dynamic programming uses memoization to store subproblem solutions."
    ],
    keyPointsTa: [
      "நெறிமுறைகள் முடிவுறு தன்மை மற்றும் தெளிவான படிகளைக் கொண்டிருக்க வேண்டும்.",
      "Big-O மிக மோசமான இயக்க நேரத்தைக் குறிக்கிறது.",
      "வரிசைப்படுத்தப்பட்ட பட்டியலில் இருbinary தேடல் O(log n) வேகமுடையது.",
      "இயங்கு நிரலாக்கம் முந்தைய தீர்வுகளை நினைவில் வைத்து வேகப்படுத்துகிறது."
    ]
  }
};

export const CS_UNIT_1_QUIZZES: Record<string, ChapterQuiz> = {
  c12_cs_u1_ch1: {
    id: "quiz_c12_cs_u1_ch1",
    chapterId: "c12_cs_u1_ch1",
    titleEn: "Function & Pure Functions Board Quiz",
    titleTa: "செயற்கூறு மற்றும் தூய செயற்கூறுகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which of the following is defined as the variables in a function definition?",
        questionTa: "செயற்கூறு வரையறையில் உள்ள மாறிகள் பின்வருவனவற்றுள் எவ்வாறு அழைக்கப்படுகின்றன?",
        optionsEn: ["Parameters", "Arguments", "Interface", "Constructors"],
        optionsTa: ["அளபுருக்கள் (Parameters)", "செயலுருபுகள் (Arguments)", "இடைமுகம் (Interface)", "ஆக்கிகள் (Constructors)"],
        correctAnswer: "Parameters",
        explanationEn: "Parameters are declared in the function definition, while arguments are passed upon execution.",
        explanationTa: "செயற்கூறு வரையறையில் உள்ள மாறிகள் அளபுருக்கள் எனப்படும்; அழைக்கும் போது அனுப்பப்படும் மதிப்புகள் செயலுருபுகள் ஆகும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "A function that has zero side effects and returns identical outputs for identical inputs is:",
        questionTa: "பக்க விளைவுகள் இல்லாததும், ஒரே மாதிரியான உள்ளீட்டிற்கு எப்போதும் ஒரே முடிவைத் தருவதுமான செயற்கூறு எது?",
        optionsEn: ["Pure Function", "Impure Function", "Dynamic Function", "Recursive Function"],
        optionsTa: ["தூய செயற்கூறு (Pure Function)", "தூய்மையற்ற செயற்கூறு (Impure Function)", "இயங்கு செயற்கூறு", "தற்சுழற்சி செயற்கூறு"],
        correctAnswer: "Pure Function",
        explanationEn: "Pure functions exhibit strict referential transparency with zero external side effects.",
        explanationTa: "தூய செயற்கூறுகள் எவ்விதப் பக்க விளைவுகளுமின்றி ஒரே உள்ளீட்டிற்கு நிலையான விடையை அளிக்கின்றன."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "An interface defines what an object does without exposing internal implementation details.",
        questionTa: "இடைமுகம் என்பது உள் செயல்படுத்தலை வெளிப்படுத்தாமல் ஒரு பொருள் என்ன செய்கிறது என்பதை மட்டுமே வரையறுக்கிறது.",
        correctAnswer: true,
        explanationEn: "True. Interfaces hide internal algorithmic details and expose callable behaviors.",
        explanationTa: "சரி. இடைமுகம் உள் நிரல் அமைப்பை மறைத்து என்ன செய்ய முடியும் என்பதை மட்டும் அறிவிக்கிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "In the function declaration 'let rec gcd a b := ...', what does 'rec' specify?",
        questionTa: "'let rec gcd a b := ...' என்ற செயற்கூறு அறிவிப்பில் 'rec' என்பது எதனைக் குறிக்கிறது?",
        optionsEn: ["Recursive function", "Record structure", "Receipt value", "Redundant parameter"],
        optionsTa: ["தற்சுழற்சி செயற்கூறு (Recursive function)", "பதிவு கட்டமைப்பு", "ரசீது மதிப்பு", "தேவையற்ற அளபுரு"],
        correctAnswer: "Recursive function",
        explanationEn: "The keyword 'rec' indicates that the function calls itself recursively.",
        explanationTa: "'rec' என்பது தன்னைத்தானே மீண்டும் அழைக்கும் தற்சுழற்சி செயற்கூறு என்பதைக் குறிக்கிறது."
      }
    ]
  },

  c12_cs_u1_ch2: {
    id: "quiz_c12_cs_u1_ch2",
    chapterId: "c12_cs_u1_ch2",
    titleEn: "Data Abstraction & ADT Board Quiz",
    titleTa: "தரவு அருவமாக்கம் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which functions are used to build an abstract data type?",
        questionTa: "அருவத் தரவு வகையை உருவாக்கப் பயன்படும் செயற்கூறுகள் எவை?",
        optionsEn: ["Constructors", "Selectors", "Destructors", "Iterators"],
        optionsTa: ["ஆக்கிகள் (Constructors)", "தெரிவிப்பிகள் (Selectors)", "அழிப்பிகள்", "மறுசெயலிகள்"],
        correctAnswer: "Constructors",
        explanationEn: "Constructors assemble and initialize Abstract Data Types.",
        explanationTa: "ஆக்கிகள் (Constructors) அருவத் தரவு வகையை உருவாக்குகின்றன."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Functions that retrieve information from an ADT without exposing storage structure are:",
        questionTa: "அருவத் தரவு வகையிலிருந்து தகவல்களைப் பிரித்தெடுக்கப் பயன்படும் செயற்கூறுகள் எவை?",
        optionsEn: ["Selectors", "Constructors", "Decorators", "Generators"],
        optionsTa: ["தெரிவிப்பிகள் (Selectors)", "ஆக்கிகள் (Constructors)", "அலங்கரிப்பிகள்", "உருவாக்கிகள்"],
        correctAnswer: "Selectors",
        explanationEn: "Selectors extract constituent attributes from an abstract compound object.",
        explanationTa: "தெரிவிப்பிகள் அருவப் பொருளிலிருந்து குறிப்பிட்ட தகவலைப் பிரித்தெடுக்கின்றன."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "Lists or tuples can be used to construct pairs in Python.",
        questionTa: "பைத்தானில் ஜோடிகளை (Pairs) உருவாக்க பட்டியல்கள் அல்லது வரிசைமுறைகள் பயன்படுகின்றன.",
        correctAnswer: true,
        explanationEn: "True. A 2-element list or tuple can naturally represent a coordinate pair.",
        explanationTa: "சரி. பைத்தானில் பட்டியல்கள் மற்றும் வரிசைமுறைகள் ஜோடிகளை உருவாக்க உதவுகின்றன."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "In 'city = makecity(name, lat, lon)', which identifier represents the constructor?",
        questionTa: "'city = makecity(name, lat, lon)' என்பதில் எது ஆக்கி ஆகும்?",
        optionsEn: ["makecity", "city", "lat", "lon"],
        optionsTa: ["makecity", "city", "lat", "lon"],
        correctAnswer: "makecity",
        explanationEn: "makecity is the constructor function that instantiates the city ADT.",
        explanationTa: "makecity என்பது நகருக்கான தரவை உருவாக்கும் ஆக்கிச் செயற்கூறு ஆகும்."
      }
    ]
  },

  c12_cs_u1_ch3: {
    id: "quiz_c12_cs_u1_ch3",
    chapterId: "c12_cs_u1_ch3",
    titleEn: "Scoping & LEGB Rule Board Quiz",
    titleTa: "வரையெல்லை மற்றும் LEGB விதி வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What does LEGB rule stand for in Python variable scoping?",
        questionTa: "பைத்தான் வரையெல்லையில் LEGB என்பதன் விரிவாக்கம் என்ன?",
        optionsEn: ["Local, Enclosed, Global, Built-in", "Logical, External, Global, Byte", "Linear, Enclosing, Generic, Base", "Local, Extended, General, Built-in"],
        optionsTa: ["Local, Enclosed, Global, Built-in (உள்ளமை, சூழ்ந்த, உலகளாவிய, உள்ளிணைந்த)", "Logical, External, Global, Byte", "Linear, Enclosing, Generic, Base", "Local, Extended, General, Built-in"],
        correctAnswer: "Local, Enclosed, Global, Built-in",
        explanationEn: "LEGB defines the name resolution order: Local -> Enclosed -> Global -> Built-in.",
        explanationTa: "LEGB என்பது உள்ளமை, சூழ்ந்த, உலகளாவிய, உள்ளிணைந்த என்ற தேடல் வரிசையைக் குறிக்கிறது."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which keyword modifies a variable declared in an outer enclosing function?",
        questionTa: "வெளிப்புற சூழ்ந்த செயற்கூறில் உள்ள மாறியின் மதிப்பை மாற்ற உதவும் சிறப்புச் சொல் எது?",
        optionsEn: ["nonlocal", "global", "static", "extern"],
        optionsTa: ["nonlocal", "global", "static", "extern"],
        correctAnswer: "nonlocal",
        explanationEn: "nonlocal allows rebinding variables in nearest enclosing non-global scopes.",
        explanationTa: "'nonlocal' என்பது சூழ்ந்த வெளிப்புற செயற்கூறின் மாறிகளை மாற்ற உதவுகிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "Built-in scope contains core functions like print() and len() loaded automatically on interpreter start.",
        questionTa: "உள்ளிணைந்த வரையெல்லையில் உள்ள print(), len() போன்ற செயற்கூறுகள் தானாகவே ஏற்றப்படுகின்றன.",
        correctAnswer: true,
        explanationEn: "True. Built-in scope is loaded during interpreter initialization.",
        explanationTa: "சரி. உள்ளிணைந்த செயற்கூறுகள் மொழி துவங்கும் போதே தானாகவே ஏற்றப்படுகின்றன."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "If a variable exists in both Local and Global scopes, which one is accessed inside the function?",
        questionTa: "ஒரே பெயருடைய மாறி உள்ளமை மற்றும் உலகளாவிய இரண்டிலும் இருந்தால் செயற்கூறுக்குள் எது அணுகப்படும்?",
        optionsEn: ["Local variable", "Global variable", "Throws syntax error", "Random variable"],
        optionsTa: ["உள்ளமை மாறி (Local)", "உலகளாவிய மாறி (Global)", "பிழையைக் காட்டும்", "ஏதேனும் ஒன்று"],
        correctAnswer: "Local variable",
        explanationEn: "Local scope has highest priority and shadows outer variables unless 'global' is declared.",
        explanationTa: "உள்ளமை மாறிக்கு அதிக முன்னுரிமை இருப்பதால் அதுவே முதலில் அணுகப்படும்."
      }
    ]
  },

  c12_cs_u1_ch4: {
    id: "quiz_c12_cs_u1_ch4",
    chapterId: "c12_cs_u1_ch4",
    titleEn: "Algorithmic Strategies Board Quiz",
    titleTa: "நெறிமுறையின் உத்திகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What is the worst-case time complexity of Binary Search?",
        questionTa: "இருbinary தேடலின் மிக மோசமான நிலை கால சிக்கல்தன்மை என்ன?",
        optionsEn: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
        optionsTa: ["O(log n)", "O(n)", "O(n^2)", "O(1)"],
        correctAnswer: "O(log n)",
        explanationEn: "Binary search halves the search space each comparison, achieving O(log n) performance.",
        explanationTa: "ஒவ்வொரு படியிலும் பட்டியலை பாதியாகப் பிரிப்பதால் O(log n) கால அளவு ஆகும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which asymptotic notation represents the upper bound and worst-case performance of an algorithm?",
        questionTa: "நெறிமுறையின் மிக மோசமான நிலை மற்றும் மேல் வரம்பைக் குறிக்கும் குறியீடு எது?",
        optionsEn: ["Big-O", "Omega", "Theta", "Alpha"],
        optionsTa: ["Big-O", "Omega (ஒமேகா)", "Theta (தீட்டா)", "Alpha"],
        correctAnswer: "Big-O",
        explanationEn: "Big-O provides an asymptotic upper bound for growth rate.",
        explanationTa: "Big-O என்பது நெறிமுறையின் மேல் வரம்பைக் குறிக்கும் குறியீடு ஆகும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "Binary search can be applied on unsorted lists without prior sorting.",
        questionTa: "வரிசைப்படுத்தப்படாத பட்டியலில் இருbinary தேடலை நேரடியாகப் பயன்படுத்த முடியும்.",
        correctAnswer: false,
        explanationEn: "False! Binary search strictly requires elements to be sorted beforehand.",
        explanationTa: "தவறு! இருbinary தேடலுக்கு பட்டியல் முன்கூட்டியே வரிசைப்படுத்தப்பட்டிருக்க வேண்டும்."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Storing already computed results of subproblems to avoid recalculation in Dynamic Programming is called:",
        questionTa: "இயங்கு நிரலாக்கத்தில் மீண்டும் கணக்கிடுவதைத் தவிர்க்க முந்தைய தீர்வுகளைச் சேமிக்கும் முறை எவ்வாறு அழைக்கப்படுகிறது?",
        optionsEn: ["Memoization", "Virtualization", "Compilation", "Pipelining"],
        optionsTa: ["Memoization (நினைவிருத்தல்)", "Virtualization (மெய்நிகராக்கம்)", "Compilation (தொகுத்தல்)", "Pipelining"],
        correctAnswer: "Memoization",
        explanationEn: "Memoization caches the output of subproblems for instant lookup.",
        explanationTa: "துணைப் பிரச்சனைகளின் தீர்வுகளைச் சேமித்து வைப்பது Memoization எனப்படும்."
      }
    ]
  }
};

export const CS_UNIT_1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_cs_u1_ch1: {
    id: "diag_c12_cs_u1_ch1",
    chapterId: "c12_cs_u1_ch1",
    titleEn: "Function Architecture: Interface vs Implementation & Pure Mapping",
    titleTa: "செயற்கூறு கட்டமைப்பு: இடைமுகம் மற்றும் செயல்படுத்துதல் வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="50" width="160" height="200" rx="16" fill="#eff6ff" stroke="#3b82f6" stroke-width="3"/>
      <text x="110" y="85" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="16">Interface</text>
      <text x="110" y="115" text-anchor="middle" fill="#475569" font-size="12">Name: square(x)</text>
      <text x="110" y="140" text-anchor="middle" fill="#475569" font-size="12">Requires: int x</text>
      <text x="110" y="165" text-anchor="middle" fill="#475569" font-size="12">Returns: int</text>
      <path d="M 195 150 L 255 150" stroke="#2563eb" stroke-width="4"/>
      <circle cx="300" cy="150" r="45" fill="#f0fdf4" stroke="#16a34a" stroke-width="3"/>
      <text x="300" y="145" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="14">Pure Code</text>
      <text x="300" y="165" text-anchor="middle" fill="#15803d" font-size="12">return x * x</text>
      <path d="M 350 150 L 410 150" stroke="#16a34a" stroke-width="4"/>
      <rect x="415" y="50" width="160" height="200" rx="16" fill="#faf5ff" stroke="#9333ea" stroke-width="3"/>
      <text x="495" y="85" text-anchor="middle" font-weight="bold" fill="#581c87" font-size="16">Output Space</text>
      <text x="495" y="125" text-anchor="middle" fill="#64748b" font-size="12">Deterministic</text>
      <text x="495" y="150" text-anchor="middle" fill="#64748b" font-size="12">No Side Effects</text>
      <text x="495" y="175" text-anchor="middle" fill="#64748b" font-size="12">Result: 25 (if x=5)</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Function Interface", labelTa: "செயற்கூறு இடைமுகம்", descriptionEn: "Declares name, arguments, types without showing algorithm.", descriptionTa: "உள் குறிமுறையைக் காட்டாமல் பெயரையும் அளபுருக்களையும் அறிவிக்கிறது.", x: 20, y: 50 },
      { id: "l2", labelEn: "Pure Function Kernel", labelTa: "தூய செயற்கூறு உள்ளகம்", descriptionEn: "Computes output strictly using inputs with zero side effects.", descriptionTa: "எந்தவொரு பக்க விளைவுமின்றி உள்ளீட்டை மட்டும் கொண்டு கணக்கிடுகிறது.", x: 50, y: 50 },
      { id: "l3", labelEn: "Deterministic Output", labelTa: "மாறா திட்டவட்ட வெளியீடு", descriptionEn: "Guarantees identical result every single time.", descriptionTa: "ஒரே உள்ளீட்டிற்கு எப்போதும் நிலையான விடையை அளிக்கிறது.", x: 80, y: 50 }
    ]
  },

  c12_cs_u1_ch2: {
    id: "diag_c12_cs_u1_ch2",
    chapterId: "c12_cs_u1_ch2",
    titleEn: "Abstract Data Type (ADT) Layers: Constructor, Selector & Representation",
    titleTa: "அருவத் தரவு வகை (ADT) அடுக்குகள் வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="50" y="30" width="500" height="60" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="300" y="65" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="15">User Level Program (Only sees ADT operations)</text>
      <line x1="180" y1="90" x2="180" y2="130" stroke="#3b82f6" stroke-width="3"/>
      <line x1="420" y1="130" x2="420" y2="90" stroke="#10b981" stroke-width="3"/>
      <rect x="80" y="130" width="200" height="60" rx="12" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="180" y="165" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="14">Constructor: make_pair()</text>
      <rect x="320" y="130" width="200" height="60" rx="12" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <text x="420" y="165" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="14">Selector: get_first(), get_second()</text>
      <rect x="50" y="220" width="500" height="60" rx="12" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
      <text x="300" y="255" text-anchor="middle" font-weight="bold" fill="#334155" font-size="14">Concrete Storage Layer: List [x, y] or Tuple (x, y) (Hidden)</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "User Application Program", labelTa: "பயனர் நிரல் அடுக்கு", descriptionEn: "Interacts purely with constructors and selectors without storage awareness.", descriptionTa: "சேமிப்பு முறை அறியாமல் ஆக்கிகள் மற்றும் தெரிவிப்பிகளுடன் மட்டும் தொடர்பு கொள்கிறது.", x: 50, y: 15 },
      { id: "l2", labelEn: "ADT Operations Layer", labelTa: "ADT செயல்பாட்டு அடுக்கு", descriptionEn: "Constructors build objects; selectors read component fields.", descriptionTa: "ஆக்கிகள் பொருள்களை உருவாக்குகின்றன; தெரிவிப்பிகள் தகவல்களைப் பெறுகின்றன.", x: 50, y: 53 },
      { id: "l3", labelEn: "Concrete Memory Storage", labelTa: "உண்மையான நினைவகச் சேமிப்பு", descriptionEn: "Internal Python list, tuple, or dictionary holding raw bytes.", descriptionTa: "நினைவகத்தில் உண்மையாகத் தரவைச் சேமிக்கும் பட்டியல் அல்லது வரிசைமுறை.", x: 50, y: 85 }
    ]
  },

  c12_cs_u1_ch3: {
    id: "diag_c12_cs_u1_ch3",
    chapterId: "c12_cs_u1_ch3",
    titleEn: "LEGB Scope Resolution Concentric Hierarchy",
    titleTa: "LEGB வரையெல்லை ஒருமைய வட்ட வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <circle cx="300" cy="150" r="140" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="300" y="35" text-anchor="middle" font-weight="bold" fill="#334155" font-size="14">Built-in Scope (B: print, len, range)</text>
      <circle cx="300" cy="155" r="105" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="300" y="70" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Global Scope (G: Module level variables)</text>
      <circle cx="300" cy="160" r="72" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="300" y="110" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Enclosed Scope (E: Outer func)</text>
      <circle cx="300" cy="170" r="42" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="300" y="175" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="12">Local (L)</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Local Scope (L)", labelTa: "உள்ளமை வரையெல்லை (L)", descriptionEn: "Innermost level inside the active function or lambda.", descriptionTa: "இயங்கும் செயற்கூறின் உள்ளார்ந்த உள்ளமைப் பகுதி.", x: 50, y: 56 },
      { id: "l2", labelEn: "Enclosed Scope (E)", labelTa: "சூழ்ந்த வரையெல்லை (E)", descriptionEn: "Namespace of outer enclosing nested function.", descriptionTa: "பின்னலான அமைப்பில் வெளிப்புற செயற்கூறின் பரப்பு.", x: 50, y: 38 },
      { id: "l3", labelEn: "Global Scope (G)", labelTa: "உலகளாவிய வரையெல்லை (G)", descriptionEn: "Module-level script scope accessible across all functions.", descriptionTa: "முழு கோப்பிற்கும் பொதுவான உலகளாவிய மாறிகள்.", x: 50, y: 24 },
      { id: "l4", labelEn: "Built-in Scope (B)", labelTa: "உள்ளிணைந்த வரையெல்லை (B)", descriptionEn: "Preloaded Python core namespace.", descriptionTa: "பைத்தான் மொழி துவங்கும் போது ஏற்றப்படும் உள்ளிணைந்த பெயர்கள்.", x: 50, y: 12 }
    ]
  },

  c12_cs_u1_ch4: {
    id: "diag_c12_cs_u1_ch4",
    chapterId: "c12_cs_u1_ch4",
    titleEn: "Algorithmic Complexity & Bubble Sort Passes Flowchart",
    titleTa: "நெறிமுறை சிக்கல்தன்மை மற்றும் குமிழி வரிசையாக்க வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="30" width="110" height="50" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="85" y="60" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">[15, 12, 10, 8]</text>
      <path d="M 140 55 L 180 55" stroke="#3b82f6" stroke-width="3"/>
      <rect x="180" y="30" width="110" height="50" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
      <text x="235" y="60" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="12">Swap (15, 12)</text>
      <path d="M 290 55 L 330 55" stroke="#3b82f6" stroke-width="3"/>
      <rect x="330" y="30" width="110" height="50" rx="8" fill="#bfdbfe" stroke="#1d4ed8" stroke-width="2"/>
      <text x="385" y="60" text-anchor="middle" font-weight="bold" fill="#172554" font-size="12">Pass 1: 15 bubbled</text>
      <path d="M 440 55 L 480 55" stroke="#10b981" stroke-width="3"/>
      <rect x="480" y="30" width="90" height="50" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <text x="525" y="60" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">Sorted</text>
      <rect x="50" y="130" width="500" height="130" rx="16" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <text x="300" y="160" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Complexity Spectrum Comparison</text>
      <text x="300" y="190" text-anchor="middle" fill="#16a34a" font-size="13">O(1) Constant &lt; O(log n) Logarithmic (Binary Search)</text>
      <text x="300" y="215" text-anchor="middle" fill="#d97706" font-size="13">&lt; O(n) Linear Search &lt; O(n log n) Quick/Merge Sort</text>
      <text x="300" y="240" text-anchor="middle" fill="#dc2626" font-size="13">&lt; O(n²) Bubble/Selection Sort &lt; O(2ⁿ) Exponential</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Unsorted Array Input", labelTa: "வரிசைப்படுத்தப்படாத உள்ளீடு", descriptionEn: "Initial sequence of numbers needing ascending arrangement.", descriptionTa: "ஏறுவரிசையில் அடுக்கப்பட வேண்டிய ஆரம்ப எண்கள்.", x: 14, y: 18 },
      { id: "l2", labelEn: "Adjacent Element Swap", labelTa: "அருகருகே இடமாற்றம்", descriptionEn: "Comparing elements and swapping if left > right.", descriptionTa: "இடது உறுப்பு வலதை விடப் பெரிதாக இருந்தால் இடமாற்றுதல்.", x: 39, y: 18 },
      { id: "l3", labelEn: "Bubbled Maximum Element", labelTa: "முடிவிற்கு நகர்ந்த பெரிய எண்", descriptionEn: "Largest element settles at final position after Pass 1.", descriptionTa: "முதல் சுற்றின் முடிவில் மிகப்பெரிய எண் கடைசிக்குச் செல்கிறது.", x: 64, y: 18 },
      { id: "l4", labelEn: "Time Complexity Hierarchy", labelTa: "கால சிக்கல்தன்மை வரிசை", descriptionEn: "Big-O growth rate ranking from O(1) to O(2^n).", descriptionTa: "O(1) முதல் O(2^n) வரையிலான கால சிக்கல்தன்மை ஒப்பீடு.", x: 50, y: 65 }
    ]
  }
};

export const CS_UNIT_1_VIDEOS: Record<string, VideoExplainer> = {
  c12_cs_u1_ch1: {
    id: "vid_c12_cs_u1_ch1",
    chapterId: "c12_cs_u1_ch1",
    titleEn: "Animation: The Anatomy of Pure and Impure Functions",
    titleTa: "அனிமேஷன்: தூய மற்றும் தூய்மையற்ற செயற்கூறுகள் செயல் விளக்கம்",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Interface vs Implementation",
        titleTa: "இடைமுகம் vs செயல்படுத்தல்",
        visualDescription: "A driver turning a car steering wheel; the engine turning wheels is hidden beneath the hood.",
        narrationEn: "Just like turning a steering wheel steers a car without you needing to know the gear ratio, a function interface abstracts how a task is achieved.",
        narrationTa: "ஒரு காரின் ஸ்டீயரிங் திருப்புவது போல, உள் பொறிமுறை தெரியாமல் செயற்கூறின் பணியை அணுக இடைமுகம் உதவுகிறது.",
        conceptKey: "Interface Abstraction"
      },
      {
        sceneNumber: 2,
        titleEn: "Pure vs Impure Functions",
        titleTa: "தூய மற்றும் தூய்மையற்றவை",
        visualDescription: "A math function machine calculating square of 4 always giving 16, vs an impure machine producing random numbers.",
        narrationEn: "A pure function like square of 4 always yields 16 with zero side effects. An impure function may change an external bank balance!",
        narrationTa: "தூய செயற்கூறு எப்போது இயக்கினாலும் 4-ன் வர்க்கம் 16 என்பதை மட்டுமே தரும். தூய்மையற்ற செயற்கூறு உலகளாவிய மாறிகளை மாற்றிவிடலாம்.",
        conceptKey: "Referential Transparency"
      },
      {
        sceneNumber: 3,
        titleEn: "The Chameleon Problem Solution",
        titleTa: "பச்சோந்தி சிக்கல் தீர்வு",
        visualDescription: "Red and green chameleons meeting and turning into blue chameleons through mathematical invariant state.",
        narrationEn: "Using algorithmic properties, we formulate states where chameleons meet and converge to a uniform color through state transformation.",
        narrationTa: "கணித மாறா நிலைத்தன்மை மூலம் இருவேறு நிறப் பச்சோந்திகள் சந்தித்து மூன்றாம் நிறமாக மாறி சீரான நிறத்தை அடைகின்றன.",
        conceptKey: "State Invariant"
      }
    ]
  },

  c12_cs_u1_ch2: {
    id: "vid_c12_cs_u1_ch2",
    chapterId: "c12_cs_u1_ch2",
    titleEn: "Animation: Data Abstraction with Rational Numbers & Points",
    titleTa: "அனிமேஷன்: தரவு அருவமாக்கம் செயல்முறை விளக்கம்",
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Black Box Concept",
        titleTa: "கருப்புப் பெட்டி தத்துவம்",
        visualDescription: "A student inserting x and y into a black box constructor; an abstract point pops out.",
        narrationEn: "Data abstraction acts as a black box. You provide values to the constructor, and receive an abstract object ready for computations.",
        narrationTa: "தரவு அருவமாக்கம் ஒரு கருப்புப் பெட்டி போன்றது. ஆக்கியிடம் மதிப்புகளைக் கொடுத்தால் அது அருவப் பொருளைத் தரும்.",
        conceptKey: "Black Box Abstraction"
      },
      {
        sceneNumber: 2,
        titleEn: "Extracting Data with Selectors",
        titleTa: "தெரிவிப்பிகள் மூலம் தரவை மீட்டல்",
        visualDescription: "A selector probe extracting only the numerator and denominator from a rational number.",
        narrationEn: "Selectors like get_numer and get_denom safely pull components without revealing whether the fraction is stored as a list or tuple.",
        narrationTa: "தெரிவிப்பிகள் பட்டியலா அல்லது வரிசைமுறையா என்பதைப் பற்றிக் கவலைப்படாமல் தேவையான மதிப்பை மட்டும் பெற்றுத் தரும்.",
        conceptKey: "Safe Component Extraction"
      },
      {
        sceneNumber: 3,
        titleEn: "Changing Representation Without Breaking Code",
        titleTa: "நிரல் உடையாமல் சேமிப்பை மாற்றுதல்",
        visualDescription: "Switching internal storage from a 2-item list to a Python dictionary seamlessly.",
        narrationEn: "Because the application program relies only on ADT functions, you can switch underlying storage from a list to a dictionary with zero errors!",
        narrationTa: "பயனர் நிரல் ADT-ஐ மட்டுமே நம்பியுள்ளதால், உள் அமைப்பை பட்டியலிலிருந்து அகராதியாக மாற்றினாலும் நிரல் தடையின்றி இயங்கும்!",
        conceptKey: "Representation Independence"
      }
    ]
  },

  c12_cs_u1_ch3: {
    id: "vid_c12_cs_u1_ch3",
    chapterId: "c12_cs_u1_ch3",
    titleEn: "Animation: The LEGB Search Engine in Action",
    titleTa: "அனிமேஷன்: LEGB வரையெல்லை தேடல் முறை விளக்கம்",
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Scoping Mystery",
        titleTa: "வரையெல்லை புதிர்",
        visualDescription: "A Python interpreter searching for a variable name starting inside a tiny room (local function).",
        narrationEn: "When Python evaluates a variable, it doesn't search randomly. It begins immediately in the innermost local scope.",
        narrationTa: "பைத்தான் ஒரு மாறியைக் காணும்போது தாறுமாறாகத் தேடாமல் முதலில் உள்ளமை செயற்கூறுக்குள் தேடுகிறது.",
        conceptKey: "Local Inspection"
      },
      {
        sceneNumber: 2,
        titleEn: "Stepping Out: Enclosed and Global",
        titleTa: "வெளியே செல்லுதல்: சூழ்ந்த மற்றும் உலகளாவிய",
        visualDescription: "The search zooming out through the outer enclosing function and into the open global module space.",
        narrationEn: "If not found locally, Python checks the enclosing nested function, and then the overarching global script level.",
        narrationTa: "உள்ளே கிடைக்காவிட்டால் சூழ்ந்த வெளி செயற்கூறிலும், பிறகு உலகளாவிய கோப்பு நிலையிலும் தேடுகிறது.",
        conceptKey: "Outward Search"
      },
      {
        sceneNumber: 3,
        titleEn: "Rebinding with Global & Nonlocal",
        titleTa: "global மற்றும் nonlocal சிறப்புச் சொற்கள்",
        visualDescription: "A red global key allowing a local hand to reach out and rewrite a number on the global chalkboard.",
        narrationEn: "Using the 'global' or 'nonlocal' keyword gives special permission to overwrite values outside your current scope!",
        narrationTa: "'global' அல்லது 'nonlocal' சிறப்புச் சொல் மூலம் எல்லை தாண்டி வெளி மாறியை நாம் மாற்றியமைக்கலாம்!",
        conceptKey: "Rebinding Permissions"
      }
    ]
  },

  c12_cs_u1_ch4: {
    id: "vid_c12_cs_u1_ch4",
    chapterId: "c12_cs_u1_ch4",
    titleEn: "Animation: Bubble Sort vs Binary Search Efficiency",
    titleTa: "அனிமேஷன்: வரிசையாக்கம் மற்றும் தேடல் செயல்முறை ஒப்பீடு",
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Linear vs Binary Search Race",
        titleTa: "நேரியல் vs இருbinary தேடல் போட்டி",
        visualDescription: "Two runners searching a dictionary of 1000 pages: one turning page-by-page, the other opening middle.",
        narrationEn: "Linear search checks every page sequentially. Binary search jumps straight to the middle, slashing 1,000 pages down to 10 checks!",
        narrationTa: "நேரியல் தேடல் ஒவ்வொரு பக்கமாகப் பார்க்கும். இருbinary தேடல் நடுப்பக்கத்தைத் திறந்து 1000 பக்கங்களை 10 படிகளில் தேடி முடிக்கும்!",
        conceptKey: "Logarithmic Speedup"
      },
      {
        sceneNumber: 2,
        titleEn: "Bubbles Rising in Bubble Sort",
        titleTa: "குமிழிகள் போல மேலெழும் எண்கள்",
        visualDescription: "Heavy numbers sinking while lighter numbers bubble up through animated column swaps.",
        narrationEn: "Like bubbles floating to the surface of water, the largest unsorted numbers float to the end of the list pass by pass.",
        narrationTa: "தண்ணீரில் குமிழிகள் மேலே மிதப்பது போல, ஒவ்வொரு சுற்றிலும் மிகப்பெரிய எண் பட்டியலின் இறுதிக்கு நகர்கிறது.",
        conceptKey: "Adjacent Bubble Swapping"
      },
      {
        sceneNumber: 3,
        titleEn: "Dynamic Programming & Fibonacci Trees",
        titleTa: "இயங்கு நிரலாக்க மரங்கள்",
        visualDescription: "A branching recursion tree where identical red branches are pruned away and looked up from a cache table.",
        narrationEn: "Instead of recalculating fib(3) multiple times, dynamic programming stores it once, turning an exponential nightmare into linear speed!",
        narrationTa: "ஒரே கணக்கீட்டை மீண்டும் மீண்டும் செய்யாமல் நினைவிருத்தல் (Memoization) மூலம் சேமித்து நெறிமுறையை அதிவேகமாக்குகிறது!",
        conceptKey: "Memoization Cache"
      }
    ]
  }
};
