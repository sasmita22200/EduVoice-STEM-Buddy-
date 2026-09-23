import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 11 Computer Science - Part 1 (Chapters 1 to 9)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * Unit 1: Fundamentals of Computers and Working with Operating System (Chapters 1-5)
 * Unit 2: Algorithmic Problem Solving (Chapters 6-8)
 * Unit 3 (Part 1): Introduction to C++ (Chapter 9)
 */

export const CLASS_11_CS_PART1_CHAPTERS: Chapter[] = [
  {
    id: 'c11_cs_ch1',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 1,
    unitNameEn: 'Unit 1: Fundamentals of Computers and Operating System',
    unitNameTa: 'அலகு 1: கணினி அடிப்படைகள் மற்றும் இயக்க அமைப்பு',
    chapterNumber: 1,
    titleEn: 'Chapter 1: Introduction to Computers',
    titleTa: 'பாடம் 1: கணினி ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch2',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 1,
    unitNameEn: 'Unit 1: Fundamentals of Computers and Operating System',
    unitNameTa: 'அலகு 1: கணினி அடிப்படைகள் மற்றும் இயக்க அமைப்பு',
    chapterNumber: 2,
    titleEn: 'Chapter 2: Number Systems & Boolean Logic',
    titleTa: 'பாடம் 2: எண் முறைகள் & பூலியன் தருக்கம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch3',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 1,
    unitNameEn: 'Unit 1: Fundamentals of Computers and Operating System',
    unitNameTa: 'அலகு 1: கணினி அடிப்படைகள் மற்றும் இயக்க அமைப்பு',
    chapterNumber: 3,
    titleEn: 'Chapter 3: Computer Organisation',
    titleTa: 'பாடம் 3: கணினி அமைப்பு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch4',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 1,
    unitNameEn: 'Unit 1: Fundamentals of Computers and Operating System',
    unitNameTa: 'அலகு 1: கணினி அடிப்படைகள் மற்றும் இயக்க அமைப்பு',
    chapterNumber: 4,
    titleEn: 'Chapter 4: Theoretical Concepts of Operating System',
    titleTa: 'பாடம் 4: இயக்க அமைப்பின் கோட்பாட்டுக் கருத்துக்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch5',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 1,
    unitNameEn: 'Unit 1: Fundamentals of Computers and Operating System',
    unitNameTa: 'அலகு 1: கணினி அடிப்படைகள் மற்றும் இயக்க அமைப்பு',
    chapterNumber: 5,
    titleEn: 'Chapter 5: Working with Windows and Linux OS',
    titleTa: 'பாடம் 5: விண்டோஸ் மற்றும் லினக்ஸ் இயக்க அமைப்புகளின் செயல்முறை',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch6',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit 2: Algorithmic Problem Solving',
    unitNameTa: 'அலகு 2: நெறிமுறை சிக்கல் தீர்வு',
    chapterNumber: 6,
    titleEn: 'Chapter 6: Specification and Abstraction',
    titleTa: 'பாடம் 6: குறிப்பீடு மற்றும் அருவமாக்கம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch7',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit 2: Algorithmic Problem Solving',
    unitNameTa: 'அலகு 2: நெறிமுறை சிக்கல் தீர்வு',
    chapterNumber: 7,
    titleEn: 'Chapter 7: Composition and Decomposition',
    titleTa: 'பாடம் 7: ஒருங்கிணைப்பு மற்றும் சிதைவு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch8',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 2,
    unitNameEn: 'Unit 2: Algorithmic Problem Solving',
    unitNameTa: 'அலகு 2: நெறிமுறை சிக்கல் தீர்வு',
    chapterNumber: 8,
    titleEn: 'Chapter 8: Iteration and Recursion',
    titleTa: 'பாடம் 8: சுழற்சி மற்றும் தற்சுழற்சி',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_cs_ch9',
    classLevel: 11,
    subjectId: 'c11_cs',
    unitNumber: 3,
    unitNameEn: 'Unit 3: Introduction to C++',
    unitNameTa: 'அலகு 3: C++ ஓர் அறிமுகம்',
    chapterNumber: 9,
    titleEn: 'Chapter 9: Introduction to C++',
    titleTa: 'பாடம் 9: C++ ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CLASS_11_CS_PART1_NOTES: Record<string, NoteItem> = {
  c11_cs_ch1: {
    id: 'note_c11_cs_ch1',
    chapterId: 'c11_cs_ch1',
    titleEn: 'Complete Revision Notes: Introduction to Computers',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: கணினி ஓர் அறிமுகம்',
    contentEn: `### 1. Definition and Fundamental Nature of Computers
A **computer** is an electronic device that processes raw data into meaningful information by executing a stored sequence of instructions called a program. It operates on the **IPO Cycle** (Input $\\rightarrow$ Process $\\rightarrow$ Output).
- **Data (தரவு)**: Raw, unorganized facts without context (e.g., \`134\`, \`Kavitha\`).
- **Information (தகவல்)**: Processed, structured, and meaningful data from which conclusions can be drawn (e.g., \`Kavitha scored 134 marks\`).

### 2. Generations of Computers (கணினியின் தலைமுறைகள்)
1. **First Generation (1940–1956)**: Vacuum Tubes (வெற்றிடக் குழாய்கள்). Huge in size, consumed immense electricity, generated extreme heat, used machine language. Examples: ENIAC, EDVAC, UNIVAC 1.
2. **Second Generation (1956–1964)**: Transistors (டிரான்சிஸ்டர்கள்). Invented by John Bardeen, Walter Brattain, William Shockley. Smaller, faster, energy-efficient. Used assembly language and early high-level languages (FORTRAN, COBOL). Examples: IBM 1401, IBM 1620.
3. **Third Generation (1964–1971)**: Integrated Circuits (IC - ஒருங்கிணைந்த சுற்றுகள்). Developed by Jack Kilby. Hundreds of transistors combined on a single silicon chip. High-level languages widely adopted. Examples: IBM 360 series, CDC 6600.
4. **Fourth Generation (1971–Present)**: Microprocessors (நுண்செயலி) - VLSI (Very Large Scale Integration) & LSI. Birth of Personal Computers (PCs). Examples: Apple Macintosh, IBM PC.
5. **Fifth Generation (Present & Beyond)**: Ultra Large Scale Integration (ULSI), Parallel Processing, Artificial Intelligence (AI), Natural Language Processing, Robotics.
6. **Sixth Generation (In Development)**: Quantum Computing, Optical computers, Neural networks, autonomous learning systems.

### 3. Functional Components of a Computer System
A computer system comprises three essential functional units:
1. **Input Unit (உள்ளீட்டகம்)**: Translates human-understandable data into binary signals ($0$ and $1$). Examples: Keyboard, Optical Mouse, Scanner, Barcode Reader, OCR, OMR, QR Code Reader.
2. **Central Processing Unit (CPU - மையச் செயலகம்)**: The brain of the computer that controls and executes instructions.
   - **Arithmetic and Logic Unit (ALU)**: Performs arithmetic calculations ($+, -, \\times, /$) and logical decisions ($AND, OR, NOT, <, >, =$).
   - **Control Unit (CU)**: Coordinates data flow between CPU registers, memory, and peripheral I/O devices by generating timing control signals.
   - **Registers (உள் நினைவகம்)**: High-speed volatile internal memory blocks that store operands, intermediate results, and current instructions.
3. **Memory Unit (நினைவகம்)**:
   - **Primary Memory (முதன்மை நினைவகம்)**: Directly accessible by CPU. RAM (Random Access Memory - volatile) and ROM (Read Only Memory - non-volatile).
   - **Secondary Memory (இரண்டாம் நிலை நினைவகம்)**: Long-term non-volatile storage (Hard Disk, Solid State Drive, Pen Drive, Blu-ray Disc).
4. **Output Unit (வெளியீட்டகம்)**: Translates processed binary results into human-comprehensible formats. Examples: Monitor (CRT, LCD, LED), Printers (Impact: Dot Matrix; Non-Impact: Laser, Inkjet), Plotters, Audio Speakers.

### 4. Booting of Computer (கணினி துவங்குதல்)
Booting is the initial process of loading the Operating System from secondary storage into main memory (RAM) when the system power is switched on.
- **Cold Booting (Hard Booting)**: Initiating the system from a complete power-off state by pressing the hardware power switch. The processor executes BIOS (Basic Input/Output System) stored in ROM, performs **POST (Power-On Self-Test)** to diagnose hardware, and loads the OS kernel.
- **Warm Booting (Soft Booting)**: Restarting the operating system while the machine is already powered on (via \`Ctrl + Alt + Del\` or OS restart command). POST is bypassed, making it faster and less taxing on hardware.`,
    contentTa: `### 1. கணினியின் வரையறை மற்றும் அடிப்படை இயல்பு
**கணினி** என்பது பயனர் வழங்கும் மூலத் தரவுகளை (Raw Data) பெற்று, நினைவகத்தில் உள்ள கட்டளைகளின்படி முறைப்படுத்தி, பயனுள்ள தகவலாக (Information) மாற்றும் ஓர் மின்னணு சாதனமாகும். இது **உள்ளீடு $\\rightarrow$ செயலாக்கம் $\\rightarrow$ வெளியீடு (IPO)** சுழற்சியில் இயங்குகிறது.

### 2. கணினியின் தலைமுறைகள்
- **முதல் தலைமுறை (1940–1956)**: வெற்றிடக் குழாய்கள் (Vacuum Tubes). அதிக அளவு, அதிக வெப்பம், இயந்திர மொழி (Machine Language). उदा: ENIAC, EDVAC.
- **இரண்டாம் தலைமுறை (1956–1964)**: டிரான்சிஸ்டர்கள் (Transistors). சிறிய அளவு, குறைவான மின்தேவை, அசெம்பிளி மொழி.
- **மூன்றாம் தலைமுறை (1964–1971)**: ஒருங்கிணைந்த சுற்றுகள் (IC). ஜாக் கில்பி என்பவரால் உருவாக்கப்பட்டது.
- **நான்காம் தலைமுறை (1971 முதல்)**: நுண்செயலி (Microprocessor - VLSI). தனியாள் கணினிகளின் (PC) தோற்றம்.
- **ஐந்தாம் தலைமுறை (தற்போது & எதிர்காலம்)**: மீப்பெரு ஒருங்கிணைந்த சுற்றுகள் (ULSI), செயற்கை நுண்ணறிவு (AI), எந்திரவியல் (Robotics).
- **ஆறாம் தலைமுறை**: குவாண்டம் கணினிகள் மற்றும் நரம்பியல் வலைப்பின்னல் அமைப்புகள்.

### 3. கணினியின் முக்கிய பகுதிகள்
1. **உள்ளீட்டகம் (Input Unit)**: விசைப்பலகை, சுட்டி, வருடி (Scanner), QR குறியீடு படிப்பான்.
2. **மையச் செயலகம் (CPU)**:
   - **கணித மற்றும் தருக்கச் செயலகம் (ALU)**: கூட்டல், கழித்தல் மற்றும் தருக்க முடிவுகள்.
   - **கட்டுப்பாட்டகம் (Control Unit)**: கணினியின் அனைத்து பாகங்களுக்கும் சைகைகளை அனுப்பி ஒழுங்குபடுத்துகிறது.
   - **நினைவகப் பதிவேடுகள் (Registers)**: மிக அதிவேக தற்காலிக நினைவகம்.
3. **நினைவகம் (Memory Unit)**: முதன்மை நினைவகம் (RAM, ROM) மற்றும் இரண்டாம் நிலை நினைவகம் (HDD, SSD).
4. **வெளியீட்டகம் (Output Unit)**: திரையகம் (Monitor), அச்சுப்பொறி (Printer).

### 4. கணினி துவங்குதல் (Booting)
- **குளிர் துவக்கம் (Cold Booting)**: மின்சாரம் முற்றிலும் அணைக்கப்பட்ட நிலையில் இருந்து பவர் பட்டனை அழுத்தி கணினியைத் தொடங்குதல். POST (Power-On Self-Test) ஆய்வு நடைபெறும்.
- **சூடான துவக்கம் (Warm Booting)**: கணினி இயங்கிக் கொண்டிருக்கும் போது மறுதுவக்கம் செய்தல் (\`Ctrl + Alt + Del\`). இதில் POST சோதனை நடைபெறாது.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch2: {
    id: 'note_c11_cs_ch2',
    chapterId: 'c11_cs_ch2',
    titleEn: 'Complete Revision Notes: Number Systems & Boolean Logic',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: எண் முறைகள் & பூலியன் தருக்கம்',
    contentEn: `### 1. Positional Number Systems (எண் முறைகள்)
Each number system is characterized by its **Base or Radix** (the total number of distinct symbols/digits used):
1. **Decimal Number System**: Base 10. Digits: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$.
2. **Binary Number System**: Base 2. Digits: $0, 1$. (A single binary digit is a **bit**; $4 \\text{ bits} = 1 \\text{ nibble}$; $8 \\text{ bits} = 1 \\text{ byte}$; $1024 \\text{ bytes} = 1 \\text{ KB}$).
3. **Octal Number System**: Base 8. Digits: $0, 1, 2, 3, 4, 5, 6, 7$. Each octal digit corresponds to exactly $3$ binary bits ($2^3 = 8$).
4. **Hexadecimal Number System**: Base 16. Digits: $0–9$ and Letters: $A(10), B(11), C(12), D(13), E(14), F(15)$. Each hex digit corresponds to $4$ binary bits ($2^4 = 16$).

### 2. Conversions Between Number Systems
- **Decimal to Binary**: Repeated division by 2; collect remainders in reverse order (bottom-to-top, LSB to MSB).
  - Example: Convert $(25)_{10}$ to Binary:
    $25 / 2 = 12 \\text{ rem } 1$, $12 / 2 = 6 \\text{ rem } 0$, $6 / 2 = 3 \\text{ rem } 0$, $3 / 2 = 1 \\text{ rem } 1$, $1 / 2 = 0 \\text{ rem } 1 \\Rightarrow (11001)_2$.
- **Binary to Decimal**: Multiply each bit by positional power of 2 ($2^0, 2^1, 2^2, \\dots$) and sum up.
- **Binary to Hexadecimal**: Group bits into 4s from right to left (integer part) and convert each nibble to hex digit.
  - Example: $(11010110)_2 = (1101)_2 \\ (0110)_2 = (D6)_{16}$.

### 3. Representation of Signed Numbers in Computers
Computers represent negative numbers through three main schemes:
1. **Sign and Magnitude**: Leftmost bit (MSB) is the sign bit ($0$ for positive, $1$ for negative); remaining 7 bits represent magnitude. (Range for 8 bits: $-127$ to $+127$).
2. **1's Complement**: Invert all bits ($0 \\rightarrow 1$, $1 \\rightarrow 0$).
3. **2's Complement**: The standard representation in modern digital CPUs.
   $$\\text{2's Complement} = \\text{1's Complement} + 1$$
   - Example: Represent $-24$ in 8-bit 2's complement:
     - Step 1: Binary of $+24 = 00011000$
     - Step 2: 1's Complement $= 11100111$
     - Step 3: Add $1 = 11100111 + 1 = 11101000_2$.

### 4. Character Encoding Standards
- **BCD (Binary Coded Decimal)**: 6-bit code ($2^6 = 64$ characters).
- **EBCDIC (Extended BCD Interchange Code)**: 8-bit code developed by IBM ($2^8 = 256$ characters).
- **ASCII (American Standard Code for Information Interchange)**: 7-bit standard code ($128$ characters; ASCII value of 'A' is 65, 'a' is 97, '0' is 48). Extended ASCII uses 8 bits.
- **ISCII (Indian Standard Code for Information Interchange)**: 8-bit code for Indian languages including Tamil.
- **Unicode**: Universal 16-bit or 32-bit encoding standard handling over 140,000 characters covering all world languages.

### 5. Boolean Logic and Fundamental Gates
- **AND Gate**: $Y = A \\cdot B$ (Output is 1 only when all inputs are 1).
- **OR Gate**: $Y = A + B$ (Output is 1 when at least one input is 1).
- **NOT Gate (Inverter)**: $Y = \\bar{A}$ (Inverts input).
- **Universal Gates**: **NAND** $(\\overline{A \\cdot B})$ and **NOR** $(\\overline{A + B})$ can construct any logic circuit.
- **De Morgan's Laws**:
  1. $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$
  2. $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$`,
    contentTa: `### 1. எண் முறைகள் (Number Systems)
- **பதின்ம எண் முறை (Decimal)**: அடிமானம் 10 (எண்கள் $0$ முதல் $9$).
- **இருநிலை எண் முறை (Binary)**: அடிமானம் 2 (குறியீடுகள் $0, 1$). 1 பைட் (Byte) $= 8$ பிட்டுகள்.
- **எண்ம எண் முறை (Octal)**: அடிமானம் 8 (எண்கள் $0$ முதல் $7$).
- **பதினாறும எண் முறை (Hexadecimal)**: அடிமானம் 16 (எண்கள் $0-9$ மற்றும் எழுத்துக்கள் $A-F$).

### 2. எண் முறை மாற்றங்கள் & 2-ன் நிரப்பி
- **பதின்மத்தை இருநிலையாக்க**: 2-ஆல் தொடர் வகுத்தல் செய்து மீதிகளைக் கீழிருந்து மேலாக எழுதுதல்.
- **எதிர்மறை எண்களுக்கான 2-ன் நிரப்பி முறை (2's Complement)**:
  1. கொடுக்கப்பட்ட எண்ணின் நேர்மறை இருநிலை மதிப்பைக் கண்டறியவும்.
  2. அனைத்து பிட்டுகளையும் மாற்றி (1-ன் நிரப்பி) எடுக்கவும் ($0 \\rightarrow 1, 1 \\rightarrow 0$).
  3. அதனுடன் 1-ஐ கூட்டவும்.

### 3. எழுத்துரு குறியாக்க முறைகள்
- **ASCII**: 7-பிட் முறை ($128$ எழுத்துக்கள்). 'A' $= 65$, 'a' $= 97$.
- **ISCII**: இந்திய மொழிகளுக்கான 8-பிட் முறை.
- **Unicode**: உலகளாவிய மொழிகள் மற்றும் தமிழ் எழுத்துக்களைக் கையாளும் பொதுவான குறியீட்டு முறை.

### 4. பூலியன் தருக்க வாயில்கள் (Logic Gates)
- **AND வாயில்**: $Y = A \\cdot B$
- **OR வாயில்**: $Y = A + B$
- **NOT வாயில்**: $Y = \\bar{A}$
- **பொது வாயில்கள் (Universal Gates)**: NAND மற்றும் NOR வாயில்களைப் பயன்படுத்தி பிற அனைத்து வாயில்களையும் உருவாக்கலாம்.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch3: {
    id: 'note_c11_cs_ch3',
    chapterId: 'c11_cs_ch3',
    titleEn: 'Complete Revision Notes: Computer Organisation & Memory Hierarchy',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: கணினி அமைப்பு & நினைவக அடுக்கு',
    contentEn: `### 1. Computer Organisation vs Architecture
- **Computer Architecture**: Conceptual design and functional structure as seen by the programmer (instruction set, data addressing modes).
- **Computer Organisation**: Physical hardware realization and interconnection of operational units (bus width, clock circuits, memory interfaces).

### 2. The Microprocessor (நுண்செயலி)
The CPU built on a single Integrated Circuit silicon chip.
- **Characteristics of Microprocessors**:
  1. **Clock Speed**: Frequency of pulses generated by the quartz clock oscillator, measured in Hertz (MHz or GHz). Determines how many instructions the CPU can execute per second.
  2. **Instruction Set**: The machine language commands the processor is wired to recognize and execute (Data transfer, Arithmetic, Logical, Branching).
  3. **Word Size**: The number of bits the CPU can process or transfer in a single clock cycle (e.g., 32-bit or 64-bit processors).
- **Classification by Instruction Architecture**:
  - **RISC (Reduced Instruction Set Computer)**: Small, simple, highly optimized instruction set executing within a single cycle. Hardwired control, many registers. Examples: ARM, Apple Silicon (M1/M2/M3), AMD.
  - **CISC (Complex Instruction Set Computer)**: Large, rich instruction set with variable instruction lengths and multi-cycle execution. Microprogrammed control. Examples: Intel Core i3/i5/i7/i9.

### 3. Memory Hierarchy (நினைவக படிநிலை அமைப்பு)
Memory is arranged hierarchically based on access time, cost per bit, and capacity:
$$\\text{Registers} < \\text{Cache Memory (L1, L2, L3)} < \\text{Main Memory (RAM)} < \\text{Magnetic / Flash SSD} < \\text{Optical / Tape}$$
1. **CPU Registers**: Fastest and smallest ($32$ or $64$ bits per register), located inside the CPU core.
2. **Cache Memory**: Extremely fast static SRAM placed between CPU and RAM to store frequently accessed data.
   - **L1 Cache**: Built directly into CPU core (fastest, $32\\text{KB}-64\\text{KB}$).
   - **L2 & L3 Cache**: Larger, slightly slower, shared across CPU cores ($2\\text{MB}-64\\text{MB}$).
3. **Main Memory (RAM)**:
   - **SRAM (Static RAM)**: Uses flip-flops (transistor bi-stable circuits). Does not require periodic refresh, faster, costlier; used in cache.
   - **DRAM (Dynamic RAM)**: Uses capacitor-transistor pairs. Leaks charge and requires frequent memory refresh cycles; used as main system memory.
4. **ROM (Read Only Memory)**:
   - **PROM**: Programmable once by user using PROM burner.
   - **EPROM**: Erasable by exposing to ultraviolet (UV) light.
   - **EEPROM**: Electrically Erasable Programmable ROM (used in modern Flash memory and BIOS).

### 4. Secondary Storage Devices and Optical Media
- **Hard Disk Drive (HDD)**: Magnetic platters rotated by spindle motor; read/write heads read magnetized tracks and sectors.
- **Solid State Drive (SSD)**: Uses NAND flash memory chips. No moving parts, zero mechanical seek latency, extremely high transfer speeds ($500\\text{MB/s}$ to $7000\\text{MB/s}$).
- **Optical Discs**: CD ($700\\text{MB}$), DVD ($4.7\\text{GB}-8.5\\text{GB}$), Blu-ray ($25\\text{GB}-50\\text{GB}$ using $405\\text{nm}$ blue-violet laser).

### 5. Ports and Interfaces
- **USB (Universal Serial Bus)**: Connects keyboards, mice, flash drives. USB 3.0 supports up to $5\\text{Gbps}$.
- **HDMI (High-Definition Multimedia Interface)**: Carries uncompressed digital video and multi-channel audio on a single cable.
- **VGA (Video Graphics Array)**: Legacy 15-pin analog video connection.`,
    contentTa: `### 1. கணினி அமைப்பு மற்றும் நுண்செயலி
- **நுண்செயலியின் பண்புகள்**:
  1. **கடிகார வேகம் (Clock Speed)**: நுண்செயலியின் வேகம் மெகாஹெர்ட்ஸ் (MHz) அல்லது கிகாஹெர்ட்ஸ் (GHz)-ல் அளவிடப்படுகிறது.
  2. **கட்டளை அமைப்பு (Instruction Set)**: நுண்செயலி புரிந்து கொள்ளும் கட்டளைகளின் தொகுதி.
  3. **சொல் அளவு (Word Size)**: ஒரே நேரத்தில் செயலாக்கக்கூடிய பிட்டுகளின் எண்ணிக்கை (32-பிட், 64-பிட்).
- **வகைப்பாடு**:
  - **RISC**: எளிய, குறைந்த எண்ணிக்கையிலான கட்டளைகள் (उदा: ARM நுண்செயலிகள்).
  - **CISC**: சிக்கலான, விரிவான கட்டளைகள் (उदा: Intel x86).

### 2. நினைவக படிநிலை (Memory Hierarchy)
வேகம் மற்றும் விலை அடிப்படையில் நினைவகம் அடுக்கமைக்கப்பட்டுள்ளது:
1. **பதிவேடுகள் (Registers)**: CPU-ன் உள்ளே இருக்கும் அதிவேக நினைவகம்.
2. **இடைமாற்று நினைவகம் (Cache Memory)**: CPU மற்றும் முதன்மை நினைவகத்திற்கு இடையே செயல்படும் மிக வேகமான SRAM நினைவகம் (L1, L2, L3).
3. **முதன்மை நினைவகம் (RAM)**:
   - **SRAM**: நிலையானது, மின்சாரம் இருக்கும் வரை தரவை வைத்திருக்கும். புதுப்பிக்க தேவையில்லை.
   - **DRAM**: மின்தேக்கியில் தரவு சேமிக்கப்படுவதால் தொடர் புதுப்பித்தல் (Refresh) தேவைப்படும்.
4. **படிக்க மட்டும் நினைவகம் (ROM)**: PROM, EPROM (புற ஊதாக் கதிர்களால் அழிக்கப்படுவது), EEPROM (மின்சாரத்தால் அழிக்கப்படுவது).

### 3. இரண்டாம் நிலை சேமிப்பகங்கள் & இடைமுகங்கள்
- **SSD**: நகரும் பாகங்கள் இல்லாத அதிவேக NAND ஃப்ளாஷ் சேமிப்பகம்.
- **Blu-ray**: நீல-ஊதா லேசர் மூலம் $25\\text{GB}$ முதல் $50\\text{GB}$ வரை தரவைச் சேமிக்கும்.
- **HDMI**: உயர்தர டிஜிட்டல் ஒளி மற்றும் ஒலி சமிக்ஞைகளை ஒரே கேபிளில் கடத்துகிறது.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch4: {
    id: 'note_c11_cs_ch4',
    chapterId: 'c11_cs_ch4',
    titleEn: 'Complete Revision Notes: Theoretical Concepts of Operating System',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: இயக்க அமைப்பின் கோட்பாட்டுக் கருத்துக்கள்',
    contentEn: `### 1. Definition and Role of Operating System (இயக்க அமைப்பு)
An **Operating System (OS)** is a fundamental system software program that acts as an intermediary interface between the computer user and the underlying computer hardware.
- It hides the hardware complexities and provides an abstraction layer (Virtual Machine).
- **Core Objectives**:
  1. Make the computer system convenient and easy to use.
  2. Manage and allocate hardware resources efficiently and equitably.

### 2. Primary Functions of an Operating System
1. **Process Management (செயல் மேலாண்மை)**:
   - A process is a program in active execution.
   - The OS creates, schedules, synchronizes, and terminates processes.
   - **CPU Scheduling Algorithms**:
     - **FIFO (First In First Out)**: Processes dispatched in order of arrival (non-preemptive). Can cause the convoy effect.
     - **SJF (Shortest Job First)**: Process with the smallest burst time executed first (optimal average turnaround).
     - **Round Robin (RR)**: Time-shared system allocating a fixed small time slice (time quantum) cyclically.
     - **Priority Scheduling**: Highest priority process executes first.
2. **Memory Management (நினைவக மேலாண்மை)**:
   - Tracks every byte in primary memory (allocated vs free).
   - Manages swapping and **Virtual Memory** using **Paging** and **Segmentation**, allowing execution of programs larger than physical RAM.
3. **File Management (கோப்பு மேலாண்மை)**:
   - Manages hierarchical directories, files, permissions, and storage allocation tables (FAT32, NTFS, ext4).
4. **Device Management (I/O மேலாண்மை)**:
   - Coordinates peripheral hardware through specialized software modules called **Device Drivers**. Buffering and spooling (Simultaneous Peripheral Operations On-Line) prevent CPU idling.
5. **Security and Fault Tolerance**:
   - Enforces user authentication (passwords, biometrics), access control lists (ACLs), data integrity, and crash recovery.

### 3. Types of Operating Systems
- **Single-User Operating System**: Designed for a single user at any given time (e.g., MS-DOS).
- **Multi-User Operating System**: Allows multiple users to concurrently share CPU time and system resources via terminals (e.g., Linux, UNIX, Windows Server).
- **Time-Sharing OS**: Allocates rapid slices of CPU time among multiple interactive users so each perceives dedicated execution.
- **Distributed OS**: Coordinates a collection of independent networked computers, presenting them as a single unified computational facility.
- **Real-Time Operating System (RTOS)**: Guarantees strict deadline constraints for events where latency causes catastrophic failure (e.g., flight control, missile navigation, medical pacemakers).`,
    contentTa: `### 1. இயக்க அமைப்பின் வரையறை மற்றும் தேவைகள்
**இயக்க அமைப்பு (OS)** என்பது பயனர் மற்றும் கணினி வன்பொருளுக்கு இடையே ஒரு பாலமாகச் செயல்படும் அடிப்படை கணினி மென்பொருளாகும்.
- இது வன்பொருள் சாதனங்களை எளிதாகக் கையாளவும், கணினி வளங்களைச் சரியான முறையில் நிர்வகிக்கவும் உதவுகிறது.

### 2. இயக்க அமைப்பின் முக்கிய செயல்பாடுகள்
1. **செயல் மேலாண்மை (Process Management)**:
   - இயங்கிக் கொண்டிருக்கும் நிரலே 'செயல்' (Process) எனப்படும்.
   - CPU திட்டமிடல் நெறிமுறைகள்: FIFO (முதலில் வந்தது முதலில் செல்லும்), SJF (குறைந்த நேர வேலை முதலில்), Round Robin (சுழற்சி முறை ஒதுக்கீடு), முன்னுரிமை ஒதுக்கீடு (Priority).
2. **நினைவக மேலாண்மை (Memory Management)**:
   - முதன்மை நினைவகத்தின் பயன்பாட்டைக் கண்காணித்தல், பக்கமாக்கல் (Paging) மற்றும் மெய்நிகர் நினைவகம் (Virtual Memory) அமைத்தல்.
3. **கோப்பு மேலாண்மை (File Management)**:
   - கோப்புகள் மற்றும் கோப்புறைகளை (Directories) உருவாக்குதல், ஒழுங்கமைத்தல் (NTFS, FAT, ext4).
4. **சாதன மேலாண்மை (Device Management)**:
   - சாதன இயக்கிகள் (Device Drivers) மற்றும் ஸ்பூலிங் (Spooling) மூலம் உள்ளீடு/வெளியீட்டுச் சாதனங்களைக் கட்டுப்படுத்துதல்.

### 3. இயக்க அமைப்புகளின் வகைகள்
- **ஒற்றைப் பயனர் இயக்க அமைப்பு**: ஒரே நேரத்தில் ஒரு பயனர் மட்டுமே பயன்படுத்த முடியும் (उदा: MS-DOS).
- **பல பயனர் இயக்க அமைப்பு**: பல பயனர்கள் ஒரே நேரத்தில் தரவுகளையும் கணினியையும் பகிரலாம் (उदा: Linux, Unix, Windows Server).
- **நிகழ்நேர இயக்க அமைப்பு (RTOS)**: மிகக் குறுகிய காலக்கெடுவிற்குள் துல்லியமாக செயல்பட வேண்டிய அமைப்புகள் (விண்கல கட்டுப்பாடு, ரோபாட்டிக்ஸ்).`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch5: {
    id: 'note_c11_cs_ch5',
    chapterId: 'c11_cs_ch5',
    titleEn: 'Complete Revision Notes: Working with Windows and Linux OS',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: விண்டோஸ் மற்றும் லினக்ஸ் இயக்க அமைப்புகளின் செயல்முறை',
    contentEn: `### 1. Graphical User Interface (GUI) Concepts
A **GUI** uses visual interactive metaphors (windows, icons, menus, pointers - **WIMP**) allowing users to interact with operating systems effortlessly without memorizing command syntax.

### 2. Core Desktop Components in Microsoft Windows
- **Desktop**: The primary workspace screen displaying the wallpaper, desktop icons, and taskbar.
- **Icons**: Graphical representations of programs, files, folders, or physical drives:
  - *Application Icons*: Direct executables (e.g., Word, Chrome).
  - *Shortcut Icons*: Pointers referencing files in other paths (indicated by a curved arrow).
  - *Document Icons*: Files associated with specific applications.
  - *System Icons*: This PC, Recycle Bin, Network.
- **The Taskbar**: Horizontal strip at the bottom housing the Start Button, pinned applications, active task tabs, Notification Area (System Tray), clock, and network status.
- **Window Structure**:
  - Title Bar (contains Window Title, Minimize, Maximize/Restore, Close buttons).
  - Menu Bar / Ribbon (categorized command groupings).
  - Scroll Bars (Vertical and Horizontal navigation).
  - Status Bar (shows document metadata, zoom, page count).

### 3. File Management in Windows
- **Files**: Named storage containers on disk. Filename consists of two parts separated by a dot: \`filename.extension\` (e.g., \`report.docx\`, \`program.cpp\`).
- **Directories (Folders)**: Containers used to organize files hierarchically.
- **Path**: Absolute path (\`C:\\Users\\Student\\Documents\\file.txt\`) vs Relative path.

### 4. Open-Source Linux (Ubuntu Desktop & Terminal)
- **Linux Philosophy**: Developed by Linus Torvalds (1991), open source, multi-tasking, Unix-like kernel licensed under GNU General Public License (GPL).
- **Ubuntu Desktop**: Features the **Launcher** panel on the left containing favorite apps, Trash, and the **Dash** search tool.
- **Terminal Shell Commands**:
  - \`ls\`: List directory contents (\`ls -l\` for detailed permissions).
  - \`pwd\`: Print working directory.
  - \`cd\`: Change directory (\`cd ..\` moves one directory up; \`cd ~\` goes to home).
  - \`mkdir\`: Create new folder (\`mkdir test\`).
  - \`rmdir\` / \`rm -r\`: Remove directory.
  - \`cp\`: Copy files (\`cp source.txt dest.txt\`).
  - \`mv\`: Move or rename files.
  - \`rm\`: Delete files permanently.
  - \`cat\`: Display text file contents on terminal.
  - \`man\`: View manual page for any command.`,
    contentTa: `### 1. வரைைகலை பயனர் இடைமுகம் (GUI)
விண்டோஸ் மற்றும் நவீன லினக்ஸ் இயக்க அமைப்புகள் படங்கள், சின்னங்கள் (Icons), சாளரங்கள் (Windows) மற்றும் சுட்டி (Pointer) மூலம் பயனருடன் தொடர்பு கொள்கின்றன.

### 2. விண்டோஸ் இயக்க அமைப்பின் முக்கிய அம்சங்கள்
- **பணிப்பட்டை (Taskbar)**: திரையின் கீழ் பகுதியில் உள்ள பட்டை; இதில் தொடக்க பொத்தான் (Start Button), இயங்கும் பயன்பாடுகள் மற்றும் அறிவிப்புப் பகுதி (System Tray) இருக்கும்.
- **சின்னங்களின் வகைகள்**: பயன்பாட்டுச் சின்னங்கள், குறுக்குவழிச் சின்னங்கள் (Shortcuts), கோப்புச் சின்னங்கள், மற்றும் கணினிச் சின்னங்கள் (This PC, Recycle Bin).
- **சாளரத்தின் பாகங்கள்**: தலைப்புப் பட்டை (Title Bar), மெனு பட்டை (Menu Bar), உருளல் பட்டைகள் (Scroll Bars) மற்றும் நிலைப் பட்டை (Status Bar).

### 3. உபுண்டு லினக்ஸ் மற்றும் முனையக் கட்டளைகள் (Terminal Commands)
- லினக்ஸ் என்பது லினஸ் டோர்வால்ட்ஸ் என்பவரால் உருவாக்கப்பட்ட கட்டற்ற மற்றும் திறவூற்று (Open Source) இயக்க அமைப்பாகும்.
- **அடிப்படை முனையக் கட்டளைகள்**:
  - \`ls\`: கோப்புகள் மற்றும் கோப்புறைகளை பட்டியலிட.
  - \`pwd\`: தற்போதைய அடைவை அறிய (Print Working Directory).
  - \`cd\`: அடைவை மாற்ற (Change Directory).
  - \`mkdir\`: புதிய கோப்புறையை உருவாக்க.
  - \`rm\`: கோப்பை நீக்க.
  - \`cp\`: கோப்பை நகலெடுக்க (Copy).
  - \`mv\`: கோப்பை நகர்த்த அல்லது பெயர் மாற்ற (Move / Rename).
  - \`cat\`: கோப்பின் உள்ளடக்கத்தைப் பார்க்க.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch6: {
    id: 'note_c11_cs_ch6',
    chapterId: 'c11_cs_ch6',
    titleEn: 'Complete Revision Notes: Specification and Abstraction',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: குறிப்பீடு மற்றும் அருவமாக்கம்',
    contentEn: `### 1. Algorithmic Problem Solving
An **algorithm** is a step-by-step sequence of unambiguous instructions to solve a well-defined computational problem within finite time.
- **Key Characteristics**: Input, Output, Finiteness, Definiteness, Correctness, Effectiveness, Feasibility.

### 2. Algorithm Specification (நெறிமுறை குறிப்பீடு)
Specification establishes a contractual formal definition of what the algorithm accomplishes without dictating the internal execution steps.
- **Components of Specification**:
  1. **Name**: Identifies the algorithm.
  2. **Inputs**: The data values supplied to the algorithm with their types and constraints.
  3. **Outputs**: The computed result and its mathematical relation to the inputs.
- **Preconditions and Postconditions**:
  - **Precondition (\`-- inputs:\` or \`-- requires:\`)**: The properties that inputs must satisfy before algorithm execution begins.
  - **Postcondition (\`-- outputs:\` or \`-- returns:\`)**: The conditions and guarantees satisfied by the outputs upon termination.
- **Example Specification for Division**:
  \`\`\`
  divide (A, B)
  -- inputs: A is an integer, B is a non-zero integer (B != 0)
  -- outputs: q and r such that A = q * B + r and 0 <= r < |B|
  \`\`\`

### 3. Abstraction (அருவமாக்கம்)
Abstraction is the computational principle of hiding non-essential implementation details while exposing only the relevant, vital properties necessary for solving the problem.
- **State (நிலை)**: The condition of a computational process at any given instant, represented by the collective values of all its variables.
- **Variables**: Named memory locations holding values of defined types ($x, y, total$).
- **Assignment Statement**: Modifies the state of a variable.
  \`\`\`
  v := e
  \`\`\`
  Evaluates expression $e$ and stores the resulting value into variable $v$.
  - Example: If $x = 5$, executing $x := x + 1$ transitions the state to $x = 6$.
  - In simultaneous assignment: $x, y := y, x$ swaps values atomically without a temporary variable!`,
    contentTa: `### 1. நெறிமுறை மற்றும் சிக்கல் தீர்வு
**நெறிமுறை (Algorithm)** என்பது வரையறுக்கப்பட்ட உள்ளீடுகளைப் பெற்று, குறிப்பிட்ட படிநிலைகள் மூலம் தேவையான வெளியீட்டைத் தரும் முற்றுப்பெறும் கட்டளைகளின் தொகுப்பாகும்.

### 2. நெறிமுறை குறிப்பீடு (Specification)
ஒரு நெறிமுறையின் செயல்பாட்டை விவரிக்கும் அடிப்படை முறைமை ஆகும்:
- **நெறிமுறையின் பெயர்**: அதன் நோக்கத்தைக் குறிக்கும்.
- **உள்ளீடுகள் (Inputs / Preconditions)**: நெறிமுறைக்குத் தேவையான தரவுகள் மற்றும் நிபந்தனைகள் (\`-- inputs: \`).
- **வெளியீடுகள் (Outputs / Postconditions)**: நெறிமுறை நிறைவடையும் போது தர வேண்டிய முடிவுகள் மற்றும் உள்ளீட்டுடனான உறவு (\`-- outputs: \`).

### 3. அருவமாக்கம் (Abstraction)
அவசியமற்ற நுணுக்கங்களை மறைத்து, சிக்கலைத் தீர்ப்பதற்குத் தேவையான இன்றியமையாத பண்புகளை மட்டும் வெளிப்படுத்தும் உத்தி அருவமாக்கம் எனப்படும்.
- **நிலை (State)**: ஒரு குறிப்பிட்ட நேரத்தில் நெறிமுறையில் உள்ள அனைத்து மாறிகளின் மதிப்புகளின் தொகுப்பு.
- **மதிப்பிருத்தல் (Assignment)**: மாறிகளுக்குப் புதிய மதிப்பை ஒதுக்கி நிலையை மாற்றுதல்:
  $$v := e$$
  எடுத்துக்காட்டு: $x, y := y, x$ என்பது இரு மாறிகளின் மதிப்புகளை ஒன்றுக்கொன்று மாற்றும் ஒரே நேர மதிப்பிருத்தலாகும்.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch7: {
    id: 'note_c11_cs_ch7',
    chapterId: 'c11_cs_ch7',
    titleEn: 'Complete Revision Notes: Composition and Decomposition',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: ஒருங்கிணைப்பு மற்றும் சிதைவு',
    contentEn: `### 1. Composition of Statements (கூற்றுகளின் ஒருங்கிணைப்பு)
Algorithms are constructed by combining elementary statements into compound control structures:
1. **Sequential Control Flow (வரிசைமுறை)**: Statements are executed one after another in the exact linear lexical order they are written.
   \`\`\`
   S1
   S2
   S3
   \`\`\`
2. **Alternative / Conditional Control Flow (தேர்வு / மாற்று நெறிமுறை)**:
   Selects execution path based on the boolean truth value of a condition.
   - **Simple Alternative**:
     \`\`\`
     if C then
         S1
     else
         S2
     \`\`\`
     If condition $C$ is true, statement $S1$ is executed; otherwise statement $S2$ is executed.
   - **Case Analysis**: When condition spans multiple discrete outcomes:
     \`\`\`
     case expression of
         v1: S1
         v2: S2
         else: Sn
     \`\`\`
3. **Iterative Control Flow (சுழற்சி)**:
   Repeats a block of statements while a boolean condition remains true.

### 2. Decomposition (சிதைவு)
Decomposition is the process of breaking down a large, intricate problem into smaller, mutually independent, and manageable sub-problems (functions/procedures).
- **Refinement (படிப்படியான செப்பனிடுதல்)**: Starting at an abstract high level and progressively refining each sub-step into concrete algorithmic instructions.
- **Modularity**: Enables team collaboration, reusability of code modules, localized testing, and cleaner debugging.
- **Parameters**: Formal parameters in function header receive actual arguments passed from the calling environment.`,
    contentTa: `### 1. கூற்றுகளின் ஒருங்கிணைப்பு (Composition)
நெறிமுறைகள் மூன்று அடிப்படைக் கட்டுப்பாட்டு அமைப்புகளின் மூலம் கட்டமைக்கப்படுகின்றன:
1. **தொடர்முறை கூற்றுகள் (Sequential)**: கட்டளைகள் எழுதப்பட்ட வரிசையில் ஒன்றன்பின் ஒன்றாக ஒவ்வொன்றாக நிறைவேற்றப்படுகின்றன.
2. **மாற்று அல்லது நிபந்தனைக் கூற்றுகள் (Alternative / Conditional)**:
   - நிபந்தனை உண்மையாக (True) இருக்கும்போது ஒரு பகுதியையும், தவறாக (False) இருக்கும்போது மற்றொரு பகுதியையும் நிறைவேற்றும்:
     \`\`\`
     if C then
         S1
     else
         S2
     \`\`\`
3. **சுழற்சி கூற்றுகள் (Iterative)**: ஒரு குறிப்பிட்ட நிபந்தனை உண்மையாக இருக்கும் வரை கட்டளைத் தொகுதியை மீண்டும் மீண்டும் இயக்கும்.

### 2. சிதைவு (Decomposition)
ஒரு பெரிய மற்றும் சிக்கலான கணினி சிக்கலை பல சிறிய, எளிதில் தீர்க்கக்கூடிய துணைச் சிக்கல்களாகப் பிரிக்கும் உத்தி 'சிதைவு' எனப்படும்.
- **படிப்படியான செப்பனிடுதல் (Refinement)**: சிக்கலின் சுருக்கமான கண்ணோட்டத்திலிருந்து தொடங்கி, ஒவ்வொரு படியையும் விரிவான நெறிமுறையாக மாற்றுதல்.
- **கூறுநிலையாக்கம் (Modularity)**: நிரலை தனித்தனி தொகுதிகளாகப் பிரித்து மீண்டும் பயன்படுத்த வழிசெய்கிறது.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch8: {
    id: 'note_c11_cs_ch8',
    chapterId: 'c11_cs_ch8',
    titleEn: 'Complete Revision Notes: Iteration and Recursion',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: சுழற்சி மற்றும் தற்சுழற்சி',
    contentEn: `### 1. The Iteration Construct (சுழற்சி)
An iteration statement repeatedly executes a loop body as long as a loop condition is satisfied:
\`\`\`
while C do
    S
\`\`\`
- If condition $C$ evaluates to \`false\` initially, body $S$ is executed zero times.
- Loop condition must eventually evaluate to \`false\` to ensure **algorithm termination** (avoiding infinite loops).

### 2. Loop Invariants (சுழற்சியின் மாறாநிலை)
A **loop invariant** is an assertion relating the variables of a loop that remains **true before, during, and after each iteration of the loop**.
- **Three Verification Stages of a Loop Invariant**:
  1. **Initialization**: The invariant must be true before the very first iteration begins.
  2. **Maintenance**: If the invariant is true before an iteration and the loop condition holds, the invariant must remain true after executing the loop body.
  3. **Termination**: When the loop terminates (condition becomes false), the invariant combined with the negated loop condition establishes that the algorithm has computed the correct postcondition!

### 3. Recursion (தற்சுழற்சி)
Recursion is an algorithmic strategy where a function solves a problem by calling a copy of itself with smaller or simplified sub-instances of the same problem.
- **Two Indispensable Parts of Every Recursive Function**:
  1. **Base Case (அடிப்படை நிலை)**: A non-recursive terminating condition for which the answer is known or computed directly without further recursive calls.
  2. **Recursive Step (தற்சுழற்சிப் படி)**: Reduces the problem instance closer to the base case and invokes the function recursively.
- **Example: Factorial Computation $n!$**:
  $$factorial(n) = \\begin{cases} 1 & \\text{if } n = 0 \\text{ (Base case)} \\\\ n \\times factorial(n - 1) & \\text{if } n > 0 \\text{ (Recursive step)} \\end{cases}$$
- **Fibonacci Sequence**: $F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)$ for $n \\ge 2$.
- **Recursion vs Iteration**:
  - Any recursive function can be re-written iteratively.
  - Recursion utilizes system call stack frames, requiring extra memory ($O(n)$ stack space), whereas simple iteration uses $O(1)$ auxiliary space.`,
    contentTa: `### 1. சுழற்சி அமைப்பு (Iteration)
சுழற்சி என்பது ஒரு நிபந்தனை உண்மையாக இருக்கும் வரை ஒரு குறிப்பிட்ட கூற்றுத் தொகுதியைத் திரும்பத் திரும்ப இயக்கும் முறையாகும்.
\`\`\`
while C do
    S
\`\`\`
நிபந்தனை $C$ தவறாகும் போது சுழற்சி முடிவுக்கு வந்து நிரல் வெளியேறும்.

### 2. சுழற்சியின் மாறாநிலை (Loop Invariant)
சுழற்சி தொடங்குவதற்கு முன்பும், ஒவ்வொரு சுழற்சியின் முடிவிலும், சுழற்சி முடிவடைந்த பின்பும் மெய்யாகவே (True) இருக்கும் ஒரு கணிதக் கூற்று **சுழற்சியின் மாறாநிலை** எனப்படும்.
1. **துவக்கம் (Initialization)**: சுழற்சி தொடங்கும் முன் மாறாநிலை உண்மையாக இருத்தல் வேண்டும்.
2. **பராமரிப்பு (Maintenance)**: சுழற்சி உடற்பகுதி இயங்கிய பிறகும் மாறாநிலை மெய்யாக நீடிக்க வேண்டும்.
3. **முடிவுறுதல் (Termination)**: சுழற்சி முடிவடையும் போது விரும்பிய வெளியீட்டை மாறாநிலை உறுதி செய்கிறது.

### 3. தற்சுழற்சி (Recursion)
ஒரு செயற்கூறு தனக்குத்தானே மீண்டும் மீண்டும் அழைத்துக் கொள்ளும் நிரலாக்க உத்தி **தற்சுழற்சி** எனப்படும்.
- **அடிப்படை நிலை (Base Case)**: தற்சுழற்சி முடிவுக்கு வரும் எல்லை நிபந்தனை. இது இல்லையென்றால் நிரல் எல்லையற்ற அழைப்புகளில் (Stack Overflow) சிக்கிவிடும்.
- **தற்சுழற்சி படி (Recursive Step)**: சிக்கலை சிறிய அளவாகக் குறைத்து மீண்டும் அதே செயற்கூறை அழைத்தல்.
  - தொடர் பெருக்கல்: $n! = n \\times (n-1)!$; இங்கு $0! = 1$ என்பது அடிப்படை நிலையாகும்.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  },
  c11_cs_ch9: {
    id: 'note_c11_cs_ch9',
    chapterId: 'c11_cs_ch9',
    titleEn: 'Complete Revision Notes: Introduction to C++',
    titleTa: 'முழுமையான திருப்புதல் குறிப்புகள்: C++ ஓர் அறிமுகம்',
    contentEn: `### 1. Origin and Evolution of C++
**C++** was created by **Bjarne Stroustrup** at AT&T Bell Laboratories, New Jersey in **1979** as an extension of the C language. Originally named **"C with Classes"**, it was renamed **C++** in 1983 by Rick Mascitti (using the C increment operator \`++\` indicating advancement).
- C++ is a **hybrid / multi-paradigm language**: supports both Procedural and Object-Oriented Programming (OOP).

### 2. Lexical Tokens in C++ (அடையாளக் கூறுகள்)
A token is the smallest individual unit in a C++ program. C++ classifies tokens into 5 categories:
1. **Keywords (குறியீட்டுச் சொற்கள்)**: Reserved words with pre-assigned semantic meaning to the compiler. Cannot be used as identifier names (e.g., \`int\`, \`float\`, \`class\`, \`public\`, \`for\`, \`while\`, \`return\`, \`void\`).
2. **Identifiers (பெயரடையாளங்கள்)**: Programmer-defined names given to variables, functions, arrays, classes.
   - *Naming Rules*: Can contain letters ($a-z, A-Z$), digits ($0-9$), and underscore (\`_\`). Must begin with a letter or underscore, not a digit. Case sensitive (\`num\` != \`Num\`). Keywords cannot be used.
3. **Literals / Constants (நிலையான மதிப்புகள்)**:
   - *Integer Literals*: Decimal (\`123\`), Octal (leading zero \`014\`), Hexadecimal (leading \`0x\` or \`0X\`, e.g., \`0x2A\`).
   - *Floating Point Literals*: Fractional form (\`3.1415\`) or Exponent form (\`1.5e3\`).
   - *Character Literals*: Single character enclosed in single quotes (\`'A'\`, \`'\\n'\`).
   - *String Literals*: Sequence of characters enclosed in double quotes (\`"Samacheer"\`).
   - *Boolean Literals*: \`true\` and \`false\`.
4. **Operators (செயற்குறிகள்)**:
   - *Arithmetic*: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (modulus gives remainder for integers).
   - *Relational*: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
   - *Logical*: \`&&\` (AND), \`||\` (OR), \`!\` (NOT).
   - *Increment / Decrement*: \`++\` (adds 1), \`--\` (subtracts 1). Prefix (\`++x\`) vs Postfix (\`x++\`).
   - *Conditional / Ternary*: \`condition ? exp1 : exp2\`.
5. **Punctuators / Separators (நிறுத்தற்குறிகள்)**: \`;\` (semicolon terminates statement), \`,\` (comma), \`{}\` (block delimiter), \`()\` (function parameter/expression), \`[]\` (array index).

### 3. Fundamental Data Types in C++
- **Integral**: \`char\` (1 byte, $-128$ to $+127$), \`int\` (usually 4 bytes on 32/64-bit systems, $-2^{31}$ to $2^{31}-1$).
- **Floating-Point**: \`float\` (4 bytes, 7 digits precision), \`double\` (8 bytes, 15 digits precision).
- **Empty**: \`void\` (specifies no return value or generic pointer).
- **Type Modifiers**: \`signed\`, \`unsigned\`, \`short\`, \`long\`.

### 4. Basic Structure of a C++ Program
\`\`\`cpp
#include <iostream>  // Preprocessor directive for stream I/O
using namespace std; // Exposes standard library names

int main() {         // Execution begins here
    int a, b, sum;
    cout << "Enter two numbers: "; // Stream insertion operator <<
    cin >> a >> b;                 // Stream extraction operator >>
    sum = a + b;
    cout << "The Sum is: " << sum << endl;
    return 0;        // 0 indicates normal termination
}
\`\`\``,
    contentTa: `### 1. C++ மொழியின் தோற்றம்
**C++** மொழியானது **1979**-ஆம் ஆண்டு பெல் ஆய்வகத்தில் **ப்ஜார்னே ஸ்ட்ரூஸ்ட்ரப் (Bjarne Stroustrup)** என்பவரால் உருவாக்கப்பட்டது. தொடக்கத்தில் இது **"C with Classes"** என்று அழைக்கப்பட்டது; பின்னர் 1983-ல் **C++** எனப் பெயரிடப்பட்டது. இது செயல்முறை மற்றும் பொருள் நோக்கு (OOP) ஆகிய இரு பண்புகளையும் கொண்ட கலப்பின மொழியாகும்.

### 2. C++ மொழியின் அடையாளக் கூறுகள் (Tokens)
நிரலின் மிகச் சிறிய தனித்த அலகு அடையாளக் கூறு எனப்படும்:
1. **சிறப்புச் சொற்கள் (Keywords)**: மொழியால் முன்னரே வரையறுக்கப்பட்ட சொற்கள் (उदा: \`int\`, \`float\`, \`if\`, \`class\`, \`return\`). இவற்றை மாறிகளின் பெயர்களாகப் பயன்படுத்த முடியாது.
2. **பெயரடையாளங்கள் (Identifiers)**: மாறி, செயற்கூறு மற்றும் அணிகளுக்கு பயனர் சூட்டும் பெயர்கள். இவை எழுத்து அல்லது அடிக்கோட்டில் (\`_\`) தொடங்க வேண்டும்; எண்களில் தொடங்கக் கூடாது.
3. **நிலையான மதிப்புருக்கள் (Literals)**: முழு எண், தசம எண், எழுத்துரு (\`'A'\`), சர மதிப்பு (\`"Hello"\`), பூலியன் (\`true\`, \`false\`).
4. **செயற்குறிகள் (Operators)**:
   - கணிதச் செயற்குறிகள்: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (மீதி காண).
   - ஒப்பீட்டுச் செயற்குறிகள்: \`==\`, \`!=\`, \`<\`, \`>\`, \`<=\`, \`>=\`.
   - தருக்கச் செயற்குறிகள்: \`&&\`, \`||\`, \`!\`.
   - அதிகரிப்பு / குறைப்பு: \`++\`, \`--\`.
   - நிபந்தனைச் செயற்குறி: \`? :\`.
5. **நிறுத்தற்குறிகள் (Punctuators)**: \`;\`, \`,\`, \`{}\`, \`()\`.

### 3. அடிப்படைத் தரவினங்கள் (Data Types)
- \`char\`: எழுத்துருக்கள் (1 பைட்).
- \`int\`: முழு எண்கள் (4 பைட்டுகள்).
- \`float\`: தசம எண்கள் (4 பைட்டுகள்).
- \`double\`: இரட்டிப்புத் துல்லிய தசம எண்கள் (8 பைட்டுகள்).
- \`void\`: மதிப்பற்ற தரவினம்.`,
    author: 'State Board Computer Science Panel',
    verifiedDate: '2026-03-15',
    reviewerSignature: 'Verified by State Board Computer Science Scrutiny Committee'
  }
};

export const CLASS_11_CS_PART1_SUMMARIES: Record<string, SummaryItem> = {
  c11_cs_ch1: {
    id: 'sum_c11_cs_ch1',
    chapterId: 'c11_cs_ch1',
    keyPointsEn: [
      'A computer is an electronic data-processing machine operating on the Input-Process-Output (IPO) cycle.',
      'Six generations of computers evolved from vacuum tubes to transistors, integrated circuits, microprocessors (VLSI), AI (ULSI), and quantum/neural systems.',
      'Core hardware components comprise the Input Unit, CPU (ALU, Control Unit, Registers), Memory Unit (Primary RAM/ROM & Secondary Storage), and Output Unit.',
      'Booting loads the OS kernel into RAM: Cold Booting performs hardware POST from power-off; Warm Booting restarts without power-cycle/POST.'
    ],
    keyPointsTa: [
      'கணினி என்பது உள்ளீடு-செயலாக்கம்-வெளியீடு (IPO) சுழற்சியில் இயங்கும் ஒரு மின்னணு சாதனமாகும்.',
      'கணினியின் 6 தலைமுறைகள்: வெற்றிடக் குழாய்கள் $\\rightarrow$ டிரான்சிஸ்டர்கள் $\\rightarrow$ ஒருங்கிணைந்த சுற்றுகள் (IC) $\\rightarrow$ நுண்செயலி (VLSI) $\\rightarrow$ செயற்கை நுண்ணறிவு $\\rightarrow$ குவாண்டம் கணினி.',
      'முக்கிய பாகங்கள்: உள்ளீட்டகம், CPU (ALU, கட்டுப்பாட்டகம், பதிவேடுகள்), நினைவகம் மற்றும் வெளியீட்டகம்.',
      'துவங்குதல் (Booting): குளிர் துவக்கத்தில் POST சோதனை நடைபெறும்; சூடான துவக்கத்தில் POST நடைபெறாது.'
    ],
    formulaCheatSheet: [
      'IPO Cycle: Input -> Processing (ALU/CU) -> Output',
      '1 Byte = 8 bits, 1 Nibble = 4 bits, 1 KB = 1024 Bytes',
      'Booting Types: Cold Boot (Power On + POST) vs Warm Boot (Ctrl+Alt+Del, No POST)'
    ],
    simpleExplanationEn: 'A computer takes raw facts as input, processes them using mathematical and logical circuitry in the CPU, and delivers useful information. Generations progressed from room-sized vacuum tube giants to ultra-powerful microprocessors inside everyday laptops.',
    simpleExplanationTa: 'கணினி மூலத் தரவுகளைப் பெற்று, மையச் செயலகத்தின் கணித மற்றும் கட்டுப்பாட்டுப் பகுதிகள் வழியே முறைப்படுத்தி, திரையிலோ அல்லது அச்சிட்டோ பயனுள்ள தகவல்களாக வழங்குகிறது.'
  },
  c11_cs_ch2: {
    id: 'sum_c11_cs_ch2',
    chapterId: 'c11_cs_ch2',
    keyPointsEn: [
      'The four positional radixes are Decimal (10), Binary (2), Octal (8), and Hexadecimal (16).',
      'Binary-to-hexadecimal mapping groups bits into nibbles of 4 from right to left (integer part).',
      "Modern digital computers use 2's complement representation for signed integers: 2's Complement = 1's Complement + 1.",
      'Character encodings include 7-bit ASCII (128 characters), 8-bit ISCII for Indian scripts, and multi-byte Unicode for universal multilingual representation.',
      'Fundamental logic gates are AND, OR, and NOT; NAND and NOR are universal gates capable of fabricating all boolean expressions.'
    ],
    keyPointsTa: [
      'நான்கு முக்கிய எண் முறைகள்: பதின்மம் (10), இருநிலை (2), எண்மம் (8), மற்றும் பதினாறுமம் (16).',
      'இருநிலை எண்களை பதினாறுமமாக மாற்ற 4 பிட்டுகள் கொண்ட குழுக்களாகப் பிரிக்க வேண்டும்.',
      "கணினியில் எதிர்மறை எண்களைக் குறிக்க 2-ன் நிரப்பி முறை பயன்படுகிறது: 2's Complement = 1's Complement + 1.",
      'எழுத்துரு குறியாக்கங்கள்: ASCII (128 எழுத்துக்கள்), ISCII (இந்திய மொழிகள்) மற்றும் Unicode (உலகளாவிய மொழிகள்).',
      'அடிப்படை தருக்க வாயில்கள்: AND, OR, NOT; பொது வாயில்கள்: NAND மற்றும் NOR.'
    ],
    formulaCheatSheet: [
      "2's Complement = (1's Complement) + 1",
      'Radixes: Dec(10), Bin(2), Oct(8=2^3), Hex(16=2^4)',
      "De Morgan's 1: ~(A + B) = ~A . ~B",
      "De Morgan's 2: ~(A . B) = ~A + ~B"
    ],
    simpleExplanationEn: 'Computers understand only electrical ON/OFF pulses represented by 0 and 1. We use binary for circuits, octal/hex for human readability, 2s complement for negative arithmetic, and Unicode to render languages like Tamil correctly.',
    simpleExplanationTa: 'கணினி மின்சாரத்தின் இருப்பு (1) மற்றும் மின்சாரமின்மை (0) என்ற இருநிலை முறையில்தான் இயங்குகிறது. எண்களை பதின்மத்திலிருந்து இருநிலையாக மாற்றவும், பூலியன் வாயில்கள் மூலம் முடிவுகளை எடுக்கவும் எண் முறைகள் பயன்படுகின்றன.'
  },
  c11_cs_ch3: {
    id: 'sum_c11_cs_ch3',
    chapterId: 'c11_cs_ch3',
    keyPointsEn: [
      'Microprocessor speed is determined by Clock Speed (GHz), Word Size (32/64-bit), and Instruction Set Architecture (RISC vs CISC).',
      'Memory hierarchy balances speed and capacity: Registers (fastest) -> L1/L2/L3 Cache (SRAM) -> Main RAM (DRAM) -> Secondary SSD/HDD.',
      'SRAM uses transistor flip-flops without refresh; DRAM stores charge in capacitors requiring periodic refresh.',
      'Non-volatile ROM variants include PROM (one-time programmable), EPROM (UV-erasable), and EEPROM (electrically erasable).',
      'High-speed external connectivity relies on USB 3.0, HDMI (audio/video), and SATA/NVMe drive interfaces.'
    ],
    keyPointsTa: [
      'நுண்செயலியின் திறன் கடிகார வேகம் (GHz), சொல் அளவு (32/64-பிட்) மற்றும் கட்டளை அமைப்பால் (RISC/CISC) தீர்மானிக்கப்படுகிறது.',
      'நினைவக படிநிலை: பதிவேடுகள் $\\rightarrow$ Cache நினைவகம் (SRAM) $\\rightarrow$ முதன்மை RAM (DRAM) $\\rightarrow$ SSD/HDD.',
      'SRAM புதுப்பிக்க தேவையில்லை; DRAM மின்தேக்கியில் செயல்படுவதால் தொடர் புதுப்பித்தல் தேவை.',
      'ROM வகைகள்: PROM, EPROM (UV கதிர்களால் அழிக்கப்படும்) மற்றும் EEPROM (மின்சாரத்தால் அழிக்கப்படும்).',
      'இடைமுகங்கள்: USB, HDMI (ஒளி/ஒலி) மற்றும் SSD சேமிப்பகங்கள்.'
    ],
    formulaCheatSheet: [
      'Clock Speed: Frequency f = 1 / T (Measured in GHz)',
      'Memory Latency: Registers (<1ns) < L1 Cache (~1ns) < RAM (~10-50ns) < SSD (~100us) < HDD (~10ms)',
      'Storage: CD (700 MB) < DVD (4.7 GB) < Blu-ray (25-50 GB)'
    ],
    simpleExplanationEn: 'A computer stores immediately needed instructions right inside CPU registers and cache SRAM. Less urgent data waits in main RAM, while long-term files rest safely on high-capacity SSDs and hard disks.',
    simpleExplanationTa: 'நுண்செயலி தனக்குத் தேவையான தரவுகளை மிக அருகில் உள்ள கேச் (Cache) நினைவகத்தில் வைத்து அதிவேகமாக செயல்படுத்துகிறது; நிரந்தரக் கோப்புகள் SSD அல்லது வன்தட்டில் சேமிக்கப்படுகின்றன.'
  },
  c11_cs_ch4: {
    id: 'sum_c11_cs_ch4',
    chapterId: 'c11_cs_ch4',
    keyPointsEn: [
      'The Operating System manages hardware abstraction and coordinates system resources between user applications and the CPU.',
      'Process Management oversees program execution using scheduling algorithms: FIFO, SJF, Round Robin, and Priority Scheduling.',
      'Memory Management organizes primary RAM, handles dynamic allocation, and implements Virtual Memory using paging/segmentation.',
      'File systems (FAT32, NTFS, ext4) structure storage, directories, file read/write permissions, and metadata.',
      'OS paradigms range from Single-User (MS-DOS) and Multi-User (Linux) to Time-Sharing, Distributed, and Real-Time (RTOS) systems.'
    ],
    keyPointsTa: [
      'இயக்க அமைப்பு (OS) என்பது வன்பொருளுக்கும் பயனரின் பயன்பாட்டு மென்பொருட்களுக்கும் இடையே பாலமாக செயல்படும் அமைப்பு மென்பொருள்.',
      'செயல் மேலாண்மை: FIFO, SJF, Round Robin மற்றும் முன்னுரிமை அடிப்படையிலான CPU திட்டமிடல் நெறிமுறைகள்.',
      'நினைவக மேலாண்மை: முதன்மை நினைவக ஒதுக்கீடு, பக்கமாக்கல் (Paging) மற்றும் மெய்நிகர் நினைவகம் (Virtual Memory).',
      'கோப்பு மேலாண்மை: அடைவுகள் மற்றும் கோப்புகளைப் பாதுகாப்பாக சேமிக்கும் NTFS, FAT32 மற்றும் ext4 முறைகள்.',
      'இயக்க அமைப்பு வகைகள்: ஒற்றைப் பயனர், பல பயனர், பகிர்ந்தமைக்கப்பட்ட மற்றும் நிகழ்நேர இயக்க அமைப்புகள் (RTOS).'
    ],
    formulaCheatSheet: [
      'Turnaround Time = Completion Time - Arrival Time',
      'Waiting Time = Turnaround Time - Burst Time',
      'Virtual Memory = Physical RAM + Paging File Swap Space'
    ],
    simpleExplanationEn: 'The Operating System acts as the conductor of an orchestra. It decides which application gets CPU time, ensures memory does not overlap, saves files cleanly to disk, and protects the computer from crashes.',
    simpleExplanationTa: 'இயக்க அமைப்பு கணினியின் மேலாளரைப் போல செயல்படுகிறது; எந்த நிரல் எப்போது இயங்க வேண்டும், நினைவகத்தை எவ்வாறு பயன்படுத்த வேண்டும் என்பதை அதுவே திட்டமிடுகிறது.'
  },
  c11_cs_ch5: {
    id: 'sum_c11_cs_ch5',
    chapterId: 'c11_cs_ch5',
    keyPointsEn: [
      'Graphical User Interfaces rely on WIMP metaphors: Windows, Icons, Menus, and Pointers.',
      'Windows OS features the Desktop workspace, Taskbar (Start menu, system tray), and File Explorer for hierarchical navigation.',
      'Linux is a free, open-source Unix-like operating system kernel created by Linus Torvalds with GNU utilities.',
      'Ubuntu desktop incorporates the Launcher and Dash search, while its Terminal shell provides powerful commands like ls, pwd, cd, mkdir, cp, and rm.',
      'Files are uniquely designated by hierarchical directory path syntax (Absolute vs Relative).'
    ],
    keyPointsTa: [
      'GUI என்பது சாளரங்கள், சின்னங்கள், மெனுக்கள் மற்றும் சுட்டி (WIMP) மூலம் எளிதாக இயங்கும் சூழல்.',
      'விண்டோஸ் அமைப்பில் பணிப்பட்டை (Taskbar), கோப்பு மேலாளர் (File Explorer) மற்றும் தொடக்க மெனு முக்கிய கூறுகளாகும்.',
      'லினக்ஸ் என்பது லினஸ் டோர்வால்ட்ஸ் உருவாக்கிய திறவூற்று மற்றும் கட்டற்ற இயக்க அமைப்பாகும்.',
      'உபுண்டு டெஸ்க்டாப்பில் லாஞ்சர் மற்றும் முனையக் கட்டளைகள் (\`ls\`, \`cd\`, \`mkdir\`, \`cp\`, \`rm\`) முக்கிய பங்கு வகிக்கின்றன.',
      'முழுமையான பாதை (Absolute Path) மற்றும் தொடர்புப் பாதை (Relative Path) மூலம் கோப்புகள் அணுகப்படுகின்றன.'
    ],
    formulaCheatSheet: [
      'GUI Acronym: WIMP (Windows, Icons, Menus, Pointer)',
      'Linux Essential Commands: ls (list), pwd (current dir), cd (change dir), mkdir (new dir), rm (delete), cp (copy)'
    ],
    simpleExplanationEn: 'Modern operating systems like Windows and Ubuntu Linux provide intuitive graphical desktops with point-and-click mouse controls, while also offering robust command-line terminals for power users and programmers.',
    simpleExplanationTa: 'விண்டோஸ் மற்றும் உபுண்டு லினக்ஸ் ஆகியவை சுட்டி மூலம் எளிதாகப் பயன்படுத்தக்கூடிய வரைைகலை சூழலையும், புரோகிராமர்களுக்கான கட்டளை முனையத்தையும் (Terminal) வழங்குகின்றன.'
  },
  c11_cs_ch6: {
    id: 'sum_c11_cs_ch6',
    chapterId: 'c11_cs_ch6',
    keyPointsEn: [
      'An algorithm is a finite, unambiguous, step-by-step sequence of instructions designed to compute a solution.',
      'Specification establishes the algorithm interface: algorithm name, input variables with types and preconditions (-- inputs:), and output requirements (-- outputs:).',
      'Preconditions state input requirements before execution; postconditions state required output relationships upon termination.',
      'Abstraction suppresses irrelevant details to focus solely on essential problem-solving characteristics.',
      'State is captured by values of variables at an instant; assignment (v := e) alters state deterministically.'
    ],
    keyPointsTa: [
      'நெறிமுறை என்பது குறிப்பிட்ட படிநிலைகளில் ஒரு கணக்கீட்டு சிக்கலைத் தீர்க்கும் முற்றுப்பெறும் கட்டளைத் தொடராகும்.',
      'குறிப்பீடு (Specification) என்பது நெறிமுறையின் பெயர், உள்ளீட்டு நிபந்தனைகள் (\`-- inputs:\`) மற்றும் வெளியீட்டு பண்புகளை (\`-- outputs:\`) முறையாக வரையறுக்கிறது.',
      'அருவமாக்கம் என்பது தேவையற்ற விவரங்களை மறைத்து அத்தியாவசிய பண்புகளை மட்டும் வெளிப்படுத்தும் உத்தி.',
      'நிலை (State) என்பது ஒரு குறிப்பிட்ட நேரத்தில் உள்ள மாறிகளின் மதிப்புகளாகும்; மதிப்பிருத்தல் (\`v := e\`) நிலையை மாற்றுகிறது.'
    ],
    formulaCheatSheet: [
      'Specification: name (inputs) -> requires (precondition) -> returns (postcondition)',
      'State Transition: v := e updates the value of v to evaluated e',
      'Simultaneous Assignment: x, y := y, x swaps values without temp variable'
    ],
    simpleExplanationEn: 'Before coding, we specify what the algorithm requires as input and what it guarantees as output. By hiding unnecessary details through abstraction, we can reason clearly about state changes.',
    simpleExplanationTa: 'ஒரு சிக்கலைத் தீர்ப்பதற்கு முன் அதன் உள்ளீட்டுத் தேவைகளையும் வெளியீட்டு முடிவுகளையும் தெளிவாகக் குறிப்பீடு செய்து, தேவையற்ற நுணுக்கங்களை அருவமாக்குவதன் மூலம் எளிய நெறிமுறையை உருவாக்கலாம்.'
  },
  c11_cs_ch7: {
    id: 'sum_c11_cs_ch7',
    chapterId: 'c11_cs_ch7',
    keyPointsEn: [
      'Statements are composed into programs via Sequential, Alternative (conditional), and Iterative control flows.',
      'Alternative execution routes flow based on a boolean condition using if-then-else constructs or multi-way case statements.',
      'Decomposition divides large complex problems into smaller, self-contained, and manageable sub-problems.',
      'Stepwise refinement iteratively decomposes high-level conceptual operations into concrete lower-level instructions.',
      'Modular decomposition promotes code reusability, team division, localized testing, and defect isolation.'
    ],
    keyPointsTa: [
      'நெறிமுறை கூற்றுகள் தொடர்முறை (Sequential), மாற்றுமுறை (Alternative) மற்றும் சுழற்சிமுறை (Iterative) வழிகளில் ஒருங்கிணைக்கப்படுகின்றன.',
      'நிபந்தனைக் கூற்றுகள் (\`if-then-else\`) நிபந்தனையின் உண்மைத்தன்மைக்கு ஏற்ப வெவ்வேறு பாதைகளில் நிரலைச் செலுத்துகின்றன.',
      'சிதைவு (Decomposition) என்பது சிக்கலான பெரும் சிக்கலை சிறிய, எளிதில் கையாளக்கூடிய துணைப் பிரச்சனைகளாகப் பிரிப்பதாகும்.',
      'படிப்படியான செப்பனிடுதல் மூலம் மேலோட்டமான கருத்துக்கள் துல்லியமான கட்டளைகளாக மாற்றப்படுகின்றன.',
      'கூறுநிலையாக்கம் நிரலின் மறுபயன்பாட்டையும், பிழை திருத்தலையும் எளிதாக்குகிறது.'
    ],
    formulaCheatSheet: [
      'Alternative Structure: if C then S1 else S2',
      'Stepwise Refinement: High-level task -> Sub-tasks -> Atomic statements'
    ],
    simpleExplanationEn: 'Just like building a skyscraper brick by brick, programmers assemble sequential steps, decisions, and loops into complete software, while breaking enormous problems down into small reusable functions.',
    simpleExplanationTa: 'ஒரு பெரிய கட்டிடத்தை பகுதி பகுதியாகக் கட்டுவது போல, சிக்கலான மென்பொருள்களை பல எளிய செயல்பாடுகளாகப் பிரித்து ஒருங்கிணைப்பதே சிதைவு மற்றும் ஒருங்கிணைப்பு ஆகும்.'
  },
  c11_cs_ch8: {
    id: 'sum_c11_cs_ch8',
    chapterId: 'c11_cs_ch8',
    keyPointsEn: [
      'Iteration repeatedly executes a loop body while a guard condition evaluates to true.',
      'A loop invariant is a mathematical assertion that remains true before the loop, after each iteration, and upon loop termination.',
      'Loop verification requires establishing Initialization (holds before loop), Maintenance (preserved by loop body), and Termination (yields postcondition).',
      'Recursion solves a problem by having a function call itself on smaller sub-instances.',
      'Every recursive algorithm requires a terminating Base Case and a reducing Recursive Step to avoid infinite stack recursion.'
    ],
    keyPointsTa: [
      'ஒரு நிபந்தனை உண்மையாக இருக்கும் வரை சுழற்சி உடற்பகுதி மீண்டும் மீண்டும் நிறைவேற்றப்படுகிறது.',
      'சுழற்சியின் மாறாநிலை (Loop Invariant) என்பது சுழற்சி தொடங்கும் முன்பும், ஒவ்வொரு சுழற்சியிலும், சுழற்சி முடிந்த பின்பும் உண்மையாகவே நீடிக்கும் பண்பாகும்.',
      'மாறாநிலை சரிபார்த்தல்: துவக்கம் (Initialization), பராமரிப்பு (Maintenance) மற்றும் முடிவுறுதல் (Termination).',
      'தற்சுழற்சி (Recursion) என்பது ஒரு செயற்கூறு தனக்குத்தானே அழைத்துக் கொண்டு சிக்கலின் அளவைக் குறைப்பதாகும்.',
      'ஒவ்வொரு தற்சுழற்சிக்கும் ஒரு அடிப்படை நிலை (Base Case) மற்றும் தற்சுழற்சி படி (Recursive Step) கட்டாயம் தேவை.'
    ],
    formulaCheatSheet: [
      'Factorial Recursion: fact(n) = 1 if n=0; else n * fact(n-1)',
      'Loop Verification: Invariant holds at Initialization + Maintenance + Termination -> Correct Output'
    ],
    simpleExplanationEn: 'Loops repeat code efficiently while maintaining a steady invariant rule. Recursion takes a shortcut by solving the simplest base case first, and letting the function repeatedly reduce bigger tasks to that base case.',
    simpleExplanationTa: 'சுழற்சி என்பது ஒரே வேலையை மீண்டும் மீண்டும் செய்ய உதவுகிறது; தற்சுழற்சி என்பது தன்னைத்தானே அழைத்துக்கொண்டு பெரிய சிக்கல்களை எளிய அடிப்படை நிலைக்குக் கொண்டு சென்று தீர்க்கிறது.'
  },
  c11_cs_ch9: {
    id: 'sum_c11_cs_ch9',
    chapterId: 'c11_cs_ch9',
    keyPointsEn: [
      'C++ was developed in 1979 by Bjarne Stroustrup at Bell Labs as an extension of C providing Object-Oriented capabilities.',
      'C++ tokens consist of Keywords (reserved words), Identifiers (names), Literals (constants), Operators, and Punctuators (; , {}).',
      'Variables store data in memory, characterized by data types: int (4B), char (1B), float (4B), double (8B), and void.',
      'Operators encompass arithmetic (+ - * / %), relational (== != < > <= >=), logical (&& || !), and increment/decrement (++ --).',
      'Stream I/O uses cout << (insertion operator) for display and cin >> (extraction operator) for keyboard input via iostream.'
    ],
    keyPointsTa: [
      'C++ மொழியானது 1979-ல் பெல் ஆய்வகத்தில் பிஜார்னே ஸ்ட்ரூஸ்ட்ரப் என்பவரால் உருவாக்கப்பட்டது.',
      'C++ அடையாளக் கூறுகள்: சிறப்புச் சொற்கள் (Keywords), பெயரடையாளங்கள் (Identifiers), மாறிலிகள் (Literals), செயற்குறிகள் மற்றும் நிறுத்தற்குறிகள்.',
      'அடிப்படைத் தரவினங்கள்: \`int\` (4 பைட்டுகள்), \`char\` (1 பைட்), \`float\` (4 பைட்டுகள்), \`double\` (8 பைட்டுகள்) மற்றும் \`void\`.',
      'செயற்குறிகள்: கணிதக் குறியீடுகள், ஒப்பீட்டுக் குறியீடுகள், தருக்கக் குறியீடுகள் (\`&&\`, \`||\`, \`!\`) மற்றும் அதிகரிப்பு/குறைப்பு (\`++\`, \`--\`).',
      'உள்ளீடு மற்றும் வெளியீட்டிற்கு \`cin >>\` மற்றும் \`cout <<\` ஆகியவை \`<iostream>\` நூலகத்தின் மூலம் பயன்படுகின்றன.'
    ],
    formulaCheatSheet: [
      'cin >> variable; (Stream extraction from standard input)',
      'cout << expression; (Stream insertion to standard output)',
      'Sizes: char=1B, short=2B, int=4B, float=4B, double=8B'
    ],
    simpleExplanationEn: 'C++ is a powerhouse programming language blending fast hardware-level C control with modern object-oriented tools. Every program starts in main(), reads input with cin, and displays output with cout.',
    simpleExplanationTa: 'C++ என்பது மிக வேகமாகவும், அதே சமயம் நவீன பொருள் நோக்கு அம்சங்களுடனும் இயங்கும் ஒரு சக்திவாய்ந்த நிரலாக்க மொழியாகும். நிரல் \`main()\` பகுதியில் தொடங்கி \`cout\` மூலம் வெளியீட்டைத் தருகிறது.'
  }
};

export const CLASS_11_CS_PART1_QUIZZES: Record<string, ChapterQuiz> = {
  c11_cs_ch1: {
    id: 'quiz_c11_cs_ch1',
    chapterId: 'c11_cs_ch1',
    titleEn: 'Chapter 1 Mastery Quiz: Introduction to Computers',
    titleTa: 'பாடம் 1 பயிற்சி வினாடி-வினா: கணினி ஓர் அறிமுகம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which electronic component characterized the First Generation of computers?',
        questionTa: 'முதல் தலைமுறை கணினிகளில் பயன்படுத்தப்பட்ட முக்கிய மின்னணு சாதனம் எது?',
        optionsEn: ['Transistors', 'Vacuum Tubes', 'Integrated Circuits', 'Microprocessors'],
        optionsTa: ['டிரான்சிஸ்டர்கள்', 'வெற்றிடக் குழாய்கள்', 'ஒருங்கிணைந்த சுற்றுகள்', 'நுண்செயலிகள்'],
        correctAnswerIndex: 1,
        explanationEn: 'First-generation computers (1940-1956) like ENIAC used vacuum tubes for circuitry.',
        explanationTa: 'முதல் தலைமுறை கணினிகள் வெற்றிடக் குழாய்களைப் (Vacuum Tubes) பயன்படுத்தி இயங்கின.'
      },
      {
        id: 'q2',
        questionEn: 'Who is recognized as the Father of modern Computers?',
        questionTa: 'கணினியின் தந்தை என அழைக்கப்படுபவர் யார்?',
        optionsEn: ['Alan Turing', 'Charles Babbage', 'John von Neumann', 'Blaise Pascal'],
        optionsTa: ['ஆலன் டூரிங்', 'சார்லஸ் பாபேஜ்', 'ஜான் வான் நியூமன்', 'பிளேஸ் பாஸ்கல்'],
        correctAnswerIndex: 1,
        explanationEn: 'Charles Babbage designed the Analytical Engine in 1837, establishing the fundamental architectural concept of modern computers.',
        explanationTa: 'சார்லஸ் பாபேஜ் தனது பகுப்பாய்வு பொறி (Analytical Engine) மூலம் கணினியின் தந்தை எனப் போற்றப்படுகிறார்.'
      },
      {
        id: 'q3',
        questionEn: 'What hardware diagnostic routine runs automatically during Cold Booting?',
        questionTa: 'குளிர் துவக்கத்தின் போது தானாக இயங்கும் வன்பொருள் கண்டறியும் ஆய்வு எது?',
        optionsEn: ['BIOS Interrupt', 'POST (Power-On Self-Test)', 'RAM Cache Sweep', 'Kernel Swap'],
        optionsTa: ['BIOS இடைமறிப்பு', 'POST (Power-On Self-Test)', 'RAM கேச் சுத்தம்', 'கர்னல் ஸ்வாப்'],
        correctAnswerIndex: 1,
        explanationEn: 'POST tests whether all peripheral devices and memory are functioning properly upon powering on.',
        explanationTa: 'கணினி துவங்கும் போது வன்பொருட்களின் நிலையை சரிபார்க்க POST சோதனை தானாக இயங்குகிறது.'
      },
      {
        id: 'q4',
        questionEn: 'Which functional unit controls data transfers between memory and CPU registers?',
        questionTa: 'நினைவகம் மற்றும் CPU பதிவேடுகளுக்கு இடையே தரவுப் பரிமாற்றத்தை கட்டுப்படுத்தும் பகுதி எது?',
        optionsEn: ['Control Unit', 'ALU', 'Output Unit', 'ROM BIOS'],
        optionsTa: ['கட்டுப்பாட்டகம் (Control Unit)', 'ALU', 'வெளியீட்டகம்', 'ROM BIOS'],
        correctAnswerIndex: 0,
        explanationEn: 'The Control Unit orchestrates all timing and data communication signals across the entire system.',
        explanationTa: 'கட்டுப்பாட்டகம் (Control Unit) கணினியின் அனைத்து பாகங்களுக்கும் சைகைகளை அனுப்பி தரவுப் பரிமாற்றத்தை ஒழுங்குபடுத்துகிறது.'
      }
    ]
  },
  c11_cs_ch2: {
    id: 'quiz_c11_cs_ch2',
    chapterId: 'c11_cs_ch2',
    titleEn: 'Chapter 2 Mastery Quiz: Number Systems & Boolean Logic',
    titleTa: 'பாடம் 2 பயிற்சி வினாடி-வினா: எண் முறைகள் & பூலியன் தருக்கம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'What is the binary representation of decimal number 25?',
        questionTa: 'பதின்ம எண் 25-ன் இருநிலை மதிப்பு என்ன?',
        optionsEn: ['11001', '10101', '11100', '10011'],
        optionsTa: ['11001', '10101', '11100', '10011'],
        correctAnswerIndex: 0,
        explanationEn: '25 in binary is 16 + 8 + 1 = 11001 in base 2.',
        explanationTa: '25-ஐ 2-ஆல் தொடர் வகுத்தல் செய்யும்போது கிடைக்கும் இருநிலை எண் 11001 ஆகும்.'
      },
      {
        id: 'q2',
        questionEn: "How is a negative integer represented in standard modern CPUs using 2's complement?",
        questionTa: "நவீன கணினிகளில் 2's Complement முறையில் எதிர்மறை எண் எவ்வாறு பெறப்படுகிறது?",
        optionsEn: ["Inverting all bits and subtracting 1", "Adding 1 to the 1's Complement", "Reversing the binary string", "Multiplying by -1"],
        optionsTa: ["பிட்டுகளை மாற்றி 1-ஐ கழித்தல்", "1-ன் நிரப்பியுடன் 1-ஐ கூட்டுதல்", "இருநிலை சரத்தை திருப்பி எழுதுதல்", "-1 ஆல் பெருக்குதல்"],
        correctAnswerIndex: 1,
        explanationEn: "2's complement is derived by taking the 1's complement (inverting all bits) and adding 1.",
        explanationTa: "1-ன் நிரப்பியுடன் 1-ஐ கூட்டுவதன் மூலம் 2-ன் நிரப்பி பெறப்படுகிறது."
      },
      {
        id: 'q3',
        questionEn: 'Which of the following is known as a Universal Logic Gate?',
        questionTa: 'பின்வருவனவற்றுள் பொது தருக்க வாயில் (Universal Gate) எது?',
        optionsEn: ['AND', 'OR', 'NAND', 'XOR'],
        optionsTa: ['AND', 'OR', 'NAND', 'XOR'],
        correctAnswerIndex: 2,
        explanationEn: 'NAND and NOR gates are universal gates because any boolean logic function can be constructed purely from them.',
        explanationTa: 'NAND மற்றும் NOR வாயில்களைப் பயன்படுத்தி அனைத்து அடிப்படை வாயில்களையும் உருவாக்க முடிவதால் இவை பொது வாயில்கள் எனப்படும்.'
      },
      {
        id: 'q4',
        questionEn: 'What is the ASCII value of uppercase letter "A"?',
        questionTa: 'ஆங்கில பெரிய எழுத்து "A"-ன் ASCII மதிப்பு என்ன?',
        optionsEn: ['97', '65', '48', '128'],
        optionsTa: ['97', '65', '48', '128'],
        correctAnswerIndex: 1,
        explanationEn: 'ASCII code for uppercase "A" is 65 (lowercase "a" is 97, and "0" is 48).',
        explanationTa: '"A"-ன் ASCII மதிப்பு 65 ஆகும் (சிறிய "a" என்பது 97).'
      }
    ]
  },
  c11_cs_ch3: {
    id: 'quiz_c11_cs_ch3',
    chapterId: 'c11_cs_ch3',
    titleEn: 'Chapter 3 Mastery Quiz: Computer Organisation',
    titleTa: 'பாடம் 3 பயிற்சி வினாடி-வினா: கணினி அமைப்பு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which memory type operates the fastest in a computer system?',
        questionTa: 'கணினியில் மிக அதிவேகமாக செயல்படும் நினைவகம் எது?',
        optionsEn: ['DRAM', 'Hard Disk', 'CPU Registers', 'L3 Cache'],
        optionsTa: ['DRAM', 'வன்தட்டு (Hard Disk)', 'CPU பதிவேடுகள் (Registers)', 'L3 Cache'],
        correctAnswerIndex: 2,
        explanationEn: 'CPU registers sit directly inside the processor core and have access latencies under 1 nanosecond.',
        explanationTa: 'CPU பதிவேடுகள் (Registers) செயலகத்தின் உள்ளேயே இருப்பதால் மிகக் குறைந்த நேரத்தில் அணுகப்படும் அதிவேக நினைவகமாகும்.'
      },
      {
        id: 'q2',
        questionEn: 'Which type of ROM can have its contents erased by exposure to Ultraviolet (UV) light?',
        questionTa: 'புற ஊதாக் கதிர்களைப் (UV) பாய்ச்சி உள்ளடக்கத்தை அழிக்கக்கூடிய ROM எது?',
        optionsEn: ['PROM', 'EPROM', 'EEPROM', 'Flash ROM'],
        optionsTa: ['PROM', 'EPROM', 'EEPROM', 'Flash ROM'],
        correctAnswerIndex: 1,
        explanationEn: 'EPROM (Erasable Programmable ROM) is erased by exposure to strong UV light through a quartz window.',
        explanationTa: 'EPROM என்பது புற ஊதாக் கதிர்களைப் பயன்படுத்தி அழிக்கப்படும் படிக்க மட்டும் நினைவகமாகும்.'
      },
      {
        id: 'q3',
        questionEn: 'What does RISC stand for in microprocessor architecture?',
        questionTa: 'நுண்செயலி அமைப்பில் RISC என்பதன் விரிவாக்கம் என்ன?',
        optionsEn: ['Rapid Instruction System Computer', 'Reduced Instruction Set Computer', 'Real-time Instruction Semiconductor Circuit', 'Random Instruction Sequence Core'],
        optionsTa: ['Rapid Instruction System Computer', 'Reduced Instruction Set Computer', 'Real-time Instruction Semiconductor Circuit', 'Random Instruction Sequence Core'],
        correctAnswerIndex: 1,
        explanationEn: 'RISC stands for Reduced Instruction Set Computer, designed for fast execution of a small set of simple instructions.',
        explanationTa: 'RISC என்பது Reduced Instruction Set Computer என்பதைக் குறிக்கும்.'
      },
      {
        id: 'q4',
        questionEn: 'What is the standard storage capacity of a single-layer Blu-ray disc?',
        questionTa: 'ஒற்றை அடுக்கு புளூ-ரே (Blu-ray) வட்டின் சேமிப்பளவு என்ன?',
        optionsEn: ['700 MB', '4.7 GB', '25 GB', '128 GB'],
        optionsTa: ['700 MB', '4.7 GB', '25 GB', '128 GB'],
        correctAnswerIndex: 2,
        explanationEn: 'A single-layer Blu-ray disc holds 25 GB of data using a 405 nm blue-violet laser.',
        explanationTa: 'புளூ-ரே வட்டு ஒற்றை அடுக்கில் 25 GB வரை தரவுகளைச் சேமிக்கும் திறன் கொண்டது.'
      }
    ]
  },
  c11_cs_ch4: {
    id: 'quiz_c11_cs_ch4',
    chapterId: 'c11_cs_ch4',
    titleEn: 'Chapter 4 Mastery Quiz: Operating System Concepts',
    titleTa: 'பாடம் 4 பயிற்சி வினாடி-வினா: இயக்க அமைப்பின் கோட்பாட்டுக் கருத்துக்கள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which CPU scheduling algorithm assigns a fixed time slice (quantum) cyclically to each process?',
        questionTa: 'ஒவ்வொரு செயலுக்கும் ஒரு குறிப்பிட்ட கால அளவைச் (Time Slice) சுழற்சி முறையில் வழங்கும் CPU திட்டமிடல் நெறிமுறை எது?',
        optionsEn: ['FIFO', 'SJF', 'Round Robin', 'Priority Scheduling'],
        optionsTa: ['FIFO', 'SJF', 'Round Robin', 'முன்னுரிமை திட்டமிடல்'],
        correctAnswerIndex: 2,
        explanationEn: 'Round Robin allocates a fixed time quantum to each runnable process in cyclic order.',
        explanationTa: 'Round Robin என்பது குறிப்பிட்ட கால அளவை சுழற்சி முறையில் அனைத்து செயல்களுக்கும் சமமாகப் பகிர்ந்தளிக்கும் நெறிமுறையாகும்.'
      },
      {
        id: 'q2',
        questionEn: 'What technique allows execution of programs larger than the physical RAM size?',
        questionTa: 'இயற்பியல் RAM-ஐ விடப் பெரிய நிரல்களை இயக்க உதவும் தொழில்நுட்பம் எது?',
        optionsEn: ['Cache Invalidation', 'Virtual Memory', 'DMA Pipelining', 'Flash Spooling'],
        optionsTa: ['கேச் நீக்கம்', 'மெய்நிகர் நினைவகம் (Virtual Memory)', 'DMA பைப்லைனிங்', 'ஃபிளாஷ் ஸ்பூலிங்'],
        correctAnswerIndex: 1,
        explanationEn: 'Virtual memory combines RAM and secondary storage (swap/paging file) to simulate larger continuous main memory.',
        explanationTa: 'மெய்நிகர் நினைவகம் (Virtual Memory) வன்தட்டின் ஒரு பகுதியை தற்காலிக நினைவகமாகப் பயன்படுத்தி பெரிய நிரல்களை இயக்குகிறது.'
      }
    ]
  },
  c11_cs_ch5: {
    id: 'quiz_c11_cs_ch5',
    chapterId: 'c11_cs_ch5',
    titleEn: 'Chapter 5 Mastery Quiz: Windows and Linux OS',
    titleTa: 'பாடம் 5 பயிற்சி வினாடி-வினா: விண்டோஸ் மற்றும் லினக்ஸ் இயக்க அமைப்புகள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which Linux shell command prints the full path of the current working directory?',
        questionTa: 'லினக்ஸ் முனையத்தில் தற்போதைய பணி அடைவின் முழுப் பாதையைக் காட்டும் கட்டளை எது?',
        optionsEn: ['ls', 'dir', 'pwd', 'cd'],
        optionsTa: ['ls', 'dir', 'pwd', 'cd'],
        correctAnswerIndex: 2,
        explanationEn: 'pwd stands for "print working directory".',
        explanationTa: 'pwd (print working directory) கட்டளை தற்போதைய அடைவின் முழுப் பாதையைத் திரையிடும்.'
      },
      {
        id: 'q2',
        questionEn: 'Who developed the Linux operating system kernel in 1991?',
        questionTa: '1991-ல் லினக்ஸ் இயக்க அமைப்பின் கர்னலை உருவாக்கியவர் யார்?',
        optionsEn: ['Richard Stallman', 'Linus Torvalds', 'Dennis Ritchie', 'Ken Thompson'],
        optionsTa: ['ரிச்சர்ட் ஸ்டால்மேன்', 'லினஸ் டோர்வால்ட்ஸ்', 'டென்னிஸ் ரிட்சி', 'கென் தாம்சன்'],
        correctAnswerIndex: 1,
        explanationEn: 'Linus Torvalds created the Linux kernel while studying at the University of Helsinki in 1991.',
        explanationTa: 'லினஸ் டோர்வால்ட்ஸ் (Linus Torvalds) என்பவர் 1991-ல் லினக்ஸ் கர்னலை உருவாக்கினார்.'
      }
    ]
  },
  c11_cs_ch6: {
    id: 'quiz_c11_cs_ch6',
    chapterId: 'c11_cs_ch6',
    titleEn: 'Chapter 6 Mastery Quiz: Specification and Abstraction',
    titleTa: 'பாடம் 6 பயிற்சி வினாடி-வினா: குறிப்பீடு மற்றும் அருவமாக்கம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'In algorithm specification, what defines the properties that inputs must satisfy before execution?',
        questionTa: 'நெறிமுறை குறிப்பீட்டில் உள்ளீடுகள் பூர்த்தி செய்ய வேண்டிய முந்தைய நிபந்தனைகள் எவ்வாறு அழைக்கப்படுகின்றன?',
        optionsEn: ['Postconditions', 'Preconditions', 'Invariants', 'Parameters'],
        optionsTa: ['பின்நிபந்தனை', 'முன்நிபந்தனை (Precondition)', 'மாறாநிலைகள்', 'அளவுருக்கள்'],
        correctAnswerIndex: 1,
        explanationEn: 'Preconditions specify the properties that input data must meet before starting algorithm execution.',
        explanationTa: 'நெறிமுறை தொடங்குவதற்கு முன் உள்ளீடுகள் பூர்த்தி செய்ய வேண்டிய நிபந்தனைகள் முன்நிபந்தனை (Precondition) எனப்படும்.'
      },
      {
        id: 'q2',
        questionEn: 'If initially x = 3 and y = 7, what are the values after executing "x, y := y, x"?',
        questionTa: 'தொடக்கத்தில் x = 3 மற்றும் y = 7 எனில், "x, y := y, x" இயங்கிய பின் அவற்றின் மதிப்புகள் என்ன?',
        optionsEn: ['x = 3, y = 3', 'x = 7, y = 7', 'x = 7, y = 3', 'x = 10, y = 4'],
        optionsTa: ['x = 3, y = 3', 'x = 7, y = 7', 'x = 7, y = 3', 'x = 10, y = 4'],
        correctAnswerIndex: 2,
        explanationEn: 'Simultaneous assignment evaluates all right-hand expressions before assigning, swapping values atomically to x = 7, y = 3.',
        explanationTa: 'ஒரே நேர மதிப்பிருத்தல் x மற்றும் y-ன் மதிப்புகளை ஒன்றுக்கொன்று மாற்றி x = 7, y = 3 என அமைக்கிறது.'
      }
    ]
  },
  c11_cs_ch7: {
    id: 'quiz_c11_cs_ch7',
    chapterId: 'c11_cs_ch7',
    titleEn: 'Chapter 7 Mastery Quiz: Composition and Decomposition',
    titleTa: 'பாடம் 7 பயிற்சி வினாடி-வினா: ஒருங்கிணைப்பு மற்றும் சிதைவு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Breaking a complex algorithmic problem into smaller manageable sub-problems is called:',
        questionTa: 'ஒரு பெரிய சிக்கலை பல சிறிய துணைப் பிரச்சனைகளாகப் பிரிக்கும் முறை:',
        optionsEn: ['Composition', 'Decomposition', 'Iteration', 'Encapsulation'],
        optionsTa: ['ஒருங்கிணைப்பு', 'சிதைவு (Decomposition)', 'சுழற்சி', 'உறைபொதியாக்கம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Decomposition breaks large problems into smaller, independent, and modular parts.',
        explanationTa: 'சிக்கலை எளிதில் கையாளக்கூடிய துணைப் பிரச்சனைகளாகப் பிரிப்பது சிதைவு (Decomposition) எனப்படும்.'
      }
    ]
  },
  c11_cs_ch8: {
    id: 'quiz_c11_cs_ch8',
    chapterId: 'c11_cs_ch8',
    titleEn: 'Chapter 8 Mastery Quiz: Iteration and Recursion',
    titleTa: 'பாடம் 8 பயிற்சி வினாடி-வினா: சுழற்சி மற்றும் தற்சுழற்சி',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'A condition that remains true before, during, and after each loop iteration is called a:',
        questionTa: 'சுழற்சி தொடங்கும் முன்பும், ஒவ்வொரு சுழற்சியின் போதும், சுழற்சி முடிந்த பின்பும் உண்மையாகவே நீடிக்கும் கூற்று:',
        optionsEn: ['Loop Guard', 'Loop Invariant', 'Base Condition', 'Recursion Tree'],
        optionsTa: ['சுழற்சி காவல்', 'சுழற்சியின் மாறாநிலை (Loop Invariant)', 'அடிப்படை நிலை', 'தற்சுழற்சி மரம்'],
        correctAnswerIndex: 1,
        explanationEn: 'A loop invariant is an assertion about loop variables that is maintained consistently across all iterations.',
        explanationTa: 'சுழற்சியின் மாறாநிலை (Loop Invariant) என்பது சுழற்சியின் அனைத்து நிலைகளிலும் மெய்யாக இருக்கும் கூற்றாகும்.'
      },
      {
        id: 'q2',
        questionEn: 'What essential component stops a recursive function from calling itself indefinitely?',
        questionTa: 'தற்சுழற்சி செயற்கூறு எல்லையற்ற அழைப்புகளில் சிக்காமல் முடிவுக்கு வர உதவும் முக்கிய கூறு எது?',
        optionsEn: ['Recursive Step', 'Base Case', 'Loop Invariant', 'Global Variable'],
        optionsTa: ['தற்சுழற்சி படி', 'அடிப்படை நிலை (Base Case)', 'சுழற்சி மாறாநிலை', 'பொது மாறி'],
        correctAnswerIndex: 1,
        explanationEn: 'The base case provides a direct answer without recursive calls, safely terminating the recursion.',
        explanationTa: 'அடிப்படை நிலை (Base Case) தற்சுழற்சியை நிறுத்தி முடிவை அளிக்கும் எல்லையாகும்.'
      }
    ]
  },
  c11_cs_ch9: {
    id: 'quiz_c11_cs_ch9',
    chapterId: 'c11_cs_ch9',
    titleEn: 'Chapter 9 Mastery Quiz: Introduction to C++',
    titleTa: 'பாடம் 9 பயிற்சி வினாடி-வினா: C++ ஓர் அறிமுகம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Who invented C++ at Bell Laboratories in 1979?',
        questionTa: '1979-ல் பெல் ஆய்வகத்தில் C++ மொழியை உருவாக்கியவர் யார்?',
        optionsEn: ['Dennis Ritchie', 'Bjarne Stroustrup', 'James Gosling', 'Guido van Rossum'],
        optionsTa: ['டென்னிஸ் ரிட்சி', 'பிஜார்னே ஸ்ட்ரூஸ்ட்ரப்', 'ஜேம்ஸ் கோஸ்லிங்', 'கைடோ வான் ரோசம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Bjarne Stroustrup developed C++ (initially called C with Classes) at AT&T Bell Labs in 1979.',
        explanationTa: 'பிஜார்னே ஸ்ட்ரூஸ்ட்ரப் (Bjarne Stroustrup) C++ மொழியை உருவாக்கினார்.'
      },
      {
        id: 'q2',
        questionEn: 'Which C++ operator is called the Stream Insertion Operator?',
        questionTa: 'C++ மொழியில் செருக்கல் செயற்குறி (Stream Insertion Operator) எது?',
        optionsEn: ['>>', '<<', '::', '->'],
        optionsTa: ['>>', '<<', '::', '->'],
        correctAnswerIndex: 1,
        explanationEn: '<< is the stream insertion operator used with cout to display output.',
        explanationTa: '<< என்பது \`cout\` உடன் பயன்படும் செருக்கல் செயற்குறியாகும் (Insertion Operator).'
      },
      {
        id: 'q3',
        questionEn: 'What is the memory size typically allocated for a standard float data type in C++?',
        questionTa: 'C++ மொழியில் standard \`float\` தரவினத்திற்கு ஒதுக்கப்படும் நினைவக அளவு என்ன?',
        optionsEn: ['1 Byte', '2 Bytes', '4 Bytes', '8 Bytes'],
        optionsTa: ['1 பைட்', '2 பைட்டுகள்', '4 பைட்டுகள்', '8 பைட்டுகள்'],
        correctAnswerIndex: 2,
        explanationEn: 'A standard float takes 4 bytes (32 bits) and provides roughly 7 decimal digits of precision.',
        explanationTa: '\`float\` தரவினத்திற்கு 4 பைட்டுகள் (32 பிட்டுகள்) நினைவகம் ஒதுக்கப்படுகிறது.'
      }
    ]
  }
};

