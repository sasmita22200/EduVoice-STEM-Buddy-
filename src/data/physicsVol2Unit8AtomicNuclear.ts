import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_8_ATOMIC_AND_NUCLEAR: PhysicsChapter = {
  chapterNumber: 8,
  chapterName: 'Atomic and Nuclear Physics',
  chapterNameTa: 'அணு மற்றும் அணுக்கரு இயற்பியல்',
  unitNumber: 8,
  unitName: 'Atomic and Nuclear Physics',
  unitNameTa: 'அணு மற்றும் அணுக்கரு இயற்பியல்',
  importance: 'High-Yield (12-14 Marks in Board Exam)',
  overview: 'Comprehensive exploration of atomic structures (J.J. Thomson e/m, Millikan oil drop, Rutherford scattering, Bohr’s hydrogen model, Hydrogen spectral series) and nuclear physics (Nuclear composition, Binding energy curve, Nuclear forces, Radioactivity decay laws, Nuclear Fission, Nuclear Reactor, and Thermonuclear Fusion).',
  overviewTa: 'அணு அமைப்பு (ஜே.ஜே. தாம்சன் e/m, மில்லிகன் எண்ணெய் துளி ஆய்வு, ரூதர்போர்டு சிதறல், போர் ஹைட்ரஜன் மாதிரி, ஹைட்ரஜன் நிறமாலை தொடர்கள்) மற்றும் அணுக்கரு இயற்பியல் (அணுக்கரு கட்டமைப்பு, பிணைப்பு ஆற்றல் வளைகோடு, அணுக்கரு விசை, கதிரியக்கச் சிதைவு விதிகள், அணுக்கரு பிளவு, அணு உலை மற்றும் அணுக்கரு இணைவு) ஆகியவற்றின் விரிவான விளக்கம்.',
  learningObjectives: [
    'Explain J.J. Thomson’s method for determining the specific charge (e/m) of an electron.',
    'Understand Millikan’s oil drop experiment for measuring the fundamental electronic charge e.',
    'Derive Bohr’s radius, velocity, and total energy for hydrogen electron orbits.',
    'Analyze the Hydrogen spectral series (Lyman, Balmer, Paschen, Brackett, Pfund) using Rydberg formula.',
    'Understand nuclear size ($R = R_0 A^{1/3}$), mass defect, and the Binding Energy per nucleon curve.',
    'Formulate the Radioactive Decay Law ($N = N_0 e^{-\lambda t}$), Half-life ($T_{1/2}$), and Mean life ($\\tau$).',
    'Explain the working of a Nuclear Reactor and compare Nuclear Fission and Fusion mechanisms.'
  ],
  prerequisites: [
    'Coulomb’s electrostatic force and centripetal force balance',
    'Conservation of energy and momentum',
    'Basics of radioactive alpha, beta, and gamma emissions'
  ],
  everydayApplications: [
    'Nuclear power plants generating clean baseload electricity via controlled uranium fission',
    'Cancer radiotherapy using Cobalt-60 gamma sources and linear accelerators',
    'Carbon-14 dating determining the age of ancient archaeological artifacts and fossils',
    'Smoke detectors utilizing microscopic Americium-241 alpha ionization chambers',
    'Hydrogen fusion powering the Sun and stars, giving life to our solar system'
  ],
  historicalBackground: 'J.J. Thomson discovered the electron in 1897. Robert Millikan confirmed the quantized charge of the electron in 1909. Ernest Rutherford discovered the atomic nucleus via alpha scattering in 1911. Niels Bohr introduced quantum stationary orbits in 1913. James Chadwick discovered the neutron in 1932. Otto Hahn and Fritz Strassmann discovered nuclear fission in 1938, unleashing nuclear energy.',
  scientistsAssociated: [
    'J.J. Thomson (Discovery of electron & e/m determination - Nobel Prize 1906)',
    'Robert Millikan (Oil drop experiment & charge quantization - Nobel Prize 1923)',
    'Ernest Rutherford (Nuclear atom model & alpha scattering - Nobel Prize 1908)',
    'Niels Bohr (Quantum model of hydrogen atom - Nobel Prize 1922)',
    'James Chadwick (Discovery of the neutron - Nobel Prize 1935)',
    'Enrico Fermi (First controlled nuclear chain reaction - Nobel Prize 1938)'
  ],
  topics: [
    {
      id: 'atom-8.1',
      topicNumber: '8.1',
      title: 'Electric Discharge, J.J. Thomson e/m, and Millikan’s Experiment',
      titleTa: 'மின் வெளியேற்றம், தாம்சன் e/m ஆய்வு மற்றும் மில்லிகன் ஆய்வு',
      beginnerExplanation: 'Gases conduct electricity at low pressure ($0.01$ mm Hg) emitting cathode rays (electrons). J.J. Thomson measured the specific charge ($e/m = 1.7588 \times 10^{11}$ C/kg) using crossed electric and magnetic fields. Millikan measured the fundamental charge of an electron ($e = 1.6 \times 10^{-19}$ C) by balancing falling charged oil drops in an electric field.',
      beginnerExplanationTa: 'குறைந்த அழுத்தத்தில் வாயுக்களின் வழியே மின் வெளியேற்றம் நிகழும்போது கேத்தோடு கதிர்கள் (எலக்ட்ரான்கள்) உருவாகின்றன. தாம்சன் செங்குத்து மின் மற்றும் காந்தப்புலங்களைப் பயன்படுத்தி எலக்ட்ரானின் மின்னூட்ட எண் தகவை ($e/m = 1.7588 \times 10^{11}$ C/kg) கண்டறிந்தார். மில்லிகன் எண்ணெய் துளி ஆய்வின் மூலம் எலக்ட்ரானின் அடிப்படை மின்னூட்டத்தை ($e = 1.6 \times 10^{-19}$ C) அளவிட்டார்.',
      coreConcepts: [
        'Velocity Selector (Crossed Fields): When electric force equals magnetic force ($qE = qvB$), undeflected electrons have velocity $v = E/B$.',
        'Specific Charge of Electron: $\\frac{e}{m} = \\frac{E^2}{2 V B^2} = 1.7588 \\times 10^{11}\\text{ C/kg}$ (constant for all cathode ray sources).',
        'Millikan Oil Drop Principle: An oil drop with charge $q = ne$ is held stationary between horizontal plates when downward gravity force equals upward electric force: $mg = qE = (ne)\\frac{V}{d}$.',
        'Quantization of Charge: $q = \\pm ne$ where $n = 1, 2, 3, \\dots$, proving electric charge is not continuous.'
      ],
      definitions: [
        {
          term: 'Specific Charge of Electron (எலக்ட்ரானின் மின்னூட்ட எண் தகவு)',
          termTa: 'எலக்ட்ரானின் மின்னூட்ட எண் தகவு',
          definitionEn: 'The ratio of the electric charge of an electron (e) to its mass (m): $e/m = 1.7588 \\times 10^{11}\\text{ C/kg}$.',
          definitionTa: 'எலக்ட்ரானின் மின்னூட்டத்திற்கும் அதன் நிறைக்கும் உள்ள தகவு மின்னூட்ட எண் தகவு எனப்படும் ($e/m = 1.7588 \times 10^{11}\text{ C/kg}$).',
          keyPoints: ['Universal constant for all electrons', 'Independent of gas inside the discharge tube and cathode metal']
        }
      ],
      analogies: 'Determining e/m using crossed fields is like steering a boat straight across a river: if the eastward wind (electric force) perfectly cancels the westward current (magnetic force), the boat sails straight across.',
      commonMisconceptions: [
        'Cathode rays are electromagnetic waves (False: cathode rays are streams of fast-moving material electrons having mass, momentum, and negative charge).'
      ]
    },
    {
      id: 'atom-8.2',
      topicNumber: '8.2',
      title: 'Bohr Atom Model and Hydrogen Spectral Series',
      titleTa: 'போர் அணு மாதிரி மற்றும் ஹைட்ரஜன் நிறமாலை தொடர்கள்',
      beginnerExplanation: 'Niels Bohr resolved Rutherford’s atomic instability paradox by proposing that electrons revolve only in non-radiating stationary orbits where orbital angular momentum is quantized ($L = mvr = \frac{nh}{2\pi}$). Light is emitted only when an electron jumps from a higher orbit to a lower orbit ($h\nu = E_2 - E_1$).',
      beginnerExplanationTa: 'எலக்ட்ரான்கள் ஆற்றலை கதிர்வீசாத குறிப்பிட்ட நிலையான வட்டப்பாதைகளில் மட்டுமே சுற்றுகின்றன என்று போர் கூறினார். அவற்றின் கோண உந்தம் குவாண்டமாக்கல் விதியைப் பெறுகிறது ($mvr = nh/2\pi$). எலக்ட்ரான் உயர் ஆற்றல் மட்டத்திலிருந்து கீழ் மட்டத்திற்கு குதிக்கும் போது மட்டுமே ஒளி உமிழப்படுகிறது.',
      coreConcepts: [
        'Bohr’s Quantization Condition: $L = m v_n r_n = \\frac{n h}{2\\pi}$ ($n = 1, 2, 3, \\dots$).',
        'Radius of $n^{\\text{th}}$ Orbit: $r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} = n^2 a_0$ where Bohr radius $a_0 = 0.529$ Å.',
        'Velocity of Electron: $v_n = \\frac{e^2}{2\\varepsilon_0 n h} \\propto \\frac{1}{n}$.',
        'Total Energy of Electron: $E_n = -\\frac{m e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6}{n^2}\\text{ eV}$. Negative sign signifies bound state.',
        'Rydberg Formula: $\\bar{\\nu} = \\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)$ where $R_H = 1.09737 \\times 10^7\\text{ m}^{-1}$.',
        'Hydrogen Spectral Series: Lyman ($n_1=1$, UV), Balmer ($n_1=2$, Visible), Paschen ($n_1=3$, IR), Brackett ($n_1=4$, IR), Pfund ($n_1=5$, Far IR).'
      ],
      definitions: [
        {
          term: 'Bohr Radius (போர் ஆரம்)',
          termTa: 'போர் ஆரம்',
          definitionEn: 'The radius of the innermost stationary orbit ($n = 1$) of the hydrogen atom, denoted by $a_0 = 0.529$ Å ($0.529 \times 10^{-10}$ m).',
          definitionTa: 'ஹைட்ரஜன் அணுவின் முதல் நிலையான சுற்றுப்பாதையின் ஆரம் ($n = 1$) போர் ஆரம் ($a_0 = 0.529$ Å) எனப்படும்.',
          keyPoints: ['$a_0 = \\frac{\\varepsilon_0 h^2}{\\pi m e^2}$', 'Orbit radii scale as $r_n = n^2 a_0$ ($1 : 4 : 9 : 16$)']
        },
        {
          term: 'Ionization Potential (அயனியாக்கும் மின்னழுத்தம்)',
          termTa: 'அயனியாக்கும் மின்னழுத்தம்',
          definitionEn: 'The minimum accelerating potential required to completely liberate an electron from the ground state of an isolated atom to infinity ($13.6$ V for Hydrogen).',
          definitionTa: 'தனித்த அணுவின் அடிநிலை ஆற்றல் மட்டத்திலுள்ள எலக்ட்ரானை முழுமையாக வெளியேற்ற தேவைப்படும் குறைந்தபட்ச மின்னழுத்தம் அயனியாக்கும் மின்னழுத்தம் எனப்படும்.',
          keyPoints: ['Ionization Energy of Hydrogen = $+13.6$ eV', 'Ionization Potential of Hydrogen = $13.6$ V']
        }
      ],
      analogies: 'Stationary orbits are like steps on a ladder: you can stand on step 1 or step 2, but you can never hover in mid-air between steps. Dropping from step 3 to step 2 releases the exact height difference as a flash of light.',
      commonMisconceptions: [
        'Balmer series lines are in the ultraviolet region (False: Balmer series is the ONLY series in the visible spectrum; Lyman is UV).'
      ]
    },
    {
      id: 'atom-8.3',
      topicNumber: '8.3',
      title: 'Nuclear Structure, Binding Energy Curve, and Nuclear Forces',
      titleTa: 'அணுக்கரு கட்டமைப்பு, பிணைப்பு ஆற்றல் வளைகோடு மற்றும் அணுக்கரு விசை',
      beginnerExplanation: 'The atomic nucleus consists of positively charged protons and neutral neutrons (collectively called nucleons). The total mass of a stable nucleus is always less than the sum of its individual constituent nucleons. This missing mass is called Mass Defect ($\Delta m$), converted into Binding Energy ($BE = \Delta m \cdot c^2$) holding the nucleus together.',
      beginnerExplanationTa: 'அணுக்கரு புரோட்டான்கள் மற்றும் நியூட்ரான்களைக் (நியூக்ளியான்கள்) கொண்டுள்ளது. ஒரு நிலையான அணுக்கருவின் நிறை, அதன் தனித்தனி நியூக்ளியான்களின் நிறைகளின் கூட்டுத்தொகையை விட குறைவாக இருக்கும். இந்த நிறை குறைபாடு ($\Delta m$) பிணைப்பு ஆற்றலாக ($BE = \Delta m \cdot c^2$) மாறுகிறது.',
      coreConcepts: [
        'Nuclear Radius: $R = R_0 A^{1/3}$ where $R_0 \\approx 1.2$ fm ($1.2 \\times 10^{-15}$ m) and $A$ is mass number.',
        'Nuclear Density: $\\rho_{nuc} = \\frac{\\text{Mass}}{\\text{Volume}} \\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$ (constant for ALL nuclei, independent of $A$).',
        'Mass Defect: $\\Delta m = [Z m_p + (A - Z) m_n] - M_{nucleus}$.',
        'Binding Energy: $BE = \\Delta m \\times 931.5\\text{ MeV}$.',
        'Binding Energy per Nucleon Curve ($BE/A$): Rises sharply from light nuclei, reaches maximum peak at $^{56}\\text{Fe}$ ($8.8$ MeV/nucleon), stays nearly constant $\\approx 8.5$ MeV for medium nuclei, and drops to $\\approx 7.6$ MeV for Uranium-238.',
        'Why Fission & Fusion Release Energy: Light nuclei fuse (Fusion) to move up to higher $BE/A$; heavy nuclei split (Fission) to move up to higher $BE/A$, releasing millions of electron-volts.',
        'Nuclear Force Properties: Strongest fundamental force in nature (100× stronger than electromagnetic), extremely short range ($\sim 1-2$ fm), charge independent (same between $p-p$, $p-n$, $n-n$), spin dependent, exhibits saturation property.'
      ],
      definitions: [
        {
          term: 'Mass Defect (நிறைக் குறைபாடு)',
          termTa: 'நிறைக் குறைபாடு',
          definitionEn: 'The difference between the total mass of the individual constituent nucleons (protons and neutrons) and the actual mass of the bound nucleus: $\\Delta m = [Z m_p + (A-Z)m_n] - M$.',
          definitionTa: 'தனித்தனி நியூக்ளியான்களின் மொத்த நிறைக்கும், உருவான அணுக்கருவின் உண்மையான நிறைக்கும் இடையே உள்ள வேறுபாடு நிறைக் குறைபாடு எனப்படும்.',
          keyPoints: ['SI Unit: atomic mass unit (u) or kg', '$1\\text{ u} = 1.6605 \\times 10^{-27}\\text{ kg} = 931.5\\text{ MeV}$']
        },
        {
          term: 'Binding Energy per Nucleon (நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல்)',
          termTa: 'நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல்',
          definitionEn: 'The average energy required to extract a single nucleon from the nucleus: $\\bar{BE} = BE / A$. It is a direct measure of nuclear stability.',
          definitionTa: 'அணுக்கருவிலிருந்து ஒரு நியூக்ளியானைப் பிரித்தெடுக்க தேவைப்படும் சராசரி ஆற்றல் நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல் எனப்படும் ($\bar{BE} = BE/A$). இது அணுக்கரு நிலைத்தன்மையின் அளவீடாகும்.',
          keyPoints: ['Maximum for $^{56}\\text{Fe}$ ($8.8\\text{ MeV}$)', 'Nuclei with higher $BE/A$ are more stable']
        }
      ],
      analogies: 'Binding energy is like glue: the more glue per brick in a castle ($BE/A$), the harder it is for a cannonball to knock a brick out.',
      commonMisconceptions: [
        'Heavier nuclei are denser than lighter nuclei (False: nuclear density is constant $\\approx 2.3 \\times 10^{17}\\text{ kg/m}^3$ for all elements because both mass and volume scale with mass number $A$).'
      ]
    },
    {
      id: 'atom-8.4',
      topicNumber: '8.4',
      title: 'Radioactivity, Decay Law, Nuclear Fission, and Fusion',
      titleTa: 'கதிரியக்கம், சிதைவு விதி, அணுக்கரு பிளவு மற்றும் இணைவு',
      beginnerExplanation: 'Unstable heavy nuclei spontaneously disintegrate, emitting alpha ($\alpha$), beta ($\beta$), or gamma ($\gamma$) radiation. The rate of disintegration is directly proportional to the number of radioactive nuclei present ($-\frac{dN}{dt} = \lambda N$). In nuclear fission, a heavy nucleus like Uranium-235 splits into lighter fragments releasing ~200 MeV energy. In nuclear fusion, light hydrogen nuclei combine under extreme heat, powering the sun.',
      beginnerExplanationTa: 'நிலையற்ற கனமான அணுக்கருக்கள் தானாகவே சிதைந்து ஆல்பா, பீட்டா, காமா கதிர்களை வெளியிடுகின்றன. கதிரியக்கச் சிதைவு வீதம் எஞ்சியுள்ள அணுக்கருக்களின் எண்ணிக்கைக்கு நேர்விகிதத்தில் இருக்கும் ($-dN/dt = \lambda N$). அணுக்கரு பிளவில் யுரேனியம்-235 பிளவுபட்டு ~200 MeV ஆற்றலைத் தருகிறது. அணுக்கரு இணைவில் ஹைட்ரஜன் அணுக்கள் இணைந்து சூரியனின் ஆற்றலை உருவாக்குகின்றன.',
      coreConcepts: [
        'Radioactive Decay Law: $N(t) = N_0 e^{-\\lambda t}$ where $\\lambda$ is the decay constant.',
        'Half-Life Period ($T_{1/2}$): Time required for half of the initial radioactive nuclei to decay: $T_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0.693}{\\lambda}$.',
        'Mean Life ($\\tau$): Average lifetime of a radioactive nucleus: $\\tau = \\frac{1}{\\lambda} = 1.44 T_{1/2}$.',
        'Activity / Decay Rate: $A = -\\frac{dN}{dt} = \\lambda N = A_0 e^{-\\lambda t}$. Units: Becquerel ($1\\text{ Bq} = 1\\text{ disintegration/s}$), Curie ($1\\text{ Ci} = 3.7 \\times 10^{10}\\text{ Bq}$).',
        'Soddy-Fajans Displacement Laws: $\\alpha$-decay decreases $Z$ by 2 and $A$ by 4 ($^A_Z X \\to ^{A-4}_{Z-2} Y + ^4_2 He$); $\\beta^-$-decay increases $Z$ by 1 ($^A_Z X \\to ^A_{Z+1} Y + e^- + \\bar{\\nu}$); $\\gamma$-decay changes neither $Z$ nor $A$.',
        'Nuclear Reactor Essential Components: 1) Nuclear Fuel ($^{235}\\text{U}$), 2) Moderator (Heavy water $D_2O$, Graphite slows down fast neutrons), 3) Control Rods (Cadmium/Boron absorbs excess neutrons to maintain $k = 1$), 4) Coolant (Water/Liquid Sodium transfers heat), 5) Shielding (Thick concrete lead wall).'
      ],
      definitions: [
        {
          term: 'Half-Life (அரை ஆயுட்காலம்)',
          termTa: 'அரை ஆயுட்காலம்',
          definitionEn: 'The time taken by a radioactive sample for the number of radioactive parent nuclei to reduce to half of its initial value: $T_{1/2} = \\frac{0.693}{\\lambda}$.',
          definitionTa: 'ஒரு கதிரியக்கப் பொருளில் உள்ள ஆரம்ப அணுக்கருக்களின் எண்ணிக்கை பாதியாகக் குறைய எடுத்துக்கொள்ளும் காலம் அரை ஆயுட்காலம் ($T_{1/2} = 0.693/\lambda$) எனப்படும்.',
          keyPoints: ['Completely independent of temperature, pressure, and chemical state', 'Purely a nuclear property']
        }
      ],
      analogies: 'Radioactive half-life is like a game where 1000 people flip a coin once every minute and leave if it shows heads: after 1 minute 500 remain, after 2 minutes 250 remain, after 3 minutes 125 remain.',
      commonMisconceptions: [
        'A radioactive substance decays completely in two half-lives (False: after $2 T_{1/2}$, $25\\%$ of original nuclei remain; after $n T_{1/2}$, $(1/2)^n$ fraction remains).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-ATOM-01',
      formula: 'r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} = n^2 a_0 \\quad (a_0 = 0.529\\text{ \\AA})',
      meaning: 'Radius of n-th stationary Bohr orbit in Hydrogen atom.',
      meaningTa: 'போர் அணு மாதிரியில் n-வது சுற்றுப்பாதையின் ஆரம்.',
      variables: [
        { symbol: 'n', name: 'Principal quantum number ($1, 2, 3, \\dots$)', nameTa: 'முதன்மை குவாண்டம் எண்', siUnit: 'Unitless integer', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'a_0', name: 'Bohr radius ($0.529 \\times 10^{-10}$ m)', nameTa: 'போர் ஆரம்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'h', name: 'Planck’s constant ($6.626 \\times 10^{-34}$ J·s)', nameTa: 'பிளாங்க் மாறிலி', siUnit: 'J·s', dimension: '[M^1 L^2 T^{-1}]' }
      ],
      siUnit: 'm (or Å)',
      dimension: '[M^0 L^1 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Radius scales as n squared times 0.529 Angstroms!'
    },
    {
      id: 'F-ATOM-02',
      formula: 'E_n = -\\frac{m e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6}{n^2}\\text{ eV}',
      meaning: 'Total energy of an electron in the n-th Bohr orbit of Hydrogen atom.',
      meaningTa: 'n-வது சுற்றுப்பாதையில் எலக்ட்ரானின் மொத்த ஆற்றல்.',
      variables: [
        { symbol: 'E_n', name: 'Total energy in n-th orbit', nameTa: 'மொத்த ஆற்றல்', siUnit: 'eV or J', dimension: '[M^1 L^2 T^{-2}]' },
        { symbol: 'n', name: 'Principal quantum number', nameTa: 'முதன்மை குவாண்டம் எண்', siUnit: 'Integer', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'eV (or Joules)',
      dimension: '[M^1 L^2 T^{-2}]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Energy = -13.6 / n² eV'
    },
    {
      id: 'F-ATOM-03',
      formula: '\\bar{\\nu} = \\frac{1}{\\lambda} = R_H \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)',
      meaning: 'Rydberg Formula for wave number and wavelength of emitted spectral lines in Hydrogen.',
      meaningTa: 'ஹைட்ரஜன் அலை எண் மற்றும் அலைநீளத்திற்கான ரிட்பெர்க் சமன்பாடு.',
      variables: [
        { symbol: 'R_H', name: 'Rydberg constant ($1.09737 \\times 10^7\\text{ m}^{-1}$)', nameTa: 'ரிட்பெர்க் மாறிலி', siUnit: 'm⁻¹', dimension: '[M^0 L^{-1} T^0]' },
        { symbol: 'n_1, n_2', name: 'Lower and upper orbit quantum numbers ($n_2 > n_1$)', nameTa: 'கீழ் மற்றும் உயர் மட்ட குவாண்டம் எண்கள்', siUnit: 'Integers', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'm⁻¹',
      dimension: '[M^0 L^{-1} T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Wave Number = R_H · (1/n1² - 1/n2²)'
    },
    {
      id: 'F-ATOM-04',
      formula: 'N(t) = N_0 e^{-\\lambda t} \\quad \\text{and} \\quad T_{1/2} = \\frac{0.693}{\\lambda}',
      meaning: 'Radioactive Decay Law and Half-life period relationship.',
      meaningTa: 'கதிரியக்கச் சிதைவு விதி மற்றும் அரை ஆயுட்காலம்.',
      variables: [
        { symbol: 'N(t)', name: 'Number of undecayed nuclei at time t', nameTa: 't நேரத்தில் சிதைவடையாத அணுக்கருக்கள்', siUnit: 'Count (Unitless)', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'N_0', name: 'Initial number of radioactive nuclei', nameTa: 'ஆரம்ப அணுக்கருக்கள்', siUnit: 'Count', dimension: '[M^0 L^0 T^0]' },
        { symbol: '\\lambda', name: 'Decay constant (disintegration constant)', nameTa: 'சிதைவு மாறிலி', siUnit: 's⁻¹', dimension: '[M^0 L^0 T^{-1}]' },
        { symbol: 'T_{1/2}', name: 'Half-life period', nameTa: 'அரை ஆயுட்காலம்', siUnit: 's (or years/days)', dimension: '[M^0 L^0 T^1]' }
      ],
      siUnit: 's and s⁻¹',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Half Life = 0.693 / Lambda'
    }
  ],
  derivations: [
    {
      id: 'DER-ATOM-01',
      title: 'Derivation of Radius and Total Energy of Electron in Bohr’s Hydrogen Atom',
      titleTa: 'போர் ஹைட்ரஜன் மாதிரியில் எலக்ட்ரானின் ஆரம் மற்றும் ஆற்றலைத் தருவித்தல்',
      aim: 'To derive expressions for the radius rn = ε0 n² h² / (π m e²) and total energy En = -13.6 / n² eV for the n-th orbit of Hydrogen atom.',
      given: [
        'A single electron of mass m and charge -e orbiting a stationary nucleus of charge +e at radius r with speed v.',
        'Coulomb electrostatic attraction provides the necessary centripetal force.',
        'Bohr’s angular momentum quantization condition: m v r = n h / (2π).'
      ],
      toProve: 'r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} \\quad \\text{and} \\quad E_n = -\\frac{m e^4}{8\\varepsilon_0^2 n^2 h^2}',
      steps: [
        {
          stepNumber: 1,
          description: 'Equate the electrostatic attraction force to the centripetal force.',
          descriptionTa: 'நிலைமின் கவர்ச்சி விசியை மையநோக்கு விசைக்கு சமப்படுத்துக.',
          equation: '\\frac{1}{4\\pi\\varepsilon_0}\\frac{e^2}{r^2} = \\frac{m v^2}{r} \\implies m v^2 = \\frac{e^2}{4\\pi\\varepsilon_0 r} \\quad \\text{--- (1)}',
          note: 'Coulomb force balances centripetal acceleration.'
        },
        {
          stepNumber: 2,
          description: 'From Bohr’s quantization condition m v r = n h / (2π), express velocity v = n h / (2π m r).',
          descriptionTa: 'போரின் குவாண்டமாக்கல் நிபந்தனையிலிருந்து திசைவேகம் v = nh / (2πmr) எனக் காண்க.',
          equation: 'v = \\frac{n h}{2\\pi m r} \\quad \\text{--- (2)}',
          note: 'Square this: v² = n² h² / (4π² m² r²).'
        },
        {
          stepNumber: 3,
          description: 'Substitute equation (2) into equation (1) and solve for radius r.',
          descriptionTa: 'சமன்பாடு (2)-ஐ (1)-ல் பிரதியிட்டு ஆரம் r-ஐக் காண்க.',
          equation: 'm \\left(\\frac{n^2 h^2}{4\\pi^2 m^2 r^2}\\right) = \\frac{e^2}{4\\pi\\varepsilon_0 r} \\implies r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} = n^2 a_0 \\quad \\text{--- (3)}',
          note: 'For n = 1, r1 = a0 = 0.529 Å.'
        },
        {
          stepNumber: 4,
          description: 'Calculate Kinetic Energy K = ½ m v² = e² / (8πε0 r).',
          descriptionTa: 'இயக்க ஆற்றல் K = e² / (8πε0 r) எனக் கணக்கிடுக.',
          equation: 'K = \\frac{1}{2}m v^2 = \\frac{e^2}{8\\pi\\varepsilon_0 r} \\quad \\text{--- (4)}',
          note: 'Kinetic energy is always positive.'
        },
        {
          stepNumber: 5,
          description: 'Calculate Electrostatic Potential Energy U = -e² / (4πε0 r).',
          descriptionTa: 'நிலை மின்னழுத்த ஆற்றல் U = -e² / (4πε0 r) எனக் கணக்கிடுக.',
          equation: 'U = -\\frac{e^2}{4\\pi\\varepsilon_0 r} \\quad \\text{--- (5)}',
          note: 'Potential energy is negative because of attractive forces.'
        },
        {
          stepNumber: 6,
          description: 'Total Energy E = K + U = e² / (8πε0 r) - e² / (4πε0 r) = -e² / (8πε0 r). Substitute rn from equation (3).',
          descriptionTa: 'மொத்த ஆற்றல் E = K + U எனக் கூட்டி r மதிப்பை பிரதியிடுக.',
          equation: 'E_n = -\\frac{m e^4}{8\\varepsilon_0^2 n^2 h^2} = -\\frac{13.6}{n^2}\\text{ eV}',
          note: 'Negative total energy confirms electron is bound to the nucleus.'
        }
      ],
      finalEquation: 'r_n = \\frac{\\varepsilon_0 n^2 h^2}{\\pi m e^2} = n^2 a_0 \\quad \\text{and} \\quad E_n = -\\frac{13.6}{n^2}\\text{ eV}',
      assumptions: [
        'Nucleus is infinitely heavy compared to the electron and remains stationary at the origin.',
        'Electron moves in non-radiating circular classical orbits.'
      ],
      physicalMeaning: 'Explains atomic stability and quantization of energy levels in hydrogen, showing that ground state requires 13.6 eV of energy to liberate the electron.',
      physicalMeaningTa: 'ஹைட்ரஜன் அணுவின் நிலைத்தன்மை மற்றும் தனித்துவமான ஆற்றல் மட்டங்களை விளக்குகிறது. அடிநிலை எலக்ட்ரானை வெளியேற்ற 13.6 eV ஆற்றல் தேவை என்பதை நிறுவுகிறது.',
      commonMistakes: [
        'Missing the negative sign in total energy En.',
        'Writing potential energy U with factor of 8πε0 instead of 4πε0.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-ATOM-02',
      title: 'Derivation of Radioactive Decay Law (N = N0 e^-λt) and Half-Life Period',
      titleTa: 'கதிரியக்கச் சிதைவு விதி மற்றும் அரை ஆயுட்காலத்திற்கான சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive the radioactive exponential decay law N = N0 e^-λt and establish the relation T1/2 = 0.693 / λ.',
      given: [
        'Initial number of radioactive parent nuclei at t = 0 is N0.',
        'Number of undecayed radioactive nuclei at time t is N.',
        'Disintegration rate (-dN/dt) is directly proportional to N.'
      ],
      toProve: 'N(t) = N_0 e^{-\\lambda t} \\quad \\text{and} \\quad T_{1/2} = \\frac{0.693}{\\lambda}',
      steps: [
        {
          stepNumber: 1,
          description: 'State the fundamental law of radioactive disintegration: rate of decay is proportional to N.',
          descriptionTa: 'கதிரியக்கச் சிதைவு வீதம் எஞ்சியுள்ள அணுக்கருக்களின் எண்ணிக்கைக்கு நேர்விகிதத்தில் இருக்கும்.',
          equation: '-\\frac{dN}{dt} \\propto N \\implies -\\frac{dN}{dt} = \\lambda N \\quad \\text{--- (1)}',
          note: 'Negative sign indicates that N decreases with time t.'
        },
        {
          stepNumber: 2,
          description: 'Separate variables and integrate both sides from t = 0 (N = N0) to t (N = N).',
          descriptionTa: 'மாறிகளைப் பிரித்து இருபுறமும் தொகையிடுக.',
          equation: '\\int_{N_0}^N \\frac{dN}{N} = -\\lambda \\int_0^t dt \\implies [\\ln N]_{N_0}^N = -\\lambda t',
          note: 'Natural logarithm integral gives ln(N / N0) = -λt.'
        },
        {
          stepNumber: 3,
          description: 'Take exponential on both sides to obtain the decay law.',
          descriptionTa: 'இருபுறமும் அடுக்குக்குறியீடு எடுக்க சிதைவுச் சமன்பாடு கிடைக்கிறது.',
          equation: '\\frac{N}{N_0} = e^{-\\lambda t} \\implies N(t) = N_0 e^{-\\lambda t} \\quad \\text{--- (2)}',
          note: 'Number of undecayed nuclei decreases exponentially with time.'
        },
        {
          stepNumber: 4,
          description: 'At half-life period t = T1/2, exactly half the nuclei remain: N = N0 / 2.',
          descriptionTa: 'அரை ஆயுட்காலத்தில் t = T1/2, N = N0 / 2 எனப் பிரதியிடுக.',
          equation: '\\frac{N_0}{2} = N_0 e^{-\\lambda T_{1/2}} \\implies e^{\\lambda T_{1/2}} = 2 \\implies \\lambda T_{1/2} = \\ln 2 = 0.69315',
          note: 'Hence Half-life T1/2 = 0.693 / λ.'
        }
      ],
      finalEquation: 'N(t) = N_0 e^{-\\lambda t} \\quad \\text{and} \\quad T_{1/2} = \\frac{0.693}{\\lambda}',
      assumptions: [
        'Radioactive decay is a purely spontaneous, random statistical process unaffected by external temperature, pressure, or chemical bonding.'
      ],
      physicalMeaning: 'Proves that the fraction of undecayed radioactive nuclei decays exponentially with time, with a fixed characteristic half-life for each isotope.',
      physicalMeaningTa: 'கதிரியக்க அணுக்கருக்கள் காலத்தைப் பொறுத்து அடுக்குக்குறி முறையில் குறைகின்றன என்பதையும், ஒவ்வொரு தனிமத்திற்கும் நிலையான அரை ஆயுட்காலம் உண்டு என்பதையும் காட்டுகிறது.',
      commonMistakes: [
        'Omitting the negative sign in the differential equation (-dN/dt = λN).',
        'Confusing half-life (T1/2 = 0.693/λ) with mean life (τ = 1/λ).'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'Hydrogen Spectral Line Wavelength Calculation (Balmer Series H-alpha)',
      question: 'Calculate the wavelength of the first spectral line (H-alpha line) of the Balmer series in the hydrogen spectrum when an electron jumps from n = 3 to n = 2 (Rydberg constant R = 1.097 × 10⁷ m⁻¹).',
      questionTa: 'ஹைட்ரஜன் நிறமாலையில் பால்மர் தொடரின் முதல் வரியான H-ஆல்பா வரியின் (n = 3 இலிருந்து n = 2 க்கு எலக்ட்ரான் தாவும்போது) அலைநீளத்தைக் காண்க (ரிட்பெர்க் மாறிலி R = 1.097 × 10⁷ m⁻¹).',
      level: 'Easy',
      given: { 'n1': '2', 'n2': '3', 'R': '1.097 × 10⁷ m⁻¹' },
      required: 'Wavelength λ (in nm / Å)',
      formulaUsed: '\\frac{1}{\\lambda} = R \\left(\\frac{1}{n_1^2} - \\frac{1}{n_2^2}\\right)',
      unitConversions: 'Convert meters to nm (×10⁹) or Å (×10¹⁰).',
      steps: [
        {
          stepNumber: 1,
          description: 'Substitute n1 = 2 and n2 = 3 into the Rydberg formula.',
          math: '\\frac{1}{\\lambda} = 1.097 \\times 10^7 \\left(\\frac{1}{2^2} - \\frac{1}{3^2}\\right) = 1.097 \\times 10^7 \\left(\\frac{1}{4} - \\frac{1}{9}\\right) = 1.097 \\times 10^7 \\times \\frac{5}{36} = 1.5236 \\times 10^6 \\text{ m}^{-1}'
        },
        {
          stepNumber: 2,
          description: 'Invert to find wavelength λ.',
          math: '\\lambda = \\frac{1}{1.5236 \\times 10^6} = 6.563 \\times 10^{-7} \\text{ m} = 656.3 \\text{ nm} = 6563 \\text{ \\AA}'
        }
      ],
      finalAnswer: '656.3 nm (or 6563 Å / Red visible line)',
      siUnit: 'm (or nm)',
      shortcutMethod: 'λ = 36 / (5 × R) = 36 / (5 × 1.097e7) = 656.3 nm.',
      commonErrors: 'Using n1 = 1 (which is Lyman series) instead of n1 = 2 for Balmer series.',
      examTip: 'Remember: Lyman n1=1 (UV), Balmer n1=2 (Visible), Paschen n1=3 (IR).'
    },
    {
      title: 'Radioactive Half-Life and Undecayed Fraction Calculation',
      question: 'A radioactive isotope has a half-life of 20 days. If the initial mass is 80 mg, calculate: (i) the decay constant λ in s⁻¹, (ii) the mass of the isotope remaining undecayed after 60 days, and (iii) the fraction of the sample that has decayed.',
      questionTa: 'ஒரு கதிரியக்கத் தனிமத்தின் அரை ஆயுட்காலம் 20 நாட்கள். ஆரம்ப நிறை 80 mg எனில்: (i) சிதைவு மாறிலி λ (s⁻¹-ல்), (ii) 60 நாட்களுக்குப் பிறகு எஞ்சியிருக்கும் நிறை, (iii) சிதைவடைந்த பகுதியின் பின்னம் ஆகியவற்றைக் காண்க.',
      level: 'Medium',
      given: { 'T1/2': '20 days = 20 × 86400 s = 1.728 × 10⁶ s', 'm0': '80 mg', 't': '60 days' },
      required: 'Decay constant λ, remaining mass m(t), and decayed fraction',
      formulaUsed: '\\lambda = \\frac{0.693}{T_{1/2}}, \\quad n = \\frac{t}{T_{1/2}}, \\quad m = m_0 \\left(\\frac{1}{2}\\right)^n',
      unitConversions: 'Convert days to seconds for λ; use ratio of days for n.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate decay constant λ = 0.693 / T1/2 in s⁻¹.',
          math: '\\lambda = \\frac{0.693}{1.728 \\times 10^6 \\text{ s}} = 4.01 \\times 10^{-7} \\text{ s}^{-1} \\quad (\\text{or } 0.03465 \\text{ day}^{-1})'
        },
        {
          stepNumber: 2,
          description: 'Calculate the number of half-lives n = t / T1/2 = 60 / 20 = 3 half-lives.',
          math: 'n = \\frac{60}{20} = 3'
        },
        {
          stepNumber: 3,
          description: 'Calculate remaining mass m = m0 × (1/2)³ = 80 × (1/8) = 10 mg.',
          math: 'm = 80 \\text{ mg} \\times \\left(\\frac{1}{2}\\right)^3 = 80 \\times \\frac{1}{8} = 10 \\text{ mg}'
        },
        {
          stepNumber: 4,
          description: 'Calculate fraction decayed = (m0 - m) / m0 = (80 - 10)/80 = 70/80 = 7/8 = 87.5%.',
          math: '\\text{Decayed Fraction} = 1 - \\frac{1}{8} = \\frac{7}{8} = 87.5\\%'
        }
      ],
      finalAnswer: 'Decay constant λ = 4.01 × 10⁻⁷ s⁻¹, Remaining mass = 10 mg, Decayed fraction = 7/8 (87.5%)',
      siUnit: 'mg, s⁻¹, and percentage',
      shortcutMethod: '80 mg → 40 mg (day 20) → 20 mg (day 40) → 10 mg (day 60). Remaining = 10 mg, Decayed = 70 mg (87.5%).',
      commonErrors: 'Confusing remaining mass (1/8) with decayed mass (7/8).',
      examTip: 'Always write both the remaining fraction and the decayed fraction clearly.'
    },
    {
      title: 'Binding Energy per Nucleon and Mass Defect of Helium Nucleus',
      question: 'Calculate the mass defect, binding energy (in MeV), and binding energy per nucleon (in MeV/nucleon) for a Helium nucleus ⁴₂He. (Given: mass of proton mp = 1.007276 u, mass of neutron mn = 1.008665 u, mass of Helium nucleus M = 4.001506 u, 1 u = 931.5 MeV).',
      questionTa: 'ஹீலியம் அணுக்கருவின் ⁴₂He நிறைக் குறைபாடு, பிணைப்பு ஆற்றல் (MeV-ல்) மற்றும் நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல் ஆகியவற்றைக் காண்க (mp = 1.007276 u, mn = 1.008665 u, M = 4.001506 u, 1 u = 931.5 MeV).',
      level: 'Exam-Level',
      given: { 'Z': '2', 'A': '4', 'N': '2', 'mp': '1.007276 u', 'mn': '1.008665 u', 'M': '4.001506 u' },
      required: 'Mass defect Δm, Binding Energy BE, and BE/A',
      formulaUsed: '\\Delta m = [Z m_p + (A - Z) m_n] - M, \\quad BE = \\Delta m \\times 931.5\\text{ MeV}, \\quad \\bar{BE} = \\frac{BE}{A}',
      unitConversions: 'Multiply Δm in u by 931.5 to get energy directly in MeV.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate mass of 2 protons: 2 × 1.007276 u = 2.014552 u.',
          math: '2 m_p = 2 \\times 1.007276 = 2.014552 \\text{ u}'
        },
        {
          stepNumber: 2,
          description: 'Calculate mass of 2 neutrons: 2 × 1.008665 u = 2.017330 u.',
          math: '2 m_n = 2 \\times 1.008665 = 2.017330 \\text{ u}'
        },
        {
          stepNumber: 3,
          description: 'Total nucleon mass = 2.014552 + 2.017330 = 4.031882 u. Mass defect Δm = 4.031882 - 4.001506 = 0.030376 u.',
          math: '\\Delta m = 4.031882 - 4.001506 = 0.030376 \\text{ u}'
        },
        {
          stepNumber: 4,
          description: 'Calculate Binding Energy BE = 0.030376 × 931.5 MeV = 28.295 MeV.',
          math: 'BE = 0.030376 \\times 931.5 = 28.295 \\text{ MeV}'
        },
        {
          stepNumber: 5,
          description: 'Calculate Binding Energy per nucleon BE/A = 28.295 / 4 = 7.074 MeV/nucleon.',
          math: '\\bar{BE} = \\frac{28.295 \\text{ MeV}}{4} = 7.074 \\text{ MeV/nucleon}'
        }
      ],
      finalAnswer: 'Mass Defect Δm = 0.030376 u, Binding Energy = 28.30 MeV, BE/nucleon = 7.074 MeV/nucleon',
      siUnit: 'u, MeV, and MeV/nucleon',
      shortcutMethod: 'Δm = 2(1.007276 + 1.008665) - 4.001506 = 0.030376 u; BE = 0.030376 × 931.5 = 28.3 MeV; BE/4 = 7.07 MeV.',
      commonErrors: 'Rounding off nucleon masses too early (always keep at least 6 decimal places during calculation).',
      examTip: 'Carry out subtractions with full decimal precision before multiplying by 931.5 MeV.'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-ATOM-01',
      name: 'Energy Level Diagram of Hydrogen Atom and Spectral Series',
      nameTa: 'ஹைட்ரஜன் அணுவின் ஆற்றல் மட்ட வரைபடம் மற்றும் நிறமாலை தொடர்கள்',
      purpose: 'Depicts the quantized energy levels of Hydrogen from n = 1 to n = ∞ and vertical downward electron transition arrows showing Lyman, Balmer, Paschen, Brackett, and Pfund series.',
      components: ['Horizontal lines representing energy levels n=1 (-13.6 eV), n=2 (-3.4 eV), n=3 (-1.51 eV), n=4 (-0.85 eV), n=5 (-0.54 eV), n=∞ (0 eV)', 'Downward transition arrows for each series', 'UV, Visible, and Infrared spectral region labels'],
      labelsEn: ['Ground State n=1 (-13.6 eV)', 'First Excited State n=2 (-3.4 eV)', 'Lyman Series (UV)', 'Balmer Series (Visible: Hα, Hβ, Hγ)', 'Paschen Series (IR)', 'Brackett Series (IR)', 'Pfund Series (Far IR)', 'Ionization Limit n=∞ (0 eV)'],
      labelsTa: ['அடிநிலை n=1 (-13.6 eV)', 'முதல் கிளர்ச்சி நிலை n=2 (-3.4 eV)', 'லைமன் தொடர் (புற ஊதா)', 'பால்மர் தொடர் (கண்ணுறு ஒளி)', 'பாஷன் தொடர் (அகச்சிவப்பு)', 'பிராக்கெட் தொடர்', 'ஃபண்ட் தொடர்', 'அயனியாக்க நிலை n=∞ (0 eV)'],
      stepByStepExplanation: [
        'Draw horizontal parallel lines with decreasing spacing upwards, representing n=1 (-13.6 eV) at bottom, n=2 (-3.4 eV), n=3 (-1.51 eV), n=4 (-0.85 eV), up to n=∞ (0 eV).',
        'Draw downward arrows landing on n=1 from higher orbits (n=2,3,4,..) and label Lyman Series (Ultraviolet).',
        'Draw downward arrows landing on n=2 from higher orbits (n=3,4,5,..) and label Balmer Series (Visible).',
        'Draw arrows landing on n=3 (Paschen), n=4 (Brackett), and n=5 (Pfund) in the Infrared region.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Drawing evenly spaced energy level lines (energy spacing shrinks drastically as n increases, proportional to 1/n²).'],
      aiImagePrompt: 'Textbook scientific illustration of the Hydrogen atom energy level diagram. Horizontal energy levels from n=1 to infinity with exact electron-volt values, color-coded downward transition arrows for Lyman, Balmer, Paschen, Brackett, and Pfund spectral series, clean white background.'
    },
    {
      id: 'DIAG-ATOM-02',
      name: 'Schematic Diagram of a Nuclear Power Reactor',
      nameTa: 'அணு உலை அமைப்பு வரைபடம்',
      purpose: 'Shows the core components of a nuclear reactor including reactor pressure vessel, uranium fuel rods, graphite/heavy-water moderator, cadmium control rods, coolant circulation pump, steam generator, turbine, and thick concrete containment shield.',
      components: ['Reactor Core Vessel', 'Uranium-235 Fuel Rods', 'Cadmium/Boron Control Rods', 'Moderator (Graphite/Heavy Water)', 'Primary Coolant Loop with Pump', 'Heat Exchanger / Steam Generator', 'Steam Turbine & Electric Generator', 'Biological Shield (Thick Concrete/Lead)'],
      labelsEn: ['Uranium Fuel Rods', 'Control Rods (Cadmium/Boron)', 'Moderator (D2O/Graphite)', 'Coolant In/Out', 'Reactor Core Pressure Vessel', 'Steam Generator Heat Exchanger', 'Steam Turbine & Alternator', 'Biological Concrete Shield'],
      labelsTa: ['யுரேனியம் எரிபொருள் தண்டுகள்', 'கட்டுப்படுத்தும் தண்டுகள் (காட்மியம்)', 'தணிப்பான் (கனநீர்/கிராபைட்)', 'குளிர்விப்பான்', 'அணுக்கரு உலைக் கலம்', 'நீராவி இயற்றி', 'நீராவி டர்பைன் & ஜெனரேட்டர்', 'தடிமனான கான்கிரீட் கவசம்'],
      stepByStepExplanation: [
        'Draw a heavy rectangular reactor core vessel with a thick outer concrete shield.',
        'Inside the core, draw vertical Uranium fuel rods interspersed with Cadmium control rods and surrounding moderator.',
        'Draw the closed primary coolant circuit looping through the core to a steam generator heat exchanger.',
        'Show secondary loop driving the steam turbine connected to an electric generator.',
        'Label all 5 key functional components clearly.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Confusing the functions of the moderator (slows down fast neutrons) and control rods (absorbs excess neutrons).'],
      aiImagePrompt: 'Clean technical vector diagram of a Nuclear Power Reactor. Cross-section showing reactor core with uranium fuel rods, cadmium control rods, graphite moderator, primary coolant loop connected to heat exchanger, steam turbine generator, and heavy concrete biological shield, clean educational style on white background.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-ATOM-01',
      name: 'Binding Energy per Nucleon (BE/A) vs Mass Number (A) Curve',
      nameTa: 'நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல் (BE/A) மற்றும் நிறை எண் (A) வளைகோடு',
      xAxis: 'Mass Number (A)',
      yAxis: 'Binding Energy per Nucleon (BE/A) in MeV/nucleon',
      units: 'Mass number on X-axis, MeV/nucleon on Y-axis (0 to 10 MeV)',
      shape: 'Rapid rise from origin with sharp peaks (⁴He, ¹²C, ¹⁶O), broad flat maximum plateau at ~8.5-8.8 MeV, and slow steady decrease for heavy nuclei down to 7.6 MeV',
      importantPoints: [
        'Sharp local peaks for even-even stable light nuclei: ⁴He, ¹²C, ¹⁶O.',
        'Maximum peak at Iron-56 (⁵⁶Fe) with BE/A = 8.8 MeV/nucleon (most stable nucleus in nature).',
        'Nearly flat broad plateau between A = 30 and A = 170 with BE/A ≈ 8.5 MeV/nucleon due to saturation of nuclear forces.',
        'Gradual decrease for heavy nuclei (e.g., ²³⁸U at ~7.6 MeV/nucleon) due to increasing electrostatic Coulomb repulsion among protons.',
        'Explains why Light Nuclei undergo Fusion and Heavy Nuclei undergo Fission to reach higher stability.'
      ],
      physicalMeaning: 'Visual proof of nuclear stability and the physical origin of both nuclear fission and thermonuclear fusion energy releases.',
      mathematicalRelationship: '\\bar{BE} = \\frac{BE}{A} = \\frac{\\Delta m \\cdot c^2}{A}',
      howToDrawInExam: 'Plot A on X-axis (0 to 240) and BE/A on Y-axis (0 to 10 MeV). Start at origin, draw spikes for ⁴He, ¹²C, ¹⁶O, peak at ⁵⁶Fe (8.8 MeV), draw a flat top at ~8.5 MeV up to A=120, then gently slope down to 7.6 MeV at A=238.',
      commonMistakes: ['Forgetting the maximum peak label at ⁵⁶Fe (8.8 MeV/nucleon).'],
      aiGraphPrompt: 'Scientifically precise graph of Binding Energy per Nucleon (BE/A in MeV) vs Mass Number (A from 0 to 240). Showing sharp peaks for He-4, C-12, O-16, maximum peak at Fe-56 (8.8 MeV), and drop to U-238 (7.6 MeV), highlighting Nuclear Fusion on the left and Nuclear Fission on the right, clean textbook style on white background.'
    }
  ],
  experiments: [
    {
      id: 'EXP-ATOM-01',
      name: 'Millikan’s Oil Drop Experiment for Quantization of Charge',
      nameTa: 'மில்லிகனின் எண்ணெய் துளி ஆய்வு மூலம் மின்னூட்டக் குவாண்டமாக்கலை நிரூபித்தல்',
      apparatus: ['Millikan oil drop chamber', 'Atomizer', 'High-voltage DC power supply (0-5000 V)', 'Measuring microscope with micrometer eyepiece', 'X-ray source for ionizing air'],
      principle: 'By balancing the downward gravitational force and upward buoyant/viscous forces with an adjustable upward electrostatic force (qE), the charge on an oil drop is calculated as q = ne.',
      principleTa: 'ஈர்ப்பு விசை, பாகியல் விசை மற்றும் மின்புல விசை ($qE$) ஆகியவற்றை சமநிலைப்படுத்துவதன் மூலம் எண்ணெய் துளியின் மின்னூட்டம் $q = ne$ எனக் கணக்கிடப்படுகிறது.',
      procedure: [
        'Spray fine mist of clock oil into the chamber using an atomizer.',
        'Under gravity alone, measure the terminal falling velocity v1 of a selected oil drop to determine its radius r using Stokes’ Law (6πηrv1 = 4/3 πr³(ρ - σ)g).',
        'Ionize the air inside the chamber with X-rays so that the oil drop picks up free electrons.',
        'Apply high electric field E and adjust voltage until the drop rises with constant velocity v2 (or remains suspended stationary).',
        'Calculate charge q from the velocity balance equations for hundreds of drops.'
      ],
      observation: 'Calculated charges were always integer multiples of a single fundamental minimum value: q = 1.6 × 10⁻¹⁹ C, 3.2 × 10⁻¹⁹ C, 4.8 × 10⁻¹⁹ C, etc. (q = ne).',
      result: 'Electric charge is strictly quantized with fundamental elementary charge e = 1.602 × 10⁻¹⁹ C.',
      precautions: [
        'Low-volatility oil must be used so that drop mass does not change due to evaporation during observation.',
        'The chamber must be protected from convective air currents and temperature fluctuations.'
      ],
      realLifeImportance: 'Established the foundation of modern particle physics and confirmed that electrons carry discrete invariant charges.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Inside the Atom & Nucleus: Secrets of Quantum Orbits & Nuclear Energy',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Power Hidden Inside a Teaspoon of Uranium',
        explanationEn: 'A single pellet of Uranium-235 smaller than your fingertip produces as much energy as 3 tons of burning coal! Where does this colossal energy come from? From the mass defect converted into pure binding energy when the atomic nucleus splits!',
        explanationTa: 'ஒரு சிறிய யுரேனியம் மாத்திரை 3 டன் நிலக்கரி தரும் ஆற்றலை வழங்குகிறது! இந்த பிரம்மாண்ட ஆற்றல் எங்கிருந்து வருகிறது? அணுக்கரு பிளவின் போது நிறைக் குறைபாடு தூய பிணைப்பு ஆற்றலாக மாறுவதால் கிடைக்கிறது!',
        animationDescription: '3D Uranium-235 nucleus capturing a slow thermal neutron, oscillating into a dumbbell shape, and violently splitting into Barium and Krypton with 3 fast neutrons and glowing gamma energy flashes.',
        keywordsDisplayed: ['Nuclear Fission', 'Mass Defect Δm', 'E = Δm · c²', '~200 MeV per Fission'],
        interactiveQuestion: {
          question: 'In a nuclear fission reaction of ²³⁵U, the average energy released per fission is approximately:',
          questionTa: 'ஒரு யுரேனியம்-235 அணுக்கரு பிளவின் போது வெளியாகும் சராசரி ஆற்றல் சுமார்:',
          options: ['200 MeV', '200 eV', '13.6 eV', '2000 J'],
          optionsTa: ['200 MeV', '200 eV', '13.6 eV', '2000 J'],
          correctIndex: 0,
          explanation: 'Each ²³⁵U fission releases approximately 200 MeV of nuclear energy, mostly carried as kinetic energy by the fission fragments.'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Bohr’s Quantum Orbits of Hydrogen',
        explanationEn: 'Niels Bohr showed that electrons can only live on discrete quantized energy levels given by En = -13.6 / n² eV. When an electron drops from n=3 to n=2, it fires out a red photon of wavelength 656.3 nm (Balmer series)!',
        explanationTa: 'போர் அணு மாதிரியின்படி எலக்ட்ரான்கள் En = -13.6 / n² eV என்ற குறிப்பிட்ட ஆற்றல் மட்டங்களில் மட்டுமே சுற்றுகின்றன. n=3 இலிருந்து n=2 க்கு தாவும்போது 656.3 nm அலைநீள சிவப்பு ஒளியை உமிழ்கிறது.',
        animationDescription: '3D planetary atom with concentric orbital tracks; an electron leaps from orbit 3 down to orbit 2, emitting an expanding red sinusoidal wave packet.',
        keywordsDisplayed: ['Bohr Postulates', 'Quantized Momentum mvr = nh/2π', 'Radius rn = n² · 0.529 Å', 'Energy En = -13.6/n² eV'],
        interactiveQuestion: {
          question: 'What is the radius of the second orbit (n = 2) of a hydrogen atom in terms of Bohr radius a0?',
          questionTa: 'ஹைட்ரஜன் அணுவின் 2-வது சுற்றுப்பாதையின் ஆரம் போர் ஆரம் a0-ன் மடங்கில் என்ன?',
          options: ['4 a0 (2.116 Å)', '2 a0', '8 a0', 'a0 / 2'],
          optionsTa: ['4 a0 (2.116 Å)', '2 a0', '8 a0', 'a0 / 2'],
          correctIndex: 0,
          explanation: 'Since rn = n² · a0, for n = 2, r2 = 2² · a0 = 4 a0 = 4 × 0.529 Å = 2.116 Å.'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Nuclear Physics: The Binding Energy Curve',
        explanationEn: 'The Binding Energy per nucleon curve peaks at Iron-56 (8.8 MeV/nucleon), making Iron the most tightly bound and stable nucleus in the universe. Light nuclei fuse together and heavy nuclei split apart to climb toward Iron’s peak stability!',
        explanationTa: 'பிணைப்பு ஆற்றல் வளைகோடு இரும்பு-56 அணுக்கருவில் உச்சத்தை (8.8 MeV/நியூக்ளியான்) அடைகிறது. எனவே இரும்பு பேரண்டத்திலேயே மிகவும் நிலையான அணுக்கருவாகும்.',
        animationDescription: '3D binding energy landscape mountain showing light hydrogen climbing the fusion slope on the left and heavy uranium sliding down the fission slope on the right to reach the Fe-56 summit.',
        keywordsDisplayed: ['Binding Energy Curve', 'Peak at ⁵⁶Fe (8.8 MeV)', 'Nuclear Fusion (Light)', 'Nuclear Fission (Heavy)'],
        interactiveQuestion: {
          question: 'Which nucleus has the highest binding energy per nucleon (most stable nucleus)?',
          questionTa: 'நியூக்ளியான் ஒன்றுக்கான அதிகபட்ச பிணைப்பு ஆற்றலைக் கொண்ட (மிகவும் நிலையான) அணுக்கரு எது?',
          options: ['Iron-56 (⁵⁶Fe)', 'Uranium-235 (²³⁵U)', 'Helium-4 (⁴He)', 'Carbon-12 (¹²C)'],
          optionsTa: ['இரும்பு-56 (⁵⁶Fe)', 'யுரேனியம்-235 (²³⁵U)', 'ஹீலியம்-4 (⁴He)', 'கார்பன்-12 (¹²C)'],
          correctIndex: 0,
          explanation: 'Iron-56 (⁵⁶Fe) has the maximum BE/A of 8.8 MeV/nucleon, making it the most stable nucleus.'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Radioactivity: The Clock of Nature',
        explanationEn: 'Radioactive decay follows N(t) = N0 e^-λt with a constant half-life T1/2 = 0.693/λ. This unalterable nuclear clock allows archaeologists to determine the exact age of ancient wooden ships and Egyptian mummies using Carbon-14 dating!',
        explanationTa: 'கதிரியக்கச் சிதைவு N(t) = N0 e^-λt மற்றும் T1/2 = 0.693/λ சமன்பாட்டைப் பின்பற்றுகிறது. இந்த இயற்கை கடிகாரத்தைப் பயன்படுத்தி கார்பன்-14 முறை மூலம் தொல்பொருட்களின் வயதைக் கணக்கிட முடிகிறது.',
        animationDescription: 'Archaeological wooden artifact decaying its radioactive green Carbon-14 atoms over thousands of years on an animated timeline.',
        keywordsDisplayed: ['Radioactive Decay', 'Decay Law N = N0 e^-λt', 'Half-Life T1/2 = 0.693/λ', 'Carbon-14 Dating'],
        interactiveQuestion: {
          question: 'If a radioactive sample with a half-life of 10 days starts with 100 grams, how much remains after 30 days?',
          questionTa: '10 நாட்கள் அரை ஆயுட்காலம் கொண்ட 100 கிராம் கதிரியக்கப் பொருள் 30 நாட்களுக்குப் பிறகு எவ்வளவு எஞ்சியிருக்கும்?',
          options: ['12.5 grams (3 half-lives)', '25 grams', '50 grams', '0 grams'],
          optionsTa: ['12.5 கிராம் (3 அரை ஆயுட்கள்)', '25 கிராம்', '50 கிராம்', '0 கிராம்'],
          correctIndex: 0,
          explanation: 'After 30 days (n = 30/10 = 3 half-lives), remaining mass = 100 × (1/2)³ = 100 / 8 = 12.5 grams.'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 240,
    scriptEn: 'Welcome to Unit 8 Atomic and Nuclear Physics! In this module, we probe the heart of matter. We explore Bohr’s quantum model of hydrogen, calculating orbital radii and the beautiful spectral series from Lyman to Pfund. We then step inside the nucleus to discover nuclear density, the binding energy curve, radioactive decay laws, and how controlled fission in nuclear reactors and fusion in the Sun power our world.',
    scriptTa: 'அலகு 8 அணு மற்றும் அணுக்கரு இயற்பியல் பகுதிக்கு உங்களை அன்புடன் வரவேற்கிறோம்! இப்பாடத்தில் அணுவின் உட்கட்டமைப்பை போர் அணு மாதிரி மற்றும் ஹைட்ரஜன் நிறமாலை தொடர்கள் வழியே கற்கிறோம். பின்னர் அணுக்கருவிற்குள் சென்று பிணைப்பு ஆற்றல் வளைகோடு, கதிரியக்கச் சிதைவு விதிகள், அணு உலை மற்றும் சூரியனின் ஆற்றல் மூலமான அணுக்கரு இணைவு ஆகியவற்றை முழுமையாகப் பயில்வோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 8 Atomic & Nuclear Physics-ல் Bohr’s Hydrogen Model-ன் radius rn = n² · a0 மற்றும் energy En = -13.6/n² eV சமன்பாடுகளைத் தருவிக்கிறோம். அணுக்கருவில் Binding Energy per Nucleon curve Fe-56-ல் 8.8 MeV உச்சம் பெறுவதையும், Radioactive Decay Law N = N0 e^-λt மற்றும் Half-Life T1/2 = 0.693/lambda பயன்பாடுகளையும் step-by-step ஆகக் கற்றுக்கொள்வோம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'The ratio of radii of the first three Bohr orbits in a hydrogen atom is:',
        qTa: 'ஹைட்ரஜன் அணுவின் முதல் மூன்று சுற்றுப்பாதைகளின் ஆரங்களின் தகவு:',
        a: '1 : 4 : 9 (Since rn ∝ n²)',
        aTa: '1 : 4 : 9 (rn ∝ n² என்பதால்)'
      },
      {
        q: 'The mass density of any atomic nucleus is approximately:',
        qTa: 'எந்தவொரு அணுக்கருவின் நிறை அடர்த்தி சுமார்:',
        a: '2.3 × 10¹⁷ kg/m³ (constant for all nuclei)',
        aTa: '2.3 × 10¹⁷ kg/m³ (அனைத்து அணுக்கருக்களுக்கும் மாறிலி)'
      },
      {
        q: 'Which component in a nuclear reactor is used to absorb excess neutrons to control the chain reaction?',
        qTa: 'அணு உலையில் தொடர்வினையைக் கட்டுப்படுத்த அதிகப்படியான நியூட்ரான்களை உறிஞ்ச பயன்படும் தண்டு எது?',
        a: 'Cadmium or Boron control rods (காட்மியம் அல்லது போரான் கட்டுப்படுத்தும் தண்டுகள்)',
        aTa: 'காட்மியம் அல்லது போரான் கட்டுப்படுத்தும் தண்டுகள்'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'State the postulates of Bohr’s atom model.',
        qTa: 'போர் அணு மாதிரியின் எடுகோள்களைக் கூறுக.',
        a: '1) Electrons revolve in non-radiating stationary circular orbits. 2) Quantization condition: Orbital angular momentum L = mvr = nh / (2π). 3) Frequency condition: Radiation of frequency ν is emitted when an electron jumps from orbit E2 to E1 such that hν = E2 - E1.',
        aTa: '1) எலக்ட்ரான்கள் ஆற்றலை கதிர்வீசாத நிலையான வட்டப்பாதைகளில் சுற்றுகின்றன. 2) கோண உந்தம் குவாண்டமாக்கல்: L = mvr = nh/(2π). 3) அதிர்வெண் நிபந்தனை: எலக்ட்ரான் E2 இலிருந்து E1 க்கு தாவும்போது hν = E2 - E1 என்ற அதிர்வெண் கொண்ட கதிர்வீச்சை உமிழ்கிறது.'
      },
      {
        q: 'Define half-life period and mean life of a radioactive substance. Write their relationship.',
        qTa: 'கதிரியக்கப் பொருளின் அரை ஆயுட்காலம் மற்றும் சராசரி ஆயுட்காலத்தை வரையறுத்து அவற்றிடையேயான தொடர்பை எழுதுக.',
        a: 'Half-life (T1/2) is the time required for half of the initial radioactive nuclei to decay: T1/2 = 0.693 / λ. Mean life (τ) is the reciprocal of the decay constant: τ = 1 / λ. Relation: T1/2 = (ln 2) · τ = 0.693 τ (or τ = 1.44 T1/2).',
        aTa: 'ஆரம்ப அணுக்கருக்களின் எண்ணிக்கை பாதியாகக் குறைய எடுத்துக்கொள்ளும் காலம் அரை ஆயுட்காலம் ($T_{1/2} = 0.693/\lambda$). சிதைவு மாறிலியின் தலைகீழ் மதிப்பு சராசரி ஆயுட்காலம் ($\tau = 1/\lambda$) எனப்படும். தொடர்பு: $T_{1/2} = 0.693 \tau$ (அல்லது $\tau = 1.44 T_{1/2}$).'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Draw the Binding Energy per nucleon curve and explain its main features and significance.',
        qTa: 'நியூக்ளியான் ஒன்றுக்கான பிணைப்பு ஆற்றல் வளைகோட்டை வரைந்து அதன் முக்கிய பண்புகளையும் முக்கியத்துவத்தையும் விளக்குக.',
        a: 'Features: 1) Maximum peak at ⁵⁶Fe (8.8 MeV/nucleon) indicating maximum stability. 2) Nearly constant value ≈ 8.5 MeV/nucleon for 30 < A < 170 due to saturation of nuclear forces. 3) Drops to 7.6 MeV for heavy nuclei like ²³⁸U due to Coulomb repulsion. Significance: Explains why light nuclei release energy during fusion and heavy nuclei release energy during fission.',
        aTa: '1) இரும்பு-56-ல் 8.8 MeV/நியூக்ளியான் என்ற உச்ச மதிப்பைப் பெறுகிறது. 2) 30 < A < 170 இடையே ~8.5 MeV அளவில் ஏறத்தாழ மாறிலியாக உள்ளது. 3) கனமான அணுக்கருக்களில் 7.6 MeV ஆகக் குறைகிறது. முக்கியத்துவம்: அணுக்கரு இணைவு மற்றும் பிளவில் ஆற்றல் வெளியாவதை விளக்குகிறது.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Derive the expressions for the radius of the n-th orbit and total energy of an electron in Bohr’s hydrogen atom model.',
        qTa: 'போர் ஹைட்ரஜன் அணு மாதிரியில் n-வது சுற்றுப்பாதையின் ஆரம் மற்றும் எலக்ட்ரானின் மொத்த ஆற்றலுக்கான சமன்பாடுகளைத் தருவிக்க.',
        a: 'Equate Coulomb force to centripetal force: mv²/r = e²/(4πε0 r²). From mvr = nh/(2π), v = nh/(2πmr). Substituting v gives rn = (ε0 n² h²)/(π m e²) = n² a0. Kinetic energy K = e²/(8πε0 r) and potential energy U = -e²/(4πε0 r). Total energy En = K + U = -e²/(8πε0 r) = -me⁴/(8ε0² n² h²) = -13.6/n² eV.',
        aTa: 'நிலைமின் விசியை மையநோக்கு விசைக்கு சமப்படுத்துக: mv²/r = e²/(4πε0 r²). கோண உந்த சமன்பாட்டிலிருந்து v-ஐ பிரதியிட rn = (ε0 n² h²)/(π m e²) = n² a0 எனக் கிடைக்கிறது. இயக்க மற்றும் மின்னழுத்த ஆற்றல்களைக் கூட்டி மொத்த ஆற்றல் En = -me⁴/(8ε0² n² h²) = -13.6/n² eV எனப் பெறுக.'
      },
      {
        q: 'State the law of radioactive decay. Derive N = N0 e^-λt. Obtain the relation between half-life and decay constant.',
        qTa: 'கதிரியக்கச் சிதைவு விதியைக் கூறுக. N = N0 e^-λt சமன்பாட்டைத் தருவித்து அரை ஆயுட்காலத்திற்கும் சிதைவு மாறிலிக்கும் உள்ள தொடர்பைப் பெறுக.',
        a: 'Decay law: -dN/dt = λN. Integrating dN/N = -λ dt from 0 to t gives ln(N/N0) = -λt => N(t) = N0 e^-λt. At t = T1/2, N = N0/2. Substituting gives N0/2 = N0 e^-λT1/2 => e^λT1/2 = 2 => λ T1/2 = ln 2 = 0.693 => T1/2 = 0.693 / λ.',
        aTa: '-dN/dt = λN. தொகையிட ln(N/N0) = -λt => N(t) = N0 e^-λt எனக் கிடைக்கிறது. t = T1/2 எனும்போது N = N0/2 எனப் பிரதியிட T1/2 = 0.693 / λ எனப் பெறப்படுகிறது.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Bohr atom radius and total energy derivation (5 Marks)',
      'Radioactive decay law N = N0 e^-λt and half-life derivation (5 Marks)',
      'Binding energy per nucleon curve and features (3 Marks / 5 Marks)',
      'Hydrogen spectral series (Lyman, Balmer, Paschen, etc.) formulas and wavelengths (3 Marks)',
      'Nuclear reactor working and components (3 Marks / 5 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why is the total energy of an electron in an atom negative?',
      answer: 'The negative sign indicates that the electron is electrostatically bound to the positive nucleus. Energy must be supplied from outside (+13.6 eV for ground state hydrogen) to free the electron and move it to infinity where energy is zero.',
      category: 'Concept'
    },
    {
      question: 'Why do nuclear forces show saturation property?',
      answer: 'Because of their extremely short range (~1-2 fm), a nucleon only interacts with its immediate nearest neighbor nucleons, unlike long-range gravitational or electrostatic forces that interact with all particles in the system.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Using rn ∝ n instead of rn ∝ n².',
      correctWay: 'Remember orbit radius expands quadratically: r1 = a0, r2 = 4a0, r3 = 9a0, r4 = 16a0.'
    },
    {
      category: 'Sign',
      mistake: 'Omitting the negative sign in En = -13.6 / n² eV.',
      correctWay: 'Always write the minus sign for bound states; a positive energy would mean an unbound free electron.'
    }
  ],
  memoryTricks: [
    {
      title: 'Hydrogen Spectral Series Order Mnemonic',
      titleTa: 'ஹைட்ரஜன் நிறமாலை தொடர் வரிசை',
      trick: '"Lazy Boys Play Basketball Poorly" → Lyman (n=1), Balmer (n=2), Paschen (n=3), Brackett (n=4), Pfund (n=5).'
    },
    {
      title: 'Decay Law Mnemonic',
      titleTa: 'சிதைவு விதி நினைவுக்குறிப்பு',
      trick: '"Half Life = 0.693 over Lambda" → T1/2 = 0.693 / λ.'
    }
  ]
};
