import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Economics - Part 2 (Chapters 7 to 12)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 7. International Economics (பன்னாட்டுப் பொருளியல்)
 * 8. International Economic Organisations (பன்னாட்டுப் பொருளாதார அமைப்புகள்)
 * 9. Fiscal Economics (நிதியியல் பொருளியல்)
 * 10. Environmental Economics (சுற்றுச்சூழல் பொருளியல்)
 * 11. Economics of Development and Planning (பொருளாதார மேம்பாடு மற்றும் திட்டமிடல்)
 * 12. Introduction to Statistical Methods and Econometrics (புள்ளியியல் முறைகள் மற்றும் பொருளாதார அளவையியல் ஓர் அறிமுகம்)
 */

export const ECONOMICS_PART2_CHAPTERS: Chapter[] = [
  {
    id: 'c12_eco_ch7',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 7,
    titleEn: 'Chapter 7: International Economics',
    titleTa: 'அலகு 7: பன்னாட்டுப் பொருளியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch8',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 8,
    titleEn: 'Chapter 8: International Economic Organisations',
    titleTa: 'அலகு 8: பன்னாட்டுப் பொருளாதார அமைப்புகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch9',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 9,
    titleEn: 'Chapter 9: Fiscal Economics',
    titleTa: 'அலகு 9: நிதியியல் பொருளியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch10',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 10,
    titleEn: 'Chapter 10: Environmental Economics',
    titleTa: 'அலகு 10: சுற்றுச்சூழல் பொருளியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch11',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 11,
    titleEn: 'Chapter 11: Economics of Development and Planning',
    titleTa: 'அலகு 11: பொருளாதார மேம்பாடு மற்றும் திட்டமிடல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_eco_ch12',
    classLevel: 12,
    subjectId: 'c12_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Trade, Finance & Development Planning',
    unitNameTa: 'பகுதி 2: வாணிபம், நிதியியல் & வளர்ச்சித் திட்டமிடல்',
    chapterNumber: 12,
    titleEn: 'Chapter 12: Introduction to Statistical Methods and Econometrics',
    titleTa: 'அலகு 12: புள்ளியியல் முறைகள் மற்றும் பொருளாதார அளவையியல் ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const ECONOMICS_PART2_NOTES: Record<string, NoteItem> = {
  c12_eco_ch7: {
    id: 'note_c12_eco_ch7',
    chapterId: 'c12_eco_ch7',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'International Economics: Comparative Cost, Terms of Trade & BOP',
    titleTa: 'பன்னாட்டுப் பொருளியல்: ஒப்பிட்டுச் செலவுக் கோட்பாடு, வாணிப வீதம் மற்றும் அயல்நாட்டுச் செலுத்து சமநிலை',
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
    changeNote: 'Ricardo comparative advantage and BOP current/capital accounts detailed.',
    changeNoteTa: 'ரிக்கார்டோவின் ஒப்பீட்டுச் செலவுக் கோட்பாடு மற்றும் BOP கணக்குகள் விவரிக்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Theories of International Trade
- **Adam Smith’s Absolute Cost Advantage Theory (1776):** A nation exports commodities it can produce at an absolute lower labor cost compared to another nation, and imports goods it produces at higher absolute costs.
- **David Ricardo’s Comparative Cost Theory (1817):** Even if one country produces *both* goods more cheaply than another, mutually beneficial trade can still take place if each country specializes in the good where it holds a **comparative advantage** (greatest comparative margin of superiority or least comparative disadvantage).

### 2. Terms of Trade (TOT)
The rate at which a nation’s export goods exchange for its import goods:
- **Net Barter Terms of Trade ($T_n$):**
  $$T_n = \\frac{P_x}{P_m} \\times 100$$
  where $P_x$ is index of export prices and $P_m$ is index of import prices.
- **Gross Barter Terms of Trade ($T_g$):**
  $$T_g = \\frac{Q_m}{Q_x} \\times 100$$
- **Income Terms of Trade ($T_y$):**
  $$T_y = T_n \\times Q_x = \\frac{P_x}{P_m} \\times Q_x$$

### 3. Balance of Trade (BOT) vs Balance of Payments (BOP)
- **Balance of Trade (BOT):** Difference between the total money value of visible merchandise exports and visible imports. Excludes invisible service transactions.
  $$\\text{BOT} = \\text{Visible Exports} - \\text{Visible Imports}$$
- **Balance of Payments (BOP):** Comprehensive systematic record of all economic transactions between residents of a country and the rest of the world during a given period:
  1. **Current Account:** Merchandise trade, services (IT, tourism, transport), investment income, unilateral transfer remittances.
  2. **Capital Account:** Foreign Direct Investment (FDI), Foreign Portfolio Investment (FPI), external commercial borrowings, banking capital.
  3. **Official Reserve Settlement Account:** Gold, foreign exchange, and SDR movements by the central bank.`,
    bodyTa: `### 1. பன்னாட்டு வாணிபக் கோட்பாடுகள்
- **ஆடம் ஸ்மித்தின் முழு அடக்கச் செலவுக் கோட்பாடு:** ஒரு நாடு எந்தப் பண்டத்தை மிகக் குறைந்த செலவில் உற்பத்தி செய்ய முடிகிறதோ அதை ஏற்றுமதி செய்து, அதிக செலவாகும் பண்டத்தை இறக்குமதி செய்ய வேண்டும்.
- **டேவிட் ரிக்கார்டோவின் ஒப்பீட்டுச் செலவுக் கோட்பாடு:** ஒரு நாடு இரு பண்டங்களையுமே குறைந்த செலவில் உற்பத்தி செய்ய முடிந்தாலும், ஒப்பீட்டளவில் அதிக சாதகமான பண்டத்தை உற்பத்தி செய்து வர்த்தகம் புரிவதன் மூலம் இரு நாடுகளுமே பயனடையும்.

### 2. வாணிப வீதம் (Terms of Trade)
பண்ட மாற்று வாணிப வீதம்:
$$T_n = \\frac{P_x}{P_m} \\times 100$$
வருமான வாணிப வீதம்: $T_y = \\frac{P_x}{P_m} \\times Q_x$.

### 3. வாணிபச் சமநிலை (BOT) vs அயல்நாட்டுச் செலுத்து சமநிலை (BOP)
- **வாணிபச் சமநிலை (BOT):** புலனாகும் பண்டங்களின் ஏற்றுமதி மற்றும் இறக்குமதிக்கு இடையேயான வேறுபாடு (பணிகள் சேர்க்கப்படுவதில்லை).
- **அயல்நாட்டுச் செலுத்து சமநிலை (BOP):** ஒரு நாட்டின் குடிமக்களுக்கும் உலகின் பிற நாடுகளுக்கும் இடையே நடைபெறும் அனைத்துப் பொருளாதாரப் பரிவர்த்தனைகளின் முறையான கணக்கு:
  - நடப்புக் கணக்கு (பண்டங்கள், பணிகள், ஒருதலைப் பரிமாற்றங்கள்).
  - மூலதனக் கணக்கு (நேரடி அன்னிய முதலீடு, கடன்கள்).
  - மைய வங்கியின் கையிருப்பு கணக்கு.`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced BOP equilibrium correction mechanisms.', changeNoteTa: 'செலுத்து சமநிலை சரிசெய்தல் வழிமுறைகள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Net Barter Terms of Trade', nameTa: 'நிகர பண்ட மாற்று வாணிப வீதம்', formula: 'T_n = \\frac{P_x}{P_m} \\times 100', explanationEn: 'Ratio of export price index to import price index.', explanationTa: 'ஏற்றுமதி விலை குறியீட்டிற்கும் இறக்குமதி விலை குறியீட்டிற்கும் உள்ள விகிதம்.' },
      { nameEn: 'Balance of Trade Equilibrium', nameTa: 'வாணிபச் சமநிலை சூத்திரம்', formula: '\\text{BOT} = \\text{Exports (Goods)} - \\text{Imports (Goods)}', explanationEn: 'Considers only visible physical goods transactions.', explanationTa: 'புலனாகும் பண்டங்களின் பரிவர்த்தனையை மட்டுமே கருத்தில் கொள்கிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'If export price index Px is 120 and import price index Pm is 150, calculate the Net Barter Terms of Trade.',
        questionTa: 'ஏற்றுமதி விலைக் குறியீடு 120 மற்றும் இறக்குமதி விலைக் குறியீடு 150 எனில் பண்ட மாற்று வாணிப வீதத்தைக் காண்க.',
        solutionEn: '1. Formula: Tn = (Px / Pm) * 100.\n2. Tn = (120 / 150) * 100 = 0.8 * 100 = 80.\n3. Since Tn < 100, the terms of trade are unfavorable to the nation.',
        solutionTa: '1. Tn = (120 / 150) * 100 = 80.\n2. Tn < 100 என்பதால் வாணிப வீதம் அந்நாட்டிற்கு சாதகமற்றதாக உள்ளது.'
      }
    ]
  },

  c12_eco_ch8: {
    id: 'note_c12_eco_ch8',
    chapterId: 'c12_eco_ch8',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'International Economic Organisations: IMF, World Bank, WTO & BRICS',
    titleTa: 'பன்னாட்டுப் பொருளாதார அமைப்புகள்: IMF, உலக வங்கி, WTO மற்றும் பிரிக்ஸ்',
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
    changeNote: 'Updated Bretton Woods twins profiles, WTO TRIPS/TRIMS, and BRICS New Development Bank.',
    changeNoteTa: 'பிரெட்டன் வூட்ஸ் இரட்டையர்கள், WTO மற்றும் பிரிக்ஸ் வங்கி விவரங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 17,
    bodyEn: `### 1. The Bretton Woods Twins (1944)
Formulated at the UN Monetary and Financial Conference in Bretton Woods, New Hampshire, USA:
1. **International Monetary Fund (IMF):**
   - Established to ensure international monetary stability, facilitate balanced growth of international trade, and provide short-term financial assistance to member nations facing temporary balance of payments deficits.
   - **Special Drawing Rights (SDRs):** Created in 1969 as an international reserve asset ('Paper Gold'). Basket includes US Dollar, Euro, Chinese Renminbi, Japanese Yen, and British Pound Sterling.
2. **International Bank for Reconstruction and Development (IBRD - World Bank):**
   - Provides long-term loans for reconstruction of war-damaged economies and long-term development of infrastructure (dams, electricity, roads, schools).
   - **World Bank Group Affiliates:**
     - IDA (International Development Association - "Soft Loan Window")
     - IFC (International Finance Corporation)
     - MIGA (Multilateral Investment Guarantee Agency)
     - ICSID (International Centre for Settlement of Investment Disputes).

### 2. World Trade Organization (WTO)
Formed on January 1, 1995, as the successor to GATT (General Agreement on Tariffs and Trade) following the Marrakesh Agreement. Headquartered in Geneva, Switzerland.
- **Pillars:** Administers trade agreements, settles international trade disputes, ensures non-discrimination (Most Favoured Nation - MFN principle).
- **Key Agreements:**
  - TRIPS (Trade-Related Aspects of Intellectual Property Rights: Patents, Copyrights, Trademarks).
  - TRIMS (Trade-Related Investment Measures).
  - GATS (General Agreement on Trade in Services).

### 3. Regional Blocs: SAARC, ASEAN, and BRICS
- **SAARC:** South Asian Association for Regional Cooperation (8 member nations, established 1985).
- **ASEAN:** Association of Southeast Asian Nations (10 member nations, established 1967).
- **BRICS:** Brazil, Russia, India, China, and South Africa. Established the **New Development Bank (NDB)** headquartered in Shanghai.`,
    bodyTa: `### 1. பிரெட்டன் வூட்ஸ் இரட்டையர்கள் (1944)
1. **பன்னாட்டு பண நிதியம் (IMF):**
   - உறுப்பு நாடுகளின் தற்காலிக செலுத்து சமநிலை பற்றாக்குறையைச் சரிசெய்ய குறுகிய காலக் கடன்களை வழங்குகிறது.
   - சிறப்பு எடுப்பு உரிமைகள் (SDR - Paper Gold): டாலர், யூரோ, யுவான், யென், பவுண்ட் அடங்கிய பணக் கூடை.
2. **உலக வங்கி (IBRD):**
   - நீண்ட கால வளர்ச்சி மற்றும் உள்கட்டமைப்பு பணிகளுக்கு (சாலைகள், பாலங்கள், கல்வி) கடன்களை வழங்குகிறது.
   - மென் கடன் சாளரம்: சர்வதேச வளர்ச்சி சங்கம் (IDA).

### 2. உலக வர்த்தக அமைப்பு (WTO)
1995 ஜனவரி 1-ல் GATT-க்கு மாற்றாக சுவிட்சர்லாந்தின் ஜெனீவா நகரில் நிறுவப்பட்டது.
- TRIPS (அறிவுசார் சொத்துரிமை தொடர்பான வர்த்தகம்).
- TRIMS (வர்த்தகம் தொடர்பான முதலீட்டு நடவடிக்கைகள்).
- GATS (பணிகள் வர்த்தகப் பொது ஒப்பந்தம்).

### 3. பிராந்திய அமைப்புகள்
- சார்க் (SAARC): தெற்காசிய நாடுகள் கூட்டமைப்பு (1985).
- ஆசியான் (ASEAN): தென்கிழக்காசிய நாடுகள் கூட்டமைப்பு (1967).
- பிரிக்ஸ் (BRICS): பிரேசில், ரஷ்யா, இந்தியா, சீனா, தென்னாப்பிரிக்கா. புதிய வளர்ச்சி வங்கியை (NDB) ஷாங்காயில் அமைத்துள்ளது.`,
    revisions: [
      { version: '2.3', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Updated BRICS expansion details.', changeNoteTa: 'பிரிக்ஸ் புதிய உறுப்பினர் விரிவாக்க குறிப்புகள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'SDR Valuation Basket Composition', nameTa: 'SDR பணக் கூடை மதிப்பீடு', formula: '\\text{SDR} = f(\\text{USD}, \\text{EUR}, \\text{CNY}, \\text{JPY}, \\text{GBP})', explanationEn: 'Weighted average of the world’s top 5 reserve currencies.', explanationTa: 'உலகின் முன்னணி ஐந்து நாணயங்களின் சராசரி மதிப்பு.' }
    ],
    workedExamples: [
      {
        questionEn: 'Differentiate between the primary lending role of the IMF and the World Bank.',
        questionTa: 'பன்னாட்டு பண நிதியம் (IMF) மற்றும் உலக வங்கியின் (World Bank) முதன்மைக் கடன் பணிகளை வேறுபடுத்துக.',
        solutionEn: '1. IMF provides SHORT-TERM loans specifically to address temporary balance of payments deficits.\n2. World Bank provides LONG-TERM loans for infrastructure, capital formation, and poverty alleviation.',
        solutionTa: '1. IMF தற்காலிக செலுத்து சமநிலைப் பற்றாக்குறையைத் தீர்க்க குறுகிய காலக் கடன் வழங்குகிறது.\n2. உலக வங்கி உள்கட்டமைப்பு மற்றும் வளர்ச்சித் திட்டங்களுக்கு நீண்ட காலக் கடன் வழங்குகிறது.'
      }
    ]
  },

  c12_eco_ch9: {
    id: 'note_c12_eco_ch9',
    chapterId: 'c12_eco_ch9',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Fiscal Economics: Canons of Taxation, GST, Deficits & Finance Commission',
    titleTa: 'நிதியியல் பொருளியல்: வரிவிதிகள், சரக்கு மற்றும் சேவை வரி, வரவு செலவுப் பற்றாக்குறை மற்றும் நிதிக் குழு',
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
    changeNote: 'Detailed breakdown of Fiscal Deficit, Revenue Deficit, Primary Deficit, and GST dual structure.',
    changeNoteTa: 'நிதியியல் பற்றாக்குறை, வருவாய்ப் பற்றாக்குறை மற்றும் ஜிஎஸ்டி அமைப்பு விரிவாகச் சேர்க்கப்பட்டன.',
    readTimeMinutes: 19,
    bodyEn: `### 1. Public Finance & Canons of Taxation
Public finance deals with state finances, revenue collection, public expenditure, and sovereign debt.
- **Adam Smith’s Canons of Taxation:**
  1. **Canon of Ability / Equality:** Taxes should be proportional to one’s ability to pay (Progressive taxation).
  2. **Canon of Certainty:** Time of payment, amount, and manner must be clear, transparent, and certain.
  3. **Canon of Convenience:** Taxes should be levied at a time and in a manner most convenient to the taxpayer.
  4. **Canon of Economy:** Cost of tax collection must be minimal relative to revenue collected.

### 2. Direct Taxes vs Indirect Taxes & GST
- **Direct Taxes:** Impact and incidence fall on the exact same person (e.g., Personal Income Tax, Corporate Tax). Cannot be shifted.
- **Indirect Taxes:** Impact falls on one person (seller/manufacturer), but the incidence is shifted to another (consumer). E.g., Customs duty, excise duty.
- **Goods and Services Tax (GST):** Comprehensive destination-based consumption tax implemented in India on July 1, 2017:
  - CGST (Central GST) & SGST (State GST) on intra-state transactions.
  - IGST (Integrated GST) on inter-state commerce and imports.

### 3. Budgetary Deficits
1. **Revenue Deficit (RD):**
   $$\\text{Revenue Deficit} = \\text{Revenue Expenditure} - \\text{Revenue Receipts}$$
2. **Fiscal Deficit (FD):** Total borrowings required to finance government expenditure:
   $$\\text{Fiscal Deficit} = \\text{Total Expenditure} - (\\text{Revenue Receipts} + \\text{Non-debt Capital Receipts})$$
3. **Primary Deficit (PD):** Real operational borrowing excluding legacy past interest obligations:
   $$\\text{Primary Deficit} = \\text{Fiscal Deficit} - \\text{Interest Payments}$$

### 4. Finance Commission
Constitutional body appointed by the President of India every 5 years under Article 280 to recommend vertical and horizontal sharing of net tax proceeds between the Union and the States.`,
    bodyTa: `### 1. பொது நிதியியல் மற்றும் வரிவிதிகள்
ஆடம் ஸ்மித்தின் நான்கு முக்கிய வரிவிதிகள்:
1. சமத்துவ விதி (வரியைச் செலுத்தும் திறனுக்கேற்ப வரி விதித்தல்).
2. நிச்சயத்தன்மை விதி (செலுத்தும் காலம், தொகை தெளிவாக இருத்தல்).
3. வசதி விதி (வரி செலுத்துவோருக்கு வசதியான நேரத்தில் வசூலித்தல்).
4. சிக்கன விதி (வரி வசூல் செலவு மிகக் குறைவாக இருத்தல்).

### 2. நேர்முக வரி vs மறைமுக வரி & GST
- **நேர்முக வரி:** வரியின் சுமையை மாற்ற இயலாது (வருமான வரி, நிறுவன வரி).
- **மறைமுக வரி:** வரியின் சுமையை நுகர்வோர் மீது மாற்ற முடியும்.
- **ஜிஎஸ்டி (GST):** 2017 ஜூலை 1 முதல் இந்தியாவில் அமல்படுத்தப்பட்ட மறைமுக வரி (CGST, SGST, IGST).

### 3. வரவு செலவுத் திட்ட பற்றாக்குறைகள்
- **வருவாய்ப் பற்றாக்குறை:** வருவாய் செலவு - வருவாய் வரவு.
- **நிதியியல் பற்றாக்குறை:** மொத்த செலவு - (வருவாய் வரவு + கடன் அல்லாத மூலதன வரவு).
- **முதன்மைப் பற்றாக்குறை:** நிதியியல் பற்றாக்குறை - வட்டி செலுத்துதல்கள்.

### 4. நிதிக் குழு (Finance Commission)
அரசியலமைப்புச் சட்டப் பிரிவு 280-ன் கீழ் குடியரசுத் தலைவரால் 5 ஆண்டுகளுக்கு ஒருமுறை அமைக்கப்பட்டு, மத்திய-மாநில அரசுகளிடையே வரி வருவாயைப் பகிர்ந்தளிக்க பரிந்துரை செய்கிறது.`,
    revisions: [
      { version: '2.5', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced primary deficit deficit-financing formulas.', changeNoteTa: 'முதன்மைப் பற்றாக்குறை சூத்திரங்கள் சீரமைக்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Fiscal Deficit Equation', nameTa: 'நிதியியல் பற்றாக்குறை சூத்திரம்', formula: '\\text{Fiscal Deficit} = \\text{Total Expenditure} - \\text{Total Receipts (Excluding Borrowings)}', explanationEn: 'Equals total net borrowing required by the government in a financial year.', explanationTa: 'ஒரு நிதியாண்டில் அரசு வாங்க வேண்டிய மொத்தக் கடன் தொகையைக் குறிக்கிறது.' },
      { nameEn: 'Primary Deficit Equation', nameTa: 'முதன்மைப் பற்றாக்குறை சூத்திரம்', formula: '\\text{Primary Deficit} = \\text{Fiscal Deficit} - \\text{Interest Payments}', explanationEn: 'Measures current fiscal stance net of past accumulated debt servicing.', explanationTa: 'கடந்த கால கடன்களுக்கான வட்டிக் கொடுப்பனவுகளை நீக்கிய நடப்பு பற்றாக்குறை.' }
    ],
    workedExamples: [
      {
        questionEn: 'If a government has a Fiscal Deficit of ₹7,500 crores and pays ₹2,100 crores as interest payments, calculate the Primary Deficit.',
        questionTa: 'ஒரு அரசின் நிதியியல் பற்றாக்குறை ₹7,500 கோடி மற்றும் வட்டி செலுத்துதல் ₹2,100 கோடி எனில், முதன்மைப் பற்றாக்குறையைக் காண்க.',
        solutionEn: '1. Primary Deficit = Fiscal Deficit - Interest Payments.\n2. Primary Deficit = 7,500 - 2,100 = ₹5,400 crores.',
        solutionTa: '1. முதன்மைப் பற்றாக்குறை = 7,500 - 2,100 = ₹5,400 கோடி.'
      }
    ]
  },

  c12_eco_ch10: {
    id: 'note_c12_eco_ch10',
    chapterId: 'c12_eco_ch10',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Environmental Economics: Material Balance Model, Pollution & Sustainability',
    titleTa: 'சுற்றுச்சூழல் பொருளியல்: பொருள் சமநிலை மாதிரி, மாசுபடுதல் மற்றும் நீடித்த வளர்ச்சி',
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
    version: '2.1',
    isUpdated: true,
    isNew: false,
    changeNote: 'Material balance model, tragedy of the commons, and carbon taxes covered.',
    changeNoteTa: 'பொருள் சமநிலை மாதிரி மற்றும் கார்பன் வரி விவரங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 15,
    bodyEn: `### 1. Environment-Economy Linkage: Material Balance Model
Formulated by Robert Ayres and Allen Kneese based on the First Law of Thermodynamics (Law of Conservation of Mass):
*"Matter and energy can neither be created nor destroyed, but only transformed."*
- Raw materials extracted from nature enter production ($P$).
- Products enter households for consumption ($C$).
- All inputs must ultimately return back to the environment as **waste residuals ($R$)**.
- If residual waste exceeds the regenerative and assimilative carrying capacity of the biosphere, environmental degradation and pollution occur.

### 2. Externalities & Market Failure
- **Negative Externality:** Production or consumption creates an uncompensated external cost borne by society (e.g., toxic effluent discharged into the Palar or Cauvery river). Market equilibrium produces more than the socially optimal output.
- **Tragedy of the Commons:** Garrett Hardin’s thesis that shared open-access resources (fisheries, pastures, clean air) suffer overexploitation and collapse because individuals act in self-interest without bearing the full social cost.

### 3. Economic Instruments for Environmental Protection
1. **Polluter Pays Principle (PPP):** Those who produce pollution must bear the economic cost of treating and abating it.
2. **Pigouvian Taxes / Carbon Tax:** Imposing a per-unit tax equal to marginal external damage to internalize negative externalities.
3. **Tradable Emission Permits (Cap-and-Trade):** Governments cap total emissions and issue marketable quotas.
4. **Green GDP:** National product adjusted for depreciation of natural environmental capital and pollution damage.`,
    bodyTa: `### 1. பொருள் சமநிலை மாதிரி (Material Balance Model)
அயர்ஸ் மற்றும் நீஸ் ஆகியோரால் வெப்ப இயக்கவியலின் முதல் விதியின் அடிப்படையில் உருவாக்கப்பட்டது:
*"பொருளையும் ஆற்றலையும் உருவாக்கவோ அழிக்கவோ முடியாது; ஒரு வடிவத்திலிருந்து மற்றொரு வடிவத்திற்கு மாற்ற மட்டுமே இயலும்."*
இயற்கையிலிருந்து எடுக்கப்படும் மூலப்பொருட்கள் உற்பத்தியாகி நுகரப்பட்டு, இறுதியில் கழிவுகளாக மீண்டும் இயற்கையிலேயே விடப்படுகின்றன. இயற்கையின் தாங்கும் திறனை விட கழிவுகள் அதிகமாகும்போது சுற்றுச்சூழல் மாசு ஏற்படுகிறது.

### 2. எதிர்மறை வெளிப்பாடுகள் மற்றும் பொது வளங்களின் பேரழிவு
- தொழிற்சாலைக் கழிவுகளால் நீர் மற்றும் காற்று மாசடைந்து சமுதாயத்திற்கு பாதிப்பை ஏற்படுத்துவது எதிர்மறை வெளிப்பாடு ஆகும்.
- காரெட் ஹார்டின் கூறிய 'பொது வளங்களின் பேரழிவு' தத்துவம், பொதுச் சொத்துக்கள் மிகையாகப் பயன்படுத்தப்பட்டு அழியும் ஆபத்தை விளக்குகிறது.

### 3. சுற்றுச்சூழல் பொருளாதாரக் கொள்கைக் கருவிகள்
- மாசுபடுத்துபவரே இழப்பீடு வழங்க வேண்டும் என்ற கோட்பாடு (Polluter Pays Principle).
- கார்பன் வரி (Carbon Tax).
- பசுமை GDP: இயற்கை வளங்களின் தேய்மானத்தைக் கழித்து கணக்கிடப்படும் தேசிய உற்பத்தி.`,
    revisions: [
      { version: '2.1', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Green accounting formulas added.', changeNoteTa: 'பசுமை கணக்கீட்டு முறைகள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Material Balance Equilibrium', nameTa: 'பொருள் சமநிலை சூத்திரம்', formula: '\\text{Inputs Drawn from Nature} = \\text{Accumulated Goods} + \\text{Residuals Discharged}', explanationEn: 'Total raw materials extracted equals final goods plus waste residuals.', explanationTa: 'இயற்கையிலிருந்து பெறப்படும் உள்ளீடுகள் மொத்தப் பொருட்கள் மற்றும் கழிவுகளுக்குச் சமம்.' },
      { nameEn: 'Green Net National Product', nameTa: 'பசுமை நிகர நாட்டு உற்பத்தி', formula: '\\text{Green NNP} = \\text{NNP} - \\text{Natural Resource Depletion} - \\text{Pollution Damage Costs}', explanationEn: 'Environmentally adjusted measure of national sustainable output.', explanationTa: 'சுற்றுச்சூழல் இழப்புகளைக் கழித்து கணக்கிடப்படும் நீடித்த தேசிய உற்பத்தி.' }
    ],
    workedExamples: [
      {
        questionEn: 'Explain how a Pigouvian carbon tax eliminates negative environmental externalities.',
        questionTa: 'பிகுவியன் கார்பன் வரி எவ்வாறு எதிர்மறை சுற்றுச்சூழல் மாசுபாட்டைச் சரிசெய்கிறது என்பதை விளக்குக.',
        solutionEn: '1. A polluting firm only considers private production costs, ignoring social damage.\n2. Imposing a carbon tax equal to marginal external pollution damage raises private cost to match social cost.\n3. The firm reduces output to the socially optimal level and adopts clean green technologies.',
        solutionTa: '1. மாசு ஏற்படுத்தும் நிறுவனம் தன் சொந்தச் செலவை மட்டுமே கணக்கில் கொள்கிறது.\n2. அரசு கார்பன் வரி விதிக்கும்போது உற்பத்தியாளரின் செலவு அதிகரித்து உற்பத்தி குறைகிறது.\n3. இதனால் நிறுவனம் மாசற்ற பசுமை தொழில்நுட்பங்களைப் பயன்படுத்தத் தொடங்குகிறது.'
      }
    ]
  },

  c12_eco_ch11: {
    id: 'note_c12_eco_ch11',
    chapterId: 'c12_eco_ch11',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Economics of Development and Planning: Growth, HDI & NITI Aayog',
    titleTa: 'பொருளாதார மேம்பாடு மற்றும் திட்டமிடல்: வளர்ச்சி, மனித வளக் குறியீடு மற்றும் நிதி ஆயோக்',
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
    changeNote: 'HDI geometric mean formula, Vicious circle of poverty, and NITI Aayog structural comparison added.',
    changeNoteTa: 'மனித வளக் குறியீடு (HDI), வறுமையின் நச்சுச் சுழல் மற்றும் நிதி ஆயோக் ஒப்பீடுகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 17,
    bodyEn: `### 1. Economic Growth vs Economic Development
- **Economic Growth:** Quantitative expansion of real national output or real GDP over time. Measured purely in numerical money terms. Characteristic of developed nations.
- **Economic Development:** Broader multi-dimensional qualitative transformation encompassing growth *plus* progressive institutional changes, eradication of poverty, reduction in inequality, and improvements in education, healthcare, and human dignity. Characteristic of developing nations (Kindleberger).

### 2. Measuring Development: PQLI & HDI
1. **Physical Quality of Life Index (PQLI):** Developed by Morris D. Morris (1979) averaging three indicators: Life Expectancy, Infant Mortality Rate, and Basic Literacy.
2. **Human Development Index (HDI):** Formulated by Mahbub ul Haq and Amartya Sen (UNDP, 1990). Geometric mean of three normalized dimensions:
   - **Health:** Life expectancy at birth.
   - **Education:** Mean years of schooling & Expected years of schooling.
   - **Standard of Living:** GNI per capita (PPP $).
   $$\\text{HDI} = \\sqrt[3]{I_{\\text{health}} \\times I_{\\text{education}} \\times I_{\\text{income}}}$$

### 3. Vicious Circle of Poverty (Ragnar Nurkse)
*"A country is poor because it is poor."*
- **Supply Side:** Low income $\\implies$ Low savings $\\implies$ Low investment $\\implies$ Deficiency of capital $\\implies$ Low productivity $\\implies$ Low income.
- **Demand Side:** Low income $\\implies$ Low purchasing power $\\implies$ Low market demand $\\implies$ Low inducement to invest $\\implies$ Deficiency of capital $\\implies$ Low productivity.

### 4. Planning in India: Five-Year Plans to NITI Aayog
- India’s Planning Commission was established in March 1950 (headed by Prime Minister Jawaharlal Nehru) directing 12 Five-Year Plans until 2017.
- **NITI Aayog (National Institution for Transforming India):**
  - Replaced the Planning Commission on **January 1, 2015**.
  - Operates as a strategic 'Think Tank' emphasizing **Cooperative Federalism**, bottom-up planning (rather than top-down schematic funding allocation), and sustainable development goals.`,
    bodyTa: `### 1. பொருளாதார வளர்ச்சி vs பொருளாதார முன்னேற்றம்
- **பொருளாதார வளர்ச்சி:** நாட்டின் மொத்த உள்நாட்டு உற்பத்தி (GDP) அதிகரிப்பதைக் குறிக்கும் அளவுசார்ந்த மாற்றம்.
- **பொருளாதார முன்னேற்றம்:** உற்பத்தி உயர்வதோடு வறுமை ஒழிப்பு, சமத்துவமின்மை குறைவு, கல்வி, நல்வாழ்வு ஆகியவை மேம்படும் பண்புசார்ந்த முழுமையான மாற்றம்.

### 2. மனித வள மேம்பாட்டுக் குறியீடு (HDI)
1990-ல் மகபூப்-உல்-ஹக் மற்றும் அமர்த்தியா சென் ஆகியோரால் உருவாக்கப்பட்டது.
மூன்று முக்கிய பரிமாணங்களின் பெருக்குச் சராசரி:
1. வாழ்நாள் எதிர்பார்ப்பு (நல்வாழ்வு).
2. கல்வி அடைவு (பள்ளிப் படிப்பு ஆண்டுகள்).
3. வாழ்க்கைத் தரம் (தலா மொத்த நாட்டு வருமானம் - PPP $).

### 3. வறுமையின் நச்சுச் சுழல் (ராக்னர் நர்க்சு)
*"ஒரு நாடு ஏழையாக இருப்பதற்குக் காரணமே அது ஏழையாக இருப்பதுதான்"*.
குறைந்த வருமானம் $\\to$ குறைந்த சேமிப்பு $\\to$ குறைந்த முதலீடு $\\to$ குறைந்த உற்பத்தித் திறன் $\\to$ மீண்டும் குறைந்த வருமானம்.

### 4. ஐந்தாண்டுத் திட்டங்கள் மற்றும் நிதி ஆயோக் (NITI Aayog)
- 1950 முதல் 2017 வரை 12 ஐந்தாண்டுத் திட்டங்களை திட்டக் குழு செயல்படுத்தியது.
- 2015 ஜனவரி 1 அன்று திட்டக் குழுவிற்குப் பதிலாக **நிதி ஆயோக்** தொடங்கப்பட்டது.
- இது மாநிலங்களின் கூட்டுறவோடு அடிமட்டத்திலிருந்து திட்டங்களைத் தீட்டும் 'சிந்தனைக் குழுவாக' (Think Tank) செயல்படுகிறது.`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced NITI Aayog policy council overview.', changeNoteTa: 'நிதி ஆயோக் செயல்பாட்டுக் குழு விவரங்கள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Human Development Index (HDI)', nameTa: 'மனித வள மேம்பாட்டுக் குறியீடு', formula: '\\text{HDI} = (I_{\\text{Life}} \\cdot I_{\\text{Education}} \\cdot I_{\\text{Income}})^{1/3}', explanationEn: 'Geometric mean of health, education, and income sub-indices.', explanationTa: 'ஆயுட்காலம், கல்வி மற்றும் வருமான குறியீடுகளின் பெருக்குச் சராசரி.' },
      { nameEn: 'Vicious Circle Low Capital Identity', nameTa: 'வறுமையின் நச்சுச் சுழல் முற்றொருமை', formula: '\\downarrow Y \\implies \\downarrow S \\implies \\downarrow I \\implies \\downarrow K \\implies \\downarrow Y', explanationEn: 'Nurkse’s cycle of self-perpetuating poverty traps.', explanationTa: 'குறைந்த வருமானம் குறைந்த முதலீட்டிற்கும் வறுமைக்கும் வழிவகுக்கும் சுழற்சி.' }
    ],
    workedExamples: [
      {
        questionEn: 'List the three dimensions included in the calculation of the Human Development Index (HDI).',
        questionTa: 'மனித வள மேம்பாட்டுக் குறியீடு (HDI) கணக்கிடப் பயன்படும் மூன்று பரிமாணங்களைக் குறிப்பிடுக.',
        solutionEn: '1. Long and healthy life (Life expectancy at birth).\n2. Knowledge and education (Mean and expected years of schooling).\n3. Decent standard of living (GNI per capita at PPP $).',
        solutionTa: '1. நீண்ட ஆரோக்கியமான வாழ்க்கை (ஆயுட்காலம்).\n2. கல்வி அறிவு (பள்ளிப் படிப்பு ஆண்டுகள்).\n3. கண்ணியமான வாழ்க்கைத்தரம் (தலா வருமானம்).'
      }
    ]
  },

  c12_eco_ch12: {
    id: 'note_c12_eco_ch12',
    chapterId: 'c12_eco_ch12',
    classLevel: 12,
    subjectId: 'c12_economics',
    titleEn: 'Statistical Methods and Econometrics: Correlation, Regression & Models',
    titleTa: 'புள்ளியியல் முறைகள் மற்றும் பொருளாதார அளவையியல்: ஒட்டுறவு, பின்னடைவு மற்றும் மாதிரிகள்',
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
    version: '2.0',
    isUpdated: true,
    isNew: false,
    changeNote: 'Karl Pearson correlation, OLS linear regression, and econometric error terms integrated.',
    changeNoteTa: 'கார்ல் பியர்சன் ஒட்டுறவு மற்றும் சாதாரண மீச்சிறு வர்க்க பின்னடைவு மாதிரிகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. Meaning of Econometrics
Econometrics literally translates to 'economic measurement'. Coined by Ragnar Frisch (1926), it is the integration of **Economic Theory**, **Mathematical Economics**, and **Statistical Inference** to empirically verify and test economic hypotheses.
- **Econometric Methodology:**
  1. Statement of theory or hypothesis (e.g., Keynesian consumption function).
  2. Specification of mathematical model ($C = \\beta_1 + \\beta_2 Y$).
  3. Specification of econometric model adding random disturbance / error term:
     $$C = \\beta_1 + \\beta_2 Y + u_i$$
     where $u_i$ is the stochastic disturbance term capturing unobserved factors (tastes, weather, errors).
  4. Data collection, estimation of parameters (OLS), hypothesis testing, and forecasting.

### 2. Karl Pearson’s Coefficient of Correlation ($r$)
Measures the strength and direction of linear association between two variables $X$ and $Y$:
$$r = \\frac{\\sum (X - \\bar{X})(Y - \\bar{Y})}{\\sqrt{\\sum (X - \\bar{X})^2 \\sum (Y - \\bar{Y})^2}}$$
- Range: $-1 \\leq r \\leq +1$.
  - $r = +1$: Perfect positive correlation.
  - $r = -1$: Perfect negative correlation.
  - $r = 0$: No linear correlation.

### 3. Linear Regression Analysis
While correlation measures degree of association, **Regression** estimates the expected quantitative value of a dependent variable ($Y$) given an independent variable ($X$).
- **Regression equation of $Y$ on $X$:**
  $$Y - \\bar{Y} = b_{yx} (X - \\bar{X})$$
  where $b_{yx} = r \\frac{\\sigma_y}{\\sigma_x}$ is the regression coefficient.
- **Regression equation of $X$ on $Y$:**
  $$X - \\bar{X} = b_{xy} (Y - \\bar{Y})$$
  where $b_{xy} = r \\frac{\\sigma_x}{\\sigma_y}$.
- **Geometric Mean Relationship:**
  $$r = \\pm \\sqrt{b_{yx} \\times b_{xy}}$$`,
    bodyTa: `### 1. பொருளாதார அளவையியல் (Econometrics) - பொருள்
1926-ல் ராக்னர் பிரிஷ் என்பவரால் அறிமுகப்படுத்தப்பட்டது. இது **பொருளாதாரக் கோட்பாடுகள், கணிதம் மற்றும் புள்ளியியல்** ஆகியவற்றின் ஒருங்கிணைப்பாகும்.
- சாதாரண நுகர்வுச் சார்பு: $C = \\beta_1 + \\beta_2 Y$.
- பொருளாதார அளவையியல் மாதிரி (பிழை உறுப்பு $u$-வுடன்):
  $$C = \\beta_1 + \\beta_2 Y + u_i$$

### 2. கார்ல் பியர்சனின் ஒட்டுறவுக் கெழு ($r$)
இரு மாறிகளுக்கு இடையேயான நேரியல் தொடர்பின் வலிமையை அளவிடுகிறது:
- $-1 \\leq r \\leq +1$.
- $r = +1$: சரியான நேரிடை ஒட்டுறவு.
- $r = -1$: சரியான எதிரிடை ஒட்டுறவு.
- $r = 0$: ஒட்டுறவு இன்மை.

### 3. பின்னடைவுப் பகுப்பாய்வு (Regression Analysis)
ஒரு சார்பு மாறியின் மதிப்பை மற்றுமொரு சாரா மாறியின் மூலம் மதிப்பிடுவதாகும்:
- X-ன் மீது Y-ன் பின்னடைவுச் சமன்பாடு: $Y - \\bar{Y} = b_{yx} (X - \\bar{X})$.
- தொடர்பு: $r = \\pm \\sqrt{b_{yx} \\times b_{xy}}$.`,
    revisions: [
      { version: '2.0', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Added scatter plot interpretation charts.', changeNoteTa: 'சிதறல் வரைபட விளக்கங்கள் சேர்க்கப்பட்டன.', updatedBy: 'Economics Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Karl Pearson Correlation Coefficient', nameTa: 'கார்ல் பியர்சன் ஒட்டுறவுக் கெழு', formula: 'r = \\frac{\\text{Cov}(X, Y)}{\\sigma_x \\sigma_y}', explanationEn: 'Normalized measure of covariance between two economic variables.', explanationTa: 'இரு மாறிகளுக்கு இடையேயான நேரியல் தொடர்பை அளவிடுகிறது.' },
      { nameEn: 'Regression Coefficients Geometric Mean', nameTa: 'பின்னடைவுக் கெழுக்களின் பெருக்குச் சராசரி', formula: 'r = \\pm \\sqrt{b_{yx} \\times b_{xy}}', explanationEn: 'Sign of r matches the signs of both regression slopes.', explanationTa: 'ஒட்டுறவுக் கெழு பின்னடைவுக் கெழுக்களின் பெருக்குச் சராசரிக்குச் சமம்.' }
    ],
    workedExamples: [
      {
        questionEn: 'If the two regression coefficients are byx = 0.8 and bxy = 0.45, find the correlation coefficient r.',
        questionTa: 'பின்னடைவுக் கெழுக்கள் byx = 0.8 மற்றும் bxy = 0.45 எனில் ஒட்டுறவுக் கெழு r-ன் மதிப்பைக் காண்க.',
        solutionEn: '1. Formula: r = √(byx * bxy).\n2. r = √(0.8 * 0.45) = √0.36 = 0.6.\n3. Since both slopes are positive, r = +0.6 (Moderate positive correlation).',
        solutionTa: '1. r = √(byx * bxy).\n2. r = √(0.8 * 0.45) = √0.36 = 0.6.\n3. இரு கெழுக்களும் நேர்மறையாக உள்ளதால் r = +0.6 ஆகும்.'
      }
    ]
  }
};

export const ECONOMICS_PART2_SUMMARIES: Record<string, SummaryItem> = {
  c12_eco_ch7: {
    id: 'sum_c12_eco_ch7',
    chapterId: 'c12_eco_ch7',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'David Ricardo’s comparative cost principle proves trade benefits both nations when each specializes in its relative advantage.',
      'Terms of trade reflect export price index relative to import price index (Tn = Px/Pm * 100).',
      'Balance of Trade tracks physical merchandise, whereas Balance of Payments records all economic transactions including services and capital flows.',
      'BOP disequilibrium can be corrected via export promotion, import tariffs, currency depreciation, and exchange controls.'
    ],
    keyPointsTa: [
      'ரிக்கார்டோவின் ஒப்பீட்டுச் செலவுக் கோட்பாடு நாடுகள் தங்களுக்கு சாதகமான பண்டங்களில் நிபுணத்துவம் பெற்று வர்த்தகம் செய்வதை விளக்குகிறது.',
      'வாணிப வீதம் ஏற்றுமதி மற்றும் இறக்குமதி விலைக் குறியீட்டின் விகிதத்தைக் காட்டுகிறது (Tn = Px/Pm * 100).',
      'வாணிபச் சமநிலை பொருட்களை மட்டுமே பதிவு செய்கிறது; செலுத்து சமநிலை பணிகள் மற்றும் மூலதன ஓட்டங்களையும் பதிவு செய்கிறது.',
      'செலுத்து சமநிலை பற்றாக்குறையை ஏற்றுமதி ஊக்குவிப்பு, சுங்க வரிகள் மற்றும் நாணய மாற்று விகிதங்கள் மூலம் சரிசெய்யலாம்.'
    ],
    simpleExplanationEn: 'If Tamil Nadu produces both software and tea cheaper than Sri Lanka, but is 5 times better at software and only 2 times better at tea, both places prosper if Tamil Nadu makes the code and Sri Lanka supplies the tea bags!',
    simpleExplanationTa: 'தமிழ்நாடு மென்பொருள் மற்றும் தேயிலை இரண்டையுமே சிறப்பாக உற்பத்தி செய்தாலும், மென்பொருளில் அதிக திறமையைக் காட்டி, இலங்கையிடமிருந்து தேயிலையை வாங்குவதே ஒப்பீட்டுச் செலவு சாதகமாகும்!'
  },

  c12_eco_ch8: {
    id: 'sum_c12_eco_ch8',
    chapterId: 'c12_eco_ch8',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Bretton Woods institutions: IMF addresses short-term BOP liquidity, while World Bank finances long-term development infrastructure.',
      'SDRs (Special Drawing Rights) serve as paper gold reserve assets managed by the IMF.',
      'WTO administers non-discriminatory international trade rules, intellectual property (TRIPS), and services (GATS).',
      'Regional cooperation groups like SAARC, ASEAN, and BRICS bolster trade, infrastructure, and political solidarity.'
    ],
    keyPointsTa: [
      'பிரெட்டன் வூட்ஸ் அமைப்புகள்: IMF தற்காலிக செலுத்து சமநிலைப் பற்றாக்குறைக்கும், உலக வங்கி நீண்ட கால உள்கட்டமைப்புக்கும் கடனளிக்கின்றன.',
      'சிறப்பு எடுப்பு உரிமைகள் (SDR) IMF-ஆல் நிர்வகிக்கப்படும் சர்வதேச இருப்புக் கருவியாகும்.',
      'WTO நியாயமான உலக வர்த்தக விதிகள் மற்றும் அறிவுசார் சொத்துரிமைகளை (TRIPS) பாதுகாக்கிறது.',
      'சார்க், ஆசியான் மற்றும் பிரிக்ஸ் போன்ற பிராந்திய கூட்டமைப்புகள் பரஸ்பர வர்த்தகத்தை வலுப்படுத்துகின்றன.'
    ],
    simpleExplanationEn: 'Think of the IMF as the emergency paramedic treating an economy having a sudden cash flow heart attack, while the World Bank is the personal trainer helping build strong muscles (roads, schools, dams) over 20 years!',
    simpleExplanationTa: 'IMF என்பது பண நெருக்கடியில் தவிக்கும் நாட்டிற்கு அவசர சிகிச்சை அளிக்கும் மருத்துவர் போன்றது; உலக வங்கி என்பது 20 ஆண்டுகளில் சாலைகள், கல்வி போன்ற உள்கட்டமைப்பை உருவாக்கும் பயிற்சியாளர் போன்றது!'
  },

  c12_eco_ch9: {
    id: 'sum_c12_eco_ch9',
    chapterId: 'c12_eco_ch9',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Adam Smith’s canons of taxation require equality, certainty, convenience, and low cost of collection.',
      'Direct taxes fall on income and cannot be shifted; indirect taxes (like GST) are collected on goods and passed to consumers.',
      'GST unified indirect taxes across India under a dual destination-based model (CGST, SGST, IGST).',
      'Fiscal deficit represents total government borrowing, and primary deficit isolates current borrowing from past debt interest.'
    ],
    keyPointsTa: [
      'ஆடம் ஸ்மித்தின் வரிவிதிகள் சமத்துவம், உறுதிப்பாடு, வசதி மற்றும் சிக்கனத்தை வலியுறுத்துகின்றன.',
      'நேர்முக வரி வருமானத்தின் மீது விதிக்கப்பட்டு மாற்ற இயலாதது; ஜிஎஸ்டி போன்ற மறைமுக வரிகள் நுகர்வோர் மீது மாற்றப்படுகின்றன.',
      'ஜிஎஸ்டி இந்தியாவில் பல்வேறு மறைமுக வரிகளை ஒருங்கிணைத்து ஒரே வரி அமைப்பாகச் செயல்படுத்தப்படுகிறது.',
      'நிதியியல் பற்றாக்குறை அரசின் மொத்த கடன் தேவையையும், முதன்மைப் பற்றாக்குறை வட்டி நீங்கலான நடப்பு பற்றாக்குறையையும் காட்டுகிறது.'
    ],
    simpleExplanationEn: 'If a household spends ₹50,000 when income is only ₹40,000, it has a ₹10,000 deficit requiring loans. That ₹10,000 total borrowing is exactly what a nation calls its Fiscal Deficit!',
    simpleExplanationTa: 'வருமானம் ₹40,000 ஆக இருக்கும்போது ஒரு குடும்பம் ₹50,000 செலவு செய்தால் ஏற்படும் ₹10,000 கடன் தேவையே நாட்டின் நிதியியல் பற்றாக்குறை (Fiscal Deficit) ஆகும்!'
  },

  c12_eco_ch10: {
    id: 'sum_c12_eco_ch10',
    chapterId: 'c12_eco_ch10',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'The Material Balance Model shows all matter extracted from ecosystems must eventually return as waste residuals.',
      'Negative externalities lead to market failures when polluting factories dump societal costs onto citizens.',
      'Economic cures include the Polluter Pays Principle, Pigouvian carbon taxes, and tradable emissions credits.',
      'Green GDP subtracts ecological depletion and environmental degradation from conventional national accounts.'
    ],
    keyPointsTa: [
      'பொருள் சமநிலை மாதிரி இயற்கையிலிருந்து பெறப்படும் மூலப்பொருட்கள் மீண்டும் கழிவுகளாகவே வெளியேறுகின்றன என்பதை விளக்குகிறது.',
      'தொழிற்சாலைகள் ஏற்படுத்தும் சுற்றுச்சூழல் மாசுபாடு சமுதாயத்திற்கு பாதிப்பை ஏற்படுத்தும் எதிர்மறை வெளிப்பாடு ஆகும்.',
      'மாசுபடுத்துபவரே இழப்பீடு தரும் கோட்பாடு, கார்பன் வரி ஆகியவை மாசுபாட்டைக் குறைக்க உதவும் நிதிக் கருவிகள்.',
      'பசுமை GDP தேசிய உற்பத்தியிலிருந்து இயற்கை வளங்களின் தேய்மானத்தைக் கழித்து கணக்கிடுகிறது.'
    ],
    simpleExplanationEn: 'If a chemical factory makes ₹10 crores profit selling dyes but poisons a river causing ₹15 crores in hospital bills for local villagers, standard GDP only counts the dye profits, but Green GDP subtracts the hospital damage!',
    simpleExplanationTa: 'ஒரு சாய ஆலை ₹10 கோடி லாபம் ஈட்டி, ஆற்று நீரைக் கெடுத்து ₹15 கோடி மருத்துவச் செலவை மக்களுக்கு உருவாக்கினால், சாதாரண GDP லாபத்தை மட்டுமே பார்க்கும்; ஆனால் பசுமை GDP சுற்றுச்சூழல் இழப்பைக் கழித்துப் பார்க்கும்!'
  },

  c12_eco_ch11: {
    id: 'sum_c12_eco_ch11',
    chapterId: 'c12_eco_ch11',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Economic growth measures GDP quantity increase; economic development measures human quality of life, healthcare, and equity.',
      'Human Development Index (HDI) calculates geometric mean of health (longevity), education (schooling), and living standard (GNI per capita).',
      'Nurkse’s vicious circle shows how low income feeds low savings and poor capital accumulation in underdeveloped regions.',
      'NITI Aayog replaced the Planning Commission in 2015 to serve as a collaborative policy Think Tank for states.'
    ],
    keyPointsTa: [
      'பொருளாதார வளர்ச்சி என்பது உற்பத்தியின் அளவையும், பொருளாதார முன்னேற்றம் என்பது மனித வாழ்க்கைத் தரத்தையும் குறிக்கிறது.',
      'மனித வள மேம்பாட்டுக் குறியீடு (HDI) ஆயுட்காலம், கல்வி மற்றும் தலா வருமானம் ஆகியவற்றின் பெருக்குச் சராசரியாகும்.',
      'வறுமையின் நச்சுச் சுழல் குறைந்த வருமானம் எவ்வாறு தொடர் மூலதனப் பற்றாக்குறைக்கு வழிவகுக்கிறது என்பதை விளக்குகிறது.',
      '2015-ல் திட்டக் குழுவிற்குப் பதிலாக துவங்கப்பட்ட நிதி ஆயோக் மாநிலங்களின் ஒத்துழைப்போடு செயல்படும் சிந்தனைக் குழுவாகும்.'
    ],
    simpleExplanationEn: 'Economic growth is getting taller; economic development is getting healthier, wiser, and stronger all at once!',
    simpleExplanationTa: 'பொருளாதார வளர்ச்சி என்பது ஒரு குழந்தை உயரமாக வளர்வது போன்றது; பொருளாதார முன்னேற்றம் என்பது உயரத்தோடு நல்ல அறிவும், திடகாத்திரமான உடல்நலமும் பெறுவது போன்றது!'
  },

  c12_eco_ch12: {
    id: 'sum_c12_eco_ch12',
    chapterId: 'c12_eco_ch12',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Econometrics integrates economic theory, mathematics, and statistics to empirically test real-world hypotheses.',
      'Random disturbance error term u captures unobserved stochastic factors and human randomness.',
      'Karl Pearson correlation coefficient r measures association strength (-1 to +1).',
      'Regression lines quantify exact predictive impact of independent drivers on dependent economic variables.'
    ],
    keyPointsTa: [
      'பொருளாதார அளவையியல் பொருளாதாரம், கணிதம் மற்றும் புள்ளியியலை இணைத்து உண்மைகளைச் சோதிக்கிறது.',
      'சமவாய்ப்பு பிழை உறுப்பு (u) கணக்கில் கொள்ளப்படாத மனித மாறுதல்களையும் இயற்கை காரணிகளையும் உள்ளடக்குகிறது.',
      'கார்ல் பியர்சன் ஒட்டுறவுக் கெழு r இரு மாறிகளுக்கு இடையேயான தொடர்பை (-1 முதல் +1 வரை) அளவிடுகிறது.',
      'பின்னடைவு சமன்பாடுகள் ஒரு மாறியின் மூலம் மற்றொரு மாறியின் வருங்கால மதிப்பை துல்லியமாகக் கணிக்க உதவுகின்றன.'
    ],
    simpleExplanationEn: 'Econometrics is the economic version of testing whether eating vegetables actually makes you live longer: gathering real data on thousands of people, stripping away confounding factors, and proving cause and effect!',
    simpleExplanationTa: 'பொருளாதார அளவையியல் என்பது ஆயிரக்கணக்கான மக்களின் உண்மையான தகவல்களைச் சேகரித்து, கணித சமன்பாடுகள் மூலம் காரண காரியங்களை அறிவியல் பூர்வமாக நிரூபிப்பதாகும்!'
  }
};

