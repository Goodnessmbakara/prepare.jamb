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

export const crkNotes: StudyNote[] = [
  // ============================================================
  // SECTION A: CREATION TO THE DIVISION OF THE KINGDOM
  // ============================================================
  {
    id: "crk-note-001",
    subjectId: "crk",
    title: "Creation Stories and the Fall",
    order: 1,
    content: {
      overview: "This section covers the creation accounts in Genesis, the nature of God as Creator, the creation of humanity in God's image, and the entry of sin into the world through the Fall.",
      topics: [
        {
          title: "The Creation Accounts",
          subtopics: [
            {
              title: "Genesis 1:1-31 - The Seven Days of Creation",
              content: `God created the world in six days and rested on the seventh:
- Day 1: Light and darkness (day and night)
- Day 2: Sky and waters separated
- Day 3: Dry land, seas, vegetation
- Day 4: Sun, moon, stars
- Day 5: Fish and birds
- Day 6: Animals and humans (male and female)
- Day 7: God rested and sanctified the Sabbath

The account emphasizes order, intentionality, and God's sovereignty over all creation. The refrain "God saw that it was good" appears throughout, culminating in "very good" after human creation.`,
              keyPoints: [
                "Creation ex nihilo (out of nothing) by God's word",
                "Progressive order from chaos to order",
                "Humanity created in God's image (Imago Dei)",
                "Humans given dominion over creation",
                "Sabbath rest established on the seventh day",
                "All creation declared good by God"
              ]
            },
            {
              title: "Genesis 2:4-25 - The Garden of Eden Account",
              content: `This complementary account focuses on humanity and relationship:
- God forms man from dust and breathes life into him
- God plants the Garden of Eden
- Adam is placed in the garden to work and care for it
- God commands: eat from any tree except the tree of knowledge of good and evil
- God creates animals and birds, Adam names them
- No suitable helper found for Adam
- God creates woman from Adam's rib
- They were both naked and felt no shame

This account emphasizes the relational nature of God, the special care in creating humans, and the intimacy of the first human relationships.`,
              keyPoints: [
                "Man formed from dust, woman from man's rib",
                "Divine breath gives life to humanity",
                "Garden of Eden as paradise and first home",
                "Command with consequences: death for disobedience",
                "Loneliness addressed through companionship",
                "Marriage instituted (man and woman become one flesh)",
                "Original innocence before sin"
              ]
            }
          ],
          objectives: [
            "Describe the two creation accounts and their complementary nature",
            "Explain the meaning of being created in God's image",
            "Understand God's nature as revealed in creation",
            "Identify the significance of the Sabbath",
            "Explain the purpose and significance of the Garden of Eden"
          ]
        },
        {
          title: "The Fall of Humanity",
          subtopics: [
            {
              title: "Genesis 3:1-24 - Temptation and Disobedience",
              content: `The serpent tempted Eve to question God's command:
- The serpent cast doubt: "Did God really say...?"
- Misrepresentation of consequences: "You will not surely die"
- Temptation: "You will be like God, knowing good and evil"
- Eve saw the fruit was good for food, pleasing to the eye, and desirable for wisdom
- She ate and gave some to Adam who was with her
- Their eyes were opened; they realized they were naked
- They sewed fig leaves together as covering
- They hid from God when He walked in the garden

The Fall represents humanity's choice to disobey God, the entry of sin into creation, and the broken relationship between God and humanity.`,
              keyPoints: [
                "The serpent's strategy: doubt, denial, and desire",
                "Eve's three-fold temptation: lust of flesh, lust of eyes, pride of life",
                "Adam's silent complicity in sin",
                "Immediate consequence: awareness of nakedness and shame",
                "Hiding from God symbolizes broken fellowship",
                "First sin: disobedience; first cover-up: inadequate self-effort"
              ]
            },
            {
              title: "Genesis 3:8-24 - Consequences and God's Response",
              content: `God confronted Adam and Eve after their sin:
- God called: "Where are you?"
- Adam blamed Eve; Eve blamed the serpent
- Curses pronounced:
  * Serpent: cursed to crawl, enmity with woman's offspring
  * Woman: pain in childbirth, desire for husband, he will rule over her
  * Man: cursed ground, toil to produce food, return to dust
- God made garments of skin for them (first sacrifice)
- Expelled from Eden to prevent eating from tree of life
- Cherubim and flaming sword guard the way to tree of life

God's response shows both justice and mercy - consequences for sin but also provision and the promise of redemption (the seed of woman will crush the serpent's head).`,
              keyPoints: [
                "God seeks the sinner (Where are you?)",
                "Blame-shifting instead of repentance",
                "Protoevangelium (first gospel): promise of the seed who will defeat Satan",
                "Universal effects of sin: physical, relational, spiritual death",
                "God's mercy: clothing provided (symbolizing atonement)",
                "Expulsion from Eden: protection from eternal life in sinful state",
                "Work becomes toilsome; relationships become strained"
              ]
            }
          ],
          objectives: [
            "Analyze the serpent's strategy of temptation",
            "Explain the consequences of the Fall for humanity",
            "Identify the first promise of redemption in Genesis 3:15",
            "Understand how sin affects human relationships with God and others",
            "Recognize God's justice and mercy in His response to sin"
          ]
        },
        {
          title: "Cain and Abel",
          subtopics: [
            {
              title: "Genesis 4:1-16 - The First Murder",
              content: `The story of the first brothers and first murder:
- Eve gave birth to Cain (farmer) and Abel (shepherd)
- Both brought offerings to the Lord
- God accepted Abel's offering but not Cain's
- Cain became angry and downcast
- God warned Cain: sin is crouching at the door
- Cain killed Abel in the field
- God confronted: "Where is your brother?"
- Cain's response: "Am I my brother's keeper?"
- God pronounced judgment: cursed from the ground, restless wanderer
- Cain complained the punishment was too great
- God put a mark on Cain for protection
- Cain settled in the land of Nod

This account shows the progression of sin from one generation to the next and introduces themes of worship, jealousy, murder, and divine protection.`,
              keyPoints: [
                "Right worship matters: heart attitude and obedience",
                "God accepted Abel's offering (faith, best of flock)",
                "Cain's offering rejected (poor attitude, wrong heart)",
                "Warning: master sin before it masters you",
                "Murder: sin escalates when unchecked",
                "Blood cries out for justice",
                "Consequences: alienation from land and community",
                "God's mercy: protection even for the guilty"
              ]
            }
          ],
          objectives: [
            "Explain why God accepted Abel's offering and rejected Cain's",
            "Understand the progression and consequences of sin",
            "Identify the responsibility we have for our siblings/neighbors",
            "Recognize God's warnings against sin",
            "Explain the balance of God's justice and mercy"
          ]
        },
        {
          title: "Noah and the Flood",
          subtopics: [
            {
              title: "Genesis 6-9 - The Great Flood and God's Covenant",
              content: `God's judgment on a corrupt world and salvation through Noah:
- Wickedness increased; God grieved creating humanity
- Noah found favor in God's eyes (righteous and blameless)
- God instructed Noah to build an ark (dimensions: 300x50x30 cubits)
- Noah, his family, and pairs of every animal entered the ark
- Flood lasted 40 days and 40 nights
- Waters covered the earth for 150 days
- Ark rested on Mount Ararat
- Noah sent out raven and dove (three times)
- God commanded them to leave the ark
- Noah built an altar and offered sacrifices
- God established covenant with Noah (never destroy earth by flood again)
- Rainbow as sign of covenant
- Noah blessed; commanded to multiply and fill the earth

The flood narrative demonstrates God's holiness and intolerance of sin, His justice in judgment, and His faithfulness in salvation for the righteous.`,
              keyPoints: [
                "Universal corruption except Noah's household",
                "Noah's righteousness: obedience and faith",
                "Ark as means of salvation (type of Christ)",
                "God's judgment on sin is complete",
                "God remembers and saves the righteous",
                "Covenant promises: no more worldwide flood",
                "Rainbow as eternal sign of God's faithfulness",
                "New beginning for humanity post-flood"
              ]
            }
          ],
          objectives: [
            "Describe the reasons for the flood",
            "Explain Noah's character and obedience",
            "Understand the significance of the covenant with Noah",
            "Identify the ark as a type of Christ (salvation)",
            "Explain the meaning and significance of the rainbow covenant"
          ]
        },
        {
          title: "The Tower of Babel",
          subtopics: [
            {
              title: "Genesis 11:1-9 - Pride and Dispersion",
              content: `Humanity's attempt to make a name for themselves:
- The whole world had one language
- People settled in the plain of Shinar
- They decided to build a city with a tower reaching to heaven
- Goal: make a name for themselves and not be scattered
- The Lord came down to see the city and tower
- God confused their language
- People scattered across the earth
- The city was called Babel (confusion)

This account reveals humanity's persistent pride and God's sovereign plan to spread humanity across the earth. It explains the origin of different languages and nations.`,
              keyPoints: [
                "Unity in language but rebellion in purpose",
                "Pride: building to heaven to make a name",
                "Disobedience: refusing to fill the earth as commanded",
                "God's sovereignty: He thwarts human pride",
                "Confusion of languages as judgment",
                "Forced dispersion fulfills original mandate",
                "Origin of nations and language diversity"
              ]
            }
          ],
          objectives: [
            "Explain the sin of the Tower of Babel builders",
            "Understand God's response to human pride",
            "Identify the origin of different languages and nations",
            "Recognize the pattern of human rebellion despite new beginnings"
          ]
        }
      ]
    }
  },
  {
    id: "crk-note-002",
    subjectId: "crk",
    title: "The Patriarchs: Abraham, Isaac, and Jacob",
    order: 2,
    content: {
      overview: "This section covers God's covenant relationship with the patriarchs Abraham, Isaac, and Jacob, and the beginning of the nation of Israel through God's promises and faithfulness.",
      topics: [
        {
          title: "Abraham: The Father of Faith",
          subtopics: [
            {
              title: "Genesis 12:1-9 - The Call and Covenant",
              content: `God's call to Abram (later renamed Abraham):
- God commanded Abram to leave his country, people, and father's household
- Destination: land God would show him
- Promises:
  * Make you into a great nation
  * Bless you and make your name great
  * You will be a blessing
  * Bless those who bless you, curse those who curse you
  * All peoples on earth will be blessed through you
- Abram obeyed at age 75, taking Sarai and Lot
- God appeared at Shechem: "To your offspring I will give this land"
- Abram built altars to worship God

The Abrahamic covenant is foundational to understanding God's redemptive plan for all humanity through the seed of Abraham (ultimately Jesus Christ).`,
              keyPoints: [
                "God initiates relationship through calling",
                "Faith requires leaving security for the unknown",
                "Covenant promises: land, descendants, blessing",
                "Universal scope: all nations blessed through Abraham",
                "Obedience precedes full understanding",
                "Worship response to God's promises",
                "Foundation of Jewish, Christian, and Islamic faiths"
              ]
            },
            {
              title: "Genesis 15 & 17 - Covenant Confirmation",
              content: `God formalized His covenant with Abraham:
- Abraham's concern: he remained childless
- God promised descendants as numerous as the stars
- Abraham believed God, credited as righteousness (Gen 15:6)
- Covenant ceremony with animal sacrifices
- God's covenant unconditional despite Abraham's doubts
- At age 99, God appeared again
- Name changed: Abram to Abraham (father of many nations)
- Sarai to Sarah (princess)
- Sign of covenant: circumcision for all males
- Promise: Sarah will have a son (Isaac)

The covenant includes promises of land, numerous descendants, and that kings will come from Abraham. This covenant is eternal and unconditional.`,
              keyPoints: [
                "Faith credited as righteousness (Rom 4:3, Gal 3:6)",
                "God's covenant is unconditional and eternal",
                "Circumcision as physical sign of covenant",
                "God's timing differs from human expectations",
                "Name changes signify new identity and destiny",
                "Laughter turns to joy (Sarah laughed, Isaac means laughter)",
                "God's promises extend to future generations"
              ]
            },
            {
              title: "Genesis 22:1-19 - The Test of Abraham",
              content: `God tested Abraham's faith and obedience:
- God commanded: "Take your son Isaac and offer him as burnt offering"
- Abraham rose early, took Isaac to Mount Moriah
- Isaac asked: "Where is the lamb for burnt offering?"
- Abraham: "God will provide the lamb"
- Abraham bound Isaac, raised knife
- Angel stopped him: "Now I know you fear God"
- Abraham saw a ram caught in thicket
- He sacrificed the ram instead of Isaac
- Place named: "The LORD Will Provide" (Jehovah Jireh)
- God reaffirmed covenant promises
- Through Abraham's offspring all nations blessed

This is the supreme test of faith, demonstrating complete trust in God even when His commands seem contradictory to His promises.`,
              keyPoints: [
                "Ultimate test: will Abraham hold nothing back from God?",
                "Obedience immediate despite emotional cost",
                "Isaac's submission (type of Christ's obedience)",
                "God provides the sacrifice (foreshadowing Jesus)",
                "Faith tested to strengthen, not to destroy",
                "Covenant reaffirmed with oath after obedience",
                "Typology: Mount Moriah later site of Temple, near Calvary"
              ]
            }
          ],
          objectives: [
            "Describe God's call and covenant promises to Abraham",
            "Explain the significance of faith being credited as righteousness",
            "Understand the test of Abraham and its christological significance",
            "Identify how the Abrahamic covenant relates to all believers",
            "Recognize the universal scope of God's blessing through Abraham"
          ]
        },
        {
          title: "Isaac: The Child of Promise",
          subtopics: [
            {
              title: "Genesis 24 - Finding a Wife for Isaac",
              content: `Abraham's servant seeks a wife for Isaac:
- Abraham commanded servant to find wife from his homeland, not Canaanites
- Servant made oath, took 10 camels and gifts
- Prayed at well for clear sign: girl who offers water to him and camels
- Rebekah appeared, fulfilled the sign exactly
- She was from Abraham's family (Bethuel's daughter)
- Servant worshiped God for answered prayer
- Rebekah's family agreed she should go
- Isaac married Rebekah, loved her, was comforted after mother's death

This account demonstrates faith in God's guidance, the importance of prayer, and God's faithfulness in fulfilling His covenant promises through the right marriage.`,
              keyPoints: [
                "Importance of spiritual compatibility in marriage",
                "Prayer for God's guidance in major decisions",
                "God answers specific prayers with clear signs",
                "Rebekah's initiative and servant-heartedness",
                "Family blessing essential in marriage decisions",
                "Isaac's character: patient, prayerful, devoted",
                "Continuation of covenant line requires right spouse"
              ]
            },
            {
              title: "Genesis 25:19-34 - Jacob and Esau",
              content: `Isaac's twin sons born after 20 years of prayer:
- Rebekah was barren; Isaac prayed for her
- Twins struggled in her womb
- God's prophecy: "The older will serve the younger"
- Esau born first (red, hairy), then Jacob (grasping Esau's heel)
- Esau became skillful hunter, loved by Isaac
- Jacob was quiet, loved by Rebekah
- Esau sold his birthright to Jacob for stew
- Esau despised his birthright

This account introduces the twin rivalry and foreshadows God's sovereign choice of Jacob over Esau, despite cultural norms favoring the firstborn.`,
              keyPoints: [
                "Power of prayer: barrenness overcome",
                "God's sovereign choice before birth (Rom 9:10-13)",
                "Esau values immediate gratification over spiritual blessing",
                "Jacob's name means 'supplanter' or 'deceiver'",
                "Birthright: double portion and family leadership",
                "Despising spiritual things brings consequences",
                "Parental favoritism creates family conflict"
              ]
            }
          ],
          objectives: [
            "Explain the significance of Isaac as the child of promise",
            "Understand the importance of seeking God's guidance",
            "Describe the roles and characters of Jacob and Esau",
            "Explain the significance of the birthright",
            "Identify lessons about valuing spiritual blessings"
          ]
        },
        {
          title: "Jacob: Transformation from Deceiver to Israel",
          subtopics: [
            {
              title: "Genesis 27-28 - Stolen Blessing and Bethel Experience",
              content: `Jacob deceived Isaac to receive Esau's blessing:
- Isaac old and blind, wanted to bless Esau
- Rebekah overheard, plotted with Jacob
- Jacob disguised as Esau with goat skins
- Isaac blessed Jacob with prosperity and dominion
- Esau returned, devastated at the deception
- Isaac confirmed blessing cannot be revoked
- Esau planned to kill Jacob after Isaac's death
- Jacob fled to Haran to Uncle Laban
- At Bethel, Jacob dreamed of ladder to heaven with angels
- God confirmed covenant promises to Jacob
- Jacob made vow: if God provides and protects, the LORD will be his God
- He set up memorial stone, named place Bethel (House of God)

Though Jacob obtained the blessing through deception, God's sovereign purposes prevailed, and He revealed Himself to Jacob personally.`,
              keyPoints: [
                "Human manipulation cannot thwart God's plan",
                "Consequences of deception: exile and family division",
                "God confirms covenant despite Jacob's character flaws",
                "Bethel vision: heaven and earth connected",
                "God's presence available even in wilderness",
                "Vow-making as response to God's promises",
                "God works through imperfect people"
              ]
            },
            {
              title: "Genesis 29-31 - Jacob in Haran",
              content: `Jacob's 20 years with Laban:
- Jacob met Rachel at well, loved her
- Agreed to serve Laban 7 years for Rachel
- Laban deceived Jacob, gave Leah instead
- Jacob worked another 7 years for Rachel
- Leah bore Reuben, Simeon, Levi, Judah
- Rachel was barren, gave servant Bilhah to Jacob
- Competition between wives through childbearing
- Jacob had 12 sons (the 12 tribes of Israel)
- Jacob prospered through breeding livestock
- God told Jacob to return to his homeland
- Jacob fled with family and possessions
- Laban pursued but God warned him in dream
- They made covenant, parted peacefully

Jacob experienced the pain of deception as Laban deceived him repeatedly. His own character flaws were reflected back to him.`,
              keyPoints: [
                "The deceiver gets deceived (measure for measure)",
                "God's blessing despite dysfunctional family dynamics",
                "Birth of the 12 tribes through 4 mothers",
                "Rachel, Leah, Bilhah, Zilpah bore Jacob's children",
                "God prospers Jacob materially",
                "Time to return: God's timing for reconciliation",
                "God protects Jacob from Laban's anger"
              ]
            },
            {
              title: "Genesis 32-33 - Wrestling with God and Reconciliation",
              content: `Jacob's transformation before meeting Esau:
- Jacob sent messengers ahead to Esau
- Learned Esau was coming with 400 men
- Jacob feared for his life, divided his camp
- Prayed earnestly for God's protection
- Sent gifts ahead to appease Esau
- Wrestled all night with a man (God)
- Jacob's hip dislocated but he persisted
- "I will not let you go unless you bless me"
- Name changed from Jacob to Israel ("he struggles with God")
- Jacob named place Peniel ("I saw God face to face")
- Met Esau the next day
- Esau ran to embrace Jacob, they wept together
- Reconciliation achieved through humility and God's grace

Jacob's wrestling match represents his spiritual transformation from self-reliant deceiver to God-dependent Israel.`,
              keyPoints: [
                "Wrestling with God changes us permanently",
                "Brokenness (hip) precedes blessing",
                "Name change signifies character transformation",
                "Israel: he struggles with God and overcomes",
                "Face-to-face encounter with God",
                "True repentance leads to reconciliation",
                "God's grace overcomes human vengeance",
                "Esau's forgiveness mirrors God's mercy"
              ]
            }
          ],
          objectives: [
            "Describe Jacob's character development from deceiver to Israel",
            "Explain the significance of the Bethel encounter",
            "Understand the consequences and lessons of deception",
            "Analyze the wrestling match and its spiritual significance",
            "Identify the importance of reconciliation and forgiveness"
          ]
        }
      ]
    }
  },
  {
    id: "crk-note-003",
    subjectId: "crk",
    title: "Joseph and the Move to Egypt",
    order: 3,
    content: {
      overview: "The account of Joseph demonstrates God's sovereignty in turning evil intentions into good outcomes, preparing the way for Israel's time in Egypt and eventual exodus.",
      topics: [
        {
          title: "Joseph's Early Life and Dreams",
          subtopics: [
            {
              title: "Genesis 37 - Favored Son and Brothers' Hatred",
              content: `Joseph's special status and its consequences:
- Jacob loved Joseph more than other sons (born of Rachel)
- Gave Joseph ornate robe (coat of many colors)
- Joseph's brothers hated him, couldn't speak kindly
- Joseph had two dreams of brothers bowing to him
- He shared dreams with brothers, increasing their hatred
- Jacob rebuked Joseph but kept matter in mind
- Brothers saw opportunity when Joseph came to check on them
- Plotted to kill him: "Here comes the dreamer"
- Reuben suggested throwing him in cistern instead
- Judah suggested selling him to Ishmaelites for 20 shekels
- They dipped Joseph's robe in goat blood
- Told Jacob a wild animal had devoured Joseph
- Jacob mourned deeply for his son

This account shows how favoritism, pride, and jealousy can destroy family relationships, yet God's purposes continue despite human sin.`,
              keyPoints: [
                "Parental favoritism breeds family conflict",
                "Joseph's immaturity in sharing dreams tactlessly",
                "Brothers' jealousy escalates to attempted murder",
                "Reuben's attempt to save Joseph partially successful",
                "Sold into slavery for 20 pieces of silver (like Jesus)",
                "Deception brings grief to Jacob",
                "God's sovereignty: brothers meant evil, God meant good",
                "Dreams from God will be fulfilled despite opposition"
              ]
            }
          ],
          objectives: [
            "Identify the causes of the brothers' hatred toward Joseph",
            "Understand the consequences of favoritism in families",
            "Explain the significance of Joseph's dreams",
            "Recognize God's hand in preserving Joseph"
          ]
        },
        {
          title: "Joseph in Egypt: Slavery to Prison to Palace",
          subtopics: [
            {
              title: "Genesis 39 - Integrity in Potiphar's House",
              content: `Joseph's character tested in Egypt:
- Potiphar, captain of guard, bought Joseph
- The LORD was with Joseph; he prospered
- Potiphar recognized God's blessing on Joseph
- Made Joseph overseer of entire household
- Joseph was well-built and handsome
- Potiphar's wife repeatedly tried to seduce him
- Joseph refused: "How could I do such wickedness and sin against God?"
- She grabbed his cloak as he fled
- False accusation: claimed Joseph tried to rape her
- Joseph imprisoned on false charges
- Even in prison, the LORD was with Joseph
- Warden put Joseph in charge of all prisoners

Joseph's integrity demonstrates that righteousness is its own reward, even when it leads to suffering. God's presence sustained him.`,
              keyPoints: [
                "Success comes from God's presence, not circumstances",
                "Integrity maintained even in private",
                "Sexual purity: refusing to sin against God",
                "False accusations follow righteous stands",
                "Short-term suffering, long-term vindication",
                "God's presence in prison as in palace",
                "Faithful in little, entrusted with much",
                "Character tested in obscurity before promotion"
              ]
            },
            {
              title: "Genesis 40-41 - From Prison to Prime Minister",
              content: `God's timing and Joseph's promotion:
- In prison, Joseph interpreted dreams for cupbearer and baker
- Cupbearer forgot Joseph for two years after release
- Pharaoh had disturbing dreams no one could interpret
- Cupbearer remembered Joseph
- Joseph brought before Pharaoh
- "I cannot interpret, but God will give Pharaoh the answer"
- Seven fat cows and seven lean cows = seven years plenty, seven years famine
- Recommended wise man to prepare for famine
- Pharaoh recognized God's spirit in Joseph
- Appointed Joseph second in command at age 30
- Joseph married Asenath, had two sons: Manasseh and Ephraim
- Collected vast amounts of grain during seven years of plenty
- Famine struck as predicted, affecting all lands
- Joseph distributed grain, gained wealth for Pharaoh

Joseph's humility in giving God credit and his administrative wisdom led to his elevation and the preservation of Egypt and surrounding nations.`,
              keyPoints: [
                "God's timing: two years more in prison",
                "Promotion comes from the Lord",
                "Joseph gave God glory for interpretations",
                "Wisdom and integrity recognized even by pagans",
                "Dreams fulfilled: Joseph ruled over others",
                "Age 30: beginning of public ministry (like Jesus)",
                "Names of sons: Manasseh (forget troubles), Ephraim (fruitful in suffering)",
                "Preparation prevented disaster"
              ]
            }
          ],
          objectives: [
            "Describe Joseph's integrity in the face of temptation",
            "Explain how God's presence sustained Joseph in adversity",
            "Understand Joseph's gift of dream interpretation",
            "Identify the stages of Joseph's journey from slave to ruler",
            "Recognize the importance of giving God glory"
          ]
        },
        {
          title: "Reconciliation and God's Sovereignty",
          subtopics: [
            {
              title: "Genesis 42-45 - Testing and Revealing",
              content: `Joseph's brothers came to Egypt for grain:
- Jacob sent 10 sons (kept Benjamin home)
- They bowed before Joseph (dream fulfilled)
- Joseph recognized them but they didn't recognize him
- Accused them of being spies, put them in prison 3 days
- Demanded they bring Benjamin to prove their honesty
- Kept Simeon as hostage while others returned home
- Brothers recognized punishment for what they did to Joseph
- Jacob reluctantly agreed to send Benjamin
- They returned with double money and gifts
- Joseph feasted with them, showed favor to Benjamin
- Joseph's silver cup planted in Benjamin's sack
- Caught with "stolen" cup, all returned to Egypt
- Judah offered himself in Benjamin's place (changed man)
- Joseph could no longer control himself
- "I am Joseph! Is my father still living?"
- Brothers terrified, but Joseph comforted them
- "You meant evil but God meant it for good"
- Sent for Jacob and entire family to move to Egypt

Joseph's process tested his brothers' character change and prepared them for reconciliation. His perspective on suffering reveals deep theological maturity.`,
              keyPoints: [
                "Dreams fulfilled: brothers bowed to Joseph",
                "Joseph tested brothers to see if they had changed",
                "Judah's transformation: willing to sacrifice for Benjamin",
                "Joseph's tears show he never stopped loving them",
                "God's sovereignty: evil actions used for good purposes",
                "Forgiveness rooted in understanding God's plan",
                "Reconciliation restores broken family",
                "God's covenant promises continue through preserved family"
              ]
            },
            {
              title: "Genesis 46-50 - Israel in Egypt and Joseph's Death",
              content: `The family's move to Egypt and Joseph's legacy:
- Jacob (Israel) took entire family to Egypt (70 people)
- God appeared to Jacob: "Do not be afraid, I will make you into a great nation there"
- Emotional reunion between Joseph and Jacob
- Family settled in Goshen (best land)
- Jacob blessed Pharaoh
- Famine severe, Joseph acquired all land for Pharaoh except priests' land
- Jacob lived 17 years in Egypt, died at 147
- Jacob blessed Joseph's sons, crossed hands (Ephraim over Manasseh)
- Jacob blessed all 12 sons with prophetic blessings
- Jacob made them promise to bury him in Canaan
- Joseph mourned, mummified Jacob, buried him in cave of Machpelah
- Brothers feared Joseph would retaliate after Jacob's death
- Joseph reassured them: "You meant evil, God meant good... to save many lives"
- Joseph lived to 110, saw great-grandchildren
- Before death: "God will bring you up out of this land to the land He promised"
- Made Israelites swear to carry his bones from Egypt
- Joseph died, was embalmed and placed in coffin in Egypt

Joseph's life and perspective demonstrate complete trust in God's sovereign purposes even through suffering, and his faith in God's future promises for Israel.`,
              keyPoints: [
                "God's presence with Israel in Egypt",
                "Promise: will become great nation in Egypt",
                "Jacob's blessing prophetic for tribes of Israel",
                "Joseph's reassurance: God's purposes prevail",
                "Forgiveness is complete and consistent",
                "Faith in God's promise to return to Canaan",
                "Joseph's bones: symbol of future exodus",
                "God orchestrated Israel's preservation through Joseph"
              ]
            }
          ],
          objectives: [
            "Explain Joseph's testing of his brothers",
            "Understand the theological significance of Genesis 50:20",
            "Describe the reconciliation process and its lessons",
            "Identify how God's covenant promises continue",
            "Recognize the providence of God throughout Joseph's life"
          ]
        }
      ]
    }
  },
  {
    id: "crk-note-004",
    subjectId: "crk",
    title: "Moses and the Exodus",
    order: 4,
    content: {
      overview: "The account of Moses, the plagues on Egypt, the Passover, and the Exodus demonstrates God's power to deliver His people and fulfill His covenant promises to Abraham, Isaac, and Jacob.",
      topics: [
        {
          title: "Moses: Early Life and Calling",
          subtopics: [
            {
              title: "Exodus 1-2 - Birth and Preservation of Moses",
              content: `Israel's oppression and Moses' early years:
- Israelites multiplied greatly in Egypt after Joseph's death
- New Pharaoh feared their numbers
- Enslaved Israelites with hard labor
- Ordered Hebrew midwives to kill male babies
- Midwives feared God, let boys live
- Pharaoh commanded all Hebrew boys thrown into Nile
- Moses born to Levite family (Amram and Jochebed)
- Hidden for three months
- Mother made papyrus basket, placed Moses in Nile
- Pharaoh's daughter found him, had compassion
- Moses' sister offered to find Hebrew nurse (his mother)
- Pharaoh's daughter adopted Moses as her son
- Moses grew up in palace with Egyptian education
- Age 40: Moses killed Egyptian beating Hebrew slave
- Pharaoh sought to kill Moses; Moses fled to Midian
- Defended Reuel's daughters from shepherds
- Married Zipporah, had son Gershom
- Worked as shepherd for 40 years

God preserved Moses through multiple threats and prepared him through palace education and wilderness experience for future leadership.`,
              keyPoints: [
                "God's people multiply despite oppression",
                "Midwives' civil disobedience honored by God",
                "God's providence in Moses' preservation",
                "Pharaoh's daughter's compassion used by God",
                "Moses educated in Egyptian wisdom (Acts 7:22)",
                "Impulsive action led to 40-year exile",
                "Wilderness prepared Moses for leadership",
                "Gershom means 'foreigner' (Moses' sense of exile)"
              ]
            },
            {
              title: "Exodus 3-4 - The Burning Bush and Commissioning",
              content: `God's call to Moses to deliver Israel:
- Moses tending flock near Horeb (mountain of God)
- Angel of the LORD appeared in burning bush
- Bush burned but was not consumed
- Moses approached to investigate
- God called: "Moses! Moses!"
- "Take off sandals, you are on holy ground"
- "I am the God of your father, God of Abraham, Isaac, and Jacob"
- Moses hid his face, afraid to look at God
- God: "I have seen the misery of my people... I have come down to rescue them"
- Promised to bring them to land flowing with milk and honey
- Commissioned Moses: "I am sending you to Pharaoh to bring my people out"
- Moses resisted: "Who am I?"
- God promised: "I will be with you"
- Moses asked for God's name
- "I AM WHO I AM" (YHWH - the LORD)
- God predicted elders would listen, Pharaoh would resist
- Moses made excuses: "I am slow of speech"
- God provided Aaron as spokesman
- Moses obeyed, returned to Egypt with family

The burning bush encounter reveals God's holiness, His covenant faithfulness, His compassion for His people's suffering, and His sovereign plan to deliver them.`,
              keyPoints: [
                "God reveals Himself in unexpected ways",
                "Holy ground: God's presence makes places sacred",
                "God's name: I AM (self-existent, eternal, unchanging)",
                "God hears and responds to His people's cries",
                "God's presence is the guarantee of success",
                "Human inadequacy met with divine enabling",
                "God accommodates human weakness (provided Aaron)",
                "Reluctant leaders often God's choice"
              ]
            }
          ],
          objectives: [
            "Describe God's preservation of Moses from birth to exile",
            "Explain the significance of the burning bush encounter",
            "Understand the meaning of God's name 'I AM WHO I AM'",
            "Identify Moses' excuses and God's responses",
            "Recognize God's compassion for His suffering people"
          ]
        },
        {
          title: "The Ten Plagues and Passover",
          subtopics: [
            {
              title: "Exodus 7-11 - The Ten Plagues",
              content: `God's judgment on Egypt and its gods:
1. Water to blood: Nile turned to blood, fish died (vs. Hapi, god of Nile)
2. Frogs: Covered the land (vs. Heqet, frog goddess)
3. Gnats/Lice: From dust of earth (magicians admitted "finger of God")
4. Flies: Swarms throughout Egypt, not in Goshen
5. Livestock disease: Egyptian livestock died, Israel's spared
6. Boils: Painful sores on Egyptians and animals
7. Hail: Destroyed crops and killed livestock; fire mixed with hail
8. Locusts: Ate everything hail left; covered ground completely
9. Darkness: Total darkness for 3 days (vs. Ra, sun god)
10. Death of firstborn: Every Egyptian firstborn died, from Pharaoh's son to prisoners'

Each plague demonstrated YHWH's supremacy over Egyptian gods. Pharaoh repeatedly hardened his heart, fulfilling God's word to Moses.`,
              keyPoints: [
                "Progressive severity of plagues",
                "God distinguished between Egyptians and Israelites",
                "Pharaoh's heart hardening (both active and passive)",
                "Egyptian magicians could not duplicate all signs",
                "Each plague targeted specific Egyptian deities",
                "God's sovereignty over nature and nations",
                "Purpose: Egypt and Israel would know He is the LORD",
                "Final plague required final solution: Passover"
              ]
            },
            {
              title: "Exodus 12 - The Passover",
              content: `The first Passover and deliverance from death:
- God's instructions through Moses and Aaron:
  * Select lamb on 10th day of month (unblemished, year-old male)
  * Slaughter at twilight on 14th day (whole community)
  * Put blood on doorframes and lintel
  * Roast lamb, eat with bitter herbs and unleavened bread
  * Eat in haste: cloak tucked in, sandals on, staff in hand
  * Any leftovers must be burned
- At midnight, the LORD struck down all Egyptian firstborn
- Great wailing throughout Egypt
- Pharaoh summoned Moses: "Leave! Go worship the LORD"
- Egyptians urged Israelites to hurry
- Israelites asked for silver, gold, clothing (plundered Egypt)
- About 600,000 men plus women and children left
- Also mixed multitude and large herds
- 430 years to the day since Jacob came to Egypt
- Passover instituted as lasting ordinance
- Feast of Unleavened Bread: 7 days memorial

The Passover is the most significant event in Jewish history, pointing forward to Christ, "our Passover lamb" (1 Cor 5:7).`,
              keyPoints: [
                "Lamb's blood on doorposts brought salvation from death",
                "God distinguished between those covered by blood and those not",
                "Unleavened bread: leaving in haste, no time for bread to rise",
                "Bitter herbs: remember suffering in Egypt",
                "Passover as annual memorial and prophecy of Christ",
                "Lamb characteristics: unblemished, male, inspected, slain, blood applied",
                "Exodus began at Passover, fulfilled at Calvary",
                "God's judgment and mercy displayed simultaneously"
              ]
            }
          ],
          objectives: [
            "List and explain the ten plagues and their significance",
            "Understand how plagues demonstrated God's supremacy over Egyptian gods",
            "Describe the institution and meaning of Passover",
            "Explain the typology of Passover pointing to Christ",
            "Recognize the themes of judgment and deliverance"
          ]
        }
      ]
    }
  },
  // Continue with more CRK sections...
  {
    id: "crk-note-005",
    subjectId: "crk",
    title: "The Wilderness Journey and the Law",
    order: 5,
    content: {
      overview: "Israel's journey from Egypt to Sinai, receiving the Law, the covenant relationship formalized, and lessons learned through wilderness testing.",
      topics: [
        {
          title: "From Egypt to Sinai",
          subtopics: [
            {
              title: "Exodus 13-15 - The Red Sea Crossing",
              content: `God's miraculous deliverance at the Red Sea:
- God led Israel by pillar of cloud (day) and fire (night)
- Did not take direct route through Philistine country
- Pharaoh changed mind, pursued with 600 chariots
- Israelites trapped between army and sea
- People complained: "Better to serve Egyptians than die in wilderness"
- Moses: "Stand firm and see the deliverance the LORD will bring"
- God told Moses to stretch out staff over sea
- Strong east wind blew all night, divided waters
- Israelites crossed on dry ground, walls of water on both sides
- Egyptians pursued into sea
- God threw Egyptian army into confusion
- Moses stretched hand over sea again
- Water returned, covered all Egyptian army
- Not one Egyptian survived
- Israelites feared the LORD and trusted Moses
- Moses and Miriam led songs of praise and victory

This is Israel's "baptism" - through water out of bondage into freedom, prefiguring Christian baptism.`,
              keyPoints: [
                "God's presence led Israel continuously",
                "God sometimes leads to dead ends to display His glory",
                "Israel's complaint pattern begins immediately",
                "God fights for His people",
                "Egypt's military might powerless against God",
                "Complete deliverance: not one enemy survived",
                "Song of Moses: first recorded praise song",
                "Miriam's song: women's worship response"
              ]
            },
            {
              title: "Exodus 16-17 - Testing in the Wilderness",
              content: `God's provision and Israel's complaints:
- Grumbled about lack of food: "Better to have died in Egypt"
- God provided manna from heaven
- Gather daily except double portion on sixth day for Sabbath
- Also provided quail in evening
- Tested obedience: some tried to keep manna overnight (it rotted)
- Some tried to gather on Sabbath (found none)
- Manna continued 40 years until they entered Canaan
- Complained about lack of water at Rephidim
- Moses feared they would stone him
- God told Moses to strike rock at Horeb
- Water gushed out (place named Massah and Meribah - testing and quarreling)
- Amalekites attacked Israel
- Moses held up staff while Joshua fought
- When arms raised, Israel prevailed; when lowered, Amalek prevailed
- Aaron and Hur supported Moses' arms
- Joshua defeated Amalek
- God decreed: "Blot out memory of Amalek"

These incidents reveal Israel's quick forgetfulness of God's miracles and their tendency to complain instead of trust.`,
              keyPoints: [
                "Complaining reveals lack of trust in God's provision",
                "Manna: daily dependence on God (Lord's Prayer: daily bread)",
                "Sabbath rest instituted before Sinai law",
                "Water from rock: Christ the rock (1 Cor 10:4)",
                "Spiritual leaders need support (Aaron and Hur)",
                "Battles won through prayer as much as fighting",
                "God's word and hands raised in worship bring victory",
                "Amalek represents flesh opposing Spirit"
              ]
            }
          ],
          objectives: [
            "Describe the miracle of the Red Sea crossing",
            "Explain God's provision of manna and its spiritual significance",
            "Understand the pattern of Israel's complaints and testing",
            "Identify lessons about daily dependence on God",
            "Recognize the role of prayer and worship in spiritual battles"
          ]
        }
      ]
    }
  }
];
