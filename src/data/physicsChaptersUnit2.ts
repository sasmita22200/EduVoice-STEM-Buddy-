import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_2_CURRENT_ELECTRICITY: PhysicsChapter = {
  chapterNumber: 2,
  chapterName: 'Current Electricity',
  chapterNameTa: 'மின்னோட்டவியல்',
  unitNumber: 2,
  unitName: 'Current Electricity',
  unitNameTa: 'மின்னோட்டவியல்',
  overview: 'In-depth study of electric currents in conductors, drift velocity, microscopic and macroscopic Ohm’s law, electrical resistivity, temperature coefficient of resistance, Kirchhoff’s circuit rules, Wheatstone bridge, Meter Bridge, Potentiometer, and thermoelectric effects (Seebeck, Peltier, Thomson).',
  overviewTa: 'கடத்திகளில் பாயும் மின்னோட்டம், இழுப்புத் திசைவேகம், ஓம் விதியின் நுண்நோக்கி மற்றும் மேக்ரோ வடிவங்கள், மின்தடை எண், மின்தடை வெப்பநிலை எண், கிர்க்காஃப் விதிகள், வீட்ஸ்டோன் சமனச்சுற்று, மீட்டர் சமனச்சுற்று, மின்னழுத்தமானி மற்றும் வெப்ப மின் விளைவுகள் (சீபெக், பெல்டியர், தாம்சன் விளைவுகள்) பற்றிய விரிவான பாடம்.',
  introduction: 'While electrostatics deals with charges at rest, current electricity investigates dynamic electric charges in motion through conducting pathways. It powers the global electrical grid, domestic appliances, microelectronic circuits, and thermoelectric power generators.',
  introductionTa: 'நிலைமின்னியல் ஓய்வுநிலை மின்னூட்டங்களை விளக்கும் வேளையில், மின்னோட்டவியல் கடத்திகள் வழியே பாயும் இயக்க மின்னூட்டங்களை ஆராய்கிறது. உலகளாவிய மின் விநியோகக் கட்டமைப்பு, வீட்டு உபயோகப் பொருட்கள், நுண்மின்னணு சுற்றுகள் மற்றும் வெப்பமின் ஆக்கிகள் ஆகியவை இதன் அடிப்படையில் இயங்குகின்றன.',
  learningObjectives: [
    'Understand electric current, drift velocity (v_d), relaxation time (τ), and mobility (μ).',
    'Derive the relation between electric current and drift velocity (I = n A e v_d).',
    'State and analyze microscopic and macroscopic Ohm’s law (J = σE and V = IR).',
    'Compute equivalent resistance for series and parallel networks, and analyze temperature coefficient of resistance (α).',
    'Apply Kirchhoff’s Current Rule (Junction Rule) and Voltage Rule (Loop Rule) to complex multi-loop circuits.',
    'Derive the Wheatstone bridge balance condition (P/Q = R/S).',
    'Explain the working of Meter Bridge and Potentiometer for EMF comparison and internal resistance determination.',
    'Understand thermoelectric effects: Seebeck effect, Peltier effect, and Thomson effect.'
  ],
  learningObjectivesTa: [
    'மின்னோட்டம், இழுப்புத் திசைவேகம் (v_d), தளர்வு நேரம் (τ) மற்றும் இயக்க எண் (μ) ஆகியவற்றைப் புரிந்து கொள்ளுதல்.',
    'மின்னோட்டத்திற்கும் இழுப்புத் திசைவேகத்திற்கும் இடையேயான தொடர்பை வருவித்தல் (I = n A e v_d).',
    'ஓம் விதியின் நுண்நோக்கி (J = σE) மற்றும் மேக்ரோ (V = IR) வடிவங்களை அறிதல்.',
    'மின்தடைகளின் தொடர்-பக்க இணைப்பு மற்றும் மின்தடை வெப்பநிலை எண் (α) கணக்கிடுதல்.',
    'கிர்க்காஃபின் மின்னோட்ட விதி மற்றும் மின்னழுத்த விதியை சிக்கலான சுற்றுகளுக்குப் பயன்படுத்துதல்.',
    'வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலைக்கான நிபந்தனையை வருவித்தல் (P/Q = R/S).',
    'மீட்டர் சமனச்சுற்று மற்றும் மின்னழுத்தமானியின் தத்துவம் மற்றும் பயன்பாடுகளை அறிதல்.',
    'வெப்ப மின் விளைவுகளான சீபெக், பெல்டியர், தாம்சன் விளைவுகளைக் கற்றல்.'
  ],
  importance: 'Carries 10-12 marks in TN Board examinations, featuring mandatory 5-mark derivations (Wheatstone Bridge, Potentiometer EMF comparison and internal resistance) and practical lab connection questions.',
  prerequisites: [
    'Electric Potential and Potential Difference (Class 12 Unit 1)',
    'Conservation of Charge and Conservation of Energy',
    'Basic DC circuit laws and series-parallel arithmetic'
  ],
  everydayApplications: [
    'Household electrical wiring and circuit breaker overload calculations',
    'Strain gauges and precision temperature sensors using Wheatstone bridge circuits',
    'Thermoelectric wine coolers and portable mini-refrigerators using Peltier modules',
    'Spacecraft radioisotope thermoelectric generators (RTGs) using Seebeck effect',
    'Battery internal resistance testing in electric vehicle battery management systems'
  ],
  historicalBackground: 'Luigi Galvani observed animal electricity in 1780. Alessandro Volta invented the first chemical battery (Voltaic pile) in 1800. Georg Simon Ohm established the fundamental current-voltage relationship in 1827. Gustav Kirchhoff formulated circuit loop laws in 1845. Thomas Seebeck discovered thermoelectricity in 1821.',
  scientists: [
    { name: 'Georg Simon Ohm', contribution: 'Established Ohm’s Law connecting voltage, current, and resistance', year: '1827' },
    { name: 'Gustav Kirchhoff', contribution: 'Formulated junction and loop circuit conservation laws', year: '1845' },
    { name: 'Charles Wheatstone', contribution: 'Popularized the bridge network for precise resistance measurement', year: '1843' },
    { name: 'Thomas Johann Seebeck', contribution: 'Discovered generation of thermoelectric EMF across junction of dissimilar metals', year: '1821' },
    { name: 'Jean Peltier', contribution: 'Discovered heating/cooling effect when current crosses a bimetallic junction', year: '1834' }
  ],
  majorDiscoveries: [
    'Voltaic Battery Pile (1800)',
    'Ohm’s Law of Electrical Conduction (1827)',
    'Thermoelectric Energy Conversion (1821)'
  ],
  realWorldRelevance: 'The backbone of consumer electronics, power transmission networks, electric vehicles, and renewable thermoelectric energy harvesting.',
  topics: [
    {
      id: 'top-2-1',
      topicNumber: '2.1',
      title: 'Electric Current, Drift Velocity, Mobility & Current-Drift Velocity Relation',
      titleTa: 'மின்னோட்டம், இழுப்புத் திசைவேகம், இயக்க எண் மற்றும் மின்னோட்டம்-இழுப்புத் திசைவேகத் தொடர்பு',
      beginnerExplanation: 'Electric current is the net rate of flow of electric charge through any cross-section of a conductor (I = dq/dt). Inside a conductor, free electrons collide randomly with positive ions. When an external electric field is applied, electrons slowly drift towards the positive terminal with an average drift velocity v_d.',
      beginnerExplanationTa: 'கடத்தியின் குறுக்குவெட்டுப் பரப்பு வழியே மின்னூட்டங்கள் பாயும் வீதமே மின்னோட்டம் ஆகும் (I = dq/dt). மின்புலம் செலுத்தப்படும் போது கட்டுறா எலக்ட்ரான்கள் நேர்முனையை நோக்கி ஒரு குறிப்பிட்ட சராசரி திசைவேகத்துடன் நகர்கின்றன. இதுவே இழுப்புத் திசைவேகம் (v_d) எனப்படும்.',
      coreConcepts: [
        'Drift velocity: v_d = -(eE / m) · τ (where τ is relaxation time, ~10⁻¹⁴ s)',
        'Mobility: μ = |v_d| / E = eτ / m (SI unit: m² V⁻¹ s⁻¹)',
        'Current-drift velocity equation: I = n · A · e · v_d',
        'Current Density: J = I / A = n · e · v_d (Vector quantity, SI unit: A m⁻²)'
      ],
      definitions: [
        {
          term: 'Drift Velocity (v_d)',
          termTa: 'இழுப்புத் திசைவேகம்',
          definitionEn: 'The average velocity gained by free electrons inside a conductor under the influence of an applied external electric field (v_d = -eEτ / m).',
          definitionTa: 'கடத்தி ஒன்றின் மீது மின்புலம் செலுத்தப்படும் போது, அதில் உள்ள கட்டுறா எலக்ட்ரான்கள் நேர்முனையை நோக்கி நகரும் சராசரி திசைவேகம் இழுப்புத் திசைவேகம் எனப்படும்.',
          keyPoints: ['Typical magnitude is very small: ~10⁻⁴ m/s (fraction of a millimeter per second)', 'Directed opposite to external electric field E', 'Depends on relaxation time τ and applied field E']
        },
        {
          term: 'Mobility (μ)',
          termTa: 'இயக்க எண்',
          definitionEn: 'The magnitude of drift velocity acquired by a charge carrier per unit electric field (μ = |v_d| / E).',
          definitionTa: 'ஓரலகு மின்புலத்தினால் பெறப்படும் இழுப்புத் திசைவேகத்தின் எண்மதிப்பு இயக்க எண் எனப்படும் (μ = |v_d| / E).',
          keyPoints: ['SI Unit: m² V⁻¹ s⁻¹ (or m² s⁻¹ V⁻¹)', 'Always a positive scalar quantity', 'μ = eτ / m']
        }
      ],
      realLifeExamples: [
        'Turning on a wall switch lights a bulb instantly because the electric field travels along the wire at nearly the speed of light (~3 × 10⁸ m/s), even though individual electrons drift at less than 1 mm/s!',
        'Copper wires in domestic wiring provide high free electron density (n ≈ 8.5 × 10²⁸ m⁻³).'
      ],
      analogies: 'Imagine a crowded hallway of students. Without a bell, students wander randomly (thermal motion). When the dismissal bell rings, the crowd slowly drifts towards the exit door despite bumping into each other.',
      commonMisconceptions: [
        'Misconception: Electrons travel at the speed of light in copper wires. Correction: Drift velocity is only around 0.1 mm/s; it is the electromagnetic wave energy that travels near light speed.'
      ]
    },
    {
      id: 'top-2-2',
      topicNumber: '2.2',
      title: 'Ohm’s Law, Resistivity & Temperature Coefficient of Resistance',
      titleTa: 'ஓம் விதி, மின்தடை எண் மற்றும் மின்தடை வெப்பநிலை எண்',
      beginnerExplanation: 'Ohm’s Law in microscopic form states that current density J is directly proportional to electric field E (J = σE). In macroscopic circuits at constant temperature, the current through a conductor is proportional to the potential difference across its ends (V = IR).',
      beginnerExplanationTa: 'மாறா வெப்பநிலையில், கடத்தி ஒன்றின் வழியே பாயும் மின்னோட்டம் அதன் முனைகளுக்கு இடையே உள்ள மின்னழுத்த வேறுபாட்டிற்கு நேர்விகிதத்தில் இருக்கும் (V = IR). நுண்நோக்கி வடிவம் J = σE ஆகும்.',
      coreConcepts: [
        'Microscopic Ohm’s Law: J = σ · E (where conductivity σ = n e² τ / m)',
        'Resistivity: ρ = 1 / σ = m / (n e² τ) (SI Unit: Ω m)',
        'Resistance: R = ρ · (l / A) (SI Unit: Ohm, Ω)',
        'Temperature dependence: R_T = R₀ [1 + α(T - T₀)]',
        'Temperature coefficient α = (R_T - R₀) / [R₀(T - T₀)] (SI Unit: °C⁻¹ or K⁻¹)'
      ],
      definitions: [
        {
          term: 'Temperature Coefficient of Resistance (α)',
          termTa: 'மின்தடை வெப்பநிலை எண்',
          definitionEn: 'The fractional increase in resistance per degree Celsius (or Kelvin) rise in temperature above reference temperature (α = ΔR / [R₀ · ΔT]).',
          definitionTa: '0°C-ல் உள்ள ஓரலகு மின்தடையை 1°C உயர்த்தும் போது ஏற்படும் மின்தடை அதிகரிப்பிற்கும் அதன் தொடக்க மின்தடைக்கும் உள்ள தகவு.',
          keyPoints: ['Positive for metals/conductors (resistance increases with heating)', 'Negative for semiconductors and electrolytes (resistance decreases with heating)', 'SI Unit: K⁻¹ or °C⁻¹']
        }
      ],
      realLifeExamples: [
        'Nichrome wire is used in electric heating irons and toasters because of its very high resistivity and resistance to oxidation at high temperatures.',
        'Thermistors (semiconductor temperature sensors) show dramatic resistance drops when heated, used in digital fever thermometers.'
      ],
      analogies: 'Water flowing through a pipe encounters friction from the pipe walls (resistance). A longer pipe has more resistance (R ∝ l), while a wider pipe offers less resistance (R ∝ 1/A).',
      commonMisconceptions: [
        'Misconception: Ohm’s law is a universal fundamental law of physics. Correction: It is an empirical relationship valid only for ohmic materials (metals at constant temperature); non-ohmic devices like diodes and transistors do not obey Ohm’s law.'
      ]
    },
    {
      id: 'top-2-3',
      topicNumber: '2.3',
      title: 'Kirchhoff’s Rules & Wheatstone Bridge',
      titleTa: 'கிர்க்காஃப் விதிகள் மற்றும் வீட்ஸ்டோன் சமனச்சுற்று',
      beginnerExplanation: 'When solving complex circuits with multiple loops and battery sources, simple series-parallel formulas fail. Kirchhoff formulated two fundamental rules based on charge and energy conservation. The Wheatstone bridge uses a 4-resistor bridge network to measure an unknown resistance with supreme precision.',
      beginnerExplanationTa: 'சிக்கலான மின்சுற்றுகளுக்கு கிர்க்காஃபின் மின்னோட்ட விதி (சந்திப்பு விதி) மற்றும் மின்னழுத்த வேறுபாட்டு விதி (சுற்று விதி) பயன்படுகின்றன. வீட்ஸ்டோன் சமனச்சுற்று நான்கு மின்தடைகளைக் கொண்டு தெரியாத மின்தடையை துல்லியமாகக் கண்டறிய உதவுகிறது.',
      coreConcepts: [
        'Kirchhoff’s 1st Rule (Current / Junction Rule): Σ I = 0 at any junction (Conservation of Charge).',
        'Kirchhoff’s 2nd Rule (Voltage / Loop Rule): In any closed loop, Σ (IR) = Σ ε (Conservation of Energy).',
        'Wheatstone Bridge balance condition: When galvanometer shows zero deflection (I_G = 0), P / Q = R / S.'
      ],
      definitions: [
        {
          term: 'Wheatstone Bridge Balance Condition',
          termTa: 'வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலை நிபந்தனை',
          definitionEn: 'When no current flows through the central galvanometer branch (I_G = 0), the ratio of adjacent arm resistances is equal: P / Q = R / S.',
          definitionTa: 'கால்வனோமீட்டர் வழியே மின்னோட்டம் பாயாத போது (I_G = 0), அருகருகே உள்ள மின்தடைகளின் தகவு சமமாகும்: P / Q = R / S.',
          keyPoints: ['Null deflection method eliminates meter resistance errors', 'Unknown resistance S = (Q / P) · R', 'Interchanging battery and galvanometer does not affect balance condition']
        }
      ],
      realLifeExamples: [
        'Bridge rectifiers and precision electronic scales (weighing machines) use Wheatstone strain-gauge bridges.',
        'Aircraft wing stress monitoring systems detect microscopic structural flexes via bridge resistance shifts.'
      ],
      analogies: 'Imagine two parallel waterways connected by a middle canal. If the water pressure (potential) at both ends of the middle canal is identical, no water flows through it (null deflection).',
      commonMisconceptions: [
        'Misconception: In Kirchhoff’s loop rule, current always flows from negative to positive terminal inside a circuit. Correction: Inside a battery during discharging, current flows from negative to positive plate, but in external resistors it flows from high to low potential.'
      ]
    },
    {
      id: 'top-2-4',
      topicNumber: '2.4',
      title: 'Meter Bridge, Potentiometer & Thermoelectricity',
      titleTa: 'மீட்டர் சமனச்சுற்று, மின்னழுத்தமானி மற்றும் வெப்பமின் விளைவுகள்',
      beginnerExplanation: 'A Meter Bridge is a practical laboratory version of the Wheatstone bridge built on a 1-meter uniform manganin wire. A Potentiometer is an ideal voltmeter that draws zero current at the balance point, used to compare EMFs of two cells (ε₁/ε₂ = l₁/l₂) and determine internal resistance (r). Thermoelectricity converts thermal energy directly into electricity.',
      beginnerExplanationTa: 'மீட்டர் சமனச்சுற்று என்பது வீட்ஸ்டோன் சமனச்சுற்றின் செய்முறை வடிவமாகும். மின்னழுத்தமானி என்பது சமநிலை புள்ளியில் மின்சாரத்தை எடுக்காத ஒரு சிறந்த மின்னழுத்தமானியாகும். இது இரு மின்கலங்களின் மின்னியக்கு விசையை ஒப்பிடவும், அகமின்தடையைக் காணவும் பயன்படுகிறது.',
      coreConcepts: [
        'Meter Bridge Unknown Resistance: P / Q = l₁ / l₂ \\implies X = R · (l₁ / (100 - l₁))',
        'Specific Resistance: ρ = X · (πr² / L)',
        'Potentiometer Principle: EMF ε ∝ balancing length l (ε = C · l, where C is potential gradient V/L)',
        'Comparison of EMFs: ε₁ / ε₂ = l₁ / l₂',
        'Internal Resistance: r = R · [(l₁ - l₂) / l₂]',
        'Seebeck Effect: Temperature difference produces thermoelectric EMF in a thermocouple.',
        'Peltier Effect: Electric current through a bimetallic junction causes heat absorption at one junction and heat evolution at the other (reversible).',
        'Thomson Effect: Temperature gradient along a single current-carrying conductor causes heat absorption or evolution.'
      ],
      definitions: [
        {
          term: 'Seebeck Effect',
          termTa: 'சீபெக் விளைவு',
          definitionEn: 'In a closed circuit consisting of two dissimilar metals, when the two junctions are maintained at different temperatures, an electric current (thermoelectric EMF) is produced.',
          definitionTa: 'இரு வெவ்வேறு உலோகங்களாலான மூடிய சுற்றில், இரு சந்திப்புகளும் வெவ்வேறு வெப்பநிலைகளில் வைக்கப்படும் போது, ஒரு மின்னியக்கு விசை (வெப்பமின் மின்னோட்டம்) தோன்றும் நிகழ்வு.',
          keyPoints: ['Thermoelectric series: Antimony to Bismuth (Sb to Bi gives current from Sb to Bi at cold junction)', 'Reversible effect', 'Converts heat directly to electricity']
        },
        {
          term: 'Peltier Effect',
          termTa: 'பெல்டியர் விளைவு',
          definitionEn: 'When an electric current is passed through a circuit of two dissimilar metals, heat is evolved at one junction and absorbed at the other junction.',
          definitionTa: 'இரு வெவ்வேறு உலோகங்களாலான சுற்றின் வழியே மின்னோட்டம் செலுத்தப்படும் போது, ஒரு சந்தியில் வெப்பம் உமிழப்பட்டு மற்றொரு சந்தியில் வெப்பம் உறிஞ்சப்படும் நிகழ்வு.',
          keyPoints: ['Exact converse of Seebeck effect', 'Reversible upon reversing current direction', 'Used in solid-state thermoelectric coolers']
        }
      ],
      realLifeExamples: [
        'Potentiometer null method is used in standardizing primary electrical measurement standards.',
        'Thermoelectric couples (Cu-Fe) measure temperatures up to thousands of degrees inside blast furnaces.'
      ],
      analogies: 'A potentiometer is like a precision balance scale where you slide a counterweight until the pointer is perfectly level (zero current), ensuring no measurement distortion from meter loading.',
      commonMisconceptions: [
        'Misconception: A voltmeter can measure the true EMF of a cell. Correction: A voltmeter always draws some current, measuring terminal voltage V = ε - Ir; only a potentiometer measures true EMF ε because I = 0 at balance.'
      ]
    }
  ],
  formulas: [
    {
      id: 'f-2-1',
      formula: 'I = n A e v_d, \\quad J = \\sigma E',
      meaning: 'Relationship between electric current, carrier density, cross-sectional area, electronic charge, and drift velocity.',
      meaningTa: 'மின்னோட்டம், எலக்ட்ரான் அடர்த்தி, பரப்பு மற்றும் இழுப்புத் திசைவேகத்திற்கான தொடர்பு.',
      variables: [
        { symbol: 'I', name: 'Electric Current', nameTa: 'மின்னோட்டம்', siUnit: 'A (Ampere)', dimension: '[I]' },
        { symbol: 'n', name: 'Free electron density', nameTa: 'கட்டுறா எலக்ட்ரான் அடர்த்தி', siUnit: 'm⁻³', dimension: '[L⁻³]' },
        { symbol: 'A', name: 'Cross-sectional area', nameTa: 'குறுக்குவெட்டுப் பரப்பு', siUnit: 'm²', dimension: '[L²]' },
        { symbol: 'e', name: 'Charge of electron', nameTa: 'எலக்ட்ரான் மின்னூட்டம்', siUnit: 'C (1.6 × 10⁻¹⁹ C)', dimension: '[I T]' },
        { symbol: 'v_d', name: 'Drift velocity', nameTa: 'இழுப்புத் திசைவேகம்', siUnit: 'm s⁻¹', dimension: '[L T⁻¹]' }
      ],
      siUnit: 'Ampere (A)',
      dimension: '[I]',
      whenToUse: 'Calculate drift velocity, carrier concentration, or microscopic current density.',
      realLifeApplication: 'Determining conductor wire gauge in household appliances and microchip interconnects.',
      memoryShortcut: 'Current I = "n-A-e-v_d" (Say: "Naev-d").',
      category: 'fundamental'
    },
    {
      id: 'f-2-2',
      formula: '\\frac{P}{Q} = \\frac{R}{S}',
      meaning: 'Wheatstone Bridge balance condition when galvanometer current I_G = 0.',
      meaningTa: 'கால்வனோமீட்டரில் சுழி விலகல் (I_G = 0) ஏற்படும் போது வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலை நிபந்தனை.',
      variables: [
        { symbol: 'P, Q', name: 'Ratio arm resistances', nameTa: 'விகிதக் கர மின்தடைகள்', siUnit: 'Ω (Ohm)', dimension: '[M L² T⁻³ I⁻²]' },
        { symbol: 'R', name: 'Known standard resistance', nameTa: 'தெரிந்த மின்தடை', siUnit: 'Ω', dimension: '[M L² T⁻³ I⁻²]' },
        { symbol: 'S', name: 'Unknown resistance', nameTa: 'தெரியாத மின்தடை', siUnit: 'Ω', dimension: '[M L² T⁻³ I⁻²]' }
      ],
      siUnit: 'Dimensionless ratio / Ohms (Ω)',
      dimension: 'Dimensionless ratio',
      whenToUse: 'Measuring precision resistance in laboratory bridge networks.',
      realLifeApplication: 'Electronic weighbridges, load cell sensors, and medical blood pressure transducers.',
      memoryShortcut: 'Left ratio equals Right ratio: P/Q = R/S.',
      category: 'board_exam'
    },
    {
      id: 'f-2-3',
      formula: '\\frac{\\varepsilon_1}{\\varepsilon_2} = \\frac{l_1}{l_2}, \\quad r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)',
      meaning: 'Potentiometer comparison of EMFs of two cells and internal resistance formula.',
      meaningTa: 'மின்னழுத்தமானி மூலம் இரு மின்கலங்களின் மின்னியக்கு விசை ஒப்பீடு மற்றும் அகமின்தடை காணும் சமன்பாடு.',
      variables: [
        { symbol: 'ε₁, ε₂', name: 'Electromotive Forces (EMF)', nameTa: 'மின்னியக்கு விசைகள்', siUnit: 'V (Volt)', dimension: '[M L² T⁻³ I⁻¹]' },
        { symbol: 'l₁', name: 'Balancing length on open circuit', nameTa: 'திறந்த சுற்றின் சமன்செய் நீளம்', siUnit: 'cm or m', dimension: '[L]' },
        { symbol: 'l₂', name: 'Balancing length with shunt resistance R', nameTa: 'மின்தடை R இணைக்கப்பட்ட சமன்செய் நீளம்', siUnit: 'cm or m', dimension: '[L]' },
        { symbol: 'r', name: 'Internal resistance of cell', nameTa: 'மின்கலத்தின் அகமின்தடை', siUnit: 'Ω (Ohm)', dimension: '[M L² T⁻³ I⁻²]' }
      ],
      siUnit: 'r in Ohms (Ω)',
      dimension: '[M L² T⁻³ I⁻²]',
      whenToUse: 'Laboratory experiments comparing battery EMFs and calculating internal battery resistance.',
      realLifeApplication: 'Battery health assessment in mobile phone and electric scooter battery testing.',
      memoryShortcut: 'r = R · (Longer length - Shorter length) / Shorter length.',
      category: 'frequently_used'
    }
  ],
  derivations: [
    {
      id: 'der-2-1',
      title: 'Obtain the Condition for Bridge Balance in Wheatstone’s Bridge using Kirchhoff’s Rules',
      titleTa: 'கிர்க்காஃப் விதிகளைப் பயன்படுத்தி வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலை நிபந்தனையை வருவித்தல்',
      aim: 'To derive the balance condition P/Q = R/S for a Wheatstone bridge network when no current flows through the galvanometer branch.',
      given: [
        'Four resistors P, Q, R, and S arranged in a closed diamond network ABCD.',
        'Galvanometer of resistance G connected between junctions B and D.',
        'Battery of EMF ε and key connected between junctions A and C.',
        'Current I splits at junction A into I₁ (through arm AB) and I₂ (through arm AD).'
      ],
      toProve: '\\frac{P}{Q} = \\frac{R}{S} \\quad (\\text{when } I_G = 0)',
      assumptions: [
        'Connecting wires have negligible resistance.',
        'Current distribution follows Kirchhoff’s junction law.'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Apply Kirchhoff’s Current Rule (Junction Rule) at junction B and junction D.',
          descriptionTa: 'சந்தி B மற்றும் D-ல் கிர்க்காஃபின் மின்னோட்ட விதியைப் பயன்படுத்துதல்.',
          equation: '\\text{At junction B: } I_1 - I_G - I_3 = 0 \\implies I_3 = I_1 - I_G \\\\\n\\text{At junction D: } I_2 + I_G - I_4 = 0 \\implies I_4 = I_2 + I_G',
          note: 'I_G is the current entering galvanometer from B to D.'
        },
        {
          stepNumber: 2,
          description: 'Apply Kirchhoff’s Voltage Rule (Loop Rule) to closed mesh ABDA.',
          descriptionTa: 'மூடிய சுற்று ABDA-க்கு கிர்க்காஃபின் மின்னழுத்த விதியைப் பயன்படுத்துதல்.',
          equation: 'I_1 P + I_G G - I_2 R = 0 \\implies I_1 P + I_G G = I_2 R \\quad \\text{--- (Equation 1)}',
          note: 'Tracing clockwise: +I₁P along AB, +I_G G along BD, and -I₂R against AD.'
        },
        {
          stepNumber: 3,
          description: 'Apply Kirchhoff’s Voltage Rule (Loop Rule) to closed mesh BCDB.',
          descriptionTa: 'மூடிய சுற்று BCDB-க்கு கிர்க்காஃபின் மின்னழுத்த விதியைப் பயன்படுத்துதல்.',
          equation: 'I_3 Q - I_4 S - I_G G = 0 \\implies (I_1 - I_G) Q - (I_2 + I_G) S - I_G G = 0 \\quad \\text{--- (Equation 2)}',
          note: 'Tracing clockwise: +I₃Q along BC, -I₄S along CD, -I_G G along DB.'
        },
        {
          stepNumber: 4,
          description: 'Apply bridge balance condition: Adjust resistances such that galvanometer shows zero deflection (I_G = 0).',
          descriptionTa: 'சமநிலை நிபந்தனை I_G = 0 எனப் பிரதியிடுதல்.',
          equation: '\\text{From Eq 1: } I_1 P = I_2 R \\quad \\text{--- (Equation 3)} \\\\\n\\text{From Eq 2: } I_1 Q = I_2 S \\quad \\text{--- (Equation 4)}',
          note: 'When I_G = 0, potentials at B and D are identical (V_B = V_D).'
        },
        {
          stepNumber: 5,
          description: 'Divide Equation 3 by Equation 4 to eliminate currents I₁ and I₂.',
          descriptionTa: 'சமன்பாடு 3-ஐ சமன்பாடு 4-ஆல் வகுத்தல்.',
          equation: '\\frac{I_1 P}{I_1 Q} = \\frac{I_2 R}{I_2 S} \\implies \\frac{P}{Q} = \\frac{R}{S}',
          note: 'This is the celebrated Wheatstone Bridge balance condition.'
        }
      ],
      finalEquation: '\\frac{P}{Q} = \\frac{R}{S}',
      physicalMeaning: 'When the ratio of resistances in adjacent arms are equal, the potential difference across the central galvanometer branch is zero (V_B = V_D), resulting in zero galvanometer current (null condition).',
      physicalMeaningTa: 'அருகருகே உள்ள கரங்களின் மின்தடை தகவுகள் சமமாக இருக்கும் போது, B மற்றும் D புள்ளிகளின் மின்னழுத்தம் சமமாகி (V_B = V_D), கால்வனோமீட்டரில் சுழி விலகல் ஏற்படுகிறது.',
      commonMistakes: [
        'Incorrect sign convention in Kirchhoff’s loop rule (forgetting minus sign when moving against current arrow).',
        'Not stating clearly that balance occurs when I_G = 0 (Null deflection).',
        'Mixing arm names (e.g. writing P/S = R/Q instead of P/Q = R/S).'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'der-2-2',
      title: 'Determination of Internal Resistance of a Cell using Potentiometer',
      titleTa: 'மின்னழுத்தமானியைப் பயன்படுத்தி மின்கலத்தின் அகமின்தடை காணுதல்',
      aim: 'To derive the mathematical expression for determining the internal resistance (r) of a primary cell using a potentiometer wire setup.',
      given: [
        'A uniform potentiometer wire CD of length 10 m connected to a primary battery supply.',
        'Primary cell of EMF ε with internal resistance r connected across potentiometer with high resistance box and galvanometer.',
        'Resistance box R connected in parallel across the cell with key K₂.'
      ],
      toProve: 'r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)',
      assumptions: [
        'Potentiometer wire has uniform cross-section and constant potential gradient (V/l = constant).',
        'Primary driving battery EMF is greater than the cell under test.'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'With key K₂ open (cell on open circuit), find balancing length l₁.',
          descriptionTa: 'சாவி K₂ திறந்த நிலையில் (திறந்த சுற்று) சமன்செய் நீளம் l₁ காணுதல்.',
          equation: '\\varepsilon \\propto l_1 \\implies \\varepsilon = I r_0 l_1 \\quad \\text{--- (Equation 1)}',
          note: 'r₀ is the resistance per unit length of potentiometer wire.'
        },
        {
          stepNumber: 2,
          description: 'Close key K₂ to connect external resistance box R across the cell. Let balancing length be l₂.',
          descriptionTa: 'சாவி K₂-ஐ மூடி மின்தடை R இணைக்கப்பட்ட நிலையில் சமன்செய் நீளம் l₂ காணுதல்.',
          equation: 'V \\propto l_2 \\implies V = I r_0 l_2 \\quad \\text{--- (Equation 2)}',
          note: 'V is the terminal potential difference across the cell.'
        },
        {
          stepNumber: 3,
          description: 'Divide Equation 1 by Equation 2.',
          descriptionTa: 'சமன்பாடு 1-ஐ சமன்பாடு 2-ஆல் வகுத்தல்.',
          equation: '\\frac{\\varepsilon}{V} = \\frac{l_1}{l_2} \\quad \\text{--- (Equation 3)}',
          note: 'Ratio of EMF to terminal voltage equals the ratio of balancing lengths.'
        },
        {
          stepNumber: 4,
          description: 'Express terminal potential difference V in terms of current I and internal resistance r.',
          descriptionTa: 'முனைய மின்னழுத்த வேறுபாடு V-ஐ அகமின்தடை r உடன் தொடர்புபடுத்துதல்.',
          equation: 'I = \\frac{\\varepsilon}{R + r} \\implies V = I R = \\frac{\\varepsilon R}{R + r} \\implies \\frac{\\varepsilon}{V} = \\frac{R + r}{R} = 1 + \\frac{r}{R} \\quad \\text{--- (Equation 4)}',
          note: 'Terminal voltage V is always less than EMF ε during discharging.'
        },
        {
          stepNumber: 5,
          description: 'Equate Equation 3 and Equation 4 and solve for internal resistance r.',
          descriptionTa: 'சமன்பாடு 3 மற்றும் 4-ஐ சமன்செய்து r-ன் மதிப்பைக் கணக்கிடுதல்.',
          equation: '1 + \\frac{r}{R} = \\frac{l_1}{l_2} \\implies \\frac{r}{R} = \\frac{l_1}{l_2} - 1 = \\frac{l_1 - l_2}{l_2} \\implies r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)',
          note: 'Since l₁ > l₂, r is always a positive resistance value.'
        }
      ],
      finalEquation: 'r = R \\left( \\frac{l_1 - l_2}{l_2} \\right)',
      physicalMeaning: 'Internal resistance is determined without drawing current from the cell at the balancing point, yielding highly accurate internal battery characteristics.',
      physicalMeaningTa: 'சமநிலை புள்ளியில் மின்கலத்திலிருந்து எவ்வித மின்னோட்டமும் எடுக்கப்படாமல் துல்லியமாக அகமின்தடை கணக்கிடப்படுகிறது.',
      commonMistakes: [
        'Confusing open circuit length l₁ and closed circuit length l₂ (l₁ is ALWAYS greater than l₂).',
        'Dividing by l₁ instead of l₂ in the denominator.',
        'Forgetting to draw the complete circuit with primary circuit (battery, rheostat, key) and secondary circuit.'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      level: 'Easy',
      title: 'Current and Drift Velocity in a Copper Wire',
      question: 'A copper wire of cross-sectional area 1 × 10⁻⁶ m² carries a current of 3.2 A. If the free electron density in copper is 8 × 10²⁸ m⁻³, find the drift velocity of free electrons.',
      questionTa: '1 × 10⁻⁶ m² குறுக்குவெட்டுப் பரப்புள்ள செம்புக் கம்பியில் 3.2 A மின்னோட்டம் பாய்கிறது. எலக்ட்ரான் அடர்த்தி 8 × 10²⁸ m⁻³ எனில், இழுப்புத் திசைவேகத்தைக் காண்க.',
      given: { 'A': '1 × 10⁻⁶ m²', 'I': '3.2 A', 'n': '8 × 10²⁸ m⁻³', 'e': '1.6 × 10⁻¹⁹ C' },
      required: 'Drift velocity (v_d)',
      formulaUsed: 'I = n A e v_d \\implies v_d = \\frac{I}{n A e}',
      steps: [
        { stepNumber: 1, description: 'Rearrange current formula for drift velocity', math: 'v_d = \\frac{I}{n \\cdot A \\cdot e}' },
        { stepNumber: 2, description: 'Substitute known values', math: 'v_d = \\frac{3.2}{(8 \\times 10^{28}) \\times (1 \\times 10^{-6}) \\times (1.6 \\times 10^{-19})}' },
        { stepNumber: 3, description: 'Compute denominator and divide', math: '\\text{Denominator} = 8 \\times 1.6 \\times 10^{(28 - 6 - 19)} = 12.8 \\times 10^3 = 1.28 \\times 10^4 \\\\\nv_d = \\frac{3.2}{12800} = 2.5 \\times 10^{-4} \\text{ m/s} = 0.25 \\text{ mm/s}' }
      ],
      finalAnswer: '2.5 × 10⁻⁴ m s⁻¹ (0.25 mm/s)',
      siUnit: 'm s⁻¹ (metre per second)',
      shortcutMethod: '3.2 / 1.6 = 2. Then 2 / 8 = 0.25. Powers of 10: 10⁻³ = 0.25 × 10⁻³ = 2.5 × 10⁻⁴.',
      commonErrors: ['Mistake in power of 10 calculation (28 - 6 - 19 = +3, moving up gives -3 or 10⁻⁴).', 'Omitting electronic charge e = 1.6 × 10⁻¹⁹ C.'],
      examTip: 'Note how small drift velocity is (~0.25 mm/s), a common observation in 1-mark reasoning questions!'
    },
    {
      level: 'Medium',
      title: 'Meter Bridge Unknown Resistance Calculation',
      question: 'In a meter bridge experiment, the balancing length from left end is found to be 40 cm when a known resistance of 6 Ω is connected in the right gap. (i) Calculate the unknown resistance X in the left gap. (ii) If the wire has radius 0.2 mm and length 1 m, find the specific resistance (resistivity) of the material.',
      questionTa: 'ஒரு மீட்டர் சமனச்சுற்று சோதனையில் வலது இடைவெளியில் 6 Ω மின்தடை இணைக்கப்பட்ட போது இடதுபுறத்திலிருந்து சமன்செய் நீளம் 40 cm எனில் (i) தெரியாத மின்தடை X காண்க. (ii) கம்பி ஆரம் 0.2 mm மற்றும் நீளம் 1 m எனில் மின்தடை எண்ணைக் காண்க.',
      given: { 'l₁': '40 cm', 'l₂ = 100 - l₁': '60 cm', 'R (Right gap)': '6 Ω', 'r (wire radius)': '0.2 mm = 2 × 10⁻⁴ m', 'L': '1 m' },
      required: '(i) Unknown resistance X, (ii) Resistivity ρ',
      formulaUsed: '\\frac{X}{R} = \\frac{l_1}{100 - l_1}, \\quad \\rho = \\frac{X \\cdot \\pi r^2}{L}',
      steps: [
        { stepNumber: 1, description: 'Calculate unknown resistance X using meter bridge formula', math: 'X = R \\left( \\frac{l_1}{100 - l_1} \\right) = 6 \\times \\left( \\frac{40}{60} \\right) = 6 \\times \\frac{2}{3} = 4 \\text{ }\\Omega' },
        { stepNumber: 2, description: 'Calculate cross-sectional area of the wire A = πr²', math: 'A = 3.1416 \\times (2 \\times 10^{-4})^2 = 3.1416 \\times 4 \\times 10^{-8} = 1.2566 \\times 10^{-7} \\text{ m}^2' },
        { stepNumber: 3, description: 'Calculate specific resistance ρ = X·A / L', math: '\\rho = \\frac{4 \\times 1.2566 \\times 10^{-7}}{1} = 5.026 \\times 10^{-7} \\text{ }\\Omega\\text{ m}' }
      ],
      finalAnswer: 'Unknown resistance X = 4 Ω; Specific resistance ρ = 5.03 × 10⁻⁷ Ω m',
      siUnit: 'X in Ω, ρ in Ω m',
      shortcutMethod: '40/60 = 2/3. X = 6 × (2/3) = 4 Ω directly.',
      commonErrors: ['Swapping l₁ and (100 - l₁) ratios.', 'Forgetting to convert radius from mm to meters (r = 0.2 × 10⁻³ m).'],
      examTip: 'High-frequency 3-mark practical problem in State Board Physics theory papers.'
    },
    {
      level: 'Exam-Level',
      title: 'Kirchhoff’s Loop Analysis of Multi-Battery Two-Loop Network',
      question: 'A closed network consists of two cells of EMFs 6 V and 12 V with internal resistances 1 Ω and 2 Ω respectively connected in parallel across an external load resistor of 10 Ω. Use Kirchhoff’s rules to find: (i) Current through each battery branch, (ii) Total current through the load resistor, and (iii) Potential difference across the 10 Ω resistor.',
      questionTa: '6 V மற்றும் 12 V மின்னியக்கு விசைகளும் முறையே 1 Ω மற்றும் 2 Ω அகமின்தடைகளும் கொண்ட இரு மின்கலங்கள் 10 Ω வெளி மின்தடையுடன் பக்க இணைப்பில் இணைக்கப்பட்டுள்ளன. கிர்க்காஃப் விதிகளைப் பயன்படுத்தி ஒவ்வொரு கிளையிலும் பாயும் மின்னோட்டத்தைக் காண்க.',
      given: { 'ε₁': '6 V', 'r₁': '1 Ω', 'ε₂': '12 V', 'r₂': '2 Ω', 'R_load': '10 Ω' },
      required: 'Branch currents I₁, I₂, total current I = I₁ + I₂, and terminal voltage V',
      formulaUsed: '\\text{Loop Rule: } \\sum (IR) = \\sum \\varepsilon',
      steps: [
        { stepNumber: 1, description: 'Apply Loop Rule to Top Loop containing ε₁ (6V) and Load R (10Ω)', math: 'I_1 (1) + (I_1 + I_2)(10) = 6 \\implies 11 I_1 + 10 I_2 = 6 \\quad \\text{--- (Eq 1)}' },
        { stepNumber: 2, description: 'Apply Loop Rule to Bottom Loop containing ε₂ (12V) and Load R (10Ω)', math: 'I_2 (2) + (I_1 + I_2)(10) = 12 \\implies 10 I_1 + 12 I_2 = 12 \\implies 5 I_1 + 6 I_2 = 6 \\quad \\text{--- (Eq 2)}' },
        { stepNumber: 3, description: 'Solve simultaneous equations (Eq 1 and Eq 2)', math: '\\text{Multiply Eq 1 by 6: } 66 I_1 + 60 I_2 = 36 \\\\\n\\text{Multiply Eq 2 by 10: } 50 I_1 + 60 I_2 = 60 \\\\\n\\text{Subtract: } 16 I_1 = -24 \\implies I_1 = -1.5 \\text{ A}' },
        { stepNumber: 4, description: 'Find I₂ and total load current I', math: '5(-1.5) + 6 I_2 = 6 \\implies -7.5 + 6 I_2 = 6 \\implies 6 I_2 = 13.5 \\implies I_2 = 2.25 \\text{ A} \\\\\n\\text{Total load current } I = I_1 + I_2 = -1.5 + 2.25 = 0.75 \\text{ A}' },
        { stepNumber: 5, description: 'Calculate voltage drop across load resistor', math: 'V = I \\cdot R_{load} = 0.75 \\text{ A} \\times 10 \\text{ }\\Omega = 7.5 \\text{ V}' }
      ],
      finalAnswer: 'I₁ = -1.5 A (6V cell is being charged); I₂ = 2.25 A; Load current I = 0.75 A; Load Voltage V = 7.5 V',
      siUnit: 'Currents in A, Voltage in V',
      shortcutMethod: 'Negative sign for I₁ simply means current is entering the positive terminal of the 6V cell (it is being recharged by the stronger 12V battery).',
      commonErrors: ['Panicking when getting a negative current value instead of interpreting it as reverse flow.', 'Missing the common (I₁ + I₂) term through the shared load branch.'],
      examTip: 'Always state clearly: "Negative sign indicates that the direction of I₁ is opposite to the assumed direction."'
    }
  ],
  diagrams: [
    {
      id: 'diag-2-1',
      name: 'Wheatstone’s Bridge Circuit Diagram',
      nameTa: 'வீட்ஸ்டோன் சமனச்சுற்று மின்சுற்றுப் படம்',
      purpose: 'To illustrate the four-arm bridge network with central galvanometer and external power supply.',
      components: ['Resistors P, Q, R, S in diamond loop ABCD', 'Galvanometer G with key K₂ in BD branch', 'Battery ε with key K₁ in AC branch'],
      labelsEn: ['Arm AB (P)', 'Arm BC (Q)', 'Arm AD (R)', 'Arm CD (S)', 'Central Galvanometer G', 'Battery EMF ε', 'Plug Key K₁'],
      labelsTa: ['AB கரம் (P)', 'BC கரம் (Q)', 'AD கரம் (R)', 'CD கரம் (S)', 'கால்வனோமீட்டர் G', 'மின்கலம் ε', 'சாவி K₁'],
      stepByStepExplanation: [
        'Draw a diamond shape with four vertices marked A, B, C, D.',
        'Place resistors P (AB), Q (BC), R (AD), and S (CD).',
        'Connect galvanometer G between junctions B and D.',
        'Connect battery and switch across opposite junctions A and C.'
      ],
      studentObservation: 'When bridge is balanced, potential at B equals potential at D, and galvanometer needle remains at zero.',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Connecting battery and galvanometer between the same pairs of opposite nodes.', 'Omitting arrowheads for currents I₁, I₂, I₃, I₄, and I_G.'],
      aiImagePrompt: 'Vector electronic circuit schematic of a classic diamond Wheatstone Bridge. Nodes labeled A (left), B (top), C (right), D (bottom). Resistors P, Q, R, S labeled clearly on the four arms. Galvanometer circle with letter G connected between B and D. DC battery connected across A and C. Professional textbook styling, clean lines, white background.'
    },
    {
      id: 'diag-2-2',
      name: 'Potentiometer Circuit for Internal Resistance Measurement',
      nameTa: 'மின்னழுத்தமானி மூலம் மின்கலத்தின் அகமின்தடை காணும் சுற்றுப்படம்',
      purpose: 'To demonstrate the primary circuit and secondary test circuit with resistance box and jockey.',
      components: ['10m potentiometer wire CD', 'Primary battery Bt, key K₁, rheostat Rh', 'Secondary test cell ε with internal resistance r', 'Resistance box R with key K₂', 'Galvanometer G', 'High resistance HR', 'Sliding Jockey J'],
      labelsEn: ['Potentiometer wire CD', 'Primary accumulator battery Bt', 'Rheostat Rh', 'Test cell ε', 'Shunt resistance box R', 'Key K₂', 'Galvanometer G', 'Sliding Jockey J'],
      labelsTa: ['மின்னழுத்தமானி கம்பி CD', 'முதன்மை மின்கலம் Bt', 'மின்மாற்றி Rh', 'சோதனை மின்கலம் ε', 'மின்தடைப் பெட்டி R', 'சாவி K₂', 'கால்வனோமீட்டர் G', 'தொடுசாவி J'],
      stepByStepExplanation: [
        'Draw top primary circuit: battery Bt connected in series with key K₁ and rheostat Rh to wire ends C and D.',
        'Draw bottom secondary circuit starting from end C to positive terminal of cell ε.',
        'Show resistance box R in parallel across cell ε with key K₂.',
        'Connect negative terminal of cell through galvanometer G and high resistance HR to jockey J.'
      ],
      studentObservation: 'Balancing length l₁ (open circuit) is always longer than balancing length l₂ (closed circuit with shunt R).',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Connecting positive terminal of test cell ε to end D instead of end C (both positive terminals must connect to C!).', 'Missing the high resistance HR in series with galvanometer.'],
      aiImagePrompt: 'Detailed educational circuit diagram of a Potentiometer setup for internal resistance determination. Top primary circuit with driving battery, rheostat and main wire CD. Bottom secondary circuit with experimental cell, parallel resistance box with key K2, galvanometer, and jockey J touching wire at balancing length l2. White background, vector style, crisp labels.'
    }
  ],
  graphs: [
    {
      id: 'graph-2-1',
      name: 'V-I Characteristics for Ohmic (Linear) and Non-Ohmic (Non-Linear) Conductors',
      nameTa: 'ஓம் விதிக்குட்படும் மற்றும் உட்படாத கடத்திகளின் V-I வரைபடம்',
      xAxis: 'Current I (Amperes, A)',
      yAxis: 'Potential Difference V (Volts, V)',
      units: 'I in A, V in V',
      shape: 'Straight line passing through origin for ohmic conductor (copper); curved non-linear for diode / filament bulb.',
      importantPoints: ['Origin (0,0)', 'Slope of straight line = Resistance R (dV/dI = R)'],
      slope: 'Slope = dV / dI = Resistance R (Constant for Ohmic; variable dynamic resistance for Non-Ohmic).',
      physicalMeaning: 'Proves that ohmic materials maintain constant resistance independent of applied voltage, whereas heating in bulb filaments causes resistance to rise (curve bends upwards).',
      interpretation: 'Steeper line indicates higher electrical resistance.',
      mathematicalRelationship: 'V = I \\cdot R \\implies \\text{Slope } = R',
      examQuestions: ['Show V-I graph for metallic conductor and explain what its slope represents.'],
      commonMistakes: ['Confusing V-I graph (slope = R) with I-V graph (slope = 1/R = Conductance G).'],
      howToDrawInExam: 'Draw a crisp straight line from origin at ~45° labeled "Metallic conductor (Ohmic, slope = R)" and a curving line labeled "Filament lamp (Non-ohmic)".',
      aiGraphPrompt: 'Clean scientific graph showing Potential Difference V on y-axis and Current I on x-axis. A solid blue straight line through the origin labeled "Ohmic Conductor (Slope = R)" and a dashed orange curve bending upwards labeled "Filament Bulb (Non-Ohmic)". Professional laboratory presentation, white background.'
    }
  ],
  experiments: [
    {
      id: 'exp-2-1',
      name: 'Measurement of Unknown Resistance and Specific Resistance using Meter Bridge',
      nameTa: 'மீட்டர் சமனச்சுற்று மூலம் தெரியாத மின்தடை மற்றும் மின்தடை எண் காணுதல்',
      apparatus: ['Meter bridge apparatus with 1m uniform wire', 'Leclanche cell or 2V DC power supply', 'Galvanometer', 'High resistance box', 'Resistance box (known R)', 'Unknown resistance coil X', 'Screw gauge', 'Meter scale', 'Jockey'],
      principle: 'Wheatstone’s bridge principle: At null balance point, X / R = l₁ / (100 - l₁).',
      principleTa: 'வீட்ஸ்டோன் சமனச்சுற்று தத்துவம்: சமநிலை புள்ளியில் X / R = l₁ / (100 - l₁).',
      procedure: [
        'Connect known resistance R in the right gap and unknown resistance wire X in the left gap.',
        'Close circuit key and check for opposite deflections when jockey touches near 0 cm and 100 cm ends.',
        'Slide jockey gently along the wire to locate the exact null balance point where galvanometer deflection is ZERO.',
        'Note balancing length l₁ from left end. Repeat for different values of R.',
        'Measure diameter of unknown wire using screw gauge to find radius r, and measure its length L.'
      ],
      observation: 'Balancing length l₁ shifts when resistance R is altered, but ratio X = R·[l₁/(100-l₁)] remains constant.',
      result: 'Unknown resistance X is determined in Ohms, and specific resistance ρ = X·πr²/L is calculated in Ω m.',
      precautions: ['Do not drag jockey forcefully along the wire as it damages wire uniformity.', 'Null point should preferably be between 40 cm and 60 cm for maximum sensitivity.'],
      realLifeImportance: 'Standard quality control test for manufacturing copper electrical wires and heating elements.',
      aiLabPrompt: 'Physics lab setup of a Meter Bridge experiment on a wooden base. 100 cm metallic scale with straight manganin wire, brass connection strips with gaps holding a known resistance box on right and coiled test wire on left. Student holding jockey touching wire, sensitive center-zero galvanometer showing zero deflection. Bright lighting, realistic lab bench, white background.'
    }
  ],
  aiLesson: {
    lessonTitle: '3-Minute AI Interactive Lesson: The Symphony of Current & Kirchhoff’s Laws',
    targetDuration: '5 Minutes',
    visualStyle: 'Dynamic electron flow simulation with glowing circuit nodes and interactive resistor grids',
    format: '3D Scientific Animation & Interactive Explainer',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Speed of Light vs The Snail’s Pace of Electrons',
        explanationEn: 'When you flip a light switch, the lamp turns on instantly! But do electrons really move at lightning speed?',
        explanationTa: 'சுவிட்சைப் போட்டதும் விளக்கு உடனடியாக எரிகிறது! ஆனால் எலக்ட்ரான்கள் உண்மையில் அவ்வளவு வேகமாக ஓடுகின்றனவா?',
        explanationBilingual: 'Electrons drift at a snail’s pace (~0.1 mm/s), but the electromagnetic field travels at light speed (~3 × 10⁸ m/s).',
        narrationScript: 'Inside copper wires, billions of electrons collide constantly. When a voltage is applied, they crawl forward at less than a millimeter per second!',
        animationDescription: '3D metallic crystal lattice showing vibrating copper ions (green spheres) and free electrons (blue glowing dots) colliding and slowly drifting forward under an applied electric field.',
        keywordsDisplayed: ['Drift Velocity (v_d)', 'Relaxation Time (τ)', 'I = n A e v_d'],
        realLifeExample: 'Instantaneous lighting of domestic household bulbs.',
        interactiveQuestion: {
          question: 'What is the typical order of magnitude of drift velocity of electrons in a current-carrying metallic conductor?',
          questionTa: 'மின்னோட்டம் பாயும் உலோகக் கடத்தியில் எலக்ட்ரான்களின் இழுப்புத் திசைவேகத்தின் பொதுவான மதிப்பு என்ன?',
          options: ['10⁻⁴ m/s (fraction of mm/s)', '3 × 10⁸ m/s', '10³ m/s', '10⁶ m/s'],
          optionsTa: ['10⁻⁴ m/s (மில்லிமீட்டர்/விநாடி)', '3 × 10⁸ m/s', '10³ m/s', '10⁶ m/s'],
          correctIndex: 0,
          explanation: 'Drift velocity is very slow, typically ~10⁻⁴ m/s (0.1 mm/s).'
        },
        cameraDirection: 'Atomic scale 3D zoom into copper lattice.'
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Microscopic Ohm’s Law & Resistivity',
        explanationEn: 'Ohm’s law connects Current Density J directly to Electric Field E: J = σE.',
        explanationTa: 'மின்னோட்ட அடர்த்தி J மின்புலம் E-க்கு நேர்விகிதத்தில் இருக்கும்: J = σE.',
        explanationBilingual: 'Resistivity ρ = m / (n e² τ). Heating a metal increases ion vibrations, reducing relaxation time τ and increasing resistance.',
        narrationScript: 'As a wire heats up, copper ions vibrate vigorously, causing more frequent electron collisions. This increases the metal’s electrical resistance!',
        animationDescription: 'Side-by-side comparison: Cool copper wire (smooth electron flow) vs Hot copper wire (vigorous ion oscillations scattering electrons).',
        keywordsDisplayed: ['J = σE', 'Resistivity ρ = 1/σ', 'Temperature Coeff α > 0'],
        realLifeExample: 'Heating elements in electric irons and toasters.',
        interactiveQuestion: {
          question: 'For semiconductor materials, the temperature coefficient of resistance (α) is:',
          questionTa: 'குறைக்கடத்திகளுக்கு மின்தடை வெப்பநிலை எண் (α) எத்தகையது?',
          options: ['Negative (Resistance decreases with temperature)', 'Positive (Resistance increases)', 'Zero', 'Infinite'],
          optionsTa: ['எதிர்க்குறி (வெப்பநிலை உயர மின்தடை குறையும்)', 'நேர்க்குறி', 'சுழி', 'முடிவிலி'],
          correctIndex: 0,
          explanation: 'In semiconductors, heating breaks covalent bonds releasing more carriers, giving a negative temperature coefficient (α < 0).'
        },
        cameraDirection: 'Split-screen comparative view.'
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Working Principle: Kirchhoff’s Conservation Laws',
        explanationEn: 'Junction Rule conserves electric charge (Σ I = 0), while Loop Rule conserves energy (Σ IR = Σ ε).',
        explanationTa: 'சந்திப்பு விதி மின்னூட்ட மாறாத்தன்மையையும், சுற்று விதி ஆற்றல் மாறாத்தன்மையையும் அடிப்படையாகக் கொண்டவை.',
        explanationBilingual: 'Kirchhoff’s 1st law: Total current entering a junction equals total current leaving.',
        narrationScript: 'Think of electric junctions like a river fork: what flows in must flow out! Energy conservation ensures that around any closed loop, total voltage gains equal total voltage drops.',
        animationDescription: 'Complex multi-loop circuit with animated glowing current arrows merging at nodes and voltage drop meters highlighting across resistors.',
        keywordsDisplayed: ['Kirchhoff’s 1st Rule: Charge Conservation', 'Kirchhoff’s 2nd Rule: Energy Conservation'],
        realLifeExample: 'Complex multi-component smartphone motherboard power routing.',
        interactiveQuestion: {
          question: 'Kirchhoff’s second law (Voltage / Loop rule) is a direct consequence of the conservation of:',
          questionTa: 'கிர்க்காஃபின் இரண்டாம் விதி (மின்னழுத்த விதி) எதன் மாறாத்தத்துவத்தின் நேரடி விளைவாகும்?',
          options: ['Energy', 'Charge', 'Momentum', 'Angular Momentum'],
          optionsTa: ['ஆற்றல் (Energy)', 'மின்னூட்டம்', 'உந்தம்', 'கோண உந்தம்'],
          correctIndex: 0,
          explanation: 'The loop rule balances work done and energy supplied, representing conservation of energy.'
        },
        cameraDirection: 'Smooth panning shot across 3D circuit board.'
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Mathematical Derivation: Wheatstone Bridge Null Condition',
        explanationEn: 'When galvanometer current I_G = 0, node potentials balance: P / Q = R / S.',
        explanationTa: 'கால்வனோமீட்டர் மின்னோட்டம் I_G = 0 ஆகும்போது: P / Q = R / S.',
        explanationBilingual: 'Null method ensures zero measurement error from meter loading.',
        narrationScript: 'By applying Kirchhoff’s loop rule to both halves of the diamond bridge, the currents cancel out to yield the immortal formula: P over Q equals R over S!',
        animationDescription: 'Diamond bridge circuit highlighting equations on both left and right loops simultaneously, resolving into the clean balance equation P/Q = R/S.',
        keywordsDisplayed: ['I_G = 0', 'V_B = V_D', 'P/Q = R/S'],
        realLifeExample: 'High-precision industrial strain gauge scales.',
        interactiveQuestion: {
          question: 'If P = 10 Ω, Q = 20 Ω, R = 15 Ω in a balanced Wheatstone bridge, what is unknown resistance S?',
          questionTa: 'சமநிலை வீட்ஸ்டோன் சுற்றில் P = 10 Ω, Q = 20 Ω, R = 15 Ω எனில் S-ன் மதிப்பு என்ன?',
          options: ['30 Ω', '7.5 Ω', '15 Ω', '60 Ω'],
          optionsTa: ['30 Ω', '7.5 Ω', '15 Ω', '60 Ω'],
          correctIndex: 0,
          explanation: 'S = (Q/P) · R = (20/10) × 15 = 2 × 15 = 30 Ω.'
        },
        cameraDirection: 'Dynamic camera swoop through central galvanometer branch.'
      },
      {
        sceneNumber: 5,
        sceneTitle: 'Real-Life Application: Potentiometer & Thermoelectric Coolers',
        explanationEn: 'Potentiometer measures true EMF without drawing current (ε₁/ε₂ = l₁/l₂), while Peltier modules cool CPUs without moving parts.',
        explanationTa: 'மின்னழுத்தமானி மின்னோட்டம் எடுக்காமல் உண்மை EMF-ஐ அளவிடுகிறது. பெல்டியர் தொகுதிகள் கணினி CPU-களை குளிர்விக்க உதவுகின்றன.',
        explanationBilingual: 'Seebeck effect powers deep-space probes like Voyager using nuclear heat.',
        narrationScript: 'Deep in interstellar space, NASA’s Voyager spacecraft is powered by thermocouples using the Seebeck effect, generating electricity from radioactive heat for over 45 years!',
        animationDescription: '3D animation of Voyager space probe in deep space with glowing thermoelectric generator, transitioning to a solid-state Peltier cooler chilling a computer processor.',
        keywordsDisplayed: ['Potentiometer ε₁/ε₂ = l₁/l₂', 'Seebeck Effect', 'Peltier Solid-State Cooling'],
        realLifeExample: 'Voyager space probe RTG generators and Peltier portable coolers.',
        interactiveQuestion: {
          question: 'Why is a potentiometer preferred over a standard voltmeter for measuring the EMF of a cell?',
          questionTa: 'மின்கலத்தின் EMF-ஐ அளவிட வோல்ட்மீட்டரை விட மின்னழுத்தமானி விரும்பப்படுவது ஏன்?',
          options: ['It draws zero current at balance point', 'It is cheaper', 'It requires no battery', 'It has smaller size'],
          optionsTa: ['சமநிலை புள்ளியில் மின்னோட்டம் எடுக்காது', 'விலை குறைவு', 'மின்கலம் தேவையில்லை', 'சிறிய அளவு'],
          correctIndex: 0,
          explanation: 'At the null point, no current is drawn from the cell, thus measuring true open-circuit EMF ε without internal voltage drop Ir.'
        },
        cameraDirection: 'Cosmic orbit shot transitioning to microscopic silicon chip.'
      },
      {
        sceneNumber: 6,
        sceneTitle: 'Summary & Key Board Formulas',
        explanationEn: 'Review the high-yield equations: I = nAev_d, P/Q = R/S, and r = R(l₁ - l₂)/l₂.',
        explanationTa: 'முக்கிய சமன்பாடுகளை நினைவில் கொள்ளுங்கள்: I = nAev_d, P/Q = R/S, மற்றும் r = R(l₁ - l₂)/l₂.',
        explanationBilingual: 'Current Electricity is the heart of electrical physics. Solve loop problems with confidence!',
        narrationScript: 'Keep your Kirchhoff sign conventions crystal clear, remember that metals have positive alpha while semiconductors have negative alpha, and you will score full marks in Current Electricity!',
        animationDescription: 'Summary formula board lighting up with gold stars.',
        keywordsDisplayed: ['I = nAev_d', 'V = IR', 'P/Q = R/S', 'ε₁/ε₂ = l₁/l₂', 'r = R(l₁-l₂)/l₂'],
        realLifeExample: 'Perfect board exam revision.',
        interactiveQuestion: {
          question: 'What is the SI unit of electrical conductivity (σ)?',
          questionTa: 'மின் கடத்துத்திறன் (σ)-ன் SI அலகு என்ன?',
          options: ['Ω⁻¹ m⁻¹ (or S m⁻¹)', 'Ω m', 'Volt / metre', 'Ampere / m²'],
          optionsTa: ['Ω⁻¹ m⁻¹ (அல்லது S m⁻¹)', 'Ω m', 'வோல்ட் / மீட்டர்', 'ஆம்பியர் / m²'],
          correctIndex: 0,
          explanation: 'Conductivity is the reciprocal of resistivity (1/ρ), having SI unit Ω⁻¹ m⁻¹ (Siemens per metre).'
        },
        cameraDirection: 'Celebratory hero camera zoom.'
      }
    ]
  },
  voiceNarration: {
    scriptEn: 'Greetings students! In Chapter 2: Current Electricity, we master the flow of electric charges. Electric current is defined by I equals n A e v_d, where drift velocity v_d is surprisingly slow, about a fraction of a millimeter per second. Microscopic Ohm’s law states current density J equals sigma E. For resistors, temperature coefficient alpha is positive for conductors and negative for semiconductors. In solving complex circuits, Kirchhoff’s junction rule conserves electric charge, and his loop rule conserves energy. The Wheatstone bridge balance condition P over Q equals R over S allows precision resistance measurements with zero current through the galvanometer. In laboratory instruments, the Meter Bridge determines unknown resistance, while the Potentiometer measures true EMF and internal resistance because it draws zero current at the null point. Finally, remember thermoelectricity: Seebeck effect converts heat differences into electricity, and Peltier effect creates cooling when current flows through bimetallic junctions. Master these derivations and numerical problems for board exam success!',
    scriptTa: 'வணக்கம் மாணவர்களே! அத்தியாயம் 2: மின்னோட்டவியல் பாடத்திற்கு உங்களை வரவேற்கிறோம். கடத்தியில் பாயும் மின்னோட்டம் I = n A e v_d என்ற சமன்பாட்டால் குறிக்கப்படுகிறது. இங்கு எலக்ட்ரான்களின் இழுப்புத் திசைவேகம் வினாடிக்கு மிகச்சிறிய மில்லிமீட்டர் அளவே இருக்கும். ஓம் விதியின் நுண்நோக்கி வடிவம் J = σ E ஆகும். கடத்திகளுக்கு மின்தடை வெப்பநிலை எண் நேர்க்குறியாகவும், குறைக்கடத்திகளுக்கு எதிர்க்குறியாகவும் இருக்கும். சிக்கலான சுற்றுகளில் கிர்க்காஃபின் சந்திப்பு விதி மின்னூட்ட மாறாத்தன்மையையும், சுற்று விதி ஆற்றல் மாறாத்தன்மையையும் விளக்குகின்றன. வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலை நிபந்தனை P / Q = R / S ஆகும். மின்னழுத்தமானி மூலம் இரு மின்கலங்களின் EMF ஒப்பீடு (ε₁/ε₂ = l₁/l₂) மற்றும் அகமின்தடை r = R(l₁ - l₂)/l₂ கணக்கிடப்படுகிறது. வெப்பமின் விளைவுகளில் சீபெக் விளைவு வெப்பத்திலிருந்து மின்சாரத்தை உருவாக்குகிறது, பெல்டியர் விளைவு சந்திப்புகளில் வெப்பத்தை உறிஞ்சி குளிர்விக்கிறது. இந்த முக்கிய வினாக்களைத் தீவிரமாகப் பயிற்சி செய்யுங்கள்!',
    scriptBilingual: 'Hello Students! Welcome to Current Electricity. Let us review: Current I = n·A·e·v_d. Free electrons drift slowly (~10⁻⁴ m/s). Ohm’s law in microscopic form is J = σE. Kirchhoff’s 1st rule is Conservation of Charge; 2nd rule is Conservation of Energy. Wheatstone Bridge balance condition is P/Q = R/S when I_G = 0. Potentiometer is superior to voltmeter because it draws NO current at balance (null method): ε₁/ε₂ = l₁/l₂ and r = R(l₁ - l₂)/l₂. Remember Seebeck and Peltier thermoelectric effects. Practice these 5-mark derivations daily for top board scores!',
    audioDurationSeconds: 180,
    recommendedTone: 'Energetic, structured, encouraging, and pedagogically clear.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'What is the value of drift velocity of electrons in a typical metal conductor?',
        qTa: 'உலோகக் கடத்தியில் எலக்ட்ரான்களின் இழுப்புத் திசைவேகத்தின் பொதுவான மதிப்பு என்ன?',
        a: 'Approximately 10⁻⁴ m s⁻¹ (around 0.1 mm/s to 1 mm/s).',
        aTa: 'தோராயமாக 10⁻⁴ m s⁻¹ (சுமார் 0.1 mm/s).'
      },
      {
        q: 'Kirchhoff’s first rule (Junction rule) is based on the conservation of which physical quantity?',
        qTa: 'கிர்க்காஃபின் முதல் விதி (சந்தி விதி) எந்த இயற்பியல் அளவின் மாறாத்தத்துவத்தை அடிப்படையாகக் கொண்டது?',
        a: 'Conservation of Electric Charge.',
        aTa: 'மின்னூட்ட மாறாத்தத்துவம்.'
      },
      {
        q: 'What is the sign of temperature coefficient of resistance (α) for semiconductor materials?',
        qTa: 'குறைக்கடத்திப் பொருட்களுக்கு மின்தடை வெப்பநிலை எண் (α)-ன் குறி என்ன?',
        a: 'Negative (α < 0).',
        aTa: 'எதிர்க்குறி (α < 0).'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'Define drift velocity and relaxation time.',
        qTa: 'இழுப்புத் திசைவேகம் மற்றும் தளர்வு நேரம் வரையறுக்கவும்.',
        a: 'Drift velocity is the average velocity acquired by free electrons in a conductor under an applied electric field (v_d = -eEτ/m). Relaxation time (τ) is the average time interval between two successive collisions of an electron with lattice ions.',
        aTa: 'மின்புலம் செலுத்தப்படும் போது கடத்தியிலுள்ள கட்டுறா எலக்ட்ரான்கள் பெறும் சராசரி திசைவேகம் இழுப்புத் திசைவேகம் எனப்படும். இரு அடுத்தடுத்த மோதல்களுக்கு இடைப்பட்ட சராசரி காலம் தளர்வு நேரம் (τ) எனப்படும்.'
      },
      {
        q: 'State microscopic form of Ohm’s Law and name the symbols.',
        qTa: 'ஓம் விதியின் நுண்நோக்கி வடிவத்தைக் கூறி குறியீடுகளை விளக்குக.',
        a: 'J = σ E, where J is current density (A m⁻²), σ is electrical conductivity (Ω⁻¹ m⁻¹), and E is applied electric field (V m⁻¹).',
        aTa: 'J = σ E. இதில் J என்பது மின்னோட்ட அடர்த்தி, σ என்பது மின் கடத்துத்திறன், E என்பது மின்புலம்.'
      },
      {
        q: 'Distinguish between Seebeck effect and Peltier effect.',
        qTa: 'சீபெக் விளைவு மற்றும் பெல்டியர் விளைவை வேறுபடுத்துக.',
        a: 'Seebeck effect produces thermoelectric EMF when junctions of two dissimilar metals are maintained at different temperatures. Peltier effect evolves or absorbs heat at the junction when an external electric current is passed through it.',
        aTa: 'சீபெக் விளைவு இரு சந்திப்புகளுக்கு இடையே வெப்பநிலை வேறுபாடு இருக்கும் போது EMF-ஐ உருவாக்குகிறது. பெல்டியர் விளைவு மின்னோட்டம் பாயும் போது சந்திகளில் வெப்பத்தை உமிழ்கிறது அல்லது உறிஞ்சுகிறது.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Derive the relationship between electric current and drift velocity (I = n A e v_d).',
        qTa: 'மின்னோட்டம் மற்றும் இழுப்புத் திசைவேகத்திற்கு இடையேயான தொடர்பை வருவிக்கவும் (I = n A e v_d).',
        a: 'Let a conductor have area A and length dx = v_d dt. Volume of slice = A v_d dt. Total free electrons in volume = n A v_d dt. Total charge crossing section dq = n A e v_d dt. Electric current I = dq / dt = n A e v_d.',
        aTa: 'குறுக்குவெட்டு பரப்பு A மற்றும் நீளம் dx = v_d dt கொண்ட கடத்தியில் பருமன் = A v_d dt. எலக்ட்ரான்களின் எண்ணிக்கை = n A v_d dt. பாயும் மின்னூட்டம் dq = n A e v_d dt. மின்னோட்டம் I = dq/dt = n A e v_d.'
      },
      {
        q: 'Explain how the EMF of two cells is compared using a potentiometer.',
        qTa: 'மின்னழுத்தமானியைப் பயன்படுத்தி இரு மின்கலங்களின் மின்னியக்கு விசைகள் எவ்வாறு ஒப்பிடப்படுகின்றன?',
        a: 'Primary circuit maintains constant current. With cell 1 (ε₁) connected, balancing length l₁ is found: ε₁ = I r₀ l₁. With cell 2 (ε₂) connected, balancing length l₂ is found: ε₂ = I r₀ l₂. Dividing gives ε₁ / ε₂ = l₁ / l₂.',
        aTa: 'முதன்மை சுற்றில் மாறா மின்னோட்டம் பாய்கிறது. முதல் மின்கலத்திற்கு சமன்செய் நீளம் l₁ எனில் ε₁ = I r₀ l₁. இரண்டாம் மின்கலத்திற்கு சமன்செய் நீளம் l₂ எனில் ε₂ = I r₀ l₂. வகுக்க: ε₁ / ε₂ = l₁ / l₂.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Obtain the condition for bridge balance in Wheatstone’s bridge using Kirchhoff’s rules.',
        qTa: 'கிர்க்காஃபின் விதிகளைப் பயன்படுத்தி வீட்ஸ்டோன் சமனச்சுற்றின் சமநிலை நிபந்தனையை விரிவாக வருவிக்கவும்.',
        a: 'Draw circuit ABCD with resistors P, Q, R, S and Galvanometer G. Apply junction rule at B (I₃ = I₁ - I_G) and D (I₄ = I₂ + I_G). Apply loop rule to ABDA (I₁P + I_G G - I₂R = 0) and BCDB (I₃Q - I₄S - I_G G = 0). Set I_G = 0 for balance: I₁P = I₂R and I₁Q = I₂S. Divide equations to obtain P/Q = R/S.',
        aTa: 'P, Q, R, S மின்தடைகள் மற்றும் கால்வனோமீட்டர் G கொண்ட சமனச்சுற்று வரைதல். சந்தி B மற்றும் D-ல் விதி 1-ஐப் பயன்படுத்துதல். மூடிய சுற்று ABDA மற்றும் BCDB-ல் விதி 2-ஐப் பயன்படுத்துதல். சமநிலை நிபந்தனை I_G = 0 எனப் பிரதியிட I₁P = I₂R மற்றும் I₁Q = I₂S கிடைக்கும். வகுக்க P/Q = R/S என வருவித்தல்.'
      },
      {
        q: 'Explain the determination of internal resistance of a cell using a potentiometer with a neat circuit diagram and derivation.',
        qTa: 'மின்னழுத்தமானியைப் பயன்படுத்தி மின்கலத்தின் அகமின்தடை காணும் சோதனையை சுற்றுப்படத்துடன் விளக்கி சமன்பாட்டை வருவிக்கவும்.',
        a: 'Draw complete potentiometer circuit with primary circuit and secondary circuit. For open circuit: ε = I r₀ l₁. For closed circuit with shunt R: V = I r₀ l₂. Ratio ε/V = l₁/l₂. Since V = εR/(R+r), ε/V = (R+r)/R = 1 + r/R. Equating gives 1 + r/R = l₁/l₂, yielding final formula r = R[(l₁ - l₂)/l₂].',
        aTa: 'முழுமையான மின்சுற்றுப் படம் வரைதல். திறந்த சுற்றில் ε = I r₀ l₁. மின்தடை R இணைக்கப்பட்ட மூடிய சுற்றில் V = I r₀ l₂. தகவு ε/V = l₁/l₂. V = εR/(R+r) என்பதால் ε/V = (R+r)/R = 1 + r/R. சமன்செய்ய 1 + r/R = l₁/l₂ கிடைக்க, இறுதியில் r = R[(l₁ - l₂)/l₂] என வருவித்தல்.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Wheatstone Bridge derivation (5 Marks)',
      'Potentiometer internal resistance and EMF comparison (5 Marks)',
      'Relation between I and v_d (3 Marks)',
      'Meter bridge numerical problems (3 Marks)',
      'Thermoelectric effects: Seebeck, Peltier, Thomson (2/3 Marks)'
    ]
  },
  faqs: [
    {
      category: 'Conceptual',
      question: 'Why do electric appliances not get damaged when connected in parallel across the domestic mains supply?',
      questionTa: 'வீட்டு மின் இணைப்பில் சாதனங்கள் பக்க இணைப்பில் இணைக்கப்படும் போது பாதிப்படையாமல் இருப்பது ஏன்?',
      answer: 'In parallel connection, the full supply voltage (230 V) is applied across every individual appliance independently, and each device draws current according to its own power rating without affecting other appliances.',
      answerTa: 'பக்க இணைப்பில் ஒவ்வொரு சாதனத்திற்கும் முழு மின்னழுத்தம் (230 V) கிடைக்கிறது. மேலும் ஒரு சாதனம் பழுதானாலும் மற்ற சாதனங்கள் தடையின்றி இயங்கும்.'
    },
    {
      category: 'Formula',
      question: 'What is the difference between EMF (ε) and Terminal Potential Difference (V) of a battery?',
      questionTa: 'மின்கலத்தின் மின்னியக்கு விசை (ε) மற்றும் முனைய மின்னழுத்த வேறுபாடு (V) இடையே உள்ள வேறுபாடு என்ன?',
      answer: 'EMF (ε) is the potential difference when no current is drawn (open circuit). Terminal voltage V = ε - Ir during discharging, which is always less than EMF due to internal resistance drop Ir.',
      answerTa: 'திறந்த சுற்றில் மின்கலத்தின் முனைகளுக்கு இடையே உள்ள மின்னழுத்த வேறுபாடு EMF (ε) ஆகும். மின்னோட்டம் பாயும் போது முனைய மின்னழுத்தம் V = ε - Ir எனக் குறையும்.'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Writing potentiometer internal resistance as r = R[(l₂ - l₁)/l₁].',
      correctWay: 'The correct formula is r = R[(l₁ - l₂)/l₂] where l₁ is open-circuit length and l₂ is closed-circuit length.'
    },
    {
      category: 'Sign',
      mistake: 'Assigning a positive sign to the temperature coefficient of resistance for semiconductors.',
      correctWay: 'Metals have positive α (+), while semiconductors and carbon have negative α (-).'
    }
  ],
  memoryTricks: [
    {
      title: 'Thermoelectric Series Direction',
      titleTa: 'வெப்பமின் வரிசை திசை நினைவுக்குறிப்பு',
      trick: 'Alphabetical Trick: A to B (Antimony "Sb" to Bismuth "Bi") at Cold junction: "ABC" = Antimony to Bismuth at Cold junction.',
      explanation: 'Current flows from Antimony (Sb) to Bismuth (Bi) at the COLD junction in an Sb-Bi thermocouple.'
    },
    {
      title: 'Potentiometer Lengths Ordering',
      titleTa: 'சமன்செய் நீளங்கள் வரிசை',
      trick: 'Open circuit = Long wire (l₁ > l₂). Always subtract smaller length l₂ from larger length l₁ in numerator!',
      explanation: 'Numerator is always (l₁ - l₂) > 0.'
    }
  ],
  summary: {
    keyTakeaways: [
      'Current is related to drift velocity by I = n A e v_d, with microscopic Ohm’s law J = σE.',
      'Metals have positive α (R increases with T), while semiconductors have negative α.',
      'Kirchhoff’s 1st Rule is Conservation of Charge; 2nd Rule is Conservation of Energy.',
      'Wheatstone bridge condition P/Q = R/S is derived using null deflection (I_G = 0).',
      'Potentiometer measures true EMF without drawing current (ε₁/ε₂ = l₁/l₂ and r = R(l₁ - l₂)/l₂).'
    ],
    quickRevisionNotes: [
      'Drift velocity: v_d = -eEτ/m; Mobility: μ = eτ/m',
      'Resistance: R = ρ(l/A); Conductivity: σ = 1/ρ = n e² τ / m',
      'Temperature dependence: R_T = R₀[1 + α(T - T₀)]',
      'Junction Rule: Σ I = 0; Loop Rule: Σ IR = Σ ε',
      'Wheatstone balance: P/Q = R/S',
      'Meter bridge: X = R [l₁ / (100 - l₁)]',
      'Potentiometer: ε₁/ε₂ = l₁/l₂, r = R [(l₁ - l₂)/l₂]',
      'Seebeck effect: ΔT → EMF; Peltier effect: Current → ΔT'
    ]
  }
};
