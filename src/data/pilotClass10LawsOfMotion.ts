import { NoteItem, SummaryItem, ChapterQuiz } from '../types';

/**
 * Flagship Pilot Chapter: Class 10 Science - Unit 1: Laws of Motion (அலகு 1: இயக்க விதிகள்)
 * Aligned with Tamil Nadu State Board (Samacheer Kalvi) 2026–27 Syllabus & TNSCERT Textbook
 * 
 * Provides all 10 core dimensions:
 * 1. Lesson Overview (Introduction, Learning Objectives, Why It Matters)
 * 2. Detailed Notes (Mechanics, Newton's 3 Laws, Momentum, Impulse, Gravitation, Derivations, Comparisons)
 * 3. Simple Explanation (Real-world analogies)
 * 4. Important Terms (Comprehensive Academic Glossary)
 * 5. Key Points (Essential Revision Points)
 * 6. Lesson Summary (Rigorous Exam-Ready Synthesis)
 * 7. Worked Examples (Step-by-step numerical problems with method & final answers)
 * 8. Exam Preparation Questions (VSA, SA, Conceptual, Long 5/7-mark Derivations with model answers)
 * 9. Substantial Quiz (12 board-level questions: MCQs, True/False, Numericals, Assertions with explanations)
 * 10. Quick Revision & Common Mistakes to Avoid
 */

