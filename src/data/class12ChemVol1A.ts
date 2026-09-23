import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Chemistry - Volume 1 Part A (Units 1–5: Inorganic Chemistry)
 * 1. Metallurgy (உலோகவியல்)
 * 2. p-Block Elements - I (p-தொகுதி தனிமங்கள் - I)
 * 3. p-Block Elements - II (p-தொகுதி தனிமங்கள் - II)
 * 4. Transition and Inner Transition Elements (இடைநிலை மற்றும் உள் இடைநிலைத் தனிமங்கள்)
 * 5. Coordination Chemistry (அணைவு வேதியியல்)
 */

export const CHEM_VOL1A_CHAPTERS: Chapter[] = [
  {
    id: 'c12_chem_u1',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 1,
    titleEn: 'Unit 1: Metallurgy (உலோகவியல்)',
    titleTa: 'அலகு 1: உலோகவியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u2',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 2,
    titleEn: 'Unit 2: p-Block Elements - I (p-தொகுதி தனிமங்கள் - I)',
    titleTa: 'அலகு 2: p-தொகுதி தனிமங்கள் - I',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u3',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 3,
    titleEn: 'Unit 3: p-Block Elements - II (p-தொகுதி தனிமங்கள் - II)',
    titleTa: 'அலகு 3: p-தொகுதி தனிமங்கள் - II',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u4',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 4,
    titleEn: 'Unit 4: Transition and Inner Transition Elements (இடைநிலை & உள் இடைநிலைத் தனிமங்கள்)',
    titleTa: 'அலகு 4: இடைநிலை மற்றும் உள் இடைநிலைத் தனிமங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u5',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 1,
    unitNameEn: 'Volume 1: Inorganic Chemistry',
    unitNameTa: 'தொகுதி 1: கனிம வேதியியல்',
    chapterNumber: 5,
    titleEn: 'Unit 5: Coordination Chemistry (அணைவு வேதியியல்)',
    titleTa: 'அலகு 5: அணைவு வேதியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CHEM_VOL1A_NOTES: Record<string, NoteItem> = {
  c12_chem_u1: {
    id: 'note_c12_chem_u1',
    chapterId: 'c12_chem_u1',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Metallurgy: Concentration, Extraction, Ellingham Diagram, and Refining',
    titleTa: 'உலோகவியல்: அடர்ப்பித்தல், பிரித்தெடுத்தல், எலிங்கம் வரைபடம் மற்றும் தூய்மையாக்கல்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Complete revision of ores, Froth Flotation, Ellingham Diagram thermodynamics, and Mond process.',
    changeNoteTa: 'தாதுக்கள், நுரை மிதப்பு முறை, எலிங்கம் வரைபடம் மற்றும் மாண்ட் முறை விரிவாகச் சேர்க்கப்பட்டன.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Mineral vs Ore (கனிமம் vs தாது)
* **Mineral**: A naturally occurring chemical substance obtained by mining which contains the metal in free or combined state.
* **Ore**: Minerals that contain a high percentage of metal from which the metal can be extracted economically and conveniently.
* *Rule*: All ores are minerals, but not all minerals are ores. (e.g., Bauxite is an ore of Aluminium; clay is merely a mineral).

### 2. Concentration of Ores (தாதுக்களை அடர்ப்பித்தல்)
1. **Gravity Separation / Hydraulic Washing**: Used for heavy oxide ores (Haematite, Tinstone) by running a stream of water over vibrating grooved tables.
2. **Froth Flotation (நுரை மிதப்பு முறை)**: Used for sulphide ores (Galena $PbS$, Zinc blende $ZnS$, Copper pyrites $CuFeS_2$).
   * *Frothing agent*: Pine oil or eucalyptus oil.
   * *Collector*: Sodium ethyl xanthate (makes ore particles water-repellent).
   * *Depressing agent*: $NaCN$ or $KCN$ (selectively suppresses $ZnS$ in $PbS$ mixture by forming $[Zn(CN)_4]^{2-}$ complex).
3. **Leaching (வேதி முறையில் கழுவுதல்)**: Cyanide leaching (Gold/Silver), Ammonia leaching (Nickel/Cobalt), Alkali leaching (Bauxite), Acid leaching.
4. **Magnetic Separation**: Separates magnetic wolframite ($FeWO_4$) from non-magnetic tinstone ($SnO_2$).

### 3. Extraction of Crude Metal & Ellingham Diagram
* **Calcination**: Heating ore in absence/limited supply of air below melting point (expels moisture, $CO_2$).
* **Roasting**: Heating sulphide ore in excess oxygen below melting point to convert into oxide (expels $SO_2$).
* **Ellingham Diagram (எலிங்கம் வரைபடம்)**: Plots standard Gibbs free energy of formation of oxides ($\\Delta G^\\circ$) versus absolute temperature ($T$).
  * The lower a line on the Ellingham diagram, the greater the stability of its oxide.
  * A metal can reduce the oxide of any other metal whose line lies **above** it at a given temperature.
  * Point of intersection represents the temperature threshold where reduction becomes thermodynamically feasible ($\\Delta G < 0$).

### 4. Refining Methods (உலோகங்களைத் தூய்மையாக்குதல்)
* **Mond Process (Nickel)**: Nickel reacts with $CO$ at $350\\text{ K}$ to form volatile $Ni(CO)_4$, which decomposes at $460\\text{ K}$ to yield pure nickel ($99.9\\%$).
* **Van Arkel Process (Titanium & Zirconium)**: $Ti + 2I_2 \\xrightarrow{550\\text{ K}} TiI_4\\text{ (volatile)} \\xrightarrow{\\text{tungsten filament, }1800\\text{ K}} Ti + 2I_2$.
* **Zone Refining (மண்டல சுத்திகரிப்பு)**: Based on fractional crystallization; used for semiconductors ($Ge, Si, Ga$).`,
    bodyTa: `### 1. கனிமம் மற்றும் தாது
* இயற்கையில் கிடைக்கும் கனிமங்களிலிருந்து சிக்கனமாகவும் எளிதாகவும் உலோகத்தைப் பிரித்தெடுக்க முடிந்தால் அது **தாது (Ore)** எனப்படும்.
* "அனைத்து தாதுக்களும் கனிமங்களே; ஆனால் அனைத்து கனிமங்களும் தாதுக்கள் அல்ல." (எ.கா: பாக்சைட் அலுமினியத்தின் தாது; களிமண் வெறும் கனிமம்).

### 2. தாதுக்களை அடர்ப்பிக்கும் முறைகள்
1. **புவிஈர்ப்பு முறை**: கனமான ஆக்சைடு தாதுக்கள் (ஹேமடைட்).
2. **நுரை மிதப்பு முறை**: சல்பைடு தாதுக்கள் (கலினா $PbS$, ஜிங்க் பிளண்ட் $ZnS$).
   * நுரை உருவாக்கும் காரணி: பைன் எண்ணெய்.
   * சேகரிப்பான்: சோடியம் எத்தில் சாந்தேட்.
   * குறைக்கும் காரணி: $NaCN$ ($ZnS$-ஐ குறைத்து $PbS$-ஐ மட்டும் மிதக்கச் செய்கிறது).
3. **வேதிக் கழுவுதல்**: சயனைடு முறை (தங்கம்), கார முறை (பாக்சைட்).
4. **காந்தப் பிரிப்பு முறை**: காந்தத் தன்மையுள்ள உல்ப்ரமைட்டை வெள்ளீயக் கல்லிலிருந்து ($SnO_2$) பிரித்தல்.

### 3. எலிங்கம் வரைபடம் (Ellingham Diagram)
* உலோக ஆக்சைடு உருவாவதற்கான திட்ட கிப்ஸ் கட்டிலா ஆற்றல் மாறுபாடு ($\\Delta G^\\circ$) மற்றும் வெப்பநிலை ($T$) இடையேயான வரைபடம்.
* வரைபடத்தில் கீழேயுள்ள ஒரு உலோகம் தனக்கு மேலே அமைந்துள்ள எந்தவொரு உலோக ஆக்சைடையும் ஒடுக்கும் ஆற்றல் கொண்டது.
* $\\Delta G$ எதிர்மறை மதிப்பாகும் போது மட்டுமே ஒடுக்க வினை சாத்தியமாகும்.

### 4. தூய்மையாக்கல் முறைகள்
* **மாண்ட் முறை (நிக்கல்)**: $Ni + 4CO \\xrightarrow{350\\text{ K}} Ni(CO)_4 \\xrightarrow{460\\text{ K}} Ni + 4CO$.
* **வான் ஆர்கல் முறை (Ti, Zr)**: $Ti + 2I_2 \\rightarrow TiI_4 \\rightarrow Ti + 2I_2$ (டங்ஸ்டன் இழை $1800\\text{ K}$).
* **மண்டல சுத்திகரிப்பு**: குறைகடத்திகள் ($Si, Ge$) பின்னப் படிகமாக்கல் மூலம் தூய்மையாக்கப்படுகின்றன.`,
    keyFormulas: [
      {
        nameEn: 'Gibbs Free Energy for Reduction Feasibility',
        nameTa: 'கிப்ஸ் கட்டிலா ஆற்றல் சமன்பாடு',
        formula: '\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ < 0',
        explanationEn: 'Thermodynamic criterion: A reduction reaction is spontaneous only when ΔG is strictly negative.',
        explanationTa: 'ΔG மதிப்பு எதிர்மறையாக (<0) உள்ள போது மட்டுமே ஒரு ஒடுக்க வினை தன்னிச்சையாக நிகழும்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Ellingham diagram rules.',
        changeNoteTa: 'எலிங்கம் வரைபட விதிகளுடன் விரிவான குறிப்புகள்.'
      }
    ]
  },

  c12_chem_u2: {
    id: 'note_c12_chem_u2',
    chapterId: 'c12_chem_u2',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'p-Block Elements - I: Boron & Carbon Groups, Inert Pair Effect, and Allotropes',
    titleTa: 'p-தொகுதி தனிமங்கள் - I: போரான் & கார்பன் தொகுதிகள், மந்த இணை விளைவு மற்றும் புறவேற்றுமை வடிவங்கள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Inert pair effect, Borax bead test, Diborane structure, Carbon allotropes, Silicones, and Silicates.',
    changeNoteTa: 'மந்த இணை விளைவு, வெண்கார மணி சோதனை, டைபோரேன் அமைப்பு, கார்பன் வடிவங்கள் மற்றும் சிலிகேட்டுகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. General Characteristics & Inert Pair Effect (மந்த இணை விளைவு)
* General valence electron configuration: $ns^2 np^{1-6}$.
* **Inert Pair Effect**: In heavier p-block elements ($Tl, Pb, Bi$), the inner $s$-electrons ($ns^2$) do not participate in bonding due to poor shielding of intervening $d$ and $f$ orbitals.
  * Consequently, lower oxidation state becomes more stable down the group: $Tl^+$ is more stable than $Tl^{3+}$; $Pb^{2+}$ is more stable than $Pb^{4+}$.

### 2. Group 13: Boron Family
* **Borax ($Na_2[B_4O_5(OH)_4]\\cdot 8H_2O$)**:
  * *Borax Bead Test*: Forms colored glassy beads with transition metal ions (Cobalt gives royal blue bead of $Co(BO_2)_2$).
* **Diborane ($B_2H_6$) Structure**:
  * Contains two 3-center-2-electron ($3c-2e^-$) 'Banana' bridge bonds ($B-H-B$) and four standard 2-center-2-electron ($2c-2e^-$) terminal $B-H$ bonds.
  * Boron is $sp^3$ hybridized.
* **Borazole / Inorganic Benzene ($B_3N_3H_6$)**:
  * Prepared by reaction of diborane with ammonia: $3B_2H_6 + 6NH_3 \\xrightarrow{\\Delta} 2B_3N_3H_6 + 12H_2$.

### 3. Group 14: Carbon Family
* **Allotropes of Carbon**:
  * **Diamond**: $sp^3$ hybridized, tetrahedral 3D giant network, hardest natural substance, electrical insulator.
  * **Graphite**: $sp^2$ hybridized hexagonal layers held by weak Van der Waals forces, electrical conductor due to delocalized $\\pi$-electrons, solid lubricant.
  * **Fullerenes ($C_{60}$ / Buckyball)**: Soccer-ball structure with 20 six-membered rings and 12 five-membered rings.
  * **Graphene**: Single two-dimensional layer of carbon atoms with extraordinary electrical conductivity and tensile strength.
* **Silicones & Silicates**:
  * **Silicones**: High thermal stability, water-repellent organosilicon polymers ($R_2SiO$) repeating units.
  * **Basic structural unit of silicates**: Orthosilicate tetrahedral unit $[SiO_4]^{4-}$.`,
    bodyTa: `### 1. மந்த இணை விளைவு (Inert Pair Effect)
* p-தொகுதியின் கனமான தனிமங்களில் ($Tl, Pb, Bi$), உள் $s$-எலக்ட்ரான்கள் ($ns^2$) பிணைப்பில் ஈடுபடாமல் மந்தமாக இருக்கும் தன்மை மந்த இணை விளைவு எனப்படும்.
* இதனால் தொகுதியில் கீழ்நோக்கிச் செல்லும்போது குறைந்த ஆக்ஸிஜனேற்ற நிலை அதிக நிலைப்புத்தன்மை பெறுகிறது ($Tl^+$ ஆனது $Tl^{3+}$-ஐ விட நிலைப்புத்தன்மை உடையது; $Pb^{2+}$ ஆனது $Pb^{4+}$-ஐ விட நிலைப்புத்தன்மை கொண்டது).

### 2. போரான் குடும்பம் (தொகுதி 13)
* **வெண்கார மணி சோதனை (Borax Bead Test)**: இடைநிலை உலோகங்களை அடையாளம் காணப் பயன்படுகிறது (கோபால்ட் நீல நிற மணியைத் தரும்).
* **டைபோரேன் ($B_2H_6$) அமைப்பு**:
  * இரண்டு $3c-2e^-$ மூன்று மைய இரு எலக்ட்ரான் 'வாழைப்பழ பிணைப்புகள்' (Banana bonds).
  * நான்கு $2c-2e^-$ முனைய பிணைப்புகள்.
* **கனிம பென்சீன் (போரசீன் - $B_3N_3H_6$)**: டைபோரேன் மற்றும் அம்மோனியா வினைபுரிந்து உருவாகிறது.

### 3. கார்பன் குடும்பம் (தொகுதி 14)
* **வைரம்**: $sp^3$ இனக்கலப்பு, நான்முகி கட்டமைப்பு, மின்கடத்தாப் பொருள், மிகக் கடினமானது.
* **கிராஃபைட்**: $sp^2$ இனக்கலப்பு, அறுகோண அடுக்குகள், சிறந்த மின்கடத்தி (விலகிச் செல்லும் $\\pi$ எலக்ட்ரான்கள்), உயவுப் பொருள்.
* **ஃபுல்லரீன் ($C_{60}$)**: 20 ஆறு உறுப்பினர் வளையங்கள் மற்றும் 12 ஐந்து உறுப்பினர் வளையங்கள் கொண்ட கால்பந்து வடிவம்.
* **சிலிகேட்டுகள்**: அடிப்படை அலகு $[SiO_4]^{4-}$ நான்முகி.`,
    keyFormulas: [
      {
        nameEn: 'Diborane Banana Bond Electron Count',
        nameTa: 'டைபோரேன் வாழைப்பழ பிணைப்பு',
        formula: '2 \\times (3c-2e^-) \\text{ bridge bonds } + 4 \\times (2c-2e^-) \\text{ terminal bonds}',
        explanationEn: 'Total 12 valence electrons satisfy 6 bonds through electron-deficient multicenter bridge bonds.',
        explanationTa: 'எலக்ட்ரான் குறை பிணைப்பு மூலம் 12 எலக்ட்ரான்கள் 6 பிணைப்புகளை உருவாக்குகின்றன.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Diborane bonding.',
        changeNoteTa: 'டைபோரேன் அமைப்பு விளக்கங்களுடன் பாடக் குறிப்புகள்.'
      }
    ]
  },

  c12_chem_u3: {
    id: 'note_c12_chem_u3',
    chapterId: 'c12_chem_u3',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'p-Block Elements - II: Nitrogen, Oxygen, Halogens, and Noble Gases',
    titleTa: 'p-தொகுதி தனிமங்கள் - II: நைட்ரஜன், ஆக்சிஜன், ஆலசன்கள் மற்றும் மந்த வாயுக்கள்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Ostwald process, Contact process, Deacon process, Interhalogens, and Xenon fluorides.',
    changeNoteTa: 'ஆஸ்ட்வால்ட் முறை, தொடு முறை, டீக்கன் முறை, ஹாலஜனிடைச் சேர்மங்கள் மற்றும் செனான் புளூரைடுகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Group 15: Nitrogen Family
* **Nitric Acid ($HNO_3$) Preparation by Ostwald's Process**:
  1. $4NH_3 + 5O_2 \\xrightarrow{Pt/Rh, 500\\text{ K}} 4NO + 6H_2O$
  2. $2NO + O_2 \\rightarrow 2NO_2$
  3. $3NO_2 + H_2O \\rightarrow 2HNO_3 + NO$
* **Allotropes of Phosphorus**:
  * White Phosphorus ($P_4$ tetrahedron): highly toxic, glows in dark (chemiluminescence), ignites spontaneously at $303\\text{ K}$.
  * Red Phosphorus: polymeric chain, non-poisonous, stable.
  * Black Phosphorus: layered structure, thermodynamically most stable.

### 2. Group 16: Oxygen (Chalcogen) Family
* **Sulphuric Acid ($H_2SO_4$ - King of Chemicals) by Contact Process**:
  * Key step: $2SO_2 + O_2 \\xrightleftharpoons{V_2O_5, 720\\text{ K}} 2SO_3$ ($\\Delta H = -196\\text{ kJ/mol}$).
  * Oleum formation: $SO_3 + H_2SO_4 \\rightarrow H_2S_2O_7$. Diluting oleum produces $98\\%$ pure $H_2SO_4$.
  * Acts as strong dehydrating agent (chars sugar to spongy black carbon: $C_{12}H_{22}O_{11} \\xrightarrow{H_2SO_4} 12C + 11H_2O$).

### 3. Group 17: Halogen Family
* **Chlorine Manufacture**:
  * **Deacon's Process**: $4HCl + O_2 \\xrightarrow{CuCl_2, 723\\text{ K}} 2Cl_2 + 2H_2O$.
* **Interhalogen Compounds ($XX'_n$)**:
  * Formed between two different halogens ($ClF, BrF_3, IF_5, IF_7$).
  * $XX'$ compounds are more reactive than pure halogens (except $F_2$) because $X-X'$ bond is weaker than $X-X$ bond.
  * Structure of $IF_7$: Pentagonal bipyramidal ($sp^3d^3$).

### 4. Group 18: Noble Gases
* **Neil Bartlett (1962)** synthesized first noble gas compound $Xe[PtF_6]$ after observing that $O_2$ and $Xe$ have similar first ionization enthalpies.
* **Xenon Fluorides**:
  * $XeF_2$: Linear ($sp^3d$, 3 lone pairs on equatorial positions).
  * $XeF_4$: Square planar ($sp^3d^2$, 2 lone pairs opposite each other).
  * $XeF_6$: Distorted octahedral ($sp^3d^3$, 1 lone pair).`,
    bodyTa: `### 1. நைட்ரஜன் குடும்பம் (தொகுதி 15)
* **நைட்ரிக் அமிலம் தயாரித்தல் (ஆஸ்ட்வால்ட் முறை)**:
  * அம்மோனியாவை $Pt/Rh$ வினையூக்கி முன்னிலையில் ஆக்சிஜனேற்றம் செய்து $NO$ பெறப்பட்டு இறுதியில் $HNO_3$ பெறப்படுகிறது.
* **பாஸ்பரஸின் வடிவங்கள்**:
  * வெண் பாஸ்பரஸ் ($P_4$ நான்முகி): நச்சுத்தன்மை வாய்ந்தது; காற்றில் தானாக எரியும்; இருளில் ஒளிரும் (வேதி ஒளிர்தல்).
  * சிவப்பு பாஸ்பரஸ்: நஞ்சற்ற சங்கிலித் தொடர் வடிவம்.

### 2. ஆக்சிஜன் குடும்பம் (தொகுதி 16)
* **கந்தக அமிலம் (வேதிப்பொருட்களின் அரசன் - $H_2SO_4$) தொடு முறை**:
  * முக்கிய படி: $2SO_2 + O_2 \\xrightleftharpoons{V_2O_5} 2SO_3$ (வெப்பம் உமிழ் வினை).
  * $SO_3$-ஐ கந்தக அமிலத்தில் உறிஞ்சி ஓலியம் ($H_2S_2O_7$) பெறப்படுகிறது.
  * வலிமையான நீர்நீக்கும் காரணி (சர்க்கரையை கரியாக மாற்றுதல்).

### 3. ஆலசன் குடும்பம் (தொகுதி 17)
* **டீக்கன் முறை (குளோரின் தயாரிப்பு)**: $4HCl + O_2 \\xrightarrow{CuCl_2} 2Cl_2 + 2H_2O$.
* **ஹாலஜனிடைச் சேர்மங்கள் ($XX'_n$)**:
  * இரு வேறுபட்ட ஆலசன்களுக்கு இடையே பிணைப்பு ஏற்படுகிறது.
  * $X-X'$ பிணைப்பு பலவீனமாக இருப்பதால் தூய ஆலசன்களை விட (புளூரின் தவிர) அதிக வினைத்திறன் கொண்டவை.
  * $IF_7$: ஐங்கோண இருபிரமிடு ($sp^3d^3$).

### 4. மந்த வாயுக்கள் (தொகுதி 18)
* 1962-ல் நீல் பார்ட்லெட் முதல் மந்த வாயு சேர்மமான $Xe[PtF_6]$-ஐ உருவாக்கினார்.
* **செனான் சேர்மங்களின் வடிவங்கள்**:
  * $XeF_2$: நேர்க்கோடு ($sp^3d$).
  * $XeF_4$: தள சதுரம் ($sp^3d^2$).
  * $XeF_6$: சிதைந்த எண்முகி ($sp^3d^3$).`,
    keyFormulas: [
      {
        nameEn: 'Contact Process Key Equilibrium Reaction',
        nameTa: 'தொடு முறை சமநிலை வினை',
        formula: '2SO_2(g) + O_2(g) \\xrightleftharpoons{V_2O_5} 2SO_3(g) \\quad (\\Delta H = -196\\text{ kJ/mol})',
        explanationEn: 'Exothermic equilibrium shifted forward by high pressure and optimum 720 K with V2O5 catalyst.',
        explanationTa: 'அதிக அழுத்தம் மற்றும் 720 K வெப்பநிலையில் V2O5 முன்னிலையில் SO3 உருவாக்கம் தூண்டப்படுகிறது.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Ostwald and Contact processes.',
        changeNoteTa: 'தொழில்முறை தயாரிப்பு முறைகளுடன் விரிவான குறிப்புகள்.'
      }
    ]
  },

  c12_chem_u4: {
    id: 'note_c12_chem_u4',
    chapterId: 'c12_chem_u4',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Transition and Inner Transition Elements: d-Block, Lanthanoid Contraction, and Catalysis',
    titleTa: 'இடைநிலை மற்றும் உள் இடைநிலைத் தனிமங்கள்: d-தொகுதி, லாந்தனாய்டு குறுக்கம் மற்றும் வினையூக்கம்',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Variable oxidation states, Spin-only magnetic moment, Color of ions (d-d transition), Lanthanoid contraction.',
    changeNoteTa: 'மாறுபடும் ஆக்ஸிஜனேற்ற நிலை, காந்தத் திருப்புத்திறன், d-d இடப்பெயர்ச்சி, லாந்தனாய்டு குறுக்கம்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. General Properties of d-Block Elements
* General electronic configuration: $(n-1)d^{1-10} ns^{1-2}$.
* **Variable Oxidation States**: Because $(n-1)d$ and $ns$ electrons have comparable energies, both participate in bond formation. Manganese ($Mn$) shows highest oxidation states from $+2$ to $+7$.
* **Magnetic Properties**:
  * Unpaired $d$-electrons impart paramagnetism.
  * **Spin-only magnetic moment formula**:
    $$\\mu_s = \\sqrt{n(n+2)} \\text{ BM}$$
    (where $n$ is number of unpaired electrons, $\\text{BM} = \\text{Bohr Magneton}$).
* **Color of Transition Metal Ions**:
  * Due to **$d-d$ transition** in presence of ligand crystal fields. If all $d$-orbitals are empty ($d^0$: $Sc^{3+}, Ti^{4+}$) or completely filled ($d^{10}$: $Zn^{2+}, Cu^+$), the ions are colorless.
* **Catalytic Activity**: Transition metals exhibit multiple oxidation states and possess vacant $d$-orbitals, providing surface active sites for reactant molecules.

### 2. Potassium Dichromate ($K_2Cr_2O_7$) & Potassium Permanganate ($KMnO_4$)
* **Chromyl Chloride Test**: Heating salt containing chloride with $K_2Cr_2O_7$ and conc. $H_2SO_4$ gives reddish-orange fumes of $CrO_2Cl_2$.
* **$KMnO_4$ as Oxidising Agent**:
  * In acidic medium: $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ (Equivalent wt = Molecular wt / 5).
  * In neutral medium: $MnO_4^- + 2H_2O + 3e^- \\rightarrow MnO_2 + 4OH^-$ (Equivalent wt = Molecular wt / 3).
  * In alkaline medium: $MnO_4^- + e^- \\rightarrow MnO_4^{2-}$ (Equivalent wt = Molecular wt / 1).

### 3. f-Block: Lanthanoids and Actinoids
* **Lanthanoid Contraction (லாந்தனாய்டு குறுக்கம்)**:
  * Steady decrease in atomic and ionic radii from $La^{3+}$ ($103\\text{ pm}$) to $Lu^{3+}$ ($86\\text{ pm}$).
  * **Cause**: Poor shielding effect of $4f$ electrons fails to compensate for increasing nuclear charge.
  * **Consequences**:
    1. Similarity in size between $4d$ and $5d$ transition elements (e.g. $Zr \\approx Hf$, $Nb \\approx Ta$).
    2. Decreasing basicity from $La(OH)_3$ (most basic) to $Lu(OH)_3$ (least basic).
    3. Difficulty in separation of pure lanthanoid elements.`,
    bodyTa: `### 1. d-தொகுதி தனிமங்களின் பண்புகள்
* பொதுவான எலக்ட்ரான் அமைப்பு: $(n-1)d^{1-10} ns^{1-2}$.
* **மாறுபடும் ஆக்ஸிஜனேற்ற நிலை**: $(n-1)d$ மற்றும் $ns$ ஆர்பிட்டால்களின் ஆற்றல் சமமாக இருப்பதால் இரண்டும் பிணைப்பில் ஈடுபடுகின்றன (மாங்கனீசு $+2$ முதல் $+7$ வரை காட்டுகிறது).
* **காந்தத் திருப்புத்திறன்**:
  * இணையாகாத எலக்ட்ரான்கள் பாராகாந்தத் தன்மையை அளிக்கின்றன.
  * சமன்பாடு: $\\mu_s = \\sqrt{n(n+2)} \\text{ BM}$.
* **நிறம் தோன்றுதல்**: படிக புலத்தில் ஏற்படும் **$d-d$ இடப்பெயர்ச்சி** காரணமாக நிறம் தோன்றுகிறது. $d^0$ மற்றும் $d^{10}$ அமைப்புகள் நிறமற்றவை ($Zn^{2+}, Sc^{3+}$).

### 2. பொட்டாசியம் டைகுரோமேட் & பொட்டாசியம் பெர்மாங்கனேட்
* **குரோமைல் குளோரைடு சோதனை**: குளோரைடு உப்பை $K_2Cr_2O_7$ மற்றும் அடர் $H_2SO_4$-உடன் சூடுபடுத்தும்போது செவ்விகந்த நிற $CrO_2Cl_2$ வாயு வெளியேறுகிறது.
* **$KMnO_4$ ஆக்சிஜனேற்றி**: அமில ஊடகத்தில் 5 எலக்ட்ரான்களை ஏற்று $Mn^{2+}$-ஆக மாறுகிறது (சமான எடை = M/5).

### 3. f-தொகுதி: லாந்தனாய்டு குறுக்கம்
* $La^{3+}$-லிருந்து $Lu^{3+}$-ஐ நோக்கிச் செல்லும்போது அயனி ஆரம் தொடர்ச்சியாகக் குறைவது **லாந்தனாய்டு குறுக்கம்** எனப்படும்.
* **காரணம்**: $4f$ எலக்ட்ரான்களின் மிகக் குறைந்த திரைமறைப்பு விளைவு உட்கரு மின்சுமையைத் தடுக்க முடியாமல் போவது.
* **விளைவுகள்**:
  1. $4d$ மற்றும் $5d$ தனிமங்களின் ஆரங்கள் ஏறத்தாழ சமமாக இருத்தல் ($Zr \\approx Hf$).
  2. காரத்தன்மை குறைதல்: $La(OH)_3$ அதிக காரம், $Lu(OH)_3$ குறைந்த காரம்.`,
    keyFormulas: [
      {
        nameEn: 'Spin-Only Magnetic Moment',
        nameTa: 'சுழற்சி காந்தத் திருப்புத்திறன்',
        formula: '\\mu_s = \\sqrt{n(n+2)} \\text{ Bohr Magnetons (BM)}',
        explanationEn: 'Calculates the magnetic moment produced solely by n unpaired electrons.',
        explanationTa: 'இணையாகாத எலக்ட்ரான்களின் எண்ணிக்கை (n) கொண்டு காந்தத் திருப்புத்திறனைக் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Lanthanoid contraction consequences.',
        changeNoteTa: 'லாந்தனாய்டு குறுக்க விளைவுகளுடன் பாடக் குறிப்புகள்.'
      }
    ]
  },

  c12_chem_u5: {
    id: 'note_c12_chem_u5',
    chapterId: 'c12_chem_u5',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Coordination Chemistry: Werner’s Theory, IUPAC Nomenclature, VBT, and CFT',
    titleTa: 'அணைவு வேதியியல்: வெர்னர் கொள்கை, IUPAC பெயரிடுதல், VBT மற்றும் படிகப் புலக் கொள்கை',
    publishedAt: '21 Sep 2026',
    publishedAtTa: '21 செப் 2026',
    updatedAt: '21 Sep 2026',
    updatedAtTa: '21 செப் 2026',
    syllabusYear: 'Samacheer Kalvi 2026–27',
    syllabusYearTa: 'சமச்சீர் கல்வி 2026–27',
    reviewedBy: 'Dr. S. Meenakshisundaram, M.Sc., Ph.D.',
    reviewedByRole: 'Head of Chemistry (TNSCERT Panel)',
    reviewedAt: '21 Sep 2026',
    reviewedAtTa: '21 செப் 2026',
    status: 'published',
    version: '1.0',
    changeNote: 'Werner dual valencies, IUPAC rules, structural & stereoisomerism, Valence Bond Theory, and Crystal Field Theory.',
    changeNoteTa: 'வெர்னர் கொள்கை, IUPAC பெயரிடுதல், மாற்றியங்கள், இணைதிறன் பிணைப்புக் கொள்கை, படிகப் புலக் கொள்கை.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Werner's Coordination Theory (வெர்னர் கொள்கை)
* Alfred Werner postulated that central metal atoms exhibit two types of valencies:
  1. **Primary Valency (முதன்மை இணைதிறன்)**: Ionizable, corresponds to the oxidation state of the metal, satisfied only by negative ions.
  2. **Secondary Valency (இரண்டாம் நிலை இணைதிறன்)**: Non-ionizable, corresponds to coordination number, directional in space (determines geometry), satisfied by negative ions or neutral ligands.

### 2. IUPAC Nomenclature Rules
* Cation named first, then anion.
* Ligands named in alphabetical order before the central metal.
* Anionic ligands end in '-o' (chloro, cyano, oxalato); neutral ligands have special names: $H_2O$ (aqua), $NH_3$ (ammine), $CO$ (carbonyl).
* If the complex ion is an anion, central metal ends in '-ate' (ferrate, cuprate, cobaltate).
* Oxidation state written in Roman numerals in parentheses: e.g. $[Co(NH_3)_6]Cl_3$ is **Hexaamminecobalt(III) chloride**; $K_4[Fe(CN)_6]$ is **Potassium hexacyanoferrate(II)**.

### 3. Isomerism in Coordination Compounds
* **Structural Isomerism**:
  * *Ionization Isomerism*: $[Co(NH_3)_5Br]SO_4$ (gives white ppt with $BaCl_2$) vs $[Co(NH_3)_5SO_4]Br$ (gives pale yellow ppt with $AgNO_3$).
  * *Hydrate / Solvate Isomerism*: $[Cr(H_2O)_6]Cl_3$ (violet) vs $[Cr(H_2O)_5Cl]Cl_2\\cdot H_2O$ (grey-green).
  * *Linkage Isomerism*: Arises when ambidentate ligands are present ($NO_2^-$ bonded through $N$ as nitro or through $O$ as nitrito).
  * *Coordination Isomerism*: Interchanging ligands between cationic and anionic complexes: $[Co(NH_3)_6][Cr(CN)_6]$ vs $[Cr(NH_3)_6][Co(CN)_6]$.
* **Stereoisomerism**:
  * *Geometrical*: Cis and Trans forms in square planar $[Pt(NH_3)_2Cl_2]$ (cisplatin is an anti-cancer drug). Fac and Mer forms in octahedral complexes.
  * *Optical*: Dextro and Laevo enantiomers in complexes lacking plane of symmetry ($[Co(en)_3]^{3+}$).

### 4. Crystal Field Theory (CFT - படிகப் புலக் கொள்கை)
* Ligands act as negative point charges. The 5 degenerate $d$-orbitals of free metal ion split into two sets under octahedral crystal field:
  * Lower energy triplet: $t_{2g}$ ($d_{xy}, d_{yz}, d_{zx}$) with energy $-0.4\\Delta_o$.
  * Higher energy doublet: $e_g$ ($d_{x^2-y^2}, d_{z^2}$) with energy $+0.6\\Delta_o$.
* **Crystal Field Splitting Energy (CFSE / $\\Delta_o$)**:
  * Strong field ligands ($CN^-, CO, en$) produce large $\\Delta_o > P$ (pairing energy) $\\rightarrow$ low-spin inner-orbital complexes.
  * Weak field ligands ($I^-, Br^-, Cl^-, F^-$) produce small $\\Delta_o < P \\rightarrow$ high-spin outer-orbital complexes.`,
    bodyTa: `### 1. வெர்னர் அணைவுக் கொள்கை
* மைய உலோக அயனி இரண்டு வகையான இணைதிறன்களைப் பெற்றுள்ளது:
  1. **முதன்மை இணைதிறன்**: அயனியாகும் தன்மை கொண்டது; உலோகத்தின் ஆக்ஸிஜனேற்ற நிலையைக் குறிக்கும்; எதிர் அயனிகளால் மட்டுமே நிறைவு செய்யப்படும்.
  2. **இரண்டாம் நிலை இணைதிறன்**: அயனியாகாது; அணைவு எண்ணைக் குறிக்கும்; திசைப்பண்பு உடையதால் வடிவத்தை நிர்ணயிக்கிறது; நடுநிலை அல்லது எதிர் ஈனிகளால் நிறைவு செய்யப்படும்.

### 2. IUPAC பெயரிடும் விதிகள்
* நேர் அயனி முதலில், எதிர் அயனி அடுத்து பெயரிடப்பட வேண்டும்.
* ஈனிகள் ஆங்கில அகரவரிசையில் பெயரிடப்படும்.
* அணைவு எதிரயனியாக இருந்தால் உலோகத்தின் பெயருடன் '-ஏட்' (-ate) சேர்க்க வேண்டும் (எ.கா: பெர்ரேட்).
* உலோகத்தின் ஆக்ஸிஜனேற்ற நிலை ரோமன் எண்களில் அடைப்புக்குறிக்குள் குறிப்பிடப்படும்.
* எ.கா: $[Co(NH_3)_6]Cl_3$ = ஹெக்சாஅம்மைன்கோபால்ட்(III) குளோரைடு.
* $K_4[Fe(CN)_6]$ = பொட்டாசியம் ஹெக்சாசயனோபெர்ரேட்(II).

### 3. மாற்றியங்கள் (Isomerism)
* **அயனியாதல் மாற்றியம்**: நீர்க்கரைசலில் வெவ்வேறு அயனிகளைத் தருதல் ($[Co(NH_3)_5Br]SO_4$ vs $[Co(NH_3)_5SO_4]Br$).
* **இணைப்பு மாற்றியம்**: இருவழி பிணைப்புறும் ஈனிகளால் ($NO_2^-$) ஏற்படுவது.
* **நீரேற்ற மாற்றியம்**: நீர் மூலக்கூறுகள் உள்ளேயும் வெளியேயும் அமைதல்.
* **வடிவ மாற்றியம்**: சிஸ் மற்றும் டிரான்ஸ் வடிவங்கள் ($[Pt(NH_3)_2Cl_2]$ - சிஸ்பிளாட்டின் புற்றுநோய் மருந்து).

### 4. படிகப் புலக் கொள்கை (CFT)
* எண்முகி படிகப் புலத்தில் 5 சமஆற்றல் கொண்ட $d$-ஆர்பிட்டால்கள் இரண்டு குழுக்களாகப் பிரிகின்றன:
  * குறைந்த ஆற்றல் உடைய $t_{2g}$ ஆர்பிட்டால்கள் ($d_{xy}, d_{yz}, d_{zx}$).
  * அதிக ஆற்றல் உடைய $e_g$ ஆர்பிட்டால்கள் ($d_{x^2-y^2}, d_{z^2}$).
* வலிமைமிகு ஈனிகள் ($CN^-$) அதிக பிளப்பை ($\Delta_o > P$) ஏற்படுத்தி குறைந்த சுழற்சி அணைவுகளைத் தருகின்றன.`,
    keyFormulas: [
      {
        nameEn: 'Octahedral Crystal Field Splitting Energy (CFSE)',
        nameTa: 'படிகப் புல நிலைப்படுத்தும் ஆற்றல்',
        formula: '\\text{CFSE} = \\left[-0.4 \\times n(t_{2g}) + 0.6 \\times n(e_g)\\right] \\Delta_o + mP',
        explanationEn: 'Calculates the net stabilization gained by electrons occupying split t2g and eg d-orbitals.',
        explanationTa: 't2g மற்றும் eg ஆர்பிட்டால்களில் உள்ள எலக்ட்ரான்களின் ஆற்றல் நிலைப்பாட்டைக் கணக்கிடுதல்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Werner and CFT.',
        changeNoteTa: 'வெர்னர் மற்றும் படிக புலக் கொள்கை விளக்கங்களுடன் குறிப்புகள்.'
      }
    ]
  }
};

export const CHEM_VOL1A_SUMMARIES: Record<string, SummaryItem> = {
  c12_chem_u1: {
    id: 'sum_c12_chem_u1',
    chapterId: 'c12_chem_u1',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Metallurgy covers the science of extracting pure metals from natural ores via concentration (froth flotation, gravity separation), reduction governed by Ellingham diagram thermodynamics, and refining techniques like Mond and Van Arkel processes.',
    simpleExplanationTa: 'உலோகவியல் தாதுக்களை அடர்ப்பித்தல் (நுரை மிதப்பு முறை), எலிங்கம் வரைபட வெப்ப இயக்கவியல் அடிப்படையில் ஒடுக்குதல், மற்றும் மாண்ட், வான் ஆர்கல் முறைகளில் தூய்மையாக்கும் அறிவியலை விளக்குகிறது.',
    keyPointsEn: [
      'All ores are minerals, but not all minerals are ores.',
      'Froth flotation concentrates sulphide ores using pine oil collectors.',
      'Ellingham diagrams plot ΔG° vs T to predict which metal can reduce another oxide.',
      'Mond process purifies Nickel; Van Arkel purifies Titanium/Zirconium.'
    ],
    keyPointsTa: [
      'அனைத்து தாதுக்களும் கனிமங்களே; ஆனால் அனைத்து கனிமங்களும் தாதுக்கள் அல்ல.',
      'நுரை மிதப்பு முறை சல்பைடு தாதுக்களை அடர்ப்பிக்கப் பயன்படுகிறது.',
      'எலிங்கம் வரைபடத்தில் கீழே உள்ள உலோகம் மேலே உள்ள உலோக ஆக்சைடை ஒடுக்கும்.',
      'மாண்ட் முறை நிக்கலையும், வான் ஆர்கல் முறை டைட்டானியத்தையும் தூய்மையாக்குகிறது.'
    ]
  },
  c12_chem_u2: {
    id: 'sum_c12_chem_u2',
    chapterId: 'c12_chem_u2',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'p-Block Elements - I examines the Boron and Carbon groups, highlighting the inert pair effect, electron-deficient banana bonds in Diborane, borax bead tests, and carbon allotropes (diamond, graphite, fullerenes, graphene).',
    simpleExplanationTa: 'p-தொகுதி I போரான் மற்றும் கார்பன் தொகுதிகளை விளக்குகிறது; மந்த இணை விளைவு, டைபோரேனின் வாழைப்பழ பிணைப்பு, வெண்கார மணி சோதனை மற்றும் கார்பனின் புறவேற்றுமை வடிவங்கள் முக்கிய அம்சங்களாகும்.',
    keyPointsEn: [
      'Inert pair effect stabilizes lower oxidation states down the group (Tl+ > Tl3+, Pb2+ > Pb4+).',
      'Diborane features two 3-center-2-electron banana bridge bonds.',
      'Borax bead test identifies transition metal ions via glassy metaborates.',
      'Diamond is sp3 tetrahedral; Graphite is sp2 layered and conducts electricity.'
    ],
    keyPointsTa: [
      'மந்த இணை விளைவு காரணமாக கீழ்நோக்கி குறைந்த ஆக்ஸிஜனேற்ற நிலை அதிக நிலைப்புத்தன்மை பெறுகிறது.',
      'டைபோரேனில் இரு 3-மைய-2-எலக்ட்ரான் வாழைப்பழ பிணைப்புகள் உள்ளன.',
      'வெண்கார மணி சோதனை இடைநிலை உலோக அயனிகளை அடையாளம் காண உதவுகிறது.',
      'வைரம் sp3 நான்முகி; கிராஃபைட் sp2 அடுக்குகளுடன் மின்சாரத்தைக் கடத்துகிறது.'
    ]
  },
  c12_chem_u3: {
    id: 'sum_c12_chem_u3',
    chapterId: 'c12_chem_u3',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'p-Block Elements - II explores Nitrogen, Oxygen, Halogens, and Noble Gases, including industrial syntheses (Ostwald, Contact, Deacon processes), reactive interhalogen compounds, and Xenon fluorides.',
    simpleExplanationTa: 'p-தொகுதி II நைட்ரஜன், ஆக்சிஜன், ஆலசன்கள் மற்றும் மந்த வாயுக்களை விவரிக்கிறது; ஆஸ்ட்வால்ட், தொடு மற்றும் டீக்கன் தயாரிப்பு முறைகள் மற்றும் செனான் புளூரைடுகள் இதில் அடங்கும்.',
    keyPointsEn: [
      'Nitric acid is made by Ostwald process; Sulphuric acid by Contact process over V2O5.',
      'White phosphorus is toxic and chemiluminescent; Red phosphorus is a stable polymer.',
      'Interhalogen compounds (XX\'n) are more reactive than parent halogens.',
      'Xenon forms fluorides: XeF2 (linear), XeF4 (square planar), XeF6 (distorted octahedral).'
    ],
    keyPointsTa: [
      'நைட்ரிக் அமிலம் ஆஸ்ட்வால்ட் முறையிலும், கந்தக அமிலம் தொடு முறையிலும் தயாரிக்கப்படுகிறது.',
      'வெண் பாஸ்பரஸ் நச்சுத்தன்மை வாய்ந்தது; இருளில் ஒளிரும் பண்பு கொண்டது.',
      'ஹாலஜனிடைச் சேர்மங்கள் தனி ஆலசன்களை விட அதிக வினைத்திறன் கொண்டவை.',
      'செனான் புளூரைடுகள்: XeF2 (நேர்க்கோடு), XeF4 (தள சதுரம்), XeF6 (சிதைந்த எண்முகி).'
    ]
  },
  c12_chem_u4: {
    id: 'sum_c12_chem_u4',
    chapterId: 'c12_chem_u4',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Transition & Inner Transition Elements investigates d-block metals exhibiting variable valencies, paramagnetism, colorful d-d transitions, and strong catalysis, alongside the lanthanoid contraction in f-block elements.',
    simpleExplanationTa: 'இடைநிலை மற்றும் உள் இடைநிலைத் தனிமங்கள் மாறுபடும் ஆக்ஸிஜனேற்ற நிலைகள், காந்தப் பண்புகள், வண்ணமயமான d-d இடப்பெயர்ச்சி மற்றும் லாந்தனாய்டு குறுக்க விளைவுகளை ஆராய்கிறது.',
    keyPointsEn: [
      'Variable oxidation states result from accessible (n-1)d and ns orbital electrons.',
      'Spin-only magnetic moment is calculated as μ = √[n(n+2)] BM.',
      'd-d electron transitions produce rich colors when d-orbitals are partially filled.',
      'Lanthanoid contraction causes 4d and 5d metals (Zr/Hf) to share nearly identical radii.'
    ],
    keyPointsTa: [
      '(n-1)d மற்றும் ns எலக்ட்ரான்கள் பிணைப்பில் ஈடுபடுவதால் மாறுபடும் ஆக்ஸிஜனேற்ற நிலை தோன்றுகிறது.',
      'காந்தத் திருப்புத்திறன் சூத்திரம்: μ = √[n(n+2)] BM.',
      'd-d எலக்ட்ரான் இடப்பெயர்ச்சி காரணமாக வண்ணங்கள் தோன்றுகின்றன.',
      'லாந்தனாய்டு குறுக்கத்தால் Zr மற்றும் Hf தனிமங்கள் சமமான ஆரங்களைப் பெற்றுள்ளன.'
    ]
  },
  c12_chem_u5: {
    id: 'sum_c12_chem_u5',
    chapterId: 'c12_chem_u5',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Coordination Chemistry establishes Werner’s primary and secondary valencies, systematic IUPAC naming of complex salts, geometric and optical isomerisms, and Crystal Field Theory splitting of d-orbitals into t2g and eg sets.',
    simpleExplanationTa: 'அணைவு வேதியியல் வெர்னரின் முதன்மை மற்றும் இரண்டாம் நிலை இணைதிறன்கள், IUPAC பெயரிடுதல், மாற்றியங்கள் மற்றும் படிகப் புலக் கொள்கையில் d-ஆர்பிட்டால்கள் t2g மற்றும் eg-ஆகப் பிரிவதை விளக்குகிறது.',
    keyPointsEn: [
      'Primary valency is ionizable (oxidation state); secondary valency is directional (coordination number).',
      'IUPAC naming lists ligands alphabetically before the central metal.',
      'Ionization, hydrate, linkage, and coordination are key structural isomerisms.',
      'Crystal Field Theory splits octahedral d-orbitals into lower t2g and higher eg levels.'
    ],
    keyPointsTa: [
      'முதன்மை இணைதிறன் அயனியாகும் தன்மை கொண்டது; இரண்டாம் நிலை இணைதிறன் திசைப்பண்பு உடையது.',
      'IUPAC முறையில் ஈனிகள் அகரவரிசையில் முதலில் பெயரிடப்படும்.',
      'அயனியாதல், இணைப்பு மற்றும் நீரேற்ற மாற்றியங்கள் முக்கிய வகைகளாகும்.',
      'படிகப் புலக் கொள்கை எண்முகி d-ஆர்பிட்டால்களை t2g மற்றும் eg-ஆகப் பிரிக்கிறது.'
    ]
  }
};

export const CHEM_VOL1A_QUIZZES: Record<string, ChapterQuiz> = {
  c12_chem_u1: {
    id: 'quiz_c12_chem_u1',
    chapterId: 'c12_chem_u1',
    titleEn: 'Metallurgy Board Exam Mastery Quiz',
    titleTa: 'உலோகவியல் தேர்வு மாதிரி வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which method is universally employed for concentrating sulphide ores like Galena (PbS)?',
        questionTa: 'கலினா (PbS) போன்ற சல்பைடு தாதுக்களை அடர்ப்பிக்க பொதுவாகப் பயன்படும் முறை எது?',
        optionsEn: ['Froth Flotation', 'Gravity Separation', 'Magnetic Separation', 'Zone Refining'],
        optionsTa: ['நுரை மிதப்பு முறை', 'புவிஈர்ப்பு முறை', 'காந்தப் பிரிப்பு முறை', 'மண்டல சுத்திகரிப்பு'],
        correctAnswer: 'Froth Flotation',
        explanationEn: 'Sulphide ores are preferentially wetted by pine oil and float with froth.',
        explanationTa: 'சல்பைடு தாதுக்கள் பைன் எண்ணெயால் நனைக்கப்பட்டு நுரையாக மேலே மிதக்கின்றன.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which volatile compound is intermediate in the Mond process for refining nickel?',
        questionTa: 'மாண்ட் முறையில் நிக்கலைத் தூய்மையாக்க உதவும் ஆவியாகும் இடைநிலைச் சேர்மம் எது?',
        optionsEn: ['Ni(CO)4', 'NiCl2', 'Ni(OH)2', 'Ni(CO)6'],
        optionsTa: ['Ni(CO)4', 'NiCl2', 'Ni(OH)2', 'Ni(CO)6'],
        correctAnswer: 'Ni(CO)4',
        explanationEn: 'Nickel tetracarbonyl Ni(CO)4 forms at 350 K and decomposes at 460 K to yield 99.9% pure Ni.',
        explanationTa: 'நிக்கல் டெட்ராகார்பனைல் Ni(CO)4 350 K-ல் உருவாகி 460 K-ல் தூய நிக்கலாகப் பிரிகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'According to the Ellingham diagram, a metal can reduce any oxide lying above its line at that temperature.',
        questionTa: 'எலிங்கம் வரைபடப்படி, ஒரு உலோகம் தனக்கு மேலே அமைந்துள்ள எந்தவொரு உலோக ஆக்சைடையும் ஒடுக்கும்.',
        correctAnswer: true,
        explanationEn: 'True. A lower line has more negative ΔG° of formation, driving the combined reduction to negative ΔG°.',
        explanationTa: 'சரி. கீழேயுள்ள தனிமத்திற்கு ΔG° மதிப்பு அதிக எதிர்மறையாக இருப்பதால் மேலே உள்ளதை ஒடுக்கும்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'Which element is purified industrially via the Van Arkel iodide thermal decomposition process?',
        questionTa: 'வான் ஆர்கல் அயோடைடு வெப்பச் சிதைவு முறை மூலம் தூய்மையாக்கப்படும் உலோகம் எது?',
        optionsEn: ['Titanium (Ti)', 'Copper (Cu)', 'Aluminium (Al)', 'Iron (Fe)'],
        optionsTa: ['டைட்டானியம் (Ti)', 'தாமிரம் (Cu)', 'அலுமினியம் (Al)', 'இரும்பு (Fe)'],
        correctAnswer: 'Titanium (Ti)',
        explanationEn: 'Ti reacts with I2 to form volatile TiI4, which decomposes on a hot tungsten filament (1800 K).',
        explanationTa: 'டைட்டானியம் அயோடினுடன் வினைபுரிந்து TiI4 ஆகி டங்ஸ்டன் இழையில் சிதைந்து தூய Ti-ஆக மாறுகிறது.'
      }
    ]
  },

  c12_chem_u2: {
    id: 'quiz_c12_chem_u2',
    chapterId: 'c12_chem_u2',
    titleEn: 'p-Block Elements - I Board Quiz',
    titleTa: 'p-தொகுதி தனிமங்கள் - I வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'How many 3-center-2-electron (3c-2e) banana bridge bonds exist in Diborane (B2H6)?',
        questionTa: 'டைபோரேனில் (B2H6) எத்தனை 3-மைய-2-எலக்ட்ரான் (3c-2e) வாழைப்பழ பிணைப்புகள் உள்ளன?',
        optionsEn: ['2', '4', '6', '1'],
        optionsTa: ['2', '4', '6', '1'],
        correctAnswer: '2',
        explanationEn: 'Diborane has two B-H-B bridge bonds (3c-2e-) and four terminal B-H bonds (2c-2e-).',
        explanationTa: 'டைபோரேனில் 2 வாழைப்பழ பாலப் பிணைப்புகளும், 4 முனைய பிணைப்புகளும் உள்ளன.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Why is Tl+ more stable than Tl3+, whereas B3+ is more stable than B+?',
        questionTa: 'Tl3+-ஐ விட Tl+ நிலைப்புத்தன்மை கொண்டதாகவும், B+-ஐ விட B3+ நிலைப்புத்தன்மை கொண்டதாகவும் இருக்கக் காரணம் என்ன?',
        optionsEn: ['Inert Pair Effect', 'Shielding Effect', 'Electronegativity', 'Lattice Enthalpy'],
        optionsTa: ['மந்த இணை விளைவு', 'திரைமறைப்பு விளைவு', 'எலக்ட்ரான் கவர்தன்மை', 'படிகக்கூடு என்தால்பி'],
        correctAnswer: 'Inert Pair Effect',
        explanationEn: 'The inert pair effect stabilizes the lower oxidation state (+1) in heavier group 13 elements.',
        explanationTa: 'மந்த இணை விளைவு காரணமாக கனமான தனிமங்களில் கீழ் ஆக்ஸிஜனேற்ற நிலை நிலைப்புத்தன்மை பெறுகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Graphite conducts electricity because of delocalized pi electrons within its hexagonal layers.',
        questionTa: 'கிராஃபைட் தனது அறுகோண அடுக்குகளில் உள்ள விலகிச் செல்லும் பை எலக்ட்ரான்களால் மின்சாரத்தைக் கடத்துகிறது.',
        correctAnswer: true,
        explanationEn: 'True. In sp2 hybridized graphite, the fourth valence electron is free to move across layers.',
        explanationTa: 'சரி. sp2 இனக்கலப்பு கிராஃபைட்டில் உள்ள நான்காவது எலக்ட்ரான் அடுக்குகள் முழுவதும் நகர்ந்து மின்சாரத்தைக் கடத்துகிறது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'What is the color of the bead formed by Cobalt in the Borax Bead Test?',
        questionTa: 'வெண்கார மணி சோதனையில் கோபால்ட் தரும் மணியின் நிறம் என்ன?',
        optionsEn: ['Deep Blue', 'Emerald Green', 'Blood Red', 'Golden Yellow'],
        optionsTa: ['அடர் நீலம் (Deep Blue)', 'மரகதப் பச்சை', 'சிவப்பு', 'பொன் மஞ்சள்'],
        correctAnswer: 'Deep Blue',
        explanationEn: 'Cobalt metaborate Co(BO2)2 imparts an unmistakable royal blue color to the glassy bead.',
        explanationTa: 'கோபால்ட் மெட்டாபோரேட் Co(BO2)2 வெண்கார மணியில் அடர் நீல நிறத்தை உருவாக்குகிறது.'
      }
    ]
  },

  c12_chem_u3: {
    id: 'quiz_c12_chem_u3',
    chapterId: 'c12_chem_u3',
    titleEn: 'p-Block Elements - II Board Quiz',
    titleTa: 'p-தொகுதி தனிமங்கள் - II வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which catalyst is used in the Contact Process for the industrial manufacture of H2SO4?',
        questionTa: 'கந்தக அமிலம் தயாரிக்கும் தொடு முறையில் வினையூக்கியாகப் பயன்படுவது எது?',
        optionsEn: ['V2O5', 'Pt wire', 'Fe powder', 'MnO2'],
        optionsTa: ['V2O5', 'Pt கம்பி', 'Fe தூள்', 'MnO2'],
        correctAnswer: 'V2O5',
        explanationEn: 'Vanadium pentoxide (V2O5) catalyzes 2SO2 + O2 ⇌ 2SO3 at 720 K.',
        explanationTa: 'வனேடியம் பென்டாக்சைடு (V2O5) 720 K-ல் SO2-ஐ SO3-ஆக மாற்றும் வினையூக்கியாகச் செயல்படுகிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What is the molecular geometry of Xenon Tetrafluoride (XeF4)?',
        questionTa: 'செனான் டெட்ராபுளூரைடின் (XeF4) மூலக்கூறு வடிவம் என்ன?',
        optionsEn: ['Square Planar', 'Tetrahedral', 'Octahedral', 'Trigonal Bipyramidal'],
        optionsTa: ['தள சதுரம் (Square Planar)', 'நான்முகி', 'எண்முகி', 'முக்கோண இருபிரமிடு'],
        correctAnswer: 'Square Planar',
        explanationEn: 'XeF4 has sp3d2 hybridization with 4 bonding pairs and 2 lone pairs situated trans to each other.',
        explanationTa: 'XeF4 sp3d2 இனக்கலப்பு கொண்டு 4 பிணைப்பு ஜோடிகளும் 2 தனித்த ஜோடிகளும் கொண்ட தள சதுர வடிவம் பெற்றுள்ளது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'White phosphorus is highly poisonous and exhibits chemiluminescence (glows in the dark).',
        questionTa: 'வெண் பாஸ்பரஸ் அதிக நச்சுத்தன்மை கொண்டது மற்றும் இருளில் ஒளிரும் பண்புடையது.',
        correctAnswer: true,
        explanationEn: 'True. P4 white phosphorus oxidizes slowly in air, emitting a greenish-white glow.',
        explanationTa: 'சரி. வெண் பாஸ்பரஸ் காற்றில் மெதுவாக ஆக்சிஜனேற்றம் அடைந்து இருளில் ஒளிர்கிறது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'In Deacon’s process for chlorine production, which metal salt acts as catalyst?',
        questionTa: 'குளோரின் தயாரிக்கும் டீக்கன் முறையில் வினையூக்கியாகப் பயன்படும் உப்பு எது?',
        optionsEn: ['CuCl2', 'FeCl3', 'AlCl3', 'ZnCl2'],
        optionsTa: ['CuCl2', 'FeCl3', 'AlCl3', 'ZnCl2'],
        correctAnswer: 'CuCl2',
        explanationEn: '4HCl + O2 -> 2Cl2 + 2H2O is catalyzed by Cupric chloride (CuCl2) at 723 K.',
        explanationTa: 'CuCl2 முன்னிலையில் 723 K வெப்பநிலையில் HCl ஆக்சிஜனேற்றம் அடைந்து குளோரின் உருவாகிறது.'
      }
    ]
  },

  c12_chem_u4: {
    id: 'quiz_c12_chem_u4',
    chapterId: 'c12_chem_u4',
    titleEn: 'Transition & Inner Transition Elements Board Quiz',
    titleTa: 'இடைநிலை மற்றும் உள் இடைநிலைத் தனிமங்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What is the spin-only magnetic moment of Mn2+ ion (atomic number of Mn = 25)?',
        questionTa: 'Mn2+ அயனியின் சுழற்சி மட்டுமே காந்தத் திருப்புத்திறன் மதிப்பு என்ன (Mn-ன் அணு எண் = 25)?',
        optionsEn: ['5.92 BM', '4.90 BM', '3.87 BM', '1.73 BM'],
        optionsTa: ['5.92 BM', '4.90 BM', '3.87 BM', '1.73 BM'],
        correctAnswer: '5.92 BM',
        explanationEn: 'Mn2+ has 3d5 configuration (n = 5). μ = √[5(5+2)] = √35 = 5.92 BM.',
        explanationTa: 'Mn2+ 5 இணையாகாத எலக்ட்ரான்களைக் கொண்டுள்ளது (3d5). μ = √[5(7)] = √35 ≈ 5.92 BM.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What is the primary cause of Lanthanoid Contraction?',
        questionTa: 'லாந்தனாய்டு குறுக்கத்திற்கு முதன்மையான அடிப்படைக் காரணம் என்ன?',
        optionsEn: ['Poor shielding effect of 4f electrons', 'High electronegativity of lanthanum', 'Increase in principal quantum number', 'Presence of unpaired d electrons'],
        optionsTa: ['4f எலக்ட்ரான்களின் மிகக் குறைந்த திரைமறைப்பு விளைவு', 'லாந்தனத்தின் அதிக எலக்ட்ரான் கவர்தன்மை', 'முதன்மை குவாண்டம் எண் கூடுதல்', 'd எலக்ட்ரான்கள்'],
        correctAnswer: 'Poor shielding effect of 4f electrons',
        explanationEn: 'Diffuse 4f orbitals shield nuclear charge poorly, pulling outer electron shells inward steadily.',
        explanationTa: '4f ஆர்பிட்டால்களின் குறைந்த திரைமறைப்புத்திறனால் உட்கரு மின்சுமை வெளிக்கூட்டு எலக்ட்ரான்களை உள்ளே இழுக்கிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Aqueous solutions containing Zn2+ ions are intensely colored due to d-d electronic transitions.',
        questionTa: 'Zn2+ அயனிகளைக் கொண்ட நீர்க்கரைசல்கள் d-d எலக்ட்ரான் இடப்பெயர்ச்சியால் வண்ணமயமாக இருக்கும்.',
        correctAnswer: false,
        explanationEn: 'False! Zn2+ has a fully filled 3d10 subshell; no d-d transitions are possible, so Zn2+ is colorless.',
        explanationTa: 'தவறு! Zn2+ 3d10 முழுமையான எலக்ட்ரான் அமைப்பைக் கொண்டிருப்பதால் d-d இடப்பெயர்ச்சி இன்றி நிறமற்றதாக இருக்கும்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'What is the equivalent weight of KMnO4 in an acidic medium during redox titration?',
        questionTa: 'அமில ஊடகத்தில் ஆக்சிஜனேற்ற-ஒடுக்க தரம் பார்த்தலில் KMnO4-ன் சமான எடை என்ன?',
        optionsEn: ['Molecular weight / 5', 'Molecular weight / 3', 'Molecular weight / 1', 'Molecular weight / 2'],
        optionsTa: ['மூலக்கூறு எடை / 5', 'மூலக்கூறு எடை / 3', 'மூலக்கூறு எடை / 1', 'மூலக்கூறு எடை / 2'],
        correctAnswer: 'Molecular weight / 5',
        explanationEn: 'In acid medium, MnO4- gains 5 electrons to become Mn2+ (change in oxidation state = 7 to 2 = 5).',
        explanationTa: 'அமில ஊடகத்தில் MnO4- 5 எலக்ட்ரான்களை ஏற்று Mn2+-ஆக மாறுவதால் சமான எடை = M/5 ஆகும்.'
      }
    ]
  },

  c12_chem_u5: {
    id: 'quiz_c12_chem_u5',
    chapterId: 'c12_chem_u5',
    titleEn: 'Coordination Chemistry Board Quiz',
    titleTa: 'அணைவு வேதியியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'According to Werner’s theory, which valency determines the stereochemistry (spatial geometry) of a complex?',
        questionTa: 'வெர்னர் கொள்கைப்படி அணைவுச் சேர்மத்தின் முப்பரிமாண வடிவத்தை நிர்ணயிக்கும் இணைதிறன் எது?',
        optionsEn: ['Secondary Valency', 'Primary Valency', 'Tertiary Valency', 'Electrovalency'],
        optionsTa: ['இரண்டாம் நிலை இணைதிறன்', 'முதன்மை இணைதிறன்', 'மூன்றாம் நிலை இணைதிறன்', 'மின் இணைதிறன்'],
        correctAnswer: 'Secondary Valency',
        explanationEn: 'Secondary valency is non-ionizable and directed towards fixed positions in space.',
        explanationTa: 'இரண்டாம் நிலை இணைதிறன் திசைப்பண்பு உடையதால் அது மூலக்கூறின் வடிவத்தை நிர்ணயிக்கிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What type of isomerism is demonstrated by [Co(NH3)5Br]SO4 and [Co(NH3)5SO4]Br?',
        questionTa: '[Co(NH3)5Br]SO4 மற்றும் [Co(NH3)5SO4]Br ஆகிய இரண்டும் எந்த வகை மாற்றியத்திற்குக் காட்டுகளாகும்?',
        optionsEn: ['Ionization Isomerism', 'Hydrate Isomerism', 'Linkage Isomerism', 'Coordination Isomerism'],
        optionsTa: ['அயனியாதல் மாற்றியம்', 'நீரேற்ற மாற்றியம்', 'இணைப்பு மாற்றியம்', 'அணைவு மாற்றியம்'],
        correctAnswer: 'Ionization Isomerism',
        explanationEn: 'They produce different ions in solution: one yields SO4(2-) and the other yields Br(-).',
        explanationTa: 'நீர்க்கரைசலில் இவை முறையே சல்பேட் மற்றும் புரோமைடு அயனிகளைத் தருகின்றன.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Cis-platin, cis-[Pt(NH3)2Cl2], is an effective chemotherapy drug used in cancer treatment.',
        questionTa: 'சிஸ்-பிளாட்டின் cis-[Pt(NH3)2Cl2] புற்றுநோய் மருத்துவத்தில் பயன்படும் ஒரு வேதி மருந்தாகும்.',
        correctAnswer: true,
        explanationEn: 'True. Cis-platin binds to DNA and inhibits division of cancer cells.',
        explanationTa: 'சரி. சிஸ்-பிளாட்டின் புற்றுநோய் செல்களின் பெருக்கத்தைத் தடுக்கும் சிறந்த மருந்தாகும்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'In an octahedral crystal field, how do the 5 d-orbitals split in energy?',
        questionTa: 'எண்முகி படிகப் புலத்தில் 5 d-ஆர்பிட்டால்கள் எவ்வாறு ஆற்றல் பிளவு அடைகின்றன?',
        optionsEn: ['3 lower energy t2g and 2 higher energy eg', '2 lower energy t2g and 3 higher energy eg', '4 lower energy and 1 higher energy', 'All remain degenerate'],
        optionsTa: ['குறைந்த ஆற்றல் கொண்ட 3 t2g மற்றும் அதிக ஆற்றல் கொண்ட 2 eg', 'குறைந்த 2 t2g மற்றும் அதிக 3 eg', '4 குறைந்த மற்றும் 1 அதிக ஆற்றல்', 'சம ஆற்றலில் இருக்கும்'],
        correctAnswer: '3 lower energy t2g and 2 higher energy eg',
        explanationEn: 'Ligands approaching along the Cartesian axes repel dx2-y2 and dz2 directly, raising them into eg (+0.6Δo) and leaving dxy, dyz, dzx in lower t2g (-0.4Δo).',
        explanationTa: 'அச்சுகளின் வழியே வரும் ஈனிகள் காரணமாக dx2-y2, dz2 உயர்ந்து eg (+0.6Δo) ஆகவும், dxy, dyz, dzx இறங்கி t2g (-0.4Δo) ஆகவும் பிரிகின்றன.'
      }
    ]
  }
};

export const CHEM_VOL1A_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_chem_u1: {
    id: 'diag_c12_chem_u1',
    chapterId: 'c12_chem_u1',
    titleEn: 'Froth Flotation Process & Ellingham Reduction Threshold Diagram',
    titleTa: 'நுரை மிதப்பு முறை மற்றும் எலிங்கம் வரைபட கட்டமைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">Froth Flotation Cell</text>
      <rect x="50" y="90" width="210" height="40" rx="6" fill="#bfdbfe"/>
      <text x="155" y="115" text-anchor="middle" fill="#1d4ed8" font-size="12">Froth Layer with Ore (PbS)</text>
      <path d="M 155 130 L 155 210" stroke="#3b82f6" stroke-width="6"/>
      <circle cx="155" cy="220" r="14" fill="#60a5fa"/>
      <text x="155" y="248" text-anchor="middle" fill="#64748b" font-size="11">Air Agitator Impeller</text>
      <rect x="320" y="40" width="250" height="220" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="445" y="70" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">Ellingham Diagram (ΔG° vs T)</text>
      <line x1="350" y1="210" x2="540" y2="210" stroke="#475569" stroke-width="2"/>
      <line x1="350" y1="210" x2="350" y2="90" stroke="#475569" stroke-width="2"/>
      <line x1="350" y1="120" x2="520" y2="180" stroke="#dc2626" stroke-width="2.5"/>
      <text x="530" y="185" fill="#dc2626" font-size="10">2Fe + O₂</text>
      <line x1="350" y1="160" x2="520" y2="100" stroke="#2563eb" stroke-width="2.5"/>
      <text x="530" y="105" fill="#2563eb" font-size="10">2C + O₂</text>
      <circle cx="435" cy="150" r="5" fill="#e11d48"/>
      <text x="435" y="140" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="11">T_threshold</text>
      <text x="445" y="240" text-anchor="middle" fill="#7e22ce" font-size="11">Carbon reduces FeO above T_threshold</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Froth Collector Layer', labelTa: 'நுரை அடுக்கு', descriptionEn: 'Pine oil coated sulphide ore particles floating on air bubbles.', descriptionTa: 'பைன் எண்ணெயால் மூடப்பட்ட சல்பைடு தாது நுரையாக மேலே மிதக்கிறது.', x: 26, y: 35 },
      { id: 'l2', labelEn: 'Rotating Agitator Stirrer', labelTa: 'சுழலும் கிளறி', descriptionEn: 'Pressurized air pipe creating turbulent foaming.', descriptionTa: 'அழுத்தப்பட்ட காற்றை உட்செலுத்தி நுரையை உருவாக்குகிறது.', x: 26, y: 73 },
      { id: 'l3', labelEn: 'Ellingham Inversion Crossing Point', labelTa: 'எலிங்கம் சந்திப்பு புள்ளி', descriptionEn: 'Temperature where reducing agent line falls below metal oxide line.', descriptionTa: 'ஒடுக்கும் காரணியின் கோடு உலோக ஆக்சைடுக்கு கீழே செல்லும் வெப்பநிலை புள்ளி.', x: 73, y: 50 }
    ]
  },

  c12_chem_u2: {
    id: 'diag_c12_chem_u2',
    chapterId: 'c12_chem_u2',
    titleEn: 'Diborane (B2H6) 3-Center-2-Electron Banana Bond Schematic',
    titleTa: 'டைபோரேன் வாழைப்பழ பிணைப்பு கட்டமைப்பு வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="30" width="520" height="240" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="60" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="15">Diborane (B₂H₆) Molecular Orbital Structure</text>
      <circle cx="230" cy="150" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="230" y="156" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="16">B</text>
      <circle cx="370" cy="150" r="28" fill="#dbeafe" stroke="#2563eb" stroke-width="2.5"/>
      <text x="370" y="156" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="16">B</text>
      <path d="M 230 150 Q 300 80 370 150" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="300" cy="100" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="300" y="105" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="13">H_bridge</text>
      <path d="M 230 150 Q 300 220 370 150" stroke="#f59e0b" stroke-width="8" fill="none" stroke-linecap="round"/>
      <circle cx="300" cy="200" r="16" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="300" y="205" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="13">H_bridge</text>
      <line x1="230" y1="150" x2="130" y2="100" stroke="#64748b" stroke-width="3"/>
      <circle cx="120" cy="95" r="14" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <text x="120" y="100" text-anchor="middle" fill="#334155" font-size="12">H_term</text>
      <line x1="230" y1="150" x2="130" y2="200" stroke="#64748b" stroke-width="3"/>
      <circle cx="120" cy="205" r="14" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <text x="120" y="210" text-anchor="middle" fill="#334155" font-size="12">H_term</text>
      <line x1="370" y1="150" x2="470" y2="100" stroke="#64748b" stroke-width="3"/>
      <circle cx="480" cy="95" r="14" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <text x="480" y="100" text-anchor="middle" fill="#334155" font-size="12">H_term</text>
      <line x1="370" y1="150" x2="470" y2="200" stroke="#64748b" stroke-width="3"/>
      <circle cx="480" cy="205" r="14" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <text x="480" y="210" text-anchor="middle" fill="#334155" font-size="12">H_term</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: '3c-2e Banana Bridge Bond', labelTa: '3-மைய-2-எலக்ட்ரான் வாழைப்பழ பிணைப்பு', descriptionEn: 'Delocalized electron density spanning B-H-B above and below the molecular plane.', descriptionTa: 'இரு போரான் அணுக்கள் மற்றும் ஒரு ஹைட்ரஜன் இடையே பகிரப்படும் எலக்ட்ரான் மேகம்.', x: 50, y: 35 },
      { id: 'l2', labelEn: 'Central sp3 Hybridized Boron', labelTa: 'மைய sp3 இனக்கலப்பு போரான்', descriptionEn: 'Boron atom bonded to 4 hydrogen atoms with tetrahedral coordination.', descriptionTa: 'நான்முகி வடிவில் 4 ஹைட்ரஜனுடன் பிணைக்கப்பட்ட போரான் அணு.', x: 38, y: 50 },
      { id: 'l3', labelEn: 'Standard 2c-2e Terminal B-H Bond', labelTa: 'வழக்கமான முனைய B-H பிணைப்பு', descriptionEn: 'Standard covalent two-center single bond in the molecular plane.', descriptionTa: 'தளத்தில் அமைந்துள்ள வழக்கமான இரு-மைய சகப்பிணைப்பு.', x: 20, y: 35 }
    ]
  },

  c12_chem_u3: {
    id: 'diag_c12_chem_u3',
    chapterId: 'c12_chem_u3',
    titleEn: 'Industrial Contact Process & Xenon Fluoride Molecular Geometries',
    titleTa: 'தொடு முறை மற்றும் செனான் புளூரைடுகளின் மூலக்கூறு வடிவங்கள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="14">Contact Process Flow</text>
      <rect x="50" y="90" width="90" height="35" rx="6" fill="#bfdbfe"/>
      <text x="95" y="112" text-anchor="middle" font-size="11">S + O₂ → SO₂</text>
      <path d="M 145 107 L 175 107" stroke="#2563eb" stroke-width="2"/>
      <rect x="180" y="90" width="85" height="35" rx="6" fill="#dbeafe"/>
      <text x="222" y="112" text-anchor="middle" font-size="11">Catalytic V₂O₅</text>
      <path d="M 222 130 L 222 160" stroke="#2563eb" stroke-width="2"/>
      <rect x="160" y="165" width="105" height="35" rx="6" fill="#fef3c7"/>
      <text x="212" y="187" text-anchor="middle" font-size="11">SO₃ + H₂SO₄</text>
      <path d="M 155 182 L 120 182" stroke="#d97706" stroke-width="2"/>
      <rect x="45" y="165" width="70" height="35" rx="6" fill="#fde68a"/>
      <text x="80" y="187" text-anchor="middle" font-weight="bold" font-size="11">Oleum</text>
      <text x="155" y="240" text-anchor="middle" fill="#047857" font-weight="bold" font-size="12">Dilute Oleum → 98% H₂SO₄</text>
      <rect x="320" y="40" width="250" height="220" rx="12" fill="#fdf4ff" stroke="#a855f7" stroke-width="2"/>
      <text x="445" y="70" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">XeF₄ (Square Planar Geometry)</text>
      <circle cx="445" cy="150" r="24" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="445" y="156" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="14">Xe</text>
      <circle cx="390" cy="115" r="14" fill="#fae8ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="390" y="120" text-anchor="middle" font-size="12">F</text>
      <circle cx="500" cy="115" r="14" fill="#fae8ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="500" y="120" text-anchor="middle" font-size="12">F</text>
      <circle cx="390" cy="185" r="14" fill="#fae8ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="390" y="190" text-anchor="middle" font-size="12">F</text>
      <circle cx="500" cy="185" r="14" fill="#fae8ff" stroke="#a855f7" stroke-width="1.5"/>
      <text x="500" y="190" text-anchor="middle" font-size="12">F</text>
      <ellipse cx="445" cy="100" rx="12" ry="7" fill="#cbd5e1"/>
      <ellipse cx="445" cy="200" rx="12" ry="7" fill="#cbd5e1"/>
      <text x="445" y="240" text-anchor="middle" fill="#6b21a8" font-size="11">sp³d² Hybrid: 2 Lone Pairs (Trans)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'V2O5 Catalytic Oxidation Converter', labelTa: 'V2O5 வினையூக்கி மாற்றி', descriptionEn: 'Exothermic conversion of SO2 to SO3 under optimum pressure.', descriptionTa: 'SO2-ஐ SO3-ஆக மாற்றும் வெப்ப உமிழ் வினையூக்கக் கலம்.', x: 37, y: 35 },
      { id: 'l2', labelEn: 'Oleum Synthesis Chamber', labelTa: 'ஓலியம் உருவாக்கம்', descriptionEn: 'Absorption of SO3 in concentrated H2SO4 prevents acid mist.', descriptionTa: 'கந்தக அமிலத்தில் SO3-ஐ உறிஞ்சி ஓலியம் (H2S2O7) உருவாக்கும் படி.', x: 13, y: 60 },
      { id: 'l3', labelEn: 'XeF4 Square Planar Geometry', labelTa: 'XeF4 தள சதுர வடிவம்', descriptionEn: '4 equatorial Xe-F bonds with 2 axial lone pairs minimizing repulsion.', descriptionTa: 'தளத்தில் 4 புளூரின்களும் அச்சில் இரு தனித்த எலக்ட்ரான் ஜோடிகளும் கொண்ட வடிவம்.', x: 74, y: 50 }
    ]
  },

  c12_chem_u4: {
    id: 'diag_c12_chem_u4',
    chapterId: 'c12_chem_u4',
    titleEn: 'Lanthanoid Contraction Radius Curve & d-d Transition Color Origin',
    titleTa: 'லாந்தனாய்டு குறுக்க ஆரம் வரைபடம் & d-d இடப்பெயர்ச்சி நிற உருவாக்கம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="260" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="160" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Lanthanoid Contraction (La³⁺ → Lu³⁺)</text>
      <line x1="60" y1="210" x2="260" y2="210" stroke="#64748b" stroke-width="1.5"/>
      <line x1="60" y1="210" x2="60" y2="90" stroke="#64748b" stroke-width="1.5"/>
      <path d="M 70 105 Q 160 145 250 175" fill="none" stroke="#2563eb" stroke-width="3"/>
      <circle cx="70" cy="105" r="5" fill="#1e40af"/>
      <text x="70" y="95" text-anchor="middle" font-size="10">La³⁺ (103 pm)</text>
      <circle cx="250" cy="175" r="5" fill="#1e40af"/>
      <text x="250" y="195" text-anchor="middle" font-size="10">Lu³⁺ (86 pm)</text>
      <text x="160" y="240" text-anchor="middle" fill="#475569" font-size="11">Atomic Number Z (57 → 71)</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">Origin of Color: d-d Transition</text>
      <line x1="340" y1="190" x2="380" y2="190" stroke="#047857" stroke-width="3"/>
      <line x1="390" y1="190" x2="430" y2="190" stroke="#047857" stroke-width="3"/>
      <line x1="440" y1="190" x2="480" y2="190" stroke="#047857" stroke-width="3"/>
      <text x="410" y="215" text-anchor="middle" font-size="11">t₂g orbitals (lower energy)</text>
      <line x1="365" y1="110" x2="415" y2="110" stroke="#047857" stroke-width="3"/>
      <line x1="435" y1="110" x2="485" y2="110" stroke="#047857" stroke-width="3"/>
      <text x="425" y="95" text-anchor="middle" font-size="11">eg orbitals (higher energy)</text>
      <path d="M 360 185 L 390 115" stroke="#ef4444" stroke-width="2.5" stroke-dasharray="4"/>
      <text x="440" y="150" fill="#dc2626" font-size="11">hν (absorbed light)</text>
      <text x="440" y="240" text-anchor="middle" fill="#047857" font-size="11">Complementary color transmitted</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Lanthanoid Ionic Radii Curve', labelTa: 'லாந்தனாய்டு அயனி ஆரம் வளைவு', descriptionEn: 'Monotonic shrinkage in radii from La to Lu caused by ineffective 4f shielding.', descriptionTa: '4f எலக்ட்ரான்களின் குறைந்த திரைமறைப்பால் ஆரம் தொடர்ந்து குறைதல்.', x: 27, y: 45 },
      { id: 'l2', labelEn: 'd-d Electron Photon Absorption', labelTa: 'd-d போட்டான் உறிஞ்சுதல்', descriptionEn: 'Electron absorbs visible photon to jump from t2g to eg level.', descriptionTa: 'கண்ணுறு ஒளியை உறிஞ்சி எலக்ட்ரான் t2g-லிருந்து eg-க்குத் தாவுகிறது.', x: 68, y: 50 },
      { id: 'l3', labelEn: 'Crystal Field Split Gap (Δo)', labelTa: 'படிக புல பிளவு இடைவெளி', descriptionEn: 'Energy difference determining the specific wavelength of absorbed color.', descriptionTa: 'உறிஞ்சப்படும் ஒளியின் அலைநீளத்தை நிர்ணயிக்கும் ஆற்றல் வேறுபாடு.', x: 74, y: 35 }
    ]
  },

  c12_chem_u5: {
    id: 'diag_c12_chem_u5',
    chapterId: 'c12_chem_u5',
    titleEn: 'Octahedral Crystal Field Splitting (CFT) & Isomerism Geometry',
    titleTa: 'எண்முகி படிகப் புல பிளவு (CFT) & மாற்றிய வடிவங்கள் வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="40" y="30" width="520" height="240" rx="14" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="58" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Octahedral Crystal Field Splitting Energy Diagram (CFT)</text>
      <rect x="60" y="145" width="80" height="20" rx="4" fill="#e2e8f0" stroke="#475569" stroke-width="1.5"/>
      <text x="100" y="160" text-anchor="middle" font-size="11">5 Degenerate d</text>
      <path d="M 145 155 L 215 155" stroke="#94a3b8" stroke-width="2" stroke-dasharray="3"/>
      <rect x="220" y="145" width="80" height="20" rx="4" fill="#cbd5e1" stroke="#334155" stroke-width="1.5"/>
      <text x="260" y="160" text-anchor="middle" font-size="11">Spherical Field</text>
      <path d="M 305 150 L 375 105" stroke="#3b82f6" stroke-width="2.5"/>
      <path d="M 305 160 L 375 200" stroke="#3b82f6" stroke-width="2.5"/>
      <rect x="380" y="95" width="90" height="25" rx="4" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
      <text x="425" y="112" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="12">eg (+0.6 Δo)</text>
      <rect x="380" y="190" width="90" height="25" rx="4" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="425" y="207" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="12">t₂g (-0.4 Δo)</text>
      <line x1="495" y1="107" x2="495" y2="202" stroke="#475569" stroke-width="2"/>
      <text x="525" y="158" font-weight="bold" fill="#2563eb" font-size="14">Δo</text>
      <line x1="360" y1="155" x2="490" y2="155" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4"/>
      <text x="425" y="152" text-anchor="middle" fill="#64748b" font-size="10">Barycenter</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Degenerate Metal d-Orbitals', labelTa: 'சமஆற்றல் d-ஆர்பிட்டால்கள்', descriptionEn: 'All five d-orbitals at identical energy in an isolated gas-phase ion.', descriptionTa: 'தனித்த வாயு அயனியில் 5 d-ஆர்பிட்டால்களும் சம ஆற்றலில் இருத்தல்.', x: 19, y: 52 },
      { id: 'l2', labelEn: 'eg Doublet (Axial Repulsion)', labelTa: 'eg ஜோடி (அச்சு விலகல்)', descriptionEn: 'dx2-y2 and dz2 orbitals elevated due to head-on ligand approach.', descriptionTa: 'ஈனிகள் நேருக்கு நேர் மோதுவதால் ஆற்றல் உயரும் dx2-y2 மற்றும் dz2.', x: 74, y: 35 },
      { id: 'l3', labelEn: 't2g Triplet (Inter-Axial)', labelTa: 't2g மூவகை (இடை அச்சு)', descriptionEn: 'dxy, dyz, and dzx lying between incoming ligand pathways.', descriptionTa: 'ஈனிகளின் பாதைகளுக்கு இடையில் அமைந்து ஆற்றல் குறையும் ஆர்பிட்டால்கள்.', x: 74, y: 68 }
    ]
  }
};

export const CHEM_VOL1A_VIDEOS: Record<string, VideoExplainer> = {
  c12_chem_u1: {
    id: 'vid_c12_chem_u1',
    chapterId: 'c12_chem_u1',
    titleEn: 'Animation: The Metallurgy Pipeline & Ellingham Thermodynamic Engine',
    titleTa: 'அனிமேஷன்: உலோகவியல் செயல்முறைகள் மற்றும் எலிங்கம் வரைபடம்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Froth Flotation: The Bubbling Separation',
        titleTa: 'நுரை மிதப்பு முறை செயல்முறை',
        visualDescription: 'Pine oil selectively coating copper pyrite grains while air bubbles lift them to the frothy crest.',
        narrationEn: 'In froth flotation, pine oil coats sulphide ore particles, making them water-repellent so they ride buoyant air bubbles to the surface!',
        narrationTa: 'நுரை மிதப்பு முறையில் பைன் எண்ணெய் சல்பைடு தாதுவை நனைத்து நீரை வெறுக்கச் செய்வதால் காற்று குமிழ்கள் மூலம் நுரையாக மிதக்கிறது!',
        conceptKey: 'Surface Wetting'
      },
      {
        sceneNumber: 2,
        titleEn: 'Ellingham Diagram: Reading the Thermodynamic Road Map',
        titleTa: 'எலிங்கம் வரைபடத்தின் ரகசியம்',
        visualDescription: 'Two intersecting lines on a graph; temperatures below and above the intersection dynamically highlighting reduction feasibility.',
        narrationEn: 'The Ellingham diagram is nature’s metallurgical roadmap! A lower metal line can reduce any oxide positioned above it at that temperature.',
        narrationTa: 'எலிங்கம் வரைபடத்தில் கீழேயுள்ள உலோகம் தனக்கு மேலே அமைந்துள்ள எந்தவொரு உலோக ஆக்சைடையும் ஒடுக்கும் ஆற்றல் கொண்டது!',
        conceptKey: 'Ellingham Rule'
      },
      {
        sceneNumber: 3,
        titleEn: 'Mond Process: Nickel Volatilization',
        titleTa: 'மாண்ட் முறை தூய்மையாக்கல்',
        visualDescription: 'Impure nickel reacting with carbon monoxide gas to form invisible Ni(CO)4 vapor, then depositing gleaming 99.9% pure nickel crystals at 460 K.',
        narrationEn: 'Nickel vaporizes with carbon monoxide into a volatile gas at 350 K, then decomposes at 460 K to yield ultra-pure nickel!',
        narrationTa: 'நிக்கல் 350 K-ல் கார்பன் மோனாக்சைடுடன் இணைந்து வாயுவாகி, 460 K-ல் 99.9% தூய நிக்கலாகப் படிகமாகிறது!',
        conceptKey: 'Vapour Phase Refining'
      }
    ]
  },

  c12_chem_u2: {
    id: 'vid_c12_chem_u2',
    chapterId: 'c12_chem_u2',
    titleEn: 'Animation: Inert Pair Effect & Diborane Banana Bonding',
    titleTa: 'அனிமேஷன்: மந்த இணை விளைவு மற்றும் வாழைப்பழ பிணைப்பு',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Sleepy s-Electrons: Inert Pair Effect',
        titleTa: 'உறங்கும் s-எலக்ட்ரான்கள்: மந்த இணை விளைவு',
        visualDescription: 'As we descend from Boron down to Thallium, outer s-electrons refuse to bond due to ineffective d and f shielding.',
        narrationEn: 'As atoms grow heavy down the p-block, the inner s-electrons become reluctant to bond. This inert pair effect makes lower oxidation states thrive!',
        narrationTa: 'கனமான தனிமங்களில் உள் s-எலக்ட்ரான்கள் பிணைப்பில் ஈடுபடாமல் மந்தமாவதால் குறைந்த ஆக்ஸிஜனேற்ற நிலை அதிக நிலைப்புத்தன்மை பெறுகிறது!',
        conceptKey: 'Inert Pair Stability'
      },
      {
        sceneNumber: 2,
        titleEn: 'Diborane: Defying Normal Covalent Rules',
        titleTa: 'டைபோரேனின் வாழைப்பழ பிணைப்பு',
        visualDescription: 'Two curved yellow banana-shaped electron clouds bridging two boron atoms through hydrogen bridges.',
        narrationEn: 'With only 12 valence electrons for 6 bonds, Diborane invents two 3-center-2-electron banana bridge bonds to stay stable!',
        narrationTa: '12 எலக்ட்ரான்கள் மட்டுமே உள்ளதால், டைபோரேன் இரு 3-மைய-2-எலக்ட்ரான் வாழைப்பழ பாலப் பிணைப்புகளை உருவாக்குகிறது!',
        conceptKey: 'Multi-Center Bonding'
      },
      {
        sceneNumber: 3,
        titleEn: 'Diamond vs Graphite: The Allotrope Paradox',
        titleTa: 'வைரம் vs கிராஃபைட்: புறவேற்றுமை வடிவங்கள்',
        visualDescription: 'Hard interlocking 3D tetrahedral diamond lattice compared side-by-side with gliding 2D graphene sheets of graphite.',
        narrationEn: 'Both are pure carbon! Diamond locks carbon into rigid 3D tetrahedra, while graphite stacks flexible sheets with free delocalized electrons that conduct electricity.',
        narrationTa: 'இரண்டும் தூய கார்பனே! வைரம் கடினமான 3D நான்முகி அமைப்பையும், கிராஃபைட் மின்கடத்தும் வழுக்கும் அடுக்குகளையும் கொண்டுள்ளது.',
        conceptKey: 'Allotrope Structure'
      }
    ]
  },

  c12_chem_u3: {
    id: 'vid_c12_chem_u3',
    chapterId: 'c12_chem_u3',
    titleEn: 'Animation: The Contact Process & Xenon Molecular Shapes',
    titleTa: 'அனிமேஷன்: தொடு முறை கந்தக அமிலம் மற்றும் செனான் வடிவங்கள்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Inside the Contact Converter',
        titleTa: 'தொடு முறை வினையூக்கி உலை',
        visualDescription: 'SO2 and O2 molecules passing over glowing green V2O5 catalyst pellets, converting swiftly into SO3 gas.',
        narrationEn: 'In the Contact process, sulfur dioxide meets oxygen over vanadium pentoxide catalyst at 720 K to form sulfur trioxide cleanly!',
        narrationTa: 'தொடு முறையில் V2O5 வினையூக்கி முன்னிலையில் 720 K வெப்பநிலையில் சல்பர் டை ஆக்சைடு சல்பர் டிரை ஆக்சைடாக மாறுகிறது!',
        conceptKey: 'Catalytic Equilibrium'
      },
      {
        sceneNumber: 2,
        titleEn: 'Interhalogens: Unequal Halogen Partnerships',
        titleTa: 'ஹாலஜனிடைச் சேர்மங்களின் ஆற்றல்',
        visualDescription: 'A large Iodine atom surrounded by 7 small Fluorine atoms forming a pentagonal bipyramidal IF7 star.',
        narrationEn: 'Interhalogen compounds combine two different halogens. Because the dissimilar bond is strained, they react more fiercely than elemental halogens!',
        narrationTa: 'இரு வேறுபட்ட ஆலசன்கள் இணையும் போது பிணைப்பு பலவீனமடைவதால் அவை தனி ஆலசன்களை விட அதிக வினைத்திறன் பெறுகின்றன!',
        conceptKey: 'Interhalogen Reactivity'
      },
      {
        sceneNumber: 3,
        titleEn: 'Awakening the Noble Gases: Xenon Fluorides',
        titleTa: 'மந்த வாயுக்களின் சேர்மங்கள்',
        visualDescription: 'XeF4 forming a square planar shape with two electron lone pairs balancing out at 180 degrees.',
        narrationEn: 'Once thought totally unreactive, Xenon pairs with greedy Fluorine atoms to form crystalline fluorides like square planar XeF4!',
        narrationTa: 'மந்த வாயுவான செனான் தீவிர புளூரினுடன் இணைந்து XeF4 போன்ற தள சதுர படிகச் சேர்மங்களை உருவாக்குகிறது!',
        conceptKey: 'Noble Gas Reactivity'
      }
    ]
  },

  c12_chem_u4: {
    id: 'vid_c12_chem_u4',
    chapterId: 'c12_chem_u4',
    titleEn: 'Animation: Transition Metal Colors & Lanthanoid Contraction',
    titleTa: 'அனிமேஷன்: இடைநிலை தனிமங்களின் வண்ணங்கள் & லாந்தனாய்டு குறுக்கம்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Origin of Transition Colors: d-d Transition',
        titleTa: 'd-d எலக்ட்ரான் இடப்பெயர்ச்சியின் வண்ணம்',
        visualDescription: 'A white light beam striking a copper sulphate solution; red light being absorbed while vibrant blue light emerges.',
        narrationEn: 'Transition metal ions sparkle with color because unpaired d-electrons absorb specific wavelengths of light to leap from t2g to eg orbitals!',
        narrationTa: 'இணையாகாத d-எலக்ட்ரான்கள் குறிப்பிட்ட ஒளியை உறிஞ்சி t2g-லிருந்து eg-க்குத் தாவுவதால் இடைநிலை உலோகங்கள் வண்ணமயமாகின்றன!',
        conceptKey: 'd-d Jumping'
      },
      {
        sceneNumber: 2,
        titleEn: 'Spin-Only Magnetism in Action',
        titleTa: 'காந்தத் திருப்புத்திறன் இயக்கம்',
        visualDescription: 'Five unpaired electrons in Mn2+ aligning with a powerful magnetic field, pulling the sample into the magnet.',
        narrationEn: 'Every unpaired electron acts like a tiny spinning compass! Five unpaired electrons make Mn2+ strongly paramagnetic with 5.92 Bohr Magnetons.',
        narrationTa: 'ஒவ்வொரு இணையாகாத எலக்ட்ரானும் ஒரு சிறிய காந்தமாகும்! Mn2+ 5 எலக்ட்ரான்களுடன் 5.92 BM வலிமையான காந்தத்தன்மை பெறுகிறது.',
        conceptKey: 'Paramagnetic Alignment'
      },
      {
        sceneNumber: 3,
        titleEn: 'Lanthanoid Contraction: The Nuclear Pull',
        titleTa: 'லாந்தனாய்டு குறுக்கம்: உட்கருவின் பிடி',
        visualDescription: 'As atomic number climbs from 57 to 71, the 4f electrons fail to shield the nucleus, pulling outer shells closer and closer.',
        narrationEn: 'Because 4f electrons shield poorly, increasing nuclear charge pulls all electron shells tighter, making Hafnium almost identical in size to Zirconium!',
        narrationTa: '4f எலக்ட்ரான்களின் குறைந்த திரைமறைப்பால் உட்கரு வெளிக்கூட்டை இழுத்து லாந்தனாய்டுகளின் ஆரத்தை சீராகக் குறைக்கிறது!',
        conceptKey: 'Lanthanoid Contraction'
      }
    ]
  },

  c12_chem_u5: {
    id: 'vid_c12_chem_u5',
    chapterId: 'c12_chem_u5',
    titleEn: 'Animation: Crystal Field Splitting & Cisplatin Chemo Magic',
    titleTa: 'அனிமேஷன்: படிகப் புலப் பிளவு மற்றும் சிஸ்பிளாட்டின் மருத்துவம்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Werner’s Dual Valencies',
        titleTa: 'வெர்னரின் இரு இணைதிறன்கள்',
        visualDescription: 'Central cobalt atom with primary valency ion bonds (dotted lines) and fixed directional coordinate bonds (solid arrows).',
        narrationEn: 'Alfred Werner discovered that metal ions have dual valencies: an ionizable primary charge and a directional secondary coordination framework!',
        narrationTa: 'ஆல்ஃபிரட் வெர்னர் உலோக அயனிகளுக்கு அயனியாகும் முதன்மை இணைதிறனும், வடிவம் தரும் இரண்டாம் நிலை இணைதிறனும் உண்டு எனக் கண்டறிந்தார்!',
        conceptKey: 'Werner Valency'
      },
      {
        sceneNumber: 2,
        titleEn: 'Octahedral Crystal Field Splitting: t2g vs eg',
        titleTa: 't2g மற்றும் eg படிக புலப் பிளவு',
        visualDescription: 'Six incoming negative ligands causing the five d-orbitals to split into three low-energy t2g orbitals and two high-energy eg orbitals.',
        narrationEn: 'Incoming ligands repel the axial orbitals dx2-y2 and dz2 directly, forcing them to jump up into the higher energy eg level!',
        narrationTa: 'ஈனிகள் அச்சு வழியே நெருங்கும் போது dx2-y2 மற்றும் dz2 ஆர்பிட்டால்கள் விலகி அதிக ஆற்றல் கொண்ட eg நிலைக்குச் செல்கின்றன!',
        conceptKey: 'CFT Splitting'
      },
      {
        sceneNumber: 3,
        titleEn: 'Cisplatin: The Life-Saving Isomer',
        titleTa: 'சிஸ்பிளாட்டின் புற்றுநோய் மருத்துவம்',
        visualDescription: 'Cis-diamminedichloroplatinum(II) molecule slipping between DNA strands to prevent cancer cells from multiplying.',
        narrationEn: 'Geometry matters in life-saving medicine! The cis-isomer of Pt(NH3)2Cl2 halts cancer DNA replication, while the trans-isomer is biologically inactive.',
        narrationTa: 'சிஸ்-பிளாட்டின் மூலக்கூறு புற்றுநோய் செல்களின் DNA பெருக்கத்தைத் தடுத்து உயிரைக் காப்பாற்றும் சிறந்த மருந்தாக விளங்குகிறது!',
        conceptKey: 'Cisplatin Mechanism'
      }
    ]
  }
};
