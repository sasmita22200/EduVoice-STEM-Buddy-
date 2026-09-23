import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Computer Science - Unit 3: Modularity and Object-Oriented Programming
 * Chapters:
 * 9. Lists, Tuples, Sets, and Dictionary (பட்டியல், வரிசைமுறை, கணம் மற்றும் அகராதி)
 * 10. Python Classes and Objects (பைத்தான் இனக்குழுக்கள் மற்றும் பொருள்கள்)
 */

export const CS_UNIT_3_CHAPTERS: Chapter[] = [
  {
    id: "c12_cs_u3_ch9",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 3,
    unitNameEn: "Unit 3: Modularity and OOPs",
    unitNameTa: "அலகு 3: கூறாக்கம் மற்றும் பொருள்நோக்கு நிரலாக்கம்",
    chapterNumber: 9,
    titleEn: "Chapter 9: Lists, Tuples, Sets, and Dictionary (பட்டியல், வரிசைமுறை, கணம் மற்றும் அகராதி)",
    titleTa: "பாடம் 9: பட்டியல், வரிசைமுறை, கணம் மற்றும் அகராதி",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u3_ch10",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 3,
    unitNameEn: "Unit 3: Modularity and OOPs",
    unitNameTa: "அலகு 3: கூறாக்கம் மற்றும் பொருள்நோக்கு நிரலாக்கம்",
    chapterNumber: 10,
    titleEn: "Chapter 10: Python Classes and Objects (பைத்தான் இனக்குழுக்கள் மற்றும் பொருள்கள்)",
    titleTa: "பாடம் 10: பைத்தான் இனக்குழுக்கள் மற்றும் பொருள்கள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CS_UNIT_3_NOTES: Record<string, NoteItem> = {
  c12_cs_u3_ch9: {
    id: "note_c12_cs_u3_ch9",
    chapterId: "c12_cs_u3_ch9",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Data Collections: Lists, Tuples, Sets, and Dictionaries",
    titleTa: "தரவு தொகுப்புகள்: பட்டியல், வரிசைமுறை, கணம் மற்றும் அகராதி",
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
    changeNote: "Complete coverage of Python's 4 core collection structures.",
    changeNoteTa: "பட்டியல், வரிசைமுறை, கணம் மற்றும் அகராதி ஆகியவற்றின் விரிவான ஒப்பீடு.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Four Built-in Collection Types in Python
| Data Structure | Delimiter | Mutability | Ordering | Duplicates Allowed |
|---|---|---|---|---|
| **List** | Square Brackets \`[]\` | Mutable | Ordered | Yes |
| **Tuple** | Parentheses \`()\` | Immutable | Ordered | Yes |
| **Set** | Curly Braces \`{}\` | Mutable | Unordered | No (Unique items only) |
| **Dictionary** | Key-Value \`{k: v}\` | Mutable Keys/Values | Key-Ordered (3.7+) | Unique Keys, Duplicate Values |

### 2. Lists (பட்டியல்)
* Defined with square brackets: \`nums = [10, 20, 30]\`.
* Modifying elements: \`nums[0] = 99\` (Mutable).
* List comprehension: \`[x**2 for x in range(1, 6)]\` yields \`[1, 4, 9, 16, 25]\`.
* Methods: \`append()\`, \`extend()\`, \`insert()\`, \`pop()\`, \`remove()\`, \`clear()\`, \`sort()\`.

### 3. Tuples (வரிசைமுறை)
* Defined with parentheses: \`tup = (10, 20, 30)\`.
* Single element tuple requires trailing comma: \`t = (5,)\`.
* Immutable: elements cannot be changed once created.

### 4. Sets (கணம்)
* Unordered collection of unique elements: \`s = {1, 2, 2, 3}\` becomes \`{1, 2, 3}\`.
* Mathematical Set Operations:
  * **Union (\`|\` or \`union()\`)**
  * **Intersection (\`&\` or \`intersection()\`)**
  * **Difference (\`-\` or \`difference()\`)**
  * **Symmetric Difference (\`^\` or \`symmetric_difference()\`)**

### 5. Dictionaries (அகராதி)
* Stores associative pairs of \`key: value\`: \`student = {'roll': 101, 'name': 'Kavitha'}\`.
* Accessing values: \`student['name']\` or \`student.get('name')\`.
* Keys must be immutable types (strings, numbers, tuples).`,
    bodyTa: `### 1. பைத்தானின் நான்கு அடிப்படை தரவுத் தொகுப்புகள்
1. **பட்டியல் (List - \`[]\`)**: வரிசைப்படுத்தப்பட்ட, மாற்றக்கூடிய (Mutable) உறுப்புகளின் தொகுப்பு.
2. **வரிசைமுறை (Tuple - \`()\`)**: மாற்ற இயலாத (Immutable), வரிசைப்படுத்தப்பட்ட தொகுப்பு.
3. **கணம் (Set - \`{}\`)**: வரிசையற்ற, தனித்துவமான (Unique) உறுப்புகளின் தொகுப்பு (நகல்கள் அனுமதிக்கப்படாது).
4. **அகராதி (Dictionary - \`{key: value}\`)**: திறவுகோல் மற்றும் மதிப்பு இணைகளாகச் சேமிக்கும் கலவை.

### 2. பட்டியல் மற்றும் வரிசைமுறை ஒப்பீடு
* பட்டியலில் உறுப்புகளை சேர்க்க (\`append\`), நீக்க (\`pop\`) மற்றும் மாற்ற முடியும்.
* வரிசைமுறையில் உறுப்புகளை மாற்ற முடியாது. ஒற்றை உறுப்பு வரிசைமுறைக்கு கமா (\`t = (1,)\`) கட்டாயம்.

### 3. கண செயல்பாடுகள்
* சேர்ப்பு (\`|\` - Union), வெட்டு (\`&\` - Intersection), வேறுபாடு (\`-\` - Difference), சமச்சீர் வேறுபாடு (\`^\`).

### 4. அகராதி (Dictionary)
* திறவுகோல் (Key) தனித்துவமானதாகவும் மாற்ற இயலாததாகவும் இருக்க வேண்டும். \`dict.keys()\`, \`dict.values()\`, \`dict.items()\` மூலம் தகவல்களைப் பெறலாம்.`,
    keyFormulas: [
      {
        nameEn: "List Comprehension Formula",
        nameTa: "பட்டியல் புரிதல் வடிவம்",
        formula: "[expression for item in iterable if condition]",
        explanationEn: "Compact syntax to generate a new list from an existing sequence.",
        explanationTa: "ஒரு வரியில் புதிய பட்டியலை உருவாக்கும் சுருக்கமான கட்டமைப்பு."
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

  c12_cs_u3_ch10: {
    id: "note_c12_cs_u3_ch10",
    chapterId: "c12_cs_u3_ch10",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Python Classes and Objects: Constructors, Destructors, and Encapsulation",
    titleTa: "பைத்தான் இனக்குழுக்கள் மற்றும் பொருள்கள்: ஆக்கிகள், அழிப்பிகள் மற்றும் உறைபொதியாக்கம்",
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
    changeNote: "OOP concepts, class definition, self parameter, __init__, and __del__.",
    changeNoteTa: "இனக்குழு, பொருள், self அளபுரு, __init__ ஆக்கி மற்றும் __del__ அழிப்பி.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Object-Oriented Programming (OOP) in Python
* **Class**: A blueprint or template for creating objects. It binds data variables and functions together.
* **Object**: An instance of a class with real memory allocation.

### 2. Defining Classes and Objects
\`\`\`python
class Student:
    def __init__(self, name, marks):
        self.name = name          # Instance variable
        self.marks = marks
    
    def display(self):
        print(self.name, self.marks)

s1 = Student("Arun", 95)         # Instantiation
s1.display()
\`\`\`

### 3. The \`self\` Parameter
The first argument of every method in a Python class must be \`self\`. It represents the active instance of the class that called the method.

### 4. Constructor (\`__init__\`) and Destructor (\`__del__\`)
* **Constructor (\`__init__\`)**: Special initialization method executed automatically whenever an object is instantiated.
* **Destructor (\`__del__\`)**: Special cleanup method executed automatically when an object is destroyed or garbage collected.

### 5. Public vs Private Class Members
* **Public**: Accessible from anywhere inside and outside the class.
* **Private**: Prefixed with double underscores (\`__private_var\`); cannot be accessed directly outside the class (Data Hiding/Encapsulation).`,
    bodyTa: `### 1. பொருள்நோக்கு நிரலாக்கம் (OOP)
* **இனக்குழு (Class)**: பொருள்களை உருவாக்குவதற்கான மாதிரி அல்லது வார்ப்புரு. இது தரவு மற்றும் செயற்கூறுகளை ஒன்றாக இணைக்கிறது.
* **பொருள் (Object)**: இனக்குழுவின் ஒரு மாதிரி (Instance) ஆகும்.

### 2. \`self\` அளபுருவின் பயன்பாடு
இனக்குழுவின் ஒவ்வொரு வழிமுறையின் (Method) முதல் அளபுருவாக \`self\` இருக்க வேண்டும். இது குறிப்பிட்ட நடப்புப் பொருளைக் குறிக்கிறது.

### 3. ஆக்கி (\`__init__\`) மற்றும் அழிப்பி (\`__del__\`)
* **ஆக்கி (\`__init__\`)**: ஒரு பொருள் உருவாக்கப்படும் போது தானாகவே இயங்கும் தொடக்கச் செயற்கூறு ஆகும்.
* **அழிப்பி (\`__del__\`)**: ஒரு பொருள் நினைவகத்திலிருந்து அழிக்கப்படும் போது தானாகவே இயங்கும் தூய்மைச் செயற்கூறு ஆகும்.

### 4. பொது மற்றும் தனிப்பட்ட உறுப்புகள்
* முன்னொட்டு இல்லாதவை பொதுவானவை (Public).
* இரட்டை அடிக்கோட்டுடன் (\`__\`) துவங்குபவை தனிப்பட்ட (Private) உறுப்புகள் ஆகும்; இவை வெளிப்புற அணுகலில் இருந்து மறைக்கப்படுகின்றன.`,
    keyFormulas: [
      {
        nameEn: "Class Instantiation Syntax",
        nameTa: "இனக்குழு மாதிரி உருவாக்கம்",
        formula: "object_name = ClassName(arguments)",
        explanationEn: "Invokes the __init__ constructor and binds a fresh instance in memory.",
        explanationTa: "ஆக்கியை இயக்கி நினைவகத்தில் புதிய பொருளை உருவாக்குகிறது."
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

export const CS_UNIT_3_SUMMARIES: Record<string, SummaryItem> = {
  c12_cs_u3_ch9: {
    id: "sum_c12_cs_u3_ch9",
    chapterId: "c12_cs_u3_ch9",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Python provides four collection data types: mutable ordered Lists, immutable ordered Tuples, unique unordered Sets, and key-value mapped Dictionaries.",
    simpleExplanationTa: "பைத்தான் நான்கு தரவுக் கட்டமைப்புகளை வழங்குகிறது: மாற்றக்கூடிய பட்டியல், மாற்ற இயலாத வரிசைமுறை, தனித்துவமான கணம் மற்றும் அகராதி.",
    keyPointsEn: [
      "Lists are mutable and enclosed in [].",
      "Tuples are immutable and enclosed in ().",
      "Sets hold unique unordered items enclosed in {}.",
      "Dictionaries store key-value pairs where keys must be unique."
    ],
    keyPointsTa: [
      "பட்டியல் மாற்றக்கூடியது, சதுர அடைப்புக்குறிக்குள் வரும்.",
      "வரிசைமுறை மாற்ற இயலாதது, பிறை அடைப்புக்குறிக்குள் வரும்.",
      "கணம் தனித்துவமான உறுப்புகளைக் கொண்டது.",
      "அகராதி திறவுகோல் மற்றும் மதிப்பு இணைகளைச் சேமிக்கிறது."
    ]
  },
  c12_cs_u3_ch10: {
    id: "sum_c12_cs_u3_ch10",
    chapterId: "c12_cs_u3_ch10",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Classes serve as blueprints for objects. The self parameter references the current instance, __init__ acts as the constructor, and double underscores define private members.",
    simpleExplanationTa: "இனக்குழுக்கள் பொருள்களை உருவாக்குவதற்கான வரைபடங்கள் ஆகும். self நடப்புப் பொருளைக் குறிக்கிறது, __init__ ஆக்கியாகச் செயல்படுகிறது, இரட்டை அடிக்கோடு தனிப்பட்ட மாறிகளை உருவாக்குகிறது.",
    keyPointsEn: [
      "Class defines attributes and methods; Object is an instance.",
      "__init__ constructor executes automatically during creation.",
      "self refers to the current invoking instance.",
      "Prefixing variables with __ enforces private encapsulation."
    ],
    keyPointsTa: [
      "இனக்குழு என்பது மாதிரி; பொருள் என்பது அதன் நேரடி வடிவம்.",
      "__init__ ஆக்கி பொருள் உருவாகும் போது தானாகவே இயங்கும்.",
      "self என்பது நடப்புப் பொருளைக் குறிக்கிறது.",
      "__ முன்னொட்டு தனிப்பட்ட மாறிகளை உருவாக்குகிறது."
    ]
  }
};

export const CS_UNIT_3_QUIZZES: Record<string, ChapterQuiz> = {
  c12_cs_u3_ch9: {
    id: "quiz_c12_cs_u3_ch9",
    chapterId: "c12_cs_u3_ch9",
    titleEn: "Lists, Tuples, Sets, and Dictionaries Board Quiz",
    titleTa: "பட்டியல், வரிசைமுறை, கணம், அகராதி வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which of the following data structures is immutable in Python?",
        questionTa: "பின்வருவனவற்றுள் பைத்தானில் மாற்ற இயலாத (Immutable) தரவுக் கட்டமைப்பு எது?",
        optionsEn: ["Tuple", "List", "Dictionary", "Set"],
        optionsTa: ["வரிசைமுறை (Tuple)", "பட்டியல் (List)", "அகராதி (Dictionary)", "கணம் (Set)"],
        correctAnswer: "Tuple",
        explanationEn: "Tuples cannot be altered once instantiated.",
        explanationTa: "வரிசைமுறை (Tuple) உருவாக்கப்பட்ட பின் அதில் உள்ள உறுப்புகளை மாற்ற இயலாது."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "What is the output of len({10, 20, 20, 30, 10}) in Python?",
        questionTa: "len({10, 20, 20, 30, 10}) என்பதன் வெளியீடு என்ன?",
        optionsEn: ["3", "5", "4", "Error"],
        optionsTa: ["3", "5", "4", "Error"],
        correctAnswer: "3",
        explanationEn: "Sets automatically discard duplicate entries, leaving only {10, 20, 30}.",
        explanationTa: "கணம் நகல்களை நீக்கிவிட்டு {10, 20, 30} என்ற 3 உறுப்புகளை மட்டுமே வைத்திருக்கும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "Dictionary keys in Python must be of immutable types such as strings or numbers.",
        questionTa: "பைத்தான் அகராதியின் திறவுகோல்கள் சரம் அல்லது எண் போன்ற மாற்ற இயலாத வகையினதாக இருக்க வேண்டும்.",
        correctAnswer: true,
        explanationEn: "True. Mutable objects like lists cannot be used as dictionary keys.",
        explanationTa: "சரி. பட்டியல்கள் போன்ற மாற்றக்கூடியவற்றை திறவுகோலாகப் பயன்படுத்த முடியாது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which operator is used to calculate the Symmetric Difference of two sets?",
        questionTa: "இரு கணங்களின் சமச்சீர் வேறுபாட்டைக் (Symmetric Difference) கணக்கிடப் பயன்படும் செயற்குறி எது?",
        optionsEn: ["^", "&", "|", "-"],
        optionsTa: ["^", "&", "|", "-"],
        correctAnswer: "^",
        explanationEn: "^ computes symmetric difference (elements in either set, but not both).",
        explanationTa: "^ செயற்குறி இரு கணங்களின் சமச்சீர் வேறுபாட்டைக் கணக்கிடுகிறது."
      }
    ]
  },

  c12_cs_u3_ch10: {
    id: "quiz_c12_cs_u3_ch10",
    chapterId: "c12_cs_u3_ch10",
    titleEn: "Classes and Objects Board Quiz",
    titleTa: "இனக்குழுக்கள் மற்றும் பொருள்கள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which special method acts as the constructor in a Python class?",
        questionTa: "பைத்தான் இனக்குழுவில் ஆக்கியாகச் செயல்படும் சிறப்பு முறை எது?",
        optionsEn: ["__init__()", "__new__()", "__construct__()", "__del__()"],
        optionsTa: ["__init__()", "__new__()", "__construct__()", "__del__()"],
        correctAnswer: "__init__()",
        explanationEn: "__init__ initializes object properties immediately upon instantiation.",
        explanationTa: "__init__() என்பது பொருள் உருவாக்கப்படும் போது இயங்கும் ஆக்கி ஆகும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "What prefix makes a class variable private in Python?",
        questionTa: "பைத்தானில் ஒரு மாறியைத் தனிப்பட்டதாக (Private) மாற்ற உதவும் முன்னொட்டு எது?",
        optionsEn: ["Double underscore (__)", "Single underscore (_)", "Hash (#)", "Dollar ($)"],
        optionsTa: ["இரட்டை அடிக்கோடு (__)", "ஒற்றை அடிக்கோடு (_)", "Hash (#)", "Dollar ($)"],
        correctAnswer: "Double underscore (__)",
        explanationEn: "Variables prefixed with double underscores are mangled as private.",
        explanationTa: "இரட்டை அடிக்கோட்டுடன் (__) துவங்கும் மாறிகள் தனிப்பட்டவையாகக் கருதப்படுகின்றன."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "The first parameter of all instance methods in a Python class must be 'self'.",
        questionTa: "பைத்தான் இனக்குழு வழிமுறைகளின் முதல் அளபுருவாக 'self' இருக்க வேண்டும்.",
        correctAnswer: true,
        explanationEn: "True. self links the method invocation to the active calling instance.",
        explanationTa: "சரி. self என்பது குறிப்பிட்ட நடப்புப் பொருளைக் குறிக்கிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which method is invoked automatically when an object reference count drops to zero?",
        questionTa: "ஒரு பொருள் நினைவகத்திலிருந்து விடுவிக்கப்படும் போது தானாகவே அழைக்கப்படும் முறை எது?",
        optionsEn: ["__del__()", "__destroy__()", "__clean__()", "__stop__()"],
        optionsTa: ["__del__()", "__destroy__()", "__clean__()", "__stop__()"],
        correctAnswer: "__del__()",
        explanationEn: "__del__ is the destructor invoked during garbage collection.",
        explanationTa: "__del__() என்பது நினைவகத்திலிருந்து பொருள் அழியும் போது இயங்கும் அழிப்பி ஆகும்."
      }
    ]
  }
};

export const CS_UNIT_3_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_cs_u3_ch9: {
    id: "diag_c12_cs_u3_ch9",
    chapterId: "c12_cs_u3_ch9",
    titleEn: "Python Collections Comparison: List, Tuple, Set & Dictionary",
    titleTa: "பைத்தான் தரவு தொகுப்புகள் ஒப்பீட்டு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="30" width="250" height="110" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="60" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">List [10, 20, 30]</text>
      <text x="155" y="85" text-anchor="middle" fill="#334155" font-size="12">Ordered • Mutable • Duplicates OK</text>
      <text x="155" y="110" text-anchor="middle" fill="#64748b" font-size="11">append(), pop(), sort()</text>
      <rect x="320" y="30" width="250" height="110" rx="10" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="445" y="60" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">Tuple (10, 20, 30)</text>
      <text x="445" y="85" text-anchor="middle" fill="#334155" font-size="12">Ordered • Immutable • Safe</text>
      <text x="445" y="110" text-anchor="middle" fill="#64748b" font-size="11">Fast read-only records</text>
      <rect x="30" y="160" width="250" height="110" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="155" y="190" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="14">Set {10, 20, 30}</text>
      <text x="155" y="215" text-anchor="middle" fill="#334155" font-size="12">Unordered • Unique Elements Only</text>
      <text x="155" y="240" text-anchor="middle" fill="#64748b" font-size="11">Union (|), Intersection (&amp;)</text>
      <rect x="320" y="160" width="250" height="110" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
      <text x="445" y="190" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="14">Dict {'a': 1, 'b': 2}</text>
      <text x="445" y="215" text-anchor="middle" fill="#334155" font-size="12">Key-Value Map • Unique Keys</text>
      <text x="445" y="240" text-anchor="middle" fill="#64748b" font-size="11">keys(), values(), items()</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "List (Mutable Sequence)", labelTa: "பட்டியல் (மாற்றக்கூடிய தொடர்)", descriptionEn: "Dynamic ordered collection supporting in-place updates.", descriptionTa: "உறுப்புகளை எளிதாக மாற்றக்கூடிய வரிசை அமைப்பு.", x: 25, y: 28 },
      { id: "l2", labelEn: "Tuple (Immutable Sequence)", labelTa: "வரிசைமுறை (மாற்ற இயலாதது)", descriptionEn: "Fixed ordered records protected from accidental edits.", descriptionTa: "தவறுதலாக மாற்றப்பட முடியாத நிலையான அமைப்பு.", x: 75, y: 28 },
      { id: "l3", labelEn: "Set (Unique Unordered)", labelTa: "கணம் (தனித்துவமான உறுப்புகள்)", descriptionEn: "Mathematical sets with union and intersection.", descriptionTa: "சேர்ப்பு மற்றும் வெட்டுச் செயல்பாடுகளுக்கான கட்டமைப்பு.", x: 25, y: 70 },
      { id: "l4", labelEn: "Dictionary (Key-Value Map)", labelTa: "அகராதி (திறவுகோல்-மதிப்பு)", descriptionEn: "Associative hash mapping using unique keys.", descriptionTa: "தனித்துவமான திறவுகோல் மூலம் மதிப்புகளை அணுகும் அமைப்பு.", x: 75, y: 70 }
    ]
  },

  c12_cs_u3_ch10: {
    id: "diag_c12_cs_u3_ch10",
    chapterId: "c12_cs_u3_ch10",
    titleEn: "Class Blueprint & Object Instantiation Architecture",
    titleTa: "இனக்குழு வார்ப்புரு மற்றும் பொருள் உருவாக்க கட்டமைப்பு",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="40" width="220" height="220" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="3"/>
      <text x="150" y="75" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="16">Class Student (Blueprint)</text>
      <text x="150" y="110" text-anchor="middle" fill="#475569" font-size="12">Attributes: name, roll_no</text>
      <text x="150" y="140" text-anchor="middle" fill="#475569" font-size="12">__init__(self, n, r)</text>
      <text x="150" y="170" text-anchor="middle" fill="#475569" font-size="12">display(self)</text>
      <text x="150" y="200" text-anchor="middle" fill="#475569" font-size="12">__del__(self)</text>
      <path d="M 265 110 L 345 90" stroke="#2563eb" stroke-width="3"/>
      <path d="M 265 190 L 345 210" stroke="#2563eb" stroke-width="3"/>
      <rect x="350" y="40" width="210" height="95" rx="10" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="455" y="70" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="14">Object s1 (Memory Instance)</text>
      <text x="455" y="95" text-anchor="middle" fill="#15803d" font-size="12">name = "Anu", roll = 101</text>
      <rect x="350" y="165" width="210" height="95" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="455" y="195" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="14">Object s2 (Memory Instance)</text>
      <text x="455" y="220" text-anchor="middle" fill="#b45309" font-size="12">name = "Bala", roll = 102</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Class Specification", labelTa: "இனக்குழு வரைமுறை", descriptionEn: "Single reusable template defining data and behaviors.", descriptionTa: "தரவுகளையும் செயற்கூறுகளையும் வரையறுக்கும் ஒற்றை மாதிரி.", x: 25, y: 50 },
      { id: "l2", labelEn: "Instantiated Object 1", labelTa: "உருவான பொருள் 1", descriptionEn: "Concrete instance holding Anu's data in RAM.", descriptionTa: "நினைவகத்தில் அனுவின் தரவைக் கொண்ட முதல் பொருள்.", x: 75, y: 28 },
      { id: "l3", labelEn: "Instantiated Object 2", labelTa: "உருவான பொருள் 2", descriptionEn: "Independent instance holding Bala's data in RAM.", descriptionTa: "பாலாவின் தகவல்களைக் கொண்ட தனித்துவமான இரண்டாம் பொருள்.", x: 75, y: 70 }
    ]
  }
};

