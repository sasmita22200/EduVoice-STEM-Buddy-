# -*- coding: utf-8 -*-

rest_block = '''
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
'''

with open('src/data/class11EconomicsPart2.ts', 'a', encoding='utf-8') as f:
    f.write(rest_block)

print("class11EconomicsPart2.ts completed successfully!")
