export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'formula'; title: string; equations: string[] }
  | { type: 'key-point'; text: string };

export type Topic = {
  id: string;
  title: string;
  content: ContentBlock[];
};

export type SubjectId = 'english' | 'biology' | 'chemistry' | 'physics';

export type Subject = {
  id: SubjectId;
  name: string;
  description: string;
  color: string;      // Tailwind text color
  bgLight: string;    // Light mode bg
  bgDark: string;     // Dark mode bg
  gradient: string;   // For cards
  patternImg: string; // Background pattern
  topics: Topic[];
};

export const SYLLABUS_DATA: Record<SubjectId, Subject> = {
  english: {
    id: 'english',
    name: 'English Language',
    description: 'Master comprehension, lexis, structure, and oral english patterns.',
    color: 'text-blue-600 dark:text-blue-400',
    bgLight: 'bg-blue-50',
    bgDark: 'bg-blue-950/30',
    gradient: 'from-blue-600 to-indigo-600',
    patternImg: 'pattern-english.png',
    topics: [
      {
        id: 'eng-lexis',
        title: 'Lexis & Structure',
        content: [
          { type: 'paragraph', text: 'Tests your understanding of vocabulary in context, correct usage of words, and grammatical structures.' },
          { type: 'list', items: [
            '**Synonyms & Antonyms:** Identifying words nearest or opposite in meaning. Context is crucial.',
            '**Collocations:** Words that naturally go together (e.g., "commit a crime", not "do a crime").',
            '**Register:** Vocabulary specific to fields like law, medicine, sports, or agriculture.',
            '**Idioms:** Expressions where the meaning cannot be deduced from individual words (e.g., "spill the beans").'
          ]},
          { type: 'key-point', text: 'Always read the surrounding sentences in lexis questions. A word\'s meaning can change entirely depending on the context.' }
        ]
      },
      {
        id: 'eng-comprehension',
        title: 'Reading Comprehension',
        content: [
          { type: 'paragraph', text: 'Evaluates your ability to understand, interpret, and infer meaning from written passages.' },
          { type: 'list', items: [
            '**Main Idea:** Identifying the central theme of a paragraph or the whole passage.',
            '**Implied Meaning:** Deducing things not explicitly stated using context clues.',
            '**Tone & Purpose:** Recognizing the author\'s attitude (sarcastic, objective, critical) and intention.',
            '**Passage Types:** Argumentative (persuading), Narrative (storytelling), Expository (explaining facts).'
          ]}
        ]
      },
      {
        id: 'eng-oral',
        title: 'Oral English (Phonology)',
        content: [
          { type: 'paragraph', text: 'Focuses on the pronunciation of English sounds, stress, and intonation patterns.' },
          { type: 'list', items: [
            '**Vowels:** Monophthongs (single sounds like /æ/ in "cat") and Diphthongs (gliding sounds like /aɪ/ in "buy").',
            '**Consonants:** Paying attention to silent letters and specific phonemes like /θ/ (thin) vs /ð/ (this).',
            '**Word Stress:** Knowing which syllable receives the most force. Rules change based on suffixes (e.g., PHO-to-graph vs pho-TOG-ra-phy).',
            '**Emphatic Stress:** Sentence stress that changes meaning based on the emphasized word.'
          ]},
          { type: 'key-point', text: 'For rhyming questions, focus purely on the sound, not the spelling. "Wait" and "Weight" sound identical despite different spellings.' }
        ]
      },
      {
        id: 'eng-figures',
        title: 'Figures of Speech',
        content: [
          { type: 'paragraph', text: 'Literary devices used to create vivid imagery or express ideas creatively.' },
          { type: 'list', items: [
            '**Simile & Metaphor:** Comparing things (Simile uses "like/as", Metaphor is direct).',
            '**Personification:** Giving human traits to non-living things.',
            '**Oxymoron & Paradox:** Combining contradictory terms (e.g., "bittersweet").',
            '**Hyperbole & Irony:** Exaggeration for effect vs expressing the opposite of what is meant.'
          ]}
        ]
      },
      {
        id: 'eng-concord',
        title: 'Concord (Agreement)',
        content: [
          { type: 'paragraph', text: 'The grammatical agreement between subjects and verbs in a sentence.' },
          { type: 'list', items: [
            'Singular subjects take singular verbs (ends in -s for present tense: "He walks").',
            '**Collective Nouns:** Usually take singular verbs if acting as a unit (e.g., "The committee has decided").',
            '**Indefinite Pronouns:** "Everyone", "nobody", "someone" always take singular verbs.',
            '**Correlative Conjunctions:** For "either/or" and "neither/nor", the verb agrees with the noun closest to it.'
          ]},
          { type: 'key-point', text: 'Ignore intervening phrases! In "The boy, along with his friends, IS going", the verb agrees with "boy", not "friends".' }
        ]
      }
    ]
  },
  biology: {
    id: 'biology',
    name: 'Biology',
    description: 'Explore the science of life, from cellular structures to complex ecosystems.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bgLight: 'bg-emerald-50',
    bgDark: 'bg-emerald-950/30',
    gradient: 'from-emerald-500 to-green-600',
    patternImg: 'pattern-biology.png',
    topics: [
      {
        id: 'bio-cell',
        title: 'Cell Biology',
        content: [
          { type: 'paragraph', text: 'The cell is the fundamental unit of life. Understanding organelles and their functions is heavily tested.' },
          { type: 'list', items: [
            '**Nucleus:** Contains genetic material (DNA), controls cell activities.',
            '**Mitochondria:** Powerhouse of the cell; site of aerobic respiration (ATP production).',
            '**Chloroplasts:** Found only in plants; site of photosynthesis containing chlorophyll.',
            '**Cell Membrane:** Semi-permeable; controls what enters and exits the cell.',
            '**Mitosis vs Meiosis:** Mitosis is for growth/repair (produces 2 identical diploid cells). Meiosis is for reproduction (produces 4 genetically different haploid gametes).'
          ]},
          { type: 'key-point', text: 'Plant cells have a rigid cell wall, chloroplasts, and a large central vacuole; animal cells do not.' }
        ]
      },
      {
        id: 'bio-nutrition',
        title: 'Nutrition',
        content: [
          { type: 'paragraph', text: 'How organisms obtain and process food for energy and growth.' },
          { type: 'list', items: [
            '**Autotrophic:** Organisms make their own food (e.g., Photosynthesis in plants). Light + Water + CO2 → Glucose + Oxygen.',
            '**Heterotrophic:** Relying on other organisms for food (Holozoic, Saprophytic, Parasitic).',
            '**Human Digestion:** Begins in the mouth (amylase breaks down starch). Stomach (pepsin breaks down proteins in acidic pH). Small intestine (lipase for fats, nutrient absorption via villi).'
          ]}
        ]
      },
      {
        id: 'bio-transport',
        title: 'Transport System',
        content: [
          { type: 'paragraph', text: 'The movement of materials within an organism.' },
          { type: 'list', items: [
            '**Human Heart:** 4 chambers. Right side pumps deoxygenated blood to lungs; Left side pumps oxygenated blood to the body.',
            '**Blood Components:** Red blood cells (carry oxygen via hemoglobin), White blood cells (immunity), Platelets (clotting), Plasma (liquid matrix carrying dissolved substances).',
            '**Plant Transport:** Xylem transports water and minerals up from roots. Phloem transports manufactured food (sugars) from leaves to other parts.'
          ]}
        ]
      },
      {
        id: 'bio-genetics',
        title: 'Genetics & Heredity',
        content: [
          { type: 'paragraph', text: 'The study of inheritance and variation of traits.' },
          { type: 'list', items: [
            '**Mendel\'s Laws:** Law of Segregation (alleles separate during gamete formation) and Law of Independent Assortment.',
            '**Genotype & Phenotype:** Genetic makeup (e.g., Tt) vs physical appearance (e.g., Tall).',
            '**Sex Determination:** Humans have 23 pairs of chromosomes. Females are XX, Males are XY. The male gamete determines the sex of the offspring.'
          ]},
          { type: 'key-point', text: 'Blood group O is the universal donor, while group AB is the universal recipient.' }
        ]
      },
      {
        id: 'bio-ecology',
        title: 'Ecology',
        content: [
          { type: 'paragraph', text: 'The study of interactions between organisms and their environment.' },
          { type: 'list', items: [
            '**Ecosystem:** A community of interacting organisms (biotic) and their physical environment (abiotic).',
            '**Food Chains:** Flow of energy from producers (plants) to consumers (herbivores -> carnivores). Only ~10% of energy is passed to the next trophic level.',
            '**Nutrient Cycles:** Carbon cycle (photosynthesis removes CO2, respiration adds it) and Nitrogen cycle (nitrogen-fixing bacteria are crucial).'
          ]}
        ]
      }
    ]
  },
  chemistry: {
    id: 'chemistry',
    name: 'Chemistry',
    description: 'Understand the composition, properties, and reactions of matter.',
    color: 'text-orange-600 dark:text-orange-400',
    bgLight: 'bg-orange-50',
    bgDark: 'bg-orange-950/30',
    gradient: 'from-orange-500 to-red-500',
    patternImg: 'pattern-chemistry.png',
    topics: [
      {
        id: 'chem-atomic',
        title: 'Atomic Structure',
        content: [
          { type: 'paragraph', text: 'The foundation of chemistry dealing with the particles that make up atoms.' },
          { type: 'list', items: [
            '**Subatomic Particles:** Protons (+, in nucleus), Neutrons (0, in nucleus), Electrons (-, orbiting nucleus).',
            '**Atomic Number (Z):** Number of protons. Determines the element.',
            '**Mass Number (A):** Protons + Neutrons.',
            '**Isotopes:** Atoms of the same element with the same atomic number but different mass numbers (different number of neutrons).'
          ]},
          { type: 'formula', title: 'Electronic Configuration Order', equations: ['1s², 2s², 2p⁶, 3s², 3p⁶, 4s², 3d¹⁰...'] }
        ]
      },
      {
        id: 'chem-gas',
        title: 'Gas Laws',
        content: [
          { type: 'paragraph', text: 'Mathematical relationships describing the behavior of gases under various conditions of pressure, volume, and temperature.' },
          { type: 'list', items: [
            '**Boyle\'s Law:** Volume is inversely proportional to Pressure at constant Temperature.',
            '**Charles\' Law:** Volume is directly proportional to absolute Temperature at constant Pressure.',
            '**Graham\'s Law of Diffusion:** Rate of diffusion is inversely proportional to the square root of gas density or molar mass.'
          ]},
          { type: 'formula', title: 'Ideal Gas Equation', equations: ['PV = nRT', 'P₁V₁/T₁ = P₂V₂/T₂'] },
          { type: 'key-point', text: 'Temperature MUST always be converted to Kelvin (K = °C + 273) before using gas law equations.' }
        ]
      },
      {
        id: 'chem-stoich',
        title: 'Stoichiometry & Mole Concept',
        content: [
          { type: 'paragraph', text: 'Quantitative relationships in chemical reactions.' },
          { type: 'list', items: [
            '**The Mole:** 1 mole = 6.02 × 10²³ particles (Avogadro\'s number).',
            '**Molar Volume:** 1 mole of any gas occupies 22.4 dm³ at Standard Temperature and Pressure (STP).',
            '**Empirical vs Molecular Formula:** Empirical is the simplest whole-number ratio of atoms; Molecular is the actual number of atoms in a molecule.'
          ]},
          { type: 'formula', title: 'Mole Calculations', equations: ['Moles (n) = Mass (m) / Molar Mass (M)', 'Moles (n) = Concentration (C) × Volume (V)'] }
        ]
      },
      {
        id: 'chem-organic',
        title: 'Organic Chemistry',
        content: [
          { type: 'paragraph', text: 'The study of carbon-containing compounds.' },
          { type: 'list', items: [
            '**Alkanes:** Saturated hydrocarbons, single bonds. General formula: CnH2n+2. Undergo substitution reactions.',
            '**Alkenes:** Unsaturated, contain carbon-carbon double bonds. General formula: CnH2n. Undergo addition reactions.',
            '**Alcohols:** Contain the -OH (hydroxyl) functional group. Ethanol is produced via fermentation of sugars.',
            '**Esterification:** Reaction between an alkanol (alcohol) and an alkanoic acid (carboxylic acid) to form an ester (sweet-smelling) and water.'
          ]},
          { type: 'key-point', text: 'Markovnikov\'s rule: In addition reactions of alkenes, the hydrogen atom attaches to the carbon with the most hydrogens already attached.' }
        ]
      },
      {
        id: 'chem-redox',
        title: 'Electrochemistry & Redox',
        content: [
          { type: 'paragraph', text: 'Reactions involving the transfer of electrons.' },
          { type: 'list', items: [
            '**Oxidation:** Loss of electrons, increase in oxidation number, addition of oxygen.',
            '**Reduction:** Gain of electrons, decrease in oxidation number, addition of hydrogen.',
            '**Electrolysis:** Chemical decomposition caused by passing direct current through an electrolyte. Cations (+) go to the Cathode (-), Anions (-) go to the Anode (+).'
          ]},
          { type: 'formula', title: 'Faraday\'s First Law', equations: ['Mass (m) ∝ Quantity of electricity (Q)', 'm = ZIt'] }
        ]
      }
    ]
  },
  physics: {
    id: 'physics',
    name: 'Physics',
    description: 'Master the fundamental laws of nature, energy, and motion.',
    color: 'text-purple-600 dark:text-purple-400',
    bgLight: 'bg-purple-50',
    bgDark: 'bg-purple-950/30',
    gradient: 'from-purple-500 to-violet-600',
    patternImg: 'pattern-physics.png',
    topics: [
      {
        id: 'phy-mechanics',
        title: 'Mechanics',
        content: [
          { type: 'paragraph', text: 'The study of motion and the forces that cause it. The most heavily tested section.' },
          { type: 'list', items: [
            '**Scalars vs Vectors:** Scalars have magnitude only (e.g., speed, mass, energy). Vectors have both magnitude and direction (e.g., velocity, force, momentum).',
            '**Newton\'s Laws:** 1st: Inertia. 2nd: F = ma (Force equals mass × acceleration). 3rd: Action & Reaction are equal and opposite.',
            '**Work, Energy, Power:** Work is done when force moves an object. Power is the rate of doing work.'
          ]},
          { type: 'formula', title: 'Equations of Motion', equations: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as'] },
          { type: 'formula', title: 'Energy', equations: ['Kinetic Energy (KE) = ½mv²', 'Potential Energy (PE) = mgh'] }
        ]
      },
      {
        id: 'phy-waves',
        title: 'Waves & Sound',
        content: [
          { type: 'paragraph', text: 'The transfer of energy without the transfer of matter.' },
          { type: 'list', items: [
            '**Transverse vs Longitudinal:** Transverse waves oscillate perpendicular to propagation (e.g., light, water). Longitudinal waves oscillate parallel to propagation (e.g., sound).',
            '**Wave Phenomena:** Reflection (bouncing back), Refraction (bending due to speed change), Diffraction (spreading around obstacles), Interference.',
            '**Sound:** Requires a material medium to travel (cannot travel in a vacuum). Pitch depends on frequency; Loudness depends on amplitude.'
          ]},
          { type: 'formula', title: 'Wave Equation', equations: ['v = fλ (Speed = frequency × wavelength)'] }
        ]
      },
      {
        id: 'phy-optics',
        title: 'Light & Optics',
        content: [
          { type: 'paragraph', text: 'The behavior and properties of light.' },
          { type: 'list', items: [
            '**Reflection:** Angle of incidence = Angle of reflection. Plane mirrors form virtual, upright, laterally inverted images.',
            '**Refraction:** Light bends towards the normal when entering a denser medium. Snell\'s law governs this.',
            '**Total Internal Reflection:** Occurs when light travels from dense to less dense medium and the angle of incidence exceeds the critical angle. Used in fiber optics.'
          ]},
          { type: 'formula', title: 'Mirror/Lens Formula', equations: ['1/f = 1/u + 1/v', 'Refractive Index (n) = sin(i) / sin(r)'] },
          { type: 'key-point', text: 'Convex mirrors always produce virtual, diminished, and upright images, making them ideal for driving mirrors.' }
        ]
      },
      {
        id: 'phy-electricity',
        title: 'Electricity & Magnetism',
        content: [
          { type: 'paragraph', text: 'The study of electric charges, currents, and their interaction with magnetic fields.' },
          { type: 'list', items: [
            '**Ohm\'s Law:** Current is directly proportional to Voltage at a constant temperature (V = IR).',
            '**Resistors:** Series (Rt = R1 + R2...). Parallel (1/Rt = 1/R1 + 1/R2...).',
            '**Electromagnetic Induction:** A changing magnetic field induces an electromotive force (EMF) in a conductor. (Faraday\'s and Lenz\'s laws).'
          ]},
          { type: 'formula', title: 'Electrical Power', equations: ['P = IV = I²R = V²/R', 'Electrical Energy = Pt'] }
        ]
      },
      {
        id: 'phy-nuclear',
        title: 'Nuclear Physics',
        content: [
          { type: 'paragraph', text: 'The study of atomic nuclei and their interactions.' },
          { type: 'list', items: [
            '**Radioactivity:** Spontaneous emission of radiation. Alpha (helium nucleus, low penetration), Beta (electron, medium penetration), Gamma (electromagnetic wave, high penetration).',
            '**Half-Life:** The time taken for half the radioactive nuclei in a sample to decay.',
            '**Fission vs Fusion:** Fission splits heavy nuclei (nuclear reactors). Fusion combines light nuclei (stars/sun).'
          ]},
          { type: 'formula', title: 'Mass-Energy Equivalence', equations: ['E = mc²'] }
        ]
      }
    ]
  }
};
