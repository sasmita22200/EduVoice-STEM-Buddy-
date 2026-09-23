# -*- coding: utf-8 -*-

summaries_and_quizzes = '''
export const CLASS_11_CHEM_VOL1_SUMMARIES: Record<string, SummaryItem> = {
  c11_chem_u1: {
    id: 'sum_c11_chem_u1',
    chapterId: 'c11_chem_u1',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      '1 mole contains 6.022 x 10^23 entities (Avogadro number).',
      'Molar volume of any ideal gas at STP (273.15 K, 1 bar) is 22.7 L (or 22.4 L at 1 atm).',
      'Gram equivalent mass depends on acidity, basicity, or change in oxidation number.',
      'Empirical formula gives the simplest ratio; Molecular formula = n x (Empirical formula).',
      'Limiting reagent is completely consumed first and decides the theoretical yield.',
      'Redox reactions involve simultaneous oxidation (electron loss) and reduction (electron gain).'
    ],
    keyPointsTa: [
      '1 மோல் என்பது 6.022 x 10^23 துகள்களைக் குறிக்கிறது (அவகேட்ரோ எண்).',
      'திட்ட வெப்ப அழுத்தத்தில் (STP) ஒரு மோல் வாயுவின் பருமன் 22.7 லிட்டர் (1 atm-ல் 22.4 L).',
      'கிராம் சமான நிறை அமிலத்துவம், காரத்துவம் அல்லது எலக்ட்ரான் பரிமாற்றத்தைச் சார்ந்தது.',
      'எளிய விகித வாய்ப்பாடு எளிய விகிதத்தையும், மூலக்கூறு வாய்ப்பாடு உண்மையான எண்ணிக்கையையும் தரும்.',
      'வினைக்கட்டுப்படுத்தும் காரணி வினையில் முதலில் முழுமையாக செலவிடப்பட்டு விளைபொருளின் அளவைத் தீர்மானிக்கிறது.',
      'ஆக்சிஜனேற்றம் என்பது எலக்ட்ரான் இழப்பு; ஒடுக்கம் என்பது எலக்ட்ரான் ஏற்பு.'
    ],
    simpleExplanationEn: 'Chemistry calculations revolve around the mole: counting atoms by weighing them. Limiting reagent dictates how much product can form, and redox balancing tracks electron accounting.',
    simpleExplanationTa: 'வேதியியல் கணக்கீடுகள் மோல் கருத்தை அடிப்படையாகக் கொண்டவை. வினைக்கட்டுப்படுத்தும் காரணி உருவாகும் விளைபொருளைத் தீர்மானிக்கிறது; ஆக்சிஜனேற்ற-ஒடுக்க சமன்பாடுகள் எலக்ட்ரான் சமநிலையை விளக்குகின்றன.',
    formulaCheatSheet: [
      { formula: 'n = m / M', note: 'Moles = mass / molar mass' },
      { formula: 'n = V / 22.4 L', note: 'Moles of gas at STP' },
      { formula: 'M.F. = (E.F.)_n', note: 'Molecular formula from empirical formula' }
    ]
  },

  c11_chem_u2: {
    id: 'sum_c11_chem_u2',
    chapterId: 'c11_chem_u2',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'de Broglie wavelength: lambda = h / (mv), proving matter exhibits wave properties.',
      'Heisenberg principle: delta x * delta p >= h / (4 * pi), showing classical orbits do not exist.',
      'Schrodinger equation (H psi = E psi) describes orbital wavefunctions; |psi|^2 is probability density.',
      'Four quantum numbers (n, l, m_l, m_s) uniquely characterize each electron state.',
      'Aufbau (energy order), Pauli exclusion (max 2 e- opposite spin), and Hund rule (maximum multiplicity).',
      'Cr (3d5 4s1) and Cu (3d10 4s1) have extra stability due to symmetry and exchange energy.'
    ],
    keyPointsTa: [
      'டி பிராக்லி அலைநீளம் (lambda = h / mv) பருப்பொருளின் அலைப்பண்பை நிரூபிக்கிறது.',
      'ஹைசன்பெர்க் தத்துவம் எலக்ட்ரானின் நிலை மற்றும் உந்தத்தை ஒரே நேரத்தில் துல்லியமாக அளவிட முடியாது என்கிறது.',
      '|psi|^2 என்பது அணுக்கருவைச் சுற்றி எலக்ட்ரானைக் காண்பதற்கான நிகழ்தகவு அடர்த்தியைக் குறிக்கும்.',
      'நான்கு குவாண்டம் எண்கள் (n, l, m, s) ஆர்பிட்டாலின் அளவு, வடிவம் மற்றும் எலக்ட்ரான் தற்சுழற்சியைத் தீர்மானிக்கின்றன.',
      'ஆஃபா விதி, பவுலி தவிர்ப்புக் கொள்கை மற்றும் ஹுண்ட் விதி எலக்ட்ரான் அமைப்பை நிர்வகிக்கின்றன.',
      'Cr மற்றும் Cu அணுக்கள் சரிபாதி மற்றும் முழுமையாக நிரம்பிய d ஆர்பிட்டால்களால் கூடுதல் நிலைப்புத்தன்மை பெறுகின்றன.'
    ],
    simpleExplanationEn: 'Electrons behave as both waves and particles. Instead of rigid planetary orbits, electrons inhabit 3D probability clouds called orbitals defined by quantum numbers.',
    simpleExplanationTa: 'எலக்ட்ரான்கள் துகள் மற்றும் அலை ஆகிய இரு பண்புகளையும் கொண்டுள்ளன. அவை குறிப்பிட்ட வட்டப் பாதைகளில் சுழலாமல், குவாண்டம் எண்களால் விவரிக்கப்படும் ஆர்பிட்டால்களில் நிகழ்தகவு மேகங்களாகக் காணப்படுகின்றன.',
    formulaCheatSheet: [
      { formula: 'lambda = h / (mv)', note: 'de Broglie matter wavelength' },
      { formula: 'delta x * delta p >= h / 4pi', note: 'Heisenberg uncertainty' },
      { formula: 'No. of orbitals in shell = n^2', note: 'Total orbitals in principal energy level' }
    ]
  },

  c11_chem_u3: {
    id: 'sum_c11_chem_u3',
    chapterId: 'c11_chem_u3',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'Modern Periodic Law arranges elements in increasing order of atomic number Z.',
      'Atomic radius decreases across a period (higher Z_eff) and increases down a group (new shells).',
      'Ionization energy: Be > B (2s2 vs 2p1) and N > O (stable half-filled 2p3).',
      'Chlorine has higher negative electron gain enthalpy than Fluorine due to less electron repulsion.',
      'Fluorine is the most electronegative element with a Pauling value of 4.0.',
      'Diagonal relationship occurs between Li-Mg and Be-Al due to comparable ionic potential.'
    ],
    keyPointsTa: [
      'நவீன ஆவர்த்தன அட்டவணை அணு எண்களின் ஏறுவரிசையில் தனிமங்களை வரிசைப்படுத்துகிறது.',
      'வரிசையில் செல்லும்போது அணு ஆரம் குறைகிறது; தொகுதியில் கீழிறங்கும்போது அதிகரிக்கிறது.',
      'Be > B மற்றும் N > O ஆகியவற்றின் அயனியாக்கும் ஆற்றல் நிரம்பிய/சரிபாதி நிரம்பிய ஆர்பிட்டால்களால் மாறுபடுகிறது.',
      'குளோரினின் எலக்ட்ரான் நாட்ட என்தால்பி ஃப்ளூரினை விட அதிக எதிர்க்குறி மதிப்பைக் கொண்டுள்ளது.',
      'முழு அட்டவணையிலேயே அதிக எலக்ட்ரான் கவர் தன்மை கொண்ட தனிமம் ஃப்ளூரின் (4.0).',
      'Li-Mg மற்றும் Be-Al ஆகிய தனிமங்கள் மூலைவிட்டத் தொடர்பால் ஒத்த வேதிப்பண்புகளைப் பெற்றுள்ளன.'
    ],
    simpleExplanationEn: 'Periodic trends repeat predictable patterns because valence electron configurations recycle across periods and down groups.',
    simpleExplanationTa: 'ஆவர்த்தன அட்டவணையில் எலக்ட்ரான் அமைப்புகளின் சீரான மறுநிகழ்வு காரணமாக அணு ஆரம், அயனியாக்கும் ஆற்றல் போன்றவை ஆவர்த்தனப் பண்புகளாக மாறுகின்றன.',
    formulaCheatSheet: [
      { formula: 'Z_eff = Z - sigma', note: 'Slater effective nuclear charge' }
    ]
  },

  c11_chem_u4: {
    id: 'sum_c11_chem_u4',
    chapterId: 'c11_chem_u4',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'Hydrogen has three isotopes: Protium (no neutron), Deuterium (heavy), Tritium (radioactive beta-emitter).',
      'Ortho (parallel proton spins) and Para (antiparallel proton spins) are nuclear spin isomers of H2.',
      'Hydrides are categorized into Ionic (s-block), Covalent (p-block), and Interstitial (d/f-block).',
      'Heavy water (D2O) acts as a moderator in nuclear reactors to slow fast neutrons.',
      'Hydrogen peroxide (H2O2) has an open-book non-planar structure and functions as both oxidant and reductant.',
      '10 volume H2O2 corresponds to approximately 0.89 M or 1.78 N.'
    ],
    keyPointsTa: [
      'ஹைட்ரஜனுக்கு 3 ஐசோடோப்புகள் உள்ளன: புரோட்டியம், டியூட்டீரியம், ட்ரிட்டியம் (கதிரியக்கம்).',
      'ஆர்த்தோ (ஒத்த தற்சுழற்சி) மற்றும் பாரா (எதிர் தற்சுழற்சி) ஆகியவை H2-ன் அணுக்கரு தற்சுழற்சி மாற்றியங்கள்.',
      'ஹைட்ரைடுகள் அயனி, சகப்பிணைப்பு மற்றும் உலோக இடைச்செருகல் ஹைட்ரைடுகள் என வகைப்படுத்தப்படுகின்றன.',
      'கனநீர் (D2O) அணு உலைகளில் நியூட்ரான்களின் வேகத்தைக் குறைக்கும் தணிப்பானாகப் பயன்படுகிறது.',
      'ஹைட்ரஜன் பெராக்சைடு திறந்த புத்தக வடிவைக் கொண்டு ஆக்சிஜனேற்றி மற்றும் ஒடுக்கியாக இருநிலையிலும் செயல்படுகிறது.'
    ],
    simpleExplanationEn: 'Hydrogen bridges the alkali metals and halogens. Its nuclear isomers, industrial isotopes (D2O), and versatile peroxide chemistry make it unique.',
    simpleExplanationTa: 'ஹைட்ரஜன் தனிம வரிசை அட்டவணையில் தனித்துவமானது. அதன் ஐசோடோப்புகள், ஆர்த்தோ-பாரா வடிவங்கள் மற்றும் H2O2 ஆகியவை பல்வேறு தொழில்துறை முக்கியத்துவத்தைக் கொண்டுள்ளன.',
    formulaCheatSheet: [
      { formula: 'Volume Strength = 11.2 * M', note: 'H2O2 concentration at STP' }
    ]
  },

  c11_chem_u5: {
    id: 'sum_c11_chem_u5',
    chapterId: 'c11_chem_u5',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'Alkali metals (Group 1, ns1) are the most electropositive and softest metals.',
      'Flame colors: Li (crimson), Na (yellow), K (lilac), Ca (brick red), Ba (apple green).',
      'Dissolution in liquid ammonia yields deep blue conducting solutions with ammoniated electrons.',
      'Be and Mg do not give flame test colors because their electrons are tightly held.',
      'Plaster of Paris: CaSO4 . 1/2 H2O obtained by heating gypsum at 393 K; above 393 K forms dead burnt plaster.',
      'Diagonal similarities: Li resembles Mg; Be resembles Al in forming amphoteric oxides and covalent halides.'
    ],
    keyPointsTa: [
      'கார உலோகங்கள் (தொகுதி 1) அதிக நேர்மின்சுமை கொண்டவை; எளிய மென்மையான உலோகங்கள்.',
      'சுடர் நிறங்கள்: Li (கருஞ்சிவப்பு), Na (மஞ்சள்), K (இளஞ்சிவப்பு), Ca (செங்கல் சிவப்பு), Ba (ஆப்பிள் பச்சை).',
      'திரவ அம்மோனியாவில் அம்மோனியேற்றப்பட்ட எலக்ட்ரான்களால் ஆழ்ந்த நீல நிற மின்கடத்தும் கரைசல் உருவாகிறது.',
      'Be மற்றும் Mg அதிக அயனியாக்கும் ஆற்றலால் சுடர் நிறம் தருவதில்லை.',
      'ஜிப்சத்தை 393 K-ல் சூடாக்கினால் பாரிஸ் சாந்து கிடைக்கிறது; 393 K-க்கு மேல் செத்த சாந்து உருவாகிறது.',
      'Li மற்றும் Mg, Be மற்றும் Al மூலைவிட்டத் தொடர்பைக் கொண்டுள்ளன.'
    ],
    simpleExplanationEn: 's-Block metals readily lose their outer s-electrons to form +1 and +2 ions. Their flame tests, liquid ammonia chemistry, and calcium building materials are cornerstone board exam topics.',
    simpleExplanationTa: 'கார மற்றும் காரமண் உலோகங்கள் தங்களின் வெளிக்கூட்டு s-எலக்ட்ரான்களை எளிதில் இழந்து +1 மற்றும் +2 அயனிகளாக மாறுகின்றன. சுடர் சோதனை மற்றும் பாரிஸ் சாந்து முக்கியத் தலைப்புகள் ஆகும்.',
    formulaCheatSheet: [
      { formula: 'CaSO4 . 2H2O -> CaSO4 . 1/2H2O (at 393 K)', note: 'Gypsum to Plaster of Paris' }
    ]
  },

  c11_chem_u6: {
    id: 'sum_c11_chem_u6',
    chapterId: 'c11_chem_u6',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'Ideal Gas Law: PV = nRT combines Boyle, Charles, Gay-Lussac, and Avogadro laws.',
      'Dalton partial pressure: p_i = x_i * P_total.',
      'Graham diffusion law: r is inversely proportional to square root of molar mass M.',
      'van der Waals equation modifies ideal gas law: (P + an^2/V^2)(V - nb) = nRT.',
      'Compressibility factor Z = PV/(nRT); Z=1 for ideal gas, Z < 1 when attractive forces dominate.',
      'Critical temperature Tc = 8a / (27Rb): gas cannot be liquefied above Tc.'
    ],
    keyPointsTa: [
      'நல்லியல்பு வாயுச் சமன்பாடு: PV = nRT.',
      'டால்டன் விதி: பகுதி அழுத்தம் p_i = x_i * P_total.',
      'கிரஹாமின் விரவல் விதி: விரவல் வீதம் மூலக்கூறு நிறையின் வர்க்க மூலத்திற்கு எதிர்த்தகவில் அமையும்.',
      'வாண்டர்வால்ஸ் சமன்பாடு இயல்பு வாயுக்களுக்கான கவர்ச்சி விசை மற்றும் மூலக்கூறு பருமனைத் திருத்துகிறது.',
      'அமுக்குத்திறன் காரணி Z = PV / nRT. நல்லியல்பு வாயுவுக்கு Z = 1.',
      'நிலைமாறு வெப்பநிலை Tc = 8a / (27Rb)-க்கு மேல் எந்த வாயுவையும் திரவமாக்க முடியாது.'
    ],
    simpleExplanationEn: 'Gases follow ideal behavior at low pressure and high temperature. Real gases deviate due to molecular size and intermolecular attraction, quantified by the van der Waals parameters.',
    simpleExplanationTa: 'குறைந்த அழுத்தம் மற்றும் அதிக வெப்பநிலையில் வாயுக்கள் நல்லியல்பு நடத்தையைப் பின்பற்றுகின்றன. மூலக்கூறுகளின் பருமன் மற்றும் கவர்ச்சி விசையே இயல்பு வாயுக்களின் விலகலுக்குக் காரணம்.',
    formulaCheatSheet: [
      { formula: 'PV = nRT', note: 'Ideal gas equation' },
      { formula: '(P + a/V^2)(V - b) = RT', note: 'van der Waals equation for 1 mole' },
      { formula: 'Tc = 8a / (27Rb)', note: 'Critical temperature' }
    ]
  },

  c11_chem_u7: {
    id: 'sum_c11_chem_u7',
    chapterId: 'c11_chem_u7',
    lastUpdatedAt: '22 Sep 2026',
    lastUpdatedAtTa: '22 செப் 2026',
    keyPointsEn: [
      'First Law: Delta U = q + w (conservation of energy).',
      'Enthalpy H = U + PV; Delta H = Delta U + Delta n_g RT for gaseous reactions.',
      'Mayer relation for ideal gases: C_p - C_v = R.',
      'Hess law states that total reaction enthalpy is independent of the number of steps.',
      'Entropy S measures microscopic disorder; Delta S_universe > 0 for all spontaneous processes.',
      'Gibbs free energy Delta G = Delta H - T * Delta S; Delta G < 0 is the universal criterion for spontaneity.'
    ],
    keyPointsTa: [
      'வெப்ப இயக்கவியல் முதல் விதி: Delta U = q + w (ஆற்றல் மாறா விதி).',
      'என்தால்பி H = U + PV; வாயு வினைகளுக்கு Delta H = Delta U + Delta n_g RT.',
      'மேயர் தொடர்பு: C_p - C_v = R.',
      'ஹெஸ் விதி: வினையின் என்தால்பி மாற்றம் அது நிகழும் பாதையைச் சார்ந்ததல்ல.',
      'என்ட்ரோபி என்பது ஒழுங்கற்ற தன்மையின் அளவீடு; தன்னிச்சையான வினைகளில் அண்டத்தின் என்ட்ரோபி அதிகரிக்கும்.',
      'கிப்ஸ் சமன்பாடு: Delta G = Delta H - T * Delta S; ஒரு வினை தன்னிச்சையாக நிகழ Delta G < 0 ஆக இருக்க வேண்டும்.'
    ],
    simpleExplanationEn: 'Thermodynamics evaluates energy transformations. The First Law tracks energy conservation, the Second Law governs entropy generation, and Gibbs Free Energy determines whether reactions can happen spontaneously.',
    simpleExplanationTa: 'வெப்ப இயக்கவியல் ஆற்றல் மாற்றங்களை ஆராய்கிறது. முதல் விதி ஆற்றல் சமநிலையைக் கூறுகிறது, இரண்டாம் விதி என்ட்ரோபியை விளக்குகிறது, கிப்ஸ் கட்டிலா ஆற்றல் ஒரு வினை தன்னிச்சையாக நடக்குமா என்பதைத் தீர்மானிக்கிறது.',
    formulaCheatSheet: [
      { formula: 'Delta U = q - P Delta V', note: 'First law of thermodynamics' },
      { formula: 'Delta G = Delta H - T Delta S', note: 'Gibbs-Helmholtz equation' },
      { formula: 'Cp - Cv = R', note: 'Mayer relation' }
    ]
  }
};

export const CLASS_11_CHEM_VOL1_QUIZZES: Record<string, ChapterQuiz> = {
  c11_chem_u1: {
    id: 'quiz_c11_chem_u1',
    chapterId: 'c11_chem_u1',
    titleEn: 'Basic Concepts of Chemistry & Calculations Quiz',
    titleTa: 'வேதியியல் அடிப்படைக் கருத்துக்கள் தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'How many atoms are present in 1 mole of oxygen gas (O2)?',
        questionTa: '1 மோல் ஆக்சிஜன் வாயுவில் (O2) உள்ள அணுக்களின் எண்ணிக்கை யாது?',
        optionsEn: ['6.022 x 10^23', '1.204 x 10^24', '3.011 x 10^23', '2.408 x 10^24'],
        optionsTa: ['6.022 x 10^23', '1.204 x 10^24', '3.011 x 10^23', '2.408 x 10^24'],
        correctAnswer: 1,
        explanationEn: '1 mole of O2 contains 6.022 x 10^23 molecules. Since each O2 molecule has 2 oxygen atoms, total atoms = 2 x 6.022 x 10^23 = 1.204 x 10^24 atoms.',
        explanationTa: '1 மோல் O2-ல் 6.022 x 10^23 மூலக்கூறுகள் உள்ளன. ஒவ்வொரு மூலக்கூறிலும் 2 அணுக்கள் உள்ளதால் மொத்த அணுக்கள் = 2 x 6.022 x 10^23 = 1.204 x 10^24.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What is the oxidation number of Cr in K2Cr2O7?',
        questionTa: 'K2Cr2O7 சேர்மத்தில் Cr-ன் ஆக்சிஜனேற்ற எண் என்ன?',
        optionsEn: ['+3', '+5', '+6', '+7'],
        optionsTa: ['+3', '+5', '+6', '+7'],
        correctAnswer: 2,
        explanationEn: '2(+1) + 2(Cr) + 7(-2) = 0 => 2 + 2(Cr) - 14 = 0 => 2(Cr) = 12 => Cr = +6.',
        explanationTa: '2(+1) + 2(Cr) + 7(-2) = 0 => 2(Cr) = +12 => Cr = +6.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The equivalent mass of oxalic acid dihydrate (H2C2O4 . 2H2O, Molar mass = 126 g/mol) is:',
        questionTa: 'ஆக்ஸாலிக் அமிலப் படிகத்தின் (H2C2O4 . 2H2O, மோலார் நிறை = 126 g/mol) சமான நிறை என்ன?',
        optionsEn: ['126 g/equiv', '63 g/equiv', '42 g/equiv', '31.5 g/equiv'],
        optionsTa: ['126 g/equiv', '63 g/equiv', '42 g/equiv', '31.5 g/equiv'],
        correctAnswer: 1,
        explanationEn: 'Oxalic acid is a dibasic acid (basicity = 2). Equivalent mass = Molar Mass / Basicity = 126 / 2 = 63 g/equiv.',
        explanationTa: 'ஆக்ஸாலிக் அமிலம் இருகாரத்துவ அமிலம் (காரத்துவம் = 2). சமான நிறை = 126 / 2 = 63 g/equiv.'
      }
    ]
  },

  c11_chem_u2: {
    id: 'quiz_c11_chem_u2',
    chapterId: 'c11_chem_u2',
    titleEn: 'Quantum Mechanical Model of Atom Quiz',
    titleTa: 'அணுவின் குவாண்டம் மாதிரி தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the maximum number of electrons that can be accommodated in a shell with principal quantum number n = 3?',
        questionTa: 'முதன்மை குவாண்டம் எண் n = 3 கொண்ட கூட்டில் அதிகபட்சமாக எத்தனை எலக்ட்ரான்கள் இடம்பெற முடியும்?',
        optionsEn: ['8', '18', '32', '9'],
        optionsTa: ['8', '18', '32', '9'],
        correctAnswer: 1,
        explanationEn: 'The maximum number of electrons in any shell is given by 2n^2 = 2(3^2) = 2(9) = 18.',
        explanationTa: 'ஒரு கூட்டில் இடம்பெறும் அதிகபட்ச எலக்ட்ரான்கள் = 2n^2 = 2(3^2) = 18.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which quantum number determines the three-dimensional shape of an atomic orbital?',
        questionTa: 'ஆர்பிட்டாலின் முப்பரிமாண வடிவத்தை நிர்ணயிக்கும் குவாண்டம் எண் எது?',
        optionsEn: ['Principal (n)', 'Azimuthal (l)', 'Magnetic (m)', 'Spin (s)'],
        optionsTa: ['முதன்மை (n)', 'கோண உந்த / துணை (l)', 'காந்த (m)', 'தற்சுழற்சி (s)'],
        correctAnswer: 1,
        explanationEn: 'The azimuthal quantum number l defines the orbital shape: l=0 is spherical (s), l=1 is dumbbell (p), l=2 is double-dumbbell (d).',
        explanationTa: 'கோண உந்த குவாண்டம் எண் l ஆர்பிட்டாலின் வடிவத்தை (s-கோளம், p-டம்பெல், d-இரட்டை டம்பெல்) நிர்ணயிக்கிறது.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'The correct electronic configuration of Chromium (Cr, Z=24) is:',
        questionTa: 'குரோமியம் (Cr, Z=24) அணுவின் சரியான எலக்ட்ரான் அமைப்பு யாது?',
        optionsEn: ['[Ar] 3d4 4s2', '[Ar] 3d5 4s1', '[Ar] 3d6 4s0', '[Ar] 4s2 4p4'],
        optionsTa: ['[Ar] 3d4 4s2', '[Ar] 3d5 4s1', '[Ar] 3d6 4s0', '[Ar] 4s2 4p4'],
        correctAnswer: 1,
        explanationEn: 'Cr has configuration [Ar] 3d5 4s1 due to the extra stabilization energy of a half-filled 3d subshell.',
        explanationTa: 'சரிபாதி நிரம்பிய 3d5 ஆர்பிட்டாலின் கூடுதல் நிலைப்புத்தன்மை காரணமாக Cr-ன் எலக்ட்ரான் அமைப்பு [Ar] 3d5 4s1 ஆகும்.'
      }
    ]
  },

  c11_chem_u3: {
    id: 'quiz_c11_chem_u3',
    chapterId: 'c11_chem_u3',
    titleEn: 'Periodic Classification of Elements Quiz',
    titleTa: 'தனிமங்களின் ஆவர்த்தன வகைப்பாடு தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which element possesses the highest negative electron gain enthalpy in the periodic table?',
        questionTa: 'ஆவர்த்தன அட்டவணையில் அதிக எலக்ட்ரான் நாட்ட என்தால்பி மதிப்பைப் பெற்றுள்ள தனிமம் எது?',
        optionsEn: ['Fluorine', 'Chlorine', 'Bromine', 'Oxygen'],
        optionsTa: ['ஃப்ளூரின்', 'குளோரின்', 'புரோமின்', 'ஆக்சிஜன்'],
        correctAnswer: 1,
        explanationEn: 'Chlorine has the highest negative electron gain enthalpy (-349 kJ/mol) because Fluorine has a compact 2p shell with strong electron-electron repulsion.',
        explanationTa: 'குளோரின் அதிக எலக்ட்ரான் நாட்ட என்தால்பியைக் கொண்டுள்ளது (-349 kJ/mol); ஃப்ளூரினில் எலக்ட்ரான் விலக்கு விசை அதிகமுள்ளது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Why is the first ionization enthalpy of Nitrogen higher than that of Oxygen?',
        questionTa: 'நைட்ரஜனின் முதல் அயனியாக்கும் என்தால்பி ஆக்சிஜனை விட அதிகமாக இருக்கக் காரணம் என்ன?',
        optionsEn: ['N has smaller radius than O', 'N has extra stable half-filled 2p3 configuration', 'O has higher nuclear charge', 'N is a metal'],
        optionsTa: ['N ஆக்சிஜனை விட சிறிய ஆரம் கொண்டது', 'N சரிபாதி நிரம்பிய 2p3 கூடுதல் நிலைப்புத்தன்மை கொண்டது', 'O அதிக அணுக்கரு மின்சுமை கொண்டது', 'N ஒரு உலோகம்'],
        correctAnswer: 1,
        explanationEn: 'Nitrogen has a completely half-filled 2p subshell (2p3) which provides special exchange stability, requiring more energy to remove an electron.',
        explanationTa: 'நைட்ரஜன் சரிபாதி நிரம்பிய 2p3 எலக்ட்ரான் அமைப்பைப் பெற்றுள்ளதால் கூடுதல் நிலைப்புத்தன்மை காரணமாக அதிக அயனியாக்கும் ஆற்றல் தேவைப்படுகிறது.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which pair of elements demonstrates a diagonal relationship?',
        questionTa: 'மூலைவிட்டத் தொடர்பைக் காட்டும் தனிமங்களின் இணை எது?',
        optionsEn: ['Li and Na', 'Be and Al', 'B and C', 'Na and K'],
        optionsTa: ['Li மற்றும் Na', 'Be மற்றும் Al', 'B மற்றும் C', 'Na மற்றும் K'],
        correctAnswer: 1,
        explanationEn: 'Beryllium (Group 2, Period 2) and Aluminium (Group 13, Period 3) exhibit a diagonal relationship due to similar charge-to-radius ratio.',
        explanationTa: 'Be மற்றும் Al மூலைவிட்டத் தொடர்பு கொண்டுள்ளன; அவற்றின் மின்னூட்ட-ஆர விகிதம் கிட்டத்தட்ட ஒன்றாக உள்ளது.'
      }
    ]
  },

  c11_chem_u4: {
    id: 'quiz_c11_chem_u4',
    chapterId: 'c11_chem_u4',
    titleEn: 'Hydrogen Quiz',
    titleTa: 'ஹைட்ரஜன் தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which isotope of hydrogen is radioactive and emits beta particles?',
        questionTa: 'பீட்டா துகள்களை உமிழும் ஹைட்ரஜனின் கதிரியக்க ஐசோடோப் எது?',
        optionsEn: ['Protium', 'Deuterium', 'Tritium', 'Hydronium'],
        optionsTa: ['புரோட்டியம்', 'டியூட்டீரியம்', 'ட்ரிட்டியம்', 'ஹைட்ரோனியம்'],
        correctAnswer: 2,
        explanationEn: 'Tritium (3H or T) is radioactive with a half-life of 12.33 years, decaying by beta emission.',
        explanationTa: 'ட்ரிட்டியம் (3H) மட்டுமே கதிரியக்க ஐசோடோப் ஆகும் (அரைவாழ்வு 12.33 ஆண்டுகள்).'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'In ortho-hydrogen, the spins of the two proton nuclei are:',
        questionTa: 'ஆர்த்தோ ஹைட்ரஜனில் இரு புரோட்டான் அணுக்கருக்களின் தற்சுழற்சி:',
        optionsEn: ['Parallel (same direction)', 'Anti-parallel (opposite direction)', 'Perpendicular', 'Zero'],
        optionsTa: ['இணையாக (ஒரே திசையில்)', 'எதிர் இணையாக (எதிர் திசையில்)', 'செங்குத்தாக', 'பூஜ்ஜியம்'],
        correctAnswer: 0,
        explanationEn: 'In ortho-hydrogen, nuclear spins are parallel (same direction, I = 1), while in para-hydrogen they are anti-parallel (I = 0).',
        explanationTa: 'ஆர்த்தோ ஹைட்ரஜனில் புரோட்டான் அணுக்கரு தற்சுழற்சி ஒரே திசையில் (இணையாக) அமையும் (I = 1).'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The geometry/structure of the hydrogen peroxide (H2O2) molecule is:',
        questionTa: 'ஹைட்ரஜன் பெராக்சைடு (H2O2) மூலக்கூறின் வடிவம் என்ன?',
        optionsEn: ['Linear', 'Planar', 'Non-planar open-book', 'Tetrahedral'],
        optionsTa: ['நேர்கோடு', 'தள வடிவம்', 'தளமற்ற திறந்த புத்தக வடிவம்', 'நான்முகி'],
        correctAnswer: 2,
        explanationEn: 'H2O2 possesses a non-planar open-book structure with a dihedral angle of about 111.5 degrees in gas phase.',
        explanationTa: 'H2O2 தளமற்ற திறந்த புத்தக வடிவத்தைக் கொண்டுள்ளது (இரு தளக் கோணம் 111.5°).'
      }
    ]
  },

  c11_chem_u5: {
    id: 'quiz_c11_chem_u5',
    chapterId: 'c11_chem_u5',
    titleEn: 'Alkali & Alkaline Earth Metals Quiz',
    titleTa: 'கார மற்றும் காரமண் உலோகங்கள் தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which alkali metal imparts a golden yellow color to the flame?',
        questionTa: 'சுடரில் பொன் மஞ்சள் நிறத்தைத் தரும் கார உலோகம் எது?',
        optionsEn: ['Lithium', 'Sodium', 'Potassium', 'Caesium'],
        optionsTa: ['லித்தியம்', 'சோடியம்', 'பொட்டாசியம்', 'சீசியம்'],
        correctAnswer: 1,
        explanationEn: 'Sodium imparts a brilliant golden yellow color to the flame (589 nm emission).',
        explanationTa: 'சோடியம் சுடருக்கு பொன் மஞ்சள் நிறத்தை அளிக்கிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Chemical formula of Plaster of Paris is:',
        questionTa: 'பாரிஸ் சாந்தின் வேதி வாய்ப்பாடு என்ன?',
        optionsEn: ['CaSO4 . 2H2O', 'CaSO4 . 1/2 H2O', 'CaSO4', 'CaSO4 . 5H2O'],
        optionsTa: ['CaSO4 . 2H2O', 'CaSO4 . 1/2 H2O', 'CaSO4', 'CaSO4 . 5H2O'],
        correctAnswer: 1,
        explanationEn: 'Plaster of Paris is calcium sulphate hemihydrate: CaSO4 . 1/2 H2O (or (CaSO4)2 . H2O).',
        explanationTa: 'பாரிஸ் சாந்து என்பது கால்சியம் சல்பேட் அரை நீரேற்றி ஆகும்: CaSO4 . 1/2 H2O.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'The deep blue color of alkali metals dissolved in liquid ammonia is primarily caused by:',
        questionTa: 'திரவ அம்மோனியாவில் கார உலோகங்கள் கரையும்போது உருவாகும் ஆழ்ந்த நீல நிறத்திற்கு முக்கியக் காரணம்:',
        optionsEn: ['Solvated metal ions', 'Ammoniated electrons', 'Amide formation', 'Nitride ions'],
        optionsTa: ['கரைப்பான் சூழ்ந்த உலோக அயனிகள்', 'அம்மோனியேற்றப்பட்ட எலக்ட்ரான்கள்', 'அமைடு உருவாதல்', 'நைட்ரைடு அயனிகள்'],
        correctAnswer: 1,
        explanationEn: 'Ammoniated electrons absorb energy in the red region of visible light, transmitting a deep blue color.',
        explanationTa: 'அம்மோனியேற்றப்பட்ட எலக்ட்ரான்கள் கண்ணுறு ஒளியின் சிவப்பு நிறப் பகுதியை உறிஞ்சி நீல நிறத்தை வெளிப்படுத்துகின்றன.'
      }
    ]
  },

  c11_chem_u6: {
    id: 'quiz_c11_chem_u6',
    chapterId: 'c11_chem_u6',
    titleEn: 'Gaseous State Quiz',
    titleTa: 'வாயு நிலைமை தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the value of the compressibility factor Z for an ideal gas?',
        questionTa: 'நல்லியல்பு வாயுவின் அமுக்குத்திறன் காரணி Z-ன் மதிப்பு என்ன?',
        optionsEn: ['0', '1', 'Infinity', '-1'],
        optionsTa: ['0', '1', 'முடிவிலி', '-1'],
        correctAnswer: 1,
        explanationEn: 'For an ideal gas, PV = nRT, so Z = PV / (nRT) = 1 under all conditions of temperature and pressure.',
        explanationTa: 'நல்லியல்பு வாயுவுக்கு PV = nRT ஆதலால் Z = 1.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'In the van der Waals equation, constant a accounts for:',
        questionTa: 'வாண்டர்வால்ஸ் சமன்பாட்டில் உள்ள மாறிலி a எதனைக் குறிக்கிறது?',
        optionsEn: ['Volume of molecules', 'Intermolecular attractive forces', 'Speed of molecules', 'Temperature correction'],
        optionsTa: ['மூலக்கூறுகளின் பருமன்', 'மூலக்கூறுகளுக்கிடையேயான கவர்ச்சி விசை', 'மூலக்கூறுகளின் வேகம்', 'வெப்பநிலை திருத்தம்'],
        correctAnswer: 1,
        explanationEn: 'van der Waals constant a corrects for the intermolecular attractive forces between gas molecules.',
        explanationTa: 'மாறிலி a என்பது வாயு மூலக்கூறுகளுக்கிடையேயான ஈர்ப்பு விசைக்கான திருத்தமாகும்.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'The critical temperature Tc of a gas is given by the formula:',
        questionTa: 'ஒரு வாயுவின் நிலைமாறு வெப்பநிலைக்கான வாய்ப்பாடு:',
        optionsEn: ['8a / (27Rb)', 'a / (27b^2)', '3b', '2a / (Rb)'],
        optionsTa: ['8a / (27Rb)', 'a / (27b^2)', '3b', '2a / (Rb)'],
        correctAnswer: 0,
        explanationEn: 'Tc = 8a / (27Rb), above which the gas cannot be liquefied regardless of the applied pressure.',
        explanationTa: 'Tc = 8a / (27Rb) என்பது நிலைமாறு வெப்பநிலையாகும்.'
      }
    ]
  },

  c11_chem_u7: {
    id: 'quiz_c11_chem_u7',
    chapterId: 'c11_chem_u7',
    titleEn: 'Thermodynamics Quiz',
    titleTa: 'வெப்ப இயக்கவியல் தேர்வு',
    totalMarks: 25,
    timeLimitMinutes: 15,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'For a chemical reaction to be spontaneous at constant temperature and pressure, Delta G must be:',
        questionTa: 'மாறா வெப்பநிலை மற்றும் அழுத்தத்தில் ஒரு வினை தன்னிச்சையாக நிகழ Delta G மதிப்பு எவ்வாறு இருக்க வேண்டும்?',
        optionsEn: ['Positive (> 0)', 'Negative (< 0)', 'Zero', 'Undefined'],
        optionsTa: ['நேர்மதிப்பு (> 0)', 'எதிர்மதிப்பு (< 0)', 'பூஜ்ஜியம்', 'வரையறுக்க முடியாது'],
        correctAnswer: 1,
        explanationEn: 'A negative change in Gibbs free energy (Delta G < 0) is the necessary condition for a spontaneous process.',
        explanationTa: 'வினை தன்னிச்சையாக நிகழ கிப்ஸ் கட்டிலா ஆற்றல் மாற்றம் எதிர்க்குறியாக (< 0) அமைய வேண்டும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Mayer relation relating heat capacities of an ideal gas states that:',
        questionTa: 'நல்லியல்பு வாயுக்களுக்கான மேயர் தொடர்பு:',
        optionsEn: ['Cp + Cv = R', 'Cp - Cv = R', 'Cp / Cv = R', 'Cv - Cp = R'],
        optionsTa: ['Cp + Cv = R', 'Cp - Cv = R', 'Cp / Cv = R', 'Cv - Cp = R'],
        correctAnswer: 1,
        explanationEn: 'Mayer relation is Cp - Cv = R, since work is done against external pressure during expansion at constant pressure.',
        explanationTa: 'மேயர் தொடர்பு Cp - Cv = R ஆகும்.'
      },
      {
        id: 'q3',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which law of thermodynamics forms the basis for Hess law of constant heat summation?',
        questionTa: 'ஹெஸ்ஸின் மாறா வெப்பக் கூட்டல் விதிக்கு அடிப்படையாக விளங்கும் வெப்ப இயக்கவியல் விதி எது?',
        optionsEn: ['Zeroth Law', 'First Law', 'Second Law', 'Third Law'],
        optionsTa: ['சுழி விதி', 'முதல் விதி', 'இரண்டாம் விதி', 'மூன்றாம் விதி'],
        correctAnswer: 1,
        explanationEn: 'Hess law is a direct consequence of the First Law of Thermodynamics (Law of Conservation of Energy), since enthalpy is a state function.',
        explanationTa: 'ஹெஸ் விதி வெப்ப இயக்கவியலின் முதல் விதியான ஆற்றல் மாறா விதியின் நேரடி விளைவாகும்.'
      }
    ]
  }
};
'''

with open('src/data/class11ChemVol1.ts', 'a', encoding='utf-8') as f:
    f.write(summaries_and_quizzes)
print("Volume 1 Summaries and Quizzes appended.")
