# -*- coding: utf-8 -*-

rest_block = '''
export const CLASS_11_ECO_PART1_SUMMARIES: Record<string, SummaryItem> = {
  c11_eco_ch1: {
    id: 'sum_c11_eco_ch1',
    chapterId: 'c11_eco_ch1',
    keyPointsEn: [
      'Economics is derived from Oikonomia meaning household administration, addressing scarcity and unlimited wants.',
      'Adam Smith defined economics as the Science of Wealth; Marshall emphasized material human welfare.',
      'Lionel Robbins formulated the scarcity definition: unlimited ends versus scarce means having alternative uses.',
      'Paul Samuelson presented the dynamic growth definition incorporating dynamic resource allocation over time.',
      'Microeconomics analyzes individual economic decision-makers; Macroeconomics analyzes aggregates of the whole economy.'
    ],
    keyPointsTa: [
      'பொருளியல் என்பது இல்லங்களின் மேலாண்மை என்ற சொல்லிலிருந்து உருவான பற்றாக்குறை மற்றும் தேர்வை விளக்கும் அறிவியலாகும்.',
      'ஆடம் ஸ்மித் செல்வ இலக்கணத்தையும், ஆல்பிரட் மார்ஷல் நல இலக்கணத்தையும் வழங்கினர்.',
      'லயனல் ராபின்ஸ் விருப்பங்களோடும் பற்றாக்குறையான சாதனங்களோடும் தொடர்புடைய பற்றாக்குறை இலக்கணத்தை வகுத்தார்.',
      'பால் சாமுவேல்சன் காலப் போக்கில் பொருளாதார வளங்களை விநியோகிக்கும் வளர்ச்சி இலக்கணத்தை உருவாக்கினார்.',
      'நுண்ணினப் பொருளியல் தனிநபர்களையும், பேரியல் பொருளியல் ஒட்டுமொத்த பொருளாதாரத்தையும் ஆராய்கின்றன.'
    ],
    formulaCheatSheet: [
      'Robbins Problem: Unlimited Ends + Scarce Resources = Choice',
      'Microeconomics = Price Theory',
      'Macroeconomics = Income and Employment Theory'
    ],
    simpleExplanationEn: 'Economics is about making wise choices because our desires are infinite, but our money, time, and natural resources are limited.',
    simpleExplanationTa: 'மனிதனின் தேவைகள் அளவற்றவை, ஆனால் அவற்றை நிறைவேற்றும் வளங்கள் குறைவானவை. இந்த பற்றாக்குறையான வளங்களைக் கொண்டு சிறந்த முறையில் முடிவெடுப்பதே பொருளியல் ஆகும்.'
  },
  c11_eco_ch2: {
    id: 'sum_c11_eco_ch2',
    chapterId: 'c11_eco_ch2',
    keyPointsEn: [
      'Utility is the want-satisfying capability of a good, measured cardinally in utils or ordinally via preference ranking.',
      'The Law of Diminishing Marginal Utility states that additional satisfaction decreases with each extra unit consumed.',
      'Consumer equilibrium in equi-marginal utility occurs when MU per rupee spent is equal across all purchased commodities.',
      'Consumer Surplus is the net psychic gain: what a consumer is willing to pay minus what is actually paid.',
      'Indifference curves are negatively sloped, convex to origin, never intersect, and reflect diminishing MRS.'
    ],
    keyPointsTa: [
      'பயன்பாடு என்பது தேவையை நிறைவு செய்யும் ஆற்றல்; இது எண்ணளவையாகவோ அல்லது வரிசை அடிப்படையிலோ அளவிடப்படுகிறது.',
      'குறைந்து செல் இறுதிநிலைப் பயன்பாட்டு விதிப்படி, ஒரு பண்டத்தின் நுகர்வு கூடும் போது அதிலிருந்து கிடைக்கும் கூடுதல் திருப்தி குறையும்.',
      'சம இறுதிநிலைப் பயன்பாட்டு விதியில் செலவிடப்படும் ஒரு ரூபாய்க்கான இறுதிநிலைப் பயன்பாடு சமமாகும்போது நுகர்வோர் சமநிலை பெறுகிறார்.',
      'நுகர்வோர் எச்சம் = கொடுக்க நினைத்த சாத்தியமான விலை - உண்மையாகக் கொடுத்த விலை.',
      'சமநோக்கு வளைகோடுகள் கீழ்நோக்கிச் செல்லும், ஆதிக்கு குவியும், ஒன்றை ஒன்று வெட்டாது.'
    ],
    formulaCheatSheet: [
      'MU = d(TU)/dQ = TU_n - TU_{n-1}',
      'Consumer Surplus = Potential Price - Actual Price',
      'Equi-Marginal Condition: MU_x/P_x = MU_y/P_y = MU_m'
    ],
    simpleExplanationEn: 'The first slice of pizza tastes heavenly, the second is good, but by the fifth slice you feel full and gain very little extra satisfaction. That is diminishing marginal utility in daily life!',
    simpleExplanationTa: 'பசியோடு இருக்கும்போது சாப்பிடும் முதல் இட்லி தரும் திருப்தியை விட ஐந்தாவது இட்லி மிகக் குறைந்த திருப்தியையே தரும். இதுவே குறைந்த செல் இறுதிநிலைப் பயன்பாட்டு விதியாகும்.'
  },
  c11_eco_ch3: {
    id: 'sum_c11_eco_ch3',
    chapterId: 'c11_eco_ch3',
    keyPointsEn: [
      'Production transforms raw inputs into utility-bearing outputs using land, labour, capital, and entrepreneurship.',
      'The short-run Law of Variable Proportions traverses three stages: Increasing, Diminishing, and Negative returns.',
      'Rational producers always operate in Stage II where marginal product is positive but diminishing.',
      'The long-run Law of Returns to Scale exhibits Increasing, Constant, and Decreasing Returns to Scale.',
      'Producer equilibrium occurs where the isocost line is tangent to the highest isoquant: MRTS_LK = w/r.'
    ],
    keyPointsTa: [
      'நிலம், உழைப்பு, மூலதனம், அமைப்பு ஆகிய காரணிகளைக் கொண்டு பயன்பாடுகளை உருவாக்குவதே உற்பத்தி.',
      'மாறும் விகித விளைவு விதி மூன்று நிலைகளைக் கடக்கிறது: வளர்ந்து செல், குறைந்து செல், மற்றும் எதிர்மறை விளைவு.',
      'உற்பத்தியாளர் எப்போதும் இறுதிநிலை உற்பத்தி நேர்மறையாக உள்ள இரண்டாம் நிலையிலேயே உற்பத்தியைத் தொடர்வார்.',
      'அளவு விளைவு விதி: வளர்ந்து செல், மாறா, மற்றும் குறைந்து செல் அளவு விளைவு.',
      'உற்பத்தியாளர் சமநிலை: சம உற்பத்திக் கோடும் சம செலவுக் கோடும் தொடும் புள்ளி (MRTS_LK = w/r).'
    ],
    formulaCheatSheet: [
      'AP = TP / L; MP = d(TP)/dL',
      'Cobb-Douglas: Q = A * L^a * K^b',
      'Equilibrium: MRTS_{LK} = w / r'
    ],
    simpleExplanationEn: 'Adding one or two workers to a field increases harvest dramatically, but crowding twenty workers on the same acre causes them to get in each others way, leading to diminishing returns.',
    simpleExplanationTa: 'ஒரு சிறிய நிலத்தில் உழைப்பாளர்களைத் தொடர்ந்து சேர்த்துக் கொண்டே போனால், குறிப்பிட்ட அளவுக்குப் பின் உற்பத்தி குறைந்து கொண்டே செல்லும்.'
  },
  c11_eco_ch4: {
    id: 'sum_c11_eco_ch4',
    chapterId: 'c11_eco_ch4',
    keyPointsEn: [
      'Economic cost encompasses explicit out-of-pocket expenses, implicit self-owned factor costs, and normal profits.',
      'Total Cost equals Total Fixed Cost plus Total Variable Cost (TC = TFC + TVC).',
      'Average Cost and Marginal Cost curves are U-shaped; MC intersects both AVC and AC at their absolute minimum points.',
      'Average Revenue equals price (AR = P), representing the demand curve facing the firm.',
      'Under perfect competition AR = MR; under monopoly and monopolistic competition AR > MR with downward slope.'
    ],
    keyPointsTa: [
      'பொருளியல் செலவு என்பது வெளியுறு செலவு, உள்ளுறு செலவு மற்றும் சாதாரண இலாபத்தின் கூட்டுத்தொகை.',
      'மொத்தச் செலவு = மாறாச் செலவு + மாறும் செலவு (TC = TFC + TVC).',
      'சராசரி செலவு மற்றும் இறுதிநிலைச் செலவுக் கோடுகள் U-வடிவம் கொண்டவை; MC கோடு AC-யின் மிகக் குறைந்த புள்ளியில் வெட்டுகிறது.',
      'சராசரி வருவாய் எப்போதும் விலைக்குச் சமம் (AR = P).',
      'நிறைவுப் போட்டியில் AR = MR; முற்றுரிமையில் AR > MR.'
    ],
    formulaCheatSheet: [
      'TC = TFC + TVC; AC = AFC + AVC',
      'MC = d(TC)/dQ; cuts AC at min(AC)',
      'TR = P * Q; AR = P; MR = AR * (1 - 1/e)'
    ],
    simpleExplanationEn: 'Fixed costs like shop rent must be paid whether you sell one cup of coffee or a thousand. Variable costs like milk and beans rise with every cup brewed.',
    simpleExplanationTa: 'கடை வாடகை என்பது வியாபாரம் நடந்தாலும் நடக்காவிட்டாலும் மாறாத செலவு. டீத்தூள், பால் போன்றவை தயாரிப்புக்கு ஏற்ப மாறும் செலவுகள் ஆகும்.'
  },
  c11_eco_ch5: {
    id: 'sum_c11_eco_ch5',
    chapterId: 'c11_eco_ch5',
    keyPointsEn: [
      'Perfect competition features infinite buyers and sellers, homogeneous products, and zero price control (Price Taker).',
      'Monopoly features a single seller with high entry barriers and full price-making control with potential price discrimination.',
      'Monopolistic competition combines many sellers with differentiated products and intense advertising selling costs.',
      'Oligopoly features mutual interdependence among a few dominant firms and Sweezys kinked demand curve rigidity.',
      'Profit maximization under all market structures strictly requires MR = MC and MC rising.'
    ],
    keyPointsTa: [
      'நிறைவுப் போட்டியில் எண்ணற்ற வாங்குவோர் விற்போர், ஒரே மாதிரியான பண்டங்கள் மற்றும் விலையை ஏற்கும் நிலை இருக்கும்.',
      'முற்றுரிமையில் ஒரே ஒரு விற்பனையாளர் மட்டுமே இருந்து விலையைத் தானே தீர்மானிக்கிறார்.',
      'முற்றுரிமைப் போட்டியில் பல விற்பனையாளர்கள் வேறுபடுத்தப்பட்ட பண்டங்களை விளம்பரச் செலவுகளுடன் விற்கின்றனர்.',
      'சில்லோர் முற்றுரிமையில் ஒரு சில நிறுவனங்கள் பரஸ்பர சார்புடன் நெளிந்த தேவைக் கோட்டைக் கொண்டுள்ளன.',
      'அனைத்து அங்காடிகளிலும் இலாப உச்சநிலை நிபந்தனை: MR = MC.'
    ],
    formulaCheatSheet: [
      'Profit Maximization Rule: MR = MC (MC cuts MR from below)',
      'Lerner Monopoly Index: (P - MC) / P = 1 / e_p'
    ],
    simpleExplanationEn: 'Wheat farmers in a village operate in perfect competition because wheat is identical everywhere, whereas the local power company is a monopoly with no competitors.',
    simpleExplanationTa: 'காய்கறி சந்தையில் தக்காளி விற்பவர்கள் நிறைவுப் போட்டியில் உள்ளனர், மின்சார வாரியம் முற்றுரிமைக்கு சிறந்த உதாரணமாகும்.'
  },
  c11_eco_ch6: {
    id: 'sum_c11_eco_ch6',
    chapterId: 'c11_eco_ch6',
    keyPointsEn: [
      'Distribution theory governs functional factor pricing: Rent, Wages, Interest, and Profit.',
      'Marginal productivity theory posits that factor rewards equal the value of their marginal physical product (VMP).',
      'Ricardian Rent represents a differential surplus on superior fertile land over marginal no-rent land.',
      'Keynesian liquidity preference identifies transaction, precautionary, and speculative motives determining the interest rate.',
      'Schumpeter attributed entrepreneurial profit to innovation, Knight to uninsurable uncertainty, and Clark to dynamic progress.'
    ],
    keyPointsTa: [
      'பகிர்வுக் கோட்பாடு உற்பத்தி காரணிகளுக்கான ஊதியங்களை (வாரம், கூலி, வட்டி, இலாபம்) தீர்மானிக்கிறது.',
      'இறுதிநிலை உற்பத்தித்திறன் கோட்பாட்டின்படி காரணியின் ஊதியம் அதன் VMP-க்கு சமமாக இருக்கும்.',
      'ரிக்கார்டோவின் வாரம் என்பது விளிம்பு நிலத்தை விட வளமான நிலத்திற்கு கிடைக்கும் உபரி வருவாய்.',
      'கீன்ஸ் வட்டி வீதத்தை ரொக்கத்தை விட்டுக்கொடுக்கும் நீர்மை விருப்பக் கோட்பாட்டின் மூலம் விளக்கினார்.',
      'சும்பீட்டர் புதுமை புனைதலுக்கும், நைட் நிச்சயமற்ற தன்மையைத் தாங்குவதற்கும் இலாபம் வழங்கப்படுவதாகக் கூறினர்.'
    ],
    formulaCheatSheet: [
      'Factor Price = VMP = P * MP',
      'Quasi-Rent = Total Revenue - Total Variable Cost',
      'Liquidity Preference: L = L_1(Y) + L_2(r)'
    ],
    simpleExplanationEn: 'Distribution answers how a company revenue gets divided between the landlord (rent), employees (wages), banks (interest), and the founder (profit).',
    simpleExplanationTa: 'ஒரு தொழிற்சாலை ஈட்டிய மொத்த வருமானம் இடம் கொடுத்தவருக்கு வாடகையாகவும், தொழிலாளர்களுக்கு கூலியாகவும், கடன் கொடுத்தவருக்கு வட்டியாகவும், உரிமையாளருக்கு இலாபமாகவும் எவ்வாறு பிரிக்கப்படுகிறது என்பதை இது விளக்குகிறது.'
  }
};

export const CLASS_11_ECO_PART1_QUIZZES: Record<string, ChapterQuiz> = {
  c11_eco_ch1: {
    id: 'quiz_c11_eco_ch1',
    chapterId: 'c11_eco_ch1',
    titleEn: 'Chapter 1 Mastery Quiz: Introduction to Microeconomics',
    titleTa: 'பாடம் 1 பயிற்சி வினாடி-வினா: நுண்ணினப் பொருளியல் ஓர் அறிமுகம்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Who is recognized as the author of the Scarcity Definition of Economics in 1932?',
        questionTa: '1932-ல் பொருளியலின் பற்றாக்குறை இலக்கணத்தை வெளியிட்ட பொருளியல் அறிஞர் யார்?',
        optionsEn: ['Adam Smith', 'Alfred Marshall', 'Lionel Robbins', 'Paul Samuelson'],
        optionsTa: ['ஆடம் ஸ்மித்', 'ஆல்பிரட் மார்ஷல்', 'லயனல் ராபின்ஸ்', 'பால் சாமுவேல்சன்'],
        correctAnswerIndex: 2,
        explanationEn: 'Lionel Robbins authored "An Essay on the Nature and Significance of Economic Science" defining economics via scarcity and choice.',
        explanationTa: 'லயனல் ராபின்ஸ் பற்றாக்குறை மற்றும் விருப்பத் தேர்வுகளின் அடிப்படையில் இலக்கணத்தை வகுத்தார்.'
      },
      {
        id: 'q2',
        questionEn: 'Microeconomics is fundamentally known as which theory?',
        questionTa: 'நுண்ணினப் பொருளியல் பொதுவாக எந்தக் கோட்பாடு என்று அழைக்கப்படுகிறது?',
        optionsEn: ['Income Theory', 'Price Theory', 'Growth Theory', 'Monetary Theory'],
        optionsTa: ['வருவாய்க் கோட்பாடு', 'விலைக் கோட்பாடு', 'வளர்ச்சிக் கோட்பாடு', 'பணவியல் கோட்பாடு'],
        correctAnswerIndex: 1,
        explanationEn: 'Microeconomics studies price determination of individual goods and factors of production, hence called Price Theory.',
        explanationTa: 'தனிப்பட்ட பண்டங்கள் மற்றும் காரணிகளின் விலையைத் தீர்மானிப்பதால் இது விலைக் கோட்பாடு எனப்படுகிறது.'
      }
    ]
  },
  c11_eco_ch2: {
    id: 'quiz_c11_eco_ch2',
    chapterId: 'c11_eco_ch2',
    titleEn: 'Chapter 2 Mastery Quiz: Consumption Analysis',
    titleTa: 'பாடம் 2 பயிற்சி வினாடி-வினா: நுகர்வுப் பகுப்பாய்வு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'At the point of satiety, what is the value of Marginal Utility (MU)?',
        questionTa: 'நிறைவுப் புள்ளியில் (Point of Satiety) இறுதிநிலைப் பயன்பாட்டின் மதிப்பு என்ன?',
        optionsEn: ['Maximum', 'Zero', 'Negative', 'Infinite'],
        optionsTa: ['உச்ச நிலை', 'பூஜ்ஜியம் (Zero)', 'எதிர்மறை', 'முடிவிலி'],
        correctAnswerIndex: 1,
        explanationEn: 'When Total Utility reaches maximum satisfaction, Marginal Utility equals zero.',
        explanationTa: 'மொத்தப் பயன்பாடு உச்சத்தில் இருக்கும் போது இறுதிநிலைப் பயன்பாடு பூஜ்ஜியமாக இருக்கும்.'
      },
      {
        id: 'q2',
        questionEn: 'What is the shape of an Indifference Curve with respect to the origin?',
        questionTa: 'ஆதிப் புள்ளியை நோக்கி சமநோக்கு வளைகோட்டின் வடிவம் எவ்வாறு இருக்கும்?',
        optionsEn: ['Concave', 'Convex', 'Straight line', 'Circular'],
        optionsTa: ['குழிந்து காணப்படும்', 'குவிந்து காணப்படும் (Convex)', 'நேர்கோடு', 'வட்ட வடிவம்'],
        correctAnswerIndex: 1,
        explanationEn: 'Indifference curves are convex to the origin due to the diminishing Marginal Rate of Substitution (MRS).',
        explanationTa: 'குறைந்து செல் இறுதிநிலை பதிலீட்டு வீதத்தால் சமநோக்கு வளைகோடு ஆதியை நோக்கி குவிந்து காணப்படும்.'
      }
    ]
  },
  c11_eco_ch3: {
    id: 'quiz_c11_eco_ch3',
    chapterId: 'c11_eco_ch3',
    titleEn: 'Chapter 3 Mastery Quiz: Production Analysis',
    titleTa: 'பாடம் 3 பயிற்சி வினாடி-வினா: உற்பத்திப் பகுப்பாய்வு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'In which stage of the Law of Variable Proportions will a rational producer choose to operate?',
        questionTa: 'மாறும் விகித விளைவு விதியில் ஒரு பகுத்தறிவுள்ள உற்பத்தியாளர் எந்த நிலையில் செயல்படுவார்?',
        optionsEn: ['Stage I (Increasing Returns)', 'Stage II (Diminishing Returns)', 'Stage III (Negative Returns)', 'Either Stage I or III'],
        optionsTa: ['முதல் நிலை', 'இரண்டாம் நிலை (குறைந்து செல் விளைவு)', 'மூன்றாம் நிலை', 'முதல் அல்லது மூன்றாம் நிலை'],
        correctAnswerIndex: 1,
        explanationEn: 'In Stage II, both MP and AP are positive, and total production reaches its zenith.',
        explanationTa: 'இரண்டாம் நிலையில் மொத்த உற்பத்தி உச்சத்தை நோக்கிச் செல்வதாலும் MP நேர்மறையாக இருப்பதாலும் உற்பத்தியாளர் இதில் செயல்படுவார்.'
      }
    ]
  },
  c11_eco_ch4: {
    id: 'quiz_c11_eco_ch4',
    chapterId: 'c11_eco_ch4',
    titleEn: 'Chapter 4 Mastery Quiz: Cost and Revenue',
    titleTa: 'பாடம் 4 பயிற்சி வினாடி-வினா: செலவு மற்றும் வருவாய்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'The Marginal Cost (MC) curve intersects the Average Cost (AC) curve at which point?',
        questionTa: 'இறுதிநிலைச் செலவு (MC) கோடானது சராசரி செலவு (AC) கோட்டை எந்தப் புள்ளியில் வெட்டும்?',
        optionsEn: ['At AC maximum point', 'At AC minimum point', 'At zero output', 'At any random point'],
        optionsTa: ['AC-யின் உச்சப் புள்ளியில்', 'AC-யின் மிகக் குறைந்த புள்ளியில் (Minimum point)', 'பூஜ்ஜிய உற்பத்தியில்', 'எங்கு வேண்டுமானாலும்'],
        correctAnswerIndex: 1,
        explanationEn: 'The MC curve always intersects the AC curve from below at its lowest (minimum) point.',
        explanationTa: 'MC கோடு AC கோட்டை அதன் மிகக் குறைந்த புள்ளியில் கீழிருந்து வெட்டிச் செல்லும்.'
      }
    ]
  },
  c11_eco_ch5: {
    id: 'quiz_c11_eco_ch5',
    chapterId: 'c11_eco_ch5',
    titleEn: 'Chapter 5 Mastery Quiz: Market Structure',
    titleTa: 'பாடம் 5 பயிற்சி வினாடி-வினா: அங்காடி அமைப்பும் விலை நிர்ணயமும்',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Under which market structure is the individual firm a "Price Taker"?',
        questionTa: 'எந்த அங்காடி அமைப்பில் தனி நிறுவனம் "விலையேற்பவராக" (Price Taker) திகழ்கிறது?',
        optionsEn: ['Monopoly', 'Monopolistic Competition', 'Perfect Competition', 'Oligopoly'],
        optionsTa: ['முற்றுரிமை', 'முற்றுரிமைப் போட்டி', 'நிறைவுப் போட்டி (Perfect Competition)', 'சில்லோர் முற்றுரிமை'],
        correctAnswerIndex: 2,
        explanationEn: 'Under perfect competition, the firm has zero price control and accepts the market-determined equilibrium price.',
        explanationTa: 'நிறைவுப் போட்டியில் நிறுவனம் சந்தை விலையை அப்படியே ஏற்றுக்கொண்டு விற்பனை செய்யும்.'
      }
    ]
  },
  c11_eco_ch6: {
    id: 'quiz_c11_eco_ch6',
    chapterId: 'c11_eco_ch6',
    titleEn: 'Chapter 6 Mastery Quiz: Distribution Theory',
    titleTa: 'பாடம் 6 பயிற்சி வினாடி-வினா: பகிர்வு கோட்பாடு',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        questionEn: 'Who introduced the concept of Quasi-Rent in economic theory?',
        questionTa: 'பொருளியலில் "போலி வாரம்" (Quasi-Rent) என்ற கருத்தை அறிமுகப்படுத்தியவர் யார்?',
        optionsEn: ['David Ricardo', 'Alfred Marshall', 'J.M. Keynes', 'Adam Smith'],
        optionsTa: ['டேவிட் ரிக்கார்டோ', 'ஆல்பிரட் மார்ஷல் (Alfred Marshall)', 'ஜே.எம். கீன்ஸ்', 'ஆடம் ஸ்மித்'],
        correctAnswerIndex: 1,
        explanationEn: 'Alfred Marshall introduced Quasi-Rent as the short-term surplus earned by man-made machines.',
        explanationTa: 'மனிதனால் உருவாக்கப்பட்ட இயந்திர சாதனங்களுக்கு குறுகிய காலத்தில் கிடைக்கும் கூடுதல் வருவாயை மார்ஷல் போலி வாரம் என்றார்.'
      }
    ]
  }
};

export const CLASS_11_ECO_PART1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_eco_ch2: {
    id: 'diag_c11_eco_ch2',
    chapterId: 'c11_eco_ch2',
    titleEn: 'Total Utility vs Marginal Utility Dynamics',
    titleTa: 'மொத்தப் பயன்பாடு மற்றும் இறுதிநிலைப் பயன்பாட்டின் தொடர்பு',
    descriptionEn: 'Graphical curves demonstrating the point of satiety, maximum TU, and zero MU.',
    descriptionTa: 'TU உச்சத்தை அடையும் போது MU பூஜ்ஜியமாவதை விளக்கும் வரைபடம்.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">TOTAL UTILITY (TU) VS MARGINAL UTILITY (MU)</text>

  <!-- Axes -->
  <line x1="100" y1="340" x2="720" y2="340" stroke="#94a3b8" stroke-width="2" />
  <line x1="100" y1="50" x2="100" y2="380" stroke="#94a3b8" stroke-width="2" />
  <text x="730" y="345" fill="#94a3b8" font-size="12">Quantity Consumed (Q)</text>
  <text x="40" y="55" fill="#94a3b8" font-size="12">Utility</text>

  <!-- Zero MU Line -->
  <line x1="100" y1="340" x2="720" y2="340" stroke="#64748b" stroke-dasharray="4" />

  <!-- Total Utility Curve (TU) -->
  <path d="M 100 340 Q 300 100, 480 90 T 700 150" fill="none" stroke="#10b981" stroke-width="3" />
  <text x="710" y="150" fill="#10b981" font-size="14" font-weight="bold">TU Curve</text>

  <!-- Marginal Utility Curve (MU) -->
  <path d="M 100 150 L 480 340 L 650 400" fill="none" stroke="#f43f5e" stroke-width="3" />
  <text x="660" y="405" fill="#f43f5e" font-size="14" font-weight="bold">MU Curve</text>

  <!-- Point of Satiety Dashed Line -->
  <line x1="480" y1="90" x2="480" y2="340" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5" />
  <circle cx="480" cy="90" r="5" fill="#10b981" />
  <circle cx="480" cy="340" r="5" fill="#f43f5e" />

  <!-- Annotations -->
  <text x="490" y="85" fill="#34d399" font-size="12" font-weight="bold">Maximum TU (உச்ச பயன்பாடு)</text>
  <text x="490" y="335" fill="#38bdf8" font-size="12" font-weight="bold">Point of Satiety (MU = 0)</text>
  <text x="560" y="375" fill="#fda4af" font-size="11">Negative MU (Disutility)</text>

  <rect x="140" y="80" width="180" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1" />
  <text x="150" y="105" fill="#e2e8f0" font-size="11">• MU > 0 : TU increases</text>
  <text x="150" y="125" fill="#e2e8f0" font-size="11">• MU = 0 : TU maximum</text>
  <text x="150" y="145" fill="#e2e8f0" font-size="11">• MU &lt; 0 : TU decreases</text>
</svg>`
  },
  c11_eco_ch4: {
    id: 'diag_c11_eco_ch4',
    chapterId: 'c11_eco_ch4',
    titleEn: 'Short-Run Cost Curves: AC, AVC, and MC',
    titleTa: 'குறுகிய கால செலவுக் கோடுகள்: AC, AVC, மற்றும் MC',
    descriptionEn: 'The characteristic U-shaped AC and AVC curves with the Marginal Cost curve intersecting at minimum points.',
    descriptionTa: 'AC மற்றும் AVC கோடுகளின் மிகக் குறைந்த புள்ளிகளில் MC வெட்டும் வரைபடம்.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">SHORT-RUN COST CURVES (AC, AVC, MC)</text>

  <!-- Axes -->
  <line x1="120" y1="360" x2="720" y2="360" stroke="#94a3b8" stroke-width="2" />
  <line x1="120" y1="60" x2="120" y2="360" stroke="#94a3b8" stroke-width="2" />
  <text x="730" y="365" fill="#94a3b8" font-size="12">Output (Q)</text>
  <text x="60" y="70" fill="#94a3b8" font-size="12">Cost (₹)</text>

  <!-- AVC Curve -->
  <path d="M 160 280 Q 360 290, 440 260 T 680 180" fill="none" stroke="#f59e0b" stroke-width="2.5" />
  <text x="690" y="180" fill="#f59e0b" font-size="13" font-weight="bold">AVC</text>

  <!-- AC Curve -->
  <path d="M 160 210 Q 380 230, 480 180 T 680 110" fill="none" stroke="#38bdf8" stroke-width="3" />
  <text x="690" y="110" fill="#38bdf8" font-size="13" font-weight="bold">AC (ATC)</text>

  <!-- MC Curve -->
  <path d="M 180 320 Q 300 340, 390 265 L 480 180 L 620 70" fill="none" stroke="#f43f5e" stroke-width="3" />
  <text x="630" y="70" fill="#f43f5e" font-size="14" font-weight="bold">MC</text>

  <!-- Minimum Point Circles -->
  <circle cx="390" cy="265" r="5" fill="#f59e0b" />
  <circle cx="480" cy="180" r="5" fill="#38bdf8" />

  <text x="495" y="195" fill="#38bdf8" font-size="11" font-weight="bold">Min AC (MC = AC)</text>
  <text x="405" y="280" fill="#f59e0b" font-size="11" font-weight="bold">Min AVC (MC = AVC)</text>
</svg>`
  },
  c11_eco_ch5: {
    id: 'diag_c11_eco_ch5',
    chapterId: 'c11_eco_ch5',
    titleEn: 'Kinked Demand Curve under Oligopoly (Paul Sweezy Model)',
    titleTa: 'சில்லோர் முற்றுரிமையில் நெளிந்த தேவைக் கோடு',
    descriptionEn: 'Diagram showing elastic upper segment, inelastic lower segment, and vertical discontinuity in Marginal Revenue.',
    descriptionTa: 'பால் ஸ்வீசியின் நெளிந்த தேவைக் கோடு மற்றும் விலை விறைப்புத்தன்மை.',
    svgContent: `<svg viewBox="0 0 800 420" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="420" fill="#0f172a" rx="16" />
  <text x="400" y="32" text-anchor="middle" fill="#38bdf8" font-size="18" font-weight="bold">SWEEZY KINKED DEMAND CURVE &amp; PRICE RIGIDITY</text>

  <line x1="120" y1="360" x2="720" y2="360" stroke="#94a3b8" stroke-width="2" />
  <line x1="120" y1="60" x2="120" y2="360" stroke="#94a3b8" stroke-width="2" />
  <text x="730" y="365" fill="#94a3b8" font-size="12">Output (Q)</text>
  <text x="60" y="70" fill="#94a3b8" font-size="12">Price / MR</text>

  <!-- Kink Point K -->
  <!-- Upper segment: Elastic -->
  <line x1="160" y1="120" x2="380" y2="200" stroke="#38bdf8" stroke-width="3" />
  <!-- Lower segment: Inelastic -->
  <line x1="380" y1="200" x2="580" y2="350" stroke="#38bdf8" stroke-width="3" />
  <text x="590" y="350" fill="#38bdf8" font-size="13" font-weight="bold">Demand (dD)</text>

  <!-- Kink Point K marker -->
  <circle cx="380" cy="200" r="6" fill="#f43f5e" />
  <text x="395" y="195" fill="#f43f5e" font-size="14" font-weight="bold">Kink (P0, Q0)</text>

  <!-- Rigid Price line -->
  <line x1="120" y1="200" x2="380" y2="200" stroke="#f43f5e" stroke-dasharray="4" />
  <text x="75" y="205" fill="#f43f5e" font-size="12" font-weight="bold">Rigid P0</text>
  
  <line x1="380" y1="200" x2="380" y2="360" stroke="#f43f5e" stroke-dasharray="4" />
  <text x="370" y="380" fill="#f43f5e" font-size="12" font-weight="bold">Q0</text>

  <!-- Notes -->
  <rect x="460" y="80" width="280" height="90" rx="8" fill="#1e293b" stroke="#475569" />
  <text x="475" y="105" fill="#e2e8f0" font-size="11">• Above K: Elastic (e > 1, rivals do not follow price rise)</text>
  <text x="475" y="130" fill="#e2e8f0" font-size="11">• Below K: Inelastic (e &lt; 1, rivals match price cuts)</text>
  <text x="475" y="155" fill="#facc15" font-size="11">• Result: Price rigidity at prevailing price P0</text>
</svg>`
  }
};

export const CLASS_11_ECO_PART1_VIDEOS: Record<string, VideoExplainer> = {
  c11_eco_ch2: {
    id: 'vid_c11_eco_ch2',
    chapterId: 'c11_eco_ch2',
    titleEn: 'Animated Explainer: The Law of Diminishing Marginal Utility',
    titleTa: 'இயங்குபடம்: குறைந்த செல் இறுதிநிலைப் பயன்பாட்டு விதி',
    durationMinutes: 10,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Satiety Curve in Real Life',
        titleTa: 'வாழ்க்கையில் நிறைவுப் புள்ளி',
        visualDescriptionEn: 'A thirsty runner drinking glasses of cool water on a hot day; joy meter spikes on glass 1, levels off on glass 3, and turns red on glass 5.',
        narrationEn: 'As you consume more units of any good, the psychological satisfaction from each additional unit drops until you reach full satiety.',
        narrationTa: 'தாகத்தில் இருக்கும் ஒருவர் குடிக்கும் முதல் குவளை நீர் அதிக திருப்தியைத் தரும், ஆனால் தொடர்ந்து குடிக்கையில் கூடுதல் திருப்தி குறைந்து கொண்டே போகும்.',
        keyTakeaway: 'MU diminishes with each continuous consumption unit.'
      }
    ]
  },
  c11_eco_ch5: {
    id: 'vid_c11_eco_ch5',
    chapterId: 'c11_eco_ch5',
    titleEn: 'Animated Explainer: Perfect Competition vs Monopoly',
    titleTa: 'இயங்குபடம்: நிறைவுப் போட்டி மற்றும் முற்றுரிமை ஒப்பீடு',
    durationMinutes: 11,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Price Taker vs Price Maker',
        titleTa: 'விலையேற்பவர் மற்றும் விலை நிர்ணயிப்பவர்',
        visualDescriptionEn: 'A wheat farmer on the left accepting market rates vs a solitary railway baron on the right setting tariffs at will.',
        narrationEn: 'In perfect competition, hundreds of identical sellers make every firm a price taker. A monopoly controls the entire industry and sets prices as a price maker.',
        narrationTa: 'நிறைவுப் போட்டியில் உள்ள உற்பத்தியாளர் சந்தை விலையை ஏற்பவராக மட்டுமே இருக்க முடியும்; முற்றுரிமையாளர் விலையைத் தானே தீர்மானிக்கிறார்.',
        keyTakeaway: 'Market power dictates pricing freedom.'
      }
    ]
  }
};
'''

with open('src/data/class11EconomicsPart1.ts', 'a', encoding='utf-8') as f:
    f.write(rest_block)

print("class11EconomicsPart1.ts completed successfully!")