export const CLASS_11_CS_PART1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_cs_ch1: {
    id: 'diag_c11_cs_ch1',
    chapterId: 'c11_cs_ch1',
    titleEn: 'Functional Architecture of Computer: CPU, Memory, and I/O Buses',
    titleTa: 'கணினியின் கட்டமைப்பு: மையச் செயலகம், நினைவகம் மற்றும் பாட்டைகள்',
    descriptionEn: 'Schematic illustrating the IPO cycle, Control Unit, ALU, Internal Registers, Primary/Secondary Memory, and Control/Data Buses.',
    descriptionTa: 'கணினியின் செயல்பாட்டு தொகுதிகள்: உள்ளீடு, CPU (ALU, பதிவேடுகள், கட்டுப்பாட்டகம்), நினைவகம் மற்றும் வெளியீட்டகம்.',
    svgContent: `<svg viewBox="0 0 800 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#312e81" />
      <stop offset="100%" stop-color="#1e1b4b" />
    </linearGradient>
    <linearGradient id="unitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#0369a1" />
    </linearGradient>
    <linearGradient id="memGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#047857" />
    </linearGradient>
  </defs>
  <rect width="800" height="500" fill="#0f172a" rx="16" />
  <text x="400" y="38" text-anchor="middle" fill="#38bdf8" font-size="20" font-weight="bold">FUNCTIONAL BLOCK DIAGRAM OF A COMPUTER SYSTEM</text>
  <text x="400" y="60" text-anchor="middle" fill="#94a3b8" font-size="13">கணினியின் கட்டமைப்பு: உள்ளீட்டகம், CPU, நினைவகம், வெளியீட்டகம்</text>

  <!-- Input Unit -->
  <rect x="40" y="160" width="140" height="180" rx="12" fill="url(#unitGrad)" stroke="#38bdf8" stroke-width="2" />
  <text x="110" y="210" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">INPUT UNIT</text>
  <text x="110" y="235" text-anchor="middle" fill="#bae6fd" font-size="14">உள்ளீட்டகம்</text>
  <text x="110" y="270" text-anchor="middle" fill="#f0f9ff" font-size="12">Keyboard, Mouse</text>
  <text x="110" y="290" text-anchor="middle" fill="#f0f9ff" font-size="12">Scanner, Barcode</text>

  <!-- CPU Container -->
  <rect x="250" y="100" width="300" height="280" rx="16" fill="url(#cpuGrad)" stroke="#818cf8" stroke-width="3" />
  <text x="400" y="132" text-anchor="middle" fill="#a5b4fc" font-size="17" font-weight="bold">CENTRAL PROCESSING UNIT (CPU)</text>
  <text x="400" y="152" text-anchor="middle" fill="#c7d2fe" font-size="13">மையச் செயலகம்</text>

  <!-- Control Unit -->
  <rect x="270" y="170" width="260" height="55" rx="8" fill="#4338ca" stroke="#c7d2fe" stroke-width="1.5" />
  <text x="400" y="196" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">CONTROL UNIT (கட்டுப்பாட்டகம்)</text>
  <text x="400" y="214" text-anchor="middle" fill="#e0e7ff" font-size="11">Decodes instructions &amp; synchronizes signals</text>

  <!-- ALU -->
  <rect x="270" y="240" width="260" height="55" rx="8" fill="#4338ca" stroke="#c7d2fe" stroke-width="1.5" />
  <text x="400" y="266" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">ALU (கணித &amp; தருக்கச் செயலகம்)</text>
  <text x="400" y="284" text-anchor="middle" fill="#e0e7ff" font-size="11">Arithmetic &amp; Boolean Logic Operations</text>

  <!-- Internal Registers -->
  <rect x="270" y="310" width="260" height="55" rx="8" fill="#3730a3" stroke="#c7d2fe" stroke-width="1.5" />
  <text x="400" y="336" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">INTERNAL REGISTERS (பதிவேடுகள்)</text>
  <text x="400" y="354" text-anchor="middle" fill="#e0e7ff" font-size="11">High-speed accumulator &amp; instruction cache</text>

  <!-- Output Unit -->
  <rect x="620" y="160" width="140" height="180" rx="12" fill="url(#unitGrad)" stroke="#38bdf8" stroke-width="2" />
  <text x="690" y="210" text-anchor="middle" fill="#ffffff" font-size="16" font-weight="bold">OUTPUT UNIT</text>
  <text x="690" y="235" text-anchor="middle" fill="#bae6fd" font-size="14">வெளியீட்டகம்</text>
  <text x="690" y="270" text-anchor="middle" fill="#f0f9ff" font-size="12">Monitor, Printer</text>
  <text x="690" y="290" text-anchor="middle" fill="#f0f9ff" font-size="12">Plotter, Audio</text>

  <!-- Memory Unit -->
  <rect x="250" y="410" width="300" height="65" rx="12" fill="url(#memGrad)" stroke="#34d399" stroke-width="2" />
  <text x="400" y="438" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">MAIN MEMORY UNIT (RAM / ROM)</text>
  <text x="400" y="458" text-anchor="middle" fill="#d1fae5" font-size="12">முதன்மை நினைவகம் &amp; இரண்டாம் நிலை சேமிப்பகம் (SSD/HDD)</text>

  <!-- Arrows -->
  <path d="M 180 250 L 250 250" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrow)" fill="none" />
  <path d="M 550 250 L 620 250" stroke="#38bdf8" stroke-width="4" marker-end="url(#arrow)" fill="none" />
  <path d="M 400 380 L 400 410" stroke="#34d399" stroke-width="4" fill="none" />
  <path d="M 400 410 L 400 380" stroke="#34d399" stroke-width="4" fill="none" />
  <text x="215" y="240" fill="#38bdf8" font-size="11" font-weight="bold">DATA</text>
  <text x="585" y="240" fill="#38bdf8" font-size="11" font-weight="bold">INFO</text>
</svg>`
  },
  c11_cs_ch2: {
    id: 'diag_c11_cs_ch2',
    chapterId: 'c11_cs_ch2',
    titleEn: 'Digital Logic Gates and Number System Hierarchy',
    titleTa: 'டிஜிட்டல் தருக்க வாயில்கள் & எண் முறை மாற்றங்கள்',
    descriptionEn: 'Comparison of fundamental gates (AND, OR, NOT) and Universal NAND/NOR gates with truth tables.',
    descriptionTa: 'அடிப்படை வாயில்கள் (AND, OR, NOT) மற்றும் பொது வாயில்கள் (NAND, NOR) விளக்கப்படம்.',
    svgContent: `<svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0b132b" rx="16" />
  <text x="400" y="35" text-anchor="middle" fill="#48cae4" font-size="20" font-weight="bold">BOOLEAN LOGIC GATES &amp; TRUTH STRUCTURES</text>
  
  <!-- AND Gate -->
  <g transform="translate(60, 70)">
    <rect width="200" height="150" rx="10" fill="#1c2541" stroke="#48cae4" stroke-width="1.5" />
    <text x="100" y="25" text-anchor="middle" fill="#ffffff" font-weight="bold">AND GATE (Y = A . B)</text>
    <path d="M 40 50 L 80 50 M 40 80 L 80 80" stroke="#90e0ef" stroke-width="3" />
    <path d="M 80 40 L 100 40 A 30 30 0 0 1 100 100 L 80 100 Z" fill="#3a86ff" stroke="#ffffff" stroke-width="2" />
    <path d="M 130 70 L 165 70" stroke="#90e0ef" stroke-width="3" />
    <text x="100" y="130" text-anchor="middle" fill="#caf0f8" font-size="12">1 only when all inputs are 1</text>
  </g>

  <!-- OR Gate -->
  <g transform="translate(300, 70)">
    <rect width="200" height="150" rx="10" fill="#1c2541" stroke="#48cae4" stroke-width="1.5" />
    <text x="100" y="25" text-anchor="middle" fill="#ffffff" font-weight="bold">OR GATE (Y = A + B)</text>
    <path d="M 40 50 L 75 50 M 40 80 L 75 80" stroke="#90e0ef" stroke-width="3" />
    <path d="M 70 40 Q 90 70 70 100 Q 110 100 130 70 Q 110 40 70 40 Z" fill="#8338ec" stroke="#ffffff" stroke-width="2" />
    <path d="M 130 70 L 165 70" stroke="#90e0ef" stroke-width="3" />
    <text x="100" y="130" text-anchor="middle" fill="#caf0f8" font-size="12">1 when at least one input is 1</text>
  </g>

  <!-- NOT Gate -->
  <g transform="translate(540, 70)">
    <rect width="200" height="150" rx="10" fill="#1c2541" stroke="#48cae4" stroke-width="1.5" />
    <text x="100" y="25" text-anchor="middle" fill="#ffffff" font-weight="bold">NOT GATE (Y = ~A)</text>
    <path d="M 50 70 L 80 70" stroke="#90e0ef" stroke-width="3" />
    <polygon points="80,45 125,70 80,95" fill="#ff006e" stroke="#ffffff" stroke-width="2" />
    <circle cx="130" cy="70" r="5" fill="#ffffff" stroke="#ff006e" stroke-width="2" />
    <path d="M 135 70 L 165 70" stroke="#90e0ef" stroke-width="3" />
    <text x="100" y="130" text-anchor="middle" fill="#caf0f8" font-size="12">Inverts binary state</text>
  </g>

  <!-- Number Systems Radix Box -->
  <g transform="translate(60, 250)">
    <rect width="680" height="170" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <text x="340" y="30" text-anchor="middle" fill="#38bdf8" font-size="16" font-weight="bold">RADIX CONVERSION MATRIX (எண் முறை தொடர்பு)</text>
    <text x="80" y="65" fill="#f8fafc" font-size="13" font-weight="bold">Decimal (Base 10): 0 to 9</text>
    <text x="80" y="90" fill="#cbd5e1" font-size="12">Human counting system</text>
    
    <text x="400" y="65" fill="#f8fafc" font-size="13" font-weight="bold">Binary (Base 2): 0, 1</text>
    <text x="400" y="90" fill="#cbd5e1" font-size="12">Digital hardware logic</text>
    
    <text x="80" y="125" fill="#f8fafc" font-size="13" font-weight="bold">Octal (Base 8): 0 to 7 (3 bits)</text>
    <text x="80" y="145" fill="#cbd5e1" font-size="12">(7)_8 = (111)_2</text>
    
    <text x="400" y="125" fill="#f8fafc" font-size="13" font-weight="bold">Hexadecimal (Base 16): 0-9, A-F (4 bits)</text>
    <text x="400" y="145" fill="#cbd5e1" font-size="12">(F)_16 = (1111)_2 = 15</text>
  </g>
</svg>`
  },
  c11_cs_ch3: {
    id: 'diag_c11_cs_ch3',
    chapterId: 'c11_cs_ch3',
    titleEn: 'Computer Memory Hierarchy Pyramid',
    titleTa: 'கணினி நினைவக படிநிலை கூம்பு வரைபடம்',
    descriptionEn: 'Hierarchical pyramid displaying access speeds, per-bit cost, and capacity from CPU registers down to optical secondary storage.',
    descriptionTa: 'வேகம் மற்றும் திறன் அடிப்படையிலான நினைவக படிநிலை கூம்பு படம்.',
    svgContent: `<svg viewBox="0 0 800 450" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="450" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">COMPUTER MEMORY HIERARCHY (நினைவக படிநிலை)</text>

  <!-- Pyramid Levels -->
  <!-- Level 1: Registers -->
  <polygon points="400,60 330,120 470,120" fill="#ef4444" stroke="#ffffff" stroke-width="2" />
  <text x="400" y="100" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">CPU Registers (&lt;1 ns)</text>

  <!-- Level 2: Cache SRAM -->
  <polygon points="330,120 470,120 520,190 280,190" fill="#f97316" stroke="#ffffff" stroke-width="2" />
  <text x="400" y="155" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Cache Memory (L1, L2, L3 SRAM)</text>
  <text x="400" y="173" text-anchor="middle" fill="#fff7ed" font-size="11">Latency: 1 - 10 ns</text>

  <!-- Level 3: Main Memory RAM -->
  <polygon points="280,190 520,190 570,270 230,270" fill="#eab308" stroke="#ffffff" stroke-width="2" />
  <text x="400" y="225" text-anchor="middle" fill="#000000" font-size="14" font-weight="bold">Main Memory (DRAM RAM / ROM)</text>
  <text x="400" y="245" text-anchor="middle" fill="#422006" font-size="11">Capacity: 8 GB - 64 GB | Latency: 50 ns</text>

  <!-- Level 4: Secondary Flash SSD & HDD -->
  <polygon points="230,270 570,270 620,350 180,350" fill="#10b981" stroke="#ffffff" stroke-width="2" />
  <text x="400" y="305" text-anchor="middle" fill="#ffffff" font-size="14" font-weight="bold">Secondary Storage: NVMe SSD / Hard Disk</text>
  <text x="400" y="325" text-anchor="middle" fill="#ecfdf5" font-size="11">Capacity: 512 GB - 4 TB | Latency: 100 us - 10 ms</text>

  <!-- Level 5: Tertiary / Archival Optical -->
  <polygon points="180,350 620,350 670,410 130,410" fill="#06b6d4" stroke="#ffffff" stroke-width="2" />
  <text x="400" y="380" text-anchor="middle" fill="#ffffff" font-size="13" font-weight="bold">Optical / Offline Backup (Blu-ray, Cloud Storage)</text>

  <!-- Side Indicator Arrows -->
  <line x1="80" y1="400" x2="80" y2="80" stroke="#f43f5e" stroke-width="4" />
  <text x="45" y="240" fill="#f43f5e" font-size="13" font-weight="bold" transform="rotate(-90 45 240)">ACCESS SPEED &amp; COST INCREASES</text>

  <line x1="720" y1="80" x2="720" y2="400" stroke="#34d399" stroke-width="4" />
  <text x="755" y="240" fill="#34d399" font-size="13" font-weight="bold" transform="rotate(90 755 240)">STORAGE CAPACITY INCREASES</text>
</svg>`
  },
  c11_cs_ch4: {
    id: 'diag_c11_cs_ch4',
    chapterId: 'c11_cs_ch4',
    titleEn: 'Operating System Core Responsibilities & Layers',
    titleTa: 'இயக்க அமைப்பின் அடுக்குகள் மற்றும் பொறுப்புகள்',
    descriptionEn: 'Block diagram depicting User Application -> OS Kernel Services -> Hardware Device drivers and physical architecture.',
    descriptionTa: 'பயனர், இயக்க அமைப்பு மற்றும் கணினி வன்பொருள் இடையேயான தொடர்பு அடுக்குகள்.',
    svgContent: `<svg viewBox="0 0 800 400" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="400" fill="#111827" rx="16" />
  <text x="400" y="30" text-anchor="middle" fill="#60a5fa" font-size="18" font-weight="bold">OPERATING SYSTEM ARCHITECTURE LAYERS</text>
  
  <rect x="150" y="55" width="500" height="50" rx="8" fill="#3b82f6" stroke="#93c5fd" stroke-width="2" />
  <text x="400" y="85" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">USER APPLICATION PROGRAMS (பயன்பாட்டு மென்பொருட்கள்)</text>

  <rect x="150" y="125" width="500" height="150" rx="12" fill="#1e3a8a" stroke="#60a5fa" stroke-width="2.5" />
  <text x="400" y="150" text-anchor="middle" fill="#93c5fd" font-size="15" font-weight="bold">OPERATING SYSTEM (KERNEL SERVICES)</text>

  <rect x="180" y="170" width="200" height="40" rx="6" fill="#1d4ed8" />
  <text x="280" y="195" text-anchor="middle" fill="#ffffff" font-size="12">Process Management</text>

  <rect x="420" y="170" width="200" height="40" rx="6" fill="#1d4ed8" />
  <text x="520" y="195" text-anchor="middle" fill="#ffffff" font-size="12">Memory Management</text>

  <rect x="180" y="220" width="200" height="40" rx="6" fill="#1d4ed8" />
  <text x="280" y="245" text-anchor="middle" fill="#ffffff" font-size="12">File System &amp; I/O</text>

  <rect x="420" y="220" width="200" height="40" rx="6" fill="#1d4ed8" />
  <text x="520" y="245" text-anchor="middle" fill="#ffffff" font-size="12">Security &amp; Device Drivers</text>

  <rect x="150" y="295" width="500" height="65" rx="8" fill="#047857" stroke="#34d399" stroke-width="2" />
  <text x="400" y="325" text-anchor="middle" fill="#ffffff" font-size="15" font-weight="bold">COMPUTER HARDWARE (கணினி வன்பொருள்)</text>
  <text x="400" y="345" text-anchor="middle" fill="#a7f3d0" font-size="12">CPU, RAM, Hard Disk, SSD, Network, Peripherals</text>
</svg>`
  }
};

