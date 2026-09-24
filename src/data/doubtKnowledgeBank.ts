import { Language, ClassLevel } from '../types';
import { ALL_CHAPTERS, CHAPTER_NOTES, SUBJECT_METADATA } from '../data/eduvoiceSyllabus';

export interface DoubtKnowledgeItem {
  id: string;
  classLevel: ClassLevel;
  subjectId: string;
  subjectNameEn: string;
  subjectNameTa: string;
  chapterTitleEn: string;
  chapterTitleTa: string;
  topics: string[];
  keywords: string[];
  sampleQuestions: {
    en: string;
    ta: string;
  }[];
  explanationEn: string;
  explanationTa: string;
  keyFormulas?: string[];
  examTipEn?: string;
  examTipTa?: string;
}

/**
 * Curated Instant Doubt Knowledge Bank for Classes 9 to 12
 * Covers foundational & high-yield doubts across Tamil, English, Maths, Science/Physics/Chemistry/Biology,
 * Computer Science, Commerce, Accountancy, Economics, History, and Business Maths.
 */
export const DOUBT_KNOWLEDGE_BANK: DoubtKnowledgeItem[] = [
  // ===================== CLASS 9 =====================
  {
    id: 'c9_doubt_set_lang',
    classLevel: 9,
    subjectId: 'c9_maths',
    subjectNameEn: 'Mathematics',
    subjectNameTa: 'கணிதம்',
    chapterTitleEn: 'Set Language',
    chapterTitleTa: 'கணமொழி',
    topics: ['Types of Sets', "De Morgan's Laws", 'Venn Diagrams', 'Cartesian Product'],
    keywords: ['set', 'union', 'intersection', 'de morgan', 'subset', 'வென் படம்', 'கணங்களின் சேர்ப்பு', 'கணங்களின் வெட்டு', 'டி மார்கன்'],
    sampleQuestions: [
      { en: "State De Morgan's laws of set complementation", ta: 'கண நிரப்பிகளுக்கான டி மார்கன் விதிகள் யாவை?' },
      { en: 'What is the difference between null set and singleton set?', ta: 'வெற்றுக்கணம் மற்றும் ஓருறுப்புக் கணம் வேறுபாடு என்ன?' }
    ],
    explanationEn: "In Set Language, De Morgan's laws for set complementation state: 1) $(A \\cup B)' = A' \\cap B'$, 2) $(A \\cap B)' = A' \\cup B'$. For set difference: $A - (B \\cup C) = (A - B) \\cap (A - C)$. Venn diagrams visually depict these relationships with intersecting circular regions.",
    explanationTa: 'கணமொழியில் டி மார்கன் விதிகள்: 1) $(A \\cup B)\' = A\' \\cap B\'$, 2) $(A \\cap B)\' = A\' \\cup B\'$. கண வித்தியாசத்திற்கான விதி: $A - (B \\cup C) = (A - B) \\cap (A - C)$. வென் படங்கள் மூலம் இவ்விதிகளின் சமநிலையை எளிதாக மெய்ப்பிக்கலாம்.',
    keyFormulas: ["(A \\cup B)' = A' \\cap B'", "(A \\cap B)' = A' \\cup B'", "n(A \\cup B) = n(A) + n(B) - n(A \\cap B)"],
    examTipEn: 'Proof of De Morgan’s laws using Venn diagrams is a guaranteed 5-mark question in Class 9 Maths board term exams!',
    examTipTa: 'வென் படம் வரைந்து டி மார்கன் விதிகளை சரிபார்த்தல் 9-ஆம் வகுப்பு கணித தேர்வில் உறுதியான 5 மதிப்பெண் வினா!'
  },
  {
    id: 'c9_doubt_motion',
    classLevel: 9,
    subjectId: 'c9_science',
    subjectNameEn: 'Science',
    subjectNameTa: 'அறிவியல்',
    chapterTitleEn: 'Motion',
    chapterTitleTa: 'இயக்கம்',
    topics: ['Speed vs Velocity', 'Equations of Motion', 'Uniform Circular Motion', 'Acceleration'],
    keywords: ['motion', 'velocity', 'speed', 'acceleration', 'equations of motion', 'இயக்கம்', 'திசைவேகம்', 'முடுக்கம்', 'இயக்கச் சமன்பாடுகள்'],
    sampleQuestions: [
      { en: 'Derive the three equations of motion graphically', ta: 'இயக்கச் சமன்பாடுகளை வரைபட முறையில் வருவிக்க' },
      { en: 'What is uniform circular motion and why is it accelerated?', ta: 'சீரான வட்ட இயக்கம் என்றால் என்ன? அது ஏன் முடுக்கப்பட்ட இயக்கம்?' }
    ],
    explanationEn: 'Motion is change in position over time. The 3 fundamental equations of uniformly accelerated motion are:\n1) $v = u + at$\n2) $s = ut + \\frac{1}{2}at^2$\n3) $v^2 = u^2 + 2as$\nIn circular motion with constant speed, the continuous change in direction produces centripetal acceleration ($a = \\frac{v^2}{r}$) directed towards the center.',
    explanationTa: 'சீரான முடுக்கமடைந்த நேர்கோட்டு இயக்கச் சமன்பாடுகள்:\n1) $v = u + at$\n2) $s = ut + \\frac{1}{2}at^2$\n3) $v^2 = u^2 + 2as$\nவட்டப்பாதையில் மாறாத வேகத்தில் சுழலும் பொருளின் திசை தொடர்ந்து மாறுவதால் அது மையநோக்கு முடுக்கம் ($a = \\frac{v^2}{r}$) கொண்ட முடுக்கப்பட்ட இயக்கம் ஆகும்.',
    keyFormulas: ['v = u + at', 's = ut + \\frac{1}{2}at^2', 'v^2 = u^2 + 2as', 'a = \\frac{v^2}{r}'],
    examTipEn: 'Graphical derivation of $s = ut + \\frac{1}{2}at^2$ from velocity-time graph is asked repeatedly in 5-mark section.',
    examTipTa: 'திசைவேகம்-காலம் வரைபடத்திலிருந்து $s = ut + \\frac{1}{2}at^2$ சமன்பாட்டை வரைபட முறையில் தருவிப்பது அடிக்கடி கேட்கப்படும் 5 மதிப்பெண் வினா.'
  },
  {
    id: 'c9_doubt_tamil_dravidian',
    classLevel: 9,
    subjectId: 'c9_tamil',
    subjectNameEn: 'Tamil',
    subjectNameTa: 'தமிழ்',
    chapterTitleEn: 'Dravidian Family of Languages',
    chapterTitleTa: 'திராவிட மொழிக்குடும்பம்',
    topics: ['Classification of Dravidian languages', 'Caldwell Comparative Grammar', 'Features of Tamil'],
    keywords: ['திராவிடம்', 'கால்டுவெல்', 'தென் திராவிடம்', 'மொழிகளின் காட்சிசாலை', 'அகத்தியலிங்கம்', 'dravidian'],
    sampleQuestions: [
      { en: 'Classify the Dravidian languages into three branches with examples', ta: 'திராவிட மொழிகளை மூவகையாகப் பகுத்து விளக்குக' },
      { en: 'Why did Dr. Caldwell write the Comparative Grammar?', ta: 'கால்டுவெல் திராவிட மொழிகளின் ஒப்பிலக்கணம் நூலின் முக்கியத்துவம் என்ன?' }
    ],
    explanationEn: 'Dr. Robert Caldwell established in 1856 that Dravidian languages are independent of Sanskrit. They are grouped into: 1) South Dravidian (Tamil, Malayalam, Kannada, Tulu, Toda, Kota), 2) Central Dravidian (Telugu, Gondi, Kolami, Kui), 3) North Dravidian (Kurukh, Malto, Brahui). Tamil retains the highest proportion of proto-Dravidian roots.',
    explanationTa: '1856-ல் கால்டுவெல் எழுதிய "திராவிட மொழிகளின் ஒப்பிலக்கணம்" நூல் திராவிட மொழிகள் வடமொழிச் சார்பற்ற தனித்தியங்கும் குடும்பம் என நிறுவியது. அவை:\n1) தென் திராவிடம் (தமிழ், மலையாளம், கன்னடம், துளு, தோடா, கோத்தா)\n2) நடுத் திராவிடம் (தெலுங்கு, கோண்டி, கோலமி, கூய்)\n3) வட திராவிடம் (குரூக், மால்டோ, பிராகுயி).\nதமிழ் மூலத்திராவிட மொழிக் கூறுகளைப் பெரிதும் பாதுகாத்து வருகிறது.',
    examTipEn: 'Memorize the table of South, Central, and North Dravidian languages—it is tested both in 1-mark and 4-mark questions.',
    examTipTa: 'தென், நடு, வட திராவிட மொழிகள் அட்டவணையை மனனம் செய்க; 1 மதிப்பெண் மற்றும் 4 மதிப்பெண் வினாக்களில் இடம்பெறும்.'
  },

  // ===================== CLASS 10 =====================
  {
    id: 'c10_doubt_laws_of_motion',
    classLevel: 10,
    subjectId: 'c10_science',
    subjectNameEn: 'Science (Physics)',
    subjectNameTa: 'அறிவியல் (இயற்பியல்)',
    chapterTitleEn: 'Laws of Motion',
    chapterTitleTa: 'இயக்க விதிகள்',
    topics: ["Newton's Laws", 'Inertia', 'Conservation of Linear Momentum', 'Impulse', 'Rocket Propulsion'],
    keywords: ['newton', 'f=ma', 'inertia', 'momentum', 'rocket', 'நிலைமம்', 'உந்த அழிவின்மை', 'கணத்தாக்கு', 'நியூட்டன்'],
    sampleQuestions: [
      { en: 'State and prove the Law of Conservation of Linear Momentum', ta: 'நேர்க்கோட்டு உந்த அழிவின்மை விதியைக் கூறி மெய்ப்பிக்க' },
      { en: 'What is Impulse and give two daily life examples?', ta: 'கணத்தாக்கு விசை என்றால் என்ன? அன்றாட வாழ்வின் உதாரணங்கள் தருக' }
    ],
    explanationEn: "Newton's First Law defines Inertia. Second Law gives $F = ma = \\frac{dp}{dt}$. Third Law states every action has an equal and opposite reaction ($F_1 = -F_2$). Law of conservation of momentum: $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$. Impulse $J = F \\times \\Delta t = \\Delta p$ (e.g. cricket fielder pulling hands back to increase $\\Delta t$ and reduce impact force $F$).",
    explanationTa: 'நியூட்டனின் முதல் விதி நிலைமத்தை விளக்குகிறது. இரண்டாம் விதி விசைக்கான சமன்பாட்டை ($F = ma$) தருகிறது. மூன்றாம் விதி வினையும் எதிர்வினையும் சமமாகவும் எதிரெதிராகவும் செயல்படும் என்கிறது. உந்த அழிவின்மை விதி: $m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$. கணத்தாக்கு $J = F \\times \\Delta t = \\Delta p$ (கிரிக்கெட் வீரர் பந்தைப் பிடிக்கும் போது கையை பின்னோக்கி இழுப்பது விசை தாக்கத்தைக் குறைக்கவே).',
    keyFormulas: ['F = ma', 'p = mv', 'J = F \\times \\Delta t = \\Delta p', 'm_1u_1 + m_2u_2 = m_1v_1 + m_2v_2'],
    examTipEn: 'The derivation $m_1u_1 + m_2u_2 = m_1v_1 + m_2v_2$ is the #1 most repeated 7-mark question in Class 10 Science Board exam.',
    examTipTa: 'உந்த அழிவின்மை விதி தருவித்தல் 10-ஆம் வகுப்பு அறிவியல் பொதுத்தேர்வில் அதிகமுறை கேட்கப்பட்ட 7 மதிப்பெண் கட்டாய வினா!'
  },
  {
    id: 'c10_doubt_optics',
    classLevel: 10,
    subjectId: 'c10_science',
    subjectNameEn: 'Science (Physics)',
    subjectNameTa: 'அறிவியல் (இயற்பியல்)',
    chapterTitleEn: 'Optics',
    chapterTitleTa: 'ஒளியியல்',
    topics: ['Refraction', 'Snell’s Law', 'Lens Formula', 'Myopia vs Hypermetropia', 'Scattering of Light'],
    keywords: ['snell', 'lens formula', 'myopia', 'hypermetropia', 'rayleigh scattering', 'ஒளிவிலகல்', 'கிட்டப்பார்வை', 'தூரப்பார்வை', 'லென்ஸ் சமன்பாடு'],
    sampleQuestions: [
      { en: 'Differentiate between Myopia and Hypermetropia with correction lenses', ta: 'கிட்டப்பார்வை மற்றும் தூரப்பார்வை குறைபாடுகளை ஒப்பிட்டு சீர்செய்யும் லென்ஸ்களை விளக்குக' },
      { en: 'State Snell’s Law and Lens Maker’s formula', ta: 'ஸ்நெல் விதி மற்றும் லென்சு உருவாக்குபவர் சமன்பாட்டைக் கூறுக' }
    ],
    explanationEn: "Snell's Law: $\\frac{\\sin i}{\\sin r} = \\frac{\\mu_2}{\\mu_1}$. Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$. Power of Lens $P = \\frac{1}{f(\\text{in m})}$ (Dioptres). Myopia (short-sightedness) is corrected using a concave lens ($f = -x$). Hypermetropia (long-sightedness) is corrected using a convex lens ($f = \\frac{d \\times D}{d - D}$). Rayleigh's scattering: $S \\propto \\frac{1}{\\lambda^4}$, explaining blue sky.",
    explanationTa: 'ஸ்நெல் விதி: $\\frac{\\sin i}{\\sin r} = \\frac{\\mu_2}{\\mu_1}$. லென்ஸ் சமன்பாடு: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$. லென்சின் திறன் $P = \\frac{1}{f}$ (டையாப்டர்). கிட்டப்பார்வை குழி லென்சாலும், தூரப்பார்வை குவி லென்சாலும் சரிசெய்யப்படுகிறது. ராலே ஒளிச்சிதறல் விதி $S \\propto \\frac{1}{\\lambda^4}$ நீல நிற வானத்திற்கு காரணமாகிறது.',
    keyFormulas: ['\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}', 'P = \\frac{1}{f}', 'm = \\frac{v}{u} = \\frac{h\'}{h}', 'S \\propto \\frac{1}{\\lambda^4}'],
    examTipEn: 'Ray diagrams for concave/convex lenses and comparison of Myopia vs Hypermetropia are key 4-mark and 7-mark topics.',
    examTipTa: 'கிட்டப்பார்வை, தூரப்பார்வை குறைபாடு வரைபடம் மற்றும் வேறுபாடுகள் 4 அல்லது 7 மதிப்பெண் வினாவாக வரும்.'
  },
  {
    id: 'c10_doubt_quadratics',
    classLevel: 10,
    subjectId: 'c10_maths',
    subjectNameEn: 'Mathematics',
    subjectNameTa: 'கணிதம்',
    chapterTitleEn: 'Algebra & Quadratic Equations',
    chapterTitleTa: 'இயற்கணிதம் மற்றும் இருபடிச் சமன்பாடுகள்',
    topics: ['Quadratic Formula', 'Nature of Roots', 'Matrices', 'GCD of Polynomials'],
    keywords: ['quadratic formula', 'discriminant', 'nature of roots', 'matrix', 'gcd', 'இருபடி சமன்பாடு', 'மூலங்களின் தன்மை', 'அணிகள்', 'மீ.பொ.வ'],
    sampleQuestions: [
      { en: 'Determine the nature of roots for $ax^2 + bx + c = 0$ using discriminant', ta: 'இருபடிச் சமன்பாட்டின் தன்மைக்காட்டி மூலம் மூலங்களின் தன்மையை ஆராய்க' },
      { en: 'Solve quadratic equation using formula method: $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$', ta: 'சூத்திர முறையில் இருபடிச் சமன்பாட்டைத் தீர்க்க' }
    ],
    explanationEn: 'For $ax^2 + bx + c = 0$, the roots are $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$ where Discriminant $\\Delta = b^2 - 4ac$.\n- $\\Delta > 0$: Real and unequal roots.\n- $\\Delta = 0$: Real and equal roots.\n- $\\Delta < 0$: No real roots (imaginary).\nSum of roots $\\alpha + \\beta = -\\frac{b}{a}$, product of roots $\\alpha\\beta = \\frac{c}{a}$.',
    explanationTa: '$ax^2 + bx + c = 0$ சமன்பாட்டிற்கு மூலங்கள் $x = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}$, இதில் தன்மைக்காட்டி $\\Delta = b^2 - 4ac$.\n- $\\Delta > 0$: மெய் மற்றும் சமமற்ற மூலங்கள்.\n- $\\Delta = 0$: மெய் மற்றும் சமமான மூலங்கள்.\n- $\\Delta < 0$: மெய் மூலங்கள் இல்லை.\nமூலங்களின் கூடுதல் $\\alpha + \\beta = -\\frac{b}{a}$, பெருக்கற்பலன் $\\alpha\\beta = \\frac{c}{a}$.',
    keyFormulas: ['x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}', '\\Delta = b^2 - 4ac', '\\alpha + \\beta = -b/a', '\\alpha\\beta = c/a'],
    examTipEn: 'Nature of roots questions carrying 2 marks and solving simultaneous word problems carrying 5 marks are standard board patterns.',
    examTipTa: 'மூலங்களின் தன்மை காணும் 2 மதிப்பெண் வினா மற்றும் சூத்திர முறை தீர்வு 5 மதிப்பெண் வினாவில் தவறாமல் வரும்.'
  },

  // ===================== CLASS 11 =====================
  {
    id: 'c11_doubt_physics_kinematics',
    classLevel: 11,
    subjectId: 'c11_physics',
    subjectNameEn: 'Physics',
    subjectNameTa: 'இயற்பியல்',
    chapterTitleEn: 'Unit 2: Kinematics & Vectors',
    chapterTitleTa: 'அலகு 2: இயக்கவியல்',
    topics: ['Vector Dot and Cross Product', 'Projectile Motion', 'Centripetal Acceleration'],
    keywords: ['vector', 'projectile', 'range', 'time of flight', 'dot product', 'cross product', 'எறிபொருள் இயக்கம்', 'திசையன்', 'கிடைத்தள நெடுக்கம்'],
    sampleQuestions: [
      { en: 'Derive equations for Maximum Height and Horizontal Range of a projectile', ta: 'எறிபொருளின் பெரும உயரம் மற்றும் கிடைமட்ட நெடுக்கத்திற்கான சமன்பாடுகளைத் தருவிக்க' },
      { en: 'Differentiate between scalar (dot) and vector (cross) products', ta: 'புள்ளிப் பெருக்கல் மற்றும் வெக்டர் பெருக்கல் பண்புகளை ஒப்பிடுக' }
    ],
    explanationEn: "In projectile motion fired at angle $\\theta$ with initial velocity $u$:\n- Time of Flight: $T = \\frac{2u \\sin\\theta}{g}$\n- Maximum Height: $h_{max} = \\frac{u^2 \\sin^2\\theta}{2g}$\n- Horizontal Range: $R = \\frac{u^2 \\sin 2\\theta}{g}$\nRange is maximum at $\\theta = 45^\\circ$ ($R_{max} = \\frac{u^2}{g}$). The trajectory is a downward parabola ($y = x\\tan\\theta - \\frac{g x^2}{2u^2\\cos^2\\theta}$).",
    explanationTa: 'ஆரம்பத் திசைவேகம் $u$ உடன் $\\theta$ கோணத்தில் எறியப்படும் எறிபொருளின் இயக்கத்தில்:\n- பறக்கும் காலம்: $T = \\frac{2u \\sin\\theta}{g}$\n- பெரும உயரம்: $h_{max} = \\frac{u^2 \\sin^2\\theta}{2g}$\n- கிடைமட்ட நெடுக்கம்: $R = \\frac{u^2 \\sin 2\\theta}{g}$\n$\\theta = 45^\\circ$ கோணத்தில் எறியும் போது நெடுக்கம் பெருமமாகும் ($R_{max} = \\frac{u^2}{g}$). எறிபொருளின் பாதை ஒரு பரவளையமாகும்.',
    keyFormulas: ['T = \\frac{2u \\sin\\theta}{g}', 'h_{max} = \\frac{u^2 \\sin^2\\theta}{2g}', 'R = \\frac{u^2 \\sin 2\\theta}{g}', 'R_{max} = \\frac{u^2}{g}'],
    examTipEn: 'Projectile motion derivation (Time of flight, Maximum height, Range) is a classic 5-mark question in Class 11 Physics Volume 1.',
    examTipTa: 'எறிபொருள் இயக்கத்தின் நெடுக்கம் மற்றும் பெரும உயரம் வருவித்தல் 11-ஆம் வகுப்பு இயற்பியலில் மிக முக்கியமான 5 மதிப்பெண் வினா.'
  },
  {
    id: 'c11_doubt_chemistry_stoichiometry',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    subjectNameEn: 'Chemistry',
    subjectNameTa: 'வேதியியல்',
    chapterTitleEn: 'Basic Concepts of Chemistry & Chemical Calculations',
    chapterTitleTa: 'வேதியியலின் அடிப்படைக் கருத்துக்கள் மற்றும் கணக்கீடுகள்',
    topics: ['Mole Concept', 'Limiting Reagent', 'Oxidation Number', 'Balancing Redox Reactions'],
    keywords: ['mole', 'avogadro', 'limiting reagent', 'oxidation number', 'redox', 'மோல்', 'அவகாட்ரோ எண்', 'ஆக்சிஜனேற்ற எண்', 'வரையறுக்கும் காரணி'],
    sampleQuestions: [
      { en: 'What is a Limiting Reagent and how is it identified?', ta: 'வரையறுக்கும் வினைபடு பொருள் என்றால் என்ன? அதனை எவ்வாறு கண்டறிவது?' },
      { en: 'Calculate oxidation number of Cr in $K_2Cr_2O_7$ and Mn in $KMnO_4$', ta: '$K_2Cr_2O_7$-ல் Cr-ன் மற்றும் $KMnO_4$-ல் Mn-ன் ஆக்சிஜனேற்ற எண்ணைக் கணக்கிடுக' }
    ],
    explanationEn: '1 mole = $6.022 \\times 10^{23}$ particles (Avogadro number). Limiting reagent is the reactant that is completely consumed first in a reaction, limiting the amount of product formed.\nOxidation number of Cr in $K_2Cr_2O_7$:\n$2(+1) + 2(x) + 7(-2) = 0 \\implies 2 + 2x - 14 = 0 \\implies 2x = 12 \\implies x = +6$.\nIn $KMnO_4$: $+1 + x + 4(-2) = 0 \\implies x = +7$.',
    explanationTa: '1 மோல் = $6.022 \\times 10^{23}$ துகள்கள் (அவகாட்ரோ எண்). வினையில் முழுமையாக முதலில் நுகரப்பட்டு உருவாகும் விளைபொருளின் அளவை நிர்ணயிக்கும் காரணி "வரையறுக்கும் வினைபடு பொருள்" ஆகும்.\n$K_2Cr_2O_7$-ல் Cr-ன் ஆக்சிஜனேற்ற எண்:\n$2(+1) + 2(x) + 7(-2) = 0 \\implies 2x = 12 \\implies x = +6$.\n$KMnO_4$-ல் Mn-ன் ஆக்சிஜனேற்ற எண் = $+7$.',
    keyFormulas: ['n = \\frac{\\text{mass}}{\\text{molar mass}}', 'N = n \\times N_A', '\\text{Equivalent Mass} = \\frac{\\text{Molar Mass}}{\\text{Valency factor}}'],
    examTipEn: 'Balancing redox reactions by oxidation number or ion-electron method is a regular 3/5-mark question.',
    examTipTa: 'ஆக்சிஜனேற்ற எண் முறை மூலம் ரெடாக்ஸ் வினையைச் சமன்செய்தல் முக்கியமான 3 அல்லது 5 மதிப்பெண் வினாவாகும்.'
  },
  {
    id: 'c11_doubt_botany_plant_tissue',
    classLevel: 11,
    subjectId: 'c11_botany',
    subjectNameEn: 'Bio-Botany',
    subjectNameTa: 'உயிரித் தாவரவியல்',
    chapterTitleEn: 'Tissue and Tissue System',
    chapterTitleTa: 'திசு மற்றும் திசு அமைப்புகள்',
    topics: ['Meristematic vs Permanent', 'Xylem and Phloem', 'Stomata Anatomy', 'Dicot vs Monocot Stem'],
    keywords: ['meristem', 'xylem', 'phloem', 'stomata', 'vascular bundle', 'ஆக்குத்திசு', 'சைலம்', 'புளோயம்', 'இலைத்துளை', 'வாஸ்குலார் கற்றை'],
    sampleQuestions: [
      { en: 'Differentiate between Dicot and Monocot stem internal anatomy', ta: 'இருவித்திலை மற்றும் ஒருவித்திலை தாவரத் தண்டு உள்ளமைப்பினை ஒப்பிடுக' },
      { en: 'Explain the components and conducting functions of Xylem', ta: 'சைலத்தின் கூறுகள் மற்றும் கடத்தும் பணிகளை விளக்குக' }
    ],
    explanationEn: 'Plant tissues: Meristematic (dividing) and Permanent (specialized). Complex permanent tissues:\n1) Xylem: Vessels, Tracheids, Xylem Fibres (dead), Xylem Parenchyma (living); transports water & minerals.\n2) Phloem: Sieve tubes, Companion cells, Phloem parenchyma, Phloem fibres; transports organic solutes (photosynthate).\nDicot stem has ring of open, conjoint, collateral vascular bundles with cambium; monocot has scattered, closed bundles.',
    explanationTa: 'தாவர திசுக்கள்: ஆக்குத்திசு மற்றும் நிலைத்த திசுக்கள். கூட்டு நிலைத்த திசுக்கள்:\n1) சைலம்: டிரக்கீடுகள், குழாய்கள், சைலம் நார்கள் (உயிரற்றவை), சைலம் பாரன்கைமா (உயிருள்ளது); நீர் கடத்துகிறது.\n2) புளோயம்: சல்லடைக்குழாய், துணைச்செல்கள், புளோயம் பாரன்கைமா, புளோயம் நார்கள்; உணவுப் பொருட்களைக் கடத்துகிறது.\nஇருவித்திலைத் தண்டில் வாஸ்குலார் கற்றைகள் வட்ட வடிவில், திறந்த அமைப்பில் இருக்கும்; ஒருவித்திலைத் தண்டில் சிதறிக் காணப்படும்.',
    examTipEn: 'Dicot stem vs Monocot stem diagram and comparison table is an essential 5-mark question in Class 11 Bio-Botany.',
    examTipTa: 'இருவித்திலைத் தண்டு vs ஒருவித்திலைத் தண்டு படம் வரைந்து பாகங்கள் குறித்தல் மற்றும் வேறுபாடுகள் 5 மதிப்பெண் வினாவாகும்.'
  },
  {
    id: 'c11_doubt_cs_python',
    classLevel: 11,
    subjectId: 'c11_cs',
    subjectNameEn: 'Computer Science',
    subjectNameTa: 'கணினி அறிவியல்',
    chapterTitleEn: 'Control Structures & Python Functions',
    chapterTitleTa: 'கட்டுப்பாட்டு அமைப்புகள் மற்றும் பைத்தான் செயற்கூறுகள்',
    topics: ['if-elif-else', 'for & while loops', 'Function arguments', 'Recursion', 'LEGB Scope'],
    keywords: ['python', 'loop', 'if-else', 'function', 'recursion', 'scope', 'பைத்தான்', 'மடக்கு', 'செயற்கூறு', 'தற்சுழற்சி'],
    sampleQuestions: [
      { en: 'Explain the different types of function arguments in Python with syntax', ta: 'பைத்தானில் செயற்கூறு அளபுருக்களின் வகைகளை எடுத்துக்காட்டுடன் விளக்குக' },
      { en: 'What is the LEGB rule of variable scope in Python?', ta: 'பைத்தானில் மாறிகளின் எல்லைக்கான LEGB விதியை விளக்குக' }
    ],
    explanationEn: "Python function arguments: 1) Required (positional), 2) Keyword arguments (arg=val), 3) Default arguments (def fn(x=10)), 4) Variable-length arguments (*args, **kwargs). LEGB Scope rule: Local -> Enclosing -> Global -> Built-in. Indentation is mandatory in Python syntax.",
    explanationTa: 'பைத்தான் செயற்கூறு அளபுருக்கள்: 1) தேவையான அளபுருக்கள், 2) சிறப்புச்சொல் அளபுருக்கள், 3) கொடாநிலை அளபுருக்கள் (Default), 4) மாறும் நீள அளபுருக்கள் (*args). மாறிகளின் எல்லை விதி (LEGB): உள்ளமை (Local) -> சூழ்ந்தமை (Enclosing) -> முழுதளாவிய (Global) -> உள்ளிணைந்த (Built-in).',
    examTipEn: 'Code tracing questions for loops and function argument types carry 3 and 5 marks in TN Board CS exam.',
    examTipTa: 'செயற்கூறு அளபுருக்களின் நான்கு வகைகள் மற்றும் நிரல் விளக்கம் 5 மதிப்பெண் பகுதியில் வழக்கமாகக் கேட்கப்படும் வினா.'
  },

  // ===================== CLASS 12 =====================
  {
    id: 'c12_doubt_physics_electrostatics',
    classLevel: 12,
    subjectId: 'c12_physics',
    subjectNameEn: 'Physics',
    subjectNameTa: 'இயற்பியல்',
    chapterTitleEn: 'Unit 1: Electrostatics',
    chapterTitleTa: 'அலகு 1: நிலைமின்னியல்',
    topics: ["Coulomb's Law", "Gauss's Law", 'Electric Dipole', 'Capacitance & Dielectrics', 'Van de Graaff Generator'],
    keywords: ['coulomb', 'gauss law', 'electric field', 'dipole', 'capacitor', 'கூலூம் விதி', 'காஸ் விதி', 'மின்புலம்', 'மின்தேக்கி', 'வான் டி கிராப்'],
    sampleQuestions: [
      { en: 'Derive the electric field at an axial and equatorial point of a dipole', ta: 'மின் இருமுனையின் அச்சுக்கோடு மற்றும் நடுவரைக் கோட்டுப் புள்ளிகளில் மின்புலம் காண்க' },
      { en: "State Gauss's Law and apply it to find field due to infinitely long charged wire", ta: 'காஸ் விதியைக் கூறி முடிவிலா நீளமுள்ள மின்னூட்டம் பெற்ற கம்பியினால் மின்புலம் காண்க' }
    ],
    explanationEn: "Coulomb's Law: $F = \\frac{1}{4\\pi \\epsilon_0} \\frac{q_1 q_2}{r^2}$. Gauss's Law: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\epsilon_0}$. Field of electric dipole: Axial point $E_{axial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}$ (along $\\vec{p}$); Equatorial point $E_{equatorial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$ (opposite to $\\vec{p}$). Note $E_{axial} = 2 E_{equatorial}$. Capacitance of parallel plate with dielectric: $C = \\frac{\\epsilon_r \\epsilon_0 A}{d}$.",
    explanationTa: 'கூலூம் விதி: $F = \\frac{1}{4\\pi \\epsilon_0} \\frac{q_1 q_2}{r^2}$. காஸ் விதி: $\\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q}{\\epsilon_0}$. மின் இருமுனை மின்புலம்: அச்சுக்கோட்டில் $E_{axial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}$, நடுவரைக்கோட்டில் $E_{equatorial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}$. எனவே $E_{axial} = 2 E_{equatorial}$. மின்தேக்குத்திறன் $C = \\frac{\\epsilon A}{d}$.',
    keyFormulas: ['F = \\frac{1}{4\\pi \\epsilon_0} \\frac{q_1 q_2}{r^2}', 'E_{axial} = \\frac{1}{4\\pi\\epsilon_0} \\frac{2p}{r^3}', 'E_{equi} = \\frac{1}{4\\pi\\epsilon_0} \\frac{p}{r^3}', 'C = \\frac{\\epsilon_0 A}{d}'],
    examTipEn: 'Axial and Equatorial dipole derivations and Van de Graaff generator working are top 5-mark board exam questions.',
    examTipTa: 'அச்சுக்கோடு மற்றும் நடுவரைக்கோடு மின்புலம் வருவித்தல் மற்றும் வான் டி கிராப் இயற்றி 12-ஆம் வகுப்பு பொதுத்தேர்வில் முக்கிய 5 மதிப்பெண் வினாக்கள்.'
  },
  {
    id: 'c12_doubt_maths_matrices',
    classLevel: 12,
    subjectId: 'c12_maths',
    subjectNameEn: 'Mathematics',
    subjectNameTa: 'கணிதம்',
    chapterTitleEn: 'Applications of Matrices and Determinants',
    chapterTitleTa: 'அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்',
    topics: ['Adjoint & Inverse', "Cramer's Rule", 'Gaussian Elimination', 'Rank of Matrix'],
    keywords: ['matrix', 'inverse', 'cramer', 'rank', 'determinant', 'நேர்மாறு அணி', 'கிரேமரின் விதி', 'காசியன் நீக்கல் முறை', 'அணியின் தரம்'],
    sampleQuestions: [
      { en: "Solve system of linear equations using Cramer's rule", ta: 'கிரேமரின் விதியைப் பயன்படுத்தி நேரியல் சமன்பாட்டுத் தொகுப்பைத் தீர்க்க' },
      { en: 'Find inverse of $3 \\times 3$ matrix: $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$', ta: '$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$ சூத்திரம் கொண்டு நேர்மாறு அணி காண்க' }
    ],
    explanationEn: "Inverse of square matrix $A$ exists if and only if $|A| \\ne 0$ (non-singular): $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$. In Cramer's rule for linear equations: $x = \\frac{\\Delta_1}{\\Delta}, y = \\frac{\\Delta_2}{\\Delta}, z = \\frac{\\Delta_3}{\\Delta}$ (valid when $\\Delta \\ne 0$). If $\\Delta = 0$ and any $\\Delta_i \\ne 0$, system has no solution (inconsistent).",
    explanationTa: '$|A| \\ne 0$ எனில் மட்டுமே நேர்மாறு $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$ காண இயலும். கிரேமரின் விதியில்: $x = \\frac{\\Delta_x}{\\Delta}, y = \\frac{\\Delta_y}{\\Delta}, z = \\frac{\\Delta_z}{\\Delta}$ (இதில் $\\Delta \\ne 0$). ஒருவேளை $\\Delta = 0$ ஆகி ஏதேனும் ஒரு $\\Delta_i \\ne 0$ எனில் தொகுப்பிற்கு தீர்வு இல்லை (ஒருங்கமைவற்றது).',
    keyFormulas: ['A^{-1} = \\frac{1}{|A|} \\text{adj}(A)', 'x = \\frac{\\Delta_1}{\\Delta}', 'y = \\frac{\\Delta_2}{\\Delta}', 'z = \\frac{\\Delta_3}{\\Delta}'],
    examTipEn: "Cramer's rule and Matrix inversion method problems carrying 5 marks appear in Section D of TN Class 12 Maths paper without fail.",
    examTipTa: 'கிரேமர் விதி அல்லது நேர்மாறு அணி காணும் கணக்கு 12-ஆம் வகுப்பு கணித பொதுத்தேர்வு பகுதி 4-ல் 5 மதிப்பெண் கட்டாயப் பகுதியில் வரும்.'
  },
  {
    id: 'c12_doubt_commerce_joint_stock',
    classLevel: 12,
    subjectId: 'c12_commerce',
    subjectNameEn: 'Commerce',
    subjectNameTa: 'வணிகவியல்',
    chapterTitleEn: 'Financial Markets & SEBI',
    chapterTitleTa: 'நிதிச் சந்தைகள் மற்றும் செபி (SEBI)',
    topics: ['Capital Market vs Money Market', 'Functions of SEBI', 'Stock Exchange Operations', 'NSE & BSE'],
    keywords: ['sebi', 'stock exchange', 'money market', 'capital market', 'shares', 'செபி', 'பங்குச் சந்தை', 'பணச் சந்தை', 'மூலதனச் சந்தை'],
    sampleQuestions: [
      { en: 'Explain the regulatory and developmental functions of SEBI', ta: 'செபியின் (SEBI) ஒழுங்குமுறை மற்றும் மேம்பாட்டுப் பணிகளை விளக்குக' },
      { en: 'Differentiate between Capital Market and Money Market', ta: 'மூலதனச் சந்தை மற்றும் பணச் சந்தையை ஒப்பிடுக' }
    ],
    explanationEn: 'Money Market deals in short-term credit (maturity <= 1 year; e.g. Treasury Bills, Commercial Papers, Call money). Capital Market deals in medium and long-term funds (shares, debentures, bonds).\nSecurities and Exchange Board of India (SEBI) was established in 1992 as statutory regulator to protect investors, prevent insider trading and fraudulent practices, and register stock brokers.',
    explanationTa: 'பணச் சந்தை குறுகிய கால நிதிக்கருவிகளைக் கையாள்கிறது (1 ஆண்டுக்குள்; எ.கா. கருவூல ரசீதுகள், வணிகத்தாள்கள்). மூலதனச் சந்தை நீண்ட கால முதலீடுகளைக் (பங்குகள், கடனீட்டுப் பத்திரங்கள்) கையாள்கிறது. செபி (SEBI) 1992-ல் முதலீட்டாளர்களைப் பாதுகாக்கவும், முறைகேடுகளைத் தடுக்கவும் அமைக்கப்பட்ட சட்டப்பூர்வ அமைப்பாகும்.',
    examTipEn: 'Functions of SEBI and Differences between Money Market and Capital Market are high-priority 5-mark board exam questions.',
    examTipTa: 'செபியின் பணிகள் மற்றும் மூலதன சந்தை-பண சந்தை வேறுபாடுகள் வணிகவியல் தேர்வில் அடிக்கடி கேட்கப்படும் 5 மதிப்பெண் வினா.'
  },
  {
    id: 'c12_doubt_economics_national_income',
    classLevel: 12,
    subjectId: 'c12_economics',
    subjectNameEn: 'Economics',
    subjectNameTa: 'பொருளியல்',
    chapterTitleEn: 'National Income',
    chapterTitleTa: 'தேசிய வருவாய்',
    topics: ['GDP, GNP, NNP, National Income', 'Methods of Measuring National Income', 'Difficulties in Measurement'],
    keywords: ['gdp', 'gnp', 'nnp', 'national income', 'per capita income', 'தேசிய வருவாய்', 'மொத்த உள்நாட்டு உற்பத்தி', 'தனிநபர் வருமானம்'],
    sampleQuestions: [
      { en: 'Explain the three methods of calculating National Income', ta: 'தேசிய வருவாயைக் கணக்கிடும் மூன்று முறைகளை விளக்குக' },
      { en: 'Distinguish between GDP at market prices and NNP at factor cost', ta: 'சந்தை விலையில் GDP மற்றும் காரணி விலையில் NNP வேறுபடுத்துக' }
    ],
    explanationEn: 'National Income is the total monetary value of all final goods and services produced in a country in a financial year. Three measurement methods:\n1) Product / Output Method ($GVA = \\text{Output} - \\text{Intermediate Consumption}$)\n2) Income Method (Sum of Rent + Wages + Interest + Profit)\n3) Expenditure Method ($GDP = C + I + G + (X - M)$).\nNational Income $= NNP_{FC} = GNP_{MP} - \\text{Depreciation} - \\text{Net Indirect Taxes}$.',
    explanationTa: 'தேசிய வருவாய் என்பது ஒரு நிதியாண்டில் ஒரு நாட்டில் உற்பத்தி செய்யப்பட்ட இறுதிப் பொருட்கள் மற்றும் பணிகளின் மொத்த பணமதிப்பாகும். அளவிடும் முறைகள்:\n1) உற்பத்தி முறை (பொருட்களின் மதிப்புக் கூட்டுதல்)\n2) வருமான முறை (வாரம் + கூலி + வட்டி + லாபம்)\n3) செலவின முறை ($C + I + G + (X - M)$).\nஉண்மையான தேசிய வருவாய் = காரணிச் செலவில் நிகர நாட்டு உற்பத்தி ($NNP_{FC}$).',
    keyFormulas: ['GDP = C + I + G + (X - M)', 'GNP = GDP + NFIA', 'NNP = GNP - \\text{Depreciation}', 'NNP_{FC} = \\text{National Income}'],
    examTipEn: 'Methods of measuring National Income and difficulties encountered is a classic 5-mark essay question in Class 12 Economics.',
    examTipTa: 'தேசிய வருவாயை அளவிடும் முறைகள் மற்றும் அளவிடுவதில் உள்ள சிக்கல்கள் பொருளியலில் எதிர்பார்க்கப்படும் 5 மதிப்பெண் வினா.'
  }
];

