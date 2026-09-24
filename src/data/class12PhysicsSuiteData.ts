import { Chapter, NoteItem, SummaryItem, ChapterQuiz, SchematicDiagram, VideoExplainer } from '../types';

export const CLASS_12_PHYSICS_NOTES: Record<string, NoteItem> = {
  c12_phy_u1: {
    id: 'note_c12_phy_u1',
    chapterId: 'c12_phy_u1',
    classLevel: 12,
    subjectId: 'c12_physics',
    titleEn: 'Electrostatics (நிலைமின்னியல்) Comprehensive Notes',
    titleTa: 'நிலைமின்னியல்: முழுமையான பாடக் குறிப்புகள்',
    publishedAt: '24 Sep 2026',
    publishedAtTa: '24 செப் 2026',
    updatedAt: '24 Sep 2026',
    updatedAtTa: '24 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Sundaram, Ph.D. (Physics)',
    reviewedByRole: 'TNSCERT Higher Secondary Physics Expert',
    reviewedAt: '24 Sep 2026',
    reviewedAtTa: '24 செப் 2026',
    status: 'published',
    version: '2.0',
    changeNote: 'Detailed derivations: Electric field of dipole, Gauss Law applications, and Van de Graaff Generator.',
    changeNoteTa: 'மின் இருமுனை மின்புலம், காஸ் விதி பயன்பாடுகள் மற்றும் வாண்டே கிராப் மின்னியற்றி முழுமையாகத் தொகுக்கப்பட்டது.',
    readTimeMinutes: 15,
    bodyEn: `### 1. Coulomb's Law in Vector Form
The electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$ in vacuum is:
$$\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}_{21}$$
where $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$ is permittivity of free space, and $\\frac{1}{4\\pi\\varepsilon_0} \\approx 9 \\times 10^9 \\text{ N m}^2\\text{C}^{-2}$.

### 2. Electric Field of an Electric Dipole
* **On Axial Line**:
  $$E_{axial} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3} \\quad (\\text{along } \\vec{p})$$
* **On Equatorial Line**:
  $$E_{equatorial} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{r^3} \\quad (\\text{opposite to } \\vec{p})$$
* **Key Ratio**: For equal distance $r$, $E_{axial} = 2 \\times E_{equatorial}$.

### 3. Gauss's Law & Applications
Electric flux through any closed Gaussian surface:
$$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q_{enclosed}}{\\varepsilon_0}$$
* **Infinitely Long Wire**: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$
* **Infinite Sheet of Charge**: $E = \\frac{\\sigma}{2\\varepsilon_0}$ (independent of distance $r$)
* **Spherical Conducting Shell**:
  - Outside ($r > R$): $E = \\frac{q}{4\\pi\\varepsilon_0 r^2}$
  - On surface ($r = R$): $E = \\frac{q}{4\\pi\\varepsilon_0 R^2}$
  - Inside ($r < R$): $E = 0$ (Electrostatic Shielding)

### 4. Capacitors & Dielectrics
* **Capacitance of Parallel Plate Capacitor**: $C = \\frac{\\varepsilon_0 A}{d}$. With dielectric slab of constant $\\varepsilon_r$, $C' = \\varepsilon_r C$.
* **Energy Stored**: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C} = \\frac{1}{2} Q V$.
* **Series Combination**: $\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\dots$
* **Parallel Combination**: $C_p = C_1 + C_2 + \\dots$

### 5. Van de Graaff Generator (5-Mark Board Question)
* **Principle**: Electrostatic induction and Action of points (Corona discharge).
* **Working**: Generates potentials up to several million volts ($10^7\\text{ V}$) used for nuclear particle acceleration.`,
    bodyTa: `### 1. கூலும் விதி (வெக்டர் வடிவம்)
வெற்றிடத்தில் $r$ தொலைவில் வைக்கப்பட்டுள்ள $q_1, q_2$ ஆகிய இரு புள்ளி மின்னூட்டங்களுக்கு இடையே செயல்படும் நிலை மின்னியல் விசை:
$$\\vec{F}_{12} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q_1 q_2}{r^2} \\hat{r}_{21}$$
இங்கு $\\varepsilon_0 = 8.854 \\times 10^{-12} \\text{ C}^2\\text{N}^{-1}\\text{m}^{-2}$ என்பது வெற்றிடத்தின் விடுதிறன் ஆகும்.

### 2. மின் இருமுனையினால் உருவாகும் மின்புலம்
* **அச்சுக்கோட்டில்**: $E_{அச்சு} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3}$
* **நடுவரைக் கோட்டில்**: $E_{நடுவரை} = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{p}{r^3}$
* **முக்கியத் தொடர்பு**: ஒரே தொலைவில், $E_{அச்சு} = 2 \\times E_{நடுவரை}$.

### 3. காஸ் விதி மற்றும் பயன்பாடுகள்
மூடிய பரப்பின் வழியே செல்லும் மொத்த மின்பாயம்:
$$\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{q}{\\varepsilon_0}$$
* **நீண்ட நேர்க்கடத்தி**: $E = \\frac{\\lambda}{2\\pi\\varepsilon_0 r}$
* **முடிவிலாத் தகடு**: $E = \\frac{\\sigma}{2\\varepsilon_0}$ (தொலைவைச் சார்ந்தது அல்ல)
* **மின்னூட்டம் பெற்ற உள்ளீடற்ற கோளம்**: உட்புறம் $E = 0$ (நிலைமின் தடுப்புறை).

### 4. மின்தேக்கிகள்
* **இணைத்தட்டு மின்தேக்கியின் மின்தேக்குத்திறன்**: $C = \\frac{\\varepsilon_0 A}{d}$. மின்காப்பு வைக்கப்படும் போது $C' = \\varepsilon_r C$.
* **மின்தேக்கியில் சேமிக்கப்படும் ஆற்றல்**: $U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}$.

### 5. வாண்டே கிராப் மின்னியற்றி (5 மதிப்பெண் வினா)
* **தத்துவம்**: நிலைமின் தூண்டல் மற்றும் கூர்முனைச் செயல்பாடு.
* **பயன்**: பல மில்லியன் வோல்ட் ($10^7\\text{ V}$) மின்னழுத்த வேறுபாட்டை உருவாக்கி அணுக்கருப் பிளவு ஆய்வுகளில் பயன்படுகிறது.`,
    rememberBoxes: [
      {
        tipEn: 'Electrostatic shielding: The electric field inside any hollow charged conductor is ALWAYS ZERO!',
        tipTa: 'நிலைமின் தடுப்புறை: எந்தவொரு உள்ளீடற்ற கடத்தியின் உட்புறமும் மின்புலம் எப்போதும் சுழியாகும்!'
      },
      {
        tipEn: 'Relation: E_axial = 2 * E_equatorial at very large distances (r >> 2a).',
        tipTa: 'தொலைவு r >> 2a எனில், அச்சுக்கோட்டு மின்புலம் நடுவரைக்கோட்டு மின்புலத்தை விட இருமடங்கு இருக்கும்.'
      }
    ],
    workedExamples: [
      {
        question: 'Two charges +2 microCoulombs and -2 microCoulombs are separated by 10 cm. Find the electric dipole moment. (2 Marks)',
        questionTa: '+2 microCoulomb மற்றும் -2 microCoulomb மின்னூட்டங்கள் 10 cm இடைவெளியில் உள்ளன. மின் இருமுனைத் திருப்புத்திறனைக் காண்க. (2 மதிப்பெண்)',
        solution: 'p = q * 2a = (2 * 10^-6 C) * (0.1 m) = 2 * 10^-7 C m.',
        solutionTa: 'p = q * 2a = (2 * 10^-6 C) * (0.1 m) = 2 * 10^-7 C m.',
        answer: '2 x 10^-7 C m directed from -q to +q'
      }
    ]
  },

  c12_phy_u2: {
    id: 'note_c12_phy_u2',
    chapterId: 'c12_phy_u2',
    classLevel: 12,
    subjectId: 'c12_physics',
    titleEn: 'Current Electricity (மின்னோட்டவியல்) Comprehensive Notes',
    titleTa: 'மின்னோட்டவியல்: முழுமையான பாடக் குறிப்புகள்',
    publishedAt: '24 Sep 2026',
    publishedAtTa: '24 செப் 2026',
    updatedAt: '24 Sep 2026',
    updatedAtTa: '24 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Sundaram, Ph.D. (Physics)',
    reviewedByRole: 'TNSCERT Higher Secondary Physics Expert',
    reviewedAt: '24 Sep 2026',
    reviewedAtTa: '24 செப் 2026',
    status: 'published',
    version: '2.0',
    changeNote: 'Ohm’s law microscopic & macroscopic forms, Kirchhoff’s laws, Wheatstone Bridge derivation, and Potentiometer comparison.',
    changeNoteTa: 'ஓம் விதி, கிர்க்காஃப் விதிகள், வீட்ஸ்டோன் சமனச்சுற்று மற்றும் மின்னழுத்தமானி குறிப்புகள் சேர்க்கப்பட்டன.',
    readTimeMinutes: 14,
    bodyEn: `### 1. Electric Current & Drift Velocity
* **Current**: $I = \\frac{dQ}{dt} = n A e v_d$, where $v_d = -\\frac{e E}{m} \\tau$ is drift velocity, $\\tau$ is relaxation time.
* **Mobility**: $\\mu = \\frac{v_d}{E} = \\frac{e \\tau}{m}$ (SI unit: $\\text{m}^2\\text{V}^{-1}\\text{s}^{-1}$).

### 2. Ohm's Law
* **Microscopic form**: $\\vec{J} = \\sigma \\vec{E}$, where $\\sigma = \\frac{n e^2 \\tau}{m}$ is electrical conductivity.
* **Macroscopic form**: $V = I R$, where resistance $R = \\rho \\frac{l}{A}$.
* **Temperature Coefficient of Resistance**: $\\alpha = \\frac{R_T - R_0}{R_0 \\Delta T}$. For metals $\\alpha > 0$, for semiconductors $\\alpha < 0$.

### 3. Kirchhoff's Laws
* **First Law (Junction Rule)**: $\\sum I = 0$ at any node. (Consequence of Conservation of Charge).
* **Second Law (Loop Rule)**: $\\sum \\Delta V = 0$ or $\\sum I R = \\sum \\mathcal{E}$ in a closed loop. (Consequence of Conservation of Energy).

### 4. Wheatstone's Bridge Condition (5-Mark Board Derivation)
Applying Kirchhoff’s rules to the bridge branches, when galvanometer current $I_G = 0$:
$$\\frac{P}{Q} = \\frac{R}{S}$$
This null-deflection condition allows high-precision resistance measurements independent of galvanometer internal resistance.

### 5. Potentiometer
* **Principle**: Potential drop across length $l$ of uniform resistance wire is directly proportional to length: $V \\propto l$ or $\\mathcal{E} = I r l$.
* **Comparison of emfs of two cells**: $\\frac{\\mathcal{E}_1}{\\mathcal{E}_2} = \\frac{l_1}{l_2}$.
* **Internal Resistance of a Cell**: $r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)$.`,
    bodyTa: `### 1. மின்னோட்டம் மற்றும் இழுப்புத் திசைவேகம்
* **மின்னோட்டம்**: $I = n A e v_d$, இங்கு $v_d = -\\frac{e E}{m} \\tau$ என்பது இழுப்புத் திசைவேகம்.
* **இயக்க எண்**: $\\mu = \\frac{v_d}{E} = \\frac{e \\tau}{m}$ (அலகு: $\\text{m}^2\\text{V}^{-1}\\text{s}^{-1}$).

### 2. ஓம் விதி
* **நுண்ணோக்கி வடிவம்**: $\\vec{J} = \\sigma \\vec{E}$, இங்கு $\\sigma$ என்பது மின்கடத்து எண்.
* **மேக்ரோஸ்கோபிக் வடிவம்**: $V = I R$, மின்தடை $R = \\rho \\frac{l}{A}$.
* **மின்தடை வெப்பநிலை எண்**: உலோகங்களுக்கு $\\alpha > 0$, குறைக்கடத்திகளுக்கு $\\alpha < 0$.

### 3. கிர்க்காஃப் விதிகள்
* **முதல் விதி (சந்தி விதி)**: $\\sum I = 0$ (மின்னூட்ட மாறாக் கோட்பாட்டின் விளைவு).
* **இரண்டாம் விதி (சுற்று விதி)**: $\\sum I R = \\sum \\mathcal{E}$ (ஆற்றல் மாறாக் கோட்பாட்டின் விளைவு).

### 4. வீட்ஸ்டோன் சமனச்சுற்று (5 மதிப்பெண் வினா)
கால்வனாமீட்டரில் சுழி விலகல் ஏற்படும் போது சமன்செய் நிபந்தனை:
$$\\frac{P}{Q} = \\frac{R}{S}$$

### 5. மின்னழுத்தமானி
* **தத்துவம்**: மின்னழுத்த வேறுபாடு சமன்செய் நீளத்திற்கு நேர்விகிதத்தில் இருக்கும்: $\\mathcal{E} \\propto l$.
* **மின்கலங்களின் மின்னியக்கு விசை ஒப்பீடு**: $\\frac{\\mathcal{E}_1}{\\mathcal{E}_2} = \\frac{l_1}{l_2}$.
* **மின்கலத்தின் அகமின்தடை காணல்**: $r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)$.`,
    rememberBoxes: [
      {
        tipEn: 'Kirchhoff’s 1st Law = Conservation of CHARGE. Kirchhoff’s 2nd Law = Conservation of ENERGY.',
        tipTa: 'கிர்க்காஃப் சந்தி விதி = மின்னூட்ட மாறாக்கோட்பாடு. கிர்க்காஃப் சுற்று விதி = ஆற்றல் மாறாக்கோட்பாடு.'
      }
    ],
    workedExamples: [
      {
        question: 'State the condition for Wheatstone bridge balance. (2 Marks)',
        questionTa: 'வீட்ஸ்டோன் சமனச்சுற்றின் சமன்செய் நிபந்தனையை எழுதுக. (2 மதிப்பெண்)',
        solution: 'When galvanometer current IG = 0, P/Q = R/S.',
        solutionTa: 'கால்வனாமீட்டர் வழியே மின்னோட்டம் பாயாத போது (IG = 0), P/Q = R/S.',
        answer: 'P/Q = R/S'
      }
    ]
  },

  c12_phy_u6: {
    id: 'note_c12_phy_u6',
    chapterId: 'c12_phy_u6',
    classLevel: 12,
    subjectId: 'c12_physics',
    titleEn: 'Optics (ஒளியியல்) Comprehensive Notes',
    titleTa: 'ஒளியியல்: முழுமையான பாடக் குறிப்புகள்',
    publishedAt: '24 Sep 2026',
    publishedAtTa: '24 செப் 2026',
    updatedAt: '24 Sep 2026',
    updatedAtTa: '24 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Sundaram, Ph.D. (Physics)',
    reviewedByRole: 'TNSCERT Higher Secondary Physics Expert',
    reviewedAt: '24 Sep 2026',
    reviewedAtTa: '24 செப் 2026',
    status: 'published',
    version: '2.0',
    changeNote: 'Ray optics & Wave optics: Lens Maker’s Formula, Total Internal Reflection, Young’s Double Slit Experiment.',
    changeNoteTa: 'லென்ஸ் தயாரிப்பாளர் சூத்திரம், முழு அக எதிரொளிப்பு மற்றும் யங் இரட்டைப் பிளவு ஆய்வு சேர்க்கப்பட்டன.',
    readTimeMinutes: 16,
    bodyEn: `### 1. Refraction & Total Internal Reflection (TIR)
* **Snell's Law**: $n_1 \\sin i = n_2 \\sin r$
* **Conditions for TIR**:
  1. Light must travel from optically denser to rarer medium.
  2. Angle of incidence $i$ must be greater than critical angle $i_c$: $\\sin i_c = \\frac{1}{n}$.
* **Applications**: Optical fibers (endoscopy, telecommunication), mirage, sparkling of diamonds.

### 2. Lens Maker's Formula (5-Mark Board Derivation)
For a thin lens of refractive index $n_2$ placed in medium $n_1$:
$$\\frac{1}{f} = (n - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$$
where $n = \\frac{n_2}{n_1}$, and $R_1, R_2$ are radii of curvature of the two surfaces.

### 3. Huygens' Principle & Wavefronts
* Every point on a wavefront acts as a secondary source of spherical wavelets spreading with wave speed.
* The forward envelope gives the new wavefront at subsequent time $t$.
* Successfully proves Laws of Reflection and Refraction ($n_1 \\sin i = n_2 \\sin r$).

### 4. Young's Double Slit Experiment (Interference)
* **Condition for Constructive Interference (Bright fringes)**: Path difference $\\delta = n \\lambda$ ($n = 0, 1, 2, \\dots$).
* **Condition for Destructive Interference (Dark fringes)**: Path difference $\\delta = (2n - 1) \\frac{\\lambda}{2}$.
* **Bandwidth (Fringe Width)**:
  $$\\beta = \\frac{\\lambda D}{d}$$
  where $\\lambda$ is wavelength, $D$ is distance to screen, $d$ is separation between slits.

### 5. Brewster's Law & Polarization
At polarizing angle $i_p$, the reflected ray and refracted ray are mutually perpendicular ($i_p + r_p = 90^\\circ$):
$$n = \\tan i_p$$`,
    bodyTa: `### 1. ஒளிவிலகல் மற்றும் முழு அக எதிரொளிப்பு
* **ஸ்நெல் விதி**: $n_1 \\sin i = n_2 \\sin r$.
* **முழு அக எதிரொளிப்பு நிபந்தனைகள்**:
  1. ஒளி அடர்மிகு ஊடகத்திலிருந்து அடர்குறை ஊடகத்திற்குச் செல்ல வேண்டும்.
  2. படுகோணம் $i$ மாறுநிலைக் கோணத்தை ($i_c$) விட அதிகமாக இருக்க வேண்டும்: $\\sin i_c = \\frac{1}{n}$.
* **பயன்பாடுகள்**: ஒளியிழை (Optical fibers), கானல் நீர், வைரத்தின் மினுமினுப்பு.

### 2. லென்ஸ் தயாரிப்பாளர் சூத்திரம் (5 மதிப்பெண் வினா)
மெல்லிய லென்சின் குவியத்தூரம்:
$$\\frac{1}{f} = (n - 1) \\left( \\frac{1}{R_1} - \\frac{1}{R_2} \\right)$$

### 3. ஹைஜென்ஸ் கொள்கை
அலைமுகப்பின் ஒவ்வொரு புள்ளியும் இரண்டாம் நிலை அலைக்குட்டிகளை உருவாக்கும் மூலமாகச் செயல்படுகிறது. இதன் மூலம் ஒளி எதிரொளிப்பு மற்றும் ஒளிவிலகல் விதிகள் நிரூபிக்கப்படுகின்றன.

### 4. யங் இரட்டைப் பிளவு ஆய்வு (குறுக்கீட்டு விளைவு)
* **ஆக்கக் குறுக்கீட்டு விளைவு (பொலிவுப் பட்டைகள்)**: பாதை வேறுபாடு $\\delta = n \\lambda$.
* **அழிவுக் குறுக்கீட்டு விளைவு (இருண்ட பட்டைகள்)**: பாதை வேறுபாடு $\\delta = (2n - 1) \\frac{\\lambda}{2}$.
* **பட்டை அகலம் (Fringe Width)**:
  $$\\beta = \\frac{\\lambda D}{d}$$

### 5. புரூஸ்டர் விதி மற்றும் தளவிளைவு
தளவிளைவுக் கோணம் $i_p$-இல் எதிரொளிப்புக் கதிரும் விலகுக் கதிரும் ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்:
$$n = \\tan i_p$$`,
    rememberBoxes: [
      {
        tipEn: 'Fringe width beta = lambda * D / d. If apparatus is immersed in water, wavelength decreases (lambda\' = lambda/n), so fringe width DECREASES!',
        tipTa: 'யங் ஆய்வை நீரில் வைத்தால் அலைநீளம் குறையும், இதனால் பட்டை அகலமும் (beta) குறையும்!'
      }
    ],
    workedExamples: [
      {
        question: 'Calculate the critical angle for glass with refractive index 1.5. (2 Marks)',
        questionTa: 'ஒளிவிலகல் எண் 1.5 கொண்ட கண்ணாடியின் மாறுநிலைக் கோணத்தைக் காண்க. (2 மதிப்பெண்)',
        solution: 'sin(ic) = 1/n = 1/1.5 = 2/3 = 0.6667. Hence, ic = sin^-1(0.6667) = 41.8 degrees.',
        solutionTa: 'sin(ic) = 1/n = 1/1.5 = 0.6667. எனவே மாறுநிலைக் கோணம் ic = 41.8 பாகை.',
        answer: 'ic = 41.8 degrees'
      }
    ]
  }
};

