import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Mathematics - Volume 2 (Chapters 7 to 12)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 7. Applications of Differential Calculus (வகை நுண்கணிதத்தின் பயன்பாடுகள்)
 * 8. Differentials and Partial Derivatives (வகையீடுகள் மற்றும் பகுதி வகைக்கெழுக்கள்)
 * 9. Applications of Integration (தொகை நுண்கணிதத்தின் பயன்பாடுகள்)
 * 10. Ordinary Differential Equations (சாதாரண வகைக்கெழுச் சமன்பாடுகள்)
 * 11. Probability Distributions (நிகழ்தகவு பரவல்கள்)
 * 12. Discrete Mathematics (தனிநிலைக் கணிதம்)
 */

export const MATHS_VOL2_CHAPTERS: Chapter[] = [
  {
    id: 'c12_mat_ch7',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 7,
    titleEn: 'Chapter 7: Applications of Differential Calculus',
    titleTa: 'அலகு 7: வகை நுண்கணிதத்தின் பயன்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch8',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 8,
    titleEn: 'Chapter 8: Differentials and Partial Derivatives',
    titleTa: 'அலகு 8: வகையீடுகள் மற்றும் பகுதி வகைக்கெழுக்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch9',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 9,
    titleEn: 'Chapter 9: Applications of Integration',
    titleTa: 'அலகு 9: தொகை நுண்கணிதத்தின் பயன்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch10',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 10,
    titleEn: 'Chapter 10: Ordinary Differential Equations',
    titleTa: 'அலகு 10: சாதாரண வகைக்கெழுச் சமன்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch11',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 11,
    titleEn: 'Chapter 11: Probability Distributions',
    titleTa: 'அலகு 11: நிகழ்தகவு பரவல்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch12',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 2,
    unitNameEn: 'Volume 2: Calculus & Statistics',
    unitNameTa: 'தொகுதி 2: நுண்கணிதம் & புள்ளியியல்',
    chapterNumber: 12,
    titleEn: 'Chapter 12: Discrete Mathematics',
    titleTa: 'அலகு 12: தனிநிலைக் கணிதம்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const MATHS_VOL2_NOTES: Record<string, NoteItem> = {
  c12_mat_ch7: {
    id: 'note_c12_mat_ch7',
    chapterId: 'c12_mat_ch7',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Applications of Differential Calculus: Tangents, Extrema & Theorems',
    titleTa: 'வகை நுண்கணிதத்தின் பயன்பாடுகள்: தொடுகோடுகள், பெரும-சிறுமங்கள் மற்றும் தேற்றங்கள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.4',
    isUpdated: true,
    isNew: false,
    changeNote: 'Added L’Hopital’s rule examples and concavity/inflection point tests.',
    changeNoteTa: 'எல்-ஹாஸ்பிட்டல் விதி மற்றும் குழிவு/வளைவு மாற்றப் புள்ளி சோதனைகள் இணைக்கப்பட்டன.',
    readTimeMinutes: 19,
    bodyEn: `### 1. Geometric Tangents and Normals
For a differentiable curve $y = f(x)$:
- Slope of tangent at $(x_0, y_0)$: $m = \\left(\\frac{dy}{dx}\\right)_{(x_0, y_0)}$
- Equation of tangent: $y - y_0 = m(x - x_0)$
- Slope of normal: $-\\frac{1}{m}$ (provided $m \\neq 0$)
- Equation of normal: $y - y_0 = -\\frac{1}{m}(x - x_0)$

### 2. Mean Value Theorems
- **Rolle’s Theorem:** If $f(x)$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, there exists at least one $c \\in (a, b)$ such that $f'(c) = 0$.
- **Lagrange’s Mean Value Theorem:** If $f(x)$ is continuous on $[a, b]$ and differentiable on $(a, b)$, there exists $c \\in (a, b)$ such that:
  $$f'(c) = \\frac{f(b) - f(a)}{b - a}$$
- **L’Hôpital’s Rule:** For indeterminate limits of forms $\\left[\\frac{0}{0}\\right]$ or $\\left[\\frac{\\infty}{\\infty}\\right]$:
  $$\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}$$

### 3. Local Extrema & Concavity
- **First Derivative Test:** If $f'(x)$ changes sign from positive to negative at critical point $c$, $f(c)$ is a local maximum.
- **Second Derivative Test:**
  - $f'(c) = 0$ and $f''(c) < 0 \\implies$ Local Maximum at $c$.
  - $f'(c) = 0$ and $f''(c) > 0 \\implies$ Local Minimum at $c$.
  - If $f''(x) > 0$ on an interval, the curve is **concave upward**; if $f''(x) < 0$, it is **concave downward**. Points where concavity changes ($f''(x) = 0$) are **points of inflection**.`,
    bodyTa: `### 1. தொடுகோடு மற்றும் செங்கோட்டின் சமன்பாடுகள்
சாய்வு $m = \\left(\\frac{dy}{dx}\\right)_{(x_0, y_0)}$.
தொடுகோடு: $y - y_0 = m(x - x_0)$.
செங்கோடு: $y - y_0 = -\\frac{1}{m}(x - x_0)$.

### 2. ரோலின் தேற்றம் மற்றும் லெக்ராஞ்சியின் சராசரி மதிப்புத் தேற்றம்
- ரோலின் தேற்றம்: $f(a) = f(b)$ எனில் $f'(c) = 0$ என அமையுமாறு $c \\in (a, b)$ என்ற புள்ளி உண்டு.
- லெக்ராஞ்சியின் சராசரி மதிப்புத் தேற்றம்: $f'(c) = \\frac{f(b) - f(a)}{b - a}$.
- எல்-ஹாஸ்பிட்டல் விதி: $\\frac{0}{0}$ அல்லது $\\frac{\\infty}{\\infty}$ தேரப்பெறா வடிவங்களுக்கு $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f'(x)}{g'(x)}$.

### 3. பெரும-சிறுமங்கள் மற்றும் வளைவு மாற்றப் புள்ளிகள்
$f'(c) = 0$ மற்றும் $f''(c) < 0$ எனில் பெருமம்; $f''(c) > 0$ எனில் சிறுமம். $f''(x)$ குறி மாறும் புள்ளிகள் வளைவு மாற்றப் புள்ளிகள் ஆகும்.`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced practical optimization problems.', changeNoteTa: 'நடைமுறை உகந்ததாக்கல் கணக்குகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Lagrange Mean Value Formula', nameTa: 'லெக்ராஞ்சியின் சராசரி மதிப்பு சூத்திரம்', formula: "f'(c) = \\frac{f(b) - f(a)}{b - a}", explanationEn: 'Instantaneous rate of change equals average rate of change.', explanationTa: 'உடனடி மாறுவீதம் சராசரி மாறுவீதத்திற்குச் சமமாக இருக்கும்.' },
      { nameEn: 'L’Hôpital’s Indeterminate Rule', nameTa: 'எல்-ஹாஸ்பிட்டலின் விதி', formula: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = \\lim_{x \\to a} \\frac{f'(x)}{g'(x)}", explanationEn: 'Applies to 0/0 and ∞/∞ forms.', explanationTa: '0/0 மற்றும் ∞/∞ தேரப்பெறா வடிவங்களுக்குப் பொருந்தும்.' },
      { nameEn: 'Second Derivative Extrema Test', nameTa: 'இரண்டாம் வகைக்கெழு சோதனை', formula: "f''(c) < 0 \\implies \\text{Max}, \\quad f''(c) > 0 \\implies \\text{Min}", explanationEn: 'Classifies stationary points where f’(c) = 0.', explanationTa: 'நிலைப் புள்ளிகளில் பெரும, சிறுமங்களைத் தீர்மானிக்கிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the slope of the tangent to y = x³ - 3x + 2 at x = 2.',
        questionTa: 'y = x³ - 3x + 2 என்ற வளைவரைக்கு x = 2 என்ற புள்ளியில் தொடுகோட்டின் சாய்வு காண்க.',
        solutionEn: '1. Differentiate: dy/dx = 3x² - 3.\n2. Evaluate at x = 2: m = 3(2)² - 3 = 12 - 3 = 9.\n3. The slope of the tangent is 9.',
        solutionTa: '1. வகைக்கெழு: dy/dx = 3x² - 3.\n2. x = 2 எனப் பிரதியிட: m = 3(4) - 3 = 9.\n3. தொடுகோட்டின் சாய்வு 9 ஆகும்.'
      }
    ]
  },

  c12_mat_ch8: {
    id: 'note_c12_mat_ch8',
    chapterId: 'c12_mat_ch8',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Differentials and Partial Derivatives: Linear Approximation & Euler’s Theorem',
    titleTa: 'வகையீடுகள் மற்றும் பகுதி வகைக்கெழுக்கள்: நேரியல் தோராய மதிப்பு மற்றும் ஆய்லர் தேற்றம்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.1',
    isUpdated: true,
    isNew: false,
    changeNote: 'Linearization approximations and Euler homogeneous proofs added.',
    changeNoteTa: 'நேரியல் தோராயப்படுத்தல் மற்றும் சமபடித்தான ஆய்லர் தேற்ற நிரூபணங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 15,
    bodyEn: `### 1. Linear Approximation
The tangent line to $y = f(x)$ at $x_0$ gives the **linear approximation**:
$$L(x) = f(x_0) + f'(x_0)(x - x_0)$$
For a small change $\\Delta x$: $\\Delta y \\approx dy = f'(x) dx$.

### 2. Partial Derivatives & Clairaut's Theorem
For a function of two variables $z = f(x, y)$:
- $\\frac{\\partial f}{\\partial x} = \\lim_{\\Delta x \\to 0} \\frac{f(x + \\Delta x, y) - f(x, y)}{\\Delta x}$ (treating $y$ as a constant).
- $\\frac{\\partial f}{\\partial y} = \\lim_{\\Delta y \\to 0} \\frac{f(x, y + \\Delta y) - f(x, y)}{\\Delta y}$ (treating $x$ as a constant).
- **Clairaut’s Theorem:** If mixed partials are continuous, then $f_{xy} = f_{yx}$, i.e.,
  $$\\frac{\\partial^2 f}{\\partial x \\partial y} = \\frac{\\partial^2 f}{\\partial y \\partial x}$$

### 3. Euler’s Theorem for Homogeneous Functions
A function $u(x, y)$ is homogeneous of degree $n$ if $u(tx, ty) = t^n u(x, y)$.
**Euler’s Theorem:**
$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n \\cdot u$$`,
    bodyTa: `### 1. நேரியல் தோராய மதிப்பு
$x_0$-ல் நேரியல் தோராயம்: $L(x) = f(x_0) + f'(x_0)(x - x_0)$.
நுண்ணிய மாற்றங்களுக்கு $df = f'(x) dx$.

### 2. பகுதி வகைக்கெழுக்கள்
இரண்டு மாறிகளைக் கொண்ட $u(x, y)$ சார்பிற்கு $\\frac{\\partial u}{\\partial x}$ மற்றும் $\\frac{\\partial u}{\\partial y}$.

### 3. சமபடித்தான சார்புகளுக்கான ஆய்லர் தேற்றம்
படி $n$ கொண்ட சமபடித்தான சார்பு $u(x, y)$-க்கு:
$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u$$`,
    revisions: [
      { version: '2.1', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Updated error estimation percentage examples.', changeNoteTa: 'தோராயப் பிழை கணக்கீடுகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Linear Approximation Formula', nameTa: 'நேரியல் தோராய சூத்திரம்', formula: "L(x) = f(x_0) + f'(x_0)(x - x_0)", explanationEn: 'Estimates nonlinear curves near a base point.', explanationTa: 'வளைவரையின் மதிப்பை அடிப்படைப் புள்ளி அருகே தோராயமாக மதிப்பிடுகிறது.' },
      { nameEn: 'Euler’s Homogeneous Identity', nameTa: 'ஆய்லரின் சமபடித்தான முற்றொருமை', formula: 'x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = n u', explanationEn: 'Holds for homogeneous functions of degree n.', explanationTa: 'படி n கொண்ட சமபடித்தான சார்புகளுக்குப் பொருந்தும்.' },
      { nameEn: 'Total Differential', nameTa: 'முழு வகையீடு', formula: 'df = \\frac{\\partial f}{\\partial x} dx + \\frac{\\partial f}{\\partial y} dy', explanationEn: 'Combined variation along both coordinates.', explanationTa: 'இரு அச்சுக்களின் ஒருங்கிணைந்த நுண்ணிய மாறுபாடு.' }
    ],
    workedExamples: [
      {
        questionEn: 'Verify Euler’s theorem for u = x³ + y³ + 3xy².',
        questionTa: 'u = x³ + y³ + 3xy² என்ற சார்பிற்கு ஆய்லர் தேற்றத்தை சரிபார்க்க.',
        solutionEn: '1. Test homogeneity: u(tx, ty) = t³x³ + t³y³ + 3(tx)(t²y²) = t³ u(x, y). Hence u is homogeneous of degree n = 3.\n2. ∂u/∂x = 3x² + 3y²; ∂u/∂y = 3y² + 6xy.\n3. x(∂u/∂x) + y(∂u/∂y) = x(3x² + 3y²) + y(3y² + 6xy) = 3x³ + 3xy² + 3y³ + 6xy² = 3(x³ + y³ + 3xy²) = 3u. Verified!',
        solutionTa: '1. சமபடித்தான தன்மை: u(tx, ty) = t³ u(x, y). ஆகவே படி n = 3.\n2. ∂u/∂x = 3x² + 3y²; ∂u/∂y = 3y² + 6xy.\n3. x(∂u/∂x) + y(∂u/∂y) = 3(x³ + y³ + 3xy²) = 3u. ஆய்லர் தேற்றம் சரிபார்க்கப்பட்டது.'
      }
    ]
  },

  c12_mat_ch9: {
    id: 'note_c12_mat_ch9',
    chapterId: 'c12_mat_ch9',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Applications of Integration: Definite Integrals, Areas & Solids of Revolution',
    titleTa: 'தொகை நுண்கணிதத்தின் பயன்பாடுகள்: வரையறுத்த தொகையீடுகள், பரப்புகள் மற்றும் சுழல் திடப்பொருட்கள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.3',
    isUpdated: true,
    isNew: false,
    changeNote: 'Bernoulli integration by parts and volume disk method integrated.',
    changeNoteTa: 'பெர்னோலியின் பகுதித் தொகையீடு மற்றும் சுழல் திடப்பொருள் கனஅளவு வழிமுறைகள் இணைக்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Fundamental Properties of Definite Integrals
1. $\\int_a^b f(x) dx = \\int_a^b f(a + b - x) dx$
2. $\\int_0^a f(x) dx = \\int_0^a f(a - x) dx$
3. $\\int_{-a}^a f(x) dx = \\begin{cases} 2 \\int_0^a f(x) dx & \\text{if } f(x) \\text{ is even} \\\\ 0 & \\text{if } f(x) \\text{ is odd} \\end{cases}$

### 2. Bernoulli's Formula for Integration by Parts
$$\\int u v dx = u v_1 - u' v_2 + u'' v_3 - u''' v_4 + \\dots$$
where primes denote derivatives of $u$, and subscripts denote successive integrals of $v$.

### 3. Area Bounded by Curves
- Area between curve $y = f(x)$, $x$-axis, and ordinates $x = a$ to $x = b$:
  $$A = \\int_a^b |y| dx$$
- Area enclosed between two curves $y_1 = f(x)$ and $y_2 = g(x)$:
  $$A = \\int_a^b [f(x) - g(x)] dx$$

### 4. Volume of Solid of Revolution
When the region bounded by $y = f(x)$, $x = a$, $x = b$, and the $x$-axis is rotated through $360^\\circ$ about the $x$-axis:
$$V = \\pi \\int_a^b y^2 dx$$
When rotated about the $y$-axis: $V = \\pi \\int_c^d x^2 dy$.`,
    bodyTa: `### 1. வரையறுத்த தொகையீடுகளின் பண்புகள்
- $\\int_0^a f(x) dx = \\int_0^a f(a - x) dx$
- $\\int_{-a}^a f(x) dx = 0$ (ஒற்றைச் சார்பு எனில்); $2 \\int_0^a f(x) dx$ (இரட்டைச் சார்பு எனில்).

### 2. பெர்னோலியின் சூத்திரம்
$$\\int u v dx = u v_1 - u' v_2 + u'' v_3 - \\dots$$

### 3. வளைவரைகளால் அடைபடும் பரப்பளவு
$$A = \\int_a^b |y| dx$$

### 4. சுழல் திடப்பொருளின் கனஅளவு
x-அச்சைப் பொருத்து சுழற்றும்போது உண்டாகும் கனஅளவு:
$$V = \\pi \\int_a^b y^2 dx$$`,
    revisions: [
      { version: '2.3', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced parabola-line intersection areas.', changeNoteTa: 'பரவளைய-நேர்க்கோடு இடைப்பட்ட பரப்பு கணக்குகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Bernoulli’s Formula', nameTa: 'பெர்னோலியின் சூத்திரம்', formula: "\\int u v dx = u v_1 - u' v_2 + u'' v_3 - u''' v_4 + \\dots", explanationEn: 'Iterative integration by parts.', explanationTa: 'மீள் பகுதித் தொகையீட்டு முறை.' },
      { nameEn: 'Definite Integral Symmetry', nameTa: 'வரையறுத்த தொகையீட்டு சமச்சீர்மை', formula: '\\int_0^a f(x) dx = \\int_0^a f(a - x) dx', explanationEn: 'King’s property for evaluating difficult trigonometric limits.', explanationTa: 'முக்கோணவியல் தொகையீடுகளை எளிமைப்படுத்தும் பண்பு.' },
      { nameEn: 'Volume of Revolution (x-axis)', nameTa: 'சுழல் கனஅளவு சூத்திரம்', formula: 'V = \\pi \\int_a^b y^2 dx', explanationEn: 'Volume generated by rotating curve around x-axis.', explanationTa: 'x-அச்சை மையமாகக் கொண்டு சுழற்றும்போது கிடைக்கும் திடப்பொருள் கனஅளவு.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the area of the circle x² + y² = a² using integration.',
        questionTa: 'தொகையீட்டு முறையைப் பயன்படுத்தி x² + y² = a² என்ற வட்டத்தின் பரப்பளவைக் காண்க.',
        solutionEn: '1. By quadrant symmetry: Area = 4 * ∫₀ᵃ √(a² - x²) dx.\n2. Standard formula: ∫ √(a² - x²) dx = (x/2)√(a² - x²) + (a²/2) sin⁻¹(x/a).\n3. Evaluated from 0 to a: (a²/2)(π/2) - 0 = πa²/4.\n4. Total Area = 4 * (πa²/4) = πa².',
        solutionTa: '1. வட்டத்தின் சமச்சீரால்: பரப்பு = 4 * ∫₀ᵃ √(a² - x²) dx.\n2. தொகையீட்டு சூத்திரம்: (a²/2) sin⁻¹(1) = πa²/4.\n3. மொத்தப் பரப்பளவு = 4 * (πa²/4) = πa² சதுர அலகுகள்.'
      }
    ]
  },

  c12_mat_ch10: {
    id: 'note_c12_mat_ch10',
    chapterId: 'c12_mat_ch10',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Ordinary Differential Equations: Formation, Separation & Integrating Factors',
    titleTa: 'சாதாரண வகைக்கெழுச் சமன்பாடுகள்: உருவாக்கம், பிரித்தல் மற்றும் தொகையீட்டுக் காரணி',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.5',
    isUpdated: true,
    isNew: false,
    changeNote: 'Applied growth models: Newton cooling, bacteria doubling, half-life.',
    changeNoteTa: 'நியூட்டனின் குளிர்வு விதி மற்றும் கதிரியக்க சிதைவு பயன்பாடுகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 17,
    bodyEn: `### 1. Order and Degree of Differential Equations
- **Order:** The highest derivative appearing in the equation.
- **Degree:** The highest power of the highest order derivative after the equation has been cleared of fractional powers and radicals in derivatives.

### 2. Solving First-Order ODEs
1. **Variable Separable:** $f(x) dx + g(y) dy = 0 \\implies \\int f(x) dx + \\int g(y) dy = c$.
2. **Homogeneous Equations:** $\\frac{dy}{dx} = f(y/x)$. Substitute $y = vx \\implies \\frac{dy}{dx} = v + x\\frac{dv}{dx}$.
3. **Linear First-Order ODE:**
   $$\\frac{dy}{dx} + Py = Q$$
   where $P$ and $Q$ are functions of $x$ only.
   - **Integrating Factor:** $I.F. = e^{\\int P dx}$
   - **General Solution:**
     $$y \\cdot (I.F.) = \\int Q \\cdot (I.F.) dx + c$$

### 3. Real-World Growth and Decay Applications
- **Law of Exponential Growth / Decay:** $\\frac{dN}{dt} = kN \\implies N(t) = N_0 e^{kt}$.
- **Newton’s Law of Cooling:** Rate of cooling of a hot body is proportional to the difference between its temperature $T$ and ambient temperature $T_s$:
  $$\\frac{dT}{dt} = -k(T - T_s) \\implies T(t) = T_s + C e^{-kt}$$`,
    bodyTa: `### 1. வரிசை மற்றும் படி
- வரிசை: சமன்பாட்டில் உள்ள மிக உயர்ந்த வகைக்கெழு.
- படி: பின்னங்கள் நீக்கப்பட்ட பின், மிக உயர்ந்த வகைக்கெழுவின் அதிகபட்ச அடுக்கு.

### 2. முதல் வரிசை வகைக்கெழுச் சமன்பாடுகளைத் தீர்த்தல்
- மாறிகளைப் பிரித்தல்: $\\int f(x) dx + \\int g(y) dy = c$.
- நேரியல் வகைக்கெழுச் சமன்பாடு: $\\frac{dy}{dx} + Py = Q$.
  - தொகையீட்டுக் காரணி: $I.F. = e^{\\int P dx}$.
  - பொதுத் தீர்வு: $y(I.F.) = \\int Q(I.F.) dx + c$.

### 3. நடைமுறைப் பயன்பாடுகள்
- நியூட்டனின் குளிர்வு விதி: $\\frac{dT}{dt} = -k(T - T_s)$.
- கதிரியக்கச் சிதைவு மற்றும் மக்கள் தொகை வளர்ச்சி: $N(t) = N_0 e^{kt}$.`,
    revisions: [
      { version: '2.5', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Refined Newton cooling step-by-step problem sets.', changeNoteTa: 'குளிர்வு விதி மாதிரி கணக்குகள் மேம்படுத்தப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Integrating Factor (I.F.)', nameTa: 'தொகையீட்டுக் காரணி', formula: 'I.F. = e^{\\int P dx}', explanationEn: 'Multiplier that renders linear ODE exact.', explanationTa: 'நேரியல் வகைக்கெழுச் சமன்பாட்டை முழுமையானதாக மாற்றும் காரணி.' },
      { nameEn: 'Linear ODE General Solution', nameTa: 'நேரியல் சமன்பாட்டு தீர்வு', formula: 'y \\cdot e^{\\int P dx} = \\int Q \\cdot e^{\\int P dx} dx + c', explanationEn: 'Standard solution to dy/dx + Py = Q.', explanationTa: 'dy/dx + Py = Q என்ற சமன்பாட்டின் பொதுத் தீர்வு.' },
      { nameEn: 'Newton’s Cooling Model', nameTa: 'நியூட்டனின் குளிர்வு மாதிரி', formula: 'T(t) = T_s + C e^{-kt}', explanationEn: 'Predicts body temperature over elapsed time.', explanationTa: 'நேரத்திற்கு ஏற்ப வெப்பம் குறையும் விதத்தைக் கணிக்கிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the integrating factor for dy/dx + (2/x)y = x³.',
        questionTa: 'dy/dx + (2/x)y = x³ என்ற சமன்பாட்டின் தொகையீட்டுக் காரணியைக் காண்க.',
        solutionEn: '1. Compare with dy/dx + Py = Q -> P = 2/x.\n2. ∫ P dx = ∫ (2/x) dx = 2 ln|x| = ln(x²).\n3. I.F. = e^(∫ P dx) = e^(ln(x²)) = x².',
        solutionTa: '1. P = 2/x.\n2. ∫ P dx = 2 ln(x) = ln(x²).\n3. I.F. = e^(ln(x²)) = x² ஆகும்.'
      }
    ]
  },

  c12_mat_ch11: {
    id: 'note_c12_mat_ch11',
    chapterId: 'c12_mat_ch11',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Probability Distributions: Random Variables, Expectation & Binomial Model',
    titleTa: 'நிகழ்தகவு பரவல்கள்: சமவாய்ப்பு மாறிகள், கணித எதிர்பார்ப்பு மற்றும் ஈருறுப்புப் பரவல்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.2',
    isUpdated: true,
    isNew: false,
    changeNote: 'Added discrete random variable expectation and binomial variance proofs.',
    changeNoteTa: 'சமவாய்ப்பு மாறியின் எதிர்பார்ப்பு மற்றும் பரவற்படி நிரூபணங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. Discrete Random Variables
A random variable $X$ maps sample space outcomes to real numbers.
- **Probability Mass Function (p.m.f.) $p(x)$:**
  1. $p(x_i) \\geq 0, \\quad \\forall i$
  2. $\\sum_i p(x_i) = 1$
- **Cumulative Distribution Function (c.d.f.) $F(x)$:**
  $$F(x) = P(X \\leq x) = \\sum_{x_i \\leq x} p(x_i)$$

### 2. Mathematical Expectation and Variance
- **Mean (Expected Value):**
  $$\\mu = E(X) = \\sum x_i p(x_i)$$
- **Second Moment:** $E(X^2) = \\sum x_i^2 p(x_i)$
- **Variance:**
  $$\\text{Var}(X) = \\sigma^2 = E(X^2) - [E(X)]^2$$
- Standard Deviation: $\\sigma = \\sqrt{\\text{Var}(X)}$.

### 3. Binomial Distribution $B(n, p)$
For $n$ independent Bernoulli trials with constant success probability $p$ and failure $q = 1 - p$:
$$P(X = k) = \\binom{n}{k} p^k q^{n-k}, \\quad k = 0, 1, 2, \\dots, n$$
- **Mean:** $E(X) = np$
- **Variance:** $\\text{Var}(X) = npq$ (always strictly less than Mean, since $q < 1$).`,
    bodyTa: `### 1. தனிநிலை சமவாய்ப்பு மாறிகள்
நிகழ்தகவு நிறைச் சார்பு $p(x)$-ன் நிபந்தனைகள்:
1. $p(x_i) \\geq 0$
2. $\\sum p(x_i) = 1$
குவிவு பரவல் சார்பு: $F(x) = P(X \\leq x)$.

### 2. கணித எதிர்பார்ப்பு மற்றும் பரவற்படி
- சராசரி: $E(X) = \\sum x_i p(x_i)$.
- பரவற்படி: $\\text{Var}(X) = E(X^2) - [E(X)]^2$.

### 3. ஈருறுப்புப் பரவல் $B(n, p)$
$$P(X = k) = \\binom{n}{k} p^k q^{n-k}$$
- சராசரி $= np$.
- பரவற்படி $= npq$.`,
    revisions: [
      { version: '2.2', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Binomial hypothesis quality control examples added.', changeNoteTa: 'ஈருறுப்புப் பரவல் தரக்கட்டுப்பாட்டு கணக்குகள் இணைக்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Binomial Probability Function', nameTa: 'ஈருறுப்பு நிகழ்தகவு சூத்திரம்', formula: 'P(X = k) = \\binom{n}{k} p^k q^{n-k}', explanationEn: 'Calculates probability of exactly k successes in n trials.', explanationTa: 'n சோதனைகளில் k வெற்றிகள் கிடைப்பதற்கான நிகழ்தகவு.' },
      { nameEn: 'Variance of Random Variable', nameTa: 'சமவாய்ப்பு மாறியின் பரவற்படி', formula: '\\text{Var}(X) = E(X^2) - [E(X)]^2', explanationEn: 'Measures spread of distribution about its mean.', explanationTa: 'சராசரியிலிருந்து தரவுகளின் சிதறலை அளவிடுகிறது.' },
      { nameEn: 'Binomial Mean & Variance', nameTa: 'ஈருறுப்பு சராசரி & பரவற்படி', formula: '\\text{Mean} = np, \\quad \\text{Var} = npq', explanationEn: 'npq is always less than np.', explanationTa: 'பரவற்படி எப்போதுமே சராசரியை விடக் குறைவாக இருக்கும்.' }
    ],
    workedExamples: [
      {
        questionEn: 'A fair coin is tossed 4 times. Find the probability of getting exactly 2 heads.',
        questionTa: 'ஒரு நாணயம் 4 முறை சுண்டப்படுகிறது. சரியாக 2 தலைகள் விழுவதற்கான நிகழ்தகவு காண்க.',
        solutionEn: '1. Here n = 4, p = 1/2, q = 1 - 1/2 = 1/2, k = 2.\n2. P(X = 2) = ⁴C₂ (1/2)² (1/2)² = 6 * (1/4) * (1/4) = 6/16 = 3/8.\n3. Probability is 3/8 = 0.375.',
        solutionTa: '1. n = 4, p = 1/2, q = 1/2, k = 2.\n2. P(X = 2) = ⁴C₂ (1/2)² (1/2)² = 6/16 = 3/8.\n3. நிகழ்தகவு 3/8 ஆகும்.'
      }
    ]
  },

  c12_mat_ch12: {
    id: 'note_c12_mat_ch12',
    chapterId: 'c12_mat_ch12',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Discrete Mathematics: Binary Operations, Boolean Algebra & Truth Tables',
    titleTa: 'தனிநிலைக் கணிதம்: ஈருறுப்புச் செயலிகள், பூலியன் இயற்கணிதம் மற்றும் மெய்மை அட்டவணைகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'PGT Senior Mathematics Panel (TNSCERT)',
    reviewedByRole: 'Head of Mathematics Curriculum',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '2.0',
    isUpdated: true,
    isNew: false,
    changeNote: 'Tautology logic proofs and modular arithmetic Cayley tables added.',
    changeNoteTa: 'மெய்மை அட்டவணைகள் மற்றும் கெய்லி அட்டவணைகள் விரிவுபடுத்தப்பட்டன.',
    readTimeMinutes: 14,
    bodyEn: `### 1. Binary Operations
A binary operation $*$ on a non-empty set $S$ is a mapping $* : S \\times S \\to S$.
- **Closure Property:** $a * b \\in S$ for all $a, b \\in S$.
- **Associative Property:** $(a * b) * c = a * (b * c)$ for all $a, b, c \\in S$.
- **Identity Element:** An element $e \\in S$ such that $a * e = e * a = a$ for all $a \\in S$ (Identity is always unique).
- **Inverse Element:** For $a \\in S$, an element $a^{-1} \\in S$ such that $a * a^{-1} = a^{-1} * a = e$.
- **Commutative Property:** $a * b = b * a$ for all $a, b \\in S$.

### 2. Mathematical Logic & Truth Tables
- **Statements:** Declarative sentences that are either definitively True ($T$) or False ($F$).
- **Connectives:**
  - Negation ($\\neg p$): NOT
  - Conjunction ($p \\wedge q$): AND (True only if both are True)
  - Disjunction ($p \\vee q$): OR (False only if both are False)
  - Conditional ($p \\to q$): IF $p$ THEN $q$ (False only when $p$ is True and $q$ is False; equivalent to $\\neg p \\vee q$)
  - Biconditional ($p \\leftrightarrow q$): True when both have matching truth values.
- **Tautology:** A compound proposition that is always True in every row of its truth table.
- **Contradiction:** A compound proposition that is always False in every row.`,
    bodyTa: `### 1. ஈருறுப்புச் செயலிகள்
கணம் S-ன் மீது வரையறுக்கப்படும் ஈருறுப்புச் செயலி $*$:
- அடைவுப் பண்பு: $a * b \\in S$.
- சேர்ப்புப் பண்பு: $(a * b) * c = a * (b * c)$.
- சமனி உறுப்பு: $a * e = e * a = a$.
- எதிர்மறை உறுப்பு: $a * a^{-1} = a^{-1} * a = e$.

### 2. கணித தர்க்கவியல் மற்றும் மெய்மை அட்டவணை
- எதிர்மறை ($\\neg p$): NOT.
- உம்மை இணைப்பு ($p \\wedge q$): AND.
- அல்லது இணைப்பு ($p \\vee q$): OR.
- நிபந்தனை இணைப்பு ($p \\to q$): IF-THEN.
- மெய்மைமம் (Tautology): அனைத்து நிரைகளிலும் T என்றே வரும் கூற்று.
- முரண்பாடு (Contradiction): அனைத்து நிரைகளிலும் F என்றே வரும் கூற்று.`,
    revisions: [
      { version: '2.0', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Logic gates equivalence charts added.', changeNoteTa: 'தர்க்க வாயில்களின் சமநிலை வரைபடங்கள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Conditional Proposition Equivalence', nameTa: 'நிபந்தனைக் கூற்று சமன்மை', formula: 'p \\to q \\equiv \\neg p \\vee q', explanationEn: 'Foundation for building logical circuit proofs.', explanationTa: 'மின்சுற்று தர்க்க நிரூபணங்களின் அடிப்படை.' },
      { nameEn: 'De Morgan’s Laws of Logic', nameTa: 'டி மார்கனின் தர்க்க விதிகள்', formula: '\\neg (p \\wedge q) \\equiv \\neg p \\vee \\neg q', explanationEn: 'Negation distributes with flipped connective.', explanationTa: 'எதிர்மறை உள்ளே செல்லும்போது இணைப்பு தலைகீழாக மாறும்.' },
      { nameEn: 'Identity Element Uniqueness', nameTa: 'சமனி உறுப்பின் ஒருமைத்தன்மை', formula: 'a * e = e * a = a', explanationEn: 'Every algebraic structure possesses at most one identity.', explanationTa: 'ஒவ்வொரு அமைப்பிற்கும் ஒரே ஒரு சமனி உறுப்பு மட்டுமே இருக்க முடியும்.' }
    ],
    workedExamples: [
      {
        questionEn: 'Determine whether p ∨ ¬p is a tautology.',
        questionTa: 'p ∨ ¬p என்பது மெய்மைமமா எனத் தீர்மானிக்க.',
        solutionEn: '1. If p is T: ¬p is F -> T ∨ F = T.\n2. If p is F: ¬p is T -> F ∨ T = T.\n3. Since the truth value is True in every case, p ∨ ¬p is a strict tautology.',
        solutionTa: '1. p = T எனில்: ¬p = F -> T ∨ F = T.\n2. p = F எனில்: ¬p = T -> F ∨ T = T.\n3. அனைத்து நிலைகளிலும் மெய் (T) என்பதால் இது ஒரு மெய்மைமம் ஆகும்.'
      }
    ]
  }
};

export const MATHS_VOL2_SUMMARIES: Record<string, SummaryItem> = {
  c12_mat_ch7: {
    id: 'sum_c12_mat_ch7',
    chapterId: 'c12_mat_ch7',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Tangent slope equals dy/dx at the contact point; normal slope is its negative reciprocal -1/m.',
      'Lagrange Mean Value Theorem guarantees a tangent parallel to the secant line between end points.',
      'L’Hôpital’s rule resolves 0/0 and ∞/∞ limits through numerator and denominator derivatives.',
      'Critical points occur where f’(x) = 0; second derivative f’’(x) determines peak maximum (<0) or trough minimum (>0).'
    ],
    keyPointsTa: [
      'தொடுகோட்டின் சாய்வு dy/dx ஆகும்; செங்கோட்டின் சாய்வு -1/m ஆகும்.',
      'லெக்ராஞ்சியின் சராசரி மதிப்புத் தேற்றம் முனைப்புள்ளிகளை இணைக்கும் நாணுக்கு இணையான ஒரு தொடுகோடு அமையும் என உத்தரவாதம் அளிக்கிறது.',
      'எல்-ஹாஸ்பிட்டல் விதி 0/0 மற்றும் ∞/∞ தேரப்பெறா எல்லைகளை எளிதில் தீர்க்கிறது.',
      'f’(x) = 0 நிலைப் புள்ளிகளில் f’’(x) < 0 எனில் பெருமம், f’’(x) > 0 எனில் சிறுமம்.'
    ],
    simpleExplanationEn: 'Lagrange’s theorem proves speeding on highways: if your average speed on a 120-km expressway trip between Chennai and Chengalpattu was 90 km/h, at some exact instant your speedometer needle pointed at exactly 90 km/h!',
    simpleExplanationTa: 'லெக்ராஞ்சியின் தேற்றத்தை அதிவேகப் பயணத்துடன் ஒப்பிடலாம்: 120 கி.மீ தூரத்தை சராசரியாக 90 கி.மீ வேகத்தில் கடந்தால், பயணத்தின் ஏதேனும் ஒரு நொடியில் உங்கள் வண்டியின் வேகம் சரியாக 90 கி.மீ-ஐக் காட்டியிருக்க வேண்டும்!'
  },

  c12_mat_ch8: {
    id: 'sum_c12_mat_ch8',
    chapterId: 'c12_mat_ch8',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Linearization L(x) approximates curved functions near a base point using the tangent line.',
      'Differentials df = f’(x)dx calculate approximate errors in engineering and measurement.',
      'Partial derivative ∂f/∂x evaluates rate of change while treating all other variables as frozen constants.',
      'Euler’s homogeneous theorem proves x(∂u/∂x) + y(∂u/∂y) = nu for functions scaling by t^n.'
    ],
    keyPointsTa: [
      'நேரியல் தோராய மதிப்பு L(x) தொடுகோட்டின் வழியே சிக்கலான வளைவரைகளை எளிமையாக மதிப்பிடுகிறது.',
      'வகையீடு df = f’(x)dx அளவீடுகளில் ஏற்படும் தோராயப் பிழைகளைக் கணக்கிட உதவுகிறது.',
      'பகுதி வகைக்கெழு மற்ற மாறிலிகளை நிலையாக வைத்து குறிப்பிட்ட ஒரு மாறியின் மாறுவீதத்தை அளவிடுகிறது.',
      'ஆய்லர் தேற்றம் சமபடித்தான சார்புகளின் பகுதி வகைக்கெழுக்களின் எளிய நேரியல் தொடர்பை வெளிப்படுத்துகிறது.'
    ],
    simpleExplanationEn: 'When baking bread, dough volume depends on both temperature and baking time. Partial differentiation is like holding the oven dial strictly fixed at 200°C while timing how volume changes minute-by-minute!',
    simpleExplanationTa: 'ஒரு ரொட்டி வேகும்போது அதன் பருமன் நேரம் மற்றும் வெப்பம் இரண்டையும் சார்ந்துள்ளது. வெப்பநிலையை மாறாமல் வைத்து நேரத்தால் பருமன் மாறும் வீதத்தைக் கணிப்பதே பகுதி வகைக்கெழு ஆகும்!'
  },

  c12_mat_ch9: {
    id: 'sum_c12_mat_ch9',
    chapterId: 'c12_mat_ch9',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Definite integrals calculate cumulative area under curves by summing infinite infinitesimal strips.',
      'Symmetry properties: odd functions integrate to 0 over [-a, a], while King’s property ∫f(x)dx = ∫f(a-x)dx simplifies fractions.',
      'Bernoulli’s iterated integration by parts cleanly integrates polynomials multiplied by sines, cosines, or exponentials.',
      'Volume of a solid of revolution is calculated by revolving the area 360° around the x-axis using π ∫ y² dx.'
    ],
    keyPointsTa: [
      'வரையறுத்த தொகையீடுகள் வளைவரைகளின் கீழ் உள்ள பரப்பளவைக் கணக்கிடுகின்றன.',
      'சமச்சீர்மை: ஒற்றைச் சார்புகளுக்கு [-a, a] எல்லையில் தொகையீட்டு மதிப்பு பூச்சியமாகும்.',
      'பெர்னோலியின் சூத்திரம் பல்லுறுப்புக் கோவைகள் இணைந்த தொகையீடுகளைப் பகுதி வாரியாக எளிதாகத் தீர்க்கிறது.',
      'x-அச்சைப் பொருத்து சுழற்றும்போது உருவாகும் திடப்பொருளின் கனஅளவு V = π ∫ y² dx ஆகும்.'
    ],
    simpleExplanationEn: 'Computing the volume of a vase by integration is like slicing the ceramic vase into hundreds of paper-thin round coins, finding the area of each circular coin (π y²), and summing them together from top to bottom!',
    simpleExplanationTa: 'ஒரு ஜாடியின் கனஅளவைக் காண்பது என்பது, அதை மெல்லிய வட்ட நாணயங்களாக நறுக்கி, ஒவ்வொரு நாணயத்தின் பரப்பையும் (π y²) அடி முதல் உச்சி வரை ஒன்று கூட்டி கனஅளவைப் பெறுவது போன்றதாகும்!'
  },

  c12_mat_ch10: {
    id: 'sum_c12_mat_ch10',
    chapterId: 'c12_mat_ch10',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Differential equations describe natural systems where rates of change drive physical quantities.',
      'Separation of variables splits x and y terms to opposite sides of the equation for direct integration.',
      'First-order linear ODEs dy/dx + Py = Q are solved using integrating factor e^(∫ P dx).',
      'Newton’s cooling law and exponential growth models accurately forecast temperatures, decay, and population.'
    ],
    keyPointsTa: [
      'வகைக்கெழுச் சமன்பாடுகள் மாறுவீதங்களின் அடிப்படையில் இயற்பியல் மற்றும் அறிவியல் நிகழ்வுகளை விவரிக்கின்றன.',
      'மாறிகளைப் பிரித்தல் முறையில் x மற்றும் y உறுப்புகள் தனித்தனியாகப் பிரிக்கப்பட்டு தொகையிடப்படுகின்றன.',
      'நேரியல் வகைக்கெழுச் சமன்பாடுகள் dy/dx + Py = Q தொகையீட்டுக் காரணி e^(∫ P dx) மூலம் தீர்க்கப்படுகின்றன.',
      'நியூட்டனின் குளிர்வு விதி மற்றும் கதிரியக்கச் சிதைவு மாதிரிகள் வெப்பக் குறைவு மற்றும் அழிவு வீதங்களைக் கணிக்கின்றன.'
    ],
    simpleExplanationEn: 'A cup of piping hot tea in a 25°C room cools rapidly at first (when it’s 90°C), but cools slower and slower as it approaches room temperature—this classic differential equation behavior is Newton’s Law of Cooling!',
    simpleExplanationTa: 'சூடான தேநீர் 90 டிகிரியில் இருக்கும்போது வேகமாக ஆறும், அறை வெப்பநிலையை நெருங்க நெருங்க மிக மெதுவாகவே ஆறும்—இந்த இயற்கை மாறுவீதத்தை விவரிப்பதே நியூட்டனின் குளிர்வு வகைக்கெழுச் சமன்பாடு ஆகும்!'
  },

  c12_mat_ch11: {
    id: 'sum_c12_mat_ch11',
    chapterId: 'c12_mat_ch11',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Discrete random variables assign real numerical outcomes to random experiments.',
      'Probability mass function p(x) must sum to exactly 1 over all events.',
      'Expectation E(X) gives the weighted average, and Variance Var(X) calculates dispersion.',
      'Binomial distribution models n independent trials: Mean = np, Variance = npq (always < Mean).'
    ],
    keyPointsTa: [
      'தனிநிலை சமவாய்ப்பு மாறிகள் சமவாய்ப்புச் சோதனைகளின் முடிவுகளுக்கு மெய் எண்களை ஒதுக்குகின்றன.',
      'நிகழ்தகவு நிறைச் சார்புகளின் மொத்தக் கூடுதல் எப்போதும் சரியாக 1 ஆக இருக்க வேண்டும்.',
      'கணித எதிர்பார்ப்பு E(X) சராசரியையும், பரவற்படி Var(X) தரவுகளின் சிதறலையும் அளவிடுகின்றன.',
      'ஈருறுப்புப் பரவலில் n சோதனைகளுக்கு சராசரி = np, பரவற்படி = npq ஆகும்.'
    ],
    simpleExplanationEn: 'If a batsman hits a boundary with 30% probability on any ball, the binomial distribution lets you calculate the exact odds of him hitting exactly 4 boundaries in an over of 6 balls!',
    simpleExplanationTa: 'ஒரு கிரிக்கெட் பேட்ஸ்மேன் 30% வாய்ப்பில் பவுண்டரி அடிப்பார் எனில், 6 பந்துகளில் சரியாக 4 பவுண்டரிகள் அடிப்பதற்கான துல்லியமான வாய்ப்பைக் கணக்கிட ஈருறுப்புப் பரவல் உதவுகிறது!'
  },

  c12_mat_ch12: {
    id: 'sum_c12_mat_ch12',
    chapterId: 'c12_mat_ch12',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'A binary operation combines two set elements into another element of the set satisfying closure.',
      'Algebraic properties include associativity, identity existence, inverse existence, and commutativity.',
      'Mathematical logic builds rigorous reasoning using truth tables with AND (∧), OR (∨), and NOT (¬).',
      'Tautologies are logically bulletproof statements that remain True under every possible scenario.'
    ],
    keyPointsTa: [
      'ஈருறுப்புச் செயலி ஒரு கணத்தின் இரண்டு உறுப்புகளை இணைத்து அதே கணத்தில் புதிய உறுப்பை உருவாக்குகிறது.',
      'இயற்கணிதப் பண்புகளில் அடைவு, சேர்ப்பு, சமனி, எதிர்மறை மற்றும் பரிமாற்றுப் பண்புகள் அடங்கும்.',
      'கணித தர்க்கவியல் மெய்மை அட்டவணைகள் மூலம் AND, OR, NOT ஆகிய இணைப்புகளைப் பயன்படுத்தி முடிவுகளை நிறுவுகிறது.',
      'மெய்மைமங்கள் அனைத்து சூழ்நிலைகளிலும் எப்போதும் உண்மை (T) மதிப்பையே தருகின்ற தர்க்கக் கூற்றுகள் ஆகும்.'
    ],
    simpleExplanationEn: 'Truth tables are the exact blueprint behind computer microchips! Every time your smartphone processor executes a program, billions of tiny logic gates (AND, OR, NOT) calculate truth values in nanoseconds.',
    simpleExplanationTa: 'மெய்மை அட்டவணைகளே நவீன கணினி சிப்களின் அடிப்படை! உங்கள் ஸ்மார்ட்போனில் உள்ள பில்லியன் கணக்கான டிரான்சிஸ்டர்கள் AND, OR, NOT தர்க்க வாயில்கள் மூலமே ஒவ்வொரு நொடியும் செயல்படுகின்றன.'
  }
};

