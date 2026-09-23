import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_9_SEMICONDUCTOR_ELECTRONICS: PhysicsChapter = {
  chapterNumber: 9,
  chapterName: 'Semiconductor Electronics',
  chapterNameTa: 'குறைக்கடத்தி எலக்ட்ரானியல்',
  unitNumber: 9,
  unitName: 'Semiconductor Electronics',
  unitNameTa: 'குறைக்கடத்தி எலக்ட்ரானியல்',
  importance: 'High-Yield (12-14 Marks in Board Exam)',
  overview: 'Comprehensive foundation of solid-state electronics covering energy bands, intrinsic/extrinsic semiconductors, p-n junction diodes, half/full-wave rectifiers, Zener diode voltage regulation, optoelectronic devices (LED, photodiode, solar cell), BJT transistor characteristics and amplifiers, digital logic gates, and De Morgan’s Boolean theorems.',
  overviewTa: 'திண்ம நிலை எலக்ட்ரானியலின் அடிப்படை பாடங்களான ஆற்றல் பட்டைகள், குறைகடத்திகள் (n-வகை, p-வகை), p-n சந்தி டையோடு, திருத்திகள், ஜீனர் மின்னழுத்த ஒழுங்கமைப்பான், ஒளியியல் எலக்ட்ரானியல் கருவிகள் (LED, ஒளி உணரி டையோடு, சூரிய மின்கலம்), டிரான்சிஸ்டர் பண்புகள் மற்றும் பெருக்கி, தர்க்க வாயில்கள் மற்றும் டி மார்கனின் தேற்றங்கள் ஆகியவற்றின் முழுமையான விளக்கம்.',
  learningObjectives: [
    'Distinguish conductors, semiconductors, and insulators using energy band diagrams.',
    'Understand doping and charge carrier conduction in n-type and p-type extrinsic semiconductors.',
    'Analyze the working and V-I characteristics of p-n junction diodes under forward and reverse bias.',
    'Explain half-wave and full-wave center-tapped rectifiers and calculate rectification efficiency.',
    'Describe the mechanism of Zener breakdown and explain Zener diode voltage regulation.',
    'Understand the operation of optoelectronic devices: LED, Photodiode, and Solar Cell.',
    'Analyze BJT common emitter (CE) input/output characteristics, current gain (α, β), and CE amplifier operation.',
    'Master digital logic gates (AND, OR, NOT, NAND, NOR, XOR), truth tables, and De Morgan’s laws.'
  ],
  prerequisites: [
    'Atomic structure, valence electrons, and covalent bonding in Silicon/Germanium',
    'Ohm’s law and basic DC circuit theory',
    'Binary arithmetic (0 and 1) basics'
  ],
  everydayApplications: [
    'Microprocessors, smartphone CPUs, and GPUs containing billions of silicon transistors',
    'Energy-efficient LED home lighting and high-definition OLED television displays',
    'Rooftop photovoltaic solar panels generating zero-carbon electricity',
    'AC-to-DC mobile phone adapters using bridge rectifiers and Zener voltage regulators',
    'Digital logic circuits powering computers, digital watches, and smart home appliances'
  ],
  historicalBackground: 'The semiconductor revolution started with the invention of the point-contact transistor by John Bardeen, Walter Brattain, and William Shockley at Bell Labs in 1947 (Nobel Prize 1956). Jack Kilby and Robert Noyce invented the Integrated Circuit (IC) in 1958, leading directly to the microchip revolution powering our modern digital civilization.',
  scientistsAssociated: [
    'William Shockley, John Bardeen & Walter Brattain (Invention of the Transistor - Nobel Prize 1956)',
    'Clarence Zener (Discovery of Zener reverse breakdown in diodes)',
    'Jack Kilby & Robert Noyce (Invention of the Integrated Circuit - Nobel Prize 2000)',
    'Augustus De Morgan (De Morgan’s Boolean logic theorems)'
  ],
  topics: [
    {
      id: 'semi-9.1',
      topicNumber: '9.1',
      title: 'Energy Bands in Solids: Conductors, Semiconductors, and Insulators',
      titleTa: 'திண்மங்களில் ஆற்றல் பட்டைகள்: கடத்திகள், குறைக்கடத்திகள் மற்றும் மின்காப்பான்கள்',
      beginnerExplanation: 'In isolated atoms, electron energy levels are sharp and discrete. In a solid crystal with trillions of closely packed atoms, outer electron orbital wave functions overlap and split into continuous Energy Bands: the lower Valence Band (VB) and the upper Conduction Band (CB), separated by a Forbidden Energy Gap ($E_g$).',
      beginnerExplanationTa: 'தனித்த அணுக்களில் ஆற்றல் மட்டங்கள் தனித்தனியாக இருக்கும். ஆனால் திண்ம படிகங்களில் அருகருகே உள்ள அணுக்களின் சுற்றுப்பாதைகள் ஒன்றிணைந்து ஆற்றல் பட்டைகளை உருவாக்குகின்றன: இணைதிறன் பட்டை (VB) மற்றும் கடத்து பட்டை (CB). அவற்றிடையே விலக்கப்பட்ட ஆற்றல் இடைவெளி ($E_g$) உள்ளது.',
      coreConcepts: [
        'Valence Band (VB): Lowest completely or partially filled band containing valence electrons; electrons here cannot conduct electricity.',
        'Conduction Band (CB): Higher empty or partially filled band containing free electrons that participate in electrical conduction.',
        'Forbidden Energy Gap ($E_g$): Energy gap between top of VB and bottom of CB ($E_g = E_C - E_V$).',
        'Classification: 1) Conductors/Metals: VB and CB overlap ($E_g = 0$), huge free electron density; 2) Semiconductors: Small energy gap ($E_g < 3\\text{ eV}$; Silicon $E_g = 1.1\\text{ eV}$, Germanium $E_g = 0.7\\text{ eV}$, GaAs $E_g = 1.43\\text{ eV}$); 3) Insulators: Very large energy gap ($E_g > 3\\text{ eV}$; Diamond $E_g \\approx 5.4\\text{ eV}$), zero conductivity at room temperature.'
      ],
      definitions: [
        {
          term: 'Forbidden Energy Gap (விலக்கப்பட்ட ஆற்றல் இடைவெளி)',
          termTa: 'விலக்கப்பட்ட ஆற்றல் இடைவெளி',
          definitionEn: 'The energy separation between the top of the valence band and the bottom of the conduction band where no allowed electron energy state can exist: $E_g = E_C - E_V$.',
          definitionTa: 'இணைதிறன் பட்டையின் உச்சிக்கும் கடத்துப் பட்டையின் அடிக்கும் இடையே உள்ள, எலக்ட்ரான்கள் இடம்பெற முடியாத ஆற்றல் இடைவெளி விலக்கப்பட்ட ஆற்றல் இடைவெளி ($E_g$) எனப்படும்.',
          keyPoints: ['SI Unit: electron-volt (eV)', 'Silicon: $1.1\\text{ eV}$; Germanium: $0.7\\text{ eV}$', 'Decreases slightly with increasing temperature']
        }
      ],
      analogies: 'Energy bands are like a multi-story building: the ground floor is the packed Valence Band, the ceiling gap is the forbidden energy gap ($E_g$), and the open roof where you can run freely is the Conduction Band.',
      commonMisconceptions: [
        'Semiconductors conduct like metals at absolute zero (False: at 0 K, semiconductors have a completely filled VB and empty CB, behaving as perfect insulators).'
      ]
    },
    {
      id: 'semi-9.2',
      topicNumber: '9.2',
      title: 'Intrinsic and Extrinsic Semiconductors (n-type and p-type)',
      titleTa: 'இயற்கை மற்றும் செயற்கைக் குறைக்கடத்திகள் (n-வகை மற்றும் p-வகை)',
      beginnerExplanation: 'Pure silicon is an intrinsic semiconductor with equal numbers of free electrons and holes ($n_e = n_h = n_i$). Adding tiny amounts of impurity atoms (doping, ~1 part per million) dramatically boosts electrical conductivity by creating extrinsic semiconductors: n-type (doped with pentavalent atoms like Phosphorus) or p-type (doped with trivalent atoms like Boron).',
      beginnerExplanationTa: 'தூய சிலிக்கான் இயற்கை குறைக்கடத்தி ஆகும் ($n_e = n_h = n_i$). மாசூட்டல் மூலம் அதன் கடத்துத்திறன் பல மடங்கு உயர்த்தப்பட்டு செயற்கைக் குறைக்கடத்திகள் (n-வகை மற்றும் p-வகை) உருவாக்கப்படுகின்றன.',
      coreConcepts: [
        'Doping: Deliberate addition of suitable trivalent or pentavalent impurity atoms to a pure semiconductor to increase its electrical conductivity.',
        'n-type Semiconductor: Doped with Pentavalent donor impurities (Phosphorus, Arsenic, Antimony). Donors contribute free conduction electrons: $n_e \\gg n_h$. Majority carriers: Electrons; Minority carriers: Holes.',
        'p-type Semiconductor: Doped with Trivalent acceptor impurities (Boron, Aluminum, Gallium, Indium). Acceptors create vacant covalent bond positions called Holes: $n_h \\gg n_e$. Majority carriers: Holes; Minority carriers: Electrons.',
        'Mass Action Law: In thermal equilibrium, the product of electron and hole concentrations is constant: $n_e \\cdot n_h = n_i^2$.',
        'Electrical Neutrality: Both n-type and p-type semiconductors are overall ELECTRICALLY NEUTRAL because total positive charge equals total negative charge.'
      ],
      definitions: [
        {
          term: 'Hole (துளை)',
          termTa: 'துளை',
          definitionEn: 'The vacancy or missing electron created in a broken covalent bond that behaves as an effective mobile positive charge carrier with charge $+e$: $q_{hole} = +1.6 \\times 10^{-19}\\text{ C}$.',
          definitionTa: 'முறிந்த சகப்பிணைப்பில் எலக்ட்ரான் இல்லாததால் உருவாகும் வெற்றிடம் துளை எனப்படும். இது நேர்மின்னூட்டம் (+e) கொண்ட துகளாகச் செயல்படுகிறது.',
          keyPoints: ['Has effective positive charge $+e$', 'Hole mobility is less than electron mobility ($\\mu_h < \\mu_e$)']
        }
      ],
      analogies: 'A hole is like an empty parking spot in a crowded lot: when a car moves into the empty spot, the spot itself appears to have moved backward in the opposite direction.',
      commonMisconceptions: [
        'An n-type semiconductor has a net negative charge (False: it is completely electrically neutral because positive donor nuclei balance the extra free electrons).'
      ]
    },
    {
      id: 'semi-9.3',
      topicNumber: '9.3',
      title: 'p-n Junction Diode: Formation, Biasing, and Rectifiers',
      titleTa: 'p-n சந்தி டையோடு: உருவாக்கம், சார்பளித்தல் மற்றும் திருத்திகள்',
      beginnerExplanation: 'When p-type and n-type semiconductor regions are joined in a single crystal, electrons and holes diffuse across the interface and recombine, leaving behind uncompensated immobile donor and acceptor ions. This creates a narrow Depletion Region and an internal Barrier Potential ($V_0 \approx 0.7$ V for Si, $0.3$ V for Ge) that allows current to flow easily in only one direction (Forward Bias).',
      beginnerExplanationTa: 'p-வகை மற்றும் n-வகை பகுதிகள் இணையும்போது, ஊடுருவல் மற்றும் மறுசேர்க்கையால் அயனிகள் மட்டும் கொண்ட ஒரு குறைக்கப்பட்ட அடுக்கு (அயனிகள் மண்டலம்) மற்றும் மின்னழுத்த அரண் ($V_0 \approx 0.7$ V) உருவாகிறது. இது முன்னோக்கு சார்பில் மட்டுமே மின்னோட்டத்தை அனுமதிக்கிறது.',
      coreConcepts: [
        'Forward Bias: p-side connected to positive terminal, n-side to negative terminal. Depletion width decreases, barrier potential lowers ($V_0 - V$), current flows exponentially above knee voltage ($0.7$ V for Si).',
        'Reverse Bias: p-side to negative, n-side to positive. Depletion width widens, barrier increases ($V_0 + V$), tiny microampere reverse saturation current flows due to minority carriers.',
        'Half-Wave Rectifier: Uses 1 diode, conducts only during positive half cycle of AC input. Efficiency $\\eta = 40.6\\%$, ripple frequency $f_{out} = f_{in}$.',
        'Full-Wave Center-Tapped Rectifier: Uses 2 diodes and center-tapped transformer, conducts during both positive and negative AC half cycles in the same direction. Efficiency $\\eta = 81.2\\%$, ripple frequency $f_{out} = 2 f_{in}$.'
      ],
      definitions: [
        {
          term: 'Depletion Region (குறைக்கப்பட்ட அடுக்கு / அயனி மண்டலம்)',
          termTa: 'குறைக்கப்பட்ட அடுக்கு',
          definitionEn: 'The narrow space-charge region on either side of the p-n junction that is completely depleted of mobile charge carriers (electrons and holes) and contains only immobile donor and acceptor ions.',
          definitionTa: 'p-n சந்தியின் இருபுறமும் நகரும் மின்னூட்ட ஊர்திகள் இன்றி, நகரா அயனிகள் மட்டுமே கொண்ட குறுகிய பகுதி குறைக்கப்பட்ட அடுக்கு எனப்படும்.',
          keyPoints: ['Width is approximately $0.1$ to $1$ micrometer ($\mu$m)', 'Narrows under forward bias; widens under reverse bias']
        },
        {
          term: 'Rectification (திருத்துதல்)',
          termTa: 'திருத்துதல்',
          definitionEn: 'The process of converting alternating current (AC) into direct unidirectional current (DC) using a p-n junction diode.',
          definitionTa: 'p-n சந்தி டையோடைப் பயன்படுத்தி மாறுதிசை மின்னோட்டத்தை (AC) நேர்திசை மின்னோட்டமாக (DC) மாற்றும் செயல்முறை திருத்துதல் எனப்படும்.',
          keyPoints: ['Half-wave rectifier efficiency: $40.6\\%$', 'Full-wave rectifier efficiency: $81.2\\%$']
        }
      ],
      analogies: 'A p-n junction diode is like a one-way turnstile gate at a subway station: pushing forward opens it effortlessly, but pushing backward locks it tight.',
      commonMisconceptions: [
        'In reverse bias, zero current flows (False: a very small reverse saturation current on the order of microamperes or nanoamperes flows due to thermally generated minority carriers).'
      ]
    },
    {
      id: 'semi-9.4',
      topicNumber: '9.4',
      title: 'Zener Diode and Optoelectronic Devices (LED, Photodiode, Solar Cell)',
      titleTa: 'ஜீனர் டையோடு மற்றும் ஒளியியல் எலக்ட்ரானியல் கருவிகள் (LED, ஒளி உணரி, சூரிய மின்கலம்)',
      beginnerExplanation: 'A Zener diode is a heavily doped p-n junction designed to operate safely in reverse breakdown, maintaining an exact constant voltage ($V_Z$) across its terminals, making it an ideal Voltage Regulator. Optoelectronic devices convert light to electricity or electricity to light.',
      beginnerExplanationTa: 'ஜீனர் டையோடு என்பது பின்னோக்கு முறிவுப் பகுதியில் பாதுகாப்பாக இயங்கும் வகையில் அதிகளவில் மாசூட்டப்பட்ட டையோடு ஆகும். இது ஒரு சிறந்த மின்னழுத்த ஒழுங்கமைப்பானாகச் செயல்படுகிறது.',
      coreConcepts: [
        'Zener Diode Voltage Regulator: Operates in reverse breakdown; as input voltage $V_i$ or load resistance $R_L$ varies, the Zener current $I_Z$ adjusts automatically to keep load voltage constant at $V_L = V_Z$.',
        'Light Emitting Diode (LED): Forward biased p-n junction made of direct bandgap semiconductors (GaAs, GaP, GaN). Recombining electrons and holes release photons ($E = h\nu \ge E_g$).',
        'Photodiode: Reverse biased p-n junction. Incident photons with $h\nu \ge E_g$ generate electron-hole pairs, increasing reverse current proportional to light intensity.',
        'Solar Cell: Photovoltaic p-n junction with no external bias. Generates open-circuit photovoltage ($V_{oc}$) and short-circuit photocurrent ($I_{sc}$) directly from sunlight.'
      ],
      definitions: [
        {
          term: 'Zener Breakdown (ஜீனர் முறிவு)',
          termTa: 'ஜீனர் முறிவு',
          definitionEn: 'The sharp reverse electrical breakdown occurring in heavily doped p-n junctions with narrow depletion layer (< 10 nm) where high junction electric field (~10⁷ V/m) directly pulls valence electrons out of covalent bonds into conduction band.',
          definitionTa: 'அதிகளவில் மாசூட்டப்பட்ட p-n சந்தியில் வலுவான மின்புலத்தால் சகப்பிணைப்புகள் நேரடியாக உடைக்கப்பட்டு பெருமளவு மின்னோட்டம் பாயும் நிகழ்வு ஜீனர் முறிவு எனப்படும்.',
          keyPoints: ['Occurs at low reverse voltage (< 6 V)', 'Negative temperature coefficient of breakdown voltage']
        }
      ],
      analogies: 'A Zener diode voltage regulator is like an overflow spillway on a dam: whenever water (voltage) rises above the threshold mark ($V_Z$), the excess water immediately diverts through the spillway, keeping the reservoir water level perfectly steady.',
      commonMisconceptions: [
        'Photodiodes are operated in forward bias (False: photodiodes are ALWAYS operated in reverse bias so that fractional change in minority current is easily detectable).'
      ]
    },
    {
      id: 'semi-9.5',
      topicNumber: '9.5',
      title: 'Bipolar Junction Transistor (BJT) and CE Amplifier',
      titleTa: 'இருமுனை சந்தி டிரான்சிஸ்டர் (BJT) மற்றும் CE பெருக்கி',
      beginnerExplanation: 'A BJT is a 3-terminal semiconductor device consisting of three regions: heavily doped Emitter (E), ultra-thin lightly doped Base (B), and moderately doped large Collector (C). In the Common Emitter (CE) configuration, a tiny input base current ($I_B$) controls a large collector current ($I_C = \beta I_B$), allowing the transistor to act as an electronic switch or a high-gain Voltage Amplifier.',
      beginnerExplanationTa: 'டிரான்சிஸ்டர் என்பது உமிழ்ப்பான் (E), அடிவாய் (B) மற்றும் ஏற்பான் (C) ஆகிய மூன்று பகுதிகளைக் கொண்ட கருவியாகும். பொது உமிழ்ப்பான் (CE) சுற்றில் சிறிய அடிவாய் மின்னோட்டம் ($I_B$) பெரிய ஏற்பான் மின்னோட்டத்தைக் ($I_C = \beta I_B$) கட்டுப்படுத்தி பெருக்கியாகச் செயல்படுகிறது.',
      coreConcepts: [
        'Transistor Biasing: Emitter-Base junction must be Forward Biased; Collector-Base junction must be Reverse Biased.',
        'Current Equation: $I_E = I_B + I_C$ where $I_B \\approx 1-5\\%$ of $I_E$ and $I_C \\approx 95-99\\%$ of $I_E$.',
        'Current Amplification Factors: Common Base $\\alpha = \\frac{I_C}{I_E} < 1$ (typically $0.98$); Common Emitter $\\beta = \\frac{I_C}{I_B} = \\frac{\\alpha}{1 - \\alpha}$ (typically $50 - 300$).',
        'CE Input Characteristics: Curve of $I_B$ vs $V_{BE}$ at constant $V_{CE}$ (resembles forward diode curve). Dynamic Input Resistance $R_{in} = \\left(\\frac{\\Delta V_{BE}}{\\Delta I_B}\\right)_{V_{CE}}$.',
        'CE Output Characteristics: Curves of $I_C$ vs $V_{CE}$ at constant $I_B$, showing Cut-off Region, Active Region (amplification), and Saturation Region (switch ON).',
        'CE Voltage Amplifier: Produces a magnified output voltage $v_{out} = -A_v v_{in}$ with a $180^\\circ$ Phase Reversal between input and output AC signals.',
        'Barkhausen Criterion for Oscillators: Sustained oscillations require loop gain $A \\cdot \\beta = 1$ and total loop phase shift of $0^\\circ$ or $360^\\circ$.'
      ],
      definitions: [
        {
          term: 'Current Gain β (மின்னோட்டப் பெருக்கு எண் β)',
          termTa: 'மின்னோட்டப் பெருக்கு எண் β',
          definitionEn: 'The ratio of small change in collector current (ΔIC) to the corresponding small change in base current (ΔIB) at constant collector-emitter voltage: $\\beta = \\left(\\frac{\\Delta I_C}{\\Delta I_B}\\right)_{V_{CE}}$.',
          definitionTa: 'பொது உமிழ்ப்பான் அமைப்பில் மாறா $V_{CE}$-ல் ஏற்பான் மின்னோட்ட மாறுபாட்டிற்கும் ($\Delta I_C$) அடிவாய் மின்னோட்ட மாறுபாட்டிற்கும் ($\Delta I_B$) உள்ள தகவு $\beta$ எனப்படும்.',
          keyPoints: ['Dimensionless number, typically ranges from $20$ to $500$', '$\\beta = \\frac{\\alpha}{1 - \\alpha}$']
        }
      ],
      analogies: 'A BJT transistor is like a water valve: gently twisting the small valve handle (base current $I_B$) controls a massive torrent of water flowing through the main pipe (collector current $I_C$).',
      commonMisconceptions: [
        'Emitter, base, and collector regions can be interchanged (False: Emitter is heavily doped, Base is ultra-thin and lightly doped, and Collector is physically largest to dissipate heat).'
      ]
    },
    {
      id: 'semi-9.6',
      topicNumber: '9.6',
      title: 'Digital Electronics, Logic Gates, and De Morgan’s Laws',
      titleTa: 'டிஜிட்டல் எலக்ட்ரானியல், தர்க்க வாயில்கள் மற்றும் டி மார்கனின் தேற்றங்கள்',
      beginnerExplanation: 'Digital circuits process information in binary voltage levels: HIGH ($1$, $+5$ V) and LOW ($0$, $0$ V). Fundamental Logic Gates (AND, OR, NOT) and Universal Gates (NAND, NOR) perform Boolean logical decisions that form the building blocks of microprocessors.',
      beginnerExplanationTa: 'டிஜிட்டல் சுற்றுகள் இரும சமிக்ஞைகளைக் (0 மற்றும் 1) கொண்டு செயல்படுகின்றன. அடிப்படை தர்க்க வாயில்கள் (AND, OR, NOT) மற்றும் பொது வாயில்கள் (NAND, NOR) கணினிகளின் அடிப்படை கட்டமைப்பை உருவாக்குகின்றன.',
      coreConcepts: [
        'Basic Gates: 1) OR Gate ($Y = A + B$, output 1 if ANY input is 1); 2) AND Gate ($Y = A \\cdot B$, output 1 ONLY if ALL inputs are 1); 3) NOT Gate Inverter ($Y = \\bar{A}$, inverts 0 to 1 and 1 to 0).',
        'Universal Gates: NAND ($Y = \\overline{A \\cdot B}$) and NOR ($Y = \\overline{A + B}$). Any complex digital logic function can be constructed using ONLY NAND gates or ONLY NOR gates.',
        'XOR Gate (Exclusive OR): $Y = A \\oplus B = A\\bar{B} + \\bar{A}B$ (output 1 when inputs are different; 0 when inputs are same).',
        'De Morgan’s First Theorem: The complement of a logical sum equals the product of the individual complements: $\\overline{A + B} = \\bar{A} \\cdot \\bar{B}$. (NOR gate equals Bubbled AND gate).',
        'De Morgan’s Second Theorem: The complement of a logical product equals the sum of the individual complements: $\\overline{A \\cdot B} = \\bar{A} + \\bar{B}$. (NAND gate equals Bubbled OR gate).'
      ],
      definitions: [
        {
          term: 'Universal Logic Gate (பொது தர்க்க வாயில்)',
          termTa: 'பொது தர்க்க வாயில்',
          definitionEn: 'A logic gate that can implement any Boolean logic function without requiring any other type of gate (NAND and NOR gates).',
          definitionTa: 'மற்ற எந்தவொரு வாயிலின் துணையுமின்றி அனைத்து பூலியன் தர்க்கச் செயல்பாடுகளையும் உருவாக்கக்கூடிய தர்க்க வாயில் பொது வாயில் (NAND மற்றும் NOR) எனப்படும்.',
          keyPoints: ['NAND and NOR are the two universal gates', 'Reduces chip fabrication cost in VLSI microchips']
        }
      ],
      analogies: 'De Morgan’s theorem is like everyday grammar: "I am NOT (hungry OR thirsty)" means the exact same thing as "I am (NOT hungry) AND (NOT thirsty)".',
      commonMisconceptions: [
        'A + B in Boolean algebra means arithmetic addition (False: 1 + 1 = 1 in Boolean OR logic, meaning TRUE OR TRUE is TRUE).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-SEMI-01',
      formula: 'n_e \\cdot n_h = n_i^2',
      meaning: 'Mass Action Law for semiconductors in thermal equilibrium.',
      meaningTa: 'குறைக்கடத்திகளுக்கான நிறை செயல்பாட்டு விதி.',
      variables: [
        { symbol: 'n_e', name: 'Free electron concentration', nameTa: 'எலக்ட்ரான் அடர்த்தி', siUnit: 'm⁻³', dimension: '[M^0 L^{-3} T^0]' },
        { symbol: 'n_h', name: 'Hole concentration', nameTa: 'துளை அடர்த்தி', siUnit: 'm⁻³', dimension: '[M^0 L^{-3} T^0]' },
        { symbol: 'n_i', name: 'Intrinsic carrier concentration', nameTa: 'இயற்கை ஊர்தி அடர்த்தி', siUnit: 'm⁻³', dimension: '[M^0 L^{-3} T^0]' }
      ],
      siUnit: 'm⁻⁶',
      dimension: '[M^0 L^{-6} T^0]',
      category: 'Fundamental',
      memoryShortcut: 'Electron density times Hole density = Intrinsic density squared!'
    },
    {
      id: 'F-SEMI-02',
      formula: 'I_E = I_B + I_C \\quad \\text{and} \\quad \\beta = \\frac{I_C}{I_B} = \\frac{\\alpha}{1 - \\alpha}',
      meaning: 'BJT transistor current relationship and current amplification factors α and β.',
      meaningTa: 'டிரான்சிஸ்டர் மின்னோட்ட சமன்பாடுகள் மற்றும் பெருக்கு எண்கள்.',
      variables: [
        { symbol: 'I_E, I_B, I_C', name: 'Emitter, Base, and Collector currents', nameTa: 'உமிழ்ப்பான், அடிவாய், ஏற்பான் மின்னோட்டங்கள்', siUnit: 'A (or mA/μA)', dimension: '[M^0 L^0 T^0 I^1]' },
        { symbol: '\\alpha', name: 'Common Base current gain ($I_C/I_E < 1$)', nameTa: 'CB மின்னோட்டப் பெருக்கு எண்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' },
        { symbol: '\\beta', name: 'Common Emitter current gain ($I_C/I_B$)', nameTa: 'CE மின்னோட்டப் பெருக்கு எண்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'A and Unitless',
      dimension: '[M^0 L^0 T^0 I^1]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'IE = IB + IC; Beta = Alpha / (1 - Alpha)'
    },
    {
      id: 'F-SEMI-03',
      formula: 'A_v = -\\beta \\left(\\frac{R_L}{R_{in}}\\right) \\quad \\text{and} \\quad A_p = \\beta^2 \\left(\\frac{R_L}{R_{in}}\\right)',
      meaning: 'Voltage Gain and Power Gain of Common Emitter (CE) Transistor Amplifier.',
      meaningTa: 'CE டிரான்சிஸ்டர் பெருக்கியின் மின்னழுத்த மற்றும் திறன் பெருக்கம்.',
      variables: [
        { symbol: 'A_v', name: 'Voltage gain', nameTa: 'மின்னழுத்தப் பெருக்கு எண்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'R_L', name: 'Collector load resistance', nameTa: 'பளு மின்தடை', siUnit: 'Ω', dimension: '[M^1 L^2 T^{-3} I^{-2}]' },
        { symbol: 'R_{in}', name: 'Input dynamic resistance', nameTa: 'உள்ளீட்டு மின்தடை', siUnit: 'Ω', dimension: '[M^1 L^2 T^{-3} I^{-2}]' }
      ],
      siUnit: 'Unitless',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Voltage Gain Av = Beta · (RL / Rin); Negative sign means 180° phase flip!'
    },
    {
      id: 'F-SEMI-04',
      formula: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B} \\quad \\text{and} \\quad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
      meaning: 'De Morgan’s First and Second Theorems of Boolean Algebra.',
      meaningTa: 'டி மார்கனின் முதல் மற்றும் இரண்டாம் தேற்றங்கள்.',
      variables: [
        { symbol: 'A, B', name: 'Binary Boolean input variables (0 or 1)', nameTa: 'பூலியன் மாறிகள்', siUnit: 'Binary State (0/1)', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'Binary logic state',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Break the Line, Change the Sign! (OR becomes AND; AND becomes OR)'
    }
  ],
  derivations: [
    {
      id: 'DER-SEMI-01',
      title: 'Working and Rectification Efficiency of Full-Wave Center-Tapped Rectifier',
      titleTa: 'முழு அலை திருத்தியின் செயல்பாடு மற்றும் திருத்து திறன் சமன்பாட்டைத் தருவித்தல்',
      aim: 'To explain the working of a center-tapped full-wave rectifier and derive its maximum theoretical rectification efficiency η = 81.2%.',
      given: [
        'Center-tapped step-down transformer supplying AC voltage vi = Vm sin ωt across secondary terminals S1 and S2.',
        'Two identical p-n junction diodes D1 and D2 connected to load resistance RL.',
        'Diode forward resistance is rf.'
      ],
      toProve: '\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{0.812 \\cdot R_L}{r_f + R_L} \\approx 81.2\\%',
      steps: [
        {
          stepNumber: 1,
          description: 'During positive half cycle of AC input, S1 is positive and S2 is negative relative to center tap. Diode D1 is forward biased (ON) and D2 is reverse biased (OFF). Current flows through RL from top to bottom.',
          descriptionTa: 'நேர் அரைச் சுற்றில் D1 முன்னோக்கு சார்பிலும் D2 பின்னோக்கு சார்பிலும் செயல்பட்டு மின்னோட்டம் பாய்கிறது.',
          equation: 'i_1 = I_m \\sin \\omega t \\quad (0 \\le \\omega t \\le \\pi), \\quad i_2 = 0',
          note: 'Peak current Im = Vm / (rf + RL).'
        },
        {
          stepNumber: 2,
          description: 'During negative half cycle, S1 becomes negative and S2 becomes positive. Diode D1 is OFF and D2 is forward biased (ON). Current again flows through RL in the SAME top-to-bottom direction.',
          descriptionTa: 'எதிர் அரைச் சுற்றில் D2 முன்னோக்கு சார்பிலும் D1 பின்னோக்கு சார்பிலும் செயல்பட்டு அதே திசையில் மின்னோட்டம் பாய்கிறது.',
          equation: 'i_2 = I_m \\sin \\omega t \\quad (\\pi \\le \\omega t \\le 2\\pi), \\quad i_1 = 0',
          note: 'Unidirectional pulsating DC current is obtained across RL for both half cycles.'
        },
        {
          stepNumber: 3,
          description: 'Calculate average DC current Idc = (2 / π) Im and DC output power Pdc.',
          descriptionTa: 'நேர்திசை மின்னோட்டம் Idc = 2Im/π மற்றும் DC திறன் Pdc-ஐக் கணக்கிடுக.',
          equation: 'I_{dc} = \\frac{2 I_m}{\\pi} \\implies P_{dc} = I_{dc}^2 R_L = \\left(\\frac{2 I_m}{\\pi}\\right)^2 R_L = \\frac{4}{\\pi^2} I_m^2 R_L \\quad \\text{--- (1)}',
          note: 'DC power delivered to the load resistor.'
        },
        {
          stepNumber: 4,
          description: 'Calculate RMS AC input current Irms = Im / √2 and total AC input power Pac.',
          descriptionTa: 'RMS மின்னோட்டம் Irms = Im/√2 மற்றும் உள்ளீட்டு திறன் Pac-ஐக் கணக்கிடுக.',
          equation: 'I_{rms} = \\frac{I_m}{\\sqrt{2}} \\implies P_{ac} = I_{rms}^2 (r_f + R_L) = \\frac{I_m^2}{2}(r_f + R_L) \\quad \\text{--- (2)}',
          note: 'Total AC power supplied to diode and load.'
        },
        {
          stepNumber: 5,
          description: 'Calculate rectification efficiency η = Pdc / Pac.',
          descriptionTa: 'திருத்து திறன் η = Pdc / Pac என வகுத்து சதவீதத்தைப் பெறுக.',
          equation: '\\eta = \\frac{P_{dc}}{P_{ac}} = \\frac{\\frac{4}{\\pi^2} I_m^2 R_L}{\\frac{I_m^2}{2}(r_f + R_L)} = \\frac{8}{\\pi^2} \\left(\\frac{R_L}{r_f + R_L}\\right) = \\frac{0.812 \\cdot R_L}{r_f + R_L}',
          note: 'When diode resistance rf << RL, maximum efficiency η_max = 8/π² = 81.2% (exactly double of half-wave rectifier).'
        }
      ],
      finalEquation: '\\eta_{max} = \\frac{8}{\\pi^2} = 81.2\\%',
      assumptions: [
        'Diodes have ideal linear forward resistance rf and infinite reverse resistance.',
        'Transformer has negligible internal losses.'
      ],
      physicalMeaning: 'Proves that a full-wave rectifier converts both halves of the AC cycle into DC with twice the efficiency (81.2%) of a half-wave rectifier (40.6%).',
      physicalMeaningTa: 'முழு அலை திருத்தி மாறுதிசை மின்னோட்டத்தின் இரு அரை சுழற்சிகளையும் 81.2% அதிகபட்ச திறனுடன் நேர்திசை மின்னோட்டமாக மாற்றுகிறது என்பதை நிரூபிக்கிறது.',
      commonMistakes: [
        'Using Idc = Im/π (which is for half-wave) instead of 2Im/π for full-wave.',
        'Writing 81.2% for half-wave rectifier.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-SEMI-02',
      title: 'Transistor Common Emitter (CE) Amplifier: Circuit Working and Voltage Gain',
      titleTa: 'CE டிரான்சிஸ்டர் பெருக்கியின் செயல்பாடு மற்றும் மின்னழுத்தப் பெருக்கு சமன்பாட்டைத் தருவித்தல்',
      aim: 'To explain the working of an NPN transistor CE amplifier and derive the expression for voltage gain Av = -β(RL / Rin) and account for the 180° phase reversal.',
      given: [
        'An NPN transistor in Common Emitter (CE) mode biased in the active region.',
        'Input AC signal vi applied across base-emitter with input dynamic resistance Rin.',
        'Collector load resistance RL connected between collector and VCC supply.'
      ],
      toProve: 'A_v = \\frac{v_o}{v_i} = -\\beta \\left(\\frac{R_L}{R_{in}}\\right) \\quad (180^\\circ \\text{ Phase Reversal})',
      steps: [
        {
          stepNumber: 1,
          description: 'Apply Kirchhoff’s Voltage Law (KVL) to the output collector circuit: VCC - IC RL - VCE = 0 => VCE = VCC - IC RL.',
          descriptionTa: 'வெளியீட்டு சுற்றில் KVL விதியைப் பயன்படுத்தி VCE = VCC - IC RL சமன்பாட்டைப் பெறுக.',
          equation: 'V_{CE} = V_{CC} - I_C R_L \\quad \\text{--- (1)}',
          note: 'Collector-emitter voltage decreases as collector current increases.'
        },
        {
          stepNumber: 2,
          description: 'When an AC input voltage vi is applied, it creates a base current change ΔIB = vi / Rin.',
          descriptionTa: 'உள்ளீட்டு மின்னழுத்தம் vi அடிவாய் மின்னோட்ட மாறுபாட்டை ΔIB = vi / Rin என உருவாக்குகிறது.',
          equation: '\\Delta I_B = \\frac{v_i}{R_{in}} \\implies \\Delta I_C = \\beta \\cdot \\Delta I_B = \\beta \\frac{v_i}{R_{in}} \\quad \\text{--- (2)}',
          note: 'Collector current is amplified by β.'
        },
        {
          stepNumber: 3,
          description: 'Differentiate equation (1) to find the small-signal AC output voltage vo = ΔVCE = -ΔIC · RL.',
          descriptionTa: 'சமன்பாடு (1)-லிருந்து வெளியீட்டு மின்னழுத்தம் vo = -ΔIC · RL எனக் காண்க.',
          equation: 'v_o = \\Delta V_{CE} = -\\Delta I_C \\cdot R_L = -\\left(\\beta \\frac{v_i}{R_{in}}\\right) R_L \\quad \\text{--- (3)}',
          note: 'The negative sign proves that when input increases positively, output decreases negatively (180° phase flip).'
        },
        {
          stepNumber: 4,
          description: 'Calculate voltage gain Av = vo / vi.',
          descriptionTa: 'மின்னழுத்தப் பெருக்கு எண் Av = vo / vi சமன்பாட்டைப் பெறுக.',
          equation: 'A_v = \\frac{v_o}{v_i} = -\\beta \\left(\\frac{R_L}{R_{in}}\\right)',
          note: 'Magnitude of Voltage Gain |Av| = β · (RL / Rin).'
        }
      ],
      finalEquation: 'A_v = -\\beta \\left(\\frac{R_L}{R_{in}}\\right) \\quad \\text{and} \\quad A_p = \\beta^2 \\left(\\frac{R_L}{R_{in}}\\right)',
      assumptions: [
        'Transistor is properly biased to operate in the linear active region.',
        'Small-signal input ensuring distortion-free amplification.'
      ],
      physicalMeaning: 'Shows that a CE amplifier provides substantial voltage and power amplification with an inherent 180° phase reversal between input and output waveforms.',
      physicalMeaningTa: 'CE பெருக்கி அதிக மின்னழுத்த மற்றும் திறன் பெருக்கத்தை வழங்குவதுடன், உள்ளீட்டிற்கும் வெளியீட்டிற்கும் இடையே 180° கட்ட வேறுபாட்டை உருவாக்குகிறது என்பதை விளக்குகிறது.',
      commonMistakes: [
        'Forgetting to explain the physical reason for the negative sign (180° phase reversal).',
        'Confusing load resistance RL with input resistance Rin.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-SEMI-03',
      title: 'Verification of De Morgan’s First and Second Laws using Truth Tables',
      titleTa: 'டி மார்கனின் முதல் மற்றும் இரண்டாம் தேற்றங்களை உண்மை அட்டவணை மூலம் நிரூபித்தல்',
      aim: 'To state and prove De Morgan’s First Law (A + B)’ = A’ · B’ and Second Law (A · B)’ = A’ + B’ using truth tables.',
      given: [
        'Two binary Boolean variables A and B capable of taking values 0 or 1.'
      ],
      toProve: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B} \\quad \\text{and} \\quad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
      steps: [
        {
          stepNumber: 1,
          description: 'State First Law: The complement of an OR sum is equal to the AND product of the individual complements: (A + B)’ = A’ · B’.',
          descriptionTa: 'முதல் தேற்றம்: (A + B)’ = A’ · B’.',
          equation: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B}',
          note: 'Equivalent to: NOR gate equals Bubbled AND gate.'
        },
        {
          stepNumber: 2,
          description: 'Construct Truth Table for First Law: Rows for (A,B): (0,0) -> LHS=1, RHS=1; (0,1) -> LHS=0, RHS=0; (1,0) -> LHS=0, RHS=0; (1,1) -> LHS=0, RHS=0.',
          descriptionTa: 'முதல் தேற்றத்திற்கான உண்மை அட்டவணையை அமைத்து இரு நெடுவரிசைகளும் சமம் என நிரூபிக்கவும்.',
          equation: '\\text{Column } \\overline{A+B} \\equiv \\text{Column } \\bar{A}\\cdot\\bar{B} \\quad [1, 0, 0, 0]',
          note: 'All 4 rows match identically, proving the first theorem.'
        },
        {
          stepNumber: 3,
          description: 'State Second Law: The complement of an AND product is equal to the OR sum of the individual complements: (A · B)’ = A’ + B’.',
          descriptionTa: 'இரண்டாம் தேற்றம்: (A · B)’ = A’ + B’.',
          equation: '\\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
          note: 'Equivalent to: NAND gate equals Bubbled OR gate.'
        },
        {
          stepNumber: 4,
          description: 'Construct Truth Table for Second Law: Rows for (A,B): (0,0) -> LHS=1, RHS=1; (0,1) -> LHS=1, RHS=1; (1,0) -> LHS=1, RHS=1; (1,1) -> LHS=0, RHS=0.',
          descriptionTa: 'இரண்டாம் தேற்றத்திற்கான உண்மை அட்டவணையை அமைத்து இரு நெடுவரிசைகளும் சமம் என நிரூபிக்கவும்.',
          equation: '\\text{Column } \\overline{A\\cdot B} \\equiv \\text{Column } \\bar{A}+\\bar{B} \\quad [1, 1, 1, 0]',
          note: 'All 4 rows match identically, proving the second theorem.'
        }
      ],
      finalEquation: '\\overline{A + B} = \\bar{A} \\cdot \\bar{B} \\quad \\text{and} \\quad \\overline{A \\cdot B} = \\bar{A} + \\bar{B}',
      assumptions: [
        'Binary Boolean algebra with two states (0 and 1).'
      ],
      physicalMeaning: 'Fundamental mathematical rule used to simplify complex digital logic circuits and convert SOP (Sum of Products) to POS (Product of Sums) forms.',
      physicalMeaningTa: 'டிஜிட்டல் சுற்றுகளை எளிமைப்படுத்தவும் மைக்ரோசிப்களை வடிவமைக்கவும் பயன்படும் மிக முக்கியமான கணித விதியாகும்.',
      commonMistakes: [
        'Writing (A + B)’ = A’ + B’ (incorrectly keeping the OR operator instead of changing to AND).'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'Current Gain β and Base Current in a BJT Transistor',
      question: 'In a Common Emitter transistor circuit, the collector current is 5.0 mA and the base current is 25 μA. Calculate: (i) the common emitter current gain β, (ii) the emitter current IE, and (iii) the common base current gain α.',
      questionTa: 'ஒரு CE டிரான்சிஸ்டர் சுற்றில் ஏற்பான் மின்னோட்டம் 5.0 mA மற்றும் அடிவாய் மின்னோட்டம் 25 μA எனில்: (i) மின்னோட்டப் பெருக்கு எண் β, (ii) உமிழ்ப்பான் மின்னோட்டம் IE, (iii) CB மின்னோட்டப் பெருக்கு எண் α ஆகியவற்றைக் காண்க.',
      level: 'Easy',
      given: { 'IC': '5.0 mA = 5.0 × 10⁻³ A', 'IB': '25 μA = 0.025 mA = 25 × 10⁻⁶ A' },
      required: 'β, IE, and α',
      formulaUsed: '\\beta = \\frac{I_C}{I_B}, \\quad I_E = I_B + I_C, \\quad \\alpha = \\frac{\\beta}{1 + \\beta} = \\frac{I_C}{I_E}',
      unitConversions: 'Convert μA to mA (25 μA = 0.025 mA).',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate current gain β = IC / IB.',
          math: '\\beta = \\frac{5.0 \\text{ mA}}{0.025 \\text{ mA}} = 200'
        },
        {
          stepNumber: 2,
          description: 'Calculate emitter current IE = IB + IC.',
          math: 'I_E = 0.025 \\text{ mA} + 5.0 \\text{ mA} = 5.025 \\text{ mA}'
        },
        {
          stepNumber: 3,
          description: 'Calculate current gain α = β / (1 + β).',
          math: '\\alpha = \\frac{200}{1 + 200} = \\frac{200}{201} = 0.995'
        }
      ],
      finalAnswer: 'Current Gain β = 200, Emitter Current IE = 5.025 mA, Current Gain α = 0.995',
      siUnit: 'Unitless and mA',
      shortcutMethod: 'β = 5000 / 25 = 200; IE = 5.025 mA; α = 200/201 = 0.995.',
      commonErrors: 'Dividing 5.0 mA by 25 without converting microamperes to milliamperes.',
      examTip: 'Always check that α is slightly less than 1 (0.95 to 0.99) and β is large (50 to 300).'
    },
    {
      title: 'Zener Diode Voltage Regulator Calculation',
      question: 'A 10 V Zener diode is used to regulate voltage across a load resistor RL = 1.0 kΩ from an unregulated DC input supply that varies between 15 V and 20 V. A series resistor Rs = 250 Ω is connected. Calculate: (i) the load current IL, (ii) the maximum Zener current IZ(max), and (iii) the maximum power dissipated in the Zener diode.',
      questionTa: '10 V ஜீனர் டையோடு RL = 1.0 kΩ பளு மின்தடைக்கு குறுக்கே மின்னழுத்தத்தை ஒழுங்குபடுத்த பயன்படுகிறது. உள்ளீட்டு மின்னழுத்தம் 15 V முதல் 20 V வரை மாறுகிறது. தொடர் மின்தடை Rs = 250 Ω எனில்: (i) பளு மின்னோட்டம் IL, (ii) பெரும ஜீனர் மின்னோட்டம் IZ(max), (iii) ஜீனர் டையோடில் விரயமாகும் பெரும திறன் ஆகியவற்றைக் காண்க.',
      level: 'Medium',
      given: { 'VZ': '10 V', 'RL': '1000 Ω', 'Vin(max)': '20 V', 'Rs': '250 Ω' },
      required: 'IL, IZ(max), and PZ(max)',
      formulaUsed: 'I_L = \\frac{V_Z}{R_L}, \\quad I_S = \\frac{V_{in} - V_Z}{R_s}, \\quad I_Z = I_S - I_L, \\quad P_Z = V_Z \\cdot I_Z',
      unitConversions: 'All quantities in SI units (Ohms, Volts, Amperes).',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate constant load current IL = VZ / RL.',
          math: 'I_L = \\frac{10 \\text{ V}}{1000 \\,\\Omega} = 0.010 \\text{ A} = 10 \\text{ mA}'
        },
        {
          stepNumber: 2,
          description: 'Calculate total series current IS(max) when Vin = 20 V: IS = (Vin - VZ) / Rs.',
          math: 'I_{S(max)} = \\frac{20 \\text{ V} - 10 \\text{ V}}{250 \\,\\Omega} = \\frac{10 \\text{ V}}{250 \\,\\Omega} = 0.040 \\text{ A} = 40 \\text{ mA}'
        },
        {
          stepNumber: 3,
          description: 'Calculate maximum Zener current IZ(max) = IS(max) - IL.',
          math: 'I_{Z(max)} = 40 \\text{ mA} - 10 \\text{ mA} = 30 \\text{ mA} = 0.030 \\text{ A}'
        },
        {
          stepNumber: 4,
          description: 'Calculate maximum power dissipated PZ(max) = VZ · IZ(max).',
          math: 'P_{Z(max)} = 10 \\text{ V} \\times 0.030 \\text{ A} = 0.30 \\text{ W} = 300 \\text{ mW}'
        }
      ],
      finalAnswer: 'Load Current IL = 10 mA, Max Zener Current = 30 mA, Max Zener Power Dissipation = 300 mW (0.30 W)',
      siUnit: 'mA, W (or mW)',
      shortcutMethod: 'IL = 10/1k = 10 mA; IS = (20-10)/250 = 40 mA; IZ = 40 - 10 = 30 mA; PZ = 10 × 30m = 300 mW.',
      commonErrors: 'Using total current IS as the Zener current without subtracting load current IL.',
      examTip: 'State power dissipation in both milliwatts (300 mW) and Watts (0.30 W).'
    },
    {
      title: 'Transistor CE Amplifier Voltage and Power Gain Calculation',
      question: 'In a CE NPN transistor amplifier, the input dynamic resistance is 1.2 kΩ and the collector load resistance is 4.8 kΩ. The current gain β of the transistor is 100. If an AC input signal of 15 mV is applied, calculate: (i) the AC output voltage vo, (ii) the voltage gain Av, and (iii) the power gain Ap in dB.',
      questionTa: 'ஒரு CE NPN டிரான்சிஸ்டர் பெருக்கியில் உள்ளீட்டு மின்தடை 1.2 kΩ, ஏற்பான் பளு மின்தடை 4.8 kΩ மற்றும் மின்னோட்டப் பெருக்கு β = 100. 15 mV மாறுதிசை சைகை அளிக்கப்பட்டால்: (i) வெளியீட்டு மின்னழுத்தம் vo, (ii) மின்னழுத்தப் பெருக்கு எண் Av, (iii) திறன் பெருக்கு எண் ஆகியவற்றைக் காண்க.',
      level: 'Exam-Level',
      given: { 'Rin': '1.2 kΩ = 1200 Ω', 'RL': '4.8 kΩ = 4800 Ω', 'β': '100', 'vi': '15 mV = 0.015 V' },
      required: 'vo, Av, and Ap',
      formulaUsed: '|A_v| = \\beta \\left(\\frac{R_L}{R_{in}}\\right), \\quad v_o = |A_v| \\cdot v_i, \\quad A_p = \\beta \\cdot |A_v| = \\beta^2 \\left(\\frac{R_L}{R_{in}}\\right)',
      unitConversions: 'Convert kΩ to Ω and mV to V.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate voltage gain Av = β × (RL / Rin).',
          math: '|A_v| = 100 \\times \\left(\\frac{4800}{1200}\\right) = 100 \\times 4 = 400'
        },
        {
          stepNumber: 2,
          description: 'Calculate AC output voltage vo = |Av| · vi.',
          math: 'v_o = 400 \\times 15 \\text{ mV} = 6000 \\text{ mV} = 6.0 \\text{ V}'
        },
        {
          stepNumber: 3,
          description: 'Calculate power gain Ap = β · |Av| = 100 × 400 = 40,000.',
          math: 'A_p = 100 \\times 400 = 40,000 = 4 \\times 10^4'
        },
        {
          stepNumber: 4,
          description: 'Power gain in decibels (dB) = 10 log10(Ap) = 10 log10(40,000) = 10 × 4.602 = 46.02 dB.',
          math: 'A_p(\\text{dB}) = 10 \\log_{10}(40000) = 10 \\times 4.602 = 46.02 \\text{ dB}'
        }
      ],
      finalAnswer: 'Voltage Gain |Av| = 400, Output Voltage vo = 6.0 V (with 180° phase flip), Power Gain Ap = 40,000 (46.02 dB)',
      siUnit: 'Unitless, Volts (V), and dB',
      shortcutMethod: 'Av = 100 × (4.8/1.2) = 400; vo = 400 × 15m = 6.0 V; Ap = 100 × 400 = 40,000.',
      commonErrors: 'Using 20 log(Ap) instead of 10 log(Ap) for power gain.',
      examTip: 'Mention the 180° phase shift explicitly when stating output voltage.'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-SEMI-01',
      name: 'Full-Wave Center-Tapped Rectifier Circuit with Input/Output Waveforms',
      nameTa: 'முழு அலை திருத்தி சுற்று வரைபடம் மற்றும் அலைவடிவங்கள்',
      purpose: 'Illustrates the center-tapped step-down transformer, two diodes D1 and D2, load resistor RL, and corresponding sinusoidal AC input and pulsating DC output waveforms.',
      components: ['AC Mains Input (230V, 50Hz)', 'Center-Tapped Step-Down Transformer', 'Diode D1 (Top)', 'Diode D2 (Bottom)', 'Center-tap Ground/Reference', 'Load Resistor RL', 'Input AC Waveform', 'Rectified Full-Wave DC Waveform'],
      labelsEn: ['AC Input Waveform', 'Center-Tapped Secondary (S1, C, S2)', 'Diode D1', 'Diode D2', 'Load Resistor (RL)', 'Unidirectional DC Output Voltage', 'Ripple Frequency (2f)'],
      labelsTa: ['AC உள்ளீட்டு அலைவடிவம்', 'மைய இணைப்புக் கம்பி', 'டையோடு D1', 'டையோடு D2', 'பளு மின்தடை RL', 'நேர்திசை DC வெளியீடு', 'அலைச்சிற்றலை அதிர்வெண் (2f)'],
      stepByStepExplanation: [
        'Draw AC source connected to transformer primary coil.',
        'Draw secondary coil with center-tap C connected to bottom of load RL.',
        'Connect top terminal S1 to anode of diode D1 and bottom terminal S2 to anode of diode D2.',
        'Connect cathodes of both D1 and D2 together to the top of load RL.',
        'Draw time-aligned graphs showing AC sine wave input and double-hump positive pulsating DC output.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Connecting diodes in opposite back-to-back directions instead of both cathodes pointing to the load.'],
      aiImagePrompt: 'Clean educational schematic diagram of a Full-Wave Center-Tapped Diode Rectifier circuit. Clear electronic symbols for transformer, two diodes D1 and D2, load resistor, showing sinusoidal AC input waveform and continuous positive pulsing DC output waveform, clean white background.'
    },
    {
      id: 'DIAG-SEMI-02',
      name: 'Common Emitter (CE) NPN Transistor Amplifier Circuit',
      nameTa: 'பொது உமிழ்ப்பான் (CE) NPN டிரான்சிஸ்டர் பெருக்கி சுற்று வரைபடம்',
      purpose: 'Shows an NPN transistor connected in CE configuration with base biasing resistor RB, collector load resistor RC, input coupling capacitor C1, output capacitor C2, and 180° inverted amplified waveforms.',
      components: ['NPN Transistor (Emitter with outward arrow)', 'Input AC Signal Source (vi)', 'Input Coupling Capacitor (C1)', 'Base Resistor (RB)', 'Collector Load Resistor (RC)', 'VCC DC Power Supply (+)', 'Output Coupling Capacitor (C2)', 'Load Resistor (RL)', 'Small Input Waveform & Large Inverted Output Waveform'],
      labelsEn: ['NPN Transistor', 'Base (B), Emitter (E), Collector (C)', 'Input AC Voltage (vi)', 'Output AC Voltage (vo = -Av · vi)', '180° Phase Reversal', 'Collector Supply (+VCC)', 'Coupling Capacitors (C1, C2)'],
      labelsTa: ['NPN டிரான்சிஸ்டர்', 'அடிவாய், உமிழ்ப்பான், ஏற்பான்', 'உள்ளீட்டு AC மின்னழுத்தம்', 'வெளியீட்டு மின்னழுத்தம்', '180° கட்ட மாற்றம்', 'VCC மின்னழுத்தம்', 'இணைப்பு மின்தேக்கிகள்'],
      stepByStepExplanation: [
        'Draw an NPN transistor circle with horizontal base B, collector C at top, and emitter E with downward-pointing arrow at bottom connected to ground.',
        'Connect AC input vi through capacitor C1 to the base.',
        'Connect VCC supply through resistor RC to the collector.',
        'Take output vo from the collector through capacitor C2.',
        'Draw a small input sine wave on the left and a large 180°-inverted sine wave on the right.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Drawing emitter arrow pointing inward (which would make it a PNP transistor instead of NPN).'],
      aiImagePrompt: 'Textbook vector circuit diagram of an NPN Common Emitter (CE) transistor voltage amplifier. Showing transistor symbol, biasing resistors, input signal and large 180-degree inverted output waveform, clear electronic labels on white background.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-SEMI-01',
      name: 'V-I Characteristics of p-n Junction Diode and Zener Diode',
      nameTa: 'p-n சந்தி டையோடு மற்றும் ஜீனர் டையோடின் V-I சிறப்பியல்பு வளைகோடு',
      xAxis: 'Voltage: Forward Voltage VF (V) on +X; Reverse Voltage VR (V) on -X',
      yAxis: 'Current: Forward Current IF (mA) on +Y; Reverse Current IR (μA) on -Y',
      units: 'Volts (V) on X-axis, mA/μA on Y-axis',
      shape: 'Exponential rise in Quadrant 1 above knee voltage (0.7 V); negligible flat line in Quadrant 3 until sharp vertical breakdown at VZ',
      importantPoints: [
        'Knee Voltage / Cut-in Voltage: ~0.7 V for Silicon, ~0.3 V for Germanium in Forward Bias (Quadrant 1).',
        'Reverse Saturation Current (I0): Extremely small constant current (~μA or nA) in Quadrant 3.',
        'Zener Breakdown Voltage (VZ): Sharp vertical downward current jump in Quadrant 3 where voltage remains perfectly constant at VZ.'
      ],
      physicalMeaning: 'Proves the unidirectional conduction of standard diodes and the precise voltage-clamping property of Zener diodes.',
      mathematicalRelationship: 'I = I_0 \\left(e^{e V / \\eta k_B T} - 1\\right)',
      howToDrawInExam: 'Draw 4 quadrants. In Quadrant 1 (VF in V, IF in mA), start flat, bend sharply upward at 0.7 V. In Quadrant 3 (VR in V, IR in μA), draw a flat line below X-axis, then drop vertically straight down at -VZ.',
      commonMistakes: ['Using milliamperes (mA) on the negative Y-axis instead of microamperes (μA) for reverse current.'],
      aiGraphPrompt: 'Scientifically accurate V-I characteristic curve of a silicon p-n junction diode and Zener diode. Showing Quadrant 1 forward exponential curve with 0.7V knee voltage, and Quadrant 3 reverse breakdown at Zener voltage VZ with microampere scale, clean textbook graphic on white background.'
    }
  ],
  experiments: [
    {
      id: 'EXP-SEMI-01',
      name: 'Study of V-I Characteristics of a p-n Junction Diode in Forward and Reverse Bias',
      nameTa: 'p-n சந்தி டையோடின் முன்னோக்கு மற்றும் பின்னோக்கு V-I பண்புகளை ஆய்வு செய்தல்',
      apparatus: ['Silicon p-n junction diode (IN4007)', '0-3 V and 0-30 V regulated DC power supplies', '0-100 mA milliammeter', '0-100 μA microammeter', '0-3 V and 0-30 V DC voltmeters', 'Connecting wires'],
      principle: 'By measuring the diode voltage (V) and resulting current (I) under forward and reverse bias conditions, the static and dynamic resistances (rd = ΔV / ΔI) are calculated.',
      principleTa: 'முன்னோக்கு மற்றும் பின்னோக்கு சார்பில் மின்னழுத்தம் (V) மற்றும் மின்னோட்டத்தை (I) அளவிட்டு இயங்கு மின்தடை $r_d = \Delta V / \Delta I$ கணக்கிடப்படுகிறது.',
      procedure: [
        'Forward Bias Connection: Connect anode of diode to positive of 0-3V supply through milliammeter; connect cathode to negative. Connect voltmeter in parallel.',
        'Vary input voltage in steps of 0.1 V from 0 to 1.0 V and record corresponding forward current IF in mA.',
        'Reverse Bias Connection: Reverse diode polarity, replace milliammeter with microammeter and supply with 0-30V.',
        'Vary reverse voltage in steps of 2 V from 0 to 20 V and record reverse current IR in μA.',
        'Plot Forward and Reverse V-I characteristic curves and calculate forward dynamic resistance rd = ΔVF / ΔIF.'
      ],
      observation: 'Forward current remains zero until knee voltage ~0.7 V, then increases steeply. Reverse current remains tiny constant (~0.5 μA). Calculated forward dynamic resistance rd ≈ 15 Ω.',
      result: '1) Knee voltage of silicon diode = 0.7 V. 2) Forward dynamic resistance rd = 15 Ω.',
      precautions: [
        'Do not exceed maximum forward rated current (100 mA) to prevent diode burnout.',
        'Ensure proper meter polarities and change scales when switching between forward (mA) and reverse (μA) modes.'
      ],
      realLifeImportance: 'Essential for designing rectifiers, solar inverters, and high-frequency RF communication circuits.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Semiconductors & The Transistor Revolution: From Sand to Silicon Chips',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Microscopic Miracle Inside Your Smartphone',
        explanationEn: 'Inside the microscopic processor of your smartphone are over 15 BILLION silicon transistors, each switching ON and OFF billions of times per second. How does purified beach sand (silicon) perform digital calculations? Through semiconductor bandgap engineering and logic gates!',
        explanationTa: 'உங்கள் ஸ்மார்ட்போனின் சிறிய மைக்ரோசிப்பிற்குள் 1500 கோடிக்கும் அதிகமான டிரான்சிஸ்டர்கள் உள்ளன. சாதாரண சிலிக்கான் எவ்வாறு கணினிகளை இயக்குகிறது? குறைக்கடத்திகள் மற்றும் தர்க்க வாயில்கள் மூலம்!',
        animationDescription: '3D zoom from a grain of beach sand down into a crystalline silicon lattice, zooming further into a glowing nanoscale FinFET transistor gate switching on and off.',
        keywordsDisplayed: ['Semiconductors', '15 Billion Transistors', 'Doping (n-type & p-type)', 'Silicon (Eg = 1.1 eV)'],
        interactiveQuestion: {
          question: 'What is the electrical conductivity of a pure semiconductor at absolute zero (0 Kelvin)?',
          questionTa: 'தனிச்சுழி வெப்பநிலையில் (0 K) தூய குறைக்கடத்தியின் கடத்துத்திறன் என்ன?',
          options: ['Zero (Behaves as a perfect insulator)', 'Infinite (Superconductor)', 'Same as Copper', 'Extremely high'],
          optionsTa: ['பூஜ்ஜியம் (முழுமையான மின்காப்பானாக செயல்படும்)', 'முடிவிலி', 'தாமிரத்திற்கு சமம்', 'மிக அதிகம்'],
          correctIndex: 0,
          explanation: 'At 0 K, all valence electrons are locked tightly in covalent bonds with zero thermal excitation, so the conduction band is completely empty.'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: The p-n Junction One-Way Turnstile',
        explanationEn: 'Joining p-type and n-type silicon creates a barrier potential (0.7 V for Si). Forward bias collapses the barrier, allowing massive current flow; reverse bias widens the barrier, blocking current. This enables diodes to rectify AC into DC with up to 81.2% efficiency in full-wave rectifiers!',
        explanationTa: 'p-n சந்தி முன்னோக்கு சார்பில் மின்னோட்டத்தை எளிதாக அனுமதிக்கிறது, பின்னோக்கு சார்பில் தடுக்கிறது. இது மாறுதிசை மின்னோட்டத்தை (AC) நேர்திசை மின்னோட்டமாக (DC) மாற்ற உதவுகிறது.',
        animationDescription: '3D p-n junction with glowing blue electrons and red holes crossing the barrier under forward bias, and pulling apart under reverse bias.',
        keywordsDisplayed: ['p-n Junction Diode', 'Barrier Potential (0.7V Si)', 'Forward Bias (ON)', 'Full-Wave Rectifier (η = 81.2%)'],
        interactiveQuestion: {
          question: 'What is the maximum theoretical efficiency of a center-tapped full-wave rectifier?',
          questionTa: 'மைய இணைப்பு முழு அலை திருத்தியின் பெரும கோட்பாட்டு திருத்து திறன் எவ்வளவு?',
          options: ['81.2%', '40.6%', '100%', '50%'],
          optionsTa: ['81.2%', '40.6%', '100%', '50%'],
          correctIndex: 0,
          explanation: 'Full-wave rectification efficiency is η = 8/π² = 81.2% (exactly double the 40.6% of a half-wave rectifier).'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'The Transistor: Electronic Muscle & Amplifier',
        explanationEn: 'A Bipolar Junction Transistor uses a tiny base current to control a huge collector current (IC = β · IB). In a Common Emitter amplifier, it magnifies weak audio signals by hundreds of times, producing a 180° inverted output waveform!',
        explanationTa: 'டிரான்சிஸ்டர் சிறிய அடிவாய் மின்னோட்டத்தைக் கொண்டு பெரிய ஏற்பான் மின்னோட்டத்தைக் கட்டுப்படுத்துகிறது (IC = β · IB). இது பலவீனமான சைகைகளை நூற்றுக்கணக்கான மடங்கு பெரிதாக்குகிறது.',
        animationDescription: '3D NPN transistor circuit showing a small ripple audio wave entering the base and emerging as a giant 180°-inverted wave at the collector.',
        keywordsDisplayed: ['BJT Transistor', 'Current Gain β = IC/IB', 'Voltage Gain Av = -β(RL/Rin)', '180° Phase Reversal'],
        interactiveQuestion: {
          question: 'If a transistor has a base current IB = 20 μA and collector current IC = 4 mA, what is its current gain β?',
          questionTa: 'IB = 20 μA மற்றும் IC = 4 mA எனில் டிரான்சிஸ்டரின் மின்னோட்டப் பெருக்கு எண் β என்ன?',
          options: ['200', '20', '0.005', '80'],
          optionsTa: ['200', '20', '0.005', '80'],
          correctIndex: 0,
          explanation: 'β = IC / IB = (4 × 10⁻³ A) / (20 × 10⁻⁶ A) = 4000 / 20 = 200.'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Digital Logic & De Morgan’s Laws',
        explanationEn: 'All software and AI run on logic gates: AND, OR, NOT, and universal NAND/NOR gates. De Morgan’s laws, (A+B)’ = A’·B’ and (A·B)’ = A’+B’, prove that complex operations can be simplified down to simple universal microchips!',
        explanationTa: 'அனைத்து கணினிகளும் தர்க்க வாயில்களாலேயே இயங்குகின்றன. டி மார்கனின் தேற்றங்கள் (A+B)’ = A’·B’ மற்றும் (A·B)’ = A’+B’ சிக்கலான சுற்றுகளை எளிமைப்படுத்த உதவுகின்றன.',
        animationDescription: '3D holographic logic gate truth tables glowing in binary 0s and 1s, morphing seamlessly according to De Morgan’s Boolean transformations.',
        keywordsDisplayed: ['Logic Gates', 'Universal Gates (NAND, NOR)', 'De Morgan: (A+B)’ = A’·B’', 'De Morgan: (A·B)’ = A’+B’'],
        interactiveQuestion: {
          question: 'According to De Morgan’s Second Law, the complement of (A · B) is equal to:',
          questionTa: 'டி மார்கனின் இரண்டாம் தேற்றத்தின்படி (A · B)-ன் நிரப்பி எதற்குச் சமம்?',
          options: ['A’ + B’', 'A’ · B’', '(A + B)’', 'A · B'],
          optionsTa: ['A’ + B’', 'A’ · B’', '(A + B)’', 'A · B'],
          correctIndex: 0,
          explanation: 'De Morgan’s Second Law states that (A · B)’ = A’ + B’ (NAND equals Bubbled OR).'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 240,
    scriptEn: 'Welcome to Unit 9 Semiconductor Electronics! This chapter reveals the engine of our modern digital world. We begin with energy bands and doping in silicon. We examine how p-n junctions rectify AC power and how Zener diodes regulate voltage. We explore optoelectronics, master the BJT transistor as a powerful amplifier with 180-degree phase shift, and unlock the digital logic of universal gates and De Morgan’s Boolean laws.',
    scriptTa: 'அலகு 9 குறைக்கடத்தி எலக்ட்ரானியல் பகுதிக்கு உங்களை அன்புடன் வரவேற்கிறோம்! இப்பாடத்தில் நவீன டிஜிட்டல் உலகின் அடித்தளத்தைக் கற்கிறோம். ஆற்றல் பட்டைகள், p-n சந்தி டையோடுகளின் திருத்துதல், ஜீனர் மின்னழுத்த ஒழுங்கமைப்பான், ஒளியியல் கருவிகள், டிரான்சிஸ்டர் பெருக்கி மற்றும் 180 டிகிரி கட்ட மாற்றம், தர்க்க வாயில்கள் மற்றும் டி மார்கனின் தேற்றங்களை முழுமையாகப் பயில்வோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 9 Semiconductor Electronics-ல் நாம் Energy Bands, p-n junction diode மற்றும் Full-Wave Rectifier efficiency eta = 81.2% தருவிப்பதை கற்கிறோம். Zener diode voltage regulator, Transistor CE Amplifier voltage gain Av = -beta(RL/Rin) with 180 degree phase reversal மற்றும் De Morgan’s Laws (A+B)’ = A’·B’ ஆகியவற்றை step-by-step ஆகப் படிப்போம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'The forbidden energy gap for Silicon at room temperature is approximately:',
        qTa: 'அறை வெப்பநிலையில் சிலிக்கானின் விலக்கப்பட்ட ஆற்றல் இடைவெளி சுமார்:',
        a: '1.1 eV (Germanium is 0.7 eV)',
        aTa: '1.1 eV (ஜெர்மானியத்திற்கு 0.7 eV)'
      },
      {
        q: 'The ripple frequency of a full-wave rectifier operating on 50 Hz AC mains is:',
        qTa: '50 Hz AC மெயினில் இயங்கும் முழு அலை திருத்தியின் அலைச்சிற்றலை அதிர்வெண்:',
        a: '100 Hz (f_out = 2 · f_in = 2 × 50 = 100 Hz)',
        aTa: '100 Hz (f_out = 2 × 50 = 100 Hz)'
      },
      {
        q: 'Which logic gate produces an output 0 ONLY when both inputs are 1?',
        qTa: 'இரு உள்ளீடுகளும் 1 ஆக இருக்கும்போது மட்டுமே வெளியீடு 0 தரும் தர்க்க வாயில் எது?',
        a: 'NAND Gate (Y = (A · B)’)',
        aTa: 'NAND வாயில் (Y = (A · B)’)'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'State De Morgan’s First and Second Theorems.',
        qTa: 'டி மார்கனின் முதல் மற்றும் இரண்டாம் தேற்றங்களைக் கூறுக.',
        a: 'First Theorem: The complement of an OR sum is equal to the AND product of the individual complements: (A + B)’ = A’ · B’. Second Theorem: The complement of an AND product is equal to the OR sum of the individual complements: (A · B)’ = A’ + B’.',
        aTa: 'முதல் தேற்றம்: (A + B)’ = A’ · B’. இரண்டாம் தேற்றம்: (A · B)’ = A’ + B’.'
      },
      {
        q: 'Why is a Zener diode heavily doped compared to a normal p-n diode?',
        qTa: 'சாதாரண டையோடை விட ஜீனர் டையோடு ஏன் அதிகளவில் மாசூட்டப்படுகிறது?',
        a: 'Heavy doping produces an extremely thin depletion layer (< 10 nm). This generates a colossal internal electric field (~10⁷ V/m) at low reverse voltages (< 6 V), enabling direct rupture of covalent bonds (Zener breakdown) without thermal destruction.',
        aTa: 'அதிக மாசூட்டல் மிகக் குறுகிய குறைக்கப்பட்ட அடுக்கை உருவாக்குகிறது. இதனால் குறைந்த பின்னோக்கு மின்னழுத்தத்திலேயே வலுவான மின்புலம் உருவாகி சகப்பிணைப்புகள் உடைக்கப்பட்டு ஜீனர் முறிவு பாதுகாப்பாக நிகழ்கிறது.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Explain the working of a Zener diode as a DC voltage regulator with a neat circuit diagram.',
        qTa: 'ஜீனர் டையோடு ஒரு DC மின்னழுத்த ஒழுங்கமைப்பானாகச் செயல்படுவதை தகுந்த சுற்றுப்படத்துடன் விளக்குக.',
        a: 'The Zener diode is connected in reverse bias across the load RL in series with a resistor Rs. When unregulated input Vin increases, Zener diode enters breakdown, maintaining a constant voltage VZ across itself and the load RL. The excess current flows through the Zener diode: IS = IZ + IL, keeping VL = VZ perfectly constant.',
        aTa: 'ஜீனர் டையோடு பின்னோக்கு சார்பில் RL-க்கு இணையாக இணைக்கப்படுகிறது. உள்ளீட்டு மின்னழுத்தம் மாறினாலும் ஜீனர் டையோடு முறிவுப் பகுதியில் இயங்கி பளுவிற்கு குறுக்கே நிலையான VZ மின்னழுத்தத்தை வழங்குகிறது. அதிகப்படியான மின்னோட்டம் ஜீனர் வழியே பாய்கிறது: IS = IZ + IL.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Explain the working of a full-wave center-tapped rectifier with a neat circuit diagram and input/output waveforms. Derive its maximum efficiency.',
        qTa: 'முழு அலை திருத்தியின் செயல்பாட்டை சுற்றுப்படம் மற்றும் அலைவடிவங்களுடன் விளக்குக. அதன் பெரும திருத்து திறனைத் தருவிக்க.',
        a: 'Center-tapped transformer provides two anti-phase AC signals. During positive half cycle, D1 is forward biased and conducts; during negative half cycle, D2 is forward biased and conducts. Current flows in the same direction through RL during both half cycles. Idc = 2Im/π, Irms = Im/√2. Efficiency η = Pdc / Pac = [(4/π²)Im² RL] / [(Im²/2)(rf + RL)] = (8/π²)[RL / (rf + RL)] = 81.2% when rf << RL.',
        aTa: 'நேர் அரைச் சுற்றில் D1 மற்றும் எதிர் அரைச் சுற்றில் D2 கடத்துகிறது. இரு சுழற்சிகளிலும் RL வழியே ஒரே திசையில் மின்னோட்டம் பாய்கிறது. Idc = 2Im/π மற்றும் Irms = Im/√2. திருத்து திறன் η = Pdc / Pac = (8/π²) = 81.2% எனக் கணக்கிடப்படுகிறது.'
      },
      {
        q: 'Describe the working of an NPN transistor as a Common Emitter (CE) amplifier with a circuit diagram. Derive the expression for voltage gain and explain the phase reversal.',
        qTa: 'NPN டிரான்சிஸ்டர் பொது உமிழ்ப்பான் (CE) பெருக்கியாகச் செயல்படுவதை விளக்கி, மின்னழுத்தப் பெருக்கு சமன்பாட்டைத் தருவிக்க. கட்ட மாற்றத்தை விவரிக்க.',
        a: 'Apply small AC signal vi at base: ΔIB = vi / Rin => ΔIC = β ΔIB = β vi / Rin. Output loop KVL: VCE = VCC - IC RL => vo = ΔVCE = -ΔIC RL = -β(RL / Rin) vi. Voltage gain Av = vo / vi = -β(RL / Rin). The negative sign indicates that a positive-going input produces a negative-going output, establishing a 180° phase reversal.',
        aTa: 'உள்ளீட்டு மின்னழுத்தம் vi அடிவாய் மின்னோட்ட மாறுபாட்டை ΔIB = vi/Rin என உருவாக்குகிறது => ΔIC = β vi/Rin. வெளியீட்டு சமன்பாடு VCE = VCC - IC RL இலிருந்து vo = -ΔIC RL = -β(RL/Rin)vi. எனவே Av = -β(RL/Rin). எதிர்க்குறி உள்ளீட்டிற்கும் வெளியீட்டிற்கும் இடையே உள்ள 180° கட்ட மாற்றத்தைக் காட்டுகிறது.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Full-wave rectifier circuit, working, and efficiency derivation (5 Marks)',
      'CE transistor amplifier circuit, voltage gain derivation, and 180° phase reversal (5 Marks)',
      'Zener diode as a voltage regulator with circuit and equations (3 Marks / 5 Marks)',
      'De Morgan’s First and Second Laws proof using truth tables (3 Marks)',
      'V-I characteristics of p-n junction diode and dynamic resistance (3 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why is NAND called a universal gate?',
      answer: 'Because combinations of only NAND gates can produce all three basic logic operations: NOT (single input NAND), AND (NAND followed by NAND inverter), and OR (De Morgan equivalent with inverted inputs).',
      category: 'Concept'
    },
    {
      question: 'Why does a CE amplifier introduce a 180° phase shift?',
      answer: 'When input voltage increases, base current and collector current increase, causing a larger voltage drop across load resistor RC (IC RC), which reduces the output collector-to-emitter voltage (VCE = VCC - IC RC), making the output wave swing negative when the input swings positive.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Using η = 40.6% for full-wave rectifier.',
      correctWay: 'Full-wave rectifier efficiency is 81.2% (double that of half-wave 40.6%).'
    },
    {
      category: 'Diagram',
      mistake: 'Drawing arrow on base or collector of transistor instead of emitter.',
      correctWay: 'The arrow ALWAYS belongs on the Emitter lead: pointing outward for NPN and inward for PNP.'
    }
  ],
  memoryTricks: [
    {
      title: 'Transistor Arrow Direction Mnemonic',
      titleTa: 'டிரான்சிஸ்டர் அம்பு குறி நினைவுக்குறிப்பு',
      trick: '"NPN = Not Pointing iN (Points Outward); PNP = Points iN Proudly!"'
    },
    {
      title: 'De Morgan’s Mnemonic',
      titleTa: 'டி மார்கன் தேற்றம் நினைவுக்குறிப்பு',
      trick: '"Break the line, change the sign" → (A+B)’ = A’·B’ and (A·B)’ = A’+B’.'
    }
  ]
};