export const CLASS_11_CS_PART1_VIDEOS: Record<string, VideoExplainer> = {
  c11_cs_ch1: {
    id: 'vid_c11_cs_ch1',
    chapterId: 'c11_cs_ch1',
    titleEn: 'Animated Explainer: How Computers Think (The IPO Cycle & Booting)',
    titleTa: 'இயங்குபடம்: கணினியின் சிந்தனை முறை (IPO சுழற்சி & துவங்குதல்)',
    durationMinutes: 9,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Data vs Information: The Raw to Refined Transition',
        titleTa: 'தரவு vs தகவல்: மூலப்பொருள் முதல் முடிவு வரை',
        visualDescriptionEn: 'Animation showing unorganized numbers like 85, 92 entering the input hopper, getting organized by CPU gears, and outputting an organized report card.',
        narrationEn: 'Data is raw unorganized facts. Once the Central Processing Unit processes and contextualizes it, it transforms into meaningful information.',
        narrationTa: 'தரவு என்பது மூல உண்மை; மையச் செயலகம் அதனை முறைப்படுத்தி முடிவுகளைத் தரும்போது அது பயனுள்ள தகவலாக மாறுகிறது.',
        keyTakeaway: 'Data + Processing = Information'
      },
      {
        sceneNumber: 2,
        titleEn: 'Inside the CPU Core: ALU and Control Unit',
        titleTa: 'மையச் செயலகத்தின் உள்ளே: ALU மற்றும் கட்டுப்பாட்டகம்',
        visualDescriptionEn: 'Zooming inside the silicon chip: clock pulses trigger the Control Unit, dispatching operands into ALU logic gates.',
        narrationEn: 'The Control Unit directs traffic like a traffic policeman, while the Arithmetic Logic Unit computes mathematical and Boolean logic decisions at gigahertz speeds.',
        narrationTa: 'கட்டுப்பாட்டகம் போக்குவரத்து காவலர் போல செயல்படுகிறது; கணித தருக்கச் செயலகம் நொடிக்கு பல கோடி கணக்கீடுகளைச் செய்கிறது.',
        keyTakeaway: 'ALU computes, Control Unit directs.'
      }
    ]
  },
  c11_cs_ch2: {
    id: 'vid_c11_cs_ch2',
    chapterId: 'c11_cs_ch2',
    titleEn: "Animated Explainer: Binary Secrets and 2's Complement",
    titleTa: 'இயங்குபடம்: இருநிலை எண்கள் மற்றும் 2-ன் நிரப்பி முறை',
    durationMinutes: 10,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: "Why Computers Use 2's Complement",
        titleTa: "கணினி ஏன் 2's Complement முறையைப் பயன்படுத்துகிறது?",
        visualDescriptionEn: 'Animated registers showing binary bits flipping from 0 to 1 and an adder circuit adding 1 to execute subtraction using addition.',
        narrationEn: "2's complement allows digital computers to perform subtraction using simple addition hardware, avoiding duplicate zero representations.",
        narrationTa: "2-ன் நிரப்பி முறை கூட்டல் சுற்றுகளைக் கொண்டே கழித்தல் கணக்கீடுகளையும் எளிய முறையில் செய்ய உதவுகிறது.",
        keyTakeaway: "2's Complement = 1's Complement + 1"
      }
    ]
  },
  c11_cs_ch9: {
    id: 'vid_c11_cs_ch9',
    chapterId: 'c11_cs_ch9',
    titleEn: 'Animated Explainer: First Steps in C++ Programming',
    titleTa: 'இயங்குபடம்: C++ நிரலாக்கத்தின் முதல் படிகள்',
    durationMinutes: 11,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Tokens: The Atomic Bricks of C++',
        titleTa: 'அடையாளக் கூறுகள்: C++ மொழியின் அடிப்படை அணுக்கள்',
        visualDescriptionEn: 'Animated blocks showing keywords, identifiers, literals, and operators snapping together to form a valid C++ statement.',
        narrationEn: 'Just as letters form sentences, C++ uses keywords, identifiers, literals, operators, and punctuators to assemble executable code.',
        narrationTa: 'எழுத்துக்கள் சொற்களாவதைப் போல, C++ சிறப்புச் சொற்கள், மாறிகள் மற்றும் செயற்குறிகள் இணைந்து நிரல் கட்டளைகளை உருவாக்குகின்றன.',
        keyTakeaway: 'Every statement ends with a semicolon.'
      }
    ]
  }
};