export const ECONOMICS_PART2_QUIZZES: Record<string, ChapterQuiz> = {
  c12_eco_ch7: {
    id: 'quiz_c12_eco_ch7',
    chapterId: 'c12_eco_ch7',
    titleEn: 'Chapter 7: International Economics Quiz',
    titleTa: 'அலகு 7: பன்னாட்டுப் பொருளியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Who propounded the Comparative Cost Theory of International Trade?',
        questionTa: 'ஒப்பீட்டுச் செலவுக் கோட்பாட்டை உருவாக்கியவர் யார்?',
        optionsEn: ['David Ricardo', 'Adam Smith', 'J.M. Keynes', 'Alfred Marshall'],
        optionsTa: ['டேவிட் ரிக்கார்டோ', 'ஆடம் ஸ்மித்', 'ஜே.எம். கீன்ஸ்', 'ஆல்பிரட் மார்ஷல்'],
        correctAnswer: 'David Ricardo',
        explanationEn: 'David Ricardo formulated the Comparative Cost Theory in 1817.',
        explanationTa: '1817-ல் டேவிட் ரிக்கார்டோ ஒப்பீட்டுச் செலவுக் கோட்பாட்டை வெளியிட்டார்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which of the following items is included in the Current Account of the Balance of Payments?',
        questionTa: 'அயல்நாட்டுச் செலுத்து சமநிலையின் நடப்புக் கணக்கில் சேர்க்கப்படுவது எது?',
        optionsEn: ['Software service exports', 'Foreign Direct Investment (FDI)', 'External commercial borrowings', 'IMF loans'],
        optionsTa: ['மென்பொருள் பணி ஏற்றுமதிகள்', 'நேரடி அன்னிய முதலீடு (FDI)', 'வெளிநாட்டு வணிகக் கடன்கள்', 'IMF கடன்கள்'],
        correctAnswer: 'Software service exports',
        explanationEn: 'Services and goods trade belong to the Current Account. FDI and loans belong to the Capital Account.',
        explanationTa: 'பண்டங்கள் மற்றும் பணிகள் நடப்புக் கணக்கில் அடங்கும். முதலீடுகள் மற்றும் கடன்கள் மூலதனக் கணக்கில் சேரும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Balance of Trade includes both visible goods and invisible service transactions.',
        questionTa: 'வாணிபச் சமநிலை புலனாகும் பண்டங்கள் மற்றும் புலனாகாப் பணிகள் இரண்டையும் உள்ளடக்கியது.',
        correctAnswer: false,
        explanationEn: 'False! Balance of Trade includes ONLY visible goods. Invisible services are included in Balance of Payments.',
        explanationTa: 'தவறு! வாணிபச் சமநிலை புலனாகும் பண்டங்களை மட்டுமே உள்ளடக்கியது. பணிகள் செலுத்து சமநிலைக்குரியது.'
      }
    ]
  },

  c12_eco_ch8: {
    id: 'quiz_c12_eco_ch8',
    chapterId: 'c12_eco_ch8',
    titleEn: 'Chapter 8: International Economic Organisations Quiz',
    titleTa: 'அலகு 8: பன்னாட்டு அமைப்புகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Where are the headquarters of the World Trade Organization (WTO) located?',
        questionTa: 'உலக வர்த்தக அமைப்பின் (WTO) தலைமையகம் எங்கு அமைந்துள்ளது?',
        optionsEn: ['Geneva, Switzerland', 'Washington D.C., USA', 'New York, USA', 'London, UK'],
        optionsTa: ['ஜெனீவா, சுவிட்சர்லாந்து', 'வாஷிங்டன், அமெரிக்கா', 'நியூயார்க், அமெரிக்கா', 'லண்டன், இங்கிலாந்து'],
        correctAnswer: 'Geneva, Switzerland',
        explanationEn: 'WTO headquarters is situated in Geneva, Switzerland.',
        explanationTa: 'WTO தலைமையகம் சுவிட்சர்லாந்தின் ஜெனீவா நகரில் உள்ளது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which institution within the World Bank Group is known as the "Soft Loan Window"?',
        questionTa: 'உலக வங்கி குழுமத்தில் "மென் கடன் சாளரம்" என்று அழைக்கப்படும் அமைப்பு எது?',
        optionsEn: ['IDA', 'IFC', 'MIGA', 'ICSID'],
        optionsTa: ['IDA', 'IFC', 'MIGA', 'ICSID'],
        correctAnswer: 'IDA',
        explanationEn: 'The International Development Association (IDA) provides interest-free, long-term concessional credits to poor nations.',
        explanationTa: 'சர்வதேச வளர்ச்சி சங்கம் (IDA) ஏழை நாடுகளுக்கு வட்டியற்ற சலுகைக் கடன்களை வழங்குகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Special Drawing Rights (SDRs) issued by the IMF are physical gold coins.',
        questionTa: 'IMF வழங்கும் சிறப்பு எடுப்பு உரிமைகள் (SDR) என்பது தங்க நாணயங்களாகும்.',
        correctAnswer: false,
        explanationEn: 'False! SDRs are accounting reserve assets commonly referred to as "Paper Gold", not physical coins.',
        explanationTa: 'தவறு! SDR என்பது ஒரு சர்வதேச கணக்குக் குறியீட்டு நாணயம் (Paper Gold), அது உண்மையான தங்க நாணயம் அல்ல.'
      }
    ]
  },

  c12_eco_ch9: {
    id: 'quiz_c12_eco_ch9',
    chapterId: 'c12_eco_ch9',
    titleEn: 'Chapter 9: Fiscal Economics Quiz',
    titleTa: 'அலகு 9: நிதியியல் பொருளியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The Goods and Services Tax (GST) came into effect in India on:',
        questionTa: 'இந்தியாவில் சரக்கு மற்றும் சேவை வரி (GST) எப்போது நடைமுறைக்கு வந்தது?',
        optionsEn: ['July 1, 2017', 'April 1, 2016', 'November 8, 2016', 'January 1, 2018'],
        optionsTa: ['ஜூலை 1, 2017', 'ஏப்ரல் 1, 2016', 'நவம்பர் 8, 2016', 'ஜனவரி 1, 2018'],
        correctAnswer: 'July 1, 2017',
        explanationEn: 'GST was rolled out on July 1, 2017.',
        explanationTa: 'ஜிஎஸ்டி 2017 ஜூலை 1 முதல் அமல்படுத்தப்பட்டது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Primary Deficit is calculated as:',
        questionTa: 'முதன்மைப் பற்றாக்குறை எவ்வாறு கணக்கிடப்படுகிறது?',
        optionsEn: ['Fiscal Deficit - Interest Payments', 'Revenue Deficit - Capital Expenditure', 'Total Expenditure - Total Revenue', 'Budget Deficit + Borrowings'],
        optionsTa: ['நிதியியல் பற்றாக்குறை - வட்டி செலுத்துதல்கள்', 'வருவாய்ப் பற்றாக்குறை - மூலதனச் செலவு', 'மொத்த செலவு - மொத்த வருவாய்', 'வரவு செலவு பற்றாக்குறை + கடன்கள்'],
        correctAnswer: 'Fiscal Deficit - Interest Payments',
        explanationEn: 'Primary Deficit = Fiscal Deficit minus interest commitments on past loans.',
        explanationTa: 'முதன்மைப் பற்றாக்குறை = நிதியியல் பற்றாக்குறை - வட்டி செலுத்துதல்கள்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Under Article 280 of the Indian Constitution, the Finance Commission is appointed by the Prime Minister.',
        questionTa: 'இந்திய அரசியலமைப்பு சட்டப் பிரிவு 280-ன் கீழ் நிதிக் குழுவை பிரதம மந்திரி நியமிக்கிறார்.',
        correctAnswer: false,
        explanationEn: 'False! The Finance Commission is appointed by the President of India every five years.',
        explanationTa: 'தவறு! நிதிக் குழுவை இந்தியக் குடியரசுத் தலைவர் நியமிக்கிறார்.'
      }
    ]
  },

  c12_eco_ch10: {
    id: 'quiz_c12_eco_ch10',
    chapterId: 'c12_eco_ch10',
    titleEn: 'Chapter 10: Environmental Economics Quiz',
    titleTa: 'அலகு 10: சுற்றுச்சூழல் பொருளியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The Material Balance Model in environmental economics is based on which law of physics?',
        questionTa: 'பொருள் சமநிலை மாதிரி இயற்பியலின் எந்த விதியின் அடிப்படையில் உருவாக்கப்பட்டது?',
        optionsEn: ['First Law of Thermodynamics', 'Second Law of Thermodynamics', 'Law of Gravitation', 'Coulomb’s Law'],
        optionsTa: ['வெப்ப இயக்கவியலின் முதல் விதி', 'வெப்ப இயக்கவியலின் இரண்டாம் விதி', 'ஈர்ப்பு விதி', 'கூலும் விதி'],
        correctAnswer: 'First Law of Thermodynamics',
        explanationEn: 'Based on the Law of Conservation of Mass (Matter and energy cannot be destroyed, only transformed).',
        explanationTa: 'பொருண்மை அழியா விதியை அடிப்படையாகக் கொண்டு அயர்ஸ் மற்றும் நீஸ் உருவாக்கினர்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'A tax imposed on polluters per unit of environmental damage caused is known as:',
        questionTa: 'சுற்றுச்சூழல் மாசுபாட்டின் அளவுக்கு ஏற்ப விதிக்கப்படும் வரி:',
        optionsEn: ['Pigouvian Tax / Carbon Tax', 'Progressive Income Tax', 'Customs Duty', 'Value Added Tax'],
        optionsTa: ['பிகுவியன் வரி / கார்பன் வரி', 'வளர்வீத வருமான வரி', 'சுங்க வரி', 'மதிப்புக் கூட்டு வரி'],
        correctAnswer: 'Pigouvian Tax / Carbon Tax',
        explanationEn: 'Pigouvian taxes internalize negative externalities by taxing environmental damage.',
        explanationTa: 'சுற்றுச்சூழல் இழப்பை ஈடுசெய்ய விதிக்கப்படும் பிகுவியன் அல்லது கார்பன் வரி.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Green GDP accounts for the economic degradation of natural ecosystems and resource depletion.',
        questionTa: 'பசுமை GDP இயற்கை வளங்களின் தேய்மானம் மற்றும் சுற்றுச்சூழல் இழப்பைக் கழித்து கணக்கிடுகிறது.',
        correctAnswer: true,
        explanationEn: 'True! Green GDP adjusts national accounts for environmental degradation.',
        explanationTa: 'சரி! பசுமை GDP சுற்றுச்சூழல் இழப்புகளைக் கழித்து கணக்கிடப்படுகிறது.'
      }
    ]
  },

  c12_eco_ch11: {
    id: 'quiz_c12_eco_ch11',
    chapterId: 'c12_eco_ch11',
    titleEn: 'Chapter 11: Development & Planning Quiz',
    titleTa: 'அலகு 11: வளர்ச்சி மற்றும் திட்டமிடல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'When did NITI Aayog come into existence replacing the Planning Commission?',
        questionTa: 'திட்டக் குழுவிற்குப் பதிலாக நிதி ஆயோக் எப்போது தொடங்கப்பட்டது?',
        optionsEn: ['January 1, 2015', 'April 1, 2014', 'August 15, 2015', 'January 1, 2017'],
        optionsTa: ['ஜனவரி 1, 2015', 'ஏப்ரல் 1, 2014', 'ஆகஸ்ட் 15, 2015', 'ஜனவரி 1, 2017'],
        correctAnswer: 'January 1, 2015',
        explanationEn: 'NITI Aayog was formed on January 1, 2015.',
        explanationTa: 'நிதி ஆயோக் 2015 ஜனவரி 1 அன்று உருவாக்கப்பட்டது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Who introduced the concept of the Vicious Circle of Poverty?',
        questionTa: '"வறுமையின் நச்சுச் சுழல்" என்ற கருத்தை அறிமுகப்படுத்தியவர் யார்?',
        optionsEn: ['Ragnar Nurkse', 'Amartya Sen', 'Mahbub ul Haq', 'Morris D. Morris'],
        optionsTa: ['ராக்னர் நர்க்சு', 'அமர்த்தியா சென்', 'மகபூப்-உல்-ஹக்', 'மோரிஸ் டி. மோரிஸ்'],
        correctAnswer: 'Ragnar Nurkse',
        explanationEn: 'Ragnar Nurkse described the supply and demand cycles of poverty in developing nations.',
        explanationTa: 'ராக்னர் நர்க்சு வறுமையின் நச்சுச் சுழல் கோட்பாட்டை உருவாக்கினார்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The Human Development Index (HDI) was designed by economists Mahbub ul Haq and Amartya Sen.',
        questionTa: 'மனித வள மேம்பாட்டுக் குறியீடு (HDI) மகபூப்-உல்-ஹக் மற்றும் அமர்த்தியா சென் ஆகியோரால் உருவாக்கப்பட்டது.',
        correctAnswer: true,
        explanationEn: 'True! UNDP launched the HDI in 1990 developed by them.',
        explanationTa: 'சரி! 1990-ல் இவர்களால் மனித வளக் குறியீடு உருவாக்கப்பட்டது.'
      }
    ]
  },

  c12_eco_ch12: {
    id: 'quiz_c12_eco_ch12',
    chapterId: 'c12_eco_ch12',
    titleEn: 'Chapter 12: Statistical Methods & Econometrics Quiz',
    titleTa: 'அலகு 12: பொருளாதார அளவையியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The value of Karl Pearson’s correlation coefficient r always lies strictly between:',
        questionTa: 'கார்ல் பியர்சனின் ஒட்டுறவுக் கெழு r-ன் மதிப்பு எப்போதும் எவற்றுக்கு இடையே அமையும்?',
        optionsEn: ['-1 and +1', '0 and 1', '-∞ and +∞', '0 and 100'],
        optionsTa: ['-1 மற்றும் +1', '0 மற்றும் 1', '-∞ மற்றும் +∞', '0 மற்றும் 100'],
        correctAnswer: '-1 and +1',
        explanationEn: 'Correlation ranges from -1 (perfect negative) to +1 (perfect positive).',
        explanationTa: 'ஒட்டுறவுக் கெழு எப்போதுமே -1 மற்றும் +1-க்கு இடையில் இருக்கும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What does the disturbance term "u" in an econometric model represent?',
        questionTa: 'பொருளாதார அளவையியல் மாதிரியில் உள்ள பிழை உறுப்பு "u" எதனைக் குறிக்கிறது?',
        optionsEn: ['Random unobserved factors and shocks', 'Total national income', 'Interest rate', 'Fixed constant'],
        optionsTa: ['கணக்கில் கொள்ளப்படாத தற்செயல் காரணிகள்', 'மொத்த தேசிய வருமானம்', 'வட்டி விகிதம்', 'நிலையான மாறிலி'],
        correctAnswer: 'Random unobserved factors and shocks',
        explanationEn: 'The stochastic disturbance u absorbs non-quantifiable or omitted factors influencing the dependent variable.',
        explanationTa: 'மாதிரியில் விடுபட்ட தற்செயல் காரணிகளையும் பிழைகளையும் u குறிக்கிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'If both regression coefficients byx and bxy are negative, the correlation coefficient r must be positive.',
        questionTa: 'இரு பின்னடைவுக் கெழுக்களும் எதிரிடையாக (Negative) இருந்தால், ஒட்டுறவுக் கெழு r நேரிடையாக (Positive) இருக்கும்.',
        correctAnswer: false,
        explanationEn: 'False! The sign of r must always match the signs of the regression coefficients. If both slopes are negative, r is strictly negative.',
        explanationTa: 'தவறு! பின்னடைவுக் கெழுக்கள் இரண்டும் மைனஸாக இருந்தால் ஒட்டுறவுக் கெழுவும் மைனஸாகவே இருக்கும்.'
      }
    ]
  }
};

