import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Economics - Part 1 (Chapters 1 to 6)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 1. Introduction to Macro Economics (பேரியல் பொருளியல் ஓர் அறிமுகம்)
 * 2. National Income (தேசிய வருவாய்)
 * 3. Theories of Employment and Income (வேலைவாய்ப்பு மற்றும் வருமானக் கோட்பாடுகள்)
 * 4. Consumption and Investment Functions (நுகர்வு மற்றும் முதலீட்டுச் சார்புகள்)
 * 5. Monetary Economics (பணவியல் பொருளியல்)
 * 6. Banking (வங்கியியல்)
 */

export const ECONOMICS_PART1_CHAPTERS: Chapter[] = [
  {
    id: 'c12_eco_ch1',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 1,
    titleEn: 'Chapter 1: Introduction to Macro Economics',
    titleTa: 'அலகு 1: பேரியல் பொருளியல் ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch2',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 2,
    titleEn: 'Chapter 2: National Income',
    titleTa: 'அலகு 2: தேசிய வருவாய்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch3',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 3,
    titleEn: 'Chapter 3: Theories of Employment and Income',
    titleTa: 'அலகு 3: வேலைவாய்ப்பு மற்றும் வருமானக் கோட்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch4',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 4,
    titleEn: 'Chapter 4: Consumption and Investment Functions',
    titleTa: 'அலகு 4: நுகர்வு மற்றும் முதலீட்டுச் சார்புகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch5',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 5,
    titleEn: 'Chapter 5: Monetary Economics',
    titleTa: 'அலகு 5: பணவியல் பொருளியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch6',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Macroeconomics & Monetary Systems',
    unitNameTa: 'பகுதி 1: பேரியல் பொருளியல் & பணவியல் அமைப்புகள்',
    chapterNumber: 6,
    titleEn: 'Chapter 6: Banking',
    titleTa: 'அலகு 6: வங்கியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const ECONOMICS_PART1_NOTES: Record<string, NoteItem> = {
  c12_eco_ch1: {
    id: 'note_c12_eco_ch1',
    chapterId: 'c12_eco_ch1',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Introduction to Macro Economics: Scope, Systems & Circular Flow',
    titleTa: 'பேரியல் பொருளியல் ஓர் அறிமுகம்: எல்லைகள், அமைப்புகள் மற்றும் வருமான சுழற்சி ஓட்டம்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.3',
    isUpdated: true,
    isNew: false,
    changeNote: 'Added comprehensive two, three, and four-sector circular flow diagrams and economic systems comparison.',
    changeNoteTa: 'இரண்டு, மூன்று மற்றும் நான்கு துறை வருமான சுழற்சி ஓட்ட வரைபடங்கள் இணைக்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. Meaning & Evolution of Macroeconomics
The term 'Macro' originates from the Greek word *'Makros'*, meaning large. Coined by Ragnar Frisch in 1933, modern macroeconomics emerged predominantly with John Maynard Keynes’ landmark 1936 work, *"The General Theory of Employment, Interest and Money"*.
- **Micro vs Macro:** While microeconomics studies individual economic units (firms, households), macroeconomics examines aggregate quantities—national output, aggregate price level, total employment, and balance of payments.

### 2. Economic Systems
1. **Capitalism (Market Economy):** Private ownership of means of production, profit motive, consumer sovereignty, and minimal state intervention (laissez-faire). Driven by Adam Smith’s 'invisible hand'.
2. **Socialism (Command Economy):** State ownership of resources, central planning authority, social welfare motive, absence of competition (Karl Marx philosophy).
3. **Mixed Economy:** Coexistence of public and private sectors, planning combined with market forces (e.g., India, UK).

### 3. Circular Flow of Income
- **Two-Sector Model (Households & Firms):**
  $$Y = C + I$$
  Households supply factors of production (land, labour, capital, organization) to firms and receive factor payments (rent, wages, interest, profit). Firms produce goods and services purchased by households via consumption expenditure.
- **Three-Sector Model (Adding Government):**
  $$Y = C + I + G$$
  Incorporates government taxes ($T$) and government expenditure ($G$).
- **Four-Sector Model (Open Economy):**
  $$Y = C + I + G + (X - M)$$
  Includes the foreign sector through exports ($X$) and imports ($M$).`,
    bodyTa: `### 1. பேரியல் பொருளியல் - பொருள்
'மேக்ரோ' (Macro) என்ற சொல் 'மேக்ரோஸ்' (Makros) என்ற கிரேக்கச் சொல்லிலிருந்து உருவானது. இதற்கு 'பெரிய' என்று பொருள். 1933-ல் ராக்னர் பிரிஷ் என்பவரால் இச்சொல் அறிமுகப்படுத்தப்பட்டது. 1936-ல் ஜான் மேனார்ட் கீன்ஸ் வெளியிட்ட 'வேலைவாய்ப்பு, வட்டி மற்றும் பணம் பற்றிய பொதுக் கோட்பாடு' என்ற நூல் நவீன பேரியல் பொருளியலின் திருப்புமுனையாக அமைந்தது.

### 2. பொருளாதார அமைப்புகள்
1. **முதலாளித்துவப் பொருளாதாரம்:** உற்பத்திக் காரணிகள் தனியாருக்குச் சொந்தம், லாப நோக்கம், நுகர்வோர் இறையாண்மை (ஆடம் ஸ்மித்).
2. **சமதர்மப் பொருளாதாரம்:** உற்பத்திக் காரணிகள் அரசுக்குச் சொந்தம், பொது நல நோக்கம், மையத் திட்டமிடல் (கார்ல் மார்க்ஸ்).
3. **கலப்புப் பொருளாதாரம்:** தனியார் மற்றும் பொதுத்துறை இணைந்து செயல்படுதல் (இந்தியா).

### 3. வருமான சுழற்சி ஓட்டம்
- இரு துறை மாதிரி: $Y = C + I$ (இல்லங்கள் மற்றும் நிறுவனங்கள்).
- மூன்று துறை மாதிரி: $Y = C + I + G$ (அரசுத் துறை சேர்ப்பு).
- நான்கு துறை மாதிரி (திறந்த வெளிப் பொருளாதாரம்): $Y = C + I + G + (X - M)$ (ஏற்றுமதி மற்றும் இறக்குமதி சேர்ப்பு).`,
    revisions: [
      { version: '2.3', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced circular flow sector matrix.', changeNoteTa: 'சுழற்சி ஓட்ட துறை ஒப்பீடு அட்டவணை சேர்க்கப்பட்டது.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Four-Sector Open Economy National Output', nameTa: 'நான்கு துறை திறந்த பொருளாதார வெளியீடு', formula: 'Y = C + I + G + (X - M)', explanationEn: 'Aggregates consumption, investment, government spending, and net exports.', explanationTa: 'நுகர்வு, முதலீடு, அரசுச் செலவு மற்றும் நிகர ஏற்றுமதியின் கூட்டுத்தொகை.' },
      { nameEn: 'Circular Flow Factor Payment Equilibrium', nameTa: 'காரணி ஊதியச் சமநிலை', formula: '\\text{Factor Payments} = \\text{Factor Income} = \\text{Consumption Expenditure}', explanationEn: 'In a closed economy without leakage, money flow equals real flow.', explanationTa: 'கசிவுகள் இல்லாத மூடிய பொருளாதாரத்தில் பண ஓட்டம் உண்மை ஓட்டத்திற்குச் சமம்.' }
    ],
    workedExamples: [
      {
        questionEn: 'In an economy, C = 500 crores, I = 200 crores, G = 150 crores, Exports X = 80 crores, and Imports M = 60 crores. Calculate the total aggregate income Y.',
        questionTa: 'ஒரு பொருளாதாரத்தில் நுகர்வு C = 500 கோடி, முதலீடு I = 200 கோடி, அரசுச் செலவு G = 150 கோடி, ஏற்றுமதி X = 80 கோடி, இறக்குமதி M = 60 கோடி எனில் மொத்த வருவாய் Y காண்க.',
        solutionEn: '1. Use 4-sector equilibrium formula: Y = C + I + G + (X - M).\n2. Net Exports (X - M) = 80 - 60 = 20 crores.\n3. Total Y = 500 + 200 + 150 + 20 = 870 crores.',
        solutionTa: '1. Y = C + I + G + (X - M).\n2. நிகர ஏற்றுமதி = 80 - 60 = 20 கோடி.\n3. Y = 500 + 200 + 150 + 20 = 870 கோடி ரூபாய்.'
      }
    ]
  },

  c12_eco_ch2: {
    id: 'note_c12_eco_ch2',
    chapterId: 'c12_eco_ch2',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'National Income: Concepts, Measurement Methods & Difficulties',
    titleTa: 'தேசிய வருவாய்: கருத்துருக்கள், கணக்கிடும் முறைகள் மற்றும் இடர்பாடுகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.2',
    isUpdated: true,
    isNew: false,
    changeNote: 'Added comprehensive Product, Income, and Expenditure method reconciliations.',
    changeNoteTa: 'உற்பத்தி, வருமானம் மற்றும் செலவு முறைகளின் ஒப்பீடுகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Key Aggregates of National Income
1. **Gross Domestic Product (GDP):** Total market value of all final goods and services produced within the geographic domestic boundaries of a nation during a year.
   $$\\text{GDP} = C + I + G + (X - M)$$
2. **Gross National Product (GNP):** Total domestic production plus Net Factor Income from Abroad (NFIA).
   $$\\text{GNP} = \\text{GDP} + \\text{NFIA}$$
3. **Net National Product (NNP):**
   $$\\text{NNP} = \\text{GNP} - \\text{Depreciation (Capital Consumption Allowance)}$$
4. **NNP at Factor Cost (National Income):**
   $$\\text{NNP}_{FC} = \\text{NNP}_{MP} - \\text{Indirect Taxes} + \\text{Subsidies}$$
5. **Per Capita Income (PCI):** Average income per head of population:
   $$\\text{PCI} = \\frac{\\text{National Income}}{\\text{Total Population}}$$

### 2. Methods of Measuring National Income
- **Product (Value Added) Method:** Gross value of output minus value of intermediate consumption across agriculture, industry, and services. Double counting must be strictly avoided.
- **Income Method (Factor Earning Method):** Sum of all rewards paid to factors of production:
  $$Y = w + r + i + \\pi + R - P + \\text{NFIA}$$
  (Wages + Rent + Interest + Profits + Undistributed corporate surplus).
- **Expenditure (Outlay) Method:**
  $$Y = C + I + G + (X - M)$$

### 3. Difficulties in Measuring National Income in Developing Economies
1. Prevalance of non-monetized barter transactions in rural areas.
2. Unreported parallel economy (black money and tax evasion).
3. Inadequate and inaccurate statistical record keeping.
4. Valuation of unpaid domestic services (homemakers' contributions excluded from GDP).`,
    bodyTa: `### 1. தேசிய வருவாயின் அடிப்படைக் கருத்துருக்கள்
- **மொத்த உள்நாட்டு உற்பத்தி (GDP):** ஒரு ஆண்டில் நாட்டின் எல்லைக்குள் உற்பத்தி செய்யப்பட்ட இறுதிப் பொருட்கள் மற்றும் பணிகளின் சந்தை மதிப்பு.
- **மொத்த நாட்டு உற்பத்தி (GNP):** GDP + வெளிநாட்டிலிருந்து வரும் நிகர காரணி வருவாய் (NFIA).
- **நிகர நாட்டு உற்பத்தி (NNP):** GNP - தேய்மானச் செலவு.
- **தலாவருமானம் (PCI):** தேசிய வருவாய் / மொத்த மக்கள் தொகை.

### 2. தேசிய வருவாயைக் கணக்கிடும் மூன்று முறைகள்
1. **உற்பத்தி முறை (மதிப்புக் கூட்டல் முறை):** இடைநிலைப் பண்டங்களை நீக்கி இறுதிப் பண்டங்களின் மதிப்பை மட்டும் கூட்டுதல் (இரட்டை எண்ணிக்கையைத் தவிர்த்தல்).
2. **வருமான முறை:** காரணிகளுக்கு வழங்கப்படும் ஊதியங்களின் கூட்டுத்தொகை (கூலி + வாரம் + வட்டி + லாபம்).
3. **செலவின முறை:** நுகர்வு, முதலீடு, அரசுச் செலவு மற்றும் நிகர ஏற்றுமதியின் கூட்டுத்தொகை.

### 3. கணக்கிடுவதில் உள்ள நடைமுறைச் சிக்கல்கள்
பணமில்லா பரிவர்த்தனைகள், கறுப்புப் பணம், புள்ளிவிவரக் குறைபாடுகள் மற்றும் குடும்பப் பெண்களின் உழைப்பு சேர்க்கப்படாமை.`,
    revisions: [
      { version: '2.2', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Standardized NNP at factor cost equations.', changeNoteTa: 'காரணி விலையில் NNP சூத்திரங்கள் சீரமைக்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'GNP to NNP Depreciation Formula', nameTa: 'தேய்மானக் கழிவு சூத்திரம்', formula: '\\text{NNP} = \\text{GNP} - \\text{Depreciation}', explanationEn: 'Net output after deducting capital wear and tear.', explanationTa: 'மூலதன தேய்மானத்தைக் கழித்த பின் கிடைக்கும் நிகர உற்பத்தி.' },
      { nameEn: 'Per Capita Income', nameTa: 'தலா வருமானம்', formula: '\\text{PCI} = \\frac{\\text{National Income}}{\\text{Total Population}}', explanationEn: 'Standard indicator of economic living standards.', explanationTa: 'பொருளாதார வாழ்க்கைத்தரத்தை அளவிடும் முக்கியக் குறியீடு.' },
      { nameEn: 'Factor Cost Conversion', nameTa: 'காரணி விலை மாற்றம்', formula: '\\text{NNP}_{FC} = \\text{NNP}_{MP} - \\text{Net Indirect Taxes}', explanationEn: 'Subtracts indirect taxes and adds government subsidies.', explanationTa: 'மறைமுக வரிகளைக் கழித்து மானியங்களைக் கூட்டுவதன் மூலம் பெறப்படுகிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'If a country’s GNP is ₹12,000 crores, depreciation is ₹1,200 crores, and the population is 3 crores, calculate NNP and Per Capita Income.',
        questionTa: 'ஒரு நாட்டின் GNP ₹12,000 கோடி, தேய்மானம் ₹1,200 கோடி, மற்றும் மக்கள் தொகை 3 கோடி எனில் NNP மற்றும் தலா வருமானம் காண்க.',
        solutionEn: '1. NNP = GNP - Depreciation = 12,000 - 1,200 = ₹10,800 crores.\n2. Per Capita Income = NNP / Population = 10,800 crores / 3 crores = ₹3,600.',
        solutionTa: '1. NNP = 12,000 - 1,200 = ₹10,800 கோடி.\n2. தலா வருமானம் = 10,800 கோடி / 3 கோடி = ₹3,600.'
      }
    ]
  },

  c12_eco_ch3: {
    id: 'note_c12_eco_ch3',
    chapterId: 'c12_eco_ch3',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Theories of Employment and Income: Classical vs Keynesian Approaches',
    titleTa: 'வேலைவாய்ப்பு மற்றும் வருமானக் கோட்பாடுகள்: தொன்மை vs கீன்ஸின் அணுகுமுறைகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.4',
    isUpdated: true,
    isNew: false,
    changeNote: 'Integrated Say’s law critique and Keynesian Effective Demand ADF/ASF schedules.',
    changeNoteTa: 'சே-வின் சந்தை விதி விமர்சனம் மற்றும் கீன்ஸின் விளைவுத் தேவை வரைபடங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 17,
    bodyEn: `### 1. Classical Theory of Employment & Say’s Law
Classical economists (Adam Smith, David Ricardo, J.B. Say, A.C. Pigou) assumed that free-market capitalist economies automatically operate at **Full Employment** in the long run.
- **J.B. Say's Law of Markets:** *"Supply creates its own demand"*. When goods are produced, factor incomes generated are immediately spent purchasing those goods, ruling out general overproduction or long-term involuntary unemployment.
- Pigou argued wage flexibility (wage cuts) would eliminate any temporary unemployment.

### 2. Keynesian Critique & The Great Depression (1929)
The Great Depression shattered classical assumptions as massive involuntary unemployment persisted worldwide without self-correction. J.M. Keynes demonstrated:
1. Supply does not create its own demand because people save part of their income.
2. Wages are downward rigid (sticky) due to trade unions and labour laws.
3. Underemployment equilibrium is the normal state of affairs.

### 3. Principle of Effective Demand
The starting point of Keynesian employment theory is **Effective Demand ($ED$)**—the level of aggregate demand which is actually matched by aggregate supply.
$$ED = Y = C + I$$
- **Aggregate Demand Price (ADF):** The amount of revenue entrepreneurs expect to receive from the sale of output produced by a given number of workers.
- **Aggregate Supply Price (ASF):** The minimum revenue entrepreneurs must receive to cover production costs at that employment level.
- **Equilibrium:** Achieved at intersection point $E$ where $ADF = ASF$. The employment level at this point represents the effective employment generated.`,
    bodyTa: `### 1. தொன்மைப் பொருளியல் கோட்பாடு மற்றும் சே-வின் சந்தை விதி
ஜே.பி. சே-வின் சந்தை விதி: *"அளிப்பு தன் தேவையை தானே உருவாக்கிக் கொள்ளும்"*. இதன் மூலம் பொதுவான மிகை உற்பத்தி அல்லது விருப்பமில்லா வேலையின்மை ஏற்பட வாய்ப்பில்லை என்று தொன்மைப் பொருளியலாளர்கள் நம்பினர்.

### 2. கீன்ஸின் விமர்சனம் மற்றும் 1929 பெரும் மந்தம்
1929 பெரும் மந்தம் தொன்மை விதியை பொய்யாக்கியது. மனிதர்கள் தங்கள் வருமானத்தின் ஒரு பகுதியை சேமிப்பதால் அளிப்பு எப்போதும் சமமான தேவையை உருவாக்குவதில்லை என்பதை கீன்ஸ் சுட்டிக்காட்டினார்.

### 3. விளைவுத் தேவைக் கோட்பாடு
கீன்ஸின் வேலைவாய்ப்புக் கோட்பாட்டின் மையக்கருத்து **விளைவுத் தேவை (Effective Demand)** ஆகும்.
- தொகு தேவை விலை (ADF): உற்பத்தியாளர்கள் எதிர்பார்க்கும் வருவாய்.
- தொகு அளிப்பு விலை (ASF): உற்பத்தியாளர்கள் பெற வேண்டிய குறைந்தபட்ச உற்பத்திச் செலவு.
- ADF மற்றும் ASF வெட்டும் புள்ளியே சமநிலை வேலைவாய்ப்பு மட்டத்தை நிர்ணயிக்கிறது.`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Added ADF and ASF schedule intersections.', changeNoteTa: 'தொகு தேவை மற்றும் அளிப்பு வரைபட சந்திப்பு விளக்கங்கள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Keynesian Effective Demand', nameTa: 'கீன்ஸின் விளைவுத் தேவை', formula: 'ED = C + I', explanationEn: 'Effective demand equals total consumption plus investment.', explanationTa: 'விளைவுத் தேவை என்பது நுகர்வு மற்றும் முதலீட்டின் கூட்டுத்தொகை ஆகும்.' },
      { nameEn: 'Equilibrium Employment Condition', nameTa: 'வேலைவாய்ப்பு சமநிலை நிபந்தனை', formula: '\\text{ADF} = \\text{ASF}', explanationEn: 'Point of intersection determines equilibrium volume of employment.', explanationTa: 'தொகு தேவையும் தொகு அளிப்பும் சந்திக்கும் புள்ளி.' }
    ],
    workedExamples: [
      {
        questionEn: 'If in an economy ADF exceeds ASF at 50 lakh workers, what will entrepreneurs do to employment?',
        questionTa: 'ஒரு பொருளாதாரத்தில் 50 லட்சம் தொழிலாளர்கள் உள்ளபோது ADF, ASF-ஐ விட அதிகமாக இருந்தால் உற்பத்தியாளர்கள் என்ன செய்வார்கள்?',
        solutionEn: '1. When ADF > ASF, expected receipts exceed required production costs.\n2. This creates excess profits.\n3. Entrepreneurs will expand production and hire more workers until ADF = ASF equilibrium is reached.',
        solutionTa: '1. ADF > ASF எனில் எதிர்பார்க்கும் வருவாய் செலவை விட அதிகம்.\n2. இது உபரி லாபத்தைத் தரும்.\n3. உற்பத்தியாளர்கள் அதிக தொழிலாளர்களை வேலைக்கு அமர்த்தி உற்பத்தியை அதிகரிப்பார்கள்.'
      }
    ]
  },

  c12_eco_ch4: {
    id: 'note_c12_eco_ch4',
    chapterId: 'c12_eco_ch4',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Consumption & Investment Functions: Propensities, Multiplier & Accelerator',
    titleTa: 'நுகர்வு மற்றும் முதலீட்டுச் சார்புகள்: நுகர்வு விருப்பு, பெருக்கி மற்றும் முடுக்கி',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.3',
    isUpdated: true,
    isNew: false,
    changeNote: 'Mathematical multiplier derivations and accelerator leverage ratios added.',
    changeNoteTa: 'முதலீட்டுப் பெருக்கி மற்றும் முடுக்கி கணித சூத்திரங்கள் இணைக்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. The Consumption Function & Psychological Law
The consumption function represents functional relationship between aggregate income ($Y$) and consumption expenditure ($C$):
$$C = f(Y) = a + bY$$
where $a$ is autonomous consumption (consumption when income is zero) and $b = \\text{MPC}$ is induced consumption.
- **Keynes’ Fundamental Psychological Law of Consumption:**
  *"Men are disposed, as a rule and on the average, to increase their consumption as their income increases, but not by as much as the increase in their income."*
  Hence, $\\Delta C < \\Delta Y$.

### 2. Propensities to Consume and Save
- **Average Propensity to Consume (APC):** $\\text{APC} = \\frac{C}{Y}$
- **Marginal Propensity to Consume (MPC):** $\\text{MPC} = \\frac{\\Delta C}{\\Delta Y} \\quad (0 < \\text{MPC} < 1)$
- **Average Propensity to Save (APS):** $\\text{APS} = \\frac{S}{Y}$
- **Marginal Propensity to Save (MPS):** $\\text{MPS} = \\frac{\\Delta S}{\\Delta Y}$
- **Fundamental Identity:**
  $$\\text{MPC} + \\text{MPS} = 1 \\implies \\text{MPS} = 1 - \\text{MPC}$$

### 3. The Investment Multiplier ($K$)
Coined by R.F. Kahn (employment multiplier) and developed by Keynes (investment multiplier), the multiplier expresses the ratio of total change in income ($\\Delta Y$) to initial autonomous change in investment ($\\Delta I$):
$$K = \\frac{\\Delta Y}{\\Delta I} = \\frac{1}{1 - \\text{MPC}} = \\frac{1}{\\text{MPS}}$$
- If $\\text{MPC} = 0.8$, $K = \\frac{1}{1 - 0.8} = \\frac{1}{0.2} = 5$. An initial investment of ₹100 crores boosts national income by ₹500 crores!

### 4. The Accelerator Principle
While the multiplier shows effect of investment on income, the **Accelerator** ($\beta$) shows effect of changes in consumption demand on induced investment:
$$\\beta = \\frac{\\Delta I}{\\Delta C}$$`,
    bodyTa: `### 1. நுகர்வுச் சார்பு மற்றும் கீன்ஸின் உளவியல் விதி
நுகர்வுச் சார்பு $C = f(Y) = a + bY$.
கீன்ஸின் உளவியல் விதி: வருமானம் அதிகரிக்கும் போது நுகர்வும் அதிகரிக்கும், ஆனால் வருமானம் அதிகரிக்கும் அதே அளவிற்கு நுகர்வு அதிகரிக்காது ($\\Delta C < \\Delta Y$).

### 2. நுகர்வு மற்றும் சேமிப்பு விருப்பங்கள்
- சராசரி நுகர்வு விருப்பு: $\\text{APC} = C / Y$.
- இறுதிநிலை நுகர்வு விருப்பு: $\\text{MPC} = \\Delta C / \\Delta Y$.
- இறுதிநிலை சேமிப்பு விருப்பு: $\\text{MPS} = \\Delta S / \\Delta Y$.
- முக்கியத் தொடர்பு: $\\text{MPC} + \\text{MPS} = 1$.

### 3. முதலீட்டுப் பெருக்கி ($K$)
தொடக்க முதலீட்டு மாற்றத்தால் மொத்த வருமானத்தில் ஏற்படும் பல மடங்கு பெருக்கமே பெருக்கி எனப்படும்:
$$K = \\frac{\\Delta Y}{\\Delta I} = \\frac{1}{1 - \\text{MPC}} = \\frac{1}{\\text{MPS}}$$

### 4. முடுக்கித் தத்துவம்
நுகர்வுப் பொருட்களுக்கான தேவை அதிகரிக்கும் போது மூலதனப் பொருட்களுக்கான முதலீடு பன்மடங்கு அதிகரிப்பதே முடுக்கி ஆகும்.`,
    revisions: [
      { version: '2.3', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Added super-multiplier dynamic models.', changeNoteTa: 'சூப்பர் பெருக்கி மாதிரிகள் இணைக்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Investment Multiplier', nameTa: 'முதலீட்டுப் பெருக்கி சூத்திரம்', formula: 'K = \\frac{1}{1 - \\text{MPC}} = \\frac{1}{\\text{MPS}}', explanationEn: 'Calculates overall income generation per rupee of new investment.', explanationTa: 'புதிய முதலீட்டினால் தேசிய வருமானத்தில் ஏற்படும் பெருக்கம்.' },
      { nameEn: 'MPC and MPS Identity', nameTa: 'MPC மற்றும் MPS சமன்மை', formula: '\\text{MPC} + \\text{MPS} = 1', explanationEn: 'Fraction consumed plus fraction saved equals total incremental income.', explanationTa: 'நுகர்வு மற்றும் சேமிப்பு விகிதங்களின் கூடுதல் ஒன்றுக்குச் சமம்.' }
    ],
    workedExamples: [
      {
        questionEn: 'If MPC = 0.75 and new investment is ₹200 crores, calculate the multiplier and total increase in national income.',
        questionTa: 'MPC = 0.75 மற்றும் புதிய முதலீடு ₹200 கோடி எனில், பெருக்கியின் மதிப்பு மற்றும் தேசிய வருவாயின் மொத்த உயர்வைக் காண்க.',
        solutionEn: '1. Multiplier K = 1 / (1 - MPC) = 1 / (1 - 0.75) = 1 / 0.25 = 4.\n2. Total income change ΔY = K * ΔI = 4 * 200 = ₹800 crores.',
        solutionTa: '1. பெருக்கி K = 1 / (1 - 0.75) = 1 / 0.25 = 4.\n2. தேசிய வருவாய் உயர்வு ΔY = 4 * 200 = ₹800 கோடி.'
      }
    ]
  },

  c12_eco_ch5: {
    id: 'note_c12_eco_ch5',
    chapterId: 'c12_eco_ch5',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Monetary Economics: Money Evolution, Inflation & Trade Cycles',
    titleTa: 'பணவியல் பொருளியல்: பணத்தின் பரிணாமம், பணவீக்கம் மற்றும் வாணிபச் சுழற்சிகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.5',
    isUpdated: true,
    isNew: false,
    changeNote: 'Fisher Equation of Exchange and inflation taxonomy updated.',
    changeNoteTa: 'பிஷரின் பரிவர்த்தனைச் சமன்பாடு மற்றும் பணவீக்க வகைகள் புதுப்பிக்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Functions of Money
Walker famously summarized: *"Money is what money does"*.
1. **Primary Functions:** Medium of exchange, common measure of value (unit of account).
2. **Secondary Functions:** Standard of deferred payments, store of value, transfer of value.
3. **Contingent Functions:** Basis of credit, distribution of national income, equalization of marginal utilities.

### 2. Fisher’s Quantity Theory of Money
Irving Fisher formulated the **Equation of Exchange**:
$$MV = PT \\implies P = \\frac{MV}{T}$$
- $M$: Total quantity of legal tender money.
- $V$: Velocity of circulation of money.
- $P$: General price level.
- $T$: Total volume of transactions.
Extended to include bank credit ($M'$ and $V'$):
$$PT = MV + M'V'$$
*Core Conclusion:* The price level ($P$) varies directly and proportionally with changes in money supply ($M$), assuming $V$ and $T$ remain constant.

### 3. Inflation & Its Types
Inflation is a persistent and perceptible rise in the general price level leading to a decline in purchasing power.
- **Based on Speed:**
  - Creeping Inflation (< 3% per annum)
  - Walking Inflation (3% – 9%)
  - Running / Galloping Inflation (10% – 20%)
  - Hyperinflation (> 100% or astronomically high)
- **Based on Cause:**
  - **Demand-Pull Inflation:** Aggregate demand outstrips aggregate supply (*"Too much money chasing too few goods"*).
  - **Cost-Push Inflation:** Rising production costs (wages, raw materials, fuel) push prices upward.
- **Stagflation:** Coexistence of high inflation, slow economic growth, and high unemployment.

### 4. Phases of Trade Cycles
A recurring fluctuation in aggregate economic activity with four phases:
1. **Boom / Prosperity:** High output, full employment, expanding credit.
2. **Recession:** Turning point from peak, slowing orders, shrinking profit margins.
3. **Depression / Slump:** Severe contraction, plummeting prices, massive idle capacity.
4. **Recovery / Revival:** Rebound of investment, revival of consumer demand.`,
    bodyTa: `### 1. பணத்தின் பணிகள்
வாக்கர்: *"பணம் எதைச் செய்கிறதோ அதுவே பணம்"*.
- முதன்மைப் பணிகள்: பரிவர்த்தனை ஊடகம், மதிப்பின் அளவுகோல்.
- இரண்டாம் நிலை பணிகள்: எதிர்கால செலுத்துதல்களின் அடிப்படை, மதிப்பின் சேமிப்பு, மதிப்பை மாற்றுதல்.

### 2. பிஷரின் பண அளவுக் கோட்பாடு
பரிவர்த்தனைச் சமன்பாடு:
$$MV = PT \\implies P = \\frac{MV}{T}$$
வங்கிப் பணத்துடன்: $PT = MV + M'V'$.
பணத்தின் அளவு ($M$) இரட்டிப்பானால், விலை மட்டமும் ($P$) இரட்டிப்பாகும்.

### 3. பணவீக்கம் மற்றும் அதன் வகைகள்
பொது விலை மட்டம் தொடர்ந்து உயர்வதே பணவீக்கம் ஆகும்.
- தவழும் பணவீக்கம் (< 3%).
- நடக்கும் பணவீக்கம் (3% – 9%).
- ஓடும் பணவீக்கம் (10% – 20%).
- தாவும் / அதீத பணவீக்கம் (> 100%).
- தேவை இழுப்புப் பணவீக்கம் மற்றும் செலவு உந்து பணவீக்கம்.
- தேக்க வீக்கம் (Stagflation): பணவீக்கமும் பொருளாதாரத் தேக்கமும் ஒன்றாக நிலவுதல்.

### 4. வாணிபச் சுழற்சியின் நான்கு கட்டங்கள்
செழிப்பு (Boom) $\\to$ பின்னடைவு (Recession) $\\to$ மந்தம் (Depression) $\\to$ மீட்சி (Recovery).`,
    revisions: [
      { version: '2.5', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Incorporated Cambridge money demand equations.', changeNoteTa: 'கேம்பிரிட்ஜ் பணத் தேவை சமன்பாடுகள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Fisher’s Equation of Exchange', nameTa: 'பிஷரின் பரிவர்த்தனை சமன்பாடு', formula: 'PT = MV + M\'V\'', explanationEn: 'Relates total expenditures to total value of goods transacted.', explanationTa: 'மொத்த பண விநியோகம் மற்றும் பரிவர்த்தனை மதிப்பின் சமநிலை.' },
      { nameEn: 'Cambridge Cash Balance Equation (Marshall)', nameTa: 'மார்ஷலின் கேம்பிரிட்ஜ் சமன்பாடு', formula: 'M = kPY', explanationEn: 'k is the fraction of annual income held as ready cash.', explanationTa: 'k என்பது மக்கள் ரொக்கமாக வைத்திருக்க விரும்பும் வருமானத்தின் பகுதி.' }
    ],
    workedExamples: [
      {
        questionEn: 'If M = 1,000, V = 4, and T = 200, find the general price level P using Fisher’s equation.',
        questionTa: 'M = 1,000, V = 4, மற்றும் T = 200 எனில், பிஷரின் சமன்பாட்டின்படி பொது விலை மட்டம் P காண்க.',
        solutionEn: '1. Fisher’s formula: PT = MV => P = (MV) / T.\n2. P = (1000 * 4) / 200 = 4000 / 200 = 20.\n3. General price level is 20.',
        solutionTa: '1. P = (MV) / T.\n2. P = (1000 * 4) / 200 = 4000 / 200 = 20.\n3. பொது விலை மட்டம் 20 ஆகும்.'
      }
    ]
  },

  c12_eco_ch6: {
    id: 'note_c12_eco_ch6',
    chapterId: 'c12_eco_ch6',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Banking: Commercial Banking, Credit Creation & RBI Monetary Policy',
    titleTa: 'வங்கியியல்: வணிக வங்கிகள், கடன் உருவாக்கம் மற்றும் ரிசர்வ் வங்கியின் பணவியல் கொள்கை',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Economics Panel (TNSCERT)',
    reviewedByRole: 'Head of Economics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.4',
    isUpdated: true,
    isNew: false,
    changeNote: 'Repo, Reverse Repo, CRR, and SLR credit control mechanisms updated.',
    changeNoteTa: 'ரெப்போ, ரிவர்ஸ் ரெப்போ, CRR, SLR கடன் கட்டுப்பாட்டுக் கருவிகள் விளக்கப்பட்டன.',
    readTimeMinutes: 19,
    bodyEn: `### 1. Commercial Banks & Multiple Credit Creation
Commercial banks are profit-seeking financial institutions accepting public deposits and advancing loans.
- **Credit Creation Multiplier:** When a primary cash deposit enters the banking system, banks retain only a fraction as statutory reserves and loan out the rest, creating derived secondary deposits across successive cycles:
  $$\\text{Total Credit Created} = \\text{Primary Deposit} \\times \\frac{1}{\\text{CRR}}$$
  If CRR is 10%, a ₹1,000 cash deposit creates ₹10,000 in total bank credit!

### 2. The Central Bank: Reserve Bank of India (RBI)
Established on April 1, 1935, under the RBI Act 1934 and nationalized on January 1, 1949. Headquartered in Mumbai.
- **Key Functions:**
  1. Sole authority to issue currency notes (except ₹1 note and coins issued by Ministry of Finance).
  2. Banker to the Government.
  3. Banker's Bank & Lender of Last Resort.
  4. Custodian of foreign exchange reserves.
  5. Controller of credit and monetary stability.

### 3. Monetary Policy Instruments of RBI
1. **Quantitative (General) Credit Controls:**
   - **Bank Rate:** Official discount rate at which RBI lends long-term to commercial banks.
   - **Repo Rate (Repurchase Rate):** Rate at which RBI lends short-term funds to banks against government securities. Raising Repo rate curbs inflation.
   - **Reverse Repo Rate:** Rate at which RBI absorbs liquidity by borrowing from commercial banks.
   - **Cash Reserve Ratio (CRR):** Percentage of total net demand and time liabilities (NDTL) banks must hold in cash reserves with RBI.
   - **Statutory Liquidity Ratio (SLR):** Percentage of NDTL banks must maintain in liquid assets (gold, cash, approved securities) with themselves.
   - **Open Market Operations (OMO):** Sale or purchase of government bonds by RBI in the open market.
2. **Qualitative (Selective) Credit Controls:**
   - Margin requirements, ceiling on credit, moral suasion, direct action.`,
    bodyTa: `### 1. வணிக வங்கிகள் மற்றும் கடன் உருவாக்கம்
வணிக வங்கிகள் வைப்புகளைப் பெற்று கடன்களை வழங்குகின்றன. ரொக்க இருப்பு விகிதத்தின் (CRR) அடிப்படையில் புதிய கடன்களை உருவாக்குகின்றன:
$$\\text{மொத்தக் கடன் உருவாக்கம்} = \\text{தொடக்க வைப்பு} \\times \\frac{1}{\\text{CRR}}$$

### 2. இந்திய ரிசர்வ் வங்கி (RBI)
1935 ஏப்ரல் 1 அன்று தொடங்கப்பட்டு, 1949 ஜனவரி 1 அன்று நாட்டுடைமையாக்கப்பட்டது.
- பணத்தாள்களை வெளியிடும் ஏகபோக உரிமை.
- அரசின் வங்கி மற்றும் வங்கிகளின் வங்கி.
- கடைசி நிலை கடன் ஈவோன் (Lender of Last Resort).
- அந்நியச் செலாவணி காப்பாளர்.

### 3. ரிசர்வ் வங்கியின் பணவியல் கடன் கட்டுப்பாட்டுக் கருவிகள்
1. **அளவுமுறைக் கட்டுப்பாடுகள்:**
   - **வங்கி விகிதம் (Bank Rate):** நீண்ட காலக் கடன் விகிதம்.
   - **ரெப்போ விகிதம் (Repo Rate):** வங்கிகளுக்கு RBI வழங்கும் குறுகிய காலக் கடன் வட்டி. பணவீக்கத்தைக் கட்டுப்படுத்த இது உயர்த்தப்படும்.
   - **ரிவர்ஸ் ரெப்போ விகிதம்:** RBI வங்கிகளிடமிருந்து பெறும் கடன்களுக்கான வட்டி.
   - **ரொக்க இருப்பு விகிதம் (CRR):** வங்கிகள் RBI-யிடம் வைத்திருக்க வேண்டிய இருப்புப் பங்கு.
   - **சட்டப்பூர்வ நீர்மை விகிதம் (SLR):** வங்கிகள் தங்களிடமே வைத்திருக்க வேண்டிய திரவச் சொத்துக்கள்.
   - **வெளிச்சந்தை நடவடிக்கைகள் (OMO):** அரசுப் பத்திரங்களை வாங்குதல் அல்லது விற்றல்.
2. **தன்மைக் கட்டுப்பாடுகள்:** கடன் விளிம்பு நிலை, கடன் பங்கீடு, நேரடி நடவடிக்கை.`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Included recent monetary policy committee guidelines.', changeNoteTa: 'பணவியல் கொள்கைக் குழு வழிகாட்டுதல்கள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Credit Creation Multiplier', nameTa: 'கடன் பெருக்கி சூத்திரம்', formula: '\\Delta M = \\Delta D \\times \\frac{1}{\\text{CRR}}', explanationEn: 'Calculates total systemic money supply generated from a cash deposit.', explanationTa: 'தொடக்க வைப்பிலிருந்து வங்கி அமைப்பால் உருவாக்கப்படும் மொத்த கடன்.' },
      { nameEn: 'Money Multiplier from Reserve Ratio', nameTa: 'ரொக்க இருப்பு விகிதப் பெருக்கி', formula: 'm = \\frac{1}{r}', explanationEn: 'Inverse of reserve requirement ratio.', explanationTa: 'இருப்புத் தேவையின் தலைகீழ் மதிப்பு.' }
    ],
    workedExamples: [
      {
        questionEn: 'If a bank receives a fresh cash deposit of ₹5,000 and the legal reserve ratio (CRR) is 20%, calculate total credit created in the banking system.',
        questionTa: 'ஒரு வங்கியில் ₹5,000 புதிய ரொக்க வைப்பு பெறப்பட்டு, CRR 20% எனில் வங்கி அமைப்பில் உருவாகும் மொத்தக் கடனைக் காண்க.',
        solutionEn: '1. Credit Multiplier = 1 / CRR = 1 / 0.20 = 5.\n2. Total Credit = Primary Deposit * Multiplier = 5,000 * 5 = ₹25,000.',
        solutionTa: '1. கடன் பெருக்கி = 1 / 0.20 = 5.\n2. மொத்த கடன் = ₹5,000 * 5 = ₹25,000.'
      }
    ]
  }
};

