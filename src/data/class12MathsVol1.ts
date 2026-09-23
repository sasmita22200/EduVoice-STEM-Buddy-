import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Mathematics - Volume 1 (Chapters 1 to 6)
 * Official Tamil Nadu Samacheer Kalvi State Board Curriculum
 * 1. Applications of Matrices and Determinants (அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்)
 * 2. Complex Numbers (கலப்பு எண்கள்)
 * 3. Theory of Equations (சமன்பாட்டியல்)
 * 4. Inverse Trigonometric Functions (நேர்மாறு முக்கோணவியல் சார்புகள்)
 * 5. Two Dimensional Analytical Geometry - II (இருபரிமாண பகுமுறை வடிவியல் - II)
 * 6. Applications of Vector Algebra (வெக்டர் இயற்கணிதத்தின் பயன்பாடுகள்)
 */

export const MATHS_VOL1_CHAPTERS: Chapter[] = [
  {
    id: 'c12_mat_ch1',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 1,
    titleEn: 'Chapter 1: Applications of Matrices and Determinants',
    titleTa: 'அலகு 1: அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch2',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 2,
    titleEn: 'Chapter 2: Complex Numbers',
    titleTa: 'அலகு 2: கலப்பு எண்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch3',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 3,
    titleEn: 'Chapter 3: Theory of Equations',
    titleTa: 'அலகு 3: சமன்பாட்டியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch4',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 4,
    titleEn: 'Chapter 4: Inverse Trigonometric Functions',
    titleTa: 'அலகு 4: நேர்மாறு முக்கோணவியல் சார்புகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch5',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 5,
    titleEn: 'Chapter 5: Two Dimensional Analytical Geometry - II',
    titleTa: 'அலகு 5: இருபரிமாண பகுமுறை வடிவியல் - II',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_mat_ch6',
    classLevel: 12,
    subjectId: 'c12_maths',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Algebra & Geometry',
    unitNameTa: 'தொகுதி 1: இயற்கணிதம் & வடிவியல்',
    chapterNumber: 6,
    titleEn: 'Chapter 6: Applications of Vector Algebra',
    titleTa: 'அலகு 6: வெக்டர் இயற்கணிதத்தின் பயன்பாடுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const MATHS_VOL1_NOTES: Record<string, NoteItem> = {
  c12_mat_ch1: {
    id: 'note_c12_mat_ch1',
    chapterId: 'c12_mat_ch1',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Applications of Matrices and Determinants: Master Study Notes',
    titleTa: 'அணிகள் மற்றும் அணிக்கோவைகளின் பயன்பாடுகள்: முழுமையான பாடக் குறிப்புகள்',
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
    changeNote: 'Added comprehensive step-by-step Rouche-Capelli consistency flowcharts and Cramer’s rule shortcuts.',
    changeNoteTa: 'ரூஷே-கபெல்லி ஒருங்கமைவு வரைபடங்கள் மற்றும் கிராமரின் விதி வழிமுறைகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Inverse of a Non-Singular Square Matrix
A square matrix $A$ of order $n$ is invertible if and only if it is non-singular ($|A| \\neq 0$).
The inverse matrix is given by:
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$
where $\\text{adj}(A) = [A_{ij}]^T$ is the transpose of the cofactor matrix.

**Key Inversion Properties:**
1. $A(\\text{adj} A) = (\\text{adj} A)A = |A| I_n$
2. $(AB)^{-1} = B^{-1}A^{-1}$ (Reversal law for inverses)
3. $(A^T)^{-1} = (A^{-1})^T$
4. $|\\text{adj}(A)| = |A|^{n-1}$ for an $n \\times n$ matrix
5. $\\text{adj}(\\text{adj}(A)) = |A|^{n-2} A$

### 2. Rank of a Matrix ($\\rho(A)$)
The rank of a matrix $A$ is the order of the highest-order non-zero minor of $A$.
- For an $m \\times n$ matrix, $\\rho(A) \\leq \\min(m, n)$.
- Elementary row operations preserve the rank of a matrix.
- **Row Echelon Form:** A matrix is in row echelon form when all zero rows are at the bottom, and the first non-zero entry of each row is strictly to the right of the leading non-zero entry of the row above it.

### 3. Solving Linear Systems
- **Matrix Inversion Method:** For $AX = B$, if $|A| \\neq 0$, the unique solution is $X = A^{-1}B$.
- **Cramer's Rule:** Applicable when $\\Delta = |A| \\neq 0$:
  $$x = \\frac{\\Delta_x}{\\Delta}, \\quad y = \\frac{\\Delta_y}{\\Delta}, \\quad z = \\frac{\\Delta_z}{\\Delta}$$
- **Gaussian Elimination:** Converting the augmented matrix $[A|B]$ into row echelon form and back-substituting.
- **Rouche-Capelli Theorem:**
  - $\\rho(A) = \\rho([A|B]) = n$ (number of unknowns) $\\implies$ Unique solution (Consistent).
  - $\\rho(A) = \\rho([A|B]) < n \\implies$ Infinitely many solutions with $n - \\rho$ free parameters (Consistent).
  - $\\rho(A) \\neq \\rho([A|B]) \\implies$ No solution (Inconsistent).`,
    bodyTa: `### 1. பூச்சியமற்ற சதுர அணியின் நேர்மாறு
ஒரு சதுர அணி $A$-க்கு $|A| \\neq 0$ எனில் மட்டுமே நேர்மாறு அணி $A^{-1}$ காண இயலும்.
$$A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$$
இங்கு $\\text{adj}(A)$ என்பது இணைக்காரணி அணியின் நிரல்-நிரை மாற்று அணியாகும்.

**முக்கியப் பண்புகள்:**
1. $A(\\text{adj} A) = (\\text{adj} A)A = |A| I_n$
2. $(AB)^{-1} = B^{-1} A^{-1}$
3. $|\\text{adj}(A)| = |A|^{n-1}$

### 2. அணியின் தரம் ($\\rho(A)$)
அணியின் தரம் என்பது அதன் பூச்சியமற்ற சிற்றணிக்கோவையின் மிக உயர்ந்த வரிசையாகும். ஏறுபடி வடிவத்திற்கு மாற்றுவதன் மூலம் அணியின் தரத்தை எளிதாகக் காணலாம்.

### 3. நேரியல் சமன்பாட்டுத் தொகுப்புகளைத் தீர்த்தல்
- **கிராமரின் விதி:** $\\Delta \\neq 0$ எனில் $x = \\frac{\\Delta_x}{\\Delta}, y = \\frac{\\Delta_y}{\\Delta}, z = \\frac{\\Delta_z}{\\Delta}$.
- **ரூஷே-கபெல்லி தேற்றம்:** $\\rho(A) = \\rho([A|B]) = n$ எனில் ஒரே ஒரு தீர்வு. $\\rho(A) = \\rho([A|B]) < n$ எனில் எண்ணிக்கையற்ற தீர்வுகள். $\\rho(A) \\neq \\rho([A|B])$ எனில் ஒருங்கமைவற்றது (தீர்வு இல்லை).`,
    revisions: [
      { version: '2.4', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced Rouche-Capelli theorem examples.', changeNoteTa: 'ரூஷே-கபெல்லி தேற்ற மாதிரிகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Matrix Inverse Formula', nameTa: 'நேர்மாறு அணி சூத்திரம்', formula: 'A^{-1} = \\frac{1}{|A|} \\text{adj}(A)', explanationEn: 'Inverse exists only if determinant |A| ≠ 0.', explanationTa: '|A| ≠ 0 எனில் மட்டுமே நேர்மாறு காண இயலும்.' },
      { nameEn: 'Determinant of Adjoint', nameTa: 'சேர்ப்பு அணியின் அணிக்கோவை', formula: '|\\text{adj}(A)| = |A|^{n-1}', explanationEn: 'For an n x n square matrix.', explanationTa: 'n x n வரிசையுடைய சதுர அணிக்கு.' },
      { nameEn: 'Cramer’s Determinant Ratio', nameTa: 'கிராமரின் விகித சூத்திரம்', formula: 'x_i = \\frac{\\Delta_i}{\\Delta}, \\quad \\Delta \\neq 0', explanationEn: 'Solves system of linear equations using determinant minors.', explanationTa: 'அணிக்கோவைகள் மூலம் ஒருங்கமை சமன்பாடுகளுக்கு தீர்வு காண்கிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the inverse of matrix A = [[2, 3], [1, 4]].',
        questionTa: 'A = [[2, 3], [1, 4]] என்ற அணியின் நேர்மாறு அணி காண்க.',
        solutionEn: '1. Calculate determinant: |A| = (2)(4) - (3)(1) = 8 - 3 = 5 ≠ 0.\n2. Adjoint of 2x2 matrix: swap diagonal elements and change sign of off-diagonals -> adj(A) = [[4, -3], [-1, 2]].\n3. A^{-1} = (1/5) * [[4, -3], [-1, 2]].',
        solutionTa: '1. அணிக்கோவை மதிப்பு: |A| = (2)(4) - (3)(1) = 5 ≠ 0.\n2. சேர்ப்பு அணி: adj(A) = [[4, -3], [-1, 2]].\n3. A^{-1} = (1/5) * [[4, -3], [-1, 2]].'
      }
    ]
  },

  c12_mat_ch2: {
    id: 'note_c12_mat_ch2',
    chapterId: 'c12_mat_ch2',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Complex Numbers: Algebraic, Polar & Euler Representations',
    titleTa: 'கலப்பு எண்கள்: இயற்கணிதம், போலார் மற்றும் ஆய்லர் வடிவங்கள்',
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
    changeNote: 'Added de Moivre theorem geometric cube-root visualizations.',
    changeNoteTa: 'டி மாய்வரின் தேற்ற முப்படி மூல விளக்கங்கள் இணைக்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. Complex Numbers Representation
A complex number is written in rectangular form as $z = x + iy$, where $x, y \\in \\mathbb{R}$ and $i = \\sqrt{-1}$.
- **Conjugate:** $\\bar{z} = x - iy$
- **Modulus:** $|z| = \\sqrt{x^2 + y^2}$, and $z\\bar{z} = |z|^2$
- **Triangle Inequality:** $|z_1 + z_2| \\leq |z_1| + |z_2|$ and $|z_1 - z_2| \\geq ||z_1| - |z_2||$

### 2. Polar Form & Euler's Formula
- $z = r(\\cos\\theta + i\\sin\\theta) = r\\text{cis}\\theta = r e^{i\\theta}$
- $r = |z| = \\sqrt{x^2+y^2}$ (Modulus)
- $\\theta = \\text{Arg}(z) = \\tan^{-1}(y/x)$, taking quadrant into account ($-\\pi < \\theta \\leq \\pi$, Principal argument).

### 3. De Moivre's Theorem & Roots of Unity
$$(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta), \\quad \\forall n \\in \\mathbb{Z}$$
**Cube Roots of Unity:** Solutions to $z^3 = 1$ are $1, \\omega, \\omega^2$:
- $\\omega = \\cos(2\\pi/3) + i\\sin(2\\pi/3) = \\frac{-1 + i\\sqrt{3}}{2}$
- $\\omega^2 = \\frac{-1 - i\\sqrt{3}}{2}$
- **Properties:** $1 + \\omega + \\omega^2 = 0$ and $\\omega^3 = 1$.`,
    bodyTa: `### 1. கலப்பு எண்கள்
கலப்பு எண்ணின் செவ்வக வடிவம் $z = x + iy$.
- இணை எண்: $\\bar{z} = x - iy$.
- மட்டு: $|z| = \\sqrt{x^2 + y^2}$.
- முக்கோணச் சமனிலி: $|z_1 + z_2| \\leq |z_1| + |z_2|$.

### 2. போலார் வடிவம் மற்றும் டி மாய்வரின் தேற்றம்
$z = r(\\cos\\theta + i\\sin\\theta)$.
டி மாய்வரின் தேற்றம்: $(\\cos\\theta + i\\sin\\theta)^n = \\cos(n\\theta) + i\\sin(n\\theta)$.
ஒன்றின் முப்படி மூலங்கள்: $1, \\omega, \\omega^2$. இவற்றின் கூடுதல் $1 + \\omega + \\omega^2 = 0$, பெருக்கற்பலன் $\\omega^3 = 1$.`,
    revisions: [
      { version: '2.2', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Standardized roots of unity derivations.', changeNoteTa: 'ஒன்றின் மூலங்களின் வழிமுறைகள் சீரமைக்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Modulus-Argument Form', nameTa: 'மட்டு-வீச்சு வடிவம்', formula: 'z = r(\\cos\\theta + i\\sin\\theta) = r e^{i\\theta}', explanationEn: 'r is distance from origin, theta is inclination angle.', explanationTa: 'r ஆதியிலிருந்து உள்ள தொலைவு, theta சாய்வுக் கோணம்.' },
      { nameEn: 'De Moivre’s Theorem', nameTa: 'டி மாய்வரின் தேற்றம்', formula: '(\\cos\\theta + i\\sin\\theta)^n = \\cos n\\theta + i\\sin n\\theta', explanationEn: 'Powers of complex numbers in trigonometric form.', explanationTa: 'முக்கோணவியல் வடிவில் கலப்பு எண்களின் அடுக்குகள்.' },
      { nameEn: 'Cube Roots of Unity Property', nameTa: 'ஒன்றின் முப்படி மூலங்களின் பண்பு', formula: '1 + \\omega + \\omega^2 = 0, \\quad \\omega^3 = 1', explanationEn: 'Sum of roots of unity is zero; product is one.', explanationTa: 'மூலங்களின் கூடுதல் பூச்சியம்; பெருக்கல் ஒன்று.' }
    ],
    workedExamples: [
      {
        questionEn: 'Express z = 1 + i in polar form.',
        questionTa: 'z = 1 + i என்ற கலப்பு எண்ணை போலார் வடிவில் எழுதுக.',
        solutionEn: '1. Modulus: r = √(1² + 1²) = √2.\n2. Since x > 0, y > 0 (Quadrant I): θ = tan⁻¹(1/1) = π/4.\n3. Polar Form: z = √2(cos(π/4) + i sin(π/4)).',
        solutionTa: '1. மட்டு: r = √(1² + 1²) = √2.\n2. முதல் கால்பகுதி என்பதால்: θ = tan⁻¹(1) = π/4.\n3. போலார் வடிவம்: z = √2(cos(π/4) + i sin(π/4)).'
      }
    ]
  },

  c12_mat_ch3: {
    id: 'note_c12_mat_ch3',
    chapterId: 'c12_mat_ch3',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Theory of Equations: Vieta’s Formulas & Descartes’ Rule',
    titleTa: 'சமன்பாட்டியல்: வியட்டாவின் சூத்திரங்கள் மற்றும் தெகார்தேயின் விதி',
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
    changeNote: 'Expanded polynomial root symmetric functions and Vieta proofs.',
    changeNoteTa: 'வியட்டாவின் சூத்திரங்கள் மற்றும் சமச்சீர் சார்புகள் விரிவுபடுத்தப்பட்டன.',
    readTimeMinutes: 14,
    bodyEn: `### 1. Fundamental Theorem of Algebra
Every non-zero polynomial equation of degree $n$ with complex coefficients has exactly $n$ roots in $\\mathbb{C}$ (counted with multiplicity).

### 2. Vieta’s Formulas
For an $n$-th degree polynomial $a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 = 0$ with roots $\\alpha_1, \\alpha_2, \\dots, \\alpha_n$:
- $\\sum \\alpha_i = -\\frac{a_{n-1}}{a_n}$
- $\\sum \\alpha_i \\alpha_j = \\frac{a_{n-2}}{a_n}$
- $\\prod \\alpha_i = (-1)^n \\frac{a_0}{a_n}$

**Cubic Equation ($a x^3 + b x^2 + c x + d = 0$):**
- $\\alpha + \\beta + \\gamma = -b/a$
- $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = c/a$
- $\\alpha\\beta\\gamma = -d/a$

### 3. Conjugate Root Theorem
- Complex roots of real-coefficient polynomials always occur in conjugate pairs: If $p + iq$ is a root, $p - iq$ must also be a root.
- Irrational roots of rational-coefficient polynomials occur in pairs: If $p + \\sqrt{q}$ is a root, $p - \\sqrt{q}$ is also a root.

### 4. Descartes' Rule of Signs
- The number of positive real roots of $P(x) = 0$ is at most the number of sign changes in the coefficients of $P(x)$.
- The number of negative real roots of $P(x) = 0$ is at most the number of sign changes in the coefficients of $P(-x)$.`,
    bodyTa: `### 1. வியட்டாவின் தொடர்புகள்
$a x^3 + b x^2 + c x + d = 0$ என்ற முப்படிச் சமன்பாட்டின் மூலங்கள் $\\alpha, \\beta, \\gamma$ எனில்:
- மூலங்களின் கூடுதல்: $\\sum \\alpha = -b/a$
- இரண்டிரண்டாகப் பெருக்கி கூட்ட: $\\sum \\alpha\\beta = c/a$
- மூலங்களின் பெருக்கற்பலன்: $\\alpha\\beta\\gamma = -d/a$

### 2. இணை மூலத் தேற்றங்கள்
மெய் மூலக் கெழுக்களைக் கொண்ட பல்லுறுப்புக் கோவைச் சமன்பாட்டிற்கு $p + iq$ ஒரு மூலம் எனில் அதன் இணை $p - iq$-ம் ஒரு மூலமாகும்.

### 3. தெகார்தேயின் குறிகளின் விதி
$P(x)$-ன் கெழுக்களின் குறி மாற்றங்களின் எண்ணிக்கையே அச்சமன்பாட்டிற்கு இருக்கக்கூடிய மிகை மெய் மூலங்களின் அதிகபட்ச எண்ணிக்கையாகும். $P(-x)$-ன் குறி மாற்றங்கள் குறை மெய் மூலங்களின் உச்ச எண்ணிக்கையைக் காட்டும்.`,
    revisions: [
      { version: '2.1', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Incorporated Descartes rule problem solver guides.', changeNoteTa: 'தெகார்தே குறி விதி தீர்வு வழிகாட்டிகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Vieta’s Sum of Roots', nameTa: 'மூலங்களின் கூடுதல்', formula: '\\sum \\alpha_i = -\\frac{a_{n-1}}{a_n}', explanationEn: 'Negative ratio of second leading coefficient to leading coefficient.', explanationTa: 'இரண்டாவது கெழு மற்றும் முதன்மைக் கெழுவின் எதிர்மறை விகிதம்.' },
      { nameEn: 'Vieta’s Product of Roots', nameTa: 'மூலங்களின் பெருக்கற்பலன்', formula: '\\prod \\alpha_i = (-1)^n \\frac{a_0}{a_n}', explanationEn: 'Constant term divided by leading coefficient modulated by sign.', explanationTa: 'மாறிலி மற்றும் முதன்மைக் கெழுவின் குறி சார்ந்த பெருக்கல்.' },
      { nameEn: 'Descartes Upper Bound', nameTa: 'தெகார்தே உச்ச வரம்பு', formula: 'N_{pos} \\leq \\text{Var}(P(x))', explanationEn: 'Number of positive roots cannot exceed sign variations.', explanationTa: 'மிகை மூலங்கள் குறி மாற்றங்களை விட அதிகமாக இருக்க முடியாது.' }
    ],
    workedExamples: [
      {
        questionEn: 'Form a cubic equation whose roots are 1, 2, and 3.',
        questionTa: '1, 2, 3 ஆகியவற்றை மூலங்களாகக் கொண்ட முப்படிச் சமன்பாட்டினை அமைக்க.',
        solutionEn: '1. Sum of roots: s1 = 1 + 2 + 3 = 6.\n2. Sum of pairwise products: s2 = (1)(2) + (2)(3) + (3)(1) = 2 + 6 + 3 = 11.\n3. Product of roots: s3 = (1)(2)(3) = 6.\n4. Equation: x³ - s1*x² + s2*x - s3 = 0 => x³ - 6x² + 11x - 6 = 0.',
        solutionTa: '1. மூலங்களின் கூடுதல் s1 = 1 + 2 + 3 = 6.\n2. இரண்டிரண்டு பெருக்கல் கூடுதல் s2 = 2 + 6 + 3 = 11.\n3. மூலங்களின் பெருக்கல் s3 = 6.\n4. சமன்பாடு: x³ - 6x² + 11x - 6 = 0.'
      }
    ]
  },

  c12_mat_ch4: {
    id: 'note_c12_mat_ch4',
    chapterId: 'c12_mat_ch4',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Inverse Trigonometric Functions: Domains, Ranges & Identities',
    titleTa: 'நேர்மாறு முக்கோணவியல் சார்புகள்: சார்பகம், வீச்சகம் மற்றும் முற்றொருமைகள்',
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
    changeNote: 'Principal value branch tables and angle conversion steps updated.',
    changeNoteTa: 'முதன்மைக் கிளை அட்டவணைகள் மற்றும் கோண மாற்றங்கள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 15,
    bodyEn: `### 1. Principal Value Branches
Trigonometric functions are periodic and hence not one-to-one over their whole domains. By restricting their domains, bijective branches are created:
- $\\sin^{-1}x$: Domain $[-1, 1]$, Principal Range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
- $\\cos^{-1}x$: Domain $[-1, 1]$, Principal Range $[0, \\pi]$
- $\\tan^{-1}x$: Domain $\\mathbb{R}$, Principal Range $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$
- $\\cot^{-1}x$: Domain $\\mathbb{R}$, Principal Range $(0, \\pi)$
- $\\sec^{-1}x$: Domain $\\mathbb{R} \\setminus (-1, 1)$, Principal Range $[0, \\pi] \\setminus \\{\\frac{\\pi}{2}\\}$
- $\\csc^{-1}x$: Domain $\\mathbb{R} \\setminus (-1, 1)$, Principal Range $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}] \\setminus \\{0\\}$

### 2. Core Identities
1. **Reflection:**
   - $\\sin^{-1}(-x) = -\\sin^{-1}(x)$
   - $\\tan^{-1}(-x) = -\\tan^{-1}(x)$
   - $\\cos^{-1}(-x) = \\pi - \\cos^{-1}(x)$
2. **Complementary Angles:**
   - $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}, \\quad x \\in [-1, 1]$
   - $\\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}, \\quad x \\in \\mathbb{R}$
   - $\\sec^{-1}x + \\csc^{-1}x = \\frac{\\pi}{2}, \\quad |x| \\geq 1$
3. **Addition Formula:**
   $$\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x + y}{1 - xy}\\right), \\quad xy < 1$$`,
    bodyTa: `### 1. முதன்மைக் கிளைகளின் சார்பகம் மற்றும் வீச்சகம்
- $\\sin^{-1}x$: சார்பகம் $[-1, 1]$, முதன்மை வீச்சகம் $[-\\frac{\\pi}{2}, \\frac{\\pi}{2}]$
- $\\cos^{-1}x$: சார்பகம் $[-1, 1]$, முதன்மை வீச்சகம் $[0, \\pi]$
- $\\tan^{-1}x$: சார்பகம் $\\mathbb{R}$, முதன்மை வீச்சகம் $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$

### 2. முக்கியமான முற்றொருமைகள்
- $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$
- $\\tan^{-1}x + \\cot^{-1}x = \\frac{\\pi}{2}$
- $\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)$ ($xy < 1$)`,
    revisions: [
      { version: '2.0', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Enhanced graph domain charts.', changeNoteTa: 'வரைபட சார்பக அட்டவணைகள் புதுப்பிக்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Sine-Cosine Complementarity', nameTa: 'சைன்-கொசைன் நிரப்பு கோணம்', formula: '\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}', explanationEn: 'Holds for all x in [-1, 1].', explanationTa: '[-1, 1]-ல் உள்ள அனைத்து x மதிப்புகளுக்கும் பொருந்தும்.' },
      { nameEn: 'Arctan Sum Formula', nameTa: 'டான் கூட்டல் சூத்திரம்', formula: '\\tan^{-1}x + \\tan^{-1}y = \\tan^{-1}\\left(\\frac{x+y}{1-xy}\\right)', explanationEn: 'Valid when product xy < 1.', explanationTa: 'xy < 1 எனில் பொருந்தும்.' },
      { nameEn: 'Cosine Negative Reflection', nameTa: 'கொசைன் குறை குறி முற்றொருமை', formula: '\\cos^{-1}(-x) = \\pi - \\cos^{-1}x', explanationEn: 'Essential for finding angles in second quadrant.', explanationTa: 'இரண்டாம் கால்பகுதியில் முதன்மை மதிப்பு காண உதவுகிறது.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the principal value of sin⁻¹(-1/2).',
        questionTa: 'sin⁻¹(-1/2)-ன் முதன்மை மதிப்பு காண்க.',
        solutionEn: '1. Use reflection property: sin⁻¹(-x) = -sin⁻¹(x).\n2. sin⁻¹(1/2) = π/6.\n3. Therefore, sin⁻¹(-1/2) = -π/6, which lies inside [-π/2, π/2].',
        solutionTa: '1. sin⁻¹(-x) = -sin⁻¹(x) என்ற பண்பின்படி.\n2. sin⁻¹(1/2) = π/6.\n3. ஆகவே sin⁻¹(-1/2) = -π/6. இது [-π/2, π/2]-ல் அமைகிறது.'
      }
    ]
  },

  c12_mat_ch5: {
    id: 'note_c12_mat_ch5',
    chapterId: 'c12_mat_ch5',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Two Dimensional Analytical Geometry - II: Conics & Applications',
    titleTa: 'இருபரிமாண பகுமுறை வடிவியல் - II: கூம்பு வெட்டுகள் மற்றும் பயன்பாடுகள்',
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
    changeNote: 'Refined reflective property derivations for parabolic solar reflectors and hyperbolic navigation.',
    changeNoteTa: 'பரவளைய மற்றும் அதிபரவளைய பிரதிபலிப்புப் பயன்பாடுகள் விளக்கப்பட்டன.',
    readTimeMinutes: 17,
    bodyEn: `### 1. General Equation of Conics
A conic is the locus of a point $P$ moving such that its distance from a fixed focus $S$ bears a constant ratio $e$ (eccentricity) to its distance from a fixed directrix $L$:
$$\\frac{SP}{PM} = e$$
- $e = 1 \\implies$ **Parabola**
- $0 < e < 1 \\implies$ **Ellipse**
- $e > 1 \\implies$ **Hyperbola**

### 2. Standard Forms of Conics
1. **Parabola ($y^2 = 4ax$):**
   - Vertex $(0, 0)$, Focus $(a, 0)$, Directrix $x = -a$, Latus Rectum length $= 4a$.
2. **Ellipse ($\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, a > b$):**
   - Eccentricity: $b^2 = a^2(1 - e^2) \\implies e = \\sqrt{1 - \\frac{b^2}{a^2}}$
   - Foci: $(\\pm ae, 0)$, Directrices: $x = \\pm \\frac{a}{e}$, Latus Rectum: $\\frac{2b^2}{a}$.
3. **Hyperbola ($\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$):**
   - Eccentricity: $b^2 = a^2(e^2 - 1) \\implies e = \\sqrt{1 + \\frac{b^2}{a^2}}$
   - Foci: $(\\pm ae, 0)$, Directrices: $x = \\pm \\frac{a}{e}$, Asymptotes: $y = \\pm \\frac{b}{a}x$.

### 3. Tangents and Normals
- Condition for line $y = mx + c$ to be tangent to $y^2 = 4ax$: $c = \\frac{a}{m}$.
- Condition to be tangent to ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$: $c^2 = a^2 m^2 + b^2$.
- Condition to be tangent to hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$: $c^2 = a^2 m^2 - b^2$.`,
    bodyTa: `### 1. கூம்பு வெட்டுகளின் பொதுச் சமன்பாடு
$\\frac{SP}{PM} = e$ (மையத்தொலைத்தகவு):
- $e = 1 \\implies$ பரவளையம்
- $e < 1 \\implies$ நீள்வட்டம்
- $e > 1 \\implies$ அதிபரவளையம்

### 2. திட்டச் சமன்பாடுகள்
- **பரவளையம்:** $y^2 = 4ax$, குவியம் $(a, 0)$, இயக்குவரை $x = -a$, செவ்வகல நீளம் $4a$.
- **நீள்வட்டம்:** $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, $b^2 = a^2(1 - e^2)$, குவியங்கள் $(\\pm ae, 0)$.
- **அதிபரவளையம்:** $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, $b^2 = a^2(e^2 - 1)$, தொலைத்தொடு கோடுகள் $y = \\pm \\frac{b}{a}x$.`,
    revisions: [
      { version: '2.3', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Added optics and astronomy conic sections notes.', changeNoteTa: 'வானியல் மற்றும் ஒளியியல் கூம்பு வெட்டுப் பயன்பாடுகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Ellipse Eccentricity Relation', nameTa: 'நீள்வட்ட மையத்தொலைத்தகவு தொடர்பு', formula: 'e = \\sqrt{1 - \\frac{b^2}{a^2}}', explanationEn: 'Relates semi-major and semi-minor axes.', explanationTa: 'அரை நெட்டச்சு மற்றும் அரை குற்றச்சு ஆகியவற்றின் தொடர்பு.' },
      { nameEn: 'Parabola Tangency Condition', nameTa: 'பரவளைய தொடுகோட்டு நிபந்தனை', formula: 'c = \\frac{a}{m}', explanationEn: 'Condition for y = mx + c to touch y² = 4ax.', explanationTa: 'y = mx + c என்ற கோடு y² = 4ax-ஐத் தொடுவதற்கான நிபந்தனை.' },
      { nameEn: 'Hyperbola Asymptotes', nameTa: 'அதிபரவளைய தொலைத்தொடுகோடுகள்', formula: '\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 0 \\implies y = \\pm \\frac{b}{a}x', explanationEn: 'Straight lines tangent to hyperbola at infinity.', explanationTa: 'முடிவிலியில் அதிபரவளையத்தைத் தொடும் நேர்க்கோடுகள்.' }
    ],
    workedExamples: [
      {
        questionEn: 'Find the eccentricity and foci of the ellipse x²/25 + y²/9 = 1.',
        questionTa: 'x²/25 + y²/9 = 1 என்ற நீள்வட்டத்தின் மையத்தொலைத்தகவு மற்றும் குவியங்களைக் காண்க.',
        solutionEn: '1. Here a² = 25 (a = 5) and b² = 9 (b = 3).\n2. Eccentricity: e = √(1 - b²/a²) = √(1 - 9/25) = √(16/25) = 4/5 = 0.8.\n3. ae = 5 * (4/5) = 4.\n4. Foci are (±ae, 0) = (±4, 0).',
        solutionTa: '1. a² = 25 (a = 5), b² = 9 (b = 3).\n2. மையத்தொலைத்தகவு e = √(1 - 9/25) = 4/5 = 0.8.\n3. ae = 5 * (4/5) = 4.\n4. குவியங்கள் (±ae, 0) = (±4, 0).'
      }
    ]
  },

  c12_mat_ch6: {
    id: 'note_c12_mat_ch6',
    chapterId: 'c12_mat_ch6',
    classLevel: 12,
    subjectId: 'c12_maths',
    titleEn: 'Applications of Vector Algebra: Triple Products, Lines & Planes in 3D',
    titleTa: 'வெக்டர் இயற்கணிதத்தின் பயன்பாடுகள்: முப்பெருக்கங்கள், கோடுகள் மற்றும் தளங்கள்',
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
    changeNote: 'Comprehensive skew lines shortest distance equations added.',
    changeNoteTa: 'ஒரு தளத்தில் அமையாக் கோடுகளுக்கு இடைப்பட்ட மீச்சிறு தொலைவு சூத்திரங்கள் இணைக்கப்பட்டன.',
    readTimeMinutes: 18,
    bodyEn: `### 1. Scalar & Vector Triple Products
- **Scalar Triple Product (Box Product):**
  $$[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$$
  - Represents the volume of a parallelepiped with coterminous edges $\\vec{a}, \\vec{b}, \\vec{c}$.
  - Three vectors are **coplanar** if and only if $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.
- **Vector Triple Product:**
  $$\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$$

### 2. Equations of Straight Lines in 3D Space
- Vector equation of a line passing through point $\\vec{a}$ and parallel to $\\vec{b}$:
  $$\\vec{r} = \\vec{a} + t\\vec{b}, \\quad t \\in \\mathbb{R}$$
- Cartesian form: $\\frac{x - x_1}{b_1} = \\frac{y - y_1}{b_2} = \\frac{z - z_1}{b_3}$
- **Shortest Distance Between Skew Lines** (lines not parallel and not intersecting):
  $$\\delta = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$$

### 3. Equations of Planes in 3D Space
- Vector equation of a plane through point $\\vec{a}$ with normal $\\vec{n}$:
  $$(\\vec{r} - \\vec{a}) \\cdot \\vec{n} = 0 \\iff \\vec{r} \\cdot \\vec{n} = q$$
- Distance of a point $(x_1, y_1, z_1)$ from plane $ax + by + cz + d = 0$:
  $$p = \\frac{|ax_1 + by_1 + cz_1 + d|}{\\sqrt{a^2 + b^2 + c^2}}$$`,
    bodyTa: `### 1. திசையிலி மற்றும் வெக்டர் முப்பெருக்கம்
- திசையிலி முப்பெருக்கம் $[\\vec{a}, \\vec{b}, \\vec{c}] = \\vec{a} \\cdot (\\vec{b} \\times \\vec{c})$. இது இணைகரத் திண்மத்தின் கனஅளவைக் குறிக்கும். மூன்று வெக்டர்கள் ஒருதள வெக்டர்களாக இருக்க நிபந்தனை $[\\vec{a}, \\vec{b}, \\vec{c}] = 0$.
- வெக்டர் முப்பெருக்கம்: $\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}$.

### 2. முப்பரிமாணத்தில் நேர்க்கோடுகள் மற்றும் தளங்கள்
- கோட்டின் சமன்பாடு: $\\vec{r} = \\vec{a} + t\\vec{b}$.
- ஒரு தளத்தில் அமையாக் கோடுகளுக்கு இடைப்பட்ட மீச்சிறு தொலைவு:
  $$\\delta = \\left| \\frac{(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)}{|\\vec{b}_1 \\times \\vec{b}_2|} \\right|$$
- தளத்தின் சமன்பாடு: $(\\vec{r} - \\vec{a}) \\cdot \\vec{n} = 0$.`,
    revisions: [
      { version: '2.5', updatedAt: '21 Sep 2026', updatedAtTa: '21 செப் 2026', changeNote: 'Added 3D perspective vector geometry derivations.', changeNoteTa: 'முப்பரிமாண வெக்டர் வழிமுறைகள் சேர்க்கப்பட்டன.', updatedBy: 'Maths Panel' }
    ],
    keyFormulas: [
      { nameEn: 'Vector Triple Product Expansion', nameTa: 'வெக்டர் முப்பெருக்க விரிவு', formula: '\\vec{a} \\times (\\vec{b} \\times \\vec{c}) = (\\vec{a} \\cdot \\vec{c})\\vec{b} - (\\vec{a} \\cdot \\vec{b})\\vec{c}', explanationEn: 'BAC-CAB identity for expanding triple vector products.', explanationTa: 'மூன்று வெக்டர்களின் குறுக்குப் பெருக்கலுக்கான சூத்திரம்.' },
      { nameEn: 'Coplanarity of 3 Vectors', nameTa: 'மூன்று வெக்டர்கள் ஒருதள அமைவு', formula: '[\\vec{a}, \\vec{b}, \\vec{c}] = 0', explanationEn: 'Volume of parallelepiped collapses to zero.', explanationTa: 'இணைகரத் திண்மத்தின் கனஅளவு பூச்சியமாகும் போது.' },
      { nameEn: 'Distance Between Skew Lines', nameTa: 'ஒரு தளத்தில் அமையாக் கோடுகளின் தொலைவு', formula: 'd = \\frac{|(\\vec{a}_2 - \\vec{a}_1) \\cdot (\\vec{b}_1 \\times \\vec{b}_2)|}{|\\vec{b}_1 \\times \\vec{b}_2|}', explanationEn: 'Shortest perpendicular separation in 3D.', explanationTa: 'முப்பரிமாணத்தில் இரண்டு கோடுகளுக்கு இடைப்பட்ட மிகக் குறைந்த செங்குத்துத் தொலைவு.' }
    ],
    workedExamples: [
      {
        questionEn: 'Verify if vectors a = i + 2j + 3k, b = -i + j + k, and c = 2i + j + 2k are coplanar.',
        questionTa: 'a = i + 2j + 3k, b = -i + j + k, c = 2i + j + 2k ஆகிய வெக்டர்கள் ஒருதள வெக்டர்களா எனச் சோதிக்க.',
        solutionEn: '1. Evaluate box product [a, b, c] as determinant of components:\n| 1  2  3 |\n|-1  1  1 |\n| 2  1  2 |\n2. Determinant = 1(2 - 1) - 2(-2 - 2) + 3(-1 - 2) = 1(1) - 2(-4) + 3(-3) = 1 + 8 - 9 = 0.\n3. Since [a, b, c] = 0, the three vectors are strictly coplanar.',
        solutionTa: '1. [a, b, c] அணிக்கோவை காண்க:\n1(2 - 1) - 2(-2 - 2) + 3(-1 - 2) = 1 + 8 - 9 = 0.\n2. [a, b, c] = 0 என்பதால் இவை ஒருதள வெக்டர்கள் ஆகும்.'
      }
    ]
  }
};

export const MATHS_VOL1_SUMMARIES: Record<string, SummaryItem> = {
  c12_mat_ch1: {
    id: 'sum_c12_mat_ch1',
    chapterId: 'c12_mat_ch1',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Inversion theorem: Square matrix A has an inverse if and only if |A| ≠ 0, calculated as (1/|A|) * adj(A).',
      'The rank of matrix ρ(A) equals the number of non-zero rows in its row echelon form.',
      'Cramer’s rule solves AX = B when determinant Δ ≠ 0 using sub-determinant ratios Δx / Δ.',
      'Rouche-Capelli theorem classifies systems into consistent (unique solution if rank equals unknowns, infinite if rank < unknowns) and inconsistent (no solution).'
    ],
    keyPointsTa: [
      'நேர்மாறு அணி: சதுர அணி A-க்கு |A| ≠ 0 எனில் மட்டுமே நேர்மாறு A⁻¹ = (1/|A|) adj(A) உண்டு.',
      'அணியின் தரம் ρ(A) என்பது அதன் நிரை ஏறுபடி வடிவில் உள்ள பூச்சியமற்ற நிரைகளின் எண்ணிக்கைக்குச் சமம்.',
      'கிராமரின் விதி Δ ≠ 0 எனில் நேரியல் சமன்பாடுகளை x = Δx / Δ எனத் தீர்க்கிறது.',
      'ரூஷே-கபெல்லி தேற்றம் சமன்பாட்டுத் தொகுப்புகளின் ஒருங்கமைவை (தீர்வு உண்டு / தீர்வு இல்லை) வகைப்படுத்துகிறது.'
    ],
    simpleExplanationEn: 'Think of matrices like encryption scramblers! When you multiply a code by matrix A, you lock it; finding A⁻¹ is like crafting the exact master key that reverses the operation and recovers the original code.',
    simpleExplanationTa: 'அணிகளை ஒரு ரகசிய பூட்டு போலக் கருதலாம்! ஒரு தகவலை அணி A-ஆல் பெருக்கி பூட்டினால், அதன் நேர்மாறு அணி A⁻¹ என்பது அதை மீண்டும் திறந்து மூலச் செய்தியைத் தரும் திறவுகோல் ஆகும்.'
  },

  c12_mat_ch2: {
    id: 'sum_c12_mat_ch2',
    chapterId: 'c12_mat_ch2',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Complex number z = x + iy combines real and imaginary axes in the Argand plane.',
      'Modulus |z| gives absolute distance from origin; argument θ gives counterclockwise direction angle.',
      'Polar form z = r(cos θ + i sin θ) and Euler form z = r e^(iθ) turn complicated powers into simple angle multiplication.',
      'De Moivre’s theorem states (cos θ + i sin θ)^n = cos(nθ) + i sin(nθ), yielding n distinct n-th roots evenly spaced on a circle.'
    ],
    keyPointsTa: [
      'கலப்பு எண் z = x + iy ஆர்கண்ட் தளத்தில் மெய் மற்றும் கற்பனை அச்சுகளை இணைக்கிறது.',
      'மட்டு |z| ஆதியிலிருந்து உள்ள தூரத்தையும், வீச்சு θ கோணத்தையும் குறிக்கிறது.',
      'போலார் வடிவம் z = r(cos θ + i sin θ) பெருக்கல் மற்றும் அடுக்கு செயல்பாடுகளை எளிய கோண கூட்டலாக மாற்றுகிறது.',
      'டி மாய்வரின் தேற்றம் ஒன்றின் மூலங்களை வட்டத்தின் மீது சீரான இடைவெளியில் அமைந்த புள்ளிகளாகத் தருகிறது.'
    ],
    simpleExplanationEn: 'Multiplying by imaginary number i is mathematically equivalent to rotating a vector 90 degrees counterclockwise on a 2D map! Doing it twice rotates you 180 degrees, pointing backwards (which is why i² = -1).',
    simpleExplanationTa: 'கற்பனை எண் i-ஆல் பெருக்குவது என்பது ஒரு அம்புக்குறியை கடிகார எதிர்திசையில் 90 டிகிரி திருப்புவதற்குச் சமம்! இரண்டு முறை திருப்பினால் 180 டிகிரி எதிர்த்திசை நோக்கும் (இதனால்தான் i² = -1).'
  },

  c12_mat_ch3: {
    id: 'sum_c12_mat_ch3',
    chapterId: 'c12_mat_ch3',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Fundamental Theorem of Algebra guarantees exactly n roots for an n-th degree polynomial.',
      'Vieta’s formulas directly relate coefficients to symmetric combinations of roots (sum, pairwise product, full product).',
      'Complex roots and irrational surds always occur in conjugate pairs for polynomials with real/rational coefficients.',
      'Descartes’ rule of signs establishes upper bounds on the number of positive and negative real roots by counting sign flips.'
    ],
    keyPointsTa: [
      'இயற்கணிதத்தின் அடிப்படைக் கொள்கையின்படி n படி பல்லுறுப்புக் கோவைக்கு n மூலங்கள் உண்டு.',
      'வியட்டாவின் சூத்திரங்கள் கெழுக்களுக்கும் மூலங்களின் கூட்டல், பெருக்கல் ஆகியவற்றுக்கும் இடையிலான நேரடித் தொடர்பைத் தருகின்றன.',
      'மெய் கெழு சமன்பாடுகளில் கலப்பு மூலங்கள் மற்றும் விகிதமுறா மூலங்கள் எப்போதுமே இணைகளாகவே தோன்றும்.',
      'தெகார்தேயின் குறி விதி சமன்பாட்டின் கெழுக்களில் உள்ள குறி மாற்றங்களை எண்ணி மிகை மற்றும் குறை மூலங்களின் உச்ச வரம்பைக் கூறுகிறது.'
    ],
    simpleExplanationEn: 'Vieta discovered that you don’t need to solve a polynomial equation to know the sum or product of its answers—the coefficients on the outside already carry the secret totals inside their DNA!',
    simpleExplanationTa: 'ஒரு சமன்பாட்டை முழுமையாகத் தீர்க்காமலேயே அதன் விடைகளின் மொத்தக் கூடுதல் மற்றும் பெருக்கற்பலனை அதன் கெழுக்களிலிருந்தே கண்டுபிடித்துவிடலாம் என்பதை வியட்டா கண்டுபிடித்தார்!'
  },

  c12_mat_ch4: {
    id: 'sum_c12_mat_ch4',
    chapterId: 'c12_mat_ch4',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Inverse trigonometric functions reverse trigonometric operations within strictly defined principal branches.',
      'sin⁻¹x has principal range [-π/2, π/2], cos⁻¹x has [0, π], and tan⁻¹x has (-π/2, π/2).',
      'Crucial complementary angles rule: sin⁻¹x + cos⁻¹x = π/2 for all x in [-1, 1].',
      'Arctan addition identity enables combining slope angles in navigation and geometry.'
    ],
    keyPointsTa: [
      'நேர்மாறு முக்கோணவியல் சார்புகள் முக்கோணவியல் சார்புகளின் முதன்மைக் கிளைகளுக்குள் நேர்மாறாக செயல்படுகின்றன.',
      'sin⁻¹x-ன் வீச்சகம் [-π/2, π/2], cos⁻¹x-ன் வீச்சகம் [0, π], tan⁻¹x-ன் வீச்சகம் (-π/2, π/2).',
      'முக்கிய நிரப்புக் கோண முற்றொருமை: sin⁻¹x + cos⁻¹x = π/2.',
      'டான் கூட்டல் சூத்திரம் சாய்வுக் கோணங்களை ஒன்றிணைக்கப் பயன்படுகிறது.'
    ],
    simpleExplanationEn: 'If regular trigonometry asks "Given a 30-degree ramp, what is the vertical rise?", inverse trigonometry asks "Given a vertical rise of 0.5 meters, what was the original ramp angle?"',
    simpleExplanationTa: 'வழக்கமான முக்கோணவியல் "30 டிகிரி சாய்வில் எவ்வளவு உயரம் ஏறும்?" என்று கேட்டால், நேர்மாறு முக்கோணவியல் "அரை மீட்டர் உயரத்திற்குப் பாதை எவ்வளவு கோணத்தில் சாய வேண்டும்?" என்று கேட்கிறது.'
  },

  c12_mat_ch5: {
    id: 'sum_c12_mat_ch5',
    chapterId: 'c12_mat_ch5',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'All conics satisfy SP / PM = e, where e = 1 for parabolas, e < 1 for ellipses, and e > 1 for hyperbolas.',
      'Standard parabola y² = 4ax reflects incoming parallel rays directly into its focus (satellite dishes).',
      'Ellipse x²/a² + y²/b² = 1 has two foci; the sum of distances from any point on the ellipse to both foci is constant (2a).',
      'Hyperbola x²/a² - y²/b² = 1 has asymptotic guide rails y = ±(b/a)x that guide paths at infinity.'
    ],
    keyPointsTa: [
      'அனைத்து கூம்பு வெட்டுகளும் SP / PM = e சமன்பாட்டை நிறைவு செய்கின்றன (பரவளையம் e = 1, நீள்வட்டம் e < 1, அதிபரவளையம் e > 1).',
      'பரவளையத்தின் மீது படும் இணையான கதிர்கள் அதன் குவியத்தில் ஒருமுகப்படுத்தப்படுகின்றன (சாட்டிலைட் ஆண்டெனாக்கள்).',
      'நீள்வட்டத்தின் மீதுள்ள எந்தப் புள்ளியிலிருந்தும் இரண்டு குவியங்களுக்கு உள்ள தொலைவுகளின் கூடுதல் மாறிலி (2a).',
      'அதிபரவளையத்திற்கு y = ±(b/a)x என்ற தொலைத்தொடுகோடுகள் வழிகாட்டிகளாக அமைகின்றன.'
    ],
    simpleExplanationEn: 'Conic sections are slices of a 3D ice-cream cone cut with a sharp knife at different tilt angles: flat gives a circle, slight tilt gives an oval ellipse, parallel tilt gives an open parabola, and steep vertical slice gives a hyperbola!',
    simpleExplanationTa: 'ஒரு கூம்பு வடிவ ஐஸ்கிரீமை கத்தியால் வெட்டும்போது ஏற்படும் வடிவங்களே கூம்பு வெட்டுகள்: நேராக வெட்டினால் வட்டம், சற்று சாய்வாக வெட்டினால் நீள்வட்டம், அதன் சாய்விற்கு இணையாக வெட்டினால் பரவளையம், செங்குத்தாக வெட்டினால் அதிபரவளையம்!'
  },

  c12_mat_ch6: {
    id: 'sum_c12_mat_ch6',
    chapterId: 'c12_mat_ch6',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    keyPointsEn: [
      'Scalar triple product [a, b, c] gives the volume of a parallelepiped; equals zero if vectors are coplanar.',
      'Vector triple product a x (b x c) = (a · c)b - (a · b)c collapses cross products into a coplanar combination.',
      'A straight line in 3D is defined by a vector point and direction vector: r = a + tb.',
      'Skew lines in 3D do not intersect and are not parallel; their shortest distance is calculated via projection onto b1 x b2.'
    ],
    keyPointsTa: [
      'திசையிலி முப்பெருக்கம் [a, b, c] இணைகரத் திண்மத்தின் கனஅளவைத் தருகிறது; ஒருதள வெக்டர்கள் எனில் இது பூச்சியமாகும்.',
      'வெக்டர் முப்பெருக்க விரிவு: a x (b x c) = (a · c)b - (a · b)c.',
      'முப்பரிமாணத்தில் நேர்க்கோடு ஒரு புள்ளி மற்றும் திசை வெக்டரால் r = a + tb என வரையறுக்கப்படுகிறது.',
      'ஒரு தளத்தில் அமையாக் கோடுகளுக்கு இடையே உள்ள மீச்சிறு தொலைவு b1 x b2 வெக்டரின் வழியே கணக்கிடப்படுகிறது.'
    ],
    simpleExplanationEn: 'In 2D, two lines that never meet must be parallel. But in 3D space, an airplane flying east at 10,000 feet and a train running north on the ground never intersect and aren’t parallel—they are skew lines with a safe shortest distance between them!',
    simpleExplanationTa: 'இரு பரிமாணத்தில் வெட்டிக்கொள்ளாத கோடுகள் இணையாக இருக்க வேண்டும். ஆனால் முப்பரிமாணத்தில், 10,000 அடி உயரத்தில் கிழக்கே பறக்கும் விமானமும், தரையில் வடக்கே ஓடும் ரயிலும் ஒருபோதும் சந்திக்காது, இணையும் இல்லை—இவைதான் ஒரு தளத்தில் அமையாக் கோடுகள்!'
  }
};

