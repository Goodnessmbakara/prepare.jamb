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

export const englishNotes: StudyNote[] = [
  {
    id: "eng-001",
    subjectId: "english",
    title: "Comprehension and Summary",
    order: 1,
    content: {
      overview: "This section focuses on developing critical reading skills, understanding written texts, and the ability to summarize information effectively. It tests your ability to extract main ideas, identify supporting details, make inferences, and draw conclusions from various types of passages.",
      topics: [
        {
          title: "Reading Comprehension Skills",
          subtopics: [
            {
              title: "Literal Comprehension",
              content: "Literal comprehension involves understanding the explicit meaning of a text - what is directly stated by the author. This is the foundation of all reading comprehension and requires careful attention to details, facts, and specific information presented in the passage.",
              keyPoints: [
                "Identify main ideas explicitly stated in the passage",
                "Locate specific facts, details, and supporting evidence",
                "Understand sequence of events and chronological order",
                "Recognize cause and effect relationships clearly stated",
                "Identify characters, settings, and plot elements in narratives"
              ]
            },
            {
              title: "Inferential Comprehension",
              content: "Inferential comprehension goes beyond what is explicitly stated to understand implied meanings, draw logical conclusions, and make reasonable predictions based on textual evidence. This skill requires reading between the lines and using context clues to derive deeper meaning.",
              keyPoints: [
                "Make logical inferences based on textual evidence",
                "Understand implied meanings and suggestions",
                "Predict outcomes based on given information",
                "Draw conclusions from facts and evidence presented",
                "Interpret figurative language and idiomatic expressions",
                "Identify the author's tone, mood, and attitude"
              ]
            },
            {
              title: "Critical Comprehension",
              content: "Critical comprehension involves evaluating the text, forming judgments about its quality, validity, and effectiveness. This highest level of comprehension requires analyzing the author's purpose, detecting bias, and assessing the strength of arguments presented.",
              keyPoints: [
                "Evaluate the validity and reliability of information",
                "Identify author's purpose and intended audience",
                "Detect bias, propaganda, and persuasive techniques",
                "Distinguish fact from opinion",
                "Assess the effectiveness of arguments and evidence",
                "Compare and contrast different viewpoints"
              ]
            }
          ],
          objectives: [
            "Demonstrate ability to understand both explicit and implicit meanings in texts",
            "Identify and interpret main ideas and supporting details",
            "Make valid inferences and draw logical conclusions",
            "Analyze author's purpose, tone, and perspective",
            "Evaluate the quality and validity of written arguments"
          ]
        },
        {
          title: "Types of Comprehension Passages",
          subtopics: [
            {
              title: "Narrative Passages",
              content: "Narrative passages tell a story or recount events, whether fictional or based on real experiences. They typically include characters, a setting, a plot with conflict and resolution, and are written in chronological order or with flashbacks. Understanding narrative structure is essential for comprehending stories.",
              keyPoints: [
                "Identify story elements: characters, setting, plot, conflict, resolution",
                "Understand narrative point of view (first-person, third-person)",
                "Follow the sequence of events and timeline",
                "Recognize character development and motivations",
                "Identify theme and moral lessons",
                "Understand narrative techniques like flashback and foreshadowing"
              ]
            },
            {
              title: "Expository Passages",
              content: "Expository passages explain, inform, or describe a topic in a clear and organized manner. They present facts, provide explanations, give instructions, or analyze subjects without attempting to persuade the reader. Common structures include cause-effect, compare-contrast, and problem-solution.",
              keyPoints: [
                "Identify the main topic and central thesis",
                "Recognize organizational patterns (cause-effect, compare-contrast, problem-solution)",
                "Understand technical vocabulary and terminology",
                "Follow logical development of ideas",
                "Identify supporting evidence and examples",
                "Distinguish between main ideas and supporting details"
              ]
            },
            {
              title: "Argumentative Passages",
              content: "Argumentative passages present a claim or position on an issue and provide evidence to support it. The author attempts to persuade readers to accept a particular viewpoint. Understanding argument structure, identifying premises and conclusions, and evaluating evidence quality are crucial skills.",
              keyPoints: [
                "Identify the main argument or thesis statement",
                "Recognize supporting evidence and reasoning",
                "Detect logical fallacies and weak arguments",
                "Understand counterarguments and rebuttals",
                "Evaluate the strength and validity of evidence",
                "Identify persuasive techniques and rhetorical devices"
              ]
            },
            {
              title: "Descriptive Passages",
              content: "Descriptive passages create vivid mental images by providing detailed sensory information about people, places, objects, or experiences. They use figurative language, precise adjectives, and sensory details to paint pictures with words. Understanding descriptive techniques enhances comprehension.",
              keyPoints: [
                "Visualize settings, characters, and objects described",
                "Identify sensory details (sight, sound, smell, taste, touch)",
                "Recognize figurative language (metaphors, similes, personification)",
                "Understand imagery and its effect on mood",
                "Appreciate precise word choice and descriptive techniques",
                "Identify the dominant impression created"
              ]
            }
          ],
          objectives: [
            "Recognize and understand different types of written passages",
            "Apply appropriate reading strategies for each passage type",
            "Identify organizational patterns and text structures",
            "Understand the purpose and characteristics of each passage type"
          ]
        },
        {
          title: "Summary Writing Techniques",
          subtopics: [
            {
              title: "Identifying Main Ideas",
              content: "The foundation of effective summary writing is the ability to identify the main idea or central theme of a passage. The main idea is the most important point the author wants to convey - it's what the passage is mostly about. Supporting details elaborate on the main idea but are not the focus of a summary.",
              keyPoints: [
                "Distinguish main ideas from supporting details",
                "Identify topic sentences in paragraphs",
                "Recognize the thesis statement or central argument",
                "Understand the difference between topics and main ideas",
                "Look for repeated concepts and emphasis",
                "Ask 'What is this passage mainly about?'"
              ]
            },
            {
              title: "Paraphrasing and Condensing",
              content: "Effective summary writing requires expressing ideas in your own words (paraphrasing) while reducing the length to include only essential information. This demonstrates understanding and avoids plagiarism. The goal is to capture the essence of the original text concisely.",
              keyPoints: [
                "Use your own words to express ideas",
                "Maintain the original meaning and intent",
                "Reduce length by eliminating redundancy and examples",
                "Focus on key concepts rather than minor details",
                "Avoid copying phrases directly from the passage",
                "Preserve the logical flow of ideas"
              ]
            },
            {
              title: "Summary Writing Process",
              content: "Writing an effective summary follows a systematic process: reading the passage carefully, identifying main ideas, organizing key points, drafting the summary, and revising for clarity and conciseness. Following this process ensures comprehensive coverage of essential information within the required word limit.",
              keyPoints: [
                "Read the passage multiple times for full understanding",
                "Underline or note key points and main ideas",
                "Organize ideas in a logical sequence",
                "Write a draft focusing on essential information",
                "Revise to meet word count requirements",
                "Check that summary captures the passage's essence",
                "Ensure coherence and proper transitions"
              ]
            },
            {
              title: "Summary Writing Rules",
              content: "Successful summaries adhere to specific guidelines: they are written in your own words, maintain objectivity without personal opinions, stay within the prescribed word limit, preserve the original author's intent, and include only the most important information without examples or repetition.",
              keyPoints: [
                "Write in the third person (avoid 'I' or 'you')",
                "Maintain objectivity - no personal opinions",
                "Adhere strictly to word count limits",
                "Include only main points and essential details",
                "Eliminate examples, illustrations, and repetitions",
                "Use present tense for timeless information",
                "Begin with a topic sentence stating the main idea",
                "Maintain the original sequence and emphasis"
              ]
            }
          ],
          objectives: [
            "Master the skill of identifying and extracting main ideas",
            "Write clear, concise summaries within specified word limits",
            "Paraphrase effectively without changing original meaning",
            "Follow proper summary writing conventions and rules"
          ]
        }
      ]
    }
  },
  {
    id: "eng-002",
    subjectId: "english",
    title: "Lexis and Structure",
    order: 2,
    content: {
      overview: "This section covers vocabulary development, grammatical structures, and usage of English language. It encompasses understanding word meanings in context, grammatical rules, sentence construction, and proper usage of various parts of speech. Mastery of this section is fundamental to effective communication.",
      topics: [
        {
          title: "Vocabulary Development",
          subtopics: [
            {
              title: "Antonyms and Synonyms",
              content: "Antonyms are words with opposite meanings, while synonyms are words with similar or nearly identical meanings. Understanding these relationships enriches vocabulary and enables precise expression. Context often determines which synonym is most appropriate, as subtle differences in connotation exist between similar words.",
              keyPoints: [
                "Antonyms: happy-sad, big-small, hot-cold, love-hate",
                "Synonyms: happy-joyful-cheerful, big-large-huge",
                "Consider context when choosing appropriate synonyms",
                "Understand degrees of intensity (warm, hot, scorching)",
                "Recognize formal vs. informal synonyms",
                "Use a thesaurus to expand vocabulary",
                "Be aware of connotative differences between synonyms"
              ]
            },
            {
              title: "Homonyms, Homophones, and Homographs",
              content: "Homonyms are words that sound alike or are spelled alike but have different meanings. Homophones sound the same but have different spellings and meanings (their/there/they're). Homographs are spelled the same but have different pronunciations and meanings (lead - to guide/lead - metal).",
              keyPoints: [
                "Homophones: their/there/they're, to/too/two, hear/here",
                "Homographs: bow (bend/front of ship), lead (guide/metal)",
                "Context determines meaning and correct usage",
                "Common errors: its/it's, your/you're, affect/effect",
                "Practice distinguishing between similar-sounding words",
                "Understand pronunciation differences in homographs"
              ]
            },
            {
              title: "Idiomatic Expressions",
              content: "Idioms are phrases whose meanings cannot be understood from the literal meanings of individual words. They are culturally specific expressions that must be learned as complete units. Common in everyday English, idioms add color and expressiveness to language but can confuse non-native speakers.",
              keyPoints: [
                "Common idioms: 'raining cats and dogs' (heavy rain)",
                "'Piece of cake' (very easy), 'break a leg' (good luck)",
                "'Cost an arm and a leg' (very expensive)",
                "Idioms cannot be translated literally",
                "Learn idioms in context with their meanings",
                "Understand cultural significance of idiomatic expressions",
                "Recognize when language is being used idiomatically"
              ]
            },
            {
              title: "Word Formation",
              content: "Words can be formed through various processes including affixation (adding prefixes and suffixes), compounding (combining two words), conversion (changing word class), and clipping (shortening). Understanding these processes helps in deducing meanings of unfamiliar words and expanding vocabulary.",
              keyPoints: [
                "Prefixes: un-, re-, pre-, dis-, mis- (unable, rewrite, preview)",
                "Suffixes: -ness, -ment, -tion, -ful, -less (happiness, government)",
                "Compounds: blackboard, sunflower, football",
                "Conversion: bottle (noun) to bottle (verb)",
                "Clipping: advertisement → ad, examination → exam",
                "Blending: breakfast + lunch = brunch",
                "Acronyms: NATO, UNESCO, laser"
              ]
            }
          ],
          objectives: [
            "Develop a rich and varied vocabulary",
            "Use words accurately in appropriate contexts",
            "Understand relationships between words",
            "Apply knowledge of word formation to deduce meanings"
          ]
        },
        {
          title: "Grammar and Usage",
          subtopics: [
            {
              title: "Parts of Speech",
              content: "Parts of speech are categories that words belong to based on their grammatical function in a sentence. The eight main parts of speech are nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions, and interjections. Understanding these categories is fundamental to sentence construction and grammar.",
              keyPoints: [
                "Nouns: names of people, places, things, or ideas (John, Lagos, book, freedom)",
                "Pronouns: replace nouns (I, you, he, she, it, they, who, which)",
                "Verbs: express action or state of being (run, think, am, is, are)",
                "Adjectives: describe or modify nouns (beautiful, large, three)",
                "Adverbs: modify verbs, adjectives, or other adverbs (quickly, very, well)",
                "Prepositions: show relationships (in, on, at, by, with, from)",
                "Conjunctions: connect words or clauses (and, but, or, because, although)",
                "Interjections: express emotion (Oh! Wow! Alas!)"
              ]
            },
            {
              title: "Tenses and Aspect",
              content: "Tenses indicate the time of an action or state (past, present, future), while aspect shows whether an action is completed, ongoing, or habitual. English has three main tenses, each with four aspects: simple, continuous (progressive), perfect, and perfect continuous. Correct tense usage is crucial for clear communication.",
              keyPoints: [
                "Simple Present: habitual actions (I study every day)",
                "Present Continuous: ongoing actions (I am studying now)",
                "Present Perfect: completed actions with present relevance (I have studied)",
                "Simple Past: completed past actions (I studied yesterday)",
                "Past Continuous: ongoing past actions (I was studying)",
                "Past Perfect: action completed before another past action",
                "Simple Future: future actions (I will study)",
                "Future Perfect: action that will be completed by a future time",
                "Maintain consistency in tense usage within passages"
              ]
            },
            {
              title: "Subject-Verb Agreement",
              content: "Subject-verb agreement means that the subject and verb in a sentence must agree in number (singular or plural) and person (first, second, third). This is a fundamental rule of English grammar. Errors in agreement are common when subjects and verbs are separated by phrases or when dealing with compound subjects.",
              keyPoints: [
                "Singular subjects take singular verbs: The boy runs",
                "Plural subjects take plural verbs: The boys run",
                "Compound subjects joined by 'and' are plural: Tom and Jerry run",
                "Subjects joined by 'or' agree with nearest subject",
                "Collective nouns can be singular or plural based on context",
                "Indefinite pronouns: everyone, somebody, each (singular)",
                "Watch for intervening phrases: The box of toys is here",
                "'There is' vs. 'there are' depends on the following noun"
              ]
            },
            {
              title: "Pronouns and Reference",
              content: "Pronouns must agree with their antecedents (the nouns they replace) in number, gender, and person. Clear pronoun reference is essential to avoid ambiguity. Pronoun cases (subjective, objective, possessive) must be used correctly based on the pronoun's function in the sentence.",
              keyPoints: [
                "Pronoun-antecedent agreement: John lost his book (not their book)",
                "Clear reference: avoid ambiguous pronouns",
                "Subjective case: I, he, she, we, they (subject position)",
                "Objective case: me, him, her, us, them (object position)",
                "Possessive case: my, his, her, our, their (showing ownership)",
                "Reflexive pronouns: myself, himself, themselves",
                "Relative pronouns: who, whom, whose, which, that",
                "Avoid pronoun shifts in person or number"
              ]
            },
            {
              title: "Modifiers: Adjectives and Adverbs",
              content: "Modifiers add description and detail to sentences. Adjectives modify nouns and pronouns, while adverbs modify verbs, adjectives, and other adverbs. Proper placement of modifiers is crucial to avoid confusion. Misplaced or dangling modifiers can create unintended meanings.",
              keyPoints: [
                "Adjectives answer: which one? what kind? how many?",
                "Adverbs answer: how? when? where? to what extent?",
                "Comparatives: -er or more (faster, more beautiful)",
                "Superlatives: -est or most (fastest, most beautiful)",
                "Irregular comparisons: good-better-best, bad-worse-worst",
                "Place modifiers close to words they modify",
                "Avoid dangling modifiers: 'Walking down the street, the building appeared'",
                "Use adjectives after linking verbs: The cake tastes good (not well)"
              ]
            },
            {
              title: "Prepositions and Prepositional Phrases",
              content: "Prepositions show relationships between nouns or pronouns and other words in a sentence, typically indicating location, direction, time, or manner. Prepositional phrases function as adjectives or adverbs. Choosing the correct preposition is often idiomatic and must be learned through practice.",
              keyPoints: [
                "Location: in, on, at, under, above, below, beside",
                "Time: at (specific time), on (day/date), in (month/year/season)",
                "Direction: to, from, into, toward, through",
                "Common errors: different from (not than), agree with (not to)",
                "Prepositional phrase = preposition + object",
                "Avoid ending sentences with prepositions in formal writing",
                "Phrasal verbs combine verbs with prepositions: look up, give in"
              ]
            },
            {
              title: "Conjunctions and Sentence Connection",
              content: "Conjunctions connect words, phrases, or clauses. Coordinating conjunctions (and, but, or, nor, for, so, yet) join equal elements. Subordinating conjunctions (because, although, if, when, while) introduce dependent clauses. Correlative conjunctions (either...or, neither...nor) work in pairs to connect elements.",
              keyPoints: [
                "Coordinating conjunctions: FANBOYS (For, And, Nor, But, Or, Yet, So)",
                "Use comma before coordinating conjunction joining independent clauses",
                "Subordinating conjunctions: because, although, since, unless, while",
                "Correlative conjunctions: either...or, neither...nor, both...and",
                "Maintain parallel structure with conjunctions",
                "Conjunctive adverbs: however, therefore, moreover (need semicolon)",
                "Choose conjunctions that show correct logical relationship"
              ]
            }
          ],
          objectives: [
            "Apply grammatical rules correctly in writing and speaking",
            "Construct grammatically correct sentences",
            "Identify and correct common grammatical errors",
            "Use various parts of speech appropriately"
          ]
        },
        {
          title: "Sentence Structure",
          subtopics: [
            {
              title: "Types of Sentences by Structure",
              content: "Sentences are classified by structure based on the number and type of clauses they contain. A simple sentence has one independent clause. A compound sentence has two or more independent clauses. A complex sentence has one independent clause and one or more dependent clauses. A compound-complex sentence combines both structures.",
              keyPoints: [
                "Simple sentence: I study (one independent clause)",
                "Compound sentence: I study, and she reads (two independent clauses)",
                "Complex sentence: I study because I have an exam (independent + dependent)",
                "Compound-complex: I study because I have an exam, and she reads",
                "Independent clause: can stand alone as a complete sentence",
                "Dependent clause: cannot stand alone, begins with subordinating conjunction",
                "Use variety in sentence structure for effective writing"
              ]
            },
            {
              title: "Types of Sentences by Purpose",
              content: "Sentences are also classified by their purpose or function. Declarative sentences make statements. Interrogative sentences ask questions. Imperative sentences give commands or make requests. Exclamatory sentences express strong emotion. Understanding these types helps in punctuation and effective communication.",
              keyPoints: [
                "Declarative: makes a statement (The exam is tomorrow.)",
                "Interrogative: asks a question (Is the exam tomorrow?)",
                "Imperative: gives command (Study for the exam.)",
                "Exclamatory: shows strong emotion (What a difficult exam!)",
                "Declarative and imperative end with periods",
                "Interrogative ends with question mark",
                "Exclamatory ends with exclamation mark",
                "Imperative often has implied 'you' as subject"
              ]
            },
            {
              title: "Phrases and Clauses",
              content: "Phrases are groups of related words without subject-verb combinations, while clauses contain both subjects and verbs. Understanding the difference is crucial for sentence construction. Phrases function as single parts of speech (noun phrase, verb phrase, prepositional phrase, etc.) within sentences.",
              keyPoints: [
                "Phrase: group of words without subject-verb (in the morning)",
                "Clause: group of words with subject-verb (when morning comes)",
                "Noun phrase: the big red house",
                "Verb phrase: has been studying",
                "Prepositional phrase: on the table",
                "Participial phrase: Running quickly, he caught the bus",
                "Infinitive phrase: to study hard",
                "Gerund phrase: Swimming in the pool is fun"
              ]
            },
            {
              title: "Sentence Errors and Correction",
              content: "Common sentence errors include fragments (incomplete sentences), run-on sentences (improperly joined clauses), comma splices (clauses joined only by comma), and faulty parallelism. Identifying and correcting these errors is essential for clear, effective writing. Understanding proper sentence boundaries and connections prevents these mistakes.",
              keyPoints: [
                "Fragment: incomplete sentence lacking subject or verb",
                "Run-on: two sentences joined without proper punctuation",
                "Comma splice: two sentences joined only by comma",
                "Fix fragments by adding missing elements or joining to main clause",
                "Fix run-ons with period, semicolon, or conjunction",
                "Maintain parallel structure in lists and comparisons",
                "Check for subject-verb agreement and pronoun reference",
                "Avoid misplaced and dangling modifiers"
              ]
            }
          ],
          objectives: [
            "Construct various types of sentences correctly",
            "Identify and use phrases and clauses appropriately",
            "Recognize and correct sentence errors",
            "Write clear, well-structured sentences"
          ]
        },
        {
          title: "Punctuation and Mechanics",
          subtopics: [
            {
              title: "End Punctuation",
              content: "End punctuation marks indicate the conclusion of a sentence and signal its purpose. Periods end declarative and imperative sentences. Question marks end interrogative sentences. Exclamation marks end exclamatory sentences expressing strong emotion. Proper use of end punctuation is fundamental to clear writing.",
              keyPoints: [
                "Period (.): ends declarative and imperative sentences",
                "Question mark (?): ends interrogative sentences",
                "Exclamation mark (!): ends exclamatory sentences",
                "Use periods after abbreviations: Dr., Mr., etc.",
                "Don't use multiple punctuation marks (!!!, ???)",
                "Choose punctuation that matches sentence purpose",
                "In quotations, place end punctuation inside quotation marks"
              ]
            },
            {
              title: "Comma Usage",
              content: "Commas are the most frequently used internal punctuation mark, serving multiple purposes: separating items in lists, setting off introductory elements, joining independent clauses with conjunctions, and enclosing non-essential information. Proper comma usage prevents confusion and clarifies meaning.",
              keyPoints: [
                "Separate items in a series: I bought apples, oranges, and bananas",
                "After introductory elements: After the exam, we celebrated",
                "Before coordinating conjunction joining clauses: I studied, and I passed",
                "Set off non-essential information: My brother, who is tall, plays basketball",
                "Separate coordinate adjectives: a long, difficult exam",
                "After transitional words: However, I passed the test",
                "In dates and addresses: January 1, 2026, Lagos, Nigeria",
                "Don't use comma to separate subject and verb"
              ]
            },
            {
              title: "Semicolons and Colons",
              content: "Semicolons connect closely related independent clauses and separate items in complex lists. Colons introduce lists, explanations, or examples, and follow independent clauses. These punctuation marks add sophistication to writing when used correctly but are often misused.",
              keyPoints: [
                "Semicolon joins related independent clauses: I studied; I passed",
                "Use semicolon with conjunctive adverbs: I studied; therefore, I passed",
                "Separate complex list items: I visited Lagos, Nigeria; Accra, Ghana",
                "Colon introduces a list: Buy: milk, bread, eggs",
                "Colon introduces explanation: One thing is certain: hard work pays",
                "Independent clause must precede colon",
                "Don't use colon after 'is' or prepositions",
                "Capitalize first word after colon if it begins complete sentence"
              ]
            },
            {
              title: "Apostrophes and Quotation Marks",
              content: "Apostrophes indicate possession and contraction. Quotation marks enclose direct speech, quotations, and titles of short works. Misuse of these marks, particularly apostrophes in plurals and possessives, is common. Understanding proper usage is essential for clear, professional writing.",
              keyPoints: [
                "Apostrophe for possession: John's book, the dogs' bones",
                "Apostrophe for contractions: don't (do not), it's (it is)",
                "Its = possessive, it's = it is (contraction)",
                "Plural possessive: add apostrophe after s (students' books)",
                "Quotation marks for direct speech: He said, 'I am ready'",
                "Use quotation marks for titles of articles, poems, short stories",
                "Place commas and periods inside quotation marks",
                "Don't use apostrophes for plural nouns: apples (not apple's)"
              ]
            }
          ],
          objectives: [
            "Use punctuation marks correctly to clarify meaning",
            "Apply punctuation rules consistently",
            "Recognize and correct punctuation errors",
            "Enhance writing clarity through proper punctuation"
          ]
        }
      ]
    }
  },
  {
    id: "eng-003",
    subjectId: "english",
    title: "Oral English and Phonetics",
    order: 3,
    content: {
      overview: "This section focuses on the sounds of English language, pronunciation, stress patterns, and intonation. It covers phonetics (the study of speech sounds), phonology (sound patterns), word stress, sentence rhythm, and effective oral communication. Mastery of oral English is essential for clear spoken communication.",
      topics: [
        {
          title: "Vowels and Consonants",
          subtopics: [
            {
              title: "Pure Vowels (Monophthongs)",
              content: "Pure vowels are single vowel sounds where the tongue position remains relatively stable throughout the sound's production. English has about 12 pure vowel sounds (the exact number varies by dialect). These are classified by tongue position (front, central, back) and height (high, mid, low), plus lip rounding.",
              keyPoints: [
                "Short vowels: /ɪ/ (sit), /e/ (bed), /æ/ (cat), /ʌ/ (cup), /ʊ/ (put), /ɒ/ (hot)",
                "Long vowels: /iː/ (see), /ɑː/ (father), /ɔː/ (door), /uː/ (food), /ɜː/ (bird)",
                "Schwa /ə/: the most common vowel in unstressed syllables (about, person)",
                "Front vowels: /iː/, /ɪ/, /e/, /æ/",
                "Central vowels: /ɜː/, /ə/, /ʌ/",
                "Back vowels: /uː/, /ʊ/, /ɔː/, /ɒ/, /ɑː/",
                "Vowel length affects meaning: ship vs. sheep"
              ]
            },
            {
              title: "Diphthongs",
              content: "Diphthongs are complex vowel sounds that begin with one vowel quality and glide toward another within the same syllable. English has eight main diphthongs. The tongue moves from one position to another during production, creating a distinctive sound that functions as a single vowel.",
              keyPoints: [
                "Closing diphthongs ending in /ɪ/: /eɪ/ (day), /aɪ/ (my), /ɔɪ/ (boy)",
                "Closing diphthongs ending in /ʊ/: /əʊ/ (go), /aʊ/ (now)",
                "Centring diphthongs ending in /ə/: /ɪə/ (here), /eə/ (hair), /ʊə/ (tour)",
                "First element is more prominent than second",
                "Diphthongs count as one syllable despite two sounds",
                "Common spelling patterns vary: 'ay', 'ai', 'oy', 'ou', 'ow'",
                "Distinguish from two separate vowels in different syllables"
              ]
            },
            {
              title: "Consonants: Manner of Articulation",
              content: "Consonants are classified by how airflow is restricted during production (manner of articulation). Categories include stops/plosives (complete blockage), fricatives (narrow opening creating friction), affricates (stop + fricative), nasals (air through nose), liquids, and glides. Understanding these helps with pronunciation.",
              keyPoints: [
                "Plosives/Stops: /p, b, t, d, k, g/ - complete airflow blockage then release",
                "Fricatives: /f, v, θ, ð, s, z, ʃ, ʒ, h/ - friction through narrow opening",
                "Affricates: /tʃ/ (church), /dʒ/ (judge) - stop + fricative combination",
                "Nasals: /m, n, ŋ/ - air flows through nose",
                "Liquids: /l, r/ - air flows around tongue",
                "Glides/Semivowels: /w, j/ - vowel-like consonants",
                "Voiced vs. voiceless: vocal cords vibrate for voiced consonants"
              ]
            },
            {
              title: "Consonants: Place of Articulation",
              content: "Consonants are also classified by where in the vocal tract the airflow restriction occurs (place of articulation). This includes bilabial (both lips), labiodental (lip-teeth), dental (tongue-teeth), alveolar (tongue-ridge), palatal (tongue-hard palate), velar (tongue-soft palate), and glottal (vocal cords).",
              keyPoints: [
                "Bilabial: /p, b, m, w/ - both lips",
                "Labiodental: /f, v/ - lower lip and upper teeth",
                "Dental: /θ, ð/ - tongue between teeth (think, this)",
                "Alveolar: /t, d, s, z, n, l, r/ - tongue and alveolar ridge",
                "Palato-alveolar: /ʃ, ʒ, tʃ, dʒ/ - tongue and hard palate area",
                "Palatal: /j/ - tongue and hard palate",
                "Velar: /k, g, ŋ/ - tongue and soft palate (back of roof)",
                "Glottal: /h/ - between vocal cords"
              ]
            }
          ],
          objectives: [
            "Identify and produce English vowel and consonant sounds correctly",
            "Understand phonetic symbols and transcription",
            "Distinguish between similar sounds",
            "Apply knowledge of articulation to improve pronunciation"
          ]
        },
        {
          title: "Syllables and Word Stress",
          subtopics: [
            {
              title: "Syllable Structure",
              content: "A syllable is a unit of pronunciation containing one vowel sound, with or without surrounding consonants. Syllables are the building blocks of words. Understanding syllable division helps with pronunciation, spelling, and word stress. Each syllable has a nucleus (vowel) and may have onset (initial consonants) and coda (final consonants).",
              keyPoints: [
                "Every syllable must have a vowel sound",
                "Syllable = (consonants) + vowel + (consonants)",
                "Open syllables end in vowel: 'go', 'be'",
                "Closed syllables end in consonant: 'cat', 'run'",
                "Count syllables by counting vowel sounds, not letters",
                "Examples: cat (1), water (2), beautiful (3), dictionary (4)",
                "Syllable division affects pronunciation: re-cord vs. rec-ord"
              ]
            },
            {
              title: "Word Stress Patterns",
              content: "Word stress refers to the emphasis placed on certain syllables in multisyllabic words. In English, one syllable in each content word receives primary stress, making it louder, longer, and higher in pitch than other syllables. Stress patterns distinguish meaning and are crucial for comprehensibility.",
              keyPoints: [
                "Primary stress: one syllable is most prominent",
                "Secondary stress: less prominent but more than unstressed",
                "Stress shown with mark before stressed syllable: 'PREsent vs. pre'SENT",
                "Two-syllable nouns usually stressed on first syllable: 'TAble, 'PENcil",
                "Two-syllable verbs often stressed on second syllable: be'GIN, re'FUSE",
                "Compound nouns stressed on first element: 'BLACKboard, 'GREENhouse",
                "Stress can change word class and meaning: 'REcord (noun) vs. re'CORD (verb)",
                "Suffixes can shift stress: 'PHOto, pho'TOgraphy, photo'GRAPHIC"
              ]
            },
            {
              title: "Weak Forms and Strong Forms",
              content: "Function words (articles, prepositions, conjunctions, auxiliary verbs, pronouns) typically have two pronunciations: a strong form used for emphasis or when standing alone, and a weak form used in normal connected speech. Weak forms use reduced vowels (often schwa /ə/) and are crucial for natural English rhythm.",
              keyPoints: [
                "Articles: 'a' /eɪ/ (strong) vs. /ə/ (weak); 'the' /ðiː/ vs. /ðə/",
                "Prepositions: 'to' /tuː/ vs. /tə/; 'at' /æt/ vs. /ət/",
                "Auxiliaries: 'can' /kæn/ vs. /kən/; 'have' /hæv/ vs. /həv/",
                "Pronouns: 'you' /juː/ vs. /jə/; 'them' /ðem/ vs. /ðəm/",
                "Conjunctions: 'and' /ænd/ vs. /ənd/ or /ən/",
                "Use strong forms for emphasis or contrast: 'I CAN do it!'",
                "Weak forms at end of sentences often become strong: 'What are you looking AT?'",
                "Using weak forms makes speech sound more natural"
              ]
            },
            {
              title: "Rhythm and Timing",
              content: "English is a stress-timed language, meaning stressed syllables occur at roughly regular intervals regardless of the number of unstressed syllables between them. This creates a characteristic rhythm. Unstressed syllables are reduced and spoken more quickly, while stressed syllables are given more time and prominence.",
              keyPoints: [
                "Stress-timed rhythm: equal spacing between stressed syllables",
                "Content words (nouns, verbs, adjectives, adverbs) are stressed",
                "Function words (articles, prepositions, auxiliaries) are usually unstressed",
                "Unstressed syllables are shortened and reduced",
                "This rhythm affects natural speech speed and flow",
                "Practice with rhythm: 'CATS eat FISH' vs. 'The CATS are EATing the FISH'",
                "Same rhythm despite different number of syllables",
                "Understanding rhythm improves listening comprehension"
              ]
            }
          ],
          objectives: [
            "Identify syllables in words correctly",
            "Apply proper word stress patterns",
            "Use weak and strong forms appropriately",
            "Develop natural English rhythm in speech"
          ]
        },
        {
          title: "Intonation and Sentence Stress",
          subtopics: [
            {
              title: "Intonation Patterns",
              content: "Intonation refers to the rise and fall of pitch (voice tone) across phrases and sentences. English uses intonation to convey meaning, emotion, and sentence type. The main patterns are falling (for statements and commands), rising (for yes/no questions), and fall-rise (for uncertainty or politeness). Intonation affects meaning significantly.",
              keyPoints: [
                "Falling intonation: statements, wh-questions, commands",
                "Rising intonation: yes/no questions, uncertainty, listing",
                "Fall-rise intonation: politeness, contrast, implications",
                "Statement: 'I'm going HOME.' (falling)",
                "Yes/no question: 'Are you going HOME?' (rising)",
                "Wh-question: 'WHERE are you going?' (falling)",
                "List: 'I need bread, ↑milk, ↑eggs, and ↓cheese'",
                "Intonation changes meaning: 'Really?' (rising = surprise; falling = doubt)"
              ]
            },
            {
              title: "Sentence Stress",
              content: "Sentence stress involves emphasizing certain words in a sentence to convey meaning and focus. Generally, content words receive stress while function words do not. The placement of stress affects meaning - different words can be stressed to highlight different information or create different implications.",
              keyPoints: [
                "Content words stressed: nouns, main verbs, adjectives, adverbs",
                "Function words unstressed: articles, auxiliaries, prepositions",
                "New information typically receives stress",
                "Contrastive stress highlights differences: 'I want BLUE, not RED'",
                "Example: 'I didn't STEAL the book' vs. 'I didn't steal the BOOK'",
                "First stresses 'steal' (I borrowed it), second stresses 'book' (I stole something else)",
                "Stress the word that carries the main message",
                "Changing stress changes focus and meaning"
              ]
            },
            {
              title: "Pausing and Phrasing",
              content: "Pausing divides speech into meaningful chunks called phrases or thought groups. Appropriate pausing makes speech clearer and easier to understand. Pauses typically occur at punctuation marks in written text, but also at natural phrase boundaries. Phrasing helps listeners process information in manageable units.",
              keyPoints: [
                "Pause at commas, periods, and other punctuation",
                "Pause between clauses and major phrases",
                "Don't pause between article and noun, or subject and verb",
                "Phrase example: 'When I arrived at the station / the train had left'",
                "Use pauses to emphasize important points",
                "Breath groups correspond to phrase units",
                "Inappropriate pausing confuses listeners",
                "Practice chunking long sentences into logical phrases"
              ]
            },
            {
              title: "Connected Speech",
              content: "Connected speech refers to how sounds change when words are spoken in natural conversation rather than in isolation. Features include linking (connecting final consonant to initial vowel), assimilation (sounds changing to become more similar), and elision (sounds being omitted). Understanding these helps with both speaking naturally and comprehending fast speech.",
              keyPoints: [
                "Linking: consonant-to-vowel: 'pick↔up' /pɪkʌp/",
                "Linking: vowel-to-vowel with /j/ or /w/: 'go↔away' /gəʊwəweɪ/",
                "Assimilation: 'green bag' sounds like 'gream bag' (/m/ instead of /n/)",
                "Elision: 'next day' /neksdeɪ/ (t is omitted)",
                "Contraction: 'I am' → 'I'm', 'want to' → 'wanna' (informal)",
                "These features are natural, not lazy or incorrect",
                "Understanding connected speech improves listening comprehension",
                "Use in informal speech but enunciate clearly in formal contexts"
              ]
            }
          ],
          objectives: [
            "Apply appropriate intonation patterns to different sentence types",
            "Use sentence stress effectively to convey meaning",
            "Employ proper pausing and phrasing for clarity",
            "Understand and use connected speech features naturally"
          ]
        },
        {
          title: "Sounds in Context",
          subtopics: [
            {
              title: "Minimal Pairs",
              content: "Minimal pairs are pairs of words that differ by only one sound in the same position and have different meanings. They demonstrate that individual sounds (phonemes) carry meaning in English. Practicing minimal pairs helps distinguish between similar sounds and improves both pronunciation and listening skills.",
              keyPoints: [
                "Vowel pairs: ship/sheep, bit/beat, cat/cut, pot/put",
                "Consonant pairs: pen/ben, thin/sin, right/light, bet/vet",
                "Initial position: pen/ten, final position: cap/cat",
                "Distinguish /θ/ and /ð/: think/sink, bath/bass",
                "Practice /r/ and /l/: right/light, pray/play",
                "Distinguish /v/ and /w/: vest/west, vine/wine",
                "Minimal pairs prove sounds are phonemic (meaning-bearing)",
                "Use minimal pairs for pronunciation practice and testing"
              ]
            },
            {
              title: "Common Pronunciation Challenges",
              content: "Certain English sounds and patterns present difficulties for learners, particularly sounds that don't exist in many languages. Common challenges include th-sounds (/θ/, /ð/), distinction between /l/ and /r/, vowel length, consonant clusters, and final consonants. Awareness of these helps focus practice efforts.",
              keyPoints: [
                "TH sounds: /θ/ (think) and /ð/ (this) - tongue between teeth",
                "/r/ vs. /l/: different tongue positions - practice rice/lice",
                "Vowel length matters: ship vs. sheep (short vs. long)",
                "Final consonants: pronounce word endings clearly (hat, had, have)",
                "Consonant clusters: str-, spr-, -sts (street, spring, tests)",
                "/v/ vs. /w/: /v/ needs teeth on lip (vote vs. boat)",
                "Schwa /ə/ in unstressed syllables: about, person",
                "Word stress placement: photograph vs. photography"
              ]
            },
            {
              title: "Homophones and Pronunciation",
              content: "Homophones are words that sound identical but have different spellings and meanings. They highlight the complexity of English spelling-sound relationships. Understanding homophones is important for both comprehension and spelling. Context determines which meaning is intended in spoken language.",
              keyPoints: [
                "Common homophones: to/too/two, their/there/they're, your/you're",
                "Hear/here, know/no, write/right, buy/by/bye",
                "Sea/see, meet/meat, sun/son, wear/where",
                "Pronunciation is identical; spelling and meaning differ",
                "Context clues indicate correct meaning in speech",
                "Homophones create puns and wordplay",
                "Common source of spelling errors",
                "Must memorize spellings as pronunciation doesn't help"
              ]
            },
            {
              title: "Regional and Standard Accents",
              content: "English is spoken with various accents worldwide. Received Pronunciation (RP) or British English and General American (GA) are often taught as standards, but many regional varieties exist. While all accents are equally valid, standard forms are typically used in education and formal contexts. Understanding variation helps with comprehension.",
              keyPoints: [
                "RP (Received Pronunciation): British standard accent",
                "General American: standard North American accent",
                "Nigerian English: has distinctive pronunciation features",
                "No accent is inherently better; all are valid",
                "Learn standard forms for clarity in formal contexts",
                "Exposure to different accents improves comprehension",
                "Main differences: vowel sounds and intonation patterns",
                "Focus on intelligibility rather than perfect native accent"
              ]
            }
          ],
          objectives: [
            "Distinguish between similar sounds using minimal pairs",
            "Recognize and overcome common pronunciation challenges",
            "Understand homophones and their implications",
            "Appreciate accent variation while maintaining clear pronunciation"
          ]
        }
      ]
    }
  }
];
