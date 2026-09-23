import { BotanyChapter } from './class11BotanyCurriculum';

export const BOTANY_CHAPTERS_UNIT_5: BotanyChapter[] = [
  // =========================================================================
  // CHAPTER 11: TRANSPORT IN PLANTS (தாவரங்களில் கடத்து முறை)
  // =========================================================================
  {
    chapterNumber: 11,
    unitNumber: 5,
    unitName: 'Unit 5: Plant Physiology',
    unitNameTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterName: 'Transport in Plants',
    chapterNameTa: 'தாவரங்களில் கடத்து முறை',
    overview: 'Water transport pathways (Diffusion, Osmosis, Water Potential Psi, Apoplast vs Symplast), Ascent of Sap (Transpiration Pull & Cohesion-Tension theory of Dixon & Joly), Transpiration & Stomatal opening mechanism (Levitts K+ ion active transport theory), and Phloem Translocation (Münchs Mass Flow Hypothesis).',
    overviewTa: 'தாவரங்களில் நீர் மற்றும் கனிம கடத்தல்: பரவல், சவ்வூடுபரவல், நீர் அழுத்தம், அப்போபிளாஸ்ட் மற்றும் சிம்பிளாஸ்ட் வழிகள், சாற்றேற்றம் (டிக்ஸன் மற்றும் ஜோலி கொள்கை), நீராவிப்போக்கு (லெவிட் K+ அயனி பொறிமுறை) மற்றும் புளோயத்தில் உணவு இடப்பெயர்வு (முஞ்ச் பெருந்திரள் கடத்தல் கொள்கை).',
    learningObjectives: [
      'Understand Water Potential components: Psi_w = Psi_s + Psi_p',
      'Compare Apoplast (cell wall path) and Symplast (plasmodesmata living path)',
      'Explain Cohesion-Tension-Transpiration Pull Theory for Ascent of Sap',
      'Describe Levitts Potassium (K+) ion pump mechanism for stomatal opening and closing',
      'Detail Münchs Pressure Flow (Mass Flow) Hypothesis for source-to-sink sucrose translocation'
    ],
    importance: 'Explains the physics and biochemistry powering giant tree hydraulic plumbing.',
    realLifeApplications: [
      'Girdling / Ringing experiment used to demonstrate phloem translocation in horticulture',
      'Optimizing irrigation schedules based on transpiration rates and stomatal conductance'
    ],
    introduction: 'How does water from the soil reach the crown of a 300-foot Redwood tree without a mechanical pump or electricity? Plants harness the physics of solar-powered evaporation, cohesive hydrogen bonding, and osmotic gradients to pull tons of water skyward every single day!',
    coreConcepts: [
      'Water Potential (Psi_w): Chemical free energy of water; pure water has highest Psi_w = 0 bar at atmospheric pressure; Psi_w = Psi_s + Psi_p.',
      'Apoplast vs Symplast: Apoplast is the non-living cell wall/intercellular continuum; Symplast is the interconnected living protoplast connected via plasmodesmata.',
      'Ascent of Sap: Dixon and Joly (1894) Cohesion-Tension-Transpiration Pull theory.',
      'Stomatal Mechanism: Levitt (1974) K+ influx/efflux theory.',
      'Phloem Transport: Munch Pressure Flow from Source (Mesophyll leaf) to Sink (Roots/Fruit).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Cohesion-Tension Theory of Ascent of Sap (Dixon and Joly)',
        explanation: 'Three forces sustain the continuous water column: (1) Cohesion: Mutual attraction between water molecules via hydrogen bonds; (2) Adhesion: Attraction between water molecules and lignified xylem tracheary walls; (3) Transpiration Pull: Evaporation of water from mesophyll creates negative suction pressure/tension (-30 atm), pulling the uninterrupted sap column upward.',
        keyPoints: ['Cohesion + Adhesion + Transpiration Pull = Continuous sap ascent']
      },
      {
        topic: '2. Levitts Potassium (K+) Ion Exchange Theory of Stomatal Action',
        explanation: 'In Light: Starch in guard cells converts to Phosphoenolpyruvate (PEP) -> PEP + CO2 -> Oxaloacetate -> Malic Acid. Malic acid dissociates into Malate and H+ ions. H+ is actively pumped out into subsidiary cells in exchange for K+ influx (Proton pump ATPase). K+ and Malate accumulate in guard cells, lowering osmotic potential (Psi_s). Water enters guard cells by endosmosis -> Guard cells become turgid -> Stoma opens. In Dark: ABA triggers K+ efflux -> Guard cells become flaccid -> Stoma closes.',
        keyPoints: ['Light: Proton efflux -> K+ influx -> Turgid -> Stoma Opens', 'Dark / ABA: K+ efflux -> Water leaves -> Flaccid -> Stoma Closes']
      },
      {
        topic: '3. Munch Pressure Flow (Mass Flow) Hypothesis',
        explanation: 'At Source (Leaf): Photosynthetic sucrose is actively loaded into phloem sieve tubes via companion cells. This lowers water potential; water from adjacent xylem enters by osmosis, generating high hydrostatic turgor pressure. At Sink (Root/Fruit): Sucrose is actively unloaded; turgor pressure drops. The mass flow of sap moves from high turgor pressure (source) to low turgor pressure (sink).',
        keyPoints: ['Source: Phloem loading -> High Turgor Pressure', 'Sink: Phloem unloading -> Low Turgor Pressure']
      }
    ],
    definitions: [
      {
        term: 'Water Potential (Ψw)',
        termTa: 'நீர் அழுத்தம் (Ψw)',
        definition: 'The difference between the free chemical energy of water in a given system and pure water under standard atmospheric temperature and pressure.',
        definitionTa: 'தூய நீரின் மூலக்கூறு ஆற்றலுக்கும், ஒரு குறிப்பிட்ட கரைசலில் உள்ள நீரின் ஆற்றலுக்கும் இடையேயான வேறுபாடு.'
      },
      {
        term: 'Guttation',
        termTa: 'நீர் வடிதல் (கட்டேஷன்)',
        definition: 'The exudation of liquid water droplets from special unregulatable pores called Hydathodes on leaf margins under high root pressure and low transpiration.',
        definitionTa: 'அதிக வேர் அழுத்தம் காரணமாக இலை விளிம்புகளில் உள்ள ஹைட்ரோதோட்கள் வழியாக நீர் துளிகளாக வெளியேறுவது.'
      }
    ],
    scientificNames: [],
    classifications: [],
    biologicalProcesses: [
      {
        name: 'Stomatal Opening Sequence (Levitt Theory)',
        mechanism: 'Daylight -> H+ efflux -> Active K+ influx into guard cells -> Malate-K+ synthesis -> Hypertonic guard cell -> Endosmosis -> Turgidity -> Stomatal pore opens.'
      }
    ],
    importantTables: [
      {
        title: 'Differences between Apoplast and Symplast Pathways',
        headers: ['Feature', 'Apoplast Pathway', 'Symplast Pathway'],
        rows: [
          ['Pathway Medium', 'Non-living cell walls and intercellular spaces', 'Living interconnected protoplasts via plasmodesmata'],
          ['Resistance to Flow', 'Very low resistance, rapid flow', 'Higher resistance, slower flow'],
          ['Endodermis Barrier', 'Blocked by Casparian strip suberin', 'Continuous across endodermis into xylem'],
          ['Metabolic Dependency', 'Independent of cellular metabolism', 'Dependent on living cellular activity']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Münchs Mass Flow Mechanism',
        steps: ['Source: Mesophyll cells synthesize glucose -> converted to sucrose', 'Active Phloem Loading into companion cells & sieve tubes', 'Water enters sieve tubes from xylem -> High Hydrostatic Turgor Pressure generated', 'Mass Flow of sap along pressure gradient to sink', 'Active Phloem Unloading at Sink (Root/Storage organ) -> Water returns to xylem']
      }
    ],
    summary: 'Transport in plants coordinates short-distance osmosis and long-distance bulk flow. Transpiration pull lifts water through xylem, while turgor pressure gradients drive phloem translocation.',
    shortNotes: ['Pure water has maximum water potential Psi_w = 0.', 'Transpiration is described as a necessary evil by Curtis.'],
    quickRevisionPoints: ['Cohesion-Tension theory was proposed by Dixon and Joly.', 'K+ ion active uptake theory proposed by Levitt.'],
    examImportantPoints: ['Explain Cohesion-Tension theory for Ascent of Sap (5 Marks).', 'Describe Levitts K+ ion theory of stomatal opening and closing (5 Marks).', 'Explain Münchs Mass Flow hypothesis with diagram (5 Marks).'],
    faqs: [
      {
        question: 'Why does the apoplast pathway stop at the root endodermis?',
        answer: 'The endodermis contains suberized Casparian strips which are completely impermeable to water, forcing water to enter the living symplast pathway across the plasma membrane.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Assuming transpiration happens through hydathodes.', correction: 'Transpiration is water vapour loss through stomata; liquid water droplet exudation through hydathodes is Guttation.' }],
    memoryTricks: [{ mnemonic: 'K-I-S-O (K Inflow = Stoma Open)', meaning: 'K+ enters guard cells -> Endosmosis -> Stoma Opens' }],
    fiveKeyTakeaways: [
      'Water moves spontaneously from higher to lower water potential (Ψw = Ψs + Ψp).',
      'Apoplast is the cell-wall highway; Symplast is the living plasmodesmatal route.',
      'Cohesion and transpiration pull elevate water to immense tree heights.',
      'Active K+ pumping regulates the turgor of guard cells for stomatal gating.',
      'Phloem translocates carbohydrates from source to sink via hydrostatic pressure gradients.'
    ],
    diagrams: [
      {
        id: 'diag-11-1',
        name: 'Levitts K+ Ion Stomatal Mechanism & Münchs Mass Flow',
        nameTa: 'லெவிட் K+ அயனி பொறிமுறை மற்றும் முஞ்ச் பெருந்திரள் கடத்தல் வரைபடம்',
        purpose: 'Visualizes ion flux across guard cells and source-to-sink phloem hydrostatic flow.',
        purposeTa: 'காவல் செல்களில் K+ அயனி இடப்பெயர்ச்சி மற்றும் புளோயத்தில் சர்க்கரை கடத்தலை விளக்கும் படம்.',
        labels: ['Guard Cell (Turgid)', 'K+ Influx Pump', 'Malate Accumulation', 'Stomatal Pore Open', 'Guard Cell (Flaccid - Closed)', 'Source Leaf Mesophyll', 'Phloem Sieve Tube', 'Companion Cell', 'Xylem Vessel', 'Sink Organ (Root/Fruit)'],
        explanation: 'Dual-panel diagram showing open/closed stomatal states alongside Münch source-to-sink flow model.',
        explanationTa: 'இலைத்துளை திறத்தல் மற்றும் மூடுதல் முறையும், புளோயத்தில் பெருந்திரள் உணவு இடப்பெயர்ச்சியும் காட்டப்பட்டுள்ளது.',
        examImportance: 'Very High (Core 5-mark question in Plant Physiology).',
        commonQuestions: ['Explain the mechanism of stomatal opening with Levitts theory.', 'Illustrate Münchs mass flow hypothesis.'],
        aiImagePrompt: 'High-detail scientific diagram showing (A) Levitt K+ ion stomatal opening and closing in guard cells, and (B) Munch mass flow hypothesis showing sieve tube loading at leaf source and unloading at root sink with pressure arrows.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Wide view of a giant redwood tree in early morning, zooming down to root hairs absorbing water from soil particles.',
        scene2: 'Ascent of Sap simulation: Hydrogen bonds forming an unbreakable chain between water molecules inside hollow xylem vessels, pulled upward by leaf evaporation.',
        scene3: 'Stomatal pore close-up: Blue K+ ions rushing into guard cells, water swelling the outer thin walls, bowing the thick inner walls apart to open the pore.',
        scene4: 'Phloem highway: Glowing pink sucrose molecules loaded into sieve tubes, water creating massive turgor pressure propelling sugar stream down to roots.'
      },
      cameraDirection: 'Dynamic vertical zoom traveling from underground root tip up 100 meters inside xylem pipeline into stomatal chamber.',
      visualStyle: 'Photorealistic fluid dynamics rendering with luminous water molecules, glowing ion streams, and mechanical pressure meters.'
    },
    voiceNarration: {
      audioTitle: 'Nature’s Hydraulic Wonder: Transport in Plants',
      audioTitleTa: 'தாவரங்களின் அதிசய நீரேற்று அமைப்பு: கடத்து முறை',
      scriptEn: 'How does a giant tree drink water without a heart or motor? It relies on the Cohesion-Tension theory! As sunbeams evaporate water from leaf stomata, an immense suction tension of minus thirty atmospheres is created. Because water molecules cling to one another through hydrogen bonds like links in a steel chain, this tension pulls an unbroken column of water from deep underground right to the topmost leaf! Meanwhile, phloem sieve tubes act like pressurized cargo pipelines, delivering sweet sugar syrup from leaf sources to growing fruit sinks. Plant physics in action!',
      scriptTa: 'மோட்டார் பம்ப் இல்லாமல் நூறு அடி உயர மரத்தின் உச்சிக்கு நீர் எவ்வாறு செல்கிறது? நீராவிப்போக்கு இழுவிசை மற்றும் நீர் மூலக்கூறுகளுக்கு இடையேயான பிணைப்பு விசை மூலம் சைலம் குழாய்களில் நீர் தடையின்றி மேலேறுகிறது. அதே நேரத்தில் புளோயம் குழாய்கள் இலை தயாரிக்கும் சர்க்கரையை அனைத்து பாகங்களுக்கும் கொண்டுசேர்க்கின்றன!',
      teacherTone: 'Awe-inspiring, energetic, crystal clear, engaging.'
    }
  },

  // =========================================================================
  // CHAPTER 12: MINERAL NUTRITION (கனிம ஊட்டம்)
  // =========================================================================
  {
    chapterNumber: 12,
    unitNumber: 5,
    unitName: 'Unit 5: Plant Physiology',
    unitNameTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterName: 'Mineral Nutrition',
    chapterNameTa: 'கனிம ஊட்டம்',
    overview: 'Essential mineral nutrients (Criteria of essentiality by Arnon & Stout), Macronutrients (N, P, K, Ca, Mg, S) and Micronutrients (Fe, Mn, Zn, Cu, B, Mo, Cl, Ni), Deficiency symptoms (Chlorosis, Necrosis, Stunting), Toxicity of micronutrients, Hydroponics & Aeroponics, Nitrogen Cycle and Biological Nitrogen Fixation (BNF - Rhizobium-legume nodulation, Nitrogenase enzyme complex, Leghaemoglobin, Transamination).',
    overviewTa: 'தாவரங்களுக்குத் தேவையான கனிம ஊட்டச்சத்துக்கள் (பேரூட்ட மற்றும் நுண்ணூட்ட தனிமங்கள்), பற்றாக்குறை அறிகுறிகள் (குளோரோசிஸ், நெக்ரோசிஸ்), மண் இல்லா விவசாயம் (ஹைட்ரோபோனிக்ஸ்), நைட்ரஜன் சுழற்சி மற்றும் உயிரியல் நைட்ரஜன் நிலைநிறுத்தம் (ரைசோபியம், நைட்ரோஜினேஸ் என்சைம், லெக்ஹீமோகுளோபின்).',
    learningObjectives: [
      'Understand Arnons criteria for essentiality of elements',
      'Distinguish Macronutrients vs Micronutrients and their physiological roles & deficiency symptoms',
      'Explain Hydroponics and Aeroponics soilless culture systems',
      'Analyze Nitrogen cycle and biochemical mechanism of Biological Nitrogen Fixation (Rhizobium infection, Nod-factors, Nitrogenase reduction, Leghaemoglobin oxygen scavenger)'
    ],
    importance: 'Essential for crop agronomy, balanced fertilizer management, and organic farming.',
    realLifeApplications: [
      'Hydroponic commercial greenhouse farming of strawberries, lettuces, and tomatoes',
      'Biofertilizer inoculation with Rhizobium cultures in pulse farming'
    ],
    introduction: 'Plants cannot walk to find food; they anchor their roots and extract sixteen vital inorganic minerals from soil moisture! From the Magnesium atom at the core of Chlorophyll to the Iron-Molybdenum engine of Nitrogenase, let us discover how minerals power plant biochemistry.',
    coreConcepts: [
      'Essential Elements: 17 essential elements categorized into Macronutrients (>10 mmole/kg dry matter: C, H, O, N, P, K, Ca, Mg, S) and Micronutrients (<10 mmole/kg: Fe, Mn, Zn, Cu, B, Mo, Cl, Ni).',
      'Deficiency Symptoms: Chlorosis (loss of chlorophyll: N, K, Mg, Fe, Mn, Zn, Mo), Necrosis (death of tissues: Ca, Mg, Cu, K), Inhibition of cell division (N, K, S, Mo).',
      'Hydroponics: Growing plants in nutrient solution without soil (Julius von Sachs 1860).',
      'Biological Nitrogen Fixation: Reduction of atmospheric N2 to NH3 by Nitrogenase: N2 + 8e- + 8H+ + 16 ATP -> 2 NH3 + H2 + 16 ADP + 16 Pi.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Root Nodule Formation & Biological Nitrogen Fixation (Rhizobium)',
        explanation: '1. Rhizobium bacteria attracted by legume root exudates (flavonoids). 2. Bacteria secrete Nod factors causing root hair curling. 3. Infection thread forms, transporting bacteria into inner cortex. 4. Cortical and pericycle cells divide to form Root Nodule. 5. Bacteria differentiate into non-motile Bacteroids. 6. Nitrogenase enzyme complex (Mo-Fe protein) reduces N2 to NH3 in the presence of Leghaemoglobin (pink oxygen scavenger protecting oxygen-sensitive nitrogenase).',
        keyPoints: ['N2 -> NH3 requires 16 ATP per N2 fixed', 'Leghaemoglobin creates anaerobic microenvironment']
      },
      {
        topic: '2. Major Mineral Roles & Specific Deficiency Disorders',
        explanation: 'Magnesium (Mg): Central constituent of Chlorophyll porphyrin ring and ribosome structure activator. Calcium (Ca): Component of middle lamella (Calcium pectate). Zinc (Zn): Required for Auxin (IAA) synthesis (deficiency causes Little Leaf disease). Boron (B): Pollen germination and sugar translocation (deficiency causes Brown Heart of Turnip).',
        keyPoints: ['Mg deficiency: Interveinal chlorosis', 'Zn deficiency: Little leaf of Brinjal / Citrus motle leaf', 'Mo deficiency: Whiptail of Cauliflower']
      }
    ],
    definitions: [
      {
        term: 'Leghaemoglobin',
        termTa: 'லெக்ஹீமோகுளோபின்',
        definition: 'A pink/red oxygen-scavenging pigment synthesized in legume root nodules that protects the oxygen-sensitive Nitrogenase enzyme from oxygen inactivation.',
        definitionTa: 'வேர் முண்டுகளில் காணப்படும் இளஞ்சிவப்பு நிற ஆக்சிஜன் ஈர்ப்பு நிறமி; இது நைட்ரோஜினேஸ் என்சைமை ஆக்சிஜனிடமிருந்து பாதுகாக்கிறது.'
      },
      {
        term: 'Hydroponics',
        termTa: 'மண்ணில்லா நீர் ஊடக வளர்ப்பு (ஹைட்ரோபோனிக்ஸ்)',
        definition: 'The technique of growing plants with their roots immersed in a defined, aerated mineral nutrient solution without soil.',
        definitionTa: 'மண் இல்லாமல் வேதியியல் ஊட்டச்சத்து கரைசலில் தாவரங்களை வளர்க்கும் அறிவியல் முறை.'
      }
    ],
    scientificNames: [
      { commonName: 'Symbiotic Nitrogen-fixing Bacterium', binomialName: 'Rhizobium leguminosarum', significance: 'Forms root nodules in pea and bean legumes' }
    ],
    classifications: [],
    biologicalProcesses: [
      {
        name: 'Biological Nitrogen Fixation Reduction Reaction',
        mechanism: 'N2 (atmospheric) binds to Fe-Mo protein of Nitrogenase -> sequential 3-step reduction -> Diimide (HN=NH) -> Hydrazine (H2N-NH2) -> 2 Ammonia (NH3).',
        formulaOrSteps: 'N2 + 8e- + 8H+ + 16 ATP -> 2 NH3 + H2 + 16 ADP + 16 Pi'
      }
    ],
    importantTables: [
      {
        title: 'Diagnostic Mineral Deficiency Diseases in Crops',
        headers: ['Element', 'Physiological Role', 'Specific Deficiency Symptom / Disease'],
        rows: [
          ['Nitrogen (N)', 'Constituent of amino acids, proteins, chlorophyll', 'General chlorosis, stunted growth'],
          ['Magnesium (Mg)', 'Central atom of chlorophyll ring', 'Interveinal chlorosis in older leaves'],
          ['Zinc (Zn)', 'Activator of carbonic anhydrase & Auxin synthesis', 'Little Leaf Disease of Brinjal'],
          ['Boron (B)', 'Pollen germination and carbohydrate transport', 'Brown Heart of Turnip, Fruit cracking'],
          ['Molybdenum (Mo)', 'Component of Nitrate Reductase and Nitrogenase', 'Whiptail Disease of Cauliflower']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Steps in Legume Root Nodule Formation',
        steps: ['Roots release flavonoids -> Attracts Rhizobium', 'Rhizobium secretes Nod factors -> Root hair curling', 'Infection thread penetrates root hair cortex', 'Bacteria multiply and differentiate into Bacteroids', 'Nodule vascular connection established with pink Leghaemoglobin']
      }
    ],
    summary: 'Mineral nutrition explores essential macro and micro elements and unravels the biological nitrogen fixation machinery that fertilizes biosphere soils.',
    shortNotes: ['16 ATP are consumed to fix a single molecule of N2 into 2 NH3 molecules.', 'Free-living nitrogen fixers include Azotobacter (aerobic) and Clostridium (anaerobic).'],
    quickRevisionPoints: ['Julius von Sachs pioneered Hydroponics (1860).', 'Whiptail disease of cauliflower is caused by Molybdenum (Mo) deficiency.'],
    examImportantPoints: ['Explain the stages of root nodule formation in legumes with diagrams (5 Marks).', 'Describe the structure and role of Nitrogenase enzyme complex (5 Marks).', 'Tabulate the deficiency symptoms of N, Mg, Zn, B, and Mo (5 Marks).'],
    faqs: [
      {
        question: 'Why is Leghaemoglobin called an oxygen scavenger?',
        answer: 'The Nitrogenase enzyme is extremely sensitive to oxygen and gets permanently inactivated in its presence. Leghaemoglobin binds and removes free oxygen, creating an anaerobic microclimate inside the nodule while allowing cellular respiration for bacteroids.',
        markWeight: '3 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Believing Nitrogenase fixes nitrogen without energy expenditure.', correction: 'Biological nitrogen fixation is an extremely energy-expensive process requiring 8 ATP per molecule of NH3 produced (16 ATP per N2 molecule).' }],
    memoryTricks: [{ mnemonic: 'Z-I-P-P (Zinc for Auxin, Boron for Pollen)', meaning: 'Zn: Indole Acetic Acid (Auxin) | B: Pollen tube germination' }],
    fiveKeyTakeaways: [
      '17 elements are indispensable for plant vegetative and reproductive life cycles.',
      'Magnesium anchors the chlorophyll porphyrin ring.',
      'Deficiency symptoms depend on element mobility (older vs younger leaves).',
      'Rhizobium-legume symbiosis produces pink root nodules.',
      'Nitrogenase requires 16 ATP and anaerobic protection by leghaemoglobin to fix atmospheric N2.'
    ],
    diagrams: [
      {
        id: 'diag-12-1',
        name: 'Development of Root Nodule in Legumes & Nitrogenase Action',
        nameTa: 'வேர் முடிச்சு உருவாக்கம் மற்றும் நைட்ரோஜினேஸ் என்சைம் செயல்முறை',
        purpose: 'Step-by-step diagram showing root hair curling, infection thread invasion, bacteroid differentiation, and chemical reduction of N2.',
        purposeTa: 'வேர் தூவி வளைதல், தொற்று இழை உருவாக்கம் மற்றும் பாக்டீராய்டுகளின் நைட்ரஜன் நிலைநிறுத்தம்.',
        labels: ['Root Hair Exudates (Flavonoids)', 'Curled Root Hair', 'Infection Thread', 'Inner Cortex Division', 'Bacteroids in Nodule', 'Pink Leghaemoglobin Zone', 'Nitrogenase Enzyme (Mo-Fe Protein)', 'N2 -> NH3 Conversion'],
        explanation: 'Illustrates cellular stages from Rhizobium infection to functional pink nodule.',
        explanationTa: 'ரைசோபியம் பாக்டீரியா வேரில் புகுந்து வேர் முண்டுகளை உருவாக்கும் தொடர் நிலைகள்.',
        examImportance: 'Very High (Guaranteed 5-mark question in Unit 5).',
        commonQuestions: ['Describe the sequence of root nodule formation in legumes with a neat diagram.'],
        aiImagePrompt: 'Four-panel sequential textbook scientific illustration of legume root nodule formation showing (1) Rhizobium gathering around root hair, (2) Root hair curling and infection thread, (3) Cortical cell division, (4) Mature pink nodule with bacteroids and Mo-Fe Nitrogenase enzyme.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Underground soil macro view: Legume root tip secreting golden chemical signals attracting swarms of glowing Rhizobium bacteria.',
        scene2: 'Microscopic 3D view: Root hair bending like a shepherd’s crook, infection thread tunneling through cell walls into the cortex.',
        scene3: 'Cortex cells rapidly dividing, swelling into a bulbous pink root nodule illuminated by red leghaemoglobin protein shields.',
        scene4: 'Molecular stage: Molybdenum-Iron nitrogenase enzyme grabbing inert triple-bonded N2 gas, blasting it with 16 ATP packets to generate two ammonia molecules.'
      },
      cameraDirection: 'Subterranean 3D tracking shot moving through soil pores into the internal cellular core of a living root nodule.',
      visualStyle: 'Photorealistic microbiological 3D rendering with glowing chemical gradients, molecular ATP bursts, and translucent cellular textures.'
    },
    voiceNarration: {
      audioTitle: 'The Soil Alchemists: Mineral Nutrition & Nitrogen Fixation',
      audioTitleTa: 'மண்ணின் ரசவாதம்: கனிம ஊட்டமும் நைட்ரஜன் நிலைநிறுத்தமும்',
      scriptEn: 'Although atmospheric air is 78 percent nitrogen, plants cannot consume a single breath of it directly! Why? Because nitrogen atoms are locked together by an unbreakable chemical triple bond. Enter Rhizobium—the ultimate bio-fertilizer engineer! When invited into legume roots, it builds specialized factories called root nodules. Inside, the miraculous enzyme Nitrogenase uses sixteen packets of ATP energy to crack that triple bond and manufacture ammonia, all while protected under the red oxygen-shield of leghaemoglobin! Understanding mineral nutrition shows us how soil feeds the world.',
      scriptTa: 'காற்றில் 78% நைட்ரஜன் இருந்தாலும் தாவரங்களால் அதை நேரடியாகப் பயன்படுத்த முடியாது! ரைசோபியம் பாக்டீரியாக்கள் வேர் முடிச்சுகளை உருவாக்கி, நைட்ரோஜினேஸ் என்சைம் மற்றும் லெக்ஹீமோகுளோபின் உதவியுடன் வளிமண்டல நைட்ரஜனை அமோனியாவாக மாற்றுகின்றன. இது இயற்கையின் மாபெரும் அதிசயம்!',
      teacherTone: 'Passionate, clear, enthusiastic, concept-driven.'
    }
  },

  // =========================================================================
  // CHAPTER 13: PHOTOSYNTHESIS (ஒளிச்சேர்க்கை)
  // =========================================================================
  {
    chapterNumber: 13,
    unitNumber: 5,
    unitName: 'Unit 5: Plant Physiology',
    unitNameTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterName: 'Photosynthesis',
    chapterNameTa: 'ஒளிச்சேர்க்கை',
    overview: 'Photosynthetic pigments (Reaction center Chl-a vs Antenna pigments), Light Reactions (Hill reaction, Photolysis of water, PS I & PS II, Non-cyclic Z-Scheme vs Cyclic photophosphorylation), Mitchells Chemiosmotic Hypothesis, Dark Reactions / Carbon Fixation (Calvin C3 cycle, Hatch & Slack C4 pathway with Kranz anatomy, CAM pathway), Photorespiration (C2 cycle in Chloroplast-Peroxisome-Mitochondria), and Factors affecting photosynthesis (Blackmans Law of Limiting Factors).',
    overviewTa: 'ஒளிச்சேர்க்கை: ஒளி நிறமிகள், ஒளி வினைகள் (PS I, PS II, Z-திட்டம், சுழல் மற்றும் சுழலா பாஸ்போரிகரணம்), மிட்செல்லின் கெமிஆஸ்மாட்டிக் கொள்கை, இருள் வினைகள் (கால்வின் C3 சுழற்சி, கிரான்ஸ் உள்ளமைவுடன் கூடிய C4 சுழற்சி, CAM வழித்தடம்), ஒளிச்சுவாசம் (C2 சுழற்சி) மற்றும் பிளாக்மேனின் எல்லைக் காரணிகள் விதி பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Understand Photolysis of water (Oxygen Evolving Complex - Mn2+, Ca2+, Cl- ions)',
      'Compare Non-Cyclic (Z-Scheme) and Cyclic Photophosphorylation',
      'Explain Chemiosmotic ATP synthesis across the thylakoid membrane',
      'Detail 3 phases of Calvin C3 Cycle (Carboxylation by RuBisCO, Reduction, Regeneration of RuBP)',
      'Analyze Hatch-Slack C4 Pathway, Kranz anatomy, and energetic significance over C3 plants',
      'Understand Photorespiration (C2 cycle) and CAM pathway in succulents'
    ],
    importance: 'The primary energetic engine of all terrestrial life on Earth.',
    realLifeApplications: [
      'Engineering C4 photosynthetic pathways into C3 rice crops to boost global food yields',
      'Understanding greenhouse CO2 enrichment for commercial floriculture'
    ],
    introduction: 'Every gram of sugar in fruit, every drop of oil, and every molecule of oxygen we breathe is generated by one celestial process: Photosynthesis! Plants catch photons traveling 93 million miles from the Sun and convert them into stable chemical bonds.',
    coreConcepts: [
      'Light Reactions (Thylakoids): Absorption of light, Photolysis of water, generation of ATP and NADPH + H+ (Assimilatory Power).',
      'Z-Scheme: Non-cyclic electron transport connecting PS-II (P680) and PS-I (P700).',
      'Chemiosmosis (Peter Mitchell): Proton gradient (delta pH) built in thylakoid lumen drives CF0-CF1 ATP Synthase.',
      'Dark Reactions (Stroma): Calvin C3 cycle reduces CO2 to Triose Phosphate using ATP and NADPH.',
      'C4 Pathway: Spatial separation of initial CO2 fixation (PEP carboxylase in Mesophyll) and Calvin cycle (RuBisCO in Bundle Sheath with Kranz anatomy).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Non-Cyclic Electron Transport (Z-Scheme)',
        explanation: 'Photons hit PS-II (P680), ejecting high-energy electrons. Water is split at the Oxygen Evolving Complex (2H2O -> O2 + 4H+ + 4e-). Electrons pass through Pheophytin -> Plastoquinone (PQ) -> Cytochrome b6f complex -> Plastocyanin (PC) to PS-I (P700). PS-I absorbs light, ejecting electrons to Ferredoxin (Fd), where FNR enzyme reduces NADP+ to NADPH + H+. Simultaneously, proton pumping creates ATP.',
        keyPoints: ['Both PS-I and PS-II operate', 'Photolysis of water releases O2', 'Generates both ATP and NADPH']
      },
      {
        topic: '2. Calvin C3 Cycle (3 Phases)',
        explanation: 'Phase 1: Carboxylation: 6 RuBP (5C) + 6 CO2 + 6 H2O -> catalyzed by RuBisCO -> 12 molecules of 3-PGA (3C). Phase 2: Reduction: 12 3-PGA phosphorylated and reduced using 12 ATP + 12 NADPH -> 12 GAP (Glyceraldehyde-3-phosphate). 2 GAP molecules exit to form 1 Glucose (6C). Phase 3: Regeneration: Remaining 10 GAP undergo complex sugar rearrangements using 6 ATP to regenerate 6 RuBP acceptor molecules.',
        keyPoints: ['Total input for 1 Glucose: 6 CO2 + 18 ATP + 12 NADPH']
      },
      {
        topic: '3. Hatch-Slack C4 Pathway & Kranz Anatomy',
        explanation: 'C4 plants (Sugarcane, Maize) possess Kranz anatomy (bundle sheath cells with agranal chloroplasts surrounded by mesophyll cells with granal chloroplasts). In Mesophyll: CO2 is accepted by PEP (3C) via PEP Carboxylase forming Oxaloacetic acid (4C) -> Malate. Malate is transported to Bundle Sheath cells, where it is decarboxylated to Pyruvate, releasing concentrated CO2 directly to RuBisCO. This completely eliminates photorespiration and maximizes photosynthetic efficiency under high temperatures and intense light.',
        keyPoints: ['Primary CO2 acceptor: PEP (3C) in mesophyll', 'RuBisCO localized exclusively in bundle sheath', 'Zero photorespiration']
      }
    ],
    definitions: [
      {
        term: 'Kranz Anatomy',
        termTa: 'கிரான்ஸ் உள்ளமைப்பியல்',
        definition: 'Specialized leaf anatomical arrangement in C4 plants where large bundle sheath cells with agranal chloroplasts form a ring-like wreath around vascular bundles, encircled by mesophyll cells.',
        definitionTa: 'C4 தாவரங்களில் வாஸ்குலார் கற்றைகளைச் சுற்றி வளைய வடிவில் அமைந்த கற்றை உறை செல்கள் கொண்ட சிறப்பான இலை அமைப்பு.'
      },
      {
        term: 'Photorespiration (C2 Cycle)',
        termTa: 'ஒளிச்சுவாசம் (C2 சுழற்சி)',
        definition: 'A wasteful, energy-consuming process occurring in C3 plants under high O2 and low CO2 conditions where RuBisCO acts as an oxygenase, producing 2-Phosphoglycolate (2C) across Chloroplast, Peroxisome, and Mitochondria without generating ATP or sugar.',
        definitionTa: 'அதிக ஆக்சிஜன் சூழலில் ருபிஸ்கோ என்சைம் ஆக்சிஜனேஸாக செயல்பட்டு ஆற்றல் விரயத்தை ஏற்படுத்தும் C2 சுழற்சி.'
      }
    ],
    scientificNames: [
      { commonName: 'Sugarcane (C4 Model Plant)', binomialName: 'Saccharum officinarum', significance: 'Exhibits Kranz anatomy and high efficiency C4 photosynthesis' }
    ],
    classifications: [],
    biologicalProcesses: [
      {
        name: 'Non-Cyclic Photophosphorylation Z-Scheme Flow',
        mechanism: 'H2O -> PS-II (P680) -> Pheophytin -> Plastoquinone -> Cyt b6f -> Plastocyanin -> PS-I (P700) -> Ferredoxin -> FNR -> NADPH + H+ (with ATP synthesis via Chemiosmosis).'
      }
    ],
    importantTables: [
      {
        title: 'Comparison of C3 Plants and C4 Plants',
        headers: ['Feature', 'C3 Plants (e.g., Rice, Wheat)', 'C4 Plants (e.g., Maize, Sugarcane)'],
        rows: [
          ['Kranz Anatomy', 'Absent', 'Present (Wreath-like bundle sheath)'],
          ['Primary CO2 Acceptor', 'RuBP (5-Carbon Ribulose bisphosphate)', 'PEP (3-Carbon Phosphoenolpyruvate)'],
          ['First Stable Product', '3-PGA (3-Carbon Phosphoglyceric acid)', 'OAA (4-Carbon Oxaloacetic acid)'],
          ['RuBisCO Localization', 'Mesophyll cells', 'Bundle Sheath cells only'],
          ['Photorespiration Rate', 'High (Wasteful C2 cycle present)', 'Negligible / Absent'],
          ['Optimum Temperature', '20°C - 25°C', '35°C - 45°C (High heat tolerant)'],
          ['ATP needed for 1 Glucose', '18 ATP', '30 ATP']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Calvin C3 Cycle Stages',
        steps: ['Carboxylation (6 RuBP + 6 CO2 via RuBisCO -> 12 3-PGA)', 'Reduction (12 3-PGA + 12 ATP + 12 NADPH -> 12 GAP)', 'Sugar Synthesis (2 GAP exit to form 1 Glucose molecule)', 'Regeneration (10 GAP + 6 ATP -> 6 RuBP regenerated)']
      }
    ],
    summary: 'Photosynthesis converts solar energy into chemical sugars. Light reactions generate ATP and NADPH via the Z-scheme, driving carbon assimilation in the Calvin cycle and C4 Kranz pathways.',
    shortNotes: ['RuBisCO exhibits both Carboxylase and Oxygenase activities.', 'CAM plants (Pineapple, Opuntia) open stomata only at night (Scotoactive stomata) to conserve water.'],
    quickRevisionPoints: ['Oxygen Evolving Complex requires Mn2+, Ca2+, and Cl- ions.', 'Blackmans Law of Limiting Factors was proposed in 1905.'],
    examImportantPoints: ['Explain the Non-cyclic photophosphorylation (Z-Scheme) with diagram (5 Marks).', 'Describe the steps of Calvin C3 Cycle with a schematic diagram (5 Marks).', 'Differentiate C3 and C4 plants (5 Marks).', 'Explain Hatch-Slack C4 pathway and Kranz anatomy (5 Marks).'],
    faqs: [
      {
        question: 'Why are C4 plants photosynthetically more efficient than C3 plants under tropical climates?',
        answer: 'C4 plants possess Kranz anatomy and use PEP Carboxylase, which has no affinity for oxygen. They concentrate CO2 around RuBisCO in bundle sheath cells, completely suppressing photorespiratory loss.',
        markWeight: '3 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Writing that oxygen released in photosynthesis comes from CO2.', correction: 'Van Niel and Ruben-Kamen demonstrated using heavy isotope 18O that oxygen released during photosynthesis comes exclusively from the photolysis of WATER (H2O), not CO2.' }],
    memoryTricks: [{ mnemonic: 'C-R-R for Calvin Cycle', meaning: 'Carboxylation -> Reduction -> Regeneration of RuBP' }],
    fiveKeyTakeaways: [
      'Light reactions split water, generating oxygen, ATP, and NADPH on thylakoids.',
      'Chemiosmotic ATP synthesis is driven by a proton gradient into the thylakoid lumen.',
      'The Calvin cycle requires 18 ATP and 12 NADPH to synthesize one glucose molecule.',
      'C4 plants eliminate wasteful photorespiration using Kranz anatomy.',
      'Photosynthesis rate is determined by the factor in shortest supply (Blackmans Law).'
    ],
    diagrams: [
      {
        id: 'diag-13-1',
        name: 'Z-Scheme of Light Reactions & Calvin C3 Cycle',
        nameTa: 'ஒளி வினைகளின் Z-திட்டம் மற்றும் கால்வின் C3 சுழற்சி வரைபடம்',
        purpose: 'Comprehensive schematic of non-cyclic electron transport and cyclical steps of carbon fixation.',
        purposeTa: 'PS-II மற்றும் PS-I எலக்ட்ரான் கடத்தல் மற்றும் 3 நிலைகள் கொண்ட கால்வின் சுழற்சி.',
        labels: ['PS-II (P680)', 'Oxygen Evolving Complex (2H2O -> O2 + 4H+)', 'Pheophytin', 'Plastoquinone (PQ)', 'Cytochrome b6f Complex', 'Plastocyanin (PC)', 'PS-I (P700)', 'Ferredoxin (Fd)', 'NADP+ Reductase -> NADPH', 'RuBisCO', 'Carboxylation', '3-PGA', 'Reduction', 'Glucose Output', 'Regeneration of RuBP'],
        explanation: 'Two-part diagram illustrating solar electron flow alongside stroma carbon fixation cycle.',
        explanationTa: 'தைலகாய்டில் நிகழும் Z-திட்டமும் ஸ்ட்ரோமாவில் நிகழும் C3 கார்பன் நிலைநிறுத்த சுழற்சியும்.',
        examImportance: 'Extremely High (Highest-weightage 5-mark question in Class 11 Botany).',
        commonQuestions: ['Explain the Z-scheme of light reactions with a schematic diagram.', 'Describe the three phases of Calvin cycle.'],
        aiImagePrompt: 'Scientific textbook schematic showing (A) Non-cyclic photophosphorylation Z-Scheme with PS-II, Cytochrome b6f, and PS-I electron pathways, and (B) Circular Calvin C3 Cycle showing Carboxylation, Reduction, and Regeneration of RuBP with precise stoichiometry.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '5 minutes',
      sceneBreakdown: {
        scene1: 'Photons streaming from the sun striking green leaf canopy, penetrating thylakoid membrane where P680 reaction center glows with excited energy.',
        scene2: 'Oxygen Evolving Complex ripping water molecules apart—bubbling out O2 gas while firing electrons down the Z-scheme bucket brigade.',
        scene3: 'Proton accumulation swelling inside thylakoid lumen; protons rushing through CF0-CF1 turbine head, spinning it at 6,000 RPM to snap phosphate onto ADP, creating ATP.',
        scene4: 'Stroma transformation: RuBisCO enzyme clamping CO2 onto RuBP, molecular assembly reducing PGA into sweet glucose crystals.'
      },
      cameraDirection: 'Dynamic molecular tracking following an individual electron jumping across cytochrome complexes into NADP+ reductase.',
      visualStyle: 'Cinematic 3D animation with photon particle trails, volumetric energy fields, and accurate atomic protein structures.'
    },
    voiceNarration: {
      audioTitle: 'Solar Alchemy: The Mechanics of Photosynthesis',
      audioTitleTa: 'சூரிய ஆற்றலின் ரசவாதம்: ஒளிச்சேர்க்கையின் முழு அறிவியல்',
      scriptEn: 'Photosynthesis is arguably the most important biochemical reaction on planet Earth. When solar photons strike Photosystem II, water molecules are split into hydrogen protons and the oxygen gas that keeps all animal life alive. The liberated electrons cascade down a molecular rollercoaster called the Z-scheme, charging up ATP and NADPH batteries. Then, in the dark Calvin cycle, the enzyme RuBisCO captures carbon dioxide to synthesize glucose. In tropical heat, C4 plants use specialized Kranz anatomy to supercharge this process with zero energy waste. Nature’s ultimate solar power plant!',
      scriptTa: 'பூமியின் அனைத்து உயிரினங்களுக்கும் உணவையும் ஆக்சிஜனையும் வழங்கும் ஒப்பற்ற நிகழ்வு ஒளிச்சேர்க்கை! தைலகாய்டு சவ்வில் சூரிய ஒளி படும்போது நீர் மூலக்கூறுகள் உடைக்கப்பட்டு ஆக்சிஜன் வெளியாகிறது. Z-திட்டம் மூலம் ATP மற்றும் NADPH உருவாக்கப்பட்டு, கால்வின் சுழற்சி மூலம் சர்க்கரையாக மாற்றப்படுகிறது!',
      teacherTone: 'Grand, awe-inspiring, crystal clear, pedagogically masterful.'
    }
  },

  // =========================================================================
  // CHAPTER 14: RESPIRATION (சுவாசம்)
  // =========================================================================
  {
    chapterNumber: 14,
    unitNumber: 5,
    unitName: 'Unit 5: Plant Physiology',
    unitNameTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterName: 'Respiration',
    chapterNameTa: 'சுவாசம்',
    overview: 'Cellular respiration overview, Glycolysis / EMP Pathway (10 steps, net energy yield), Link Reaction (Pyruvate to Acetyl-CoA), Krebs Cycle / TCA Cycle (Mitochondrial matrix), Electron Transport System (ETS - Complexes I, II, III, IV, V) and Oxidative Phosphorylation, Respiratory Quotient (RQ calculation for Carbohydrates, Fats, Proteins, Organic acids), and Anaerobic Fermentation (Alcoholic vs Lactic acid).',
    overviewTa: 'செல் சுவாசம்: கிளைக்காலிசிஸ் (EMP வழித்தடம்), இணைப்பு வினை (அசிட்டைல் CoA உருவாக்கம்), கிரப்ஸ் சுழற்சி (TCA சுழற்சி), எலக்ட்ரான் கடத்து அமைப்பு (ETS) மற்றும் ஆக்ஸிஜனேற்ற பாஸ்போரிகரணம், சுவாச ஈவு (RQ கணக்கீடு) மற்றும் காற்றில்லா சுவாசம் / நொதித்தல் பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Detail 10 enzymatic reactions of Glycolysis in cytoplasm with ATP/NADH balance sheet',
      'Explain Link reaction (Oxidative decarboxylation of Pyruvate by Pyruvate Dehydrogenase)',
      'Master the cyclic reactions of Krebs (TCA) cycle in mitochondrial matrix',
      'Analyze 5 complexes of Electron Transport System and Proton gradient generation across inner mitochondrial membrane',
      'Calculate Respiratory Quotient (RQ) for glucose, fats (Tripalmitin), proteins, and organic acids (Malic acid)'
    ],
    importance: 'Core energy-harvesting pathway yielding ATP for all cellular metabolic work.',
    realLifeApplications: [
      'Industrial brewing and bioethanol fuel production via yeast alcoholic fermentation',
      'Modified atmosphere packaging to suppress crop respiration and prolong vegetable shelf-life'
    ],
    introduction: 'Photosynthesis locked solar energy into glucose bonds; Respiration is the cellular furnace that burns that glucose with precision efficiency to generate universal cellular currency: ATP!',
    coreConcepts: [
      'Glycolysis (EMP Pathway): Universal anaerobic cytoplasmic breakdown of 1 Glucose (6C) into 2 Pyruvate (3C); Net gain = 2 ATP + 2 NADH + H+.',
      'Link Reaction: Pyruvate (3C) + CoA + NAD+ -> Acetyl-CoA (2C) + CO2 + NADH + H+.',
      'Krebs Cycle (TCA Cycle): Mitochondrial matrix cyclic oxidation of Acetyl-CoA yielding 3 NADH, 1 FADH2, 1 GTP/ATP, and 2 CO2 per turn (x2 per glucose).',
      'Electron Transport System (ETS): Inner mitochondrial membrane chain transferring electrons from NADH/FADH2 to Oxygen (final acceptor), pumping protons to synthesize ATP via ATP Synthase.',
      'Total Theoretical Yield: 36 to 38 ATP per glucose oxidized.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Glycolysis (EMP Pathway - 10 Steps)',
        explanation: 'Discovered by Embden, Meyerhof, and Parnas. Preparatory Phase (ATP consumed): Glucose -> Glucose-6-P (Hexokinase, -1 ATP) -> Fructose-6-P -> Fructose-1,6-bisP (Phosphofructokinase, -1 ATP) -> Split into DHAP + GAP. Pay-off Phase (ATP generated): GAP oxidized to 1,3-BPGA (+2 NADH) -> 3-PGA (+2 ATP) -> 2-PGA -> PEP -> Pyruvate (+2 ATP via Pyruvate Kinase). Net Yield: 2 Pyruvate + 2 ATP + 2 NADH + 2 H2O.',
        keyPoints: ['Occurs in Cytoplasm', 'No oxygen required', 'Net gain = 2 ATP + 2 NADH']
      },
      {
        topic: '2. Krebs Cycle / Citric Acid Cycle / TCA Cycle',
        explanation: 'Oxaloacetate (4C) condenses with Acetyl-CoA (2C) via Citrate Synthase to form Citric Acid (6C) -> Isocitrate -> alpha-Ketoglutarate (5C, releases CO2 + NADH) -> Succinyl-CoA (4C, releases CO2 + NADH) -> Succinate (generates 1 GTP/ATP) -> Fumarate (generates 1 FADH2 via Succinate Dehydrogenase) -> Malate -> Oxaloacetate (regenerated, generates NADH).',
        keyPoints: ['Per Acetyl-CoA: 3 NADH + 1 FADH2 + 1 ATP + 2 CO2', 'Per Glucose (2 Acetyl-CoA): 6 NADH + 2 FADH2 + 2 ATP + 4 CO2']
      },
      {
        topic: '3. Electron Transport System & Complexes',
        explanation: 'Complex I: NADH Dehydrogenase (oxidizes NADH, pumps 4 H+). Complex II: Succinate Dehydrogenase (oxidizes FADH2, no protons pumped). Ubiquinone (CoQ) transfers electrons to Complex III (Cytochrome bc1, pumps 4 H+). Cytochrome c shuttles electrons to Complex IV (Cytochrome c Oxidase - Cyt a, a3, 2 Cu centers, pumps 2 H+, reduces 1/2 O2 + 2H+ -> H2O). Complex V: F0-F1 ATP Synthase (Proton motive force drives ATP synthesis: 1 NADH ~ 2.5-3 ATP, 1 FADH2 ~ 1.5-2 ATP).',
        keyPoints: ['Oxygen is the terminal electron acceptor', 'Complex V synthesizes ATP via chemiosmotic rotary mechanism']
      }
    ],
    definitions: [
      {
        term: 'Respiratory Quotient (RQ)',
        termTa: 'சுவாச ஈவு (RQ)',
        definition: 'The ratio of the volume of Carbon Dioxide (CO2) evolved to the volume of Oxygen (O2) consumed during cellular respiration in a given time.',
        definitionTa: 'சுவாசத்தின் போது வெளிவிடப்படும் கார்பன் டை ஆக்சைடு மற்றும் உட்கொள்ளப்படும் ஆக்சிஜன் அளவுகளுக்கு இடையேயான விகிதம்.'
      }
    ],
    scientificNames: [],
    classifications: [],
    biologicalProcesses: [
      {
        name: 'Aerobic Respiration Overall Equation',
        mechanism: 'Complete oxidation of Glucose to CO2 and H2O with release of ATP.',
        formulaOrSteps: 'C6H12O6 + 6 O2 -> 6 CO2 + 6 H2O + 36 to 38 ATP + Heat Energy'
      }
    ],
    importantTables: [
      {
        title: 'Values of Respiratory Quotient (RQ) for Different Substrates',
        headers: ['Respiratory Substrate', 'Chemical Equation / Calculation', 'RQ Value'],
        rows: [
          ['Carbohydrates (Glucose)', '6 CO2 / 6 O2', '1.0 (Unity)'],
          ['Fats (Tripalmitin)', '102 CO2 / 145 O2 (2 C51H98O6 + 145 O2 -> 102 CO2 + 98 H2O)', '0.7 (Less than unity)'],
          ['Proteins', 'Complex oxidation of amino acids', '0.8 to 0.9'],
          ['Organic Acids (Malic Acid)', '4 CO2 / 3 O2 (C4H6O5 + 3 O2 -> 4 CO2 + 3 H2O)', '1.33 (More than unity)'],
          ['Anaerobic Respiration', '2 CO2 / 0 O2', 'Infinity (∞)']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Complete Pathway of Aerobic Respiration',
        steps: ['Cytoplasm: Glucose (6C) -> Glycolysis -> 2 Pyruvate (3C) + 2 ATP + 2 NADH', 'Mitochondrial Matrix: Link Reaction -> 2 Acetyl-CoA (2C) + 2 CO2 + 2 NADH', 'Mitochondrial Matrix: Krebs Cycle -> 4 CO2 + 6 NADH + 2 FADH2 + 2 ATP', 'Inner Membrane: ETS & Oxidative Phosphorylation -> 34 ATP + 6 H2O']
      }
    ],
    summary: 'Respiration releases metabolic energy by systematically dismantling carbohydrates through glycolysis, Krebs cycle, and mitochondrial oxidative phosphorylation.',
    shortNotes: ['Phosphofructokinase (PFK) is the pacemaker / rate-limiting enzyme of Glycolysis.', 'Cyanide poisons cellular respiration by blocking Complex IV (Cytochrome oxidase).'],
    quickRevisionPoints: ['Glycolysis occurs in Cytoplasm; Krebs cycle occurs in Mitochondrial Matrix.', '1 NADH yields ~3 ATP; 1 FADH2 yields ~2 ATP in ETS.'],
    examImportantPoints: ['Describe the 10 steps of Glycolysis (EMP pathway) with schematic flow chart (5 Marks).', 'Describe the cyclic steps of Krebs / TCA cycle (5 Marks).', 'Explain the complexes of Electron Transport System (ETS) with diagram (5 Marks).', 'Define RQ and calculate RQ for Glucose, Tripalmitin, and Malic acid (3 Marks).'],
    faqs: [
      {
        question: 'Why is the respiratory quotient (RQ) of fats less than 1?',
        answer: 'Fats contain less oxygen in their molecular structure compared to carbon and hydrogen. Therefore, a larger amount of oxygen is required for their complete oxidation, making the ratio CO2 evolved / O2 consumed less than 1 (e.g., Tripalmitin RQ = 0.7).',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Writing that Glycolysis requires oxygen.', correction: 'Glycolysis is a completely anaerobic process that occurs in the cytoplasm of all living cells whether oxygen is present or absent.' }],
    memoryTricks: [{ mnemonic: 'C-I-K-S-S-F-M-O for Krebs Cycle', meaning: 'Citrate -> Isocitrate -> alpha-Ketoglutarate -> Succinyl-CoA -> Succinate -> Fumarate -> Malate -> Oxaloacetate' }],
    fiveKeyTakeaways: [
      'Glycolysis splits 1 glucose into 2 pyruvates in the cytoplasm, generating net 2 ATP and 2 NADH.',
      'The link reaction oxidatively decarboxylates pyruvate into Acetyl-CoA.',
      'Krebs cycle in the mitochondrial matrix yields 6 NADH, 2 FADH2, and 2 ATP per glucose.',
      'ETS complexes on the cristae pass electrons to oxygen, powering ATP synthase.',
      'RQ values reflect the chemical oxidation state of the respiratory substrate.'
    ],
    diagrams: [
      {
        id: 'diag-14-1',
        name: 'Krebs Cycle (TCA Cycle) & Mitochondrial ETS Complexes',
        nameTa: 'கிரப்ஸ் சுழற்சி (TCA) மற்றும் மைட்டோகாண்ட்ரியா ETS வரைபடம்',
        purpose: 'Visualizes the circular TCA oxidation pathway and the 5 complexes across inner mitochondrial membrane.',
        purposeTa: 'கிரப்ஸ் சுழற்சி மற்றும் மைட்டோகாண்ட்ரியா எலக்ட்ரான் கடத்து அமைப்பின் 5 காம்ப்ளக்ஸ்கள்.',
        labels: ['Acetyl-CoA (2C)', 'Citrate (6C)', 'alpha-Ketoglutarate (5C)', 'Succinate (4C)', 'Oxaloacetate (4C)', 'Complex I (NADH DH)', 'Complex II (Succinate DH)', 'Complex III (Cyt bc1)', 'Complex IV (Cyt c Oxidase)', 'Complex V (ATP Synthase / F0-F1)', 'Proton Gradient (H+)', 'O2 + 4H+ -> 2 H2O'],
        explanation: 'Schematic illustrating Krebs cycle in the matrix feeding high-energy electrons into the ETS membrane complexes.',
        explanationTa: 'மைட்டோகாண்ட்ரியா மேட்ரிக்ஸில் நிகழும் கிரப்ஸ் சுழற்சியும் உட்சவ்வில் நிகழும் ஆக்ஸிஜனேற்ற பாஸ்போரிகரணமும்.',
        examImportance: 'Very High (Standard 5-mark examination question).',
        commonQuestions: ['Draw the schematic representation of Krebs Cycle.', 'Illustrate the mitochondrial Electron Transport System.'],
        aiImagePrompt: 'High-detail scientific textbook diagram showing (A) Krebs / Citric Acid Cycle with labeled intermediates and CO2/NADH/FADH2 release points, and (B) Inner mitochondrial membrane showing ETS Complexes I, II, III, IV, and rotating Complex V ATP Synthase.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Flight through the outer mitochondrial membrane into the dense matrix where Pyruvate molecules are converted to glowing Acetyl-CoA.',
        scene2: 'Krebs cycle wheel spinning in matrix space, peeling off glowing blue NADH and yellow FADH2 electron carriers while venting CO2 bubbles.',
        scene3: 'Inner mitochondrial membrane cross-section: Complex I, III, and IV aggressively pumping protons into the intermembrane reservoir.',
        scene4: 'Protons flooding through the rotor of Complex V (F0-F1 ATP Synthase), spinning the catalytic head to pop out freshly minted ATP energy coins.'
      },
      cameraDirection: 'Sub-cellular dynamic flight across the folded mitochondrial cristae membrane with 360-degree rotation.',
      visualStyle: 'Photorealistic mitochondrial interior with glowing redox electron arcs, energetic proton streams, and mechanical enzyme turbines.'
    },
    voiceNarration: {
      audioTitle: 'The Cellular Powerhouse: Glycolysis, Krebs Cycle & ATP Synthase',
      audioTitleTa: 'செல்லின் மின் நிலையம்: கிளைக்காலிசிஸ், கிரப்ஸ் சுழற்சி மற்றும் ATP உருவாக்கம்',
      scriptEn: 'Respiration is the ultimate cellular furnace! It begins in the cytoplasm with Glycolysis, splitting glucose into two pyruvate molecules. Inside the mitochondrial matrix, the Krebs cycle turns continuously, harvesting high-energy electrons and loading them onto NADH and FADH2 transport trucks. These electrons are delivered to the Electron Transport Chain on the inner cristae membrane, pumping a massive reservoir of protons into the intermembrane space. When these protons rush back through ATP Synthase, this molecular motor spins at thousands of revolutions per minute, producing thirty-six to thirty-eight ATP molecules per glucose! Cellular power in full throttle!',
      scriptTa: 'சுவாசம் என்பது குளுக்கோஸை எரித்து ATP ஆற்றலை உருவாக்கும் செல்லின் அனல் மின் நிலையம்! சைட்டோபிளாசத்தில் தொடங்கும் கிளைக்காலிசிஸ், மைட்டோகாண்ட்ரியாவில் கிரப்ஸ் சுழற்சி மற்றும் எலக்ட்ரான் கடத்து அமைப்பு மூலம் 36 முதல் 38 ATP ஆற்றல் மூலக்கூறுகளை உற்பத்தி செய்கிறது!',
      teacherTone: 'High-energy, educational, authoritative, vivid.'
    }
  },

  // =========================================================================
  // CHAPTER 15: PLANT GROWTH AND DEVELOPMENT (தாவர வளர்ச்சியும் படிமலர்ச்சியும்)
  // =========================================================================
  {
    chapterNumber: 15,
    unitNumber: 5,
    unitName: 'Unit 5: Plant Physiology',
    unitNameTa: 'அலகு 5: தாவர உடலியங்கியல்',
    chapterName: 'Plant Growth and Development',
    chapterNameTa: 'தாவர வளர்ச்சியும் படிமலர்ச்சியும்',
    overview: 'Characteristics of plant growth (Meristematic, Elongation, Maturation phases, Sigmoid growth curve), Plant Growth Regulators / Phytohormones: Auxins (Apical dominance, rooting), Gibberellins (Bolting, seed germination), Cytokinins (Cell division, Richmond-Lang effect delay of senescence), Ethylene (Fruit ripening, triple response), Abscisic Acid / ABA (Stress hormone, stomatal closure, dormancy), Photoperiodism (Short Day, Long Day, Day Neutral Plants, Phytochrome P_r & P_fr), Vernalization (Chilling requirement, Devernalization), and Seed Dormancy breaking methods.',
    overviewTa: 'தாவர வளர்ச்சியின் பண்புகள், சிக்மாய்டு வளர்ச்சி வளைகோடு, தாவர வளர்ச்சி ஒழுங்குபடுத்திகள் / ஹார்மோன்கள்: ஆக்சின்கள், ஜிப்ரல்லின்கள், சைட்டோகைனின்கள், எத்திலீன், அப்சிசிக் அமிலம் (ABA), ஒளிக்காலத்துவம் (குறுகிய பகல், நீண்ட பகல் தாவரங்கள், ஃபைட்டோகுரோம்), வசந்தமாக்கல் (வெர்னலைசேஷன்) மற்றும் விதை உறக்கம் பற்றிய முழுமையான பாடம்.',
    learningObjectives: [
      'Analyze 3 phases of growth and the Sigmoid Growth Curve (Lag, Log/Exponential, Stationary phases)',
      'Explain physiological roles and agricultural applications of all 5 Phytohormones: Auxin, Gibberellin, Cytokinin, Ethylene, and ABA',
      'Understand Photoperiodism and Phytochrome pigment interconversions (Pr <-> Pfr)',
      'Explain Vernalization (Lysenko chilling induction of flowering via Vernalin hypothesis)',
      'Evaluate mechanisms and methods of breaking Seed Dormancy (Scarification, Stratification)'
    ],
    importance: 'Culminating chapter connecting biochemical regulation with horticultural and agricultural crop management.',
    realLifeApplications: [
      'Commercial application of Ethylene (Ethephon) for uniform artificial fruit ripening in bananas and mangoes',
      'Gibberellin spray in sugarcane farming to increase stem length and sugar yield by 20 tons per acre'
    ],
    introduction: 'How does a plant know when to sprout, when to stretch toward the light, when to flower in spring, and when to drop its autumn leaves? Plants orchestrate every stage of their lives using chemical messengers called phytohormones and light sensors called phytochromes!',
    coreConcepts: [
      'Phases of Growth: Meristematic (Cell division) -> Elongation (Vacuolation) -> Maturation (Differentiation).',
      'Sigmoid Growth Curve: S-shaped curve showing Lag phase (slow initial growth), Log / Exponential phase (rapid maximum growth), and Stationary phase (growth plateau).',
      'Growth Promoters: Auxins (IAA), Gibberellins (GA3), Cytokinins (Zeatin/Kinetin).',
      'Growth Inhibitors: Ethylene (Gaseous ripening hormone), Abscisic Acid (ABA - Stress hormone).',
      'Photoperiodism: Response of plants to relative lengths of day and night; mediated by Phytochrome (Pr absorbs red light 660 nm; Pfr absorbs far-red light 730 nm).',
      'Vernalization: Low-temperature chilling treatment (0°C to 5°C) that promotes flowering in biennials (Cabbage, Beetroot, Carrot).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Physiological Effects of Plant Growth Regulators',
        explanation: 'Auxin: Promotes apical dominance, induces root initiation in stem cuttings, prevents premature fruit/leaf drop, weedicide (2,4-D). Gibberellins: Induces Bolting (internodal elongation in rosette plants like Cabbage), overcomes genetic dwarfism in maize/peas, triggers alpha-amylase synthesis in barley endosperm for seed germination. Cytokinins: Promotes cell division, delays leaf senescence (Richmond-Lang effect), breaks apical dominance by promoting lateral bud growth. Ethylene: Promotes fruit ripening (Climacteric fruits), enhances female flowers in cucumber, promotes abscission. ABA (Stress Hormone): Induces rapid stomatal closure under water stress, induces bud/seed dormancy, promotes leaf senescence.',
        keyPoints: ['Auxin: Apical Dominance', 'Gibberellin: Bolting & Seed Germination', 'Cytokinin: Delays Senescence', 'Ethylene: Fruit Ripening', 'ABA: Stress & Stomatal Closure']
      },
      {
        topic: '2. Photoperiodism & Phytochrome Action',
        explanation: 'Garner and Allard classified plants into: (1) Short Day Plants (SDP / Long Night Plants): Flower when day length is less than critical photoperiod (e.g., Tobacco, Chrysanthemum); (2) Long Day Plants (LDP / Short Night Plants): Flower when day length exceeds critical photoperiod (e.g., Spinach, Wheat); (3) Day Neutral Plants (DNP): Flowering is independent of photoperiod (e.g., Tomato, Sunflower). Phytochrome exists in two photoreversible forms: Pr (Inactive, blue-green, absorbs Red 660 nm -> converts to Pfr) and Pfr (Active, absorbs Far-Red 730 nm -> converts back to Pr).',
        keyPoints: ['SDP: Need uninterrupted dark period', 'Pfr is the biologically active form inducing flowering in LDP']
      },
      {
        topic: '3. Vernalization (Chilling Requirement for Flowering)',
        explanation: 'Termed by T.D. Lysenko (1928). Exposure of imbibed seeds or seedlings to low temperature (0°C - 5°C) for several weeks induces or accelerates flowering. The hypothetical flowering stimulus synthesized in shoot apices is called Vernalin. Vernalization prevents premature reproductive development in late autumn, allowing plants to flower during favorable spring/summer conditions. Devernalization occurs if chilled plants are immediately exposed to high temperatures.',
        keyPoints: ['Chilling stimulus perceived by Shoot Apical Meristem', 'Converts winter annuals/biennials into spring varieties']
      }
    ],
    definitions: [
      {
        term: 'Apical Dominance',
        termTa: 'நுனி ஆதிக்கம் (ஏபிக்கல் டாமினன்ஸ்)',
        definition: 'The physiological phenomenon whereby the growing apical terminal bud suppresses the growth and elongation of nearby lateral axillary buds via Auxin secretion.',
        definitionTa: 'தாவரத்தின் நுனி மொட்டிலிருந்து சுரக்கும் ஆக்சின் பக்கவாட்டு மொட்டுகளின் வளர்ச்சியைத் தடுக்கும் நிகழ்வு.'
      },
      {
        term: 'Richmond-Lang Effect',
        termTa: 'ரிச்மண்ட்-லாங் விளைவு',
        definition: 'The postponement and delay of leaf senescence and chlorophyll degradation by the application of Cytokinins.',
        definitionTa: 'சைட்டோகைனின் ஹார்மோனைப் பயன்படுத்துவதன் மூலம் இலைகளில் மூப்படைதலைத் தள்ளிப்போடும் நிகழ்வு.'
      },
      {
        term: 'Bolting',
        termTa: 'நீட்சியடைதல் (போல்டிங்)',
        definition: 'The sudden, rapid internodal elongation of stems just prior to flowering in rosette plants (e.g., Cabbage, Beetroot) induced by Gibberellin treatment.',
        definitionTa: 'ரோஸட் தாவரங்களில் மலர் தோன்றுவதற்கு முன் தண்டு திடீரென அதிக நீட்சியடையும் நிகழ்வு.'
      }
    ],
    scientificNames: [],
    classifications: [],
    biologicalProcesses: [
      {
        name: 'Phytochrome Photoreversible Conversion',
        mechanism: 'P_r (Red absorbing, 660 nm, Inactive) ---[Red Light]---> P_fr (Far-Red absorbing, 730 nm, Active form triggering flowering/germination) ---[Far-Red Light / Darkness]---> P_r.',
        formulaOrSteps: 'Pr (660 nm) <=======> Pfr (730 nm)'
      }
    ],
    importantTables: [
      {
        title: 'Summary of Phytohormones and Their Major Agricultural Uses',
        headers: ['Hormone', 'Natural Form', 'Primary Site of Synthesis', 'Major Agricultural Applications'],
        rows: [
          ['Auxin', 'IAA (Indole-3-acetic acid)', 'Shoot apices, young leaves', 'Rooting of stem cuttings (IBA, NAA), 2,4-D selective dicot weedicide'],
          ['Gibberellin', 'GA3 (Gibberellic acid)', 'Developing seeds, young shoots', 'Increasing stalk length in grapes and sugarcane, brewing malt production'],
          ['Cytokinin', 'Zeatin, Kinetin', 'Root apices, dividing tissues', 'Tissue culture shoot organogenesis, prolonging green shelf-life of vegetables'],
          ['Ethylene', 'Gas (C2H4)', 'Ripening fruits, senescent tissues', 'Commercial degreening and uniform ripening of bananas/citrus (Ethephon)'],
          ['Abscisic Acid (ABA)', 'Terpenoid compound', 'Leaves under stress, chloroplasts', 'Antitranspirant spray, inducing seed dormancy for seed storage banks']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Sigmoid Growth Curve Phases',
        steps: ['Lag Phase (Initial slow growth during cellular adaptation)', 'Log / Exponential Phase (Rapid maximum cell division & elongation)', 'Stationary / Diminishing Phase (Nutrient limitation, steady state maturity)']
      }
    ],
    summary: 'Plant growth and development are harmoniously orchestrated by intrinsic genetic programs, hormonal regulators (Auxin, GA, Cytokinin, Ethylene, ABA), and environmental cues such as Photoperiodism and Vernalization.',
    shortNotes: ['Auxin transport is strictly polar (basipetal from apex).', 'Ethylene is the only natural gaseous phytohormone.', 'ABA is called the universal plant stress hormone.'],
    quickRevisionPoints: ['Richmond-Lang effect = Cytokinin delaying leaf senescence.', 'Pr absorbs 660 nm; Pfr absorbs 730 nm light.'],
    examImportantPoints: ['Tabulate the physiological effects and agricultural applications of Auxins and Gibberellins (5 Marks).', 'Describe the Sigmoid Growth Curve with a neat labeled graph (5 Marks).', 'Explain Photoperiodism, Short Day vs Long Day plants, and Phytochrome action (5 Marks).', 'What is Vernalization? Explain its agricultural significance (3 Marks).'],
    faqs: [
      {
        question: 'Why is Abscisic Acid (ABA) known as the stress hormone in plants?',
        answer: 'During environmental stresses such as drought or water deficit, ABA concentrations in leaves skyrocket, triggering rapid K+ efflux and closure of stomata to prevent transpirational water loss and ensuring plant survival.',
        markWeight: '2 Marks'
      },
      {
        question: 'What is Bolting and how can it be chemically induced?',
        answer: 'Bolting is the rapid elongation of stem internodes in rosette plants just prior to flowering. It can be artificially induced under non-inductive conditions by spraying Gibberellin (GA3).',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Confusing Short Day Plants with plants requiring short nights.', correction: 'Short Day Plants actually require a continuous LONG NIGHT (uninterrupted darkness exceeding critical dark period) to flower; a brief flash of red light during the night completely inhibits flowering.' }],
    memoryTricks: [{ mnemonic: 'A-G-C-E-A Phytohormones', meaning: 'Auxin (Apex) | Gibberellin (Grow stem) | Cytokinin (Cell division) | Ethylene (Eat fruit) | ABA (Anti-stress)' }],
    fiveKeyTakeaways: [
      'Plant growth follows a classic S-shaped Sigmoid Curve (Lag, Log, Stationary).',
      'Auxins control apical dominance, while Cytokinins promote lateral bud branching.',
      'Gibberellins trigger stem bolting and hydrolytic seed germination.',
      'Ethylene is the master fruit-ripening gas; ABA protects against environmental stress.',
      'Photoperiodism and Vernalization synchronize flowering with seasonal rhythms.'
    ],
    diagrams: [
      {
        id: 'diag-15-1',
        name: 'Sigmoid Growth Curve & Phytochrome Photoreversible Cycle',
        nameTa: 'சிக்மாய்டு வளர்ச்சி வளைகோடு மற்றும் ஃபைட்டோகுரோம் சுழற்சி',
        purpose: 'Combines geometric growth curve with the red/far-red phytochrome light switch.',
        purposeTa: 'தாவர வளர்ச்சி வளைகோடு (லேக், லாக், நிலையான கட்டம்) மற்றும் ஃபைட்டோகுரோம் ஒளி ஏற்பி சுழற்சி.',
        labels: ['Growth / Size (Y-Axis)', 'Time (X-Axis)', 'Lag Phase (Slow)', 'Log / Exponential Phase (Rapid Growth)', 'Stationary Phase (Maturity Plateau)', 'Pr (Red 660 nm - Inactive)', 'Pfr (Far-Red 730 nm - Active Flowering Stimulus)'],
        explanation: 'Graph showing S-curve along with the reversible Pr <-> Pfr photochemical reaction.',
        explanationTa: 'S-வடிவ வளர்ச்சி வரைபடமும், சிவப்பு/அகச்சிவப்பு ஒளியில் ஃபைட்டோகுரோம் மாறும் நிலையும்.',
        examImportance: 'High (Core 3-mark & 5-mark question in Unit 5).',
        commonQuestions: ['Draw and explain the Sigmoid Growth Curve.', 'Illustrate the photoreversibility of Phytochrome.'],
        aiImagePrompt: 'Scientific educational diagram showing (A) Sigmoid growth curve graph with Lag, Log, and Stationary phases clearly indicated, and (B) Phytochrome cycle showing Pr (660nm) converting to active Pfr (730nm) with red and far-red light rays.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Time-lapse of a cabbage seedling: Auxin flowing down from shoot apex, preventing side buds from sprouting until tip is pruned away.',
        scene2: 'Gibberellin spray landing on dwarf rosette plant: stem internodes stretching into a tall flowering stalk in dramatic fast-forward bolting.',
        scene3: 'Dry drought simulation: Roots sensing dry soil, blasting ABA messenger waves to leaves, snapping guard cells shut in seconds to lock in water.',
        scene4: 'Phytochrome light dance: Red sunlight photons converting blue-green Pr into glowing active Pfr molecules, marching into the nucleus to activate the florigen flowering gene.'
      },
      cameraDirection: 'Dynamic orbital time-lapse capturing rapid shoot stretching and molecular hormone docking.',
      visualStyle: 'Vibrant time-lapse 3D animation with luminous hormonal signaling trails, plant growth curves, and botanical realism.'
    },
    voiceNarration: {
      audioTitle: 'The Plant Conductors: Hormones, Light & Seasonal Rhythms',
      audioTitleTa: 'தாவரங்களின் வளர்ச்சி வழிகாட்டிகள்: ஹார்மோன்கள் மற்றும் பருவ கால சுழற்சிகள்',
      scriptEn: 'How does a plant orchestrate its life without a brain or nervous system? Through an elegant symphony of chemical hormones and light sensors! Auxins act as navigators steering shoots toward sunlight and maintaining apical dominance. Gibberellins command dwarf stems to bolt skyward, while Cytokinins delay aging to keep leaves green and youthful. When drought threatens, Abscisic acid slams stomata shut like emergency blast doors. And high up in the leaves, Phytochromes measure day length down to the minute, ensuring flowers bloom at the exact seasonal moment. You have now completed the entire journey of Class 11 Botany!',
      scriptTa: 'மூளையோ நரம்பு மண்டலமோ இல்லாத தாவரங்கள் எவ்வாறு பருவ காலங்களை உணர்ந்து வளர்கின்றன? ஆக்சின், ஜிப்ரல்லின், சைட்டோகைனின், எத்திலீன் மற்றும் அப்சிசிக் அமிலம் ஆகிய ஹார்மோன்களும் ஃபைட்டோகுரோம் ஒளி ஏற்பிகளும் தாவர வாழ்க்கையை வழிநடத்துகின்றன. 11ஆம் வகுப்பு தாவரவியலின் 15 பாடங்களையும் முழுமையாக கற்றுத் தேர்ந்த உங்களுக்கு எமது பாராட்டுகள்!',
      teacherTone: 'Grand, inspiring, celebratory, authoritative high school Biology mentor.'
    }
  }
];