export const ECONOMICS_PART2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_eco_ch7: {
    id: 'diag_c12_eco_ch7',
    chapterId: 'c12_eco_ch7',
    titleEn: 'International Trade: Balance of Payments Accounts Architecture',
    titleTa: 'அயல்நாட்டுச் செலுத்து சமநிலை கணக்குகளின் கட்டமைப்பு வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="30" width="250" height="110" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x="155" y="60" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">1. Current Account</text>
      <text x="155" y="82" textAnchor="middle" fill="#1d4ed8" fontSize="11">Merchandise Trade (Exports - Imports)</text>
      <text x="155" y="102" textAnchor="middle" fill="#1e3a8a" fontSize="11">Invisibles: IT Services & Remittances</text>
      <text x="155" y="122" textAnchor="middle" fill="#64748b" fontSize="10">Current Account Deficit (CAD)</text>

      <rect x="320" y="30" width="250" height="110" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="445" y="60" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">2. Capital Account</text>
      <text x="445" y="82" textAnchor="middle" fill="#15803d" fontSize="11">Foreign Direct Investment (FDI)</text>
      <text x="445" y="102" textAnchor="middle" fill="#14532d" fontSize="11">Portfolio Investments (FPI) & NRI Deposits</text>
      <text x="445" y="122" textAnchor="middle" fill="#64748b" fontSize="10">External Commercial Borrowings (ECB)</text>

      <rect x="150" y="180" width="300" height="80" rx="12" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
      <text x="300" y="210" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="13">3. Official Forex Reserves Account</text>
      <text x="300" y="230" textAnchor="middle" fill="#a16207" fontSize="11">BOP Identity: Current + Capital + Reserve Δ = 0</text>
      <text x="300" y="248" textAnchor="middle" fill="#713f12" fontSize="10">RBI Interventions in Currency Markets</text>

      <path d="M 155 140 L 250 180" stroke="#2563eb" strokeWidth="2" />
      <path d="M 445 140 L 350 180" stroke="#16a34a" strokeWidth="2" />
    </svg>`,
    labels: [
      { id: 'bop1', labelEn: 'Current Account (Trade & Services)', labelTa: 'நடப்புக் கணக்கு (பண்டங்கள் & பணிகள்)', descriptionEn: 'Merchandise exports/imports, IT services, remittances, and tourism expenditures.', descriptionTa: 'பொருட்கள் வர்த்தகம், மென்பொருள் பணிகள், சுற்றுலா மற்றும் பணப் பரிமாற்றங்கள்.', x: 25, y: 30 },
      { id: 'bop2', labelEn: 'Capital Account (Investments & Loans)', labelTa: 'மூலதனக் கணக்கு (முதலீடுகள் & கடன்கள்)', descriptionEn: 'FDI, FPI equity purchases, external commercial borrowings, and sovereign loans.', descriptionTa: 'நேரடி அன்னிய முதலீடு, பங்குச் சந்தை முதலீடு மற்றும் வெளிநாட்டுக் கடன்கள்.', x: 75, y: 30 },
      { id: 'bop3', labelEn: 'Official Forex Reserve Settlement', labelTa: 'அந்நியச் செலாவணி இருப்பு கணக்கு', descriptionEn: 'Reserve adjustments in foreign exchange, gold, and IMF SDRs by the central bank to balance the sheet.', descriptionTa: 'கணக்கை சமன் செய்ய மைய வங்கி கையாளும் தங்கம் மற்றும் அந்நியச் செலாவணி இருப்பு.', x: 50, y: 70 }
    ]
  },
  c12_eco_ch8: {
    id: 'diag_c12_eco_ch8',
    chapterId: 'c12_eco_ch8',
    titleEn: 'International Economic Architecture: IMF, World Bank & WTO Mandates',
    titleTa: 'சர்வதேச பொருளாதார அமைப்புகள்: IMF, உலக வங்கி & WTO கட்டமைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="40" width="160" height="120" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x="110" y="70" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="14">IMF (1945)</text>
      <text x="110" y="92" textAnchor="middle" fill="#1d4ed8" fontSize="11">Short-term Liquidity</text>
      <text x="110" y="110" textAnchor="middle" fill="#64748b" fontSize="10">BOP Crisis Bailouts</text>
      <text x="110" y="128" textAnchor="middle" fill="#64748b" fontSize="10">Special Drawing Rights (SDR)</text>

      <rect x="220" y="40" width="160" height="120" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="70" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="14">World Bank (IBRD)</text>
      <text x="300" y="92" textAnchor="middle" fill="#15803d" fontSize="11">Long-term Development</text>
      <text x="300" y="110" textAnchor="middle" fill="#64748b" fontSize="10">Infrastructure & Poverty</text>
      <text x="300" y="128" textAnchor="middle" fill="#64748b" fontSize="10">IDA Concessional Loans</text>

      <rect x="410" y="40" width="160" height="120" rx="10" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
      <text x="490" y="70" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="14">WTO (1995)</text>
      <text x="490" y="92" textAnchor="middle" fill="#7e22ce" fontSize="11">Trade Rules & Tariffs</text>
      <text x="490" y="110" textAnchor="middle" fill="#64748b" fontSize="10">Dispute Settlement</text>
      <text x="490" y="128" textAnchor="middle" fill="#64748b" fontSize="10">TRIPS & TRIMS Agreements</text>

      <rect x="120" y="190" width="360" height="75" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="300" y="220" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="13">Regional Alliances: BRICS & New Development Bank</text>
      <text x="300" y="242" textAnchor="middle" fill="#b45309" fontSize="11">Emerging economies fostering South-South development cooperation</text>
    </svg>`,
    labels: [
      { id: 'imf1', labelEn: 'IMF (Monetary Stability)', labelTa: 'சர்வதேச நிதியம் (IMF)', descriptionEn: 'Provides short-term financial lifelines to nations experiencing critical Balance of Payments shortfalls.', descriptionTa: 'அயல்நாட்டுச் செலுத்து சமநிலை நெருக்கடியில் உள்ள நாடுகளுக்கு குறுகிய கால நிதியுதவி அளிக்கிறது.', x: 18, y: 35 },
      { id: 'wb1', labelEn: 'World Bank Group (IBRD + IDA)', labelTa: 'உலக வங்கி குழுமம்', descriptionEn: 'Provides multi-decade infrastructure loans for dams, schools, health grids, and rural roads.', descriptionTa: 'நீண்ட கால கட்டமைப்பு வளர்ச்சி மற்றும் வறுமை ஒழிப்புக்கான கடன்களை வழங்குகிறது.', x: 50, y: 35 },
      { id: 'wto1', labelEn: 'WTO Rules & Fair Trade', labelTa: 'உலக வர்த்தக அமைப்பு (WTO)', descriptionEn: 'Administers global multilateral trade rules, eliminates unfair subsidies, and arbitrates trade disputes.', descriptionTa: 'பன்னாட்டு வர்த்தக தடைகளை நீக்கி, நியாயமான வர்த்தக விதிகளை அமல்படுத்துகிறது.', x: 82, y: 35 },
      { id: 'brics1', labelEn: 'BRICS & Regional Cooperation', labelTa: 'பிரிக்ஸ் & பிராந்திய ஒத்துழைப்பு', descriptionEn: 'Brazil, Russia, India, China, South Africa collective funding sustainable emerging infrastructure.', descriptionTa: 'வளரும் நாடுகள் தங்களுக்குள் வர்த்தகத்தை மேம்படுத்தும் புதிய வளர்ச்சி வங்கி.', x: 50, y: 75 }
    ]
  },
  c12_eco_ch9: {
    id: 'diag_c12_eco_ch9',
    chapterId: 'c12_eco_ch9',
    titleEn: 'Fiscal Economics: Budget Anatomy, Tax Architecture & Deficit Pyramid',
    titleTa: 'நிதியியல் பற்றாக்குறை vs முதன்மைப் பற்றாக்குறை கட்டமைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="120" y="25" width="360" height="55" rx="10" fill="#f8fafc" stroke="#3b82f6" strokeWidth="2" />
      <text x="300" y="48" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Total Government Expenditure (Budget Size)</text>
      <text x="300" y="68" textAnchor="middle" fill="#64748b" fontSize="11">Revenue Outlays (Salaries, Subsidies) + Capital (Highways, Defense)</text>

      <path d="M 300 80 L 300 115" stroke="#64748b" strokeWidth="2" />

      <rect x="150" y="115" width="300" height="60" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="300" y="140" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="13">Fiscal Deficit = Total Exp - Non-debt Receipts</text>
      <text x="300" y="160" textAnchor="middle" fill="#dc2626" fontSize="11">Represents total net market borrowing of the government</text>

      <path d="M 300 175 L 300 210" stroke="#ef4444" strokeWidth="2" />

      <rect x="180" y="210" width="240" height="65" rx="10" fill="#ecfdf5" stroke="#10b981" strokeWidth="2" />
      <text x="300" y="235" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="13">Primary Deficit = Fiscal Deficit - Interest</text>
      <text x="300" y="258" textAnchor="middle" fill="#047857" fontSize="11">True current year fiscal stance without legacy debt burden</text>
    </svg>`,
    labels: [
      { id: 'fd1', labelEn: 'Total Government Expenditure', labelTa: 'அரசின் மொத்த செலவு', descriptionEn: 'Sum of revenue expenditure and capital development outlays.', descriptionTa: 'வருவாய் செலவு மற்றும் மூலதன வளர்ச்சிச் செலவுகளின் கூட்டுத்தொகை.', x: 50, y: 20 },
      { id: 'fd2', labelEn: 'Fiscal Deficit (Total Borrowing)', labelTa: 'நிதியியல் பற்றாக்குறை (மொத்த கடன்)', descriptionEn: 'Expenditure gap financed by sovereign debt borrowings.', descriptionTa: 'அரசு திரட்ட வேண்டிய மொத்த கடன் தேவையை வெளிப்படுத்தும் பற்றாக்குறை.', x: 50, y: 50 },
      { id: 'fd3', labelEn: 'Primary Deficit (Net Current Stance)', labelTa: 'முதன்மைப் பற்றாக்குறை', descriptionEn: 'Fiscal deficit after stripping away mandatory interest payments on past debt.', descriptionTa: 'கடந்த கால கடன்களுக்கான வட்டிக் கொடுப்பனவுகளை நீக்கிய நடப்பு பற்றாக்குறை.', x: 50, y: 80 }
    ]
  },
  c12_eco_ch10: {
    id: 'diag_c12_eco_ch10',
    chapterId: 'c12_eco_ch10',
    titleEn: 'Environmental Economics: Material Balance Model & Kuznets Curve',
    titleTa: 'சுற்றுச்சூழல் பொருள் சமநிலை மாதிரி சுழற்சி',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <circle cx="110" cy="120" r="65" fill="#ecfdf5" stroke="#10b981" strokeWidth="2.5" />
      <text x="110" y="110" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="13">Natural Environment</text>
      <text x="110" y="130" textAnchor="middle" fill="#047857" fontSize="10">Raw Material Source &</text>
      <text x="110" y="145" textAnchor="middle" fill="#047857" fontSize="10">Waste Absorptive Sink</text>

      <path d="M 180 90 Q 250 60 320 90" stroke="#059669" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <text x="250" y="65" textAnchor="middle" fill="#059669" fontSize="11">Inputs: Minerals, Water, Energy</text>

      <rect x="320" y="70" width="230" height="100" rx="12" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="435" y="100" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Economy: Production & Households</text>
      <text x="435" y="122" textAnchor="middle" fill="#2563eb" fontSize="11">Factories produce consumer goods</text>
      <text x="435" y="142" textAnchor="middle" fill="#1d4ed8" fontSize="10">Thermodynamics 1st Law: Matter Conserved</text>

      <path d="M 320 150 Q 250 180 180 150" stroke="#ef4444" strokeWidth="2.5" fill="none" markerEnd="url(#arrow)" />
      <text x="250" y="195" textAnchor="middle" fill="#dc2626" fontSize="11">Residuals: CO₂, Solid Wastes, Effluents</text>

      <rect x="100" y="225" width="400" height="45" rx="8" fill="#fefce8" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="300" y="252" textAnchor="middle" fill="#92400e" fontSize="11">Environmental Kuznets Curve: Pollution peaks then declines with green tech</text>
    </svg>`,
    labels: [
      { id: 'mb1', labelEn: 'Natural Resource Inputs', labelTa: 'இயற்கை வள உள்ளீடுகள்', descriptionEn: 'Raw materials, minerals, water, and fossil fuels extracted from the environment.', descriptionTa: 'இயற்கையிலிருந்து எடுக்கப்படும் தாதுக்கள், நீர், எரிபொருள் மற்றும் மூலப்பொருட்கள்.', x: 20, y: 50 },
      { id: 'mb2', labelEn: 'Production & Household Consumption', labelTa: 'உற்பத்தி மற்றும் இல்ல நுகர்வு', descriptionEn: 'Factories transform resources into goods consumed by households.', descriptionTa: 'தொழிற்சாலைகள் பொருட்களை உற்பத்தி செய்து இல்லங்கள் நுகர்கின்றன.', x: 50, y: 30 },
      { id: 'mb3', labelEn: 'Residual Wastes & Pollution', labelTa: 'கழிவுகளும் மாசுபாடும்', descriptionEn: 'Gases, solid wastes, and toxic effluents discharged back into air, land, and water.', descriptionTa: 'வாயுக்கள் மற்றும் திடக் கழிவுகள் மீண்டும் இயற்கையிலேயே விடப்படுகின்றன.', x: 80, y: 50 }
    ]
  },
  c12_eco_ch11: {
    id: 'diag_c12_eco_ch11',
    chapterId: 'c12_eco_ch11',
    titleEn: 'Ragnar Nurkse’s Vicious Circle of Poverty & Strategic Planning Framework',
    titleTa: 'நர்க்சியின் வறுமையின் நச்சுச் சுழல் மற்றும் திட்டமிடல் கட்டமைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="200" y="20" width="200" height="50" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="300" y="45" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="12">Low National Productivity</text>
      <text x="300" y="60" textAnchor="middle" fill="#dc2626" fontSize="10">குறைந்த உற்பத்தித் திறன்</text>

      <rect x="380" y="110" width="190" height="50" rx="10" fill="#fff7ed" stroke="#f97316" strokeWidth="2" />
      <text x="475" y="135" textAnchor="middle" fill="#9a3412" fontWeight="bold" fontSize="12">Low Real Income</text>
      <text x="475" y="150" textAnchor="middle" fill="#ea580c" fontSize="10">குறைந்த உண்மை வருமானம்</text>

      <rect x="200" y="200" width="200" height="50" rx="10" fill="#fefce8" stroke="#eab308" strokeWidth="2" />
      <text x="300" y="225" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="12">Low Savings & Investment</text>
      <text x="300" y="240" textAnchor="middle" fill="#ca8a04" fontSize="10">குறைந்த சேமிப்பு & முதலீடு</text>

      <rect x="30" y="110" width="190" height="50" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="125" y="135" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="12">Deficiency of Capital</text>
      <text x="125" y="150" textAnchor="middle" fill="#2563eb" fontSize="10">மூலதனப் பற்றாக்குறை</text>

      <path d="M 380 45 Q 475 45 475 110" stroke="#dc2626" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 475 160 Q 475 225 400 225" stroke="#ea580c" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 200 225 Q 125 225 125 160" stroke="#ca8a04" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />
      <path d="M 125 110 Q 125 45 200 45" stroke="#2563eb" strokeWidth="2" fill="none" markerEnd="url(#arrow)" />

      <text x="300" y="135" textAnchor="middle" fill="#be123c" fontWeight="bold" fontSize="13">Nurkse’s Vicious Circle</text>
      <text x="300" y="152" textAnchor="middle" fill="#475569" fontSize="10">Break with Big Push Investment</text>
    </svg>`,
    labels: [
      { id: 'vcp1', labelEn: 'Supply-Side Vicious Circle', labelTa: 'அளிப்பு பக்க நச்சுச் சுழல்', descriptionEn: 'Low income leads to low capacity to save, causing low capital formation and low productivity.', descriptionTa: 'குறைந்த வருமானம் சேமிப்பைக் குறைத்து, மூலதனப் பற்றாக்குறையால் உற்பத்தித்திறனை வீழ்த்துகிறது.', x: 75, y: 40 },
      { id: 'vcp2', labelEn: 'Demand-Side Vicious Circle', labelTa: 'தேவை பக்க நச்சுச் சுழல்', descriptionEn: 'Low purchasing power limits market size, discouraging private entrepreneurs from investing.', descriptionTa: 'மக்களிடம் வாங்கும் சக்தி குறைவாக இருப்பதால் சந்தை சுருங்கி புதிய முதலீடுகள் முடங்குகின்றன.', x: 25, y: 40 },
      { id: 'vcp3', labelEn: 'NITI Aayog & Strategic Planning', labelTa: 'நிதி ஆயோக் & திட்டமிடல்', descriptionEn: 'Government acts as catalyst: infrastructure injection breaks circular stagnation via balanced growth.', descriptionTa: 'அரசு கல்வி, சுகாதாரம் மற்றும் கட்டமைப்பில் முதலீடு செய்து நச்சுச் சுழலை உடைக்கிறது.', x: 50, y: 75 }
    ]
  },
  c12_eco_ch12: {
    id: 'diag_c12_eco_ch12',
    chapterId: 'c12_eco_ch12',
    titleEn: 'Econometric Methodology Pipeline: Specification, OLS Estimation & Hypothesis Testing',
    titleTa: 'பொருளாதார அளவையியல் படிநிலைகள்: மாதிரி உருவாக்கம், OLS மதிப்பீடு & முன்கணிப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="50" width="115" height="80" rx="8" fill="#f8fafc" stroke="#3b82f6" strokeWidth="1.5" />
      <text x="87" y="80" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="11">1. Theory</text>
      <text x="87" y="100" textAnchor="middle" fill="#64748b" fontSize="9">Economic Law</text>
      <text x="87" y="115" textAnchor="middle" fill="#64748b" fontSize="9">Y = f(X)</text>

      <rect x="170" y="50" width="115" height="80" rx="8" fill="#f8fafc" stroke="#10b981" strokeWidth="1.5" />
      <text x="227" y="80" textAnchor="middle" fill="#065f46" fontWeight="bold" fontSize="11">2. Model</text>
      <text x="227" y="100" textAnchor="middle" fill="#64748b" fontSize="9">Y = β₀ + β₁X + u</text>
      <text x="227" y="115" textAnchor="middle" fill="#64748b" fontSize="9">Error Term u</text>

      <rect x="310" y="50" width="115" height="80" rx="8" fill="#f8fafc" stroke="#f59e0b" strokeWidth="1.5" />
      <text x="367" y="80" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="11">3. OLS Estimation</text>
      <text x="367" y="100" textAnchor="middle" fill="#64748b" fontSize="9">Min ∑uᵢ²</text>
      <text x="367" y="115" textAnchor="middle" fill="#64748b" fontSize="9">Coefficients</text>

      <rect x="450" y="50" width="115" height="80" rx="8" fill="#f8fafc" stroke="#8b5cf6" strokeWidth="1.5" />
      <text x="507" y="80" textAnchor="middle" fill="#5b21b6" fontWeight="bold" fontSize="11">4. Testing</text>
      <text x="507" y="100" textAnchor="middle" fill="#64748b" fontSize="9">t-test & R²</text>
      <text x="507" y="115" textAnchor="middle" fill="#64748b" fontSize="9">Forecast</text>

      <path d="M 145 90 L 170 90" stroke="#3b82f6" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 285 90 L 310 90" stroke="#10b981" strokeWidth="2" markerEnd="url(#arrow)" />
      <path d="M 425 90 L 450 90" stroke="#f59e0b" strokeWidth="2" markerEnd="url(#arrow)" />

      <rect x="80" y="175" width="440" height="85" rx="10" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fill="#1e3a8a" fontWeight="bold" fontSize="13">Econometrics = Economics + Mathematics + Statistics</text>
      <text x="300" y="228" textAnchor="middle" fill="#1d4ed8" fontSize="11">Transforms qualitative theoretical claims into empirically verified quantitative predictions</text>
    </svg>`,
    labels: [
      { id: 'ecm1', labelEn: 'Model Specification & Stochastic Disturbance', labelTa: 'மாதிரி உருவாக்கம் & எஞ்சிய பிழை (u)', descriptionEn: 'Formulating empirical relationship Y = β₀ + β₁X + u; error term u captures unobserved human factors.', descriptionTa: 'பொருளியல் சமன்பாட்டில் மனித நடத்தை மாறுபாடுகளைக் குறிக்கும் எஞ்சிய பிழை u.', x: 30, y: 30 },
      { id: 'ecm2', labelEn: 'Ordinary Least Squares (OLS) Estimators', labelTa: 'குறைந்தபட்ச வர்க்க முறை (OLS)', descriptionEn: 'Best Linear Unbiased Estimator (BLUE) minimizing sum of squared residuals ∑eᵢ².', descriptionTa: 'பிழைகளின் வர்க்கக் கூடுதலைக் குறைத்து துல்லியமான கெழுக்களைக் கணக்கிடும் முறை.', x: 65, y: 30 },
      { id: 'ecm3', labelEn: 'Goodness of Fit R² & Forecasting', labelTa: 'பொருத்தத்தின் தரம் R² & முன்கணிப்பு', descriptionEn: 'Coefficient of determination R² reveals what percentage of variation in Y is explained by X.', descriptionTa: 'சுயாதீன மாறி X எந்த அளவிற்கு சார்ந்த மாறி Y-ஐ விளக்குகிறது என்பதை R² அளவிடுகிறது.', x: 50, y: 70 }
    ]
  }
};

