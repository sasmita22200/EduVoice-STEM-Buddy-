# -*- coding: utf-8 -*-

content = '''import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

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
- **Vicious Circle of Poverty (Ragnar Nurkse)**: Low income $\\rightarrow$ low savings $\\rightarrow$ low capital formation $\\rightarrow$ low productivity $\\rightarrow$ low income.

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
- **வறுமையின் நச்சுச் சுழல் (ரக்னர் நர்க்சு)**: குறைந்த வருமானம் $\\rightarrow$ குறைந்த சேமிப்பு $\\rightarrow$ குறைந்த முதலீடு $\\rightarrow$ குறைந்த உற்பத்தித்திறன் $\\rightarrow$ குறைந்த வருமானம்.

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
$$Q_d = Q_s \\implies a - bP = -c + dP \\implies P^* = \\frac{a + c}{b + d}$$
Substitute $P^*$ back to obtain equilibrium quantity $Q^*$.

## 3. Differential Calculus Applications
- **Marginal Cost (MC)**: First derivative of Total Cost with respect to output:
  $$MC = \\frac{d(TC)}{dQ}$$
- **Marginal Revenue (MR)**: First derivative of Total Revenue with respect to quantity:
  $$MR = \\frac{d(TR)}{dQ}$$
- **Price Elasticity of Demand**:
  $$e_d = -\\frac{P}{Q} \\cdot \\frac{dQ}{dP}$$
- **Profit Maximization Condition**:
  $$\\text{Profit } \\Pi = TR - TC$$
  - First-order condition (Necessary): $\\frac{d\\Pi}{dQ} = 0 \\implies MR = MC$
  - Second-order condition (Sufficient): $\\frac{d^2\\Pi}{dQ^2} < 0 \\implies \\frac{d(MC)}{dQ} > \\frac{d(MR)}{dQ}$ (MC cuts MR from below).

## 4. Integral Calculus Applications
- Finding Total Cost from Marginal Cost: $TC = \\int MC \\, dQ + k$ (where $k = TFC$).
- Finding Total Revenue from Marginal Revenue: $TR = \\int MR \\, dQ$.
- **Consumer's Surplus (CS)**: Area under demand curve from 0 to $q_0$ minus total expenditure:
  $$CS = \\int_0^{q_0} P_d(q) \\, dq - P_0 q_0$$
- **Producer's Surplus (PS)**: Total revenue minus area under supply curve from 0 to $q_0$:
  $$PS = P_0 q_0 - \\int_0^{q_0} P_s(q) \\, dq$$

## 5. Matrix Algebra and Cramer's Rule
Used to solve simultaneous systems of equations in multi-market equilibria:
$$AX = B \\implies X = A^{-1} B$$
For a $2 \\times 2$ system: $x = \\frac{|A_1|}{|A|}, y = \\frac{|A_2|}{|A|}$ (provided $|A| \\neq 0$).`,
    contentTa: `# பாடம் 12: பொருளியலுக்கான கணித முறைகள்

## 1. பொருளியலில் கணித முறைகளின் பங்கு
கணிதம் பொருளாதார கோட்பாடுகளுக்குத் துல்லியத்தையும், தர்க்கரீதியான முடிவுகளையும் வழங்குகிறது.

## 2. சந்தை சமநிலை (Market Equilibrium)
- தேவைச் சார்பு: $Q_d = a - bP$
- அளிப்புச் சார்பு: $Q_s = -c + dP$
- தேவை மற்றும் அளிப்பு சமமாகுமிடத்தில் சமநிலை விலை உருவாகிறது: $Q_d = Q_s$.

## 3. வகை நுண்கணிதப் பயன்பாடுகள் (Differential Calculus)
- **இறுதிநிலைச் செலவு (MC)**: $MC = \\frac{d(TC)}{dQ}$
- **இறுதிநிலை வருவாய் (MR)**: $MR = \\frac{d(TR)}{dQ}$
- **தேவை நெகிழ்ச்சி**: $e_d = -\\frac{P}{Q} \\cdot \\frac{dQ}{dP}$
- **இலாப உச்சநிலை நிபந்தனை**: $MR = MC$ மற்றும் இரண்டாம் வகைக்கெழு எதிர்மறையாக இருக்க வேண்டும்.

## 4. தொகை நுண்கணிதப் பயன்பாடுகள் (Integral Calculus)
- இறுதிநிலைச் செலவிலிருந்து மொத்தச் செலவு காணுதல்: $TC = \\int MC \\, dQ + k$.
- **நுகர்வோர் எச்சம் (CS)**:
$$CS = \\int_0^{q_0} P(q) \\, dq - P_0 q_0$$
- **உற்பத்தியாளர் எச்சம் (PS)**:
$$PS = P_0 q_0 - \\int_0^{q_0} P_s(q) \\, dq$$

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
'''

with open('src/data/class11EconomicsPart2.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("class11EconomicsPart2.ts initialized with Chapters and Notes!")
