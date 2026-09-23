import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

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
- **Total Utility (TU)**: Total satisfaction derived from consuming a given quantity of goods: $TU = \sum MU$.
- **Marginal Utility (MU)**: Addition made to total utility by consuming one additional unit of a commodity: $MU_n = TU_n - TU_{n-1} = \frac{\Delta TU}{\Delta Q}$.

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
$$\frac{MU_x}{P_x} = \frac{MU_y}{P_y} = \dots = MU_m$$

## 4. Consumer's Surplus (Alfred Marshall)
- Defined as the difference between the maximum price a consumer is willing to pay and the actual price paid:
$$\text{Consumer's Surplus} = \text{Potential Price} - \text{Actual Price} = \sum MU - (P \times Q)$$

## 5. Indifference Curve Analysis (Ordinal Approach)
- An **Indifference Curve (IC)** shows various combinations of two goods that yield the exact same level of total satisfaction to a consumer.
- **Marginal Rate of Substitution (MRS)**: Rate at which a consumer is willing to sacrifice good Y to obtain one extra unit of good X while staying equally satisfied: $MRS_{xy} = -\frac{\Delta Y}{\Delta X}$.
- **Properties of Indifference Curves**:
  1. Downward sloping from left to right (negative slope).
  2. Convex to the origin due to diminishing $MRS_{xy}$.
  3. Two indifference curves can never intersect.
  4. Higher indifference curves represent higher levels of satisfaction.
- **Consumer Equilibrium**: Reached at the point where the Budget Line (Price Line) is tangent to the highest attainable Indifference Curve ($MRS_{xy} = \frac{P_x}{P_y}$).`,
    contentTa: `# பாடம் 2: நுகர்வுப் பகுப்பாய்வு (Consumption Analysis)

## 1. பயன்பாடு (Utility) கோட்பாடுகள்
பயன்பாடு என்பது மனித விருப்பத்தை நிறைவு செய்யும் ஒரு பண்டம் அல்லது பணியின் ஆற்றலாகும்.
- **எண்ணளவைப் பயன்பாடு (மார்ஷல்)**: பயன்பாட்டை 'யூட்டில்ஸ்' (utils) என்ற அலகுகளால் அளவிட முடியும்.
- **வரிசைப் பயன்பாடு (ஹிக்ஸ் மற்றும் ஆலன்)**: பயன்பாட்டை அளவிட முடியாது; விருப்பத் தேர்வுகளின் அடிப்படையில் தரவரிசைப்படுத்த மட்டுமே முடியும்.
- **மொத்தப் பயன்பாடு (TU)**: அனைத்து அலகுகளையும் நுகர்வதால் கிடைக்கும் பயன்பாடுகளின் கூடுதல்.
- **இறுதிநிலைப் பயன்பாடு (MU)**: ஓர் கூடுதல் அலகை நுகர்வதால் மொத்தப் பயன்பாட்டில் ஏற்படும் மாற்றம் ($MU = \Delta TU / \Delta Q$).

## 2. குறைந்த செல் இறுதிநிலைப் பயன்பாட்டு விதி (காசனின் முதல் விதி)
- காசன் (H.H. Gossen) என்பவரால் உருவாக்கப்பட்டு மார்ஷலால் மேம்படுத்தப்பட்டது.
- "ஒருவரிடம் உள்ள ஒரு பண்டத்தின் இருப்பு அதிகரிக்க அதிகரிக்க, அவனுக்கு அதிலிருந்து கிடைக்கும் இறுதிநிலைப் பயன்பாடு குறைந்து கொண்டே செல்கிறது."
  - $MU > 0$ எனில், மொத்தப் பயன்பாடு (TU) கூடும்.
  - $MU = 0$ எனில், மொத்தப் பயன்பாடு உச்சத்தை அடைகிறது (நிறைவுப் புள்ளி).
  - $MU < 0$ எனில், மொத்தப் பயன்பாடு குறையத் தொடங்குகிறது.

## 3. நுகர்வோர் எச்சம் (Consumer's Surplus)
- ஒரு பண்டத்திற்கு நுகர்வோர் கொடுக்க நினைக்கும் விலைக்கும் (சாத்தியமான விலை) உண்மையாகக் கொடுக்கும் விலைக்கும் இடையே உள்ள வேறுபாடே நுகர்வோர் எச்சம் ஆகும்:
$$\text{நுகர்வோர் எச்சம்} = \text{கொடுக்க நினைத்த விலை} - \text{உண்மையான விலை}$$

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
$$Q = f(L, K, R, S, \dots)$$
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
$$Q = A L^\alpha K^\beta$$
- Typically, $\alpha + \beta = 1$ (where $\alpha = 0.75, \beta = 0.25$), displaying Constant Returns to Scale.

## 6. Isoquants and Isocosts
- **Isoquant (Equal Product Curve)**: Shows various combinations of two inputs (Labour and Capital) that produce the exact same level of output.
- **Marginal Rate of Technical Substitution (MRTS)**: $MRTS_{LK} = -\frac{\Delta K}{\Delta L} = \frac{MP_L}{MP_K}$.
- **Producer Equilibrium**: Point of tangency between Isocost line and the highest attainable Isoquant ($MRTS_{LK} = \frac{w}{r}$).`,
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
  $$MC = \frac{\Delta TC}{\Delta Q} = \frac{\Delta TVC}{\Delta Q}$$
  - The MC curve cuts both AVC and AC curves at their minimum points from below!

## 3. Long-Run Cost Curves
- In the long run, all costs are variable (no fixed costs).
- **Long-Run Average Cost (LAC) Curve**: Formed by the tangency of numerous short-run AC curves.
  - Also called the **Envelope Curve** or **Planning Curve**.
  - Flat U-shaped due to internal/external economies and diseconomies of scale.

## 4. Revenue Concepts
- **Total Revenue (TR)**: Total proceeds from selling a quantity of output: $TR = P \times Q$.
- **Average Revenue (AR)**: Revenue earned per unit sold: $AR = TR / Q = (P \times Q) / Q = P$. Thus, **AR is always equal to Price (Demand Curve)**.
- **Marginal Revenue (MR)**: Additional revenue generated by selling an additional unit:
  $$MR = \frac{\Delta TR}{\Delta Q} = TR_n - TR_{n-1}$$
- **Under Perfect Competition**: Price is constant, so $P = AR = MR$ (horizontal straight line).
- **Under Imperfect Competition (Monopoly/Monopolistic)**: To sell more, price must be lowered, so both AR and MR slope downwards; MR falls twice as fast as AR.
- Relationship with elasticity: $MR = AR \left(1 - \frac{1}{e_p}\right)$.`,
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
- **இறுதிநிலைச் செலவு (MC)**: ஓர் கூடுதல் அலகை உற்பத்தி செய்ய ஏற்படும் கூடுதல் செலவு ($MC = \Delta TC / \Delta Q$).
  - MC கோடானது AC மற்றும் AVC கோடுகளின் மிகக் குறைந்த புள்ளிகளை கீழிருந்து வெட்டிச் செல்லும்!

## 3. வருவாய் கோட்பாடுகள்
- **மொத்த வருவாய் (TR)**: பண்டங்களை விற்றதால் கிடைத்த மொத்தத் தொகை ($TR = P \times Q$).
- **சராசரி வருவாய் (AR)**: ஓர் அலகிற்கான வருவாய் ($AR = TR / Q = \text{விலை } P$).
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
$$\text{Factor Price} = VMP = P \times MP$$
- If factor price $< VMP$, employer hires more units; if factor price $> VMP$, employer reduces units until factor price equals $VMP$.

## 3. Theories of Rent
- **Ricardian Theory of Rent (David Ricardo - 1817)**:
  - "Rent is that portion of the produce of the earth which is paid to the landlord for the use of the original and indestructible powers of the soil."
  - Arises due to differences in soil fertility and differential location.
  - Rent is a differential surplus over the marginal (no-rent) land.
- **Quasi-Rent (Alfred Marshall)**: Surplus earned by man-made capital equipment (machines, ships) in the short run due to temporary inelasticity of supply. Diminishes in the long run:
$$\text{Quasi-Rent} = \text{Total Revenue} - \text{Total Variable Cost}$$

## 4. Theories of Wages
- **Subsistence Theory of Wages (Physiocrats & David Ricardo)**: Wages tend to remain at the bare subsistence level needed to keep workers alive and raise children.
- **Wage Fund Theory (J.S. Mill)**: Wages depend on the fixed wage fund set aside by capitalists divided by the number of laborers ($W = \text{Wage Fund} / \text{Number of Workers}$).
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
$$\text{போலி வாரம்} = \text{மொத்த வருவாய்} - \text{மொத்த மாறும் செலவு}$$

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
