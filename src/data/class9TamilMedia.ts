import { SchematicDiagram, VideoExplainer, Chapter } from '../types';

/**
 * Authentic Samacheer Kalvi Class 9 Tamil - Schematic Diagrams & Animated Video Explainers
 * Covers all 9 Iyals / 48 Units (உரைநடை, கவிதை, துணைப்பாடம், கற்கண்டு, வாழ்வியல்).
 */

export const CLASS_9_TAMIL_DIAGRAMS: Record<string, SchematicDiagram> = {
  // இயல் 1: திராவிட மொழிக்குடும்பம்
  c9_tam_i1_ch1: {
    id: 'diag_c9_tam_i1_ch1',
    chapterId: 'c9_tam_i1_ch1',
    titleEn: 'Dravidian Languages Family Tree & Geographic Distribution',
    titleTa: 'திராவிட மொழிக்குடும்பக் கிளைகளும் நிலவியல் வரைபடமும்',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <defs>
        <linearGradient id="tamGrad1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#1e3a8a" />
          <stop offset="100%" stop-color="#3b82f6" />
        </linearGradient>
      </defs>
      <rect x="230" y="20" width="240" height="50" rx="12" fill="url(#tamGrad1)" stroke="#1d4ed8" stroke-width="2"/>
      <text x="350" y="50" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="15">மூலத் திராவிட மொழி (Proto-Dravidian)</text>
      
      <path d="M 350 70 L 140 130" stroke="#3b82f6" stroke-width="2.5" stroke-dasharray="4"/>
      <path d="M 350 70 L 350 130" stroke="#10b981" stroke-width="2.5"/>
      <path d="M 350 70 L 560 130" stroke="#f59e0b" stroke-width="2.5" stroke-dasharray="4"/>

      <!-- தென் திராவிடம் -->
      <rect x="30" y="130" width="220" height="150" rx="10" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      <text x="140" y="155" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">தென் திராவிட மொழிகள் (9)</text>
      <text x="50" y="180" fill="#1e3a8a" font-size="11">• தமிழ், மலையாளம், கன்னடம்</text>
      <text x="50" y="202" fill="#1e3a8a" font-size="11">• குடகு (கொடகு), துளு, தோடா</text>
      <text x="50" y="224" fill="#1e3a8a" font-size="11">• கோத்தா, கொரகா, இருளா</text>
      <text x="50" y="250" fill="#0284c7" font-weight="bold" font-size="10">ராபர்ட் கால்டுவெல் ஒப்பிலக்கணம் (1856)</text>

      <!-- நடுத் திராவிடம் -->
      <rect x="260" y="130" width="180" height="150" rx="10" fill="#ecfdf5" stroke="#10b981" stroke-width="2"/>
      <text x="350" y="155" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="13">நடுத் திராவிடம் (12)</text>
      <text x="275" y="180" fill="#064e3b" font-size="11">• தெலுங்கு, கூயி, கூவி</text>
      <text x="275" y="202" fill="#064e3b" font-size="11">• கோண்டி, கோலமி, நாய்கி</text>
      <text x="275" y="224" fill="#064e3b" font-size="11">• பெங்கோ, மண்டா, பர்ஜி</text>
      <text x="275" y="246" fill="#064e3b" font-size="11">• கதபா, கோண்டா, நாய்க்கி</text>

      <!-- வட திராவிடம் -->
      <rect x="455" y="130" width="215" height="150" rx="10" fill="#fffbeb" stroke="#f59e0b" stroke-width="2"/>
      <text x="562" y="155" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="13">வட திராவிடம் (3)</text>
      <text x="475" y="185" fill="#78350f" font-size="12">• பிராகுயி (Brahui - பாகிஸ்தான்)</text>
      <text x="475" y="212" fill="#78350f" font-size="12">• குரூக் (Kurukh - ஒடிசா)</text>
      <text x="475" y="239" fill="#78350f" font-size="12">• மால்தோ (Malto - ராஜ்மகால்)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'South Dravidian Group', labelTa: 'தென் திராவிட மொழிகள்', descriptionEn: 'Includes Tamil, Malayalam, Kannada, Tulu, Kodagu, Toda, Kota, Koraga, Irula. Highest classical antiquity.', descriptionTa: 'தமிழ், மலையாளம், கன்னடம், துளு உள்ளிட்ட 9 மொழிகள். தொன்மையான இலக்கிய வளம் கொண்டவை.', x: 20, y: 55 },
      { id: 'l2', labelEn: 'Central Dravidian Group', labelTa: 'நடுத் திராவிட மொழிகள்', descriptionEn: 'Includes Telugu, Gondi, Kolami, Kui, Kuvi, Pengo, Manda, Parji, Gadaba and Konda (12 languages).', descriptionTa: 'தெலுங்கு, கோண்டி, கூயி, கூவி உள்ளிட்ட 12 மொழிகள் மத்திய இந்தியாவில் பேசப்படுகின்றன.', x: 50, y: 55 },
      { id: 'l3', labelEn: 'North Dravidian & Brahui', labelTa: 'வட திராவிடம் & பிராகுயி', descriptionEn: 'Brahui spoken in Balochistan (Pakistan), Kurukh and Malto in eastern and central India.', descriptionTa: 'பாகிஸ்தானின் பலுசிஸ்தானில் பேசப்படும் பிராகுயி மற்றும் குரூக், மால்தோ மொழிகள்.', x: 80, y: 55 }
    ]
  },

  // இயல் 1: தமிழோவியம்
  c9_tam_i1_ch2: {
    id: 'diag_c9_tam_i1_ch2',
    chapterId: 'c9_tam_i1_ch2',
    titleEn: 'Modern Tamil Poetic Forms & Literary Evolution Flowchart',
    titleTa: 'புதுக்கவிதை வடிவங்களும் ஈரோடு தமிழன்பன் படைப்பு வரைபடமும்',
    diagramType: 'flowchart',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <rect x="40" y="30" width="180" height="90" rx="10" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      <text x="130" y="60" text-anchor="middle" font-weight="bold" fill="#166534" font-size="13">மரபுக் கவிதை</text>
      <text x="130" y="85" text-anchor="middle" fill="#15803d" font-size="11">யாப்பிலக்கணக் கட்டுப்பாடு</text>
      <text x="130" y="105" text-anchor="middle" fill="#15803d" font-size="10">வெண்பா, ஆசிரியப்பா, கலிப்பா</text>

      <path d="M 220 75 L 260 75" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

      <rect x="260" y="30" width="180" height="90" rx="10" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
      <text x="350" y="60" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="13">புதுக்கவிதை இயக்கம்</text>
      <text x="350" y="85" text-anchor="middle" fill="#1d4ed8" font-size="11">பாரதியார் வசன கவிதை</text>
      <text x="350" y="105" text-anchor="middle" fill="#1d4ed8" font-size="10">எழுத்து & மணிக்கொடி காலம்</text>

      <path d="M 440 75 L 480 75" stroke="#475569" stroke-width="2"/>

      <rect x="480" y="30" width="180" height="90" rx="10" fill="#faf5ff" stroke="#9333ea" stroke-width="2"/>
      <text x="570" y="60" text-anchor="middle" font-weight="bold" fill="#6b21a8" font-size="13">நவீன வடிவங்கள்</text>
      <text x="570" y="82" text-anchor="middle" fill="#7e22ce" font-size="11">• ஹைக்கூ (3 வரிகள்)</text>
      <text x="570" y="100" text-anchor="middle" fill="#7e22ce" font-size="11">• சென்ரியூ & லிமரைக்கூ</text>

      <rect x="150" y="160" width="400" height="110" rx="12" fill="#fff7ed" stroke="#ea580c" stroke-width="2"/>
      <text x="350" y="190" text-anchor="middle" font-weight="bold" fill="#9a3412" font-size="14">ஈரோடு தமிழன்பன் - "வணக்கம் வள்ளுவ"</text>
      <text x="350" y="215" text-anchor="middle" fill="#c2410c" font-size="12">2004 சாகித்திய அகாதெமி விருது பெற்ற கவிதை நூல்</text>
      <text x="350" y="240" text-anchor="middle" fill="#7c2d12" font-size="11">"காலம் பிறக்கும் முன் பிறந்தது தமிழே! எந்தக் காலமும் நிலையாய் இருப்பது தமிழே!"</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Classical Heritage (மரபு)', labelTa: 'மரபுக் கவிதை நெறி', descriptionEn: 'Strict grammatical metre conforming to Yappu rules.', descriptionTa: 'தொல்காப்பியர் காலந்தொட்டு யாப்பிலக்கண விதிகளுக்கு உட்பட்டு இயற்றப்பட்ட மரபுக் கவிதைகள்.', x: 18, y: 30 },
      { id: 'l2', labelEn: 'Modern Haiku & Senryu', labelTa: 'ஹைக்கூ & சென்ரியூ', descriptionEn: '3-line Japanese aesthetic adopted into Tamil poetics by Erode Tamilanban.', descriptionTa: 'மூன்று வரிகளில் ஆழமான தத்துவத்தை உணர்த்தும் ஜப்பானிய ஹைக்கூ வடிவத் தமிழ் கவிதைகள்.', x: 81, y: 30 },
      { id: 'l3', labelEn: 'Sahitya Akademi 2004', labelTa: 'சாகித்திய அகாதெமி விருது', descriptionEn: 'Awarded to Erode Tamilanban for "Vanakkam Valluva" in 2004.', descriptionTa: '2004-இல் "வணக்கம் வள்ளுவ" கவிதைத் தொகுப்பிற்காகப் பெறப்பட்ட தேசிய விருது.', x: 50, y: 72 }
    ]
  },

  // இயல் 2: நீரின்றி அமையாது உலகு
  c9_tam_i2_ch6: {
    id: 'diag_c9_tam_i2_ch6',
    chapterId: 'c9_tam_i2_ch6',
    titleEn: 'Ancient Tamil Water Conservation & Kallanai Dam Engineering',
    titleTa: 'பழந்தமிழர் நீர் மேலாண்மையும் கரிகாலன் கல்லணைக் கட்டமைப்பும்',
    diagramType: 'svg_labeled',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <!-- Water body background -->
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#f0f9ff" stroke="#0284c7" stroke-width="2"/>
      
      <!-- River flow -->
      <path d="M 30 140 Q 200 110 350 140 T 670 140 L 670 290 L 30 290 Z" fill="#bae6fd" opacity="0.6"/>
      <text x="100" y="190" fill="#0369a1" font-weight="bold" font-size="14">காவிரி ஆறு (River Cauvery)</text>
      
      <!-- Kallanai Structure -->
      <polygon points="320,60 380,60 410,270 290,270" fill="#64748b" stroke="#334155" stroke-width="3"/>
      <text x="350" y="160" text-anchor="middle" fill="#ffffff" font-weight="bold" font-size="13" transform="rotate(-90 350 160)">கல்லணை (Kallanai Dam)</text>
      
      <!-- Water bodies callouts -->
      <rect x="40" y="40" width="180" height="65" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="130" y="62" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="12">குடபுலவியனார் கூற்று</text>
      <text x="130" y="82" text-anchor="middle" fill="#0284c7" font-size="10">"நீரும் நிலமும் புணரியோர் ஈண்டு</text>
      <text x="130" y="97" text-anchor="middle" fill="#0284c7" font-size="10">உடம்பும் உயிரும் படைத்திசி னோரே"</text>

      <!-- Right callout: Sir Arthur Cotton -->
      <rect x="470" y="40" width="190" height="80" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
      <text x="565" y="62" text-anchor="middle" font-weight="bold" fill="#0369a1" font-size="12">சர் ஆர்தர் காட்டன் ஆய்வு</text>
      <text x="565" y="80" text-anchor="middle" fill="#475569" font-size="10">• "கிராண்ட் அணைக்கட்" (The Grand Anicut)</text>
      <text x="565" y="96" text-anchor="middle" fill="#475569" font-size="10">• மணல் அடித்தளத்தில் பாறைகள் வைக்கும்</text>
      <text x="565" y="112" text-anchor="middle" fill="#0284c7" font-weight="bold" font-size="10">பழந்தமிழர் ஒட்டும் களிமண் நுட்பம்</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Kallanai (Grand Anicut)', labelTa: 'கல்லணை கட்டமைப்பு', descriptionEn: 'Built by Chola King Karikalan in 2nd century BCE, diverting Cauvery floods into Kollidam and fertile delta channels.', descriptionTa: 'கரிகால் சோழனால் இரண்டாம் நூற்றாண்டில் மணல்மேல் பாறைகளை அடுக்கி கட்டப்பட்ட உலகப் புகழ்பெற்ற அணை.', x: 50, y: 50 },
      { id: 'l2', labelEn: 'Ancient Ecological Wisdom', labelTa: 'புறநானூற்று நீரியல் ஞானம்', descriptionEn: 'Kudapulaviyanar advises King Pandian Nedunchezhiyan that whoever combines land and water creates life.', descriptionTa: 'குடபுலவியனார் மன்னனுக்கு "நீரும் நிலமும் புணர்த்தவரே உயிர் தந்தவர்" என அறிவுறுத்திய சங்க இலக்கிய நெறி.', x: 18, y: 22 },
      { id: 'l3', labelEn: 'Sir Arthur Cotton Study', labelTa: 'சர் ஆர்தர் காட்டன் பாராட்டு', descriptionEn: 'British irrigation engineer named it "Grand Anicut" and adopted its foundation principles for the Godavari dam.', descriptionTa: 'ஆங்கிலேயப் பொறியாளர் சர் ஆர்தர் காட்டன் கல்லணையை "கிராண்ட் அணைக்கட்" எனப் போற்றிப் புகழ்ந்தார்.', x: 81, y: 22 }
    ]
  },

  // இயல் 3: ஏறு தழுவுதல் (ஜல்லிக்கட்டு)
  c9_tam_i3_ch12: {
    id: 'diag_c9_tam_i3_ch12',
    chapterId: 'c9_tam_i3_ch12',
    titleEn: 'Eru Thazhuvuthal (Jallikattu) Cultural Archeology & Literature Timeline',
    titleTa: 'ஏறு தழுவுதல்: தொல்லியல் சான்றுகளும் சங்க இலக்கியக் காலவரிசையும்',
    diagramType: 'timeline',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <line x1="50" y1="150" x2="650" y2="150" stroke="#b45309" stroke-width="4"/>
      
      <!-- Node 1: Indus Valley -->
      <circle cx="100" cy="150" r="14" fill="#d97706" stroke="#78350f" stroke-width="3"/>
      <rect x="20" y="50" width="160" height="75" rx="8" fill="#fef3c7" stroke="#d97706"/>
      <text x="100" y="72" text-anchor="middle" font-weight="bold" fill="#78350f" font-size="12">சிந்துவெளி முத்திரை</text>
      <text x="100" y="92" text-anchor="middle" fill="#92400e" font-size="10">திமிலுடன் கூடிய காளையை</text>
      <text x="100" y="108" text-anchor="middle" fill="#92400e" font-size="10">அடக்கும் மனித உருவம்</text>

      <!-- Node 2: Sangam Kalithogai -->
      <circle cx="280" cy="150" r="14" fill="#2563eb" stroke="#1e3a8a" stroke-width="3"/>
      <rect x="200" y="185" width="160" height="75" rx="8" fill="#eff6ff" stroke="#2563eb"/>
      <text x="280" y="207" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">கலித்தொகை (முல்லைக்கலி)</text>
      <text x="280" y="227" text-anchor="middle" fill="#1d4ed8" font-size="10">"கொல்லேற்றுக் கோடஞ்சுவானை</text>
      <text x="280" y="243" text-anchor="middle" fill="#1d4ed8" font-size="10">மறுமையும் புல்லாளே ஆய மகள்"</text>

      <!-- Node 3: Rock Art Salem & Theni -->
      <circle cx="460" cy="150" r="14" fill="#16a34a" stroke="#14532d" stroke-width="3"/>
      <rect x="380" y="50" width="160" height="75" rx="8" fill="#f0fdf4" stroke="#16a34a"/>
      <text x="460" y="72" text-anchor="middle" font-weight="bold" fill="#14532d" font-size="12">நடுகற்கள் & பாறை ஓவியம்</text>
      <text x="460" y="92" text-anchor="middle" fill="#166534" font-size="10">சேலம் பெரிய புலியூர் நடுகல்</text>
      <text x="460" y="108" text-anchor="middle" fill="#166534" font-size="10">தேனி மயிலாடும்பாறை சித்திரம்</text>

      <!-- Node 4: Modern Jallikattu -->
      <circle cx="620" cy="150" r="14" fill="#dc2626" stroke="#7f1d1d" stroke-width="3"/>
      <rect x="540" y="185" width="145" height="75" rx="8" fill="#fef2f2" stroke="#dc2626"/>
      <text x="612" y="207" text-anchor="middle" font-weight="bold" fill="#991b1b" font-size="12">வீர விளையாட்டு</text>
      <text x="612" y="227" text-anchor="middle" fill="#b91c1c" font-size="10">அலங்காநல்லூர், பாலமேடு</text>
      <text x="612" y="243" text-anchor="middle" fill="#b91c1c" font-size="10">தமிழர் பண்பாட்டு அடையாளம்</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Indus Valley Seal Evidence', labelTa: 'சிந்துவெளி முத்திரைச் சான்று', descriptionEn: 'Humped bull taming seal found in Mohenjo-daro proves 4,000+ year old pastoral continuum.', descriptionTa: 'சிந்துவெளி நாகரிக முத்திரையில் திமிலுள்ள காளையை அடக்கும் சித்திரம் கிடைத்துள்ளது.', x: 14, y: 30 },
      { id: 'l2', labelEn: 'Kalithogai Mullai Poetics', labelTa: 'கலித்தொகைக் குறிப்பு', descriptionEn: 'Sangam Tamil poetry states that shepherd maidens would not embrace a youth afraid of the bull’s sharp horns.', descriptionTa: 'கொல்லேற்றுக் கோடஞ்சுவானை ஆயமகள் மறுபிறவியிலும் தழுவ மாட்டாள் எனப் பாடுகிறது கலித்தொகை.', x: 40, y: 72 },
      { id: 'l3', labelEn: 'Memorial Hero Stones (நடுகற்கள்)', labelTa: 'சேலம் நடுகல் சான்றுகள்', descriptionEn: 'Hero stones depicting bull fighters honor fallen tamers and commemorate historic festivals.', descriptionTa: 'சேலம் பெல்லம்பள்ளியில் "கோவுரி சங்கன்" நடுகல் காளையோடு போரிட்ட வீரத்தைப் பறைசாற்றுகிறது.', x: 65, y: 30 }
    ]
  },

  // இயல் 4: விண்ணையும் சாடுவோம் (ISRO சாதனைகள்)
  c9_tam_i4_ch17: {
    id: 'diag_c9_tam_i4_ch17',
    chapterId: 'c9_tam_i4_ch17',
    titleEn: 'Tamil Scientists at ISRO & Space Exploration Trajectory',
    titleTa: 'விண்ணையும் சாடுவோம்: இஸ்ரோவில் தமிழர் பங்களிப்பும் விண்கலப் பாதையும்',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <!-- Dark space background -->
      <rect x="20" y="20" width="660" height="260" rx="14" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      
      <!-- Earth & Orbit -->
      <circle cx="90" cy="150" r="50" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      <text x="90" y="155" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">பூமி (Earth)</text>
      
      <!-- Rocket trajectory -->
      <path d="M 140 150 Q 300 40 500 100 T 620 180" stroke="#f59e0b" stroke-width="3" fill="none" stroke-dasharray="6"/>
      <circle cx="620" cy="180" r="35" fill="#64748b" stroke="#cbd5e1" stroke-width="2"/>
      <text x="620" y="185" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="12">நிலவு (Moon)</text>

      <!-- Tamil Scientists Cards -->
      <rect x="180" y="160" width="130" height="85" rx="8" fill="#1e293b" stroke="#38bdf8"/>
      <text x="245" y="185" text-anchor="middle" font-weight="bold" fill="#38bdf8" font-size="11">மயில்சாமி அண்ணாதுரை</text>
      <text x="245" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">சந்திரயான்-1 திட்ட இயக்குநர்</text>
      <text x="245" y="225" text-anchor="middle" fill="#cbd5e1" font-size="9">நிலவில் நீர் கண்டுபிடிப்பு</text>

      <rect x="330" y="160" width="130" height="85" rx="8" fill="#1e293b" stroke="#ec4899"/>
      <text x="395" y="185" text-anchor="middle" font-weight="bold" fill="#f472b6" font-size="11">டாக்டர் வனிதா முத்தையா</text>
      <text x="395" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">சந்திரயான்-2 திட்ட இயக்குநர்</text>
      <text x="395" y="225" text-anchor="middle" fill="#cbd5e1" font-size="9">முதல் பெண் திட்ட இயக்குநர்</text>

      <rect x="480" y="160" width="130" height="85" rx="8" fill="#1e293b" stroke="#10b981"/>
      <text x="545" y="185" text-anchor="middle" font-weight="bold" fill="#34d399" font-size="11">டாக்டர் கே. சிவன்</text>
      <text x="545" y="205" text-anchor="middle" fill="#94a3b8" font-size="10">முன்னாள் இஸ்ரோ தலைவர்</text>
      <text x="545" y="225" text-anchor="middle" fill="#cbd5e1" font-size="9">கிரையோஜெனிக் மேதை</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Chandrayaan-1 & Mayilsamy Annadurai', labelTa: 'மயில்சாமி அண்ணாதுரை', descriptionEn: 'Project Director from Coimbatore who spearheaded Chandrayaan-1 in 2008, confirming water on the lunar surface.', descriptionTa: 'சந்திரயான்-1 திட்ட இயக்குநராக செயல்பட்டு நிலவில் நீர் இருப்பதை உலகிற்கு உறுதி செய்த தமிழக விஞ்ஞானி.', x: 35, y: 72 },
      { id: 'l2', labelEn: 'Dr. Vanitha & Chandrayaan-2', labelTa: 'முத்தையா வனிதா', descriptionEn: 'First woman project director of deep-space lunar mission Chandrayaan-2.', descriptionTa: 'ஆழமான விண்வெளி திட்டத்தை வழிநடத்திய முதல் இந்தியப் பெண் திட்ட இயக்குநர்.', x: 56, y: 72 },
      { id: 'l3', labelEn: 'Dr. K. Sivan & Indigenous Cryogenics', labelTa: 'டாக்டர் கே. சிவன்', descriptionEn: 'Native of Kanyakumari who led ISRO, known for masterminding indigenous cryogenic engine trajectories.', descriptionTa: 'அரசுப் பள்ளியில் தமிழ்வழியில் பயின்று இஸ்ரோவின் தலைவராக உயர்ந்த விண்வெளி ஆளுமை.', x: 78, y: 72 }
    ]
  }
};

