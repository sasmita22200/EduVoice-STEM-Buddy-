import { NoteItem, SummaryItem, ChapterQuiz, Chapter, SchematicDiagram, VideoExplainer } from '../types';

/**
 * Class 12 Chemistry - Volume 2 (Units 11–15: Organic & Applied Chemistry)
 * 11. Hydroxy Compounds and Ethers (ஹைட்ராக்ஸி சேர்மங்கள் மற்றும் ஈதர்கள்)
 * 12. Carbonyl Compounds and Carboxylic Acids (கார்பனைல் சேர்மங்கள் மற்றும் கார்பாக்சிலிக் அமிலங்கள்)
 * 13. Organic Nitrogen Compounds (கரிம நைட்ரஜன் சேர்மங்கள்)
 * 14. Biomolecules (உயிர் மூலக்கூறுகள்)
 * 15. Chemistry in Everyday Life (அன்றாட வாழ்வில் வேதியியல்)
 */

export const CHEM_VOL2_CHAPTERS: Chapter[] = [
  {
    id: 'c12_chem_u11',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 3,
    unitNameEn: 'Volume 2: Organic Chemistry',
    unitNameTa: 'தொகுதி 2: கரிம வேதியியல்',
    chapterNumber: 11,
    titleEn: 'Unit 11: Hydroxy Compounds and Ethers (ஹைட்ராக்ஸி சேர்மங்கள் மற்றும் ஈதர்கள்)',
    titleTa: 'அலகு 11: ஹைட்ராக்ஸி சேர்மங்கள் மற்றும் ஈதர்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u12',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 3,
    unitNameEn: 'Volume 2: Organic Chemistry',
    unitNameTa: 'தொகுதி 2: கரிம வேதியியல்',
    chapterNumber: 12,
    titleEn: 'Unit 12: Carbonyl Compounds and Carboxylic Acids (கார்பனைல் சேர்மங்கள் மற்றும் கார்பாக்சிலிக் அமிலங்கள்)',
    titleTa: 'அலகு 12: கார்பனைல் சேர்மங்கள் மற்றும் கார்பாக்சிலிக் அமிலங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u13',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 3,
    unitNameEn: 'Volume 2: Organic Chemistry',
    unitNameTa: 'தொகுதி 2: கரிம வேதியியல்',
    chapterNumber: 13,
    titleEn: 'Unit 13: Organic Nitrogen Compounds (கரிம நைட்ரஜன் சேர்மங்கள்)',
    titleTa: 'அலகு 13: கரிம நைட்ரஜன் சேர்மங்கள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u14',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 4,
    unitNameEn: 'Volume 2: Biomolecules & Applied Chemistry',
    unitNameTa: 'தொகுதி 2: உயிர்மூலக்கூறுகள் மற்றும் பயன்பாட்டு வேதியியல்',
    chapterNumber: 14,
    titleEn: 'Unit 14: Biomolecules (உயிர் மூலக்கூறுகள்)',
    titleTa: 'அலகு 14: உயிர் மூலக்கூறுகள்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  },
  {
    id: 'c12_chem_u15',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    unitNumber: 4,
    unitNameEn: 'Volume 2: Biomolecules & Applied Chemistry',
    unitNameTa: 'தொகுதி 2: உயிர்மூலக்கூறுகள் மற்றும் பயன்பாட்டு வேதியியல்',
    chapterNumber: 15,
    titleEn: 'Unit 15: Chemistry in Everyday Life (அன்றாட வாழ்வில் வேதியியல்)',
    titleTa: 'அலகு 15: அன்றாட வாழ்வில் வேதியியல்',
    status: 'verified',
    hasNotes: true,
    hasSummary: true,
    hasQuiz: true,
    hasVideo: true,
    hasDiagram: true,
    textbookUrl: 'https://www.tnschools.gov.in/textbooks'
  }
];

export const CHEM_VOL2_NOTES: Record<string, NoteItem> = {
  c12_chem_u11: {
    id: 'note_c12_chem_u11',
    chapterId: 'c12_chem_u11',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Hydroxy Compounds & Ethers: Lucas Test, Victor Meyer, Kolbe, Reimer-Tiemann & Williamson Synthesis',
    titleTa: 'ஹைட்ராக்ஸி சேர்மங்கள் & ஈதர்கள்: லூகாஸ் சோதனை, விக்டர் மேயர், கோல்ப், ரீமர்-டீமன் & வில்லியம்சன் தொகுப்பு',
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
    changeNote: 'Distinction tests for 1°, 2°, 3° alcohols (Lucas, Victor Meyer), phenol reactions (Kolbe, Reimer-Tiemann), and Williamson ether synthesis.',
    changeNoteTa: 'ஆல்கஹால்களை வேறுபடுத்தும் சோதனைகள், பீனால் வினைகள் மற்றும் வில்லியம்சன் தொகுப்பு.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Distinction Between Primary, Secondary, and Tertiary Alcohols
* **Lucas Test (லூகாஸ் சோதனை)**:
  * Reagent: Anhydrous $ZnCl_2 + \\text{conc. } HCl$.
  * **$3^\\circ$ Alcohol**: Immediate cloudiness/turbidity (alkyl chloride forms instantaneously).
  * **$2^\\circ$ Alcohol**: Cloudiness appears within 5 to 10 minutes at room temperature.
  * **$1^\\circ$ Alcohol**: No cloudiness at room temperature (turbidity appears only on heating).
* **Victor Meyer Test (விக்டர் மேயர் சோதனை)**:
  * Alcohol $\\xrightarrow{P/I_2} \\text{Alkyl iodide} \\xrightarrow{AgNO_2} \\text{Nitroalkane} \\xrightarrow{HNO_2} \\dots \\xrightarrow{NaOH}$:
  * **$1^\\circ$ Alcohol**: Forms Nitrolic acid $\\rightarrow$ **Blood Red colour** in alkali.
  * **$2^\\circ$ Alcohol**: Forms Pseudonitrol $\\rightarrow$ **Blue colour** in alkali.
  * **$3^\\circ$ Alcohol**: No reaction with $HNO_2$ $\\rightarrow$ **Colourless**.
  * *(Mnemonic: **R-B-C** $\\rightarrow$ Red, Blue, Colourless).*

### 2. Important Reactions of Phenol
* **Kolbe's Reaction (கோல்ப் வினை)**:
  * Phenol treated with $NaOH$ and $CO_2$ at $400\\text{ K}, 4-7\\text{ atm}$ followed by acid hydrolysis yields **Salicylic acid** (2-hydroxybenzoic acid).
* **Reimer-Tiemann Reaction (ரீமர்-டீமன் வினை)**:
  * Phenol heated with chloroform ($CHCl_3$) and aqueous $NaOH$ at $340\\text{ K}$ followed by acid hydrolysis introduces an aldehyde group at the ortho position, producing **Salicylaldehyde** (2-hydroxybenzaldehyde). Intermediate: Dichlorocarbene ($:CCl_2$).
* **Coupling Reaction with Diazonium Salt**:
  * Phenol couples with benzene diazonium chloride in weakly basic medium ($pH = 9-10$) to yield p-hydroxyazobenzene (**Orange dye**).
* **Phthalein Reaction**:
  * Phenol heated with phthalic anhydride in presence of conc. $H_2SO_4$ forms **Phenolphthalein indicator**.

### 3. Ethers & Williamson Synthesis (வில்லியம்சன் தொகுப்பு)
* **Williamson Synthesis**:
  * Reaction of an alkyl halide with sodium alkoxide ($R-X + R'-O^-Na^+ \\rightarrow R-O-R' + NaX$).
  * Mechanism: $S_N2$ displacement. Alkyl halide must be **primary** ($1^\\circ$) to prevent $E_2$ alkene elimination!
* **Cleavage of Ethers with HI**:
  * With cold $HI$: $CH_3-O-C_2H_5 + HI \\rightarrow CH_3I + C_2H_5OH$ (Iodide attaches to smaller alkyl group).
  * With excess hot $HI$: Produces both alkyl iodides + $H_2O$.`,
    bodyTa: `### 1. ஓரிணைய, ஈரிணைய, மூவிணைய ஆல்கஹால்களை வேறுபடுத்தல்
* **லூகாஸ் சோதனை (Lucas Test)**:
  * காரணி: நீரற்ற $ZnCl_2$ + அடர் $HCl$.
  * **$3^\\circ$ ஆல்கஹால்**: உடனே கலங்கல் தன்மை தோன்றுகிறது.
  * **$2^\\circ$ ஆல்கஹால்**: 5-10 நிமிடங்களில் கலங்கல் தன்மை தோன்றுகிறது.
  * **$1^\\circ$ ஆல்கஹால்**: அறை வெப்பநிலையில் கலங்கல் தன்மை உருவாவதில்லை (சூடுபடுத்தினால் மட்டுமே தோன்றும்).
* **விக்டர் மேயர் சோதனை**:
  * ஆல்கஹால் $\\rightarrow$ அல்கைல் அயோடைடு $\\rightarrow$ நைட்ரோ சேர்மம் $\\rightarrow$ நைட்ரஸ் அமிலம் $\\rightarrow NaOH$:
  * **$1^\\circ$ ஆல்கஹால்**: **இரத்த சிவப்பு நிறம்** (நைட்ரோலிக் அமிலம்).
  * **$2^\\circ$ ஆல்கஹால்**: **நீல நிறம்** (சூடோநைட்ரோல்).
  * **$3^\\circ$ ஆல்கஹால்**: **நிறமற்றது** (வினை இல்லை).

### 2. பீனாலின் முக்கிய வினைகள்
* **கோல்ப் வினை (Kolbe's Reaction)**:
  * பீனால் + $NaOH + CO_2 \\xrightarrow{400\\text{ K}, 4-7\\text{ atm}} \\xrightarrow{H^+}$ **சாலிசிலிக் அமிலம்** உருவாகிறது.
* **ரீமர்-டீமன் வினை (Reimer-Tiemann Reaction)**:
  * பீனால் + $CHCl_3 + NaOH \\xrightarrow{340\\text{ K}} \\xrightarrow{H^+}$ **சாலிசிலால்டிஹைடு** உருவாகிறது (இடைநிலை: டைகுளோரோகார்பீன் $:CCl_2$).
* **இணைப்பு வினை**: பென்சீன் டையசோனியம் குளோரைடுடன் பீனால் கார ஊடகத்தில் இணைந்து **ஆரஞ்சு நிற சாயம்** (p-ஹைட்ராக்ஸி அசோபென்சீன்) தருகிறது.

### 3. வில்லியம்சன் ஈதர் தொகுப்பு
* அல்கைல் ஹாலைடு + சோடியம் ஆல்காக்சைடு $\\rightarrow$ ஈதர்.
* $S_N2$ வழிமுறை; அல்கைல் ஹாலைடு ஓரிணைய ($1^\\circ$) ஹாலைடாக இருக்க வேண்டும்.
* $HI$-உடன் ஈதர் பிளத்தல்: எளிய ஆல்கைல் தொகுதியுடன் அயோடின் இணைகிறது ($CH_3I$).`,
    keyFormulas: [
      {
        nameEn: 'Williamson Ether Synthesis',
        nameTa: 'வில்லியம்சன் ஈதர் தொகுப்பு சமன்பாடு',
        formula: 'R-X + R\'-O^-Na^+ \\rightarrow R-O-R\' + NaX',
        explanationEn: 'SN2 nucleophilic substitution to synthesize symmetrical and unsymmetrical ethers.',
        explanationTa: 'அல்கைல் ஹாலைடு சோடியம் ஆல்காக்சைடுடன் இணைந்து ஈதர் உருவாக்கும் வினை.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Lucas, Victor Meyer, and Kolbe reactions.',
        changeNoteTa: 'லூகாஸ், விக்டர் மேயர் மற்றும் கோல்ப் வினைகளின் விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u12: {
    id: 'note_c12_chem_u12',
    chapterId: 'c12_chem_u12',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Carbonyl Compounds & Carboxylic Acids: Aldol, Cannizzaro, Clemmensen, Wolff-Kishner & HVZ Reactions',
    titleTa: 'கார்பனைல் சேர்மங்கள் & கார்பாக்சிலிக் அமிலங்கள்: ஆல்டால், கன்னிசாரோ, கிளமென்சன், உல்ஃப்-கிஷ்னர் & HVZ வினைகள்',
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
    changeNote: 'Rosenmund reduction, Stephen reaction, Aldol condensation, Cannizzaro disproportionation, and HVZ reaction.',
    changeNoteTa: 'ரோசன்மண்ட் ஒடுக்கம், ஆல்டால் குறுக்கம், கன்னிசாரோ வினை மற்றும் HVZ வினை.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Preparation of Aldehydes
* **Rosenmund Reduction (ரோசன்மண்ட் ஒடுக்கம்)**:
  * Acid chloride reduced with $H_2$ in boiling xylene using $Pd/BaSO_4$ poisoned with sulfur or quinoline to prevent over-reduction to alcohol:
    $$R-COCl + H_2 \\xrightarrow{Pd/BaSO_4} R-CHO + HCl$$
* **Stephen's Reaction**:
  * Alkyl cyanides ($R-CN$) reduced with $SnCl_2 + HCl$ followed by boiling with water yield aldehydes:
    $$R-CN \\xrightarrow{SnCl_2/HCl} R-CH=NH\\cdot HCl \\xrightarrow{H_2O} R-CHO + NH_4Cl$$

### 2. Name Reactions of Carbonyls
* **Aldol Condensation (ஆல்டால் குறுக்கம்)**:
  * Aldehydes or ketones containing **at least one $\\alpha$-hydrogen** atom react in presence of dilute base ($NaOH, Ba(OH)_2$) to form $\\beta$-hydroxyaldehydes (aldol) or $\\beta$-hydroxyketones (ketol), which on warming lose water to yield $\\alpha,\\beta$-unsaturated carbonyls.
    $$2CH_3CHO \\xrightarrow{\\text{dil. } NaOH} CH_3-CH(OH)-CH_2-CHO \\xrightarrow{\\Delta, -H_2O} CH_3-CH=CH-CHO \\text{ (Crotonaldehyde)}$$
* **Cannizzaro Reaction (கன்னிசாரோ வினை)**:
  * Aldehydes having **NO $\\alpha$-hydrogen** atoms (e.g. $HCHO$, $C_6H_5CHO$, $(CH_3)_3C-CHO$) undergo self-oxidation and reduction (disproportionation) in presence of $50\\%\\text{ conc. } NaOH$. One molecule is reduced to alcohol while the other is oxidized to carboxylate salt.
    $$2HCHO + \\text{conc. } NaOH \\rightarrow CH_3OH + HCOONa$$
    $$2C_6H_5CHO + \\text{conc. } NaOH \\rightarrow C_6H_5CH_2OH + C_6H_5COONa$$

### 3. Reductions to Hydrocarbons
* **Clemmensen Reduction**:
  * Carbonyl converted directly to methylene ($-CH_2-$) group using **Zinc amalgam ($Zn-Hg$) and conc. $HCl$**:
    $$>C=O + 4[H] \\xrightarrow{Zn-Hg / \\text{conc. } HCl} >CH_2 + H_2O$$
* **Wolff-Kishner Reduction**:
  * Carbonyl heated with **Hydrazine ($NH_2NH_2$) and $KOH$ in ethylene glycol** at $453-473\\text{ K}$ to yield hydrocarbon + $N_2$:
    $$>C=O \\xrightarrow{NH_2NH_2} >C=N-NH_2 \\xrightarrow{KOH/\\text{glycol}, \\Delta} >CH_2 + N_2$$

### 4. Carboxylic Acids & Hell-Volhard-Zelinsky (HVZ) Reaction
* **HVZ Reaction**:
  * Carboxylic acids having $\\alpha$-hydrogen react with $Cl_2$ or $Br_2$ in presence of red phosphorus to form $\\alpha$-halocarboxylic acids:
    $$CH_3COOH + Cl_2 \\xrightarrow{\\text{Red } P} CH_2Cl-COOH + HCl$$
* **Acidity of Carboxylic Acids**:
  * Enhanced by electron-withdrawing groups ($-I$ effect: $-NO_2 > -CN > -F > -Cl > -Br > -I > -C_6H_5$).
  * Depressed by electron-donating groups ($+I$ effect: $-CH_3, -C_2H_5$).`,
    bodyTa: `### 1. ஆல்டிஹைடுகள் தயாரித்தல்
* **ரோசன்மண்ட் ஒடுக்கம் (Rosenmund Reduction)**:
  * அமில குளோரைடு $Pd/BaSO_4$ (கந்தகம் அல்லது குயினோலின் நச்சு) முன்னிலையில் $H_2$-ஆல் ஒடுக்கப்பட்டு ஆல்டிஹைடாக மாறுகிறது:
    $$R-COCl + H_2 \\xrightarrow{Pd/BaSO_4} R-CHO + HCl$$
* **ஸ்டீபன் வினை**: அல்கைல் சயனைடு $SnCl_2 + HCl$-ஆல் ஒடுக்கப்பட்டு நீரால் காய்ச்சும்போது ஆல்டிஹைடு கிடைக்கிறது.

### 2. கார்பனைல் சேர்மங்களின் முக்கிய வினைகள்
* **ஆல்டால் குறுக்கம் (Aldol Condensation)**:
  * **குறைந்தது ஒரு $\\alpha$-ஹைட்ரஜனைக் கொண்ட** ஆல்டிஹைடுகள் அல்லது கீட்டோன்கள் நீர்த்த காரத்தின் முன்னிலையில் இணைந்து $\\beta$-ஹைட்ராக்ஸி ஆல்டிஹைடைத் தந்து, சூடுபடுத்தும்போது நீரினை இழந்து $\\alpha,\\beta$-நிறைவுறா ஆல்டிஹைடைத் தருகின்றன (குரோட்டனால்டிஹைடு).
* **கன்னிசாரோ வினை (Cannizzaro Reaction)**:
  * **$\\alpha$-ஹைட்ரஜன் இல்லாத** ஆல்டிஹைடுகள் ($HCHO, C_6H_5CHO$) $50\\%$ அடர் காரத்தின் முன்னிலையில் தமக்குள் ஆக்சிஜனேற்ற-ஒடுக்கம் (விகிதச்சிதைவு) அடைந்து ஒரு மூலக்கூறு ஆல்கஹாலாகவும் மற்றொரு மூலக்கூறு அமில உப்பாகவும் மாறுகின்றன.
    $$2HCHO + NaOH \\rightarrow CH_3OH + HCOONa$$

### 3. ஹைட்ரோகார்பனாக ஒடுக்கும் வினைகள்
* **கிளமென்சன் ஒடுக்கம்**: துத்தநாக இரசக்கலவை ($Zn-Hg$) மற்றும் அடர் $HCl$ முன்னிலையில் $>C=O$ தொகுதி $>CH_2$-ஆக மாறுகிறது.
* **உல்ஃப்-கிஷ்னர் ஒடுக்கம்**: ஹைட்ரசீன் ($NH_2NH_2$) மற்றும் எத்திலீன் கிளைக்காலில் கரைக்கப்பட்ட $KOH$ முன்னிலையில் சூடுபடுத்தும்போது $>CH_2 + N_2$ உருவாகிறது.

### 4. ஹெல்-வோல்ஹார்ட்-செலின்ஸ்கி (HVZ) வினை
* $\\alpha$-ஹைட்ரஜன் கொண்ட கார்பாக்சிலிக் அமிலங்கள் சிவப்பு பாஸ்பரஸ் முன்னிலையில் குளோரின் அல்லது புரோமினுடன் வினைபுரிந்து $\\alpha$-ஹாலோ அமிலங்களைத் தருகின்றன.`,
    keyFormulas: [
      {
        nameEn: 'Clemmensen & Wolff-Kishner Reduction Transformation',
        nameTa: 'கார்பனைல் ஒடுக்கம் சமன்பாடு',
        formula: '>C=O \\xrightarrow{\\text{Zn-Hg / HCl (or) NH}_2\\text{NH}_2\\text{ / KOH}} >CH_2',
        explanationEn: 'Complete deoxygenation of aldehydes/ketones to saturated hydrocarbons.',
        explanationTa: 'கார்பனைல் தொகுதியை முழுமையாக மெத்திலீன் தொகுதியாக மாற்றும் ஒடுக்க வினைகள்.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Aldol, Cannizzaro, Clemmensen, and HVZ.',
        changeNoteTa: 'ஆல்டால், கன்னிசாரோ, கிளமென்சன் மற்றும் HVZ வினைகளின் விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u13: {
    id: 'note_c12_chem_u13',
    chapterId: 'c12_chem_u13',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Organic Nitrogen Compounds: Gabriel Phthalimide, Hoffmann Bromamide, Carbylamine & Diazotisation',
    titleTa: 'கரிம நைட்ரஜன் சேர்மங்கள்: கேப்ரியல் தாலிமைடு, ஹாஃப்மன் புரோமமைடு, கார்பைலமின் & டையசோவாக்கல்',
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
    changeNote: 'Gabriel synthesis, Hoffmann degradation, Carbylamine test, Diazotisation, Sandmeyer, and Gattermann reactions.',
    changeNoteTa: 'கேப்ரியல் தாலிமைடு தொகுப்பு, ஹாஃப்மன் இறக்க வினை, கார்பைலமின் சோதனை மற்றும் சாண்ட்மேயர் வினை.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Synthesis of Primary Amines
* **Gabriel Phthalimide Synthesis (கேப்ரியல் தாலிமைடு தொகுப்பு)**:
  * Phthalimide treated with alcoholic $KOH$ yields potassium phthalimide, which reacts with alkyl halide ($R-X$) to form N-alkylphthalimide. Alkaline hydrolysis yields pure **pure aliphatic primary amine ($R-NH_2$)**.
  * *Limitation*: Aromatic amines ($C_6H_5NH_2$) **cannot** be prepared by this method because aryl halides do not undergo nucleophilic substitution with potassium phthalimide.
* **Hoffmann's Bromamide Degradation (ஹாஃப்மன் புரோமமைடு இறக்க வினை)**:
  * Acid amide heated with bromine and alcoholic/aqueous $KOH$ yields a primary amine containing **one carbon atom less** than the parent amide:
    $$R-CONH_2 + Br_2 + 4KOH \\rightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O$$
  * Excellent step-down method in organic conversions.

### 2. Carbylamine Test (Isocyanide Test - கார்பைலமின் சோதனை)
* **Only Primary Amines** ($1^\\circ$ aliphatic and aromatic) react when heated with chloroform ($CHCl_3$) and alcoholic $KOH$ to form isocyanides (carbylamines), characterized by an **extremely foul, offensive smell**:
  $$R-NH_2 + CHCl_3 + 3KOH \\rightarrow R-NC \\text{ (Carbylamine)} + 3KCl + 3H_2O$$
* Secondary ($2^\\circ$) and tertiary ($3^\\circ$) amines do not give this test.

### 3. Diazotisation & Arenediazonium Chemistry
* **Diazotisation (டையசோவாக்கல்)**:
  * Aniline reacts with nitrous acid ($NaNO_2 + \\text{conc. } HCl$) at ice-cold temperature ($0-5^\\circ\\text{C}$ / $273-278\\text{ K}$) to form Benzene Diazonium Chloride:
    $$C_6H_5NH_2 + NaNO_2 + 2HCl \\xrightarrow{273-278\\text{ K}} C_6H_5N_2^+Cl^- + NaCl + 2H_2O$$
* **Synthetic Applications of Diazonium Salt**:
  * **Sandmeyer Reaction**: $C_6H_5N_2^+Cl^- \\xrightarrow{Cu_2Cl_2/HCl} C_6H_5Cl + N_2$ (also with $Cu_2Br_2/HBr$ or $CuCN/KCN$).
  * **Gattermann Reaction**: Uses copper powder ($Cu/HCl$ or $Cu/HBr$) instead of cuprous salts.
  * **Coupling Reaction**: Couples with phenol at $pH = 9-10$ to form yellow/orange dye; couples with aniline at $pH = 4-5$ to form yellow butter dye.`,
    bodyTa: `### 1. ஓரிணைய அமீன்கள் தயாரித்தல்
* **கேப்ரியல் தாலிமைடு தொகுப்பு**:
  * தாலிமைடு + ஆல்கஹால் $KOH \\rightarrow$ பொட்டாசியம் தாலிமைடு $\\xrightarrow{R-X} \\xrightarrow{H_2O/OH^-}$ தூய **அலிபாடிக் ஓரிணைய அமீன் ($R-NH_2$)**.
  * *வரம்பு*: அரோமேட்டிக் அமீன்களை (அனிலீன்) இம்முறையில் தயாரிக்க முடியாது (அரைல் ஹாலைடு கருக்கவர் பதிலீட்டிற்கு உட்படாது).
* **ஹாஃப்மன் புரோமமைடு இறக்க வினை**:
  * அமில அமைடு + $Br_2 + 4KOH \\rightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O$.
  * தொடக்க அமைடை விட **ஒரு கார்பன் குறைவான** ஓரிணைய அமீன் கிடைக்கிறது.

### 2. கார்பைலமின் சோதனை (ஐசோசயனைடு சோதனை)
* **ஓரிணைய அமீன்கள் மட்டுமே** ($1^\\circ$) குளோரோஃபார்ம் மற்றும் ஆல்கஹால் $KOH$-உடன் சூடுபடுத்தும்போது சகிக்க முடியாத **கெட்ட நாற்றமுடைய ஐசோசயனைடைத்** தருகின்றன:
  $$R-NH_2 + CHCl_3 + 3KOH \\rightarrow R-NC + 3KCl + 3H_2O$$
* ஈரிணைய, மூவிணைய அமீன்கள் இச்சோதனையைத் தருவதில்லை.

### 3. டையசோவாக்கல் மற்றும் சாண்ட்மேயர் வினை
* **டையசோவாக்கல்**: அனிலீன் $NaNO_2 + HCl$-உடன் பனிக்கட்டி வெப்பநிலையில் ($0-5^\\circ\\text{C}$) வினைபுரிந்து பென்சீன் டையசோனியம் குளோரைடைத் தருகிறது ($C_6H_5N_2^+Cl^-$).
* **சாண்ட்மேயர் வினை**: டையசோனியம் உப்பு $Cu_2Cl_2/HCl$-உடன் வினைபுரிந்து குளோரோபென்சீனைத் தருகிறது.
* **இணைப்பு வினை**: பீனாலுடன் இணைந்து ஆரஞ்சு சாயத்தையும், அனிலீனுடன் இணைந்து மஞ்சள் சாயத்தையும் தருகிறது.`,
    keyFormulas: [
      {
        nameEn: 'Hoffmann Bromamide Degradation',
        nameTa: 'ஹாஃப்மன் புரோமமைடு சமன்பாடு',
        formula: 'R-CONH_2 + Br_2 + 4KOH \\rightarrow R-NH_2 + K_2CO_3 + 2KBr + 2H_2O',
        explanationEn: 'Decarbonylating step-down reaction transforming primary amides to amines with one fewer carbon.',
        explanationTa: 'ஒரு கார்பன் குறைவான அமீனை உருவாக்கும் இறக்க வினை.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Gabriel, Hoffmann, Carbylamine, and Sandmeyer.',
        changeNoteTa: 'கேப்ரியல், ஹாஃப்மன், கார்பைலமின் மற்றும் சாண்ட்மேயர் வினைகளின் விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u14: {
    id: 'note_c12_chem_u14',
    chapterId: 'c12_chem_u14',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Biomolecules: Glucose Structure, Peptide Bonds, DNA/RNA Double Helix, and Denaturation',
    titleTa: 'உயிர் மூலக்கூறுகள்: குளுக்கோஸ் கட்டமைப்பு, பெப்டைடு பிணைப்பு, DNA/RNA இரட்டைச் சுருள் மற்றும் இயல்பிழத்தல்',
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
    changeNote: 'D-Glucose structure proof, peptide bond linkage, protein denaturation, DNA vs RNA comparison, and vitamin deficiencies.',
    changeNoteTa: 'குளுக்கோஸ் கட்டமைப்பு நிறுவுதல், பெப்டைடு பிணைப்பு, DNA vs RNA மற்றும் வைட்டமின்கள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Carbohydrates: Structure of D-Glucose
* Molecular Formula: $C_6H_{12}O_6$.
* **Elucidation of Structure**:
  1. Prolonged heating with $HI$ and red $P$ yields **n-hexane** $\\rightarrow$ proves straight chain of 6 carbon atoms.
  2. Reacts with hydroxylamine ($NH_2OH$) to form oxime, and with $HCN$ to form cyanohydrin $\\rightarrow$ confirms presence of **carbonyl ($>C=O$) group**.
  3. Mild oxidation with bromine water ($Br_2/H_2O$) forms **Gluconic acid** (6-carbon monocarboxylic acid) $\\rightarrow$ confirms carbonyl is an **aldehyde ($-CHO$)**.
  4. Acetylation with acetic anhydride gives **glucose pentaacetate** $\\rightarrow$ confirms presence of **5 $-OH$ groups** on different carbons.
  5. Vigorous oxidation with conc. $HNO_3$ yields **Saccharic acid** (dicarboxylic acid) $\\rightarrow$ proves presence of a **primary alcohol ($-CH_2OH$) group**.

### 2. Amino Acids & Proteins
* **Zwitterion**: Dipolar amino acid form with $+H_3N-CH(R)-COO^-$ ($net\\ charge = 0$ at isoelectric point $pI$).
* **Peptide Bond ($-CO-NH-$)**: Formed by elimination of water between $\\alpha$-carboxyl group of one amino acid and $\\alpha$-amino group of another.
* **Denaturation of Proteins (புரதம் இயல்பிழத்தல்)**:
  * Disruption of secondary, tertiary, and quaternary structures due to temperature changes or pH alterations without affecting the primary sequence of amino acids (e.g. Coagulation of egg white on boiling, curdling of milk).

### 3. Nucleic Acids: DNA vs RNA
* Nucleotide Components: Pentose sugar + Nitrogenous base + Phosphate group.
  * Nucleoside = Sugar + Base; Nucleotide = Nucleoside + Phosphate.
* **Key Differences**:
  * **DNA**: 2-deoxy-D-ribose sugar; Bases: Adenine (A), Guanine (G), Cytosine (C), **Thymine (T)**; Double-stranded alpha-helix; stores genetic blueprint.
  * **RNA**: D-ribose sugar; Bases: Adenine (A), Guanine (G), Cytosine (C), **Uracil (U)**; Single-stranded; executes protein synthesis.
* **Base Pairing (Chargaff's Rule)**: Adenine pairs with Thymine via 2 hydrogen bonds ($A=T$); Guanine pairs with Cytosine via 3 hydrogen bonds ($G\\equiv C$).`,
    bodyTa: `### 1. கார்போஹைட்ரேட்டுகள்: குளுக்கோஸின் கட்டமைப்பு
* மூலக்கூறு வாய்ப்பாடு: $C_6H_{12}O_6$.
* **கட்டமைப்பை நிறுவுதல்**:
  1. $HI$ மற்றும் சிவப்பு $P$-உடன் சூடுபடுத்தும்போது **n-ஹெக்சேன்** கிடைப்பதால் 6 கார்பன்களும் நேர்கோட்டுச் சங்கிலியில் உள்ளன.
  2. ஹைட்ராக்சிலமினுடன் ஆக்சைமையும், $HCN$-உடன் சயனோஹைட்ரினையும் தருவதால் **கார்பனைல் தொகுதி** உள்ளது.
  3. புரோமின் நீரால் ஆக்சிஜனேற்றம் அடைந்து **குளுகோனிக் அமிலம்** தருவதால் அது **ஆல்டிஹைடு ($-CHO$)** ஆகும்.
  4. அசிட்டிக் நீரிலியுடன் **பென்டா அசிட்டேட்டைத்** தருவதால் 5 $-OH$ தொகுதிகள் உள்ளன.
  5. அடர் $HNO_3$-ஆல் **சாக்கரிக் அமிலம்** உருவாவதால் ஓரிணைய ஆல்கஹால் தொகுதி ($-CH_2OH$) உள்ளது.

### 2. அமினோ அமிலங்கள் மற்றும் புரதங்கள்
* **ஸ்விட்டர் அயனி (Zwitterion)**: ஒரே மூலக்கூறில் நேர் மற்றும் எதிர் மின்சுமைகளைக் கொண்ட இருமுனை அமைப்பு ($+H_3N-CH(R)-COO^-$).
* **பெப்டைடு பிணைப்பு ($-CO-NH-$)**: ஒரு அமினோ அமிலத்தின் $-COOH$ தொகுதியும் மற்றொன்றின் $-NH_2$ தொகுதியும் இணைந்து நீரை இழந்து உருவாகும் பிணைப்பு.
* **புரதம் இயல்பிழத்தல்**: வெப்பநிலை அல்லது pH மாற்றத்தால் புரதத்தின் இரண்டாம் மற்றும் மூன்றாம் நிலை அமைப்புகள் சிதைவுறுதல் (எ.கா: முட்டை வெண்கரு உறைதல், பால் தயிராதல்).

### 3. DNA மற்றும் RNA ஒப்பீடு
* **DNA**: டிஆக்சி-டி-ரைபோஸ் சர்க்கரை; காரங்கள்: A, G, C மற்றும் **தைமின் (T)**; இரட்டைச் சுருள் அமைப்பு.
* **RNA**: டி-ரைபோஸ் சர்க்கரை; காரங்கள்: A, G, C மற்றும் **யுராசில் (U)**; ஒற்றை இழை அமைப்பு.
* **கார இணைவு விதி**: $A=T$ (2 ஹைட்ரஜன் பிணைப்புகள்) மற்றும் $G\\equiv C$ (3 ஹைட்ரஜன் பிணைப்புகள்).`,
    keyFormulas: [
      {
        nameEn: 'Peptide Bond Condensation',
        nameTa: 'பெப்டைடு பிணைப்பு உருவாதல்',
        formula: 'R_1-COOH + R_2-NH_2 \\xrightarrow{-H_2O} R_1-CO-NH-R_2',
        explanationEn: 'Amide linkage linking two consecutive alpha-amino acid residues.',
        explanationTa: 'இரு அமினோ அமிலங்களை இணைக்கும் அமைடு பெப்டைடு பிணைப்பு.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with Glucose proof and DNA/RNA pairing.',
        changeNoteTa: 'குளுக்கோஸ் கட்டமைப்பு மற்றும் DNA/RNA கார இணைவு விளக்கங்கள்.'
      }
    ]
  },

  c12_chem_u15: {
    id: 'note_c12_chem_u15',
    chapterId: 'c12_chem_u15',
    classLevel: 12,
    subjectId: 'c12_chemistry',
    titleEn: 'Chemistry in Everyday Life: Pharmaceuticals, Cleansing Agents, Polymers & Food Additives',
    titleTa: 'அன்றாட வாழ்வில் வேதியியல்: மருந்தியல், தூய்மையாக்கிகள், பலபடிகள் மற்றும் உணவு சேர்க்கைகள்',
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
    changeNote: 'Classification of drugs, action of soaps/detergents, and polymerization reactions (Nylon-6,6, Bakelite, Buna-S).',
    changeNoteTa: 'மருந்துகளின் வகைகள், சோப்பு மற்றும் டிடர்ஜெண்ட்கள் செயல்பாடு மற்றும் பலபடியாக்கல் வினைகள்.',
    isNew: false,
    isUpdated: true,
    readTimeMinutes: 10,
    bodyEn: `### 1. Classification of Therapeutic Drugs
* **Analgesics (வலி நிவாரணிகள்)**:
  * Non-narcotic: Paracetamol, Aspirin (acetylsalicylic acid - inhibits prostaglandins, also antiplatelet).
  * Narcotic: Morphine, Codeine (relieve severe pain, habit-forming).
* **Antipyretics (காய்ச்சல் குறைப்பான்)**: Lower body temperature in fever (Paracetamol, Aspirin).
* **Antiseptics vs Disinfectants (தொற்றுநீக்கிகள்)**:
  * **Antiseptics**: Applied to living tissues (e.g. Dettol = chloroxylenol + $\\alpha$-terpineol, tincture of iodine, Bithionol in soaps).
  * **Disinfectants**: Applied to inanimate objects (e.g. $1\\%$ phenol, chlorine, sulfur dioxide). *($0.2\\%$ phenol is antiseptic, while $1.0\\%$ phenol is disinfectant).*
* **Antibiotics**: Inhibit growth or destroy microorganisms (Penicillin, Ampicillin, Chloramphenicol - broad spectrum).

### 2. Soaps & Synthetic Detergents
* **Saponification (சோப்பாக்குதல்)**: Alkaline hydrolysis of oils/fats (glyceryl esters of fatty acids) with $NaOH$:
  $$\\text{Fat / Oil} + 3NaOH \\rightarrow 3\\text{ Soap (RCOONa)} + \\text{Glycerol}$$
* **Cleansing Action (Micelle Formation)**:
  * Soap molecule has hydrophobic hydrocarbon tail and hydrophilic carboxylate ionic head.
  * Forms spherical micelles trapping grease/oil at core and dispersing in wash water.
* **Hard Water Problem**: Soaps react with $Ca^{2+}$ and $Mg^{2+}$ ions to form curdy white precipitates (scum), whereas synthetic detergents do not form scum in hard water.

### 3. Polymers & Polymerization
* **Nylon-6,6 (நைலான்-6,6)**: Condensation copolymer of Hexamethylenediamine and Adipic acid with elimination of water:
  $$n H_2N-(CH_2)_6-NH_2 + n HOOC-(CH_2)_4-COOH \\xrightarrow{\\Delta, -2nH_2O} \\text{Nylon-6,6}$$
* **Bakelite (பேக்கலைட்)**: Thermosetting cross-linked polymer of Phenol and Formaldehyde ($HCHO$) with Novolac intermediate.
* **Buna-S Rubber (பியூனா-S ரப்பர்)**: Synthetic copolymer of 1,3-butadiene and styrene in $3:1$ ratio in presence of sodium catalyst.`,
    bodyTa: `### 1. மருந்துகளின் வகைப்பாடு
* **வலி நிவாரணிகள் (Analgesics)**: பாராசிட்டமால், ஆஸ்பிரின் (போதையற்றவை); மார்பின், கோடீன் (போதை தரும் பழக்கத்தை உண்டாக்கும் வலி நிவாரணிகள்).
* **காய்ச்சல் தணிப்பான் (Antipyretics)**: காய்ச்சலைத் தணிக்கும் மருந்துகள் (பாராசிட்டமால்).
* **புரைத்தடுப்பான் vs தொற்றுநீக்கி**:
  * **புரைத்தடுப்பான் (Antiseptics)**: உயிருள்ள திசுக்களில் பூசப்படுபவை (டெட்டால் = குளோரோசைலினால் + $\\alpha$-டெர்பினியால்; $0.2\\%$ பீனால்).
  * **தொற்றுநீக்கி (Disinfectants)**: உயிரற்ற தளங்களில் பயன்படுத்தப்படுபவை ($1.0\\%$ பீனால், குளோரின்).
* **எதிர் நுண்ணுயிரிகள் (Antibiotics)**: பெனிசிலின், குளோராம்பெனிகால் (பரந்த வீச்சு நுண்ணுயிர் கொல்லி).

### 2. சோப்புகள் மற்றும் டிடர்ஜெண்ட்கள்
* **சோப்பாக்குதல் (Saponification)**: கொழுப்பு மற்றும் எண்ணெய்களை சோடியம் ஹைட்ராக்சைடுடன் நீராற்பகுத்து சோப்பு மற்றும் கிளிசரால் தயாரித்தல்.
* **சோப்பின் அழுக்கு நீக்கும் செயல்பாடு**:
  * ஹைட்ரோபோபிக் வால் எண்ணெய் அழுக்கிலும், ஹைட்ரோபிலிக் தலை நீரிலும் கரைந்து மைசெல் கூழ்மத்தை உருவாக்கி அழுக்கை நீக்குகிறது.
* கடின நீரில் உள்ள $Ca^{2+}$ மற்றும் $Mg^{2+}$ அயனிகளுடன் சோப்பு கரையாத வெண் வீழ்படிவை (Scum) உருவாக்குகிறது; ஆனால் செயற்கை டிடர்ஜெண்ட்கள் கடின நீரிலும் நன்கு நுரைத்து செயல்படுகின்றன.

### 3. பலபடிகள் (Polymers)
* **நைலான்-6,6**: ஹெக்சாமெத்திலீன் டைஅமீன் மற்றும் அடிபிக் அமிலம் இணைந்து உருவாகும் குறுக்க பலபடி.
* **பேக்கலைட் (Bakelite)**: பீனால் மற்றும் ஃபார்மால்டிஹைடு இணைந்து உருவாகும் வெப்பத்தால் இறுகும் குறுக்கு பிணைப்பு பலபடி.
* **பியூனா-S ரப்பர்**: 1,3-பியூட்டாடையீன் மற்றும் ஸ்டைரீன் இணைந்து உருவாகும் செயற்கை ரப்பர்.`,
    keyFormulas: [
      {
        nameEn: 'Saponification Ester Hydrolysis',
        nameTa: 'சோப்பாக்குதல் சமன்பாடு',
        formula: '\\text{Fat/Ester} + 3NaOH \\rightarrow 3\\text{ RCOONa (Soap)} + \\text{Glycerol}',
        explanationEn: 'Triglyceride alkaline hydrolysis producing long-chain fatty acid sodium carboxylates.',
        explanationTa: 'கொழுப்பை சோடியம் உப்பாகவும் கிளிசராலாகவும் மாற்றும் கார நீராற்பகுப்பு.'
      }
    ],
    revisions: [
      {
        version: '1.0',
        updatedAt: '21 Sep 2026',
        updatedAtTa: '21 செப் 2026',
        updatedBy: 'Dr. S. Meenakshisundaram',
        changeNote: 'Board exam revision notes with analgesics, soaps, and polymer structures.',
        changeNoteTa: 'மருந்துகள், சோப்பு மைசெல் மற்றும் பலபடி கட்டமைப்பு விளக்கங்கள்.'
      }
    ]
  }
};

export const CHEM_VOL2_SUMMARIES: Record<string, SummaryItem> = {
  c12_chem_u11: {
    id: 'sum_c12_chem_u11',
    chapterId: 'c12_chem_u11',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Unit 11 covers alcohols, phenols, and ethers: identifying primary/secondary/tertiary alcohols via Lucas and Victor Meyer tests, key phenol transformations like Kolbe and Reimer-Tiemann reactions, and ether preparation using Williamson synthesis.',
    simpleExplanationTa: 'அலகு 11 ஆல்கஹால்கள், பீனால்கள் மற்றும் ஈதர்களை விளக்குகிறது; லூகாஸ், விக்டர் மேயர் சோதனைகள், கோல்ப், ரீமர்-டீமன் வினைகள் மற்றும் வில்லியம்சன் ஈதர் தொகுப்பு ஆகியவை இதில் அடங்கும்.',
    keyPointsEn: [
      'Lucas test: 3° alcohol turns cloudy immediately, 2° in 5-10 mins, 1° requires heating.',
      'Victor Meyer test: 1° gives Blood Red, 2° gives Blue, 3° gives Colourless (R-B-C).',
      'Kolbe reaction synthesizes Salicylic acid; Reimer-Tiemann produces Salicylaldehyde.',
      'Williamson ether synthesis involves SN2 displacement of 1° alkyl halide by alkoxide.'
    ],
    keyPointsTa: [
      'லூகாஸ் சோதனை: 3° ஆல்கஹால் உடனடியாகக் கலங்குகிறது, 2° 5-10 நிமிடங்களில், 1° சூடாக்கினால் மட்டுமே கலங்கும்.',
      'விக்டர் மேயர் சோதனை: 1° சிவப்பு, 2° நீலம், 3° நிறமற்றது (R-B-C).',
      'கோல்ப் வினை சாலிசிலிக் அமிலத்தையும், ரீமர்-டீமன் சாலிசிலால்டிஹைடையும் தருகின்றன.',
      'வில்லியம்சன் தொகுப்பு SN2 வழியில் ஈதர்களை உருவாக்குகிறது.'
    ]
  },
  c12_chem_u12: {
    id: 'sum_c12_chem_u12',
    chapterId: 'c12_chem_u12',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Unit 12 explores aldehydes, ketones, and carboxylic acids: Rosenmund reduction, Aldol condensation (with α-H), Cannizzaro reaction (no α-H), Clemmensen & Wolff-Kishner reductions, and the HVZ reaction for α-halogenation.',
    simpleExplanationTa: 'அலகு 12 ஆல்டிஹைடுகள், கீட்டோன்கள் மற்றும் கார்பாக்சிலிக் அமிலங்களை விவரிக்கிறது: ரோசன்மண்ட் ஒடுக்கம், ஆல்டால் குறுக்கம், கன்னிசாரோ வினை, கிளமென்சன் & உல்ஃப்-கிஷ்னர் ஒடுக்கங்கள் மற்றும் HVZ வினை.',
    keyPointsEn: [
      'Aldol condensation occurs in aldehydes with α-hydrogen forming α,β-unsaturated carbonyls.',
      'Cannizzaro disproportionation takes place in aldehydes without α-hydrogen yielding alcohol and acid salt.',
      'Clemmensen (Zn-Hg/HCl) and Wolff-Kishner (NH2NH2/KOH) convert >C=O directly into >CH2.',
      'HVZ reaction selectively chlorinates/brominates the α-carbon of carboxylic acids.'
    ],
    keyPointsTa: [
      'ஆல்டால் குறுக்கம் α-ஹைட்ரஜன் கொண்ட ஆல்டிஹைடுகளில் நிகழ்கிறது.',
      'கன்னிசாரோ விகிதச்சிதைவு α-ஹைட்ரஜன் இல்லாத ஆல்டிஹைடுகளில் நிகழ்கிறது.',
      'கிளமென்சன் மற்றும் உல்ஃப்-கிஷ்னர் வினைகள் கார்பனைல் தொகுதியை மெத்திலீன் தொகுதியாக மாற்றுகின்றன.',
      'HVZ வினை அமிலத்தின் α-கார்பனில் ஹாலஜனைப் பதிலீடு செய்கிறது.'
    ]
  },
  c12_chem_u13: {
    id: 'sum_c12_chem_u13',
    chapterId: 'c12_chem_u13',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Unit 13 focuses on nitrogen organic compounds: Gabriel phthalimide synthesis, Hoffmann bromamide step-down degradation, the carbylamine test for primary amines, and versatile synthetic diazonium reactions like Sandmeyer and azo coupling.',
    simpleExplanationTa: 'அலகு 13 கரிம நைட்ரஜன் சேர்மங்களை விளக்குகிறது: கேப்ரியல் தாலிமைடு முறை, ஹாஃப்மன் புரோமமைடு இறக்க வினை, கார்பைலமின் சோதனை மற்றும் சாண்ட்மேயர் டையசோனியம் வினைகள்.',
    keyPointsEn: [
      'Gabriel phthalimide synthesis exclusively prepares pure aliphatic primary amines.',
      'Hoffmann bromamide reaction removes one carbon, yielding a step-down primary amine.',
      'Carbylamine test produces a foul-smelling isocyanide exclusively with 1° amines.',
      'Diazotisation of aniline at 0-5°C forms benzene diazonium chloride used in Sandmeyer coupling.'
    ],
    keyPointsTa: [
      'கேப்ரியல் தாலிமைடு முறை அலிபாடிக் ஓரிணைய அமீன்களை மட்டுமே தூய வடிவில் தயாரிக்கிறது.',
      'ஹாஃப்மன் புரோமமைடு வினை ஒரு கார்பன் குறைவான அமீனைத் தருகிறது.',
      'கார்பைலமின் சோதனை ஓரிணைய அமீனுடன் மட்டுமே கெட்ட நாற்றமுடைய ஐசோசயனைடைத் தருகிறது.',
      '0-5°C-ல் அனிலீன் டையசோனியம் குளோரைடாக மாறி சாண்ட்மேயர் வினைக்கு பயன்படுகிறது.'
    ]
  },
  c12_chem_u14: {
    id: 'sum_c12_chem_u14',
    chapterId: 'c12_chem_u14',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Unit 14 investigates essential biomolecules: proving the 6-carbon straight chain and functional groups of D-Glucose, peptide bond condensation in proteins, protein denaturation, and the double helix hydrogen bonding of DNA vs RNA.',
    simpleExplanationTa: 'அலகு 14 உயிர் மூலக்கூறுகளை ஆராய்கிறது: குளுக்கோஸின் கட்டமைப்பு நிறுவுதல், புரதங்களின் பெப்டைடு பிணைப்பு மற்றும் இயல்பிழத்தல், DNA மற்றும் RNA இரட்டைச் சுருள் கட்டமைப்பு.',
    keyPointsEn: [
      'D-Glucose structure confirmed via HI reduction (n-hexane), Br2 oxidation (gluconic acid), and HNO3 (saccharic acid).',
      'Peptide bond (-CO-NH-) links amino acids into protein chains.',
      'Denaturation disrupts secondary and tertiary protein folding without cleaving primary peptide chains.',
      'DNA uses Adenine-Thymine (2 H-bonds) and Guanine-Cytosine (3 H-bonds); RNA replaces Thymine with Uracil.'
    ],
    keyPointsTa: [
      'குளுக்கோஸ் கட்டமைப்பு HI ஒடுக்கம், Br2 ஆக்சிஜனேற்றம் மற்றும் HNO3 மூலம் நிறுவப்படுகிறது.',
      'பெப்டைடு பிணைப்பு (-CO-NH-) அமினோ அமிலங்களை புரதச் சங்கிலியாக இணைக்கிறது.',
      'புரதம் இயல்பிழத்தலில் முதன்மை அமைப்பு உடையாமல் இரண்டாம், மூன்றாம் நிலைகள் சிதைவுறுகின்றன.',
      'DNA-ல் A=T மற்றும் G≡C கார இணைகள் உள்ளன; RNA-ல் தைமினுக்குப் பதிலாக யுராசில் உள்ளது.'
    ]
  },
  c12_chem_u15: {
    id: 'sum_c12_chem_u15',
    chapterId: 'c12_chem_u15',
    lastUpdatedAt: '21 Sep 2026',
    lastUpdatedAtTa: '21 செப் 2026',
    simpleExplanationEn: 'Unit 15 connects chemistry to daily life: therapeutic drugs (analgesics, antipyretics, antiseptics), the saponification mechanism and micellar cleansing action of soaps vs detergents, and key synthetic polymers (Nylon-6,6, Bakelite, Buna-S).',
    simpleExplanationTa: 'அலகு 15 அன்றாட வாழ்வில் வேதியியலின் பயன்பாடுகளை விவரிக்கிறது: மருந்துகள், சோப்பு மைசெல் அழுக்கு நீக்கும் செயல்பாடு, கடின நீர் விளைவுகள் மற்றும் பலபடிகள் (நைலான்-6,6, பேக்கலைட், பியூனா-S).',
    keyPointsEn: [
      'Antiseptics apply safely to living tissues; disinfectants apply to inanimate floors and drains (0.2% vs 1% phenol).',
      'Soap saponification yields carboxylate salts and glycerol byproduct.',
      'Soap micelle has a lipophilic tail trapping grease and hydrophilic ionic head facing water.',
      'Nylon-6,6 is a condensation polyamide; Bakelite is a cross-linked thermosetting polymer.'
    ],
    keyPointsTa: [
      'புரைத்தடுப்பான் உயிருள்ள திசுக்களுக்கும், தொற்றுநீக்கி உயிரற்ற தளங்களுக்கும் பயன்படுகின்றன.',
      'சோப்பாக்குதல் வினையில் சோப்புடன் கிளிசரால் துணை விளைபொருளாகக் கிடைக்கிறது.',
      'சோப்பு மைசெல்லின் வால் பகுதி அழுக்கையும் தலை பகுதி நீரையும் பிணைக்கின்றன.',
      'நைலான்-6,6 குறுக்க பலபடி; பேக்கலைட் வெப்பத்தால் இறுகும் குறுக்கு பிணைப்பு பலபடி.'
    ]
  }
};

export const CHEM_VOL2_QUIZZES: Record<string, ChapterQuiz> = {
  c12_chem_u11: {
    id: 'quiz_c12_chem_u11',
    chapterId: 'c12_chem_u11',
    titleEn: 'Hydroxy Compounds & Ethers Board Quiz',
    titleTa: 'ஹைட்ராக்ஸி சேர்மங்கள் & ஈதர்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'In the Lucas test, which class of alcohol gives immediate turbidity at room temperature?',
        questionTa: 'லூகாஸ் சோதனையில் அறை வெப்பநிலையில் உடனடியாகக் கலங்கல் தன்மையைத் தரும் ஆல்கஹால் எது?',
        optionsEn: ['Tertiary (3°) alcohol', 'Secondary (2°) alcohol', 'Primary (1°) alcohol', 'Methanol'],
        optionsTa: ['மூவிணைய (3°) ஆல்கஹால்', 'ஈரிணைய (2°) ஆல்கஹால்', 'ஓரிணைய (1°) ஆல்கஹால்', 'மெத்தனால்'],
        correctAnswer: 'Tertiary (3°) alcohol',
        explanationEn: 'Tertiary carbocations form instantaneously, causing immediate cloudiness in the Lucas test.',
        explanationTa: 'மூவிணைய கார்பன் நேர் அயனி உடனடியாக உருவாவதால் 3° ஆல்கஹால் உடனே கலங்குகிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What color is produced by a primary (1°) alcohol in the Victor Meyer test?',
        questionTa: 'விக்டர் மேயர் சோதனையில் ஓரிணைய (1°) ஆல்கஹால் தரும் நிறம் என்ன?',
        optionsEn: ['Blood Red', 'Blue', 'Colourless', 'Green'],
        optionsTa: ['இரத்த சிவப்பு (Blood Red)', 'நீலம்', 'நிறமற்றது', 'பச்சை'],
        correctAnswer: 'Blood Red',
        explanationEn: 'Primary alcohols form nitrolic acids that dissolve in alkali to yield a blood-red sodium salt.',
        explanationTa: 'ஓரிணைய ஆல்கஹால் நைட்ரோலிக் அமிலத்தை உருவாக்கி காரத்தில் இரத்த சிவப்பு நிறத்தைத் தருகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'In Williamson ether synthesis, primary alkyl halides must be used to prevent alkene elimination.',
        questionTa: 'வில்லியம்சன் ஈதர் தொகுப்பில் ஆல்கீன் நீக்க வினையைத் தவிர்க்க ஓரிணைய அல்கைல் ஹாலைடைப் பயன்படுத்த வேண்டும்.',
        correctAnswer: true,
        explanationEn: 'True. Tertiary alkyl halides undergo E2 elimination instead of SN2 substitution, yielding alkenes.',
        explanationTa: 'சரி. மூவிணைய அல்கைல் ஹாலைடுகள் பதிலீட்டிற்குப் பதிலாக நீக்க வினைக்கு உட்பட்டு ஆல்கீனைத் தரும்.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'What is the organic product formed when phenol is heated with chloroform and aqueous NaOH (Reimer-Tiemann reaction)?',
        questionTa: 'பீனால் குளோரோஃபார்ம் மற்றும் காரத்துடன் சூடுபடுத்தப்படும் ரீமர்-டீமன் வினையில் உருவாகும் முதன்மை விளைபொருள் எது?',
        optionsEn: ['Salicylaldehyde', 'Salicylic acid', 'Benzaldehyde', 'Chlorobenzene'],
        optionsTa: ['சாலிசிலால்டிஹைடு', 'சாலிசிலிக் அமிலம்', 'பென்சால்டிஹைடு', 'குளோரோபென்சீன்'],
        correctAnswer: 'Salicylaldehyde',
        explanationEn: 'Reimer-Tiemann reaction forms salicylaldehyde via dichlorocarbene intermediate.',
        explanationTa: 'ரீமர்-டீமன் வினையில் சாலிசிலால்டிஹைடு உருவாகிறது.'
      }
    ]
  },

  c12_chem_u12: {
    id: 'quiz_c12_chem_u12',
    chapterId: 'c12_chem_u12',
    titleEn: 'Carbonyl Compounds & Carboxylic Acids Board Quiz',
    titleTa: 'கார்பனைல் சேர்மங்கள் & அமிலங்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which reaction occurs when an aldehyde possessing NO α-hydrogen is treated with 50% concentrated NaOH?',
        questionTa: 'α-ஹைட்ரஜன் இல்லாத ஆல்டிஹைடு 50% அடர் காரத்துடன் வினைபுரியும் போது நிகழும் வினை எது?',
        optionsEn: ['Cannizzaro Reaction', 'Aldol Condensation', 'Clemmensen Reduction', 'HVZ Reaction'],
        optionsTa: ['கன்னிசாரோ வினை (Cannizzaro)', 'ஆல்டால் குறுக்கம்', 'கிளமென்சன் ஒடுக்கம்', 'HVZ வினை'],
        correctAnswer: 'Cannizzaro Reaction',
        explanationEn: 'Aldehydes lacking α-hydrogen (such as formaldehyde and benzaldehyde) undergo disproportionation via Cannizzaro reaction.',
        explanationTa: 'α-ஹைட்ரஜன் இல்லாத ஆல்டிஹைடுகள் கன்னிசாரோ விகிதச்சிதைவு வினைக்கு உட்படுகின்றன.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'What reagent combination is used in the Clemmensen reduction of aldehydes and ketones?',
        questionTa: 'ஆல்டிஹைடுகள் மற்றும் கீட்டோன்களின் கிளமென்சன் ஒடுக்கத்தில் பயன்படும் கரணி எது?',
        optionsEn: ['Zn-Hg / conc. HCl', 'NH2NH2 / KOH in glycol', 'Pd / BaSO4', 'SnCl2 / HCl'],
        optionsTa: ['துத்தநாக இரசக்கலவை (Zn-Hg) / அடர் HCl', 'NH2NH2 / KOH கிளைக்கால்', 'Pd / BaSO4', 'SnCl2 / HCl'],
        correctAnswer: 'Zn-Hg / conc. HCl',
        explanationEn: 'Clemmensen reduction reduces carbonyls directly to methylene groups using zinc amalgam and concentrated hydrochloric acid.',
        explanationTa: 'கிளமென்சன் ஒடுக்கத்தில் Zn-Hg மற்றும் அடர் HCl கார்பனைல் தொகுதியை மெத்திலீனாக ஒடுக்குகின்றன.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'The Hell-Volhard-Zelinsky (HVZ) reaction halogenates carboxylic acids at the α-position in the presence of red phosphorus.',
        questionTa: 'HVZ வினை சிவப்பு பாஸ்பரஸ் முன்னிலையில் கார்பாக்சிலிக் அமிலத்தின் α-நிலையில் ஹாலஜனைப் பதிலீடு செய்கிறது.',
        correctAnswer: true,
        explanationEn: 'True. HVZ reaction replaces α-hydrogen with chlorine or bromine.',
        explanationTa: 'சரி. HVZ வினையில் அமிலத்தின் α-ஹைட்ரஜன் ஹாலஜனால் பதிலீடு செய்யப்படுகிறது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'In Rosenmund reduction of acyl chlorides to aldehydes, what role is played by BaSO4 poisoned with sulfur?',
        questionTa: 'ரோசன்மண்ட் ஒடுக்கத்தில் கந்தகம் சேர்க்கப்பட்ட BaSO4-ன் பங்கு என்ன?',
        optionsEn: ['Catalyst poison preventing over-reduction to alcohol', 'Dehydrating agent', 'Oxidizing promoter', 'Solvent'],
        optionsTa: ['ஆல்கஹாலாக ஒடுங்குவதைத் தடுக்கும் நச்சு வினையூக்கி', 'நீரகற்றும் காரணி', 'ஆக்சிஜனேற்ற ஊக்கி', 'கரைப்பான்'],
        correctAnswer: 'Catalyst poison preventing over-reduction to alcohol',
        explanationEn: 'BaSO4 poisoned with quinoline or sulfur moderates Pd activity to halt reduction at the aldehyde stage.',
        explanationTa: 'இது வினையூக்கி நச்சாகச் செயல்பட்டு ஆல்டிஹைடு மேலும் ஆல்கஹாலாக மாறுவதைத் தடுக்கிறது.'
      }
    ]
  },

  c12_chem_u13: {
    id: 'quiz_c12_chem_u13',
    chapterId: 'c12_chem_u13',
    titleEn: 'Organic Nitrogen Compounds Board Quiz',
    titleTa: 'கரிம நைட்ரஜன் சேர்மங்கள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which class of amines gives a positive Carbylamine test with an offensive foul smell?',
        questionTa: 'சகிக்க முடியாத கெட்ட நாற்றத்துடன் நேர்மறை கார்பைலமின் சோதனையைத் தரும் அமீன்கள் எவை?',
        optionsEn: ['Only Primary (1°) amines', 'Only Secondary (2°) amines', 'Only Tertiary (3°) amines', 'All amines'],
        optionsTa: ['ஓரிணைய (1°) அமீன்கள் மட்டுமே', 'ஈரிணைய (2°) அமீன்கள் மட்டுமே', 'மூவிணைய (3°) அமீன்கள் மட்டுமே', 'அனைத்து அமீன்களும்'],
        correctAnswer: 'Only Primary (1°) amines',
        explanationEn: 'Only 1° aliphatic and aromatic amines react with CHCl3 and alc. KOH to form foul-smelling carbylamines (isocyanides).',
        explanationTa: 'ஓரிணைய அமீன்கள் மட்டுமே குளோரோஃபார்ம் மற்றும் காரத்துடன் ஐசோசயனைடைத் தருகின்றன.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'In Hoffmann bromamide degradation, how does the number of carbon atoms in the resulting amine compare to the starting amide?',
        questionTa: 'ஹாஃப்மன் புரோமமைடு வினையில் உருவாகும் அமீனின் கார்பன் எண்ணிக்கை தொடக்க அமைடை விட எவ்வாறு இருக்கும்?',
        optionsEn: ['One carbon less', 'One carbon more', 'Same number of carbons', 'Double the carbons'],
        optionsTa: ['ஒரு கார்பன் குறைவாக இருக்கும்', 'ஒரு கார்பன் அதிகமாக இருக்கும்', 'சம எண்ணிக்கை', 'இருமடங்கு'],
        correctAnswer: 'One carbon less',
        explanationEn: 'The carbonyl carbon is eliminated as carbonate (K2CO3), producing an amine with one less carbon.',
        explanationTa: 'கார்பனைல் கார்பன் நீக்கப்படுவதால் ஒரு கார்பன் குறைவான அமீன் கிடைக்கிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Gabriel phthalimide synthesis cannot be used to prepare aromatic amines like aniline.',
        questionTa: 'அனிலீன் போன்ற அரோமேட்டிக் அமீன்களை கேப்ரியல் தாலிமைடு முறையில் தயாரிக்க முடியாது.',
        correctAnswer: true,
        explanationEn: 'True. Aryl halides do not undergo nucleophilic substitution with potassium phthalimide anion.',
        explanationTa: 'சரி. அரைல் ஹாலைடுகள் கருக்கவர் பதிலீட்டிற்கு உட்படாததால் அனிலீனைத் தயாரிக்க இயலாது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'What reagent is used in the Sandmeyer reaction to convert benzene diazonium chloride into chlorobenzene?',
        questionTa: 'பென்சீன் டையசோனியம் உப்பை குளோரோபென்சீனாக மாற்ற சாண்ட்மேயர் வினையில் பயன்படும் கரணி எது?',
        optionsEn: ['Cu2Cl2 / HCl', 'Zn / HCl', 'Fe / HCl', 'AlCl3'],
        optionsTa: ['Cu2Cl2 / HCl', 'Zn / HCl', 'Fe / HCl', 'AlCl3'],
        correctAnswer: 'Cu2Cl2 / HCl',
        explanationEn: 'Sandmeyer reaction uses cuprous chloride (Cu2Cl2) in HCl to introduce chlorine into the benzene ring.',
        explanationTa: 'சாண்ட்மேயர் வினையில் குப்ரஸ் குளோரைடு (Cu2Cl2 / HCl) பயன்படுகிறது.'
      }
    ]
  },

  c12_chem_u14: {
    id: 'quiz_c12_chem_u14',
    chapterId: 'c12_chem_u14',
    titleEn: 'Biomolecules Board Quiz',
    titleTa: 'உயிர் மூலக்கூறுகள் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'Which reaction confirms that all 6 carbon atoms in D-glucose form a continuous unbranched chain?',
        questionTa: 'டி-குளுக்கோஸின் 6 கார்பன்களும் தொடர்ச்சியான நேர்கோட்டுச் சங்கிலியாக உள்ளதை உறுதிப்படுத்தும் வினை எது?',
        optionsEn: ['Prolonged heating with HI and red P', 'Oxidation with bromine water', 'Acetylation with acetic anhydride', 'Reaction with HCN'],
        optionsTa: ['HI மற்றும் சிவப்பு P-உடன் காய்ச்சுதல்', 'புரோமின் நீரால் ஆக்சிஜனேற்றம்', 'அசிட்டிக் நீரிலியுடன் வினை', 'HCN-உடன் வினை'],
        correctAnswer: 'Prolonged heating with HI and red P',
        explanationEn: 'Prolonged heating with HI and red phosphorus completely reduces glucose to n-hexane, proving a 6-carbon straight chain.',
        explanationTa: 'HI-உடன் குளுக்கோஸ் n-ஹெக்சேனாக மாறுவது 6 கார்பன் நேர்கோட்டுச் சங்கிலியை நிறுவுகிறது.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which nitrogenous base is present exclusively in RNA, replacing Thymine from DNA?',
        questionTa: 'DNA-ல் உள்ள தைமினுக்குப் பதிலாக RNA-ல் மட்டுமே காணப்படும் நைட்ரஜன் காரம் எது?',
        optionsEn: ['Uracil', 'Adenine', 'Guanine', 'Cytosine'],
        optionsTa: ['யுராசில் (Uracil)', 'அடினைன்', 'குவானைன்', 'சைட்டோசின்'],
        correctAnswer: 'Uracil',
        explanationEn: 'RNA contains Uracil (U) in place of Thymine (T).',
        explanationTa: 'RNA-ல் தைமினுக்குப் பதிலாக யுராசில் காணப்படுகிறது.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Denaturation of proteins destroys secondary and tertiary structures but leaves the primary peptide chain intact.',
        questionTa: 'புரதம் இயல்பிழத்தலில் முதன்மை பெப்டைடு அமைப்பு உடையாமல் இரண்டாம் மற்றும் மூன்றாம் நிலை அமைப்புகள் சிதைவுறுகின்றன.',
        correctAnswer: true,
        explanationEn: 'True. Denaturation breaks hydrogen bonds and disulfide folds, but covalent primary peptide bonds remain unbroken.',
        explanationTa: 'சரி. பெப்டைடு பிணைப்புகள் உடையாமல் சுருள்கள் மட்டுமே பிரிகின்றன.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'According to Watson-Crick base pairing rules, how many hydrogen bonds join Guanine (G) and Cytosine (C)?',
        questionTa: 'வாட்சன்-கிரிக் விதிப்படி குவானைன் (G) மற்றும் சைட்டோசின் (C) இடையே எத்தனை ஹைட்ரஜன் பிணைப்புகள் உள்ளன?',
        optionsEn: ['3 hydrogen bonds', '2 hydrogen bonds', '1 hydrogen bond', '4 hydrogen bonds'],
        optionsTa: ['3 ஹைட்ரஜன் பிணைப்புகள்', '2 ஹைட்ரஜன் பிணைப்புகள்', '1 ஹைட்ரஜன் பிணைப்பு', '4 ஹைட்ரஜன் பிணைப்புகள்'],
        correctAnswer: '3 hydrogen bonds',
        explanationEn: 'Guanine and Cytosine form 3 hydrogen bonds (G≡C), while Adenine and Thymine form 2 (A=T).',
        explanationTa: 'G மற்றும் C இடையே 3 ஹைட்ரஜன் பிணைப்புகளும், A மற்றும் T இடையே 2 பிணைப்புகளும் உள்ளன.'
      }
    ]
  },

  c12_chem_u15: {
    id: 'quiz_c12_chem_u15',
    chapterId: 'c12_chem_u15',
    titleEn: 'Chemistry in Everyday Life Board Quiz',
    titleTa: 'அன்றாட வாழ்வில் வேதியியல் வினாடி வினா',
    totalMarks: 20,
    timeLimitMinutes: 10,
    questions: [
      {
        id: 'q1',
        type: 'mcq',
        difficulty: 'easy',
        questionEn: 'What are the two active chemical components of the household antiseptic Dettol?',
        questionTa: 'வீட்டுப் பயன்பாட்டு புரைத்தடுப்பானான டெட்டாலின் இரு முக்கிய வேதிக்கூறுகள் எவை?',
        optionsEn: ['Chloroxylenol and α-terpineol', 'Phenol and formaldehyde', 'Aspirin and paracetamol', 'Iodine and alcohol'],
        optionsTa: ['குளோரோசைலினால் மற்றும் α-டெர்பினியால்', 'பீனால் மற்றும் ஃபார்மால்டிஹைடு', 'ஆஸ்பிரின் மற்றும் பாராசிட்டமால்', 'அயோடின் மற்றும் ஆல்கஹால்'],
        correctAnswer: 'Chloroxylenol and α-terpineol',
        explanationEn: 'Dettol is a proprietary antiseptic mixture of chloroxylenol and α-terpineol.',
        explanationTa: 'டெட்டால் என்பது குளோரோசைலினால் மற்றும் α-டெர்பினியாலின் கலவையாகும்.'
      },
      {
        id: 'q2',
        type: 'mcq',
        difficulty: 'medium',
        questionEn: 'Which monomers undergo condensation polymerization to produce Nylon-6,6?',
        questionTa: 'நைலான்-6,6 தயாரிப்பில் குறுக்க பலபடியாக்கலுக்கு உட்படும் ஒற்றைப்படிகள் எவை?',
        optionsEn: ['Hexamethylenediamine and Adipic acid', 'Phenol and Formaldehyde', 'Ethylene glycol and Terephthalic acid', 'Caprolactam'],
        optionsTa: ['ஹெக்சாமெத்திலீன் டைஅமீன் மற்றும் அடிபிக் அமிலம்', 'பீனால் மற்றும் ஃபார்மால்டிஹைடு', 'எத்திலீன் கிளைக்கால் மற்றும் டெரிப்தாலிக் அமிலம்', 'கேப்ரோலாக்டம்'],
        correctAnswer: 'Hexamethylenediamine and Adipic acid',
        explanationEn: 'Nylon-6,6 is synthesized from hexamethylenediamine (6 carbons) and adipic acid (6 carbons).',
        explanationTa: 'ஹெக்சாமெத்திலீன் டைஅமீன் (6 C) மற்றும் அடிபிக் அமிலம் (6 C) இணைந்து நைலான்-6,6 தருகின்றன.'
      },
      {
        id: 'q3',
        type: 'true_false',
        difficulty: 'easy',
        questionEn: 'Aspirin acts as both an analgesic (pain reliever) and an antipyretic (fever reducer).',
        questionTa: 'ஆஸ்பிரின் வலி நிவாரணியாகவும் காய்ச்சல் தணிப்பானாகவும் ஆகிய இரு பண்புகளையும் கொண்டுள்ளது.',
        correctAnswer: true,
        explanationEn: 'True. Aspirin (acetylsalicylic acid) relieves pain, lowers fever, and prevents blood clots.',
        explanationTa: 'சரி. ஆஸ்பிரின் வலி, காய்ச்சல் மற்றும் ரத்த உறைவு தடுப்பானாகச் செயல்படுகிறது.'
      },
      {
        id: 'q4',
        type: 'mcq',
        difficulty: 'hard',
        questionEn: 'Why do synthetic detergents clean effectively in hard water while ordinary soaps form scum?',
        questionTa: 'கடின நீரில் சாதாரண சோப்பு வீழ்படிவைத் தரும் போது செயற்கை டிடர்ஜெண்ட்கள் நன்கு அழுக்கு நீக்குவது ஏன்?',
        optionsEn: ['Calcium and magnesium sulfonates are water-soluble', 'Detergents remove all calcium ions', 'Detergents contain no polar groups', 'Detergents acidify the water'],
        optionsTa: ['கால்சியம் மற்றும் மெக்னீசியம் சல்போனேட்டுகள் நீரில் கரையும் தன்மை கொண்டவை', 'டிடர்ஜெண்ட்கள் கால்சியத்தை நீக்குகின்றன', 'டிடர்ஜெண்டில் முனைவுறு பகுதி இல்லை', 'நீரை அமிலமாக்குகின்றன'],
        correctAnswer: 'Calcium and magnesium sulfonates are water-soluble',
        explanationEn: 'The calcium and magnesium salts of alkylbenzene sulfonates are soluble in water, forming no insoluble curdy scum.',
        explanationTa: 'டிடர்ஜெண்டுகளின் கால்சியம், மெக்னீசியம் உப்புகள் நீரில் கரைவதால் கடின நீரிலும் scum உருவாவதில்லை.'
      }
    ]
  }
};

