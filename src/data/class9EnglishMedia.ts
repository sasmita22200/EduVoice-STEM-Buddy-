import { SchematicDiagram, VideoExplainer, Chapter } from '../types';

/**
 * Authentic Samacheer Kalvi Class 9 English - Schematic Diagrams & Animated Video Explainers
 * Covers all 7 Units (Prose, Poem, Supplementary)
 */

export const CLASS_9_ENGLISH_DIAGRAMS: Record<string, SchematicDiagram> = {
  // Unit 1 Prose: Learning the Game (Sachin Tendulkar)
  c9_eng_u1_p1: {
    id: 'diag_c9_eng_u1_p1',
    chapterId: 'c9_eng_u1_p1',
    titleEn: 'Shivaji Park Training Routine & One-Rupee Coin Challenge',
    titleTa: 'சிவாஜி பார்க் கிரிக்கெட் பயிற்சி மற்றும் ஒரு ரூபாய் நாணய சவால்',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      
      <!-- Cricket pitch center -->
      <rect x="260" y="50" width="180" height="220" rx="10" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
      <line x1="260" y1="80" x2="440" y2="80" stroke="#b45309" stroke-width="2"/>
      <line x1="260" y1="240" x2="440" y2="240" stroke="#b45309" stroke-width="2"/>
      <text x="350" y="150" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="14">Shivaji Park Pitch</text>
      <text x="350" y="175" text-anchor="middle" fill="#92400e" font-size="11">Coach Ramakant Achrekar</text>
      
      <!-- One Rupee Coin on Stumps -->
      <circle cx="350" cy="240" r="16" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
      <text x="350" y="245" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="11">₹1</text>
      <text x="350" y="270" text-anchor="middle" font-weight="bold" fill="#b45309" font-size="9">Coin on Stumps</text>

      <!-- Routine Box Left -->
      <rect x="40" y="50" width="200" height="100" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
      <text x="140" y="75" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="12">Morning Session</text>
      <text x="55" y="98" fill="#166534" font-size="11">• 7:30 AM – 10:30 AM</text>
      <text x="55" y="118" fill="#166534" font-size="11">• Intense batting nets</text>
      <text x="55" y="136" fill="#166534" font-size="11">• Fielding stamina drills</text>

      <!-- Afternoon Box Left -->
      <rect x="40" y="170" width="200" height="100" rx="10" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
      <text x="140" y="195" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="12">Afternoon to Dusk</text>
      <text x="55" y="218" fill="#166534" font-size="11">• Post-school sessions</text>
      <text x="55" y="238" fill="#166534" font-size="11">• Exhausted bus journeys</text>
      <text x="55" y="256" fill="#166534" font-size="11">• Dirty kit laundering</text>

      <!-- Key Lesson Box Right -->
      <rect x="460" y="50" width="200" height="220" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="560" y="80" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Achrekar Sir's Credo</text>
      <text x="475" y="115" fill="#1e3a8a" font-size="11">"Don't play for others</text>
      <text x="475" y="133" fill="#1e3a8a" font-size="11">to applaud you;</text>
      <text x="475" y="151" fill="#1d4ed8" font-weight="bold" font-size="12">play so that the world</text>
      <text x="475" y="169" fill="#1d4ed8" font-weight="bold" font-size="12">will applaud you!"</text>
      <line x1="475" y1="185" x2="645" y2="185" stroke="#cbd5e1" stroke-width="1"/>
      <text x="475" y="208" fill="#475569" font-size="11">• Won 13 one-rupee coins</text>
      <text x="475" y="228" fill="#475569" font-size="11">• Shardashram school transfer</text>
      <text x="475" y="248" fill="#059669" font-weight="bold" font-size="10">Autobiography: Playing It My Way</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'One-Rupee Coin Challenge', labelTa: 'ஒரு ரூபாய் நாணயப் போட்டி', descriptionEn: 'If Sachin survived dismissal by 60-70 fielders until the end of the session, he earned the coin on the stumps.', descriptionTa: 'பயிற்சி முடியும் வரை ஆட்டமிழக்காமல் நின்றால் ஸ்டம்பின் மீதுள்ள ஒரு ரூபாய் நாணயத்தை சச்சின் பரிசாகப் பெறுவார்.', x: 50, y: 75 },
      { id: 'l2', labelEn: 'Rigorous 2-Session Schedule', labelTa: 'கடுமையான பயிற்சி அட்டவணை', descriptionEn: 'Morning (7:30 - 10:30 AM) and afternoon until darkness at Shivaji Park shaped Sachin’s peerless stamina.', descriptionTa: 'காலை மற்றும் மாலை என இடைவிடாத பயிற்சி சச்சினின் அளப்பரிய கிரிக்கெட் திறமையை செதுக்கியது.', x: 20, y: 35 },
      { id: 'l3', labelEn: 'Master’s Invaluable Advice', labelTa: 'அச்ரேகர் சாரின் பொன்மொழி', descriptionEn: 'Achrekar Sir scolded him for bunking nets: "Play so that the entire world will clap for your greatness."', descriptionTa: 'மற்றவர்கள் பாராட்ட வேண்டும் என்பதற்காக ஆடாதே; இந்த உலகமே உன்னைப் பாராட்டும்படி ஆடு என்ற ஆசானின் அறிவுரை.', x: 80, y: 45 }
    ]
  },

  // Unit 1 Poem: Stopping by Woods on a Snowy Evening (Robert Frost)
  c9_eng_u1_p2: {
    id: 'diag_c9_eng_u1_p2',
    chapterId: 'c9_eng_u1_p2',
    titleEn: 'Symbolic Conflict Diagram: Allure of Woods vs Promises to Keep',
    titleTa: 'குறியீட்டு விளக்கப்படம்: வனத்தின் அழகும் வாழ்க்கையின் கடமைகளும்',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="260" rx="14" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      
      <!-- Snowy Woods Left -->
      <rect x="50" y="45" width="260" height="210" rx="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
      <text x="180" y="75" text-anchor="middle" font-weight="bold" fill="#38bdf8" font-size="14">The Lovely, Dark & Deep Woods</text>
      <text x="70" y="110" fill="#94a3b8" font-size="11">• Total silence: "easy wind & downy flake"</text>
      <text x="70" y="132" fill="#94a3b8" font-size="11">• Temptation to pause and escape reality</text>
      <text x="70" y="154" fill="#94a3b8" font-size="11">• The little horse shakes harness bells</text>
      <text x="70" y="176" fill="#cbd5e1" font-size="11">• Questioning the pause near frozen lake</text>
      <rect x="70" y="195" width="220" height="40" rx="6" fill="#0284c7" fill-opacity="0.3"/>
      <text x="180" y="220" text-anchor="middle" font-weight="bold" fill="#7dd3fc" font-size="11">Symbolizes: Rest, Solitude & Escape</text>

      <!-- Center Tension Arrow -->
      <path d="M 320 150 L 375 150" stroke="#f59e0b" stroke-width="3" marker-end="url(#arrow)"/>
      <text x="348" y="140" text-anchor="middle" font-weight="bold" fill="#f59e0b" font-size="12">DUTY</text>

      <!-- Promises to Keep Right -->
      <rect x="390" y="45" width="260" height="210" rx="12" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      <text x="520" y="75" text-anchor="middle" font-weight="bold" fill="#fcd34d" font-size="14">"Promises to Keep"</text>
      <text x="410" y="110" fill="#94a3b8" font-size="11">• Social and family responsibilities</text>
      <text x="410" y="132" fill="#94a3b8" font-size="11">• The journey before the final sleep</text>
      <text x="410" y="154" fill="#cbd5e1" font-size="11">• Repetition emphasizing perseverance</text>
      <rect x="410" y="175" width="220" height="60" rx="6" fill="#b45309" fill-opacity="0.3"/>
      <text x="520" y="198" text-anchor="middle" font-weight="bold" fill="#fef08a" font-size="10">"And miles to go before I sleep,</text>
      <text x="520" y="218" text-anchor="middle" font-weight="bold" fill="#fef08a" font-size="10">And miles to go before I sleep."</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Seductive Solitude of Nature', labelTa: 'இயற்கையின் ஈர்ப்பு', descriptionEn: 'The dark woods tempt the traveler to forget duties and surrender to serene rest.', descriptionTa: 'பனிப்பொழிவில் அமைதியாக உறங்கும் காடு கவிஞரைத் தன் அழகில் மூழ்கச் செய்து கடமைகளை மறக்கத் தூண்டுகிறது.', x: 26, y: 50 },
      { id: 'l2', labelEn: 'Horse’s Intuitive Warning', labelTa: 'குதிரையின் மணியோசை எச்சரிக்கை', descriptionEn: 'The little horse shakes harness bells, wondering why they have stopped where there is no farmhouse near.', descriptionTa: 'பண்ணை வீடு இல்லாத காட்டின் நடுவில் ஏன் நின்றோம் என நினைத்து குதிரை தன் கழுத்து மணியை உலுக்குகிறது.', x: 50, y: 50 },
      { id: 'l3', labelEn: 'Miles to Go Before I Sleep', labelTa: 'இறப்பிற்கு முன் கடமைகள் பல', descriptionEn: 'Sleep signifies death or resting; the traveler chooses life’s social commitments over seductive retreat.', descriptionTa: 'உறங்குவதற்கு முன் கடக்க வேண்டிய தூரம் பல உண்டு; கடமையே வாழ்வின் முதன்மை என்பதை உணர்த்தும் முடிவு.', x: 74, y: 50 }
    ]
  },

  // Unit 2 Prose: I Can't Climb Trees Anymore (Ruskin Bond)
  c9_eng_u2_p1: {
    id: 'diag_c9_eng_u2_p1',
    chapterId: 'c9_eng_u2_p1',
    titleEn: 'Memory Narrative Arc: The Jackfruit Tree & The Iron Cross',
    titleTa: 'நினைவுப்பாதை வரைபடம்: பலா மரமும் தாத்தாவின் இரும்பு சிலுவையும்',
    diagramType: 'timeline',
    svgContent: `<svg viewBox="0 0 700 280" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="240" rx="14" fill="#fafaf9" stroke="#78716c" stroke-width="2"/>
      
      <!-- Tree central icon -->
      <circle cx="350" cy="110" r="45" fill="#dcfce7" stroke="#16a34a" stroke-width="2.5"/>
      <text x="350" y="115" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Jackfruit Tree</text>
      
      <!-- Steps -->
      <rect x="40" y="60" width="160" height="90" rx="8" fill="#ffffff" stroke="#2563eb" stroke-width="1.5"/>
      <text x="120" y="85" text-anchor="middle" font-weight="bold" fill="#1d4ed8" font-size="12">1. The Return</text>
      <text x="120" y="110" text-anchor="middle" fill="#475569" font-size="10">Adult visitor returns</text>
      <text x="120" y="128" text-anchor="middle" fill="#475569" font-size="10">after 25 years</text>

      <rect x="500" y="60" width="160" height="90" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
      <text x="580" y="85" text-anchor="middle" font-weight="bold" fill="#be123c" font-size="12">2. The Encounter</text>
      <text x="580" y="110" text-anchor="middle" fill="#475569" font-size="10">Meets 12-year-old girl</text>
      <text x="580" y="128" text-anchor="middle" fill="#475569" font-size="10">Climbs wall easily</text>

      <rect x="180" y="180" width="340" height="65" rx="8" fill="#fef3c7" stroke="#b45309" stroke-width="1.5"/>
      <text x="350" y="205" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="12">3. The Iron Cross Rediscovered</text>
      <text x="350" y="225" text-anchor="middle" fill="#92400e" font-size="11">Gifted to the young girl: "I came not for the house, but for my lost youth."</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Old Family House & Wall', labelTa: 'பழைய வீட்டின் நினைவுகள்', descriptionEn: 'The middle-aged narrator looks at the turnstile gate and the stone wall he used to leap over.', descriptionTa: 'இருபத்தைந்து ஆண்டுகளுக்குப் பின் தன் தாத்தாவின் பழைய வீட்டைத் தேடி வரும் கதையாசிரியர்.', x: 15, y: 35 },
      { id: 'l2', labelEn: 'The Unchanging Jackfruit Tree', labelTa: 'மாறாத பலாமரம்', descriptionEn: 'The sturdy tree still bore heavy fruit; in its hollow fork rested his grandfather’s German Iron Cross.', descriptionTa: 'அவர் சிறுவயதில் விளையாடிய பலாமரம் இன்றும் அதே கம்பீரத்தோடு காய்த்துக் குலுங்குகிறது.', x: 50, y: 40 },
      { id: 'l3', labelEn: 'Gifting the Iron Cross', labelTa: 'இரும்புச் சிலுவையை பரிசளித்தல்', descriptionEn: 'He leaves the medal with the girl, realizing that youth lives on through the joy of children.', descriptionTa: 'தான் மீட்டெடுத்த இரும்புச் சிலுவையை அச்சிறுமியிடமே பரிசளித்து மன நிறைவோடு விடைபெறுகிறார்.', x: 50, y: 75 }
    ]
  },

  // Unit 2 Supplementary: The Fun They Had (Isaac Asimov)
  c9_eng_u2_s1: {
    id: 'diag_c9_eng_u2_s1',
    chapterId: 'c9_eng_u2_s1',
    titleEn: 'Futuristic Contrast: Mechanical Telebook School (2157) vs Real Human School',
    titleTa: 'எதிர்காலக் கல்வி ஒப்பீடு: இயந்திர ஆசிரியரும் (2157) பழங்கால மனிதப் பள்ளியும்',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="260" rx="14" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      
      <!-- 2157 Mechanical School Left -->
      <rect x="40" y="40" width="280" height="220" rx="12" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="180" y="70" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">Margie’s Schoolroom (Year 2157)</text>
      <text x="60" y="100" fill="#1e3a8a" font-size="11">• Located right next to her bedroom</text>
      <text x="60" y="122" fill="#1e3a8a" font-size="11">• Large black screen with mechanical teacher</text>
      <text x="60" y="144" fill="#1e3a8a" font-size="11">• Homework slot: punched in punch code</text>
      <text x="60" y="166" fill="#1e3a8a" font-size="11">• Marks calculated instantaneously</text>
      <text x="60" y="188" fill="#1e3a8a" font-size="11">• Lonely; customized to child’s IQ pace</text>
      <text x="180" y="235" text-anchor="middle" font-weight="bold" fill="#dc2626" font-size="11">Margie hated the geography tests</text>

      <!-- VS Circle -->
      <circle cx="350" cy="150" r="22" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
      <text x="350" y="156" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">VS</text>

      <!-- Old Centuries Ago School Right -->
      <rect x="380" y="40" width="280" height="220" rx="12" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="520" y="70" text-anchor="middle" font-weight="bold" fill="#15803d" font-size="13">Centuries Ago Real School</text>
      <text x="400" y="100" fill="#14532d" font-size="11">• Special building for all neighborhood kids</text>
      <text x="400" y="122" fill="#14532d" font-size="11">• Human teachers talking and listening</text>
      <text x="400" y="144" fill="#14532d" font-size="11">• Printed paper books with static yellow pages</text>
      <text x="400" y="166" fill="#14532d" font-size="11">• Learned same things together & helped out</text>
      <text x="400" y="188" fill="#14532d" font-size="11">• Laughing, shouting, and sharing recess</text>
      <text x="520" y="235" text-anchor="middle" font-weight="bold" fill="#047857" font-size="11">Margie thought: "The fun they had!"</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'The Mechanical Teacher', labelTa: 'இயந்திர ஆசிரியர்', descriptionEn: 'A robot adjusted by County Inspector with geared slots for instant computerized evaluation.', descriptionTa: 'படுக்கையறைக்கு அருகிலேயே இருக்கும் இயந்திரத் திரை மற்றும் தானியங்கி ஆசிரியர்.', x: 26, y: 50 },
      { id: 'l2', labelEn: 'Real Old Printed Book', labelTa: 'பழைய அச்சுப் புத்தகம்', descriptionEn: 'Tommy discovers a grandfather’s book with crinkly pages where words stood still instead of moving on screen.', descriptionTa: 'திரையில் ஓடாமல் தாளில் அச்சிடப்பட்டு நிலையாக நிற்கும் வார்த்தைகளைக் கொண்ட விசித்திரப் புத்தகம்.', x: 50, y: 50 },
      { id: 'l3', labelEn: 'The Joy of Human Classrooms', labelTa: 'கூடிப் பயிலும் பள்ளி மகிழ்ச்சி', descriptionEn: 'Children walked together, laughed, studied the same lessons, and had human teachers who understood empathy.', descriptionTa: 'அனைத்துக் குழந்தைகளும் ஒரே பள்ளிக்குச் சென்று மனித ஆசிரியர்களிடம் கூடிப் பயின்ற மகிழ்ச்சி.', x: 74, y: 50 }
    ]
  },

  // Unit 5 Prose: Water - The Elixir of Life (Sir C.V. Raman)
  c9_eng_u5_p1: {
    id: 'diag_c9_eng_u5_p1',
    chapterId: 'c9_eng_u5_p1',
    titleEn: 'Ecological Water Cycle & Soil Erosion Mitigation Flowchart',
    titleTa: 'நீரியல் சுழற்சி மற்றும் மண் அரிப்பு தடுப்பு வரைபடம்',
    diagramType: 'flowchart',
    svgContent: `<svg viewBox="0 0 700 290" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="250" rx="14" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      
      <!-- Top Title Box -->
      <rect x="200" y="35" width="300" height="40" rx="8" fill="#0284c7"/>
      <text x="350" y="60" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">Sir C.V. Raman: "Water - The True Elixir"</text>

      <!-- Soil Erosion Cause -->
      <rect x="50" y="100" width="180" height="130" rx="10" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
      <text x="140" y="125" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="12">Causes of Soil Erosion</text>
      <text x="65" y="150" fill="#b91c1c" font-size="10">• Sudden heavy torrential downpour</text>
      <text x="65" y="170" fill="#b91c1c" font-size="10">• Slope of the terrain & ruts</text>
      <text x="65" y="190" fill="#b91c1c" font-size="10">• Removal of protective vegetation</text>
      <text x="65" y="210" fill="#b91c1c" font-size="10">• Ravines carving deep gullies</text>

      <!-- Center Solution -->
      <rect x="260" y="100" width="180" height="130" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
      <text x="350" y="125" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">Conservation Strategies</text>
      <text x="275" y="150" fill="#047857" font-size="10">• Terracing of land (படி வரிசை)</text>
      <text x="275" y="170" fill="#047857" font-size="10">• Construction of contour bunds</text>
      <text x="275" y="190" fill="#047857" font-size="10">• Afforestation & systematic planting</text>
      <text x="275" y="210" fill="#047857" font-size="10">• Checking flow velocity of run-off</text>

      <!-- Right Impact -->
      <rect x="470" y="100" width="180" height="130" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
      <text x="560" y="125" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">National Wealth</text>
      <text x="485" y="150" fill="#1d4ed8" font-size="10">• Sub-soil water table rejuvenation</text>
      <text x="485" y="170" fill="#1d4ed8" font-size="10">• Cheap hydroelectric power</text>
      <text x="485" y="190" fill="#1d4ed8" font-size="10">• Internal water transportation</text>
      <text x="485" y="210" fill="#1d4ed8" font-size="10">• Reclaiming barren wastelands</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Libyan Desert vs Nile Valley', labelTa: 'எகிப்தின் நைல் நதி அற்புதம்', descriptionEn: 'Raman observed the stark contrast: sterile sand on one side, verdant fertility on the other, solely due to the Nile.', descriptionTa: 'ஒருபுறம் வறண்ட பாலைவனம், மறுபுறம் பசுமையான நைல் நதிப் பள்ளத்தாக்கு — நீரின் மகத்துவத்தை ராமன் விளக்குகிறார்.', x: 18, y: 55 },
      { id: 'l2', labelEn: 'Soil Erosion Menace', labelTa: 'மண் அரிப்பு அபாயம்', descriptionEn: 'Unchecked rainwater run-off sweeps precious topsoil into oceans, turning fertile fields into eroded gullies.', descriptionTa: 'மழைநீர் பெருக்கெடுத்து வளமான மேல்மண்ணை அடித்துச் செல்வது விவசாயத்திற்குப் பெரும் பேரழிவை ஏற்படுத்தும்.', x: 50, y: 55 },
      { id: 'l3', labelEn: 'Afforestation & Water Harvesting', labelTa: 'காடு வளர்ப்பும் மழைநீர் சேகரிப்பும்', descriptionEn: 'Terracing land and planting trees check the flow of water, sustaining India’s agricultural lifeblood.', descriptionTa: 'படி வரிசை விவசாயமும் மரம் நடுதலும் நிலத்தடி நீரை உயர்த்தி நாட்டை வளமாக்கும் என ராமன் வழிகாட்டுகிறார்.', x: 82, y: 55 }
    ]
  }
};

