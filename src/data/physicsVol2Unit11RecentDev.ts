import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_11_RECENT_DEVELOPMENTS: PhysicsChapter = {
  chapterNumber: 11,
  chapterName: 'Recent Developments in Physics',
  chapterNameTa: 'இயற்பியலின் அண்மைக்கால வளர்ச்சிகள்',
  unitNumber: 11,
  unitName: 'Recent Developments in Physics',
  unitNameTa: 'இயற்பியலின் அண்மைக்கால வளர்ச்சிகள்',
  importance: 'High-Yield (4-6 Marks in Board Exam)',
  overview: 'Contemporary frontiers of physical sciences covering Nanoscience & Nanotechnology (Quantum confinement, Top-down/Bottom-up synthesis, Carbon Nanotubes, Graphene), Robotics & Artificial Intelligence, Physics in Healthcare & Medical Imaging (X-rays, CT, MRI, PET, Ultrasound, Laser surgery), and Fundamental Particle Physics & Cosmology (Quarks, Leptons, Higgs Boson, Dark Matter, Dark Energy).',
  overviewTa: 'நவீன இயற்பியலின் புதிய எல்லைகளான நானோ அறிவியல் மற்றும் நானோ தொழில்நுட்பம் (குவாண்டம் கட்டுப்பாடு, தொகுப்பு முறைகள், கார்பன் நானோ குழாய்கள், கிராபீன்), ரோபாட்டிக்ஸ் மற்றும் செயற்கை நுண்ணறிவு, மருத்துவத்தில் இயற்பியல் (CT, MRI, PET, மீயொலி, லேசர் அறுவை சிகிச்சை), மற்றும் அடிப்படை துகள் இயற்பியல் மற்றும் அண்டவியல் (குவார்க்குகள், லெப்டான்கள், ஹிக்ஸ் போசான், இருண்ட பருப்பொருள், இருண்ட ஆற்றல்) ஆகியவற்றின் விரிவான விளக்கம்.',
  learningObjectives: [
    'Define nanoscience ($1 - 100\\text{ nm}$) and explain Top-down and Bottom-up nanomaterial synthesis.',
    'Understand the structure, properties, and applications of Carbon Nanotubes (CNTs) and Graphene.',
    'Describe the essential anatomical components of robots and state Asimov’s Laws of Robotics.',
    'Explain the physical working principles of medical imaging: CT scan, MRI, PET, and Ultrasound.',
    'Classify fundamental elementary particles (Quarks, Leptons, Gauge Bosons, Higgs Boson) in the Standard Model.',
    'Understand the concepts of Dark Matter and Dark Energy in modern cosmological expansion.'
  ],
  prerequisites: [
    'Basic atomic structure and magnetic resonance concepts',
    'Electromagnetic spectrum (X-rays, gamma rays, radio waves)',
    'Conservation laws in physics'
  ],
  everydayApplications: [
    'Targeted cancer chemotherapy using functionalized magnetic nanoparticles',
    'Ultra-fast flexible electronics and bulletproof composites reinforced with Graphene and CNTs',
    'Robotic precision surgery (Da Vinci surgical system) enabling minimally invasive operations',
    'Non-invasive diagnostic brain and joint imaging using Magnetic Resonance Imaging (MRI)',
    'Self-driving autonomous electric vehicles using LIDAR, computer vision, and robotic actuators'
  ],
  historicalBackground: 'Richard Feynman inaugurated nanoscience in 1959 with his historic lecture "There’s Plenty of Room at the Bottom". Sumio Iijima discovered Carbon Nanotubes in 1991. Andre Geim and Konstantin Novoselov isolated Graphene in 2004 (Nobel Prize 2010). The discovery of the Higgs Boson at CERN’s Large Hadron Collider in 2012 completed the Standard Model of particle physics.',
  scientistsAssociated: [
    'Richard Feynman (Visionary father of Nanotechnology - Nobel Prize 1965)',
    'Sumio Iijima (Discovery of Carbon Nanotubes)',
    'Andre Geim & Konstantin Novoselov (Isolation of Graphene - Nobel Prize 2010)',
    'Peter Higgs & François Englert (Prediction of the Higgs Boson - Nobel Prize 2013)',
    'Paul Lauterbur & Peter Mansfield (Invention of MRI - Nobel Prize 2003)'
  ],
  topics: [
    {
      id: 'recent-11.1',
      topicNumber: '11.1',
      title: 'Nanoscience and Nanotechnology: Nanomaterials, CNTs, and Graphene',
      titleTa: 'நானோ அறிவியல் மற்றும் நானோ தொழில்நுட்பம்: நானோ பொருட்கள், CNT மற்றும் கிராபீன்',
      beginnerExplanation: 'Nanoscience deals with materials engineered at the nanometer scale ($1\\text{ nm} = 10^{-9}\\text{ m}$, typically $1 - 100$ nm). At this scale, quantum confinement effects dominate, drastically changing optical, electrical, and mechanical properties (e.g., bulk gold is yellow and inert, but gold nanoparticles appear ruby-red and act as powerful chemical catalysts).',
      beginnerExplanationTa: 'நானோ அறிவியல் என்பது $1 - 100$ நானோமீட்டர் ($10^{-9}$ m) அளவிலான பொருட்களைப் பற்றிய படிப்பாகும். இந்த அளவில் குவாண்டம் விளைவுகளால் பொருட்களின் பண்புகள் முற்றிலும் மாறுபடுகின்றன (எ.கா. தங்கம் நானோ அளவில் சிவப்பு நிறமாக மாறுகிறது).',
      coreConcepts: [
        'Nanoscale: Objects with at least one dimension between $1\\text{ nm}$ and $100\\text{ nm}$ ($1\\text{ nm} = 10^{-9}\\text{ m}$).',
        'Top-Down Synthesis: Breaking bulk material down into nanoscale particles using physical methods (ball milling, photolithography, laser ablation).',
        'Bottom-Up Synthesis: Building nanostructures atom-by-atom or molecule-by-molecule through chemical synthesis (sol-gel, chemical vapor deposition CVD, molecular self-assembly).',
        'Carbon Nanotubes (CNTs): Cylindrical tubes of rolled graphene sheets. Single-Walled (SWCNT) and Multi-Walled (MWCNT). Properties: 100× stronger than steel, 6× lighter, high electrical conductivity, exceptional thermal conductor.',
        'Graphene: Single 2D atomic layer of carbon atoms arranged in a honeycomb hexagonal lattice. Strongest material ever tested (breaking strength 200× steel), flexible, transparent, and ultra-high electron mobility ($200,000\\text{ cm}^2/\\text{V}\\cdot\\text{s}$).'
      ],
      definitions: [
        {
          term: 'Nanotechnology (நானோ தொழில்நுட்பம்)',
          termTa: 'நானோ தொழில்நுட்பம்',
          definitionEn: 'The design, synthesis, characterization, and application of materials, devices, and systems by controlling matter at the nanometer scale ($1 - 100\\text{ nm}$).',
          definitionTa: '$1 - 100$ நானோமீட்டர் அளவில் அணுக்கள் மற்றும் மூலக்கூறுகளைக் கட்டுப்படுத்தி புதிய பொருட்களை உருவாக்கும் தொழில்நுட்பம் நானோ தொழில்நுட்பம் எனப்படும்.',
          keyPoints: ['Scale: $10^{-9}\\text{ meters}$', 'Governed by quantum mechanical confinement and high surface-area-to-volume ratio']
        },
        {
          term: 'Graphene (கிராபீன்)',
          termTa: 'கிராபீன்',
          definitionEn: 'A single two-dimensional layer of carbon atoms tightly bound in a hexagonal honeycomb lattice with $sp^2$ hybridization.',
          definitionTa: 'அறுகோண தேன்கூடு அமைப்பில் $sp^2$ இனக்கலப்பு அடைந்த ஒற்றை அடுக்கு கார்பன் அணுக்களின் இருபரிமாண படலம் கிராபீன் எனப்படும்.',
          keyPoints: ['Single atom thickness (~0.335 nm)', 'Zero effective electron rest mass (Dirac fermions)', 'Transparent and highly conductive']
        }
      ],
      analogies: 'A nanometer is to a tennis ball what a tennis ball is to planet Earth.',
      commonMisconceptions: [
        'Nanotechnology is merely smaller engineering (False: below 100 nm, classical physics breaks down and quantum confinement fundamentally alters material color, bandgap, and chemical reactivity).'
      ]
    },
    {
      id: 'recent-11.2',
      topicNumber: '11.2',
      title: 'Robotics and Artificial Intelligence',
      titleTa: 'ரோபாட்டிக்ஸ் மற்றும் செயற்கை நுண்ணறிவு',
      beginnerExplanation: 'Robotics is the interdisciplinary branch of physics, engineering, and computer science devoted to designing automated electro-mechanical machines (robots) capable of sensing their environment, processing information, and performing complex autonomous tasks.',
      beginnerExplanationTa: 'ரோபாட்டிக்ஸ் என்பது சூழலை உணர்ந்து, தகவல்களை ஆராய்ந்து, மனிதர்களுக்கு மாற்றாக சிக்கலான பணிகளை தானாகவே செய்யக்கூடிய இயந்திரங்களை வடிவமைக்கும் துறையாகும்.',
      coreConcepts: [
        'Core Anatomical Components of a Robot: 1) Sensors (eyes/ears: ultrasonic, infrared, cameras, LIDAR, gyroscopes), 2) Actuators (muscles: electric stepper motors, hydraulic/pneumatic pistons), 3) Controller (brain: microcontrollers/CPUs executing AI algorithms), 4) Manipulator (arms, grippers, end-effectors), 5) Power Supply (batteries/fuel cells).',
        'Degrees of Freedom (DoF): The number of independent joint motions a robotic arm can execute in 3D space (typically 6 DoF: roll, pitch, yaw, X, Y, Z).',
        'Isaac Asimov’s Three Laws of Robotics: 1) A robot may not injure a human being or, through inaction, allow a human being to come to harm; 2) A robot must obey orders given by humans, except where such orders conflict with the First Law; 3) A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.'
      ],
      definitions: [
        {
          term: 'Actuator (இயக்கி / தூண்டல் சாதனம்)',
          termTa: 'இயக்கி',
          definitionEn: 'A mechanical or electro-mechanical device that converts stored electrical, hydraulic, or pneumatic energy into physical mechanical motion to move robot limbs.',
          definitionTa: 'மின்னாற்றல் அல்லது அழுத்த ஆற்றலை இயக்க ஆற்றலாக மாற்றி ரோபோவின் உறுப்புகளை இயக்கும் சாதனம் இயக்கி (Actuator) எனப்படும்.',
          keyPoints: ['Servos, stepper motors, hydraulic cylinders, piezoelectric actuators']
        }
      ],
      analogies: 'A robot is like the human body: sensors are the eyes and ears, the controller is the central brain, and the actuators are the muscular biceps and tendons moving the limbs.',
      commonMisconceptions: [
        'All robots look like humanoid androids (False: over 95% of industrial robots are stationary multi-jointed articulated arms or wheeled autonomous rovers).'
      ]
    },
    {
      id: 'recent-11.3',
      topicNumber: '11.3',
      title: 'Physics in Medicine: Diagnostic Imaging and Radiation Therapy',
      titleTa: 'மருத்துவத்தில் இயற்பியல்: நோய் கண்டறிதல் மற்றும் கதிரியக்க சிகிச்சை',
      beginnerExplanation: 'Modern medicine relies heavily on principles of physics to visualize internal organs non-invasively and treat diseases using electromagnetic radiation, magnetic fields, and nuclear isotopes.',
      beginnerExplanationTa: 'நவீன மருத்துவம் மின்காந்த கதிர்வீச்சுகள், காந்தப்புலங்கள் மற்றும் அணுக்கரு ஐசோடோப்புகளைப் பயன்படுத்தி உடலின் உட்பகுதிகளை படம்பிடிக்கவும் நோய்களைக் குணப்படுத்தவும் இயற்பியல் விதிகளைப் பயன்படுத்துகிறது.',
      coreConcepts: [
        'Computed Tomography (CT Scan): Rotates narrow X-ray beams $360^\\circ$ around the patient; computer algorithms reconstruct high-resolution cross-sectional 3D slice images of bone and soft tissues.',
        'Magnetic Resonance Imaging (MRI): Uses strong superconducting magnetic fields ($1.5 - 3.0$ Tesla) to align hydrogen proton nuclear spins in the body’s water molecules. Radiofrequency (RF) pulses tip the spins; when RF is turned off, protons relax back, emitting RF signals that map soft tissues with zero ionizing radiation hazard.',
        'Positron Emission Tomography (PET Scan): Injects a radiotracer (Fluorodeoxyglucose containing Fluorine-18). Emitted positrons ($e^+$) annihilate with tissue electrons ($e^-$), producing a pair of back-to-back $511\\text{ keV}$ gamma photons ($e^+ + e^- \\to 2\\gamma$) detected in coincidence to image metabolic activity and cancer tumors.',
        'Ultrasound Sonography: Uses high-frequency sound waves ($2 - 15\\text{ MHz}$) produced by piezoelectric crystals; reflections from tissue boundaries create real-time safe images of unborn fetuses and cardiology blood flow (Doppler ultrasound).'
      ],
      definitions: [
        {
          term: 'Magnetic Resonance Imaging - MRI (காந்த ஒத்ததிர்வு படமெடுத்தல்)',
          termTa: 'காந்த ஒத்ததிர்வு படமெடுத்தல்',
          definitionEn: 'A non-invasive diagnostic medical imaging technique based on Nuclear Magnetic Resonance (NMR) that utilizes powerful magnetic fields and radiofrequency pulses to generate detailed images of soft tissues without ionizing radiation.',
          definitionTa: 'வலுவான காந்தப்புலம் மற்றும் வானொலி அலைகளைப் பயன்படுத்தி உடலின் மென்மையான திசுக்களை அயனியாக்கும் கதிர்வீச்சின்றி படம்பிடிக்கும் முறை MRI எனப்படும்.',
          keyPoints: ['Targets hydrogen protons in water molecules ($^1\\text{H}$)', 'Zero ionizing radiation hazard (safe for repeated scans)']
        },
        {
          term: 'Positron Annihilation (பாசிட்ரான் அழிவு நிகழ்வு)',
          termTa: 'பாசிட்ரான் அழிவு நிகழ்வு',
          definitionEn: 'The quantum process in PET scans where an emitted positron collides with a tissue electron, completely converting their rest masses into two gamma ray photons of energy $511\\text{ keV}$ each, flying in exactly opposite directions ($180^\\circ$).',
          definitionTa: 'பாசிட்ரான் எலக்ட்ரானுடன் மோதி அழியும்போது இரண்டு 511 keV காமா போட்டான்கள் எதிரெதிர் திசைகளில் (180°) வெளியாகும் நிகழ்வு பாசிட்ரான் அழிவு நிகழ்வு எனப்படும்.',
          keyPoints: ['$e^+ + e^- \\to \\gamma + \\gamma$', 'Photon energy $= 511\\text{ keV}$ each']
        }
      ],
      analogies: 'MRI is like listening to a choir of compass needles: a strong magnet forces all compasses to point North, a radio pluck makes them dance, and when they swing back, the musical hum they sing reveals whether they are floating in muscle, brain, or fat.',
      commonMisconceptions: [
        'MRI exposes patients to radioactive nuclear radiation (False: MRI uses non-ionizing static magnetic fields and safe radio waves; it has zero nuclear radiation).'
      ]
    },
    {
      id: 'recent-11.4',
      topicNumber: '11.4',
      title: 'Particle Physics: The Standard Model, Quarks, Leptons, and Cosmology',
      titleTa: 'துகள் இயற்பியல்: திட்ட மாதிரி, குவார்க்குகள், லெப்டான்கள் மற்றும் அண்டவியல்',
      beginnerExplanation: 'Particle physics investigates the ultimate indivisible building blocks of matter and the fundamental forces governing the cosmos. The Standard Model classifies all matter into Quarks and Leptons, bound together by Gauge Bosons (force carriers) and given mass by the Higgs field.',
      beginnerExplanationTa: 'திட்ட மாதிரி (Standard Model) பேரண்டத்தின் அனைத்து பருப்பொருட்களையும் குவார்க்குகள் மற்றும் லெப்டான்கள் என வகைப்படுத்துகிறது. இவை விசை கடத்திகளான போசான்களால் பிணைக்கப்பட்டு, ஹிக்ஸ் புலத்தால் நிறையைப் பெறுகின்றன.',
      coreConcepts: [
        'Fundamental Quarks (Fractional Charges): 6 flavors: Up ($u, +2/3 e$), Down ($d, -1/3 e$), Charm ($c, +2/3 e$), Strange ($s, -1/3 e$), Top ($t, +2/3 e$), Bottom ($b, -1/3 e$). Proton $= uud$ (charge $= +1$), Neutron $= udd$ (charge $= 0$).',
        'Fundamental Leptons: 6 particles: Electron ($e^-$), Muon ($\mu^-$), Tau ($\tau^-$), and their three corresponding neutrinos ($\\nu_e, \\nu_\\mu, \\nu_\\tau$).',
        'Force Carrier Bosons: 1) Photon (Electromagnetic force), 2) Gluons (Strong nuclear force holding quarks together), 3) $W^+, W^-, Z^0$ bosons (Weak nuclear force causing radioactivity), 4) Graviton (hypothetical gravity carrier).',
        'Higgs Boson ("God Particle"): Scalar boson associated with the Higgs field that grants inertial rest mass to elementary particles through spontaneous electroweak symmetry breaking (discovered at CERN in 2012, mass $\\approx 125\\text{ GeV}/c^2$).',
        'Cosmology - Dark Matter & Dark Energy: Normal visible baryonic matter makes up only $\\sim 5\\%$ of the universe; $\\sim 27\\%$ is Dark Matter (invisible mass holding galaxies together via gravity); $\\sim 68\\%$ is Dark Energy (mysterious negative pressure driving the accelerated expansion of the universe).'
      ],
      definitions: [
        {
          term: 'Quark (குவார்க்)',
          termTa: 'குவார்க்',
          definitionEn: 'An elementary fundamental constituent particle of matter carrying fractional electric charge ($+2/3 e$ or $-1/3 e$) that combines to form composite hadrons such as protons and neutrons.',
          definitionTa: 'பின்ன மின்னூட்டம் ($+2/3 e$ அல்லது $-1/3 e$) கொண்ட அடிப்படைத் துகள் குவார்க் எனப்படும். இவை இணைந்து புரோட்டான் மற்றும் நியூட்ரான்களை உருவாக்குகின்றன.',
          keyPoints: ['Cannot exist as isolated free particles (Quark Confinement)', 'Six flavors: u, d, c, s, t, b']
        },
        {
          term: 'Dark Energy (இருண்ட ஆற்றல்)',
          termTa: 'இருண்ட ஆற்றல்',
          definitionEn: 'A hypothetical form of energy that permeates all of space and exerts a repulsive gravitational pressure, accounting for approximately $68\\%$ of the universe’s total energy and causing its accelerated expansion.',
          definitionTa: 'பேரண்டம் முழுவதும் பரவியுள்ள, விண்வெளியின் முடுக்கப்பட்ட விரிவடைதலுக்கு காரணமான மர்மமான விரட்டு ஆற்றல் இருண்ட ஆற்றல் எனப்படும் (பேரண்டத்தில் ~68%).',
          keyPoints: ['Discovered via Type Ia supernova observations in 1998', 'Acts as a cosmological constant ($\Lambda$)']
        }
      ],
      analogies: 'If the entire universe were a 100-slice pizza: 68 slices are Dark Energy, 27 slices are Dark Matter, and all the stars, planets, and humans ever created make up only 5 tiny slices!',
      commonMisconceptions: [
        'Protons and neutrons are indivisible elementary particles (False: protons and neutrons are composite particles composed of quarks: Proton = uud, Neutron = udd).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-REC-01',
      formula: '1\\text{ nm} = 10^{-9}\\text{ m} = 10\\text{ \\AA} = 10^{-3}\\text{ }\\mu\\text{m}',
      meaning: 'Nanometer dimensional scale definition and conversion factors.',
      meaningTa: 'நானோமீட்டர் அலகு வரையறை மற்றும் மாற்றுக் காரணிகள்.',
      variables: [
        { symbol: '\\text{nm}', name: 'Nanometer ($10^{-9}$ m)', nameTa: 'நானோமீட்டர்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' }
      ],
      siUnit: 'm',
      dimension: '[M^0 L^1 T^0]',
      category: 'Fundamental',
      memoryShortcut: 'Nano = 10 to the minus 9 meters!'
    },
    {
      id: 'F-REC-02',
      formula: 'Q_{proton} = u + u + d = +\\frac{2}{3}e + \\frac{2}{3}e - \\frac{1}{3}e = +1e \\quad \\text{and} \\quad Q_{neutron} = u + d + d = +\\frac{2}{3}e - \\frac{1}{3}e - \\frac{1}{3}e = 0',
      meaning: 'Quark composition and fractional electric charge summation of proton and neutron.',
      meaningTa: 'புரோட்டான் மற்றும் நியூட்ரானின் குவார்க் கட்டமைப்பு மற்றும் மின்னூட்டம்.',
      variables: [
        { symbol: 'u', name: 'Up quark charge ($+2/3 e$)', nameTa: 'அப் குவார்க்', siUnit: 'C', dimension: '[M^0 L^0 T^1 I^1]' },
        { symbol: 'd', name: 'Down quark charge ($-1/3 e$)', nameTa: 'டவுன் குவார்க்', siUnit: 'C', dimension: '[M^0 L^0 T^1 I^1]' }
      ],
      siUnit: 'Elementary charge e (C)',
      dimension: '[M^0 L^0 T^1 I^1]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Proton = uud (+1); Neutron = udd (0)'
    }
  ],
  derivations: [
    {
      id: 'DER-REC-01',
      title: 'Quark Composition and Net Charge Verification of Protons and Neutrons',
      titleTa: 'புரோட்டான் மற்றும் நியூட்ரானின் குவார்க் கட்டமைப்பு மற்றும் மின்னூட்ட சரிபார்த்தல்',
      aim: 'To state the fractional charges of Up and Down quarks and mathematically verify the total electric charge of a proton (+1e) and a neutron (0).',
      given: [
        'Up quark (u) has electric charge q_u = +2/3 e.',
        'Down quark (d) has electric charge q_d = -1/3 e.',
        'Proton consists of 2 Up quarks and 1 Down quark (uud).',
        'Neutron consists of 1 Up quark and 2 Down quarks (udd).'
      ],
      toProve: 'Q_{proton} = +1e \\quad \\text{and} \\quad Q_{neutron} = 0',
      steps: [
        {
          stepNumber: 1,
          description: 'Sum the fractional charges for the proton quark trio (uud).',
          descriptionTa: 'புரோட்டானின் குவார்க்குகளின் (uud) மின்னூட்டங்களைக் கூட்டுக.',
          equation: 'Q_{proton} = q_u + q_u + q_d = \\left(+\\frac{2}{3}e\\right) + \\left(+\\frac{2}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) = \\frac{2 + 2 - 1}{3}e = +\\frac{3}{3}e = +1e',
          note: 'Proton has net positive elementary charge +1e = +1.6 × 10⁻¹⁹ C.'
        },
        {
          stepNumber: 2,
          description: 'Sum the fractional charges for the neutron quark trio (udd).',
          descriptionTa: 'நியூட்ரானின் குவார்க்குகளின் (udd) மின்னூட்டங்களைக் கூட்டுக.',
          equation: 'Q_{neutron} = q_u + q_d + q_d = \\left(+\\frac{2}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) = \\frac{2 - 1 - 1}{3}e = \\frac{0}{3}e = 0',
          note: 'Neutron is overall electrically neutral.'
        }
      ],
      finalEquation: 'Q_{proton} = +1e \\quad (uud) \\quad \\text{and} \\quad Q_{neutron} = 0 \\quad (udd)',
      assumptions: [
        'Quarks are held together inside hadrons by gluons via the strong color force.'
      ],
      physicalMeaning: 'Proves the sub-atomic quark composition of nucleons and explains why fractional charges can produce integer elementary charges.',
      physicalMeaningTa: 'பின்ன மின்னூட்டம் கொண்ட குவார்க்குகள் இணைந்து முழு எண் மின்னூட்டத்தைக் கொண்ட புரோட்டான் மற்றும் நியூட்ரான்களை உருவாக்குகின்றன என்பதை விளக்குகிறது.',
      commonMistakes: [
        'Writing proton as udd and neutron as uud (swapping the compositions).',
        'Giving up quark -2/3 charge instead of +2/3.'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'Nanoscale Dimension Conversion',
      question: 'A human red blood cell has a diameter of approximately 7.5 μm, and a virus particle has a diameter of 50 nm. (i) Express the diameter of the red blood cell in nanometers (nm). (ii) Express the diameter of the virus in meters (m) and Angstroms (Å). (iii) How many virus particles placed side-by-side span the width of a single red blood cell?',
      questionTa: 'இரத்த சிவப்பு அணுவின் விட்டம் 7.5 μm, வைரஸின் விட்டம் 50 nm எனில்: (i) இரத்த சிவப்பு அணுவின் விட்டத்தை nm-ல் கூறுக, (ii) வைரஸின் விட்டத்தை m மற்றும் Å-ல் கூறுக, (iii) ஒரு சிவப்பு அணுவின் அகலத்திற்குள் எத்தனை வைரஸ்களை வரிசையாக அடுக்கலாம்?',
      level: 'Easy',
      given: { 'd_RBC': '7.5 μm = 7.5 × 10⁻⁶ m', 'd_virus': '50 nm = 50 × 10⁻⁹ m' },
      required: 'd_RBC (in nm), d_virus (in m and Å), and count N',
      formulaUsed: '1\\text{ }\\mu\\text{m} = 1000\\text{ nm}, \\quad 1\\text{ nm} = 10\\text{ \\AA} = 10^{-9}\\text{ m}, \\quad N = \\frac{d_{RBC}}{d_{virus}}',
      unitConversions: 'Convert all dimensions to nanometers.',
      steps: [
        {
          stepNumber: 1,
          description: 'Convert RBC diameter to nanometers: 7.5 μm = 7.5 × 1000 nm = 7500 nm.',
          math: 'd_{RBC} = 7.5 \\times 10^{-6} \\text{ m} = 7500 \\text{ nm}'
        },
        {
          stepNumber: 2,
          description: 'Express virus diameter in meters and Angstroms.',
          math: 'd_{virus} = 50 \\times 10^{-9} \\text{ m} = 5.0 \\times 10^{-8} \\text{ m} = 500 \\text{ \\AA}'
        },
        {
          stepNumber: 3,
          description: 'Calculate number of virus particles across one RBC: N = d_RBC / d_virus.',
          math: 'N = \\frac{7500 \\text{ nm}}{50 \\text{ nm}} = 150 \\text{ virus particles}'
        }
      ],
      finalAnswer: 'RBC Diameter = 7500 nm, Virus Diameter = 5.0 × 10⁻⁸ m (500 Å), Count N = 150 viruses',
      siUnit: 'nm, m, Å, and dimensionless count',
      shortcutMethod: '7500 nm / 50 nm = 150 particles directly!',
      commonErrors: 'Using 1 μm = 10⁻⁹ m instead of 10⁻⁶ m.',
      examTip: 'Always write unit conversion factors clearly in the first step.'
    },
    {
      title: 'Positron Annihilation Gamma Photon Energy Calculation in PET Scan',
      question: 'In a clinical PET scan, a positron emitted by Fluorine-18 annihilates with a tissue electron at rest (e⁺ + e⁻ → 2γ). If the rest mass of an electron (or positron) is m0 = 9.11 × 10⁻³¹ kg, calculate: (i) the total energy released in Joules, (ii) the energy of each of the two emitted gamma photons in keV, and (iii) the frequency and wavelength of the emitted gamma photons (c = 3 × 10⁸ m/s, h = 6.63 × 10⁻³⁴ J·s).',
      questionTa: 'PET ஸ்கேனில் பாசிட்ரான் எலக்ட்ரானுடன் மோதி இரு காமா போட்டான்களை உருவாக்குகிறது (e⁺ + e⁻ → 2γ). எலக்ட்ரானின் நிறை 9.11 × 10⁻³¹ kg எனில்: (i) வெளியான மொத்த ஆற்றல் (J-ல்), (ii) ஒவ்வொரு காமா போட்டானின் ஆற்றல் (keV-ல்), (iii) காமா போட்டானின் அதிர்வெண் மற்றும் அலைநீளத்தைக் காண்க.',
      level: 'Medium',
      given: { 'm0': '9.11 × 10⁻³¹ kg', 'c': '3.0 × 10⁸ m/s', 'h': '6.63 × 10⁻³⁴ J·s', '1 eV': '1.6 × 10⁻¹⁹ J' },
      required: 'E_total (J), E_photon (keV), frequency ν, and wavelength λ',
      formulaUsed: 'E_{total} = 2 m_0 c^2, \\quad E_\\gamma = m_0 c^2 = h\\nu, \\quad \\lambda = \\frac{c}{\\nu}',
      unitConversions: 'Convert Joules to keV (divide by 1.6 × 10⁻¹⁶).',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate rest energy of each particle Eγ = m0 c².',
          math: 'E_\\gamma = 9.11 \\times 10^{-31} \\times (3 \\times 10^8)^2 = 8.199 \\times 10^{-14} \\text{ J}'
        },
        {
          stepNumber: 2,
          description: 'Convert energy to keV: Eγ(keV) = 8.199 × 10⁻¹⁴ / (1.602 × 10⁻¹⁶) = 511 keV.',
          math: 'E_\\gamma = \\frac{8.199 \\times 10^{-14}}{1.602 \\times 10^{-16}} = 511.8 \\text{ keV} \\approx 511 \\text{ keV}'
        },
        {
          stepNumber: 3,
          description: 'Total energy of both photons E_total = 2 × 511 keV = 1022 keV = 1.022 MeV (1.64 × 10⁻¹³ J).',
          math: 'E_{total} = 2 \\times 511 \\text{ keV} = 1.022 \\text{ MeV}'
        },
        {
          stepNumber: 4,
          description: 'Calculate frequency ν = Eγ / h and wavelength λ = c / ν.',
          math: '\\nu = \\frac{8.199 \\times 10^{-14}}{6.63 \\times 10^{-34}} = 1.237 \\times 10^{20} \\text{ Hz}, \\quad \\lambda = \\frac{3 \\times 10^8}{1.237 \\times 10^{20}} = 2.42 \\times 10^{-12} \\text{ m} = 0.0242 \\text{ \\AA}'
        }
      ],
      finalAnswer: 'Energy per Gamma Photon = 511 keV, Total Energy = 1.022 MeV, Frequency = 1.24 × 10²⁰ Hz, Wavelength = 0.00242 nm (0.0242 Å)',
      siUnit: 'keV, MeV, Hz, meters',
      shortcutMethod: 'E = m0 c² = 0.511 MeV = 511 keV; λ = hc/E = 1240 eV·nm / 511,000 eV = 0.00242 nm.',
      commonErrors: 'Forgetting that TWO identical photons share the total annihilated mass energy equally.',
      examTip: '511 keV is the universal signature rest mass energy of an electron/positron.'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-REC-01',
      name: 'Comparison of Top-Down and Bottom-Up Nanomaterial Synthesis',
      nameTa: 'டாப்-டவுன் மற்றும் பாட்டம்-அப் நானோ தொகுப்பு முறைகள் வரைபடம்',
      purpose: 'Illustrates the two contrasting pathways for creating nanomaterials: Top-Down (carving/milling bulk material into nanopowders) vs Bottom-Up (assembling individual atoms and molecules into nanostructures).',
      components: ['Bulk Solid Material Block', 'Mechanical Ball Milling / Lithography', 'Nanoparticles (1-100 nm)', 'Individual Atoms / Precursor Molecules', 'Chemical Synthesis / Self-Assembly', 'Directional Arrows showing Top-Down and Bottom-Up flows'],
      labelsEn: ['Bulk Material (Macro scale)', 'Top-Down Approach (Milling / Etching)', 'Nanomaterials (1-100 nm)', 'Bottom-Up Approach (Self-assembly / CVD)', 'Atoms & Molecules (Atomic scale)'],
      labelsTa: ['பருப்பொருள் (பெரிய அளவு)', 'டாப்-டவுன் முறை (அரைத்தல் / செதுக்குதல்)', 'நானோ பொருட்கள் (1-100 nm)', 'பாட்டம்-அப் முறை (வேதி தொகுப்பு)', 'அணுக்கள் மற்றும் மூலக்கூறுகள்'],
      stepByStepExplanation: [
        'Draw a large rectangular block at top left labeled "Bulk Material".',
        'Draw a downward arrow labeled "Top-Down Approach (Milling, Laser Ablation, Lithography)" leading to clusters of tiny spheres labeled "Nanoparticles".',
        'Draw individual tiny dots at bottom right labeled "Atoms and Molecules".',
        'Draw an upward arrow labeled "Bottom-Up Approach (Sol-Gel, Chemical Vapor Deposition)" converging into the same central "Nanoparticles" box.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Confusing which method starts with atoms (Bottom-up) and which starts with bulk blocks (Top-down).'],
      aiImagePrompt: 'Textbook vector diagram comparing Top-Down and Bottom-Up nanotechnology synthesis. Showing large solid block being broken down on the left, and individual floating atoms assembling into structured carbon nanotubes on the right, clean educational illustration on white background.'
    },
    {
      id: 'DIAG-REC-02',
      name: 'Standard Model of Elementary Particles',
      nameTa: 'அடிப்படைத் துகள்களின் திட்ட மாதிரி வரைபடம்',
      purpose: 'Categorizes all known elementary particles into a 4x4 matrix of Fermions (6 Quarks and 6 Leptons) and Bosons (4 Gauge Bosons + Higgs Boson).',
      components: ['Quarks column (u, d, c, s, t, b)', 'Leptons column (e, μ, τ, νe, νμ, ντ)', 'Gauge Bosons column (Photon, Gluon, Z, W)', 'Higgs Boson at center/right', 'Electric charge and spin annotations'],
      labelsEn: ['Up (u)', 'Down (d)', 'Charm (c)', 'Strange (s)', 'Top (t)', 'Bottom (b)', 'Electron (e)', 'Muon (μ)', 'Tau (τ)', 'Neutrinos', 'Gluon (g)', 'Photon (γ)', 'Z/W Bosons', 'Higgs Boson (H)'],
      labelsTa: ['அப் (u)', 'டவுன் (d)', 'சார்ம் (c)', 'ஸ்ட்ரேஞ்ச் (s)', 'டாப் (t)', 'பாட்டம் (b)', 'எலக்ட்ரான் (e)', 'மியூயான் (μ)', 'டாவ் (τ)', 'நியூட்ரினோக்கள்', 'குளூயான்', 'போட்டான்', 'Z/W போசான்கள்', 'ஹிக்ஸ் போசான்'],
      stepByStepExplanation: [
        'Draw a grid of 16 colorful rounded cards grouped into 3 families: Quarks (purple), Leptons (green), Gauge Bosons (red), and Higgs (yellow).',
        'Write quark symbols u, d, c, s, t, b with fractional charges +2/3 and -1/3.',
        'Write leptons e, μ, τ with -1 charge and neutrinos with 0 charge.',
        'Write force carriers: Gluon (Strong), Photon (EM), W/Z (Weak), and Higgs (Mass).',
        'Annotate "Baryons = 3 Quarks (Proton uud, Neutron udd)".'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Classifying electrons as quarks (electrons are leptons; protons and neutrons contain quarks).'],
      aiImagePrompt: 'Clean minimalist vector graphic of the Standard Model of Particle Physics. Organized grid showing 6 Quarks, 6 Leptons, 4 Gauge Bosons (Photon, Gluon, W, Z), and the central Higgs Boson, textbook layout on crisp white background.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-REC-01',
      name: 'Energy Density Composition of the Universe (Cosmological Pie Chart)',
      nameTa: 'பேரண்டத்தின் ஆற்றல் அடர்த்தி கலவை பை-விளக்கப்படம்',
      xAxis: 'Cosmological Components',
      yAxis: 'Percentage Share (%)',
      units: 'Percentage (%)',
      shape: '3D circular pie chart divided into three sectors: Dark Energy (68%), Dark Matter (27%), and Normal Baryonic Matter (5%)',
      importantPoints: [
        'Dark Energy: ~68% of the universe (repulsive vacuum energy driving accelerated expansion).',
        'Dark Matter: ~27% of the universe (non-luminous gravitational mass holding galaxies together).',
        'Normal Baryonic Matter (Atoms, Stars, Gas, Planets, Humans): Only ~5% of the total cosmic energy budget!'
      ],
      physicalMeaning: 'Reveals that 95% of the cosmos consists of mysterious dark sector phenomena (dark matter and dark energy) currently beyond the Standard Model.',
      mathematicalRelationship: '\\Omega_{total} = \\Omega_{\\Lambda} (0.68) + \\Omega_{DM} (0.27) + \\Omega_b (0.05) = 1.0',
      howToDrawInExam: 'Draw a circle. Slice 68% (over two-thirds) and label "Dark Energy (68%)". Slice 27% and label "Dark Matter (27%)". Slice the remaining small 5% sliver and label "Ordinary Visible Matter (5%)".',
      commonMistakes: ['Confusing Dark Matter (gravitationally attractive) with Dark Energy (cosmological repulsive expansion).'],
      aiGraphPrompt: 'Textbook 3D circular pie chart of Universe Energy Composition: Dark Energy 68% (deep blue), Dark Matter 27% (purple), and Normal Baryonic Matter 5% (glowing gold stars), clean white background with crisp typography.'
    }
  ],
  experiments: [
    {
      id: 'EXP-REC-01',
      name: 'Synthesis of Silver Nanoparticles using Green Chemical Reduction (Bottom-Up Method)',
      nameTa: 'பச்சை வேதியியல் முறையில் வெள்ளி நானோ துகள்களைத் தயாரித்தல் (பாட்டம்-அப் முறை)',
      apparatus: ['Silver Nitrate solution (1 mM AgNO3)', 'Plant extract (Neem / Tulsi leaf extract acting as natural reducing and capping agent)', 'Magnetic stirrer with heater', 'UV-Visible Spectrophotometer', 'Glass beakers and test tubes'],
      principle: 'Silver ions (Ag⁺) are reduced atom-by-atom to neutral silver atoms (Ag⁰) by phytochemicals in the plant extract. The atoms coalesce into 10-50 nm silver nanoparticles, displaying a characteristic Surface Plasmon Resonance (SPR) optical absorption peak at ~420 nm (yellowish-brown color).',
      principleTa: 'தாவரச் சாற்றில் உள்ள வேதிப்பொருட்கள் வெள்ளி அயனிகளை (Ag⁺) ஒடுக்கி 10-50 nm அளவுள்ள வெள்ளி நானோ துகள்களாக மாற்றுகின்றன. இது 420 nm அலைநீளத்தில் உறிஞ்சு உச்சத்தைக் காட்டுகிறது.',
      procedure: [
        'Prepare 50 mL of 1 mM aqueous AgNO3 solution in a clean conical flask.',
        'Add 5 mL of filtered aqueous Neem leaf extract dropwise while stirring continuously at 60°C.',
        'Observe the visual color transition from colorless to pale yellow, turning deep yellowish-brown within 20 minutes.',
        'Analyze the optical absorption of the synthesized colloid using a UV-Visible spectrophotometer between 300 nm and 700 nm.',
        'Confirm the formation of silver nanoparticles by the distinct SPR peak at ~420 nm.'
      ],
      observation: 'Color changed from clear to deep yellowish-brown. Spectrophotometer revealed a strong sharp absorption peak at 422 nm corresponding to silver nanoparticles of diameter ~20 nm.',
      result: 'Silver nanoparticles successfully synthesized via bottom-up green synthesis with average particle diameter ~20 nm.',
      precautions: [
        'AgNO3 solution must be protected from direct sunlight to prevent premature photo-reduction.',
        'Glassware must be thoroughly rinsed with deionized water.'
      ],
      realLifeImportance: 'Silver nanoparticles possess potent antibacterial and antiviral properties, widely utilized in wound dressings, water purifiers, and antimicrobial coatings.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Recent Developments: Nanotech, Robots, Medical Physics & Quarks',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: The Gold That Turns Ruby Red at the Nanoscale',
        explanationEn: 'If you hold a wedding ring, gold is shiny yellow and inert. But shrink gold down to 20 nanometers, and it suddenly turns brilliant ruby red and becomes a powerful cancer killer! Why do rules change at the nanoscale? Because quantum confinement takes over!',
        explanationTa: 'தங்கத்தை 20 நானோமீட்டர் அளவிற்குச் சுருக்கும்போது, அது மஞ்சள் நிறத்திலிருந்து ரூபி சிவப்பு நிறமாக மாறி புற்றுநோய் செல்களை அழிக்கும் மருந்தாக செயல்படுகிறது! காரணம் குவாண்டம் கட்டுப்பாடு விளைவு!',
        animationDescription: '3D transformation from a golden bullion bar zooming down into red glowing spherical gold nanoparticles attaching directly onto a cancer cell receptor.',
        keywordsDisplayed: ['Nanoscience (1 - 100 nm)', 'Quantum Confinement', 'High Surface Area', 'Targeted Drug Delivery'],
        interactiveQuestion: {
          question: 'What is the diameter range defined for nanomaterials?',
          questionTa: 'நானோ பொருட்களுக்கான அளவு வரம்பு என்ன?',
          options: ['1 nm to 100 nm', '1 mm to 10 mm', '100 nm to 1000 nm', '1 μm to 100 μm'],
          optionsTa: ['1 nm முதல் 100 nm வரை', '1 mm முதல் 10 mm வரை', '100 nm முதல் 1000 nm வரை', '1 μm முதல் 100 μm வரை'],
          correctIndex: 0,
          explanation: 'Nanomaterials are defined as materials with at least one dimension between 1 nm and 100 nm (10⁻⁹ m).'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Wonder Materials: Carbon Nanotubes and Graphene',
        explanationEn: 'Graphene is a single 2D layer of carbon atoms arranged in a honeycomb pattern. It is 200 times stronger than steel, lighter than paper, almost 100% transparent, and conducts electricity better than copper!',
        explanationTa: 'கிராபீன் என்பது அறுகோண தேன்கூடு அமைப்பில் அமைந்த ஒற்றை அடுக்கு கார்பன் அணுக்களின் படலமாகும். இது எஃகை விட 200 மடங்கு வலிமையானது மற்றும் மிகச் சிறந்த மின்கடத்தியாகும்!',
        animationDescription: '3D hexagonal carbon honeycomb sheet rolling seamlessly into a seamless hollow Carbon Nanotube (CNT) structure flexing with supreme strength.',
        keywordsDisplayed: ['Graphene (2D Carbon)', 'Carbon Nanotubes (CNTs)', '200× Stronger than Steel', 'Ballistic Electron Mobility'],
        interactiveQuestion: {
          question: 'Which carbon allotrope consists of a single 2D atomic honeycomb sheet?',
          questionTa: 'ஒற்றை அடுக்கு அறுகோண தேன்கூடு அமைப்பைக் கொண்ட கார்பன் வடிவம் எது?',
          options: ['Graphene', 'Diamond', 'Fullerene C60', 'Graphite block'],
          optionsTa: ['கிராபீன்', 'வைரம்', 'ஃபுல்லரீன் C60', 'கிராபைட்'],
          correctIndex: 0,
          explanation: 'Graphene is a single two-dimensional layer of carbon atoms in an sp²-bonded honeycomb crystal lattice.'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Medical Physics: How MRI Sees Inside Your Brain',
        explanationEn: 'MRI machines use a massive 3-Tesla superconducting magnet to align the spin of hydrogen protons in your body water. Plucking them with harmless radio waves makes them sing back radio echoes that construct razor-sharp 3D brain scans with ZERO radiation danger!',
        explanationTa: 'MRI கருவி உடலில் உள்ள நீர் மூலக்கூறுகளின் ஹைட்ரஜன் புரோட்டான்களை காந்தப்புலத்தால் சீரமைத்து வானொலி அலைகள் மூலம் உடலின் மென்மையான பகுதிகளை கதிர்வீச்சு அபாயமின்றி படம்பிடிக்கிறது.',
        animationDescription: '3D spinning proton compass needles aligning inside an MRI bore, tilting under a radio wave pulse and relaxing back while emitting faint blue RF echo signals.',
        keywordsDisplayed: ['Magnetic Resonance Imaging (MRI)', 'Hydrogen Proton Spin (¹H)', 'Zero Ionizing Radiation', 'Soft Tissue Diagnostics'],
        interactiveQuestion: {
          question: 'Which medical imaging technique produces cross-sectional soft-tissue scans using magnetic fields and radio waves WITHOUT ionizing radiation?',
          questionTa: 'அயனியாக்கும் கதிர்வீச்சு இன்றி காந்தப்புலம் மற்றும் வானொலி அலைகளைப் பயன்படுத்தி மென்மையான திசுக்களை படம்பிடிக்கும் முறை எது?',
          options: ['Magnetic Resonance Imaging (MRI)', 'Computed Tomography (CT scan)', 'PET scan', 'X-ray radiography'],
          optionsTa: ['காந்த ஒத்ததிர்வு படமெடுத்தல் (MRI)', 'CT ஸ்கேன்', 'PET ஸ்கேன்', 'X-கதிர் படம்'],
          correctIndex: 0,
          explanation: 'MRI utilizes Nuclear Magnetic Resonance of hydrogen nuclei using magnetic fields and RF waves, possessing zero ionizing radiation.'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'The Standard Model: Quarks & The God Particle',
        explanationEn: 'Everything around you is built from Quarks and Leptons! A proton is made of two Up quarks and one Down quark (uud = +2/3 + 2/3 - 1/3 = +1). The Higgs Boson discovered at CERN gives particles their mass, while Dark Energy accelerates the expansion of the cosmos!',
        explanationTa: 'அனைத்து பருப்பொருட்களும் குவார்க்குகள் மற்றும் லெப்டான்களால் ஆனவை! புரோட்டான் (uud) இரு அப் மற்றும் ஒரு டவுன் குவார்க்குகளால் ஆனது. ஹிக்ஸ் போசான் துகள்களுக்கு நிறையை வழங்குகிறது!',
        animationDescription: '3D glowing quarks dancing inside a proton held by strong gluon springs, while the cosmic Higgs field ripples mass into speeding particles.',
        keywordsDisplayed: ['Standard Model', 'Proton = uud (+1e)', 'Neutron = udd (0)', 'Higgs Boson (Mass)', 'Dark Energy (68%)'],
        interactiveQuestion: {
          question: 'What is the quark composition of a neutron?',
          questionTa: 'நியூட்ரானின் குவார்க் கட்டமைப்பு என்ன?',
          options: ['udd (one Up, two Down)', 'uud (two Up, one Down)', 'uuu', 'ddd'],
          optionsTa: ['udd (ஒரு அப், இரு டவுன்)', 'uud (இரு அப், ஒரு டவுன்)', 'uuu', 'ddd'],
          correctIndex: 0,
          explanation: 'Neutron consists of udd: (+2/3 e) + (-1/3 e) + (-1/3 e) = 0 net electric charge.'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 220,
    scriptEn: 'Welcome to Unit 11 Recent Developments in Physics! This final chapter opens the window to tomorrow’s technology. We discover how nanotechnology transforms everyday materials like Graphene and Carbon Nanotubes. We inspect robotic anatomy and Asimov’s laws. We delve into medical physics marvels like MRI, CT, and PET scanners. Finally, we explore the Standard Model of elementary quarks and leptons, the Higgs boson, and the cosmic mysteries of Dark Matter and Dark Energy.',
    scriptTa: 'அலகு 11 இயற்பியலின் அண்மைக்கால வளர்ச்சிகள் பகுதிக்கு உங்களை அன்புடன் வரவேற்கிறோம்! இப்பாடத்தில் எதிர்கால தொழில்நுட்பங்களை நாம் காண்கிறோம். நானோ தொழில்நுட்பம், கார்பன் நானோ குழாய்கள் மற்றும் கிராபீன் ஆகியவற்றின் சிறப்புகள், ரோபாட்டிக்ஸ் விதிகள், மருத்துவ இயற்பியல் சாதனங்களான MRI, CT மற்றும் PET ஸ்கேன்கள், மற்றும் பிரபஞ்சத்தின் அடிப்படை துகள்களான குவார்க்குகள், ஹிக்ஸ் போசான் மற்றும் இருண்ட ஆற்றல் ஆகியவற்றை முழுமையாகப் பயில்வோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 11 Recent Developments in Physics-ல் நாம் Nanotechnology synthesis (Top-down & Bottom-up), Carbon Nanotubes & Graphene properties-ஐக் கற்கிறோம். Robotics components and Asimov’s Laws, Medical physics diagnostic tools like MRI (Nuclear Magnetic Resonance), PET scan positron annihilation (511 keV), மற்றும் Standard Model quarks (Proton = uud, Neutron = udd), Higgs Boson, Dark Energy (68%) ஆகியவற்றை முழுமையாகப் படிப்போம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'The quark composition of a proton is:',
        qTa: 'புரோட்டானின் குவார்க் கட்டமைப்பு:',
        a: 'uud (Two Up quarks + One Down quark = +2/3 + 2/3 - 1/3 = +1e)',
        aTa: 'uud (இரு அப் குவார்க்குகள் + ஒரு டவுன் குவார்க் = +1e)'
      },
      {
        q: 'In a PET scan, the energy of each emitted gamma photon produced during positron annihilation is:',
        qTa: 'PET ஸ்கேனில் பாசிட்ரான் அழிவின் போது வெளியாகும் ஒவ்வொரு காமா போட்டானின் ஆற்றல்:',
        a: '511 keV (0.511 MeV)',
        aTa: '511 keV (0.511 MeV)'
      },
      {
        q: 'Approximately what percentage of the universe consists of Dark Energy?',
        qTa: 'பேரண்டத்தில் இருண்ட ஆற்றலின் சதவீதம் சுமார் எவ்வளவு?',
        a: '~68% (Dark Matter ~27%, Normal Matter ~5%)',
        aTa: '~68% (இருண்ட பருப்பொருள் ~27%, சாதாரண பருப்பொருள் ~5%)'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'Distinguish between Top-down and Bottom-up approaches in nanotechnology.',
        qTa: 'நானோ தொழில்நுட்பத்தில் டாப்-டவுன் மற்றும் பாட்டம்-அப் அணுகுமுறைகளை வேறுபடுத்துக.',
        a: 'Top-down: Bulk macroscopic material is mechanically or chemically broken down into nanoscale particles (e.g., ball milling, photolithography). Bottom-up: Nanostructures are synthesized atom-by-atom or molecule-by-molecule through chemical reaction or self-assembly (e.g., chemical vapor deposition CVD, sol-gel).',
        aTa: 'டாப்-டவுன்: பெரிய பருப்பொருளை அரைத்தல் அல்லது செதுக்குதல் மூலம் நானோ துகள்களாக உடைத்தல். பாட்டம்-அப்: அணுக்கள் மற்றும் மூலக்கூறுகளை வேதிவினைகள் மூலம் ஒன்றாக இணைத்து நானோ அமைப்புகளை உருவாக்குதல்.'
      },
      {
        q: 'State Isaac Asimov’s Three Laws of Robotics.',
        qTa: 'ஐசக் அசிமோவின் மூன்று ரோபாட்டிக்ஸ் விதிகளைக் கூறுக.',
        a: '1st Law: A robot may not injure a human being or allow a human being to come to harm. 2nd Law: A robot must obey orders given by humans, except where such orders conflict with the First Law. 3rd Law: A robot must protect its own existence as long as such protection does not conflict with the First or Second Law.',
        aTa: '1-ம் விதி: ரோபோ மனிதருக்கு தீங்கு செய்யக்கூடாது. 2-ம் விதி: முதல் விதிக்கு முரண்படாத வரை மனிதர்களின் கட்டளைகளுக்கு கீழ்ப்படிய வேண்டும். 3-ம் விதி: முதல் இரு விதிகளுக்கு முரண்படாத வரை தனது இருப்பைப் பாதுகாத்துக் கொள்ள வேண்டும்.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Explain the working principle and advantages of Magnetic Resonance Imaging (MRI) in medicine.',
        qTa: 'மருத்துவத்தில் MRI ஸ்கேனின் செயல்பாட்டுக் கொள்கை மற்றும் நன்மைகளை விளக்குக.',
        a: 'Principle: Based on Nuclear Magnetic Resonance (NMR). Strong magnetic field (1.5-3 T) aligns hydrogen proton spins in tissue water. RF pulse tilts the spins; upon relaxing, protons emit RF signals characteristic of the tissue environment. Advantages: 1) Excellent soft-tissue contrast (brain, spinal cord, ligaments). 2) Zero ionizing radiation hazard (completely safe).',
        aTa: 'தத்துவம்: அணுக்கரு காந்த ஒத்ததிர்வு (NMR). காந்தப்புலம் நீரின் ஹைட்ரஜன் புரோட்டான்களை சீரமைக்கிறது. வானொலி அலைகள் மூலம் சைகைகள் பெறப்பட்டு படம் உருவாக்கப்படுகிறது. நன்மைகள்: 1) மென்மையான திசுக்களை மிகத் துல்லியமாக காட்டுகிறது. 2) அயனியாக்கும் கதிர்வீச்சு அபாயம் இல்லை.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Write a comprehensive essay on Carbon Nanotubes (CNTs) and Graphene covering their structure, properties, and modern technological applications.',
        qTa: 'கார்பன் நானோ குழாய்கள் (CNT) மற்றும் கிராபீன் ஆகியவற்றின் கட்டமைப்பு, பண்புகள் மற்றும் பயன்பாடுகள் குறித்து விரிவான கட்டுரை வரைக.',
        a: 'Graphene: Single 2D layer of sp²-hybridized carbon atoms in a hexagonal honeycomb lattice. Properties: 200× stronger than steel, transparent, ultra-high electron mobility (200,000 cm²/V·s). Applications: Flexible touchscreen displays, high-capacity batteries, ultra-fast transistors. CNTs: Cylindrical tubes of rolled graphene sheets (SWCNT and MWCNT). Properties: Extreme tensile strength, high electrical/thermal conductivity. Applications: Aerospace composites, nano-electronics, targeted drug delivery capsules in oncology.',
        aTa: 'கிராபீன்: sp² இனக்கலப்பு கொண்ட ஒற்றை அடுக்கு இருபரிமாண கார்பன் படலம். எஃகை விட 200 மடங்கு வலிமையானது, ஒளிபுகும் தன்மை மற்றும் அதிக எலக்ட்ரான் நகர்திறன் கொண்டது. பயன்பாடுகள்: நெகிழ்வான தொடுதிரைகள், மின்கலங்கள். CNT: உருட்டப்பட்ட கிராபீன் தாள்களாலான உருளைக் குழாய்கள் (SWCNT & MWCNT). பயன்பாடுகள்: விண்வெளி கலப்புப் பொருட்கள், நானோ எலக்ட்ரானிக்ஸ், புற்றுநோய் மருந்து செலுத்தும் அமைப்புகள்.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Top-down vs Bottom-up nanotechnology synthesis (2 Marks / 3 Marks)',
      'Graphene and Carbon Nanotubes properties and applications (3 Marks / 5 Marks)',
      'Asimov’s Laws of Robotics and robot components (2 Marks / 3 Marks)',
      'Medical imaging techniques: MRI vs CT vs PET scan principles (3 Marks / 5 Marks)',
      'Quark composition of proton and neutron (2 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why is Graphene so remarkably strong despite being only one atom thick?',
      answer: 'Because the in-plane covalent sp² sigma bonds between adjacent carbon atoms are among the strongest chemical bonds in nature, requiring massive tensile force to break.',
      category: 'Concept'
    },
    {
      question: 'What is the Higgs Boson and why is it called the "God Particle"?',
      answer: 'The Higgs Boson is the quantum excitation of the universal Higgs field that imparts inertial rest mass to quarks and leptons through spontaneous symmetry breaking.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Concept',
      mistake: 'Assuming CT scan and MRI use the same physics.',
      correctWay: 'CT scans use ionizing X-rays; MRI uses non-ionizing static magnetic fields and radiofrequency waves.'
    },
    {
      category: 'Formula',
      mistake: 'Writing down quark charge as +1/3 instead of -1/3.',
      correctWay: 'Remember: Up, Charm, Top are +2/3 e; Down, Strange, Bottom are -1/3 e.'
    }
  ],
  memoryTricks: [
    {
      title: 'Quark Flavor Charges Mnemonic',
      titleTa: 'குவார்க் மின்னூட்ட நினைவுக்குறிப்பு',
      trick: '"Up, Charm, Top = +2/3 e (Upper level); Down, Strange, Bottom = -1/3 e (Down level)".'
    },
    {
      title: 'Universe Composition Mnemonic',
      titleTa: 'பேரண்டக் கலவை நினைவுக்குறிப்பு',
      trick: '"68% Dark Energy, 27% Dark Matter, 5% Normal Matter".'
    }
  ]
};