export const CLASS_12_PHYSICS_SUMMARIES: Record<string, SummaryItem> = {
  c12_phy_u1: {
    id: 'sum_c12_phy_u1',
    chapterId: 'c12_phy_u1',
    lastUpdatedAt: '24 Sep 2026',
    lastUpdatedAtTa: '24 செப் 2026',
    keyPointsEn: [
      'Coulomb force obeys inverse square law and is billions of times stronger than gravitation.',
      'Electric field on axial line is twice the field on equatorial line for a short electric dipole.',
      'Gauss law states total electric flux equals net charge divided by permittivity: Phi = q / eps0.',
      'Electric field inside any hollow charged conductor is identically zero (Electrostatic Shielding).',
      'Parallel plate capacitance is C = eps0 * A / d; adding a dielectric increases C by dielectric constant er.',
      'Electrostatic energy stored in a charged capacitor is U = 1/2 * C * V^2.',
      'Van de Graaff generator produces millions of volts using corona discharge and electrostatic induction.'
    ],
    keyPointsTa: [
      'கூலும் விசை தொலைவின் இருமடிக்கு எதிர்த்தகவில் அமைவதோடு புவியீர்ப்பு விசையை விட மிக வலிமையானது.',
      'மின் இருமுனையினால் அச்சுக்கோட்டில் உருவாகும் மின்புலம் நடுவரைக்கோட்டு மின்புலத்தைப் போல 2 மடங்கு.',
      'காஸ் விதி: மூடிய பரப்பின் மொத்த மின்பாயம் உட்புற மின்னூட்டத்தின் 1/eps0 மடங்கு ஆகும்.',
      'உள்ளீடற்ற கடத்தியின் உட்புறம் மின்புலம் எப்போதும் சுழியாக இருக்கும் (நிலைமின் தடுப்புறை).',
      'இணைத்தட்டு மின்தேக்கியில் மின்காப்புப் பொருள் வைக்கப்படும் போது மின்தேக்குத்திறன் er மடங்கு அதிகரிக்கும்.',
      'மின்தேக்கியில் சேமிக்கப்படும் ஆற்றல் U = 1/2 C V^2.',
      'வாண்டே கிராப் மின்னியற்றி பல மில்லியன் வோல்ட் மின்னழுத்தத்தை உருவாக்குகிறது.'
    ],
    simpleExplanationEn: 'Think of static electricity like invisible rubber bands between charged particles. Positive and negative charges pull on each other, and when charges accumulate in capacitors, it is like compressing a mechanical spring ready to release electrical energy.',
    simpleExplanationTa: 'நிலைமின்னியலை எளிதாகப் புரிந்து கொள்ள: இரு மின்னூட்டங்களுக்கு இடையே உள்ள கண்ணுக்குத் தெரியாத ஈர்ப்பு அல்லது விலக்கு விசையை ஓர் இழுக்கப்பட்ட ரப்பர் பேண்ட் போல கற்பனை செய்யுங்கள். மின்தேக்கி என்பது ஆற்றலைச் சுருக்கி வைத்திருக்கும் ஸ்பிரிங் போன்றது.'
  },

  c12_phy_u2: {
    id: 'sum_c12_phy_u2',
    chapterId: 'c12_phy_u2',
    lastUpdatedAt: '24 Sep 2026',
    lastUpdatedAtTa: '24 செப் 2026',
    keyPointsEn: [
      'Electric current I = n A e vd represents steady flow of free electrons due to an applied electric field.',
      'Ohm’s law holds for metallic conductors at constant temperature: V = I * R.',
      'Kirchhoff’s first rule (junction) conserves charge; second rule (loop) conserves energy.',
      'Wheatstone bridge balance condition is P/Q = R/S when galvanometer current is zero.',
      'Potentiometer measures potential difference without drawing current, acting as an ideal infinite-resistance voltmeter.',
      'Temperature coefficient of resistance is positive for metals and negative for semiconductors (thermistors).'
    ],
    keyPointsTa: [
      'மின்னோட்டம் I = n A e vd என்பது மின்புலத்தால் எலக்ட்ரான்கள் ஒரு குறிப்பிட்ட திசையில் நகர்வதாகும்.',
      'மாறா வெப்பநிலையில் உலோகக் கடத்திகளில் ஓம் விதி V = I R உண்மையாகிறது.',
      'கிர்க்காஃப் சந்தி விதி மின்னூட்ட மாறாக் கோட்பாட்டையும், சுற்று விதி ஆற்றல் மாறாக் கோட்பாட்டையும் குறிக்கிறது.',
      'வீட்ஸ்டோன் சமனச்சுற்றில் கால்வனாமீட்டரில் சுழி விலகல் ஏற்படும் போது P/Q = R/S.',
      'மின்னழுத்தமானி மின்சுற்றிலிருந்து மின்னோட்டத்தை எடுக்காமல் துல்லியமாக மின்னழுத்தத்தை அளவிடுகிறது.',
      'மின்தடை வெப்பநிலை எண் உலோகங்களுக்கு நேர்க்குறியாகவும் குறைகடத்திகளுக்கு எதிர்க்குறியாகவும் இருக்கும்.'
    ],
    simpleExplanationEn: 'Think of an electric circuit like water flowing through pipes: the battery is the water pump, the electric current is water flow rate, and the resistor is a narrow pipe resisting the flow.',
    simpleExplanationTa: 'மின்சுற்றை நீர் குழாய் அமைப்புடன் ஒப்பிடலாம்: பேட்டரி என்பது நீர் இறைக்கும் பம்ப், மின்னோட்டம் என்பது பாயும் நீரின் அளவு, மின்தடை என்பது நீரோட்டத்தைத் தடுக்கும் குறுகிய குழாய்.'
  },

  c12_phy_u6: {
    id: 'sum_c12_phy_u6',
    chapterId: 'c12_phy_u6',
    lastUpdatedAt: '24 Sep 2026',
    lastUpdatedAtTa: '24 செப் 2026',
    keyPointsEn: [
      'Snell’s law n1 sin i = n2 sin r dictates refraction across media interfaces.',
      'Total internal reflection occurs when light in denser medium strikes rarer medium at angle i > ic.',
      'Lens maker’s formula connects focal length with radii of curvature: 1/f = (n - 1)(1/R1 - 1/R2).',
      'Huygens’ wave principle proves laws of reflection and refraction using secondary wavelets.',
      'Young’s double slit experiment proves wave nature with fringe bandwidth beta = lambda * D / d.',
      'Brewster’s law states reflected light is completely plane polarized at polarizing angle: n = tan(ip).'
    ],
    keyPointsTa: [
      'ஸ்நெல் விதி n1 sin i = n2 sin r ஒளிவிலகலைத் தீர்மானிக்கிறது.',
      'அடர்மிகு ஊடகத்திலிருந்து படுகோணம் மாறுநிலைக் கோணத்தை விட அதிகமாகும் போது முழு அக எதிரொளிப்பு நிகழ்கிறது.',
      'லென்ஸ் தயாரிப்பாளர் சூத்திரம்: 1/f = (n - 1)(1/R1 - 1/R2).',
      'ஹைஜென்ஸ் கொள்கை அலைமுகப்புகளின் அடிப்படையில் ஒளி எதிரொளிப்பு, விலகலை நிரூபிக்கிறது.',
      'யங் இரட்டைப் பிளவு ஆய்வு குறுக்கீட்டுப் பட்டை அகலத்தை beta = lambda * D / d எனத் தருகிறது.',
      'புரூஸ்டர் விதி: தளவிளைவுக் கோணத்தில் n = tan(ip) ஆகும்.'
    ],
    simpleExplanationEn: 'Think of light like ocean ripples: when two waves meet, crest over crest makes a giant double wave (bright fringe), while crest over trough cancels the water flat (dark fringe).',
    simpleExplanationTa: 'ஒளியைக் கடல் அலைகளாக நினையுங்கள்: இரண்டு அலைகளின் முகடுகள் ஒன்றாக இணையும் போது பெரிய அலை (வெளிச்சப் பட்டை) தோன்றும்; ஒரு முகடும் அகடும் இணையும் போது நீர் அமைதியாகும் (இருண்ட பட்டை).'
  }
};

