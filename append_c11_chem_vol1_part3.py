# -*- coding: utf-8 -*-

diagrams_and_videos = '''
export const CLASS_11_CHEM_VOL1_DIAGRAMS: Record<string, SchematicDiagram> = {
  c11_chem_u1: {
    id: 'diag_c11_chem_u1',
    chapterId: 'c11_chem_u1',
    titleEn: 'Mole Map: Mass, Moles, Volume, and Particles Hub',
    titleTa: 'மோல் வரைபடம்: நிறை, மோல்கள், பருமன் மற்றும் துகள்கள்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">The Central Mole Hub (மோல் வரைபடம்)</text>
      <!-- Central Mole Circle -->
      <circle cx="300" cy="160" r="45" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/>
      <text x="300" y="155" text-anchor="middle" font-weight="bold" fill="#1e3a8a" font-size="14">1 MOLE</text>
      <text x="300" y="172" text-anchor="middle" fill="#1d4ed8" font-size="10">(மோல்)</text>
      <!-- Top Box: Mass -->
      <rect x="230" y="70" width="140" height="35" rx="6" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <text x="300" y="92" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="12">Mass in Grams (g)</text>
      <!-- Left Box: Particles -->
      <rect x="50" y="140" width="150" height="40" rx="6" fill="#ecfdf5" stroke="#059669" stroke-width="2"/>
      <text x="125" y="160" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="11">6.022 × 10²³ Particles</text>
      <text x="125" y="173" text-anchor="middle" fill="#047857" font-size="9">Atoms / Molecules</text>
      <!-- Right Box: Volume at STP -->
      <rect x="400" y="140" width="150" height="40" rx="6" fill="#f3e8ff" stroke="#9333ea" stroke-width="2"/>
      <text x="475" y="160" text-anchor="middle" font-weight="bold" fill="#581c87" font-size="11">22.4 L at STP</text>
      <text x="475" y="173" text-anchor="middle" fill="#7e22ce" font-size="9">Molar Gas Volume</text>
      <!-- Connecting arrows -->
      <path d="M 300 105 L 300 115" stroke="#d97706" stroke-width="2"/>
      <path d="M 200 160 L 255 160" stroke="#059669" stroke-width="2"/>
      <path d="M 345 160 L 400 160" stroke="#9333ea" stroke-width="2"/>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Central Mole Unit', labelTa: 'மைய மோல் அலகு', descriptionEn: 'The universal counting bridge connecting macroscopic mass with microscopic count.', descriptionTa: 'மேக்ரோ அளவீட்டு நிறையை மைக்ரோ அணு எண்ணிக்கையுடன் இணைக்கும் பாலம்.', x: 50, y: 53 },
      { id: 'l2', labelEn: 'Avogadro Number', labelTa: 'அவகேட்ரோ எண்', descriptionEn: '6.022 x 10^23 elementary units per mole.', descriptionTa: 'ஒரு மோலில் உள்ள 6.022 x 10^23 துகள்கள்.', x: 21, y: 53 },
      { id: 'l3', labelEn: 'STP Gas Molar Volume', labelTa: 'STP மோலார் வாயு பருமன்', descriptionEn: '1 mole of any ideal gas occupies 22.4 L at 1 atm and 273.15 K.', descriptionTa: 'திட்ட வெப்ப அழுத்தத்தில் ஒரு மோல் வாயுவின் பருமன் 22.4 L.', x: 79, y: 53 }
    ]
  },

  c11_chem_u2: {
    id: 'diag_c11_chem_u2',
    chapterId: 'c11_chem_u2',
    titleEn: 'Atomic Orbitals Shapes & Aufbau Energy Diagram',
    titleTa: 'ஆர்பிட்டால்களின் வடிவங்கள் மற்றும் ஆஃபா ஆற்றல் வரிசை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#f8fafc" font-size="14">Orbital Geometry & (n + l) Aufbau Sequence</text>
      <!-- s orbital -->
      <circle cx="110" cy="130" r="30" fill="#3b82f6" fill-opacity="0.3" stroke="#60a5fa" stroke-width="2.5"/>
      <text x="110" y="175" text-anchor="middle" fill="#93c5fd" font-size="11">s orbital (l=0)</text>
      <text x="110" y="190" text-anchor="middle" fill="#cbd5e1" font-size="9">Spherical</text>
      <!-- p orbital (dumbbell) -->
      <path d="M 230 130 C 200 100, 200 160, 230 130 C 260 100, 260 160, 230 130" fill="#ec4899" fill-opacity="0.3" stroke="#f472b6" stroke-width="2.5"/>
      <text x="230" y="175" text-anchor="middle" fill="#f472b6" font-size="11">p orbital (l=1)</text>
      <text x="230" y="190" text-anchor="middle" fill="#cbd5e1" font-size="9">Dumbbell Shape</text>
      <!-- Aufbau ladder -->
      <line x1="340" y1="210" x2="520" y2="210" stroke="#10b981" stroke-width="3"/>
      <text x="330" y="215" fill="#10b981" font-size="11">1s</text>
      <line x1="360" y1="180" x2="520" y2="180" stroke="#06b6d4" stroke-width="3"/>
      <text x="350" y="185" fill="#06b6d4" font-size="11">2s</text>
      <line x1="380" y1="150" x2="520" y2="150" stroke="#f59e0b" stroke-width="3"/>
      <text x="370" y="155" fill="#f59e0b" font-size="11">2p</text>
      <line x1="400" y1="120" x2="520" y2="120" stroke="#ec4899" stroke-width="3"/>
      <text x="390" y="125" fill="#ec4899" font-size="11">3s</text>
      <line x1="420" y1="90" x2="520" y2="90" stroke="#a855f7" stroke-width="3"/>
      <text x="410" y="95" fill="#a855f7" font-size="11">3p</text>
      <line x1="440" y1="65" x2="520" y2="65" stroke="#ef4444" stroke-width="3"/>
      <text x="430" y="70" fill="#ef4444" font-size="11">4s &lt; 3d</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Spherical s Orbital', labelTa: 'கோள வடிவ s ஆர்பிட்டால்', descriptionEn: 'Uniform non-directional probability cloud with l=0.', descriptionTa: 'திசையமைப்பற்ற சீரான நிகழ்தகவு கொண்ட கோள வடிவம்.', x: 18, y: 45 },
      { id: 'l2', labelEn: 'Dumbbell p Orbital', labelTa: 'டம்பெல் வடிவ p ஆர்பிட்டால்', descriptionEn: 'Two lobes with a nodal plane at the nucleus (l=1).', descriptionTa: 'அணுக்கருவில் கணுத்தளத்தைக் கொண்ட இரு மடல்கள்.', x: 38, y: 45 },
      { id: 'l3', labelEn: 'Aufbau Energy Hierarchy', labelTa: 'ஆஃபா ஆற்றல் வரிசை', descriptionEn: '4s fills before 3d because (4+0) < (3+2).', descriptionTa: '(n+l) விதியின்படி 3d-க்கு முன் 4s நிரப்பப்படுகிறது.', x: 73, y: 40 }
    ]
  },

  c11_chem_u3: {
    id: 'diag_c11_chem_u3',
    chapterId: 'c11_chem_u3',
    titleEn: 'Periodic Trends Map: Radii, Ionization Energy, and Electronegativity',
    titleTa: 'ஆவர்த்தனப் போக்குகள் வரைபடம்: ஆரம், அயனியாக்கும் ஆற்றல், கவர் தன்மை',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#f8fafc" stroke="#334155" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Periodic Property Vectors (ஆவர்த்தனப் பண்புகள்)</text>
      <!-- Top arrow: Across period -->
      <line x1="120" y1="80" x2="480" y2="80" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="300" y="73" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="11">Across Period (L -> R): Atomic Radius Decreases, IE & EN Increase</text>
      <!-- Left arrow: Down group -->
      <line x1="80" y1="100" x2="80" y2="240" stroke="#2563eb" stroke-width="3"/>
      <text x="90" y="170" transform="rotate(90 90,170)" font-weight="bold" fill="#1d4ed8" font-size="11">Down Group: Radius Increases, IE Decreases</text>
      <!-- Central grid layout -->
      <rect x="130" y="100" width="370" height="140" rx="8" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5"/>
      <text x="160" y="130" fill="#047857" font-weight="bold" font-size="12">s-block</text>
      <text x="260" y="130" fill="#b45309" font-weight="bold" font-size="12">d-block (Transition)</text>
      <text x="440" y="130" fill="#6d28d9" font-weight="bold" font-size="12">p-block</text>
      <text x="315" y="180" text-anchor="middle" fill="#334155" font-size="11">Chlorine: Highest Electron Gain Enthalpy</text>
      <text x="315" y="200" text-anchor="middle" fill="#334155" font-size="11">Fluorine: Maximum Electronegativity (4.0)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Period Gradient (L -> R)', labelTa: 'வரிசைப் போக்கு', descriptionEn: 'Increasing Z_eff contracts electron shells, increasing electronegativity.', descriptionTa: 'பயனுறு அணுக்கரு மின்சுமை அதிகரிப்பதால் ஆரம் குறைந்து கவர் தன்மை கூடுகிறது.', x: 50, y: 26 },
      { id: 'l2', labelEn: 'Group Gradient (Down)', labelTa: 'தொகுதிப் போக்கு', descriptionEn: 'Additional principle shells make atoms larger and easier to ionize.', descriptionTa: 'கூடுதல் கூடுகள் இணைவதால் அணுக்கள் பெரிதாகி எளிதில் அயனியாகின்றன.', x: 13, y: 57 },
      { id: 'l3', labelEn: 'Halogen Peak Properties', labelTa: 'ஹாலஜன் உச்சிப் பண்புகள்', descriptionEn: 'Fluorine highest in electronegativity, Chlorine highest in electron gain enthalpy.', descriptionTa: 'ஃப்ளூரின் அதிக கவர் தன்மையும், குளோரின் அதிக எலக்ட்ரான் நாட்டமும் கொண்டவை.', x: 52, y: 65 }
    ]
  },

  c11_chem_u4: {
    id: 'diag_c11_chem_u4',
    chapterId: 'c11_chem_u4',
    titleEn: 'Hydrogen Peroxide (H2O2) Open-Book Molecular Geometry',
    titleTa: 'ஹைட்ரஜன் பெராக்சைடு திறந்த புத்தக மூலக்கூறு வடிவம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">H2O2 Non-Planar Open-Book Structure</text>
      <!-- Two planes meeting at angle -->
      <polygon points="180,90 300,140 300,240 180,190" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
      <polygon points="420,90 300,140 300,240 420,190" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <!-- Oxygen-Oxygen bond -->
      <circle cx="300" cy="140" r="14" fill="#ef4444"/>
      <text x="300" y="145" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">O</text>
      <circle cx="300" cy="240" r="14" fill="#ef4444"/>
      <text x="300" y="245" text-anchor="middle" fill="#fff" font-weight="bold" font-size="11">O</text>
      <!-- Hydrogen atoms -->
      <circle cx="210" cy="110" r="10" fill="#3b82f6"/>
      <text x="210" y="114" text-anchor="middle" fill="#fff" font-size="9">H</text>
      <circle cx="390" cy="220" r="10" fill="#3b82f6"/>
      <text x="390" y="224" text-anchor="middle" fill="#fff" font-size="9">H</text>
      <!-- Lines -->
      <line x1="210" y1="110" x2="300" y2="140" stroke="#334155" stroke-width="2.5"/>
      <line x1="300" y1="140" x2="300" y2="240" stroke="#dc2626" stroke-width="4"/>
      <line x1="300" y1="240" x2="390" y2="220" stroke="#334155" stroke-width="2.5"/>
      <text x="300" y="195" text-anchor="middle" fill="#b91c1c" font-size="10">O-O: 1.475 Å</text>
      <text x="300" y="80" text-anchor="middle" fill="#475569" font-size="11">Dihedral Angle: 111.5° (Gas Phase)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Peroxide O-O Bridge', labelTa: 'பெராக்சைடு O-O பிணைப்பு', descriptionEn: 'Single covalent bond between two oxygen atoms with formal oxidation state -1.', descriptionTa: 'இரு ஆக்சிஜன் அணுக்களுக்கிடையேயான ஒற்றை சகப்பிணைப்பு (-1 நிலை).', x: 50, y: 63 },
      { id: 'l2', labelEn: 'Dihedral Plane Angle', labelTa: 'இருதளக் கோணம் (111.5°)', descriptionEn: 'Non-planar dihedral angle between the two O-H plane wings.', descriptionTa: 'இரு O-H தளங்களுக்கு இடையே உள்ள 111.5° கோணம்.', x: 50, y: 28 },
      { id: 'l3', labelEn: 'Hydrogen Atom Wing', labelTa: 'ஹைட்ரஜன் அணு இறக்கை', descriptionEn: 'Hydrogen atoms positioned on opposite halves of the book.', descriptionTa: 'புத்தகத்தின் எதிரெதிர் தளங்களில் அமைந்துள்ள ஹைட்ரஜன் அணுக்கள்.', x: 65, y: 73 }
    ]
  },

  c11_chem_u5: {
    id: 'diag_c11_chem_u5',
    chapterId: 'c11_chem_u5',
    titleEn: 'Alkali & Alkaline Earth Metals Flame Spectrum & Ammonia Solvation',
    titleTa: 'சுடர் சோதனை நிறங்கள் மற்றும் அம்மோனியா கரைசல் மாதிரி',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#f8fafc" font-size="14">s-Block Flame Emission & Ammoniated Electrons</text>
      <!-- Bunsen flame cones -->
      <polygon points="80,210 110,120 140,210" fill="#dc2626" opacity="0.8"/>
      <text x="110" y="235" text-anchor="middle" fill="#fca5a5" font-size="11">Li: Crimson</text>
      <polygon points="160,210 190,120 220,210" fill="#facc15" opacity="0.8"/>
      <text x="190" y="235" text-anchor="middle" fill="#fde047" font-size="11">Na: Yellow</text>
      <polygon points="240,210 270,120 300,210" fill="#c084fc" opacity="0.8"/>
      <text x="270" y="235" text-anchor="middle" fill="#d8b4fe" font-size="11">K: Lilac</text>
      <polygon points="320,210 350,120 380,210" fill="#f97316" opacity="0.8"/>
      <text x="350" y="235" text-anchor="middle" fill="#fdba74" font-size="11">Ca: Brick Red</text>
      <!-- Ammoniated electron bubble -->
      <circle cx="480" cy="165" r="45" fill="#1e3a8a" stroke="#3b82f6" stroke-width="3"/>
      <text x="480" y="160" text-anchor="middle" font-weight="bold" fill="#bfdbfe" font-size="12">[e(NH3)y]⁻</text>
      <text x="480" y="178" text-anchor="middle" fill="#93c5fd" font-size="9">Deep Blue Color</text>
      <text x="480" y="235" text-anchor="middle" fill="#60a5fa" font-size="10">Paramagnetic Conductor</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Sodium Yellow Flame', labelTa: 'சோடியம் பொன் மஞ்சள் சுடர்', descriptionEn: 'Excitation of 3s1 electron to 3p, emitting at 589 nm.', descriptionTa: '3s1 எலக்ட்ரான் கிளர்வுற்று 589 nm மஞ்சள் ஒளியை உமிழ்கிறது.', x: 31, y: 65 },
      { id: 'l2', labelEn: 'Calcium Brick Red Flame', labelTa: 'கால்சியம் செங்கல் சிவப்பு சுடர்', descriptionEn: 'Characteristic thermal emission for qualitative alkaline earth analysis.', descriptionTa: 'காரமண் உலோக தரம்பிரி சோதனையின் செங்கல் சிவப்பு உமிழ்வு.', x: 58, y: 65 },
      { id: 'l3', labelEn: 'Ammoniated Electron Cage', labelTa: 'அம்மோனியேற்றப்பட்ட எலக்ட்ரான் கூடு', descriptionEn: 'Trapped solvated electron giving deep blue conducting solutions in liquid NH3.', descriptionTa: 'திரவ அம்மோனியாவில் எலக்ட்ரான் சூழ்ந்து நீல நிறத்தைத் தரும் அமைப்பு.', x: 80, y: 55 }
    ]
  },

  c11_chem_u6: {
    id: 'diag_c11_chem_u6',
    chapterId: 'c11_chem_u6',
    titleEn: 'Andrews Isotherms of Real Gases and Critical Point',
    titleTa: 'ஆன்ட்ரூஸின் இயல்பு வாயு சமவெப்பக் கோடுகள் மற்றும் நிலைமாறு புள்ளி',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">P-V Isotherms & Critical State (CO2)</text>
      <!-- Axes -->
      <line x1="80" y1="240" x2="520" y2="240" stroke="#334155" stroke-width="2"/>
      <text x="500" y="260" fill="#334155" font-size="11">Volume (V)</text>
      <line x1="80" y1="240" x2="80" y2="70" stroke="#334155" stroke-width="2"/>
      <text x="65" y="85" fill="#334155" font-size="11">Pressure (P)</text>
      <!-- Curves -->
      <path d="M 90 90 Q 200 120 480 230" fill="none" stroke="#2563eb" stroke-width="2"/>
      <text x="460" y="215" fill="#2563eb" font-size="10">T > Tc (Ideal Gas)</text>
      <!-- Critical isotherm -->
      <path d="M 90 120 Q 240 160 270 160 Q 300 160 480 238" fill="none" stroke="#dc2626" stroke-width="2.5"/>
      <circle cx="270" cy="160" r="6" fill="#dc2626"/>
      <text x="270" y="150" text-anchor="middle" font-weight="bold" fill="#b91c1c" font-size="11">Critical Point (Pc, Tc)</text>
      <!-- Subcritical with plateau -->
      <path d="M 90 150 L 140 190 L 340 190 Q 420 210 480 242" fill="none" stroke="#059669" stroke-width="2"/>
      <text x="240" y="185" text-anchor="middle" fill="#047857" font-size="10">Liquid + Vapour Equilibrium</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Critical Point (Pc, Tc)', labelTa: 'நிலைமாறு புள்ளி (Pc, Tc)', descriptionEn: 'Inflection point on critical isotherm where liquid-vapour boundary vanishes.', descriptionTa: 'திரவ-வாயு எல்லை மறையும் நிலைமாறு சமவெப்பக் கோட்டின் வளைவு புள்ளி.', x: 45, y: 53 },
      { id: 'l2', labelEn: 'Supercritical Gas Phase', labelTa: 'மீநிலைமாறு வாயு நிலை', descriptionEn: 'Above Tc, gas behaves smoothly and cannot be liquefied by pressure alone.', descriptionTa: 'Tc-க்கு மேல் அழுத்தத்தால் மட்டும் வாயுவை திரவமாக்க இயலாது.', x: 77, y: 72 },
      { id: 'l3', labelEn: 'Condensation Plateau', labelTa: 'குளிர்விப்பு கிடைமட்டம்', descriptionEn: 'Horizontal coexistence line where gas transforms to liquid at constant P.', descriptionTa: 'மாறா அழுத்தத்தில் வாயு திரவமாக மாறும் சமநிலை கிடைமட்டம்.', x: 40, y: 63 }
    ]
  },

  c11_chem_u7: {
    id: 'diag_c11_chem_u7',
    chapterId: 'c11_chem_u7',
    titleEn: 'Reaction Coordinate & Gibbs Free Energy Spontaneity Profile',
    titleTa: 'வினை ஆயத்தொலைவு மற்றும் கிப்ஸ் கட்டிலா ஆற்றல் தன்னிச்சை வரைபடம்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 600 300" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="540" height="250" rx="12" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      <text x="300" y="55" text-anchor="middle" font-weight="bold" fill="#0f172a" font-size="14">Free Energy Profile & Spontaneity (ΔG &lt; 0)</text>
      <!-- Axes -->
      <line x1="80" y1="240" x2="520" y2="240" stroke="#334155" stroke-width="2"/>
      <text x="460" y="260" fill="#334155" font-size="11">Reaction Coordinate</text>
      <line x1="80" y1="240" x2="80" y2="70" stroke="#334155" stroke-width="2"/>
      <text x="45" y="85" fill="#334155" font-size="11">Free Energy (G)</text>
      <!-- Reactant energy level -->
      <line x1="100" y1="130" x2="190" y2="130" stroke="#2563eb" stroke-width="3"/>
      <text x="145" y="120" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="12">Reactants (G_initial)</text>
      <!-- Curve over activation barrier -->
      <path d="M 190 130 Q 280 60 370 200" fill="none" stroke="#7c3aed" stroke-width="3"/>
      <text x="280" y="85" text-anchor="middle" fill="#6d28d9" font-size="10">Transition State</text>
      <!-- Product energy level -->
      <line x1="370" y1="200" x2="480" y2="200" stroke="#059669" stroke-width="3"/>
      <text x="425" y="190" text-anchor="middle" font-weight="bold" fill="#047857" font-size="12">Products (G_final)</text>
      <!-- Delta G indicator -->
      <line x1="490" y1="130" x2="490" y2="200" stroke="#dc2626" stroke-width="2" stroke-dasharray="3"/>
      <text x="535" y="165" font-weight="bold" fill="#b91c1c" font-size="12">ΔG &lt; 0 (Spontaneous)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Initial Reactant State', labelTa: 'தொடக்க வினைபடு பொருள் நிலை', descriptionEn: 'Free energy of reactants G_initial before reaction occurs.', descriptionTa: 'வினை நிகழ்வதற்கு முந்தைய தொடக்கக் கட்டிலா ஆற்றல்.', x: 24, y: 43 },
      { id: 'l2', labelEn: 'Transition State Peak', labelTa: 'கிளர்வுற்ற நிலை உச்சி', descriptionEn: 'Activation energy barrier required to achieve transition state.', descriptionTa: 'கிளர்வுற்ற நிலையை அடையத் தேவைப்படும் கிளர்வுறு ஆற்றல் தடை.', x: 47, y: 28 },
      { id: 'l3', labelEn: 'Negative Delta G Drop', labelTa: 'எதிர்மறை Delta G சரிவு', descriptionEn: 'Thermodynamic driving force making forward reaction spontaneous.', descriptionTa: 'முன்னோக்கிய வினையைத் தன்னிச்சையாக இயக்கும் கட்டிலா ஆற்றல் குறைவு.', x: 82, y: 55 }
    ]
  }
};

export const CLASS_11_CHEM_VOL1_VIDEOS: Record<string, VideoExplainer> = {
  c11_chem_u1: {
    id: 'vid_c11_chem_u1',
    chapterId: 'c11_chem_u1',
    titleEn: 'Animation: The Mole Bridge & Balancing Redox Equations',
    titleTa: 'அனிமேஷன்: மோல் கருத்து மற்றும் ஆக்சிஜனேற்ற சமன்பாடுகள்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Counting Highway: What is a Mole?',
        titleTa: 'மோல் கருத்து: அணுக்களை எடையிட்டு எண்ணுதல்',
        visualDescription: 'Carbon-12 atoms being weighed on a micro-balance until exactly 12 grams accumulate 6.022 x 10^23 gleaming atoms.',
        narrationEn: 'A mole is chemistry counting bridge! Just as a dozen means twelve, one mole always contains 6.022 x 10^23 elementary particles.',
        narrationTa: 'ஒரு டஜன் என்பது 12-ஐக் குறிப்பது போல, ஒரு மோல் என்பது 6.022 x 10^23 துகள்களைக் கொண்ட வேதியியலின் அளவீட்டுப் பாலமாகும்!',
        conceptKey: 'Avogadro Number'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Limiting Reagent Traffic Stop',
        titleTa: 'வினைக்கட்டுப்படுத்தும் காரணி செயல்முறை',
        visualDescription: 'Hydrogen and oxygen molecules combining into water droplets until hydrogen runs out completely, halting water production.',
        narrationEn: 'Whichever reactant runs out first acts as the limiting reagent. It commands the maximum yield of products that can possibly form!',
        narrationTa: 'எந்த வினைபடுபொருள் முதலில் தீர்ந்துபோகிறதோ அதுவே வினைக்கட்டுப்படுத்தும் காரணி. அதுவே உருவாகும் விளைபொருளின் அளவைத் தீர்மானிக்கிறது!',
        conceptKey: 'Limiting Reagent'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Redox Electron Exchange Balance',
        titleTa: 'ஆக்சிஜனேற்ற-ஒடுக்க எலக்ட்ரான் பரிமாற்றம்',
        visualDescription: 'Electrons jumping from zinc atoms to copper ions in an animated redox transfer with simultaneous oxidation number tracking.',
        narrationEn: 'In redox reactions, oxidation is the loss of electrons and reduction is the gain. Balancing requires total electrons lost to equal total electrons gained!',
        narrationTa: 'ஆக்சிஜனேற்ற-ஒடுக்க வினைகளில் எலக்ட்ரான் இழப்பும் ஏற்பும் சமமாக அமைய வேண்டும். இதுவே சமன்பாட்டைச் சமன் செய்ய உதவுகிறது!',
        conceptKey: 'Redox Accounting'
      }
    ]
  },

  c11_chem_u2: {
    id: 'vid_c11_chem_u2',
    chapterId: 'c11_chem_u2',
    titleEn: 'Animation: Wave-Particle Duality & Orbital Architecture',
    titleTa: 'அனிமேஷன்: அலை-துகள் ஈரியல்பு மற்றும் ஆர்பிட்டால் அமைப்பு',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'de Broglie Matter Waves in Action',
        titleTa: 'டி பிராக்லி பருப்பொருள் அலைகள்',
        visualDescription: 'An electron zooming around a nucleus, rippling as a continuous standing wave with wavelength lambda = h / mv.',
        narrationEn: 'Louis de Broglie revealed that moving particles possess matter waves! Faster momentum produces tighter, shorter de Broglie wavelengths.',
        narrationTa: 'இயங்கும் துகள்கள் பருப்பொருள் அலைகளாகச் செயல்படுகின்றன என்பதை டி பிராக்லி நிரூபித்தார். உந்தம் அதிகரிக்க அலைநீளம் குறைகிறது!',
        conceptKey: 'Matter Duality'
      },
      {
        sceneNumber: 2,
        titleEn: 'Heisenberg Uncertainty & Probability Clouds',
        titleTa: 'ஹைசன்பெர்க் நிச்சயமற்ற தன்மை மற்றும் ஆர்பிட்டால்கள்',
        visualDescription: 'Shining photons onto an electron which shifts its position randomly, replacing circular orbits with glowing 3D probability clouds.',
        narrationEn: 'Heisenberg showed we cannot pin down position and speed at once. Classical orbits dissolve into 3D orbital probability clouds!',
        narrationTa: 'எலக்ட்ரானின் நிலை மற்றும் உந்தத்தை ஒரே நேரத்தில் கணக்கிட முடியாது. எனவே வட்டப் பாதைகளுக்குப் பதிலாக 3D ஆர்பிட்டால்கள் தோன்றுகின்றன!',
        conceptKey: 'Uncertainty Principle'
      },
      {
        sceneNumber: 3,
        titleEn: 'Aufbau & Hunds Rule: The Electron Dance',
        titleTa: 'ஆஃபா மற்றும் ஹுண்ட் விதிப்படி எலக்ட்ரான்கள் நிரம்புதல்',
        visualDescription: 'Electrons filling 1s, 2s, and 2p degenerate boxes with parallel arrows first before pairing up, showcasing chromium 3d5 4s1 stability.',
        narrationEn: 'Electrons fill the lowest energy orbitals first, spreading out with parallel spins across degenerate orbitals to minimize repulsion!',
        narrationTa: 'எலக்ட்ரான்கள் குறைந்த ஆற்றல் கொண்ட ஆர்பிட்டால்களில் முதலில் ஒற்றையாக நிரம்பி, பின்னர் இணையாகி நிலைப்புத்தன்மையை அடைகின்றன!',
        conceptKey: 'Orbital Filling'
      }
    ]
  },

  c11_chem_u3: {
    id: 'vid_c11_chem_u3',
    chapterId: 'c11_chem_u3',
    titleEn: 'Animation: Periodic Trends & The Chlorine Anomaly',
    titleTa: 'அனிமேஷன்: ஆவர்த்தனப் போக்குகள் மற்றும் குளோரின் சிறப்பு',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Atomic Radius Tug-of-War',
        titleTa: 'அணு ஆரம் வரிசை மற்றும் தொகுதி மாறுபாடுகள்',
        visualDescription: 'Nucleus positive charge pulling outer electron shells closer across a period, and new outer shells ballooning down a group.',
        narrationEn: 'Across a period, rising effective nuclear charge pulls electrons tighter, shrinking atoms. Down a group, new shells expand atom size!',
        narrationTa: 'வரிசையில் செல்லும்போது பயனுறு அணுக்கரு மின்சுமை எலக்ட்ரான்களை இழுத்து அணு ஆரத்தைக் குறைக்கிறது; தொகுதியில் புதிய கூடுகளால் ஆரம் கூடுகிறது!',
        conceptKey: 'Atomic Contraction'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Chlorine vs Fluorine Electron Gain Showdown',
        titleTa: 'குளோரின் vs ஃப்ளூரின் எலக்ட்ரான் நாட்டப் போட்டி',
        visualDescription: 'An incoming electron attempting to enter the tiny congested 2p orbital of Fluorine vs comfortably entering the spacious 3p orbital of Chlorine.',
        narrationEn: 'Why does Chlorine beat Fluorine in electron gain enthalpy? Because tiny Fluorine suffers crowded electron repulsion in its compact 2p orbital!',
        narrationTa: 'சிறிய ஃப்ளூரின் கூட்டில் எலக்ட்ரான் விலக்கு விசை அதிகமுள்ளது. எனவே விசாலமான 3p கூடு கொண்ட குளோரின் அதிக எலக்ட்ரான் நாட்டத்தை வெளிப்படுத்துகிறது!',
        conceptKey: 'Electron Gain Anomaly'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Diagonal Dance of Li and Mg',
        titleTa: 'லித்தியம் மற்றும் மெக்னீசியத்தின் மூலைவிட்ட ஒற்றுமை',
        visualDescription: 'Li+ and Mg2+ ions displaying matching charge density spheres and forming identical insoluble carbonates and nitrides.',
        narrationEn: 'Diagonal neighbors like Lithium and Magnesium share similar polarizing power, giving them closely matched chemical personalities!',
        narrationTa: 'ஒரே மாதிரியான அயனி மின்னூட்ட-ஆர விகிதம் பெற்றுள்ளதால் லித்தியம் மற்றும் மெக்னீசியம் மூலைவிட்டத் தொடர்பைக் கொண்டு ஒத்த பண்புகளைக் காட்டுகின்றன!',
        conceptKey: 'Diagonal Relationship'
      }
    ]
  },

  c11_chem_u4: {
    id: 'vid_c11_chem_u4',
    chapterId: 'c11_chem_u4',
    titleEn: 'Animation: Hydrogen Isotopes & Heavy Water Nuclear Duty',
    titleTa: 'அனிமேஷன்: ஹைட்ரஜன் ஐசோடோப்புகள் மற்றும் கனநீர் செயல்பாடு',
    durationSeconds: 185,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Meet the Isotopes: Protium, Deuterium, and Tritium',
        titleTa: 'ஹைட்ரஜனின் மூன்று ஐசோடோப்புகள்',
        visualDescription: 'Visual representation of Protium (1p), Deuterium (1p, 1n), and radioactive Tritium (1p, 2n emitting a beta particle).',
        narrationEn: 'Hydrogen comes in three isotopic flavors! Normal Protium has no neutron, Deuterium forms heavy water, and Tritium is radioactive.',
        narrationTa: 'ஹைட்ரஜனுக்கு புரோட்டியம், டியூட்டீரியம் மற்றும் கதிரியக்க ட்ரிட்டியம் என மூன்று சகோதர ஐசோடோப்புகள் உள்ளன!',
        conceptKey: 'Hydrogen Isotopes'
      },
      {
        sceneNumber: 2,
        titleEn: 'Ortho vs Para: The Nuclear Spin Flip',
        titleTa: 'ஆர்த்தோ மற்றும் பாரா அணுக்கரு தற்சுழற்சி',
        visualDescription: 'Two hydrogen nuclei spinning in unison (parallel ortho) vs spinning oppositely (anti-parallel para) inside an H2 molecule.',
        narrationEn: 'In ortho-hydrogen, nuclear proton spins point in the same direction. In para-hydrogen, they cancel each other out in opposite spins!',
        narrationTa: 'ஆர்த்தோ ஹைட்ரஜனில் இரு புரோட்டான்களின் தற்சுழற்சி ஒரே திசையிலும், பாரா ஹைட்ரஜனில் எதிரெதிர் திசையிலும் அமைகிறது!',
        conceptKey: 'Spin Isomerism'
      },
      {
        sceneNumber: 3,
        titleEn: 'Heavy Water in Nuclear Fission',
        titleTa: 'அணு உலைகளில் கனநீரின் தணிப்பான் பணி',
        visualDescription: 'Fast neutrons colliding with D2O molecules, decelerating into thermal neutrons that safely sustain uranium fission.',
        narrationEn: 'Deuterium oxide or heavy water acts as a nuclear moderator, slowing down energetic neutrons to maintain controlled chain reactions!',
        narrationTa: 'கனநீர் அணு உலைகளில் வேகமான நியூட்ரான்களை மோதி மெதுவாக்கி கட்டுப்படுத்தப்பட்ட அணுக்கரு பிளவு வினையை வழிநடத்துகிறது!',
        conceptKey: 'Nuclear Moderator'
      }
    ]
  },

  c11_chem_u5: {
    id: 'vid_c11_chem_u5',
    chapterId: 'c11_chem_u5',
    titleEn: 'Animation: The Fireworks of s-Block & Ammoniated Electrons',
    titleTa: 'அனிமேஷன்: சுடர் சோதனைகள் மற்றும் அம்மோனியா நீலக் கரைசல்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Flame Test Spectra of Alkali Metals',
        titleTa: 'கார உலோகங்களின் சுடர் வண்ண உமிழ்வு',
        visualDescription: 'Spraying metal salts into a hot flame: Sodium igniting in golden yellow, Lithium glowing crimson, and Calcium burning brick red.',
        narrationEn: 'When heated in a flame, valence electrons jump to higher levels, releasing vivid characteristic colors as they return to ground state!',
        narrationTa: 'சுடரில் வெப்பமடையும் போது எலக்ட்ரான்கள் கிளர்வுற்று மீண்டும் தரைநிலைக்குத் திரும்பும்போது சிறப்பான சுடர் நிறங்களை உமிழ்கின்றன!',
        conceptKey: 'Flame Excitation'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Ammoniated Electron Phenomenon',
        titleTa: 'அம்மோனியேற்றப்பட்ட எலக்ட்ரானின் நீல அற்புதம்',
        visualDescription: 'Dissolving sodium in liquid ammonia; solvated electrons creating a rich azure-blue conducting solution.',
        narrationEn: 'Alkali metals dissolve in liquid ammonia releasing solvated ammoniated electrons that produce an electrifying deep blue liquid!',
        narrationTa: 'கார உலோகங்கள் திரவ அம்மோனியாவில் கரையும்போது அம்மோனியேற்றப்பட்ட எலக்ட்ரான்களை வெளியிட்டு ஆழ்ந்த நீல நிற மின்கடத்தும் கரைசலாக மாறுகின்றன!',
        conceptKey: 'Solvated Electrons'
      },
      {
        sceneNumber: 3,
        titleEn: 'Gypsum to Plaster of Paris: The 393 K Boundary',
        titleTa: 'ஜிப்சம் முதல் பாரிஸ் சாந்து வரை: 393 K எல்லை',
        visualDescription: 'Gypsum losing 1.5 moles of water at 393 K to form setting plaster, then getting overheated above 393 K to dead burnt plaster.',
        narrationEn: 'Heat gypsum gently at 393 K to make setting Plaster of Paris! Overheating strips all water, leaving lifeless dead burnt plaster.',
        narrationTa: 'ஜிப்சத்தை 393 K-ல் சூடாக்கினால் விரைந்து கெட்டியாகும் பாரிஸ் சாந்து கிடைக்கும்; அதிக வெப்பப்படுத்தினால் அது செத்த சாந்தாக மாறும்!',
        conceptKey: 'Dehydration Control'
      }
    ]
  },

  c11_chem_u6: {
    id: 'vid_c11_chem_u6',
    chapterId: 'c11_chem_u6',
    titleEn: 'Animation: Real Gas Deviations & The Liquefaction Threshold',
    titleTa: 'அனிமேஷன்: இயல்பு வாயு விலகல் மற்றும் நிலைமாறு குளிர்விப்பு',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Why Ideal Gas Law Fails at High Pressure',
        titleTa: 'அதிக அழுத்தத்தில் நல்லியல்பு சமன்பாடு தோல்வியுறுவது ஏன்?',
        visualDescription: 'Gas molecules squeezed into a tiny volume where molecular sizes and intermolecular attractions become undeniable.',
        narrationEn: 'At high pressure and low temperature, real gas molecules refuse to act like ghosts! Their actual size and attraction force them away from ideal behavior.',
        narrationTa: 'அதிக அழுத்தத்தில் மூலக்கூறுகளின் பருமன் மற்றும் அவற்றிற்கிடையேயான ஈர்ப்பு விசை காரணமாக இயல்பு வாயுக்கள் நல்லியல்பு நிலையிலிருந்து விலகுகின்றன!',
        conceptKey: 'van der Waals Deviation'
      },
      {
        sceneNumber: 2,
        titleEn: 'Understanding van der Waals Constants a and b',
        titleTa: 'வாண்டர்வால்ஸ் மாறிலிகள் a மற்றும் b விளக்கம்',
        visualDescription: 'Animated springs representing intermolecular attraction parameter a and rigid excluded spheres representing volume correction b.',
        narrationEn: 'Johannes van der Waals fixed the equation! Constant a corrects for sticky attractive forces, while b accounts for excluded molecular volume.',
        narrationTa: 'வாண்டர்வால்ஸ் மாறிலி a கவர்ச்சி விசையையும், மாறிலி b மூலக்கூறுகளின் விலக்கப்பட்ட பருமன் திருத்தத்தையும் குறிக்கின்றன!',
        conceptKey: 'Correction Constants'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Critical Temperature Gate (Tc)',
        titleTa: 'நிலைமாறு வெப்பநிலை வாயில் (Tc)',
        visualDescription: 'Pumping extreme pressure into a gas above Tc without liquefaction, then cooling below Tc where it suddenly condenses into clear liquid.',
        narrationEn: 'No matter how hard you squeeze, a gas will not liquefy above its critical temperature! You must cool below Tc for condensation to occur.',
        narrationTa: 'நிலைமாறு வெப்பநிலைக்கு (Tc) மேல் எவ்வளவு அழுத்தம் கொடுத்தாலும் வாயு திரவமாகாது. Tc-க்குக் கீழே குளிர்ந்த பின்னரே திரவமாக்கல் சாத்தியம்!',
        conceptKey: 'Critical Temperature'
      }
    ]
  },

  c11_chem_u7: {
    id: 'vid_c11_chem_u7',
    chapterId: 'c11_chem_u7',
    titleEn: 'Animation: The Thermodynamic Universe & Gibbs Spontaneity',
    titleTa: 'அனிமேஷன்: வெப்ப இயக்கவியல் பிரபஞ்சம் மற்றும் கிப்ஸ் கட்டிலா ஆற்றல்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'First Law: Energy Cannot Vanish',
        titleTa: 'முதல் விதி: ஆற்றல் ஒருபோதும் அழிவதில்லை',
        visualDescription: 'Heat energy q flowing into a piston cylinder doing expansion work w while increasing internal energy Delta U.',
        narrationEn: 'The First Law declares energy is immortal! Heat added to a system either elevates internal energy or performs work against external pressure.',
        narrationTa: 'வெப்ப இயக்கவியல் முதல் விதிப்படி ஆற்றலை அழிக்க முடியாது. கொடுக்கப்படும் வெப்பம் அக ஆற்றலை உயர்த்துகிறது அல்லது வேலையாக மாறுகிறது!',
        conceptKey: 'Energy Conservation'
      },
      {
        sceneNumber: 2,
        titleEn: 'Entropy: The Natural Tendency Towards Disorder',
        titleTa: 'என்ட்ரோபி: ஒழுங்கின்மையை நோக்கிய பிரபஞ்சப் பயணம்',
        visualDescription: 'An orderly crystal lattice dissolving and spreading chaotic particles throughout water, increasing total entropy.',
        narrationEn: 'Entropy measures disorder! The Second Law states that every natural spontaneous event pushes the entropy of the universe ever higher.',
        narrationTa: 'என்ட்ரோபி என்பது மூலக்கூறுகளின் ஒழுங்கற்ற தன்மையாகும். அண்டத்தில் நிகழும் அனைத்து தன்னிச்சையான வினைகளும் மொத்த என்ட்ரோபியை அதிகரிக்கின்றன!',
        conceptKey: 'Entropy Arrow'
      },
      {
        sceneNumber: 3,
        titleEn: 'Gibbs Free Energy: The Ultimate Reaction Master',
        titleTa: 'கிப்ஸ் கட்டிலா ஆற்றல்: வினையைத் தீர்மானிக்கும் இறுதி நீதிபதி',
        visualDescription: 'A tug-of-war between enthalpy Delta H and temperature-entropy T Delta S, tipping the balance when Delta G is negative.',
        narrationEn: 'Gibbs Free Energy settles the conflict! When Delta G is negative, the reaction is spontaneous, driving forward without external force!',
        narrationTa: 'கிப்ஸ் கட்டிலா ஆற்றல் மாற்றம் (Delta G) எதிர்க்குறியாக (< 0) அமையும் போது மட்டுமே ஒரு வேதிவினை தன்னிச்சையாக நிகழ்கிறது!',
        conceptKey: 'Gibbs Spontaneity'
      }
    ]
  }
};
'''

with open('src/data/class11ChemVol1.ts', 'a', encoding='utf-8') as f:
    f.write(diagrams_and_videos)
print("Volume 1 Diagrams and Videos appended.")