export const MATHS_VOL1_QUIZZES: Record<string, ChapterQuiz> = {
  c12_mat_ch1: {
    id: 'quiz_c12_mat_ch1',
    chapterId: 'c12_mat_ch1',
    titleEn: 'Chapter 1: Matrices & Determinants Board Exam Quiz',
    titleTa: 'அலகு 1: அணிகள் மற்றும் அணிக்கோவைகள் தேர்வு வினாடி வினா',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If A is a non-singular matrix of order n, then |adj(A)| is equal to:',
        questionTa: 'வரிசை n கொண்ட பூச்சியமற்ற சதுர அணி A-க்கு |adj(A)|-ன் மதிப்பு:',
        optionsEn: ['|A|^(n-1)', '|A|^n', '|A|^(n-2)', '|A|'],
        optionsTa: ['|A|^(n-1)', '|A|^n', '|A|^(n-2)', '|A|'],
        correctAnswer: '|A|^(n-1)',
        explanationEn: 'By matrix identity A(adj A) = |A| I, taking determinants of both sides gives |A| |adj A| = |A|^n, so |adj A| = |A|^(n-1).',
        explanationTa: 'A(adj A) = |A| I என்ற பண்பின் இருபுறமும் அணிக்கோவை எடுத்தால் |adj A| = |A|^(n-1) எனப் பெறப்படுகிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'If a linear system AX = B has ρ(A) = ρ([A|B]) = 2 with 3 unknowns, the system has:',
        questionTa: '3 மாறிகளைக் கொண்ட AX = B தொகுப்பில் ρ(A) = ρ([A|B]) = 2 எனில் தொகுப்பிற்கு:',
        optionsEn: ['Unique solution', 'Infinitely many solutions', 'No solution', 'Trivial solution only'],
        optionsTa: ['ஒரே ஒரு தீர்வு', 'எண்ணிக்கையற்ற தீர்வுகள்', 'தீர்வு இல்லை', 'பூச்சியத் தீர்வு மட்டும்'],
        correctAnswer: 'Infinitely many solutions',
        explanationEn: 'By Rouche-Capelli theorem, when ρ(A) = ρ([A|B]) < n, the system is consistent with infinitely many solutions dependent on n - ρ = 1 parameter.',
        explanationTa: 'ரூஷே-கபெல்லி தேற்றப்படி தரம் மாறிகளின் எண்ணிக்கையை விடக் குறைவாக (2 < 3) இருந்தால் எண்ணிக்கையற்ற தீர்வுகள் உண்டு.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Elementary row operations alter the rank of a matrix.',
        questionTa: 'தொடக்க நிலை நிரை உருமாற்றங்கள் ஒரு அணியின் தரத்தை மாற்றும்.',
        correctAnswer: false,
        explanationEn: 'False! Elementary row operations produce row-equivalent matrices with identical ranks.',
        explanationTa: 'தவறு! தொடக்க நிலை உருமாற்றங்கள் ஒருபோதும் அணியின் தரத்தை மாற்றுவதில்லை.'
      },
      {
        id: 'q4',
        type: 'fill_blank',
        difficulty: 'medium',
        questionEn: 'For matrix inversion method to be applicable to AX = B, matrix A must be _______ (singular / non-singular).',
        questionTa: 'AX = B என்ற தொகுப்பை நேர்மாறு அணி முறையில் தீர்க்க, அணி A _______ அணியாக இருக்க வேண்டும்.',
        correctAnswer: 'non-singular',
        explanationEn: 'Matrix inversion requires |A| ≠ 0 so that A⁻¹ exists; thus A must be non-singular.',
        explanationTa: 'A⁻¹ காண |A| ≠ 0 ஆக இருக்க வேண்டும் என்பதால் A பூச்சியமற்ற கோவையணியாக இருக்க வேண்டும்.'
      }
    ]
  },

  c12_mat_ch2: {
    id: 'quiz_c12_mat_ch2',
    chapterId: 'c12_mat_ch2',
    titleEn: 'Chapter 2: Complex Numbers Mastery Quiz',
    titleTa: 'அலகு 2: கலப்பு எண்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the value of i^1729?',
        questionTa: 'i^1729-ன் மதிப்பு என்ன?',
        optionsEn: ['i', '-i', '1', '-1'],
        optionsTa: ['i', '-i', '1', '-1'],
        correctAnswer: 'i',
        explanationEn: '1729 = 4 * 432 + 1. Therefore i^1729 = (i^4)^432 * i^1 = 1 * i = i.',
        explanationTa: '1729 = 4(432) + 1. ஆகவே i^1729 = (i⁴)⁴³² * i = 1 * i = i.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'If ω is a complex cube root of unity, what is the value of (1 - ω + ω²)^6?',
        questionTa: 'ω என்பது ஒன்றின் கலப்பு முப்படி மூலம் எனில் (1 - ω + ω²)⁶-ன் மதிப்பு:',
        optionsEn: ['64', '32', '128', '0'],
        optionsTa: ['64', '32', '128', '0'],
        correctAnswer: '64',
        explanationEn: 'Since 1 + ω² = -ω, the expression becomes (-ω - ω)^6 = (-2ω)^6 = 64 * ω^6 = 64 * (1) = 64.',
        explanationTa: '1 + ω² = -ω என்பதால், (-2ω)⁶ = 64 * ω⁶ = 64(1) = 64.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The modulus of a complex number |z| is always equal to the modulus of its conjugate |z̄|.',
        questionTa: 'ஒரு கலப்பு எண்ணின் மட்டு |z| மற்றும் அதன் இணை எண்ணின் மட்டு |z̄| எப்போதும் சமம்.',
        correctAnswer: true,
        explanationEn: 'True! |x + iy| = √(x² + y²) = √(x² + (-y)²) = |x - iy|.',
        explanationTa: 'சரி! |x + iy| = √(x² + y²) = |x - iy|.'
      },
      {
        id: 'q4',
        type: 'fill_blank',
        difficulty: 'medium',
        questionEn: 'The principal argument of a complex number θ strictly satisfies _______ < θ ≤ π.',
        questionTa: 'கலப்பு எண்ணின் முதன்மை வீச்சு θ-ன் மதிப்பு _______ < θ ≤ π எல்லைக்குள் அமையும்.',
        correctAnswer: '-π',
        explanationEn: 'By convention, principal argument is in (-π, π].',
        explanationTa: 'முதன்மைக் கோண வீச்சு (-π, π] எல்லைக்குள் இருக்கும்.'
      }
    ]
  },

  c12_mat_ch3: {
    id: 'quiz_c12_mat_ch3',
    chapterId: 'c12_mat_ch3',
    titleEn: 'Chapter 3: Theory of Equations Mastery Quiz',
    titleTa: 'அலகு 3: சமன்பாட்டியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If 2 + i√3 is a root of a quadratic equation with real coefficients, the other root must be:',
        questionTa: 'மெய் கெழுக்களைக் கொண்ட இருபடிச் சமன்பாட்டின் ஒரு மூலம் 2 + i√3 எனில் மற்றொரு மூலம்:',
        optionsEn: ['2 - i√3', '-2 + i√3', '-2 - i√3', '√3 + 2i'],
        optionsTa: ['2 - i√3', '-2 + i√3', '-2 - i√3', '√3 + 2i'],
        correctAnswer: '2 - i√3',
        explanationEn: 'Complex roots of polynomials with real coefficients always occur in conjugate pairs (a ± ib).',
        explanationTa: 'மெய் கெழு பல்லுறுப்புக் கோவைகளின் கலப்பு மூலங்கள் எப்போதுமே இணைகளாக (a ± ib) அமையும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'According to Descartes’ rule of signs, the maximum number of positive real roots of x^7 - 3x^4 + 2x^3 - x + 5 = 0 is:',
        questionTa: 'தெகார்தேயின் விதிப்படி x⁷ - 3x⁴ + 2x³ - x + 5 = 0 சமன்பாட்டிற்கு இருக்கக்கூடிய அதிகபட்ச மிகை மூலங்களின் எண்ணிக்கை:',
        optionsEn: ['4', '3', '2', '5'],
        optionsTa: ['4', '3', '2', '5'],
        correctAnswer: '4',
        explanationEn: 'Signs of coefficients: + , - , + , - , +. Number of sign changes = 4. Hence at most 4 positive real roots.',
        explanationTa: 'கெழுக்களின் குறிகள்: +, -, +, -, +. குறிகள் 4 முறை மாறுகின்றன. ஆகவே மிகை மூலங்களின் உச்ச வரம்பு 4.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Every polynomial equation of odd degree with real coefficients has at least one real root.',
        questionTa: 'ஒற்றைப்படை படி கொண்ட மெய் கெழு பல்லுறுப்புக் கோவைச் சமன்பாட்டிற்கு குறைந்தது ஒரு மெய் மூலம் இருக்கும்.',
        correctAnswer: true,
        explanationEn: 'True! Complex roots occur in pairs, so an odd-degree polynomial must leave at least one root real.',
        explanationTa: 'சரி! கலப்பு மூலங்கள் இரட்டையாகவே தோன்றுவதால் ஒற்றைப்படை படி சமன்பாட்டில் குறைந்தது ஒரு மெய் மூலம் இருக்க வேண்டும்.'
      }
    ]
  },

  c12_mat_ch4: {
    id: 'quiz_c12_mat_ch4',
    chapterId: 'c12_mat_ch4',
    titleEn: 'Chapter 4: Inverse Trigonometry Quiz',
    titleTa: 'அலகு 4: நேர்மாறு முக்கோணவியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the principal value of cos⁻¹(-1/2)?',
        questionTa: 'cos⁻¹(-1/2)-ன் முதன்மை மதிப்பு:',
        optionsEn: ['2π/3', 'π/3', '-π/3', '5π/6'],
        optionsTa: ['2π/3', 'π/3', '-π/3', '5π/6'],
        correctAnswer: '2π/3',
        explanationEn: 'cos⁻¹(-x) = π - cos⁻¹(x) = π - π/3 = 2π/3, which is within the principal branch [0, π].',
        explanationTa: 'cos⁻¹(-x) = π - cos⁻¹(x) = π - π/3 = 2π/3. இது [0, π] வீச்சகத்தில் உள்ளது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The value of sin(tan⁻¹(1) + cos⁻¹(0)) is:',
        questionTa: 'sin(tan⁻¹(1) + cos⁻¹(0))-ன் மதிப்பு:',
        optionsEn: ['1/√2', '1', '0', '-1/√2'],
        optionsTa: ['1/√2', '1', '0', '-1/√2'],
        correctAnswer: '1/√2',
        explanationEn: 'tan⁻¹(1) = π/4 and cos⁻¹(0) = π/2. Then sin(π/4 + π/2) = cos(π/4) = 1/√2.',
        explanationTa: 'tan⁻¹(1) = π/4 மற்றும் cos⁻¹(0) = π/2. ஆகவே sin(π/4 + π/2) = cos(π/4) = 1/√2.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The domain of the function f(x) = sin⁻¹(x) is [-1, 1].',
        questionTa: 'f(x) = sin⁻¹(x) என்ற சார்பின் சார்பகம் [-1, 1] ஆகும்.',
        correctAnswer: true,
        explanationEn: 'True! Sine values are bounded between -1 and 1.',
        explanationTa: 'சரி! சைன் சார்பின் மதிப்புகள் -1 முதல் 1 வரை மட்டுமே இருக்கும்.'
      }
    ]
  },

  c12_mat_ch5: {
    id: 'quiz_c12_mat_ch5',
    chapterId: 'c12_mat_ch5',
    titleEn: 'Chapter 5: Conics & Analytical Geometry Quiz',
    titleTa: 'அலகு 5: கூம்பு வெட்டுகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'The eccentricity of the hyperbola x²/16 - y²/9 = 1 is:',
        questionTa: 'x²/16 - y²/9 = 1 என்ற அதிபரவளையத்தின் மையத்தொலைத்தகவு:',
        optionsEn: ['5/4', '4/5', '7/4', '5/3'],
        optionsTa: ['5/4', '4/5', '7/4', '5/3'],
        correctAnswer: '5/4',
        explanationEn: 'e = √(1 + b²/a²) = √(1 + 9/16) = √(25/16) = 5/4.',
        explanationTa: 'அதிபரவளையத்திற்கு e = √(1 + b²/a²) = √(1 + 9/16) = 5/4.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The length of the latus rectum of the parabola y² = 12x is:',
        questionTa: 'y² = 12x என்ற பரவளையத்தின் செவ்வகல நீளம்:',
        optionsEn: ['12', '3', '6', '24'],
        optionsTa: ['12', '3', '6', '24'],
        correctAnswer: '12',
        explanationEn: 'Comparing with y² = 4ax gives 4a = 12, which is the exact length of the latus rectum.',
        explanationTa: 'y² = 4ax உடன் ஒப்பிட 4a = 12. இதுவே செவ்வகலத்தின் நீளமாகும்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'For an ellipse, the eccentricity e is always greater than 1.',
        questionTa: 'ஒரு நீள்வட்டத்தின் மையத்தொலைத்தகவு e எப்போதுமே 1-ஐ விட அதிகம்.',
        correctAnswer: false,
        explanationEn: 'False! For an ellipse 0 < e < 1. For a hyperbola e > 1.',
        explanationTa: 'தவறு! நீள்வட்டத்திற்கு 0 < e < 1. அதிபரவளையத்திற்கே e > 1.'
      }
    ]
  },

  c12_mat_ch6: {
    id: 'quiz_c12_mat_ch6',
    chapterId: 'c12_mat_ch6',
    titleEn: 'Chapter 6: Vector Algebra Applications Quiz',
    titleTa: 'அலகு 6: வெக்டர் இயற்கணிதம் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 12,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'If vectors a, b, and c are coplanar, the value of the scalar triple product [a, b, c] is:',
        questionTa: 'a, b, c ஆகிய மூன்று வெக்டர்கள் ஒருதள வெக்டர்கள் எனில் [a, b, c]-ன் மதிப்பு:',
        optionsEn: ['0', '1', '-1', 'a · b · c'],
        optionsTa: ['0', '1', '-1', 'a · b · c'],
        correctAnswer: '0',
        explanationEn: 'Coplanar vectors span a flat plane with zero 3D volume; hence [a, b, c] = 0.',
        explanationTa: 'ஒருதள வெக்டர்கள் அமைக்கும் இணைகரத் திண்மத்தின் கனஅளவு பூச்சியமாகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The vector triple product a x (b x c) lies in the plane containing:',
        questionTa: 'a x (b x c) என்ற வெக்டர் முப்பெருக்கம் எந்த தளத்தில் அமையும்?',
        optionsEn: ['b and c', 'a and b', 'a and c', 'perpendicular to both b and c'],
        optionsTa: ['b மற்றும் c', 'a மற்றும் b', 'a மற்றும் c', 'b மற்றும் c-க்கு செங்குத்தாக'],
        correctAnswer: 'b and c',
        explanationEn: 'By expansion a x (b x c) = (a · c)b - (a · b)c, it is a linear combination of vectors b and c, so it lies in their plane.',
        explanationTa: 'a x (b x c) = (a · c)b - (a · b)c என்பதால் இது b மற்றும் c ஆகியவற்றின் நேரியல் சேர்க்கையாக அத்தளத்திலேயே அமைகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The distance between two parallel planes is constant everywhere.',
        questionTa: 'இரண்டு இணைத் தளங்களுக்கு இடைப்பட்ட தொலைவு எங்கும் மாறிலியாக இருக்கும்.',
        correctAnswer: true,
        explanationEn: 'True! Parallel planes have identical normal directions and constant perpendicular distance.',
        explanationTa: 'சரி! இணைத் தளங்களுக்கு இடையே உள்ள செங்குத்துத் தொலைவு மாறிலியாகும்.'
      }
    ]
  }
};

