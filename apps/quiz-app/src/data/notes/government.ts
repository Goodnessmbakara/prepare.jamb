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

export const governmentNotes: StudyNote[] = [
  {
    id: "gov-1",
    subjectId: "government",
    title: "Introduction to Government",
    order: 1,
    content: {
      overview: "Government is the system or machinery through which the affairs of a state are directed and controlled. It encompasses the institutions, people, and procedures through which laws are made and enforced.",
      topics: [
        {
          title: "Meaning and Definition of Government",
          subtopics: [
            {
              title: "What is Government?",
              content: "Government refers to the process of governing a state or community. It can be defined in three main ways: as an institution (the machinery of state), as a process (the act of governing), and as an academic field of study. Government is essential for maintaining law and order, providing public services, and ensuring the welfare of citizens.",
              keyPoints: [
                "Government as an institution - the structures and organizations that make and enforce laws",
                "Government as a process - the activities involved in making and implementing policies",
                "Government as an academic discipline - the systematic study of political systems",
                "Essential for maintaining order and security in society",
                "Provides framework for social cooperation and development"
              ]
            },
            {
              title: "Functions of Government",
              content: "Government performs numerous vital functions including: maintaining law and order through police and judiciary, defending the nation from external threats, providing social services like education and healthcare, managing the economy, building infrastructure, conducting foreign relations, and protecting citizens' rights and freedoms.",
              keyPoints: [
                "Law making and enforcement (legislative and judicial functions)",
                "National defense and security",
                "Provision of social services (education, healthcare, welfare)",
                "Economic management and regulation",
                "Infrastructure development",
                "Diplomatic relations with other countries",
                "Protection of human rights and civil liberties"
              ]
            }
          ],
          objectives: [
            "Define government in its various contexts",
            "Explain the importance of government in society",
            "Identify the major functions of government",
            "Distinguish between government as institution, process, and field of study"
          ]
        },
        {
          title: "Types and Forms of Government",
          subtopics: [
            {
              title: "Classification of Government",
              content: "Governments can be classified based on different criteria: by power distribution (unitary, federal, confederation), by legitimacy (constitutional, unconstitutional), by participation (democratic, autocratic), and by heredity (monarchy, republic). Each classification reveals important characteristics about how power is organized and exercised.",
              keyPoints: [
                "Unitary government - power concentrated at the center",
                "Federal government - power divided between central and regional governments",
                "Confederation - loose association of independent states",
                "Constitutional government - operates within legal framework",
                "Democratic government - power derived from the people",
                "Autocratic government - power concentrated in one person or group"
              ]
            },
            {
              title: "Democracy",
              content: "Democracy is a system of government where power resides with the people. It exists in two main forms: direct democracy (citizens directly participate in decision-making) and representative democracy (citizens elect representatives). Key features include free and fair elections, rule of law, separation of powers, fundamental human rights, and accountability of government to the people.",
              keyPoints: [
                "Direct democracy - citizens vote directly on issues (e.g., ancient Athens, Swiss referendums)",
                "Representative democracy - citizens elect representatives to make decisions",
                "Free and fair elections are essential",
                "Majority rule with minority rights protection",
                "Freedom of expression and press",
                "Independent judiciary",
                "Separation of powers between arms of government"
              ]
            },
            {
              title: "Monarchy",
              content: "Monarchy is a form of government headed by a monarch (king, queen, emperor) who usually inherits the position. Absolute monarchy gives unlimited power to the monarch, while constitutional monarchy limits the monarch's power through a constitution, with real power held by elected officials. Examples include the United Kingdom (constitutional), Saudi Arabia (absolute).",
              keyPoints: [
                "Leadership by hereditary ruler (king, queen, emperor)",
                "Absolute monarchy - monarch has unlimited power",
                "Constitutional monarchy - monarch's powers limited by constitution",
                "Modern monarchies are mostly ceremonial",
                "Examples: UK, Japan, Spain (constitutional); Saudi Arabia, Brunei (absolute)"
              ]
            },
            {
              title: "Republicanism",
              content: "A republic is a form of government where the head of state is elected, not hereditary. Citizens have sovereign power and elect representatives to govern on their behalf. Key principles include popular sovereignty, political equality, civic virtue, and the rule of law. Most modern democracies are republics.",
              keyPoints: [
                "Head of state is elected (President)",
                "Power derives from the people",
                "No hereditary positions",
                "Representatives accountable to citizens",
                "Examples: United States, France, Nigeria",
                "Can be presidential or parliamentary system"
              ]
            },
            {
              title: "Autocracy and Totalitarianism",
              content: "Autocracy is a system where one person holds absolute power. Totalitarianism is an extreme form where the government seeks total control over all aspects of life. These systems lack checks and balances, suppress opposition, limit freedoms, and often use propaganda and repression. Examples include Nazi Germany, Stalin's Soviet Union, and North Korea.",
              keyPoints: [
                "Power concentrated in one individual or small group",
                "No genuine elections or political competition",
                "Suppression of opposition and dissent",
                "Limited civil liberties and human rights",
                "State control over media and information",
                "Use of secret police and surveillance",
                "Examples: dictatorships, military regimes, one-party states"
              ]
            }
          ],
          objectives: [
            "Classify governments based on various criteria",
            "Explain the principles and features of democracy",
            "Distinguish between different forms of monarchy",
            "Compare republican and monarchical systems",
            "Identify characteristics of autocratic governments"
          ]
        }
      ]
    }
  },
  {
    id: "gov-2",
    subjectId: "government",
    title: "Political Systems and Ideologies",
    order: 2,
    content: {
      overview: "Political systems and ideologies shape how governments operate and what values they prioritize. Understanding different systems helps explain variations in governance across countries and historical periods.",
      topics: [
        {
          title: "Major Political Ideologies",
          subtopics: [
            {
              title: "Capitalism",
              content: "Capitalism is an economic and political ideology based on private ownership of the means of production and free market principles. Key features include private property rights, profit motive, competition, limited government intervention, and market-determined prices. Proponents argue it promotes efficiency, innovation, and economic growth, while critics point to inequality and market failures.",
              keyPoints: [
                "Private ownership of businesses and property",
                "Free market determines prices and production",
                "Competition drives innovation and efficiency",
                "Profit motive as primary incentive",
                "Limited government intervention in economy",
                "Examples: United States, Singapore, Hong Kong",
                "Criticism: inequality, exploitation, boom-bust cycles"
              ]
            },
            {
              title: "Socialism",
              content: "Socialism advocates for social ownership and democratic control of the means of production. It emphasizes equality, collective welfare, and government involvement in economic planning. Socialism exists on a spectrum from democratic socialism (combining socialist economics with political democracy) to more authoritarian forms. Key principles include wealth redistribution, social welfare programs, and reducing economic inequality.",
              keyPoints: [
                "Social or state ownership of major industries",
                "Economic planning and regulation",
                "Emphasis on equality and social welfare",
                "Redistribution of wealth through taxation",
                "Universal public services (healthcare, education)",
                "Democratic socialism vs. authoritarian socialism",
                "Examples: Scandinavian countries (democratic socialism), Cuba, Vietnam"
              ]
            },
            {
              title: "Communism",
              content: "Communism is a political and economic ideology advocating for a classless society where all property is publicly owned and each person works and is paid according to their abilities and needs. Based on Karl Marx's theories, it seeks to eliminate private ownership of the means of production. In practice, communist states have been characterized by one-party rule, central planning, and state ownership of resources.",
              keyPoints: [
                "Classless society with no private property",
                "Common ownership of means of production",
                "Distribution based on need, not wealth",
                "Abolition of capitalism and class distinctions",
                "One-party state in practice",
                "Central economic planning",
                "Historical examples: Soviet Union, China (Maoist era), Cuba",
                "Criticism: lack of incentives, authoritarianism, economic inefficiency"
              ]
            },
            {
              title: "Fascism",
              content: "Fascism is an authoritarian, ultranationalist ideology characterized by dictatorial power, forcible suppression of opposition, and strong regimentation of society and economy. It emphasizes national unity, often based on race or ethnicity, militarism, and opposition to democracy and liberalism. Historical fascist regimes include Nazi Germany and Mussolini's Italy.",
              keyPoints: [
                "Extreme nationalism and racial superiority claims",
                "Authoritarian dictatorship",
                "Suppression of opposition through violence",
                "Rejection of democracy and individual rights",
                "Militarism and glorification of war",
                "State control of society and economy",
                "Historical examples: Nazi Germany, Fascist Italy",
                "Characteristics: propaganda, secret police, cult of personality"
              ]
            }
          ],
          objectives: [
            "Explain the principles of major political ideologies",
            "Compare and contrast capitalism and socialism",
            "Describe the features of communist systems",
            "Identify the characteristics of fascism",
            "Analyze the strengths and weaknesses of different ideologies"
          ]
        },
        {
          title: "Systems of Government",
          subtopics: [
            {
              title: "Presidential System",
              content: "The presidential system features separation of powers between the executive and legislative branches. The president serves as both head of state and head of government, is directly elected, and serves a fixed term. The president cannot dissolve the legislature, and the legislature cannot remove the president except through impeachment. Examples include the United States and Nigeria.",
              keyPoints: [
                "President as both head of state and government",
                "Direct election of president by the people",
                "Fixed term of office",
                "Clear separation between executive and legislature",
                "President cannot dissolve legislature",
                "Checks and balances between branches",
                "Cabinet members appointed by president, not from legislature",
                "Examples: USA, Nigeria, Brazil, Mexico"
              ]
            },
            {
              title: "Parliamentary System",
              content: "In a parliamentary system, the executive branch derives its legitimacy from and is accountable to the legislature. The head of government (prime minister) is typically the leader of the majority party in parliament. The head of state (monarch or president) is separate and largely ceremonial. The government can be dissolved through a vote of no confidence. Examples include the United Kingdom, Canada, and India.",
              keyPoints: [
                "Fusion of executive and legislative powers",
                "Prime Minister as head of government",
                "Separate ceremonial head of state (monarch or president)",
                "Prime Minister chosen from parliament",
                "Government accountable to parliament",
                "Parliament can dismiss government through no-confidence vote",
                "Flexible term length",
                "Examples: UK, Canada, India, Japan, Australia"
              ]
            },
            {
              title: "Federal System",
              content: "Federalism is a system where power is divided between a central government and regional governments (states, provinces). Both levels have defined powers, and neither can abolish the other. The constitution distributes powers through exclusive lists (federal powers), concurrent lists (shared powers), and residual powers (state powers). Examples include Nigeria, USA, Canada, and Germany.",
              keyPoints: [
                "Power divided between central and regional governments",
                "Written constitution defines power distribution",
                "Both levels of government have sovereignty in their spheres",
                "Exclusive federal powers (defense, foreign policy, currency)",
                "Concurrent powers (taxation, education, health)",
                "Residual powers belong to states",
                "Supreme court interprets federal-state conflicts",
                "Examples: USA, Nigeria, Canada, India, Germany"
              ]
            },
            {
              title: "Unitary System",
              content: "A unitary system concentrates power in the central government, which delegates limited powers to regional or local authorities. These sub-national units have no constitutional sovereignty and can be created, modified, or abolished by the central government. Most countries in the world use unitary systems. Examples include France, Japan, and Ghana.",
              keyPoints: [
                "Power centralized in national government",
                "Local governments exist at the pleasure of central government",
                "Uniform laws and policies nationwide",
                "Easier policy coordination and implementation",
                "More efficient for small, homogeneous countries",
                "Local units have delegated, not constitutional, powers",
                "Examples: UK, France, Japan, Ghana, Kenya",
                "Advantages: unity, efficiency; Disadvantages: may ignore local needs"
              ]
            }
          ],
          objectives: [
            "Distinguish between presidential and parliamentary systems",
            "Explain the principles of federalism",
            "Compare federal and unitary systems",
            "Identify advantages and disadvantages of each system",
            "Analyze which system suits different political contexts"
          ]
        }
      ]
    }
  },
  {
    id: "gov-3",
    subjectId: "government",
    title: "The Constitution",
    order: 3,
    content: {
      overview: "A constitution is the fundamental law of a country that establishes the framework of government, defines governmental powers, and protects citizens' rights. Understanding constitutions is essential for grasping how governments operate within legal boundaries.",
      topics: [
        {
          title: "Nature and Types of Constitutions",
          subtopics: [
            {
              title: "Definition and Importance of Constitution",
              content: "A constitution is a body of fundamental principles or established precedents according to which a state is governed. It defines the structure, powers, and duties of government institutions and establishes the rights and duties of citizens. Constitutions provide legitimacy to government, limit arbitrary power, protect fundamental rights, and establish the rule of law.",
              keyPoints: [
                "Supreme law of the land",
                "Establishes government structure and powers",
                "Defines relationship between government and citizens",
                "Protects fundamental rights and freedoms",
                "Provides legitimacy and stability",
                "Source of authority for all other laws",
                "Limits arbitrary exercise of power",
                "Framework for peaceful political change"
              ]
            },
            {
              title: "Written and Unwritten Constitutions",
              content: "A written constitution is contained in a single document or series of documents (e.g., USA, Nigeria). An unwritten constitution consists of various sources including statutes, conventions, judicial decisions, and historical documents (e.g., United Kingdom). Written constitutions are typically more rigid and provide clearer guidelines, while unwritten constitutions are more flexible but may lack clarity.",
              keyPoints: [
                "Written: codified in one or more formal documents",
                "Written examples: USA (1787), Nigeria (1999), India (1950)",
                "Unwritten: based on customs, conventions, and scattered documents",
                "Unwritten example: United Kingdom",
                "Written constitutions are usually more rigid",
                "Unwritten constitutions are more flexible",
                "Most countries have written constitutions",
                "Both types can be effective depending on context"
              ]
            },
            {
              title: "Rigid and Flexible Constitutions",
              content: "A rigid constitution requires special procedures for amendment, such as supermajorities, referendums, or state approvals (e.g., USA, Nigeria). A flexible constitution can be amended through ordinary legislative processes like regular laws (e.g., UK). Rigid constitutions provide stability and protect fundamental principles, while flexible constitutions allow easier adaptation to changing circumstances.",
              keyPoints: [
                "Rigid: difficult to amend, requires special procedures",
                "Rigid examples: USA (2/3 Congress + 3/4 states), Nigeria (2/3 majority + states)",
                "Flexible: amended through normal legislative process",
                "Flexible example: UK Parliament can change constitutional matters by simple majority",
                "Rigid constitutions protect fundamental rights better",
                "Flexible constitutions adapt more easily to change",
                "Most written constitutions are rigid",
                "Unwritten constitutions tend to be flexible"
              ]
            },
            {
              title: "Federal and Unitary Constitutions",
              content: "A federal constitution divides power between central and regional governments, with each level having defined spheres of authority (e.g., USA, Nigeria, Canada). A unitary constitution concentrates power in the central government (e.g., France, Japan, Ghana). Federal constitutions typically have mechanisms for resolving conflicts between levels of government.",
              keyPoints: [
                "Federal constitution: divides power between levels of government",
                "Unitary constitution: centralizes power in national government",
                "Federal systems have exclusive, concurrent, and residual powers",
                "Federal examples: USA, Nigeria, Canada, India, Germany",
                "Unitary examples: UK, France, Japan, Ghana",
                "Federal systems suit large, diverse countries",
                "Unitary systems provide uniform governance",
                "Constitution defines federal-state relationship"
              ]
            }
          ],
          objectives: [
            "Define constitution and explain its importance",
            "Distinguish between written and unwritten constitutions",
            "Compare rigid and flexible constitutions",
            "Explain federal and unitary constitutions",
            "Analyze advantages and disadvantages of different types"
          ]
        },
        {
          title: "Constitutional Development in Nigeria",
          subtopics: [
            {
              title: "Pre-Independence Constitutions",
              content: "Nigeria's constitutional development began with the Clifford Constitution (1922), which introduced elective principle. The Richards Constitution (1946) introduced regionalism. The Macpherson Constitution (1951) increased Nigerian participation in government. The Lyttleton Constitution (1954) established federalism. These constitutions progressively increased Nigerian representation and self-governance, laying groundwork for independence.",
              keyPoints: [
                "Clifford Constitution (1922): first elective principle in Lagos and Calabar",
                "Richards Constitution (1946): created three regions (North, West, East)",
                "Macpherson Constitution (1951): increased African representation, created central legislature",
                "Lyttleton Constitution (1954): established true federalism, created Federal Supreme Court",
                "Each constitution increased Nigerian participation",
                "Gradual transition from colonial rule to self-government",
                "Introduction of regional autonomy",
                "Foundation for independence constitution"
              ]
            },
            {
              title: "Independence and Republican Constitutions",
              content: "The Independence Constitution (1960) established Nigeria as independent with the British monarch as head of state. The Republican Constitution (1963) made Nigeria a republic with an elected President as head of state. Both maintained parliamentary system with regional structure. Features included fundamental human rights, federal system, bicameral legislature, and independent judiciary.",
              keyPoints: [
                "Independence Constitution (1960): Nigeria gained independence",
                "Parliamentary system with Prime Minister",
                "British monarch as ceremonial head of state",
                "Republican Constitution (1963): Nigeria became a republic",
                "President replaced monarch as head of state",
                "Maintained parliamentary federalism",
                "Three regions: North, West, East (Mid-West added 1963)",
                "Fundamental human rights enshrined"
              ]
            },
            {
              title: "Military Era Constitutions",
              content: "Military rule (1966-1979, 1983-1999) suspended civilian constitutions. Military decrees replaced laws. Despite this, constitution-making continued. The 1979 Constitution introduced presidential system modeled on USA, with executive president, separation of powers, and 19 states. It provided for return to civilian rule and remains the basis for current democracy.",
              keyPoints: [
                "Military coups suspended civilian constitutions (1966, 1983)",
                "Government by military decrees, not democratic process",
                "1979 Constitution: transition to Second Republic",
                "Introduced presidential system (American model)",
                "Executive president elected for four-year term",
                "Separation of powers between arms of government",
                "Federal system with 19 states",
                "Fundamental rights and directive principles",
                "Foundation for current democratic governance"
              ]
            },
            {
              title: "The 1999 Constitution",
              content: "The 1999 Constitution restored democracy after military rule. It established presidential federalism with 36 states and Federal Capital Territory. Key features include fundamental rights, separation of powers, federal character principle, independent judiciary, National Assembly, and provisions for amendments. It has been amended several times to address emerging issues.",
              keyPoints: [
                "Promulgated to end military rule and restore democracy",
                "Presidential system of government",
                "Federal structure with 36 states and FCT",
                "Fundamental human rights (Chapter IV)",
                "Separation of powers: executive, legislature, judiciary",
                "Federal character principle for national unity",
                "Independent National Electoral Commission (INEC)",
                "Amendment requires 2/3 National Assembly + 2/3 State Houses of Assembly",
                "Several amendments since 1999"
              ]
            }
          ],
          objectives: [
            "Trace the constitutional development of Nigeria",
            "Explain the features of pre-independence constitutions",
            "Compare the 1960 and 1963 constitutions",
            "Describe the impact of military rule on constitutional development",
            "Analyze the main features of the 1999 Constitution"
          ]
        },
        {
          title: "Constitutional Principles and Rights",
          subtopics: [
            {
              title: "Fundamental Human Rights",
              content: "Fundamental human rights are basic rights and freedoms guaranteed to all citizens by the constitution. In Nigeria's 1999 Constitution (Chapter IV), these include: right to life, dignity, personal liberty, fair hearing, privacy, freedom of thought and religion, expression, assembly, movement, and freedom from discrimination. These rights can be enforced by courts and can only be limited by law in specific circumstances.",
              keyPoints: [
                "Right to life (Section 33)",
                "Right to dignity of human person (Section 34)",
                "Right to personal liberty (Section 35)",
                "Right to fair hearing (Section 36)",
                "Right to private and family life (Section 37)",
                "Right to freedom of thought, conscience, and religion (Section 38)",
                "Right to freedom of expression and press (Section 39)",
                "Right to peaceful assembly and association (Section 40)",
                "Right to freedom of movement (Section 41)",
                "Right to freedom from discrimination (Section 42)",
                "Enforceable in courts of law",
                "Can be limited in specific circumstances (public interest, security)"
              ]
            },
            {
              title: "Rule of Law",
              content: "The rule of law means that law is supreme and applies equally to all citizens, including government officials. Key principles include: supremacy of law over arbitrary power, equality before the law, protection of rights by independent courts, and accountability of government. A.V. Dicey identified these principles. The rule of law prevents tyranny and ensures justice.",
              keyPoints: [
                "Supremacy of law over arbitrary power",
                "No one is above the law, including government officials",
                "Equality before the law for all citizens",
                "Rights protected by independent judiciary",
                "Laws must be clear, publicized, and prospective",
                "Fair trial and due process guaranteed",
                "Government accountable under the law",
                "A.V. Dicey's three principles of rule of law",
                "Essential for democracy and human rights protection",
                "Prevents abuse of power and tyranny"
              ]
            },
            {
              title: "Separation of Powers",
              content: "Separation of powers divides government functions among three branches to prevent concentration of power: Legislature (makes laws), Executive (implements laws), and Judiciary (interprets laws and adjudicates disputes). Each branch has independent powers and checks the others. This system, advocated by Montesquieu, prevents tyranny and protects liberty through checks and balances.",
              keyPoints: [
                "Legislature: makes laws (National Assembly in Nigeria)",
                "Executive: implements and enforces laws (President and ministries)",
                "Judiciary: interprets laws and administers justice (Courts)",
                "Each branch has distinct functions",
                "Checks and balances prevent abuse of power",
                "Independence of each branch essential",
                "Legislature can override executive veto",
                "Judiciary reviews laws for constitutionality",
                "Executive appoints judges with legislative approval",
                "Montesquieu's principle for preventing tyranny"
              ]
            },
            {
              title: "Citizenship and Nationality",
              content: "Citizenship defines membership in a political community with associated rights and responsibilities. Nigerian citizenship is acquired by birth, registration, or naturalization. Citizens have rights (vote, hold office, protection) and duties (obey laws, pay taxes, defend nation). Dual citizenship is now recognized. Citizenship can be lost through renunciation, acquisition of foreign citizenship (with exceptions), or by order of court.",
              keyPoints: [
                "Citizenship by birth: parent is Nigerian or born in Nigeria",
                "Citizenship by registration: marriage to Nigerian",
                "Citizenship by naturalization: foreign nationals meeting requirements",
                "Rights of citizens: vote, hold office, protection abroad",
                "Duties: obey laws, pay taxes, defend nation, respect others",
                "Dual citizenship permitted (2005 amendment)",
                "Loss of citizenship: renunciation, court order",
                "Certificate of naturalization for foreign nationals",
                "Distinction between citizens and non-citizens",
                "Federal character principle promotes national unity"
              ]
            }
          ],
          objectives: [
            "List and explain fundamental human rights in Nigeria",
            "Explain the principle of rule of law",
            "Describe the doctrine of separation of powers",
            "Discuss citizenship in Nigeria",
            "Analyze the relationship between rights and duties"
          ]
        }
      ]
    }
  },
  {
    id: "gov-4",
    subjectId: "government",
    title: "Arms and Structure of Government",
    order: 4,
    content: {
      overview: "Government operates through three main arms: the Legislature, Executive, and Judiciary. Each arm has specific functions, powers, and relationships with the others. Understanding these structures is crucial for analyzing how governments function.",
      topics: [
        {
          title: "The Legislature",
          subtopics: [
            {
              title: "Functions and Powers of the Legislature",
              content: "The legislature is the law-making body of government. Its primary function is to make, amend, and repeal laws. Other functions include: approving budgets and taxation, checking the executive through oversight, approving appointments, representing constituents, debating national issues, and in some systems, forming the executive. The legislature ensures democratic accountability and represents popular will.",
              keyPoints: [
                "Primary function: making, amending, and repealing laws",
                "Financial control: approving budgets, authorizing taxes and expenditure",
                "Oversight of executive: questioning ministers, investigating government actions",
                "Approval of appointments: judges, ambassadors, ministers (varies by system)",
                "Representation: members represent constituencies",
                "Debate forum for national issues",
                "Impeachment power in presidential systems",
                "Constitutional amendment power",
                "Ratification of treaties",
                "In parliamentary systems: forming and dismissing government"
              ]
            },
            {
              title: "Unicameral and Bicameral Legislatures",
              content: "Legislatures can be unicameral (one chamber) or bicameral (two chambers). Unicameral systems have a single house (e.g., Ghana, Kenya). Bicameral systems have an upper and lower house (e.g., USA: Senate and House; Nigeria: Senate and House of Representatives; UK: House of Lords and Commons). Bicameralism provides checks, represents different interests, and ensures careful consideration of laws.",
              keyPoints: [
                "Unicameral: single legislative chamber",
                "Unicameral examples: Denmark, Finland, Ghana, Kenya",
                "Advantages: efficiency, lower cost, faster legislation",
                "Bicameral: two legislative chambers (upper and lower house)",
                "Bicameral examples: USA, UK, Nigeria, India",
                "Lower house: directly elected, represents population",
                "Upper house: represents states/regions, provides checks",
                "Advantages: better representation, careful deliberation, checks hasty legislation",
                "Nigeria: Senate (109 members) and House of Representatives (360 members)",
                "Federal systems typically use bicameral legislatures"
              ]
            },
            {
              title: "Legislative Process",
              content: "The legislative process is the procedure by which bills become laws. It typically involves: bill introduction, first reading (title read), second reading (principles debated and voted), committee stage (detailed examination), third reading (final debate and vote), passage to other chamber (in bicameral systems), presidential assent or veto, and publication as law. The process ensures thorough examination and democratic deliberation.",
              keyPoints: [
                "Bill introduction: by member, minister, or private member",
                "First reading: title and objectives presented",
                "Second reading: general principles debated and voted",
                "Committee stage: detailed clause-by-clause examination",
                "Report stage: amendments considered",
                "Third reading: final debate and vote",
                "Passage to other chamber (if bicameral)",
                "Presidential/Royal assent or veto",
                "Publication as Act/Law",
                "Process ensures bills are thoroughly examined"
              ]
            },
            {
              title: "The Nigerian National Assembly",
              content: "The Nigerian National Assembly consists of the Senate (109 members: 3 per state plus 1 FCT) and House of Representatives (360 members from constituencies). Members serve 4-year terms. The Senate President and Speaker of the House lead the chambers. Functions include law-making, budget approval, oversight, screening appointments, and representing constituents. The Assembly operates through committees.",
              keyPoints: [
                "Bicameral: Senate and House of Representatives",
                "Senate: 109 members (3 per state + 1 FCT)",
                "House of Representatives: 360 members from constituencies",
                "4-year terms, renewable through election",
                "Senate President and Speaker of House preside",
                "Standing committees for specialized areas",
                "Functions: legislation, budget, oversight, appointments",
                "Can override presidential veto with 2/3 majority",
                "Screening of ministerial and other appointments",
                "Represents diverse Nigerian interests"
              ]
            }
          ],
          objectives: [
            "Explain the functions and powers of the legislature",
            "Compare unicameral and bicameral legislatures",
            "Describe the legislative process",
            "Analyze the structure and functions of the Nigerian National Assembly",
            "Discuss the relationship between legislature and executive"
          ]
        },
        {
          title: "The Executive",
          subtopics: [
            {
              title: "Functions and Powers of the Executive",
              content: "The executive branch implements and enforces laws made by the legislature. Functions include: executing laws, making policies, conducting foreign affairs, appointing officials, commanding armed forces, preparing and executing budgets, granting pardons, declaring emergencies, and providing leadership. In presidential systems, the president heads the executive; in parliamentary systems, the prime minister does.",
              keyPoints: [
                "Implementation and enforcement of laws",
                "Policy formulation and execution",
                "Foreign relations and diplomacy",
                "Appointment of officials (ministers, ambassadors, judges)",
                "Commander-in-chief of armed forces",
                "Budget preparation and execution",
                "Granting of pardons and reprieves",
                "Declaration of state of emergency",
                "Maintenance of law and order",
                "Provision of public services"
              ]
            },
            {
              title: "Types of Executive",
              content: "Executives can be ceremonial (head of state with symbolic role, e.g., British monarch, Israeli president), political/real (exercises actual power, e.g., British PM, Nigerian president), or both combined (president in presidential systems). Nominal executives have formal authority without real power, while effective executives wield actual power. The distinction varies by governmental system.",
              keyPoints: [
                "Nominal/Ceremonial executive: symbolic role, no real power",
                "Examples of ceremonial heads: UK Queen, Indian President, Israeli President",
                "Real/Political executive: exercises actual governmental power",
                "Examples of political executives: UK Prime Minister, Cabinet members",
                "Presidential executive: president is both head of state and government",
                "Examples: USA, Nigeria, France (president has real power)",
                "Parliamentary executive: PM has real power, monarch/president ceremonial",
                "Collective executive: cabinet shares executive power",
                "Singular executive: power concentrated in president/PM",
                "Ministerial responsibility in parliamentary systems"
              ]
            },
            {
              title: "The Nigerian Executive",
              content: "The Nigerian executive is headed by the President, who is both head of state and head of government. The president is elected for a 4-year term (maximum two terms), appoints ministers with Senate approval, and leads the Federal Executive Council. State governors head state executives with similar powers at state level. The executive implements laws, maintains security, conducts foreign policy, and manages the economy.",
              keyPoints: [
                "Presidential system: president heads executive",
                "President elected for 4-year term (maximum 2 terms)",
                "President as head of state and government",
                "Commander-in-chief of armed forces",
                "Appoints ministers with Senate confirmation",
                "Federal Executive Council (FEC): president + ministers",
                "State governors head state executives",
                "Vice President deputizes for president",
                "Presidential powers: assent to bills, appointments, foreign policy",
                "Checks: legislative oversight, judicial review, impeachment possible"
              ]
            },
            {
              title: "The Civil Service",
              content: "The civil service consists of permanent government employees who implement policies and provide continuity. Characteristics include: permanence (not affected by political changes), neutrality (non-partisan), anonymity (work behind the scenes), impartiality, expertise, and merit-based recruitment. The civil service provides administrative support to political executives, advises on policy, and ensures continuity in government.",
              keyPoints: [
                "Permanent body of government employees",
                "Neutrality: serves any government in power",
                "Permanence: not affected by political changes",
                "Anonymity: work behind politicians",
                "Impartiality and objectivity",
                "Merit-based recruitment and promotion",
                "Expertise and professionalism",
                "Functions: policy advice, implementation, record-keeping",
                "Hierarchy from permanent secretaries to clerical staff",
                "Essential for government continuity and efficiency"
              ]
            }
          ],
          objectives: [
            "Explain the functions and powers of the executive",
            "Distinguish between types of executives",
            "Describe the structure of the Nigerian executive",
            "Discuss the role of the civil service",
            "Analyze the relationship between political and administrative executives"
          ]
        },
        {
          title: "The Judiciary",
          subtopics: [
            {
              title: "Functions and Powers of the Judiciary",
              content: "The judiciary interprets and applies the law, settles disputes, protects rights and freedoms, reviews executive actions for legality, and serves as guardian of the constitution. Courts determine the meaning of laws, adjudicate criminal and civil cases, protect fundamental rights, ensure checks on other branches, and maintain rule of law. Judicial independence is essential for impartial justice.",
              keyPoints: [
                "Interpretation of laws and constitution",
                "Adjudication of disputes (criminal and civil cases)",
                "Protection of fundamental human rights",
                "Judicial review: checking executive and legislative actions",
                "Guardian of the constitution",
                "Punishment of offenders",
                "Settlement of election disputes",
                "Issuing of writs (habeas corpus, mandamus, certiorari)",
                "Advisory function in some jurisdictions",
                "Ensuring rule of law and justice"
              ]
            },
            {
              title: "Hierarchy of Courts in Nigeria",
              content: "Nigerian courts are hierarchically organized. At the apex is the Supreme Court (final court of appeal). Below are the Court of Appeal, Federal High Court, State High Courts, Sharia Courts of Appeal, Customary Courts of Appeal, Magistrate Courts, and Customary/Area Courts. Specialized courts handle specific matters. The hierarchy ensures orderly administration of justice with appeals moving upward.",
              keyPoints: [
                "Supreme Court: highest court, final court of appeal",
                "Court of Appeal: hears appeals from lower courts",
                "Federal High Court: federal matters (revenue, banking, admiralty)",
                "State High Courts: unlimited jurisdiction in states",
                "Sharia Courts of Appeal: Islamic law matters",
                "Customary Courts of Appeal: customary law",
                "Magistrate Courts: minor criminal and civil cases",
                "District/Area Courts: local matters",
                "National Industrial Court: labor and employment",
                "Election Petition Tribunals: election disputes",
                "Appeals move upward through hierarchy"
              ]
            },
            {
              title: "Judicial Independence",
              content: "Judicial independence means courts can make decisions free from external pressure or influence from executive, legislature, or private interests. It requires: security of tenure for judges, financial autonomy, immunity from suit for judicial acts, transparent appointment processes, and protection from arbitrary removal. Independence ensures impartial justice, rule of law, and protection of rights against government abuse.",
              keyPoints: [
                "Freedom from executive and legislative control",
                "Security of tenure: judges cannot be arbitrarily removed",
                "Financial security: adequate salaries and budgets",
                "Immunity from suit for judicial decisions",
                "Transparent appointment process",
                "Removal only for misconduct through judicial process",
                "Contempt of court powers to enforce authority",
                "No interference with judicial proceedings",
                "Essential for rule of law and rights protection",
                "Judges decide based on law, not politics"
              ]
            },
            {
              title: "Judicial Review and Activism",
              content: "Judicial review is the power of courts to examine laws and executive actions for constitutionality. Courts can invalidate laws or actions that violate the constitution. Judicial activism refers to courts taking proactive roles in interpreting laws expansively to protect rights and promote justice, sometimes making policy. Critics argue activism oversteps judicial bounds, while supporters see it as necessary for rights protection.",
              keyPoints: [
                "Judicial review: power to declare laws/actions unconstitutional",
                "Supreme Court as guardian of constitution",
                "Courts can invalidate unconstitutional laws",
                "Checks on legislative and executive power",
                "Originated in Marbury v. Madison (USA, 1803)",
                "Judicial activism: expansive interpretation of laws",
                "Activist courts fill policy gaps and protect rights",
                "Judicial restraint: courts defer to elected branches",
                "Balance between judicial power and democratic will",
                "Essential for constitutional supremacy"
              ]
            }
          ],
          objectives: [
            "Explain the functions and powers of the judiciary",
            "Describe the hierarchy of courts in Nigeria",
            "Discuss the importance of judicial independence",
            "Explain judicial review and its significance",
            "Analyze the debate between judicial activism and restraint"
          ]
        }
      ]
    }
  },
  {
    id: "gov-5",
    subjectId: "government",
    title: "Electoral Systems and Processes",
    order: 5,
    content: {
      overview: "Elections are fundamental to democracy, providing the mechanism through which citizens choose their representatives. Understanding electoral systems, processes, and institutions is crucial for effective democratic participation.",
      topics: [
        {
          title: "Meaning and Importance of Elections",
          subtopics: [
            {
              title: "Definition and Purpose of Elections",
              content: "Elections are formal processes through which citizens choose their political representatives and leaders. They are the cornerstone of representative democracy, providing legitimacy to government, ensuring accountability, enabling peaceful transfer of power, and giving citizens voice in governance. Elections must be free, fair, transparent, and credible to serve these purposes effectively.",
              keyPoints: [
                "Formal process of choosing political leaders",
                "Foundation of representative democracy",
                "Provides legitimacy to government",
                "Ensures accountability of leaders to people",
                "Enables peaceful transfer of power",
                "Gives citizens voice in governance",
                "Mechanism for expressing political preferences",
                "Must be free, fair, and credible",
                "Regular elections prevent tyranny",
                "Universal suffrage: right of all adults to vote"
              ]
            },
            {
              title: "Types of Elections",
              content: "Elections can be classified into several types: General elections (for national/state leadership), Primary elections (party nominations), Local elections (local government), By-elections (filling vacant seats), Referendum (direct vote on specific issue), and Recall elections (removing officials before term ends). Each type serves different purposes in democratic governance.",
              keyPoints: [
                "General elections: president, governors, legislators",
                "Primary elections: party candidates selection",
                "Local government elections: councilors, chairmen",
                "By-elections: filling vacant seats before general election",
                "Referendum: direct popular vote on specific issue",
                "Recall elections: voters remove official before term ends",
                "Direct elections: voters directly elect officials",
                "Indirect elections: electoral college or parliament elects",
                "Each type has specific rules and procedures",
                "Timing varies by constitution and electoral law"
              ]
            },
            {
              title: "Principles of Free and Fair Elections",
              content: "Free and fair elections require several essential conditions: universal adult suffrage, equal voting rights (one person one vote), secret ballot, freedom to campaign, independent electoral body, transparent procedures, access for observers, absence of violence or intimidation, fair media coverage, and effective dispute resolution. These principles ensure elections genuinely reflect the will of the people.",
              keyPoints: [
                "Universal adult suffrage: all adults can vote",
                "One person, one vote principle",
                "Secret ballot: no coercion or intimidation",
                "Freedom to campaign and form parties",
                "Independent electoral management body",
                "Transparent voter registration and voting",
                "Equal access to media and resources",
                "Security and absence of violence",
                "Domestic and international observers",
                "Effective dispute resolution mechanisms",
                "Timely announcement of results",
                "Acceptance of results by losers"
              ]
            }
          ],
          objectives: [
            "Define elections and explain their importance",
            "Identify different types of elections",
            "Explain principles of free and fair elections",
            "Discuss the role of elections in democracy",
            "Analyze challenges to electoral integrity"
          ]
        },
        {
          title: "Electoral Systems",
          subtopics: [
            {
              title: "Simple Majority/First-Past-The-Post System",
              content: "In the simple majority or first-past-the-post system, the candidate with the most votes wins, regardless of whether they achieve an absolute majority. Used in UK, USA, India, and Nigeria (legislative elections). Advantages: simple, produces clear winners, strong government. Disadvantages: votes for losers wasted, minority representation limited, may not reflect overall popular will.",
              keyPoints: [
                "Candidate with most votes wins",
                "No requirement for absolute majority (50%+)",
                "Also called 'winner-takes-all' or plurality system",
                "Used in single-member constituencies",
                "Examples: UK, USA, Canada, India, Nigeria (National Assembly)",
                "Advantages: simple, decisive, encourages strong government",
                "Encourages two-party system",
                "Disadvantages: wasted votes, minority under-representation",
                "Winner may have less than 50% of votes",
                "Can produce parliament not reflecting popular vote"
              ]
            },
            {
              title: "Absolute Majority System",
              content: "The absolute majority system requires the winner to obtain more than 50% of votes cast. If no candidate achieves this in the first round, a run-off election is held between the top candidates. Used in France (presidential elections) and Nigeria (presidential and gubernatorial elections). Ensures the winner has majority support but can be expensive and time-consuming.",
              keyPoints: [
                "Winner must obtain more than 50% of votes",
                "Run-off election if no first-round majority",
                "Second ballot between top two candidates",
                "Also called 'two-round system'",
                "Used in France (president), Nigeria (president, governors)",
                "Ensures winner has broad support",
                "Nigeria: winner needs majority + 25% in 2/3 states (president)",
                "Advantages: legitimate mandate, majority support",
                "Disadvantages: expensive, time-consuming, voter fatigue",
                "Encourages coalition-building between rounds"
              ]
            },
            {
              title: "Proportional Representation",
              content: "Proportional representation (PR) allocates seats in proportion to votes received by parties. Common methods include party list PR and mixed-member proportional. Used in many European countries, South Africa, Israel. Advantages: fair representation of all groups, encourages multiparty system, reflects popular will. Disadvantages: coalition governments may be unstable, complex, weakens constituency link.",
              keyPoints: [
                "Seats allocated in proportion to votes",
                "Party list system: vote for party, not individual",
                "Mixed-member: combines constituency and proportional seats",
                "Used in Germany, South Africa, Israel, Netherlands",
                "Encourages multiparty system",
                "Minority groups gain representation",
                "Advantages: fair, reflects popular will, inclusive",
                "Disadvantages: coalition governments, instability, complexity",
                "Weakens representative-constituency link",
                "More parties in parliament"
              ]
            },
            {
              title: "Electoral System in Nigeria",
              content: "Nigeria uses different systems for different elections: Presidential and gubernatorial elections use absolute majority with geographical spread requirement (25% in 2/3 states). Legislative elections use simple majority/first-past-the-post. This hybrid approach aims to ensure broad-based support for chief executives while maintaining simplicity for legislative elections. The system promotes national integration.",
              keyPoints: [
                "Presidential election: absolute majority + 25% in 2/3 of states",
                "Gubernatorial election: absolute majority + 25% in 2/3 of LGAs",
                "National Assembly: simple majority in constituencies",
                "State Assembly: simple majority in constituencies",
                "Local government: simple majority",
                "Geographical spread requirement promotes national unity",
                "Run-off if no candidate meets requirements",
                "Four-year terms for all elected officials",
                "Maximum of two terms for president and governors",
                "Aims to balance effectiveness and representation"
              ]
            }
          ],
          objectives: [
            "Explain different electoral systems",
            "Compare simple majority and absolute majority systems",
            "Describe proportional representation",
            "Analyze the electoral system used in Nigeria",
            "Evaluate advantages and disadvantages of each system"
          ]
        },
        {
          title: "Electoral Institutions and Processes",
          subtopics: [
            {
              title: "Independent National Electoral Commission (INEC)",
              content: "INEC is Nigeria's electoral management body established by the 1999 Constitution. It conducts elections, registers voters and parties, delimits constituencies, monitors party finances, and educates voters. INEC's independence is crucial for credible elections. The Chairman and National Commissioners are appointed by the President with Senate confirmation for five-year terms. Resident Electoral Commissioners manage state-level operations.",
              keyPoints: [
                "Established by 1999 Constitution (Section 153)",
                "Independent body for managing elections",
                "Functions: conduct elections, voter registration, party registration",
                "Delimitation of constituencies",
                "Monitoring of political parties and campaign finance",
                "Voter education and public enlightenment",
                "Chairman and 12 National Commissioners",
                "Appointed by President, confirmed by Senate",
                "Five-year terms, renewable once",
                "Resident Electoral Commissioners in each state",
                "Independence essential for credibility"
              ]
            },
            {
              title: "Electoral Process in Nigeria",
              content: "The electoral process involves several stages: voter registration (continuous voter registration), party primaries (selecting candidates), campaigns (regulated by electoral law), voting (biometric accreditation, electronic results transmission), collation and announcement of results, and dispute resolution. INEC manages the entire process with oversight from observers, political parties, and security agencies. Recent reforms have introduced technology to improve transparency.",
              keyPoints: [
                "Continuous Voter Registration (CVR) by INEC",
                "Permanent Voter Cards (PVCs) with biometric data",
                "Party primaries: direct or indirect",
                "INEC monitors party primaries",
                "Campaign regulations: spending limits, duration",
                "Election Day: biometric accreditation of voters",
                "Use of Smart Card Readers and BVAS",
                "Electronic transmission of results (iREV portal)",
                "Collation at various levels: ward, LGA, state, national",
                "Announcement of results by returning officers",
                "Election petitions to tribunals if disputed",
                "Security agencies provide election security"
              ]
            },
            {
              title: "Political Parties",
              content: "Political parties are organized groups that seek to gain political power through elections. They perform crucial functions: aggregating interests, political socialization, candidate recruitment, policy formulation, forming government, and providing opposition. In Nigeria, parties must be registered by INEC, have national spread, and democratic internal structures. Multi-party system allows diverse political participation.",
              keyPoints: [
                "Organized groups seeking political power",
                "Must register with INEC to participate in elections",
                "Requirements: national character, democratic constitution, offices in states",
                "Functions: interest aggregation, political socialization",
                "Candidate recruitment and nomination",
                "Policy formulation and political education",
                "Forming government or providing opposition",
                "Link between government and citizens",
                "Nigeria has multi-party system",
                "Major parties: APC, PDP, LP, NNPP, and others",
                "Internal democracy required by law",
                "INEC monitors party activities and finances"
              ]
            },
            {
              title: "Electoral Reforms and Challenges",
              content: "Electoral reforms aim to improve election quality and credibility. Recent Nigerian reforms include: Electoral Act 2022 (electronic transmission of results, direct primaries option), biometric voter registration, use of technology (BVAS, iREV), and strengthened INEC independence. Challenges remain: electoral violence, vote-buying, godfatherism, rigging attempts, logistical problems, and voter apathy. Continuous reforms are needed for electoral maturity.",
              keyPoints: [
                "Electoral Act 2022: major reform legislation",
                "Electronic transmission of results mandated",
                "BVAS (Bimodal Voter Accreditation System) for accreditation",
                "iREV portal for real-time results viewing",
                "Strengthened penalties for electoral offenses",
                "Provision for early commencement of campaigns",
                "Challenges: electoral violence and intimidation",
                "Vote-buying and monetization of politics",
                "Godfatherism and political clientelism",
                "Logistical challenges in remote areas",
                "Voter apathy and low turnout",
                "Need for continuous civic education",
                "Call for further reforms: diaspora voting, electronic voting"
              ]
            }
          ],
          objectives: [
            "Explain the role and functions of INEC",
            "Describe the electoral process in Nigeria",
            "Discuss the functions of political parties",
            "Analyze recent electoral reforms",
            "Identify challenges facing electoral system and possible solutions"
          ]
        }
      ]
    }
  }
];