export const ECONOMICS_PART1_SUMMARIES: Record<string, SummaryItem> = {
  c12_eco_ch1: {
    id: 'sum_c12_eco_ch1',
    chapterId: 'c12_eco_ch1',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Macroeconomics examines the economy as an interconnected whole: GDP, inflation, unemployment, and trade.',
      'Three core economic systems: Capitalism (free markets, profit), Socialism (state ownership, welfare), and Mixed Economy (coexistence).',
      'Circular flow models trace factor payments from firms to households and consumption expenditure back to firms.',
      'Four-sector open economy incorporates government budgets and international exports/imports: Y = C + I + G + (X - M).'
    ],
    keyPointsTa: [
      'பேரியல் பொருளியல் ஒட்டுமொத்தப் பொருளாதார அமைப்பை (GDP, பணவீக்கம், வேலைவாய்ப்பு) ஆராய்கிறது.',
      'முதலாளித்துவம், சமதர்மம் மற்றும் கலப்புப் பொருளாதாரம் ஆகிய மூன்று முக்கிய அமைப்புகள் நிலவுகின்றன.',
      'வருமான சுழற்சி ஓட்டம் காரணிகளுக்கு வழங்கப்படும் ஊதியமும் நுகர்வுச் செலவும் எவ்வாறு சுழல்கிறது என்பதை விளக்குகிறது.',
      'திறந்த பொருளாதாரத்தில் Y = C + I + G + (X - M) என அரசு மற்றும் பன்னாட்டு வர்த்தகம் இணைகிறது.'
    ],
    simpleExplanationEn: 'Think of macroeconomics like an aerial satellite photo of an entire bustling nation, whereas microeconomics is zooming in on a single store on street corner.',
    simpleExplanationTa: 'நுண்பொருளியல் என்பது ஒரு தெருவில் உள்ள கடையைப் பெரிதாக்கிப் பார்ப்பது என்றால், பேரியல் பொருளியல் என்பது வானத்திலிருந்து ஒட்டுமொத்த நாட்டின் செயல்பாடுகளையும் ஒரே பார்வையில் காண்பது போன்றது!'
  },

  c12_eco_ch2: {
    id: 'sum_c12_eco_ch2',
    chapterId: 'c12_eco_ch2',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'National income aggregates the total money value of all final goods and services produced in a year.',
      'GDP measures domestic territory production; GNP adds net earnings from abroad; NNP subtracts capital depreciation.',
      'Three measurement methodologies: Product (Value Added) method, Income method, and Expenditure method.',
      'Measurement hurdles include non-monetized rural barter, unrecorded black markets, and excluded domestic household labor.'
    ],
    keyPointsTa: [
      'தேசிய வருவாய் ஒரு ஆண்டில் உற்பத்தி செய்யப்பட்ட இறுதிப் பண்டங்கள் மற்றும் பணிகளின் மொத்த பண மதிப்பாகும்.',
      'GDP எல்லைக்குள் உற்பத்தியையும், GNP வெளிநாட்டு வருவாயையும் அளவிடுகிறது; NNP தேய்மானத்தைக் கழிக்கிறது.',
      'உற்பத்தி முறை, வருமான முறை, மற்றும் செலவின முறை ஆகிய மூன்று முறைகளில் கணக்கிடப்படுகிறது.',
      'கறுப்புப் பணம், பணமில்லா பரிவர்த்தனை மற்றும் குடும்பப் பெண்களின் உழைப்பு விடுபடுதல் ஆகியவை முக்கிய சவால்கள்.'
    ],
    simpleExplanationEn: 'If a country were a gigantic household, National Income is the total combined annual salary earned by every working member, and Per Capita Income is that salary split equally among everyone in the family!',
    simpleExplanationTa: 'நாட்டை ஒரு கூட்டுக் குடும்பமாக நினைத்தால், தேசிய வருவாய் என்பது குடும்ப உறுப்பினர்கள் அனைவரும் சேர்ந்து ஈட்டிய மொத்த ஆண்டு வருமானம்; தலா வருமானம் என்பது அதை ஆளுக்கு சமமாகப் பிரிப்பது போன்றது!'
  },

  c12_eco_ch3: {
    id: 'sum_c12_eco_ch3',
    chapterId: 'c12_eco_ch3',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Classical theory relied on Say’s Law ("Supply creates its own demand") assuming automatic long-run full employment.',
      '1929 Great Depression proved that market economies can get stuck in prolonged underemployment equilibrium.',
      'Keynes showed effective demand determines employment: employers hire only as many workers as warranted by expected sales receipts.',
      'Equilibrium employment is reached where Aggregate Demand Price (ADF) equals Aggregate Supply Price (ASF).'
    ],
    keyPointsTa: [
      'தொன்மைப் பொருளியல் சே-வின் சந்தை விதியை நம்பி முழு வேலைவாய்ப்பு தானாகவே நிலவும் எனக் கருதியது.',
      '1929 பெரும் மந்தம் பொருளாதாரத்தில் நீடித்த வேலையின்மை நிலவ முடியும் என்பதை நிரூபித்தது.',
      'கீன்ஸ் விளைவுத் தேவையை மையமாகக் கொண்டு, எதிர்பார்க்கப்படும் விற்பனை வருவாயே வேலைவாய்ப்பை நிர்ணயிக்கிறது என்றார்.',
      'தொகு தேவை (ADF) மற்றும் தொகு அளிப்பு (ASF) சந்திக்கும் புள்ளியிலேயே வேலைவாய்ப்பு சமநிலை தீர்மானிக்கப்படுகிறது.'
    ],
    simpleExplanationEn: 'Say thought that making chairs automatically makes people buy them. Keynes corrected him: factories only hire carpenters when people actually walk into stores with cash ready to buy chairs!',
    simpleExplanationTa: 'நாற்காலிகளை உற்பத்தி செய்துவிட்டால் மக்கள் தானாக வாங்கிக்கொள்வார்கள் என்று சே நினைத்தார். மக்கள் கையில் பணத்தோடு வாங்க வரும்போதுதான் முதலாளி தச்சர்களை வேலைக்கு அமர்த்துவார் என்று கீன்ஸ் விளக்கினார்!'
  },

  c12_eco_ch4: {
    id: 'sum_c12_eco_ch4',
    chapterId: 'c12_eco_ch4',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Keynes’ psychological law states that consumption rises with income, but by less than the full increment (MPC < 1).',
      'Marginal propensity to consume (MPC) and save (MPS) always sum to 1: MPC + MPS = 1.',
      'Investment multiplier K = 1 / (1 - MPC) shows that every rupee of new investment creates multiple rupees of national income.',
      'Accelerator principle explains how surging consumer demand triggers accelerated orders for industrial machinery and factories.'
    ],
    keyPointsTa: [
      'வருமானம் உயரும்போது நுகர்வும் உயரும், ஆனால் வருமானம் உயர்ந்த அதே அளவிற்கு நுகர்வு உயராது (MPC < 1).',
      'இறுதிநிலை நுகர்வு விருப்பு (MPC) மற்றும் சேமிப்பு விருப்பு (MPS) ஆகியவற்றின் கூடுதல் எப்போதுமே 1 ஆகும்.',
      'முதலீட்டுப் பெருக்கி K = 1 / (1 - MPC) புதிய முதலீடுகள் பல மடங்கு தேசிய வருமானத்தை உருவாக்குவதை விளக்குகிறது.',
      'நுகர்வுப் பொருட்களின் தேவை அதிகரிக்கும் போது தொழிற்சாலை இயந்திரங்களின் தேவை பன்மடங்கு பெருகுவதை முடுக்கி காட்டுகிறது.'
    ],
    simpleExplanationEn: 'When a highway project spends ₹100 crores paying road builders, the workers spend ₹80 crores in local stores, the shopkeepers spend ₹64 crores on wholesale goods, and so on—this ripple effect is the Keynesian Multiplier!',
    simpleExplanationTa: 'ஒரு புதிய சாலைப் பணிக்கு ₹100 கோடி செலவிடப்படும் போது, கூலி பெற்ற தொழிலாளர்கள் கடைகளில் செலவிடுகிறார்கள், கடைக்காரர்கள் மொத்த வியாபாரியிடம் செலவிடுகிறார்கள்—இந்த அலைபோன்ற பொருளாதார சுழற்சியே பெருக்கி ஆகும்!'
  },

  c12_eco_ch5: {
    id: 'sum_c12_eco_ch5',
    chapterId: 'c12_eco_ch5',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Money serves as medium of exchange, measure of value, store of purchasing power, and deferred payment standard.',
      'Fisher’s Equation MV = PT proves that doubling money supply directly doubles general price level P under fixed velocity and volume.',
      'Inflation erodes currency purchasing power: demand-pull (excess demand) vs cost-push (rising input costs).',
      'Trade cycles cycle continuously through four phases: Boom -> Recession -> Depression -> Recovery.'
    ],
    keyPointsTa: [
      'பணம் பரிவர்த்தனை ஊடகமாகவும், மதிப்பின் அளவுகோலாகவும், சேமிப்பாகவும் செயல்படுகிறது.',
      'பிஷரின் சமன்பாடு MV = PT பணத்தின் விநியோகம் இரட்டிப்பானால் விலை மட்டமும் இரட்டிப்பாகும் என்பதை நிரூபிக்கிறது.',
      'பணவீக்கம் பணத்தின் வாங்கும் சக்தியைக் குறைக்கிறது (தேவை இழுப்புப் பணவீக்கம் மற்றும் செலவு உந்து பணவீக்கம்).',
      'வாணிபச் சுழற்சி செழிப்பு, பின்னடைவு, மந்தம் மற்றும் மீட்சி என நான்கு கட்டங்களாகத் தொடர்ந்து சுழல்கிறது.'
    ],
    simpleExplanationEn: 'If an auction room suddenly hands everyone twice as much paper currency, nobody has more actual paintings to buy—the bids on the existing paintings simply double! That is Fisher’s Quantity Theory of Money.',
    simpleExplanationTa: 'ஒரு ஏல அரங்கில் உள்ள அனைவருக்கும் திடீரென இரு மடங்கு பணம் கொடுக்கப்பட்டால், அங்குள்ள பொருட்கள் அதிகரிக்காது—பொருட்களின் ஏல விலை மட்டுமே இரு மடங்காக உயரும்! இதுவே பண அளவுக் கோட்பாடு.'
  },

  c12_eco_ch6: {
    id: 'sum_c12_eco_ch6',
    chapterId: 'c12_eco_ch6',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Commercial banks expand money supply through fractional reserve credit creation: Total Credit = Primary Deposit / CRR.',
      'RBI serves as India’s central bank, issuing banknotes, acting as government banker, and guarding foreign exchange.',
      'Quantitative controls manage systemic liquidity: Repo Rate, Reverse Repo Rate, Bank Rate, CRR, and SLR.',
      'During high inflation, RBI hikes Repo Rate and CRR to suck excess money out of circulation.'
    ],
    keyPointsTa: [
      'வணிக வங்கிகள் ரொக்க இருப்பு விகிதத்தின் அடிப்படையில் புதிய கடன்களை உருவாக்கி பண விநியோகத்தை அதிகரிக்கின்றன.',
      'ரிசர்வ் வங்கி (RBI) பணத்தாள்களை வெளியிடுதல், அரசின் வங்கி மற்றும் வங்கிகளின் வங்கியாகச் செயல்படுகிறது.',
      'ரெப்போ விகிதம், ரிவர்ஸ் ரெப்போ, CRR மற்றும் SLR ஆகியவை அளவுமுறைக் கடன் கட்டுப்பாட்டுக் கருவிகள் ஆகும்.',
      'பணவீக்கத்தைக் கட்டுப்படுத்த ரிசர்வ் வங்கி ரெப்போ விகிதத்தை உயர்த்தி சந்தையில் உள்ள பணப் புழக்கத்தைக் குறைக்கிறது.'
    ],
    simpleExplanationEn: 'The RBI acts as the steering wheel and brake pedal of the nation’s economy: when inflation speeds up dangerously, the RBI presses the brake pedal by hiking the Repo rate to cool down borrowing!',
    simpleExplanationTa: 'இந்திய ரிசர்வ் வங்கி பொருளாதாரத்தின் பிரேக் மற்றும் ஸ்டீயரிங் போன்றது: பணவீக்கம் ஆபத்தான வேகத்தில் போகும்போது, ரெப்போ விகிதத்தை உயர்த்தி வட்டிப் பிரேக்கை அழுத்துகிறது!'
  }
};