export const CHEM_VOL2_DIAGRAMS: Record<string, SchematicDiagram> = {
  c12_chem_u11: {
    id: 'diag_c12_chem_u11',
    chapterId: 'c12_chem_u11',
    titleEn: 'Lucas Test Distinction & Williamson Ether Synthesis Mechanism',
    titleTa: 'லூகாஸ் சோதனை வேறுபாடு மற்றும் வில்லியம்சன் ஈதர் தொகுப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Lucas Test (ZnCl₂ + conc. HCl)</text>
      <rect x="55" y="95" width="45" height="100" rx="6" fill="#e2e8f0" stroke="#64748b"/>
      <text x="77" y="210" text-anchor="middle" font-size="10">1° Alcohol</text>
      <text x="77" y="225" text-anchor="middle" fill="#64748b" font-size="9">Clear (Heat)</text>
      <rect x="130" y="95" width="45" height="100" rx="6" fill="#cbd5e1" stroke="#64748b"/>
      <rect x="130" y="140" width="45" height="55" rx="4" fill="#93c5fd" opacity="0.6"/>
      <text x="152" y="210" text-anchor="middle" font-size="10">2° Alcohol</text>
      <text x="152" y="225" text-anchor="middle" fill="#2563eb" font-size="9">5-10 mins</text>
      <rect x="205" y="95" width="45" height="100" rx="6" fill="#94a3b8" stroke="#475569"/>
      <rect x="205" y="110" width="45" height="85" rx="4" fill="#3b82f6" opacity="0.8"/>
      <text x="227" y="210" text-anchor="middle" font-size="10">3° Alcohol</text>
      <text x="227" y="225" text-anchor="middle" fill="#ef4444" font-weight="bold" font-size="9">Instant!</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">Williamson Ether Synthesis (SN2)</text>
      <rect x="330" y="110" width="80" height="35" rx="6" fill="#fef3c7" stroke="#d97706"/>
      <text x="370" y="132" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="11">R'-O⁻ Na⁺</text>
      <text x="425" y="132" text-anchor="middle" font-weight="bold" font-size="14">+</text>
      <rect x="440" y="110" width="70" height="35" rx="6" fill="#fee2e2" stroke="#dc2626"/>
      <text x="475" y="132" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="11">R - X (1°)</text>
      <path d="M 400 150 Q 440 180 440 200" fill="none" stroke="#059669" stroke-width="2"/>
      <rect x="360" y="200" width="160" height="40" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
      <text x="440" y="225" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">R' - O - R (Ether) + NaX</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Tertiary Instant Turbidity', labelTa: 'மூவிணைய ஆல்கஹால் உடனடி கலங்கல்', descriptionEn: 'Tertiary alcohol reacts instantaneously forming insoluble alkyl chloride.', descriptionTa: '3° ஆல்கஹால் உடனே வினைபுரிந்து கரையாத அல்கைல் குளோரைடைத் தருகிறது.', x: 38, y: 55 },
      { id: 'l2', labelEn: 'Alkoxide Nucleophile', labelTa: 'ஆல்காக்சைடு கருக்கவர் தொகுதி', descriptionEn: 'Sodium alkoxide attacks the primary alkyl carbon.', descriptionTa: 'சோடியம் ஆல்காக்சைடு ஓரிணைய அல்கைல் கார்பனைத் தாக்குகிறது.', x: 62, y: 42 },
      { id: 'l3', labelEn: 'Synthesized Ether Product', labelTa: 'உருவான ஈதர் விளைபொருள்', descriptionEn: 'Symmetrical or unsymmetrical ether formed cleanly via SN2 path.', descriptionTa: 'SN2 வழிமுறையில் உருவான ஈதர் சேர்மம்.', x: 73, y: 75 }
    ]
  },

  c12_chem_u12: {
    id: 'diag_c12_chem_u12',
    chapterId: 'c12_chem_u12',
    titleEn: 'Carbonyl Pathways: Aldol Condensation vs Cannizzaro Disproportionation',
    titleTa: 'கார்பனைல் வினைகள்: ஆல்டால் குறுக்கம் vs கன்னிசாரோ விகிதச்சிதைவு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#9a3412" font-size="13">Aldol Condensation (Has α-H)</text>
      <rect x="50" y="95" width="210" height="40" rx="6" fill="#ffedd5" stroke="#ea580c"/>
      <text x="155" y="120" text-anchor="middle" font-size="11">2 CH₃CHO (Acetaldehyde) + dil. NaOH</text>
      <path d="M 155 135 L 155 160" stroke="#ea580c" stroke-width="2"/>
      <rect x="50" y="160" width="210" height="40" rx="6" fill="#fed7aa" stroke="#c2410c"/>
      <text x="155" y="185" text-anchor="middle" font-size="11">CH₃-CH(OH)-CH₂-CHO (Aldol)</text>
      <text x="155" y="225" text-anchor="middle" fill="#9a3412" font-size="10">Δ, -H₂O → Crotonaldehyde (α,β-unsaturated)</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Cannizzaro Reaction (NO α-H)</text>
      <rect x="330" y="95" width="220" height="40" rx="6" fill="#dbeafe" stroke="#2563eb"/>
      <text x="440" y="120" text-anchor="middle" font-size="11">2 HCHO + 50% conc. NaOH</text>
      <path d="M 400 135 L 370 170" stroke="#2563eb" stroke-width="2"/>
      <path d="M 480 135 L 510 170" stroke="#2563eb" stroke-width="2"/>
      <rect x="330" y="170" width="100" height="45" rx="6" fill="#ecfdf5" stroke="#10b981"/>
      <text x="380" y="197" text-anchor="middle" font-weight="bold" fill="#047857" font-size="11">CH₃OH (Red.)</text>
      <rect x="450" y="170" width="100" height="45" rx="6" fill="#fdf2f8" stroke="#db2777"/>
      <text x="500" y="197" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="11">HCOONa (Ox.)</text>
      <text x="440" y="240" text-anchor="middle" fill="#1e40af" font-size="10">Redox Disproportionation</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Aldol Intermediate Formation', labelTa: 'ஆல்டால் இடைநிலை உருவாதல்', descriptionEn: 'Beta-hydroxy aldehyde created by nucleophilic addition across carbonyl.', descriptionTa: 'கார்பனைலுடன் கருக்கவர் சேர்க்கையால் உருவான பீட்டா-ஹைட்ராக்ஸி ஆல்டிஹைடு.', x: 26, y: 58 },
      { id: 'l2', labelEn: 'Reduced Alcohol Molecule', labelTa: 'ஒடுக்கப்பட்ட ஆல்கஹால்', descriptionEn: 'One formaldehyde molecule reduced to methanol.', descriptionTa: 'மெத்தனாலாக ஒடுக்கமடைந்த ஃபார்மால்டிஹைடு மூலக்கூறு.', x: 63, y: 65 },
      { id: 'l3', labelEn: 'Oxidized Formate Salt', labelTa: 'ஆக்சிஜனேற்ற சோடியம் ஃபார்மேட்', descriptionEn: 'Second formaldehyde molecule oxidized to sodium formate salt.', descriptionTa: 'சோடியம் ஃபார்மேட்டாக ஆக்சிஜனேற்றம் அடைந்த மூலக்கூறு.', x: 83, y: 65 }
    ]
  },

  c12_chem_u13: {
    id: 'diag_c12_chem_u13',
    chapterId: 'c12_chem_u13',
    titleEn: 'Nitrogen Transformations: Carbylamine Test & Diazonium Synthetic Web',
    titleTa: 'நைட்ரஜன் வேதியியல்: கார்பைலமின் சோதனை & டையசோனியம் வினைகள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="240" height="220" rx="12" fill="#fef2f2" stroke="#ef4444" stroke-width="2"/>
      <text x="150" y="70" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="13">Carbylamine Foul Smell Test</text>
      <rect x="50" y="95" width="200" height="35" rx="6" fill="#fee2e2" stroke="#dc2626"/>
      <text x="150" y="118" text-anchor="middle" font-size="11">R-NH₂ (1° amine) + CHCl₃ + KOH</text>
      <path d="M 150 130 L 150 160" stroke="#dc2626" stroke-width="2"/>
      <rect x="50" y="160" width="200" height="50" rx="6" fill="#b91c1c"/>
      <text x="150" y="185" text-anchor="middle" fill="#fff" font-weight="bold" font-size="13">R - N≡C (Carbylamine)</text>
      <text x="150" y="202" text-anchor="middle" fill="#fecaca" font-size="10">Offensive Foul Choking Odour</text>
      <text x="150" y="235" text-anchor="middle" fill="#b91c1c" font-size="10">2° and 3° Amines Give NO Reaction</text>
      <rect x="290" y="40" width="280" height="220" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
      <text x="430" y="65" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Benzene Diazonium Chloride Hub</text>
      <circle cx="430" cy="130" r="30" fill="#dcfce7" stroke="#16a34a" stroke-width="2"/>
      <text x="430" y="134" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="11">Ar-N₂⁺Cl⁻</text>
      <path d="M 400 130 L 330 110" stroke="#16a34a" stroke-width="2"/>
      <rect x="310" y="90" width="60" height="25" rx="4" fill="#fef08a" stroke="#ca8a04"/>
      <text x="340" y="107" text-anchor="middle" font-size="10">Ar-Cl (Sand.)</text>
      <path d="M 460 130 L 530 110" stroke="#16a34a" stroke-width="2"/>
      <rect x="500" y="90" width="60" height="25" rx="4" fill="#fed7aa" stroke="#ea580c"/>
      <text x="530" y="107" text-anchor="middle" font-size="10">Ar-CN</text>
      <path d="M 430 160 L 430 200" stroke="#16a34a" stroke-width="2"/>
      <rect x="360" y="200" width="140" height="35" rx="6" fill="#fbcfe8" stroke="#db2777"/>
      <text x="430" y="222" text-anchor="middle" font-weight="bold" fill="#9d174d" font-size="11">Azo Dye (Orange/Yellow)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Isocyanide Foul Smell Product', labelTa: 'ஐசோசயனைடு நாற்றப் பொருள்', descriptionEn: 'Carbylamine formed exclusively from primary amines.', descriptionTa: 'ஓரிணைய அமீனில் இருந்து மட்டுமே உருவாகும் கெட்ட நாற்றமுடைய ஐசோசயனைடு.', x: 25, y: 60 },
      { id: 'l2', labelEn: 'Sandmeyer Conversion (Ar-Cl)', labelTa: 'சாண்ட்மேயர் குளோரோபென்சீன்', descriptionEn: 'Cu2Cl2/HCl replaces diazo group with chlorine.', descriptionTa: 'Cu2Cl2/HCl மூலம் குளோரின் பதிலீடு செய்யப்படுதல்.', x: 57, y: 35 },
      { id: 'l3', labelEn: 'Azo Coupling Dye', labelTa: 'அசோ இணைப்பு சாயம்', descriptionEn: 'Electrophilic coupling with phenol or aniline yielding vibrant dyes.', descriptionTa: 'பீனால் அல்லது அனிலீனுடன் இணைந்து உருவாகும் வண்ணச் சாயம்.', x: 72, y: 70 }
    ]
  },

  c12_chem_u14: {
    id: 'diag_c12_chem_u14',
    chapterId: 'c12_chem_u14',
    titleEn: 'Biomolecular Structures: D-Glucose Ring & DNA Hydrogen-Bonded Double Helix',
    titleTa: 'உயிர்கட்டமைப்பு: டி-குளுக்கோஸ் வளையம் & DNA இரட்டைச் சுருள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="240" height="220" rx="12" fill="#fdf4ff" stroke="#c084fc" stroke-width="2"/>
      <text x="150" y="70" text-anchor="middle" font-weight="bold" fill="#7e22ce" font-size="13">Haworth D-Glucopyranose</text>
      <polygon points="150,110 200,135 190,185 110,185 100,135" fill="#f5d0fe" stroke="#a855f7" stroke-width="2"/>
      <text x="150" y="105" text-anchor="middle" fill="#7e22ce" font-weight="bold" font-size="12">O</text>
      <text x="100" y="130" font-size="10">C5</text>
      <text x="205" y="130" font-size="10">C1 (Anomeric)</text>
      <text x="150" y="225" text-anchor="middle" fill="#6b21a8" font-size="11">Pyranose 6-Membered Ring</text>
      <rect x="290" y="40" width="280" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="430" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">DNA Watson-Crick Base Pairing</text>
      <rect x="320" y="110" width="60" height="30" rx="4" fill="#fee2e2" stroke="#dc2626"/>
      <text x="350" y="130" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="12">A</text>
      <text x="400" y="130" text-anchor="middle" font-weight="bold" fill="#2563eb" font-size="14">=</text>
      <rect x="420" y="110" width="60" height="30" rx="4" fill="#dbeafe" stroke="#2563eb"/>
      <text x="450" y="130" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">T</text>
      <text x="510" y="130" fill="#dc2626" font-size="10">2 H-Bonds</text>
      <rect x="320" y="160" width="60" height="30" rx="4" fill="#dcfce7" stroke="#16a34a"/>
      <text x="350" y="180" text-anchor="middle" font-weight="bold" fill="#166534" font-size="12">G</text>
      <text x="400" y="180" text-anchor="middle" font-weight="bold" fill="#16a34a" font-size="14">≡</text>
      <rect x="420" y="160" width="60" height="30" rx="4" fill="#fef3c7" stroke="#d97706"/>
      <text x="450" y="180" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="12">C</text>
      <text x="510" y="180" fill="#16a34a" font-size="10">3 H-Bonds</text>
      <text x="430" y="225" text-anchor="middle" fill="#1e40af" font-size="11">Antiparallel Complementary Strands</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Anomeric Carbon (C1)', labelTa: 'அனோமெரிக் கார்பன் (C1)', descriptionEn: 'Chiral carbon formed during pyranose ring closure yielding alpha or beta anomer.', descriptionTa: 'வளைய உருவாவதில் உருவாகும் ஆல்ஃபா அல்லது பீட்டா அனோமெரிக் கார்பன்.', x: 34, y: 45 },
      { id: 'l2', labelEn: 'Adenine-Thymine Double Bond', labelTa: 'A=T இரட்டை ஹைட்ரஜன் பிணைப்பு', descriptionEn: '2 hydrogen bonds linking complementary adenine and thymine bases.', descriptionTa: 'அடினைன் மற்றும் தைமின் இடையே உள்ள 2 ஹைட்ரஜன் பிணைப்புகள்.', x: 67, y: 42 },
      { id: 'l3', labelEn: 'Guanine-Cytosine Triple Bond', labelTa: 'G≡C மூன்று ஹைட்ரஜன் பிணைப்பு', descriptionEn: '3 strong hydrogen bonds providing high thermal stability to DNA.', descriptionTa: 'குவானைன் மற்றும் சைட்டோசின் இடையே உள்ள 3 வலிமையான பிணைப்புகள்.', x: 67, y: 58 }
    ]
  },

  c12_chem_u15: {
    id: 'diag_c12_chem_u15',
    chapterId: 'c12_chem_u15',
    titleEn: 'Everyday Chemistry: Soap Micelle Cleansing & Nylon-6,6 Polymer Linkage',
    titleTa: 'அன்றாட வேதியியல்: சோப்பு மைசெல் அழுக்கு நீக்கம் & நைலான்-6,6 பிணைப்பு',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="40" width="250" height="220" rx="12" fill="#f0fdf4" stroke="#22c55e" stroke-width="2"/>
      <text x="155" y="70" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Soap Micelle in Water</text>
      <circle cx="155" cy="150" r="26" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
      <text x="155" y="154" text-anchor="middle" font-weight="bold" fill="#854d0e" font-size="10">Grease Droplet</text>
      <line x1="155" y1="124" x2="155" y2="95" stroke="#16a34a" stroke-width="3"/>
      <circle cx="155" cy="95" r="5" fill="#ef4444"/>
      <line x1="155" y1="176" x2="155" y2="205" stroke="#16a34a" stroke-width="3"/>
      <circle cx="155" cy="205" r="5" fill="#ef4444"/>
      <line x1="129" y1="150" x2="100" y2="150" stroke="#16a34a" stroke-width="3"/>
      <circle cx="100" cy="150" r="5" fill="#ef4444"/>
      <line x1="181" y1="150" x2="210" y2="150" stroke="#16a34a" stroke-width="3"/>
      <circle cx="210" cy="150" r="5" fill="#ef4444"/>
      <text x="155" y="235" text-anchor="middle" fill="#15803d" font-size="10">Tail in Oil | Hydrophilic Head in Water</text>
      <rect x="310" y="40" width="260" height="220" rx="12" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="440" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Nylon-6,6 Polyamide Chain</text>
      <rect x="330" y="105" width="220" height="50" rx="8" fill="#dbeafe" stroke="#2563eb"/>
      <text x="440" y="135" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">[-NH-(CH₂)₆-NH-CO-(CH₂)₄-CO-]ₙ</text>
      <text x="440" y="180" text-anchor="middle" fill="#047857" font-size="11">Amide Linkage (-CO-NH-) between</text>
      <text x="440" y="200" text-anchor="middle" fill="#334155" font-size="10">Hexamethylenediamine & Adipic Acid</text>
      <text x="440" y="235" text-anchor="middle" fill="#b91c1c" font-size="11">Elimination of 2n H₂O molecules</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Lipophilic Hydrocarbon Tail', labelTa: 'எண்ணெய் விரும்பும் வால் பகுதி', descriptionEn: 'Non-polar carbon chain dissolving into the greasy soil droplet.', descriptionTa: 'அழுக்கு எண்ணெய்க் குமிழில் கரையும் முனைவற்ற வால் பகுதி.', x: 26, y: 50 },
      { id: 'l2', labelEn: 'Hydrophilic Ionic Head', labelTa: 'நீர் விரும்பும் முனைவுறு தலை', descriptionEn: 'Carboxylate -COO- Na+ head interacting with surrounding water.', descriptionTa: 'நீருடன் பிணைப்பை ஏற்படுத்தும் முனைவுறு கார்பாக்சிலேட் தலைப்பகுதி.', x: 26, y: 32 },
      { id: 'l3', labelEn: 'Nylon-6,6 Amide Polymer Repeating Unit', labelTa: 'நைலான்-6,6 பாலிஅமைடு தொடர் அலகு', descriptionEn: 'Synthetic repeating unit produced by condensation polymerization.', descriptionTa: 'குறுக்க பலபடியாக்கல் மூலம் உருவான அமைடு தொடர் அலகு.', x: 73, y: 44 }
    ]
  }
};

