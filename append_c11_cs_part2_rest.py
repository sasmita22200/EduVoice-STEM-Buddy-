# -*- coding: utf-8 -*-

rest_block = '''
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
      'Character arrays (C-strings) terminate with null character "\\0" and are manipulated using <cstring> utilities.',
      'Structures (struct) bundle heterogeneous data fields into a composite user-defined record type.',
      'Structure members are accessed using the dot (.) operator or arrow (->) operator when using pointers.'
    ],
    keyPointsTa: [
      'அணி என்பது ஒரே தரவினத்தைச் சார்ந்த பல உறுப்புகளைத் தொடர்ச்சியாக சேமிக்கும் தொகுப்பு (குறியீட்டெண் 0 முதல் N-1 வரை).',
      'இரு பரிமாண அணிகள் வரிசைகள் மற்றும் பத்திகளாக தரவுகளைச் சேமிக்கின்றன.',
      'C++ எழுத்துரு சரம் என்பது \`\'\\\\0\'\` எழுத்துருவால் முடிவடையும் ஒரு பரிமாண அணியாகும்.',
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
      'ஆக்கிகள் தாய் $\\\\rightarrow$ சேய் வரிசையிலும்; அழிப்பிகள் சேய் $\\\\rightarrow$ தாய் வரிசையிலும் இயங்கும்.',
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
        optionsEn: ['\\n', '\\t', '\\0', ';'],
        optionsTa: ['\\n', '\\t', '\\0', ';'],
        correctAnswerIndex: 2,
        explanationEn: 'Null character ("\\0") with ASCII value 0 marks the end of character arrays.',
        explanationTa: 'வெற்று எழுத்துரு (\`\'\\\\0\'\` - Null Character) சரத்தின் முடிவைக் குறிக்கிறது.'
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
'''

with open('src/data/class11CSPart2.ts', 'a', encoding='utf-8') as f:
    f.write(rest_block)

print("class11CSPart2.ts fully written!")
