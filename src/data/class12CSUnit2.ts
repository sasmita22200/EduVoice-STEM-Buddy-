import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Computer Science - Unit 2: Core Python Language
 * Chapters:
 * 5. Python - Variables and Operators (மாறிகள் மற்றும் செயற்குறிகள்)
 * 6. Control Structures (கட்டுப்பாட்டுக் கட்டமைப்புகள்)
 * 7. Python Functions (பைத்தான் செயற்கூறுகள்)
 * 8. Strings and String Manipulation (சரங்கள் மற்றும் சரங்களைக் கையாளுதல்)
 */

export const CS_UNIT_2_CHAPTERS: Chapter[] = [
  {
    id: "c12_cs_u2_ch5",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 2,
    unitNameEn: "Unit 2: Core Python Language",
    unitNameTa: "அலகு 2: அடிப்படை பைத்தான் மொழி",
    chapterNumber: 5,
    titleEn: "Chapter 5: Python - Variables and Operators (மாறிகள் மற்றும் செயற்குறிகள்)",
    titleTa: "பாடம் 5: பைத்தான் - மாறிகள் மற்றும் செயற்குறிகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u2_ch6",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 2,
    unitNameEn: "Unit 2: Core Python Language",
    unitNameTa: "அலகு 2: அடிப்படை பைத்தான் மொழி",
    chapterNumber: 6,
    titleEn: "Chapter 6: Control Structures (கட்டுப்பாட்டுக் கட்டமைப்புகள்)",
    titleTa: "பாடம் 6: கட்டுப்பாட்டுக் கட்டமைப்புகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u2_ch7",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 2,
    unitNameEn: "Unit 2: Core Python Language",
    unitNameTa: "அலகு 2: அடிப்படை பைத்தான் மொழி",
    chapterNumber: 7,
    titleEn: "Chapter 7: Python Functions (பைத்தான் செயற்கூறுகள்)",
    titleTa: "பாடம் 7: பைத்தான் செயற்கூறுகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u2_ch8",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 2,
    unitNameEn: "Unit 2: Core Python Language",
    unitNameTa: "அலகு 2: அடிப்படை பைத்தான் மொழி",
    chapterNumber: 8,
    titleEn: "Chapter 8: Strings and String Manipulation (சரங்கள் மற்றும் கையாளுதல்)",
    titleTa: "பாடம் 8: சரங்கள் மற்றும் சரங்களைக் கையாளுதல்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CS_UNIT_2_NOTES: Record<string, NoteItem> = {
  c12_cs_u2_ch5: {
    id: "note_c12_cs_u2_ch5",
    chapterId: "c12_cs_u2_ch5",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Python Variables and Operators: Tokens, Data Types, and I/O",
    titleTa: "பைத்தான் மாறிகள் மற்றும் செயற்குறிகள்: வில்லைகள், தரவு வகைகள் மற்றும் I/O",
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
    changeNote: "Tokens, variables, and operators aligned with Chapter 5 blueprint.",
    changeNoteTa: "வில்லைகள், மாறிகள், செயற்குறிகள் மற்றும் உள்தள்ளல் விதிகளுடன் தயாரிக்கப்பட்டது.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Introduction to Python
Python was conceived by **Guido van Rossum** in 1991 at CWI, Netherlands. It is an interpreted, high-level, dynamically typed language.
* Two modes: **Interactive Mode** (\`>>>\` prompt for quick testing) and **Script Mode** (saving source files as \`.py\`).

### 2. Python Tokens
The smallest individual syntactic components:
1. **Identifiers**: Names for variables, functions, and classes. Rules: Must start with a letter (\`a-z, A-Z\`) or underscore (\`_\`); digits allowed afterwards; case-sensitive; cannot be a reserved keyword.
2. **Keywords**: Reserved words with dedicated meanings (e.g. \`if\`, \`def\`, \`while\`, \`return\`, \`True\`, \`False\`).
3. **Operators**:
   * Arithmetic: \`+\`, \`-\`, \`*\`, \`/\`, \`//\` (Floor division), \`%\` (Modulus), \`**\` (Exponentiation).
   * Relational: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
   * Logical: \`and\`, \`or\`, \`not\`.
   * Assignment: \`=\`, \`+=\`, \`-=\`, \`*=\`.
4. **Delimiters**: Punctuation symbols such as \`()\`, \`[]\`, \`{}\`, \`,\`, \`:\`.
5. **Literals**: Constant raw values: Numeric (Integer, Float, Complex), String (\`'text'\`, \`"text"\`, \`'''triple'''\`), Boolean (\`True\`, \`False\`).

### 3. Input, Output, and Indentation
* \`print("Total:", val)\`: Outputs data to standard console.
* \`name = input("Enter name: ")\`: Reads text string from user.
* \`n = int(input("Enter number: "))\`: Converts string into integer.
* **Indentation**: Python substitutes curly braces \`{}\` with mandatory whitespace indentation to demarcate code blocks.`,
    bodyTa: `### 1. பைத்தான் அறிமுகம்
1991-ல் நெதர்லாந்தின் CWI ஆய்வகத்தில் **கைடோ வான் ரோசம்** என்பவரால் உருவாக்கப்பட்டது. இது ஒரு உயர்நிலை, வரிமொழிபெயர்ப்பு மொழியாகும். ஊடாடும் முறை (\`>>>\`) மற்றும் ஸ்கிரிப்ட் முறை (\`.py\`) என இரு முறைகளில் இயங்கும்.

### 2. பைத்தான் வில்லைகள் (Tokens)
நிரலின் அடிப்படை அலகுகள்:
1. **குறிப்பெயர்கள் (Identifiers)**: மாறி மற்றும் செயற்கூறுகளின் பெயர்கள். எழுத்து அல்லது அடிக்கோட்டில் (_) துவங்க வேண்டும்.
2. **சிறப்புச் சொற்கள் (Keywords)**: \`if\`, \`def\`, \`while\`, \`True\` போன்ற முன்பே ஒதுக்கப்பட்ட சொற்கள்.
3. **செயற்குறிகள் (Operators)**:
   * கணித: \`+\`, \`-\`, \`*\`, \`//\` (தரை வகுத்தல்), \`**\` (அடுக்கு).
   * ஒப்பீட்டு: \`==\`, \`!=\`, \`<\`, \`>\`.
   * தருக்க: \`and\`, \`or\`, \`not\`.
4. **நிலை உருக்கள் (Literals)**: மாறா மதிப்புகள் (எண், சரம், பூலியன்).

### 3. உள்ளீடு, வெளியீடு மற்றும் உள்தள்ளல்
* \`print()\`: தகவலை வெளியிடவும், \`input()\`: தகவலைப் பெறவும் பயன்படுகிறது.
* அடைப்புக்குறிகளுக்குப் பதிலாக **உள்தள்ளல் (Indentation)** நிரல் தொகுதிகளை வரையறுக்கிறது.`,
    keyFormulas: [
      {
        nameEn: "Exponentiation and Floor Division",
        nameTa: "அடுக்கு மற்றும் தரை வகுத்தல்",
        formula: "x ** y (Power) and x // y (Integer quotient)",
        explanationEn: "2 ** 4 yields 16; 9 // 2 yields 4 without fractional remainder.",
        explanationTa: "2 ** 4 என்பது 16-ஐயும்; 9 // 2 என்பது மீதியற்ற முழு எண் ஈவான 4-ஐயும் தரும்."
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

  c12_cs_u2_ch6: {
    id: "note_c12_cs_u2_ch6",
    chapterId: "c12_cs_u2_ch6",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Control Structures: Branching, Looping, and Jump Statements",
    titleTa: "கட்டுப்பாட்டுக் கட்டமைப்புகள்: கிளைப்பிரித்தல், மடக்குகள் மற்றும் தாவல் கூற்றுகள்",
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
    changeNote: "Decision making, iteration, and jump statements with textbook code examples.",
    changeNoteTa: "if, while, for மடக்குகள் மற்றும் break, continue, pass கூற்றுகளுடன் தயாரிக்கப்பட்டது.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Types of Control Statements
A program statement that causes a jump of control from one part of the program to another is called a control statement.
1. **Sequential**: Statements executed one after another in order.
2. **Alternative / Branching**: Decisions based on Boolean test conditions.
3. **Iterative / Looping**: Repeated execution of statements until condition fails.

### 2. Decision Making Statements
* **Simple if**: Executes body if condition evaluates to True.
* **if..else**: Selects alternative path when condition is False.
* **if..elif..else**: Chains multiple sequential condition checks.

### 3. Iteration Statements
* **while loop**: Condition-controlled loop. Executes repeatedly as long as test expression remains True.
* **for loop**: Collection-controlled loop. Iterates across items in a sequence using the \`range(start, stop, step)\` function:
  * \`range(1, 10, 2)\` produces \`1, 3, 5, 7, 9\`.

### 4. Jump Statements
* **break**: Immediately terminates loop and transfers control outside.
* **continue**: Skips remaining statements in current iteration and proceeds to next iteration.
* **pass**: Null placeholder statement; does nothing when executed.`,
    bodyTa: `### 1. கட்டுப்பாட்டுக் கூற்றுகளின் வகைகள்
நிரலின் ஒரு பகுதியிலிருந்து மற்றொரு பகுதிக்குக் கட்டுப்பாட்டை மாற்றும் கூற்றுகள் கட்டுப்பாட்டுக் கூற்றுகள் எனப்படும்.
1. **தொடர்முறை (Sequential)**: வரிசையாக ஒவ்வொன்றாக இயங்குதல்.
2. **கிளைப்பிரித்தல் (Alternative/Branching)**: நிபந்தனையின் அடிப்படையில் பாதையைத் தேர்ந்தெடுத்தல்.
3. **மடக்குகள் (Iterative/Looping)**: நிபந்தனை முடியும் வரை மீண்டும் மீண்டும் இயங்குதல்.

### 2. கிளைப்பிரிப்புக் கூற்றுகள்
* \`if\`: நிபந்தனை மெய் எனில் இயங்கும்.
* \`if..else\`: மெய் எனில் ஒரு பகுதி, பொய் எனில் மாற்றுப் பகுதி.
* \`if..elif..else\`: பல நிபந்தனைகளை வரிசையாகச் சோதிக்கும்.

### 3. மடக்குகள் மற்றும் தாவல் கூற்றுகள்
* \`while\`: நிபந்தனை மெய்யாக இருக்கும் வரை இயங்கும்.
* \`for\`: \`range(start, stop, step)\` கொண்டு தொடர் மதிப்புகளில் இயங்கும்.
* \`break\`: மடக்கை விட்டு உடனே வெளியேற்றும்.
* \`continue\`: நடப்பு சுற்றைத் தவிர்த்து அடுத்த சுற்றுக்குச் செல்லும்.
* \`pass\`: எவ்விதச் செயலும் செய்யாத வெற்று கூற்று (Placeholder).`,
    keyFormulas: [
      {
        nameEn: "Range Function Syntax",
        nameTa: "Range செயற்கூறு வடிவம்",
        formula: "range(start, stop [, step])",
        explanationEn: "Generates numbers from start up to (stop - 1) incremented by step.",
        explanationTa: "start முதல் (stop - 1) வரை step அளவுக்கு எண்களை உருவாக்குகிறது."
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

  c12_cs_u2_ch7: {
    id: "note_c12_cs_u2_ch7",
    chapterId: "c12_cs_u2_ch7",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Python Functions: Defining, Arguments, Lambda, and Recursion",
    titleTa: "பைத்தான் செயற்கூறுகள்: வரையறை, செயலுருபுகள், லேம்ப்டா மற்றும் தற்சுழற்சி",
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
    changeNote: "4 types of function arguments, anonymous lambda functions, and recursive stacks.",
    changeNoteTa: "4 வகையான செயலுருபுகள், லேம்ப்டா செயற்கூறுகள் மற்றும் தற்சுழற்சி விதிகள்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Defining Functions in Python
Functions are defined using the \`def\` keyword followed by function name and parentheses:
\`\`\`python
def greet(name):
    """Docstring explaining function"""
    return "Hello " + name
\`\`\`

### 2. Four Types of Function Arguments
1. **Required Arguments**: Matched positionally; must supply all required parameters.
2. **Keyword Arguments**: Arguments passed with parameter names (e.g. \`greet(age=17, name="Rani")\`); order does not matter.
3. **Default Arguments**: Parameter takes default value if omitted in call (e.g. \`def calc(rate=0.05):\`).
4. **Variable-Length Arguments**: Prefixed with asterisk \`*args\`; accepts tuple of arbitrary arguments.

### 3. Anonymous (Lambda) Functions
Defined using the \`lambda\` keyword without a name:
\`\`\`python
square = lambda x: x * x
print(square(5)) # Outputs 25
\`\`\`

### 4. Recursive Functions
A function that calls itself is recursive. Must have:
1. **Base Case**: Halting condition to prevent infinite recursion.
2. **Recursive Step**: Progress towards the base case.

### 5. Built-in Mathematical Functions
* \`abs(x)\`: Absolute magnitude.
* \`ord(char)\`: ASCII/Unicode integer code.
* \`chr(code)\`: Character matching ASCII integer.
* \`bin(n)\`: Binary string representation (prefixed with \`0b\`).
* \`pow(base, exp)\`: Exponentiation calculation.`,
    bodyTa: `### 1. செயற்கூறு வரையறை
பைத்தானில் செயற்கூறுகளை உருவாக்க \`def\` சிறப்புச் சொல் பயன்படுகிறது:
\`\`\`python
def area(r):
    return 3.14 * r * r
\`\`\`

### 2. செயலுருபுகளின் நான்கு வகைகள்
1. **தேவையான செயலுருபுகள் (Required Arguments)**: சரியான வரிசையில் அனைத்து மதிப்புகளும் தரப்பட வேண்டும்.
2. **முக்கியச்சொல் செயலுருபுகள் (Keyword Arguments)**: அளபுரு பெயருடன் மதிப்புகள் தரப்படும் (வரிசை முக்கியமில்லை).
3. **கொடாநிலை செயலுருபுகள் (Default Arguments)**: மதிப்பு தராவிட்டால் முன்னிருப்பு மதிப்பை ஏற்கும்.
4. **மாறும் நீள செயலுருபுகள் (Variable-length Arguments - *args)**: எத்தனை மதிப்புகளை வேண்டுமானாலும் ஏற்கும்.

### 3. பெயரற்ற (Lambda) செயற்கூறுகள்
\`lambda\` சிறப்புச் சொல்லைக் கொண்டு எளிய ஒற்றை வரிக் கோவைகளாக வரையறுக்கப்படும் பெயரற்ற செயற்கூறுகள்:
\`square = lambda x: x * x\`

### 4. தற்சுழற்சி செயற்கூறு (Recursion)
தன்னைத்தானே மீண்டும் மீண்டும் அழைத்துக் கொள்ளும் செயற்கூறு தற்சுழற்சி எனப்படும் (எ.கா: காரணியல் - Factorial).`,
    keyFormulas: [
      {
        nameEn: "Lambda Expression Format",
        nameTa: "லேம்ப்டா செயற்கூறு வடிவம்",
        formula: "lambda [arg1 [, arg2, ...]]: expression",
        explanationEn: "Single-line anonymous function returning the evaluated expression.",
        explanationTa: "பெயரின்றி ஒற்றை வரியில் விடையைத் தரும் பெயரற்ற செயற்கூறு."
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

  c12_cs_u2_ch8: {
    id: "note_c12_cs_u2_ch8",
    chapterId: "c12_cs_u2_ch8",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Strings and String Manipulation: Slicing, Operators, and Methods",
    titleTa: "சரங்கள் மற்றும் சரங்களைக் கையாளுதல்: துண்டாக்குதல், செயற்குறிகள் மற்றும் செயற்கூறுகள்",
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
    changeNote: "String indexing, immutability, slicing syntax, and standard string methods.",
    changeNoteTa: "சரங்களின் சுட்டெண், மாற்ற இயலாமை, வெட்டுதல் மற்றும் முக்கியச் செயற்கூறுகள்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. What is a String?
A string is an immutable sequence of characters enclosed in single quotes (\`' \`), double quotes (\`" \`), or triple quotes (\`''' '''\` or \`""" """\` for multiline text).

### 2. Bidirectional String Indexing
* **Positive Subscript (0 to n - 1)**: Traverses from left to right.
* **Negative Subscript (-1 to -n)**: Traverses from right to left, where \`-1\` is the last character.

### 3. String Immutability
Strings in Python are **immutable**—once defined, individual characters cannot be overwritten in place (\`s[0] = 'X'\` raises a TypeError). To modify a string, a new string object must be created.

### 4. String Slicing
Substrings are extracted using slicing syntax:
\`\`\`python
str[start : end : stride]
# Extracts from index 'start' up to (end - 1)
# s[::-1] reverses the string
\`\`\`

### 5. String Operators
* **Concatenation (\`+\`)**: Joins two strings together (\`"Welcome" + "Home"\`).
* **Repetition (\`*\`)**: Multiplies string repetitions (\`"Hi" * 3\` gives \`"HiHiHi"\`).
* **Membership (\`in\`, \`not in\`)**: Tests if substring is present.

### 6. Key Built-in String Functions
* \`len(s)\`: Total characters.
* \`s.capitalize()\`: Capitalizes first letter.
* \`s.lower()\` / \`s.upper()\`: Case conversion.
* \`s.count(sub)\`: Counts non-overlapping occurrences.
* \`s.find(sub)\`: Returns index of first match, or \`-1\` if not found.
* \`s.replace(old, new)\`: Replaces occurrences with new substring.`,
    bodyTa: `### 1. சரம் (String) என்றால் என்ன?
சரம் என்பது எழுத்துருக்களின் மாற்றியமைக்க இயலாத (Immutable) தொடர் வரிசையாகும். ஒற்றை, இரட்டை அல்லது மூன்று மேற்கோள் குறிகளுக்குள் தரப்படும்.

### 2. இருவழி சுட்டெண்கள் (Indexing)
* **நேர்மறை சுட்டெண் (0 முதல் n - 1)**: இடமிருந்து வலமாக 0-ல் துவங்கும்.
* **எதிர்மறை சுட்டெண் (-1 முதல் -n)**: வலமிருந்து இடமாக -1-ல் துவங்கும் (-1 என்பது கடைசி எழுத்து).

### 3. சரத்தை துண்டாக்குதல் (String Slicing)
\`str[start : end : stride]\` என்ற வடிவம் மூலம் துணைச் சரங்களை வெட்டியெடுக்கலாம்:
\`s[::-1]\` என்பது முழுச் சரத்தையும் தலைகீழாக மாற்றும்.

### 4. சர செயற்குறிகள் மற்றும் செயற்கூறுகள்
* \`+\`: சரங்களை இணைக்க (Concatenation).
* \`*\`: சரத்தை மீண்டும் மீண்டும் உருவாக்க (Repetition).
* \`len(s)\`: சரத்தின் நீளம்.
* \`s.find(sub)\`: துணைச்சரம் உள்ள இடத்தை அறிய (இல்லையெனில் \`-1\` தரும்).`,
    keyFormulas: [
      {
        nameEn: "String Slicing Formula",
        nameTa: "சரம் வெட்டுதல் வடிவம்",
        formula: "s[start : stop : step]",
        explanationEn: "Retrieves characters starting from start index up to stop-1.",
        explanationTa: "start முதல் stop-1 வரை உள்ள எழுத்துக்களை step அளவில் வெட்டியெடுக்கிறது."
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

export const CS_UNIT_2_SUMMARIES: Record<string, SummaryItem> = {
  c12_cs_u2_ch5: {
    id: "sum_c12_cs_u2_ch5",
    chapterId: "c12_cs_u2_ch5",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Python relies on tokens like identifiers, keywords, operators, delimiters, and literals. Variables are dynamically bound names, and blocks are formed through indentation.",
    simpleExplanationTa: "பைத்தான் வில்லைகள், மாறிகள் மற்றும் உள்தள்ளல் முறையைப் பயன்படுத்தி இயங்குகிறது. input() மற்றும் print() உள்ளீடு/வெளியீட்டை நிர்வகிக்கின்றன.",
    keyPointsEn: [
      "Created by Guido van Rossum in 1991.",
      "Identifiers cannot begin with a numeric digit.",
      "** represents power; // represents integer floor division.",
      "Indentation replaces curly braces for grouping statements."
    ],
    keyPointsTa: [
      "1991-ல் கைடோ வான் ரோசமால் உருவாக்கப்பட்டது.",
      "குறிப்பெயர்கள் எண்ணில் துவங்கக் கூடாது.",
      "** அடுக்குச் செயற்குறி; // தரை வகுத்தல் செயற்குறி.",
      "அடைப்புக்குறிகளுக்குப் பதிலாக உள்தள்ளல் நிரல் தொகுதிகளை அமைக்கிறது."
    ]
  },
  c12_cs_u2_ch6: {
    id: "sum_c12_cs_u2_ch6",
    chapterId: "c12_cs_u2_ch6",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Control structures regulate statement execution flow via alternative branching (if, elif, else), looping (while, for with range), and jump controls (break, continue, pass).",
    simpleExplanationTa: "கட்டுப்பாட்டுக் கட்டமைப்புகள் நிரலின் இயக்கப் பாதையைத் தீர்மானிக்கின்றன. கிளைப்பிரிப்பு, மடக்குகள் மற்றும் தாவல் கூற்றுகள் மூலம் கட்டுப்பாட்டை மாற்றலாம்.",
    keyPointsEn: [
      "if..elif..else evaluates chained conditional logic.",
      "while loops continue while condition evaluates True.",
      "for loops iterate across sequences generated by range().",
      "break terminates loops; continue skips to next cycle; pass is a no-op."
    ],
    keyPointsTa: [
      "if..elif..else பல நிபந்தனைகளை வரிசையாகச் சோதிக்கிறது.",
      "while நிபந்தனை மெய்யாக இருக்கும் வரை இயங்கும்.",
      "for மடக்கிற்கு range() எண்களை உருவாக்குகிறது.",
      "break வெளியேற்றும்; continue அடுத்த சுற்றுக்குச் செல்லும்; pass வெற்று கூற்று."
    ]
  },
  c12_cs_u2_ch7: {
    id: "sum_c12_cs_u2_ch7",
    chapterId: "c12_cs_u2_ch7",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Functions encapsulate reusable code using the def statement. Arguments can be positional, keyword, default, or variable-length. Lambda creates inline anonymous functions.",
    simpleExplanationTa: "செயற்கூறுகள் def மூலம் உருவாக்கப்படுகின்றன. நான்கு வகையான செயலுருபுகள் உள்ளன. லேம்ப்டா என்பது ஒற்றை வரி பெயரற்ற செயற்கூறு ஆகும்.",
    keyPointsEn: [
      "def keyword initiates function definitions.",
      "Four argument styles: Required, Keyword, Default, Variable-length (*args).",
      "lambda expressions create compact anonymous functions.",
      "Recursion requires a base condition to terminate."
    ],
    keyPointsTa: [
      "def கொண்டு செயற்கூறுகள் உருவாக்கப்படுகின்றன.",
      "நான்கு வகையான செயலுருபுகள் உள்ளன.",
      "lambda மூலம் பெயரற்ற செயற்கூறுகளை உருவாக்கலாம்.",
      "தற்சுழற்சி முடிவடைய அடிப்படை நிபந்தனை அவசியம்."
    ]
  },
  c12_cs_u2_ch8: {
    id: "sum_c12_cs_u2_ch8",
    chapterId: "c12_cs_u2_ch8",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Strings are immutable sequences of characters supporting positive (0 to n-1) and negative (-1 to -n) indexing, slicing [start:stop:step], and built-in text methods.",
    simpleExplanationTa: "சரங்கள் மாற்றியமைக்க இயலாதவை. நேர்மறை மற்றும் எதிர்மறை சுட்டெண்கள் கொண்டவை. வெட்டுதல் மற்றும் பல்வேறு சரச் செயற்கூறுகளைக் கொண்டு கையாளலாம்.",
    keyPointsEn: [
      "Strings are immutable in Python memory.",
      "Negative index -1 points to the last character.",
      "str[::-1] reverses a string.",
      "find() returns -1 when target substring is absent."
    ],
    keyPointsTa: [
      "சரங்கள் நினைவகத்தில் மாற்றியமைக்க இயலாதவை.",
      "எதிர்மறை சுட்டெண் -1 கடைசி எழுத்தைக் குறிக்கும்.",
      "str[::-1] சரத்தைத் தலைகீழாக மாற்றும்.",
      "find() சரம் கிடைக்காவிட்டால் -1 விடையைத் தரும்."
    ]
  }
};

export const CS_UNIT_2_QUIZZES: Record<string, ChapterQuiz> = {
  c12_cs_u2_ch5: {
    id: "quiz_c12_cs_u2_ch5",
    chapterId: "c12_cs_u2_ch5",
    titleEn: "Variables, Tokens, and Operators Board Quiz",
    titleTa: "மாறிகள் மற்றும் செயற்குறிகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Who developed the Python programming language?",
        questionTa: "பைத்தான் நிரலாக்க மொழியை உருவாக்கியவர் யார்?",
        optionsEn: ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling"],
        optionsTa: ["கைடோ வான் ரோசம் (Guido van Rossum)", "டென்னிஸ் ரிட்சி", "ப்ஜார்னே ஸ்ட்ரௌஸ்ட்ரப்", "ஜேம்ஸ் கோஸ்லிங்"],
        correctAnswer: "Guido van Rossum",
        explanationEn: "Guido van Rossum created Python in 1991 at CWI in the Netherlands.",
        explanationTa: "கைடோ வான் ரோசம் 1991-ல் நெதர்லாந்தில் பைத்தானை உருவாக்கினார்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "What is the evaluated output of the expression 7 // 2 in Python?",
        questionTa: "பைத்தானில் 7 // 2 என்ற கோவையின் வெளியீடு என்ன?",
        optionsEn: ["3", "3.5", "1", "3.0"],
        optionsTa: ["3", "3.5", "1", "3.0"],
        correctAnswer: "3",
        explanationEn: "// is floor division which returns the truncated integer quotient.",
        explanationTa: "// என்பது தரை வகுத்தல் செயற்குறி ஆகும்; இது முழு எண் ஈவான 3-ஐ மட்டுமே தரும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "In Python, variable identifiers can begin with an underscore (_).",
        questionTa: "பைத்தானில் மாறிகளின் பெயர் அடிக்கோட்டுடன் (_) துவங்கலாம்.",
        correctAnswer: true,
        explanationEn: "True. Identifiers may start with a letter or an underscore.",
        explanationTa: "சரி. குறிப்பெயர்கள் எழுத்து அல்லது அடிக்கோட்டுடன் துவங்கலாம்."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which built-in function returns the memory identification address of an object in Python?",
        questionTa: "பைத்தானில் ஒரு பொருளின் நினைவக முகவரியைப் பெறப் பயன்படும் செயற்கூறு எது?",
        optionsEn: ["id()", "type()", "address()", "ref()"],
        optionsTa: ["id()", "type()", "address()", "ref()"],
        correctAnswer: "id()",
        explanationEn: "id() returns the unique integer identity address of the object in memory.",
        explanationTa: "id() செயற்கூறு நினைவகத்தில் உள்ள பொருளின் தனித்துவமான முகவரியைத் தருகிறது."
      }
    ]
  },

  c12_cs_u2_ch6: {
    id: "quiz_c12_cs_u2_ch6",
    chapterId: "c12_cs_u2_ch6",
    titleEn: "Control Structures Board Quiz",
    titleTa: "கட்டுப்பாட்டுக் கட்டமைப்புகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What sequence is generated by range(1, 10, 2)?",
        questionTa: "range(1, 10, 2) உருவாக்கும் எண்களின் வரிசை எது?",
        optionsEn: ["1, 3, 5, 7, 9", "1, 2, 3, 4, 5, 6, 7, 8, 9", "2, 4, 6, 8, 10", "1, 3, 5, 7"],
        optionsTa: ["1, 3, 5, 7, 9", "1, 2, 3, 4, 5, 6, 7, 8, 9", "2, 4, 6, 8, 10", "1, 3, 5, 7"],
        correctAnswer: "1, 3, 5, 7, 9",
        explanationEn: "Starts at 1, steps by 2, and stops before reaching 10.",
        explanationTa: "1-ல் துவங்கி, 2 எண்களாகத் தாவி, 10-க்கு முன் (9) வரை எண்களை உருவாக்கும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which jump statement skips remaining statements in current loop iteration and moves to next?",
        questionTa: "மடக்கின் நடப்புச் சுற்றைத் தவிர்த்து அடுத்த சுற்றுக்குச் செல்ல உதவும் கூற்று எது?",
        optionsEn: ["continue", "break", "pass", "exit"],
        optionsTa: ["continue", "break", "pass", "exit"],
        correctAnswer: "continue",
        explanationEn: "continue forces the loop to start the next iteration immediately.",
        explanationTa: "continue கூற்று நடப்புச் சுற்றைத் தவிர்த்து அடுத்த சுற்றுக்குக் கட்டுப்பாட்டை மாற்றுகிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "The pass statement in Python performs no operation and acts as a placeholder.",
        questionTa: "பைத்தானில் pass கூற்று எந்தச் செயலையும் செய்யாது மற்றும் ஒரு வெற்று கூற்றாகச் செயல்படுகிறது.",
        correctAnswer: true,
        explanationEn: "True. pass is an empty null operation statement.",
        explanationTa: "சரி. pass என்பது எந்த வேலையும் செய்யாத ஒரு வெற்று கூற்று ஆகும்."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "What happens if the condition of a while loop never evaluates to False?",
        questionTa: "while மடக்கின் நிபந்தனை ஒருபோதும் பொய்யாக மாறவில்லை என்றால் என்ன நிகழும்?",
        optionsEn: ["Infinite loop", "Syntax error", "Automatic termination after 100", "Memory flush"],
        optionsTa: ["முடிவற்ற மடக்கு (Infinite loop)", "தொடரியல் பிழை", "100 சுற்றுகளில் முடியும்", "நினைவக அழிவு"],
        correctAnswer: "Infinite loop",
        explanationEn: "The loop executes infinitely until interrupted externally.",
        explanationTa: "நிபந்தனை பொய்யாகாத வரை அது முடிவற்ற மடக்காய் (Infinite loop) தொடர்ந்து இயங்கும்."
      }
    ]
  },

  c12_cs_u2_ch7: {
    id: "quiz_c12_cs_u2_ch7",
    chapterId: "c12_cs_u2_ch7",
    titleEn: "Python Functions Board Quiz",
    titleTa: "பைத்தான் செயற்கூறுகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which keyword is used to create an anonymous function in Python?",
        questionTa: "பைத்தானில் பெயரற்ற செயற்கூறை உருவாக்கப் பயன்படும் சிறப்புச் சொல் எது?",
        optionsEn: ["lambda", "def", "func", "anon"],
        optionsTa: ["lambda", "def", "func", "anon"],
        correctAnswer: "lambda",
        explanationEn: "lambda is used to define inline anonymous functions.",
        explanationTa: "lambda சிறப்புச் சொல் மூலம் பெயரற்ற செயற்கூறுகள் உருவாக்கப்படுகின்றன."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "What is returned by the built-in function ord('A')?",
        questionTa: "ord('A') என்ற உள்ளிணைந்த செயற்கூறின் வெளியீடு என்ன?",
        optionsEn: ["65", "97", "'a'", "True"],
        optionsTa: ["65", "97", "'a'", "True"],
        correctAnswer: "65",
        explanationEn: "ord() returns the ASCII/Unicode code point (65 for 'A').",
        explanationTa: "ord('A') என்பது 'A' எழுத்தின் ASCII மதிப்பான 65-ஐத் தரும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "In Python, default arguments must appear after all non-default arguments.",
        questionTa: "பைத்தானில் கொடாநிலை செயலுருபுகள் முன்னிருப்பு அற்ற செயலுருபுகளுக்குப் பின்னரே வர வேண்டும்.",
        correctAnswer: true,
        explanationEn: "True. Positional parameters without defaults cannot follow default parameters.",
        explanationTa: "சரி. கொடாநிலை செயலுருபுகள் கடைசியில்தான் வர வேண்டும்."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which syntax allows a function to accept a variable number of positional arguments?",
        questionTa: "மாறுபடும் எண்ணிக்கையிலான செயலுருபுகளை ஏற்க உதவும் குறியீடு எது?",
        optionsEn: ["*args", "**kwargs", "&params", "$args"],
        optionsTa: ["*args", "**kwargs", "&params", "$args"],
        correctAnswer: "*args",
        explanationEn: "*args captures arbitrary positional arguments into a tuple.",
        explanationTa: "*args என்பது எத்தனை அளபுருக்கள் அனுப்பப்பட்டாலும் அவற்றை வரிசைமுறையாக ஏற்கும்."
      }
    ]
  },

  c12_cs_u2_ch8: {
    id: "quiz_c12_cs_u2_ch8",
    chapterId: "c12_cs_u2_ch8",
    titleEn: "Strings and Slicing Board Quiz",
    titleTa: "சரங்கள் மற்றும் கையாளுதல் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What is the negative index of the last character in a string?",
        questionTa: "ஒரு சரத்தின் கடைசி எழுத்தின் எதிர்மறை சுட்டெண் என்ன?",
        optionsEn: ["-1", "0", "-0", "-(n)"],
        optionsTa: ["-1", "0", "-0", "-(n)"],
        correctAnswer: "-1",
        explanationEn: "Negative indexing counts backward from the end, starting at -1.",
        explanationTa: "எதிர்மறை சுட்டெண் வலமிருந்து இடமாக -1-ல் துவங்கும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "What is the value of 'COMPUTER'[1:4]?",
        questionTa: "'COMPUTER'[1:4] என்பதன் மதிப்பு என்ன?",
        optionsEn: ["OMP", "COMP", "OMPU", "MPU"],
        optionsTa: ["OMP", "COMP", "OMPU", "MPU"],
        correctAnswer: "OMP",
        explanationEn: "Extracts characters from index 1 up to index 3 ('O', 'M', 'P').",
        explanationTa: "சுட்டெண் 1 முதல் 3 வரை உள்ள 'O', 'M', 'P' என்ற எழுத்துக்களைத் தரும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "Python strings are mutable and characters can be replaced using index assignment.",
        questionTa: "பைத்தான் சரங்கள் மாற்றக்கூடியவை மற்றும் சுட்டெண் மூலம் எழுத்துக்களை நேரடியாக மாற்றலாம்.",
        correctAnswer: false,
        explanationEn: "False! Strings are immutable; direct item assignment causes a TypeError.",
        explanationTa: "தவறு! சரங்கள் நினைவகத்தில் மாற்றியமைக்க இயலாதவை (Immutable)."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "What does the find() method return if the search substring is not present?",
        questionTa: "தேடப்படும் துணைச்சரம் இல்லையெனில் find() செயற்கூறு என்ன மதிப்பைத் தரும்?",
        optionsEn: ["-1", "0", "False", "None"],
        optionsTa: ["-1", "0", "False", "None"],
        correctAnswer: "-1",
        explanationEn: "find() returns -1 upon failure, unlike index() which raises ValueError.",
        explanationTa: "துணைச்சரம் கிடைக்கவில்லை என்றால் find() -1 என்ற எண்ணைத் தரும்."
      }
    ]
  }
};

export const CS_UNIT_2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_cs_u2_ch5: {
    id: "diag_c12_cs_u2_ch5",
    chapterId: "c12_cs_u2_ch5",
    titleEn: "Python Token Hierarchy & Variable Memory Pointer Model",
    titleTa: "பைத்தான் வில்லைகள் மற்றும் நினைவக மாதிரி வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="30" width="540" height="70" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="14">Python Tokens (வில்லைகள்)</text>
      <text x="300" y="80" text-anchor="middle" fill="#475569" font-size="12">Keywords • Identifiers • Operators • Delimiters • Literals</text>
      <rect x="50" y="140" width="140" height="90" rx="12" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      <text x="120" y="170" text-anchor="middle" font-weight="bold" fill="#334155" font-size="14">Variable Name</text>
      <text x="120" y="195" text-anchor="middle" font-mono fill="#2563eb" font-size="16">x = 100</text>
      <path d="M 190 185 L 370 185" stroke="#2563eb" stroke-width="3" stroke-dasharray="4"/>
      <rect x="380" y="140" width="160" height="90" rx="12" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="460" y="170" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="14">Memory Heap Object</text>
      <text x="460" y="195" text-anchor="middle" fill="#15803d" font-size="13">Value: 100 (Type: int)</text>
      <text x="460" y="215" text-anchor="middle" font-mono fill="#65a30d" font-size="11">id: 0x7ffd9b</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Token Classifications", labelTa: "வில்லை வகைப்பாடுகள்", descriptionEn: "The fundamental syntax elements of every Python script.", descriptionTa: "பைத்தான் நிரலின் அடிப்படை இலக்கண வில்லைகள்.", x: 50, y: 22 },
      { id: "l2", labelEn: "Variable Identifier", labelTa: "மாறியின் குறிப்பெயர்", descriptionEn: "Tag bound to an object reference in namespace.", descriptionTa: "நினைவகத்தில் உள்ள பொருளைக் குறிக்கும் பெயர்ப்பலகை.", x: 20, y: 62 },
      { id: "l3", labelEn: "Immutable Memory Object", labelTa: "நினைவக எண் பொருள்", descriptionEn: "Actual integer object allocated on the Python heap.", descriptionTa: "மதிப்பு சேமிக்கப்பட்ட நினைவகக் குவியல் பகுதி.", x: 77, y: 62 }
    ]
  },

  c12_cs_u2_ch6: {
    id: "diag_c12_cs_u2_ch6",
    chapterId: "c12_cs_u2_ch6",
    titleEn: "Control Flow: Decision Branching & Loop Mechanics",
    titleTa: "கட்டுப்பாட்டுப் பாதை: கிளைப்பிரித்தல் மற்றும் மடக்கு செயல்முறை",
    diagramType: "flowchart",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <ellipse cx="300" cy="35" rx="70" ry="20" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="300" y="40" text-anchor="middle" font-weight="bold" fill="#1e293b" font-size="12">Start Program</text>
      <line x1="300" y1="55" x2="300" y2="90" stroke="#475569" stroke-width="2"/>
      <polygon points="300,90 380,130 300,170 220,130" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="300" y="135" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="12">Condition True?</text>
      <line x1="380" y1="130" x2="450" y2="130" stroke="#16a34a" stroke-width="3"/>
      <rect x="450" y="105" width="120" height="50" rx="8" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="510" y="135" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="12">Execute Body</text>
      <line x1="220" y1="130" x2="150" y2="130" stroke="#dc2626" stroke-width="3"/>
      <rect x="30" y="105" width="120" height="50" rx="8" fill="#fee2e2" stroke="#dc2626" stroke-width="2"/>
      <text x="90" y="135" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="12">False / Exit</text>
      <path d="M 510 155 L 510 240 L 300 240" stroke="#16a34a" stroke-width="2"/>
      <ellipse cx="300" cy="270" rx="70" ry="20" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
      <text x="300" y="275" text-anchor="middle" font-weight="bold" fill="#1e293b" font-size="12">Continue / End</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Diamond Decision Block", labelTa: "வைர முடிவெடுக்கும் தொகுதி", descriptionEn: "Evaluates boolean expression for branching.", descriptionTa: "மெய்/பொய் நிபந்தனையைச் சோதிக்கும் தொகுதி.", x: 50, y: 44 },
      { id: "l2", labelEn: "True Path (Loop/Action)", labelTa: "மெய் பாதை (மடக்கு/செயல்)", descriptionEn: "Executes statements inside the indented block.", descriptionTa: "நிபந்தனை மெய்யாக இருக்கும் போது இயங்கும் பகுதி.", x: 85, y: 44 },
      { id: "l3", labelEn: "False Path (Exit/Else)", labelTa: "பொய் பாதை (வெளியேற்றம்)", descriptionEn: "Exits loop or branches to the else block.", descriptionTa: "நிபந்தனை பொய்யானால் வெளியேறும் பாதை.", x: 15, y: 44 }
    ]
  },

  c12_cs_u2_ch7: {
    id: "diag_c12_cs_u2_ch7",
    chapterId: "c12_cs_u2_ch7",
    titleEn: "Function Arguments Passing & Call Stack Recursion",
    titleTa: "செயற்கூறு செயலுருபுகள் மற்றும் தற்சுழற்சி அடுக்கு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="40" width="220" height="220" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="150" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">4 Argument Types</text>
      <text x="150" y="105" text-anchor="middle" fill="#334155" font-size="12">1. Positional / Required</text>
      <text x="150" y="135" text-anchor="middle" fill="#334155" font-size="12">2. Keyword (key=val)</text>
      <text x="150" y="165" text-anchor="middle" fill="#334155" font-size="12">3. Default (arg=default)</text>
      <text x="150" y="195" text-anchor="middle" fill="#334155" font-size="12">4. Variable-length (*args)</text>
      <rect x="320" y="40" width="240" height="220" rx="14" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">Recursion Call Stack</text>
      <rect x="350" y="180" width="180" height="35" rx="6" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="440" y="202" text-anchor="middle" font-weight="bold" fill="#581c87" font-size="12">fact(1) -> returns 1 (Base)</text>
      <rect x="350" y="135" width="180" height="35" rx="6" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="440" y="157" text-anchor="middle" font-weight="bold" fill="#581c87" font-size="12">fact(2) -> 2 * fact(1)</text>
      <rect x="350" y="90" width="180" height="35" rx="6" fill="#f3e8ff" stroke="#a855f7" stroke-width="2"/>
      <text x="440" y="112" text-anchor="middle" font-weight="bold" fill="#581c87" font-size="12">fact(3) -> 3 * fact(2)</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Argument Styles", labelTa: "செயலுருபு பாணிகள்", descriptionEn: "Positional, keyword, default, and variable arguments.", descriptionTa: "நான்கு வகையான செயலுருபுகள்.", x: 25, y: 50 },
      { id: "l2", labelEn: "Recursion Stack Push", labelTa: "தற்சுழற்சி அடுக்கு ஏற்றுதல்", descriptionEn: "Stack frames pushed until base condition is met.", descriptionTa: "அடிப்படை நிபந்தனை எட்டும் வரை அடுக்குகள் குவியும்.", x: 73, y: 35 },
      { id: "l3", labelEn: "Base Condition Resolution", labelTa: "அடிப்படை நிபந்தனை தீர்வு", descriptionEn: "Halting frame unwinds the stack to calculate final answer.", descriptionTa: "அடிப்படை விடை கிடைத்தவுடன் அடுக்குகள் ஒவ்வொன்றாக விடையளிக்கும்.", x: 73, y: 65 }
    ]
  },

  c12_cs_u2_ch8: {
    id: "diag_c12_cs_u2_ch8",
    chapterId: "c12_cs_u2_ch8",
    titleEn: "Bidirectional String Indexing & Slicing Architecture",
    titleTa: "இருவழி சரம் சுட்டெண் மற்றும் வெட்டுதல் கட்டமைப்பு",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="50" y="110" width="500" height="60" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <line x1="121" y1="110" x2="121" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="192" y1="110" x2="192" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="264" y1="110" x2="264" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="335" y1="110" x2="335" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="407" y1="110" x2="407" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <line x1="478" y1="110" x2="478" y2="170" stroke="#3b82f6" stroke-width="2"/>
      <text x="85" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">P</text>
      <text x="156" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">Y</text>
      <text x="228" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">T</text>
      <text x="300" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">H</text>
      <text x="371" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">O</text>
      <text x="442" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">N</text>
      <text x="514" y="148" text-anchor="middle" font-bold font-size="20" fill="#1e3a8a">!</text>
      <text x="85" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">0</text>
      <text x="156" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">1</text>
      <text x="228" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">2</text>
      <text x="300" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">3</text>
      <text x="371" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">4</text>
      <text x="442" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">5</text>
      <text x="514" y="80" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="16">6</text>
      <text x="85" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-7</text>
      <text x="156" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-6</text>
      <text x="228" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-5</text>
      <text x="300" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-4</text>
      <text x="371" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-3</text>
      <text x="442" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-2</text>
      <text x="514" y="215" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="16">-1</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Positive Indices (0 to n-1)", labelTa: "நேர்மறை சுட்டெண்கள் (0 முதல் n-1)", descriptionEn: "Forward traversal from left to right.", descriptionTa: "இடமிருந்து வலமாக 0-ல் துவங்கும் சுட்டெண்கள்.", x: 50, y: 25 },
      { id: "l2", labelEn: "String Buffer Characters", labelTa: "சரம் எழுத்துருக்கள்", descriptionEn: "Immutable character sequence held in memory.", descriptionTa: "நினைவகத்தில் உள்ள மாற்ற இயலாத சரம்.", x: 50, y: 47 },
      { id: "l3", labelEn: "Negative Indices (-1 to -n)", labelTa: "எதிர்மறை சுட்டெண்கள் (-1 முதல் -n)", descriptionEn: "Backward traversal from right to left, where -1 is the last character.", descriptionTa: "வலமிருந்து இடமாக -1-ல் துவங்கும் சுட்டெண்கள்.", x: 50, y: 72 }
    ]
  }
};

export const CS_UNIT_2_VIDEOS: Record<string, VideoExplainer> = {
  c12_cs_u2_ch5: {
    id: "vid_c12_cs_u2_ch5",
    chapterId: "c12_cs_u2_ch5",
    titleEn: "Animation: Inside Python Tokens and Memory References",
    titleTa: "அனிமேஷன்: பைத்தான் மாறிகள் மற்றும் நினைவக இணைப்புகள்",
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Tokens: The Vocabulary of Python",
        titleTa: "வில்லைகள்: பைத்தானின் அகராதி",
        visualDescription: "A code scanner breaking a python line 'total = price * 1.18' into colored token blocks.",
        narrationEn: "Every Python line is dissected into tokens: variable identifiers, operators like multiplication, and literal numbers.",
        narrationTa: "நீங்கள் எழுதும் ஒவ்வொரு நிரல் வரியும் குறிப்பெயர்கள், செயற்குறிகள், நிலை உருக்கள் என்ற வில்லைகளாகப் பிரிக்கப்படுகிறது.",
        conceptKey: "Tokenization"
      },
      {
        sceneNumber: 2,
        titleEn: "Variables are Name Tags, Not Boxes",
        titleTa: "மாறிகள் பெயர்ப்பலகைகளே!",
        visualDescription: "A variable 'x' represented as a luggage tag tied to an integer object 42 in memory.",
        narrationEn: "Unlike other languages where variables are fixed memory boxes, Python variables are lightweight tags pointing to objects in the heap!",
        narrationTa: "மாறிகள் நிலையான பெட்டிகள் அல்ல; அவை நினைவகப் பொருள்களைச் சுட்டிக்காட்டும் பெயர்ப்பலகைகள்!",
        conceptKey: "Reference Binding"
      },
      {
        sceneNumber: 3,
        titleEn: "The Power of Indentation",
        titleTa: "உள்தள்ளலின் முக்கியத்துவம்",
        visualDescription: "Blocks of code sliding into aligned slots without any curly braces.",
        narrationEn: "Python enforces clean, readable code by replacing curly brackets with mandatory whitespace indentation.",
        narrationTa: "நெளிவுக் குறிகளுக்குப் பதிலாக உள்தள்ளலைப் பயன்படுத்தி நிரலை நேர்த்தியாகவும் பிழையின்றியும் பைத்தான் அமைக்கிறது.",
        conceptKey: "Whitespace Indentation"
      }
    ]
  },

  c12_cs_u2_ch6: {
    id: "vid_c12_cs_u2_ch6",
    chapterId: "c12_cs_u2_ch6",
    titleEn: "Animation: Mastering Control Structures & Loops",
    titleTa: "அனிமேஷன்: கட்டுப்பாட்டுக் கட்டமைப்புகள் செயல்முறை விளக்கம்",
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Branching Fork in the Road",
        titleTa: "வழியில் பிரியும் பாதைகள்",
        visualDescription: "A train approaching railway points; shifting track depending on whether signal is True or False.",
        narrationEn: "Just like a railway switch diverts a train based on signals, if-else structures direct execution along alternate paths.",
        narrationTa: "ரயில்வே பாதை சிக்னலுக்கு ஏற்ப மாறுவது போல, if-else நிபந்தனையின் அடிப்படையில் சரியான நிரல் பாதையைத் தேர்ந்தெடுக்கிறது.",
        conceptKey: "Branching Decision"
      },
      {
        sceneNumber: 2,
        titleEn: "Looping with Range",
        titleTa: "Range கொண்டு சுழலும் மடக்கு",
        visualDescription: "A carousel stepping through numbers 1, 3, 5, 7, 9 with a step counter.",
        narrationEn: "The for loop paired with range acts as a stepping carousel, systematically stepping through each sequence value.",
        narrationTa: "for மடக்கானது range செயற்கூறுடன் இணைந்து ஒவ்வொரு படியாகத் திட்டமிட்டு இயங்குகிறது.",
        conceptKey: "Range Stepping"
      },
      {
        sceneNumber: 3,
        titleEn: "Break, Continue, and Pass",
        titleTa: "தாவல் கூற்றுகளின் பயன்பாடு",
        visualDescription: "An emergency brake stopping the loop, while continue hops over a single hurdle to continue.",
        narrationEn: "Break halts the loop completely, continue skips the current turn, and pass stands quietly as an empty placeholder.",
        narrationTa: "Break மடக்கை உடனடியாக நிறுத்துகிறது, continue ஒரு சுற்றைத் தவிர்க்கிறது, pass எவ்விதச் செயலுமின்றி நிற்கிறது.",
        conceptKey: "Jump Directives"
      }
    ]
  },

  c12_cs_u2_ch7: {
    id: "vid_c12_cs_u2_ch7",
    chapterId: "c12_cs_u2_ch7",
    titleEn: "Animation: Lambda Functions and Recursive Call Stacks",
    titleTa: "அனிமேஷன்: லேம்ப்டா மற்றும் தற்சுழற்சி அடுக்கு இயக்கம்",
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Modular Power of Functions",
        titleTa: "செயற்கூறுகளின் கூறாக்கம்",
        visualDescription: "Reusable Lego bricks snapping into place inside a master architectural model.",
        narrationEn: "Functions turn repetitive blocks of code into reusable tools that can be summoned with custom arguments at any time.",
        narrationTa: "மீண்டும் மீண்டும் எழுதப்படும் நிரல் பகுதிகளை ஒருமுறை செயற்கூறாக எழுதி எப்போது வேண்டுமானாலும் அழைத்துப் பயன்படுத்தலாம்.",
        conceptKey: "Modularity"
      },
      {
        sceneNumber: 2,
        titleEn: "Inline Speed with Lambda",
        titleTa: "லேம்ப்டா மூலம் விரைவுச் செயல்பாடு",
        visualDescription: "A mini pocket calculator appearing on the fly to compute x * x and disappearing.",
        narrationEn: "When you need a quick throwaway calculation without a full def block, lambda produces a fast anonymous one-liner.",
        narrationTa: "முழு செயற்கூறு தேவையின்றி உடனடி கணக்கீடுகளுக்கு லேம்ப்டா ஒற்றை வரி பெயரற்ற செயற்கூறாகப் பயன்படுகிறது.",
        conceptKey: "Anonymous Expressions"
      },
      {
        sceneNumber: 3,
        titleEn: "The Recursive Call Stack Unwinding",
        titleTa: "தற்சுழற்சி அடுக்குகள் விடை பெறுதல்",
        visualDescription: "Plates stacked upwards for factorial(4), resolving at factorial(1) and cascading results back down.",
        narrationEn: "Recursion stacks calls until the base condition is reached, and then unwinds the stack to calculate the grand final answer!",
        narrationTa: "தற்சுழற்சியானது அடிப்படை நிபந்தனை வரை அடுக்குகளை ஏற்றி, பின்னர் விடைகளை ஒன்றன்பின் ஒன்றாகப் பெருக்கிக் கொண்டு வரும்!",
        conceptKey: "Stack Unwinding"
      }
    ]
  },

  c12_cs_u2_ch8: {
    id: "vid_c12_cs_u2_ch8",
    chapterId: "c12_cs_u2_ch8",
    titleEn: "Animation: Bidirectional String Slicing and Methods",
    titleTa: "அனிமேஷன்: சரம் வெட்டுதல் மற்றும் முறைகள்",
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Two-Way Street: Forward and Backward Indexing",
        titleTa: "இருவழி சுட்டெண் பாதை",
        visualDescription: "Two pointers scanning a word simultaneously: 0 from the left, and -1 from the right.",
        narrationEn: "Python gives you dual access to characters: positive indices counting from zero, and negative indices counting from the right end!",
        narrationTa: "இடமிருந்து வலமாக 0 முதலும், வலமிருந்து இடமாக -1 முதலும் சரத்தின் எழுத்துக்களை அணுகலாம்!",
        conceptKey: "Bidirectional Indexing"
      },
      {
        sceneNumber: 2,
        titleEn: "The Slicing Knife: [start:stop:step]",
        titleTa: "துண்டாக்கும் கத்தி: [start:stop:step]",
        visualDescription: "A laser cutter slicing sub-segments of letters and reversing the entire word with [::-1].",
        narrationEn: "Using slice notation with start, stop, and step allows you to extract substrings and even reverse entire phrases in a single stroke!",
        narrationTa: "வெட்டுதல் குறியீடு மூலம் தேவைப்படும் பகுதிகளைத் துல்லியமாகப் பிரித்தெடுக்கவும், [::-1] மூலம் தலைகீழாக மாற்றவும் முடியும்!",
        conceptKey: "Sub-string Extraction"
      },
      {
        sceneNumber: 3,
        titleEn: "Immutability: Guarding Integrity",
        titleTa: "மாற்ற இயலாமை: பாதுகாப்பான சரம்",
        visualDescription: "An attempted overwrite on a letter bouncing off an immutable glass shield.",
        narrationEn: "Because Python strings are immutable, existing strings cannot be corrupted. Any modification creates a brand new string.",
        narrationTa: "சரங்கள் மாற்றியமைக்க இயலாதவை என்பதால், ஒரு சரத்தை மாற்றும் போது புதிய சரமே நினைவகத்தில் உருவாகிறது.",
        conceptKey: "String Immutability"
      }
    ]
  }
};
