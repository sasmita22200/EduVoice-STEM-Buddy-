# -*- coding: utf-8 -*-

content = '''import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 11 Economics - Part 1 (Chapters 1 to 6)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 1. Introduction to Microeconomics (நுண்ணினப் பொருளியல் ஓர் அறிமுகம்)
 * 2. Consumption Analysis (நுகர்வுப் பகுப்பாய்வு)
 * 3. Production Analysis (உற்பத்திப் பகுப்பாய்வு)
 * 4. Cost and Revenue Analysis (செலவு மற்றும் வருவாய் பகுப்பாய்வு)
 * 5. Market Structure and Pricing (அங்காடி அமைப்பும் விலை நிர்ணயமும்)
 * 6. Distribution Theory (பகிர்வு கோட்பாடு)
 */

export const CLASS_11_ECO_PART1_CHAPTERS: Chapter[] = [
  {
    id: 'c11_eco_ch1',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 1,
    titleEn: 'Chapter 1: Introduction to Microeconomics',
    titleTa: 'பாடம் 1: நுண்ணினப் பொருளியல் ஓர் அறிமுகம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch2',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 2,
    titleEn: 'Chapter 2: Consumption Analysis',
    titleTa: 'பாடம் 2: நுகர்வுப் பகுப்பாய்வு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch3',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 3,
    titleEn: 'Chapter 3: Production Analysis',
    titleTa: 'பாடம் 3: உற்பத்திப் பகுப்பாய்வு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch4',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 4,
    titleEn: 'Chapter 4: Cost and Revenue Analysis',
    titleTa: 'பாடம் 4: செலவு மற்றும் வருவாய் பகுப்பாய்வு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch5',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 5,
    titleEn: 'Chapter 5: Market Structure and Pricing',
    titleTa: 'பாடம் 5: அங்காடி அமைப்பும் விலை நிர்ணயமும்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c11_eco_ch6',
    classLevel: 11,
    subjectId: 'c11_economics',
    unitNumber: 1,
    unitNameEn: 'Part 1: Microeconomics Foundations & Markets',
    unitNameTa: 'பகுதி 1: நுண்ணினப் பொருளியல் அடிப்படைகள் & அங்காடிகள்',
    chapterNumber: 6,
    titleEn: 'Chapter 6: Distribution Theory',
    titleTa: 'பாடம் 6: பகிர்வு கோட்பாடு',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CLASS_11_ECO_PART1_NOTES: Record<string, NoteItem> = {
  c11_eco_ch1: {
    id: 'note_c11_eco_ch1',
    chapterId: 'c11_eco_ch1',
    titleEn: 'Chapter 1 Revision Notes: Introduction to Microeconomics',
    titleTa: 'பாடம் 1 பாடக் குறிப்புகள்: நுண்ணினப் பொருளியல் ஓர் அறிமுகம்',
    contentEn: `# Chapter 1: Introduction to Microeconomics

## 1. Meaning and Scope of Economics
The term 'Economics' originates from the ancient Greek words *Oikos* (house) and *Nomos* (customs/law), meaning 'household management'.
Economics is a social science studying how individuals, businesses, and governments allocate scarce resources with alternative uses to satisfy unlimited human wants.

## 2. Four Seminal Definitions of Economics
1. **Wealth Definition (Adam Smith - 1776)**:
   - Book: *An Inquiry into the Nature and Causes of the Wealth of Nations*.
   - Defined economics as the "Science of Wealth".
   - Focused on wealth creation, production, and accumulation; criticized by Carlyle and Ruskin as a 'dismal science' and 'pig science' for ignoring human welfare.
2. **Welfare Definition (Alfred Marshall - 1890)**:
   - Book: *Principles of Economics*.
   - Defined economics as "a study of mankind in the ordinary business of life; it examines that part of individual and social action which is most closely connected with the attainment and with the use of the material requisites of well-being."
   - Shifted focus from wealth to human material welfare.
3. **Scarcity Definition (Lionel Robbins - 1932)**:
   - Book: *An Essay on the Nature and Significance of Economic Science*.
   - Defined economics as "the science which studies human behaviour as a relationship between ends and scarce means which have alternative uses."
   - Characteristics: Unlimited ends (wants), scarce resources (means), alternative uses, and the necessity of choice.
4. **Growth Definition (Paul A. Samuelson - 1948)**:
   - Dynamic, time-dimensional definition incorporating resource allocation over time, production, and equitable distribution among various groups in society.

## 3. Microeconomics vs Macroeconomics
- **Microeconomics**: Coined by Ragnar Frisch (1933). Studies individual economic units (individual consumer, household, firm, industry). Also called *Price Theory*.
- **Macroeconomics**: Studies aggregates of the economy as a whole (National Income, inflation, aggregate employment). Also called *Income and Employment Theory*.

## 4. Nature of Economics: Science or Art?
- As a **Science**: Systematic collection, classification, and analysis of economic facts, formulating general laws through cause-and-effect relationships.
- As an **Art**: Practical application of theoretical knowledge to solve real-world problems like poverty and unemployment.
- **Positive Economics**: Deals with "what is" (objective, factual, verifiable without value judgments).
- **Normative Economics**: Deals with "what ought to be" (prescriptive, ethical, based on value judgments).`,
    contentTa: `# பாடம் 1: நுண்ணினப் பொருளியல் ஓர் அறிமுகம்

## 1. பொருளியலின் தோற்றமும் பொருளும்
பொருளியல் (Economics) என்ற சொல் *ஒய்கோஸ்* (Oikos - இல்லம்) மற்றும் *நோமோஸ்* (Nomos - விதி அல்லது மேலாண்மை) என்ற கிரேக்கச் சொற்களிலிருந்து உருவானது. இதன் பொருள் 'இல்லங்களின் மேலாண்மை' என்பதாகும்.

## 2. பொருளியலின் நான்கு முக்கிய வரைவிலக்கணங்கள்
1. **செல்வ இலக்கணம் (ஆடம் ஸ்மித் - 1776)**:
   - நூல்: *நாடுகளின் செல்வம்* (Wealth of Nations).
   - பொருளியலை "செல்வத்தைப் பற்றிய அறிவியல்" என்று வரையறுத்தார். மனித நல்வாழ்வை விட செல்வத்திற்கே அதிக முக்கியத்துவம் தந்ததால் கார்லைல் போன்றவர்களால் 'இருண்ட அறிவியல்' என விமர்சிக்கப்பட்டது.
2. **நல இலக்கணம் (ஆல்பிரட் மார்ஷல் - 1890)**:
   - நூல்: *பொருளியல் கோட்பாடுகள்* (Principles of Economics).
   - "பொருளியல் என்பது மனிதனின் அன்றாட வாழ்க்கை நடவடிக்கைகளை ஆராயும் ஓர் அறிவியல்; அது நல்வாழ்விற்குத் தேவையான பௌதிகப் பொருட்களை அடைவதையும் பயன்படுத்துவதையும் விளக்குகிறது."
3. **பற்றாக்குறை இலக்கணம் (லயனல் ராபின்ஸ் - 1932)**:
   - நூல்: *பொருளியல் அறிவியலின் தன்மையும் அதன் சிறப்பும் பற்றிய ஓர் ஆய்வு*.
   - "பொருளியல் என்பது விருப்பங்களோடும், மாற்று வழிகளில் பயன்படக்கூடிய பற்றாக்குறையான சாதனங்களோடும் தொடர்புடைய மனித நடத்தையைப் பற்றி படிக்கும் அறிவியலாகும்."
4. **வளர்ச்சி இலக்கணம் (பால் சாமுவேல்சன் - 1948)**:
   - காலப் போக்கில் பற்றாக்குறையான வளங்களைப் பயன்படுத்தி உற்பத்தியை அதிகரித்து, அவற்றை சமுதாய மக்களிடையே எவ்வாறு பகிர்வது என்பதை விளக்கும் கால பரிமாணமுள்ள நவீன வரைவிலக்கணம்.

## 3. நுண்ணினப் பொருளியல் vs பேரியல் பொருளியல்
- **நுண்ணினப் பொருளியல்**: தனிநபர், தனிக் குடும்பம், நிறுவனம் போன்ற சிறு அலகுகளை ஆராய்கிறது (விலைக் கோட்பாடு).
- **பேரியல் பொருளியல்**: ஒட்டுமொத்த பொருளாதாரம், தேசிய வருவாய், வேலைவாய்ப்பு மற்றும் பணவீக்கத்தை ஆராய்கிறது.`,
    authorContext: 'Classical, Neo-classical, and Modern Economic Thought (Adam Smith, Marshall, Robbins, Samuelson).',
    keyFormulas: [
      'Microeconomics: Focuses on Price Theory and Individual Firm Equilibrium',
      'Macroeconomics: Focuses on Aggregate Demand, Output, and National Income',
      'Robbins Formula: Unlimited Wants + Scarce Means + Alternative Uses = Economic Problem (Choice)'
    ],
    workedExamples: [
      {
        question: 'Classify the statement as Positive or Normative: "The government should provide free healthcare to all citizens."',
        solution: 'Normative Economics, because it involves a value judgment expressing what "ought to be" rather than an objective testable fact.'
      }
    ]
  },
  c11_eco_ch2: {
    id: 'note_c11_eco_ch2',
    chapterId: 'c11_eco_ch2',
    titleEn: 'Chapter 2 Revision Notes: Consumption Analysis',
    titleTa: 'பாடம் 2 பாடக் குறிப்புகள்: நுகர்வுப் பகுப்பாய்வு',
    contentEn: `# Chapter 2: Consumption Analysis

## 1. Human Wants and Utility Concepts
Consumption is the destruction of utility to satisfy human wants.
- **Utility**: Want-satisfying power of a commodity or service.
- **Cardinal Utility (Alfred Marshall)**: Utility can be measured in subjective units called *utils*.
- **Ordinal Utility (J.R. Hicks & R.G.D. Allen)**: Utility cannot be measured numerically, but only ranked in order of preference (1st, 2nd, 3rd).
- **Total Utility (TU)**: Total satisfaction derived from consuming a given quantity of goods: $TU = \\sum MU$.
- **Marginal Utility (MU)**: Addition made to total utility by consuming one additional unit of a commodity: $MU_n = TU_n - TU_{n-1} = \\frac{\\Delta TU}{\\Delta Q}$.

## 2. Law of Diminishing Marginal Utility (Gossen's First Law)
- Formulated by H.H. Gossen (1854) and popularized by Alfred Marshall.
- **Statement**: "The additional benefit which a person derives from a given increase of his stock of a thing diminishes with every increase in the stock that he already has."
- **Key Relationship**:
  - When $MU > 0$, $TU$ increases at a diminishing rate.
  - When $MU = 0$, $TU$ reaches its maximum (Point of Satiety).
  - When $MU < 0$, $TU$ begins to decline (Disutility).

## 3. Law of Equi-Marginal Utility (Gossen's Second Law)
- Explains consumer equilibrium when spending limited income across multiple goods.
- A rational consumer allocates expenditure such that the marginal utility per rupee spent is equal across all goods:
$$\\frac{MU_x}{P_x} = \\frac{MU_y}{P_y} = \\dots = MU_m$$

## 4. Consumer's Surplus (Alfred Marshall)
- Defined as the difference between the maximum price a consumer is willing to pay and the actual price paid:
$$\\text{Consumer's Surplus} = \\text{Potential Price} - \\text{Actual Price} = \\sum MU - (P \\times Q)$$

## 5. Indifference Curve Analysis (Ordinal Approach)
- An **Indifference Curve (IC)** shows various combinations of two goods that yield the exact same level of total satisfaction to a consumer.
- **Marginal Rate of Substitution (MRS)**: Rate at which a consumer is willing to sacrifice good Y to obtain one extra unit of good X while staying equally satisfied: $MRS_{xy} = -\\frac{\\Delta Y}{\\Delta X}$.
- **Properties of Indifference Curves**:
  1. Downward sloping from left to right (negative slope).
  2. Convex to the origin due to diminishing $MRS_{xy}$.
  3. Two indifference curves can never intersect.
  4. Higher indifference curves represent higher levels of satisfaction.
- **Consumer Equilibrium**: Reached at the point where the Budget Line (Price Line) is tangent to the highest attainable Indifference Curve ($MRS_{xy} = \\frac{P_x}{P_y}$).`,
    contentTa: `# பாடம் 2: நுகர்வுப் பகுப்பாய்வு (Consumption Analysis)

## 1. பயன்பாடு (Utility) கோட்பாடுகள்
பயன்பாடு என்பது மனித விருப்பத்தை நிறைவு செய்யும் ஒரு பண்டம் அல்லது பணியின் ஆற்றலாகும்.
- **எண்ணளவைப் பயன்பாடு (மார்ஷல்)**: பயன்பாட்டை 'யூட்டில்ஸ்' (utils) என்ற அலகுகளால் அளவிட முடியும்.
- **வரிசைப் பயன்பாடு (ஹிக்ஸ் மற்றும் ஆலன்)**: பயன்பாட்டை அளவிட முடியாது; விருப்பத் தேர்வுகளின் அடிப்படையில் தரவரிசைப்படுத்த மட்டுமே முடியும்.
- **மொத்தப் பயன்பாடு (TU)**: அனைத்து அலகுகளையும் நுகர்வதால் கிடைக்கும் பயன்பாடுகளின் கூடுதல்.
- **இறுதிநிலைப் பயன்பாடு (MU)**: ஓர் கூடுதல் அலகை நுகர்வதால் மொத்தப் பயன்பாட்டில் ஏற்படும் மாற்றம் ($MU = \\Delta TU / \\Delta Q$).

## 2. குறைந்த செல் இறுதிநிலைப் பயன்பாட்டு விதி (காசனின் முதல் விதி)
- காசன் (H.H. Gossen) என்பவரால் உருவாக்கப்பட்டு மார்ஷலால் மேம்படுத்தப்பட்டது.
- "ஒருவரிடம் உள்ள ஒரு பண்டத்தின் இருப்பு அதிகரிக்க அதிகரிக்க, அவனுக்கு அதிலிருந்து கிடைக்கும் இறுதிநிலைப் பயன்பாடு குறைந்து கொண்டே செல்கிறது."
  - $MU > 0$ எனில், மொத்தப் பயன்பாடு (TU) கூடும்.
  - $MU = 0$ எனில், மொத்தப் பயன்பாடு உச்சத்தை அடைகிறது (நிறைவுப் புள்ளி).
  - $MU < 0$ எனில், மொத்தப் பயன்பாடு குறையத் தொடங்குகிறது.

## 3. நுகர்வோர் எச்சம் (Consumer's Surplus)
- ஒரு பண்டத்திற்கு நுகர்வோர் கொடுக்க நினைக்கும் விலைக்கும் (சாத்தியமான விலை) உண்மையாகக் கொடுக்கும் விலைக்கும் இடையே உள்ள வேறுபாடே நுகர்வோர் எச்சம் ஆகும்:
$$\\text{நுகர்வோர் எச்சம்} = \\text{கொடுக்க நினைத்த விலை} - \\text{உண்மையான விலை}$$

## 4. சமநோக்கு வளைகோட்டுப் பகுப்பாய்வு (Indifference Curve)
- சமநோக்கு வளைகோடு என்பது இரு பண்டங்களின் பல்வேறு சேர்க்கைகளில் நுகர்வோருக்கு ஒரே அளவிலான சமமான திருப்தியைத் தரும் புள்ளிகளை இணைக்கும் கோடாகும்.
- **பண்புகள்**:
  1. இடமிருந்து வலமாக கீழ்நோக்கிச் செல்லும்.
  2. ஆதிப் புள்ளியை நோக்கி குவிந்து காணப்படும் (குறைந்து செல் இறுதிநிலை பதிலீட்டு வீதம் - $MRS$).
  3. இரு சமநோக்கு வளைகோடுகள் ஒன்றை ஒன்று வெட்டிக்கொள்ளாது.
  4. உயர்ந்த சமநோக்கு வளைகோடு அதிக திருப்தியைக் குறிக்கும்.`,
    authorContext: 'H.H. Gossen, Alfred Marshall, J.R. Hicks, and R.G.D. Allen consumption frameworks.',
    keyFormulas: [
      'MU = TU_n - TU_{n-1} = d(TU)/dQ',
      'Consumer Surplus = Total Utility - Total Expenditure = Area under demand curve above price line',
      'Equi-Marginal Utility Condition: MU_x / P_x = MU_y / P_y = MU_m',
      'Consumer Equilibrium on IC: MRS_{xy} = P_x / P_y'
    ],
    workedExamples: [
      {
        question: 'If Total Utility for 4 units of apples is 40 utils and for 5 units is 46 utils, what is the Marginal Utility of the 5th unit?',
        solution: 'MU_5 = TU_5 - TU_4 = 46 - 40 = 6 utils.'
      }
    ]
  },
  c11_eco_ch3: {
    id: 'note_c11_eco_ch3',
    chapterId: 'c11_eco_ch3',
    titleEn: 'Chapter 3 Revision Notes: Production Analysis',
    titleTa: 'பாடம் 3 பாடக் குறிப்புகள்: உற்பத்திப் பகுப்பாய்வு',
    contentEn: `# Chapter 3: Production Analysis

## 1. Factors of Production
Production is the transformation of inputs into output, creating form, place, and time utilities.
Four Factors:
1. **Land**: All natural resources given freely by nature (passive factor, inelastic supply, original and indestructible powers).
2. **Labour**: Human physical or mental exertion undertaken with a view to economic reward (perishable, inseparable from labourer, mobile/immobile).
3. **Capital**: Produced means of further production (man-made, dynamic, high mobility).
4. **Organization / Entrepreneur**: Innovates, coordinates factors, and bears uninsurable business risks.

## 2. Production Function
The functional relationship between physical inputs and maximum obtainable physical output:
$$Q = f(L, K, R, S, \\dots)$$
- **Short-run**: Period where at least one factor is fixed (usually capital) while others (labour) are variable.
- **Long-run**: Period where all inputs are variable.

## 3. Law of Variable Proportions (Short-Run Production Function)
As increasing units of a variable factor (Labour) are applied to a fixed factor (Land/Capital), output passes through three distinct stages:
1. **Stage I (Increasing Returns)**: Total Product ($TP$) rises at an increasing rate, then at a diminishing rate. Marginal Product ($MP$) rises to a peak and begins falling; Average Product ($AP$) reaches maximum ($AP = MP$).
2. **Stage II (Diminishing Returns)**: $TP$ continues rising at a diminishing rate until reaching maximum ($MP = 0$). $MP$ is positive but decreasing. **Rational producers always operate in Stage II**.
3. **Stage III (Negative Returns)**: $TP$ begins declining; $MP$ becomes negative ($MP < 0$). Irrational stage.

## 4. Law of Returns to Scale (Long-Run Production Function)
Examines behavior of output when ALL factor inputs are increased simultaneously in the same proportion:
1. **Increasing Returns to Scale (IRS)**: Output increases by a greater proportion than the increase in inputs (internal and external economies of scale).
2. **Constant Returns to Scale (CRS)**: Output increases in exact proportion to input increase (linear homogeneous).
3. **Decreasing Returns to Scale (DRS)**: Output increases by a smaller proportion than input increase (diseconomies of scale).

## 5. Cobb-Douglas Production Function
Empirical study of US manufacturing by Charles Cobb and Paul Douglas:
$$Q = A L^\\alpha K^\\beta$$
- Typically, $\\alpha + \\beta = 1$ (where $\\alpha = 0.75, \\beta = 0.25$), displaying Constant Returns to Scale.

## 6. Isoquants and Isocosts
- **Isoquant (Equal Product Curve)**: Shows various combinations of two inputs (Labour and Capital) that produce the exact same level of output.
- **Marginal Rate of Technical Substitution (MRTS)**: $MRTS_{LK} = -\\frac{\\Delta K}{\\Delta L} = \\frac{MP_L}{MP_K}$.
- **Producer Equilibrium**: Point of tangency between Isocost line and the highest attainable Isoquant ($MRTS_{LK} = \\frac{w}{r}$).`,
    contentTa: `# பாடம் 3: உற்பத்திப் பகுப்பாய்வு (Production Analysis)

## 1. உற்பத்தி காரணிகள்
பயன்பாடுகளை உருவாக்குவதே உற்பத்தி ஆகும்.
நான்கு காரணிகள்:
1. **நிலம்**: இயற்கையின் இலவசக் கொடை (நிலையான அளிப்பு, அழிக்க முடியாதது).
2. **உழைப்பு**: ஊதியத்திற்காக மனிதன் செய்யும் உடல் மற்றும் மன உழைப்பு (சேமிக்க முடியாதது).
3. **மூலதனம்**: மேலும் உற்பத்தியை பெருக்க மனிதனால் உருவாக்கப்பட்ட உற்பத்தி சாதனங்கள்.
4. **தொழில் முனைவோர் / ஒருங்கிணைப்பாளர்**: உற்பத்திக் காரணிகளை ஒருங்கிணைத்து, இடர்களை ஏற்று செயல்படுபவர்.

## 2. மாறும் விகித விளைவு விதி (குறுகிய கால உற்பத்திச் சார்பு)
நிலையான காரணிகளுடன் (நிலம்) மாறும் காரணிகளை (உழைப்பு) தொடர்ந்து சேர்க்கும்போது உற்பத்தி மூன்று நிலைகளைக் கடக்கிறது:
1. **முதல் நிலை (வளர்ந்து செல் விளைவு நிலை)**: மொத்த உற்பத்தி (TP) வேகமாக உயர்கிறது; இறுதிநிலை உற்பத்தி (MP) உச்சத்தை அடைகிறது.
2. **இரண்டாம் நிலை (குறைந்து செல் விளைவு நிலை)**: மொத்த உற்பத்தி குறைவான வேகத்தில் உயர்ந்து உச்சத்தை அடைகிறது ($MP = 0$). **அறிவார்ந்த உற்பத்தியாளர் இரண்டாம் நிலையிலேயே செயல்படுவார்**.
3. **மூன்றாம் நிலை (எதிர்மறை விளைவு நிலை)**: மொத்த உற்பத்தி குறையத் தொடங்குகிறது; இறுதிநிலை உற்பத்தி எதிர்மறையாக மாறுகிறது ($MP < 0$).

## 3. அளவு விளைவு விதி (நீண்ட கால உற்பத்திச் சார்பு)
அனைத்து காரணிகளையும் ஒரே விகிதத்தில் அதிகரிக்கும் போது உற்பத்தியில் ஏற்படும் மாற்றங்கள்:
1. வளர்ந்து செல் அளவு விளைவு (IRS)
2. மாறா அளவு விளைவு (CRS)
3. குறைந்து செல் அளவு விளைவு (DRS)

## 4. சம உற்பத்தி வளைகோடு (Isoquant)
இரு உற்பத்தி காரணிகளின் (உழைப்பு மற்றும் மூலதனம்) பல்வேறு சேர்க்கைகளில் ஒரே அளவிலான உற்பத்தியைத் தரும் புள்ளிகளின் வரைபடத் தொகுப்பாகும்.`,
    authorContext: 'Classical production theory, Cobb-Douglas function, and Neo-classical factor substitutability.',
    keyFormulas: [
      'Total Product (TP) = Sum of Marginal Products',
      'Average Product (AP) = TP / L',
      'Marginal Product (MP) = d(TP) / dL = TP_n - TP_{n-1}',
      'Cobb-Douglas: Q = A * L^a * K^b (CRS when a + b = 1)',
      'Producer Equilibrium: MRTS_{LK} = w / r'
    ],
    workedExamples: [
      {
        question: 'If Total Product with 3 labourers is 30 units and with 4 labourers is 42 units, what is Marginal Product of the 4th labourer?',
        solution: 'MP_4 = TP_4 - TP_3 = 42 - 30 = 12 units.'
      }
    ]
  },
  c11_eco_ch4: {
    id: 'note_c11_eco_ch4',
    chapterId: 'c11_eco_ch4',
    titleEn: 'Chapter 4 Revision Notes: Cost and Revenue Analysis',
    titleTa: 'பாடம் 4 பாடக் குறிப்புகள்: செலவு மற்றும் வருவாய் பகுப்பாய்வு',
    contentEn: `# Chapter 4: Cost and Revenue Analysis

## 1. Classification of Economic Costs
- **Money Cost / Explicit Cost**: Actual out-of-pocket cash payments made to outside suppliers for factors of production (wages, raw materials, rent).
- **Implicit Cost**: Imputed costs of self-owned and self-employed resources (salary of entrepreneur, interest on own capital).
- **Economic Cost**: Explicit Cost + Implicit Cost + Normal Profit.
- **Opportunity Cost (Alternative Cost)**: The value of the next best alternative forgone when a choice is made.
- **Sunk Cost**: Past expenditure that cannot be recovered and should not influence future decisions.

## 2. Short-Run Cost Curves
- **Total Fixed Cost (TFC)**: Costs that do not change with output level (factory rent, permanent staff salaries, depreciation). Horizontal straight line.
- **Total Variable Cost (TVC)**: Costs that vary directly with output volume (raw materials, wages of temporary labor, fuel). Inverse S-shaped.
- **Total Cost (TC)**: $TC = TFC + TVC$.
- **Average Fixed Cost (AFC)**: $AFC = TFC / Q$. Rectangular hyperbola; approaches axes asymptotically but never touches them.
- **Average Variable Cost (AVC)**: $AVC = TVC / Q$. U-shaped due to the Law of Variable Proportions.
- **Average Total Cost (ATC / AC)**: $AC = TC / Q = AFC + AVC$. U-shaped.
- **Marginal Cost (MC)**: Addition to total cost by producing one extra unit:
  $$MC = \\frac{\\Delta TC}{\\Delta Q} = \\frac{\\Delta TVC}{\\Delta Q}$$
  - The MC curve cuts both AVC and AC curves at their minimum points from below!

## 3. Long-Run Cost Curves
- In the long run, all costs are variable (no fixed costs).
- **Long-Run Average Cost (LAC) Curve**: Formed by the tangency of numerous short-run AC curves.
  - Also called the **Envelope Curve** or **Planning Curve**.
  - Flat U-shaped due to internal/external economies and diseconomies of scale.

## 4. Revenue Concepts
- **Total Revenue (TR)**: Total proceeds from selling a quantity of output: $TR = P \\times Q$.
- **Average Revenue (AR)**: Revenue earned per unit sold: $AR = TR / Q = (P \\times Q) / Q = P$. Thus, **AR is always equal to Price (Demand Curve)**.
- **Marginal Revenue (MR)**: Additional revenue generated by selling an additional unit:
  $$MR = \\frac{\\Delta TR}{\\Delta Q} = TR_n - TR_{n-1}$$
- **Under Perfect Competition**: Price is constant, so $P = AR = MR$ (horizontal straight line).
- **Under Imperfect Competition (Monopoly/Monopolistic)**: To sell more, price must be lowered, so both AR and MR slope downwards; MR falls twice as fast as AR.
- Relationship with elasticity: $MR = AR \\left(1 - \\frac{1}{e_p}\\right)$.`,
    contentTa: `# பாடம் 4: செலவு மற்றும் வருவாய் பகுப்பாய்வு

## 1. செலவு வகைகள்
- **வெளியுறு செலவுகள் (Explicit Costs)**: பிறருக்கு பணமாக செலுத்தப்படும் உண்மையான செலவுகள் (கூலி, மூலப்பொருள், வாடகை).
- **உள்ளுறு செலவுகள் (Implicit Costs)**: உரிமையாளரின் சொந்த உழைப்பு மற்றும் மூலதனத்திற்கான உத்தேச செலவுகள்.
- **பொருளியல் செலவு**: வெளியுறு செலவுகள் + உள்ளுறு செலவுகள் + சாதாரண இலாபம்.
- **வாய்ப்புச் செலவு (Opportunity Cost)**: ஒரு பண்டத்தைத் தேர்ந்தெடுக்கும் போது விட்டுக்கொடுக்கப்பட்ட அடுத்த சிறந்த மாற்றுப் பண்டத்தின் மதிப்பு.

## 2. குறுகிய கால செலவுக் கோடுகள்
- **மாறாச் செலவு (TFC)**: உற்பத்தி அளவோடு மாறாத செலவு (கட்டிட வாடகை).
- **மாறும் செலவு (TVC)**: உற்பத்திக்கு ஏற்ப மாறும் செலவு (கூலி, மூலப்பொருட்கள்).
- **மொத்தச் செலவு (TC)**: $TC = TFC + TVC$.
- **சராசரி செலவு (AC)**: ஒரு அலகிற்கான மொத்தச் செலவு ($AC = TC / Q$). U-வடிவம் கொண்டது.
- **இறுதிநிலைச் செலவு (MC)**: ஓர் கூடுதல் அலகை உற்பத்தி செய்ய ஏற்படும் கூடுதல் செலவு ($MC = \\Delta TC / \\Delta Q$).
  - MC கோடானது AC மற்றும் AVC கோடுகளின் மிகக் குறைந்த புள்ளிகளை கீழிருந்து வெட்டிச் செல்லும்!

## 3. வருவாய் கோட்பாடுகள்
- **மொத்த வருவாய் (TR)**: பண்டங்களை விற்றதால் கிடைத்த மொத்தத் தொகை ($TR = P \\times Q$).
- **சராசரி வருவாய் (AR)**: ஓர் அலகிற்கான வருவாய் ($AR = TR / Q = \\text{விலை } P$).
- **இறுதிநிலை வருவாய் (MR)**: ஓர் கூடுதல் அலகை விற்பதால் மொத்த வருவாயில் ஏற்படும் மாற்றம்.
- **நிறைவுப் போட்டியில்**: விலை நிலையானது என்பதால் $P = AR = MR$ (கிடைமட்டக் கோடு).
- **முற்றுரிமையில்**: கூடுதல் அலகுகளை விற்க விலையைக் குறைக்க வேண்டும் என்பதால் AR மற்றும் MR இரண்டும் கீழ்நோக்கிச் செல்லும்.`,
    authorContext: 'Cost behaviors, Marshallian revenue schedules, and envelope curve dynamics.',
    keyFormulas: [
      'TC = TFC + TVC',
      'AC = AFC + AVC = TC / Q',
      'MC = d(TC)/dQ = d(TVC)/dQ',
      'TR = P * Q, AR = TR / Q = P',
      'MR = d(TR)/dQ = AR * (1 - 1/e)'
    ],
    workedExamples: [
      {
        question: 'If Total Cost of 10 units is Rs. 1000 and for 11 units is Rs. 1080, what is the Marginal Cost of the 11th unit?',
        solution: 'MC_11 = TC_11 - TC_10 = 1080 - 1000 = Rs. 80.'
      }
    ]
  },
  c11_eco_ch5: {
    id: 'note_c11_eco_ch5',
    chapterId: 'c11_eco_ch5',
    titleEn: 'Chapter 5 Revision Notes: Market Structure and Pricing',
    titleTa: 'பாடம் 5 பாடக் குறிப்புகள்: அங்காடி அமைப்பும் விலை நிர்ணயமும்',
    contentEn: `# Chapter 5: Market Structure and Pricing

## 1. Classification of Market Structures
Markets are structured based on the number of buyers/sellers, product homogeneity, freedom of entry/exit, and degree of price control.

## 2. Perfect Competition
- **Features**:
  1. Large number of buyers and sellers.
  2. Homogeneous product (perfect substitutes).
  3. Free entry and exit of firms.
  4. Perfect knowledge of market conditions.
  5. Absence of transport costs.
  6. Perfect mobility of factors of production.
- **Price Determination**: The firm is a **Price Taker**, not a price maker. Market price is established at the intersection of Market Demand and Market Supply.
- **Equilibrium Condition**: $MR = MC$ and MC cuts MR from below.
- Long-run equilibrium: $P = AR = MR = LMC = LAC$ (Firms earn only **Normal Profits**).

## 3. Monopoly
- Single seller selling a product with **no close substitutes** and strong entry barriers.
- The monopolist is a **Price Maker**; downward-sloping demand curve ($AR > MR$).
- **Price Discrimination**: Charging different prices to different consumers for the exact same commodity.
  - First Degree: Perfect discrimination (extracting entire consumer surplus).
  - Second Degree: Quantity block pricing (electricity tariffs).
  - Third Degree: Market segmentation (e.g., student discounts, railway fares).

## 4. Monopolistic Competition (E.H. Chamberlin)
- Real-world market blending features of both competition and monopoly.
- Key feature: **Product Differentiation** (branding, packaging, trademarks).
- High **Selling Costs** (advertising and promotional campaigns).
- In the long run, firms earn normal profits, but operate with **Excess Capacity** (output below minimum LAC).

## 5. Oligopoly
- Market dominated by a **few large sellers** producing homogeneous or differentiated goods.
- Key feature: **Mutual Interdependence** in price-output policies.
- **Kinked Demand Curve Model (Paul Sweezy)**: Explains price rigidity under oligopoly.
  - Above kink: Elastic (rivals do not match price increase).
  - Below kink: Inelastic (rivals immediately match price cut).`,
    contentTa: `# பாடம் 5: அங்காடி அமைப்பும் விலை நிர்ணயமும்

## 1. அங்காடி அமைப்பின் வகைகள்
அங்காடிகள் விற்பனையாளர்கள் எண்ணிக்கை மற்றும் பண்டத்தின் தன்மையைக் கொண்டு வகைப்படுத்தப்படுகின்றன.

## 2. நிறைவுப் போட்டி (Perfect Competition)
- **பண்புகள்**:
  1. எண்ணற்ற வாங்குவோர் மற்றும் விற்போர்.
  2. ஒரே மாதிரியான பண்டங்கள் (பதிலீட்டுப் பண்டங்கள்).
  3. தொழில் நிறுவனங்கள் தடையின்றி நுழையவும் வெளியேறவும் சுதந்திரம்.
  4. அங்காடி நிலவரம் பற்றிய முழுமையான அறிவு.
- **விலை நிர்ணயம்**: நிறுவனம் விலையை நிர்ணயிப்பவர் அல்ல, விலையை ஏற்பவர் (**Price Taker**). தேவையும் அளிப்பும் சமமாகுமிடத்தில் சமநிலை விலை உருவாகிறது.
- நீண்ட காலத்தில் நிறுவனங்கள் **சாதாரண இலாபம்** மட்டுமே ஈட்டுகின்றன ($P = AR = MR = AC = MC$).

## 3. முற்றுரிமை (Monopoly)
- ஒரே ஒரு விற்பனையாளர் மட்டும் இருந்து, நெருங்கிய பதிலீட்டுப் பண்டங்கள் இல்லாத அங்காடி முற்றுரிமை எனப்படும்.
- முற்றுரிமையாளர் விலையைத் தீர்மானிப்பவர் (**Price Maker**).
- **விலைப்பாகுபாடு**: ஒரே பண்டத்திற்கு வெவ்வேறு நுகர்வோரிடம் வெவ்வேறு விலையை வசூலிக்கும் முறை.

## 4. முற்றுரிமைப் போட்டி (Monopolistic Competition - சேம்பர்லின்)
- பல விற்பனையாளர்கள் வேறுபடுத்தப்பட்ட பண்டங்களை (Product Differentiation) விற்கும் அங்காடி.
- விற்பனைச் செலவுகள் (விளம்பரம்) முக்கிய பங்கு வகிக்கின்றன. நிறுவனங்கள் நீண்ட காலத்தில் மிகை உற்பத்தித் திறனைக் (Excess Capacity) கொண்டிருக்கின்றன.

## 5. சில்லோர் முற்றுரிமை (Oligopoly)
- ஒரு சில பெரிய நிறுவனங்கள் மட்டுமே ஆதிக்கம் செலுத்தும் அங்காடி அமைப்பு.
- நிறுவனங்களுக்கிடையே பரஸ்பர சார்புத்தன்மை மற்றும் பால் ஸ்வீசியின் (Paul Sweezy) நெளிந்த தேவைக் கோடு (விலை விறைப்புத்தன்மை) காணப்படும்.`,
    authorContext: 'Market structure classifications by Joan Robinson, E.H. Chamberlin, and Paul Sweezy.',
    keyFormulas: [
      'Firm Profit Maximization: MR = MC and MC cuts MR from below',
      'Perfect Competition: P = AR = MR = MC',
      'Monopoly Markup: (P - MC) / P = 1 / e_p (Lerner Index of Monopoly Power)',
      'Price Discrimination Condition: MR_1 = MR_2 = MC'
    ],
    workedExamples: [
      {
        question: 'Under what market structure does a firm face a perfectly horizontal elastic demand curve?',
        solution: 'Under Perfect Competition, where the firm is a price taker and P = AR = MR.'
      }
    ]
  },
  c11_eco_ch6: {
    id: 'note_c11_eco_ch6',
    chapterId: 'c11_eco_ch6',
    titleEn: 'Chapter 6 Revision Notes: Distribution Theory',
    titleTa: 'பாடம் 6 பாடக் குறிப்புகள்: பகிர்வு கோட்பாடு',
    contentEn: `# Chapter 6: Distribution Theory

## 1. What is Distribution?
Distribution concerns the division of total national output among the four factors of production: Rent to Land, Wages to Labour, Interest to Capital, and Profit to Organization.
- **Personal Distribution**: Distribution of national income among individuals/households.
- **Functional Distribution**: Distribution of income among factors of production based on their productive contribution.

## 2. Marginal Productivity Theory of Distribution
- Developed by J.B. Clark, Wicksteed, and Walras.
- States that under perfect competition, each factor of production receives a price equal to the value of its marginal product:
$$\\text{Factor Price} = VMP = P \\times MP$$
- If factor price $< VMP$, employer hires more units; if factor price $> VMP$, employer reduces units until factor price equals $VMP$.

## 3. Theories of Rent
- **Ricardian Theory of Rent (David Ricardo - 1817)**:
  - "Rent is that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil."
  - Arises due to differences in soil fertility and differential location.
  - Rent is a differential surplus over the marginal (no-rent) land.
- **Quasi-Rent (Alfred Marshall)**: Surplus earned by man-made capital equipment (machines, ships) in the short run due to temporary inelasticity of supply. Diminishes in the long run:
$$\\text{Quasi-Rent} = \\text{Total Revenue} - \\text{Total Variable Cost}$$

## 4. Theories of Wages
- **Subsistence Theory of Wages (Physiocrats & David Ricardo)**: Wages tend to remain at the bare subsistence level needed to keep workers alive and raise children.
- **Wage Fund Theory (J.S. Mill)**: Wages depend on the fixed wage fund set aside by capitalists divided by the number of laborers ($W = \\text{Wage Fund} / \\text{Number of Workers}$).
- **Marginal Productivity Theory of Wages**: Wage equals the marginal revenue product of labour ($W = MRP_L$).

## 5. Theories of Interest
- **Keynesian Liquidity Preference Theory (J.M. Keynes)**:
  - Interest is a purely monetary phenomenon—a reward for parting with liquidity for a specified period.
  - Motives for holding cash (Liquidity Preference):
    1. **Transaction Motive**: Daily purchases ($M_1 = f(Y)$).
    2. **Precautionary Motive**: Unforeseen contingencies ($M_1 = f(Y)$).
    3. **Speculative Motive**: Earning profits from bond price movements ($M_2 = f(r)$).
  - Rate of interest is determined where total money demand ($L = M_1 + M_2$) equals money supply ($M$).

## 6. Theories of Profit
- Profit is the residual reward to the entrepreneur.
- **Dynamic Theory (J.B. Clark)**: Profit arises in a dynamic economy experiencing growth, population changes, and tech advancements.
- **Risk-Bearing Theory (F.B. Hawley)**: Profit is the reward for bearing risks.
- **Uncertainty-Bearing Theory (Frank H. Knight)**: Profit rewards bearing non-insurable uncertainties (market shifts, policy changes).
- **Innovation Theory (Joseph Schumpeter)**: Profit is the dynamic reward for introducing innovations (new products, new markets, new methods).`,
    contentTa: `# பாடம் 6: பகிர்வு கோட்பாடு (Distribution Theory)

## 1. பகிர்வு என்றால் என்ன?
தேசிய உற்பத்தியில் உருவான வருமானத்தை நான்கு உற்பத்தி காரணிகளுக்கும் (நிலத்திற்கு வாரம், உழைப்பிற்கு கூலி, மூலதனத்திற்கு வட்டி, அமைப்பிற்கு இலாபம்) பிரித்தளிப்பதே பகிர்வு ஆகும்.

## 2. இறுதிநிலை உற்பத்தித்திறன் பகிர்வுக் கோட்பாடு
- கிளார்க் மற்றும் விக்ஸ்டீட் ஆகியோரால் உருவாக்கப்பட்டது.
- நிறைவுப் போட்டியில் ஒவ்வொரு உற்பத்திக் காரணிக்கும் அதன் இறுதிநிலை உற்பத்தி மதிப்பிற்குச் (VMP) சமமாக ஊதியம் வழங்கப்படும்: காரணியின் விலை = $VMP$.

## 3. வாரக் கோட்பாடுகள் (Rent)
- **ரிக்கார்டோவின் வாரக் கோட்பாடு (1817)**:
  - "நிலத்தின் இயற்கையான மற்றும் அழிக்க முடியாத சக்திகளைப் பயன்படுத்தியதற்காக நில உரிமையாளருக்கு வழங்கப்படும் தொகையே வாரம் ஆகும்."
  - நிலத்தின் வள வேறுபாட்டால் வாரம் தோன்றுகிறது; விளிம்பு நிலம் (வாரமில்லா நிலம்) உடன் ஒப்பிட்டு வாரம் கணக்கிடப்படுகிறது.
- **போலி வாரம் (Quasi-Rent - மார்ஷல்)**: மனிதனால் உருவாக்கப்பட்ட இயந்திரங்கள் போன்றவற்றிற்கு குறுகிய காலத்தில் கிடைக்கும் கூடுதல் வருவாய்:
$$\\text{போலி வாரம்} = \\text{மொத்த வருவாய்} - \\text{மொத்த மாறும் செலவு}$$

## 4. வட்டி மற்றும் இலாபக் கோட்பாடுகள்
- **கீன்ஸின் நீர்மை விருப்பக் கோட்பாடு**: ரொக்கப் பணத்தை விட்டுக்கொடுப்பதற்காக வழங்கப்படும் வெகுமதியே வட்டி ஆகும் (பரிவர்த்தனை, முன்னெச்சரிக்கை மற்றும் ஊக நோக்கங்கள்).
- **இலாபக் கோட்பாடுகள்**:
  - **புதுமை புனைதல் கோட்பாடு (சும்பீட்டர்)**: புதிய நுட்பங்களை அறிமுகப்படுத்துவதற்கான வெகுமதியே இலாபம்.
  - **நிச்சயமற்ற தன்மையைத் தாங்குதல் கோட்பாடு (நைட்)**: காப்பீடு செய்ய முடியாத நிச்சயமற்ற தன்மைகளைத் தாங்குவதற்கான வெகுமதியே இலாபம்.`,
    authorContext: 'Distribution classical and neoclassical theories (Ricardo, Clark, Keynes, Schumpeter, Knight).',
    keyFormulas: [
      'Marginal Productivity: Wage = VMP_L = P * MP_L',
      'Quasi-Rent = Total Revenue - Total Variable Cost',
      'Keynesian Money Demand: L = L_1(Y) + L_2(r)'
    ],
    workedExamples: [
      {
        question: 'Who propounded the Innovation Theory of Profit?',
        solution: 'Joseph A. Schumpeter propounded the Innovation Theory of Profit.'
      }
    ]
  }
};
'''

with open('src/data/class11EconomicsPart1.ts', 'w', encoding='utf-8') as f:
    f.write(content)

print("class11EconomicsPart1.ts initialized with Chapters and Notes!")
