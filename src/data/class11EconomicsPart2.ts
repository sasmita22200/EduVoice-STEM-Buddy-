import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 11 Economics - Part 2 (Chapters 7 to 12)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 7. Indian Economy (இந்தியப் பொருளாதாரம்)
 * 8. Indian Economy Before and After Independence (சுதந்திரத்திற்கு முன்னரும் பின்னரும் இந்தியப் பொருளாதாரம்)
 * 9. Development Experiences in India (இந்தியாவின் மேம்பாட்டு அனுபவங்கள்)
 * 10. Rural Economy (ஊரகப் பொருளாதாரம்)
 * 11. Tamil Nadu Economy (தமிழ்நாட்டுப் பொருளாதாரம்)
 * 12. Mathematical Methods for Economics (பொருளியலுக்கான கணித முறைகள்)
 */

export const CLASS_11_ECO_PART2_CHAPTERS: Chapter[] = [
  {
    id: 'c11_eco_ch7',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 7,
    titleEn: 'Chapter 7: Indian Economy',
    titleTa: 'பாடம் 7: இந்தியப் பொருளாதாரம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch8',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 8,
    titleEn: 'Chapter 8: Indian Economy Before and After Independence',
    titleTa: 'பாடம் 8: சுதந்திரத்திற்கு முன்னரும் பின்னரும் இந்தியப் பொருளாதாரம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch9',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 9,
    titleEn: 'Chapter 9: Development Experiences in India',
    titleTa: 'பாடம் 9: இந்தியாவின் மேம்பாட்டு அனுபவங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch10',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 10,
    titleEn: 'Chapter 10: Rural Economy',
    titleTa: 'பாடம் 10: ஊரகப் பொருளாதாரம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch11',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 11,
    titleEn: 'Chapter 11: Tamil Nadu Economy',
    titleTa: 'பாடம் 11: தமிழ்நாட்டுப் பொருளாதாரம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch12',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 2,
    unitNameEn: 'Part 2: Indian, Rural, Tamil Nadu Economy & Math Tools',
    unitNameTa: 'பகுதி 2: இந்திய, ஊரக, தமிழ்நாட்டுப் பொருளாதாரம் & கணித முறைகள்',
    chapterNumber: 12,
    titleEn: 'Chapter 12: Mathematical Methods for Economics',
    titleTa: 'பாடம் 12: பொருளியலுக்கான கணித முறைகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CLASS_11_ECO_PART2_NOTES: Record<string, NoteItem> = {
  c11_eco_ch7: {
    id: 'note_c11_eco_ch7',
    chapterId: 'c11_eco_ch7',
    titleEn: 'Chapter 7 Revision Notes: Indian Economy',
    titleTa: 'பாடம் 7 பாடக் குறிப்புகள்: இந்தியப் பொருளாதாரம்',
    contentEn: `# Chapter 7: Indian Economy

## 1. Features of the Indian Economy
- **Developing / Emerging Market Economy**: World's 5th largest economy by nominal GDP and 3rd largest by Purchasing Power Parity (PPP).
- **Mixed Economy**: Co-existence of vibrant private enterprise alongside public sector infrastructure.
- **Agrarian Core**: Over 50% of the workforce depends on agriculture, though its contribution to GDP is around 17-18%.
- **Demographic Dividend**: Young population profile; median age is approximately 28 years.
- **Weaknesses**: High income inequality, chronic underemployment, population pressure, inadequate infrastructure.

## 2. Natural Resources of India
- **Land**: 3.28 million sq km (2.4% of total world area, supporting ~17.7% of world population).
- **Forests**: National Forest Policy targets 33% forest cover; currently ~21-24%.
- **Minerals**: Rich in iron ore (haematite/magnetite), bauxite, mica (world leader), coal (Gondwana deposits), and limestone.
- **Water Resources**: Major perennial Himalayan rivers (Ganga, Brahmaputra, Indus) and rain-fed Peninsular rivers (Godavari, Krishna, Cauvery).

## 3. Infrastructure
- **Economic Infrastructure**:
  - **Railways**: Indian Railways is among the world's largest networks under single management.
  - **Roadways**: Golden Quadrilateral (connecting Delhi, Mumbai, Chennai, Kolkata) and National Highways.
  - **Ports & Shipping**: 12 Major ports handling bulk maritime commerce.
  - **Energy**: Thermal power (~60%), Renewable/Hydro (~38%), Nuclear (~2%).
- **Social Infrastructure**: Education (Sarva Shiksha Abhiyan, NEP 2020) and Healthcare (Ayushman Bharat, primary healthcare centers).

## 4. Demographic Profile (Census 2011 Data)
- **Population**: 1.21 billion (Census 2011).
- **Density**: 382 persons per square kilometer (Bihar highest: 1106; Arunachal Pradesh lowest: 17).
- **Sex Ratio**: 940 females per 1000 males (Kerala highest: 1084; Haryana lowest: 879).
- **Literacy Rate**: 74.04% (Males: 82.14%, Females: 65.46%; Kerala highest: 94.0%).
- **Life Expectancy**: ~69.4 years.
- **Human Development Index (HDI)**: Developed by Mahbub ul Haq and Amartya Sen (UNDP). Encompasses Life Expectancy, Education, and Per Capita GNI.`,
    contentTa: `# பாடம் 7: இந்தியப் பொருளாதாரம்

## 1. இந்தியப் பொருளாதாரத்தின் இயல்புகள்
- **வளர்ந்து வரும் பொருளாதாரம்**: பெயரளவு ஜிடிபி-யில் உலகின் 5-வது இடத்திலும், வாங்கும் திறன் சமநிலையில் (PPP) 3-வது இடத்திலும் உள்ளது.
- **கலப்புப் பொருளாதாரம்**: பொதுத்துறை மற்றும் தனியார்துறை இரண்டும் இணைந்து செயல்படுகின்றன.
- **வேளாண்மை ஆதிக்கம்**: 50%-க்கும் அதிகமான மக்கள் தங்கள் வாழ்வாதாரத்திற்கு வேளாண்மையை நம்பியுள்ளனர்.
- **மக்கள்தொகை ஈவுத்தொகை (Demographic Dividend)**: இளைஞர்களின் எண்ணிக்கை அதிகமுள்ள ஒரு துடிப்பான நாடு.

## 2. இயற்கை வளங்கள்
- **நிலப்பரப்பு**: 32.8 இலட்சம் சதுர கி.மீ (உலகின் மொத்த பரப்பில் 2.4%, ஆனால் உலக மக்கள்தொகையில் 17.7% வசிக்கிறது).
- **காடுகள்**: தேசியக் கொள்கைப்படி 33% இருக்க வேண்டும்; தற்போது சுமார் 21.7% உள்ளது.
- **கனிமங்கள்**: இரும்புத்தாது, பாக்சைட், நிலக்கரி மற்றும் மைக்கா உற்பத்தியில் முன்னணியில் உள்ளது.

## 3. மக்கள்தொகை விவரங்கள் (2011 மக்கள்தொகைக் கணக்கெடுப்பு)
- **மக்கள்தொகை**: 121 கோடி (2011).
- **மக்களடர்த்தி**: ஒரு சதுர கி.மீ-க்கு 382 பேர் (பீகார் அதிகம்: 1106; அருணாசலப் பிரதேசம் குறைவு: 17).
- **பாலின விகிதம்**: 1000 ஆண்களுக்கு 940 பெண்கள் (கேரளா அதிகம்: 1084; ஹரியானா குறைவு: 879).
- **கல்வியறிவு வீதம்**: 74.04% (கேரளா முதலிடம்: 94%).
- **மனித மேம்பாட்டுக் குறியீடு (HDI)**: மஹபூப்-உல்-ஹக் மற்றும் அமர்த்தியா சென் ஆகியோரால் உருவாக்கப்பட்டது.`,
    authorContext: 'Indian economic landscape, Census 2011 benchmarks, and UNDP HDI metrics.',
    keyFormulas: [
      'Population Density = Total Population / Total Land Area (sq km)',
      'Sex Ratio = (Number of Females / Number of Males) * 1000',
      'HDI Dimensions: Life Expectancy Index + Education Index + GNI Per Capita Index'
    ],
    workedExamples: [
      {
        question: 'Which state in India registered the highest sex ratio according to Census 2011?',
        solution: 'Kerala, with 1084 females per 1000 males.'
      }
    ]
  },
  c11_eco_ch8: {
    id: 'note_c11_eco_ch8',
    chapterId: 'c11_eco_ch8',
    titleEn: 'Chapter 8 Revision Notes: Indian Economy Before and After Independence',
    titleTa: 'பாடம் 8 பாடக் குறிப்புகள்: சுதந்திரத்திற்கு முன்னரும் பின்னரும் இந்தியப் பொருளாதாரம்',
    contentEn: `# Chapter 8: Indian Economy Before and After Independence

## 1. British Economic Exploitation
- **De-industrialization**: Systematic dismantling of India's world-famous artisanal handlooms and handicrafts to make India an exporter of raw materials (cotton, indigo) and an importer of Manchester textiles.
- **Land Tenure Systems**:
  1. *Zamindari System (Lord Cornwallis - 1793, Bengal)*: Landlords collected exorbitant rents; cultivators had zero ownership rights.
  2. *Ryotwari System (Thomas Munro - 1820, Madras)*: Direct assessment between the British government and individual ryots (peasants).
  3. *Mahalwari System (Holt Mackenzie - 1822)*: Village community collectively responsible for revenue payment.
- **Drain of Wealth Theory**: Formulated by **Dadabhai Naoroji** in his historic work *Poverty and Un-British Rule in India* (1901), demonstrating unilateral resource outflow without any material return.

## 2. Five-Year Plans (1951 - 2017)
- Adopted from the Soviet Gosplan model under Prime Minister Jawaharlal Nehru.
- **1st Plan (1951-56)**: Harrod-Domar Model; focused on Agriculture and irrigation. Target 2.1%, Achieved 3.6%.
- **2nd Plan (1956-61)**: P.C. Mahalanobis Model; focused on Heavy basic industries and rapid industrialization.
- **3rd Plan (1961-66)**: Gadgil Yojana; hampered by Sino-Indian War (1962) and Indo-Pak War (1965). Led to "Plan Holiday" (1966-69).
- **4th Plan (1969-74)**: Growth with stability and progressive self-reliance. Nationalization of 14 major commercial banks (1969).
- **5th Plan (1974-79)**: Poverty eradication (*Garibi Hatao*) and self-reliance.
- **12th Plan (2012-17)**: Faster, More Inclusive, and Sustainable Growth. Final Five-Year Plan.

## 3. Green Revolution
- Initiated in the mid-1960s with High-Yielding Varieties (HYV) of wheat and rice seeds developed by Dr. Norman Borlaug (global father) and **Dr. M.S. Swaminathan** (father of Green Revolution in India).
- Package approach: HYV seeds + chemical fertilizers + pesticides + assured canal/tube-well irrigation.
- Transformed India from a ship-to-mouth PL-480 grain deficit nation into a self-sufficient grain exporter.

## 4. Bank Nationalization & NITI Aayog
- **Bank Nationalization**: 14 commercial banks in 1969 and 6 more banks in 1980 under Indira Gandhi to expand credit to priority sectors (agriculture, small village enterprises).
- **NITI Aayog (National Institution for Transforming India)**: Replaced Planning Commission on January 1, 2015. Acts as a think-tank promoting **Cooperative Federalism** with a bottom-up approach.`,
    contentTa: `# பாடம் 8: சுதந்திரத்திற்கு முன்னரும் பின்னரும் இந்தியப் பொருளாதாரம்

## 1. ஆங்கிலேயர் கால சுரண்டல்
- **பாரம்பரிய தொழில்கள் அழிவு**: இந்திய பருத்தி ஆடை மற்றும் கைவினைப் பொருட்கள் நசுக்கப்பட்டு, இங்கிலாந்திற்கு கச்சாப் பொருட்களை ஏற்றுமதி செய்யும் நாடாக மாற்றப்பட்டது.
- **நில உடைமை முறைகள்**:
  1. *ஜமீன்தாரி முறை (காரன்வாலிஸ் - 1793)*: இடைத்தரகர்களான ஜமீன்தார்கள் விவசாயிகளைச் சுரண்டினர்.
  2. *ரயத்துவாரி முறை (தாமஸ் மன்றோ - 1820)*: விவசாயிகளே நேரடியாக அரசுக்கு வரி செலுத்தினர்.
  3. *மகல்வாரி முறை*: கிராம சமூகம் கூட்டாக வரி செலுத்தியது.
- **செல்வச் சுரண்டல் கோட்பாடு (Drain Theory)**: தாதாபாய் நௌரோஜி தனது *வறுமையும் பிரிட்டனுக்கு ஒவ்வாத ஆட்சியும்* (1901) என்ற நூலில் ஆங்கிலேயர் இந்திய செல்வத்தை எடுத்துச் சென்றதை அம்பலப்படுத்தினார்.

## 2. ஐந்தாண்டுத் திட்டங்கள் (1951 - 2017)
- **முதல் திட்டம் (1951-56)**: ஹேரட்-டாமர் மாதிரி; விவசாயத்திற்கு முன்னுரிமை.
- **இரண்டாம் திட்டம் (1956-61)**: மகலனோபிஸ் மாதிரி; கனரக தொழில்களுக்கு முன்னுரிமை.
- **திட்ட விடுமுறைக் காலம் (1966-69)**: போர்கள் மற்றும் வறட்சி காரணமாக ஓராண்டுத் திட்டங்கள் செயல்படுத்தப்பட்டன.
- **பசுமைப் புரட்சி**: டாக்டர் எம்.எஸ். சுவாமிநாதன் அவர்களின் வழிகாட்டுதலில் வீரிய ரக விதைகள், உரங்கள் மூலம் உணவு உற்பத்தியில் தன்னிறைவு எட்டப்பட்டது.

## 3. நிதி ஆயோக் (NITI Aayog)
- ஜனவரி 1, 2015 அன்று திட்டக் குழுவிற்குப் பதிலாக 'நிதி ஆயோக்' (இந்திய மாற்றத்திற்கான தேசிய நிறுவனம்) தொடங்கப்பட்டது. இது கூட்டுறவு கூட்டாட்சியை ஊக்குவிக்கும் சிந்தனைக் குழுவாகும் (Think Tank).`,
    authorContext: 'Economic history from British colonial land tenures to Nehruvian planning and NITI Aayog.',
    keyFormulas: [
      'Dadabhai Naoroji: Drain of Wealth = Outflow of Indian revenue without tangible return',
      '1st Plan: Harrod-Domar Model (Growth = s / v)',
      '2nd Plan: P.C. Mahalanobis 4-Sector Heavy Industry Model'
    ],
    workedExamples: [
      {
        question: 'When was NITI Aayog established replacing the Planning Commission?',
        solution: 'January 1, 2015.'
      }
    ]
  },
  c11_eco_ch9: {
    id: 'note_c11_eco_ch9',
    chapterId: 'c11_eco_ch9',
    titleEn: 'Chapter 9 Revision Notes: Development Experiences in India',
    titleTa: 'பாடம் 9 பாடக் குறிப்புகள்: இந்தியாவின் மேம்பாட்டு அனுபவங்கள்',
    contentEn: `# Chapter 9: Development Experiences in India

## 1. 1991 Balance of Payments Crisis & NEP
In 1991, India faced severe fiscal stress and an acute foreign exchange crisis with reserves dwindling to just barely two weeks of imports.
Prime Minister P.V. Narasimha Rao and Finance Minister Dr. Manmohan Singh unveiled the **New Economic Policy (NEP) 1991**, dismantling the "License-Permit-Quota Raj".

## 2. The LPG Paradigm
1. **Liberalization (தாராளமயமாக்கல்)**:
   - Abolition of industrial licensing (except a handful like defense, hazardous chemicals).
   - Dilution of MRTP (Monopolies and Restrictive Trade Practices) Act, replaced by the Competition Act (2002).
   - Financial sector deregulation, interest rate deregulation, rupee devaluation, and current account convertibility.
2. **Privatization (தனியார்மயமாக்கல்)**:
   - De-reservation of public sector enterprises (reduced from 17 to just atomic energy and railway transport).
   - Disinvestment of government equity in Public Sector Undertakings (PSUs).
   - Introduction of Navratna, Maharatna, and Miniratna autonomy classifications.
3. **Globalization (உலகமயமாக்கல்)**:
   - Slashing customs duties and import tariffs to integrate India into the world trade network.
   - Welcoming Foreign Direct Investment (FDI) via automatic routes up to 100% in many sectors.
   - Signing WTO agreements (1995) governing intellectual property (TRIPS) and trade in services (GATS).

## 3. Structural Transformations & New Reforms
- **Special Economic Zones (SEZs)**: Duty-free enclave hubs enjoying tax holidays to stimulate export manufacturing.
- **Goods and Services Tax (GST)**: Implemented on **July 1, 2017**, subsuming multiple cascading central and state indirect taxes into a unified single national tax structure (One Nation, One Tax, One Market).
- **Demonetization (November 8, 2016)**: Withdrawal of ₹500 and ₹1000 banknotes to curb black money, fake currency, and accelerate digital banking adoption.
- **Insolvency and Bankruptcy Code (IBC - 2016)**: Time-bound resolution for non-performing corporate debts.`,
    contentTa: `# பாடம் 9: இந்தியாவின் மேம்பாட்டு அனுபவங்கள்

## 1. 1991 பொருளாதார நெருக்கடியும் புதிய பொருளாதாரக் கொள்கையும்
1991-ல் இந்தியா கடுமையான அந்நியச் செலாவணி பற்றாக்குறையையும் கடன் நெருக்கடியையும் சந்தித்தது. அப்போதைய பிரதமர் பி.வி. நரசிம்மராவ் மற்றும் நிதியமைச்சர் டாக்டர் மன்மோகன் சிங் புதிய பொருளாதாரக் கொள்கையை (LPG) அறிமுகப்படுத்தினர்.

## 2. தாராளமயமாக்கல், தனியார்மயமாக்கல், உலகமயமாக்கல் (LPG)
1. **தாராளமயமாக்கல்**: தொழில் உரிமங்கள் ரத்து செய்யப்பட்டன; கட்டுப்பாடுகள் தளர்த்தப்பட்டு தொழில் தொடங்க எளிதாக்கப்பட்டது.
2. **தனியார்மயமாக்கல்**: பொதுத்துறை நிறுவனங்களின் பங்குகள் விற்கப்பட்டு (Disinvestment) தனியார் முதலீடுகளுக்கு கதவுகள் திறக்கப்பட்டன.
3. **உலகமயமாக்கல்**: இறக்குமதி வரிகள் குறைக்கப்பட்டு உலக வணிக அமைப்போடு (WTO) இந்தியப் பொருளாதாரம் இணைக்கப்பட்டது. வெளிநாட்டு நேரடி முதலீடு (FDI) அனுமதிக்கப்பட்டது.

## 3. முக்கிய புதிய சீர்திருத்தங்கள்
- **சரக்கு மற்றும் சேவை வரி (GST)**: 2017 ஜூலை 1 முதல் ஒரே நாடு, ஒரே வரி என்ற நோக்கில் மறைமுக வரிகள் ஒருங்கிணைக்கப்பட்டன.
- **பணமதிப்பிழப்பு (Demonetization)**: 2016 நவம்பர் 8 அன்று ₹500 மற்றும் ₹1000 நோட்டுகள் செல்லாது என அறிவிக்கப்பட்டு டிஜிட்டல் பரிவர்த்தனைகள் ஊக்குவிக்கப்பட்டன.
- **சிறப்புப் பொருளாதார மண்டலங்கள் (SEZ)**: ஏற்றுமதியை அதிகரிக்க வரிச் சலுகைகளுடன் உருவாக்கப்பட்ட தொழிற்பேட்டைகள்.`,
    authorContext: 'Post-1991 macroeconomic structural reforms, LPG paradigms, and GST implementation.',
    keyFormulas: [
      'Current Account Deficit (CAD) = Trade Deficit + Net Invisible Deficit',
      'GST Tax Slabs: 0%, 5%, 12%, 18%, 28%'
    ],
    workedExamples: [
      {
        question: 'On which date was the Goods and Services Tax (GST) rolled out in India?',
        solution: 'July 1, 2017.'
      }
    ]
  },
  c11_eco_ch10: {
    id: 'note_c11_eco_ch10',
    chapterId: 'c11_eco_ch10',
    titleEn: 'Chapter 10 Revision Notes: Rural Economy',
    titleTa: 'பாடம் 10 பாடக் குறிப்புகள்: ஊரகப் பொருளாதாரம்',
    contentEn: `# Chapter 10: Rural Economy

## 1. Features of Rural Economy
Over 65-70% of India's population resides in rural areas. The rural economy is characterized by:
- Direct dependence on agriculture and allied agro-pastoral activities.
- Low per capita rural income and high incidence of poverty.
- Lack of modern basic physical infrastructure (all-weather roads, piped potable water, rural electrification).
- Dualistic economy (traditional subsistence methods coexisting with modern commercial farms).

## 2. Rural Unemployment and Poverty
- **Disguised Unemployment (மறைமுக வேலையின்மை)**: Marginal Physical Product ($MP_L$) of additional labor is zero or negative. More workers are engaged than strictly necessary.
- **Seasonal Unemployment**: Agricultural operations depend on monsoons, leaving farmers idle for 4 to 6 months annually.
- **Vicious Circle of Poverty (Ragnar Nurkse)**: Low income $\rightarrow$ low savings $\rightarrow$ low capital formation $\rightarrow$ low productivity $\rightarrow$ low income.

## 3. Rural Indebtedness
- Famous proverb: *"The Indian farmer is born in debt, lives in debt, dies in debt, and bequeaths debt."* (Sir Malcolm Darling).
- Causes: Crop failures due to erratic monsoons, unremunerative crop prices, high interest rates by usurious non-institutional moneylenders, and wasteful social expenditures.
- Institutional Credit: Regional Rural Banks (RRBs - 1975), **NABARD** (National Bank for Agriculture and Rural Development - July 12, 1982), and Kisan Credit Cards (KCC - 1998).

## 4. Key Rural Development Interventions
- **MGNREGA (2005)**: Mahatma Gandhi National Rural Employment Guarantee Act guarantees at least 100 days of wage employment per financial year to rural adult volunteers for unskilled manual work.
- **Self-Help Groups (SHGs) and Microfinance**: Empowering rural women through savings mobilization, bank linkages, and entrepreneurship.
- **PURA (Providing Urban Amenities to Rural Areas)**: Visionary spatial development model championed by former President **Dr. A.P.J. Abdul Kalam** to bridge the rural-urban divide through physical, electronic, knowledge, and economic connectivity.`,
    contentTa: `# பாடம் 10: ஊரகப் பொருளாதாரம்

## 1. ஊரகப் பொருளாதாரத்தின் சிறப்பியல்புகள்
இந்திய மக்கள்தொகையில் 65% க்கும் அதிகமானோர் கிராமப்புறங்களில் வசிக்கின்றனர்.
- வேளாண்மை முதன்மைத் தொழிலாக உள்ளது.
- தனிநபர் வருமானம் குறைவு; மறைமுக வேலையின்மை அதிகம்.
- போதுமான உள்கட்டமைப்பு வசதிகள் (சாலை, குடிநீர், மருத்துவம்) இன்மை.

## 2. ஊரக வேலையின்மையும் வறுமையும்
- **மறைமுக வேலையின்மை**: தேவைக்கு அதிகமான தொழிலாளர்கள் ஒரு வேலையில் ஈடுபடும் நிலை; இதில் இறுதிநிலை உழைப்பாளியின் உற்பத்தித் திறன் பூஜ்ஜியமாக ($MP = 0$) இருக்கும்.
- **பருவகால வேலையின்மை**: விவசாயம் பருவமழையைச் சார்ந்துள்ளதால் குறிப்பிட்ட பருவங்களில் மட்டும் வேலை வாய்ப்பு கிடைப்பது.
- **வறுமையின் நச்சுச் சுழல் (ரக்னர் நர்க்சு)**: குறைந்த வருமானம் $\rightarrow$ குறைந்த சேமிப்பு $\rightarrow$ குறைந்த முதலீடு $\rightarrow$ குறைந்த உற்பத்தித்திறன் $\rightarrow$ குறைந்த வருமானம்.

## 3. ஊரகக் கடன்தன்மை மற்றும் தீர்வுகள்
- *சர் மால்கம் டார்லிங்*: "இந்திய உழவன் கடனிலேயே பிறந்து, கடனிலேயே வாழ்ந்து, கடனிலேயே இறந்து, கடனையே விட்டுச் செல்கிறான்."
- தீர்வுகள்: **நபார்டு வங்கி (NABARD)** 1982 ஜூலை 12-ல் அமைக்கப்பட்டது.
- **மகாத்மா காந்தி தேசிய ஊரக வேலை உறுதித் திட்டம் (MGNREGA - 2005)**: ஆண்டுக்கு 100 நாட்கள் சட்டப்பூர்வ வேலை வாய்ப்பை உறுதி செய்கிறது.
- **பூரா திட்டம் (PURA)**: கிராமப்புறங்களில் நகர்ப்புற வசதிகளை ஏற்படுத்த டாக்டர் ஏ.பி.ஜே. அப்துல் கலாம் அவர்களால் முன்மொழியப்பட்ட உன்னதத் திட்டம்.`,
    authorContext: 'Rural agrarian structural problems, Malcolm Darling observations, and PURA spatial model.',
    keyFormulas: [
      'Disguised Unemployment: Marginal Product of Labor (MP_L) = 0',
      'NABARD: Established July 12, 1982 based on B. Sivaraman Committee recommendations'
    ],
    workedExamples: [
      {
        question: 'Who proposed the PURA (Providing Urban Amenities to Rural Areas) model?',
        solution: 'Dr. A.P.J. Abdul Kalam.'
      }
    ]
  },
  c11_eco_ch11: {
    id: 'note_c11_eco_ch11',
    chapterId: 'c11_eco_ch11',
    titleEn: 'Chapter 11 Revision Notes: Tamil Nadu Economy',
    titleTa: 'பாடம் 11 பாடக் குறிப்புகள்: தமிழ்நாட்டுப் பொருளாதாரம்',
    contentEn: `# Chapter 11: Tamil Nadu Economy

## 1. Economic Standing of Tamil Nadu
- **2nd Largest State Economy in India** by Gross State Domestic Product (GSDP), contributing substantially to national industrial and services output.
- **3rd Highest in Human Development Index (HDI)** among major states.
- High urbanization rate (~48.4% by Census 2011, highest among large states).
- Excellent health metrics: Lowest Infant Mortality Rate (IMR) and Maternal Mortality Ratio (MMR) in India after Kerala.

## 2. Sectoral Performance
- **Primary Sector (Agriculture)**: Cauvery delta ("Rice Bowl of Tamil Nadu"). Pioneer in drip irrigation, horticulture, poultry (Namakkal - "Egg City").
- **Secondary Sector (Industry & Manufacturing Clusters)**:
  - **Automobile Capital / "Detroit of Asia"**: Chennai manufactures over 30% of India's vehicles and 35% of auto components (Ford, Hyundai, BMW, Ashok Leyland, Renault-Nissan).
  - **Textile & Knitwear Valley**: Tirupur (exports over 50% of India's cotton knitwear, "Dollar City"), Coimbatore ("Manchester of South India"), Erode ("Loom City"), and Karur (home textiles).
  - **Leather Hub**: Vellore, Ambur, Ranipet, and Vaniyambadi account for ~60% of India's leather tanning and footwear exports.
  - **Printing & Fireworks Hub**: Sivakasi produces ~90% of India's fireworks, 80% of safety matches, and 60% of commercial color printing ("Little Japan" named by Nehru).
  - **Wind Energy**: Muppandal (Kanyakumari) is one of the world's largest operational onshore wind farms.
- **Tertiary Sector (Services)**:
  - **Health Capital of India**: Chennai attracts ~40% of India's medical tourists.
  - **Information Technology**: Chennai (OMR IT Corridor) and Coimbatore are premier software export hubs.
  - **Major Ports**: 3 major sea ports (Chennai, Kamarajar-Ennore, V.O. Chidambaranar-Tuticorin).`,
    contentTa: `# பாடம் 11: தமிழ்நாட்டுப் பொருளாதாரம்

## 1. தமிழ்நாட்டின் பொருளாதார நிலை
- இந்தியாவின் **இரண்டாவது பெரிய பொருளாதார மாநிலம்** (GSDP அடிப்படையில்).
- இந்தியாவின் மிகப்பெரிய நகரமயமாக்கப்பட்ட மாநிலங்களில் முதலிடம் (48.4%).
- மனித மேம்பாட்டுக் குறியீட்டில் (HDI) முன்னணி மாநிலங்களில் 3-வது இடம்; தாய்-சேய் இறப்பு விகிதம் மிகக் குறைவு.

## 2. முக்கிய தொழில் மண்டலங்கள் (Industrial Clusters)
- **ஆசியாவின் டெட்ராய்ட் (Detroit of Asia)**: சென்னை - இந்தியாவின் ஆட்டோமொபைல் உற்பத்தியில் 33% பங்கு வகிக்கிறது.
- **பின்னலாடை மற்றும் ஜவுளி நகரம்**:
  - திருப்பூர்: இந்தியாவின் 50% பின்னலாடை ஏற்றுமதி (டாலர் நகரம்).
  - கோயம்புத்தூர்: தென்னிந்தியாவின் மான்செஸ்டர்.
  - கரூர்: வீட்டு உபயோக ஜவுளிப் பொருட்கள்.
  - ஈரோடு: பட்டு மற்றும் மஞ்சள் நகரம்.
- **தோல் பதனிடும் தொழில்**: வேலூர், ஆம்பூர், ராணிப்பேட்டை - இந்தியாவின் 60% தோல் உற்பத்தி.
- **குட்டி ஜப்பான் (சிவகாசி)**: நேருவால் குட்டி ஜப்பான் என அழைக்கப்பட்ட சிவகாசி பட்டாசு, தீப்பெட்டி, மற்றும் அச்சுத் தொழிலில் முதலிடம் வகிக்கிறது.
- **மருத்துவத் தலைநகரம்**: சென்னை - இந்தியாவின் 40% மருத்துவச் சுற்றுலாப் பயணிகளை ஈர்க்கிறது.
- **முக்கிய துறைமுகங்கள்**: சென்னை, எண்ணூர் (காமராஜர்), தூத்துக்குடி (வ.உ.சி துறைமுகம்).`,
    authorContext: 'Industrial cluster economics, Southern manufacturing hub, and Human Development successes of Tamil Nadu.',
    keyFormulas: [
      'Urbanization Rate in TN: ~48.4% (Highest among large Indian states)',
      'Namakkal: Largest egg production hub in South Asia'
    ],
    workedExamples: [
      {
        question: 'Which city in Tamil Nadu is famously acclaimed as the "Detroit of Asia"?',
        solution: 'Chennai, due to its massive concentration of automobile manufacturing giants.'
      }
    ]
  },
  c11_eco_ch12: {
    id: 'note_c11_eco_ch12',
    chapterId: 'c11_eco_ch12',
    titleEn: 'Chapter 12 Revision Notes: Mathematical Methods for Economics',
    titleTa: 'பாடம் 12 பாடக் குறிப்புகள்: பொருளியலுக்கான கணித முறைகள்',
    contentEn: `# Chapter 12: Mathematical Methods for Economics

## 1. Role of Mathematics in Economic Analysis
Mathematics provides precision, rigor, conciseness, and verifiable proofs to economic theories and market models.

## 2. Linear Equations and Market Equilibrium
- Linear Demand Function: $Q_d = a - bP$
- Linear Supply Function: $Q_s = -c + dP$
- **Market Equilibrium**: Quantity demanded equals quantity supplied:
$$Q_d = Q_s \implies a - bP = -c + dP \implies P^* = \frac{a + c}{b + d}$$
Substitute $P^*$ back to obtain equilibrium quantity $Q^*$.

## 3. Differential Calculus Applications
- **Marginal Cost (MC)**: First derivative of Total Cost with respect to output:
  $$MC = \frac{d(TC)}{dQ}$$
- **Marginal Revenue (MR)**: First derivative of Total Revenue with respect to quantity:
  $$MR = \frac{d(TR)}{dQ}$$
- **Price Elasticity of Demand**:
  $$e_d = -\frac{P}{Q} \cdot \frac{dQ}{dP}$$
- **Profit Maximization Condition**:
  $$\text{Profit } \Pi = TR - TC$$
  - First-order condition (Necessary): $\frac{d\Pi}{dQ} = 0 \implies MR = MC$
  - Second-order condition (Sufficient): $\frac{d^2\Pi}{dQ^2} < 0 \implies \frac{d(MC)}{dQ} > \frac{d(MR)}{dQ}$ (MC cuts MR from below).

## 4. Integral Calculus Applications
- Finding Total Cost from Marginal Cost: $TC = \int MC \, dQ + k$ (where $k = TFC$).
- Finding Total Revenue from Marginal Revenue: $TR = \int MR \, dQ$.
- **Consumer's Surplus (CS)**: Area under demand curve from 0 to $q_0$ minus total expenditure:
  $$CS = \int_0^{q_0} P_d(q) \, dq - P_0 q_0$$
- **Producer's Surplus (PS)**: Total revenue minus area under supply curve from 0 to $q_0$:
  $$PS = P_0 q_0 - \int_0^{q_0} P_s(q) \, dq$$

## 5. Matrix Algebra and Cramer's Rule
Used to solve simultaneous systems of equations in multi-market equilibria:
$$AX = B \implies X = A^{-1} B$$
For a $2 \times 2$ system: $x = \frac{|A_1|}{|A|}, y = \frac{|A_2|}{|A|}$ (provided $|A| \neq 0$).`,
    contentTa: `# பாடம் 12: பொருளியலுக்கான கணித முறைகள்

## 1. பொருளியலில் கணித முறைகளின் பங்கு
கணிதம் பொருளாதார கோட்பாடுகளுக்குத் துல்லியத்தையும், தர்க்கரீதியான முடிவுகளையும் வழங்குகிறது.

## 2. சந்தை சமநிலை (Market Equilibrium)
- தேவைச் சார்பு: $Q_d = a - bP$
- அளிப்புச் சார்பு: $Q_s = -c + dP$
- தேவை மற்றும் அளிப்பு சமமாகுமிடத்தில் சமநிலை விலை உருவாகிறது: $Q_d = Q_s$.

## 3. வகை நுண்கணிதப் பயன்பாடுகள் (Differential Calculus)
- **இறுதிநிலைச் செலவு (MC)**: $MC = \frac{d(TC)}{dQ}$
- **இறுதிநிலை வருவாய் (MR)**: $MR = \frac{d(TR)}{dQ}$
- **தேவை நெகிழ்ச்சி**: $e_d = -\frac{P}{Q} \cdot \frac{dQ}{dP}$
- **இலாப உச்சநிலை நிபந்தனை**: $MR = MC$ மற்றும் இரண்டாம் வகைக்கெழு எதிர்மறையாக இருக்க வேண்டும்.

## 4. தொகை நுண்கணிதப் பயன்பாடுகள் (Integral Calculus)
- இறுதிநிலைச் செலவிலிருந்து மொத்தச் செலவு காணுதல்: $TC = \int MC \, dQ + k$.
- **நுகர்வோர் எச்சம் (CS)**:
$$CS = \int_0^{q_0} P(q) \, dq - P_0 q_0$$
- **உற்பத்தியாளர் எச்சம் (PS)**:
$$PS = P_0 q_0 - \int_0^{q_0} P_s(q) \, dq$$

## 5. அணிக்கோவைகள் மற்றும் கிராமரின் விதி (Cramer's Rule)
பல மாறிகளைக் கொண்ட சமன்பாடுகளின் தொகுப்பைத் தீர்க்க அணிகள் மற்றும் கிராமரின் விதி ($x = |A_1| / |A|$) பயன்படுகிறது.`,
    authorContext: 'Mathematical economics, differential and integral calculus, and matrix market algebra.',
    keyFormulas: [
      'MC = d(TC)/dQ; MR = d(TR)/dQ',
      'CS = Integral[0 to q0] P(q) dq - P0 * q0',
      'PS = P0 * q0 - Integral[0 to q0] Ps(q) dq',
      'Cramer Rule: x_i = det(A_i) / det(A)'
    ],
    workedExamples: [
      {
        question: 'If Total Cost function is TC = 5Q^2 + 20Q + 50, find Marginal Cost when Q = 4.',
        solution: 'MC = d(TC)/dQ = 10Q + 20. When Q = 4, MC = 10(4) + 20 = 40 + 20 = Rs. 60.'
      }
    ]
  }
};

export const CLASS_11_ECO_PART2_SUMMARIES: Record<string, SummaryItem> = {
  c11_eco_ch7: {
    id: 'sum_c11_eco_ch7',
    chapterId: 'c11_eco_ch7',
    keyPointsEn: [
      'The Indian economy is a developing mixed economy, ranking 5th globally by nominal GDP and 3rd by PPP.',
      'Strengths include a high demographic dividend, vast mineral reserves, and an expanding services sector.',
      'Key weaknesses comprise agrarian underemployment, population pressure, and structural income disparities.',
      'India spans 3.28 million sq km with rich deposits of iron ore, bauxite, coal, and world-leading mica reserves.',
      'Census 2011 records a population of 1.21 billion, density of 382/sq km, sex ratio of 940, and 74.04% literacy.'
    ],
    keyPointsTa: [
      'இந்தியப் பொருளாதாரம் ஒரு வளரும் கலப்புப் பொருளாதாரம் (பெயரளவில் 5-வது இடம், PPP-யில் 3-வது இடம்).',
      'இளைஞர் வளம், கனிம வளங்கள் மற்றும் வேகமாக வளரும் சேவைத்துறை இதன் பலங்கள்.',
      'வேளாண்மையில் மறைமுக வேலையின்மை மற்றும் வருமான ஏற்றத்தாழ்வு இதன் பலவீனங்கள்.',
      'இந்தியா 32.8 இலட்சம் ச.கி.மீ பரப்பளவும், இரும்பு, நிலக்கரி, மைக்கா போன்ற தாதுக்களையும் கொண்டுள்ளது.',
      '2011 கணக்கெடுப்புப்படி மக்கள்தொகை 121 கோடி, அடர்த்தி 382, பாலின விகிதம் 940, கல்வியறிவு 74.04%.'
    ],
    formulaCheatSheet: [
      'Population Density = Total Population / Total Area (sq km)',
      'Sex Ratio = (Females / Males) * 1000',
      'HDI = Geometric Mean of (Life Expectancy, Education, Income Indices)'
    ],
    simpleExplanationEn: 'India is a vast, youthful economic powerhouse blending traditional agriculture with high-tech software and space missions, working to overcome poverty through industrial growth.',
    simpleExplanationTa: 'இந்தியா உலகளவில் மிக வேகமாக வளர்ந்து வரும் இளம் பொருளாதார நாடாகும்; விவசாயம், தொழிற்சாலைகள் மற்றும் மென்பொருள் சேவைகளின் கலவையாக இயங்குகிறது.'
  },
  c11_eco_ch8: {
    id: 'sum_c11_eco_ch8',
    chapterId: 'c11_eco_ch8',
    keyPointsEn: [
      'British rule caused de-industrialization of handicrafts and drained wealth (Dadabhai Naoroji).',
      'Colonial land revenue systems included Zamindari (Cornwallis), Ryotwari (Munro), and Mahalwari.',
      'Independent India launched 12 Five-Year Plans (1951-2017) based on Soviet socialist planning principles.',
      'The Green Revolution led by Dr. M.S. Swaminathan transformed India from grain deficit to grain self-sufficiency.',
      'NITI Aayog replaced the Planning Commission on January 1, 2015 to promote bottom-up cooperative federalism.'
    ],
    keyPointsTa: [
      'ஆங்கிலேயர் ஆட்சியில் பாரம்பரிய தொழில்கள் நசுக்கப்பட்டு இந்திய செல்வம் பிரிட்டனுக்குச் சுரண்டப்பட்டது.',
      'ஜமீன்தாரி, ரயத்துவாரி மற்றும் மகல்வாரி நில வருவாய் முறைகள் விவசாயிகளைப் பாதித்தன.',
      'சுதந்திரத்திற்குப் பின் 1951 முதல் 2017 வரை 12 ஐந்தாண்டுத் திட்டங்கள் செயல்படுத்தப்பட்டன.',
      'டாக்டர் எம்.எஸ். சுவாமிநாதனின் பசுமைப் புரட்சி உணவு தானிய உற்பத்தியில் தன்னிறைவைத் தந்தது.',
      '2015 ஜனவரி 1-ல் திட்டக்குழுவுக்குப் பதிலாக நிதி ஆயோக் (NITI Aayog) சிந்தனைக் குழு உருவாக்கப்பட்டது.'
    ],
    formulaCheatSheet: [
      '1st Plan: Harrod-Domar (Agriculture)',
      '2nd Plan: Mahalanobis (Heavy Industry)',
      'NITI Aayog: Jan 1, 2015 (Cooperative Federalism)'
    ],
    simpleExplanationEn: 'After 200 years of British economic drain, India rebuilt itself through Five-Year Plans, achieved food security through the Green Revolution, and modernised planning via NITI Aayog.',
    simpleExplanationTa: 'ஆங்கிலேயர் கால சுரண்டல்களிலிருந்து மீண்டு, ஐந்தாண்டுத் திட்டங்கள் மற்றும் பசுமைப் புரட்சி மூலம் இந்தியா தன்னிறைவு பெற்ற கதையை இது விவரிக்கிறது.'
  },
  c11_eco_ch9: {
    id: 'sum_c11_eco_ch9',
    chapterId: 'c11_eco_ch9',
    keyPointsEn: [
      'The 1991 Balance of Payments crisis prompted the landmark New Economic Policy (NEP).',
      'Liberalization dismantled industrial licensing and eased market entry barriers.',
      'Privatization opened state-dominated sectors and introduced PSU equity disinvestment.',
      'Globalization reduced import tariffs, invited FDI, and integrated India with WTO global supply chains.',
      'Major subsequent structural reforms include SEZs, GST (July 1, 2017), and Demonetization (2016).'
    ],
    keyPointsTa: [
      '1991 அந்நியச் செலாவணி நெருக்கடி புதிய பொருளாதாரக் கொள்கையை (NEP) கொண்டுவரக் காரணமானது.',
      'தாராளமயமாக்கல் உரிமக் கட்டுப்பாடுகளை நீக்கியது.',
      'தனியார்மயமாக்கல் அரசு நிறுவனங்களின் பங்குகளை விற்று முதலீடுகளை ஈர்த்தது.',
      'உலகமயமாக்கல் வரிகளைக் குறைத்து, இந்தியாவை உலக வர்த்தக அமைப்போடு இணைத்தது.',
      'ஜிஎஸ்டி (2017 ஜூலை 1) மற்றும் பணமதிப்பிழப்பு (2016) முக்கிய நவீன பொருளாதார நிகழ்வுகளாகும்.'
    ],
    formulaCheatSheet: [
      'LPG = Liberalization + Privatization + Globalization (1991)',
      'GST: One Nation, One Tax, One Market (Rolled out July 1, 2017)'
    ],
    simpleExplanationEn: 'In 1991, India opened its doors to global business, allowing foreign investment, ending strict government permits, and giving birth to modern malls, smartphones, and startups.',
    simpleExplanationTa: '1991-ல் அரசு உரிமக் கட்டுப்பாடுகளைத் தளர்த்தி வெளிநாட்டு முதலீடுகளை வரவேற்றதன் மூலம் நவீன தொழில்நுட்பமும் தொழிற்சாலைகளும் இந்தியாவில் பெருகின.'
  },
  c11_eco_ch10: {
    id: 'sum_c11_eco_ch10',
    chapterId: 'c11_eco_ch10',
    keyPointsEn: [
      'Over two-thirds of Indias population lives in rural areas depending on agriculture.',
      'Disguised unemployment is rife where marginal productivity of excess labour is zero (MP = 0).',
      'Rural indebtedness persists due to crop vulnerabilities and high unorganized moneylender interest rates.',
      'NABARD was established on July 12, 1982 to spearhead institutional credit to agriculture and rural crafts.',
      'Key poverty eradication programmes include MGNREGA (100 days work guarantee) and Dr. Kalam PURA model.'
    ],
    keyPointsTa: [
      'இந்தியாவில் மூன்றில் இரண்டு பங்கு மக்கள் கிராமப்புறங்களில் வேளாண்மையைச் சார்ந்து வாழ்கின்றனர்.',
      'கிராமங்களில் தேவைக்கு அதிகமான உழைப்பாளர்கள் ஈடுபடும் மறைமுக வேலையின்மை ($MP=0$) அதிகம்.',
      'கந்துவட்டி மற்றும் வறட்சியால் கிராமப்புறங்களில் கடன் சுமை தலைமுறை தலைமுறையாகத் தொடர்கிறது.',
      'நபார்டு (NABARD) வங்கி 1982 ஜூலை 12 அன்று கிராமப்புறக் கடனுதவிக்காக உருவாக்கப்பட்டது.',
      'மகாத்மா காந்தி வேலை உறுதித் திட்டம் (100 நாள் வேலை) மற்றும் கலாம் அவர்களின் பூரா (PURA) திட்டம் முக்கிய தீர்வுகள்.'
    ],
    formulaCheatSheet: [
      'Disguised Unemployment: MP_L = 0',
      'NABARD: July 12, 1982 (Sivaraman Committee)',
      'MGNREGA: 100 days statutory wage employment guarantee'
    ],
    simpleExplanationEn: 'Rural economy focuses on empowering Indian villages with good roads, bank credit, solar power, and 100-day job guarantees so farmers and artisans can thrive without migrating to overcrowded cities.',
    simpleExplanationTa: 'கிராமப்புறங்களில் நல்ல சாலைகள், விவசாயக் கடன்கள், குடிநீர் வசதி மற்றும் வேலைவாய்ப்பை வழங்கி கிராமங்களை தன்னிறைவு பெறச் செய்வதே இதன் நோக்கமாகும்.'
  },
  c11_eco_ch11: {
    id: 'sum_c11_eco_ch11',
    chapterId: 'c11_eco_ch11',
    keyPointsEn: [
      'Tamil Nadu is the 2nd largest state economy in India and ranks 3rd in Human Development Index.',
      'Chennai is acclaimed as the "Detroit of Asia" for its dominance in vehicle and auto component manufacturing.',
      'Tirupur is the knitwear capital ("Dollar City"); Coimbatore is the "Manchester of South India".',
      'Sivakasi produces the vast majority of Indias safety matches, fireworks, and commercial printing ("Little Japan").',
      'Chennai is the "Health Capital of India" attracting 40% of international and domestic medical tourists.'
    ],
    keyPointsTa: [
      'தமிழ்நாடு இந்தியாவின் 2-வது பெரிய பொருளாதார மாநிலமாகவும், HDI-யில் 3-வது இடத்திலும் உள்ளது.',
      'சென்னை ஆட்டோமொபைல் உற்பத்தியில் முன்னிலை பெற்று "ஆசியாவின் டெட்ராய்ட்" என அழைக்கப்படுகிறது.',
      'திருப்பூர் பின்னலாடை ஏற்றுமதியின் "டாலர் நகரம்"; கோயம்புத்தூர் "தென்னிந்தியாவின் மான்செஸ்டர்".',
      'சிவகாசி பட்டாசு, தீப்பெட்டி, மற்றும் அச்சுத் தொழிலில் முதலிடம் பெற்று "குட்டி ஜப்பான்" எனப்படுகிறது.',
      'சென்னை 40% மருத்துவச் சுற்றுலாப் பயணிகளை ஈர்த்து "இந்தியாவின் மருத்துவத் தலைநகரம்" எனப் போற்றப்படுகிறது.'
    ],
    formulaCheatSheet: [
      'TN Urbanization: ~48.4% (Highest among large states)',
      'Namakkal: Poultry / Egg Capital',
      'Muppandal: Massive onshore wind turbine farm'
    ],
    simpleExplanationEn: 'Tamil Nadu is an industrial titan where cars, clothes, medicine, and computers are produced at world-class standards while maintaining outstanding healthcare and high literacy.',
    simpleExplanationTa: 'தமிழ்நாடு கார் உற்பத்தி, பின்னலாடை, கல்வி மற்றும் நவீன மருத்துவத்தில் இந்தியாவின் முன்னணி மாநிலமாகத் திகழ்கிறது.'
  },
  c11_eco_ch12: {
    id: 'sum_c11_eco_ch12',
    chapterId: 'c11_eco_ch12',
    keyPointsEn: [
      'Mathematical methods provide analytical rigor and precision to micro and macroeconomic formulations.',
      'Market equilibrium occurs where linear demand and supply intersect: Qd = Qs.',
      'Differential calculus yields Marginal Cost (dTC/dQ), Marginal Revenue (dTR/dQ), and Price Elasticity.',
      'Profit maximization condition requires first derivative dPi/dQ = 0 (MR = MC) and second derivative d^2Pi/dQ^2 < 0.',
      'Integral calculus determines Total Cost from Marginal Cost, Total Revenue from MR, and Consumer/Producer Surplus.'
    ],
    keyPointsTa: [
      'கணித முறைகள் பொருளாதார ஆய்வுகளுக்குத் துல்லியத்தையும் அளவிடக்கூடிய தன்மையையும் தருகின்றன.',
      'தேவையும் அளிப்பும் சமமாகுமிடத்தில் சந்தை சமநிலை விலை தீர்மானிக்கப்படுகிறது ($Q_d = Q_s$).',
      'வகை நுண்கணிதம் மூலம் இறுதிநிலைச் செலவு ($MC = dTC/dQ$) மற்றும் இறுதிநிலை வருவாய் ($MR = dTR/dQ$) கணக்கிடப்படுகிறது.',
      'இலாப உச்சநிலைக்கு $MR = MC$ மற்றும் இரண்டாம் வகைக்கெழு எதிர்மறையாக இருத்தல் அவசியம்.',
      'தொகை நுண்கணிதம் மூலம் நுகர்வோர் எச்சம், உற்பத்தியாளர் எச்சம் மற்றும் மொத்தச் செலவு கணக்கிடப்படுகிறது.'
    ],
    formulaCheatSheet: [
      'MC = d(TC)/dQ; MR = d(TR)/dQ',
      'Consumer Surplus = Integral[0 to q0] P(q) dq - P0 * q0',
      'Producer Surplus = P0 * q0 - Integral[0 to q0] Ps(q) dq'
    ],
    simpleExplanationEn: 'Using calculus, businesses calculate the exact price to charge and quantity to produce to make the maximum possible profit.',
    simpleExplanationTa: 'கணித மற்றும் கால்குலஸ் சூத்திரங்களைப் பயன்படுத்தி நிறுவனங்கள் எந்த விலையில் விற்றால் அதிகபட்ச இலாபம் கிடைக்கும் என்பதைத் துல்லியமாகக் கணக்கிட முடியும்.'
  }
};

export const CLASS_11_ECO_PART2_QUIZZES: Record<string, ChapterQuiz> = {
  c11_eco_ch7: {
    id: 'quiz_c11_eco_ch7',
    chapterId: 'c11_eco_ch7',
    titleEn: 'Chapter 7 Mastery Quiz: Indian Economy',
    titleTa: 'பாடம் 7 பயிற்சி வினாடி-வினா: இந்தியப் பொருளாதாரம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'According to Census 2011, what was the national population density of India?',
        questionTa: '2011 மக்கள்தொகைக் கணக்கெடுப்பின்படி இந்தியாவின் சராசரி மக்களடர்த்தி என்ன?',
        optionsEn: ['325 persons/sq km', '382 persons/sq km', '420 persons/sq km', '450 persons/sq km'],
        optionsTa: ['325 பேர்/ச.கி.மீ', '382 பேர்/ச.கி.மீ (382 persons/sq km)', '420 பேர்/ச.கி.மீ', '450 பேர்/ச.கி.மீ'],
        correctAnswerIndex: 1,
        explanationEn: 'Census 2011 recorded India population density at 382 persons per square kilometer.',
        explanationTa: '2011 கணக்கெடுப்பின்படி இந்தியாவின் சராசரி மக்களடர்த்தி ஒரு சதுர கி.மீட்டருக்கு 382 நபர்களாகும்.'
      }
    ]
  },
  c11_eco_ch8: {
    id: 'quiz_c11_eco_ch8',
    chapterId: 'c11_eco_ch8',
    titleEn: 'Chapter 8 Mastery Quiz: Indian Economy Before and After Independence',
    titleTa: 'பாடம் 8 பயிற்சி வினாடி-வினா: சுதந்திரத்திற்கு முன்னரும் பின்னரும்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Who authored the pioneering book "Poverty and Un-British Rule in India" introducing the Drain of Wealth theory?',
        questionTa: '"வறுமையும் பிரிட்டனுக்கு ஒவ்வாத ஆட்சியும்" என்ற வரலாற்றுப் புகழ்பெற்ற நூலை எழுதியவர் யார்?',
        optionsEn: ['Mahatma Gandhi', 'Dadabhai Naoroji', 'Gopal Krishna Gokhale', 'Jawaharlal Nehru'],
        optionsTa: ['மகாத்மா காந்தி', 'தாதாபாய் நௌரோஜி (Dadabhai Naoroji)', 'கோபால கிருஷ்ண கோகலே', 'ஜவஹர்லால் நேரு'],
        correctAnswerIndex: 1,
        explanationEn: 'Dadabhai Naoroji (Grand Old Man of India) published the book in 1901 uncovering colonial resource exploitation.',
        explanationTa: 'தாதாபாய் நௌரோஜி 1901-ல் இந்நூலை எழுதி ஆங்கிலேயரின் செல்வச் சுரண்டலை உலகிற்கு வெளிப்படுத்தினார்.'
      },
      {
        id: 'q2',
        questionEn: 'On which date was NITI Aayog established to replace the Planning Commission?',
        questionTa: 'திட்டக் குழுவிற்குப் பதிலாக நிதி ஆயோக் (NITI Aayog) எந்த நாளில் தொடங்கப்பட்டது?',
        optionsEn: ['January 1, 2014', 'January 1, 2015', 'August 15, 2015', 'April 1, 2016'],
        optionsTa: ['ஜனவரி 1, 2014', 'ஜனவரி 1, 2015', 'ஆகஸ்ட் 15, 2015', 'ஏப்ரல் 1, 2016'],
        correctAnswerIndex: 1,
        explanationEn: 'NITI Aayog officially came into operation on January 1, 2015.',
        explanationTa: '2015 ஜனவரி 1 அன்று அதிகாரப்பூர்வமாக நிதி ஆயோக் தொடங்கப்பட்டது.'
      }
    ]
  },
  c11_eco_ch9: {
    id: 'quiz_c11_eco_ch9',
    chapterId: 'c11_eco_ch9',
    titleEn: 'Chapter 9 Mastery Quiz: Development Experiences',
    titleTa: 'பாடம் 9 பயிற்சி வினாடி-வினா: மேம்பாட்டு அனுபவங்கள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'What does the acronym LPG stand for in the context of the 1991 Economic Reforms?',
        questionTa: '1991 பொருளாதார சீர்திருத்தங்களில் LPG என்பது எதனைக் குறிக்கிறது?',
        optionsEn: ['Liquid Petroleum Gas', 'Liberalization, Privatization, Globalization', 'License, Permit, Growth', 'Labour, Production, Governance'],
        optionsTa: ['திரவ பெட்ரோலிய வாயு', 'தாராளமயமாக்கல், தனியார்மயமாக்கல், உலகமயமாக்கல்', 'உரிமம், அனுமதி, வளர்ச்சி', 'உழைப்பு, உற்பத்தி, ஆளுகை'],
        correctAnswerIndex: 1,
        explanationEn: 'LPG stands for Liberalization, Privatization, and Globalization.',
        explanationTa: 'LPG என்பது தாராளமயமாக்கல், தனியார்மயமாக்கல் மற்றும் உலகமயமாக்கல் ஆகும்.'
      }
    ]
  },
  c11_eco_ch10: {
    id: 'quiz_c11_eco_ch10',
    chapterId: 'c11_eco_ch10',
    titleEn: 'Chapter 10 Mastery Quiz: Rural Economy',
    titleTa: 'பாடம் 10 பயிற்சி வினாடி-வினா: ஊரகப் பொருளாதாரம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'In disguised unemployment, what is the marginal productivity of labor?',
        questionTa: 'மறைமுக வேலையின்மையில் கூடுதல் உழைப்பாளரின் இறுதிநிலை உற்பத்தித்திறன் எவ்வாறு இருக்கும்?',
        optionsEn: ['Extremely High', 'Zero or Negative', 'Constant at 1', 'Equal to total output'],
        optionsTa: ['மிக அதிகம்', 'பூஜ்ஜியம் அல்லது எதிர்மறை (Zero or Negative)', '1 ஆக இருக்கும்', 'மொத்த உற்பத்திக்குச் சமம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Disguised unemployment occurs when excess workers contribute zero or negative marginal product.',
        explanationTa: 'மறைமுக வேலையின்மையில் இறுதிநிலை உழைப்பாளியின் உற்பத்தித் திறன் பூஜ்ஜியமாக இருக்கும்.'
      },
      {
        id: 'q2',
        questionEn: 'When was NABARD established to provide credit for rural and agricultural development?',
        questionTa: 'வேளாண்மை மற்றும் ஊரக வளர்ச்சிக்கான தேசிய வங்கி (NABARD) எப்போது தொடங்கப்பட்டது?',
        optionsEn: ['July 12, 1980', 'July 12, 1982', 'April 1, 1985', 'October 2, 1989'],
        optionsTa: ['ஜூலை 12, 1980', 'ஜூலை 12, 1982', 'ஏப்ரல் 1, 1985', 'அக்டோபர் 2, 1989'],
        correctAnswerIndex: 1,
        explanationEn: 'NABARD was established on July 12, 1982.',
        explanationTa: 'நபார்டு வங்கி 1982 ஜூலை 12 அன்று சிவராமன் குழு பரிந்துரைப்படி அமைக்கப்பட்டது.'
      }
    ]
  },
  c11_eco_ch11: {
    id: 'quiz_c11_eco_ch11',
    chapterId: 'c11_eco_ch11',
    titleEn: 'Chapter 11 Mastery Quiz: Tamil Nadu Economy',
    titleTa: 'பாடம் 11 பயிற்சி வினாடி-வினா: தமிழ்நாட்டுப் பொருளாதாரம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Which city in Tamil Nadu was fondly termed "Little Japan" by Prime Minister Jawaharlal Nehru?',
        questionTa: 'ஜவஹர்லால் நேருவால் "குட்டி ஜப்பான்" என்று அன்போடு அழைக்கப்பட்ட தமிழக நகரம் எது?',
        optionsEn: ['Tirupur', 'Sivakasi', 'Coimbatore', 'Salem'],
        optionsTa: ['திருப்பூர்', 'சிவகாசி (Sivakasi)', 'கோயம்புத்தூர்', 'சேலம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Sivakasi was dubbed Little Japan by Nehru for its diligent industrial productivity in matches and fireworks.',
        explanationTa: 'சிவகாசியின் கடின உழைப்பு மற்றும் அச்சு, பட்டாசு உற்பத்திக்காக நேரு அதை குட்டி ஜப்பான் என்றார்.'
      }
    ]
  },
  c11_eco_ch12: {
    id: 'quiz_c11_eco_ch12',
    chapterId: 'c11_eco_ch12',
    titleEn: 'Chapter 12 Mastery Quiz: Mathematical Methods for Economics',
    titleTa: 'பாடம் 12 பயிற்சி வினாடி-வினா: பொருளியலுக்கான கணித முறைகள்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'How is Marginal Revenue (MR) calculated mathematically from Total Revenue (TR)?',
        questionTa: 'மொத்த வருவாயிலிருந்து (TR) இறுதிநிலை வருவாய் (MR) எவ்வாறு கணக்கிடப்படுகிறது?',
        optionsEn: ['MR = TR / Q', 'MR = d(TR) / dQ', 'MR = TR * Q', 'MR = Integral(TR) dQ'],
        optionsTa: ['MR = TR / Q', 'MR = d(TR) / dQ', 'MR = TR * Q', 'MR = Integral(TR) dQ'],
        correctAnswerIndex: 1,
        explanationEn: 'Marginal Revenue is the first derivative of Total Revenue with respect to output Q: MR = d(TR)/dQ.',
        explanationTa: 'இறுதிநிலை வருவாய் என்பது மொத்த வருவாயின் முதல் வகைக்கெழுவாகும்: MR = d(TR)/dQ.'
      }
    ]
  }
};

