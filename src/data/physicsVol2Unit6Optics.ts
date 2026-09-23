import { PhysicsChapter } from './class12PhysicsCurriculum';

export const CHAPTER_6_OPTICS: PhysicsChapter = {
  chapterNumber: 6,
  chapterName: 'Optics (Ray & Wave Optics)',
  chapterNameTa: 'ஒளியியல் (கதிர் மற்றும் அலை ஒளியியல்)',
  unitNumber: 6,
  unitName: 'Optics',
  unitNameTa: 'ஒளியியல்',
  importance: 'High-Yield (12-15 Marks in Board Exam)',
  overview: 'Comprehensive study of light covering Ray Optics (Reflection, Refraction, Total Internal Reflection, Single Spherical Surfaces, Lens Maker’s Formula, Prism, Optical Instruments) and Wave Optics (Huygens’ Principle, Young’s Double Slit Experiment, Interference in Thin Films, Single Slit Diffraction, Polarisation, Brewster’s & Malus’s Laws).',
  overviewTa: 'கதிர் ஒளியியல் (எதிரொளிப்பு, ஒளிவிலகல், முழு அக எதிரொளிப்பு, லென்ஸ் உருவாக்குபவரின் சூத்திரம், முப்பட்டகம், ஒளியியல் கருவிகள்) மற்றும் அலை ஒளியியல் (ஹைகன்ஸ் தத்துவம், யங் இரட்டைப் பிளவு ஆய்வு, விளிம்பு விளைவு, தளவிளைவு, புரூஸ்டர் விதி மற்றும் மாலஸ் விதி) ஆகியவற்றின் முழுமையான விளக்கம்.',
  learningObjectives: [
    'Master Cartesian sign conventions, mirror equation, and magnification for spherical mirrors.',
    'Understand Snell’s law, Total Internal Reflection, critical angle, and applications in optical fibres.',
    'Derive the Lens Maker’s Formula and equivalent focal length of thin lenses in contact.',
    'Analyze dispersion of light through a prism and derive the refractive index equation.',
    'Explain Huygens’ wave theory and prove the laws of reflection and refraction using wavefronts.',
    'Derive fringe width expression in Young’s Double Slit Experiment and understand conditions for interference.',
    'Distinguish Fresnel and Fraunhofer diffraction, and determine central maximum width in single slit diffraction.',
    'Understand polarization by reflection (Brewster’s Law), refraction (Pile of plates), and Malus’s Law.'
  ],
  prerequisites: [
    'Basic geometry and trigonometry',
    'Electromagnetic wave nature of light',
    'Concept of speed of light in different optical media ($v = c/n$)'
  ],
  everydayApplications: [
    'Endoscopy and high-speed broadband internet via total internal reflection in optical fibre cables',
    'Eyeglasses, contact lenses, and camera lenses designed using Lens Maker’s formula',
    'Rainbow formation due to dispersion, refraction, and internal reflection in raindrops',
    'Polarized sunglasses and anti-glare smartphone screens reducing glare using Malus’s law',
    'Compound microscopes and astronomical telescopes for biological and celestial observations'
  ],
  historicalBackground: 'Optics evolved from Newton’s Corpuscular Theory (1675) to Huygens’ Wave Theory (1678), reinforced by Thomas Young’s Double Slit Experiment (1801) demonstrating interference, and Augustin-Jean Fresnel’s mathematical wave formulation of diffraction (1815). Etienne-Louis Malus discovered polarization by reflection in 1808, and David Brewster established the polarizing angle relationship in 1812.',
  scientistsAssociated: [
    'Sir Isaac Newton (Corpuscular theory & dispersion of light)',
    'Christiaan Huygens (Wave theory & secondary wavelets)',
    'Thomas Young (Principle of superposition & double slit interference)',
    'Augustin-Jean Fresnel (Wave theory of diffraction & half-period zones)',
    'David Brewster (Brewster’s law of polarization)',
    'Etienne-Louis Malus (Malus’s cosine-squared intensity law)'
  ],
  topics: [
    {
      id: 'optics-6.1',
      topicNumber: '6.1',
      title: 'Ray Optics: Reflection and Refraction at Spherical Surfaces',
      titleTa: 'கதிர் ஒளியியல்: எதிரொளிப்பு மற்றும் கோளப்பரப்பில் ஒளிவிலகல்',
      beginnerExplanation: 'Ray optics treats light as straight rays that reflect off polished mirrors according to the law of reflection (angle of incidence equals angle of reflection) and bend when passing into a different optical density according to Snell’s law ($n_1 \sin i = n_2 \sin r$).',
      beginnerExplanationTa: 'கதிர் ஒளியியலில் ஒளி நேர்க்கோட்டு கதிர்களாகக் கருதப்படுகிறது. எதிரொளிப்பு விதியின்படி படுகோணம் எதிரொளிப்புக் கோணத்திற்கு சமம். ஸ்நெல் விதியின்படி ($n_1 \sin i = n_2 \sin r$) ஒளி ஒரு ஊடகத்திலிருந்து மற்றொரு ஊடகத்திற்குச் செல்லும்போது விலகல் அடைகிறது.',
      coreConcepts: [
        'Cartesian Sign Convention: All distances measured from pole/optical center; direction of incident light is positive.',
        'Mirror Equation: $\\frac{1}{f} = \\frac{1}{v} + \\frac{1}{u}$ where $f = R/2$.',
        'Snell’s Law of Refraction: $n_{21} = \\frac{n_2}{n_1} = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$.',
        'Lateral Magnification: $m = \\frac{h_2}{h_1} = -\\frac{v}{u}$ for mirrors; $m = \\frac{v}{u}$ for lenses.'
      ],
      definitions: [
        {
          term: 'Refractive Index (ஒளிவிலகல் எண்)',
          termTa: 'ஒளிவிலகல் எண்',
          definitionEn: 'The ratio of the speed of light in vacuum (c) to the speed of light in the medium (v): $n = c/v$.',
          definitionTa: 'வெற்றிடத்தில் ஒளியின் திசைவேகத்திற்கும் (c) குறிப்பிட்ட ஊடகத்தில் ஒளியின் திசைவேகத்திற்கும் (v) உள்ள தகவு ஒளிவிலகல் எண் எனப்படும்.',
          keyPoints: ['Dimensionless scalar quantity', 'Always $\\ge 1$', 'Depends on the wavelength of light ($\lambda$)']
        },
        {
          term: 'Optical Path (ஒளியியல் பாதை)',
          termTa: 'ஒளியியல் பாதை',
          definitionEn: 'The distance ($d\'$) that light travels in vacuum in the same time it travels a distance $d$ in a medium of refractive index $n$: $d\' = n \\cdot d$.',
          definitionTa: 'n ஒளிவிலகல் எண் கொண்ட ஊடகத்தில் d தொலைவை ஒளி கடக்கும் அதே நேரத்தில், வெற்றிடத்தில் அது கடக்கும் தொலைவு ஒளியியல் பாதை எனப்படும் ($d\' = n \\cdot d$).',
          keyPoints: ['Optical path is always greater than or equal to physical path', 'Used to calculate phase differences in wave optics']
        }
      ],
      analogies: 'Refraction is like a lawnmower crossing from smooth pavement onto thick grass at an angle: the wheel that hits the grass first slows down, causing the lawnmower to pivot towards the normal.',
      commonMisconceptions: [
        'Optical density is the same as mass density (False: kerosene has lower mass density than water but higher optical refractive index).'
      ]
    },
    {
      id: 'optics-6.2',
      topicNumber: '6.2',
      title: 'Total Internal Reflection and Optical Fibres',
      titleTa: 'முழு அக எதிரொளிப்பு மற்றும் ஒளியிழை',
      beginnerExplanation: 'When light travels from an optically denser medium to a rarer medium at an angle of incidence greater than the critical angle ($i > i_c$), no light refracts; instead, 100% of the light reflects back into the denser medium.',
      beginnerExplanationTa: 'ஒளிக்கதிர் அடர்மிகு ஊடகத்திலிருந்து அடர்குறை ஊடகத்திற்குச் செல்லும்போது, படுகோணம் மாறுநிலைக் கோணத்தை விட அதிகமாக இருந்தால் ($i > i_c$), ஒளி விலகலடையாமல் முழுவதுமாக அதே அடர்மிகு ஊடகத்திற்குள்ளேயே எதிரொளிக்கப்படுகிறது.',
      coreConcepts: [
        'Critical Angle Condition: $\\sin i_c = \\frac{n_2}{n_1} = \\frac{1}{n}$ (when rarer medium is air).',
        'Conditions for TIR: 1) Light must travel from denser to rarer medium; 2) Angle of incidence must exceed critical angle ($i > i_c$).',
        'Optical Fibre Construction: Core of higher refractive index ($n_1$) surrounded by cladding of lower refractive index ($n_2 < n_1$).',
        'Acceptance Angle ($i_a$) and Numerical Aperture: $\\text{NA} = \\sin i_a = \\sqrt{n_1^2 - n_2^2}$.'
      ],
      definitions: [
        {
          term: 'Critical Angle (மாறுநிலைக் கோணம்)',
          termTa: 'மாறுநிலைக் கோணம்',
          definitionEn: 'The angle of incidence in the denser medium for which the angle of refraction in the rarer medium becomes $90^\\circ$.',
          definitionTa: 'அடர்மிகு ஊடகத்தில் எந்த படுகோணத்திற்கு அடர்குறை ஊடகத்தில் விலகுகோணம் $90^\\circ$ ஆகிறதோ, அந்த படுகோணம் மாறுநிலைக் கோணம் ($i_c$) எனப்படும்.',
          keyPoints: ['Depends on nature of pair of media and wavelength of light', 'Diamond has small critical angle $\\approx 24.4^\\circ$']
        }
      ],
      analogies: 'TIR is like skipping a flat stone across a calm lake: at shallow angles (large angle of incidence from normal), the stone bounces completely off the surface instead of plunging into the water.',
      commonMisconceptions: [
        'TIR can happen when light goes from air to glass (False: TIR only occurs from denser to rarer medium).'
      ]
    },
    {
      id: 'optics-6.3',
      topicNumber: '6.3',
      title: 'Lens Maker’s Formula and Thin Lenses Combination',
      titleTa: 'லென்ஸ் உருவாக்குபவரின் சூத்திரம் மற்றும் மெல்லிய லென்ஸ்களின் சேர்க்கை',
      beginnerExplanation: 'Lens Maker’s formula relates the focal length of a lens to the refractive index of its material and the radii of curvature of its two spherical refracting surfaces.',
      beginnerExplanationTa: 'லென்சின் குவியத் தொலைவை அதன் பொருளின் ஒளிவிலகல் எண் மற்றும் இரு கோளப்பரப்புகளின் வளைவு ஆரங்களுடன் தொடர்புபடுத்தும் சமன்பாடு லென்ஸ் உருவாக்குபவரின் சூத்திரமாகும்.',
      coreConcepts: [
        'Refraction at Single Spherical Surface: $\\frac{n_2}{v} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R}$.',
        'Lens Maker’s Formula: $\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)$.',
        'Thin Lens Formula: $\\frac{1}{f} = \\frac{1}{v} - \\frac{1}{u}$.',
        'Power of Lens: $P = \\frac{1}{f(\\text{in meters})}$, unit is Dioptre (D).',
        'Combination of Two Thin Lenses in Contact: $\\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}$ and $P = P_1 + P_2$.'
      ],
      definitions: [
        {
          term: 'Power of a Lens (லென்சின் திறன்)',
          termTa: 'லென்சின் திறன்',
          definitionEn: 'The ability of a lens to converge or diverge light rays, measured as the reciprocal of its focal length in meters: $P = 1/f$.',
          definitionTa: 'ஒளிக்கதிர்களைக் குவிக்கும் அல்லது விரிக்கும் லென்சின் திறன், மீட்டரில் அளவிடப்பட்ட அதன் குவியத்தொலைவின் தலைகீழ் மதிப்பிற்கு சமமாகும் ($P = 1/f$).',
          keyPoints: ['SI Unit: Dioptre (D) or $\\text{m}^{-1}$', 'Convex lens has positive power; Concave lens has negative power']
        }
      ],
      analogies: 'A thicker, more curved lens bends light rays faster over a shorter distance, just as a steeper bicycle ramp launches a rider upwards more abruptly.',
      commonMisconceptions: [
        'If a lens is cut vertically in half, its focal length doubles ($f\' = 2f$) and power halves ($P\' = P/2$); but if cut horizontally in half, focal length remains the same ($f\' = f$) while image intensity halves.'
      ]
    },
    {
      id: 'optics-6.4',
      topicNumber: '6.4',
      title: 'Prism: Refraction, Angle of Deviation, and Dispersive Power',
      titleTa: 'முப்பட்டகம்: ஒளிவிலகல், திசைமாறுபாட்டுக் கோணம் மற்றும் நிறப்பிரிகை திறன்',
      beginnerExplanation: 'When light passes through a triangular glass prism, it suffers two refractions at inclined faces, resulting in a net angular deviation ($d$). Because refractive index varies with wavelength ($n_{violet} > n_{red}$), white light splits into its component spectrum (VIBGYOR).',
      beginnerExplanationTa: 'முக்கோண முப்பட்டகத்தின் வழியே ஒளி செல்லும்போது, இரு சாய்தளப் பரப்புகளில் விலகலடைந்து திசைமாறுபாட்டுக் கோணத்தை ($d$) உருவாக்குகிறது. ஒளிவிலகல் எண் அலைநீளத்தைப் பொறுத்து மாறுபடுவதால் வெண்ணிற ஒளி நிறப்பிரிகையடைந்து நிறமாலையாக (VIBGYOR) பிரிகிறது.',
      coreConcepts: [
        'Relation between angles: $A + d = i_1 + i_2$ and $r_1 + r_2 = A$.',
        'Minimum Deviation Condition ($D$): At $d = D$, $i_1 = i_2 = i$ and $r_1 = r_2 = r = A/2$.',
        'Refractive Index of Prism Material: $n = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$.',
        'Dispersive Power: $\\omega = \\frac{\\delta_V - \\delta_R}{\\delta_Y} = \\frac{n_V - n_R}{n_Y - 1}$.'
      ],
      definitions: [
        {
          term: 'Angle of Minimum Deviation (சிறு திசைமாறுபாட்டுக் கோணம்)',
          termTa: 'சிறு திசைமாறுபாட்டுக் கோணம்',
          definitionEn: 'The minimum value of angular deviation suffered by a ray of light passing symmetrically through a prism, where the refracted ray inside is parallel to the base.',
          definitionTa: 'முப்பட்டகத்தின் வழியே செல்லும் ஒளிக்கதிர் சமச்சீராகச் செல்லும்போது ஏற்படும் மிகக்குறைந்த திசைமாறுபாட்டுக் கோணம் சிறு திசைமாறுபாட்டுக் கோணம் (D) எனப்படும்.',
          keyPoints: ['At minimum deviation, angle of incidence equals angle of emergence ($i = e$)', 'Light ray inside the prism travels parallel to the base']
        }
      ],
      analogies: 'Passing through a prism is like runners of different leg lengths entering mud: shorter-legged runners (violet light / short wavelength) slow down and get deflected far more than long-striding runners (red light / long wavelength).',
      commonMisconceptions: [
        'Minimum deviation happens for all colors at the same angle (False: violet light experiences greater minimum deviation than red light).'
      ]
    },
    {
      id: 'optics-6.5',
      topicNumber: '6.5',
      title: 'Wave Optics: Huygens’ Principle and Wavefronts',
      titleTa: 'அலை ஒளியியல்: ஹைகன்ஸ் தத்துவம் மற்றும் அலைமுகப்பு',
      beginnerExplanation: 'Huygens proposed that light travels as waves. A wavefront is the locus of all points in a medium vibrating in the same phase. Every point on a wavefront acts as a secondary source emitting spherical wavelets that propagate forward with the speed of light.',
      beginnerExplanationTa: 'ஒளி அலைகளாகப் பரவுகிறது என்று ஹைகன்ஸ் கூறினார். ஒரே கட்டத்தில் அதிரும் அனைத்து புள்ளிகளின் இயங்குவரையே அலைமுகப்பு ஆகும். அலைமுகப்பிலுள்ள ஒவ்வொரு புள்ளியும் இரண்டாம் நிலை அலைக்குட்டிகளை உருவாக்கும் மூலமாகச் செயல்படுகிறது.',
      coreConcepts: [
        'Types of Wavefronts: Spherical (point source), Cylindrical (linear source), Plane (source at infinity).',
        'Huygens’ Principle: 1) Every point on a primary wavefront acts as a source of secondary wavelets; 2) The forward envelope touching these wavelets gives the new wavefront position.',
        'Proof of Laws of Reflection using Wavefronts: $\\sin i = \\sin r \\implies i = r$.',
        'Proof of Snell’s Law of Refraction: $\\frac{\\sin i}{\\sin r} = \\frac{v_1 t}{v_2 t} = \\frac{v_1}{v_2} = \\frac{n_2}{n_1}$.'
      ],
      definitions: [
        {
          term: 'Wavefront (அலைமுகப்பு)',
          termTa: 'அலைமுகப்பு',
          definitionEn: 'The continuous locus of all neighboring particles/points vibrating in the same phase in a medium.',
          definitionTa: 'ஒரு ஊடகத்தில் ஒரே கட்டத்தில் அதிரும் அனைத்து துகள்களையும்/புள்ளிகளையும் இணைக்கும் தொடர்ச்சியான மேற்பரப்பு அலைமுகப்பு எனப்படும்.',
          keyPoints: ['Rays of light are always perpendicular to the wavefront', 'Energy propagates normal to the wavefront']
        }
      ],
      analogies: 'A wavefront is like circular ripples expanding on a calm pond when a stone is dropped; if many pebbles drop simultaneously in a line, the ripples combine into a straight plane ripple.',
      commonMisconceptions: [
        'Wavefronts travel backwards (False: Huygens’ envelope principle only applies to the forward propagating envelope; backward wavelets have zero amplitude).'
      ]
    },
    {
      id: 'optics-6.6',
      topicNumber: '6.6',
      title: 'Interference of Light: Young’s Double Slit Experiment (YDSE)',
      titleTa: 'ஒளி குறுக்கீட்டு விளைவு: யங் இரட்டைப் பிளவு ஆய்வு',
      beginnerExplanation: 'When two coherent light waves of equal frequency and constant phase difference superpose, the resultant intensity redistributes in space, forming alternating bright and dark fringes called an interference pattern.',
      beginnerExplanationTa: 'சம அதிர்வெண்ணும் மாறா கட்ட வேறுபாடும் கொண்ட இரு ஓரியல் ஒளி அலைகள் மேற்பொருந்தும்போது, அவற்றின் ஒளிச்செறிவு மறுபகிர்வு செய்யப்பட்டு மாறிமாறி பொலிவு மற்றும் கருமை வரிகளை உருவாக்குவது குறுக்கீட்டு விளைவு ஆகும்.',
      coreConcepts: [
        'Coherent Sources: Sources having same frequency, wavelength, and constant or zero phase difference.',
        'Constructive Interference (Bright Fringes): Path difference $\\delta = n\\lambda$ ($n = 0, 1, 2, \\dots$), Phase difference $\\phi = 2n\\pi$.',
        'Destructive Interference (Dark Fringes): Path difference $\\delta = (2n - 1)\\frac{\\lambda}{2}$ ($n = 1, 2, \\dots$), Phase difference $\\phi = (2n - 1)\\pi$.',
        'Fringe Width Formula: $\\beta = \\frac{\\lambda D}{d}$ (Bright and dark fringes are equally spaced).',
        'Interference in Thin Films: Path difference $\\delta = 2\\mu t \\cos r \\pm \\frac{\\lambda}{2}$ due to Stokes phase shift on reflection.'
      ],
      definitions: [
        {
          term: 'Coherent Sources (ஓரியல் மூலங்கள்)',
          termTa: 'ஓரியல் மூலங்கள்',
          definitionEn: 'Two sources of light are said to be coherent if they emit light waves of the same frequency, wavelength, and maintain a constant or zero phase difference over time.',
          definitionTa: 'சம அதிர்வெண், சம அலைநீளம் மற்றும் காலத்தைப் பொறுத்து மாறாத கட்ட வேறுபாட்டைக் கொண்ட ஒளி அலைகளை வெளியிடும் இரு மூலங்கள் ஓரியல் மூலங்கள் எனப்படும்.',
          keyPoints: ['Two independent light bulbs can never be coherent', 'Coherent sources are obtained by division of wavefront (YDSE) or amplitude (Thin films)']
        },
        {
          term: 'Fringe Width (பட்டை அகலம்)',
          termTa: 'பட்டை அகலம்',
          definitionEn: 'The linear distance between any two consecutive bright fringes or any two consecutive dark fringes: $\\beta = \\frac{\\lambda D}{d}$.',
          definitionTa: 'அடுத்தடுத்த இரு பொலிவு வரிகள் அல்லது அடுத்தடுத்த இரு இருள் வரிகளுக்கு இடைப்பட்ட நேர்க்கோட்டுத் தொலைவு பட்டை அகலம் எனப்படும்.',
          keyPoints: ['Directly proportional to wavelength ($\lambda$) and screen distance ($D$)', 'Inversely proportional to slit separation ($d$)']
        }
      ],
      analogies: 'Superposing waves are like two ocean waves meeting: crest meeting crest makes a giant double crest (bright fringe), while crest meeting trough cancels out into flat calm water (dark fringe).',
      commonMisconceptions: [
        'If the entire YDSE apparatus is submerged in water, fringe width stays the same (False: $\lambda\' = \lambda/\mu$, so fringe width decreases: $\beta\' = \beta/\mu$).'
      ]
    },
    {
      id: 'optics-6.7',
      topicNumber: '6.7',
      title: 'Diffraction of Light and Resolving Power',
      titleTa: 'ஒளி விளிம்பு விளைவு மற்றும் பிரிதிறன்',
      beginnerExplanation: 'Diffraction is the bending of light waves around sharp corners or edges of an obstacle whose size is comparable to the wavelength of light, spreading light into the geometrical shadow region.',
      beginnerExplanationTa: 'ஒளியின் அலைநீளத்திற்கு இணையான அளவு கொண்ட தடைகளின் கூர்மையான விளிம்புகளில் ஒளி வளைந்து சென்று வடிவவியல் நிழல் பகுதிக்குள் பரவுவது விளிம்பு விளைவு எனப்படும்.',
      coreConcepts: [
        'Condition for Diffraction: Size of obstacle ($a$) must be comparable to wavelength of light ($a \\approx \\lambda$).',
        'Single Slit Fraunhofer Diffraction Minima Condition: $a \\sin\\theta = n\\lambda$ ($n = \\pm 1, \\pm 2, \\dots$).',
        'Secondary Maxima Condition: $a \\sin\\theta = (2n + 1)\\frac{\\lambda}{2}$.',
        'Width of Central Bright Maximum: $\\beta_0 = \\frac{2\\lambda D}{a}$ (Twice as wide as secondary maxima).',
        'Rayleigh’s Criterion for Resolution: Limit of resolution for circular aperture $\\theta_{min} = \\frac{1.22\\lambda}{D}$.'
      ],
      definitions: [
        {
          term: 'Diffraction (விளிம்பு விளைவு)',
          termTa: 'விளிம்பு விளைவு',
          definitionEn: 'The phenomenon of bending of light waves around the edges of an obstacle or slit of dimensions comparable to the wavelength of light.',
          definitionTa: 'ஒளியின் அலைநீளத்திற்கு ஒப்பான அளவுள்ள தடை அல்லது பிளவின் விளிம்புகளில் ஒளி வளைந்து செல்லும் நிகழ்வு விளிம்பு விளைவு எனப்படும்.',
          keyPoints: ['Sound waves diffract easily because sound wavelength is $\\sim 1$ meter', 'Light waves diffract only at microscopic apertures ($\\sim 500$ nm)']
        }
      ],
      analogies: 'Sound easily bends around open doorways because audio wavelengths are around a meter, whereas light (nanometer wavelength) casts sharp shadows unless passing through a micro-slit.',
      commonMisconceptions: [
        'Interference and diffraction are identical (False: Interference is superposition of waves from two distinct slits; diffraction is superposition of secondary wavelets from different parts of the same wavefront).'
      ]
    },
    {
      id: 'optics-6.8',
      topicNumber: '6.8',
      title: 'Polarisation of Light: Brewster’s Law and Malus’s Law',
      titleTa: 'ஒளி தளவிளைவு: புரூஸ்டர் விதி மற்றும் மாலஸ் விதி',
      beginnerExplanation: 'Ordinary light is unpolarised with electric field vectors vibrating in all perpendicular planes. Polarisation restricts the electric field vibrations to a single plane, proving that light is a transverse wave.',
      beginnerExplanationTa: 'சாதாரண ஒளியில் மின்புல அதிர்வுகள் அனைத்து திசைகளிலும் பரவியுள்ளன. இந்த அதிர்வுகளை ஒரே தளத்திற்குள் கட்டுப்படுத்துவதே தளவிளைவு ஆகும். இது ஒளி ஒரு குறுக்கலை என்பதை நிரூபிக்கிறது.',
      coreConcepts: [
        'Transverse Nature Proof: Longitudinal waves (sound) cannot be polarised; only transverse waves (light) exhibit polarisation.',
        'Malus’s Law: When completely plane polarised light of intensity $I_0$ passes through an analyser, transmitted intensity is $I = I_0 \\cos^2\\theta$.',
        'Polarisation by Reflection (Brewster’s Law): When unpolarised light strikes at polarizing angle ($i_p$), reflected light is completely plane polarised, and reflected ray is perpendicular to refracted ray ($i_p + r_p = 90^\\circ$). Refractive index $n = \\tan i_p$.',
        'Polaroids: Thin plastic sheets containing aligned micro-crystals of herapathite (iodoquinine sulphate) that absorb light vibrating in one plane (dichroism).'
      ],
      definitions: [
        {
          term: 'Brewster’s Law (புரூஸ்டர் விதி)',
          termTa: 'புரூஸ்டர் விதி',
          definitionEn: 'The tangent of the polarising angle ($i_p$) for a transparent refracting medium is numerically equal to the refractive index ($n$) of the medium: $n = \\tan i_p$.',
          definitionTa: 'ஒரு ஒளிபுகும் ஊடகத்தின் தளவிளைவுக் கோணத்தின் ($i_p$) டேன்ஜென்ட் மதிப்பு, அந்த ஊடகத்தின் ஒளிவிலகல் எண்ணிற்கு ($n$) சமமாகும் ($n = \\tan i_p$).',
          keyPoints: ['At polarising angle, reflected and refracted rays are mutually perpendicular ($i_p + r_p = 90^\\circ$)', 'Reflected light is 100% plane polarised perpendicular to plane of incidence']
        },
        {
          term: 'Malus’s Law (மாலஸ் விதி)',
          termTa: 'மாலஸ் விதி',
          definitionEn: 'The intensity of plane polarised light transmitted through an analyser varies directly as the square of the cosine of the angle (\\theta) between the transmission axes of the polariser and analyser: $I = I_0 \\cos^2\\theta$.',
          definitionTa: 'பகுப்பாய்வி வழியே வெளியேறும் தளவிளைவுற்ற ஒளியின் செறிவு, தளவிளைவாக்கி மற்றும் பகுப்பாய்வியின் ஒளி அச்சுக்களுக்கு இடையேயான கோணத்தின் ($\theta$) கொசைன் மதிப்பின் இருமடிக்கு நேர்விகிதத்தில் இருக்கும் ($I = I_0 \\cos^2\\theta$).',
          keyPoints: ['When $\\theta = 0^\\circ$ or $180^\\circ$, intensity is maximum ($I = I_0$)', 'When $\\theta = 90^\\circ$ (crossed polaroids), transmitted intensity is zero ($I = 0$)']
        }
      ],
      analogies: 'Polarisation is like sliding a flat wooden plank through a vertical picket fence: the plank passes through effortlessly if aligned vertically, but gets completely blocked if turned horizontally.',
      commonMisconceptions: [
        'Sound waves can be polarised (False: sound waves are longitudinal oscillations parallel to propagation, so they cannot be polarised).'
      ]
    }
  ],
  formulas: [
    {
      id: 'F-OPT-01',
      formula: 'n_{21} = \\frac{n_2}{n_1} = \\frac{\\sin i}{\\sin r} = \\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}',
      meaning: 'Snell’s Law of Refraction relating angles, refractive indices, wave speeds, and wavelengths.',
      meaningTa: 'ஸ்நெல் ஒளிவிலகல் விதி.',
      variables: [
        { symbol: 'n_1, n_2', name: 'Refractive indices of medium 1 and 2', nameTa: 'ஊடகங்களின் ஒளிவிலகல் எண்கள்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'i, r', name: 'Angle of incidence and angle of refraction', nameTa: 'படுகோணம் மற்றும் விலகுகோணம்', siUnit: 'rad or degrees', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'v_1, v_2', name: 'Speed of light in media', nameTa: 'ஒளியின் திசைவேகம்', siUnit: 'm/s', dimension: '[M^0 L T^{-1}]' }
      ],
      siUnit: 'Unitless ratio',
      dimension: '[M^0 L^0 T^0]',
      category: 'Fundamental',
      memoryShortcut: 'n1 · sin(i) = n2 · sin(r) → Index times Sine is Constant across boundary!'
    },
    {
      id: 'F-OPT-02',
      formula: '\\sin i_c = \\frac{1}{n}',
      meaning: 'Critical angle for Total Internal Reflection at a denser medium-air boundary.',
      meaningTa: 'மாறுநிலைக் கோணத்திற்கான சமன்பாடு.',
      variables: [
        { symbol: 'i_c', name: 'Critical angle', nameTa: 'மாறுநிலைக் கோணம்', siUnit: 'degrees', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'n', name: 'Refractive index of denser medium', nameTa: 'அடர்மிகு ஊடகத்தின் ஒளிவிலகல் எண்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'degrees / radians',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Sin of Critical = 1 / n'
    },
    {
      id: 'F-OPT-03',
      formula: '\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
      meaning: 'Lens Maker’s Formula for calculating focal length from material refractive index and radii of curvature.',
      meaningTa: 'லென்ஸ் உருவாக்குபவரின் சமன்பாடு.',
      variables: [
        { symbol: 'f', name: 'Focal length of lens', nameTa: 'குவியத்தொலைவு', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'n', name: 'Refractive index of lens material relative to surrounding', nameTa: 'லென்சின் ஒப்புமை ஒளிவிலகல் எண்', siUnit: 'Unitless', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'R_1, R_2', name: 'Radii of curvature of first and second surfaces', nameTa: 'வளைவு ஆரங்கள்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' }
      ],
      siUnit: 'm',
      dimension: '[M^0 L^1 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: '1/f = (n - 1) · (1/R1 - 1/R2)'
    },
    {
      id: 'F-OPT-04',
      formula: 'n = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
      meaning: 'Refractive index of prism material from apex angle A and angle of minimum deviation D.',
      meaningTa: 'முப்பட்டகப் பொருளின் ஒளிவிலகல் எண் சமன்பாடு.',
      variables: [
        { symbol: 'A', name: 'Angle of prism (Apex angle)', nameTa: 'முப்பட்டகக் கோணம்', siUnit: 'degrees', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'D', name: 'Angle of minimum deviation', nameTa: 'சிறு திசைமாறுபாட்டுக் கோணம்', siUnit: 'degrees', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'Unitless',
      dimension: '[M^0 L^0 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Prism Index = Sin((A+D)/2) / Sin(A/2)'
    },
    {
      id: 'F-OPT-05',
      formula: '\\beta = \\frac{\\lambda D}{d}',
      meaning: 'Fringe width in Young’s Double Slit Experiment (YDSE).',
      meaningTa: 'யங் இரட்டைப் பிளவு ஆய்வில் பட்டை அகலம்.',
      variables: [
        { symbol: '\\beta', name: 'Fringe width (bright or dark)', nameTa: 'பட்டை அகலம்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: '\\lambda', name: 'Wavelength of monochromatic light', nameTa: 'ஒளியின் அலைநீளம்', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'D', name: 'Distance between slits and screen', nameTa: 'பிளவுகளுக்கும் திரைக்குமான தொலைவு', siUnit: 'm', dimension: '[M^0 L^1 T^0]' },
        { symbol: 'd', name: 'Distance between the two coherent slits', nameTa: 'இரு பிளவுகளுக்கு இடைப்பட்ட தொலைவு', siUnit: 'm', dimension: '[M^0 L^1 T^0]' }
      ],
      siUnit: 'm',
      dimension: '[M^0 L^1 T^0]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Beta = Lambda · Big D / small d'
    },
    {
      id: 'F-OPT-06',
      formula: 'n = \\tan i_p \\quad \\text{and} \\quad I = I_0 \\cos^2\\theta',
      meaning: 'Brewster’s Law of Polarisation by reflection and Malus’s Law for transmitted intensity.',
      meaningTa: 'புரூஸ்டர் விதி மற்றும் மாலஸ் விதி.',
      variables: [
        { symbol: 'i_p', name: 'Polarising angle (Brewster angle)', nameTa: 'தளவிளைவுக் கோணம்', siUnit: 'degrees', dimension: '[M^0 L^0 T^0]' },
        { symbol: 'I_0, I', name: 'Incident and transmitted polarised light intensity', nameTa: 'படு மற்றும் வெளியேறும் ஒளிச்செறிவு', siUnit: 'W/m^2', dimension: '[M^1 L^0 T^{-3}]' },
        { symbol: '\\theta', name: 'Angle between polariser and analyser transmission axes', nameTa: 'அச்சுக்களுக்கு இடைப்பட்ட கோணம்', siUnit: 'degrees', dimension: '[M^0 L^0 T^0]' }
      ],
      siUnit: 'W/m^2',
      dimension: '[M^1 L^0 T^{-3}]',
      category: 'Board_Exam_Important',
      memoryShortcut: 'Brewster: n = tan(ip); Malus: I = I0 · cos²(theta)'
    }
  ],
  derivations: [
    {
      id: 'DER-OPT-01',
      title: 'Derivation of Lens Maker’s Formula',
      titleTa: 'லென்ஸ் உருவாக்குபவரின் சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive the relation between focal length f, refractive index n, and radii of curvature R1 and R2 for a thin lens: 1/f = (n - 1)(1/R1 - 1/R2).',
      given: [
        'A thin convex lens of refractive index n2 placed in a medium of refractive index n1.',
        'Radii of curvature of the two spherical surfaces ABC and ADC are R1 and R2.',
        'A point object O placed on the principal axis in medium 1.'
      ],
      toProve: '\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
      steps: [
        {
          stepNumber: 1,
          description: 'Apply the general single spherical surface refraction formula (n2/v - n1/u = (n2 - n1)/R) at the first surface ABC with object distance u, image distance v1, and radius R1.',
          descriptionTa: 'முதல் கோளப்பரப்பு ABC-யில் ஒளிவிலகல் சமன்பாட்டைப் பயன்படுத்துக.',
          equation: '\\frac{n_2}{v_1} - \\frac{n_1}{u} = \\frac{n_2 - n_1}{R_1} \\quad \\text{--- (1)}',
          note: 'The real/virtual image I1 formed by first surface acts as a virtual object for the second surface.'
        },
        {
          stepNumber: 2,
          description: 'Apply refraction at second surface ADC from medium 2 to medium 1 with object distance v1, final image distance v, and radius R2.',
          descriptionTa: 'இரண்டாவது கோளப்பரப்பு ADC-யில் ஒளிவிலகல் சமன்பாட்டைப் பயன்படுத்துக.',
          equation: '\\frac{n_1}{v} - \\frac{n_2}{v_1} = \\frac{n_1 - n_2}{R_2} = -\\frac{n_2 - n_1}{R_2} \\quad \\text{--- (2)}',
          note: 'Light is traveling from medium 2 into medium 1, so indices are swapped.'
        },
        {
          stepNumber: 3,
          description: 'Add equations (1) and (2) together. The intermediate term (n2/v1) cancels out completely.',
          descriptionTa: 'சமன்பாடுகள் (1) மற்றும் (2)-ஐ கூட்டுக. இடைநிலை உறுப்பு (n2/v1) நீங்குகிறது.',
          equation: 'n_1\\left(\\frac{1}{v} - \\frac{1}{u}\\right) = (n_2 - n_1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
          note: 'Dividing both sides by n1 gives (1/v - 1/u) = (n2/n1 - 1)(1/R1 - 1/R2).'
        },
        {
          stepNumber: 4,
          description: 'Set n = n2/n1 (relative refractive index). When object is at infinity (u = \\infty), final image is at focus (v = f).',
          descriptionTa: 'பொருள் ஈறிலாத் தொலைவில் உள்ளபோது (u = \\infty), பிம்பம் குவியத்தில் (v = f) தோன்றும்.',
          equation: '\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
          note: 'Comparing with thin lens formula 1/v - 1/u = 1/f confirms the result.'
        }
      ],
      finalEquation: '\\frac{1}{f} = (n - 1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right)',
      assumptions: [
        'The lens is thin so that thickness of the lens can be neglected compared to radii of curvature.',
        'Aperture of the lens is small and rays are paraxial making small angles with the principal axis.'
      ],
      physicalMeaning: 'Shows that focal length depends not only on the curvature of surfaces, but also on the refractive index of the lens material relative to the surrounding medium.',
      physicalMeaningTa: 'லென்சின் குவியத்தொலைவு அதன் பரப்புகளின் வளைவு ஆரங்கள் மட்டுமின்றி, சுற்றியுள்ள ஊடகத்தைப் பொறுத்த லென்சின் ஒப்புமை ஒளிவிலகல் எண்ணையும் சார்ந்தது என்பதை உணர்த்துகிறது.',
      commonMistakes: [
        'Forgetting sign convention when substituting numerical values for R1 (positive for convex first surface) and R2 (negative for convex second surface).',
        'Confusing lens maker’s formula with thin lens formula (1/v - 1/u = 1/f).'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-OPT-02',
      title: 'Derivation of Fringe Width in Young’s Double Slit Experiment',
      titleTa: 'யங் இரட்டைப் பிளவு ஆய்வில் பட்டை அகலத்திற்கான சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive the mathematical expression for fringe width β = λD/d in Young’s double slit interference.',
      given: [
        'Two narrow parallel slits S1 and S2 separated by a small distance d.',
        'Screen placed at a distance D parallel to the plane of slits (D >> d).',
        'Monochromatic light of wavelength λ illuminates the slits.'
      ],
      toProve: '\\beta = \\frac{\\lambda D}{d}',
      steps: [
        {
          stepNumber: 1,
          description: 'Let P be an arbitrary point on the screen at distance y from the central point O. The path difference between the waves reaching P from S1 and S2 is δ = S2P - S1P.',
          descriptionTa: 'திரையின் மையத்திலிருந்து y தொலைவில் உள்ள புள்ளி P-ஐக் கருதுக. பாதை வேறுபாடு δ = S2P - S1P.',
          equation: '(S_2 P)^2 - (S_1 P)^2 = \\left[D^2 + \\left(y + \\frac{d}{2}\\right)^2\\right] - \\left[D^2 + \\left(y - \\frac{d}{2}\\right)^2\\right] = 2yd',
          note: 'Applying Pythagoras theorem to right-angled triangles S2P N2 and S1P N1.'
        },
        {
          stepNumber: 2,
          description: 'Factorize the LHS: (S2P - S1P)(S2P + S1P) = 2yd. Since D >> d, S2P + S1P ≈ 2D.',
          descriptionTa: 'இடப்பக்கத்தை காரணிப்படுத்துக. D >> d என்பதால் S2P + S1P ≈ 2D எனலாம்.',
          equation: '\\delta = S_2 P - S_1 P = \\frac{2yd}{S_2 P + S_1 P} \\approx \\frac{2yd}{2D} = \\frac{yd}{D}',
          note: 'Hence, Path Difference δ = y·d / D.'
        },
        {
          stepNumber: 3,
          description: 'For the n-th bright fringe (constructive interference), path difference δ = nλ. Find position yn.',
          descriptionTa: 'n-வது பொலிவு வரிக்கு பாதை வேறுபாடு δ = nλ. நிலை yn-ஐக் காண்க.',
          equation: '\\frac{y_n d}{D} = n\\lambda \\implies y_n = \\frac{n\\lambda D}{d}',
          note: 'Positions of bright fringes: y0 = 0, y1 = λD/d, y2 = 2λD/d, ...'
        },
        {
          stepNumber: 4,
          description: 'Calculate fringe width β as the distance between two consecutive bright fringes (yn - yn-1).',
          descriptionTa: 'அடுத்தடுத்த இரு பொலிவு வரிகளுக்கு இடைப்பட்ட பட்டை அகலம் β = yn - yn-1-ஐக் கணக்கிடுக.',
          equation: '\\beta = y_n - y_{n-1} = \\frac{n\\lambda D}{d} - \\frac{(n-1)\\lambda D}{d} = \\frac{\\lambda D}{d}',
          note: 'The same value is obtained for dark fringes (yn = (2n-1)λD/(2d)), proving all fringes are equally wide.'
        }
      ],
      finalEquation: '\\beta = \\frac{\\lambda D}{d}',
      assumptions: [
        'The slit width is very small so that each slit acts as a source of cylindrical/spherical wavefronts.',
        'Screen distance D is much larger than slit separation d (D >> d).'
      ],
      physicalMeaning: 'Proves that interference fringes produced by monochromatic light are equidistant and directly proportional to wavelength and screen distance, but inversely proportional to slit spacing.',
      physicalMeaningTa: 'குறுக்கீட்டு வரிகள் சம இடைவெளியில் அமைந்திருக்கும் என்பதையும், பட்டை அகலம் அலைநீளத்திற்கு நேர்விகிதத்திலும் பிளவுகளுக்கு இடைப்பட்ட தொலைவிற்கு எதிர்த்தகவிலும் இருக்கும் என்பதையும் நிரூபிக்கிறது.',
      commonMistakes: [
        'Interchanging Big D (distance to screen) and small d (slit separation) in the formula.',
        'Writing constructive condition as (2n-1)λ/2 instead of nλ.'
      ],
      examImportance: 'Very Important'
    },
    {
      id: 'DER-OPT-03',
      title: 'Derivation of Refractive Index of Prism Material',
      titleTa: 'முப்பட்டகப் பொருளின் ஒளிவிலகல் எண் சமன்பாட்டைத் தருவித்தல்',
      aim: 'To derive n = sin((A + D)/2) / sin(A/2) for a triangular prism at minimum deviation.',
      given: [
        'A glass prism of apex angle A and refractive index n.',
        'A ray of light incident at angle i1, refracted at r1, striking second surface at r2, and emerging at angle i2.',
        'Angle of deviation is d.'
      ],
      toProve: 'n = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
      steps: [
        {
          stepNumber: 1,
          description: 'From quadrilateral AQNR, the sum of opposite angles ∠A + ∠QNR = 180°. From triangle QNR, r1 + r2 + ∠QNR = 180°. Equating gives A = r1 + r2.',
          descriptionTa: 'நாற்கரம் மற்றும் முக்கோண கோணத் தொடர்புகளிலிருந்து A = r1 + r2 எனக் காண்க.',
          equation: 'A = r_1 + r_2 \\quad \\text{--- (1)}',
          note: 'Angle of prism equals the sum of internal angles of refraction.'
        },
        {
          stepNumber: 2,
          description: 'Total deviation d is the sum of deviations at both faces: d = (i1 - r1) + (i2 - r2) = (i1 + i2) - (r1 + r2) = (i1 + i2) - A. Hence A + d = i1 + i2.',
          descriptionTa: 'மொத்த திசைமாறுபாடு d = (i1 + i2) - A. எனவே A + d = i1 + i2.',
          equation: 'A + d = i_1 + i_2 \\quad \\text{--- (2)}',
          note: 'Sum of prism angle and deviation equals sum of incident and emergent angles.'
        },
        {
          stepNumber: 3,
          description: 'At minimum deviation (d = D), the ray passes symmetrically: i1 = i2 = i and r1 = r2 = r.',
          descriptionTa: 'சிறு திசைமாறுபாட்டு நிலையில் i1 = i2 = i மற்றும் r1 = r2 = r ஆகும்.',
          equation: '2r = A \\implies r = \\frac{A}{2} \\quad \\text{and} \\quad A + D = 2i \\implies i = \\frac{A + D}{2}',
          note: 'Refracted ray travels parallel to the base of the equilateral prism.'
        },
        {
          stepNumber: 4,
          description: 'Apply Snell’s law at the first refracting face: n = sin(i) / sin(r). Substitute i and r.',
          descriptionTa: 'முதல் பரப்பில் ஸ்நெல் விதியைப் பயன்படுத்தி i மற்றும் r மதிப்புகளைப் பிரதியிடுக.',
          equation: 'n = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
          note: 'Standard relation used in spectrometer experiments to find refractive index of solids and liquids.'
        }
      ],
      finalEquation: 'n = \\frac{\\sin\\left(\\frac{A + D}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}',
      assumptions: [
        'Prism has flat, polished optical surfaces and uniform refractive index.'
      ],
      physicalMeaning: 'Enables high-precision determination of refractive index by measuring only angles using a laboratory spectrometer.',
      physicalMeaningTa: 'ஆய்வக நிறமாலைமானியைக் கொண்டு முப்பட்டகக் கோணம் மற்றும் சிறுதிசைமாறுபாட்டுக் கோணத்தை மட்டும் அளவிட்டு ஒளிவிலகல் எண்ணைத் துல்லியமாகக் கணக்கிட உதவுகிறது.',
      commonMistakes: [
        'Assuming i1 = i2 for all angles of deviation (it is true ONLY at minimum deviation d = D).'
      ],
      examImportance: 'Very Important'
    }
  ],
  numericals: [
    {
      title: 'Critical Angle and Total Internal Reflection',
      question: 'The speed of light in a transparent medium is 1.5 × 10⁸ m/s. Calculate the critical angle for total internal reflection when light travels from this medium into air (speed of light in air c = 3 × 10⁸ m/s).',
      questionTa: 'ஒரு ஒளிபுகும் ஊடகத்தில் ஒளியின் திசைவேகம் 1.5 × 10⁸ m/s. இவ்வூடகத்திலிருந்து காற்றுக்குள் ஒளி செல்லும்போது ஏற்படும் முழு அக எதிரொளிப்பிற்கான மாறுநிலைக் கோணத்தைக் காண்க.',
      level: 'Easy',
      given: { 'v': '1.5 × 10⁸ m/s', 'c': '3 × 10⁸ m/s' },
      required: 'Critical angle ic',
      formulaUsed: 'n = c/v \\quad \\text{and} \\quad \\sin i_c = 1/n',
      unitConversions: 'All quantities in SI units.',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate refractive index of the medium n = c/v.',
          math: 'n = \\frac{3 \\times 10^8}{1.5 \\times 10^8} = 2.0'
        },
        {
          stepNumber: 2,
          description: 'Calculate critical angle ic using sin(ic) = 1/n.',
          math: '\\sin i_c = \\frac{1}{2.0} = 0.50 \\implies i_c = \\sin^{-1}(0.5) = 30^\\circ'
        }
      ],
      finalAnswer: '30°',
      siUnit: 'degrees',
      shortcutMethod: 'ic = sin⁻¹(v/c) = sin⁻¹(1.5/3.0) = sin⁻¹(0.5) = 30° directly!',
      commonErrors: 'Dividing v by c upside down.',
      examTip: 'Always state both the refractive index and the inverse sine step clearly.'
    },
    {
      title: 'Fringe Width in Young’s Double Slit Experiment',
      question: 'In a YDSE setup, the two slits are separated by 0.5 mm and the screen is placed 1.0 m away. If monochromatic light of wavelength 500 nm is used, calculate: (i) the fringe width β, and (ii) the distance of the 4th bright fringe from the central maximum.',
      questionTa: 'யங் இரட்டைப் பிளவு ஆய்வில் இரு பிளவுகளுக்கு இடைப்பட்ட தொலைவு 0.5 mm மற்றும் திரையின் தொலைவு 1.0 m. 500 nm அலைநீள ஒளி பயன்படுத்தப்பட்டால்: (i) பட்டை அகலம் β, (ii) மையப் பொலிவிலிருந்து 4-வது பொலிவு வரியின் தொலைவைக் காண்க.',
      level: 'Medium',
      given: { 'd': '0.5 mm = 0.5 × 10⁻³ m', 'D': '1.0 m', 'λ': '500 nm = 500 × 10⁻⁹ m', 'n': '4' },
      required: 'Fringe width β and y4',
      formulaUsed: '\\beta = \\frac{\\lambda D}{d} \\quad \\text{and} \\quad y_n = n \\cdot \\beta',
      unitConversions: 'Convert mm to m (×10⁻³) and nm to m (×10⁻⁹).',
      steps: [
        {
          stepNumber: 1,
          description: 'Calculate fringe width β = (λ · D) / d.',
          math: '\\beta = \\frac{500 \\times 10^{-9} \\times 1.0}{0.5 \\times 10^{-3}} = \\frac{5 \\times 10^{-7}}{5 \\times 10^{-4}} = 1.0 \\times 10^{-3} \\text{ m} = 1.0 \\text{ mm}'
        },
        {
          stepNumber: 2,
          description: 'Calculate distance of 4th bright fringe y4 = 4 · β.',
          math: 'y_4 = 4 \\times 1.0 \\text{ mm} = 4.0 \\text{ mm}'
        }
      ],
      finalAnswer: 'Fringe width β = 1.0 mm, Distance of 4th bright fringe y4 = 4.0 mm',
      siUnit: 'mm (or 1.0 × 10⁻³ m)',
      shortcutMethod: 'β = (500e-9 × 1) / 0.5e-3 = 1 mm; y4 = 4 × 1 mm = 4 mm.',
      commonErrors: 'Forgetting to convert nanometers (10⁻⁹) or millimeters (10⁻³) to meters.',
      examTip: 'Write the conversion factors explicitly in the Given section to secure full marks.'
    },
    {
      title: 'Lens Maker’s Formula and Equivalent Power of Combination',
      question: 'A biconvex lens has surfaces of radii of curvature 20 cm and 30 cm. The refractive index of the glass is 1.5. (a) Calculate its focal length in air. (b) If this lens is placed in contact with a concave lens of focal length 40 cm, find the equivalent focal length and power of the combination.',
      questionTa: 'இருபுற குவி லென்சின் வளைவு ஆரங்கள் 20 cm மற்றும் 30 cm. கண்ணாடியின் ஒளிவிலகல் எண் 1.5. (a) காற்றில் அதன் குவியத்தொலைவைக் காண்க. (b) இந்த லென்ஸ் 40 cm குவியத்தொலைவு கொண்ட குழி லென்சுடன் தொடுமாறு வைக்கப்பட்டால், சேர்க்கையின் தொகுபயன் குவியத்தொலைவு மற்றும் திறனைக் காண்க.',
      level: 'Exam-Level',
      given: { 'R1': '+20 cm = +0.20 m', 'R2': '-30 cm = -0.30 m', 'n': '1.5', 'f2': '-40 cm = -0.40 m' },
      required: 'Focal length f1, Equivalent focal length F, and Total Power P',
      formulaUsed: '\\frac{1}{f_1} = (n-1)\\left(\\frac{1}{R_1} - \\frac{1}{R_2}\\right), \\quad \\frac{1}{F} = \\frac{1}{f_1} + \\frac{1}{f_2}, \\quad P = \\frac{1}{F(\\text{in m})}',
      unitConversions: 'Convert cm to meters for power calculation.',
      steps: [
        {
          stepNumber: 1,
          description: 'Apply Lens Maker’s Formula for the convex lens (R1 = +20 cm, R2 = -30 cm).',
          math: '\\frac{1}{f_1} = (1.5 - 1)\\left(\\frac{1}{20} - \\frac{1}{-30}\\right) = 0.5 \\times \\left(\\frac{1}{20} + \\frac{1}{30}\\right) = 0.5 \\times \\frac{5}{60} = \\frac{1}{24} \\implies f_1 = +24 \\text{ cm}'
        },
        {
          stepNumber: 2,
          description: 'Calculate equivalent focal length F of combination with f1 = +24 cm and concave lens f2 = -40 cm.',
          math: '\\frac{1}{F} = \\frac{1}{24} + \\frac{1}{-40} = \\frac{5 - 3}{120} = \\frac{2}{120} = \\frac{1}{60} \\implies F = +60 \\text{ cm} = +0.60 \\text{ m}'
        },
        {
          stepNumber: 3,
          description: 'Calculate total optical power P = 1 / F(in meters).',
          math: 'P = \\frac{1}{+0.60} = +1.67 \\text{ D}'
        }
      ],
      finalAnswer: 'f1 = +24 cm, F = +60 cm (+0.60 m), Power P = +1.67 Dioptres',
      siUnit: 'Dioptre (D) and meters',
      shortcutMethod: '1/f1 = 0.5 · (5/60) = 1/24; 1/F = 1/24 - 1/40 = 1/60 → F = 60 cm, P = 100/60 = +1.67 D.',
      commonErrors: 'Using R2 as positive instead of negative for a biconvex lens; giving concave lens positive focal length.',
      examTip: 'Double-check Cartesian signs: convex lens R1 > 0, R2 < 0; concave lens has f < 0.'
    }
  ],
  diagrams: [
    {
      id: 'DIAG-OPT-01',
      name: 'Young’s Double Slit Interference Setup',
      nameTa: 'யங் இரட்டைப் பிளவு குறுக்கீட்டு ஆய்வு வரைபடம்',
      purpose: 'Illustrates the geometry of two coherent slits S1 and S2, the path difference δ = y·d/D, and the formation of alternating bright and dark fringes on the screen.',
      components: ['Monochromatic light source', 'Single slit S', 'Double slits S1 and S2', 'Screen at distance D', 'Central bright fringe O', 'Point P at distance y'],
      labelsEn: ['Coherent Slits (S1, S2)', 'Slit Separation (d)', 'Screen Distance (D)', 'Path Difference (δ = y·d/D)', 'Central Maximum (O)', 'Bright/Dark Fringes'],
      labelsTa: ['ஓரியல் பிளவுகள் (S1, S2)', 'பிளவு இடைவெளி (d)', 'திரைத் தொலைவு (D)', 'பாதை வேறுபாடு', 'மையப் பொலிவு வரி', 'குறுக்கீட்டு வரிகள்'],
      stepByStepExplanation: [
        'Draw a vertical plane with two small pinhole slits S1 and S2 separated by d.',
        'Draw a parallel vertical line for the screen at distance D to the right.',
        'Draw straight lines from S1 and S2 meeting at point P on the screen.',
        'Drop a perpendicular from S1 onto S2P to highlight path difference δ = S2P - S1P.',
        'Mark central point O and indicate alternating sinusoidal intensity distribution.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Not showing the perpendicular line S1N representing the geometric path difference.'],
      aiImagePrompt: 'Clean educational vector illustration of Young’s Double Slit Experiment. Dual coherent narrow slits illuminated by laser light producing alternating blue bright and dark interference fringes on a white screen, clearly labeled with distances d, D, and path difference delta, textbook style on pure white background.'
    },
    {
      id: 'DIAG-OPT-02',
      name: 'Refraction through a Triangular Prism',
      nameTa: 'முப்பட்டகத்தில் ஒளிவிலகல் மற்றும் திசைமாறுபாட்டுக் கோணம்',
      purpose: 'Shows a monochromatic light ray undergoing two refractions through a triangular prism ABC, identifying angles i1, r1, r2, i2, prism angle A, and deviation d.',
      components: ['Triangular glass prism ABC', 'Incident ray PQ', 'Refracted ray QR inside', 'Emergent ray RS', 'Normal lines N1 and N2', 'Deviation angle d'],
      labelsEn: ['Prism Apex Angle (A)', 'Angle of Incidence (i1)', 'First Refraction (r1)', 'Second Angle of Incidence (r2)', 'Angle of Emergence (i2)', 'Angle of Deviation (d)'],
      labelsTa: ['முப்பட்டகக் கோணம் (A)', 'படுகோணம் (i1)', 'முதல் விலகுகோணம் (r1)', 'இரண்டாம் படுகோணம் (r2)', 'வெளியேறு கோணம் (i2)', 'திசைமாறுபாட்டுக் கோணம் (d)'],
      stepByStepExplanation: [
        'Draw an equilateral triangle ABC with base BC.',
        'Draw incident ray PQ striking face AB at angle i1 to the normal.',
        'Draw refracted ray QR bending towards normal inside the glass.',
        'Draw emergent ray RS bending away from normal at face AC.',
        'Extend incident ray forward and emergent ray backward to mark angle of deviation d.'
      ],
      examImportance: 'Very Important',
      commonMistakes: ['Bending emergent ray towards the normal instead of away from normal when entering air.'],
      aiImagePrompt: 'Textbook vector diagram of refraction of a light beam through a glass triangular prism. Showing incident ray, normal lines, internal refracted ray parallel to base, emergent ray, angles of incidence i, emergence e, prism angle A, and angle of minimum deviation D, clean professional scientific diagram.'
    }
  ],
  graphs: [
    {
      id: 'GRAPH-OPT-01',
      name: 'Angle of Deviation (d) vs Angle of Incidence (i) in a Prism',
      nameTa: 'முப்பட்டகத்தின் திசைமாறுபாட்டுக் கோணம் (d) மற்றும் படுகோணம் (i) வரைபடம்',
      xAxis: 'Angle of Incidence (i) in degrees',
      yAxis: 'Angle of Deviation (d) in degrees',
      units: 'Degrees (°)',
      shape: 'U-shaped asymmetric curve with a distinct minimum point',
      importantPoints: [
        'Initial steep decrease of deviation d as i increases from small values.',
        'Minimum Deviation point (D) where d reaches its lowest value and i = e.',
        'Gradual rise in deviation for larger angles of incidence.'
      ],
      physicalMeaning: 'Proves that for every deviation except the minimum deviation D, there are two distinct angles of incidence (i1 and i2) giving the same deviation due to reversibility of light.',
      mathematicalRelationship: 'A + d = i_1 + i_2, \\quad \\text{at minimum } D = 2i - A',
      howToDrawInExam: 'Plot i on X-axis from 30° to 70° and d on Y-axis. Draw a smooth U-curve that dips to a clear minimum D at i ≈ 45°-50°, then gently curves upward.',
      commonMistakes: ['Drawing a symmetric V-shape with a sharp corner instead of a smooth rounded U-curve.'],
      aiGraphPrompt: 'Scientifically accurate graph of angle of deviation (d) vs angle of incidence (i) for a prism. Smooth asymmetric U-curve showing minimum deviation D at angle i = e, clear black axes with degree labels, crisp educational illustration on white background.'
    }
  ],
  experiments: [
    {
      id: 'EXP-OPT-01',
      name: 'Determination of Refractive Index of a Prism using Spectrometer',
      nameTa: 'நிறமாலைமானியைக் கொண்டு முப்பட்டகத்தின் ஒளிவிலகல் எண்ணைக் காணுதல்',
      apparatus: ['Spectrometer', 'Sodium vapor lamp (yellow light λ = 589.3 nm)', 'Glass prism', 'Spirit level', 'Reading lens'],
      principle: 'By measuring the angle of the prism (A) and the angle of minimum deviation (D) using a calibrated spectrometer, refractive index is given by n = sin((A+D)/2) / sin(A/2).',
      principleTa: 'முப்பட்டகக் கோணம் (A) மற்றும் சிறு திசைமாறுபாட்டுக் கோணம் (D) ஆகியவற்றை அளவிட்டு n = sin((A+D)/2) / sin(A/2) சமன்பாட்டின் மூலம் ஒளிவிலகல் எண் கணக்கிடப்படுகிறது.',
      procedure: [
        'Perform preliminary spectrometer adjustments: level the collimator and telescope using a spirit level, and focus telescope for parallel rays.',
        'Place prism on prism table with its refracting edge facing the collimator to measure angle of prism A by reflecting light from both polished faces (2A = θ2 - θ1).',
        'Turn prism table to observe refracted ray, slowly rotate table until spectral line halts and reverses direction (minimum deviation position).',
        'Measure minimum deviation angle D between direct ray and minimum deviated ray.',
        'Calculate refractive index n using the prism formula.'
      ],
      observation: 'For crown glass prism, A ≈ 60° and D ≈ 38.5°, giving n ≈ sin(49.25°) / sin(30°) ≈ 0.7576 / 0.500 ≈ 1.515.',
      result: 'The refractive index of the material of the given glass prism n = 1.515 (unitless).',
      precautions: [
        'Refracting faces of the prism must be cleaned with tissue paper and never touched with bare fingers.',
        'Spectrometer telescope and collimator must be perfectly focused for parallel light before taking readings.'
      ],
      realLifeImportance: 'Essential for optical glass manufacturers and designing camera lenses and fiber optic couplers.'
    }
  ],
  aiLesson: {
    lessonTitle: 'Optics: From Bending Rays to Dancing Wavefronts',
    totalDuration: '5 Minutes',
    scenes: [
      {
        sceneNumber: 1,
        sceneTitle: 'Hook: How the Internet Crosses Oceans in Glass Fibres',
        explanationEn: 'Every time you send a message across continents, your data travels as pulses of light inside glass cables thinner than human hair laid across the ocean floor. How does light stay trapped inside glass without escaping? Through Total Internal Reflection!',
        explanationTa: 'நீங்கள் அனுப்பும் தகவல்கள் மனித முடியை விட மெல்லிய கண்ணாடி ஒளியிழைகளின் வழியே ஒளியின் துடிப்புகளாகக் கடக்கின்றன. கண்ணாடிக்குள் ஒளி எவ்வாறு தப்பியோடாமல் பயணிக்கிறது? முழு அக எதிரொளிப்பின் மூலம்!',
        animationDescription: '3D glowing pulse of laser light zig-zagging continuously inside a thin flexible optical fibre cable through total internal reflection.',
        keywordsDisplayed: ['Total Internal Reflection', 'Critical Angle (ic)', 'Optical Fibre Core & Cladding', 'Zero Energy Leakage'],
        interactiveQuestion: {
          question: 'What are the two mandatory conditions for Total Internal Reflection to occur?',
          questionTa: 'முழு அக எதிரொளிப்பு ஏற்படுவதற்கான இரு இன்றியமையாத நிபந்தனைகள் யாவை?',
          options: [
            'Light must go from denser to rarer medium, and angle of incidence i > ic',
            'Light must go from rarer to denser medium, and i < ic',
            'Light must enter at 90 degrees only',
            'Mediums must have identical refractive indices'
          ],
          optionsTa: [
            'ஒளி அடர்மிகு ஊடகத்திலிருந்து அடர்குறை ஊடகத்திற்குச் செல்ல வேண்டும் மற்றும் i > ic',
            'ஒளி அடர்குறை ஊடகத்திலிருந்து அடர்மிகு ஊடகத்திற்குச் செல்ல வேண்டும் மற்றும் i < ic',
            'ஒளி 90 டிகிரியில் மட்டுமே நுழைய வேண்டும்',
            'இரு ஊடகங்களும் சம ஒளிவிலகல் எண் கொண்டிருக்க வேண்டும்'
          ],
          correctIndex: 0,
          explanation: 'TIR occurs only when light attempts to enter a rarer medium from a denser medium at an angle of incidence greater than the critical angle (i > ic).'
        }
      },
      {
        sceneNumber: 2,
        sceneTitle: 'Concept: Lens Maker’s Formula and Curvature',
        explanationEn: 'An optometrist shapes a spectacle lens by grinding its two glass curves. The Lens Maker’s formula, 1/f = (n - 1)(1/R1 - 1/R2), tells exactly how bending the surfaces changes the focal power of the lens.',
        explanationTa: 'லென்ஸ் உருவாக்குபவரின் சமன்பாடு 1/f = (n - 1)(1/R1 - 1/R2) லென்சின் வளைவு ஆரங்களையும் அதன் குவியத்தொலைவையும் இணைக்கிறது.',
        animationDescription: '3D simulation of a biconvex lens flexing its curvature while parallel incoming rays focus closer or further depending on surface radius R.',
        keywordsDisplayed: ['Lens Maker Formula', 'Radius of Curvature (R1, R2)', 'Refractive Index (n)', 'Focal Length (f)'],
        interactiveQuestion: {
          question: 'If a glass convex lens (n = 1.5) is immersed in water (n = 1.33), its focal length will:',
          questionTa: 'ஒரு கண்ணாடி குவி லென்ஸ் (n = 1.5) நீரில் (n = 1.33) மூழ்கடிக்கப்பட்டால், அதன் குவியத்தொலைவு:',
          options: ['Increase by approximately 4 times', 'Decrease to zero', 'Remain unchanged', 'Become negative'],
          optionsTa: ['சுமார் 4 மடங்கு அதிகரிக்கும்', 'பூஜ்ஜியமாகக் குறையும்', 'மாறாமல் இருக்கும்', 'எதிர்க்குறியாகும்'],
          correctIndex: 0,
          explanation: 'Relative refractive index decreases from 1.5 to (1.5/1.33 = 1.128), making (n_rel - 1) much smaller, which increases focal length f significantly.'
        }
      },
      {
        sceneNumber: 3,
        sceneTitle: 'Wave Theory: Young’s Double Slit Interference',
        explanationEn: 'In 1801, Thomas Young split a light beam through two micro-slits. Instead of two bright lines, he saw a beautiful barcode pattern of alternating bright and dark fringes, proving beyond doubt that light behaves as a wave!',
        explanationTa: '1801-ல் தாமஸ் யங் இரு பிளவுகளின் வழியே ஒளியைச் செலுத்தியபோது, திரையில் மாறிமாறி அமைந்த பொலிவு மற்றும் இருள் வரிகள் உருவாயின. இது ஒளி ஒரு அலை என்பதை உறுதி செய்தது.',
        animationDescription: 'Two sets of expanding circular wavefronts overlapping to form bright constructive crest-crest bands and dark destructive crest-trough cancellations.',
        keywordsDisplayed: ['Young’s Experiment (YDSE)', 'Constructive (Bright: δ = nλ)', 'Destructive (Dark: δ = (2n-1)λ/2)', 'Fringe Width β = λD/d'],
        interactiveQuestion: {
          question: 'If the distance between the two slits (d) is doubled, what happens to the fringe width β?',
          questionTa: 'இரு பிளவுகளுக்கு இடைப்பட்ட தொலைவு (d) இருமடங்காக உயர்த்தப்பட்டால், பட்டை அகலம் β என்னவாகும்?',
          options: ['Fringe width is halved (β/2)', 'Fringe width is doubled (2β)', 'Fringe width increases 4 times', 'No change'],
          optionsTa: ['பட்டை அகலம் பாதியாகக் குறையும் (β/2)', 'பட்டை அகலம் இருமடங்காகும் (2β)', '4 மடங்கு அதிகரிக்கும்', 'மாற்றமிருக்காது'],
          correctIndex: 0,
          explanation: 'Since fringe width β = λD/d, β is inversely proportional to slit separation d. Doubling d cuts fringe width in half.'
        }
      },
      {
        sceneNumber: 4,
        sceneTitle: 'Polarisation: Proof of Transverse Waves',
        explanationEn: 'Sound waves can bend around corners (diffraction) and interfere, but they can NEVER be polarised because they are longitudinal. Only transverse waves like light can be polarised, as described by Brewster’s Law (n = tan ip) and Malus’s Law (I = I0 cos²θ).',
        explanationTa: 'ஒலி அலைகளை ஒருபோதும் தளவிளைவுக்கு உட்படுத்த முடியாது, ஏனெனில் அவை நெட்டலைகள். ஒளி அலை குறுக்கலை என்பதால் மட்டுமே புரூஸ்டர் விதி மற்றும் மாலஸ் விதியின்படி தளவிளைவடைகிறது.',
        animationDescription: 'Unpolarised electromagnetic wave with multi-directional electric vectors passing through a vertical polaroid filter, emerging with purely vertical vibrations.',
        keywordsDisplayed: ['Polarisation', 'Transverse Wave Proof', 'Brewster’s Law (n = tan ip)', 'Malus’s Law (I = I0 cos²θ)'],
        interactiveQuestion: {
          question: 'When two ideal polaroids are placed with their transmission axes at 90° (crossed polaroids), the transmitted intensity is:',
          questionTa: 'இரு தளவிளைவாக்கிகள் 90° கோணத்தில் (செங்குத்தாக) வைக்கப்பட்டால் வெளியேறும் ஒளிச்செறிவு:',
          options: ['Zero (0)', 'I0 / 2', 'I0 / 4', 'I0'],
          optionsTa: ['பூஜ்ஜியம் (0)', 'I0 / 2', 'I0 / 4', 'I0'],
          correctIndex: 0,
          explanation: 'By Malus’s law, I = I0 · cos²(90°) = I0 · 0 = 0 (complete blackout of transmitted light).'
        }
      }
    ]
  },
  voiceNarration: {
    durationSeconds: 240,
    scriptEn: 'Welcome to Unit 6 Optics! In this chapter, we discover the dual nature of light propagation. Ray optics guides us through mirrors, lenses, prisms, and high-speed fibre-optic communications using Total Internal Reflection. Wave optics reveals light’s wave identity through Huygens’ wavefronts, Young’s double slit interference fringes, single slit diffraction, and polarization laws that prove light is fundamentally a transverse electromagnetic oscillation.',
    scriptTa: 'அலகு 6 ஒளியியல் பகுதிக்கு உங்களை அன்புடன் வரவேற்கிறோம்! இப்பாடத்தில் ஒளியின் நேர்க்கோட்டுப் பண்பு மற்றும் அலைப்பண்பு ஆகிய இரண்டையும் விரிவாகக் கற்கிறோம். கதிர் ஒளியியலில் எதிரொளிப்பு, ஒளிவிலகல், முழு அக எதிரொளிப்பு, லென்ஸ் உருவாக்குபவரின் சூத்திரம் மற்றும் முப்பட்டகத்தை ஆராய்கிறோம். அலை ஒளியியலில் ஹைகன்ஸ் தத்துவம், யங் இரட்டைப் பிளவு குறுக்கீட்டு வரிகள், விளிம்பு விளைவு மற்றும் ஒளியின் குறுக்கலைத் தன்மையை நிரூபிக்கும் தளவிளைவு விதிகளைப் பயில்கிறோம்.',
    scriptBilingual: 'வணக்கம் மாணவர்களே! Unit 6 Optics-ல் நாம் Ray Optics மற்றும் Wave Optics ஆகிய இரண்டையும் படிக்கிறோம். Total Internal Reflection மூலம் optical fibres வழியே data எப்படி travels ஆகிறது என்பதையும், Lens Maker’s Formula 1/f = (n-1)(1/R1 - 1/R2) பயன்பாடுகளையும், Young’s Double Slit Experiment-ல் Fringe Width beta = lambda D/d உருவாவதையும், Malus’s Law I = I0 cos²theta மூலம் light ஒரு Transverse wave என்பதை நிரூபிப்பதையும் step-by-step ஆகக் கற்றுக்கொள்வோம்.'
  },
  examPreparation: {
    oneMarkQuestions: [
      {
        q: 'A ray of light strikes a glass plate at an angle of 60°. If the reflected and refracted rays are perpendicular, the refractive index of glass is:',
        qTa: 'ஒளிக்கதிர் 60° கோணத்தில் கண்ணாடி மீது படுகிறது. எதிரொளிப்பு மற்றும் விலகு கதிர்கள் ஒன்றுக்கொன்று செங்குத்து எனில் கண்ணாடியின் ஒளிவிலகல் எண்:',
        a: 'n = tan(60°) = √3 ≈ 1.732 (Brewster’s Law)',
        aTa: 'n = tan(60°) = √3 ≈ 1.732 (புரூஸ்டர் விதி)'
      },
      {
        q: 'What happens to the fringe width in YDSE if the whole apparatus is immersed in water of refractive index 4/3?',
        qTa: 'யங் ஆய்வமைப்பை 4/3 ஒளிவிலகல் எண் கொண்ட நீரில் மூழ்கடித்தால் பட்டை அகலம் என்னவாகும்?',
        a: 'Fringe width decreases to 3/4 of its original value (β\' = β / μ = 0.75 β)',
        aTa: 'பட்டை அகலம் அதன் ஆரம்ப மதிப்பில் 3/4 மடங்காகக் குறையும் (β\' = 3/4 β)'
      },
      {
        q: 'Which optical phenomenon confirms that light is a transverse wave?',
        qTa: 'ஒளி ஒரு குறுக்கலை என்பதை உறுதிப்படுத்தும் ஒளியியல் நிகழ்வு எது?',
        a: 'Polarisation of light (தளவிளைவு)',
        aTa: 'ஒளி தளவிளைவு'
      }
    ],
    twoMarkQuestions: [
      {
        q: 'State Brewster’s Law and write its mathematical equation.',
        qTa: 'புரூஸ்டர் விதியைக் கூறி அதன் சமன்பாட்டை எழுதுக.',
        a: 'Brewster’s law states that the tangent of the polarising angle (ip) for a transparent medium is equal to the refractive index (n) of the medium: n = tan ip.',
        aTa: 'ஒரு ஒளிபுகும் ஊடகத்தின் தளவிளைவுக் கோணத்தின் (ip) டேன்ஜென்ட் மதிப்பு, அந்த ஊடகத்தின் ஒளிவிலகல் எண்ணிற்கு (n) சமமாகும்: n = tan ip.'
      },
      {
        q: 'Distinguish between Fresnel and Fraunhofer diffraction.',
        qTa: 'பிரனல் மற்றும் பிரான்ஹோபர் விளிம்பு விளைவுகளை வேறுபடுத்துக.',
        a: 'Fresnel: Source and screen are at finite distances; wavefronts are spherical or cylindrical; no lenses used. Fraunhofer: Source and screen are at infinite distances; wavefronts are plane; convex lenses are used.',
        aTa: 'பிரனல்: மூலம் மற்றும் திரை வரம்பிற்குட்பட்ட தொலைவில் உள்ளன; அலைமுகப்பு கோள/உருளை வடிவம்; லென்ஸ்கள் பயன்படுவதில்லை. பிரான்ஹோபர்: மூலம் மற்றும் திரை ஈறிலாத் தொலைவில் உள்ளன; சமதள அலைமுகப்பு; குவி லென்ஸ்கள் பயன்படுகின்றன.'
      }
    ],
    threeMarkQuestions: [
      {
        q: 'Explain the working of an optical fibre cable based on Total Internal Reflection with a neat diagram.',
        qTa: 'முழு அக எதிரொளிப்பின் அடிப்படையில் ஒளியிழையின் செயல்பாட்டை தகுந்த படத்துடன் விளக்குக.',
        a: 'An optical fibre consists of an inner core (refractive index n1) and outer cladding (n2 < n1). Light entering the core at an angle less than acceptance angle strikes the core-cladding boundary at i > ic. It undergoes continuous total internal reflection without energy loss, traveling long distances at the speed of light in glass.',
        aTa: 'ஒளியிழை n1 ஒளிவிலகல் எண் கொண்ட உள்ளகம் மற்றும் n2 < n1 கொண்ட வெளிப்பூச்சைக் கொண்டுள்ளது. மாறுநிலைக் கோணத்தை விட அதிக கோணத்தில் (i > ic) உள்ளக-வெளிப்பூச்சு எல்லையில் படும் ஒளி தொடர்ச்சியாக முழு அக எதிரொளிப்படைந்து ஆற்றல் இழப்பின்றி நீண்ட தொலைவு பயணிக்கிறது.'
      }
    ],
    fiveMarkQuestions: [
      {
        q: 'Derive the Lens Maker’s Formula for a thin biconvex lens with a neat labeled ray diagram.',
        qTa: 'மெல்லிய இருபுற குவி லென்சிற்கான லென்ஸ் உருவாக்குபவரின் சமன்பாட்டைப் படத்துடன் தருவிக்க.',
        a: 'Apply single surface refraction n2/v1 - n1/u = (n2 - n1)/R1 at surface 1 and n1/v - n2/v1 = (n1 - n2)/R2 at surface 2. Add equations to eliminate n2/v1, yielding 1/v - 1/u = (n - 1)(1/R1 - 1/R2). When u = ∞, v = f, giving 1/f = (n - 1)(1/R1 - 1/R2).',
        aTa: 'முதல் பரப்பில் n2/v1 - n1/u = (n2 - n1)/R1 மற்றும் இரண்டாம் பரப்பில் n1/v - n2/v1 = (n1 - n2)/R2 எனப் பயன்படுத்தி இரண்டையும் கூட்டுக. இடைநிலை உறுப்பை நீக்கி 1/f = (n - 1)(1/R1 - 1/R2) சமன்பாட்டைப் பெறுக.'
      },
      {
        q: 'Obtain the condition for constructive and destructive interference and derive the expression for fringe width in Young’s double slit experiment.',
        qTa: 'யங் இரட்டைப் பிளவு ஆய்வில் பொலிவு மற்றும் இருள் வரிகளுக்கான நிபந்தனைகளைப் பெற்று, பட்டை அகலத்திற்கான சமன்பாட்டைத் தருவிக்க.',
        a: 'Calculate geometric path difference δ = S2P - S1P = y·d/D. Constructive condition: y·d/D = nλ => yn = nλD/d. Fringe width β = yn - yn-1 = λD/d. Destructive condition: y·d/D = (2n-1)λ/2 => yn = (2n-1)λD/(2d), giving the same fringe width β = λD/d.',
        aTa: 'பாதை வேறுபாடு δ = y·d/D எனக் காண்க. பொலிவு வரிக்கு yn = nλD/d; பட்டை அகலம் β = yn - yn-1 = λD/d. இருள் வரிக்கும் அதே பட்டை அகலம் β = λD/d கிடைக்கிறது.'
      }
    ],
    frequentlyRepeatedConcepts: [
      'Lens Maker’s Formula derivation (5 Marks)',
      'Young’s Double Slit Experiment fringe width derivation (5 Marks)',
      'Refractive index of prism n = sin((A+D)/2)/sin(A/2) derivation (5 Marks)',
      'Brewster’s Law and proof that reflected and refracted rays are perpendicular (3 Marks)',
      'Malus’s Law calculation and crossed polaroid numericals (2 Marks)'
    ]
  },
  faqs: [
    {
      question: 'Why does a diamond sparkle so brilliantly?',
      answer: 'Diamond has a very high refractive index (n ≈ 2.42) and an exceptionally small critical angle (ic ≈ 24.4°). Its faces are cut specifically so that light entering undergoes multiple total internal reflections before exiting through the top facets.',
      category: 'Concept'
    },
    {
      question: 'Why are danger signals always red?',
      answer: 'According to Rayleigh’s scattering law, scattered intensity is inversely proportional to the fourth power of wavelength (I ∝ 1/λ⁴). Since red light has the longest visible wavelength, it scatters the least by fog and smoke, remaining visible from the greatest distance.',
      category: 'Concept'
    }
  ],
  commonMistakes: [
    {
      category: 'Formula',
      mistake: 'Using positive R2 for a biconvex lens in Lens Maker’s formula.',
      correctWay: 'For a biconvex lens, the center of curvature of the second surface lies to the left (against incident ray), so R2 is always negative (-R2).'
    },
    {
      category: 'Sign',
      mistake: 'Using β = λd/D instead of β = λD/d.',
      correctWay: 'Remember that fringe width increases when screen is farther (Big D on top) and decreases when slits are wider apart (small d at bottom).'
    }
  ],
  memoryTricks: [
    {
      title: 'YDSE Fringe Width Formula Mnemonic',
      titleTa: 'பட்டை அகலம் நினைவுக்குறிப்பு',
      trick: '"Beta = Lambda · Big D over tiny d" → β = λD / d.'
    },
    {
      title: 'Brewster’s Law Mnemonic',
      titleTa: 'புரூஸ்டர் விதி நினைவுக்குறிப்பு',
      trick: '"Tan at polarizing angle is Index of Refraction" → tan(ip) = n.'
    }
  ]
};