export const CLASS_9_ENGLISH_VIDEOS: Record<string, VideoExplainer> = {
  // Unit 1 Prose: Learning the Game
  c9_eng_u1_p1: {
    id: 'vid_c9_eng_u1_p1',
    chapterId: 'c9_eng_u1_p1',
    titleEn: 'Animated Story: Sachin’s Cricket Journey at Shivaji Park',
    titleTa: 'காணொளி விளக்கம்: சச்சின் டெண்டுல்கரின் சிவாஜி பார்க் கிரிக்கெட் பயணம்',
    durationSeconds: 210,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Meeting Coach Ramakant Achrekar (1984)',
        titleTa: 'அச்ரேகர் சாருடன் முதல் சந்திப்பு',
        visualDescription: 'Eleven-year-old Sachin batting nervously in new pads while brother Ajit watches. Coach Achrekar observes keenly from behind the net.',
        narrationEn: 'In 1984, eleven-year-old Sachin was introduced to coach Ramakant Achrekar at Shivaji Park. When Sachin batted freely without being watched directly, Sir immediately spotted his extraordinary gift.',
        narrationTa: '1984-ஆம் ஆண்டு பதினொரு வயதான சச்சினை அவரது அண்ணன் அஜித், புகழ்பெற்ற பயிற்சியாளர் அச்ரேகரிடம் அழைத்துச் சென்றார். சச்சினின் இயல்பான பேட்டிங் திறமை ஆசானைக் கவர்ந்தது.',
        conceptKey: 'Discovered Talent (இயற்கைத் திறமை)'
      },
      {
        sceneNumber: 2,
        titleEn: 'The One-Rupee Coin on the Stumps',
        titleTa: 'ஸ்டம்பின் மீது ஒரு ரூபாய் நாணயம்',
        visualDescription: 'Sun setting over Shivaji Park. 66 fielders surrounding young Sachin in the fading light while a shiny silver 1-rupee coin balances on the center stump.',
        narrationEn: 'During the final exhausting hour, Coach Achrekar placed a one-rupee coin atop the middle stump. If Sachin batted without getting out, he took the coin home! Sachin won 13 precious coins.',
        narrationTa: 'பயிற்சியின் கடைசி நேரத்தில் ஸ்டம்பின் மீது ஒரு ரூபாய் நாணயத்தை வைப்பார் அச்ரேகர் சார். ஆட்டமிழக்காமல் தற்காத்து ஆடினால் அந்த நாணயம் சச்சினுக்குச் சொந்தம்! சச்சின் 13 நாணயங்களை வென்றார்.',
        conceptKey: 'The Coin Challenge (நாணயப் போட்டி)'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Priceless Life Lesson on Focus',
        titleTa: 'வாழ்நாள் மறக்காத கண்டிப்பும் பாடமும்',
        visualDescription: 'Coach Achrekar confronting Sachin on his scooter, pointing sternly: "Do not play for applause; play so that the world applauds you."',
        narrationEn: 'When Sachin missed practice to cheer for schoolmates, Achrekar Sir gave him unforgettable advice: Never waste practice for transient applause; practice relentlessly so the world claps for you.',
        narrationTa: 'பயிற்சியைத் தவிர்த்துவிட்டு வேடிக்கை பார்க்கச் சென்ற சச்சினைக் கண்டித்த அச்ரேகர் சார், "உலகமே உன்னைப் பாராட்டும் அளவிற்குத் திறமையை வளர்த்துக் கொள்" என்று வாழ்நாள் பாடத்தைக் கற்பித்தார்.',
        conceptKey: 'Master’s Lesson (ஆசானின் அறிவுரை)'
      }
    ]
  },

  // Unit 1 Poem: Stopping by Woods on a Snowy Evening
  c9_eng_u1_p2: {
    id: 'vid_c9_eng_u1_p2',
    chapterId: 'c9_eng_u1_p2',
    titleEn: 'Visual Poetry: Stopping by Woods on a Snowy Evening - Robert Frost',
    titleTa: 'காட்சிக் கவிதை: பனிப்பொழிவு மாலையில் காட்டின் ஓரம் – ராபர்ட் ஃப்ராஸ்ட்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Darkest Evening of the Year',
        titleTa: 'ஆண்டின் இருள் சூழ்ந்த மாலைப் பொழுது',
        visualDescription: 'Silently falling white snowflakes across towering dark pine trees. A traveler in a horse-drawn carriage pauses beside a frozen lake.',
        narrationEn: 'On the darkest evening of the year, a traveler stops his horse between the frozen lake and the quiet woods to watch the snowfall gently blanket the earth.',
        narrationTa: 'ஆண்டின் மிக நீண்ட குளிர்கால மாலையில், உறைந்த ஏரிக்கும் அடர்ந்த காட்டுக்கும் நடுவே தன் குதிரை வண்டியை நிறுத்தி, பனிப்பொழிவின் அழகை ரசிக்கிறார் ஒரு பயணி.',
        conceptKey: 'Snowy Solitude (பனிப்பொழிவு அழகு)'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Harness Bells',
        titleTa: 'குதிரைக் கழுத்து மணி ஒலித்தல்',
        visualDescription: 'Close-up of the little brown horse shaking its head in confusion, small brass bells chiming cleanly in the frosty wind.',
        narrationEn: 'The little horse shakes his harness bells to ask if there is some mistake in stopping where no farmhouse is near. The only other sound is the sweep of easy wind.',
        narrationTa: 'பண்ணை வீடு இல்லாத இந்த வனப்பகுதியில் ஏன் நின்றோம் எனப் புரியாமல், குதிரை தன் கழுத்து மணியை அசைத்து எச்சரிக்கை செய்கிறது.',
        conceptKey: 'Intuitive Check (குதிரையின் எச்சரிக்கை)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Promises to Keep & Miles to Go',
        titleTa: 'கடமைகளும் தூரத்து இலக்குகளும்',
        visualDescription: 'The traveler looks longingly at the beautiful woods, smiles with resolve, and resumes his journey along the snow-covered winding road.',
        narrationEn: 'The woods are lovely, dark and deep. But I have promises to keep, and miles to go before I sleep, and miles to go before I sleep.',
        narrationTa: '"காடு அழகாக, இருண்டு, ஆழமாக இருக்கிறது. ஆனால் நான் நிறைவேற்ற வேண்டிய வாக்குறுதிகள் பல உள்ளன; நான் உறங்குவதற்கு முன் வெகுதூரம் பயணிக்க வேண்டும்!"',
        conceptKey: 'Unwavering Duty (கடமை தவறா நெறி)'
      }
    ]
  },

  // Unit 2 Prose: I Can't Climb Trees Anymore
  c9_eng_u2_p1: {
    id: 'vid_c9_eng_u2_p1',
    chapterId: 'c9_eng_u2_p1',
    titleEn: 'Animated Story: I Can’t Climb Trees Anymore - Ruskin Bond',
    titleTa: 'காணொளி விளக்கம்: என்னால் இனி மரங்களில் ஏற முடியாது – ரஸ்கின் பாண்ட்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Return to the Ancestral Home',
        titleTa: 'இருபத்தைந்து ஆண்டுகளுக்குப் பின் வருகை',
        visualDescription: 'A middle-aged man stands outside a stone wall garden, gazing at the jackfruit tree where he spent childhood summers.',
        narrationEn: 'After 25 years, the narrator returns to his grandmother’s house. Everything had matured, yet the sturdy jackfruit tree remained identical to his childhood memories.',
        narrationTa: 'இருபத்தைந்து ஆண்டுகளுக்குப் பிறகு தன் பாட்டியின் வீட்டைப் பார்க்க வருகிறார் கதையாசிரியர். ஆண்டுகள் கடந்தாலும் பலாமரம் அதே கம்பீரத்தோடு நிற்கிறது.',
        conceptKey: 'Nostalgic Return (கடந்த கால நினைவுகள்)'
      },
      {
        sceneNumber: 2,
        titleEn: 'Conversation with the Young Girl',
        titleTa: 'தோட்டத்தில் சிறுமியுடன் உரையாடல்',
        visualDescription: 'A lively 12-year-old girl perched on the wall invites him into the garden, offering to climb the tree to fetch what he had hidden.',
        narrationEn: 'A cheerful girl whose father now owned the house invites him in. Seeing that he can no longer climb trees, she climbs up into the hollow fork herself.',
        narrationTa: 'தற்போது அங்கு குடியிருக்கும் கர்னலின் மகள் அவரிடம் பேசி, பலாமரத்தில் ஏறி அவர் சிறுவயதில் மறைத்து வைத்த இரும்புச் சிலுவையை எடுத்துத் தருகிறாள்.',
        conceptKey: 'Lost Youth (இளமையின் உற்சாகம்)'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Spirit of Youth Rekindled',
        titleTa: 'இளமை மனதில்தான் வாழ்கிறது',
        visualDescription: 'The man walks away along the road with brisk steps and a light heart, leaving the medal with the smiling girl.',
        narrationEn: 'He gifts the Iron Cross to the little girl and walks away with lighter steps. He realizes he had not come to claim the house, but to touch the joyful spirit of his youth once more.',
        narrationTa: 'அச்சிலுவையை அச்சிறுமியிடமே பரிசளித்துவிட்டு மனநிறைவோடு நடக்கிறார். தாம் வந்தது வீட்டிற்காக அல்ல; தம்முடைய இளமையின் நினைவுகளை மீட்டெடுக்கவே என்பதை உணர்கிறார்.',
        conceptKey: 'Spirit of Youth (மகிழ்ச்சியான முடிவு)'
      }
    ]
  },

  // Unit 5 Prose: Water - The Elixir of Life
  c9_eng_u5_p1: {
    id: 'vid_c9_eng_u5_p1',
    chapterId: 'c9_eng_u5_p1',
    titleEn: 'Science Explainer: Water - The Elixir of Life by Sir C.V. Raman',
    titleTa: 'அறிவியல் காணொளி: நீர் – அமுதசுரபி: சர் சி.வி. ராமன்',
    durationSeconds: 215,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The True Divine Nectar',
        titleTa: 'உண்மையான தெய்வீக அமிர்தம்',
        visualDescription: 'Sunlight glistening through crystal clear water droplets over flowing streams and verdant farming landscapes.',
        narrationEn: 'Nobel laureate Sir C.V. Raman declares that while humanity searched in vain for mythical amrita, the commonest liquid on earth—plain water—is the true elixir of life.',
        narrationTa: 'புராணங்களில் கூறப்படும் அமிர்தத்தை மனிதன் தேடி அலைந்தான்; ஆனால் பூமியில் உள்ள சாதாரண நன்னீரே வாழ்வின் மெய்யான அமிர்தம் என சர் சி.வி. ராமன் கூறுகிறார்.',
        conceptKey: 'True Elixir (மெய்யான அமிர்தம்)'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Menace of Soil Erosion',
        titleTa: 'மண் அரிப்பின் பேரழிவு',
        visualDescription: 'Muddy brown storm run-off tearing deep ruts into agricultural fields, stripping the valuable fertile topsoil into the sea.',
        narrationEn: 'Sudden rain storms without vegetative cover cause soil erosion. Ruts form into ravines, sweeping away the fertile topsoil that takes centuries to form.',
        narrationTa: 'மரம், செடிகள் இல்லாத நிலங்களில் பெருக்கெடுத்து ஓடும் மழைநீர், உழவுக்குத் தேவையான வளமான மேல்மண்ணை அடித்துச் சென்று நிலத்தைப் பாழாக்குகிறது.',
        conceptKey: 'Soil Erosion (மண் அரிப்பு)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Afforestation & Water Harvesting Solutions',
        titleTa: 'காடு வளர்ப்பும் நதிநீர் பாதுகாப்பும்',
        visualDescription: 'Farmers creating contour bunds, terracing hillsides, and planting thick green tree barriers that absorb monsoon rain into the aquifer.',
        narrationEn: 'Terracing land, constructing check bunds, and mass afforestation check the rush of water, raising groundwater tables and powering India’s future.',
        narrationTa: 'படி வரிசை அமைத்தல், தடுப்பணைகள் கட்டுதல் மற்றும் மரம் நடுதல் மூலம் நீரையும் மண்ணையும் பாதுகாத்து வளமான இந்தியாவை உருவாக்க முடியும்.',
        conceptKey: 'Water Security (நீர் பாதுகாப்பு)'
      }
    ]
  }
};