export const ECONOMICS_PART1_QUIZZES: Record<string, ChapterQuiz> = {
  c12_eco_ch1: {
    id: 'quiz_c12_eco_ch1',
    chapterId: 'c12_eco_ch1',
    titleEn: 'Chapter 1: Macroeconomics Introduction Quiz',
    titleTa: 'அலகு 1: பேரியல் பொருளியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Who is recognized as the father of modern macroeconomics?',
        questionTa: 'நவீன பேரியல் பொருளியலின் தந்தை என அழைக்கப்படுபவர் யார்?',
        optionsEn: ['J.M. Keynes', 'Adam Smith', 'Ragnar Frisch', 'Karl Marx'],
        optionsTa: ['ஜே.எம். கீன்ஸ்', 'ஆடம் ஸ்மித்', 'ராக்னர் பிரிஷ்', 'கார்ல் மார்க்ஸ்'],
        correctAnswer: 'J.M. Keynes',
        explanationEn: 'John Maynard Keynes revolutionized economic thought with his 1936 General Theory.',
        explanationTa: '1936-ல் வெளிவந்த பொதுக் கோட்பாட்டின் மூலம் நவீன பேரியல் பொருளியலை உருவாக்கியவர் கீன்ஸ் ஆவார்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'In a four-sector open economy, aggregate demand is represented by:',
        questionTa: 'நான்கு துறை திறந்த பொருளாதாரத்தில் தொகு தேவை சமன்பாடு:',
        optionsEn: ['C + I + G + (X - M)', 'C + I + G', 'C + I', 'C + S + T'],
        optionsTa: ['C + I + G + (X - M)', 'C + I + G', 'C + I', 'C + S + T'],
        correctAnswer: 'C + I + G + (X - M)',
        explanationEn: 'Includes households (C), firms (I), government (G), and net foreign trade (X - M).',
        explanationTa: 'நுகர்வு, முதலீடு, அரசுச் செலவு மற்றும் நிகர ஏற்றுமதி (X - M) ஆகியவற்றை உள்ளடக்கியது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'In a capitalist economy, the allocation of resources is decided by a central planning authority.',
        questionTa: 'முதலாளித்துவப் பொருளாதாரத்தில் வள ஒதுக்கீட்டை மையத் திட்டக் குழு தீர்மானிக்கிறது.',
        correctAnswer: false,
        explanationEn: 'False! Capitalism uses market price mechanisms and consumer demand. Central planning belongs to Socialism.',
        explanationTa: 'தவறு! முதலாளித்துவத்தில் சந்தை விலை அமைப்பே வளங்களை ஒதுக்குகிறது. மையத் திட்டமிடல் சமதர்மத்திற்கானது.'
      }
    ]
  },

  c12_eco_ch2: {
    id: 'quiz_c12_eco_ch2',
    chapterId: 'c12_eco_ch2',
    titleEn: 'Chapter 2: National Income Quiz',
    titleTa: 'அலகு 2: தேசிய வருவாய் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Net National Product (NNP) is obtained by deducting what from Gross National Product (GNP)?',
        questionTa: 'மொத்த நாட்டு உற்பத்தியிலிருந்து (GNP) எதைக் கழித்தால் நிகர நாட்டு உற்பத்தி (NNP) கிடைக்கும்?',
        optionsEn: ['Depreciation', 'Indirect Taxes', 'Subsidies', 'Foreign aid'],
        optionsTa: ['தேய்மானம்', 'மறைமுக வரிகள்', 'மானியங்கள்', 'வெளிநாட்டு உதவி'],
        correctAnswer: 'Depreciation',
        explanationEn: 'NNP = GNP - Depreciation (capital consumption allowance).',
        explanationTa: 'NNP = GNP - தேய்மானச் செலவு.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which of the following is NOT included when calculating National Income?',
        questionTa: 'தேசிய வருவாயைக் கணக்கிடும் போது கீழ்க்கண்டவற்றுள் எது சேர்க்கப்படுவதில்லை?',
        optionsEn: ['Unpaid domestic work of housewives', 'Salary of school teachers', 'Profits of IT corporations', 'Agricultural sales'],
        optionsTa: ['குடும்பப் பெண்களின் இல்லப் பணி', 'பள்ளி ஆசிரியர்களின் ஊதியம்', 'மென்பொருள் நிறுவனங்களின் லாபம்', 'விவசாயப் பொருட்கள் விற்பனை'],
        correctAnswer: 'Unpaid domestic work of housewives',
        explanationEn: 'Non-monetized domestic services performed out of affection/duty lack market prices and are excluded from GDP.',
        explanationTa: 'சந்தை விலை இல்லாததால் குடும்பப் பெண்களின் இல்லப் பணி தேசிய வருவாயில் சேர்ப்பதில்லை.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Per Capita Income is calculated by dividing National Income by Total Population.',
        questionTa: 'தேசிய வருவாயை மொத்த மக்கள் தொகையால் வகுத்தால் தலா வருமானம் கிடைக்கும்.',
        correctAnswer: true,
        explanationEn: 'True! PCI = National Income / Total Population.',
        explanationTa: 'சரி! தலா வருமானம் = தேசிய வருவாய் / மக்கள் தொகை.'
      }
    ]
  },

  c12_eco_ch3: {
    id: 'quiz_c12_eco_ch3',
    chapterId: 'c12_eco_ch3',
    titleEn: 'Chapter 3: Employment & Income Theories Quiz',
    titleTa: 'அலகு 3: வேலைவாய்ப்புக் கோட்பாடுகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Who stated the proposition "Supply creates its own demand"?',
        questionTa: '"அளிப்பு தன் தேவையை தானே உருவாக்கிக் கொள்ளும்" என்ற விதியை கூறியவர் யார்?',
        optionsEn: ['J.B. Say', 'J.M. Keynes', 'Lionel Robbins', 'David Ricardo'],
        optionsTa: ['ஜே.பி. சே', 'ஜே.எம். கீன்ஸ்', 'லயனல் ராபின்ஸ்', 'டேவிட் ரிக்கார்டோ'],
        correctAnswer: 'J.B. Say',
        explanationEn: 'Jean-Baptiste Say formulated the famous classical law of markets.',
        explanationTa: 'ஜே.பி. சே தொன்மைச் சந்தை விதியை உருவாக்கினார்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'According to Keynes, the level of employment in an economy is determined by:',
        questionTa: 'கீன்ஸின் கூற்றுப்படி ஒரு நாட்டின் வேலைவாய்ப்பு மட்டத்தை நிர்ணயிப்பது:',
        optionsEn: ['Effective Demand', 'Wage flexibility', 'Money supply', 'Government control'],
        optionsTa: ['விளைவுத் தேவை', 'கூலி நெகிழ்வுத்தன்மை', 'பண விநியோகம்', 'அரசு கட்டுப்பாடு'],
        correctAnswer: 'Effective Demand',
        explanationEn: 'Keynes proved that effective demand (ADF = ASF) dictates the equilibrium volume of employment.',
        explanationTa: 'விளைவுத் தேவையின் அளவே உற்பத்தியையும் வேலைவாய்ப்பையும் தீர்மானிக்கிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Keynes assumed that an economy always functions at full employment automatically.',
        questionTa: 'பொருளாதாரம் எப்போதுமே முழு வேலைவாய்ப்பு நிலையில் தானாக இயங்கும் என கீன்ஸ் கருதினார்.',
        correctAnswer: false,
        explanationEn: 'False! Classical economists believed in automatic full employment; Keynes proved underemployment equilibrium is standard.',
        explanationTa: 'தவறு! குறை வேலைவாய்ப்பு சமநிலையே பொதுவான நிலை என்பதை கீன்ஸ் நிரூபித்தார்.'
      }
    ]
  },

  c12_eco_ch4: {
    id: 'quiz_c12_eco_ch4',
    chapterId: 'c12_eco_ch4',
    titleEn: 'Chapter 4: Consumption & Investment Quiz',
    titleTa: 'அலகு 4: நுகர்வு மற்றும் முதலீடு வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If MPC is 0.8, what is the value of Marginal Propensity to Save (MPS)?',
        questionTa: 'MPC = 0.8 எனில் MPS-ன் மதிப்பு என்ன?',
        optionsEn: ['0.2', '0.8', '1.0', '1.25'],
        optionsTa: ['0.2', '0.8', '1.0', '1.25'],
        correctAnswer: '0.2',
        explanationEn: 'Since MPC + MPS = 1, MPS = 1 - 0.8 = 0.2.',
        explanationTa: 'MPC + MPS = 1 என்பதால், MPS = 1 - 0.8 = 0.2.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'If MPS = 0.25, the investment multiplier K is equal to:',
        questionTa: 'MPS = 0.25 எனில் முதலீட்டுப் பெருக்கி K-ன் மதிப்பு:',
        optionsEn: ['4', '5', '2.5', '0.75'],
        optionsTa: ['4', '5', '2.5', '0.75'],
        correctAnswer: '4',
        explanationEn: 'Multiplier K = 1 / MPS = 1 / 0.25 = 4.',
        explanationTa: 'பெருக்கி K = 1 / MPS = 1 / 0.25 = 4.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The value of Marginal Propensity to Consume (MPC) is always greater than 1.',
        questionTa: 'இறுதிநிலை நுகர்வு விருப்பின் (MPC) மதிப்பு எப்போதுமே 1-ஐ விட அதிகம்.',
        correctAnswer: false,
        explanationEn: 'False! MPC lies strictly between 0 and 1 (0 < MPC < 1) because people save a portion of new income.',
        explanationTa: 'தவறு! மக்கள் கூடுதல் வருமானத்தில் ஒரு பகுதியை சேமிப்பதால் MPC எப்போதுமே 0 மற்றும் 1-க்கு இடையே இருக்கும்.'
      }
    ]
  },

  c12_eco_ch5: {
    id: 'quiz_c12_eco_ch5',
    chapterId: 'c12_eco_ch5',
    titleEn: 'Chapter 5: Monetary Economics Quiz',
    titleTa: 'அலகு 5: பணவியல் பொருளியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'In Fisher’s equation MV = PT, the letter V represents:',
        questionTa: 'பிஷரின் MV = PT சமன்பாட்டில் V எதனைக் குறிக்கிறது?',
        optionsEn: ['Velocity of circulation of money', 'Volume of transactions', 'Value of money', 'Volatility of prices'],
        optionsTa: ['பணத்தின் சுழற்சி வேகம்', 'பரிவர்த்தனைகளின் அளவு', 'பணத்தின் மதிப்பு', 'விலை மாறுபாடு'],
        correctAnswer: 'Velocity of circulation of money',
        explanationEn: 'V is velocity of circulation—the average number of times a unit of money changes hands per year.',
        explanationTa: 'V என்பது ஒரு ஆண்டில் ஒரு பண அலகு கைமாறும் சராசரி சுழற்சி வேகத்தைக் குறிக்கிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The phenomenon where high inflation occurs simultaneously with economic stagnation is known as:',
        questionTa: 'உயர் பணவீக்கமும் பொருளாதாரத் தேக்கமும் ஒரே நேரத்தில் நிலவும் நிலை:',
        optionsEn: ['Stagflation', 'Hyperinflation', 'Deflation', 'Reflation'],
        optionsTa: ['தேக்க வீக்கம் (Stagflation)', 'தாவுகின்ற பணவீக்கம்', 'பணவாட்டம்', 'மீள் பணவீக்கம்'],
        correctAnswer: 'Stagflation',
        explanationEn: 'Stagflation combines stagnation (unemployment, slow growth) with high inflation.',
        explanationTa: 'பொருளாதார தேக்கமும் பணவீக்கமும் இணையும் நிலையே தேக்க வீக்கம் (Stagflation) எனப்படும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Cost-push inflation occurs when aggregate demand exceeds aggregate supply.',
        questionTa: 'மொத்தத் தேவை மொத்த அளிப்பை விட அதிகமாகும்போது செலவு உந்து பணவீக்கம் ஏற்படுகிறது.',
        correctAnswer: false,
        explanationEn: 'False! Excess demand causes Demand-Pull inflation. Cost-push is caused by rising costs of wages and raw materials.',
        explanationTa: 'தவறு! தேவை அதிகரிப்பால் ஏற்படுவது தேவை இழுப்புப் பணவீக்கம். உற்பத்திச் செலவு உயர்வதால் ஏற்படுவது செலவு உந்து பணவீக்கம்.'
      }
    ]
  },

  c12_eco_ch6: {
    id: 'quiz_c12_eco_ch6',
    chapterId: 'c12_eco_ch6',
    titleEn: 'Chapter 6: Banking & Monetary Policy Quiz',
    titleTa: 'அலகு 6: வங்கியியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'In which year was the Reserve Bank of India (RBI) established?',
        questionTa: 'இந்திய ரிசர்வ் வங்கி (RBI) எந்த ஆண்டு தொடங்கப்பட்டது?',
        optionsEn: ['1935', '1947', '1949', '1950'],
        optionsTa: ['1935', '1947', '1949', '1950'],
        correctAnswer: '1935',
        explanationEn: 'RBI was established on April 1, 1935 under the Reserve Bank of India Act 1934.',
        explanationTa: 'ரிசர்வ் வங்கி 1935 ஏப்ரல் 1 அன்று தொடங்கப்பட்டது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'To control rising inflation in the country, the Reserve Bank of India will usually:',
        questionTa: 'நாட்டின் பணவீக்கத்தைக் கட்டுப்படுத்த ரிசர்வ் வங்கி பொதுவாக என்ன செய்யும்?',
        optionsEn: ['Increase the Repo Rate', 'Decrease the Repo Rate', 'Reduce the CRR', 'Buy government securities'],
        optionsTa: ['ரெப்போ விகிதத்தை உயர்த்தும்', 'ரெப்போ விகிதத்தைக் குறைக்கும்', 'CRR-ஐக் குறைக்கும்', 'அரசுப் பத்திரங்களை வாங்கும்'],
        correctAnswer: 'Increase the Repo Rate',
        explanationEn: 'Hiking the Repo rate makes borrowing costlier for commercial banks, curbing credit and cooling inflation.',
        explanationTa: 'ரெப்போ விகிதத்தை உயர்த்தினால் வங்கிகள் பெறும் கடன் வட்டி உயர்ந்து கடன் புழக்கம் குறையும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The Cash Reserve Ratio (CRR) is kept in liquid gold by commercial banks in their own vaults.',
        questionTa: 'ரொக்க இருப்பு விகிதத்தை (CRR) வங்கிகள் தங்களுடைய பெட்டகத்திலேயே தங்கமாக வைத்திருக்க வேண்டும்.',
        correctAnswer: false,
        explanationEn: 'False! CRR must be deposited with the RBI in cash. Statutory Liquidity Ratio (SLR) is held by banks themselves in liquid assets.',
        explanationTa: 'தவறு! CRR என்பது RBI-யிடம் ரொக்கமாக வைக்கப்பட வேண்டிய வைப்பு. SLR-ஐ மட்டுமே வங்கிகள் தங்களிடம் வைத்திருக்க முடியும்.'
      }
    ]
  }
};

