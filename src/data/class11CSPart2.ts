import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

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

export const CLASS_11_CS_PART2_NOTES: Record<string, NoteItem> = {
  c11_cs_ch10: {
    id: 'note_c11_cs_ch10',
    chapterId: 'c11_cs_ch10',
    titleEn: 'Chapter 10 Revision Notes: Flow of Control',
    titleTa: 'பாடம் 10 பாடக் குறிப்புகள்: பாயக் கட்டுப்பாடு',
    contentEn: `# Chapter 10: Flow of Control in C++

## 1. Types of Control Statements
By default, statements in a C++ program execute sequentially in top-down fashion. Control structures alter this sequence:
1. **Sequence**: Unconditional consecutive execution of statements.
2. **Selection / Decision Making**: Executes alternative paths based on conditional Boolean expressions (\`if\`, \`if-else\`, \`nested if\`, \`if-else-if ladder\`, \`switch\`).
3. **Iteration / Looping**: Repeats statements multiple times (\`while\`, \`do-while\`, \`for\`).

## 2. Selection Statements
- **if statement**: Executes block only if test condition is non-zero (true).
\`\`\`cpp
if (marks >= 35) {
    cout << "Passed";
}
\`\`\`
- **if-else statement**: Two-way branch.
- **Nested if / if-else ladder**: Multi-way decisions.
- **switch statement**: Multi-branch selection checking an integer/character expression against constant \`case\` labels.
  - \`break\` statement prevents fall-through to succeeding cases.
  - \`default\` executes if no matching case is found.

## 3. Iteration Statements (Loops)
- **Entry-Controlled Loops**: Condition evaluated before loop body execution.
  - **while loop**: \`while(condition) { ... }\` - used when iteration count is not known beforehand.
  - **for loop**: \`for(initialization; condition; increment/decrement) { ... }\` - compact and ideal for counted iterations.
- **Exit-Controlled Loops**:
  - **do-while loop**: Body executes at least once before the condition is checked:
\`\`\`cpp
int i = 1;
do {
    cout << i << " ";
    i++;
} while (i <= 5);
\`\`\`

## 4. Jump Statements
- **break**: Terminates enclosing loop or \`switch\` immediately.
- **continue**: Skips current iteration remainder and advances to next iteration.
- **goto**: Unconditional transfer of control to labeled target: \`goto label;\`. (Discouraged in structured programming).`,
    contentTa: `# பாடம் 10: பாயக் கட்டுப்பாடு (Flow of Control)

## 1. பாயக் கட்டுப்பாட்டின் வகைகள்
பொதுவாக C++ நிரல்கள் வரிசைமுறையாக மேலிருந்து கீழாக இயங்கும். இப்போக்கை மாற்ற கட்டுப்பாட்டுக் கூற்றுகள் பயன்படுகின்றன:
1. **தொடர்முறைக் கூற்றுகள் (Sequence)**: ஒன்றன்பின் ஒன்றாக வரிசையாக இயங்குதல்.
2. **தேர்ந்தெடுப்புக் கூற்றுகள் (Selection)**: நிபந்தனையின் அடிப்படையில் பாதையைத் தேர்ந்தெடுத்தல் (\`if\`, \`if-else\`, \`switch\`).
3. **சுழற்சிக் கூற்றுகள் (Iteration / Loops)**: குறிப்பிட்ட கூற்றுகளை மீண்டும் மீண்டும் இயக்குதல் (\`while\`, \`do-while\`, \`for\`).

## 2. தேர்ந்தெடுப்புக் கூற்றுகள்
- **if கூற்று**: நிபந்தனை மெய்யெனில் கூற்றை இயக்கும்.
- **if-else கூற்று**: இருவழிப் பாதை - மெய்யெனில் ஒரு தொகுதி, பொய்யெனில் மாற்றுத் தொகுதி.
- **switch கூற்று**: முழு எண் அல்லது எழுத்துரு மாறியின் மதிப்பை பல \`case\` மதிப்புகளுடன் ஒப்பிட்டு இயக்கும்.
  - \`break\` கூற்று அடுத்தடுத்த case-களுக்கு நிரல் பாய்வதைத் தடுக்கிறது.
  - \`default\` எந்த case-உம் பொருந்தாத போது இயங்கும்.

## 3. சுழற்சிக் கூற்றுகள்
- **நுழைவு சோதிப்புச் சுழற்சிகள் (Entry-Controlled)**:
  - \`while\`: நிபந்தனை தொடக்கத்திலேயே சோதிக்கப்படுகிறது.
  - \`for\`: துவக்கம், நிபந்தனை மற்றும் அதிகரிப்பு ஆகிய மூன்றையும் ஒரே வரியில் கொண்டது.
- **வெளியேறு சோதிப்புச் சுழற்சி (Exit-Controlled)**:
  - \`do-while\`: சுழற்சியின் உடல் பகுதி குறைந்தபட்சம் ஒருமுறையாவது இயங்கிய பிறகே நிபந்தனை சோதிக்கப்படுகிறது.

## 4. தாவல் கூற்றுகள் (Jump Statements)
- **break**: சுழற்சி அல்லது switch-ஐ விட்டு உடனடியாக வெளியேறுகிறது.
- **continue**: நடப்பு சுழற்சியின் மீதிப் பகுதியைப் புறக்கணித்து அடுத்த சுழற்சிக்குச் செல்கிறது.`,
    authorContext: 'Bjarne Stroustrup control flow specifications for ISO/IEC C++ programming standard.',
    keyFormulas: [
      'for(init; condition; updation) { body; }',
      'do { body; } while(condition); // Semicolon mandatory at end of do-while',
      'Ternary operator: condition ? expr1 : expr2;'
    ],
    workedExamples: [
      {
        question: 'Write a C++ loop snippet to compute sum of first N natural numbers.',
        solution: 'int sum = 0; for(int i = 1; i <= n; i++) { sum += i; } cout << sum;'
      }
    ]
  },
  c11_cs_ch11: {
    id: 'note_c11_cs_ch11',
    chapterId: 'c11_cs_ch11',
    titleEn: 'Chapter 11 Revision Notes: Functions in C++',
    titleTa: 'பாடம் 11 பாடக் குறிப்புகள்: C++ செயற்கூறுகள்',
    contentEn: `# Chapter 11: Functions in C++

## 1. Need for Modular Programming & Functions
A function is a named, self-contained subprogram designed to execute a specific task.
- Reduces program complexity and code redundancy.
- Enhances reusability and eases team collaboration and debugging.

## 2. Types of Functions
1. **Predefined / Library Functions**: Header-file based built-in functions (\`sqrt()\`, \`pow()\`, \`abs()\` in \`<cmath>\`; \`toupper()\`, \`tolower()\` in \`<cctype>\`).
2. **User-Defined Functions**: Written by programmers to solve custom logic.

## 3. Anatomy of a Function
\`\`\`cpp
return_type function_name(parameter_list) {
    // function body
    return value;
}
\`\`\`
- **Function Prototype (Declaration)**: Informs the compiler about the function name, return type, and parameter types before its invocation.
- **Function Definition**: Contains actual code and local variables.
- **Function Call**: Statement that triggers execution.

## 4. Parameter Passing Methods
- **Pass by Value (Call by Value)**: Copies actual argument values into formal parameters. Modifications inside the function do NOT affect caller arguments.
- **Pass by Reference (Call by Reference)**: Passes memory addresses/aliases using \`&\` reference operator. Changes directly reflect in caller arguments.
\`\`\`cpp
void swap(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}
\`\`\`

## 5. Inline Functions & Scope
- **inline function**: Suggests to the compiler to replace the function call with actual body code to eliminate call-return overhead. Defined with keyword \`inline\`.
- **Scope of Variables**:
  - **Local Scope**: Defined inside a block \`{}\`; accessible only inside.
  - **File / Global Scope**: Defined outside all functions; accessible anywhere.
  - **Scope Resolution Operator (\`::\`)**: Accesses global variable when shadowed by local variable with identical name.`,
    contentTa: `# பாடம் 11: C++ செயற்கூறுகள் (Functions)

## 1. செயற்கூறுகளின் தேவை
செயற்கூறு என்பது குறிப்பிட்ட பணியைச் செய்யக்கூடிய பெயரிடப்பட்ட ஒரு துணை நிரலாகும்.
- நிரலின் அளவைக் குறைத்து மறுபயன்பாட்டை அதிகரிக்கிறது.
- பிழை திருத்தலையும், குழுப் பணியையும் எளிதாக்குகிறது.

## 2. செயற்கூறுகளின் வகைகள்
1. **உள்ளமைந்த நூலகச் செயற்கூறுகள் (Library Functions)**: \`<cmath>\`ல் உள்ள \`sqrt()\`, \`pow()\`, \`<cctype>\`ல் உள்ள \`toupper()\` போன்றவை.
2. **பயனர் வரையறுத்த செயற்கூறுகள் (User-Defined Functions)**: நிரலரால் சொந்தமாக எழுதப்படும் செயற்கூறுகள்.

## 3. அளவுருக்களை அனுப்பும் முறைகள் (Parameter Passing)
- **மதிப்பு மூலம் அழைத்தல் (Call by Value)**: மாறிகளின் மதிப்பை நகல் எடுத்து அனுப்புகிறது. செயற்கூறில் செய்யப்படும் மாற்றங்கள் மூல மாறிகளைப் பாதிக்காது.
- **குறிப்பு மூலம் அழைத்தல் (Call by Reference)**: மாறிகளின் நினைவக முகவரியை (\`&\` குறியீடு மூலம்) அனுப்புகிறது. செயற்கூறின் மாற்றங்கள் மூல மாறிகளை நேரடியாக மாற்றும்.

## 4. உள்வரிச் செயற்கூறு (Inline Function) & எல்லை
- **inline function**: செயற்கூறு அழைப்புக்கு பதிலாக அதன் கட்டளைகளையே அவ்விடத்தில் பொருத்தி வேகத்தை அதிகரிக்கிறது.
- **வரையெல்லை (Scope)**:
  - **உள்ளமை எல்லை (Local Scope)**: தொகுதிக்குள் மட்டுமே அணுக முடியும்.
  - **முழுதளாவிய எல்லை (Global Scope)**: நிரலின் அனைத்துப் பகுதிகளிலும் அணுகலாம்.
  - **வரையெல்லை தீர்மானச் செயற்குறி (\`::\`)**: உள்ளமை மாறி இருக்கும் போது முழுதளாவிய மாறியை அணுக உதவுகிறது.`,
    authorContext: 'C++ procedural and functional abstractions by Bell Labs.',
    keyFormulas: [
      'Return_Type FuncName(DataType Param1, DataType &Param2);',
      'Global Access: ::variable_name;',
      'Recursion: Return BaseCase OR FunctionCall(ReducedParam)'
    ],
    workedExamples: [
      {
        question: 'Demonstrate Call by Reference swapping in C++.',
        solution: 'void swap(int &x, int &y) { int t = x; x = y; y = t; }'
      }
    ]
  },
  c11_cs_ch12: {
    id: 'note_c11_cs_ch12',
    chapterId: 'c11_cs_ch12',
    titleEn: 'Chapter 12 Revision Notes: Arrays and Structures',
    titleTa: 'பாடம் 12 பாடக் குறிப்புகள்: அணிகள் மற்றும் கட்டமைப்புகள்',
    contentEn: `# Chapter 12: Arrays and Structures in C++

## 1. What is an Array?
An array is a collection of homogeneous elements (same data type) stored in contiguous memory locations under a single variable name.
- Elements are indexed starting from 0 to \`size - 1\`.
\`\`\`cpp
int marks[5] = {90, 85, 92, 78, 95}; // marks[0] = 90, marks[4] = 95
\`\`\`

## 2. Array Classifications
- **One-Dimensional (1D) Array**: Linear vector representing a single row.
- **Two-Dimensional (2D) Array**: Matrix organized in rows and columns:
\`\`\`cpp
int matrix[3][3]; // 3 rows and 3 columns
\`\`\`
- Memory layout: Stored row-by-row in Row-Major order.

## 3. Character Arrays (C-Strings)
- A string in C++ is represented as a 1D character array terminated by the null character \`'\0'\`.
\`\`\`cpp
char name[20] = "Chennai"; // automatically appends '\0' at index 7
\`\`\`
- Header \`<cstring>\` provides functions: \`strlen()\`, \`strcpy()\`, \`strcat()\`, \`strcmp()\`.

## 4. Structures (struct)
A structure is a user-defined heterogeneous data type grouping variables of different data types under a single name.
\`\`\`cpp
struct Student {
    int rollNo;
    char name[30];
    float marks;
};

Student s1; // Structure variable definition
s1.rollNo = 101; // Dot (.) member access operator
\`\`\`
- **Array of Structures**: Storing multiple records (\`Student school[100];\`).
- **Nested Structures**: Placing one structure inside another.`,
    contentTa: `# பாடம் 12: அணிகள் மற்றும் கட்டமைப்புகள் (Arrays and Structures)

## 1. அணி (Array) என்றால் என்ன?
ஒரே தரவினத்தைச் சேர்ந்த பல உருப்படிகளைத் தொடர்ச்சியான நினைவக இடங்களில் ஒரே பெயரின் கீழ் சேமிக்கும் தொகுதி அணி எனப்படும்.
- அணிக் குறியீட்டெண் 0 முதல் \`size - 1\` வரை தொடங்கும்.
\`\`\`cpp
int a[5] = {10, 20, 30, 40, 50}; // a[0]=10, a[4]=50
\`\`\`

## 2. அணியின் வகைகள்
- **ஒரு பரிமாண அணி (1D Array)**: நேரியல் வரிசை.
- **இரு பரிமாண அணி (2D Array)**: வரிசைகள் மற்றும் பத்திகளைக் கொண்ட அணி வடிவம் (\`int m[3][3];\`).

## 3. எழுத்துரு அணிகள் (C-Strings)
- C++ மொழியில் சரம் (String) என்பது வெற்று எழுத்துருவால் (\`'\0'\` - Null Character) முடிவடையும் எழுத்துரு அணியாகும்.
- \`<cstring>\` நூலகச் செயற்கூறுகள்: \`strlen()\` (நீளம்), \`strcpy()\` (நகலெடுத்தல்), \`strcat()\` (இணைத்தல்), \`strcmp()\` (ஒப்பிடுதல்).

## 4. கட்டமைப்புகள் (Structures)
கட்டமைப்பு (\`struct\`) என்பது வெவ்வேறு தரவினங்களைச் சார்ந்த மாறிகளை ஒரே பெயரின் கீழ் ஒருங்கிணைக்கும் பயனர் வரையறுத்த தரவினமாகும்.
- புள்ளி (\`.\`) செயற்குறி மூலம் கட்டமைப்பின் உறுப்புகளை அணுகலாம்.
\`\`\`cpp
struct Student {
    int roll;
    float fee;
};
Student s1;
s1.roll = 12;
\`\`\``,
    authorContext: 'Compound and aggregate data structures in C++.',
    keyFormulas: [
      'Array Total Bytes = Number of Elements * sizeof(DataType)',
      'Member Access: struct_variable.member_name',
      'Nested Member: outer_var.inner_var.member_name'
    ],
    workedExamples: [
      {
        question: 'Calculate memory consumed by: double arr[10]; assuming double is 8 bytes.',
        solution: 'Total bytes = 10 * 8 = 80 bytes.'
      }
    ]
  },
  c11_cs_ch13: {
    id: 'note_c11_cs_ch13',
    chapterId: 'c11_cs_ch13',
    titleEn: 'Chapter 13 Revision Notes: Introduction to Object Oriented Programming',
    titleTa: 'பாடம் 13 பாடக் குறிப்புகள்: பொருள்நோக்கு நிரலாக்க நுட்பங்கள் ஓர் அறிமுகம்',
    contentEn: `# Chapter 13: Introduction to Object Oriented Programming (OOP)

## 1. Programming Paradigms
- **Procedural Programming (POP)**: Emphasizes algorithms and step-by-step procedures (e.g., Pascal, C). Focus is on "doing". Data moves freely across functions and is vulnerable to accidental modification.
- **Object Oriented Programming (OOP)**: Treats data as a critical element and ties data closely to the functions that operate on it (e.g., C++, Java, Python).

## 2. Fundamental Concepts of OOP
1. **Encapsulation**: Binding together data members and member functions into a single unit called a class.
2. **Data Abstraction**: Displaying only essential features to the user while concealing background complexity and internal implementation.
3. **Data Hiding**: Protecting data from unauthorized external modification by making it \`private\`.
4. **Inheritance**: The mechanism by which a new class (derived/child class) acquires properties and behaviors of an existing class (base/parent class). Promotes code reusability.
5. **Polymorphism**: Ability of a message or function to take more than one form (Greek: *poly* = many, *morph* = forms). Manifests through Function Overloading and Operator Overloading.
6. **Modularity**: Decomposing a software system into distinct, self-contained modules.

## 3. Advantages of OOP
- Code reusability via inheritance saves development hours.
- High data security via access controls and data hiding.
- Easy partitioning of work in large software teams.
- Real-world entity simulation (banks, cars, students) maps directly to software classes.`,
    contentTa: `# பாடம் 13: பொருள்நோக்கு நிரலாக்க நுட்பங்கள் (OOP) ஓர் அறிமுகம்

## 1. நிரலாக்க அணுகுமுறைகள்
- **நடைமுறைவழி நிரலாக்கம் (POP)**: செயல்களுக்கு மட்டுமே முதன்மை முக்கியத்துவம் தரும் முறை (C, பாஸ்கல்). தரவுகள் பாதுகாப்பற்ற முறையில் உலவுகின்றன.
- **பொருள்நோக்கு நிரலாக்கம் (OOP)**: தரவுகளுக்கு முதன்மை முக்கியத்துவம் கொடுத்து, தரவையும் அதை இயக்கும் செயற்கூறுகளையும் ஒன்றாக இணைக்கும் முறை.

## 2. OOP-ன் முக்கிய தூண்கள்
1. **உறைபொதியாக்கம் (Encapsulation)**: தரவுகளையும் செயற்கூறுகளையும் இனக்குழு என்ற ஒற்றை அமைப்புக்குள் பிணைத்தல்.
2. **தரவு அருவமாக்கம் (Data Abstraction)**: அத்தியாவசிய விவரங்களை மட்டும் காட்டி, உள்ளமைந்த செயல்பாட்டு நுணுக்கங்களை மறைத்தல்.
3. **தரவு மறைப்பு (Data Hiding)**: தரவுகளைப் பிறர் அனுமதியின்றி மாற்றாதவாறு \`private\` முறையில் பாதுகாத்தல்.
4. **மரபுரிமம் (Inheritance)**: ஒரு தாய் இனக்குழுவின் பண்புகளை புதிய சேய் இனக்குழு பெற்றுக்கொள்வது (மறுபயன்பாடு).
5. **பல்லுருவாக்கம் (Polymorphism)**: ஒரே பெயரைக் கொண்ட செயற்கூறு அல்லது செயற்குறி சூழலுக்கு ஏற்ப பல்வேறு வடிவங்களில் செயல்படுதல்.
6. **கூறுநிலையாக்கம் (Modularity)**: நிரலை தனித்தனி சிறு கூறுகளாகப் பிரித்தல்.`,
    authorContext: 'Alan Kay and Bjarne Stroustrup object-oriented software engineering principles.',
    keyFormulas: [
      'OOP = Objects + Classes + Encapsulation + Inheritance + Polymorphism',
      'Security: Private members are accessible only by member functions of the same class'
    ],
    workedExamples: [
      {
        question: 'Identify the OOP principle that promotes code reuse without rewriting.',
        solution: 'Inheritance allows a derived class to inherit code and behaviors from a base class.'
      }
    ]
  },
  c11_cs_ch14: {
    id: 'note_c11_cs_ch14',
    chapterId: 'c11_cs_ch14',
    titleEn: 'Chapter 14 Revision Notes: Classes and Objects',
    titleTa: 'பாடம் 14 பாடக் குறிப்புகள்: இனக்குழுக்கள் மற்றும் பொருள்கள்',
    contentEn: `# Chapter 14: Classes and Objects in C++

## 1. Class: The Blueprint
A class is a user-defined data type that binds data variables and operational functions together into a single blueprint.
- An **Object** is an active, identifiable instance of a class.

## 2. Class Declaration Syntax
\`\`\`cpp
class ClassName {
  private:
    // Data members (accessible only within class)
  protected:
    // Accessible within class and its derived classes
  public:
    // Accessible anywhere
    void memberFunction();
};
\`\`\`

## 3. Visibility / Access Specifiers
- **private** (default): Members can be accessed only by member functions of the same class.
- **protected**: Accessible within the class and child derived classes.
- **public**: Accessible from anywhere in the program.

## 4. Defining Member Functions
- **Inside the class**: Automatically treated as \`inline\`.
- **Outside the class**: Must use the Scope Resolution Operator (\`::\`):
\`\`\`cpp
void ClassName::memberFunction() {
    // definition
}
\`\`\`

## 5. Constructors and Destructors
- **Constructor**: Special member function having the same name as the class. Executes automatically when an object is instantiated. Has no return type.
  - Types: Default constructor, Parameterized constructor, Copy constructor.
- **Destructor**: Special member function preceded by a tilde (\`~ClassName()\`). Executes automatically when an object goes out of scope to release memory.`,
    contentTa: `# பாடம் 14: இனக்குழுக்கள் மற்றும் பொருள்கள் (Classes and Objects)

## 1. இனக்குழு & பொருள்
- **இனக்குழு (Class)**: தரவுகளையும் செயற்கூறுகளையும் கொண்ட ஒரு மாதிரி வரைபடமாகும் (User-defined Type).
- **பொருள் (Object)**: இனக்குழுவின் நினைவக உருவகம் (Instance).

## 2. அணுகியல் வரையறுப்பிகள் (Access Specifiers)
- **private** (இயல்புநிலை): அந்த இனக்குழுவின் உறுப்புச் செயற்கூறுகளால் மட்டுமே அணுக முடியும்.
- **protected**: அந்த இனக்குழு மற்றும் அதன் மரபுரிம சேய் இனக்குழுக்களால் அணுக முடியும்.
- **public**: நிரலின் எந்தப் பகுதியிலிருந்தும் அணுகலாம்.

## 3. ஆக்கிகள் மற்றும் அழிப்பிகள்
- **ஆக்கி (Constructor)**: இனக்குழுவின் பெயரையே கொண்டிருக்கும் சிறப்புச் செயற்கூறு. ஒரு பொருள் உருவாக்கப்படும் போது தானாகவே இயங்கும். இதற்கு திருப்பி அனுப்பும் வகை (return type) இல்லை.
- **அழிப்பி (Destructor)**: ஆக்கியின் பெயருக்கு முன் \`~\` குறியீடு கொண்டிருக்கும். பொருளின் பயன்பாடு முடியும் போது நினைவகத்தை விடுவிக்க தானாக இயங்கும்.`,
    authorContext: 'C++ class lifecycle architecture and encapsulation models.',
    keyFormulas: [
      'Outside Definition: ReturnType ClassName::FunctionName(params) { ... }',
      'Destructor Syntax: ~ClassName();',
      'Object Creation: ClassName obj1, obj2;'
    ],
    workedExamples: [
      {
        question: 'Why does a constructor have no return type, not even void?',
        solution: 'Constructors are invoked automatically during memory instantiation by the runtime to initialize variables; they never return a value to any caller.'
      }
    ]
  },
  c11_cs_ch15: {
    id: 'note_c11_cs_ch15',
    chapterId: 'c11_cs_ch15',
    titleEn: 'Chapter 15 Revision Notes: Polymorphism',
    titleTa: 'பாடம் 15 பாடக் குறிப்புகள்: பல்லுருவாக்கம்',
    contentEn: `# Chapter 15: Polymorphism in C++

## 1. Definition and Categories
Polymorphism allows one interface to control multiple actions.
- **Compile-Time Polymorphism (Static Binding / Early Binding)**:
  - Function Overloading
  - Operator Overloading
- **Run-Time Polymorphism (Dynamic Binding / Late Binding)**:
  - Virtual Functions (implemented via pointers).

## 2. Function Overloading
Defining two or more functions with the **exact same name** in the same scope, provided their **parameter signatures differ** (in number of parameters, types, or order of types).
- Return type ALONE cannot distinguish overloaded functions!
\`\`\`cpp
int add(int a, int b) { return a + b; }
float add(float a, float b) { return a + b; }
int add(int a, int b, int c) { return a + b + c; }
\`\`\`

## 3. Operator Overloading
Giving additional, custom meaning to existing C++ operators when applied to user-defined class objects.
- Syntax uses the keyword \`operator\`:
\`\`\`cpp
ReturnType operator symbol (arguments);
\`\`\`
- Operators that **CANNOT** be overloaded:
  1. Scope resolution operator (\`::\`)
  2. Sizeof operator (\`sizeof\`)
  3. Member access dot operator (\`.\`)
  4. Pointer to member operator (\`.*\` or \`->*\`)
  5. Conditional / Ternary operator (\`? :\`)`,
    contentTa: `# பாடம் 15: பல்லுருவாக்கம் (Polymorphism)

## 1. பல்லுருவாக்கம் என்றால் என்ன?
ஒரே பெயரிலான இடைமுகம் வெவ்வேறு சூழல்களில் வெவ்வேறு பணிகளைச் செய்யும் திறன் பல்லுருவாக்கம் எனப்படும்.
- **தொகுப்பு நேரப் பல்லுருவாக்கம் (Compile-Time)**: செயற்கூறு பணிமிகுப்பு மற்றும் செயற்குறி பணிமிகுப்பு.
- **இயக்க நேரப் பல்லுருவாக்கம் (Run-Time)**: மெய்நிகர் செயற்கூறுகள் (Virtual Functions).

## 2. செயற்கூறு பணிமிகுப்பு (Function Overloading)
ஒரே பெயரில் பல செயற்கூறுகளை உருவாக்குதல். ஆனால் அவற்றின் அளவுருக்களின் எண்ணிக்கை, வகை அல்லது வரிசை வேறுபட வேண்டும்.
- குறிப்பு: திருப்பி அனுப்பும் வகை (return type) மட்டுமே வேறுபட்டால் அது பணிமிகுப்பாகாது!

## 3. செயற்குறி பணிமிகுப்பு (Operator Overloading)
வழக்கமான C++ செயற்குறிகளுக்கு பயனர் உருவாக்கிய பொருட்களில் செயல்படும் வகையில் கூடுதல் அர்த்தம் வழங்குதல்.
- பணிமிகுக்க முடியாத செயற்குறிகள்:
  1. \`::\` (வரையெல்லை செயற்குறி)
  2. \`sizeof\`
  3. \`.\` (புள்ளி செயற்குறி)
  4. \`.*\`
  5. \`? :\` (நிபந்தனை செயற்குறி)`,
    authorContext: 'Type systems and operator dispatch mechanics in C++.',
    keyFormulas: [
      'Signature Matching: FuncName(ParamType1, ParamType2, ...)',
      'Overload Header: Complex operator+(const Complex &c);',
      'Forbidden Overloads: ::, sizeof, ., .*, ?:'
    ],
    workedExamples: [
      {
        question: 'Can you overload the ternary ?: operator in C++?',
        solution: 'No. The C++ standard strictly forbids overloading ::, sizeof, ., .*, and ?:'
      }
    ]
  },
  c11_cs_ch16: {
    id: 'note_c11_cs_ch16',
    chapterId: 'c11_cs_ch16',
    titleEn: 'Chapter 16 Revision Notes: Inheritance',
    titleTa: 'பாடம் 16 பாடக் குறிப்புகள்: மரபுரிமம்',
    contentEn: `# Chapter 16: Inheritance in C++

## 1. Concept of Inheritance
Inheritance is the process by which a new class (**Derived / Child Class**) inherits the data attributes and behaviors from an existing class (**Base / Parent Class**).
- Major benefit: Eliminates duplicate code through reusability.

## 2. Visibility Modes in Derivation
\`\`\`cpp
class DerivedClass : visibility_mode BaseClass { ... };
\`\`\`
- **public derivation**: Public members of base remain public; protected remain protected.
- **private derivation**: Public and protected members of base become private in derived.
- **protected derivation**: Public and protected members of base become protected in derived.
- Note: \`private\` members of a base class are NEVER directly accessible in derived classes!

## 3. Types of Inheritance
1. **Single Inheritance**: One derived class inherited from one base class ($A \rightarrow B$).
2. **Multilevel Inheritance**: A class derived from another derived class ($A \rightarrow B \rightarrow C$).
3. **Multiple Inheritance**: One derived class inheriting from two or more base classes ($A, B \rightarrow C$).
4. **Hierarchical Inheritance**: Multiple derived classes inheriting from a single base class ($A \rightarrow B, C, D$).
5. **Hybrid Inheritance**: Combination of two or more inheritance types (e.g., Multilevel + Multiple).`,
    contentTa: `# பாடம் 16: மரபுரிமம் (Inheritance)

## 1. மரபுரிமம் என்றால் என்ன?
ஒரு தாய் இனக்குழுவின் (Base Class) பண்புகளை ஒரு புதிய சேய் இனக்குழு (Derived Class) சுவீகரித்துக் கொள்ளும் நுட்பம் மரபுரிமம் எனப்படும்.
- முக்கிய நன்மை: ஏற்கனவே உள்ள நிரலை மீண்டும் மீண்டும் எழுதாமல் மறுபயன்பாடு (Reusability) செய்தல்.

## 2. மரபுரிம வகைகள்
1. **ஒற்றை மரபுரிமம் (Single)**: ஒரே ஒரு தாய் இனக்குழுவிலிருந்து ஒரு சேய் இனக்குழு தோன்றுதல்.
2. **பல்நிலை மரபுரிமம் (Multilevel)**: ஒரு சேய் இனக்குழு மற்றொரு சேய் இனக்குழுவிற்கு தாயாதல் ($A \rightarrow B \rightarrow C$).
3. **பலவழி மரபுரிமம் (Multiple)**: இரண்டு அல்லது அதற்கு மேற்பட்ட தாய் இனக்குழுக்களிலிருந்து ஒரு சேய் இனக்குழு தோன்றுதல்.
4. **படிநிலை மரபுரிமம் (Hierarchical)**: ஒரே ஒரு தாய் இனக்குழுவிலிருந்து பல சேய் இனக்குழுக்கள் தோன்றுதல்.
5. **கலப்பின மரபுரிமம் (Hybrid)**: பல வகையான மரபுரிமங்களின் கலவை.`,
    authorContext: 'C++ class hierarchies and memory layout rules.',
    keyFormulas: [
      'Derivation: class Derived : public Base { ... };',
      'Constructor Execution Order: Base constructor first, then Derived constructor.',
      'Destructor Execution Order: Derived destructor first, then Base destructor.'
    ],
    workedExamples: [
      {
        question: 'Which constructor executes first when an object of a derived class is created?',
        solution: 'The Base class constructor executes first, followed by the Derived class constructor.'
      }
    ]
  },
  c11_cs_ch17: {
    id: 'note_c11_cs_ch17',
    chapterId: 'c11_cs_ch17',
    titleEn: 'Chapter 17 Revision Notes: Computer Ethics and Cyber Security',
    titleTa: 'பாடம் 17 பாடக் குறிப்புகள்: கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு',
    contentEn: `# Chapter 17: Computer Ethics and Cyber Security

## 1. Computer Ethics & Cyber Crimes
Computer ethics is a set of moral principles regulating the use of computing systems and internet resources.
- **Cyber Crime**: Illegal activities committed using computers, data networks, or internet systems.
  - **Hacking**: Unauthorized access to computer systems (Ethical White-Hat vs Malicious Black-Hat).
  - **Phishing**: Fraudulent emails/websites impersonating legitimate banks or services to steal passwords and financial credentials.
  - **Identity Theft**: Impersonating someone by stealing personal identifiers (Aadhaar, credit cards).
  - **Cyber Stalking & Bullying**: Harassment using electronic communications.

## 2. Malicious Software (Malware)
- **Virus**: Self-replicating code attached to host files that corrupts system data.
- **Worm**: Autonomous program that propagates across networks without needing host files.
- **Trojan Horse**: Disguised as legitimate utility software while secretly executing malicious payloads.
- **Spyware & Ransomware**: Secretly monitors activity or encrypts files demanding cryptocurrency ransom.

## 3. Cyber Security Mechanisms
- **Firewall**: Hardware/software barrier screening incoming and outgoing network traffic.
- **Encryption**: Scrambling plain text into unreadable ciphertext using cryptographic keys.
- **Digital Signatures**: Cryptographic authentication guaranteeing document integrity and non-repudiation.
- **Indian Information Technology (IT) Act, 2000**: Legal framework addressing electronic governance, cyber crimes, and penalties.`,
    contentTa: `# பாடம் 17: கணினி நன்னெறி மற்றும் இணையப் பாதுகாப்பு

## 1. கணினி நன்னெறி மற்றும் குற்றங்கள்
கணினி நன்னெறி என்பது கணினிகள் மற்றும் இணையத்தைப் பயன்படுத்தும் போது கடைபிடிக்க வேண்டிய ஒழுக்க நெறிமுறைகள் ஆகும்.
- **இணையக் குற்றங்கள் (Cyber Crimes)**:
  - **ஊடுருவல் (Hacking)**: அனுமதியின்றி மற்றொரு கணினி அமைப்பை அணுகுதல்.
  - **மின்னஞ்சல் ஏமாற்று (Phishing)**: போலியான தளங்கள் மற்றும் மின்னஞ்சல்கள் வழியே கடவுச்சொல் மற்றும் வங்கி விவரங்களைத் திருடுதல்.
  - **அடையாளத் திருட்டு (Identity Theft)**: பிறரின் அடையாள ஆவணங்களைப் பயன்படுத்தி ஏமாற்றுதல்.

## 2. தீங்கிழைக்கும் மென்பொருட்கள் (Malware)
- **வைரஸ் (Virus)**: பிற கோப்புகளில் ஒட்டிக்கொண்டு பரவி கணினியைப் பாதிக்கும் நிரல்.
- **புழுக்கள் (Worms)**: ஹோஸ்ட் கோப்புகள் இன்றியே கணினி வலையமைப்பில் தாமாக பரவும் ஆபத்தான நிரல்.
- **ட்ரோஜன் குதிரை (Trojan)**: நம்பகமான மென்பொருள் போல நடித்து உள்ளே நுழைந்து சீரழிக்கும் நிரல்.

## 3. இணையப் பாதுகாப்பு நடவடிக்கைகள்
- **தீச்சுவர் (Firewall)**: அனுமதிக்கப்படாத நெட்வொர்க் போக்குவரத்தைத் தடுக்கும் பாதுகாப்புச் சுவர்.
- **குறியாக்கம் (Encryption)**: வாசிக்கக்கூடிய தகவல்களைப் புரியாத ரகசியக் குறியீடுகளாக மாற்றுதல்.
- **இந்திய தகவல் தொழில்நுட்பச் சட்டம் (IT Act, 2000)**: இணையக் குற்றங்களைத் தடுத்து தண்டிக்கும் இந்தியச் சட்டம்.`,
    authorContext: 'Cyber law, information security standards, and IT Act 2000.',
    keyFormulas: [
      'Encryption: Plaintext + Key -> Ciphertext',
      'Decryption: Ciphertext + Key -> Plaintext',
      'IT Act 2000: Enacted June 9, 2000 (Amendment in 2008)'
    ],
    workedExamples: [
      {
        question: 'Differentiate between a computer Virus and a Worm.',
        solution: 'A virus requires a host program to replicate, while a worm is self-contained and propagates independently over network links.'
      }
    ]
  },
  c11_cs_ch18: {
    id: 'note_c11_cs_ch18',
    chapterId: 'c11_cs_ch18',
    titleEn: 'Chapter 18 Revision Notes: Tamil Computing',
    titleTa: 'பாடம் 18 பாடக் குறிப்புகள்: தமிழ் கணினி',
    contentEn: `# Chapter 18: Tamil Computing (தமிழ் கணினி)

## 1. Evolution of Tamil Computing
Tamil computing encompasses the development of computational tools, software, keyboards, and digital infrastructure to process the Tamil language electronically.
- Tamil was the first Indian language to establish international internet presence and standardizations.

## 2. Tamil Keyboards and Encodings
- **Keyboards**:
  - **Tamil 99**: Ergonomically standardized keyboard layout officially approved by the Tamil Nadu Government in 1999.
  - **Phonetic Keyboard**: English letter transliteration (e.g., typing 'amma' produces 'அம்மா').
  - **Typewriter Layout**: Traditional mechanical typewriter arrangement.
- **Encoding Standards**:
  - **TAB / TAM**: Monolingual and bilingual font encodings widely used in early 1990s.
  - **TSCII (Tamil Script Code for Information Interchange)**: First major Tamil character encoding standard.
  - **Unicode**: Universal character encoding mapping Tamil characters into code points U+0B80 to U+0BFF, enabling seamless display on all operating systems and mobile devices.

## 3. Digital Tamil Initiatives & Tools
- **Tamil Virtual Academy (தமிழ் இணையக் கல்விக்கழகம்)**: Government initiative preserving Tamil literature and providing online academic degrees worldwide.
- **Tamil Text Processing**: Spellcheckers (Murasu, Nilacharal), OCR (Optical Character Recognition) converting scanned Tamil pages to editable text.
- **Search Engines & Translation**: Tamil Wikipedia (தமிழ் விக்கிப்பீடியா) hosting over 150,000 articles, Google Translate supporting real-time English-Tamil neural translation.`,
    contentTa: `# பாடம் 18: தமிழ் கணினி (Tamil Computing)

## 1. தமிழ் கணினியின் வளர்ச்சி
தமிழ் மொழியை மின்னணு சாதனங்கள், இணையம் மற்றும் கணினிகளில் தடையின்றிப் பயன்படுத்தும் தொழில்நுட்பமே தமிழ் கணினியியல் ஆகும்.
- இணையத்தில் முதன்முதலில் இடம்பெற்ற இந்திய மொழிகளில் தமிழ் முன்னோடியாகும்.

## 2. விசைப்பலகை மற்றும் குறியாக்கங்கள்
- **விசைப்பலகைகள் (Keyboards)**:
  - **தமிழ் 99 (Tamil 99)**: தமிழ்நாடு அரசால் 1999-ல் அதிகாரப்பூர்வமாக அங்கீகரிக்கப்பட்ட அறிவியல் பூர்வ விசைப்பலகை.
  - **ஒலிபெயர்ப்பு விசைப்பலகை (Phonetic)**: ஆங்கில எழுத்துக்களைக் கொண்டு தமிழ் ஒலி வடிவில் தட்டச்சு செய்யும் முறை (எ.கா: 'amma' $\\rightarrow$ 'அம்மா').
- **குறியாக்க முறைகள் (Encodings)**:
  - **TAB / TAM**: தொடக்க கால எழுத்துரு குறியீட்டு முறைகள்.
  - **TSCII**: தமிழ் எழுத்துருக்களுக்கான முதல் தகவல் பரிமாற்றக் குறியீட்டுத் தரம்.
  - **ஒருங்கிணைந்த குறியீடு (Unicode)**: உலகளாவிய கணினி அமைப்புகளில் தமிழ் எழுத்துக்களை எந்த ஒரு சிறப்பு எழுத்துருவும் இன்றி நேரடியாகக் காட்டும் தரம் (Code range: U+0B80 to U+0BFF).

## 3. முக்கிய நிறுவனங்கள் & கருவிகள்
- **தமிழ் இணையக் கல்விக்கழகம் (Tamil Virtual Academy)**: உலகெங்கிலும் வாழும் தமிழர்களுக்கு தமிழ் கல்வி மற்றும் இலக்கியங்களை இணையம் வழியே வழங்கும் அரசு நிறுவனம்.
- **தமிழ் விக்கிப்பீடியா**: ஒன்றரை லட்சத்திற்கும் மேற்பட்ட தமிழ் கட்டுரைகளைக் கொண்ட இணைய கலைக்களஞ்சியம்.
- **ஒளியியல் எழுத்துணரி (Tamil OCR)**: அச்சிடப்பட்ட தமிழ் ஆவணங்களை வருடி, திருத்தக்கூடிய டிஜிட்டல் உரையாக மாற்றும் மென்பொருள்.`,
    authorContext: 'Tamil Virtual Academy and International Tamil Internet Conference proceedings.',
    keyFormulas: [
      'Tamil Unicode Block: U+0B80 to U+0BFF',
      'Tamil 99 Keyboard: Approved by TN Govt in 1999',
      'Tamil OCR: Scanned Image -> Text recognition -> Digital Unicode text'
    ],
    workedExamples: [
      {
        question: 'Which keyboard layout is officially recognized by the Government of Tamil Nadu?',
        solution: 'Tamil 99 keyboard layout, standardized in 1999.'
      }
    ]
  }
};