export const CLASS_12_PHYSICS_QUIZZES: Record<string, ChapterQuiz> = {
  c12_phy_u1: {
    id: 'quiz_c12_phy_u1',
    chapterId: 'c12_phy_u1',
    titleEn: 'Electrostatics: Board Mastery Quiz',
    titleTa: 'நிலைமின்னியல்: முழுமையான தேர்வு வினாடி வினா',
    timeLimitMinutes: 12,
    totalMarks: 25,
    questions: [
      {
        id: 'q_c12_phy_u1_1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The electric field at an axial point of a short dipole is related to the electric field at an equatorial point at the same distance by:',
        questionTa: 'சிறிய மின் இருமுனையால் ஒரே தொலைவில் உள்ள அச்சுக்கோட்டு மின்புலத்திற்கும் நடுவரைக்கோட்டு மின்புலத்திற்கும் உள்ள தொடர்பு:',
        optionsEn: ['E_axial = 2 * E_equatorial', 'E_axial = E_equatorial', 'E_axial = 1/2 * E_equatorial', 'E_axial = 4 * E_equatorial'],
        optionsTa: ['E_அச்சு = 2 * E_நடுவரை', 'E_அச்சு = E_நடுவரை', 'E_அச்சு = 1/2 * E_நடுவரை', 'E_அச்சு = 4 * E_நடுவரை'],
        correctAnswer: 'E_axial = 2 * E_equatorial',
        explanationEn: 'At large distances r >> 2a, E_axial = 2p / (4 * pi * eps0 * r^3) while E_equatorial = p / (4 * pi * eps0 * r^3). Hence E_axial = 2 * E_equatorial.',
        explanationTa: 'அச்சுக்கோட்டு மின்புலம் 2p/(4*pi*eps0*r^3), நடுவரைக்கோட்டு மின்புலம் p/(4*pi*eps0*r^3). எனவே அச்சுக்கோட்டு மின்புலம் 2 மடங்கு.'
      },
      {
        id: 'q_c12_phy_u1_2',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the electric field inside a hollow spherical charged conductor of radius R?',
        questionTa: 'மின்னூட்டம் பெற்ற R ஆரமுடைய உள்ளீடற்ற கோளக் கடத்தியின் உட்புறம் மின்புலம் என்ன?',
        optionsEn: ['Zero', 'q / (4 * pi * eps0 * R^2)', 'Infinite', 'q / (4 * pi * eps0 * r)'],
        optionsTa: ['சுழி (Zero)', 'q / (4 * pi * eps0 * R^2)', 'முடிவிலி', 'q / (4 * pi * eps0 * r)'],
        correctAnswer: 'Zero',
        explanationEn: 'By Gauss’s Law, since no charge is enclosed inside the Gaussian surface inside the conductor, E = 0. This is the basis of electrostatic shielding.',
        explanationTa: 'காஸ் விதியின்படி உட்புறம் மின்னூட்டம் ஏதும் இல்லாததால் மின்புலம் சுழியாகும். இதுவே நிலைமின் தடுப்புறை தத்துவமாகும்.'
      },
      {
        id: 'q_c12_phy_u1_3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'When a dielectric slab of dielectric constant K = 5 is inserted between the plates of an isolated charged capacitor, the capacitance:',
        questionTa: 'மின்தேக்கியின் தட்டுகளுக்கு இடையே K = 5 மின்காப்புப் பொருள் வைக்கப்படும் போது அதன் மின்தேக்குத்திறன்:',
        optionsEn: ['Increases 5 times', 'Decreases 5 times', 'Remains unchanged', 'Becomes zero'],
        optionsTa: ['5 மடங்கு அதிகரிக்கும்', '5 மடங்கு குறையும்', 'மாறாது', 'சுழியாகும்'],
        correctAnswer: 'Increases 5 times',
        explanationEn: 'Capacitance with dielectric is C\' = K * C0. Since K = 5, the capacitance increases five-fold.',
        explanationTa: 'மின்காப்பு வைக்கப்படும் போது புதிய மின்தேக்குத்திறன் C\' = K * C0 ஆக 5 மடங்கு அதிகரிக்கும்.'
      },
      {
        id: 'q_c12_phy_u1_4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'Which two physical phenomena form the working principle of the Van de Graaff generator?',
        questionTa: 'வாண்டே கிராப் மின்னியற்றியின் செயல்பாட்டிற்கு அடிப்படையான இரு இயற்பியல் தத்துவங்கள் யாவை?',
        optionsEn: ['Electrostatic induction & Action of points (Corona discharge)', 'Electromagnetic induction & Mutual inductance', 'Photoelectric effect & Compton effect', 'Thermodynamic expansion & Joule heating'],
        optionsTa: ['நிலைமின் தூண்டல் மற்றும் கூர்முனைச் செயல்பாடு (Corona discharge)', 'மின்காந்தத் தூண்டல் மற்றும் பரிமாற்று மின்தூண்டல்', 'ஒளிமின் விளைவு மற்றும் காம்ப்டன் விளைவு', 'வெப்ப விரிவு மற்றும் ஜூல் வெப்ப விளைவு'],
        correctAnswer: 'Electrostatic induction & Action of points (Corona discharge)',
        explanationEn: 'Van de Graaff generator functions on electrostatic induction (spraying charges) and action of sharp points (leaking charges by ionizing surrounding air).',
        explanationTa: 'வாண்டே கிராப் மின்னியற்றி நிலைமின் தூண்டல் மற்றும் கூர்முனைகளின் செயல்பாடு ஆகிய இரு தத்துவங்களின் அடிப்படையில் செயல்படுகிறது.'
      },
      {
        id: 'q_c12_phy_u1_5',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The energy density (energy per unit volume) in an electrostatic field E in free space is given by:',
        questionTa: 'வெற்றிடத்தில் E மின்புலத்தில் சேமிக்கப்படும் நிலைமின் ஆற்றல் அடர்த்தி:',
        optionsEn: ['1/2 * eps0 * E^2', 'eps0 * E^2', '1/2 * eps0 / E^2', '2 * eps0 * E^2'],
        optionsTa: ['1/2 * eps0 * E^2', 'eps0 * E^2', '1/2 * eps0 / E^2', '2 * eps0 * E^2'],
        correctAnswer: '1/2 * eps0 * E^2',
        explanationEn: 'Energy density u_E = U / Volume = (1/2 * C * V^2) / (A * d) = 1/2 * eps0 * E^2.',
        explanationTa: 'மின்புலத்தில் ஆற்றல் அடர்த்தி u_E = 1/2 eps0 E^2 ஆகும்.'
      }
    ]
  },

  c12_phy_u2: {
    id: 'quiz_c12_phy_u2',
    chapterId: 'c12_phy_u2',
    titleEn: 'Current Electricity: Board Mastery Quiz',
    titleTa: 'மின்னோட்டவியல்: முழுமையான தேர்வு வினாடி வினா',
    timeLimitMinutes: 12,
    totalMarks: 25,
    questions: [
      {
        id: 'q_c12_phy_u2_1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Kirchhoff’s junction rule (first law) and loop rule (second law) are respective manifestations of conservation of:',
        questionTa: 'கிர்க்காஃபின் முதல் விதி (சந்தி) மற்றும் இரண்டாம் விதி (சுற்று) ஆகியவை முறையே எதன் மாறாக்கோட்பாடுகள்?',
        optionsEn: ['Charge and Energy', 'Energy and Charge', 'Momentum and Angular momentum', 'Charge and Mass'],
        optionsTa: ['மின்னூட்டம் மற்றும் ஆற்றல்', 'ஆற்றல் மற்றும் மின்னூட்டம்', 'உந்தம் மற்றும் கோண உந்தம்', 'மின்னூட்டம் மற்றும் நிறை'],
        correctAnswer: 'Charge and Energy',
        explanationEn: 'The junction rule ensures no charge accumulates at a node (conservation of charge); the loop rule ensures net potential difference around a closed loop is zero (conservation of energy).',
        explanationTa: 'சந்தி விதி மின்னூட்ட மாறாக்கோட்பாட்டையும், சுற்று விதி ஆற்றல் மாறாக்கோட்பாட்டையும் அடிப்படையாகக் கொண்டவை.'
      },
      {
        id: 'q_c12_phy_u2_2',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Under what condition does a Wheatstone bridge achieve balance (zero galvanometer deflection)?',
        questionTa: 'எந்த நிபந்தனையின் கீழ் வீட்ஸ்டோன் சமனச்சுற்று சமநிலையை (சுழி விலகல்) அடைகிறது?',
        optionsEn: ['P / Q = R / S', 'P * Q = R * S', 'P + Q = R + S', 'P - Q = R - S'],
        optionsTa: ['P / Q = R / S', 'P * Q = R * S', 'P + Q = R + S', 'P - Q = R - S'],
        correctAnswer: 'P / Q = R / S',
        explanationEn: 'When the potentials at opposite galvanometer junctions are equal, no current flows through the galvanometer, giving P/Q = R/S.',
        explanationTa: 'கால்வனாமீட்டர் முனைகளில் மின்னழுத்தம் சமமாக இருக்கும்போது மின்னோட்டம் பாயாது, அப்போது P/Q = R/S.'
      },
      {
        id: 'q_c12_phy_u2_3',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'Why is a potentiometer preferred over a conventional voltmeter for measuring electromotive force (emf)?',
        questionTa: 'மின்னியக்கு விசையை அளவிட வழக்கமான வோல்ட்மீட்டரை விட மின்னழுத்தமானி ஏன் சிறந்தது?',
        optionsEn: ['It draws no current from the cell at null condition (acts like an infinite resistance voltmeter)', 'It consumes massive electrical power', 'It operates only on AC supply', 'It is smaller in size'],
        optionsTa: ['சுழி சமன்செய் நிலையில் இது சுற்றிலிருந்து மின்னோட்டத்தை எடுப்பதில்லை', 'அதிக மின்னாற்றலை நுகரும்', 'மாறுதிசை மின்னோட்டத்தில் மட்டுமே இயங்கும்', 'அளவில் மிகச் சிறியது'],
        correctAnswer: 'It draws no current from the cell at null condition (acts like an infinite resistance voltmeter)',
        explanationEn: 'A conventional voltmeter draws a small current, measuring terminal voltage V < E. A potentiometer draws zero current at balance, giving exact emf E.',
        explanationTa: 'மின்னழுத்தமானி சுழி விலகல் முறையில் இயங்குவதால் மின்கலத்திலிருந்து மின்னோட்டம் எடுக்காமல் துல்லியமான emf-ஐ அளவிடுகிறது.'
      },
      {
        id: 'q_c12_phy_u2_4',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'For a semiconductor, what is the sign of the temperature coefficient of resistance (alpha)?',
        questionTa: 'குறைக்கடத்திகளில் மின்தடை வெப்பநிலை எண்ணின் (alpha) குறி என்ன?',
        optionsEn: ['Negative', 'Positive', 'Zero', 'Infinite'],
        optionsTa: ['எதிர்க்குறி (Negative)', 'நேர்க்குறி (Positive)', 'சுழி', 'முடிவிலி'],
        correctAnswer: 'Negative',
        explanationEn: 'In semiconductors, heating frees covalent electrons rapidly, decreasing resistivity. Hence alpha is negative (thermistor property).',
        explanationTa: 'குறைக்கடத்திகளில் வெப்பநிலை உயரும் போது எலக்ட்ரான்கள் விடுபட்டு மின்தடை குறைகிறது. எனவே வெப்பநிலை எண் எதிர்க்குறியாகும்.'
      },
      {
        id: 'q_c12_phy_u2_5',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the microscopic form of Ohm’s law in vector notation?',
        questionTa: 'ஓம் விதியின் நுண்ணோக்கி வடிவம் வெக்டர் குறியீட்டில் என்ன?',
        optionsEn: ['J = sigma * E', 'V = I * R', 'E = sigma * J', 'I = V / R'],
        optionsTa: ['J = sigma * E', 'V = I * R', 'E = sigma * J', 'I = V / R'],
        correctAnswer: 'J = sigma * E',
        explanationEn: 'Current density J is directly proportional to electric field E through electrical conductivity sigma: J = sigma * E.',
        explanationTa: 'மின்னோட்ட அடர்த்தி J மின்கடத்து எண் sigma மற்றும் மின்புலம் E-ன் பெருக்கற்பலனுக்குச் சமம்: J = sigma * E.'
      }
    ]
  },

  c12_phy_u6: {
    id: 'quiz_c12_phy_u6',
    chapterId: 'c12_phy_u6',
    titleEn: 'Optics: Board Mastery Quiz',
    titleTa: 'ஒளியியல்: முழுமையான தேர்வு வினாடி வினா',
    timeLimitMinutes: 12,
    totalMarks: 25,
    questions: [
      {
        id: 'q_c12_phy_u6_1',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What happens to the fringe width (beta) in Young’s double slit experiment if the entire apparatus is immersed in water?',
        questionTa: 'யங் இரட்டைப் பிளவு அமைப்பை முழுவதும் நீரில் மூழ்கடித்தால் பட்டை அகலம் (beta) என்னவாகும்?',
        optionsEn: ['Decreases', 'Increases', 'Remains unchanged', 'Becomes zero'],
        optionsTa: ['குறையும் (Decreases)', 'அதிகரிக்கும்', 'மாறாது', 'சுழியாகும்'],
        correctAnswer: 'Decreases',
        explanationEn: 'In water, refractive index n > 1 causes wavelength to decrease to lambda\' = lambda / n. Since beta = lambda * D / d, fringe width decreases.',
        explanationTa: 'நீரில் ஒளிவிலகல் எண் n > 1 என்பதால் அலைநீளம் lambda/n எனக் குறைகிறது. இதனால் பட்டை அகலம் beta = lambda*D/d குறையும்.'
      },
      {
        id: 'q_c12_phy_u6_2',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'According to Brewster’s law, the tangent of polarizing angle ip equals:',
        questionTa: 'புரூஸ்டர் விதியின்படி, தளவிளைவுக் கோணத்தின் டேன்ஜென்ட் (tan ip) எதற்குச் சமம்?',
        optionsEn: ['Refractive index of the medium (n)', 'Critical angle (ic)', 'Focal length of lens', 'Velocity of light'],
        optionsTa: ['ஊடகத்தின் ஒளிவிலகல் எண் (n)', 'மாறுநிலைக் கோணம் (ic)', 'குவியத் தூரம்', 'ஒளியின் திசைவேகம்'],
        correctAnswer: 'Refractive index of the medium (n)',
        explanationEn: 'Brewster’s Law states n = tan(ip). At this angle, the reflected and refracted rays are mutually perpendicular.',
        explanationTa: 'புரூஸ்டர் விதியின்படி n = tan(ip). இந்நிகழ்வில் எதிரொளிப்புக் கதிரும் விலகுக் கதிரும் ஒன்றுக்கொன்று செங்குத்தாக இருக்கும்.'
      },
      {
        id: 'q_c12_phy_u6_3',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'Which optical principle allows signals to travel tens of kilometers in fiber optic cables with negligible loss?',
        questionTa: 'ஒளியிழை வடங்களில் (Optical fibers) மிகக் குறைந்த இழப்புடன் சமிக்கைகள் பயணிக்க உதவும் இயற்பியல் தத்துவம் எது?',
        optionsEn: ['Total Internal Reflection', 'Dispersion of light', 'Diffraction', 'Polarization by scattering'],
        optionsTa: ['முழு அக எதிரொளிப்பு (Total Internal Reflection)', 'ஒளிப்பிரிகை', 'விளிம்பு விளைவு', 'ஒளிச்சிதறல் மூலம் தளவிளைவு'],
        correctAnswer: 'Total Internal Reflection',
        explanationEn: 'Light signals enter the core (higher index) and undergo continuous total internal reflection off the cladding (lower index) with 100% reflectance.',
        explanationTa: 'அடர்மிகு உள்ளகத்திலிருந்து (core) அடர்குறை உறைக்குள் (cladding) செல்லும் போது தொடர்ந்து முழு அக எதிரொளிப்பு அடைந்து ஒளியிழையில் பயணிக்கிறது.'
      },
      {
        id: 'q_c12_phy_u6_4',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What is the formula for the focal length of a thin lens according to Lens Maker’s Formula?',
        questionTa: 'லென்ஸ் தயாரிப்பாளர் சூத்திரத்தின்படி மெல்லிய லென்சின் குவியத்தூரச் சமன்பாடு எது?',
        optionsEn: ['1/f = (n - 1) * (1/R1 - 1/R2)', '1/f = (n + 1) * (1/R1 + 1/R2)', 'f = (n - 1) * (R1 - R2)', '1/f = n * (R1 + R2)'],
        optionsTa: ['1/f = (n - 1) * (1/R1 - 1/R2)', '1/f = (n + 1) * (1/R1 + 1/R2)', 'f = (n - 1) * (R1 - R2)', '1/f = n * (R1 + R2)'],
        correctAnswer: '1/f = (n - 1) * (1/R1 - 1/R2)',
        explanationEn: 'Lens Maker’s formula relates lens power P = 1/f to the refractive index n and radii of curvature R1, R2.',
        explanationTa: 'லென்ஸ் தயாரிப்பாளர் சமன்பாடு 1/f = (n - 1)(1/R1 - 1/R2) ஆகும்.'
      },
      {
        id: 'q_c12_phy_u6_5',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'In Young’s double slit experiment, the condition for constructive interference (bright fringe) is that path difference delta must equal:',
        questionTa: 'யங் இரட்டைப் பிளவு ஆய்வில் ஆக்கக் குறுக்கீட்டு விளைவிற்கான (பொலிவுப் பட்டை) பாதை வேறுபாடு delta:',
        optionsEn: ['n * lambda (where n = 0, 1, 2, ...)', '(2n - 1) * lambda / 2', 'lambda / 4', '(2n + 1) * lambda'],
        optionsTa: ['n * lambda (n = 0, 1, 2, ...)', '(2n - 1) * lambda / 2', 'lambda / 4', '(2n + 1) * lambda'],
        correctAnswer: 'n * lambda (where n = 0, 1, 2, ...)',
        explanationEn: 'Waves arrive in phase when path difference is an integral multiple of wavelength: delta = n * lambda.',
        explanationTa: 'அலைகள் ஒத்த கட்டத்தில் வந்து சந்திக்கும் போது பாதை வேறுபாடு அலைநீளத்தின் முழுமடங்காக (n * lambda) இருக்கும்.'
      }
    ]
  }
};