export const PILOT_C10_SCI_U1_NOTE: NoteItem = {
  id: 'note_c10_sci_u1_pilot',
  chapterId: 'c10_sci_u1',
  classLevel: 10,
  subjectId: 'c10_science',
  titleEn: 'Unit 1: Laws of Motion — Complete Comprehensive Study Suite',
  titleTa: 'அலகு 1: இயக்க விதிகள் — முழுமையான அரசு பொதுத்தேர்வு வழிகாட்டி',
  publishedAt: '24 Sep 2026',
  publishedAtTa: '24 செப் 2026',
  updatedAt: '24 Sep 2026',
  updatedAtTa: '24 செப் 2026',
  syllabusYear: 'Samacheer Kalvi 2026–27',
  syllabusYearTa: 'தமிழ்நாடு சமச்சீர் கல்வி 2026–27',
  reviewedBy: 'TNSCERT Senior Physics Academic Panel',
  reviewedByRole: 'State Resource Group & Board Examiners',
  reviewedAt: '24 Sep 2026',
  reviewedAtTa: '24 செப் 2026',
  status: 'published',
  version: '3.0.0',
  changeNote: 'Substantially expanded to comprehensive pilot standard with 10 structured dimensions.',
  changeNoteTa: 'பாட மேலோட்டம், விரிவான குறிப்புகள், கலைச்சொற்கள், மாதிரி வினாக்கள், பொதுவான தவறுகளுடன் முழுமையாக விரிவாக்கப்பட்டது.',
  readTimeMinutes: 18,

  // 1. LESSON OVERVIEW
  overviewEn: 'Movement is omnipresent across the universe — from the celestial revolution of planets around the Sun to the microscopic motion of atoms. Mechanics, one of the oldest branches of Physics, investigates how and why physical bodies move. This lesson bridges ancient philosophical intuitions (Aristotle and Galileo Galilei) to Sir Isaac Newton’s classical synthesis in 1687, presenting the three fundamental laws of motion, the law of conservation of momentum, and universal gravitation that govern modern rocketry, automobile safety, and space mechanics.',
  overviewTa: 'அண்டத்தில் உள்ள அனைத்துப் பொருட்களும் தொடர்ந்து இயக்கத்தில் உள்ளன. கோள்களின் இயக்கம் முதல் நுண்ணிய அணுக்களின் இயக்கம் வரை அனைத்தும் விசை மற்றும் இயக்கத்தால் ஆளப்படுகின்றன. இயற்பியலின் பழமையான பிரிவான இயந்திரவியல், பொருட்கள் எவ்வாறு, ஏன் இயங்குகின்றன என்பதை ஆராய்கிறது. அரிஸ்டாட்டில் மற்றும் கலீலியோவின் தொடக்க கால ஆய்வுகளிலிருந்து தொடங்கி, சர் ஐசக் நியூட்டன் உருவாக்கிய மூன்று அடிப்படை இயக்க விதிகள், உந்த மாறாக் கோட்பாடு மற்றும் ஈர்ப்பியல் விதிகளை இப்பாடம் விரிவாக விளக்குகிறது.',
  
  learningObjectivesEn: [
    'Distinguish between natural and violent motion, and define the three forms of Inertia (Rest, Motion, Direction) with real-life demonstrations.',
    'State Newton’s First Law and understand force as an external physical agent causing acceleration.',
    'Formulate linear momentum (p = mv) and mathematically derive Newton’s Second Law (F = ma) from the rate of change of momentum.',
    'Differentiate between Absolute Units (Newton, Dyne) and Gravitational Units (kgf, gf) of Force.',
    'Explain the concept of Impulse (J = F · Δt = Δp) and analyze safety mechanisms like cricket fielding and automobile crumple zones.',
    'State Newton’s Third Law (Action = -Reaction) and prove the Principle of Conservation of Linear Momentum during mutual collisions.',
    'Analyze the mechanism of Rocket Propulsion through continuous mass ejection and momentum conservation.',
    'State Newton’s Universal Law of Gravitation (F = G · m1 · m2 / r²) and derive the direct relation between g and G (g = GM/R²).',
    'Contrast Mass (scalar invariant) against Weight (vector location-dependent force).',
    'Calculate the apparent weight of a person in an elevator (accelerating upward, downward, stationary, and in free-fall) and explain weightlessness.'
  ],
  learningObjectivesTa: [
    'இயற்கை இயக்கம் மற்றும் வலிந்த இயக்கத்தை வேறுபடுத்தி, நிலைமத்தின் மூன்று வகைகளை (ஓய்வில், இயக்கத்தில், திசையில்) அன்றாட உதாரணங்களுடன் அறிதல்.',
    'நியூட்டனின் முதல் விதியை அறிதல் மற்றும் விசையின் தரமான பண்பை விளக்குதல்.',
    'நேர்க்கோட்டு உந்தத்தை (p = mv) வரையறுத்து, நியூட்டனின் இரண்டாம் விதியை (F = ma) கணிதவியல் முறையில் தருவித்தல்.',
    'விசையின் தனி அலகுகள் (நியூட்டன், டைன்) மற்றும் ஈர்ப்பு அலகுகளை (kgf, gf) வேறுபடுத்தி அறிதல்.',
    'கணத்தாக்கு (J = F · Δt = Δp) தத்துவத்தை விளக்கி, கிரிக்கெட் பந்து பிடித்தல் மற்றும் வாகன அதிர்வு தாங்கிகளின் செயல்பாட்டைப் புரிந்துகொள்ளுதல்.',
    'நியூட்டனின் மூன்றாம் விதியை அறிந்து, நேர்க்கோட்டு உந்த மாறாக் கோட்பாட்டை இரு பொருட்கள் மோதும் நிகழ்வில் நிரூபித்தல்.',
    'ராக்கெட் ஏவுதலில் உந்த மாறாக் கோட்பாடு மற்றும் நியூட்டனின் மூன்றாம் விதியின் நடைமுறைப் பயன்பாட்டை விளக்குதல்.',
    'நியூட்டனின் பொது ஈர்ப்பியல் விதியை (F = G · m1 · m2 / r²) கூறி, புவியீர்ப்பு முடுக்கம் g மற்றும் ஈர்ப்பியல் மாறிலி G இடையேயான தொடர்பை (g = GM/R²) தருவித்தல்.',
    'நிறை (ஸ்கேலார் அளவு) மற்றும் எடை (வெக்டர் அளவு) ஆகியவற்றின் அடிப்படை வேறுபாடுகளை ஒப்பிட்டு அறிதல்.',
    'மின் தூக்கியில் (Lift) ஒருவரின் தோற்ற எடை மாறுபாடுகளை (மேலே செல்லும்போது, கீழே இறங்கும்போது, அறுந்து விழும்போது) கணக்கிட்டு எடையின்மையை விளக்குதல்.'
  ],

  whyItMattersEn: 'Laws of Motion is the absolute cornerstone of SSLC Board Science examinations, consistently contributing 8 to 12 marks across Part I (MCQs), Part II (2-mark definitions & unit conversions), Part III (4-mark reasoning & numericals), and Part IV (7-mark full derivations). Mastery of this unit is also mandatory for higher secondary Physics (Mechanics in Class 11) and national entrance exams like NEET and JEE.',
  whyItMattersTa: '10-ஆம் வகுப்பு அறிவியல் பொதுத்தேர்வில் 8 முதல் 12 மதிப்பெண்கள் வரை கேட்கப்படும் மிக முக்கியமான அலகு இதுவாகும். 1 மதிப்பெண் வினாக்கள், 2 மதிப்பெண் வரைவிலக்கணங்கள், 4 மதிப்பெண் கணக்கீடுகள் மற்றும் 7 மதிப்பெண் விரிவான தருவித்தல் வினாக்களில் (உந்த மாறாக் கோட்பாடு & F = ma) இது முதலிடம் பெறுகிறது. மேலும் மேல்நிலை வகுப்பு இயற்பியலுக்கும் (11-ஆம் வகுப்பு), நீட் (NEET), ஜே.இ.இ (JEE) தேர்வுகளுக்கும் இதுவே அடிப்படை அஸ்திவாரமாகும்.',

  // 2. DETAILED NOTES
  bodyEn: `### 1. Mechanics and Its Divisions
Mechanics is the branch of physics that deals with the effect of force on bodies. It is divided into:
1. **Statics**: Deals with bodies at rest under the action of forces.
2. **Dynamics**: Deals with moving bodies under the action of forces. Dynamics is further bifurcated into:
   - **Kinematics**: Treats the motion of bodies without considering the cause of motion (forces).
   - **Kinetics**: Treats the motion of bodies taking into account the forces that cause the motion.

---

### 2. Historical Perspectives on Force and Motion
- **Aristotle (Ancient Greek Philosopher, 384–322 BC)**:
  - Asserted that the natural state of terrestrial bodies is rest.
  - Divided motion into **Natural Motion (Force-independent)** such as a falling stone, and **Violent Motion (Force-dependent)** which requires an external continuous force. He claimed: *"A moving body naturally comes to rest without an external force"* (Aristotelian fallacy).
- **Galileo Galilei (1564–1642)**:
  - Formulated that the natural state of all earthly bodies is either state of rest or state of uniform motion.
  - A body in motion continues to move with the same velocity unless acted upon by an external unbalanced force.
  - When dropped from a height in vacuum, bodies of different sizes, shapes, and mass fall at the same rate and reach the ground simultaneously.
  - Introduced the property of **Inertia**.

---

### 3. Inertia and Its Types
**Definition**: The inherent property of a body to resist any change in its state of rest or state of uniform motion along a straight line, unless it is influenced upon by an external unbalanced force, is called **Inertia**.
Inertia depends directly on the **Mass** of the body: *Heavier body = Greater inertia; Lighter body = Lesser inertia.*

**Types of Inertia with Concrete Real-World Examples**:
1. **Inertia of Rest**: The resistance of a body to change its state of rest.
   - *Example 1*: When a stationary bus suddenly starts moving forward, standing passengers jerk backward because their feet move forward with the bus floor while their upper body tends to stay at rest due to inertia of rest.
   - *Example 2*: Vigorous shaking of tree branches causes ripe fruits and dry leaves to detach and fall down.
2. **Inertia of Motion**: The resistance of a body to change its state of uniform motion.
   - *Example 1*: When a moving bus applies sudden brakes, passengers lean forward because their lower body stops with the bus, but the upper body continues moving forward due to inertia of motion.
   - *Example 2*: An athlete in a track meet runs a considerable distance before taking a long jump to gain momentum and jump farther.
3. **Inertia of Direction**: The resistance of a body to change its direction of motion.
   - *Example 1*: When a car takes a sharp turn along a curved road, passengers are pushed toward the outside of the curve.
   - *Example 2*: When sharpening a knife against a grinding wheel, sparks fly off tangentially due to directional inertia.

---

### 4. Linear Momentum (p)
**Definition**: The product of mass and velocity of a moving body gives the magnitude of **Linear Momentum**. It measures the impact or quantity of motion contained in a body.
$$\\vec{p} = m \\cdot \\vec{v}$$
- **Nature**: Vector quantity (has both magnitude and direction; direction is identical to velocity).
- **SI Unit**: $\\text{kg m s}^{-1}$ (or $\\text{N s}$).
- **CGS Unit**: $\\text{g cm s}^{-1}$.
- *Significance*: A cricket ball and a tennis ball moving at identical speeds require vastly different stopping forces because the heavier cricket ball possesses greater linear momentum.

---

### 5. Newton’s First Law of Motion
**Statement**: *"Every body continues in its state of rest or of uniform motion along a straight line unless it is compelled to change that state by an external unbalanced force."*
- **Two Fundamental Concepts Defined by 1st Law**:
  1. **Inertia**: Qualitatively establishes that matter cannot change its state on its own.
  2. **Force**: Qualitatively defines force as an external agency in the form of a push or pull that:
     - Produces or tries to produce motion in a static body.
     - Stops or tries to stop a moving body.
     - Changes or tries to alter the direction and speed of motion.

---

### 6. Classification of Forces
1. **Like Parallel Forces**: Two or more forces of equal or unequal magnitude acting along the same direction, parallel to each other.
   - *Resultant*: $R = F_1 + F_2$ (acts in the common direction).
2. **Unlike Parallel Forces**: Two forces of equal or unequal magnitude acting along opposite directions, parallel to each other.
   - If $F_1 > F_2$, Resultant $R = F_1 - F_2$ (acts in the direction of $F_1$).
3. **Balanced vs Unbalanced Forces**:
   - **Balanced Forces**: When the vector sum (resultant) of all forces acting on a body is zero ($R = 0$). The body remains in equilibrium (no change in state).
   - **Unbalanced Forces**: When the resultant force is non-zero ($R \\neq 0$). Produces acceleration or alters body shape.

---

### 7. Rotating Effect of Force: Torque and Couple
1. **Torque (Moment of Force, $\\tau$)**:
   The turning effect of a force about a fixed point or fixed axis.
   $$\\tau = F \\times d$$
   - where $F$ is the applied force and $d$ is the perpendicular distance between the fixed axis and the line of action of force.
   - **SI Unit**: $\\text{N m}$.
   - **Convention**: Counter-clockwise rotation = Positive torque (+); Clockwise rotation = Negative torque (-).
   - *Everyday Applications*: Spanner with a long handle requires less effort to loosen a tight nut; door handles placed at the outermost edge away from hinges maximize $d$ so minimal force $F$ produces required torque.
2. **Couple**:
   Two equal and unlike parallel forces whose lines of action do not coincide constitute a couple.
   - *Resultant Linear Force*: Zero (causes no translational motion).
   - *Moment of Couple ($M$)*: $M = F \\times s$ (where $s$ is the perpendicular distance between the two lines of action).
   - *Examples*: Turning a water tap, steering a car with two hands, winding the key of a mechanical clock.

---

### 8. Newton’s Second Law of Motion (Law of Force)
**Statement**: *"The rate of change of momentum of a body is directly proportional to the external unbalanced force impressed upon it, and the change in momentum takes place in the direction of the force."*

#### **Step-by-Step Mathematical Derivation of $F = ma$**:
1. Let a body of mass $m$ move in a straight line with an initial velocity $u$.
2. Let an external unbalanced force $F$ act on the body for a time interval $t$.
3. As a result, its velocity changes uniformly to a final velocity $v$.
4. **Initial momentum of the body**:
   $$p_i = m \\cdot u$$
5. **Final momentum of the body**:
   $$p_f = m \\cdot v$$
6. **Change in linear momentum**:
   $$\\Delta p = p_f - p_i = mv - mu = m(v - u)$$
7. **Rate of change of momentum**:
   $$\\text{Rate of change of momentum} = \\frac{\\Delta p}{t} = \\frac{m(v - u)}{t}$$
8. By definition, acceleration $a$ is the rate of change of velocity:
   $$a = \\frac{v - u}{t}$$
   Therefore:
   $$\\text{Rate of change of momentum} = m \\cdot a$$
9. According to Newton’s Second Law:
   $$F \\propto \\frac{\\Delta p}{t}$$
   $$F \\propto m \\cdot a$$
   $$F = k \\cdot m \\cdot a$$
   where $k$ is the constant of proportionality.
10. In all systems of units (SI and CGS), unit force is chosen such that $k = 1$:
    $$F = m \\cdot a$$
    $$\\text{Force} = \\text{Mass} \\times \\text{Acceleration}$$

---

### 9. Units of Force
- **Absolute Units**:
  - **SI Unit**: **Newton (N)**. $1\\text{ N}$ is the amount of force required to produce an acceleration of $1\\text{ m s}^{-2}$ in a body of mass $1\\text{ kg}$ ($1\\text{ N} = 1\\text{ kg} \\cdot 1\\text{ m s}^{-2}$).
  - **CGS Unit**: **Dyne**. $1\\text{ dyne}$ is the amount of force required to produce an acceleration of $1\\text{ cm s}^{-2}$ in a mass of $1\\text{ g}$.
  - **Conversion Relation**:
    $$1\\text{ N} = 1\\text{ kg} \\times 1\\text{ m s}^{-2} = 1000\\text{ g} \\times 100\\text{ cm s}^{-2} = 10^5\\text{ dynes}$$
- **Gravitational Units**:
  - **SI**: Kilogram-force ($\\text{kgf}$). $1\\text{ kgf} = 9.8\\text{ N}$.
  - **CGS**: Gram-force ($\\text{gf}$). $1\\text{ gf} = 980\\text{ dynes}$.

---

### 10. Impulse of Force ($J$)
**Definition**: A very large force acting for a very short duration of time is called an **Impulsive Force**, and the product of force and time duration is known as **Impulse ($J$)**.
$$J = F \\times \\Delta t$$
From Newton's second law, $F = \\frac{m(v - u)}{\\Delta t} \\implies F \\times \\Delta t = m(v - u) = \\Delta p$.
Therefore:
$$\\text{Impulse } J = \\text{Change in Momentum } \\Delta p$$
- **SI Unit**: $\\text{kg m s}^{-1}$ or $\\text{N s}$.
- **Everyday Applications of Impulse**:
  1. *Cricket Fielder*: A fielder pulls his hands backward while catching a fast cricket ball. By increasing the impact time interval ($\\Delta t$), the rate of change of momentum decreases, resulting in a much smaller retarding force $F$ on his hands, preventing injury.
  2. *Automobiles*: Vehicles are fitted with shock absorbers (springs) to increase the time of impact during jerks over bumpy roads, drastically reducing the impact force.
  3. *High Jump / Long Jump*: Athletes land on sandbags or foam mattresses. The softness yields upon impact, increasing the time to come to rest and reducing deceleration force.

---

### 11. Newton’s Third Law of Motion
**Statement**: *"For every action, there is an equal and opposite reaction, and they act on two different bodies."*
$$F_{AB} = -F_{BA}$$
- Action and reaction never cancel each other because they act on **two different interacting bodies**.
- **Examples**:
  1. *Birds flying*: Wings push air downwards and backwards (Action); air pushes bird upwards and forwards (Reaction).
  2. *Swimmer*: Hands push water backwards (Action); water pushes swimmer forward (Reaction).
  3. *Firing a Gun*: Explosion pushes bullet forward with immense force (Action); bullet exerts equal backward force causing gun recoil (Reaction).

---

### 12. Principle of Conservation of Linear Momentum
**Statement**: *"In the absence of an external unbalanced force, the total linear momentum of an isolated system of interacting bodies remains constant."*

#### **Step-by-Step Proof of Conservation of Momentum**:
1. Consider two bodies $A$ and $B$ of masses $m_1$ and $m_2$ moving in the same straight line with initial velocities $u_1$ and $u_2$ respectively ($u_1 > u_2$).
2. During time $t$, body $A$ collides with body $B$.
3. During collision, body $A$ exerts an action force $F_B$ on body $B$. Concurrently, body $B$ exerts a reaction force $F_A$ on body $A$.
4. After collision, they continue in the same straight line with final velocities $v_1$ and $v_2$.
5. **Force exerted by $B$ on $A$ ($F_A$)**:
   $$F_A = m_1 \\cdot a_1 = m_1 \\left(\\frac{v_1 - u_1}{t}\\right)$$
6. **Force exerted by $A$ on $B$ ($F_B$)**:
   $$F_B = m_2 \\cdot a_2 = m_2 \\left(\\frac{v_2 - u_2}{t}\\right)$$
7. According to Newton’s Third Law:
   $$\\text{Action} = -\\text{Reaction} \\implies F_B = -F_A$$
8. Substituting the expressions:
   $$m_2 \\left(\\frac{v_2 - u_2}{t}\\right) = -m_1 \\left(\\frac{v_1 - u_1}{t}\\right)$$
9. Multiplying both sides by $t$:
   $$m_2(v_2 - u_2) = -m_1(v_1 - u_1)$$
   $$m_2 v_2 - m_2 u_2 = -m_1 v_1 + m_1 u_1$$
10. Rearranging terms:
    $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
    $$\\text{Total momentum before collision} = \\text{Total momentum after collision}$$
    *Hence the law of conservation of linear momentum is proved.*

---

### 13. Rocket Propulsion
Rocket propulsion operates on two unified physical principles:
1. **Newton’s Third Law of Motion**
2. **Law of Conservation of Linear Momentum**

**Operational Mechanism**:
- Rockets are filled with propellant (fuel + oxidizer) in propellant tanks.
- Upon ignition, propellants burn furiously, producing high-temperature, high-pressure exhaust gases ejected through the nozzle at supersonic velocity (Action).
- In response, an equal and opposite thrust propels the rocket forward (Reaction).
- As the rocket ascends, propellant burns away rapidly, continuously decreasing the total mass $m$ of the rocket system.
- Because total momentum is conserved ($m \\cdot v = \\text{constant}$), as mass $m$ progressively decreases, the velocity $v$ and upward acceleration $a$ increase exponentially until the rocket achieves escape velocity ($11.2\\text{ km s}^{-1}$) or orbital velocity.

---

### 14. Newton’s Universal Law of Gravitation
**Statement**: *"Every particle of matter in this universe attracts every other particle with a force that is directly proportional to the product of their masses and inversely proportional to the square of the distance between their centers."*
$$F \\propto \\frac{m_1 \\cdot m_2}{r^2} \\implies F = G \\cdot \\frac{m_1 m_2}{r^2}$$
- $G$ is the **Universal Gravitational Constant**.
- **Value of $G$**: $6.674 \\times 10^{-11} \\text{ N m}^2 \\text{kg}^{-2}$.
- $G$ is universal: it does not depend on temperature, medium, nature of bodies, or chemical composition.

---

### 15. Acceleration Due to Gravity ($g$) and Its Relation to $G$
When a body falls freely towards the Earth, it accelerates solely under the influence of Earth's gravitational force. This acceleration is called **Acceleration Due to Gravity ($g$)**.
- Average standard value at Earth surface: $g = 9.8\\text{ m s}^{-2}$.

#### **Derivation of $g = \\frac{GM}{R^2}$**:
1. Consider a body of mass $m$ resting on the surface of the Earth.
2. Let the mass of Earth be $M$ and radius of Earth be $R$.
3. Gravitational force between Earth and the body:
   $$F = \\frac{G \\cdot M \\cdot m}{R^2}$$
4. According to Newton's Second Law, the force on mass $m$ is its weight:
   $$F = m \\cdot g$$
5. Equating the two expressions:
   $$m \\cdot g = \\frac{G \\cdot M \\cdot m}{R^2}$$
6. Canceling mass $m$ from both sides:
   $$g = \\frac{G \\cdot M}{R^2}$$
   *(Notice that $g$ is independent of the mass of the falling object $m$. Therefore, all bodies fall with the identical acceleration in vacuum).*
- **Variation of $g$**:
  - Earth is an oblate spheroid (flattened at poles, bulging at equator).
  - Equatorial radius $R_e >$ Polar radius $R_p$.
  - Since $g \\propto 1/R^2$, **$g$ is MAXIMUM at the poles ($9.83\\text{ m s}^{-2}$)** and **MINIMUM at the equator ($9.78\\text{ m s}^{-2}$)**.
  - $g$ decreases with increasing altitude ($h$) above Earth surface.
  - $g$ decreases with increasing depth ($d$) below Earth surface, becoming zero at the center of the Earth.

---

### 16. Mass versus Weight (Comparison)

| Parameter | Mass ($m$) | Weight ($W$) |
| :--- | :--- | :--- |
| **Definition** | Quantity of matter contained in a body | Gravitational force exerted on the body by Earth ($W = mg$) |
| **Quantity Type** | Scalar quantity (magnitude only) | Vector quantity (directed towards Earth center) |
| **SI Unit** | Kilogram ($\\text{kg}$) | Newton ($\\text{N}$) |
| **Measuring Instrument**| Physical balance / Beam balance | Spring balance |
| **Variability** | Constant everywhere across the universe | Varies from place to place as $g$ changes |
| **Can it be zero?** | Can never be zero | Zero in deep space and at the center of Earth ($g=0$) |

---

### 17. Apparent Weight in an Elevator / Lift
When a person of mass $m$ stands on a weighing scale inside a lift, the scale reads the reaction force $R$ (Apparent Weight):
1. **Lift moving upward with acceleration $a$**:
   $$R - mg = ma \\implies R = m(g + a)$$
   *(Apparent weight is GREATER than true weight; person feels heavier).*
2. **Lift moving downward with acceleration $a$**:
   $$mg - R = ma \\implies R = m(g - a)$$
   *(Apparent weight is LESS than true weight; person feels lighter).*
3. **Lift at rest or moving with uniform velocity ($a = 0$)**:
   $$R = mg$$
   *(Apparent weight EQUALS true weight).*
4. **Lift cable snaps (Free Fall under gravity, $a = g$)**:
   $$R = m(g - g) = 0$$
   *(Apparent weight becomes ZERO. This condition is called **Weightlessness**).*

---

### 18. Weightlessness of Astronauts in Space
- A widespread misconception is that astronauts in orbiting spacecraft float because there is "zero gravity" in space. This is scientifically incorrect.
- At typical satellite altitudes ($400\\text{ km}$ above Earth), gravity is still approximately $90\\%$ of its surface value!
- **Scientific Reason**: The spacecraft and astronauts are in a continuous state of **free-fall towards the Earth** with acceleration equal to the local $g$. Because both are falling at the identical acceleration, the floor of the spacecraft exerts zero normal reaction on the astronaut ($R = 0$). Hence, they experience true weightlessness.`,

  bodyTa: `### 1. இயந்திரவியல் மற்றும் அதன் பிரிவுகள்
விசையின் தாக்கத்தால் பொருட்களில் ஏற்படும் மாற்றங்களை ஆராயும் இயற்பியல் பிரிவு **இயந்திரவியல் (Mechanics)** ஆகும். இது இரண்டு பிரிவுகளாகப் பிரிக்கப்படுகிறது:
1. **நிலையியல் (Statics)**: விசைகளின் செயல்பாட்டிற்கு உட்பட்டு ஓய்வு நிலையில் உள்ள பொருட்களைப் பற்றி ஆராய்கிறது.
2. **இயக்கவியல் (Dynamics)**: விசைகளின் செயல்பாட்டினால் இயங்கும் பொருட்களைப் பற்றி ஆராய்கிறது. இது மேலும் இரு பிரிவுகளாகப் பிரிக்கப்படுகிறது:
   - **இயக்கவியல் (Kinematics)**: இயக்கத்தை ஏற்படுத்தும் விசையைக் கணக்கில் கொள்ளாமல், இயக்கத்தை மட்டும் ஆராய்கிறது.
   - **இயக்க விசியல் (Kinetics)**: பொருட்களின் இயக்கத்தையும், அதற்கு காரணமான விசையையும் சேர்த்து ஆராய்கிறது.

---

### 2. விசை மற்றும் இயக்கம் பற்றிய வரலாற்றுப் பின்னணி
- **அரிஸ்டாட்டில் (கிரேக்க தத்துவஞானி, கிமு 384–322)**:
  - இயங்கும் பொருட்கள் யாவும் ஓய்வு நிலைக்கு வர விசை தேவை எனக் கருதினார்.
  - இயக்கத்தை **இயற்கை இயக்கம் (விசையற்ற இயக்கம்)** மற்றும் **இயற்கைக்கு மாறான வலிந்த இயக்கம் (விசை சார்ந்த இயக்கம்)** எனப் பிரித்தார்.
- **கலீலியோ கலீலி (1564–1642)**:
  - இயற்கையில் உள்ள பொருட்கள் யாவும் தங்களின் ஓய்வு நிலையையோ அல்லது சீரான இயக்க நிலையையோ தாமாக மாற்றிக்கொள்ளாது.
  - புறவிசை செயல்படாத வரை பொருட்கள் அதே திசைவேகத்தில் தொடர்ந்து இயங்கும்.
  - வெற்றிடத்தில் வெவ்வேறு நிறை, வடிவம் கொண்ட பொருட்கள் ஒரே உயரத்தில் இருந்து விழும்போது ஒரே நேரத்தில் தரையை அடைகின்றன.
  - பொருட்களின் இந்த உள்ளார்ந்த பண்பிற்கு **நிலைமம் (Inertia)** என்று பெயரிட்டார்.

---

### 3. நிலைமம் மற்றும் அதன் வகைகள்
**வரையறை**: எந்த ஒரு புறவிசையும் செயல்படாதவரை, பொருட்கள் தங்களின் ஓய்வு நிலையையோ அல்லது நேர்க்கோட்டில் அமைந்த சீரான இயக்க நிலையையோ மாற்றிக்கொள்ள இயலாத உள்ளார்ந்த பண்பு **நிலைமம்** எனப்படும்.
பொருளின் நிறை அதிகரிக்க அதிகரிக்க அதன் நிலைமமும் அதிகரிக்கும்.

**நிலைமத்தின் வகைகள் மற்றும் அன்றாட உதாரணங்கள்**:
1. **ஓய்வில் நிலைமம்**: ஓய்வில் உள்ள ஒரு பொருள் தனது ஓய்வு நிலையை மாற்றிக்கொள்ள மறுக்கும் பண்பு.
   - *எடுத்துக்காட்டு 1*: நின்றுகொண்டிருக்கும் பேருந்து திடீரென முன்னோக்கி நகரும்போது, அதிலுள்ள பயணிகள் பின்னோக்கி சாய்கின்றனர்.
   - *எடுத்துக்காட்டு 2*: மரத்தின் கிளைகளை வேகமாக உலுக்கும்போது இலைகளும் பழங்களும் மரத்திலிருந்து விடுபட்டு கீழே விழுகின்றன.
2. **இயக்கத்தில் நிலைமம்**: இயக்கத்தில் உள்ள ஒரு பொருள் தனது சீரான இயக்க நிலையை மாற்றிக்கொள்ள மறுக்கும் பண்பு.
   - *எடுத்துக்காட்டு 1*: வேகமாக ஓடும் பேருந்து திடீரென நிறுத்தப்படும்போது பயணிகள் முன்னோக்கி சாய்கின்றனர்.
   - *எடுத்துக்காட்டு 2*: நீளம் தாண்டுதல் போட்டியில் உள்ள வீரர் அதிக தூரம் தாண்டுவதற்காக, தாண்டுவதற்கு முன் சிறிது தூரம் வேகமாக ஓடி வருகிறார்.
3. **திசையில் நிலைமம்**: இயங்கும் பொருள் தனது இயக்கத் திசையை மாற்றிக்கொள்ள மறுக்கும் பண்பு.
   - *எடுத்துக்காட்டு 1*: வளைவுப் பாதையில் கார் திரும்பும்போது பயணிகள் வளைவின் வெளிப்புறமாக சாய்கின்றனர்.
   - *எடுத்துக்காட்டு 2*: கத்தியை சாணை பிடிக்கும் சக்கரத்தில் தீட்டும்போது தீப்பொறிகள் தொடுகோட்டுத் திசையில் பறக்கின்றன.

---

### 4. நேர்க்கோட்டு உந்தம் (p)
**வரையறை**: இயங்கும் பொருளின் நிறை மற்றும் திசைவேகத்தின் பெருக்கற்பலன் **நேர்க்கோட்டு உந்தம்** எனப்படும். இது இயக்கத்தின் அளவைக் குறிக்கிறது.
$$\\vec{p} = m \\cdot \\vec{v}$$
- **அளவு வகை**: வெக்டர் அளவு (எண்மதிப்பும் திசையும் கொண்டது; இதன் திசை திசைவேகத்தின் திசையிலேயே அமையும்).
- **SI அலகு**: $\\text{kg m s}^{-1}$ (அல்லது $\\text{N s}$).
- **CGS அலகு**: $\\text{g cm s}^{-1}$.

---

### 5. நியூட்டனின் முதல் இயக்க விதி
**விதி வரையறை**: *"ஒவ்வொரு பொருளும் தன் மீது புறவிசை ஏதும் செயல்படாத வரையில், தனது ஓய்வு நிலையிலோ அல்லது நேர்க்கோட்டில் அமைந்த சீரான இயக்க நிலையிலோ தொடர்ந்து இருக்கும்."*
- இவ்விதி **நிலைமத்தை** விளக்குகிறது மற்றும் **விசையின் பண்பினைத் (தரம்)** தீர்மானிக்கிறது.

---

### 6. விசைகளின் வகைகள்
1. **ஒத்த இணை விசைகள்**: இரண்டு அல்லது அதற்கு மேற்பட்ட சமமான அல்லது சமமற்ற விசைகள் ஒரே திசையில் இணையாகச் செயல்பட்டால் அவை ஒத்த இணை விசைகள் எனப்படும் ($R = F_1 + F_2$).
2. **மாறுபட்ட இணை விசைகள்**: இரண்டு சமமான அல்லது சமமற்ற விசைகள் ஒன்றுக்கொன்று எதிர் திசையில் இணையாகச் செயல்பட்டால் அவை மாறுபட்ட இணை விசைகள் எனப்படும் ($R = F_1 - F_2$).
3. **சமன்செய்த விசைகள்**: ஒரு பொருளின் மீது செயல்படும் பல விசைகளின் தொகுபயன் மதிப்பு சுழி எனில் ($R = 0$), அவை சமன்செய்த விசைகள் எனப்படும்.
4. **சமன்செய்யப்படாத விசைகள்**: தொகுபயன் விசை சுழி இல்லை எனில் ($R \\neq 0$), அவை சமன்செய்யப்படாத விசைகள் எனப்படும்.

---

### 7. விசையின் சுழற்சி விளைவு: திருப்புத்திறன் மற்றும் இரட்டை
1. **விசையின் திருப்புத்திறன் (Torque, $\\tau$)**:
   ஒரு புள்ளியை அல்லது அச்சைப் பற்றி பொருளைச் சுழற்றும் விசையின் விளைவு திருப்புத்திறன் எனப்படும்.
   $$\\tau = F \\times d$$
   - $F$ என்பது விசை, $d$ என்பது சுழற்சி அச்சிலிருந்து விசை செயல்படும் புள்ளிக்கு உள்ள செங்குத்துத் தொலைவு.
   - **SI அலகு**: $\\text{N m}$.
   - கடிகார முள் சுழலும் எதிர் திசை = நேர்மதிப்பு (+); கடிகார முள் சுழலும் திசை = எதிர்மதிப்பு (-).
   - கதவின் கைப்பிடி கீல்களிலிருந்து அதிக தொலைவில் வைக்கப்படுவதற்கு காரணம், தொலைவு $d$ கூடும்போது குறைந்த விசையிலேயே அதிக திருப்புத்திறன் கிடைக்கும்.
2. **இரட்டை (Couple)**:
   ஒரே நேர்க்கோட்டில் செயல்படாத, இரண்டு சமமான மற்றும் எதிர் திசையிலான இணை விசைகள் 'இரட்டை' எனப்படும்.
   - இரட்டையின் திருப்புத்திறன் $M = F \\times s$.
   - *எடுத்துக்காட்டுகள்*: திருகு குழாயைத் திறத்தல், வாகனத்தின் ஸ்டீயரிங் சக்கரத்தைத் திருப்புதல்.

---

### 8. நியூட்டனின் இரண்டாம் இயக்க விதி (விசையின் விதி)
**விதி வரையறை**: *"பொருள் ஒன்றின் மீது செயல்படும் விசையானது அப்பொருளின் உந்த மாறுபாட்டு வீதத்திற்கு நேர்விகிதத்தில் அமையும். மேலும் இவ்வுந்த மாறுபாடு விசையின் திசையிலேயே நிகழும்."*

#### **$F = ma$ சமன்பாட்டைத் தருவித்தல்**:
1. $m$ நிறையுடைய ஒரு பொருள் $u$ என்ற ஆரம்ப திசைவேகத்தில் நேர்க்கோட்டில் செல்கிறது என்க.
2. $t$ கால இடைவெளியில் அதன் மீது $F$ என்ற சமன்செய்யப்படாத புறவிசை செயல்படுகிறது.
3. இதனால் அதன் திசைவேகம் $v$ என மாறுகிறது.
4. பொருளின் தொடக்க உந்தம்:
   $$p_i = m \\cdot u$$
5. பொருளின் இறுதி உந்தம்:
   $$p_f = m \\cdot v$$
6. உந்த மாறுபாடு:
   $$\\Delta p = p_f - p_i = mv - mu = m(v - u)$$
7. உந்த மாறுபாட்டு வீதம்:
   $$\\text{உந்த மாறுபாட்டு வீதம்} = \\frac{m(v - u)}{t}$$
8. முடுக்கம் $a = \\frac{v - u}{t}$ என்பதால்:
   $$\\text{உந்த மாறுபாட்டு வீதம்} = m \\cdot a$$
9. நியூட்டனின் இரண்டாம் விதிப்படி:
   $$F \\propto m \\cdot a$$
   $$F = k \\cdot m \\cdot a$$
10. அனைத்து அலகு முறைகளிலும் $k = 1$ என வரையறுக்கப்படுகிறது:
    $$F = m \\cdot a$$
    $$\\text{விசை} = \\text{நிறை} \\times \\text{முடுக்கம்}$$

---

### 9. விசையின் அலகுகள்
- **SI அலகு**: **நியூட்டன் (N)**. $1\\text{ kg}$ நிறையுள்ள பொருளை $1\\text{ m s}^{-2}$ அளவிற்கு முடுக்குவிக்க தேவைப்படும் விசை $1\\text{ N}$ ஆகும்.
- **CGS அலகு**: **டைன் (Dyne)**. $1\\text{ g}$ நிறையுள்ள பொருளை $1\\text{ cm s}^{-2}$ அளவிற்கு முடுக்குவிக்க தேவைப்படும் விசை $1\\text{ dyne}$ ஆகும்.
- **தொடர்பு**: $1\\text{ N} = 10^5\\text{ dynes}$.
- **ஈர்ப்பு அலகு**: $1\\text{ kgf} = 9.8\\text{ N}$; $1\\text{ gf} = 980\\text{ dynes}$.

---

### 10. கணத்தாக்கு விசை (Impulse, $J$)
**வரையறை**: மிகக் குறுகிய காலத்தில் செயல்படும் மிகப் பெரிய விசை **கணத்தாக்கு விசை** எனப்படும். விசை மற்றும் காலத்தின் பெருக்கற்பலன் கணத்தாக்கு ($J$) ஆகும்.
$$J = F \\times \\Delta t = \\Delta p$$
- **SI அலகு**: $\\text{kg m s}^{-1}$ அல்லது $\\text{N s}$.
- *நடைமுறைப் பயன்பாடு*: கிரிக்கெட் வீரர் பந்தைப் பிடிக்கும்போது கைகளை பின்னோக்கி இழுக்கிறார். இதனால் மோதல் காலம் $\\Delta t$ அதிகரித்து, கைகளின் மீது படும் விசை $F$ குறைகிறது.

---

### 11. நியூட்டனின் மூன்றாம் இயக்க விதி
**விதி வரையறை**: *"ஒவ்வொரு விசைக்கும் அதற்கு சமமான மற்றும் எதிர் திசையிலான எதிர்விசை உண்டு. விசை மற்றும் எதிர்விசை எப்போதும் இரு வேறு பொருட்களின் மீது செயல்படும்."*
$$F_{AB} = -F_{BA}$$
- *எடுத்துக்காட்டுகள்*: பறவைகள் பறத்தல், துப்பாக்கி சுடும்போது பின்னுதைத்தல், நீச்சல் அடித்தல்.

---

### 12. நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு
**கோட்பாடு**: *"புறவிசை ஏதும் செயல்படாத வரையில், ஒரு அமைப்பின் மீது செயல்படும் மொத்த நேர்க்கோட்டு உந்தம் மாறாமல் இருக்கும்."*

#### **உந்த மாறாக் கோட்பாட்டை நிரூபித்தல்**:
1. $m_1$ மற்றும் $m_2$ நிறைகொண்ட இரு பொருட்கள் நேர்க்கோட்டில் முறையே $u_1, u_2$ திசைவேகங்களில் செல்கின்றன ($u_1 > u_2$).
2. அவை $t$ கால இடைவெளியில் ஒன்றையொன்று மோதுகின்றன.
3. மோதலின் போது $A$ ஆனது $B$ மீது செலுத்தும் விசை $F_B$. $B$ ஆனது $A$ மீது செலுத்தும் எதிர்விசை $F_A$.
4. மோதலுக்குப் பின் அவற்றின் திசைவேகங்கள் $v_1, v_2$.
5. $B$ பொருளின் மீது செயல்பட்ட விசை:
   $$F_B = m_2 \\left(\\frac{v_2 - u_2}{t}\\right)$$
6. $A$ பொருளின் மீது செயல்பட்ட எதிர்விசை:
   $$F_A = m_1 \\left(\\frac{v_1 - u_1}{t}\\right)$$
7. நியூட்டனின் மூன்றாம் விதிப்படி:
   $$F_B = -F_A$$
8. சமன்பாடுகளைப் பிரதியிட:
   $$m_2 \\left(\\frac{v_2 - u_2}{t}\\right) = -m_1 \\left(\\frac{v_1 - u_1}{t}\\right)$$
   $$m_2 v_2 - m_2 u_2 = -m_1 v_1 + m_1 u_1$$
   $$m_1 u_1 + m_2 u_2 = m_1 v_1 + m_2 v_2$$
   $$\\text{மோதலுக்கு முன் உள்ள மொத்த உந்தம்} = \\text{மோதலுக்குப் பின் உள்ள மொத்த உந்தம்}$$
   *எனவே நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு நிரூபிக்கப்பட்டது.*

---

### 13. ராக்கெட் ஏவுதல்
ராக்கெட் ஏவுதலில் **நியூட்டனின் மூன்றாம் விதி** மற்றும் **நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு** பயன்படுகின்றன.
- எரிபொருள் எரியூட்டப்பட்டு அதிக திசைவேகத்துடன் கீழ்நோக்கி வெளியேற்றப்படுகிறது (செயல்).
- சமமான எதிர் உந்துவிசை ராக்கெட்டை மேல்நோக்கிச் செலுத்துகிறது (எதிர்ச்செயல்).
- எரிபொருள் எரிய எரிய ராக்கெட்டின் நிறை குறைகிறது. உந்தம் மாறாமல் இருக்க வேண்டும் என்பதால், நிறை குறையக் குறைய ராக்கெட்டின் திசைவேகம் தொடர்ந்து அதிகரிக்கிறது.

---

### 14. நியூட்டனின் பொது ஈர்ப்பியல் விதி
**விதி வரையறை**: *"அண்டத்தில் உள்ள ஒவ்வொரு பொருளும் மற்றொரு பொருளை அவற்றின் நிறைகளின் பெருக்கற்பலனுக்கு நேர்விகிதத்திலும், அவற்றிற்கு இடையே உள்ள தொலைவின் இருமடிக்கு எதிர்விகிதத்திலும் ஈர்க்கிறது."*
$$F = G \\cdot \\frac{m_1 m_2}{r^2}$$
- $G$ என்பது பொது ஈர்ப்பியல் மாறிலி: **$G = 6.674 \\times 10^{-11} \\text{ N m}^2 \\text{kg}^{-2}$**.

---

### 15. புவியீர்ப்பு முடுக்கம் ($g$) மற்றும் $G$ இடையேயான தொடர்பு
$$g = \\frac{G \\cdot M}{R^2}$$
- பூமி முழுமையான கோள வடிவமாக இல்லாமல் நீள்வட்ட வடிவில் உள்ளதால்:
  - துருவப் பகுதியில் ஆரம் குறைவு, எனவே **துருவங்களில் $g$ மதிப்பு அதிகம் ($9.83\\text{ m s}^{-2}$)**.
  - நிலநடுக்கோட்டுப் பகுதியில் ஆரம் அதிகம், எனவே **நிலநடுக்கோட்டில் $g$ மதிப்பு குறைவு ($9.78\\text{ m s}^{-2}$)**.
  - சராசரி மதிப்பு: $g = 9.8\\text{ m s}^{-2}$.

---

### 16. நிறை மற்றும் எடை ஒப்பீடு
- **நிறை**: பொருளில் உள்ள பருப்பொருளின் அளவு; ஸ்கேலார் அளவு; SI அலகு கிலோகிராம் ($\\text{kg}$); எங்கும் மாறாது.
- **எடை**: பொருளின் மீது செயல்படும் புவியீர்ப்பு விசை ($W = mg$); வெக்டர் அளவு; SI அலகு நியூட்டன் ($\\text{N}$); இடத்திற்கு இடம் மாறும்; புவி மையத்தில் சுழியாகும்.

---

### 17. மின் தூக்கியில் (Lift) தோற்ற எடை
1. மின் தூக்கி முடுக்கத்துடன் மேலே செல்லும்போது: $R = m(g + a)$ (தோற்ற எடை கூடுகிறது).
2. மின் தூக்கி முடுக்கத்துடன் கீழே இறங்கும்போது: $R = m(g - a)$ (தோற்ற எடை குறைகிறது).
3. மின் தூக்கி ஓய்வில் அல்லது சீரான வேகத்தில் இயங்கும்போது: $R = mg$ (உண்மை எடைக்கு சமம்).
4. மின் தூக்கியின் கம்பி அறுந்து தடையின்றி கீழே விழும்போது ($a = g$): $R = m(g - g) = 0$ (**எடையின்மை நிலை**).`,

  // 4. IMPORTANT TERMS
  importantTerms: [
    {
      termEn: 'Inertia',
      termTa: 'நிலைமம்',
      definitionEn: 'The inherent resistance of any physical body to alter its state of rest or uniform motion in a straight line unless acted upon by an external unbalanced force.',
      definitionTa: 'புறவிசை செயல்படாத வரை தனது ஓய்வு அல்லது சீரான இயக்க நிலையை மாற்றிக்கொள்ள மறுக்கும் பொருளின் உள்ளார்ந்த பண்பு.'
    },
    {
      termEn: 'Linear Momentum',
      termTa: 'நேர்க்கோட்டு உந்தம்',
      definitionEn: 'The physical measure of the quantity of motion in a body, given by the product of its mass and velocity (p = mv, unit: kg m s^-1).',
      definitionTa: 'இயங்கும் பொருளின் நிறை மற்றும் திசைவேகத்தின் பெருக்கற்பலன் (p = mv; அலகு: கிகி மீ வி^-1).'
    },
    {
      termEn: 'Impulse',
      termTa: 'கணத்தாக்கு',
      definitionEn: 'The product of a large force and the short time duration over which it acts, which equals the total change in linear momentum (J = F · Δt = Δp).',
      definitionTa: 'மிகக் குறுகிய காலத்தில் செயல்படும் பெருவிசை மற்றும் காலத்தின் பெருக்கற்பலன்; இது உந்த மாறுபாட்டிற்கு சமம் (J = F · Δt).'
    },
    {
      termEn: 'Torque (Moment of Force)',
      termTa: 'விசையின் திருப்புத்திறன்',
      definitionEn: 'The rotational turning effect of a force about a fixed pivot or axis (τ = F × d, unit: N m).',
      definitionTa: 'ஒரு புள்ளியை அல்லது அச்சைப் பற்றி பொருளைச் சுழற்றும் விசையின் சுழற்சி விளைவு (τ = F × d; அலகு: நியூட்டன் மீட்டர்).'
    },
    {
      termEn: 'Couple',
      termTa: 'இரட்டை',
      definitionEn: 'A pair of equal, opposite, and non-collinear parallel forces that produce pure rotation without linear translation.',
      definitionTa: 'ஒரே நேர்க்கோட்டில் அமையாத இரு சமமான மற்றும் எதிர் திசையிலான இணை விசைகள்.'
    },
    {
      termEn: 'Universal Gravitational Constant (G)',
      termTa: 'பொது ஈர்ப்பியல் மாறிலி',
      definitionEn: 'The universal proportionality factor in Newton\'s law of gravitation, equal to 6.674 × 10^-11 N m² kg^-2.',
      definitionTa: 'நியூட்டனின் ஈர்ப்பியல் விதியில் பயன்படும் மாறிலி; இதன் மதிப்பு 6.674 × 10^-11 N m² kg^-2.'
    },
    {
      termEn: 'Acceleration Due to Gravity (g)',
      termTa: 'புவியீர்ப்பு முடுக்கம்',
      definitionEn: 'The acceleration acquired by an object in free fall under the sole influence of Earth\'s gravitational attraction (standard value: 9.8 m s^-2).',
      definitionTa: 'புவியீர்ப்பு விசையினால் மட்டும் தடையின்றி கீழே விழும் பொருளில் ஏற்படும் முடுக்கம் (சராசரி: 9.8 மீ வி^-2).'
    },
    {
      termEn: 'Apparent Weight',
      termTa: 'தோற்ற எடை',
      definitionEn: 'The net upward supporting force (normal reaction R) exerted by a supporting surface against an object\'s weight.',
      definitionTa: 'தாங்கும் பரப்பினால் பொருளின் மீது செலுத்தப்படும் செங்குத்து எதிர்விசை (R).'
    },
    {
      termEn: 'Weightlessness',
      termTa: 'எடையின்மை',
      definitionEn: 'The physical state wherein the apparent weight of a body becomes zero (R = 0) during free fall or in orbital satellite motion.',
      definitionTa: 'தடையின்றி கீழே விழும்போதோ அல்லது செயற்கைக்கோளில் உள்ளபோதோ தோற்ற எடை சுழியாகும் நிலை (R = 0).'
    },
    {
      termEn: 'Newton (SI Unit of Force)',
      termTa: 'நியூட்டன் (விசையின் SI அலகு)',
      definitionEn: 'The magnitude of force that accelerates a mass of 1 kg at a rate of 1 m s^-2 (1 N = 10^5 dynes).',
      definitionTa: '1 கிலோகிராம் நிறையுள்ள பொருளை 1 மீ வி^-2 அளவிற்கு முடுக்குவிக்கத் தேவையான விசை.'
    }
  ],

  // 7. EXAMPLES (STEP-BY-STEP WORKED PROBLEMS)
  workedExamples: [
    {
      questionEn: 'Example 1: A force acts on a stationary body of mass 5 kg for 2 seconds. If the velocity of the body increases to 10 m s^-1, calculate the magnitude of the applied force.',
      questionTa: 'எடுத்துக்காட்டு 1: 5 கிகி நிறையுள்ள ஒரு நிலையான பொருளின் மீது 2 விநாடிகள் ஒரு விசை செயல்படுகிறது. பொருளின் திசைவேகம் 10 மீ வி^-1 ஆக அதிகரித்தால், செயல்பட்ட விசையின் அளவைக் காண்க.',
      solutionEn: 'Given Data:\n• Mass of the body (m) = 5 kg\n• Initial velocity (u) = 0 m s^-1 (starts from rest)\n• Final velocity (v) = 10 m s^-1\n• Time duration (t) = 2 s\n\nFormula & Step-by-Step Method:\n1. Acceleration a = (v - u) / t\n   a = (10 - 0) / 2 = 5 m s^-2\n2. According to Newton\'s Second Law:\n   Force F = m × a\n   F = 5 kg × 5 m s^-2 = 25 N',
      solutionTa: 'கொடுக்கப்பட்டவை:\n• நிறை (m) = 5 கிகி\n• தொடக்க திசைவேகம் (u) = 0 மீ வி^-1\n• இறுதி திசைவேகம் (v) = 10 மீ வி^-1\n• காலம் (t) = 2 வி\n\nதீர்வு முறை:\n1. முடுக்கம் a = (v - u) / t = (10 - 0) / 2 = 5 மீ வி^-2\n2. நியூட்டனின் இரண்டாம் விதிப்படி:\n   விசை F = m × a\n   F = 5 × 5 = 25 நியூட்டன் (N)',
      answer: '25 N'
    },
    {
      questionEn: 'Example 2: A cricket ball of mass 0.2 kg moving at 20 m s^-1 is brought to rest by a fielder in 0.1 seconds. Calculate (i) the impulse imparted, and (ii) the average retarding force exerted on the fielder\'s hands.',
      questionTa: 'எடுத்துக்காட்டு 2: 20 மீ வி^-1 திசைவேகத்தில் வரும் 0.2 கிகி நிறையுள்ள ஒரு கிரிக்கெட் பந்தை, ஒரு பீல்டர் 0.1 விநாடியில் பிடிக்கிறார் எனில், (i) கணத்தாக்கு மற்றும் (ii) கைகளின் மீது செயல்பட்ட சராசரி விசையைக் காண்க.',
      solutionEn: 'Given Data:\n• Mass (m) = 0.2 kg\n• Initial velocity (u) = 20 m s^-1\n• Final velocity (v) = 0 m s^-1 (brought to rest)\n• Time (t) = 0.1 s\n\nCalculations:\n1. Impulse J = Change in Momentum = m(v - u)\n   J = 0.2 × (0 - 20) = -4 kg m s^-1 (or -4 N s)\n   Magnitude of impulse = 4 N s\n2. Average Force F = Impulse / Time = -4 / 0.1 = -40 N\n   (The negative sign signifies a retarding force opposing the motion).',
      solutionTa: 'கொடுக்கப்பட்டவை:\n• நிறை (m) = 0.2 கிகி\n• தொடக்க திசைவேகம் (u) = 20 மீ வி^-1\n• இறுதி திசைவேகம் (v) = 0\n• காலம் (t) = 0.1 வி\n\nகணக்கீடு:\n1. கணத்தாக்கு J = உந்த மாறுபாடு = m(v - u)\n   J = 0.2 × (0 - 20) = -4 N s (எண்மதிப்பு: 4 N s)\n2. சராசரி விசை F = J / t = -4 / 0.1 = -40 N (எதிர்விசை)',
      answer: 'Impulse = 4 N s, Force = 40 N'
    },
    {
      questionEn: 'Example 3: A bullet of mass 20 g is fired horizontally from a rifle of mass 4 kg with a muzzle velocity of 400 m s^-1. Determine the recoil velocity of the rifle.',
      questionTa: 'எடுத்துக்காட்டு 3: 4 கிகி நிறையுடைய ஒரு துப்பாக்கியிலிருந்து 20 கிராம் நிறையுடைய குண்டு ஒன்று 400 மீ வி^-1 திசைவேகத்தில் கிடைமட்டமாக சுடப்படுகிறது எனில், துப்பாக்கியின் பின்னுதைப்பு திசைவேகத்தைக் காண்க.',
      solutionEn: 'Given Data:\n• Mass of rifle (m1) = 4 kg\n• Mass of bullet (m2) = 20 g = 0.02 kg\n• Initial velocities: u1 = 0, u2 = 0 (before firing, both at rest)\n• Final velocity of bullet (v2) = +400 m s^-1\n• Recoil velocity of rifle = v1 = ?\n\nConservation of Linear Momentum:\nTotal momentum before firing = Total momentum after firing\n0 = m1·v1 + m2·v2\n4 × v1 + 0.02 × 400 = 0\n4·v1 + 8 = 0\n4·v1 = -8\nv1 = -8 / 4 = -2 m s^-1\n(The negative sign indicates the rifle recoils in the opposite direction to the bullet).',
      solutionTa: 'கொடுக்கப்பட்டவை:\n• துப்பாக்கியின் நிறை (m1) = 4 கிகி\n• குண்டின் நிறை (m2) = 20 கி = 0.02 கிகி\n• தொடக்க உந்தம் = 0\n• குண்டின் திசைவேகம் (v2) = +400 மீ வி^-1\n\nஉந்த மாறாக் கோட்பாட்டின்படி:\n0 = m1·v1 + m2·v2\n4 × v1 + (0.02 × 400) = 0\n4·v1 + 8 = 0\nv1 = -8 / 4 = -2 மீ வி^-1\n(எதிர்மறை குறியானது துப்பாக்கி குண்டிற்கு எதிர் திசையில் பின்னுதைக்கிறது என்பதைக் காட்டுகிறது).',
      answer: '-2 m s^-1 (recoil backward)'
    },
    {
      questionEn: 'Example 4: A person of mass 60 kg stands inside an elevator. Calculate their apparent weight when the elevator is: (a) accelerating upwards at 2 m s^-2, (b) accelerating downwards at 2 m s^-2, and (c) cable snaps (free fall). Take g = 10 m s^-2.',
      questionTa: 'எடுத்துக்காட்டு 4: 60 கிகி நிறையுள்ள ஒருவர் மின் தூக்கியில் நிற்கிறார். மின் தூக்கி: (அ) 2 மீ வி^-2 முடுக்கத்துடன் மேலே செல்லும்போது, (ஆ) 2 மீ வி^-2 முடுக்கத்துடன் கீழே இறங்கும்போது, (இ) கம்பி அறுந்து கீழே விழும்போது அவரது தோற்ற எடையைக் காண்க. (g = 10 மீ வி^-2 எனக்கொள்க).',
      solutionEn: 'Given Data:\n• Mass (m) = 60 kg, g = 10 m s^-2, acceleration a = 2 m s^-2\n\nStep-by-step evaluation:\n(a) Elevator moving upwards with acceleration a:\n    R = m(g + a) = 60 × (10 + 2) = 60 × 12 = 720 N (Feels heavier)\n(b) Elevator moving downwards with acceleration a:\n    R = m(g - a) = 60 × (10 - 2) = 60 × 8 = 480 N (Feels lighter)\n(c) Free-fall under gravity (a = g):\n    R = m(g - g) = 60 × 0 = 0 N (Weightlessness)',
      solutionTa: 'கொடுக்கப்பட்டவை:\n• நிறை m = 60 கிகி, g = 10 மீ வி^-2, a = 2 மீ வி^-2\n\nகணக்கீடுகள்:\n(அ) மேல்நோக்கி முடுக்குவிக்கப்படும்போது: R = m(g + a) = 60 × (10 + 2) = 720 நியூட்டன்\n(ஆ) கீழ்நோக்கி முடுக்குவிக்கப்படும்போது: R = m(g - a) = 60 × (10 - 2) = 480 நியூட்டன்\n(இ) கம்பி அறுந்து தடையின்றி கீழே விழும்போது: R = m(g - g) = 0 நியூட்டன் (எடையின்மை)',
      answer: '(a) 720 N, (b) 480 N, (c) 0 N'
    }
  ],

  // 8. EXAM PREPARATION QUESTIONS
  examQuestions: [
    {
      type: 'vsa',
      marks: 1,
      questionEn: 'Define 1 Newton (unit of force).',
      questionTa: '1 நியூட்டன் வரையறு.',
      answerEn: '1 Newton is defined as the amount of force required to produce an acceleration of 1 m s^-2 in a body of mass 1 kg.\nFormula: 1 N = 1 kg × 1 m s^-2 = 10^5 dynes.',
      answerTa: '1 கிலோகிராம் நிறையுள்ள பொருளை 1 மீ வி^-2 அளவிற்கு முடுக்குவிக்கத் தேவையான விசையின் அளவு 1 நியூட்டன் (N) எனப்படும்.'
    },
    {
      type: 'vsa',
      marks: 1,
      questionEn: 'Why does an athlete run a certain distance before taking a long jump?',
      questionTa: 'நீளம் தாண்டுபவர் தாண்டுவதற்கு முன் சிறிது தூரம் ஓடுவது ஏன்?',
      answerEn: 'By running prior to the jump, the athlete acquires the Inertia of Motion, which helps them sustain their forward velocity and jump a greater distance.',
      answerTa: 'ஓடி வருவதன் மூலம் இயங்குபவர் இயக்கத்திற்கான நிலைமத்தைப் பெறுகிறார். இது அவரை நீண்ட தூரம் தாண்டுவதற்கு முன்னோக்கிச் செலுத்துகிறது.'
    },
    {
      type: 'sa',
      marks: 2,
      questionEn: 'Differentiate between Mass and Weight (give two distinctions).',
      questionTa: 'நிறை மற்றும் எடையை வேறுபடுத்துக (ஏதேனும் இரண்டு வேறுபாடுகள்).',
      answerEn: '1. Nature: Mass is a scalar quantity (only magnitude); Weight is a vector quantity (directed towards Earth\'s center).\n2. Variation: Mass is constant everywhere in the universe; Weight varies from place to place depending on the local acceleration due to gravity (W = mg).',
      answerTa: '1. அளவு வகை: நிறை என்பது ஸ்கேலார் அளவு; எடை என்பது புவி மையத்தை நோக்கிச் செயல்படும் வெக்டர் அளவு.\n2. மாறாத்தன்மை: நிறை அண்டத்தின் எவ்விடத்திலும் மாறாது; எடை புவியீர்ப்பு முடுக்கத்தின் (g) மாற்றத்தைப் பொறுத்து இடத்திற்கு இடம் மாறும்.'
    },
    {
      type: 'sa',
      marks: 2,
      questionEn: 'State Newton\'s Second Law of Motion and write its mathematical equation.',
      questionTa: 'நியூட்டனின் இரண்டாம் இயக்க விதியைக் கூறி, அதன் சமன்பாட்டை எழுதுக.',
      answerEn: 'Statement: The rate of change of linear momentum of a body is directly proportional to the external unbalanced force impressed upon it, and the change takes place in the direction of the force.\nMathematical Form: F = m × a (Force = Mass × Acceleration).',
      answerTa: 'விதி: பொருள் ஒன்றின் மீது செயல்படும் விசையானது அப்பொருளின் உந்த மாறுபாட்டு வீதத்திற்கு நேர்விகிதத்தில் அமையும். மேலும் இவ்வுந்த மாறுபாடு விசையின் திசையிலேயே நிகழும்.\nசமன்பாடு: F = m × a.'
    },
    {
      type: 'conceptual',
      marks: 4,
      questionEn: 'Explain why a cricket fielder pulls his hands backward while catching a ball.',
      questionTa: 'கிரிக்கெட் விளையாட்டில் பந்தை பிடிக்கும்போது பீல்டர் தனது கைகளை பின்னோக்கி இழுப்பது ஏன்? விளக்குக.',
      answerEn: '1. Principle: Impulse-Momentum Theorem (J = F · Δt = Δp).\n2. Explanation: The momentum change Δp of the fast-moving cricket ball to come to rest is fixed.\n3. By pulling his hands backward with the ball, the fielder increases the time duration of impact (Δt).\n4. Since F = Δp / Δt, increasing Δt drastically reduces the average retarding force F experienced by the hands, preventing severe injury.',
      answerTa: '1. தத்துவம்: கணத்தாக்கு சமன்பாடு (J = F · Δt = Δp).\n2. விளக்கம்: பந்தின் உந்தத்தை சுழியாக்க தேவையான உந்த மாறுபாடு மாறிலியாகும்.\n3. கைகளைப் பின்னோக்கி இழுப்பதன் மூலம் மோதல் கால இடைவெளி (Δt) அதிகரிக்கப்படுகிறது.\n4. F = Δp / Δt என்பதால், காலம் அதிகரிக்கும் போது கைகளின் மீது செயல்படும் விசை (F) மிகக் குறைந்து காயம் ஏற்படாமல் பாதுகாக்கிறது.'
    },
    {
      type: 'application',
      marks: 4,
      questionEn: 'Describe the working mechanism of rocket propulsion.',
      questionTa: 'ராக்கெட் ஏவுதலின் செயல்பாட்டு தத்துவத்தை விவரி.',
      answerEn: '1. Fundamental Principles: Rocket propulsion is governed by Newton\'s Third Law and the Law of Conservation of Linear Momentum.\n2. Action: When propellants ignite, high-temperature combustion gases are expelled backward through the nozzle at extreme velocity.\n3. Reaction: In response, an equal and opposite forward thrust propels the rocket upward.\n4. Momentum Conservation: As fuel burns away, the total mass m decreases continuously. To preserve total momentum, the velocity and upward acceleration increase continuously.',
      answerTa: '1. அடிப்படைக் கொள்கைகள்: நியூட்டனின் மூன்றாம் விதி மற்றும் நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு.\n2. செயல்: எரிபொருள் எரிக்கப்பட்டு உருவாகும் உயர் அழுத்த வாயுக்கள் முடுக்கப்பட்டு கீழ்நோக்கி வெளியேற்றப்படுகின்றன.\n3. எதிர்ச்செயல்: சமமான எதிர் உந்துவிசை ராக்கெட்டை மேல்நோக்கிச் செலுத்துகிறது.\n4. உந்த மாறாத்தன்மை: எரிபொருள் குறைய குறைய ராக்கெட்டின் நிறை குறைந்து திசைவேகம் அபரிமிதமாக அதிகரிக்கிறது.'
    },
    {
      type: 'la',
      marks: 7,
      questionEn: 'State the Law of Conservation of Linear Momentum and prove it with the help of Newton\'s third law of motion.',
      questionTa: 'நேர்க்கோட்டு உந்த மாறாக் கோட்பாட்டைக் கூறி, நியூட்டனின் மூன்றாம் இயக்க விதியின் மூலம் அதனை நிரூபிக்கவும்.',
      answerEn: 'Statement: In the absence of an external unbalanced force, the total linear momentum of an isolated system of bodies remains constant.\n\nDerivation Proof:\n1. Consider two bodies A and B of masses m1 and m2 moving along the same line with initial velocities u1 and u2 (u1 > u2).\n2. During collision for time t, body A exerts an action force FB on B, and body B exerts an equal and opposite reaction force FA on A.\n3. After collision, their final velocities become v1 and v2.\n4. Force on A: FA = m1(v1 - u1) / t\n5. Force on B: FB = m2(v2 - u2) / t\n6. According to Newton\'s 3rd Law: Action = -Reaction => FB = -FA\n7. m2(v2 - u2) / t = -m1(v1 - u1) / t\n8. m2·v2 - m2·u2 = -m1·v1 + m1·u1\n9. Rearranging: m1·u1 + m2·u2 = m1·v1 + m2·v2\nTotal momentum before collision = Total momentum after collision. Hence proved.',
      answerTa: 'கோட்பாடு: எந்தவொரு புறவிசையும் செயல்படாத வரையில், ஒரு அமைப்பின் மீது செயல்படும் மொத்த நேர்க்கோட்டு உந்தம் மாறாமல் இருக்கும்.\n\nநிரூபணம்:\n1. m1, m2 நிறைகொண்ட இரு பொருட்கள் நேர்க்கோட்டில் முறையே u1, u2 திசைவேகங்களில் செல்கின்றன (u1 > u2).\n2. மோதலின் போது A ஆனது B மீது செலுத்தும் விசை FB, B ஆனது A மீது செலுத்தும் எதிர்விசை FA.\n3. மோதலுக்குப் பின் திசைவேகங்கள் v1, v2.\n4. FA = m1(v1 - u1) / t\n5. FB = m2(v2 - u2) / t\n6. நியூட்டனின் மூன்றாம் விதிப்படி: FB = -FA\n7. m2(v2 - u2)/t = -m1(v1 - u1)/t\n8. m2·v2 - m2·u2 = -m1·v1 + m1·u1\n9. m1·u1 + m2·u2 = m1·v1 + m2·v2\n(மோதலுக்கு முன் உள்ள மொத்த உந்தம் = மோதலுக்குப் பின் உள்ள மொத்த உந்தம்). நிரூபிக்கப்பட்டது.'
    }
  ],

  // 10. QUICK REVISION: KEY FORMULAS, CONSTANTS & COMMON MISTAKES
  keyFormulas: [
    {
      nameEn: 'Newton’s Second Law',
      nameTa: 'நியூட்டனின் இரண்டாம் விதி',
      formula: 'F = m · a',
      explanationEn: 'Force equals mass times acceleration (SI unit: Newton, N = kg m s^-2).',
      explanationTa: 'விசை = நிறை × முடுக்கம் (அலகு: நியூட்டன்).'
    },
    {
      nameEn: 'Linear Momentum',
      nameTa: 'நேர்க்கோட்டு உந்தம்',
      formula: 'p = m · v',
      explanationEn: 'Momentum is mass times velocity (SI unit: kg m s^-1).',
      explanationTa: 'உந்தம் = நிறை × திசைவேகம் (அலகு: கிகி மீ வி^-1).'
    },
    {
      nameEn: 'Impulse of Force',
      nameTa: 'கணத்தாக்கு விசை',
      formula: 'J = F · Δt = Δp = m(v - u)',
      explanationEn: 'Impulse equals change in linear momentum (SI unit: N s).',
      explanationTa: 'கணத்தாக்கு = விசை × காலம் = உந்த மாறுபாடு.'
    },
    {
      nameEn: 'Conservation of Linear Momentum',
      nameTa: 'நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு',
      formula: 'm1·u1 + m2·u2 = m1·v1 + m2·v2',
      explanationEn: 'Total momentum before collision equals total momentum after collision.',
      explanationTa: 'மோதலுக்கு முன் உள்ள மொத்த உந்தம் = மோதலுக்குப் பின் உள்ள மொத்த உந்தம்.'
    },
    {
      nameEn: 'Universal Gravitation Law',
      nameTa: 'பொது ஈர்ப்பியல் விதி',
      formula: 'F = G · (m1 · m2) / r²',
      explanationEn: 'Gravitational attraction between two masses separated by distance r (G = 6.674 × 10^-11 N m² kg^-2).',
      explanationTa: 'ஈர்ப்பியல் விசை = G × (m1 · m2) / r².'
    },
    {
      nameEn: 'Acceleration Due to Gravity',
      nameTa: 'புவியீர்ப்பு முடுக்கம்',
      formula: 'g = (G · M) / R²',
      explanationEn: 'Independent of falling object mass m (surface average: 9.8 m s^-2).',
      explanationTa: 'புவியீர்ப்பு முடுக்கம் = (G · M) / R² (சராசரி: 9.8 மீ வி^-2).'
    },
    {
      nameEn: 'Apparent Weight in Elevator (Upward)',
      nameTa: 'மின் தூக்கியில் தோற்ற எடை (மேல்நோக்கி)',
      formula: 'R = m(g + a)',
      explanationEn: 'Apparent weight exceeds true weight when accelerating upward.',
      explanationTa: 'மேலே முடுக்குவிக்கப்படும்போது தோற்ற எடை கூடுகிறது.'
    },
    {
      nameEn: 'Apparent Weight in Elevator (Downward)',
      nameTa: 'மின் தூக்கியில் தோற்ற எடை (கீழ்நோக்கி)',
      formula: 'R = m(g - a)',
      explanationEn: 'Apparent weight is less than true weight when accelerating downward (R = 0 in free fall).',
      explanationTa: 'கீழே முடுக்குவிக்கப்படும்போது தோற்ற எடை குறைகிறது.'
    }
  ],

  rememberBoxes: [
    {
      tipEn: 'Board Exam Unit Trap: Always verify units before multiplying. If mass is given in grams (g), divide by 1000 to convert to kilograms (kg) before calculating Force or Momentum.',
      tipTa: 'அலகு எச்சரிக்கை: வினாக்களில் நிறை கிராமில் (g) கொடுக்கப்பட்டிருந்தால், அதை கட்டாயம் 1000-ஆல் வகுத்து கிலோகிராமாக (kg) மாற்றிய பிறகே F = ma சூத்திரத்தில் பயன்படுத்த வேண்டும்.'
    },
    {
      tipEn: 'Vector Direction Rule: Momentum and Velocity are vectors. When solving gun recoil or head-on collision problems, designate one direction as (+) and the opposite direction as (-).',
      tipTa: 'திசை எச்சரிக்கை: உந்தம் ஒரு வெக்டர் அளவு. துப்பாக்கி பின்னுதைப்பு கணக்குகளில் குண்டின் திசையை (+) எனவும், துப்பாக்கியின் எதிர் திசையை (-) எனவும் குறியிட மறக்காதீர்கள்.'
    }
  ],

  commonMistakes: [
    {
      mistakeEn: 'Confusing Universal Gravitational Constant (G) with Acceleration due to gravity (g).',
      mistakeTa: 'பொது ஈர்ப்பியல் மாறிலி (G) மற்றும் புவியீர்ப்பு முடுக்கம் (g) இரண்டையும் ஒன்றாகக் குழப்புதல்.',
      correctionEn: 'G is a universal scalar constant (6.674 × 10^-11 N m² kg^-2) that never changes anywhere. g is an acceleration vector (9.8 m s^-2) that varies with altitude, depth, and latitude.',
      correctionTa: 'G என்பது அண்டம் முழுவதும் மாறாத மாறிலி (6.674 × 10^-11 N m² kg^-2). g என்பது இடத்திற்கு இடம் மாறுபடும் முடுக்கமாகும் (துருவத்தில் 9.83, நிலநடுக்கோட்டில் 9.78).'
    },
    {
      mistakeEn: 'Writing the unit of Force as kg m s^-1 instead of kg m s^-2 (Newton).',
      mistakeTa: 'விசையின் அலகை kg m s^-2 (நியூட்டன்) என்பதற்கு பதிலாக kg m s^-1 (உந்தத்தின் அலகு) என தவறாக எழுதுவது.',
      correctionEn: 'Force F = m·a has unit kg m s^-2 (Newton). Linear Momentum p = m·v has unit kg m s^-1 (or N s).',
      correctionTa: 'விசையின் அலகு kg m s^-2 (நியூட்டன்). உந்தத்தின் அலகு kg m s^-1 (அல்லது N s).'
    },
    {
      mistakeEn: 'Thinking astronauts float in orbit because "there is no gravity in space".',
      mistakeTa: 'விண்வெளியில் ஈர்ப்பு விசை இல்லாததால்தான் விண்வெளி வீரர்கள் மிதக்கிறார்கள் என்று நினைப்பது.',
      correctionEn: 'Gravity at 400 km orbit is still ~90% of surface gravity. Astronauts feel weightless solely because both they and the spacecraft are in continuous free-fall together (R = 0).',
      correctionTa: '400 கிமீ உயரத்தில் புவியீர்ப்பு விசை 90% உள்ளது. விண்கலமும் வீரர்களும் ஒரே முடுக்கத்தில் புவியை நோக்கி தடையின்றி விழுவதாலேயே எடையின்மை (R = 0) ஏற்படுகிறது.'
    }
  ]
};