export const CLASS_11_CS_PART2_SUMMARIES: Record<string, SummaryItem> = {
  c11_cs_ch10: {
    id: 'sum_c11_cs_ch10',
    chapterId: 'c11_cs_ch10',
    keyPointsEn: [
      'Control statements alter sequential program execution into selective branching or iterative looping.',
      'Selection statements include single-branch if, two-branch if-else, nested if, and multi-branch switch constructs.',
      'The switch statement checks an integral or char expression against case constants; break prevents fall-through.',
      'Entry-controlled loops evaluate condition first (while, for); exit-controlled loops execute body at least once before condition evaluation (do-while).',
      'Jump statements (break, continue, goto) manipulate loop flow and iteration skipping.'
    ],
    keyPointsTa: [
      'கட்டுப்பாட்டுக் கூற்றுகள் நிரலின் இயல்பு பாய்வை மாற்றி தேர்ந்தெடுப்பு அல்லது சுழற்சி முறைக்கு மாற்றுகின்றன.',
      'தேர்ந்தெடுப்புக் கூற்றுகள்: \`if\`, \`if-else\`, \`nested if\` மற்றும் \`switch\` கூற்றுகள்.',
      'switch கூற்றில் \`break\` கூற்று அடுத்தடுத்த case-களுக்கு நிரல் செல்வதைத் தடுக்கிறது.',
      'நுழைவு சோதிப்புச் சுழற்சிகள் (\`while\`, \`for\`) நிபந்தனையை முதலிலும், வெளியேறு சோதிப்புச் சுழற்சி (\`do-while\`) நிபந்தனையை இறுதியிலும் சோதிக்கிறது.',
      'தாவல் கூற்றுகள்: \`break\`, \`continue\` மற்றும் \`goto\`.'
    ],
    formulaCheatSheet: [
      'switch(expr) { case val1: stmt; break; default: stmt; }',
      'for(init; cond; step) { body; }',
      'do { body; } while(cond);'
    ],
    simpleExplanationEn: 'Control flow structures provide decision-making intelligence and repeating loops to C++ programs. With loops and if-statements, code can evaluate conditions and perform millions of iterations in milliseconds.',
    simpleExplanationTa: 'கட்டுப்பாட்டுக் கூற்றுகள் C++ நிரலுக்கு முடிவெடுக்கும் ஆற்றலையும், தேவையான வேலைகளை பலமுறை சுழற்சி முறையில் மீண்டும் இயக்கும் திறனையும் தருகின்றன.'
  },
  c11_cs_ch11: {
    id: 'sum_c11_cs_ch11',
    chapterId: 'c11_cs_ch11',
    keyPointsEn: [
      'Functions encapsulate subroutines, promoting modularity, reusability, and reducing defect density.',
      'Function prototypes declare interface specifications (name, return type, parameters) to the compiler before invocation.',
      'Call by Value passes copies leaving caller variables intact; Call by Reference passes aliases using & allowing direct modifications.',
      'Inline functions eliminate function call overhead by replacing function call sites directly with body code.',
      'Variable scope is partitioned into local block scope and global file scope; :: accesses shadowed globals.'
    ],
    keyPointsTa: [
      'செயற்கூறுகள் நிரலை சிறு கூறுகளாக்கி, மறுபயன்பாட்டை அதிகரித்து, பிழைகளைக் குறைக்கின்றன.',
      'செயற்கூறு முன்வடிவம் (Prototype) செயற்கூறின் பெயர், தரவினம் மற்றும் அளவுருக்களை முன்கூட்டியே அறிவிக்கிறது.',
      'மதிப்பு மூலம் அழைத்தல் அசல் மதிப்பை மாற்றாது; குறிப்பு மூலம் அழைத்தல் (\`&\`) அசல் மதிப்பை மாற்றும்.',
      'உள்வரிச் செயற்கூறுகள் (Inline) அழைப்பு நேர இழப்பைக் குறைக்கின்றன.',
      'வரையெல்லை: உள்ளமை எல்லை மற்றும் முழுதளாவிய எல்லை; \`::\` செயற்குறி முழுதளாவிய மாறியை அணுக உதவும்.'
    ],
    formulaCheatSheet: [
      'Prototype: ReturnType Name(Type1, Type2);',
      'Reference Parameter: void swap(int &a, int &b);',
      'Global Scope Operator: ::globalVar'
    ],
    simpleExplanationEn: 'Functions are mini-programs inside a main program. Instead of rewriting complex logic ten times, you define it once in a function and call it whenever needed.',
    simpleExplanationTa: 'செயற்கூறுகள் என்பது குறிப்பிட்ட வேலையைச் செய்யும் சிறு துணை நிரலாகும். ஒரே குறியீட்டை மீண்டும் மீண்டும் எழுதாமல் ஒருமுறை எழுதி பலமுறை பயன்படுத்த இது உதவுகிறது.'
  },
  c11_cs_ch12: {
    id: 'sum_c11_cs_ch12',
    chapterId: 'c11_cs_ch12',
    keyPointsEn: [
      'An array stores homogeneous elements contiguously in memory under a single identifier, indexed from 0 to N-1.',
      '2D arrays model matrices in rows and columns and are stored in row-major memory format.',
      'Character arrays (C-strings) terminate with null character "\0" and are manipulated using <cstring> utilities.',
      'Structures (struct) bundle heterogeneous data fields into a composite user-defined record type.',
      'Structure members are accessed using the dot (.) operator or arrow (->) operator when using pointers.'
    ],
    keyPointsTa: [
      'அணி என்பது ஒரே தரவினத்தைச் சார்ந்த பல உறுப்புகளைத் தொடர்ச்சியாக சேமிக்கும் தொகுப்பு (குறியீட்டெண் 0 முதல் N-1 வரை).',
      'இரு பரிமாண அணிகள் வரிசைகள் மற்றும் பத்திகளாக தரவுகளைச் சேமிக்கின்றன.',
      'C++ எழுத்துரு சரம் என்பது "\\0" (Null character) எழுத்துருவால் முடிவடையும் ஒரு பரிமாண அணியாகும்.',
      'கட்டமைப்பு (\`struct\`) என்பது வெவ்வேறு தரவினங்களைக் கொண்ட மாறிகளை ஒன்றாக இணைக்கும் பயனர் வரையறுத்த தரவினமாகும்.',
      'கட்டமைப்பின் உறுப்புகள் புள்ளி (\`.\`) செயற்குறி மூலம் அணுகப்படுகின்றன.'
    ],
    formulaCheatSheet: [
      '1D Array Declaration: DataType arrayName[size];',
      '2D Array: DataType matrix[rows][cols];',
      'Struct Declaration: struct Name { type member1; ... };'
    ],
    simpleExplanationEn: 'Arrays store lists of identical items like test scores, while structures group related diverse data together like a student record containing roll number, name, and marks.',
    simpleExplanationTa: 'அணிகள் ஒரே வகை மதிப்புகளின் பட்டியலையும், கட்டமைப்புகள் ஒரு மாணவரின் பெயர், மதிப்பெண், முகவரி போன்ற பல வகை தகவல்களையும் ஒரே பெயரில் சேமிக்கப் பயன்படுகின்றன.'
  },
  c11_cs_ch13: {
    id: 'sum_c11_cs_ch13',
    chapterId: 'c11_cs_ch13',
    keyPointsEn: [
      'OOP shifts focus from procedural algorithm-centric design to data-centric real-world entity simulation.',
      'Encapsulation binds data and functions together into a class, securing data against unintended tampering.',
      'Data Abstraction exposes essential attributes while hiding intricate implementation mechanics.',
      'Inheritance empowers child classes to inherit attributes and methods from parent classes, optimizing code reusability.',
      'Polymorphism enables identical interfaces to perform distinct actions based on context and data types.'
    ],
    keyPointsTa: [
      'பொருள்நோக்கு நிரலாக்கம் (OOP) செயல்களுக்குப் பதிலாக நிஜ உலக உருப்படிகளையும் தரவுகளையும் மையமாகக் கொண்டு இயங்குகிறது.',
      'உறைபொதியாக்கம் தரவுகளையும் செயல்களையும் ஒரே இனக்குழுவாகக் கட்டிப் பாதுகாக்கிறது.',
      'அருவமாக்கம் அத்தியாவசிய விவரங்களை மட்டும் காட்டி மறைமுக நுணுக்கங்களை மறைக்கிறது.',
      'மரபுரிமம் பழைய நிரல்களை மீண்டும் பயன்படுத்தி புதிய இனக்குழுக்களை உருவாக்க வழிவகுக்கிறது.',
      'பல்லுருவாக்கம் ஒரே இடைமுகத்தை பல்வேறு வடிவங்களில் செயல்பட அனுமதிக்கிறது.'
    ],
    formulaCheatSheet: [
      'OOP Pillars: Encapsulation + Abstraction + Inheritance + Polymorphism',
      'Data Protection: private by default inside C++ class'
    ],
    simpleExplanationEn: 'Instead of treating a computer program as a rigid list of instructions, OOP models software like physical objects in the real world: a car has attributes like speed and fuel, and behaviors like accelerate and brake.',
    simpleExplanationTa: 'நிரலாக்கத்தை வெறும் கட்டளைகளாகப் பார்க்காமல் நிஜ உலகின் பொருட்களைப் போல (கார், வங்கி கணக்கு) மாடலிங் செய்யும் நவீன முறை பொருள்நோக்கு நிரலாக்கமாகும்.'
  },
  c11_cs_ch14: {
    id: 'sum_c11_cs_ch14',
    chapterId: 'c11_cs_ch14',
    keyPointsEn: [
      'A class serves as a user-defined blueprint; an object is an instantiated memory representation of that class.',
      'Access specifiers regulate visibility: private (accessible within class only), protected (inheritable), and public (accessible anywhere).',
      'Member functions defined outside class syntax require the Scope Resolution Operator (::).',
      'Constructors initialize objects automatically upon declaration and carry no return type.',
      'Destructors (~ClassName) release heap and resource allocations automatically when objects exit their lifecycle scope.'
    ],
    keyPointsTa: [
      'இனக்குழு என்பது மாதிரி வரைபடம்; பொருள் என்பது அந்த வரைபடத்தின் அடிப்படையில் உருவாக்கப்படும் நிஜ உருவம்.',
      'அணுகியல் வரையறுப்பிகள்: \`private\`, \`protected\` மற்றும் \`public\`.',
      'இனக்குழுவிற்கு வெளியே உறுப்புச் செயற்கூறை வரையறுக்க \`::\` (வரையெல்லை செயற்குறி) தேவை.',
      'ஆக்கி (Constructor) பொருள் உருவாகும் போது தானாக இயங்கி மதிப்புகளைத் துவக்குகிறது.',
      'அழிப்பி (Destructor) பொருளின் வாழ்நாள் முடியும் போது நினைவகத்தை தானாக விடுவிக்கிறது.'
    ],
    formulaCheatSheet: [
      'class Name { private: ... public: Name(); ~Name(); };',
      'Outside Method: void Name::display() { ... }'
    ],
    simpleExplanationEn: 'A class is like an architectural blueprint for a house, and objects are the actual houses built from that blueprint. Constructors build and paint the rooms on startup, and destructors clean up when the house is decommissioned.',
    simpleExplanationTa: 'இனக்குழு என்பது ஒரு கட்டிடத்தின் வரைபடம் போன்றது; பொருள்கள் என்பது அந்த வரைபடத்தைக் கொண்டு கட்டப்பட்ட உண்மையான கட்டிடங்கள் ஆகும்.'
  },
  c11_cs_ch15: {
    id: 'sum_c11_cs_ch15',
    chapterId: 'c11_cs_ch15',
    keyPointsEn: [
      'Polymorphism enables an entity to behave differently based on dynamic context or parameter types.',
      'Function Overloading requires unique parameter signatures (count, type, or order); return type alone cannot overload.',
      'Operator Overloading assigns user-defined operations to C++ symbols using the operator keyword.',
      'Operators that cannot be overloaded include ::, sizeof, ., .*, and ?:.',
      'Static polymorphism is resolved entirely at compile time, yielding zero runtime execution overhead.'
    ],
    keyPointsTa: [
      'பல்லுருவாக்கம் ஒரே பெயரைக் கொண்ட உறுப்பை வெவ்வேறு பணிகளைச் செய்ய வைக்கிறது.',
      'செயற்கூறு பணிமிகுப்பில் அளவுருக்களின் வகை, எண்ணிக்கை அல்லது வரிசை கட்டாயம் வேறுபட வேண்டும்.',
      'செயற்குறி பணிமிகுப்பு (\`operator\`) பயனர் உருவாக்கிய இனக்குழுக்களுக்கு செயற்குறிகளைப் பயன்படுத்த உதவுகிறது.',
      'பணிமிகுக்க முடியாத செயற்குறிகள்: \`::\`, \`sizeof\`, \`.\`, \`.*\`, \`?:\`.',
      'தொகுப்பு நேரப் பல்லுருவாக்கம் அதிக வேகமும் செயல்திறனும் கொண்டது.'
    ],
    formulaCheatSheet: [
      'Overload Signature: Func(int) vs Func(double) vs Func(int, int)',
      'Operator Syntax: Complex operator+(const Complex &c);',
      'Non-overloadable: ::, ., .*, sizeof, ?:'
    ],
    simpleExplanationEn: 'Polymorphism allows the plus sign (+) to mean arithmetic addition when adding numbers, but string concatenation when joining words together.',
    simpleExplanationTa: 'பல்லுருவாக்கம் என்பது ஒரே குறியீடு சூழலுக்கு ஏற்ப செயல்படுவதாகும்; கூட்டல் (+) குறியீடு எண்களைக் கூட்டவும், சொற்களை இணைக்கவும் பயன்படுவதைப் போன்றது.'
  },
  c11_cs_ch16: {
    id: 'sum_c11_cs_ch16',
    chapterId: 'c11_cs_ch16',
    keyPointsEn: [
      'Inheritance establishes hierarchical relationships where derived classes inherit fields and methods from base classes.',
      'Visibility modes (public, private, protected) define how base members translate into derived class scopes.',
      'Five core inheritance topographies: Single, Multilevel, Multiple, Hierarchical, and Hybrid.',
      'Base constructors execute before derived constructors; destructors execute in reverse (derived first, base last).',
      'Private members of a base class are never directly accessible by derived classes, ensuring encapsulation integrity.'
    ],
    keyPointsTa: [
      'மரபுரிமம் என்பது ஒரு தாய் இனக்குழுவின் பண்புகளை சேய் இனக்குழு சுவீகரிக்கும் முறையாகும்.',
      'பார்வை நிலைகள்: \`public\`, \`private\` மற்றும் \`protected\`.',
      'மரபுரிமத்தின் 5 வடிவங்கள்: ஒற்றை, பல்நிலை, பலவழி, படிநிலை மற்றும் கலப்பின மரபுரிமம்.',
      'ஆக்கிகள் தாய் $\\rightarrow$ சேய் வரிசையிலும்; அழிப்பிகள் சேய் $\\rightarrow$ தாய் வரிசையிலும் இயங்கும்.',
      'தாய் இனக்குழுவின் \`private\` உறுப்புகளை சேய் இனக்குழு நேரடியாக அணுக முடியாது.'
    ],
    formulaCheatSheet: [
      'class Child : public Parent { ... };',
      'Constructor Order: Parent() -> Child()',
      'Destructor Order: ~Child() -> ~Parent()'
    ],
    simpleExplanationEn: 'Just as children inherit eye color and traits from parents while having their own unique skills, derived classes inherit code from base classes and add specialized functions.',
    simpleExplanationTa: 'குழந்தைகள் பெற்றோரின் குணங்களைப் பெறுவது போல, சேய் இனக்குழு தாய் இனக்குழுவின் அனைத்து பண்புகளையும் பெற்று புதிய வசதிகளையும் சேர்த்துக் கொள்கிறது.'
  },
  c11_cs_ch17: {
    id: 'sum_c11_cs_ch17',
    chapterId: 'c11_cs_ch17',
    keyPointsEn: [
      'Computer ethics sets moral codes governing software intellectual property, digital privacy, and online conduct.',
      'Cyber crimes include unauthorized hacking, phishing credential theft, identity fraud, and ransomware extortion.',
      'Malware categories include self-attaching viruses, autonomous self-propagating worms, and deceptive Trojan horses.',
      'Cyber protection utilizes perimeter firewalls, end-to-end cryptographic encryption, and tamper-evident digital signatures.',
      'The Indian Information Technology Act (IT Act 2000) provides legal authority and penalties against cyber transgressions.'
    ],
    keyPointsTa: [
      'கணினி நன்னெறி என்பது இணைய உலகம் மற்றும் மென்பொருட்களைப் பயன்படுத்தும் போது பேண வேண்டிய ஒழுக்க நெறிமுறைகள் ஆகும்.',
      'இணையக் குற்றங்கள்: ஊடுருவல் (Hacking), ஃபிஷிங் (Phishing), அடையாளத் திருட்டு மற்றும் தரவு கடத்தல்.',
      'தீம்பொருட்கள்: வைரஸ், புழுக்கள் (Worms), மற்றும் ட்ரோஜன் குதிரைகள் (Trojans).',
      'பாதுகாப்பு ஏற்பாடுகள்: தீச்சுவர் (Firewall), குறியாக்கம் (Encryption), மற்றும் டிஜிட்டல் கையொப்பங்கள்.',
      'இந்திய தகவல் தொழில்நுட்பச் சட்டம் (IT Act 2000) இணையக் குற்றங்களைத் தண்டிக்கும் சட்டப்பூர்வ கட்டமைப்பாகும்.'
    ],
    formulaCheatSheet: [
      'Cryptographic Pair: Public Key (Encryption) + Private Key (Decryption)',
      'IT Act: Enacted June 2000 to combat cyber offenses'
    ],
    simpleExplanationEn: 'Cyber security keeps digital thieves away from personal data, bank accounts, and critical national servers through firewalls, encryption, and cyber laws.',
    simpleExplanationTa: 'இணையப் பாதுகாப்பு என்பது நம்முடைய தனிப்பட்ட தகவல்கள், வங்கி கணக்குகள் மற்றும் ரகசியங்களை இணையத் திருடர்களிடமிருந்து பாதுகாக்கும் கவசமாகும்.'
  },
  c11_cs_ch18: {
    id: 'sum_c11_cs_ch18',
    chapterId: 'c11_cs_ch18',
    keyPointsEn: [
      'Tamil was a pioneer among Indian languages in adopting computing standards, fonts, and internet platforms.',
      'The Tamil 99 keyboard was ergonomically designed and officially standardized by the Government of Tamil Nadu.',
      'Unicode standardizes Tamil characters across code block U+0B80 to U+0BFF, eliminating proprietary font dependency.',
      'The Tamil Virtual Academy preserves classical Tamil literature and offers digital education worldwide.',
      'Modern Tamil NLP encompasses Optical Character Recognition (OCR), automated spell checkers, and neural machine translation.'
    ],
    keyPointsTa: [
      'இந்திய மொழிகளில் கணினியிலும் இணையத்திலும் முதன்முதலில் தடம் பதித்த முன்னோடி மொழி தமிழ் மொழியாகும்.',
      'தமிழ்நாடு அரசால் 1999-ல் அங்கீகரிக்கப்பட்ட தமிழ் 99 விசைப்பலகை அறிவியல் பூர்வமாக வடிவமைக்கப்பட்டது.',
      'ஒருங்கிணைந்த குறியீடு (Unicode: U+0B80 முதல் U+0BFF) எந்த ஒரு எழுத்துரு தேவையுமின்றி தமிழைக் காட்டுகிறது.',
      'தமிழ் இணையக் கல்விக்கழகம் உலகெங்கும் தமிழ் இலக்கியங்களையும் கல்வியையும் டிஜிட்டல் வழியில் பரப்புகிறது.',
      'ஒளியியல் எழுத்துணரி (OCR), தமிழ் சொல் திருத்திகள் மற்றும் இயந்திர மொழிபெயர்ப்பு நவீன தமிழ் கணிப்பியல் கருவிகள் ஆகும்.'
    ],
    formulaCheatSheet: [
      'Tamil Unicode Block: U+0B80 - U+0BFF',
      'Tamil 99 Standard: 1999 TN Government Gazette'
    ],
    simpleExplanationEn: 'Tamil computing empowers millions of speakers worldwide to write emails, build websites, run artificial intelligence, and search Tamil encyclopedias directly in their mother tongue.',
    simpleExplanationTa: 'தமிழ் கணினியியல் தமிழ் மொழியை உலகம் முழுவதும் உள்ள கணினிகள் மற்றும் ஸ்மார்ட்போன்களில் தட்டச்சு செய்யவும், இணையத்தில் தேடவும், பயன்பாடுகளை உருவாக்கவும் வழிசெய்கிறது.'
  }
};