export const CHEM_VOL2_VIDEOS: Record<string, VideoExplainer> = {
  c12_chem_u11: {
    id: 'vid_c12_chem_u11',
    chapterId: 'c12_chem_u11',
    titleEn: 'Animation: Alcohol Lucas Test & Williamson Ether Synthesis',
    titleTa: 'அனிமேஷன்: லூகாஸ் சோதனை & வில்லியம்சன் ஈதர் தொகுப்பு',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Lucas Test Race',
        titleTa: 'லூகாஸ் சோதனைக் களம்',
        visualDescription: 'Adding Lucas reagent to 1°, 2°, and 3° test tubes; 3° turns milky white in 1 second, 2° clouds in 5 minutes, 1° remains crystal clear.',
        narrationEn: 'Watch the Lucas test in action! Tertiary carbocation stability makes 3° alcohols turn cloudy in the blink of an eye, while 1° alcohols sit quietly until heated!',
        narrationTa: 'லூகாஸ் சோதனையில் மூவிணைய ஆல்கஹால் இமைக்கும் நேரத்தில் கலங்குகிறது! ஆனால் ஓரிணைய ஆல்கஹால் சூடாக்கும் வரை மாற்றமின்றி இருக்கும்!',
        conceptKey: 'Lucas Turbidity'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Williamson SN2 Attack',
        titleTa: 'வில்லியம்சன் SN2 தாக்குதல்',
        visualDescription: 'An alkoxide ion attacking a primary methyl iodide from behind, displacing the iodide ion to build an ether bridge.',
        narrationEn: 'In Williamson ether synthesis, the alkoxide performs an elegant SN2 backside strike on a primary halide, building an oxygen-bridged ether!',
        narrationTa: 'வில்லியம்சன் தொகுப்பில் ஆல்காக்சைடு அல்கைல் ஹாலைடைப் பின்புறமாகத் தாக்கி ஈதர் பாலத்தை உருவாக்குகிறது!',
        conceptKey: 'Williamson SN2'
      },
      {
        sceneNumber: 3,
        titleEn: 'Kolbe’s Carboxylation of Phenol',
        titleTa: 'கோல்ப் பீனால் கார்பாக்சிலேற்றம்',
        visualDescription: 'Phenoxide reacting with CO2 under pressure to insert a carboxyl group ortho to the phenolic OH, forming salicylic acid.',
        narrationEn: 'Under high pressure and heat, CO2 attacks phenoxide to produce medicinal salicylic acid—the foundation stone of Aspirin!',
        narrationTa: 'அழுத்தம் மற்றும் வெப்பத்தில் CO2 பீனாக்சைடுடன் இணைந்து ஆஸ்பிரினின் மூலப்பொருளான சாலிசிலிக் அமிலத்தை உருவாக்குகிறது!',
        conceptKey: 'Kolbe Carboxylation'
      }
    ]
  },

  c12_chem_u12: {
    id: 'vid_c12_chem_u12',
    chapterId: 'c12_chem_u12',
    titleEn: 'Animation: Aldol Condensation vs Cannizzaro Disproportionation',
    titleTa: 'அனிமேஷன்: ஆல்டால் குறுக்கம் vs கன்னிசாரோ விகிதச்சிதைவு',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Aldol Handshake: α-Hydrogen in Action',
        titleTa: 'ஆல்டால் பிணைப்பு: α-ஹைட்ரஜனின் பங்கு',
        visualDescription: 'Base plucking an acidic alpha-hydrogen to form an enolate ion, which attacks the carbonyl carbon of a neighboring acetaldehyde.',
        narrationEn: 'When an aldehyde has an alpha-hydrogen, dilute base creates an enolate that attacks another carbonyl, building the aldol skeleton!',
        narrationTa: 'α-ஹைட்ரஜன் உள்ள ஆல்டிஹைடில் காரம் ஈனோலேட்டை உருவாக்கி மற்றொரு கார்பனைலுடன் இணைந்து ஆல்டாலை உருவாக்குகிறது!',
        conceptKey: 'Aldol Enolate Attack'
      },
      {
        sceneNumber: 2,
        titleEn: 'Cannizzaro: The Redox Split',
        titleTa: 'கன்னிசாரோ: இருவழிப் பிரிப்பு',
        visualDescription: 'Two formaldehyde molecules splitting in concentrated NaOH; one gaining hydrogen to become methanol, the other gaining oxygen to become sodium formate.',
        narrationEn: 'Without alpha-hydrogen, aldehydes have nowhere to turn but to each other! In the Cannizzaro reaction, one molecule reduces to alcohol while the other oxidizes to acid salt!',
        narrationTa: 'α-ஹைட்ரஜன் இல்லாதபோது கன்னிசாரோ வினையில் ஒரு மூலக்கூறு ஆல்கஹாலாகவும், மற்றொன்று அமில உப்பாகவும் மாறுகிறது!',
        conceptKey: 'Cannizzaro Redox'
      },
      {
        sceneNumber: 3,
        titleEn: 'Clemmensen & Wolff-Kishner Stripping',
        titleTa: 'கார்பனைல் நீக்க ஒடுக்கம்',
        visualDescription: 'Carbonyl oxygen stripped away by Zn-Hg/HCl to leave behind a saturated methylene group (-CH2-).',
        narrationEn: 'Need to obliterate a carbonyl oxygen completely? Clemmensen and Wolff-Kishner reductions convert >C=O into a clean saturated hydrocarbon methylene!',
        narrationTa: 'கிளமென்சன் மற்றும் உல்ஃப்-கிஷ்னர் வினைகள் கார்பனைல் ஆக்சிஜனை முழுமையாக நீக்கி மெத்திலீன் தொகுதியாக மாற்றுகின்றன!',
        conceptKey: 'Deoxygenation'
      }
    ]
  },

  c12_chem_u13: {
    id: 'vid_c12_chem_u13',
    chapterId: 'c12_chem_u13',
    titleEn: 'Animation: Hoffmann Degradation & Carbylamine Test',
    titleTa: 'அனிமேஷன்: ஹாஃப்மன் இறக்க வினை மற்றும் கார்பைலமின் சோதனை',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Hoffmann Carbon Clipper',
        titleTa: 'ஹாஃப்மன் ஒரு கார்பன் நீக்கம்',
        visualDescription: 'Bromine and KOH reacting with an amide; the carbonyl group pops out as carbonate, attaching the alkyl directly to NH2 with one less carbon.',
        narrationEn: 'Hoffmann bromamide degradation is organic chemistry’s ultimate carbon clipper! It ejects the carbonyl carbon, leaving an amine with one less carbon atom!',
        narrationTa: 'ஹாஃப்மன் புரோமமைடு வினை கார்பனைல் கார்பனை நீக்கி ஒரு கார்பன் குறைவான தூய அமீனை உருவாக்குகிறது!',
        conceptKey: 'Step-Down Degradation'
      },
      {
        sceneNumber: 2,
        titleEn: 'Carbylamine: The Unmistakable Choke Odor',
        titleTa: 'கார்பைலமின்: சகிக்க முடியாத நாற்றம்',
        visualDescription: 'A drop of primary amine mixed with chloroform and hot alcoholic KOH, releasing foul-smelling isocyanide vapors.',
        narrationEn: 'Only primary amines create the infamous carbylamine isocyanide! Its repulsive foul odor is unmistakable proof of a primary amine!',
        narrationTa: 'ஓரிணைய அமீன்கள் மட்டுமே குளோரோஃபார்முடன் வினைபுரிந்து சகிக்க முடியாத கெட்ட நாற்றமுடைய ஐசோசயனைடைத் தருகின்றன!',
        conceptKey: 'Isocyanide Odor'
      },
      {
        sceneNumber: 3,
        titleEn: 'Sandmeyer Diazonium Magic',
        titleTa: 'சாண்ட்மேயர் டையசோனியம் மாயம்',
        visualDescription: 'Ice-cold diazonium salt bubbling off N2 gas in presence of Cu2Cl2 to smoothly attach chlorine onto the benzene ring.',
        narrationEn: 'Diazonium salts are nature’s best leaving groups! Bubbling off nitrogen gas, cuprous salts snap chlorine cleanly into the benzene ring in Sandmeyer synthesis!',
        narrationTa: 'டையசோனியம் உப்பு நைட்ரஜன் வாயுவை வெளியேற்றி சாண்ட்மேயர் வினையில் பென்சீன் வளையத்தில் குளோரினைப் பதிலீடு செய்கிறது!',
        conceptKey: 'Sandmeyer Substitution'
      }
    ]
  },

  c12_chem_u14: {
    id: 'vid_c12_chem_u14',
    chapterId: 'c12_chem_u14',
    titleEn: 'Animation: Glucose Haworth Ring & DNA Double Helix Pairing',
    titleTa: 'அனிமேஷன்: குளுக்கோஸ் வளையம் & DNA இரட்டைச் சுருள் கார இணைகள்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Glucose Closing into a Pyranose Ring',
        titleTa: 'குளுக்கோஸ் பைரனோஸ் வளையம் மூடுதல்',
        visualDescription: 'Open-chain D-glucose bending; C5-OH oxygen attacking C1 aldehyde carbon to form a stable 6-membered pyranose ring.',
        narrationEn: 'Watch linear glucose bend into a stable 6-membered pyranose ring as C5-OH captures C1, creating anomers with fresh optical properties!',
        narrationTa: 'நேர்கோட்டு குளுக்கோஸ் C5-OH மூலம் C1-ஐத் தாக்கி 6 உறுப்பு பைரனோஸ் வளையமாக மூடுகிறது!',
        conceptKey: 'Pyranose Ring Closure'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Peptide Bond Zipper',
        titleTa: 'பெப்டைடு பிணைப்பு ஜிப்பர்',
        visualDescription: 'Carboxyl of alanine condensing with amino of glycine, releasing water and forming a sturdy planar -CO-NH- peptide bond.',
        narrationEn: 'Amino acids link hand-in-hand through peptide bonds! Releasing water, -CO-NH- linkages stitch together the magnificent architecture of proteins.',
        narrationTa: 'அமினோ அமிலங்கள் நீரை இழந்து பெப்டைடு பிணைப்பு (-CO-NH-) மூலம் இணைந்து புரதச் சங்கிலிகளை உருவாக்குகின்றன!',
        conceptKey: 'Peptide Condensation'
      },
      {
        sceneNumber: 3,
        titleEn: 'DNA: The Double Helix Hydrogen Ladder',
        titleTa: 'DNA: ஹைட்ரஜன் பிணைப்பு ஏணி',
        visualDescription: 'Adenine pairing with Thymine via 2 hydrogen bonds; Guanine locking with Cytosine via 3 hydrogen bonds inside the antiparallel double helix.',
        narrationEn: 'Nature’s master blueprint relies on hydrogen bonding! Two bonds hold A to T, and three hold G to C, locking the antiparallel double helix in perfect fidelity!',
        narrationTa: 'DNA இரட்டைச் சுருளில் A மற்றும் T இடையே 2 பிணைப்புகளும், G மற்றும் C இடையே 3 பிணைப்புகளும் அமைந்து மரபுக் குறியீட்டைப் பாதுகாக்கின்றன!',
        conceptKey: 'Watson-Crick Pairing'
      }
    ]
  },

  c12_chem_u15: {
    id: 'vid_c12_chem_u15',
    chapterId: 'c12_chem_u15',
    titleEn: 'Animation: Soap Micelle Cleansing & Nylon-6,6 Polymerization',
    titleTa: 'அனிமேஷன்: சோப்பு மைசெல் அழுக்கு நீக்கம் & நைலான்-6,6 பலபடி',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Soap Micelle Trap',
        titleTa: 'சோப்பு மைசெல் வலை',
        visualDescription: 'Dozens of soap molecules surrounding an oily grease spot on cloth; hydrophobic tails sticking into the oil, hydrophilic heads facing out toward water.',
        narrationEn: 'Soap molecules are chemical superheroes! Their oil-loving tails dive into the grease stain, while their water-loving heads pull it free into the wash water as a micelle!',
        narrationTa: 'சோப்பின் வால் பகுதி அழுக்கு எண்ணெயிலும், தலை பகுதி நீரிலும் நின்று மைசெல் அமைப்பை உருவாக்கி அழுக்கை எளிதாக நீக்குகின்றன!',
        conceptKey: 'Micelle Trap'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Hard Water Scum Disaster',
        titleTa: 'கடின நீர் விளைவு',
        visualDescription: 'Calcium and magnesium ions precipitating soap as curdy white scum; synthetic detergent gliding past without forming scum.',
        narrationEn: 'Hard water calcium ruins soap by precipitating curd-like scum! But synthetic detergents carry sulfonate groups that stay brilliantly soluble!',
        narrationTa: 'கடின நீரில் உள்ள கால்சியம் சோப்பை வீழ்படிவாக்கி வீணாக்குகிறது; ஆனால் செயற்கை டிடர்ஜெண்ட்கள் கடின நீரிலும் நன்கு செயல்படுகின்றன!',
        conceptKey: 'Hard Water Resistance'
      },
      {
        sceneNumber: 3,
        titleEn: 'Spinning the Nylon-6,6 Thread',
        titleTa: 'நைலான்-6,6 பலபடி நூல் உருவாக்கம்',
        visualDescription: 'Hexamethylenediamine and adipic acid molecules condensing at the interface of two liquids, drawn upward as a continuous synthetic nylon thread.',
        narrationEn: 'When hexamethylenediamine meets adipic acid, they condense at the boundary, spinning continuous unbreakable threads of Nylon-6,6!',
        narrationTa: 'ஹெக்சாமெத்திலீன் டைஅமீன் மற்றும் அடிபிக் அமிலம் இணைந்து எல்லையில் தொடர்ச்சியான வலிமையான நைலான்-6,6 இழைகளை உருவாக்குகின்றன!',
        conceptKey: 'Nylon-6,6 Condensation'
      }
    ]
  }
};
