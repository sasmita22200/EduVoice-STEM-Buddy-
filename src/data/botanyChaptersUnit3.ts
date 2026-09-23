import { BotanyChapter } from './class11BotanyCurriculum';

export const BOTANY_CHAPTERS_UNIT_3: BotanyChapter[] = [
  // =========================================================================
  // CHAPTER 6: CELL: THE UNIT OF LIFE (செல்: வாழ்வின் அலகு)
  // =========================================================================
  {
    chapterNumber: 6,
    unitNumber: 3,
    unitName: 'Unit 3: Cell Biology and Biomolecules',
    unitNameTa: 'அலகு 3: செல் உயிரியல் மற்றும் உயிர் மூலக்கூறுகள்',
    chapterName: 'Cell: The Unit of Life',
    chapterNameTa: 'செல்: வாழ்வின் அலகு',
    overview: 'Cell theory, microscopy, ultra-structure of plant prokaryotic vs eukaryotic cell, Fluid Mosaic Model of plasma membrane, endomembrane system (ER, Golgi, Lysosomes, Vacuoles), semiautonomous organelles (Mitochondria & Chloroplast), Ribosomes (70S vs 80S), and Nucleus architecture.',
    overviewTa: 'செல் கொள்கை, புரோகேரியோட் மற்றும் யூகேரியோட் செல் நுண்ணமைப்பு, பிளாஸ்மா சவ்வின் திரவ மொசைக் மாதிரி, எண்டோசவ்வு அமைப்பு, மைட்டோகாண்ட்ரியா, பசுங்கணிகம் மற்றும் உட்கரு அமைப்பு பற்றிய பாடம்.',
    learningObjectives: [
      'Understand Modern Cell Theory (Schleiden, Schwann, and Rudolf Virchow: Omnis cellula-e-cellula)',
      'Explain Singer & Nicolson Fluid Mosaic Model of cell membrane',
      'Analyze the endomembrane coordination (Rough/Smooth ER -> Golgi Apparatus -> Vacuoles/Lysosomes)',
      'Compare 70S vs 80S ribosomes and understand endosymbiotic origin of Mitochondria and Chloroplasts'
    ],
    importance: 'Fundamental cornerstone of all cell biology and biotechnology.',
    realLifeApplications: [
      'Targeted drug delivery using liposomes engineered from phospholipid bilayers',
      'Crop biotechnology engineering chloroplast genomes (Transplastomics) for herbicide resistance'
    ],
    introduction: 'Every mighty teak tree and every microscopic diatom starts as a single microscopic cell. The cell is not merely a bag of chemicals—it is an automated biochemical metropolis with power stations (Mitochondria), solar energy converters (Chloroplasts), postal packaging hubs (Golgi), and a genetic central command (Nucleus)!',
    coreConcepts: [
      'Cell Theory: All living organisms are composed of cells; cells arise from pre-existing cells (Virchow).',
      'Plasma Membrane: Phospholipid bilayer with integral and peripheral proteins (Fluid Mosaic Model, Singer & Nicolson 1972).',
      'Endomembrane System: Interconnected functional network of Endoplasmic Reticulum, Golgi Body, Lysosomes, and Vacuoles.',
      'Semiautonomous Organelles: Mitochondria and Plastids possessing own circular DNA and 70S ribosomes (Endosymbiotic hypothesis).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Fluid Mosaic Model of Plasma Membrane',
        explanation: 'Proposed by S.J. Singer and G.L. Nicolson (1972). The membrane is a quasi-fluid dynamic bilayer of amphipathic phospholipids where hydrophilic polar heads face outward and hydrophobic fatty acid tails face inward. Protein icebergs float in a sea of lipids (Integral intrinsic proteins penetrate deeply; peripheral extrinsic proteins lie on surfaces).',
        keyPoints: ['Lipid bilayer provides fluid matrix', 'Proteins act as ion channels, pumps, and receptors', 'Carbohydrates attached form glycoproteins/glycolipids for cell recognition']
      },
      {
        topic: '2. Structure of Chloroplast & Mitochondria',
        explanation: 'Chloroplasts have double membranes enclosing the stroma ground substance, thylakoid discs stacked into grana containing chlorophyll pigments, and stroma lamellae. Mitochondria feature outer membrane and highly folded inner membrane forming cristae embedded with F0-F1 ATP synthase oxysomes.',
        keyPoints: ['Chloroplast: Grana for Light Reactions, Stroma for Dark/Calvin cycle', 'Mitochondria: Cristae increase surface area for electron transport chain (ETS)']
      }
    ],
    definitions: [
      {
        term: 'Fluid Mosaic Model',
        termTa: 'திரவ மொசைக் மாதிரி',
        definition: 'The universally accepted model describing biological membranes as a fluid phospholipid bilayer embedded with mobile protein mosaics.',
        definitionTa: 'பாஸ்போலிப்பிட் திரவ அடுக்கில் புரதங்கள் மொசைக் போல பதிந்துள்ள செல் சவ்வு மாதிரி.'
      },
      {
        term: 'Plasmodesmata',
        termTa: 'பிளாஸ்மோடெஸ்மேட்டா',
        definition: 'Microscopic cytoplasmic strands traversing plant cell walls to connect adjacent protoplasts for intercellular transport.',
        definitionTa: 'தாவர செல் சுவர்களில் அருகருகே உள்ள செல்களின் சைட்டோபிளாசத்தை இணைக்கும் நுண்ணிய பாலங்கள்.'
      }
    ],
    scientificNames: [],
    classifications: [
      {
        title: 'Types of Plastids (Based on Pigments and Storage)',
        criteria: 'Pigment composition and physiological storage.',
        hierarchy: ['Leucoplasts (Colorless storage: Amyloplast - starch, Elaioplast - oil, Aleuroplast - protein)', 'Chromoplasts (Colored: Carotenoid / Xanthophyll red/yellow)', 'Chloroplasts (Photosynthetic: Chlorophyll a, b)']
      }
    ],
    biologicalProcesses: [
      {
        name: 'Endomembrane Protein Secretion Pipeline',
        mechanism: 'Ribosomes synthesize polypeptide on Rough ER -> transport vesicle buds off -> fuses with cis-face of Golgi body -> protein undergoes glycosylation -> packaging -> emerges from trans-face -> targets plasma membrane or vacuole.'
      }
    ],
    importantTables: [
      {
        title: 'Differences between Prokaryotic and Eukaryotic Cells',
        headers: ['Feature', 'Prokaryotic Cell', 'Eukaryotic Cell'],
        rows: [
          ['Nuclear Membrane', 'Absent (Incipient Nucleoid)', 'Present (True Double-membraned Nucleus)'],
          ['Membrane-bound Organelles', 'Absent (No ER, Golgi, Mitochondria)', 'Present (Mitochondria, Plastids, ER, Golgi)'],
          ['Ribosomes', '70S (50S + 30S subunits)', '80S in Cytoplasm (60S + 40S), 70S in Organelles'],
          ['DNA Structure', 'Circular, naked (no histones)', 'Linear DNA complexed with histone proteins']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Classification of Chromosomes based on Centromere Position',
        steps: ['Metacentric (V-shaped, median centromere, equal arms)', 'Sub-metacentric (L-shaped, sub-median centromere, unequal arms)', 'Acrocentric (J-shaped, sub-terminal centromere, very short arm)', 'Telocentric (i-shaped, terminal centromere, single arm)']
      }
    ],
    summary: 'The cell is the basic structural and functional unit of life. Plant cells are distinguished by cellulose walls, large central sap vacuoles, and chloroplast plastids.',
    shortNotes: ['Ribosomes are non-membrane bound protein factories discovered by George Palade.', 'Cristae in mitochondria contain F0-F1 elementary particles (ATP Synthase).'],
    quickRevisionPoints: ['Singer & Nicolson (1972) proposed Fluid Mosaic Model.', 'Middle lamella is composed of Calcium and Magnesium pectate.'],
    examImportantPoints: ['Draw and describe the Fluid Mosaic Model of plasma membrane (5 Marks).', 'Describe the ultrastructure of a Chloroplast with a neat labeled diagram (5 Marks).'],
    faqs: [
      {
        question: 'Why are Mitochondria and Chloroplasts called semiautonomous organelles?',
        answer: 'They contain their own circular double-stranded DNA, 70S ribosomes, and RNA, enabling them to synthesize some of their own proteins and replicate autonomously by fission.',
        markWeight: '3 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Writing that plant cells contain lysosomes identical to animal cells.', correction: 'In plant cells, the large central vacuole performs major lytic and storage functions similar to lysosomes.' }],
    memoryTricks: [{ mnemonic: 'M-S-A-T Chromosome Shapes', meaning: 'Metacentric: V | Sub-metacentric: L | Acrocentric: J | Telocentric: i' }],
    fiveKeyTakeaways: [
      'Omnis cellula-e-cellula: All living cells arise exclusively from pre-existing cells.',
      'Membranes are dynamic, fluid lipid bilayers allowing selective permeation.',
      'The endomembrane system is a coordinated cellular manufacturing and sorting conveyor.',
      'Chloroplasts and Mitochondria are ancient bacterial endosymbionts.',
      'Chromosomes are classified into Metacentric, Submetacentric, Acrocentric, and Telocentric.'
    ],
    diagrams: [
      {
        id: 'diag-6-1',
        name: 'Fluid Mosaic Model of Plasma Membrane',
        nameTa: 'பிளாஸ்மா சவ்வின் திரவ மொசைக் மாதிரி',
        purpose: 'Visualizes phospholipid bilayer, integral proteins, peripheral proteins, glycoproteins, and cholesterol.',
        purposeTa: 'பாஸ்போலிப்பிட் அடுக்கு, உட்பொதிந்த புரதங்கள் மற்றும் சர்க்கரை சங்கிலிகளை விளக்கும் படம்.',
        labels: ['Hydrophilic Polar Head', 'Hydrophobic Fatty Acid Tail', 'Integral / Intrinsic Protein', 'Peripheral / Extrinsic Protein', 'Glycoprotein & Glycolipid', 'Protein Channel'],
        explanation: 'Illustrates lipid bilayer fluid state where proteins float like mosaic tiles.',
        explanationTa: 'திரவ நிலையில் உள்ள பாஸ்போலிப்பிட் அடுக்கில் புரதங்கள் இயங்கும் தன்மை.',
        examImportance: 'Very High (Core 5-mark question in Unit 3).',
        commonQuestions: ['Draw the Fluid Mosaic Model of cell membrane and explain its key components.'],
        aiImagePrompt: 'High-detail 3D textbook diagram of Singer and Nicolson Fluid Mosaic Model of plasma membrane, showing phospholipid bilayer with blue hydrophilic heads, yellow fatty acid tails, purple integral protein channels, green carbohydrate antennas.'
      },
      {
        id: 'diag-6-2',
        name: 'Ultrastructure of Chloroplast',
        nameTa: 'பசுங்கணிகத்தின் நுண்ணமைப்பு',
        purpose: 'Shows outer/inner membranes, stroma, thylakoid grana, stroma lamellae, and circular DNA.',
        purposeTa: 'பசுங்கணிகத்தின் இரட்டைச் சவ்வு, தைலகாய்டு கிரானா, ஸ்ட்ரோமா மற்றும் வட்ட வடிவ DNA அமைப்பு.',
        labels: ['Outer Membrane', 'Intermembrane Space', 'Inner Membrane', 'Stroma Matrix', 'Thylakoid Disc', 'Granum (Stack)', 'Stroma Lamella / Fret', 'Chloroplast Circular DNA & 70S Ribosomes'],
        explanation: 'Thylakoids are organized in coin-like stacks called grana linked by stroma lamellae in the stroma.',
        explanationTa: 'நாணயக் குவியல் போன்ற கிரானா தைலகாய்டுகளும் ஸ்ட்ரோமா லேமெல்லாக்களும் தெளிவாக உள்ளன.',
        examImportance: 'Very High (Repeatedly tested diagram in Biology Botany exams).',
        commonQuestions: ['Draw and label the ultrastructure of a Chloroplast.', 'Differentiate Grana and Stroma functions.'],
        aiImagePrompt: 'Cross-section 3D scientific rendering of a plant Chloroplast showing outer/inner membrane, green coin-like thylakoid grana stacks, connecting stroma thylakoids, stroma matrix, floating circular cpDNA and 70S ribosomes.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Smooth camera dive through leaf stomata entering a mesophyll cell, penetrating the cellulose cell wall to reach the pulsing plasma membrane.',
        scene2: 'Fluid mosaic dynamic simulation: phospholipids flexing in fluid waves while integral protein channels selectively shuttle potassium and water aquaporin channels.',
        scene3: 'Flight through the endomembrane pipeline: Ribosomes assembling protein chains on Rough ER, transport vesicles budding and docking to Golgi cis-cisternae.',
        scene4: 'Inside Chloroplast: sunlight hitting thylakoid membranes, proton gradients building across lumen, and ATP synthases spinning like molecular turbines.'
      },
      cameraDirection: 'Continuous microscopic zoom entering the interior of an individual plant cell organelle.',
      visualStyle: 'Photorealistic cellular interior with luminous bioluminescent glows, volumetric lighting, and clear scientific typography.'
    },
    voiceNarration: {
      audioTitle: 'Inside the Living Nanocity: The Architecture of the Cell',
      audioTitleTa: 'செல்லுக்குள் ஒரு பயணம்: வாழ்வின் அடிப்படை அலகு',
      scriptEn: 'Welcome inside the cell—nature’s most sophisticated metropolis! Look around: the boundary is not a rigid brick wall, but a fluid mosaic sea of phospholipids where protein gateways float gracefully. Over there, the Endoplasmic Reticulum works with the Golgi complex to package biochemicals, while chloroplasts capture solar photons within emerald thylakoid stacks. Mitochondria and chloroplasts even carry their own ancient circular DNA, reminding us of their billion-year-old bacterial origins. Master this cellular city, and you master life itself!',
      scriptTa: 'செல்லுக்குள் ஒரு அதிசய உலகம் இயங்குகிறது! பிளாஸ்மா சவ்வு என்பது பாஸ்போலிப்பிட் கடலில் மிதக்கும் புரத பனிப்பாறைகள் போன்றது. பசுங்கணிகத்தின் தைலகாய்டு தட்டுகள் சூரிய ஒளியை ஆற்றலாக மாற்றுகின்றன. மைட்டோகாண்ட்ரியா மற்றும் பசுங்கணிகங்கள் தமக்கென சொந்த DNA கொண்ட தன்னாட்சி நுண்ணுறுப்புகளாகும்!',
      teacherTone: 'Awe-inspiring, clear, authoritative, engaging.'
    }
  },

  // =========================================================================
  // CHAPTER 7: CELL CYCLE (செல் சுழற்சி)
  // =========================================================================
  {
    chapterNumber: 7,
    unitNumber: 3,
    unitName: 'Unit 3: Cell Biology and Biomolecules',
    unitNameTa: 'அலகு 3: செல் உயிரியல் மற்றும் உயிர் மூலக்கூறுகள்',
    chapterName: 'Cell Cycle',
    chapterNameTa: 'செல் சுழற்சி',
    overview: 'Phases of Cell Cycle (G1, S, G2, M Phase, G0 quiescent stage), Mitosis (Equational division: Prophase, Metaphase, Anaphase, Telophase, Cytokinesis in plant cells by cell plate), Meiosis (Reduction division: Prophase I stages - Leptotene, Zygotene, Pachytene with crossing over, Diplotene, Diakinesis), and biological significance.',
    overviewTa: 'செல் சுழற்சியின் நிலைகள் (G1, S, G2, M கட்டங்கள்), மறைமுகப் பிரிவு (மைட்டாசிஸ்), குன்றல் பிரிவு (மியாசிஸ் நிலை 1 - லெப்டோடீன், சைகோடீன், பேக்கட்டீன் குறுக்கேற்றம், டிப்ளோடீன், டயாகைனசிஸ்) மற்றும் அதன் உயிரியல் முக்கியத்துவம்.',
    learningObjectives: [
      'Understand stages of Interphase (G1: growth, S: DNA replication, G2: protein synthesis) and G0 phase',
      'Detail mitotic phases: Prophase, Metaphase (Equatorial plate), Anaphase (Centromere split), Telophase',
      'Master Meiosis I Prophase I sub-stages, Synapsis, Synaptonemal complex, and Crossing Over in Pachytene',
      'Compare Mitosis vs Meiosis and explain significance of genetic recombination'
    ],
    importance: 'Critical for understanding growth, gamete formation, genetic variations, and oncology.',
    realLifeApplications: [
      'Cancer therapeutics targeting mitotic spindle checkpoints (Taxol, Vincristine)',
      'Plant breeding polyploidy induction using Colchicine (inhibits spindle formation)'
    ],
    introduction: 'How does a tiny acorn grow into a giant 100-foot oak tree? Through millions of synchronized cell divisions! The cell cycle is the master clock of life that faithfully duplicates DNA and parcels it equally into daughter cells.',
    coreConcepts: [
      'Interphase: Preparatory phase occupying 95% of cell cycle time (G1 -> S -> G2).',
      'S Phase: DNA replication (DNA doubles from 2C to 4C, chromosome number remains 2n).',
      'Mitosis: Equational division generating two identical diploid daughter cells.',
      'Meiosis: Reductional division producing 4 genetically variable haploid daughter cells via Crossing Over (Pachytene).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Stages of Meiosis I Prophase I',
        explanation: 'Leptotene: Chromatin condenses into visible threads. Zygotene: Homologous chromosomes pair up (Synapsis) via Synaptonemal Complex forming Bivalents/Tetrads. Pachytene: Non-sister chromatids exchange genetic segments (Crossing Over) mediated by Recombinase enzyme. Diplotene: Synaptonemal complex dissolves; X-shaped Chiasmata appear. Diakinesis: Terminalization of chiasmata, nuclear envelope disassembles.',
        keyPoints: ['L-Z-P-D-D sequence', 'Crossing over occurs in Pachytene', 'Chiasmata visible in Diplotene']
      },
      {
        topic: '2. Plant Cytokinesis vs Animal Cytokinesis',
        explanation: 'In plant cells with rigid cell walls, cytokinesis occurs centrifugally (from center toward periphery) by formation of a Cell Plate originating from phragmoplast vesicles deposited by Golgi apparatus. In animal cells, cytokinesis occurs centripetally by a cleavage furrow.',
        keyPoints: ['Plant: Phragmoplast -> Cell Plate (Centrifugal)', 'Animal: Cleavage Furrow (Centripetal)']
      }
    ],
    definitions: [
      {
        term: 'Crossing Over',
        termTa: 'குறுக்கேற்றம் (கிராசிங் ஓவர்)',
        definition: 'The reciprocal exchange of genetic material between non-sister chromatids of homologous chromosomes during Pachytene stage of Meiosis I, creating genetic variations.',
        definitionTa: 'மியாசிஸ் பேக்கட்டீன் நிலையில் ஒத்த குரோமோசோம்களின் சகோதரியற்ற குரோமேட்டிட்களிடையே நிகழும் மரபணு பரிமாற்றம்.'
      },
      {
        term: 'Synaptonemal Complex',
        termTa: 'சினாப்டோனிமல் காம்ப்ளக்ஸ்',
        definition: 'A tripartite proteinaceous zipper-like structure formed between paired homologous chromosomes during Zygotene to stabilize synapsis.',
        definitionTa: 'சைகோடீன் நிலையில் ஒத்த குரோமோசோம்களை இணைக்கும் புரதத்தாலான ஜிப்பர் போன்ற அமைப்பு.'
      }
    ],
    scientificNames: [],
    classifications: [
      {
        title: 'Stages of Cell Cycle',
        criteria: 'Replication and division milestones.',
        hierarchy: ['Interphase (G1 Phase, S Phase, G2 Phase, G0 Quiescent)', 'M Phase / Karyokinesis (Prophase, Metaphase, Anaphase, Telophase)', 'Cytokinesis (Cell Plate in plants)']
      }
    ],
    biologicalProcesses: [
      {
        name: 'Homologous Recombination in Pachytene',
        mechanism: 'Bivalent formation -> Endonuclease creates double-strand breaks -> Recombinase catalyzes strand exchange between non-sister chromatids -> Chiasma formed -> Ligase seals recombinant DNA.'
      }
    ],
    importantTables: [
      {
        title: 'Differences between Mitosis and Meiosis',
        headers: ['Feature', 'Mitosis', 'Meiosis'],
        rows: [
          ['Occurrence', 'Somatic cells and vegetative shoots', 'Germ / Reproductive cells during sporogenesis'],
          ['Number of Divisions', 'Single equational division', 'Two sequential divisions (Meiosis I & Meiosis II)'],
          ['Daughter Cells', 'Two identical diploid (2n) cells', 'Four genetically variable haploid (n) cells'],
          ['Synapsis & Crossing Over', 'Absent', 'Present in Prophase I (Pachytene)'],
          ['Biological Role', 'Growth, repair, asexual reproduction', 'Gamete/Spore production, genetic variation, evolution']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Sub-stages of Prophase I of Meiosis',
        steps: ['Leptotene (Chromatin bouquet)', 'Zygotene (Synapsis -> Bivalent)', 'Pachytene (Crossing over via Recombinase)', 'Diplotene (Chiasmata visible)', 'Diakinesis (Terminalization & Spindle setup)']
      }
    ],
    summary: 'The cell cycle orchestrates cellular replication and division. Mitosis preserves genetic fidelity for growth, while Meiosis recombines maternal and paternal genes for evolutionary adaptation.',
    shortNotes: ['Centromere splits during Anaphase in Mitosis and Anaphase II in Meiosis.', 'Quiescent G0 stage represents metabolically active but non-dividing state.'],
    quickRevisionPoints: ['S phase is the only phase where DNA replicates.', 'Colchicine arrests cell division at Metaphase.'],
    examImportantPoints: ['Describe the sub-stages of Prophase I of Meiosis with diagrams (5 Marks).', 'Compare Mitosis and Meiosis (5 Marks).'],
    faqs: [
      {
        question: 'What is the significance of Pachytene stage in Meiosis?',
        answer: 'During Pachytene, non-sister chromatids undergo crossing over where genetic material is recombined, creating new gene combinations that drive natural selection and evolution.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Stating that chromosome number doubles during S phase.', correction: 'In S phase, DNA content doubles (2C to 4C), but the chromosome number remains unchanged (2n).' }],
    memoryTricks: [{ mnemonic: 'L-Z-P-D-D', meaning: 'Leptotene -> Zygotene -> Pachytene -> Diplotene -> Diakinesis' }],
    fiveKeyTakeaways: [
      'Interphase prepares the cell with DNA duplication in S phase.',
      'Mitosis produces 2 identical diploid cells for growth and tissue repair.',
      'Meiosis halves chromosome number from 2n to n for sexual continuity.',
      'Pachytene crossing over creates universal genetic diversity.',
      'Plant cytokinesis builds from center outward via Golgi phragmoplast cell plates.'
    ],
    diagrams: [
      {
        id: 'diag-7-1',
        name: 'Stages of Meiosis I Prophase I',
        nameTa: 'மியாசிஸ் முதல் நிலையின் புரோபேஸ் 1 துணை நிலைகள்',
        purpose: 'Step-by-step sequential illustration of Leptotene, Zygotene, Pachytene, Diplotene, and Diakinesis.',
        purposeTa: 'லெப்டோடீன், சைகோடீன், பேக்கட்டீன், டிப்ளோடீன் மற்றும் டயாகைனசிஸ் நிலைகளை விளக்கும் படம்.',
        labels: ['Leptotene (Thin threads)', 'Zygotene (Synapsis / Bivalent)', 'Pachytene (Crossing Over / Tetrad)', 'Diplotene (Chiasmata formation)', 'Diakinesis (Terminalization)'],
        explanation: 'Clearly highlights maternal (red) and paternal (blue) chromatid arms exchanging pieces.',
        explanationTa: 'தாய் மற்றும் தந்தை வழி குரோமோசோம் கரங்கள் இணைந்து மரபணுக்களை மாற்றிக் கொள்ளும் நிகழ்வு.',
        examImportance: 'Extremely High (Standard 5-mark question in Annual Board Exam).',
        commonQuestions: ['Explain the events of Prophase I with diagrams.'],
        aiImagePrompt: 'Step-by-step scientific 5-panel diagram showing Meiosis Prophase 1 stages (Leptotene, Zygotene, Pachytene crossing over with recombinase node, Diplotene chiasmata, Diakinesis), color-coded red and blue homologous chromosomes on clean white background.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Cell nucleus in Interphase: DNA double helix untwisting, DNA polymerases zipping along strands to duplicate chromatin in S-phase.',
        scene2: 'Prophase I zoom: Red and blue homologous chromosome pairs finding each other like magnets, zipping tight with the synaptonemal complex.',
        scene3: 'Molecular close-up of Pachytene: Recombinase enzymes breaking and swapping DNA segments between non-sister chromatids in golden molecular flashes.',
        scene4: 'Anaphase separation and plant cytokinesis: Golgi vesicles marching to equator, fusing into a solid cell plate dividing the mother cell into two.'
      },
      cameraDirection: 'Dynamic orbital rotation around dancing chromosome arms, zooming into molecular DNA strand exchange.',
      visualStyle: 'High-end biomedical 3D animation with translucent chromatids, glowing histone proteins, and cinematic depth-of-field.'
    },
    voiceNarration: {
      audioTitle: 'The Dance of Chromosomes: Mitosis and Meiosis Unveiled',
      audioTitleTa: 'குரோமோசோம்களின் நடனம்: மைட்டாசிஸ் மற்றும் மியாசிஸ்',
      scriptEn: 'Why do you look a little like your mother and a little like your father, but not identical to either? The secret lies in Meiosis! Inside the cell nucleus, maternal and paternal chromosomes pair up in Zygotene, and in Pachytene, they perform crossing over—a genetic shuffle where chunks of DNA are traded between non-sister chromatids. This single event creates the endless genetic beauty of life on Earth. In contrast, Mitosis is nature’s perfect photocopier, allowing plants to grow leaves, roots, and flowers with identical genetic blueprints.',
      scriptTa: 'செல் பிரிவு என்பது வாழ்வின் தொடர் சுழற்சி! மைட்டாசிஸ் புதிய செல்களை உருவாக்கி தாவரங்களின் வளர்ச்சிக்கு உதவுகிறது; மியாசிஸ் குன்றல் பிரிவின் பேக்கட்டீன் நிலையில் நிகழும் குறுக்கேற்றம் புதிய மரபணு மாற்றங்களை உருவாக்கி பரிணாமத்திற்கு வித்திடுகிறது!',
      teacherTone: 'Dramatic, clear, inspiring, pedagogically rich.'
    }
  },

  // =========================================================================
  // CHAPTER 8: BIOMOLECULES (உயிர் மூலக்கூறுகள்)
  // =========================================================================
  {
    chapterNumber: 8,
    unitNumber: 3,
    unitName: 'Unit 3: Cell Biology and Biomolecules',
    unitNameTa: 'அலகு 3: செல் உயிரியல் மற்றும் உயிர் மூலக்கூறுகள்',
    chapterName: 'Biomolecules',
    chapterNameTa: 'உயிர் மூலக்கூறுகள்',
    overview: 'Chemical constituents of living cells: Carbohydrates (Monosaccharides, Disaccharides, Polysaccharides), Proteins (Amino acids, peptide bonds, Primary/Secondary/Tertiary/Quaternary structures), Lipids, Nucleic Acids (DNA & RNA structure, Chargaffs rules), and Enzymes (Mechanism of action, Michaelis-Menten kinetics, competitive vs non-competitive inhibition).',
    overviewTa: 'உயிர் மூலக்கூறுகள்: கார்போஹைட்ரேட்டுகள், புரதங்கள், லிப்பிடுகள், நியூக்ளிக் அமிலங்கள் (DNA, RNA அமைப்பு, சார்காப் விதி) மற்றும் என்சைம்கள் (செயல்முறை மற்றும் தடைபடுதல்) பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Classify Carbohydrates (Reducing vs Non-reducing sugars, Starch, Cellulose, Glycogen)',
      'Analyze 4 levels of Protein structures and peptide bond formation',
      'Explain Watson-Crick double helix DNA structure and Chargaffs rules',
      'Understand Enzyme catalysis, Activation Energy reduction, and Enzyme Inhibition (Competitive vs Non-competitive)'
    ],
    importance: 'Biochemical bridge linking cellular botany to plant physiology and biotechnology.',
    realLifeApplications: [
      'Cellulose extraction for biodegradable textiles and paper industries',
      'Enzyme inhibitors used in agriculture as eco-friendly targeted herbicides'
    ],
    introduction: 'If you break down any living plant to its fundamental chemical atoms, you will find Carbon, Hydrogen, Oxygen, Nitrogen, Phosphorus, and Sulphur. These elements assemble into the four great macromolecules of life: Sugars for energy, Proteins for machinery, Lipids for membranes, and Nucleic Acids for the blueprint of heredity!',
    coreConcepts: [
      'Carbohydrates: Polyhydroxy aldehydes/ketones; linked by Glycosidic bonds.',
      'Proteins: Polymers of 20 standard L-alpha amino acids linked by Peptide bonds (-CONH-).',
      'Enzymes: Biological protein catalysts that lower Activation Energy (Ea); Lock & Key and Induced Fit models.',
      'Nucleic Acids: Nucleotide polymers (Pentose sugar + Nitrogenous base + Phosphate group) linked by Phosphodiester bonds.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Structure of Enzymes & Enzyme Inhibition',
        explanation: 'Enzymes possess specific active sites where substrates bind to form an Enzyme-Substrate (ES) complex. In Competitive Inhibition, the inhibitor closely resembles the substrate in molecular shape and competes for the active site (e.g., Malonate inhibits Succinate Dehydrogenase). In Non-competitive Inhibition, inhibitor binds to an allosteric site altering active site conformation.',
        keyPoints: ['Competitive: Km increases, Vmax remains unchanged', 'Non-competitive: Vmax decreases, Km remains unchanged']
      },
      {
        topic: '2. Watson and Crick DNA Double Helix Model',
        explanation: 'Two polynucleotide chains running antiparallel (5 to 3 and 3 to 5) coiled in right-handed B-DNA helix. Sugar-phosphate backbone on outside, nitrogenous bases inside paired by Hydrogen bonds (A=T with 2 H-bonds, G≡C with 3 H-bonds). One complete helical turn = 3.4 nm (34 Å) containing 10 base pairs with pitch distance of 0.34 nm between base pairs.',
        keyPoints: ['Antiparallel strands', 'Chargaffs rule: A+G = T+C (Purines = Pyrimidines)', 'Helical diameter = 2.0 nm (20 Å)']
      }
    ],
    definitions: [
      {
        term: 'Peptide Bond',
        termTa: 'பெப்டைட் பிணைப்பு',
        definition: 'A covalent amide bond (-CONH-) formed by a dehydration condensation reaction between the alpha-amino group of one amino acid and the alpha-carboxyl group of another.',
        definitionTa: 'இரு அமினோ அமிலங்களின் கார்பாக்சில் மற்றும் அமினோ தொகுதிகளுக்கு இடையே நீர் நீக்க வினையால் உருவாகும் பிணைப்பு.'
      },
      {
        term: 'Coenzyme',
        termTa: 'துணை என்சைம் (கோ-என்சைம்)',
        definition: 'A non-protein organic cofactor loosely bound to an apoenzyme to form an active holoenzyme (e.g., NAD, FAD).',
        definitionTa: 'என்சைம்களின் செயல்பாட்டிற்குத் தேவையான புரதமற்ற கரிம மூலக்கூறுகள்.'
      }
    ],
    scientificNames: [],
    classifications: [
      {
        title: 'Levels of Protein Structure Organization',
        criteria: 'Folding complexity and chemical bonding.',
        hierarchy: ['Primary Structure (Linear sequence of amino acids)', 'Secondary Structure (Alpha-helix and Beta-pleated sheets via Hydrogen bonds)', 'Tertiary Structure (3D globular folding via Disulphide, Ionic, Hydrophobic bonds)', 'Quaternary Structure (Multi-subunit assembly e.g., Hemoglobin, RuBisCO)']
      }
    ],
    biologicalProcesses: [
      {
        name: 'Enzyme Catalysis Mechanism',
        mechanism: 'E + S <-> ES Complex -> Transition State (Lowered Ea) -> EP Complex -> E + P (Product released, Enzyme regenerated free).'
      }
    ],
    importantTables: [
      {
        title: 'Comparison of Competitive and Non-Competitive Inhibition',
        headers: ['Feature', 'Competitive Inhibition', 'Non-Competitive Inhibition'],
        rows: [
          ['Inhibitor Structure', 'Closely resembles substrate molecular shape', 'Different shape, binds to allosteric site'],
          ['Binding Site', 'Binds directly to Active Site', 'Binds to Allosteric Site outside active site'],
          ['Effect on Km', 'Km increases (Apparent affinity decreases)', 'Km remains unchanged'],
          ['Effect on Vmax', 'Vmax remains unchanged (reversibly overcome by excess substrate)', 'Vmax decreases (cannot be overcome by excess substrate)'],
          ['Classic Example', 'Malonate competing with Succinate for Succinate Dehydrogenase', 'Cyanide inhibiting Cytochrome Oxidase']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Activation Energy Curve with and without Enzyme',
        steps: ['Substrates at initial ground energy', 'Without Enzyme: High Activation Energy barrier required', 'With Enzyme: Active site stabilizes transition state -> Significantly Lower Activation Energy', 'Products released at lower free energy state']
      }
    ],
    summary: 'Biomolecules form the molecular bedrock of plant life. Enzymes serve as biocatalysts accelerating reactions by lowering activation energy barriers.',
    shortNotes: ['RuBisCO is the most abundant protein enzyme in the entire biosphere.', 'Cellulose is a homopolymer of beta-D-glucose linked by beta-1,4-glycosidic bonds.'],
    quickRevisionPoints: ['Chargaffs rule applies only to double-stranded DNA.', 'Zwitterion form of amino acid exists at isoelectric point.'],
    examImportantPoints: ['Explain the Lock & Key and Induced Fit mechanism of Enzyme action (5 Marks).', 'Describe the Watson and Crick double helix model of DNA with diagram (5 Marks).'],
    faqs: [
      {
        question: 'What are Chargaffs rules of base pairing?',
        answer: 'In double-stranded DNA: (1) Purines equal Pyrimidines (A + G = T + C); (2) Amount of Adenine equals Thymine (A = T) and Guanine equals Cytosine (G = C); (3) Sugar-phosphate ratio is 1:1.',
        markWeight: '3 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Believing enzymes alter reaction equilibrium.', correction: 'Enzymes accelerate reaction rates by lowering activation energy, but they do NOT alter the final chemical equilibrium.' }],
    memoryTricks: [{ mnemonic: 'P-S-T-Q Protein Levels', meaning: 'Primary: Sequence | Secondary: Sheets/Helix | Tertiary: 3D Globe | Quaternary: Multi-subunit' }],
    fiveKeyTakeaways: [
      'Carbohydrates, proteins, lipids, and nucleic acids constitute the molecular machinery of life.',
      'Proteins fold into 3D tertiary conformations forming catalytic active sites.',
      'Enzymes lower activation energy barriers without being consumed.',
      'Competitive inhibition increases Km while leaving Vmax unaltered.',
      'DNA double helix pairs Adenine with Thymine (2 H-bonds) and Guanine with Cytosine (3 H-bonds).'
    ],
    diagrams: [
      {
        id: 'diag-8-1',
        name: 'Activation Energy Graph and Enzyme Action',
        nameTa: 'என்சைம் வினை மற்றும் செயலாக்க ஆற்றல் வரைபடம்',
        purpose: 'Demonstrates how enzymes drastically lower the activation energy barrier for biochemical reactions.',
        purposeTa: 'என்சைம் உள்ளபோதும் இல்லாதபோதும் செயலாக்க ஆற்றலின் அளவை ஒப்பிடும் வரைபடம்.',
        labels: ['Substrate Ground State', 'Activation Energy without Enzyme (High Peak)', 'Activation Energy with Enzyme (Low Peak)', 'Transition State', 'Products (Delta G)'],
        explanation: 'Energy vs Reaction progress curve showing red high peak without catalyst and green lower peak with enzyme.',
        explanationTa: 'வினையின் போது என்சைம் எவ்வாறு ஆற்றல் தடையைக் குறைத்து வினையை விரைவுபடுத்துகிறது என்பதை விளக்கும் வரைபடம்.',
        examImportance: 'High (Core 3-mark & 5-mark conceptual question).',
        commonQuestions: ['Draw the graph showing the effect of enzyme on activation energy.'],
        aiImagePrompt: 'Scientific textbook coordinate graph plotting Free Energy vs Reaction Coordinate, showing high activation energy hill in red without enzyme and lowered activation energy hill in green with enzyme catalyst, labeled transition states.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Molecular fly-through into a living cell cytoplasm teeming with glowing ATP, glucose, and folded protein machines.',
        scene2: '3D ribbon model of an enzyme showing its catalytic pocket cavity; substrate molecule docking with induced-fit precision.',
        scene3: 'Competitive inhibitor (Malonate) docking into the active site, blocking natural substrate access; then flooded by high substrate concentration dislodging inhibitor.',
        scene4: 'Unwinding B-DNA double helix rotating in 3D space, showing 3.4 nm helical turn, major/minor grooves, and hydrogen bonds between A-T and G-C.'
      },
      cameraDirection: 'Sub-atomic level zooming through the active site cleft of an enzyme with hydrogen bond force fields illuminated.',
      visualStyle: 'Photorealistic molecular dynamics simulation with glowing chemical bonds, CPK element coloring, and interactive kinetic graphs.'
    },
    voiceNarration: {
      audioTitle: 'The Molecular Architecture of Life: Biomolecules & Enzymes',
      audioTitleTa: 'வாழ்வின் மூலக்கூறு ரகசியங்கள்: உயிர் மூலக்கூறுகள் மற்றும் என்சைம்கள்',
      scriptEn: 'Think of enzymes as nature’s ultimate nanomachines. Without them, digesting a single meal would take over fifty years! How do they perform this magic? By creating custom molecular glove compartments called active sites that cradle reactant substrates and lower the energy hill required for the reaction to occur. Meanwhile, the legendary double helix of DNA protects the genetic code of every living cell with precision hydrogen-bonded base pairs. Understanding biomolecules is like holding the master blueprint of living matter!',
      scriptTa: 'என்சைம்கள் என்பவை உயிரணுக்களின் அதிவிரைவு வினையூக்கிகள்! அவை வினையின் செயலாக்க ஆற்றலைக் குறைத்து நொடிப் பொழுதில் வினைகளை முடிக்கின்றன. DNA-வின் இரட்டை சுருள் அமைப்பும், புரதங்களின் 3D மடிப்புகளும் தாவரவியலின் மூலக்கூறு அற்புதங்களாகும்!',
      teacherTone: 'Energetic, informative, engaging, conceptually profound.'
    }
  }
];
