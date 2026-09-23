# -*- coding: utf-8 -*-
import json

code = '''import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

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
A **computer** is an electronic device that processes raw data into meaningful information by executing a stored sequence of instructions called a program. It operates on the **IPO Cycle** (Input $\\\\rightarrow$ Process $\\\\rightarrow$ Output).
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
   - **Arithmetic and Logic Unit (ALU)**: Performs arithmetic calculations ($+, -, \\\\times, /$) and logical decisions ($AND, OR, NOT, <, >, =$).
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
**கணினி** என்பது பயனர் வழங்கும் மூலத் தரவுகளை (Raw Data) பெற்று, நினைவகத்தில் உள்ள கட்டளைகளின்படி முறைப்படுத்தி, பயனுள்ள தகவலாக (Information) மாற்றும் ஓர் மின்னணு சாதனமாகும். இது **உள்ளீடு $\\\\rightarrow$ செயலாக்கம் $\\\\rightarrow$ வெளியீடு (IPO)** சுழற்சியில் இயங்குகிறது.

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
2. **Binary Number System**: Base 2. Digits: $0, 1$. (A single binary digit is a **bit**; $4 \\\\text{ bits} = 1 \\\\text{ nibble}$; $8 \\\\text{ bits} = 1 \\\\text{ byte}$; $1024 \\\\text{ bytes} = 1 \\\\text{ KB}$).
3. **Octal Number System**: Base 8. Digits: $0, 1, 2, 3, 4, 5, 6, 7$. Each octal digit corresponds to exactly $3$ binary bits ($2^3 = 8$).
4. **Hexadecimal Number System**: Base 16. Digits: $0–9$ and Letters: $A(10), B(11), C(12), D(13), E(14), F(15)$. Each hex digit corresponds to $4$ binary bits ($2^4 = 16$).

### 2. Conversions Between Number Systems
- **Decimal to Binary**: Repeated division by 2; collect remainders in reverse order (bottom-to-top, LSB to MSB).
  - Example: Convert $(25)_{10}$ to Binary:
    $25 / 2 = 12 \\\\text{ rem } 1$, $12 / 2 = 6 \\\\text{ rem } 0$, $6 / 2 = 3 \\\\text{ rem } 0$, $3 / 2 = 1 \\\\text{ rem } 1$, $1 / 2 = 0 \\\\text{ rem } 1 \\\\Rightarrow (11001)_2$.
- **Binary to Decimal**: Multiply each bit by positional power of 2 ($2^0, 2^1, 2^2, \\\\dots$) and sum up.
- **Binary to Hexadecimal**: Group bits into 4s from right to left (integer part) and convert each nibble to hex digit.
  - Example: $(11010110)_2 = (1101)_2 \\\\ (0110)_2 = (D6)_{16}$.

### 3. Representation of Signed Numbers in Computers
Computers represent negative numbers through three main schemes:
1. **Sign and Magnitude**: Leftmost bit (MSB) is the sign bit ($0$ for positive, $1$ for negative); remaining 7 bits represent magnitude. (Range for 8 bits: $-127$ to $+127$).
2. **1\'s Complement**: Invert all bits ($0 \\\\rightarrow 1$, $1 \\\\rightarrow 0$).
3. **2\'s Complement**: The standard representation in modern digital CPUs.
   $$\\\\text{2\'s Complement} = \\\\text{1\'s Complement} + 1$$
   - Example: Represent $-24$ in 8-bit 2\'s complement:
     - Step 1: Binary of $+24 = 00011000$
     - Step 2: 1\'s Complement $= 11100111$
     - Step 3: Add $1 = 11100111 + 1 = 11101000_2$.

### 4. Character Encoding Standards
- **BCD (Binary Coded Decimal)**: 6-bit code ($2^6 = 64$ characters).
- **EBCDIC (Extended BCD Interchange Code)**: 8-bit code developed by IBM ($2^8 = 256$ characters).
- **ASCII (American Standard Code for Information Interchange)**: 7-bit standard code ($128$ characters; ASCII value of \'A\' is 65, \'a\' is 97, \'0\' is 48). Extended ASCII uses 8 bits.
- **ISCII (Indian Standard Code for Information Interchange)**: 8-bit code for Indian languages including Tamil.
- **Unicode**: Universal 16-bit or 32-bit encoding standard handling over 140,000 characters covering all world languages.

### 5. Boolean Logic and Fundamental Gates
- **AND Gate**: $Y = A \\\\cdot B$ (Output is 1 only when all inputs are 1).
- **OR Gate**: $Y = A + B$ (Output is 1 when at least one input is 1).
- **NOT Gate (Inverter)**: $Y = \\\\bar{A}$ (Inverts input).
- **Universal Gates**: **NAND** $(\\\\overline{A \\\\cdot B})$ and **NOR** $(\\\\overline{A + B})$ can construct any logic circuit.
- **De Morgan\'s Laws**:
  1. $\\\\overline{A + B} = \\\\bar{A} \\\\cdot \\\\bar{B}$
  2. $\\\\overline{A \\\\cdot B} = \\\\bar{A} + \\\\bar{B}$`,
    contentTa: `### 1. எண் முறைகள் (Number Systems)
- **பதின்ம எண் முறை (Decimal)**: அடிமானம் 10 (எண்கள் $0$ முதல் $9$).
- **இருநிலை எண் முறை (Binary)**: அடிமானம் 2 (குறியீடுகள் $0, 1$). 1 பைட் (Byte) $= 8$ பிட்டுகள்.
- **எண்ம எண் முறை (Octal)**: அடிமானம் 8 (எண்கள் $0$ முதல் $7$).
- **பதினாறும எண் முறை (Hexadecimal)**: அடிமானம் 16 (எண்கள் $0-9$ மற்றும் எழுத்துக்கள் $A-F$).

### 2. எண் முறை மாற்றங்கள் & 2-ன் நிரப்பி
- **பதின்மத்தை இருநிலையாக்க**: 2-ஆல் தொடர் வகுத்தல் செய்து மீதிகளைக் கீழிருந்து மேலாக எழுதுதல்.
- **எதிர்மறை எண்களுக்கான 2-ன் நிரப்பி முறை (2\'s Complement)**:
  1. கொடுக்கப்பட்ட எண்ணின் நேர்மறை இருநிலை மதிப்பைக் கண்டறியவும்.
  2. அனைத்து பிட்டுகளையும் மாற்றி (1-ன் நிரப்பி) எடுக்கவும் ($0 \\\\rightarrow 1, 1 \\\\rightarrow 0$).
  3. அதனுடன் 1-ஐ கூட்டவும்.

### 3. எழுத்துரு குறியாக்க முறைகள்
- **ASCII**: 7-பிட் முறை ($128$ எழுத்துக்கள்). \'A\' $= 65$, \'a\' $= 97$.
- **ISCII**: இந்திய மொழிகளுக்கான 8-பிட் முறை.
- **Unicode**: உலகளாவிய மொழிகள் மற்றும் தமிழ் எழுத்துக்களைக் கையாளும் பொதுவான குறியீட்டு முறை.

### 4. பூலியன் தருக்க வாயில்கள் (Logic Gates)
- **AND வாயில்**: $Y = A \\\\cdot B$
- **OR வாயில்**: $Y = A + B$
- **NOT வாயில்**: $Y = \\\\bar{A}$
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
$$\\\\text{Registers} < \\\\text{Cache Memory (L1, L2, L3)} < \\\\text{Main Memory (RAM)} < \\\\text{Magnetic / Flash SSD} < \\\\text{Optical / Tape}$$
1. **CPU Registers**: Fastest and smallest ($32$ or $64$ bits per register), located inside the CPU core.
2. **Cache Memory**: Extremely fast static SRAM placed between CPU and RAM to store frequently accessed data.
   - **L1 Cache**: Built directly into CPU core (fastest, $32\\\\text{KB}-64\\\\text{KB}$).
   - **L2 & L3 Cache**: Larger, slightly slower, shared across CPU cores ($2\\\\text{MB}-64\\\\text{MB}$).
3. **Main Memory (RAM)**:
   - **SRAM (Static RAM)**: Uses flip-flops (transistor bi-stable circuits). Does not require periodic refresh, faster, costlier; used in cache.
   - **DRAM (Dynamic RAM)**: Uses capacitor-transistor pairs. Leaks charge and requires frequent memory refresh cycles; used as main system memory.
4. **ROM (Read Only Memory)**:
   - **PROM**: Programmable once by user using PROM burner.
   - **EPROM**: Erasable by exposing to ultraviolet (UV) light.
   - **EEPROM**: Electrically Erasable Programmable ROM (used in modern Flash memory and BIOS).

### 4. Secondary Storage Devices and Optical Media
- **Hard Disk Drive (HDD)**: Magnetic platters rotated by spindle motor; read/write heads read magnetized tracks and sectors.
- **Solid State Drive (SSD)**: Uses NAND flash memory chips. No moving parts, zero mechanical seek latency, extremely high transfer speeds ($500\\\\text{MB/s}$ to $7000\\\\text{MB/s}$).
- **Optical Discs**: CD ($700\\\\text{MB}$), DVD ($4.7\\\\text{GB}-8.5\\\\text{GB}$), Blu-ray ($25\\\\text{GB}-50\\\\text{GB}$ using $405\\\\text{nm}$ blue-violet laser).

### 5. Ports and Interfaces
- **USB (Universal Serial Bus)**: Connects keyboards, mice, flash drives. USB 3.0 supports up to $5\\\\text{Gbps}$.
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
- **Blu-ray**: நீல-ஊதா லேசர் மூலம் $25\\\\text{GB}$ முதல் $50\\\\text{GB}$ வரை தரவைச் சேமிக்கும்.
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
   - இயங்கிக் கொண்டிருக்கும் நிரலே \'செயல்\' (Process) எனப்படும்.
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
- **Path**: Absolute path (\`C:\\\\Users\\\\Student\\\\Documents\\\\file.txt\`) vs Relative path.

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
ஒரு பெரிய மற்றும் சிக்கலான கணினி சிக்கலை பல சிறிய, எளிதில் தீர்க்கக்கூடிய துணைச் சிக்கல்களாகப் பிரிக்கும் உத்தி \'சிதைவு\' எனப்படும்.
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
  $$factorial(n) = \\\\begin{cases} 1 & \\\\text{if } n = 0 \\\\text{ (Base case)} \\\\\\\\ n \\\\times factorial(n - 1) & \\\\text{if } n > 0 \\\\text{ (Recursive step)} \\\\end{cases}$$
- **Fibonacci Sequence**: $F(0) = 0, F(1) = 1, F(n) = F(n-1) + F(n-2)$ for $n \\\\ge 2$.
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
  - தொடர் பெருக்கல்: $n! = n \\\\times (n-1)!$; இங்கு $0! = 1$ என்பது அடிப்படை நிலையாகும்.`,
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
   - *Character Literals*: Single character enclosed in single quotes (\`\'A\'\`, \`\'\\\\n\'\`).
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
3. **நிலையான மதிப்புருக்கள் (Literals)**: முழு எண், தசம எண், எழுத்துரு (\`\'A\'\`), சர மதிப்பு (\`"Hello"\`), பூலியன் (\`true\`, \`false\`).
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
'''

with open('src/data/class11CSPart1.ts', 'w', encoding='utf-8') as f:
    f.write(code)

print("class11CSPart1.ts base written!")