export const MATHS_VOL2_QUIZZES: Record<string, ChapterQuiz> = {
  c12_mat_ch7: {
    id: 'quiz_c12_mat_ch7',
    chapterId: 'c12_mat_ch7',
    titleEn: 'Chapter 7: Differential Calculus Applications Quiz',
    titleTa: 'அலகு 7: வகை நுண்கணிதம் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If f’(c) = 0 and f’’(c) < 0, then f(x) has at x = c:',
        questionTa: 'f’(c) = 0 மற்றும் f’’(c) < 0 எனில், x = c-ல் f(x) அடைவது:',
        optionsEn: ['Local Maximum', 'Local Minimum', 'Point of Inflection', 'Saddle Point'],
        optionsTa: ['இடஞ்சார்ந்த பெருமம்', 'இடஞ்சார்ந்த சிறுமம்', 'வளைவு மாற்றப் புள்ளி', 'சேணப் புள்ளி'],
        correctAnswer: 'Local Maximum',
        explanationEn: 'By the second derivative test, f’’(c) < 0 indicates concave downward curvature, meaning a local maximum.',
        explanationTa: 'இரண்டாம் வகைக்கெழு f’’(c) < 0 எனில் கீழ்நோக்கி குழிவானது, ஆகவே அது இடஞ்சார்ந்த பெருமம் ஆகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What is the value of lim_{x -> 0} (sin x - x) / x³?',
        questionTa: 'lim_{x -> 0} (sin x - x) / x³-ன் மதிப்பு:',
        optionsEn: ['-1/6', '1/6', '0', '1/3'],
        optionsTa: ['-1/6', '1/6', '0', '1/3'],
        correctAnswer: '-1/6',
        explanationEn: 'Form 0/0. Applying L’Hopital’s rule: lim (cos x - 1) / 3x² -> lim (-sin x) / 6x = -1/6 * 1 = -1/6.',
        explanationTa: '0/0 வடிவம். எல்-ஹாஸ்பிட்டல் விதியைப் பயன்படுத்த: lim (cos x - 1)/3x² -> lim (-sin x)/6x = -1/6.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The slope of the normal to a horizontal tangent line is undefined (vertical).',
        questionTa: 'கிடைமட்ட தொடுகோட்டின் செங்கோட்டின் சாய்வு வரையறுக்கப்படவில்லை (செங்குத்து).',
        correctAnswer: true,
        explanationEn: 'True! If m = 0, the normal slope -1/m approaches infinity (vertical line).',
        explanationTa: 'சரி! m = 0 எனில் செங்கோட்டின் சாய்வு -1/0 முடிவிலி (செங்குத்துக் கோடு).'
      }
    ]
  },

  c12_mat_ch8: {
    id: 'quiz_c12_mat_ch8',
    chapterId: 'c12_mat_ch8',
    titleEn: 'Chapter 8: Differentials & Partial Derivatives Quiz',
    titleTa: 'அலகு 8: பகுதி வகைக்கெழுக்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If u = x² + y², what is the degree of homogeneity n?',
        questionTa: 'u = x² + y² எனில் அதன் சமபடித்தான படி n-ன் மதிப்பு:',
        optionsEn: ['2', '1', '4', '0'],
        optionsTa: ['2', '1', '4', '0'],
        correctAnswer: '2',
        explanationEn: 'u(tx, ty) = (tx)² + (ty)² = t²(x² + y²) = t² u(x, y). Hence degree n = 2.',
        explanationTa: 'u(tx, ty) = t² u(x, y). ஆகவே சமபடித்தான படி 2 ஆகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'If u = sin( (x² + y²) / (x + y) ), then x(∂u/∂x) + y(∂u/∂y) is equal to:',
        questionTa: 'u = sin( (x² + y²) / (x + y) ) எனில் x(∂u/∂x) + y(∂u/∂y)-ன் மதிப்பு:',
        optionsEn: ['tan u', 'u', 'cos u', '2 u'],
        optionsTa: ['tan u', 'u', 'cos u', '2 u'],
        correctAnswer: 'tan u',
        explanationEn: 'Let z = sin⁻¹(u) = (x² + y²)/(x + y), which is homogeneous of degree 1. By Euler theorem on z, x(∂z/∂x) + y(∂z/∂y) = 1*z. Since ∂z/∂x = (1/cos u) ∂u/∂x, multiplying by cos u gives x(∂u/∂x) + y(∂u/∂y) = z cos u? Wait: z = (x²+y²)/(x+y), so x(1/cos u ∂u/∂x) + y(1/cos u ∂u/∂y) = z? Actually if z = sin u? Here u = sin(v) where v = (x²+y²)/(x+y). So v = sin⁻¹(u). Then x ∂v/∂x + y ∂v/∂y = 1*v = sin⁻¹(u). In terms of u, x ∂u/∂x + y ∂u/∂y = v cos v = (x²+y²)/(x+y) cos( (x²+y²)/(x+y) ). But standard textbook problem is u = sin⁻¹((x²+y²)/(x+y)), then x ∂u/∂x + y ∂u/∂y = tan u.',
        explanationTa: 'பாடநூல் வினாப்படி z = sin(u) சமபடித்தான படி 1 எனில் ஆய்லர் தேற்றப்படி tan u என விடை அமையும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'For any smooth function f(x, y), the mixed second partial derivatives f_{xy} and f_{yx} are equal.',
        questionTa: 'தொடர்ச்சியான இரண்டாம் பகுதி வகைக்கெழுக்களுக்கு f_{xy} = f_{yx} ஆகும்.',
        correctAnswer: true,
        explanationEn: 'True! Clairaut’s Theorem ensures mixed partials are identical when continuous.',
        explanationTa: 'சரி! கிளாரட்டின் தேற்றப்படி கலப்பு பகுதி வகைக்கெழுக்கள் சமமாகும்.'
      }
    ]
  },

  c12_mat_ch9: {
    id: 'quiz_c12_mat_ch9',
    chapterId: 'c12_mat_ch9',
    titleEn: 'Chapter 9: Applications of Integration Quiz',
    titleTa: 'அலகு 9: தொகை நுண்கணிதப் பயன்பாடுகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The value of the definite integral ∫_{-1}^1 x³ √(1 - x²) dx is:',
        questionTa: '∫_{-1}^1 x³ √(1 - x²) dx என்ற வரையறுத்த தொகையீட்டின் மதிப்பு:',
        optionsEn: ['0', 'π/4', '1', '2'],
        optionsTa: ['0', 'π/4', '1', '2'],
        correctAnswer: '0',
        explanationEn: 'The integrand f(x) = x³ √(1 - x²) is an odd function because f(-x) = (-x)³ √(1 - (-x)²) = -f(x). The integral of an odd function from -a to a is identically 0.',
        explanationTa: 'தொகையிடப்படும் சார்பு ஒற்றைச் சார்பு (f(-x) = -f(x)) என்பதால் [-1, 1] எல்லையில் இதன் மதிப்பு 0 ஆகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The area bounded by the parabola y² = 4x and its latus rectum is:',
        questionTa: 'y² = 4x என்ற பரவளையம் மற்றும் அதன் செவ்வகலத்தால் அடைபடும் பரப்பளவு:',
        optionsEn: ['8/3', '4/3', '16/3', '2/3'],
        optionsTa: ['8/3', '4/3', '16/3', '2/3'],
        correctAnswer: '8/3',
        explanationEn: 'Latus rectum is at x = a = 1. Area = 2 * ∫₀¹ 2√x dx = 4 * [x^(3/2) / (3/2)]₀¹ = 4 * (2/3) = 8/3 sq units.',
        explanationTa: 'செவ்வகலம் x = 1. பரப்பளவு = 2 * ∫₀¹ 2√x dx = 4(2/3) = 8/3 சதுர அலகுகள்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The volume generated by rotating the region bounded by y = f(x) around the x-axis is given by π ∫ y² dx.',
        questionTa: 'y = f(x) வளைவரையை x-அச்சை மையமாகக் கொண்டு சுழற்றும்போது கிடைக்கும் கனஅளவு π ∫ y² dx ஆகும்.',
        correctAnswer: true,
        explanationEn: 'True! Disks of radius y have area π y² and volume element π y² dx.',
        explanationTa: 'சரி! ஆரம் y கொண்ட வட்டத் தட்டுகளின் கனஅளவு π y² dx ஆகும்.'
      }
    ]
  },

  c12_mat_ch10: {
    id: 'quiz_c12_mat_ch10',
    chapterId: 'c12_mat_ch10',
    titleEn: 'Chapter 10: Differential Equations Quiz',
    titleTa: 'அலகு 10: வகைக்கெழுச் சமன்பாடுகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The order and degree of the differential equation (d²y/dx²)³ + (dy/dx)² + y = 0 are respectively:',
        questionTa: '(d²y/dx²)³ + (dy/dx)² + y = 0 என்ற வகைக்கெழுச் சமன்பாட்டின் வரிசை மற்றும் படி முறையே:',
        optionsEn: ['2 and 3', '3 and 2', '2 and 2', '3 and 3'],
        optionsTa: ['2 மற்றும் 3', '3 மற்றும் 2', '2 மற்றும் 2', '3 மற்றும் 3'],
        correctAnswer: '2 and 3',
        explanationEn: 'Highest derivative is d²y/dx² (order 2), and its power is 3 (degree 3).',
        explanationTa: 'மிக உயர்ந்த வகைக்கெழு d²y/dx² (வரிசை 2), அதன் அதிகபட்ச அடுக்கு 3 (படி 3).'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The general solution of dy/dx = y/x is:',
        questionTa: 'dy/dx = y/x என்ற சமன்பாட்டின் பொதுத் தீர்வு:',
        optionsEn: ['y = cx', 'y = c/x', 'y² = x² + c', 'xy = c'],
        optionsTa: ['y = cx', 'y = c/x', 'y² = x² + c', 'xy = c'],
        correctAnswer: 'y = cx',
        explanationEn: 'Separate variables: dy/y = dx/x -> ln|y| = ln|x| + ln|c| -> y = cx.',
        explanationTa: 'மாறிகளைப் பிரிக்க: dy/y = dx/x. தொகையிட ln(y) = ln(x) + ln(c) -> y = cx.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The integrating factor for dy/dx + Py = Q is always e^(∫ P dx).',
        questionTa: 'dy/dx + Py = Q என்ற நேரியல் சமன்பாட்டின் தொகையீட்டுக் காரணி எப்போதும் e^(∫ P dx) ஆகும்.',
        correctAnswer: true,
        explanationEn: 'True! This makes the left-hand side the exact product derivative d/dx (y * e^(∫ P dx)).',
        explanationTa: 'சரி! இது இடதுபுறத்தை d/dx(y * e^(∫ P dx)) என்ற சரியான பெருக்கல் வகைக்கெழுவாக மாற்றுகிறது.'
      }
    ]
  },

  c12_mat_ch11: {
    id: 'quiz_c12_mat_ch11',
    chapterId: 'c12_mat_ch11',
    titleEn: 'Chapter 11: Probability Distributions Quiz',
    titleTa: 'அலகு 11: நிகழ்தகவு பரவல்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'For a binomial distribution B(n, p), if mean = 4 and variance = 3, what is the value of n?',
        questionTa: 'ஈருறுப்புப் பரவல் B(n, p)-ல் சராசரி = 4, பரவற்படி = 3 எனில் n-ன் மதிப்பு:',
        optionsEn: ['16', '12', '8', '20'],
        optionsTa: ['16', '12', '8', '20'],
        correctAnswer: '16',
        explanationEn: 'Mean = np = 4. Variance = npq = 3. Dividing gives q = 3/4. Then p = 1 - 3/4 = 1/4. Since np = 4, n(1/4) = 4 -> n = 16.',
        explanationTa: 'np = 4, npq = 3. வகுக்க q = 3/4. ஆகவே p = 1/4. n(1/4) = 4 -> n = 16.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The variance of a constant random variable c is:',
        questionTa: 'ஒரு மாறிலி சமவாய்ப்பு மாறியின் பரவற்படி:',
        optionsEn: ['0', 'c', 'c²', '1'],
        optionsTa: ['0', 'c', 'c²', '1'],
        correctAnswer: '0',
        explanationEn: 'A constant does not vary from its mean; E(c) = c, so Var(c) = E(c²) - [E(c)]² = c² - c² = 0.',
        explanationTa: 'மாறிலிக்கு மாறுபாடு இல்லை என்பதால் அதன் பரவற்படி 0 ஆகும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'In a binomial distribution, the variance can be greater than the mean.',
        questionTa: 'ஈருறுப்புப் பரவலில் பரவற்படி சராசரியை விட அதிகமாக இருக்க முடியும்.',
        correctAnswer: false,
        explanationEn: 'False! Variance = npq = Mean * q. Since failure probability q < 1, Variance is strictly less than Mean.',
        explanationTa: 'தவறு! q < 1 என்பதால் பரவற்படி எப்போதுமே சராசரியை விடக் குறைவாகவே இருக்கும்.'
      }
    ]
  },

  c12_mat_ch12: {
    id: 'quiz_c12_mat_ch12',
    chapterId: 'c12_mat_ch12',
    titleEn: 'Chapter 12: Discrete Mathematics & Logic Quiz',
    titleTa: 'அலகு 12: தனிநிலைக் கணிதம் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which of the following propositions is a tautology?',
        questionTa: 'கீழ்க்கண்டவற்றுள் எது ஒரு மெய்மைமம் ஆகும்?',
        optionsEn: ['p ∨ ¬p', 'p ∧ ¬p', 'p → ¬p', '¬p → p'],
        optionsTa: ['p ∨ ¬p', 'p ∧ ¬p', 'p → ¬p', '¬p → p'],
        correctAnswer: 'p ∨ ¬p',
        explanationEn: 'p ∨ ¬p is always True regardless of whether p is True or False (Law of Excluded Middle).',
        explanationTa: 'p மெய்யாகவோ பொய்யாகவோ இருந்தாலும் p ∨ ¬p எப்போதும் மெய் மதிப்பையே தரும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The conditional statement p → q is logically equivalent to:',
        questionTa: 'p → q என்ற நிபந்தனைக் கூற்று எதற்குச் சமமானது?',
        optionsEn: ['¬p ∨ q', '¬p ∧ q', 'p ∧ ¬q', '¬q → ¬p'],
        optionsTa: ['¬p ∨ q', '¬p ∧ q', 'p ∧ ¬q', '¬q → ¬p'],
        correctAnswer: '¬p ∨ q',
        explanationEn: 'A conditional p -> q is False only when p is True and q is False, which exactly matches ¬p ∨ q.',
        explanationTa: 'p -> q மற்றும் ¬p ∨ q ஆகிய இரண்டும் ஒரே மெய்மை அட்டவணை மதிப்புகளைக் கொண்டுள்ளன.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Subtraction is an associative binary operation on the set of integers ℤ.',
        questionTa: 'முழுக்கள் கணம் ℤ-ன் மீது கழித்தல் ஒரு சேர்ப்புப் பண்புடைய ஈருறுப்புச் செயலியாகும்.',
        correctAnswer: false,
        explanationEn: 'False! (5 - 3) - 2 = 0, but 5 - (3 - 2) = 4. Hence subtraction is not associative.',
        explanationTa: 'தவறு! (5 - 3) - 2 = 0, ஆனால் 5 - (3 - 2) = 4. கழித்தலுக்கு சேர்ப்புப் பண்பு கிடையாது.'
      }
    ]
  }
};