export const CLASS_11_ECO_PART2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_eco_ch8: {
    id: 'diag_c11_eco_ch8',
    chapterId: 'c11_eco_ch8',
    titleEn: 'Five-Year Plan Trajectory (1st to 12th Plan Focus)',
    titleTa: 'ஐந்தாண்டுத் திட்டங்களின் வரலாற்றுப் பாதை (1 முதல் 12)',
    descriptionEn: 'Timeline chart depicting the focal shifts of Indias Five-Year Plans across seven decades.',
    descriptionTa: 'இந்திய ஐந்தாண்டுத் திட்டங்களின் முதன்மை நோக்கங்கள் மற்றும் வரலாற்றுப் பாதை.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">INDIA FIVE-YEAR PLANS EVOLUTION (1951 - 2017)</text>

  <!-- Horizontal Timeline Bar -->
  <line x1="80" y1="210" x2="720" y2="210" stroke="#475569" stroke-width="4" />

  <!-- Plan 1 -->
  <g transform="translate(100, 210)">
    <circle cx="0" cy="0" r="10" fill="#10b981" />
    <line x1="0" y1="-10" x2="0" y2="-90" stroke="#10b981" stroke-width="2" />
    <rect x="-60" y="-140" width="120" height="50" rx="6" fill="#1e293b" stroke="#10b981" />
    <text x="0" y="-123" text-anchor="middle" fill="#34d399" font-size="11" font-weight="bold">1st Plan (1951-56)</text>
    <text x="0" y="-103" text-anchor="middle" fill="#f8fafc" font-size="10">Agriculture &amp; Dams</text>
  </g>

  <!-- Plan 2 -->
  <g transform="translate(220, 210)">
    <circle cx="0" cy="0" r="10" fill="#38bdf8" />
    <line x1="0" y1="10" x2="0" y2="70" stroke="#38bdf8" stroke-width="2" />
    <rect x="-60" y="70" width="120" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" />
    <text x="0" y="90" text-anchor="middle" fill="#38bdf8" font-size="11" font-weight="bold">2nd Plan (1956-61)</text>
    <text x="0" y="108" text-anchor="middle" fill="#f8fafc" font-size="10">Heavy Industry</text>
  </g>

  <!-- Plan 5 -->
  <g transform="translate(360, 210)">
    <circle cx="0" cy="0" r="10" fill="#f59e0b" />
    <line x1="0" y1="-10" x2="0" y2="-90" stroke="#f59e0b" stroke-width="2" />
    <rect x="-60" y="-140" width="120" height="50" rx="6" fill="#1e293b" stroke="#f59e0b" />
    <text x="0" y="-123" text-anchor="middle" fill="#fbbf24" font-size="11" font-weight="bold">5th Plan (1974-79)</text>
    <text x="0" y="-103" text-anchor="middle" fill="#f8fafc" font-size="10">Garibi Hatao</text>
  </g>

  <!-- Plan 8 / LPG -->
  <g transform="translate(500, 210)">
    <circle cx="0" cy="0" r="10" fill="#ec4899" />
    <line x1="0" y1="10" x2="0" y2="70" stroke="#ec4899" stroke-width="2" />
    <rect x="-60" y="70" width="120" height="50" rx="6" fill="#1e293b" stroke="#ec4899" />
    <text x="0" y="90" text-anchor="middle" fill="#f472b6" font-size="11" font-weight="bold">8th Plan (1992-97)</text>
    <text x="0" y="108" text-anchor="middle" fill="#f8fafc" font-size="10">LPG Modernization</text>
  </g>

  <!-- NITI Aayog (2015) -->
  <g transform="translate(640, 210)">
    <circle cx="0" cy="0" r="12" fill="#a855f7" />
    <line x1="0" y1="-10" x2="0" y2="-90" stroke="#a855f7" stroke-width="2" />
    <rect x="-65" y="-140" width="130" height="50" rx="6" fill="#1e293b" stroke="#a855f7" />
    <text x="0" y="-123" text-anchor="middle" fill="#c084fc" font-size="11" font-weight="bold">NITI Aayog (2015)</text>
    <text x="0" y="-103" text-anchor="middle" fill="#f8fafc" font-size="10">Cooperative Federalism</text>
  </g>
</svg>`
  },
  c11_eco_ch11: {
    id: 'diag_c11_eco_ch11',
    chapterId: 'c11_eco_ch11',
    titleEn: 'Industrial Cluster Geography of Tamil Nadu',
    titleTa: 'தமிழ்நாட்டின் தொழில்சார் மண்டல வரைபடம்',
    descriptionEn: 'Spatial breakdown of manufacturing powerhouses: Automobiles, Textiles, Leather, Printing, and Wind Energy.',
    descriptionTa: 'சென்னை, திருப்பூர், சிவகாசி, வேலூர் உள்ளிட்ட தொழில் நகரங்களின் உற்பத்திப் பங்களிப்பு.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">MAJOR INDUSTRIAL CLUSTERS OF TAMIL NADU</text>

  <!-- Cluster Cards -->
  <g transform="translate(60, 60)">
    <rect width="320" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="20" y="28" fill="#38bdf8" font-size="14" font-weight="bold">Chennai ("Detroit of Asia")</text>
    <text x="20" y="52" fill="#e2e8f0" font-size="12">• 33% of India's automobile output</text>
    <text x="20" y="74" fill="#94a3b8" font-size="11">Health Capital: 40% of medical tourism</text>
  </g>

  <g transform="translate(420, 60)">
    <rect width="320" height="95" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <text x="20" y="28" fill="#34d399" font-size="14" font-weight="bold">Tirupur &amp; Coimbatore</text>
    <text x="20" y="52" fill="#e2e8f0" font-size="12">• Tirupur: >50% cotton knitwear exports</text>
    <text x="20" y="74" fill="#94a3b8" font-size="11">Coimbatore: Manchester of South India</text>
  </g>

  <g transform="translate(60, 175)">
    <rect width="320" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5" />
    <text x="20" y="28" fill="#fbbf24" font-size="14" font-weight="bold">Vellore, Ambur &amp; Ranipet</text>
    <text x="20" y="52" fill="#e2e8f0" font-size="12">• 60% of India's leather production</text>
    <text x="20" y="74" fill="#94a3b8" font-size="11">Finished leather footwear and saddlery</text>
  </g>

  <g transform="translate(420, 175)">
    <rect width="320" height="95" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5" />
    <text x="20" y="28" fill="#fda4af" font-size="14" font-weight="bold">Sivakasi ("Little Japan")</text>
    <text x="20" y="52" fill="#e2e8f0" font-size="12">• 90% of fireworks &amp; 80% safety matches</text>
    <text x="20" y="74" fill="#94a3b8" font-size="11">60% of India's commercial color printing</text>
  </g>

  <g transform="translate(60, 290)">
    <rect width="680" height="95" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5" />
    <text x="20" y="28" fill="#c084fc" font-size="14" font-weight="bold">Renewable Energy &amp; Allied Hubs</text>
    <text x="20" y="52" fill="#e2e8f0" font-size="12">• Muppandal (Kanyakumari): One of the world's largest operational onshore wind farms</text>
    <text x="20" y="74" fill="#94a3b8" font-size="11">Namakkal: South Asia's premier poultry hub ("Egg City") | Karur: Home textiles</text>
  </g>
</svg>`
  }
};