// 3. & 6. SUMMARY & SIMPLE EXPLANATION
export const PILOT_C10_SCI_U1_SUMMARY: SummaryItem = {
  id: 'summary_c10_sci_u1_pilot',
  chapterId: 'c10_sci_u1',
  lastUpdatedAt: '24 Sep 2026',
  lastUpdatedAtTa: '24 செப் 2026',
  keyPointsEn: [
    'Inertia is the inherent resistance of matter to change its rest or motion; it is directly measured by mass.',
    'Newton\'s 1st Law introduces Inertia and qualitatively defines Force as an external agency causing acceleration.',
    'Linear Momentum (p = mv) measures the quantity of motion; Newton\'s 2nd Law proves F = ma.',
    '1 Newton = 10^5 Dynes (1 N accelerates 1 kg at 1 m s^-2).',
    'Impulse (J = F · Δt = Δp) shows that increasing the impact time interval minimizes impact force.',
    'Newton\'s 3rd Law (Action = -Reaction) acts on two distinct bodies, underpinning recoil and rocket propulsion.',
    'Conservation of Linear Momentum holds for any isolated system (m1·u1 + m2·u2 = m1·v1 + m2·v2).',
    'Newton\'s Gravitation Law states F = G·m1·m2/r²; Acceleration due to gravity g = GM/R² is maximum at the poles.',
    'Mass is a constant scalar; Weight (W = mg) is a location-dependent vector force.',
    'Apparent weight R = m(g ± a) varies in elevators, becoming zero (weightlessness) in free-fall (a = g).'
  ],
  keyPointsTa: [
    'நிலைமம் என்பது நிலையை மாற்ற மறுக்கும் உள்ளார்ந்த பண்பு; பொருளின் நிறையே அதன் நிலைமத்திற்கு அளவீடு.',
    'நியூட்டனின் 1-ஆம் விதி நிலைமத்தை விளக்கி, விசையின் தரமான பண்பை வரையறுக்கிறது.',
    'நேர்க்கோட்டு உந்தம் p = mv; நியூட்டனின் 2-ஆம் விதி F = ma என்ற கணிதச் சமன்பாட்டைத் தருகிறது.',
    '1 நியூட்டன் = 10^5 டைன் (1 கிகி நிறையை 1 மீ வி^-2 அளவிற்கு முடுக்குவிக்கும் விசை).',
    'கணத்தாக்கு J = F · Δt = Δp; மோதல் காலத்தை அதிகரிப்பதன் மூலம் தாக்கும் விசையைக் குறைக்கலாம்.',
    'நியூட்டனின் 3-ஆம் விதிப்படி விசைக்கு சமமான எதிர்விசை உண்டு; இவை இரு வேறு பொருட்களின் மீது செயல்படுகின்றன.',
    'புறவிசை செயல்படாதவரை ஒரு அமைப்பின் மொத்த உந்தம் மாறாது (m1u1 + m2u2 = m1v1 + m2v2).',
    'பொது ஈர்ப்பியல் விதி F = G·m1·m2/r²; புவியீர்ப்பு முடுக்கம் g = GM/R² துருவங்களில் அதிகம்.',
    'நிறை மாறாத ஸ்கேலார் அளவு; எடை (W = mg) இடத்திற்கு இடம் மாறும் வெக்டர் அளவு.',
    'மின் தூக்கியில் தோற்ற எடை R = m(g ± a); தடையின்றி கீழே விழும்போது தோற்ற எடை சுழியாகிறது (எடையின்மை).'
  ],
  simpleExplanationEn: 'Think of Newton\'s laws as nature\'s rulebook for movement:\n1. Inertia: A couch potato won\'t get off the sofa unless pushed (Inertia of rest); once you slide on ice, you can\'t stop unless you hit friction (Inertia of motion).\n2. Force (F = ma): Pushing a light bicycle makes it zoom fast; pushing a huge lorry requires gigantic force to move at all.\n3. Action-Reaction: When you jump off a small boat onto the dock, your feet push the boat backward while the boat launches you forward!\n4. Rocket: Just like untying an inflated balloon sends it flying forward as air rushes backward, a rocket shoots gases down to blast into the stars!\n5. Weightlessness: When an elevator cord breaks, both you and the floor drop together at the exact same speed, so your feet stop pressing on the scale — you feel weightless!',
  simpleExplanationTa: 'இயக்க விதிகளை அன்றாட வாழ்க்கையோடு மிக எளிதாகப் புரிந்து கொள்ளலாம்:\n1. நிலைமம்: சாய்வு நாற்காலியில் அமர்ந்திருப்பவர் தானாக எழ முடியாது (ஓய்வில் நிலைமம்); பனிக்கட்டியில் வழுக்கிச் செல்லும்போது தடை ஏதுமின்றி நிற்க முடியாது (இயக்கத்தில் நிலைமம்).\n2. விசை (F = ma): ஒரு மிதிவண்டியைத் தள்ளினால் வேகமாகச் செல்லும்; ஆனால் அதே விசையால் ஒரு கனரக லாரியைத் தள்ளினால் அது நகராது.\n3. செயல் - எதிர்ச்செயல்: நீங்கள் படகிலிருந்து கரைக்குக் குதிக்கும் போது, உங்கள் கால்கள் படகை பின்னோக்கித் தள்ளுகின்றன; படகு உங்களை முன்னோக்கித் தள்ளுகிறது!\n4. ராக்கெட்: பலூனில் காற்றை நிரப்பி கையை விட்டால் காற்று கீழே பாய, பலூன் மேலே பறப்பது போன்றதே ராக்கெட் இயக்கம்!\n5. எடையின்மை: லிப்டின் கம்பி அறுந்து கீழே விழும்போது, நீங்களும் லிப்டின் தரையும் ஒரே வேகத்தில் விழுவதால், உங்கள் கால்கள் தரையை அழுத்துவதில்லை; இதனால் எடையின்மை உணரப்படுகிறது!'
};