export const ECONOMICS_PART2_VIDEOS: Record<string, VideoExplainer> = {
  c12_eco_ch7: {
    id: 'vid_c12_eco_ch7',
    chapterId: 'c12_eco_ch7',
    titleEn: 'The Power of Comparative Advantage in International Trade',
    titleTa: 'பன்னாட்டு வர்த்தகத்தில் ஒப்பீட்டுச் செலவு சாதகத்தின் ஆற்றல்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Why Nations Trade',
        titleTa: 'நாடுகள் ஏன் வர்த்தகம் செய்கின்றன?',
        visualDescription: 'Ships carrying cargo across oceans between India, Japan, and Germany.',
        narrationEn: 'No country on earth can produce everything it needs cheaply. David Ricardo discovered the universal secret of global prosperity: comparative advantage!',
        narrationTa: 'உலகின் எந்த ஒரு நாடும் தனக்குத் தேவையான அனைத்தையும் மலிவாக உற்பத்தி செய்ய முடியாது. ரிக்கார்டோவின் ஒப்பீட்டுச் செலவே உலக வர்த்தகத்தின் ரகசியம்!',
        conceptKey: 'Comparative Cost Advantage'
      },
      {
        sceneNumber: 2,
        titleEn: 'Opportunity Cost in Action',
        titleTa: 'வாய்ப்புச் செலவின் செயல்பாடு',
        visualDescription: 'Farmers in Tamil Nadu cultivating spices while engineers in Germany manufacture precision automobiles, exchanging goods.',
        narrationEn: 'Even if one nation could do both, specializing in what you do best frees up resources and expands consumption for everyone.',
        narrationTa: 'ஒரு நாடால் இரண்டையும் செய்ய முடிந்தாலும், மிகச் சிறந்ததில் நிபுணத்துவம் பெற்று மற்றொன்றை இறக்குமதி செய்வதே இரு நாடுகளுக்கும் லாபம் தரும்.',
        conceptKey: 'Specialization & Gains from Trade'
      },
      {
        sceneNumber: 3,
        titleEn: 'Balancing the Ledger: The BOP',
        titleTa: 'செலுத்து சமநிலையை சமன் செய்தல்',
        visualDescription: 'A balance scale weighing export earnings against import spending, with foreign currency reserves balancing the tilt.',
        narrationEn: 'The Balance of Payments ensures every dollar flowing into a nation matches every dollar flowing out, keeping currencies stable.',
        narrationTa: 'அயல்நாட்டுச் செலுத்து சமநிலை ஒரு நாட்டின் உள்வரும் மற்றும் வெளிச்செல்லும் பணத்தை சமன் செய்து நாணயத்தின் மதிப்பை பாதுகாக்கிறது.',
        conceptKey: 'Balance of Payments Stability'
      }
    ]
  },
  c12_eco_ch8: {
    id: 'vid_c12_eco_ch8',
    chapterId: 'c12_eco_ch8',
    titleEn: 'Guardians of the Global Economy: IMF, World Bank & WTO',
    titleTa: 'உலகப் பொருளாதாரத்தின் பாதுகாவலர்கள்: IMF, உலக வங்கி & WTO',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Bretton Woods Twins: Born from War',
        titleTa: 'பிரெட்டன் வுட்ஸ் இரட்டையர்கள்: உலகப் போருக்குப் பின்',
        visualDescription: 'Economists in 1944 New Hampshire drafting charters for the IMF and World Bank to prevent future global depressions.',
        narrationEn: 'After the destruction of World War II, nations met at Bretton Woods to create global institutions that would stop currency wars and fund reconstruction.',
        narrationTa: 'இரண்டாம் உலகப் போரின் பேரழிவிற்குப் பிறகு, நாணயப் போர்களைத் தடுத்து உலகை மறுகட்டமைக்க 1944-ல் இவ்வமைப்புகள் உருவாக்கப்பட்டன.',
        conceptKey: 'Bretton Woods Conference 1944'
      },
      {
        sceneNumber: 2,
        titleEn: 'IMF as the ER Doctor, World Bank as the Builder',
        titleTa: 'IMF ஒரு அவசர மருத்துவர், உலக வங்கி ஒரு கட்டுநர்',
        visualDescription: 'An ambulance carrying emergency IMF emergency loans to a country during a currency crisis, next to a World Bank hydro dam.',
        narrationEn: 'Think of the IMF as the emergency room doctor when a nation runs out of dollars, while the World Bank is the architect building long-term dams, ports, and schools.',
        narrationTa: 'டாலர் தட்டுப்பாடு வரும்போது நாட்டை காப்பாற்றும் அவசர மருத்துவர் IMF; பல தலைமுறைகளுக்கான அணைகள் மற்றும் பள்ளிகளைக் கட்டும் பொறியாளர் உலக வங்கி.',
        conceptKey: 'Emergency Liquidity vs Infrastructure'
      },
      {
        sceneNumber: 3,
        titleEn: 'The WTO Referee on Global Trade',
        titleTa: 'உலக வர்த்தகத்தின் நடுவர்: WTO',
        visualDescription: 'Container terminals resolving export disputes under WTO rules, preventing trade wars.',
        narrationEn: 'The World Trade Organization acts as the rule-keeper and referee, preventing unfair tariffs and ensuring developing nations get fair access to global consumers.',
        narrationTa: 'உலக வர்த்தக அமைப்பு ஒரு நடுவர் போல் செயல்பட்டு அநியாய வரிகளைத் தடுத்து வளரும் நாடுகளுக்கு சம உரிமை கிடைப்பதை உறுதி செய்கிறது.',
        conceptKey: 'Multilateral Dispute Settlement'
      }
    ]
  },
  c12_eco_ch9: {
    id: 'vid_c12_eco_ch9',
    chapterId: 'c12_eco_ch9',
    titleEn: 'Inside the Union Budget: Taxes, Deficits & the Nation’s Wallet',
    titleTa: 'மத்திய பட்ஜெட்டின் ரகசியம்: வரிகள், பற்றாக்குறை மற்றும் நாட்டின் நிதி',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Where the Rupee Comes From',
        titleTa: 'ரூபாய் எங்கிருந்து வருகிறது?',
        visualDescription: 'A pie chart of government revenue: GST, Corporate Tax, Income Tax, and borrowings.',
        narrationEn: 'Every year, the finance minister presents the budget. Direct taxes from our salaries and GST from our purchases fill the national treasury.',
        narrationTa: 'ஒவ்வொரு ஆண்டும் நிதி அமைச்சர் தாக்கல் செய்யும் பட்ஜெட்டில் நமது வருமான வரியும் ஜிஎஸ்டி வரியும் கருவூலத்தை நிரப்புகின்றன.',
        conceptKey: 'Canons of Taxation & GST'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Deficit Dilemma',
        titleTa: 'பற்றாக்குறையின் சவால்',
        visualDescription: 'Government constructing massive rail networks, ports, and welfare schools, requiring borrowed funds.',
        narrationEn: 'When spending on roads, hospitals, and defense exceeds tax revenue, the gap is the Fiscal Deficit, funded through bonds.',
        narrationTa: 'சாலைகள், மருத்துவமனைகள் மற்றும் ராணுவத்திற்கு வரி வருவாயை விட கூடுதல் செலவு ஏற்படும் போது உண்டாகும் இடைவெளியே நிதியியல் பற்றாக்குறை.',
        conceptKey: 'Fiscal Deficit & Public Debt'
      },
      {
        sceneNumber: 3,
        titleEn: 'Investing in Tomorrow',
        titleTa: 'நாளைய வளர்ச்சிக்கான முதலீடு',
        visualDescription: 'A modern high-speed electric train speeding across India with green solar panels lining the tracks.',
        narrationEn: 'Smart fiscal policy uses calculated borrowing to build high-return national assets that create wealth for future generations.',
        narrationTa: 'சரியான நிதியியல் கொள்கை எதிர்கால சந்ததிக்கான நிலையான சொத்துக்களை உருவாக்கி நாட்டின் பொருளாதாரத்தை உயர்த்துகிறது.',
        conceptKey: 'Productive Capital Formation'
      }
    ]
  },
  c12_eco_ch10: {
    id: 'vid_c12_eco_ch10',
    chapterId: 'c12_eco_ch10',
    titleEn: 'The Economics of Climate: Externalities & Sustainable Development',
    titleTa: 'சுற்றுச்சூழல் பொருளியல்: புறவிளைவுகள் மற்றும் நிலையான வளர்ச்சி',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Negative Externalities: The Unpaid Bill',
        titleTa: 'எதிர்மறை புறவிளைவுகள்: செலுத்தப்படாத விலை',
        visualDescription: 'A coal factory belching smoke, making neighborhood residents sick while selling cheap electricity.',
        narrationEn: 'When a factory pollutes a river, the factory owner makes profits while citizens pay the hospital bills. Economists call this a negative externality!',
        narrationTa: 'தொழிற்சாலை புகையை வெளியிடும் போது உரிமையாளர் லாபம் ஈட்டுகிறார்; ஆனால் சிகிச்சைக்கான விலையை அப்பகுதி மக்களே ஏற்கின்றனர்.',
        conceptKey: 'Market Failure & Negative Externalities'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Polluter Pays Principle & Carbon Taxes',
        titleTa: 'மாசுபடுத்துபவரே பொறுப்பேற்கும் தத்துவம்',
        visualDescription: 'Government levying a Pigovian tax on carbon emissions, pushing factories to install solar panels and filters.',
        narrationEn: 'By taxing pollution, the government forces polluters to internalize their costs, making clean green energy cheaper by comparison.',
        narrationTa: 'மாசு வரியை விதிப்பதன் மூலம் தொழிற்சாலைகள் சுத்தமான சூரிய ஆற்றலுக்கு மாறுவது கட்டாயமாகிறது.',
        conceptKey: 'Pigovian Taxes & Internalizing Externalities'
      },
      {
        sceneNumber: 3,
        titleEn: 'True Sustainable Development',
        titleTa: 'உண்மையான நிலையான வளர்ச்சி',
        visualDescription: 'Solar farms and electric transit running without depleting clean groundwater or cutting ancient forests.',
        narrationEn: 'Sustainable development meets the needs of today without stealing the resources and clean planet rightfully belonging to tomorrow’s children.',
        narrationTa: 'எதிர்கால தலைமுறையின் உரிமையைப் பறிக்காமல் இன்றைய தேவைகளை பூர்த்தி செய்வதே நிலையான வளர்ச்சி ஆகும்.',
        conceptKey: 'Brundtland Commission Definition'
      }
    ]
  },
  c12_eco_ch11: {
    id: 'vid_c12_eco_ch11',
    chapterId: 'c12_eco_ch11',
    titleEn: 'Breaking the Poverty Trap: Nurkse’s Big Push & Human Capital',
    titleTa: 'வறுமைச் சுழலை உடைத்தல்: நர்க்சியின் பெரும் உந்துதல் கோட்பாடு',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Why Poor Nations Stay Poor',
        titleTa: 'ஏழை நாடுகள் ஏழைகளாகவே இருப்பது ஏன்?',
        visualDescription: 'An illustration of Nurkse’s vicious cycle: low wages leading to empty bank accounts and dilapidated farm tools.',
        narrationEn: 'Ragnar Nurkse famously wrote: a country is poor because it is poor. Low incomes prevent people from saving, leaving industries starved of capital.',
        narrationTa: 'ரக்னர் நர்க்சி கூறினார்: ஒரு நாடு ஏழையாக இருப்பதாலேயே அது ஏழையாகவே தொடர்கிறது. குறைந்த வருமானம் சேமிப்பையும் முதலீட்டையும் முடக்குகிறது.',
        conceptKey: 'The Circular Trap of Underdevelopment'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Big Push: Simultaneous Investments',
        titleTa: 'பெரும் உந்துதல்: ஒருங்கிணைந்த முதலீடு',
        visualDescription: 'Building a shoe factory, a sock mill, and an electricity grid together so workers become each other’s customers.',
        narrationEn: 'Rosenstein-Rodan showed that a single factory might fail, but simultaneously building 20 different industries creates its own internal market!',
        narrationTa: 'ஒரே நேரத்தில் பல தொழில்களையும் மின்சாரக் கட்டமைப்பையும் உருவாக்கும் போது, தொழிலாளர்களே ஒருவருக்கொருவர் வாடிக்கையாளர்களாக மாறுகின்றனர்.',
        conceptKey: 'Balanced Growth Doctrine'
      },
      {
        sceneNumber: 3,
        titleEn: 'Human Capital: The Real Engine',
        titleTa: 'மனித மூலதனம்: உண்மையான வளர்ச்சி இயந்திரம்',
        visualDescription: 'Tamil Nadu students studying in smart classrooms and polytechnic laboratories, transforming into software and robotics engineers.',
        narrationEn: 'Investing in public schools, mid-day meals, and technical universities turns population from a demographic burden into an economic superpower.',
        narrationTa: 'கல்வி மற்றும் சுகாதாரத்தில் முதலீடு செய்வதன் மூலம் மனித வளம் நாட்டின் மாபெரும் பொருளாதார ஆற்றலாக உருவெடுக்கிறது.',
        conceptKey: 'Human Capital Formation'
      }
    ]
  },
  c12_eco_ch12: {
    id: 'vid_c12_eco_ch12',
    chapterId: 'c12_eco_ch12',
    titleEn: 'From Theory to Data: The Magic of Econometrics & OLS Regression',
    titleTa: 'கோட்பாட்டில் இருந்து தரவுக்கு: பொருளாதார அளவையியல் & OLS பின்னடைவு',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Economics Meets the Real World',
        titleTa: 'பொருளாதாரமும் நிஜ உலகத் தரவுகளும்',
        visualDescription: 'A scatter plot of dots showing household income on the X-axis and grocery expenditure on the Y-axis.',
        narrationEn: 'Economic theory tells us higher income means higher spending. But by how much? Econometrics uses statistical math to find the exact rupee answer!',
        narrationTa: 'வருமானம் கூடும் போது நுகர்வு கூடும் என்பது கோட்பாடு. ஆனால் எத்தனை ரூபாய் கூடும் என்பதை துல்லியமாகக் கணக்கிடுவதே பொருளாதார அளவையியல்!',
        conceptKey: 'Bridging Theory and Data'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Best Fit Line: Ordinary Least Squares',
        titleTa: 'மிகச் சிறந்த சமநிலைக் கோடு (OLS)',
        visualDescription: 'A linear regression line slicing right through scattered points, minimizing the squared vertical distance to each dot.',
        narrationEn: 'Gauss’s Ordinary Least Squares algorithm finds the single line that minimizes the sum of all squared prediction errors, giving us the famous slope β₁.',
        narrationTa: 'அனைத்து புள்ளிகளிலிருந்தும் ஏற்படும் பிழைகளின் வர்க்கக் கூடுதலைக் குறைத்து மிகச் சரியான நேர்க்கோட்டை OLS முறை தீர்மானிக்கிறது.',
        conceptKey: 'OLS Optimization Principle'
      },
      {
        sceneNumber: 3,
        titleEn: 'Forecasting the Future with Confidence',
        titleTa: 'எதிர்காலத்தை துல்லியமாகக் கணித்தல்',
        visualDescription: 'A data scientist running hypothesis t-tests and using R-squared to forecast next year’s inflation rate for policymakers.',
        narrationEn: 'With statistical significance tests and R-squared, econometricians help central banks and governments steer national policy with confidence.',
        narrationTa: 'R-வர்க்கம் மற்றும் t-சோதனைகள் மூலம் அரசு அதிகாரிகள் எதிர்கால பணவீக்கத்தை முன்கூட்டியே கணித்து சரியான முடிவுகளை எடுக்கின்றனர்.',
        conceptKey: 'Hypothesis Testing & Policy Simulation'
      }
    ]
  }
};
