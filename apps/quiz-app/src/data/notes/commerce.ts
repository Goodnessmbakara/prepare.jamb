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

export const commerceNotes: StudyNote[] = [
  {
    id: "com-1",
    subjectId: "commerce",
    title: "Introduction to Commerce",
    order: 1,
    content: {
      overview: "Commerce encompasses all activities involved in the exchange of goods and services from producers to consumers. It facilitates trade and includes various auxiliaries that support business operations.",
      topics: [
        {
          title: "Meaning and Scope of Commerce",
          subtopics: [
            {
              title: "Definition of Commerce",
              content: "Commerce refers to all activities concerned with the distribution and exchange of goods and services from the point of production to the point of consumption. It bridges the gap between producers and consumers by facilitating trade through various means. Commerce includes trade (buying and selling) and aids to trade (banking, insurance, transportation, warehousing, advertising, communication). It is a branch of business that deals with the exchange aspect, making goods available where and when needed.",
              keyPoints: [
                "Commerce: distribution and exchange of goods and services",
                "Bridges gap between producers and consumers",
                "Removes hindrances of persons, place, time, and risk",
                "Consists of trade and aids to trade",
                "Trade: actual buying and selling",
                "Aids to trade: supporting services (banking, transport, insurance)",
                "Part of business activities alongside production",
                "Creates place, time, and possession utilities",
                "Facilitates smooth flow of goods and services",
                "Essential for modern economic systems"
              ]
            },
            {
              title: "Distinction Between Commerce, Trade, and Industry",
              content: "Business comprises all economic activities for profit. It is divided into Industry (production of goods and services) and Commerce (distribution and exchange). Industry includes extraction (mining, fishing), manufacturing (converting raw materials), construction, and services. Commerce is subdivided into Trade (buying and selling) and Aids to Trade (supporting services). Trade further divides into home trade and foreign trade. Understanding these distinctions clarifies the different aspects of business operations.",
              keyPoints: [
                "Business: all profit-making activities",
                "Industry: production side (extraction, manufacturing, construction, services)",
                "Commerce: distribution and exchange side",
                "Trade: actual buying and selling of goods",
                "Home trade: within a country (wholesale and retail)",
                "Foreign trade: across national borders (import, export, entrepot)",
                "Aids to trade: banking, insurance, transport, warehousing, advertising, communication",
                "Industry creates form utility (production)",
                "Commerce creates place, time, and possession utilities",
                "All interconnected in modern economy"
              ]
            },
            {
              title: "Functions and Importance of Commerce",
              content: "Commerce performs vital economic functions: facilitating exchange between producers and consumers, overcoming barriers of distance (through transport), time (through warehousing), risk (through insurance), finance (through banking), and information (through advertising and communication). It creates employment, promotes specialization, increases competition and efficiency, widens markets for producers, provides variety for consumers, and supports economic development. Modern economies depend heavily on efficient commercial systems.",
              keyPoints: [
                "Facilitates exchange of goods and services",
                "Overcomes barriers: distance, time, risk, finance, information",
                "Creates place utility (transport makes goods available where needed)",
                "Creates time utility (warehousing stores goods until needed)",
                "Reduces risk (insurance protects against losses)",
                "Provides finance (banking supplies credit)",
                "Disseminates information (advertising informs consumers)",
                "Creates employment in trade and services",
                "Promotes specialization and division of labor",
                "Widens markets for producers",
                "Provides variety and choice for consumers",
                "Supports economic growth and development"
              ]
            }
          ],
          objectives: [
            "Define commerce and explain its scope",
            "Distinguish between commerce, trade, and industry",
            "Explain the functions of commerce",
            "Discuss the importance of commerce in modern economy",
            "Identify the relationship between production and distribution"
          ]
        },
        {
          title: "Occupation and Career Opportunities",
          subtopics: [
            {
              title: "Types of Occupation",
              content: "Occupation refers to regular work or employment that provides income. Occupations are classified into three main categories: Industrial occupations (involved in production - extraction, manufacturing, construction, utilities), Commercial occupations (involved in trade and distribution - buying, selling, transport, banking, insurance), and Service occupations (professionals providing services - doctors, lawyers, teachers, consultants). People choose occupations based on aptitude, education, training, interests, and opportunities. Career planning is important for success.",
              keyPoints: [
                "Occupation: regular work providing livelihood",
                "Industrial occupations: extractive, manufacturing, construction",
                "Commercial occupations: traders, transporters, bankers, insurers",
                "Service occupations: professionals (doctors, lawyers, teachers)",
                "Direct services: medical, legal, educational",
                "Commercial services: banking, insurance, advertising",
                "Factors influencing choice: aptitude, education, interests, opportunities",
                "Require different skills and training",
                "Career development through education and experience",
                "Multiple occupations possible in lifetime"
              ]
            },
            {
              title: "Career Opportunities in Commerce",
              content: "Commerce offers diverse career paths in various fields: Banking and Finance (bank managers, financial analysts, accountants), Insurance (underwriters, agents, claims adjusters), Transportation (logistics managers, freight forwarders), Warehousing and Storage (warehouse managers, inventory controllers), Advertising and Marketing (marketers, brand managers, advertisers), Retail Management (store managers, buyers), International Trade (export managers, customs agents), E-commerce (digital marketers, online business managers), and Consulting (business consultants). These careers require relevant education, skills, and often professional certifications.",
              keyPoints: [
                "Banking careers: tellers, loan officers, financial analysts, branch managers",
                "Insurance careers: agents, brokers, underwriters, claims adjusters",
                "Transport careers: logistics managers, freight forwarders, shipping agents",
                "Warehousing: inventory managers, warehouse supervisors",
                "Marketing: brand managers, market researchers, sales managers",
                "Advertising: copywriters, media planners, account executives",
                "Retail: store managers, buyers, merchandisers",
                "Import/Export: customs agents, export managers, trade specialists",
                "E-commerce: online business managers, digital marketers",
                "Consulting: business consultants, management advisors",
                "Required qualifications: diplomas, degrees, professional certifications",
                "Skills needed: communication, numeracy, ICT, problem-solving"
              ]
            }
          ],
          objectives: [
            "Classify types of occupations",
            "Identify career opportunities in commerce",
            "Explain factors influencing career choice",
            "Discuss qualifications needed for commercial careers",
            "Analyze the importance of career planning"
          ]
        }
      ]
    }
  },
  {
    id: "com-2",
    subjectId: "commerce",
    title: "Trade and Its Forms",
    order: 2,
    content: {
      overview: "Trade is the core of commerce, involving the buying and selling of goods and services. It exists in various forms, each serving different purposes in connecting producers with consumers.",
      topics: [
        {
          title: "Home Trade",
          subtopics: [
            {
              title: "Wholesale Trade",
              content: "Wholesale trade involves buying goods in large quantities from manufacturers and selling in smaller quantities to retailers or other businesses. Wholesalers act as intermediaries between producers and retailers, performing vital functions: breaking bulk (buying large, selling smaller quantities), warehousing (storing goods), financing (providing credit to retailers), risk-bearing (assuming risks of price changes and damage), market information (advising on market trends), and transportation. Wholesalers enable manufacturers to focus on production and retailers to stock variety without huge capital.",
              keyPoints: [
                "Buy in bulk from manufacturers",
                "Sell in smaller quantities to retailers",
                "Intermediary between producer and retailer",
                "Functions: breaking bulk, warehousing, financing, risk-bearing",
                "Provide credit facilities to retailers",
                "Store goods in warehouses until needed",
                "Bear risks of price fluctuations and damage",
                "Provide market information to producers and retailers",
                "Arrange transportation of goods",
                "Enable manufacturers to produce in large quantities",
                "Allow retailers to stock variety without huge capital",
                "Cash and carry wholesalers: no credit, buyers collect goods"
              ]
            },
            {
              title: "Retail Trade",
              content: "Retail trade involves selling goods directly to final consumers in small quantities for personal use. Retailers are the last link in the distribution chain. Functions include: stocking variety of goods, providing convenient locations, offering credit to customers, displaying and promoting goods, providing after-sales service, gathering consumer feedback, and breaking bulk into consumer-sized units. Types of retailers include: small-scale (street vendors, kiosks, corner shops), large-scale (supermarkets, department stores, chain stores), and specialized retailers.",
              keyPoints: [
                "Sell directly to final consumers",
                "Small quantities for personal consumption",
                "Last link in distribution chain",
                "Functions: stock variety, convenient locations, consumer credit",
                "Display and promote products",
                "After-sales service and customer care",
                "Gather consumer information for manufacturers",
                "Break bulk into consumer units",
                "Types: small retailers (hawkers, kiosks, corner shops)",
                "Large retailers: supermarkets, department stores, hypermarkets",
                "Chain stores: multiple branches with same ownership",
                "Specialized shops: focus on particular products",
                "Mail order and online retailers emerging"
              ]
            },
            {
              title: "Differences Between Wholesale and Retail Trade",
              content: "Wholesale and retail trade differ in several key aspects: Scale of operation (wholesalers deal in bulk, retailers in small quantities), Capital requirements (wholesalers need large capital, retailers can start small), Location (wholesalers in industrial/warehouse areas, retailers in residential/shopping areas), Customers (wholesalers sell to businesses, retailers to consumers), Prices (wholesalers offer lower per-unit prices, retailers charge higher to cover costs and profit), Credit (wholesalers give credit, retailers often sell cash), Variety (retailers stock more variety, wholesalers stock few lines in depth).",
              keyPoints: [
                "Quantity: wholesalers bulk, retailers small amounts",
                "Capital: wholesalers need large capital, retailers less",
                "Location: wholesalers near producers/ports, retailers near consumers",
                "Customers: wholesalers B2B, retailers B2C",
                "Prices: wholesalers lower unit price, retailers higher",
                "Credit: wholesalers extend credit, retailers mostly cash sales",
                "Variety: retailers wide variety, wholesalers limited lines",
                "Promotion: retailers advertise to consumers, wholesalers minimal advertising",
                "Display: retailers emphasize display, wholesalers basic storage",
                "Personal service: retailers high, wholesalers minimal",
                "Both essential in distribution chain",
                "Trend: some retailers buying directly from manufacturers (cutting out wholesalers)"
              ]
            }
          ],
          objectives: [
            "Define wholesale and retail trade",
            "Explain the functions of wholesalers and retailers",
            "Compare wholesale and retail trade",
            "Identify different types of retailers",
            "Discuss the changing trends in distribution"
          ]
        },
        {
          title: "Foreign Trade",
          subtopics: [
            {
              title: "Types of Foreign Trade",
              content: "Foreign trade (international trade) is the exchange of goods and services across national borders. Three main types: Import trade (buying goods from other countries), Export trade (selling goods to other countries), and Entrepot/Re-export trade (importing goods for re-export to other countries, often after some processing or repackaging). Foreign trade enables countries to obtain goods they cannot produce efficiently, access to larger markets, specialization based on comparative advantage, and economic growth. It requires special documentation, involves foreign exchange, and is subject to trade policies.",
              keyPoints: [
                "Import trade: buying from foreign countries",
                "Export trade: selling to foreign countries",
                "Entrepot trade: importing for re-export to third countries",
                "Enables access to goods not produced domestically",
                "Allows specialization based on comparative advantage",
                "Expands markets beyond domestic boundaries",
                "Requires documentation: invoices, bills of lading, certificates",
                "Involves foreign exchange and currency conversion",
                "Subject to tariffs, quotas, and trade regulations",
                "Trade balance: exports vs. imports",
                "Balance of payments: all international transactions",
                "Terms of trade: ratio of export to import prices"
              ]
            },
            {
              title: "Advantages and Disadvantages of International Trade",
              content: "Advantages of international trade include: access to goods not available domestically, lower prices through competition, larger markets for producers, specialization and efficiency gains, technology transfer, employment creation, foreign exchange earnings, improved relations between countries. Disadvantages include: dependence on foreign goods, vulnerability to external shocks, unfavorable terms of trade for developing countries, domestic industry competition, potential loss of jobs in uncompetitive sectors, cultural influences, and strategic security concerns with dependence on other nations.",
              keyPoints: [
                "Advantages: wider variety of goods and services",
                "Access to cheaper or higher quality imports",
                "Larger markets increase production and economies of scale",
                "Specialization based on comparative advantage improves efficiency",
                "Technology and knowledge transfer",
                "Employment in export industries",
                "Foreign exchange earnings",
                "Improved international relations",
                "Disadvantages: dependence on foreign supplies",
                "Vulnerability to external economic shocks",
                "Unfavorable terms of trade can harm developing countries",
                "Domestic industries face foreign competition",
                "Possible unemployment in uncompetitive sectors",
                "Cultural and political influences from abroad",
                "Strategic concerns: dependence in essential goods",
                "Need for trade policies to balance costs and benefits"
              ]
            },
            {
              title: "Barriers to International Trade",
              content: "Various barriers restrict free international trade: Tariffs (taxes on imports, raise prices, protect domestic industry), Quotas (quantitative limits on imports), Embargoes (complete ban on trade with specific countries), Exchange controls (restrictions on foreign currency), Import licenses (permission required to import), Standards and regulations (health, safety, environmental requirements that imports must meet), and Subsidies to domestic producers (indirect barrier). Non-tariff barriers like bureaucratic procedures also hinder trade. These barriers protect domestic industries but reduce consumer choice and increase prices.",
              keyPoints: [
                "Tariffs: taxes on imported goods",
                "Protective tariffs: high rates to protect domestic industry",
                "Revenue tariffs: moderate rates for government income",
                "Quotas: quantitative restrictions on imports",
                "Embargoes: complete prohibition on certain imports/exports",
                "Exchange controls: limit foreign currency availability",
                "Import licenses: permits required to import",
                "Standards: health, safety, environmental regulations",
                "Subsidies: government support to domestic producers (indirect barrier)",
                "Administrative barriers: complex customs procedures",
                "Purposes: protect infant industries, reduce unemployment, improve balance of payments",
                "Save foreign exchange, national security",
                "Drawbacks: higher prices for consumers, retaliation, inefficiency",
                "WTO promotes reduction of trade barriers"
              ]
            },
            {
              title: "Trade Organizations and Agreements",
              content: "International trade is facilitated and regulated by various organizations and agreements: World Trade Organization (WTO) promotes free trade and resolves disputes. Regional trade blocs like ECOWAS (West Africa), European Union (EU), NAFTA/USMCA (North America), ASEAN (Southeast Asia) reduce barriers among member countries. Bilateral trade agreements between two countries. Multilateral agreements involve multiple countries. These organizations aim to liberalize trade, harmonize standards, and promote economic cooperation. Membership provides preferential access to markets but may require policy commitments.",
              keyPoints: [
                "World Trade Organization (WTO): global trade rules and dispute resolution",
                "Promotes free trade and reduction of barriers",
                "Most-favored nation (MFN) principle: equal treatment",
                "Regional trade blocs reduce internal barriers",
                "ECOWAS: Economic Community of West African States",
                "Free movement of goods, services, and people among members",
                "Common external tariff on non-members",
                "European Union (EU): single market in Europe",
                "USMCA: United States-Mexico-Canada Agreement",
                "African Continental Free Trade Area (AfCFTA)",
                "Bilateral agreements: between two countries",
                "Benefits: market access, investment, technology transfer",
                "Challenges: loss of sovereignty, adjustment costs",
                "Debate: free trade vs. protectionism"
              ]
            }
          ],
          objectives: [
            "Define and classify types of foreign trade",
            "Explain the advantages and disadvantages of international trade",
            "Identify barriers to international trade",
            "Discuss the role of trade organizations",
            "Analyze the impact of trade agreements on member countries"
          ]
        }
      ]
    }
  },
  {
    id: "com-3",
    subjectId: "commerce",
    title: "Aids to Trade - Transportation",
    order: 3,
    content: {
      overview: "Transportation is a critical aid to trade that overcomes the barrier of distance by moving goods and people from one location to another. It creates place utility and facilitates commerce.",
      topics: [
        {
          title: "Importance and Modes of Transportation",
          subtopics: [
            {
              title: "Importance of Transportation in Commerce",
              content: "Transportation is essential for modern commerce. It creates place utility by making goods available where they are needed, enables trade over long distances, connects producers with consumers, facilitates specialization by allowing regions to focus on what they produce best, reduces costs through economies of scale in bulk movement, provides employment, supports other sectors (manufacturing, agriculture, tourism), and promotes national and international trade. Efficient transportation systems are crucial for economic development.",
              keyPoints: [
                "Creates place utility: goods moved to where needed",
                "Overcomes barrier of distance",
                "Enables movement of raw materials to factories",
                "Distributes finished goods to consumers",
                "Facilitates specialization and division of labor",
                "Expands markets for producers",
                "Reduces distribution costs through bulk movement",
                "Provides direct employment (drivers, pilots, crew)",
                "Supports tourism and travel",
                "Essential for international trade",
                "Speed and efficiency affect competitiveness",
                "Infrastructure development crucial for economic growth"
              ]
            },
            {
              title: "Road Transportation",
              content: "Road transport uses vehicles on roads and highways to move goods and people. Advantages: flexibility in routes and timing (door-to-door service), suitable for short to medium distances, lower fixed costs, faster loading/unloading, good for perishable goods. Disadvantages: limited capacity for bulk goods, higher costs for long distances, affected by weather and traffic, accidents, pollution. Types: private cars, buses, trucks, vans, motorcycles. Increasingly important with improved road networks. Essential for last-mile delivery in distribution chains.",
              keyPoints: [
                "Uses: cars, buses, trucks, vans, motorcycles on roads",
                "Advantages: flexibility, door-to-door service",
                "No fixed routes or timetables required",
                "Suitable for short to medium distances",
                "Quick loading and unloading",
                "Good for perishable goods requiring speed",
                "Lower initial infrastructure cost than rail",
                "Disadvantages: limited capacity for very bulky goods",
                "Higher cost per ton-mile for long distances",
                "Traffic congestion in urban areas",
                "Weather dependent (rain, floods affect roads)",
                "Accidents and safety concerns",
                "Environmental pollution",
                "Important for rural areas and last-mile delivery"
              ]
            },
            {
              title: "Rail Transportation",
              content: "Rail transport uses trains on fixed railway tracks. Advantages: high capacity for bulk goods, cost-effective for long distances, reliable schedules, safer than road transport, less pollution per ton-mile, all-weather operation. Disadvantages: inflexible routes (limited to rail networks), high fixed costs (infrastructure), cannot provide door-to-door service, slow loading/unloading, less suitable for short distances. Ideal for heavy, bulky goods like coal, minerals, grains, and containers over long distances. Passenger trains provide mass transit.",
              keyPoints: [
                "Uses trains on fixed railway tracks",
                "Advantages: very high carrying capacity",
                "Cost-effective for long distances and bulk goods",
                "Regular and reliable schedules",
                "Safer than road transport (lower accident rates)",
                "Lower pollution per ton-mile",
                "Less affected by weather",
                "Disadvantages: inflexible, limited to rail network",
                "Cannot provide door-to-door service",
                "High capital investment in infrastructure",
                "Slow loading and unloading",
                "Less economical for short distances",
                "Best for: heavy, bulky goods (coal, minerals, grains)",
                "Container transport, passenger mass transit",
                "Declining in some countries, reviving in others"
              ]
            },
            {
              title: "Water Transportation",
              content: "Water transport uses ships and boats on seas, oceans, rivers, and lakes. Two types: Ocean/Sea transport (international trade, very large ships) and Inland water transport (rivers, lakes, canals). Advantages: lowest cost per ton-mile, enormous carrying capacity, ideal for bulky non-urgent goods, international reach. Disadvantages: very slow, inflexible routes (limited to waterways), weather dependent, requires port facilities, high port charges. Essential for international trade (over 90% of global trade by volume). Types: cargo ships, tankers, container ships, passenger ships.",
              keyPoints: [
                "Ocean transport: ships on seas for international trade",
                "Inland transport: boats on rivers, lakes, canals",
                "Advantages: cheapest mode per ton-mile",
                "Huge carrying capacity (largest vessels)",
                "Ideal for heavy, bulky goods (oil, grain, minerals)",
                "International reach across continents",
                "Disadvantages: slowest mode of transport",
                "Inflexible: limited to waterways and ports",
                "Weather dependent: storms, fog delay ships",
                "Requires expensive port infrastructure",
                "High loading/unloading time and costs",
                "Types: bulk carriers, tankers, container ships, ferries",
                "Dominates international trade (90%+ by volume)",
                "Containers revolutionized shipping (standardization)",
                "Important documents: bill of lading, charter party"
              ]
            },
            {
              title: "Air Transportation",
              content: "Air transport uses aircraft (airplanes, helicopters) to move goods and people through the air. Advantages: fastest mode, suitable for long distances, ideal for urgent, perishable, and high-value goods, minimal physical barriers, enhances international business and tourism. Disadvantages: most expensive mode, limited capacity, weather dependent (fog, storms), high fuel costs, requires airport infrastructure, not suitable for bulky or heavy goods. Growing importance with globalization, e-commerce, and just-in-time manufacturing. Cargo and passenger flights contribute to commerce.",
              keyPoints: [
                "Uses airplanes and helicopters",
                "Advantages: fastest mode of transport",
                "Covers long distances quickly",
                "Ideal for perishable goods (flowers, seafood, medical supplies)",
                "High-value, low-volume goods (electronics, jewelry)",
                "Urgent documents and spare parts",
                "Few physical barriers (mountains, oceans)",
                "Enhances international business and tourism",
                "Disadvantages: most expensive per ton-mile",
                "Limited carrying capacity",
                "Weather dependent: fog, storms ground flights",
                "High fuel and operational costs",
                "Requires expensive airport infrastructure",
                "Not suitable for bulky or very heavy goods",
                "Growing with globalization and e-commerce",
                "Air cargo part of global supply chains"
              ]
            },
            {
              title: "Pipeline Transportation",
              content: "Pipelines are specialized systems of pipes used to transport liquids and gases over long distances. Primarily used for crude oil, refined petroleum products, natural gas, and sometimes water and sewage. Advantages: continuous flow, low operating costs after installation, safe, not affected by weather, minimal environmental impact. Disadvantages: very high initial cost, inflexible (cannot easily change routes), limited to specific products, vulnerable to sabotage and leaks. Essential for oil and gas industries, connecting production areas to refineries and consumers.",
              keyPoints: [
                "System of pipes for liquids and gases",
                "Products: crude oil, refined petroleum, natural gas, water",
                "Advantages: continuous, uninterrupted flow",
                "Low operating costs after installation",
                "Safe: no accidents like road/rail",
                "All-weather operation (underground/underwater)",
                "Minimal land use and environmental impact",
                "Efficient for large volumes over long distances",
                "Disadvantages: extremely high initial capital cost",
                "Inflexible: fixed routes, cannot be easily moved",
                "Limited to specific liquid/gas products",
                "Vulnerable to sabotage, leaks, and ruptures",
                "Long construction time",
                "Examples: Trans-Saharan gas pipeline, Alaska pipeline",
                "Essential for oil and gas industry",
                "Increasingly important for energy transport"
              ]
            }
          ],
          objectives: [
            "Explain the importance of transportation in commerce",
            "Describe different modes of transportation",
            "Compare advantages and disadvantages of each mode",
            "Identify suitable transportation for different goods",
            "Analyze factors influencing choice of transport mode"
          ]
        },
        {
          title: "Transportation Documents",
          subtopics: [
            {
              title: "Key Transport Documents",
              content: "Transportation involves important documents that serve as evidence of contract, receipt of goods, and title to goods. Key documents include: Bill of Lading (sea transport - contract, receipt, and document of title), Airway Bill (air transport - receipt and contract but not title), Railway Consignment Note (rail transport), Road Waybill (road transport), Charter Party (agreement for hiring entire ship), Delivery Note, and Insurance Certificate. Proper documentation is essential for smooth transport, customs clearance, and claiming goods or insurance.",
              keyPoints: [
                "Bill of Lading: most important shipping document",
                "Functions: contract of carriage, receipt for goods, document of title",
                "Types: clean (goods in good condition), claused/foul (notes damage)",
                "Airway Bill: air transport receipt and contract (non-negotiable)",
                "Railway Consignment Note: rail transport receipt",
                "Road Waybill: road transport document",
                "Charter Party: contract for hiring entire ship",
                "Voyage charter (single voyage) vs. time charter (period)",
                "Delivery Note: confirms goods delivered",
                "Consignment Note: details of goods and parties",
                "Insurance Certificate: proof of insurance coverage",
                "Documents needed for customs clearance",
                "Essential for international trade"
              ]
            }
          ],
          objectives: [
            "Identify key transportation documents",
            "Explain the functions of bill of lading",
            "Distinguish between different types of transport documents",
            "Discuss the importance of documentation in transportation",
            "Analyze how documents facilitate international trade"
          ]
        }
      ]
    }
  },
  {
    id: "com-4",
    subjectId: "commerce",
    title: "Aids to Trade - Warehousing and Insurance",
    order: 4,
    content: {
      overview: "Warehousing and insurance are essential aids to trade. Warehousing overcomes the time barrier by storing goods until they are needed, while insurance protects against risks and losses.",
      topics: [
        {
          title: "Warehousing",
          subtopics: [
            {
              title: "Meaning and Importance of Warehousing",
              content: "Warehousing is the storage of goods in a systematic and orderly manner until they are needed for sale or use. Warehouses are buildings specially designed for storing goods. Importance: creates time utility (makes goods available when needed), enables continuous production (manufacturers can produce year-round), balances supply and demand (stores surplus for lean periods), facilitates bulk buying (storage allows purchasing in bulk), stabilizes prices (releases stock to prevent shortages), provides employment, and supports trade by bridging time gap between production and consumption.",
              keyPoints: [
                "Storage of goods in organized manner",
                "Creates time utility: goods available when needed",
                "Bridges time gap between production and consumption",
                "Enables continuous production throughout year",
                "Allows storage of seasonal products (agricultural goods)",
                "Balances supply and demand",
                "Facilitates bulk buying and economies of scale",
                "Stabilizes prices by controlling releases",
                "Protects goods from deterioration and theft",
                "Provides employment",
                "Essential for traders, manufacturers, farmers",
                "Modern warehouses offer additional services: packaging, labeling"
              ]
            },
            {
              title: "Types of Warehouses",
              content: "Warehouses are classified based on ownership and purpose: Private warehouses (owned by manufacturers/traders for own use), Public warehouses (available for hire by anyone), Bonded warehouses (store imported goods until customs duties paid - supervised by customs), Government warehouses (owned by government), Cooperative warehouses (owned by cooperative societies for members), Cold storage (for perishable goods requiring refrigeration). Choice depends on nature of goods, volume, ownership preference, and cost considerations.",
              keyPoints: [
                "Private warehouses: owned by businesses for own goods",
                "Advantages: control, convenience, long-term economy",
                "Public warehouses: available to all for rental fee",
                "Advantages: no capital investment, flexibility, services",
                "Bonded warehouses: imported goods stored before duty payment",
                "Under customs supervision, delays duty payment",
                "Allows re-export without paying duty",
                "Government warehouses: owned and operated by government",
                "Cooperative warehouses: owned by cooperatives for members",
                "Cold storage: refrigerated for perishable goods (meat, fish, dairy)",
                "Specialized warehouses: for specific goods (furniture, chemicals)",
                "Modern distribution centers: combine storage with quick dispatch",
                "Choice depends on: goods type, volume, cost, control needed"
              ]
            },
            {
              title: "Functions and Services of Warehouses",
              content: "Modern warehouses provide multiple functions beyond basic storage: Safe custody of goods (protection from theft, damage, weather), Preservation of quality (proper storage conditions), Financing (goods used as collateral for loans), Breaking bulk (receiving large quantities and releasing in smaller lots), Grading and packaging (sorting and repacking goods), Price stabilization (controlling market supply), Providing warehouse receipts (proof of ownership), Risk bearing (responsibility for stored goods), and Information services (inventory management, tracking). These services add value and facilitate trade.",
              keyPoints: [
                "Safe storage: protection from theft, fire, weather",
                "Quality preservation: proper temperature, humidity control",
                "Financing: warehouse receipts used as loan collateral",
                "Banks lend against stored goods",
                "Breaking bulk: receive large quantities, release small lots",
                "Grading: sorting goods by quality",
                "Packaging: repacking in retail-size units, labeling",
                "Blending: mixing commodities to required specifications",
                "Price stabilization: controlled release prevents gluts",
                "Processing: some warehouses offer light processing",
                "Record keeping: inventory tracking and management",
                "Loading and unloading services",
                "Transportation arrangements",
                "Modern warehouses: automated systems, technology integration"
              ]
            }
          ],
          objectives: [
            "Define warehousing and explain its importance",
            "Identify and describe types of warehouses",
            "Explain the functions of warehouses",
            "Discuss the role of bonded warehouses in international trade",
            "Analyze how warehousing facilitates commerce"
          ]
        },
        {
          title: "Insurance",
          subtopics: [
            {
              title: "Meaning and Principles of Insurance",
              content: "Insurance is a contract whereby one party (insurer) undertakes to compensate another party (insured) for losses arising from specified risks in exchange for premiums. It provides financial protection and peace of mind. Fundamental principles: Utmost Good Faith (full disclosure of material facts), Insurable Interest (must have financial interest in subject matter), Indemnity (compensation for actual loss, not profit), Subrogation (insurer assumes insured's rights to recover from third party), Contribution (multiple insurers share proportionally), Proximate Cause (loss must result from insured peril).",
              keyPoints: [
                "Insurance: contract to compensate for specified losses",
                "Insurer: insurance company providing cover",
                "Insured: person/business seeking protection",
                "Premium: regular payment for insurance cover",
                "Policy: written contract document",
                "Claim: request for compensation after loss",
                "Utmost good faith (uberrima fides): full honest disclosure required",
                "Concealment or misrepresentation voids policy",
                "Insurable interest: must suffer financial loss",
                "Indemnity: restore to pre-loss position, no profit",
                "Subrogation: insurer can pursue responsible third party",
                "Contribution: multiple insurers share proportionally",
                "Proximate cause: loss directly from insured risk"
              ]
            },
            {
              title: "Types of Insurance",
              content: "Insurance is broadly classified into: Life Assurance (pays on death or maturity, provides long-term savings and family protection, types: whole life, term, endowment), and General Insurance covering various risks: Fire Insurance (protects against fire damage to property), Marine Insurance (covers goods in transit by sea, also ships - types: voyage, time, mixed), Motor Insurance (vehicles - third party, comprehensive), Burglary/Theft Insurance, Accident Insurance, Health Insurance, Liability Insurance, and Fidelity Guarantee (employer protection from employee dishonesty).",
              keyPoints: [
                "Life Assurance: pays fixed sum on death or maturity",
                "Not indemnity - pays agreed amount regardless of loss",
                "Whole life: pays on death whenever it occurs",
                "Term life: covers specific period only",
                "Endowment: pays on death or after fixed term",
                "Provides savings and family financial security",
                "General Insurance: covers specific risks",
                "Fire insurance: protects buildings, contents, stock from fire",
                "Marine insurance: cargo insurance (goods) and hull insurance (ships)",
                "Types: voyage (single trip), time (period), mixed",
                "Motor insurance: third party (legal minimum), comprehensive (all risks)",
                "Burglary: protects against theft with forcible entry",
                "Accident: personal injury compensation",
                "Health: medical expenses coverage",
                "Liability: legal liability to third parties",
                "Fidelity guarantee: employee dishonesty"
              ]
            },
            {
              title: "Importance of Insurance in Commerce",
              content: "Insurance plays crucial roles in facilitating commerce: Risk management (protects against financial losses from various perils), Encourages trade (traders willing to take risks knowing insurance covers losses), Facilitates credit (banks require insurance on loan collateral), Capital formation (life insurance premiums pooled and invested), Provides employment (agents, underwriters, claims adjusters), Promotes international trade (marine insurance essential), Peace of mind (businesses and individuals can operate confidently), Compensates victims (third-party insurance), and Contributes to economic development (insurance funds invested in economy).",
              keyPoints: [
                "Overcomes risk barrier in commerce",
                "Encourages business activities and trade",
                "Protects against losses from fire, theft, accidents, etc.",
                "Facilitates loans: banks require insurance on collateral",
                "Promotes international trade: marine insurance essential",
                "Capital formation: premiums collected and invested",
                "Provides employment in insurance sector",
                "Distributes risk across many insured parties",
                "Prevents financial ruin from large losses",
                "Compensates injured third parties",
                "Promotes investment: reduces risk",
                "Social security: life and health insurance",
                "Economic development: insurance funds invested in projects",
                "Peace of mind for business owners and individuals"
              ]
            },
            {
              title: "Insurance Documents and Procedures",
              content: "Key insurance documents and processes: Proposal Form (application with details of risk), Policy Document (contract between insurer and insured), Cover Note (temporary coverage while policy processed), Premium Receipt (proof of payment), Endorsement (amendment to existing policy), Certificate of Insurance (proof of insurance, especially motor), Claim Form (request for compensation), Surveyor's Report (assessment of loss), and Discharge Voucher (confirms claim settlement). Process: complete proposal, pay premium, receive policy, in case of loss - notify insurer, complete claim form, surveyor assesses, claim approved and paid.",
              keyPoints: [
                "Proposal form: application for insurance",
                "Must provide accurate information (utmost good faith)",
                "Premium quotation: cost of insurance",
                "Cover note: temporary insurance until policy issued",
                "Policy document: formal contract of insurance",
                "Contains: parties, subject matter, premium, period, risks covered, exclusions",
                "Premium receipt: proof of payment",
                "Endorsement: modification to policy terms",
                "Certificate of insurance: proof of cover (motor insurance)",
                "Claim form: completed when loss occurs",
                "Loss adjuster/surveyor: assesses extent of loss",
                "Discharge voucher: confirms claim payment",
                "Process: propose → premium → policy → loss → claim → assessment → payment",
                "Time limits apply for notifying losses and making claims"
              ]
            }
          ],
          objectives: [
            "Define insurance and explain its principles",
            "Classify and describe types of insurance",
            "Explain the importance of insurance in commerce",
            "Identify key insurance documents",
            "Describe the procedure for making insurance claims"
          ]
        }
      ]
    }
  },
  {
    id: "com-5",
    subjectId: "commerce",
    title: "Aids to Trade - Banking and Communication",
    order: 5,
    content: {
      overview: "Banking provides financial services essential for commerce, while communication facilitates information exchange. Both are critical aids to trade that support modern business operations.",
      topics: [
        {
          title: "Banking",
          subtopics: [
            {
              title: "Meaning and Functions of Banks",
              content: "Banks are financial institutions that accept deposits, lend money, and provide various financial services. Commercial banks are the most common type, serving businesses and individuals. Functions: Accepting deposits (current, savings, fixed), Lending money (loans, overdrafts), Payment services (checks, transfers), Safe custody (valuables in safe deposit boxes), Foreign exchange services, Financial advice, Facilitating trade (letters of credit, bank guarantees), Acting as referees and trustees, and Creating money through credit creation. Banks mobilize savings for productive investment.",
              keyPoints: [
                "Banks: financial institutions accepting deposits and lending",
                "Commercial banks: serve general public and businesses",
                "Accept deposits: current accounts (no interest, withdrawable), savings (interest, some restrictions), fixed/term deposits (highest interest, fixed period)",
                "Lend money: loans (lump sum, fixed term), overdrafts (flexible)",
                "Interest: banks pay on deposits, charge on loans",
                "Payment services: checks, electronic transfers, standing orders, direct debits",
                "Safe custody: safe deposit boxes for valuables",
                "Foreign exchange: currency conversion, forex services",
                "Financial advice and investment services",
                "Trade facilitation: letters of credit, bank guarantees",
                "Act as referees: provide credit references",
                "Trustees and executors: manage estates",
                "Credit creation: lending creates money supply"
              ]
            },
            {
              title: "Types of Banks and Financial Institutions",
              content: "Various types of banks and financial institutions serve different purposes: Commercial/Retail Banks (everyday banking for individuals and businesses), Investment Banks (corporate finance, mergers, underwriting), Central Bank (government's bank, monetary policy, issues currency, regulates banking system), Development Banks (long-term financing for development projects), Merchant Banks (corporate clients, trade finance), Savings and Loan institutions, Microfinance Banks (small loans to low-income groups), and Non-bank Financial Institutions (insurance companies, pension funds, finance companies).",
              keyPoints: [
                "Commercial banks: retail banking, deposits, loans, payments",
                "Examples: First Bank, GTBank, Access Bank, UBA",
                "Investment banks: corporate finance, IPOs, mergers & acquisitions",
                "Central Bank: apex bank, banker's bank",
                "Functions: issue currency, monetary policy, bank regulation",
                "Central Bank of Nigeria (CBN)",
                "Development banks: long-term project financing",
                "Examples: World Bank, African Development Bank",
                "Merchant banks: wholesale banking, corporate clients",
                "Trade finance, foreign exchange",
                "Microfinance banks: small loans to poor, rural areas",
                "Promote financial inclusion",
                "Savings institutions: mobilize savings (e.g., credit unions)",
                "Mortgage banks: housing finance",
                "Non-bank financial institutions: insurance, pensions, leasing"
              ]
            },
            {
              title: "Means of Payment in Commerce",
              content: "Various instruments facilitate payments in commercial transactions: Cash (notes and coins - simple but risky for large amounts), Checks (written orders to bank to pay - safe, convenient, traceable), Bank Drafts (bank's own check - more secure than personal check), Money Orders (post office payment - for remittances), Credit/Debit Cards (electronic payments - convenient, widely accepted), Electronic Funds Transfer (EFT) including internet and mobile banking, Standing Orders and Direct Debits (automated recurring payments), and Letters of Credit (bank guarantee for international trade).",
              keyPoints: [
                "Cash: notes and coins - immediate, no record, risky for large sums",
                "Checks: written order to bank to pay",
                "Types: open check (cash across counter), crossed check (account only, safer)",
                "Bearer check: pays holder, Order check: pays specified person",
                "Advantages: safe, convenient, evidence, can be stopped",
                "Bank draft: bank's check, more secure than personal check",
                "Money order: postal service, for remittances",
                "Credit cards: buy now, pay later (interest charged)",
                "Debit cards: immediate deduction from account",
                "ATM cards: automated teller machine withdrawals",
                "Electronic Funds Transfer (EFT): online/mobile banking",
                "Standing order: fixed amount, regular intervals (e.g., rent)",
                "Direct debit: variable amounts (e.g., utility bills)",
                "Letter of credit: bank guarantee in international trade",
                "Cryptocurrencies: emerging digital currencies"
              ]
            },
            {
              title: "E-banking and Mobile Money",
              content: "Electronic banking (e-banking) uses technology for banking services without visiting branches. Services include: Internet banking (online account management, transfers, bill payments), Mobile banking (banking via mobile apps), ATMs (cash withdrawal, deposits, inquiries), POS terminals (electronic payments at merchants), Mobile money (M-Pesa, mobile wallets for transfers and payments). Advantages: convenience (24/7 access), time-saving, lower costs, wider reach. Challenges: cybersecurity risks, digital divide, requires technology literacy, fraud concerns. Revolutionizing banking, especially mobile money in developing countries.",
              keyPoints: [
                "E-banking: electronic/digital banking services",
                "Internet banking: online account access, transfers, bill payments",
                "Mobile banking: banking via smartphone apps",
                "ATMs: Automated Teller Machines for cash and services",
                "POS: Point of Sale terminals for card payments",
                "Mobile money: transfers via mobile phone (M-Pesa, Paga)",
                "Especially important where banks limited",
                "Advantages: convenient (24/7), time-saving, cost-effective",
                "Wider reach to remote areas",
                "Faster transactions",
                "Reduced need for physical cash",
                "Challenges: cybersecurity and fraud risks",
                "Requires internet/mobile network",
                "Digital literacy needed",
                "Transforming financial inclusion in Africa"
              ]
            }
          ],
          objectives: [
            "Define banks and explain their functions",
            "Identify types of banks and their roles",
            "Describe various means of payment",
            "Explain e-banking and mobile money services",
            "Discuss the importance of banking in commerce"
          ]
        },
        {
          title: "Communication in Commerce",
          subtopics: [
            {
              title: "Importance and Means of Communication",
              content: "Communication is the exchange of information, ideas, and messages between parties. In commerce, it overcomes the barrier of information, enabling: quick decision-making, coordination between business units, marketing and advertising, customer relations, negotiating contracts, placing orders, and maintaining business relationships. Means of communication: Postal services (letters, parcels), Telecommunications (telephone, mobile), Internet (email, websites, social media), Courier services (express delivery), Advertising media (print, broadcast, digital), and Business documents (invoices, statements, reports). Effective communication is essential for business success.",
              keyPoints: [
                "Communication: exchange of information and ideas",
                "Overcomes information barrier in trade",
                "Enables quick business decisions",
                "Facilitates marketing and customer relations",
                "Coordinates business activities",
                "Postal services: letters, parcels, registered mail",
                "Advantages: written record, low cost",
                "Disadvantages: slow, risk of loss",
                "Telecommunications: telephone, mobile phones",
                "Instant, interactive, but no permanent record",
                "Internet: email, websites, video conferencing, social media",
                "Fast, cheap, global reach",
                "Courier services: express document and parcel delivery",
                "Mass media: newspapers, radio, TV, internet for advertising",
                "Fax: document transmission (declining use)",
                "Business communication: formal, clear, concise",
                "Modern business depends on fast, reliable communication"
              ]
            },
            {
              title: "Advertising and Its Role in Commerce",
              content: "Advertising is paid, non-personal communication promoting products, services, or ideas through various media. Functions: informing consumers about products, persuading to buy, reminding about brands, creating awareness, differentiating from competitors, building brand image. Media: Print (newspapers, magazines), Broadcast (TV, radio), Outdoor (billboards, posters), Digital (websites, social media, search engines), Direct mail. Effective advertising stimulates demand, expands markets, introduces new products, and builds customer loyalty. Essential element of marketing mix.",
              keyPoints: [
                "Advertising: paid promotion of products/services",
                "Functions: inform, persuade, remind, create awareness",
                "Differentiates products from competitors",
                "Builds brand recognition and loyalty",
                "Print media: newspapers, magazines, brochures",
                "Wide reach, permanent, but costly",
                "Broadcast media: television and radio",
                "Mass reach, persuasive, but expensive and fleeting",
                "Outdoor: billboards, posters, transit ads",
                "High visibility, but limited message",
                "Digital: websites, social media, search engines, display ads",
                "Targeted, interactive, measurable, growing rapidly",
                "Direct mail: personalized messages to customers",
                "Advantages: stimulates demand, informs consumers, expands markets",
                "Introduces new products, builds brand image",
                "Disadvantages: costly, can be misleading",
                "Ethical concerns: truthfulness, targeting vulnerable groups"
              ]
            }
          ],
          objectives: [
            "Explain the importance of communication in commerce",
            "Describe various means of business communication",
            "Discuss the role and functions of advertising",
            "Identify different advertising media",
            "Evaluate effectiveness of communication methods"
          ]
        }
      ]
    }
  }
];