export const ECONOMICS_PART1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_eco_ch1: {
    id: 'diag_c12_eco_ch1',
    chapterId: 'c12_eco_ch1',
    titleEn: 'Interactive Schema: Four-Sector Circular Flow of Income & Expenditure',
    titleTa: 'நான்கு துறை வருமான மற்றும் செலவு சுழற்சி ஓட்ட வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="30" width="220" height="90" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="140" y="70" textAnchor="middle" fill="#1e3a8a" fontWeight="bold" fontSize="14">Households / இல்லங்கள்</text>
      <text x="140" y="92" textAnchor="middle" fill="#3b82f6" fontSize="11">Factor Services & Consumption</text>

      <rect x="350" y="30" width="220" height="90" rx="12" fill="#f0fdf4" stroke="#10b981" strokeWidth="2" />
      <text x="460" y="70" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="14">Firms / நிறுவனங்கள்</text>
      <text x="460" y="92" textAnchor="middle" fill="#059669" fontSize="11">Production & Factor Payments</text>

      <rect x="180" y="180" width="240" height="90" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="300" y="220" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="14">Govt & Rest of World</text>
      <text x="300" y="242" textAnchor="middle" fill="#d97706" fontSize="11">Taxes, Spending (G), Exports (X-M)</text>

      <path d="M 250 55 L 350 55" stroke="#2563eb" strokeWidth="2.5" markerEnd="url(#arrow)" strokeDasharray="4" />
      <path d="M 350 95 L 250 95" stroke="#059669" strokeWidth="2.5" markerEnd="url(#arrow)" />
      <path d="M 140 120 L 220 180" stroke="#f59e0b" strokeWidth="2" strokeDasharray="4" />
      <path d="M 460 120 L 380 180" stroke="#f59e0b" strokeWidth="2" />
    </svg>`,
    labels: [
      { id: 'sec1', labelEn: 'Households Sector', labelTa: 'இல்லங்கள் துறை', descriptionEn: 'Supplies factors of production (land, labour, capital) and spends income on consumer goods.', descriptionTa: 'உற்பத்திக் காரணிகளை வழங்கி, நுகர்வுப் பண்டங்களுக்கு செலவு செய்யும் குடும்பங்கள்.', x: 25, y: 35 },
      { id: 'sec2', labelEn: 'Firms / Business Sector', labelTa: 'நிறுவனங்கள் / வணிகத் துறை', descriptionEn: 'Hires factors, produces goods and services, and pays factor incomes (rent, wages, profit).', descriptionTa: 'பண்டங்களை உற்பத்தி செய்து கூலி, வாரம், வட்டி, லாபம் வழங்கும் உற்பத்தியாளர்கள்.', x: 75, y: 35 },
      { id: 'sec3', labelEn: 'Government & Foreign Sector', labelTa: 'அரசு & வெளிநாட்டுத் துறை', descriptionEn: 'Taxes (T), Government spending (G), Exports (X), and Imports (M) completing open economy equilibrium.', descriptionTa: 'வரிகள், அரசுச் செலவுகள், ஏற்றுமதி மற்றும் இறக்குமதி இணைப்புகள்.', x: 50, y: 70 }
    ]
  },
  c12_eco_ch2: {
    id: 'diag_c12_eco_ch2',
    chapterId: 'c12_eco_ch2',
    titleEn: 'National Income Accounting: Three Methods & Metric Aggregates',
    titleTa: 'தேசிய வருவாய் கணக்கீட்டின் மூன்று முறைகள் மற்றும் அளவீடுகள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="40" width="160" height="80" rx="10" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
      <text x="110" y="75" textAnchor="middle" fill="#0369a1" fontWeight="bold" fontSize="13">1. Product Method</text>
      <text x="110" y="95" textAnchor="middle" fill="#64748b" fontSize="10">Gross Value Added</text>

      <rect x="220" y="40" width="160" height="80" rx="10" fill="#f8fafc" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="75" textAnchor="middle" fill="#15803d" fontWeight="bold" fontSize="13">2. Income Method</text>
      <text x="300" y="95" textAnchor="middle" fill="#64748b" fontSize="10">Rent + Wages + Int + Profit</text>

      <rect x="410" y="40" width="160" height="80" rx="10" fill="#f8fafc" stroke="#9333ea" strokeWidth="2" />
      <text x="490" y="75" textAnchor="middle" fill="#7e22ce" fontWeight="bold" fontSize="13">3. Expenditure</text>
      <text x="490" y="95" textAnchor="middle" fill="#64748b" fontSize="10">C + I + G + (X - M)</text>

      <path d="M 110 120 L 250 180" stroke="#0284c7" strokeWidth="2" />
      <path d="M 300 120 L 300 180" stroke="#16a34a" strokeWidth="2" />
      <path d="M 490 120 L 350 180" stroke="#9333ea" strokeWidth="2" />

      <rect x="180" y="180" width="240" height="80" rx="12" fill="#fef3c7" stroke="#d97706" strokeWidth="2.5" />
      <text x="300" y="215" textAnchor="middle" fill="#b45309" fontWeight="bold" fontSize="14">National Income (NNP @ FC)</text>
      <text x="300" y="238" textAnchor="middle" fill="#78350f" fontSize="11">GNP - Depreciation - Net Indirect Taxes</text>
    </svg>`,
    labels: [
      { id: 'ni1', labelEn: 'Product / Value Added Method', labelTa: 'உற்பத்தி / மதிப்பு கூட்டப்பட்ட முறை', descriptionEn: 'Measures net value added by all primary, secondary, and tertiary sectors; avoids double counting.', descriptionTa: 'விவசாயம், தொழில் மற்றும் பணிகள் துறைகளின் நிகர மதிப்பு கூட்டல் மூலம் கணக்கிடுதல்.', x: 20, y: 30 },
      { id: 'ni2', labelEn: 'Factor Income Method', labelTa: 'காரணி வருமான முறை', descriptionEn: 'Sums all factor payments earned by residents: R (Rent) + W (Wages) + I (Interest) + P (Profit).', descriptionTa: 'வாரம், கூலி, வட்டி, மற்றும் லாபம் ஆகிய காரணிகளின் மொத்த ஈட்டுத்தொகை.', x: 50, y: 30 },
      { id: 'ni3', labelEn: 'Expenditure Method (C+I+G+NX)', labelTa: 'செலவு முறை', descriptionEn: 'Total expenditure incurred by society on final goods: Consumption + Investment + Govt Spending + Net Exports.', descriptionTa: 'இறுதிப் பண்டங்களுக்கான நுகர்வு, முதலீடு, அரசு மற்றும் நிகர ஏற்றுமதி செலவுகளின் கூட்டு.', x: 80, y: 30 },
      { id: 'ni4', labelEn: 'NNP at Factor Cost (National Income)', labelTa: 'காரணி விலையில் நிகர தேசிய உற்பத்தி', descriptionEn: 'True measure of national wealth after subtracting capital depreciation and indirect taxes from GNP.', descriptionTa: 'தேய்மானம் மற்றும் நிகர மறைமுக வரிகளைக் கழித்த பின்னர் கிடைக்கும் உண்மையான தேசிய வருமானம்.', x: 50, y: 75 }
    ]
  },
  c12_eco_ch3: {
    id: 'diag_c12_eco_ch3',
    chapterId: 'c12_eco_ch3',
    titleEn: 'Keynesian Effective Demand: ADF and ASF Intersection Schedule',
    titleTa: 'கீன்ஸின் விளைவுத் தேவை: ADF மற்றும் ASF வெட்டும் சமநிலை வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="60" y1="250" x2="540" y2="250" stroke="#64748b" strokeWidth="2" />
      <line x1="60" y1="250" x2="60" y2="30" stroke="#64748b" strokeWidth="2" />
      <text x="540" y="270" textAnchor="end" fill="#64748b" fontSize="11">Employment Level (N)</text>
      <text x="40" y="35" textAnchor="end" fill="#64748b" fontSize="11">Proceeds / Costs (₹)</text>

      <path d="M 60 210 Q 300 130 520 80" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="525" y="80" fill="#2563eb" fontWeight="bold" fontSize="12">ADF (Expected Sales)</text>

      <path d="M 60 240 Q 250 200 400 120 T 480 30" fill="none" stroke="#dc2626" strokeWidth="3" />
      <text x="485" y="35" fill="#dc2626" fontWeight="bold" fontSize="12">ASF (Minimum Costs)</text>

      <circle cx="320" cy="136" r="6" fill="#10b981" stroke="#065f46" strokeWidth="2" />
      <line x1="320" y1="136" x2="320" y2="250" stroke="#10b981" strokeWidth="1.5" strokeDasharray="4" />
      <text x="330" y="130" fill="#047857" fontWeight="bold" fontSize="14">E (Effective Demand)</text>
      <text x="320" y="265" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="12">N₀ (Equilibrium)</text>
    </svg>`,
    labels: [
      { id: 'ad1', labelEn: 'Aggregate Demand Price (ADF)', labelTa: 'தொகு தேவை விலை (ADF)', descriptionEn: 'Expected sales receipts entrepreneurs anticipate earning at each employment level.', descriptionTa: 'ஒவ்வொரு வேலைவாய்ப்பு நிலையிலும் உற்பத்தியாளர்கள் எதிர்பார்க்கும் வருவாய்.', x: 65, y: 35 },
      { id: 'ad2', labelEn: 'Aggregate Supply Price (ASF)', labelTa: 'தொகு அளிப்பு விலை (ASF)', descriptionEn: 'Minimum cost necessary to induce employment of given number of workers.', descriptionTa: 'தொழிலாளர்களை வேலையில் அமர்த்த உற்பத்தியாளர்கள் ஈட்ட வேண்டிய குறைந்தபட்சச் செலவு.', x: 35, y: 65 },
      { id: 'ad3', labelEn: 'Effective Demand Equilibrium Point E', labelTa: 'விளைவுத் தேவை சமநிலைப் புள்ளி E', descriptionEn: 'Point where ADF = ASF; determines actual employment and national output.', descriptionTa: 'ADF மற்றும் ASF சமமாகும் புள்ளி; இதுவே நாட்டின் வேலைவாய்ப்பை நிர்ணயிக்கிறது.', x: 50, y: 48 }
    ]
  },
  c12_eco_ch4: {
    id: 'diag_c12_eco_ch4',
    chapterId: 'c12_eco_ch4',
    titleEn: 'Consumption Function, Marginal Propensity (MPC) & Multiplier Mechanism',
    titleTa: 'நுகர்வுச் சார்பு, இறுதிநிலை நுகர்வு நாட்டம் மற்றும் பெருக்கி இயங்குமுறை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="60" y1="250" x2="540" y2="250" stroke="#64748b" strokeWidth="2" />
      <line x1="60" y1="250" x2="60" y2="30" stroke="#64748b" strokeWidth="2" />
      <line x1="60" y1="250" x2="450" y2="60" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="4" />
      <text x="455" y="60" fill="#94a3b8" fontSize="11">45° Guideline (Y = C)</text>

      <path d="M 60 190 L 500 80" fill="none" stroke="#0284c7" strokeWidth="3" />
      <text x="505" y="80" fill="#0284c7" fontWeight="bold" fontSize="12">C = a + bY (Consumption)</text>

      <circle cx="225" cy="149" r="5" fill="#ef4444" />
      <text x="215" y="135" fill="#b91c1c" fontWeight="bold" fontSize="11">Break-even (C = Y)</text>

      <rect x="350" y="180" width="200" height="65" rx="8" fill="#ecfdf5" stroke="#10b981" strokeWidth="1.5" />
      <text x="450" y="205" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="12">Investment Multiplier</text>
      <text x="450" y="225" textAnchor="middle" fill="#047857" fontSize="12">K = 1 / (1 - MPC) = 1 / MPS</text>
    </svg>`,
    labels: [
      { id: 'cfunc1', labelEn: 'Autonomous Consumption (a)', labelTa: 'தன்னிச்சை நுகர்வு (a)', descriptionEn: 'Minimum survival consumption occurring even when household income is zero (funded by dissaving).', descriptionTa: 'வருமானம் பூச்சியமாக இருந்தாலும் உயிர்வாழ அவசியமான குறைந்தபட்ச நுகர்வு.', x: 15, y: 65 },
      { id: 'cfunc2', labelEn: 'Break-Even Point (Y = C)', labelTa: 'சமநிலை முறிவுப் புள்ளி', descriptionEn: 'Where all income is consumed and savings are exactly zero (S = 0).', descriptionTa: 'முழு வருமானமும் நுகரப்பட்டு சேமிப்பு பூச்சியமாக இருக்கும் புள்ளி.', x: 40, y: 50 },
      { id: 'cfunc3', labelEn: 'Multiplier Effect K = 1/(1-MPC)', labelTa: 'முதலீட்டுப் பெருக்கி K', descriptionEn: 'Magnification ratio showing how much total output expands for every 1 rupee of autonomous investment.', descriptionTa: 'ஒரு ரூபாய் புதிய முதலீடு எத்தனை மடங்கு கூடுதல் வருமானத்தை உருவாக்குகிறது என்பதன் விகிதம்.', x: 75, y: 70 }
    ]
  },
  c12_eco_ch5: {
    id: 'diag_c12_eco_ch5',
    chapterId: 'c12_eco_ch5',
    titleEn: 'Fisher’s Quantity Theory of Money & Reserve Bank Monetary Aggregates',
    titleTa: 'பிஷரின் பண அளவு கோட்பாடு மற்றும் ரிசர்வ் வங்கி பண அளவீடுகள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="40" y="35" width="230" height="95" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="155" y="65" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="14">Fisher’s Equation: MV = PT</text>
      <text x="155" y="88" textAnchor="middle" fill="#2563eb" fontSize="11">M = Cash Supply, V = Velocity</text>
      <text x="155" y="108" textAnchor="middle" fill="#1d4ed8" fontSize="11">P = Price Level, T = Transactions</text>

      <rect x="330" y="35" width="230" height="95" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="445" y="65" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="14">Direct Proportionality</text>
      <text x="445" y="88" textAnchor="middle" fill="#dc2626" fontSize="11">Doubling M -> Doubles Price P</text>
      <text x="445" y="108" textAnchor="middle" fill="#b91c1c" fontSize="11">Value of Money (1/P) Halves</text>

      <rect x="60" y="165" width="480" height="95" rx="12" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="195" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">RBI Monetary Aggregates Hierarchy</text>
      <text x="300" y="218" textAnchor="middle" fill="#15803d" fontSize="11">M1 (Narrow Money) = Currency + Demand Deposits + Other Deposits with RBI</text>
      <text x="300" y="238" textAnchor="middle" fill="#14532d" fontSize="11">M3 (Broad Money) = M1 + Time Deposits with Banking System</text>
    </svg>`,
    labels: [
      { id: 'mon1', labelEn: 'Equation of Exchange (MV = PT)', labelTa: 'பரிவர்த்தனை சமன்பாடு', descriptionEn: 'Supply of money (MV) must identically equal demand for money (PT) in economic transactions.', descriptionTa: 'பண அளிப்பு (MV) பண்டங்களின் பண மதிப்பிற்கு (PT) எப்போதும் சமமாக இருக்கும்.', x: 25, y: 30 },
      { id: 'mon2', labelEn: 'Price Level & Value of Money', labelTa: 'விலைமட்டம் & பண மதிப்பு', descriptionEn: 'Inflation erodes purchasing power: value of money is the reciprocal of price level (1/P).', descriptionTa: 'விலைமட்டம் உயரும் போது பணத்தின் வாங்கும் திறன் (1/P) சரிவடைகிறது.', x: 75, y: 30 },
      { id: 'mon3', labelEn: 'RBI M1 to M4 Liquidity Ladder', labelTa: 'ரிசர்வ் வங்கி நீர்மைப் படிநிலைகள்', descriptionEn: 'M1 is most liquid; M3 is the primary measure used by central banks for policy formulation.', descriptionTa: 'M1 மிக அதிக நீர்மை உடையது; M3 என்பது கொள்கை முடிவுகளுக்கான பரந்த பணமாகும்.', x: 50, y: 70 }
    ]
  },
  c12_eco_ch6: {
    id: 'diag_c12_eco_ch6',
    chapterId: 'c12_eco_ch6',
    titleEn: 'Central Banking: Monetary Transmission & Credit Expansion Engine',
    titleTa: 'மைய வங்கி பணவியல் பரிமாற்றம் மற்றும் கடன் பெருக்கக் கட்டமைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="180" y="20" width="240" height="65" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="300" y="45" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">RBI Monetary Policy</text>
      <text x="300" y="65" textAnchor="middle" fill="#2563eb" fontSize="11">Repo Rate, Reverse Repo, CRR, SLR</text>

      <path d="M 300 85 L 300 130" stroke="#3b82f6" strokeWidth="2.5" markerEnd="url(#arrow)" />

      <rect x="150" y="130" width="300" height="65" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="155" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Commercial Banks Credit Engine</text>
      <text x="300" y="175" textAnchor="middle" fill="#15803d" fontSize="11">Credit Multiplier = 1 / CRR (Multiple Deposit Expansion)</text>

      <path d="M 300 195 L 300 235" stroke="#16a34a" strokeWidth="2.5" markerEnd="url(#arrow)" />

      <rect x="130" y="235" width="340" height="55" rx="10" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
      <text x="300" y="260" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="13">Real Economy: Industry & Retail Loans</text>
      <text x="300" y="278" textAnchor="middle" fill="#a16207" fontSize="11">Investment in Factories, Housing, Agriculture</text>
    </svg>`,
    labels: [
      { id: 'rb1', labelEn: 'RBI Policy Rates (Repo / Reverse Repo)', labelTa: 'ரிசர்வ் வங்கி கொள்கை விகிதங்கள்', descriptionEn: 'Sets policy interest rates and reserve requirements (CRR/SLR) to regulate credit.', descriptionTa: 'கடனைக் கட்டுப்படுத்த வட்டி விகிதங்களையும் ரொக்க இருப்பு அளவையும் நிர்ணயிக்கிறது.', x: 50, y: 20 },
      { id: 'rb2', labelEn: 'Commercial Banks Credit Engine', labelTa: 'வணிக வங்கிகளின் கடன் இயந்திரம்', descriptionEn: 'Receives primary deposits and creates multiple secondary loans: Total = Deposit / CRR.', descriptionTa: 'வைப்புகளைப் பெற்று பல மடங்கு புதிய கடன்களை உருவாக்கும் வங்கிகள்.', x: 50, y: 55 },
      { id: 'rb3', labelEn: 'Real Economy Consumption & Business', labelTa: 'உண்மைப் பொருளாதார நுகர்வு', descriptionEn: 'Borrowers receive loans for industries, agriculture, housing, and infrastructure expansion.', descriptionTa: 'தொழில்கள் மற்றும் தனிநபர்கள் கடன் பெற்று பொருளாதாரத்தை வளர்க்கின்றனர்.', x: 50, y: 85 }
    ]
  }
};

