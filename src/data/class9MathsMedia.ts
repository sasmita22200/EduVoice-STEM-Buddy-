import { SchematicDiagram, VideoExplainer } from '../types';

export const CLASS_9_MATHS_DIAGRAMS: Record<string, SchematicDiagram> = {
  c9_mat_ch1: {
    id: 'diag_c9_mat_ch1',
    chapterId: 'c9_mat_ch1',
    titleEn: 'Interactive Venn Diagram: Set Operations (Union, Intersection & Complement)',
    titleTa: 'கணச் செயல்பாடுகளுக்கான வென்படம் (சேர்ப்பு, வெட்டு, நிரப்பு)',
    diagramType: 'concept_map',
    svgContent: `<svg viewBox="0 0 700 340" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="300" rx="14" fill="#f8fafc" stroke="#3b82f6" stroke-width="2"/>
      <text x="50" y="55" font-weight="bold" fill="#1e3a8a" font-size="16">Universal Set (U)</text>
      
      <!-- Circle A -->
      <circle cx="270" cy="170" r="110" fill="#38bdf8" fill-opacity="0.35" stroke="#0284c7" stroke-width="3"/>
      <!-- Circle B -->
      <circle cx="430" cy="170" r="110" fill="#a855f7" fill-opacity="0.35" stroke="#7e22ce" stroke-width="3"/>
      
      <!-- Labels -->
      <text x="210" y="175" font-weight="bold" fill="#0369a1" font-size="18" text-anchor="middle">A \\ B</text>
      <text x="210" y="195" fill="#075985" font-size="11" text-anchor="middle">Only in A</text>
      
      <text x="350" y="165" font-weight="bold" fill="#4338ca" font-size="18" text-anchor="middle">A ∩ B</text>
      <text x="350" y="185" fill="#3730a3" font-size="11" text-anchor="middle">Common Elements</text>
      
      <text x="490" y="175" font-weight="bold" fill="#6b21a8" font-size="18" text-anchor="middle">B \\ A</text>
      <text x="490" y="195" fill="#581c87" font-size="11" text-anchor="middle">Only in B</text>

      <text x="180" y="70" font-weight="bold" fill="#0284c7" font-size="16">Set A</text>
      <text x="520" y="70" font-weight="bold" fill="#7e22ce" font-size="16">Set B</text>
      
      <!-- Bottom legend formula -->
      <rect x="140" y="280" width="420" height="32" rx="8" fill="#ffffff" stroke="#cbd5e1" stroke-width="1"/>
      <text x="350" y="301" font-weight="bold" fill="#0f172a" font-size="13" text-anchor="middle">Formula: n(A ∪ B) = n(A) + n(B) - n(A ∩ B)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Only in Set A (A \\ B)', labelTa: 'A-ல் மட்டும் உள்ளவை (A \\ B)', descriptionEn: 'Elements that belong strictly to Set A and not to Set B.', descriptionTa: 'A கணத்தில் மட்டும் உள்ள, B-ல் இல்லாத தனித்த உறுப்புகள்.', x: 30, y: 50 },
      { id: 'l2', labelEn: 'Intersection (A ∩ B)', labelTa: 'பொது வெட்டுப் பகுதி (A ∩ B)', descriptionEn: 'The overlapping lens containing all common elements shared by both sets.', descriptionTa: 'இரு கணங்களுக்கும் பொதுவான உறுப்புகளைக் கொண்ட நடுப்பகுதி.', x: 50, y: 50 },
      { id: 'l3', labelEn: 'Only in Set B (B \\ A)', labelTa: 'B-ல் மட்டும் உள்ளவை (B \\ A)', descriptionEn: 'Elements belonging strictly to Set B and not to Set A.', descriptionTa: 'B கணத்தில் மட்டும் உள்ள, A-ல் இல்லாத தனித்த உறுப்புகள்.', x: 70, y: 50 }
    ]
  },
  c9_mat_ch2: {
    id: 'diag_c9_mat_ch2',
    chapterId: 'c9_mat_ch2',
    titleEn: 'Real Number Line & Geometric Construction of Surds',
    titleTa: 'மெய் எண் கோடு மற்றும் முருடுகளின் வடிவியல் அமைப்பு',
    diagramType: 'geometric_proof',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
      
      <!-- Number Line -->
      <line x1="60" y1="220" x2="640" y2="220" stroke="#1e293b" stroke-width="3"/>
      <!-- Ticks -->
      <line x1="120" y1="210" x2="120" y2="230" stroke="#1e293b" stroke-width="2"/>
      <text x="120" y="250" font-weight="bold" fill="#1e293b" font-size="14" text-anchor="middle">0 (O)</text>
      
      <line x1="260" y1="210" x2="260" y2="230" stroke="#1e293b" stroke-width="2"/>
      <text x="260" y="250" font-weight="bold" fill="#1e293b" font-size="14" text-anchor="middle">1 (A)</text>
      
      <line x1="400" y1="210" x2="400" y2="230" stroke="#1e293b" stroke-width="2"/>
      <text x="400" y="250" font-weight="bold" fill="#1e293b" font-size="14" text-anchor="middle">2</text>

      <!-- Right triangle for root 2 -->
      <line x1="260" y1="220" x2="260" y2="80" stroke="#dc2626" stroke-width="2.5"/>
      <text x="280" y="150" font-weight="bold" fill="#dc2626" font-size="12">1 unit (AB)</text>
      
      <line x1="120" y1="220" x2="260" y2="80" stroke="#2563eb" stroke-width="3"/>
      <text x="175" y="140" font-weight="bold" fill="#1d4ed8" font-size="13">OB = √2 ≈ 1.414</text>
      
      <!-- Compass Arc -->
      <path d="M 260 80 A 197 197 0 0 1 317 220" fill="none" stroke="#2563eb" stroke-dasharray="5 5" stroke-width="2"/>
      <circle cx="317" cy="220" r="5" fill="#2563eb"/>
      <text x="317" y="250" font-weight="bold" fill="#2563eb" font-size="13" text-anchor="middle">√2</text>

      <rect x="440" y="50" width="220" height="90" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
      <text x="550" y="75" font-weight="bold" fill="#854d0e" font-size="13" text-anchor="middle">Pythagoras Application</text>
      <text x="460" y="100" fill="#713f12" font-size="12">OB² = OA² + AB²</text>
      <text x="460" y="120" fill="#713f12" font-size="12">OB² = 1² + 1² = 2 ⇒ OB = √2</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Base OA (1 Unit)', labelTa: 'அடிப்பக்கம் OA (1 அலகு)', descriptionEn: 'Distance from origin 0 to 1 on the horizontal real number axis.', descriptionTa: 'எண் கோட்டில் பூச்சியத்திலிருந்து 1 அலகு தூரம் கொண்ட அடிப்பக்கம்.', x: 27, y: 72 },
      { id: 'l2', labelEn: 'Perpendicular AB (1 Unit)', labelTa: 'செங்குத்துப் பக்கம் AB (1 அலகு)', descriptionEn: 'A perpendicular unit erected at point 1.', descriptionTa: 'புள்ளி 1-ல் செங்குத்தாக வரையப்பட்ட 1 அலகு உயரம்.', x: 37, y: 45 },
      { id: 'l3', labelEn: 'Hypotenuse Arc to √2', labelTa: 'வளைவரை விட்டம் √2', descriptionEn: 'Using a compass with radius OB = √2, the arc intersects the number line at 1.414.', descriptionTa: 'OB-ஐ ஆரமாகக் கொண்டு வரையப்படும் வில் எண் கோட்டில் √2-ஐக் குறிக்கிறது.', x: 45, y: 72 }
    ]
  },
  c9_mat_ch3: {
    id: 'diag_c9_mat_ch3',
    chapterId: 'c9_mat_ch3',
    titleEn: 'Algebraic Identities & Synthetic Division Layout',
    titleTa: 'இயற்கணித முற்றொருமைகள் & தொகுமுறை வகுத்தல் திட்டம்',
    diagramType: 'schematic_table',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
      
      <!-- Geometric Area Decomposition of (a+b)^2 -->
      <rect x="60" y="60" width="140" height="140" fill="#86efac" stroke="#15803d" stroke-width="2"/>
      <text x="130" y="135" font-weight="bold" fill="#14532d" font-size="16" text-anchor="middle">a²</text>
      
      <rect x="200" y="60" width="60" height="140" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
      <text x="230" y="135" font-weight="bold" fill="#14532d" font-size="14" text-anchor="middle">ab</text>
      
      <rect x="60" y="200" width="140" height="60" fill="#bbf7d0" stroke="#15803d" stroke-width="2"/>
      <text x="130" y="235" font-weight="bold" fill="#14532d" font-size="14" text-anchor="middle">ab</text>
      
      <rect x="200" y="200" width="60" height="60" fill="#dcfce7" stroke="#15803d" stroke-width="2"/>
      <text x="230" y="235" font-weight="bold" fill="#14532d" font-size="14" text-anchor="middle">b²</text>
      
      <text x="160" y="285" font-weight="bold" fill="#15803d" font-size="13" text-anchor="middle">(a + b)² = a² + 2ab + b²</text>

      <!-- Synthetic Division Box -->
      <rect x="330" y="50" width="320" height="230" rx="10" fill="#ffffff" stroke="#22c55e" stroke-width="1.5"/>
      <text x="490" y="80" font-weight="bold" fill="#166534" font-size="14" text-anchor="middle">Synthetic Division Schematic</text>
      
      <text x="360" y="120" font-weight="bold" fill="#dc2626" font-size="14">r</text>
      <line x1="380" y1="100" x2="380" y2="210" stroke="#0f172a" stroke-width="2"/>
      <line x1="380" y1="175" x2="630" y2="175" stroke="#0f172a" stroke-width="2"/>
      
      <text x="420" y="120" font-weight="bold" fill="#0f172a" font-size="13">aₙ</text>
      <text x="480" y="120" font-weight="bold" fill="#0f172a" font-size="13">aₙ₋₁</text>
      <text x="540" y="120" font-weight="bold" fill="#0f172a" font-size="13">a₁</text>
      <text x="600" y="120" font-weight="bold" fill="#0f172a" font-size="13">a₀</text>

      <text x="420" y="155" fill="#64748b" font-size="13">0</text>
      <text x="480" y="155" fill="#16a34a" font-size="13">r·q₁</text>
      <text x="540" y="155" fill="#16a34a" font-size="13">r·q₂</text>
      <text x="600" y="155" fill="#16a34a" font-size="13">r·q₃</text>

      <text x="420" y="200" font-weight="bold" fill="#2563eb" font-size="13">q₁</text>
      <text x="480" y="200" font-weight="bold" fill="#2563eb" font-size="13">q₂</text>
      <text x="540" y="200" font-weight="bold" fill="#2563eb" font-size="13">q₃</text>
      <rect x="585" y="180" width="35" height="30" fill="#fee2e2" stroke="#ef4444"/>
      <text x="602" y="200" font-weight="bold" fill="#b91c1c" font-size="13" text-anchor="middle">R</text>
      <text x="490" y="250" font-size="12" fill="#475569" text-anchor="middle">Quotient: q(x) | Remainder = R</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Geometric Expansion Model', labelTa: 'வடிவியல் விரிவு மாதிரி', descriptionEn: 'Area model showing sum of sub-rectangles equaling the total square (a+b)²', descriptionTa: '(a+b)² என்ற சதுரத்தின் பரப்பளவு நான்கு உட்கூறுகளின் கூட்டுத்தொகை.', x: 23, y: 50 },
      { id: 'l2', labelEn: 'Synthetic Divisor Root (r)', labelTa: 'தொகுமுறை வகுக்கும் மூலம் (r)', descriptionEn: 'Zero of linear divisor (x - r) placed on the leftmost column.', descriptionTa: 'நேரியல் வகுத்தியின் மூலம் இடதுபுறக் கட்டத்தில் வைக்கப்படுகிறது.', x: 53, y: 38 },
      { id: 'l3', labelEn: 'Remainder Box (R)', labelTa: 'மீதிப் பெட்டி (R)', descriptionEn: 'The final cell represents remainder R; if R=0, (x-r) is a factor.', descriptionTa: 'இறுதி எண் மீதியைக் குறிக்கும்; மீதி 0 எனில் (x-r) ஒரு காரணியாகும்.', x: 86, y: 62 }
    ]
  },
  c9_mat_ch4: {
    id: 'diag_c9_mat_ch4',
    chapterId: 'c9_mat_ch4',
    titleEn: 'Circle Theorems: Angle Subtended at Centre & Cyclic Quadrilateral',
    titleTa: 'வட்டத் தேற்றங்கள்: மையக் கோணம் & வட்ட நாற்கரம்',
    diagramType: 'geometric_proof',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#faf5ff" stroke="#a855f7" stroke-width="2"/>
      
      <!-- Circle 1: Angle at Centre -->
      <circle cx="200" cy="160" r="100" fill="#ffffff" stroke="#9333ea" stroke-width="2.5"/>
      <circle cx="200" cy="160" r="4" fill="#9333ea"/>
      <text x="215" y="165" font-weight="bold" fill="#7e22ce" font-size="12">O</text>

      <line x1="120" y1="210" x2="200" y2="160" stroke="#7e22ce" stroke-width="2"/>
      <line x1="280" y1="210" x2="200" y2="160" stroke="#7e22ce" stroke-width="2"/>
      <line x1="120" y1="210" x2="200" y2="60" stroke="#2563eb" stroke-width="2"/>
      <line x1="280" y1="210" x2="200" y2="60" stroke="#2563eb" stroke-width="2"/>
      
      <text x="110" y="225" font-weight="bold" fill="#0f172a" font-size="12">A</text>
      <text x="285" y="225" font-weight="bold" fill="#0f172a" font-size="12">B</text>
      <text x="200" y="50" font-weight="bold" fill="#1d4ed8" font-size="13" text-anchor="middle">P (Angle θ)</text>
      <text x="200" y="185" font-weight="bold" fill="#7e22ce" font-size="13" text-anchor="middle">2θ</text>
      
      <text x="200" y="290" font-weight="bold" fill="#6b21a8" font-size="12" text-anchor="middle">∠AOB = 2 × ∠APB</text>

      <!-- Circle 2: Cyclic Quadrilateral -->
      <circle cx="500" cy="160" r="100" fill="#ffffff" stroke="#059669" stroke-width="2.5"/>
      <polygon points="430,110 540,80 580,190 460,240" fill="#d1fae5" fill-opacity="0.5" stroke="#047857" stroke-width="2"/>
      
      <text x="415" y="105" font-weight="bold" fill="#065f46" font-size="12">A (α)</text>
      <text x="550" y="75" font-weight="bold" fill="#065f46" font-size="12">B (β)</text>
      <text x="595" y="195" font-weight="bold" fill="#065f46" font-size="12">C (180°-α)</text>
      <text x="445" y="255" font-weight="bold" fill="#065f46" font-size="12">D (180°-β)</text>

      <text x="500" y="290" font-weight="bold" fill="#065f46" font-size="12" text-anchor="middle">∠A + ∠C = 180° | ∠B + ∠D = 180°</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Angle at Circumference (θ)', labelTa: 'பரிதிக் கோணம் (θ)', descriptionEn: 'The angle subtended by arc AB at any point P on the circumference.', descriptionTa: 'வில் AB-யினால் வட்டப் பரிதியில் தாங்கப்படும் கோணம்.', x: 28, y: 18 },
      { id: 'l2', labelEn: 'Angle at Centre (2θ)', labelTa: 'மையக் கோணம் (2θ)', descriptionEn: 'The angle subtended at the centre is exactly twice the angle subtended at the circumference.', descriptionTa: 'வட்ட மையத்தில் தாங்கப்படும் கோணம் பரிதிக் கோணத்தை விட இருமடங்கு.', x: 28, y: 55 },
      { id: 'l3', labelEn: 'Cyclic Quadrilateral Opposite Angles', labelTa: 'வட்ட நாற்கர எதிர்க் கோணங்கள்', descriptionEn: 'Opposite angles of a cyclic quadrilateral are supplementary (sum = 180°).', descriptionTa: 'வட்ட நாற்கரத்தின் எதிர்க் கோணங்களின் கூடுதல் 180° ஆகும்.', x: 71, y: 50 }
    ]
  },
  c9_mat_ch5: {
    id: 'diag_c9_mat_ch5',
    chapterId: 'c9_mat_ch5',
    titleEn: 'Cartesian Coordinate Plane: Distance, Midpoint & Section Formulas',
    titleTa: 'கார்ட்டீசியன் தளம்: தொலைவு, நடுப்புள்ளி & பிரிவு சூத்திரங்கள்',
    diagramType: 'coordinate_plane',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#f8fafc" stroke="#64748b" stroke-width="2"/>
      
      <!-- Coordinate Axes -->
      <line x1="60" y1="260" x2="640" y2="260" stroke="#334155" stroke-width="2"/>
      <line x1="100" y1="40" x2="100" y2="280" stroke="#334155" stroke-width="2"/>
      <text x="640" y="255" font-weight="bold" fill="#1e293b" font-size="12">X</text>
      <text x="105" y="45" font-weight="bold" fill="#1e293b" font-size="12">Y</text>
      <text x="85" y="275" font-weight="bold" fill="#64748b" font-size="12">O</text>

      <!-- Segment AB -->
      <line x1="200" y1="200" x2="520" y2="80" stroke="#2563eb" stroke-width="3"/>
      <!-- Right triangle components -->
      <line x1="200" y1="200" x2="520" y2="200" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2"/>
      <line x1="520" y1="200" x2="520" y2="80" stroke="#94a3b8" stroke-dasharray="4 4" stroke-width="2"/>
      
      <circle cx="200" cy="200" r="6" fill="#2563eb"/>
      <text x="170" y="225" font-weight="bold" fill="#1d4ed8" font-size="13">A(x₁, y₁)</text>
      
      <circle cx="520" cy="80" r="6" fill="#2563eb"/>
      <text x="535" y="85" font-weight="bold" fill="#1d4ed8" font-size="13">B(x₂, y₂)</text>

      <!-- Midpoint M -->
      <circle cx="360" cy="140" r="6" fill="#16a34a"/>
      <text x="360" y="125" font-weight="bold" fill="#15803d" font-size="13" text-anchor="middle">M((x₁+x₂)/2, (y₁+y₂)/2)</text>

      <!-- Delta labels -->
      <text x="360" y="220" font-weight="bold" fill="#475569" font-size="12" text-anchor="middle">Δx = x₂ - x₁</text>
      <text x="560" y="145" font-weight="bold" fill="#475569" font-size="12">Δy = y₂ - y₁</text>

      <!-- Formula Box -->
      <rect x="180" y="25" width="460" height="35" rx="6" fill="#eff6ff" stroke="#93c5fd"/>
      <text x="410" y="47" font-weight="bold" fill="#1e40af" font-size="12" text-anchor="middle">Distance d = √[(x₂ - x₁)² + (y₂ - y₁)²]</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Segment Endpoints A & B', labelTa: 'முனைப் புள்ளிகள் A & B', descriptionEn: 'Coordinates in 2D Euclidean plane determining the straight line.', descriptionTa: 'இரு பரிமாண தளத்தில் நேர்க்கோட்டின் தொடக்க மற்றும் இறுதிப் புள்ளிகள்.', x: 28, y: 62 },
      { id: 'l2', labelEn: 'Midpoint M', labelTa: 'நடுப்புள்ளி M', descriptionEn: 'Calculated as the arithmetic mean of x and y coordinates.', descriptionTa: 'புள்ளிகள் A மற்றும் B-ன் x மற்றும் y ஆயத்தொலைவுகளின் சராசரி.', x: 51, y: 44 },
      { id: 'l3', labelEn: 'Pythagorean Hypotenuse Distance', labelTa: 'பிதாகரஸ் தொலைவுத் தூரம்', descriptionEn: 'Direct Euclidean distance d derived from horizontal and vertical deltas.', descriptionTa: 'கிடைமட்ட மற்றும் செங்குத்துத் தொலைவுகளிலிருந்து பெறப்பட்ட தூரம் d.', x: 74, y: 25 }
    ]
  },
  c9_mat_ch6: {
    id: 'diag_c9_mat_ch6',
    chapterId: 'c9_mat_ch6',
    titleEn: 'Right-Angled Triangle Trigonometric Ratios & Unit Circle Projections',
    titleTa: 'செங்கோண முக்கோண முக்கோணவியல் விகிதங்கள்',
    diagramType: 'geometric_proof',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#fff7ed" stroke="#f97316" stroke-width="2"/>
      
      <!-- Right Triangle -->
      <polygon points="80,240 400,240 400,60" fill="#ffedd5" stroke="#ea580c" stroke-width="3"/>
      <!-- Right angle symbol -->
      <rect x="375" y="215" width="25" height="25" fill="none" stroke="#ea580c" stroke-width="2"/>
      
      <circle cx="80" cy="240" r="5" fill="#ea580c"/>
      <text x="65" y="260" font-weight="bold" fill="#9a3412" font-size="14">A</text>
      
      <circle cx="400" cy="240" r="5" fill="#ea580c"/>
      <text x="415" y="260" font-weight="bold" fill="#9a3412" font-size="14">B (90°)</text>
      
      <circle cx="400" cy="60" r="5" fill="#ea580c"/>
      <text x="415" y="60" font-weight="bold" fill="#9a3412" font-size="14">C</text>

      <!-- Angle Theta -->
      <path d="M 140 240 A 60 60 0 0 0 130 205" fill="none" stroke="#2563eb" stroke-width="2.5"/>
      <text x="155" y="225" font-weight="bold" fill="#1d4ed8" font-size="16">θ</text>

      <!-- Side Labels -->
      <text x="240" y="265" font-weight="bold" fill="#c2410c" font-size="13" text-anchor="middle">Adjacent Side (அடுத்துள்ள பக்கம்)</text>
      <text x="415" y="155" font-weight="bold" fill="#c2410c" font-size="13">Opposite Side (எதிர்ப்பக்கம்)</text>
      <text x="215" y="130" font-weight="bold" fill="#1d4ed8" font-size="14">Hypotenuse (கர்ணம்)</text>

      <!-- Ratio Box -->
      <rect x="470" y="50" width="190" height="210" rx="8" fill="#ffffff" stroke="#fdba74" stroke-width="1.5"/>
      <text x="565" y="78" font-weight="bold" fill="#9a3412" font-size="13" text-anchor="middle">Fundamental Ratios</text>
      <text x="485" y="110" fill="#7c2d12" font-size="12">sin θ = Opp / Hyp</text>
      <text x="485" y="135" fill="#7c2d12" font-size="12">cos θ = Adj / Hyp</text>
      <text x="485" y="160" fill="#7c2d12" font-size="12">tan θ = Opp / Adj</text>
      <line x1="485" y1="175" x2="645" y2="175" stroke="#fed7aa"/>
      <text x="485" y="198" fill="#1e40af" font-weight="bold" font-size="11">tan θ = sin θ / cos θ</text>
      <text x="485" y="220" fill="#166534" font-weight="bold" font-size="11">sin²θ + cos²θ = 1</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Opposite Side (எதிர்ப்பக்கம்)', labelTa: 'எதிர்ப்பக்கம் (BC)', descriptionEn: 'The side directly across from the reference angle θ.', descriptionTa: 'குறிப்பிட்ட கோணம் θ-விற்கு எதிரில் அமைந்துள்ள பக்கம்.', x: 58, y: 48 },
      { id: 'l2', labelEn: 'Adjacent Side (அடுத்துள்ள பக்கம்)', labelTa: 'அடுத்துள்ள பக்கம் (AB)', descriptionEn: 'The base side between angle θ and the 90° right angle.', descriptionTa: 'கோணம் θ மற்றும் 90° செங்கோணத்திற்கு இடைப்பட்ட அடிப்பக்கம்.', x: 34, y: 76 },
      { id: 'l3', labelEn: 'Hypotenuse (கர்ணம் AC)', labelTa: 'கர்ணம் (AC)', descriptionEn: 'The longest side opposite to the 90° right angle.', descriptionTa: 'செங்கோணத்திற்கு எதிரே அமைந்துள்ள மிகப்பெரிய பக்கம்.', x: 32, y: 40 }
    ]
  },
  c9_mat_ch7: {
    id: 'diag_c9_mat_ch7',
    chapterId: 'c9_mat_ch7',
    titleEn: 'Mensuration: 3D Cuboid & Cube Surface Area Decomposition',
    titleTa: 'அளவியல்: கனச்செவ்வகம் & கனச்சதுரப் புறப்பரப்புப் பகுப்பாய்வு',
    diagramType: '3d_projection',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#ecfeff" stroke="#06b6d4" stroke-width="2"/>
      
      <!-- Isometric Cuboid -->
      <polygon points="120,180 260,180 340,110 200,110" fill="#a5f3fc" stroke="#0891b2" stroke-width="2"/>
      <polygon points="120,180 260,180 260,260 120,260" fill="#67e8f9" stroke="#0891b2" stroke-width="2"/>
      <polygon points="260,180 340,110 340,190 260,260" fill="#22d3ee" stroke="#0891b2" stroke-width="2"/>

      <!-- Dimensions -->
      <text x="190" y="280" font-weight="bold" fill="#0e7490" font-size="14" text-anchor="middle">Length (l)</text>
      <text x="315" y="240" font-weight="bold" fill="#0e7490" font-size="14">Breadth (b)</text>
      <text x="95" y="225" font-weight="bold" fill="#0e7490" font-size="14">Height (h)</text>

      <!-- Net of cuboid on the right -->
      <rect x="440" y="50" width="220" height="220" rx="10" fill="#ffffff" stroke="#0891b2" stroke-width="1.5"/>
      <text x="550" y="78" font-weight="bold" fill="#155e75" font-size="13" text-anchor="middle">Surface Area Formulas</text>
      
      <text x="455" y="110" font-weight="bold" fill="#0e7490" font-size="12">Total Surface Area (TSA):</text>
      <text x="455" y="130" fill="#164e63" font-size="12">TSA = 2(lb + bh + lh)</text>

      <text x="455" y="160" font-weight="bold" fill="#0e7490" font-size="12">Lateral Surface Area (LSA):</text>
      <text x="455" y="180" fill="#164e63" font-size="12">LSA = 2h(l + b)</text>

      <text x="455" y="210" font-weight="bold" fill="#0e7490" font-size="12">Volume (V):</text>
      <text x="455" y="230" fill="#164e63" font-size="12">V = l × b × h</text>

      <line x1="455" y1="245" x2="645" y2="245" stroke="#cffafe"/>
      <text x="550" y="260" font-size="11" fill="#047857" text-anchor="middle">Cube (side a): TSA=6a², V=a³</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Length, Breadth & Height Dimensions', labelTa: 'நீளம், அகலம், உயரம்', descriptionEn: 'The three orthogonal dimensions defining 3D rectangular solids.', descriptionTa: 'கனச்செவ்வகத்தை வரையறுக்கும் மூன்று செங்குத்து அளவுகள்.', x: 27, y: 65 },
      { id: 'l2', labelEn: 'Total Surface Area (6 Faces)', labelTa: 'மொத்தப் புறப்பரப்பு (6 முகங்கள்)', descriptionEn: 'Sum of areas of all 6 rectangular faces: 2(lb + bh + lh).', descriptionTa: 'அனைத்து 6 செவ்வக முகங்களின் பரப்பளவுகளின் கூட்டுத்தொகை.', x: 78, y: 38 },
      { id: 'l3', labelEn: 'Internal Volume Capacity', labelTa: 'கனஅளவு (கொள்திறன்)', descriptionEn: 'Interior spatial capacity measured in cubic units (l × b × h).', descriptionTa: 'கனச்செவ்வகத்தின் உட்புறக் கொள்ளளவு (l × b × h).', x: 78, y: 72 }
    ]
  },
  c9_mat_ch8: {
    id: 'diag_c9_mat_ch8',
    chapterId: 'c9_mat_ch8',
    titleEn: 'Statistics: Frequency Distribution Histogram & Polygon',
    titleTa: 'புள்ளியியல்: நிகழ்வெண் செவ்வகப்படம் & நிகழ்வெண் பலகோணம்',
    diagramType: 'statistical_chart',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#f8fafc" stroke="#475569" stroke-width="2"/>
      
      <!-- Chart Axes -->
      <line x1="80" y1="250" x2="620" y2="250" stroke="#1e293b" stroke-width="2"/>
      <line x1="80" y1="50" x2="80" y2="250" stroke="#1e293b" stroke-width="2"/>
      <text x="620" y="245" font-weight="bold" fill="#1e293b" font-size="12">Class Intervals</text>
      <text x="85" y="45" font-weight="bold" fill="#1e293b" font-size="12">Frequency</text>

      <!-- Histogram Bars -->
      <rect x="120" y="190" width="80" height="60" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
      <rect x="200" y="130" width="80" height="120" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
      <rect x="280" y="70" width="80" height="180" fill="#60a5fa" stroke="#2563eb" stroke-width="1.5"/>
      <rect x="360" y="110" width="80" height="140" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>
      <rect x="440" y="170" width="80" height="80" fill="#93c5fd" stroke="#2563eb" stroke-width="1.5"/>

      <!-- Frequency Polygon Line connecting midpoints -->
      <polyline points="80,250 160,190 240,130 320,70 400,110 480,170 560,250" fill="none" stroke="#dc2626" stroke-width="3"/>
      <circle cx="320" cy="70" r="5" fill="#dc2626"/>
      <text x="320" y="55" font-weight="bold" fill="#b91c1c" font-size="13" text-anchor="middle">Modal Class Peak</text>

      <!-- Interval ticks -->
      <text x="120" y="270" font-size="11" fill="#475569" text-anchor="middle">0-10</text>
      <text x="200" y="270" font-size="11" fill="#475569" text-anchor="middle">10-20</text>
      <text x="280" y="270" font-size="11" fill="#475569" text-anchor="middle">20-30</text>
      <text x="360" y="270" font-size="11" fill="#475569" text-anchor="middle">30-40</text>
      <text x="440" y="270" font-size="11" fill="#475569" text-anchor="middle">40-50</text>
      <text x="520" y="270" font-size="11" fill="#475569" text-anchor="middle">50-60</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Continuous Class Bars (Histogram)', labelTa: 'செவ்வகங்கள் (நிகழ்வெண் படம்)', descriptionEn: 'Contiguous bars whose areas are proportional to the frequencies.', descriptionTa: 'பிரிவு இடைவெளிகளின் நிகழ்வெண்ணிற்கு நேர்விகிதத்தில் உள்ள செவ்வகங்கள்.', x: 28, y: 55 },
      { id: 'l2', labelEn: 'Frequency Polygon (Midpoint Trajectory)', labelTa: 'நிகழ்வெண் பலகோணம்', descriptionEn: 'Connected line segments through the class marks (midpoints) of bars.', descriptionTa: 'செவ்வகங்களின் நடுப்புள்ளிகளை இணைக்கும் சிகப்புக் கோட்டுப் பாதை.', x: 45, y: 25 },
      { id: 'l3', labelEn: 'Modal Peak (Highest Frequency)', labelTa: 'முகடு உச்சப் புள்ளி', descriptionEn: 'Identifies the interval with the highest concentration of observed values.', descriptionTa: 'அதிக நிகழ்வெண் கொண்ட பிரிவு இடைவெளியைக் குறிக்கும் உச்சப் புள்ளி.', x: 45, y: 18 }
    ]
  },
  c9_mat_ch9: {
    id: 'diag_c9_mat_ch9',
    chapterId: 'c9_mat_ch9',
    titleEn: 'Empirical Probability: Tree Diagram & Sample Space (S)',
    titleTa: 'நிகழ்தகவு: மர வரைபடம் & கூறுவெளி (S)',
    diagramType: 'probability_tree',
    svgContent: `<svg viewBox="0 0 700 320" class="w-full h-full max-h-72">
      <rect x="20" y="20" width="660" height="280" rx="14" fill="#eff6ff" stroke="#3b82f6" stroke-width="2"/>
      
      <!-- Root -->
      <circle cx="100" cy="160" r="14" fill="#1e40af"/>
      <text x="100" y="165" font-weight="bold" fill="#ffffff" font-size="12" text-anchor="middle">Start</text>

      <!-- Stage 1 branches -->
      <line x1="114" y1="160" x2="260" y2="100" stroke="#3b82f6" stroke-width="2.5"/>
      <line x1="114" y1="160" x2="260" y2="220" stroke="#3b82f6" stroke-width="2.5"/>
      <text x="180" y="120" font-weight="bold" fill="#1d4ed8" font-size="12">P(H) = 1/2</text>
      <text x="180" y="205" font-weight="bold" fill="#1d4ed8" font-size="12">P(T) = 1/2</text>

      <!-- Stage 1 nodes -->
      <circle cx="260" cy="100" r="14" fill="#3b82f6"/>
      <text x="260" y="105" font-weight="bold" fill="#ffffff" font-size="12" text-anchor="middle">H</text>

      <circle cx="260" cy="220" r="14" fill="#3b82f6"/>
      <text x="260" y="225" font-weight="bold" fill="#ffffff" font-size="12" text-anchor="middle">T</text>

      <!-- Stage 2 branches -->
      <line x1="274" y1="100" x2="420" y2="70" stroke="#0ea5e9" stroke-width="2"/>
      <line x1="274" y1="100" x2="420" y2="130" stroke="#0ea5e9" stroke-width="2"/>
      <line x1="274" y1="220" x2="420" y2="190" stroke="#0ea5e9" stroke-width="2"/>
      <line x1="274" y1="220" x2="420" y2="250" stroke="#0ea5e9" stroke-width="2"/>

      <!-- Stage 2 nodes -->
      <circle cx="420" cy="70" r="12" fill="#0284c7"/><text x="420" y="74" fill="#fff" font-size="11" text-anchor="middle">H</text>
      <circle cx="420" cy="130" r="12" fill="#0284c7"/><text x="420" y="134" fill="#fff" font-size="11" text-anchor="middle">T</text>
      <circle cx="420" cy="190" r="12" fill="#0284c7"/><text x="420" y="194" fill="#fff" font-size="11" text-anchor="middle">H</text>
      <circle cx="420" cy="250" r="12" fill="#0284c7"/><text x="420" y="254" fill="#fff" font-size="11" text-anchor="middle">T</text>

      <!-- Sample space outcomes -->
      <rect x="470" y="50" width="190" height="220" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
      <text x="565" y="78" font-weight="bold" fill="#1e3a8a" font-size="13" text-anchor="middle">Sample Space S</text>
      <text x="490" y="105" fill="#1e40af" font-weight="bold" font-size="13">1. HH (P = 1/4)</text>
      <text x="490" y="135" fill="#1e40af" font-weight="bold" font-size="13">2. HT (P = 1/4)</text>
      <text x="490" y="165" fill="#1e40af" font-weight="bold" font-size="13">3. TH (P = 1/4)</text>
      <text x="490" y="195" fill="#1e40af" font-weight="bold" font-size="13">4. TT (P = 1/4)</text>
      
      <line x1="490" y1="215" x2="640" y2="215" stroke="#e2e8f0"/>
      <text x="490" y="235" font-size="11" fill="#475569">Total n(S) = 4</text>
      <text x="490" y="255" font-weight="bold" fill="#047857" font-size="12">P(E) = n(E) / n(S)</text>
    </svg>`,
    labels: [
      { id: 'l1', labelEn: 'Tree Root & 1st Toss Branches', labelTa: 'மர வரைபடத் தொடக்கம் (முதல் சுண்டல்)', descriptionEn: 'Binary decision fork giving either Head or Tail with equal probability 0.5.', descriptionTa: 'சமவாய்ப்பு முறையில் தலை அல்லது பூ கிடைக்கும் சம நிகழ்தகவுக் கிளைகள்.', x: 26, y: 50 },
      { id: 'l2', labelEn: 'Second Toss Fork', labelTa: 'இரண்டாவது சுண்டல் கிளைகள்', descriptionEn: 'Subsequent independent trial multiplying probabilities (1/2 × 1/2 = 1/4).', descriptionTa: 'அடுத்தடுத்து நிகழும் சார்பற்ற சோதனைகளின் கூட்டுப் பெருக்கல்.', x: 60, y: 50 },
      { id: 'l3', labelEn: 'Sample Space Outcomes S = {HH, HT, TH, TT}', labelTa: 'முழு கூறுவெளி S', descriptionEn: 'The exhaustive list of all 4 equally likely elementary events.', descriptionTa: 'சாத்தியமான அனைத்து 4 தொடக்கநிலை விளைவுகளின் முழுமையான கணம்.', x: 80, y: 50 }
    ]
  }
};

export const CLASS_9_MATHS_VIDEOS: Record<string, VideoExplainer> = {
  c9_mat_ch1: {
    id: 'vid_c9_mat_ch1',
    chapterId: 'c9_mat_ch1',
    titleEn: 'Animated Concept: Power of Sets & Venn Diagrams in Daily Life',
    titleTa: 'காணொளி விளக்கம்: கணமொழியும் வென்படங்களின் அன்றாடப் பயன்பாடுகளும்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Logic of Classification',
        titleTa: 'வகைப்பாட்டின் தர்க்கம்',
        visualDescription: 'A chaotic warehouse of items instantly sorted into labeled circular zones: Union, Intersection, and Complement.',
        narrationEn: 'A set is not just a math notation—it is how search engines, social networks, and scientists classify massive data into distinct groups!',
        narrationTa: 'கணம் என்பது வெறும் கணிதக் குறியீடு மட்டுமல்ல—தேடுபொறிகள், சமூக வலைப்பின்னல்கள் மற்றும் அறிவியலாளர்கள் கோடிக்கணக்கான தகவல்களை வகைப்படுத்தும் அடிப்படை தர்க்கம்!',
        conceptKey: 'Set Definitions & Roster Form'
      },
      {
        sceneNumber: 2,
        titleEn: 'Visualizing Overlaps: The Venn Revolution',
        titleTa: 'ஒன்றையொன்று வெட்டும் வென்படங்கள்',
        visualDescription: 'Two glowing overlapping circles illustrating students playing cricket, football, or both sports with real-time numeric counters.',
        narrationEn: 'When two groups share common members, Venn diagrams make overlaps crystal clear using n(A ∪ B) = n(A) + n(B) - n(A ∩ B).',
        narrationTa: 'இரு குழுக்களுக்கு பொதுவான நபர்கள் இருக்கும் போது, இரட்டை எண்ணிக்கையைத் தவிர்க்க வென்படமும் அதன் ஆதி எண் வாய்ப்பாடும் உதவுகிறது.',
        conceptKey: 'Intersection & Union Formulas'
      },
      {
        sceneNumber: 3,
        titleEn: 'De Morgan’s Laws in Digital Circuitry',
        titleTa: 'டிஜிட்டல் மின்னணுவியலில் டி மார்கன் விதிகள்',
        visualDescription: 'Logic gates flipping on and off, demonstrating that (A ∪ B)′ = A′ ∩ B′ forms the basis of computer microchips.',
        narrationEn: 'De Morgan’s complementary laws are the secret architecture behind computer logic gates and digital microprocessors.',
        narrationTa: 'டி மார்கனின் நிரப்பு விதிகள் கணினி நுண்செயலிகள் மற்றும் மின்னணு சுற்றுகளின் ஆணிவேராக விளங்குகின்றன.',
        conceptKey: 'De Morgan’s Laws'
      }
    ]
  },
  c9_mat_ch2: {
    id: 'vid_c9_mat_ch2',
    chapterId: 'c9_mat_ch2',
    titleEn: 'Animated Concept: Journey Beyond Fractions — The Real Number Line',
    titleTa: 'காணொளி விளக்கம்: பின்னங்களைத் தாண்டிய மெய் எண் பயணம்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Discovery of Incommensurable Surds',
        titleTa: 'விகிதமுறா எண்களின் கண்டுபிடிப்பு',
        visualDescription: 'Ancient Greek geometricians discovering that the diagonal of a 1x1 unit square cannot be written as any fraction p/q.',
        narrationEn: 'When Pythagoras drew a square of side 1, the diagonal length √2 refused to fit into standard fractions—unveiling the magical world of irrational surds!',
        narrationTa: 'பண்டைய பிதாகரஸ் 1 அலகு சதுரத்தை வரைந்த போது, அதன் மூலைவிட்டம் √2 எந்தவொரு பின்னத்திலும் அடங்காமல் விகிதமுறா எண்களின் கதவைத் திறந்தது!',
        conceptKey: 'Rational vs Irrational Numbers'
      },
      {
        sceneNumber: 2,
        titleEn: 'Constructing √2 on the Real Line',
        titleTa: 'எண் கோட்டில் √2 அமைத்தல்',
        visualDescription: 'Animated compass tracing the hypotenuse from (1, 1) down to mark exactly 1.414 on the horizontal axis.',
        narrationEn: 'Using a compass and ruler, the hypotenuse of a right triangle pivots down to prove that every irrational number has an exact address on the real line.',
        narrationTa: 'கவராயத்தின் உதவியுடன் செங்கோண முக்கோணத்தின் கர்ணத்தை கீழே சுழற்றி, எண் கோட்டின் மீது √2-ன் துல்லியமான இடத்தை நிறுவ முடிகிறது.',
        conceptKey: 'Geometric Construction of Surds'
      },
      {
        sceneNumber: 3,
        titleEn: 'Conjugate Rationalization Mastery',
        titleTa: 'இணை முருடால் விகிதப்படுத்துதல்',
        visualDescription: 'Fractions with root denominators simplified cleanly by multiplying both parts by the difference-of-squares conjugate.',
        narrationEn: 'Multiplying by the conjugate (a - √b) eliminates radicals from denominators effortlessly, unlocking algebra exams.',
        narrationTa: 'இணை முருடால் தொகுதி மற்றும் பகுதியைப் பெருக்கி, பகுதியில் உள்ள முருடுகளை எளிதில் நீக்கித் தேர்வில் முழு மதிப்பெண் பெறலாம்.',
        conceptKey: 'Rationalising Denominators'
      }
    ]
  },
  c9_mat_ch3: {
    id: 'vid_c9_mat_ch3',
    chapterId: 'c9_mat_ch3',
    titleEn: 'Animated Concept: Mastering Polynomials & Synthetic Division',
    titleTa: 'காணொளி விளக்கம்: பல்லுறுப்புக் கோவைகளும் தொகுமுறை வகுத்தலும்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Polynomials as Rollercoaster Curves',
        titleTa: 'பல்லுறுப்புக் கோவைகளின் வளைவுப் பாதை',
        visualDescription: 'A thrilling amusement park rollercoaster whose height follows quadratic and cubic polynomial trajectories.',
        narrationEn: 'Every polynomial equation models real physics—from trajectory rockets and rollercoaster drops to financial market forecasts.',
        narrationTa: 'ராக்கெட்டுகளின் பறக்கும் பாதை முதல் பங்குச்சந்தை ஏற்ற இறக்கங்கள் வரை பல்லுறுப்புக் கோவைகளே தீர்மானிக்கின்றன.',
        conceptKey: 'Degree & Zeros of Polynomials'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Speed of Synthetic Division',
        titleTa: 'தொகுமுறை வகுத்தலின் மின்னல் வேகம்',
        visualDescription: 'Coefficients marching into an L-shaped division box, rapidly multiplying and adding to find quotient and remainder in seconds.',
        narrationEn: 'Instead of cumbersome long polynomial division, synthetic division uses simple arithmetic steps to uncover roots and remainders in seconds!',
        narrationTa: 'நீண்ட வகுத்தல் முறைக்கு மாற்றாக, எளிய கூட்டல் மற்றும் பெருக்கல் மூலம் சில நொடிகளில் ஈவு மற்றும் மீதியைக் கண்டுபிடிக்கும் அற்புத முறை!',
        conceptKey: 'Synthetic Division Algorithm'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Factor Theorem Golden Rule',
        titleTa: 'காரணித் தேற்றத்தின் பொன் விதி',
        visualDescription: 'The remainder box turning green when R = 0, locking in (x - a) as an exact algebraic factor.',
        narrationEn: 'If p(a) = 0, then (x - a) is guaranteed to be a factor! This theorem is the bedrock of advanced engineering algebra.',
        narrationTa: 'p(a) = 0 எனில் (x - a) என்பது கட்டாயக் காரணியாகும் என்ற தேற்றமே உயர் கணிதத்தின் அடித்தளமாகும்.',
        conceptKey: 'Remainder & Factor Theorems'
      }
    ]
  },
  c9_mat_ch4: {
    id: 'vid_c9_mat_ch4',
    chapterId: 'c9_mat_ch4',
    titleEn: 'Animated Concept: Secrets of Circles & Cyclic Geometry',
    titleTa: 'காணொளி விளக்கம்: வட்டத்தின் ரகசியங்களும் வட்ட நாற்கரமும்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'The Perfect Symmetry of Chords',
        titleTa: 'நாண்களின் சமச்சீர்மை',
        visualDescription: 'A circle with chords of equal lengths demonstrating that equidistant chords from the centre must be equal.',
        narrationEn: 'In every wheel, satellite dish, and dome, chords equidistant from the center guarantee perfect structural balance.',
        narrationTa: 'வட்டத்தின் மையத்திலிருந்து சம தொலைவில் உள்ள நாண்கள் எப்போதும் சம நீளம் கொண்டிருக்கும்.',
        conceptKey: 'Chord Properties'
      },
      {
        sceneNumber: 2,
        titleEn: 'The 2θ Central Angle Theorem',
        titleTa: 'மையக் கோணம் 2θ தேற்றம்',
        visualDescription: 'Dynamic angle arms sweeping across the circle: angle at center expanding to exactly double the angle at the arc.',
        narrationEn: 'No matter where point P moves along the major arc, the angle at the centre stays precisely twice the subtended angle!',
        narrationTa: 'பரிதியில் புள்ளி எங்கு நகர்ந்தாலும், மையத்தில் ஏற்படும் கோணம் பரிதிக் கோணத்தைப் போல இருமடங்காகவே இருக்கும்!',
        conceptKey: 'Subtended Angle Theorem'
      },
      {
        sceneNumber: 3,
        titleEn: 'Cyclic Quadrilateral 180° Rule',
        titleTa: 'வட்ட நாற்கரத்தின் 180° விதி',
        visualDescription: 'Four vertices on a circle with opposite angles adding up to 180°, highlighting navigation compass stability.',
        narrationEn: 'When four points rest on a circle, opposite angles always add up to 180 degrees—a property vital for astronomical navigation.',
        narrationTa: 'வட்டத்தின் மீது அமைந்த நான்கு புள்ளிகள் வட்ட நாற்கரத்தை உருவாக்கும் போது எதிர்க் கோணங்களின் கூடுதல் 180° ஆக அமையும்.',
        conceptKey: 'Cyclic Quadrilateral Theorem'
      }
    ]
  },
  c9_mat_ch5: {
    id: 'vid_c9_mat_ch5',
    chapterId: 'c9_mat_ch5',
    titleEn: 'Animated Concept: GPS Coordinates & Distance on the Grid',
    titleTa: 'காணொளி விளக்கம்: ஜிபிஎஸ் வரைபடமும் கார்ட்டீசியன் தொலைவுச் சூத்திரமும்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Descartes’ Grid: Merging Algebra & Geometry',
        titleTa: 'டெஸ்கார்டஸின் வரைபடப் புரட்சி',
        visualDescription: 'René Descartes tracking a fly on the ceiling using horizontal and vertical distances, inventing the Cartesian coordinate plane.',
        narrationEn: 'By indexing any point with (x, y) coordinates, René Descartes connected geometric shapes with algebraic equations forever!',
        narrationTa: 'தளத்தின் எந்தவொரு புள்ளியையும் (x, y) ஆயத்தொலைவுகளால் குறித்து, வடிவியலையும் இயற்கணிதத்தையும் இணைத்த புரட்சி!',
        conceptKey: 'Cartesian System'
      },
      {
        sceneNumber: 2,
        titleEn: 'How GPS Measures Distance',
        titleTa: 'ஜிபிஎஸ் தூரம் கணக்கிடும் முறை',
        visualDescription: 'Two GPS satellites measuring direct Euclidean line-of-sight distance using the distance formula triangle.',
        narrationEn: 'Smartphones and GPS satellites use d = √[(x₂ - x₁)² + (y₂ - y₁)²] every second to navigate vehicles safely to their destinations.',
        narrationTa: 'நமது கைபேசிகளில் இயங்கும் ஜிபிஎஸ் நேர்க்கோட்டு தூரச் சூத்திரத்தைப் பயன்படுத்தியே பாதையைக் காட்டுகிறது.',
        conceptKey: 'Distance Formula'
      },
      {
        sceneNumber: 3,
        titleEn: 'Finding the Centre of Mass: Midpoint & Centroid',
        titleTa: 'நடுப்புள்ளியும் நடுக்கோட்டு மையமும்',
        visualDescription: 'A triangular cardboard sheet balancing perfectly on a pencil tip at its centroid G.',
        narrationEn: 'The centroid G((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3) is the exact balance point of every triangular wing in aeronautical engineering.',
        narrationTa: 'முக்கோணத்தின் நடுக்கோட்டு மையம் G என்பது விமான இறக்கைகளின் சமநிலை மையமாகப் பயன்படுகிறது.',
        conceptKey: 'Midpoint & Centroid'
      }
    ]
  },
  c9_mat_ch6: {
    id: 'vid_c9_mat_ch6',
    chapterId: 'c9_mat_ch6',
    titleEn: 'Animated Concept: Trigonometry — Measuring the Unreachable',
    titleTa: 'காணொளி விளக்கம்: முக்கோணவியல் — தொட முடியாத உயரங்களை அளத்தல்',
    durationSeconds: 200,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Measuring Mount Everest with Triangles',
        titleTa: 'எவரெஸ்ட் சிகரத்தை அளந்த முக்கோணம்',
        visualDescription: 'Surveyors in Tamil Nadu and the Himalayas measuring the height of mountains without climbing them, using base angle θ.',
        narrationEn: 'How do you measure a mountain without climbing it? Trigonometry relates angles to opposite and adjacent sides!',
        narrationTa: 'ஒரு மலையின் உச்சியைத் தொடாமல் அதன் உயரத்தை எவ்வாறு அளப்பது? முக்கோணவியல் விகிதங்களே இதற்கு விடை தருகின்றன!',
        conceptKey: 'Trigonometric Ratios'
      },
      {
        sceneNumber: 2,
        titleEn: 'The Sin, Cos, and Tan Triad',
        titleTa: 'சைன், காஸ், டேன் முக்கூட்டு விகிதங்கள்',
        visualDescription: 'An animated right triangle with color-coded opposite, adjacent, and hypotenuse sides stretching dynamically as θ increases.',
        narrationEn: 'As angle θ grows from 0 to 90 degrees, sin θ rises from 0 to 1, while cos θ gracefully drops from 1 to 0.',
        narrationTa: 'கோணம் θ அதிகரிக்க அதிகரிக்க, எதிர்ப்பக்கத்தின் விகிதமான sin θ மதிப்பும் 0-விலிருந்து 1 வரை உயர்கிறது.',
        conceptKey: 'Ratio Variations'
      },
      {
        sceneNumber: 3,
        titleEn: 'The Master Identity: sin²θ + cos²θ = 1',
        titleTa: 'முதன்மை முற்றொருமை: sin²θ + cos²θ = 1',
        visualDescription: 'A unit circle of radius 1 showing x = cos θ and y = sin θ tracing the unit circumference via Pythagoras’ theorem.',
        narrationEn: 'Because x² + y² = 1 on the unit circle, sin²θ + cos²θ = 1 holds true for every angle in the universe!',
        narrationTa: 'அலகு வட்டத்தில் x² + y² = 1 என்பதால், பிரபஞ்சத்தின் அனைத்துக் கோணங்களுக்கும் sin²θ + cos²θ = 1 என்பது என்றும் நிலைத்திருக்கும்!',
        conceptKey: 'Fundamental Identities'
      }
    ]
  },
  c9_mat_ch7: {
    id: 'vid_c9_mat_ch7',
    chapterId: 'c9_mat_ch7',
    titleEn: 'Animated Concept: Mensuration — Volume & Surface in Architecture',
    titleTa: 'காணொளி விளக்கம்: அளவியல் — கட்டிடக்கலையில் கனஅளவும் புறப்பரப்பும்',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Heron’s Formula for Any Triangle',
        titleTa: 'ஹெரான் சூத்திரம்',
        visualDescription: 'An irregular plot of land where perpendicular height is unknown, calculated accurately using side lengths a, b, c and semi-perimeter s.',
        narrationEn: 'When the height of an irregular triangular plot cannot be measured, Heron’s formula √[s(s-a)(s-b)(s-c)] solves it using only the fence sides!',
        narrationTa: 'செங்குத்து உயரம் தெரியாத நிலத்தின் பரப்பளவை அதன் மூன்று பக்கங்களின் அளவுகளைக் கொண்டே ஹெரான் சூத்திரம் மூலம் துல்லியமாகக் கணக்கிடலாம்.',
        conceptKey: 'Heron’s Formula'
      },
      {
        sceneNumber: 2,
        titleEn: 'Unfolding 3D Boxes into Flat Nets',
        titleTa: 'கன உருவங்களை விரிக்கும் முறை',
        visualDescription: 'A 3D cardboard delivery box unfolding into a flat 2D net of 6 rectangles, illustrating Total Surface Area = 2(lb + bh + lh).',
        narrationEn: 'Total Surface Area is simply the sum of all flat faces when the 3D solid is unfolded into a packaging net.',
        narrationTa: 'ஒரு கனச்செவ்வகப் பெட்டியைப் பிரித்து வைக்கும் போது கிடைக்கும் 6 செவ்வக முகங்களின் பரப்பளவே அதன் மொத்தப் புறப்பரப்பாகும்.',
        conceptKey: 'TSA and LSA of Cuboid'
      },
      {
        sceneNumber: 3,
        titleEn: 'Water Tanks & Volume Capacity',
        titleTa: 'தண்ணீர்த் தொட்டியின் கொள்திறன்',
        visualDescription: 'A village overhead water tank filling up, showing how cubic meters convert directly into thousands of litres of drinking water.',
        narrationEn: 'Civil engineers calculate the volume V = l × b × h to ensure storage tanks hold enough water to supply entire towns.',
        narrationTa: 'பொறியாளர்கள் V = l × b × h வாய்ப்பாட்டைப் பயன்படுத்தியே ஒரு ஊருக்குத் தேவையான குடிநீர் தொட்டியின் அளவைத் திட்டமிடுகின்றனர்.',
        conceptKey: 'Volume & Capacity'
      }
    ]
  },
  c9_mat_ch8: {
    id: 'vid_c9_mat_ch8',
    chapterId: 'c9_mat_ch8',
    titleEn: 'Animated Concept: Statistics — Finding Truth in Data',
    titleTa: 'காணொளி விளக்கம்: புள்ளியியல் — தரவுகளில் உண்மையைக் கண்டறிதல்',
    durationSeconds: 190,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'From Raw Numbers to Grouped Frequency',
        titleTa: 'தரவுகளை அட்டவணைப்படுத்துதல்',
        visualDescription: 'Thousands of student test scores clustering into organized class intervals 0-10, 10-20, 20-30 with tally marks.',
        narrationEn: 'Raw numbers can be overwhelming. Grouping data into class intervals reveals patterns that our brains can understand immediately.',
        narrationTa: 'ஆயிரக்கணக்கான எண்களைப் பிரிவு இடைவெளிகளில் ஒழுங்குபடுத்தும் போது, அவற்றின் இயல்பை எளிதாகப் புரிந்து கொள்ள முடிகிறது.',
        conceptKey: 'Frequency Distributions'
      },
      {
        sceneNumber: 2,
        titleEn: 'Histogram vs Bar Chart: Continuous Flow',
        titleTa: 'செவ்வகப்படமும் நிகழ்வெண் பலகோணமும்',
        visualDescription: 'Continuous bars touching without gaps, with a smooth frequency polygon riding the crest of every bar midpoint.',
        narrationEn: 'Histograms have no gaps because continuous real-world variables like height, time, and weight flow smoothly across bins.',
        narrationTa: 'காலம், எடை மற்றும் உயரம் ஆகியவை தொடர்ச்சியானவை என்பதால், நிகழ்வெண் செவ்வகப்படத்தில் இடைவெளி இருப்பதில்லை.',
        conceptKey: 'Histogram & Polygon Construction'
      },
      {
        sceneNumber: 3,
        titleEn: 'Mean, Median & Mode: The Three Central Measures',
        titleTa: 'சராசரி, இடைநிலை, முகடு',
        visualDescription: 'A seesaw balancing at the arithmetic Mean, the middle student marking the Median, and the tallest stack showing the Mode.',
        narrationEn: 'Mean balances total weight, Median marks the middle ranking, and Mode highlights the most popular choice in modern data science!',
        narrationTa: 'சராசரி சமநிலையைக் காட்டுகிறது; இடைநிலை நடுமையத்தைக் குறிக்கிறது; முகடு மக்கள் அதிகம் விரும்பும் மதிப்பைக் காட்டுகிறது!',
        conceptKey: 'Central Tendency'
      }
    ]
  },
  c9_mat_ch9: {
    id: 'vid_c9_mat_ch9',
    chapterId: 'c9_mat_ch9',
    titleEn: 'Animated Concept: Probability — Predicting the Unpredictable',
    titleTa: 'காணொளி விளக்கம்: நிகழ்தகவு — கணிக்க முடியாததை கணிக்கும் கலை',
    durationSeconds: 195,
    scenes: [
      {
        sceneNumber: 1,
        titleEn: 'Coin Tosses & The Scale of Certainty',
        titleTa: 'நாணயச் சுண்டலும் சாத்தியக் கூறுகளும்',
        visualDescription: 'A coin spinning in slow motion between 0 (Impossible event) and 1 (Certain event) with 0.5 fair chance at the center.',
        narrationEn: 'Probability measures chance on a scale from 0 to 1. An impossible event is 0, a certain event is 1, and a fair coin toss sits right at 0.5.',
        narrationTa: 'நிகழ்தகவு என்பது 0 முதல் 1 வரையிலான அளவுகோல். இயலாத நிகழ்ச்சி 0; உறுதியான நிகழ்ச்சி 1; நாணயச் சுண்டல் நடுவே 0.5-ல் அமைகிறது.',
        conceptKey: 'Empirical Probability Basics'
      },
      {
        sceneNumber: 2,
        titleEn: 'Mapping the Full Sample Space (S)',
        titleTa: 'முழு கூறுவெளியை வரைதல்',
        visualDescription: 'A probability tree branching out into all 4 outcomes {HH, HT, TH, TT} when flipping two coins simultaneously.',
        narrationEn: 'By drawing a probability tree, we ensure no possible outcome is missed. The total sample space n(S) forms the denominator of every calculation.',
        narrationTa: 'மர வரைபடம் அனைத்து சாத்தியங்களையும் விடுபடாமல் காட்டுகிறது. கூறுவெளி n(S) அனைத்து நிகழ்தகவு கணக்குகளின் பகுதியாக அமைகிறது.',
        conceptKey: 'Sample Space & Tree Diagrams'
      },
      {
        sceneNumber: 3,
        titleEn: 'Real-World Weather & Artificial Intelligence',
        titleTa: 'வானிலை முன்னறிவிப்பும் செயற்கை நுண்ணறிவும்',
        visualDescription: 'Satellites calculating 80% rain probability and self-driving cars evaluating pedestrian paths with empirical probability.',
        narrationEn: 'Weather forecasts, cricket match predictions, and AI self-driving cars all calculate empirical probability to make smart real-time decisions!',
        narrationTa: 'வானிலை முன்னறிவிப்பு, கிரிக்கெட் வெற்றி வாய்ப்பு மற்றும் செயற்கை நுண்ணறிவு கார்கள் யாவும் நிகழ்தகவு தத்துவத்தின் அடிப்படையிலேயே இயங்குகின்றன!',
        conceptKey: 'Real-Life Probability Applications'
      }
    ]
  }
};
