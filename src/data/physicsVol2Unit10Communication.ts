import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_10_COMMUNICATION_SYSTEMS: PhysicsChapter = {
  chapterNumber: 10,
  chapterName: 'Communication Systems',
  chapterNameTa: 'தகவல் தொடர்பு அமைப்புகள்',
  unitNumber: 10,
  unitName: 'Communication Systems',
  unitNameTa: 'தகவல் தொடர்பு அமைப்புகள்',
  importance: 'High-Yield (6-8 Marks in Board Exam)',
  overview: 'Exploration of modern electronic communication principles: Block diagram elements (Transmitter, Channel, Receiver), EM wave propagation (Ground, Sky, and Space waves), necessity of Modulation, Amplitude Modulation (AM) mathematical formulation, Modulation Index, Frequency Modulation (FM), Satellite communication, Optical fibre channels, and 4G/5G mobile networks.',
  overviewTa: 'நவீன மின்னணு தகவல் தொடர்பு அமைப்புகளின் அடிப்படை கூறுகள் (அனுப்பி, ஊடகம், ஏற்பி), மின்காந்த அலை பரவுதல் முறைகள் (தரை அலை, விண் அலை, வான் அலை), பண்பேற்றத்தின் அவசியம், வீச்சு பண்பேற்றம் (AM) சமன்பாடு, பண்பேற்றக் குறியீடு, அதிர்வெண் பண்பேற்றம் (FM), செயற்கைக்கோள் தகவல் தொடர்பு, ஒளியிழை மற்றும் 4G/5G செல்லுலார் மொபைல் நெட்வொர்க்குகள் ஆகியவற்றின் விரிவான விளக்கம்.',
  learningObjectives: [
    'Identify the core elements of a communication system using block diagrams.',
    'Distinguish between Ground Wave, Space Wave (Line-of-Sight), and Sky Wave (Ionospheric) propagation.',
    'Explain the necessity of modulation (antenna size, radiated power, interference avoidance).',
    'Derive the mathematical expression for an Amplitude Modulated (AM) wave, sidebands, and bandwidth.',
    'Calculate the modulation index $\mu$ and total transmitted power $P_t$ in AM systems.',
    'Compare Amplitude Modulation (AM) and Frequency Modulation (FM) in terms of bandwidth and noise immunity.',
    'Understand Satellite transponders, Optical Fibre Communication, and Cellular Mobile concepts (4G/5G).'
  ],
  prerequisites: [
    'Electromagnetic spectrum and wave properties ($c = \nu \lambda$)',
    'Trigonometric identities: $\\cos A \\sin B = \\frac{1}{2}[\\sin(A+B) - \\sin(A-B)]$',
    'Basics of electrical resonance and tuned LC tank circuits'
  ],
  everydayApplications: [
    '4G LTE and 5G ultra-fast mobile broadband internet and streaming',
    'Satellite GPS navigation in Google Maps guiding road transport and commercial aviation',
    'High-fidelity FM radio broadcasting (88 - 108 MHz) delivering crystal clear sound',
    'Trans-oceanic undersea optical fibre cables carrying global internet traffic at the speed of light',
    'Direct-to-Home (DTH) satellite television broadcasting directly into home dishes'
  ],
  historicalBackground: 'Guglielmo Marconi pioneered long-distance wireless radio transmission across the Atlantic Ocean in 1901. Reginald Fessenden invented Amplitude Modulation for voice audio in 1906. Edwin Armstrong developed Frequency Modulation (FM) in 1933, virtually eliminating static noise. Arthur C. Clarke conceptualized geostationary communication satellites in 1945, launched into reality with Telstar in 1962.',
  scientistsAssociated: [
    'Guglielmo Marconi (Pioneer of wireless radio communication - Nobel Prize 1909)',
    'Reginald Fessenden (Invention of Amplitude Modulation for voice)',
    'Edwin Armstrong (Invention of Frequency Modulation FM & Superheterodyne receiver)',
    'Arthur C. Clarke (Conceptualized Geostationary Communication Satellites)',
    'Charles K. Kao (Father of Optical Fibre Communication - Nobel Prize 2009)'
  ],
  topics: [
    {
      id: 'comm-10.1',
      topicNumber: '10.1',
      title: 'Elements of a Communication System and Signal Bandwidths',
      titleTa: 'தகவல் தொடர்பு அமைப்பின் கூறுகள் மற்றும் அலைக்கற்றை அகலம்',
      beginnerExplanation: 'Every communication system conveys information from a source to a distant destination. It consists of three fundamental blocks: 1) Transmitter (converts message to electrical signal and modulates onto carrier), 2) Channel (physical transmission medium like copper wire, optical fibre, or free space), and 3) Receiver (captures signal, demodulates, and reconstructs original message).',
      beginnerExplanationTa: 'தகவல் தொடர்பு அமைப்பானது மூலத்திலிருந்து தகவலை தொலைதூர ஏற்பிக்கு கடத்துகிறது. இது மூன்று முக்கிய கூறுகளைக் கொண்டுள்ளது: 1) அனுப்பி (Transmitter), 2) தகவல் தொடர்பு ஊடகம்/தடம் (Channel), 3) ஏற்பி (Receiver).',
      coreConcepts: [
        'Transducer: Converts non-electrical physical message (voice, music, image) into electrical voltage/current signals.',
        'Attenuation: Exponential loss of signal power as it propagates through the transmission medium.',
        'Noise: Unwanted random electrical disturbances that distort the transmitted information signal.',
        'Signal Bandwidths: Speech signals: $300\\text{ Hz} - 3100\\text{ Hz}$ (Bandwidth $= 2.8\\text{ kHz}$); High-fidelity music: $20\\text{ Hz} - 20\\text{ kHz}$ (Bandwidth $= 20\\text{ kHz}$); Video TV signals: Bandwidth $= 4.2\\text{ MHz}$.'
      ],
      definitions: [
        {
          term: 'Bandwidth (அலைக்கற்றை அகலம்)',
          termTa: 'அலைக்கற்றை அகலம்',
          definitionEn: 'The range of frequencies contained within an information signal or allocated to a communication channel: $\\text{Bandwidth} = f_{max} - f_{min}$.',
          definitionTa: 'ஒரு தகவல் சைகை அல்லது தகவல் தொடர்பு ஊடகத்தின் மிக உயர்ந்த மற்றும் மிகக் குறைந்த அதிர்வெண்களுக்கு இடையே உள்ள வேறுபாடு அலைக்கற்றை அகலம் எனப்படும்.',
          keyPoints: ['SI Unit: Hertz (Hz)', 'Speech bandwidth: $2.8\\text{ kHz}$; TV bandwidth: $4.2\\text{ MHz}$']
        }
      ],
      analogies: 'A communication system is like postal mail: you write a letter (information), put it in a stamped envelope (carrier modulation), the mail truck transports it over roads (channel), and the recipient opens the envelope to read your letter (receiver demodulation).',
      commonMisconceptions: [
        'Audio sound waves travel directly through the atmosphere for thousands of kilometers (False: audio waves attenuate in meters; they must be modulated onto high-frequency electromagnetic radio carriers).'
      ]
    },
    {
      id: 'comm-10.2',
      topicNumber: '10.2',
      title: 'Propagation of Electromagnetic Waves: Ground, Space, and Sky Waves',
      titleTa: 'மின்காந்த அலை பரவுதல்: தரை அலை, விண் அலை மற்றும் வான் அலை',
      beginnerExplanation: 'Transmitted radio waves travel through Earth’s atmosphere via three distinct propagation modes depending on their carrier frequency: Ground Waves (glide along Earth’s curvature, $< 2$ MHz), Sky Waves (reflect off the ionosphere, $2 - 30$ MHz), and Space Waves (direct Line-of-Sight, $> 30$ MHz).',
      beginnerExplanationTa: 'வானொலி அலைகள் அவற்றின் அதிர்வெண்ணைப் பொறுத்து மூன்று வழிகளில் பரவுகின்றன: தரை அலைகள் (பூமியின் வளைவைப் பின்பற்றிச் செல்பவை, < 2 MHz), வான் அலைகள் (அயனி மண்டலத்தில் எதிரொளிப்பவை, 2 - 30 MHz), விண் அலைகள் (நேர்க்கோட்டுப் பார்வைப் பாதை, > 30 MHz).',
      coreConcepts: [
        'Ground Wave (Surface Wave): Follows curvature of the Earth; suffers severe attenuation due to ground induced eddy currents; limited to frequencies $< 2\\text{ MHz}$ (AM Medium Wave broadcast).',
        'Sky Wave (Ionospheric Wave): Frequencies from $2\\text{ MHz}$ to $30\\text{ MHz}$ reflect back to Earth by total internal refraction in the ionized atmospheric layers (D, E, F1, F2). Critical frequency $f_c = 9\\sqrt{N_{max}}$ where $N_{max}$ is peak electron density.',
        'Skip Distance ($d_{skip}$): The minimum surface distance from the transmitter where a sky wave of given frequency returns to Earth.',
        'Skip Zone / Dead Zone: The annular silence zone between the end of the ground wave coverage and the point where the first sky wave returns.',
        'Space Wave (Tropospheric / Line-of-Sight): Frequencies $> 30\\text{ MHz}$ (VHF, UHF, Microwaves) penetrate ionosphere and travel in direct straight lines. Maximum Line-of-Sight horizon distance $d = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}$.'
      ],
      definitions: [
        {
          term: 'Critical Frequency (மாறுநிலை அதிர்வெண்)',
          termTa: 'மாறுநிலை அதிர்வெண்',
          definitionEn: 'The highest frequency of radio waves that can be reflected vertically back to Earth from the ionosphere: $f_c = 9\\sqrt{N_{max}}$.',
          definitionTa: 'அயனி மண்டலத்திலிருந்து செங்குத்தாக மீண்டும் பூமிக்கு எதிரொளிக்கப்படக்கூடிய வானொலி அலையின் அதிகபட்ச அதிர்வெண் மாறுநிலை அதிர்வெண் எனப்படும் ($f_c = 9\sqrt{N_{max}}$).',
          keyPoints: ['Waves with frequency $f > f_c$ penetrate through the ionosphere into outer space', 'Depends on peak ionospheric electron density $N_{max}$']
        },
        {
          term: 'Skip Distance (தாவு தொலைவு)',
          termTa: 'தாவு தொலைவு',
          definitionEn: 'The shortest distance along the Earth’s surface from the transmitting antenna at which a sky wave of frequency greater than critical frequency returns back to Earth.',
          definitionTa: 'மாறுநிலை அதிர்வெண்ணை விட அதிக அதிர்வெண் கொண்ட வான் அலை மீண்டும் பூமியை வந்து அடையும் மிகக் குறைந்த பரப்புத் தொலைவு தாவு தொலைவு எனப்படும்.',
          keyPoints: ['$d_{skip} = 2h \\sqrt{\\frac{f^2}{f_c^2} - 1}$', 'Increases with frequency of the wave']
        }
      ],
      analogies: 'Sky wave propagation is like bouncing a tennis ball off the ceiling across a room to reach someone behind a tall partition wall.',
      commonMisconceptions: [
        'Satellite and TV signals use sky waves (False: TV and satellite signals are ultra-high frequency microwaves $> 100$ MHz that penetrate the ionosphere, so they must use Space Waves and Satellites).'
      ]
    },
    {
      id: 'comm-10.3',
      topicNumber: '10.3',
      title: 'Modulation: Need for Modulation and Amplitude Modulation (AM)',
      titleTa: 'பண்பேற்றம்: பண்பேற்றத்தின் அவசியம் மற்றும் வீச்சு பண்பேற்றம் (AM)',
      beginnerExplanation: 'Audio baseband signals ($20$ Hz - $20$ kHz) cannot be transmitted directly because: 1) Antenna size would be impractically massive ($l = \lambda/4 \approx 37.5$ km at 2 kHz); 2) Radiated power is negligible ($P \propto (l/\lambda)^2$); 3) All radio stations would overlap and interfere. Modulation superimposes the low-frequency message signal onto a high-frequency carrier wave.',
      beginnerExplanationTa: 'குறைந்த அதிர்வெண் கொண்ட ஒலி சைகைகளை நேரடியாக அனுப்ப முடியாது, ஏனெனில்: 1) ஆண்டெனாவின் நீளம் கிலோமீட்டர் கணக்கில் தேவைப்படும்; 2) கதிர்வீச்சுத் திறன் மிகக் குறைவாக இருக்கும்; 3) சைகைகள் ஒன்றோடொன்று கலந்துவிடும். எனவே உயர் அதிர்வெண் ஊர்தி அலையின் மீது ஒலி சைகை ஏற்றப்படுவதே பண்பேற்றம் ஆகும்.',
      coreConcepts: [
        'Amplitude Modulation (AM): Process where the amplitude of the high-frequency carrier wave is varied in accordance with the instantaneous amplitude of the modulating message signal, keeping frequency and phase constant.',
        'AM Mathematical Equation: $s(t) = A_c [1 + \\mu \\cos(\\omega_m t)] \\sin(\\omega_c t) = A_c \\sin(\\omega_c t) + \\frac{\\mu A_c}{2}\\sin[(\\omega_c + \\omega_m)t] - \\frac{\\mu A_c}{2}\\sin[(\\omega_c - \\omega_m)t]$.',
        'Sideband Frequencies: Upper Sideband (USB) $= f_c + f_m$; Lower Sideband (LSB) $= f_c - f_m$.',
        'AM Bandwidth: $\\text{Bandwidth} = (f_c + f_m) - (f_c - f_m) = 2 f_m$ (Twice the maximum modulating audio frequency).',
        'Modulation Index ($\mu$): $\\mu = \\frac{A_m}{A_c} = \\frac{V_{max} - V_{min}}{V_{max} + V_{min}}$. For distortionless transmission, $\\mu \\le 1$ ($0 \\le \\mu \\le 100\\%$). If $\\mu > 1$, severe overmodulation distortion occurs.',
        'Total AM Power: $P_t = P_c\\left(1 + \\frac{\\mu^2}{2}\\right)$ where carrier power $P_c = \\frac{A_c^2}{2 R}$.'
      ],
      definitions: [
        {
          term: 'Modulation Index $\\mu$ (பண்பேற்றக் குறியீடு)',
          termTa: 'பண்பேற்றக் குறியீடு',
          definitionEn: 'The ratio of the peak amplitude of the modulating message signal ($A_m$) to the peak amplitude of the unmodulated carrier wave ($A_c$): $\\mu = A_m / A_c$.',
          definitionTa: 'பண்பேற்றும் சைகையின் பெரும வீச்சிற்கும் ($A_m$), ஊர்தி அலையின் பெரும வீச்சிற்கும் ($A_c$) உள்ள தகவு பண்பேற்றக் குறியீடு ($\mu$) எனப்படும்.',
          keyPoints: ['$\\mu = \\frac{V_{max} - V_{min}}{V_{max} + V_{min}}$', 'Must be $\\le 1$ to avoid clipping distortion', 'Expressed as a percentage']
        }
      ],
      analogies: 'Modulation is like throwing a message written on paper: crumpling paper and throwing it won’t go far, but tying the paper around a heavy baseball (high-frequency carrier) lets you throw it hundreds of meters.',
      commonMisconceptions: [
        'Modulation index can safely exceed 100% (False: overmodulation $\mu > 1$ clips the signal envelope, causing severe audio screech and distortion).'
      ]
    },
    {
      id: 'comm-10.4',
      topicNumber: '10.4',
      title: 'Frequency Modulation (FM), Satellite, and Mobile Communications',
      titleTa: 'அதிர்வெண் பண்பேற்றம் (FM), செயற்கைக்கோள் மற்றும் மொபைல் தகவல் தொடர்பு',
      beginnerExplanation: 'In Frequency Modulation (FM), the frequency of the carrier is varied in accordance with the message signal, keeping amplitude constant. Because noise affects amplitude, FM has near-zero static noise and supreme audio fidelity. Satellite transponders relay microwave signals globally from geostationary orbits (35,786 km). Modern cellular networks divide land into hexagonal cells reusing frequencies.',
      beginnerExplanationTa: 'அதிர்வெண் பண்பேற்றத்தில் (FM) ஊர்தி அலையின் வீச்சு மாறாமல் அதிர்வெண் மட்டுமே மாற்றப்படுகிறது. இதனால் இரைச்சல் முற்றிலும் நீக்கப்பட்டு தெளிவான ஒலி கிடைக்கிறது. புவிநிலை செயற்கைக்கோள்கள் மற்றும் செல்லுலார் மொபைல் நெட்வொர்க்குகள் நவீன தகவல் தொடர்பை சாத்தியமாக்குகின்றன.',
      coreConcepts: [
        'FM vs AM Merits: FM has superior signal-to-noise ratio, high fidelity, and constant transmitted power; but requires much larger bandwidth ($~200$ kHz vs $10$ kHz in AM) and complex circuitry.',
        'Geostationary Satellite Communication: Orbit height $h = 35,786\\text{ km}$ above the equator, orbital period $T = 24\\text{ hours}$ (matches Earth’s rotation). Three geostationary satellites spaced $120^\\circ$ apart cover the entire globe.',
        'Satellite Transponder: Receives weak Uplink frequency from ground station ($6\\text{ GHz}$ or $14\\text{ GHz}$), amplifies, converts to Downlink frequency ($4\\text{ GHz}$ or $11\\text{ GHz}$) to prevent interference, and beams back to Earth.',
        'Cellular Mobile Concept: Coverage area divided into hexagonal cells, each served by a Base Transceiver Station (BTS). Frequency reuse maximizes subscriber capacity.',
        'Mobile Generations: 2G (Digital voice, SMS), 3G (Mobile internet ~2 Mbps), 4G LTE (HD video streaming ~100 Mbps), 5G (Ultra-low latency < 1 ms, multi-gigabit speeds, IoT).'
      ],
      definitions: [
        {
          term: 'Transponder (டிரான்ஸ்பாண்டர்)',
          termTa: 'டிரான்ஸ்பாண்டர்',
          definitionEn: 'An integrated electronic subsystem inside a communication satellite that receives uplink microwave signals, amplifies them, shifts their frequency to the downlink band, and retransmits them back to Earth.',
          definitionTa: 'செயற்கைக்கோளில் உள்ள, பூமியிலிருந்து வரும் மேல்நோக்கு சைகைகளைப் பெற்று, பெருக்கி, கீழ்நோக்கு அதிர்வெண்ணாக மாற்றி மீண்டும் பூமிக்கு அனுப்பும் மின்னணு சாதனம் டிரான்ஸ்பாண்டர் எனப்படும்.',
          keyPoints: ['Uplink frequency is always higher than Downlink frequency', 'Operates in C-band (6/4 GHz) and Ku-band (14/11 GHz)']
        }
      ],
      analogies: 'Cellular frequency reuse is like holding private quiet conversations at separate dinner tables across a banquet hall: the same spoken words can be used at table 1 and table 6 simultaneously without hearing each other.',
      commonMisconceptions: [
        'Uplink and Downlink frequencies are the same (False: they must be different to prevent the satellite’s powerful transmitter from jamming its own ultra-sensitive receiver).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-COMM-01',
      formula: 'd = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}',
      meaning: 'Maximum Line-of-Sight transmission distance between transmitting antenna (height hT) and receiving antenna (height hR) on Earth of radius R.',
      meaningTa: 'விண் அலை பரவலில் நேர்க்கோட்டுப் பார்வை பெரும எல்லைத் தொலைவு.',
      variables: [
        { symbol: 'd', name: 'Maximum Line-of-Sight distance', nameTa: 'பெரும பார்வைத் தொலைவு', siUnit: 'm (or km)', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'R', name: 'Radius of Earth ($6.4 \\times 10^6$ m)', nameTa: 'பூமியின் ஆரம்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'h_T, h_R', name: 'Heights of transmitting and receiving antennas', nameTa: 'அனுப்பும் மற்றும் ஏற்கும் ஆண்டெனா உயரங்கள்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' }
      ],
      siUnit: 'm (or km)',
      dimension: '[M^0 L^1 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Distance = sqrt(2 · R · hT) + sqrt(2 · R · hR)'
    },
    {
      id: 'F-COMM-02',
      formula: '\\mu = \\frac{A_m}{A_c} = \\frac{V_{max} - V_{min}}{V_{max} + V_{min}}',
      meaning: 'Modulation Index of an Amplitude Modulated (AM) wave from peak modulating and carrier amplitudes or envelope voltages.',
      meaningTa: 'வீச்சு பண்பேற்றக் குறியீடு சமன்பாடு.',
      variables: [
        { symbol: '\\mu', name: 'Modulation index ($0 \\le \\mu \\le 1$)', nameTa: 'பண்பேற்றக் குறியீடு', siUnit: 'Unitless ratio', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'V_{max}, V_{min}', name: 'Maximum and minimum envelope voltages of AM wave', nameTa: 'பெரும மற்றும் சிறும மின்னழுத்தங்கள்', siUnit: 'V', dimension: '[M^1 L^2 T^{-3} I^{-1}]' }
      ],
      siUnit: 'Unitless (or %)',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'mu = (Vmax - Vmin) / (Vmax + Vmin)'
    },
    {
      id: 'F-COMM-03',
      formula: '\\text{Bandwidth} = 2 f_m \\quad \\text{and} \\quad P_t = P_c \\left(1 + \\frac{\\mu^2}{2}\\right)',
      meaning: 'Bandwidth and Total Transmitted Power in an Amplitude Modulated (AM) system.',
      meaningTa: 'AM அலைக்கற்றை அகலம் மற்றும் மொத்த கடத்தப்படும் திறன்.',
      variables: [
        { symbol: 'f_m', name: 'Maximum modulating audio frequency', nameTa: 'பண்பேற்றும் அதிர்வெண்', siUnit: 'Hz', dimension: '[M^0 L^0 T^{-1}]' },
        { symbol: 'P_t, P_c', name: 'Total power and unmodulated carrier power', nameTa: 'மொத்தத் திறன் மற்றும் ஊர்தித் திறன்', siUnit: 'W (or kW)', dimension: '[M^1 L^2 T^{-3}]' },
        { symbol: '\\mu', name: 'Modulation index', nameTa: 'பண்பேற்றக் குறியீடு', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'Hz and Watts (W)',
      dimension: '[M^0 L^0 T^{-1}] and [M^1 L^2 T^{-3}]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'AM Bandwidth = 2 · fm; Total Power = Pc · (1 + mu²/2)'
    }
  ],
  derivations: [
    {
      id: 'DER-COMM-01',
      title: 'Mathematical Derivation of Amplitude Modulated (AM) Wave, Sidebands, and Bandwidth',
      titleTa: 'வீச்சு பண்பேற்ற அலை (AM), பக்கவரி அதிர்வெண்கள் மற்றும் அலைக்கற்றை அகலம் தருவித்தல்',
      aim: 'To derive the mathematical equation for an AM wave, identify carrier and sideband frequencies, and determine total transmission bandwidth.',
      given: [
        'Modulating message signal: m(t) = Am cos(ωm t) with angular frequency ωm = 2π fm.',
        'Unmodulated carrier wave: c(t) = Ac sin(ωc t) with angular frequency ωc = 2π fc (where fc >> fm).'
      ],
      toProve: 's(t) = A_c \\sin(\\omega_c t) + \\frac{\\mu A_c}{2}\\sin[(\\omega_c + \\omega_m)t] - \\frac{\\mu A_c}{2}\\sin[(\\omega_c - \\omega_m)t] \\quad \\text{and} \\quad \\text{Bandwidth} = 2 f_m',
      steps: [
        {
          stepNumber: 1,
          description: 'In Amplitude Modulation, the instantaneous amplitude A(t) of the modulated wave varies proportionally with the message signal: A(t) = Ac + m(t) = Ac + Am cos(ωm t).',
          descriptionTa: 'வீச்சு பண்பேற்றத்தில் உடனடி வீச்சு A(t) = Ac + Am cos(ωm t) என அமையும்.',
          equation: 'A(t) = A_c [1 + \\mu \\cos(\\omega_m t)] \\quad \\text{where } \\mu = \\frac{A_m}{A_c}',
          note: 'μ is the modulation index.'
        },
        {
          stepNumber: 2,
          description: 'Write the complete modulated wave equation: s(t) = A(t) · sin(ωc t).',
          descriptionTa: 'பண்பேற்றப்பட்ட அலையின் சமன்பாட்டை எழுதுக: s(t) = A(t) · sin(ωc t).',
          equation: 's(t) = A_c [1 + \\mu \\cos(\\omega_m t)] \\sin(\\omega_c t) = A_c \\sin(\\omega_c t) + \\mu A_c \\cos(\\omega_m t) \\sin(\\omega_c t) \\quad \\text{--- (1)}',
          note: 'Apply trigonometric identity: cos A sin B = ½ [sin(B + A) + sin(B - A)].'
        },
        {
          stepNumber: 3,
          description: 'Expand the product term using the trigonometric product-to-sum identity.',
          descriptionTa: 'முக்கோணவியல் சமன்பாட்டைப் பயன்படுத்தி விரித்து எழுதுக.',
          equation: 's(t) = A_c \\sin(\\omega_c t) + \\frac{\\mu A_c}{2}\\sin[(\\omega_c + \\omega_m)t] - \\frac{\\mu A_c}{2}\\sin[(\\omega_c - \\omega_m)t] \\quad \\text{--- (2)}',
          note: 'The AM signal consists of three distinct frequency components.'
        },
        {
          stepNumber: 4,
          description: 'Identify the three components: 1) Carrier at fc, 2) Upper Sideband (USB) at fc + fm, 3) Lower Sideband (LSB) at fc - fm.',
          descriptionTa: 'மூன்று அதிர்வெண் கூறுகளை அடையாளம் காண்க: ஊர்தி (fc), மேல் பக்கவரி (fc + fm), கீழ் பக்கவரி (fc - fm).',
          equation: 'f_{carrier} = f_c, \\quad f_{USB} = f_c + f_m, \\quad f_{LSB} = f_c - f_m',
          note: 'Information resides exclusively in the sidebands; the carrier contains no information.'
        },
        {
          stepNumber: 5,
          description: 'Calculate transmission bandwidth as the difference between highest and lowest frequencies.',
          descriptionTa: 'அலைக்கற்றை அகலம் = மிக அதிக அதிர்வெண் - மிகக் குறைந்த அதிர்வெண்.',
          equation: '\\text{Bandwidth} = f_{USB} - f_{LSB} = (f_c + f_m) - (f_c - f_m) = 2 f_m',
          note: 'Bandwidth is strictly twice the highest audio modulating frequency.'
        }
      ],
      finalEquation: 's(t) = A_c \\sin(\\omega_c t) + \\frac{\\mu A_c}{2}\\sin[(\\omega_c + \\omega_m)t] - \\frac{\\mu A_c}{2}\\sin[(\\omega_c - \\omega_m)t] \\quad \\text{and} \\quad \\text{BW} = 2 f_m',
      assumptions: [
        'Sinusoidal single-tone message signal.',
        'Modulation index μ ≤ 1 to prevent overmodulation distortion.'
      ],
      physicalMeaning: 'Proves that an AM signal requires an RF bandwidth equal to 2fm and consists of a carrier plus two sidebands that carry identical mirror copies of the original message.',
      physicalMeaningTa: 'AM சைகைக்கு 2fm அலைக்கற்றை அகலம் தேவைப்படுகிறது என்பதையும், தகவலானது மேல் மற்றும் கீழ் பக்கவரிகளில் மட்டுமே அடங்கியுள்ளது என்பதையும் காட்டுகிறது.',
      commonMistakes: [
        'Writing Bandwidth = fm instead of 2fm.',
        'Assuming the carrier frequency fc changes (in AM, fc stays perfectly constant; only amplitude varies).'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-COMM-02',
      title: 'Derivation of Maximum Line-of-Sight Distance for Space Wave Propagation',
      titleTa: 'விண் அலை பரவலில் பெரும பார்வைத் தொலைவிற்கான சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive the maximum horizon coverage distance d = √(2RhT) + √(2RhR) for Space Wave Line-of-Sight propagation.',
      given: [
        'A transmitting antenna of height hT erected on the spherical Earth of radius R.',
        'A receiving antenna of height hR erected at distance d.',
        'Tangential Line-of-Sight horizon condition.'
      ],
      toProve: 'd = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}',
      steps: [
        {
          stepNumber: 1,
          description: 'Consider transmitting antenna of height hT at point A. Let C be the center of the Earth and T be the horizon tangent point. In right-angled triangle CTA, (R + hT)² = R² + dT².',
          descriptionTa: 'செங்கோண முக்கோணத்திலிருந்து பிதாகரஸ் தேற்றப்படி (R + hT)² = R² + dT².',
          equation: 'R^2 + 2 R h_T + h_T^2 = R^2 + d_T^2 \\implies d_T^2 = 2 R h_T + h_T^2 \\quad \\text{--- (1)}',
          note: 'Geometry of Earth curvature.'
        },
        {
          stepNumber: 2,
          description: 'Since antenna height hT is negligible compared to Earth’s radius R (hT << R, e.g., 100 m << 6400 km), neglect hT².',
          descriptionTa: 'hT << R என்பதால் hT² மதிப்பை புறக்கணிக்க.',
          equation: 'd_T = \\sqrt{2 R h_T} \\quad \\text{--- (2)}',
          note: 'Radio horizon distance from transmitting antenna.'
        },
        {
          stepNumber: 3,
          description: 'Similarly, for receiving antenna of height hR, the horizon distance is dR = √(2 R hR).',
          descriptionTa: 'இதேபோல் ஏற்கும் ஆண்டெனாவிற்கான தொலைவு dR = √(2 R hR).',
          equation: 'd_R = \\sqrt{2 R h_R} \\quad \\text{--- (3)}',
          note: 'Radio horizon distance from receiving antenna.'
        },
        {
          stepNumber: 4,
          description: 'Total maximum line-of-sight communication distance d is the sum of both horizon distances: d = dT + dR.',
          descriptionTa: 'மொத்த பெரும தொலைவு d = dT + dR எனக் கூட்டுக.',
          equation: 'd = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}',
          note: 'Standard formula for TV and VHF/UHF broadcast range.'
        }
      ],
      finalEquation: 'd = \\sqrt{2 R h_T} + \\sqrt{2 R h_R}',
      assumptions: [
        'Earth is a smooth sphere of radius R = 6400 km.',
        'Antenna heights hT, hR << R.'
      ],
      physicalMeaning: 'Shows that increasing the height of either the transmitting or receiving antenna directly expands the Line-of-Sight transmission range.',
      physicalMeaningTa: 'ஆண்டெனாவின் உயரத்தை அதிகரிப்பதன் மூலம் விண் அலை தகவல் தொடர்பு எல்லையை கணிசமாக அதிகரிக்க முடியும் என்பதை நிரூபிக்கிறது.',
      commonMistakes: [
        'Writing d = √(2R(hT + hR)) inside a single square root instead of the sum of two separate square roots.',
        'Forgetting to convert antenna heights from meters to kilometers when using R in km.'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'TV Tower Transmission Range and Population Covered',
      question: 'A TV transmitting antenna has a height of 160 m. (i) What is the maximum line-of-sight distance up to which the signal can be received by a receiver antenna at ground level (hR = 0)? (ii) If the average population density around the tower is 1000 people per km², calculate the total population covered by the broadcast. (Radius of Earth R = 6.4 × 10⁶ m).',
      questionTa: 'ஒரு தொலைக்காட்சி கோபுர ஆண்டெனாவின் உயரம் 160 m. (i) தரைமட்டத்திலுள்ள ஏற்பி பெறும் பெரும பார்வைத் தொலைவு என்ன? (ii) மக்கள் அடர்த்தி ஒரு சதுர கிலோமீட்டருக்கு 1000 எனில் பயன்பெறும் மொத்த மக்கள் தொகையைக் காண்க (R = 6.4 × 10⁶ m).',
      level: 'Easy',
      given: { 'hT': '160 m', 'hR': '0 m', 'R': '6.4 × 10⁶ m', 'Population Density': '1000 km⁻²' },
      required: 'Line-of-sight distance d and Population Covered',
      formulaUsed: 'd = \\sqrt{2 R h_T}, \\quad \\text{Area} = \\pi d^2, \\quad \\text{Population} = \\text{Area} \\times \\text{Density}',
      unitConversions: 'Convert distance to kilometers before computing area in km².',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate maximum distance d = √(2 · R · hT).',
          math: 'd = \\sqrt{2 \\times 6.4 \\times 10^6 \\times 160} = \\sqrt{2.048 \\times 10^9} = 45,255 \\text{ m} \\approx 45.25 \\text{ km}'
        },
        {
          stepNumber: 2,
          description: 'Calculate circular broadcast coverage area A = π d².',
          math: 'A = \\pi \\times (45.255 \\text{ km})^2 = 3.1416 \\times 2048 = 6,434 \\text{ km}^2'
        },
        {
          stepNumber: 3,
          description: 'Calculate population covered = Area × Population Density.',
          math: '\\text{Population} = 6434 \\text{ km}^2 \\times 1000 \\text{ people/km}^2 = 6,434,000 \\text{ people (64.34 Lakhs)}'
        }
      ],
      finalAnswer: 'Line-of-sight distance d = 45.25 km, Total Population Covered = 64.34 Lakh people (6.43 × 10⁶)',
      siUnit: 'km and people count',
      shortcutMethod: 'd = √(2 × 6400 × 0.160) = √2048 = 45.25 km; Area = π × 2048 = 6434 km²; Pop = 6.434 million.',
      commonErrors: 'Using R = 6400 km with hT in meters without converting units consistently.',
      examTip: 'Keep distance in km when multiplying by population density in people/km².'
    },
    {
      title: 'Modulation Index and Total Transmitted Power in AM',
      question: 'An Amplitude Modulated (AM) wave has a maximum peak-to-peak voltage of 16 V and a minimum voltage of 4 V. Calculate: (i) the modulation index μ, and (ii) the percentage modulation. (iii) If the unmodulated carrier power is 10 kW, determine the total transmitted power Pt.',
      questionTa: 'ஒரு வீச்சு பண்பேற்ற அலையின் பெரும மின்னழுத்தம் 16 V மற்றும் சிறும மின்னழுத்தம் 4 V எனில்: (i) பண்பேற்றக் குறியீடு μ, (ii) சதவீத பண்பேற்றம், (iii) ஊர்தித் திறன் 10 kW எனில் மொத்த கடத்தப்படும் திறன் Pt ஆகியவற்றைக் காண்க.',
      level: 'Medium',
      given: { 'Vmax': '16 V', 'Vmin': '4 V', 'Pc': '10 kW = 10,000 W' },
      required: 'μ, % Modulation, and Pt',
      formulaUsed: '\\mu = \\frac{V_{max} - V_{min}}{V_{max} + V_{min}}, \\quad P_t = P_c \\left(1 + \\frac{\\mu^2}{2}\\right)',
      unitConversions: 'Power can be kept in kW.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate modulation index μ = (Vmax - Vmin) / (Vmax + Vmin).',
          math: '\\mu = \\frac{16 - 4}{16 + 4} = \\frac{12}{20} = 0.60'
        },
        {
          stepNumber: 2,
          description: 'Percentage modulation = μ × 100% = 0.60 × 100% = 60%.',
          math: '\\% \\text{ Modulation} = 60\\%'
        },
        {
          stepNumber: 3,
          description: 'Calculate total transmitted power Pt = Pc · (1 + μ²/2).',
          math: 'P_t = 10 \\text{ kW} \\times \\left(1 + \\frac{0.60^2}{2}\\right) = 10 \\times \\left(1 + \\frac{0.36}{2}\\right) = 10 \\times (1 + 0.18) = 11.8 \\text{ kW}'
        }
      ],
      finalAnswer: 'Modulation Index μ = 0.60 (60%), Total Transmitted Power Pt = 11.8 kW',
      siUnit: 'Unitless and kW',
      shortcutMethod: 'μ = (16-4)/(16+4) = 12/20 = 0.6; Pt = 10 × (1 + 0.36/2) = 10 × 1.18 = 11.8 kW.',
      commonErrors: 'Squaring μ/2 instead of μ²/2 in the power formula.',
      examTip: 'Remember that sideband power contributes only (μ²/2)Pc to the total broadcast power.'
    },
    {
      title: 'AM Sidebands and Complete Frequency Spectrum Analysis',
      question: 'A sinusoidal audio message signal of frequency 10 kHz and peak voltage 20 V is used to amplitude modulate a high-frequency carrier wave of frequency 1.0 MHz and peak amplitude 50 V. Determine: (i) the modulation index μ, (ii) the upper and lower sideband frequencies, (iii) the amplitudes of the sidebands, and (iv) the total RF transmission bandwidth required.',
      questionTa: '10 kHz அதிர்வெண் மற்றும் 20 V வீச்சு கொண்ட ஒலி சைகை, 1.0 MHz அதிர்வெண் மற்றும் 50 V வீச்சு கொண்ட ஊர்தி அலையை வீச்சு பண்பேற்றம் செய்கிறது எனில்: (i) பண்பேற்றக் குறியீடு μ, (ii) பக்கவரி அதிர்வெண்கள், (iii) பக்கவரி வீச்சுகள், (iv) தேவையான அலைக்கற்றை அகலம் ஆகியவற்றைக் காண்க.',
      level: 'Exam-Level',
      given: { 'fm': '10 kHz = 0.010 MHz', 'Am': '20 V', 'fc': '1.0 MHz = 1000 kHz', 'Ac': '50 V' },
      required: 'μ, fUSB, fLSB, A_sideband, and Bandwidth',
      formulaUsed: '\\mu = \\frac{A_m}{A_c}, \\quad f_{USB} = f_c + f_m, \\quad f_{LSB} = f_c - f_m, \\quad A_{sideband} = \\frac{\\mu A_c}{2}, \\quad \\text{BW} = 2 f_m',
      unitConversions: 'Express frequencies in kHz for sideband clarity.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate modulation index μ = Am / Ac.',
          math: '\\mu = \\frac{20 \\text{ V}}{50 \\text{ V}} = 0.40 \\quad (40\\%)'
        },
        {
          stepNumber: 2,
          description: 'Calculate sideband frequencies: fUSB = fc + fm and fLSB = fc - fm.',
          math: 'f_{USB} = 1000 \\text{ kHz} + 10 \\text{ kHz} = 1010 \\text{ kHz} = 1.010 \\text{ MHz}'
        },
        {
          stepNumber: 3,
          description: 'Calculate Lower Sideband frequency fLSB.',
          math: 'f_{LSB} = 1000 \\text{ kHz} - 10 \\text{ kHz} = 990 \\text{ kHz} = 0.990 \\text{ MHz}'
        },
        {
          stepNumber: 4,
          description: 'Calculate sideband amplitude As = (μ · Ac) / 2 = Am / 2.',
          math: 'A_{sideband} = \\frac{0.40 \\times 50}{2} = \\frac{20}{2} = 10 \\text{ V}'
        },
        {
          stepNumber: 5,
          description: 'Calculate required RF transmission bandwidth BW = 2 · fm.',
          math: '\\text{Bandwidth} = 2 \\times 10 \\text{ kHz} = 20 \\text{ kHz}'
        }
      ],
      finalAnswer: 'Modulation Index μ = 0.40 (40%), Upper Sideband = 1010 kHz, Lower Sideband = 990 kHz, Sideband Amplitude = 10 V, Bandwidth = 20 kHz',
      siUnit: 'kHz, MHz, Volts (V)',
      shortcutMethod: 'μ = 20/50 = 0.4; Sidebands = 1000 ± 10 = 990 kHz & 1010 kHz; Sideband Amp = 20/2 = 10 V; BW = 2 × 10 = 20 kHz.',
      commonErrors: 'Writing sideband amplitude as μAc (20 V) instead of μAc/2 (10 V).',
      examTip: 'Draw the small 3-spike frequency spectrum (LSB at 990k, Carrier at 1000k, USB at 1010k) for bonus visual clarity.'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-COMM-01',
      name: 'Block Diagram of a Generalized Communication System',
      nameTa: 'பொதுவான தகவல் தொடர்பு அமைப்பின் கட்ட வரைபடம்',
      purpose: 'Depicts the sequential information flow from Source of Information -> Input Transducer -> Transmitter -> Transmission Channel (with Noise Source) -> Receiver -> Output Transducer -> User of Information.',
      components: ['Information Source', 'Input Transducer', 'Transmitter Block (Oscillator, Modulator, Power Amplifier)', 'Transmission Channel (Free Space / Cable / Fibre)', 'Unwanted Noise Source', 'Receiver Block (Tuned RF Amplifier, Demodulator, Audio Amplifier)', 'Output Transducer (Speaker / Display)', 'Destination'],
      labelsEn: ['Information Source', 'Input Transducer', 'Transmitted Signal', 'Channel', 'Noise Source', 'Received Signal + Noise', 'Receiver', 'Output Transducer', 'Destination User'],
      labelsTa: ['தகவல் மூலம்', 'உள்ளீட்டு மின்மாற்றி', 'அனுப்பி', 'தகவல் தடம்', 'இரைச்சல் மூலம்', 'ஏற்பி', 'வெளியீட்டு மின்மாற்றி', 'பயனாளி'],
      stepByStepExplanation: [
        'Draw three main rectangular blocks connected by arrows: Transmitter, Channel, and Receiver.',
        'Draw an arrow entering Transmitter from "Information Source + Input Transducer".',
        'Draw a lightning bolt arrow labeled "Noise" feeding into the middle Channel block.',
        'Draw an arrow leaving Receiver entering "Output Transducer + User Destination".',
        'Label all signal paths clearly.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Forgetting the Noise arrow injecting into the Channel block.'],
      aiImagePrompt: 'Textbook engineering block diagram of a modern Communication System. Showing sequential rectangular blocks: Information Source, Input Transducer, Transmitter, Channel with external Noise arrow, Receiver, Output Transducer, and Destination, clean minimalist educational vector on white background.'
    },
    {
      id: 'DIAG-COMM-02',
      name: 'Radio Wave Propagation Modes (Ground Wave, Sky Wave, Space Wave)',
      nameTa: 'வானொலி அலை பரவுதல் முறைகள் வரைபடம்',
      purpose: 'Shows the curvature of the Earth, the ionospheric reflecting layer, and the three propagation paths: Ground waves curving along the surface, Sky waves bouncing off the ionosphere with skip distance, and Space waves traveling Line-of-Sight between tower antennas and satellites.',
      components: ['Earth Curved Surface', 'Transmitting Tower', 'Receiving Tower', 'Ionospheric F-Layer', 'Ground Wave Ray Path', 'Sky Wave Reflected Ray Path', 'Skip Distance (d_skip)', 'Skip Zone / Dead Zone', 'Space Wave Line-of-Sight Path', 'Communication Satellite in Orbit'],
      labelsEn: ['Ground Wave (< 2 MHz)', 'Ionospheric Sky Wave (2 - 30 MHz)', 'Skip Distance', 'Dead / Skip Zone', 'Space Wave Line-of-Sight (> 30 MHz)', 'Ionosphere Layer', 'Geostationary Satellite'],
      labelsTa: ['தரை அலை (< 2 MHz)', 'வான் அலை (2-30 MHz)', 'தாவு தொலைவு', 'அமைதி மண்டலம்', 'விண் அலை (> 30 MHz)', 'அயனி மண்டலம்', 'செயற்கைக்கோள்'],
      stepByStepExplanation: [
        'Draw a curved arc representing the surface of the Earth.',
        'Draw a concentric outer upper boundary representing the Ionosphere.',
        'Draw a transmitting antenna on the Earth.',
        'Draw a curved wave hugging the Earth surface labeled "Ground Wave".',
        'Draw a wave reflecting off the Ionosphere down to Earth, marking "Skip Distance" and "Skip Zone".',
        'Draw a straight direct line to another antenna labeled "Line-of-Sight Space Wave".'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Showing Space waves curving along the Earth (Space waves travel in straight lines only).'],
      aiImagePrompt: 'Clean educational diagram of Earth showing radio wave propagation modes: Ground wave curving along surface, Sky wave reflecting off upper ionosphere layer with labeled skip distance, and Space wave line-of-sight ray to a communication satellite, clean scientific illustration on white background.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-COMM-01',
      name: 'Frequency Spectrum of an Amplitude Modulated (AM) Wave',
      nameTa: 'வீச்சு பண்பேற்ற அலையின் (AM) அதிர்வெண் நிறமாலை வரைபடம்',
      xAxis: 'Frequency (f) in kHz / MHz',
      yAxis: 'Voltage Amplitude (V)',
      units: 'Frequency on X-axis, Volts on Y-axis',
      shape: 'Three vertical delta spikes: tall central Carrier spike flanked symmetrically by two shorter sideband spikes',
      importantPoints: [
        'Central Carrier Spike at frequency fc with large amplitude Ac.',
        'Lower Sideband (LSB) spike at frequency fc - fm with amplitude (μAc / 2).',
        'Upper Sideband (USB) spike at frequency fc + fm with identical amplitude (μAc / 2).',
        'Total Bandwidth is the frequency span between LSB and USB: BW = (fc + fm) - (fc - fm) = 2 fm.'
      ],
      physicalMeaning: 'Visually demonstrates that modulation shifts the baseband audio information into two symmetric RF sidebands flanking the carrier frequency.',
      mathematicalRelationship: '\\text{Bandwidth} = 2 f_m, \\quad A_{USB} = A_{LSB} = \\frac{\\mu A_c}{2}',
      howToDrawInExam: 'Draw X-axis (Frequency) and Y-axis (Amplitude). Draw a tall vertical line at fc of height Ac. Draw two shorter vertical lines of equal height (μAc/2) at fc - fm and fc + fm. Mark the width between them as 2fm.',
      commonMistakes: ['Drawing sideband spikes taller than the carrier spike (sidebands can have at most half the carrier height when μ = 1).'],
      aiGraphPrompt: 'Scientifically accurate RF frequency spectrum of an Amplitude Modulated (AM) wave. Showing tall carrier spike at center fc, and two symmetric shorter sideband spikes at fc - fm (LSB) and fc + fm (USB) with labeled bandwidth 2fm, clean white background, clear black axes.'
    }
  ],
  experiments: [
    {
      id: 'EXP-COMM-01',
      name: 'Demonstration of Amplitude Modulation and Demodulation using IC and Diode Detector',
      nameTa: 'வீச்சு பண்பேற்றம் மற்றும் டையோடு உணரி மூலம் பண்பிறக்கத்தை செயல்முறை விளக்கம் செய்தல்',
      apparatus: ['Audio signal generator (1 kHz sine wave)', 'RF carrier generator (100 kHz - 1 MHz)', 'AM Modulator circuit kit / IC', 'Diode detector (IN34 germanium diode + RC low-pass filter)', 'Dual-trace Digital Storage Oscilloscope (DSO)'],
      principle: 'AM varies carrier amplitude in step with message signal. A simple envelope detector using a germanium diode and parallel RC low-pass filter rectifies the RF signal and filters out high-frequency carrier, recovering the original 1 kHz audio tone.',
      principleTa: 'பண்பேற்றப்பட்ட அலையிலிருந்து டையோடு மற்றும் RC வடிகட்டியைப் பயன்படுத்தி உயர் அதிர்வெண் ஊர்தியை நீக்கி அசல் ஒலி சைகையை மீட்டெடுப்பதே பண்பிறக்கம் ஆகும்.',
      procedure: [
        'Connect 1 kHz audio signal to modulating input and 500 kHz RF sine wave to carrier input of AM modulator.',
        'Observe the modulated AM envelope on Channel 1 of DSO and measure Vmax and Vmin to compute modulation index μ = (Vmax - Vmin) / (Vmax + Vmin).',
        'Feed the AM output into the diode envelope detector circuit.',
        'Observe the demodulated output on Channel 2 of DSO and verify that it matches the original 1 kHz input sine wave in frequency and shape.'
      ],
      observation: 'Measured Vmax = 8.0 V, Vmin = 2.0 V, yielding μ = (8 - 2)/(8 + 2) = 0.60 (60%). Demodulated output is a clean 1 kHz sine wave.',
      result: '1) Amplitude modulation successfully demonstrated with modulation index μ = 0.60. 2) Original audio tone faithfully recovered via diode envelope detection.',
      precautions: [
        'The time constant RC of the filter must satisfy 1/fc << RC << 1/fm to prevent diagonal clipping or carrier ripple leakage.',
        'Use low turn-on voltage Germanium diode (IN34, 0.2V) for high detection sensitivity.'
      ],
      realLifeImportance: 'Standard circuit used in millions of AM broadcast receivers, aviation radios, and radar transponders worldwide.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Communication Systems: How Data Flies Around the Planet',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: How Your Voice Crosses the World in Milliseconds',
        explanationEn: 'When you call a friend 5000 miles away, your voice is converted to digital packets, modulated onto laser beams inside undersea fibres, and beamed to satellites orbiting 35,786 km in space! How do we transmit sound across vast distances without losing it to noise? Through Modulation!',
        explanationTa: 'நீங்கள் பேசும் குரல் ஒளியிழைகள் மற்றும் 35,786 கி.மீ உயரத்தில் சுற்றும் செயற்கைக்கோள்கள் வழியே எவ்வாறு உலகெங்கும் பயணிக்கிறது? பண்பேற்றம் மூலம்!',
        animationDescription: '3D animated globe with glowing beam paths connecting smartphones, ground cellular base stations, undersea fiber optic cables, and geostationary satellites.',
        keywordsDisplayed: ['Communication Systems', 'Modulation', 'Satellite Transponders', 'Optical Fibres'],
        interactiveQuestion: {
          question: 'Why can audio sound waves ($20\\text{ Hz} - 20\\text{ kHz}$) NOT be transmitted directly into the air for long-distance communication?',
          questionTa: 'குறைந்த அதிர்வெண் கொண்ட ஒலி அலைகளை நேரடியாக காற்றில் நீண்ட தொலைவிற்கு ஏன் அனுப்ப முடியாது?',
          options: [
            'Required antenna size would be impractically large (several kilometers) and signals would overlap',
            'Sound waves travel faster than light',
            'Audio waves are absorbed by glass windows',
            'Microphones cannot generate electricity'
          ],
          optionsTa: [
            'ஆண்டெனாவின் நீளம் கிலோமீட்டர் கணக்கில் தேவைப்படும் மற்றும் சைகைகள் கலந்துவிடும்',
            'ஒலி ஒளியை விட வேகமாக செல்லும்',
            'கண்ணாடி ஜன்னல்களால் உறிஞ்சப்படும்',
            'மைக்ரோஃபோனால் மின்சாரம் உருவாக்க முடியாது'
          ],
          correctIndex: 0,
          explanation: 'Since antenna length l = λ/4, transmitting a 3 kHz audio wave directly would require an antenna height of 25 km! Modulating onto high frequencies reduces antenna size to a few centimeters.'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Amplitude Modulation (AM) and Bandwidth',
        explanationEn: 'In AM, the audio signal rides on top of the carrier wave’s amplitude: s(t) = Ac [1 + μ cos(ωm t)] sin(ωc t). This creates two sidebands (fc - fm and fc + fm), requiring a transmission bandwidth of exactly 2fm!',
        explanationTa: 'வீச்சு பண்பேற்றத்தில் (AM) ஊர்தி அலையின் வீச்சு ஒலி சைகைக்கு ஏற்ப மாற்றப்படுகிறது. இது மேல் மற்றும் கீழ் பக்கவரிகளை உருவாக்கி 2fm அலைக்கற்றை அகலத்தை அளிக்கிறது.',
        animationDescription: '3D wave transformation showing an audio wave combining with a high-frequency carrier wave into a modulated envelope with upper and lower sideband frequencies.',
        keywordsDisplayed: ['Amplitude Modulation (AM)', 'Modulation Index μ = Am/Ac', 'Sidebands (fc ± fm)', 'Bandwidth = 2 · fm'],
        interactiveQuestion: {
          question: 'If the maximum modulating audio frequency in an AM broadcast is 5 kHz, what is the required RF transmission bandwidth?',
          questionTa: 'பண்பேற்றும் அதிர்வெண் 5 kHz எனில் தேவையான AM அலைக்கற்றை அகலம் என்ன?',
          options: ['10 kHz (2 · fm)', '5 kHz', '2.5 kHz', '20 kHz'],
          optionsTa: ['10 kHz (2 · fm)', '5 kHz', '2.5 kHz', '20 kHz'],
          correctIndex: 0,
          explanation: 'In AM systems, Bandwidth = 2 · fm = 2 × 5 kHz = 10 kHz.'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Wave Propagation: Ground, Sky, and Space Waves',
        explanationEn: 'Low frequencies (< 2 MHz) follow Earth’s curvature as Ground Waves. Medium frequencies (2 - 30 MHz) bounce off the ionosphere as Sky Waves. Ultra-high frequencies (> 30 MHz) travel Line-of-Sight as Space Waves to towers and satellites!',
        explanationTa: 'தரை அலைகள் (< 2 MHz) பூமியை ஒட்டிச் செல்கின்றன; வான் அலைகள் (2-30 MHz) அயனி மண்டலத்தில் எதிரொளிக்கின்றன; விண் அலைகள் (> 30 MHz) நேர்க்கோட்டுப் பாதையில் செல்கின்றன.',
        animationDescription: '3D cutaway of Earth atmosphere showing radio waves hugging the ground, bouncing off the glowing blue ionosphere, and piercing into space to reach satellites.',
        keywordsDisplayed: ['Ground Waves (< 2 MHz)', 'Sky Waves (Ionosphere 2-30 MHz)', 'Skip Distance', 'Space Waves (Line-of-Sight > 30 MHz)'],
        interactiveQuestion: {
          question: 'Which mode of wave propagation is used for television broadcasting and mobile communications (> 100 MHz)?',
          questionTa: 'தொலைக்காட்சி ஒளிபரப்பு மற்றும் மொபைல் தகவல் தொடர்பிற்கு பயன்படும் அலை பரவுதல் முறை எது?',
          options: ['Space Wave / Line-of-Sight propagation', 'Sky Wave propagation', 'Ground Wave propagation', 'Surface acoustic wave'],
          optionsTa: ['விண் அலை / நேர்க்கோட்டு பார்வை பரவுதல்', 'வான் அலை பரவுதல்', 'தரை அலை பரவுதல்', 'மேற்பரப்பு ஒலி அலை'],
          correctIndex: 0,
          explanation: 'Frequencies > 30 MHz penetrate the ionosphere, so TV and cellular mobile signals must use Line-of-Sight Space Waves.'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Modern Tech: Satellite & 5G Cellular Networks',
        explanationEn: 'A satellite transponder orbiting at 35,786 km receives uplink signals, shifts their frequency, and beams downlink coverage across continents. Modern 5G cellular networks use micro-cells and millimeter waves to deliver gigabit speeds with under 1 ms latency!',
        explanationTa: 'புவிநிலை செயற்கைக்கோள்கள் மற்றும் 5G செல்லுலார் அமைப்புகள் விநாடிக்கு ஜிகாபிட் வேகத்தில் தகவல்களைப் பரிமாறுகின்றன.',
        animationDescription: '3D glowing geostationary satellite beaming wide coverage cone onto Earth, zooming into a city with hexagonal 5G micro-cells connecting autonomous cars and smartphones.',
        keywordsDisplayed: ['Satellite Transponder', 'Geostationary Orbit (35,786 km)', 'Hexagonal Cells', '5G Mobile Broadband (< 1 ms latency)'],
        interactiveQuestion: {
          question: 'How many geostationary satellites are required to provide global communication coverage across the entire Earth?',
          questionTa: 'பூமி முழுவதும் தகவல் தொடர்பு வசதியை வழங்க தேவையான குறைந்தபட்ச புவிநிலை செயற்கைக்கோள்களின் எண்ணிக்கை:',
          options: ['3 satellites (spaced 120° apart)', '1 satellite', '10 satellites', '100 satellites'],
          optionsTa: ['3 செயற்கைக்கோள்கள் (120° இடைவெளியில்)', '1 செயற்கைக்கோள்', '10 செயற்கைக்கோள்கள்', '100 செயற்கைக்கோள்கள்'],
          correctIndex: 0,
          explanation: 'Three geostationary satellites positioned at 120° intervals around the equator provide complete global Line-of-Sight coverage (except extreme polar regions).'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 220,
    scriptEn: 'Welcome to Unit 10 Communication Systems! In this chapter, we discover how human ingenuity connects our planet. We explore the essential building blocks of transmitters, channels, and receivers. We analyze Ground, Sky, and Line-of-Sight Space wave propagation, derive the mathematical equations and sideband frequencies for Amplitude Modulation, and explore the marvels of Satellite transponders, optical fibres, and high-speed 5G mobile networks.',
    scriptTa: 'அலகு 10 தகவல் தொடர்பு அமைப்புகள் பகுதிக்கு உங்களை அன்புடன் வரவேற்கிறோம்! இப்பாடத்தில் நவீன உலகை இணைக்கும் தகவல் தொழில்நுட்பத்தைக் கற்கிறோம். அனுப்பி, ஊடகம், ஏற்பி ஆகியவற்றின் செயல்பாடுகள், தரை அலை, வான் அலை மற்றும் விண் அலை பரவுதல் முறைகள், வீச்சு பண்பேற்ற சமன்பாடுகள் (AM), பக்கவரிகள், செயற்கைக்கோள் தகவல் தொடர்பு மற்றும் 5G மொபைல் நெட்வொர்க்குகளின் சிறப்பம்சங்களை முழுமையாகப் பயில்வோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 10 Communication Systems-ல் Transmitter, Channel, Receiver components-ஐப் படிக்கிறோம். Ground wave, Sky wave skip distance மற்றும் Space wave Line-of-Sight distance d = sqrt(2RhT) + sqrt(2RhR) சமன்பாடுகளைத் தருவிக்கிறோம். AM Modulation equation, Modulation index mu = (Vmax - Vmin)/(Vmax + Vmin), Bandwidth = 2·fm மற்றும் Satellite Transponders ஆகியவற்றை step-by-step ஆகக் கற்போம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'The required RF bandwidth for an Amplitude Modulated (AM) signal with maximum audio frequency fm is:',
        qTa: 'பெரும ஒலி அதிர்வெண் fm கொண்ட AM சைகைக்குத் தேவையான அலைக்கற்றை அகலம்:',
        a: '2 fm (Twice the modulating frequency)',
        aTa: '2 fm (பண்பேற்றும் அதிர்வெண்ணின் இருமடங்கு)'
      },
      {
        q: 'The orbit height of a Geostationary communication satellite above the Earth’s surface is approximately:',
        qTa: 'புவிநிலை செயற்கைக்கோளின் சுற்றுப்பாதை உயரம் பூமியின் பரப்பிலிருந்து சுமார்:',
        a: '35,786 km (~36,000 km)',
        aTa: '35,786 கி.மீ (~36,000 கி.மீ)'
      },
      {
        q: 'What is the purpose of modulation in communication systems?',
        qTa: 'தகவல் தொடர்பு அமைப்புகளில் பண்பேற்றத்தின் நோக்கம் என்ன?',
        a: 'To reduce antenna size ($l = \lambda/4$), increase radiated power ($P \propto 1/\lambda^2$), and prevent interference between audio signals.',
        aTa: 'ஆண்டெனாவின் அளவைக் குறைக்கவும், கதிர்வீச்சுத் திறனை அதிகரிக்கவும், சைகைகள் ஒன்றோடொன்று கலப்பதைத் தடுக்கவும்.'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'Define modulation index in Amplitude Modulation. What is its significance?',
        qTa: 'வீச்சு பண்பேற்றக் குறியீட்டை வரையறுத்து அதன் முக்கியத்துவத்தைக் கூறுக.',
        a: 'Modulation index μ is the ratio of modulating signal amplitude (Am) to carrier wave amplitude (Ac): μ = Am / Ac = (Vmax - Vmin)/(Vmax + Vmin). Significance: It determines the quality of the transmitted signal. To prevent overmodulation distortion, μ must be ≤ 1 (0 to 100%).',
        aTa: 'பண்பேற்றும் சைகையின் வீச்சிற்கும் (Am) ஊர்தி அலையின் வீச்சிற்கும் (Ac) உள்ள தகவு பண்பேற்றக் குறியீடு ஆகும் ($\mu = Am/Ac$). சைகை சிதைவடையாமல் இருக்க $\mu \le 1$ ஆக இருக்க வேண்டும்.'
      },
      {
        q: 'Distinguish between Sky wave and Space wave propagation.',
        qTa: 'வான் அலை மற்றும் விண் அலை பரவுதலை வேறுபடுத்துக.',
        a: 'Sky wave: Uses frequencies 2 - 30 MHz; reflects back to Earth from the ionosphere; used for short-wave global radio. Space wave: Uses frequencies > 30 MHz; travels in direct Line-of-Sight paths; used for TV, radar, satellite, and mobile communications.',
        aTa: 'வான் அலை: 2-30 MHz அதிர்வெண்; அயனி மண்டலத்தில் எதிரொளிக்கிறது; உலகளாவிய வானொலிக்கு பயன்படுகிறது. விண் அலை: > 30 MHz அதிர்வெண்; நேர்க்கோட்டு பார்வைப் பாதையில் செல்கிறது; TV, ரேடார் மற்றும் மொபைலுக்கு பயன்படுகிறது.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Derive the maximum Line-of-Sight transmission distance d = √(2RhT) + √(2RhR) for space wave propagation.',
        qTa: 'விண் அலை பரவலில் பெரும பார்வைத் தொலைவு d = √(2RhT) + √(2RhR) சமன்பாட்டைத் தருவிக்க.',
        a: 'From Earth tangent geometry: (R + hT)² = R² + dT² => R² + 2RhT + hT² = R² + dT². Since hT << R, dT = √(2RhT). Similarly, for receiver antenna dR = √(2RhR). Total Line-of-Sight distance d = dT + dR = √(2RhT) + √(2RhR).',
        aTa: 'பிதாகரஸ் தேற்றப்படி (R + hT)² = R² + dT². hT << R என்பதால் dT = √(2RhT). இதேபோல் dR = √(2RhR). மொத்தத் தொலைவு d = dT + dR = √(2RhT) + √(2RhR) எனக் கிடைக்கிறது.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Derive the mathematical expression for an Amplitude Modulated (AM) wave. Draw the frequency spectrum and obtain the expression for bandwidth.',
        qTa: 'வீச்சு பண்பேற்ற அலைக்கான (AM) சமன்பாட்டைத் தருவிக்க. அதன் அதிர்வெண் நிறமாலையை வரைந்து அலைக்கற்றை அகலத்தைப் பெறுக.',
        a: 'Modulated wave: s(t) = Ac [1 + μ cos(ωm t)] sin(ωc t) = Ac sin(ωc t) + (μAc/2) sin[(ωc + ωm)t] - (μAc/2) sin[(ωc - ωm)t]. Components: Carrier at fc (amplitude Ac), Upper Sideband at fc + fm (amplitude μAc/2), Lower Sideband at fc - fm (amplitude μAc/2). Bandwidth = fUSB - fLSB = (fc + fm) - (fc - fm) = 2 fm. Draw the 3-spike frequency spectrum clearly.',
        aTa: 's(t) = Ac [1 + μ cos(ωm t)] sin(ωc t) என விரித்தெழுத ஊர்தி (fc), மேல் பக்கவரி (fc + fm) மற்றும் கீழ் பக்கவரி (fc - fm) ஆகிய மூன்று கூறுகள் கிடைக்கின்றன. அலைக்கற்றை அகலம் = (fc + fm) - (fc - fm) = 2 fm.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Amplitude Modulation wave equation and bandwidth derivation (5 Marks)',
      'Line-of-Sight space wave distance d = √(2RhT) + √(2RhR) derivation (3 Marks / 5 Marks)',
      'Block diagram of communication system with noise explanation (3 Marks)',
      'Modulation index and total power numericals (2 Marks / 3 Marks)',
      'Comparison of AM and FM advantages and disadvantages (3 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why is FM preferred over AM for high-fidelity music transmission?',
      answer: 'Because environmental and atmospheric noise primarily perturbs the amplitude of electromagnetic waves. Since FM encodes sound purely in frequency variations while keeping amplitude constant, FM receivers can easily clip out amplitude noise using limiters, delivering crystal-clear, noise-free sound.',
      category: 'Concept'
    },
    {
      question: 'What is a dead zone or skip zone?',
      answer: 'The skip zone is the annular silent region between the outer edge of ground wave coverage and the point where the first reflected sky wave returns to Earth, where no radio signal can be received.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Writing AM Bandwidth = fm instead of 2fm.',
      correctWay: 'Always remember that AM produces TWO symmetric sidebands (Upper and Lower), doubling the required bandwidth to 2fm.'
    },
    {
      category: 'Unit',
      mistake: 'Mixing kilometers and meters when calculating horizon distance d = √(2Rh).',
      correctWay: 'Either convert Earth radius R to meters (6.4 × 10⁶ m) and antenna height h in meters, or convert h to kilometers.'
    }
  ],
  memoryTricks: [
    {
      title: 'AM Bandwidth Mnemonic',
      titleTa: 'AM அலைக்கற்றை அகலம் நினைவுக்குறிப்பு',
      trick: '"Two Sidebands = Double the Frequency" → Bandwidth = 2 · fm.'
    },
    {
      title: 'Propagation Frequency Cut-offs Mnemonic',
      titleTa: 'அலை பரவுதல் அதிர்வெண் நினைவுக்குறிப்பு',
      trick: '"Ground < 2 MHz, Sky 2 to 30 MHz, Space > 30 MHz".'
    }
  ]
};
