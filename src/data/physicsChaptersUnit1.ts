import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_1_ELECTROSTATICS: PhysicsChapter = {
  chapterNumber: 1,
  chapterName: 'Electrostatics',
  chapterNameTa: 'நிலைமின்னியல்',
  unitNumber: 1,
  unitName: 'Electrostatics',
  unitNameTa: 'நிலைமின்னியல்',
  overview: 'Comprehensive study of stationary electric charges, Coulomb’s inverse square law, electrostatic fields, electric dipoles, electrostatic potential and potential energy, Gauss’s law with symmetric applications, capacitors, dielectrics, and high-voltage generation using the Van de Graaff generator.',
  overviewTa: 'ஓய்வு நிலையிலுள்ள மின்னூட்டங்கள், கூலூம் விதி, மின்புலம், மின் இருமுனை, நிலைமின்னழுத்தம் மற்றும் மின்னழுத்த ஆற்றல், காஸ் விதி மற்றும் அதன் பயன்பாடுகள், மின்தேக்கிகள், மின்காப்பிகள் மற்றும் வான் டி கிராப் மின்னியற்றி பற்றிய முழுமையான பாடம்.',
  introduction: 'Electrostatics deals with the forces, fields, and potentials arising from static (stationary) electric charges. From the crackle of a synthetic sweater in dry air to the colossal energy in thunderclouds and the operation of touchscreen smartphones and defibrillators, electrostatic principles govern fundamental atomic forces and modern high-voltage technology.',
  introductionTa: 'நிலைமின்னியல் என்பது ஓய்வு நிலையில் உள்ள மின்னூட்டங்களுக்கு இடையே செயல்படும் விசை, மின்புலம் மற்றும் மின்னழுத்தம் ஆகியவற்றை ஆராயும் இயற்பியல் பிரிவாகும். உலர் காற்றில் ஆடை உராய்வு முதல் மின்னல் மற்றும் நவீன தொடுதிரைகள், மின்தேக்கிகள் வரை நிலைமின்னியல் விதிகள் பயன்படுகின்றன.',
  learningObjectives: [
    'Understand electric charges, quantization (q = ne), and conservation of charge.',
    'Formulate Coulomb’s Law in scalar and vector form, distinguishing it from Newton’s gravitational law.',
    'Compute electric field due to point charges, continuous charge distributions, and dipoles on axial and equatorial lines.',
    'Derive electrostatic potential, potential difference, and equipotential surfaces.',
    'Apply Gauss’s Law to find electric fields of infinitely long charged wires, plane sheets, and spherical shells.',
    'Analyze capacitance, series and parallel combinations, energy stored in capacitors, and dielectric effects.',
    'Understand electrostatic shielding, action of points (corona discharge), and working of the Van de Graaff generator.'
  ],
  learningObjectivesTa: [
    'மின்னூட்டங்களின் குவாண்டமாக்கல் (q = ne) மற்றும் மாறாத் தன்மையைப் புரிந்து கொள்ளுதல்.',
    'கூலூம் விதியை வெக்டர் வடிவில் எழுதி ஈர்ப்பு விதியோடு ஒப்பிடுதல்.',
    'அச்சுக்கோடு மற்றும் நடுவரைக் கோடுகளில் மின் இருமுனையால் உருவாகும் மின்புலத்தை வருவித்தல்.',
    'நிலைமின்னழுத்தம், மின்னழுத்த வேறுபாடு மற்றும் சமமின்னழுத்தப் பரப்புகளைக் கற்றல்.',
    'நீண்ட கம்பி, சமதளத் தட்டு மற்றும் கோளக்கூடுகளுக்கு காஸ் விதியைப் பயன்படுத்தி மின்புலம் காணுதல்.',
    'மின்தேக்கிகளின் தொடர்-இணை இணைப்பு, மின்தேக்கியில் சேமிக்கப்படும் ஆற்றல் மற்றும் மின்காப்பின் விளைவை அறிதல்.',
    'நிலைமின் தடுப்புறை, கூர்முனைச் செயல்பாடு மற்றும் வான் டி கிராப் மின்னியற்றியின் செயல்பாட்டை அறிதல்.'
  ],
  importance: 'Foundational chapter carrying 10-14 marks in TN State Board examination, featuring high-frequency 5-mark derivations (Axial & Equatorial field of Dipole, Gauss’s Law applications, Van de Graaff generator) and critical numerical problems.',
  prerequisites: [
    'Vector addition and resolution of vectors (Class 11 Physics Unit 2)',
    'Newton’s Law of Gravitation (Class 11 Physics Unit 6)',
    'Concept of Work, Energy, and Conservative Forces (Class 11 Physics Unit 4)'
  ],
  everydayApplications: [
    'Photocopiers (Xerox machines) and Laser Printers using electrostatic toner attraction',
    'Electrostatic precipitators in thermal power plants to remove polluting smoke particles',
    'Automobile electrostatic spray painting for uniform scratch-resistant coating',
    'Defibrillators in emergency medicine using rapid capacitor discharge to restore cardiac rhythm',
    'Touchscreens in modern smartphones utilizing capacitive sensing grids'
  ],
  historicalBackground: 'Observed by Thales of Miletus around 600 BC by rubbing amber with fur. Benjamin Franklin introduced the terms positive and negative charges in 1750. Charles-Augustin de Coulomb formulated the exact inverse square force law in 1785 using a torsion balance. Carl Friedrich Gauss later simplified flux calculations.',
  scientists: [
    { name: 'Charles-Augustin de Coulomb', contribution: 'Formulated the inverse-square force law between electrostatic charges', year: '1785' },
    { name: 'Michael Faraday', contribution: 'Introduced the concept of electric field lines and electrostatic shielding', year: '1831' },
    { name: 'Carl Friedrich Gauss', contribution: 'Formulated Gauss’s law relating electric flux to enclosed charge', year: '1835' },
    { name: 'Robert J. Van de Graaff', contribution: 'Invented the high-voltage electrostatic generator producing millions of volts', year: '1929' }
  ],
  majorDiscoveries: [
    'Quantization of electric charge by Millikan’s oil drop experiment (1909)',
    'Faraday Cage & Electrostatic Shielding (1836)',
    'High-voltage Van de Graaff acceleration of nuclear particles (1929)'
  ],
  realWorldRelevance: 'Crucial for electrical engineering, semiconductor microchip design, lightning protection systems, and biomedical pulse delivery devices.',
  topics: [
    {
      id: 'top-1-1',
      topicNumber: '1.1',
      title: 'Historical Background, Electric Charge & Conservation',
      titleTa: 'வரலாற்றுப் பின்னணி, மின்னூட்டம் மற்றும் மாறாத்தன்மை',
      beginnerExplanation: 'Everything in our universe is made of atoms containing protons (+), electrons (-), and neutrons. Electric charge is an intrinsic scalar property. Like charges repel, unlike charges attract. Charges cannot be created or destroyed, only transferred.',
      beginnerExplanationTa: 'அனைத்துப் பொருட்களும் அணுக்களால் ஆனவை. அணுவில் நேர்மின்னூட்டம் கொண்ட புரோட்டான்களும், எதிர்மின்னூட்டம் கொண்ட எலக்ட்ரான்களும் உள்ளன. ஓரின மின்னூட்டங்கள் ஒன்றையொன்று விலக்கும், எதிரின மின்னூட்டங்கள் ஈர்க்கும். மின்னூட்டத்தை உருவாக்கவோ அழிக்கவோ முடியாது.',
      coreConcepts: [
        'Quantization of charge: q = ± n·e (where e = 1.602 × 10⁻¹⁹ C, n = 1, 2, 3...)',
        'Additive nature of charges: Total charge Q = q₁ + q₂ + q₃ + ...',
        'Conservation of charge: The total net electric charge of an isolated system remains constant.'
      ],
      definitions: [
        {
          term: 'Quantization of Electric Charge',
          termTa: 'மின்னூட்டத்தின் குவாண்டமாக்கல்',
          definitionEn: 'The property that the electric charge of any body is always an integral multiple of the basic quantum of charge e (q = ne).',
          definitionTa: 'எந்தவொரு பொருளின் மொத்த மின்னூட்டமும் அடிப்படை மின்னூட்டம் e-ன் முழு எண் மடங்காகவே இருக்கும் (q = ne).',
          keyPoints: ['e = 1.6 × 10⁻¹⁹ C', 'Microscopic quantization is observable', 'Macroscopic charges appear continuous']
        }
      ],
      realLifeExamples: [
        'Rubbing a plastic comb against dry hair attracts small bits of paper.',
        'Taking off a nylon shirt in the dark produces visible sparks and crackles.'
      ],
      analogies: 'Think of electric charge like coins: you can only exchange 1-rupee coins (integers), you cannot have 1.5 coins. The basic coin in nature is electron charge e.',
      commonMisconceptions: [
        'Misconception: Protons move during friction charging. Correction: Only loosely bound valence electrons are transferred from one body to another.'
      ]
    },
    {
      id: 'top-1-2',
      topicNumber: '1.2',
      title: 'Coulomb’s Law and Superposition Principle',
      titleTa: 'கூலூம் விதி மற்றும் மேற்பொருந்துதல் தத்துவம்',
      beginnerExplanation: 'Coulomb’s law states that the electrostatic force between two stationary point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them.',
      beginnerExplanationTa: 'ஓய்வு நிலையிலுள்ள இரு புள்ளி மின்னூட்டங்களுக்கு இடையேயான நிலைமின் விசையானது மின்னூட்டங்களின் பெருக்கற்பலனுக்கு நேர்விகிதத்திலும், அவற்றுக்கு இடையே உள்ள தொலைவின் இருமடிக்கு எதிர்விகிதத்திலும் இருக்கும்.',
      coreConcepts: [
        'Scalar form: F = (1 / 4πε₀) · (|q₁q₂| / r²)',
        'Permittivity of free space: ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²',
        'Coulomb constant: k = 1 / (4πε₀) ≈ 9 × 10⁹ N m² C⁻²',
        'Superposition: F_total on q₁ = F₁₂ + F₁₃ + F₁₄ + ...'
      ],
      definitions: [
        {
          term: 'Coulomb’s Law (Vector Form)',
          termTa: 'கூலூம் விதி (வெக்டர் வடிவம்)',
          definitionEn: 'The electrostatic force F₁₂ exerted by charge q₂ on charge q₁ is along the line joining them: F₁₂ = (1 / 4πε₀) · (q₁q₂ / r²₁) · r̂₂₁.',
          definitionTa: 'q₂ மின்னூட்டத்தால் q₁ மின்னூட்டத்தின் மீது செலுத்தப்படும் நிலைமின் விசை F₁₂ = (1 / 4πε₀) · (q₁q₂ / r²₁) · r̂₂₁.',
          keyPoints: ['Acts along the line joining charge centers', 'Obeys Newton’s third law: F₁₂ = -F₂₁', 'Central and conservative force']
        }
      ],
      realLifeExamples: [
        'Atomic stability: Electrostatic attraction between positive nucleus and orbiting electrons prevents atom collapse.',
        'Ionic bonding in table salt (NaCl): Strong Coulomb attraction between Na⁺ and Cl⁻.'
      ],
      analogies: 'Just like two magnets attract or repel stronger when brought closer, electric charges feel 4 times weaker force if you double their separation distance (Inverse square law).',
      commonMisconceptions: [
        'Misconception: Coulomb force depends on surrounding air pressure. Correction: In vacuum or air it is maximum; in a dielectric medium of constant ε_r, force decreases by a factor of ε_r (F_med = F_air / ε_r).'
      ]
    },
    {
      id: 'top-1-3',
      topicNumber: '1.3',
      title: 'Electric Field, Dipole & Field on Axial / Equatorial Lines',
      titleTa: 'மின்புலம், மின் இருமுனை மற்றும் அச்சுக்கோடு/நடுவரைக் கோட்டு மின்புலம்',
      beginnerExplanation: 'An electric charge alters the surrounding space creating an invisible electric field. When a test charge enters this region, it experiences an electric force. An electric dipole consists of two equal and opposite charges separated by a small distance 2a.',
      beginnerExplanationTa: 'ஒரு மின்னூட்டத்தைச் சுற்றியுள்ள பகுதியில் மற்றொரு சோதனை மின்னூட்டம் வைக்கப்படும் போது விசை உணரப்படும் பகுதியே மின்புலமாகும். சம அளவும் எதிரெதிர் குறியும் கொண்ட இரு புள்ளி மின்னூட்டங்கள் சிறிய இடைவெளியில் (2a) பிரித்து வைக்கப்பட்டால் அது மின் இருமுனை எனப்படும்.',
      coreConcepts: [
        'Electric Field E = F / q₀ (N C⁻¹ or V m⁻¹)',
        'Electric Dipole Moment: p = q · 2a (directed from negative charge -q to positive charge +q)',
        'Axial line electric field (for r >> a): E_axial = (1 / 4πε₀) · (2p / r³)',
        'Equatorial line electric field (for r >> a): E_equatorial = -(1 / 4πε₀) · (p / r³)',
        'Ratio: E_axial = 2 · E_equatorial at the same large distance r'
      ],
      definitions: [
        {
          term: 'Electric Dipole Moment',
          termTa: 'மின் இருமுனைத் திருப்புத்திறன்',
          definitionEn: 'The vector quantity defined as the product of the magnitude of one of the charges and the distance between them (p = q · 2a), directed from -q to +q.',
          definitionTa: 'ஒரு மின்னூட்டத்தின் மதிப்பையும் அவற்றுக்கு இடைப்பட்ட தொலைவையும் பெருக்கக் கிடைக்கும் வெக்டர் அளவீடு p = q · 2a. இதன் திசை -q விலிருந்து +q நோக்கியதாகும்.',
          keyPoints: ['SI Unit: C m (Coulomb metre)', 'Vector quantity directed from -q to +q', 'Dimension: [L T A]']
        }
      ],
      realLifeExamples: [
        'Water molecule (H₂O) has a permanent dipole moment (polar molecule) which allows microwave ovens to heat food efficiently.',
        'Carbon dioxide (CO₂) is non-polar because centers of positive and negative charges coincide.'
      ],
      analogies: 'Think of electric field lines as water flowing out of a sprinkler (positive charge = source) and into a drain hole (negative charge = sink).',
      commonMisconceptions: [
        'Misconception: Electric field of a dipole falls off as 1/r² like a point charge. Correction: Dipole field falls off much faster as 1/r³ because opposite charges partially cancel each other at large distances.'
      ]
    },
    {
      id: 'top-1-4',
      topicNumber: '1.4',
      title: 'Gauss’s Law & Its Applications',
      titleTa: 'காஸ் விதி மற்றும் அதன் பயன்பாடுகள்',
      beginnerExplanation: 'Gauss’s law connects the total electric flux passing through a closed surface (Gaussian surface) to the net charge enclosed inside that surface: Φ_E = ∮ E · dA = q_enclosed / ε₀.',
      beginnerExplanationTa: 'ஒரு மூடிய பரப்பின் வழியே செல்லும் மொத்த மின்பாயமானது, அப்பரப்பினால் மூடப்பட்ட நிகர மின்னூட்டத்தின் (1 / ε₀) மடங்குக்கு சமமாகும்.',
      coreConcepts: [
        'Electric Flux: Φ_E = E · A · cos θ (N m² C⁻¹ or V m)',
        'Gauss’s Law: Φ_E = ∮ E · dA = Q_in / ε₀',
        'Field due to infinitely long charged wire (linear charge density λ): E = λ / (2πε₀r)',
        'Field due to infinite plane sheet (surface charge density σ): E = σ / (2ε₀) [independent of distance r]',
        'Field due to uniformly charged spherical shell: Outside (r > R): E = q / (4πε₀r²); On surface (r = R): E = q / (4πε₀R²); Inside (r < R): E = 0.'
      ],
      definitions: [
        {
          term: 'Gauss’s Law',
          termTa: 'காஸ் விதி',
          definitionEn: 'The total electric flux through any closed hypothetical surface is equal to 1/ε₀ times the net electric charge enclosed by the surface.',
          definitionTa: 'எந்தவொரு மூடிய கற்பனைப் பரப்பின் வழியே செல்லும் மொத்த மின்பாயமும், அப்பரப்பால் சூழப்பட்ட நிகர மின்னூட்டத்தை ε₀ ஆல் வகுக்கக் கிடைப்பதற்குச் சமம்.',
          keyPoints: ['Independent of shape and size of Gaussian surface', 'Only enclosed charges contribute to net flux', 'Inside a charged hollow conductor, E = 0']
        }
      ],
      realLifeExamples: [
        'Electrostatic shielding (Faraday Cage): During a lightning storm, staying inside a metal car is safe because the metal shell shields the interior (E = 0 inside).',
        'Coaxial cables use outer braided shielding to prevent external electromagnetic interference.'
      ],
      analogies: 'Imagine a glowing light bulb inside a frosted glass sphere. The total light flux escaping the sphere depends only on the bulb’s wattage (charge), not on whether the glass is a sphere, box, or irregular balloon.',
      commonMisconceptions: [
        'Misconception: If electric flux through a closed surface is zero, E must be zero everywhere on the surface. Correction: Net enclosed charge is zero, but E may not be zero (e.g., dipole inside a box has Φ = 0, but E exists on surface).'
      ]
    },
    {
      id: 'top-1-5',
      topicNumber: '1.5',
      title: 'Capacitors, Dielectrics & Van de Graaff Generator',
      titleTa: 'மின்தேக்கிகள், மின்காப்பிகள் மற்றும் வான் டி கிராப் மின்னியற்றி',
      beginnerExplanation: 'A capacitor is an electrical component designed to store electric charge and electrostatic potential energy. It consists of two conducting plates separated by an insulator (dielectric). The Van de Graaff generator uses electrostatic induction and corona discharge (action of points) to build potential differences up to millions of volts (10⁷ V).',
      beginnerExplanationTa: 'மின்தேக்கி என்பது மின் துகள்களையும் மின் ஆற்றலையும் சேமித்து வைக்க உதவும் ஒரு அமைப்பாகும். வான் டி கிராப் மின்னியற்றி நிலைமின் தூண்டல் மற்றும் கூர்முனைச் செயல்பாடு ஆகிய தத்துவங்களின் அடிப்படையில் இயங்கி பல மில்லியன் வோல்ட் (10⁷ V) மின்னழுத்த வேறுபாட்டை உருவாக்குகிறது.',
      coreConcepts: [
        'Capacitance: C = Q / V (SI Unit: Farad, F)',
        'Parallel plate capacitor: C = ε₀A / d (with vacuum); C = ε_r ε₀A / d (with dielectric)',
        'Capacitors in Series: 1/C_s = 1/C₁ + 1/C₂ + 1/C₃',
        'Capacitors in Parallel: C_p = C₁ + C₂ + C₃',
        'Energy stored in capacitor: U = ½ C V² = ½ Q V = Q² / (2C)',
        'Energy density in electric field: u_E = ½ ε₀ E²',
        'Van de Graaff Generator: Working on Electrostatic Induction and Corona Discharge (Action of points) to produce V ≈ 10⁷ V.'
      ],
      definitions: [
        {
          term: 'Capacitance of a Conductor',
          termTa: 'மின்தேக்கியின் மின்தேக்குத்திறன்',
          definitionEn: 'The ratio of the magnitude of charge on either conductor plate to the potential difference between them: C = Q / V.',
          definitionTa: 'மின்தேக்கி ஒன்றின் ஏதேனும் ஒரு கடத்தித் தட்டிலுள்ள மின்னூட்ட மதிப்பிற்கும் கடத்திகளுக்கு இடையே உள்ள மின்னழுத்த வேறுபாட்டிற்கும் உள்ள தகவு (C = Q / V).',
          keyPoints: ['1 Farad = 1 Coulomb / 1 Volt', 'Depends on geometry (Area A, separation d) and dielectric medium', 'Independent of applied voltage V or charge Q']
        },
        {
          term: 'Action of Points (Corona Discharge)',
          termTa: 'கூர்முனைச் செயல்பாடு (அல்லது) ஒளிவட்ட மின்னிறக்கம்',
          definitionEn: 'The leakage of electric charges into the surrounding air from the sharp pointed edges of a charged conductor due to high electric field and ionization of air molecules.',
          definitionTa: 'மின்னூட்டம் பெற்ற கடத்தியின் கூர்முனைகளில் அதிக மின்புலம் தோன்றுவதால் சுற்றியுள்ள காற்று அயனியாக்கம் செய்யப்பட்டு மின்னூட்டம் கசிந்து வெளியேறும் நிகழ்வு.',
          keyPoints: ['Charge density σ ∝ 1/r (inversely proportional to radius of curvature)', 'Used in lightning arresters and Van de Graaff generator combs']
        }
      ],
      realLifeExamples: [
        'Camera flash units store charge slowly from a 3V battery and discharge violently through a xenon tube in milliseconds.',
        'Supercapacitors in regenerative braking systems of electric buses and metro trains.'
      ],
      analogies: 'A capacitor is like a water tank with an elastic diaphragm. Increasing the area of the tank (plate area A) stores more water at the same pressure (voltage).',
      commonMisconceptions: [
        'Misconception: When a dielectric slab is inserted into a capacitor connected to a battery, voltage increases. Correction: With battery connected, V remains constant and charge Q increases by factor ε_r; when disconnected, charge Q remains constant and voltage V decreases to V/ε_r.'
      ]
    }
  ],
  formulas: [
    {
      id: 'f-1-1',
      formula: 'F = \\frac{1}{4\\pi \\varepsilon_0} \\frac{|q_1 q_2|}{r^2}',
      meaning: 'Coulomb’s law magnitude of electrostatic force between two point charges in vacuum.',
      meaningTa: 'வெற்றிடத்தில் இரு புள்ளி மின்னூட்டங்களுக்கு இடையே செயல்படும் நிலைமின் விசை.',
      variables: [
        { symbol: 'F', name: 'Electrostatic Force', nameTa: 'நிலைமின் விசை', siUnit: 'N (Newton)', dimension: '[M L T⁻²]' },
        { symbol: 'q₁, q₂', name: 'Electric Charges', nameTa: 'மின்னூட்டங்கள்', siUnit: 'C (Coulomb)', dimension: '[I T]' },
        { symbol: 'r', name: 'Separation distance', nameTa: 'இடைப்பட்ட தொலைவு', siUnit: 'm (Metre)', dimension: '[L]' },
        { symbol: 'ε₀', name: 'Permittivity of free space', nameTa: 'வெற்றிடத்தின் விடுதிறன்', siUnit: 'C² N⁻¹ m⁻²', dimension: '[M⁻¹ L⁻³ T⁴ I²]' }
      ],
      siUnit: 'N (Newton)',
      dimension: '[M L T⁻²]',
      whenToUse: 'Use when calculating attraction or repulsion force between static point charges.',
      realLifeApplication: 'Determining ionic crystal lattice forces and cathode-ray tube deflection.',
      memoryShortcut: 'Force = 9 × 10⁹ × (q₁q₂ / r²). Remember: If distance doubles, force becomes one-fourth!',
      category: 'fundamental'
    },
    {
      id: 'f-1-2',
      formula: 'E_{axial} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2p}{r^3} \\quad (r \\gg a)',
      meaning: 'Electric field due to an electric dipole at a point on its axial line at large distance r.',
      meaningTa: 'மின் இருமுனையினால் அதன் அச்சுக் கோட்டில் உள்ள புள்ளியில் உருவாகும் மின்புலம்.',
      variables: [
        { symbol: 'E_axial', name: 'Axial Electric Field', nameTa: 'அச்சுக்கோடு மின்புலம்', siUnit: 'N C⁻¹ or V m⁻¹', dimension: '[M L T⁻³ I⁻¹]' },
        { symbol: 'p', name: 'Dipole Moment (q · 2a)', nameTa: 'இருமுனைத் திருப்புத்திறன்', siUnit: 'C m', dimension: '[L T I]' },
        { symbol: 'r', name: 'Distance from dipole center', nameTa: 'மையத்திலிருந்து தொலைவு', siUnit: 'm', dimension: '[L]' }
      ],
      siUnit: 'N C⁻¹ or V m⁻¹',
      dimension: '[M L T⁻³ I⁻¹]',
      whenToUse: 'Calculate electric field along the axis of symmetric polar molecules or dipole antennas.',
      realLifeApplication: 'Modeling molecular fields in dielectric polarization and NMR spectroscopy.',
      memoryShortcut: 'Axial = 2 × Equatorial (Axial has factor 2 in numerator, both have r³ in denominator).',
      category: 'board_exam'
    },
    {
      id: 'f-1-3',
      formula: '\\Phi_E = \\oint \\vec{E} \\cdot d\\vec{A} = \\frac{Q_{enclosed}}{\\varepsilon_0}',
      meaning: 'Gauss’s Law total electric flux through a closed surface.',
      meaningTa: 'காஸ் விதியின்படி மூடிய பரப்பின் வழியே பாயும் மொத்த மின்பாயம்.',
      variables: [
        { symbol: 'Φ_E', name: 'Electric Flux', nameTa: 'மின்பாயம்', siUnit: 'N m² C⁻¹ or V m', dimension: '[M L³ T⁻³ I⁻¹]' },
        { symbol: 'Q_enclosed', name: 'Net charge inside surface', nameTa: 'மூடப்பட்ட நிகர மின்னூட்டம்', siUnit: 'C', dimension: '[I T]' }
      ],
      siUnit: 'N m² C⁻¹ or V m',
      dimension: '[M L³ T⁻³ I⁻¹]',
      whenToUse: 'Use with high-symmetry charge distributions (spherical, cylindrical, planar).',
      realLifeApplication: 'Designing Faraday shields and high-voltage transmission cable insulation.',
      memoryShortcut: 'Flux = Q_in / ε₀. (Flux depends ONLY on inside charge, outside charges give net zero flux).',
      category: 'fundamental'
    },
    {
      id: 'f-1-4',
      formula: 'C = \\frac{\\varepsilon_0 A}{d}, \\quad U = \\frac{1}{2} C V^2 = \\frac{Q^2}{2C}',
      meaning: 'Capacitance of parallel plate capacitor and electrostatic energy stored in its electric field.',
      meaningTa: 'இணைத்தட்டு மின்தேக்கியின் மின்தேக்குத்திறன் மற்றும் அதில் சேமிக்கப்படும் ஆற்றல்.',
      variables: [
        { symbol: 'C', name: 'Capacitance', nameTa: 'மின்தேக்குத்திறன்', siUnit: 'F (Farad)', dimension: '[M⁻¹ L⁻² T⁴ I²]' },
        { symbol: 'A', name: 'Plate area', nameTa: 'தட்டின் பரப்பு', siUnit: 'm²', dimension: '[L²]' },
        { symbol: 'd', name: 'Plate separation', nameTa: 'தட்டுகளுக்கு இடைப்பட்ட தொலைவு', siUnit: 'm', dimension: '[L]' },
        { symbol: 'U', name: 'Stored Potential Energy', nameTa: 'சேமிக்கப்பட்ட நிலைமின் ஆற்றல்', siUnit: 'J (Joule)', dimension: '[M L² T⁻²]' }
      ],
      siUnit: 'Farad (F) for C, Joule (J) for U',
      dimension: 'C: [M⁻¹ L⁻² T⁴ I²], U: [M L² T⁻²]',
      whenToUse: 'Designing power supply filter circuits, energy storage banks, and capacitive sensors.',
      realLifeApplication: 'Camera flash storage, cardiac defibrillators, and keyboard tactile keys.',
      memoryShortcut: 'U = ½ CV² (Identical mathematical form to kinetic energy ½ mv²).',
      category: 'frequently_used'
    }
  ],
  derivations: [
    {
      id: 'der-1-1',
      title: 'Electric Field due to an Electric Dipole at a Point on its Axial Line',
      titleTa: 'மின் இருமுனையின் அச்சுக்கோட்டில் உள்ள புள்ளியில் மின்புலம்',
      aim: 'To derive an expression for the electric field produced by an electric dipole at a distance r from its center along its axial line.',
      given: [
        'Two point charges -q at point A and +q at point B separated by distance 2a.',
        'Dipole moment vector p = q · 2a directed from A (-q) to B (+q).',
        'Point C on the axial line at distance r from the midpoint O of the dipole.'
      ],
      toProve: 'E_{axial} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2p}{r^3} \\hat{p} \\quad (\\text{for } r \\gg a)',
      assumptions: [
        'The medium surrounding the dipole is vacuum/free space with permittivity ε₀.',
        'The point of observation C is at a distance r much larger than the dipole separation (r >> a).'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate the electric field at C due to charge +q at B located at distance (r - a).',
          descriptionTa: '+q மின்னூட்டத்தால் C புள்ளியில் ஏற்படும் மின்புலம் E+ கணக்கிடுதல்.',
          equation: '\\vec{E}_+ = \\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r - a)^2} \\hat{p} \\quad (\\text{directed along } \\vec{BC})',
          note: 'E_+ is directed away from +q (along the direction of p).'
        },
        {
          stepNumber: 2,
          description: 'Calculate the electric field at C due to charge -q at A located at distance (r + a).',
          descriptionTa: '-q மின்னூட்டத்தால் C புள்ளியில் ஏற்படும் மின்புலம் E- கணக்கிடுதல்.',
          equation: '\\vec{E}_- = -\\frac{1}{4\\pi\\varepsilon_0} \\frac{q}{(r + a)^2} \\hat{p} \\quad (\\text{directed along } \\vec{CA})',
          note: 'E_- is directed towards -q (opposite to direction of p).'
        },
        {
          stepNumber: 3,
          description: 'Apply the superposition principle to find total field E_total = E_+ + E_-.',
          descriptionTa: 'மேற்பொருந்துதல் தத்துவத்தின்படி மொத்த மின்புலம் காணுதல்.',
          equation: '\\vec{E}_{total} = \\frac{q}{4\\pi\\varepsilon_0} \\left[ \\frac{1}{(r - a)^2} - \\frac{1}{(r + a)^2} \\right] \\hat{p}',
          note: 'Taking LCM: [(r+a)² - (r-a)²] / (r² - a²)² = 4ar / (r² - a²)².'
        },
        {
          stepNumber: 4,
          description: 'Simplify the numerator using algebraic expansion.',
          descriptionTa: 'தொகுதியை சுருக்குதல்.',
          equation: '\\vec{E}_{total} = \\frac{q}{4\\pi\\varepsilon_0} \\left[ \\frac{4ar}{(r^2 - a^2)^2} \\right] \\hat{p} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2(2aq)r}{(r^2 - a^2)^2} \\hat{p}',
          note: 'Substitute dipole moment magnitude p = 2aq.'
        },
        {
          stepNumber: 5,
          description: 'Apply approximation for large distance r >> a (neglect a² in comparison to r²).',
          descriptionTa: 'r >> a என்ற நிபந்தனையைப் பயன்படுத்தி a²-ஐ புறக்கணித்தல்.',
          equation: '\\vec{E}_{axial} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p r}{r^4} \\hat{p} = \\frac{1}{4\\pi\\varepsilon_0} \\frac{2p}{r^3} \\hat{p}',
          note: 'Final vector equation shows E_axial is in the direction of dipole moment p.'
        }
      ],
      finalEquation: '\\vec{E}_{axial} = \\frac{1}{4\\pi \\varepsilon_0} \\frac{2\\vec{p}}{r^3}',
      physicalMeaning: 'The electric field along the dipole axis decreases inversely with the cube of distance (1/r³) and is directed along the dipole moment vector from negative to positive charge.',
      physicalMeaningTa: 'மின் இருமுனையின் அச்சுக்கோட்டில் மின்புலமானது தொலைவின் மும்மடிக்கு (1/r³) எதிர்விகிதத்தில் குறைகிறது, மேலும் இதன் திசை இருமுனைத் திருப்புத்திறனின் திசையிலேயே (-q முதல் +q வரை) அமையும்.',
      commonMistakes: [
        'Forgetting vector direction: Writing scalar without p̂ or failing to show E_+ > E_- vector lengths in diagram.',
        'Writing 1/r² instead of 1/r³ in the final formula.',
        'Algebraic sign error in LCM step [(r+a)² - (r-a)² = 4ar, not 2ar].'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'der-1-2',
      title: 'Van de Graaff Generator: Principle, Construction, Working and High Voltage Derivation',
      titleTa: 'வான் டி கிராப் மின்னியற்றி: தத்துவம், அமைப்பு, செயல்படும் விதம்',
      aim: 'To explain the working of Van de Graaff Generator and derive the potential difference mechanism that enables charging a large hollow conducting sphere up to 10⁷ Volts.',
      given: [
        'A large spherical conducting shell A of radius R.',
        'A smaller concentric conducting sphere B of radius r placed inside A with charge q.',
        'Outer sphere A carries charge Q.'
      ],
      toProve: 'V_B - V_A = \\frac{q}{4\\pi\\varepsilon_0} \\left( \\frac{1}{r} - \\frac{1}{R} \\right) > 0 \\quad (\\text{Independent of charge } Q)',
      assumptions: [
        'Conductors are perfectly spherical and concentric.',
        'Air breakdown voltage is prevented by encasing the apparatus in high-pressure gas (SF₆/N₂ at 15 atm).'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'State the two core physical principles.',
          descriptionTa: 'இரு முதன்மை இயற்பியல் தத்துவங்களைக் குறிப்பிடுதல்.',
          equation: '\\text{1. Electrostatic Induction} \\quad \\& \\quad \\text{2. Action of points (Corona discharge)}',
          note: 'Charge density σ is inversely proportional to radius of curvature (σ ∝ 1/r).'
        },
        {
          stepNumber: 2,
          description: 'Compute potential on inner sphere B of radius r.',
          descriptionTa: 'உள் கோளம் B-ன் மின்னழுத்தத்தைக் கணக்கிடுதல்.',
          equation: 'V_B = \\frac{1}{4\\pi\\varepsilon_0} \\left( \\frac{q}{r} + \\frac{Q}{R} \\right)',
          note: 'Inner sphere experiences potential due to its own charge q and enclosing charge Q.'
        },
        {
          stepNumber: 3,
          description: 'Compute potential on outer sphere A of radius R.',
          descriptionTa: 'வெளிக்கோளம் A-ன் மின்னழுத்தத்தைக் கணக்கிடுதல்.',
          equation: 'V_A = \\frac{1}{4\\pi\\varepsilon_0} \\left( \\frac{q}{R} + \\frac{Q}{R} \\right)',
          note: 'Charge inside appears at center for external points.'
        },
        {
          stepNumber: 4,
          description: 'Calculate potential difference (V_B - V_A).',
          descriptionTa: 'மின்னழுத்த வேறுபாட்டைக் (V_B - V_A) காணுதல்.',
          equation: 'V_B - V_A = \\frac{q}{4\\pi\\varepsilon_0} \\left( \\frac{1}{r} - \\frac{1}{R} \\right)',
          note: 'Since r < R, (1/r - 1/R) is always POSITIVE! Thus V_B is always higher than V_A regardless of how large Q becomes.'
        },
        {
          stepNumber: 5,
          description: 'Explain continuous charge transfer via conveyor insulating belt.',
          descriptionTa: 'மின் கடத்தாப் பட்டை வழியே தொடர் மின்னூட்ட மாற்றத்தை விவரித்தல்.',
          equation: 'Q_{total} \\to \\text{Continues to accumulate until air ionization limit } (E \\approx 3 \\times 10^6 \\text{ V/m})',
          note: 'Produces potential difference up to 10⁷ Volts (10 Million Volts).'
        }
      ],
      finalEquation: 'V_B - V_A = \\frac{q}{4\\pi \\varepsilon_0} \\left( \\frac{1}{r} - \\frac{1}{R} \\right)',
      physicalMeaning: 'Whenever inner sphere B is connected to outer sphere A by a wire, positive charge q will automatically flow entirely to the outer surface of A, independent of the preexisting charge Q on A.',
      physicalMeaningTa: 'உள் கோளம் B மற்றும் வெளிக்கோளம் A இணைக்கப்படும் போது, வெளிக்கோளத்தில் ஏற்கனவே உள்ள மின்னூட்டம் Q எவ்வளவாக இருந்தாலும், உள் கோளத்தின் மின்னூட்டம் முழுவதும் வெளிப்புறத்திற்கே பாயும்.',
      commonMistakes: [
        'Confusing the two principles: Must write both Electrostatic induction and Corona discharge.',
        'Not labeling pulley systems (P₁, P₂), spray comb C₁, and collecting comb C₂ in the diagram.',
        'Forgetting to mention the high-pressure steel chamber filled with methane/SF₆ gas to prevent electrical leakage.'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      level: 'Easy',
      title: 'Number of Electrons in 1 Coulomb Charge',
      question: 'Calculate the number of electrons in one coulomb of negative charge.',
      questionTa: 'ஒரு கூலூம் எதிர் மின்னூட்டத்தில் உள்ள எலக்ட்ரான்களின் எண்ணிக்கையைக் கணக்கிடுக.',
      given: { 'q': '1 C', 'e': '1.6 × 10⁻¹⁹ C' },
      required: 'Number of electrons (n)',
      formulaUsed: 'q = n · e \\implies n = \\frac{q}{e}',
      steps: [
        { stepNumber: 1, description: 'Write down the quantization relation', math: 'q = n \\cdot e' },
        { stepNumber: 2, description: 'Substitute q = 1 C and e = 1.6 × 10⁻¹⁹ C', math: 'n = \\frac{1}{1.6 \\times 10^{-19}} = \\frac{10^{19}}{1.6} = 0.625 \\times 10^{19}' },
        { stepNumber: 3, description: 'Express in scientific notation', math: 'n = 6.25 \\times 10^{18} \\text{ electrons}' }
      ],
      finalAnswer: '6.25 × 10¹⁸ electrons',
      siUnit: 'Dimensionless count',
      shortcutMethod: '1 / 1.6 = 0.625. Shift exponent: 0.625 × 10¹⁹ = 6.25 × 10¹⁸.',
      commonErrors: ['Writing 10⁻¹⁸ instead of positive 10¹⁸.', 'Writing units like Coulomb for number of electrons.'],
      examTip: 'Frequently tested 1-mark or 2-mark question in TN State Board exams.'
    },
    {
      level: 'Medium',
      title: 'Force between Charges in Medium with Dielectric Constant',
      question: 'Two point charges +2 μC and +6 μC repel each other with a force of 12 N in air. If a dielectric medium of relative permittivity ε_r = 4 is introduced between them, find the new electrostatic force.',
      questionTa: 'காற்றில் 2 μC மற்றும் 6 μC மின்னூட்டங்கள் 12 N விசையுடன் விலக்குகின்றன. அவற்றுக்கிடையே ε_r = 4 கொண்ட மின்காப்பு ஊடகம் வைக்கப்பட்டால் புதிய விசை யாது?',
      given: { 'F_air': '12 N', 'ε_r': '4' },
      required: 'Force in dielectric medium (F_med)',
      formulaUsed: 'F_{med} = \\frac{F_{air}}{\\varepsilon_r}',
      steps: [
        { stepNumber: 1, description: 'Recall the relationship between electrostatic force in air and in dielectric medium', math: 'F_{med} = \\frac{1}{4\\pi\\varepsilon} \\frac{q_1 q_2}{r^2} = \\frac{1}{4\\pi\\varepsilon_0 \\varepsilon_r} \\frac{q_1 q_2}{r^2} = \\frac{F_{air}}{\\varepsilon_r}' },
        { stepNumber: 2, description: 'Substitute values F_air = 12 N and ε_r = 4', math: 'F_{med} = \\frac{12}{4} = 3 \\text{ N}' }
      ],
      finalAnswer: '3 N (Repulsive)',
      siUnit: 'N (Newton)',
      shortcutMethod: 'Simply divide air force by dielectric constant: 12 / 4 = 3 N.',
      commonErrors: ['Multiplying by 4 instead of dividing.', 'Forgetting that dielectric always decreases the electrostatic force.'],
      examTip: 'Remember: In any insulating dielectric medium (ε_r > 1), electrostatic force is always reduced.'
    },
    {
      level: 'Exam-Level',
      title: 'Equivalent Capacitance and Energy Stored in Series-Parallel Network',
      question: 'Three capacitors of capacitances 2 μF, 3 μF and 6 μF are connected in series across a 100 V DC power supply. (i) Calculate the equivalent capacitance of the combination, (ii) find the charge on each capacitor, and (iii) find total electrostatic energy stored in the network.',
      questionTa: '2 μF, 3 μF மற்றும் 6 μF மின்தேக்கிகள் 100 V மின்னழுத்த மூலத்துடன் தொடரிணைப்பில் இணைக்கப்பட்டுள்ளன. (i) தொகுபயன் மின்தேக்குத்திறன், (ii) ஒவ்வொரு மின்தேக்கியிலுள்ள மின்னூட்டம், (iii) மொத்த சேமிக்கப்பட்ட ஆற்றல் ஆகியவற்றைக் காண்க.',
      given: { 'C₁': '2 μF = 2 × 10⁻⁶ F', 'C₂': '3 μF = 3 × 10⁻⁶ F', 'C₃': '6 μF = 6 × 10⁻⁶ F', 'V': '100 V' },
      required: '(i) C_s, (ii) Q on each capacitor, (iii) Total energy U',
      formulaUsed: '\\frac{1}{C_s} = \\frac{1}{C_1} + \\frac{1}{C_2} + \\frac{1}{C_3}, \\quad Q = C_s V, \\quad U = \\frac{1}{2} C_s V^2',
      steps: [
        { stepNumber: 1, description: 'Find equivalent capacitance in series', math: '\\frac{1}{C_s} = \\frac{1}{2} + \\frac{1}{3} + \\frac{1}{6} = \\frac{3 + 2 + 1}{6} = \\frac{6}{6} = 1 \\implies C_s = 1 \\text{ }\\mu\\text{F} = 1 \\times 10^{-6} \\text{ F}' },
        { stepNumber: 2, description: 'In series combination, charge Q is the same on all capacitors', math: 'Q = C_s \\cdot V = (1 \\times 10^{-6} \\text{ F}) \\times 100 \\text{ V} = 100 \\times 10^{-6} \\text{ C} = 100 \\text{ }\\mu\\text{C}' },
        { stepNumber: 3, description: 'Calculate total stored energy', math: 'U = \\frac{1}{2} C_s V^2 = \\frac{1}{2} \\times (1 \\times 10^{-6}) \\times (100)^2 = 0.5 \\times 10^{-6} \\times 10^4 = 5 \\times 10^{-3} \\text{ J} = 5 \\text{ mJ}' }
      ],
      finalAnswer: 'C_s = 1 μF; Charge on each = 100 μC; Total Energy U = 5 mJ (5 × 10⁻³ J)',
      siUnit: 'C_s: μF, Q: μC, U: mJ',
      shortcutMethod: 'Product over sum pair rule: 2 and 3 in series = 1.2 μF. 1.2 with 6 in series = (1.2 × 6)/(7.2) = 1 μF.',
      commonErrors: ['Applying parallel addition formula (C_p = C₁ + C₂ + C₃ = 11 μF) by mistake.', 'Assuming voltages are equal in series instead of charges being equal.'],
      examTip: 'Key Rule to memorize: In SERIES, CHARGE (Q) is same; in PARALLEL, VOLTAGE (V) is same!'
    }
  ],
  diagrams: [
    {
      id: 'diag-1-1',
      name: 'Electric Field of Dipole on Axial and Equatorial Lines',
      nameTa: 'மின் இருமுனையின் அச்சுக்கோடு மற்றும் நடுவரைக் கோட்டு மின்புலம்',
      purpose: 'To illustrate the geometry, vector resolution, and resultant electric field directions for both axial and equatorial configurations.',
      components: ['Charges -q and +q', 'Separation 2a', 'Center point O', 'Observation point P at distance r', 'Vectors E+, E-, and E_resultant'],
      labelsEn: ['Negative charge -q at A', 'Positive charge +q at B', 'Midpoint O', 'Distance r', 'Axial point P', 'Resultant vector E_axial'],
      labelsTa: ['A-ல் -q மின்னூட்டம்', 'B-ல் +q மின்னூட்டம்', 'மையப்புள்ளி O', 'தொலைவு r', 'அச்சுக்கோடு புள்ளி P', 'தொகுபயன் மின்புலம் E_axial'],
      stepByStepExplanation: [
        'Draw charges -q and +q separated by 2a along horizontal axis.',
        'Mark center O and point P at distance r along the line passing through both charges.',
        'Draw outward vector E+ (longer) and inward vector E- (shorter).',
        'Show net resultant vector E_axial pointing in the direction of dipole moment p.'
      ],
      studentObservation: 'The axial field vector is collinear with dipole moment p, while equatorial field vector is anti-parallel (-p).',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Drawing E+ and E- with equal vector arrow lengths at axial point.', 'Missing the dipole vector p̂ direction arrow.'],
      aiImagePrompt: 'Clean educational vector illustration of an electric dipole along the horizontal axis with charges -q (blue sphere) and +q (red sphere) separated by 2a. A point P on the axial line at distance r from center O. Sharp vector arrows indicating outward electric field E+ and inward E-, with net resultant vector E_axial in purple. Crisp labels in English, white background, high-resolution scientific diagram.'
    },
    {
      id: 'diag-1-2',
      name: 'Van de Graaff High-Voltage Electrostatic Generator',
      nameTa: 'வான் டி கிராப் உயர் மின்னழுத்த நிலைமின்னியற்றி',
      purpose: 'To detail the working parts: hollow metal sphere, insulating pillars, motorized silk belt, spray and collecting combs.',
      components: ['Large hollow spherical dome A', 'Insulating column', 'Endless rubber/silk belt', 'Lower motor pulley P₂', 'Upper pulley P₁', 'Lower spray comb C₁ (+10 kV DC)', 'Upper collecting comb C₂'],
      labelsEn: ['High-voltage spherical conductor A', 'Collecting metallic comb C₂', 'Insulating conveyor belt', 'Discharge tube with target', 'Spray metallic comb C₁', 'High voltage DC source (10⁴ V)', 'Motor driven pulley P₂'],
      labelsTa: ['உயர் மின்னழுத்த கோள வடிவ கடத்தி A', 'ஏற்கும் கூர்முனை சீப்பு C₂', 'மின் கடத்தா பட்டை', 'மின் இறக்கக் குழாய்', 'தெளிக்கும் கூர்முனை சீப்பு C₁', 'உயர் DC மின்னழுத்த மூலம்', 'மின்னோடி புல்லி P₂'],
      stepByStepExplanation: [
        'Draw a large hollow sphere supported on vertical insulating columns.',
        'Draw vertical conveyor belt mounted on two pulleys P₁ (top) and P₂ (bottom).',
        'Show lower comb C₁ connected to +10 kV DC supply and upper comb C₂ connected to the inner wall of the dome.',
        'Indicate positive charge transfer upward on the belt and charge spreading across the outer dome surface.'
      ],
      studentObservation: 'Charges sprayed at bottom comb C₁ are carried upwards by the belt and transferred completely to the outer dome surface by comb C₂.',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Connecting upper comb C₂ to the outer surface of dome instead of inner surface.', 'Missing ground connection on lower pulley frame.'],
      aiImagePrompt: 'Detailed cross-sectional scientific diagram of a Van de Graaff electrostatic generator. Large metallic dome at the top, vertical insulating belt loop running between top pulley P1 and bottom pulley P2. Needle comb C1 connected to high voltage positive power source at base, upper needle comb C2 touching inner dome. Upward positive charges shown on belt, charge distribution on outer surface of dome. White background, vector style, clear labels.'
    }
  ],
  graphs: [
    {
      id: 'graph-1-1',
      name: 'Electric Field (E) vs Distance (r) for Point Charge and Electric Dipole',
      nameTa: 'புள்ளி மின்னூட்டம் மற்றும் மின் இருமுனையின் மின்புலம் (E) vs தொலைவு (r) வரைபடம்',
      xAxis: 'Distance r from charge / center of dipole (m)',
      yAxis: 'Electric Field Magnitude E (N/C)',
      units: 'r in metres (m), E in N C⁻¹',
      shape: 'Hyperbolic decaying curves; dipole curve (1/r³) decays steeper than point charge curve (1/r²).',
      importantPoints: ['At r = 0, E → ∞', 'At large r, both approach zero', 'Dipole curve drops below point charge curve rapidly'],
      slope: 'Negative slope everywhere (dE/dr < 0).',
      physicalMeaning: 'Demonstrates that dipole field diminishes much faster with distance due to partial cancellation of opposite charges.',
      interpretation: 'For point charge E ∝ 1/r², for dipole E ∝ 1/r³.',
      mathematicalRelationship: 'E_{point} = \\frac{k q}{r^2} \\quad \\text{vs} \\quad E_{dipole} = \\frac{2k p}{r^3}',
      examQuestions: ['Plot E vs r for a point charge and dipole on the same axes and explain the difference.'],
      commonMistakes: ['Drawing both curves with identical slope.', 'Letting curves touch the axes at finite distances.'],
      howToDrawInExam: 'Draw smooth inverse curves from near y-axis asymptote towards x-axis. Clearly label curve 1 as E ∝ 1/r² (point charge) and the steeper lower curve 2 as E ∝ 1/r³ (dipole).',
      aiGraphPrompt: 'Scientifically accurate graph plotting Electric Field E (y-axis) against Distance r (x-axis). Two distinct smooth hyperbolic curves: one labeled E ∝ 1/r² (blue curve, point charge) and a steeper decreasing curve labeled E ∝ 1/r³ (orange curve, electric dipole). Clean axes, gridlines, textbook style, white background.'
    }
  ],
  experiments: [
    {
      id: 'exp-1-1',
      name: 'Demonstration of Electrostatic Shielding using Gold Leaf Electroscope & Faraday Cage',
      nameTa: 'தங்க இலை மின்னோட்டங்காட்டி மற்றும் ஃபாரடே கூண்டு மூலம் நிலைமின் தடுப்புறை செயல்முறை விளக்கம்',
      apparatus: ['Gold leaf electroscope', 'Charged glass rod', 'Wire gauze cylinder (Faraday cage)', 'Silk cloth'],
      principle: 'Electric field inside a hollow metallic conductor placed in an external electric field is strictly ZERO (E = 0).',
      principleTa: 'வெளிப்புற மின்புலத்தில் வைக்கப்பட்டுள்ள உள்ளீடற்ற கடத்தியின் உட்பகுதியில் மின்புலம் சுழியாகும் (E = 0).',
      procedure: [
        'Charge a gold leaf electroscope so that the gold leaves diverge.',
        'Bring a strongly charged glass rod near the electroscope and observe further divergence of leaves.',
        'Now cover the electroscope completely with a grounded wire gauze metal cage (Faraday cage).',
        'Bring the strongly charged glass rod close to the cage.'
      ],
      observation: 'When the wire cage is placed over the electroscope, bringing the charged rod near has NO EFFECT on the divergence of the gold leaves.',
      result: 'The metal cage acts as an electrostatic shield, completely preventing external electric fields from penetrating into the interior.',
      precautions: ['Electroscope must be properly insulated on an amber/glass stand.', 'Wire cage mesh must have small openings.'],
      realLifeImportance: 'Protects sensitive electronic circuits, heart pacemakers, and passengers inside cars/airplanes during lightning strikes.',
      aiLabPrompt: 'Physics laboratory setup showing a Gold Leaf Electroscope inside a cylindrical wire mesh Faraday cage. A charged amber glass rod with sparks is held near the outside of the cage, while the gold leaves inside remain unaffected and stationary. Clean modern laboratory bench, educational illustration, bright lighting, white background.'
    }
  ],
  aiLesson: {
    lessonTitle: '3-Minute AI Interactive Lesson: The Magic of Electric Fields & Gauss’s Law',
    targetDuration: '5 Minutes',
    visualStyle: '3D animated physics laboratory with glowing vector fields, particles, and interactive equations',
    format: '3D Scientific Animation & Interactive Explainer',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Hidden Invisible Field in Your Hands',
        explanationEn: 'Every time you touch your smartphone screen or see lightning flash across the sky, static electricity is at play. But what is electric charge really?',
        explanationTa: 'உங்கள் தொடுதிரையை தொடும்போதும், வானில் மின்னல் தோன்றும்போதும் நிலைமின்னியல் செயல்படுகிறது. மின்னூட்டம் என்பது என்ன?',
        explanationBilingual: 'நமது smartphone touchscreen மற்றும் thundercloud lightning எல்லாவற்றிலும் static electric charge உள்ளது. What creates this invisible electric field?',
        narrationScript: 'Welcome to Class 12 Physics! Let us step into the invisible universe of electric charges, where stationary electrons and protons shape the atomic world.',
        animationDescription: '3D close-up of a human finger approaching a capacitive glass screen. Invisible blue electric field lines concentrate around the fingertip.',
        keywordsDisplayed: ['Static Charge (q)', 'Coulomb’s Law', 'Quantization q = ne'],
        realLifeExample: 'Capacitive touch sensing in smartphones.',
        interactiveQuestion: {
          question: 'What is the minimum quantum of electric charge found on an isolated particle in nature?',
          questionTa: 'இயற்கையில் தனித்த துகளில் காணப்படும் மிகச்சிறிய அடிப்படை மின்னூட்ட மதிப்பு என்ன?',
          options: ['1.6 × 10⁻¹⁹ C', '9.1 × 10⁻³¹ C', '1.0 C', '8.85 × 10⁻¹² C'],
          optionsTa: ['1.6 × 10⁻¹⁹ C', '9.1 × 10⁻³¹ C', '1.0 C', '8.85 × 10⁻¹² C'],
          correctIndex: 0,
          explanation: 'The elementary charge quantum is e = 1.602 × 10⁻¹⁹ C, discovered by Millikan.'
        },
        cameraDirection: 'Slow zoom into fingertip contact area on glass screen.'
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Coulomb’s Inverse Square Law in Action',
        explanationEn: 'Two point charges push or pull each other across empty space with a force proportional to 1/r².',
        explanationTa: 'இரு புள்ளி மின்னூட்டங்கள் இடைப்பட்ட தொலைவின் இருமடிக்கு எதிர்விகிதத்தில் விசையை செலுத்துகின்றன.',
        explanationBilingual: 'Two charges q₁ and q₂ interact via Coulomb force: F = k·(q₁q₂)/r².',
        narrationScript: 'If you bring two positive charges twice as close, the repulsive force increases fourfold! Coulomb’s law obeys Newton’s third law perfectly.',
        animationDescription: 'Two glowing spheres (+q₁ and +q₂) with dynamic vector force arrows that grow longer as the spheres are brought closer.',
        keywordsDisplayed: ['Coulomb’s Law', 'F ∝ 1/r²', 'k = 9 × 10⁹ N m² C⁻²'],
        realLifeExample: 'Salt crystal lattice bonding (Na⁺ and Cl⁻).',
        interactiveQuestion: {
          question: 'If the distance between two static charges is halved (r → r/2), the electrostatic force becomes:',
          questionTa: 'இரு மின்னூட்டங்களுக்கு இடைப்பட்ட தொலைவு பாதியாகக் குறைந்தால், நிலைமின் விசை எவ்வாறு மாறும்?',
          options: ['4 times greater', '2 times greater', 'Half', 'One-fourth'],
          optionsTa: ['4 மடங்கு அதிகரிக்கும்', '2 மடங்கு அதிகரிக்கும்', 'பாதியாகும்', 'கால் பங்காகும்'],
          correctIndex: 0,
          explanation: 'Since F ∝ 1/r², halving r results in 1/(1/2)² = 4 times greater force.'
        },
        cameraDirection: 'Rotating 3D camera around the two interacting charges.'
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Working Principle: Electric Dipoles & 3D Flux',
        explanationEn: 'An electric dipole consists of equal opposite charges. Gauss’s law counts the total field lines bursting out of a closed Gaussian surface.',
        explanationTa: 'மின் இருமுனை சமமான எதிரெதிர் மின்னூட்டங்களைக் கொண்டது. காஸ் விதி ஒரு மூடிய பரப்பிலிருந்து வெளிவரும் மின்பாயத்தை அளவிடுகிறது.',
        explanationBilingual: 'Electric dipole moment p = q·2a creates 3D field loops. Gauss’s law states: Total Flux Φ = Q_enclosed / ε₀.',
        narrationScript: 'Imagine an imaginary Gaussian bubble. The total flux escaping this bubble depends strictly on the net charge trapped inside!',
        animationDescription: 'Transparent spherical and cylindrical Gaussian surfaces enclosing charges. Glowing field line vectors intersect the surface patches dA.',
        keywordsDisplayed: ['Gauss’s Law', 'Flux Φ = ∮ E·dA', 'Q_enclosed / ε₀'],
        realLifeExample: 'Faraday Cage shielding sensitive flight electronics during thunderstorm.',
        interactiveQuestion: {
          question: 'What is the net electric flux through a closed surface enclosing an electric dipole (+q and -q)?',
          questionTa: 'ஒரு மின் இருமுனையை (+q மற்றும் -q) உள்ளடக்கிய மூடிய பரப்பின் வழியே செல்லும் நிகர மின்பாயம் என்ன?',
          options: ['Zero', 'q / ε₀', '2q / ε₀', 'Infinite'],
          optionsTa: ['சுழி (Zero)', 'q / ε₀', '2q / ε₀', 'முடிவிலி'],
          correctIndex: 0,
          explanation: 'Net enclosed charge is Q_in = (+q) + (-q) = 0. Therefore, net flux Φ = 0.'
        },
        cameraDirection: 'Cross-sectional cutaway view through Gaussian sphere.'
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Mathematical Derivation: Axial Electric Field',
        explanationEn: 'Step-by-step vector addition yields the axial field: E_axial = 2kp / r³.',
        explanationTa: 'வெக்டர் கூட்டல் மூலம் அச்சுக்கோட்டு மின்புலம் E_axial = 2kp / r³ என வருவிக்கப்படுகிறது.',
        explanationBilingual: 'At axial point, E_+ is stronger than E_-. Net field points along dipole moment p.',
        narrationScript: 'Watch closely: As r becomes much larger than a, the term (r² - a²) simplifies to r⁴, canceling one r to give the famous 1/r³ cube-decay law.',
        animationDescription: 'Mathematical symbols animate in 3D space: [1/(r-a)² - 1/(r+a)²] expands into 4ar/(r²-a²)² and resolves into 2p/(4πε₀r³).',
        keywordsDisplayed: ['E_axial = 2p / (4πε₀r³)', 'r >> a', 'Direction: -q to +q'],
        realLifeExample: 'Dipole radiation from radio broadcast antenna.',
        interactiveQuestion: {
          question: 'What is the ratio of axial electric field to equatorial electric field at the same large distance r?',
          questionTa: 'ஒரே தொலைவு r-ல் அச்சுக்கோடு மின்புலத்திற்கும் நடுவரைக் கோட்டு மின்புலத்திற்கும் உள்ள தகவு என்ன?',
          options: ['2 : 1', '1 : 2', '1 : 1', '4 : 1'],
          optionsTa: ['2 : 1', '1 : 2', '1 : 1', '4 : 1'],
          correctIndex: 0,
          explanation: 'E_axial = 2kp/r³ and E_equatorial = kp/r³, hence E_axial / E_equatorial = 2.'
        },
        cameraDirection: 'Animated equation overlay tracking across the screen.'
      },
      {
        sceneNumber: 5,
        sceneTitle: 'Real-Life Application: Capacitors & Van de Graaff Generator',
        explanationEn: 'Capacitors store energy in electric fields (U = ½ CV²), while Van de Graaff generators pump charge to 10 Million Volts.',
        explanationTa: 'மின்தேக்கிகள் மின்புலத்தில் ஆற்றலை சேமிக்கின்றன (U = ½ CV²). வான் டி கிராப் மின்னியற்றி 10 மில்லியன் வோல்ட் வரை மின்னழுத்தத்தை உருவாக்குகிறது.',
        explanationBilingual: 'Defibrillators release capacitor energy in milliseconds to restart a human heart.',
        narrationScript: 'In an emergency room, a defibrillator charges a 30 μF capacitor to 5000 Volts and discharges 375 Joules into the patient to reset cardiac rhythm.',
        animationDescription: '3D medical defibrillator charging and releasing current pulse, followed by rotating cross-section of a Van de Graaff generator dome glowing with corona discharge.',
        keywordsDisplayed: ['Capacitance C = ε₀A/d', 'Energy U = ½ CV²', 'Van de Graaff: 10⁷ Volts'],
        realLifeExample: 'Medical defibrillators and nuclear particle accelerators.',
        interactiveQuestion: {
          question: 'When a dielectric slab (ε_r = 5) is placed between the plates of an isolated charged capacitor, the stored energy:',
          questionTa: 'மின்னூட்டம் பெற்ற தனித்த மின்தேக்கியின் தட்டுகளுக்கு இடையே மின்காப்பு (ε_r = 5) வைக்கப்பட்டால், சேமிக்கப்பட்ட ஆற்றல்:',
          options: ['Decreases by factor 5', 'Increases 5 times', 'Remains unchanged', 'Becomes zero'],
          optionsTa: ['5 மடங்கு குறையும்', '5 மடங்கு அதிகரிக்கும்', 'மாறாது', 'சுழியாகும்'],
          correctIndex: 0,
          explanation: 'For isolated capacitor, Q is constant: U = Q² / (2C). Since C increases by 5, U decreases by a factor of 5.'
        },
        cameraDirection: 'Wide shot of particle accelerator laboratory.'
      },
      {
        sceneNumber: 6,
        sceneTitle: 'Summary & Exam Board Strategy',
        explanationEn: 'Master the 3 high-probability 5-mark derivations: Dipole Axial Field, Gauss Law plane sheet, and Van de Graaff Generator.',
        explanationTa: 'அச்சுக்கோடு மின்புலம், காஸ் விதியின் சமதளத் தட்டு பயன்பாடு, மற்றும் வான் டி கிராப் மின்னியற்றி ஆகிய 5-மதிப்பெண் வினாக்களில் தேர்ச்சி பெறுங்கள்.',
        explanationBilingual: 'Remember: In series, Charge Q is same; in parallel, Voltage V is same.',
        narrationScript: 'Keep your units sharp, draw neat labeled diagrams with vector arrows, and you are ready to score a perfect 100 in Electrostatics!',
        animationDescription: 'Summary checklist flying into a glowing 5-star student badge.',
        keywordsDisplayed: ['Q = ne', 'F = kq₁q₂/r²', 'E_axial = 2kp/r³', 'Φ = Q/ε₀', 'U = ½CV²'],
        realLifeExample: 'Complete mastery of Chapter 1 board questions.',
        interactiveQuestion: {
          question: 'What is the SI unit of electric permittivity ε₀?',
          questionTa: 'வெற்றிடத்தின் விடுதிறன் ε₀-ன் SI அலகு என்ன?',
          options: ['C² N⁻¹ m⁻²', 'N m² C⁻²', 'N C⁻¹', 'Farad metre'],
          optionsTa: ['C² N⁻¹ m⁻²', 'N m² C⁻²', 'N C⁻¹', 'பாரட் மீட்டர்'],
          correctIndex: 0,
          explanation: 'From Coulomb’s law, ε₀ = q₁q₂ / (4πFr²), giving SI unit C² N⁻¹ m⁻² (or F m⁻¹).'
        },
        cameraDirection: 'Frontal hero shot with celebratory graphics.'
      }
    ]
  },
  voiceNarration: {
    scriptEn: 'Hello Class 12 scholars! Welcome to Chapter 1: Electrostatics. Let us review the fundamental pillars. First, electric charge is quantized: Q equals n times e. In Coulomb’s law, the electrostatic force between two stationary charges is inversely proportional to distance squared. When dealing with electric dipoles, remember that the electric field along the axial line is twice the field on the equatorial line at the same large distance, and decays as one over r cubed. Gauss’s law is your master key for symmetric systems: total electric flux equals enclosed charge divided by epsilon naught. Inside any hollow charged conductor, the electric field is strictly zero—this is the principle of electrostatic shielding. Finally, capacitors store electrostatic energy given by half C V squared, and the Van de Graaff generator harnesses corona discharge and electrostatic induction to create potential differences up to ten million volts. Practice the vector derivations and formulas daily for board exam excellence!',
    scriptTa: 'வணக்கம் பன்னிரண்டாம் வகுப்பு மாணவச் செல்வங்களே! நிலைமின்னியல் பாடத்திற்கு உங்களை அன்போடு வரவேற்கிறோம். முதலாவதாக, மின்னூட்டம் குவாண்டமாக்கல் தத்துவத்திற்கு உட்பட்டது: Q = n e. கூலூம் விதியின்படி இரு புள்ளி மின்னூட்டங்களுக்கு இடையேயான விசை தொலைவின் இருமடிக்கு எதிர்விகிதத்தில் இருக்கும். மின் இருமுனையின் அச்சுக்கோட்டில் உருவாகும் மின்புலம் நடுவரைக்கோட்டு மின்புலத்தை விட இருமடங்கு மற்றும் தொலைவின் மும்மடிக்கு (1/r³) எதிர்விகிதத்தில் குறையும். சமச்சீரான அமைப்புகளுக்கு காஸ் விதி பயன்படுகிறது: மூடிய பரப்பின் மொத்த மின்பாயம் Q / ε₀ ஆகும். உள்ளீடற்ற கடத்தியின் உட்பகுதியில் மின்புலம் எப்போதும் சுழியாகும்—இதுவே நிலைமின் தடுப்புறை எனப்படும். மின்தேக்கியில் சேமிக்கப்படும் ஆற்றல் U = ½ C V² ஆகும். வான் டி கிராப் மின்னியற்றி நிலைமின் தூண்டல் மற்றும் கூர்முனைச் செயல்பாடு மூலம் 10 மில்லியன் வோல்ட் வரை மின்னழுத்தத்தை உருவாக்குகிறது. இந்த முக்கிய 5-மதிப்பெண் வினாக்களையும் கணக்குகளையும் பயிற்சி செய்து அதிக மதிப்பெண் பெறுங்கள்!',
    scriptBilingual: 'வணக்கம் Students! Welcome to Electrostatics. Let us quickly revise the core concepts. Electric charge is quantized (q = ne). Coulomb’s law states F = k·q₁q₂/r². Dipole axial field E_axial = 2kp/r³ is double the equatorial field and falls off as 1/r³. Gauss’s law Φ = Q_in/ε₀ gives E = 0 inside conductors, providing electrostatic shielding. For capacitors, energy stored is U = ½ CV². In series combination, Charge Q is same; in parallel combination, Voltage V is same. Van de Graaff generator uses corona discharge and electrostatic induction to reach 10⁷ Volts. All the very best for your exams!',
    audioDurationSeconds: 180,
    recommendedTone: 'Enthusiastic, clear, motivating, and authoritative physics teacher tone.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'What is the electric field inside a uniformly charged conducting hollow spherical shell?',
        qTa: 'சீரான மின்னூட்டம் பெற்ற உள்ளீடற்ற கோளக்கடத்தியின் உட்பகுதியில் மின்புலம் என்ன?',
        a: 'Zero (E = 0) at all interior points.',
        aTa: 'உட்புற புள்ளிகள் அனைத்திலும் சுழி (E = 0).'
      },
      {
        q: 'What is the angle between electric dipole moment vector p and electric field vector on its equatorial line?',
        qTa: 'மின் இருமுனையின் திருப்புத்திறன் வெக்டருக்கும் அதன் நடுவரைக்கோட்டு மின்புல வெக்டருக்கும் இடைப்பட்ட கோணம் என்ன?',
        a: '180° (anti-parallel direction).',
        aTa: '180° (எதிரெதிர் திசை).'
      },
      {
        q: 'How does capacitance change when a dielectric of constant ε_r = 6 is filled between the plates of a capacitor?',
        qTa: 'மின்தேக்கியின் தட்டுகளுக்கு இடையே ε_r = 6 கொண்ட மின்காப்பு வைக்கப்பட்டால் மின்தேக்குத்திறன் எவ்வாறு மாறும்?',
        a: 'Capacitance increases by 6 times (C = 6 C₀).',
        aTa: 'மின்தேக்குத்திறன் 6 மடங்கு அதிகரிக்கும் (C = 6 C₀).'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'State Coulomb’s Law in electrostatics.',
        qTa: 'நிலைமின்னியலின் கூலூம் விதியைக் கூறுக.',
        a: 'The electrostatic force between two point charges is directly proportional to the product of the magnitudes of the charges and inversely proportional to the square of the distance between them (F = k·|q₁q₂|/r²).',
        aTa: 'ஓய்வு நிலையிலுள்ள இரு புள்ளி மின்னூட்டங்களுக்கு இடையேயான நிலைமின் விசை, மின்னூட்டங்களின் பெருக்கற்பலனுக்கு நேர்விகிதத்திலும், அவற்றுக்கு இடைப்பட்ட தொலைவின் இருமடிக்கு எதிர்விகிதத்திலும் இருக்கும்.'
      },
      {
        q: 'Define electric dipole moment and state its SI unit.',
        qTa: 'மின் இருமுனைத் திருப்புத்திறன் வரையறுத்து அதன் SI அலகைத் தருக.',
        a: 'The electric dipole moment vector is defined as p = q · 2a, directed from -q to +q. Its SI unit is Coulomb metre (C m).',
        aTa: 'மின் இருமுனைத் திருப்புத்திறன் என்பது ஒரு மின்னூட்ட மதிப்பையும் அவற்றுக்கு இடைப்பட்ட தொலைவையும் பெருக்கக் கிடைக்கும் வெக்டர் (p = q · 2a). SI அலகு கூலூம் மீட்டர் (C m).'
      },
      {
        q: 'What is electrostatic shielding? Give one practical example.',
        qTa: 'நிலைமின் தடுப்புறை என்றால் என்ன? நடைமுறை உதாரணம் தருக.',
        a: 'The phenomenon of protecting a certain region of space from external electric fields by enclosing it inside a hollow conductor (E = 0 inside). Example: Metal body of a car protecting passengers during lightning.',
        aTa: 'உள்ளீடற்ற கடத்தியைப் பயன்படுத்தி வெளிப்புற மின்புலங்களிலிருந்து ஒரு குறிப்பிட்ட பகுதியை பாதுகாக்கும் நிகழ்வு நிலைமின் தடுப்புறை எனப்படும். எ.கா: மின்னலின் போது கார் அல்லது பேருந்தினுள் இருப்பது பாதுகாப்பானது.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Derive the expression for the energy stored in a parallel plate capacitor.',
        qTa: 'இணைத்தட்டு மின்தேக்கியில் சேமிக்கப்படும் ஆற்றலுக்கான கோவையை வருவிக்கவும்.',
        a: 'Work done to transfer small charge dq at potential V is dW = V dq = (q/C) dq. Total work W = ∫₀^Q (q/C) dq = Q² / (2C) = ½ C V² = ½ Q V. This work is stored as electrostatic potential energy U.',
        aTa: 'dq மின்னூட்டத்தை நகர்த்த செய்யப்படும் வேலை dW = V dq = (q/C) dq. மொத்த வேலை W = ∫₀^Q (q/C) dq = Q² / (2C) = ½ C V². இவ்வேலையே நிலைமின் ஆற்றலாக சேமிக்கப்படுகிறது.'
      },
      {
        q: 'Obtain the condition for bridge balance or derive equivalent capacitance of capacitors in parallel.',
        qTa: 'பக்க இணைப்பில் உள்ள மின்தேக்கிகளின் தொகுபயன் மின்தேக்குத்திறனுக்கான கோவையை வருவிக்க.',
        a: 'In parallel, voltage V is common across all capacitors. Total charge Q = Q₁ + Q₂ + Q₃ = C₁V + C₂V + C₃V = (C₁ + C₂ + C₃)V. Therefore, C_p = C₁ + C₂ + C₃.',
        aTa: 'பக்க இணைப்பில் மின்னழுத்தம் V மாறாது. மொத்த மின்னூட்டம் Q = Q₁ + Q₂ + Q₃ = C₁V + C₂V + C₃V = (C₁ + C₂ + C₃)V. எனவே C_p = C₁ + C₂ + C₃.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Derive an expression for the electric field due to an electric dipole at a point on its axial line.',
        qTa: 'மின் இருமுனையின் அச்சுக்கோட்டில் உள்ள புள்ளியில் மின்புலத்திற்கான கோவையை விரிவாக வருவிக்கவும்.',
        a: 'Step 1: Write E+ = q / [4πε₀(r-a)²] and E- = -q / [4πε₀(r+a)²]. Step 2: Apply superposition E_total = E+ + E-. Step 3: Compute LCM and show numerator is 4ar. Step 4: Substitute dipole moment p = 2qa. Step 5: For r >> a, derive final expression E_axial = 2p / (4πε₀r³).',
        aTa: 'படி 1: E+ = q / [4πε₀(r-a)²] மற்றும் E- = -q / [4πε₀(r+a)²] எழுதுதல். படி 2: மேற்பொருந்துதல் தத்துவத்தைப் பயன்படுத்துதல். படி 3: தொகுதியில் 4ar எனக் கொண்டு வருதல். படி 4: p = 2qa எனப் பிரதியிடல். படி 5: r >> a நிபந்தனையில் E_axial = 2p / (4πε₀r³) என வருவித்தல்.'
      },
      {
        q: 'Explain the principle, construction and working of the Van de Graaff generator with a neat diagram.',
        qTa: 'வான் டி கிராப் மின்னியற்றியின் தத்துவம், அமைப்பு மற்றும் செயல்படும் விதத்தை படத்துடன் விளக்குக.',
        a: 'State Principles: 1. Electrostatic Induction, 2. Action of points (Corona discharge). Describe construction with dome A, pulleys P₁/P₂, combs C₁/C₂, and insulating belt. Explain working: Charge spray by C₁, upward transport, collection by C₂, and transfer to outer dome producing potential up to 10⁷ V.',
        aTa: 'தத்துவங்கள்: 1. நிலைமின் தூண்டல், 2. கூர்முனைச் செயல்பாடு. அமைப்பு: கோள வடிவ கடத்தி A, புல்லிகள் P₁/P₂, சீப்புகள் C₁/C₂, கடத்தாப் பட்டை. செயல்படும் விதம்: சீப்பு C₁ மின்னூட்டத்தை தெளித்தல், மேலே கொண்டு செல்லப்படுதல், C₂ மூலம் ஏற்கப்பட்டு வெளிப்புறக் கூட்டில் சேமிக்கப்பட்டு 10⁷ V அடைதல்.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Electric field on axial and equatorial line of dipole (5 Marks)',
      'Gauss’s Law application to infinite plane sheet (E = σ / 2ε₀) and long wire (E = λ / 2πε₀r) (3/5 Marks)',
      'Capacitors in series and parallel combinations and energy stored (3 Marks)',
      'Van de Graaff Generator construction, working & diagram (5 Marks)'
    ]
  },
  faqs: [
    {
      category: 'Basic',
      question: 'Why do electric field lines never cross each other?',
      questionTa: 'மின்புலக் கோடுகள் ஒன்றை ஒன்று ஒருபோதும் வெட்டிக் கொள்ளாது ஏன்?',
      answer: 'If two electric field lines intersected at a point, there would be two different tangents and hence two different directions of electric field at that single point, which is physically impossible.',
      answerTa: 'இரு மின்புலக் கோடுகள் வெட்டிக்கொண்டால், ஒரே புள்ளியில் இரு வெவ்வேறு திசைகளில் மின்புலம் இருக்க வேண்டும். இது இயற்பியல் ரீதியாக சாத்தியமற்றது.'
    },
    {
      category: 'Conceptual',
      question: 'Why is it safer to be inside a metal car during lightning rather than standing under a tree?',
      questionTa: 'மின்னலின் போது மரத்தடியில் நிற்பதை விட காரினுள் இருப்பது பாதுகாப்பானது ஏன்?',
      answer: 'The metallic car body forms a closed hollow conductor (Faraday cage). Due to electrostatic shielding, the electric field inside is zero, and lightning current flows harmlessly over the outer surface to the ground.',
      answerTa: 'காரின் உலோக உடல் ஒரு ஃபாரடே கூண்டு போல் செயல்படுகிறது. நிலைமின் தடுப்புறை காரணமாக உட்பகுதியில் மின்புலம் சுழியாகி, மின்னல் மின்னோட்டம் வெளிப்புற உடல் வழியே தரைக்குச் சென்றுவிடும்.'
    },
    {
      category: 'Board Exam',
      question: 'What is the torque experienced by an electric dipole in a uniform electric field?',
      questionTa: 'சீரான மின்புலத்தில் உள்ள மின் இருமுனை உணரும் திருப்புவிசை என்ன?',
      answer: 'Torque τ = p × E = p E sin θ. Maximum torque occurs at θ = 90° (τ_max = pE), and zero torque occurs when dipole is aligned with field at θ = 0° or 180°.',
      answerTa: 'திருப்புவிசை τ = p × E = p E sin θ. θ = 90° இருக்கும் போது பெரும திருப்புவிசை (τ_max = pE) ஏற்படும்; θ = 0° அல்லது 180° இருக்கும் போது திருப்புவிசை சுழியாகும்.'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Writing dipole electric field as E ∝ 1/r² instead of 1/r³.',
      correctWay: 'Always write E ∝ 1/r³ for electric dipole and E ∝ 1/r² for a single point charge.'
    },
    {
      category: 'Sign',
      mistake: 'Taking dipole moment vector direction from positive (+q) to negative (-q).',
      correctWay: 'In Physics, electric dipole moment vector p is ALWAYS directed from negative charge (-q) to positive charge (+q).'
    },
    {
      category: 'Diagram',
      mistake: 'Drawing electric field lines entering a positive charge or leaving a negative charge.',
      correctWay: 'Electric field lines ALWAYS originate from positive charge and terminate on negative charge.'
    }
  ],
  memoryTricks: [
    {
      title: 'Capacitor Combinations Rule',
      titleTa: 'மின்தேக்கி இணைப்புகள் குறுக்குவழி',
      trick: 'Capacitors in Series = Resistors in Parallel (Add reciprocals: 1/C_s = 1/C₁ + 1/C₂). Capacitors in Parallel = Resistors in Series (Direct sum: C_p = C₁ + C₂).',
      explanation: 'Remember: C behaves opposite to R when combining!'
    },
    {
      title: 'Axial vs Equatorial Dipole Ratio',
      titleTa: 'அச்சுக்கோடு vs நடுவரைக்கோடு விகிதம்',
      trick: 'Axial has the letter "A" (First = Double) → E_axial = 2 × E_equatorial.',
      explanation: 'Axial field is twice the equatorial field at the same distance.'
    }
  ],
  summary: {
    keyTakeaways: [
      'Electric charge is quantized (q = ne) and conserved in all physical processes.',
      'Coulomb’s force is F = (1/4πε₀) · (|q₁q₂|/r²) in vacuum and decreases in dielectrics by factor ε_r.',
      'Dipole field falls off as 1/r³, with E_axial = 2 · E_equatorial at distance r >> a.',
      'Gauss’s Law (Φ = Q_in / ε₀) proves E = 0 inside a charged hollow conductor (Electrostatic Shielding).',
      'Van de Graaff generator combines Electrostatic Induction and Corona Discharge to reach 10⁷ V.'
    ],
    quickRevisionNotes: [
      'Coulomb constant k = 1/(4πε₀) = 9 × 10⁹ N m² C⁻²',
      'Permittivity of free space ε₀ = 8.854 × 10⁻¹² C² N⁻¹ m⁻²',
      'Dipole moment p = q · 2a (directed from -q to +q)',
      'Torque on dipole: τ = p × E = p E sin θ',
      'Potential due to dipole: V = (1/4πε₀) (p cos θ / r²)',
      'Capacitance: C = ε₀A/d, Energy: U = ½ CV² = Q²/(2C)',
      'Series: 1/C_s = 1/C₁ + 1/C₂; Parallel: C_p = C₁ + C₂'
    ]
  }
};
