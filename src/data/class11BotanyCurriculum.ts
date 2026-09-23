import { Language } from '../types';

export interface DiagramData {
  id: string;
  name: string;
  nameTa: string;
  purpose: string;
  purposeTa: string;
  labels: string[];
  explanation: string;
  explanationTa: string;
  examImportance: string;
  commonQuestions: string[];
  aiImagePrompt: string;
  asciiOrSvgSnippet?: string;
}

export interface VisualizationPromptData {
  format: '2D Educational Animation' | '3D Scientific Animation' | 'Interactive Explainer Video' | 'Motion Graphics';
  duration: '30 seconds' | '1 minute' | '2 minutes' | '5 minutes';
  sceneBreakdown: {
    scene1: string;
    scene2: string;
    scene3: string;
    scene4: string;
  };
  cameraDirection: string;
  visualStyle: string;
}

export interface VoiceNarrationData {
  audioTitle: string;
  audioTitleTa: string;
  scriptEn: string;
  scriptTa: string;
  teacherTone: string;
}

export interface BotanyChapter {
  chapterNumber: number;
  unitNumber: number;
  unitName: string;
  unitNameTa: string;
  chapterName: string;
  chapterNameTa: string;
  overview: string;
  overviewTa: string;
  learningObjectives: string[];
  importance: string;
  realLifeApplications: string[];
  
  // Learning Content
  introduction: string;
  coreConcepts: string[];
  topicWiseExplanation: {
    topic: string;
    explanation: string;
    keyPoints?: string[];
  }[];
  definitions: { term: string; termTa: string; definition: string; definitionTa: string }[];
  scientificNames: { commonName: string; binomialName: string; significance: string }[];
  classifications: { title: string; criteria: string; hierarchy: string[] }[];
  biologicalProcesses: { name: string; mechanism: string; formulaOrSteps?: string }[];
  importantTables: { title: string; headers: string[]; rows: string[][] }[];
  flowcharts: { title: string; steps: string[] }[];
  
  // Exam Prep & Memory
  summary: string;
  shortNotes: string[];
  quickRevisionPoints: string[];
  examImportantPoints: string[];
  faqs: { question: string; answer: string; markWeight: string }[];
  commonMistakes: { mistake: string; correction: string }[];
  memoryTricks: { mnemonic: string; meaning: string }[];
  fiveKeyTakeaways: string[];

  // Visuals & AI Generation Prompts
  diagrams: DiagramData[];
  aiVisualization: VisualizationPromptData;
  voiceNarration: VoiceNarrationData;
}