/**
 * Intelligent generator for any English chapter diagram
 */
export function generateEnglishDiagram(chapter: Chapter, isTa: boolean): SchematicDiagram {
  if (CLASS_9_ENGLISH_DIAGRAMS[chapter.id]) {
    return CLASS_9_ENGLISH_DIAGRAMS[chapter.id];
  }

  return {
    id: `diag_${chapter.id}`,
    chapterId: chapter.id,
    titleEn: `${chapter.titleEn}: Literature Framework & Concept Map`,
    titleTa: `${chapter.titleTa}: இலக்கியக் கட்டமைப்பு மற்றும் கருத்தாக்க வரைபடம்`,
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 290" class="w-full h-full max-h-72">
      <rect x="30" y="25" width="640" height="240" rx="14" fill="#f8fafc" stroke="#2563eb" stroke-width="2"/>
      <rect x="230" y="45" width="240" height="45" rx="10" fill="#1e40af"/>
      <text x="350" y="73" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="12">${chapter.titleEn.slice(0, 32)}</text>
      
      <line x1="350" y1="90" x2="150" y2="140" stroke="#3b82f6" stroke-width="2"/>
      <line x1="350" y1="90" x2="350" y2="140" stroke="#3b82f6" stroke-width="2"/>
      <line x1="350" y1="90" x2="550" y2="140" stroke="#3b82f6" stroke-width="2"/>

      <rect x="60" y="140" width="180" height="95" rx="8" fill="#eff6ff" stroke="#3b82f6"/>
      <text x="150" y="168" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">1. Theme & Narrative</text>
      <text x="150" y="192" text-anchor="middle" fill="#2563eb" font-size="10">Core message of the author</text>
      <text x="150" y="210" text-anchor="middle" fill="#2563eb" font-size="10">Characters & moral values</text>

      <rect x="260" y="140" width="180" height="95" rx="8" fill="#fdf4ff" stroke="#a855f7"/>
      <text x="350" y="168" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="12">2. Literary Devices</text>
      <text x="350" y="192" text-anchor="middle" fill="#7e22ce" font-size="10">Rhyme scheme / Metaphor</text>
      <text x="350" y="210" text-anchor="middle" fill="#7e22ce" font-size="10">Imagery & vocabulary</text>

      <rect x="460" y="140" width="180" height="95" rx="8" fill="#ecfdf5" stroke="#10b981"/>
      <text x="550" y="168" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">3. Exam Preparation</text>
      <text x="550" y="192" text-anchor="middle" fill="#059669" font-size="10">Short & paragraph questions</text>
      <text x="550" y="210" text-anchor="middle" fill="#059669" font-size="10">Reference to context</text>
    </svg>`,
    labels: [
      {
        id: 'l1',
        labelEn: 'Narrative & Moral Arc',
        labelTa: 'கதைக்களமும் கருத்தும்',
        descriptionEn: `Central literary thesis of "${chapter.titleEn}" aligned with Samacheer Kalvi.`,
        descriptionTa: `"${chapter.titleTa}" பாடத்தின் மையக்கருத்து மற்றும் நன்னெறி வழிகாட்டல்.`,
        x: 21,
        y: 65
      },
      {
        id: 'l2',
        labelEn: 'Poetic & Figurative Devices',
        labelTa: 'அணிகள் மற்றும் இலக்கண நயம்',
        descriptionEn: 'Poetic devices (simile, metaphor, personification, rhyme scheme) or prose vocabulary.',
        descriptionTa: 'கவிதையின் உருவகம், உவமை மற்றும் புதிய ஆங்கிலச் சொற்களின் நயவுரை.',
        x: 50,
        y: 65
      },
      {
        id: 'l3',
        labelEn: 'Exam Board Score Blueprint',
        labelTa: 'அரசுத் தேர்வு வினா வழிகாட்டி',
        descriptionEn: 'Essential keywords, 2-mark questions, and paragraph answers required for top grades.',
        descriptionTa: 'அரசுப் பொதுத்தேர்வில் கேட்கப்படும் 2-மதிப்பெண் மற்றும் பத்தி வினாக்களுக்கான வழிகாட்டி.',
        x: 79,
        y: 65
      }
    ]
  };
}

/**
 * Intelligent generator for any English chapter video
 */
export function generateEnglishVideo(chapter: Chapter, isTa: boolean): VideoExplainer {
  if (CLASS_9_ENGLISH_VIDEOS[chapter.id]) {
    return CLASS_9_ENGLISH_VIDEOS[chapter.id];
  }

  return {
    id: `vid_${chapter.id}`,
    chapterId: chapter.id,
    titleEn: `Animated Explainer: ${chapter.titleEn}`,
    titleTa: `காணொளி விளக்கம்: ${chapter.titleTa}`,
    durationSeconds: 180,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Introduction & Background',
        titleTa: 'பாட அறிமுகம்',
        visualDescription: `Cinematic book opening showcasing the title and setting of ${chapter.titleEn}.`,
        narrationEn: `Welcome to this animated study of "${chapter.titleEn}". Let us delve into the central storyline and appreciate the author’s message.`,
        narrationTa: `வணக்கம்! "${chapter.titleTa}" பாடத்தின் காணொளி விளக்கத்திற்கு உங்களை வரவேற்கிறோம். இப்பாடத்தின் மையக்கருத்தையும் ஆசிரியரின் நோக்கத்தையும் நாம் காண்போம்.`,
        conceptKey: 'Setting & Theme (பாட அறிமுகம்)'
      },
      {
        sceneNumber: 2,
        titleEn: 'Character & Plot Highlights',
        titleTa: 'கதைமாந்தர்களும் முக்கிய நிகழ்வுகளும்',
        visualDescription: `Animated visual sequences representing the plot twists and character dilemmas in ${chapter.titleEn}.`,
        narrationEn: `Observe how the characters evolve: their conflicts, courage, and decisions highlight timeless human virtues.`,
        narrationTa: 'கதை மாந்தர்களின் பண்புகளையும், அவர்கள் எதிர்கொள்ளும் சவால்களையும் நோக்குங்கள். இது நமக்கு சிறந்த வாழ்வியல் அனுபவங்களை வழங்குகிறது.',
        conceptKey: 'Plot Climax (கதைக்களம்)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Exam Score Booster Points',
        titleTa: 'தேர்வுக்கான முக்கியக் குறிப்புகள்',
        visualDescription: 'Interactive flashcards with highlighted keywords and model question phrases.',
        narrationEn: `For exam success, quote the key phrases, understand the reference to context lines, and write structured answers with headings.`,
        narrationTa: 'தேர்வில் அதிக மதிப்பெண் பெற, ஆசிரியர் பெயர், மையக்கருத்து மற்றும் முக்கிய வினா-விடைகளைத் தெளிவாக எழுதப் பழகுங்கள்.',
        conceptKey: 'Exam Booster (தேர்வு வழிகாட்டி)'
      }
    ]
  };
}
