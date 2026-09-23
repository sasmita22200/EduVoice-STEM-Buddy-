# -*- coding: utf-8 -*-

notes_data = '''
export const CLASS_11_CHEM_VOL1_NOTES: Record<string, NoteItem> = {
  c11_chem_u1: {
    id: 'note_c11_chem_u1',
    chapterId: 'c11_chem_u1',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Basic Concepts of Chemistry and Chemical Calculations',
    titleTa: 'வேதியியலின் அடிப்படைக் கருத்துக்கள் மற்றும் வேதிக்கணக்கீடுகள்',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Comprehensive notes with Mole concept, limiting reagents, empirical formulas, and redox balancing.',
    changeNoteTa: 'மோல் கருத்து, வினைக்கட்டுப்படுத்தும் காரணி, எளிய விகித வாய்ப்பாடு மற்றும் ஆக்சிஜனேற்ற-ஒடுக்க சமன்பாடுகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 12,
    bodyEn: `### 1. The Mole Concept & Avogadro Number
* **Mole ($mol$)**: The amount of substance that contains as many elementary entities (atoms, molecules, or ions) as there are carbon atoms in exactly $12\\\\text{ g}$ ($0.012\\\\text{ kg}$) of the $^{12}C$ isotope.
* **Avogadro Number ($N_A$)**: $6.022 \\\\times 10^{23}\\\\text{ entities mol}^{-1}$.
* **Molar Mass ($M$)**: Mass of one mole of a substance expressed in $\\\\text{g mol}^{-1}$.
* **Molar Volume ($V_m$)**: The volume occupied by one mole of any gaseous substance at Standard Temperature and Pressure ($STP: 273.15\\\\text{ K}, 1\\\\text{ bar}$) is $22.7\\\\text{ L}$ (or $22.4\\\\text{ L}$ at $0^\\\\circ\\\\text{C}, 1\\\\text{ atm}$).

### 2. Equivalent Mass & Normality
* **Gram Equivalent Mass**: The mass of an element or compound that combines with or displaces $1.008\\\\text{ g}$ of Hydrogen, $8\\\\text{ g}$ of Oxygen, or $35.45\\\\text{ g}$ of Chlorine.
  * For Acids: $\\\\text{Equivalent Mass} = \\\\frac{\\\\text{Molar Mass}}{\\\\text{Basicity}}$
  * For Bases: $\\\\text{Equivalent Mass} = \\\\frac{\\\\text{Molar Mass}}{\\\\text{Acidity}}$
  * For Oxidizing/Reducing Agents: $\\\\text{Equivalent Mass} = \\\\frac{\\\\text{Molar Mass}}{\\\\text{No. of electrons gained or lost per molecule}}$

### 3. Empirical Formula and Molecular Formula
* **Empirical Formula**: The simplest whole-number ratio of various atoms present in a compound.
* **Molecular Formula**: The actual number of atoms of each element in a molecule of the compound.
$$\\\\text{Molecular Formula} = n \\\\times \\\\text{Empirical Formula}, \\\\quad \\\\text{where } n = \\\\frac{\\\\text{Molar Mass}}{\\\\text{Empirical Formula Mass}}$$

### 4. Limiting Reagent and Stoichiometry
* **Stoichiometry**: Calculation of quantitative relationships of the reactants and products in a balanced chemical reaction.
* **Limiting Reagent**: The reactant which is completely consumed first in a reaction and thereby limits the amount of product formed.
* **Excess Reagent**: The reactant present in an amount greater than required to react with the limiting reagent.

### 5. Oxidation Number and Redox Reactions
* **Oxidation**: Increase in oxidation state, loss of electrons, addition of oxygen, or removal of hydrogen.
* **Reduction**: Decrease in oxidation state, gain of electrons, addition of hydrogen, or removal of oxygen.
* **Oxidation Number Rules**: Free elements = $0$; Fluorine is always $-1$; Oxygen is usually $-2$ (peroxides $-1$, superoxides $-1/2$, $OF_2$ $+2$); Group 1 is $+1$, Group 2 is $+2$.
* **Balancing Methods**:
  1. *Oxidation Number Method*
  2. *Ion-Electron (Half Reaction) Method* (in acidic or basic medium)`,
    bodyTa: `### 1. மோல் கருத்து மற்றும் அவகேட்ரோ எண்
* **மோல் ($mol$)**: தூய $^{12}C$ ஐசோடோப்பின் $12\\\\text{ g}$ நிறையில் உள்ள கார்பன் அணுக்களின் எண்ணிக்கைக்குச் சமமான அடிப்படைத் துகள்களைக் கொண்டுள்ள பொருளின் அளவு.
* **அவகேட்ரோ எண் ($N_A$)**: $6.022 \\\\times 10^{23}\\\\text{ துகள்கள் mol}^{-1}$.
* **மோலார் பருமன்**: திட்ட வெப்பநிலை மற்றும் அழுத்தத்தில் ($STP$) ஒரு மோல் வாயு அடைத்துக் கொள்ளும் பருமன் $22.7\\\\text{ L}$ (அல்லது $1\\\\text{ atm}$-ல் $22.4\\\\text{ L}$).

### 2. கிராம் சமான நிறை
* $1.008\\\\text{ g}$ ஹைட்ரஜன், $8\\\\text{ g}$ ஆக்சிஜன் அல்லது $35.45\\\\text{ g}$ குளோரினுடன் இணையக்கூடிய அல்லது அவற்றை இடப்பெயர்ச்சி செய்யக்கூடிய ஒரு தனிமம் அல்லது சேர்மத்தின் நிறை அதன் கிராம் சமான நிறை எனப்படும்.
  * அமிலத்தின் சமான நிறை = $\\\\frac{\\\\text{மோலார் நிறை}}{\\\\text{காரத்துவம்}}$
  * காரத்தின் சமான நிறை = $\\\\frac{\\\\text{மோலார் நிறை}}{\\\\text{அமிலத்துவம்}}$
  * ஆக்சிஜனேற்றி/ஒடுக்கியின் சமான நிறை = $\\\\frac{\\\\text{மோலார் நிறை}}{\\\\text{ஏற்கப்பட்ட அல்லது இழக்கப்பட்ட எலக்ட்ரான்களின் எண்ணிக்கை}}$

### 3. எளிய விகித வாய்ப்பாடு & மூலக்கூறு வாய்ப்பாடு
* **எளிய விகித வாய்ப்பாடு**: ஒரு சேர்மத்தின் ஒரு மூலக்கூறில் உள்ள வெவ்வேறு தனிமங்களின் அணுக்களுக்கிடையேயான மிக எளிய முழு எண் விகிதம்.
* **மூலக்கூறு வாய்ப்பாடு**: ஒரு மூலக்கூறில் உள்ள அணுக்களின் உண்மையான எண்ணிக்கை.
$$\\\\text{மூலக்கூறு வாய்ப்பாடு} = n \\\\times (\\\\text{எளிய விகித வாய்ப்பாடு}), \\\\quad n = \\\\frac{\\\\text{மோலார் நிறை}}{\\\\text{எளிய விகித வாய்ப்பாட்டு நிறை}}$$

### 4. வினைக்கட்டுப்படுத்தும் காரணி
* ஒரு வேதிவினையில் முதலில் முழுமையாக செலவிடப்பட்டு, உருவாகும் விளைபொருளின் அளவைத் தீர்மானிக்கும் வினைபடு பொருள் **வினைக்கட்டுப்படுத்தும் காரணி (Limiting Reagent)** எனப்படும்.`,
    keyFormulas: [
      {
        nameEn: 'Number of Moles',
        nameTa: 'மோல்களின் எண்ணிக்கை',
        formula: 'n = \\\\frac{m}{M} = \\\\frac{N}{N_A} = \\\\frac{V}{22.4\\\\text{ L (at STP)}}',
        explanationEn: 'Calculates moles from given mass m, particle count N, or gas volume V at STP.',
        explanationTa: 'நிறை m, துகள்களின் எண்ணிக்கை N அல்லது STP-ல் பருமன் V-லிருந்து மோல்களைக் கணக்கிடுதல்.'
      },
      {
        nameEn: 'Molar Mass & Empirical Mass Ratio',
        nameTa: 'மூலக்கூறு மற்றும் எளிய விகித நிறை தொடர்பு',
        formula: 'n = \\\\frac{\\\\text{Molar Mass}}{\\\\text{Empirical Formula Mass}}',
        explanationEn: 'Integer factor n used to multiply empirical formula subscripts to obtain molecular formula.',
        explanationTa: 'எளிய விகித வாய்ப்பாட்டிலிருந்து மூலக்கூறு வாய்ப்பாட்டைப் பெற உதவும் முழு எண் காரணி n.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Calculate the empirical formula of an organic compound containing 40% Carbon, 6.6% Hydrogen, and 53.4% Oxygen by mass.',
        questionTa: '40% கார்பன், 6.6% ஹைட்ரஜன் மற்றும் 53.4% ஆக்சிஜன் கொண்டுள்ள கரிமச் சேர்மத்தின் எளிய விகித வாய்ப்பாட்டைக் காண்க.',
        solutionEn: 'Moles: C = 40/12 = 3.33; H = 6.6/1 = 6.6; O = 53.4/16 = 3.33. Divide by smallest (3.33): C = 1, H = 2, O = 1. Empirical formula = CH2O.',
        solutionTa: 'மோல்கள்: C = 40/12 = 3.33; H = 6.6/1 = 6.6; O = 53.4/16 = 3.33. குறைந்த மதிப்பால் வகுக்க: C = 1, H = 2, O = 1. எளிய விகித வாய்ப்பாடு = CH2O.',
        answer: 'CH2O'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'In redox balancing under acidic conditions, balance O atoms by adding H2O and then balance H atoms by adding H+ ions.',
        tipTa: 'அமில ஊடகத்தில் ஆக்சிஜனேற்ற-ஒடுக்க வினையைச் சமன் செய்யும்போது, O அணுக்களைச் சமன் செய்ய H2O-வையும், H அணுக்களைச் சமன் செய்ய H+ அயனிகளையும் சேர்க்க வேண்டும்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Board exam revision notes with mole stoichiometry and redox rules.',
        changeNoteTa: 'மோல் சமன்பாடு மற்றும் ஆக்சிஜனேற்ற விதிகள் அடங்கிய தேர்வு குறிப்புகள்.'
      }
    ]
  },

  c11_chem_u2: {
    id: 'note_c11_chem_u2',
    chapterId: 'c11_chem_u2',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Quantum Mechanical Model of Atom',
    titleTa: 'அணுவின் குவாண்டம் இயக்கவியல் மாதிரி',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'In-depth notes on de Broglie wavelength, Heisenberg principle, Schrodinger equation, and quantum numbers.',
    changeNoteTa: 'டி பிராக்லி அலைநீளம், ஹைசன்பெர்க் தத்துவம், ஷ்ரோடிங்கர் சமன்பாடு மற்றும் குவாண்டம் எண்கள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 14,
    bodyEn: `### 1. Dual Nature of Matter (de Broglie Relation)
* Louis de Broglie proposed that matter exhibits wave-particle duality just like radiation.
$$\\\\lambda = \\\\frac{h}{p} = \\\\frac{h}{mv}$$
Where $\\\\lambda$ is the de Broglie wavelength, $h$ is Planck's constant ($6.626 \\\\times 10^{-34}\\\\text{ J s}$), $m$ is mass, and $v$ is velocity.

### 2. Heisenberg’s Uncertainty Principle
* It is impossible to simultaneously determine both the exact position and the exact momentum (or velocity) of a microscopic particle with absolute precision.
$$\\\\Delta x \\\\cdot \\\\Delta p \\\\ge \\\\frac{h}{4\\\\pi} \\\\quad \\\\text{or} \\\\quad \\\\Delta x \\\\cdot m\\\\Delta v \\\\ge \\\\frac{h}{4\\\\pi}$$

### 3. Schrödinger Wave Equation and Wave Function
* Time-independent Schrödinger wave equation:
$$\\\\hat{H}\\\\psi = E\\\\psi$$
Where $\\\\hat{H}$ is the Hamiltonian operator, $\\\\psi$ is the wave function, and $E$ is the total energy.
* **Physical Significance of $\\\\psi^2$**: $\\\\psi$ has no physical meaning by itself, but $|\\\\psi|^2$ represents the **probability density** of finding an electron in a given volume around the nucleus.

### 4. Quantum Numbers
1. **Principal Quantum Number ($n = 1, 2, 3...$)**: Designates the main energy level (shell) and size of orbital.
2. **Azimuthal (Orbital Angular Momentum) Quantum Number ($l = 0 \\\\text{ to } n-1$)**: Defines the 3D shape of the orbital ($l=0: s$ spherical; $l=1: p$ dumbbell; $l=2: d$ double-dumbbell; $l=3: f$ complex).
3. **Magnetic Quantum Number ($m_l = -l \\\\text{ to } +l$)**: Determines spatial orientation of orbital in magnetic field ($2l + 1$ values).
4. **Spin Quantum Number ($m_s = +1/2, -1/2$)**: Represents the intrinsic clockwise or counter-clockwise electron spin.

### 5. Rules for Filling of Electrons
* **Aufbau Principle**: Electrons enter atomic orbitals in order of increasing energy ($(n+l)$ rule).
* **Pauli’s Exclusion Principle**: No two electrons in an atom can have the same set of all four quantum numbers. (An orbital holds max 2 electrons with opposite spins).
* **Hund’s Rule of Maximum Multiplicity**: Electron pairing in degenerate orbitals does not occur until each subshell is singly occupied with parallel spins.
* **Exceptional Stability**: Half-filled ($d^5$) and completely filled ($d^{10}$) subshells possess symmetrical distribution and high exchange energy (e.g., $Cr: [Ar]3d^5 4s^1$, $Cu: [Ar]3d^{10} 4s^1$).`,
    bodyTa: `### 1. பருப்பொருளின் ஈரியல்பு (டி பிராக்லி தொடர்பு)
* கதிர்வீச்சைப் போலவே எலக்ட்ரான் போன்ற நுண்ணிய துகள்களும் அலை மற்றும் துகள் ஆகிய இரு பண்புகளையும் பெற்றுள்ளன.
$$\\\\lambda = \\\\frac{h}{mv}$$

### 2. ஹைசன்பெர்க்கின் நிச்சயமற்ற தன்மைக் கொள்கை
* ஒரு நுண்ணிய துகளின் நிலை மற்றும் உந்தம் ஆகிய இரண்டையும் ஒரே நேரத்தில் மிகத் துல்லியமாகக் கணக்கிட இயலாது.
$$\\\\Delta x \\\\cdot \\\\Delta p \\\\ge \\\\frac{h}{4\\\\pi}$$

### 3. குவாண்டம் எண்கள் (Quantum Numbers)
1. **முதன்மை குவாண்டம் எண் ($n$)**: அணுவின் முதன்மை ஆற்றல் மட்டம் மற்றும் ஆர்பிட்டாலின் அளவைக் குறிக்கிறது.
2. **கோண உந்த குவாண்டம் எண் ($l$)**: ஆர்பிட்டாலின் வடிவத்தை நிர்ணயிக்கிறது ($s$-கோள வடிவம், $p$-டம்பெல் வடிவம், $d$-இரட்டை டம்பெல் வடிவம்).
3. **காந்த குவாண்டம் எண் ($m$)**: வெளியில் ஆர்பிட்டால்களின் திசையமைப்பைக் குறிக்கிறது ($2l + 1$ அமைப்புகள்).
4. **தற்சுழற்சி குவாண்டம் எண் ($s$)**: எலக்ட்ரானின் தற்சுழற்சியைக் குறிக்கிறது ($+1/2, -1/2$).

### 4. எலக்ட்ரான் நிரப்பும் விதிகள்
* **ஆஃபா தத்துவம்**: குறைந்த ஆற்றல் கொண்ட ஆர்பிட்டால்கள் முதலில் எலக்ட்ரான்களால் நிரப்பப்படுகின்றன ($(n+l)$ விதி).
* **பவுலி தவிர்க்கைத் தத்துவம்**: எந்த இரு எலக்ட்ரான்களும் ஒரே மாதிரியான நான்கு குவாண்டம் எண்களைப் பெற்றிருக்க முடியாது.
* **ஹுண்ட் விதி**: சம ஆற்றல் கொண்ட ஆர்பிட்டால்களில் தலா ஒரு எலக்ட்ரான் நிரம்பிய பிறகே எலக்ட்ரான் இணையாகத் தொடங்கும்.`,
    keyFormulas: [
      {
        nameEn: 'de Broglie Wavelength',
        nameTa: 'டி பிராக்லி அலைநீளம்',
        formula: '\\\\lambda = \\\\frac{h}{mv} = \\\\frac{h}{\\\\sqrt{2mE_k}}',
        explanationEn: 'Relates particle momentum to associated matter wavelength.',
        explanationTa: 'துகளின் உந்தம் மற்றும் அதன் பருப்பொருள் அலைநீளத்திற்கான தொடர்பு.'
      },
      {
        nameEn: 'Heisenberg Uncertainty Relation',
        nameTa: 'ஹைசன்பெர்க் நிச்சயமற்ற தொடர்பு',
        formula: '\\\\Delta x \\\\cdot \\\\Delta p \\\\ge \\\\frac{h}{4\\\\pi}',
        explanationEn: 'Minimum uncertainty product of position and linear momentum.',
        explanationTa: 'நிலை மற்றும் நேர்கோட்டு உந்தத்தின் நிச்சயமற்ற தன்மைகளின் பெருக்கற்பலன்.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Calculate the de Broglie wavelength of an electron of mass 9.11 x 10^-31 kg moving with a velocity of 6.0 x 10^7 m/s.',
        questionTa: '9.11 x 10^-31 kg நிறையும் 6.0 x 10^7 m/s திசைவேகமும் கொண்ட எலக்ட்ரானின் டி பிராக்லி அலைநீளத்தைக் காண்க.',
        solutionEn: 'lambda = h / (m * v) = (6.626 x 10^-34) / (9.11 x 10^-31 * 6.0 x 10^7) = 1.21 x 10^-11 m = 0.121 Angstrom.',
        solutionTa: 'lambda = h / (m * v) = (6.626 x 10^-34) / (9.11 x 10^-31 * 6.0 x 10^7) = 1.21 x 10^-11 m = 0.0121 nm.',
        answer: '1.21 x 10^-11 m'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'For Cr (Z=24), electronic configuration is [Ar] 3d5 4s1 (not 3d4 4s2) due to extra stability of half-filled d-subshell.',
        tipTa: 'குரோமியம் (Z=24) அணுவில் சரிபாதி நிரம்பிய d5 ஆர்பிட்டாலின் கூடுதல் நிலைப்புத்தன்மை காரணமாக எலக்ட்ரான் அமைப்பு [Ar] 3d5 4s1 ஆகும்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Atomic structure, quantum mechanical equations, and electron configuration rules.',
        changeNoteTa: 'அணு அமைப்பு, குவாண்டம் எண்கள் மற்றும் எலக்ட்ரான் அமைப்புக் கொள்கைகள்.'
      }
    ]
  },

  c11_chem_u3: {
    id: 'note_c11_chem_u3',
    chapterId: 'c11_chem_u3',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Periodic Classification of Elements',
    titleTa: 'தனிமங்களின் ஆவர்த்தன வகைப்பாடு',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Periodic trends: atomic radii, ionization enthalpy anomalies, electron gain enthalpy, and electronegativity.',
    changeNoteTa: 'ஆவர்த்தனப் பண்புகள்: அணு ஆரம், அயனியாக்கும் ஆற்றல் மாறுபாடுகள், எலக்ட்ரான் நாட்ட என்தால்பி மற்றும் எலக்ட்ரான் கவர் தன்மை.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 12,
    bodyEn: `### 1. Modern Periodic Law and Long Form of Periodic Table
* **Modern Periodic Law (Henry Moseley)**: "The physical and chemical properties of the elements are periodic functions of their **atomic numbers**."
* Arranged in 7 horizontal **periods** and 18 vertical **groups**, split into 4 blocks: $s, p, d, f$.

### 2. Periodic Trends in Atomic Properties
1. **Atomic and Ionic Radii**:
   * *Across a period (Left to Right)*: Decreases due to increasing effective nuclear charge ($Z_{\\\\text{eff}}$) pulling electrons closer.
   * *Down a group (Top to Bottom)*: Increases due to addition of new electronic energy shells.
   * *Cationic Radius*: Always smaller than parent atom ($Na^+ < Na$).
   * *Anionic Radius*: Always larger than parent atom ($Cl^- > Cl$).
   * *Isoelectronic species*: Greater positive charge = smaller radius ($Al^{3+} < Mg^{2+} < Na^+ < F^- < O^{2-} < N^{3-}$).

2. **Ionization Enthalpy ($IE_1, IE_2$)**:
   * Minimum energy required to remove the most loosely bound valence electron from an isolated gaseous neutral atom.
   * *Trend*: Generally increases across a period; decreases down a group.
   * *Anomalies*:
     * $IE_1(Be) > IE_1(B)$: $Be$ has completely filled $2s^2$, while $B$ has $2s^2 2p^1$ (easier to remove single $p$-electron).
     * $IE_1(N) > IE_1(O)$: $N$ has stable half-filled $2p^3$, whereas $O$ has $2p^4$ where electron-electron repulsion facilitates ionization.

3. **Electron Gain Enthalpy ($\\\\Delta_{eg}H$)**:
   * Enthalpy change when an electron is added to an isolated gaseous atom to form a univalent negative ion.
   * *Anomaly*: $\\\\Delta_{eg}H$ of **Chlorine** is more negative than that of **Fluorine** ($-349\\\\text{ kJ/mol}$ vs $-328\\\\text{ kJ/mol}$) because $F$ has a compact $2p$ shell where incoming electron suffers high inter-electronic repulsion.

4. **Electronegativity (Pauling Scale)**:
   * The relative tendency of an atom in a bonded molecule to attract the shared pair of electrons towards itself.
   * Fluorine is the most electronegative element ($4.0$).
   * *Diagonal Relationship*: Similarities between second period elements and diagonally opposite third period elements ($Li \\\\sim Mg, Be \\\\sim Al, B \\\\sim Si$) due to similar ionic potential (charge/radius ratio).`,
    bodyTa: `### 1. நவீன ஆவர்த்தன விதி
* "தனிமங்களின் இயற்பியல் மற்றும் வேதியியல் பண்புகள் அவற்றின் **அணு எண்களின்** ஆவர்த்தன சார்பாக அமைகின்றன." (ஹென்றி மோஸ்லே).

### 2. ஆவர்த்தனப் பண்புகளின் போக்குகள்
1. **அணு மற்றும் அயனி ஆரம்**:
   * ஆவர்த்தன வரிசையில் இடமிருந்து வலமாகச் செல்லும்போது பயனுறு அணுக்கரு மின்சுமை ($Z_{\\\\text{eff}}$) அதிகரிப்பதால் அணு ஆரம் குறைகிறது.
   * தொகுதியில் மேலிருந்து கீழாகச் செல்லும்போது புதிய கூடுகள் இணைவதால் அணு ஆரம் அதிகரிக்கிறது.
   * நேர்மின் அயனி ஆரம் அணுவை விடக் குறைவு; எதிர்மின் அயனி ஆரம் அணுவை விட அதிகம்.
2. **அயனியாக்கும் என்தால்பி**:
   * தனித்த வாயு நிலையில் உள்ள நடுநிலை அணுவின் வெளிக்கூட்டிலிருந்து ஒரு எலக்ட்ரானை நீக்கத் தேவைப்படும் குறைந்தபட்ச ஆற்றல்.
   * *விதிவிலக்குகள்*: $IE(Be) > IE(B)$ (முழுமையாக நிரம்பிய $2s^2$ ஆர்பிட்டால்); $IE(N) > IE(O)$ (சரிபாதி நிரம்பிய $2p^3$ ஆர்பிட்டால் நிலைப்புத்தன்மை).
3. **எலக்ட்ரான் நாட்ட என்தால்பி**:
   * குளோரினின் எலக்ட்ரான் நாட்ட மதிப்பு ஃப்ளூரினை விட அதிகம். சிறிய $2p$ ஆர்பிட்டாலில் உள்ள எலக்ட்ரான்களுக்கிடையேயான விலக்கு விசையே இதற்குக் காரணம்.
4. **மூலைவிட்டத் தொடர்பு**:
   * $Li-Mg, Be-Al, B-Si$ ஆகிய தனிமங்கள் ஒத்த மின்னூட்ட/ஆர விகிதம் பெற்றுள்ளதால் ஒரே மாதிரியான வேதிப்பண்புகளைக் கொண்டுள்ளன.`,
    keyFormulas: [
      {
        nameEn: 'Effective Nuclear Charge (Slater Rule)',
        nameTa: 'பயனுறு அணுக்கரு மின்சுமை (ஸ்லேட்டர் விதி)',
        formula: 'Z_{\\\\text{eff}} = Z - \\\\sigma',
        explanationEn: 'Z is the actual atomic number and sigma is the shielding constant caused by inner core electrons.',
        explanationTa: 'Z என்பது அணு எண், சிக்மா என்பது உள்கூட்டு எலக்ட்ரான்களின் திரைமறைப்புக் மாறிலி.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Arrange the following isoelectronic ions in order of increasing ionic radius: N3-, O2-, F-, Na+, Mg2+, Al3+.',
        questionTa: 'ஒத்த எலக்ட்ரான் எண்ணிக்கை கொண்ட N3-, O2-, F-, Na+, Mg2+, Al3+ அயனிகளை அவற்றின் அயனி ஆரம் அதிகரிக்கும் வரிசையில் எழுதுக.',
        solutionEn: 'With same number of electrons (10), higher nuclear charge pulls shells closer: Al3+ < Mg2+ < Na+ < F- < O2- < N3-.',
        solutionTa: '10 எலக்ட்ரான்களைக் கொண்டுள்ள போது, அணுக்கருவின் நேர்மின்சுமை அதிகரிக்கும் போது ஆரம் குறையும்: Al3+ < Mg2+ < Na+ < F- < O2- < N3-.',
        answer: 'Al3+ < Mg2+ < Na+ < F- < O2- < N3-'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'Chlorine has the highest negative electron gain enthalpy in the entire periodic table, even exceeding fluorine!',
        tipTa: 'முழு ஆவர்த்தன அட்டவணையிலேயே அதிக எலக்ட்ரான் நாட்ட என்தால்பி மதிப்பைக் கொண்டுள்ள தனிமம் குளோரின் ஆகும்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Periodic trends, shielding constants, and diagonal relationship summary.',
        changeNoteTa: 'ஆவர்த்தன மாற்றங்கள், திரைமறைப்பு மாறிலி மற்றும் மூலைவிட்டத் தொடர்பு விளக்கம்.'
      }
    ]
  },

  c11_chem_u4: {
    id: 'note_c11_chem_u4',
    chapterId: 'c11_chem_u4',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Hydrogen',
    titleTa: 'ஹைட்ரஜன்',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Detailed study of isotopes, ortho/para hydrogen, heavy water, and hydrogen peroxide.',
    changeNoteTa: 'ஐசோடோப்புகள், ஆர்த்தோ/பாரா ஹைட்ரஜன், கனநீர் மற்றும் ஹைட்ரஜன் பெராக்சைடு தயாரிப்பு மற்றும் பண்புகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 11,
    bodyEn: `### 1. Position of Hydrogen & Isotopes
* Hydrogen has $1s^1$ configuration; resembles alkali metals (forms $H^+$) and halogens (needs $1\\\\text{ e}^-$ for stable duplex, forms $H^-$).
* Three Isotopes:
  1. **Protium ($^1_1H$)**: Most abundant ($99.985\\\\%$), no neutrons.
  2. **Deuterium ($^2_1H$ or $D$)**: Heavy hydrogen, 1 neutron.
  3. **Tritium ($^3_1H$ or $T$)**: Radioactive isotope ($\\beta$-emitter, half-life $t_{1/2} = 12.33\\\\text{ years}$), 2 neutrons.

### 2. Ortho and Para Hydrogen
* Molecular hydrogen ($H_2$) exists in two nuclear spin isomers:
  * **Ortho Hydrogen**: Nuclear spins of both hydrogen nuclei are in the **same direction** (parallel, total spin $I = 1$). Stable at high temperatures ($75\\\\%$ at room temperature).
  * **Para Hydrogen**: Nuclear spins are in **opposite directions** (anti-parallel, total spin $I = 0$). Stable at absolute zero ($100\\\\%$ at $0\\\\text{ K}$).

### 3. Hydrides Classification
* **Ionic / Saline Hydrides**: Formed by electropositive $s$-block metals ($NaH, CaH_2$). React violently with water to liberate $H_2$.
* **Covalent / Molecular Hydrides**: Formed by $p$-block elements ($CH_4, NH_3, H_2O, HF$). Divided into electron-deficient ($B_2H_6$), electron-precise ($CH_4$), and electron-rich ($NH_3, H_2O$).
* **Metallic / Interstitial Hydrides**: Formed by $d$- and $f$-block elements ($TiH_{1.7}, ZrH_{1.9}$). Often non-stoichiometric; exhibit hydrogen storage capability.

### 4. Heavy Water ($D_2O$) & Hydrogen Peroxide ($H_2O_2$)
* **Heavy Water**: Prepared by exhaustive electrolysis of water containing $NaOH$. Used as moderator and coolant in nuclear fission reactors.
* **Hydrogen Peroxide ($H_2O_2$)**:
  * *Preparation*: Auto-oxidation of 2-ethylanthraquinol.
  * *Structure*: Non-planar open-book structure.
  * *Properties*: Acts as both oxidizing agent and reducing agent in acidic and alkaline media.
  * *Volume Strength*: $10\\\\text{ volume } H_2O_2$ means $1\\\\text{ mL}$ of solution produces $10\\\\text{ mL}$ of $O_2$ gas at STP.`,
    bodyTa: `### 1. ஹைட்ரஜனின் ஐசோடோப்புகள்
* **புரோட்டியம் ($^1H$)**: நியூட்ரான் அற்றது, மிக அதிக அளவில் காணப்படுகிறது ($99.98%$)
* **டியூட்டீரியம் ($^2H$ அல்லது $D$)**: கன ஹைட்ரஜன், 1 புரோட்டான் மற்றும் 1 நியூட்ரான் கொண்டது.
* **ட்ரிட்டியம் ($^3H$ அல்லது $T$)**: கதிரியக்க ஐசோடோப் ($\\\\beta$-கதிர்வீச்சு, அரைவாழ்வுக் காலம் 12.33 ஆண்டுகள்).

### 2. ஆர்த்தோ மற்றும் பாரா ஹைட்ரஜன்
* **ஆர்த்தோ ஹைட்ரஜன்**: இரு புரோட்டான்களின் அணுக்கரு தற்சுழற்சி **ஒரே திசையில்** அமையும் ($I = 1$). அறை வெப்பநிலையில் 75% நிலைப்புத்தன்மை கொண்டது.
* **பாரா ஹைட்ரஜன்**: அணுக்கரு தற்சுழற்சி **எதிர் திசைகளில்** அமையும் ($I = 0$). மிகக் குறைந்த வெப்பநிலையில் நிலைப்புத்தன்மை அதிகம்.

### 3. ஹைட்ரைடுகள் வகைப்பாடு
1. **அயனி ஹைட்ரைடுகள்**: $s$-தொகுதி உலோகங்கள் ($NaH, CaH_2$).
2. **சகப்பிணைப்பு ஹைட்ரைடுகள்**: $p$-தொகுதி சேர்மங்கள் ($CH_4, NH_3, H_2O$).
3. **உலோக / இடைச்செருகல் ஹைட்ரைடுகள்**: $d$ மற்றும் $f$ தொகுதி உலோகங்கள்.

### 4. கனநீர் ($D_2O$) & ஹைட்ரஜன் பெராக்சைடு ($H_2O_2$)
* கனநீர் அணு உலைகளில் நியூட்ரான்களின் வேகத்தைக் குறைக்கும் **மதிப்பீட்டாளராக (Moderator)** பயன்படுகிறது.
* ஹைட்ரஜன் பெராக்சைடு திறந்த புத்தக அமைப்பைக் (Open book structure) கொண்டது; ஆக்சிஜனேற்றி மற்றும் ஒடுக்கியாக இரு ஊடகங்களிலும் செயல்படுகிறது.`,
    keyFormulas: [
      {
        nameEn: 'Volume Strength of H2O2',
        nameTa: 'H2O2-ன் கனஅளவு செறிவு',
        formula: '\\\\text{Volume Strength} = 11.2 \\\\times \\\\text{Molarity} = 5.6 \\\\times \\\\text{Normality}',
        explanationEn: 'Relates molarity or normality of H2O2 solution to volume of O2 released at STP.',
        explanationTa: 'ஹைட்ரஜன் பெராக்சைடின் மோலாரிட்டி மற்றும் திட்ட வெப்ப அழுத்தத்தில் வெளியேறும் O2 பருமன் தொடர்பு.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Calculate the strength of a 20 volume solution of hydrogen peroxide in terms of molarity.',
        questionTa: '20 கனஅளவு செறிவு கொண்ட ஹைட்ரஜன் பெராக்சைடு கரைசலின் மோலாரிட்டியைக் காண்க.',
        solutionEn: 'Molarity = Volume Strength / 11.2 = 20 / 11.2 = 1.785 M.',
        solutionTa: 'மோலாரிட்டி = கனஅளவு செறிவு / 11.2 = 20 / 11.2 = 1.785 M.',
        answer: '1.785 M'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'Tritium is the only radioactive isotope of hydrogen with a half-life of 12.33 years, emitting low-energy beta particles.',
        tipTa: 'ஹைட்ரஜனின் கதிரியக்க ஐசோடோப் ட்ரிட்டியம் மட்டுமே; இது 12.33 ஆண்டுகள் அரைவாழ்வுக் காலத்துடன் குறைந்த ஆற்றல் கொண்ட பீட்டா துகள்களை உமிழ்கிறது.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Nuclear spin isomers of hydrogen and volume strength calculations.',
        changeNoteTa: 'ஆர்த்தோ-பாரா ஹைட்ரஜன் பண்புகள் மற்றும் H2O2 கனஅளவு செறிவு கணக்கீடுகள்.'
      }
    ]
  },

  c11_chem_u5: {
    id: 'note_c11_chem_u5',
    chapterId: 'c11_chem_u5',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Alkali and Alkaline Earth Metals',
    titleTa: 'கார மற்றும் காரமண் உலோகங்கள்',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Group 1 and Group 2 comparisons, flame test colors, anomalous Li/Be behavior, and Plaster of Paris.',
    changeNoteTa: 'தொகுதி 1 மற்றும் தொகுதி 2 ஒப்பீடு, சுடர் சோதனைகள், லித்தியம்-பெரிலியம் முரண்பாடுகள் மற்றும் பாரிஸ் சாந்து.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 12,
    bodyEn: `### 1. Group 1: Alkali Metals ($Li, Na, K, Rb, Cs$)
* Valence configuration: $ns^1$. Highly reactive, soft metals kept under kerosene ($Na, K$) or liquid paraffin ($Li$).
* **Flame Colors**:
  * $Li$: Crimson Red
  * $Na$: Golden Yellow
  * $K$: Lilac / Pale Violet
  * $Rb$: Reddish Violet
  * $Cs$: Blue
* **Solutions in Liquid Ammonia**: Dissolve to give deep blue conducting solutions due to **ammoniated electrons** ($[e(NH_3)_y]^-$). On standing or higher concentration ($>3\\\\text{ M}$), turns bronze-colored and diamagnetic.

### 2. Group 2: Alkaline Earth Metals ($Be, Mg, Ca, Sr, Ba$)
* Valence configuration: $ns^2$. Harder with higher melting points than alkali metals due to stronger metallic bonding.
* **Flame Colors**:
  * $Ca$: Brick Red
  * $Sr$: Crimson Red
  * $Ba$: Apple Green
  * ($Be$ and $Mg$ do not impart flame color due to high ionization enthalpy).

### 3. Anomalous Properties & Diagonal Relationship
* **Lithium vs other alkali metals**: $Li$ is harder, forms only normal oxide ($Li_2O$), directly combines with $N_2$ to form $Li_3N$, and its carbonate decomposes upon heating ($Li_2CO_3 \\\\rightarrow Li_2O + CO_2$).
* **Beryllium vs other alkaline earth metals**: $BeO$ and $Be(OH)_2$ are **amphoteric**; forms covalent halides ($BeCl_2$ has polymeric bridge structure).
* **Diagonal Relationships**:
  * $Li \\\\sim Mg$: Both form nitrides ($Li_3N, Mg_3N_2$), both carbonates thermally decompose, and both chlorides are deliquescent.
  * $Be \\\\sim Al$: Both form protective oxide coatings, halides are covalent Lewis acids, and hydroxides dissolve in excess alkali.

### 4. Important Industrial Compounds of Calcium
1. **Quicklime ($CaO$)**: Produced by thermal decomposition of limestone at $1070\\\\text{ K}$.
2. **Slaked Lime ($Ca(OH)_2$)**: Formed by slaking quicklime with water; suspension in water is called milk of lime.
3. **Plaster of Paris ($CaSO_4 \\\\cdot \\\\frac{1}{2}H_2O$)**:
   $$2(CaSO_4 \\\\cdot 2H_2O) \\\\xrightarrow{393\\\\text{ K}} 2(CaSO_4) \\\\cdot H_2O + 3H_2O$$
   Above $393\\\\text{ K}$, loses all water to become **dead burnt plaster** ($CaSO_4$).`,
    bodyTa: `### 1. தொகுதி 1 கார உலோகங்கள்
* வெளிக்கூட்டு எலக்ட்ரான் அமைப்பு: $ns^1$.
* **சுடர் நிறங்கள்**:
  * லித்தியம் ($Li$): கருஞ்சிவப்பு (Crimson Red)
  * சோடியம் ($Na$): பொன் மஞ்சள் (Golden Yellow)
  * பொட்டாசியம் ($K$): இளஞ்சிவப்பு நீலம் (Lilac)
* **திரவ அம்மோனியாவில் கரைசல்**: எலக்ட்ரான்கள் அம்மோனியேற்றம் அடைவதால் ஆழ்ந்த நீல நிறக் கரைசலைத் தருகிறது; இது பாரா காந்தத் தன்மை மற்றும் சிறந்த மின் கடத்தும் திறன் கொண்டது.

### 2. தொகுதி 2 காரமண் உலோகங்கள்
* வெளிக்கூட்டு எலக்ட்ரான் அமைப்பு: $ns^2$.
* **சுடர் நிறங்கள்**: கால்சியம் ($Ca$) செங்கல் சிவப்பு, ஸ்ட்ரான்சியம் ($Sr$) கருஞ்சிவப்பு, பேரியம் ($Ba$) ஆப்பிள் பச்சை ($Be, Mg$ சுடர் நிறம் தராது).

### 3. மூலைவிட்டத் தொடர்பு ($Li-Mg, Be-Al$)
* $Li$ மற்றும் $Mg$ இரண்டும் நைட்ரஜனுடன் நேரடியாக இணைந்து நைட்ரைடுகளை உருவாக்குகின்றன ($Li_3N, Mg_3N_2$).
* $Be$ மற்றும் $Al$ ஆகியவற்றின் ஆக்சைடுகள் மற்றும் ஹைட்ராக்சைடுகள் **ஈரியல்புத் தன்மை** (Amphoteric) கொண்டவை.

### 4. பாரிஸ் சாந்து (Plaster of Paris)
* ஜிப்சத்தை $393\\\\text{ K}$ வெப்பநிலைக்கு வெப்பப்படுத்தும்போது பாரிஸ் சாந்து கிடைக்கிறது:
$$CaSO_4 \\\\cdot 2H_2O \\\\xrightarrow{393\\\\text{ K}} CaSO_4 \\\\cdot \\\\frac{1}{2}H_2O + \\\\frac{3}{2}H_2O$$
* $393\\\\text{ K}$-க்கு மேல் வெப்பப்படுத்தினால் முழு நீரையும் இழந்து **செத்த சாந்து (Dead Burnt Plaster)** ஆக மாறுகிறது.`,
    keyFormulas: [
      {
        nameEn: 'Plaster of Paris Formation',
        nameTa: 'பாரிஸ் சாந்து உருவாதல்',
        formula: 'CaSO_4 \\\\cdot 2H_2O \\\\xrightarrow{393\\\\text{ K}} CaSO_4 \\\\cdot \\\\frac{1}{2}H_2O + \\\\frac{3}{2}H_2O',
        explanationEn: 'Partial dehydration of gypsum at 393 K to hemihydrate.',
        explanationTa: 'ஜிப்சத்தை 393 K வெப்பநிலைக்கு சூடுபடுத்தி அரைகுறை நீர்நீக்கம் செய்தல்.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Why do beryllium and magnesium not impart any color to the Bunsen flame?',
        questionTa: 'பெரிலியம் மற்றும் மெக்னீசியம் பன்சன் சுடருக்கு எந்த நிறத்தையும் தருவதில்லை ஏன்?',
        solutionEn: 'Due to very small atomic size and high ionization enthalpies, the valence electrons of Be and Mg cannot be excited by flame energy.',
        solutionTa: 'அவற்றின் மிகச்சிறிய உருவளவு மற்றும் அதிக அயனியாக்கும் ஆற்றல் காரணமாக பன்சன் சுடரால் அவற்றின் எலக்ட்ரான்களைக் கிளர்வுறச் செய்ய இயலாது.',
        answer: 'High Ionization Enthalpy'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'Above 393 K, Plaster of Paris loses all water of crystallization and forms anhydrous calcium sulphate, known as dead burnt plaster.',
        tipTa: '393 K-க்கு மேல் வெப்பப்படுத்தும் போது பாரிஸ் சாந்து படிக நீரை முழுமையாக இழந்து அமைதியற்ற செத்த சாந்தாக மாறுகிறது.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Alkali and alkaline earth metals summary with flame tests and calcium compounds.',
        changeNoteTa: 'கார மற்றும் காரமண் உலோகங்கள் சுடர் சோதனை மற்றும் கால்சியம் சேர்மங்கள்.'
      }
    ]
  },

  c11_chem_u6: {
    id: 'note_c11_chem_u6',
    chapterId: 'c11_chem_u6',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Gaseous State',
    titleTa: 'வாயு நிலைமை',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Gas laws, ideal gas equation, van der Waals equation, critical constants, and liquefaction methods.',
    changeNoteTa: 'வாயு விதிகள், நல்லியல்பு வாயு சமன்பாடு, வாண்டர்வால்ஸ் சமன்பாடு, நிலைமாறு மாறிலிகள் மற்றும் வாயுக்களை திரவமாக்கல்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 13,
    bodyEn: `### 1. The Fundamental Gas Laws
1. **Boyle’s Law**: At constant temperature, $P \\\\propto \\\\frac{1}{V} \\\\implies P_1V_1 = P_2V_2$.
2. **Charles’s Law**: At constant pressure, $V \\\\propto T \\\\implies \\\\frac{V_1}{T_1} = \\\\frac{V_2}{T_2}$.
3. **Gay-Lussac’s Law**: At constant volume, $P \\\\propto T \\\\implies \\\\frac{P_1}{T_1} = \\\\frac{P_2}{T_2}$.
4. **Avogadro’s Law**: At constant $T$ and $P$, $V \\\\propto n$.
* **Ideal Gas Equation**: Combining all four laws gives:
$$PV = nRT$$
Where $R = 8.314\\\\text{ J K}^{-1}\\\\text{ mol}^{-1} = 0.0821\\\\text{ L atm K}^{-1}\\\\text{ mol}^{-1}$.

### 2. Dalton’s Law & Graham’s Law of Diffusion
* **Dalton’s Law of Partial Pressures**: Total pressure of a non-reacting gas mixture equals the sum of individual partial pressures:
$$P_{\\\\text{total}} = p_1 + p_2 + p_3 + ... \\\\quad \\\\text{and} \\\\quad p_i = x_i \\\\cdot P_{\\\\text{total}}$$
* **Graham’s Law of Diffusion/Effusion**: Under identical $T$ and $P$, rate of diffusion ($r$) is inversely proportional to square root of molar mass ($M$):
$$\\\\frac{r_1}{r_2} = \\\\sqrt{\\\\frac{M_2}{M_1}} = \\\\sqrt{\\\\frac{d_2}{d_1}}$$

### 3. Deviation from Ideal Behavior: van der Waals Equation
* Real gases deviate from ideal behavior at **high pressure** and **low temperature** because:
  1. Intermolecular forces of attraction between gas molecules are non-negligible.
  2. The actual volume occupied by gas molecules cannot be neglected relative to container volume.
* **van der Waals Equation for $n$ moles**:
$$\\\\left( P + \\\\frac{an^2}{V^2} \\\\right)(V - nb) = nRT$$
  * $a$ = correction for intermolecular attraction (unit: $\\\\text{atm L}^2\\\\text{ mol}^{-2}$).
  * $b$ = excluded volume or co-volume, $b = 4 \\\\times (\\\\text{volume of molecules})$.
* **Compressibility Factor ($Z$)**: $Z = \\\\frac{PV}{nRT}$. For ideal gas $Z=1$; if $Z < 1$, attractive forces dominate; if $Z > 1$, repulsive forces dominate.

### 4. Critical Constants & Liquefaction
* **Critical Temperature ($T_c$)**: Temperature above which a gas cannot be liquefied, no matter how much pressure is applied: $T_c = \\\\frac{8a}{27Rb}$.
* **Critical Pressure ($P_c$)**: Minimum pressure required to liquefy a gas at its critical temperature: $P_c = \\\\frac{a}{27b^2}$.
* **Critical Volume ($V_c$)**: Volume occupied by one mole of gas at $T_c$ and $P_c$: $V_c = 3b$.
* Critical compressibility factor: $Z_c = \\\\frac{P_c V_c}{R T_c} = \\\\frac{3}{8} = 0.375$.`,
    bodyTa: `### 1. அடிப்படை வாயு விதிகள்
1. **பாயில் விதி**: மாறா வெப்பநிலையில், $P \\\\propto \\\\frac{1}{V} \\\\implies P_1V_1 = P_2V_2$.
2. **சார்லஸ் விதி**: மாறா அழுத்தத்தில், $V \\\\propto T \\\\implies \\\\frac{V_1}{T_1} = \\\\frac{V_2}{T_2}$.
3. **கே-லூசாக் விதி**: மாறா பருமனில், $P \\\\propto T$.
4. **நல்லியல்பு வாயு சமன்பாடு**: $PV = nRT$ ($R = 8.314\\\\text{ J K}^{-1}\\\\text{ mol}^{-1}$).

### 2. டால்டனின் பகுதி அழுத்த விதி & கிரகாமின் விரவல் விதி
* **டால்டன் விதி**: வினைபுரியாத வாயுக்கலவையின் மொத்த அழுத்தம் அதன் பகுதி அழுத்தங்களின் கூடுதலுக்குச் சமம் ($p_i = x_i \\\\cdot P_{\\\\text{total}}$).
* **கிரஹாமின் விரவல் விதி**: விரவல் வீதம் மூலக்கூறு நிறையின் வர்க்க மூலத்திற்கு எதிர்த்தகவில் அமையும்:
$$\\\\frac{r_1}{r_2} = \\\\sqrt{\\\\frac{M_2}{M_1}}$$

### 3. வாண்டர்வால்ஸ் சமன்பாடு (இயல்பு வாயுக்கள்)
* அதிக அழுத்தம் மற்றும் குறைந்த வெப்பநிலையில் இயல்பு வாயுக்கள் நல்லியல்பு நடத்தையிலிருந்து விலகலடைகின்றன.
$$\\\\left( P + \\\\frac{an^2}{V^2} \\\\right)(V - nb) = nRT$$
* $a$: மூலக்கூறுகளுக்கிடையேயான கவர்ச்சி விசைக்கான திருத்தம்.
* $b$: மூலக்கூறுகளின் விலக்கப்பட்ட பருமன் ($b = 4V_m$).
* அமுக்குத்திறன் காரணி: $Z = \\\\frac{PV}{nRT}$.

### 4. நிலைமாறு மாறிலிகள் (Critical Constants)
* **நிலைமாறு வெப்பநிலை ($T_c$)**: எவ்வளவுதான் அழுத்தம் கொடுத்தாலும் வாயுவை திரவமாக்க முடியாத வெப்பநிலை ($T_c = \\\\frac{8a}{27Rb}$).
* **நிலைமாறு அழுத்தம் ($P_c$)**: $P_c = \\\\frac{a}{27b^2}$.
* **நிலைமாறு பருமன் ($V_c$)**: $V_c = 3b$.`,
    keyFormulas: [
      {
        nameEn: 'van der Waals Equation',
        nameTa: 'வாண்டர்வால்ஸ் சமன்பாடு',
        formula: '\\\\left(P + \\\\frac{an^2}{V^2}\\\\right)(V - nb) = nRT',
        explanationEn: 'Modifies ideal gas equation for intermolecular attraction (a) and molecular size (b).',
        explanationTa: 'கவர்ச்சி விசை மற்றும் மூலக்கூறு பருமனைத் திருத்தியமைத்த இயல்பு வாயுச் சமன்பாடு.'
      },
      {
        nameEn: 'Critical Constants Relations',
        nameTa: 'நிலைமாறு மாறிலிகள் தொடர்புகள்',
        formula: 'T_c = \\\\frac{8a}{27Rb}, \\\\quad P_c = \\\\frac{a}{27b^2}, \\\\quad V_c = 3b',
        explanationEn: 'Calculates critical temperature, critical pressure, and critical volume from van der Waals constants.',
        explanationTa: 'வாண்டர்வால்ஸ் மாறிலிகளிலிருந்து நிலைமாறு மாறிலிகளைக் கணக்கிடும் வாய்ப்பாடுகள்.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'Under identical conditions of temperature and pressure, which gas diffuses faster: CH4 or SO2, and by how many times?',
        questionTa: 'ஒத்த வெப்பநிலை மற்றும் அழுத்தத்தில் CH4 மற்றும் SO2 வாயுக்களில் எது வேகமாக விரவும், எத்தனை மடங்கு?',
        solutionEn: 'r(CH4) / r(SO2) = sqrt(M(SO2) / M(CH4)) = sqrt(64 / 16) = sqrt(4) = 2. Methane diffuses twice as fast as sulfur dioxide.',
        solutionTa: 'r(CH4) / r(SO2) = sqrt(64 / 16) = 2. மீத்தேன் சல்பர் டை ஆக்சைடை விட 2 மடங்கு வேகமாக விரவும்.',
        answer: 'CH4 diffuses 2 times faster'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'For an ideal gas, the compressibility factor Z = 1 at all temperatures and pressures. When Z < 1, gases are more compressible than ideal gases.',
        tipTa: 'நல்லியல்பு வாயுக்களுக்கு அனைத்து நிலைகளிலும் Z = 1 ஆகும். Z < 1 ஆக இருக்கும்போது கவர்ச்சி விசை ஆதிக்கம் செலுத்துவதால் வாயுவை எளிதில் அமுக்க முடியும்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Kinetic theory of gases, van der Waals equation, and critical constants.',
        changeNoteTa: 'இயக்கவியல் கொள்கை, வாண்டர்வால்ஸ் சமன்பாடு மற்றும் நிலைமாறு மாறிலிகள்.'
      }
    ]
  },

  c11_chem_u7: {
    id: 'note_c11_chem_u7',
    chapterId: 'c11_chem_u7',
    classLevel: 11,
    subjectId: 'c11_chemistry',
    titleEn: 'Thermodynamics',
    titleTa: 'வெப்ப இயக்கவியல்',
    publishedAt: '22 Sep 2026',
    publishedAtTa: '22 செப் 2026',
    updatedAt: '22 Sep 2026',
    updatedAtTa: '22 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. K. Ravichandran, M.Sc., Ph.D.',
    reviewedByRole: 'Senior Subject Matter Expert (Chemistry, TNSCERT)',
    reviewedAt: '22 Sep 2026',
    reviewedAtTa: '22 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'First law, enthalpy, Hess law, entropy, Gibbs free energy, and spontaneity criteria.',
    changeNoteTa: 'முதல் விதி, என்தால்பி, ஹெஸ் விதி, என்ட்ரோபி, கிப்ஸ் கட்டிலா ஆற்றல் மற்றும் தன்னிச்சையான வினைகளுக்கான நிபந்தனைகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 14,
    bodyEn: `### 1. Basic Concepts & First Law of Thermodynamics
* **System & Surroundings**: Open (matter & energy exchange), Closed (energy only), Isolated (neither).
* **State Functions**: Properties whose value depends only on the state of the system ($U, H, S, G$).
* **Path Functions**: Depend on path taken ($q, w$).
* **First Law of Thermodynamics**: Energy can neither be created nor destroyed, only converted from one form to another:
$$\\\\Delta U = q + w$$
(Sign convention: $q > 0$ heat absorbed; $w = -P\\\\Delta V$ for work done by gas against external pressure).

### 2. Enthalpy ($H$) and Heat Capacities
* Enthalpy: $H = U + PV \\\\implies \\\\Delta H = \\\\Delta U + \\\\Delta n_g RT$.
* **Heat Capacity**: $C = \\\\frac{q}{\\\\Delta T}$.
  * At constant volume: $q_v = \\\\Delta U \\\\implies C_v = \\\\left(\\\\frac{\\\\partial U}{\\\\partial T}\\\\right)_v$.
  * At constant pressure: $q_p = \\\\Delta H \\\\implies C_p = \\\\left(\\\\frac{\\\\partial H}{\\\\partial T}\\\\right)_p$.
* **Mayer’s Relation**:
$$C_p - C_v = R$$

### 3. Hess’s Law of Constant Heat Summation
* "The total enthalpy change for a chemical reaction is independent of the pathway taken and depends only on initial and final states."
$$\\\\Delta H_r = \\\\sum \\\\Delta H_f^\\\\circ (\\\\text{products}) - \\\\sum \\\\Delta H_f^\\\\circ (\\\\text{reactants})$$

### 4. Second Law of Thermodynamics & Entropy ($S$)
* **Entropy**: A measure of molecular disorder or randomness:
$$\\\\Delta S = \\\\frac{q_{\\\\text{rev}}}{T}$$
* Second Law: For any spontaneous process, the total entropy of the universe increases:
$$\\\\Delta S_{\\\\text{universe}} = \\\\Delta S_{\\\\text{system}} + \\\\Delta S_{\\\\text{surroundings}} > 0$$

### 5. Gibbs Free Energy ($G$) & Spontaneity Criteria
* $G = H - TS \\\\implies \\\\Delta G = \\\\Delta H - T\\\\Delta S$ (Gibbs-Helmholtz Equation).
* Criteria for Spontaneity at constant $T$ and $P$:
  * If $\\\\Delta G < 0$: Reaction is **spontaneous** (exergonic).
  * If $\\\\Delta G = 0$: System is at **equilibrium**.
  * If $\\\\Delta G > 0$: Reaction is **non-spontaneous** in forward direction.
* Temperature dependence of spontaneity:
  * $\\\\Delta H < 0, \\\\Delta S > 0$: Spontaneous at all temperatures.
  * $\\\\Delta H > 0, \\\\Delta S < 0$: Non-spontaneous at all temperatures.
  * $\\\\Delta H < 0, \\\\Delta S < 0$: Spontaneous only at low temperatures ($T < \\\\frac{\\\\Delta H}{\\\\Delta S}$).
  * $\\\\Delta H > 0, \\\\Delta S > 0$: Spontaneous only at high temperatures ($T > \\\\frac{\\\\Delta H}{\\\\Delta S}$).`,
    bodyTa: `### 1. வெப்ப இயக்கவியல் முதல் விதி
* ஆற்றலை ஆக்கவோ அழிக்கவோ முடியாது; ஒரு வகை ஆற்றலை மற்றொரு வகை ஆற்றலாக மாற்ற மட்டுமே முடியும்:
$$\\\\Delta U = q + w = q - P\\\\Delta V$$

### 2. என்தால்பி மற்றும் மோலார் வெப்ப ஏற்புத்திறன்
* $H = U + PV \\\\implies \\\\Delta H = \\\\Delta U + \\\\Delta n_g RT$.
* மேயர் தொடர்பு:
$$C_p - C_v = R$$

### 3. ஹெஸ்ஸின் மாறா வெப்பக் கூட்டல் விதி
* "ஒரு வேதிவினையின் போது ஏற்படும் மொத்த என்தால்பி மாற்றம், அவ்வினை ஒரே படியிலோ அல்லது பல படிகளிலோ நிகழ்ந்தாலும் மாறாமல் ஒரே அளவாக இருக்கும்."

### 4. இரண்டாம் விதி & என்ட்ரோபி ($S$)
* மூலக்கூறுகளின் ஒழுங்கற்ற தன்மையின் அளவீடு என்ட்ரோபி எனப்படும்:
$$\\\\Delta S = \\\\frac{q_{\\\\text{rev}}}{T}$$
* தன்னிச்சையான வினைகளில் அண்டத்தின் மொத்த என்ட்ரோபி தொடர்ந்து அதிகரிக்கிறது (\\\\Delta S_{\\\\text{total}} > 0).

### 5. கிப்ஸ் கட்டிலா ஆற்றல் ($G$) மற்றும் தன்னிச்சைத் தன்மை
* கிப்ஸ்-ஹெல்ம்ஹோல்ட்ஸ் சமன்பாடு:
$$\\\\Delta G = \\\\Delta H - T\\\\Delta S$$
* **தன்னிச்சைத் தன்மை நிபந்தனைகள்**:
  * $\\\\Delta G < 0$: வினை **தன்னிச்சையானது**.
  * $\\\\Delta G = 0$: அமைப்பு **சமநிலையில்** உள்ளது.
  * $\\\\Delta G > 0$: முன்னோக்கிய திசையில் வினை தன்னிச்சையற்றது.`,
    keyFormulas: [
      {
        nameEn: 'Gibbs-Helmholtz Equation',
        nameTa: 'கிப்ஸ்-ஹெல்ம்ஹோல்ட்ஸ் சமன்பாடு',
        formula: '\\\\Delta G = \\\\Delta H - T\\\\Delta S',
        explanationEn: 'Determines the free energy change driving spontaneity of processes at constant T and P.',
        explanationTa: 'மாறா T மற்றும் P-ல் ஒரு வினையின் தன்னிச்சைத் தன்மையை நிர்ணயிக்கும் கட்டிலா ஆற்றல் சமன்பாடு.'
      },
      {
        nameEn: 'Mayer Relation for Ideal Gases',
        nameTa: 'மேயர் தொடர்பு',
        formula: 'C_p - C_v = R',
        explanationEn: 'Difference between heat capacity at constant pressure and at constant volume.',
        explanationTa: 'மாறா அழுத்த மற்றும் மாறா பருமன் வெப்ப ஏற்புத்திறன்களின் வேறுபாடு வாயு மாறிலி R-க்குச் சமம்.'
      }
    ],
    workedExamples: [
      {
        questionEn: 'For a reaction, Delta H = -10 kJ/mol and Delta S = -20 J/K mol. At what temperature range will the reaction be spontaneous?',
        questionTa: 'ஒரு வினைக்கு Delta H = -10 kJ/mol மற்றும் Delta S = -20 J/K mol எனில், எவ்வெப்பநிலை வரம்பில் வினை தன்னிச்சையாக நிகழும்?',
        solutionEn: 'Both Delta H and Delta S are negative, so Delta G < 0 when T < Delta H / Delta S = (-10000) / (-20) = 500 K. The reaction is spontaneous below 500 K.',
        solutionTa: 'Delta H மற்றும் Delta S இரண்டும் எதிர்க்குறி கொண்டுள்ளதால், T < Delta H / Delta S = 500 K. எனவே 500 K-க்குக் கீழே வினை தன்னிச்சையாக நிகழும்.',
        answer: 'Spontaneous when T < 500 K'
      }
    ],
    rememberBoxes: [
      {
        tipEn: 'For a process to be spontaneous, Delta G must be negative. At equilibrium, Delta G = 0 and Delta G° = -RT ln K.',
        tipTa: 'ஒரு வினை தன்னிச்சையாக நிகழ Delta G மதிப்பு கட்டாயம் எதிர்க்குறியாக (< 0) இருக்க வேண்டும். சமநிலையில் Delta G = 0.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '22 Sep 2026',
        updatedAtTa: '22 செப் 2026',
        updatedBy: 'Dr. K. Ravichandran',
        changeNote: 'Chemical energetics, Hess law, and Gibbs criteria for spontaneity.',
        changeNoteTa: 'வேதி ஆற்றலியல், ஹெஸ் விதி மற்றும் தன்னிச்சைத் தன்மையின் கிப்ஸ் சமன்பாடு.'
      }
    ]
  }
};
'''

with open('src/data/class11ChemVol1.ts', 'a', encoding='utf-8') as f:
    f.write(notes_data)
print("Volume 1 Notes appended.")
