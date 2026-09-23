import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Computer Science - Unit 4: Database Concepts, SQL, and CSV
 * Chapters:
 * 11. Database Concepts (தரவுத்தள கருத்துகள்)
 * 12. Structured Query Language - SQL (கட்டமைக்கப்பட்ட வினவல் மொழி - SQL)
 * 13. Python and CSV Files (பைத்தான் மற்றும் CSV கோப்புகள்)
 */

export const CS_UNIT_4_CHAPTERS: Chapter[] = [
  {
    id: "c12_cs_u4_ch11",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 4,
    unitNameEn: "Unit 4: Database Concepts, SQL, and CSV",
    unitNameTa: "அலகு 4: தரவுத்தள கருத்துகள், SQL மற்றும் CSV",
    chapterNumber: 11,
    titleEn: "Chapter 11: Database Concepts (தரவுத்தள கருத்துகள்)",
    titleTa: "பாடம் 11: தரவுத்தள கருத்துகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u4_ch12",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 4,
    unitNameEn: "Unit 4: Database Concepts, SQL, and CSV",
    unitNameTa: "அலகு 4: தரவுத்தள கருத்துகள், SQL மற்றும் CSV",
    chapterNumber: 12,
    titleEn: "Chapter 12: Structured Query Language - SQL (SQL மொழி)",
    titleTa: "பாடம் 12: கட்டமைக்கப்பட்ட வினவல் மொழி (SQL)",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: "c12_cs_u4_ch13",
    classLevel: 12,
    subjectId: 'c12_cs',
    unitNumber: 4,
    unitNameEn: "Unit 4: Database Concepts, SQL, and CSV",
    unitNameTa: "அலகு 4: தரவுத்தள கருத்துகள், SQL மற்றும் CSV",
    chapterNumber: 13,
    titleEn: "Chapter 13: Python and CSV Files (பைத்தான் மற்றும் CSV கோப்புகள்)",
    titleTa: "பாடம் 13: பைத்தான் மற்றும் CSV கோப்புகள்",
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CS_UNIT_4_NOTES: Record<string, NoteItem> = {
  c12_cs_u4_ch11: {
    id: "note_c12_cs_u4_ch11",
    chapterId: "c12_cs_u4_ch11",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Database Concepts: DBMS, RDBMS, Keys, and Relational Algebra",
    titleTa: "தரவுத்தள கருத்துகள்: DBMS, RDBMS, திறவுகோல்கள் மற்றும் உறவுநிலை இயற்கணிதம்",
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
    changeNote: "DBMS vs RDBMS, keys hierarchy, ER model, and relational algebra operations.",
    changeNoteTa: "DBMS vs RDBMS, முதன்மைத் திறவுகோல் மற்றும் உறவுநிலை இயற்கணித செயல்பாடுகள்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. Data vs Information & DBMS Definition
* **Data**: Raw unorganized facts (e.g. \`65\`, \`Chennai\`).
* **Information**: Processed data with context and meaning (e.g. \`Average score is 65 in Chennai center\`).
* **DBMS**: System software for creating, storing, retrieving, and manipulating structured databases.
* **Dr. E.F. Codd** introduced the Relational Database Model in 1970 based on first-order predicate logic.

### 2. Relational Database Concepts
* **Relation (Table)**: A two-dimensional grid of rows and columns.
* **Tuple (Row / Record)**: A single horizontal record representing an entity instance.
* **Attribute (Column / Field)**: A vertical property or characteristic of the relation.
* **Degree**: The total number of attributes (columns) in a relation.
* **Cardinality**: The total number of tuples (rows) in a relation.

### 3. Database Keys
1. **Super Key**: Any set of attributes that uniquely identifies a tuple.
2. **Candidate Key**: A minimal super key without redundant attributes.
3. **Primary Key**: The designated candidate key chosen by the database designer to uniquely identify records (Cannot be NULL).
4. **Foreign Key**: An attribute matching the primary key of another table, enforcing referential integrity.
5. **Alternate Key**: Candidate keys that were not chosen as the primary key.

### 4. Relational Algebra Operations
* **Selection ($\\\\sigma$)**: Selects specific rows satisfying a condition ($\\\\sigma_{age > 18}(Student)$).
* **Projection ($\\\\pi$)**: Projects specific columns from a relation ($\\\\pi_{name, city}(Student)$).
* **Cartesian Product ($\\\\times$)**: Combines every row of table A with every row of table B.
* **Union ($\\\\cup$)**, **Intersection ($\\\\cap$)**, **Difference ($-$)**.`,
    bodyTa: `### 1. தரவு vs தகவல் மற்றும் DBMS
* **தரவு (Data)**: முறைப்படுத்தப்படாத மூல உண்மைகள்.
* **தகவல் (Information)**: பயனுள்ள வகையில் செயலாக்கப்பட்ட தரவு.
* **1970-ல் டாக்டர் E.F. காட் (E.F. Codd)** உறவுநிலை தரவுத்தள மாதிரியை (RDBMS) அறிமுகப்படுத்தினார்.

### 2. அடிப்படை கலைச்சொற்கள்
* **உறவுநிலை (Relation)**: அட்டவணை (Table).
* **பதிவு (Tuple)**: ஒரு கிடைமட்ட வரிசை (Row / Record).
* **பண்புக்கூறு (Attribute)**: செங்குத்து நிரல் (Column / Field).
* **பாகை (Degree)**: அட்டவணையில் உள்ள மொத்த நிரல்களின் (Attributes) எண்ணிக்கை.
* **கார்டினாலிட்டி (Cardinality)**: அட்டவணையில் உள்ள மொத்த வரிசைகளின் (Tuples) எண்ணிக்கை.

### 3. திறவுகோல்கள் (Database Keys)
* **முதன்மைத் திறவுகோல் (Primary Key)**: வரிசைகளைத் தனித்துவமாக அடையாளம் காணும் திறவுகோல் (வெற்று மதிப்பாக - NULL இருக்க முடியாது).
* **வெளிநாட்டுத் திறவுகோல் (Foreign Key)**: மற்றொரு அட்டவணையின் முதன்மைத் திறவுகோலுடன் இணைக்கப்படும் பண்புக்கூறு.
* **வேட்பாளர் திறவுகோல் (Candidate Key)**: முதன்மைத் திறவுகோலாகத் தேர்ந்தெடுக்கப்படத் தகுதியான குறைந்தபட்ச திறவுகோல்கள்.

### 4. உறவுநிலை இயற்கணிதம்
* **தேர்ந்தெடுப்பு ($\\\\sigma - Sigma$)**: நிபந்தனைக்குட்பட்ட வரிசைகளைத் தேர்ந்தெடுத்தல்.
* **வீழ்த்தல் ($\\\\pi - Pi$)**: குறிப்பிட்ட நிரல்களை மட்டும் பிரித்தெடுத்தல்.`,
    keyFormulas: [
      {
        nameEn: "Relational Table Metrics",
        nameTa: "அட்டவணை அளவீடுகள்",
        formula: "Degree = Count(Columns) and Cardinality = Count(Rows)",
        explanationEn: "Degree measures width of attributes; Cardinality measures volume of records.",
        explanationTa: "பாகை (Degree) நிரல்களின் எண்ணிக்கையையும்; கார்டினாலிட்டி வரிசைகளின் எண்ணிக்கையையும் குறிக்கும்."
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

  c12_cs_u4_ch12: {
    id: "note_c12_cs_u4_ch12",
    chapterId: "c12_cs_u4_ch12",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Structured Query Language: DDL, DML, DQL, and TCL Commands",
    titleTa: "கட்டமைக்கப்பட்ட வினவல் மொழி: DDL, DML, DQL மற்றும் TCL கட்டளைகள்",
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
    changeNote: "Full SQL sub-languages, constraints, clauses (WHERE, GROUP BY, HAVING, ORDER BY).",
    changeNoteTa: "DDL, DML, DQL கட்டளைகள் மற்றும் வினவல் உட்பிரிவுகள் விரிவாகச் சேர்க்கப்பட்டன.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 9,
    bodyEn: `### 1. SQL Sub-Languages Overview
SQL (Structured Query Language) is the standard language for relational databases:
1. **DDL (Data Definition Language)**: Defines schema structures:
   * \`CREATE TABLE\`, \`ALTER TABLE\`, \`DROP TABLE\`, \`TRUNCATE TABLE\`.
2. **DML (Data Manipulation Language)**: Modifies record data:
   * \`INSERT INTO\`, \`UPDATE\`, \`DELETE\`.
3. **DQL (Data Query Language)**: Retrieves records:
   * \`SELECT ... FROM ... WHERE ...\`
4. **DCL (Data Control Language)**: Controls permissions:
   * \`GRANT\`, \`REVOKE\`.
5. **TCL (Transaction Control Language)**: Manages atomic database transactions:
   * \`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\`.

### 2. Constraints in SQL
* **PRIMARY KEY**: Uniquely identifies each row; forbids duplicates and NULL values.
* **NOT NULL**: Ensures a column cannot contain empty NULL values.
* **UNIQUE**: Enforces all values in a column to be distinct.
* **CHECK**: Validates values against a Boolean rule (e.g. \`CHECK (age >= 18)\`).
* **DEFAULT**: Injects default value when none is provided during insertion.

### 3. Clauses in SELECT Statements
* \`WHERE\`: Filters rows before grouping.
* \`GROUP BY\`: Aggregates identical values using aggregate functions (\`COUNT\`, \`SUM\`, \`AVG\`, \`MIN\`, \`MAX\`).
* \`HAVING\`: Filters aggregated groups (applied after GROUP BY).
* \`ORDER BY\`: Sorts result records in \`ASC\` (ascending) or \`DESC\` (descending) order.`,
    bodyTa: `### 1. SQL மொழியின் பிரிவுகள்
1. **DDL (தரவு வரையறை மொழி)**: கட்டமைப்பு உருவாக்கம் (\`CREATE\`, \`ALTER\`, \`DROP\`, \`TRUNCATE\`).
2. **DML (தரவு கையாளுதல் மொழி)**: தரவுகளைச் சேர்த்தல் மற்றும் திருத்துதல் (\`INSERT\`, \`UPDATE\`, \`DELETE\`).
3. **DQL (தரவு வினவல் மொழி)**: தரவுகளை மீட்டெடுத்தல் (\`SELECT\`).
4. **TCL (பரிவர்த்தனை கட்டுப்பாட்டு மொழி)**: மாற்றங்களை உறுதிசெய்தல் (\`COMMIT\`, \`ROLLBACK\`, \`SAVEPOINT\`).

### 2. கட்டுப்பாடுகள் (Constraints)
* **PRIMARY KEY**: வரிசைகளைத் தனித்துவமாக அடையாளம் காணும் (வெற்று மதிப்பை ஏற்காது).
* **NOT NULL**: நிரல் காலியாக இருக்கக் கூடாது.
* **CHECK**: நிபந்தனையைச் சரிபார்க்கிறது (எ.கா: \`CHECK (age >= 18)\`).

### 3. வினவல் உட்பிரிவுகள் (Clauses)
* \`WHERE\`: குறிப்பிட்ட நிபந்தனையின் அடிப்படையில் வரிசைகளை வடிகட்டுகிறது.
* \`GROUP BY\`: தொகுப்புச் செயல்பாடுகளுக்கு (\`COUNT\`, \`AVG\`, \`SUM\`) வரிசைகளை ஒன்றுசேர்க்கிறது.
* \`HAVING\`: குழுக்களை வடிகட்ட உதவுகிறது.
* \`ORDER BY\`: ஏறுவரிசை (\`ASC\`) அல்லது இறங்குவரிசையில் (\`DESC\`) வரிசைப்படுத்துகிறது.`,
    keyFormulas: [
      {
        nameEn: "SELECT Query Syntax Order",
        nameTa: "SELECT வினவல் தொடரியல் வரிசை",
        formula: "SELECT col FROM tab WHERE cond GROUP BY col HAVING agg_cond ORDER BY col",
        explanationEn: "Strict standard structural order of SQL query execution clauses.",
        explanationTa: "SQL வினவல் கட்டளைகளை எழுதும் திட்டவட்டமான படிநிலை வரிசை."
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

  c12_cs_u4_ch13: {
    id: "note_c12_cs_u4_ch13",
    chapterId: "c12_cs_u4_ch13",
    classLevel: 12,
    subjectId: "c12_cs",
    titleEn: "Python and CSV Files: The csv Module, reader, writer, and DictReader",
    titleTa: "பைத்தான் மற்றும் CSV கோப்புகள்: csv தொகுதி, reader, writer மற்றும் DictReader",
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
    changeNote: "Reading/writing CSV files, delimiters, DictReader, and sorting CSV data.",
    changeNoteTa: "csv தொகுதி, reader, writer, DictReader மற்றும் வரிசைப்படுத்துதல்.",
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 8,
    bodyEn: `### 1. What is a CSV File?
A CSV (Comma-Separated Values) file is a plain text file that uses commas (or other delimiters like tabs, semicolons) to separate tabulated values. Each line of the file is a data record.

### 2. CSV vs XLS / XLSX
* **CSV**: Plain text format; readable by any text editor; contains raw data without formatting, charts, or macros; lightweight.
* **XLS / XLSX**: Proprietary binary/XML format; requires spreadsheet software (e.g. MS Excel); supports formatting, formulas, charts, and multiple sheets.

### 3. The Python \`csv\` Module
Python provides a built-in module named \`csv\`:
\`\`\`python
import csv

# Reading from a CSV file
with open('data.csv', 'r') as file:
    reader = csv.reader(file)
    for row in reader:
        print(row)
\`\`\`

### 4. Writing to CSV Files
\`\`\`python
import csv

data = [["Roll", "Name"], [101, "Meena"], [102, "Kavin"]]
with open('students.csv', 'w', newline='') as file:
    writer = csv.writer(file)
    writer.writerows(data)
\`\`\`
* Note: \`newline=''\` is essential to prevent extraneous blank lines between records on Windows platforms.

### 5. \`csv.DictReader\` and \`csv.DictWriter\`
* **\`DictReader\`**: Reads CSV rows directly into Python dictionaries, mapping column header names to corresponding row values automatically.`,
    bodyTa: `### 1. CSV கோப்பு என்றால் என்ன?
CSV (Comma Separated Values) என்பது காற்புள்ளியால் பிரிக்கப்பட்ட மதிப்புகளைக் கொண்ட எளிய உரைக்கோப்பு (Plain text file) ஆகும். இதில் ஒவ்வொரு வரியும் ஒரு பதிவாகும்.

### 2. CSV vs Excel (XLS)
* **CSV**: எளிய உரை வடிவம்; எந்த உரை திருத்தியிலும் திறக்கலாம்; சூத்திரங்கள் அல்லது வரைபடங்களை ஆதரிக்காது; குறைந்த சேமிப்பிடம்.
* **XLS**: மைக்ரோசாப்ட் எக்செல் பைனரி வடிவம்; வரைபடங்கள் மற்றும் சூத்திரங்களை ஆதரிக்கும்.

### 3. பைத்தானின் \`csv\` தொகுதி
பைத்தானில் CSV கோப்புகளைக் கையாள \`csv\` தொகுதி பயன்படுகிறது:
* \`csv.reader()\`: கோப்பில் உள்ள வரிகளைப் படிக்க உதவுகிறது.
* \`csv.writer()\`: தகவல்களை CSV கோப்பில் எழுத உதவுகிறது.
* \`writerows()\`: ஒரே நேரத்தில் பல வரிசைப் பதிவுகளை எழுதுகிறது.
* \`csv.DictReader()\`: ஒவ்வொரு வரியையும் அகராதியாகப் (Dictionary) படிக்கிறது.`,
    keyFormulas: [
      {
        nameEn: "CSV DictReader Pattern",
        nameTa: "CSV DictReader வடிவம்",
        formula: "reader = csv.DictReader(file) -> yields {'Header': 'Value'}",
        explanationEn: "Transforms each tabular CSV line into an indexed key-value mapping.",
        explanationTa: "ஒவ்வொரு வரியையும் தலைப்பு மற்றும் மதிப்பு கொண்ட அகராதியாக மாற்றுகிறது."
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

export const CS_UNIT_4_SUMMARIES: Record<string, SummaryItem> = {
  c12_cs_u4_ch11: {
    id: "sum_c12_cs_u4_ch11",
    chapterId: "c12_cs_u4_ch11",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "Relational databases structure data in tables. Degree is the column count, Cardinality is the row count. Primary keys uniquely identify records, and relational algebra provides query logic.",
    simpleExplanationTa: "உறவுநிலை தரவுத்தளங்கள் அட்டவணைகளில் தரவைச் சேமிக்கின்றன. பாகை நிரல்களையும், கார்டினாலிட்டி வரிசைகளையும் குறிக்கும். முதன்மைத் திறவுகோல் வரிசைகளைத் தனித்துவமாக அடையாளம் காட்டுகிறது.",
    keyPointsEn: [
      "Degree represents total columns; Cardinality represents total rows.",
      "Primary Key cannot contain duplicate or NULL values.",
      "Foreign Key establishes relational links across tables.",
      "Relational algebra operations include Selection (sigma) and Projection (pi)."
    ],
    keyPointsTa: [
      "பாகை நிரல்களின் எண்ணிக்கை; கார்டினாலிட்டி வரிசைகளின் எண்ணிக்கை.",
      "முதன்மைத் திறவுகோல் வெற்று (NULL) மதிப்புகளை ஏற்காது.",
      "வெளிநாட்டுத் திறவுகோல் அட்டவணைகளை இணைக்கிறது.",
      "உறவுநிலை இயற்கணிதம்: தேர்ந்தெடுப்பு (சிக்மா) மற்றும் வீழ்த்தல் (பை)."
    ]
  },
  c12_cs_u4_ch12: {
    id: "sum_c12_cs_u4_ch12",
    chapterId: "c12_cs_u4_ch12",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "SQL manages databases through DDL (Create, Drop), DML (Insert, Update, Delete), DQL (Select), and TCL (Commit, Rollback), supported by filtering clauses and integrity constraints.",
    simpleExplanationTa: "SQL மொழியானது DDL, DML, DQL மற்றும் TCL பிரிவுகள் மூலம் தரவுத்தளத்தை நிர்வகிக்கிறது. நிபந்தனைகள் மற்றும் கட்டுப்பாடுகள் மூலம் துல்லியமாகத் தகவலைக் கையாளலாம்.",
    keyPointsEn: [
      "DDL defines schemas; DML alters rows; DQL queries results.",
      "PRIMARY KEY, NOT NULL, and CHECK enforce data integrity.",
      "GROUP BY aggregates rows; HAVING filters grouped sets.",
      "ORDER BY sorts output in ASC or DESC sequence."
    ],
    keyPointsTa: [
      "DDL அட்டவணையை உருவாக்குகிறது; DML பதிவுகளை மாற்றுகிறது.",
      "கட்டுப்பாடுகள் தவறான தரவுகள் சேமிக்கப்படுவதைத் தடுக்கின்றன.",
      "GROUP BY ஒன்றுசேர்க்கிறது; HAVING குழுக்களை வடிகட்டுகிறது.",
      "ORDER BY முடிவுகளை ஏறு அல்லது இறங்கு வரிசையில் அடுக்கிறது."
    ]
  },
  c12_cs_u4_ch13: {
    id: "sum_c12_cs_u4_ch13",
    chapterId: "c12_cs_u4_ch13",
    lastUpdatedAt: "21 Sep 2026",
    lastUpdatedAtTa: "21 செப் 2026",
    simpleExplanationEn: "CSV files store tabular data in plain text separated by commas. Python's csv module provides reader, writer, DictReader, and writerows to inspect and export records seamlessly.",
    simpleExplanationTa: "CSV கோப்புகள் காற்புள்ளியால் பிரிக்கப்பட்ட எளிய உரைத் தரவைச் சேமிக்கின்றன. பைத்தானின் csv தொகுதியிலுள்ள reader மற்றும் writer மூலம் இவற்றை எளிதாகக் கையாளலாம்.",
    keyPointsEn: [
      "CSV is lightweight human-readable plain text without binary overhead.",
      "csv.reader() reads rows as lists of strings.",
      "csv.writer() writes rows to files (use newline='' on Windows).",
      "DictReader automatically pairs column headers with values."
    ],
    keyPointsTa: [
      "CSV என்பது எளிய உரை வடிவம்; குறைந்த நினைவகம் போதும்.",
      "csv.reader() வரிகளைப் பட்டியலாகப் படிக்கிறது.",
      "csv.writer() தகவல்களை CSV கோப்பில் எழுதுகிறது.",
      "DictReader தலைப்புகளுடன் இணைத்து அகராதியாகப் படிக்கிறது."
    ]
  }
};

export const CS_UNIT_4_QUIZZES: Record<string, ChapterQuiz> = {
  c12_cs_u4_ch11: {
    id: "quiz_c12_cs_u4_ch11",
    chapterId: "c12_cs_u4_ch11",
    titleEn: "Database Concepts Board Quiz",
    titleTa: "தரவுத்தள கருத்துகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What is the total number of attributes (columns) in a relation called?",
        questionTa: "ஒரு உறவுநிலையில் உள்ள மொத்த பண்புக்கூறுகளின் (நிரல்கள்) எண்ணிக்கை எவ்வாறு அழைக்கப்படுகிறது?",
        optionsEn: ["Degree", "Cardinality", "Domain", "Tuple"],
        optionsTa: ["பாகை (Degree)", "கார்டினாலிட்டி (Cardinality)", "களப்பகுதி (Domain)", "பதிவு (Tuple)"],
        correctAnswer: "Degree",
        explanationEn: "Degree is the count of columns; Cardinality is the count of rows.",
        explanationTa: "நிரல்களின் எண்ணிக்கை பாகை (Degree) எனப்படும்; வரிசைகளின் எண்ணிக்கை கார்டினாலிட்டி ஆகும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Who introduced the Relational Database Model in 1970?",
        questionTa: "1970-ல் உறவுநிலை தரவுத்தள மாதிரியை (RDBMS) அறிமுகப்படுத்தியவர் யார்?",
        optionsEn: ["Dr. E.F. Codd", "Alan Turing", "Charles Babbage", "Dennis Ritchie"],
        optionsTa: ["டாக்டர் E.F. காட் (Dr. E.F. Codd)", "ஆலன் டூரிங்", "சார்லஸ் பாபேஜ்", "டென்னிஸ் ரிட்சி"],
        correctAnswer: "Dr. E.F. Codd",
        explanationEn: "Dr. Edgar F. Codd formulated the relational model at IBM in 1970.",
        explanationTa: "டாக்டர் E.F. காட் 1970-ல் IBM நிறுவனத்தில் உறவுநிலை மாதிரியை அறிமுகப்படுத்தினார்."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "A Primary Key attribute in a relational database can contain NULL values.",
        questionTa: "ஒரு உறவுநிலை தரவுத்தளத்தில் முதன்மைத் திறவுகோல் வெற்று (NULL) மதிப்புகளைக் கொண்டிருக்கலாம்.",
        correctAnswer: false,
        explanationEn: "False! Primary keys strictly forbid NULL values to ensure entity integrity.",
        explanationTa: "தவறு! முதன்மைத் திறவுகோல் கண்டிப்பாக வெற்று (NULL) மதிப்பாக இருக்கக் கூடாது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which relational algebra symbol is used to perform the Selection operation?",
        questionTa: "உறவுநிலை இயற்கணிதத்தில் தேர்ந்தெடுப்புச் (Selection) செயல்பாட்டைக் குறிக்கும் குறியீடு எது?",
        optionsEn: ["σ (Sigma)", "π (Pi)", "⋈ (Join)", "ρ (Rho)"],
        optionsTa: ["σ (Sigma)", "π (Pi)", "⋈ (Join)", "ρ (Rho)"],
        correctAnswer: "σ (Sigma)",
        explanationEn: "Sigma (σ) denotes horizontal row selection based on a condition predicate.",
        explanationTa: "சிக்மா (σ) என்பது நிபந்தனை அடிப்படையில் வரிசைகளைத் தேர்ந்தெடுக்கும் குறியீடு ஆகும்."
      }
    ]
  },

  c12_cs_u4_ch12: {
    id: "quiz_c12_cs_u4_ch12",
    chapterId: "c12_cs_u4_ch12",
    titleEn: "SQL Commands and Constraints Board Quiz",
    titleTa: "SQL கட்டளைகள் மற்றும் கட்டுப்பாடுகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "Which category does the CREATE TABLE command belong to?",
        questionTa: "CREATE TABLE என்ற கட்டளை எந்த பிரிவைச் சார்ந்தது?",
        optionsEn: ["DDL", "DML", "DQL", "TCL"],
        optionsTa: ["DDL", "DML", "DQL", "TCL"],
        correctAnswer: "DDL",
        explanationEn: "CREATE TABLE is a Data Definition Language (DDL) statement.",
        explanationTa: "CREATE TABLE என்பது தரவு வரையறை மொழி (DDL) கட்டளை ஆகும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which SQL clause is used to filter groups formed by the GROUP BY clause?",
        questionTa: "GROUP BY கட்டளையால் உருவாக்கப்பட்ட குழுக்களை வடிகட்ட பயன்படும் உட்பிரிவு எது?",
        optionsEn: ["HAVING", "WHERE", "ORDER BY", "FILTER"],
        optionsTa: ["HAVING", "WHERE", "ORDER BY", "FILTER"],
        correctAnswer: "HAVING",
        explanationEn: "HAVING filters aggregated groups, whereas WHERE filters individual rows.",
        explanationTa: "HAVING என்பது குழுக்களின் முடிவுகளை வடிகட்ட உதவுகிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "The ROLLBACK command in TCL undoes modifications performed in the current transaction.",
        questionTa: "TCL-ல் உள்ள ROLLBACK கட்டளை நடப்புப் பரிவர்த்தனையின் மாற்றங்களை ரத்து செய்யப் பயன்படுகிறது.",
        correctAnswer: true,
        explanationEn: "True. ROLLBACK reverts uncommitted changes back to the previous state.",
        explanationTa: "சரி. ROLLBACK உறுதிப்படுத்தப்படாத மாற்றங்களை ரத்து செய்து பழைய நிலைக்குக் கொண்டு செல்கிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which constraint validates that values inserted into a column satisfy a given condition?",
        questionTa: "ஒரு நிரலில் உள்ளிடப்படும் மதிப்பு குறிப்பிட்ட நிபந்தனையை நிறைவு செய்கிறதா என சோதிக்கும் கட்டுப்பாடு எது?",
        optionsEn: ["CHECK", "DEFAULT", "UNIQUE", "NOT NULL"],
        optionsTa: ["CHECK", "DEFAULT", "UNIQUE", "NOT NULL"],
        correctAnswer: "CHECK",
        explanationEn: "The CHECK constraint enforces custom conditional validation.",
        explanationTa: "CHECK கட்டுப்பாடு கொடுக்கப்பட்ட நிபந்தனையைச் சரிபார்க்கிறது."
      }
    ]
  },

  c12_cs_u4_ch13: {
    id: "quiz_c12_cs_u4_ch13",
    chapterId: "c12_cs_u4_ch13",
    titleEn: "Python and CSV Files Board Quiz",
    titleTa: "பைத்தான் மற்றும் CSV கோப்புகள் வினாடி வினா",
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: "q1",
        type: "mcq",
        difficulty: "easy",
        questionEn: "What is the default delimiter in a standard CSV file?",
        questionTa: "ஒரு வழக்கமான CSV கோப்பின் முன்னிருப்பு பிரிப்பான் எது?",
        optionsEn: ["Comma (,)", "Tab (\\t)", "Semicolon (;)", "Colon (:)"],
        optionsTa: ["காற்புள்ளி (Comma - ,)", "தத்தல் (Tab - \\t)", "அரைப்புள்ளி (;)", "முக்கால்புள்ளி (:)"],
        correctAnswer: "Comma (,)",
        explanationEn: "CSV stands for Comma-Separated Values.",
        explanationTa: "CSV என்பது காற்புள்ளியால் பிரிக்கப்பட்ட மதிப்புகளைக் குறிக்கும்."
      },
      {
        id: "q2",
        type: "mcq",
        difficulty: "medium",
        questionEn: "Which parameter in open() suppresses extra blank lines between rows when writing CSV on Windows?",
        questionTa: "விண்டோஸில் CSV எழுதும் போது கூடுதல் வெற்று வரிகள் தோன்றுவதைத் தவிர்க்க open()-ல் பயன்படும் அளபுரு எது?",
        optionsEn: ["newline=''", "skip_blank=True", "linesep=None", "clean=True"],
        optionsTa: ["newline=''", "skip_blank=True", "linesep=None", "clean=True"],
        correctAnswer: "newline=''",
        explanationEn: "newline='' prevents automatic translation of newlines into extra blank lines.",
        explanationTa: "newline='' என்பது கூடுதல் வெற்று வரிகள் தோன்றுவதைத் தடுக்கிறது."
      },
      {
        id: "q3",
        type: "true_false",
        difficulty: "easy",
        questionEn: "csv.DictReader reads CSV data and maps each line into a Python dictionary.",
        questionTa: "csv.DictReader என்பது CSV தரவைப் படித்து ஒவ்வொரு வரியையும் அகராதியாக மாற்றுகிறது.",
        correctAnswer: true,
        explanationEn: "True. DictReader pairs column headers with row values.",
        explanationTa: "சரி. DictReader தலைப்புகளையும் மதிப்புகளையும் இணைத்து அகராதியாகத் தருகிறது."
      },
      {
        id: "q4",
        type: "mcq",
        difficulty: "hard",
        questionEn: "Which method in csv.writer writes multiple rows to a CSV file in a single call?",
        questionTa: "ஒரே அழைப்பில் பல வரிசைகளை CSV கோப்பில் எழுத உதவும் csv.writer முறை எது?",
        optionsEn: ["writerows()", "writerow()", "writeall()", "dumprows()"],
        optionsTa: ["writerows()", "writerow()", "writeall()", "dumprows()"],
        correctAnswer: "writerows()",
        explanationEn: "writerows() takes a list of lists and writes all rows in bulk.",
        explanationTa: "writerows() ஒரே நேரத்தில் பல பதிவுகளை கோப்பில் எழுதுகிறது."
      }
    ]
  }
};

export const CS_UNIT_4_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_cs_u4_ch11: {
    id: "diag_c12_cs_u4_ch11",
    chapterId: "c12_cs_u4_ch11",
    titleEn: "Relational Table Structure: Attributes, Tuples, Degree & Cardinality",
    titleTa: "உறவுநிலை அட்டவணை கட்டமைப்பு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="50" y="40" width="500" height="220" rx="10" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <rect x="50" y="40" width="500" height="45" fill="#3b82f6"/>
      <text x="110" y="68" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">StudentID (PK)</text>
      <text x="235" y="68" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">StudentName</text>
      <text x="360" y="68" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">Department</text>
      <text x="485" y="68" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">Marks</text>
      <line x1="175" y1="40" x2="175" y2="260" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="300" y1="40" x2="300" y2="260" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="425" y1="40" x2="425" y2="260" stroke="#cbd5e1" stroke-width="1.5"/>
      <line x1="50" y1="130" x2="550" y2="130" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="110" y="112" text-anchor="middle" fill="#0f172a" font-size="12">CS101</text>
      <text x="235" y="112" text-anchor="middle" fill="#0f172a" font-size="12">Ananya</text>
      <text x="360" y="112" text-anchor="middle" fill="#0f172a" font-size="12">Computer</text>
      <text x="485" y="112" text-anchor="middle" fill="#0f172a" font-size="12">98</text>
      <line x1="50" y1="175" x2="550" y2="175" stroke="#cbd5e1" stroke-width="1.5"/>
      <text x="110" y="157" text-anchor="middle" fill="#0f172a" font-size="12">CS102</text>
      <text x="235" y="157" text-anchor="middle" fill="#0f172a" font-size="12">Bhuvana</text>
      <text x="360" y="157" text-anchor="middle" fill="#0f172a" font-size="12">Physics</text>
      <text x="485" y="157" text-anchor="middle" fill="#0f172a" font-size="12">92</text>
      <text x="110" y="202" text-anchor="middle" fill="#0f172a" font-size="12">CS103</text>
      <text x="235" y="202" text-anchor="middle" fill="#0f172a" font-size="12">Chezhian</text>
      <text x="360" y="202" text-anchor="middle" fill="#0f172a" font-size="12">Maths</text>
      <text x="485" y="202" text-anchor="middle" fill="#0f172a" font-size="12">95</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Attributes / Columns (Degree = 4)", labelTa: "பண்புக்கூறுகள் (பாகை = 4)", descriptionEn: "Vertical fields defining the table schema.", descriptionTa: "அட்டவணையின் செங்குத்து பண்புக்கூறுகள்.", x: 50, y: 15 },
      { id: "l2", labelEn: "Tuples / Records (Cardinality = 3)", labelTa: "பதிவுகள் (கார்டினாலிட்டி = 3)", descriptionEn: "Horizontal rows holding individual entity records.", descriptionTa: "கிடைமட்ட வரிசைகளின் எண்ணிக்கை.", x: 20, y: 55 },
      { id: "l3", labelEn: "Primary Key (Unique & Non-NULL)", labelTa: "முதன்மைத் திறவுகோல்", descriptionEn: "StudentID uniquely distinguishes every tuple.", descriptionTa: "வரிசைகளைத் தனித்துவமாக அடையாளம் காணும் எண்.", x: 18, y: 22 }
    ]
  },

  c12_cs_u4_ch12: {
    id: "diag_c12_cs_u4_ch12",
    chapterId: "c12_cs_u4_ch12",
    titleEn: "SQL Sub-Languages Taxonomy: DDL, DML, DQL, DCL & TCL",
    titleTa: "SQL மொழிக் கட்டளைகளின் வகைப்பாடு வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="220" y="20" width="160" height="40" rx="8" fill="#1e293b"/>
      <text x="300" y="45" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="14">SQL Commands</text>
      <path d="M 230 60 L 70 100" stroke="#64748b" stroke-width="2"/>
      <path d="M 270 60 L 180 100" stroke="#64748b" stroke-width="2"/>
      <path d="M 300 60 L 300 100" stroke="#64748b" stroke-width="2"/>
      <path d="M 330 60 L 420 100" stroke="#64748b" stroke-width="2"/>
      <path d="M 370 60 L 530 100" stroke="#64748b" stroke-width="2"/>
      <rect x="20" y="100" width="100" height="170" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="70" y="125" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="12">DDL</text>
      <text x="70" y="155" text-anchor="middle" fill="#334155" font-size="11">CREATE</text>
      <text x="70" y="180" text-anchor="middle" fill="#334155" font-size="11">ALTER</text>
      <text x="70" y="205" text-anchor="middle" fill="#334155" font-size="11">DROP</text>
      <text x="70" y="230" text-anchor="middle" fill="#334155" font-size="11">TRUNCATE</text>
      <rect x="130" y="100" width="100" height="170" rx="8" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="180" y="125" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="12">DML</text>
      <text x="180" y="155" text-anchor="middle" fill="#334155" font-size="11">INSERT</text>
      <text x="180" y="180" text-anchor="middle" fill="#334155" font-size="11">UPDATE</text>
      <text x="180" y="205" text-anchor="middle" fill="#334155" font-size="11">DELETE</text>
      <rect x="250" y="100" width="100" height="170" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="300" y="125" text-anchor="middle" font-weight="bold" fill="#047857" font-size="12">DQL</text>
      <text x="300" y="165" text-anchor="middle" fill="#334155" font-size="12">SELECT</text>
      <text x="300" y="195" text-anchor="middle" fill="#64748b" font-size="10">(Queries data)</text>
      <rect x="370" y="100" width="100" height="170" rx="8" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
      <text x="420" y="125" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="12">DCL</text>
      <text x="420" y="165" text-anchor="middle" fill="#334155" font-size="11">GRANT</text>
      <text x="420" y="195" text-anchor="middle" fill="#334155" font-size="11">REVOKE</text>
      <rect x="490" y="100" width="100" height="170" rx="8" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="540" y="125" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="12">TCL</text>
      <text x="540" y="155" text-anchor="middle" fill="#334155" font-size="11">COMMIT</text>
      <text x="540" y="180" text-anchor="middle" fill="#334155" font-size="11">ROLLBACK</text>
      <text x="540" y="205" text-anchor="middle" fill="#334155" font-size="11">SAVEPOINT</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "DDL Structure Commands", labelTa: "DDL கட்டமைப்பு கட்டளைகள்", descriptionEn: "Schema alteration operations.", descriptionTa: "அட்டவணை கட்டமைப்பை உருவாக்கும் கட்டளைகள்.", x: 12, y: 65 },
      { id: "l2", labelEn: "DML Data Manipulation", labelTa: "DML தரவு கையாளுதல்", descriptionEn: "Record insertion, modification, and removal.", descriptionTa: "பதிவுகளைச் சேர்க்க மற்றும் திருத்த உதவும் கட்டளைகள்.", x: 30, y: 65 },
      { id: "l3", labelEn: "DQL Data Retrieval", labelTa: "DQL தரவு வினவல்", descriptionEn: "SELECT statements returning matching records.", descriptionTa: "தரவுகளைத் திரையிட உதவும் SELECT வினவல்.", x: 50, y: 65 },
      { id: "l4", labelEn: "TCL Transaction Control", labelTa: "TCL பரிவர்த்தனை கட்டுப்பாடு", descriptionEn: "Atomic commit and rollback guarantees.", descriptionTa: "பரிவர்த்தனைகளை உறுதிசெய்ய அல்லது ரத்து செய்ய உதவும் கட்டளைகள்.", x: 90, y: 65 }
    ]
  },

  c12_cs_u4_ch13: {
    id: "diag_c12_cs_u4_ch13",
    chapterId: "c12_cs_u4_ch13",
    titleEn: "CSV File Ingestion & Parsing Workflow into Python",
    titleTa: "CSV கோப்பு வாசிப்பு மற்றும் பாகுபடுத்தல் செயல்முறை வரைபடம்",
    diagramType: "svg_labeled",
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="60" width="160" height="180" rx="10" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="110" y="90" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">students.csv</text>
      <text x="110" y="125" text-anchor="middle" font-mono fill="#2563eb" font-size="11">Roll,Name,Mark</text>
      <text x="110" y="150" text-anchor="middle" font-mono fill="#475569" font-size="11">101,Divya,96</text>
      <text x="110" y="175" text-anchor="middle" font-mono fill="#475569" font-size="11">102,Ezhil,89</text>
      <text x="110" y="200" text-anchor="middle" font-mono fill="#475569" font-size="11">103,Fahad,94</text>
      <path d="M 195 150 L 265 150" stroke="#3b82f6" stroke-width="3"/>
      <rect x="270" y="95" width="130" height="110" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="335" y="130" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">csv.reader()</text>
      <text x="335" y="155" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">or DictReader()</text>
      <path d="M 405 150 L 475 150" stroke="#10b981" stroke-width="3"/>
      <rect x="480" y="60" width="90" height="180" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="525" y="90" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">Python</text>
      <text x="525" y="120" text-anchor="middle" fill="#047857" font-size="10">List of Lists</text>
      <text x="525" y="145" text-anchor="middle" fill="#047857" font-size="10">[['101', 'Divya']]</text>
      <text x="525" y="180" text-anchor="middle" fill="#047857" font-size="10">or Dict</text>
      <text x="525" y="205" text-anchor="middle" fill="#047857" font-size="10">{'Roll':'101'}</text>
    </svg>`,
    labels: [
      { id: "l1", labelEn: "Plain Text CSV File", labelTa: "எளிய உரை CSV கோப்பு", descriptionEn: "Comma-delimited records stored on disk.", descriptionTa: "காற்புள்ளியால் பிரிக்கப்பட்டு வட்டில் சேமிக்கப்பட்ட கோப்பு.", x: 18, y: 50 },
      { id: "l2", labelEn: "CSV Parsing Engine", labelTa: "CSV பாகுபடுத்தி இயந்திரம்", descriptionEn: "csv.reader splits lines into string arrays.", descriptionTa: "வரிகளைப் பிரித்துத் தரும் பைத்தான் தொகுதி.", x: 55, y: 50 },
      { id: "l3", labelEn: "Memory Data Structures", labelTa: "நினைவகத் தரவுக் கட்டமைப்புகள்", descriptionEn: "Python native lists or dictionaries ready for algorithms.", descriptionTa: "பைத்தான் கையாளும் பட்டியல் அல்லது அகராதி வடிவம்.", x: 88, y: 50 }
    ]
  }
};

export const CS_UNIT_4_VIDEOS: Record<string, VideoExplainer> = {
  c12_cs_u4_ch11: {
    id: "vid_c12_cs_u4_ch11",
    chapterId: "c12_cs_u4_ch11",
    titleEn: "Animation: The Relational Database Blueprint & Keys",
    titleTa: "அனிமேஷன்: உறவுநிலை மாதிரி மற்றும் திறவுகோல்கள் விளக்கம்",
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Tables, Tuples, and Attributes",
        titleTa: "அட்டவணை, வரிசை மற்றும் பண்புக்கூறுகள்",
        visualDescription: "An aerial view of a clean spreadsheet highlighting rows as Tuples and columns as Attributes.",
        narrationEn: "In relational databases, tables are relations. Each row is a tuple recording an entity, and each column is an attribute.",
        narrationTa: "உறவுநிலை தரவுத்தளத்தில் ஒவ்வொரு வரிசையும் ஒரு பதிவு (Tuple); ஒவ்வொரு செங்குத்து நிரலும் ஒரு பண்புக்கூறு (Attribute) ஆகும்.",
        conceptKey: "Relational Structure"
      },
      {
        sceneNumber: 2,
        titleEn: "The Golden Primary Key",
        titleTa: "தங்க முதன்மைத் திறவுகோல்",
        visualDescription: "A glowing gold key locking each record into place, strictly rejecting duplicate entries and NULL slots.",
        narrationEn: "The Primary Key guarantees that every single student or record has a unique fingerprint with zero duplicates and no empty blanks!",
        narrationTa: "முதன்மைத் திறவுகோல் எந்தவொரு பதிவும் நகலாகவோ அல்லது காலியாகவோ இல்லாமல் தனித்துவமாக இருக்க உத்தரவாதம் அளிக்கிறது!",
        conceptKey: "Primary Key Integrity"
      },
      {
        sceneNumber: 3,
        titleEn: "Selection and Projection in Action",
        titleTa: "தேர்ந்தெடுப்பு மற்றும் வீழ்த்தல் செயல்முறை",
        visualDescription: "A horizontal scanner slicing qualifying rows (Sigma) and vertical guides masking unwanted columns (Pi).",
        narrationEn: "Sigma selects qualifying rows horizontally, while Pi projects only the requested columns vertically!",
        narrationTa: "சிக்மா கிடைமட்டமாக தகுதியான வரிசைகளைத் தேர்ந்தெடுக்கிறது, பை செங்குத்தாகத் தேவையான நிரல்களை மட்டும் காட்டுகிறது!",
        conceptKey: "Relational Algebra"
      }
    ]
  },

  c12_cs_u4_ch12: {
    id: "vid_c12_cs_u4_ch12",
    chapterId: "c12_cs_u4_ch12",
    titleEn: "Animation: SQL Query Engine & Transaction Safety",
    titleTa: "அனிமேஷன்: SQL வினவல் மற்றும் பரிவர்த்தனை பாதுகாப்பு",
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "The Five Pillars of SQL",
        titleTa: "SQL மொழியின் ஐந்து தூண்கள்",
        visualDescription: "A control center with consoles labeled DDL, DML, DQL, DCL, and TCL operating simultaneously.",
        narrationEn: "SQL organizes commands into 5 sub-languages: DDL to build schemas, DML to edit data, and DQL to query results.",
        narrationTa: "SQL ஐந்து பிரிவுகளாகச் செயல்படுகிறது: DDL கட்டமைப்பை உருவாக்குகிறது, DML திருத்துகிறது, DQL விடையைத் தருகிறது.",
        conceptKey: "Sub-languages"
      },
      {
        sceneNumber: 2,
        titleEn: "Filtering with WHERE and HAVING",
        titleTa: "WHERE மற்றும் HAVING வடிகட்டிகள்",
        visualDescription: "Raw data passing through a row sieve (WHERE), grouping into bins, and passing through a group gate (HAVING).",
        narrationEn: "WHERE filters rows before they enter groups. Once grouped, HAVING filters the aggregate statistics!",
        narrationTa: "WHERE வரிகளை முதலிலேயே வடிகட்டுகிறது; பின்னர் குழுவாக மாறிய பின் HAVING அக்குழுக்களை வடிகட்டுகிறது!",
        conceptKey: "Grouping Pipeline"
      },
      {
        sceneNumber: 3,
        titleEn: "TCL: The Rollback Safety Net",
        titleTa: "TCL: ரோல்பேக் பாதுகாப்பு வலை",
        visualDescription: "A power surge threatening banking database; ROLLBACK instantly restoring balances safely.",
        narrationEn: "If an unexpected error strikes midway, ROLLBACK instantly rewinds changes, keeping your database completely uncorrupted!",
        narrationTa: "நடுவில் ஏதேனும் தவறு நேர்ந்தால் ROLLBACK பழைய நிலைக்குக் கொண்டு சென்று தரவுத்தளத்தைப் பாதுகாக்கிறது!",
        conceptKey: "Transaction Safety"
      }
    ]
  },

  c12_cs_u4_ch13: {
    id: "vid_c12_cs_u4_ch13",
    chapterId: "c12_cs_u4_ch13",
    titleEn: "Animation: The Bridge Between CSV and Python",
    titleTa: "அனிமேஷன்: CSV மற்றும் பைத்தான் இணைப்பு விளக்கம்",
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "CSV: The Universal Text Format",
        titleTa: "CSV: உலகளாவிய உரை வடிவம்",
        visualDescription: "A simple text file with commas unfolding into a colorful spreadsheet grid effortlessly.",
        narrationEn: "CSV files strip away heavy formatting, leaving raw, comma-delimited text ready for swift processing across any computer.",
        narrationTa: "CSV கோப்புகள் கூடுதல் சுமையின்றி எளிய காற்புள்ளிகளுடன் எங்கும் இயங்கும் உலகளாவிய உரை வடிவமாகும்.",
        conceptKey: "Universal Portability"
      },
      {
        sceneNumber: 2,
        titleEn: "DictReader: Automatic Headers to Dictionaries",
        titleTa: "DictReader மூலம் அகராதியாக மாற்றுதல்",
        visualDescription: "Column titles attaching themselves as label tags onto each corresponding value below.",
        narrationEn: "With DictReader, Python transforms each CSV row into an intelligent dictionary, letting you look up data by header name directly!",
        narrationTa: "DictReader மூலம் ஒவ்வொரு வரியும் அகராதியாக மாறி, தலைப்புப் பெயரை வைத்தே தகவல்களை எளிதாகப் பெற முடிகிறது!",
        conceptKey: "Dictionary Mapping"
      },
      {
        sceneNumber: 3,
        titleEn: "Writing Clean CSVs with newline=''",
        titleTa: "வெற்று வரிகளின்றி CSV எழுதுதல்",
        visualDescription: "Rows stacking neatly without any annoying blank spacer rows interrupting the data flow.",
        narrationEn: "Setting newline='' ensures your generated CSV files stay compact and clean on every operating system without phantom blanks.",
        narrationTa: "newline='' அமைப்பது விண்டோஸ் போன்ற கணினிகளில் தேவையற்ற வெற்று வரிகள் விழுவதைத் தடுத்து நேர்த்தியாக எழுதுகிறது.",
        conceptKey: "Clean I/O"
      }
    ]
  }
};
