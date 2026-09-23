import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_5_ELECTROMAGNETIC_WAVES: PhysicsChapter = {
  chapterNumber: 5,
  chapterName: 'Electromagnetic Waves',
  chapterNameTa: 'மின்காந்த அலைகள்',
  unitNumber: 5,
  unitName: 'Electromagnetic Waves',
  unitNameTa: 'மின்காந்த அலைகள்',
  overview: 'Comprehensive study of Maxwell’s displacement current, Ampere-Maxwell Law, the four fundamental Maxwell’s Equations in integral form, production and properties of transverse electromagnetic waves, speed of light (c = 1 / √(μ₀ε₀)), Poynting vector, the complete Electromagnetic Spectrum (Radio, Micro, Infrared, Visible, UV, X-rays, Gamma rays) with their sources and uses, and types of spectra (Emission, Absorption, and Fraunhofer lines).',
  overviewTa: 'மேக்ஸ்வெல்லின் இடப்பெயர்ச்சி மின்னோட்டம், ஆம்பியர்-மேக்ஸ்வெல் விதி, நான்கு மேக்ஸ்வெல் சமன்பாடுகள், மின்காந்த அலைகளின் உற்பத்தி மற்றும் குறுக்கலை பண்புகள், ஒளியின் வேகம் (c = 1 / √(μ₀ε₀)), பாயிண்டிங் வெக்டர், முழுமையான மின்காந்த நிறமாலை (ரேடியோ, மைக்ரோ, அகச்சிவப்பு, கட்புலனாகும் ஒளி, புறஊதா, எக்ஸ்-கதிர், காமா கதிர்கள்) மற்றும் உமிழ்வு, உட்கவர் மற்றும் ஃப்ரான்கோஃபர் நிறமாலைகள் பற்றிய பாடம்.',
  introduction: 'In the 1860s, James Clerk Maxwell made one of the greatest syntheses in human history by combining electricity, magnetism, and optics into a single unified electromagnetic theory. He proved that accelerating electric charges emit self-sustaining oscillations of electric and magnetic fields traveling at 300,000 km/s—revealing that light itself is an electromagnetic wave.',
  introductionTa: '1860-களில் ஜேம்ஸ் கிளார்க் மேக்ஸ்வெல் மின்னியல், காந்தவியல் மற்றும் ஒளியியலை ஒன்றிணைத்து மின்காந்தக் கோட்பாட்டை உருவாக்கினார். முடுக்கப்பட்ட மின்னூட்டங்கள் வினாடிக்கு 3,00,000 கிமீ வேகத்தில் பரவும் மின்காந்த அலைகளை உருவாக்குகின்றன என்பதையும் ஒளியும் ஒரு மின்காந்த அலையே என்பதையும் அவர் நிறுவினார்.',
  learningObjectives: [
    'Understand the inconsistency in Ampere’s Circuital Law during capacitor charging and derive Displacement Current (I_d = ε₀ dΦ_E/dt).',
    'State and physically interpret the four Maxwell’s Equations in integral form.',
    'Understand the generation, transverse nature, and fundamental characteristics of Electromagnetic Waves.',
    'Derive the speed of electromagnetic waves in vacuum: c = 1 / √(μ₀ε₀) = 3 × 10⁸ m s⁻¹.',
    'Analyze the complete Electromagnetic Spectrum across all 7 bands (Radio, Micro, IR, Visible, UV, X-ray, Gamma).',
    'Identify sources, wavelength ranges, frequency ranges, detectors, and practical applications of each EM wave band.',
    'Classify Emission and Absorption spectra, and explain the physical origin of Fraunhofer absorption lines in the solar spectrum.'
  ],
  learningObjectivesTa: [
    'மின்தேக்கி மின்னேற்றத்தின் போது ஆம்பியர் விதியிலுள்ள முரண்பாட்டை அறிந்து இடப்பெயர்ச்சி மின்னோட்டத்தை (I_d = ε₀ dΦ_E/dt) வருவித்தல்.',
    'நான்கு மேக்ஸ்வெல் சமன்பாடுகளையும் அவற்றின் இயற்பியல் பொருளையும் கற்றல்.',
    'மின்காந்த அலைகளின் உருவாக்கம், குறுக்கலை இயல்பு மற்றும் பண்புகளைப் புரிந்து கொள்ளுதல்.',
    'வெற்றிடத்தில் மின்காந்த அலைகளின் வேகத்திற்கான சமன்பாட்டை (c = 1 / √(μ₀ε₀)) வருவித்தல்.',
    'மின்காந்த நிறமாலையின் 7 பிரிவுகளையும் (ரேடியோ முதல் காமா வரை) ஆராய்தல்.',
    'ஒவ்வொரு மின்காந்த அலையின் தோற்றம், அலைநீள வரம்பு, பயன்பாடுகள் மற்றும் கண்டறியும் முறைகளை அறிதல்.',
    'உமிழ்வு மற்றும் உட்கவர் நிறமாலைகளின் வகைகளையும் சூரிய நிறமாலையிலுள்ள ஃப்ரான்கோஃபர் வரிகளையும் விளக்குதல்.'
  ],
  importance: 'High-scoring conceptual unit (6-8 marks) featuring high-frequency questions on Maxwell’s Equations, properties of EM waves, electromagnetic spectrum applications, and Fraunhofer absorption lines.',
  prerequisites: [
    'Gauss’s Law & Capacitor Charging (Class 12 Unit 1)',
    'Ampere’s Circuital Law & Magnetic Induction (Class 12 Unit 3)',
    'Wave motion and Transverse wave propagation (Class 11 Unit 11)'
  ],
  everydayApplications: [
    '5G cellular networks, Wi-Fi 6, and Bluetooth communications using radio and microwaves',
    'Microwave ovens heating food via water molecule dielectric resonance at 2.45 GHz',
    'Thermal imaging infrared cameras and TV remote controls',
    'Medical X-ray imaging detecting bone fractures and CT scans',
    'Cancer radiotherapy using high-energy Gamma rays from Cobalt-60 sources',
    'UV water purifiers and currency counterfeit banknote detection'
  ],
  historicalBackground: 'James Clerk Maxwell formulated the theoretical foundation of EM waves in 1865. Heinrich Hertz experimentally generated and detected radio waves in 1887. J.C. Bose in India generated millimeter microwaves in 1895. Guglielmo Marconi achieved transatlantic wireless transmission in 1901.',
  scientists: [
    { name: 'James Clerk Maxwell', contribution: 'Unified electricity, magnetism, and optics; predicted electromagnetic waves', year: '1865' },
    { name: 'Heinrich Hertz', contribution: 'Experimentally produced and detected electromagnetic radio waves', year: '1887' },
    { name: 'Jagadish Chandra Bose', contribution: 'Pioneered generation of extremely short (millimeter) microwaves (5 mm to 25 mm)', year: '1895' },
    { name: 'Wilhelm Röntgen', contribution: 'Discovered X-rays (First Nobel Prize in Physics in 1901)', year: '1895' }
  ],
  majorDiscoveries: [
    'Displacement Current & Ampere-Maxwell Law (1865)',
    'Experimental Demonstration of EM Waves by Hertz (1887)',
    'Discovery of X-Rays (1895) and Fraunhofer Solar Lines (1814)'
  ],
  realWorldRelevance: 'The universal physical backbone of all modern telecommunications, satellite navigation (GPS), fiber-optics, radar astronomy, and medical radiology.',
  topics: [
    {
      id: 'top-5-1',
      topicNumber: '5.1',
      title: 'Displacement Current & Maxwell’s Equations',
      titleTa: 'இடப்பெயர்ச்சி மின்னோட்டம் மற்றும் மேக்ஸ்வெல் சமன்பாடுகள்',
      beginnerExplanation: 'When charging a capacitor, conduction current I_c flows through the connecting wires, but zero conduction current flows through the vacuum gap between plates. Yet, a magnetic field exists in that gap! Maxwell resolved this paradox by introducing Displacement Current: a time-varying electric field in the dielectric gap produces a magnetic field just like a real current: I_d = ε₀ (dΦ_E / dt).',
      beginnerExplanationTa: 'மின்தேக்கி மின்னேற்றம் அடையும் போது இணைப்புக் கம்பிகளில் கடத்து மின்னோட்டம் I_c பாய்கிறது, ஆனால் தட்டுகளுக்கு இடையேயான இடைவெளியில் மின்னோட்டம் இல்லை. ஆயினும் அங்கு காந்தப்புலம் இருப்பதை மேக்ஸ்வெல் கண்டறிந்து, மாறும் மின்புலத்தால் உருவாகும் இடப்பெயர்ச்சி மின்னோட்டம் (I_d = ε₀ dΦ_E/dt) என்ற கருத்தை உருவாக்கினார்.',
      coreConcepts: [
        'Displacement Current: I_d = ε₀ (dΦ_E / dt) = ε₀ A (dE / dt)',
        'Ampere-Maxwell Law: ∮ vec{B} · dvec{l} = μ₀ (I_c + I_d) = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt)',
        'Continuity of current: Total current (I_c + I_d) is continuous across any closed circuit.',
        'Maxwell’s 4 Equations in integral form summarize all classical electrodynamics.'
      ],
      definitions: [
        {
          term: 'Displacement Current (I_d)',
          termTa: 'இடப்பெயர்ச்சி மின்னோட்டம் (I_d)',
          definitionEn: 'The current produced by the time rate of change of electric flux linked with a region: I_d = ε₀ (dΦ_E / dt).',
          definitionTa: 'ஒரு பகுதியில் மின்பாயம் காலத்தைப் பொருத்து மாறும் வீதத்தினால் உருவாகும் மின்னோட்டம் இடப்பெயர்ச்சி மின்னோட்டம் ஆகும் (I_d = ε₀ dΦ_E/dt).',
          keyPoints: ['Does not involve physical motion of actual charges', 'Generates a magnetic field identical to conduction current', 'In a charging capacitor: I_c (in wire) = I_d (in gap)']
        },
        {
          term: 'Maxwell’s Four Equations (Integral Form)',
          termTa: 'மேக்ஸ்வெல்லின் நான்கு சமன்பாடுகள்',
          definitionEn: 'The four fundamental equations governing all electromagnetism: 1. Gauss’s Law in Electrostatics (∮ E·dA = Q/ε₀), 2. Gauss’s Law in Magnetism (∮ B·dA = 0), 3. Faraday’s Law (∮ E·dl = -dΦ_B/dt), 4. Ampere-Maxwell Law (∮ B·dl = μ₀ I_c + μ₀ ε₀ dΦ_E/dt).',
          definitionTa: 'மின்காந்தவியலின் அடிப்படை 4 சமன்பாடுகள்: 1. மின் நிலையியல் காஸ் விதி, 2. காந்தவியல் காஸ் விதி, 3. ஃபாரடே தூண்டல் விதி, 4. ஆம்பியர்-மேக்ஸ்வெல் விதி.',
          keyPoints: ['Equation 2 proves isolated magnetic monopoles do not exist', 'Equations 3 & 4 show varying B creates E, and varying E creates B (self-sustaining EM wave!)']
        }
      ],
      realLifeExamples: [
        'High-frequency AC signals pass easily through capacitor gaps in electronic filter circuits entirely via displacement current.',
        'Wireless charging pads transfer energy across air gaps through oscillating displacement and conduction fields.'
      ],
      analogies: 'Conduction current in a wire is like cars driving on a solid bridge; displacement current in the gap is like a ferry taking cars across the water gap—the total traffic flow (current continuity) never stops!',
      commonMisconceptions: [
        'Misconception: Displacement current requires physical electrons jumping across the vacuum gap. Correction: No charges cross the gap; displacement current is pure changing electric flux density.'
      ]
    },
    {
      id: 'top-5-2',
      topicNumber: '5.2',
      title: 'Sources, Properties & Transverse Nature of Electromagnetic Waves',
      titleTa: 'மின்காந்த அலைகளின் மூலங்கள், பண்புகள் மற்றும் குறுக்கலை இயல்பு',
      beginnerExplanation: 'Accelerating electric charges produce mutually perpendicular, oscillating electric (E) and magnetic (B) fields that propagate together through space at the speed of light: c = 1 / √(μ₀ε₀) = 3 × 10⁸ m/s. Because both E and B vectors oscillate perpendicular to the direction of wave propagation, EM waves are strictly Transverse Waves.',
      beginnerExplanationTa: 'முடுக்கப்பட்ட மின்னூட்டங்கள் ஒன்றுக்கொன்று செங்குத்தான மின்புலம் (E) மற்றும் காந்தப்புல (B) மாறுபாடுகளை உருவாக்கி ஒளியின் வேகத்தில் (c = 3 × 10⁸ m/s) பரவுகின்றன. E மற்றும் B வெக்டர்கள் அலை பரவும் திசைக்கு செங்குத்தாக இருப்பதால் மின்காந்த அலைகள் குறுக்கலைகளாகும்.',
      coreConcepts: [
        'Source of EM waves: Accelerating electric charges or oscillating LC dipole antennas.',
        'Transverse Nature: vec{E} ⊥ vec{B} ⊥ vec{k} (Direction of propagation).',
        'Speed of EM waves in vacuum: c = 1 / √(μ₀ε₀) = E₀ / B₀ = 2.9979 × 10⁸ m s⁻¹',
        'Speed in medium: v = 1 / √(με) = c / n (where n is refractive index)',
        'Poynting Vector (Energy flux): vec{S} = (1 / μ₀) · (vec{E} × vec{B}) (SI unit: W m⁻²)',
        'Total Energy Density: u = ½ ε₀ E² + B² / (2μ₀) = ε₀ E² = B² / μ₀ (Electric and magnetic energies are shared equally: u_E = u_B).'
      ],
      definitions: [
        {
          term: 'Poynting Vector (vec{S})',
          termTa: 'பாயிண்டிங் வெக்டர் (vec{S})',
          definitionEn: 'The vector representing the rate of energy flow per unit surface area perpendicular to the direction of propagation of an electromagnetic wave: vec{S} = (1 / μ₀) · (vec{E} × vec{B}).',
          definitionTa: 'மின்காந்த அலை பரவும் திசைக்கு செங்குத்தான ஓரலகு பரப்பின் வழியே ஓரலகு காலத்தில் பாயும் ஆற்றலின் வீதத்தைக் குறிக்கும் வெக்டர்: vec{S} = (1 / μ₀) · (vec{E} × vec{B}). அலகு: W m⁻².',
          keyPoints: ['Points strictly in the direction of wave propagation', 'Magnitude gives instantaneous wave intensity']
        }
      ],
      realLifeExamples: [
        'Sunlight warming the Earth’s surface delivers ~1360 W/m² of solar Poynting energy flux at the top of the atmosphere.',
        'Radio station broadcast antennas accelerate electrons back and forth millions of times per second to radiate radio waves.'
      ],
      analogies: 'Think of an electric field ripple generating a magnetic field ripple, which immediately generates another electric field ripple—like two runners passing a baton back and forth forever as they sprint forward at 300,000 km/s!',
      commonMisconceptions: [
        'Misconception: Electromagnetic waves require a material medium (like sound or ocean waves). Correction: EM waves can propagate perfectly through empty vacuum because oscillating electric and magnetic fields sustain each other without matter.'
      ]
    },
    {
      id: 'top-5-3',
      topicNumber: '5.3',
      title: 'The Electromagnetic Spectrum & Practical Applications',
      titleTa: 'மின்காந்த நிறமாலை மற்றும் அதன் நடைமுறைப் பயன்பாடுகள்',
      beginnerExplanation: 'The Electromagnetic Spectrum is the continuous orderly distribution of electromagnetic waves arranged in order of increasing frequency or decreasing wavelength. From longest wavelength to shortest: Radio waves → Microwaves → Infrared → Visible Light → Ultraviolet → X-rays → Gamma rays.',
      beginnerExplanationTa: 'மின்காந்த அலைகளை அவற்றின் அதிர்வெண் அல்லது அலைநீளத்தின் வரிசையில் ஒழுங்குபடுத்தும் தொடர்ச்சியான அமைப்பு மின்காந்த நிறமாலை எனப்படும்: ரேடியோ அலைகள் → மைக்ரோ அலைகள் → அகச்சிவப்பு → கட்புலனாகும் ஒளி → புறஊதா → எக்ஸ்-கதிர்கள் → காமா கதிர்கள்.',
      coreConcepts: [
        'Radio Waves (λ > 0.1 m): Generated by accelerating charges in LC circuits. Used in AM/FM radio, TV, cellular 4G/5G.',
        'Microwaves (0.1 m to 1 mm): Produced by Klystron, Magnetron, Gunn diodes. Used in Radar, Satellite communications, Microwave ovens.',
        'Infrared (1 mm to 700 nm): Emitted by hot bodies and molecules. Used in Thermal night-vision, TV remotes, Physiotherapy, Greenhouse warming.',
        'Visible Light (700 nm to 400 nm): Emitted by atomic electron transitions. Human vision (VIBGYOR: 400 nm violet to 700 nm red).',
        'Ultraviolet (400 nm to 1 nm): Produced by electric arcs and Sun. Used in Water purifiers (sterilization), Counterfeit currency detection, Vitamin D.',
        'X-Rays (1 nm to 10⁻³ nm): Produced by decelerating high-speed electrons on heavy metal targets. Used in Medical radiography, CT scans, Crystal structure analysis.',
        'Gamma Rays (λ < 10⁻¹² m): Emitted by radioactive nuclei during nuclear decay. Used in Cancer radiotherapy (Cobalt-60) and food irradiation.'
      ],
      definitions: [
        {
          term: 'Electromagnetic Spectrum',
          termTa: 'மின்காந்த நிறமாலை',
          definitionEn: 'The continuous sequential arrangement of all electromagnetic waves according to their wavelength or frequency, spanning from long radio waves to ultra-high-energy gamma rays.',
          definitionTa: 'அனைத்து மின்காந்த அலைகளையும் அவற்றின் அலைநீளம் அல்லது அதிர்வெண்ணின் அடிப்படையில் தொடர்ச்சியாக வரிசைப்படுத்தும் அமைப்பு.',
          keyPoints: ['All EM waves travel at the exact same speed in vacuum: c = 3 × 10⁸ m/s', 'Energy of photon: E = h f = h c / λ (Gamma rays have highest photon energy)']
        }
      ],
      realLifeExamples: [
        'Microwave ovens use 2.45 GHz radiation which matches the rotational resonant frequency of water molecules in food, heating food rapidly from the inside.',
        'Airport baggage security scanners use penetrating X-rays to inspect luggage contents non-destructively.'
      ],
      analogies: 'The EM spectrum is like an 88-key piano keyboard: visible light is just one single octave in the middle (middle C), while radio waves are the deep bass notes on the far left and gamma rays are the piercing ultra-high notes on the far right!',
      commonMisconceptions: [
        'Misconception: Different types of EM waves travel at different speeds in vacuum. Correction: In vacuum, ALL electromagnetic waves (from radio waves to gamma rays) travel at the EXACT SAME SPEED: c = 3.0 × 10⁸ m/s.'
      ]
    },
    {
      id: 'top-5-4',
      topicNumber: '5.4',
      title: 'Types of Spectra, Emission & Absorption & Fraunhofer Lines',
      titleTa: 'நிறமாலையின் வகைகள், உமிழ்வு, உட்கவர் மற்றும் ஃப்ரான்கோஃபர் வரிகள்',
      beginnerExplanation: 'When light from a source is dispersed by a prism or grating, it forms a Spectrum. Spectra are broadly classified into Emission Spectra (light emitted by excited atoms) and Absorption Spectra (dark lines or bands formed when white light passes through an absorbing gas). Fraunhofer lines are dark absorption lines in the solar spectrum that reveal the chemical composition of the Sun’s atmosphere.',
      beginnerExplanationTa: 'ஒளி மூலத்திலிருந்து வெளிவரும் ஒளி பிரிகையடைந்து நிறமாலையை உருவாக்குகிறது. இது உமிழ்வு நிறமாலை (தொடர், வரி, பட்டை) மற்றும் உட்கவர் நிறமாலை என வகைப்படுத்தப்படுகிறது. சூரியனின் நிறமாலையில் காணப்படும் இருண்ட உட்கவர் வரிகள் ஃப்ரான்கோஃபர் வரிகள் எனப்படும்.',
      coreConcepts: [
        'Continuous Emission Spectrum: Emitted by incandescent solid/liquid bodies (e.g. glowing electric filament bulb, carbon arc).',
        'Line Emission Spectrum: Emitted by excited atomic gases (e.g. sodium vapor lamp gives two yellow D-lines at 589.0 nm and 589.6 nm). Acts as atomic fingerprints.',
        'Band Emission Spectrum: Emitted by molecular gases (e.g. Nitrogen or Carbon dioxide discharge tubes).',
        'Line Absorption Spectrum: Produced when white light passes through cooler gas vapors, showing sharp dark lines against bright continuous background.',
        'Fraunhofer Lines: Dark absorption lines observed in the continuous solar spectrum caused by absorption of specific wavelengths by vaporized elements (H, He, Na, Fe, Ca) in the Sun’s cooler outer photosphere/chromosphere.'
      ],
      definitions: [
        {
          term: 'Fraunhofer Lines',
          termTa: 'ஃப்ரான்கோஃபர் வரிகள்',
          definitionEn: 'The numerous dark absorption lines crossing the continuous bright emission spectrum of the Sun, produced because cooler elemental gases in the outer solar chromosphere absorb their characteristic emission wavelengths.',
          definitionTa: 'சூரியனின் தொடர் நிறமாலையில் காணப்படும் பல இருண்ட உட்கவர் வரிகள் ஃப்ரான்கோஃபர் வரிகள் எனப்படும். சூரியனின் வெளிப்புறக் குளிர்ந்த வாயுக்கள் குறிப்பிட்ட அலைநீளங்களை உட்கவர்வதால் இவை தோன்றுகின்றன.',
          keyPoints: ['Discovered by Joseph von Fraunhofer in 1814', 'Reveals elements present in Sun’s atmosphere (Hydrogen, Helium, Sodium, Iron)', 'Led to the discovery of Helium element in the Sun before Earth!']
        }
      ],
      realLifeExamples: [
        'Astronomers determine the chemical elements, temperature, and rotational speed of distant stars and exoplanet atmospheres by analyzing their Fraunhofer absorption spectra.',
        'Neon advertising signboards produce bright distinct band and line emission spectra.'
      ],
      analogies: 'Atomic line spectra are the universal "Barcodes" or "Fingerprints" of chemical elements: no two elements emit or absorb the exact same set of spectral lines!',
      commonMisconceptions: [
        'Misconception: Fraunhofer lines are completely black regions devoid of any light. Correction: They appear dark only by comparison with the overwhelming brightness of the adjacent continuous solar background.'
      ]
    }
  ],
  formulas: [
    {
      id: 'f-5-1',
      formula: 'I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} = \\varepsilon_0 A \\frac{dE}{dt}',
      meaning: 'Maxwell’s Displacement Current across a region of changing electric flux.',
      meaningTa: 'மாறும் மின்பாயத்தினால் உருவாகும் மேக்ஸ்வெல்லின் இடப்பெயர்ச்சி மின்னோட்டம்.',
      variables: [
        { symbol: 'I_d', name: 'Displacement Current', nameTa: 'இடப்பெயர்ச்சி மின்னோட்டம்', siUnit: 'A (Ampere)', dimension: '[I]' },
        { symbol: 'ε₀', name: 'Permittivity of free space (8.854 × 10⁻¹² C² N⁻¹ m⁻²)', nameTa: 'வெற்றிடத்தின் விடுதிறன்', siUnit: 'F m⁻¹', dimension: '[M⁻¹ L⁻³ T⁴ I²]' },
        { symbol: 'Φ_E', name: 'Electric Flux', nameTa: 'மின்பாயம்', siUnit: 'V m or N m² C⁻¹', dimension: '[M L³ T⁻³ I⁻¹]' },
        { symbol: 't', name: 'Time', nameTa: 'காலம்', siUnit: 's (second)', dimension: '[T]' }
      ],
      siUnit: 'Ampere (A)',
      dimension: '[I]',
      whenToUse: 'Calculating current in capacitor dielectric gaps and verifying Ampere-Maxwell continuity.',
      realLifeApplication: 'High-frequency AC dielectric heating and capacitor filter circuit design.',
      memoryShortcut: 'Displacement current I_d has the same dimension and unit (Ampere) as normal conduction current I_c!',
      category: 'fundamental'
    },
    {
      id: 'f-5-2',
      formula: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{E_0}{B_0} = 3 \\times 10^8 \\text{ m s}^{-1}',
      meaning: 'Speed of electromagnetic waves in vacuum and relationship between peak electric and magnetic field amplitudes.',
      meaningTa: 'வெற்றிடத்தில் மின்காந்த அலையின் வேகம் மற்றும் மின்-காந்தப்புல வீச்சுகளுக்கு இடையேயான தொடர்பு.',
      variables: [
        { symbol: 'c', name: 'Speed of light in vacuum', nameTa: 'ஒளியின் வேகம்', siUnit: 'm s⁻¹', dimension: '[L T⁻¹]' },
        { symbol: 'μ₀', name: 'Permeability of free space (4π × 10⁻⁷ T m A⁻¹)', nameTa: 'வெற்றிடத்தின் உட்புகுதிறன்', siUnit: 'H m⁻¹', dimension: '[M L T⁻² I⁻²]' },
        { symbol: 'ε₀', name: 'Permittivity of free space (8.854 × 10⁻¹² F m⁻¹)', nameTa: 'வெற்றிடத்தின் விடுதிறன்', siUnit: 'F m⁻¹', dimension: '[M⁻¹ L⁻³ T⁴ I²]' },
        { symbol: 'E₀, B₀', name: 'Peak Electric and Magnetic Fields', nameTa: 'பெரும மின் மற்றும் காந்தப்புலங்கள்', siUnit: 'E in V m⁻¹, B in T', dimension: 'E: [M L T⁻³ I⁻¹], B: [M T⁻² I⁻¹]' }
      ],
      siUnit: 'm s⁻¹',
      dimension: '[L T⁻¹]',
      whenToUse: 'Calculating field amplitudes, wavelength-frequency relations (c = f λ), and optical wave speeds.',
      realLifeApplication: 'Satellite communications, GPS positioning timestamps, and laser optics.',
      memoryShortcut: 'E₀ is ALWAYS c times bigger than B₀: E₀ = c · B₀.',
      category: 'board_exam'
    },
    {
      id: 'f-5-3',
      formula: '\\vec{S} = \\frac{1}{\\mu_0} (\\vec{E} \\times \\vec{B}), \\quad u = \\frac{1}{2}\\varepsilon_0 E^2 + \\frac{B^2}{2\\mu_0} = \\varepsilon_0 E^2',
      meaning: 'Poynting vector (energy flux per unit area) and total energy density of an electromagnetic wave.',
      meaningTa: 'பாயிண்டிங் வெக்டர் (ஓரலகு பரப்பில் பாயும் ஆற்றல்) மற்றும் மின்காந்த அலையின் மொத்த ஆற்றல் அடர்த்தி.',
      variables: [
        { symbol: 'S', name: 'Poynting Vector Magnitude', nameTa: 'பாயிண்டிங் வெக்டர் மதிப்பு', siUnit: 'W m⁻² (Watt per square metre)', dimension: '[M T⁻³]' },
        { symbol: 'u', name: 'Total Energy Density', nameTa: 'மொத்த ஆற்றல் அடர்த்தி', siUnit: 'J m⁻³ (Joule per cubic metre)', dimension: '[M L⁻¹ T⁻²]' }
      ],
      siUnit: 'S in W m⁻², u in J m⁻³',
      dimension: 'S: [M T⁻³], u: [M L⁻¹ T⁻²]',
      whenToUse: 'Calculating radiation pressure, solar energy constant, and laser power intensity.',
      realLifeApplication: 'Solar panel energy harvesting and industrial laser cutting.',
      memoryShortcut: 'Energy is split 50-50 between electric and magnetic fields (u_E = u_B = ½ u_total).',
      category: 'frequently_used'
    }
  ],
  derivations: [
    {
      id: 'der-5-1',
      title: 'Derivation of Maxwell’s Displacement Current and Ampere-Maxwell Law',
      titleTa: 'மேக்ஸ்வெல்லின் இடப்பெயர்ச்சி மின்னோட்டம் மற்றும் ஆம்பியர்-மேக்ஸ்வெல் விதியை வருவித்தல்',
      aim: 'To explain the inconsistency in Ampere’s circuital law for a charging capacitor and derive the formula for displacement current I_d and the generalized Ampere-Maxwell Law.',
      given: [
        'A parallel plate capacitor of plate area A and separation d being charged by conduction current I_c.',
        'Two Amperian surfaces S₁ (flat circular disc passing through wire) and S₂ (pot-shaped surface passing between capacitor plates) sharing the exact same boundary curve C.'
      ],
      toProve: 'I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\quad \\& \\quad \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
      assumptions: [
        'Capacitor plates are large and parallel so electric field between plates is uniform: E = σ / ε₀ = Q / (ε₀ A).'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Apply original Ampere’s Law for flat surface S₁ passing through the connecting wire.',
          descriptionTa: 'கம்பியின் வழியே செல்லும் தட்டையான பரப்பு S₁-க்கு ஆம்பியர் விதியைப் பயன்படுத்துதல்.',
          equation: '\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enclosed}} = \\mu_0 I_c',
          note: 'Surface S₁ is pierced by conduction current I_c.'
        },
        {
          stepNumber: 2,
          description: 'Apply original Ampere’s Law for balloon-shaped surface S₂ passing between capacitor plates.',
          descriptionTa: 'தட்டுகளுக்கு இடையேயான பலூன் பரப்பு S₂-க்கு ஆம்பியர் விதியைப் பயன்படுத்துதல்.',
          equation: '\\oint_C \\vec{B} \\cdot d\\vec{l} = \\mu_0 (0) = 0',
          note: 'Since no conduction charges travel between plates, I_c = 0. This creates a severe contradiction (μ₀I_c = 0)!'
        },
        {
          stepNumber: 3,
          description: 'Express electric field E and electric flux Φ_E between capacitor plates in terms of instantaneous charge Q.',
          descriptionTa: 'தட்டுகளுக்கு இடையேயான மின்புலம் E மற்றும் மின்பாயம் Φ_E-ஐ மின்னூட்டம் Q வழியே குறிப்பிடுதல்.',
          equation: 'E = \\frac{Q}{\\varepsilon_0 A} \\implies \\Phi_E = E \\cdot A = \\left( \\frac{Q}{\\varepsilon_0 A} \\right) A = \\frac{Q}{\\varepsilon_0}',
          note: 'Electric flux is directly proportional to charge Q on the plates.'
        },
        {
          stepNumber: 4,
          description: 'Differentiate electric flux with respect to time to find the rate of flux change.',
          descriptionTa: 'மின்பாயத்தை காலத்தைப் பொருத்து வகையீடு செய்தல்.',
          equation: '\\frac{d\\Phi_E}{dt} = \\frac{1}{\\varepsilon_0} \\frac{dQ}{dt} = \\frac{1}{\\varepsilon_0} I_c \\implies I_c = \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
          note: 'Here dQ/dt is the rate of charge accumulation, which equals conduction current I_c.'
        },
        {
          stepNumber: 5,
          description: 'Define Displacement Current I_d and formulate generalized Ampere-Maxwell Law.',
          descriptionTa: 'இடப்பெயர்ச்சி மின்னோட்டம் I_d வரையறுத்து ஆம்பியர்-மேக்ஸ்வெல் விதியை அமைத்தல்.',
          equation: 'I_d = \\varepsilon_0 \\frac{d\\Phi_E}{dt} \\implies \\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 (I_c + I_d) = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
          note: 'For surface S₁, I_d = 0 so ∮ B·dl = μ₀I_c. For surface S₂, I_c = 0 so ∮ B·dl = μ₀I_d = μ₀I_c. The contradiction is completely resolved!'
        }
      ],
      finalEquation: '\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_c + \\mu_0 \\varepsilon_0 \\frac{d\\Phi_E}{dt}',
      physicalMeaning: 'Magnetic fields are produced not only by moving electric charges (conduction current) but also by changing electric fields (displacement current).',
      physicalMeaningTa: 'காந்தப்புலமானது கடத்து மின்னோட்டத்தினால் மட்டுமின்றி காலத்தைப் பொருத்து மாறும் மின்புலத்தினாலும் (இடப்பெயர்ச்சி மின்னோட்டம்) உருவாக்கப்படுகிறது.',
      commonMistakes: [
        'Confusing electric flux Φ_E with magnetic flux Φ_B.',
        'Thinking displacement current is a flow of real charged particles (it is a field phenomenon).',
        'Omitting the permittivity factor ε₀ in I_d = ε₀ (dΦ_E/dt).'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'der-5-2',
      title: 'Derivation of Speed of Electromagnetic Waves in Vacuum: c = 1 / √(μ₀ε₀)',
      titleTa: 'வெற்றிடத்தில் மின்காந்த அலையின் வேகம் c = 1 / √(μ₀ε₀) சமன்பாட்டை வருவித்தல்',
      aim: 'To derive the mathematical expression for the propagation speed of transverse electromagnetic waves in free space from Maxwell’s equations.',
      given: [
        'Plane electromagnetic wave propagating along the x-axis in vacuum with electric field vec{E} = E_y(x,t) \\hat{j} and magnetic field vec{B} = B_z(x,t) \\hat{k}.',
        'In vacuum, charge density ρ = 0 and conduction current I_c = 0.'
      ],
      toProve: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = \\frac{E_0}{B_0} \\approx 3 \\times 10^8 \\text{ m s}^{-1}',
      assumptions: [
        'Medium is free space / vacuum with constants μ₀ and ε₀.',
        'Wave is planar and monochromatic with angular frequency ω and wave number k.'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Apply Faraday’s Law of induction ∮ E·dl = -dΦ_B/dt to a rectangular loop in the x-y plane of length dx and height h.',
          descriptionTa: 'ஃபாரடே தூண்டல் விதியைப் பயன்படுத்தி மின்புல வகையீட்டு சமன்பாட்டைப் பெறுதல்.',
          equation: '\\frac{\\partial E_y}{\\partial x} = -\\frac{\\partial B_z}{\\partial t}',
          note: 'Spatial gradient of electric field creates time rate of change of magnetic field.'
        },
        {
          stepNumber: 2,
          description: 'Apply Ampere-Maxwell Law in vacuum (I_c = 0) ∮ B·dl = μ₀ ε₀ dΦ_E/dt to a rectangular loop in the x-z plane.',
          descriptionTa: 'வெற்றிடத்தில் ஆம்பியர்-மேக்ஸ்வெல் விதியைப் பயன்படுத்தி காந்தப்புல வகையீட்டு சமன்பாட்டைப் பெறுதல்.',
          equation: '-\\frac{\\partial B_z}{\\partial x} = \\mu_0 \\varepsilon_0 \\frac{\\partial E_y}{\\partial t}',
          note: 'Spatial gradient of magnetic field creates time rate of change of electric field.'
        },
        {
          stepNumber: 3,
          description: 'Substitute sinusoidal solutions E_y = E₀ sin(kx - ωt) and B_z = B₀ sin(kx - ωt) into the first equation.',
          descriptionTa: 'சைன் வடிவ அலை தீர்வுகளைப் பிரதியிடுதல்.',
          equation: 'k E_0 \\cos(kx - \\omega t) = \\omega B_0 \\cos(kx - \\omega t) \\implies \\frac{E_0}{B_0} = \\frac{\\omega}{k} = c',
          note: 'Ratio of electric field amplitude to magnetic field amplitude equals wave speed c.'
        },
        {
          stepNumber: 4,
          description: 'Substitute sinusoidal solutions into the second equation.',
          descriptionTa: 'இரண்டாம் சமன்பாட்டில் பிரதியிடுதல்.',
          equation: 'k B_0 \\cos(kx - \\omega t) = \\mu_0 \\varepsilon_0 \\omega E_0 \\cos(kx - \\omega t) \\implies \\frac{B_0}{E_0} = \\mu_0 \\varepsilon_0 \\left( \\frac{\\omega}{k} \\right) = \\mu_0 \\varepsilon_0 c',
          note: 'Substitute B₀/E₀ = 1/c from Step 3.'
        },
        {
          stepNumber: 5,
          description: 'Combine relations and solve for wave propagation speed c.',
          descriptionTa: 'தொடர்புகளை இணைத்து ஒளியின் வேகம் c-ஐப் பெறுதல்.',
          equation: '\\frac{1}{c} = \\mu_0 \\varepsilon_0 c \\implies c^2 = \\frac{1}{\\mu_0 \\varepsilon_0} \\implies c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}}',
          note: 'Substituting numerical values: c = 1 / √[(4π × 10⁻⁷)(8.854 × 10⁻¹²)] = 2.9979 × 10⁸ m/s.'
        }
      ],
      finalEquation: 'c = \\frac{1}{\\sqrt{\\mu_0 \\varepsilon_0}} = 3 \\times 10^8 \\text{ m s}^{-1}',
      physicalMeaning: 'The speed of electromagnetic waves in vacuum is an absolute fundamental constant of nature determined solely by the electrical permittivity and magnetic permeability of empty space.',
      physicalMeaningTa: 'வெற்றிடத்தில் மின்காந்த அலையின் வேகம் வெற்றிடத்தின் விடுதிறன் (ε₀) மற்றும் உட்புகுதிறன் (μ₀) ஆகியவற்றால் மட்டுமே தீர்மானிக்கப்படும் பிரபஞ்சத்தின் மாறிலி ஆகும்.',
      commonMistakes: [
        'Confusing wave speed c = ω/k with frequency f = ω/(2π).',
        'Writing c = √(μ₀ε₀) without the fraction (it is 1 / √(μ₀ε₀)!).',
        'Forgetting that in a dielectric medium, speed is slower: v = 1 / √(με) = c / n.'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      level: 'Easy',
      title: 'Calculation of Wavelength of Cellular 5G Radio Wave',
      question: 'A 5G mobile cellular communication tower transmits electromagnetic waves at a carrier frequency of 3.5 GHz (3.5 × 10⁹ Hz). Calculate the wavelength of these radio waves in vacuum.',
      questionTa: 'ஒரு 5G அலைபேசிக் கோபுரம் 3.5 GHz அதிர்வெண்ணில் மின்காந்த அலைகளை அனுப்புகிறது. வெற்றிடத்தில் இந்த அலைகளின் அலைநீளத்தைக் காண்க.',
      given: { 'f': '3.5 GHz = 3.5 × 10⁹ Hz', 'c': '3.0 × 10⁸ m s⁻¹' },
      required: 'Wavelength λ',
      formulaUsed: 'c = f \\lambda \\implies \\lambda = \\frac{c}{f}',
      steps: [
        { stepNumber: 1, description: 'Substitute constants into wave equation', math: '\\lambda = \\frac{3.0 \\times 10^8 \\text{ m/s}}{3.5 \\times 10^9 \\text{ s}^{-1}} = \\frac{3.0}{35} = 0.08571 \\text{ m} = 8.57 \\text{ cm}' }
      ],
      finalAnswer: 'Wavelength λ = 0.0857 m = 8.57 cm',
      siUnit: 'Metre (m) / Centimetre (cm)',
      shortcutMethod: '3.0 / 35 = 0.0857 m directly.',
      commonErrors: ['Forgetting that 1 GHz = 10⁹ Hz (not 10⁶ Hz).', 'Inverting the formula as λ = f / c.'],
      examTip: 'Radio and microwave wavelengths in telecom typically range between millimeters to meters.'
    },
    {
      level: 'Medium',
      title: 'Displacement Current in a Charging Parallel Plate Capacitor',
      question: 'A parallel plate capacitor with circular plates of radius R = 10 cm (0.1 m) is being charged by an external circuit. The electric field between the plates is increasing at a constant rate of dE/dt = 10¹² V m⁻¹ s⁻¹. Calculate: (i) The displacement current I_d between the plates, (ii) The magnetic field B at a radial distance r = 5 cm from the central axis.',
      questionTa: 'ஆரம் R = 10 cm கொண்ட வட்டத் தட்டு மின்தேக்கியில் மின்புலம் dE/dt = 10¹² V m⁻¹ s⁻¹ என்ற மாறா வீதத்தில் அதிகரிக்கிறது. (i) தட்டுகளுக்கு இடையேயான இடப்பெயர்ச்சி மின்னோட்டம் I_d, (ii) மையத்திலிருந்து r = 5 cm தொலைவில் காந்தப்புலம் B ஆகியவற்றைக் காண்க.',
      given: { 'R': '0.1 m', 'dE/dt': '10¹² V m⁻¹ s⁻¹', 'r': '5 cm = 0.05 m', 'ε₀': '8.854 × 10⁻¹² C² N⁻¹ m⁻²' },
      required: '(i) Total Displacement Current I_d, (ii) Magnetic Field B at r = 0.05 m',
      formulaUsed: 'I_d = \\varepsilon_0 A \\frac{dE}{dt} = \\varepsilon_0 (\\pi R^2) \\frac{dE}{dt}, \\quad B = \\frac{\\mu_0 I_d r}{2\\pi R^2}',
      steps: [
        { stepNumber: 1, description: 'Calculate total plate area A', math: 'A = \\pi R^2 = 3.1416 \\times (0.1)^2 = 3.1416 \\times 0.01 = 0.031416 \\text{ m}^2' },
        { stepNumber: 2, description: 'Calculate total displacement current I_d', math: 'I_d = (8.854 \\times 10^{-12}) \\times 0.031416 \\times 10^{12} = 8.854 \\times 0.031416 = 0.2782 \\text{ A} \\approx 0.28 \\text{ A}' },
        { stepNumber: 3, description: 'Calculate magnetic field B at r = 5 cm using Ampere-Maxwell Law', math: 'B = \\frac{(4\\pi \\times 10^{-7}) \\times 0.2782 \\times 0.05}{2\\pi \\times (0.1)^2} = \\frac{2 \\times 10^{-7} \\times 0.2782 \\times 0.05}{0.01} = \\frac{2.782 \\times 10^{-8}}{0.01} = 2.782 \\times 10^{-6} \\text{ T} = 2.78 \\text{ }\\mu\\text{T}' }
      ],
      finalAnswer: 'Displacement Current I_d = 0.278 A; Magnetic Field B = 2.78 μT (2.78 × 10⁻⁶ T)',
      siUnit: 'A and Tesla (T)',
      shortcutMethod: 'Inside capacitor (r < R), B is directly proportional to distance r: B = (μ₀ I_d r) / (2π R²).',
      commonErrors: ['Using whole radius R instead of r = 0.05 m for the enclosed flux fraction.', 'Forgetting that displacement current equals ε₀ A (dE/dt).'],
      examTip: 'Note that inside the capacitor plates, magnetic field B is zero at the center (r=0) and reaches maximum at the rim (r=R).'
    },
    {
      level: 'Exam-Level',
      title: 'Electromagnetic Wave Field Amplitudes, Poynting Vector and Energy Density',
      question: 'In a plane electromagnetic wave traveling in vacuum, the peak electric field amplitude is E₀ = 120 V m⁻¹. Calculate: (i) The peak magnetic field amplitude B₀, (ii) The total average energy density u_avg of the wave, (iii) The average Poynting vector intensity S_avg carried by the wave. (Given: c = 3 × 10⁸ m s⁻¹, ε₀ = 8.854 × 10⁻¹² F m⁻¹, μ₀ = 4π × 10⁻⁷ T m A⁻¹).',
      questionTa: 'வெற்றிடத்தில் பரவும் மின்காந்த அலையின் பெரும மின்புல வீச்சு E₀ = 120 V m⁻¹ எனில், (i) பெரும காந்தப்புல வீச்சு B₀, (ii) சராசரி ஆற்றல் அடர்த்தி u_avg, (iii) சராசரி பாயிண்டிங் வெக்டர் செறிவு S_avg ஆகியவற்றைக் காண்க.',
      given: { 'E₀': '120 V m⁻¹', 'c': '3 × 10⁸ m s⁻¹', 'ε₀': '8.854 × 10⁻¹² F m⁻¹' },
      required: '(i) B₀, (ii) u_avg, (iii) S_avg',
      formulaUsed: 'B_0 = \\frac{E_0}{c}, \\quad u_{avg} = \\frac{1}{2} \\varepsilon_0 E_0^2, \\quad S_{avg} = u_{avg} \\cdot c = \\frac{1}{2} \\varepsilon_0 c E_0^2',
      steps: [
        { stepNumber: 1, description: 'Calculate peak magnetic field B₀', math: 'B_0 = \\frac{E_0}{c} = \\frac{120 \\text{ V/m}}{3 \\times 10^8 \\text{ m/s}} = 4.0 \\times 10^{-7} \\text{ T} = 0.4 \\text{ }\\mu\\text{T}' },
        { stepNumber: 2, description: 'Calculate average total energy density u_avg', math: 'u_{avg} = \\frac{1}{2} \\varepsilon_0 E_0^2 = \\frac{1}{2} \\times (8.854 \\times 10^{-12}) \\times (120)^2 = 0.5 \\times 8.854 \\times 10^{-12} \\times 14400 = 6.375 \\times 10^{-8} \\text{ J m}^{-3}' },
        { stepNumber: 3, description: 'Calculate average Poynting intensity S_avg = u_avg · c', math: 'S_{avg} = u_{avg} \\cdot c = (6.375 \\times 10^{-8} \\text{ J/m}^3) \\times (3 \\times 10^8 \\text{ m/s}) = 19.125 \\text{ W m}^{-2}' }
      ],
      finalAnswer: 'B₀ = 4.0 × 10⁻⁷ T (0.4 μT); Energy Density u_avg = 6.38 × 10⁻⁸ J m⁻³; Intensity S_avg = 19.13 W m⁻²',
      siUnit: 'T, J m⁻³, and W m⁻²',
      shortcutMethod: 'S_avg = E₀² / (2 μ₀ c) = 14400 / (2 × 377) = 19.1 W/m² directly (since vacuum impedance Z₀ = μ₀c = 377 Ω).',
      commonErrors: ['Multiplying E₀ by c instead of dividing when computing B₀ = E₀ / c.', 'Forgetting the factor of ½ in average energy density for peak amplitude E₀.'],
      examTip: 'Remember: u_avg = ½ ε₀ E₀² (using peak E₀) or u_avg = ε₀ E_rms² (using RMS E_rms).'
    }
  ],
  diagrams: [
    {
      id: 'diag-5-1',
      name: 'Transverse Electromagnetic Wave Propagation with Orthogonal E and B Vectors',
      nameTa: 'செங்குத்தான E மற்றும் B வெக்டர்களுடன் மின்காந்த குறுக்கலை பரவுதல்',
      purpose: 'To visually demonstrate the transverse nature of EM waves where electric field vec{E} oscillates in the y-axis, magnetic field vec{B} oscillates in the z-axis, and the wave propagates along the x-axis at speed c.',
      components: ['x, y, z 3D Cartesian coordinate axes', 'Sinusoidal vertical Electric Field oscillations (y-axis)', 'Sinusoidal horizontal Magnetic Field oscillations (z-axis)', 'Propagation wave vector k along x-axis'],
      labelsEn: ['Electric Field vec{E} (vertical y-axis)', 'Magnetic Field vec{B} (horizontal z-axis)', 'Direction of Propagation vec{k} (x-axis, speed c)', 'Wavelength λ', 'Peak Electric Amplitude E₀', 'Peak Magnetic Amplitude B₀'],
      labelsTa: ['மின்புலம் vec{E} (செங்குத்து y-அச்சு)', 'காந்தப்புலம் vec{B} (கிடைமட்ட z-அச்சு)', 'பரவும் திசை vec{k} (x-அச்சு, வேகம் c)', 'அலைநீளம் λ', 'பெரும மின்புல வீச்சு E₀', 'பெரும காந்தப்புல வீச்சு B₀'],
      stepByStepExplanation: [
        'Draw 3D Cartesian axes: x-axis (horizontal right), y-axis (vertical up), z-axis (perspective out of page).',
        'Draw a vertical sinusoidal wave along the x-axis in the x-y plane and label it with red electric field vectors vec{E}.',
        'Draw a horizontal sinusoidal wave along the x-axis in the x-z plane and label it with blue magnetic field vectors vec{B}.',
        'Show that at every instant, vec{E} and vec{B} are mutually perpendicular to each other and to the x-axis of propagation.',
        'Mark one full wavelength λ between consecutive crests and label speed arrow c = 1 / √(μ₀ε₀).'
      ],
      studentObservation: 'Electric and magnetic fields reach their positive and negative peaks and zeros at the exact same positions and times (they are in phase, but perpendicular in spatial orientation).',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Drawing E and B out of phase with each other (they are in phase!).', 'Drawing E and B in the same plane instead of perpendicular 3D planes.'],
      aiImagePrompt: 'Scientific 3D vector diagram of a propagating Electromagnetic Wave. Horizontal coordinate axis x with propagation arrow labeled c = 3x10^8 m/s. Vibrant red sinusoidal wave oscillating vertically along y-axis with arrows labeled E-field. Vibrant blue sinusoidal wave oscillating horizontally along z-axis with arrows labeled B-field. Spatial 90-degree angle indicator between E and B. Wavelength lambda marked between crests. Clean white background, modern textbook vector illustration.'
    },
    {
      id: 'diag-5-2',
      name: 'Complete Electromagnetic Spectrum Chart (Frequency, Wavelength and Applications)',
      nameTa: 'முழுமையான மின்காந்த நிறமாலை வரைபடம் (அதிர்வெண், அலைநீளம் மற்றும் பயன்பாடுகள்)',
      purpose: 'To present the comprehensive spectrum from Radio waves to Gamma rays with corresponding wavelength scale, frequency scale, detectors, and real-world uses.',
      components: ['Wavelength scale in meters (10³ m down to 10⁻¹⁴ m)', 'Frequency scale in Hertz (10⁵ Hz up to 10²² Hz)', '7 distinct EM wave regions', 'VIBGYOR visible band expansion (700 nm to 400 nm)', 'Application icons'],
      labelsEn: ['Radio Waves', 'Microwaves', 'Infrared (IR)', 'Visible Light (VIBGYOR)', 'Ultraviolet (UV)', 'X-Rays', 'Gamma (γ) Rays', 'Increasing Frequency / Energy →', 'Increasing Wavelength ←'],
      labelsTa: ['ரேடியோ அலைகள்', 'மைக்ரோ அலைகள்', 'அகச்சிவப்பு', 'கட்புலனாகும் ஒளி (VIBGYOR)', 'புறஊதா', 'எக்ஸ்-கதிர்கள்', 'காமா கதிர்கள்', 'அதிர்வெண்/ஆற்றல் அதிகரிக்கும் திசை →', 'அலைநீளம் அதிகரிக்கும் திசை ←'],
      stepByStepExplanation: [
        'Draw a horizontal band partitioned into 7 color-coded sections.',
        'From left (lowest frequency) to right (highest frequency): Radio, Micro, Infrared, Visible, UV, X-rays, Gamma rays.',
        'Expand the small visible region into a rainbow prism showing Violet (400 nm) to Red (700 nm).',
        'Add top scale for Wavelength λ (m) and bottom scale for Frequency f (Hz).',
        'Annotate each band with primary application (e.g. Radar for Micro, Night-vision for IR, Bone X-ray, Cancer therapy for Gamma).'
      ],
      studentObservation: 'Energy and frequency increase from Radio to Gamma (E = hf), while wavelength decreases (λ = c/f). Visible light is only a minuscule sliver of the full spectrum.',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Swapping the positions of Infrared and Ultraviolet around the visible band.', 'Inverting the frequency vs wavelength relationship.'],
      aiImagePrompt: 'Clean modern educational chart of the Electromagnetic Spectrum. Horizontal spectrum divided into 7 distinct segments: Radio Waves, Microwaves, Infrared, Visible Light (with expanded 400nm-700nm VIBGYOR rainbow), Ultraviolet, X-rays, and Gamma Rays. Dual axis scales: Wavelength (meters) on top decreasing left-to-right, Frequency (Hz) and Photon Energy (eV) on bottom increasing left-to-right. Crisp icons representing applications. White background, vector style.'
    }
  ],
  graphs: [
    {
      id: 'graph-5-1',
      name: 'Blackbody Radiation and Solar Spectrum with Fraunhofer Absorption Lines',
      nameTa: 'கரும்பொருள் கதிர்வீச்சு மற்றும் ஃப்ரான்கோஃபர் உட்கவர் வரிகள் கொண்ட சூரிய நிறமாலை',
      xAxis: 'Wavelength λ (Nanometres, nm)',
      yAxis: 'Spectral Radiance / Intensity I(λ) (W m⁻² nm⁻¹)',
      units: 'λ in nm, Intensity in W m⁻² nm⁻¹',
      shape: 'Asymmetric Planck blackbody curve peaking in the visible region (~500 nm green-yellow) with sharp downward dips (dark Fraunhofer absorption lines).',
      importantPoints: ['Peak intensity at λ_max ≈ 500 nm (T ≈ 5800 K)', 'Sharp absorption dips: C-line (Hydrogen-alpha 656 nm), D-lines (Sodium 589 nm), F-line (Hydrogen-beta 486 nm), H & K lines (Calcium ion 393-397 nm)'],
      slope: 'Steep rise on UV side according to Planck’s law, gentle tail decay on Infrared side.',
      physicalMeaning: 'Proves the Sun behaves as a 5800 K blackbody radiator whose continuous emissions are filtered by cooler atmospheric gases in the chromosphere.',
      interpretation: 'Each sharp downward dip corresponds to the unique absorption fingerprint of a chemical element in the solar atmosphere.',
      mathematicalRelationship: '\\lambda_{max} \\cdot T = b \\approx 2.898 \\times 10^{-3} \\text{ m K (Wien’s Law)}',
      examQuestions: ['What are Fraunhofer lines? Explain how they help identify elements in the Sun.'],
      commonMistakes: ['Drawing Fraunhofer dips as emission peaks (they are negative absorption dips!).'],
      howToDrawInExam: 'Draw a smooth bell-shaped curve peaking near 500 nm, and draw several sharp vertical downward notches labeled H, Na, Ca, Fe to represent absorption dips.',
      aiGraphPrompt: 'Educational graph of the Solar Radiation Spectrum. Horizontal x-axis labeled Wavelength (nm) from 300 nm to 1000 nm with shaded visible VIBGYOR rainbow band. Smooth curved Planck blackbody radiation profile peaking at 500 nm, featuring distinct sharp downward narrow absorption spikes labeled with chemical symbols: D (Na), C (H-alpha), F (H-beta), H & K (Ca). White background, vector graph.'
    }
  ],
  experiments: [
    {
      id: 'exp-5-1',
      name: 'Hertz’s Experimental Demonstration of Electromagnetic Wave Production and Detection',
      nameTa: 'ஹெர்ட்ஸ் மின்காந்த அலை உற்பத்தி மற்றும் கண்டறிதல் செயல்முறை விளக்கம்',
      apparatus: ['Induction coil spark generator', 'Two large metallic spherical plates (Transmitter dipole)', 'Small spark gap S₁ with brass balls', 'Circular wire loop detector with small spark gap S₂', 'High voltage battery and key'],
      principle: 'Accelerated oscillating electric charges in an LC spark gap generate high-frequency electromagnetic waves that travel across space and induce oscillating currents in a resonant receiver loop, producing a synchronous spark.',
      principleTa: 'பொறி இடைவெளியில் முடுக்கப்பட்ட மின்னூட்டங்கள் மின்காந்த அலைகளை உருவாக்குகின்றன; இவ்வலைகள் இடைவெளியைக் கடந்து சென்று ஏற்பி வளையத்தில் ஒத்ததிர்வுப் பொறியைத் தூண்டுகின்றன.',
      procedure: [
        'Connect two large metallic plates to the secondary terminals of a high-voltage induction coil via spark gap S₁.',
        'Place a circular metallic ring detector with small spark gap S₂ a few meters away.',
        'Turn on induction coil to trigger high-voltage sparks across gap S₁.',
        'Observe simultaneous tiny sparks jumping across gap S₂ in the disconnected detector loop.',
        'Rotate the detector loop 90° to observe that sparking ceases, proving the transverse polarization nature of the waves.'
      ],
      observation: 'Whenever a spark jumps across transmitter gap S₁, a corresponding spark is simultaneously detected across receiver gap S₂ without any connecting wires.',
      result: 'Electromagnetic waves are radiated by accelerated charges, propagate at the speed of light, and exhibit transverse wave properties (polarization, reflection, refraction).',
      precautions: ['Maintain safe distance from high-voltage induction coil terminals.'],
      realLifeImportance: 'The foundational experiment that gave birth to radio, radar, cellular communications, and satellite broadcasting.',
      aiLabPrompt: 'Historical physics laboratory setup of Heinrich Hertz’s 1887 experiment. High-voltage induction coil connected to two large zinc plates with a central brass spark gap firing bright blue electric sparks. A few meters away, a polished brass circular receiver loop with a microscopic synchronized spark jumping across its gap. Clean vintage scientific illustration, white background.'
    }
  ],
  aiLesson: {
    lessonTitle: '3-Minute AI Interactive Lesson: The Universal Magic of Electromagnetic Waves',
    targetDuration: '5 Minutes',
    visualStyle: 'Stunning cosmic animation showing synchronized oscillating 3D E and B wave ripples propagating across the cosmos',
    format: '3D Scientific Animation & Interactive Explainer',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Invisible Waves Connecting Our Universe',
        explanationEn: 'Right now, billions of invisible waves are passing through your room—Wi-Fi, 5G cellular, GPS, sunlight, and cosmic gamma rays. What are they made of?',
        explanationTa: 'தற்போது உங்களைச் சுற்றிலும் Wi-Fi, 5G, சூரிய ஒளி போன்ற பில்லியன் கணக்கான அலைகள் பாய்கின்றன. அவை எதனால் ஆனவை?',
        explanationBilingual: 'They are all Electromagnetic Waves traveling at the universal speed limit: 300,000 km/s (c = 1 / √(μ₀ε₀)).',
        narrationScript: 'Welcome to Chapter 5! In 1865, James Clerk Maxwell discovered that light, radio, and X-rays are all ripples in the same unified electromagnetic fabric of space!',
        animationDescription: '3D smartphone sending a glowing wireless signal packet that morphs into a giant cosmic light wave traveling across galaxies.',
        keywordsDisplayed: ['Maxwell’s Theory', 'c = 3 × 10⁸ m/s', 'Transverse Waves'],
        realLifeExample: 'Wi-Fi routers, 5G smartphones, and GPS satellites.',
        interactiveQuestion: {
          question: 'Which of the following is the source of an electromagnetic wave?',
          questionTa: 'மின்காந்த அலையின் மூலம் எது?',
          options: ['An accelerated electric charge', 'A stationary electric charge', 'A charge moving with constant velocity', 'A neutral particle'],
          optionsTa: ['முடுக்கப்பட்ட மின்னூட்டம்', 'ஓய்வு நிலையிலுள்ள மின்னூட்டம்', 'மாறா திசைவேகத்தில் செல்லும் மின்னூட்டம்', 'மின்னூட்டமற்ற துகள்'],
          correctIndex: 0,
          explanation: 'Only accelerating charges create time-varying electric and magnetic fields that radiate self-sustaining electromagnetic waves.'
        },
        cameraDirection: 'Cosmic scale camera fly-through from smartphone antenna to deep space.'
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Displacement Current & Ampere-Maxwell Law',
        explanationEn: 'When a capacitor charges, changing electric flux in the gap creates a displacement current: I_d = ε₀ (dΦ_E / dt).',
        explanationTa: 'மின்தேக்கியில் மாறும் மின்புலம் இடப்பெயர்ச்சி மின்னோட்டத்தை உருவாக்குகிறது: I_d = ε₀ (dΦ_E / dt).',
        explanationBilingual: 'Total current (I_c + I_d) is continuous everywhere throughout the circuit.',
        narrationScript: 'Maxwell realized that a changing electric field in empty space generates a magnetic field, just like real wires carrying physical current!',
        animationDescription: 'Parallel capacitor plates charging up with glowing yellow conduction current in wires and pulsating blue displacement field lines spanning the vacuum gap.',
        keywordsDisplayed: ['I_d = ε₀ (dΦ_E/dt)', 'Ampere-Maxwell Law', 'Current Continuity'],
        realLifeExample: 'AC current crossing dielectric capacitors in audio circuit boards.',
        interactiveQuestion: {
          question: 'What is the displacement current in a capacitor connected to a steady DC battery after it is fully charged?',
          questionTa: 'முழுமையாக மின்னேற்றம் அடைந்த பின் DC மின்கலத்தில் இணைக்கப்பட்ட மின்தேக்கியின் இடப்பெயர்ச்சி மின்னோட்டம் என்ன?',
          options: ['Zero (I_d = 0)', 'Infinite', 'Equal to battery EMF', 'Constant 1 Ampere'],
          optionsTa: ['சுழி (I_d = 0)', 'முடிவிலி', 'மின்கல EMF-க்கு சமம்', '1 ஆம்பியர்'],
          correctIndex: 0,
          explanation: 'When fully charged, electric field is constant, so dΦ_E/dt = 0 and displacement current I_d drops to zero.'
        },
        cameraDirection: 'Close-up slow-motion tracking into the capacitor plate gap.'
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Working Principle: Transverse Nature & Speed of Light',
        explanationEn: 'Electric field vec{E} and Magnetic field vec{B} oscillate at 90° to each other and to the propagation direction: c = E₀ / B₀ = 1 / √(μ₀ε₀).',
        explanationTa: 'மின்புலம் மற்றும் காந்தப்புலம் ஒன்றுக்கொன்று 90° கோணத்தில் அலைவுற்று பரவுகின்றன: c = E₀ / B₀ = 1 / √(μ₀ε₀).',
        explanationBilingual: 'Energy is split equally between electric and magnetic fields (u_E = u_B).',
        narrationScript: 'Because E and B vectors oscillate strictly perpendicular to the direction of propagation, all electromagnetic waves are purely transverse waves!',
        animationDescription: '3D vector animation with vertical red E-field arrows and horizontal blue B-field arrows traveling synchronously along the x-axis at 300,000 km/s.',
        keywordsDisplayed: ['vec{E} ⊥ vec{B} ⊥ vec{k}', 'c = 1 / √(μ₀ε₀)', 'Poynting Vector S = (E × B)/μ₀'],
        realLifeExample: 'Polarized sunglasses blocking glare from horizontal light waves.',
        interactiveQuestion: {
          question: 'In a vacuum, which electromagnetic wave travels faster: Radio waves or Gamma rays?',
          questionTa: 'வெற்றிடத்தில் ரேடியோ அலைகள் மற்றும் காமா கதிர்களில் எது வேகமாகப் பரவும்?',
          options: ['Both travel at the exact same speed (c = 3 × 10⁸ m/s)', 'Gamma rays', 'Radio waves', 'Depends on intensity'],
          optionsTa: ['இரண்டும் ஒரே வேகத்தில் பரவும் (c = 3 × 10⁸ m/s)', 'காமா கதிர்கள்', 'ரேடியோ அலைகள்', 'செறிவை பொருத்தது'],
          correctIndex: 0,
          explanation: 'In vacuum, ALL electromagnetic waves regardless of frequency or wavelength travel at the exact same speed c = 3.0 × 10⁸ m/s.'
        },
        cameraDirection: 'Orbital 360-degree rotation around the orthogonal E-B wave.'
      },
      {
        sceneNumber: 4,
        sceneTitle: 'The EM Spectrum: From Radio to Gamma Rays',
        explanationEn: 'The spectrum spans 7 major bands: Radio, Microwave, Infrared, Visible (VIBGYOR), Ultraviolet, X-rays, and Gamma rays.',
        explanationTa: 'மின்காந்த நிறமாலை ரேடியோ முதல் காமா கதிர்கள் வரை 7 முக்கிய பிரிவுகளாகப் பிரிக்கப்பட்டுள்ளது.',
        explanationBilingual: 'Radio has longest wavelength; Gamma has highest frequency and energy (E = hf).',
        narrationScript: 'From radar detecting airplanes with microwaves to hospital X-rays revealing fractured bones and gamma rays treating tumors, each band plays a vital role in technology!',
        animationDescription: 'Interactive glowing holographic spectrum ribbon with animated icons: Wi-Fi router (Radio/Micro), TV remote (IR), human eye (Visible), Sun (UV), skeleton (X-ray), and atomic nucleus (Gamma).',
        keywordsDisplayed: ['Radio → Micro → IR → Visible → UV → X-ray → Gamma', 'E = h f = h c / λ'],
        realLifeExample: 'Microwave ovens heating food and hospital CT radiography scanners.',
        interactiveQuestion: {
          question: 'Which electromagnetic radiation is used to treat cancer tumors in radiotherapy?',
          questionTa: 'புற்றுநோய் சிகிச்சையில் பயன்படும் மின்காந்த கதிர்வீச்சு எது?',
          options: ['Gamma Rays (from Cobalt-60)', 'Infrared waves', 'Radio waves', 'Microwaves'],
          optionsTa: ['காமா கதிர்கள் (Cobalt-60)', 'அகச்சிவப்பு கதிர்கள்', 'ரேடியோ அலைகள்', 'மைக்ரோ அலைகள்'],
          correctIndex: 0,
          explanation: 'High-energy penetrating Gamma rays destroy cancerous cells in radiation oncology.'
        },
        cameraDirection: 'Smooth linear horizontal pan across the 7 spectrum bands.'
      },
      {
        sceneNumber: 5,
        sceneTitle: 'Real-Life Application: Fraunhofer Lines & Star Fingerprints',
        explanationEn: 'Dark absorption lines in the solar spectrum (Fraunhofer lines) reveal the exact chemical elements burning in the Sun’s atmosphere.',
        explanationTa: 'சூரிய நிறமாலையிலுள்ள இருண்ட ஃப்ரான்கோஃபர் வரிகள் சூரியனில் உள்ள தனிமங்களை அடையாளம் காட்டுகின்றன.',
        explanationBilingual: 'Cooler outer gases absorb their characteristic emission lines, creating dark absorption dips.',
        narrationScript: 'By decoding these dark Fraunhofer barcodes, astronomers discovered Helium on the Sun twenty-seven years before it was ever found on Earth!',
        animationDescription: '3D Sun emitting white light passing through a gaseous atmosphere, emerging as a rainbow spectrum stamped with sharp dark absorption lines labeled H, He, Na, and Fe.',
        keywordsDisplayed: ['Fraunhofer Lines', 'Solar Chromosphere Absorption', 'Helium Discovery'],
        realLifeExample: 'James Webb Space Telescope analyzing atmospheres of distant exoplanets.',
        interactiveQuestion: {
          question: 'Fraunhofer lines in the solar spectrum are examples of:',
          questionTa: 'சூரிய நிறமாலையிலுள்ள ஃப்ரான்கோஃபர் வரிகள் எதற்கு எடுத்துக்காட்டு?',
          options: ['Line Absorption Spectrum', 'Continuous Emission Spectrum', 'Band Emission Spectrum', 'Line Emission Spectrum'],
          optionsTa: ['வரி உட்கவர் நிறமாலை', 'தொடர் உமிழ்வு நிறமாலை', 'பட்டை உமிழ்வு நிறமாலை', 'வரி உமிழ்வு நிறமாலை'],
          correctIndex: 0,
          explanation: 'Fraunhofer lines are line absorption spectra produced when continuous solar core light passes through cooler gaseous elements in the Sun’s outer atmosphere.'
        },
        cameraDirection: 'Dramatic zoom from solar corona into the spectral prism analyzer.'
      },
      {
        sceneNumber: 6,
        sceneTitle: 'Summary & Exam Success Checklist',
        explanationEn: 'Review the key derivations: Displacement current formula, Speed of light c = 1/√(μ₀ε₀), and EM spectrum uses.',
        explanationTa: 'இடப்பெயர்ச்சி மின்னோட்டம், ஒளியின் வேகம் மற்றும் மின்காந்த நிறமாலையின் பயன்பாடுகளை முழுமையாக மீள்பார்வை செய்யுங்கள்.',
        explanationBilingual: 'Remember: E₀ = c · B₀, and energy is shared equally (u_E = u_B)!',
        narrationScript: 'Congratulations on completing all five chapters of Class 12 Physics Volume 1! With these core principles and formulas mastered, you are fully prepared to score top marks!',
        animationDescription: 'Grand championship trophy with all Volume 1 chapter titles glowing in radiant gold and green.',
        keywordsDisplayed: ['I_d = ε₀(dΦ_E/dt)', 'c = 1/√(μ₀ε₀)', 'E₀ = c·B₀', 'Volume 1 Complete!'],
        realLifeExample: 'Volume 1 mastery achieved.',
        interactiveQuestion: {
          question: 'What is the ratio of electric energy density (u_E) to magnetic energy density (u_B) in an electromagnetic wave in vacuum?',
          questionTa: 'வெற்றிடத்தில் மின்காந்த அலையின் மின் ஆற்றல் அடர்த்திக்கும் (u_E) காந்த ஆற்றல் அடர்த்திக்கும் (u_B) உள்ள தகவு என்ன?',
          options: ['1 : 1 (Equal)', '2 : 1', '1 : 2', 'c : 1'],
          optionsTa: ['1 : 1 (சமம்)', '2 : 1', '1 : 2', 'c : 1'],
          correctIndex: 0,
          explanation: 'In an EM wave, energy is equally distributed between the electric and magnetic fields: u_E = u_B, so the ratio is exactly 1:1.'
        },
        cameraDirection: 'Triumphant 360-degree ascending victory shot.'
      }
    ]
  },
  voiceNarration: {
    scriptEn: 'Welcome Class 12 Physics champions to Chapter 5: Electromagnetic Waves! Let us synthesize the unifying concepts. James Clerk Maxwell solved the capacitor charging paradox by discovering Displacement Current: I_d equals epsilon naught times the rate of change of electric flux, leading to the generalized Ampere-Maxwell Law. Maxwell’s four fundamental equations summarize all classical electrodynamics. When electric charges accelerate, they radiate transverse electromagnetic waves where the electric field and magnetic field oscillate perpendicular to each other and to the propagation direction. In vacuum, all electromagnetic waves travel at the speed of light: c equals one over square root of mu naught times epsilon naught, which equals three times ten to the power eight meters per second, with peak amplitudes related by E naught equals c times B naught. The total energy density is equally partitioned between electric and magnetic fields. The Electromagnetic Spectrum spans seven distinct bands: Radio waves for cellular broadcasting, Microwaves for radar and cooking, Infrared for heat imaging, Visible light for human vision, Ultraviolet for sterilization, X-rays for bone radiography, and Gamma rays for cancer treatment. Finally, Fraunhofer lines are dark absorption lines in the solar spectrum that reveal the chemical composition of the Sun’s atmosphere. You have now completed the entire Volume 1 syllabus with full conceptual and exam mastery!',
    scriptTa: 'வணக்கம் மாணவர்களே! அத்தியாயம் 5: மின்காந்த அலைகள் பாடத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம். மேக்ஸ்வெல் மின்தேக்கி மின்னேற்றத்திலுள்ள முரண்பாட்டைத் தீர்த்து இடப்பெயர்ச்சி மின்னோட்டம் I_d = ε₀ (dΦ_E/dt) என்ற கருத்தை உருவாக்கினார். நான்கு மேக்ஸ்வெல் சமன்பாடுகள் ஒட்டுமொத்த மின்காந்தவியலையும் விவரிக்கின்றன. முடுக்கப்பட்ட மின்னூட்டங்கள் மின்காந்தக் குறுக்கலைகளை உருவாக்குகின்றன. வெற்றிடத்தில் இவ்வலைகள் ஒளியின் வேகத்தில் (c = 1 / √(μ₀ε₀) = 3 × 10⁸ m/s) பரவுகின்றன; E₀ = c · B₀ ஆகும். மின்காந்த அலையின் ஆற்றல் மின்புலம் மற்றும் காந்தப்புலங்களிடையே சமமாகப் பிரிக்கப்படுகிறது. மின்காந்த நிறமாலையின் 7 பிரிவுகள்: ரேடியோ அலைகள் (தகவல் தொடர்பு), மைக்ரோ அலைகள் (ரேடார், அடுப்பு), அகச்சிவப்பு (இரவு நேர பார்வை), கட்புலனாகும் ஒளி (பார்வை), புறஊதா (கிருமி நீக்கம்), எக்ஸ்-கதிர்கள் (எலும்பு முறிவு படம்), காமா கதிர்கள் (புற்றுநோய் சிகிச்சை). சூரிய நிறமாலையில் காணப்படும் இருண்ட ஃப்ரான்கோஃபர் வரிகள் சூரியனில் உள்ள தனிமங்களை வெளிப்படுத்துகின்றன. இத்துடன் 12-ஆம் வகுப்பு இயற்பியல் தொகுதி 1-ன் அனைத்து 5 பாடங்களும் வெற்றிகரமாக நிறைவடைந்துள்ளன! முழு மதிப்பெண் பெற மனமார்ந்த வாழ்த்துகள்!',
    scriptBilingual: 'Hello Students! Welcome to Electromagnetic Waves. Let us review: Displacement current is I_d = ε₀(dΦ_E/dt). Ampere-Maxwell Law gives ∮ B·dl = μ₀(I_c + I_d). EM waves are transverse (E ⊥ B ⊥ k) and produced by accelerated charges. Speed in vacuum is c = 1/√(μ₀ε₀) = 3 × 10⁸ m/s. E₀ = c · B₀, and energy density is equally shared (u_E = u_B). The EM spectrum spans Radio → Micro → IR → Visible → UV → X-rays → Gamma rays. Fraunhofer lines are dark line absorption spectra revealing chemical elements in the Sun. Congratulations on mastering all 5 chapters of Class 12 Physics Volume 1!',
    audioDurationSeconds: 180,
    recommendedTone: 'Grand, triumphant, inspiring, precise, and motivating master teacher voice.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'What is the velocity of electromagnetic waves in a material medium of permittivity ε and permeability μ?',
        qTa: 'விடுதிறன் ε மற்றும் உட்புகுதிறன் μ கொண்ட ஊடகத்தில் மின்காந்த அலையின் திசைவேகம் யாது?',
        a: 'v = 1 / √(μ ε) = c / n, where n is the refractive index of the medium.',
        aTa: 'v = 1 / √(μ ε) = c / n (இங்கு n என்பது ஊடகத்தின் ஒளிவிலகல் எண்).'
      },
      {
        q: 'Which electromagnetic wave has the shortest wavelength and highest photon energy in the spectrum?',
        qTa: 'மின்காந்த நிறமாலையிலேயே மிகக் குறைந்த அலைநீளமும் அதிக போட்டான் ஆற்றலும் கொண்ட அலை எது?',
        a: 'Gamma Rays (γ-rays) with wavelength λ < 10⁻¹² m.',
        aTa: 'காமா கதிர்கள் (λ < 10⁻¹² m).'
      },
      {
        q: 'What is the source of an electromagnetic wave?',
        qTa: 'மின்காந்த அலையின் மூலம் எது?',
        a: 'An accelerated or oscillating electric charge.',
        aTa: 'முடுக்கப்பட்ட அல்லது அலைவுறும் மின்னூட்டம்.'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'What is displacement current? State its mathematical expression.',
        qTa: 'இடப்பெயர்ச்சி மின்னோட்டம் என்றால் என்ன? அதன் கணித சமன்பாட்டைக் கூறுக.',
        a: 'Displacement current is the current produced in a region due to a time-varying electric field / flux: I_d = ε₀ (dΦ_E / dt) = ε₀ A (dE / dt).',
        aTa: 'காலத்தைப் பொருத்து மாறும் மின்புலம் அல்லது மின்பாயத்தினால் உருவாகும் மின்னோட்டம் இடப்பெயர்ச்சி மின்னோட்டம் ஆகும்: I_d = ε₀ (dΦ_E / dt).'
      },
      {
        q: 'What are Fraunhofer lines? What is their scientific importance?',
        qTa: 'ஃப்ரான்கோஃபர் வரிகள் என்றால் என்ன? அவற்றின் அறிவியல் முக்கியத்துவம் யாது?',
        a: 'Fraunhofer lines are dark absorption lines observed across the continuous solar spectrum, produced when light from the hot solar core passes through cooler elemental vapors in the Sun’s chromosphere. They reveal the chemical elements (H, He, Na, Ca, Fe) present in the Sun’s atmosphere.',
        aTa: 'சூரியனின் தொடர் நிறமாலையில் காணப்படும் இருண்ட உட்கவர் வரிகள் ஃப்ரான்கோஃபர் வரிகள் எனப்படும். சூரிய வளிமண்டலத்தில் உள்ள தனிமங்களை (H, He, Na, Fe) கண்டறிய இவை பயன்படுகின்றன.'
      },
      {
        q: 'State any four important properties of electromagnetic waves.',
        qTa: 'மின்காந்த அலைகளின் ஏதேனும் நான்கு முக்கிய பண்புகளைக் கூறுக.',
        a: '1. Produced by accelerated charges. 2. Transverse in nature (E ⊥ B ⊥ k). 3. Travel in vacuum at speed c = 3 × 10⁸ m/s without requiring any material medium. 4. Energy is shared equally between electric and magnetic fields (u_E = u_B).',
        aTa: '1. முடுக்கப்பட்ட மின்னூட்டங்களால் உருவாகின்றன. 2. குறுக்கலை இயல்புடையவை. 3. வெற்றிடத்தில் 3 × 10⁸ m/s வேகத்தில் பரவுகின்றன. 4. மின் மற்றும் காந்த ஆற்றல் அடர்த்திகள் சமமாகும் (u_E = u_B).'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'State Maxwell’s four fundamental equations of electromagnetism in integral form and explain their physical meaning.',
        qTa: 'மேக்ஸ்வெல்லின் நான்கு அடிப்படை சமன்பாடுகளைத் தொகையீட்டு வடிவில் எழுதி அவற்றின் இயற்பியல் பொருளை விளக்குக.',
        a: '1. Gauss’s Law (Electrostatics): ∮ E·dA = Q/ε₀ (Electric charges create electric fields). 2. Gauss’s Law (Magnetism): ∮ B·dA = 0 (Isolated magnetic monopoles do not exist). 3. Faraday’s Law: ∮ E·dl = -dΦ_B/dt (Changing magnetic flux induces electric field). 4. Ampere-Maxwell Law: ∮ B·dl = μ₀ I_c + μ₀ ε₀ dΦ_E/dt (Conduction current and changing electric flux both create magnetic fields).',
        aTa: '1. மின் காஸ் விதி: ∮ E·dA = Q/ε₀ (மின்னூட்டங்கள் மின்புலத்தை உருவாக்குகின்றன). 2. காந்த காஸ் விதி: ∮ B·dA = 0 (தனித்த காந்த துருவங்கள் இல்லை). 3. ஃபாரடே விதி: ∮ E·dl = -dΦ_B/dt (மாறும் காந்தப்பாயம் மின்புலத்தைத் தூண்டுகிறது). 4. ஆம்பியர்-மேக்ஸ்வெல் விதி: ∮ B·dl = μ₀ I_c + μ₀ ε₀ dΦ_E/dt (கடத்து மின்னோட்டம் மற்றும் மாறும் மின்பாயம் காந்தப்புலத்தை உருவாக்குகின்றன).'
      },
      {
        q: 'Give the wavelength range, production method, and two applications each for Microwaves and Infrared waves.',
        qTa: 'மைக்ரோ அலைகள் மற்றும் அகச்சிவப்பு அலைகளின் அலைநீள வரம்பு, உற்பத்தி முறை மற்றும் தலா இரு பயன்பாடுகளைத் தருக.',
        a: 'Microwaves: Range: 0.1 m to 1 mm; Production: Special vacuum tubes (Magnetron, Klystron); Uses: Radar systems and Microwave cooking ovens. Infrared waves: Range: 1 mm to 700 nm; Production: Hot bodies and molecular vibrations; Uses: Night-vision thermal imaging cameras and TV remote controls.',
        aTa: 'மைக்ரோ அலைகள்: வரம்பு: 0.1 m முதல் 1 mm; உற்பத்தி: மேக்னட்ரான், கிளைஸ்ட்ரான்; பயன்பாடுகள்: ரேடார் மற்றும் மைக்ரோவேவ் அடுப்புகள். அகச்சிவப்பு அலைகள்: வரம்பு: 1 mm முதல் 700 nm; உற்பத்தி: வெப்பமான பொருட்கள்; பயன்பாடுகள்: இரவு நேர வெப்பப் படக்கருவிகள் மற்றும் TV ரிமோட் கண்ட்ரோல்.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Explain the inconsistency in Ampere’s circuital law during capacitor charging. Derive the expression for displacement current and state the generalized Ampere-Maxwell Law.',
        qTa: 'மின்தேக்கி மின்னேற்றத்தின் போது ஆம்பியர் விதியிலுள்ள முரண்பாட்டை விளக்குக. இடப்பெயர்ச்சி மின்னோட்டத்திற்கான சமன்பாட்டை வருவித்து ஆம்பியர்-மேக்ஸ்வெல் விதியைக் கூறுக.',
        a: 'Step 1: Consider charging capacitor with surfaces S₁ (in wire) and S₂ (between plates). Step 2: Show original Ampere’s law gives ∮ B·dl = μ₀ I_c for S₁ and ∮ B·dl = 0 for S₂, creating an inconsistency. Step 3: Write electric field E = Q / (ε₀ A) and flux Φ_E = E A = Q / ε₀. Step 4: Differentiate dΦ_E/dt = (1/ε₀) dQ/dt = I_c / ε₀. Step 5: Define displacement current I_d = ε₀ (dΦ_E / dt). Step 6: State Ampere-Maxwell Law: ∮ B·dl = μ₀ (I_c + I_d) = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt).',
        aTa: 'படி 1: மின்தேக்கி மின்னேற்றத்தின் போது S₁ மற்றும் S₂ பரப்புகளைக் கருதுதல். படி 2: S₁-ல் ∮ B·dl = μ₀ I_c எனவும், S₂-ல் ∮ B·dl = 0 எனவும் வரும் முரண்பாட்டைக் காட்டுதல். படி 3: மின்புலம் E = Q/(ε₀ A) மற்றும் மின்பாயம் Φ_E = Q/ε₀ என எழுதுதல். படி 4: வகையீடு செய்தல்: dΦ_E/dt = I_c/ε₀. படி 5: இடப்பெயர்ச்சி மின்னோட்டம் I_d = ε₀ (dΦ_E/dt) என வரையறுத்தல். படி 6: ஆம்பியர்-மேக்ஸ்வெல் விதி: ∮ B·dl = μ₀ I_c + μ₀ ε₀ (dΦ_E/dt) என நிறைவு செய்தல்.'
      },
      {
        q: 'Describe the complete Electromagnetic Spectrum detailing the wavelength ranges, frequency ranges, sources, and practical applications of all seven types of electromagnetic waves.',
        qTa: 'மின்காந்த நிறமாலையின் 7 அலைகளின் அலைநீள வரம்பு, அதிர்வெண் வரம்பு, மூலங்கள் மற்றும் நடைமுறைப் பயன்பாடுகளை விரிவாக விவரிக்கவும்.',
        a: 'Provide a structured tabular/bulleted explanation covering: 1. Radio waves (>0.1m, LC circuits, communication), 2. Microwaves (0.1m-1mm, Magnetron, Radar/Ovens), 3. Infrared (1mm-700nm, Hot bodies, Thermography/Remotes), 4. Visible (700nm-400nm, Atomic transitions, Vision), 5. Ultraviolet (400nm-1nm, Sparks/Sun, Sterilization/Currency check), 6. X-rays (1nm-10⁻³nm, High-speed electron deceleration on metal target, Medical radiography/Crystallography), 7. Gamma rays (<10⁻¹²m, Radioactive nuclei decay, Cancer radiotherapy/Food preservation).',
        aTa: 'அனைத்து 7 அலைகளையும் பட்டியலிடுதல்: 1. ரேடியோ அலைகள் (தகவல் தொடர்பு), 2. மைக்ரோ அலைகள் (ரேடார், அடுப்பு), 3. அகச்சிவப்பு (இரவு நேர பார்வை, ரிமோட்), 4. கட்புலனாகும் ஒளி (பார்வை), 5. புறஊதா (கிருமி நீக்கம்), 6. எக்ஸ்-கதிர்கள் (மருத்துவ எலும்பு படம்), 7. காமா கதிர்கள் (புற்றுநோய் சிகிச்சை).'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Displacement Current & Ampere-Maxwell Law Derivation (5 Marks)',
      'Properties of Electromagnetic Waves (3/5 Marks)',
      'EM Spectrum Applications (Radio, Micro, IR, UV, X-rays, Gamma) (3/5 Marks)',
      'Maxwell’s 4 Equations in integral form (3 Marks)',
      'Fraunhofer Absorption Lines in Solar Spectrum (2/3 Marks)'
    ]
  },
  faqs: [
    {
      category: 'Conceptual',
      question: 'Why are microwaves used in radar systems instead of radio waves?',
      questionTa: 'ரேடியோ அலைகளுக்குப் பதிலாக ரேடாரில் மைக்ரோ அலைகள் பயன்படுத்தப்படுவது ஏன்?',
      answer: 'Microwaves have much shorter wavelengths (0.1 m to 1 mm) and therefore undergo very little diffraction, allowing them to be beamed in narrow, highly directional straight rays that reflect sharply off aircraft and distant targets.',
      answerTa: 'மைக்ரோ அலைகள் குறைந்த அலைநீளம் கொண்டிருப்பதால் விளிம்பு விளைவு மிகக் குறைவாக ஏற்பட்டு, நேர்கோட்டில் குறுகிய கற்றையாகச் சென்று தொலைதூர விமானங்களை துல்லியமாகக் கண்டறிய உதவுகிறது.'
    },
    {
      category: 'Board Exam',
      question: 'Why does Earth’s atmosphere not let X-rays and Gamma rays reach the surface?',
      questionTa: 'எக்ஸ்-கதிர்களும் காமா கதிர்களும் பூமியின் மேற்பரப்பை அடையாமல் வளிமண்டலம் தடுப்பது ஏன்?',
      answer: 'The dense atmospheric layers of nitrogen, oxygen, and ozone strongly absorb high-energy ionizing X-rays and gamma rays, shielding living organisms on Earth from lethal cosmic radiation.',
      answerTa: 'பூமியின் வளிமண்டலத்திலுள்ள நைட்ரஜன், ஆக்சிஜன் மற்றும் ஓசோன் வாயுக்கள் இந்த உயர் ஆற்றல் கதிர்களை முழுமையாக உட்கவர்ந்து பூமியிலுள்ள உயிரினங்களைப் பாதுகாக்கின்றன.'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Writing peak field relation as B₀ = c · E₀.',
      correctWay: 'E₀ is always much larger in SI units: E₀ = c · B₀ (or B₀ = E₀ / c).'
    },
    {
      category: 'Exam Presentation',
      mistake: 'Thinking sound waves are electromagnetic waves.',
      correctWay: 'Sound waves are mechanical longitudinal pressure waves requiring a material medium; EM waves are transverse oscillations of electric and magnetic fields that travel through vacuum.'
    }
  ],
  memoryTricks: [
    {
      title: 'EM Spectrum Order Mnemonic (Lowest to Highest Frequency)',
      titleTa: 'மின்காந்த நிறமாலை நினைவுக்குறிப்பு',
      trick: '"Raging Martians Invaded Venus Using X-ray Guns" → Radio, Micro, Infrared, Visible, Ultraviolet, X-ray, Gamma.',
      explanation: 'From longest wavelength (Radio) to highest energy (Gamma).'
    },
    {
      title: 'Field Speed Relationship Trick',
      titleTa: 'மின்-காந்தப்புல தொடர்பு நினைவுக்குறிப்பு',
      trick: '"E is Huge, B is Tiny" → E₀ = c × B₀ (where c is 300,000,000 m/s).',
      explanation: 'To get Electric field E, multiply B by speed of light c.'
    }
  ],
  summary: {
    keyTakeaways: [
      'Displacement current I_d = ε₀ (dΦ_E/dt) maintains current continuity across capacitor gaps.',
      'Maxwell’s four equations unify all electric and magnetic phenomena into a single framework.',
      'EM waves are transverse (E ⊥ B ⊥ k) traveling at c = 1 / √(μ₀ε₀) = 3 × 10⁸ m/s in vacuum.',
      'Energy is shared equally between electric and magnetic fields: u_E = u_B = ½ u_total.',
      'The 7 spectrum bands have unique applications, and Fraunhofer lines reveal stellar chemical compositions.'
    ],
    quickRevisionNotes: [
      'Displacement Current: I_d = ε₀ (dΦ_E / dt)',
      'Ampere-Maxwell Law: ∮ B · dl = μ₀ I_c + μ₀ ε₀ (dΦ_E / dt)',
      'Speed of Light: c = 1 / √(μ₀ε₀) = E₀ / B₀ = 3 × 10⁸ m s⁻¹',
      'Poynting Vector: S = (1 / μ₀) (E × B); Energy Density: u = ε₀ E²',
      'EM Spectrum Order: Radio → Micro → IR → Visible → UV → X-ray → Gamma',
      'Wien’s Law: λ_max · T = 2.898 × 10⁻³ m K',
      'Fraunhofer Lines: Dark line absorption spectra in the continuous solar spectrum'
    ]
  }
};