export const MATHS_VOL1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_mat_ch1: {
    id: 'diag_c12_mat_ch1',
    chapterId: 'c12_mat_ch1',
    titleEn: 'Interactive Schema: Matrix Inversion & Rouche-Capelli Consistency Flow',
    titleTa: 'அணி நேர்மாறு மற்றும் ஒருங்கமைவு தீர்மானப் பாதை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="35" width="150" height="85" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="105" y="65" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Matrix A (n x n)</text>
      <text x="105" y="85" textAnchor="middle" fill="#2563eb" fontSize="11">det(A) = |A|</text>
      <text x="105" y="103" textAnchor="middle" fill="#1d4ed8" fontSize="10">A⁻¹ = adj(A) / |A|</text>

      <rect x="225" y="35" width="150" height="85" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="65" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Augmented [A | B]</text>
      <text x="300" y="85" textAnchor="middle" fill="#15803d" fontSize="11">Row Echelon Form</text>
      <text x="300" y="103" textAnchor="middle" fill="#14532d" fontSize="10">Gaussian Elimination</text>

      <rect x="420" y="35" width="150" height="85" rx="10" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
      <text x="495" y="65" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="13">Cramer’s Rule</text>
      <text x="495" y="85" textAnchor="middle" fill="#7e22ce" fontSize="11">x = Δx / Δ</text>
      <text x="495" y="103" textAnchor="middle" fill="#581c87" fontSize="10">Valid if Δ ≠ 0</text>

      <rect x="80" y="165" width="440" height="105" rx="12" fill="#fefce8" stroke="#ca8a04" strokeWidth="2" />
      <text x="300" y="195" textAnchor="middle" fill="#854d0e" fontWeight="bold" fontSize="13">Rouche-Capelli Theorem: Consistency Criteria</text>
      <text x="300" y="218" textAnchor="middle" fill="#15803d" fontSize="11">ρ(A) = ρ([A|B]) = n  ->  Unique Solution (Consistent)</text>
      <text x="300" y="238" textAnchor="middle" fill="#d97706" fontSize="11">ρ(A) = ρ([A|B]) &lt; n  ->  Infinitely Many Solutions</text>
      <text x="300" y="256" textAnchor="middle" fill="#dc2626" fontSize="11">ρ(A) ≠ ρ([A|B])  ->  No Solution (Inconsistent)</text>
    </svg>`,
    labels: [
      { id: 'm1', labelEn: 'Coefficient Matrix [A]', labelTa: 'கெழு அணி [A]', descriptionEn: 'Square matrix of linear equation coefficients; determinant |A| dictates invertibility.', descriptionTa: 'சமன்பாடுகளின் கெழுக்களால் ஆன சதுர அணி; |A| ≠ 0 எனில் நேர்மாறு உண்டு.', x: 25, y: 35 },
      { id: 'm2', labelEn: 'Augmented Matrix [A|B]', labelTa: 'விரிவுபடுத்தப்பட்ட அணி [A|B]', descriptionEn: 'Includes constants column B; row reduction determines consistency rank ρ([A|B]).', descriptionTa: 'மாறிலிகள் B-ஐ இணைத்து ஏறுபடி வடிவத்திற்கு மாற்றி தரம் தீர்மானிக்கப்படுகிறது.', x: 50, y: 35 },
      { id: 'm3', labelEn: 'Rouche-Capelli Decision Node', labelTa: 'ரூஷே-கபெல்லி முடிவுப் புள்ளி', descriptionEn: 'If ρ(A) = ρ([A|B]) = n -> Unique Solution; if rank < n -> Infinite Solutions; if ranks unequal -> Inconsistent.', descriptionTa: 'தரம் சமம் எனில் ஒருங்கமைவு உண்டு; தரம் வேறுபட்டால் தீர்வு இல்லை.', x: 75, y: 55 }
    ]
  },
  c12_mat_ch2: {
    id: 'diag_c12_mat_ch2',
    chapterId: 'c12_mat_ch2',
    titleEn: 'Argand Plane: Polar Coordinates & Roots of Unity on Unit Circle',
    titleTa: 'ஆர்கண்ட் தளம்: போலார் ஆயத்தொலைவுகள் மற்றும் ஒன்றின் மூலங்கள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="50" y1="150" x2="550" y2="150" stroke="#94a3b8" strokeWidth="2" />
      <line x1="300" y1="20" x2="300" y2="280" stroke="#94a3b8" strokeWidth="2" />
      <text x="545" y="140" fill="#64748b" fontSize="11">Re (Real Axis)</text>
      <text x="310" y="35" fill="#64748b" fontSize="11">Im (Imaginary Axis)</text>

      <circle cx="300" cy="150" r="90" fill="none" stroke="#3b82f6" strokeWidth="2" strokeDasharray="4" />

      <circle cx="390" cy="150" r="6" fill="#ef4444" />
      <text x="405" y="145" fill="#b91c1c" fontWeight="bold" fontSize="12">z₁ = 1</text>

      <circle cx="255" cy="72" r="6" fill="#10b981" />
      <text x="210" y="65" fill="#047857" fontWeight="bold" fontSize="12">z₂ = ω (120°)</text>

      <circle cx="255" cy="228" r="6" fill="#8b5cf6" />
      <text x="205" y="240" fill="#6d28d9" fontWeight="bold" fontSize="12">z₃ = ω² (240°)</text>

      <polygon points="390,150 255,72 255,228" fill="#eff6ff" fillOpacity="0.5" stroke="#2563eb" strokeWidth="2" />

      <rect x="30" y="20" width="180" height="60" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="120" y="42" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">Polar Form</text>
      <text x="120" y="62" textAnchor="middle" fill="#2563eb" fontSize="11">z = r(cos θ + i sin θ) = re^(iθ)</text>
    </svg>`,
    labels: [
      { id: 'p1', labelEn: 'Real Axis (Re)', labelTa: 'மெய் அச்சு (Re)', descriptionEn: 'Horizontal axis representing real component x = r cos θ.', descriptionTa: 'மெய் பகுதி x-ஐக் குறிக்கும் கிடைமட்ட அச்சு.', x: 50, y: 50 },
      { id: 'p2', labelEn: 'Imaginary Axis (Im)', labelTa: 'கற்பனை அச்சு (Im)', descriptionEn: 'Vertical axis representing imaginary component y = r sin θ.', descriptionTa: 'கற்பனை பகுதி y-ஐக் குறிக்கும் செங்குத்து அச்சு.', x: 50, y: 20 },
      { id: 'p3', labelEn: 'Cube Roots of Unity Equilateral Triangle', labelTa: 'ஒன்றின் முப்படி மூலங்கள் சமபக்க முக்கோணம்', descriptionEn: 'Three roots (1, ω, ω²) spaced at 2π/3 radians forming a regular polygon on |z| = 1; sum = 0 and ω³ = 1.', descriptionTa: 'ஓரலகு வட்டத்தில் 120° இடைவெளியில் சமபக்க முக்கோணமாக அமையும் மூன்று புள்ளிகள்; கூடுதல் = 0.', x: 75, y: 40 }
    ]
  },
  c12_mat_ch3: {
    id: 'diag_c12_mat_ch3',
    chapterId: 'c12_mat_ch3',
    titleEn: 'Theory of Equations: Vieta’s Formulas & Descartes’ Rule of Signs',
    titleTa: 'சமன்பாட்டியல்: வியட்டாவின் சூத்திரங்கள் மற்றும் தேகார்தேயின் குறியீட்டு விதி',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="30" width="255" height="115" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="157" y="58" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">Vieta’s Relations (Cubic)</text>
      <text x="157" y="80" textAnchor="middle" fill="#1d4ed8" fontSize="11">ax³ + bx² + cx + d = 0</text>
      <text x="157" y="100" textAnchor="middle" fill="#2563eb" fontSize="11">∑α = -b/a  |  ∑αβ = c/a</text>
      <text x="157" y="120" textAnchor="middle" fill="#1e3a8a" fontSize="11">Product: αβγ = -d/a</text>

      <rect x="315" y="30" width="255" height="115" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
      <text x="442" y="58" textAnchor="middle" fill="#991b1b" fontWeight="bold" fontSize="13">Descartes’ Rule of Signs</text>
      <text x="442" y="80" textAnchor="middle" fill="#dc2626" fontSize="11">P(x) sign changes = Max positive real roots</text>
      <text x="442" y="100" textAnchor="middle" fill="#b91c1c" fontSize="11">P(-x) sign changes = Max negative real roots</text>
      <text x="442" y="120" textAnchor="middle" fill="#7f1d1d" fontSize="11">Remaining = Complex conjugate pairs</text>

      <rect x="70" y="175" width="460" height="85" rx="12" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">Fundamental Theorem of Algebra</text>
      <text x="300" y="228" textAnchor="middle" fill="#15803d" fontSize="11">Every polynomial of degree n with complex coefficients has exactly n roots</text>
      <text x="300" y="246" textAnchor="middle" fill="#14532d" fontSize="10">Imaginary roots always appear in conjugate pairs: p + iq and p - iq</text>
    </svg>`,
    labels: [
      { id: 'te1', labelEn: 'Vieta’s Root-Coefficient Relations', labelTa: 'வியட்டாவின் கெழு-மூல தொடர்புகள்', descriptionEn: 'Connects sums and products of polynomial roots directly to leading and trailing coefficients.', descriptionTa: 'மூலங்களின் கூடுதல் மற்றும் பெருக்கற்பலன்களை கெழுக்களோடு நேரடியாக இணைக்கும் சூத்திரங்கள்.', x: 25, y: 30 },
      { id: 'te2', labelEn: 'Descartes’ Sign Rule Analysis', labelTa: 'தேகார்தேயின் குறியீட்டு ஆய்வு', descriptionEn: 'Bound on real positive and negative roots determined simply by inspecting sign variations in P(x) and P(-x).', descriptionTa: 'குறியீட்டு மாற்றங்களை எண்ணுவதன் மூலம் அதிகபட்ச மெய் மூலங்களின் எண்ணிக்கையை அறிதல்.', x: 75, y: 30 },
      { id: 'te3', labelEn: 'Complex Conjugate Pairs Symmetry', labelTa: 'இணை கலப்பெண் மூலங்கள் சமச்சீர்', descriptionEn: 'For polynomials with real coefficients, imaginary roots occur symmetrically across the real axis.', descriptionTa: 'மெய்யெண் கெழுக்கள் கொண்ட சமன்பாடுகளுக்கு கற்பனை மூலங்கள் எப்போதும் இணைகளாகவே வரும்.', x: 50, y: 70 }
    ]
  },
  c12_mat_ch4: {
    id: 'diag_c12_mat_ch4',
    chapterId: 'c12_mat_ch4',
    titleEn: 'Inverse Trigonometric Functions: Principal Domains & Bounded Ranges',
    titleTa: 'நேர்மாறு முக்கோணவியல் சார்புகள்: முதன்மை சார்பகம் மற்றும் வீச்சகங்கள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <rect x="30" y="30" width="160" height="115" rx="10" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <text x="110" y="60" textAnchor="middle" fill="#1e40af" fontWeight="bold" fontSize="13">y = sin⁻¹(x)</text>
      <text x="110" y="82" textAnchor="middle" fill="#2563eb" fontSize="11">Domain: [-1, 1]</text>
      <text x="110" y="102" textAnchor="middle" fill="#1e3a8a" fontSize="11">Range: [-π/2, π/2]</text>
      <text x="110" y="122" textAnchor="middle" fill="#64748b" fontSize="10">Odd: sin⁻¹(-x) = -sin⁻¹(x)</text>

      <rect x="220" y="30" width="160" height="115" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="300" y="60" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="13">y = cos⁻¹(x)</text>
      <text x="300" y="82" textAnchor="middle" fill="#15803d" fontSize="11">Domain: [-1, 1]</text>
      <text x="300" y="102" textAnchor="middle" fill="#14532d" fontSize="11">Range: [0, π]</text>
      <text x="300" y="122" textAnchor="middle" fill="#64748b" fontSize="10">cos⁻¹(-x) = π - cos⁻¹(x)</text>

      <rect x="410" y="30" width="160" height="115" rx="10" fill="#faf5ff" stroke="#9333ea" strokeWidth="2" />
      <text x="490" y="60" textAnchor="middle" fill="#6b21a8" fontWeight="bold" fontSize="13">y = tan⁻¹(x)</text>
      <text x="490" y="82" textAnchor="middle" fill="#7e22ce" fontSize="11">Domain: (-∞, ∞)</text>
      <text x="490" y="102" textAnchor="middle" fill="#581c87" fontSize="11">Range: (-π/2, π/2)</text>
      <text x="490" y="122" textAnchor="middle" fill="#64748b" fontSize="10">tan⁻¹(-x) = -tan⁻¹(x)</text>

      <rect x="60" y="175" width="480" height="95" rx="12" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="300" y="205" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="13">Fundamental Complementary Identities</text>
      <text x="300" y="228" textAnchor="middle" fill="#b45309" fontSize="11">sin⁻¹(x) + cos⁻¹(x) = π/2  for x ∈ [-1, 1]</text>
      <text x="300" y="248" textAnchor="middle" fill="#b45309" fontSize="11">tan⁻¹(x) + cot⁻¹(x) = π/2  and  sec⁻¹(x) + cosec⁻¹(x) = π/2</text>
    </svg>`,
    labels: [
      { id: 'itf1', labelEn: 'sin⁻¹(x) Principal Branch', labelTa: 'sin⁻¹(x) முதன்மை கிளை', descriptionEn: 'Restricted domain [-π/2, π/2] ensuring sine passes horizontal line test and possesses unique inverse.', descriptionTa: 'சைன் சார்பு ஒன்றுக்கு-ஒன்றாக இருக்க தேர்வு செய்யப்பட்ட [-π/2, π/2] முதன்மைக் கிளை.', x: 20, y: 35 },
      { id: 'itf2', labelEn: 'cos⁻¹(x) Principal Branch', labelTa: 'cos⁻¹(x) முதன்மை கிளை', descriptionEn: 'Restricted to [0, π]; values in quadrant II are strictly positive between π/2 and π.', descriptionTa: 'கொசைன் சார்பின் முதன்மை கிளை [0, π]; எதிர்மறை மதிப்புகளுக்கு கோணம் π - cos⁻¹(x).', x: 50, y: 35 },
      { id: 'itf3', labelEn: 'Complementary Sums (π/2)', labelTa: 'நிரப்பு கோண கூடுதல் (π/2)', descriptionEn: 'Sum of inverse co-functions is identically π/2 due to right-triangle acute angle complementarity.', descriptionTa: 'செங்கோண முக்கோணத்தின் நிரப்புக் கோணங்களால் sin⁻¹(x) + cos⁻¹(x) = π/2 ஆகிறது.', x: 50, y: 75 }
    ]
  },
  c12_mat_ch5: {
    id: 'diag_c12_mat_ch5',
    chapterId: 'c12_mat_ch5',
    titleEn: 'Conic Geometry: Focus, Directrix & Eccentricity Construction',
    titleTa: 'கூம்பு வெட்டு வடிவியல்: குவியம், இயக்குவரை மற்றும் மையத்தொலைத்தகவு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <line x1="50" y1="150" x2="550" y2="150" stroke="#94a3b8" strokeWidth="2" />
      <line x1="120" y1="30" x2="120" y2="270" stroke="#ef4444" strokeWidth="2.5" strokeDasharray="4" />
      <text x="110" y="45" textAnchor="end" fill="#dc2626" fontWeight="bold" fontSize="11">Directrix (x = -a)</text>

      <path d="M 380 40 Q 200 150 380 260" fill="none" stroke="#2563eb" strokeWidth="3" />
      <text x="390" y="50" fill="#2563eb" fontWeight="bold" fontSize="12">Parabola y² = 4ax</text>

      <circle cx="280" cy="150" r="6" fill="#10b981" stroke="#065f46" strokeWidth="2" />
      <text x="280" y="175" textAnchor="middle" fill="#047857" fontWeight="bold" fontSize="12">Focus S(a, 0)</text>

      <circle cx="240" cy="150" r="4" fill="#0f172a" />
      <text x="240" y="140" textAnchor="middle" fill="#0f172a" fontSize="11">Vertex V(0,0)</text>

      <line x1="280" y1="80" x2="280" y2="220" stroke="#8b5cf6" strokeWidth="2" />
      <text x="290" y="90" fill="#6d28d9" fontSize="11">Latus Rectum = 4a</text>

      <rect x="350" y="180" width="210" height="80" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
      <text x="455" y="205" textAnchor="middle" fill="#0f172a" fontWeight="bold" fontSize="11">Conic Definition: SP / PM = e</text>
      <text x="455" y="225" textAnchor="middle" fill="#2563eb" fontSize="10">Parabola: e = 1</text>
      <text x="455" y="240" textAnchor="middle" fill="#059669" fontSize="10">Ellipse: e &lt; 1  |  Hyperbola: e &gt; 1</text>
    </svg>`,
    labels: [
      { id: 'c1', labelEn: 'Focus S(ae, 0)', labelTa: 'குவியம் S(ae, 0)', descriptionEn: 'Fixed focal point inside conic section.', descriptionTa: 'கூம்பு வெட்டின் உள்ளே அமைந்த நிலையான குவியப் புள்ளி.', x: 45, y: 50 },
      { id: 'c2', labelEn: 'Directrix L: x = a/e', labelTa: 'இயக்குவரை L: x = a/e', descriptionEn: 'Fixed vertical directrix line maintaining constant ratio SP/PM = e.', descriptionTa: 'நிலையான இயக்குவரைக் கோடு; SP/PM = e என்ற மாறிலி விகிதத்தை உறுதி செய்கிறது.', x: 20, y: 50 },
      { id: 'c3', labelEn: 'Conic Curve (SP/PM = e)', labelTa: 'கூம்பு வெட்டு வளைவரை', descriptionEn: 'Parabola (e=1), Ellipse (e<1), or Hyperbola (e>1).', descriptionTa: 'மையத்தொலைத்தகவு e-ன் மதிப்பைப் பொறுத்து அமையும் வளைவரை.', x: 60, y: 35 }
    ]
  },
  c12_mat_ch6: {
    id: 'diag_c12_mat_ch6',
    chapterId: 'c12_mat_ch6',
    titleEn: '3D Vector Geometry: Parallelepiped Volume & Skew Lines Distance',
    titleTa: 'முப்பரிமாண வெக்டர்கள்: இணைகரத் திண்மம் மற்றும் கோடுகளின் தொலைவு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" className="w-full h-full max-h-72">
      <polygon points="120,200 240,200 300,150 180,150" fill="#eff6ff" stroke="#3b82f6" strokeWidth="2" />
      <polygon points="120,120 240,120 300,70 180,70" fill="#dbeafe" stroke="#3b82f6" strokeWidth="2" />
      <line x1="120" y1="200" x2="120" y2="120" stroke="#3b82f6" strokeWidth="2" />
      <line x1="240" y1="200" x2="240" y2="120" stroke="#3b82f6" strokeWidth="2" />
      <line x1="300" y1="150" x2="300" y2="70" stroke="#3b82f6" strokeWidth="2" />
      <line x1="180" y1="150" x2="180" y2="70" stroke="#3b82f6" strokeWidth="2" />

      <text x="175" y="215" fill="#1e40af" fontWeight="bold" fontSize="11">Vector a</text>
      <text x="285" y="180" fill="#1e40af" fontWeight="bold" fontSize="11">Vector b</text>
      <text x="100" y="160" fill="#1e40af" fontWeight="bold" fontSize="11">Vector c</text>

      <rect x="350" y="40" width="220" height="105" rx="10" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
      <text x="460" y="70" textAnchor="middle" fill="#166534" fontWeight="bold" fontSize="12">Scalar Triple Product</text>
      <text x="460" y="92" textAnchor="middle" fill="#15803d" fontSize="11">Volume = [a, b, c] = a · (b x c)</text>
      <text x="460" y="112" textAnchor="middle" fill="#14532d" fontSize="11">[a, b, c] = 0 &lt;=&gt; Coplanar Vectors</text>
      <text x="460" y="130" textAnchor="middle" fill="#64748b" fontSize="10">Cyclic Permutation Invariance</text>

      <rect x="350" y="170" width="220" height="95" rx="10" fill="#fffbeb" stroke="#f59e0b" strokeWidth="2" />
      <text x="460" y="198" textAnchor="middle" fill="#92400e" fontWeight="bold" fontSize="12">Skew Lines Distance</text>
      <text x="460" y="220" textAnchor="middle" fill="#b45309" fontSize="11">δ = |(a₂ - a₁) · (b₁ x b₂)| / |b₁ x b₂|</text>
      <text x="460" y="240" textAnchor="middle" fill="#78350f" fontSize="10">Shortest perpendicular segment</text>
    </svg>`,
    labels: [
      { id: 'v1', labelEn: 'Vector a, b, c Edges', labelTa: 'வெக்டர் விளிம்புகள் a, b, c', descriptionEn: 'Coterminous vectors forming 3D parallelepiped; volume = [a, b, c].', descriptionTa: 'இணைகரத் திண்மத்தை உருவாக்கும் மூன்று விளிம்பு வெக்டர்கள்.', x: 25, y: 55 },
      { id: 'v2', labelEn: 'Scalar Triple Product Volume', labelTa: 'திசையிலி முப்பெருக்கம் கனஅளவு', descriptionEn: 'Computes volume of parallelepiped; equals 0 if all 3 vectors lie in same plane.', descriptionTa: 'இணைகரத் திண்மத்தின் கனஅளவு; மூன்று வெக்டர்களும் ஒருதளத்தில் அமைந்தால் [a, b, c] = 0.', x: 75, y: 30 },
      { id: 'v3', labelEn: 'Shortest Distance Between Skew Lines', labelTa: 'இரு கோடுகளுக்கு இடைப்பட்ட மீச்சிறு தூரம்', descriptionEn: 'Minimal perpendicular segment connecting two non-intersecting non-parallel lines in 3D.', descriptionTa: 'முப்பரிமாணத்தில் வெட்டிக்கொள்ளாத இரு கோடுகளுக்கு இடைப்பட்ட குறைந்தபட்ச தூரம்.', x: 75, y: 70 }
    ]
  }
};