export const CLASS_9_TAMIL_VIDEOS: Record<string, VideoExplainer> = {
  // இயல் 1: திராவிட மொழிக்குடும்பம்
  c9_tam_i1_ch1: {
    id: 'vid_c9_tam_i1_ch1',
    chapterId: 'c9_tam_i1_ch1',
    titleEn: 'Animated Explainer: Dravidian Language Family Evolution',
    titleTa: 'காணொளி விளக்கம்: திராவிட மொழிக் குடும்பத்தின் தோற்றமும் சிறப்பும்',
    durationSeconds: 210,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'India as a Linguistic Museum',
        titleTa: 'இந்திய மொழிகளின் அருங்காட்சியகம்',
        visualDescription: 'Map of India highlighting 1300+ spoken languages and 4 language families (Indo-Aryan, Dravidian, Austroasiatic, Tibeto-Burman). S. Agathiyalingam quote appearing in animated typography.',
        narrationEn: 'Linguist S. Agathiyalingam praised India as a living linguistic museum. Amidst over 1,300 spoken dialects, the Dravidian family stands proudly independent with classical antiquity.',
        narrationTa: 'மொழி ஆய்வாளர் ச. அகத்தியலிங்கம் இந்தியாவை "மொழிகளின் காட்சிசாலை" என்று போற்றுகிறார். ஆயிரத்து முந்நூற்றுக்கும் மேற்பட்ட மொழிகளில், திராவிட மொழிக் குடும்பம் தனித்து விளங்கும் தொன்மையான குடும்பமாகும்.',
        conceptKey: 'Linguistic Museum (மொழிகளின் காட்சிசாலை)'
      },
      {
        sceneNumber: 2,
        titleEn: 'Robert Caldwell and the Comparative Grammar (1856)',
        titleTa: 'ராபர்ட் கால்டுவெல்லின் ஒப்பிலக்கணப் புரட்சி',
        visualDescription: 'Rev. Robert Caldwell writing at Idaiyangudi, Tamil Nadu, comparing base roots of Tamil, Telugu, Kannada, and Malayalam against Sanskrit, illustrating lexical independence.',
        narrationEn: 'In 1856, Robert Caldwell published the landmark "Comparative Grammar of the Dravidian Languages". He scientifically proved that Dravidian tongues do not descend from Sanskrit, but form an autonomous language family.',
        narrationTa: '1856-இல் ராபர்ட் கால்டுவெல் வெளியிட்ட "திராவிட மொழிகளின் ஒப்பிலக்கணம்" திராவிட மொழிகள் ஆரிய மொழிக் குடும்பத்திலிருந்து வேறுபட்டவை என்பதையும், சமஸ்கிருதத்தின் துணையின்றி தனித்தியங்கும் ஆற்றல் கொண்டவை என்பதையும் நிறுவியது.',
        conceptKey: 'Caldwell Comparative Grammar (ஒப்பிலக்கணம்)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Phonological Evolution: Tamil to Dravida',
        titleTa: 'தமிழ் → திராவிட ஒலி மாற்றப் பரிணாமம்',
        visualDescription: 'Smooth kinetic text morphing: தமிழ் (Tamil) → தமிள (Damila) → தமில (Damila) → த்ரமில (Dramila) → த்ரவிட (Dravida) as formulated by scholar Kumarila Bhatta.',
        narrationEn: 'How did the word Dravida originate? Linguists demonstrate the gradual sound shift: Tamil transformed into Damila, Dramila, and finally Dravida over historical centuries.',
        narrationTa: 'திராவிட என்ற சொல் எவ்வாறு பிறந்தது? தமிழ் → தமிள → தமில → த்ரமில → த்ரவிட → திராவிட என்ற ஒலிமாற்றத்தின் மூலமாகவே உருவானது என்பதை மொழி அறிஞர்கள் விளக்குகின்றனர்.',
        conceptKey: 'Phonological Shift (ஒலி மாற்றம்)'
      }
    ]
  },

  // இயல் 1: தமிழோவியம்
  c9_tam_i1_ch2: {
    id: 'vid_c9_tam_i1_ch2',
    chapterId: 'c9_tam_i1_ch2',
    titleEn: 'Visual Poem: Tamil Oviyam - Poet Erode Tamilanban',
    titleTa: 'காட்சிக் கவிதை: தமிழோவியம் – ஈரோடு தமிழன்பன் நயவுரை',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Timeless Antiquity of Tamil',
        titleTa: 'காலம் பிறக்கும் முன் பிறந்த தமிழ்',
        visualDescription: 'Cosmic animation of galaxies forming, shifting seamlessly to ancient Sangam Tamil palm-leaf manuscripts and stone inscriptions in Thanjavur and Madurai.',
        narrationEn: 'Before time was recorded, Tamil was born. Poet Erode Tamilanban celebrates that no matter how many civilizations rise and fall, Tamil remains eternally youthful.',
        narrationTa: '"காலம் பிறக்கும் முன் பிறந்தது தமிழே! எந்தக் காலமும் நிலையாய் இருப்பது தமிழே!" - கவிஞர் ஈரோடு தமிழன்பன் தமிழின் தொன்மையையும் என்றும் குறையாத இளமையையும் அழகாக விவரிக்கிறார்.',
        conceptKey: 'Timeless Youth (காலம் வென்ற தமிழ்)'
      },
      {
        sceneNumber: 2,
        titleEn: 'Welcoming Modern Poetic Forms (Haiku & Senryu)',
        titleTa: 'புதிய இலக்கிய வடிவங்களைத் தழுவுதல்',
        visualDescription: 'A pen writing modern 3-line Haiku in vibrant Tamil calligraphy, blending traditional metre with contemporary free-verse vitality.',
        narrationEn: 'Tamil is not confined to ancient verses; it readily embraces modern expressions like Haiku, Senryu, and Limmerick, nurturing human emotion with boundless flexibility.',
        narrationTa: 'மரபுக் கவிதையோடு நின்றுவிடாமல், ஹைக்கூ, சென்ரியூ போன்ற புதிய கவிதை வடிவங்களையும் தன் மடியில் ஏந்தி வளர்க்கிறது நம் தமிழ் மொழி.',
        conceptKey: 'Modern Tamil Poetics (ஹைக்கூ & புதுக்கவிதை)'
      }
    ]
  },

  // இயல் 2: நீரின்றி அமையாது உலகு
  c9_tam_i2_ch6: {
    id: 'vid_c9_tam_i2_ch6',
    chapterId: 'c9_tam_i2_ch6',
    titleEn: 'Animated Documentary: Water Management of Ancient Tamils',
    titleTa: 'காணொளி ஆவணப்படம்: பழந்தமிழரின் நீர் மேலாண்மைப் பெருமை',
    durationSeconds: 220,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Philosophy of Thiruvalluvar',
        titleTa: 'திருவள்ளுவரின் நீரியல் தத்துவம்',
        visualDescription: 'Morning dew drops falling on green paddy leaves in Thanjavur delta, with the Thirukkural couplet: "நீரின்றி அமையாது உலகெனின் யார்யார்க்கும் வானின்றி அமையாது ஒழுக்கு".',
        narrationEn: 'Thiruvalluvar proclaimed that without water, life cannot exist. Water management is not merely an engineering task; it is the cornerstone of civilization and moral duty.',
        narrationTa: 'நீரின்றி உலகம் இயங்காது என்பதை இரண்டாயிரம் ஆண்டுகளுக்கு முன்பே உணர்த்தியவர் திருவள்ளுவர். நீர் மேலாண்மையே மானுட வாழ்வின் தலையாய கடமையாகும்.',
        conceptKey: 'Water as Lifeblood (நீரின்றி அமையாது உலகு)'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Marvel of Kallanai (Grand Anicut)',
        titleTa: 'கல்லணையின் வியத்தகு பொறியியல்',
        visualDescription: '3D cross-section schematic showing King Karikalan’s engineers placing massive bedrock boulders upon the quicksand riverbed of the Cauvery, bound with water-resistant organic clay.',
        narrationEn: 'Built by King Karikalan over 2,000 years ago, Kallanai remains one of the world’s oldest functioning dams. Its ingenious foundation on shifting river sand puzzled British engineers for centuries!',
        narrationTa: 'காவிரியின் மணல் படுகையில் பெரும் பாறைகளை அடுக்கி, நீரில் கரையாத களிமண்ணைப் பூசி கரிகால் சோழன் கட்டிய கல்லணை இன்றும் வியக்கத்தக்க உலகப் பொறியியல் அதிசயமாகத் திகழ்கிறது.',
        conceptKey: 'Kallanai Engineering (கல்லணை அதிசயம்)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Tank Networks of Tamil Nadu (ஏரிகள் & குளங்கள்)',
        titleTa: 'சங்கிலித் தொடர் ஏரிக் கட்டமைப்பு',
        visualDescription: 'Aerial map showing excess water flowing cascadingly from lake to lake without wasting a single droplet into the sea.',
        narrationEn: 'Tamils designed interconnected cascading lakes. When one tank filled, the surplus overflow naturally irrigated lower villages through stone sluices called Madhagu.',
        narrationTa: 'ஒரு ஏரி நிரம்பினால் அடுத்த ஏரிக்கு நீர் பாயும் சங்கிலித் தொடர் நீர்நிலைகளை உருவாக்கிய முன்னோர்களின் நுட்பத்தை நாம் போற்றிப் பாதுகாக்க வேண்டும்.',
        conceptKey: 'Cascading Lake Networks (சங்கிலித் தொடர் ஏரிகள்)'
      }
    ]
  }
};

