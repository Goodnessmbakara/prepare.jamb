export interface StudyNote {
  id: string;
  subjectId: string;
  title: string;
  order: number;
  content: {
    overview: string;
    topics: Array<{
      title: string;
      subtopics: Array<{
        title: string;
        content: string;
        keyPoints: string[];
      }>;
      objectives: string[];
    }>;
  };
}

export const physicsNotes: StudyNote[] = [
  {
    id: "phys-note-001",
    subjectId: "physics",
    title: "Mechanics: Motion and Forces",
    order: 1,
    content: {
      overview: "Mechanics is the branch of physics dealing with motion and forces. It forms the foundation of classical physics and is essential for understanding how objects move and interact. This section covers kinematics (motion description), dynamics (forces causing motion), and energy principles.",
      topics: [
        {
          title: "Kinematics",
          subtopics: [
            {
              title: "Scalar and Vector Quantities",
              content: "Physical quantities are classified as scalars or vectors. Scalar quantities have only magnitude (size), examples include: distance, speed, mass, time, temperature, energy, and work. Vector quantities have both magnitude and direction, examples include: displacement, velocity, acceleration, force, momentum, and weight. Vectors are often represented by arrows, where length represents magnitude and arrow direction represents the quantity's direction.",
              keyPoints: [
                "Scalars: magnitude only (distance, speed, mass, time, energy)",
                "Vectors: magnitude and direction (displacement, velocity, force)",
                "Distance is scalar, displacement is vector",
                "Speed is scalar, velocity is vector",
                "Vectors can be added using parallelogram or triangle law",
                "Resultant vector is the combined effect of multiple vectors"
              ]
            },
            {
              title: "Equations of Motion",
              content: "For uniformly accelerated motion, five key quantities are related: initial velocity (u), final velocity (v), acceleration (a), displacement (s), and time (t). The equations are: v = u + at (relates velocity and time), s = ut + ½at² (displacement from initial conditions), v² = u² + 2as (relates velocity and displacement without time), s = ½(u + v)t (average velocity formula). Free fall uses g = 10 m/s² (or 9.8 m/s²) downward as acceleration.",
              keyPoints: [
                "v = u + at (first equation of motion)",
                "s = ut + ½at² (second equation of motion)",
                "v² = u² + 2as (third equation of motion)",
                "s = ½(u + v)t (average velocity form)",
                "For free fall: a = g = 10 m/s² downward",
                "Upward motion: use a = -g"
              ]
            },
            {
              title: "Projectile Motion",
              content: "A projectile is an object thrown into the air with some initial velocity. Its motion can be analyzed in two independent components: horizontal (constant velocity, no acceleration) and vertical (uniform acceleration due to gravity). Time of flight T = 2u sin θ/g, maximum height H = u² sin²θ/(2g), and range R = u² sin(2θ)/g. Maximum range occurs at 45° angle. At maximum height, vertical velocity is zero but horizontal velocity remains constant.",
              keyPoints: [
                "Horizontal motion: constant velocity (no forces)",
                "Vertical motion: acceleration = g downward",
                "Time of flight: T = 2u sin θ/g",
                "Maximum height: H = u² sin²θ/(2g)",
                "Range: R = u² sin(2θ)/g",
                "Maximum range at θ = 45°"
              ]
            }
          ],
          objectives: [
            "Distinguish between scalar and vector quantities",
            "Apply equations of motion to solve kinematics problems",
            "Analyze projectile motion into horizontal and vertical components",
            "Calculate time of flight, maximum height, and range"
          ]
        },
        {
          title: "Newton's Laws of Motion",
          subtopics: [
            {
              title: "First Law (Law of Inertia)",
              content: "Newton's First Law states: A body at rest remains at rest, and a body in uniform motion continues in uniform motion in a straight line, unless acted upon by a resultant external force. This property of resisting change in motion is called inertia. Mass is a measure of inertia - more massive objects have greater inertia. Examples: passengers lurch forward when a car brakes suddenly (they want to continue moving), objects slide off a car's dashboard when it accelerates (they want to remain at rest).",
              keyPoints: [
                "Objects resist changes in motion (inertia)",
                "No net force → no change in velocity",
                "At rest stays at rest; uniform motion stays uniform",
                "Mass measures inertia",
                "Explains why seatbelts are necessary",
                "Foundation for understanding force"
              ]
            },
            {
              title: "Second Law (F = ma)",
              content: "Newton's Second Law states: The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass. Mathematically: F = ma, where F is net force (N), m is mass (kg), and a is acceleration (m/s²). This can also be expressed as F = Δp/Δt (rate of change of momentum). The direction of acceleration is the same as the direction of the net force. Weight W = mg is an application of this law.",
              keyPoints: [
                "F = ma (fundamental equation)",
                "Net force = mass × acceleration",
                "1 Newton = 1 kg·m/s²",
                "F = Δp/Δt (force = rate of change of momentum)",
                "Weight W = mg (force due to gravity)",
                "Direction of acceleration = direction of net force"
              ]
            },
            {
              title: "Third Law (Action-Reaction)",
              content: "Newton's Third Law states: For every action, there is an equal and opposite reaction. When object A exerts a force on object B, object B exerts an equal force on A in the opposite direction. These forces act on different objects. Examples: walking (you push Earth backward, Earth pushes you forward), rocket propulsion (gases pushed backward, rocket pushed forward), swimming (you push water backward, water pushes you forward).",
              keyPoints: [
                "Action and reaction forces are equal in magnitude",
                "Action and reaction act in opposite directions",
                "Action and reaction act on different objects",
                "Forces always occur in pairs",
                "Explains rocket propulsion and recoil",
                "Essential for understanding interactions"
              ]
            }
          ],
          objectives: [
            "State and apply Newton's three laws of motion",
            "Calculate force, mass, and acceleration using F = ma",
            "Identify action-reaction pairs in physical situations",
            "Solve problems involving multiple forces"
          ]
        },
        {
          title: "Energy, Work, and Power",
          subtopics: [
            {
              title: "Work and Energy",
              content: "Work is done when a force causes displacement. Work W = Fs cos θ, where F is force, s is displacement, and θ is angle between force and displacement. Unit: Joule (J). When force is perpendicular to motion (θ = 90°), no work is done. Kinetic energy KE = ½mv² is energy of motion. Potential energy PE = mgh is energy due to position. Mechanical energy = KE + PE. In absence of friction, mechanical energy is conserved.",
              keyPoints: [
                "Work = Force × displacement (in direction of force)",
                "W = Fs cos θ",
                "Work done = energy transferred",
                "KE = ½mv² (energy of motion)",
                "PE = mgh (gravitational potential energy)",
                "Conservation: KE + PE = constant (no friction)"
              ]
            },
            {
              title: "Power and Efficiency",
              content: "Power is the rate of doing work or transferring energy. P = W/t = Energy/time. Also P = Fv when force and velocity are in same direction. Unit: Watt (W) = Joule/second. Efficiency = (useful output energy/total input energy) × 100%. No machine is 100% efficient due to friction and other energy losses. Power ratings indicate how quickly a device can do work or transfer energy.",
              keyPoints: [
                "Power = Work/time = Energy/time",
                "P = W/t = Fv",
                "Unit: Watt (W) = J/s",
                "1 horsepower = 746 W",
                "Efficiency = (output/input) × 100%",
                "Energy is conserved but can be wasted as heat"
              ]
            }
          ],
          objectives: [
            "Calculate work done by a force",
            "Apply conservation of mechanical energy",
            "Calculate kinetic and potential energy",
            "Determine power and efficiency of machines"
          ]
        },
        {
          title: "Momentum and Collisions",
          subtopics: [
            {
              title: "Linear Momentum",
              content: "Momentum is the product of mass and velocity: p = mv. Unit: kg·m/s. It's a vector quantity. Impulse is change in momentum: Impulse = Δp = mΔv = Ft (force × time). Law of conservation of momentum: In a closed system with no external forces, total momentum before collision = total momentum after collision. This applies to all collisions and explosions.",
              keyPoints: [
                "Momentum p = mv (vector quantity)",
                "Impulse = change in momentum = Ft",
                "Conservation: total p before = total p after",
                "Applies to collisions and explosions",
                "Larger Δt → smaller force (airbags, padding)",
                "Used in analyzing collisions and recoil"
              ]
            },
            {
              title: "Types of Collisions",
              content: "Elastic collision: both momentum and kinetic energy are conserved. Objects bounce off each other (e.g., billiard balls). Inelastic collision: momentum is conserved but kinetic energy is not (some converted to heat, sound, deformation). Perfectly inelastic collision: objects stick together after collision, moving as one. For all collisions: m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂ (momentum conservation).",
              keyPoints: [
                "Elastic: momentum and KE conserved",
                "Inelastic: only momentum conserved",
                "Perfectly inelastic: objects stick together",
                "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                "Explosions: objects move apart from rest",
                "Use conservation laws to solve collision problems"
              ]
            }
          ],
          objectives: [
            "Calculate momentum and impulse",
            "Apply conservation of momentum to collisions",
            "Distinguish between elastic and inelastic collisions",
            "Solve problems involving collisions and explosions"
          ]
        }
      ]
    }
  },
  {
    id: "phys-note-002",
    subjectId: "physics",
    title: "Waves and Optics",
    order: 2,
    content: {
      overview: "Waves are disturbances that transfer energy from one place to another without transferring matter. Optics is the study of light and its behavior. Understanding waves is crucial for topics ranging from sound and light to electromagnetic radiation and quantum mechanics.",
      topics: [
        {
          title: "Wave Properties",
          subtopics: [
            {
              title: "Wave Characteristics",
              content: "Waves transfer energy through oscillations. Key properties: amplitude (A) - maximum displacement from equilibrium, wavelength (λ) - distance between consecutive crests or troughs, frequency (f) - oscillations per second (Hz), period (T) - time for one complete oscillation (T = 1/f), wave speed (v) - distance traveled per second. Fundamental wave equation: v = fλ. Wave speed depends on the medium, not frequency or amplitude.",
              keyPoints: [
                "Amplitude: maximum displacement from rest",
                "Wavelength λ: distance between successive crests",
                "Frequency f: oscillations per second (Hz)",
                "Period T = 1/f",
                "Wave equation: v = fλ",
                "Speed depends on medium properties"
              ]
            },
            {
              title: "Types of Waves",
              content: "Transverse waves: particles oscillate perpendicular to wave direction. Examples: light, radio waves, water surface waves, waves on strings. Can be polarized. Longitudinal waves: particles oscillate parallel to wave direction, consisting of compressions and rarefactions. Examples: sound, seismic P-waves, spring compression waves. Cannot be polarized. Both types transfer energy but not matter.",
              keyPoints: [
                "Transverse: oscillation ⊥ wave direction (light, water)",
                "Longitudinal: oscillation ∥ wave direction (sound)",
                "Transverse waves can be polarized",
                "Longitudinal waves have compressions and rarefactions",
                "All waves transfer energy, not matter",
                "Speed depends on medium elasticity and density"
              ]
            },
            {
              title: "Wave Phenomena",
              content: "Reflection: wave bounces off a surface; angle of incidence = angle of reflection. Refraction: wave changes speed and direction when entering new medium; bends toward normal if slowing down, away if speeding up. Diffraction: wave spreads out when passing through gap or around obstacle; more pronounced when gap ≈ wavelength. Interference: superposition of waves creates constructive (crests align) or destructive (crest meets trough) interference.",
              keyPoints: [
                "Reflection: angle in = angle out",
                "Refraction: change in speed causes bending",
                "Diffraction: spreading through gaps/around obstacles",
                "Interference: waves overlap and combine",
                "Constructive: waves add (louder, brighter)",
                "Destructive: waves cancel (quieter, dimmer)"
              ]
            }
          ],
          objectives: [
            "Define and calculate wave properties",
            "Distinguish between transverse and longitudinal waves",
            "Explain wave phenomena: reflection, refraction, diffraction, interference",
            "Apply v = fλ to solve wave problems"
          ]
        },
        {
          title: "Sound",
          subtopics: [
            {
              title: "Nature and Properties of Sound",
              content: "Sound is a longitudinal mechanical wave requiring a medium (solid, liquid, or gas) to travel. It cannot travel through vacuum. Speed varies with medium: fastest in solids (~5000 m/s in steel), slower in liquids (~1500 m/s in water), slowest in gases (~340 m/s in air at 20°C). Speed increases with temperature in gases. Frequency determines pitch (high frequency = high pitch), amplitude determines loudness. Human hearing range: 20 Hz to 20,000 Hz.",
              keyPoints: [
                "Sound is longitudinal mechanical wave",
                "Requires medium (no sound in vacuum)",
                "Speed: solid > liquid > gas",
                "Speed in air ≈ 340 m/s at 20°C",
                "Frequency determines pitch",
                "Amplitude determines loudness",
                "Human range: 20 - 20,000 Hz"
              ]
            },
            {
              title: "Applications of Sound",
              content: "Echo: reflected sound heard separately from original (needs ≥17 m for 0.1 s separation). Reverberation: multiple echoes blending together. Ultrasound: frequency > 20,000 Hz; used in medical imaging, SONAR (Sound Navigation And Ranging for depth measurement and object detection), and cleaning. Infrasound: frequency < 20 Hz; from earthquakes, volcanoes, and large animals. Resonance: object vibrates at its natural frequency when driven by matching frequency.",
              keyPoints: [
                "Echo: reflected sound (min distance ≈ 17 m)",
                "Ultrasound: f > 20,000 Hz (medical, SONAR)",
                "Infrasound: f < 20 Hz (earthquakes)",
                "SONAR: distance = (v × t)/2",
                "Resonance: vibration at natural frequency",
                "Doppler effect: frequency shift due to motion"
              ]
            }
          ],
          objectives: [
            "Describe properties and propagation of sound",
            "Calculate speed of sound in different media",
            "Explain applications: echo, ultrasound, SONAR",
            "Understand resonance and natural frequency"
          ]
        },
        {
          title: "Light and Optics",
          subtopics: [
            {
              title: "Reflection of Light",
              content: "Law of reflection: angle of incidence equals angle of reflection, measured from the normal (perpendicular to surface). Plane mirror produces virtual, upright, laterally inverted image at same distance behind mirror. Curved mirrors: concave (converging) can form real or virtual images depending on object position; convex (diverging) always forms virtual, upright, diminished image. Mirror formula: 1/f = 1/u + 1/v. Magnification m = v/u = image height/object height.",
              keyPoints: [
                "Angle of incidence = angle of reflection",
                "Plane mirror: virtual, upright, same size",
                "Concave mirror: real or virtual image",
                "Convex mirror: always virtual, diminished",
                "Mirror formula: 1/f = 1/u + 1/v",
                "Magnification m = v/u"
              ]
            },
            {
              title: "Refraction of Light",
              content: "Refraction: bending of light when speed changes between media. Snell's Law: n₁ sin θ₁ = n₂ sin θ₂, where n is refractive index. Refractive index n = c/v = speed of light in vacuum/speed in medium. Also n = sin i/sin r (from air). Light bends toward normal when entering denser medium (slowing down), away when entering less dense medium (speeding up). Real and apparent depth: n = real depth/apparent depth.",
              keyPoints: [
                "Snell's Law: n₁ sin θ₁ = n₂ sin θ₂",
                "Refractive index n = c/v",
                "Denser medium: light slows, bends toward normal",
                "Less dense: light speeds up, bends away",
                "n = real depth/apparent depth",
                "Higher n → light travels slower in medium"
              ]
            },
            {
              title: "Total Internal Reflection",
              content: "Occurs when light travels from denser to less dense medium at angle greater than critical angle. At critical angle θc, refracted ray grazes along boundary (r = 90°). For angles > θc, all light reflects back (total internal reflection). Critical angle: sin θc = 1/n (for light going to air). Applications: optical fibers (communication), periscopes, prisms in binoculars, diamonds' sparkle.",
              keyPoints: [
                "Dense to less dense medium required",
                "Angle of incidence > critical angle",
                "sin θc = 1/n (n₂/n₁ for general case)",
                "All light reflects (no refraction)",
                "Optical fibers use repeated TIR",
                "Diamonds have low critical angle (high n)"
              ]
            },
            {
              title: "Lenses",
              content: "Convex (converging) lens: thicker at center, converges parallel rays to focus. Can form real (inverted) or virtual (upright) images. Uses: cameras, projectors, correcting hyperopia. Concave (diverging) lens: thinner at center, diverges rays. Always forms virtual, upright, diminished images. Uses: correcting myopia, door viewers. Lens formula: 1/f = 1/v - 1/u (real is positive convention). Power P = 1/f (m), unit: diopter (D).",
              keyPoints: [
                "Convex lens: converges light, real or virtual image",
                "Concave lens: diverges light, always virtual image",
                "Lens formula: 1/f = 1/v - 1/u",
                "Power P = 1/f (meters), unit: diopter",
                "Magnification m = v/u = h'/h",
                "Hyperopia: use convex; Myopia: use concave"
              ]
            },
            {
              title: "Electromagnetic Spectrum",
              content: "All electromagnetic waves travel at c = 3 × 10⁸ m/s in vacuum. In order of increasing frequency (decreasing wavelength): Radio waves, Microwaves, Infrared, Visible (ROYGBIV), Ultraviolet, X-rays, Gamma rays. Visible light: Red (~700 nm, lowest frequency) to Violet (~400 nm, highest frequency). All obey v = fλ. Higher frequency → higher energy. Different regions have different properties and uses.",
              keyPoints: [
                "All EM waves: speed c = 3 × 10⁸ m/s in vacuum",
                "Order: Radio-Micro-IR-Visible-UV-Xray-Gamma",
                "Visible: ROYGBIV (Red to Violet)",
                "Red: longest wavelength, lowest frequency",
                "Violet: shortest wavelength, highest frequency",
                "Higher frequency → higher energy"
              ]
            }
          ],
          objectives: [
            "Apply laws of reflection and refraction",
            "Use mirror and lens formulas to locate images",
            "Explain total internal reflection and applications",
            "Describe electromagnetic spectrum and properties",
            "Solve problems involving refractive index"
          ]
        }
      ]
    }
  },
  {
    id: "phys-note-003",
    subjectId: "physics",
    title: "Electricity and Magnetism",
    order: 3,
    content: {
      overview: "Electricity and magnetism are fundamental forces that govern much of modern technology. From power generation to electronics, understanding these principles is essential. This section covers electric circuits, electromagnetism, and their applications.",
      topics: [
        {
          title: "Current Electricity",
          subtopics: [
            {
              title: "Basic Electrical Quantities",
              content: "Electric current (I) is the rate of flow of charge: I = Q/t, measured in Amperes (A). 1 A = 1 Coulomb/second. Potential difference (voltage, V) is energy per unit charge: V = W/Q, measured in Volts (V). 1 V = 1 Joule/Coulomb. Resistance (R) opposes current flow, measured in Ohms (Ω). Conventional current flows from positive to negative; electron flow is opposite. Charge Q = It. Energy E = QV = VIt.",
              keyPoints: [
                "Current I = Q/t (Ampere = Coulomb/second)",
                "Voltage V = W/Q (Volt = Joule/Coulomb)",
                "Resistance R measured in Ohms (Ω)",
                "Q = It (charge = current × time)",
                "Energy E = QV = VIt",
                "Conventional current: + to -"
              ]
            },
            {
              title: "Ohm's Law",
              content: "Ohm's Law states: The current through a conductor is directly proportional to the potential difference across it, provided temperature remains constant. V = IR, or I = V/R, or R = V/I. This applies to ohmic conductors (constant resistance). Power P = IV = I²R = V²/R, measured in Watts (W). Electrical energy E = Pt = VIt. Cost of electricity = Power (kW) × Time (hours) × Rate (per kWh).",
              keyPoints: [
                "Ohm's Law: V = IR",
                "Ohmic conductor: constant R, I-V graph is straight line",
                "Power P = IV = I²R = V²/R",
                "Energy E = Pt = VIt",
                "1 kWh = 3,600,000 J",
                "P-I²R shows heat dissipation"
              ]
            },
            {
              title: "Series and Parallel Circuits",
              content: "Series: Components connected end-to-end. Same current through all. Total voltage = sum of individual voltages. Total resistance: R_total = R₁ + R₂ + R₃... Parallel: Components connected across same two points. Same voltage across all. Total current = sum of branch currents. Total resistance: 1/R_total = 1/R₁ + 1/R₂ + 1/R₃... For two resistors in parallel: R_total = (R₁R₂)/(R₁+R₂). Parallel resistance is less than smallest individual resistance.",
              keyPoints: [
                "Series: same I, V divides, R_total = R₁ + R₂ + ...",
                "Parallel: same V, I divides, 1/R_total = 1/R₁ + 1/R₂ + ...",
                "Series: resistances add",
                "Parallel: conductances add (1/R)",
                "Parallel R_total < smallest R",
                "Christmas lights: series fail all; parallel fail individually"
              ]
            },
            {
              title: "Kirchhoff's Laws",
              content: "Kirchhoff's Current Law (KCL): Sum of currents entering a junction equals sum leaving. Based on charge conservation. ΣI_in = ΣI_out. Kirchhoff's Voltage Law (KVL): Sum of voltages around any closed loop equals zero. Based on energy conservation. ΣV = 0. These laws are used to analyze complex circuits. EMF (ε) is voltage of source; terminal voltage V = ε - Ir (where r is internal resistance).",
              keyPoints: [
                "KCL: ΣI_in = ΣI_out at junction",
                "KVL: ΣV = 0 around closed loop",
                "KCL from charge conservation",
                "KVL from energy conservation",
                "EMF ε: voltage of ideal source",
                "V = ε - Ir (internal resistance effect)"
              ]
            }
          ],
          objectives: [
            "Apply Ohm's Law to solve circuit problems",
            "Calculate equivalent resistance in series and parallel",
            "Use Kirchhoff's laws for circuit analysis",
            "Calculate electrical power and energy consumption"
          ]
        },
        {
          title: "Magnetism",
          subtopics: [
            {
              title: "Magnetic Fields",
              content: "Magnetic field is region where magnetic force acts. Direction: from North to South pole outside magnet. Properties of magnets: have two poles (N and S), like poles repel, unlike poles attract, cannot isolate single pole. Magnetic field lines never cross, closer lines indicate stronger field. Earth is giant magnet (magnetic North near geographic South). Materials: ferromagnetic (Fe, Co, Ni) attracted strongly; paramagnetic weakly attracted; diamagnetic weakly repelled.",
              keyPoints: [
                "Magnetic field lines: N to S outside magnet",
                "Like poles repel, unlike attract",
                "Cannot separate poles (always dipole)",
                "Closer field lines → stronger field",
                "Earth has magnetic field (compass works)",
                "Ferromagnetic: Fe, Co, Ni (strongly magnetic)"
              ]
            },
            {
              title: "Electromagnetism",
              content: "Current-carrying conductor creates magnetic field. Right-hand grip rule: thumb points in current direction, fingers curl in field direction. Straight wire: circular field lines. Solenoid (coil): field like bar magnet, strength increases with current and number of turns. Electromagnet: soft iron core in solenoid, magnetized when current flows. Force on current in magnetic field: F = BIL sin θ (B = magnetic flux density in Tesla). Used in motors, loudspeakers, circuit breakers.",
              keyPoints: [
                "Moving charge creates magnetic field",
                "Right-hand grip rule for field direction",
                "Solenoid: acts like bar magnet when current flows",
                "Electromagnet: solenoid with soft iron core",
                "F = BIL sin θ (force on conductor)",
                "Applications: motors, relays, bells"
              ]
            }
          ],
          objectives: [
            "Describe magnetic field patterns",
            "Apply right-hand rules for electromagnetic fields",
            "Explain operation of electromagnets",
            "Calculate force on current-carrying conductor in field"
          ]
        },
        {
          title: "Electromagnetic Induction",
          subtopics: [
            {
              title: "Faraday's Law and Lenz's Law",
              content: "Faraday's Law: EMF is induced when magnetic flux through a circuit changes. EMF = -dΦ/dt (rate of change of flux). Φ = BA cos θ (flux = field × area). Flux measured in Webers (Wb). Lenz's Law: Direction of induced current opposes the change causing it. Negative sign in Faraday's Law represents this opposition. Induced EMF increases with: faster motion, stronger magnet, more coil turns. No change in flux → no induced EMF.",
              keyPoints: [
                "EMF induced by changing magnetic flux",
                "Faraday: EMF = -dΦ/dt = -N(ΔΦ/Δt)",
                "Flux Φ = BA cos θ",
                "Lenz: induced effect opposes change",
                "Larger N (turns) → larger EMF",
                "Faster change → larger EMF"
              ]
            },
            {
              title: "Applications of Electromagnetic Induction",
              content: "Generator: converts mechanical energy to electrical energy by rotating coil in magnetic field. AC generator produces alternating current. DC generator uses commutator for direct current. Transformer: changes AC voltage levels using two coils on iron core. Step-up: N_s > N_p increases voltage. Step-down: N_s < N_p decreases voltage. Vp/Vs = Np/Ns = Is/Ip. Assumes ideal transformer (100% efficient). Used in power transmission and electronic devices.",
              keyPoints: [
                "Generator: mechanical → electrical energy",
                "Rotates coil in field to induce EMF",
                "Transformer: changes AC voltage",
                "Vp/Vs = Np/Ns = Is/Ip",
                "Step-up: increases voltage (Ns > Np)",
                "Step-down: decreases voltage (Ns < Np)",
                "Only works with AC, not DC"
              ]
            }
          ],
          objectives: [
            "State and apply Faraday's and Lenz's laws",
            "Explain working of generators",
            "Use transformer equations to solve problems",
            "Distinguish between step-up and step-down transformers"
          ]
        },
        {
          title: "Capacitors and Electronics",
          subtopics: [
            {
              title: "Capacitance",
              content: "Capacitor stores electrical charge and energy. Capacitance C = Q/V, measured in Farads (F). 1F is very large; typically use μF, nF, pF. Energy stored: E = ½QV = ½CV². Parallel plate capacitor: C = ε₀εrA/d (depends on area, separation, and dielectric). In series: 1/C_total = 1/C₁ + 1/C₂... (like resistors in parallel). In parallel: C_total = C₁ + C₂... (like resistors in series). Charging and discharging through resistor is exponential.",
              keyPoints: [
                "Capacitance C = Q/V (Farad)",
                "Energy E = ½QV = ½CV²",
                "C increases with area, decreases with separation",
                "Series: 1/C_total = 1/C₁ + 1/C₂...",
                "Parallel: C_total = C₁ + C₂...",
                "Applications: filters, timing circuits, energy storage"
              ]
            }
          ],
          objectives: [
            "Calculate charge, voltage, and energy in capacitors",
            "Determine equivalent capacitance in circuits",
            "Understand charging and discharging behavior",
            "Explain applications of capacitors"
          ]
        }
      ]
    }
  },
  {
    id: "phys-note-004",
    subjectId: "physics",
    title: "Modern Physics",
    order: 4,
    content: {
      overview: "Modern physics covers phenomena that cannot be explained by classical physics, including atomic structure, radioactivity, and nuclear reactions. These topics revolutionized our understanding of matter and energy at the atomic and subatomic scale.",
      topics: [
        {
          title: "Atomic Structure",
          subtopics: [
            {
              title: "Structure of the Atom",
              content: "Atom consists of nucleus (protons + neutrons) surrounded by electrons in orbitals. Proton: positive charge, mass ≈ 1 amu. Neutron: no charge, mass ≈ 1 amu. Electron: negative charge, mass ≈ 1/1840 amu. Atomic number Z = number of protons (defines element). Mass number A = protons + neutrons. Neutral atom: protons = electrons. Isotopes: same Z, different A (different neutron numbers). Most of atom's mass in tiny nucleus; most volume is empty space.",
              keyPoints: [
                "Nucleus: protons + neutrons (dense, positive)",
                "Electrons orbit nucleus (negative)",
                "Atomic number Z = protons",
                "Mass number A = protons + neutrons",
                "Isotopes: same element, different neutrons",
                "Atom mostly empty space"
              ]
            },
            {
              title: "Energy Levels",
              content: "Electrons occupy discrete energy levels (shells). Lower levels have lower energy, closer to nucleus. Electrons can jump between levels by absorbing or emitting photons. Energy of photon: E = hf (h = Planck's constant = 6.63 × 10⁻³⁴ J·s). Electron transitions to higher level: absorbs energy. To lower level: emits energy as photon. Each element has unique emission spectrum (fingerprint). Ground state: lowest energy configuration. Excited state: electron in higher level.",
              keyPoints: [
                "Electrons in discrete energy levels",
                "Photon energy E = hf",
                "Absorption: electron jumps up",
                "Emission: electron falls down, releases photon",
                "Each element has unique spectrum",
                "Ground state: lowest energy"
              ]
            }
          ],
          objectives: [
            "Describe structure of atom",
            "Define atomic number, mass number, and isotopes",
            "Explain energy levels and electron transitions",
            "Calculate photon energy using E = hf"
          ]
        },
        {
          title: "Radioactivity",
          subtopics: [
            {
              title: "Types of Radiation",
              content: "Radioactive decay: unstable nucleus emits particles/energy to become stable. Alpha (α): helium nucleus (2 protons + 2 neutrons), charge +2, low penetration (stopped by paper), highly ionizing. Beta (β): fast electron from nucleus (neutron → proton + electron), charge -1, moderate penetration (stopped by aluminum), moderately ionizing. Gamma (γ): high-energy EM wave, no charge/mass, high penetration (reduced by lead/concrete), weakly ionizing. All three are harmful; shielding and distance provide protection.",
              keyPoints: [
                "Alpha α: helium nucleus, +2 charge, stopped by paper",
                "Beta β: electron, -1 charge, stopped by aluminum",
                "Gamma γ: EM wave, no charge, needs lead",
                "Penetration: γ > β > α",
                "Ionization: α > β > γ",
                "All harmful to living tissue"
              ]
            },
            {
              title: "Nuclear Equations and Half-Life",
              content: "Alpha decay: mass number -4, atomic number -2. Example: ²³⁸U → ²³⁴Th + ⁴He. Beta decay: mass number unchanged, atomic number +1. Example: ¹⁴C → ¹⁴N + ⁰e. Gamma emission: no change in A or Z. Half-life t½: time for half of radioactive atoms to decay. N = N₀(½)^(t/t½) or N = N₀e^(-λt). Activity A = λN (decays per second), measured in Becquerels (Bq). Half-life is constant for each isotope, unaffected by temperature or pressure.",
              keyPoints: [
                "Alpha: A-4, Z-2 (loses helium nucleus)",
                "Beta: A same, Z+1 (neutron → proton + electron)",
                "Gamma: A and Z unchanged (energy release)",
                "Half-life: time for N → N/2",
                "N = N₀(½)^(t/t½)",
                "Activity A = λN (Becquerel = decay/second)"
              ]
            },
            {
              title: "Applications of Radioactivity",
              content: "Medical: cancer treatment (radiotherapy), diagnostic imaging (PET scans), sterilization of equipment. Carbon-14 dating: determines age of ancient organic materials (half-life 5,730 years). Industrial: thickness gauges, smoke detectors (Am-241), tracers. Nuclear power: controlled fission produces energy. Hazards: ionizing radiation damages DNA, causes cancer. Safety: time, distance, shielding (ALARA principle: As Low As Reasonably Achievable).",
              keyPoints: [
                "Medical: therapy, imaging, sterilization",
                "Carbon dating: age determination (t½ = 5,730 yr)",
                "Industrial: gauges, detectors, tracers",
                "Nuclear power: fission energy",
                "Hazards: DNA damage, cancer",
                "Protection: time, distance, shielding"
              ]
            }
          ],
          objectives: [
            "Compare properties of alpha, beta, and gamma radiation",
            "Write and balance nuclear equations",
            "Calculate amount remaining using half-life formula",
            "Describe applications and hazards of radioactivity"
          ]
        },
        {
          title: "Nuclear Reactions",
          subtopics: [
            {
              title: "Fission and Fusion",
              content: "Nuclear fission: heavy nucleus splits into lighter nuclei, releasing energy and neutrons. Example: ²³⁵U + neutron → ⁹²Kr + ¹⁴¹Ba + 3 neutrons + energy. Chain reaction occurs when released neutrons cause further fissions. Used in nuclear reactors (controlled) and atomic bombs (uncontrolled). Nuclear fusion: light nuclei combine to form heavier nucleus, releasing more energy than fission. Example: ²H + ³H → ⁴He + neutron + energy. Occurs in stars (sun's energy source). Requires extremely high temperature and pressure.",
              keyPoints: [
                "Fission: heavy nucleus splits → lighter + energy",
                "Example: U-235 splits into smaller nuclei",
                "Chain reaction: neutrons cause more fissions",
                "Fusion: light nuclei combine → heavier + energy",
                "Example: hydrogen → helium (sun's energy)",
                "Fusion releases more energy per kg than fission",
                "E = mc² relates mass defect to energy"
              ]
            }
          ],
          objectives: [
            "Distinguish between fission and fusion",
            "Explain chain reactions in fission",
            "Describe fusion as energy source in stars",
            "Apply E = mc² to calculate energy released"
          ]
        }
      ]
    }
  }
];