export const MATHS_VOL1_VIDEOS: Record<string, VideoExplainer> = {
  c12_mat_ch1: {
    id: 'vid_c12_mat_ch1',
    chapterId: 'c12_mat_ch1',
    titleEn: 'Visual Concept: How Matrices Power Modern 3D Graphics & Encryption',
    titleTa: 'காட்சிக் கருத்து: 3D கிராபிக்ஸ் மற்றும் குறியாக்கத்தில் அணிகளின் பயன்பாடு',
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Matrix as a Transformation Machine',
        titleTa: 'உருமாற்ற இயந்திரமாக அணிகள்',
        visualDescription: 'A 2D coordinate grid stretching, shearing, and rotating as a 2x2 matrix acts upon unit basis vectors.',
        narrationEn: 'Every matrix is more than a grid of numbers—it is a geometric transformation machine! Multiplying a vector moves, rotates, or stretches space.',
        narrationTa: 'ஒவ்வொரு அணியும் வெறும் எண்களின் கட்டம் மட்டுமல்ல—அது விண்வெளியை சுழற்றும், நீட்டும் அல்லது மாற்றியமைக்கும் ஒரு கணித இயந்திரம்!',
        conceptKey: 'Matrix Transformations'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Inversion Master Key',
        titleTa: 'நேர்மாறு என்ற திறவுகோல்',
        visualDescription: 'A scrambled message matrix multiplied by A⁻¹ instantly unscrambling into readable plain text.',
        narrationEn: 'When |A| ≠ 0, the inverse matrix A⁻¹ acts as the perfect rewind button, undoing the transformation and unlocking linear systems.',
        narrationTa: '|A| பூச்சியமில்லாத போது, நேர்மாறு அணி A⁻¹ பழைய நிலைக்குத் திரும்பும் மாயத் திறவுகோலாகச் செயல்பட்டு சமன்பாடுகளுக்குத் தீர்வு காண்கிறது.',
        conceptKey: 'Matrix Inverse & Cramer’s Rule'
      },
      {
        sceneNumber: 3,
        titleEn: 'Rouche-Capelli Consistency in Real Networks',
        titleTa: 'நடைமுறை மின்சுற்றுகளில் ஒருங்கமைவு',
        visualDescription: 'A power grid electrical circuit where Kirchoff current equations are evaluated for consistent power distribution.',
        narrationEn: 'Engineers use the Rouche-Capelli theorem to test whether electrical grids and structural bridges have stable, unique solutions before construction.',
        narrationTa: 'பொறியாளர்கள் மின் கட்டமைப்பு மற்றும் பாலங்களின் சமன்பாடுகள் நிலையான தீர்வுகளைக் கொண்டுள்ளனவா என்பதை ரூஷே-கபெல்லி தேற்றம் மூலமே சரிபார்க்கின்றனர்.',
        conceptKey: 'Rouche-Capelli Application'
      }
    ]
  },
  c12_mat_ch2: {
    id: 'vid_c12_mat_ch2',
    chapterId: 'c12_mat_ch2',
    titleEn: 'Unlocking Imaginary Space: The Geometry of Complex Numbers',
    titleTa: 'கற்பனை உலகைத் திறத்தல்: கலப்பெண்களின் வடிவியல் நடனம்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Square Root of Minus One',
        titleTa: 'மைனஸ் ஒன்றின் வர்க்கமூலம்: i',
        visualDescription: 'A number line rotating 90 degrees counter-clockwise from positive 1 into the vertical imaginary axis to create the imaginary unit i.',
        narrationEn: 'Multiplying by negative one flips a number 180 degrees. Multiplying by i is simply rotating halfway—a 90 degree turn into the vertical dimension!',
        narrationTa: 'மைனஸ் ஒன்றால் பெருக்கினால் எண் 180 பாகை சுழலும். i-ஆல் பெருக்கினால் அது நேர்த்தியாக 90 பாகை சுழன்று புதிய கற்பனை பரிமாணத்தை உருவாக்குகிறது!',
        conceptKey: 'Imaginary Unit as Rotation'
      },
      {
        sceneNumber: 2,
        titleEn: 'De Moivre’s Symphony: Multiplication as Spiral',
        titleTa: 'டி மாய்வரின் தேற்றம்: பெருக்கல் ஒரு சுழல்',
        visualDescription: 'Multiplying two polar complex numbers: radii multiplying while angles add smoothly like musical harmonies.',
        narrationEn: 'In polar form, multiplying complex numbers multiplies lengths and adds angles. De Moivre’s theorem turns powers of numbers into graceful rotations.',
        narrationTa: 'போலார் வடிவில் கலப்பெண்களைப் பெருக்கும் போது அவற்றின் தூரங்கள் பெருக்கப்பட்டு கோணங்கள் கூட்டப்படுகின்றன. இதுவே டி மாய்வரின் தேற்றம்!',
        conceptKey: 'De Moivre’s Theorem'
      },
      {
        sceneNumber: 3,
        titleEn: 'Roots of Unity: Perfect Regular Polygons',
        titleTa: 'ஒன்றின் மூலங்கள்: சமபக்க பலகோணங்கள்',
        visualDescription: 'Three cube roots of unity forming an equilateral triangle and five fifth roots forming a glowing pentagon inside the unit circle.',
        narrationEn: 'The nth roots of unity divide the unit circle into n identical slices, forming perfectly balanced equilateral polygons used in digital signal processing and fast Fourier transforms.',
        narrationTa: 'ஒன்றின் n-படி மூலங்கள் ஓரலகு வட்டத்தில் சமபக்க பலகோணங்களை உருவாக்கி டிஜிட்டல் ஆடியோ மற்றும் தொலைத்தொடர்பில் பயன்படுகின்றன.',
        conceptKey: 'Roots of Unity & FFT'
      }
    ]
  },
  c12_mat_ch3: {
    id: 'vid_c12_mat_ch3',
    chapterId: 'c12_mat_ch3',
    titleEn: 'The Secret Code of Polynomial Roots: Vieta & Descartes',
    titleTa: 'பல்லுறுப்புக் கோவை மூலங்களின் ரகசிய குறியீடு: வியட்டா மற்றும் தேகார்தே',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Vieta’s Bridge Between Roots and Coefficients',
        titleTa: 'கெழுக்களுக்கும் மூலங்களுக்கும் இடையிலான வியட்டாவின் பாலம்',
        visualDescription: 'A quadratic curve y = ax² + bx + c with roots α and β; arrows connecting α+β to -b/a and αβ to c/a.',
        narrationEn: 'François Viète discovered that you never need to solve an equation to know the sum and product of its roots—they are hidden right inside the coefficients!',
        narrationTa: 'சமன்பாட்டைத் தீர்க்காமலேயே மூலங்களின் கூடுதல் மற்றும் பெருக்கலை அதன் கெழுக்களிலிருந்தே அறியலாம் என்பதை வியட்டா கண்டறிந்தார்!',
        conceptKey: 'Vieta’s Relations'
      },
      {
        sceneNumber: 2,
        titleEn: 'Descartes’ Sign Variation Telescope',
        titleTa: 'தேகார்தேயின் குறியீட்டுத் தொலைநோக்கி',
        visualDescription: 'A long polynomial equation highlighting plus-to-minus sign changes like flashing neon lights.',
        narrationEn: 'Descartes discovered that counting how many times signs flip between consecutive terms immediately tells you the maximum possible positive roots.',
        narrationTa: 'பல்லுறுப்புக் கோவையில் குறிகள் எத்தனை முறை மாறுகின்றன என்பதை எண்ணுவதன் மூலம் மிகை மெய் மூலங்களின் எண்ணிக்கையை எளிதில் அறியலாம்.',
        conceptKey: 'Descartes’ Rule of Signs'
      },
      {
        sceneNumber: 3,
        titleEn: 'Symmetric Roots in Structural Engineering',
        titleTa: 'கட்டமைப்பில் சமச்சீர் மூலங்கள்',
        visualDescription: 'Bridge suspension cables designed with cubic polynomial catenary curves ensuring harmonic resonance damping.',
        narrationEn: 'Engineers use symmetric polynomials to ensure vibrating bridges and skyscraper tuned mass dampers remain stable under heavy winds.',
        narrationTa: 'பாலங்கள் மற்றும் வானளாவிய கட்டிடங்கள் காற்றில் ஆடாமல் நிலைத்திருக்க சமச்சீர் பல்லுறுப்புக் கோவை சமன்பாடுகளே உதவுகின்றன.',
        conceptKey: 'Symmetric Functions & Stability'
      }
    ]
  },
  c12_mat_ch4: {
    id: 'vid_c12_mat_ch4',
    chapterId: 'c12_mat_ch4',
    titleEn: 'Taming Infinite Waves: The Science of Inverse Trigonometry',
    titleTa: 'முடிவிலா அலைகளை அடக்குதல்: நேர்மாறு முக்கோணவியலின் அறிவியல்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Infinite Wave Trap',
        titleTa: 'முடிவிலா அலைகளின் சவால்',
        visualDescription: 'A sine wave undulating infinitely across the screen, failing the horizontal line test at every single level.',
        narrationEn: 'A function can only have an inverse if each output comes from exactly one input. Because sine repeats forever, we must slice out a restricted principal branch!',
        narrationTa: 'ஒரு சார்புக்கு நேர்மாறு இருக்க வேண்டுமானால் அது ஒன்றுக்கு-ஒன்றாக இருக்க வேண்டும். முடிவில்லாமல் சுழலும் சைன் அலைக்கு முதன்மை கிளை மட்டுமே தீர்வாகும்!',
        conceptKey: 'Horizontal Line Test & Branch Restriction'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Mirror of y = x',
        titleTa: 'y = x சமச்சீர் கண்ணாடி',
        visualDescription: 'The sine curve between -π/2 and π/2 reflecting cleanly across the line y = x to form the graceful S-curve of arcsin.',
        narrationEn: 'Reflecting the curve across the diagonal line y = x gives birth to inverse sine. Its domain is locked strictly between -1 and 1, with angles in radians.',
        narrationTa: 'y = x என்ற நேர்க்கோட்டில் பிரதிபலிக்கும் போது உருவாகும் வளைவரையே நேர்மாறு சைன் சார்பு ஆகும்; இதன் சார்பகம் [-1, 1] மட்டுமே.',
        conceptKey: 'Reflection and Principal Range'
      },
      {
        sceneNumber: 3,
        titleEn: 'Targeting Angles in Satellite Radar & Robotics',
        titleTa: 'ரேடார் மற்றும் ரோபோட்டிக்ஸில் கோணக் கணிப்பு',
        visualDescription: 'A robotic arm calculating joint rotation angles using arctan(y/x) to reach a moving target coordinate on an assembly line.',
        narrationEn: 'Robotic arms and autonomous spacecraft use inverse tangent functions at millisecond speeds to calculate exact joint steering angles from 3D coordinates.',
        narrationTa: 'ரோபோ கைகளும் விண்கலங்களும் இலக்கை துல்லியமாக அடைய ஆயத்தொலைவுகளைக் கொண்டு arctan மூலம் சுழற்சி கோணங்களை கணக்கிடுகின்றன.',
        conceptKey: 'Inverse Kinematics & Arc Functions'
      }
    ]
  },
  c12_mat_ch5: {
    id: 'vid_c12_mat_ch5',
    chapterId: 'c12_mat_ch5',
    titleEn: 'Conics in Space Exploration & Optics',
    titleTa: 'விண்வெளி ஆய்வு மற்றும் ஒளியியலில் கூம்பு வெட்டுகள்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Parabolic Solar Concentrator',
        titleTa: 'பரவளைய சூரிய வெப்பக் குவிப்பான்',
        visualDescription: 'Sunlight rays reflecting off a parabolic dish and perfectly converging onto a single glowing focal receiver.',
        narrationEn: 'Every light ray parallel to a parabola’s axis reflects straight to its focus. This geometric property powers solar furnaces, car headlights, and satellite dishes!',
        narrationTa: 'பரவளையத்தின் மீது படும் இணையான கதிர்கள் அனைத்தும் அதன் குவியத்தில் ஒரே புள்ளியில் குவிகின்றன. இதுவே சோலார் மற்றும் ஆண்டெனாக்களின் தத்துவம்!',
        conceptKey: 'Parabolic Reflection'
      },
      {
        sceneNumber: 2,
        titleEn: 'Planetary Orbits & Whispering Galleries',
        titleTa: 'கோள்களின் நீள்வட்டப் பாதைகள்',
        visualDescription: 'Earth orbiting the Sun at one focus of an ellipse, accompanied by sound waves echoing between elliptical gallery foci.',
        narrationEn: 'Kepler discovered planets orbit the Sun in ellipses. A whisper at one focus bounces off the elliptical wall and reaches the other focus with crystal clarity.',
        narrationTa: 'கெப்லரின் கூற்றுப்படி கோள்கள் சூரியனை நீள்வட்டப் பாதையில் சுற்றுகின்றன. இதன் ஒரு குவியத்தில் பேசும் மெல்லிய குரல் மறு குவியத்தில் தெளிவாகக் கேட்கும்.',
        conceptKey: 'Elliptical Geometry'
      },
      {
        sceneNumber: 3,
        titleEn: 'Hyperbolic Space Trajectories',
        titleTa: 'அதிபரவளைய விண்கலப் பாதைகள்',
        visualDescription: 'A deep space probe flying past Jupiter, gaining speed and escaping the solar system along a hyperbolic arc.',
        narrationEn: 'When spacecraft perform gravitational slingshot maneuvers to escape the Sun’s gravity, their escape paths trace out magnificent hyperbolic trajectories!',
        narrationTa: 'விண்கலங்கள் ஈர்ப்பு விசையைப் பயன்படுத்தி சூரிய குடும்பத்திலிருந்து வெளியேறும்போது அவை அதிபரவளையப் பாதையிலேயே பயணிக்கின்றன!',
        conceptKey: 'Hyperbolic Trajectories'
      }
    ]
  },
  c12_mat_ch6: {
    id: 'vid_c12_mat_ch6',
    chapterId: 'c12_mat_ch6',
    titleEn: 'Navigating 3D Space: The Power of Vectors & Cross Products',
    titleTa: 'முப்பரிமாண விண்வெளிப் பயணம்: வெக்டர்களின் ஆற்றல்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Orthogonal Normal: Cross Product',
        titleTa: 'செங்குத்து வெக்டர்: குறுக்குப் பெருக்கம்',
        visualDescription: 'Two vectors in a flat plane spinning a screwdriver, generating a perpendicular vector shooting straight up into 3D space.',
        narrationEn: 'The cross product a x b produces a vector perpendicular to both, providing the essential surface normal used in aeroplane wings and 3D computer graphics.',
        narrationTa: 'குறுக்குப் பெருக்கம் a x b அவ்விரு வெக்டர்களுக்கும் செங்குத்தான புதிய வெக்டரை உருவாக்குகிறது. இதுவே விமான இறக்கைகளின் வடிவமைப்பு தத்துவம்!',
        conceptKey: 'Cross Product & Surface Normals'
      },
      {
        sceneNumber: 2,
        titleEn: 'Parallelepiped Volume via Scalar Triple Product',
        titleTa: 'திசையிலி முப்பெருக்கம் மூலம் கனஅளவு',
        visualDescription: 'A 3D skewed box expanding as vectors a, b, and c stretch; determinant matrix calculating exact volume [a, b, c].',
        narrationEn: 'The scalar triple product [a, b, c] calculates the volume of a 3D parallelepiped. When it equals zero, the box is flattened flat, proving the vectors are coplanar!',
        narrationTa: 'திசையிலி முப்பெருக்கம் [a, b, c] என்பது இணைகரத் திண்மத்தின் கனஅளவாகும். இது பூச்சியமானால் மூன்று வெக்டர்களும் ஒரே தளத்தில் உள்ளன என்பது உறுதியாகிறது.',
        conceptKey: 'Scalar Triple Product & Coplanarity'
      },
      {
        sceneNumber: 3,
        titleEn: 'Air Traffic Control & Skew Flight Paths',
        titleTa: 'விமானப் போக்குவரத்துக் கட்டுப்பாடு & மீச்சிறு தொலைவு',
        visualDescription: 'Two jet airplanes flying at different altitudes on non-intersecting non-parallel flight vectors with safe clearance distance δ displayed.',
        narrationEn: 'Air traffic controllers use the shortest distance formula between 3D skew lines to ensure aircraft traveling on different paths never collide.',
        narrationTa: 'விமானப் போக்குவரத்துக் கட்டுப்பாட்டாளர்கள் முப்பரிமாணத்தில் இரு விமானங்கள் மோதாமல் பாதுகாப்பான தூரத்தில் பறப்பதை உறுதி செய்ய இச்சூத்திரத்தைப் பயன்படுத்துகின்றனர்.',
        conceptKey: 'Shortest Distance Between Skew Lines'
      }
    ]
  }
};
