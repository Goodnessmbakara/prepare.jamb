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

export const chemistryNotes: StudyNote[] = [
  {
    id: "chem-note-001",
    subjectId: "chemistry",
    title: "Atomic Structure and Bonding",
    order: 1,
    content: {
      overview: "Understanding atomic structure is fundamental to chemistry. Atoms are the building blocks of matter, and how they bond determines the properties of substances. This section covers the structure of atoms, the periodic table, and the different types of chemical bonds.",
      topics: [
        {
          title: "Atomic Structure",
          subtopics: [
            {
              title: "Subatomic Particles",
              content: "Atoms consist of three fundamental particles: protons, neutrons, and electrons. Protons carry a positive charge (+1) and have a relative mass of 1 atomic mass unit (amu). They are located in the nucleus. Neutrons have no charge (neutral) and also have a mass of 1 amu, located in the nucleus alongside protons. Electrons carry a negative charge (-1) and have negligible mass (approximately 1/1840 amu). They orbit the nucleus in energy levels or shells. The number of protons defines the element (atomic number), while the total of protons and neutrons gives the mass number.",
              keyPoints: [
                "Protons: +1 charge, mass = 1 amu, in nucleus",
                "Neutrons: 0 charge, mass = 1 amu, in nucleus",
                "Electrons: -1 charge, mass ≈ 0, orbit nucleus",
                "Atomic number (Z) = number of protons",
                "Mass number (A) = protons + neutrons",
                "Neutral atom: protons = electrons"
              ]
            },
            {
              title: "Isotopes and Ions",
              content: "Isotopes are atoms of the same element with different numbers of neutrons, thus different mass numbers but the same atomic number. For example, Carbon-12 (6 protons, 6 neutrons) and Carbon-14 (6 protons, 8 neutrons) are isotopes. Isotopes have identical chemical properties but different physical properties. Ions are charged particles formed when atoms gain or lose electrons. Cations are positive ions (lose electrons), common in metals: Na → Na⁺ + e⁻. Anions are negative ions (gain electrons), common in non-metals: Cl + e⁻ → Cl⁻.",
              keyPoints: [
                "Isotopes: same Z, different A (different neutrons)",
                "Isotopes have same chemical but different physical properties",
                "Examples: ¹H, ²H (deuterium), ³H (tritium)",
                "Cations: positive ions (lose electrons)",
                "Anions: negative ions (gain electrons)",
                "Ion charge = protons - electrons"
              ]
            },
            {
              title: "Electronic Configuration",
              content: "Electrons occupy shells (energy levels) around the nucleus. Shell capacity: 1st = 2, 2nd = 8, 3rd = 18, 4th = 32 (formula: 2n²). Electrons fill shells from innermost to outermost. The outermost shell electrons are valence electrons, which determine chemical properties. Noble gases have full outer shells (stable, unreactive). Atoms of other elements tend to gain, lose, or share electrons to achieve noble gas configuration. Electronic configuration shows electron distribution: Na (11) = 2, 8, 1; Cl (17) = 2, 8, 7.",
              keyPoints: [
                "Shell capacity: 2n² (n = shell number)",
                "Shells fill from inside out: K, L, M, N",
                "Shell 1 = 2, Shell 2 = 8, Shell 3 = 18",
                "Valence electrons: outermost shell electrons",
                "Noble gases: full outer shell (stable)",
                "Chemical reactivity depends on valence electrons"
              ]
            }
          ],
          objectives: [
            "Describe the structure of atoms in terms of protons, neutrons, and electrons",
            "Define atomic number, mass number, and isotopes",
            "Write electronic configurations for elements",
            "Distinguish between atoms, ions, cations, and anions"
          ]
        },
        {
          title: "The Periodic Table",
          subtopics: [
            {
              title: "Organization of the Periodic Table",
              content: "The periodic table arranges elements by increasing atomic number. Horizontal rows are periods (1-7), indicating the number of electron shells. Vertical columns are groups (1-18), elements in the same group have the same number of valence electrons and similar chemical properties. Key groups: Group 1 (Alkali metals), Group 2 (Alkaline earth metals), Group 17 (Halogens), Group 18 (Noble gases). Elements are classified as metals (left and center), non-metals (right), and metalloids (along the diagonal border).",
              keyPoints: [
                "Arranged by increasing atomic number",
                "Period = horizontal row (number of shells)",
                "Group = vertical column (same valence electrons)",
                "Group 1: Alkali metals (1 valence electron)",
                "Group 17: Halogens (7 valence electrons)",
                "Group 18: Noble gases (8 valence electrons, stable)"
              ]
            },
            {
              title: "Periodic Trends",
              content: "Across a period (left to right): atomic radius decreases (more protons pull electrons closer), ionization energy increases (harder to remove electrons), electronegativity increases (stronger attraction for electrons), metallic character decreases. Down a group: atomic radius increases (more shells), ionization energy decreases (outer electrons farther from nucleus, easier to remove), electronegativity decreases, metallic character increases (metals more reactive, non-metals less reactive).",
              keyPoints: [
                "Across period: radius ↓, ionization energy ↑, electronegativity ↑",
                "Down group: radius ↑, ionization energy ↓, electronegativity ↓",
                "Atomic radius: smallest at top right (F), largest at bottom left (Cs)",
                "Ionization energy: highest at top right (He), lowest at bottom left",
                "Electronegativity: highest F (4.0), lowest Cs",
                "Reactivity: Group 1 increases down; Group 17 decreases down"
              ]
            }
          ],
          objectives: [
            "Describe the organization of the periodic table",
            "Explain periodic trends in atomic radius, ionization energy, and electronegativity",
            "Predict properties of elements based on their position",
            "Identify metals, non-metals, and metalloids"
          ]
        },
        {
          title: "Chemical Bonding",
          subtopics: [
            {
              title: "Ionic Bonding",
              content: "Ionic bonding involves the transfer of electrons from a metal to a non-metal, forming oppositely charged ions that attract electrostatically. Metals lose electrons to form cations; non-metals gain electrons to form anions. Example: Na (2,8,1) loses 1 electron → Na⁺ (2,8); Cl (2,8,7) gains 1 electron → Cl⁻ (2,8,8). The resulting compound NaCl is held together by strong electrostatic forces. Properties: high melting/boiling points, hard and brittle, conduct electricity when molten or dissolved (ions mobile), soluble in water.",
              keyPoints: [
                "Transfer of electrons: metal → non-metal",
                "Forms cations (+) and anions (-)",
                "Electrostatic attraction between ions",
                "High melting/boiling points",
                "Conducts electricity when molten/dissolved",
                "Usually soluble in water, insoluble in organic solvents"
              ]
            },
            {
              title: "Covalent Bonding",
              content: "Covalent bonding involves sharing of electron pairs between non-metal atoms. Each shared pair is one bond. Single bond: 1 shared pair (H-H, Cl-Cl). Double bond: 2 shared pairs (O=O, CO₂). Triple bond: 3 shared pairs (N≡N). Simple molecular covalent compounds (e.g., H₂O, CO₂) have weak intermolecular forces, leading to low melting/boiling points, do not conduct electricity. Giant covalent structures (e.g., diamond, graphite, SiO₂) have all atoms bonded covalently, very high melting points, hard (except graphite).",
              keyPoints: [
                "Sharing of electron pairs between non-metals",
                "Single, double, or triple bonds",
                "Simple molecular: low mp/bp, don't conduct",
                "Giant covalent: very high mp/bp, hard",
                "Examples: H₂O, CH₄ (molecular); diamond, SiO₂ (giant)",
                "Covalent compounds generally don't conduct electricity"
              ]
            },
            {
              title: "Metallic Bonding",
              content: "Metallic bonding occurs in metals, where valence electrons are delocalized, forming a 'sea of electrons' surrounding positive metal ions. These mobile electrons hold the structure together. Properties: good conductors of heat and electricity (mobile electrons), malleable (can be hammered into sheets), ductile (can be drawn into wires), lustrous (shiny), generally high melting/boiling points (except Group 1 metals), density varies. The strength of metallic bonding increases with more delocalized electrons and smaller ionic radius.",
              keyPoints: [
                "Delocalized 'sea of electrons' around metal cations",
                "Mobile electrons allow electrical conductivity",
                "Malleable and ductile (layers can slide)",
                "Lustrous appearance",
                "Good conductors of heat and electricity",
                "Generally high density and melting points"
              ]
            },
            {
              title: "Intermolecular Forces",
              content: "Intermolecular forces are weak attractions between molecules (not within molecules like covalent bonds). Van der Waals forces: weak forces between all molecules, strongest in larger molecules. Dipole-dipole forces: between polar molecules (molecules with permanent dipoles). Hydrogen bonding: special strong dipole interaction when H is bonded to N, O, or F. Hydrogen bonds are the strongest intermolecular force. They explain water's high boiling point, ice's lower density, and DNA's structure. Stronger intermolecular forces → higher bp/mp.",
              keyPoints: [
                "Van der Waals: weakest, all molecules",
                "Dipole-dipole: between polar molecules",
                "Hydrogen bonding: H-O, H-N, H-F (strongest IMF)",
                "Not as strong as actual bonds (ionic/covalent)",
                "Explain boiling points and physical states",
                "Water properties due to H-bonding"
              ]
            }
          ],
          objectives: [
            "Describe ionic, covalent, and metallic bonding",
            "Relate bond type to physical properties",
            "Draw dot-and-cross diagrams for simple molecules",
            "Explain intermolecular forces and their effects"
          ]
        }
      ]
    }
  },
  {
    id: "chem-note-002",
    subjectId: "chemistry",
    title: "Chemical Reactions and Stoichiometry",
    order: 2,
    content: {
      overview: "Chemical reactions involve the rearrangement of atoms to form new substances. Understanding reaction types, balancing equations, and calculating quantities is essential for predicting and controlling chemical processes.",
      topics: [
        {
          title: "Types of Chemical Reactions",
          subtopics: [
            {
              title: "Synthesis and Decomposition",
              content: "Synthesis (Combination): Two or more substances combine to form a single product. General form: A + B → AB. Examples: 2H₂ + O₂ → 2H₂O, N₂ + 3H₂ → 2NH₃. Decomposition: A single compound breaks down into two or more simpler substances, often requiring heat, light, or electricity. General form: AB → A + B. Examples: 2H₂O → 2H₂ + O₂ (electrolysis), CaCO₃ → CaO + CO₂ (thermal decomposition).",
              keyPoints: [
                "Synthesis: A + B → AB (combining)",
                "Decomposition: AB → A + B (breaking down)",
                "Synthesis releases energy (often exothermic)",
                "Decomposition requires energy input",
                "Examples: metal + oxygen → metal oxide (synthesis)",
                "Carbonate decomposition: heat → oxide + CO₂"
              ]
            },
            {
              title: "Displacement and Redox",
              content: "Single displacement: More reactive element displaces less reactive from a compound. A + BC → AC + B. Example: Zn + CuSO₄ → ZnSO₄ + Cu (Zn displaces Cu). Reactivity series determines displacement: K > Na > Ca > Mg > Al > Zn > Fe > Pb > H > Cu > Ag > Au. Redox reactions involve transfer of electrons. Oxidation: loss of electrons (increase in oxidation state). Reduction: gain of electrons (decrease in oxidation state). OIL RIG: Oxidation Is Loss, Reduction Is Gain.",
              keyPoints: [
                "Displacement: more reactive displaces less reactive",
                "Reactivity series: K most reactive, Au least",
                "Metals above H displace H from acids",
                "Redox: electron transfer occurs",
                "Oxidation: loss of electrons (OIL)",
                "Reduction: gain of electrons (RIG)"
              ]
            },
            {
              title: "Neutralization and Precipitation",
              content: "Neutralization: Acid reacts with base to form salt and water. Acid + Base → Salt + Water. Example: HCl + NaOH → NaCl + H₂O. pH changes from acidic/basic toward neutral (pH 7). Exothermic reaction. Precipitation: Two solutions react to form an insoluble solid (precipitate). Example: AgNO₃ + NaCl → AgCl(s) + NaNO₃. Silver chloride precipitates as white solid. Used in qualitative analysis to identify ions.",
              keyPoints: [
                "Neutralization: acid + base → salt + water",
                "Always exothermic (releases heat)",
                "pH moves toward 7",
                "Precipitation: forms insoluble solid",
                "Test for ions: specific precipitate colors",
                "AgCl white, PbI₂ yellow, Fe(OH)₃ brown"
              ]
            }
          ],
          objectives: [
            "Classify reactions by type",
            "Predict products of chemical reactions",
            "Use reactivity series to predict displacement",
            "Identify oxidation and reduction in reactions"
          ]
        },
        {
          title: "Balancing Chemical Equations",
          subtopics: [
            {
              title: "Conservation of Mass",
              content: "Law of conservation of mass: Matter cannot be created or destroyed in a chemical reaction. Total mass of reactants = total mass of products. Number of atoms of each element must be equal on both sides of equation. Balancing involves adjusting coefficients (numbers before formulas), never subscripts (numbers in formulas). Steps: 1) Write unbalanced equation, 2) Count atoms of each element, 3) Adjust coefficients to balance, 4) Check all elements. Start with most complex molecule.",
              keyPoints: [
                "Mass is conserved in reactions",
                "Atoms rearrange but aren't created/destroyed",
                "Balance by adjusting coefficients only",
                "Never change subscripts (changes substance)",
                "Same number of each atom on both sides",
                "Balance complex molecules first, then elements"
              ]
            }
          ],
          objectives: [
            "Balance chemical equations correctly",
            "Apply law of conservation of mass",
            "Predict states of products in reactions",
            "Write balanced symbol equations from word equations"
          ]
        },
        {
          title: "The Mole Concept",
          subtopics: [
            {
              title: "Moles and Avogadro's Number",
              content: "The mole is the SI unit for amount of substance. One mole contains 6.02 × 10²³ particles (Avogadro's number). This applies to atoms, molecules, ions, or any specified particles. Molar mass is the mass of one mole of a substance (g/mol), numerically equal to relative atomic/molecular mass. Number of moles n = mass(g)/molar mass(g/mol). Example: 18g of water (H₂O, molar mass 18) = 1 mole = 6.02 × 10²³ molecules.",
              keyPoints: [
                "1 mole = 6.02 × 10²³ particles (Avogadro's number)",
                "Molar mass: mass of 1 mole (g/mol)",
                "n = m/M (moles = mass/molar mass)",
                "Used to count atoms/molecules",
                "Molar mass of element = Ar (relative atomic mass)",
                "Molar mass of compound = sum of Ar values"
              ]
            },
            {
              title: "Stoichiometry Calculations",
              content: "Stoichiometry uses balanced equations to calculate quantities in reactions. Molar ratio from coefficients in balanced equation. Steps: 1) Write balanced equation, 2) Convert given to moles, 3) Use molar ratio to find moles of required substance, 4) Convert moles to required units. Example: 2H₂ + O₂ → 2H₂O. 2 moles H₂ reacts with 1 mole O₂ to produce 2 moles H₂O. Limiting reactant: reactant completely consumed, limits product amount. Excess reactant: remains after reaction.",
              keyPoints: [
                "Stoichiometry: quantitative relationship in reactions",
                "Use coefficients for molar ratios",
                "Limiting reactant determines product amount",
                "Excess reactant is left over",
                "Steps: mass → moles → ratio → moles → mass",
                "Always balance equation first"
              ]
            },
            {
              title: "Solution Concentration",
              content: "Concentration measures amount of solute in given volume of solution. Molarity (M) = moles of solute/liters of solution = n/V. Unit: mol/L or M. Example: 0.5 moles NaCl in 2 L solution = 0.25 M. Dilution: M₁V₁ = M₂V₂ (moles of solute constant). Adding water decreases concentration but moles of solute unchanged. To prepare solution: calculate required moles, weigh mass = n × M, dissolve in solvent to desired volume.",
              keyPoints: [
                "Molarity M = n/V (mol/L)",
                "Concentration = amount of solute per volume",
                "Dilution: M₁V₁ = M₂V₂",
                "Standard solution: known precise concentration",
                "n = M × V (moles = molarity × volume in L)",
                "Diluting decreases concentration, not moles"
              ]
            }
          ],
          objectives: [
            "Calculate moles from mass and vice versa",
            "Use stoichiometry to solve quantitative problems",
            "Identify limiting and excess reactants",
            "Calculate solution concentrations and perform dilutions"
          ]
        }
      ]
    }
  },
  {
    id: "chem-note-003",
    subjectId: "chemistry",
    title: "Acids, Bases, and Salts",
    order: 3,
    content: {
      overview: "Acids and bases are important classes of compounds with distinctive properties. Their reactions are fundamental to many chemical and biological processes. Understanding pH, neutralization, and salt formation is crucial for chemistry.",
      topics: [
        {
          title: "Properties of Acids and Bases",
          subtopics: [
            {
              title: "Acids",
              content: "Acids are substances that donate protons (H⁺) in aqueous solution (Brønsted-Lowry definition) or accept electron pairs (Lewis definition). Properties: sour taste, turn blue litmus red, pH < 7, react with metals to produce H₂, react with carbonates to produce CO₂. Strong acids completely ionize: HCl, H₂SO₄, HNO₃. Weak acids partially ionize: CH₃COOH (ethanoic), H₂CO₃. Common acids: hydrochloric HCl, sulfuric H₂SO₄, nitric HNO₃, ethanoic CH₃COOH.",
              keyPoints: [
                "Acids donate H⁺ ions (protons)",
                "Turn blue litmus red, pH < 7",
                "Sour taste (don't taste in lab!)",
                "React with metals: acid + metal → salt + H₂",
                "React with carbonates: acid + carbonate → salt + H₂O + CO₂",
                "Strong acids: HCl, H₂SO₄, HNO₃ (fully ionize)"
              ]
            },
            {
              title: "Bases and Alkalis",
              content: "Bases are substances that accept protons or donate electron pairs. Alkalis are soluble bases that form OH⁻ ions in water. Properties of alkalis: bitter taste, soapy feel, turn red litmus blue, pH > 7. Strong bases completely ionize: NaOH, KOH, Ba(OH)₂. Weak bases partially ionize: NH₃. Common bases: sodium hydroxide NaOH, potassium hydroxide KOH, calcium hydroxide Ca(OH)₂, ammonia NH₃. Metal oxides and hydroxides are bases; soluble ones are alkalis.",
              keyPoints: [
                "Bases accept H⁺ ions",
                "Alkalis: soluble bases producing OH⁻",
                "Turn red litmus blue, pH > 7",
                "Bitter taste, slippery feel",
                "Strong bases: NaOH, KOH (fully ionize)",
                "Ammonia NH₃ is weak base (partially ionizes)"
              ]
            }
          ],
          objectives: [
            "Define acids and bases using different theories",
            "Compare properties of acids and bases",
            "Distinguish between strong and weak acids/bases",
            "Identify common acids and bases"
          ]
        },
        {
          title: "pH Scale and Indicators",
          subtopics: [
            {
              title: "pH Scale",
              content: "pH measures hydrogen ion concentration: pH = -log[H⁺]. Scale from 0 to 14. pH < 7: acidic (more H⁺ than OH⁻). pH = 7: neutral (equal H⁺ and OH⁻), pure water. pH > 7: alkaline/basic (more OH⁻ than H⁺). Each pH unit represents 10× change in [H⁺]. pH 2 is 10× more acidic than pH 3. pOH = -log[OH⁻], pH + pOH = 14 at 25°C. Lower pH = stronger acid; higher pH = stronger base.",
              keyPoints: [
                "pH = -log[H⁺], range 0-14",
                "pH < 7: acidic; pH = 7: neutral; pH > 7: basic",
                "Each unit is 10× change in [H⁺]",
                "Strong acid: pH 0-2; weak acid: pH 3-6",
                "Strong base: pH 12-14; weak base: pH 8-11",
                "pH + pOH = 14"
              ]
            },
            {
              title: "Acid-Base Indicators",
              content: "Indicators are weak acids/bases that change color at specific pH ranges. Litmus: red in acid (pH < 7), blue in base (pH > 7). Methyl orange: red in acid (pH < 3.1), yellow in base (pH > 4.4). Phenolphthalein: colorless in acid (pH < 8.2), pink in base (pH > 10). Universal indicator: shows range of colors from red (pH 0) through green (pH 7) to purple (pH 14). Used in titrations to detect endpoint (neutralization complete). Choice depends on acid/base strength combination.",
              keyPoints: [
                "Indicators change color at specific pH",
                "Litmus: red (acid), blue (base)",
                "Methyl orange: red < 3.1, yellow > 4.4",
                "Phenolphthalein: colorless < 8.2, pink > 10",
                "Universal indicator: full pH range colors",
                "Endpoint: point where indicator changes color"
              ]
            }
          ],
          objectives: [
            "Explain the pH scale and calculate pH",
            "Use indicators to determine acid/base nature",
            "Select appropriate indicators for titrations",
            "Relate pH to hydrogen ion concentration"
          ]
        },
        {
          title: "Salts and Neutralization",
          subtopics: [
            {
              title: "Salt Formation",
              content: "Salts are ionic compounds formed when H⁺ of acid is replaced by metal cation or ammonium ion. Methods of preparation: 1) Acid + Metal → Salt + H₂ (only for metals above H in reactivity series), 2) Acid + Base/Alkali → Salt + H₂O (neutralization), 3) Acid + Metal carbonate → Salt + H₂O + CO₂. Salt name: metal/ammonium + acid residue (chloride from HCl, sulfate from H₂SO₄, nitrate from HNO₃). Examples: HCl + NaOH → NaCl + H₂O; H₂SO₄ + CuO → CuSO₄ + H₂O.",
              keyPoints: [
                "Salt = metal cation + acid anion",
                "Neutralization: acid + base → salt + water",
                "HCl gives chlorides, H₂SO₄ gives sulfates, HNO₃ gives nitrates",
                "Metal + acid → salt + hydrogen",
                "Carbonate + acid → salt + water + CO₂",
                "Always exothermic reactions"
              ]
            },
            {
              title: "Types of Salts",
              content: "Normal salts: all H⁺ replaced (NaCl, Na₂SO₄). Acid salts: some H⁺ remain (NaHSO₄, NaHCO₃). Basic salts: contain OH⁻ or O²⁻ groups. Solubility rules: all nitrates, sodium, potassium, and ammonium salts soluble. Most chlorides soluble except AgCl, PbCl₂. Most sulfates soluble except BaSO₄, PbSO₄. Most carbonates insoluble except sodium, potassium, ammonium. Precipitation reactions form insoluble salts.",
              keyPoints: [
                "Normal salt: all H⁺ replaced",
                "Acid salt: some H⁺ remain (e.g., NaHCO₃)",
                "All nitrates soluble",
                "All Na⁺, K⁺, NH₄⁺ salts soluble",
                "Most carbonates insoluble",
                "Use solubility rules to predict precipitates"
              ]
            }
          ],
          objectives: [
            "Describe methods of preparing salts",
            "Write equations for salt formation",
            "Apply solubility rules to predict precipitates",
            "Distinguish between types of salts"
          ]
        }
      ]
    }
  },
  {
    id: "chem-note-004",
    subjectId: "chemistry",
    title: "Organic Chemistry",
    order: 4,
    content: {
      overview: "Organic chemistry is the study of carbon-containing compounds. Carbon's unique ability to form four bonds and chain with itself leads to millions of organic compounds, which form the basis of life and many industrial materials.",
      topics: [
        {
          title: "Hydrocarbons",
          subtopics: [
            {
              title: "Alkanes",
              content: "Alkanes are saturated hydrocarbons with single C-C bonds. General formula: CₙH₂ₙ₊₂. Homologous series: methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀, pentane C₅H₁₂. Properties: non-polar, insoluble in water, low reactivity (saturated), boiling point increases with chain length. Combustion: complete gives CO₂ + H₂O, incomplete gives CO + H₂O or C + H₂O (less oxygen). Substitution reaction with halogens (UV light): CH₄ + Cl₂ → CH₃Cl + HCl.",
              keyPoints: [
                "Saturated hydrocarbons: C-C single bonds only",
                "General formula: CₙH₂ₙ₊₂",
                "Unreactive (no double bonds)",
                "Undergo substitution reactions",
                "Complete combustion: CₙH₂ₙ₊₂ + O₂ → CO₂ + H₂O",
                "Used as fuels"
              ]
            },
            {
              title: "Alkenes",
              content: "Alkenes are unsaturated hydrocarbons with at least one C=C double bond. General formula: CₙH₂ₙ. Ethene C₂H₄, propene C₃H₆, butene C₄H₈. More reactive than alkanes due to double bond. Test: decolorize bromine water (brown → colorless). Addition reactions: alkene + H₂ → alkane (hydrogenation), alkene + Br₂ → dibromoalkane, alkene + H₂O → alcohol (hydration), alkene + HCl → haloalkane. Polymerization: many alkene molecules join to form polymer (e.g., ethene → polyethene).",
              keyPoints: [
                "Unsaturated: contain C=C double bond",
                "General formula: CₙH₂ₙ",
                "More reactive than alkanes",
                "Test: decolorize bromine water",
                "Undergo addition reactions across double bond",
                "Polymerization: many monomers → polymer"
              ]
            },
            {
              title: "Alkynes",
              content: "Alkynes contain at least one C≡C triple bond. General formula: CₙH₂ₙ₋₂. Simplest is ethyne (acetylene) C₂H₂. Even more reactive than alkenes due to triple bond. Also undergo addition reactions. Ethyne used in welding (oxyacetylene torch) - burns with very hot flame. Less common in JAMB than alkanes and alkenes.",
              keyPoints: [
                "Contain C≡C triple bond",
                "General formula: CₙH₂ₙ₋₂",
                "Ethyne (acetylene): C₂H₂",
                "Very reactive",
                "Addition reactions similar to alkenes",
                "Ethyne used in welding"
              ]
            }
          ],
          objectives: [
            "Describe properties of alkanes, alkenes, and alkynes",
            "Write general formulas for hydrocarbon families",
            "Predict products of hydrocarbon reactions",
            "Distinguish between saturated and unsaturated hydrocarbons"
          ]
        },
        {
          title: "Functional Groups",
          subtopics: [
            {
              title: "Alcohols",
              content: "Alcohols contain -OH (hydroxyl) functional group. General formula: CₙH₂ₙ₊₁OH or ROH. Methanol CH₃OH (toxic), ethanol C₂H₅OH (drinking alcohol), propanol C₃H₇OH. Primary alcohol: -OH on carbon bonded to one other carbon. Secondary: two other carbons. Tertiary: three other carbons. Properties: polar, form H-bonds, soluble in water (short chains), higher bp than alkanes. Uses: solvents, fuels, beverages. Fermentation: glucose → ethanol + CO₂ (by yeast). Oxidation: primary alcohol → aldehyde → carboxylic acid.",
              keyPoints: [
                "Functional group: -OH (hydroxyl)",
                "General formula: CₙH₂ₙ₊₁OH",
                "Methanol toxic, ethanol in drinks",
                "Fermentation produces ethanol from sugars",
                "Form hydrogen bonds → soluble in water",
                "Combustion: alcohol + O₂ → CO₂ + H₂O"
              ]
            },
            {
              title: "Carboxylic Acids",
              content: "Carboxylic acids contain -COOH (carboxyl) group. General formula: CₙH₂ₙ₊₁COOH or RCOOH. Methanoic acid HCOOH (formic acid), ethanoic acid CH₃COOH (acetic acid, in vinegar). Properties: weak acids (partially ionize), sour taste, pH 3-5, react like acids (with metals, bases, carbonates). Ethanoic acid: main component of vinegar (3-5% solution). Used in food preservation, condiments. Reaction with alcohols: esterification.",
              keyPoints: [
                "Functional group: -COOH (carboxyl)",
                "General formula: CₙH₂ₙ₊₁COOH",
                "Weak acids: partially ionize in water",
                "Ethanoic acid in vinegar",
                "React with bases to form salts",
                "Esterification: acid + alcohol → ester + water"
              ]
            },
            {
              title: "Esters",
              content: "Esters contain -COO- functional group. Formed by reaction of carboxylic acid with alcohol (esterification): RCOOH + R'OH ⇌ RCOOR' + H₂O. Reversible reaction, catalyzed by conc. H₂SO₄. Naming: alcohol part + acid part + '-oate'. Example: ethanol + ethanoic acid → ethyl ethanoate. Properties: sweet/fruity smell, used in perfumes, flavorings, solvents. Hydrolysis: ester + water → acid + alcohol (reverse of formation). Fats and oils are esters of glycerol with fatty acids.",
              keyPoints: [
                "Functional group: -COO- (ester linkage)",
                "Formation: acid + alcohol → ester + water",
                "Catalyst: conc. H₂SO₄, heat",
                "Sweet/fruity smell",
                "Used in perfumes, flavors, plastics",
                "Hydrolysis breaks ester → acid + alcohol"
              ]
            }
          ],
          objectives: [
            "Identify functional groups in organic compounds",
            "Name simple alcohols, acids, and esters",
            "Describe preparation and properties of each class",
            "Write equations for esterification and hydrolysis"
          ]
        },
        {
          title: "Polymers",
          subtopics: [
            {
              title: "Addition and Condensation Polymers",
              content: "Polymers are large molecules (macromolecules) made of repeating units (monomers). Addition polymerization: monomers with C=C join by opening double bond, no small molecule lost. Example: n(C₂H₄) → (C₂H₄)ₙ (ethene → polyethene/polythene). Also: propene → polypropene, chloroethene → PVC. Condensation polymerization: monomers join with loss of small molecule (usually H₂O). Example: nylon from diamine + dicarboxylic acid, polyester from diol + dicarboxylic acid. Proteins and starch are natural condensation polymers.",
              keyPoints: [
                "Addition: monomers join, no loss (from alkenes)",
                "Polyethene, polypropene, PVC are addition polymers",
                "Condensation: monomers join, lose small molecule",
                "Nylon, polyester are condensation polymers",
                "Thermoplastic: soften on heating",
                "Thermosetting: don't soften (cross-linked)"
              ]
            },
            {
              title: "Environmental Impact",
              content: "Advantages: durable, lightweight, versatile, cheap to produce. Disadvantages: most non-biodegradable (don't decompose naturally), cause pollution, made from crude oil (non-renewable). Disposal problems: landfill (takes centuries to decompose), burning (releases toxic gases like HCl from PVC, CO₂ contributes to greenhouse effect). Solutions: recycling (save resources, reduce waste), biodegradable polymers (decompose naturally), reduce use (reusable bags vs plastic bags).",
              keyPoints: [
                "Non-biodegradable: environmental problem",
                "Burning releases toxic gases",
                "Landfill: takes centuries to decompose",
                "Recycling reduces pollution and saves resources",
                "Biodegradable polymers being developed",
                "Reduce, reuse, recycle approach"
              ]
            }
          ],
          objectives: [
            "Distinguish between addition and condensation polymerization",
            "Give examples of common polymers and their uses",
            "Discuss environmental impacts of polymers",
            "Suggest solutions to polymer waste problems"
          ]
        }
      ]
    }
  }
];