export const CS_UNIT_3_VIDEOS: Record<string, VideoExplainer> = {
  c12_cs_u3_ch9: {
    id: "vid_c12_cs_u3_ch9",
    chapterId: "c12_cs_u3_ch9",
    titleEn: "Animation: Mastering Lists, Tuples, Sets & Dictionaries",
    titleTa: "அனிமேஷன்: தரவுக் கட்டமைப்புகள் செயல்முறை விளக்கம்",
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "List vs Tuple: Mutability Showdown",
        titleTa: "பட்டியல் vs வரிசைமுறை ஒப்பீடு",
        visualDescription: "An open whiteboard where items can be erased (List) vs a stone tablet with carved words (Tuple).",
        narrationEn: "Lists are like chalkboards you can erase and update at will. Tuples are carved in stone, offering read-only stability.",
        narrationTa: "பட்டியல்கள் கரும்பலகை போன்றது; எப்போது வேண்டுமானாலும் மாற்றலாம். வரிசைமுறைகள் கல்லில் செதுக்கியவை; மாற்ற இயலாது.",
        conceptKey: "Mutability Contrast"
      },
      {
        sceneNumber: 2,
        titleEn: "Sets: The Duplicate Eliminator",
        titleTa: "கணம்: நகல்களை நீக்கும் மேஜிக்",
        visualDescription: "Duplicates funneling into a set filter and automatically vaporizing into a clean set of unique items.",
        narrationEn: "Pouring duplicates into a set instantly purges them, leaving only unique values and powering Venn diagram operations.",
        narrationTa: "கணத்திற்குள் நகல் எண்களைப் போட்டாலும் அவை தானாகவே நீக்கப்பட்டு தனித்துவமான எண்கள் மட்டுமே மிஞ்சும்.",
        conceptKey: "Set Uniqueness"
      },
      {
        sceneNumber: 3,
        titleEn: "Dictionary: Key-Value Speed",
        titleTa: "அகராதி: அதிவேக திறவுகோல் தேடல்",
        visualDescription: "A row of numbered lockers opened with precise keys to retrieve named contents.",
        narrationEn: "Dictionaries match unique keys directly to values, giving instant access without scanning through every item.",
        narrationTa: "அகராதி திறவுகோல் மூலம் மதிப்புகளை நேரடியாக இணைத்து அதிவேகமாகத் தகவல்களை மீட்டெடுக்கிறது.",
        conceptKey: "Associative Mapping"
      }
    ]
  },

  c12_cs_u3_ch10: {
    id: "vid_c12_cs_u3_ch10",
    chapterId: "c12_cs_u3_ch10",
    titleEn: "Animation: The Life Cycle of Classes and Objects",
    titleTa: "அனிமேஷன்: இனக்குழு மற்றும் பொருள்களின் ஆயுள் சுழற்சி",
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Blueprint and the Factory",
        titleTa: "மாதிரி வரைபடமும் தொழிற்சாலையும்",
        visualDescription: "An architectural blueprint of a car stamping out real, functional cars on a factory assembly line.",
        narrationEn: "A class is the blueprint. When you instantiate it, a real object is stamped out into computer memory.",
        narrationTa: "இனக்குழு என்பது மாதிரி வரைபடம். அதை இயக்கும் போது நினைவகத்தில் உண்மையான பொருள்கள் உற்பத்தியாகின்றன.",
        conceptKey: "Class Blueprint"
      },
      {
        sceneNumber: 2,
        titleEn: "The Self Identity",
        titleTa: "self அளபுருவின் அடையாளம்",
        visualDescription: "A driver holding their own unique driving license stating 'This is ME'.",
        narrationEn: "The self parameter tells the method exactly which object instance is currently calling the shots.",
        narrationTa: "self என்பது தற்போது எந்தப் பொருள் இந்தச் செயலை இயக்குகிறது என்பதைத் துல்லியமாக அடையாளம் காட்டுகிறது.",
        conceptKey: "Self Referencing"
      },
      {
        sceneNumber: 3,
        titleEn: "Constructors and Destructors",
        titleTa: "ஆக்கியும் அழிப்பியும்",
        visualDescription: "A newborn object being greeted by __init__, and waving goodbye to __del__ as memory is reclaimed.",
        narrationEn: "__init__ welcomes the object into existence by assigning properties, and __del__ cleans up when its job is finished.",
        narrationTa: "பொருள் பிறக்கும் போது __init__ ஆக்கி வரவேற்கிறது; அதன் பயன்பாடு முடிந்தவுடன் __del__ அழிப்பி தூய்மை செய்கிறது.",
        conceptKey: "Lifecycle Hooks"
      }
    ]
  }
};
