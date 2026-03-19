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

export const biologyNotes: StudyNote[] = [
  {
    id: "bio-note-001",
    subjectId: "biology",
    title: "Cell Biology and Organization",
    order: 1,
    content: {
      overview: "The cell is the basic structural and functional unit of all living organisms. Understanding cell structure, function, and organization is fundamental to biology. This section covers cell types, organelles, transport mechanisms, and levels of organization in living things.",
      topics: [
        {
          title: "Cell Structure",
          subtopics: [
            {
              title: "Prokaryotic vs Eukaryotic Cells",
              content: "Prokaryotic cells (bacteria) are simple cells without membrane-bound organelles. They lack a true nucleus; genetic material (circular DNA) is in the nucleoid region. They have ribosomes (70S), cell wall (peptidoglycan), cell membrane, and some have flagella for movement. Size: 1-10 μm. Eukaryotic cells (plants, animals, fungi) are complex with membrane-bound organelles. They have a true nucleus with linear DNA enclosed in nuclear membrane. They have ribosomes (80S), mitochondria, and other organelles. Size: 10-100 μm. Eukaryotes evolved from prokaryotes through endosymbiosis.",
              keyPoints: [
                "Prokaryotes: no nucleus, no membrane-bound organelles",
                "Prokaryotes: circular DNA, 70S ribosomes, smaller (1-10 μm)",
                "Eukaryotes: true nucleus, membrane-bound organelles",
                "Eukaryotes: linear DNA, 80S ribosomes, larger (10-100 μm)",
                "Bacteria are prokaryotes",
                "Plants, animals, fungi are eukaryotes"
              ]
            },
            {
              title: "Cell Organelles and Functions",
              content: "Nucleus: contains DNA, controls cell activities, surrounded by nuclear membrane with pores. Mitochondria: site of aerobic respiration, produces ATP (energy currency), has double membrane with cristae. Ribosomes: protein synthesis (translation), free in cytoplasm or on rough ER. Endoplasmic reticulum: Rough ER has ribosomes (protein processing), Smooth ER lacks ribosomes (lipid synthesis, detoxification). Golgi apparatus: modifies, packages, and transports proteins. Lysosomes: contain digestive enzymes, break down waste. Chloroplasts (plants only): photosynthesis, contain chlorophyll, have double membrane with thylakoids. Cell wall (plants, bacteria, fungi): provides structural support and protection.",
              keyPoints: [
                "Nucleus: control center, contains DNA",
                "Mitochondria: powerhouse, ATP production",
                "Ribosomes: protein synthesis",
                "Rough ER: protein processing; Smooth ER: lipid synthesis",
                "Golgi: packaging and transport",
                "Lysosomes: waste breakdown",
                "Chloroplasts: photosynthesis (plants only)"
              ]
            },
            {
              title: "Plant vs Animal Cells",
              content: "Both have: nucleus, mitochondria, ribosomes, ER, Golgi, cell membrane, cytoplasm. Plant cells have: cell wall (cellulose), large permanent central vacuole (stores water, maintains turgor), chloroplasts (photosynthesis), plasmodesmata (connections between cells), regular rectangular shape. Animal cells have: centrioles (cell division), lysosomes more prominent, many small temporary vacuoles, irregular shape, no cell wall (flexible). These differences reflect different lifestyles - plants are stationary and make their own food, animals are mobile and consume food.",
              keyPoints: [
                "Both: nucleus, mitochondria, ribosomes, ER, Golgi, membrane",
                "Plant only: cell wall, large vacuole, chloroplasts",
                "Animal only: centrioles, prominent lysosomes",
                "Plant cells: fixed rectangular shape",
                "Animal cells: irregular flexible shape",
                "Cell wall provides rigidity in plants"
              ]
            }
          ],
          objectives: [
            "Compare prokaryotic and eukaryotic cells",
            "Identify cell organelles and state their functions",
            "Distinguish between plant and animal cells",
            "Relate cell structure to function"
          ]
        },
        {
          title: "Cell Transport",
          subtopics: [
            {
              title: "Passive Transport",
              content: "Passive transport moves substances without energy input, down concentration gradient (high to low). Diffusion: net movement of particles from high to low concentration until equilibrium. Rate affected by: concentration gradient, temperature, surface area, distance. Examples: oxygen into cells, CO₂ out of cells. Osmosis: diffusion of water through selectively permeable membrane from high water potential (dilute) to low water potential (concentrated). Facilitated diffusion: uses protein channels/carriers to move specific molecules down gradient (e.g., glucose into cells). Faster than simple diffusion but still passive.",
              keyPoints: [
                "No energy required (ATP)",
                "Movement down concentration gradient",
                "Diffusion: particles spread from high to low concentration",
                "Osmosis: water movement through membrane",
                "Facilitated diffusion: via protein channels",
                "Continues until equilibrium reached"
              ]
            },
            {
              title: "Active Transport",
              content: "Active transport moves substances against concentration gradient (low to high), requires energy from ATP. Uses carrier proteins (pumps) in cell membrane. Example: sodium-potassium pump (3 Na⁺ out, 2 K⁺ in), maintains nerve impulse. Mineral absorption by root hairs uses active transport. Endocytosis: cell engulfs material into vesicle. Phagocytosis: engulfing solid particles (cell eating). Pinocytosis: engulfing liquid (cell drinking). Exocytosis: cell releases material by vesicle fusing with membrane (e.g., hormone secretion, neurotransmitter release).",
              keyPoints: [
                "Requires ATP energy",
                "Movement against concentration gradient (low → high)",
                "Uses carrier proteins (pumps)",
                "Na⁺/K⁺ pump: important example",
                "Endocytosis: taking in material (phago/pinocytosis)",
                "Exocytosis: releasing material"
              ]
            },
            {
              title: "Effects of Osmosis",
              content: "In plant cells: Hypotonic solution (dilute) → water enters by osmosis → cell becomes turgid (firm, swollen). Hypertonic solution (concentrated) → water leaves → cell becomes plasmolyzed (membrane pulls away from wall, wilted). Isotonic solution → no net water movement. In animal cells: Hypotonic → cell swells, may burst (lysis) as no cell wall. Hypertonic → cell shrinks (crenation). Isotonic → maintains normal shape. Turgor pressure in plant cells provides support; plasmolysis causes wilting. This is why plants need watering.",
              keyPoints: [
                "Hypotonic: water enters cell (turgid in plants, may burst in animals)",
                "Hypertonic: water leaves cell (plasmolysis in plants, crenation in animals)",
                "Isotonic: no net movement",
                "Turgor: pressure supporting plant cells",
                "Plasmolysis: loss of turgor, wilting",
                "Animal cells lack wall, more vulnerable to osmotic changes"
              ]
            }
          ],
          objectives: [
            "Distinguish between passive and active transport",
            "Explain diffusion, osmosis, and facilitated diffusion",
            "Describe effects of osmosis on plant and animal cells",
            "Explain why active transport requires energy"
          ]
        },
        {
          title: "Levels of Organization",
          subtopics: [
            {
              title: "From Cells to Organisms",
              content: "Biological organization follows a hierarchy. Cell: basic unit of life, performs all life functions. Tissue: group of similar cells performing same function (e.g., epithelial tissue, muscle tissue, connective tissue). Organ: structure made of different tissues working together (e.g., heart has muscle, connective, epithelial tissue). Organ system: group of organs working together (e.g., digestive system: mouth, esophagus, stomach, intestines). Organism: complete living thing, all systems working together. Unicellular organisms (bacteria, amoeba) are single cells. Multicellular organisms (humans, plants) have many cells organized into tissues, organs, and systems.",
              keyPoints: [
                "Cell → Tissue → Organ → Organ system → Organism",
                "Tissue: group of similar cells",
                "Organ: different tissues together",
                "Organ system: organs working together",
                "Unicellular: one cell = whole organism",
                "Multicellular: many specialized cells"
              ]
            }
          ],
          objectives: [
            "Define levels of biological organization",
            "Give examples of tissues, organs, and systems",
            "Explain specialization in multicellular organisms",
            "Relate structure to function at each level"
          ]
        }
      ]
    }
  },
  {
    id: "bio-note-002",
    subjectId: "biology",
    title: "Genetics and Heredity",
    order: 2,
    content: {
      overview: "Genetics is the study of heredity and variation in organisms. Understanding how traits are passed from parents to offspring and how variations arise is crucial for biology, medicine, agriculture, and evolution.",
      topics: [
        {
          title: "Basic Genetics",
          subtopics: [
            {
              title: "Key Genetic Terms",
              content: "Gene: section of DNA coding for a specific protein/trait. Allele: alternative form of a gene (e.g., tall vs short). Dominant allele: expressed even when only one copy present, represented by capital letter (T). Recessive allele: only expressed when two copies present, lowercase letter (t). Homozygous: two identical alleles (TT or tt), breeds true. Heterozygous: two different alleles (Tt), hybrid. Genotype: genetic makeup (alleles present, e.g., Tt). Phenotype: observable characteristic (physical appearance, e.g., tall). Chromosome: structure containing DNA. Humans have 46 chromosomes (23 pairs).",
              keyPoints: [
                "Gene: DNA segment for one trait",
                "Allele: variant of gene (T or t)",
                "Dominant: expressed with one copy (T)",
                "Recessive: needs two copies to show (t)",
                "Genotype: genetic code (TT, Tt, tt)",
                "Phenotype: physical appearance (tall, short)"
              ]
            },
            {
              title: "Mendel's Laws",
              content: "Gregor Mendel discovered laws of inheritance through pea plant experiments. Law of Segregation (First Law): Each gamete receives only one allele for each trait. During gamete formation, allele pairs separate so each gamete carries one allele. Law of Independent Assortment (Second Law): Genes for different traits are inherited independently of each other (if on different chromosomes). This creates genetic variation. Mendel worked with traits showing complete dominance. His laws form the foundation of genetics.",
              keyPoints: [
                "Law of Segregation: alleles separate in gametes",
                "Each gamete gets one allele per trait",
                "Law of Independent Assortment: traits inherited independently",
                "Applies to genes on different chromosomes",
                "Creates genetic variation",
                "Foundation of genetic inheritance"
              ]
            },
            {
              title: "Monohybrid Cross",
              content: "Monohybrid cross examines inheritance of one trait. Example: Tall (T) dominant, short (t) recessive. P generation: TT × tt. F1 generation: all Tt (tall phenotype). F1 × F1: Tt × Tt. F2 generation using Punnett square: TT, Tt, Tt, tt. Genotypic ratio: 1TT : 2Tt : 1tt. Phenotypic ratio: 3 tall : 1 short. The 3:1 ratio is characteristic of monohybrid cross with complete dominance. Test cross (Tt × tt) used to determine unknown genotype.",
              keyPoints: [
                "Monohybrid: one trait examined",
                "Use Punnett square to predict offspring",
                "F2 genotypic ratio: 1:2:1",
                "F2 phenotypic ratio: 3:1 (with complete dominance)",
                "Test cross: cross with homozygous recessive",
                "Determines if dominant phenotype is TT or Tt"
              ]
            },
            {
              title: "Dihybrid Cross",
              content: "Dihybrid cross examines inheritance of two traits simultaneously. Example: Round Yellow (RRYY) × Wrinkled Green (rryy). F1: all RrYy (round yellow). F1 × F1: RrYy × RrYy produces 16 combinations. F2 phenotypic ratio: 9 round yellow : 3 round green : 3 wrinkled yellow : 1 wrinkled green (9:3:3:1 ratio). This ratio shows independent assortment of two genes. Used to study linkage - genes on same chromosome don't show 9:3:3:1 ratio.",
              keyPoints: [
                "Dihybrid: two traits examined together",
                "F1: all heterozygous for both traits",
                "F2 phenotypic ratio: 9:3:3:1",
                "Shows independent assortment",
                "Requires 4×4 Punnett square",
                "Deviation from 9:3:3:1 suggests gene linkage"
              ]
            }
          ],
          objectives: [
            "Define basic genetic terminology",
            "Apply Mendel's laws to genetic problems",
            "Construct and interpret Punnett squares",
            "Predict offspring genotypes and phenotypes"
          ]
        },
        {
          title: "Patterns of Inheritance",
          subtopics: [
            {
              title: "Incomplete Dominance and Codominance",
              content: "Incomplete dominance: Neither allele is completely dominant; heterozygote shows intermediate phenotype. Example: Red flower (RR) × White flower (WW) → Pink flowers (RW). F2 from RW × RW: 1 red : 2 pink : 1 white (1:2:1 phenotypic ratio matches genotypic ratio). Codominance: Both alleles fully expressed in heterozygote. Example: ABO blood groups - IA and IB are codominant. IAIB gives blood type AB (both A and B antigens present). Different from incomplete dominance where blending occurs.",
              keyPoints: [
                "Incomplete dominance: intermediate phenotype in heterozygote",
                "Example: red + white = pink",
                "Phenotypic ratio = genotypic ratio (1:2:1)",
                "Codominance: both alleles fully expressed",
                "Example: AB blood type",
                "No blending in codominance"
              ]
            },
            {
              title: "ABO Blood Groups",
              content: "Human blood groups determined by three alleles: IA (produces A antigen), IB (produces B antigen), i (no antigen). IA and IB are codominant; both are dominant over i. Type A: IAIA or IAi (A antigen, anti-B antibodies). Type B: IBIB or IBi (B antigen, anti-A antibodies). Type AB: IAIB (both antigens, no antibodies) - universal recipient. Type O: ii (no antigens, both antibodies) - universal donor. Transfusion: antigen-antibody reaction causes blood clumping if incompatible. Rhesus factor (Rh): Rh+ dominant over Rh-.",
              keyPoints: [
                "Three alleles: IA, IB, i",
                "IA and IB codominant, both dominant over i",
                "Type A: IAIA or IAi; Type B: IBIB or IBi",
                "Type AB: IAIB (universal recipient)",
                "Type O: ii (universal donor)",
                "Must match blood types for safe transfusion"
              ]
            },
            {
              title: "Sex-Linked Inheritance",
              content: "Sex chromosomes determine biological sex: XX = female, XY = male. Sex-linked genes located on X chromosome (X-linked). Males have only one X, so one recessive allele causes condition (hemizygous). Females need two recessive alleles. Examples: color blindness, hemophilia. Carrier females (XNXn) have normal phenotype but carry recessive allele. Cross: XNXn (carrier female) × XNY (normal male) → 1/4 carrier daughters, 1/4 normal daughters, 1/4 affected sons, 1/4 normal sons. Males more commonly affected by X-linked recessive conditions.",
              keyPoints: [
                "Sex chromosomes: XX = female, XY = male",
                "X-linked traits: genes on X chromosome",
                "Males need one recessive allele to show trait",
                "Females need two recessive alleles",
                "Carrier females: normal phenotype, pass to sons",
                "Color blindness and hemophilia are X-linked"
              ]
            }
          ],
          objectives: [
            "Explain incomplete dominance and codominance",
            "Predict ABO blood group inheritance",
            "Understand sex-linked inheritance patterns",
            "Construct genetic crosses for different inheritance types"
          ]
        },
        {
          title: "Chromosomal Disorders and Mutations",
          subtopics: [
            {
              title: "Chromosomal Abnormalities",
              content: "Normal human karyotype: 46 chromosomes (23 pairs), 44 autosomes + 2 sex chromosomes. Non-disjunction: failure of chromosomes to separate during meiosis, causes abnormal number. Down syndrome (Trisomy 21): 47 chromosomes, extra chromosome 21. Features: intellectual disability, distinctive facial features, heart defects. Klinefelter syndrome: 47,XXY (male with extra X). Features: reduced fertility, feminine body shape. Turner syndrome: 45,XO (female missing X). Features: short stature, infertility. Edwards syndrome (Trisomy 18) and Patau syndrome (Trisomy 13) are severe, often fatal.",
              keyPoints: [
                "Normal: 46 chromosomes (23 pairs)",
                "Non-disjunction: improper separation in meiosis",
                "Down syndrome: Trisomy 21 (47 chromosomes)",
                "Klinefelter: 47,XXY (male)",
                "Turner: 45,XO (female)",
                "Risk increases with maternal age"
              ]
            },
            {
              title: "Gene Mutations",
              content: "Mutation: change in DNA sequence. Can be spontaneous or induced (radiation, chemicals). Gene mutation affects single gene. Point mutation: one base changed (substitution). May be silent (no effect), missense (different amino acid), or nonsense (stop codon). Sickle cell anemia: point mutation in hemoglobin gene (glutamic acid → valine). HbSHbS genotype causes disease, HbAHbS is carrier with sickle cell trait (heterozygote advantage in malaria regions). Frameshift mutation: insertion or deletion of bases, shifts reading frame, usually severe effect.",
              keyPoints: [
                "Mutation: change in DNA",
                "Point mutation: one base change",
                "Sickle cell: HbS allele (recessive)",
                "HbSHbS = disease; HbAHbS = carrier/trait",
                "Frameshift: insertion/deletion (severe)",
                "Mutations can be harmful, beneficial, or neutral"
              ]
            }
          ],
          objectives: [
            "Describe common chromosomal disorders",
            "Explain causes of chromosomal abnormalities",
            "Understand gene mutations and their effects",
            "Discuss sickle cell anemia inheritance"
          ]
        }
      ]
    }
  },
  {
    id: "bio-note-003",
    subjectId: "biology",
    title: "Ecology and Environment",
    order: 3,
    content: {
      overview: "Ecology is the study of interactions between organisms and their environment. Understanding ecosystems, food relationships, nutrient cycles, and conservation is essential for addressing environmental challenges and sustaining life on Earth.",
      topics: [
        {
          title: "Ecosystem Components",
          subtopics: [
            {
              title: "Ecological Terms",
              content: "Ecosystem: community of organisms and their physical environment functioning as a unit. Includes biotic (living) and abiotic (non-living) components. Habitat: where an organism lives (e.g., forest, pond). Niche: role of organism in ecosystem (feeding habits, behavior, interactions). Population: all individuals of one species in an area at a time. Community: all populations of all species in an area. Biome: large region with characteristic climate and organisms (e.g., tropical rainforest, savanna, desert). Environment: all external factors affecting an organism.",
              keyPoints: [
                "Ecosystem: living + non-living interacting",
                "Habitat: where organism lives",
                "Niche: organism's role/function",
                "Population: one species in area",
                "Community: all species in area",
                "Biome: large climatic region"
              ]
            },
            {
              title: "Biotic and Abiotic Factors",
              content: "Biotic factors (living): producers (plants), consumers (herbivores, carnivores, omnivores), decomposers (bacteria, fungi), predators, prey, parasites, competitors, disease organisms, food availability. Abiotic factors (non-living): temperature, light intensity, rainfall, humidity, wind, soil pH, soil type, mineral availability, atmospheric gases (O₂, CO₂), water availability, altitude, latitude. These factors interact to determine which organisms can survive in an ecosystem. Limiting factors restrict population growth (e.g., water in desert, nutrients in ocean).",
              keyPoints: [
                "Biotic: living factors (organisms, food, disease)",
                "Abiotic: non-living (temperature, light, water, soil)",
                "Abiotic factors affect distribution and abundance",
                "Tolerance range: organisms tolerate certain conditions",
                "Limiting factor: restricts population growth",
                "Factors interact to shape ecosystem"
              ]
            }
          ],
          objectives: [
            "Define key ecological terms",
            "Identify biotic and abiotic factors in ecosystems",
            "Explain how factors affect organism distribution",
            "Distinguish between habitat and niche"
          ]
        },
        {
          title: "Energy Flow and Food Relationships",
          subtopics: [
            {
              title: "Trophic Levels",
              content: "Energy flows through ecosystem in one direction: Sun → Producers → Consumers → Decomposers. Trophic levels represent feeding positions. Level 1 - Producers (autotrophs): make own food by photosynthesis (plants, algae) or chemosynthesis (some bacteria). Level 2 - Primary consumers: herbivores eating producers (grasshopper, zebra). Level 3 - Secondary consumers: carnivores eating herbivores (frog, lion). Level 4 - Tertiary consumers: top carnivores (eagle, shark). Decomposers (bacteria, fungi): break down dead organic matter, return nutrients to soil. Only about 10% of energy passes to next level; 90% lost as heat, movement, growth.",
              keyPoints: [
                "Producer → Primary consumer → Secondary → Tertiary",
                "Producers: photosynthesize (autotrophs)",
                "Primary consumers: herbivores",
                "Secondary/Tertiary consumers: carnivores",
                "Decomposers: break down dead matter",
                "10% energy rule: only 10% transferred up"
              ]
            },
            {
              title: "Food Chains and Webs",
              content: "Food chain: linear sequence showing feeding relationships. Example: Grass → Grasshopper → Frog → Snake → Hawk. Arrows show energy flow. Usually 4-5 levels maximum due to energy loss. Food web: interconnected food chains showing complex feeding relationships in ecosystem. More realistic than food chain. Predator-prey relationship: population cycles linked (predator increase → prey decrease → predator decrease → prey increase). Pyramid of numbers: shows number of organisms at each level. Pyramid of biomass: shows mass of organisms (usually largest at base). Pyramid of energy: always pyramid shape, shows energy at each level.",
              keyPoints: [
                "Food chain: simple linear sequence",
                "Food web: interconnected chains (more realistic)",
                "Arrows show direction of energy flow",
                "Maximum 4-5 trophic levels",
                "Pyramids: numbers, biomass, energy",
                "Energy pyramid always pyramid-shaped"
              ]
            },
            {
              title: "Symbiotic Relationships",
              content: "Symbiosis: close relationship between two species. Mutualism: both benefit (+/+). Examples: Rhizobium bacteria in legume root nodules (bacteria get food, plant gets nitrogen), lichen (fungus + alga), pollination (insect gets nectar, plant reproduces). Commensalism: one benefits, other unaffected (+/0). Examples: remora fish on shark, epiphytes on trees. Parasitism: parasite benefits, host harmed (+/-). Examples: tapeworm in intestine, Plasmodium (malaria), mistletoe on tree. Predation: predator kills and eats prey. Competition: organisms compete for same resources (food, space, mates); reduces both (-/-).",
              keyPoints: [
                "Mutualism: both benefit (+/+)",
                "Commensalism: one benefits, other neutral (+/0)",
                "Parasitism: parasite benefits, host harmed (+/-)",
                "Predation: predator benefits, prey harmed",
                "Competition: both harmed (-/-)",
                "Symbiosis shapes ecosystem interactions"
              ]
            }
          ],
          objectives: [
            "Describe energy flow through trophic levels",
            "Construct food chains and food webs",
            "Explain the 10% energy rule",
            "Identify types of symbiotic relationships"
          ]
        },
        {
          title: "Nutrient Cycles",
          subtopics: [
            {
              title: "Carbon Cycle",
              content: "Carbon moves between atmosphere, organisms, and Earth. Photosynthesis: plants remove CO₂ from air, convert to glucose (CO₂ + H₂O → C₆H₁₂O₆ + O₂). Respiration: all organisms release CO₂ (C₆H₁₂O₆ + O₂ → CO₂ + H₂O + energy). Combustion: burning fossil fuels, wood releases CO₂. Decomposition: decomposers break down dead organisms, release CO₂. Fossilization: dead organisms form fossil fuels (coal, oil, gas) over millions of years. Human activities (deforestation, burning fossil fuels) increase atmospheric CO₂, contributing to greenhouse effect and climate change.",
              keyPoints: [
                "CO₂ removed by photosynthesis",
                "CO₂ released by respiration, combustion, decomposition",
                "Carbon stored in organisms, fossil fuels, oceans",
                "Fossil fuels from ancient organisms",
                "Deforestation increases CO₂",
                "Greenhouse effect: excess CO₂ traps heat"
              ]
            },
            {
              title: "Nitrogen Cycle",
              content: "Nitrogen (N₂) makes up 78% of atmosphere but plants can't use it directly. Nitrogen fixation: N₂ converted to ammonia (NH₃) by nitrogen-fixing bacteria (Rhizobium in legume roots, Azotobacter in soil) and lightning. Nitrification: ammonia converted to nitrites (NO₂⁻) by Nitrosomonas bacteria, then to nitrates (NO₃⁻) by Nitrobacter. Plants absorb nitrates through roots. Assimilation: plants use nitrates to make proteins, DNA. Animals get nitrogen by eating plants. Ammonification: decomposers break down dead organisms, release ammonia. Denitrification: denitrifying bacteria (Pseudomonas) convert nitrates back to N₂, returning it to atmosphere.",
              keyPoints: [
                "N₂ fixation: N₂ → NH₃ (by bacteria, lightning)",
                "Nitrification: NH₃ → NO₂⁻ → NO₃⁻ (by bacteria)",
                "Plants absorb NO₃⁻ from soil",
                "Ammonification: proteins → NH₃ (by decomposers)",
                "Denitrification: NO₃⁻ → N₂ (back to air)",
                "Legumes have Rhizobium (nitrogen fixation)"
              ]
            },
            {
              title: "Water Cycle",
              content: "Water moves between Earth's surface and atmosphere. Evaporation: liquid water → water vapor (from oceans, lakes, rivers, soil). Transpiration: water vapor released by plant leaves. Together called evapotranspiration. Condensation: water vapor cools, forms clouds. Precipitation: water returns as rain, snow, sleet, hail. Surface runoff: water flows into streams, rivers, back to ocean. Infiltration/percolation: water soaks into soil, recharges groundwater. Plants absorb water from soil through roots, transport to leaves, release via transpiration. Cycle driven by solar energy.",
              keyPoints: [
                "Evaporation: liquid → vapor (from surface)",
                "Transpiration: water vapor from plants",
                "Condensation: vapor → liquid (clouds)",
                "Precipitation: rain, snow, hail",
                "Runoff: flows to rivers, oceans",
                "Driven by sun's energy"
              ]
            }
          ],
          objectives: [
            "Describe carbon, nitrogen, and water cycles",
            "Explain roles of microorganisms in nutrient cycling",
            "Discuss human impacts on cycles",
            "Understand importance of decomposers"
          ]
        },
        {
          title: "Population and Conservation",
          subtopics: [
            {
              title: "Population Dynamics",
              content: "Population size changes over time. Birth rate (natality): new individuals added. Death rate (mortality): individuals die. Immigration: individuals enter population. Emigration: individuals leave. Growth rate = (birth + immigration) - (death + emigration). Exponential growth (J-curve): unlimited resources, population grows rapidly (bacteria, invasive species initially). Logistic growth (S-curve): limited resources, population levels off at carrying capacity (K). Carrying capacity: maximum population environment can support. Limiting factors: food, water, space, disease, predation. Population density: number of individuals per unit area.",
              keyPoints: [
                "Birth and immigration increase population",
                "Death and emigration decrease population",
                "Exponential growth: J-curve (unlimited resources)",
                "Logistic growth: S-curve (reaches carrying capacity)",
                "Carrying capacity: max sustainable population",
                "Limiting factors control population size"
              ]
            },
            {
              title: "Conservation",
              content: "Conservation: protection and preservation of biodiversity and natural resources. Importance: maintain ecosystem services, genetic diversity, medicinal resources, food security, aesthetic value. Threats: habitat destruction (deforestation, urbanization), overexploitation (overfishing, hunting), pollution, climate change, invasive species. In-situ conservation: protecting in natural habitat (national parks, game reserves, marine protected areas). Ex-situ conservation: protecting outside habitat (zoos, botanical gardens, seed banks, gene banks). Sustainable use: meeting present needs without compromising future generations. Endangered species: at risk of extinction. IUCN Red List categorizes threat levels.",
              keyPoints: [
                "Conservation: protecting biodiversity and resources",
                "Threats: habitat loss, overexploitation, pollution, climate change",
                "In-situ: protect in natural habitat (parks, reserves)",
                "Ex-situ: protect outside habitat (zoos, seed banks)",
                "Endangered: at risk of extinction",
                "Sustainable use: balance present and future needs"
              ]
            }
          ],
          objectives: [
            "Explain factors affecting population size",
            "Distinguish between exponential and logistic growth",
            "Discuss importance of conservation",
            "Compare in-situ and ex-situ conservation"
          ]
        }
      ]
    }
  },
  {
    id: "bio-note-004",
    subjectId: "biology",
    title: "Human Biology and Physiology",
    order: 4,
    content: {
      overview: "Human biology examines the structure and function of the human body. Understanding how organ systems work together to maintain life is essential for health, medicine, and appreciating the complexity of the human organism.",
      topics: [
        {
          title: "Nutrition and Digestion",
          subtopics: [
            {
              title: "Nutrients",
              content: "Six major nutrient classes: Carbohydrates (energy source, 4 kcal/g): sugars (glucose, fructose), starch, cellulose. Sources: bread, rice, pasta. Proteins (growth and repair, 4 kcal/g): made of amino acids. Sources: meat, fish, eggs, beans. Lipids/Fats (energy storage, insulation, 9 kcal/g): saturated and unsaturated. Sources: butter, oil, nuts. Vitamins (regulate metabolism): A (vision), C (immune), D (bones). Minerals (various functions): calcium (bones), iron (hemoglobin), iodine (thyroid). Water (60% body weight): solvent, temperature regulation, transport. Fiber (roughage): aids digestion, prevents constipation.",
              keyPoints: [
                "Carbohydrates: main energy source",
                "Proteins: growth and repair",
                "Lipids: concentrated energy, insulation",
                "Vitamins: small amounts, vital functions",
                "Minerals: calcium, iron, iodine, etc.",
                "Water: essential for all body functions",
                "Balanced diet includes all nutrients"
              ]
            },
            {
              title: "Human Digestive System",
              content: "Mouth: mechanical digestion (chewing), chemical digestion (salivary amylase breaks down starch). Esophagus: peristalsis moves food to stomach. Stomach: churning (mechanical), gastric juice (HCl + pepsin digest proteins), acidic pH 2. Small intestine (duodenum, jejunum, ileum): most digestion and absorption. Enzymes: pancreatic amylase (starch), lipase (fats), trypsin (proteins). Bile from liver emulsifies fats. Villi increase surface area for absorption. Large intestine (colon): water absorption, formation of feces. Rectum: stores feces. Anus: egestion (elimination). Liver: produces bile, stores glycogen, detoxifies. Pancreas: produces enzymes and insulin.",
              keyPoints: [
                "Mouth: chewing, salivary amylase starts starch digestion",
                "Stomach: HCl + pepsin digest proteins",
                "Small intestine: main site of digestion and absorption",
                "Liver: produces bile (emulsifies fats)",
                "Pancreas: produces digestive enzymes",
                "Large intestine: water absorption",
                "Villi: increase absorption surface area"
              ]
            }
          ],
          objectives: [
            "Identify main nutrients and their functions",
            "Describe human digestive system structure",
            "Explain digestion processes in each organ",
            "Understand enzyme action in digestion"
          ]
        },
        {
          title: "Circulatory System",
          subtopics: [
            {
              title: "Blood and Blood Vessels",
              content: "Blood components: Plasma (55%): liquid, carries dissolved substances (nutrients, hormones, CO₂, urea, heat). Red blood cells (erythrocytes): contain hemoglobin, transport O₂, no nucleus, biconcave shape. Made in bone marrow. White blood cells (leukocytes): defend against disease, have nucleus. Phagocytes engulf pathogens; lymphocytes produce antibodies. Platelets: cell fragments, blood clotting. Blood vessels: Arteries carry blood away from heart, thick walls, high pressure, no valves (except aorta/pulmonary). Veins carry blood to heart, thin walls, low pressure, valves prevent backflow. Capillaries: thin walls (one cell thick), exchange of materials with tissues.",
              keyPoints: [
                "Plasma: liquid part, transports substances",
                "Red blood cells: carry O₂ via hemoglobin",
                "White blood cells: fight disease",
                "Platelets: blood clotting",
                "Arteries: thick walls, high pressure, away from heart",
                "Veins: thin walls, valves, to heart",
                "Capillaries: thin walls, exchange site"
              ]
            },
            {
              title: "Heart and Circulation",
              content: "Heart: muscular pump with four chambers. Right atrium receives deoxygenated blood from body (vena cava). Right ventricle pumps to lungs (pulmonary artery). Left atrium receives oxygenated blood from lungs (pulmonary vein). Left ventricle pumps to body (aorta). Valves prevent backflow: atrioventricular (tricuspid, bicuspid/mitral), semilunar. Double circulation: Pulmonary: heart → lungs → heart (oxygenation). Systemic: heart → body → heart (deliver O₂, collect CO₂). Cardiac cycle: atria contract (atrial systole), ventricles relax → ventricles contract (ventricular systole), atria relax. Heart rate controlled by pacemaker (sinoatrial node).",
              keyPoints: [
                "Four chambers: 2 atria (receive), 2 ventricles (pump)",
                "Right side: deoxygenated blood to lungs",
                "Left side: oxygenated blood to body",
                "Valves prevent backflow",
                "Pulmonary circulation: heart-lungs-heart",
                "Systemic circulation: heart-body-heart",
                "Pacemaker controls heart rate"
              ]
            }
          ],
          objectives: [
            "Describe components and functions of blood",
            "Explain structure and function of heart",
            "Trace pathway of blood through heart and body",
            "Distinguish between arteries, veins, and capillaries"
          ]
        },
        {
          title: "Respiratory System",
          subtopics: [
            {
              title: "Gas Exchange",
              content: "Breathing pathway: Air enters through nose/mouth → trachea (windpipe, supported by C-shaped cartilage) → bronchi → bronchioles → alveoli (air sacs). Alveoli: site of gas exchange, thin walls (one cell thick), surrounded by capillaries, large surface area, moist. Gas exchange: O₂ diffuses from alveoli into blood (high to low concentration). CO₂ diffuses from blood into alveoli. Breathing mechanism: Inhalation: diaphragm contracts (moves down), intercostal muscles contract (ribs up and out), volume increases, pressure decreases, air enters. Exhalation: diaphragm relaxes (up), intercostal muscles relax (ribs down and in), volume decreases, pressure increases, air forced out.",
              keyPoints: [
                "Pathway: nose → trachea → bronchi → bronchioles → alveoli",
                "Alveoli: gas exchange site, thin walls, large surface area",
                "O₂ enters blood, CO₂ leaves blood (diffusion)",
                "Inhalation: diaphragm contracts, ribs up, volume up",
                "Exhalation: diaphragm relaxes, ribs down, volume down",
                "Cartilage keeps airways open"
              ]
            }
          ],
          objectives: [
            "Describe structure of respiratory system",
            "Explain gas exchange in alveoli",
            "Explain mechanism of breathing",
            "Relate structure of alveoli to function"
          ]
        },
        {
          title: "Excretory System",
          subtopics: [
            {
              title: "Kidneys and Excretion",
              content: "Excretion: removal of metabolic waste. Kidneys filter blood, remove urea (from protein breakdown), excess water and salts. Structure: cortex (outer), medulla (inner), pelvis (collects urine). Nephron: functional unit. Process: Ultrafiltration: high pressure in glomerulus forces small molecules into Bowman's capsule. Selective reabsorption: useful substances (glucose, amino acids, some water and salts) reabsorbed into blood in tubules. Remaining fluid (urine) contains urea, excess water and salts. Ureter carries urine to bladder. Bladder stores urine. Urethra releases urine. Osmoregulation: kidneys regulate water balance. ADH hormone increases water reabsorption when dehydrated.",
              keyPoints: [
                "Excretion: removing metabolic waste",
                "Kidneys: filter blood, remove urea",
                "Nephron: functional unit",
                "Ultrafiltration: small molecules forced out",
                "Selective reabsorption: useful substances back to blood",
                "Urine: urea, excess water and salts",
                "ADH regulates water balance"
              ]
            }
          ],
          objectives: [
            "Describe structure and function of kidneys",
            "Explain urine formation process",
            "Understand osmoregulation",
            "Distinguish between excretion and egestion"
          ]
        },
        {
          title: "Nervous System",
          subtopics: [
            {
              title: "Neurons and Nerve Impulses",
              content: "Nervous system: rapid communication and coordination. Central Nervous System (CNS): brain and spinal cord. Peripheral Nervous System (PNS): nerves throughout body. Neuron (nerve cell): specialized for transmitting signals. Structure: dendrites (receive signals), cell body (nucleus), axon (transmits signals), myelin sheath (insulation, speeds up transmission), axon terminals (pass signal to next cell). Synapse: gap between neurons. Nerve impulse (action potential): electrical signal along neuron. At synapse, neurotransmitters (chemicals) diffuse across gap to next neuron. Reflex arc: stimulus → receptor → sensory neuron → relay neuron (spinal cord) → motor neuron → effector (muscle/gland) → response. Reflex: automatic, rapid, protective (e.g., withdrawing hand from hot object).",
              keyPoints: [
                "CNS: brain and spinal cord",
                "PNS: nerves to/from CNS",
                "Neuron: dendrites, cell body, axon, terminals",
                "Synapse: gap between neurons, uses neurotransmitters",
                "Reflex arc: rapid automatic response",
                "Myelin sheath speeds up impulse"
              ]
            }
          ],
          objectives: [
            "Describe structure of neuron",
            "Explain nerve impulse transmission",
            "Describe reflex arc pathway",
            "Distinguish between CNS and PNS"
          ]
        }
      ]
    }
  }
];