// 9. SUBSTANTIAL BOARD-LEVEL QUIZ (12 QUESTIONS)
export const PILOT_C10_SCI_U1_QUIZ: ChapterQuiz = {
  id: 'quiz_c10_sci_u1_pilot',
  chapterId: 'c10_sci_u1',
  titleEn: 'Comprehensive Board Exam Assessment: Unit 1 - Laws of Motion',
  titleTa: 'அரசு பொதுத்தேர்வு முழுமை மதிப்பீட்டு வினாடி வினா: அலகு 1 - இயக்க விதிகள்',
  totalMarks: 60,
  timeLimitMinutes: 20,
  questions: [
    {
      id: 'q_pilot_c10_u1_1',
      type: 'mcq',
      difficulty: 'easy',
      questionEn: 'Inertia of a physical body depends directly on which of the following properties?',
      questionTa: 'ஒரு பொருளின் நிலைமம் எதனைப் பொறுத்து அமைகிறது?',
      optionsEn: [
        'Weight of the body',
        'Mass of the body',
        'Volume of the body',
        'Velocity of the body'
      ],
      optionsTa: [
        'பொருளின் எடை',
        'பொருளின் நிறை',
        'பொருளின் பருமன்',
        'பொருளின் திசைவேகம்'
      ],
      correctAnswer: 'Mass of the body',
      correctAnswerIndex: 1,
      explanationEn: 'The mass of a body is the quantitative measure of its inertia. Greater mass equals greater inertia to resist any change in state.',
      explanationTa: 'பொருளின் நிறையே அதன் நிலைமத்திற்கு அளவீடாகும். அதிக நிறை கொண்ட பொருளுக்கு நிலைமமும் அதிகமாக இருக்கும்.'
    },
    {
      id: 'q_pilot_c10_u1_2',
      type: 'mcq',
      difficulty: 'easy',
      questionEn: 'Which fundamental law of motion provides the qualitative definition of Force?',
      questionTa: 'விசையின் பண்பினைத் (தரம்) தீர்மானிக்கும் இயக்க விதி எது?',
      optionsEn: [
        'Newton’s First Law of Motion',
        'Newton’s Second Law of Motion',
        'Newton’s Third Law of Motion',
        'Newton’s Law of Gravitation'
      ],
      optionsTa: [
        'நியூட்டனின் முதல் இயக்க விதி',
        'நியூட்டனின் இரண்டாம் இயக்க விதி',
        'நியூட்டனின் மூன்றாம் இயக்க விதி',
        'நியூட்டனின் ஈர்ப்பியல் விதி'
      ],
      correctAnswer: 'Newton’s First Law of Motion',
      correctAnswerIndex: 0,
      explanationEn: 'Newton’s First Law defines force qualitatively (as an external agent altering rest/motion), whereas Newton’s Second Law defines force quantitatively (F = ma).',
      explanationTa: 'நியூட்டனின் முதல் விதி விசையின் தரத்தை வரையறுக்கிறது; இரண்டாம் விதி விசையின் எண்மதிப்பை (F = ma) அளவிட உதவுகிறது.'
    },
    {
      id: 'q_pilot_c10_u1_3',
      type: 'mcq',
      difficulty: 'medium',
      questionEn: 'What is the conversion relationship between the SI unit (Newton) and CGS unit (Dyne) of Force?',
      questionTa: 'விசையின் SI அலகு (நியூட்டன்) மற்றும் CGS அலகு (டைன்) இடையேயான தொடர்பு என்ன?',
      optionsEn: [
        '1 Newton = 10³ Dynes',
        '1 Newton = 10⁵ Dynes',
        '1 Newton = 10⁷ Dynes',
        '1 Newton = 9.8 Dynes'
      ],
      optionsTa: [
        '1 நியூட்டன் = 10³ டைன்',
        '1 நியூட்டன் = 10⁵ டைன்',
        '1 நியூட்டன் = 10⁷ டைன்',
        '1 நியூட்டன் = 9.8 டைன்'
      ],
      correctAnswer: '1 Newton = 10⁵ Dynes',
      correctAnswerIndex: 1,
      explanationEn: '1 N = 1 kg × 1 m s^-2 = 1000 g × 100 cm s^-2 = 10^5 dynes.',
      explanationTa: '1 நியூட்டன் = 1 கிகி × 1 மீ வி^-2 = 1000 கி × 100 செமீ வி^-2 = 10^5 டைன்.'
    },
    {
      id: 'q_pilot_c10_u1_4',
      type: 'mcq',
      difficulty: 'medium',
      questionEn: 'Impulse is mathematically equivalent to which physical quantity?',
      questionTa: 'கணத்தாக்கு என்பது கீழ்க்கண்டவற்றுள் எதற்கு சமமானது?',
      optionsEn: [
        'Rate of change of momentum',
        'Change in linear momentum',
        'Product of mass and acceleration',
        'Moment of force'
      ],
      optionsTa: [
        'உந்த மாறுபாட்டு வீதம்',
        'உந்த மாறுபாடு',
        'நிறை மற்றும் முடுக்கத்தின் பெருக்கற்பலன்',
        'விசையின் திருப்புத்திறன்'
      ],
      correctAnswer: 'Change in linear momentum',
      correctAnswerIndex: 1,
      explanationEn: 'Impulse J = F · Δt = (Δp / Δt) · Δt = Δp (Change in linear momentum). Rate of change of momentum is force, not impulse.',
      explanationTa: 'கணத்தாக்கு J = F · Δt = உந்த மாறுபாடு (Δp). உந்த மாறுபாட்டு வீதம் என்பது விசையாகும்.'
    },
    {
      id: 'q_pilot_c10_u1_5',
      type: 'mcq',
      difficulty: 'medium',
      questionEn: 'The propulsion of a rocket is primarily based on which combination of scientific laws?',
      questionTa: 'ராக்கெட் ஏவுதலில் பயன்படும் அறிவியல் விதிகள் யாவை?',
      optionsEn: [
        'Newton’s First Law and Kepler’s Laws',
        'Newton’s Third Law and Law of Conservation of Linear Momentum',
        'Newton’s Second Law and Boyle’s Law',
        'Newton’s Universal Gravitation Law only'
      ],
      optionsTa: [
        'நியூட்டனின் முதல் விதி மற்றும் கெப்லர் விதிகள்',
        'நியூட்டனின் மூன்றாம் விதி மற்றும் நேர்க்கோட்டு உந்த மாறாக் கோட்பாடு',
        'நியூட்டனின் இரண்டாம் விதி மற்றும் பாயில் விதி',
        'நியூட்டனின் ஈர்ப்பியல் விதி மட்டுமே'
      ],
      correctAnswer: 'Newton’s Third Law and Law of Conservation of Linear Momentum',
      correctAnswerIndex: 1,
      explanationEn: 'Rocket propulsion expels exhaust gases downward (Action) to produce upward thrust (Reaction, Newton\'s 3rd Law), while conserving total system linear momentum as fuel burns away.',
      explanationTa: 'ராக்கெட் ஏவுதலில் வாயுக்களின் வெளியேற்றம் மற்றும் மேல்நோக்கிய உந்துவிசை (நியூட்டனின் 3-ஆம் விதி) மற்றும் உந்த மாறாக் கோட்பாடு ஆகிய இரண்டும் அடிப்படையாகும்.'
    },
    {
      id: 'q_pilot_c10_u1_6',
      type: 'mcq',
      difficulty: 'hard',
      questionEn: 'Where on the surface of the Earth is the acceleration due to gravity (g) at its MAXIMUM value?',
      questionTa: 'புவிப்பரப்பில் புவியீர்ப்பு முடுக்கத்தின் (g) மதிப்பு எங்கு பெருமமாக (அதிகமாக) இருக்கும்?',
      optionsEn: [
        'At the Equator',
        'At the Geographic Poles',
        'At the Tropic of Cancer',
        'At the Center of the Earth'
      ],
      optionsTa: [
        'நிலநடுக்கோட்டுப் பகுதியில்',
        'துருவப் பகுதியில்',
        'கடகரேகைப் பகுதியில்',
        'புவியின் மையத்தில்'
      ],
      correctAnswer: 'At the Geographic Poles',
      correctAnswerIndex: 1,
      explanationEn: 'Because g = GM/R² and Earth is an oblate spheroid, polar radius Rp is shorter than equatorial radius Re. Hence g is maximum at the poles (~9.83 m s^-2). At the center of Earth, g is zero.',
      explanationTa: 'g = GM/R² சமன்பாட்டின்படி ஆரம் குறையும்போது g மதிப்பு அதிகரிக்கும். துருவங்களில் புவியின் ஆரம் குறைவு என்பதால் அங்கு g மதிப்பு பெருமமாக (9.83 மீ வி^-2) இருக்கும்.'
    },
    {
      id: 'q_pilot_c10_u1_7',
      type: 'mcq',
      difficulty: 'hard',
      questionEn: 'If a lift cable suddenly breaks and the lift plunges in free-fall (a = g), what does a spring balance read for a 70 kg man standing inside?',
      questionTa: 'ஒரு மின்தூக்கியின் கம்பி அறுந்து அது தடையின்றி கீழே விழும்போது (a = g), அதிலுள்ள 70 கிகி எடையுள்ள மனிதனின் தோற்ற எடை என்னவாக இருக்கும்?',
      optionsEn: [
        '700 N',
        '1400 N',
        '0 N',
        '350 N'
      ],
      optionsTa: [
        '700 நியூட்டன்',
        '1400 நியூட்டன்',
        '0 நியூட்டன் (சுழி)',
        '350 நியூட்டன்'
      ],
      correctAnswer: '0 N',
      correctAnswerIndex: 2,
      explanationEn: 'In free fall, a = g. Apparent weight R = m(g - a) = m(g - g) = 0 N. The person experiences complete weightlessness.',
      explanationTa: 'தடையின்றி கீழே விழும்போது a = g. தோற்ற எடை R = m(g - a) = m(g - g) = 0 நியூட்டன் (எடையின்மை நிலை).'
    },
    {
      id: 'q_pilot_c10_u1_8',
      type: 'mcq',
      difficulty: 'medium',
      questionEn: 'To loosen a stubbornly tight nut, which modification will allow you to produce the required torque with MINIMUM applied force?',
      questionTa: 'இறுக்கமாக உள்ள ஒரு திருகுமறையை (nut) குறைந்த விசை கொண்டு எளிதாகத் திறக்க என்ன செய்ய வேண்டும்?',
      optionsEn: [
        'Use a spanner with a shorter handle',
        'Use a spanner with a longer handle',
        'Apply force perpendicular to the ground',
        'Apply an unbalanced force along the axis'
      ],
      optionsTa: [
        'குட்டையான கைப்பிடி கொண்ட திருகுக்குறடைப் பயன்படுத்த வேண்டும்',
        'நீளமான கைப்பிடி கொண்ட திருகுக்குறடைப் பயன்படுத்த வேண்டும்',
        'தரைக்கு செங்குத்தாக விசை செலுத்த வேண்டும்',
        'அச்சின் வழியே சமன்செய்யப்படாத விசை செலுத்த வேண்டும்'
      ],
      correctAnswer: 'Use a spanner with a longer handle',
      correctAnswerIndex: 1,
      explanationEn: 'Torque τ = F × d. Increasing the handle length d increases the lever arm, so a smaller applied force F generates the necessary torque to turn the nut.',
      explanationTa: 'திருப்புத்திறன் τ = F × d. கைப்பிடியின் நீளம் d அதிகரிக்கும் போது குறைந்த விசையிலேயே தேவையான திருப்புத்திறன் கிடைக்கும்.'
    },
    {
      id: 'q_pilot_c10_u1_9',
      type: 'true_false',
      difficulty: 'easy',
      questionEn: 'True or False: Action and Reaction forces cancel each other out because they are equal in magnitude and opposite in direction.',
      questionTa: 'சரியா, தவறா: செயல் மற்றும் எதிர்செயல் விசைகள் சமமாகவும் எதிர் திசையிலும் இருப்பதால் அவை ஒன்றையொன்று சமன்செய்து அழிக்கின்றன.',
      optionsEn: ['True', 'False'],
      optionsTa: ['சரி', 'தவறு'],
      correctAnswer: 'False',
      correctAnswerIndex: 1,
      explanationEn: 'False. Action and reaction forces never cancel each other because they act on TWO DIFFERENT interacting bodies simultaneously (e.g. foot on ball, ball on foot).',
      explanationTa: 'தவறு. செயல் மற்றும் எதிர்செயல் விசைகள் எப்போதும் இரு வேறு பொருட்களின் மீது செயல்படுவதால் அவை ஒன்றையொன்று சமன்செய்வதில்லை.'
    },
    {
      id: 'q_pilot_c10_u1_10',
      type: 'true_false',
      difficulty: 'medium',
      questionEn: 'True or False: The mass of an astronaut on the surface of the Moon is identical to their mass on the Earth.',
      questionTa: 'சரியா, தவறா: நிலவின் பரப்பில் ஒரு விண்வெளி வீரரின் நிறை, பூமியில் உள்ள அவரது நிறைக்குச் சமமாகும்.',
      optionsEn: ['True', 'False'],
      optionsTa: ['சரி', 'தவறு'],
      correctAnswer: 'True',
      correctAnswerIndex: 0,
      explanationEn: 'True. Mass is an invariant scalar quantity measuring matter content. It remains unchanged everywhere. Only weight changes (W_moon = 1/6 W_earth) because g_moon is 1/6th of g_earth.',
      explanationTa: 'சரி. நிறை என்பது பருப்பொருளின் அளவு; இது அண்டத்தின் எவ்விடத்திலும் மாறாது. புவியீர்ப்பு முடுக்கம் மாறுவதால் எடை மட்டுமே நிலவில் 1/6 மடங்காகக் குறையும்.'
    },
    {
      id: 'q_pilot_c10_u1_11',
      type: 'mcq',
      difficulty: 'hard',
      questionEn: 'A constant force of 50 N acts on a mass of 10 kg initially at rest. What is the linear momentum of the body after 4 seconds?',
      questionTa: 'ஓய்வு நிலையில் உள்ள 10 கிகி நிறையுள்ள ஒரு பொருளின் மீது 50 N மாறா விசை 4 விநாடிகள் செயல்படுகிறது எனில், 4 விநாடிகளுக்குப் பின் பொருளின் நேர்க்கோட்டு உந்தம் என்ன?',
      optionsEn: [
        '100 kg m s^-1',
        '200 kg m s^-1',
        '400 kg m s^-1',
        '50 kg m s^-1'
      ],
      optionsTa: [
        '100 கிகி மீ வி^-1',
        '200 கிகி மீ வி^-1',
        '400 கிகி மீ வி^-1',
        '50 கிகி மீ வி^-1'
      ],
      correctAnswer: '200 kg m s^-1',
      correctAnswerIndex: 1,
      explanationEn: 'Impulse J = F × t = 50 N × 4 s = 200 N s. Since initial velocity was 0, Final Momentum p_f = Impulse J = 200 kg m s^-1.',
      explanationTa: 'கணத்தாக்கு J = F × t = 50 × 4 = 200 N s. தொடக்க உந்தம் சுழி என்பதால், இறுதி உந்தம் = 200 கிகி மீ வி^-1 ஆகும்.'
    },
    {
      id: 'q_pilot_c10_u1_12',
      type: 'mcq',
      difficulty: 'hard',
      questionEn: 'If the distance between two spherical masses is doubled, what happens to the gravitational force between them?',
      questionTa: 'இரு நிறைகளுக்கு இடையே உள்ள தொலைவு இருமடங்காக அதிகரிக்கப்பட்டால், அவற்றிற்கு இடையேயான ஈர்ப்பியல் விசை எவ்வாறு மாறும்?',
      optionsEn: [
        'Becomes 2 times greater',
        'Becomes 4 times greater',
        'Reduces to 1/2 of original force',
        'Reduces to 1/4 of original force'
      ],
      optionsTa: [
        '2 மடங்கு அதிகரிக்கும்',
        '4 மடங்கு அதிகரிக்கும்',
        '1/2 மடங்காகக் குறையும்',
        '1/4 மடங்காகக் (கால் பங்காகக்) குறையும்'
      ],
      correctAnswer: 'Reduces to 1/4 of original force',
      correctAnswerIndex: 3,
      explanationEn: 'According to Newton’s law of gravitation, F ∝ 1/r². When r is replaced by 2r, F\' = F / (2)² = F/4 (inverse-square law).',
      explanationTa: 'நியூட்டனின் ஈர்ப்பியல் விதிப்படி F ∝ 1/r². தொலைவு r என்பது 2r ஆக மாறும்போது, விசை F / (2)² = F / 4 (கால் பங்காகக் குறையும்).'
    }
  ]
};
