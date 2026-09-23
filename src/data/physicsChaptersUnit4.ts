import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_4_ELECTROMAGNETIC_INDUCTION_AND_AC: PhysicsChapter = {
  chapterNumber: 4,
  chapterName: 'Electromagnetic Induction and Alternating Current',
  chapterNameTa: 'மின்காந்தத் தூண்டலும் மாறுதிசை மின்னோட்டமும்',
  unitNumber: 4,
  unitName: 'Electromagnetic Induction and Alternating Current',
  unitNameTa: 'மின்காந்தத் தூண்டலும் மாறுதிசை மின்னோட்டமும்',
  overview: 'Comprehensive study of Faraday’s laws of induction, Lenz’s law, motional EMF, eddy currents, self and mutual inductance, AC generators (alternators), transformers and energy losses, alternating current fundamentals, RMS and average values, pure R, L, C circuits, Series LCR resonance, Q-factor, power factor, and LC oscillations.',
  overviewTa: 'ஃபாரடேயின் தூண்டல் விதிகள், லென்ஸ் விதி, இயக்க மின்னியக்கு விசை, சுழல் மின்னோட்டங்கள், தன் மற்றும் பரிமாற்று மின்தூண்டல், AC மின்னியற்றி, மின்மாற்றி மற்றும் ஆற்றல் இழப்புகள், RMS மற்றும் சராசரி மதிப்புகள், தனித்த R, L, C சுற்றுகள், தொடர் LCR ஒத்ததிர்வு, Q-காரணி, திறன் காரணி மற்றும் LC அலைவுகள் பற்றிய முழுமையான பாடம்.',
  introduction: 'In 1831, Michael Faraday made the monumental discovery that changing magnetic flux generates electricity. This single discovery powers today’s global civilization through hydroelectric, nuclear, and thermal AC power stations, transformers, electric induction cookers, and alternating current transmission grids.',
  introductionTa: '1831-ல் மைக்கேல் ஃபாரடே காந்தப்பாய மாற்றத்தினால் மின்சாரம் உருவாகிறது என்பதைக் கண்டறிந்தார். இக்கண்டுபிடிப்பே நீர்மின், அணுமின் மற்றும் அனல்மின் நிலையங்கள், மின்மாற்றிகள், மின்தூண்டல் அடுப்புகள் மற்றும் மாறுதிசை மின்னோட்ட மின்விநியோகக் கட்டமைப்பிற்கு அடிப்படையாகும்.',
  learningObjectives: [
    'Understand magnetic flux (Φ_B) and formulate Faraday’s Laws of Electromagnetic Induction.',
    'Apply Lenz’s Law and Fleming’s Right-Hand Rule, connecting induction with conservation of energy.',
    'Explain eddy currents (Foucault currents), their damping effects, and industrial applications.',
    'Derive self-inductance (L) of a solenoid, mutual inductance (M), and energy stored in an inductor (U = ½ L I²).',
    'Derive the equation for induced EMF in an AC Generator / Alternator (ε = ε₀ sin ωt).',
    'Explain the principle, construction, efficiency, and energy losses of a Step-up / Step-down Transformer.',
    'Compute RMS and average values of AC voltage and current (I_rms = I₀ / √2).',
    'Analyze AC circuits containing pure R, pure L, and pure C using phasor diagrams.',
    'Derive total impedance (Z), resonant frequency (f_r), Q-factor, and power factor in Series LCR circuits.'
  ],
  learningObjectivesTa: [
    'காந்தப்பாயம் (Φ_B) மற்றும் ஃபாரடேயின் மின்காந்தத் தூண்டல் விதிகளைப் புரிந்து கொள்ளுதல்.',
    'லென்ஸ் விதியைப் பயன்படுத்தி தூண்டப்பட்ட மின்னோட்டத்தின் திசையையும் ஆற்றல் மாறாத்தன்மையையும் அறிதல்.',
    'சுழல் மின்னோட்டங்கள் (ஃபூக்கோ மின்னோட்டங்கள்) மற்றும் அவற்றின் பயன்பாடுகளைக் கற்றல்.',
    'வரிச்சுருளின் தன்மின்தூண்டல் எண் (L), பரிமாற்று மின்தூண்டல் எண் (M) மற்றும் சேமிக்கப்படும் ஆற்றலை (U = ½ L I²) வருவித்தல்.',
    'AC மின்னியற்றியில் தூண்டப்படும் மின்னியக்கு விசைக்கான சமன்பாட்டை (ε = ε₀ sin ωt) வருவித்தல்.',
    'மின்மாற்றியின் தத்துவம், அமைப்பு, பயனுறுதிறன் மற்றும் ஆற்றல் இழப்புகளை விளக்குதல்.',
    'AC மின்னோட்டத்தின் RMS மற்றும் சராசரி மதிப்புகளைக் கணக்கிடுதல் (I_rms = I₀ / √2).',
    'தனித்த R, L, C மற்றும் தொடர் LCR சுற்றுகளின் மின்மின்னெதிர்ப்பு (Z) மற்றும் கட்ட வரைபடங்களை வரைதல்.',
    'தொடர் LCR ஒத்ததிர்வு அதிர்வெண் (f_r), Q-காரணி மற்றும் திறன் காரணியை வருவித்தல்.'
  ],
  importance: 'Top-tier scoring unit (12-15 marks) featuring classic 5-mark board derivations: AC Generator EMF derivation, Transformer working & losses, and Series LCR Circuit impedance phasor analysis.',
  prerequisites: [
    'Magnetic Flux and Biot-Savart Law (Class 12 Unit 3)',
    'Simple Harmonic Motion and Trigonometric identities (Class 11 Unit 10)',
    'Work-Energy Theorem (Class 11 Unit 4)'
  ],
  everydayApplications: [
    'AC generators in hydroelectric, thermal, and wind power generation stations',
    'Step-up transformers at power plants (11 kV to 400 kV) and Step-down transformers in street distribution boxes (230 V)',
    'Induction stovetops heating stainless steel cookware directly using high-frequency eddy currents',
    'Electromagnetic eddy current braking in Japanese Shinkansen bullet trains and rollercoasters',
    'Wireless phone chargers using resonant mutual inductive coupling'
  ],
  historicalBackground: 'Michael Faraday discovered electromagnetic induction in London in 1831, independently discovered by Joseph Henry in the USA. Heinrich Lenz established the direction law in 1834. Nikola Tesla pioneered alternating current generators and polyphase power systems in the 1880s.',
  scientists: [
    { name: 'Michael Faraday', contribution: 'Discovered electromagnetic induction and formulated quantitative laws', year: '1831' },
    { name: 'Heinrich Lenz', contribution: 'Formulated Lenz’s Law defining the direction of induced current', year: '1834' },
    { name: 'Nikola Tesla', contribution: 'Invented polyphase AC generators, induction motors, and transformers', year: '1888' },
    { name: 'Léon Foucault', contribution: 'Discovered eddy currents induced in bulk conductors', year: '1851' }
  ],
  majorDiscoveries: [
    'Electromagnetic Induction (1831)',
    'Lenz’s Law & Energy Conservation (1834)',
    'AC Power Generation & Transmission System (1888)'
  ],
  realWorldRelevance: 'Generates more than 99% of all commercial electric power consumed worldwide.',
  topics: [
    {
      id: 'top-4-1',
      topicNumber: '4.1',
      title: 'Electromagnetic Induction, Faraday’s Laws & Lenz’s Law',
      titleTa: 'மின்காந்தத் தூண்டல், ஃபாரடேயின் விதிகள் மற்றும் லென்ஸ் விதி',
      beginnerExplanation: 'Whenever the magnetic flux linked with a closed circuit changes, an electromotive force (EMF) is induced in the circuit. Faraday quantified this: induced EMF equals the negative rate of change of magnetic flux (ε = -dΦ_B/dt). Lenz’s law states that the induced current always flows in such a direction that it opposes the change in magnetic flux that produces it.',
      beginnerExplanationTa: 'ஒரு மூடிய சுற்றோடு தொடர்புடைய காந்தப்பாயம் மாறும் போதெல்லாம் அச்சுற்றில் ஒரு மின்னியக்கு விசை தூண்டப்படுகிறது (ஃபாரடே விதி). தூண்டப்பட்ட மின்னோட்டமானது அது உருவாவதற்குக் காரணமான காந்தப்பாய மாற்றத்தை எப்போதும் எதிர்க்கும் திசையிலேயே பாயும் (லென்ஸ் விதி).',
      coreConcepts: [
        'Magnetic Flux: Φ_B = vec{B} · vec{A} = B A cos θ (SI unit: Weber, Wb or T m²)',
        'Faraday’s Law: ε = -N (dΦ_B / dt)',
        'Lenz’s Law: The minus sign in Faraday’s equation represents Lenz’s law, which is a direct consequence of the Law of Conservation of Energy.',
        'Fleming’s Right-Hand Rule (Generator Rule): Thumb = Motion, Forefinger = Magnetic Field B, Middle finger = Induced Current I.'
      ],
      definitions: [
        {
          term: 'Faraday’s Second Law of Electromagnetic Induction',
          termTa: 'ஃபாரடேயின் இரண்டாம் விதி',
          definitionEn: 'The magnitude of induced electromotive force in a closed circuit is directly proportional to the time rate of change of magnetic flux linked with the circuit: ε = -dΦ_B / dt.',
          definitionTa: 'ஒரு மூடிய சுற்றில் தூண்டப்படும் மின்னியக்கு விசையின் எண்மதிப்பானது அச்சுற்றுடன் தொடர்புடைய காந்தப்பாயம் மாறும் வீதத்திற்கு நேர்விகிதத்தில் இருக்கும் (ε = -dΦ_B / dt).',
          keyPoints: ['1 Weber = 1 Tesla × 1 m²', 'Rapid flux change induces larger EMF', 'Negative sign represents opposition to cause']
        },
        {
          term: 'Lenz’s Law',
          termTa: 'லென்ஸ் விதி',
          definitionEn: 'The direction of induced current is always such that it opposes the cause (change in magnetic flux) that produces it.',
          definitionTa: 'தூண்டப்பட்ட மின்னோட்டத்தின் திசையானது, அது உருவாவதற்குக் காரணமான காந்தப்பாய மாற்றத்தை எப்போதும் எதிர்க்கும் வகையில் அமையும்.',
          keyPoints: ['Direct manifestation of Conservation of Energy', 'Mechanical work done in overcoming magnetic repulsion converts into electrical energy']
        }
      ],
      realLifeExamples: [
        'Pushing a bar magnet’s North pole into a coil induces a counter North pole that repels the incoming magnet.',
        'Guitar pickups convert vibrating ferromagnetic steel strings into electrical audio signals using electromagnetic induction.'
      ],
      analogies: 'Lenz’s law is like inertia for magnetism: if you try to increase the magnetic field, the circuit creates a reverse field to stop the increase; if you try to decrease the field, it creates an aiding field to stop the decrease!',
      commonMisconceptions: [
        'Misconception: Induced EMF requires a moving magnet. Correction: Any change in magnetic flux—whether by changing magnetic field B, coil area A, or angle θ—induces an EMF.'
      ]
    },
    {
      id: 'top-4-2',
      topicNumber: '4.2',
      title: 'Eddy Currents, Self & Mutual Inductance',
      titleTa: 'சுழல் மின்னோட்டங்கள், தன் மற்றும் பரிமாற்று மின்தூண்டல்',
      beginnerExplanation: 'When a solid metallic block experiences changing magnetic flux, circular closed swirling currents are induced within its bulk mass—known as Eddy Currents (Foucault currents). Self-inductance (L) is the property by which a coil opposes any change of current in itself (electrical inertia). Mutual inductance (M) is the induction of EMF in a secondary coil due to current changes in a primary coil.',
      beginnerExplanationTa: 'ஒரு திட உலோகப் பொருளில் காந்தப்பாயம் மாறும் போது அதன் பருமன் முழுவதும் சுழல் வடிவில் தூண்டப்படும் மின்னோட்டங்கள் சுழல் மின்னோட்டங்கள் (ஃபூக்கோ மின்னோட்டங்கள்) எனப்படும். தன்மின்தூண்டல் (L) என்பது ஒரு கம்பிச்சுருள் தன்னில் பாயும் மின்னோட்ட மாற்றத்தை எதிர்க்கும் பண்பாகும்.',
      coreConcepts: [
        'Eddy Current Applications: Induction furnaces, electromagnetic brakes, induction cookers, dead-beat galvanometers.',
        'Minimizing eddy current loss: Laminating metal cores with insulating varnish sheets.',
        'Self-inductance of long solenoid: L = (μ₀ N² A) / l = μ₀ n² A l (SI unit: Henry, H)',
        'Energy stored in inductor: U_B = ½ L I²',
        'Mutual inductance of coaxial solenoids: M = (μ₀ N₁ N₂ A) / l'
      ],
      definitions: [
        {
          term: 'Self-Inductance (Coefficient of Self-Induction L)',
          termTa: 'தன்மின்தூண்டல் எண் (L)',
          definitionEn: 'The ratio of total magnetic flux linkage in a coil to the electric current flowing through it (L = NΦ_B / I), or the opposing EMF induced per unit rate of decrease of current (ε = -L dI/dt).',
          definitionTa: 'கம்பிச்சுருளுடன் தொடர்புடைய மொத்த காந்தப்பாய இணைப்பிற்கும் அதில் பாயும் மின்னோட்டத்திற்கும் உள்ள தகவு (L = NΦ_B / I). SI அலகு ஹென்றி (H).',
          keyPoints: ['1 Henry = 1 Weber / 1 Ampere = 1 Volt second / Ampere', 'Acts as "Electrical Inertia" in circuits', 'Depends on geometry (N, A, l) and magnetic core permeability μ']
        }
      ],
      realLifeExamples: [
        'Bullet trains apply smooth, frictionless electromagnetic brakes by switching on powerful electromagnets under the train carriage, inducing massive opposing eddy currents in the rails.',
        'Induction cookers heat only the ferromagnetic bottom of the cooking pan while the glass surface remains safe to touch.'
      ],
      analogies: 'Self-inductance L is the exact electrical equivalent of mass m in mechanics. Just as mass resists changes in velocity (F = m a), inductance resists changes in current (ε = -L dI/dt).',
      commonMisconceptions: [
        'Misconception: Inductors consume electrical energy like resistors. Correction: An ideal inductor consumes zero net power; it merely stores energy in its magnetic field (U = ½ LI²) and returns it to the circuit during current decrease.'
      ]
    },
    {
      id: 'top-4-3',
      topicNumber: '4.3',
      title: 'AC Generator / Alternator & Transformer',
      titleTa: 'AC மின்னியற்றி மற்றும் மின்மாற்றி',
      beginnerExplanation: 'An AC Generator rotates a rectangular armature coil of N turns with angular velocity ω inside a uniform magnetic field B, generating a sinusoidal alternating EMF: ε = ε₀ sin ωt (where ε₀ = NBAω). A Transformer steps AC voltages up or down using mutual induction with near 95-99% efficiency.',
      beginnerExplanationTa: 'AC மின்னியற்றி சீரான காந்தப்புலத்தில் சுழலும் கம்பிச்சுருளின் மூலம் சைன் வடிவ மின்னியக்கு விசையைத் தூண்டுகிறது (ε = ε₀ sin ωt). மின்மாற்றி பரிமாற்று மின்தூண்டல் தத்துவத்தின் அடிப்படையில் AC மின்னழுத்தத்தை உயர்த்தவோ (Step-up) அல்லது குறைக்கவோ (Step-down) பயன்படுகிறது.',
      coreConcepts: [
        'Instantaneous EMF of Alternator: ε = N B A ω sin ωt = ε₀ sin ωt',
        'Peak Voltage: ε₀ = N B A ω = 2π f N B A',
        'Transformer equation: k = V_s / V_p = N_s / N_p = I_p / I_s',
        'Step-Up Transformer: N_s > N_p, k > 1 (Increases Voltage, Decreases Current)',
        'Step-Down Transformer: N_s < N_p, k < 1 (Decreases Voltage, Increases Current)',
        'Transformer Energy Losses: 1. Copper loss (I²R heating), 2. Iron/Core loss (Hysteresis & Eddy currents), 3. Magnetic flux leakage, 4. Humming loss.'
      ],
      definitions: [
        {
          term: 'Step-Up and Step-Down Transformer',
          termTa: 'ஏற்று மற்றும் இறக்கு மின்மாற்றி',
          definitionEn: 'A Step-up transformer increases low AC voltage to high AC voltage with fewer primary turns than secondary turns (k = N_s / N_p > 1). A Step-down transformer decreases high AC voltage to safe low voltage (k < 1).',
          definitionTa: 'குறைந்த AC மின்னழுத்தத்தை உயர் மின்னழுத்தமாக மாற்றும் சாதனம் ஏற்று மின்மாற்றி (N_s > N_p); உயர் மின்னழுத்தத்தை குறைந்த மின்னழுத்தமாக மாற்றும் சாதனம் இறக்கு மின்மாற்றி (N_s < N_p) ஆகும்.',
          keyPoints: ['Works ONLY on Alternating Current (AC), NOT on DC!', 'Conserves electrical power (V_p I_p ≈ V_s I_s)', 'Efficiency η = (P_out / P_in) × 100%']
        }
      ],
      realLifeExamples: [
        'Hydroelectric power plants in Mettur and Kadamparai generate electricity at 11 kV, step it up to 230 kV for long-distance grid transmission, and step it down to 230 V at local neighborhoods.',
        'Mobile phone chargers contain miniature step-down electronic transformers reducing 230 V AC to 5 V DC.'
      ],
      analogies: 'A transformer is like a mechanical bicycle gear system: low gear (step-up) gives high torque at lower rotation speed; high gear steps up speed while reducing torque, conserving mechanical power.',
      commonMisconceptions: [
        'Misconception: Connecting a 12V battery (DC) to a transformer step-up will produce 240V. Correction: DC current produces constant magnetic flux (dΦ/dt = 0), so induced secondary voltage is ZERO and the primary winding will overheat and burn!'
      ]
    },
    {
      id: 'top-4-4',
      topicNumber: '4.4',
      title: 'Alternating Current Fundamentals, RMS Value & Pure R, L, C Circuits',
      titleTa: 'மாறுதிசை மின்னோட்டத்தின் அடிப்படைகள், RMS மதிப்பு மற்றும் R, L, C சுற்றுகள்',
      beginnerExplanation: 'An alternating current reverses its direction periodically with time: i = I₀ sin ωt. The RMS (Root Mean Square) value represents the effective DC equivalent that produces the same Joule heating effect in a given resistor: I_rms = I₀ / √2 ≈ 0.707 I₀.',
      beginnerExplanationTa: 'மாறுதிசை மின்னோட்டம் காலத்தைப் பொருத்து தன் திசையை மாற்றிக்கொண்டே இருக்கும் (i = I₀ sin ωt). அதே மின்தடையில் சம அளவு வெப்பத்தை உருவாக்கும் DC மின்னோட்டத்திற்கு சமமான மதிப்பு RMS மதிப்பு எனப்படும் (I_rms = I₀ / √2 = 0.707 I₀).',
      coreConcepts: [
        'Peak value I₀, RMS value I_rms = I₀ / √2 = 0.707 I₀, Average value I_avg = 2I₀ / π = 0.637 I₀',
        'Pure Resistor (R): Current and Voltage are in the SAME PHASE (ϕ = 0).',
        'Pure Inductor (L): Voltage LEADS Current by 90° (π/2). Inductive Reactance X_L = ωL = 2πfL (Ω).',
        'Pure Capacitor (C): Current LEADS Voltage by 90° (π/2). Capacitive Reactance X_C = 1 / (ωC) = 1 / (2πfC) (Ω).'
      ],
      definitions: [
        {
          term: 'RMS Value of Alternating Current (I_rms)',
          termTa: 'மாறுதிசை மின்னோட்டத்தின் RMS மதிப்பு',
          definitionEn: 'The root-mean-square value of AC is defined as that steady DC current which produces the same amount of heat in a given resistor in a given time as is produced by the AC in the same resistor during one complete cycle (I_rms = I₀ / √2).',
          definitionTa: 'ஒரு குறிப்பிட்ட மின்தடையில் ஒரு முழு அலைவுக் காலத்தில் AC மின்னோட்டம் உருவாக்கும் அதே அளவு வெப்பத்தை உருவாக்கும் மாறா DC மின்னோட்டத்தின் மதிப்பு RMS மதிப்பு எனப்படும் (I_rms = I₀ / √2).',
          keyPoints: ['Domestic mains supply in India is 230 V RMS at 50 Hz frequency', 'Peak voltage V₀ = 230 × √2 = 325.3 Volts!', 'Standard AC meters read RMS values']
        }
      ],
      realLifeExamples: [
        'Indian household electric sockets provide 230 V RMS at 50 Hz, meaning peak voltage fluctuates up to +325 V and -325 V 100 times per second.',
        'High-pass audio filter crossovers use capacitors to block low bass frequencies while letting high treble frequencies pass (since X_C ∝ 1/f).'
      ],
      analogies: 'Phase leads and lags are like runners on a circular track: in an inductor, voltage crosses the start line a quarter-lap ahead of current; in a capacitor, current crosses a quarter-lap ahead of voltage!',
      commonMisconceptions: [
        'Misconception: 230 V AC is equally as dangerous as 230 V DC. Correction: 230 V AC reaches a peak of 325 V and causes violent muscle contractions (tetany), making 230 V AC significantly more hazardous than 230 V DC.'
      ]
    },
    {
      id: 'top-4-5',
      topicNumber: '4.5',
      title: 'Series LCR Circuit, Resonance, Q-Factor & Power in AC Circuit',
      titleTa: 'தொடர் LCR சுற்று, ஒத்ததிர்வு, Q-காரணி மற்றும் AC சுற்றின் திறன்',
      beginnerExplanation: 'When a resistor R, inductor L, and capacitor C are connected in series across an AC source, the total opposition to current is called Impedance (Z). At a specific resonant frequency f_r = 1 / (2π√LC), inductive and capacitive reactances cancel (X_L = X_C), causing impedance to drop to its minimum value (Z = R) and current to soar to its maximum peak.',
      beginnerExplanationTa: 'R, L, C ஆகியவை தொடரிணைப்பில் உள்ள போது மொத்த மின்தடை மின்மின்னெதிர்ப்பு (Impedance Z) எனப்படும். X_L = X_C ஆகும்போது ஒத்ததிர்வு ஏற்பட்டு Z = R என மிகக் குறைவாகி மின்னோட்டம் பெரும மதிப்பை அடைகிறது. ஒத்ததிர்வு அதிர்வெண் f_r = 1 / (2π√LC) ஆகும்.',
      coreConcepts: [
        'Series LCR Impedance: Z = √[R² + (X_L - X_C)²]',
        'Phase angle: tan ϕ = (X_L - X_C) / R',
        'Resonance Condition: X_L = X_C \\implies ω_r L = 1 / (ω_r C) \\implies ω_r = 1 / √LC',
        'Resonant Frequency: f_r = 1 / (2π √LC)',
        'Quality Factor (Q-factor): Q = ω_r L / R = (1 / R) · √(L / C)',
        'Average Power: P_avg = V_rms · I_rms · cos ϕ (where cos ϕ = R / Z is Power Factor)',
        'Wattless Current: Current component I_rms sin ϕ that consumes ZERO average power.'
      ],
      definitions: [
        {
          term: 'Series Resonance & Quality Factor (Q-Factor)',
          termTa: 'தொடர் ஒத்ததிர்வு மற்றும் Q-காரணி',
          definitionEn: 'Resonance in a series LCR circuit occurs when the frequency of applied AC makes X_L = X_C, causing impedance to be purely resistive (Z = R) and current to reach maximum. The Q-factor measures the sharpness of resonance (Q = [1/R] · √(L/C)).',
          definitionTa: 'X_L = X_C ஆகும்போது மின்மின்னெதிர்ப்பு Z = R என குறைந்து மின்னோட்டம் பெருமமாகும் நிகழ்வு ஒத்ததிர்வு எனப்படும். ஒத்ததிர்வின் கூர்மையை அளவிடும் காரணி Q-காரணி (Q = [1/R] · √(L/C)) ஆகும்.',
          keyPoints: ['Acceptor circuit: Selects desired signal frequency while rejecting all others', 'Used in radio and television tuning circuits', 'Higher Q gives sharper tuning selectivity']
        },
        {
          term: 'Power Factor (cos ϕ)',
          termTa: 'திறன் காரணி',
          definitionEn: 'The cosine of the phase angle between voltage and current in an AC circuit (cos ϕ = R / Z = True Power / Apparent Power).',
          definitionTa: 'மாறுதிசை மின்னழுத்தத்திற்கும் மின்னோட்டத்திற்கும் இடையே உள்ள கட்டக் கோணத்தின் கொசைன் மதிப்பு (cos ϕ = R / Z).',
          keyPoints: ['For pure resistor: ϕ = 0°, cos ϕ = 1 (Maximum power consumed)', 'For pure inductor or capacitor: ϕ = 90°, cos ϕ = 0 (Zero power consumed)', 'Industrial plants install capacitor banks to correct power factor near 1.0']
        }
      ],
      realLifeExamples: [
        'FM radio tuning: Rotating the knob changes variable capacitance C to match resonant frequency f_r with the desired station frequency (e.g. 98.3 MHz).',
        'Industrial factories use shunt capacitor banks to improve low lagging power factors, avoiding electricity board penalty tariffs.'
      ],
      analogies: 'Series resonance is like pushing someone on a swing at the swing’s natural frequency: even small pushes (applied voltage) build up huge swinging motion (maximum current)!',
      commonMisconceptions: [
        'Misconception: At resonance, voltages across inductor and capacitor are zero. Correction: V_L and V_C are NOT zero; they are individually very large (Q times applied voltage!) but exactly 180° out of phase, canceling each other out.'
      ]
    }
  ],
  formulas: [
    {
      id: 'f-4-1',
      formula: '\\varepsilon = -N \\frac{d\\Phi_B}{dt} = -N \\frac{d}{dt}(BA \\cos \\omega t) = NBA\\omega \\sin \\omega t',
      meaning: 'Faraday’s Law and instantaneous EMF induced in an AC Generator / Alternator coil.',
      meaningTa: 'ஃபாரடேயின் விதி மற்றும் AC மின்னியற்றியில் தூண்டப்படும் கணநேர மின்னியக்கு விசை.',
      variables: [
        { symbol: 'ε', name: 'Induced Electromotive Force', nameTa: 'தூண்டப்பட்ட EMF', siUnit: 'V (Volt)', dimension: '[M L² T⁻³ I⁻¹]' },
        { symbol: 'N', name: 'Number of turns in coil', nameTa: 'சுற்றுகளின் எண்ணிக்கை', siUnit: 'Dimensionless', dimension: '[1]' },
        { symbol: 'B', name: 'Magnetic field', nameTa: 'காந்தப்புலம்', siUnit: 'T (Tesla)', dimension: '[M T⁻² I⁻¹]' },
        { symbol: 'A', name: 'Area of coil', nameTa: 'சுருளின் பரப்பு', siUnit: 'm²', dimension: '[L²]' },
        { symbol: 'ω', name: 'Angular velocity (2πf)', nameTa: 'கோணத் திசைவேகம்', siUnit: 'rad s⁻¹', dimension: '[T⁻¹]' }
      ],
      siUnit: 'Volt (V)',
      dimension: '[M L² T⁻³ I⁻¹]',
      whenToUse: 'Calculating peak and instantaneous voltages in commercial AC alternators.',
      realLifeApplication: 'Electric utility power generation in nuclear, hydro, and thermal power plants.',
      memoryShortcut: 'Peak Voltage ε₀ = "N-B-A-ω" (Say: "NBA-Omega").',
      category: 'fundamental'
    },
    {
      id: 'f-4-2',
      formula: 'k = \\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}',
      meaning: 'Voltage, turns, and current transformation ratio of an ideal electrical transformer.',
      meaningTa: 'மின்மாற்றியின் மின்னழுத்தம், சுற்றுகள் மற்றும் மின்னோட்ட உருமாற்று விகிதம்.',
      variables: [
        { symbol: 'k', name: 'Transformation ratio', nameTa: 'உருமாற்று விகிதம்', siUnit: 'Dimensionless ratio', dimension: '[1]' },
        { symbol: 'V_s, V_p', name: 'Secondary and Primary Voltages', nameTa: 'துணை மற்றும் முதன்மை மின்னழுத்தங்கள்', siUnit: 'V', dimension: '[M L² T⁻³ I⁻¹]' },
        { symbol: 'N_s, N_p', name: 'Secondary and Primary Turns', nameTa: 'துணை மற்றும் முதன்மை சுற்றுகள்', siUnit: 'Dimensionless', dimension: '[1]' },
        { symbol: 'I_s, I_p', name: 'Secondary and Primary Currents', nameTa: 'துணை மற்றும் முதன்மை மின்னோட்டங்கள்', siUnit: 'A', dimension: '[I]' }
      ],
      siUnit: 'Dimensionless ratio',
      dimension: 'Dimensionless',
      whenToUse: 'Designing power transformers, step-up transmission grids, and electronic power supplies.',
      realLifeApplication: 'Electrical grid substations stepping down 230 kV to 11 kV and 415 V.',
      memoryShortcut: 'Secondary on top for Voltage and Turns, but Primary on top for Current (V_s/V_p = N_s/N_p = I_p/I_s).',
      category: 'board_exam'
    },
    {
      id: 'f-4-3',
      formula: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad f_r = \\frac{1}{2\\pi \\sqrt{LC}}',
      meaning: 'Total Impedance and Resonant Frequency in a Series LCR AC circuit.',
      meaningTa: 'தொடர் LCR சுற்றின் மொத்த மின்மின்னெதிர்ப்பு மற்றும் ஒத்ததிர்வு அதிர்வெண்.',
      variables: [
        { symbol: 'Z', name: 'Total Impedance', nameTa: 'மின்மின்னெதிர்ப்பு', siUnit: 'Ω (Ohm)', dimension: '[M L² T⁻³ I⁻²]' },
        { symbol: 'X_L', name: 'Inductive Reactance (ωL)', nameTa: 'மின்தூண்டல் மின்மின்னெதிர்ப்பு', siUnit: 'Ω', dimension: '[M L² T⁻³ I⁻²]' },
        { symbol: 'X_C', name: 'Capacitive Reactance (1/ωC)', nameTa: 'மின்தேக்க மின்மின்னெதிர்ப்பு', siUnit: 'Ω', dimension: '[M L² T⁻³ I⁻²]' },
        { symbol: 'f_r', name: 'Resonant Frequency', nameTa: 'ஒத்ததிர்வு அதிர்வெண்', siUnit: 'Hz', dimension: '[T⁻¹]' }
      ],
      siUnit: 'Z in Ω, f_r in Hz',
      dimension: 'Z: [M L² T⁻³ I⁻²], f_r: [T⁻¹]',
      whenToUse: 'Analyzing AC audio filters, radio tuners, and power transmission line resonance.',
      realLifeApplication: 'Radio and television channel frequency selection tuners.',
      memoryShortcut: 'At resonance: X_L = X_C, so Z = R (Impedance is minimum, current is maximum!).',
      category: 'frequently_used'
    },
    {
      id: 'f-4-4',
      formula: 'P_{avg} = V_{rms} I_{rms} \\cos \\phi, \\quad \\cos \\phi = \\frac{R}{Z}',
      meaning: 'Average power consumed in an AC circuit and Power Factor.',
      meaningTa: 'மாறுதிசை மின்சுற்றில் நுகரப்படும் சராசரி திறன் மற்றும் திறன் காரணி.',
      variables: [
        { symbol: 'P_avg', name: 'True Average Power', nameTa: 'சராசரி திறன்', siUnit: 'W (Watt)', dimension: '[M L² T⁻³]' },
        { symbol: 'V_rms, I_rms', name: 'RMS Voltage and Current', nameTa: 'RMS மின்னழுத்தம் மற்றும் மின்னோட்டம்', siUnit: 'V and A', dimension: 'V: [M L² T⁻³ I⁻¹], I: [I]' },
        { symbol: 'cos ϕ', name: 'Power Factor (R/Z)', nameTa: 'திறன் காரணி', siUnit: 'Dimensionless', dimension: '[1]' }
      ],
      siUnit: 'Watt (W)',
      dimension: '[M L² T⁻³]',
      whenToUse: 'Calculating commercial electricity consumption and power factor correction in industrial factories.',
      realLifeApplication: 'Electric billing and industrial power factor capacitor banks.',
      memoryShortcut: 'Pure Resistor: cos ϕ = 1 (Full power); Pure L or C: cos ϕ = 0 (Wattless, Zero power).',
      category: 'board_exam'
    }
  ],
  derivations: [
    {
      id: 'der-4-1',
      title: 'Derivation of Induced EMF in an AC Generator / Alternator',
      titleTa: 'AC மின்னியற்றியில் தூண்டப்படும் மின்னியக்கு விசைக்கான சமன்பாட்டை வருவித்தல்',
      aim: 'To derive an expression for the instantaneous induced electromotive force (EMF) generated in a rectangular coil rotating in a uniform magnetic field.',
      given: [
        'A rectangular armature coil of N turns and area A rotating with constant angular velocity ω.',
        'Uniform magnetic field B directed perpendicular to the rotation axis.',
        'At time t = 0, plane of coil is perpendicular to magnetic field (θ = 0°).'
      ],
      toProve: '\\varepsilon = \\varepsilon_0 \\sin \\omega t \\quad (\\text{where } \\varepsilon_0 = N B A \\omega)',
      assumptions: [
        'Angular velocity ω is uniform and constant.',
        'Magnetic field B is completely uniform throughout the coil volume.'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Express the angle θ between normal to coil area vector and magnetic field vector at time t.',
          descriptionTa: 't நேரத்தில் காந்தப்புலத்திற்கும் பரப்பிற்கும் இடைப்பட்ட கோணம் θ-வைக் குறிப்பிடுதல்.',
          equation: '\\theta = \\omega t',
          note: 'θ is the angular displacement from initial position.'
        },
        {
          stepNumber: 2,
          description: 'Calculate magnetic flux Φ_B linked with a single turn of the coil at time t.',
          descriptionTa: 'ஒரு சுற்றில் பாயும் காந்தப்பாயம் Φ_B கணக்கிடுதல்.',
          equation: '\\Phi_B = \\vec{B} \\cdot \\vec{A} = B A \\cos \\theta = B A \\cos \\omega t',
          note: 'Total flux linked with N turns is N Φ_B = N B A cos ωt.'
        },
        {
          stepNumber: 3,
          description: 'Apply Faraday’s Law of Electromagnetic Induction ε = -d(NΦ_B)/dt.',
          descriptionTa: 'ஃபாரடேயின் மின்காந்தத் தூண்டல் விதியைப் பயன்படுத்துதல்.',
          equation: '\\varepsilon = -\\frac{d}{dt}(N B A \\cos \\omega t) = -N B A \\frac{d}{dt}(\\cos \\omega t)',
          note: 'Differentiating cos ωt with respect to t gives -ω sin ωt.'
        },
        {
          stepNumber: 4,
          description: 'Evaluate derivative and simplify signs.',
          descriptionTa: 'வகையீட்டு மதிப்பை பிரதியிட்டு சுருக்குதல்.',
          equation: '\\varepsilon = -N B A (-\\omega \\sin \\omega t) = N B A \\omega \\sin \\omega t',
          note: 'Minus multiplied by minus yields positive sign.'
        },
        {
          stepNumber: 5,
          description: 'Define peak EMF ε₀ and state final sinusoidal equation.',
          descriptionTa: 'பெரும மின்னியக்கு விசை ε₀ வரையறுத்து இறுதி சமன்பாட்டைப் பெறுதல்.',
          equation: '\\varepsilon = \\varepsilon_0 \\sin \\omega t \\quad \\text{where } \\varepsilon_0 = N B A \\omega = 2\\pi f N B A',
          note: 'If coil circuit has resistance R, instantaneous current is i = (ε₀/R) sin ωt = I₀ sin ωt.'
        }
      ],
      finalEquation: '\\varepsilon = \\varepsilon_0 \\sin \\omega t = N B A \\omega \\sin \\omega t',
      physicalMeaning: 'The induced EMF varies sinusoidally with time, passing through two maximum peak values (+ε₀ and -ε₀) and two zero values during each full 360° mechanical revolution.',
      physicalMeaningTa: 'தூண்டப்பட்ட மின்னியக்கு விசை காலத்தைப் பொருத்து சைன் வடிவத்தில் மாறுபடுகிறது. ஒரு முழு சுழற்சியில் இருமுறை பெரும மதிப்பையும் இருமுறை சுழி மதிப்பையும் அடைகிறது.',
      commonMistakes: [
        'Making sign error during differentiation: d/dt(cos ωt) = -ω sin ωt (forgetting the minus sign inside).',
        'Forgetting angular frequency ω in the peak voltage expression (ε₀ = NBAω, not just NBA).',
        'Writing cos ωt in the final induced EMF instead of sin ωt.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'der-4-2',
      title: 'Impedance and Phase Angle Derivation for a Series LCR Circuit using Phasor Diagram Method',
      titleTa: 'கட்ட வரைபட முறையில் தொடர் LCR சுற்றின் மின்மின்னெதிர்ப்பு மற்றும் கட்டக் கோணத்தை வருவித்தல்',
      aim: 'To derive expressions for the total impedance Z and phase angle ϕ between voltage and current in a series combination of resistor R, inductor L, and capacitor C connected across an AC voltage v = V₀ sin ωt.',
      given: [
        'Series connection of resistor R, inductor L, and capacitor C.',
        'Current i = I₀ sin ωt is identical through all three series components.',
        'Voltage across R: V_R = i R (in phase with i).',
        'Voltage across L: V_L = i X_L (leads i by 90°).',
        'Voltage across C: V_C = i X_C (lags i by 90°).'
      ],
      toProve: 'Z = \\sqrt{R^2 + (X_L - X_C)^2} \\quad \\& \\quad \\tan \\phi = \\frac{X_L - X_C}{R}',
      assumptions: [
        'Components are ideal (pure R, pure L, pure C).',
        'Assume inductive reactance exceeds capacitive reactance (X_L > X_C) for phasor construction.'
      ],
      steps: [
        {
          stepNumber: 1,
          description: 'Draw current phasor I along horizontal axis and construct component voltage phasors.',
          descriptionTa: 'மின்னோட்ட கட்டத்தை கிடைமட்ட அச்சை நோக்கி வரைந்து மின்னழுத்த கட்டங்களை அமைத்தல்.',
          equation: '\\vec{V}_R = I R \\hat{i}, \\quad \\vec{V}_L = I X_L \\hat{j}, \\quad \\vec{V}_C = -I X_C \\hat{j}',
          note: 'Since V_L and V_C are in opposite directions along vertical axis, net vertical voltage phasor is (V_L - V_C).'
        },
        {
          stepNumber: 2,
          description: 'Apply Pythagorean theorem on the right-angled voltage phasor triangle.',
          descriptionTa: 'செங்கோண மின்னழுத்த முக்கோணத்திற்கு பிதாகரஸ் தேற்றத்தைப் பயன்படுத்துதல்.',
          equation: 'V_0^2 = V_R^2 + (V_L - V_C)^2',
          note: 'V₀ is the hypotenuse representing applied peak supply voltage.'
        },
        {
          stepNumber: 3,
          description: 'Substitute Ohm’s law expressions for component voltages: V_R = I₀R, V_L = I₀X_L, V_C = I₀X_C.',
          descriptionTa: 'மின்னழுத்த மதிப்புகளைப் பிரதியிடுதல்.',
          equation: 'V_0^2 = (I_0 R)^2 + (I_0 X_L - I_0 X_C)^2 = I_0^2 \\left[ R^2 + (X_L - X_C)^2 \\right]',
          note: 'Factor out I₀² from the bracket.'
        },
        {
          stepNumber: 4,
          description: 'Take square root and define Impedance Z = V₀ / I₀.',
          descriptionTa: 'வர்க்கமூலம் எடுத்து மின்மின்னெதிர்ப்பு Z = V₀ / I₀ என வரையறுத்தல்.',
          equation: 'V_0 = I_0 \\sqrt{R^2 + (X_L - X_C)^2} \\implies Z = \\frac{V_0}{I_0} = \\sqrt{R^2 + (X_L - X_C)^2}',
          note: 'Impedance Z is measured in Ohms (Ω).'
        },
        {
          stepNumber: 5,
          description: 'Derive phase angle ϕ from the phasor triangle.',
          descriptionTa: 'கட்டக் கோணம் ϕ-வைக் கணக்கிடுதல்.',
          equation: '\\tan \\phi = \\frac{V_L - V_C}{V_R} = \\frac{I_0 X_L - I_0 X_C}{I_0 R} = \\frac{X_L - X_C}{R}',
          note: 'If X_L > X_C, ϕ is positive (voltage leads current); if X_C > X_L, ϕ is negative (current leads voltage).'
        }
      ],
      finalEquation: 'Z = \\sqrt{R^2 + (X_L - X_C)^2}, \\quad \\tan \\phi = \\frac{X_L - X_C}{R}',
      physicalMeaning: 'Total impedance is the geometric hypotenuse of the impedance triangle with resistance R on base and net reactance (X_L - X_C) on perpendicular.',
      physicalMeaningTa: 'மொத்த மின்மின்னெதிர்ப்பு Z என்பது மின்தடை R மற்றும் நிகர எதிர்வினை (X_L - X_C) ஆகியவற்றின் தொகுபயன் கர்ண மதிப்பாகும்.',
      commonMistakes: [
        'Adding reactances algebraically (Z = R + X_L + X_C), which is strictly WRONG due to 90° phase shifts.',
        'Forgetting to draw the complete Phasor diagram with labeled vectors V_R, V_L, V_C, and (V_L - V_C).',
        'Confusing series resonance condition (X_L = X_C gives Z = R).'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      level: 'Easy',
      title: 'Peak and RMS Voltage Calculation for Domestic Supply',
      question: 'The electric mains supply in a school physics laboratory is specified as 230 V, 50 Hz AC. (i) What is the peak voltage of the supply? (ii) What is the instantaneous voltage at time t = 1/300 s after passing through zero?',
      questionTa: 'பள்ளியின் மின் விநியோகம் 230 V, 50 Hz AC என குறிப்பிடப்பட்டுள்ளது. (i) பெரும மின்னழுத்தம் யாது? (ii) சுழியை கடந்த பின் t = 1/300 s நேரத்தில் கணநேர மின்னழுத்தம் யாது?',
      given: { 'V_rms': '230 V', 'f': '50 Hz', 't': '1/300 s' },
      required: '(i) Peak voltage V₀, (ii) Instantaneous voltage v',
      formulaUsed: 'V_0 = \\sqrt{2} \\cdot V_{rms}, \\quad v = V_0 \\sin (2\\pi f t)',
      steps: [
        { stepNumber: 1, description: 'Calculate peak voltage V₀', math: 'V_0 = 1.4142 \\times 230 = 325.27 \\text{ V} \\approx 325.3 \\text{ V}' },
        { stepNumber: 2, description: 'Calculate angle ωt in radians and degrees', math: '\\omega t = 2\\pi f t = 2\\pi \\times 50 \\times \\left(\\frac{1}{300}\\right) = \\frac{100\\pi}{300} = \\frac{\\pi}{3} = 60^\\circ' },
        { stepNumber: 3, description: 'Calculate instantaneous voltage v', math: 'v = V_0 \\sin 60^\\circ = 325.3 \\times \\frac{\\sqrt{3}}{2} = 325.3 \\times 0.8660 = 281.7 \\text{ V}' }
      ],
      finalAnswer: 'Peak Voltage V₀ = 325.3 V; Instantaneous Voltage v = 281.7 V',
      siUnit: 'Volt (V)',
      shortcutMethod: '230 × √2 = 325.3 V. At 60°, sin 60° = 0.866. 325.3 × 0.866 = 281.7 V.',
      commonErrors: ['Assuming 230 V is the peak value instead of RMS value.', 'Computing sin(π/3) in degrees mode without converting π/3 to 60°.'],
      examTip: 'All commercial AC ratings and voltmeter readings are ALWAYS RMS values unless explicitly specified as peak!'
    },
    {
      level: 'Medium',
      title: 'Step-Down Transformer Calculations and Efficiency',
      question: 'A step-down transformer has 2000 turns in its primary coil and 100 turns in its secondary coil. It is connected to a 220 V AC main supply to drive a load drawing 10 A current at the secondary. Assuming the transformer has 90% efficiency, calculate: (i) Output secondary voltage, (ii) Output power, (iii) Input primary current.',
      questionTa: 'ஒரு இறக்கு மின்மாற்றியின் முதன்மை சுற்றில் 2000 சுற்றுகளும் துணை சுற்றில் 100 சுற்றுகளும் உள்ளன. 220 V AC மூலத்தில் இணைக்கப்பட்டு துணை சுற்றில் 10 A மின்னோட்டம் எடுக்கப்படுகிறது. பயனுறுதிறன் 90% எனில் (i) துணை மின்னழுத்தம், (ii) வெளியீட்டுத் திறன், (iii) முதன்மை மின்னோட்டம் காண்க.',
      given: { 'N_p': '2000', 'N_s': '100', 'V_p': '220 V', 'I_s': '10 A', 'η': '90% = 0.90' },
      required: '(i) V_s, (ii) P_out, (iii) I_p',
      formulaUsed: '\\frac{V_s}{V_p} = \\frac{N_s}{N_p}, \\quad P_{out} = V_s I_s, \\quad \\eta = \\frac{P_{out}}{P_{in}} = \\frac{V_s I_s}{V_p I_p}',
      steps: [
        { stepNumber: 1, description: 'Calculate secondary voltage V_s', math: 'V_s = V_p \\left( \\frac{N_s}{N_p} \\right) = 220 \\times \\left( \\frac{100}{2000} \\right) = 220 \\times \\frac{1}{20} = 11 \\text{ V}' },
        { stepNumber: 2, description: 'Calculate output power P_out', math: 'P_{out} = V_s \\cdot I_s = 11 \\text{ V} \\times 10 \\text{ A} = 110 \\text{ W}' },
        { stepNumber: 3, description: 'Calculate input primary current using efficiency equation', math: 'P_{in} = \\frac{P_{out}}{\\eta} = \\frac{110}{0.90} = 122.22 \\text{ W} \\\\\nI_p = \\frac{P_{in}}{V_p} = \\frac{122.22}{220} = 0.556 \\text{ A}' }
      ],
      finalAnswer: 'Secondary Voltage V_s = 11 V; Output Power P_out = 110 W; Primary Current I_p = 0.556 A',
      siUnit: 'V, W, and A',
      shortcutMethod: 'Ideal I_p = 10 / 20 = 0.5 A. Real I_p with 90% efficiency = 0.5 / 0.9 = 0.556 A.',
      commonErrors: ['Multiplying efficiency instead of dividing when computing input power P_in = P_out / η.', 'Inverting the transformation ratio.'],
      examTip: 'Note that as voltage steps DOWN by 20 times (220V → 11V), current steps UP by 20 times (0.5A → 10A).'
    },
    {
      level: 'Exam-Level',
      title: 'Series LCR Resonant Frequency, Impedance, Q-Factor and Power Factor',
      question: 'A series LCR circuit contains a resistor R = 10 Ω, an inductor L = 100 mH (0.1 H), and a capacitor C = 25 μF (25 × 10⁻⁶ F) connected across a 200 V variable-frequency AC power source. Calculate: (i) Resonant angular frequency ω_r and resonant frequency f_r, (ii) Impedance and current amplitude at resonance, (iii) Quality factor Q of the circuit, (iv) Power consumed at resonance.',
      questionTa: 'R = 10 Ω, L = 100 mH, C = 25 μF கொண்ட தொடர் LCR சுற்று 200 V மாறா அதிர்வெண் AC மூலத்துடன் இணைக்கப்பட்டுள்ளது. (i) ஒத்ததிர்வு அதிர்வெண் f_r, (ii) ஒத்ததிர்வில் மின்மின்னெதிர்ப்பு மற்றும் மின்னோட்டம், (iii) Q-காரணி, (iv) ஒத்ததிர்வில் நுகரப்படும் திறன் ஆகியவற்றைக் காண்க.',
      given: { 'R': '10 Ω', 'L': '100 mH = 0.1 H', 'C': '25 μF = 25 × 10⁻⁶ F', 'V_rms': '200 V' },
      required: '(i) ω_r and f_r, (ii) Z_res and I_rms, (iii) Q-Factor, (iv) P_avg at resonance',
      formulaUsed: '\\omega_r = \\frac{1}{\\sqrt{LC}}, \\quad f_r = \\frac{\\omega_r}{2\\pi}, \\quad Z_{res} = R, \\quad I_{rms} = \\frac{V_{rms}}{Z}, \\quad Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}}, \\quad P = V_{rms} I_{rms}',
      steps: [
        { stepNumber: 1, description: 'Calculate resonant angular frequency ω_r', math: 'LC = 0.1 \\times (25 \\times 10^{-6}) = 2.5 \\times 10^{-6} \\text{ s}^2 \\\\\n\\sqrt{LC} = \\sqrt{2.5 \\times 10^{-6}} = 1.5811 \\times 10^{-3} \\text{ s} \\\\\n\\omega_r = \\frac{1}{1.5811 \\times 10^{-3}} = 632.45 \\text{ rad/s} \\\\\nf_r = \\frac{632.45}{2 \\times 3.1416} = 100.66 \\text{ Hz}' },
        { stepNumber: 2, description: 'Calculate impedance and RMS current at resonance', math: 'Z_{res} = R = 10 \\text{ }\\Omega \\quad (\\text{since } X_L = X_C) \\\\\nI_{rms} = \\frac{V_{rms}}{Z_{res}} = \\frac{200 \\text{ V}}{10 \\text{ }\\Omega} = 20 \\text{ A}' },
        { stepNumber: 3, description: 'Calculate Quality factor Q', math: 'Q = \\frac{1}{R}\\sqrt{\\frac{L}{C}} = \\frac{1}{10}\\sqrt{\\frac{0.1}{25 \\times 10^{-6}}} = \\frac{1}{10}\\sqrt{4000} = \\frac{1}{10} \\times 63.245 = 6.32' },
        { stepNumber: 4, description: 'Calculate average power consumed at resonance (cos ϕ = 1)', math: 'P_{avg} = V_{rms} \\cdot I_{rms} \\cdot \\cos 0^\\circ = 200 \\text{ V} \\times 20 \\text{ A} \\times 1 = 4000 \\text{ W} = 4 \\text{ kW}' }
      ],
      finalAnswer: 'Resonant Frequency f_r = 100.7 Hz (ω_r = 632.5 rad/s); Impedance Z = 10 Ω; Current I_rms = 20 A; Q-factor = 6.32; Power P = 4 kW',
      siUnit: 'Hz, Ω, A, Dimensionless Q, kW',
      shortcutMethod: 'At resonance, power factor cos ϕ = 1.0, so power is simply V²/R = 200² / 10 = 40,000 / 10 = 4000 W = 4 kW.',
      commonErrors: ['Calculating impedance using reactance at non-resonant frequency instead of recognizing Z = R at resonance.', 'Confusing angular frequency ω_r (rad/s) with frequency f_r (Hz).'],
      examTip: 'Classic 5-mark board exam numerical problem. Always state that at resonance, X_L = X_C and cos ϕ = 1.'
    }
  ],
  diagrams: [
    {
      id: 'diag-4-1',
      name: 'AC Alternator / Generator Construction and Working',
      nameTa: 'AC மின்னியற்றியின் அமைப்பு மற்றும் செயல்படும் விதம்',
      purpose: 'To illustrate the rectangular armature coil rotating in magnetic field, slip rings, carbon brushes, and external load circuit.',
      components: ['Permanent magnet North and South poles', 'Armature coil ABCD', 'Slip rings R₁ and R₂', 'Carbon contact brushes B₁ and B₂', 'External load resistor'],
      labelsEn: ['North Magnetic Pole', 'South Magnetic Pole', 'Armature Coil ABCD', 'Rotation Axis', 'Continuous Slip Rings R₁, R₂', 'Carbon Brushes B₁, B₂', 'External AC Load Circuit'],
      labelsTa: ['வட காந்த துருவம்', 'தென் காந்த துருவம்', 'சுழலும் கம்பிச்சுருள் ABCD', 'சுழற்சி அச்சு', 'வழுக்கு வளையங்கள் R₁, R₂', 'கார்பன் தூரிகைகள் B₁, B₂', 'வெளி AC மின்சுற்று'],
      stepByStepExplanation: [
        'Draw two facing magnet poles North (left) and South (right) with horizontal magnetic field arrows.',
        'Place rectangular coil ABCD mounted on a central horizontal rotation shaft.',
        'Connect coil end A to full slip ring R₁ and end D to slip ring R₂.',
        'Place spring-loaded carbon brushes B₁ and B₂ resting on the slip rings.',
        'Connect brushes to external load resistor showing sinusoidal output wave.'
      ],
      studentObservation: 'Full slip rings maintain continuous connection, reversing output current polarity every 180° rotation (unlike split commutators in DC generators).',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Drawing split commutator rings (DC generator) instead of two complete continuous slip rings (AC alternator).', 'Forgetting rotation direction arrow on shaft.'],
      aiImagePrompt: 'Scientific 3D vector diagram of a single-phase AC Generator. Rectangular copper coil ABCD situated between North (red) and South (blue) magnet poles. Central rotating axis with directional arrow. Bottom ends of coil connected to two distinct golden brass slip rings R1 and R2 with spring-loaded black carbon brushes B1 and B2. External load resistor with oscilloscope screen displaying a smooth sine wave. Clean white background, textbook style.'
    },
    {
      id: 'diag-4-2',
      name: 'Step-Up and Step-Down Transformer Construction with Core Lamination',
      nameTa: 'ஏற்று மற்றும் இறக்கு மின்மாற்றியின் அமைப்பு மற்றும் தகடுகளாக்கப்பட்ட உள்ளகம்',
      purpose: 'To show the laminated soft iron core, primary coil, secondary coil, and mutual magnetic flux path.',
      components: ['Laminated soft iron core rectangular frame', 'Primary winding N_p turns', 'Secondary winding N_s turns', 'Alternating magnetic flux Φ loop'],
      labelsEn: ['Laminated Soft Iron Core', 'Primary Input Winding (V_p, N_p)', 'Secondary Output Winding (V_s, N_s)', 'Mutual Magnetic Flux Loop Φ', 'Thin insulating varnish laminations'],
      labelsTa: ['தகடுகளாக்கப்பட்ட மென் இரும்பு உள்ளகம்', 'முதன்மை கம்பிச்சுருள் (V_p, N_p)', 'துணை கம்பிச்சுருள் (V_s, N_s)', 'பரிமாற்று காந்தப்பாய வளையம் Φ', 'காப்பு வார்னிஷ் பூச்சு'],
      stepByStepExplanation: [
        'Draw a rectangular closed core made of stacked thin laminated sheets.',
        'Wind primary coil with N_p turns on left limb connected to AC input supply V_p.',
        'Wind secondary coil with N_s turns on right limb connected to load V_s.',
        'Draw dashed oval inside core showing mutual alternating magnetic flux Φ.'
      ],
      studentObservation: 'Laminating the core into thin insulated sheets breaks the path of eddy currents, drastically reducing core heating losses.',
      examImportance: 'Very Important',
      commonDrawingMistakes: ['Drawing solid metal block instead of laminated sheet slices.', 'Drawing primary and secondary connected electrically (they are linked ONLY magnetically!).'],
      aiImagePrompt: 'Detailed educational illustration of a Transformer with a rectangular laminated silicon-steel core made of sliced insulated plates. Primary copper winding on left leg connected to AC symbol, secondary copper winding on right leg. Dashed green magnetic flux arrows circulating inside core. Step-up configuration showing more turns on secondary. White background, vector format.'
    }
  ],
  graphs: [
    {
      id: 'graph-4-1',
      name: 'Series LCR Resonance Curve (Current vs Frequency for High and Low Resistance)',
      nameTa: 'தொடர் LCR ஒத்ததிர்வு வளைகோடு (அதிர்வெண் vs மின்னோட்டம்)',
      xAxis: 'Applied AC Frequency f (Hz)',
      yAxis: 'Current Amplitude I_rms (Amperes, A)',
      units: 'f in Hz, I in A',
      shape: 'Bell-shaped symmetric resonant curve peaking sharply at resonant frequency f_r.',
      importantPoints: ['Resonant peak at f = f_r (I_max = V_rms / R)', 'Half-power frequencies f₁ and f₂ where I = I_max / √2', 'Bandwidth Δf = f₂ - f₁ = R / (2πL)'],
      slope: 'Positive slope for f < f_r (circuit is capacitive), negative slope for f > f_r (circuit is inductive).',
      physicalMeaning: 'Demonstrates resonance and frequency selectivity. Smaller resistance R produces a taller and sharper resonance peak (higher Q-factor).',
      interpretation: 'At resonance (f_r), inductive and capacitive reactances cancel completely, making impedance purely resistive (Z = R).',
      mathematicalRelationship: 'I_{rms} = \\frac{V_{rms}}{\\sqrt{R^2 + (2\\pi f L - \\frac{1}{2\\pi f C})^2}}',
      examQuestions: ['Plot current vs frequency for series LCR circuit for two different values of R and explain Q-factor.'],
      commonMistakes: ['Drawing resonant curve starting from origin (at f=0, I=0 because X_C → ∞ blocks DC).'],
      howToDrawInExam: 'Draw frequency on x-axis and current on y-axis. Draw a tall sharp peak labeled "Small R (High Q)" and a broader flatter peak labeled "Large R (Low Q)", both peaking at the exact same resonant frequency f_r.',
      aiGraphPrompt: 'Clean educational scientific graph of Series LCR Resonance. Horizontal x-axis labeled Frequency f (Hz) with central mark f_r. Vertical y-axis labeled Current I_rms (A). Two bell-shaped resonance curves peaking at f_r: a sharp narrow blue curve labeled "Low Resistance R1 (High Q Sharp Tuning)" and a broader orange curve labeled "High Resistance R2 (Low Q)". Labeled half-power bandwidth lines. White background, textbook style.'
    }
  ],
  experiments: [
    {
      id: 'exp-4-1',
      name: 'Demonstration of Mutual Induction between Two Coaxial Coils',
      nameTa: 'இரு அச்சு ஒன்றிய கம்பிச்சுருள்களுக்கு இடையே பரிமாற்று மின்தூண்டல் செயல்முறை விளக்கம்',
      apparatus: ['Primary coil P (inner)', 'Secondary coil S (outer with large number of turns)', '6V DC battery', 'Tapping key', 'Sensitive center-zero ballistic galvanometer', 'Soft iron core rod'],
      principle: 'Mutual induction: A change of current in the primary coil induces an EMF and current in the neighboring secondary coil (ε_s = -M dI_p/dt).',
      principleTa: 'முதன்மை சுருளில் மின்னோட்டம் மாறும் போது அருகிலுள்ள துணை சுருளில் மின்னியக்கு விசை தூண்டப்படும் தத்துவம்.',
      procedure: [
        'Connect primary coil P in series with a 6V battery and tapping key.',
        'Connect secondary coil S directly to the sensitive galvanometer.',
        'Press the tapping key and observe instantaneous galvanometer deflection.',
        'Release the tapping key and observe momentary deflection in the OPPOSITE direction.',
        'Insert a soft iron rod inside the primary coil and repeat tapping to observe greatly magnified deflection.'
      ],
      observation: 'Deflection occurs ONLY at the moments of making and breaking the primary circuit (when dI/dt ≠ 0). Deflection is zero when steady current flows.',
      result: 'Induced EMF depends directly on the rate of current change and is dramatically enhanced by introducing a high-permeability iron core.',
      precautions: ['Do not keep tapping key pressed continuously as DC will not produce continuous induction.'],
      realLifeImportance: 'The working principle of ignition coils in gasoline automobiles and wireless inductive phone chargers.',
      aiLabPrompt: 'Physics lab demonstration of Mutual Induction. Inner primary coil with battery and key inserted inside a larger secondary coil connected to a center-zero galvanometer with a moving pointer. A cylindrical soft iron rod placed beside the setup. Clean wooden workbench, educational lighting, vector style, white background.'
    }
  ],
  aiLesson: {
    lessonTitle: '3-Minute AI Interactive Lesson: The Symphony of AC Power & Series LCR Resonance',
    targetDuration: '5 Minutes',
    visualStyle: 'Dynamic 3D alternating voltage waveforms, rotating phasors, and pulsating magnetic flux fields',
    format: '3D Scientific Animation & Interactive Explainer',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: How Michael Faraday Lit the Modern World',
        explanationEn: 'Every light bulb, factory motor, and laptop in the world runs on Alternating Current. But where did this power come from?',
        explanationTa: 'உலகின் அனைத்து மின்விளக்குகளும் மின்மோட்டார்களும் இயங்கும் AC மின்சாரம் எவ்வாறு உருவானது?',
        explanationBilingual: 'In 1831, Faraday discovered that changing magnetic flux generates electric current: ε = -dΦ/dt.',
        narrationScript: 'Welcome to Chapter 4! By simply waving a magnet near a wire coil, Faraday unlocked the secret of electrical power generation that drives our modern planet.',
        animationDescription: '3D bar magnet plunging into a copper coil, causing a glowing pulse of electric current to illuminate an entire 3D modern cityscape at night.',
        keywordsDisplayed: ['Faraday’s Law', 'Magnetic Flux Φ = B·A', 'ε = -dΦ/dt'],
        realLifeExample: 'Hydroelectric generators in massive dams like Mettur Dam.',
        interactiveQuestion: {
          question: 'Lenz’s law of electromagnetic induction is a direct consequence of the conservation of:',
          questionTa: 'மின்காந்தத் தூண்டலின் லென்ஸ் விதி எதன் மாறாத்தத்துவத்தின் நேரடி விளைவாகும்?',
          options: ['Energy', 'Electric Charge', 'Momentum', 'Mass'],
          optionsTa: ['ஆற்றல் (Energy)', 'மின்னூட்டம்', 'உந்தம்', 'நிறை'],
          correctIndex: 0,
          explanation: 'Lenz’s law ensures energy conservation: the mechanical work done against magnetic repulsion is converted into electrical energy.'
        },
        cameraDirection: 'Dramatic crane shot over illuminated 3D city grid.'
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: AC Generator & The Sine Wave',
        explanationEn: 'Rotating a coil of N turns inside magnetic field B produces a smooth sine wave voltage: ε = NBAω sin ωt.',
        explanationTa: 'காந்தப்புலத்தில் சுழலும் கம்பிச்சுருள் சைன் வடிவ மின்னழுத்தத்தை உருவாக்குகிறது: ε = NBAω sin ωt.',
        explanationBilingual: 'Peak voltage ε₀ = NBAω. In India, AC oscillates at 50 Hz, changing direction 100 times every second!',
        narrationScript: 'As the rotor spins at 3000 RPM, the rate of magnetic flux change oscillates continuously, generating the pure sine wave that powers our homes at 230 Volts RMS.',
        animationDescription: 'Rotating rectangular armature coil between magnet poles with an animated 3D sine wave trailing from the slip rings onto a glowing grid.',
        keywordsDisplayed: ['ε = ε₀ sin ωt', 'ε₀ = NBAω', '50 Hz AC Mains'],
        realLifeExample: 'Thermal and nuclear power turbine alternators.',
        interactiveQuestion: {
          question: 'If the speed of rotation (ω) of an AC generator is doubled, the peak induced EMF becomes:',
          questionTa: 'AC மின்னியற்றியின் சுழற்சி வேகம் (ω) இருமடங்கானால், பெரும மின்னியக்கு விசை:',
          options: ['Doubled', 'Quadrupled', 'Halved', 'Unchanged'],
          optionsTa: ['இரு மடங்காகும்', '4 மடங்காகும்', 'பாதியாகும்', 'மாறாது'],
          correctIndex: 0,
          explanation: 'Since ε₀ = NBAω, peak voltage is directly proportional to angular speed ω, so doubling ω doubles the peak EMF.'
        },
        cameraDirection: 'Synchronized rotating camera tracking the armature coil.'
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Working Principle: Transformers & Core Lamination',
        explanationEn: 'Transformers step AC voltages up or down via mutual induction (V_s / V_p = N_s / N_p).',
        explanationTa: 'மின்மாற்றி பரிமாற்று மின்தூண்டல் மூலம் மின்னழுத்தத்தை மாற்றுகிறது (V_s / V_p = N_s / N_p).',
        explanationBilingual: 'Laminating the iron core stops wasteful eddy currents and prevents overheating.',
        narrationScript: 'To transmit power across hundreds of kilometers without losing energy in cable resistance, step-up transformers boost voltage to 400,000 Volts, dropping current to tiny values!',
        animationDescription: 'Cutaway of a high-voltage substation transformer showing laminated silicon-steel core plates with glowing green magnetic flux lines circulating smoothly without eddy current heating.',
        keywordsDisplayed: ['V_s/V_p = N_s/N_p', 'Laminated Core', 'Eddy Current Reduction'],
        realLifeExample: 'National Power Grid long-distance 400 kV transmission lines.',
        interactiveQuestion: {
          question: 'Why can a transformer NOT step up a direct current (DC) battery voltage?',
          questionTa: 'மின்மாற்றியால் DC மின்கல மின்னழுத்தத்தை ஏன் உயர்த்த முடியாது?',
          options: ['DC creates constant magnetic flux (dΦ/dt = 0)', 'DC voltage is too high', 'DC has no resistance', 'Transformers only work on batteries'],
          optionsTa: ['DC மாறா காந்தப்பாயத்தை உருவாக்குகிறது (dΦ/dt = 0)', 'மின்னழுத்தம் அதிகம்', 'மின்தடை இல்லை', 'மின்கலத்தில் மட்டுமே இயங்கும்'],
          correctIndex: 0,
          explanation: 'DC produces steady magnetic flux, so rate of change dΦ/dt is zero and no secondary EMF can be induced.'
        },
        cameraDirection: 'Exploded 3D view of transformer laminations.'
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Mathematical Derivation: Series LCR Impedance Phasors',
        explanationEn: 'Resistor voltage is in phase, inductor leads by 90°, capacitor lags by 90°. Total Impedance Z = √[R² + (X_L - X_C)²].',
        explanationTa: 'மின்மின்னெதிர்ப்பு Z = √[R² + (X_L - X_C)²] என கட்ட வரைபடம் மூலம் பெறப்படுகிறது.',
        explanationBilingual: 'Impedance is the vector hypotenuse of resistance R and net reactance (X_L - X_C).',
        narrationScript: 'Using the phasor method, the 90-degree phase shifts form a right-angled triangle where the hypotenuse gives the total impedance Z of the entire circuit!',
        animationDescription: '3D rotating phasor arrows for V_R (horizontal), V_L (pointing up), and V_C (pointing down) combining into resultant hypotenuse V₀.',
        keywordsDisplayed: ['Z = √[R² + (X_L - X_C)²]', 'tan ϕ = (X_L - X_C)/R', 'Phasor Diagram'],
        realLifeExample: 'Audio equalizer graphic equalizer filter circuits.',
        interactiveQuestion: {
          question: 'In an AC circuit containing only a pure capacitor, the current:',
          questionTa: 'தனித்த மின்தேக்கி மட்டும் கொண்ட AC சுற்றில் மின்னோட்டமானது:',
          options: ['Leads voltage by 90° (π/2)', 'Lags voltage by 90°', 'Is in phase with voltage', 'Lags voltage by 180°'],
          optionsTa: ['மின்னழுத்தத்தை விட 90° முந்தும்', '90° பின்தங்கும்', 'ஒரே கட்டத்தில் இருக்கும்', '180° பின்தங்கும்'],
          correctIndex: 0,
          explanation: 'In a pure capacitor, current leads alternating voltage by π/2 radians (90°).'
        },
        cameraDirection: '3D rotating camera around vector phasor plane.'
      },
      {
        sceneNumber: 5,
        sceneTitle: 'Real-Life Application: Series Resonance & Radio Tuning',
        explanationEn: 'At resonant frequency f_r = 1 / (2π√LC), reactances cancel (X_L = X_C). Impedance drops to minimum (Z = R) and current peaks!',
        explanationTa: 'ஒத்ததிர்வில் X_L = X_C ஆகி மின்மின்னெதிர்ப்பு Z = R என குறைந்து மின்னோட்டம் பெருமத்தை அடைகிறது.',
        explanationBilingual: 'Radio tuners use series resonance to lock onto 98.3 FM while rejecting all other stations.',
        narrationScript: 'When you tune your car radio to 98.3 MHz, you adjust a variable capacitor until the circuit’s resonant frequency matches the station perfectly, amplifying the music crystal clear!',
        animationDescription: 'Radio tuning dial turning to 98.3 MHz, causing a sharp resonance curve to glow brightly as music waves radiate outward.',
        keywordsDisplayed: ['f_r = 1 / (2π√LC)', 'Z_min = R', 'Q-Factor = (1/R)√(L/C)'],
        realLifeExample: 'FM Radio and Wireless Wi-Fi antenna tuning.',
        interactiveQuestion: {
          question: 'At electrical resonance in a series LCR circuit, the power factor (cos ϕ) is:',
          questionTa: 'தொடர் LCR சுற்றின் ஒத்ததிர்வில் திறன் காரணியின் (cos ϕ) மதிப்பு என்ன?',
          options: ['1.0 (Unity)', '0', '0.5', 'Infinity'],
          optionsTa: ['1.0 (ஒன்று)', '0', '0.5', 'முடிவிலி'],
          correctIndex: 0,
          explanation: 'At resonance, ϕ = 0°, so power factor cos 0° = 1.0 (purely resistive circuit).'
        },
        cameraDirection: 'Smooth zoom from car radio antenna to internal LC chip.'
      },
      {
        sceneNumber: 6,
        sceneTitle: 'Summary & Key Formulas to Ace the Board Exam',
        explanationEn: 'Master the 3 high-yield derivations: AC Alternator EMF, Transformer working & losses, and Series LCR Phasor Impedance.',
        explanationTa: 'AC மின்னியற்றி, மின்மாற்றி, மற்றும் தொடர் LCR கட்ட வரைபடம் ஆகிய 5-மதிப்பெண் வினாக்களை முழுமையாகப் படியுங்கள்.',
        explanationBilingual: 'Remember: RMS = Peak / √2; at resonance Z = R and cos ϕ = 1.0!',
        narrationScript: 'Keep your phasor angles straight, memorize peak-to-RMS conversions, and you will score 100% in Electromagnetic Induction and Alternating Current!',
        animationDescription: 'Gold star student badge floating with all key formulas listed neatly.',
        keywordsDisplayed: ['ε = NBAω sin ωt', 'k = V_s/V_p = N_s/N_p', 'Z = √[R²+(X_L-X_C)²]', 'f_r = 1/(2π√LC)'],
        realLifeExample: 'Complete Chapter 4 board mastery.',
        interactiveQuestion: {
          question: 'What is the RMS value of alternating voltage for an AC supply with peak voltage of 325 Volts?',
          questionTa: '325 V பெரும மின்னழுத்தம் கொண்ட AC மூலத்தின் RMS மதிப்பு என்ன?',
          options: ['230 V', '325 V', '162.5 V', '460 V'],
          optionsTa: ['230 V', '325 V', '162.5 V', '460 V'],
          correctIndex: 0,
          explanation: 'V_rms = V₀ / √2 = 325 / 1.414 ≈ 230 Volts.'
        },
        cameraDirection: 'Triumphant celebratory pull-out shot.'
      }
    ]
  },
  voiceNarration: {
    scriptEn: 'Hello Class 12 Physics achievers! Welcome to Chapter 4: Electromagnetic Induction and Alternating Current. Let us review the essential concepts. Faraday’s law states that induced EMF is proportional to the rate of change of magnetic flux, while Lenz’s law guarantees conservation of energy by opposing the flux change. Eddy currents swirling in bulk conductors provide electromagnetic braking and power induction cookers. In self-inductance, a coil opposes changes in its own current, storing energy U equals half L I squared. The AC Alternator rotates an armature coil of N turns at angular velocity omega in magnetic field B, generating a sinusoidal EMF: epsilon equals NBA omega sin omega t. Transformers step voltages up or down with ratio V secondary over V primary equals N secondary over N primary equals I primary over I secondary, minimizing long-distance transmission losses. In alternating current circuits, remember that in a resistor current is in phase, in an inductor voltage leads by ninety degrees with reactance omega L, and in a capacitor current leads by ninety degrees with reactance one over omega C. In a series LCR circuit, total impedance is Z equals square root of R squared plus X_L minus X_C squared. At resonant frequency f_r equals one over two pi root LC, reactances cancel, impedance reaches minimum Z equals R, and current peaks. Practice these phasor derivations and numericals for board exam perfection!',
    scriptTa: 'வணக்கம் மாணவர்களே! அத்தியாயம் 4: மின்காந்தத் தூண்டலும் மாறுதிசை மின்னோட்டமும் பாடத்திற்கு உங்களை அன்புடன் வரவேற்கிறோம். ஃபாரடேயின் விதிப்படி காந்தப்பாய மாற்ற வீதத்திற்கு ஏற்ப மின்னியக்கு விசை தூண்டப்படுகிறது; லென்ஸ் விதி ஆற்றல் மாறாத்தன்மையை நிலைநாட்டுகிறது. திட உலோகப் பொருட்களில் தூண்டப்படும் சுழல் மின்னோட்டங்கள் மின்காந்தத் தடையிலும் தூண்டல் அடுப்புகளிலும் பயன்படுகின்றன. தன்மின்தூண்டலில் சேமிக்கப்படும் ஆற்றல் U = ½ L I² ஆகும். AC மின்னியற்றியில் தூண்டப்படும் கணநேர மின்னியக்கு விசை ε = NBAω sin ωt என அமைகிறது. மின்மாற்றியில் உருமாற்று விகிதம் k = V_s / V_p = N_s / N_p = I_p / I_s ஆகும்; உள்ளகத்தை மெல்லிய தகடுகளாக்குவதன் மூலம் சுழல் மின்னோட்ட இழப்பு குறைக்கப்படுகிறது. AC சுற்றுகளில் மின்தடையில் கட்ட வேறுபாடு சுழியாகும்; மின்தூண்டியில் மின்னழுத்தம் 90° முந்தும் (X_L = ωL); மின்தேக்கியில் மின்னோட்டம் 90° முந்தும் (X_C = 1/ωC). தொடர் LCR சுற்றின் மின்மின்னெதிர்ப்பு Z = √[R² + (X_L - X_C)²] ஆகும். ஒத்ததிர்வு அதிர்வெண் f_r = 1 / (2π√LC) ஆகும்போது மின்மின்னெதிர்ப்பு குறைந்து மின்னோட்டம் பெருமத்தை அடைகிறது. இந்த முக்கிய 5-மதிப்பெண் வினாக்களைத் தீவிரமாகப் பயிற்சி செய்யுங்கள்!',
    scriptBilingual: 'Hello Students! Welcome to Electromagnetic Induction and AC. Let us review: Faraday’s Law gives ε = -N(dΦ/dt). Lenz’s law represents Conservation of Energy. Alternator induces ε = NBAω sin ωt. Transformers step up/down voltage via k = V_s/V_p = N_s/N_p = I_p/I_s (Works only on AC!). Domestic mains is 230 V RMS (Peak V₀ = 325 V). In AC circuits, Inductor has X_L = ωL (V leads I by 90°); Capacitor has X_C = 1/ωC (I leads V by 90°). Series LCR impedance is Z = √[R² + (X_L - X_C)²]. At resonance (f_r = 1/[2π√LC]), X_L = X_C, Z = R (minimum), current is maximum, and power factor cos ϕ = 1.0. All the very best for your exams!',
    audioDurationSeconds: 180,
    recommendedTone: 'Inspiring, authoritative, clear, and encouraging physics master teacher voice.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'What is the phase difference between voltage and current in a pure inductive AC circuit?',
        qTa: 'தூய மின்தூண்டல் மட்டும் கொண்ட AC சுற்றில் மின்னழுத்தத்திற்கும் மின்னோட்டத்திற்கும் இடைப்பட்ட கட்ட வேறுபாடு என்ன?',
        a: 'Voltage leads current by 90° (π/2 radians) or +π/2.',
        aTa: 'மின்னழுத்தம் மின்னோட்டத்தை விட 90° (π/2 ரேடியன்) முந்தும்.'
      },
      {
        q: 'What is the power factor of a pure capacitor connected to an AC source?',
        qTa: 'தூய மின்தேக்கி மட்டும் கொண்ட AC சுற்றின் திறன் காரணி என்ன?',
        a: 'Zero (cos 90° = 0), consuming zero average power.',
        aTa: 'சுழி (cos 90° = 0), சராசரி திறன் சுழியாகும்.'
      },
      {
        q: 'Why are transformer cores constructed using thin insulated laminated sheets?',
        qTa: 'மின்மாற்றி உள்ளகங்கள் மெல்லிய காப்பிடப்பட்ட தகடுகளாக அமைக்கப்படுவது ஏன்?',
        a: 'To break the circulation path of eddy currents and minimize core heating energy losses.',
        aTa: 'சுழல் மின்னோட்டப் பாதையைத் துண்டித்து வெப்ப ஆற்றல் இழப்பைக் குறைக்க.'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'State Lenz’s Law and show that it obeys the Law of Conservation of Energy.',
        qTa: 'லென்ஸ் விதியைக் கூறி அது ஆற்றல் மாறாத்தத்துவத்திற்கு உட்பட்டது என்பதைக் காட்டுக.',
        a: 'Lenz’s law states that induced current always flows in such a direction as to oppose the flux change producing it. Mechanical work done against the opposing magnetic force is converted into electrical energy in the coil, satisfying energy conservation.',
        aTa: 'தூண்டப்பட்ட மின்னோட்டம் அது உருவாவதற்குக் காரணமான காந்தப்பாய மாற்றத்தை எப்போதும் எதிர்க்கும் திசையில் பாயும். எதிர்க்கும் விசைக்கு எதிராகச் செய்யப்படும் இயந்திர வேலையே மின்னாற்றலாக மாறுவதால் ஆற்றல் மாறாத்தத்துவம் நிலைநாட்டப்படுகிறது.'
      },
      {
        q: 'Define Quality Factor (Q-factor) of a series resonant LCR circuit.',
        qTa: 'தொடர் LCR ஒத்ததிர்வு சுற்றின் Q-காரணி வரையறுக்கவும்.',
        a: 'Q-factor is the ratio of resonant frequency to the half-power bandwidth (Q = f_r / Δf = [1/R] · √(L/C)). It measures the sharpness of resonance and frequency selectivity.',
        aTa: 'Q-காரணி என்பது ஒத்ததிர்வு அதிர்வெண்ணிற்கும் அரைத்திறன் அலைவரிசை அகலத்திற்கும் உள்ள தகவு ஆகும் (Q = [1/R] · √(L/C)). இது ஒத்ததிர்வின் கூர்மையை அளவிடுகிறது.'
      },
      {
        q: 'What is wattless current in an AC circuit?',
        qTa: 'மாறுதிசை மின்சுற்றில் திறனற்ற மின்னோட்டம் என்றால் என்ன?',
        a: 'The component of AC current (I_rms sin ϕ) that is 90° out of phase with applied voltage, consuming zero average power (P = V_rms · I_rms sin ϕ · cos 90° = 0).',
        aTa: 'மின்னழுத்தத்துடன் 90° கட்ட வேறுபாட்டில் உள்ள மின்னோட்டக் கூறு (I_rms sin ϕ) ஆகும். இக்கூறினால் நுகரப்படும் சராசரி திறன் சுழியாகும்.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Explain the various energy losses in a practical transformer and how they are minimized.',
        qTa: 'ஒரு மின்மாற்றியில் ஏற்படும் பல்வேறு ஆற்றல் இழப்புகளையும் அவை எவ்வாறு குறைக்கப்படுகின்றன என்பதையும் விளக்குக.',
        a: '1. Copper Loss (I²R): Minimized by using thick copper wire windings. 2. Eddy Current Loss: Minimized by laminating soft iron core with varnish. 3. Hysteresis Loss: Minimized by using silicon steel/soft iron core with narrow B-H loop. 4. Flux Leakage: Minimized by winding primary and secondary coils coaxially on the same limb.',
        aTa: '1. தாமிர இழப்பு (I²R): தடிமனான தாமிரக் கம்பிகளைப் பயன்படுத்துவதன் மூலம் குறைக்கப்படுகிறது. 2. சுழல் மின்னோட்ட இழப்பு: உள்ளகத்தை மெல்லிய தகடுகளாக்குவதன் மூலம் குறைக்கப்படுகிறது. 3. தயக்க இழப்பு: மென் இரும்பு/சிலிக்கான் எஃகு உள்ளகம் மூலம் குறைக்கப்படுகிறது. 4. பாயக் கசிவு: ஒரே மூட்டின் மீது சுருள்களை அமைப்பதன் மூலம் குறைக்கப்படுகிறது.'
      },
      {
        q: 'Derive the expression for the self-inductance of a long solenoid.',
        qTa: 'நீண்ட வரிச்சுருளின் தன்மின்தூண்டல் எண்ணிற்கான சமன்பாட்டை வருவிக்கவும்.',
        a: 'Magnetic field inside solenoid B = μ₀ n I = μ₀ (N/l) I. Magnetic flux per turn Φ_B = B A = (μ₀ N I A) / l. Total flux linkage N Φ_B = (μ₀ N² A / l) I. Since N Φ_B = L I, self-inductance L = (μ₀ N² A) / l = μ₀ n² A l.',
        aTa: 'வரிச்சுருளின் காந்தப்புலம் B = μ₀ n I = μ₀ (N/l) I. ஒரு சுற்றின் காந்தப்பாயம் Φ_B = B A = (μ₀ N I A) / l. மொத்த பாய இணைப்பு N Φ_B = (μ₀ N² A / l) I. N Φ_B = L I என்பதால் L = (μ₀ N² A) / l = μ₀ n² A l.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Explain the principle, construction and working of an AC Generator / Alternator with a neat diagram and derive the equation for induced EMF.',
        qTa: 'AC மின்னியற்றியின் தத்துவம், அமைப்பு மற்றும் செயல்படும் விதத்தை படத்துடன் விளக்கி தூண்டப்படும் மின்னியக்கு விசைக்கான சமன்பாட்டை வருவிக்கவும்.',
        a: 'Principle: Electromagnetic induction (Faraday’s Law). Describe construction: Armature coil ABCD, Stator field magnets, Slip rings R₁/R₂, Carbon brushes B₁/B₂. Derivation: Magnetic flux at angle θ is Φ_B = BA cos ωt. Total flux linkage N Φ_B = NBA cos ωt. Induced EMF ε = -d(NΦ_B)/dt = -NBA d(cos ωt)/dt = NBAω sin ωt = ε₀ sin ωt, where ε₀ = NBAω.',
        aTa: 'தத்துவம்: மின்காந்தத் தூண்டல். அமைப்பு: கம்பிச்சுருள் ABCD, காந்த முனைகள், வழுக்கு வளையங்கள் R₁/R₂, தூரிகைகள் B₁/B₂. வருவித்தல்: காந்தப்பாயம் Φ_B = BA cos ωt. மொத்த பாயம் N Φ_B = NBA cos ωt. தூண்டப்பட்ட EMF ε = -d(NΦ_B)/dt = NBAω sin ωt = ε₀ sin ωt (இங்கு ε₀ = NBAω).'
      },
      {
        q: 'Derive the expressions for total impedance and phase angle in a series LCR circuit using phasor diagram method. Explain electrical resonance.',
        qTa: 'கட்ட வரைபட முறையில் தொடர் LCR சுற்றின் மின்மின்னெதிர்ப்பு மற்றும் கட்டக் கோணத்தை வருவிக்கவும். மின் ஒத்ததிர்வை விளக்குக.',
        a: 'Draw phasor diagram showing V_R along x-axis, V_L along +y-axis, V_C along -y-axis. Net voltage V₀² = V_R² + (V_L - V_C)² = (I₀R)² + (I₀X_L - I₀X_C)² = I₀²[R² + (X_L - X_C)²]. Derive Z = √[R² + (X_L - X_C)²] and tan ϕ = (X_L - X_C)/R. Explain resonance condition X_L = X_C yielding f_r = 1 / (2π√LC) and Z = R.',
        aTa: 'V_R, V_L, V_C கொண்ட கட்ட வரைபடம் வரைதல். பிதாகரஸ் தேற்றப்படி V₀² = V_R² + (V_L - V_C)² = I₀²[R² + (X_L - X_C)²]. மின்மின்னெதிர்ப்பு Z = √[R² + (X_L - X_C)²] மற்றும் tan ϕ = (X_L - X_C)/R என வருவித்தல். X_L = X_C என்ற ஒத்ததிர்வு நிபந்தனையில் f_r = 1 / (2π√LC) மற்றும் Z = R என விளக்குதல்.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'AC Generator construction, working & EMF derivation (5 Marks)',
      'Series LCR Circuit impedance and resonance derivation (5 Marks)',
      'Transformer principle, construction, and 4 energy losses (5 Marks)',
      'Self-inductance of a solenoid derivation (3 Marks)',
      'RMS and Average values of AC current (2/3 Marks)'
    ]
  },
  faqs: [
    {
      category: 'Conceptual',
      question: 'Why does an ideal capacitor or inductor consume zero average power over a complete AC cycle?',
      questionTa: 'ஒரு முழு AC சுழற்சியில் தூய மின்தேக்கி அல்லது மின்தூண்டி நுகரும் சராசரி திறன் சுழியாவது ஏன்?',
      answer: 'In a pure L or C, the phase difference between voltage and current is 90° (ϕ = π/2). The average power is P_avg = V_rms · I_rms · cos 90° = 0. Energy is temporarily stored in electric/magnetic fields during one quarter cycle and returned to source in the next.',
      answerTa: 'தூய L அல்லது C-ல் கட்டக் கோணம் 90° ஆகும். எனவே P_avg = V_rms · I_rms · cos 90° = 0. கால் சுழற்சியில் சேமிக்கப்படும் ஆற்றல் அடுத்த கால் சுழற்சியில் மூலத்திற்கே திருப்பியளிக்கப்படுகிறது.'
    },
    {
      category: 'Board Exam',
      question: 'Why is high voltage AC preferred for long-distance electrical power transmission?',
      questionTa: 'நீண்ட தொலைவு மின் விநியோகத்திற்கு உயர் மின்னழுத்த AC விரும்பப்படுவது ஏன்?',
      answer: 'For a given power transmission P, stepping up voltage V reduces current I proportionally (I = P/V). Since Joule heat loss in transmission cables is P_loss = I²R, reducing current by a factor of 10 reduces power loss by 100 times!',
      answerTa: 'மின்னழுத்தம் V உயர்த்தப்படும் போது மின்னோட்டம் I குறைகிறது (I = P/V). கம்பி மின்தடை இழப்பு P_loss = I²R என்பதால், மின்னோட்டம் 10 மடங்கு குறைந்தால் வெப்ப இழப்பு 100 மடங்கு குறையும்!'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Adding resistances and reactances algebraically (Z = R + X_L + X_C).',
      correctWay: 'Always use phasor vector addition: Z = √[R² + (X_L - X_C)²].'
    },
    {
      category: 'Diagram',
      mistake: 'Drawing DC commutator split rings instead of continuous slip rings for AC alternator.',
      correctWay: 'AC Alternators use two continuous slip rings R₁ and R₂; DC generators use split-ring commutators.'
    }
  ],
  memoryTricks: [
    {
      title: 'ELI the ICE man (Phase Lead/Lag Rule)',
      titleTa: 'கட்ட முந்துதல் நினைவுக்குறிப்பு',
      trick: '"ELI the ICE man" → In "ELI": E (Voltage) leads I (Current) in L (Inductor). In "ICE": I (Current) leads E (Voltage) in C (Capacitor).',
      explanation: 'Inductor: Voltage leads Current. Capacitor: Current leads Voltage.'
    },
    {
      title: 'Resonance Impedance Shortcut',
      titleTa: 'ஒத்ததிர்வு மின்மின்னெதிர்ப்பு குறுக்குவழி',
      trick: 'At Resonance: X_L = X_C → "Z becomes pure R" (Minimum opposition, Maximum current).',
      explanation: 'Reactances annihilate each other, leaving only pure resistor R.'
    }
  ],
  summary: {
    keyTakeaways: [
      'Faraday’s law (ε = -dΦ/dt) and Lenz’s law govern all electromagnetic induction phenomena.',
      'AC Alternator produces ε = NBAω sin ωt, generating 50 Hz sinusoidal power.',
      'Transformers step AC voltages via k = V_s/V_p = N_s/N_p = I_p/I_s, with minimal core losses.',
      'RMS current is I_rms = I₀ / √2 ≈ 0.707 I₀ for domestic 230 V supply.',
      'Series LCR circuit has impedance Z = √[R² + (X_L - X_C)²] and resonates at f_r = 1 / (2π√LC).'
    ],
    quickRevisionNotes: [
      'Magnetic Flux: Φ_B = B A cos θ; Faraday Law: ε = -N (dΦ_B/dt)',
      'Self-Inductance: L = μ₀ N² A / l; Stored Energy: U = ½ L I²',
      'Transformer: V_s/V_p = N_s/N_p = I_p/I_s; Efficiency: η = P_out / P_in',
      'Reactance: X_L = 2πfL, X_C = 1 / (2πfC)',
      'Series LCR Impedance: Z = √[R² + (X_L - X_C)²]',
      'Resonance: f_r = 1 / (2π √LC), Q = (1/R) √(L/C)',
      'Power: P = V_rms I_rms cos ϕ, Power factor cos ϕ = R / Z'
    ]
  }
};