export const CLASS_11_CS_PART2_QUIZZES: Record<string, ChapterQuiz> = {
  c11_cs_ch10: {
    id: 'quiz_c11_cs_ch10',
    chapterId: 'c11_cs_ch10',
    titleEn: 'Chapter 10 Mastery Quiz: Flow of Control',
    titleTa: 'பாடம் 10 பயிற்சி வினாடி-வினா: பாயக் கட்டுப்பாடு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which loop construct guarantees that its body will execute at least once?',
        questionTa: 'தன் உடற்பகுதியை குறைந்தபட்சம் ஒருமுறையாவது இயக்கும் சுழற்சி எது?',
        optionsEn: ['for loop', 'while loop', 'do-while loop', 'nested loop'],
        optionsTa: ['for சுழற்சி', 'while சுழற்சி', 'do-while சுழற்சி', 'பின்னலான சுழற்சி'],
        correctAnswerIndex: 2,
        explanationEn: 'do-while is an exit-controlled loop that evaluates its test condition after executing the body.',
        explanationTa: 'do-while சுழற்சியில் உடல் பகுதி இயங்கிய பிறகே நிபந்தனை சோதிக்கப்படுவதால் குறைந்தபட்சம் ஒருமுறை இயங்கும்.'
      },
      {
        id: 'q2',
        questionEn: 'What happens in a switch statement if a matching case does not contain a break statement?',
        questionTa: 'switch கூற்றில் ஒரு case-ல் \`break\` கூற்று இல்லாவிட்டால் என்ன நிகழும்?',
        optionsEn: ['Compilation error occurs', 'Execution falls through to succeeding cases', 'Program crashes immediately', 'Default block executes immediately'],
        optionsTa: ['தொகுப்புப் பிழை ஏற்படும்', 'அடுத்தடுத்த case-களும் தொடர்ந்து இயங்கும் (Fall-through)', 'நிரல் முடங்கிவிடும்', 'default தொகுதி மட்டும் இயங்கும்'],
        correctAnswerIndex: 1,
        explanationEn: 'Without break, C++ executes all subsequent case statements sequentially until a break or the closing brace is reached.',
        explanationTa: '\`break\` இல்லாவிட்டால் அடுத்தடுத்துள்ள case-களில் உள்ள கூற்றுகளும் தொடர்ந்து இயங்கும்.'
      }
    ]
  },
  c11_cs_ch11: {
    id: 'quiz_c11_cs_ch11',
    chapterId: 'c11_cs_ch11',
    titleEn: 'Chapter 11 Mastery Quiz: Functions',
    titleTa: 'பாடம் 11 பயிற்சி வினாடி-வினா: செயற்கூறுகள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which operator is used to pass parameters by reference in C++?',
        questionTa: 'C++ மொழியில் குறிப்பு மூலம் அளவுருக்களை அனுப்ப (Call by Reference) பயன்படும் குறியீடு எது?',
        optionsEn: ['*', '&', '%', '->'],
        optionsTa: ['*', '&', '%', '->'],
        correctAnswerIndex: 1,
        explanationEn: 'The ampersand (&) symbol defines a reference parameter in C++ function headers.',
        explanationTa: 'ஆம்பெர்சண்ட் (\`&\`) குறியீடு குறிப்பு மூலம் மாறிகளை அனுப்பப் பயன்படுகிறது.'
      },
      {
        id: 'q2',
        questionEn: 'Which keyword suggests the compiler to replace function calls with the actual function body code?',
        questionTa: 'செயற்கூறு அழைப்பிற்குப் பதிலாக அதன் உடற்பகுதியையே அங்கே பொருத்த உதவும் சிறப்புச்சொல் எது?',
        optionsEn: ['virtual', 'inline', 'static', 'friend'],
        optionsTa: ['virtual', 'inline', 'static', 'friend'],
        correctAnswerIndex: 1,
        explanationEn: 'The inline keyword suggests the compiler expand the function code directly inline to reduce call overhead.',
        explanationTa: '\`inline\` சிறப்புச்சொல் செயற்கூறு அழைப்பு நேரத்தைக் குறைக்க பயன்படுகிறது.'
      }
    ]
  },
  c11_cs_ch12: {
    id: 'quiz_c11_cs_ch12',
    chapterId: 'c11_cs_ch12',
    titleEn: 'Chapter 12 Mastery Quiz: Arrays and Structures',
    titleTa: 'பாடம் 12 பயிற்சி வினாடி-வினா: அணிகள் மற்றும் கட்டமைப்புகள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'What character automatically terminates every C-string in C++?',
        questionTa: 'C++ மொழியில் எழுத்துரு சரம் எந்த எழுத்துருவால் நிறைவு பெறுகிறது?',
        optionsEn: ['\n', '\t', '\0', ';'],
        optionsTa: ['\n', '\t', '\0', ';'],
        correctAnswerIndex: 2,
        explanationEn: 'Null character ("\0") with ASCII value 0 marks the end of character arrays.',
        explanationTa: 'வெற்று எழுத்துரு ("\\0" - Null Character) சரத்தின் முடிவைக் குறிக்கிறது.'
      },
      {
        id: 'q2',
        questionEn: 'Which operator is used to access individual members of a structure variable?',
        questionTa: 'கட்டமைப்பு மாறியின் உறுப்புகளை அணுக பயன்படும் செயற்குறி எது?',
        optionsEn: ['Dot operator (.)', 'Arrow operator (->)', 'Scope resolution (::)', 'Comma (,)'],
        optionsTa: ['புள்ளி செயற்குறி (.)', 'அம்பு செயற்குறி (->)', 'வரையெல்லை (::)', 'காற்புள்ளி (,)'],
        correctAnswerIndex: 0,
        explanationEn: 'The dot operator (.) accesses structure members for standard structure instances.',
        explanationTa: 'புள்ளி (\`.\`) செயற்குறி மூலம் கட்டமைப்பின் உறுப்புகளை அணுகலாம்.'
      }
    ]
  },
  c11_cs_ch13: {
    id: 'quiz_c11_cs_ch13',
    chapterId: 'c11_cs_ch13',
    titleEn: 'Chapter 13 Mastery Quiz: OOP Concepts',
    titleTa: 'பாடம் 13 பயிற்சி வினாடி-வினா: பொருள்நோக்கு நிரலாக்க நுட்பங்கள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Wrapping up data and functions into a single unit is known as:',
        questionTa: 'தரவுகளையும் செயற்கூறுகளையும் ஒரு ஒற்றை அமைப்பாகப் பிணைப்பது எவ்வாறு அழைக்கப்படுகிறது?',
        optionsEn: ['Data Hiding', 'Encapsulation', 'Polymorphism', 'Inheritance'],
        optionsTa: ['தரவு மறைப்பு', 'உறைபொதியாக்கம் (Encapsulation)', 'பல்லுருவாக்கம்', 'மரபுரிமம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Encapsulation is the fundamental OOP paradigm of bundling data and methods inside a class.',
        explanationTa: 'தரவுகளையும் செயற்கூறுகளையும் ஒன்றாக பிணைப்பது உறைபொதியாக்கம் எனப்படும்.'
      }
    ]
  },
  c11_cs_ch14: {
    id: 'quiz_c11_cs_ch14',
    chapterId: 'c11_cs_ch14',
    titleEn: 'Chapter 14 Mastery Quiz: Classes and Objects',
    titleTa: 'பாடம் 14 பயிற்சி வினாடி-வினா: இனக்குழுக்கள் மற்றும் பொருள்கள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'What is the default access specifier for members of a C++ class?',
        questionTa: 'C++ இனக்குழுவில் உறுப்புகளின் இயல்புநிலை அணுகியல் வரையறுப்பி எது?',
        optionsEn: ['public', 'protected', 'private', 'internal'],
        optionsTa: ['public', 'protected', 'private', 'internal'],
        correctAnswerIndex: 2,
        explanationEn: 'Class members are private by default in C++ (unlike structs which default to public).',
        explanationTa: 'C++ இனக்குழுவின் உறுப்புகள் இயல்பாக \`private\` முறையில் பாதுகாக்கப்படுகின்றன.'
      },
      {
        id: 'q2',
        questionEn: 'Which character precedes the name of a destructor function?',
        questionTa: 'அழிப்பி செயற்கூறின் பெயருக்கு முன்னால் இடம்பெறும் குறியீடு எது?',
        optionsEn: ['#', '&', '~', '!'],
        optionsTa: ['#', '&', '~', '!'],
        correctAnswerIndex: 2,
        explanationEn: 'The tilde character (~) precedes the class name to denote a destructor.',
        explanationTa: 'டில்டே (\`~\`) குறியீடு அழிப்பி (Destructor) செயற்கூறின் முன் இடம்பெறும்.'
      }
    ]
  },
  c11_cs_ch15: {
    id: 'quiz_c11_cs_ch15',
    chapterId: 'c11_cs_ch15',
    titleEn: 'Chapter 15 Mastery Quiz: Polymorphism',
    titleTa: 'பாடம் 15 பயிற்சி வினாடி-வினா: பல்லுருவாக்கம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which of the following operators CANNOT be overloaded in C++?',
        questionTa: 'பின்வருவனவற்றுள் C++ மொழியில் பணிமிகுக்க முடியாத செயற்குறி எது?',
        optionsEn: ['+', '[]', '::', '=='],
        optionsTa: ['+', '[]', '::', '=='],
        correctAnswerIndex: 2,
        explanationEn: 'The scope resolution operator (::) cannot be overloaded in C++.',
        explanationTa: 'வரையெல்லை தீர்மானச் செயற்குறி (\`::\`) C++ மொழியில் பணிமிகுக்க முடியாது.'
      }
    ]
  },
  c11_cs_ch16: {
    id: 'quiz_c11_cs_ch16',
    chapterId: 'c11_cs_ch16',
    titleEn: 'Chapter 16 Mastery Quiz: Inheritance',
    titleTa: 'பாடம் 16 பயிற்சி வினாடி-வினா: மரபுரிமம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'When a class is derived from more than one base class, it is known as:',
        questionTa: 'ஒன்றுக்கும் மேற்பட்ட தாய் இனக்குழுக்களிலிருந்து ஒரு சேய் இனக்குழு தோன்றும் முறை:',
        optionsEn: ['Multilevel Inheritance', 'Multiple Inheritance', 'Hierarchical Inheritance', 'Hybrid Inheritance'],
        optionsTa: ['பல்நிலை மரபுரிமம்', 'பலவழி மரபுரிமம் (Multiple)', 'படிநிலை மரபுரிமம்', 'கலப்பின மரபுரிமம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Multiple inheritance allows a derived class to inherit directly from two or more base classes.',
        explanationTa: 'இரண்டு அல்லது அதற்கு மேற்பட்ட தாய் இனக்குழுக்களிலிருந்து தோன்றும் சேய் பலவழி மரபுரிமம் (Multiple Inheritance) எனப்படும்.'
      }
    ]
  },
  c11_cs_ch17: {
    id: 'quiz_c11_cs_ch17',
    chapterId: 'c11_cs_ch17',
    titleEn: 'Chapter 17 Mastery Quiz: Cyber Security',
    titleTa: 'பாடம் 17 பயிற்சி வினாடி-வினா: இணையப் பாதுகாப்பு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which type of malware replicates itself autonomously across computer networks without requiring a host file?',
        questionTa: 'ஹோஸ்ட் கோப்புகள் இன்றியே கணினி வலையமைப்பில் தானாகவே பரவக்கூடிய தீம்பொருள் எது?',
        optionsEn: ['Virus', 'Worm', 'Trojan Horse', 'Spyware'],
        optionsTa: ['வைரஸ்', 'புழு (Worm)', 'ட்ரோஜன் குதிரை', 'ஸ்பைவேர்'],
        correctAnswerIndex: 1,
        explanationEn: 'Worms spread across network connections autonomously without needing to attach to existing executables.',
        explanationTa: 'புழுக்கள் (Worms) பிற கோப்புகளின் துணை இன்றியே கணினி வலையமைப்பில் வேகமாக பரவும் திறன் கொண்டவை.'
      }
    ]
  },
  c11_cs_ch18: {
    id: 'quiz_c11_cs_ch18',
    chapterId: 'c11_cs_ch18',
    titleEn: 'Chapter 18 Mastery Quiz: Tamil Computing',
    titleTa: 'பாடம் 18 பயிற்சி வினாடி-வினா: தமிழ் கணினி',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'What is the Unicode hex code point range assigned to the Tamil script?',
        questionTa: 'தமிழ் எழுத்துக்களுக்கு ஒதுக்கப்பட்ட யுனிகோட் (Unicode) குறியீட்டு வரம்பு என்ன?',
        optionsEn: ['U+0900 to U+097F', 'U+0B80 to U+0BFF', 'U+0C00 to U+0C7F', 'U+0D00 to U+0D7F'],
        optionsTa: ['U+0900 to U+097F', 'U+0B80 to U+0BFF', 'U+0C00 to U+0C7F', 'U+0D00 to U+0D7F'],
        correctAnswerIndex: 1,
        explanationEn: 'The Tamil script is mapped to the range U+0B80 through U+0BFF in the Unicode standard.',
        explanationTa: 'தமிழ் மொழிக்கு U+0B80 முதல் U+0BFF வரையிலான குறியீட்டுப் புள்ளி யுனிகோடில் ஒதுக்கப்பட்டுள்ளது.'
      }
    ]
  }
};

