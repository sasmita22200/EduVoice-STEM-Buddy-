import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Computer Science - Unit 5: Integrating Python with C++, SQLite, and Data Visualisation
 * Chapters:
 * 14. Importing C++ Programs in Python (பைத்தானில் C++ நிரல்களை இறக்குமதி செய்தல்)
 * 15. Data Manipulation Through SQL - SQLite (SQL மூலம் தரவைக் கையாளுதல் - SQLite)
 * 16. Data Visualisation Using Pyplot (Pyplot மூலம் தரவுக் காட்சிப்படுத்துதல்)
 */

export const CS_UNIT_5_CHAPTERS: Chapter[] = [
  {
    id: "c12_cs_u5_ch14",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 5,
    unitNameEn: "Unit 5: Integration & Visualisation",
    unitNameTa: "அலகு 5: ஒருங்கிணைப்பு மற்றும் காட்சிப்படுத்துதல்",
    chapterNumber: 14,
    titleEn: "Chapter 14: Importing C++ Programs in Python (பைத்தானில் C++ நிரல்களை இறக்குமதி செய்தல்)",
    titleTa: "பாடம் 14: பைத்தானில் C++ நிரல்களை இறக்குமதி செய்தல்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u5_ch15",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 5,
    unitNameEn: "Unit 5: Integration & Visualisation",
    unitNameTa: "அலகு 5: ஒருங்கிணைப்பு மற்றும் காட்சிப்படுத்துதல்",
    chapterNumber: 15,
    titleEn: "Chapter 15: Data Manipulation Through SQL - SQLite (SQLite தரவு கையாளுதல்)",
    titleTa: "பாடம் 15: SQL மூலம் தரவைக் கையாளுதல் - SQLite",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u5_ch16",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 5,
    unitNameEn: "Unit 5: Integration & Visualisation",
    unitNameTa: "அலகு 5: ஒருங்கிணைப்பு மற்றும் காட்சிப்படுத்துதல்",
    chapterNumber: 16,
    titleEn: "Chapter 16: Data Visualisation Using Pyplot (Pyplot காட்சிப்படுத்துதல்)",
    titleTa: "பாடம் 16: Pyplot மூலம் தரவுக் காட்சிப்படுத்துதல்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CS_UNIT_5_NOTES: Record<string, NoteItem> = {
  c12_cs_u5_ch14: {
    id: "note_c12_cs_u5_ch14",
    chapterId: "c12_cs_u5_ch14",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Importing C++ Programs in Python: MinGW, sys, os, and getopt",
    titleTa: "பைத்தானில் C++ நிரல்களை இறக்குமதி செய்தல்: MinGW, sys, os மற்றும் getopt",
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
    changeNote: "Python C++ integration, MinGW compiler environment, and getopt command-line parsing.",
    changeNoteTa: "Python C++ ஒருங்கிணைப்பு, MinGW தொகுப்பி, sys, os, getopt தொகுதிகள்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Python vs C++ & Scripting vs Programming
* **C++**: Statically typed, compiled language; direct machine instructions; high execution speed.
* **Python**: Dynamically typed, interpreted scripting language; rapid development and prototyping.
* **Why Combine?**: Write high-level logic in Python and heavy algorithmic or hardware compute in C++!

### 2. MinGW (Minimalist GNU for Windows)
MinGW provides GCC (GNU Compiler Collection) ports including \`g++\` to compile C++ source code into native Windows \`.exe\` executables.

### 3. Essential Modules for Execution
* **\`sys\` module**: Provides access to command-line arguments via \`sys.argv\`:
  * \`sys.argv[0]\`: Contains the Python script name.
  * \`sys.argv[1:]\`: Arguments passed from the terminal.
* **\`os\` module**: Interacts with the operating system:
  * \`os.system('g++ file.cpp -o file.exe && file.exe')\` executes shell commands.
* **\`getopt\` module**: Parses command line options and arguments following UNIX conventions:
  * \`opts, args = getopt.getopt(argv, options, [long_options])\`
  * Colon \`:\` indicates that an option flag requires an argument value.`,
    bodyTa: `### 1. பைத்தான் மற்றும் C++ ஒப்பீடு
* **C++**: தொகுக்கப்படும் (Compiled) மொழி; மிக வேகமான இயக்கம்; நிலையான தரவு வகை கொண்டது.
* **பைத்தான்**: வரிமொழிபெயர்க்கப்படும் (Interpreted) மொழி; விரைவான நிரலாக்கம்; இயங்கு தரவு வகை கொண்டது.
* இரண்டையும் இணைப்பதன் மூலம் பைத்தானின் எளிமையையும் C++ மொழியின் வேகத்தையும் ஒன்றாகப் பெறலாம்.

### 2. MinGW (Minimalist GNU for Windows)
விண்டோஸ் இயக்க முறைமையில் C++ நிரல்களைத் தொகுக்க உதவும் \`g++\` தொகுப்பியை இது வழங்குகிறது.

### 3. முக்கிய தொகுதிகள்
* **\`sys\` தொகுதி**: கட்டளை வரி செயலுருபுகளைக் கையாள \`sys.argv\` பட்டியலை வழங்குகிறது.
* **\`os\` தொகுதி**: இயக்க முறைமைக் கட்டளைகளை இயக்க \`os.system()\` செயற்கூறை வழங்குகிறது.
* **\`getopt\` தொகுதி**: கட்டளை வரி விருப்பங்களை (Options) பிரித்தெடுக்க உதவுகிறது.`,
    keyFormulas: [
      {
        nameEn: "getopt Syntax Pattern",
        nameTa: "getopt தொடரியல் வடிவம்",
        formula: "opts, args = getopt.getopt(argv, 'i:', ['ifile='])",
        explanationEn: "Splits flags into option-value pairs and trailing positional arguments.",
        explanationTa: "கட்டளை வரி விருப்பங்களை தனித்தனி ஜோடிகளாகப் பிரிக்கிறது."
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

  c12_cs_u5_ch15: {
    id: "note_c12_cs_u5_ch15",
    chapterId: "c12_cs_u5_ch15",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Data Manipulation Through SQL: SQLite, Cursor, fetchone, and fetchall",
    titleTa: "SQL மூலம் தரவைக் கையாளுதல்: SQLite, கர்சர், fetchone மற்றும் fetchall",
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
    changeNote: "Full sqlite3 module workflow: connection, cursor, execute, commit, fetch methods.",
    changeNoteTa: "sqlite3 தொகுதி, இணைப்பு, கர்சர், fetchone, fetchall மற்றும் commit.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Introduction to SQLite
SQLite is an embedded, serverless, zero-configuration SQL database engine. It stores the entire relational database in a single cross-platform disk file.

### 2. The Python \`sqlite3\` Module
Python includes native support for SQLite via \`import sqlite3\`.

### 3. Step-by-Step Database Workflow
1. **Connect**: Establish connection to database file:
   \`\`\`python
   import sqlite3
   connection = sqlite3.connect("academy.db")
   \`\`\`
2. **Cursor Creation**: Instantiate a cursor object to execute SQL commands:
   \`\`\`python
   cursor = connection.cursor()
   \`\`\`
3. **Execute SQL**:
   \`\`\`python
   cursor.execute("""
       CREATE TABLE IF NOT EXISTS Students (
           Roll INTEGER PRIMARY KEY,
           Name TEXT,
           Score REAL
       )
   """)
   cursor.execute("INSERT INTO Students VALUES (101, 'Kiran', 94.5)")
   connection.commit()  # Saves changes permanently
   \`\`\`
4. **Fetching Query Results**:
   * \`cursor.fetchone()\`: Fetches the next single row as a tuple.
   * \`cursor.fetchall()\`: Fetches all remaining rows as a list of tuples.
   * \`cursor.fetchmany(size)\`: Fetches the next \`size\` rows.
5. **Close**: Always close connection via \`connection.close()\`.`,
    bodyTa: `### 1. SQLite அறிமுகம்
SQLite என்பது சேவையகம் தேவையில்லாத (Serverless), பூஜ்ஜிய உள்ளமைவு கொண்ட உட்பொதிக்கப்பட்ட (Embedded) SQL தரவுத்தளமாகும்.

### 2. \`sqlite3\` பயன்பாட்டு படிநிலைகள்
1. **இணைப்பு (Connect)**:
   \`connection = sqlite3.connect("school.db")\`
2. **கர்சர் உருவாக்கம் (Cursor)**: வினவல்களை இயக்க கர்சர் பொருள் அவசியம்:
   \`cursor = connection.cursor()\`
3. **வினவல் இயக்கம்**:
   \`cursor.execute("SELECT * FROM Students")\`
4. **தரவை மீட்டெடுத்தல்**:
   * \`fetchone()\`: அடுத்த ஒரு வரிசையை மட்டும் வரிசைமுறையாகத் தரும்.
   * \`fetchall()\`: அனைத்து வரிசைகளையும் பட்டியலாகத் தரும்.
   * \`fetchmany(n)\`: கொடுக்கப்பட்ட எண்ணிக்கையில் வரிசைகளைத் தரும்.
5. **commit()**: மாற்றங்களை நிரந்தரமாகச் சேமிக்கப் பயன்படுகிறது.`,
    keyFormulas: [
      {
        nameEn: "SQLite Fetch Pattern",
        nameTa: "SQLite Fetch முறை",
        formula: "rows = cursor.fetchall() -> yields [(r1, c1), (r2, c2), ...]",
        explanationEn: "Retrieves complete record set into an iterable Python list of tuples.",
        explanationTa: "அனைத்து பதிவுகளையும் வரிசைமுறைகளின் பட்டியலாகத் தருகிறது."
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

  c12_cs_u5_ch16: {
    id: "note_c12_cs_u5_ch16",
    chapterId: "c12_cs_u5_ch16",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Data Visualisation Using Pyplot: Line, Bar, and Pie Charts",
    titleTa: "Pyplot மூலம் தரவுக் காட்சிப்படுத்துதல்: கோட்டு, பட்டை மற்றும் வட்ட வரைபடங்கள்",
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
    changeNote: "Matplotlib pyplot plotting, customization (title, xlabel, ylabel, legend), chart types.",
    changeNoteTa: "Matplotlib pyplot, கோட்டு வரைபடம், பட்டை வரைபடம், வட்ட வரைபடம் மற்றும் லேபிள்கள்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. Data Visualisation and Matplotlib
Data visualisation is the graphical representation of information and data using visual elements like charts, graphs, and maps.
* **Matplotlib**: A 2D plotting library for Python.
* **\`matplotlib.pyplot\`**: A collection of command style functions that make Matplotlib work like MATLAB.

### 2. Common Chart Types
1. **Line Chart (\`plt.plot()\`)**: Displays continuous trend over time.
2. **Bar Chart (\`plt.bar()\`)**: Compares categorical data using vertical or horizontal rectangular bars.
3. **Pie Chart (\`plt.pie()\`)**: Circular statistical graphic divided into slices illustrating numerical proportion (\`autopct='%1.1f%%'\`).

### 3. Chart Customization Functions
* \`plt.title("Annual Performance")\`: Adds headline title.
* \`plt.xlabel("Month")\` and \`plt.ylabel("Sales")\`: Adds axis labels.
* \`plt.legend()\`: Adds descriptive key labels for multiple datasets.
* \`plt.grid(True)\`: Displays background coordinate grid lines.
* \`plt.show()\`: Renders and displays the active chart window.
* \`plt.savefig("chart.png")\`: Exports chart as an image file.`,
    bodyTa: `### 1. தரவுக் காட்சிப்படுத்துதல் அறிமுகம்
தரவுகளை எளிதாகப் புரிந்துகொள்ளும் வகையில் வரைபடங்கள் மற்றும் வரைபடக் கூறுகளாக மாற்றுவது தரவுக் காட்சிப்படுத்துதல் எனப்படும்.
* **Matplotlib**: பைத்தானின் 2D வரைபட நூலகம்.
* **\`matplotlib.pyplot\`**: எளிய கட்டளைகள் மூலம் வரைபடங்களை உருவாக்க உதவும் துணைத் தொகுதி.

### 2. வரைபடங்களின் வகைகள்
1. **கோட்டு வரைபடம் (\`plt.plot()\`)**: காலப்போக்கில் ஏற்படும் மாற்றங்களை வரைபடக் கோடாகக் காட்டுகிறது.
2. **பட்டை வரைபடம் (\`plt.bar()\`)**: வகைப்படுத்தப்பட்ட தரவுகளை செவ்வகப் பட்டைகளாக ஒப்பிடுகிறது.
3. **வட்ட வரைபடம் (\`plt.pie()\`)**: சதவீத அளவுகளை வட்டத்தின் பகுதிகளாகப் பிரிக்கிறது (\`autopct\`).

### 3. தலைப்புகள் மற்றும் லேபிள்கள்
* \`plt.title()\`: வரைபடத்தின் தலைப்பு.
* \`plt.xlabel()\`, \`plt.ylabel()\`: X மற்றும் Y அச்சுகளின் பெயர்கள்.
* \`plt.show()\`: வரைபடத்தைத் திரையில் காட்டுகிறது.
* \`plt.savefig()\`: வரைபடத்தைப் படமாகச் சேமிக்கிறது.`,
    keyFormulas: [
      {
        nameEn: "Pyplot Pie Chart Formatting",
        nameTa: "Pyplot வட்ட வரைபட வடிவம்",
        formula: "plt.pie(values, labels=labels, autopct='%1.1f%%')",
        explanationEn: "Renders proportional pie slices with embedded percentage labels.",
        explanationTa: "சதவீத மதிப்புகளுடன் வட்டத்தின் பிரிவுகளை உருவாக்குகிறது."
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

export const CS_UNIT_5_SUMMARIES: Record<string, SummaryItem> = {
  c12_cs_u5_ch14: {
    id: "sum_c12_cs_u5_ch14",
    chapterId: "c12_cs_u5_ch14",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Python can execute compiled C++ code using MinGW g++ to combine Python's rapid scripting with C++ raw compute speed via sys.argv, os.system(), and getopt.",
    simpleExplanationTa: "MinGW g++ மூலம் தொகுக்கப்பட்ட C++ நிரல்களை பைத்தானில் இயக்கி, பைத்தானின் எளிமையையும் C++ மொழியின் வேகத்தையும் ஒன்றாகப் பெறலாம்.",
    keyPointsEn: [
      "Combines Python agility with C++ high execution speed.",
      "MinGW provides g++ compiler for Windows.",
      "sys.argv captures command-line parameters.",
      "getopt parses command options and switches."
    ],
    keyPointsTa: [
      "பைத்தானின் எளிமை மற்றும் C++ வேகத்தின் இணைப்பு.",
      "MinGW விண்டோஸிற்கான g++ தொகுப்பியை வழங்குகிறது.",
      "sys.argv கட்டளை வரி அளபுருக்களைப் பெறுகிறது.",
      "getopt கட்டளை வரி விருப்பங்களைப் பிரிக்கிறது."
    ]
  },
  c12_cs_u5_ch15: {
    id: "sum_c12_cs_u5_ch15",
    chapterId: "c12_cs_u5_ch15",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "SQLite is a serverless embedded database. Python's sqlite3 module manages database connections, executes queries via cursors, commits transactions, and fetches rows.",
    simpleExplanationTa: "SQLite என்பது சேவையகம் தேவையில்லாத உட்பொதிக்கப்பட்ட தரவுத்தளம். பைத்தானின் sqlite3 தொகுதி மூலம் அட்டவணைகளை உருவாக்கி, fetchone, fetchall மூலம் தரவை மீட்டெடுக்கலாம்.",
    keyPointsEn: [
      "SQLite is zero-configuration and serverless.",
      "Cursor objects execute SQL queries.",
      "commit() saves database mutations permanently.",
      "fetchall() retrieves remaining records as list of tuples."
    ],
    keyPointsTa: [
      "SQLite சேவையகம் தேவையில்லாத எளிய தரவுத்தளம்.",
      "கர்சர் SQL வினவல்களை இயக்குகிறது.",
      "commit() மாற்றங்களை நிரந்தரமாகச் சேமிக்கிறது.",
      "fetchall() அனைத்து பதிவுகளையும் பட்டியலாகத் தருகிறது."
    ]
  },
  c12_cs_u5_ch16: {
    id: "sum_c12_cs_u5_ch16",
    chapterId: "c12_cs_u5_ch16",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Matplotlib.pyplot converts numerical data into intuitive charts including Line plots, Bar charts, and Pie graphs, customized with titles, axis labels, grids, and legends.",
    simpleExplanationTa: "Matplotlib pyplot மூலம் எண்களைக் கோட்டு, பட்டை மற்றும் வட்ட வரைபடங்களாக மாற்றி காட்சிப்படுத்தலாம். தலைப்புகள் மற்றும் லேபிள்கள் மூலம் தெளிவாக்கலாம்.",
    keyPointsEn: [
      "Matplotlib provides 2D graphics generation.",
      "plot() creates line charts; bar() creates bar charts; pie() creates pie graphs.",
      "title(), xlabel(), and ylabel() label axes.",
      "show() displays the rendering window."
    ],
    keyPointsTa: [
      "Matplotlib 2D வரைபடங்களை உருவாக்குகிறது.",
      "plot() கோட்டு வரைபடம்; bar() பட்டை வரைபடம்; pie() வட்ட வரைபடம்.",
      "title, xlabel, ylabel வரைபடத்தை விவரிக்கின்றன.",
      "show() வரைபடத்தைத் திரையில் காட்டுகிறது."
    ]
  }
};

export const CS_UNIT_5_QUIZZES: Record<string, ChapterQuiz> = {
  c12_cs_u5_ch14: {
    id: "quiz_c12_cs_u5_ch14",
    chapterId: "c12_cs_u5_ch14",
    titleEn: "Importing C++ into Python Board Quiz",
    titleTa: "C++ நிரல்களை இறக்குமதி செய்தல் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which compiler toolset is used in Windows to compile C++ source files for Python execution?",
        questionTa: "விண்டோஸில் C++ நிரல்களைத் தொகுக்கப் பயன்படும் கருவித் தொகுப்பு எது?",
        optionsEn: ["MinGW (g++)", "CPython", "PyPy", "JVM"],
        optionsTa: ["MinGW (g++)", "CPython", "PyPy", "JVM"],
        correctAnswer: "MinGW (g++)",
        explanationEn: "MinGW provides the g++ compiler port for Windows platforms.",
        explanationTa: "MinGW விண்டோஸிற்கான g++ தொகுப்பியை வழங்குகிறது."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "In the sys.argv list, what does index 0 (sys.argv[0]) always store?",
        questionTa: "sys.argv பட்டியலில் முதல் உறுப்பான sys.argv[0] எதனைச் சேமிக்கும்?",
        optionsEn: ["The name of the Python script", "The first command line argument", "Total number of arguments", "C++ compiler path"],
        optionsTa: ["பைத்தான் ஸ்கிரிப்ட்டின் பெயர்", "முதல் கட்டளை வரி மதிப்பு", "மொத்த அளபுருக்களின் எண்ணிக்கை", "தொகுப்பி பாதை"],
        correctAnswer: "The name of the Python script",
        explanationEn: "sys.argv[0] holds the program file name being executed.",
        explanationTa: "sys.argv[0] என்பது இயக்கப்படும் பைத்தான் கோப்பின் பெயரைக் கொண்டிருக்கும்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "The os.system() function allows Python to execute system shell commands.",
        questionTa: "os.system() செயற்கூறு இயக்க முறைமைக் கட்டளைகளை பைத்தானிலிருந்து இயக்க அனுமதிக்கிறது.",
        correctAnswer: true,
        explanationEn: "True. os.system() passes string commands to the underlying operating system shell.",
        explanationTa: "சரி. os.system() கட்டளை வரியில் உள்ள கட்டளைகளை இயக்குகிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "In the getopt.getopt() function string 'i:o:', what does the colon (:) signify?",
        questionTa: "getopt.getopt() செயற்கூறில் 'i:o:' என்பதில் முக்கால்புள்ளி (:) எதனைக் குறிக்கிறது?",
        optionsEn: ["Option flag requires an argument value", "Option is optional", "Case insensitive flag", "Delimiter marker"],
        optionsTa: ["விருப்பத்திற்கு மதிப்பு கட்டாயம் தேவை", "விருப்பம் கட்டாயமில்லை", "எழுத்துவடிவ சார்பற்றது", "பிரிப்பான்"],
        correctAnswer: "Option flag requires an argument value",
        explanationEn: "A colon following a flag indicates that the option requires an accompanying value.",
        explanationTa: "முக்கால்புள்ளி (:) என்பது அந்த விருப்பத்திற்கு ஒரு மதிப்பு தரப்பட வேண்டும் என்பதைக் குறிக்கும்."
      }
    ]
  },

  c12_cs_u5_ch15: {
    id: "quiz_c12_cs_u5_ch15",
    chapterId: "c12_cs_u5_ch15",
    titleEn: "Data Manipulation with SQLite Board Quiz",
    titleTa: "SQLite தரவு கையாளுதல் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which method of cursor retrieves all remaining rows of a query result as a list?",
        questionTa: "வினவலின் மீதமுள்ள அனைத்து வரிசைகளையும் பட்டியலாகப் பெற உதவும் கர்சர் முறை எது?",
        optionsEn: ["fetchall()", "fetchone()", "fetchmany()", "fetchrow()"],
        optionsTa: ["fetchall()", "fetchone()", "fetchmany()", "fetchrow()"],
        correctAnswer: "fetchall()",
        explanationEn: "fetchall() fetches all rows from the active cursor result set.",
        explanationTa: "fetchall() அனைத்து வரிசைகளையும் பட்டியலாகத் தருகிறது."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which method is required on the connection object to permanently save changes to disk?",
        questionTa: "தரவுத்தள மாற்றங்களை வட்டில் நிரந்தரமாகச் சேமிக்க connection-ல் அழைக்கப்பட வேண்டிய முறை எது?",
        optionsEn: ["commit()", "save()", "push()", "flush()"],
        optionsTa: ["commit()", "save()", "push()", "flush()"],
        correctAnswer: "commit()",
        explanationEn: "commit() permanently saves the current transaction.",
        explanationTa: "commit() மாற்றங்களை நிரந்தரமாகச் சேமிக்கப் பயன்படுகிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "SQLite is serverless and does not require a separate database server process to run.",
        questionTa: "SQLite என்பது சேவையகம் தேவையில்லாதது (Serverless) மற்றும் தனியான சர்வர் செயல்முறை இன்றி இயங்குகிறது.",
        correctAnswer: true,
        explanationEn: "True. SQLite operates directly against an embedded disk file.",
        explanationTa: "சரி. SQLite தனி சர்வர் தேவையின்றி நேரடியாகக் கோப்பிலேயே செயல்படுகிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "What does cursor.fetchone() return when no more records remain to be fetched?",
        questionTa: "மீட்க எந்தப் பதிவும் இல்லாத போது cursor.fetchone() என்ன விடையைத் தரும்?",
        optionsEn: ["None", "Empty string", "False", "Throws EOFError"],
        optionsTa: ["None", "வெற்றுச் சரம்", "False", "EOFError பிழை"],
        correctAnswer: "None",
        explanationEn: "fetchone() returns None when end-of-results is reached.",
        explanationTa: "பதிவுகள் எதுவும் இல்லையெனில் fetchone() None என்ற மதிப்பைத் தரும்."
      }
    ]
  },

  c12_cs_u5_ch16: {
    id: "quiz_c12_cs_u5_ch16",
    chapterId: "c12_cs_u5_ch16",
    titleEn: "Pyplot Data Visualisation Board Quiz",
    titleTa: "Pyplot தரவுக் காட்சிப்படுத்துதல் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which pyplot function is used to plot a line graph?",
        questionTa: "கோட்டு வரைபடம் வரையப் பயன்படும் pyplot செயற்கூறு எது?",
        optionsEn: ["plt.plot()", "plt.line()", "plt.draw()", "plt.chart()"],
        optionsTa: ["plt.plot()", "plt.line()", "plt.draw()", "plt.chart()"],
        correctAnswer: "plt.plot()",
        explanationEn: "plt.plot() renders 2D line charts.",
        explanationTa: "plt.plot() கோட்டு வரைபடத்தை உருவாக்குகிறது."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which function adds a descriptive title to the top of a Pyplot figure?",
        questionTa: "Pyplot வரைபடத்தின் உச்சிக்குத் தலைப்பு வைக்க உதவும் செயற்கூறு எது?",
        optionsEn: ["plt.title()", "plt.heading()", "plt.header()", "plt.name()"],
        optionsTa: ["plt.title()", "plt.heading()", "plt.header()", "plt.name()"],
        correctAnswer: "plt.title()",
        explanationEn: "plt.title() assigns the headline title.",
        explanationTa: "plt.title() வரைபடத்தின் தலைப்பை அமைக்கிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "The plt.show() function is used to display the configured chart in a graphical window.",
        questionTa: "plt.show() செயற்கூறு வரைபடத்தைத் திரையில் காட்டப் பயன்படுகிறது.",
        correctAnswer: true,
        explanationEn: "True. plt.show() renders all open plot figures.",
        explanationTa: "சரி. plt.show() வரைபடத்தைத் திரையில் காட்டுகிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "In plt.pie(), which parameter automatically formats and formats numerical percentages on slices?",
        questionTa: "plt.pie() செயற்கூறில் சதவீத அளவுகளைத் துண்டுகளில் தானாக எழுத உதவும் அளபுரு எது?",
        optionsEn: ["autopct", "percentage", "format", "perclabel"],
        optionsTa: ["autopct", "percentage", "format", "perclabel"],
        correctAnswer: "autopct",
        explanationEn: "autopct='%1.1f%%' labels pie slices with formatted percentages.",
        explanationTa: "autopct என்பது சதவீத லேபிள்களை வட்டப் பகுதிகளில் காட்டுகிறது."
      }
    ]
  }
};

export const CS_UNIT_5_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_cs_u5_ch14: {
    id: "diag_c12_cs_u5_ch14",
    chapterId: "c12_cs_u5_ch14",
    titleEn: "Python & C++ Bridge Architecture via MinGW & OS Shell",
    titleTa: "பைத்தான் மற்றும் C++ ஒருங்கிணைப்பு கட்டமைப்பு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="50" width="160" height="200" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="110" y="85" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">Python Script</text>
      <text x="110" y="115" text-anchor="middle" fill="#334155" font-size="11">sys.argv parsing</text>
      <text x="110" y="145" text-anchor="middle" fill="#334155" font-size="11">getopt flag decoding</text>
      <text x="110" y="175" text-anchor="middle" fill="#2563eb" font-size="11">os.system(cmd)</text>
      <path d="M 195 150 L 265 150" stroke="#2563eb" stroke-width="3"/>
      <rect x="270" y="70" width="130" height="160" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="335" y="105" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="13">MinGW g++</text>
      <text x="335" y="140" text-anchor="middle" fill="#64748b" font-size="11">Compiles .cpp</text>
      <text x="335" y="165" text-anchor="middle" fill="#64748b" font-size="11">Creates .exe</text>
      <text x="335" y="195" text-anchor="middle" fill="#16a34a" font-size="11">High performance</text>
      <path d="M 405 150 L 475 150" stroke="#16a34a" stroke-width="3"/>
      <rect x="480" y="50" width="90" height="200" rx="14" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="525" y="85" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">C++ Output</text>
      <text x="525" y="125" text-anchor="middle" fill="#047857" font-size="11">Native</text>
      <text x="525" y="150" text-anchor="middle" fill="#047857" font-size="11">Execution</text>
      <text x="525" y="175" text-anchor="middle" fill="#047857" font-size="11">Piped to</text>
      <text x="525" y="200" text-anchor="middle" fill="#047857" font-size="11">Console</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Python Orchestrator", labelTa: "பைத்தான் ஒருங்கிணைப்பாளர்", descriptionEn: "Parses arguments and coordinates execution.", descriptionTa: "அளபுருக்களைப் பெற்று இயக்கத்தை வழிநடத்துகிறது.", x: 18, y: 50 },
      { id: "l2", labelEn: "MinGW GCC Compiler", labelTa: "MinGW தொகுப்பி", descriptionEn: "Compiles C++ source code into native machine executable.", descriptionTa: "C++ நிரலை விண்டோஸ் இயந்திரக் குறியீடாக மாற்றுகிறது.", x: 55, y: 50 },
      { id: "l3", labelEn: "C++ High Speed Binary", labelTa: "C++ விரைவு பைனரி", descriptionEn: "Executes computationally intensive algorithm.", descriptionTa: "அதிவேகமாக இயங்கும் C++ கணக்கீட்டுப் பகுதி.", x: 88, y: 50 }
    ]
  },

  c12_cs_u5_ch15: {
    id: "diag_c12_cs_u5_ch15",
    chapterId: "c12_cs_u5_ch15",
    titleEn: "SQLite Database Architecture: Connection, Cursor, and Fetch Loop",
    titleTa: "SQLite தரவுத்தள கட்டமைப்பு மற்றும் கர்சர் செயல்முறை",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="40" width="180" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="130" y="75" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">Python sqlite3</text>
      <text x="130" y="110" text-anchor="middle" fill="#334155" font-size="12">connect("db.db")</text>
      <text x="130" y="145" text-anchor="middle" fill="#334155" font-size="12">cursor = conn.cursor()</text>
      <text x="130" y="180" text-anchor="middle" fill="#334155" font-size="12">cursor.execute(sql)</text>
      <text x="130" y="215" text-anchor="middle" fill="#16a34a" font-size="12">conn.commit()</text>
      <path d="M 225 150 L 375 150" stroke="#2563eb" stroke-width="3"/>
      <rect x="380" y="40" width="180" height="220" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="470" y="75" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">SQLite Database File</text>
      <text x="470" y="110" text-anchor="middle" fill="#475569" font-size="12">Zero Configuration</text>
      <text x="470" y="140" text-anchor="middle" fill="#475569" font-size="12">Single File on Disk</text>
      <text x="470" y="170" text-anchor="middle" fill="#475569" font-size="12">Tables &amp; Indices</text>
      <text x="470" y="200" text-anchor="middle" fill="#475569" font-size="12">Atomic ACID Safety</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Python App with Cursor", labelTa: "கர்சர் கொண்ட பைத்தான் பயன்பாடு", descriptionEn: "Dispatches SQL queries and fetches returned records.", descriptionTa: "SQL வினவல்களை இயக்கி தரவை மீட்டெடுக்கும் பகுதி.", x: 25, y: 50 },
      { id: "l2", labelEn: "Active Cursor Channel", labelTa: "செயலில் உள்ள கர்சர் பாதை", descriptionEn: "Bidirectional query execution and record traversal.", descriptionTa: "இருவழி வினவல் இயக்கம் மற்றும் தரவு மீட்பு.", x: 50, y: 50 },
      { id: "l3", labelEn: "Embedded Database Storage", labelTa: "உட்பொதிந்த தரவுத்தள சேமிப்பு", descriptionEn: "Single persistent disk file preserving table data.", descriptionTa: "அட்டவணைத் தகவல்களைச் சேமிக்கும் ஒற்றைக் கோப்பு.", x: 75, y: 50 }
    ]
  },

  c12_cs_u5_ch16: {
    id: "diag_c12_cs_u5_ch16",
    chapterId: "c12_cs_u5_ch16",
    titleEn: "Pyplot Visualization Triad: Line, Bar & Pie Charts",
    titleTa: "Pyplot மூன்று வகை வரைபடங்கள் ஒப்பீட்டு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="50" width="160" height="200" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="110" y="80" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Line Chart</text>
      <polyline points="50,180 80,140 110,160 140,110 170,130" fill="none" stroke="#2563eb" stroke-width="3"/>
      <text x="110" y="220" text-anchor="middle" fill="#64748b" font-size="11">plt.plot()</text>
      <rect x="220" y="50" width="160" height="200" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="300" y="80" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">Bar Chart</text>
      <rect x="245" y="140" width="20" height="60" fill="#10b981"/>
      <rect x="275" y="110" width="20" height="90" fill="#10b981"/>
      <rect x="305" y="130" width="20" height="70" fill="#10b981"/>
      <rect x="335" y="90" width="20" height="110" fill="#10b981"/>
      <text x="300" y="220" text-anchor="middle" fill="#64748b" font-size="11">plt.bar()</text>
      <rect x="410" y="50" width="160" height="200" rx="12" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
      <text x="490" y="80" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">Pie Chart</text>
      <circle cx="490" cy="145" r="45" fill="#fde68a" stroke="#d97706" stroke-width="2"/>
      <path d="M 490 145 L 490 100 A 45 45 0 0 1 535 145 Z" fill="#f59e0b"/>
      <text x="490" y="220" text-anchor="middle" fill="#64748b" font-size="11">plt.pie()</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Continuous Line Chart", labelTa: "தொடர் கோட்டு வரைபடம்", descriptionEn: "Tracks trends over continuous time sequences.", descriptionTa: "கால மாற்றங்களைக் காட்டும் கோட்டு வரைபடம்.", x: 18, y: 50 },
      { id: "l2", labelEn: "Categorical Bar Graph", labelTa: "வகைப்படுத்திய பட்டை வரைபடம்", descriptionEn: "Compares quantities across discrete categories.", descriptionTa: "பல்வேறு பிரிவுகளின் அளவுகளை ஒப்பிடும் பட்டை வரைபடம்.", x: 50, y: 50 },
      { id: "l3", labelEn: "Proportional Pie Slice", labelTa: "விகிதாச்சார வட்ட வரைபடம்", descriptionEn: "Displays percentage breakdown of a whole.", descriptionTa: "முழு அளவின் சதவீதப் பங்கீட்டைக் காட்டும் வட்ட வரைபடம்.", x: 82, y: 50 }
    ]
  }
};

export const CS_UNIT_5_VIDEOS: Record<string, VideoExplainer> = {
  c12_cs_u5_ch14: {
    id: "vid_c12_cs_u5_ch14",
    chapterId: "c12_cs_u5_ch14",
    titleEn: "Animation: The Supercharged Python & C++ Alliance",
    titleTa: "அனிமேஷன்: பைத்தான் மற்றும் C++ கூட்டு இயக்கம் விளக்கம்",
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Why Combine Python with C++?",
        titleTa: "ஏன் இரு மொழிகளையும் இணைக்க வேண்டும்?",
        visualDescription: "A speedy sports car engine (C++) mounted inside a sleek, comfortable luxury cabin (Python).",
        narrationEn: "Python provides clean, rapid application development, while C++ provides raw horsepower for heavy math and games.",
        narrationTa: "பைத்தான் எளிதான நிரலாக்கத்தையும், C++ இயந்திரத்தின் அதிவேக ஆற்றலையும் ஒன்றாக வழங்குகின்றன.",
        conceptKey: "Hybrid Engineering"
      },
      {
        sceneNumber: 2,
        titleEn: "MinGW: The Translation Engine",
        titleTa: "MinGW: தொகுக்கும் இயந்திரம்",
        visualDescription: "MinGW g++ compiling C++ code into machine code in milliseconds.",
        narrationEn: "MinGW brings GCC to Windows, allowing Python to compile and execute C++ binaries seamlessly through os.system.",
        narrationTa: "MinGW விண்டோஸ் கணினிகளில் C++ நிரலை நொடிப்பொழுதில் தொகுத்து பைத்தானில் இருந்து இயக்க வைக்கிறது.",
        conceptKey: "Compilation Pipeline"
      },
      {
        sceneNumber: 3,
        titleEn: "Decoding Command Lines with getopt",
        titleTa: "getopt மூலம் கட்டளைகளைப் பிரித்தல்",
        visualDescription: "A sorting machine dividing flags like -i input.txt -o output.txt into neat, labeled bins.",
        narrationEn: "getopt sorts command-line switches and file arguments cleanly, giving your hybrid program professional terminal controls!",
        narrationTa: "getopt கட்டளை வரியில் வரும் விருப்பங்களையும் கோப்புகளையும் நேர்த்தியாகப் பிரித்து நிரலுக்கு வழங்குகிறது!",
        conceptKey: "Flag Parsing"
      }
    ]
  },

  c12_cs_u5_ch15: {
    id: "vid_c12_cs_u5_ch15",
    chapterId: "c12_cs_u5_ch15",
    titleEn: "Animation: Inside the SQLite Embedded Engine",
    titleTa: "அனிமேஷன்: SQLite உட்பொதிக்கப்பட்ட தரவுத்தளம் இயக்கம்",
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Serverless Database in a Single File",
        titleTa: "ஒற்றைக் கோப்பில் ஒரு தரவுத்தளம்",
        visualDescription: "An entire SQL relational database sliding smoothly into a lightweight single file on disk.",
        narrationEn: "Unlike bulky database servers, SQLite lives directly inside your application in a single, ultra-portable file!",
        narrationTa: "பெரிய சர்வர்கள் தேவையின்றி, SQLite உங்கள் கணினியின் ஒற்றைக் கோப்பிலேயே முழுத் தரவுத்தளத்தையும் அமைக்கிறது!",
        conceptKey: "Serverless Architecture"
      },
      {
        sceneNumber: 2,
        titleEn: "The Cursor: Your Database Courier",
        titleTa: "கர்சர்: தரவுத்தள தூதுவன்",
        visualDescription: "A messenger cursor carrying SQL commands into the database and carrying back trays of student records.",
        narrationEn: "The cursor acts as your personal courier, executing SQL commands and carrying records back with fetchone and fetchall.",
        narrationTa: "கர்சர் உங்கள் தூதுவன் போல வினவல்களை எடுத்துச் சென்று fetchone, fetchall மூலம் பதிவுகளைக் கொண்டு வருகிறது.",
        conceptKey: "Cursor Navigation"
      },
      {
        sceneNumber: 3,
        titleEn: "The Commit Seal of Approval",
        titleTa: "commit என்ற முத்திரை",
        visualDescription: "A glowing stamp pressing 'COMMIT' onto the database ledger, making updates permanent.",
        narrationEn: "Until you call commit, changes remain temporary. Calling commit permanently engraves transactions onto disk safely.",
        narrationTa: "commit செய்யாத வரை மாற்றங்கள் தற்காலிகமானவை; commit செய்தவுடன் அவை நிரந்தரமாகப் பதிவு செய்யப்படுகின்றன!",
        conceptKey: "Transaction Durability"
      }
    ]
  },

  c12_cs_u5_ch16: {
    id: "vid_c12_cs_u5_ch16",
    chapterId: "c12_cs_u5_ch16",
    titleEn: "Animation: Turning Raw Numbers into Visual Art with Pyplot",
    titleTa: "அனிமேஷன்: Pyplot மூலம் எண்களை வரைபடங்களாக மாற்றுதல்",
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Power of Visual Insights",
        titleTa: "காட்சி விளக்கத்தின் ஆற்றல்",
        visualDescription: "A dull, overwhelming wall of 10,000 numbers transforming into a stunning line chart with a single click.",
        narrationEn: "A picture is worth a thousand numbers. Data visualization reveals trends, spikes, and patterns hidden in raw digits.",
        narrationTa: "ஆயிரக்கணக்கான எண்களை விட ஒரு வரைபடம் தெளிவான உண்மைகளையும் போக்குகளையும் உடனடியாகப் புரிய வைக்கிறது.",
        conceptKey: "Visual Communication"
      },
      {
        sceneNumber: 2,
        titleEn: "The Pyplot Triumvirate: Line, Bar & Pie",
        titleTa: "மூன்று வரைபடங்கள்",
        visualDescription: "Demonstrating when to use a trend line, when to use comparison bars, and when to use percentage pie slices.",
        narrationEn: "Use line plots for continuous time trends, bar charts for comparing categories, and pie charts to show percentage shares!",
        narrationTa: "கால மாற்றத்திற்கு கோட்டு வரைபடம், ஒப்பீட்டிற்கு பட்டை வரைபடம், சதவீதத்திற்கு வட்ட வரைபடம் பயன்படுகிறது!",
        conceptKey: "Chart Archetypes"
      },
      {
        sceneNumber: 3,
        titleEn: "Polishing with Titles, Labels & Legends",
        titleTa: "தலைப்புகள் மற்றும் லேபிள்கள் அலங்காரம்",
        visualDescription: "Grid lines snapping on, bold axis labels sliding in, and a legend box clarifying data series.",
        narrationEn: "Adding titles, axis labels, grids, and legends turns a simple scribble into a publication-ready professional chart!",
        narrationTa: "தலைப்பு, அச்சுப் பெயர்கள் மற்றும் குறிப்புகளைச் சேர்த்து ஒரு சிறந்த தொழில்முறை வரைபடமாக உருவாக்கலாம்!",
        conceptKey: "Chart Polish"
      }
    ]
  }
};
