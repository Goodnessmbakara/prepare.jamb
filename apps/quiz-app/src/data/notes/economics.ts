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

export const economicsNotes: StudyNote[] = [
  {
    id: "econ-1",
    subjectId: "economics",
    title: "Introduction to Economics",
    order: 1,
    content: {
      overview: "Economics is the social science that studies how individuals, businesses, governments, and societies make choices about allocating scarce resources to satisfy unlimited human wants. Understanding basic economic concepts is fundamental to analyzing economic problems and policies.",
      topics: [
        {
          title: "Basic Concepts in Economics",
          subtopics: [
            {
              title: "Definition and Nature of Economics",
              content: "Economics is defined as the study of how society manages its scarce resources. Lionel Robbins defined it as 'the science which studies human behavior as a relationship between ends and scarce means which have alternative uses.' Economics examines production, distribution, and consumption of goods and services. It is both a social science (studies human behavior) and deals with both positive economics (what is) and normative economics (what ought to be).",
              keyPoints: [
                "Study of how society allocates scarce resources",
                "Examines production, distribution, and consumption",
                "Deals with unlimited wants and limited resources",
                "Social science studying human economic behavior",
                "Positive economics: objective, fact-based analysis",
                "Normative economics: value judgments, policy recommendations",
                "Microeconomics: individual and firm behavior",
                "Macroeconomics: economy-wide phenomena",
                "Central problem: scarcity and choice"
              ]
            },
            {
              title: "Economic Resources (Factors of Production)",
              content: "Economic resources, also called factors of production, are inputs used to produce goods and services. The four main factors are: Land (all natural resources - soil, minerals, water, forests; reward is rent), Labor (human effort - physical and mental; reward is wages), Capital (man-made resources used in production - machinery, buildings, tools; reward is interest), and Entrepreneurship (organizing other factors, taking risks, making decisions; reward is profit). All factors are limited in supply.",
              keyPoints: [
                "Land: natural resources (soil, minerals, water, forests)",
                "Reward for land: rent",
                "Labor: human effort, physical and mental work",
                "Reward for labor: wages and salaries",
                "Capital: man-made resources for production (machinery, buildings, tools)",
                "Reward for capital: interest",
                "Entrepreneurship: organizing, risk-taking, decision-making",
                "Reward for entrepreneur: profit",
                "All factors are scarce and have opportunity cost",
                "Mobility varies: land immobile, labor and capital more mobile"
              ]
            },
            {
              title: "Scarcity, Choice, and Opportunity Cost",
              content: "Scarcity is the fundamental economic problem - unlimited human wants exceed available resources. This necessitates choice: individuals and societies must decide what to produce, how to produce, and for whom to produce. Every choice involves opportunity cost - the value of the next best alternative forgone. For example, if you choose to spend money on a phone instead of a laptop, the laptop is your opportunity cost. Understanding opportunity cost is crucial for efficient resource allocation.",
              keyPoints: [
                "Scarcity: unlimited wants vs. limited resources",
                "Necessitates making choices",
                "Three fundamental questions: What? How? For whom?",
                "Opportunity cost: value of next best alternative forgone",
                "Every choice has an opportunity cost",
                "Applies to individuals, firms, and governments",
                "Production Possibility Curve (PPC) illustrates trade-offs",
                "Efficient choices minimize opportunity cost",
                "Rational decision-making considers opportunity cost",
                "No such thing as a free lunch - all choices have costs"
              ]
            },
            {
              title: "Scale of Preference and Economic Systems",
              content: "Scale of preference is a list of wants arranged in order of priority, from most important to least important. It helps in making rational choices given limited resources. Economic systems determine how societies answer the three basic questions. The main systems are: Traditional (customs and traditions guide production), Command/Planned (government controls resources), Market/Capitalist (free market and private ownership), and Mixed (combination of market and government intervention). Most modern economies are mixed.",
              keyPoints: [
                "Scale of preference: ranking wants by priority",
                "Helps in rational decision-making",
                "Budget constraint limits choices",
                "Traditional economy: customs, barter, subsistence",
                "Command economy: government planning, state ownership",
                "Market economy: free market, private ownership, profit motive",
                "Mixed economy: combines market and government roles",
                "Most countries today have mixed economies",
                "Economic systems answer: What, How, For whom to produce",
                "Each system has advantages and disadvantages"
              ]
            }
          ],
          objectives: [
            "Define economics and explain its nature",
            "Identify and explain the factors of production",
            "Explain scarcity, choice, and opportunity cost",
            "Describe different economic systems",
            "Understand the concept of scale of preference"
          ]
        },
        {
          title: "Production Possibility Curve",
          subtopics: [
            {
              title: "Concept and Assumptions of PPC",
              content: "The Production Possibility Curve (PPC), also called Production Possibility Frontier (PPF), is a graphical representation showing the maximum combinations of two goods that can be produced with available resources and technology when all resources are fully and efficiently employed. It illustrates scarcity, choice, opportunity cost, and trade-offs. Assumptions include: fixed resources, fixed technology, two goods, full employment of resources, and efficient use of resources.",
              keyPoints: [
                "Shows maximum output combinations of two goods",
                "Illustrates scarcity and trade-offs",
                "Downward sloping: producing more of one good means less of another",
                "Points on the curve: efficient production",
                "Points inside the curve: inefficient/unemployed resources",
                "Points outside: unattainable with current resources",
                "Assumptions: fixed resources, fixed technology, two goods, efficiency",
                "Concave shape shows increasing opportunity cost",
                "Straight line indicates constant opportunity cost",
                "Movement along curve: reallocation of resources"
              ]
            },
            {
              title: "Shifts in PPC and Economic Growth",
              content: "The PPC can shift outward (economic growth) or inward (economic decline). Outward shift occurs due to: increase in resources (population growth, discovery of minerals), technological advancement, improved education and skills, or better resource management. Inward shift results from: natural disasters, wars, depletion of resources, or emigration of skilled labor. Economic growth means an economy can produce more of both goods, improving living standards.",
              keyPoints: [
                "Outward shift: economic growth, increased capacity",
                "Causes of outward shift: more resources, better technology, education",
                "Can shift outward more for one good (e.g., technological advance in one sector)",
                "Inward shift: economic decline, reduced capacity",
                "Causes: natural disasters, war, resource depletion, brain drain",
                "Movement along curve vs. shift of curve",
                "Economic growth increases potential output",
                "Investment today shifts PPC outward in future",
                "Trade allows consumption beyond PPC",
                "Illustrates the cost of current consumption vs. investment"
              ]
            }
          ],
          objectives: [
            "Explain the concept of Production Possibility Curve",
            "Interpret points on, inside, and outside the PPC",
            "Analyze factors causing shifts in PPC",
            "Relate PPC to opportunity cost and economic growth",
            "Use PPC to illustrate economic concepts"
          ]
        }
      ]
    }
  },
  {
    id: "econ-2",
    subjectId: "economics",
    title: "Demand, Supply, and Market Equilibrium",
    order: 2,
    content: {
      overview: "Demand and supply are fundamental concepts in economics that determine prices and quantities in markets. Understanding how these forces interact is essential for analyzing market behavior and economic policy.",
      topics: [
        {
          title: "Demand Theory",
          subtopics: [
            {
              title: "Concept of Demand",
              content: "Demand is the quantity of a good or service that consumers are willing and able to purchase at various prices during a given period. It's not just desire but backed by purchasing power. The law of demand states that, ceteris paribus (all other factors constant), as price increases, quantity demanded decreases, and vice versa. This inverse relationship is shown by a downward-sloping demand curve. Demand is influenced by price, income, prices of related goods, tastes, expectations, and population.",
              keyPoints: [
                "Demand: willingness and ability to buy at various prices",
                "Must be backed by purchasing power",
                "Law of demand: inverse relationship between price and quantity demanded",
                "Demand curve slopes downward from left to right",
                "Individual demand: one consumer's demand",
                "Market demand: sum of all individual demands",
                "Effective demand: backed by ability to pay",
                "Factors: price, income, tastes, prices of related goods, expectations",
                "Ceteris paribus assumption: other factors held constant",
                "Demand schedule: table showing price-quantity relationships"
              ]
            },
            {
              title: "Determinants of Demand and Shifts",
              content: "Movement along the demand curve occurs when only price changes (change in quantity demanded). Shift of the demand curve occurs when non-price factors change (change in demand). Factors causing rightward shift (increase in demand): rise in income (normal goods), fall in price of complements, rise in price of substitutes, favorable taste changes, increase in population, positive expectations. Leftward shift (decrease in demand): opposite changes in these factors.",
              keyPoints: [
                "Movement along curve: price changes (quantity demanded changes)",
                "Shift of curve: non-price factors change (demand changes)",
                "Income effect: higher income increases demand for normal goods",
                "Inferior goods: demand falls as income rises",
                "Substitute goods: increase in price of one increases demand for the other",
                "Complementary goods: consumed together (e.g., cars and petrol)",
                "Taste and preferences influence demand",
                "Population growth increases market demand",
                "Expectations of future prices affect current demand",
                "Rightward shift: increase in demand; Leftward shift: decrease"
              ]
            },
            {
              title: "Types of Demand",
              content: "Various types of demand exist: Competitive demand (goods are substitutes, e.g., butter and margarine), Composite demand (good demanded for multiple uses, e.g., sugar for household and industry), Joint/Complementary demand (goods used together, e.g., cars and fuel), Derived demand (demand arising from demand for another good, e.g., labor demand derived from product demand), and Effective demand (desire backed by purchasing power). Understanding these helps in market analysis.",
              keyPoints: [
                "Competitive demand: substitute goods (tea vs. coffee)",
                "Increase in price of one increases demand for the other",
                "Composite demand: one good for multiple uses (e.g., crude oil)",
                "Joint/Complementary demand: used together (bread and butter)",
                "Derived demand: stems from demand for final product",
                "Example: demand for bricks depends on construction demand",
                "Effective demand: want + ability to pay",
                "Latent demand: potential demand not yet realized",
                "Each type responds differently to market changes",
                "Important for business strategy and policy"
              ]
            },
            {
              title: "Elasticity of Demand",
              content: "Elasticity of demand measures responsiveness of quantity demanded to changes in determining factors. Price Elasticity of Demand (PED) measures response to price changes: PED = % change in Qd / % change in P. Types: Elastic (PED > 1), Inelastic (PED < 1), Unit elastic (PED = 1), Perfectly elastic (PED = ∞), Perfectly inelastic (PED = 0). Income Elasticity and Cross Elasticity also exist. Elasticity affects revenue and is crucial for pricing decisions.",
              keyPoints: [
                "Price Elasticity of Demand (PED): responsiveness to price changes",
                "Formula: PED = (% change in Quantity Demanded) / (% change in Price)",
                "Elastic (PED > 1): demand very responsive to price",
                "Inelastic (PED < 1): demand less responsive to price",
                "Unit elastic (PED = 1): proportional change",
                "Perfectly elastic: horizontal demand curve, any price change means zero/infinite demand",
                "Perfectly inelastic: vertical demand curve, demand unchanged by price",
                "Determinants: availability of substitutes, necessity vs. luxury, time period",
                "Income Elasticity: measures response to income changes",
                "Cross Elasticity: measures response to price changes of related goods",
                "Important for tax policy, pricing strategy, revenue prediction"
              ]
            }
          ],
          objectives: [
            "Define demand and state the law of demand",
            "Distinguish between change in demand and change in quantity demanded",
            "Explain factors affecting demand",
            "Identify and explain types of demand",
            "Calculate and interpret elasticity of demand"
          ]
        },
        {
          title: "Supply Theory",
          subtopics: [
            {
              title: "Concept of Supply",
              content: "Supply is the quantity of a good or service that producers are willing and able to offer for sale at various prices during a given period. The law of supply states that, ceteris paribus, as price increases, quantity supplied increases, and vice versa. This direct relationship is shown by an upward-sloping supply curve. Supply is influenced by price, production costs, technology, prices of other goods, expectations, number of suppliers, and government policies.",
              keyPoints: [
                "Supply: willingness and ability to sell at various prices",
                "Law of supply: direct relationship between price and quantity supplied",
                "Supply curve slopes upward from left to right",
                "Higher prices incentivize producers to supply more",
                "Individual supply: one firm's supply",
                "Market supply: sum of all individual supplies",
                "Factors: price, costs, technology, prices of other goods, expectations",
                "Supply schedule: table showing price-quantity relationships",
                "Profit motive drives supply decisions",
                "Ceteris paribus: other factors held constant"
              ]
            },
            {
              title: "Determinants of Supply and Shifts",
              content: "Movement along the supply curve occurs when only price changes (change in quantity supplied). Shift of the supply curve occurs when non-price factors change (change in supply). Factors causing rightward shift (increase in supply): improved technology, lower production costs, favorable weather, subsidies, increased number of suppliers, fall in prices of other goods producers could make. Leftward shift (decrease in supply): opposite changes in these factors, including taxes and natural disasters.",
              keyPoints: [
                "Movement along curve: price changes (quantity supplied changes)",
                "Shift of curve: non-price factors change (supply changes)",
                "Technology improvement increases supply",
                "Lower input costs (wages, raw materials) increase supply",
                "Subsidies to producers increase supply",
                "Taxes on production decrease supply",
                "Weather conditions affect agricultural supply",
                "Expectations of future prices affect current supply",
                "Number of firms: more suppliers increase market supply",
                "Prices of related goods in production affect supply",
                "Rightward shift: increase in supply; Leftward shift: decrease"
              ]
            },
            {
              title: "Elasticity of Supply",
              content: "Price Elasticity of Supply (PES) measures responsiveness of quantity supplied to price changes: PES = % change in Qs / % change in P. Types: Elastic (PES > 1), Inelastic (PES < 1), Unit elastic (PES = 1), Perfectly elastic (PES = ∞), Perfectly inelastic (PES = 0). Factors affecting PES: time period (longer time = more elastic), spare capacity, stock levels, ease of factor substitution, nature of product. Agricultural products tend to be inelastic in short run.",
              keyPoints: [
                "Price Elasticity of Supply (PES): responsiveness to price changes",
                "Formula: PES = (% change in Quantity Supplied) / (% change in Price)",
                "Elastic (PES > 1): supply very responsive",
                "Inelastic (PES < 1): supply less responsive",
                "Unit elastic (PES = 1): proportional change",
                "Perfectly elastic: horizontal supply curve",
                "Perfectly inelastic: vertical supply curve",
                "Time period: short run usually inelastic, long run more elastic",
                "Spare capacity allows easier supply increase",
                "Agricultural goods: inelastic short run, elastic long run",
                "Manufactured goods: more elastic due to adjustable production"
              ]
            }
          ],
          objectives: [
            "Define supply and state the law of supply",
            "Distinguish between change in supply and change in quantity supplied",
            "Explain factors affecting supply",
            "Calculate and interpret elasticity of supply",
            "Compare supply responses in different time periods"
          ]
        },
        {
          title: "Market Equilibrium and Price Determination",
          subtopics: [
            {
              title: "Market Equilibrium",
              content: "Market equilibrium occurs where quantity demanded equals quantity supplied at a particular price. This equilibrium price (market-clearing price) is determined by the intersection of demand and supply curves. At equilibrium, there is no shortage or surplus. If price is above equilibrium, surplus occurs (excess supply), pushing price down. If price is below equilibrium, shortage occurs (excess demand), pushing price up. Market forces automatically move toward equilibrium.",
              keyPoints: [
                "Equilibrium: Quantity Demanded = Quantity Supplied",
                "Equilibrium price: price at which market clears",
                "Equilibrium quantity: amount bought and sold at equilibrium",
                "Determined by intersection of demand and supply curves",
                "No shortage or surplus at equilibrium",
                "Above equilibrium: surplus, price falls",
                "Below equilibrium: shortage, price rises",
                "Market forces (invisible hand) restore equilibrium",
                "Stable equilibrium: market returns after disturbance",
                "Changes in demand/supply change equilibrium"
              ]
            },
            {
              title: "Changes in Market Equilibrium",
              content: "Equilibrium changes when demand or supply curves shift. Increase in demand (rightward shift) with unchanged supply: equilibrium price and quantity rise. Decrease in demand: both fall. Increase in supply with unchanged demand: equilibrium price falls, quantity rises. Decrease in supply: price rises, quantity falls. When both curves shift, effect depends on relative magnitudes. Understanding these changes is crucial for predicting market responses to economic events and policies.",
              keyPoints: [
                "Demand increases: price and quantity both rise",
                "Demand decreases: price and quantity both fall",
                "Supply increases: price falls, quantity rises",
                "Supply decreases: price rises, quantity falls",
                "Both increase: quantity definitely rises, price effect uncertain",
                "Both decrease: quantity definitely falls, price effect uncertain",
                "Opposite shifts: need to know relative magnitudes",
                "Examples: good harvest (supply increases), income rises (demand increases)",
                "Government policies affect equilibrium through demand/supply",
                "Market adjusts through price mechanism"
              ]
            },
            {
              title: "Price Controls",
              content: "Governments sometimes intervene in markets through price controls. Price ceiling (maximum price) is set below equilibrium to keep prices affordable (e.g., rent controls, essential goods). Results in shortage, black markets, reduced quality. Price floor (minimum price) is set above equilibrium to protect producers (e.g., minimum wage, agricultural price supports). Results in surplus, inefficiency, government purchases. Both create deadweight loss and market distortions, though they may achieve social objectives.",
              keyPoints: [
                "Price controls: government-imposed restrictions on prices",
                "Price ceiling (maximum price): set below equilibrium",
                "Purpose: keep goods affordable for consumers",
                "Effects: shortage, black markets, rationing, reduced quality",
                "Examples: rent controls, price caps on essentials during crisis",
                "Price floor (minimum price): set above equilibrium",
                "Purpose: protect producer income, ensure fair wages",
                "Effects: surplus, unemployment (if minimum wage), government buyouts",
                "Examples: minimum wage, agricultural support prices",
                "Both cause market inefficiency and deadweight loss",
                "Alternative: subsidies or income support may be more efficient"
              ]
            }
          ],
          objectives: [
            "Explain market equilibrium and how it is determined",
            "Analyze effects of changes in demand and supply on equilibrium",
            "Describe price controls and their effects",
            "Evaluate government intervention in markets",
            "Apply demand and supply analysis to real-world situations"
          ]
        }
      ]
    }
  },
  {
    id: "econ-3",
    subjectId: "economics",
    title: "Theory of Production and Costs",
    order: 3,
    content: {
      overview: "Production theory examines how firms combine inputs to produce outputs, while cost theory analyzes the expenses involved. Understanding these concepts is essential for business decision-making and economic efficiency.",
      topics: [
        {
          title: "Production Function and Returns",
          subtopics: [
            {
              title: "Concept of Production",
              content: "Production is the process of transforming inputs (factors of production) into outputs (goods and services) that satisfy human wants. It includes not just manufacturing but also services, agriculture, and extraction. Production adds value and creates utility (form, place, time, possession). The production function shows the relationship between inputs and maximum possible output: Q = f(L, K, N, E) where Q is output, L is labor, K is capital, N is natural resources, E is entrepreneurship.",
              keyPoints: [
                "Production: transformation of inputs into outputs",
                "Creates utility and adds value",
                "Types of utility: form, place, time, possession",
                "Production function: Q = f(inputs)",
                "Shows technical relationship between inputs and output",
                "Assumes efficient use of resources",
                "Short run: at least one fixed factor",
                "Long run: all factors variable",
                "Technological constraints determine production possibilities",
                "Sectors: primary (extraction), secondary (manufacturing), tertiary (services)"
              ]
            },
            {
              title: "Law of Diminishing Returns",
              content: "The Law of Diminishing Returns (or Law of Variable Proportions) states that as successive units of a variable factor (e.g., labor) are added to fixed factors (e.g., land, capital), the marginal product eventually declines. This occurs in the short run when at least one factor is fixed. Initially, marginal product may rise (increasing returns) due to specialization, then reaches maximum, before declining (diminishing returns). Eventually, total product may fall (negative returns).",
              keyPoints: [
                "Applies in short run with at least one fixed factor",
                "As variable input increases, marginal product eventually falls",
                "Three stages: increasing returns, diminishing returns, negative returns",
                "Total Product (TP): total output from all inputs",
                "Marginal Product (MP): additional output from one more unit of input",
                "Average Product (AP): output per unit of variable input",
                "Stage 1: MP rising, AP rising (increasing returns)",
                "Stage 2: MP falling but positive, AP falling (diminishing returns) - rational stage",
                "Stage 3: MP negative, TP falling (negative returns)",
                "Reason: fixed factors become over-utilized",
                "Example: adding workers to fixed land in agriculture"
              ]
            },
            {
              title: "Returns to Scale",
              content: "Returns to scale describe what happens to output when all inputs are increased proportionately in the long run. Increasing returns to scale: output increases more than proportionally (e.g., doubling inputs more than doubles output) - due to specialization, bulk buying, technical efficiencies. Constant returns to scale: output increases proportionally. Decreasing returns to scale: output increases less than proportionally - due to management difficulties, coordination problems in very large firms.",
              keyPoints: [
                "Applies in long run when all factors variable",
                "All inputs increased by same proportion",
                "Increasing returns: output increases more than inputs (economies of scale)",
                "Causes: specialization, technical efficiencies, bulk purchasing",
                "Example: doubling inputs leads to tripling of output",
                "Constant returns: output increases proportionally",
                "Decreasing returns: output increases less than inputs (diseconomies of scale)",
                "Causes: management problems, coordination difficulties, bureaucracy",
                "Most firms experience all three at different scales",
                "Optimal scale: where constant returns begin",
                "Related to economies and diseconomies of scale"
              ]
            }
          ],
          objectives: [
            "Define production and the production function",
            "Explain the law of diminishing returns",
            "Distinguish between returns to scale types",
            "Calculate total, average, and marginal product",
            "Relate production concepts to business decisions"
          ]
        },
        {
          title: "Costs of Production",
          subtopics: [
            {
              title: "Concepts of Costs",
              content: "Costs are expenses incurred in producing goods and services. Fixed costs (FC) don't vary with output (e.g., rent, insurance, salaries) - exist even at zero output. Variable costs (VC) vary with output (e.g., raw materials, hourly wages, electricity). Total cost (TC) = FC + VC. Average Fixed Cost (AFC) = FC/Q; Average Variable Cost (AVC) = VC/Q; Average Total Cost (ATC) = TC/Q = AFC + AVC. Marginal Cost (MC) is the additional cost of producing one more unit: MC = ΔTC/ΔQ.",
              keyPoints: [
                "Fixed Costs (FC): don't vary with output (rent, salaries, insurance)",
                "Variable Costs (VC): vary with output (raw materials, hourly labor)",
                "Total Cost (TC) = FC + VC",
                "Average Fixed Cost (AFC) = FC/Q - falls as output increases",
                "Average Variable Cost (AVC) = VC/Q - typically U-shaped",
                "Average Total Cost (ATC) = TC/Q = AFC + AVC - U-shaped",
                "Marginal Cost (MC) = change in TC from one more unit",
                "MC curve intersects AVC and ATC at their minimum points",
                "Short run: some costs fixed; Long run: all costs variable",
                "Explicit costs: actual money payments; Implicit costs: opportunity costs"
              ]
            },
            {
              title: "Cost Curves and Relationships",
              content: "Cost curves graphically represent cost-output relationships. In the short run: AFC continuously declines (rectangular hyperbola). AVC and ATC are U-shaped - initially fall due to spreading fixed costs and increasing efficiency, then rise due to diminishing returns. MC is also U-shaped and intersects AVC and ATC at their minimum points. When MC < ATC, ATC is falling; when MC > ATC, ATC is rising. Understanding these relationships is crucial for profit maximization decisions.",
              keyPoints: [
                "AFC curve: continuously declining rectangular hyperbola",
                "AVC curve: U-shaped due to variable factor productivity",
                "ATC curve: U-shaped, sum of AFC and AVC",
                "MC curve: U-shaped, reflects law of diminishing returns",
                "MC intersects AVC and ATC at their minimum points",
                "When MC < AC, AC falls; when MC > AC, AC rises",
                "In long run: all costs variable, no fixed costs",
                "Long-run average cost (LRAC): envelope of short-run ATC curves",
                "LRAC initially falls (economies of scale), then rises (diseconomies)",
                "Optimal output: lowest point on LRAC curve"
              ]
            },
            {
              title: "Economies and Diseconomies of Scale",
              content: "Economies of scale are cost advantages from increased production scale - long-run average costs fall as output increases. Internal economies (within firm): technical (large machinery), managerial (specialization), financial (better credit terms), marketing (bulk buying/selling), risk-bearing (diversification). External economies (to industry): skilled labor pool, specialized suppliers, infrastructure. Diseconomies of scale: long-run average costs rise due to management difficulties, coordination problems, bureaucracy, communication breakdown.",
              keyPoints: [
                "Economies of scale: cost per unit falls as scale increases",
                "Internal economies: advantages within the firm",
                "Technical: efficient large-scale machinery, division of labor",
                "Managerial: specialist managers for different functions",
                "Financial: lower interest rates, better credit access",
                "Marketing: bulk purchasing, advertising spread over more units",
                "Risk-bearing: diversification reduces risk",
                "External economies: benefits to all firms in industry",
                "Examples: skilled labor availability, supplier networks, infrastructure",
                "Diseconomies of scale: costs per unit rise",
                "Causes: management coordination problems, communication difficulties, bureaucracy",
                "Result: optimal firm size, not infinite growth"
              ]
            }
          ],
          objectives: [
            "Define and calculate various cost concepts",
            "Explain the shapes of cost curves",
            "Distinguish between short-run and long-run costs",
            "Analyze economies and diseconomies of scale",
            "Apply cost analysis to business decisions"
          ]
        }
      ]
    }
  },
  {
    id: "econ-4",
    subjectId: "economics",
    title: "Market Structures",
    order: 4,
    content: {
      overview: "Market structures describe the competitive environment in which firms operate. Different structures have different characteristics regarding number of firms, product differentiation, entry barriers, and pricing power. Understanding market structures helps analyze firm behavior and market outcomes.",
      topics: [
        {
          title: "Perfect Competition",
          subtopics: [
            {
              title: "Characteristics of Perfect Competition",
              content: "Perfect competition is a theoretical market structure with: many small firms and buyers (no single firm can influence price), homogeneous/identical products (perfect substitutes), perfect information (all participants know prices and quality), free entry and exit (no barriers), perfect mobility of factors of production, and firms are price takers (accept market price). Examples are rare but include some agricultural markets and stock exchanges. It serves as a benchmark for evaluating other market structures.",
              keyPoints: [
                "Many buyers and sellers - no market power",
                "Homogeneous products - perfect substitutes",
                "Perfect knowledge - full information on prices and products",
                "Free entry and exit - no barriers",
                "Perfect factor mobility",
                "Firms are price takers - accept market price",
                "Horizontal demand curve for individual firm (perfectly elastic)",
                "No advertising needed (products identical)",
                "Examples: agricultural commodities, stock markets (close approximations)",
                "Theoretical model - rarely exists in pure form",
                "Benchmark for efficiency and welfare analysis"
              ]
            },
            {
              title: "Equilibrium and Efficiency in Perfect Competition",
              content: "In the short run, a perfectly competitive firm maximizes profit where Marginal Cost (MC) equals Marginal Revenue (MR), and MR = Price. The firm can make supernormal profit, normal profit, or loss. In the long run, free entry/exit ensures only normal profit (zero economic profit) as new firms enter if profits exist, or firms exit if losses occur. Long-run equilibrium occurs where Price = MC = minimum ATC. Perfect competition achieves productive efficiency (production at minimum ATC) and allocative efficiency (P = MC, resources optimally allocated).",
              keyPoints: [
                "Short-run equilibrium: produce where MR = MC = Price",
                "MR = Price because firm is price taker",
                "Short run: can make supernormal profit, normal profit, or loss",
                "Firm shuts down if Price < AVC (can't cover variable costs)",
                "Long-run adjustment: entry if profit, exit if loss",
                "Long-run equilibrium: Price = MC = minimum ATC",
                "Only normal profit in long run (zero economic profit)",
                "Productive efficiency: production at minimum cost (bottom of ATC)",
                "Allocative efficiency: P = MC, optimal resource allocation",
                "Consumer surplus maximized",
                "No deadweight loss - socially optimal outcome"
              ]
            }
          ],
          objectives: [
            "Identify characteristics of perfect competition",
            "Explain short-run and long-run equilibrium",
            "Analyze profit maximization in perfect competition",
            "Evaluate efficiency of perfectly competitive markets",
            "Compare perfect competition with other market structures"
          ]
        },
        {
          title: "Monopoly",
          subtopics: [
            {
              title: "Characteristics and Types of Monopoly",
              content: "Monopoly is a market structure with a single seller of a product with no close substitutes. Characteristics: single firm is the industry, no close substitutes (high cross elasticity with other goods very low), firm is price maker (can set price), significant barriers to entry prevent competition, downward-sloping demand curve. Types: Pure monopoly (only one seller), Natural monopoly (most efficient as single firm due to huge scale economies, e.g., utilities), Legal monopoly (government-granted, e.g., patents, franchises), and Technological monopoly.",
              keyPoints: [
                "Single seller - firm is the entire industry",
                "Unique product - no close substitutes",
                "Price maker - can influence market price",
                "High barriers to entry: legal, economic, natural",
                "Barriers: patents, licenses, control of key resources, huge capital requirements",
                "Downward-sloping demand curve (unlike perfect competition)",
                "Price discrimination possible",
                "Natural monopoly: one firm most efficient (utilities, railways)",
                "Legal monopoly: government grants exclusive rights",
                "Examples: electricity distribution, patented drugs, local utilities",
                "Can arise from mergers, exclusive licenses, or economies of scale"
              ]
            },
            {
              title: "Monopoly Equilibrium and Price Discrimination",
              content: "A monopolist maximizes profit where MC = MR, but unlike perfect competition, P > MR. The monopolist produces less and charges higher price than would occur under perfect competition, creating deadweight loss. Price discrimination occurs when a monopolist charges different prices to different customers for the same product. Types: First-degree (each customer pays maximum willingness to pay), Second-degree (quantity discounts), Third-degree (market segmentation by location, age, time). Requires: market power, ability to separate markets, prevent resale.",
              keyPoints: [
                "Profit maximization: produce where MR = MC",
                "Price determined from demand curve at that quantity",
                "Price > MC (unlike perfect competition) - allocative inefficiency",
                "Produces less, charges more than perfect competition",
                "Supernormal profits possible even in long run (barriers prevent entry)",
                "Deadweight loss: inefficiency, consumer surplus lost",
                "Price discrimination: charging different prices to different customers",
                "Conditions: market power, market separation, no resale",
                "First-degree: perfect discrimination, each pays maximum",
                "Second-degree: quantity discounts (bulk pricing)",
                "Third-degree: market segmentation (student discounts, regional pricing)",
                "Increases monopolist's profit, can increase output, mixed welfare effects"
              ]
            },
            {
              title: "Regulation of Monopolies",
              content: "Governments regulate monopolies due to their inefficiency and potential for exploitation. Methods include: price controls (setting maximum price), rate of return regulation (limiting profits), taxation of monopoly profits, nationalization (government ownership), breaking up monopolies (anti-trust laws), preventing formation through merger control, and creating regulatory agencies. Some monopolies (natural) may be more efficient than competition, but require regulation to prevent abuse. Competition policy promotes competitive markets.",
              keyPoints: [
                "Monopoly problems: higher prices, lower output, deadweight loss, X-inefficiency",
                "Price controls: set maximum price closer to MC",
                "Rate of return regulation: limit profit to 'fair' return",
                "Taxation: tax excess profits",
                "Nationalization: government ownership to serve public interest",
                "Anti-trust/competition laws: prevent monopoly formation",
                "Break up existing monopolies (e.g., Standard Oil, AT&T historically)",
                "Merger control: prevent mergers that reduce competition",
                "Regulatory agencies: oversee prices, quality, access",
                "Natural monopolies: regulate rather than break up",
                "Promote competition where possible",
                "Balance: regulation costs vs. monopoly costs"
              ]
            }
          ],
          objectives: [
            "Describe characteristics of monopoly",
            "Explain monopoly equilibrium and profit maximization",
            "Analyze price discrimination and its effects",
            "Evaluate welfare implications of monopoly",
            "Discuss methods of regulating monopolies"
          ]
        },
        {
          title: "Monopolistic Competition and Oligopoly",
          subtopics: [
            {
              title: "Monopolistic Competition",
              content: "Monopolistic competition combines elements of perfect competition and monopoly. Features: many firms, differentiated products (close but not perfect substitutes), some price-making power (due to product differentiation), free entry and exit, non-price competition (advertising, branding, quality). Examples: restaurants, clothing, cosmetics, furniture. Short run: supernormal profits possible. Long run: free entry reduces profits to normal profit level. Less efficient than perfect competition but offers variety and innovation.",
              keyPoints: [
                "Many firms but fewer than perfect competition",
                "Differentiated products - similar but not identical",
                "Brand loyalty gives some pricing power",
                "Downward-sloping demand curve (less elastic than perfect competition)",
                "Free entry and exit",
                "Non-price competition: advertising, branding, packaging, quality",
                "Short run: can make supernormal profit",
                "Long run: only normal profit (entry erodes excess profit)",
                "Equilibrium: P > MC (some allocative inefficiency)",
                "Excess capacity: don't produce at minimum ATC",
                "Examples: restaurants, hairdressers, clothing stores, cosmetics",
                "Trade-off: less allocative efficiency but more variety and innovation"
              ]
            },
            {
              title: "Oligopoly",
              content: "Oligopoly is a market structure dominated by a few large firms. Characteristics: few interdependent firms (actions of one affect others), homogeneous or differentiated products, significant barriers to entry (economies of scale, brand loyalty, capital requirements), price rigidity (prices tend to be stable), non-price competition, potential for collusion. Examples: automobiles, airlines, telecommunications, oil. Behavior analyzed through game theory. Can be competitive or collusive.",
              keyPoints: [
                "Few dominant firms - high concentration ratio",
                "Mutual interdependence: each firm's decisions affect others",
                "Products may be homogeneous (oil) or differentiated (cars)",
                "High barriers to entry: economies of scale, capital, brand loyalty",
                "Price rigidity: prices change infrequently",
                "Kinked demand curve theory: explains price rigidity",
                "Non-price competition: advertising, product development, service",
                "Price leadership: dominant firm sets price, others follow",
                "Collusion: firms cooperate to act like monopoly (cartels like OPEC)",
                "Illegal in many countries (anti-trust laws)",
                "Game theory: prisoner's dilemma, Nash equilibrium",
                "Examples: automobiles, airlines, telecoms, soft drinks, oil"
              ]
            }
          ],
          objectives: [
            "Describe monopolistic competition and its characteristics",
            "Explain oligopoly and interdependence among firms",
            "Analyze pricing and output decisions in oligopoly",
            "Discuss collusion and competition policy",
            "Compare different market structures in terms of efficiency and welfare"
          ]
        }
      ]
    }
  },
  {
    id: "econ-5",
    subjectId: "economics",
    title: "National Income and Economic Growth",
    order: 5,
    content: {
      overview: "National income accounting measures the overall economic performance of a country. Understanding GDP, GNP, and related concepts is essential for analyzing economic growth, development, and living standards.",
      topics: [
        {
          title: "National Income Concepts",
          subtopics: [
            {
              title: "Definitions and Measurement",
              content: "National income is the total value of goods and services produced by a country over a period (usually a year). Key measures: Gross Domestic Product (GDP) - total value of output produced within a country's borders. Gross National Product (GNP)/GNI - GDP plus net factor income from abroad. Net National Product (NNP) - GNP minus depreciation. National Income (NI) - NNP minus indirect taxes plus subsidies. Personal Income (PI) and Disposable Income (DI) follow. These measures assess economic performance and living standards.",
              keyPoints: [
                "GDP: total value of production within geographic boundaries",
                "GNP/GNI: GDP + net factor income from abroad",
                "Net factor income: income from abroad - income paid abroad",
                "NNP: GNP - depreciation (capital consumption)",
                "National Income: NNP - indirect taxes + subsidies",
                "Personal Income: National Income - undistributed profits - corporate taxes + transfer payments",
                "Disposable Income: Personal Income - direct taxes",
                "Nominal GDP: measured at current prices",
                "Real GDP: adjusted for inflation, constant prices",
                "Per capita income: National Income / Population",
                "GDP deflator: (Nominal GDP / Real GDP) × 100"
              ]
            },
            {
              title: "Methods of Measuring National Income",
              content: "Three main approaches: Output/Product method - sum of value added by all sectors (agriculture, industry, services); avoid double counting by using value added. Income method - sum of all factor incomes (wages, rent, interest, profit). Expenditure method - sum of all spending: C + I + G + (X-M) where C is consumption, I is investment, G is government spending, X exports, M imports. All three methods should theoretically give the same result for national income.",
              keyPoints: [
                "Output method: sum of value added across all sectors",
                "Value added: output value - intermediate consumption",
                "Avoids double counting by excluding intermediate goods",
                "Income method: sum of factor payments (wages, rent, interest, profit)",
                "Include: compensation of employees, operating surplus, mixed income",
                "Expenditure method: C + I + G + (X - M)",
                "C: Household consumption expenditure",
                "I: Gross investment (including inventory changes)",
                "G: Government expenditure on goods and services",
                "(X - M): Net exports (exports minus imports)",
                "All three approaches yield same national income",
                "Choice depends on data availability and reliability"
              ]
            },
            {
              title: "Uses and Limitations of National Income Data",
              content: "Uses: measuring economic performance and growth, comparing living standards across countries and over time, economic planning and policy formulation, assessing distribution of income, measuring structural changes. Limitations: excludes non-market activities (subsistence farming, household work), underground economy not captured, doesn't measure income distribution or welfare, environmental degradation ignored, quality of life factors excluded, statistical inaccuracies, differences in purchasing power affect international comparisons.",
              keyPoints: [
                "Uses: measuring economic growth and development",
                "Standard of living comparisons (use per capita GDP)",
                "Economic planning and policy decisions",
                "International comparisons (adjust for purchasing power)",
                "Measuring structural economic changes",
                "Limitations: excludes non-market activities (subsistence, home production)",
                "Underground economy not included (informal sector)",
                "Doesn't reflect income distribution (inequality)",
                "Environmental costs ignored (pollution, resource depletion)",
                "Welfare and quality of life not fully captured",
                "Statistical errors and estimation problems",
                "Purchasing Power Parity (PPP) needed for valid comparisons",
                "HDI (Human Development Index) provides broader measure"
              ]
            }
          ],
          objectives: [
            "Define key national income concepts",
            "Explain methods of measuring national income",
            "Calculate GDP using different approaches",
            "Discuss uses of national income statistics",
            "Analyze limitations of national income as welfare measure"
          ]
        },
        {
          title: "Economic Growth and Development",
          subtopics: [
            {
              title: "Economic Growth vs. Development",
              content: "Economic growth is the increase in real GDP over time - quantitative increase in output. Economic development is broader, including growth plus qualitative improvements in living standards, structural changes, reduced inequality, improved education and health, technological progress, and institutional development. Growth is necessary but not sufficient for development. A country can have growth without development (e.g., oil-rich countries with inequality), but development requires sustained growth.",
              keyPoints: [
                "Economic growth: increase in real GDP/GNP",
                "Quantitative measure: percentage increase in output",
                "Growth rate = [(GDP year 2 - GDP year 1) / GDP year 1] × 100",
                "Economic development: growth + qualitative improvements",
                "Development includes: better living standards, health, education",
                "Structural transformation: agriculture to industry to services",
                "Reduced poverty and inequality",
                "Improved infrastructure and institutions",
                "Environmental sustainability",
                "Growth necessary but not sufficient for development",
                "Development is multidimensional",
                "Human Development Index (HDI): life expectancy, education, per capita income"
              ]
            },
            {
              title: "Factors Affecting Economic Growth and Development",
              content: "Growth and development depend on: Natural resources (land, minerals, water) - endowment and efficient use. Human capital (labor quality, education, health, skills). Physical capital (infrastructure, machinery, technology). Technological progress (innovation, R&D, adoption). Entrepreneurship (risk-taking, business creation). Political stability and good governance. Economic policies (macroeconomic stability, trade policy, investment climate). Institutional quality (rule of law, property rights, corruption control). Cultural and social factors also play roles.",
              keyPoints: [
                "Natural resources: availability and efficient exploitation",
                "Human capital: education, health, skills, productivity",
                "Physical capital: infrastructure, machinery, factories",
                "Capital accumulation through saving and investment",
                "Technological progress: innovation and adoption",
                "Entrepreneurship: business creation, innovation, risk-taking",
                "Political stability: peace, security, policy continuity",
                "Good governance: transparency, rule of law, low corruption",
                "Sound economic policies: fiscal, monetary, trade, investment",
                "Institutional quality: property rights, contract enforcement",
                "Access to finance and credit",
                "International trade and foreign investment",
                "Cultural and social factors: work ethic, trust, social capital"
              ]
            },
            {
              title: "Problems of Developing Countries",
              content: "Developing countries face multiple challenges: poverty and low per capita income, high population growth, unemployment and underemployment, low savings and investment, inadequate infrastructure, poor health and education, income inequality, heavy dependence on primary products, technological backwardness, weak institutions, political instability, external debt burden, and adverse trade terms. These problems are often interconnected, creating vicious cycles that hinder development. Breaking these cycles requires comprehensive strategies.",
              keyPoints: [
                "Widespread poverty and low incomes",
                "Rapid population growth straining resources",
                "High unemployment and underemployment",
                "Low savings and investment rates (vicious cycle of poverty)",
                "Poor infrastructure: roads, electricity, water, communications",
                "Low human capital: poor health, limited education",
                "High inequality and uneven development",
                "Heavy reliance on primary commodities (agriculture, minerals)",
                "Technological backwardness and low productivity",
                "Weak institutions and governance",
                "Political instability and conflicts",
                "Large external debts and debt servicing burden",
                "Unfavorable terms of trade",
                "Brain drain: skilled workers emigrating"
              ]
            },
            {
              title: "Strategies for Economic Development",
              content: "Development strategies include: Balanced growth (simultaneous development of all sectors) vs. Unbalanced growth (focus on key sectors with linkages). Import substitution (producing locally to replace imports) vs. Export promotion (developing export industries). Agricultural development and industrialization must be balanced. Human capital investment in education and health is crucial. Infrastructure development, institutional reforms, good governance, technological upgrading, and attracting foreign investment all contribute. Poverty reduction programs, microfinance, and empowerment of marginalized groups are also important.",
              keyPoints: [
                "Balanced growth: simultaneous development of all sectors",
                "Unbalanced growth: focus on leading sectors with strong linkages",
                "Import substitution: develop domestic industries to replace imports",
                "Export promotion: develop competitive export sectors",
                "Most countries combine these strategies",
                "Investment in human capital: education and health",
                "Infrastructure development: transport, power, communications",
                "Agricultural modernization and rural development",
                "Industrialization for structural transformation",
                "Technological upgrading and innovation",
                "Institutional reforms: property rights, rule of law",
                "Good governance and anti-corruption measures",
                "Attracting foreign direct investment (FDI)",
                "Regional integration and trade agreements",
                "Poverty alleviation programs and social safety nets"
              ]
            }
          ],
          objectives: [
            "Distinguish between economic growth and development",
            "Identify factors influencing growth and development",
            "Analyze problems faced by developing countries",
            "Evaluate different development strategies",
            "Discuss the role of government in promoting development"
          ]
        }
      ]
    }
  }
];
