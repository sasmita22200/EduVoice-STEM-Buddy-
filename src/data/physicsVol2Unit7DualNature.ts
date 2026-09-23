import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_7_DUAL_NATURE: PhysicsChapter = {
  chapterNumber: 7,
  chapterName: 'Dual Nature of Radiation and Matter',
  chapterNameTa: 'கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு',
  unitNumber: 7,
  unitName: 'Dual Nature of Radiation and Matter',
  unitNameTa: 'கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு',
  importance: 'High-Yield (8-10 Marks in Board Exam)',
  overview: 'Explores the particle nature of electromagnetic radiation (Photoelectric effect, Einstein’s photon theory, Photoelectric cells) and the wave nature of material particles (de Broglie matter waves, electron wavelength derivation, Davisson-Germer electron diffraction experiment, and Electron Microscope).',
  overviewTa: 'மின்காந்த கதிர்வீச்சின் துகள் பண்பு (ஒளிமின் விளைவு, ஐன்ஸ்டீனின் போட்டான் கொள்கை, ஒளிமின் செல்கள்) மற்றும் பருப்பொருளின் அலைப்பண்பு (டி பிராய் பருப்பொருள் அலைகள், எலக்ட்ரானின் அலைநீளம், டேவிசன்-ஜெர்மர் எலக்ட்ரான் விளிம்பு விளைவு ஆய்வு மற்றும் எலக்ட்ரான் நுண்ணோக்கி) ஆகியவற்றின் விரிவான விளக்கம்.',
  learningObjectives: [
    'Understand types of electron emission (thermionic, field, photoelectric, secondary).',
    'Analyze Hallwachs and Lenard observations on photoelectric effect.',
    'Formulate the laws of photoelectric emission and identify failures of classical wave theory.',
    'Master Einstein’s Photoelectric Equation and photon characteristics.',
    'Derive the de Broglie wavelength expression for matter particles and accelerated electrons.',
    'Explain the Davisson-Germer experiment and how it confirmed the wave nature of electrons.',
    'Describe the principle, construction, and resolving power of the Electron Microscope.'
  ],
  prerequisites: [
    'Concept of energy and momentum',
    'Structure of atom and conduction electrons in metals',
    'Electromagnetic spectrum (UV and visible light frequencies)'
  ],
  everydayApplications: [
    'Solar panels generating clean renewable electricity via the photovoltaic effect',
    'Automatic streetlights and motion sensors turning on at dusk using photoelectric cells',
    'High-resolution Electron Microscopes imaging viruses, DNA strands, and nano-transistors at atomic scale',
    'Digital camera image sensors (CMOS/CCD) capturing photos using quantum photo-absorption',
    'Security laser tripwires and barcode readers in modern supermarkets'
  ],
  historicalBackground: 'Heinrich Hertz discovered photoelectric sparks in 1887. Philipp Lenard measured kinetic energy of photoelectrons in 1902. In 1905, Albert Einstein revolutionized physics by explaining the photoelectric effect using Max Planck’s light quanta (photons), winning the 1921 Nobel Prize. In 1924, Louis de Broglie hypothesized that if light waves behave as particles, material particles must also behave as waves, experimentally proven by Clinton Davisson and Lester Germer in 1927.',
  scientistsAssociated: [
    'Heinrich Hertz (Discovery of photoelectric sparks)',
    'Wilhelm Hallwachs & Philipp Lenard (Experimental study of photoelectric effect)',
    'Albert Einstein (Photon theory & photoelectric equation - Nobel Prize 1921)',
    'Louis de Broglie (Matter wave hypothesis - Nobel Prize 1929)',
    'Clinton Davisson & Lester Germer (Experimental confirmation of electron waves - Nobel Prize 1937)',
    'Ernst Ruska (Invention of Electron Microscope - Nobel Prize 1986)'
  ],
  topics: [
    {
      id: 'dual-7.1',
      topicNumber: '7.1',
      title: 'Electron Emission and Photoelectric Effect',
      titleTa: 'எலக்ட்ரான் உமிழ்வு மற்றும் ஒளிமின் விளைவு',
      beginnerExplanation: 'Free electrons are trapped inside metals by attractive electrostatic surface barrier forces. When energy greater than the metal’s work function ($\phi_0$) is supplied, electrons are ejected. When this energy is supplied by light of suitable frequency, it is called the Photoelectric Effect.',
      beginnerExplanationTa: 'உலோகப் பரப்பிலுள்ள கட்டுறா எலக்ட்ரான்கள் வெளியேற தேவையான குறைந்தபட்ச ஆற்றல் வெளியேற்று ஆற்றல் ($\phi_0$) எனப்படும். தகுந்த அதிர்வெண் கொண்ட ஒளி படும்போது எலக்ட்ரான்கள் உமிழப்படுவது ஒளிமின் விளைவு எனப்படும்.',
      coreConcepts: [
        'Types of Emission: 1) Thermionic (heat energy), 2) Field/Cold emission (strong electric field $\\sim 10^8$ V/m), 3) Photoelectric (light photons), 4) Secondary emission (high-energy primary electron bombardment).',
        'Work Function ($\\phi_0$): Minimum energy required to liberate an electron from metal surface without giving it kinetic energy (measured in electron-volts eV; Cesium has lowest $\\phi_0 \\approx 2.14$ eV, Platinum highest $\\phi_0 \\approx 5.65$ eV).',
        'Experimental Observations: 1) Photoelectric current is directly proportional to intensity of incident light ($I \\propto \\text{Intensity}$); 2) Stopping potential ($V_0$) and maximum kinetic energy depend linearly on frequency ($\\nu$), completely independent of intensity; 3) Existence of threshold frequency ($\\nu_0$), below which no emission occurs; 4) Instantaneous process ($< 10^{-9}$ s).'
      ],
      definitions: [
        {
          term: 'Work Function (வெளியேற்று ஆற்றல்)',
          termTa: 'வெளியேற்று ஆற்றல்',
          definitionEn: 'The minimum amount of energy required by an electron to just escape from the metal surface against the attractive surface barrier forces: $\\phi_0 = h\\nu_0$.',
          definitionTa: 'உலோகப் பரப்பிலிருந்து எலக்ட்ரான் ஒன்று வெளியேற தேவைப்படும் குறைந்தபட்ச ஆற்றல் வெளியேற்று ஆற்றல் எனப்படும் ($\phi_0 = h\\nu_0$).',
          keyPoints: ['SI Unit: Joule (J), commonly expressed in electron-volts (eV)', '$1\\text{ eV} = 1.6 \\times 10^{-19}\\text{ J}$', 'Purely a material property']
        },
        {
          term: 'Stopping Potential / Cut-off Potential (நிறுத்து மின்னழுத்தம்)',
          termTa: 'நிறுத்து மின்னழுத்தம்',
          definitionEn: 'The minimum negative (retarding) potential applied to the anode plate for which the photoelectric current becomes zero: $e V_0 = K_{max} = \\frac{1}{2}m v_{max}^2$.',
          definitionTa: 'ஒளிமின் மின்னோட்டத்தை பூஜ்ஜியமாக்க நேர்மின்வாய்க்கு அளிக்கப்படும் குறைந்தபட்ச எதிர்க்குறி மின்னழுத்தம் நிறுத்து மின்னழுத்தம் ($V_0$) எனப்படும்.',
          keyPoints: ['Measures the maximum kinetic energy of emitted photoelectrons', 'Directly proportional to frequency of incident light', 'Independent of light intensity']
        }
      ],
      analogies: 'Photoelectric emission is like a coin vending machine: dropping a 10-rupee coin (high frequency photon) dispenses a soda immediately, but dropping a hundred 1-rupee coins (high intensity low frequency) won’t work because each individual coin lacks the threshold value.',
      commonMisconceptions: [
        'Increasing light intensity increases the speed of photoelectrons (False: Intensity increases only the number of photoelectrons per second, not their kinetic energy or stopping potential).'
      ]
    },
    {
      id: 'dual-7.2',
      topicNumber: '7.2',
      title: 'Einstein’s Photoelectric Equation and Photon Theory',
      titleTa: 'ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு மற்றும் போட்டான் கொள்கை',
      beginnerExplanation: 'Einstein proposed that light travels as localized packets of energy called photons ($E = h\nu$). When a photon strikes an electron in a metal, it transfers its entire energy in a 1-to-1 collision: part is used to overcome the work function ($\phi_0$), and the remaining energy appears as maximum kinetic energy of the photoelectron.',
      beginnerExplanationTa: 'ஒளி என்பது போட்டான்கள் எனப்படும் ஆற்றல் பொட்டலங்களாகப் பயணிக்கிறது ($E = h\nu$). ஒரு போட்டான் ஒரு எலக்ட்ரானுடன் மோதி தனது முழு ஆற்றலையும் அளிக்கிறது. அதில் ஒரு பகுதி வெளியேற்று ஆற்றலாகவும் ($\phi_0$), எஞ்சிய பகுதி எலக்ட்ரானின் இயக்க ஆற்றலாகவும் ($K_{max}$) மாறுகிறது.',
      coreConcepts: [
        'Einstein’s Photoelectric Equation: $h\\nu = \\phi_0 + K_{max} = h\\nu_0 + \\frac{1}{2}m v_{max}^2 = h\\nu_0 + e V_0$.',
        'Stopping Potential Equation: $V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\left(\\frac{\\phi_0}{e}\\right)$.',
        'Slope of $V_0$ vs $\\nu$ Graph: The slope is a universal constant $\\frac{h}{e} = 4.14 \\times 10^{-15}\\text{ V}\\cdot\\text{s}$, identical for ALL metals.',
        'Photon Properties: Rest mass of photon is zero; speed is $c = 3 \\times 10^8$ m/s in vacuum; momentum $p = \\frac{E}{c} = \\frac{h}{\\lambda}$; electrically neutral (unaffected by electric and magnetic fields).'
      ],
      definitions: [
        {
          term: 'Photon (போட்டான்)',
          termTa: 'போட்டான்',
          definitionEn: 'A discrete quantum or packet of electromagnetic energy having energy $E = h\\nu$ and momentum $p = h/\\lambda$, moving with the speed of light $c$ in vacuum.',
          definitionTa: 'மின்காந்தக் கதிர்வீச்சின் தனித்துவமான ஆற்றல் பொட்டலம் போட்டான் எனப்படும் ($E = h\nu$, $p = h/\lambda$).',
          keyPoints: ['Rest mass $m_0 = 0$', 'Energy $E = h\nu = hc/\lambda$', 'All photons of a given frequency have identical energy and momentum']
        }
      ],
      analogies: 'A photon is like a bullet of energy: either it has enough punch to knock the electron out of its metal cage, or it doesn’t. You cannot combine multiple weak bullets to do the job of one high-caliber bullet.',
      commonMisconceptions: [
        'Photons have mass when moving (False: photons have zero rest mass, but possess relativistic momentum $p = h/\lambda$ and energy $E = pc$).'
      ]
    },
    {
      id: 'dual-7.3',
      topicNumber: '7.3',
      title: 'de Broglie Matter Waves and Electron Wavelength',
      titleTa: 'டி பிராய் பருப்பொருள் அலைகள் மற்றும் எலக்ட்ரான் அலைநீளம்',
      beginnerExplanation: 'Louis de Broglie reasoned that nature is symmetric: if light radiation (waves) exhibits particle behavior, then material particles (electrons, protons) in motion must also exhibit wave properties called Matter Waves with wavelength $\lambda = h/p$.',
      beginnerExplanationTa: 'இயற்கை சமச்சீர் தன்மை கொண்டது. கதிர்வீச்சு துகள் பண்பைக் கொண்டிருப்பது போல, இயங்கும் பருப்பொருள் துகள்களும் (எலக்ட்ரான், புரோட்டான்) அலைப்பண்பைக் கொண்டிருக்கும் என்று டி பிராய் கூறினார் ($\lambda = h/p$).',
      coreConcepts: [
        'de Broglie Relation: $\\lambda = \\frac{h}{p} = \\frac{h}{mv}$.',
        'Matter Wave Properties: Lighter particles have longer de Broglie wavelengths; faster particles have shorter wavelengths; matter waves are NOT electromagnetic waves (they are associated with any moving mass, charged or uncharged).',
        'Electron Wavelength under Potential Difference $V$: $\\lambda = \\frac{h}{\\sqrt{2m e V}} = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}$.',
        'Macroscopic Objects: Cricket balls have enormous mass ($m \\approx 0.15$ kg), giving wavelength $\\sim 10^{-34}$ m, which is far too microscopic to detect diffraction.'
      ],
      definitions: [
        {
          term: 'de Broglie Wavelength (டி பிராய் அலைநீளம்)',
          termTa: 'டி பிராய் அலைநீளம்',
          definitionEn: 'The wavelength associated with a moving material particle of mass $m$ and velocity $v$, given by $\\lambda = h/(mv)$.',
          definitionTa: 'm நிறையும் v திசைவேகமும் கொண்டு இயங்கும் பருப்பொருள் துகளுடன் தொடர்புடைய அலைநீளம் டி பிராய் அலைநீளம் எனப்படும் ($\lambda = h/(mv)$).',
          keyPoints: ['Inversely proportional to momentum $p$', 'Depends on particle velocity and mass', 'Independent of charge of the particle']
        }
      ],
      analogies: 'A heavy train running on tracks has a de Broglie wavelength trillions of times smaller than a proton, so it travels in a straight line without bending around trees; an ultra-light electron, however, ripples like a wave around atoms.',
      commonMisconceptions: [
        'Matter waves travel at the speed of light (False: matter waves travel at particle velocity $v < c$).'
      ]
    },
    {
      id: 'dual-7.4',
      topicNumber: '7.4',
      title: 'Davisson-Germer Experiment and Electron Microscope',
      titleTa: 'டேவிசன்-ஜெர்மர் ஆய்வு மற்றும் எலக்ட்ரான் நுண்ணோக்கி',
      beginnerExplanation: 'The Davisson-Germer experiment proved the wave nature of electrons by demonstrating that a beam of accelerated electrons scatters off a Nickel crystal, producing a diffraction peak at an accelerating voltage of 54 V and scattering angle of 50°, in exact agreement with de Broglie’s wave theory and Bragg’s X-ray diffraction law.',
      beginnerExplanationTa: 'நிக்கல் படிகத்தின் மீது 54 V மின்னழுத்தத்தால் முடுக்கப்பட்ட எலக்ட்ரான் கற்றை மோதி 50° கோணத்தில் விளிம்பு விளைவு உச்சிப் புள்ளியை உருவாக்குவதன் மூலம் எலக்ட்ரான்களின் அலைப்பண்பை டேவிசன்-ஜெர்மர் ஆய்வு நிரூபித்தது.',
      coreConcepts: [
        'Davisson-Germer Peak: Maximum scattering intensity observed at $V = 54\\text{ V}$ and scattering angle $\\theta = 50^\\circ$.',
        'Bragg’s Law for Crystal Lattice: Glancing angle $\\phi = 90^\\circ - \\theta/2 = 90^\\circ - 25^\\circ = 65^\\circ$. For Nickel spacing $d = 0.91$ Å, $2d \\sin\\phi = 1\\lambda \\implies \\lambda = 2(0.91)\\sin 65^\\circ = 1.65$ Å.',
        'de Broglie Theoretical Value: $\\lambda = \\frac{12.27}{\\sqrt{54}} = \\frac{12.27}{7.348} = 1.67$ Å (Spectacular 99% agreement!).',
        'Electron Microscope: Uses high-speed electrons (wavelength $\\sim 0.004$ nm at $100\\text{ kV}$) focused by magnetic lenses, achieving $100,000\\times$ higher resolving power than optical microscopes.'
      ],
      definitions: [
        {
          term: 'Electron Microscope (எலக்ட்ரான் நுண்ணோக்கி)',
          termTa: 'எலக்ட்ரான் நுண்ணோக்கி',
          definitionEn: 'An advanced microscopic imaging device that utilizes the extremely short de Broglie wavelength of accelerated electrons and electromagnetic lenses to achieve atomic-scale magnifications up to $1,000,000\\times$.',
          definitionTa: 'முடுக்கப்பட்ட எலக்ட்ரான்களின் மிகச்சிறிய டி பிராய் அலைநீளம் மற்றும் மின்காந்த லென்ஸ்களைப் பயன்படுத்தி அணு அளவிலான உருப்பெருக்கத்தை வழங்கும் நுண்ணோக்கி எலக்ட்ரான் நுண்ணோக்கி எனப்படும்.',
          keyPoints: ['Resolving power is inversely proportional to wavelength ($RP \\propto 1/\\lambda$)', 'Operates in high vacuum to prevent electron collision with air molecules']
        }
      ],
      analogies: 'Trying to feel the grooves of a coin with a thick baseball bat is like using visible light (long wavelength); using a sharp needle is like using an electron beam (ultra-short wavelength).',
      commonMisconceptions: [
        'Glass lenses are used in electron microscopes (False: glass absorbs electrons; magnetic and electrostatic fields are used as lenses).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-DUAL-01',
      formula: 'h\\nu = \\phi_0 + K_{max} = h\\nu_0 + \\frac{1}{2}m v_{max}^2 = h\\nu_0 + e V_0',
      meaning: 'Einstein’s Photoelectric Equation relating photon energy, work function, maximum kinetic energy, and stopping potential.',
      meaningTa: 'ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு.',
      variables: [
        { symbol: 'h', name: 'Planck’s constant ($6.626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$)', nameTa: 'பிளாங்க் மாறிலி', siUnit: 'J·s', dimension: '[M^1 L^2 T^{-1}]' },
        { symbol: '\\nu, \\nu_0', name: 'Frequency and Threshold frequency of light', nameTa: 'அதிர்வெண் மற்றும் பயன் தொடக்க அதிர்வெண்', siUnit: 'Hz or s⁻¹', dimension: '[M^0 L^0 T^{-1}]' },
        { symbol: '\\phi_0', name: 'Work function of the metal', nameTa: 'வெளியேற்று ஆற்றல்', siUnit: 'J or eV', dimension: '[M^1 L^2 T^{-2}]' },
        { symbol: 'V_0', name: 'Stopping potential', nameTa: 'நிறுத்து மின்னழுத்தம்', siUnit: 'V', dimension: '[M^1 L^2 T^{-3} I^{-1}]' }
      ],
      siUnit: 'Joule (J) and Volt (V)',
      dimension: '[M^1 L^2 T^{-2}]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Incoming Photon (h·nu) = Work Function (phi0) + Max Kinetic (e·V0)'
    },
    {
      id: 'F-DUAL-02',
      formula: '\\lambda = \\frac{h}{p} = \\frac{h}{mv} = \\frac{h}{\\sqrt{2m K}}',
      meaning: 'de Broglie wavelength of a matter particle of mass m, velocity v, and kinetic energy K.',
      meaningTa: 'டி பிராய் பருப்பொருள் அலைநீளச் சமன்பாடு.',
      variables: [
        { symbol: '\\lambda', name: 'de Broglie wavelength', nameTa: 'டி பிராய் அலைநீளம்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'p', name: 'Linear momentum ($p = mv$)', nameTa: 'நேர்க்கோட்டு உந்தம்', siUnit: 'kg·m/s', dimension: '[M^1 L^1 T^{-1}]' },
        { symbol: 'K', name: 'Kinetic energy of particle', nameTa: 'இயக்க ஆற்றல்', siUnit: 'J', dimension: '[M^1 L^2 T^{-2}]' }
      ],
      siUnit: 'm',
      dimension: '[M^0 L^1 T^0]',
      category: 'Fundamental',
      memoryShortcut: 'Lambda = h / p = h / (m · v)'
    },
    {
      id: 'F-DUAL-03',
      formula: '\\lambda_e = \\frac{h}{\\sqrt{2m e V}} = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}',
      meaning: 'de Broglie wavelength of an electron accelerated through an electric potential difference V volts.',
      meaningTa: 'V மின்னழுத்த வேறுபாட்டால் முடுக்கப்பட்ட எலக்ட்ரானின் டி பிராய் அலைநீளம்.',
      variables: [
        { symbol: 'V', name: 'Accelerating potential difference', nameTa: 'முடுக்கும் மின்னழுத்தம்', siUnit: 'V', dimension: '[M^1 L^2 T^{-3} I^{-1}]' },
        { symbol: 'e', name: 'Electronic charge ($1.6 \\times 10^{-19}\\text{ C}$)', nameTa: 'எலக்ட்ரான் மின்னூட்டம்', siUnit: 'C', dimension: '[M^0 L^0 T^1 I^1]' },
        { symbol: 'm', name: 'Electron mass ($9.11 \\times 10^{-31}\\text{ kg}$)', nameTa: 'எலக்ட்ரான் நிறை', siUnit: 'kg', dimension: '[M^1 L^0 T^0]' }
      ],
      siUnit: 'm (or nm / Å)',
      dimension: '[M^0 L^1 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Lambda_electron = 12.27 / sqrt(V) Angstroms'
    }
  ],
  derivations: [
    {
      id: 'DER-DUAL-01',
      title: 'Derivation of de Broglie Wavelength of an Accelerated Electron',
      titleTa: 'முடுக்கப்பட்ட எலக்ட்ரானின் டி பிராய் அலைநீளத்திற்கான சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive the mathematical expression for the de Broglie wavelength of an electron accelerated from rest through a potential difference V: λ = h / √(2meV) = 1.227 / √V nm.',
      given: [
        'An electron of rest mass m and charge e accelerated from rest through a potential difference V.',
        'Final velocity attained by the electron is v.',
        'Planck’s constant is h.'
      ],
      toProve: '\\lambda = \\frac{h}{\\sqrt{2m e V}} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}',
      steps: [
        {
          stepNumber: 1,
          description: 'The work done on the electron by the electric field equals its acquired kinetic energy K.',
          descriptionTa: 'மின்புலத்தால் எலக்ட்ரான் மீது செய்யப்பட்ட வேலை அதன் இயக்க ஆற்றலுக்குச் சமம்.',
          equation: 'K = e V = \\frac{1}{2}m v^2 \\quad \\text{--- (1)}',
          note: 'Work-energy theorem applied to electrostatic acceleration.'
        },
        {
          stepNumber: 2,
          description: 'Express linear momentum p in terms of kinetic energy K: p = mv, so p² = m²v² = 2m(½mv²) = 2mK.',
          descriptionTa: 'நேர்க்கோட்டு உந்தம் p மற்றும் இயக்க ஆற்றல் K இடையேயான தொடர்பு.',
          equation: 'p = \\sqrt{2m K} = \\sqrt{2m e V} \\quad \\text{--- (2)}',
          note: 'Momentum p = √(2meV).'
        },
        {
          stepNumber: 3,
          description: 'Substitute momentum p into de Broglie’s fundamental wavelength relation λ = h/p.',
          descriptionTa: 'டி பிராய் அலைநீளச் சமன்பாட்டில் உந்தம் p-ஐப் பிரதியிடுக.',
          equation: '\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2m e V}} \\quad \\text{--- (3)}',
          note: 'General formula for any charged particle with charge q accelerated through V.'
        },
        {
          stepNumber: 4,
          description: 'Substitute standard constants: h = 6.626 × 10⁻³⁴ J·s, m = 9.11 × 10⁻³¹ kg, e = 1.602 × 10⁻¹⁹ C.',
          descriptionTa: 'இயற்பியல் மாறிலிகளின் மதிப்புகளைப் பிரதியிட்டு எளிய சமன்பாட்டைப் பெறுக.',
          equation: '\\lambda = \\frac{6.626 \\times 10^{-34}}{\\sqrt{2 \\times 9.11 \\times 10^{-31} \\times 1.602 \\times 10^{-19} \\times V}} = \\frac{1.227 \\times 10^{-9}}{\\sqrt{V}}\\text{ m} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}',
          note: 'For 100 V accelerating potential, λ = 12.27/√100 = 1.227 Å (X-ray region).'
        }
      ],
      finalEquation: '\\lambda = \\frac{h}{\\sqrt{2m e V}} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA} = \\frac{1.227}{\\sqrt{V}}\\text{ nm}',
      assumptions: [
        'Non-relativistic speeds (accelerating voltage V < 100 kV so that electron speed v << c).',
        'Electron starts from rest at zero potential.'
      ],
      physicalMeaning: 'Proves that as accelerating voltage increases, electron wavelength decreases inversely as the square root of voltage, enabling electron microscopes to resolve sub-nanometer atomic structures.',
      physicalMeaningTa: 'மின்னழுத்தம் அதிகரிக்க அதிகரிக்க எலக்ட்ரானின் அலைநீளம் குறைகிறது என்பதை நிரூபிக்கிறது. இது எலக்ட்ரான் நுண்ணோக்கி அணு அளவிலான அமைப்புகளைத் துல்லியமாகப் படம்பிடிக்க உதவுகிறது.',
      commonMistakes: [
        'Writing 1.227 Å instead of 12.27 Å (or 1.227 nm).',
        'Confusing electronic charge e with Euler’s constant.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-DUAL-02',
      title: 'Derivation and Explanation of Einstein’s Photoelectric Equation',
      titleTa: 'ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு விளக்கம் மற்றும் தருவித்தல்',
      aim: 'To derive and explain Einstein’s photoelectric equation hν = hν0 + eV0 and account for all experimental laws.',
      given: [
        'A photon of energy E = hν incident on a clean photosensitive metal surface of work function ϕ0 = hν0.',
        'Maximum kinetic energy of ejected photoelectrons is Kmax = ½mvmax² = eV0.'
      ],
      toProve: 'h\\nu = h\\nu_0 + \\frac{1}{2}m v_{max}^2 \\quad \\implies \\quad V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\left(\\frac{\\phi_0}{e}\\right)',
      steps: [
        {
          stepNumber: 1,
          description: 'By conservation of energy in a single photon-electron collision, total photon energy hν is split into two parts: work function ϕ0 and maximum kinetic energy Kmax.',
          descriptionTa: 'ஆற்றல் மாறா விதியின்படி போட்டான் ஆற்றல் வெளியேற்று ஆற்றலாகவும் இயக்க ஆற்றலாகவும் பிரிகிறது.',
          equation: 'h\\nu = \\phi_0 + K_{max} \\quad \\text{--- (1)}',
          note: 'Energy is conserved instantaneously without time delay.'
        },
        {
          stepNumber: 2,
          description: 'Express work function in terms of threshold frequency ν0: ϕ0 = hν0.',
          descriptionTa: 'பயன்தொடக்க அதிர்வெண் ν0 கொண்டு வெளியேற்று ஆற்றலை ϕ0 = hν0 என எழுதுக.',
          equation: 'K_{max} = \\frac{1}{2}m v_{max}^2 = h\\nu - h\\nu_0 = h(\\nu - \\nu_0) \\quad \\text{--- (2)}',
          note: 'If ν < ν0, Kmax becomes negative, which is physically impossible, explaining threshold frequency.'
        },
        {
          stepNumber: 3,
          description: 'Substitute maximum kinetic energy in terms of stopping potential: Kmax = e V0.',
          descriptionTa: 'நிறுத்து மின்னழுத்தம் V0 கொண்டு Kmax = e V0 எனப் பிரதியிடுக.',
          equation: 'e V_0 = h\\nu - \\phi_0 \\implies V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e} \\quad \\text{--- (3)}',
          note: 'This is a straight-line equation y = mx + c with slope m = h/e and Y-intercept c = -ϕ0/e.'
        }
      ],
      finalEquation: 'h\\nu = h\\nu_0 + \\frac{1}{2}m v_{max}^2 \\quad \\text{and} \\quad V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e}',
      assumptions: [
        'Light is absorbed in discrete quanta (photons).',
        'One photon interacts with exactly one electron (1-to-1 interaction).'
      ],
      physicalMeaning: 'Completely accounts for: 1) Existence of threshold frequency; 2) Linear dependence of stopping potential on frequency; 3) Independence of kinetic energy from intensity; 4) Instantaneous emission (< 10⁻⁹ s).',
      physicalMeaningTa: 'பயன்தொடக்க அதிர்வெண் இருத்தல், நிறுத்து மின்னழுத்தம் அதிர்வெண்ணைச் சார்ந்திருத்தல் மற்றும் ஒளிமின் உமிழ்வு உடனடியாக நடத்தல் ஆகிய அனைத்து விதிகளையும் முழுமையாக விளக்குகிறது.',
      commonMistakes: [
        'Claiming intensity increases electron energy (Intensity only increases photon count per second, not individual photon energy hν).'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'Calculation of de Broglie Wavelength of an Accelerated Electron',
      question: 'Calculate the de Broglie wavelength of an electron accelerated through a potential difference of 100 V (Planck’s constant h = 6.63 × 10⁻³⁴ J·s, electron mass m = 9.1 × 10⁻³¹ kg, e = 1.6 × 10⁻¹⁹ C).',
      questionTa: '100 V மின்னழுத்த வேறுபாட்டால் முடுக்கப்பட்ட எலக்ட்ரானின் டி பிராய் அலைநீளத்தைக் காண்க.',
      level: 'Easy',
      given: { 'V': '100 V', 'h': '6.63 × 10⁻³⁴ J·s', 'm': '9.1 × 10⁻³¹ kg', 'e': '1.6 × 10⁻¹⁹ C' },
      required: 'de Broglie wavelength λ',
      formulaUsed: '\\lambda = \\frac{1.227}{\\sqrt{V}}\\text{ nm} = \\frac{12.27}{\\sqrt{V}}\\text{ \\AA}',
      unitConversions: 'Direct formula in Angstroms or nanometers.',
      steps: [
        {
          stepNumber: 1,
          description: 'Apply shortcut formula λ = 1.227 / √V nm.',
          math: '\\lambda = \\frac{1.227}{\\sqrt{100}} = \\frac{1.227}{10} = 0.1227 \\text{ nm} = 1.227 \\text{ \\AA} = 1.227 \\times 10^{-10} \\text{ m}'
        }
      ],
      finalAnswer: '0.1227 nm (or 1.227 Å / 1.227 × 10⁻¹⁰ m)',
      siUnit: 'm (or nm)',
      shortcutMethod: 'λ = 12.27 / √100 = 12.27 / 10 = 1.227 Å directly!',
      commonErrors: 'Forgetting the square root on the accelerating voltage V.',
      examTip: 'State the final answer in both nm (0.1227 nm) and SI units (1.227 × 10⁻¹⁰ m).'
    },
    {
      title: 'Photoelectric Work Function and Stopping Potential',
      question: 'The work function of Cesium is 2.14 eV. If light of frequency 6.0 × 10¹⁴ Hz is incident on its surface, calculate: (i) the energy of the incident photon in eV, (ii) the maximum kinetic energy of photoelectrons in eV, and (iii) the stopping potential V0 (Given h = 6.63 × 10⁻³⁴ J·s, 1 eV = 1.6 × 10⁻¹⁹ J).',
      questionTa: 'சீசியத்தின் வெளியேற்று ஆற்றல் 2.14 eV. அதன் பரப்பில் 6.0 × 10¹⁴ Hz அதிர்வெண் கொண்ட ஒளி பட்டால்: (i) படும் போட்டானின் ஆற்றல் (eV-ல்), (ii) எலக்ட்ரானின் பெரும இயக்க ஆற்றல் (eV-ல்), (iii) நிறுத்து மின்னழுத்தம் V0 ஆகியவற்றைக் காண்க.',
      level: 'Medium',
      given: { 'ϕ0': '2.14 eV', 'ν': '6.0 × 10¹⁴ Hz', 'h': '6.63 × 10⁻³⁴ J·s', '1 eV': '1.6 × 10⁻¹⁹ J' },
      required: 'E (in eV), Kmax (in eV), and V0 (in Volts)',
      formulaUsed: 'E = h\\nu, \\quad K_{max} = E - \\phi_0, \\quad V_0 = K_{max}/e',
      unitConversions: 'Convert Joules to eV by dividing by 1.6 × 10⁻¹⁹.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate photon energy E = hν in Joules, then convert to eV.',
          math: 'E = 6.63 \\times 10^{-34} \\times 6.0 \\times 10^{14} = 3.978 \\times 10^{-19} \\text{ J} = \\frac{3.978 \\times 10^{-19}}{1.6 \\times 10^{-19}} = 2.486 \\text{ eV}'
        },
        {
          stepNumber: 2,
          description: 'Calculate maximum kinetic energy Kmax = E - ϕ0.',
          math: 'K_{max} = 2.486 \\text{ eV} - 2.14 \\text{ eV} = 0.346 \\text{ eV}'
        },
        {
          stepNumber: 3,
          description: 'Calculate stopping potential V0 = Kmax / e.',
          math: 'V_0 = \\frac{0.346 \\text{ eV}}{e} = 0.346 \\text{ V}'
        }
      ],
      finalAnswer: 'Photon Energy = 2.486 eV, Max Kinetic Energy = 0.346 eV, Stopping Potential = 0.346 V',
      siUnit: 'eV and Volts (V)',
      shortcutMethod: 'E(eV) = 4.14 × 10⁻¹⁵ × 6.0 × 10¹⁴ = 2.484 eV; Kmax = 2.484 - 2.14 = 0.344 eV; V0 = 0.344 V.',
      commonErrors: 'Subtracting Joules from eV directly without unit conversion.',
      examTip: 'Remember that when Kmax is in eV, stopping potential V0 has the exact same numerical value in Volts!'
    },
    {
      title: 'Threshold Wavelength and Stopping Potential under Variable Wavelength',
      question: 'When light of wavelength 400 nm falls on a metal, photoelectrons are emitted with a stopping potential of 1.1 V. (a) Determine the work function ϕ0 of the metal in eV. (b) Find the threshold wavelength λ0 for the metal. (c) What will be the stopping potential if the wavelength of incident light is reduced to 300 nm? (hc = 1240 eV·nm).',
      questionTa: '400 nm அலைநீள ஒளி படும்போது நிறுத்து மின்னழுத்தம் 1.1 V. (a) உலோகத்தின் வெளியேற்று ஆற்றல் ϕ0 (eV-ல்), (b) பயன்தொடக்க அலைநீளம் λ0, (c) அலைநீளம் 300 nm ஆகக் குறைக்கப்பட்டால் புதிய நிறுத்து மின்னழுத்தம் ஆகியவற்றைக் காண்க.',
      level: 'Exam-Level',
      given: { 'λ1': '400 nm', 'V01': '1.1 V', 'hc': '1240 eV·nm', 'λ2': '300 nm' },
      required: 'ϕ0, λ0, and V02',
      formulaUsed: 'E = \\frac{hc}{\\lambda}, \\quad \\phi_0 = E_1 - e V_{01}, \\quad \\lambda_0 = \\frac{hc}{\\phi_0}, \\quad e V_{02} = E_2 - \\phi_0',
      unitConversions: 'Use hc = 1240 eV·nm for lightning fast calculations.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate incident energy E1 for λ1 = 400 nm: E1 = 1240 / 400 = 3.10 eV.',
          math: 'E_1 = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{400 \\text{ nm}} = 3.10 \\text{ eV}'
        },
        {
          stepNumber: 2,
          description: 'Calculate work function ϕ0 = E1 - eV01 = 3.10 eV - 1.10 eV = 2.00 eV.',
          math: '\\phi_0 = 3.10 \\text{ eV} - 1.10 \\text{ eV} = 2.00 \\text{ eV}'
        },
        {
          stepNumber: 3,
          description: 'Calculate threshold wavelength λ0 = hc / ϕ0 = 1240 / 2.00 = 620 nm.',
          math: '\\lambda_0 = \\frac{1240 \\text{ eV}\\cdot\\text{nm}}{2.00 \\text{ eV}} = 620 \\text{ nm}'
        },
        {
          stepNumber: 4,
          description: 'For λ2 = 300 nm: E2 = 1240 / 300 = 4.133 eV. New stopping potential V02 = (E2 - ϕ0) / e = 4.133 - 2.00 = 2.133 V.',
          math: 'V_{02} = 4.133 \\text{ V} - 2.00 \\text{ V} = 2.133 \\text{ V}'
        }
      ],
      finalAnswer: 'Work function ϕ0 = 2.00 eV, Threshold wavelength λ0 = 620 nm, New Stopping Potential V02 = 2.133 V',
      siUnit: 'eV, nm, and Volts (V)',
      shortcutMethod: 'E1 = 3.1 eV → ϕ0 = 3.1 - 1.1 = 2.0 eV → λ0 = 1240/2 = 620 nm; E2 = 4.133 eV → V02 = 4.133 - 2.0 = 2.133 V.',
      commonErrors: 'Using λ0 = hc · ϕ0 instead of hc / ϕ0.',
      examTip: 'State threshold wavelength in nanometers (620 nm) and Angstroms (6200 Å).'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-DUAL-01',
      name: 'Experimental Setup for Photoelectric Effect (Hallwachs & Lenard)',
      nameTa: 'ஒளிமின் விளைவுக்கான ஆய்வு அமைப்பு வரைபடம்',
      purpose: 'Shows the evacuated quartz bulb with photosensitive emitter plate C and collector plate A connected to a commutator, voltmeter, and microammeter.',
      components: ['Evacuated glass/quartz bulb', 'Photosensitive cathode (C)', 'Anode collector (A)', 'Quartz window (W)', 'Commutator for reversing potential', 'Microammeter (μA)', 'Variable DC power source'],
      labelsEn: ['Quartz Window (W)', 'Photosensitive Emitter (C)', 'Collector Anode (A)', 'Incident UV Light Beam', 'Emitted Photoelectrons', 'Commutator', 'Microammeter'],
      labelsTa: ['குவார்ட்ஸ் சாளரம்', 'உமிழ்ப்பான் (C)', 'ஏற்பான் (A)', 'படும் புற ஊதாக் கதிர்', 'ஒளி எலக்ட்ரான்கள்', 'திசைமாற்றி', 'நுண் அம்மீட்டர்'],
      stepByStepExplanation: [
        'Draw an evacuated glass tube with a small top quartz window.',
        'Place curved photosensitive cathode C on the left and collector plate A on the right.',
        'Show incident light rays entering through the quartz window striking cathode C.',
        'Draw small dotted electron trajectories with arrows flying towards collector plate A.',
        'Complete the external circuit showing commutator, rheostat, battery, voltmeter, and microammeter.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Forgetting the commutator which allows applying both positive and retarding negative potentials to anode A.'],
      aiImagePrompt: 'Scientific textbook vector illustration of the Hallwachs-Lenard photoelectric effect apparatus. Evacuated glass tube with quartz window, ultraviolet light beam ejecting blue glowing electrons from cathode to anode, connected to external circuit with microammeter and battery commutator, clean white background.'
    },
    {
      id: 'DIAG-DUAL-02',
      name: 'Davisson and Germer Electron Diffraction Experiment Setup',
      nameTa: 'டேவிசன்-ஜெர்மர் எலக்ட்ரான் விளிம்பு விளைவு ஆய்வு வரைபடம்',
      purpose: 'Illustrates the electron gun, accelerating anodes, target Nickel crystal, and circular movable detector used to discover electron diffraction.',
      components: ['Electron gun with tungsten filament', 'Accelerating high-voltage anodes', 'Collimator slit', 'Nickel single crystal target', 'Movable circular ionization detector with galvanometer'],
      labelsEn: ['Tungsten Filament (F)', 'High Voltage Accelerating Anodes', 'Collimated Electron Beam', 'Nickel Crystal Target', 'Scattered Electron Beam', 'Circular Scale (θ)', 'Electron Detector / Galvanometer'],
      labelsTa: ['டங்ஸ்டன் இழை', 'முடுக்கும் நேர்மின்வாய்கள்', 'எலக்ட்ரான் கற்றை', 'நிக்கல் படிகம்', 'சிதறடிக்கப்பட்ட எலக்ட்ரான்கள்', 'வட்ட அளவுகோல் (θ)', 'கால்வனா Bernardo எலக்ட்ரான் உணரி'],
      stepByStepExplanation: [
        'Draw the electron gun on the left with heated tungsten filament and low voltage battery.',
        'Draw cylindrical accelerating anodes connected to variable high voltage supply.',
        'Show narrow electron beam striking the flat face of a Nickel crystal at the center.',
        'Draw scattered electron beam reaching a movable detector mounted on a circular angular scale.',
        'Show the entire apparatus enclosed inside an evacuated vacuum chamber.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Omitting the circular scale that measures scattering angle θ from 0° to 90°.'],
      aiImagePrompt: 'Textbook vector diagram of Davisson-Germer electron diffraction experiment. Electron gun firing green collimated beam onto a nickel crystal lattice, scattered wave electrons captured by a movable detector on a circular protractor scale, clean educational graphic on white background.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-DUAL-01',
      name: 'Stopping Potential (V0) vs Frequency (ν) of Incident Light',
      nameTa: 'நிறுத்து மின்னழுத்தம் (V0) மற்றும் அதிர்வெண் (ν) வரைபடம்',
      xAxis: 'Frequency of incident light (ν) in 10¹⁴ Hz',
      yAxis: 'Stopping Potential (V0) in Volts',
      units: 'Hz on X-axis, V on Y-axis',
      shape: 'Straight line starting from positive X-intercept (ν0) with constant positive slope',
      importantPoints: [
        'X-intercept equals the Threshold Frequency (ν0).',
        'Slope of the line is a universal constant: Slope = h / e ≈ 4.14 × 10⁻¹⁵ V·s.',
        'Y-intercept (extrapolated downward) gives the work function divided by charge: -ϕ0 / e.',
        'Curves for different metals (e.g., Cesium vs Platinum) are parallel straight lines with the exact same slope h/e.'
      ],
      physicalMeaning: 'Proves Einstein’s photoelectric equation V0 = (h/e)ν - (ϕ0/e). The slope enables direct experimental measurement of Planck’s constant h.',
      mathematicalRelationship: 'V_0 = \\left(\\frac{h}{e}\\right)\\nu - \\frac{\\phi_0}{e} \\quad (y = mx + c)',
      howToDrawInExam: 'Draw X-axis (frequency) and Y-axis (stopping potential). Draw a straight line cutting the positive X-axis at ν0. Mark slope as h/e and Y-intercept as -ϕ0/e.',
      commonMistakes: ['Starting the line from the origin (0,0) instead of the threshold frequency ν0 on the positive X-axis.'],
      aiGraphPrompt: 'Scientifically accurate graph of stopping potential (V0) vs frequency of incident light (ν) for two metals (Cesium and Copper). Parallel straight lines intersecting X-axis at threshold frequencies ν01 and ν02 with identical slope h/e, clean white background, clear black axes.'
    }
  ],
  experiments: [
    {
      id: 'EXP-DUAL-01',
      name: 'Verification of Photoelectric Laws and Determination of Planck’s Constant',
      nameTa: 'ஒளிமின் விளைவு விதிகளைச் சரிபார்த்தல் மற்றும் பிளாங்க் மாறிலியைக் காணுதல்',
      apparatus: ['Photoelectric cell setup', 'Monochromatic color filters (Blue 450nm, Green 520nm, Yellow 589nm, Red 650nm)', 'Regulated variable DC power supply', 'Sensitive digital microammeter and voltmeter'],
      principle: 'By measuring the stopping potential (V0) for different known frequencies (ν) of light, the slope of V0 vs ν gives h/e, allowing determination of Planck’s constant h = e × Slope.',
      principleTa: 'வெவ்வேறு அதிர்வெண் கொண்ட ஒளிகளுக்கு நிறுத்து மின்னழுத்தத்தை (V0) அளவிட்டு, V0 vs ν வரைபடத்தின் சாய்விலிருந்து பிளாங்க் மாறிலி h = e × சாய்வு எனக் கணக்கிடப்படுகிறது.',
      procedure: [
        'Illuminate the phototube with blue light filter of known frequency ν1.',
        'Gradually increase the negative (retarding) anode voltage until photoelectric current becomes exactly zero; record stopping potential V01.',
        'Repeat the observation for green, yellow, and red color filters to obtain pairs of (ν, V0).',
        'Plot a graph of V0 on Y-axis against ν on X-axis.',
        'Calculate slope of the best-fit straight line and compute h = e · Slope.'
      ],
      observation: 'Measured slope = 4.12 × 10⁻¹⁵ V·s. Multiplying by e = 1.6 × 10⁻¹⁹ C gives h = 6.59 × 10⁻³⁴ J·s (close to standard 6.63 × 10⁻³⁴ J·s).',
      result: 'The experimental value of Planck’s constant h = 6.59 × 10⁻³⁴ J·s (Percentage error ≈ 0.6%).',
      precautions: [
        'Extraneous room light must be completely shielded from entering the photocell.',
        'The photocell anode should not be exposed to excessive intense light to prevent surface oxidation.'
      ],
      realLifeImportance: 'Forms the operational foundation of photodetectors, night-vision devices, and photovoltaic solar power grids.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Dual Nature: When Light Acts as Particles & Matter Acts as Waves',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Mystery of the Solar Panel',
        explanationEn: 'When sunlight hits a rooftop solar panel, millions of electrons instantly leap across the circuit without waiting a single millisecond. Wave theory said electrons should take hours to absorb enough continuous energy. Why was classical physics so wrong? Because light delivers its punch in discrete photon packets!',
        explanationTa: 'சூரிய ஒளி படும்போது கணப்பொழுதில் எலக்ட்ரான்கள் வெளிப்பட்டு மின்சாரத்தை உருவாக்குகின்றன. அலைக்கொள்கையால் இதை விளக்க முடியவில்லை. ஐன்ஸ்டீன் ஒளியை போட்டான்கள் எனப்படும் ஆற்றல் பொட்டலங்களாக விளக்கியதன் மூலம் இந்த மர்மம் தீர்க்கப்பட்டது!',
        animationDescription: '3D photon bullets striking metal surface and instantly knocking out glowing photoelectrons in one-to-one elastic quantum collisions.',
        keywordsDisplayed: ['Photoelectric Effect', 'Photon Energy E = hν', 'Work Function ϕ0', 'Instantaneous Emission (< 10⁻⁹ s)'],
        interactiveQuestion: {
          question: 'If the frequency of incident light is below the threshold frequency (ν < ν0), what happens if we increase the light intensity by 1000 times?',
          questionTa: 'படும் ஒளியின் அதிர்வெண் பயன்தொடக்க அதிர்வெண்ணை விட குறைவாக உள்ளபோது (ν < ν0), ஒளிச்செறிவை 1000 மடங்கு உயர்த்தினால் என்ன நிகழும்?',
          options: [
            'Zero electrons will be emitted',
            '1000 times more electrons will be emitted',
            'Electrons will be emitted after a 10-minute delay',
            'Electrons will be emitted with ultra-high velocity'
          ],
          optionsTa: [
            'எந்தவொரு எலக்ட்ரானும் உமிழப்படாது (பூஜ்ஜியம்)',
            '1000 மடங்கு அதிக எலக்ட்ரான்கள் உமிழப்படும்',
            '10 நிமிட தாமதத்திற்குப் பிறகு உமிழப்படும்',
            'அதிக திசைவேகத்துடன் உமிழப்படும்'
          ],
          correctIndex: 0,
          explanation: 'No emission occurs below threshold frequency regardless of intensity, because each individual photon lacks the minimum work function energy ϕ0.'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Einstein’s Photoelectric Equation',
        explanationEn: 'Einstein wrote the golden equation: hν = ϕ0 + eV0. The energy of an incoming photon pays the metal’s exit toll (work function ϕ0), and whatever is left over becomes the electron’s kinetic energy (eV0).',
        explanationTa: 'ஐன்ஸ்டீனின் பொன் சமன்பாடு: hν = ϕ0 + eV0. படும் போட்டான் ஆற்றல் வெளியேற்று ஆற்றலைக் கழித்த பின் மீதமுள்ள ஆற்றலை எலக்ட்ரானின் இயக்க ஆற்றலாக மாற்றுகிறது.',
        animationDescription: '3D glowing bar of photon energy split into two compartments: bottom base toll ϕ0 and rising top slider showing kinetic energy eV0.',
        keywordsDisplayed: ['Einstein’s Equation', 'hν = ϕ0 + Kmax', 'Stopping Potential V0', 'Slope = h/e'],
        interactiveQuestion: {
          question: 'The slope of the Stopping Potential (V0) versus Frequency (ν) graph is equal to:',
          questionTa: 'நிறுத்து மின்னழுத்தம் (V0) மற்றும் அதிர்வெண் (ν) வரைபடத்தின் சாய்வு எதற்குச் சமம்?',
          options: ['h / e', 'h · e', 'e / h', 'ϕ0 / h'],
          optionsTa: ['h / e', 'h · e', 'e / h', 'ϕ0 / h'],
          correctIndex: 0,
          explanation: 'Since V0 = (h/e)ν - (ϕ0/e), the equation of the line y = mx + c has a slope m = h/e.'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Matter Waves: Louis de Broglie’s Symmetry',
        explanationEn: 'In 1924, Louis de Broglie asked: If light waves act as particle photons, shouldn’t moving particles like electrons act as waves? His equation λ = h/p = 12.27/√V Å showed that a 100V electron has a wavelength comparable to X-rays!',
        explanationTa: '1924-ல் லூயிஸ் டி பிராய் இயங்கும் எலக்ட்ரான்களும் அலைப்பண்பைக் கொண்டிருக்கும் என்று கூறினார் (λ = h/p). 100V மின்னழுத்தத்தால் முடுக்கப்பட்ட எலக்ட்ரான் X-கதிர் போன்ற அலைநீளத்தைப் பெறுகிறது.',
        animationDescription: '3D speeding electron morphing into a surrounding undulating sinusoidal matter wave envelope as it passes through a crystalline grid.',
        keywordsDisplayed: ['Matter Waves', 'de Broglie Wavelength λ = h/mv', 'Electron λ = 12.27/√V Å', 'Davisson-Germer Confirmation'],
        interactiveQuestion: {
          question: 'If the accelerating voltage of an electron is increased by 4 times (from 25 V to 100 V), its de Broglie wavelength will:',
          questionTa: 'ஒரு எலக்ட்ரானின் முடுக்கும் மின்னழுத்தம் 4 மடங்கு உயர்த்தப்பட்டால் (25 V இலிருந்து 100 V), அதன் டி பிராய் அலைநீளம்:',
          options: ['Be halved (λ/2)', 'Double (2λ)', 'Become 4 times larger', 'Remain the same'],
          optionsTa: ['பாதியாகக் குறையும் (λ/2)', 'இருமடங்காகும் (2λ)', '4 மடங்கு அதிகரிக்கும்', 'மாறாது'],
          correctIndex: 0,
          explanation: 'Since λ ∝ 1/√V, increasing V by 4 times reduces wavelength by √4 = 2 (halved).'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Application: The Superpower Electron Microscope',
        explanationEn: 'Because electrons can be accelerated to wavelengths 100,000 times shorter than visible light, an electron microscope can resolve tiny viruses and individual atomic columns using magnetic focusing lenses!',
        explanationTa: 'எலக்ட்ரான்களின் அலைநீளம் கண்ணுறு ஒளியை விட 100,000 மடங்கு சிறியதாக இருப்பதால், எலக்ட்ரான் நுண்ணோக்கி வைரஸ்கள் மற்றும் அணு அமைப்புகளைத் துல்லியமாகப் படம்பிடிக்கிறது.',
        animationDescription: '3D cutaway of an Electron Microscope showing magnetic coils focusing an electron beam down to atomic lattice resolution.',
        keywordsDisplayed: ['Electron Microscope', 'High Resolving Power (RP ∝ 1/λ)', 'Magnetic Lenses', 'Sub-Nanometer Imaging'],
        interactiveQuestion: {
          question: 'Why does an Electron Microscope have vastly superior resolving power compared to an Optical Microscope?',
          questionTa: 'ஒளியியல் நுண்ணோக்கியை விட எலக்ட்ரான் நுண்ணோக்கி அதிக பிரிதிறனைக் கொண்டிருக்கக் காரணம் என்ன?',
          options: [
            'Electrons have an extremely small de Broglie wavelength compared to light',
            'Electrons move at speeds greater than light',
            'Glass lenses inside electron microscopes are more transparent',
            'Electrons possess positive charge'
          ],
          optionsTa: [
            'ஒளியை விட எலக்ட்ரான்கள் மிகச்சிறிய டி பிராய் அலைநீளத்தைக் கொண்டுள்ளன',
            'எலக்ட்ரான்கள் ஒளியை விட அதிக வேகத்தில் செல்கின்றன',
            'கண்ணாடி லென்ஸ்கள் அதிக ஒளிபுகும் தன்மை கொண்டவை',
            'எலக்ட்ரான்கள் நேர்மின்னூட்டம் கொண்டவை'
          ],
          correctIndex: 0,
          explanation: 'Resolving power is inversely proportional to wavelength. The ultra-short de Broglie wavelength of accelerated electrons yields ultra-high resolution.'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 220,
    scriptEn: 'Welcome to Unit 7 Dual Nature of Radiation and Matter! Here we witness the bridge between classical and quantum physics. We explore the Photoelectric Effect, where light behaves as particle photons, and de Broglie’s matter wave hypothesis, where material electrons exhibit wave properties. We verify these concepts through Einstein’s photoelectric equation, Davisson-Germer diffraction, and the revolutionary Electron Microscope.',
    scriptTa: 'அலகு 7 கதிர்வீச்சு மற்றும் பருப்பொருளின் இருமைப் பண்பு பகுதிக்கு உங்களை வரவேற்கிறோம்! இப்பாடத்தில் ஒளியின் துகள் பண்பான ஒளிமின் விளைவையும், பருப்பொருளின் அலைப்பண்பான டி பிராய் பருப்பொருள் அலைகளையும் கற்கிறோம். ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு, டேவிசன்-ஜெர்மர் ஆய்வு மற்றும் எலக்ட்ரான் நுண்ணோக்கியின் செயல்பாடுகளை முழுமையாகப் பயில்வோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 7 Dual Nature-ல் நாம் Photoelectric Effect-ஐப் படிக்கிறோம். Einstein’s Photoelectric Equation h·nu = phi0 + e·V0 எப்படி photon theory-ஐ விளக்குகிறது என்பதையும், Louis de Broglie-ன் Matter Waves lambda = h/p மற்றும் electron wavelength lambda = 12.27/sqrt(V) Angstroms எப்படி Davisson-Germer experiment மூலம் நிரூபிக்கப்பட்டது என்பதையும் தெளிவாகக் கற்போம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'If the kinetic energy of a free electron is doubled, its de Broglie wavelength changes by a factor of:',
        qTa: 'ஒரு எலக்ட்ரானின் இயக்க ஆற்றல் இருமடங்காக உயர்த்தப்பட்டால் அதன் டி பிராய் அலைநீளம் மாறும் காரணி:',
        a: '1 / √2 ≈ 0.707 (Since λ = h / √(2mK))',
        aTa: '1 / √2 ≈ 0.707 (λ = h / √(2mK) என்பதால்)'
      },
      {
        q: 'The rest mass of a photon is:',
        qTa: 'ஒரு போட்டானின் ஓய்வு நிறை:',
        a: 'Zero (0)',
        aTa: 'பூஜ்ஜியம் (0)'
      },
      {
        q: 'In the Davisson-Germer experiment, the maximum diffraction peak was obtained at an accelerating potential of:',
        qTa: 'டேவிசன்-ஜெர்மர் ஆய்வில் எந்த முடுக்கும் மின்னழுத்தத்தில் பெரும விளிம்பு விளைவு உச்சி கிடைத்தது?',
        a: '54 Volts (at scattering angle θ = 50°)',
        aTa: '54 வோல்ட் (சிதறல் கோணம் θ = 50°-ல்)'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'Define work function of a metal and state its SI unit.',
        qTa: 'உலோகத்தின் வெளியேற்று ஆற்றலை வரையறுத்து அதன் SI அலகைக் கூறுக.',
        a: 'The work function (ϕ0) is the minimum energy required to liberate an electron from the metal surface against attractive surface forces without imparting any kinetic energy. SI unit is Joule (J), commonly measured in electron-volts (eV).',
        aTa: 'உலோகப் பரப்பிலிருந்து எலக்ட்ரான் ஒன்று வெளியேற தேவைப்படும் குறைந்தபட்ச ஆற்றல் வெளியேற்று ஆற்றல் (ϕ0) எனப்படும். SI அலகு ஜூல் (J), பொதுவாக எலக்ட்ரான்-வோல்ட் (eV)-ல் அளவிடப்படுகிறது.'
      },
      {
        q: 'Why is wave theory of light unable to explain the photoelectric effect?',
        qTa: 'ஒளியின் அலைக்கொள்கையால் ஒளிமின் விளைவை ஏன் விளக்க முடியவில்லை?',
        a: '1) Wave theory predicts electron energy depends on light intensity, whereas experiments show it depends only on frequency. 2) Wave theory cannot explain the existence of a threshold frequency. 3) Wave theory predicts a time lag for electron emission, whereas emission is instantaneous (< 10⁻⁹ s).',
        aTa: '1) அலைக்கொள்கை எலக்ட்ரான் ஆற்றல் ஒளிச்செறிவைச் சார்ந்தது என்கிறது, ஆனால் சோதனையில் அது அதிர்வெண்ணைச் சார்ந்துள்ளது. 2) பயன்தொடக்க அதிர்வெண்ணை விளக்க முடியவில்லை. 3) உமிழ்வில் காலதாமதம் ஏற்படும் என்கிறது, ஆனால் உமிழ்வு உடனடியாக (< 10⁻⁹ s) நிகழ்கிறது.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Derive the de Broglie wavelength of an electron accelerated from rest through a potential difference V.',
        qTa: 'V மின்னழுத்த வேறுபாட்டால் முடுக்கப்பட்ட எலக்ட்ரானின் டி பிராய் அலைநீளத்திற்கான சமன்பாட்டைத் தருவிக்க.',
        a: 'Kinetic energy K = eV = ½mv² => p = mv = √(2mK) = √(2meV). de Broglie wavelength λ = h/p = h / √(2meV). Substituting constants gives λ = 1.227 / √V nm = 12.27 / √V Å.',
        aTa: 'இயக்க ஆற்றல் K = eV => உந்தம் p = √(2meV). டி பிராய் அலைநீளம் λ = h/p = h / √(2meV). மாறிலிகளைப் பிரதியிட λ = 1.227 / √V nm = 12.27 / √V Å எனக் கிடைக்கிறது.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'State the laws of photoelectric emission and explain how Einstein’s photoelectric equation accounts for each of them.',
        qTa: 'ஒளிமின் உமிழ்வு விதிகளைக் கூறி, ஐன்ஸ்டீனின் ஒளிமின் சமன்பாடு அவற்றை எவ்வாறு விளக்குகிறது என்பதை விவரிக்க.',
        a: 'Einstein equation: hν = ϕ0 + Kmax = hν0 + ½mvmax². 1) For a given metal, emission occurs only if ν ≥ ν0 (below ν0, Kmax is negative, which is impossible). 2) Kmax = h(ν - ν0) depends linearly on frequency, independent of intensity. 3) Since 1 photon interacts with 1 electron, higher intensity emits more electrons per second (I ∝ Intensity). 4) Photon-electron collision is instantaneous (< 10⁻⁹ s).',
        aTa: 'ஐன்ஸ்டீன் சமன்பாடு: hν = hν0 + ½mvmax². 1) ν ≥ ν0 எனில் மட்டுமே உமிழ்வு நடக்கும். 2) பெரும இயக்க ஆற்றல் அதிர்வெண்ணிற்கு நேர்விகிதத்தில் அமையும். 3) ஒரு போட்டான் ஒரு எலக்ட்ரானுடன் மோதுவதால் ஒளிமின் மின்னோட்டம் ஒளிச்செறிவிற்கு நேர்விகிதத்தில் இருக்கும். 4) ஆற்றல் பரிமாற்றம் உடனடியாக (< 10⁻⁹ s) நிகழ்கிறது.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Einstein’s photoelectric equation derivation and explanation (5 Marks)',
      'de Broglie wavelength of accelerated electron derivation (3 Marks / 5 Marks)',
      'Davisson-Germer experiment and verification of matter waves (3 Marks)',
      'Stopping potential vs frequency graph and determination of Planck’s constant (2 Marks / 3 Marks)',
      'Numerical on photoelectric threshold wavelength and stopping potential (3 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why do we not observe diffraction or wave nature in everyday objects like moving cars or cricket balls?',
      answer: 'Because macroscopic objects have enormous mass (m). Since λ = h/(mv) and Planck’s constant h is extremely small (~10⁻³⁴ J·s), the de Broglie wavelength of a cricket ball is on the order of 10⁻³⁴ meters—far smaller than atomic nuclei, making wave effects completely unobservable.',
      category: 'Concept'
    },
    {
      question: 'What is the physical meaning of work function?',
      answer: 'Work function represents the electrostatic energy binding the least tightly held conduction electrons to the positive ionic lattice of the metal.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Using λ = h / (2meV) instead of λ = h / √(2meV).',
      correctWay: 'Remember that momentum p = √(2mK), so the square root covers all three terms: 2, m, and eV.'
    },
    {
      category: 'Unit',
      mistake: 'Directly subtracting work function in eV from photon energy in Joules.',
      correctWay: 'Always convert both terms to the same unit (either both in Joules or both in eV using 1 eV = 1.6 × 10⁻¹⁹ J).'
    }
  ],
  memoryTricks: [
    {
      title: 'Electron Wavelength Formula Mnemonic',
      titleTa: 'எலக்ட்ரான் அலைநீளம் நினைவுக்குறிப்பு',
      trick: '"Twelve point twenty-seven over root V gives Angstroms!" → λ = 12.27 / √V Å.'
    },
    {
      title: 'Photoelectric Energy Balance Mnemonic',
      titleTa: 'ஒளிமின் ஆற்றல் சமநிலை',
      trick: '"Incoming Photon = Exit Toll + Speed Money" → hν = ϕ0 + Kmax.'
    }
  ]
};