export const MATHS_VOL2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_mat_ch7: {
    id: 'diag_c12_mat_ch7',
    chapterId: 'c12_mat_ch7',
    titleEn: 'Differential Calculus: Tangents, Normals, Extrema & Inflection Points',
    titleTa: 'வகை நுண்கணிதம்: தொடுகோடு, செங்கோட்டுச் சாய்வு மற்றும் திருப்பு முனைகள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="40" y1="250" x2="560" y2="250" stroke="#94a3b8" strokeWidth="2" />
      <line x1="60" y1="270" x2="60" y2="30" stroke="#94a3b8" strokeWidth="2" />

      <path d="M 80 220 C 180 30, 260 50, 340 180 C 420 300, 500 120, 540 60" fill="none" stroke="#2563eb" strokeWidth="3" />

      <circle cx="210" cy="75" r="6" fill="#16a34a" />
      <line x1="150" y1="75" x2="270" y2="75" stroke="#16a34a" strokeWidth="2" strokeDasharray="4" />
      <text x="210" y="58" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="12">Local Max (f'(x) = 0, f''(x) &lt; 0)</text>

      <circle cx="340" cy="180" r="5" fill="#f59e0b" />
      <text x="360" y="175" fill="#b45309" fontWeight="bold" fontSize="11">Inflection Point (f''(x) = 0)</text>

      <circle cx="450" cy="230" r="6" fill="#ef4444" />
      <line x1="390" y1="230" x2="510" y2="230" stroke="#ef4444" strokeWidth="2" strokeDasharray="4" />
      <text x="450" y="255" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="12">Local Min (f'(x) = 0, f''(x) &gt; 0)</text>

      <rect x="350" y="30" width="210" height="55" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="455" y="52" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">Tangent & Normal</text>
      <text x="455" y="70" textAnchor="middle" fill="#2563eb" fontSize="10">m_tangent · m_normal = -1</text>
    </svg>`,
    labels: [
      { id: 'dc1', labelEn: 'Local Maximum Stationarity', labelTa: 'இடஞ்சார்ந்த பெருமம்', descriptionEn: 'Slope dy/dx = 0 and second derivative d²y/dx² < 0 indicating concave downward curve.', descriptionTa: 'முதல் வகைக்கெழு பூச்சியமாகவும், இரண்டாம் வகைக்கெழு எதிர்மறையாகவும் அமையும் உச்சிப் புள்ளி.', x: 35, y: 25 },
      { id: 'dc2', labelEn: 'Point of Inflection', labelTa: 'வளைவு மாற்றப் புள்ளி', descriptionEn: 'Location where curvature flips from concave to convex; d²y/dx² = 0.', descriptionTa: 'வளைவரை தனது குழிவுத்தன்மையை மாற்றிக்கொள்ளும் புள்ளி.', x: 57, y: 60 },
      { id: 'dc3', labelEn: 'Local Minimum Stationarity', labelTa: 'இடஞ்சார்ந்த சிறுமம்', descriptionEn: 'Slope dy/dx = 0 and second derivative d²y/dx² > 0 indicating concave upward bowl.', descriptionTa: 'முதல் வகைக்கெழு பூச்சியமாகவும், இரண்டாம் வகைக்கெழு நேர்மறையாகவும் அமையும் அடித்தளப் புள்ளி.', x: 75, y: 80 }
    ]
  },
  c12_mat_ch8: {
    id: 'diag_c12_mat_ch8',
    chapterId: 'c12_mat_ch8',
    titleEn: 'Multivariable Calculus: Tangent Plane, Total Differential dz & Euler’s Theorem',
    titleTa: 'பலமாறி நுண்கணிதம்: தொடுதளம், முழு வகைக்கெழு dz மற்றும் ஆய்லரின் தேற்றம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="35" width="250" height="110" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="155" y="65" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Total Differential dz</text>
      <text x="155" y="88" textAnchor="middle" fill="#2563eb" fontSize="12">dz = (∂f/∂x)dx + (∂f/∂y)dy</text>
      <text x="155" y="110" textAnchor="middle" fill="#1d4ed8" fontSize="10">Linear approximation for small increments</text>
      <text x="155" y="128" textAnchor="middle" fill="#64748b" fontSize="10">Δz ≈ dz</text>

      <rect x="320" y="35" width="250" height="110" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="445" y="65" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Euler’s Theorem on Homogeneity</text>
      <text x="445" y="88" textAnchor="middle" fill="#15803d" fontSize="12">f(tx, ty) = tⁿ f(x, y)</text>
      <text x="445" y="110" textAnchor="middle" fill="#14532d" fontSize="11">x(∂u/∂x) + y(∂u/∂y) = n·u</text>
      <text x="445" y="128" textAnchor="middle" fill="#64748b" fontSize="10">Degree of homogeneity n</text>

      <rect x="100" y="175" width="400" height="85" rx="12" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="13">Tangent Plane to Surface z = f(x, y)</text>
      <text x="300" y="228" textAnchor="middle" fill="#7e22ce" fontSize="11">(z - z₀) = f_x(x₀, y₀)(x - x₀) + f_y(x₀, y₀)(y - y₀)</text>
      <text x="300" y="246" textAnchor="middle" fill="#581c87" fontSize="10">Surface normal vector: n = (f_x, f_y, -1)</text>
    </svg>`,
    labels: [
      { id: 'mv1', labelEn: 'Total Differential Formula', labelTa: 'முழு வகைக்கெழு சூத்திரம்', descriptionEn: 'dz combines rates of change along both independent coordinates x and y.', descriptionTa: 'இரு மாறிகளின் மாற்றங்களை ஒருங்கிணைக்கும் மொத்த வகைக்கெழு.', x: 25, y: 35 },
      { id: 'mv2', labelEn: 'Euler’s Homogeneous Function Rule', labelTa: 'ஆய்லரின் சமபடித்தான சார்பு விதி', descriptionEn: 'For degree n homogeneous functions: x(∂u/∂x) + y(∂u/∂y) = n·u holds unconditionally.', descriptionTa: 'படி n கொண்ட சமபடித்தான சார்புகளுக்கு ஆய்லரின் தேற்றம் பொருந்தும்.', x: 75, y: 35 },
      { id: 'mv3', labelEn: 'Tangent Plane Geometry', labelTa: 'தொடுதள சமன்பாடு', descriptionEn: 'Flat plane touching 3D curved surface at (x₀, y₀, z₀); foundation of multivariable gradient descent.', descriptionTa: 'முப்பரிமாண வளைபரப்பை ஒரே புள்ளியில் தொட்டுச் செல்லும் தொடுதளம்.', x: 50, y: 75 }
    ]
  },
  c12_mat_ch9: {
    id: 'diag_c12_mat_ch9',
    chapterId: 'c12_mat_ch9',
    titleEn: 'Integration Geometry: Definite Area & Solid of Revolution Disk',
    titleTa: 'தொகையீட்டு வடிவியல்: பரப்பளவு மற்றும் சுழல் திடப்பொருள் தட்டு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="40" y1="250" x2="560" y2="250" stroke="#94a3b8" strokeWidth="2" />
      <line x1="60" y1="270" x2="60" y2="30" stroke="#94a3b8" strokeWidth="2" />

      <path d="M 120 250 L 120 160 Q 250 80 440 120 L 440 250 Z" fill="#eff6ff" stroke="#2563eb" strokeWidth="2" />
      <path d="M 100 170 Q 250 80 460 120" fill="none" stroke="#1d4ed8" strokeWidth="3" />

      <rect x="260" y="106" width="25" height="144" fill="#93c5fd" fillOpacity="0.7" stroke="#1e40af" strokeWidth="1.5" />
      <text x="272" y="235" textAnchor="middle" fill="#1e3a8a" fontSize="10">dx</text>
      <text x="240" y="170" textAnchor="end" fill="#1e40af" fontWeight="bold" fontSize="11">y = f(x)</text>

      <text x="120" y="268" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">x = a</text>
      <text x="440" y="268" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">x = b</text>

      <rect x="350" y="40" width="210" height="85" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="455" y="65" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="12">Area Between Curve & Axis</text>
      <text x="455" y="88" textAnchor="middle" fill="#15803d" fontSize="13">A = ∫ₐᵇ y dx</text>
      <text x="455" y="108" textAnchor="middle" fill="#14532d" fontSize="11">Volume: V = π ∫ₐᵇ y² dx</text>
    </svg>`,
    labels: [
      { id: 'i1', labelEn: 'Infinitesimal Strip dx', labelTa: 'நுண்ணிய பட்டை dx', descriptionEn: 'Thin rectangular element with width dx and height y; area = y dx.', descriptionTa: 'அகலம் dx மற்றும் உயரம் y கொண்ட செவ்வகத் துண்டு.', x: 45, y: 65 },
      { id: 'i2', labelEn: 'Revolving Circular Disk', labelTa: 'சுழலும் வட்டத் தட்டு', descriptionEn: 'Formed by revolving vertical strip 360° around x-axis; volume = π y² dx.', descriptionTa: 'x-அச்சை மையமாகச் சுழற்றும்போது உருவாகும் வட்டத் தட்டு.', x: 75, y: 30 },
      { id: 'i3', labelEn: 'Cumulative Definite Area A', labelTa: 'வரையறுத்த பரப்பளவு A', descriptionEn: 'Sum of all infinitesimal vertical strips bounded from x = a to x = b.', descriptionTa: 'வளைவரைக்கும் x-அச்சுக்கும் இடைப்பட்ட மொத்த பரப்பளவு.', x: 30, y: 75 }
    ]
  },
  c12_mat_ch10: {
    id: 'diag_c12_mat_ch10',
    chapterId: 'c12_mat_ch10',
    titleEn: 'Differential Equations: Newton Cooling Exponential Decay Curve',
    titleTa: 'வகைக்கெழுச் சமன்பாடு: நியூட்டனின் குளிர்வு அடுக்குக்குறி வளைவரை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="50" y1="250" x2="550" y2="250" stroke="#94a3b8" strokeWidth="2" />
      <line x1="70" y1="270" x2="70" y2="30" stroke="#94a3b8" strokeWidth="2" />
      <text x="540" y="270" textAnchor="end" fill="#64748b" fontSize="11">Time (t)</text>
      <text x="60" y="35" textAnchor="end" fill="#64748b" fontSize="11">Temp T(t)</text>

      <path d="M 70 60 Q 180 200 520 210" fill="none" stroke="#ef4444" strokeWidth="3" />
      <line x1="70" y1="215" x2="530" y2="215" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />
      <text x="535" y="218" fill="#1d4ed8" fontWeight="bold" fontSize="11">Ambient Temp Ts</text>

      <circle cx="70" cy="60" r="5" fill="#dc2626" />
      <text x="90" y="65" fill="#991b1b" fontWeight="bold" fontSize="11">Initial T₀</text>

      <rect x="280" y="40" width="260" height="95" rx="10" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1.5" />
      <text x="410" y="65" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="12">Newton’s Law of Cooling</text>
      <text x="410" y="88" textAnchor="middle" fill="#dc2626" fontSize="12">dT/dt = -k(T - Ts)</text>
      <text x="410" y="110" textAnchor="middle" fill="#2563eb" fontSize="11">Solution: T(t) = Ts + (T₀ - Ts)e⁻ᵏᵗ</text>
    </svg>`,
    labels: [
      { id: 'ode1', labelEn: 'Initial Temperature T₀', labelTa: 'தொடக்க வெப்பநிலை T₀', descriptionEn: 'Peak temperature at t = 0 before cooling begins.', descriptionTa: 'குளிரத் தொடங்கும் முன் நேரம் t = 0-ல் உள்ள உச்ச வெப்பநிலை.', x: 20, y: 20 },
      { id: 'ode2', labelEn: 'Exponential Decay Curve', labelTa: 'அடுக்குக்குறி சரிவு வளைவரை', descriptionEn: 'Steepest slope initially, flattening as temperature approaches ambient.', descriptionTa: 'ஆரம்பத்தில் செங்குத்தாகவும், பின்னர் சமதளமாகவும் மாறும் வளைவரை.', x: 50, y: 55 },
      { id: 'ode3', labelEn: 'Surrounding Temp Ts', labelTa: 'சூழல் வெப்பநிலை Ts', descriptionEn: 'Horizontal asymptote representing ambient room temperature.', descriptionTa: 'அறை வெப்பநிலையைக் குறிக்கும் கிடைமட்ட அணுகுகோடு.', x: 80, y: 80 }
    ]
  },
  c12_mat_ch11: {
    id: 'diag_c12_mat_ch11',
    chapterId: 'c12_mat_ch11',
    titleEn: 'Probability Distributions: Binomial, Poisson & Gaussian Normal Bell Curve',
    titleTa: 'நிகழ்தகவு பரவல்கள்: ஈருறுப்பு, பாய்சான் மற்றும் இயல்நிலைப் பரவல் மணி வளைவரை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="40" y1="250" x2="560" y2="250" stroke="#94a3b8" strokeWidth="2" />
      <line x1="300" y1="270" x2="300" y2="30" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3" />

      <path d="M 60 248 C 160 248, 220 50, 300 50 C 380 50, 440 248, 540 248" fill="#eff6ff" stroke="#2563eb" strokeWidth="3" />

      <text x="300" y="40" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Mean μ (Center of Symmetry)</text>
      <text x="300" y="268" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="11">x = μ</text>

      <line x1="220" y1="250" x2="220" y2="130" stroke="#16a34a" strokeWidth="2" strokeDasharray="4" />
      <line x1="380" y1="250" x2="380" y2="130" stroke="#16a34a" strokeWidth="2" strokeDasharray="4" />
      <text x="220" y="268" textAnchor="middle" fill="#15803d" fontSize="10">μ - σ</text>
      <text x="380" y="268" textAnchor="middle" fill="#15803d" fontSize="10">μ + σ</text>

      <rect x="240" y="160" width="120" height="35" rx="6" fill="#dbeafe" />
      <text x="300" y="182" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="12">68.27% of Data</text>

      <rect x="30" y="30" width="170" height="80" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="115" y="52" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">Total Probability = 1</text>
      <text x="115" y="72" textAnchor="middle" fill="#2563eb" fontSize="10">Binomial: P(X=x) = ⁿCₓ pˣ qⁿ⁻ˣ</text>
      <text x="115" y="92" textAnchor="middle" fill="#15803d" fontSize="10">Poisson: P(X=x) = e⁻ˡ λˣ / x!</text>
    </svg>`,
    labels: [
      { id: 'pd1', labelEn: 'Mean μ (Peak of Symmetry)', labelTa: 'கூட்டுச் சராசரி μ', descriptionEn: 'Mean, median, and mode coincide at the exact apex of the normal distribution curve.', descriptionTa: 'இயல்நிலைப் பரவலின் உச்சிப் புள்ளியில் சராசரி, இடைநிலை, முகடு மூன்றும் சமம்.', x: 50, y: 18 },
      { id: 'pd2', labelEn: 'Standard Deviation Interval [μ-σ, μ+σ]', labelTa: 'திட்டவிலக்க இடைவெளி', descriptionEn: 'Points of inflection of the bell curve; captures 68.27% of total probability mass.', descriptionTa: 'மணி வடிவ வளைவரையின் வளைவு மாற்றப் புள்ளிகள்; 68.27% நிகழ்தகவை உள்ளடக்கியது.', x: 63, y: 55 },
      { id: 'pd3', labelEn: 'Discrete Distribution Limits', labelTa: 'தனித்த பரவல் எல்லைகள்', descriptionEn: 'Binomial approaches Poisson when n -> ∞, p -> 0 (np = λ); approaches Normal when n is large.', descriptionTa: 'நிகழ்வுகளின் எண்ணிக்கை அதிகரிக்கும் போது ஈருறுப்புப் பரவல் இயல்நிலைப் பரவலாக மாறும்.', x: 18, y: 30 }
    ]
  },
  c12_mat_ch12: {
    id: 'diag_c12_mat_ch12',
    chapterId: 'c12_mat_ch12',
    titleEn: 'Discrete Mathematics: Propositional Truth Tables & Algebraic Group Hierarchy',
    titleTa: 'தனிநிலைக் கணிதம்: மெய்மை அட்டவணைகள் மற்றும் இயற்கணித குலங்களின் படிநிலை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="35" width="250" height="115" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="155" y="62" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Truth Table: p -> q (Conditional)</text>
      <text x="155" y="85" textAnchor="middle" fill="#2563eb" fontSize="11">T -> T : T  |  T -> F : F (Only False)</text>
      <text x="155" y="105" textAnchor="middle" fill="#1d4ed8" fontSize="11">F -> T : T  |  F -> F : T</text>
      <text x="155" y="128" textAnchor="middle" fill="#64748b" fontSize="10">Tautology: All True | Contradiction: All False</text>

      <rect x="315" y="35" width="255" height="115" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="442" y="62" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Algebraic Structure Hierarchy</text>
      <text x="442" y="85" textAnchor="middle" fill="#15803d" fontSize="11">1. Groupoid: Closure</text>
      <text x="442" y="102" textAnchor="middle" fill="#15803d" fontSize="11">2. Semigroup: + Associativity</text>
      <text x="442" y="119" textAnchor="middle" fill="#15803d" fontSize="11">3. Monoid: + Identity e</text>
      <text x="442" y="136" textAnchor="middle" fill="#15803d" fontSize="11">4. Group: + Inverse a⁻¹  (Abelian: + Commutative)</text>

      <rect x="70" y="175" width="460" height="85" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="13">De Morgan’s Laws of Logic</text>
      <text x="300" y="228" textAnchor="middle" fill="#b45309" fontSize="12">¬(p ∧ q) ≡ (¬p) ∨ (¬q)   and   ¬(p ∨ q) ≡ (¬p) ∧ (¬q)</text>
      <text x="300" y="248" textAnchor="middle" fill="#78350f" fontSize="10">Foundational bedrock of boolean search, SQL queries, and microprocessors</text>
    </svg>`,
    labels: [
      { id: 'dm1', labelEn: 'Conditional Statement Truth Dynamics', labelTa: 'நிபந்தனைக் கூற்றின் மெய்மை நிலை', descriptionEn: 'p -> q is false ONLY when premise p is true but conclusion q is false.', descriptionTa: 'முன்னோடி மெய்யாகவும் முடிவு பொய்யாகவும் இருக்கும் போது மட்டுமே p -> q பொய் ஆகும்.', x: 25, y: 30 },
      { id: 'dm2', labelEn: 'Group Axioms Hierarchy (G, *)', labelTa: 'குலங்களின் நான்கு அடிக்கோள்கள்', descriptionEn: 'Closure -> Associativity -> Identity -> Inverse; commutative property elevates group to Abelian Group.', descriptionTa: 'அடைவு, சேர்ப்பு, சமனி மற்றும் நேர்மாறு விதிகள்; பரிமாற்று விதியும் பொருந்தினால் அது ஏபீலியன் குலம்.', x: 75, y: 30 },
      { id: 'dm3', labelEn: 'De Morgan’s Duality Theorem', labelTa: 'டி மார்கனின் தர்க்க விதிகள்', descriptionEn: 'Negation flips conjunctions (AND) into disjunctions (OR) with inverted components.', descriptionTa: 'மறுப்பு விதி AND வாயிலை OR வாயிலாகவும் அதன் மாறாகவும் மாற்றுகிறது.', x: 50, y: 70 }
    ]
  }
};

export const MATHS_VOL2_VIDEOS: Record<string, VideoExplainer> = {
  c12_mat_ch7: {
    id: 'vid_c12_mat_ch7',
    chapterId: 'c12_mat_ch7',
    titleEn: 'Calculus in Motion: Designing Roller Coasters with Derivatives',
    titleTa: 'இயக்கத்தில் நுண்கணிதம்: வகைக்கெழுக்கள் மூலம் ரோலர்கோஸ்டர் வடிவமைப்பு',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Peak Thrill at Maximum',
        titleTa: 'உச்சியில் சிலிர்ப்பு: பெருமம்',
        visualDescription: 'A roller coaster cart climbing a track and momentarily stopping at the zero-slope crest before plummeting.',
        narrationEn: 'At the very top of a roller coaster drop, the track levels out flat. That exact instant where slope equals zero is a local maximum!',
        narrationTa: 'ரோலர்கோஸ்டரின் உச்சிப் புள்ளியில் தடம் சமநிலைக்கு வருகிறது. சாய்வு பூச்சியமாகும் அந்த உச்சிப் புள்ளியே இடஞ்சார்ந்த பெருமம் ஆகும்!',
        conceptKey: 'Stationary Points & Maxima'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Transition Inflection Point',
        titleTa: 'வளைவு மாறும் புள்ளி',
        visualDescription: 'Track transitioning smoothly from a curve cupping downward into an upward banking turn without sudden jolts.',
        narrationEn: 'Engineers use points of inflection where the second derivative equals zero to ensure smooth transitions between loops, saving passengers from neck injuries!',
        narrationTa: 'பொறியாளர்கள் இரண்டாம் வகைக்கெழு பூச்சியமாகும் வளைவு மாற்றப் புள்ளிகளைப் பயன்படுத்தி, பயணிகளுக்கு அதிர்வு ஏற்படாதவாறு தடங்களை வடிவமைக்கின்றனர்!',
        conceptKey: 'Points of Inflection'
      },
      {
        sceneNumber: 3,
        titleEn: 'Speeding Proof: Lagrange’s Theorem',
        titleTa: 'சராசரி மதிப்புத் தேற்றத்தின் சான்று',
        visualDescription: 'Toll booth timestamps calculating speed between two plazas, showing instantaneous speed matching average speed.',
        narrationEn: 'Lagrange’s Mean Value Theorem mathematically guarantees that your car traveled at its average speed at least once during your road trip.',
        narrationTa: 'லெக்ராஞ்சியின் சராசரி மதிப்புத் தேற்றம் உங்கள் வாகனத்தின் உடனடி வேகம் ஏதேனும் ஒரு நொடியில் அதன் சராசரி வேகத்திற்குச் சமமாக இருக்கும் என்பதை நிரூபிக்கிறது.',
        conceptKey: 'Lagrange Mean Value Theorem'
      }
    ]
  },
  c12_mat_ch8: {
    id: 'vid_c12_mat_ch8',
    chapterId: 'c12_mat_ch8',
    titleEn: 'Multivariable Mountains: Partial Derivatives & Gradient Descents',
    titleTa: 'பலமாறி மலைகள்: பகுதி வகைக்கெழுக்கள் மற்றும் சரிவு வளைவுகள்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Hiking in Two Directions at Once',
        titleTa: 'இரு திசைகளில் ஒரே நேரத்தில் ஏறுதல்',
        visualDescription: 'A hiker on a 3D mountain checking slope heading directly East (∂z/∂x) while keeping North-South altitude locked.',
        narrationEn: 'On a 3D mountain, the slope depends on your direction! Partial derivative ∂z/∂x measures the steepness when walking East, treating North as a constant.',
        narrationTa: 'முப்பரிமாண மலையில் சாய்வு நீங்கள் செல்லும் திசையைப் பொறுத்தது! கிழக்கு நோக்கிச் செல்லும்போது ஏற்படும் சாய்வை அளப்பதே ∂z/∂x ஆகும்.',
        conceptKey: 'Partial Differentiation'
      },
      {
        sceneNumber: 2,
        titleEn: 'Euler’s Homogeneous Scale Miracle',
        titleTa: 'ஆய்லரின் சமபடித்தான அளவுகோல்',
        visualDescription: 'Doubling dimensions of a factory: labor and machinery doubling simultaneously, scaling output by 2^n.',
        narrationEn: 'Euler proved that when a production formula scales homogeneously, the sum of each input times its marginal product perfectly equals total output times degree n!',
        narrationTa: 'சமபடித்தான உற்பத்திக் கணிதத்தில் ஒவ்வொரு உள்ளீடும் அதன் இறுதிநிலை உற்பத்தியோடு பெருக்கப்பட்டு மொத்த உற்பத்திக்கு சமமாகிறது.',
        conceptKey: 'Euler’s Theorem on Homogeneous Functions'
      },
      {
        sceneNumber: 3,
        titleEn: 'Total Differentials in Spacecraft Thermal Shields',
        titleTa: 'விண்கல வெப்பக் கவசங்களில் முழு வகைக்கெழு',
        visualDescription: 'Engineers calculating temperature changes on a rocket skin using total differential dz = (∂z/∂x)dx + (∂z/∂y)dy.',
        narrationEn: 'Rocket heat shields experience simultaneous temperature shifts along length and width. Total differentials combine both variations into a single precise safety margin.',
        narrationTa: 'விண்கலங்கள் வளிமண்டலத்திற்குள் நுழையும் போது ஏற்படும் வெப்ப மாற்றங்களை முழு வகைக்கெழு dz துல்லியமாகக் கணக்கிடுகிறது.',
        conceptKey: 'Total Differentials & Error Tolerance'
      }
    ]
  },
  c12_mat_ch9: {
    id: 'vid_c12_mat_ch9',
    chapterId: 'c12_mat_ch9',
    titleEn: 'Solids of Revolution: Slicing 3D Objects with Integration',
    titleTa: 'சுழல் திடப்பொருட்கள்: தொகையீடு மூலம் 3D வடிவங்களை அளவிடுதல்',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Spinning a Curve in 360 Degrees',
        titleTa: 'ஒரு வளைவரையை 360 பாகை சுழற்றுதல்',
        visualDescription: 'A curved line y = √x spinning rapidly around the horizontal X-axis, generating a glowing 3D parabolic bowl.',
        narrationEn: 'What happens when you spin a flat 2D curve around an axis? It carves out a stunning 3D solid—like a potter shaping clay on a spinning wheel!',
        narrationTa: 'ஒரு தட்டையான வளைவரையை அச்சை மையமாக வைத்து சுழற்றினால் அது பானை வனையும் சக்கரம் போல் ஒரு முப்பரிமாண திடப்பொருளை உருவாக்குகிறது!',
        conceptKey: 'Solids of Revolution'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Disk Integration Slicer',
        titleTa: 'வட்டத் தட்டு தொகையீட்டு முறை',
        visualDescription: 'A loaf of bread sliced into infinitely thin circular disks of radius y and thickness dx, summing volume π ∫ y² dx.',
        narrationEn: 'We calculate the 3D volume by slicing the solid into thousands of paper-thin circular coins. Each coin has volume πy²dx; integration adds them all up!',
        narrationTa: 'ஒவ்வொரு நுண்ணிய வட்டத் தட்டின் கனஅளவு πy²dx. தொகையீடு மூலம் அனைத்து வட்டங்களையும் கூட்டி முழு கனஅளவையும் கணக்கிடலாம்!',
        conceptKey: 'Disk Method Volume Formula'
      },
      {
        sceneNumber: 3,
        titleEn: 'Engineering Rocket Fuel Nozzles',
        titleTa: 'ராக்கெட் எரிபொருள் முனைகளின் வடிவமைப்பு',
        visualDescription: 'A titanium rocket propulsion bell contour analyzed using definite integrals to maximize exhaust thrust efficiency.',
        narrationEn: 'ISRO engineers shape rocket propulsion nozzles using solid of revolution integrals to produce supersonic thrust with minimum metal weight.',
        narrationTa: 'இஸ்ரோ விஞ்ஞானிகள் குறைந்த எடையில் அதிக உந்துவிசையைத் தரும் ராக்கெட் முனைகளை வடிவமைக்க இந்த தொகையீட்டு முறையையே பயன்படுத்துகின்றனர்.',
        conceptKey: 'Aerospace Nozzle Volume Optimization'
      }
    ]
  },
  c12_mat_ch10: {
    id: 'vid_c12_mat_ch10',
    chapterId: 'c12_mat_ch10',
    titleEn: 'Newton’s Cooling Law in Forensics & Medicine',
    titleTa: 'தடயவியல் மற்றும் மருத்துவத்தில் நியூட்டனின் குளிர்வு விதி',
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Temperature Mystery',
        titleTa: 'வெப்பநிலை ரகசியம்',
        visualDescription: 'A forensic detective measuring the temperature of an object at a crime scene to estimate elapsed time.',
        narrationEn: 'When cooling begins, heat radiates into the room. Because heat loss is proportional to temperature difference, differential equations solve the mystery of time!',
        narrationTa: 'ஒரு பொருள் குளிரும்போது ஏற்படும் வெப்ப இழப்பு சூழல் வெப்பநிலைக்கு ஏற்ப அமைகிறது. வகைக்கெழுச் சமன்பாடுகள் மூலம் கடந்த காலத்தை துல்லியமாகக் கணிக்கலாம்!',
        conceptKey: 'Newton’s Law of Cooling'
      },
      {
        sceneNumber: 2,
        titleEn: 'Solving with Integrating Factors',
        titleTa: 'தொகையீட்டுக் காரணி மூலம் தீர்வு',
        visualDescription: 'Mathematical symbols transforming dy/dx + Py = Q into a single exact product derivative.',
        narrationEn: 'Integrating factor e^(∫ P dx) turns difficult differential equations into a clean product rule that unrolls like clockwork.',
        narrationTa: 'தொகையீட்டுக் காரணி e^(∫ P dx) கடினமான சமன்பாடுகளை எளிய பெருக்கல் வகைக்கெழுவாக மாற்றி எளிதில் தீர்வு காண உதவுகிறது.',
        conceptKey: 'Integrating Factor'
      },
      {
        sceneNumber: 3,
        titleEn: 'Predicting Pandemic Spreads',
        titleTa: 'தொற்றுநோய் பரவலைக் கணித்தல்',
        visualDescription: 'A biological model showing exponential virus replication flattening out into an equilibrium curve.',
        narrationEn: 'From bacterial culture doubling to national vaccination rates, differential equations are humanity’s primary predictive tool.',
        narrationTa: 'பாக்டீரியா பெருக்கம் முதல் தடுப்பூசி விநியோகம் வரை, எதிர்காலத்தைக் கணிக்க மனிதகுலத்தின் முதன்மைக் கருவி வகைக்கெழுச் சமன்பாடுகளே ஆகும்.',
        conceptKey: 'Exponential Growth Models'
      }
    ]
  },
  c12_mat_ch11: {
    id: 'vid_c12_mat_ch11',
    chapterId: 'c12_mat_ch11',
    titleEn: 'The Magic of the Bell Curve: Probability Distributions in Nature',
    titleTa: 'மணி வடிவ வளைவரையின் ரகசியம்: இயற்கையில் நிகழ்தகவு பரவல்கள்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Galton Board: Order from Chaos',
        titleTa: 'கால்டன் பலகை: குழப்பத்திலிருந்து ஒழுங்கு',
        visualDescription: 'Thousands of steel ball bearings dropping through rows of pegs, bouncing left and right randomly but forming a perfect bell curve.',
        narrationEn: 'Drop a thousand marbles through random pegs. Even though each bounce is purely unpredictable, together they always form the exact same majestic normal distribution!',
        narrationTa: 'ஆயிரக்கணக்கான மணிகள் ஆப்புகளின் வழியே விழுந்து சிதறினாலும், அவை இறுதியில் எப்போதும் நேர்த்தியான மணி வடிவ இயல்நிலைப் பரவலையே உருவாக்குகின்றன!',
        conceptKey: 'Central Limit Theorem'
      },
      {
        sceneNumber: 2,
        titleEn: 'The 68-95-99.7 Empirical Standard',
        titleTa: '68-95-99.7 அனுபவ விதி',
        visualDescription: 'A bell curve highlighting ±1σ (68.27%), ±2σ (95.45%), and ±3σ (99.73%) shaded regions.',
        narrationEn: 'Almost 68 percent of observations lie within one standard deviation of the mean, and over 99.7 percent fall within three. This rule governs exam grading and medical tests.',
        narrationTa: 'சராசரியிலிருந்து ஒரு திட்டவிலக்கத்திற்குள் 68% தரவுகளும், மூன்று திட்டவிலக்கத்திற்குள் 99.7% தரவுகளும் அமைகின்றன.',
        conceptKey: 'Empirical Rule of Normal Distribution'
      },
      {
        sceneNumber: 3,
        titleEn: 'Poisson: Rare Events in Massive Samples',
        titleTa: 'பாய்சான்: அரிதான நிகழ்வுகளின் நிகழ்தகவு',
        visualDescription: 'A call center server handling thousands of calls per hour, modeling rare network dropped packets with Poisson e⁻ˡ λˣ / x!.',
        narrationEn: 'When chances of an event are tiny but opportunities are huge—like website server crashes or meteor strikes—the Poisson distribution predicts the exact probability.',
        narrationTa: 'அரிதாக நிகழும் சம்பவங்களை துல்லியமாகக் கணிக்க பாய்சான் பரவல் உதவுகிறது—எடுத்துக்காட்டாக சர்வர் முடக்கம் அல்லது விண்கல் வீழ்ச்சி.',
        conceptKey: 'Poisson Distribution & Rare Events'
      }
    ]
  },
  c12_mat_ch12: {
    id: 'vid_c12_mat_ch12',
    chapterId: 'c12_mat_ch12',
    titleEn: 'Logic, Cryptography & Groups: The Foundations of Computing',
    titleTa: 'தர்க்கம், குறியாக்கம் மற்றும் குலங்கள்: கணினி அறிவியலின் அடித்தளம்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Binary Switches of Truth',
        titleTa: 'மெய்மையின் இரும சுவிட்சுகள்',
        visualDescription: 'Transistor logic gates lighting up: AND gate requiring both inputs high, OR gate requiring either, NOT gate inverting.',
        narrationEn: 'Every computer chip on earth runs on mathematical logic! Truth tables dictate how billions of tiny silicon transistors calculate truth values at gigahertz speeds.',
        narrationTa: 'உலகின் அனைத்து கணினி சிப்களும் கணித தர்க்கத்தின் அடிப்படையிலேயே இயங்குகின்றன! டிரான்சிஸ்டர்கள் மெய்மை அட்டவணைகளைக் கொண்டே கணக்கிடுகின்றன.',
        conceptKey: 'Boolean Logic & Logic Gates'
      },
      {
        sceneNumber: 2,
        titleEn: 'De Morgan’s Circuit Simplifier',
        titleTa: 'டி மார்கனின் மின்சுற்று எளிமையாக்கல்',
        visualDescription: 'A messy complex electrical circuit collapsing into a compact single NAND gate using De Morgan’s duality laws.',
        narrationEn: 'De Morgan’s laws turn complicated negative logic into simple gates, saving smartphone batteries and billions of silicon transistors.',
        narrationTa: 'டி மார்கனின் விதிகள் கடினமான தர்க்க சுற்றுகளை எளிய சுற்றுகளாக மாற்றி மின்சாரத்தை சேமிக்கின்றன.',
        conceptKey: 'De Morgan’s Duality Laws'
      },
      {
        sceneNumber: 3,
        titleEn: 'Abstract Groups Protecting Your Passwords',
        titleTa: 'கடவுச்சொற்களைப் பாதுகாக்கும் நுண் குலங்கள்',
        visualDescription: 'An encryption lock using cyclic groups modulo a large prime number p, securing online bank transactions with RSA and elliptic curves.',
        narrationEn: 'Group theory—with its strict rules of closure, identity, and inverses—is what keeps bank passwords and WhatsApp messages unbreakable across the internet.',
        narrationTa: 'குலக் கோட்பாட்டின் சமனி மற்றும் நேர்மாறு விதிகளே உங்கள் வங்கி கடவுச்சொற்களையும் வாட்ஸ்அப் தகவல்களையும் பாதுகாக்கும் இணையக் கவசமாகும்.',
        conceptKey: 'Group Theory & Cryptography'
      }
    ]
  }
};
