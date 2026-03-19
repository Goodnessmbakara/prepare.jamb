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

export const literatureNotes: StudyNote[] = [
  {
    id: "lit-001",
    subjectId: "literature",
    title: "Introduction to Literature",
    order: 1,
    content: {
      overview: "Literature is the art of written works, encompassing various forms including poetry, prose, and drama. It reflects human experiences, cultures, and emotions through creative use of language. Understanding literary basics, genres, and elements is fundamental to appreciating and analyzing literary works.",
      topics: [
        {
          title: "Definition and Scope of Literature",
          subtopics: [
            {
              title: "What is Literature?",
              content: "Literature encompasses imaginative or creative writing valued for its artistic merit and emotional impact. It includes fictional narratives, poetry, drama, and creative non-fiction. Literature explores the human condition, society, relationships, and universal themes through aesthetic use of language. It entertains, enlightens, and provides insights into different cultures and time periods.",
              keyPoints: [
                "Literature is creative and imaginative use of language",
                "Valued for artistic merit, not just information",
                "Explores human experiences, emotions, and society",
                "Includes multiple genres: prose, poetry, drama",
                "Functions: entertainment, education, cultural preservation",
                "Reflects and shapes society and values",
                "Transcends time and place through universal themes"
              ]
            },
            {
              title: "Oral and Written Literature",
              content: "Oral literature includes folktales, myths, legends, proverbs, and songs passed down through generations by word of mouth. It predates written forms and remains vital in many cultures. Written literature is recorded in text, allowing preservation and wider distribution. Both forms are important in literary studies, with oral traditions influencing written works.",
              keyPoints: [
                "Oral literature: folktales, myths, legends, proverbs, songs",
                "Transmitted through performance and memory",
                "Features repetition, formulaic expressions, audience participation",
                "Written literature: preserved in text for permanence",
                "Oral traditions influence written literary styles",
                "African literature has rich oral traditions",
                "Many written works adapt oral narratives"
              ]
            },
            {
              title: "Functions of Literature",
              content: "Literature serves multiple purposes in society. It entertains readers through engaging narratives and beautiful language. It educates by exploring ideas, historical periods, and diverse perspectives. Literature preserves cultural heritage and traditions. It provides moral instruction and social commentary. Literature also allows readers to experience different lives and emotions vicariously, developing empathy and understanding.",
              keyPoints: [
                "Entertainment: provides pleasure and escapism",
                "Education: explores ideas, history, human nature",
                "Cultural preservation: records traditions and values",
                "Moral instruction: teaches lessons and values",
                "Social commentary: critiques society and injustice",
                "Emotional catharsis: releases and processes emotions",
                "Empathy development: understanding different perspectives",
                "Language enrichment: expands vocabulary and expression"
              ]
            },
            {
              title: "Literary Genres",
              content: "Literary works are classified into three main genres: prose (novels, short stories, novellas), poetry (lyric, narrative, dramatic), and drama (tragedy, comedy). Each genre has distinct characteristics, conventions, and techniques. Understanding genre helps readers approach texts with appropriate expectations and analytical tools. Genres can overlap and blend in contemporary works.",
              keyPoints: [
                "Prose: continuous writing in sentences and paragraphs (novels, stories)",
                "Poetry: concentrated language with rhythm, imagery, emotion",
                "Drama: written for performance, presented through dialogue and action",
                "Each genre has unique conventions and techniques",
                "Subgenres exist within main categories",
                "Modern works may blend genres (prose poetry, verse drama)",
                "Genre affects structure, language, and reading experience"
              ]
            }
          ],
          objectives: [
            "Define literature and understand its scope",
            "Distinguish between oral and written literature",
            "Identify the various functions of literature in society",
            "Recognize the main literary genres and their characteristics"
          ]
        },
        {
          title: "Literary Terms and Concepts",
          subtopics: [
            {
              title: "Theme",
              content: "Theme is the central idea, message, or underlying meaning of a literary work. It's the author's commentary on life, society, or human nature - what the work is really about beyond its plot. Themes are usually not stated explicitly but are revealed through characters, plot, symbols, and other literary devices. Major themes recur throughout a work while minor themes appear less prominently.",
              keyPoints: [
                "Central idea or message of a literary work",
                "What the work says about life and human experience",
                "Usually implicit rather than explicitly stated",
                "Revealed through characters, plot, symbols, conflict",
                "Common themes: love, death, betrayal, coming of age, power, identity",
                "A work may have multiple themes",
                "Theme vs. topic: love is a topic, 'love conquers all' is a theme",
                "Universal themes resonate across cultures and time periods"
              ]
            },
            {
              title: "Plot and Structure",
              content: "Plot is the sequence of events in a narrative, the story's structure from beginning to end. The classic plot structure includes exposition (introduction), rising action (complications), climax (turning point), falling action (consequences), and resolution/denouement (conclusion). Plots often involve conflict - person vs. person, person vs. self, person vs. society, or person vs. nature.",
              keyPoints: [
                "Plot: sequence of events making up the story",
                "Exposition: introduces characters, setting, situation",
                "Rising action: complications and conflicts develop",
                "Climax: highest point of tension, turning point",
                "Falling action: consequences of climax unfold",
                "Resolution: conflict resolved, loose ends tied",
                "Types of conflict: internal (within character) or external",
                "Plot vs. story: plot is how events are arranged; story is what happens"
              ]
            },
            {
              title: "Character and Characterization",
              content: "Characters are the people (or sometimes animals or beings) in a literary work. Characterization is how the author reveals character traits through direct description, speech, thoughts, actions, and interactions. Characters may be round (complex, multi-dimensional) or flat (one-dimensional), static (unchanged) or dynamic (changed by events). The protagonist is the main character; the antagonist opposes them.",
              keyPoints: [
                "Characters: individuals who populate the story",
                "Protagonist: main character, often hero",
                "Antagonist: opposes protagonist, creates conflict",
                "Round characters: complex, multi-dimensional, realistic",
                "Flat characters: one-dimensional, stereotypical",
                "Dynamic characters: undergo significant change",
                "Static characters: remain essentially unchanged",
                "Characterization methods: direct description, dialogue, actions, thoughts"
              ]
            },
            {
              title: "Setting",
              content: "Setting is the time and place where a story occurs. It includes physical location, historical period, season, time of day, weather, and social environment. Setting can be merely a backdrop or can actively influence plot and character. It creates atmosphere, affects character behavior, reflects theme, and provides social or historical context essential to understanding the work.",
              keyPoints: [
                "Time: historical period, season, time of day",
                "Place: geographical location, physical environment",
                "Social environment: culture, customs, social conditions",
                "Setting influences mood and atmosphere",
                "Can reflect or contrast with character emotions",
                "May be integral to plot or merely background",
                "Historical/cultural setting affects character choices",
                "Setting can symbolize themes or ideas"
              ]
            },
            {
              title: "Point of View and Narrative Perspective",
              content: "Point of view refers to who tells the story and how much they know. First-person narration uses 'I' and is told by a character in the story. Third-person narration uses 'he/she/they' and may be omniscient (narrator knows everything including thoughts) or limited (knows only what one character knows). Second-person ('you') is rare. Point of view affects what information readers receive and how they experience the story.",
              keyPoints: [
                "First-person: narrator is character in story (I, we)",
                "Second-person: rare, addresses reader as 'you'",
                "Third-person limited: narrator knows one character's thoughts",
                "Third-person omniscient: narrator knows all thoughts and events",
                "Objective/dramatic: narrator reports only observable actions",
                "Reliable vs. unreliable narrator",
                "Point of view affects reader's knowledge and sympathy",
                "Can create suspense by limiting information"
              ]
            },
            {
              title: "Style and Tone",
              content: "Style is an author's distinctive way of writing - their choice of words, sentence structure, and literary devices. It's the 'how' of writing. Tone is the author's attitude toward the subject or audience, conveyed through word choice and style. Tone can be serious, humorous, ironic, sarcastic, formal, informal, optimistic, pessimistic, etc. Style and tone work together to create the work's overall feel.",
              keyPoints: [
                "Style: author's distinctive way of writing",
                "Includes diction, syntax, imagery, literary devices",
                "Can be formal or informal, simple or complex",
                "Tone: author's attitude toward subject/audience",
                "Tone examples: serious, humorous, ironic, sarcastic, critical",
                "Created through word choice, imagery, sentence structure",
                "Style and tone are signature elements of an author",
                "Both affect reader's emotional response"
              ]
            }
          ],
          objectives: [
            "Identify and analyze themes in literary works",
            "Understand plot structure and types of conflict",
            "Analyze character development and characterization techniques",
            "Recognize the importance of setting in literature",
            "Distinguish different points of view and their effects",
            "Identify style and tone in literary texts"
          ]
        }
      ]
    }
  },
  {
    id: "lit-002",
    subjectId: "literature",
    title: "Poetry",
    order: 2,
    content: {
      overview: "Poetry is a literary genre characterized by concentrated language, rhythm, sound patterns, and imagery to evoke emotions and convey meaning. It uses economical language where every word counts. Poetry can be lyric (expressing emotions), narrative (telling stories), or dramatic (presenting characters speaking). Understanding poetic devices and forms is essential for appreciation and analysis.",
      topics: [
        {
          title: "Elements of Poetry",
          subtopics: [
            {
              title: "Rhythm and Meter",
              content: "Rhythm is the pattern of stressed and unstressed syllables in poetry, creating musicality. Meter is organized rhythm following specific patterns. Common meters include iambic (unstressed-stressed), trochaic (stressed-unstressed), anapestic (unstressed-unstressed-stressed), and dactylic (stressed-unstressed-unstressed). The number of feet per line determines the meter name: monometer (1), dimeter (2), trimeter (3), tetrameter (4), pentameter (5), hexameter (6).",
              keyPoints: [
                "Rhythm: pattern of stressed and unstressed syllables",
                "Meter: organized rhythmic pattern",
                "Iambic: unstressed-STRESSED (most common in English)",
                "Trochaic: STRESSED-unstressed",
                "Anapestic: unstressed-unstressed-STRESSED",
                "Dactylic: STRESSED-unstressed-unstressed",
                "Iambic pentameter: five iambic feet per line (Shakespeare's sonnets)",
                "Free verse: no regular meter or rhyme scheme"
              ]
            },
            {
              title: "Rhyme and Sound Devices",
              content: "Rhyme is the repetition of similar sounds, usually at line endings. Rhyme schemes are patterns designated by letters (ABAB, AABB). End rhyme occurs at line ends; internal rhyme within lines. Sound devices include alliteration (repeated initial consonants), assonance (repeated vowel sounds), consonance (repeated consonant sounds), and onomatopoeia (words imitating sounds). These create musicality and emphasis.",
              keyPoints: [
                "End rhyme: rhyme at line endings (most common)",
                "Internal rhyme: rhyme within a line",
                "Rhyme scheme: pattern of rhymes (ABAB, AABB, ABCB)",
                "Alliteration: repeated initial consonant sounds (Peter Piper picked)",
                "Assonance: repeated vowel sounds (fleet feet sweep)",
                "Consonance: repeated consonant sounds (pitter patter)",
                "Onomatopoeia: words imitating sounds (buzz, hiss, crash)",
                "Sounds create mood, emphasis, and unity"
              ]
            },
            {
              title: "Imagery and Sensory Language",
              content: "Imagery is descriptive language appealing to the senses (sight, sound, taste, touch, smell), creating vivid mental pictures. It makes abstract ideas concrete and helps readers experience what's described. Visual imagery is most common, but effective poetry uses multiple senses. Imagery evokes emotions and makes poems memorable, allowing readers to see, hear, and feel what the poet describes.",
              keyPoints: [
                "Imagery: language creating sensory experiences",
                "Visual imagery: appeals to sight (most common)",
                "Auditory imagery: appeals to hearing",
                "Tactile imagery: appeals to touch",
                "Olfactory imagery: appeals to smell",
                "Gustatory imagery: appeals to taste",
                "Makes abstract concepts concrete and vivid",
                "Evokes emotions and creates atmosphere"
              ]
            },
            {
              title: "Figurative Language",
              content: "Figurative language uses words beyond their literal meanings to create effects, add layers of meaning, or make comparisons. It includes metaphor (implied comparison), simile (comparison using 'like' or 'as'), personification (giving human qualities to non-human things), hyperbole (exaggeration), and understatement. Figurative language is central to poetry, creating depth and richness of meaning.",
              keyPoints: [
                "Metaphor: direct comparison without 'like' or 'as' (Life is a journey)",
                "Simile: comparison using 'like' or 'as' (brave as a lion)",
                "Personification: human qualities to non-human (Death smiled)",
                "Hyperbole: deliberate exaggeration (I've told you a million times)",
                "Understatement: deliberate downplay for effect",
                "Symbol: object representing abstract idea (dove = peace)",
                "Apostrophe: addressing absent person or abstract concept",
                "Figurative language adds depth and layers of meaning"
              ]
            }
          ],
          objectives: [
            "Identify and analyze rhythm and meter in poetry",
            "Recognize rhyme schemes and sound devices",
            "Understand the use of imagery and sensory language",
            "Identify and interpret figurative language in poems"
          ]
        },
        {
          title: "Poetic Forms and Types",
          subtopics: [
            {
              title: "Sonnet",
              content: "A sonnet is a 14-line poem with specific rhyme schemes and meter, traditionally in iambic pentameter. The Italian/Petrarchan sonnet divides into an octave (8 lines, ABBAABBA) presenting a problem, and a sestet (6 lines, various schemes) providing resolution. The English/Shakespearean sonnet has three quatrains (ABAB CDCD EFEF) and a closing couplet (GG). Sonnets traditionally explore themes of love, beauty, mortality.",
              keyPoints: [
                "14 lines, traditionally iambic pentameter",
                "Italian/Petrarchan: octave (ABBAABBA) + sestet (CDECDE or CDCDCD)",
                "English/Shakespearean: three quatrains + couplet (ABAB CDCD EFEF GG)",
                "Volta: turn or shift in thought (after octave or before couplet)",
                "Traditional themes: love, beauty, time, mortality",
                "Requires skill in compressed expression",
                "Famous sonneteers: Shakespeare, Petrarch, Milton",
                "Modern variations may deviate from strict form"
              ]
            },
            {
              title: "Lyric Poetry",
              content: "Lyric poetry expresses personal emotions and thoughts, often in first person. Originally meant to be sung to a lyre, lyric poems are typically short, musical, and focused on a single moment or emotion. Types include odes (elaborate, elevated poems of praise), elegies (poems of mourning), and songs. Lyric poetry emphasizes mood and emotion over narrative.",
              keyPoints: [
                "Expresses personal emotions and thoughts",
                "Usually short and musical in quality",
                "Often uses first person (I, my, me)",
                "Focuses on single moment, image, or emotion",
                "Types: ode, elegy, song, haiku, sonnet",
                "Ode: elaborate poem of praise (Ode to a Nightingale)",
                "Elegy: lament for the dead",
                "Emphasizes subjective experience and feeling"
              ]
            },
            {
              title: "Narrative Poetry",
              content: "Narrative poetry tells a story with characters, setting, plot, and conflict, combining poetic techniques with storytelling. It includes epics (long poems about heroic deeds), ballads (story songs with repeated refrains), and shorter narrative verses. Unlike prose narratives, narrative poems use poetic devices like rhythm, rhyme, and imagery. They may be short or book-length.",
              keyPoints: [
                "Tells a story with characters, plot, setting",
                "Combines storytelling with poetic techniques",
                "Epic: long narrative of heroic deeds (Iliad, Odyssey, Beowulf)",
                "Ballad: story in song form, often with refrain",
                "Traditional ballad form: quatrains, ABCB rhyme",
                "May be short or very long",
                "Uses dialogue, action, description",
                "Tells story through poetic rather than prose language"
              ]
            },
            {
              title: "Free Verse and Modern Forms",
              content: "Free verse poetry doesn't follow regular meter, rhyme schemes, or fixed forms. It uses natural speech rhythms, line breaks for effect, and other poetic devices without traditional constraints. Developed in the 19th-20th centuries, free verse allows greater flexibility and experimentation. However, it still requires craftsmanship in line breaks, imagery, and sound. Modern forms also include prose poetry and experimental structures.",
              keyPoints: [
                "No regular meter or rhyme scheme",
                "Uses natural speech rhythms and cadences",
                "Line breaks create emphasis and meaning",
                "Still uses imagery, figurative language, sound devices",
                "Greater freedom but requires artistic discipline",
                "Developed by modernist poets (Whitman, Eliot)",
                "Prose poetry: poetic language in prose format",
                "Contemporary poetry often experimental in form"
              ]
            }
          ],
          objectives: [
            "Identify and analyze different poetic forms",
            "Understand the structure and characteristics of sonnets",
            "Distinguish between lyric, narrative, and dramatic poetry",
            "Appreciate both traditional and modern poetic forms"
          ]
        },
        {
          title: "Analyzing Poetry",
          subtopics: [
            {
              title: "Understanding Poetic Language",
              content: "Poetry uses condensed, precise language where every word is carefully chosen for meaning, sound, and effect. Words may have multiple meanings or associations (connotations) beyond dictionary definitions (denotations). Poets exploit ambiguity, wordplay, and compression. Understanding requires attention to both what is said and how it's said, considering diction, syntax, imagery, and figurative language.",
              keyPoints: [
                "Poetry uses economical, concentrated language",
                "Every word chosen for meaning, sound, placement",
                "Denotation: literal dictionary meaning",
                "Connotation: associated meanings and feelings",
                "Words may be deliberately ambiguous or multi-layered",
                "Pay attention to word order and syntax",
                "Consider historical/cultural context of language",
                "Read poems multiple times for full understanding"
              ]
            },
            {
              title: "Identifying Theme and Meaning",
              content: "A poem's theme is its central insight about life or human experience. Unlike prose, poems rarely state themes directly - they emerge from imagery, symbols, tone, and the interplay of all poetic elements. To identify theme, consider the poem's subject, tone, imagery patterns, symbols, and speaker's perspective. What is the poet saying about the human condition? Themes may be complex and multifaceted.",
              keyPoints: [
                "Theme: central insight or message about life",
                "Usually implicit rather than explicitly stated",
                "Emerges from all elements working together",
                "Consider subject matter, images, symbols, tone",
                "Ask: What is the poem saying about this subject?",
                "Poems may have multiple, complex themes",
                "Avoid oversimplifying to single moral",
                "Support interpretations with textual evidence"
              ]
            },
            {
              title: "Speaker and Situation",
              content: "The speaker is the voice in the poem, which may or may not be the poet. Understanding who is speaking, to whom, and in what situation is crucial. Consider the speaker's perspective, emotions, and reliability. The dramatic situation includes when and where the speaking occurs and what's happening. Don't assume the speaker is the poet - many poems use personas or characters as speakers.",
              keyPoints: [
                "Speaker: the voice speaking in the poem",
                "Speaker is not necessarily the poet",
                "May be a character, persona, or first-person narrator",
                "Consider speaker's perspective, emotions, biases",
                "Who is being addressed? (audience within poem)",
                "What is the dramatic situation?",
                "When and where is the speaker speaking?",
                "Understanding speaker aids interpretation"
              ]
            },
            {
              title: "Tone and Mood",
              content: "Tone is the speaker's attitude toward the subject or audience, while mood is the emotional atmosphere the poem creates for readers. Tone may be serious, playful, ironic, angry, melancholic, etc. Mood is the feeling readers experience - joy, sadness, tension, peace. Both are created through diction, imagery, rhythm, and sound. Identifying tone and mood is essential for understanding the poem's meaning and effect.",
              keyPoints: [
                "Tone: speaker's attitude toward subject/audience",
                "Mood: emotional atmosphere, reader's feeling",
                "Tone examples: serious, playful, ironic, bitter, loving, angry",
                "Mood examples: joyful, melancholic, tense, peaceful, ominous",
                "Created through word choice, imagery, sound, rhythm",
                "Tone affects interpretation of meaning",
                "Irony: saying one thing but meaning another",
                "Tone and mood may shift within a poem"
              ]
            }
          ],
          objectives: [
            "Analyze poetic language for meaning and effect",
            "Identify themes in poetry through textual evidence",
            "Understand the role of speaker and dramatic situation",
            "Recognize and interpret tone and mood in poems"
          ]
        }
      ]
    }
  },
  {
    id: "lit-003",
    subjectId: "literature",
    title: "Prose Fiction",
    order: 3,
    content: {
      overview: "Prose fiction encompasses novels, short stories, and novellas - narrative works written in ordinary language (prose) featuring invented characters and events. While fiction, these works explore real human experiences and truths. Prose fiction is the most popular literary genre, offering extended exploration of characters, themes, and situations. Analysis focuses on narrative elements, techniques, and interpretation.",
      topics: [
        {
          title: "Types of Prose Fiction",
          subtopics: [
            {
              title: "The Novel",
              content: "A novel is a long prose narrative, typically over 40,000 words, allowing extended character development, complex plots, and exploration of themes. Novels often span significant time periods and include multiple settings and subplots. They provide in-depth psychological realism and social commentary. Types include bildungsroman (coming-of-age), historical novels, psychological novels, and social novels. The novel's length allows comprehensive treatment of subjects.",
              keyPoints: [
                "Long prose narrative (typically 40,000+ words)",
                "Extended character development and plot complexity",
                "Multiple characters, settings, subplots",
                "Explores themes in depth over time",
                "Types: bildungsroman, historical, psychological, social, romance",
                "Bildungsroman: coming-of-age story (David Copperfield)",
                "Allows comprehensive exploration of human experience",
                "Most popular and widely-read literary form"
              ]
            },
            {
              title: "The Short Story",
              content: "A short story is brief prose fiction, typically 1,000-20,000 words, focusing on a single incident, character, or theme. Unlike novels, short stories aim for unity of effect with compressed time, limited characters, and focused action. They often feature a moment of revelation or crisis. The form demands precision and economy, with every element contributing to the overall effect. Short stories offer intense, concentrated reading experiences.",
              keyPoints: [
                "Brief prose narrative (1,000-20,000 words)",
                "Single incident, character, or theme",
                "Unity of effect: all elements contribute to one impression",
                "Compressed time frame and limited settings",
                "Few characters, focused action",
                "Often builds to moment of revelation (epiphany)",
                "Requires economy and precision",
                "Examples: O. Henry, Chinua Achebe, Edgar Allan Poe"
              ]
            },
            {
              title: "The Novella",
              content: "A novella is medium-length prose fiction, between a short story and novel (roughly 20,000-40,000 words). It's longer than a short story but more focused than a novel, often exploring a single theme or character arc without the extensive subplots of novels. Novellas allow more development than short stories while maintaining concentration. Examples include Heart of Darkness by Joseph Conrad and The Metamorphosis by Franz Kafka.",
              keyPoints: [
                "Medium-length fiction (20,000-40,000 words)",
                "Between short story and novel in length",
                "More focused than novel, more developed than short story",
                "Usually explores single theme or character arc",
                "Limited subplots and characters compared to novels",
                "Allows depth while maintaining unity",
                "Examples: Heart of Darkness, The Metamorphosis, Animal Farm",
                "Popular form for concentrated storytelling"
              ]
            }
          ],
          objectives: [
            "Distinguish between novels, short stories, and novellas",
            "Understand the characteristics of each prose form",
            "Recognize how form affects content and style",
            "Identify different types of novels and their features"
          ]
        },
        {
          title: "Narrative Techniques",
          subtopics: [
            {
              title: "Plot Structure and Conflict",
              content: "Plot is the organized sequence of events in a story. Classic structure includes exposition (background), rising action (complications), climax (crisis), falling action (aftermath), and resolution. Conflict drives plot - the struggle between opposing forces. Types include person vs. person (external), person vs. self (internal), person vs. society, person vs. nature, and person vs. technology/fate. Understanding conflict illuminates character and theme.",
              keyPoints: [
                "Exposition: introduces characters, setting, situation",
                "Rising action: conflict develops, complications arise",
                "Climax: turning point, moment of highest tension",
                "Falling action: events following climax",
                "Resolution/denouement: conflict resolved, story concludes",
                "External conflict: character vs. outside force",
                "Internal conflict: character vs. self (psychological)",
                "Conflict reveals character and develops theme"
              ]
            },
            {
              title: "Characterization Methods",
              content: "Characterization is how authors create and develop characters. Direct characterization explicitly describes character traits. Indirect characterization reveals character through actions, speech, thoughts, appearance, and others' reactions (STEAL: Speech, Thoughts, Effects on others, Actions, Looks). Round characters are complex and realistic; flat characters are one-dimensional. Dynamic characters change; static characters remain the same. Effective characterization creates believable, memorable characters.",
              keyPoints: [
                "Direct characterization: author explicitly describes traits",
                "Indirect characterization: revealed through STEAL",
                "Speech: what character says and how",
                "Thoughts: inner thoughts and feelings",
                "Effects: how others react to character",
                "Actions: what character does",
                "Looks: physical appearance",
                "Show, don't tell: indirect characterization more effective"
              ]
            },
            {
              title: "Point of View and Narration",
              content: "Point of view determines who tells the story and what information readers receive. First-person (I) narration provides intimate access to one character's experience but limits perspective. Third-person limited knows one character's thoughts; third-person omniscient knows all characters' thoughts and events. Objective point of view reports only observable actions. Narrative voice (formal, colloquial, unreliable) also affects story presentation and reader interpretation.",
              keyPoints: [
                "First-person: narrator is character (I, we)",
                "Third-person limited: follows one character's perspective",
                "Third-person omniscient: all-knowing narrator",
                "Objective: reports only observable actions",
                "Stream of consciousness: unstructured thoughts",
                "Reliable narrator: trustworthy account",
                "Unreliable narrator: biased or deceptive account",
                "Point of view controls information and sympathy"
              ]
            },
            {
              title: "Setting and Atmosphere",
              content: "Setting encompasses time, place, and social environment. It can be merely backdrop or actively influence plot and character. Setting creates atmosphere - the emotional quality surrounding the story. Gothic settings create mystery and fear; pastoral settings suggest peace. Setting may reflect character psychology, symbolize themes, or provide historical/cultural context. In some works, setting functions almost as a character itself.",
              keyPoints: [
                "Time: historical period, season, time of day",
                "Place: geographical location, physical environment",
                "Social setting: culture, customs, social structures",
                "Setting creates atmosphere and mood",
                "Can be integral to plot or character",
                "May symbolize psychological states or themes",
                "Provides historical and cultural context",
                "Influences character behavior and choices"
              ]
            },
            {
              title: "Foreshadowing and Flashback",
              content: "Foreshadowing plants clues about future events, creating suspense and unity. It may be subtle (symbolic imagery) or direct (prophecies, dreams). Flashback interrupts chronological narrative to present earlier events, providing background or context. Both techniques manipulate time to enhance storytelling. Foreshadowing makes later events seem inevitable; flashback explains present situations. Effective use requires balance - too much foreshadowing spoils surprises; excessive flashback disrupts narrative flow.",
              keyPoints: [
                "Foreshadowing: hints about future events",
                "Creates suspense, tension, sense of inevitability",
                "Can be subtle or obvious",
                "Makes story cohesive when later events occur",
                "Flashback: interrupts present to show past events",
                "Provides background, context, character history",
                "In medias res: starting in middle, then flashing back",
                "Both manipulate chronological time for effect"
              ]
            },
            {
              title: "Symbolism and Allegory",
              content: "A symbol is something that represents something beyond its literal meaning - an object, character, or event standing for abstract ideas. Symbols may be conventional (dove = peace) or contextual (created by the work). Allegory is extended metaphor where every element represents something else, often moral or political ideas. Understanding symbols and allegory adds depth to interpretation, revealing themes and meanings beyond surface narrative.",
              keyPoints: [
                "Symbol: concrete object/character representing abstract idea",
                "Conventional symbols: culturally established meanings",
                "Contextual symbols: meaning created within work",
                "May have multiple meanings or interpretations",
                "Allegory: sustained symbolic narrative",
                "In allegory, characters/events represent abstract concepts",
                "Example: Animal Farm (allegory of Russian Revolution)",
                "Symbols enrich meaning and thematic depth"
              ]
            }
          ],
          objectives: [
            "Analyze plot structure and types of conflict",
            "Identify and evaluate characterization methods",
            "Understand how point of view affects narrative",
            "Recognize the significance of setting and atmosphere",
            "Identify and interpret foreshadowing and flashback",
            "Understand symbolism and allegory in prose fiction"
          ]
        },
        {
          title: "African Prose Fiction",
          subtopics: [
            {
              title: "Themes in African Literature",
              content: "African prose fiction explores themes rooted in African experiences: colonialism and its aftermath, cultural conflict between tradition and modernity, political corruption and dictatorship, identity and self-definition, social injustice and inequality, gender roles and women's struggles, war and violence, and the search for authentic African voice. These themes reflect historical realities while addressing universal human concerns.",
              keyPoints: [
                "Colonialism: impact of European rule on African societies",
                "Cultural conflict: tradition vs. Western modernity",
                "Political corruption: abuse of power post-independence",
                "Identity: search for African identity and pride",
                "Social injustice: class, ethnic, and gender inequality",
                "Gender: women's struggles in patriarchal societies",
                "War and violence: civil conflicts and their consequences",
                "Postcolonial experience: independence and disillusionment"
              ]
            },
            {
              title: "Notable African Authors and Works",
              content: "African literature includes authors like Chinua Achebe (Things Fall Apart, exploring colonialism's impact), Wole Soyinka (Nobel laureate, Death and the King's Horseman), Ngugi wa Thiong'o (Weep Not, Child, addressing Kenyan struggle), Chimamanda Adichie (Purple Hibiscus, contemporary Nigerian issues), and many others. These writers use literature to preserve culture, critique society, and tell African stories from African perspectives.",
              keyPoints: [
                "Chinua Achebe: Things Fall Apart, No Longer at Ease",
                "Wole Soyinka: Death and the King's Horseman, The Interpreters",
                "Ngugi wa Thiong'o: Weep Not, Child, A Grain of Wheat",
                "Chimamanda Adichie: Purple Hibiscus, Half of a Yellow Sun",
                "Buchi Emecheta: The Joys of Motherhood (women's experiences)",
                "Works address African experiences and perspectives",
                "Combine traditional oral elements with Western literary forms",
                "International recognition of African literary excellence"
              ]
            },
            {
              title: "Oral Tradition Influences",
              content: "African prose fiction is influenced by oral tradition: use of proverbs and folk wisdom, episodic structure resembling told tales, communal rather than individual focus, incorporation of folklore and myths, emphasis on moral lessons, and storytelling techniques like direct address to audience. These elements create distinctive African literary style, connecting written literature to cultural heritage.",
              keyPoints: [
                "Proverbs: condensed wisdom integral to narrative",
                "Folktale elements: trickster figures, moral lessons",
                "Episodic structure: linked episodes rather than tight plot",
                "Communal focus: emphasis on community over individual",
                "Incorporation of myths, legends, traditional stories",
                "Direct address: narrator speaking directly to reader",
                "Oral storytelling rhythms and techniques",
                "Connects written literature to oral cultural heritage"
              ]
            },
            {
              title: "Language and Style",
              content: "African writers face linguistic choices: writing in indigenous languages or colonial languages (English, French, Portuguese). Many African novels in English incorporate indigenous words, proverbs, and speech patterns, creating distinctive style that reflects African reality. Code-switching, pidgin, and adapted English capture authentic voices. Style may blend Western literary conventions with African storytelling traditions, creating unique hybrid forms.",
              keyPoints: [
                "Language choice: indigenous language vs. colonial language",
                "Incorporation of indigenous words and expressions",
                "Use of proverbs and traditional sayings",
                "Pidgin and non-standard English for authenticity",
                "Translation of cultural concepts for outside audiences",
                "Adaptation of English to African contexts",
                "Blending of Western literary forms with African content",
                "Style reflects cultural identity and authenticity"
              ]
            }
          ],
          objectives: [
            "Identify major themes in African prose fiction",
            "Recognize notable African authors and their works",
            "Understand oral tradition influences on African writing",
            "Analyze language choices and stylistic features in African literature"
          ]
        }
      ]
    }
  },
  {
    id: "lit-004",
    subjectId: "literature",
    title: "Drama",
    order: 4,
    content: {
      overview: "Drama is literature written for performance, presented through dialogue and action before an audience. Unlike prose and poetry read privately, drama is meant to be seen and heard. It combines literary elements with theatrical aspects like staging, acting, costumes, and sets. Understanding drama requires analyzing both the written text and its performance potential. Drama includes tragedy, comedy, and various other forms.",
      topics: [
        {
          title: "Elements of Drama",
          subtopics: [
            {
              title: "Dramatic Structure",
              content: "Traditional dramatic structure, based on Aristotle and developed by Gustav Freytag, includes exposition (introduction), inciting incident (trigger event), rising action (complications), climax (crisis), falling action (consequences), and resolution/denouement (conclusion). Drama is typically divided into acts (major divisions) and scenes (smaller units within acts). Classical drama has five acts; modern drama often has three acts or is one continuous act.",
              keyPoints: [
                "Exposition: introduces characters, setting, situation",
                "Inciting incident: event that starts the main conflict",
                "Rising action: complications intensify conflict",
                "Climax: turning point, moment of highest tension",
                "Falling action: consequences unfold",
                "Resolution: conflict resolved, play concludes",
                "Acts: major divisions (classical: 5 acts; modern: often 3)",
                "Scenes: smaller units within acts"
              ]
            },
            {
              title: "Dialogue and Monologue",
              content: "Dialogue is conversation between characters, the primary means of advancing plot and revealing character in drama. Subtext - what's implied beneath words - is crucial. Monologue is extended speech by one character. Soliloquy is speech alone on stage, revealing inner thoughts. Aside is speech heard by audience but not other characters. These techniques provide exposition, reveal psychology, and maintain dramatic tension.",
              keyPoints: [
                "Dialogue: conversation between characters",
                "Primary method of character development in drama",
                "Subtext: implied meanings beneath words",
                "Monologue: extended speech by one character",
                "Soliloquy: character alone, speaking thoughts aloud",
                "Aside: speech to audience, other characters don't hear",
                "Stichomythia: rapid back-and-forth dialogue",
                "Reveals character, advances plot, provides information"
              ]
            },
            {
              title: "Stage Directions and Setting",
              content: "Stage directions are playwright's instructions for actors, directors, and designers about movement, gestures, tone, lighting, sound, and setting. They appear in italics or brackets in scripts. Setting descriptions specify time and place. While essential, stage directions allow interpretive freedom - different productions of the same play vary. Understanding stage directions helps readers visualize performance and interpret the playwright's vision.",
              keyPoints: [
                "Stage directions: instructions for performance",
                "Indicate movement, gestures, tone, expression",
                "Describe settings, lighting, sound, props",
                "Appear in italics or brackets in text",
                "Setting: time and place of action",
                "May be realistic or abstract/symbolic",
                "Different productions interpret directions differently",
                "Help readers visualize performance"
              ]
            },
            {
              title: "Conflict and Action",
              content: "Conflict drives drama - it's the opposition between forces creating tension. Types include person vs. person (most common in drama), person vs. society, person vs. self (internal), and person vs. fate. Action encompasses both physical action and dramatic action (events occurring). Rising action builds tension through complications; falling action shows consequences. Conflict must be compelling and clearly defined for effective drama.",
              keyPoints: [
                "Conflict: opposition between forces",
                "Person vs. person: most common dramatic conflict",
                "Person vs. society: individual against social norms",
                "Person vs. self: internal psychological conflict",
                "Person vs. fate: struggle against destiny",
                "Action: both physical actions and events",
                "Rising action: complications intensify conflict",
                "Conflict creates dramatic tension and audience engagement"
              ]
            }
          ],
          objectives: [
            "Understand dramatic structure and its components",
            "Analyze dialogue, monologue, soliloquy, and aside",
            "Interpret stage directions and setting descriptions",
            "Identify types of conflict and their role in drama"
          ]
        },
        {
          title: "Types of Drama",
          subtopics: [
            {
              title: "Tragedy",
              content: "Tragedy is serious drama ending in catastrophe for the protagonist, typically death or ruin. Classical tragedy (Aristotle) features a noble protagonist with a tragic flaw (hamartia) leading to downfall. The protagonist experiences reversal of fortune (peripeteia) and recognition of truth (anagnorisis). Tragedy evokes pity and fear, producing catharsis (emotional purging). Modern tragedy may feature ordinary people and focus on social rather than character flaws.",
              keyPoints: [
                "Serious drama ending in protagonist's downfall",
                "Classical protagonist: noble, admirable, but flawed",
                "Tragic flaw (hamartia): character weakness causing downfall",
                "Hubris: excessive pride often serves as tragic flaw",
                "Reversal (peripeteia): sudden change in fortune",
                "Recognition (anagnorisis): protagonist realizes truth",
                "Catharsis: emotional purging for audience",
                "Examples: Oedipus Rex, Hamlet, Death of a Salesman"
              ]
            },
            {
              title: "Comedy",
              content: "Comedy is drama primarily aimed at humor and amusement, typically ending happily, often with marriage or reconciliation. Comedy features complications resolved favorably, misunderstandings cleared up, and social order restored. Types include romantic comedy (love stories), comedy of manners (satirizing social behavior), farce (broad physical humor), and satire (ridiculing vice or folly). Comedy ranges from light entertainment to serious social criticism.",
              keyPoints: [
                "Primary aim: humor and amusement",
                "Happy ending: marriage, reconciliation, success",
                "Complications resolved favorably",
                "Often features misunderstandings and mistaken identity",
                "Romantic comedy: love as central plot",
                "Comedy of manners: satirizes social conventions",
                "Farce: exaggerated physical humor, improbable situations",
                "Satire: uses humor to criticize vice and folly"
              ]
            },
            {
              title: "Tragicomedy",
              content: "Tragicomedy blends elements of tragedy and comedy, mixing serious and humorous elements. It may feature serious themes with comic scenes, noble and common characters, or a tragic situation with happy resolution. The form reflects life's mixture of joy and sorrow. Modern drama often resists pure genre categories, incorporating both tragic and comic elements to create complex, realistic representations of human experience.",
              keyPoints: [
                "Blends tragic and comic elements",
                "Serious themes with humorous scenes",
                "May have potential tragedy averted",
                "Mixes noble and common characters",
                "Reflects life's complexity: joy and sorrow mixed",
                "Resists pure genre classification",
                "Modern drama often tragicomic",
                "Example: Shakespeare's problem plays"
              ]
            },
            {
              title: "Modern and Contemporary Drama",
              content: "Modern drama (late 19th-20th century) broke from classical conventions, embracing realism, naturalism, symbolism, absurdism, and expressionism. Realism depicts ordinary life truthfully. Naturalism emphasizes environmental determinism. Absurdism (Beckett) portrays meaningless universe. Epic theatre (Brecht) encourages critical thinking over emotion. Contemporary drama continues experimenting with form, addressing current social issues and diverse perspectives.",
              keyPoints: [
                "Realism: truthful depiction of ordinary life",
                "Naturalism: environment and heredity determine fate",
                "Symbolism: uses symbols for psychological truths",
                "Expressionism: distorts reality to express inner psychology",
                "Absurdism: meaningless universe, lack of communication",
                "Epic theatre (Brecht): alienation effect, critical engagement",
                "Contemporary drama: experimental forms, diverse voices",
                "Addresses current social, political, and personal issues"
              ]
            }
          ],
          objectives: [
            "Distinguish between tragedy, comedy, and tragicomedy",
            "Understand characteristics of classical tragedy",
            "Identify types and purposes of comedy",
            "Recognize modern and contemporary dramatic movements"
          ]
        },
        {
          title: "African Drama",
          subtopics: [
            {
              title: "Themes in African Drama",
              content: "African drama explores themes similar to African prose: colonialism and resistance, cultural conflict and identity, political corruption and tyranny, social injustice, tradition versus modernity, and community values. Wole Soyinka's works examine Yoruba culture and political issues. Ama Ata Aidoo addresses women's issues. Ngugi wa Thiong'o critiques neo-colonialism. African drama uses theatre as social commentary and cultural preservation.",
              keyPoints: [
                "Colonialism: resistance and impact of colonial rule",
                "Cultural conflict: traditional values vs. Western influence",
                "Political corruption: critique of dictators and tyranny",
                "Social injustice: inequality, oppression, poverty",
                "Identity: African self-definition and cultural pride",
                "Community: emphasis on collective over individual",
                "Gender: women's roles and struggles",
                "Theatre as social commentary and activism"
              ]
            },
            {
              title: "Notable African Dramatists",
              content: "Wole Soyinka (Nigeria), Nobel Prize winner, writes complex plays exploring Yoruba mythology and politics (Death and the King's Horseman, The Lion and the Jewel). Ama Ata Aidoo (Ghana) addresses women's issues (Anowa, The Dilemma of a Ghost). Athol Fugard (South Africa) dramatizes apartheid's impact. Ngugi wa Thiong'o advocates theatre in indigenous languages. These playwrights use drama for cultural expression and social change.",
              keyPoints: [
                "Wole Soyinka: Death and the King's Horseman, The Lion and the Jewel",
                "Combines Yoruba mythology with contemporary issues",
                "Ama Ata Aidoo: The Dilemma of a Ghost, Anowa",
                "Athol Fugard: Blood Knot, Master Harold...and the Boys",
                "Ngugi wa Thiong'o: The Trial of Dedan Kimathi",
                "Efua Sutherland: Edufa, Foriwa",
                "Use drama for cultural preservation and social critique",
                "International recognition of African theatrical excellence"
              ]
            },
            {
              title: "Traditional Performance Influences",
              content: "African drama incorporates elements from traditional performance: ritual, ceremony, music, dance, drumming, masks, and audience participation. Rather than European-style realistic drama, African theatre may be stylized, symbolic, and communal. The boundaries between performer and spectator blur. This connects contemporary African drama to indigenous performance traditions, creating distinctive theatrical forms that honor cultural heritage.",
              keyPoints: [
                "Incorporation of ritual and ceremony",
                "Music and dance integral to performance",
                "Drumming and traditional instruments",
                "Use of masks and symbolic costumes",
                "Audience participation and response",
                "Communal rather than individualistic focus",
                "Stylized rather than strictly realistic",
                "Connects written drama to traditional performance"
              ]
            },
            {
              title: "Language and Form",
              content: "African dramatists face linguistic choices: writing in indigenous languages or colonial languages. Many incorporate indigenous expressions, proverbs, and speech patterns into English texts. Some use pidgin for authenticity. Form may blend Western dramatic structure with African performance traditions, creating hybrid theatrical forms. The goal is expressing African experiences and values while being accessible to both local and international audiences.",
              keyPoints: [
                "Language choice: indigenous vs. colonial languages",
                "Incorporation of proverbs and traditional sayings",
                "Use of pidgin and non-standard English",
                "Code-switching between languages",
                "Blend of Western dramatic structure and African forms",
                "Hybrid theatrical forms",
                "Expressing authentic African experiences",
                "Accessible to both local and international audiences"
              ]
            }
          ],
          objectives: [
            "Identify major themes in African drama",
            "Recognize notable African dramatists and their works",
            "Understand traditional performance influences on African drama",
            "Analyze language choices and formal innovations in African theatre"
          ]
        },
        {
          title: "Analyzing Drama",
          subtopics: [
            {
              title: "Character Analysis",
              content: "Analyzing dramatic characters requires examining what they say, do, and how others respond to them. Unlike prose, drama lacks narrator description - character emerges through dialogue and action. Consider character motivation, development, relationships, conflicts, and function in the play. Distinguish between protagonist (main character), antagonist (opposing force), and supporting characters. Evaluate whether characters are round or flat, dynamic or static.",
              keyPoints: [
                "Characters revealed through dialogue and action",
                "No narrator to describe characters directly",
                "Analyze what characters say and do",
                "Consider others' reactions to characters",
                "Examine character motivation and psychology",
                "Track character development through play",
                "Protagonist: main character driving action",
                "Antagonist: opposes protagonist, creates conflict"
              ]
            },
            {
              title: "Theme and Meaning",
              content: "Drama's themes emerge from plot, character, conflict, and dialogue. To identify themes, consider the central conflict, how it's resolved, what characters learn, and recurring ideas or patterns. Ask: What is the play saying about human nature, society, or life? Themes are rarely stated explicitly - they emerge from the entire play. Support thematic interpretations with specific evidence from the text.",
              keyPoints: [
                "Theme: central insight about life or human nature",
                "Emerges from all dramatic elements combined",
                "Consider central conflict and its resolution",
                "What do characters learn or fail to learn?",
                "Look for recurring ideas, images, or motifs",
                "Themes usually implicit rather than stated",
                "May have multiple, complex themes",
                "Support interpretations with textual evidence"
              ]
            },
            {
              title: "Dramatic Irony and Suspense",
              content: "Dramatic irony occurs when the audience knows something characters don't, creating tension. It allows audience to anticipate consequences characters can't foresee. Suspense is anxious uncertainty about what will happen. It's created through foreshadowing, delays, complications, and uncertainty. Both irony and suspense engage audience emotionally. Understanding these techniques reveals how playwrights manipulate audience response and create theatrical effects.",
              keyPoints: [
                "Dramatic irony: audience knows more than characters",
                "Creates tension and anticipation",
                "Allows audience to foresee consequences",
                "Suspense: uncertainty about outcomes",
                "Created through foreshadowing and delays",
                "Complications increase suspense",
                "Both engage audience emotionally",
                "Playwrights manipulate audience knowledge for effect"
              ]
            },
            {
              title: "Performance Considerations",
              content: "Drama exists fully only in performance. Analyzing drama should consider how it would be staged: actor interpretation, movement, tone of voice, pacing, lighting, sets, costumes, sound. Different productions interpret the same play differently. Reading drama requires imagination to visualize performance. Consider how staging choices affect meaning and audience response. The gap between text and performance allows creative interpretation.",
              keyPoints: [
                "Drama written for performance, not just reading",
                "Consider how lines would be delivered",
                "Actor interpretation affects meaning",
                "Staging choices: lighting, sets, costumes, blocking",
                "Different productions offer different interpretations",
                "Reading requires imagining performance",
                "Performance brings text to life",
                "Creative interpretations explore textual possibilities"
              ]
            }
          ],
          objectives: [
            "Analyze dramatic characters through dialogue and action",
            "Identify and interpret themes in drama",
            "Understand dramatic irony and suspense",
            "Consider performance aspects when analyzing drama"
          ]
        }
      ]
    }
  },
  {
    id: "lit-005",
    subjectId: "literature",
    title: "Literary Criticism and Analysis",
    order: 5,
    content: {
      overview: "Literary criticism is the analysis, interpretation, and evaluation of literary works. It involves examining how texts create meaning through language, structure, and techniques. Different critical approaches offer various lenses for understanding literature. Effective literary analysis requires close reading, evidence-based interpretation, and clear argumentation. This section covers approaches to analyzing and writing about literature.",
      topics: [
        {
          title: "Close Reading Techniques",
          subtopics: [
            {
              title: "Textual Analysis",
              content: "Close reading involves careful, detailed analysis of a text's language, structure, and techniques. It requires multiple readings: first for general understanding, then for analysis. Pay attention to word choice (diction), sentence structure (syntax), imagery, figurative language, patterns, repetitions, and ambiguities. Note significant details, connotations, and how elements work together. Close reading is the foundation of literary analysis.",
              keyPoints: [
                "Read text multiple times for understanding and analysis",
                "Examine word choice (diction) and connotations",
                "Analyze sentence structure and syntax",
                "Identify imagery and figurative language",
                "Note patterns, repetitions, contrasts",
                "Consider ambiguities and multiple meanings",
                "Pay attention to significant details",
                "Foundation for all literary interpretation"
              ]
            },
            {
              title: "Contextual Analysis",
              content: "Context includes historical period, author's biography, social conditions, literary movements, and cultural background. Understanding context enriches interpretation by revealing influences, allusions, and meanings not apparent from text alone. However, texts should be understood on their own terms first. Context illuminates but shouldn't limit interpretation. Consider historical, biographical, and cultural contexts when relevant to understanding the work.",
              keyPoints: [
                "Historical context: time period and events",
                "Biographical context: author's life and experiences",
                "Social/cultural context: society, customs, values",
                "Literary context: movements, influences, traditions",
                "Context enriches but shouldn't limit interpretation",
                "Text should stand on its own merits",
                "Consider what context reveals about meaning",
                "Use context to understand allusions and references"
              ]
            },
            {
              title: "Comparative Analysis",
              content: "Comparative analysis examines similarities and differences between two or more texts, revealing insights not apparent when studying works in isolation. Compare themes, techniques, characters, or perspectives. Look for both obvious and subtle connections. Comparison can illuminate each work's unique qualities and shared concerns. Effective comparison requires identifying meaningful bases for comparison and drawing insightful conclusions.",
              keyPoints: [
                "Compare themes across different works",
                "Examine similar or contrasting techniques",
                "Compare character types and development",
                "Consider different perspectives on similar subjects",
                "Look for both similarities and differences",
                "Comparison reveals unique qualities of each work",
                "Identify meaningful bases for comparison",
                "Draw insightful conclusions from comparison"
              ]
            }
          ],
          objectives: [
            "Apply close reading techniques to analyze texts",
            "Use contextual information to enhance interpretation",
            "Conduct effective comparative analysis",
            "Develop evidence-based interpretations"
          ]
        },
        {
          title: "Writing About Literature",
          subtopics: [
            {
              title: "Thesis and Argument",
              content: "A literary essay requires a clear thesis - a specific, arguable claim about the text. The thesis should be interpretive (not just factual), focused, and supportable with evidence. The essay argues for this interpretation, using textual evidence to support claims. Each paragraph should develop one aspect of the argument. Anticipate and address counterarguments. Effective literary argument is logical, evidence-based, and persuasive.",
              keyPoints: [
                "Thesis: specific, arguable claim about the text",
                "Should be interpretive, not just factual",
                "Focus on one clear argument",
                "Each paragraph supports thesis",
                "Use textual evidence for every claim",
                "Analyze evidence, don't just quote",
                "Address potential counterarguments",
                "Conclude by reinforcing thesis"
              ]
            },
            {
              title: "Using Textual Evidence",
              content: "Literary analysis requires supporting claims with evidence from the text - quotations, paraphrases, and specific references. Integrate quotations smoothly into your sentences. Follow each quotation with analysis explaining how it supports your point. Balance quotation and analysis - don't let quotes speak for themselves. Choose the most relevant evidence. Cite accurately using appropriate format. Evidence without analysis is insufficient; analysis without evidence is unpersuasive.",
              keyPoints: [
                "Support every claim with textual evidence",
                "Quote exact words when precise language matters",
                "Paraphrase when content matters more than wording",
                "Integrate quotations smoothly into sentences",
                "Always analyze quotations - explain significance",
                "Balance evidence and analysis",
                "Choose most relevant, compelling evidence",
                "Cite sources accurately"
              ]
            },
            {
              title: "Literary Analysis Structure",
              content: "Literary essays follow standard structure: introduction with thesis, body paragraphs developing argument, and conclusion. Introduction provides context and presents thesis. Each body paragraph begins with topic sentence advancing the argument, provides evidence and analysis, and connects to thesis. Transition between paragraphs to show logical progression. Conclusion synthesizes argument without merely repeating, potentially suggesting broader implications or applications.",
              keyPoints: [
                "Introduction: context, thesis statement",
                "Thesis should be clear and specific",
                "Body paragraphs: topic sentence, evidence, analysis",
                "Each paragraph develops one point supporting thesis",
                "Use transitions between paragraphs",
                "Maintain focus on thesis throughout",
                "Conclusion: synthesize argument, suggest implications",
                "Don't introduce new evidence in conclusion"
              ]
            },
            {
              title: "Literary Terminology",
              content: "Using correct literary terminology demonstrates sophistication and precision. Terms include elements (plot, character, setting), techniques (imagery, symbolism, foreshadowing), and concepts (theme, tone, irony). Use terms accurately and appropriately. Don't simply identify devices - explain their function and effect. Literary terminology is tools for analysis, not ends in themselves. Clear explanation matters more than terminology display.",
              keyPoints: [
                "Use literary terms accurately and appropriately",
                "Don't just identify devices - explain their effects",
                "Terms are tools for analysis",
                "Clarity and insight matter more than jargon",
                "Common terms: imagery, symbolism, irony, tone, theme",
                "Genre-specific terms: meter, rhyme (poetry); soliloquy (drama)",
                "Terminology demonstrates analytical sophistication",
                "Always explain significance, not just identify"
              ]
            }
          ],
          objectives: [
            "Develop clear, arguable thesis statements",
            "Use textual evidence effectively to support claims",
            "Structure coherent literary analysis essays",
            "Apply literary terminology appropriately in analysis"
          ]
        }
      ]
    }
  }
];