/**
 * Intelligent instant matcher: finds exact or closely related knowledge from the bank
 */
export function queryKnowledgeBank(
  query: string, 
  classLevel: ClassLevel, 
  subjectId?: string
): DoubtKnowledgeItem | null {
  const qLower = query.toLowerCase();
  const qWords = qLower.split(/\s+/).filter(w => w.length > 2);

  let bestMatch: DoubtKnowledgeItem | null = null;
  let highestScore = 0;

  for (const item of DOUBT_KNOWLEDGE_BANK) {
    let score = 0;

    // Class level bonus
    if (item.classLevel === classLevel) score += 5;

    // Subject ID bonus
    if (subjectId && item.subjectId === subjectId) score += 6;

    // Keyword matching
    for (const kw of item.keywords) {
      if (qLower.includes(kw.toLowerCase())) score += 8;
    }

    // Topic matching
    for (const topic of item.topics) {
      if (qLower.includes(topic.toLowerCase())) score += 10;
    }

    // Word overlap in explanations & titles
    for (const word of qWords) {
      if (item.chapterTitleEn.toLowerCase().includes(word)) score += 3;
      if (item.chapterTitleTa.toLowerCase().includes(word)) score += 3;
      if (item.explanationEn.toLowerCase().includes(word)) score += 1;
      if (item.explanationTa.toLowerCase().includes(word)) score += 1;
    }

    if (score > highestScore && score >= 8) {
      highestScore = score;
      bestMatch = item;
    }
  }

  return bestMatch;
}