export const CLASS_11_ECO_PART2_VIDEOS: Record<string, VideoExplainer> = {
  c11_eco_ch8: {
    id: 'vid_c11_eco_ch8',
    chapterId: 'c11_eco_ch8',
    titleEn: 'Animated Explainer: The Green Revolution Transformation',
    titleTa: 'இயங்குபடம்: இந்தியப் பசுமைப் புரட்சி சாதனை',
    durationMinutes: 10,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'From Ship-to-Mouth to Granary of the World',
        titleTa: 'உணவுப் பற்றாக்குறையிலிருந்து உலகக் களஞ்சியம்',
        visualDescriptionEn: 'Grain silos filling with golden wheat as high-yielding semi-dwarf seeds sprout under canal irrigation in Punjab and Tamil Nadu.',
        narrationEn: 'Led by Dr. M.S. Swaminathan, the Green Revolution combined miracle dwarf seeds, modern fertilizers, and reliable irrigation to defeat famine forever.',
        narrationTa: 'டாக்டர் எம்.எஸ். சுவாமிநாதன் அவர்களின் வழிகாட்டுதலில் வீரிய விதைகள் மற்றும் பாசன வசதிகள் மூலம் இந்தியா உணவு உற்பத்தியில் மாபெரும் தன்னிறைவு பெற்றது.',
        keyTakeaway: 'HYV seeds revolutionized Indian food security.'
      }
    ]
  },
  c11_eco_ch11: {
    id: 'vid_c11_eco_ch11',
    chapterId: 'c11_eco_ch11',
    titleEn: 'Animated Explainer: The Economic Engine of Tamil Nadu',
    titleTa: 'இயங்குபடம்: தமிழ்நாட்டின் பொருளாதாரப் பெருமிதம்',
    durationMinutes: 11,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Power of Industrial Clusters',
        titleTa: 'தொழில்சார் மண்டலங்களின் ஆற்றல்',
        visualDescriptionEn: 'Map of Tamil Nadu lighting up like a circuit board: Chennai cars, Tirupur textiles, Sivakasi printing presses, and Namakkal poultry.',
        narrationEn: 'Tamil Nadu succeeds because of specialized regional clusters, where cities master specific industries, making the state the second largest economy in India.',
        narrationTa: 'சென்னை கார் தயாரிப்பு, திருப்பூர் பின்னலாடை, சிவகாசி அச்சுத் தொழில் என ஒவ்வொரு ஊரும் ஒரு துறையில் நிபுணத்துவம் பெற்றுள்ளதே தமிழ்நாட்டின் வெற்றி ரகசியம்.',
        keyTakeaway: 'Cluster economics drives Tamil Nadu GDP.'
      }
    ]
  }
};