export const CLASS_11_CS_PART2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_cs_ch10: {
    id: 'diag_c11_cs_ch10',
    chapterId: 'c11_cs_ch10',
    titleEn: 'Control Flow Topography: Decision, Loops, and Jumps',
    titleTa: 'பாயக் கட்டுப்பாட்டு வரைபடம்: தேர்வுகள், சுழற்சிகள் மற்றும் தாவல்கள்',
    descriptionEn: 'Flowchart diagram comparing Entry-Controlled (while/for) vs Exit-Controlled (do-while) loop mechanics.',
    descriptionTa: 'நுழைவு சோதிப்பு மற்றும் வெளியேறு சோதிப்பு சுழற்சிகளின் பாய்வு வரைபடம்.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">ENTRY-CONTROLLED VS EXIT-CONTROLLED LOOPS</text>

  <!-- Left: While Loop (Entry Controlled) -->
  <g transform="translate(60, 60)">
    <rect width="320" height="320" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="160" y="30" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">while / for (Entry Controlled)</text>
    <text x="160" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Condition evaluated before body</text>

    <!-- Condition Diamond -->
    <polygon points="160,80 230,125 160,170 90,125" fill="#0284c7" stroke="#ffffff" stroke-width="1.5" />
    <text x="160" y="125" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Condition?</text>
    <text x="160" y="142" text-anchor="middle" fill="#e0f2fe" font-size="10">True / False</text>

    <!-- Loop Body -->
    <rect x="100" y="210" width="120" height="50" rx="6" fill="#10b981" stroke="#ffffff" stroke-width="1.5" />
    <text x="160" y="240" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Loop Body</text>

    <!-- Arrows -->
    <path d="M 160 170 L 160 210" stroke="#34d399" stroke-width="2" />
    <text x="175" y="195" fill="#34d399" font-size="11" font-weight="bold">True</text>

    <path d="M 100 235 L 50 235 L 50 125 L 90 125" stroke="#38bdf8" stroke-width="2" fill="none" />
    
    <path d="M 230 125 L 280 125 L 280 290" stroke="#f43f5e" stroke-width="2" fill="none" />
    <text x="245" y="115" fill="#f43f5e" font-size="11" font-weight="bold">False</text>
    <text x="280" y="305" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Exit</text>
  </g>

  <!-- Right: Do-While Loop (Exit Controlled) -->
  <g transform="translate(420, 60)">
    <rect width="320" height="320" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="160" y="30" text-anchor="middle" fill="#f59e0b" font-size="15" font-weight="bold">do-while (Exit Controlled)</text>
    <text x="160" y="50" text-anchor="middle" fill="#94a3b8" font-size="12">Body executes at least once!</text>

    <!-- Loop Body First -->
    <rect x="100" y="80" width="120" height="50" rx="6" fill="#10b981" stroke="#ffffff" stroke-width="1.5" />
    <text x="160" y="110" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Loop Body</text>

    <!-- Arrow to condition -->
    <path d="M 160 130 L 160 170" stroke="#ffffff" stroke-width="2" />

    <!-- Condition Diamond -->
    <polygon points="160,170 230,215 160,260 90,215" fill="#d97706" stroke="#ffffff" stroke-width="1.5" />
    <text x="160" y="215" text-anchor="middle" fill="#ffffff" font-size="12" font-weight="bold">Condition?</text>
    <text x="160" y="232" text-anchor="middle" fill="#fef3c7" font-size="10">True / False</text>

    <!-- Loop back on True -->
    <path d="M 90 215 L 50 215 L 50 105 L 100 105" stroke="#34d399" stroke-width="2" fill="none" />
    <text x="35" y="160" fill="#34d399" font-size="11" font-weight="bold">True</text>

    <!-- Exit on False -->
    <path d="M 160 260 L 160 295" stroke="#f43f5e" stroke-width="2" fill="none" />
    <text x="175" y="280" fill="#f43f5e" font-size="11" font-weight="bold">False</text>
    <text x="160" y="310" text-anchor="middle" fill="#f43f5e" font-size="12" font-weight="bold">Exit</text>
  </g>
</svg>`
  },
  c11_cs_ch14: {
    id: 'diag_c11_cs_ch14',
    chapterId: 'c11_cs_ch14',
    titleEn: 'Encapsulation Blueprint: Class Anatomy and Instantiation',
    titleTa: 'இனக்குழுவின் அமைப்பு மற்றும் உருவகமாதல்',
    descriptionEn: 'Architecture illustrating Class private data, public methods, and multiple instantiations.',
    descriptionTa: 'இனக்குழுவின் உள்ளமைந்த மாறிகள், செயற்கூறுகள் மற்றும் பொருட்களின் உருவாக்கம்.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">CLASS BLUEPRINT &amp; OBJECT INSTANTIATION</text>

  <!-- Class Blueprint -->
  <g transform="translate(60, 60)">
    <rect width="320" height="320" rx="12" fill="#1e1b4b" stroke="#818cf8" stroke-width="2" />
    <text x="160" y="30" text-anchor="middle" fill="#a5b4fc" font-size="16" font-weight="bold">CLASS BLUEPRINT (இனக்குழு)</text>
    
    <!-- Private Section -->
    <rect x="20" y="55" width="280" height="100" rx="8" fill="#312e81" stroke="#f43f5e" stroke-width="1.5" />
    <text x="35" y="78" fill="#fda4af" font-size="13" font-weight="bold">private: (Data Hiding)</text>
    <text x="45" y="105" fill="#f8fafc" font-size="12">- int rollNo;</text>
    <text x="45" y="125" fill="#f8fafc" font-size="12">- float marks;</text>
    <text x="45" y="145" fill="#94a3b8" font-size="11">Direct external access blocked</text>

    <!-- Public Section -->
    <rect x="20" y="175" width="280" height="120" rx="8" fill="#312e81" stroke="#34d399" stroke-width="1.5" />
    <text x="35" y="200" fill="#6ee7b7" font-size="13" font-weight="bold">public: (Interface)</text>
    <text x="45" y="225" fill="#f8fafc" font-size="12">+ void readData();</text>
    <text x="45" y="245" fill="#f8fafc" font-size="12">+ void displayResult();</text>
    <text x="45" y="265" fill="#f8fafc" font-size="12">+ Student(); // Constructor</text>
  </g>

  <!-- Arrow -->
  <path d="M 400 220 L 460 220" stroke="#38bdf8" stroke-width="4" />
  <text x="430" y="205" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">Instantiates</text>

  <!-- Objects in Memory -->
  <g transform="translate(480, 60)">
    <rect width="260" height="140" rx="10" fill="#047857" stroke="#34d399" stroke-width="2" />
    <text x="130" y="28" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">Object 1: s1</text>
    <rect x="20" y="45" width="220" height="75" rx="6" fill="#065f46" />
    <text x="30" y="70" fill="#a7f3d0" font-size="12">rollNo = 101</text>
    <text x="30" y="90" fill="#a7f3d0" font-size="12">marks = 94.5</text>
    <text x="30" y="110" fill="#d1fae5" font-size="11">Address: 0x7ffd10</text>

    <rect y="170" width="260" height="140" rx="10" fill="#047857" stroke="#34d399" stroke-width="2" />
    <text x="130" y="198" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">Object 2: s2</text>
    <rect x="20" y="215" width="220" height="75" rx="6" fill="#065f46" />
    <text x="30" y="240" fill="#a7f3d0" font-size="12">rollNo = 102</text>
    <text x="30" y="260" fill="#a7f3d0" font-size="12">marks = 88.0</text>
    <text x="30" y="280" fill="#d1fae5" font-size="11">Address: 0x7ffd20</text>
  </g>
</svg>`
  },
  c11_cs_ch16: {
    id: 'diag_c11_cs_ch16',
    chapterId: 'c11_cs_ch16',
    titleEn: 'Inheritance Taxonomy: The 5 Topographies',
    titleTa: 'மரபுரிமத்தின் 5 முக்கிய வடிவங்கள்',
    descriptionEn: 'Visual classification of Single, Multilevel, Multiple, Hierarchical, and Hybrid inheritance models.',
    descriptionTa: 'ஒற்றை, பல்நிலை, பலவழி, படிநிலை மற்றும் கலப்பின மரபுரிம வரைபடங்கள்.',
    svgContent: `<svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#090d16" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">THE 5 FORMS OF C++ INHERITANCE</text>

  <!-- 1. Single -->
  <g transform="translate(40, 60)">
    <rect width="120" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="60" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">1. Single</text>
    <rect x="30" y="45" width="60" height="30" rx="4" fill="#3b82f6" />
    <text x="60" y="65" text-anchor="middle" fill="#ffffff" font-size="12">Base A</text>
    <line x1="60" y1="75" x2="60" y2="105" stroke="#ffffff" stroke-width="2" />
    <rect x="30" y="105" width="60" height="30" rx="4" fill="#10b981" />
    <text x="60" y="125" text-anchor="middle" fill="#ffffff" font-size="12">Derived B</text>
  </g>

  <!-- 2. Multilevel -->
  <g transform="translate(190, 60)">
    <rect width="120" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="60" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">2. Multilevel</text>
    <rect x="35" y="40" width="50" height="25" rx="4" fill="#3b82f6" />
    <text x="60" y="57" text-anchor="middle" fill="#ffffff" font-size="11">Class A</text>
    <line x1="60" y1="65" x2="60" y2="80" stroke="#ffffff" stroke-width="2" />
    <rect x="35" y="80" width="50" height="25" rx="4" fill="#0284c7" />
    <text x="60" y="97" text-anchor="middle" fill="#ffffff" font-size="11">Class B</text>
    <line x1="60" y1="105" x2="60" y2="120" stroke="#ffffff" stroke-width="2" />
    <rect x="35" y="120" width="50" height="25" rx="4" fill="#10b981" />
    <text x="60" y="137" text-anchor="middle" fill="#ffffff" font-size="11">Class C</text>
  </g>

  <!-- 3. Multiple -->
  <g transform="translate(340, 60)">
    <rect width="130" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="65" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">3. Multiple</text>
    <rect x="15" y="45" width="45" height="28" rx="4" fill="#3b82f6" />
    <text x="37" y="63" text-anchor="middle" fill="#ffffff" font-size="10">Base A</text>
    <rect x="70" y="45" width="45" height="28" rx="4" fill="#3b82f6" />
    <text x="92" y="63" text-anchor="middle" fill="#ffffff" font-size="10">Base B</text>
    <line x1="37" y1="73" x2="65" y2="105" stroke="#ffffff" stroke-width="1.5" />
    <line x1="92" y1="73" x2="65" y2="105" stroke="#ffffff" stroke-width="1.5" />
    <rect x="35" y="105" width="60" height="30" rx="4" fill="#10b981" />
    <text x="65" y="125" text-anchor="middle" fill="#ffffff" font-size="11">Derived C</text>
  </g>

  <!-- 4. Hierarchical -->
  <g transform="translate(500, 60)">
    <rect width="130" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="65" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">4. Hierarchical</text>
    <rect x="35" y="45" width="60" height="28" rx="4" fill="#3b82f6" />
    <text x="65" y="63" text-anchor="middle" fill="#ffffff" font-size="11">Base A</text>
    <line x1="65" y1="73" x2="37" y2="105" stroke="#ffffff" stroke-width="1.5" />
    <line x1="65" y1="73" x2="92" y2="105" stroke="#ffffff" stroke-width="1.5" />
    <rect x="15" y="105" width="45" height="28" rx="4" fill="#10b981" />
    <text x="37" y="123" text-anchor="middle" fill="#ffffff" font-size="10">Deriv B</text>
    <rect x="70" y="105" width="45" height="28" rx="4" fill="#10b981" />
    <text x="92" y="123" text-anchor="middle" fill="#ffffff" font-size="10">Deriv C</text>
  </g>

  <!-- 5. Hybrid -->
  <g transform="translate(650, 60)">
    <rect width="120" height="160" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="60" y="25" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">5. Hybrid</text>
    <rect x="40" y="40" width="40" height="22" rx="4" fill="#3b82f6" />
    <text x="60" y="55" text-anchor="middle" fill="#ffffff" font-size="10">A</text>
    <line x1="60" y1="62" x2="40" y2="80" stroke="#ffffff" stroke-width="1.5" />
    <line x1="60" y1="62" x2="80" y2="80" stroke="#ffffff" stroke-width="1.5" />
    <rect x="20" y="80" width="35" height="22" rx="4" fill="#0284c7" />
    <text x="37" y="95" text-anchor="middle" fill="#ffffff" font-size="9">B</text>
    <rect x="65" y="80" width="35" height="22" rx="4" fill="#0284c7" />
    <text x="82" y="95" text-anchor="middle" fill="#ffffff" font-size="9">C</text>
    <line x1="37" y1="102" x2="60" y2="120" stroke="#ffffff" stroke-width="1.5" />
    <line x1="82" y1="102" x2="60" y2="120" stroke="#ffffff" stroke-width="1.5" />
    <rect x="40" y="120" width="40" height="22" rx="4" fill="#10b981" />
    <text x="60" y="135" text-anchor="middle" fill="#ffffff" font-size="10">D</text>
  </g>

  <!-- Summary Banner -->
  <rect x="40" y="250" width="730" height="160" rx="12" fill="#111827" stroke="#4b5563" stroke-width="1.5" />
  <text x="400" y="280" text-anchor="middle" fill="#38bdf8" font-size="15" font-weight="bold">VISIBILITY MODE ACCESS MATRIX IN INHERITANCE</text>
  <text x="70" y="315" fill="#f8fafc" font-size="13">• public inheritance: Base public -> Derived public; Base protected -> Derived protected</text>
  <text x="70" y="340" fill="#f8fafc" font-size="13">• protected inheritance: Base public and protected -> Derived protected</text>
  <text x="70" y="365" fill="#f8fafc" font-size="13">• private inheritance: Base public and protected -> Derived private</text>
  <text x="70" y="390" fill="#f43f5e" font-size="13" font-weight="bold">• Note: Base private members are NEVER directly accessible in Derived class!</text>
</svg>`
  }
};

