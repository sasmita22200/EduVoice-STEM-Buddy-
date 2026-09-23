import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Chemistry - Volume 1 Part B (Units 6–10: Physical & Surface Chemistry)
 * 6. Solid State (திட நிலைமை)
 * 7. Chemical Kinetics (வேதி வினைவேகவியல்)
 * 8. Ionic Equilibrium (அயனிச் சமநிலை)
 * 9. Electrochemistry (மின் வேதியியல்)
 * 10. Surface Chemistry (புறப்பரப்பு வேதியியல்)
 */

export const CHEM_VOL1B_CHAPTERS: Chapter[] = [
  {
    id: 'c12_chem_u6',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 2,
    unitNameEn: 'Volume 1: Physical Chemistry',
    unitNameTa: 'தொகுதி 1: இயற்பியல் வேதியியல்',
    chapterNumber: 6,
    titleEn: 'Unit 6: Solid State (திட நிலைமை)',
    titleTa: 'அலகு 6: திட நிலைமை',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u7',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 2,
    unitNameEn: 'Volume 1: Physical Chemistry',
    unitNameTa: 'தொகுதி 1: இயற்பியல் வேதியியல்',
    chapterNumber: 7,
    titleEn: 'Unit 7: Chemical Kinetics (வேதி வினைவேகவியல்)',
    titleTa: 'அலகு 7: வேதி வினைவேகவியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u8',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 2,
    unitNameEn: 'Volume 1: Physical Chemistry',
    unitNameTa: 'தொகுதி 1: இயற்பியல் வேதியியல்',
    chapterNumber: 8,
    titleEn: 'Unit 8: Ionic Equilibrium (அயனிச் சமநிலை)',
    titleTa: 'அலகு 8: அயனிச் சமநிலை',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u9',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 2,
    unitNameEn: 'Volume 1: Physical Chemistry',
    unitNameTa: 'தொகுதி 1: இயற்பியல் வேதியியல்',
    chapterNumber: 9,
    titleEn: 'Unit 9: Electrochemistry (மின் வேதியியல்)',
    titleTa: 'அலகு 9: மின் வேதியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u10',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 2,
    unitNameEn: 'Volume 1: Physical Chemistry',
    unitNameTa: 'தொகுதி 1: இயற்பியல் வேதியியல்',
    chapterNumber: 10,
    titleEn: 'Unit 10: Surface Chemistry (புறப்பரப்பு வேதியியல்)',
    titleTa: 'அலகு 10: புறப்பரப்பு வேதியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CHEM_VOL1B_NOTES: Record<string, NoteItem> = {
  c12_chem_u6: {
    id: 'note_c12_chem_u6',
    chapterId: 'c12_chem_u6',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Solid State: Unit Cells, Packing Efficiency, Bragg’s Law, and Crystal Defects',
    titleTa: 'திட நிலைமை: அலகுக்கூடு, பொதிவு பின்னம், பிராக் சமன்பாடு மற்றும் படிகக் குறைபாடுகள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'SC, BCC, FCC packing efficiency derivations, Bragg equation, and Schottky/Frenkel defects.',
    changeNoteTa: 'எளிய கனசதுரம், பொருள் மைய மற்றும் முக மைய பொதிவுத் திறன் மற்றும் குறைபாடுகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Classification of Solids
* **Crystalline Solids**: Long-range order, sharp melting point, anisotropic (physical properties vary along different directions), definite heat of fusion (e.g. $NaCl$, Diamond).
* **Amorphous Solids**: Short-range order, soften over temperature range, isotropic, pseudo-solids / supercooled liquids (e.g. Glass, Rubber).

### 2. Unit Cell & Packing Efficiency (பொதிவுத் திறன்)
* **Bragg’s Law**: $n\\lambda = 2d \\sin\\theta$ (relates X-ray wavelength to interplanar lattice spacing $d$).
* **Packing Efficiency (%)** = $\\frac{\\text{Volume occupied by spheres in unit cell}}{\\text{Total volume of unit cell}} \\times 100$:
  1. **Simple Cubic (SC)**: $Z = 8 \\times \\frac{1}{8} = 1$ atom. Edge $a = 2r$. Packing efficiency = $52.36\\%$.
  2. **Body-Centered Cubic (BCC)**: $Z = (8 \\times \\frac{1}{8}) + 1 = 2$ atoms. Body diagonal $\\sqrt{3}a = 4r \\Rightarrow r = \\frac{\\sqrt{3}}{4}a$. Packing efficiency = $68.04\\%$.
  3. **Face-Centered Cubic (FCC / CCP)**: $Z = (8 \\times \\frac{1}{8}) + (6 \\times \\frac{1}{2}) = 4$ atoms. Face diagonal $\\sqrt{2}a = 4r \\Rightarrow r = \\frac{\\sqrt{2}}{4}a$. Packing efficiency = $74.05\\%$.

### 3. Density of a Cubic Crystal Lattice
$$\\rho = \\frac{Z \\times M}{a^3 \\times N_A}$$
Where $Z$ = number of atoms per unit cell, $M$ = molar mass, $a$ = edge length, $N_A$ = Avogadro's number ($6.023 \\times 10^{23}\\text{ mol}^{-1}$).

### 4. Crystal Imperfections / Defects (படிகக் குறைபாடுகள்)
* **Schottky Defect (ஸ்டாட்கி குறைபாடு)**:
  * Equal number of cations and anions missing from lattice sites.
  * **Consequence**: Decreases crystal density. Common in highly ionic solids with high coordination numbers where cation and anion have comparable sizes ($NaCl, KCl, CsCl, AgBr$).
* **Frenkel Defect (பிரெங்கல் குறைபாடு)**:
  * An ion (usually smaller cation) leaves its lattice site and occupies an interstitial site.
  * **Consequence**: Density remains unchanged. Common when size difference between ions is large ($ZnS, AgCl, AgBr$).
  * *Special Note*: **$AgBr$ exhibits BOTH Schottky and Frenkel defects**.
* **Metal Excess Defect (F-Centers)**: Anion vacancy occupied by an electron ($F$-center), giving color to crystal ($NaCl$ heated in $Na$ vapor turns yellow).`,
    bodyTa: `### 1. திடப் பொருட்களின் வகைப்பாடு
* **படிக வடிவமுடைய திடப்பொருள்**: நீண்ட எல்லை ஒழுங்கு, குறிப்பிட்ட உருகுநிலை, திசை ஒப்பற்ற பண்பு (Anisotropic) கொண்டவை ($NaCl$, வைரம்).
* **படிக வடிவமற்ற திடப்பொருள்**: குறுகிய எல்லை ஒழுங்கு, திசை ஒப்புப் பண்பு (Isotropic), போலி திடப்பொருட்கள் (கண்ணாடி, ரப்பர்).

### 2. அலகுக்கூடு மற்றும் பொதிவுத் திறன்
* **பிராக் சமன்பாடு**: $n\\lambda = 2d \\sin\\theta$.
* **பொதிவுத் திறன் (Packing Efficiency)**:
  1. **எளிய கனசதுரம் (SC)**: அணுக்கள் எண்ணிக்கை $Z = 1$; பொதிவுத் திறன் = $52.36\\%$.
  2. **பொருள் மைய கனசதுரம் (BCC)**: அணுக்கள் எண்ணிக்கை $Z = 2$; $\\sqrt{3}a = 4r$; பொதிவுத் திறன் = $68.04\\%$.
  3. **முக மைய கனசதுரம் (FCC)**: அணுக்கள் எண்ணிக்கை $Z = 4$; $\\sqrt{2}a = 4r$; பொதிவுத் திறன் = $74.05\\%$.

### 3. படிகத்தின் அடர்த்தி
$$\\rho = \\frac{Z \\times M}{a^3 \\times N_A}$$

### 4. படிகக் குறைபாடுகள்
* **ஸ்டாட்கி குறைபாடு (Schottky Defect)**:
  * சம எண்ணிக்கையிலான நேர் மற்றும் எதிர் அயனிகள் படிகக் கூட்டை விட்டு வெளியேறுவதால் உருவாகிறது.
  * **விளைவு**: படிகத்தின் அடர்த்தி குறைகிறது ($NaCl, CsCl, AgBr$).
* **பிரெங்கல் குறைபாடு (Frenkel Defect)**:
  * நேர் அயனி தன் இடத்தை விட்டு விலகி இடைச்செருகல் இடத்தில் அமைவது.
  * **விளைவு**: அடர்த்தி மாறுவதில்லை ($ZnS, AgCl, AgBr$).
  * *குறிப்பு*: **$AgBr$ ஸ்டாட்கி மற்றும் பிரெங்கல் குறைபாடு இரண்டையும் காட்டுகிறது**.
* **F-மையங்கள் (F-Centers)**: எதிர் அயனி வெற்றிடத்தில் எலக்ட்ரான் சிக்குண்டு படிகத்திற்கு நிறத்தை அளிப்பது.`,
    keyFormulas: [
      {
        nameEn: 'Cubic Crystal Density Formula',
        nameTa: 'படிக அடர்த்தி சமன்பாடு',
        formula: '\\rho = \\frac{Z \\cdot M}{a^3 \\cdot N_A}',
        explanationEn: 'Calculates crystal density where Z is unit cell occupancy and a is edge length.',
        explanationTa: 'அலகுக்கூட்டின் அணு எண்ணிக்கை Z மற்றும் விளிம்பு நீளம் a கொண்டு அடர்த்தி கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with packing efficiency derivations.',
        changeNoteTa: 'பொதிவுத் திறன் மற்றும் குறைபாடுகள் விளக்கக் குறிப்புகள்.'
      }
    ]
  },

  c12_chem_u7: {
    id: 'note_c12_chem_u7',
    chapterId: 'c12_chem_u7',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Chemical Kinetics: Rate Laws, Integrated Rate Equations, Half-Life, and Arrhenius Equation',
    titleTa: 'வேதி வினைவேகவியல்: வினைவேக விதிகள், தொகையிடப்பட்ட சமன்பாடுகள் மற்றும் அர்ஹீனியஸ் சமன்பாடு',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Zero and first order integrated rate laws, half-life formulas, pseudo-first order, and Arrhenius activation energy.',
    changeNoteTa: 'முதல் மற்றும் பூஜ்ய வகை வினைகளின் தொகையிடப்பட்ட சமன்பாடுகள் மற்றும் அர்ஹீனியஸ் சமன்பாடு.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Rate of Reaction, Order & Molecularity
* **Rate of Reaction**: Change in concentration of reactants or products per unit time: $\\text{Rate} = -\\frac{d[A]}{dt} = +\\frac{d[B]}{dt}$.
* **Order of Reaction (வினை வகை)**: Sum of powers of concentration terms of reactants in the experimental rate law. Can be zero, fractional, or integer.
* **Molecularity (மூலக்கூறு எண்)**: Number of reacting species colliding simultaneously in an elementary reaction. Always a non-zero whole integer (1, 2, or 3).

### 2. Integrated Rate Equations
* **First Order Reaction (முதல் வகை வினை)**:
  * Differential rate: $-\\frac{d[A]}{dt} = k[A]$
  * Integrated form: $k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$
  * **Half-life ($t_{1/2}$)**:
    $$t_{1/2} = \\frac{0.693}{k}$$
    *(Half-life of a first order reaction is independent of initial reactant concentration).*
* **Zero Order Reaction (பூஜ்ய வகை வினை)**:
  * Rate $= k[A]^0 = k$
  * Integrated form: $k = \\frac{[A]_0 - [A]}{t}$
  * **Half-life ($t_{1/2}$)**:
    $$t_{1/2} = \\frac{[A]_0}{2k}$$
    *(Directly proportional to initial reactant concentration).*

### 3. Pseudo First Order Reactions
* A reaction whose actual molecularity is 2 or more, but which obeys first order kinetics because one reactant is present in large excess (e.g. Acid-catalyzed inversion of cane sugar, hydrolysis of ethyl acetate in excess water).

### 4. Arrhenius Equation & Activation Energy ($E_a$)
* **Arrhenius Equation**:
  $$k = A e^{-E_a / RT}$$
  Where $A$ is frequency factor, $E_a$ is activation energy, $R = 8.314\\text{ J/mol}\\cdot\\text{K}$, $T$ is absolute temperature.
* Logarithmic two-temperature form:
  $$\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]$$
* **Rule of Thumb**: Reaction rate approximately doubles for every $10^\\circ\\text{C}$ rise in temperature.`,
    bodyTa: `### 1. வினைவேகம், வினை வகை மற்றும் மூலக்கூறு எண்
* **வினைவேகம்**: ஓரலகு நேரத்தில் வினைபடு அல்லது வினைவிளை பொருட்களின் செறிவில் ஏற்படும் மாற்றம்.
* **வினை வகை (Order)**: வினைவேக விதியில் உள்ள செறிவு உறுப்புகளின் அடுக்குகளின் கூடுதல். இது பூஜ்யம், பின்னம் அல்லது முழு எண்ணாக இருக்கலாம்.
* **மூலக்கூறு எண் (Molecularity)**: ஒரு எளிய வினையில் ஒரே நேரத்தில் மோதிக்கொள்ளும் துகள்களின் எண்ணிக்கை. இது எப்போதும் முழு எண் மட்டுமே (1, 2, 3).

### 2. தொகையிடப்பட்ட வினைவேகச் சமன்பாடுகள்
* **முதல் வகை வினை (First Order)**:
  * $k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{[A]_0}{[A]}\\right)$
  * **அரைவாழ்வுக் காலம் ($t_{1/2}$)**:
    $$t_{1/2} = \\frac{0.693}{k}$$
    (முதல் வகை வினையின் அரைவாழ்வுக் காலம் தொடக்கச் செறிவைச் சார்ந்திருக்காது).
* **பூஜ்ய வகை வினை (Zero Order)**:
  * $k = \\frac{[A]_0 - [A]}{t}$
  * $t_{1/2} = \\frac{[A]_0}{2k}$ (தொடக்கச் செறிவிற்கு நேர்விகிதத்தில் அமையும்).

### 3. போலி முதல் வகை வினை
* இரு வினைபடு பொருட்கள் இருக்கும் வினையில், ஒன்று மிக அதிக அளவில் இருக்கும்போது வினைவேகம் மற்றொன்றின் செறிவை மட்டுமே சார்ந்திருப்பது (எ.கா: அமில முன்னிலையில் கரும்புச் சர்க்கரை நீராற்பகுப்பு).

### 4. அர்ஹீனியஸ் சமன்பாடு
$$k = A e^{-E_a / RT}$$
* இரு வெவ்வேறு வெப்பநிலைகளில்:
  $$\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]$$
* வெப்பநிலை $10^\\circ\\text{C}$ உயரும்போது வினைவேகம் ஏறத்தாழ இருமடங்காகிறது.`,
    keyFormulas: [
      {
        nameEn: 'First Order Half-Life Equation',
        nameTa: 'முதல் வகை வினை அரைவாழ்வுக் காலம்',
        formula: 't_{1/2} = \\frac{0.693}{k}',
        explanationEn: 'Demonstrates that first order half-life is entirely independent of initial concentration.',
        explanationTa: 'முதல் வகை வினையின் அரைவாழ்வுக் காலம் தொடக்கச் செறிவைச் சார்ந்தது அல்ல.'
      },
      {
        nameEn: 'Arrhenius Activation Energy Relation',
        nameTa: 'அர்ஹீனியஸ் கிளர்வுறு ஆற்றல் சமன்பாடு',
        formula: '\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]',
        explanationEn: 'Calculates activation energy Ea from rate constants k1 and k2 measured at temperatures T1 and T2.',
        explanationTa: 'இரு வெப்பநிலைகளில் வினைவேக மாறிலிகளைக் கொண்டு கிளர்வுறு ஆற்றல் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with half-life and Arrhenius derivations.',
        changeNoteTa: 'அரைவாழ்வுக் காலம் மற்றும் அர்ஹீனியஸ் சமன்பாட்டு விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u8: {
    id: 'note_c12_chem_u8',
    chapterId: 'c12_chem_u8',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Ionic Equilibrium: Ostwald’s Dilution Law, pH/pOH, Buffers, and Henderson Equation',
    titleTa: 'அயனிச் சமநிலை: ஆஸ்ட்வால்ட் நீர்த்தல் விதி, pH/pOH, தாங்கல் கரைசல்கள் மற்றும் ஹெண்டர்சன் சமன்பாடு',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Ostwald dilution law derivation, pH scale, Henderson-Hasselbalch equation, and common ion effect.',
    changeNoteTa: 'ஆஸ்ட்வால்ட் நீர்த்தல் விதி, pH அளவீடு, ஹெண்டர்சன் சமன்பாடு மற்றும் பொது அயனி விளைவு.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Acids and Bases: Fundamental Concepts
* **Arrhenius Concept**: Acids release $H^+$ in water; bases release $OH^-$ in water.
* **Bronsted-Lowry Theory**: Acid is a proton ($H^+$) donor; base is a proton acceptor. Conjugate acid-base pairs differ by a single proton ($H^+$).
* **Lewis Concept**: Acid is an electron pair acceptor (electrophile, e.g. $BF_3, AlCl_3$); base is an electron pair donor (nucleophile, e.g. $:NH_3, H_2O:$).

### 2. Ostwald's Dilution Law (ஆஸ்ட்வால்ட் நீர்த்தல் விதி)
* For a weak monobasic acid $HA \\rightleftharpoons H^+ + A^-$:
  $$K_a = \\frac{C\\alpha^2}{1 - \\alpha}$$
  Since $\\alpha \\ll 1$ for weak electrolytes, $1 - \\alpha \\approx 1$:
  $$K_a \\approx C\\alpha^2 \\implies \\alpha = \\sqrt{\\frac{K_a}{C}}$$
  Degree of dissociation $\\alpha$ is inversely proportional to square root of concentration (directly proportional to dilution).
  $$[H^+] = C\\alpha = \\sqrt{K_a \\cdot C}$$

### 3. pH and pOH Scale (Sorensen, 1909)
* $\\text{pH} = -\\log_{10}[H_3O^+]$ and $\\text{pOH} = -\\log_{10}[OH^-]$.
* At $25^\\circ\\text{C}$, ionic product of water $K_w = [H^+][OH^-] = 1.0 \\times 10^{-14}$.
  $$\\text{pH} + \\text{pOH} = 14$$

### 4. Buffer Solutions & Henderson-Hasselbalch Equation
* **Buffer Solution**: Resists drastic changes in pH upon addition of small amounts of acid or base.
  * *Acidic Buffer*: Weak acid + its salt with strong base ($CH_3COOH + CH_3COONa$).
  * *Basic Buffer*: Weak base + its salt with strong acid ($NH_4OH + NH_4Cl$).
* **Henderson-Hasselbalch Equation**:
  * For Acidic Buffer:
    $$\\text{pH} = \\text{pK}_a + \\log_{10} \\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)$$
  * For Basic Buffer:
    $$\\text{pOH} = \\text{pK}_b + \\log_{10} \\left(\\frac{[\\text{Salt}]}{[\\text{Base}]}\\right)$$

### 5. Common Ion Effect & Solubility Product ($K_{sp}$)
* **Common Ion Effect**: Suppression of degree of dissociation of a weak electrolyte by adding a strong electrolyte containing a common ion (e.g. adding $CH_3COONa$ suppresses ionization of $CH_3COOH$).
* **Precipitation Condition**:
  * If Ionic Product ($Q_{sp}$) $> K_{sp} \\rightarrow$ Precipitation occurs.
  * If $Q_{sp} < K_{sp} \\rightarrow$ Solution is unsaturated (no precipitate).`,
    bodyTa: `### 1. அமில-காரக் கொள்கைகள்
* **அர்ஹீனியஸ்**: நீரில் $H^+$-ஐ தருவது அமிலம்; $OH^-$-ஐ தருவது காரம்.
* **பிரான்ஸ்டட்-லௌரி**: புரோட்டான் ($H^+$) வழங்கி அமிலம்; புரோட்டான் ஏற்பி காரம்.
* **லூயிஸ் கொள்கை**: எலக்ட்ரான் ஜோடி ஏற்பி அமிலம் ($BF_3$); எலக்ட்ரான் ஜோடி வழங்கி காரம் ($:NH_3$).

### 2. ஆஸ்ட்வால்ட் நீர்த்தல் விதி
* வலிமை குறைந்த அமிலத்திற்கு:
  $$\\alpha = \\sqrt{\\frac{K_a}{C}} \\quad \\text{மற்றும்} \\quad [H^+] = \\sqrt{K_a \\cdot C}$$
* வலிமை குறைந்த மின்பகுளியின் பிரிகை வீதம் கரைசலை நீர்க்கச் செய்யும்போது அதிகரிக்கிறது.

### 3. pH அளவீடு (சாரன்சன்)
* $\\text{pH} = -\\log_{10}[H^+]$ மற்றும் $\\text{pOH} = -\\log_{10}[OH^-]$.
* $25^\\circ\\text{C}$-ல்: $\\text{pH} + \\text{pOH} = 14$.

### 4. தாங்கல் கரைசல்கள் மற்றும் ஹெண்டர்சன் சமன்பாடு
* சிறிதளவு அமிலம் அல்லது காரம் சேர்க்கப்படும் போது pH மாறாமல் பாதுகாக்கும் கரைசல் தாங்கல் கரைசல் எனப்படும்.
* **அமிலத் தாங்கல் சமன்பாடு**:
  $$\\text{pH} = \\text{pK}_a + \\log_{10} \\left(\\frac{[\\text{உப்பு}]}{[\\text{அமிலம்}]}\\right)$$
* **காரத் தாங்கல் சமன்பாடு**:
  $$\\text{pOH} = \\text{pK}_b + \\log_{10} \\left(\\frac{[\\text{உப்பு}]}{[\\text{காரம்}]}\\right)$$

### 5. பொது அயனி விளைவு & கரைதிறன் பெருக்கம் ($K_{sp}$)
* வலிமை குறைந்த மின்பகுளியுடன் பொதுவான அயனியைக் கொண்ட வலிமை மிகு மின்பகுளியைச் சேர்க்கும்போது அதன் பிரிகை வீதம் குறைவது **பொது அயனி விளைவு** எனப்படும்.
* அயனிப் பெருக்கம் $Q_{sp} > K_{sp}$ ஆகும்போது வீழ்படிவாதல் நிகழும்.`,
    keyFormulas: [
      {
        nameEn: 'Henderson-Hasselbalch Acid Buffer Equation',
        nameTa: 'ஹெண்டர்சன்-ஹாசல்பாக் சமன்பாடு',
        formula: '\\text{pH} = \\text{pK}_a + \\log_{10} \\left(\\frac{[\\text{Salt}]}{[\\text{Acid}]}\\right)',
        explanationEn: 'Calculates the exact pH of an acidic buffer mixture.',
        explanationTa: 'அமிலத் தாங்கல் கரைசலின் pH மதிப்பைக் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Henderson equation.',
        changeNoteTa: 'தாங்கல் கரைசல் மற்றும் ஹெண்டர்சன் சமன்பாட்டு விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u9: {
    id: 'note_c12_chem_u9',
    chapterId: 'c12_chem_u9',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Electrochemistry: Kohlrausch’s Law, Galvanic Cells, Nernst Equation, and Corrosion',
    titleTa: 'மின் வேதியியல்: கோல்ராஷ் விதி, கால்வானிக் மின்கலம், நெர்ன்ஸ்ட் சமன்பாடு மற்றும் அரிமானம்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Kohlrausch law, Galvanic Daniel cell, Nernst equation EMF derivation, and Lead storage battery.',
    changeNoteTa: 'கோல்ராஷ் விதி, டேனியல் மின்கலம், நெர்ன்ஸ்ட் சமன்பாடு மற்றும் காரிய அமில சேமிப்பு மின்கலம்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Electrolytic Conductance & Kohlrausch's Law
* **Specific Conductance ($\\kappa$)**: $\\kappa = \\frac{1}{R} \\times \\left(\\frac{l}{A}\\right)$ (Unit: $\\text{S}\\cdot\\text{m}^{-1}$ or $\\Omega^{-1}\\text{cm}^{-1}$).
* **Molar Conductivity ($\\Lambda_m$)**: $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$.
* **Kohlrausch's Law of Independent Migration of Ions**:
  * At infinite dilution, each ion contributes its own definite limiting molar conductivity regardless of the nature of the co-ion:
    $$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$$
  * *Application*: Used to calculate limiting molar conductivity of weak electrolytes like $CH_3COOH$:
    $$\\Lambda_m^\\circ(CH_3COOH) = \\Lambda_m^\\circ(CH_3COONa) + \\Lambda_m^\\circ(HCl) - \\Lambda_m^\\circ(NaCl)$$

### 2. Galvanic / Electrochemical Cell (Daniel Cell)
* Converts chemical energy into electrical energy spontaneously.
* **Notation**: $Zn(s) \\mid Zn^{2+}(aq) \\parallel Cu^{2+}(aq) \\mid Cu(s)$
  * **Anode (Oxidation)**: $Zn(s) \\rightarrow Zn^{2+}(aq) + 2e^-$ (Negative pole)
  * **Cathode (Reduction)**: $Cu^{2+}(aq) + 2e^- \\rightarrow Cu(s)$ (Positive pole)
  * Standard Cell Potential: $E^\\circ_{\\text{cell}} = E^\\circ_{\\text{cathode}} - E^\\circ_{\\text{anode}} = +0.34 - (-0.76) = +1.10\\text{ V}$.
  * *Salt Bridge ($KCl$ in agar-agar)*: Maintains electrical neutrality and completes circuit without liquid junction potential.

### 3. Nernst Equation (நெர்ன்ஸ்ட் சமன்பாடு)
For a general cell reaction $aA + bB \\xrightarrow{n e^-} cC + dD$:
$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{2.303 RT}{nF} \\log_{10} Q$$
At $298\\text{ K}$ ($25^\\circ\\text{C}$):
$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} \\left(\\frac{[C]^c [D]^d}{[A]^a [B]^b}\\right)$$
Relationship with Gibbs Free Energy: $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$.

### 4. Batteries & Corrosion (அரிமானம்)
* **Lead Storage Battery**: Secondary reversible cell ($Pb$ anode, $PbO_2$ cathode, $38\\%\\text{ }H_2SO_4$).
  * Overall discharge: $Pb + PbO_2 + 2H_2SO_4 \\rightarrow 2PbSO_4 + 2H_2O$.
* **Corrosion of Iron (Rusting)**: Electrochemical process forming hydrated iron(III) oxide: $2Fe + O_2 + 4H^+ \\rightarrow 2Fe^{2+} + 2H_2O \\rightarrow Fe_2O_3\\cdot xH_2O$.
  * Prevention: Galvanization (coating with Zinc sacrificial anode).`,
    bodyTa: `### 1. மின்பகுளி கடத்துத்திறன் மற்றும் கோல்ராஷ் விதி
* **மோலார் கடத்துத்திறன்**: $\\Lambda_m = \\frac{\\kappa \\times 1000}{C}$.
* **கோல்ராஷ் விதி**: முடிவிலா நீர்த்தலில் ஒவ்வொரு அயனியும் தனது பங்கிற்கு குறிப்பிட்ட எல்லை மோலார் கடத்துத்திறனை அளிக்கிறது:
  $$\\Lambda_m^\\circ = \\nu_+ \\lambda_+^\\circ + \\nu_- \\lambda_-^\\circ$$
* இதன் மூலம் வலிமை குறைந்த அமிலங்களின் ($CH_3COOH$) எல்லை மோலார் கடத்துத்திறனைக் கணக்கிடலாம்.

### 2. கால்வானிக் மின்கலம் (டேனியல் மின்கலம்)
* வேதி ஆற்றலை மின் ஆற்றலாக மாற்றும் தன்னிச்சையான அமைப்பு.
* **மின்கலக் குறியீடு**: $Zn(s) \\mid Zn^{2+}(aq) \\parallel Cu^{2+}(aq) \\mid Cu(s)$.
  * ஆனோடு (ஆக்சிஜனேற்றம்): $Zn \\rightarrow Zn^{2+} + 2e^-$
  * கேத்தோடு (ஒடுக்கம்): $Cu^{2+} + 2e^- \\rightarrow Cu$
  * திட்ட மின்னழுத்தம்: $E^\\circ_{\\text{cell}} = +1.10\\text{ V}$.
  * உப்புப் பாலம்: மின் நடுநிலைத்தன்மையை நிலைநிறுத்துகிறது.

### 3. நெர்ன்ஸ்ட் சமன்பாடு (Nernst Equation)
$$E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q \\quad (298\\text{ K})$$
* கட்டிலா ஆற்றல் தொடர்பு: $\\Delta G^\\circ = -nFE^\\circ_{\\text{cell}}$.

### 4. மின்கலன்கள் மற்றும் அரிமானம்
* **காரிய அமில சேமிப்பு மின்கலம்**: மீளக்கூடிய இரண்டாம் நிலை மின்கலம் ($38\\%\\text{ }H_2SO_4$).
* **இரும்பு துருப்பிடித்தல்**: மின் வேதியியல் முறையில் நீரேறிய ஃபெரிக் ஆக்சைடு ($Fe_2O_3\\cdot xH_2O$) உருவாதல்.
* தடுத்தல்: துத்தநாக முலாம் பூசுதல் (Galvanization).`,
    keyFormulas: [
      {
        nameEn: 'Nernst Equation at 298 K',
        nameTa: '298 K-ல் நெர்ன்ஸ்ட் சமன்பாடு',
        formula: 'E_{\\text{cell}} = E^\\circ_{\\text{cell}} - \\frac{0.0591}{n} \\log_{10} Q',
        explanationEn: 'Calculates non-standard cell potential as a function of reaction quotient Q.',
        explanationTa: 'வினை ஈவு Q மற்றும் எலக்ட்ரான் எண்ணிக்கை n கொண்டு மின்கல மின்னழுத்தம் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Nernst equation and Daniel cell.',
        changeNoteTa: 'டேனியல் மின்கலம் மற்றும் நெர்ன்ஸ்ட் சமன்பாட்டு விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u10: {
    id: 'note_c12_chem_u10',
    chapterId: 'c12_chem_u10',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Surface Chemistry: Adsorption Isotherms, Catalysis, Colloids, and Emulsions',
    titleTa: 'புறப்பரப்பு வேதியியல்: பரப்புக்கவர்தல் சமவெப்பக்கோடு, வினையூக்கம், கூழ்மங்கள் மற்றும் பால்மங்கள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Physisorption vs Chemisorption, Freundlich isotherm, Tyndall effect, Electrophoresis, and Hardy-Schulze rule.',
    changeNoteTa: 'இயற்புறப்பரப்புக் கவர்தல் vs வேதிப்புறப்பரப்புக் கவர்தல், டின்டால் விளைவு, மின்புல நகர்ச்சி மற்றும் ஹார்டி-சுல்ஸ் விதி.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Adsorption: Physisorption vs Chemisorption
* **Adsorption**: Surface phenomenon where gas/liquid molecules concentrate on the surface of a solid.
* **Comparison**:
  * **Physisorption (இயற்புறப்பரப்புக் கவர்தல்)**: Weak Van der Waals forces, low enthalpy ($20-40\\text{ kJ/mol}$), reversible, multi-molecular layers, non-specific, decreases with temperature.
  * **Chemisorption (வேதிப்புறப்பரப்புக் கவர்தல்)**: Chemical covalent/ionic bonds, high enthalpy ($80-400\\text{ kJ/mol}$), irreversible, unimolecular layer, highly specific, first increases then decreases with temperature.

### 2. Freundlich Adsorption Isotherm
* Mathematical relationship between amount of gas adsorbed ($x/m$) and equilibrium pressure ($P$) at constant temperature:
  $$\\frac{x}{m} = k P^{1/n} \\quad (n > 1)$$
  Taking logarithm on both sides:
  $$\\log_{10}\\left(\\frac{x}{m}\\right) = \\log_{10} k + \\frac{1}{n} \\log_{10} P$$
  Plotting $\\log(x/m)$ against $\\log P$ yields a straight line with slope $= 1/n$ and intercept $= \\log k$.

### 3. Catalysis (வினையூக்கம்)
* **Homogeneous Catalysis**: Reactants and catalyst in same phase (e.g. Lead chamber process: $2SO_2(g) + O_2(g) \\xrightarrow{NO(g)} 2SO_3(g)$).
* **Heterogeneous Catalysis**: Reactants and catalyst in different phases (e.g. Haber's process: $N_2(g) + 3H_2(g) \\xrightarrow{Fe(s)} 2NH_3(g)$).
* **Intermediate Compound Formation Theory** explains homogeneous catalysis; **Adsorption Theory** explains heterogeneous catalysis.

### 4. Colloids & Electrokinetic Properties
* Colloid particle size range: $1\\text{ nm}$ to $1000\\text{ nm}$ ($10\\text{ Å}$ to $10,000\\text{ Å}$).
* **Tyndall Effect (டின்டால் விளைவு)**: Scattering of visible light beam by colloidal particles making the light path illuminated.
* **Brownian Movement**: Continuous zigzag erratic motion of colloidal particles due to unbalanced bombardment by dispersion medium molecules.
* **Electrophoresis (மின்புல நகர்ச்சி)**: Movement of charged colloidal particles towards oppositely charged electrode under an applied electric field (proves colloids carry charge).
* **Hardy-Schulze Rule (ஹார்டி-சுல்ஸ் விதி)**:
  * The coagulating power of an electrolyte is directly proportional to the fourth power of the valency of the active flocculating ion.
  * For coagulating negative sols ($As_2S_3$): $Al^{3+} > Ba^{2+} > Na^+$.
  * For coagulating positive sols ($Fe(OH)_3$): $[Fe(CN)_6]^{4-} > PO_4^{3-} > SO_4^{2-} > Cl^-$.`,
    bodyTa: `### 1. பரப்புக்கவர்தல்: இயற்பிய மற்றும் வேதிய கவர்தல்
* **இயற்புறப்பரப்புக் கவர்தல்**: வாண்டர்வால்ஸ் விசை, குறைந்த என்தால்பி ($20-40\\text{ kJ/mol}$), மீளக்கூடியது, பல மூலக்கூறு அடுக்குகள், வெப்பநிலை கூடும்போது குறையும்.
* **வேதிப்புறப்பரப்புக் கவர்தல்**: வேதிப் பிணைப்பு, அதிக என்தால்பி ($80-400\\text{ kJ/mol}$), மீளாதது, ஒற்றை மூலக்கூறு அடுக்கு, அதிக தேர்வுத்திறன் கொண்டது.

### 2. பிரண்ட்லிச் பரப்புக்கவர்தல் சமவெப்பக்கோடு
$$\\frac{x}{m} = k P^{1/n} \\implies \\log_{10}\\left(\\frac{x}{m}\\right) = \\log_{10} k + \\frac{1}{n} \\log_{10} P$$

### 3. வினையூக்கம் (Catalysis)
* **ஒருபடித்தான வினையூக்கம்**: வினைபடு பொருட்கள் மற்றும் வினையூக்கி ஒரே நிலைமையில் இருத்தல்.
* **பலபடித்தான வினையூக்கம்**: வெவ்வேறு நிலைமைகளில் இருத்தல் (ஹேபர் முறை: $N_2(g) + 3H_2(g) \\xrightarrow{Fe(s)} 2NH_3(g)$).

### 4. கூழ்மங்களின் பண்புகள்
* துகள்களின் அளவு: $1\\text{ nm}$ முதல் $1000\\text{ nm}$ வரை.
* **டின்டால் விளைவு**: கூழ்மத் துகள்களால் ஒளிச்சிதறல் அடைந்து ஒளியின் பாதை தெரிவது.
* **பிரௌனியன் இயக்கம்**: கூழ்மத் துகள்களின் ஒழுங்கற்ற சீரற்ற தொடர் இயக்கம்.
* **மின்புல நகர்ச்சி (Electrophoresis)**: மின்புலத்தின் முன்னிலையில் மின்சுமை பெற்ற கூழ்மத் துகள்கள் எதிர் மின்முனை நோக்கி நகர்தல்.
* **ஹார்டி-சுல்ஸ் விதி**: ஒரு அயனியின் இணைதிறன் அதிகமாக இருக்கும்போது அதன் வீழ்படிவாக்கும் திறன் மிக அதிகமாக இருக்கும் ($Al^{3+} > Ba^{2+} > Na^+$).`,
    keyFormulas: [
      {
        nameEn: 'Freundlich Adsorption Isotherm',
        nameTa: 'பிரண்ட்லிச் சமவெப்பக்கோடு சமன்பாடு',
        formula: '\\log_{10}\\left(\\frac{x}{m}\\right) = \\log_{10} k + \\frac{1}{n} \\log_{10} P',
        explanationEn: 'Linear form used to determine adsorption constants k and 1/n graphically.',
        explanationTa: 'வரைபடம் மூலம் பரப்புக்கவர்தல் மாறிலிகளைக் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Tyndall and Hardy-Schulze rule.',
        changeNoteTa: 'டின்டால் விளைவு மற்றும் ஹார்டி-சுல்ஸ் விதி விளக்கங்கள்.'
      }
    ]
  }
};

export const CHEM_VOL1B_SUMMARIES: Record<string, SummaryItem> = {
  c12_chem_u6: {
    id: 'sum_c12_chem_u6',
    chapterId: 'c12_chem_u6',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Solid State explains how atoms pack tightly inside crystals, comparing simple cubic (52%), body-centered cubic (68%), and face-centered cubic (74%) lattices, alongside Bragg’s Law and crystal defects like Schottky and Frenkel imperfections.',
    simpleExplanationTa: 'திட நிலைமை படிகங்களில் அணுக்கள் எவ்வாறு பொதிந்துள்ளன என்பதை விளக்குகிறது; SC (52%), BCC (68%), FCC (74%) பொதிவுத் திறன்கள், பிராக் சமன்பாடு மற்றும் ஸ்டாட்கி, பிரெங்கல் படிகக் குறைபாடுகள் இதில் அடங்கும்.',
    keyPointsEn: [
      'Packing efficiency order: FCC (74.05%) > BCC (68.04%) > SC (52.36%).',
      'Bragg’s equation: nλ = 2d sin θ.',
      'Schottky defects lower crystal density (missing ions); Frenkel defects preserve density (displaced ions).',
      'AgBr is unique in exhibiting both Schottky and Frenkel defects.'
    ],
    keyPointsTa: [
      'பொதிவுத் திறன் வரிசை: FCC (74.05%) > BCC (68.04%) > SC (52.36%).',
      'பிராக் சமன்பாடு: nλ = 2d sin θ.',
      'ஸ்டாட்கி குறைபாடு அடர்த்தியைக் குறைக்கிறது; பிரெங்கல் குறைபாட்டில் அடர்த்தி மாறுவதில்லை.',
      'AgBr ஸ்டாட்கி மற்றும் பிரெங்கல் குறைபாடுகள் இரண்டையும் காட்டுகிறது.'
    ]
  },
  c12_chem_u7: {
    id: 'sum_c12_chem_u7',
    chapterId: 'c12_chem_u7',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Chemical Kinetics analyzes how fast reactions occur, deriving integrated rate laws and half-lives for zero and first order reactions, and explaining temperature dependence via the Arrhenius activation energy equation.',
    simpleExplanationTa: 'வேதி வினைவேகவியல் வினைகளின் வேகத்தை அளவிடுகிறது; பூஜ்ய மற்றும் முதல் வகை வினைகளின் அரைவாழ்வுக் காலம் மற்றும் அர்ஹீனியஸ் கிளர்வுறு ஆற்றல் சமன்பாடு முக்கிய பகுதிகளாகும்.',
    keyPointsEn: [
      'First-order half-life t1/2 = 0.693/k is completely independent of initial reactant concentration.',
      'Zero-order half-life t1/2 = [A]0/2k is directly proportional to initial concentration.',
      'Reaction rate approximately doubles for every 10°C increase in temperature.',
      'Arrhenius relation: k = A e^(-Ea/RT).'
    ],
    keyPointsTa: [
      'முதல் வகை வினையின் அரைவாழ்வுக் காலம் t1/2 = 0.693/k தொடக்கச் செறிவைச் சார்ந்திருக்காது.',
      'பூஜ்ய வகை அரைவாழ்வுக் காலம் தொடக்கச் செறிவிற்கு நேர்விகிதத்தில் இருக்கும்.',
      'வெப்பநிலை 10°C உயரும்போது வினைவேகம் ஏறத்தாழ இருமடங்காகிறது.',
      'அர்ஹீனியஸ் தொடர்பு: k = A e^(-Ea/RT).'
    ]
  },
  c12_chem_u8: {
    id: 'sum_c12_chem_u8',
    chapterId: 'c12_chem_u8',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Ionic Equilibrium investigates weak acids and bases via Ostwald’s dilution law, the Sorensen pH scale (pH + pOH = 14), buffer mechanisms governed by the Henderson-Hasselbalch equation, and common ion effects.',
    simpleExplanationTa: 'அயனிச் சமநிலை ஆஸ்ட்வால்ட் நீர்த்தல் விதி, pH அளவீடு, தாங்கல் கரைசல்களுக்கான ஹெண்டர்சன் சமன்பாடு மற்றும் பொது அயனி விளைவை விளக்குகிறது.',
    keyPointsEn: [
      'Ostwald\'s dilution law: α = √(Ka/C) and [H+] = √(Ka · C).',
      'At 25°C, pH + pOH = 14 across all aqueous solutions.',
      'Henderson-Hasselbalch equation computes pH = pKa + log([Salt]/[Acid]) for buffer mixtures.',
      'Common ion effect suppresses weak electrolyte ionization.'
    ],
    keyPointsTa: [
      'ஆஸ்ட்வால்ட் நீர்த்தல் விதி: α = √(Ka/C) மற்றும் [H+] = √(Ka · C).',
      '25°C-ல் அனைத்து நீர்க்கரைசல்களிலும் pH + pOH = 14.',
      'ஹெண்டர்சன் சமன்பாடு தாங்கல் கரைசலின் pH மதிப்பைக் கணக்கிடுகிறது.',
      'பொது அயனி விளைவு வலிமை குறைந்த மின்பகுளியின் பிரிகையைக் குறைக்கிறது.'
    ]
  },
  c12_chem_u9: {
    id: 'sum_c12_chem_u9',
    chapterId: 'c12_chem_u9',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Electrochemistry connects chemical energy and electricity, covering Kohlrausch’s law of independent ion migration, Galvanic Daniel cells, the Nernst equation for cell voltages, rechargeable lead batteries, and corrosion prevention.',
    simpleExplanationTa: 'மின் வேதியியல் கோல்ராஷ் விதி, டேனியல் கால்வானிக் மின்கலம், நெர்ன்ஸ்ட் சமன்பாடு, காரிய அமில சேமிப்பு மின்கலம் மற்றும் அரிமானம் தடுத்தலை விவரிக்கிறது.',
    keyPointsEn: [
      'Kohlrausch\'s law calculates limiting molar conductivities of weak electrolytes.',
      'Daniel cell generates 1.10 V standard EMF via spontaneous Zn oxidation and Cu reduction.',
      'Nernst equation at 298 K: Ecell = E°cell - (0.0591/n) log Q.',
      'Corrosion is an electrochemical process prevented by zinc sacrificial galvanization.'
    ],
    keyPointsTa: [
      'கோல்ராஷ் விதி வலிமை குறைந்த மின்பகுளிகளின் மோலார் கடத்துத்திறனைக் கணக்கிட உதவுகிறது.',
      'டேனியல் மின்கலம் 1.10 V மின்னழுத்தத்தை உருவாக்குகிறது.',
      'நெர்ன்ஸ்ட் சமன்பாடு: Ecell = E°cell - (0.0591/n) log Q.',
      'இரும்பு துருப்பிடித்தல் துத்தநாக முலாம் பூசுவதன் மூலம் தடுக்கப்படுகிறது.'
    ]
  },
  c12_chem_u10: {
    id: 'sum_c12_chem_u10',
    chapterId: 'c12_chem_u10',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Surface Chemistry examines physical vs chemical adsorption, the Freundlich isotherm (log x/m vs log P), homogeneous and heterogeneous catalysis, Tyndall scattering, electrophoresis, and the Hardy-Schulze coagulation rule.',
    simpleExplanationTa: 'புறப்பரப்பு வேதியியல் இயற்புறப்பரப்பு vs வேதிப்புறப்பரப்புக் கவர்தல், பிரண்ட்லிச் சமவெப்பக்கோடு, வினையூக்கம், டின்டால் விளைவு மற்றும் ஹார்டி-சுல்ஸ் விதியை ஆராய்கிறது.',
    keyPointsEn: [
      'Physisorption involves weak multi-layer Van der Waals forces; Chemisorption involves specific monolayer chemical bonds.',
      'Freundlich adsorption isotherm: x/m = k P^(1/n).',
      'Tyndall effect scatters light; Electrophoresis proves colloidal particles carry electric charge.',
      'Hardy-Schulze rule: higher flocculating ion valency yields dramatically stronger coagulating power (Al3+ > Ba2+ > Na+).'
    ],
    keyPointsTa: [
      'இயற்புறப்பரப்புக் கவர்தல் பல அடுக்கு வாண்டர்வால்ஸ் விசை; வேதிப்புறப்பரப்புக் கவர்தல் ஒற்றை அடுக்கு வேதிப்பிணைப்பு.',
      'பிரண்ட்லிச் சமன்பாடு: x/m = k P^(1/n).',
      'டின்டால் விளைவு ஒளிச்சிதறலையும், மின்புல நகர்ச்சி கூழ்மத்தின் மின்சுமையையும் காட்டுகின்றன.',
      'ஹார்டி-சுல்ஸ் விதிப்படி அதிக இணைதிறன் கொண்ட அயனி அதிக வீழ்படிவாக்கும் திறன் கொண்டது.'
    ]
  }
};

export const CHEM_VOL1B_QUIZZES: Record<string, ChapterQuiz> = {
  c12_chem_u6: {
    id: 'quiz_c12_chem_u6',
    chapterId: 'c12_chem_u6',
    titleEn: 'Solid State Board Exam Mastery Quiz',
    titleTa: 'திட நிலைமை தேர்வு மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the packing efficiency of a Face-Centered Cubic (FCC) unit cell?',
        questionTa: 'முக மைய கனசதுர (FCC) அலகுக்கூட்டின் பொதிவுத் திறன் என்ன?',
        optionsEn: ['74.05%', '68.04%', '52.36%', '90.00%'],
        optionsTa: ['74.05%', '68.04%', '52.36%', '90.00%'],
        correctAnswer: '74.05%',
        explanationEn: 'FCC packing efficiency = [4 × (4/3)πr³] / [16√2 r³] × 100 = 74.05%.',
        explanationTa: 'FCC அலகுக்கூட்டில் 4 அணுக்கள் உள்ளதால் பொதிவுத் திறன் 74.05% ஆகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which crystalline substance famously exhibits BOTH Schottky and Frenkel defects?',
        questionTa: 'ஸ்டாட்கி மற்றும் பிரெங்கல் குறைபாடுகள் இரண்டையுமே காட்டும் படிகப் பொருள் எது?',
        optionsEn: ['AgBr', 'NaCl', 'CsCl', 'ZnS'],
        optionsTa: ['AgBr', 'NaCl', 'CsCl', 'ZnS'],
        correctAnswer: 'AgBr',
        explanationEn: 'Silver bromide (AgBr) displays Schottky defect as well as Frenkel defect of Ag+ ions.',
        explanationTa: 'சில்வர் புரோமைடு (AgBr) ஸ்டாட்கி மற்றும் பிரெங்கல் ஆகிய இரு குறைபாடுகளையும் காட்டுகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'A Schottky defect decreases the overall density of a crystalline solid.',
        questionTa: 'ஸ்டாட்கி குறைபாடு படிக வடிவ திடப்பொருளின் ஒட்டுமொத்த அடர்த்தியைக் குறைக்கிறது.',
        correctAnswer: true,
        explanationEn: 'True. Pairs of positive and negative ions leave the lattice, reducing mass without changing volume.',
        explanationTa: 'சரி. சம எண்ணிக்கையிலான அயனிகள் வெளியேறுவதால் நிறை குறைந்து அடர்த்தி குறைகிறது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'According to Bragg’s Law, what is the fundamental equation for X-ray diffraction?',
        questionTa: 'பிராக் சமன்பாட்டின்படி எக்ஸ்-கதிர் விளிம்பு விளைவுக்கான அடிப்படை சமன்பாடு எது?',
        optionsEn: ['nλ = 2d sin θ', 'nλ = d sin θ', 'λ = 2d cos θ', '2nλ = d sin θ'],
        optionsTa: ['nλ = 2d sin θ', 'nλ = d sin θ', 'λ = 2d cos θ', '2nλ = d sin θ'],
        correctAnswer: 'nλ = 2d sin θ',
        explanationEn: 'Path difference for constructive interference between parallel crystal planes is 2d sin θ.',
        explanationTa: 'படிகத் தளங்களுக்கு இடையேயான பாதை வேறுபாடு 2d sin θ = nλ ஆகும்.'
      }
    ]
  },

  c12_chem_u7: {
    id: 'quiz_c12_chem_u7',
    chapterId: 'c12_chem_u7',
    titleEn: 'Chemical Kinetics Board Quiz',
    titleTa: 'வேதி வினைவேகவியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the half-life equation for a first-order chemical reaction?',
        questionTa: 'முதல் வகை வேதி வினையின் அரைவாழ்வுக் கால சமன்பாடு என்ன?',
        optionsEn: ['t1/2 = 0.693 / k', 't1/2 = [A]0 / 2k', 't1/2 = 1 / (k[A]0)', 't1/2 = 2.303 / k'],
        optionsTa: ['t1/2 = 0.693 / k', 't1/2 = [A]0 / 2k', 't1/2 = 1 / (k[A]0)', 't1/2 = 2.303 / k'],
        correctAnswer: 't1/2 = 0.693 / k',
        explanationEn: 'For a first order reaction, t1/2 = ln(2)/k = 0.693/k, completely independent of initial reactant concentration.',
        explanationTa: 'முதல் வகை வினையில் t1/2 = 0.693/k; இது தொடக்கச் செறிவைச் சார்ந்திருக்காது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'How does the rate of a chemical reaction generally change when temperature is raised by 10°C?',
        questionTa: 'வெப்பநிலை 10°C உயர்த்தப்படும் போது ஒரு வேதி வினையின் வேகம் பொதுவாக எவ்வாறு மாறுகிறது?',
        optionsEn: ['Approximately doubles', 'Decreases by half', 'Increases tenfold', 'Remains unchanged'],
        optionsTa: ['ஏறத்தாழ இருமடங்காகிறது', 'பாதியாகக் குறைகிறது', 'பத்து மடங்கு கூடுகிறது', 'மாறுவதில்லை'],
        correctAnswer: 'Approximately doubles',
        explanationEn: 'The temperature coefficient for most chemical reactions lies between 2 and 3.',
        explanationTa: 'பெரும்பாலான வினைகளில் வெப்பநிலை 10°C கூடும்போது வினைவேகம் இருமடங்காகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The order of a chemical reaction can be a fraction or even zero.',
        questionTa: 'ஒரு வேதி வினையின் வினை வகை பின்னமாகவோ அல்லது பூஜ்யமாகவோ இருக்கலாம்.',
        correctAnswer: true,
        explanationEn: 'True. Reaction order is an experimentally determined quantity and can be 0, fractional, or integer.',
        explanationTa: 'சரி. வினை வகை சோதனையின் மூலம் கண்டறியப்படுவதால் அது பூஜ்யம் அல்லது பின்னமாகவும் இருக்கலாம்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'What is the slope of the linear plot of ln(k) vs 1/T in the Arrhenius equation?',
        questionTa: 'அர்ஹீனியஸ் சமன்பாட்டில் ln(k) மற்றும் 1/T இடையேயான வரைபடத்தின் சாய்வு என்ன?',
        optionsEn: ['-Ea / R', '+Ea / R', '-Ea / (2.303 R)', 'ln A'],
        optionsTa: ['-Ea / R', '+Ea / R', '-Ea / (2.303 R)', 'ln A'],
        correctAnswer: '-Ea / R',
        explanationEn: 'ln k = ln A - (Ea/R)(1/T). Plotting ln k vs 1/T gives a straight line with slope = -Ea/R.',
        explanationTa: 'ln k = ln A - (Ea/R)(1/T) சமன்பாட்டின்படி சாய்வு = -Ea/R ஆகும்.'
      }
    ]
  },

  c12_chem_u8: {
    id: 'quiz_c12_chem_u8',
    chapterId: 'c12_chem_u8',
    titleEn: 'Ionic Equilibrium Board Quiz',
    titleTa: 'அயனிச் சமநிலை வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the sum of pH and pOH in any aqueous solution at 25°C?',
        questionTa: '25°C வெப்பநிலையில் எந்தவொரு நீர்க்கரைசலிலும் pH மற்றும் pOH ஆகியவற்றின் கூடுதல் என்ன?',
        optionsEn: ['14', '7', '1', '10^(-14)'],
        optionsTa: ['14', '7', '1', '10^(-14)'],
        correctAnswer: '14',
        explanationEn: 'Kw = [H+][OH-] = 1.0 × 10^(-14) at 25°C, hence pH + pOH = pKw = 14.',
        explanationTa: '25°C-ல் Kw = 1.0 × 10^(-14) என்பதால் pH + pOH = 14 ஆகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which formula represents the Henderson-Hasselbalch equation for an acidic buffer?',
        questionTa: 'அமிலத் தாங்கல் கரைசலுக்கான ஹெண்டர்சன்-ஹாசல்பாக் சமன்பாடு எது?',
        optionsEn: ['pH = pKa + log([Salt]/[Acid])', 'pH = pKa - log([Salt]/[Acid])', 'pOH = pKb + log([Acid]/[Salt])', 'pH = pKb + log([Salt]/[Base])'],
        optionsTa: ['pH = pKa + log([உப்பு]/[அமிலம்])', 'pH = pKa - log([உப்பு]/[அமிலம்])', 'pOH = pKb + log([அமிலம்]/[உப்பு])', 'pH = pKb + log([உப்பு]/[காரம்])'],
        correctAnswer: 'pH = pKa + log([Salt]/[Acid])',
        explanationEn: 'Henderson-Hasselbalch equation: pH = pKa + log10([Salt]/[Acid]).',
        explanationTa: 'அமிலத் தாங்கலுக்கு pH = pKa + log([உப்பு]/[அமிலம்]).'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'According to the Lewis concept, BF3 acts as an acid because Boron has an incomplete octet.',
        questionTa: 'லூயிஸ் கொள்கைப்படி போரான் முழுமையடையாத எண்ம அமைப்பைப் பெற்றுள்ளதால் BF3 அமிலமாகச் செயல்படுகிறது.',
        correctAnswer: true,
        explanationEn: 'True. BF3 is an electron-deficient electrophile capable of accepting an electron pair.',
        explanationTa: 'சரி. BF3 எலக்ட்ரான் குறைபாடு கொண்டிருப்பதால் எலக்ட்ரான் ஜோடியை ஏற்கும் லூயிஸ் அமிலமாகும்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'When will precipitation occur in an ionic solution in terms of ionic product (Qsp) and solubility product (Ksp)?',
        questionTa: 'அயனிப் பெருக்கம் (Qsp) மற்றும் கரைதிறன் பெருக்கம் (Ksp) அடிப்படையில் எப்போது வீழ்படிவாதல் நிகழும்?',
        optionsEn: ['Qsp > Ksp', 'Qsp < Ksp', 'Qsp = Ksp', 'Qsp = 0'],
        optionsTa: ['Qsp > Ksp', 'Qsp < Ksp', 'Qsp = Ksp', 'Qsp = 0'],
        correctAnswer: 'Qsp > Ksp',
        explanationEn: 'Precipitation occurs only when the ionic product exceeds the solubility product limit (Qsp > Ksp).',
        explanationTa: 'அயனிப் பெருக்கம் கரைதிறன் பெருக்கத்தை விட அதிகமாகும் போது (Qsp > Ksp) வீழ்படிவாதல் நிகழும்.'
      }
    ]
  },

  c12_chem_u9: {
    id: 'quiz_c12_chem_u9',
    chapterId: 'c12_chem_u9',
    titleEn: 'Electrochemistry Board Quiz',
    titleTa: 'மின் வேதியியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the standard cell potential (E°cell) of a Daniel Cell (Zn-Cu)?',
        questionTa: 'டேனியல் மின்கலத்தின் (Zn-Cu) திட்ட மின்கல மின்னழுத்தம் (E°cell) என்ன?',
        optionsEn: ['+1.10 V', '+0.76 V', '+0.34 V', '+2.00 V'],
        optionsTa: ['+1.10 V', '+0.76 V', '+0.34 V', '+2.00 V'],
        correctAnswer: '+1.10 V',
        explanationEn: 'E°cell = E°cathode - E°anode = +0.34 V - (-0.76 V) = +1.10 V.',
        explanationTa: 'E°cell = +0.34 - (-0.76) = +1.10 V.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which law allows calculating the limiting molar conductivity of weak electrolytes like CH3COOH?',
        questionTa: 'அசிட்டிக் அமிலம் போன்ற வலிமை குறைந்த மின்பகுளிகளின் எல்லை மோலார் கடத்துத்திறனைக் கணக்கிட உதவும் விதி எது?',
        optionsEn: ['Kohlrausch’s Law', 'Faraday’s Law', 'Ohm’s Law', 'Nernst Law'],
        optionsTa: ['கோல்ராஷ் விதி', 'பாரடே விதி', 'ஓம் விதி', 'நெர்ன்ஸ்ட் விதி'],
        correctAnswer: 'Kohlrausch’s Law',
        explanationEn: 'Kohlrausch\'s law states that each ion contributes independently at infinite dilution.',
        explanationTa: 'கோல்ராஷ் விதியின் மூலம் அயனிகளின் தனித்த எல்லை கடத்துத்திறனைக் கூட்டி கணக்கிடலாம்.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'In a Galvanic cell, oxidation takes place at the anode, which acts as the negative pole.',
        questionTa: 'கால்வானிக் மின்கலத்தில் ஆனோபில் ஆக்சிஜனேற்றம் நிகழ்கிறது, அது எதிர் முனையமாகச் செயல்படுகிறது.',
        correctAnswer: true,
        explanationEn: 'True. Oxidation (loss of electrons) occurs at the anode, releasing electrons into the external wire.',
        explanationTa: 'சரி. ஆனோடில் எலக்ட்ரான்களை இழக்கும் ஆக்சிஜனேற்றம் நிகழ்ந்து எலக்ட்ரான்கள் வெளிச்சுற்றுக்குச் செல்கின்றன.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'In the Nernst equation at 298 K, what is the numerical factor multiplying (1/n) log Q?',
        questionTa: '298 K-ல் நெர்ன்ஸ்ட் சமன்பாட்டில் (1/n) log Q-உடன் பெருக்கப்படும் எண் மதிப்பு என்ன?',
        optionsEn: ['0.0591', '0.0295', '8.314', '96500'],
        optionsTa: ['0.0591', '0.0295', '8.314', '96500'],
        correctAnswer: '0.0591',
        explanationEn: '2.303 RT / F = 2.303 × 8.314 × 298 / 96485 = 0.0591 V.',
        explanationTa: '2.303 RT / F = 0.0591 V ஆகும்.'
      }
    ]
  },

  c12_chem_u10: {
    id: 'quiz_c12_chem_u10',
    chapterId: 'c12_chem_u10',
    titleEn: 'Surface Chemistry Board Quiz',
    titleTa: 'புறப்பரப்பு வேதியியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which optical phenomenon causes the illuminated scattering path of light inside a colloid?',
        questionTa: 'கூழ்மக் கரைசலில் ஒளியின் பாதை தெரியக் காரணமான ஒளிவியல் நிகழ்வு எது?',
        optionsEn: ['Tyndall Effect', 'Brownian Motion', 'Electrophoresis', 'Dialysis'],
        optionsTa: ['டின்டால் விளைவு (Tyndall Effect)', 'பிரௌனியன் இயக்கம்', 'மின்புல நகர்ச்சி', 'சவ்வூடுபரவல்'],
        correctAnswer: 'Tyndall Effect',
        explanationEn: 'Colloidal particles scatter visible light wavelengths, producing the bright Tyndall cone.',
        explanationTa: 'கூழ்மத் துகள்கள் ஒளியைச் சிதறடிப்பதால் டின்டால் கூம்பு ஒளிர்கிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'According to the Hardy-Schulze rule, which ion has the highest coagulating power for a negatively charged sol?',
        questionTa: 'ஹார்டி-சுல்ஸ் விதிப்படி எதிர்மின்சுமை கொண்ட கூழ்மத்தை வீழ்படிவாக்கும் அதிகத் திறன் கொண்ட அயனி எது?',
        optionsEn: ['Al3+', 'Ba2+', 'Na+', 'K+'],
        optionsTa: ['Al3+', 'Ba2+', 'Na+', 'K+'],
        correctAnswer: 'Al3+',
        explanationEn: 'Coagulating power increases with higher valency: Al3+ (+3) > Ba2+ (+2) > Na+ (+1).',
        explanationTa: 'அயனியின் நேர் மின்சுமை அதிகமாக இருக்கும்போது வீழ்படிவாக்கும் திறன் அதிகம்: Al3+ > Ba2+ > Na+.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Chemisorption involves strong chemical bond formation and is typically irreversible.',
        questionTa: 'வேதிப்புறப்பரப்புக் கவர்தலில் வலிமையான வேதிப்பிணைப்பு உருவாவதால் அது பொதுவாக மீளாதது.',
        correctAnswer: true,
        explanationEn: 'True. Chemisorption forms genuine chemical surface compounds with high enthalpy.',
        explanationTa: 'சரி. வேதிப்புறப்பரப்புக் கவர்தல் அதிக வெப்பநிலையை உறிஞ்சி வேதிப்பிணைப்புகளை உருவாக்குவதால் மீளாது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'In the Freundlich adsorption isotherm equation (x/m = k P^(1/n)), what is the physical range of 1/n?',
        questionTa: 'பிரண்ட்லிச் சமன்பாட்டில் (x/m = k P^(1/n)) 1/n-ன் அனுமதிக்கப்பட்ட மதிப்பு வரம்பு என்ன?',
        optionsEn: ['Between 0 and 1', 'Always greater than 2', 'Exactly 0', 'Negative values'],
        optionsTa: ['0 மற்றும் 1-க்கு இடையில்', '2-க்கு மேல்', 'சரியாக 0', 'எதிர்மறை எண்கள்'],
        correctAnswer: 'Between 0 and 1',
        explanationEn: 'The value of 1/n lies between 0 and 1 (usually 0.1 to 0.5) over ordinary pressure ranges.',
        explanationTa: 'சாதாரண அழுத்த வரம்பில் 1/n-ன் மதிப்பு எப்போதும் 0 மற்றும் 1-க்கு இடையில் இருக்கும்.'
      }
    ]
  }
};

export const CHEM_VOL1B_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_chem_u6: {
    id: 'diag_c12_chem_u6',
    chapterId: 'c12_chem_u6',
    titleEn: 'Unit Cell Geometry (BCC & FCC) and Schottky vs Frenkel Crystal Defects',
    titleTa: 'அலகுக்கூடு கட்டமைப்பு (BCC, FCC) மற்றும் ஸ்டாட்கி vs பிரெங்கல் குறைபாடுகள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">BCC & FCC Packing Models</text>
      <rect x="65" y="105" width="80" height="80" fill="none" stroke="#2563eb" stroke-width="2"/>
      <circle cx="65" cy="105" r="8" fill="#3b82f6"/>
      <circle cx="145" cy="105" r="8" fill="#3b82f6"/>
      <circle cx="65" cy="185" r="8" fill="#3b82f6"/>
      <circle cx="145" cy="185" r="8" fill="#3b82f6"/>
      <circle cx="105" cy="145" r="14" fill="#ef4444"/>
      <text x="105" y="150" text-anchor="middle" fill="#fff" font-weight="bold" font-size="9">Body</text>
      <text x="105" y="210" text-anchor="middle" fill="#1e40af" font-size="11">BCC (Z=2, 68%)</text>
      <text x="210" y="150" text-anchor="middle" fill="#047857" font-weight="bold" font-size="11">FCC: Z=4<br/>(74% dense)</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">Crystal Defects: Schottky vs Frenkel</text>
      <circle cx="350" cy="110" r="10" fill="#3b82f6"/>
      <circle cx="390" cy="110" r="8" fill="#94a3b8" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3"/>
      <circle cx="430" cy="110" r="10" fill="#3b82f6"/>
      <circle cx="350" cy="150" r="8" fill="#94a3b8" stroke="#ef4444" stroke-width="1.5" stroke-dasharray="3"/>
      <circle cx="390" cy="150" r="10" fill="#3b82f6"/>
      <circle cx="430" cy="150" r="10" fill="#10b981"/>
      <circle cx="480" cy="140" r="7" fill="#f59e0b"/>
      <text x="440" y="195" text-anchor="middle" fill="#b91c1c" font-size="11">Schottky: Missing Anion & Cation pair</text>
      <text x="440" y="235" text-anchor="middle" fill="#d97706" font-size="11">Frenkel: Cation in Interstitial Void</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Body Centered Atom (BCC)', labelTa: 'பொருள் மைய அணு', descriptionEn: 'Single whole atom nested at the exact center of the cubic cell.', descriptionTa: 'கனசதுரத்தின் மையத்தில் உள்ள முழுமையான அணு.', x: 17, y: 48 },
      { id: 'l2', labelEn: 'Schottky Vacancy Defect', labelTa: 'ஸ்டாட்கி வெற்றிடக் குறைபாடு', descriptionEn: 'Equal missing cation-anion pair lowering overall lattice density.', descriptionTa: 'சம எண்ணிக்கையிலான அயனிகள் வெளியேறி அடர்த்தியைக் குறைப்பது.', x: 62, y: 37 },
      { id: 'l3', labelEn: 'Frenkel Interstitial Defect', labelTa: 'பிரெங்கல் இடைச்செருகல் குறைபாடு', descriptionEn: 'Displaced cation sitting in interstitial space without density loss.', descriptionTa: 'நேர் அயனி தன் இடத்தை விட்டு இடைச்செருகல் இடைவெளியில் அமர்வது.', x: 80, y: 47 }
    ]
  },

  c12_chem_u7: {
    id: 'diag_c12_chem_u7',
    chapterId: 'c12_chem_u7',
    titleEn: 'Chemical Kinetics: Integrated Rate Plots & Arrhenius Activation Profile',
    titleTa: 'வினைவேகவியல்: தொகையிடப்பட்ட வரைபடங்கள் மற்றும் அர்ஹீனியஸ் கிளர்வுறு ஆற்றல்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">First Order Rate Decay</text>
      <line x1="60" y1="210" x2="250" y2="210" stroke="#64748b" stroke-width="2"/>
      <line x1="60" y1="210" x2="60" y2="90" stroke="#64748b" stroke-width="2"/>
      <path d="M 60 100 Q 120 180 240 200" fill="none" stroke="#2563eb" stroke-width="3"/>
      <text x="60" y="85" text-anchor="middle" font-size="10">[A]₀</text>
      <line x1="60" y1="150" x2="110" y2="150" stroke="#ef4444" stroke-dasharray="3"/>
      <line x1="110" y1="150" x2="110" y2="210" stroke="#ef4444" stroke-dasharray="3"/>
      <text x="110" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="10">t₁/₂</text>
      <text x="155" y="248" text-anchor="middle" fill="#1e40af" font-size="11">Time t →</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#9a3412" font-size="13">Arrhenius Activation Energy (Ea)</text>
      <line x1="340" y1="210" x2="540" y2="210" stroke="#64748b" stroke-width="2"/>
      <line x1="340" y1="210" x2="340" y2="90" stroke="#64748b" stroke-width="2"/>
      <path d="M 340 180 Q 420 80 520 190" fill="none" stroke="#ea580c" stroke-width="3"/>
      <line x1="340" y1="180" x2="420" y2="180" stroke="#94a3b8" stroke-dasharray="3"/>
      <line x1="420" y1="180" x2="420" y2="105" stroke="#b91c1c" stroke-width="2"/>
      <text x="445" y="145" fill="#b91c1c" font-weight="bold" font-size="12">Ea</text>
      <circle cx="420" cy="105" r="5" fill="#ea580c"/>
      <text x="420" y="95" text-anchor="middle" font-size="10">Transition State</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'First Order Exponential Decay', labelTa: 'முதல் வகை அடுக்குக்குறி செறிவு குறைவு', descriptionEn: 'Concentration of reactant decreases exponentially with constant half-life.', descriptionTa: 'வினைபடு பொருள் மாறாத அரைவாழ்வுக் காலத்துடன் குறைகிறது.', x: 26, y: 55 },
      { id: 'l2', labelEn: 'Activation Energy Barrier (Ea)', labelTa: 'கிளர்வுறு ஆற்றல் தடை (Ea)', descriptionEn: 'Minimum kinetic energy colliding molecules must possess to react.', descriptionTa: 'வினை நிகழ துகள்கள் பெற்றிருக்க வேண்டிய குறைந்தபட்ச ஆற்றல்.', x: 70, y: 48 },
      { id: 'l3', labelEn: 'Activated Complex Transition State', labelTa: 'கிளர்வுற்ற அணைவு நிலை', descriptionEn: 'High-energy peak where old bonds break and new bonds form.', descriptionTa: 'பழைய பிணைப்புகள் உடைந்து புதியவை உருவாகும் உச்ச ஆற்றல் நிலை.', x: 70, y: 35 }
    ]
  },

  c12_chem_u8: {
    id: 'diag_c12_chem_u8',
    chapterId: 'c12_chem_u8',
    titleEn: 'pH Scale & Henderson Buffer Solution Resistance Mechanism',
    titleTa: 'pH அளவீடு மற்றும் தாங்கல் கரைசல் சமநிலை வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="30" width="520" height="240" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="58" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Sorensen pH Scale & Buffer Resistance Dynamics</text>
      <rect x="60" y="85" width="480" height="30" rx="6" fill="url(#phgrad)"/>
      <defs>
        <linearGradient id="phgrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ef4444"/>
          <stop offset="50%" stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#3b82f6"/>
        </linearGradient>
      </defs>
      <text x="65" y="105" font-weight="bold" fill="#fff" font-size="12">pH 0</text>
      <text x="295" y="105" font-weight="bold" fill="#fff" font-size="12">pH 7 (Neutral)</text>
      <text x="500" y="105" font-weight="bold" fill="#fff" font-size="12">pH 14</text>
      <rect x="80" y="145" width="200" height="100" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="180" y="170" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">Acidic Buffer (CH₃COOH + CH₃COONa)</text>
      <text x="180" y="195" text-anchor="middle" fill="#334155" font-size="11">Add H⁺ → Neutralized by CH₃COO⁻</text>
      <text x="180" y="225" text-anchor="middle" fill="#334155" font-size="11">Add OH⁻ → Neutralized by CH₃COOH</text>
      <rect x="320" y="145" width="200" height="100" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
      <text x="420" y="170" text-anchor="middle" font-weight="bold" fill="#854d0e" font-size="12">Henderson Equation</text>
      <text x="420" y="200" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">pH = pKa + log([Salt]/[Acid])</text>
      <text x="420" y="225" text-anchor="middle" fill="#475569" font-size="11">Buffer capacity max when [Salt] = [Acid]</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Sorensen pH 0 to 14 Scale', labelTa: 'சாரன்சன் pH 0-14 அளவீடு', descriptionEn: 'Logarithmic scale of hydronium ion concentration where pH 7 is pure water neutrality.', descriptionTa: 'pH 7 நடுநிலை; 7-க்கு கீழ் அமிலம்; 7-க்கு மேல் காரம்.', x: 50, y: 35 },
      { id: 'l2', labelEn: 'Acidic Buffer Dual Neutralization', labelTa: 'அமிலத் தாங்கல் இருவழி நடுநிலையாக்கல்', descriptionEn: 'Acetate ion mops up added acid; acetic acid absorbs added base.', descriptionTa: 'அசிட்டேட் அயனி அமிலத்தையும், அசிட்டிக் அமிலம் காரத்தையும் நடுநிலையாக்குகின்றன.', x: 30, y: 65 },
      { id: 'l3', labelEn: 'Henderson-Hasselbalch Ratio', labelTa: 'ஹெண்டர்சன் விகிதம்', descriptionEn: 'Logarithmic salt-to-acid ratio determining the stable buffer pH.', descriptionTa: 'உப்பு மற்றும் அமிலத்தின் செறிவு விகிதம் தாங்கல் pH-ஐ நிர்ணயிக்கிறது.', x: 70, y: 65 }
    ]
  },

  c12_chem_u9: {
    id: 'diag_c12_chem_u9',
    chapterId: 'c12_chem_u9',
    titleEn: 'Galvanic Daniel Cell (Zn-Cu) & Nernst Electrochemical Potential',
    titleTa: 'டேனியல் மின்கலம் மற்றும் நெர்ன்ஸ்ட் மின்வேதியியல் வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="30" width="520" height="240" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="58" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Daniel Electrochemical Cell (E°cell = +1.10 V)</text>
      <rect x="80" y="100" width="130" height="130" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <rect x="120" y="90" width="20" height="110" fill="#94a3b8" stroke="#475569"/>
      <text x="130" y="80" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="11">Zn Anode (-)</text>
      <text x="145" y="210" text-anchor="middle" fill="#3b82f6" font-size="10">1M ZnSO₄</text>
      <rect x="390" y="100" width="130" height="130" rx="8" fill="#fdf2f8" stroke="#ec4899" stroke-width="2"/>
      <rect x="430" y="90" width="20" height="110" fill="#f97316" stroke="#c2410c"/>
      <text x="440" y="80" text-anchor="middle" font-weight="bold" fill="#c2410c" font-size="11">Cu Cathode (+)</text>
      <text x="455" y="210" text-anchor="middle" fill="#ec4899" font-size="10">1M CuSO₄</text>
      <path d="M 180 120 C 240 70, 360 70, 420 120" fill="none" stroke="#22c55e" stroke-width="12" stroke-linecap="round"/>
      <text x="300" y="100" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="11">Salt Bridge (KCl)</text>
      <path d="M 130 90 L 130 65 L 260 65" fill="none" stroke="#475569" stroke-width="2"/>
      <circle cx="300" cy="65" r="14" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="300" y="70" text-anchor="middle" font-weight="bold" fill="#854d0e" font-size="11">1.10 V</text>
      <path d="M 340 65 L 440 65 L 440 90" fill="none" stroke="#475569" stroke-width="2"/>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Zinc Anode (Oxidation)', labelTa: 'துத்தநாக ஆனோடு (ஆக்சிஜனேற்றம்)', descriptionEn: 'Zn oxidizes releasing electrons: Zn → Zn2+ + 2e-.', descriptionTa: 'Zn எலக்ட்ரான்களை இழந்து Zn2+-ஆக கரைகிறது.', x: 22, y: 35 },
      { id: 'l2', labelEn: 'Agar-Agar Salt Bridge', labelTa: 'உப்புப் பாலம்', descriptionEn: 'KCl salt bridge conducts ions and prevents charge accumulation.', descriptionTa: 'மின் நடுநிலைத்தன்மையை நிலைநிறுத்தும் KCl உப்புப் பாலம்.', x: 50, y: 38 },
      { id: 'l3', labelEn: 'Copper Cathode (Reduction)', labelTa: 'தாமிர கேத்தோடு (ஒடுக்கம்)', descriptionEn: 'Cu2+ ions gain electrons and deposit as metallic copper.', descriptionTa: 'Cu2+ அயனிகள் எலக்ட்ரான்களை ஏற்று தாமிரமாகப் படிகின்றன.', x: 74, y: 35 }
    ]
  },

  c12_chem_u10: {
    id: 'diag_c12_chem_u10',
    chapterId: 'c12_chem_u10',
    titleEn: 'Surface Chemistry: Tyndall Light Scattering & Electrophoresis Cell',
    titleTa: 'புறப்பரப்பு வேதியியல்: டின்டால் ஒளிச்சிதறல் மற்றும் மின்புல நகர்ச்சி மின்கலம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Tyndall Effect in Colloids</text>
      <rect x="60" y="100" width="70" height="90" rx="4" fill="#e0f2fe" stroke="#0284c7"/>
      <text x="95" y="145" text-anchor="middle" font-size="10">True Sol<br/>(No Beam)</text>
      <rect x="150" y="100" width="100" height="90" rx="4" fill="#fef3c7" stroke="#d97706"/>
      <polygon points="150,145 250,120 250,170" fill="#f59e0b" opacity="0.6"/>
      <text x="200" y="150" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="11">Tyndall Cone</text>
      <text x="155" y="235" text-anchor="middle" fill="#0369a1" font-size="11">Light Scattered by Colloidal Particles</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="13">Electrophoresis U-Tube</text>
      <path d="M 370 95 L 370 190 Q 370 220 440 220 Q 510 220 510 190 L 510 95" fill="none" stroke="#7e22ce" stroke-width="12" stroke-linecap="round"/>
      <circle cx="370" cy="110" r="10" fill="#ef4444"/>
      <text x="370" y="114" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">+</text>
      <circle cx="510" cy="110" r="10" fill="#2563eb"/>
      <text x="510" y="114" text-anchor="middle" fill="#fff" font-weight="bold" font-size="10">-</text>
      <circle cx="390" cy="160" r="4" fill="#a855f7"/>
      <circle cx="430" cy="190" r="4" fill="#a855f7"/>
      <circle cx="470" cy="170" r="4" fill="#a855f7"/>
      <text x="440" y="245" text-anchor="middle" fill="#6b21a8" font-size="11">Charged Particles Migrate to Opposing Pole</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Tyndall Light Scattering Cone', labelTa: 'டின்டால் ஒளிச்சிதறல் கூம்பு', descriptionEn: 'Microscopic colloidal particles scatter incident light beam making path luminous.', descriptionTa: 'கூழ்மத் துகள்கள் ஒளியைச் சிதறடிப்பதால் ஒளிரும் கூம்பு தோன்றுதல்.', x: 34, y: 50 },
      { id: 'l2', labelEn: 'Electrophoresis U-Tube Apparatus', labelTa: 'மின்புல நகர்ச்சி U-குழாய்', descriptionEn: 'U-tube containing sol subjected to external electric field.', descriptionTa: 'மின்புலம் செலுத்தப்படும் போது கூழ்மத் துகள்கள் நகரும் U-குழாய்.', x: 74, y: 45 },
      { id: 'l3', labelEn: 'Charged Sol Migration', labelTa: 'மின்சுமை பெற்ற துகள் நகர்வு', descriptionEn: 'Proves presence of electric charge on colloidal particles (zeta potential).', descriptionTa: 'கூழ்மத் துகள்கள் மின்சுமை பெற்றுள்ளதை நிரூபிக்கும் நகர்வு.', x: 74, y: 65 }
    ]
  }
};

export const CHEM_VOL1B_VIDEOS: Record<string, VideoExplainer> = {
  c12_chem_u6: {
    id: 'vid_c12_chem_u6',
    chapterId: 'c12_chem_u6',
    titleEn: 'Animation: Crystal Packing Efficiency & Schottky-Frenkel Defects',
    titleTa: 'அனிமேஷன்: படிகப் பொதிவுத் திறன் மற்றும் குறைபாடுகள்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Stacking Spheres: From SC to FCC',
        titleTa: 'கனசதுர பொதிவுத் திறன் அனிமேஷன்',
        visualDescription: 'Hard spheres packing into Simple Cubic (52%), Body-Centered Cubic (68%), and close-packed FCC (74%).',
        narrationEn: 'Watch atoms pack together in crystal space! Face-centered cubic achieves nature’s tightest packing efficiency of 74.05% with 4 full atoms per unit cell!',
        narrationTa: 'அணுக்கள் படிகத்தில் நெருக்கமாகப் பொதிகின்றன! முக மைய கனசதுரம் 74.05% அதிகபட்ச பொதிவுத் திறனைப் பெற்றுள்ளது!',
        conceptKey: 'Packing Fraction'
      },
      {
        sceneNumber: 2,
        titleEn: 'Schottky Defect: The Disappearing Act',
        titleTa: 'ஸ்டாட்கி குறைபாடு: காணாமல் போகும் அயனிகள்',
        visualDescription: 'One Na+ cation and one Cl- anion evaporating out of the lattice together, leaving behind empty vacancies that reduce density.',
        narrationEn: 'In a Schottky defect, balanced cation and anion partners vanish from the crystal lattice, making the solid lighter and less dense!',
        narrationTa: 'ஸ்டாட்கி குறைபாட்டில் சம எண்ணிக்கையிலான நேர் மற்றும் எதிர் அயனிகள் வெளியேறுவதால் படிகத்தின் அடர்த்தி குறைகிறது!',
        conceptKey: 'Schottky Density Loss'
      },
      {
        sceneNumber: 3,
        titleEn: 'AgBr: The Dual Defect Chameleon',
        titleTa: 'AgBr: இரு குறைபாடுகளின் சங்கமம்',
        visualDescription: 'AgBr crystal demonstrating both missing ions (Schottky) and dislodged Ag+ ions sitting in interstitial voids (Frenkel).',
        narrationEn: 'Silver bromide is a rare crystal wonder! Depending on conditions, it exhibits both Schottky missing pairs and Frenkel interstitial hopping!',
        narrationTa: 'சில்வர் புரோமைடு ஒரு தனித்துவமான படிகம்! இது ஸ்டாட்கி மற்றும் பிரெங்கல் குறைபாடுகள் இரண்டையுமே காட்டுகிறது!',
        conceptKey: 'AgBr Dual Defect'
      }
    ]
  },

  c12_chem_u7: {
    id: 'vid_c12_chem_u7',
    chapterId: 'c12_chem_u7',
    titleEn: 'Animation: Chemical Kinetics & Arrhenius Activation Energy',
    titleTa: 'அனிமேஷன்: வேதி வினைவேகவியல் மற்றும் கிளர்வுறு ஆற்றல்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Half-Life Independence in First Order Reactions',
        titleTa: 'முதல் வகை வினை அரைவாழ்வுக் காலம்',
        visualDescription: 'A container of radioactive or chemical reactant halving every 10 seconds regardless of starting volume.',
        narrationEn: 'In first-order kinetics, half-life is constant! Whether you begin with a mountain of reactant or a thimbleful, half disappears in exactly 0.693/k seconds!',
        narrationTa: 'முதல் வகை வினையில் அரைவாழ்வுக் காலம் தொடக்க அளவைச் சார்ந்திருக்காது! 0.693/k நேரத்தில் சரிபாதியாகக் குறைகிறது!',
        conceptKey: 'Half-Life Constancy'
      },
      {
        sceneNumber: 2,
        titleEn: 'Climbing the Arrhenius Mountain: Activation Energy',
        titleTa: 'அர்ஹீனியஸ் கிளர்வுறு ஆற்றல் மலை',
        visualDescription: 'Reactant molecules colliding; only those with sufficient kinetic energy cross the energy peak to become products.',
        narrationEn: 'To react, molecules must surmount the Arrhenius activation energy barrier! Heating the mixture equips far more molecules to leap over the peak.',
        narrationTa: 'வினை நிகழ மூலக்கூறுகள் கிளர்வுறு ஆற்றல் மலையைக் கடக்க வேண்டும்! வெப்பத்தை அதிகரிக்கும் போது அதிக துகள்கள் வினையில் ஈடுபடுகின்றன!',
        conceptKey: 'Activation Barrier'
      },
      {
        sceneNumber: 3,
        titleEn: 'The 10-Degree Speed Doubler',
        titleTa: '10 டிகிரி வேக இரட்டிப்பு ரகசியம்',
        visualDescription: 'Maxwell-Boltzmann distribution shifting rightward; the shaded area of reactive molecules doubling with a 10 K rise.',
        narrationEn: 'Raising temperature by just 10 degrees doubles the fraction of molecules possessing threshold energy, doubling reaction velocity!',
        narrationTa: 'வெப்பநிலையை வெறும் 10°C உயர்த்தினால் கிளர்வுற்ற மூலக்கூறுகளின் எண்ணிக்கை இருமடங்காகி வினைவேகமும் இருமடங்காகிறது!',
        conceptKey: 'Temperature Coefficient'
      }
    ]
  },

  c12_chem_u8: {
    id: 'vid_c12_chem_u8',
    chapterId: 'c12_chem_u8',
    titleEn: 'Animation: pH Equilibrium & Henderson Buffer Resistance',
    titleTa: 'அனிமேஷன்: pH சமநிலை மற்றும் தாங்கல் கரைசல் செயல்பாடு',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Sorensen pH Balance',
        titleTa: 'சாரன்சன் pH அளவீடு',
        visualDescription: 'Hydronium and hydroxide ions in water balancing perfectly at 10^(-7) M each to yield pH 7.',
        narrationEn: 'In pure water at 25°C, H+ and OH- balance in perfect harmony at 10^(-7) M, giving neutrality at pH 7!',
        narrationTa: '25°C தூய நீரில் H+ மற்றும் OH- சமநிலையில் 10^(-7) M ஆக இருப்பதால் நடுநிலை pH 7 ஆக அமைகிறது!',
        conceptKey: 'Neutrality'
      },
      {
        sceneNumber: 2,
        titleEn: 'Buffers Under Attack: Resisting pH Shock',
        titleTa: 'தாங்கல் கரைசல் அமில-கார எதிர்ப்பு',
        visualDescription: 'Strong acid droplets splashing into an acetic acid/acetate buffer; acetate ions instantly neutralizing H+ to maintain steady pH.',
        narrationEn: 'Drop acid into water and pH plunges! But drop it into an acetate buffer, and acetate ions instantly mop up the protons, keeping pH stable!',
        narrationTa: 'தாங்கல் கரைசலில் அமிலம் சேர்க்கப்படும் போது அசிட்டேட் அயனிகள் அதனை உடனே நடுநிலையாக்கி pH மாறாமல் காக்கின்றன!',
        conceptKey: 'Buffer Action'
      },
      {
        sceneNumber: 3,
        titleEn: 'Common Ion Suppression',
        titleTa: 'பொது அயனி விளைவு',
        visualDescription: 'Adding sodium acetate salt shifting acetic acid equilibrium backward, suppressing its dissociation.',
        narrationEn: 'By the common ion effect, flooding a weak acid solution with its conjugate base drives dissociation backward, curbing acidity!',
        narrationTa: 'பொது அயனியான அசிட்டேட்டைச் சேர்க்கும்போது அசிட்டிக் அமிலத்தின் பிரிகை வீதம் பின்னோக்கித் தள்ளப்பட்டு குறைகிறது!',
        conceptKey: 'Common Ion Suppression'
      }
    ]
  },

  c12_chem_u9: {
    id: 'vid_c12_chem_u9',
    chapterId: 'c12_chem_u9',
    titleEn: 'Animation: Daniel Galvanic Cell & Rusting Electrochemistry',
    titleTa: 'அனிமேஷன்: டேனியல் மின்கலம் மற்றும் துருப்பிடித்தல் மின்வேதியியல்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Electron Highway: Daniel Cell',
        titleTa: 'டேனியல் மின்கல எலக்ட்ரான் ஓட்டம்',
        visualDescription: 'Zinc atoms shedding two electrons at the anode, electrons racing across the external voltmeter to plate copper onto the cathode.',
        narrationEn: 'In the Daniel cell, Zinc dissolves into Zn2+ while firing electrons through the wire to copper ions, generating a clean 1.10 Volts!',
        narrationTa: 'டேனியல் மின்கலத்தில் துத்தநாகம் எலக்ட்ரான்களை இழந்து தாமிரக் கேத்தோடிற்கு அனுப்பி 1.10 V மின்சாரத்தை உருவாக்குகிறது!',
        conceptKey: 'Galvanic Voltage'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Crucial Salt Bridge',
        titleTa: 'உப்புப் பாலத்தின் இன்றியமையாத பணி',
        visualDescription: 'K+ and Cl- ions flowing out of the agar-agar U-tube to neutralize accumulating charges in the half-cells.',
        narrationEn: 'Without the salt bridge, charge buildup stops the reaction instantly. Potassium and chloride ions flow gracefully to keep current flowing!',
        narrationTa: 'உப்புப் பாலம் இல்லாவிடில் மின்கலம் உடனே நின்றுவிடும்! K+ மற்றும் Cl- அயனிகள் மின் நடுநிலைத்தன்மையை நிலைநிறுத்துகின்றன!',
        conceptKey: 'Salt Bridge Function'
      },
      {
        sceneNumber: 3,
        titleEn: 'Rust: The Destructive Electrochemical Cell',
        titleTa: 'துரு: இயற்கையின் அழிவு மின்வேதியியல்',
        visualDescription: 'A water droplet on an iron surface acting as a miniature electrochemical cell, dissolving Fe and depositing red-brown rust.',
        narrationEn: 'Rust is electrochemistry in disguise! Water droplets turn iron into tiny galvanic cells, eating metal into brown hydrated iron(III) oxide.',
        narrationTa: 'துருப்பிடித்தல் என்பது ஒரு மின்வேதியியல் நிகழ்வு! நீர்த்துளி இரும்பை சிறிய மின்கலமாக மாற்றி செம்பழுப்பு துருவை உருவாக்குகிறது.',
        conceptKey: 'Corrosion Cell'
      }
    ]
  },

  c12_chem_u10: {
    id: 'vid_c12_chem_u10',
    chapterId: 'c12_chem_u10',
    titleEn: 'Animation: Tyndall Light Scattering & Hardy-Schulze Rule',
    titleTa: 'அனிமேஷன்: டின்டால் விளைவு மற்றும் ஹார்டி-சுல்ஸ் வீழ்படிவாக்கம்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Tyndall Spotlight',
        titleTa: 'டின்டால் ஒளிக்கற்றை',
        visualDescription: 'A laser passing invisibly through pure water, but blazing into a luminous golden cone when entering colloidal starch.',
        narrationEn: 'Colloidal particles are just the right size to scatter visible light! A laser beam invisible in water bursts into a radiant Tyndall cone in a colloid!',
        narrationTa: 'கூழ்மத் துகள்கள் ஒளியைச் சிதறடிக்கும் சரியான உருவளவைப் பெற்றுள்ளதால் ஒளிக்கற்றை டின்டால் கூம்பாகப் பிரகாசிக்கிறது!',
        conceptKey: 'Tyndall Scattering'
      },
      {
        sceneNumber: 2,
        titleEn: 'Electrophoresis: Proving Sol Charge',
        titleTa: 'மின்புல நகர்ச்சி: துகள்களின் மின்சுமை',
        visualDescription: 'Colloidal particles migrating towards the positive anode under high voltage.',
        narrationEn: 'Apply high voltage across a colloid, and the particles march towards the opposite pole! This electrophoresis proves colloids carry electric charge.',
        narrationTa: 'மின்புலம் செலுத்தும் போது துகள்கள் எதிர் மின்முனை நோக்கி நகர்வது அவை மின்சுமை கொண்டுள்ளதை நிரூபிக்கிறது!',
        conceptKey: 'Zeta Potential'
      },
      {
        sceneNumber: 3,
        titleEn: 'Hardy-Schulze Rule: The Power of Valency',
        titleTa: 'ஹார்டி-சுல்ஸ் விதி: இணைதிறனின் வலிமை',
        visualDescription: 'One Al3+ ion causing immediate flocculation of a negative sol compared to needing hundreds of Na+ ions.',
        narrationEn: 'The Hardy-Schulze rule reveals that higher valency ions coagulate colloids exponentially faster! One Al3+ matches dozens of Na+ ions!',
        narrationTa: 'ஹார்டி-சுல்ஸ் விதிப்படி அதிக இணைதிறன் கொண்ட Al3+ அயனி Na+-ஐ விட பன்மடங்கு வேகமாக வீழ்படிவாக்கும் ஆற்றல் கொண்டது!',
        conceptKey: 'Flocculation Power'
      }
    ]
  }
};
