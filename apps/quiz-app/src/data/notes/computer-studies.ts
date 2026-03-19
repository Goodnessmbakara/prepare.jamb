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

export const computerStudiesNotes: StudyNote[] = [
  {
    id: "comp-note-001",
    subjectId: "computer",
    title: "Evolution and Classification of Computers",
    order: 1,
    content: {
      overview: "The computer has evolved from simple mechanical calculating devices to powerful digital machines. Understanding the history, generations, and classification of computers provides context for their current capabilities and future potential.",
      topics: [
        {
          title: "History and Evolution of Computing",
          subtopics: [
            {
              title: "Early Computing Devices",
              content: "Abacus (3000 BC): earliest counting device using beads on rods, still used in some Asian countries. Napier's Bones (1617): John Napier invented rods for multiplication. Slide Rule (1622): mechanical calculator for multiplication, division, and logarithms. Pascal's Calculator/Pascaline (1642): Blaise Pascal built mechanical adding machine using gears. Leibniz Calculator (1673): could add, subtract, multiply, and divide. Jacquard Loom (1801): Joseph Jacquard used punched cards to control weaving patterns - inspired computer programming. Charles Babbage's machines: Difference Engine (1822) for calculating mathematical tables, Analytical Engine (1837) had input, storage, processing, output - first general-purpose computer design but never completed. Ada Lovelace wrote first algorithm for it, considered first programmer.",
              keyPoints: [
                "Abacus: earliest counting device (3000 BC)",
                "Pascaline: first mechanical calculator (1642)",
                "Charles Babbage: Father of Computing, designed Analytical Engine",
                "Ada Lovelace: first programmer, wrote first algorithm",
                "Jacquard Loom introduced punched card concept",
                "Early devices were mechanical, not electronic"
              ]
            },
            {
              title: "Computer Generations",
              content: "First Generation (1940-1956): Used vacuum tubes for circuits and magnetic drums for memory. Very large, expensive, generated much heat. Examples: ENIAC (first electronic computer, 1946), UNIVAC I. Programming in machine language (0s and 1s). Second Generation (1956-1963): Used transistors instead of vacuum tubes - smaller, faster, more reliable, less heat. Magnetic core memory. Programming in assembly language. Examples: IBM 1401, IBM 7090. Third Generation (1964-1971): Used Integrated Circuits (ICs) - many transistors on silicon chip. Smaller, faster, cheaper. Operating systems developed. High-level languages (FORTRAN, COBOL). Examples: IBM 360 series. Fourth Generation (1971-present): Used Microprocessors - entire CPU on single chip. Personal computers emerged. GUI introduced. Examples: Intel 4004 (first microprocessor), Apple II, IBM PC. Fifth Generation (present-future): Artificial Intelligence, parallel processing, quantum computing, natural language processing, expert systems.",
              keyPoints: [
                "1st Gen (1940-1956): Vacuum tubes, very large, ENIAC",
                "2nd Gen (1956-1963): Transistors, smaller and faster",
                "3rd Gen (1964-1971): Integrated Circuits (ICs)",
                "4th Gen (1971-present): Microprocessors, PCs",
                "5th Gen (present-future): AI, quantum computing",
                "Each generation: smaller, faster, cheaper, more reliable"
              ]
            }
          ],
          objectives: [
            "Trace the historical development of computers",
            "Identify key inventors and their contributions",
            "Distinguish between computer generations",
            "Understand technological advances in each generation"
          ]
        },
        {
          title: "Classification of Computers",
          subtopics: [
            {
              title: "Classification by Type",
              content: "Analog Computers: process continuous data (temperature, pressure, voltage). Used in scientific and industrial applications. Examples: thermometer, speedometer, seismograph. Digital Computers: process discrete data (0s and 1s). Most common type. Perform arithmetic and logical operations. Examples: PCs, laptops, smartphones. Hybrid Computers: combine analog and digital features. Used in specialized applications like medical systems (ECG machines, ICU monitors), aircraft systems, industrial process control. Can accept analog input, process digitally, produce analog output.",
              keyPoints: [
                "Analog: continuous data (temperature, voltage)",
                "Digital: discrete data (0s and 1s), most common",
                "Hybrid: combines analog and digital",
                "Digital computers dominate modern computing",
                "Analog used in measurement devices",
                "Hybrid used in medical and industrial systems"
              ]
            },
            {
              title: "Classification by Purpose",
              content: "General-Purpose Computers: designed for variety of tasks. Can run different software for word processing, gaming, browsing, etc. Examples: desktop PCs, laptops, tablets. Flexible and versatile. Special-Purpose Computers: designed for specific tasks only. Programmed for one application. Examples: ATM machines (banking only), traffic light controllers, washing machine controllers, military weapon systems, weather forecasting systems, aircraft autopilot. More efficient for specific task but not flexible.",
              keyPoints: [
                "General-purpose: multiple tasks, runs various software",
                "Special-purpose: one specific task only",
                "General: flexible, versatile (PCs, laptops)",
                "Special: efficient for specific task (ATM, traffic control)",
                "Most personal computers are general-purpose",
                "Special-purpose: embedded in devices"
              ]
            },
            {
              title: "Classification by Size and Processing Power",
              content: "Supercomputers: Fastest and most powerful. Parallel processing (multiple processors working together). Used for complex calculations: weather forecasting, nuclear simulations, space research, oil exploration, genetic research. Examples: IBM Summit, Fugaku. Cost millions of dollars. Mainframe Computers: Large, powerful, handle thousands of users simultaneously. Used by large organizations: banks, airlines, government, insurance companies. Centralized data processing. Examples: IBM Z series. Very reliable, secure. Minicomputers: Mid-sized, less powerful than mainframes. Support hundreds of users. Used in universities, factories, research labs. Examples: PDP-11, VAX. Declining use as PCs became powerful. Microcomputers (Personal Computers): Smallest for individual use. Desktop computers: tower and monitor, powerful for home/office. Laptop/Notebook: portable, battery-powered. Tablets: touchscreen, mobile. Smartphones: pocket-sized, most portable. Wearables: smartwatches, fitness trackers.",
              keyPoints: [
                "Supercomputers: fastest, weather forecasting, research",
                "Mainframes: large organizations, thousands of users",
                "Minicomputers: mid-sized, hundreds of users",
                "Microcomputers/PCs: personal use, most common",
                "Size order: Super > Mainframe > Mini > Micro",
                "Processing power decreases from super to micro"
              ]
            }
          ],
          objectives: [
            "Classify computers by type, purpose, and size",
            "Give examples of each computer category",
            "Compare analog, digital, and hybrid computers",
            "Explain applications of different computer types"
          ]
        }
      ]
    }
  },
  {
    id: "comp-note-002",
    subjectId: "computer",
    title: "Computer Hardware Components",
    order: 2,
    content: {
      overview: "Computer hardware comprises the physical components you can touch. Understanding input devices, output devices, storage devices, and the central processing unit is fundamental to knowing how computers work.",
      topics: [
        {
          title: "Input Devices",
          subtopics: [
            {
              title: "Common Input Devices",
              content: "Input devices send data and instructions to the computer. Keyboard: most common input device, types characters and commands. QWERTY layout standard. Keys include alphanumeric, function keys (F1-F12), modifier keys (Shift, Ctrl, Alt), special keys (Enter, Backspace, Delete). Mouse: pointing device, moves cursor on screen. Buttons for clicking and selecting. Types: mechanical (ball), optical (LED light), wireless. Trackpad/Touchpad: flat surface on laptops, finger movement moves cursor. Scanner: converts physical documents/images to digital format. Types: flatbed, handheld, drum. Used for document digitization. Microphone: inputs sound, used for voice recording, speech recognition, video calls. Webcam: inputs video, used for video conferencing, streaming. Digital Camera: captures photos/videos in digital format. Can transfer to computer via USB or memory card.",
              keyPoints: [
                "Keyboard: typing characters and commands",
                "Mouse: pointing and clicking",
                "Scanner: converts physical to digital",
                "Microphone: sound input",
                "Webcam: video input",
                "Input devices send data TO computer"
              ]
            },
            {
              title: "Specialized Input Devices",
              content: "Joystick: control device for gaming, has stick that tilts in directions, buttons for actions. Light Pen: pen-shaped pointing device used on screen surface, detects light from screen. Used in CAD/CAM. Graphics Tablet/Digitizer: flat surface with stylus for drawing, used by graphic designers, artists. Pressure-sensitive. Touch Screen: display that responds to touch, used in smartphones, tablets, ATMs, kiosks. Types: resistive, capacitive. Barcode Reader: scans barcodes on products, converts to digital data. Used in retail, libraries, inventory. OMR (Optical Mark Reader): reads marked fields on forms, used for multiple-choice exams, surveys. OCR (Optical Character Reader): reads printed text and converts to digital text, used for document scanning. Biometric Devices: fingerprint scanner, retina scanner, face recognition. Used for security and authentication.",
              keyPoints: [
                "Joystick: gaming control",
                "Touch screen: input by touching display",
                "Barcode reader: retail and inventory",
                "OMR: reads marked forms (exams, surveys)",
                "OCR: reads printed text",
                "Biometric: fingerprint, face, retina for security"
              ]
            }
          ],
          objectives: [
            "Identify various input devices",
            "Explain functions of common input devices",
            "Describe applications of specialized input devices",
            "Distinguish between different types of scanners"
          ]
        },
        {
          title: "Output Devices",
          subtopics: [
            {
              title: "Visual and Audio Output Devices",
              content: "Output devices receive data from computer and present it to user. Monitor/Display: shows visual output (text, images, video). Types: CRT (Cathode Ray Tube) - old, bulky, heavy. LCD (Liquid Crystal Display) - flat, thin, low power. LED (Light Emitting Diode) - improved LCD, better colors, energy efficient. OLED (Organic LED) - best quality, each pixel lights independently. Resolution measured in pixels (e.g., 1920x1080 Full HD, 3840x2160 4K). Refresh rate in Hz (60Hz, 120Hz, 144Hz). Printer: produces hard copy (paper output). Types: Impact printers (Dot Matrix - uses pins to strike ribbon, noisy, cheap, multi-copy forms). Non-impact printers: Inkjet (sprays ink droplets, color, photo quality, cheap, slow), Laser (uses toner and heat, fast, expensive, best quality, office use), Thermal (uses heat-sensitive paper, receipts, labels). Speakers: output sound (music, voice, alerts). Types: built-in, external, surround sound. Headphones/Earphones: personal audio output.",
              keyPoints: [
                "Monitor: visual output, LCD/LED most common",
                "Printer types: Dot Matrix, Inkjet, Laser, Thermal",
                "Inkjet: cheap, color, slow; Laser: fast, expensive, quality",
                "Speakers: sound output",
                "Output devices receive data FROM computer",
                "Resolution and refresh rate affect display quality"
              ]
            },
            {
              title: "Other Output Devices",
              content: "Projector: displays output on large screen/wall. Used for presentations, classrooms, cinema. Types: LCD, DLP, LED. Plotter: prints large-format graphics with high precision. Used for architectural plans, engineering drawings, banners. Types: pen plotter, inkjet plotter. Multimedia Projector: combines video and audio output for presentations. Voice Synthesizer/Speech Output: converts text to speech, used in GPS, screen readers for visually impaired, virtual assistants. Actuators: convert electrical signals to physical movement, used in robotics, automated systems, printers (moving print head).",
              keyPoints: [
                "Projector: large-screen display for presentations",
                "Plotter: large-format precision printing",
                "Voice synthesizer: text-to-speech",
                "Actuators: electrical to physical movement",
                "Specialized for specific professional needs",
                "Output can be visual, audio, or physical"
              ]
            }
          ],
          objectives: [
            "Identify various output devices",
            "Compare types of monitors and printers",
            "Explain advantages and disadvantages of printer types",
            "Describe applications of specialized output devices"
          ]
        },
        {
          title: "Storage Devices",
          subtopics: [
            {
              title: "Primary Storage (Memory)",
              content: "Primary storage is directly accessible by CPU. RAM (Random Access Memory): Main memory, volatile (loses data when power off), temporary storage for programs and data being used. Fast access. Types: DRAM (Dynamic RAM - needs refresh, cheaper, slower), SRAM (Static RAM - no refresh, faster, expensive, used in cache). Measured in GB (e.g., 4GB, 8GB, 16GB RAM). ROM (Read-Only Memory): Non-volatile, permanent, stores BIOS (Basic Input/Output System) that boots computer. Types: PROM (Programmable ROM - written once), EPROM (Erasable PROM - erasable by UV light), EEPROM (Electrically Erasable PROM - erased electronically). Cache Memory: Very fast memory between CPU and RAM. Stores frequently used data. Levels: L1 (fastest, smallest, in CPU), L2 (faster, larger), L3 (fast, largest).",
              keyPoints: [
                "RAM: volatile, temporary, fast, loses data when off",
                "ROM: non-volatile, permanent, stores BIOS",
                "Cache: fastest memory, stores frequent data",
                "DRAM: cheaper, slower; SRAM: faster, expensive",
                "RAM size affects multitasking ability",
                "Primary storage: directly accessible by CPU"
              ]
            },
            {
              title: "Secondary Storage",
              content: "Secondary storage is non-volatile, permanent, stores data long-term. Hard Disk Drive (HDD): Magnetic storage, rotating platters, read/write heads. Large capacity (500GB-4TB+). Slower than SSD. Cheaper per GB. Used for mass storage. Solid State Drive (SSD): Uses flash memory chips, no moving parts. Very fast, reliable, expensive. Used for OS and programs. Optical Disks: Use laser to read/write data. CD (Compact Disc): 700MB, music, software. DVD (Digital Versatile Disc): 4.7GB-17GB, movies, large files. Blu-ray: 25GB-50GB, HD movies. Flash/USB Drives: Portable, flash memory, 8GB-512GB+. Plug into USB port. Durable, convenient for file transfer. Memory Cards: Small flash memory for cameras, phones. Types: SD, microSD, CF. Cloud Storage: Data stored on internet servers. Access from anywhere. Examples: Google Drive, OneDrive, Dropbox, iCloud. Subscription-based.",
              keyPoints: [
                "HDD: magnetic, large capacity, cheap, slower",
                "SSD: flash memory, very fast, expensive, reliable",
                "Optical: CD (700MB), DVD (4.7GB), Blu-ray (25GB)",
                "USB/Flash drives: portable, convenient",
                "Cloud storage: internet-based, access anywhere",
                "Secondary storage: non-volatile, permanent"
              ]
            },
            {
              title: "Storage Characteristics",
              content: "Storage capacity measured in bytes: Bit (binary digit, 0 or 1). Byte (8 bits, one character). Kilobyte (KB = 1024 bytes). Megabyte (MB = 1024 KB). Gigabyte (GB = 1024 MB). Terabyte (TB = 1024 GB). Petabyte (PB = 1024 TB). Access time: speed to locate and retrieve data. RAM: nanoseconds. SSD: microseconds. HDD: milliseconds. Optical: slower. Transfer rate: speed of data transfer (MB/s or GB/s). SSD fastest, then HDD, then optical. Volatility: Volatile loses data when power off (RAM). Non-volatile retains data (ROM, HDD, SSD, flash). Cost per GB: HDD cheapest, then optical, then SSD, then RAM, then cache.",
              keyPoints: [
                "Capacity: Bit < Byte < KB < MB < GB < TB < PB",
                "1024 bytes = 1 KB; 1024 KB = 1 MB",
                "Speed: RAM > SSD > HDD > Optical",
                "Volatile: loses data when off (RAM)",
                "Non-volatile: retains data (HDD, SSD, flash)",
                "Cost: HDD cheapest per GB, cache most expensive"
              ]
            }
          ],
          objectives: [
            "Distinguish between primary and secondary storage",
            "Compare RAM and ROM characteristics",
            "Explain differences between HDD and SSD",
            "Understand storage capacity units and conversions"
          ]
        },
        {
          title: "Central Processing Unit (CPU)",
          subtopics: [
            {
              title: "CPU Components and Functions",
              content: "CPU (Central Processing Unit) is the brain of computer, executes instructions. Components: Control Unit (CU): directs operations, fetches instructions from memory, decodes them, coordinates other units. Manages data flow between CPU and other components. Arithmetic Logic Unit (ALU): performs arithmetic operations (add, subtract, multiply, divide) and logical operations (AND, OR, NOT, comparisons). Registers: Very fast temporary storage locations inside CPU. Types: Accumulator (stores results), Program Counter (address of next instruction), Instruction Register (current instruction), Memory Address Register, Memory Data Register. System Clock: generates pulses to synchronize CPU operations. Clock speed measured in Hertz (Hz). Modern CPUs: GHz (billions of cycles per second). Higher speed = faster processing.",
              keyPoints: [
                "CPU: brain of computer, executes instructions",
                "Control Unit: fetches, decodes, coordinates",
                "ALU: arithmetic and logical operations",
                "Registers: fastest storage inside CPU",
                "Clock speed: GHz (billions cycles/second)",
                "Higher clock speed = faster processing"
              ]
            },
            {
              title: "Instruction Cycle (Fetch-Execute Cycle)",
              content: "CPU executes instructions in cycles. Machine Cycle steps: 1. Fetch: Control Unit fetches next instruction from RAM using address in Program Counter. Instruction loaded into Instruction Register. Program Counter incremented. 2. Decode: Control Unit decodes instruction to determine operation and operands needed. 3. Execute: ALU performs operation (calculation, comparison) or data moved between memory and registers. 4. Store: Result stored in register or written back to memory. Cycle repeats billions of times per second. Modern CPUs use pipelining (start next instruction before current finishes) and multiple cores (parallel processing) to increase speed.",
              keyPoints: [
                "Machine cycle: Fetch → Decode → Execute → Store",
                "Fetch: get instruction from memory",
                "Decode: interpret instruction",
                "Execute: perform operation",
                "Store: save result",
                "Cycle repeats billions of times per second"
              ]
            },
            {
              title: "CPU Performance Factors",
              content: "Clock Speed: Frequency of system clock (GHz). Higher = more instructions per second. But higher speed generates more heat. Number of Cores: Modern CPUs have multiple cores (dual-core, quad-core, octa-core). Each core can execute instructions independently. Parallel processing increases overall performance. Cache Size: Larger cache stores more frequently used data, reduces need to access slower RAM. L1 < L2 < L3 in size and speed. Word Size: Number of bits processed at once (32-bit, 64-bit). 64-bit can handle larger numbers and more RAM. Bus Speed: Rate at which data moves between CPU and other components. Architecture: Design efficiency (x86, ARM, RISC, CISC). Thermal Design Power (TDP): Heat generated, requires cooling.",
              keyPoints: [
                "Clock speed: higher = faster (but more heat)",
                "Multiple cores: parallel processing, better multitasking",
                "Cache size: larger = faster data access",
                "64-bit: handles more RAM, larger numbers",
                "Bus speed: data transfer rate",
                "Performance depends on multiple factors, not just speed"
              ]
            }
          ],
          objectives: [
            "Describe components and functions of CPU",
            "Explain the fetch-execute cycle",
            "Identify factors affecting CPU performance",
            "Understand roles of CU, ALU, and registers"
          ]
        }
      ]
    }
  },
  {
    id: "comp-note-003",
    subjectId: "computer",
    title: "Computer Software and Programming",
    order: 3,
    content: {
      overview: "Software is the collection of programs and data that tell the computer what to do. Understanding system software, application software, and programming languages is essential for effective computer use and development.",
      topics: [
        {
          title: "System Software",
          subtopics: [
            {
              title: "Operating Systems",
              content: "Operating System (OS) is system software that manages computer hardware and provides services for application programs. Functions: Process Management (runs programs, allocates CPU time, multitasking). Memory Management (allocates RAM to programs, virtual memory). File Management (organizes files, directories, handles read/write operations). Device Management (controls input/output devices via drivers). User Interface (provides way to interact - GUI or CLI). Security (user authentication, access control, antivirus integration). Types: Single-user: MS-DOS, early Windows. Multi-user: Unix, Linux, Windows Server. Multi-tasking: Windows, macOS, Linux (run multiple programs simultaneously). Real-time: controls machinery, robotics, medical systems (immediate response). Examples: Windows (most popular, GUI, user-friendly). macOS (Apple computers, Unix-based, elegant interface). Linux (open-source, free, customizable, used in servers). Android (mobile, Linux-based). iOS (Apple mobile devices).",
              keyPoints: [
                "OS manages hardware and runs programs",
                "Functions: process, memory, file, device management",
                "GUI: graphical (Windows, macOS); CLI: text commands (DOS)",
                "Multi-tasking: run multiple programs",
                "Examples: Windows, macOS, Linux, Android, iOS",
                "OS is essential software, computer can't work without it"
              ]
            },
            {
              title: "Utility Programs",
              content: "Utility programs are system software that perform specific maintenance tasks. Types: Antivirus: detects and removes viruses, malware, spyware. Examples: Norton, McAfee, Avast, Windows Defender. Regular updates needed. Disk Defragmenter: reorganizes fragmented files on HDD for faster access. Not needed for SSD. Backup: creates copies of data for recovery after loss. Types: full, incremental, differential. Compression: reduces file size (ZIP, RAR). Saves storage space, faster transfers. Disk Cleanup: removes temporary files, cache, unnecessary data to free space. Firewall: monitors network traffic, blocks unauthorized access. Hardware/software firewalls. System Restore: reverts system to earlier state before problem occurred. File Manager: organizes, copies, moves, deletes files. Examples: Windows Explorer, Finder. Task Manager: monitors running processes, CPU/memory usage, ends unresponsive programs.",
              keyPoints: [
                "Utilities perform maintenance tasks",
                "Antivirus: protects from malware",
                "Backup: creates copies for recovery",
                "Compression: reduces file size (ZIP, RAR)",
                "Disk cleanup: frees storage space",
                "Firewall: network security, blocks threats"
              ]
            },
            {
              title: "Device Drivers and Firmware",
              content: "Device Drivers: Software that allows OS to communicate with hardware devices. Each device (printer, graphics card, mouse, keyboard) needs appropriate driver. OS includes common drivers. Others downloaded from manufacturer's website. Outdated drivers cause problems (crashes, poor performance). Regular updates important. Firmware: Software permanently stored in hardware (ROM, flash memory). Controls device operation at low level. Examples: BIOS/UEFI (boots computer, hardware initialization), device firmware (printers, routers, cameras). Can be updated (firmware update/flash) to fix bugs or add features. BIOS (Basic Input/Output System): Firmware that initializes hardware during boot process, loads operating system from storage. UEFI (Unified Extensible Firmware Interface): Modern replacement for BIOS, faster, more secure, supports larger drives, graphical interface.",
              keyPoints: [
                "Drivers: software for OS to communicate with hardware",
                "Each device needs correct driver",
                "Outdated drivers cause problems",
                "Firmware: permanent software in hardware",
                "BIOS/UEFI: boots computer, loads OS",
                "Firmware can be updated"
              ]
            }
          ],
          objectives: [
            "Explain functions of operating systems",
            "Identify types of utility programs and their uses",
            "Describe roles of device drivers and firmware",
            "Compare different operating systems"
          ]
        },
        {
          title: "Application Software",
          subtopics: [
            {
              title: "Productivity Software",
              content: "Application software performs specific tasks for users. Word Processors: create and edit text documents. Features: formatting (fonts, colors, alignment), spell check, mail merge, tables, images. Examples: Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages. Used for letters, reports, resumes, books. Spreadsheets: organize data in rows and columns (cells), perform calculations. Features: formulas, functions (SUM, AVERAGE, IF, VLOOKUP), charts/graphs, sorting, filtering. Examples: Microsoft Excel, Google Sheets, LibreOffice Calc. Used for budgets, financial analysis, statistics, grade books. Presentation Software: create slide shows for presentations. Features: slides, text, images, animations, transitions, multimedia (audio/video). Examples: Microsoft PowerPoint, Google Slides, Prezi, Keynote. Used for business presentations, lectures, pitches. Database Management Systems (DBMS): store, organize, and manage large amounts of data. Features: tables, queries (search), forms (input), reports (output), relationships. Examples: Microsoft Access, MySQL, Oracle, MongoDB. Used for customer records, inventory, library systems.",
              keyPoints: [
                "Word processors: documents (Word, Google Docs)",
                "Spreadsheets: calculations, data analysis (Excel)",
                "Presentations: slide shows (PowerPoint)",
                "DBMS: manage large data collections (Access, MySQL)",
                "Productivity software for business and academic tasks",
                "Features: formatting, formulas, queries, multimedia"
              ]
            },
            {
              title: "Multimedia and Graphics Software",
              content: "Graphics Software: create and edit images. Types: Raster graphics (pixels, photos) - Adobe Photoshop, GIMP. Vector graphics (mathematical shapes, logos) - Adobe Illustrator, CorelDRAW, Inkscape. Features: layers, filters, effects, color adjustment, drawing tools. Audio Software: record, edit, mix sound. Digital Audio Workstations (DAWs): Audacity (free), Adobe Audition, FL Studio, Logic Pro. Features: multi-track recording, effects, equalization, mixing. Video Editing Software: edit video footage. Examples: Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, iMovie. Features: cut, trim, transitions, effects, titles, color grading, audio sync. 3D Modeling/Animation: create 3D objects and animations. Examples: Blender (free), Maya, 3ds Max, Cinema 4D. Used for movies, games, architecture visualization, product design. CAD (Computer-Aided Design): technical drawings, engineering designs. Examples: AutoCAD, SolidWorks, SketchUp. Used by architects, engineers, industrial designers.",
              keyPoints: [
                "Graphics: Photoshop (raster), Illustrator (vector)",
                "Audio: Audacity, recording and editing sound",
                "Video: Premiere, editing and effects",
                "3D: Blender, Maya for modeling and animation",
                "CAD: AutoCAD for technical drawings",
                "Multimedia for creative and technical professionals"
              ]
            },
            {
              title: "Internet and Communication Software",
              content: "Web Browsers: access and view websites. Examples: Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, Opera. Features: tabs, bookmarks, history, extensions, private browsing. Email Clients: send and receive email. Examples: Microsoft Outlook, Mozilla Thunderbird, Apple Mail, Gmail (web-based). Features: inbox, folders, attachments, contacts, spam filtering. Messaging/Communication: real-time text, voice, video communication. Examples: WhatsApp, Telegram, Signal, Slack, Discord, Zoom, Microsoft Teams, Skype. Used for personal communication and business collaboration. FTP Clients: transfer files between computers over internet. Examples: FileZilla, WinSCP. Social Media Applications: Facebook, Twitter, Instagram, TikTok, LinkedIn. Share content, connect with others. Cloud Storage Applications: Google Drive, Dropbox, OneDrive, iCloud. Store and sync files online.",
              keyPoints: [
                "Browsers: Chrome, Firefox, access websites",
                "Email: Outlook, Gmail for messages",
                "Messaging: WhatsApp, Zoom, Teams for communication",
                "FTP: file transfer over internet",
                "Social media: Facebook, Instagram, connect and share",
                "Cloud apps: Google Drive, Dropbox for online storage"
              ]
            },
            {
              title: "Specialized Application Software",
              content: "Educational Software: learning and teaching. Examples: Duolingo (languages), Khan Academy (various subjects), typing tutors, mathematics software. Games and Entertainment: video games, media players. Games: online, offline, various genres. Media players: VLC, Windows Media Player (play audio/video). Accounting/Financial Software: manage finances. Examples: QuickBooks, Sage, TurboTax (tax preparation). Used by businesses and individuals. Medical Software: hospital management, electronic health records, diagnostic systems, medical imaging (DICOM viewers). Security Software: protect systems. Antivirus (Norton, Kaspersky), encryption software (BitLocker, VeraCrypt), password managers (LastPass, 1Password). Scientific Software: data analysis, simulation. MATLAB (mathematics), SPSS (statistics), LabVIEW (instrument control).",
              keyPoints: [
                "Educational: learning software, tutors",
                "Games: entertainment, various genres",
                "Accounting: QuickBooks, financial management",
                "Medical: hospital systems, health records",
                "Security: antivirus, encryption, password managers",
                "Scientific: MATLAB, SPSS for research and analysis"
              ]
            }
          ],
          objectives: [
            "Identify types of application software",
            "Describe uses of productivity software",
            "Explain features of multimedia software",
            "Give examples of specialized applications"
          ]
        },
        {
          title: "Programming Languages",
          subtopics: [
            {
              title: "Levels of Programming Languages",
              content: "Programming languages are used to write software instructions. Machine Language (1st Generation): Binary code (0s and 1s) directly executed by CPU. Fastest but very difficult to write and debug. Machine-specific (not portable). Example: 10110000 01100001. Assembly Language (2nd Generation): Uses mnemonics (short codes) instead of binary. Example: MOV, ADD, SUB. Easier than machine language. Requires assembler to convert to machine code. Still machine-specific. High-Level Languages (3rd Generation): Human-readable, uses English-like statements. Examples: BASIC, C, Java, Python, Pascal, FORTRAN, COBOL. Easier to learn and write. Requires compiler or interpreter. Portable across different machines. Very High-Level Languages (4th Generation - 4GL): Even closer to natural language, very user-friendly. Used for database queries and reports. Examples: SQL (database queries), MATLAB, Visual Basic. Natural Language (5th Generation): Human language, used in AI. Still in development. Examples: Prolog (logic programming), LISP (AI research).",
              keyPoints: [
                "Machine language: binary (0s, 1s), fastest, hardest",
                "Assembly: mnemonics (MOV, ADD), needs assembler",
                "High-level: English-like (C, Java, Python), easiest",
                "4GL: very user-friendly (SQL, MATLAB)",
                "Natural: AI, human language (Prolog, LISP)",
                "Lower level = faster but harder to write"
              ]
            },
            {
              title: "Language Translators",
              content: "Computers only understand machine language. Translators convert high-level code to machine code. Compiler: Translates entire program at once before execution. Creates executable file. Fast execution after compilation. Errors shown after checking whole program. Examples: C, C++. Process: Source code → Compiler → Object code → Executable. Interpreter: Translates and executes program line by line. No executable file created. Slower execution. Error stops execution immediately, easier debugging. Examples: Python, JavaScript, BASIC. Process: Source code → Interpreter → Output. Assembler: Translates assembly language to machine code. One-to-one translation (each mnemonic = one machine instruction). Compiler advantages: faster execution, optimized code. Interpreter advantages: easier debugging, platform-independent.",
              keyPoints: [
                "Compiler: translates entire program at once (C, C++)",
                "Interpreter: line by line translation (Python, JavaScript)",
                "Assembler: assembly to machine code",
                "Compiler: fast execution, creates executable file",
                "Interpreter: easier debugging, no executable",
                "Both convert high-level to machine language"
              ]
            },
            {
              title: "Common Programming Languages",
              content: "Python: High-level, interpreted, easy to learn, versatile. Used for web development, data analysis, AI, automation, scientific computing. Popular for beginners. Syntax emphasizes readability. Java: High-level, compiled to bytecode, runs on JVM (Java Virtual Machine). Platform-independent (write once, run anywhere). Used for Android apps, web applications, enterprise software. Object-oriented. C: High-level but close to hardware. Compiled, very fast. Used for system programming, embedded systems, operating systems. Requires manual memory management. Foundation for C++ and many languages. C++: Extension of C, adds object-oriented features. Used for games, graphics, system software, performance-critical applications. More complex than C. JavaScript: Interpreted, runs in web browsers. Used for interactive websites, web applications, server-side (Node.js). Essential for web development. Visual Basic: Easy to learn, GUI development. Microsoft's language for Windows applications. SQL (Structured Query Language): Database language. Query, insert, update, delete data. Standard for relational databases (MySQL, PostgreSQL). PHP: Server-side scripting for dynamic websites. Works with HTML. Powers many websites (WordPress). Swift: Apple's language for iOS/macOS apps. Modern, safe, fast. Ruby: Object-oriented, interpreted. Used for web applications (Ruby on Rails framework). Emphasizes simplicity.",
              keyPoints: [
                "Python: easy, versatile, AI, data science",
                "Java: platform-independent, Android apps",
                "C: fast, system programming, hardware control",
                "JavaScript: web interactivity, essential for web dev",
                "SQL: database queries and management",
                "Different languages suited for different tasks"
              ]
            },
            {
              title: "Programming Concepts",
              content: "Algorithm: Step-by-step procedure to solve problem. Must be clear, finite, and produce correct output. Flowchart: Visual representation of algorithm using symbols. Symbols: Oval (start/end), Rectangle (process), Diamond (decision), Parallelogram (input/output), Arrows (flow). Pseudocode: Algorithm written in plain English or simplified code. Not actual code but describes logic. Variables: Named storage locations holding data. Have data types (integer, float, string, boolean). Constants: Fixed values that don't change. Operators: Arithmetic (+, -, *, /), Comparison (>, <, ==, !=), Logical (AND, OR, NOT). Control Structures: Sequence (steps in order), Selection (if-else, switch - decisions), Iteration/Loops (repeat code - for, while, do-while). Functions/Procedures: Reusable code blocks. Take input (parameters), perform task, return output. Arrays: Collections of elements of same type, accessed by index. Debugging: Finding and fixing errors. Types: Syntax errors (grammar mistakes), Logical errors (wrong logic), Runtime errors (occur during execution).",
              keyPoints: [
                "Algorithm: step-by-step solution procedure",
                "Flowchart: visual algorithm using symbols",
                "Variables: store data, have types",
                "Control structures: sequence, selection, iteration",
                "Functions: reusable code blocks",
                "Debugging: finding and fixing errors"
              ]
            }
          ],
          objectives: [
            "Classify programming languages by generation",
            "Distinguish between compiler and interpreter",
            "Identify common programming languages and their uses",
            "Understand basic programming concepts"
          ]
        }
      ]
    }
  },
  {
    id: "comp-note-004",
    subjectId: "computer",
    title: "Data Processing and Database Management",
    order: 4,
    content: {
      overview: "Data processing involves collecting, organizing, and converting raw data into meaningful information. Understanding data types, processing methods, file organization, and database management is essential for effective information handling.",
      topics: [
        {
          title: "Data and Information",
          subtopics: [
            {
              title: "Data vs Information",
              content: "Data: Raw facts and figures without context or meaning. Examples: 25, John, 01/15/2025, scattered numbers. Unprocessed, disorganized, not useful for decision-making. Information: Processed data that has meaning and usefulness. Context added to data. Examples: John is 25 years old, Temperature is 25°C, Meeting on 01/15/2025. Organized, relevant, useful for decisions. Data Processing: Converting data into information through collection, organization, analysis, presentation. Stages: Data → Input → Processing → Output → Storage. Importance of information: Decision-making in business, government, education. Planning and forecasting. Problem-solving. Quality information characteristics: Accurate (correct, error-free), Relevant (fits purpose), Timely (available when needed), Complete (all necessary details), Reliable (trustworthy source), Understandable (clear to user).",
              keyPoints: [
                "Data: raw facts, no meaning (25, John)",
                "Information: processed data with meaning (John is 25)",
                "Processing converts data to information",
                "Information used for decision-making",
                "Quality information: accurate, relevant, timely",
                "Stages: Input → Process → Output → Storage"
              ]
            },
            {
              title: "Data Types",
              content: "Different types of data require different storage and processing. Numeric Data: Numbers used for calculations. Integer (whole numbers: 5, -10, 0). Real/Float (decimal numbers: 3.14, -0.5, 2.0). Used in mathematics, science, finance. Alphanumeric/String Data: Letters, numbers, and symbols as text. Examples: names (John), addresses (123 Main St), phone numbers (123-456-7890), passwords. Not for calculations even if contains numbers. Boolean Data: Logical values, only two options. True/False, Yes/No, 1/0. Used in conditions and decisions. Examples: Is student enrolled? (Yes/No). Date and Time Data: Represents dates and times. Formats: MM/DD/YYYY, DD/MM/YYYY, HH:MM:SS. Used for scheduling, records, timestamps. Image Data: Pictures, photos stored as pixels or vectors. Formats: JPEG, PNG, GIF, BMP, SVG. Audio Data: Sound, music, voice. Formats: MP3, WAV, AAC, FLAC. Video Data: Moving images with sound. Formats: MP4, AVI, MOV, MKV. Special characters: @, #, $, %, &, *, etc. Used in passwords, symbols.",
              keyPoints: [
                "Numeric: numbers for calculations (integer, float)",
                "Alphanumeric/String: text (names, addresses)",
                "Boolean: True/False, Yes/No",
                "Date/Time: schedules, timestamps",
                "Image: pictures (JPEG, PNG)",
                "Audio: sound (MP3, WAV); Video: movies (MP4, AVI)"
              ]
            },
            {
              title: "Data Processing Methods",
              content: "Batch Processing: Data collected over time and processed together in batches. Processing done at scheduled times (daily, weekly). No immediate results. Examples: payroll processing (monthly), bank statements (monthly), utility bills (monthly), exam results compilation. Advantages: Efficient for large volumes, less expensive, can process during off-peak hours. Disadvantages: Not suitable for urgent tasks, data not always up-to-date, errors discovered late. Real-Time Processing (Online Processing): Data processed immediately as it occurs. Instant results. Examples: ATM transactions, airline reservation systems, online shopping, GPS navigation, stock trading. Advantages: Up-to-date information, immediate feedback, suitable for urgent tasks. Disadvantages: Expensive (requires powerful systems), complex to implement. Interactive Processing: User interacts with system, provides input, gets immediate output. Examples: video games, word processing (typing and seeing text immediately), database queries. Distributed Processing: Processing divided among multiple computers in different locations connected by network. Examples: cloud computing, grid computing, peer-to-peer networks. Advantages: Faster, more reliable (redundancy), scalable.",
              keyPoints: [
                "Batch: collected and processed together (payroll, bills)",
                "Real-time: immediate processing (ATM, reservations)",
                "Interactive: user interacts, immediate response (games)",
                "Distributed: multiple computers work together (cloud)",
                "Batch: efficient for large volumes, delayed results",
                "Real-time: instant results, expensive"
              ]
            }
          ],
          objectives: [
            "Distinguish between data and information",
            "Identify different data types",
            "Compare data processing methods",
            "Understand characteristics of quality information"
          ]
        },
        {
          title: "File Organization and Access",
          subtopics: [
            {
              title: "File Organization Methods",
              content: "Files organize data on storage devices. Sequential File Organization: Records stored one after another in order. To access record, must read from beginning. Like cassette tape - can't jump to middle. Examples: transaction logs, archive data, backup files. Advantages: Simple, efficient for processing all records, good for batch processing, low storage overhead. Disadvantages: Very slow to find specific record, inefficient for searching, must read entire file to reach end. Direct/Random File Organization: Records stored at specific addresses/locations. Can access any record directly without reading others. Like CD/DVD - can jump to any track. Uses hashing algorithm to calculate record location from key. Examples: database files, master files. Advantages: Very fast access to specific records, efficient for real-time systems, good for frequent updates. Disadvantages: More complex, requires more storage space, wasted space if not full. Indexed Sequential File Organization: Combines sequential and direct. Records stored sequentially but index created showing locations. Index searched first, then direct access to record. Like book with index - find page number in index, go directly to page. Advantages: Faster than sequential for specific records, maintains sequential order, flexible access (sequential or direct). Disadvantages: More complex than sequential, requires space for index, index must be updated.",
              keyPoints: [
                "Sequential: one after another, slow search",
                "Direct/Random: jump to any record, very fast",
                "Indexed: index + sequential, flexible",
                "Sequential: simple, batch processing",
                "Direct: real-time, frequent updates",
                "Indexed: balance between sequential and direct"
              ]
            },
            {
              title: "File Access Methods and Operations",
              content: "File Access Methods: Sequential Access: Read records in order from beginning. Only way for sequential files. Serial Access: Records in no particular order (unsorted sequential). Random/Direct Access: Jump to any record directly. For direct and indexed files. File Operations: Create: Make new file. Open: Access existing file for reading/writing. Read: Retrieve data from file. Write: Add new data to file. Update: Modify existing records (edit). Delete: Remove records or entire file. Close: Save changes and end access. Search: Find specific record. Sort: Arrange records in order (ascending/descending). Merge: Combine two or more files. Copy: Duplicate file. File Attributes: Name, Type/Extension (.txt, .docx, .jpg), Size (bytes), Date Created/Modified, Location/Path, Permissions (read, write, execute). File Management: Organizing files into folders/directories. Hierarchical structure (tree). Root directory at top, subdirectories branch out. Path: location of file (C:\\Users\\Documents\\file.txt). Absolute path (full path from root). Relative path (from current location).",
              keyPoints: [
                "Sequential access: read in order",
                "Random access: jump to any record",
                "Operations: create, read, write, update, delete",
                "File attributes: name, type, size, date, location",
                "Files organized in folders/directories",
                "Path: file location in directory structure"
              ]
            }
          ],
          objectives: [
            "Compare file organization methods",
            "Explain advantages and disadvantages of each method",
            "Describe file access methods and operations",
            "Understand file management and directory structures"
          ]
        },
        {
          title: "Database Management Systems",
          subtopics: [
            {
              title: "Database Concepts",
              content: "Database: Organized collection of related data. Reduces redundancy (duplicate data), improves data integrity. Examples: student records, customer information, inventory. Database Management System (DBMS): Software for creating, managing, and accessing databases. Examples: MySQL, Oracle, Microsoft Access, MongoDB, PostgreSQL. Functions: Data definition (create tables), Data manipulation (insert, update, delete, query), Data security (access control, encryption), Data integrity (enforce rules, validation), Backup and recovery. Database Models: Hierarchical (tree structure, parent-child relationships, rigid). Network (graph, many-to-many relationships, complex). Relational (most common, data in tables with rows and columns, uses SQL). Object-oriented (objects like in OOP). NoSQL (flexible, unstructured data, scalable). Relational Database Terms: Table: Collection of related data in rows and columns. Row/Record/Tuple: Single entry, horizontal. Column/Field/Attribute: Data category, vertical. Primary Key: Unique identifier for each record (e.g., Student ID). Foreign Key: Links tables, refers to primary key in another table. Relationship: Connection between tables (one-to-one, one-to-many, many-to-many).",
              keyPoints: [
                "Database: organized collection of related data",
                "DBMS: software to manage databases (MySQL, Oracle)",
                "Functions: define, manipulate, secure, backup data",
                "Relational model: data in tables (most common)",
                "Table: rows (records) and columns (fields)",
                "Primary key: unique identifier; Foreign key: links tables"
              ]
            },
            {
              title: "SQL and Database Operations",
              content: "SQL (Structured Query Language): Standard language for relational databases. Four main categories: DDL (Data Definition Language): Define database structure. CREATE (make table), ALTER (modify structure), DROP (delete table). Example: CREATE TABLE Students (ID INT, Name VARCHAR, Age INT); DML (Data Manipulation Language): Manipulate data. INSERT (add records), UPDATE (modify records), DELETE (remove records). Example: INSERT INTO Students VALUES (1, 'John', 20); DCL (Data Control Language): Control access. GRANT (give permissions), REVOKE (remove permissions). DQL (Data Query Language): Retrieve data. SELECT (query data). Example: SELECT Name FROM Students WHERE Age > 18; Queries can use: WHERE (conditions), ORDER BY (sort), JOIN (combine tables), GROUP BY (group data), COUNT/SUM/AVG (aggregate functions). Database Advantages: Reduced redundancy, Data consistency, Data sharing (multiple users), Data security, Data integrity (accuracy and validity), Easy backup and recovery, Efficient data access. Disadvantages: Expensive (DBMS software, hardware), Complex to setup and manage, Requires training, Database failure affects all users.",
              keyPoints: [
                "SQL: language for databases",
                "CREATE: make table; SELECT: query data",
                "INSERT: add; UPDATE: modify; DELETE: remove",
                "Queries: WHERE, ORDER BY, JOIN for complex retrieval",
                "Advantages: reduced redundancy, security, sharing",
                "Disadvantages: expensive, complex, requires training"
              ]
            },
            {
              title: "Data Integrity and Security",
              content: "Data Integrity: Accuracy, consistency, and reliability of data. Types: Entity Integrity: Each record uniquely identifiable (primary key not null). Referential Integrity: Foreign key matches primary key in related table. Domain Integrity: Data in column matches defined data type and constraints. Validation Rules: Enforce data integrity. Range check (age 0-120), Type check (number for age), Length check (max characters), Format check (email format), Presence check (required field not empty), Uniqueness check (no duplicates). Database Security: Protecting data from unauthorized access. Authentication: Verify user identity (username/password, biometrics). Authorization: Control user permissions (read, write, delete). Encryption: Convert data to unreadable format. Backup: Regular copies for disaster recovery. Access Control: Who can access what data. Transaction Management: ACID properties. Atomicity (all or nothing), Consistency (valid state), Isolation (transactions independent), Durability (changes permanent). Threats: Unauthorized access, Data theft, Viruses/malware, Hardware failure, Natural disasters, Human error.",
              keyPoints: [
                "Data integrity: accuracy and consistency",
                "Validation: range, type, length, format checks",
                "Security: authentication, authorization, encryption",
                "Backup: regular copies for recovery",
                "ACID: Atomicity, Consistency, Isolation, Durability",
                "Threats: unauthorized access, theft, disasters"
              ]
            }
          ],
          objectives: [
            "Explain database concepts and DBMS functions",
            "Understand relational database terminology",
            "Use basic SQL commands",
            "Describe data integrity and security measures"
          ]
        }
      ]
    }
  },
  {
    id: "comp-note-005",
    subjectId: "computer",
    title: "Computer Networks, Internet, and Ethics",
    order: 5,
    content: {
      overview: "Computer networks connect computers to share resources and information. Understanding network types, Internet services, security, and ethical issues is essential in our connected digital world.",
      topics: [
        {
          title: "Computer Networks",
          subtopics: [
            {
              title: "Network Types and Topologies",
              content: "Computer Network: Two or more computers connected to share resources and data. Benefits: Resource sharing (printers, storage), Data sharing, Communication, Cost reduction. Network Types by Size: PAN (Personal Area Network): Very small, personal devices. Bluetooth, USB. Range: few meters. Examples: smartphone to smartwatch, laptop to wireless mouse. LAN (Local Area Network): Small area (building, campus). High speed. Owned by single organization. Examples: school lab, office network. MAN (Metropolitan Area Network): City-wide. Connects multiple LANs. Examples: city Wi-Fi, cable TV networks. WAN (Wide Area Network): Large area (country, world). Connects LANs and MANs across long distances. Internet is largest WAN. Uses leased lines, satellites. Network Topologies (Physical arrangement): Bus: All devices on single cable. Cheap, easy. If cable fails, whole network fails. Star: All devices connected to central hub/switch. Easy to add devices, hub failure affects all. Most common. Ring: Devices in closed loop. Data travels one direction. One device failure breaks network. Mesh: Every device connected to every other. Very reliable (multiple paths), expensive, complex. Used in critical systems. Tree/Hierarchical: Combination of star topologies.",
              keyPoints: [
                "PAN: personal devices (Bluetooth)",
                "LAN: building/campus, high speed",
                "MAN: city-wide; WAN: country/worldwide",
                "Internet: largest WAN",
                "Bus: single cable; Star: central hub (common)",
                "Ring: loop; Mesh: every device connected (reliable)"
              ]
            },
            {
              title: "Network Components and Protocols",
              content: "Network Hardware: NIC (Network Interface Card): Connects computer to network. Each has unique MAC address. Router: Connects different networks, directs data between them. Internet connection. Switch: Connects devices in LAN, directs data to specific device (intelligent). Hub: Connects devices, broadcasts data to all (not intelligent, outdated). Modem: Converts digital to analog and vice versa. For internet over phone/cable lines. Access Point (AP): Wireless connection point. Wi-Fi router. Cable: Twisted pair (Ethernet), Coaxial (cable TV), Fiber optic (fastest, light signals). Network Software: NOS (Network Operating System): Manages network. Windows Server, Linux. Protocols: Rules for communication. TCP/IP (Transmission Control Protocol/Internet Protocol): Standard for internet. TCP breaks data into packets, ensures delivery. IP addresses devices. HTTP/HTTPS: Web page transfer. Hypertext Transfer Protocol (Secure with encryption). FTP: File Transfer Protocol. Upload/download files. SMTP: Simple Mail Transfer Protocol. Send email. POP3/IMAP: Receive email. DNS: Domain Name System. Converts domain names (google.com) to IP addresses. DHCP: Dynamic Host Configuration Protocol. Assigns IP addresses automatically.",
              keyPoints: [
                "NIC: connects computer to network",
                "Router: connects networks; Switch: connects devices in LAN",
                "Modem: digital-analog conversion for internet",
                "TCP/IP: internet standard protocol",
                "HTTP: web; FTP: files; SMTP: email",
                "DNS: domain names to IP addresses"
              ]
            },
            {
              title: "IP Addressing and Network Models",
              content: "IP Address: Unique numerical address for each device on network. IPv4: 32-bit, four numbers (0-255) separated by dots. Example: 192.168.1.1. About 4 billion addresses. Running out. IPv6: 128-bit, hexadecimal. Example: 2001:0db8:85a3:0000:0000:8a2e:0370:7334. Virtually unlimited addresses. Classes: Class A (1-126, large networks), Class B (128-191, medium), Class C (192-223, small). Private IP addresses: For internal networks, not routable on internet (192.168.x.x, 10.x.x.x). Public IP: Unique on internet. Domain Name: Human-readable address (www.google.com). DNS translates to IP. Network Models: Client-Server: Central server provides resources/services. Clients request services. Examples: web browsing, email, online banking. Server controls access, security. Scalable. Server failure affects all. Peer-to-Peer (P2P): All computers equal, no central server. Share resources directly. Examples: file sharing (BitTorrent), blockchain. Cheaper, no single point of failure. Less secure, harder to manage. Bandwidth: Data transfer rate. Measured in bps (bits per second). Kbps, Mbps, Gbps. Higher = faster. Latency: Delay in data transmission. Lower is better. Ping measures latency.",
              keyPoints: [
                "IP address: unique device identifier",
                "IPv4: 32-bit (192.168.1.1); IPv6: 128-bit",
                "Domain name: www.example.com (DNS converts to IP)",
                "Client-Server: central server, clients request",
                "P2P: equal computers, no server",
                "Bandwidth: data rate (Mbps); Latency: delay"
              ]
            }
          ],
          objectives: [
            "Identify network types and their characteristics",
            "Compare network topologies",
            "Explain functions of network hardware and protocols",
            "Understand IP addressing and network models"
          ]
        },
        {
          title: "The Internet and Services",
          subtopics: [
            {
              title: "Internet Basics",
              content: "Internet: Global network of interconnected networks. Largest WAN. Connects billions of devices worldwide. Uses TCP/IP protocol. History: Developed from ARPANET (1969) by US Department of Defense. Tim Berners-Lee invented World Wide Web (WWW) in 1989 at CERN. First website 1991. Internet vs WWW: Internet is infrastructure (hardware, cables, protocols). WWW is service on internet (websites, hyperlinks, accessed via browsers). Internet requirements: Computer/device, NIC, Modem/Router, ISP (Internet Service Provider) subscription, Browser software. ISP: Company providing internet access. Examples: AT&T, Comcast, Verizon. Types: Dial-up (slow, phone line), Broadband: DSL (phone line, faster), Cable (cable TV line), Fiber optic (fastest), Satellite, Mobile/4G/5G. URL (Uniform Resource Locator): Web address. Format: protocol://domain/path. Example: https://www.example.com/page. Protocol (https), Domain (www.example.com), Path (/page). Search Engines: Find information on web. Examples: Google, Bing, Yahoo, DuckDuckGo. Use keywords, algorithms rank results.",
              keyPoints: [
                "Internet: global network of networks",
                "WWW: service on internet (websites)",
                "ISP: provides internet access",
                "Connection types: Dial-up, DSL, Cable, Fiber, Satellite, Mobile",
                "URL: web address (https://www.example.com)",
                "Search engines: Google, Bing (find information)"
              ]
            },
            {
              title: "Internet Services and Applications",
              content: "World Wide Web (WWW): Collection of websites linked by hyperlinks. Web page: single document. Website: collection of related pages. Home page: main page. Static pages (fixed content) vs Dynamic pages (content changes). E-mail: Electronic mail. Send messages instantly. Attachments (files). Examples: Gmail, Outlook, Yahoo Mail. Features: inbox, sent, spam filter, contacts. E-commerce: Buying/selling online. B2C (Business to Consumer): Amazon, eBay. B2B (Business to Business). Advantages: convenience, 24/7, wide selection, price comparison. Concerns: security, privacy, fraud. Online Banking: Manage accounts, transfer money, pay bills via internet. Convenient but requires security (HTTPS, encryption). Social Media: Connect and share with others. Examples: Facebook, Twitter, Instagram, LinkedIn, TikTok. Benefits: communication, networking, marketing. Risks: privacy, cyberbullying, addiction. Video Conferencing: Real-time video communication. Examples: Zoom, Microsoft Teams, Google Meet, Skype. Used for meetings, education, telemedicine. Cloud Computing: Access resources (storage, software, processing) over internet on-demand. Types: SaaS (Software as a Service - Gmail, Office 365), PaaS (Platform as a Service - development platforms), IaaS (Infrastructure as a Service - virtual machines, storage). Examples: AWS, Azure, Google Cloud. Benefits: scalability, cost-effective, accessibility. Streaming: Real-time delivery of audio/video. Netflix, YouTube, Spotify. VoIP (Voice over IP): Phone calls over internet. Skype, WhatsApp calls. Cheaper than traditional phones.",
              keyPoints: [
                "WWW: websites and web pages",
                "E-mail: electronic messages (Gmail, Outlook)",
                "E-commerce: online buying/selling (Amazon)",
                "Social media: connect and share (Facebook, Twitter)",
                "Cloud computing: internet-based resources (SaaS, IaaS)",
                "Streaming: Netflix, YouTube; VoIP: internet calls"
              ]
            }
          ],
          objectives: [
            "Explain the Internet and its history",
            "Distinguish between Internet and WWW",
            "Identify and describe Internet services",
            "Understand cloud computing concepts"
          ]
        },
        {
          title: "Network and Internet Security",
          subtopics: [
            {
              title: "Security Threats",
              content: "Malware (Malicious Software): Software designed to harm systems. Virus: Attaches to files, spreads when file executed. Damages data, spreads to other computers. Examples: Melissa, ILOVEYOU. Worm: Self-replicating, spreads without user action. Consumes bandwidth. Example: Conficker. Trojan Horse: Disguised as legitimate software. Opens backdoor for hackers. Doesn't self-replicate. Spyware: Secretly monitors user activity, steals personal information (passwords, credit cards). Adware: Displays unwanted ads, can track browsing. Ransomware: Encrypts files, demands payment for decryption key. Example: WannaCry. Rootkit: Hides malware, maintains unauthorized access. Hacking: Unauthorized access to systems. White hat (ethical hackers, find vulnerabilities), Black hat (criminals, malicious), Grey hat (in between). Phishing: Fraudulent emails pretending to be legitimate (bank, company). Trick users into revealing passwords, credit card numbers. Pharming: Redirects users to fake websites. Spoofing: Pretending to be someone else (email spoofing, IP spoofing). Social Engineering: Manipulating people to reveal confidential information. Identity Theft: Stealing personal information to impersonate victim. DOS/DDOS Attack: Flooding server with traffic to make it unavailable. Distributed Denial of Service uses many computers.",
              keyPoints: [
                "Virus: attaches to files, spreads",
                "Worm: self-replicating, spreads automatically",
                "Trojan: disguised as legitimate software",
                "Spyware: secretly monitors and steals data",
                "Ransomware: encrypts files, demands payment",
                "Phishing: fake emails to steal credentials"
              ]
            },
            {
              title: "Security Measures",
              content: "Antivirus Software: Detects and removes malware. Scans files, monitors activities. Needs regular updates (virus definitions). Examples: Norton, McAfee, Kaspersky, Windows Defender. Firewall: Monitors and controls network traffic. Blocks unauthorized access. Hardware (router) and software (Windows Firewall). Encryption: Converts data to unreadable format. Only authorized parties can decrypt. Algorithms: AES, RSA. HTTPS uses SSL/TLS encryption. Strong Passwords: Complex, long passwords. Mix upper/lowercase, numbers, symbols. Avoid dictionary words, personal information. Different passwords for different accounts. Password Manager helps. Two-Factor Authentication (2FA): Extra security layer. Password + code (SMS, app, email). Even if password stolen, can't access without second factor. Backup: Regular copies of data. External drives, cloud storage. 3-2-1 rule: 3 copies, 2 different media, 1 offsite. Software Updates: Fix security vulnerabilities. Install updates promptly. Access Control: User authentication (username/password, biometrics). Authorization (permissions - read, write, execute). User Education: Training users about threats, safe practices. Don't click suspicious links, verify sender. VPN (Virtual Private Network): Encrypts internet connection, hides IP address. Secure public Wi-Fi use. Digital Certificates: Verify website identity. SSL certificates (HTTPS). Secure Browsing: Use HTTPS websites. Check for padlock icon. Avoid suspicious sites.",
              keyPoints: [
                "Antivirus: detects and removes malware (needs updates)",
                "Firewall: blocks unauthorized network access",
                "Encryption: makes data unreadable (HTTPS, AES)",
                "Strong passwords: complex, unique for each account",
                "2FA: password + second verification",
                "Backup: regular copies for recovery"
              ]
            }
          ],
          objectives: [
            "Identify types of malware and security threats",
            "Explain phishing, social engineering, and hacking",
            "Describe security measures and best practices",
            "Understand importance of passwords, encryption, and backups"
          ]
        },
        {
          title: "Computer Ethics and Society",
          subtopics: [
            {
              title: "Ethical and Legal Issues",
              content: "Computer Ethics: Moral principles governing computer use. Responsible and acceptable behavior. Privacy: Right to control personal information. Concerns: data collection by companies, surveillance, social media sharing. Data Protection Laws: GDPR (Europe), protect user privacy. Intellectual Property: Ownership of creative works. Copyright: Protection for creative works (books, music, software). Illegal to copy without permission. Patent: Protection for inventions. Trademark: Protection for brand names, logos. Piracy: Illegal copying and distribution of copyrighted material. Software piracy (copying programs), Music/Movie piracy (downloading illegally). Consequences: fines, legal action. Use licensed software. Plagiarism: Using someone's work without credit. Academic dishonesty. Cite sources. Cybercrime: Criminal activities using computers/internet. Hacking, identity theft, fraud, cyberbullying, online scams. Computer Fraud and Abuse Act (USA), Cybercrime Acts (various countries). Digital Rights Management (DRM): Technology to control use of copyrighted digital media. Prevents unauthorized copying. Licensing: Software licenses define usage rights. Proprietary (paid, restricted), Open Source (free, modifiable), Freeware (free, not modifiable), Shareware (trial, then pay).",
              keyPoints: [
                "Privacy: control over personal information",
                "Copyright: protects creative works (don't pirate)",
                "Piracy: illegal copying (software, music, movies)",
                "Plagiarism: using work without credit",
                "Cybercrime: hacking, fraud, identity theft",
                "Licensing: defines how software can be used"
              ]
            },
            {
              title: "Health and Social Issues",
              content: "Health Issues: Repetitive Strain Injury (RSI): Pain from repetitive movements. Carpal tunnel syndrome from excessive typing/mouse use. Prevention: breaks, ergonomic equipment, proper posture. Eye Strain: Computer Vision Syndrome. Tired, dry eyes from prolonged screen time. Prevention: 20-20-20 rule (every 20 minutes, look 20 feet away for 20 seconds), proper lighting, anti-glare screens. Back and Neck Pain: Poor posture, long sitting. Prevention: ergonomic chair, proper screen height, regular movement. Headaches: Eye strain, poor posture, stress. Prevention: breaks, proper lighting, correct prescription glasses. Obesity: Sedentary lifestyle. Sitting long hours. Prevention: regular exercise. Ergonomics: Study of people's efficiency in working environment. Proper workstation setup: Monitor at eye level (arm's length away), Chair with back support (feet flat on floor), Keyboard and mouse at comfortable height, Good lighting (no glare). Social Issues: Digital Divide: Gap between those with technology access and those without. Based on income, location, education. Creates inequality. Cyberbullying: Harassment via digital means. Social media, messages. Psychological harm. Report and block. Addiction: Excessive computer/internet/gaming use. Affects relationships, work, health. Social Isolation: Less face-to-face interaction. Excessive online time. Employment: Computers create jobs (IT, programming) but also eliminate jobs (automation). Job Displacement: Workers replaced by automation/computers. Need retraining. Information Overload: Too much information available. Difficult to process, verify quality.",
              keyPoints: [
                "RSI: repetitive strain from typing/mouse",
                "Eye strain: tired eyes, 20-20-20 rule helps",
                "Ergonomics: proper workstation setup prevents injuries",
                "Digital divide: unequal technology access",
                "Cyberbullying: online harassment",
                "Addiction: excessive computer/internet use"
              ]
            },
            {
              title: "Professional Ethics and Responsibilities",
              content: "Professional Codes of Conduct: ACM (Association for Computing Machinery) Code of Ethics, IEEE (Institute of Electrical and Electronics Engineers) Code. Principles: Honesty and integrity. Avoid harm to others. Respect privacy and confidentiality. Respect intellectual property. Professional competence (keep skills current). Responsibilities of IT Professionals: Data Protection: Safeguard user data, implement security measures. Accuracy: Ensure systems work correctly, test thoroughly. Bugs can have serious consequences (medical, financial systems). Accessibility: Design inclusive systems for all users including those with disabilities. Screen readers, alternative text, keyboard navigation. Transparency: Clear about how systems work, what data collected. Accountability: Take responsibility for system failures and impacts. Whistle-blowing: Reporting unethical practices. Confidentiality: Don't disclose sensitive information learned at work. Professional Development: Keep learning, stay updated with technology. Sustainable Computing: Green IT. Energy-efficient systems, reduce e-waste, recycle electronics, cloud computing reduces resource use. E-waste: Discarded electronics. Contains toxic materials. Proper disposal/recycling important. Accessibility Standards: WCAG (Web Content Accessibility Guidelines). Make web accessible to people with disabilities. Net Neutrality: All internet traffic treated equally. ISPs shouldn't block or slow certain content.",
              keyPoints: [
                "Code of ethics: honesty, avoid harm, respect privacy",
                "Data protection: safeguard user information",
                "Accessibility: design for users with disabilities",
                "Accountability: responsibility for system impacts",
                "Green IT: energy efficiency, reduce e-waste",
                "E-waste: proper disposal of old electronics"
              ]
            }
          ],
          objectives: [
            "Understand ethical issues in computing",
            "Explain intellectual property and software licensing",
            "Identify health problems from computer use and prevention",
            "Discuss social impacts of computing technology"
          ]
        }
      ]
    }
  }
];