/**
 * Intelligent generator for any Tamil chapter diagram
 */
export function generateTamilDiagram(chapter: Chapter, isTa: boolean): SchematicDiagram {
  if (CLASS_9_TAMIL_DIAGRAMS[chapter.id]) {
    return CLASS_9_TAMIL_DIAGRAMS[chapter.id];
  }

  return {
    id: `diag_${chapter.id}`,
    chapterId: chapter.id,
    titleEn: `${chapter.titleEn}: Conceptual Map & Study Diagram`,
    titleTa: `${chapter.titleTa}: கருத்தாக்க வரைபடமும் தேர்வு விளக்கப்படமும்`,
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 300" class="w-full h-full max-h-72">
      <rect x="30" y="30" width="640" height="240" rx="14" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
      <rect x="250" y="50" width="200" height="50" rx="10" fill="#1e3a8a"/>
      <text x="350" y="80" text-anchor="middle" font-weight="bold" fill="#ffffff" font-size="13">${chapter.titleTa.slice(0, 26)}</text>
      
      <line x1="350" y1="100" x2="160" y2="150" stroke="#3b82f6" stroke-width="2"/>
      <line x1="350" y1="100" x2="350" y2="150" stroke="#3b82f6" stroke-width="2"/>
      <line x1="350" y1="100" x2="540" y2="150" stroke="#3b82f6" stroke-width="2"/>

      <rect x="70" y="150" width="180" height="90" rx="8" fill="#eff6ff" stroke="#60a5fa"/>
      <text x="160" y="180" text-anchor="middle" font-weight="bold" fill="#1e40af" font-size="12">1. மையக்கருத்து (Core Theme)</text>
      <text x="160" y="205" text-anchor="middle" fill="#3b82f6" font-size="10">பாடத்தின் முக்கிய நோக்கம்</text>
      <text x="160" y="222" text-anchor="middle" fill="#3b82f6" font-size="10">வாழ்வியல் ஒழுக்கம் & அறிவு</text>

      <rect x="260" y="150" width="180" height="90" rx="8" fill="#ecfdf5" stroke="#34d399"/>
      <text x="350" y="180" text-anchor="middle" font-weight="bold" fill="#065f46" font-size="12">2. அருஞ்சொற்பொருள் & நயம்</text>
      <text x="350" y="205" text-anchor="middle" fill="#059669" font-size="10">இலக்கிய நயங்கள் & உவமைகள்</text>
      <text x="350" y="222" text-anchor="middle" fill="#059669" font-size="10">நூற்குறிப்பு & ஆசிரியர் நயம்</text>

      <rect x="450" y="150" width="180" height="90" rx="8" fill="#fffbeb" stroke="#f59e0b"/>
      <text x="540" y="180" text-anchor="middle" font-weight="bold" fill="#92400e" font-size="12">3. தேர்வு வினாக்கள் (Exam)</text>
      <text x="540" y="205" text-anchor="middle" fill="#d97706" font-size="10">2-மதிப்பெண் குருவினாக்கள்</text>
      <text x="540" y="222" text-anchor="middle" fill="#d97706" font-size="10">5-மதிப்பெண் நெடுவினாக்கள்</text>
    </svg>`,
    labels: [
      {
        id: 'l1',
        labelEn: 'Core Theme & Literature Insight',
        labelTa: 'மையக்கருத்தும் இலக்கிய நயமும்',
        descriptionEn: `Primary conceptual thesis of "${chapter.titleEn}" aligned with Samacheer Kalvi.`,
        descriptionTa: `"${chapter.titleTa}" பாடத்தின் ஆழமான மையக்கருத்து மற்றும் வாழ்வியல் நெறிமுறைகள்.`,
        x: 23,
        y: 65
      },
      {
        id: 'l2',
        labelEn: 'Glossary & Grammar Elements',
        labelTa: 'அருஞ்சொற்பொருள் மற்றும் இலக்கணக் கூறுகள்',
        descriptionEn: 'Grammatical indicators, poetic metre analysis, and lexical richness.',
        descriptionTa: 'பாடப்பகுதியில் உள்ள இலக்கணக் குறிப்புகள், நயங்கள் மற்றும் புதிய சொற்களின் விளக்கம்.',
        x: 50,
        y: 65
      },
      {
        id: 'l3',
        labelEn: 'Exam Board Readiness (2 & 5 Marks)',
        labelTa: 'அரசுத் தேர்வுக்கான முக்கிய வினா-விடைகள்',
        descriptionEn: 'Model questions and essential points required for top marks in quarterly and annual exams.',
        descriptionTa: 'காலாண்டு மற்றும் முழுப்பரீட்சையில் கேட்கப்படும் முக்கிய குருவினா மற்றும் நெடுவினா விடைத் தொகுப்பு.',
        x: 77,
        y: 65
      }
    ]
  };
}

/**
 * Intelligent generator for any Tamil chapter video
 */
export function generateTamilVideo(chapter: Chapter, isTa: boolean): VideoExplainer {
  if (CLASS_9_TAMIL_VIDEOS[chapter.id]) {
    return CLASS_9_TAMIL_VIDEOS[chapter.id];
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
        titleEn: 'Chapter Overview & Context',
        titleTa: 'பாட அறிமுகமும் சூழலும்',
        visualDescription: `Introductory cinematic title card depicting the historical, literary, or cultural background of ${chapter.titleEn}.`,
        narrationEn: `Welcome to the animated concept study of "${chapter.titleEn}". In this Samacheer Kalvi lesson, we explore the depth of Tamil culture and literary excellence.`,
        narrationTa: `வணக்கம் மாணவர்களே! "${chapter.titleTa}" பாடத்தின் கருத்து விளக்கக் காணொளிக்கு உங்களை வரவேற்கிறோம். இப்பாடம் தமிழ் இலக்கியத்தின் சிறப்பையும் வாழ்வியல் அறிவையும் நமக்குக் கற்பிக்கிறது.`,
        conceptKey: 'Syllabus Context (பாடச் சூழல்)'
      },
      {
        sceneNumber: 2,
        titleEn: 'Central Message & Characterization',
        titleTa: 'மையக்கருத்தும் முதன்மைச் செய்தியும்',
        visualDescription: `Illustrated breakdown of characters, philosophical concepts, or grammar principles featured in ${chapter.titleTa}.`,
        narrationEn: `Let us examine the key message: the poet and author present profound insights through masterfully structured language and clear moral guidance.`,
        narrationTa: `இப்பாடத்தின் மையக்கருத்தை நோக்குவோம். ஆசிரியர் ஆழ்ந்த சிந்தனைகளையும், தேர்வுக்கான இன்றியமையாத கருத்துக்களையும் எளிய நடையில் வழங்கியுள்ளார்.`,
        conceptKey: 'Core Insight (மையச் செய்தி)'
      },
      {
        sceneNumber: 3,
        titleEn: 'Exam Takeaways & Revision Summary',
        titleTa: 'தேர்வுக்கான மீள்பார்வைக் குறிப்புகள்',
        visualDescription: 'Bullet-point summary highlighting frequent exam questions, keywords to highlight, and mnemonic tips for high scores.',
        narrationEn: `For your board exams, remember to write clear headings, quote the key couplets or lines accurately, and review the glossary thoroughly.`,
        narrationTa: `அரசுத் தேர்வில் முழு மதிப்பெண் பெற, முக்கிய சொற்களை அடிக்கோடிட்டு எழுதவும்; அருஞ்சொற்பொருள் மற்றும் வினா-விடைகளை முழுமையாகப் பயிற்சி செய்யவும்.`,
        conceptKey: 'Exam Mastery (தேர்வு வெற்றி)'
      }
    ]
  };
}