export const CLASS_11_CS_PART2_VIDEOS: Record<string, VideoExplainer> = {
  c11_cs_ch10: {
    id: 'vid_c11_cs_ch10',
    chapterId: 'c11_cs_ch10',
    titleEn: 'Animated Explainer: Mastering C++ Loops and Switch Statements',
    titleTa: 'இயங்குபடம்: C++ சுழற்சிகள் மற்றும் switch கூற்றுகள்',
    durationMinutes: 10,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Switch and Break Mechanism',
        titleTa: 'switch மற்றும் break செயல்பாட்டு முறை',
        visualDescriptionEn: 'Animated train tracks switching paths based on the case integer; red signal drops to stop train when break is reached.',
        narrationEn: 'In a switch statement, the program selects a matching track immediately. Without a break statement, the train crashes right through to next stations.',
        narrationTa: 'switch கூற்றில் சரியான case தேர்ந்தெடுக்கப்பட்டு இயங்குகிறது; \`break\` கூற்று அடுத்தடுத்த வழிகளில் செல்வதைத் தடுக்கிறது.',
        keyTakeaway: 'Always include break in switch cases.'
      }
    ]
  },
  c11_cs_ch14: {
    id: 'vid_c11_cs_ch14',
    chapterId: 'c11_cs_ch14',
    titleEn: 'Animated Explainer: Inside Classes, Objects, and Constructors',
    titleTa: 'இயங்குபடம்: இனக்குழு, பொருள்கள் மற்றும் ஆக்கிகள்',
    durationMinutes: 12,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'How Constructors Initialize Memory',
        titleTa: 'ஆக்கிகள் நினைவகத்தை எவ்வாறு துவக்குகின்றன',
        visualDescriptionEn: 'Visual factory robot stamping memory cells with initial values the exact microsecond an object is created.',
        narrationEn: 'The constructor automatically runs when an object is instantiated, ensuring variables are initialized safely with zero garbage values.',
        narrationTa: 'பொருள் உருவாக்கப்படும் நொடியிலேயே ஆக்கி தானாக இயங்கி மாறிகளுக்குத் தொடக்க மதிப்புகளை அமைக்கிறது.',
        keyTakeaway: 'Constructors guarantee safe initialization.'
      }
    ]
  },
  c11_cs_ch16: {
    id: 'vid_c11_cs_ch16',
    chapterId: 'c11_cs_ch16',
    titleEn: 'Animated Explainer: The Power of Inheritance',
    titleTa: 'இயங்குபடம்: மரபுரிமத்தின் ஆற்றல் மற்றும் மறுபயன்பாடு',
    durationMinutes: 11,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Building on Ancestor Code',
        titleTa: 'தாய் இனக்குழுவிலிருந்து புதிய வசதிகள்',
        visualDescriptionEn: 'A basic Vehicle class transforming into an ElectricCar class by simply inheriting wheels and engine, while adding battery and autonomous sensors.',
        narrationEn: 'Inheritance allows programmers to write fundamental logic once, and reuse it across multiple specialized child classes with zero duplicate code.',
        narrationTa: 'மரபுரிமம் ஒருமுறை எழுதப்பட்ட குறியீட்டை மீண்டும் மீண்டும் எழுதாமல், பல புதிய சேய் இனக்குழுக்களுக்குப் பயன்படுத்த உதவுகிறது.',
        keyTakeaway: 'Reusability is the cornerstone of OOP.'
      }
    ]
  },
  c11_cs_ch18: {
    id: 'vid_c11_cs_ch18',
    chapterId: 'c11_cs_ch18',
    titleEn: 'Animated Explainer: Tamil in the Digital Age',
    titleTa: 'இயங்குபடம்: டிஜிட்டல் யுகத்தில் தமிழ் கணினி',
    durationMinutes: 9,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Miracle of Unicode',
        titleTa: 'யுனிகோட் (Unicode) செய்த புரட்சி',
        visualDescriptionEn: 'Before Unicode: scrambled question marks and unreadable text. After Unicode: Tamil fonts rendering seamlessly on phones across Tokyo, New York, and Chennai.',
        narrationEn: 'Unicode brought Tamil into the digital era, assigning universal codes to every vowel and consonant so that anyone anywhere can read and write Tamil effortlessly.',
        narrationTa: 'யுனிகோட் தமிழ் எழுத்துக்களுக்கு உலகளாவிய குறியீடுகளை வழங்கி, உலகின் எந்த மூலையிலிருந்தும் கணினியில் தமிழ் வாசிக்கவும் எழுதவும் வழிசெய்துள்ளது.',
        keyTakeaway: 'Unicode standardizes global Tamil computing.'
      }
    ]
  }
};