export const TN_CLASS_11_BOTANY_CHAPTERS: BotanyChapter[] = [
  // =========================================================================
  // UNIT 1: DIVERSITY OF LIVING WORLD (உயிர்ப்பிரபஞ்சம் & தாவர உலகம்)
  // =========================================================================
  {
    chapterNumber: 1,
    unitNumber: 1,
    unitName: 'Unit 1: Diversity of Living World',
    unitNameTa: 'அலகு 1: உயிருலகின் பன்முகத்தன்மை',
    chapterName: 'Living World',
    chapterNameTa: 'உயிர்ப்பிரபஞ்சம்',
    overview: 'Exploration of living characteristics, viral structures (Bacteriophage & TMV), bacterial architecture, archaebacteria, cyanobacteria, mycorrhizae, and taxonomic hierarchy tools (Herbaria, Botanical Gardens).',
    overviewTa: 'உயிரினப் பண்புகள், வைரஸ் மற்றும் பாக்டீரிய அமைப்புகள், ஆர்க்கிபாக்டீரியா, சயனோபாக்டீரியா, மைக்கோரைசா மற்றும் வகைப்பாட்டுக் கருவிகள் பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Understand defining characteristics of living organisms (Growth, Metabolism, Reproduction, Consciousness)',
      'Compare structure and life cycles of TMV and T4 Bacteriophage (Lytic vs Lysogenic)',
      'Differentiate Gram-Positive and Gram-Negative bacterial cell walls using Gram Staining',
      'Examine economic and ecological importance of Archaebacteria, Cyanobacteria, and Fungi (Mycorrhiza)'
    ],
    importance: 'Foundational chapter for TN State Board & NEET. Establishes cellular criteria for life and microbial diversity classification.',
    realLifeApplications: [
      'Bioremediation by Cyanobacteria (Anabaena azollae biofertilizers in paddy fields)',
      'Antibiotic production from Actinomycetes (Streptomyces)',
      'Viral vaccine vectors and diagnostic tools'
    ],
    introduction: 'Imagine looking at a drop of pond water under a microscope and discovering an entire bustling metropolis of micro-organisms! Biology is the exploration of these intricate living engines governed by metabolism, homeostatic balance, and genetic continuity.',
    coreConcepts: [
      'Characteristics of Living Beings: Autocatalytic reproduction, metabolism (anabolism + catabolism), homeostasis.',
      'Viruses: Biological entities on the borderline of living and non-living; obligate intracellular parasites.',
      'Bacteria & Actinomycetes: Prokaryotic cell architecture, peptidoglycan cell walls, and genetic transfer mechanisms (Transformation, Transduction, Conjugation).',
      'Fungi & Lichens: Heterotrophic eukaryotic nutrition, mycorrhizal mutualism, and pollution bio-indicators.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Structure of Viruses (TMV & T4 Bacteriophage)',
        explanation: 'Tobacco Mosaic Virus (TMV) has a rod-shaped helical capsid containing 2,130 capsomeres enclosing single-stranded RNA. T4 Bacteriophage features a tadpole-like morphology with an icosahedral head, collar, sheath, and 6 tail fibers containing double-stranded DNA.',
        keyPoints: ['TMV: Helical symmetry, ssRNA (approx 6400 nucleotides)', 'T4 Phage: Complex symmetry, dsDNA, injects genome via contractile tail']
      },
      {
        topic: '2. Gram Staining Technique & Bacterial Cell Wall',
        explanation: 'Christian Gram developed the differential staining method: Crystal Violet -> Grams Iodine -> Ethanol decolourization -> Safranin counterstain. Gram-positive bacteria retain crystal violet (purple) due to thick peptidoglycan with teichoic acid; Gram-negative take safranin (pink) due to thin peptidoglycan and outer lipopolysaccharide (LPS) membrane.',
        keyPoints: ['Gram Positive: Thick peptidoglycan, Teichoic acid present, Purple', 'Gram Negative: Thin peptidoglycan, Outer LPS membrane present, Pink']
      },
      {
        topic: '3. Symbiotic Associations: Lichens and Mycorrhizae',
        explanation: 'Lichens represent mutualistic symbiosis between a Phycobiont (algal/cyanobacterial partner performing photosynthesis) and a Mycobiont (fungal partner providing anchorage and moisture absorption). Mycorrhizae are associations between fungal hyphae and higher plant roots (Ectomycorrhiza & Endomycorrhiza/VAM).',
        keyPoints: ['Lichens: Sensitive SO2 pollution bio-indicators', 'VAM (Vesicular Arbuscular Mycorrhiza): Enhances phosphorus uptake']
      }
    ],
    definitions: [
      {
        term: 'Metabolism',
        termTa: 'வளர்சிதை மாற்றம்',
        definition: 'The sum total of all biochemical anabolic (constructive) and catabolic (breakdown) reactions occurring within a living cell.',
        definitionTa: 'உயிரணுக்களில் நிகழும் ஆக்க மற்றும் சிதைவு வேதிவினைகளின் கூட்டுத்தொகுப்பு ஆகும்.'
      },
      {
        term: 'Bacteriophage',
        termTa: 'பாக்டீரியோபேஜ்',
        definition: 'A specialized virus that infects and replicates within specific bacterial host cells.',
        definitionTa: 'பாக்டீரியாக்களை தாக்கி அழிக்கும் தனித்துவமான வைரஸ்கள்.'
      },
      {
        term: 'Prions',
        termTa: 'பிரியான்கள்',
        definition: 'Proteinaceous infectious particles devoid of nucleic acids that induce neurodegenerative diseases.',
        definitionTa: 'நியூக்ளிக் அமிலங்கள் அற்ற, தொற்றுத்தன்மை கொண்ட புரதத் துகள்கள்.'
      }
    ],
    scientificNames: [
      { commonName: 'Tobacco Mosaic Virus', binomialName: 'Tobamovirus', significance: 'First discovered virus by Dmitri Ivanovsky (1892)' },
      { commonName: 'Nitrogen-Fixing Cyanobacterium', binomialName: 'Anabaena azollae', significance: 'Symbiont with Azolla fern, green biofertilizer in paddy fields' },
      { commonName: 'Ray Fungus / Antibiotic Producer', binomialName: 'Streptomyces griseus', significance: 'Source of Streptomycin antibiotic' }
    ],
    classifications: [
      {
        title: 'Whittakers Five Kingdom System of Classification (1969)',
        criteria: 'Cell structure (Prokaryote/Eukaryote), Body organization, Mode of nutrition (Autotrophic/Heterotrophic), Reproduction, Phylogenetic relations.',
        hierarchy: ['Monera (Bacteria)', 'Protista (Unicellular Eukaryotes)', 'Fungi (Chitinous Heterotrophs)', 'Plantae (Autotrophic Plants)', 'Animalia (Heterotrophic Multicellular Animals)']
      }
    ],
    biologicalProcesses: [
      {
        name: 'Gram Staining Process',
        mechanism: 'Smear preparation -> Crystal Violet (1 min) -> Rinse -> Grams Iodine mordant (1 min) -> 95% Ethanol wash (20 sec) -> Safranin counterstain (1 min) -> Microscopic examination.',
        formulaOrSteps: 'Primary Stain (Purple) -> Mordant Complex -> Decolourization -> Counter Stain (Pink/Red)'
      }
    ],
    importantTables: [
      {
        title: 'Differences between Gram-Positive and Gram-Negative Bacteria',
        headers: ['Feature', 'Gram-Positive Bacteria', 'Gram-Negative Bacteria'],
        rows: [
          ['Cell Wall Thickness', 'Thick (20 - 80 nm single layer)', 'Thin (8 - 12 nm multilayered)'],
          ['Peptidoglycan Content', '70 - 80% of cell wall', '10 - 20% of cell wall'],
          ['Teichoic Acid', 'Present', 'Absent'],
          ['Outer Membrane (LPS)', 'Absent', 'Present (Lipopolysaccharide)'],
          ['Gram Staining Color', 'Dark Violet / Purple', 'Pink / Red']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Lytic Cycle of T4 Bacteriophage',
        steps: ['Adsorption (Tail fibers bind to bacterial LPS)', 'Penetration (Lysozyme digests cell wall, DNA injected)', 'Synthesis of Viral Components (Host DNA degraded)', 'Assembly & Maturation (Head, Sheath, Tail fibers assembled)', 'Lysis and Release (Host cell bursts, releasing 200+ virions)']
      }
    ],
    summary: 'The living world encompasses magnificent diversity from acellular viruses and prokaryotic monerans to complex fungi. Cellular integrity, metabolic flux, and phylogenetic classification form the cornerstone of systematic botany.',
    shortNotes: [
      'Viruses are nucleoprotein entities possessing either RNA or DNA, never both.',
      'Viroids are naked single-stranded infectious RNA lacking protein capsids (Discovered by T.O. Diener).',
      'Bacterial genetic recombination occurs via Conjugation (F-plasmid), Transformation (Griffith effect), and Transduction (Zinder & Lederberg).'
    ],
    quickRevisionPoints: [
      'Father of Botany: Theophrastus.',
      'Father of Taxonomy: Carolus Linnaeus (Binomial Nomenclature).',
      'Gram-positive bacteria = Purple (e.g., Bacillus subtilis); Gram-negative = Pink (e.g., E. coli).',
      'Heterocysts in Cyanobacteria (Nostoc) contain Nitrogenase enzyme for nitrogen fixation.'
    ],
    examImportantPoints: [
      'Draw and label the T4 Bacteriophage structure (5 Marks).',
      'Explain the steps and biochemical basis of Gram Staining (5 Marks).',
      'Write short notes on Lichens and explain why they are pollution bio-indicators (3 Marks).'
    ],
    faqs: [
      {
        question: 'Why are viruses referred to as biological puzzle / borderline entities?',
        answer: 'Viruses exhibit non-living characteristics outside hosts (crystalline state, no cellular organelle/metabolism) and living characteristics inside host cells (reproduction, mutation, genetic material).',
        markWeight: '2 Marks'
      },
      {
        question: 'What is the role of Heterocysts in Cyanobacteria?',
        answer: 'Heterocysts are specialized thick-walled, pale yellow cells lacking PS-II (anaerobic microenvironment) that house the oxygen-sensitive Nitrogenase enzyme to fix atmospheric nitrogen into ammonia.',
        markWeight: '3 Marks'
      }
    ],
    commonMistakes: [
      { mistake: 'Writing that viruses contain both DNA and RNA simultaneously.', correction: 'Viruses contain either DNA or RNA as their genetic material, NEVER both in a single virion.' }
    ],
    memoryTricks: [
      { mnemonic: 'C-I-E-S for Gram Staining', meaning: 'C: Crystal Violet -> I: Iodine mordant -> E: Ethanol wash -> S: Safranin counterstain' }
    ],
    fiveKeyTakeaways: [
      'Metabolism and consciousness are absolute defining characteristics of living organisms.',
      'Viruses are obligate intracellular parasites made of a protein capsid and nucleic acid core.',
      'Bacterial cell walls distinguish Gram-positive (thick peptidoglycan) from Gram-negative (outer LPS layer).',
      'Lichens and Mycorrhizae are critical ecological mutualisms sustaining terrestrial ecosystems.',
      'Biological keys and herbaria serve as vital systematic tools for plant identification.'
    ],
    diagrams: [
      {
        id: 'diag-1-1',
        name: 'Structure of T4 Bacteriophage',
        nameTa: 'டி4 பாக்டீரியோபேஜ் அமைப்பு',
        purpose: 'Visualizes the morphogenetic parts of a complex tailed virus that attacks bacteria.',
        purposeTa: 'பாக்டீரியாக்களை தாக்கும் டி4 வைரஸின் தலை, உறை மற்றும் வால் நாரிழைகளை விளக்கும் வரைபடம்.',
        labels: ['Hexagonal / Icosahedral Head', 'Double-Stranded DNA Core', 'Collar & Whisker', 'Contractile Sheath', 'Hexagonal Base Plate', 'Tail Pins', '6 Tail Fibers'],
        explanation: 'The head encapsulates the tightly packed dsDNA genome. The hollow cylindrical contractile sheath connects the head to the hexagonal baseplate bearing 6 tail fibers that recognize receptor proteins on the bacterial wall.',
        explanationTa: 'அறுங்கோணத் தலைப்பகுதியில் இரட்டை இழை DNA உள்ளது. வால் பகுதி உருளை உறை மற்றும் 6 வால் நாரிழைகளைக் கொண்டுள்ளது.',
        examImportance: 'Very High (Frequently tested 3-mark & 5-mark question in Board Exams).',
        commonQuestions: ['Draw and label the parts of T4 Bacteriophage.', 'What is the function of tail fibers in viral infection?'],
        aiImagePrompt: 'High quality scientific textbook vector illustration of T4 Bacteriophage structure, crisp clear labels with arrows pointing to Icosahedral Head, dsDNA core, Collar, Contractile Sheath, Base Plate, and 6 Tail Fibers on clean white educational background, Material Design 3 style.'
      },
      {
        id: 'diag-1-2',
        name: 'Gram-Positive vs Gram-Negative Bacterial Cell Wall',
        nameTa: 'கிராம்-நேர் மற்றும் கிராம்-எதிர் பாக்டீரியா செல் சுவர் ஒப்பீடு',
        purpose: 'Cross-sectional comparison of peptidoglycan thickness and presence of outer membrane.',
        purposeTa: 'பெப்டிடோகிளைக்கான் தடிமன் மற்றும் வெளிப்புற சவ்வு அமைப்பை விளக்கும் குறுக்குவெட்டு தோற்றம்.',
        labels: ['Thick Peptidoglycan (Gram +)', 'Teichoic Acid', 'Plasma Membrane', 'Outer LPS Membrane (Gram -)', 'Periplasmic Space', 'Porin Proteins'],
        explanation: 'Shows thick multi-layered murein meshwork with teichoic acid on the left (Gram+) and thin peptidoglycan flanked by an outer lipopolysaccharide membrane on the right (Gram-).',
        explanationTa: 'கிராம் நேர் பாக்டீரியாவில் தடித்த பெப்டிடோகிளைக்கானும், கிராம் எதிர் பாக்டீரியாவில் மெல்லிய சுவருடன் வெளிப்புற லிப்போபாலிசாக்கரைடு சவ்வும் உள்ளது.',
        examImportance: 'High (Core concept in bacterial physiology).',
        commonQuestions: ['Differentiate Gram positive and Gram negative cell walls with a neat labeled diagram.'],
        aiImagePrompt: 'Cross-section 3D scientific diagram comparing Gram-Positive and Gram-Negative bacterial cell walls, showing peptidoglycan layer, teichoic acid, outer LPS membrane, plasma membrane, vibrant educational blue, green, and purple palette with crisp callouts.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Wide shot of Tobacco field showing mosaic infected leaves, zooming into sub-microscopic level to reveal millions of rod-shaped TMV particles.',
        scene2: 'Microscopic 3D animation of T4 Bacteriophage descending on E. coli cell, tail fibers flexing and anchoring onto outer membrane receptor sites.',
        scene3: 'Contractile sheath compressing like a molecular syringe, injecting viral dsDNA directly across the bacterial peptidoglycan wall into cytoplasm.',
        scene4: 'Rapid molecular synthesis of viral heads and tails, self-assembly inside host, followed by cell wall lysis and burst release of new virions.'
      },
      cameraDirection: 'Zooming from aerial field view down to 50,000x cellular zoom, smoothly transitioning into rotating 360-degree cross-sectional molecular view.',
      visualStyle: 'Photorealistic scientific 3D rendering with glowing nucleic acids, crisp protein textures, educational color-coding, and floating labels.'
    },
    voiceNarration: {
      audioTitle: 'Exploring the Microscopic Frontiers: Viruses & Bacteria',
      audioTitleTa: 'நுண்ணுயிரிகளின் பிரபஞ்சம்: வைரஸ்கள் மற்றும் பாக்டீரியாக்கள்',
      scriptEn: 'Hello Class 11 botanists! Imagine a world so tiny that billions of organisms can reside on a pinhead. Today, we step into the Living World. Are viruses alive? When sitting in a test tube, they are inert chemical crystals. But the moment a T4 bacteriophage lands on a bacterial wall, it acts like an automated nanorobot—injecting its genetic blueprint to command the host cell. Meanwhile, bacteria demonstrate staggering diversity: notice how Gram-positive cells wrap themselves in thick armor of peptidoglycan, while Gram-negative bacteria shield themselves with an outer lipopolysaccharide coat. Master these mechanisms, and you unlock the fundamentals of all biology!',
      scriptTa: 'வணக்கம் 11ஆம் வகுப்பு மாணவத் தோழர்களே! ஒரு குண்டூசி முனையில் கோடிக்கணக்கான உயிரினங்கள் வாழும் மைக்ரோஸ்கோபிக் உலகிற்கு உங்களை வரவேற்கிறோம். வைரஸ்கள் உயிருள்ளவையா அல்லது உயிரற்றவையா? வெளியே இருக்கும் போது அவை வெறும் படிகங்கள்; ஆனால் உடலுக்குள் நுழைந்தவுடன் அவை விருந்தோம்பி செல்லைத் தனது கட்டுப்பாட்டிற்குள் கொண்டுவருகின்றன. கிராம் நேர் மற்றும் எதிர் பாக்டீரியாக்களின் செல் சுவர் வேறுபாடுகளை நீங்கள் தெளிவாகப் புரிந்து கொண்டால், மருத்துவ தாவரவியலின் அடித்தளத்தை நீங்கள் எளிதாக வென்றுவிடலாம்!',
      teacherTone: 'Enthusiastic, storytelling, authoritative yet warm, passionate high school Biology teacher.'
    }
  },

  // =========================================================================
  // CHAPTER 2: PLANT KINGDOM (தாவர உலகம்)
  // =========================================================================
  {
    chapterNumber: 2,
    unitNumber: 1,
    unitName: 'Unit 1: Diversity of Living World',
    unitNameTa: 'அலகு 1: உயிருலகின் பன்முகத்தன்மை',
    chapterName: 'Plant Kingdom',
    chapterNameTa: 'தாவர உலகம்',
    overview: 'Comprehensive survey of Algae (Chlorophyceae, Phaeophyceae, Rhodophyceae), Bryophytes (Amphibians of plant kingdom), Pteridophytes (First vascular cryptogams), Gymnosperms (Naked seeded plants), and Angiosperms along with alternation of generations (Haplontic, Diplontic, Haplodiplontic).',
    overviewTa: 'பாசிகள் (பச்சை, பழுப்பு, சிவப்பு பாசிகள்), பிரையோபைட்டுகள், டெரிடோபைட்டுகள், ஜிம்னோஸ்பெர்ம்கள் மற்றும் ஆஞ்சியோஸ்பெர்ம்களின் வாழ்க்கைச் சுழற்சிகள் பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Classify Algae based on photosynthetic pigments, reserve food materials, and flagellation',
      'Explain the gametophyte-dominant lifecycle in Bryophytes (Liverworts & Mosses)',
      'Analyze stele types and heterospory leading to the seed habit in Pteridophytes (Selaginella)',
      'Compare Gymnosperms (Pinus, Cycas) with Angiosperms and distinguish alternation of generation cycles'
    ],
    importance: 'Fundamental for understanding evolutionary transitions from aquatic thalloid forms to giant terrestrial seed plants.',
    realLifeApplications: [
      'Agar-agar from Rhodophyceae (Gelidium, Gracilaria) used in microbiology culture media & ice creams',
      'Sphagnum peat moss used as fuel, soil conditioner, and packing material for living plants due to water retention',
      'Gymnosperm timber (Pinus) for paper pulp and turpentine resin production'
    ],
    introduction: 'From microscopic green Chlorella floating in serene temple ponds to towering coastal redwoods (Sequoia), the plant kingdom illustrates one of the greatest evolutionary sagas: how aquatic life conquered dry land through vascular pipelines and seed armor!',
    coreConcepts: [
      'Algae: Thalloid, chlorophyllous, avascular autotrophs classified into Chlorophyceae (green), Phaeophyceae (brown), and Rhodophyceae (red).',
      'Bryophytes: Non-vascular embryophytes requiring water for fertilization (Antherozoids swim to Archegonium).',
      'Pteridophytes: Seedless vascular plants displaying independent sporophyte generation and heterospory.',
      'Gymnosperms: Phanerogams bearing naked ovules not enclosed within an ovary wall.',
      'Alternation of Generations: Haplontic (Volvox), Diplontic (Fucus, Gymnosperms, Angiosperms), and Haplodiplontic (Bryophytes, Pteridophytes).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Classification of Algae',
        explanation: 'Chlorophyceae contain Chlorophyll a & b with starch stored in pyrenoids. Phaeophyceae contain Chlorophyll a, c and Fucoxanthin with Laminarin/Mannitol food reserves. Rhodophyceae contain Chlorophyll a, d and r-Phycoerythrin with Floridean starch.',
        keyPoints: ['Chlorophyceae: Volvox, Chlamydomonas, Spirogyra', 'Phaeophyceae: Sargassum, Laminaria, Ectocarpus', 'Rhodophyceae: Polysiphonia, Gracilaria, Gelidium']
      },
      {
        topic: '2. Bryophytes: Liverworts and Mosses',
        explanation: 'Bryophytes are terrestrial plants that depend on moisture film for flagellated antherozoids to fertilize non-motile egg in archegonium. The gametophyte is haploid, independent, and photosynthetic, whereas the diploid sporophyte (foot, seta, capsule) is dependent upon the gametophyte.',
        keyPoints: ['Liverworts: Riccia, Marchantia (gemma cups for asexual reproduction)', 'Mosses: Funaria (protonema stage, peristome teeth for spore dispersal)']
      },
      {
        topic: '3. Heterospory and Origin of Seed Habit',
        explanation: 'In homosporous pteridophytes, one spore type is formed. In heterosporous pteridophytes like Selaginella and Marsilea, two distinct spore types arise: small Microspores (male) and large Megaspores (female). Retention of female gametophyte within the megasporangium on parent sporophyte represents the precursor to seed evolution.',
        keyPoints: ['Heterospory -> Endosporic development -> Seed Habit evolution']
      }
    ],
    definitions: [
      {
        term: 'Thallus',
        termTa: 'தாலஸ் (உடலம்)',
        definition: 'A simple, non-differentiated plant vegetative body lacking true roots, stems, and leaves.',
        definitionTa: 'வேர், தண்டு, இலை என வேறுபடாத எளிய தாவர உடலமைப்பு.'
      },
      {
        term: 'Heterospory',
        termTa: 'இருவித்துத்தன்மை (ஹெட்டிரோஸ்போரி)',
        definition: 'The production of two morphologically and physiologically distinct types of spores (Microspores and Megaspores) on the same plant.',
        definitionTa: 'நுண் வித்துக்கள் மற்றும் பெரு வித்துக்கள் என இருவேறுபட்ட வித்துக்களை உருவாக்கும் நிகழ்வு.'
      }
    ],
    scientificNames: [
      { commonName: 'Peat Moss / Bog Moss', binomialName: 'Sphagnum compactum', significance: 'High water retention capacity, antibiotic properties in surgical dressings' },
      { commonName: 'Club Moss / Resurrection Plant', binomialName: 'Selaginella rupestris', significance: 'Model organism for heterospory and desiccation tolerance' },
      { commonName: 'Chilgoza Pine', binomialName: 'Pinus gerardiana', significance: 'Edible gymnosperm seeds rich in proteins and oils' }
    ],
    classifications: [
      {
        title: 'Classification of Plant Kingdom',
        criteria: 'Vascular tissue presence, seed formation, fruit enclosure.',
        hierarchy: ['Cryptogamae (Thallophyta, Bryophyta, Pteridophyta)', 'Phanerogamae / Spermatophyta (Gymnospermae, Angiospermae)']
      }
    ],
    biologicalProcesses: [
      {
        name: 'Haplodiplontic Life Cycle of Funaria (Moss)',
        mechanism: 'Haploid spore germinates into filamentous protonema -> develops leafy gametophore -> Antheridia produce biflagellate antherozoids & Archegonia produce egg -> Water-aided fertilization -> 2n Zygote -> Sporophyte (Capsule) undergoes meiosis -> Releases n Spores.'
      }
    ],
    importantTables: [
      {
        title: 'Comparison of Algal Classes',
        headers: ['Class', 'Common Name', 'Major Pigments', 'Stored Food', 'Cell Wall Material'],
        rows: [
          ['Chlorophyceae', 'Green Algae', 'Chlorophyll a, b', 'Starch', 'Cellulose'],
          ['Phaeophyceae', 'Brown Algae', 'Chlorophyll a, c, Fucoxanthin', 'Laminarin, Mannitol', 'Cellulose + Algin'],
          ['Rhodophyceae', 'Red Algae', 'Chlorophyll a, d, r-Phycoerythrin', 'Floridean Starch', 'Cellulose + Pectin + Polysulphate esters']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Evolution of Seed Habit in Plants',
        steps: ['Homospory (Equisetum)', 'Heterospory (Selaginella produces micro & megaspores)', 'Reduction in megaspore count to 1 per sporangium', 'Retention of megaspore inside megasporangium', 'Development of integument barrier -> Naked Seed (Gymnosperms) -> Enclosed Seed (Angiosperms)']
      }
    ],
    summary: 'Plant kingdom traces phylogenetic advancement from thalloid algae to embryophytic bryophytes, vascular pteridophytes, naked-seeded gymnosperms, and climax angiosperms with double fertilization.',
    shortNotes: [
      'Bryophytes are amphibians of plant kingdom because they inhabit damp soil but require water for fertilization.',
      'Coralloid roots of Cycas exhibit symbiotic association with nitrogen-fixing cyanobacteria (Nostoc/Anabaena).',
      'Mycorrhizal roots occur in Pinus as mutualism with soil fungi for water/mineral intake.'
    ],
    quickRevisionPoints: [
      'Brown algae cell walls yield Alginate; Red algae yield Agar & Carrageenan.',
      'First vascular land plants = Pteridophytes (Vascular cryptogams).',
      'Archegonia are absent in Angiosperms.',
      'Gnetum, Ephedra, and Welwitschia are advanced gymnosperms possessing vessels in xylem.'
    ],
    examImportantPoints: [
      'Tabulate the distinguishing features of Chlorophyceae, Phaeophyceae, and Rhodophyceae (5 Marks).',
      'Explain Heterospory and origin of seed habit with Selaginella example (5 Marks).',
      'Diagrammatic representation of Haplontic, Diplontic, and Haplodiplontic life cycles (3 Marks).'
    ],
    faqs: [
      {
        question: 'Why are Bryophytes called amphibians of the plant kingdom?',
        answer: 'Bryophytes grow on land (soil, damp rocks) but cannot complete sexual reproduction without water because flagellated male gametes (antherozoids) must swim to reach the archegonium for fertilization.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [
      { mistake: 'Confusing Floridean starch with normal starch.', correction: 'Floridean starch has structural resemblance to amylopectin and glycogen, unique to Rhodophyceae.' }
    ],
    memoryTricks: [
      { mnemonic: 'G-B-R = S-L-F', meaning: 'Green: Starch | Brown: Laminarin/Mannitol | Red: Floridean starch' }
    ],
    fiveKeyTakeaways: [
      'Algae are categorized by pigments (chlorophyll, fucoxanthin, phycoerythrin) and storage carbohydrates.',
      'Bryophytes display gametophyte dominance with dependent parasitic sporophytes.',
      'Pteridophytes represent the first true vascular land plants containing xylem tracheids and phloem sieve cells.',
      'Heterospory paved the evolutionary bridge toward the protective seed habit.',
      'Gymnosperms produce naked seeds exposed directly on megasporophyll cones.'
    ],
    diagrams: [
      {
        id: 'diag-2-1',
        name: 'Alternation of Generations (Life Cycles)',
        nameTa: 'சந்ததி மாற்றம்: ஹேப்ளாண்டிக், டிப்ளாண்டிக், ஹேப்ளோ-டிப்ளாண்டிக் வாழ்க்கை சுழற்சிகள்',
        purpose: 'Illustrates the haploid (gametophytic) and diploid (sporophytic) phases across plant divisions.',
        purposeTa: 'தாவரங்களின் ஒருமடிய மற்றும் இருமடிய வாழ்க்கை சுழற்சி மாற்றங்களை விளக்கும் வரைபடம்.',
        labels: ['Haploid Gametophyte (n)', 'Mitosis', 'Gametes', 'Syngamy (Fertilization)', 'Zygote (2n)', 'Diploid Sporophyte (2n)', 'Meiosis / Spores (n)'],
        explanation: 'Three cyclic diagrams demonstrating Haplontic dominance (Zygotic meiosis), Diplontic dominance (Gametic meiosis), and Haplodiplontic alternation with both independent multicellular stages.',
        explanationTa: 'ஹேப்ளாண்டிக், டிப்ளாண்டிக் மற்றும் ஹேப்ளோ-டிப்ளாண்டிக் சுழற்சிகளில் கேமீட்டோபைட் மற்றும் ஸ்போரோபைட் கட்டங்களின் பங்களிப்பு.',
        examImportance: 'Very High (Direct 5-mark question in Annual Board Exams).',
        commonQuestions: ['Compare Haplontic and Diplontic life cycles with suitable examples.'],
        aiImagePrompt: 'Vector scientific illustration of plant alternation of generations showing Haplontic, Diplontic, and Haplodiplontic cycles, color-coded blue (haploid n) and green (diploid 2n), arrows showing syngamy and meiosis.'
      }
    ],
    aiVisualization: {
      format: '2D Educational Animation',
      duration: '1 minute',
      sceneBreakdown: {
        scene1: 'Pond water zoom-in showing spinning Volvox colonies and kelp forests in oceanic tides.',
        scene2: 'Moist forest floor animation showing rain drops creating water film, antherozoid swimming with beating flagella into the moss archegonia neck.',
        scene3: 'Cross-section of Selaginella strobilus highlighting microsporangia and megasporangia developing contrasting spore sizes.',
        scene4: 'Pine tree cone scales opening in wind, pollen grains drifting directly onto exposed sticky micropylar droplets of naked ovules.'
      },
      cameraDirection: 'Dynamic fluid tracking camera following swimming gamete through water droplet into archegonial canal.',
      visualStyle: 'Modern vector motion graphics with luminous highlighting, smooth particle physics, and bilingual subtitles.'
    },
    voiceNarration: {
      audioTitle: 'The Great Conquest of Land: Evolutionary Tale of Plants',
      audioTitleTa: 'நிலத்தை வென்ற தாவரங்களின் பரிணாமப் பயணம்',
      scriptEn: 'How did aquatic algae transition into mighty forest giants? In this chapter, we witness nature’s engineering feats! First, algae mastered photosynthesis underwater using specialized pigments like fucoxanthin and phycoerythrin. Then bryophytes stepped onto moist shores—acting as plant amphibians that still depend on rain droplets for fertilization. Pteridophytes built the world’s first vascular pipelines, innovating heterospory, which eventually crowned gymnosperms with protected seeds. Understanding this evolutionary roadmap makes remembering plant diversity effortless!',
      scriptTa: 'கடல் நீரில் மிதந்த பாசிகள் எவ்வாறு நிலப்பரப்பை ஆட்சி செய்யும் பிரம்மாண்ட மரங்களாக மாறின? பிரையோபைட்டுகள் முதல் டெரிடோபைட்டுகளின் வாஸ்குலார் திசுக்கள் வரை, இருவித்துத்தன்மை எவ்வாறு விதைகளின் தோற்றத்திற்கு வழிவகுத்தது என்பதை நீங்கள் அறிந்துகொண்டால் தாவர உலகம் உங்கள் விரல் நுனியில்!',
      teacherTone: 'Inspiring, educational, clear, engaging, conversational.'
    }
  },

  // =========================================================================
  // UNIT 2: PLANT MORPHOLOGY AND TAXONOMY OF ANGIOSPERMS
  // =========================================================================
  {
    chapterNumber: 3,
    unitNumber: 2,
    unitName: 'Unit 2: Plant Morphology and Taxonomy',
    unitNameTa: 'அலகு 2: புற அமைப்பியல் மற்றும் வகைப்பாட்டியல்',
    chapterName: 'Vegetative Morphology',
    chapterNameTa: 'தாவர புற அமைப்பியல் - உடலப் புற அமைப்பியல்',
    overview: 'Root systems (Taproot vs Adventitious, modifications for storage, support, respiration), Shoot systems (Stem modifications, buds), Leaf anatomy (Phyllotaxy, venation, simple vs compound leaves, leaf modifications like tendrils and spines).',
    overviewTa: 'வேர் அமைப்புகள் மற்றும் அதன் உருமாற்றங்கள், தண்டு உருமாற்றங்கள், இலை அமைவு, நரம்பமைவு மற்றும் இலை உருமாற்றங்கள் பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Identify root modifications: Storage (Fusiform, Napiform), Support (Prop, Stilt), Respiration (Pneumatophores)',
      'Analyze stem modifications: Underground (Rhizome, Corm, Tuber, Bulb), Sub-aerial (Runner, Stolon, Sucker, Offset), Aerial (Phylloclade, Cladode, Thorns)',
      'Master leaf types, venation patterns (Reticulate vs Parallel), and phyllotaxy patterns (Alternate, Opposite, Whorled)'
    ],
    importance: 'Essential for field botany identification, taxonomic descriptions, and practical herbarium preparations.',
    realLifeApplications: [
      'Agricultural propagation using underground stems (Ginger rhizome, Potato eye tubers)',
      'Mangrove ecosystem protection via breathing roots (Avicennia pneumatophores)'
    ],
    introduction: 'Take a close look at a carrot, ginger, or cactus. None of these are ordinary organs! They are ingenious evolutionary adaptations of roots, stems, and leaves sculpted to store energy, provide mechanical support, and survive hostile droughts.',
    coreConcepts: [
      'Root System: Primary tap root vs fibrous root; modified tap roots for food storage, prop roots (Banyan), pneumatophores (Rhizophora).',
      'Shoot System: Nodes, internodes, terminal/axillary buds; cladodes, phylloclades (Opuntia).',
      'Leaf: Leaf base, petiole, lamina; reticulate vs parallel venation; ptyxis, heterophylly.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Root Modifications for Physiological & Mechanical Needs',
        explanation: 'Pneumatophores are negative geotropic respiratory roots emerging above marshy saline water with pneumathodes for gas exchange (Avicennia). Prop roots grow vertically downwards from horizontal banyan tree branches for pillar-like support.',
        keyPoints: ['Storage: Conical (Carrot), Fusiform (Radish), Napiform (Beetroot)', 'Breathing: Pneumatophores in halophytes']
      },
      {
        topic: '2. Aerial & Subaerial Stem Modifications',
        explanation: 'Phylloclade is a green, flattened, photosynthetic fleshy stem with unlimited growth functioning as leaf where leaves are modified into spines to prevent transpiration (Opuntia). Cladode is a cylindrical/flattened stem with limited growth of one or two internodes (Asparagus).',
        keyPoints: ['Phylloclade: Unlimited growth (Opuntia)', 'Cladode: One internode limited growth (Asparagus)']
      }
    ],
    definitions: [
      {
        term: 'Phyllode',
        termTa: 'பில்லோடு (இலைக்காம்பு உருமாற்றம்)',
        definition: 'A flattened, green, expanded leaf petiole or rachis that performs photosynthesis when lamina is reduced or falls off (Acacia auriculiformis).',
        definitionTa: 'இலைக்காம்பு தட்டையாக விரிவடைந்து ஒளிச்சேர்க்கை செய்யும் பசுமையான அமைப்பாக மாறுவது.'
      }
    ],
    scientificNames: [
      { commonName: 'Banyan Tree (Prop Roots)', binomialName: 'Ficus benghalensis', significance: 'Pillar-like adventitious prop roots supporting massive canopy' },
      { commonName: 'Mangrove / Black Mangrove', binomialName: 'Avicennia marina', significance: 'Negative geotropic pneumatophore breathing roots' },
      { commonName: 'Australian Acacia', binomialName: 'Acacia auriculiformis', significance: 'Classic textbook example of photosynthetic phyllode' }
    ],
    classifications: [
      {
        title: 'Types of Phyllotaxy (Leaf Arrangement on Stem)',
        criteria: 'Number and arrangement of leaves per node.',
        hierarchy: ['Alternate / Spiral (Hibiscus)', 'Opposite Superposed (Syzygium) & Opposite Decussate (Calotropis)', 'Whorled / Verticillate (Nerium, Alstonia)']
      }
    ],
    biologicalProcesses: [],
    importantTables: [
      {
        title: 'Differences between Phylloclade and Cladode',
        headers: ['Feature', 'Phylloclade', 'Cladode'],
        rows: [
          ['Growth', 'Unlimited growth with many nodes and internodes', 'Limited growth consisting of 1 or 2 internodes only'],
          ['Leaves', 'Modified into spines or scales', 'Scale leaves present at nodes'],
          ['Example', 'Opuntia (Prickly pear), Euphorbia', 'Asparagus, Ruscus']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Stem Modifications Classification',
        steps: ['Underground (Rhizome, Corm, Tuber, Bulb)', 'Sub-aerial (Runner, Stolon, Sucker, Offset)', 'Aerial (Tendril, Thorn, Phylloclade, Cladode, Bulbil)']
      }
    ],
    summary: 'Vegetative morphology examines the structural plasticity of root, stem, and leaf architectures adapted to diverse ecological niches.',
    shortNotes: ['Pneumatophores possess lenticels called pneumathodes.', 'Insectivorous pitcher leaves occur in Nepenthes.'],
    quickRevisionPoints: ['Storage taproots: Napiform = Beetroot; Fusiform = Radish; Conical = Carrot.'],
    examImportantPoints: ['Differentiate Phylloclade and Cladode with diagrams (3 Marks).', 'Describe respiratory roots (Pneumatophores) with diagram (3 Marks).'],
    faqs: [
      {
        question: 'How is a phyllode different from a phylloclade?',
        answer: 'A phyllode is a modified green photosynthetic petiole (leaf part), whereas a phylloclade is a modified green photosynthetic stem with nodes and internodes.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Calling ginger a root.', correction: 'Ginger is an underground modified stem (rhizome) because it bears distinct nodes, internodes, and scale leaves.' }],
    memoryTricks: [{ mnemonic: 'C-N-F = Carrot-Napiform-Fusiform', meaning: 'Conical: Carrot | Napiform: Beetroot | Fusiform: Radish' }],
    fiveKeyTakeaways: [
      'Roots modify for physiological storage and mechanical anchorage.',
      'Underground stems differ from roots by possessing nodes, internodes, and buds.',
      'Phylloclades and cladodes represent xerophytic adaptations replacing transpiratory leaves.',
      'Venation reflects internal vascular bundle orientation (Reticulate vs Parallel).',
      'Phyllotaxy optimizes light interception while preventing mutual shading.'
    ],
    diagrams: [
      {
        id: 'diag-3-1',
        name: 'Root and Stem Modifications',
        nameTa: 'வேர் மற்றும் தண்டு உருமாற்றங்கள்',
        purpose: 'Visual comparison of pneumatophores, prop roots, phylloclade, and rhizomes.',
        purposeTa: 'சுவாச வேர்கள், தூண் வேர்கள் மற்றும் இலைத்தொழில் தண்டுகளின் ஒப்பீட்டு வரைபடம்.',
        labels: ['Pneumatophore with Lenticels', 'Opuntia Phylloclade with Areoles & Spines', 'Ginger Rhizome with Nodes & Internodes', 'Prop Roots in Banyan'],
        explanation: 'Multi-panel diagram highlighting adaptations of vegetative organs.',
        explanationTa: 'பல்வேறு தாவர உறுப்புகளின் புற அமைப்பியல் தகவமைப்புகளை விளக்கும் படம்.',
        examImportance: 'High',
        commonQuestions: ['Draw and label a Phylloclade.', 'Illustrate Pneumatophores in Avicennia.'],
        aiImagePrompt: 'Clean scientific diagram showcasing 4 plant vegetative modifications: Avicennia pneumatophores, Opuntia phylloclade, Ginger rhizome, Banyan prop roots with crisp labels, textbook style.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '1 minute',
      sceneBreakdown: {
        scene1: 'Mangrove swamp camera panning across muddy tidal waters where spike-like pneumatophores rise vertically upward against gravity.',
        scene2: 'Cross-section of a pneumatophore showing spongy aerenchyma channels conducting atmospheric oxygen to submerged root tissues.',
        scene3: 'Xerophytic desert landscape where Opuntia stem swells into fleshy green pads, leaves reducing into protective sharp spines.',
        scene4: 'Time-lapse of ginger rhizome growing horizontally beneath soil, sprouting aerial shoots from nodes.'
      },
      cameraDirection: 'Slow underwater tilt rising above the marsh surface, entering microscopic cross-section with glowing oxygen gas arrows.',
      visualStyle: 'Photorealistic nature animation blending macro photography realism with vibrant educational 3D callouts.'
    },
    voiceNarration: {
      audioTitle: 'Ingenious Plant Architectures: Vegetative Adaptations',
      audioTitleTa: 'தாவரங்களின் வியக்கத்தக்க உடலமைப்பு உருமாற்றங்கள்',
      scriptEn: 'Did you know that not every green leafy-looking structure is a leaf? In arid deserts, Opuntia turns its stem into a succulent, water-storing solar panel called a phylloclade, while transforming its true leaves into spiky defense weapons. Down in coastal mangrove swamps where soil lacks oxygen, Avicennia roots shoot upward into the air like biological snorkels called pneumatophores! Vegetative morphology is the story of plants engineering smart survival machines.',
      scriptTa: 'பாலைவனத்தில் வாழும் சப்பாத்திக்கள்ளியின் பசுமையான தட்டைப் பகுதி இலையல்ல, அது தண்டு! சதுப்புநிலத்தில் மூச்சுவிட காற்றை நோக்கி மேலே வரும் சுவாச வேர்கள் தாவரங்களின் அதிசய தகவமைப்பு. உடலப் புற அமைப்பியல் பாடத்தின் மூலம் தாவரங்களின் புத்திசாலித்தனமான பரிணாமத்தை எளிதாகக் கற்கலாம்!',
      teacherTone: 'Curiosity-sparking, descriptive, crystal clear, friendly.'
    }
  },

  // =========================================================================
  // CHAPTER 4: REPRODUCTIVE MORPHOLOGY (இனப்பெருக்கப் புற அமைப்பியல்)
  // =========================================================================
  {
    chapterNumber: 4,
    unitNumber: 2,
    unitName: 'Unit 2: Plant Morphology and Taxonomy',
    unitNameTa: 'அலகு 2: புற அமைப்பியல் மற்றும் வகைப்பாட்டியல்',
    chapterName: 'Reproductive Morphology',
    chapterNameTa: 'இனப்பெருக்கப் புற அமைப்பியல்',
    overview: 'Inflorescence types (Racemose, Cymose, Mixed, Special types like Cyathium, Hypanthodium, Verticillaster), Flower morphology (Aestivation, Placentation, symmetry), Fruit classifications (Simple, Aggregate, Multiple), and Seed dispersal mechanisms.',
    overviewTa: 'மஞ்சரி வகைகள் (ரசீமோஸ், சைமோஸ், சிறப்பு மஞ்சரிகள்), மலரின் பாகங்கள், இதழமைவு, சூல் ஒட்டுமுறை, கனி வகைகள் மற்றும் விதை பரவுதல் பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Distinguish Racemose (Indeterminate, acropetal) and Cymose (Determinate, basipetal) inflorescences',
      'Explain special inflorescences: Cyathium (Euphorbia), Hypanthodium (Ficus), Verticillaster (Ocimum / Leucas)',
      'Classify aestivation types (Valvate, Twisted, Imbricate, Vexillary/Papilionaceous) and placentation types',
      'Differentiate true, false, parthenocarpic fruits and Simple vs Aggregate vs Multiple fruits'
    ],
    importance: 'Core foundation for Angiosperm floral formulas, floral diagrams, and fruit biology in competitive exams.',
    realLifeApplications: [
      'Pollination biology in fig-wasp obligate mutualism within Hypanthodium inflorescences',
      'Commercial seedless parthenocarpic fruit cultivation (Banana, seedless Grapes)'
    ],
    introduction: 'Flowers are evolutionary masterpieces designed to attract pollinators. Inflorescences coordinate hundreds of tiny florets into efficient visual landing pads, while fruits protect developing seeds and ensure their geographical journey across the globe!',
    coreConcepts: [
      'Inflorescence: Cluster of flowers on a peduncle; Racemose vs Cymose vs Special types.',
      'Flower Structure: Bracteate, symmetry (Actinomorphic vs Zygomorphic), Calyx, Corolla, Androecium, Gynoecium.',
      'Aestivation: Arrangement of sepals/petals in floral bud.',
      'Placentation: Pattern of ovule attachment along ovary wall (Marginal, Axile, Parietal, Free-central, Basal).',
      'Fruit: Ripened ovary; Simple (Fleshy/Dry), Aggregate (Etaerio), Multiple (Sorosis/Syconus).'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Special Inflorescences (Cyathium, Hypanthodium, Verticillaster)',
        explanation: 'Cyathium (Euphorbia) has cup-shaped involucre with nectar glands enclosing a single central achlamydeous female flower surrounded by multiple scorpioid cymes of male flowers. Hypanthodium (Ficus) has fleshy hollow flask-shaped receptacle with apical ostiole housing male, female, and sterile gall flowers.',
        keyPoints: ['Cyathium: Involucre cup, 1 female + many male flowers', 'Hypanthodium: Ficus syconus with gall flowers & blastophaga wasp entry', 'Verticillaster: False whorl at nodes in Lamiaceae (Leucas, Ocimum)']
      },
      {
        topic: '2. Types of Aestivation & Placentation',
        explanation: 'Aestivation types: Valvate (margins touch without overlapping), Twisted (regular overlapping), Imbricate (irregular overlapping), Vexillary (1 large posterior standard + 2 lateral wings + 2 fused keel petals). Placentation types: Marginal (Fabaceae/Pea), Axile (Solanaceae/Tomato), Parietal (Mustard/Cucumber), Free-central (Dianthus), Basal (Sunflower).',
        keyPoints: ['Vexillary aestivation is characteristic of Fabaceae (Papilionoideae)', 'Basal placentation produces single basal ovule (Asteraceae)']
      }
    ],
    definitions: [
      {
        term: 'Parthenocarpic Fruit',
        termTa: 'கருவுறாக்கனி (பார்த்தினோகார்பிக் கனி)',
        definition: 'Development of seedless fruit from an unfertilized ovary without the fusion of male and female gametes.',
        definitionTa: 'கருவுறுதல் நடைபெறாமல் சூற்பையிலிருந்து உருவாகும் விதையற்ற கனி.'
      }
    ],
    scientificNames: [
      { commonName: 'Holy Basil / Thulasi (Verticillaster)', binomialName: 'Ocimum sanctum', significance: 'Medicinal plant showing classic verticillaster inflorescence' },
      { commonName: 'Country Fig (Hypanthodium)', binomialName: 'Ficus carica', significance: 'Syconus fruit derived from hypanthodium inflorescence' },
      { commonName: 'Garden Pea (Marginal Placentation)', binomialName: 'Pisum sativum', significance: 'Model organism showing vexillary aestivation and marginal placentation' }
    ],
    classifications: [
      {
        title: 'Classification of Fruits',
        criteria: 'Number of flowers, carpel fusion, and pericarp nature.',
        hierarchy: ['Simple Fruits (Monocarpellary/Syncarpous ovary)', 'Aggregate Fruits (Polycarpellary apocarpous ovary -> Etaerio)', 'Multiple / Composite Fruits (Entire inflorescence -> Sorosis, Syconus)']
      }
    ],
    biologicalProcesses: [],
    importantTables: [
      {
        title: 'Differences between Racemose and Cymose Inflorescences',
        headers: ['Feature', 'Racemose Inflorescence', 'Cymose Inflorescence'],
        rows: [
          ['Main Axis Growth', 'Unlimited / Indeterminate growth', 'Limited / Determinate growth (ends in flower)'],
          ['Flower Opening Order', 'Centripetal (Periphery to center)', 'Centrifugal (Center to periphery)'],
          ['Arrangement of Flowers', 'Acropetal (Oldest at base, youngest at apex)', 'Basipetal (Oldest at top, youngest at base)'],
          ['Examples', 'Crotalaria, Brassica, Radish', 'Jasminum, Hibiscus, Calotropis']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Types of Placentation in Angiosperms',
        steps: ['Marginal (Pea)', 'Axile (Tomato, Lemon)', 'Parietal (Mustard, Argemone)', 'Free-Central (Dianthus, Primula)', 'Basal (Sunflower, Marigold)', 'Superficial (Nymphaea)']
      }
    ],
    summary: 'Reproductive morphology illuminates floral architecture, floral symmetries, placentation mechanics, and fruit-seed dissemination patterns.',
    shortNotes: ['Apple is a false fruit (Pome) where fleshy edible part is the thalamus.', 'Jackfruit (Sorosis) develops from an entire female spadix inflorescence.'],
    quickRevisionPoints: ['Vexillary aestivation = 1 Standard + 2 Wings + 2 Keels (Papilionaceous).', 'Cyathium mimics single flower but is a condensed inflorescence.'],
    examImportantPoints: ['Draw and describe the structure of Cyathium inflorescence (3/5 Marks).', 'Illustrate 5 types of Aestivation with floral diagrams (5 Marks).'],
    faqs: [
      {
        question: 'What are gall flowers in Hypanthodium inflorescence?',
        answer: 'Gall flowers are short-styled sterile female flowers located within the fleshy receptacle of Ficus that serve as oviposition (egg-laying) sites for the symbiotic Blastophaga pollinator wasp.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [{ mistake: 'Calling sunflower a single flower.', correction: 'Sunflower is not a single flower; it is a Head/Capitulum inflorescence containing hundreds of ray and disc florets.' }],
    memoryTricks: [{ mnemonic: 'V-T-I-V for Aestivation', meaning: 'Valvate -> Twisted -> Imbricate -> Vexillary' }],
    fiveKeyTakeaways: [
      'Inflorescences optimize pollination efficiency through clustered presentation.',
      'Floral symmetry (Actinomorphic vs Zygomorphic) correlates with specialized insect visits.',
      'Placentation dictates ovule spatial alignment and seed dispersal biology.',
      'Fruits are classified into simple, aggregate (etaerio), and multiple (composite).',
      'Seed adaptations ensure wind, water, animal, and explosive mechanism dispersal.'
    ],
    diagrams: [
      {
        id: 'diag-4-1',
        name: 'Types of Aestivation and Placentation',
        nameTa: 'இதழமைவு மற்றும் சூல் ஒட்டுமுறை வகைகள்',
        purpose: 'Visual guide to all 5 aestivation types and 5 major placentation arrangements.',
        purposeTa: 'இதழமைவு (வால்வேட், திருகு, தழுவு, வெக்சில்லரி) மற்றும் சூல் ஒட்டுமுறைகளை விளக்கும் வரைபடம்.',
        labels: ['Valvate', 'Twisted', 'Imbricate', 'Quincuncial', 'Vexillary', 'Marginal', 'Axile', 'Parietal', 'Free-Central', 'Basal'],
        explanation: 'Clean floral diagrams illustrating sepal/petal overlapping and cross-sections of ovaries showing ovule attachments.',
        explanationTa: 'மலரின் மொட்டு நிலையில் புல்லி/அல்லி அமைவு மற்றும் சூற்பை குறுக்குவெட்டு தோற்றங்கள்.',
        examImportance: 'Very High (Guaranteed 5-mark question in Unit tests and Board exams).',
        commonQuestions: ['Draw diagrams for Valvate, Twisted, Imbricate and Vexillary aestivation.', 'Illustrate Axile and Parietal placentation.'],
        aiImagePrompt: 'High-precision botanical schematic showing 5 aestivation types (Valvate, Twisted, Imbricate, Quincuncial, Vexillary) and 5 placentation cross-sections (Marginal, Axile, Parietal, Free-Central, Basal) with distinct labels, crisp vector layout.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Slow-motion blooming of a pea flower bud peeling back: 1 large dorsal vexillum, 2 lateral alae, and 2 fused keel petals protecting stamens.',
        scene2: 'Longitudinal slice entering hollow Hypanthodium of a green fig, revealing internal male florets at ostiole, fertile female florets, and short gall flowers.',
        scene3: 'Microscopic female Blastophaga wasp entering through ostiole, dusting pollen on fertile flowers while ovipositing in gall flowers.',
        scene4: '3D rotating cross-sections of developing ovaries showcasing Marginal (Pea pod opening) and Axile (Tomato chambers filled with seeds).'
      },
      cameraDirection: 'Seamless fly-through entering the microscopic ostiole tunnel of a Ficus fig into a 360-degree lit floral chamber.',
      visualStyle: 'Cinematic 3D animation with translucent floral petals, soft depth-of-field, and golden sunlight accents.'
    },
    voiceNarration: {
      audioTitle: 'The Floral Theater: Inflorescences, Aestivation & Fruits',
      audioTitleTa: 'பூக்களின் பிரபஞ்சம்: மஞ்சரிகள், இதழமைவு மற்றும் கனிகள்',
      scriptEn: 'Step inside the floral theater! Ever wondered why pea flowers have that distinctive winged shape? That is vexillary aestivation—where one giant banner petal waves to bees, two wing petals act as landing runways, and a fused keel boat secures the reproductive pollen organs inside! In inflorescences, nature groups tiny florets together, like in the Ficus fig where an entire enclosed universe of flowers lives inside a hollow sphere in secret partnership with tiny pollinator wasps. Learn these morphological blueprints, and you will read plants like an open book!',
      scriptTa: 'மலர்கள் என்பவை வெறும் அழகிற்கானது மட்டுமல்ல, அவை தாவரங்களின் அதிநவீன இனப்பெருக்கக் கருவிகள்! வெக்சில்லரி இதழமைவு முதல் அத்திப்பழத்தின் சிறப்பு ஹைபந்தோடிய மஞ்சரி வரை தாவரங்களின் இனப்பெருக்க அமைப்பை அறிவது தாவரவியலின் மிகச் சுவாரசியமான பகுதியாகும்!',
      teacherTone: 'Passionate, lively, visual, storytelling-driven.'
    }
  },

  // =========================================================================
  // CHAPTER 5: TAXONOMY OF ANGIOSPERMS (மூடுவிதைத் தாவரங்களின் வகைப்பாட்டியல்)
  // =========================================================================
  {
    chapterNumber: 5,
    unitNumber: 2,
    unitName: 'Unit 2: Plant Morphology and Taxonomy',
    unitNameTa: 'அலகு 2: புற அமைப்பியல் மற்றும் வகைப்பாட்டியல்',
    chapterName: 'Taxonomy of Angiosperms',
    chapterNameTa: 'மூடுவிதைத் தாவரங்களின் வகைப்பாட்டியல்',
    overview: 'Taxonomic principles, Bentham and Hooker system of classification (Merits & Demerits), Modern Biosystematics (Chemotaxonomy, Biosystematics, Molecular taxonomy, DNA barcoding), Detailed study of families: Fabaceae, Solanaceae, and Liliaceae.',
    overviewTa: 'பெந்தம் மற்றும் ஹூக்கர் வகைப்பாட்டு முறை, நவீன மூலக்கூறு வகைப்பாட்டியல், மற்றும் முக்கிய தாவரக் குடும்பங்கள்: பேபேசி, சொலானேசி, லிலியேசி பற்றிய விரிவான பாடம்.',
    learningObjectives: [
      'Understand Bentham and Hooker natural classification system with detailed schematic outline',
      'Critique merits and demerits of Bentham and Hooker system',
      'Explain modern biosystematics tools: Chemotaxonomy, Karyotaxonomy, Serotaxonomy, and DNA barcoding (rbcL, matK)',
      'Analyze vegetative, floral characters, floral formulas, and floral diagrams of Fabaceae (Clitoria ternatea), Solanaceae (Datura metel), and Liliaceae (Allium cepa)'
    ],
    importance: 'Highest yield chapter in Class 11 Botany Board Exam & Practical Examination (Specimen family dissection).',
    realLifeApplications: [
      'Crop improvement through phylogenetic knowledge of pulse crops (Fabaceae) and solanaceous vegetables (Solanaceae)',
      'Herbal medicine identification using DNA barcoding for anti-adulteration quality control'
    ],
    introduction: 'With over 400,000 flowering plant species on Earth, how do botanists identify, name, and catalogue each one without confusion? Enter Taxonomy and Systematics: the grand filing system of the botanical world founded on morphological clues and genetic barcodes!',
    coreConcepts: [
      'Bentham & Hooker System: Published in Genera Plantarum; natural system dividing seed plants into Dicotyledons, Gymnospermae, and Monocotyledons.',
      'Modern Biosystematics: Chemotaxonomy (secondary metabolites), Karyotaxonomy (chromosome number/morphology), Molecular Taxonomy (DNA sequences, rbcL/matK).',
      'Family Fabaceae: Butterfly-shaped flowers, diadelphous stamens (9)+1, marginal placentation, legume fruit.',
      'Family Solanaceae: Epipetalous stamens, persistent calyx, oblique ovary with swollen axile placenta, berry/capsule fruit.',
      'Family Liliaceae: Monocot family, perianth of 6 tepals in 2 whorls (3+3), epitepalous stamens (3+3), trilocular syncarpous superior ovary.'
    ],
    topicWiseExplanation: [
      {
        topic: '1. Bentham and Hooker Classification Outline',
        explanation: 'Seed plants (202 natural orders) divided into 3 classes: Class 1: Dicotyledonae (Polypetalae, Gamopetalae, Monochlamydeae), Class 2: Gymnospermae (3 families: Gnetaceae, Coniferae, Cycadaceae placed anomalously between Dicots and Monocots), Class 3: Monocotyledonae (7 series: Microspermae to Glumaceae).',
        keyPoints: ['Polypetalae: Thalamiflorae, Disciflorae, Calyciflorae', 'Gamopetalae: Inferae, Heteromerae, Bicarpellatae', 'Monochlamydeae: 8 series (Incompletae)']
      },
      {
        topic: '2. Detailed Study of Family Fabaceae (e.g., Clitoria ternatea)',
        explanation: 'Vegetative: Climbing herb, imparipinnate compound leaves, stipulate. Floral: Zygomorphic, papilionaceous corolla (1 standard + 2 wings + 2 keels, vexillary aestivation), Androecium: Diadelphous 10 stamens (9)+1, Gynoecium: Monocarpellary, superior, unilocular with marginal placentation. Fruit: Legume.',
        keyPoints: ['Floral formula: % ⚥ K(5) C1+2+(2) A(9)+1 G1', 'Economic value: Pulses (Cajanus cajan), Dye (Indigofera tinctoria), Fodder (Trifolium)']
      },
      {
        topic: '3. Detailed Study of Family Solanaceae (e.g., Datura metel)',
        explanation: 'Vegetative: Herb/shrub, alternate leaves. Floral: Actinomorphic, 5 united sepals with persistent/accrescent calyx, funnel-shaped corolla with plicate aestivation, Androecium: 5 epipetalous alternipetalous stamens, Gynoecium: Bicarpellary syncarpous, superior ovary placed obliquely at 45 degrees, swollen axile placenta with numerous ovules. Fruit: Spinous capsule / Berry.',
        keyPoints: ['Floral formula: ⊕ ⚥ K(5) C(5) A5 G(2)', 'Economic value: Food (Solanum tuberosum, S. lycopersicum), Medicine (Atropa belladonna, Withania somnifera), Tobacco (Nicotiana tabacum)']
      },
      {
        topic: '4. Detailed Study of Family Liliaceae (e.g., Allium cepa)',
        explanation: 'Vegetative: Perennial herbs with bulbs/rhizomes, radical linear leaves with parallel venation. Floral: Trimerous, Perianth: 6 tepals in two whorls of 3+3 (Biseriate), Androecium: 6 epitepalous stamens (3+3), Gynoecium: Tricarpellary syncarpous superior trilocular ovary with axile placentation. Fruit: Loculicidal capsule.',
        keyPoints: ['Floral formula: ⊕ ⚥ P3+3 or P(3+3) A3+3 G(3)', 'Economic value: Food (Allium cepa, A. sativum), Medicine (Aloe vera), Ornamental (Gloriosa superba - State flower of Tamil Nadu)']
      }
    ],
    definitions: [
      {
        term: 'DNA Barcoding',
        termTa: 'டி.என்.ஏ பார்கோடிங்',
        definition: 'A molecular taxonomic technique that uses short standardized genetic markers (e.g., rbcL, matK in plants) from a standard genome region to rapidly identify species.',
        definitionTa: 'தாவர இனங்களை விரைவாக அடையாளம் காண rbcL மற்றும் matK போன்ற குறுகிய மரபணு வரிசைகளைப் பயன்படுத்தும் நவீன முறை.'
      }
    ],
    scientificNames: [
      { commonName: 'Flame Lily (TN State Flower)', binomialName: 'Gloriosa superba', significance: 'Liliaceae family member, source of Colchicine alkaloid' },
      { commonName: 'Ashwagandha / Indian Ginseng', binomialName: 'Withania somnifera', significance: 'Solanaceae medicinal plant for stress and vitality' },
      { commonName: 'Butterfly Pea / Sangu Pushpam', binomialName: 'Clitoria ternatea', significance: 'Fabaceae model plant for floral dissection and memory enhancer' }
    ],
    classifications: [
      {
        title: 'Bentham and Hooker System Hierarchy Outline',
        criteria: 'Seed plant natural morphological affinities.',
        hierarchy: ['Kingdom: Plantae -> Division: Phanerogamae', 'Class 1: Dicotyledonae (Polypetalae, Gamopetalae, Monochlamydeae)', 'Class 2: Gymnospermae (Gnetaceae, Coniferae, Cycadaceae)', 'Class 3: Monocotyledonae (7 Series, 34 Families)']
      }
    ],
    biologicalProcesses: [],
    importantTables: [
      {
        title: 'Comparative Diagnostic Features of Fabaceae, Solanaceae, and Liliaceae',
        headers: ['Feature', 'Fabaceae', 'Solanaceae', 'Liliaceae'],
        rows: [
          ['Symmetry', 'Zygomorphic (%)', 'Actinomorphic (⊕)', 'Actinomorphic (⊕)'],
          ['Calyx / Corolla / Perianth', 'K(5) C1+2+(2) (Papilionaceous)', 'K(5) C(5) (Funnel/Rotate)', 'P(3+3) (Perianth with tepals)'],
          ['Androecium', '10 Diadelphous (9)+1', '5 Epipetalous free', '6 (3+3) Epitepalous'],
          ['Gynoecium', 'G1 (Monocarpellary)', 'G(2) (Bicarpellary oblique)', 'G(3) (Tricarpellary)'],
          ['Placentation', 'Marginal', 'Swollen Axile', 'Axile'],
          ['Diagnostic Fruit', 'Legume / Pod', 'Berry or Capsule', 'Loculicidal Capsule / Berry']
        ]
      }
    ],
    flowcharts: [
      {
        title: 'Outline of Bentham and Hooker Classification',
        steps: ['Seed Plants (Phanerogams, 202 Natural Orders)', 'Dicotyledonae (2 Cotyledons, Reticulate venation) -> Polypetalae, Gamopetalae, Monochlamydeae', 'Gymnospermae (Naked Ovules, 3 Families)', 'Monocotyledonae (1 Cotyledon, Parallel venation, 7 Series)']
      }
    ],
    summary: 'Taxonomy integrates historical morphological systems (Bentham & Hooker) with molecular barcoding. Mastery of Fabaceae, Solanaceae, and Liliaceae equips students with floral formulas, floral diagrams, and systematic botany identification skills.',
    shortNotes: [
      'Bentham and Hooker demerit: Placement of Gymnosperms in between Dicots and Monocots is anomalous and unphylogenetic.',
      'Oblique ovary with swollen placenta is the single most diagnostic feature of Solanaceae.',
      'State flower of Tamil Nadu: Gloriosa superba (Liliaceae).'
    ],
    quickRevisionPoints: [
      'Fabaceae Floral Formula: % ⚥ K(5) C1+2+(2) A(9)+1 G1',
      'Solanaceae Floral Formula: ⊕ ⚥ K(5) C(5) A5 G(2)',
      'Liliaceae Floral Formula: ⊕ ⚥ P(3+3) A3+3 G(3)',
      'Genera Plantarum was co-authored by George Bentham and Sir Joseph Dalton Hooker.'
    ],
    examImportantPoints: [
      'Give the systematic outline of Bentham and Hooker classification with merits and demerits (5 Marks).',
      'Write the botanical description of Datura metel (Solanaceae) with floral formula and floral diagram (5 Marks).',
      'Write the botanical description of Clitoria ternatea (Fabaceae) with floral formula and floral diagram (5 Marks).'
    ],
    faqs: [
      {
        question: 'What is the major demerit of Bentham and Hooker classification regarding Gymnosperms?',
        answer: 'Bentham and Hooker placed Gymnosperms in an intermediate position between Dicotyledons and Monocotyledons, which is evolutionary erroneous because Gymnosperms originated much earlier than both groups.',
        markWeight: '2 Marks'
      },
      {
        question: 'Why is the ovary in Solanaceae described as oblique?',
        answer: 'The bicarpellary syncarpous ovary is tilted at a 45-degree angle to the anteroposterior plane of the flower due to the proliferation of a swollen axile placenta.',
        markWeight: '2 Marks'
      }
    ],
    commonMistakes: [
      { mistake: 'Writing A10 for Fabaceae androecium.', correction: 'Always write A(9)+1 to show the diadelphous condition (9 united in a tube + 1 free posterior stamen).' }
    ],
    memoryTricks: [
      { mnemonic: 'F-S-L = 1 - 2 - 3 Carpels', meaning: 'Fabaceae: G1 (Mono) | Solanaceae: G(2) (Bi) | Liliaceae: G(3) (Tri)' }
    ],
    fiveKeyTakeaways: [
      'Bentham & Hooker remains the premier natural classification for herbarium curation worldwide.',
      'DNA barcoding uses conserved rbcL/matK markers for tamper-proof species discrimination.',
      'Fabaceae is characterized by diadelphous stamens (9)+1 and legume fruit.',
      'Solanaceae features epipetalous stamens and an oblique ovary with swollen axile placenta.',
      'Liliaceae is recognized by trimerous flowers with biseriate perianth P(3+3).'
    ],
    diagrams: [
      {
        id: 'diag-5-1',
        name: 'Floral Diagram and Floral Formula of Clitoria ternatea (Fabaceae)',
        nameTa: 'சங்குப்பூ (கிளைட்டோரியா டெர்னேசியா) மலர் வரைபடம் மற்றும் மலர் சூத்திரம்',
        purpose: 'Standard examination floral diagram showing bracts, calyx, papilionaceous corolla, diadelphous stamens, and monocarpellary ovary.',
        purposeTa: 'பேபேசி குடும்பத்தின் மலர் வரைபடம் மற்றும் மலர் சூத்திர அமைப்பு.',
        labels: ['Mother Axis (Dot)', 'Bract & Bracteoles', 'Valvate Calyx K(5)', 'Standard Petal', 'Wing Petals', 'Keel Petals (Fused)', 'Diadelphous Stamens (9)+1', 'Monocarpellary Ovary with Marginal Ovule'],
        explanation: 'Shows zygomorphic orientation with posterior standard petal and single anterior stamen free from the 9 fused stamens.',
        explanationTa: 'இருபக்கச் சமச்சீர் கொண்ட மலர் வரைபடம். 9+1 தாள் அமைப்பும் விளிம்பு சூல் ஒட்டுமுறையும் தெளிவாகக் காட்டப்பட்டுள்ளது.',
        examImportance: 'Extremely High (Repeatedly tested 5-mark practical and theory question).',
        commonQuestions: ['Draw the floral diagram and write the floral formula of Clitoria ternatea.', 'Describe the androecium and gynoecium of Fabaceae.'],
        aiImagePrompt: 'Textbook vector scientific illustration of the floral diagram of Clitoria ternatea (Fabaceae) showing Mother Axis, Bracts, K(5), C1+2+(2), A(9)+1, G1 with crisp labels and matching floral formula.'
      },
      {
        id: 'diag-5-2',
        name: 'Floral Diagram and Floral Formula of Datura metel (Solanaceae)',
        nameTa: 'ஊமத்தை (டட்டூரா மெட்டல்) மலர் வரைபடம் மற்றும் மலர் சூத்திரம்',
        purpose: 'Displays actinomorphic pentamerous flower with epipetalous stamens and obliquely oriented bicarpellary ovary.',
        purposeTa: 'சொலானேசி குடும்பத்தின் மலர் வரைபடம். 45 டிகிரி சாய்வான இருசூலக இலை அமைப்பு.',
        labels: ['Mother Axis', 'Persistent Calyx K(5)', 'Plicate Corolla C(5)', '5 Epipetalous Alternipetalous Stamens', 'Obliquely Oriented Ovary G(2)', 'Swollen Axile Placenta with Ovules'],
        explanation: 'The bicarpellary ovary is oriented at 45 degrees relative to the median axis with epipetalous stamen lines.',
        explanationTa: 'ஆரச்சமச்சீர் மலர் வரைபடம். அல்லி இணைந்த மகரந்தத்தாள்கள் மற்றும் சாய்ந்த சூற்பை அமைப்பு.',
        examImportance: 'Extremely High (Standard 5-mark question in Annual Board Exam).',
        commonQuestions: ['Draw the floral diagram of Datura metel and explain its floral characters.'],
        aiImagePrompt: 'Textbook scientific illustration of the floral diagram of Datura metel (Solanaceae) with Mother Axis, K(5), C(5), A5 epipetalous, G(2) oblique ovary with swollen placenta and matching floral formula.'
      }
    ],
    aiVisualization: {
      format: '3D Scientific Animation',
      duration: '2 minutes',
      sceneBreakdown: {
        scene1: 'Virtual herbarium room zooming onto George Bentham and Joseph Dalton Hooker’s classic Genera Plantarum treatise, expanding into an interactive 3D phylogenetic tree of 202 natural orders.',
        scene2: '3D dissection of a blue Clitoria ternatea flower: calyx peeling away, revealing the (9)+1 diadelphous stamen sheath guarding the central green monocarpellary pistil.',
        scene3: 'Cross-sectional slicing of a Datura flower bud demonstrating epipetalous stamen stalks fusing directly onto corolla tube walls and zooming into the 45-degree obliquely tilted ovary.',
        scene4: 'Gloriosa superba (Tamil Nadu State Flower) blooming, exposing bright red-yellow reflexed perianth tepals and radiating horizontal stamens with versatile anthers.'
      },
      cameraDirection: 'Dynamic virtual magnifying lens rotating 360 degrees around 3D floral models, peeling floral whorls layer-by-layer with animated labels.',
      visualStyle: 'Studio-lit botanical 3D rendering with hyper-accurate morphological anatomy, vibrant colors, and real-time interactive formula overlays.'
    },
    voiceNarration: {
      audioTitle: 'Unlocking the Botanical Code: The Families of Angiosperms',
      audioTitleTa: 'தாவரக் குடும்பங்களின் ரகசியங்களை அறிதல்: பேபேசி, சொலானேசி, லிலியேசி',
      scriptEn: 'Welcome botanists! Taxonomy is like learning the secret code of plant design. When you look at a Fabaceae pulse flower, remember the secret formula: 1 large standard petal, 2 wings, and 2 fused keels shielding 9 plus 1 diadelphous stamens! In Solanaceae, notice how the 5 stamens fuse directly onto the corolla tube, anchored above a unique tilted ovary with a swollen cushion of seeds. And in Liliaceae, look for the elegant trimerous symmetry of 3 plus 3 perianth tepals seen in our magnificent state flower, Gloriosa superba. Master these three family formulas, and you will ace both your theory papers and laboratory practicals!',
      scriptTa: 'வணக்கம் மாணவர்களே! தாவரங்களை அடையாளம் காணும் ரகசிய திறவுகோல் வகைப்பாட்டியல் ஆகும். பேபேசி குடும்பத்தில் 9+1 மகரந்தத்தாள் அமைப்பையும், சொலானேசியில் அல்லியொட்டிய மகரந்தத்தாள்களுடன் கூடிய 45 டிகிரி சாய்ந்த சூற்பையையும், லிலியேசியில் பூவிதழ்களையும் நினைவில் வைத்துக் கொண்டால் முழு மதிப்பெண்களை எளிதாகப் பெறலாம்!',
      teacherTone: 'Authoritative, engaging, high-energy exam mentor, warm and encouraging.'
    }
  }
];

// Note: Additional chapters (Units 3, 4, 5) metadata & complete chapter list
export const ALL_15_BOTANY_CHAPTERS_INDEX = [
  { chapterNumber: 1, unitNumber: 1, unitName: 'Unit 1: Diversity of Living World', nameEn: 'Living World', nameTa: 'உயிர்ப்பிரபஞ்சம்' },
  { chapterNumber: 2, unitNumber: 1, unitName: 'Unit 1: Diversity of Living World', nameEn: 'Plant Kingdom', nameTa: 'தாவர உலகம்' },
  { chapterNumber: 3, unitNumber: 2, unitName: 'Unit 2: Plant Morphology & Taxonomy', nameEn: 'Vegetative Morphology', nameTa: 'தாவர புற அமைப்பியல் - உடலப் புற அமைப்பியல்' },
  { chapterNumber: 4, unitNumber: 2, unitName: 'Unit 2: Plant Morphology & Taxonomy', nameEn: 'Reproductive Morphology', nameTa: 'இனப்பெருக்கப் புற அமைப்பியல்' },
  { chapterNumber: 5, unitNumber: 2, unitName: 'Unit 2: Plant Morphology & Taxonomy', nameEn: 'Taxonomy of Angiosperms', nameTa: 'மூடுவிதைத் தாவரங்களின் வகைப்பாட்டியல்' },
  { chapterNumber: 6, unitNumber: 3, unitName: 'Unit 3: Cell Biology and Biomolecules', nameEn: 'Cell: The Unit of Life', nameTa: 'செல்: வாழ்வின் அலகு' },
  { chapterNumber: 7, unitNumber: 3, unitName: 'Unit 3: Cell Biology and Biomolecules', nameEn: 'Cell Cycle', nameTa: 'செல் சுழற்சி' },
  { chapterNumber: 8, unitNumber: 3, unitName: 'Unit 3: Cell Biology and Biomolecules', nameEn: 'Biomolecules', nameTa: 'உயிர் மூலக்கூறுகள்' },
  { chapterNumber: 9, unitNumber: 4, unitName: 'Unit 4: Plant Anatomy', nameEn: 'Tissue and Tissue System', nameTa: 'திசுக்கள் மற்றும் திசுத்தொகுப்பு' },
  { chapterNumber: 10, unitNumber: 4, unitName: 'Unit 4: Plant Anatomy', nameEn: 'Secondary Growth', nameTa: 'இரண்டாம் நிலை வளர்ச்சி' },
  { chapterNumber: 11, unitNumber: 5, unitName: 'Unit 5: Plant Physiology', nameEn: 'Transport in Plants', nameTa: 'தாவரங்களில் கடத்து முறை' },
  { chapterNumber: 12, unitNumber: 5, unitName: 'Unit 5: Plant Physiology', nameEn: 'Mineral Nutrition', nameTa: 'கனிம ஊட்டம்' },
  { chapterNumber: 13, unitNumber: 5, unitName: 'Unit 5: Plant Physiology', nameEn: 'Photosynthesis', nameTa: 'ஒளிச்சேர்க்கை' },
  { chapterNumber: 14, unitNumber: 5, unitName: 'Unit 5: Plant Physiology', nameEn: 'Respiration', nameTa: 'சுவாசம்' },
  { chapterNumber: 15, unitNumber: 5, unitName: 'Unit 5: Plant Physiology', nameEn: 'Plant Growth and Development', nameTa: 'தாவர வளர்ச்சியும் படிமலர்ச்சியும்' }
];
