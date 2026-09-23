# -*- coding: utf-8 -*-

notes_block = '''
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
- A string in C++ is represented as a 1D character array terminated by the null character \`'\\0'\`.
\`\`\`cpp
char name[20] = "Chennai"; // automatically appends '\\0' at index 7
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
- C++ மொழியில் சரம் (String) என்பது வெற்று எழுத்துருவால் (\`'\\0'\` - Null Character) முடிவடையும் எழுத்துரு அணியாகும்.
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
1. **Single Inheritance**: One derived class inherited from one base class ($A \\rightarrow B$).
2. **Multilevel Inheritance**: A class derived from another derived class ($A \\rightarrow B \\rightarrow C$).
3. **Multiple Inheritance**: One derived class inheriting from two or more base classes ($A, B \\rightarrow C$).
4. **Hierarchical Inheritance**: Multiple derived classes inheriting from a single base class ($A \\rightarrow B, C, D$).
5. **Hybrid Inheritance**: Combination of two or more inheritance types (e.g., Multilevel + Multiple).`,
    contentTa: `# பாடம் 16: மரபுரிமம் (Inheritance)

## 1. மரபுரிமம் என்றால் என்ன?
ஒரு தாய் இனக்குழுவின் (Base Class) பண்புகளை ஒரு புதிய சேய் இனக்குழு (Derived Class) சுவீகரித்துக் கொள்ளும் நுட்பம் மரபுரிமம் எனப்படும்.
- முக்கிய நன்மை: ஏற்கனவே உள்ள நிரலை மீண்டும் மீண்டும் எழுதாமல் மறுபயன்பாடு (Reusability) செய்தல்.

## 2. மரபுரிம வகைகள்
1. **ஒற்றை மரபுரிமம் (Single)**: ஒரே ஒரு தாய் இனக்குழுவிலிருந்து ஒரு சேய் இனக்குழு தோன்றுதல்.
2. **பல்நிலை மரபுரிமம் (Multilevel)**: ஒரு சேய் இனக்குழு மற்றொரு சேய் இனக்குழுவிற்கு தாயாதல் ($A \\rightarrow B \\rightarrow C$).
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
  - **ஒலிபெயர்ப்பு விசைப்பலகை (Phonetic)**: ஆங்கில எழுத்துக்களைக் கொண்டு தமிழ் ஒலி வடிவில் தட்டச்சு செய்யும் முறை (எ.கா: 'amma' $\\\\rightarrow$ 'அம்மா').
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
'''

with open('src/data/class11CSPart2.ts', 'a', encoding='utf-8') as f:
    f.write(notes_block)

print("Notes block appended!")