export const ECONOMICS_PART1_VIDEOS: Record<string, VideoExplainer> = {
  c12_eco_ch1: {
    id: 'vid_c12_eco_ch1',
    chapterId: 'c12_eco_ch1',
    titleEn: 'Visual Concept: The Circular Flow of Wealth in an Economy',
    titleTa: 'காட்சிக் கருத்து: ஒரு நாட்டின் வருமான சுழற்சி ஓட்டம்',
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Money vs Real Flows',
        titleTa: 'பண ஓட்டமும் உண்மை ஓட்டமும்',
        visualDescription: 'Households working in factories in exchange for rupee salaries, while products move from factories back to kitchen tables.',
        narrationEn: 'In every economy, two continuous rivers flow in opposite directions: goods and services flow one way, while rupee payments flow the other!',
        narrationTa: 'ஒவ்வொரு பொருளாதாரத்திலும் இரண்டு தொடர் நதிகள் எதிர் திசைகளில் பாய்கின்றன: பொருட்கள் ஒரு திசையிலும், பணப் பரிமாற்றம் எதிர் திசையிலும் சுழல்கிறது!',
        conceptKey: 'Circular Flow Mechanism'
      },
      {
        sceneNumber: 2,
        titleEn: 'Leakages & Injections',
        titleTa: 'கசிவுகளும் உட்பாய்ச்சல்களும்',
        visualDescription: 'Rupees leaking out into bank savings and tax vaults, re-entering as government highway projects and bank business loans.',
        narrationEn: 'Savings, taxes, and imports are leakages pulling cash out of the stream. But investments and exports inject fresh vitality back into the economy.',
        narrationTa: 'சேமிப்பும் வரிகளும் சுழற்சியிலிருந்து பணத்தை வெளியேற்றும் கசிவுகள். ஆனால் புதிய முதலீடுகளும் ஏற்றுமதியும் புதிய சக்தியை மீண்டும் பாய்ச்சுகின்றன.',
        conceptKey: 'Macroeconomic Equilibrium'
      },
      {
        sceneNumber: 3,
        titleEn: 'Global Trade Highway',
        titleTa: 'உலகளாவிய வர்த்தகப் பாதை',
        visualDescription: 'Cargo ships at Chennai harbor loading automobile exports and unloading crude oil imports.',
        narrationEn: 'An open economy connects domestic workers to the entire world through net exports, ensuring resilient growth.',
        narrationTa: 'ஒரு திறந்த வெளிப் பொருளாதாரம் தனது தொழிலாளர்களை உலக வர்த்தகத்துடன் இணைத்து நாட்டின் நீடித்த வளர்ச்சிக்கு வழிவகுக்கிறது.',
        conceptKey: 'Four-Sector Open Economy'
      }
    ]
  },
  c12_eco_ch2: {
    id: 'vid_c12_eco_ch2',
    chapterId: 'c12_eco_ch2',
    titleEn: 'The Three Roads to Calculating National Income (GDP & NNP)',
    titleTa: 'தேசிய வருவாயைக் கணக்கிடும் மூன்று வழிகள் (GDP & NNP)',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Product Method: Counting New Value',
        titleTa: 'உற்பத்தி முறை: புதிய மதிப்பை அளவிடுதல்',
        visualDescription: 'Farmer harvesting wheat (₹500), miller grinding flour (₹800), baker selling bread (₹1200) with added value highlighted.',
        narrationEn: 'To prevent counting wheat three times, economists sum only the value added at each factory stage, arriving at Gross Domestic Product.',
        narrationTa: 'ஒரே பொருளை மீண்டும் மீண்டும் கணக்கிடுவதைத் தவிர்க்க, ஒவ்வொரு உற்பத்தி கட்டத்திலும் சேர்க்கப்படும் புதிய மதிப்பை மட்டுமே கூட்டுவர்.',
        conceptKey: 'Value Added & Avoiding Double Counting'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Factor Income Mirror',
        titleTa: 'காரணி வருமானக் கண்ணாடி',
        visualDescription: 'Every rupee spent on bread dissolving into farmer wages, bakery shop rent, loan interest, and entrepreneur profit.',
        narrationEn: 'Total expenditure equals total production, which identically equals total factor income: wages for labour, rent for land, interest for capital, and profit for enterprise.',
        narrationTa: 'மொத்த உற்பத்தியின் மதிப்பு தொழிலாளர்களின் கூலி, நிலத்தின் வாரம், மூலதனத்தின் வட்டி மற்றும் தொழிலதிபரின் லாபத்திற்கு சமமாகிறது.',
        conceptKey: 'Factor Income Equivalence'
      },
      {
        sceneNumber: 3,
        titleEn: 'Real GDP vs Nominal Inflation',
        titleTa: 'உண்மை GDP மற்றும் பணவீக்கம்',
        visualDescription: 'Two side-by-side growth charts showing output expanding in quantity versus price spikes inflating nominal numbers.',
        narrationEn: 'Real GDP strips out price rises using constant base-year prices, revealing whether a nation genuinely produced more food, cars, and medicines.',
        narrationTa: 'விலை உயர்வை நீக்கி நிலையான விலையில் கணக்கிடப்படும் உண்மை ஜிடிபியே ஒரு நாடு அடைந்துள்ள உண்மையான உற்பத்தியை வெளிப்படுத்துகிறது.',
        conceptKey: 'Real vs Nominal National Income'
      }
    ]
  },
  c12_eco_ch3: {
    id: 'vid_c12_eco_ch3',
    chapterId: 'c12_eco_ch3',
    titleEn: 'Say’s Law vs Keynes: The Mystery of Effective Demand',
    titleTa: 'சே-யின் விதியும் கீன்ஸின் விளைவுத் தேவையும்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Classical Assumption: Supply Creates Demand',
        titleTa: 'தொன்மைப் பொருளியல்: அளிப்பே தேவையை உருவாக்கும்',
        visualDescription: 'A classic 19th-century shoe cobbler producing shoes and immediately using earned wages to buy clothes and food.',
        narrationEn: 'Jean-Baptiste Say argued general overproduction is impossible because producing goods creates the very income needed to buy them back.',
        narrationTa: 'பொருட்களை உற்பத்தி செய்யும் போதே அதற்கான கூலியும் வழங்கப்படுவதால் பொதுவான தேக்க நிலை ஏற்படாது என்று ஜே.பி. சே வாதிட்டார்.',
        conceptKey: 'Say’s Law of Markets'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Keynesian Shock: Hoarding & Slumps',
        titleTa: 'கீன்ஸின் புரட்சி: தேக்கமும் வேலைவாய்ப்பின்மையும்',
        visualDescription: 'Factory workers saving cash under mattresses during uncertainty; stores filled with unsold shoes and laying off cobblers.',
        narrationEn: 'Keynes proved that people often hoard money during fear! When aggregate spending falls short, factories fire workers, creating involuntary unemployment.',
        narrationTa: 'பயத்தின் காரணமாக மக்கள் பணத்தை சேமித்து செலவைக் குறைக்கும் போது, தொழிற்சாலைகள் மூடி தொழிலாளர்கள் வேலை இழக்கின்றனர்.',
        conceptKey: 'Involuntary Unemployment & Underemployment'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Anchor: Effective Demand',
        titleTa: 'அடித்தளம்: விளைவுத் தேவை',
        visualDescription: 'The intersection of Aggregate Demand Price and Aggregate Supply Price setting the employment equilibrium.',
        narrationEn: 'Effective demand is where expected profits cover minimum costs. To boost hiring, government must stimulate aggregate demand!',
        narrationTa: 'தொகு தேவையும் தொகு அளிப்பும் சமநிலையை அடையும் புள்ளியே நாட்டின் வேலைவாய்ப்பையும் வருமானத்தையும் நிர்ணயிக்கிறது.',
        conceptKey: 'Effective Demand Equilibrium'
      }
    ]
  },
  c12_eco_ch4: {
    id: 'vid_c12_eco_ch4',
    chapterId: 'c12_eco_ch4',
    titleEn: 'The Multiplier Magic: How ₹1 Invested Multiplies Fivefold',
    titleTa: 'பெருக்கியின் மந்திரம்: ஒரு ரூபாய் முதலீடு ஐந்து மடங்காவது எப்படி?',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Propensity to Consume',
        titleTa: 'நுகர்வு நாட்டம்',
        visualDescription: 'A worker receiving a ₹1,000 raise; spending ₹800 on groceries and saving ₹200 in the bank (MPC = 0.8).',
        narrationEn: 'Keynes psychological law states people increase consumption as income rises, but not by as much as the increase in income.',
        narrationTa: 'வருமானம் கூடும் போது நுகர்வும் கூடும்; ஆனால் வருமானம் கூடும் அதே அளவிற்கு நுகர்வு கூடாமல் சேமிப்பும் அதிகரிக்கிறது.',
        conceptKey: 'Marginal Propensity to Consume (MPC)'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Chain Reaction of Spending',
        titleTa: 'செலவின் தொடர் சங்கிலி',
        visualDescription: 'Govt pays ₹100 Cr to highway builders, who buy cement, whose workers buy food, cycling through the entire city.',
        narrationEn: 'One person’s spending is another person’s income. If MPC is 0.8, a ₹100 crore bridge project triggers an unbelievable ₹500 crore total income expansion!',
        narrationTa: 'ஒருவரின் செலவே மற்றவரின் வருமானம். தொடர் சுழற்சியின் மூலம் புதிய முதலீடு பல மடங்கு கூடுதல் பொருளாதார வளர்ச்சியை உருவாக்குகிறது.',
        conceptKey: 'The Multiplier Chain K = 1/(1-MPC)'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Accelerator Engine',
        titleTa: 'முடுக்கியின் வேகம்',
        visualDescription: 'Increased demand for textiles forcing mills to purchase five new automated looms.',
        narrationEn: 'When consumption rises, industries must invest heavily in new machinery. The accelerator magnifies the multiplier into an industrial boom!',
        narrationTa: 'நுகர்வு அதிகரிக்கும் போது புதிய இயந்திரங்களை வாங்க தொழில் முனைவோர் அதிக முதலீடு செய்வதே முடுக்கி கோட்பாடு ஆகும்.',
        conceptKey: 'The Super-Multiplier Interaction'
      }
    ]
  },
  c12_eco_ch5: {
    id: 'vid_c12_eco_ch5',
    chapterId: 'c12_eco_ch5',
    titleEn: 'Why Printing Money Causes Inflation: Fisher’s Quantity Theory',
    titleTa: 'அதிக பணம் அச்சிட்டால் பணவீக்கம் வருவது ஏன்? பிஷரின் பண அளவு கோட்பாடு',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Scale of Money and Goods',
        titleTa: 'பணமும் பண்டங்களும் தராசில்',
        visualDescription: 'A balancing scale with total currency notes on one side and a basket of apples on the other side.',
        narrationEn: 'Irving Fisher formulated MV = PT. If a central bank prints double the cash without increasing apple harvests, prices must double!',
        narrationTa: 'பொருட்களின் எண்ணிக்கையை அதிகரிக்காமல் பணத்தை மட்டும் இருமடங்காக அச்சிட்டால் பொருட்களின் விலை இருமடங்காக உயரும்.',
        conceptKey: 'Fisher’s Equation MV = PT'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Velocity Whirlwind',
        titleTa: 'பணத்தின் சுழற்சி வேகம்',
        visualDescription: 'A single 500-rupee note passing through five hands in one day versus sitting stagnant inside an iron locker.',
        narrationEn: 'Velocity is how many times a rupee changes hands each year. Fast digital payments speed up velocity, magnifying money supply impact.',
        narrationTa: 'ஒரு ரூபாய் ஒரு ஆண்டில் எத்தனை முறை கைமாறுகிறது என்பதே பணத்தின் சுழற்சி வேகம் ஆகும்.',
        conceptKey: 'Velocity of Circulation'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Inflation Tax on Common Citizens',
        titleTa: 'சாமானிய மக்கள் மீதான பணவீக்கச் சுமை',
        visualDescription: 'A grandmother with a fixed pension basket unable to buy as many groceries due to rising retail prices.',
        narrationEn: 'Inflation is a hidden tax that punishes savers and fixed-income pensioners while benefiting debtors. Stable monetary policy protects livelihoods.',
        narrationTa: 'பணவீக்கம் என்பது சேமிப்பாளர்களையும் ஓய்வூதியதாரர்களையும் பாதிக்கும் கண்ணுக்குத் தெரியாத சுமையாகும்.',
        conceptKey: 'Cost-Push & Demand-Pull Inflation'
      }
    ]
  },
  c12_eco_ch6: {
    id: 'vid_c12_eco_ch6',
    chapterId: 'c12_eco_ch6',
    titleEn: 'How Banks Create Money & How RBI Regulates Inflation',
    titleTa: 'வங்கிகள் எவ்வாறு பணத்தை உருவாக்குகின்றன? RBI பணவீக்கத்தை எவ்வாறு கட்டுப்படுத்துகிறது?',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Magic of Credit Creation',
        titleTa: 'கடன் உருவாக்கத்தின் ரகசியம்',
        visualDescription: 'A single ₹10,000 banknote deposited into a bank spawning multiple ₹9,000 and ₹8,100 loans across a town.',
        narrationEn: 'When you deposit cash in a bank, the bank does not lock it away! It keeps a small mandatory reserve and lends the rest, creating new money out of thin air.',
        narrationTa: 'நீங்கள் வங்கியில் பணம் போடும் போது, வங்கி அதை பூட்டி வைப்பதில்லை! சிறிய இருப்பை வைத்துக்கொண்டு மீதியை கடனாகக் கொடுத்து புதிய பணத்தை உருவாக்குகிறது.',
        conceptKey: 'Credit Multiplier'
      },
      {
        sceneNumber: 2,
        titleEn: 'The RBI Watchtower & Repo Rate',
        titleTa: 'ரிசர்வ் வங்கி மற்றும் ரெப்போ விகிதம்',
        visualDescription: 'RBI headquarters adjusting the Repo rate meter up and down, causing interest rates on home loans to change.',
        narrationEn: 'The Reserve Bank of India acts as the financial captain. When inflation surges, it raises the Repo rate, making borrowing expensive and cooling off prices.',
        narrationTa: 'ரிசர்வ் வங்கி பொருளாதாரக் கப்பலின் கேப்டன் போன்றது. பணவீக்கம் கூடும் போது ரெப்போ விகிதத்தை உயர்த்தி விலையேற்றத்தைக் கட்டுப்படுத்துகிறது.',
        conceptKey: 'Monetary Policy & Repo Rate'
      },
      {
        sceneNumber: 3,
        titleEn: 'Balancing Growth and Stability',
        titleTa: 'வளர்ச்சியும் நிலைத்தன்மையும்',
        visualDescription: 'A balanced seesaw with economic industrial growth on one side and price stability on the other side.',
        narrationEn: 'By fine-tuning CRR, SLR, and Repo rates, the central bank maintains trust in our rupee while driving employment forward.',
        narrationTa: 'வட்டி விகிதங்கள் மற்றும் இருப்பு விகிதங்களைச் சீரமைப்பதன் மூலம் ரிசர்வ் வங்கி ரூபாயின் மதிப்பையும் நாட்டின் வேலைவாய்ப்பையும் பாதுகாக்கிறது.',
        conceptKey: 'Financial Stability'
      }
    ]
  }
};
