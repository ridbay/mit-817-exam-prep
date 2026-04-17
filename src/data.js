export const studyGuide = [
  {
    title: "1. Foundations & Layered Technology",
    topic: "Foundations",
    overview:
      "Software engineering is a layered technology geared towards producing high-quality software. It involves a systematic, disciplined approach that scales to complex, abstract systems across the entire lifecycle.",
    subtopics: [
      [
        "Layer 1: Quality Focus",
        "The foundation mindset. Quality is not added at the end; it must be built into every stage. (e.g., Secure transactions, no data loss).",
      ],
      [
        "Layer 2: Process Layer",
        "The framework layer. Defines activities like Communication, Planning, Modeling, Construction, and Deployment.",
      ],
      [
        "Layer 3: Methods Layer",
        "The 'how-to' layer. Provides technical methods for Requirements Analysis, Design, Coding, and Testing.",
      ],
      [
        "Layer 4: Tools Layer",
        "Supporting layer. Provides automated support like IDEs, Version Control (Git), and Testing tools.",
      ],
    ],
    example:
      "🔹 Layered Technology Diagram:\n        [ Tools ]\n       [ Methods ]\n      [ Process ]\n   [ Quality Focus ]\n\n🔹 Example: Login System Implementation\nQuality → Secure auth\nProcess → Plan the sprint\nMethods → Design auth module\nTools → Use Git & VS Code",
    exam_tip:
      "👉 ALWAYS remember: 'Process is the foundation layer of software engineering.' Quality is the mindset that drives all other layers.",
    common_trap:
      "Do not assume quality is a separate phase. It is a 'Layer' that must underlie every single activity in software engineering.",
    mastery_insight:
      "🔥 How to Think About It:\nSoftware engineering is NOT just coding. It is about managing complexity and change over time. Software 'does not wear out' but still deteriorates due to the inevitable accumulation of changes.\n\n👉 Exam Trick: When asked 'What is SE?', use this structure: Definition + Why it exists (software crisis) + Scope (full lifecycle) + Challenge (complexity + change).",
    summary:
      "🔹 High-Yield Summary: SE = Layered Technology. Quality (Mindset) → Process (Framework) → Methods (Technical) → Tools (Support).",
  },
  {
    title: "2. Software Products",
    topic: "Software Products",
    overview:
      "Distinguishes between generic products for a market and custom projects for a specific client. Focused on business opportunities, product vision, and avoiding scope bloat.",
    subtopics: [
      [
        "Types of Products",
        "Generic (for many users, e.g., MS Word) and Custom (for one client, e.g., Hospital System).",
      ],
      [
        "Product vs Project",
        "Product: Market-driven, continuous evolution. Project: Client-driven, defined scope.",
      ],
      [
        "Product Vision",
        "A simple statement describing the core purpose of the product.",
      ],
      [
        "Feature Creep",
        "Uncontrolled addition of features that makes products bloated and hard to use.",
      ],
    ],
    example:
      "🔹 Feature Creep Example:\nA simple Note app becomes: Notes + Chat + Video + Games → It becomes bloated and loses its original value proposition.",
    exam_tip:
      "👉 Understand the difference between WHAT (Feature), HOW (Scenario), and WHY (Story). Products solve business opportunities, Projects solve client requirements.",
    common_trap:
      "Do not confuse 'Feature' with 'Scenario'. A feature is the functionality; a scenario is the narrative of use.",
    mastery_insight:
      "🔥 Product Thinking:\nThe primary goal is to solve a Business Opportunity. Success depends on a clear Vision and avoiding the 'Feature Creep' trap where the product loses its original value.",
    summary:
      "🔹 High-Yield Summary: Product = Business Opportunity. Project = Client Requirement. Success depends on a clear Vision and avoiding Feature Creep.",
  },
  {
    title: "3. Agile Software Engineering",
    topic: "Agile",
    overview:
      "A flexible, iterative development approach that responds to change through small working increments and close customer collaboration.",
    subtopics: [
      ["Core Philosophy", "Responding to change is more important than following a rigid plan."],
      [
        "Agile Manifesto",
        "Working software > Documentation, Customer collaboration > Contract, Responding to change > Plan.",
      ],
      [
        "Iterative Delivery",
        "Delivering useful software in small pieces to get early feedback.",
      ],
      [
        "Suitability",
        "Best for changing requirements and fast delivery. NOT for safety-critical systems (e.g., airplane controls).",
      ],
    ],
    example:
      "🔹 Food Delivery App Lifecycle:\nWeek 1 → Basic ordering\nWeek 2 → Add delivery tracking\nWeek 3 → Add user reviews",
    exam_tip:
      "👉 'Explain Agile and its principles' is frequently asked. Focus on flexibility, speed, and user feedback.",
    common_trap:
      "Do not write that agile rejects documentation completely. The manifesto says 'Working software OVER comprehensive documentation'.",
    mastery_insight:
      "🔥 What Agile REALLY Solves:\nTraditional models fail when requirements change. Agile builds systems that can change easily using the 'Deliver → Get feedback → Improve → Repeat' loop.\n\n👉 Hidden Insight: Agile fails when the system MUST be 100% correct before release (e.g., medical software).",
    summary:
      "🔹 High-Yield Summary: Agile = Flexibility + Speed + User Focus. It prioritizes individuals and interactions over tools.",
  },
  {
    title: "4. Scrum and XP",
    topic: "Agile Frameworks",
    overview:
      "Scrum provides a management framework for teamwork, while XP (Extreme Programming) provides disciplined engineering practices for high-quality code.",
    subtopics: [
      ["Scrum Components", "Backlog (list of work), Sprint (fixed cycle), Increment (working software), Daily Scrum (sync)."],
      [
        "Roles",
        "Product Owner (what to build), Scrum Master (process coach), Team (builders).",
      ],
      [
        "XP Practices",
        "Pair Programming (two devs, one keyboard), Continuous Testing, Simple Design, Refactoring.",
      ],
    ],
    example:
      "🔹 E-commerce Implementation:\nBacklog → Login, Cart, Payment\nSprint → Build Login features\nIncrement → A working, tested login system ready for feedback.",
    exam_tip:
      "👉 Scrum = Management (Teamwork/Sprints). XP = Coding (Pair Programming/Unit Tests). Both are flavors of Agile.",
    common_trap:
      "Do not assume Scrum and XP are incompatible. They are often used together to manage projects and ensure code quality.",
    mastery_insight:
      "🔥 Framework Mastery:\nScrum is for management (how the team works); XP is for engineering (how the code is written). Using them together provides a complete agile package.",
    summary:
      "🔹 High-Yield Summary: Scrum = Management Framework. XP = Coding Practices. Both aim for rapid, high-quality delivery.",
  },
  {
    title: "5. Features, Scenarios, and Stories",
    topic: "User Focus",
    overview:
      "Deeply understanding the user is the foundation of product design. We distinguish between WHO the user is (Persona), WHY they need the system (User Story), and HOW they interact with it step-by-step (Scenario).",
    subtopics: [
      [
        "1. Scenario (HOW)",
        "A detailed narrative describing step-by-step interaction. \n\nExample (ATM): \n1. User inserts card \n2. System prompts for PIN \n3. User enters PIN \n4. System validates PIN \n5. User selects 'Withdraw' \n6. User enters amount \n7. System dispenses cash \n8. Transaction completes",
      ],
      [
        "2. User Story (WHY)",
        "A short statement from the user's perspective. \n\nExample: 'As a bank customer, I want to withdraw money so that I can access cash anytime.'",
      ],
      [
        "3. Persona (WHO)",
        "A fictional representation of a typical user profile. \n\nExample (ATM User): \nName: Ade, Age: 45, Occupation: Business owner. \nGoal: Quick cash withdrawal. \nBehavior: Uses ATM frequently, prefers speed.",
      ],
    ],
    example:
      "🚀 FINAL MASTER EXAMPLE (ALL 3 TOGETHER)\n\n🔹 Persona: John, a busy banker who needs quick transactions.\n🔹 User Story: 'As a banker, I want to withdraw money quickly so that I save time.'\n🔹 Scenario:\n1. John inserts card\n2. Enters PIN\n3. Selects withdraw\n4. Gets cash",
    exam_tip:
      "🧠 MEMORY TRICK & FORMAT:\n👉 Persona = Person | Story = Goal | Scenario = Steps\n\n🎯 EXAM-READY FORMAT:\nDefine each → Give an example for each → Compare them (WHO/WHY/HOW).",
    common_trap:
      "⚠️ AVOID THESE:\n❌ Writing a scenario as a story (keep steps distinct).\n❌ Forgetting the 'So that [reason]' in stories.\n❌ Making personas too vague; give them a name and specific behavior.",
    mastery_insight:
      "🔥 QUICK COMPARISON:\n\n| Concept | Focus | Example |\n| :--- | :--- | :--- |\n| **Persona** | **WHO** | 'Sarah, a student' |\n| **User Story** | **WHY** | 'I want to order food...' |\n| **Scenario** | **HOW** | Step-by-step process |",
    summary:
      "🔹 High-Yield Summary: Feature = WHAT; Scenario = HOW; Story = WHY. Use Personas to keep your design grounded and user-centered.",
  },
  {
    title: "6. Process Models",
    topic: "Process Models",
    overview:
      "Structured sets of activities to develop software. Models range from traditional linear approaches to risk-focused and iterative frameworks.",
    subtopics: [
      ["Waterfall", "Rigid, sequential phases. Best for stable requirements (e.g., Payroll)."],
      ["Incremental", "Building the system in parts and delivering them one by one."],
      [
        "Spiral",
        "Risk-driven model. Before moving to the next level, evaluate risks first.",
      ],
      [
        "Prototyping",
        "Building a quick 'fake' or partial version to get user feedback before full dev.",
      ],
      [
        "Unified Process (UP)",
        "Phase-based (Inception, Elaboration, Construction, Transition).",
      ],
    ],
    example:
      "🔹 Choosing a Model:\nWaterfall → Building a 100% defined payroll system.\nSpiral → Building a high-risk security protocol.\nPrototyping → Testing a new UI concept with real users.",
    exam_tip:
      "👉 Waterfall = Rigid. Agile/Incremental = Flexible. Spiral = Risk-focused. Always state where the model fits best in exam answers.",
    common_trap:
      "Waterfall is not bad; it's just 'stable'. Avoid saying it's 'old' or 'obsolete'—it's still used in very structured environments.",
    mastery_insight:
      "🔥 KEY COMPARISON:\nWaterfall → Structured but Inflexible (Best for Stable).\nIncremental → Early Delivery (Best for Medium).\nSpiral → Risk Control (Best for High-Risk/Security).\nAgile → Flexible but low documentation (Best for Dynamic).",
    summary:
      "🔹 High-Yield Summary: Process models provide a framework for development. Pick based on requirements stability and risk level.",
  },
  {
    title: "7. Requirements Engineering (Deep Dive)",
    topic: "Requirements Engineering",
    overview:
      "The process of identifying, analyzing, documenting, and managing system requirements. It is critical because poor requirements are the #1 cause of software failure.",
    subtopics: [
      [
        "1. Elicitation (Gathering)",
        "Collecting needs from stakeholders using Interviews, Questionnaires, or Observation. Problem: Stakeholders often don't know what they want.",
      ],
      [
        "2. Analysis",
        "Understanding and organizing requirements to remove ambiguity. (e.g., Change 'Fast' to 'Response time < 2s').",
      ],
      [
        "3. Modeling",
        "Representing requirements using diagrams: Scenario-based (Use cases), Data, Class, Flow, or Behavioral models.",
      ],
      [
        "4. Negotiation",
        "Resolving conflicts to find a 'Win-Win' balance between stakeholders.",
      ],
      [
        "5. Validation",
        "Ensuring requirements are Correct, Complete, and Consistent.",
      ],
      [
        "6. Management",
        "Handling changes (e.g., adding fingerprint login mid-project).",
      ],
      [
        "Requirement Types",
        "Functional (What it does), Non-Functional (Constraints/Speed/Security), Domain (Industry rules, e.g., Min balance).",
      ],
      [
        "SRS Document",
        "Software Requirements Specification. Contains: Intro, Overview, Functional/Non-functional needs, and Constraints.",
      ],
    ],
    example:
      "🔹 Ride-Hailing App Case Study:\nElicitation → Interview drivers about pay.\nF-Requirement → 'User can request ride'.\nNF-Requirement → 'System responds in 2s'.\nDomain → 'Driver must have valid license'.\nModeling → Use Case: 'Request Ride'.\nManagement → Add 'EV-only' filter later.",
    exam_tip:
      "👉 For 'Discuss RE' questions, always use the 6-step structure: Elicitation → Analysis → Modeling → Negotiation → Validation → Management. Mention the SRS as the final output.",
    common_trap:
      "Do not confuse Functional with Non-Functional. Functional is the 'action' (withdraw money); Non-Functional is the 'quality' (securely).",
    mastery_insight:
      "🔥 The REAL Problem RE Solves:\nUsers don't know exactly what they want. RE is the process of translating vague desires into precise, testable requirements. \n\n👉 Deep Task Flow: Understand (Elicitation) → Organize (Analysis) → Represent (Modeling) → Agree (Negotiation) → Check (Validation) → Control (Management).",
    summary:
      "🔹 High-Yield Summary: RE = Most critical phase. Tasks build toward the SRS. Biggest risk: Communication gaps and ambiguity.",
  },
  {
    title: "8. Modeling and UML",
    topic: "Modeling and UML",
    overview:
      "UML (Unified Modeling Language) is a standard tool for visualizing, specifying, and documenting software systems. Models help developers communicate and analyze complexity.",
    subtopics: [
      ["Class Diagram", "Shows the static structure of classes and their relationships. (ATM Account/User)."],
      ["Activity Diagram", "Shows the workflow or processing sequence. (Steps to withdraw cash)."],
      ["State Diagram", "Shows the behavior of a single object over time. (Idle → Pin Entry → Success)."],
      ["Use Case", "Shows user interactions with the system from an external view."],
    ],
    example:
      "🔹 ATM Modeling Case Study:\nClass → Account, CardReader, Screen.\nActivity → Insert Card → Enter PIN → Dispense Cash.\nState → ATM is 'Idle' until 'Card Inserted' event occurs.",
    exam_tip:
      "👉 UML is a visualization tool. If asked for a diagram, focus on the flow (Activity) or structure (Class).",
    common_trap:
      "Do not confuse Class diagrams (Static) with Activity diagrams (Dynamic/Flow).",
    mastery_insight:
      "🔥 Communication Tool:\nUML exists because humans understand visuals better than text. It serves as the bridge between non-technical stakeholders (Use Cases) and technical developers (Class Diagrams).",
    summary:
      "🔹 High-Yield Summary: UML = Visualization tool. Class=Structure; Activity=Workflow; State=Behavior.",
  },
  {
    title: "9. Design and Architecture",
    topic: "Design and Architecture",
    overview:
      "Software architecture is the high-level structure of a system. Good design focuses on abstraction, modularity, and separation of concerns to make systems easier to maintain.",
    subtopics: [
      ["Layered Architecture", "Separate UI, Logic, and Database (Standard for web apps)."],
      ["Pipe-and-Filter", "Transform data through stages (e.g., Image processing)."],
      ["Key Concepts", "Abstraction (hide detail), Modularity (split to parts), Separation of Concerns (independent tasks)."],
    ],
    example:
      "🔹 Layered Bank System:\nUI Layer → User types PIN\nBusiness Logic Layer → Check balance logic\nDatabase Layer → Account balances stored here",
    exam_tip:
      "👉 Good design = easier maintenance. Always mention Abstraction and Modularity in design essays.",
    common_trap:
      "Architecture is not just a diagram; it's the fundamental organization and guiding principles of the system evolution.",
    mastery_insight:
      "🔥 Architectural Blueprint:\nArchitecture is the 'blueprint' of the system. Bad architecture makes a system hard to maintain and impossible to scale. Always aim for 'Low Coupling' (independent parts) and 'High Cohesion' (each part does one job well).",
    summary:
      "🔹 High-Yield Summary: Higher-level structure = Architecture. Lower-level structure = Design. Goal: Low coupling, high cohesion.",
  },
  {
    title: "10. Cloud and Microservices",
    topic: "Cloud and Microservices",
    overview:
      "Modern development uses remote servers and granular, independent services to achieve scalability and flexibility.",
    subtopics: [
      ["Cloud Software", "Delivered over a network (e.g., Google Drive, Spotify)."],
      ["SaaS Issues", "Data regulation, security, and API exchange."],
      ["Microservices", "Small independent services that handle specific tasks (e.g., Payment, Orders, Users)."],
    ],
    example:
      "🔹 E-commerce Microservices:\nService A → Handles Payments\nService B → Handles Inventory\nService C → Handles User Profiles\nIf Payments go down, users can still browse Inventory.",
    exam_tip:
      "👉 Cloud = Scalability. Microservices = Flexibility. Understand 'Multi-tenancy' (one instance shared by many clients).",
    common_trap:
      "Do not assume cloud is automatically 'safer'. Security in the cloud is a shared responsibility.",
    mastery_insight:
      "🔥 Modern Scalability:\nCloud architecture is about managing distributed failures. In a microservices environment, 'Design for Failure' is key—if one service dies, the whole system shouldn't.",
    summary:
      "🔹 High-Yield Summary: Scalable infrastructure (Cloud) + Independent components (Microservices) = Modern Apps.",
  },
  {
    title: "11. Quality, Security, and Testing",
    topic: "Quality and Testing",
    overview:
      "Quality is the degree of excellence. Testing is the primary way we verify quality and reduce security risks before release.",
    subtopics: [
      ["Cost of Quality", "Prevention (Planning), Appraisal (Testing), and Failure (Fixing bugs)."],
      ["Testing Levels", "Unit (one function), Integration (two parts), System (whole app)."],
      ["Verification vs Validation", "Built right (code specs) vs Built for right need (user satisfaction)."],
    ],
    example:
      "🔹 Testing a Car Software:\nUnit → Test the brake sensor code.\nIntegration → Test sensor + braking hardware.\nSystem → Test the whole car in the rain.",
    exam_tip:
      "👉 Testing early saves money. External failure (bugs found by users) is the most expensive type of failure.",
    common_trap:
      "Testing can show the presence of bugs, but never their absence. It reduces risk, it doesn't eliminate it.",
    mastery_insight:
      "🔥 Real Understanding of Quality:\nQuality is NOT just testing; it is built into the product from the beginning. \n\n👉 The Quality Dilemma: Balance 'Good Enough' vs 'Perfect'. Perfect is too expensive; good enough is where you meet all requirements safely and efficiently.",
    summary:
      "🔹 High-Yield Summary: Testing levels build up from smallest (Unit) to largest (System). Quality is proactive, not reactive.",
  },
  {
    title: "12. Project Management and Ethics",
    topic: "PM and Ethics",
    overview:
      "Successful projects require managing people and processes while adhering to ethical standards like honesty and responsibility.",
    subtopics: [
      ["Four P's", "People (The Team), Product (The Software), Process (The Model), Project (The Plan)."],
      ["Team Toxicity", "Bad communication and blame culture lead to failure."],
      ["Ethics", "SE Code of Ethics: Public interest, client interest, and professional competence."],
    ],
    example:
      "🔹 Ethical Dilemma:\nA manager asks you to hide a security bug to meet a deadline. Ethical choice: Report the bug because 'Public Interest' comes first.",
    exam_tip:
      "👉 Project failure is most often a 'People' problem, not a 'Code' problem. Ethics = Integrity + Responsibility.",
    common_trap:
      "Do not underestimate the 'People' factor. The Four P's list People FIRST for a reason.",
    mastery_insight:
      "🔥 Project Mastery:\nMost software failures come from People problems, not technical ones. Team Toxicity (poor communication, lack of trust) is the silent killer of projects. \n\n👉 Ethics Keyword: Always prioritize 'Public Interest' over 'Client/Manager Pride'.",
    summary:
      "🔹 High-Yield Summary: Managing the Four P's + Strong Ethics = Successful, professional software engineering.",
  },
  {
    title: "13. Final Master Strategy",
    topic: "Exam Mastery",
    overview:
      "The blueprint for moving from a Pass to a Distinction. This is how you should structure every long-form answer in the MIT 817 exam.",
    subtopics: [
      ["Step 1: The Core Structure", "Every answer must have: Definition → Explanation → Real-World Example → Diagram (if possible)."],
      ["Step 2: High-Yield Topics", "Focus 80% of your energy on: RE, Process Models, UML, Architecture, Agile, and Quality."],
      ["Step 3: The Example Rule", "Never list a concept without an example. It's the difference between a Pass and a Distinction."],
    ],
    example:
      "🔹 Distinction Checklist:\n✔ Did I define the term?\n✔ Did I explain 'WHY' it matters?\n✔ Did I link it to the Banking/ATM example?\n✔ Did I mention the lifecycle phase?",
    mastery_insight:
      "🔥 Pass → Distinction Strategy:\nThe exam repeats every year. If you can provide a Definition + Explanation + Example + Diagram for the 12 modules above, you are in the top 5% of candidates.",
    exam_tip:
      "👉 High-stakes subjects like RE and Architecture scoring depend on your ability to show deep thinking, not just memorization.",
    common_trap:
      "Do not list bullet points without explanation. The examiner needs to see you UNDERSTAND the 'why', not just the 'what'.",
    summary:
      "🔹 High-Yield Summary: Pass = Knowing the definitions. Distinction = Explaining the 'how' and 'why' with concrete examples.",
  },
];
export const flashcards = [
  // FOUNDATIONS
  {
    topic: "Foundations",
    front: "What is software engineering?",
    back: "An engineering discipline concerned with all aspects of software production, from specification to maintenance.",
  },
  {
    topic: "Foundations",
    front: "What was the 'software crisis' of the 1960s?",
    back: "The difficulty of building large systems that were reliable, on time, and within budget, leading to the birth of software engineering.",
  },
  {
    topic: "Foundations",
    front: "How is the nature of software described compared to hardware?",
    back: "Software is abstract and intangible; it does not wear out like hardware but deteriorates as change accumulates and increases complexity.",
  },
  {
    topic: "Foundations",
    front: "What defines professional software?",
    back: "Software intended for use by someone other than its developer, usually built by teams and maintained over a long lifetime.",
  },
  {
    topic: "Foundations",
    front: "What is a software process?",
    back: "A structured set of activities (specification, development, validation, and evolution) needed to develop and evolve software.",
  },
  {
    topic: "Foundations",
    front: "What are the common framework activities in a software process?",
    back: "Generic activities such as communication, planning, modeling, construction, and deployment.",
  },
  {
    topic: "Foundations",
    front: "What are the essential attributes of high-quality software?",
    back: "Maintainability (easy to change), dependability/security, efficiency (no wasteful resource use), and acceptability/usability.",
  },
  {
    topic: "Foundations",
    front: "What is software evolution?",
    back: "The continuous process of changing and adapting software after it has been deployed to meet new requirements.",
  },

  // SOFTWARE PRODUCTS
  {
    topic: "Software Products",
    front: "What is the difference between generic and custom software products?",
    back: "Generic products are built for a broad market (e.g., Excel), while custom products are developed specifically for a single client (e.g., an airline's booking system).",
  },
  {
    topic: "Software Products",
    front: "What drives project-based software engineering?",
    back: "It is driven by specific customer requirements and often developed under a legal contract.",
  },
  {
    topic: "Software Products",
    front: "How does product software engineering differ from project-based work?",
    back: "Product engineering is driven by a business opportunity and a planned roadmap rather than a specific customer contract.",
  },
  {
    topic: "Software Products",
    front: "What is a product vision statement?",
    back: "A simple, clear statement that defines the essence and goal of the product being developed.",
  },
  {
    topic: "Software Products",
    front: "What is a software platform?",
    back: "A product that provides core functionality on which other developers can build independent applications.",
  },
  {
    topic: "Software Products",
    front: "What does the term 'feature creep' mean?",
    back: "The tendency to add unplanned features to a product without assessing their general usefulness or impact on complexity.",
  },
  {
    topic: "Software Products",
    front: "Why is rapid delivery critical for software products?",
    back: "It allows a company to capture market opportunities early and gain vital user feedback before competitors.",
  },
  {
    topic: "Software Products",
    front: "What is the primary role of a Product Manager?",
    back: "To own the product's vision, prioritize features, and bridge the gap between business needs and technical development.",
  },
  {
    topic: "Software Products",
    front: "What is prototyping in product development?",
    back: "Creating an early, simplified version of a system to explore ideas or clarify requirements with users.",
  },

  // AGILE
  {
    topic: "Agile",
    front: "What is the core definition of Agility in software?",
    back: "The ability to respond quickly and effectively to change while still delivering useful software to the user.",
  },
  {
    topic: "Agile",
    front: "What are the four key values of the Agile Manifesto?",
    back: "1. Individuals and interactions over processes/tools. 2. Working software over documentation. 3. Customer collaboration over contracts. 4. Responding to change over following a plan.",
  },
  {
    topic: "Agile",
    front: "What is the principle of incremental delivery in Agile?",
    back: "Breaking a large project into small, usable increments that are delivered frequently (every few weeks) rather than one final release.",
  },
  {
    topic: "Agile",
    front: "In what environments is Agile development most suitable?",
    back: "Environments with rapidly changing requirements, high uncertainty, and easy access to stakeholder feedback.",
  },
  {
    topic: "Agile",
    front: "What is a major limitation or challenge of using Agile?",
    back: "It is difficult to scale for very large, distributed teams or in highly regulated environments requiring extensive formal documentation.",
  },
  {
    topic: "Agile",
    front: "What type of team structure does Agile promote?",
    back: "Self-organizing, cross-functional teams where members share responsibility for the outcome.",
  },

  // SCRUM AND XP
  {
    topic: "Scrum & XP",
    front: "What is a Product Backlog?",
    back: "An ordered, evolving list of everything that might be needed in the product, serving as the single source of requirements.",
  },
  {
    topic: "Scrum & XP",
    front: "What is a 'Sprint' in the Scrum framework?",
    back: "A fixed-length time box (usually 2-4 weeks) during which the team creates a potentially releasable product increment.",
  },
  {
    topic: "Scrum & XP",
    front: "What is the purpose of the 'Daily Scrum' meeting?",
    back: "A 15-minute time-boxed event for the developers to synchronize activities and plan for the next 24 hours.",
  },
  {
    topic: "Scrum & XP",
    front: "What defines an 'Increment' in Scrum?",
    back: "A concrete stepping stone toward the Product Goal; it must be in usable condition at the end of a Sprint.",
  },
  {
    topic: "Scrum & XP",
    front: "What is Extreme Programming (XP)?",
    back: "An agile method focusing on technical excellence, using practices like pair programming and test-driven development.",
  },
  {
    topic: "Scrum & XP",
    front: "What are the five core values of Extreme Programming?",
    back: "Communication, Simplicity, Feedback, Courage, and Respect.",
  },
  {
    topic: "Scrum & XP",
    front: "What is Acceptance Testing?",
    back: "Testing used to confirm that the delivered functionality satisfies the business requirements and user needs.",
  },
  {
    topic: "Scrum & XP",
    front: "What is meant by 'person-hours' in effort estimation?",
    back: "A unit of measure representing the total amount of effort required to complete a task if one person worked on it.",
  },
  {
    topic: "Scrum & XP",
    front: "What is Pair Programming?",
    back: "A practice where two developers work together at one workstation, one writing code while the other reviews it in real-time.",
  },

  // FEATURES, STORIES, SCENARIOS
  {
    topic: "Features / Stories",
    front: "What is a 'Feature' in software design?",
    back: "A coherent set of functionality that provides value to a user and can be implemented independently.",
  },
  {
    topic: "Features / Stories",
    front: "What is a 'Scenario' and how is it used?",
    back: "A narrative description of how a user interacts with a system to achieve a specific goal; used to explore requirements.",
  },
  {
    topic: "Features / Stories",
    front: "What is a 'User Story'?",
    back: "A short, simple description of a requirement told from the perspective of the user (e.g., 'As a user, I want...').",
  },
  {
    topic: "Features / Stories",
    front: "What is a 'Persona' and why are they created?",
    back: "A fictional character representing a typical user type, created to help designers empathize with user needs and context.",
  },
  {
    topic: "Features / Stories",
    front: "What three qualities characterize a good feature?",
    back: "Independence (can be implemented alone), Coherence (logical unity), and Relevance (valuable to users).",
  },
  {
    topic: "Features / Stories",
    front: "What are the four areas of knowledge required for feature design?",
    back: "User knowledge, Domain knowledge (industry rules), Product knowledge, and Technology knowledge.",
  },
  {
    topic: "Features / Stories",
    front: "What is a key principle of effective User Interface (UI) design?",
    back: "Simplicity: avoiding unnecessary complexity and keeping the interaction intuitive for the user.",
  },

  // PROCESS MODELS
  {
    topic: "Process Models",
    front: "What is the 'Waterfall' process model?",
    back: "A linear and sequential model where each phase (requirements, design, etc.) must be completed before the next begins.",
  },
  {
    topic: "Process Models",
    front: "What is the 'Incremental' process model?",
    back: "A model where the software is developed and delivered in small, usable parts over time.",
  },
  {
    topic: "Process Models",
    front: "How does the 'Spiral' model handle software development?",
    back: "It is a risk-driven model that uses iterative cycles (spirals), combining prototyping with controlled, staged development.",
  },
  {
    topic: "Process Models",
    front: "What is the 'Prototyping' model used for?",
    back: "Creating quick, early versions of a system to help clarify requirements or explore design alternatives.",
  },
  {
    topic: "Process Models",
    front: "What is the 'Concurrent' process model?",
    back: "A model where different software activities (e.g., design and testing) can occur simultaneously in different states.",
  },
  {
    topic: "Process Models",
    front: "What are 'Formal Methods' in software engineering?",
    back: "Mathematical techniques used for the formal specification, development, and verification of software systems.",
  },
  {
    topic: "Process Models",
    front: "What is 'Component-Based Development'?",
    back: "Building software by selecting and integrating existing, reusable software components rather than writing everything from scratch.",
  },
  {
    topic: "Process Models",
    front: "What is the 'Unified Process' (UP)?",
    back: "A framework for iterative development characterized by inception, elaboration, construction, and transition phases.",
  },
  {
    topic: "Process Models",
    front: "What distinguishes 'Prescriptive' models from 'Evolutionary' models?",
    back: "Prescriptive models define a strict, planned structure; Evolutionary models focus on developing the system through repeated cycles of change.",
  },
  {
    topic: "Process Models",
    front: "What is a major limitation of the Waterfall model?",
    back: "Inflexibility: it is very difficult and expensive to change requirements once the process has started.",
  },
  {
    topic: "Process Models",
    front: "What is the primary advantage of the Spiral model?",
    back: "Excellent risk management through repeated investigation and prototyping at every stage.",
  },

  // REQUIREMENTS ENGINEERING
  {
    topic: "Requirements Engineering",
    front: "What is Requirements Engineering (RE)?",
    back: "The multidisciplinary process of discovering, analyzing, documenting, validating, and managing software requirements.",
  },
  {
    topic: "Requirements Engineering",
    front: "Who is considered a 'Stakeholder' in a software project?",
    back: "Any individual or group who has an interest in the system, or who is affected by its development or deployment.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is 'Requirements Elicitation'?",
    back: "The activity of gathering requirements through interviews, workshops, observation, and research.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is 'Requirements Validation'?",
    back: "Checking the requirements document to ensure it is accurate, complete, consistent, and feasible.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is 'Requirements Negotiation'?",
    back: "The process of resolving conflicts between different stakeholders to reach an agreed-upon set of requirements.",
  },
  {
    topic: "Requirements Engineering",
    front: "What are 'Functional' vs. 'Non-functional' requirements?",
    back: "Functional requirements define what the system must do (services); Non-functional requirements define constraints or quality attributes (e.g., security, speed).",
  },
  {
    topic: "Requirements Engineering",
    front: "What is a 'Domain' requirement?",
    back: "A requirement derived from the specific application area (e.g., banking regulations) rather than a user's specific need.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is a Software Requirements Specification (SRS)?",
    back: "A formal document that lists all the requirements for a software system and describes how it should perform.",
  },
  {
    topic: "Requirements Engineering",
    front: "What are common 'Work Products' in Requirements Engineering?",
    back: "Standard outputs like the SRS document, use cases, scenarios, requirement models, and meeting records.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is the main goal of Requirements Validation?",
    back: "To ensure the team is going to build 'the right system' that actually satisfies the customer's needs.",
  },

  // MODELING AND UML
  {
    topic: "Modeling and UML",
    front: "What is UML (Unified Modeling Language)?",
    back: "A standardized set of static and dynamic diagrams used to visualize and communicate software design.",
  },
  {
    topic: "Modeling and UML",
    front: "What is a 'Class Diagram'?",
    back: "A static UML diagram showing classes, their attributes, operations, and relationships to other classes.",
  },
  {
    topic: "Modeling and UML",
    front: "What is an 'Activity Diagram'?",
    back: "A UML diagram representing the flow of activities or work, showing logic, branching, and parallelism.",
  },
  {
    topic: "Modeling and UML",
    front: "What is a 'State Diagram'?",
    back: "A UML diagram showing the lifecycle of an object as it moves through various states triggered by events.",
  },
  {
    topic: "Modeling and UML",
    front: "What is 'Scenario-Based Modeling'?",
    back: "An analysis strategy focused on use cases and narrative descriptions of user-system interactions.",
  },
  {
    topic: "Modeling and UML",
    front: "What is 'Flow-Oriented Modeling'?",
    back: "Modeling how data objects move through a system and are transformed by processing functions.",
  },
  {
    topic: "Modeling and UML",
    front: "What is a 'Behavioral Model'?",
    back: "A model that describes how the system reacts to external stimuli or events over time.",
  },
  {
    topic: "Modeling and UML",
    front: "What is a 'Structural Model'?",
    back: "A model highlighting the static organization and components of a system.",
  },
  {
    topic: "Modeling and UML",
    front: "Why is modeling critical for large-scale software engineering?",
    back: "It abstracts complexity, improves communication among stakeholders, and provides a blueprint for construction.",
  },

  // DESIGN AND ARCHITECTURE
  {
    topic: "Design & Architecture",
    front: "What is Software Architecture?",
    back: "The high-level fundamental organization of a system, defining its components and their relationships.",
  },
  {
    topic: "Design & Architecture",
    front: "What is a 'Layered' architectural style?",
    back: "Organizing functionality into discrete layers where each layer provides services to the one above it.",
  },
  {
    topic: "Design & Architecture",
    front: "What is 'Pipe-and-Filter' architecture?",
    back: "An architecture where data flows through a sequence of processing components (filters) via connectors (pipes).",
  },
  {
    topic: "Design & Architecture",
    front: "What is the concept of 'Abstraction' in design?",
    back: "Hiding unnecessary implementation details to focus on a component's essential characteristics and purpose.",
  },
  {
    topic: "Design & Architecture",
    front: "What is 'Modularity' and why is it beneficial?",
    back: "Dividing software into independent, manageable modules to improve maintainability and allow parallel development.",
  },
  {
    topic: "Design & Architecture",
    front: "What is 'Separation of Concerns'?",
    back: "A design principle for partitioning a program so that each section addresses a separate concern or interest.",
  },
  {
    topic: "Design & Architecture",
    front: "What is 'Information Hiding'?",
    back: "Concealing internal design decisions or data structures behind stable interfaces to minimize the impact of changes.",
  },
  {
    topic: "Design & Architecture",
    front: "What is 'Refactoring'?",
    back: "The process of reorganizing internal code to improve its structure without changing its external behavior.",
  },
  {
    topic: "Design & Architecture",
    front: "What is a 'Design Pattern'?",
    back: "A proven, reusable solution to a commonly occurring problem within a given context in software design.",
  },

  // CLOUD AND MODERN ARCHITECTURE
  {
    topic: "Cloud & Microservices",
    front: "What defines 'Cloud-Based' software?",
    back: "Software applications delivered to users over the internet from remote servers and infrastructure.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is a major data security risk in SaaS (Software as a Service)?",
    back: "Information leakage: the possibility of data from one organization being accessed by another in a multi-tenant system.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What distinguishes 'Multi-tenant' from 'Multi-instance' cloud architecture?",
    back: "Multi-tenant: all customers share one system instance. Multi-instance: each customer has a separate copy of the application.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Microservices Architecture'?",
    back: "Designing a system as a collection of small, independent services that communicate via lightweight APIs.",
  },

  // QUALITY AND TESTING
  {
    topic: "Quality & Testing",
    front: "What is Software Quality?",
    back: "The degree to which a system meets its specified requirements and satisfies the customer's expectations.",
  },
  {
    topic: "Quality & Testing",
    front: "What are the four components of the 'Cost of Quality'?",
    back: "Prevention costs, Appraisal (evaluation) costs, Internal failure costs, and External failure costs.",
  },
  {
    topic: "Quality & Testing",
    front: "What is Software Quality Assurance (SQA)?",
    back: "A planned and systematic pattern of actions required to provide confidence that the software will conform to established standards.",
  },
  {
    topic: "Quality & Testing",
    front: "What is the difference between 'Verification' and 'Validation'?",
    back: "Verification asks 'Are we building the product right?' (process/specs). Validation asks 'Are we building the right product?' (user needs).",
  },
  {
    topic: "Quality & Testing",
    front: "What happens in 'Integration Testing'?",
    back: "Individual software modules are combined and tested as a group to ensure they interact correctly.",
  },

  // DEVOPS AND ETHICS
  {
    topic: "DevOps & Ethics",
    front: "What is DevOps?",
    back: "A set of practices that combines software development and IT operations to shorten the development lifecycle and provide continuous delivery.",
  },
  {
    topic: "DevOps & Ethics",
    front: "What is the role of Source Code Management?",
    back: "Using a tracking system (like Git) to manage versions, branching, merging, and collaboration on the codebase.",
  },
  {
    topic: "DevOps & Ethics",
    front: "What are the four 'Ps' of software project management?",
    back: "People, Product, Process, and Project.",
  },
  {
    topic: "DevOps & Ethics",
    front: "What is a core ethical principle for software engineers?",
    back: "Acting with integrity, competence, and taking responsibility for work product safety and security.",
  },

  // --- NEW ADVANCED FLASHCARDS ---

  // DESIGN PATTERNS (GoF)
  {
    topic: "Design Patterns",
    front: "What is the 'Singleton' pattern?",
    back: "A creational pattern that ensures a class has only one instance and provides a global point of access to it.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Factory Method' pattern?",
    back: "A creational pattern that defines an interface for creating an object, but lets subclasses decide which class to instantiate.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Observer' pattern?",
    back: "A behavioral pattern where an object (subject) maintains a list of dependents (observers) and notifies them of state changes.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Strategy' pattern?",
    back: "A behavioral pattern that defines a family of algorithms, encapsulates each one, and makes them interchangeable at runtime.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Decorator' pattern?",
    back: "A structural pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Adapter' pattern?",
    back: "A structural pattern that allows the interface of an existing class to be used as another interface, often used to make existing classes work with others without modifying their source code.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Facade' pattern?",
    back: "A structural pattern that provides a simplified interface to a large body of code, such as a class library.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Abstract Factory' pattern?",
    back: "A creational pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Proxy' pattern?",
    back: "A structural pattern where a class represents the functionality of another class (a surrogate or placeholder).",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Command' pattern?",
    back: "A behavioral pattern that encapsulates a request as an object, thereby letting you parameterize clients with different requests.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'State' pattern?",
    back: "A behavioral pattern that allows an object to alter its behavior when its internal state changes; the object will appear to change its class.",
  },

  // UML NUANCES
  {
    topic: "UML & Modeling",
    front: "What is 'Generalization' in UML?",
    back: "A relationship between a more general classifier (superclass) and a more specific classifier (subclass); essentially 'is-a' inheritance.",
  },
  {
    topic: "UML & Modeling",
    front: "What is 'Aggregation' in UML?",
    back: "A 'part-whole' relationship where the part can exist independently of the whole (empty diamond).",
  },
  {
    topic: "UML & Modeling",
    front: "What is 'Composition' in UML?",
    back: "A strong 'part-whole' relationship where the part cannot exist without the whole (filled diamond).",
  },
  {
    topic: "UML & Modeling",
    front: "What is a 'Multiplicity' indicator in UML?",
    back: "A notation (e.g., 0..1, 1..*) that specifies how many instances of one class can be associated with one instance of another class.",
  },
  {
    topic: "UML & Modeling",
    front: "What is a 'Stereotype' in UML?",
    back: "An extensibility mechanism that allows you to define new model elements based on existing ones (e.g., <<interface>>, <<actor>>).",
  },
  {
    topic: "UML & Modeling",
    front: "What are 'Lifelines' in a Sequence Diagram?",
    back: "Vertical dashed lines representing the existence of an object or participant over a period of time.",
  },

  // MODERN DEPLOYMENT & INFRASTRUCTURE
  {
    topic: "Cloud & Microservices",
    front: "What is 'Containerization' (e.g., Docker)?",
    back: "A form of operating system virtualization where applications are bundled with their libraries and dependencies into lightweight, portable containers.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Orchestration' (e.g., Kubernetes)?",
    back: "The automated management, scaling, and deployment of containerized applications across a cluster of hosts.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Serverless Computing' (FaaS)?",
    back: "A cloud execution model where the provider manages the server allocation, and users pay only for the resources consumed by specific functions.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Infrastructure as Code' (IaC)?",
    back: "The process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is an 'API Gateway'?",
    back: "A server that acts as an entry point for all clients, routing requests to appropriate microservices and handling cross-cutting concerns like auth.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Blue-Green Deployment'?",
    back: "A release strategy that uses two identical production environments (Blue and Green) to reduce downtime and risk by swapping traffic between them.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Canary Deployment'?",
    back: "A technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users first.",
  },

  // ADVANCED TESTING & QUALITY
  {
    topic: "Quality & Testing",
    front: "What is 'Regression Testing'?",
    back: "Re-running functional and non-functional tests to ensure that previously developed and tested software still performs after a change.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Mutation Testing'?",
    back: "A method of testing where small changes (mutations) are made to the code to see if existing test cases can 'kill' (detect) the errors.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Fuzz Testing' (Fuzzing)?",
    back: "An automated software testing technique that involves providing invalid, unexpected, or random data as inputs to a computer program.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Static Analysis'?",
    back: "The analysis of computer software that is performed without actually executing programs, often used to find bugs or enforce coding standards.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Cyclomatic Complexity'?",
    back: "A quantitative measure of the number of linearly independent paths through a program's source code, used to assess testing difficulty.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Technical Debt'?",
    back: "The implied cost of additional rework caused by choosing an easy (quick) solution now instead of using a better approach that would take longer.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'ISO 25010'?",
    back: "An international standard for software quality that defines a quality model with characteristics like functional suitability, performance efficiency, and security.",
  },
  {
    topic: "Quality & Testing",
    front: "What is the difference between 'Reliability' and 'Availability'?",
    back: "Reliability is the probability of failure-free operation for a specified time; Availability is the probability that a system is up and running at any given time.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Fault Tolerance'?",
    back: "The property that enables a system to continue operating properly in the event of the failure of some of its components.",
  },

  // MAINTENANCE & REUSE
  {
    topic: "Maintenance & Process",
    front: "What is 'Corrective Maintenance'?",
    back: "Reactive modification of a software product performed after delivery to correct discovered problems.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Adaptive Maintenance'?",
    back: "Modification of a software product performed after delivery to keep it usable in a changed or changing environment.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Perfective Maintenance'?",
    back: "Modification of a software product after delivery to improve performance or maintainability (evolution).",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Preventive Maintenance'?",
    back: "Modification of a software product after delivery to detect and correct latent faults before they become effective faults.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Software Aging'?",
    back: "The phenomenon of software quality decreasing over time due to accumulating changes and lack of internal cleanup.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'COTS' (Commercial Off-The-Shelf)?",
    back: "Ready-made software products available for sale to the general public, often reused to reduce development time.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is a 'Software Product Line'?",
    back: "A set of software-intensive systems sharing a common, managed set of features that satisfy the specific needs of a particular market segment.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Test-Driven Development' (TDD)?",
    back: "A process where developers write a failing automated test case before writing the minimum code needed to pass that test.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Behavior-Driven Development' (BDD)?",
    back: "An extension of TDD that uses natural language (Given/When/Then) to describe the behavior of the software from the user's perspective.",
  },
  {
    topic: "Maintenance & Process",
    front: "What are 'Stubs' vs. 'Mocks' in testing?",
    back: "Stubs provide canned answers to calls made during the test; Mocks are pre-programmed with expectations which form a specification of the calls they are expected to receive.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Builder' pattern?",
    back: "A creational pattern that separates the construction of a complex object from its representation, allowing the same construction process to create different representations.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Decorator' pattern used for?",
    back: "Adding responsibilities to objects dynamically without subclassing.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Composite' pattern?",
    back: "A structural pattern that lets you compose objects into tree structures to represent part-whole hierarchies.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Flyweight' pattern?",
    back: "A structural pattern that uses sharing to support large numbers of fine-grained objects efficiently.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Bridge' pattern?",
    back: "A structural pattern that decouples an abstraction from its implementation so that the two can vary independently.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Template Method' pattern?",
    back: "A behavioral pattern that defines the skeleton of an algorithm in an operation, deferring some steps to subclasses.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Iterator' pattern?",
    back: "A behavioral pattern that provides a way to access the elements of an aggregate object sequentially without exposing its underlying representation.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Mediator' pattern?",
    back: "A behavioral pattern that defines an object that encapsulates how a set of objects interact, promoting loose coupling.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Memento' pattern?",
    back: "A behavioral pattern that allows capturing and externalizing an object's internal state so the object can be restored to this state later.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Visitor' pattern?",
    back: "A behavioral pattern that lets you define a new operation without changing the classes of the elements on which it operates.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Interpreter' pattern?",
    back: "A behavioral pattern that defines a grammatical representation for a language and an interpreter to interpret the grammar.",
  },
  {
    topic: "Design Patterns",
    front: "What is the 'Chain of Responsibility' pattern?",
    back: "A behavioral pattern that passes a request along a chain of handlers, where each handler decides either to process the request or pass it next.",
  },
  {
    topic: "UML & Modeling",
    front: "What is 'Realization' in UML?",
    back: "A relationship where one element (client) realizes or implements the behavior specified by another element (supplier).",
  },
  {
    topic: "UML & Modeling",
    front: "What is 'Association' in UML?",
    back: "A structural relationship that specifies that objects of one element are connected to objects of another.",
  },
  {
    topic: "UML & Modeling",
    front: "What is 'Dependency' in UML?",
    back: "A semantic relationship where a change in one element (the independent one) may affect the semantics of the other (the dependent one).",
  },
  {
    topic: "UML & Modeling",
    front: "What are 'Messages' in a Sequence Diagram?",
    back: "Arrows representing communication between lifelines, which can be synchronous, asynchronous, or return messages.",
  },
  {
    topic: "UML & Modeling",
    front: "What is a 'Package Diagram' used for?",
    back: "Grouping related elements into packages to simplify the visualization of large systems and manage dependencies.",
  },
  {
    topic: "UML & Modeling",
    front: "What is a 'Deployment Diagram' used for?",
    back: "Showing the physical deployment of artifacts on nodes (hardware or execution environments).",
  },
  {
    topic: "UML & Modeling",
    front: "What is a 'Component Diagram'?",
    back: "A diagram showing the organization and wiring of physical software components and their interfaces.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Infrastructure as Code' (IaC) benefit?",
    back: "Enables consistent, repeatable, and version-controlled infrastructure provisioning.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Multi-tenancy'?",
    back: "A software architecture where a single instance of software runs on a server and serves multiple tenants (customers).",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Service Discovery' in microservices?",
    back: "The process of automatically detecting devices and services on a network, allowing services to find each other dynamically.",
  },
  {
    topic: "Cloud & Microservices",
    front: "What is 'Load Balancing'?",
    back: "Distributing network or application traffic across multiple servers to ensure reliability and performance.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Sanity Testing'?",
    back: "A subset of regression testing used to verify that a specific bug fix or change works as expected.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Smoke Testing'?",
    back: "A set of basic tests executed on a new build to verify that the most critical functions work before further testing.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Alpha Testing'?",
    back: "Testing performed by the internal development team in a controlled environment before releasing to external users.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Beta Testing'?",
    back: "Testing performed by real users in their own environment before the final release.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Dynamic Analysis'?",
    back: "The analysis of computer software that is performed by executing programs on a real or virtual processor.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Code Coverage'?",
    back: "A measure used to describe the degree to which the source code of a program is executed when a particular test suite runs.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Resilience' in software?",
    back: "The ability of a system to recover from failures and continue to function effectively.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Software Availability'?",
    back: "The probability that a system is operational and accessible when required.",
  },
  {
    topic: "Quality & Testing",
    front: "What is 'Software Safety'?",
    back: "The property of a system that ensures it will not cause harm to people or the environment, even in the event of a failure.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Domain Engineering'?",
    back: "The process of identifying, modeling, and constructing commonalities and variabilities within a specific application domain for reuse.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Scaffolding' in testing?",
    back: "Disposable code and data created specifically to support testing, such as test drivers and stubs.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Software Reuse' main benefit?",
    back: "Improved productivity, reduced costs, and increased reliability by using proven components.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Legacy Software'?",
    back: "A system that is still critical to an organization but was developed using older technology and may be difficult to maintain.",
  },
  {
    topic: "Maintenance & Process",
    front: "What is 'Perfective Maintenance' often called?",
    back: "Evolutionary maintenance, as it involves evolving the system to meet new user requirements.",
  },
  // --- MASTERY LEVEL & EXAM STRATEGY ---
  {
    topic: "Exam Strategy",
    front: "What are the 4 essential steps for structuring any long-form exam answer?",
    back: "1. Definition → 2. Explanation (The 'WHY') → 3. Real-World Example (Banking/ATM) → 4. Diagram (if applicable).",
  },
  {
    topic: "Exam Strategy",
    front: "What is the 'Difference between Pass and Distinction' in MIT 817?",
    back: "A Pass knows definitions; a Distinction explains the 'how' and 'why' with specific, practical examples.",
  },
  {
    topic: "Foundations",
    front: "Why does software 'deteriorate' even though it does not 'wear out'?",
    back: "Because it is abstract and intangible; continuous changes to meet new needs increase its internal complexity and dependencies.",
  },
  {
    topic: "Foundations",
    front: "What are the 4 Layers of Software Engineering as a technology?",
    back: "1. Quality Focus (Mindset) → 2. Process (Framework) → 3. Methods (Technical steps) → 4. Tools (Support).",
  },
  {
    topic: "Agile",
    front: "What is the core 'Exam Gold' principle of Agile?",
    back: "Deliver → Get feedback → Improve → Repeat. It's built to embrace change, not resist it.",
  },
  {
    topic: "Agile",
    front: "When is Agile most likely to fail or be unsuitable?",
    back: "In safety-critical systems (e.g., medical, flight control) where the system must be 100% correct before any release.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is the 'Master Level' 6-step task flow for RE?",
    back: "1. Elicitation → 2. Analysis → 3. Modeling → 4. Negotiation → 5. Validation → 6. Management.",
  },
  {
    topic: "Requirements Engineering",
    front: "What is the 'Real Problem' that Requirements Engineering solves?",
    back: "The fact that stakeholders often don't know exactly what they want or they provide conflicting information.",
  },
  {
    topic: "Quality & Testing",
    front: "What is the 'Quality Dilemma' in software engineering?",
    back: "The balance between 'Good Enough' software (meeting specs safely/efficiently) and 'Perfect' software (too expensive/slow to reach).",
  },
  {
    topic: "Project Management",
    front: "What is the most common cause of software project failure?",
    back: "People problems (communication gaps, toxic culture, lack of trust), rather than purely technical coding issues.",
  },
];
export const quizzes = [
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
    options: [
      "Software engineering",
      "Framework activities",
      "Nature of software",
      "Software crisis",
    ],
    answer: "A",
    explanation:
      "The correct term is Software engineering because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "What best describes Software crisis?",
    options: [
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
      "Maintainability, dependability/security, efficiency, and acceptability/usability.",
      "Software does not wear out physically but deteriorates because changes increase complexity.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
    ],
    answer: "D",
    explanation:
      "Software crisis is best described as: The difficulty of building large systems that were reliable, on time, and within budget.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software is abstract and intangible and is not constrained by physical manufacturing limits.",
    options: [
      "Software engineering",
      "Software process",
      "Software deterioration",
      "Nature of software",
    ],
    answer: "D",
    explanation:
      "The correct term is Nature of software because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "What best describes Professional software?",
    options: [
      "Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
      "Maintainability, dependability/security, efficiency, and acceptability/usability.",
      "Software is abstract and intangible and is not constrained by physical manufacturing limits.",
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
    ],
    answer: "A",
    explanation:
      "Professional software is best described as: Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A structured set of activities needed to specify, develop, validate, and evolve software.",
    options: [
      "Software engineering",
      "Software process",
      "Essential attributes of good software",
      "Nature of software",
    ],
    answer: "B",
    explanation:
      "The correct term is Software process because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "What best describes Framework activities?",
    options: [
      "Maintainability, dependability/security, efficiency, and acceptability/usability.",
      "Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
    ],
    answer: "D",
    explanation:
      "Framework activities is best described as: Generic process activities such as communication, planning, modeling, construction, and deployment.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Maintainability, dependability/security, efficiency, and acceptability/usability.",
    options: [
      "Software crisis",
      "Software process",
      "Professional software",
      "Essential attributes of good software",
    ],
    answer: "D",
    explanation:
      "The correct term is Essential attributes of good software because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "What best describes Software deterioration?",
    options: [
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "Software is abstract and intangible and is not constrained by physical manufacturing limits.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
      "Software does not wear out physically but deteriorates because changes increase complexity.",
    ],
    answer: "D",
    explanation:
      "Software deterioration is best described as: Software does not wear out physically but deteriorates because changes increase complexity.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software products built for a broad market and many customers.",
    options: [
      "Product vision",
      "Generic software",
      "Custom software",
      "Platform",
    ],
    answer: "B",
    explanation:
      "The correct term is Generic software because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "What best describes Custom software?",
    options: [
      "Adding features in response to requests without checking general usefulness or better alternatives.",
      "Software products built for a broad market and many customers.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
      "Software developed for a specific customer or organization.",
    ],
    answer: "D",
    explanation:
      "Custom software is best described as: Software developed for a specific customer or organization.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software driven by customer requirements and developed under contract or dedicated project conditions.",
    options: [
      "Product software engineering",
      "Rapid delivery",
      "Platform",
      "Project-based software",
    ],
    answer: "D",
    explanation:
      "The correct term is Project-based software because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "What best describes Product software engineering?",
    options: [
      "A software product that includes functionality on which other applications can be built.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
      "A simple statement that defines the essence of the product to be developed.",
      "Software products built for a broad market and many customers.",
    ],
    answer: "B",
    explanation:
      "Product software engineering is best described as: Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A simple statement that defines the essence of the product to be developed.",
    options: [
      "Product software engineering",
      "Feature creep",
      "Product vision",
      "Custom software",
    ],
    answer: "C",
    explanation:
      "The correct term is Product vision because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "What best describes Platform?",
    options: [
      "A simple statement that defines the essence of the product to be developed.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
      "A software product that includes functionality on which other applications can be built.",
      "Software products built for a broad market and many customers.",
    ],
    answer: "C",
    explanation:
      "Platform is best described as: A software product that includes functionality on which other applications can be built.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Adding features in response to requests without checking general usefulness or better alternatives.",
    options: [
      "Generic software",
      "Product software engineering",
      "Project-based software",
      "Feature creep",
    ],
    answer: "D",
    explanation:
      "The correct term is Feature creep because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "What best describes Rapid delivery?",
    options: [
      "A simple statement that defines the essence of the product to be developed.",
      "A software product that includes functionality on which other applications can be built.",
      "Adding features in response to requests without checking general usefulness or better alternatives.",
      "Fast release of software products to capture market opportunity and user feedback.",
    ],
    answer: "D",
    explanation:
      "Rapid delivery is best described as: Fast release of software products to capture market opportunity and user feedback.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Ability to respond quickly and effectively to change while still delivering useful software.",
    options: [
      "Incremental delivery",
      "Agile limitation",
      "Agility",
      "Working software over documentation",
    ],
    answer: "C",
    explanation:
      "The correct term is Agility because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "What best describes Agile manifesto?",
    options: [
      "Agile prefers adapting plans and software when needs change.",
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Software is delivered in small usable increments.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
    ],
    answer: "B",
    explanation:
      "Agile manifesto is best described as: A call to uncover better ways of developing software by doing it and helping others do it.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile values working software more than comprehensive documentation, though documentation still has a role.",
    options: [
      "Agile limitation",
      "Working software over documentation",
      "Incremental delivery",
      "Agile suitability",
    ],
    answer: "B",
    explanation:
      "The correct term is Working software over documentation because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "What best describes Customer collaboration?",
    options: [
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
      "Software is delivered in small usable increments.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
    ],
    answer: "D",
    explanation:
      "Customer collaboration is best described as: Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile prefers adapting plans and software when needs change.",
    options: [
      "Agile limitation",
      "Responding to change",
      "Incremental delivery",
      "Working software over documentation",
    ],
    answer: "B",
    explanation:
      "The correct term is Responding to change because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "What best describes Incremental delivery?",
    options: [
      "Software is delivered in small usable increments.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
    ],
    answer: "A",
    explanation:
      "Incremental delivery is best described as: Software is delivered in small usable increments.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile fits environments with changing requirements and close customer feedback.",
    options: [
      "Agile suitability",
      "Customer collaboration",
      "Agility",
      "Responding to change",
    ],
    answer: "A",
    explanation:
      "The correct term is Agile suitability because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "What best describes Agile limitation?",
    options: [
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
      "Agile fits environments with changing requirements and close customer feedback.",
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Agile prefers adapting plans and software when needs change.",
    ],
    answer: "A",
    explanation:
      "Agile limitation is best described as: Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Prioritized list of desired product work items.",
    options: ["Acceptance testing", "XP values", "Product backlog", "Sprint"],
    answer: "C",
    explanation:
      "The correct term is Product backlog because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question: "What best describes Sprint?",
    options: [
      "Short daily meeting for team synchronization.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
      "Prioritized list of desired product work items.",
      "A potentially usable version of the product produced at the end of an iteration or sprint.",
    ],
    answer: "B",
    explanation:
      "Sprint is best described as: A fixed time-box in Scrum during which selected backlog items are implemented.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A potentially usable version of the product produced at the end of an iteration or sprint.",
    options: [
      "Product backlog",
      "Increment",
      "Daily scrum",
      "Acceptance testing",
    ],
    answer: "B",
    explanation:
      "The correct term is Increment because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question: "What best describes Daily scrum?",
    options: [
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
      "Short daily meeting for team synchronization.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
      "A potentially usable version of the product produced at the end of an iteration or sprint.",
    ],
    answer: "B",
    explanation:
      "Daily scrum is best described as: Short daily meeting for team synchronization.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A measure of effort estimating how long one person would take to implement a backlog item.",
    options: [
      "Person-hours",
      "Product backlog",
      "Acceptance testing",
      "Daily scrum",
    ],
    answer: "A",
    explanation:
      "The correct term is Person-hours because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question: "What best describes Extreme Programming?",
    options: [
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
      "Short daily meeting for team synchronization.",
      "A potentially usable version of the product produced at the end of an iteration or sprint.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
    ],
    answer: "A",
    explanation:
      "Extreme Programming is best described as: An agile approach that emphasizes disciplined coding practices and fast feedback.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Communication, simplicity, feedback, courage, and respect.",
    options: ["Person-hours", "Sprint", "Extreme Programming", "XP values"],
    answer: "D",
    explanation:
      "The correct term is XP values because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question: "What best describes Acceptance testing?",
    options: [
      "Short daily meeting for team synchronization.",
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
      "Prioritized list of desired product work items.",
    ],
    answer: "B",
    explanation:
      "Acceptance testing is best described as: Testing used to confirm that delivered functionality satisfies agreed needs.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An element that implements a coherent set of functionality.",
    options: [
      "Feature qualities",
      "Feature",
      "Feature design knowledge",
      "User interface simplicity",
    ],
    answer: "B",
    explanation:
      "The correct term is Feature because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "What best describes Scenario?",
    options: [
      "A short user-centered requirement expressed in simple terms.",
      "Interfaces should not be unnecessarily complex.",
      "An element that implements a coherent set of functionality.",
      "A narrative describing how a user or group of users might use a system.",
    ],
    answer: "D",
    explanation:
      "Scenario is best described as: A narrative describing how a user or group of users might use a system.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A short user-centered requirement expressed in simple terms.",
    options: [
      "Feature qualities",
      "Story",
      "Feature design knowledge",
      "Feature",
    ],
    answer: "B",
    explanation:
      "The correct term is Story because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "What best describes Persona?",
    options: [
      "A representation of a typical user used to guide design.",
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "A short user-centered requirement expressed in simple terms.",
      "An element that implements a coherent set of functionality.",
    ],
    answer: "A",
    explanation:
      "Persona is best described as: A representation of a typical user used to guide design.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Useful features are independent, coherent, and relevant.",
    options: [
      "Scenario",
      "Feature qualities",
      "Feature design knowledge",
      "Persona",
    ],
    answer: "B",
    explanation:
      "The correct term is Feature qualities because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "What best describes User interface simplicity?",
    options: [
      "An element that implements a coherent set of functionality.",
      "A narrative describing how a user or group of users might use a system.",
      "Useful features are independent, coherent, and relevant.",
      "Interfaces should not be unnecessarily complex.",
    ],
    answer: "D",
    explanation:
      "User interface simplicity is best described as: Interfaces should not be unnecessarily complex.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
    options: ["Story", "Scenario", "Feature design knowledge", "Persona"],
    answer: "C",
    explanation:
      "The correct term is Feature design knowledge because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Waterfall model?",
    options: [
      "A linear process model in which activities are performed largely in sequence.",
      "A model that allows software activities to occur in parallel and move through different states.",
      "Process models that define a planned, structured way of developing software.",
      "Modification of software after delivery to meet changing needs or contexts.",
    ],
    answer: "A",
    explanation:
      "Waterfall model is best described as: A linear process model in which activities are performed largely in sequence.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model that delivers the system in a series of increments.",
    options: [
      "Incremental model",
      "Prescriptive models",
      "Evolutionary models",
      "Component-based development",
    ],
    answer: "A",
    explanation:
      "The correct term is Incremental model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Prototyping model?",
    options: [
      "A risk-driven iterative model that combines prototyping with controlled stages.",
      "Building software by selecting, adapting, and integrating reusable components.",
      "A model in which an early working version is built to clarify needs and ideas.",
      "A linear process model in which activities are performed largely in sequence.",
    ],
    answer: "C",
    explanation:
      "Prototyping model is best described as: A model in which an early working version is built to clarify needs and ideas.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A risk-driven iterative model that combines prototyping with controlled stages.",
    options: [
      "Unified Process",
      "Formal methods model",
      "Spiral model",
      "Concurrent model",
    ],
    answer: "C",
    explanation:
      "The correct term is Spiral model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Concurrent model?",
    options: [
      "Process models that evolve the software through repeated cycles and feedback.",
      "An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
      "A model that uses mathematically based specification and verification.",
      "A model that allows software activities to occur in parallel and move through different states.",
    ],
    answer: "D",
    explanation:
      "Concurrent model is best described as: A model that allows software activities to occur in parallel and move through different states.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Building software by selecting, adapting, and integrating reusable components.",
    options: [
      "Component-based development",
      "Model selection",
      "Incremental model",
      "Waterfall model",
    ],
    answer: "A",
    explanation:
      "The correct term is Component-based development because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Formal methods model?",
    options: [
      "Process models that evolve the software through repeated cycles and feedback.",
      "A risk-driven iterative model that combines prototyping with controlled stages.",
      "A model that uses mathematically based specification and verification.",
      "A model that allows software activities to occur in parallel and move through different states.",
    ],
    answer: "C",
    explanation:
      "Formal methods model is best described as: A model that uses mathematically based specification and verification.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
    options: [
      "Software evolution",
      "Unified Process",
      "Model selection",
      "Component-based development",
    ],
    answer: "B",
    explanation:
      "The correct term is Unified Process because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Prescriptive models?",
    options: [
      "A model in which an early working version is built to clarify needs and ideas.",
      "Process models that define a planned, structured way of developing software.",
      "An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
      "Modification of software after delivery to meet changing needs or contexts.",
    ],
    answer: "B",
    explanation:
      "Prescriptive models is best described as: Process models that define a planned, structured way of developing software.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Process models that evolve the software through repeated cycles and feedback.",
    options: [
      "Model selection",
      "Evolutionary models",
      "Formal methods model",
      "Incremental model",
    ],
    answer: "B",
    explanation:
      "The correct term is Evolutionary models because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question: "What best describes Software evolution?",
    options: [
      "Process models that evolve the software through repeated cycles and feedback.",
      "Modification of software after delivery to meet changing needs or contexts.",
      "A model that uses mathematically based specification and verification.",
      "A model that delivers the system in a series of increments.",
    ],
    answer: "B",
    explanation:
      "Software evolution is best described as: Modification of software after delivery to meet changing needs or contexts.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
    options: [
      "Model selection",
      "Evolutionary models",
      "Incremental model",
      "Concurrent model",
    ],
    answer: "A",
    explanation:
      "The correct term is Model selection because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes Requirements engineering?",
    options: [
      "Gathering requirements from stakeholders and other sources.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "Checking that requirements are correct, complete, consistent, realistic, and testable.",
      "A constraint or quality attribute such as performance, reliability, or security.",
    ],
    answer: "B",
    explanation:
      "Requirements engineering is best described as: The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Anyone who affects or is affected by the system.",
    options: [
      "Requirements engineering",
      "Stakeholder",
      "System requirement",
      "User requirement",
    ],
    answer: "B",
    explanation:
      "The correct term is Stakeholder because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes Elicitation?",
    options: [
      "Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
      "Gathering requirements from stakeholders and other sources.",
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
    ],
    answer: "B",
    explanation:
      "Elicitation is best described as: Gathering requirements from stakeholders and other sources.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Organizing, refining, and modeling gathered requirements.",
    options: [
      "Analysis",
      "Elicitation",
      "Non-functional requirement",
      "Stakeholder",
    ],
    answer: "A",
    explanation:
      "The correct term is Analysis because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes Negotiation?",
    options: [
      "Gathering requirements from stakeholders and other sources.",
      "Anyone who affects or is affected by the system.",
      "Software Requirements Specification document.",
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
    ],
    answer: "D",
    explanation:
      "Negotiation is best described as: Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Checking that requirements are correct, complete, consistent, realistic, and testable.",
    options: [
      "Negotiation",
      "Validation",
      "Domain requirement",
      "Non-functional requirement",
    ],
    answer: "B",
    explanation:
      "The correct term is Validation because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes Requirements management?",
    options: [
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "Checking that requirements are correct, complete, consistent, realistic, and testable.",
      "Controlling requirement changes and maintaining traceability over time.",
      "Detailed, precise description of system functions and constraints for developers.",
    ],
    answer: "C",
    explanation:
      "Requirements management is best described as: Controlling requirement changes and maintaining traceability over time.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A statement of a service or function the system must provide.",
    options: [
      "SRS",
      "Validation",
      "User requirement",
      "Functional requirement",
    ],
    answer: "D",
    explanation:
      "The correct term is Functional requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes Non-functional requirement?",
    options: [
      "Controlling requirement changes and maintaining traceability over time.",
      "Anyone who affects or is affected by the system.",
      "A constraint or quality attribute such as performance, reliability, or security.",
      "Software Requirements Specification document.",
    ],
    answer: "C",
    explanation:
      "Non-functional requirement is best described as: A constraint or quality attribute such as performance, reliability, or security.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A requirement that arises from the application domain.",
    options: ["Stakeholder", "Negotiation", "Analysis", "Domain requirement"],
    answer: "D",
    explanation:
      "The correct term is Domain requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes User requirement?",
    options: [
      "A constraint or quality attribute such as performance, reliability, or security.",
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "High-level statement of services and constraints understandable by users.",
      "Gathering requirements from stakeholders and other sources.",
    ],
    answer: "C",
    explanation:
      "User requirement is best described as: High-level statement of services and constraints understandable by users.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Detailed, precise description of system functions and constraints for developers.",
    options: ["System requirement", "Validation", "Analysis", "Stakeholder"],
    answer: "A",
    explanation:
      "The correct term is System requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question: "What best describes SRS?",
    options: [
      "Software Requirements Specification document.",
      "High-level statement of services and constraints understandable by users.",
      "Anyone who affects or is affected by the system.",
      "A requirement that arises from the application domain.",
    ],
    answer: "A",
    explanation:
      "SRS is best described as: Software Requirements Specification document.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
    options: [
      "Negotiation",
      "Validation",
      "Elicitation work products",
      "Requirements engineering",
    ],
    answer: "C",
    explanation:
      "The correct term is Elicitation work products because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes UML?",
    options: [
      "UML diagram showing classes and their relationships.",
      "Model showing data objects, attributes, and relationships.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "Model showing how information moves and is transformed.",
    ],
    answer: "C",
    explanation:
      "UML is best described as: Unified Modeling Language, a standard visual language for software modeling.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model based on use cases and user interactions.",
    options: [
      "Activity diagram",
      "Scenario-based model",
      "Flow-oriented model",
      "UML",
    ],
    answer: "B",
    explanation:
      "The correct term is Scenario-based model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes Data model?",
    options: [
      "Model based on use cases and user interactions.",
      "Model showing data objects, attributes, and relationships.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "Behavioral models show change over time; structural models show static organization.",
    ],
    answer: "B",
    explanation:
      "Data model is best described as: Model showing data objects, attributes, and relationships.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing analysis classes, attributes, operations, and relationships.",
    options: [
      "Data model",
      "Class-oriented model",
      "State diagram",
      "Scenario-based model",
    ],
    answer: "B",
    explanation:
      "The correct term is Class-oriented model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes Flow-oriented model?",
    options: [
      "Model showing how information moves and is transformed.",
      "Model showing data objects, attributes, and relationships.",
      "An approach that gives models a central role in development and possible code generation.",
      "Behavioral models show change over time; structural models show static organization.",
    ],
    answer: "A",
    explanation:
      "Flow-oriented model is best described as: Model showing how information moves and is transformed.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing states, events, and dynamic behavior.",
    options: [
      "Behavioral model",
      "Flow-oriented model",
      "Structural model",
      "Behavioral vs structural",
    ],
    answer: "A",
    explanation:
      "The correct term is Behavioral model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes Class diagram?",
    options: [
      "Model showing states, events, and dynamic behavior.",
      "UML diagram showing classes and their relationships.",
      "A model emphasizing static organization.",
      "Unified Modeling Language, a standard visual language for software modeling.",
    ],
    answer: "B",
    explanation:
      "Class diagram is best described as: UML diagram showing classes and their relationships.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: UML diagram showing workflow or processing sequence.",
    options: [
      "Structural model",
      "Activity diagram",
      "Data model",
      "Class diagram",
    ],
    answer: "B",
    explanation:
      "The correct term is Activity diagram because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes State diagram?",
    options: [
      "Model showing how information moves and is transformed.",
      "Model based on use cases and user interactions.",
      "UML diagram showing workflow or processing sequence.",
      "UML diagram showing states and transitions of an object or system.",
    ],
    answer: "D",
    explanation:
      "State diagram is best described as: UML diagram showing states and transitions of an object or system.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model emphasizing static organization.",
    options: [
      "Model-driven engineering",
      "Activity diagram",
      "State diagram",
      "Structural model",
    ],
    answer: "D",
    explanation:
      "The correct term is Structural model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question: "What best describes Behavioral vs structural?",
    options: [
      "Model showing how information moves and is transformed.",
      "Model showing data objects, attributes, and relationships.",
      "Model showing states, events, and dynamic behavior.",
      "Behavioral models show change over time; structural models show static organization.",
    ],
    answer: "D",
    explanation:
      "Behavioral vs structural is best described as: Behavioral models show change over time; structural models show static organization.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An approach that gives models a central role in development and possible code generation.",
    options: [
      "UML",
      "Structural model",
      "Model-driven engineering",
      "Behavioral vs structural",
    ],
    answer: "C",
    explanation:
      "The correct term is Model-driven engineering because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Software architecture?",
    options: [
      "Improving internal structure without changing observable behavior.",
      "The fundamental organization of a system, its components, relationships, and guiding principles.",
      "Design activity that defines data structures and classes.",
      "Reusable solutions to recurring design problems.",
    ],
    answer: "B",
    explanation:
      "Software architecture is best described as: The fundamental organization of a system, its components, relationships, and guiding principles.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An architecture in which system functionality is organized into layers.",
    options: [
      "Data/class design",
      "Separation of concerns",
      "Layered architecture",
      "Refactoring",
    ],
    answer: "C",
    explanation:
      "The correct term is Layered architecture because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Pipe-and-filter?",
    options: [
      "The fundamental organization of a system, its components, relationships, and guiding principles.",
      "Design activity that defines data structures and classes.",
      "An architecture in which data passes through a sequence of transformation components.",
      "Elaborating design detail in steps from abstract to concrete.",
    ],
    answer: "C",
    explanation:
      "Pipe-and-filter is best described as: An architecture in which data passes through a sequence of transformation components.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Design activity that defines data structures and classes.",
    options: [
      "Patterns",
      "Data/class design",
      "Interface design",
      "Refactoring",
    ],
    answer: "B",
    explanation:
      "The correct term is Data/class design because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Interface design?",
    options: [
      "Structuring software so different concerns are handled separately.",
      "Design activity that defines data structures and classes.",
      "Design activity that defines how users or components interact with the system.",
      "Decomposing software into manageable components.",
    ],
    answer: "C",
    explanation:
      "Interface design is best described as: Design activity that defines how users or components interact with the system.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Focusing on the essential while suppressing unnecessary detail.",
    options: [
      "Layered architecture",
      "Abstraction",
      "Software architecture",
      "Refinement",
    ],
    answer: "B",
    explanation:
      "The correct term is Abstraction because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Modularity?",
    options: [
      "Decomposing software into manageable components.",
      "Reusable solutions to recurring design problems.",
      "Design activity that defines how users or components interact with the system.",
      "Improving internal structure without changing observable behavior.",
    ],
    answer: "A",
    explanation:
      "Modularity is best described as: Decomposing software into manageable components.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Structuring software so different concerns are handled separately.",
    options: [
      "Layered architecture",
      "Patterns",
      "Refactoring",
      "Separation of concerns",
    ],
    answer: "D",
    explanation:
      "The correct term is Separation of concerns because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Information hiding?",
    options: [
      "Concealing design decisions likely to change behind stable interfaces.",
      "Design activity that defines data structures and classes.",
      "Decomposing software into manageable components.",
      "Design activity that defines how users or components interact with the system.",
    ],
    answer: "A",
    explanation:
      "Information hiding is best described as: Concealing design decisions likely to change behind stable interfaces.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Elaborating design detail in steps from abstract to concrete.",
    options: ["Refinement", "Patterns", "Modularity", "Abstraction"],
    answer: "A",
    explanation:
      "The correct term is Refinement because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question: "What best describes Refactoring?",
    options: [
      "Design activity that defines how users or components interact with the system.",
      "Improving internal structure without changing observable behavior.",
      "An architecture in which system functionality is organized into layers.",
      "Concealing design decisions likely to change behind stable interfaces.",
    ],
    answer: "B",
    explanation:
      "Refactoring is best described as: Improving internal structure without changing observable behavior.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Reusable solutions to recurring design problems.",
    options: [
      "Layered architecture",
      "Refinement",
      "Pipe-and-filter",
      "Patterns",
    ],
    answer: "D",
    explanation:
      "The correct term is Patterns because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Cloud-based software?",
    options: [
      "Software delivered over a network from remote infrastructure.",
      "Separate copies of the system and database are allocated to different users or organizations.",
      "Protection of personal or sensitive information from inappropriate access or disclosure.",
      "Organizations may hesitate to hand over sensitive data to an external provider.",
    ],
    answer: "A",
    explanation:
      "Cloud-based software is best described as: Software delivered over a network from remote infrastructure.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Data location and regulatory rules may restrict where personal data can be stored.",
    options: [
      "SaaS regulation issue",
      "Data exchange issue",
      "Microservices",
      "Safety",
    ],
    answer: "A",
    explanation:
      "The correct term is SaaS regulation issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Data transfer issue?",
    options: [
      "Property of avoiding or controlling harm-causing conditions.",
      "Data location and regulatory rules may restrict where personal data can be stored.",
      "Network speed can limit response time when software relies on heavy data transfer.",
      "Service software may use local authentication, social login, or federated authentication.",
    ],
    answer: "C",
    explanation:
      "Data transfer issue is best described as: Network speed can limit response time when software relies on heavy data transfer.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Organizations may hesitate to hand over sensitive data to an external provider.",
    options: [
      "Reliability",
      "Microservices",
      "Data security issue",
      "Data exchange issue",
    ],
    answer: "C",
    explanation:
      "The correct term is Data security issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Data exchange issue?",
    options: [
      "Organizations may hesitate to hand over sensitive data to an external provider.",
      "Cloud systems need accessible APIs when data must move between services.",
      "Service software may use local authentication, social login, or federated authentication.",
      "Network speed can limit response time when software relies on heavy data transfer.",
    ],
    answer: "B",
    explanation:
      "Data exchange issue is best described as: Cloud systems need accessible APIs when data must move between services.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Service software may use local authentication, social login, or federated authentication.",
    options: [
      "Safety",
      "Privacy",
      "Data exchange issue",
      "Authentication design",
    ],
    answer: "D",
    explanation:
      "The correct term is Authentication design because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Multi-tenant system?",
    options: [
      "An architecture based on small, independent services that collaborate.",
      "A single running system instance serves multiple customers.",
      "Data location and regulatory rules may restrict where personal data can be stored.",
      "Separate copies of the system and database are allocated to different users or organizations.",
    ],
    answer: "B",
    explanation:
      "Multi-tenant system is best described as: A single running system instance serves multiple customers.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Separate copies of the system and database are allocated to different users or organizations.",
    options: [
      "Data exchange issue",
      "SaaS regulation issue",
      "Multi-instance system",
      "Data security issue",
    ],
    answer: "C",
    explanation:
      "The correct term is Multi-instance system because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Microservices?",
    options: [
      "An architecture based on small, independent services that collaborate.",
      "Cloud systems need accessible APIs when data must move between services.",
      "Network speed can limit response time when software relies on heavy data transfer.",
      "Probability that software performs required functions without failure for a specified time.",
    ],
    answer: "A",
    explanation:
      "Microservices is best described as: An architecture based on small, independent services that collaborate.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Probability that software performs required functions without failure for a specified time.",
    options: [
      "Safety",
      "Data exchange issue",
      "Reliability",
      "Multi-tenant system",
    ],
    answer: "C",
    explanation:
      "The correct term is Reliability because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question: "What best describes Safety?",
    options: [
      "Software delivered over a network from remote infrastructure.",
      "Separate copies of the system and database are allocated to different users or organizations.",
      "Data location and regulatory rules may restrict where personal data can be stored.",
      "Property of avoiding or controlling harm-causing conditions.",
    ],
    answer: "D",
    explanation:
      "Safety is best described as: Property of avoiding or controlling harm-causing conditions.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Protection of personal or sensitive information from inappropriate access or disclosure.",
    options: [
      "Authentication design",
      "Multi-tenant system",
      "Microservices",
      "Privacy",
    ],
    answer: "D",
    explanation:
      "The correct term is Privacy because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Software quality?",
    options: [
      "Testing interactions among combined components.",
      "The degree to which software meets stated requirements and implicit expectations.",
      "Quality is supported by sound methods, good project management, quality control, and quality assurance.",
      "Verification asks whether we built the product right; validation asks whether we built the right product.",
    ],
    answer: "B",
    explanation:
      "Software quality is best described as: The degree to which software meets stated requirements and implicit expectations.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A set of product quality dimensions such as performance, features, reliability, conformance, durability, serviceability, aesthetics, and perceived quality.",
    options: [
      "Unit testing",
      "Validation testing",
      "Integration testing",
      "Garvin dimensions",
    ],
    answer: "D",
    explanation:
      "The correct term is Garvin dimensions because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Quality dilemma?",
    options: [
      "Testing interactions among combined components.",
      "Costs associated with prevention, appraisal, and internal and external failures.",
      "Pressure to release quickly and cheaply can conflict with the desire for high quality.",
      "Testing individual components or units.",
    ],
    answer: "C",
    explanation:
      "Quality dilemma is best described as: Pressure to release quickly and cheaply can conflict with the desire for high quality.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Costs associated with prevention, appraisal, and internal and external failures.",
    options: [
      "Validation testing",
      "System testing",
      "Verification and validation",
      "Cost of quality",
    ],
    answer: "D",
    explanation:
      "The correct term is Cost of quality because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Achieving quality?",
    options: [
      "Software Quality Assurance: activities that ensure processes and products conform to standards and plans.",
      "Quality is supported by sound methods, good project management, quality control, and quality assurance.",
      "Costs associated with prevention, appraisal, and internal and external failures.",
      "Testing individual components or units.",
    ],
    answer: "B",
    explanation:
      "Achieving quality is best described as: Quality is supported by sound methods, good project management, quality control, and quality assurance.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software Quality Assurance: activities that ensure processes and products conform to standards and plans.",
    options: [
      "SQA",
      "Achieving quality",
      "System testing",
      "Verification and validation",
    ],
    answer: "A",
    explanation: "The correct term is SQA because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Testing?",
    options: [
      "Execution and evaluation intended to reveal defects and build confidence in the software.",
      "Quality is supported by sound methods, good project management, quality control, and quality assurance.",
      "Software Quality Assurance: activities that ensure processes and products conform to standards and plans.",
      "Verification asks whether we built the product right; validation asks whether we built the right product.",
    ],
    answer: "A",
    explanation:
      "Testing is best described as: Execution and evaluation intended to reveal defects and build confidence in the software.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Verification asks whether we built the product right; validation asks whether we built the right product.",
    options: [
      "Unit testing",
      "Achieving quality",
      "Quality dilemma",
      "Verification and validation",
    ],
    answer: "D",
    explanation:
      "The correct term is Verification and validation because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Unit testing?",
    options: [
      "A set of product quality dimensions such as performance, features, reliability, conformance, durability, serviceability, aesthetics, and perceived quality.",
      "Testing interactions among combined components.",
      "Quality is supported by sound methods, good project management, quality control, and quality assurance.",
      "Testing individual components or units.",
    ],
    answer: "D",
    explanation:
      "Unit testing is best described as: Testing individual components or units.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing interactions among combined components.",
    options: [
      "Integration testing",
      "Garvin dimensions",
      "Software quality",
      "Verification and validation",
    ],
    answer: "A",
    explanation:
      "The correct term is Integration testing because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question: "What best describes Validation testing?",
    options: [
      "Execution and evaluation intended to reveal defects and build confidence in the software.",
      "Testing to confirm software satisfies requirements.",
      "A set of product quality dimensions such as performance, features, reliability, conformance, durability, serviceability, aesthetics, and perceived quality.",
      "Quality is supported by sound methods, good project management, quality control, and quality assurance.",
    ],
    answer: "B",
    explanation:
      "Validation testing is best described as: Testing to confirm software satisfies requirements.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing the complete integrated system.",
    options: ["Achieving quality", "SQA", "System testing", "Cost of quality"],
    answer: "C",
    explanation:
      "The correct term is System testing because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question: "What best describes DevOps?",
    options: [
      "Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
      "Repository-based control of versions, changes, branching, and merging.",
      "Integration of software development with deployment and operational support by closely connected teams.",
      "Frequent integration of code changes into a shared baseline followed by automated build/testing.",
    ],
    answer: "C",
    explanation:
      "DevOps is best described as: Integration of software development with deployment and operational support by closely connected teams.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Repository-based control of versions, changes, branching, and merging.",
    options: [
      "Coordination approaches",
      "Infrastructure as code",
      "Four Ps",
      "Source code management",
    ],
    answer: "D",
    explanation:
      "The correct term is Source code management because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question: "What best describes Continuous integration?",
    options: [
      "Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
      "Measures such as deployment frequency, failed deployment rate, and mean time to recovery.",
      "Frequent integration of code changes into a shared baseline followed by automated build/testing.",
      "People, Product, Process, and Project.",
    ],
    answer: "C",
    explanation:
      "Continuous integration is best described as: Frequent integration of code changes into a shared baseline followed by automated build/testing.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Automatic updating of the deployed version after changes pass the pipeline, especially for cloud services.",
    options: [
      "Continuous integration",
      "Team toxicity",
      "DevOps",
      "Continuous deployment",
    ],
    answer: "D",
    explanation:
      "The correct term is Continuous deployment because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question: "What best describes Infrastructure as code?",
    options: [
      "Automatic updating of the deployed version after changes pass the pipeline, especially for cloud services.",
      "Defining infrastructure in machine-readable form so it can be provisioned automatically.",
      "People, Product, Process, and Project.",
      "Repository-based control of versions, changes, branching, and merging.",
    ],
    answer: "B",
    explanation:
      "Infrastructure as code is best described as: Defining infrastructure in machine-readable form so it can be provisioned automatically.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Measures such as deployment frequency, failed deployment rate, and mean time to recovery.",
    options: [
      "DevOps metrics",
      "Continuous deployment",
      "Continuous integration",
      "Infrastructure as code",
    ],
    answer: "A",
    explanation:
      "The correct term is DevOps metrics because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question: "What best describes Four Ps?",
    options: [
      "Measures such as deployment frequency, failed deployment rate, and mean time to recovery.",
      "Frequent integration of code changes into a shared baseline followed by automated build/testing.",
      "Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
      "People, Product, Process, and Project.",
    ],
    answer: "D",
    explanation:
      "Four Ps is best described as: People, Product, Process, and Project.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A harmful team environment that reduces trust, motivation, and effectiveness.",
    options: [
      "DevOps",
      "Infrastructure as code",
      "Team toxicity",
      "Continuous deployment",
    ],
    answer: "C",
    explanation:
      "The correct term is Team toxicity because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question: "What best describes Coordination approaches?",
    options: [
      "Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
      "Integration of software development with deployment and operational support by closely connected teams.",
      "Measures such as deployment frequency, failed deployment rate, and mean time to recovery.",
      "A harmful team environment that reduces trust, motivation, and effectiveness.",
    ],
    answer: "A",
    explanation:
      "Coordination approaches is best described as: Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software professionals should act with honesty, integrity, competence, and public responsibility.",
    options: [
      "Ethical principles",
      "DevOps metrics",
      "Continuous deployment",
      "DevOps",
    ],
    answer: "A",
    explanation:
      "The correct term is Ethical principles because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question:
      "Which process model is most strongly associated with risk analysis in each cycle?",
    options: [
      "Waterfall model",
      "Spiral model",
      "Incremental model",
      "Pipe-and-filter",
    ],
    answer: "B",
    explanation:
      "The spiral model is risk-driven and revisits risk analysis in each cycle.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question:
      "Which model is most suitable when you want early usable deliveries from the system?",
    options: [
      "Incremental model",
      "Formal methods model",
      "Waterfall model",
      "State diagram",
    ],
    answer: "A",
    explanation:
      "Incremental development supports early and repeated delivery of usable software.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question:
      "Which statement best distinguishes prescriptive models from evolutionary models?",
    options: [
      "Prescriptive models reject planning",
      "Evolutionary models never use feedback",
      "Prescriptive models emphasize planned structure, while evolutionary models adapt through repeated cycles",
      "Evolutionary models are only used for hardware",
    ],
    answer: "C",
    explanation:
      "That is the central distinction highlighted in process-model questions.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question:
      "A customer asks for system speed, security, and reliability targets. These are mainly:",
    options: [
      "Domain requirements",
      "Non-functional requirements",
      "User stories",
      "Class models",
    ],
    answer: "B",
    explanation:
      "They express quality constraints rather than specific functions.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "The main purpose of requirements negotiation is to:",
    options: [
      "Generate source code",
      "Resolve conflicts among stakeholder needs",
      "Replace validation",
      "Draw deployment diagrams",
    ],
    answer: "B",
    explanation:
      "Negotiation aims at reaching an agreed and realistic set of requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question:
      "Which document gives a structured description of system services and constraints for development?",
    options: [
      "Sprint backlog",
      "Software Requirements Specification",
      "Test log",
      "Source repository",
    ],
    answer: "B",
    explanation:
      "The SRS organizes and documents requirements for the project.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question:
      "Which UML diagram is best suited to showing workflow for ATM cash withdrawal?",
    options: [
      "Class diagram",
      "Activity diagram",
      "Component diagram",
      "Package diagram",
    ],
    answer: "B",
    explanation: "Activity diagrams show control flow and workflow clearly.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Which model focuses on states and transitions caused by events?",
    options: [
      "Data model",
      "State diagram",
      "Use case list",
      "Architecture style",
    ],
    answer: "B",
    explanation: "State diagrams represent event-driven state changes.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question:
      "A model that emphasizes static organization rather than dynamic change is a:",
    options: [
      "Behavioral model",
      "Structural model",
      "Scenario narrative",
      "Test script",
    ],
    answer: "B",
    explanation: "Structural models show static arrangement of elements.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question:
      "Which design concept is most directly concerned with hiding volatile decisions behind stable interfaces?",
    options: [
      "Refinement",
      "Information hiding",
      "Aesthetics",
      "Product vision",
    ],
    answer: "B",
    explanation:
      "Information hiding protects the rest of the system from likely changes.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question:
      "Which architecture organizes system functionality into horizontal levels of service?",
    options: [
      "Pipe-and-filter",
      "Layered architecture",
      "Scenario-based model",
      "Scrum",
    ],
    answer: "B",
    explanation: "Layered architecture separates responsibilities into layers.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "What is the main goal of refactoring?",
    options: [
      "Add new user-visible behavior",
      "Improve internal design without changing external behavior",
      "Replace validation",
      "Eliminate architecture",
    ],
    answer: "B",
    explanation: "Refactoring changes structure, not required behavior.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "Agile methods emphasize collaboration with:",
    options: [
      "Only managers",
      "Users and customers",
      "Only testers",
      "Only architects",
    ],
    answer: "B",
    explanation:
      "Agile methods place strong emphasis on customer collaboration.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "When might agile be a poor fit?",
    options: [
      "When requirements evolve",
      "When frequent feedback is available",
      "When the project is safety-critical and requires extensive formal documentation",
      "When the team can deliver in increments",
    ],
    answer: "C",
    explanation:
      "Heavy regulation and safety concerns can limit agile suitability.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "In Scrum, the prioritized list of desired work is the:",
    options: ["Increment", "Product backlog", "State model", "SRS"],
    answer: "B",
    explanation: "The product backlog is the ordered list of work items.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "In XP, short feedback loops are most closely associated with:",
    options: [
      "Waiting until final delivery",
      "Testing and close customer involvement",
      "Avoiding communication",
      "One large release",
    ],
    answer: "B",
    explanation: "XP emphasizes feedback through testing and customer contact.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "In product software engineering, the starting point is usually:",
    options: [
      "A single external contract requirement",
      "A business opportunity",
      "A state diagram",
      "A legal audit",
    ],
    answer: "B",
    explanation:
      "The lecturer material contrasts business opportunity with project-based customer requirements.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question:
      "Which role takes overall responsibility for the software product?",
    options: ["Scrum master", "Product manager", "Compiler", "End user"],
    answer: "B",
    explanation:
      "The tutorial identifies product managers as having overall product responsibility.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Medium",
    question:
      "A single running service instance serving multiple organizations is a:",
    options: [
      "Multi-instance system",
      "Multi-tenant system",
      "Standalone prototype",
      "Pipe-and-filter system",
    ],
    answer: "B",
    explanation: "That is the definition of multi-tenant service software.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Medium",
    question:
      "Continuous deployment is most feasible when software is delivered as:",
    options: [
      "A printed manual",
      "A cloud-based service",
      "A UML appendix",
      "A desktop executable with no network",
    ],
    answer: "B",
    explanation:
      "The lecturer notes tie continuous deployment closely to cloud-based service delivery.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Which pair best matches the classic distinction?",
    options: [
      "Verification = right product; Validation = built right",
      "Verification = built right; Validation = right product",
      "Verification = coding only; Validation = deployment only",
      "They mean the same thing",
    ],
    answer: "B",
    explanation:
      "Verification checks conformance; validation checks usefulness against needs.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Which testing level focuses on the complete integrated system?",
    options: ["Unit testing", "System testing", "Code review", "CRC modeling"],
    answer: "B",
    explanation:
      "System testing addresses the behavior of the complete system.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Medium",
    question:
      "Which practice integrates each committed change with the main code line and triggers build/testing?",
    options: [
      "Refactoring",
      "Continuous integration",
      "State modeling",
      "External failure",
    ],
    answer: "B",
    explanation: "CI integrates changes rapidly and tests them automatically.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Medium",
    question: "The four Ps of project management are:",
    options: [
      "People, Product, Process, Project",
      "Planning, Programming, Process, Prototype",
      "People, Prototype, Pipe, Product",
      "Process, Product, Performance, Profit",
    ],
    answer: "A",
    explanation:
      "Past questions explicitly ask for the four Ps as People, Product, Process, and Project.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Hard",
    question: "Which situation best reflects team toxicity?",
    options: [
      "Constructive criticism and trust",
      "Open communication and shared goals",
      "Persistent blame, poor trust, and low morale",
      "Frequent peer learning",
    ],
    answer: "C",
    explanation:
      "A toxic team environment is marked by destructive behaviors and low trust.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question:
      "Why is software engineering essential to modern society according to the lecturer material?",
    options: [
      "Because only games use software",
      "Because software-intensive systems support manufacturing, finance, entertainment, and many other sectors",
      "Because software obeys manufacturing laws",
      "Because software never changes",
    ],
    answer: "B",
    explanation:
      "The lecturer notes describe society as deeply software intensive.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Hard",
    question:
      "Which issue commonly appears when requirements are elicited from several stakeholders?",
    options: [
      "Perfect agreement",
      "Reduced need for negotiation",
      "Conflicting viewpoints and priorities",
      "Automatic architecture design",
    ],
    answer: "C",
    explanation:
      "Past questions repeatedly ask about problems caused by multiple stakeholder viewpoints.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software engineering is best defined as:",
    options: [
      "Writing code only",
      "Designing hardware",
      "Engineering discipline for software production",
      "Debugging systems",
    ],
    answer: "C",
    explanation:
      "Software engineering covers the full lifecycle: from specification through maintenance.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software is considered:",
    options: ["Physical", "Tangible", "Abstract", "Mechanical"],
    answer: "C",
    explanation:
      "Software is abstract and intangible, with no physical manufacturing limits.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "The software crisis refers to:",
    options: [
      "Hardware failure",
      "Poor UI",
      "Late, costly, unreliable systems",
      "Internet failure",
    ],
    answer: "C",
    explanation:
      "The software crisis describes projects that exceeded budgets and timelines while being unreliable.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Professional software is:",
    options: [
      "Developed individually",
      "Temporary",
      "Developed by teams and maintained",
      "Not documented",
    ],
    answer: "C",
    explanation:
      "Professional software is built by teams for users other than the developer and maintained over a long lifetime.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Fundamental SE activity NOT included:",
    options: ["Specification", "Development", "Painting", "Validation"],
    answer: "C",
    explanation:
      "Main activities are specification, development, validation, and evolution.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software deterioration occurs because:",
    options: [
      "Hardware fails",
      "Software ages",
      "Changes increase complexity",
      "Code disappears",
    ],
    answer: "C",
    explanation:
      "Software deteriorates as change accumulates and complexity grows.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software process is:",
    options: [
      "Coding only",
      "Structured development activities",
      "Testing only",
      "Deployment only",
    ],
    answer: "B",
    explanation:
      "A process is a structured set of activities required to develop a software system.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Essential attribute of good software:",
    options: ["Complexity", "Maintainability", "Size", "Color"],
    answer: "B",
    explanation:
      "Attributes include maintainability, dependability, efficiency, and acceptability.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software engineering includes:",
    options: ["Only coding", "Only testing", "Entire lifecycle", "Only design"],
    answer: "C",
    explanation:
      "SE covers all aspects of software production from initial specification to maintenance.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question: "Software systems can become complex because:",
    options: [
      "They are physical",
      "No natural limits",
      "Hardware limits",
      "Memory size",
    ],
    answer: "B",
    explanation:
      "Since software is abstract, there are no natural limits to its potential complexity.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Generic software is:",
    options: [
      "Custom-built",
      "Built for many users",
      "Built for one client",
      "Temporary",
    ],
    answer: "B",
    explanation:
      "Generic products are stand-alone systems produced by a development organization and sold on the open market.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Custom software is:",
    options: ["Market product", "Mass-produced", "Client-specific", "Generic"],
    answer: "C",
    explanation:
      "Custom software is developed specifically for a single customer according to their specification.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Product development starts from:",
    options: ["Code", "Bug", "Business opportunity", "UI"],
    answer: "C",
    explanation:
      "New products are typically driven by an identified business or market opportunity.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Product vision defines:",
    options: [
      "Architecture",
      "Essence of product",
      "Code structure",
      "Database",
    ],
    answer: "B",
    explanation:
      "The product vision is a simple statement that defines the essence of the product.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Platform software allows:",
    options: [
      "Testing",
      "Running OS",
      "Building new applications",
      "Storage only",
    ],
    answer: "C",
    explanation:
      "Platforms provide functionality that generic applications can be built upon.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Feature creep is:",
    options: [
      "Removing features",
      "Uncontrolled feature addition",
      "Testing feature",
      "Feature deletion",
    ],
    answer: "B",
    explanation:
      "Feature creep occurs when features are added without checking usefulness or design alternatives.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Product manager:",
    options: [
      "Writes code",
      "Owns product decisions",
      "Tests software",
      "Designs UI",
    ],
    answer: "B",
    explanation:
      "The product manager is responsible for the business success of the product and its roadmap.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Project-based software is driven by:",
    options: ["Developer ideas", "Client requirements", "Testing", "Hardware"],
    answer: "B",
    explanation:
      "Project-based work starts with requirements provided by a specific client.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Rapid delivery is important because:",
    options: ["Reduces bugs", "Captures market", "Improves UI", "Reduces code"],
    answer: "B",
    explanation:
      "In product development, being first to market and gaining early feedback is critical.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Prototyping is used to:",
    options: [
      "Replace final system",
      "Explore ideas quickly",
      "Final deployment",
      "Testing only",
    ],
    answer: "B",
    explanation:
      "Prototyping involves building early versions to explore concepts and clarify requirements.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Product software differs from custom because:",
    options: ["No testing", "Market-driven", "No users", "Static"],
    answer: "B",
    explanation:
      "Software products target a market of multiple users/customers rather than a single specific client.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question: "Product evolution is driven by:",
    options: ["Hardware", "Users and market", "OS", "Compiler"],
    answer: "B",
    explanation:
      "Ongoing changes to products are fueled by user feedback and changing market needs.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile emphasizes:",
    options: ["Contracts", "Documentation", "Flexibility", "Hardware"],
    answer: "C",
    explanation:
      "Agile focuses on flexibility and the ability to respond to change quickly.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile manifesto focuses on:",
    options: ["Tools", "Processes", "People and collaboration", "Hardware"],
    answer: "C",
    explanation:
      "The manifesto values individuals and interactions over processes and tools.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile prioritizes:",
    options: ["Documentation", "Working software", "Contracts", "Hardware"],
    answer: "B",
    explanation:
      "Working software is valued more than comprehensive documentation in Agile philosophy.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile supports:",
    options: [
      "Late delivery",
      "Continuous change",
      "No testing",
      "Fixed design",
    ],
    answer: "B",
    explanation:
      "Agile processes harness change for the customer's competitive advantage.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile development is:",
    options: ["Linear", "Flexible", "Static", "Fixed"],
    answer: "B",
    explanation:
      "Flexibility and iterative progress are core tenets of Agile development.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile best suits:",
    options: [
      "Stable systems",
      "Dynamic environments",
      "Hardware systems",
      "Static systems",
    ],
    answer: "B",
    explanation:
      "Agile is designed for environments where requirements change frequently.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile reduces:",
    options: ["Flexibility", "Documentation overhead", "Testing", "Users"],
    answer: "B",
    explanation:
      "By focusing on working software, Agile reduces the overhead of exhaustive documentation.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile focuses on:",
    options: ["Process", "Users", "Hardware", "Memory"],
    answer: "B",
    explanation:
      "Agile emphasizes close collaboration with users and stakeholders.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile development is:",
    options: ["Sequential", "Iterative", "Linear", "Static"],
    answer: "B",
    explanation: "Agile development proceeds in short, repeatable iterations.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile value includes:",
    options: [
      "Processes over people",
      "People over processes",
      "Contracts over users",
      "Hardware over software",
    ],
    answer: "B",
    explanation:
      "Individuals and interactions are prioritized over processes and tools.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile allows:",
    options: ["No changes", "Frequent changes", "No feedback", "No testing"],
    answer: "B",
    explanation:
      "One of the 12 principles is to welcome changing requirements, even late in development.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile improves:",
    options: ["Rigidity", "Adaptability", "Complexity", "Size"],
    answer: "B",
    explanation:
      "Agile methods increase a team's ability to adapt to new information and feedback.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile teams are:",
    options: ["Large", "Self-organizing", "Fixed", "Static"],
    answer: "B",
    explanation:
      "The best architectures and designs emerge from self-organizing teams.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile delivery is:",
    options: ["One-time", "Incremental", "Final-only", "Static"],
    answer: "B",
    explanation:
      "Working software is delivered frequently, in increments of weeks or months.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question: "Agile minimizes:",
    options: ["Communication", "Feedback", "Delays", "Users"],
    answer: "C",
    explanation:
      "Frequent delivery and feedback help catch errors early and minimize project delays.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Sprint is:",
    options: ["Long-term", "Iteration period", "Final phase", "Testing phase"],
    answer: "B",
    explanation: "A sprint is a fixed-length iteration (typically 2-4 weeks) in the Scrum framework.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Product backlog contains:",
    options: ["Code", "Tasks/features", "UI", "Hardware"],
    answer: "B",
    explanation: "The product backlog is an ordered list of everything that is known to be needed in the product.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Daily scrum is:",
    options: ["Weekly meeting", "Short daily meeting", "Monthly", "None"],
    answer: "B",
    explanation: "A 15-minute daily event for the Developers to plan work for the next 24 hours.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Increment is:",
    options: ["Documentation", "Working software", "Design", "Testing"],
    answer: "B",
    explanation: "An increment is a concrete stepping stone toward the Product Goal; it must be usable.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "XP stands for:",
    options: ["Extreme Programming", "Extended Programming", "Extra Process", "External Program"],
    answer: "A",
    explanation: "XP is Extreme Programming, a disciplined approach to software delivery based on core values like simplicity and feedback.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "XP emphasizes:",
    options: ["Hardware", "Coding practices", "UI", "Storage"],
    answer: "B",
    explanation: "XP includes technical practices like pair programming, TDD, and continuous integration.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Acceptance testing ensures:",
    options: ["Code runs", "User satisfaction", "Speed", "Size"],
    answer: "B",
    explanation: "Acceptance tests verify that a feature meets the customer's requirements and is 'ready'.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Estimation uses:",
    options: ["Hours", "Person-hours", "Minutes", "Seconds"],
    answer: "B",
    explanation: "In agile contexts, work is often estimated in terms of person-hours or story points.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Scrum focuses on:",
    options: ["Hardware", "Iterative delivery", "Memory", "OS"],
    answer: "B",
    explanation: "Scrum is a framework for developing, delivering, and sustaining complex products through iteration.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "XP values include:",
    options: ["Complexity", "Simplicity", "Delay", "Isolation"],
    answer: "B",
    explanation: "XP values reflect Simplicity, Communication, Feedback, Courage, and Respect.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "Scrum roles include:",
    options: ["Product owner", "Tester only", "Manager only", "None"],
    answer: "A",
    explanation: "Scrum roles are Product Owner, Scrum Master, and Developers.",
  },
  {
    topic: "Scrum / XP",
    difficulty: "Easy",
    question: "XP practice includes:",
    options: ["Pair programming", "Solo coding only", "No testing", "No design"],
    answer: "A",
    explanation: "Pair programming is a core XP practice where two developers work at one workstation.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "A feature is best defined as:",
    options: ["A bug", "A coherent set of functionality", "A UI element", "A requirement document"],
    answer: "B",
    explanation: "A feature implements a coherent set of functionality that provides value to the user.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "A scenario describes:",
    options: ["Code execution", "Database design", "A narrative of system use", "Hardware interaction"],
    answer: "C",
    explanation: "A scenario is a narrative describing how a user or group of users may use a system.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "A user story is:",
    options: ["A technical design", "A short user-centered requirement", "A bug report", "A test case"],
    answer: "B",
    explanation: "A user story is a short, simple description of a feature told from the perspective of the person who desires the new capability.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "A persona represents:",
    options: ["A database", "A user type", "A program", "A feature"],
    answer: "B",
    explanation: "A persona is a detailed representation of a typical user that helps designers understand goals and behaviors.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "Which is NOT a feature characteristic?",
    options: ["Independence", "Coherence", "Relevance", "Obscurity"],
    answer: "D",
    explanation: "Features should be independent, coherent, and relevant; obscurity is a negative trait.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "Good UI design should:",
    options: ["Be complex", "Be colorful only", "Avoid unnecessary complexity", "Include many dropdowns"],
    answer: "C",
    explanation: "Interfaces should be simple, intuitive, and avoid overwhelming the user with unnecessary complexity.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "Scenarios are used to:",
    options: ["Debug code", "Understand user interaction", "Compile programs", "Design hardware"],
    answer: "B",
    explanation: "Scenarios help developers walk through how a user will actually interact with the software.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "Stories focus on:",
    options: ["System architecture", "User needs", "Testing", "Deployment"],
    answer: "B",
    explanation: "User stories prioritize user needs and outcomes over technical implementation details.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "Feature design requires:",
    options: ["Only coding knowledge", "Domain, user, and technology knowledge", "Hardware knowledge", "None"],
    answer: "B",
    explanation: "Successful features require a mix of domain expertise, user understanding, and technical capability.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question: "User stories are mainly used in:",
    options: ["Waterfall", "Agile", "Spiral", "Formal methods"],
    answer: "B",
    explanation: "User stories are a primary tool for requirements in Agile development frameworks.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "The waterfall model is:",
    options: ["Iterative", "Linear sequential", "Parallel", "Random"],
    answer: "B",
    explanation: "Waterfall follows a strict, one-way sequence of phases: requirements, design, implementation, etc.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Incremental model delivers:",
    options: ["Final system only", "Partial systems over time", "No working system", "Hardware"],
    answer: "B",
    explanation: "The system is broken down into small parts (increments), which are delivered and reviewed over time.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Spiral model focuses on:",
    options: ["UI", "Risk", "Testing only", "Coding only"],
    answer: "B",
    explanation: "The Spiral model is risk-driven and uses iteration to manage project risks early and often.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Prototyping model is used to:",
    options: ["Finalize system", "Quickly explore ideas", "Replace testing", "Avoid coding"],
    answer: "B",
    explanation: "Prototyping allows for quick visualization and exploration of requirements before full development.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Concurrent model allows:",
    options: ["Sequential work", "Parallel activities", "No development", "Testing only"],
    answer: "B",
    explanation: "Concurrent Engineering allows multiple development stages to happen simultaneously.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Formal methods rely on:",
    options: ["Graphics", "Mathematics", "UI", "Testing"],
    answer: "B",
    explanation: "Formal methods use mathematical specification and verification techniques.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Component-based development focuses on:",
    options: ["Coding from scratch", "Reuse of components", "Testing only", "UI design"],
    answer: "B",
    explanation: "This model emphasizes assembling systems from pre-existing, reusable software components.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Unified Process is:",
    options: ["Linear", "Iterative framework", "Hardware model", "Testing tool"],
    answer: "B",
    explanation: "The Unified Process (UP) is an iterative and incremental software development process framework.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Evolutionary models:",
    options: ["Avoid change", "Support change", "Are rigid", "Are static"],
    answer: "B",
    explanation: "Evolutionary models (like prototyping or spiral) are designed to handle ongoing requirements change.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Prescriptive models are:",
    options: ["Flexible", "Structured and rigid", "Random", "Dynamic"],
    answer: "B",
    explanation: "Prescriptive models strive for structure and discipline, following a predetermined plan.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Iterative models:",
    options: ["Run once", "Repeat cycles", "Avoid testing", "Avoid design"],
    answer: "B",
    explanation: "Iterative models develop a system through repeated cycles (iterations) of development.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Waterfall disadvantage:",
    options: ["Too flexible", "Inflexible to changes", "Fast delivery", "Easy updates"],
    answer: "B",
    explanation: "Waterfall makes it difficult and expensive to change requirements once a phase has started.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Spiral model advantage:",
    options: ["No risk", "Risk management", "Fast coding", "No planning"],
    answer: "B",
    explanation: "The Spiral model's greatest strength is its focus on continuous risk assessment and management.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Prototype drawback:",
    options: ["Fast", "Poor design reuse", "Flexible", "User-friendly"],
    answer: "B",
    explanation: "Quick prototypes often sacrifice architectural quality or design standards just to get a demo running.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Incremental model advantage:",
    options: ["Late delivery", "Early delivery", "No testing", "No feedback"],
    answer: "B",
    explanation: "Incremental delivery provides customers with usable functionality much earlier than the final release.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Concurrent model improves:",
    options: ["Delay", "Speed", "Errors", "Cost"],
    answer: "B",
    explanation: "By running activities in parallel, the overall time-to-market can be reduced.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Software evolution occurs due to:",
    options: ["Stability", "Change", "Hardware", "Memory"],
    answer: "B",
    explanation: "Software must evolve because requirements and environment inevitably change over time.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "Process model selection depends on:",
    options: ["Developer mood", "Project requirements", "Color", "Size"],
    answer: "B",
    explanation: "The right model depends on project goals, constraints, and the level of expected change.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Requirements engineering is:",
    options: ["Coding", "Defining system needs", "Testing", "Deployment"],
    answer: "B",
    explanation: "RE ensures that the right problem is identified and properly defined before development.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "A stakeholder is:",
    options: ["Developer", "Anyone affected by system", "Tester", "Designer"],
    answer: "B",
    explanation: "A stakeholder is any person or group that has a vested interest in the success or failure of a system.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Elicitation means:",
    options: ["Testing", "Gathering requirements", "Coding", "Deployment"],
    answer: "B",
    explanation: "Elicitation is the process of getting information from stakeholders to understand system needs.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Validation ensures:",
    options: ["Speed", "Correct requirements", "UI design", "Coding"],
    answer: "B",
    explanation: "Validation confirms that the requirements reflect what the customer actually wants.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Negotiation in RE means:",
    options: ["Coding", "Resolving conflicts", "Testing", "Deployment"],
    answer: "B",
    explanation: "Negotiation settles conflicting priorities or needs among different stakeholders.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Requirements management deals with:",
    options: ["Testing", "Change handling", "Coding", "UI"],
    answer: "B",
    explanation: "Requirements management involves tracking, prioritizing, and managing requirement changes over time.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Functional requirements describe:",
    options: ["Constraints", "System functions", "Hardware", "UI"],
    answer: "B",
    explanation: "Functional requirements specify what the system must do (services, reactions, and behavior).",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Non-functional requirements describe:",
    options: ["Behavior", "Constraints", "Features", "Code"],
    answer: "B",
    explanation: "Non-functional requirements define constraints like performance, security, and reliability.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Domain requirements are:",
    options: ["Generic", "Industry-specific", "UI-related", "Hardware"],
    answer: "B",
    explanation: "Domain requirements are derived from the project's specific application domain (e.g., banking regulations).",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "SRS stands for:",
    options: ["Software Requirement System", "Software Requirements Specification", "System Requirement Sheet", "None"],
    answer: "B",
    explanation: "The SRS is the official document outlining all agreed-upon system requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Work products are:",
    options: ["Tools", "Outputs of RE", "Code", "Hardware"],
    answer: "B",
    explanation: "Outputs can include usage scenarios, requirement lists, and preliminary models.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Multiple stakeholders lead to:",
    options: ["Simplicity", "Conflicts", "No change", "Stability"],
    answer: "B",
    explanation: "Different users often have competing goals, making conflict management essential in RE.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Validation ensures:",
    options: ["Code runs", "Right system built", "UI", "Speed"],
    answer: "B",
    explanation: "Validation checks that the defined system is indeed the 'right' system for the intended users.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Requirements engineering tasks include:",
    options: ["Only coding", "Multiple steps", "Only testing", "None"],
    answer: "B",
    explanation: "Tasks include inception, elicitation, elaboration, negotiation, specification, validation, and management.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "User requirements vs system requirements:",
    options: ["Same", "Different abstraction levels", "Opposite", "None"],
    answer: "B",
    explanation: "User requirements are high-level; system requirements are low-level and technical.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Requirements model represents:",
    options: ["Final system", "Snapshot in time", "UI", "Hardware"],
    answer: "B",
    explanation: "A model is a representation that captures requirements at a specific point in time.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Poor requirements cause:",
    options: ["Success", "Project failure", "Speed", "Stability"],
    answer: "B",
    explanation: "Missing or incorrect requirements are a lead cause of large-scale software project failure.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "Stakeholder issues include:",
    options: ["Agreement", "Conflict", "Stability", "Simplicity"],
    answer: "B",
    explanation: "Managing conflicting stakeholder needs is a major task in requirements engineering.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "UML is used for:",
    options: ["Coding", "Modeling systems", "Testing", "Deployment"],
    answer: "B",
    explanation: "The Unified Modeling Language provides a standard visual notation for software systems.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Class diagrams show:",
    options: ["Flow", "Structure", "Behavior", "UI"],
    answer: "B",
    explanation: "Class diagrams emphasize the static organization and structure of a system.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Activity diagrams show:",
    options: ["Classes", "Workflow", "States", "Data"],
    answer: "B",
    explanation: "Activity diagrams represent the sequence of steps in a workflow or process.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "State diagrams show:",
    options: ["Flow", "Transitions", "Classes", "Data"],
    answer: "B",
    explanation: "State diagrams show the lifecycle of an object as it transitions between states.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Modeling helps in:",
    options: ["Confusion", "Understanding systems", "Coding only", "Deployment"],
    answer: "B",
    explanation: "Modeling helps developers and stakeholders visualize and understand complex system behavior.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Scenario-based models are primarily expressed using:",
    options: ["Algorithms", "Use cases", "Tables", "Code"],
    answer: "B",
    explanation: "Use cases describe user interaction scenarios through narratives and diagrams.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Data models focus on:",
    options: ["User interface", "Data relationships", "Code execution", "Hardware"],
    answer: "B",
    explanation: "Data models focus on data objects, their attributes, and how they relate.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Flow-oriented models represent:",
    options: ["Class structure", "Data movement", "UI design", "Hardware layout"],
    answer: "B",
    explanation: "These models show how data moves and transforms through different system functions.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Behavioral models describe:",
    options: ["Static structure", "System reactions over time", "Data storage", "UI layout"],
    answer: "B",
    explanation: "Behavioral modeling shows how the system responds to internal and external events.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Structural models focus on:",
    options: ["Behavior", "Static system organization", "Time-based changes", "Execution flow"],
    answer: "B",
    explanation: "Structural models describe the classes, components, and static layout of the system.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "UML diagrams are mainly used during:",
    options: ["Only coding", "Analysis and design", "Testing only", "Deployment only"],
    answer: "B",
    explanation: "Models provide clarity and a blueprint for developers during the critical analysis and design phases.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "A class diagram includes:",
    options: ["States", "Classes and relationships", "Workflows", "Events"],
    answer: "B",
    explanation: "Classes, their internal attributes/methods, and their connections (inheritance, etc.) are shown here.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Activity diagrams are best for:",
    options: ["Structure", "Workflow processes", "Data storage", "Hardware"],
    answer: "B",
    explanation: "Activity diagrams provide a clear visual of a sequence of actions or work steps.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "State diagrams represent:",
    options: ["Structure", "System states and transitions", "Data flow", "UI"],
    answer: "B",
    explanation: "They show how objects move from one state to another (e.g., 'Active' to 'Inactive').",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Modeling improves:",
    options: ["Complexity", "Communication and understanding", "Errors", "Hardware"],
    answer: "B",
    explanation: "Models serve as a common language between engineers and stakeholders.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "Model-driven engineering emphasizes:",
    options: ["Code first", "Models as primary artifacts", "Testing first", "UI first"],
    answer: "B",
    explanation: "In MDE, models are the central artifacts from which code can potentially be generated.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Software architecture defines:",
    options: ["Code syntax", "System structure", "Database size", "UI color"],
    answer: "B",
    explanation: "Architecture refers to the high-level organization of components and their interactions.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Layered architecture organizes systems into:",
    options: ["Modules", "Layers", "Classes", "Files"],
    answer: "B",
    explanation: "The system is divided into layers (e.g., presentation, logic, data) with specific responsibilities.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Pipe-and-filter architecture:",
    options: ["Stores data", "Processes data through filters", "Handles UI", "Handles hardware"],
    answer: "B",
    explanation: "Data flows through various filtering processes (pipes and filters) to reach its final state.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Abstraction helps to:",
    options: ["Increase complexity", "Simplify systems", "Remove design", "Avoid coding"],
    answer: "B",
    explanation: "Abstraction hides unnecessary details, allowing developers to focus on higher-level logic.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Modularity means:",
    options: ["Single component", "Dividing system into parts", "No structure", "One file"],
    answer: "B",
    explanation: "A modular system is made of distinct components that can be built and tested independently.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Separation of concerns means:",
    options: ["Combine everything", "Isolate different functionalities", "Ignore features", "Focus only UI"],
    answer: "B",
    explanation: "This principle suggests that each component should address one specific part of the system's needs.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Information hiding:",
    options: ["Exposes all data", "Restricts internal details", "Removes data", "Deletes code"],
    answer: "B",
    explanation: "Objects hide their internal data and implementation, only showing essential interfaces.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Refinement refers to:",
    options: ["Simplification", "Adding detail step-by-step", "Removing code", "Testing"],
    answer: "B",
    explanation: "Stepwise refinement involves moving from high-level abstractions to concrete details.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Refactoring improves:",
    options: ["Functionality", "Code structure", "UI", "Hardware"],
    answer: "B",
    explanation: "Refactoring changes the internal structure of code without changing its external behavior.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Design patterns are:",
    options: ["Code snippets", "Reusable solutions", "Errors", "Tools"],
    answer: "B",
    explanation: "Design patterns provide established templates for solving recurring software design problems.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Interface design focuses on:",
    options: ["Data storage", "Interaction with users", "Code compilation", "Hardware"],
    answer: "B",
    explanation: "Interface design ensures that users can interact with the software easily and efficiently.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Poor architecture leads to:",
    options: ["Simplicity", "Complexity", "Speed", "Stability"],
    answer: "B",
    explanation: "Lack of a sound architecture often results in messy, unmanageable code as a project grows.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Architectural design is important because it:",
    options: ["Adds code", "Organizes system", "Removes users", "Deletes data"],
    answer: "B",
    explanation: "Architecture provides the blueprint that ensures all components work together cohesively.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Design models include:",
    options: ["Only UI", "Data, architecture, interface", "Only code", "Only testing"],
    answer: "B",
    explanation: "Full design documentation covers data structures, architecture patterns, and UI interfaces.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Medium",
    question: "Good design results in:",
    options: ["More bugs", "Higher quality software", "Less functionality", "Slow performance"],
    answer: "B",
    explanation: "Careful design leads to software that is easier to maintain, test, and adapt.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Cloud-based software runs on:",
    options: ["Local machine only", "Remote servers", "Hardware chips", "BIOS"],
    answer: "B",
    explanation: "Cloud services provide computing power and storage over the internet via remote servers.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Microservices architecture uses:",
    options: ["One large system", "Independent small services", "Hardware layers", "UI layers"],
    answer: "B",
    explanation: "Microservices break a system into small, loosely coupled services that communicate over APIs.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Security ensures:",
    options: ["Speed", "Protection of system data", "UI design", "Memory usage"],
    answer: "B",
    explanation: "Security practices protect systems from unauthorized access or malicious attack.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Privacy ensures:",
    options: ["Data deletion", "Protection of user information", "System speed", "Hardware security"],
    answer: "B",
    explanation: "Privacy controls ensure that personally identifiable information is handled correctly and securely.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Reliability refers to:",
    options: ["Speed", "Consistent performance", "UI design", "Testing"],
    answer: "B",
    explanation: "Reliable systems perform intended functions consistently without failure over a given period.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Safety refers to:",
    options: ["Fast execution", "Avoiding harm", "UI design", "Coding"],
    answer: "B",
    explanation: "Safety is the ability of a system to operate without causing injury, death, or environmental damage.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Cloud computing advantage:",
    options: ["Fixed resources", "Scalability", "Low flexibility", "No users"],
    answer: "B",
    explanation: "Cloud computing allows for rapid scaling of resources up or down based on demand.",
  },
  {
    topic: "Cloud, Microservices, Security",
    difficulty: "Medium",
    question: "Microservices benefit:",
    options: ["Tight coupling", "Flexibility and scalability", "Large monolith", "No deployment"],
    answer: "B",
    explanation: "Each service can be scaled or deployed independently, improving overall system flexibility.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Software quality refers to:",
    options: ["Size", "Degree of excellence", "Code length", "UI color"],
    answer: "B",
    explanation: "Quality is measured by how well the software meets its requirements and user expectations.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Garvin’s dimensions relate to:",
    options: ["Coding", "Quality measurement", "UI", "Hardware"],
    answer: "B",
    explanation: "Garvin's dimensions provide multiple viewpoints for assessing product quality.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Cost of quality includes:",
    options: ["Only testing cost", "Prevention and failure costs", "Coding cost", "UI cost"],
    answer: "B",
    explanation: "The cost of quality covers prevention, appraisal (testing), internal failure, and external failure costs.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "SQA stands for:",
    options: ["Software Quality Analysis", "Software Quality Assurance", "System Quality Access", "Software Query Access"],
    answer: "B",
    explanation: "SQA involves planned and systematic activities to ensure the software process reaches quality goals.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Testing is used to:",
    options: ["Design UI", "Verify correctness", "Write code", "Deploy system"],
    answer: "B",
    explanation: "Testing validates that the software behaves correctly according to its specifications.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Validation ensures:",
    options: ["Code works", "Right product built", "UI design", "Speed"],
    answer: "B",
    explanation: "Validation is 'building the right product' (i.e., meeting customer expectations).",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Testing strategies include:",
    options: ["Only unit testing", "Multiple levels", "No testing", "UI testing only"],
    answer: "B",
    explanation: "Strategies progress through unit, integration, validation, and system testing.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Quality dilemma refers to:",
    options: ["No testing", "Cost vs benefit trade-off", "UI issues", "Hardware problems"],
    answer: "B",
    explanation: "The dilemma involves balancing the cost of ensuring quality against the risks of poor quality.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "High-quality software results in:",
    options: ["More failures", "Fewer failures", "No testing", "Slow speed"],
    answer: "B",
    explanation: "Excellence in process and design leads to more stable and reliable software products.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "Testing improves:",
    options: ["Errors", "Reliability", "Complexity", "Size"],
    answer: "B",
    explanation: "Thorough testing increases confidence in the system's reliability and stability.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "The four P’s are:",
    options: ["Plan, program, process, people", "People, product, process, project", "Product, program, plan, people", "None"],
    answer: "B",
    explanation: "Effective management focuses on People, the Product, the Process, and the Project.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "Team structure affects:",
    options: ["UI", "Project success", "Code size", "Hardware"],
    answer: "B",
    explanation: "How a team is organized significantly impacts productivity and the final product's quality.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "Team toxicity refers to:",
    options: ["Strong team", "Harmful work environment", "Coding errors", "Testing"],
    answer: "B",
    explanation: "Toxicity involves negative behaviors or culture that disrupt collaboration and project health.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "Ethical behavior involves:",
    options: ["Only laws", "Moral principles", "Coding rules", "Testing"],
    answer: "B",
    explanation: "Ethical software engineering goes beyond legalities to include honesty, integrity, and safety.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "Project coordination approaches include:",
    options: ["Formal and informal", "Coding only", "Testing only", "None"],
    answer: "A",
    explanation: "Coordination is achieved through formal processes and informal communication among team members.",
  },
  {
    topic: "Management and Ethics",
    difficulty: "Medium",
    question: "Good project management leads to:",
    options: ["Failure", "Success", "Complexity", "Delay"],
    answer: "B",
    explanation: "Management provides the structure and oversight required to deliver projects on time and in budget.",
  },
];

export const mcqs = [
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
    options: [
      "Essential attributes of good software",
      "Software engineering",
      "Software deterioration",
      "Professional software",
    ],
    answer: "B",
    explanation:
      "The correct term is Software engineering because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: The difficulty of building large systems that were reliable, on time, and within budget.",
    options: [
      "Software engineering",
      "Software process",
      "Software crisis",
      "Nature of software",
    ],
    answer: "C",
    explanation:
      "The correct term is Software crisis because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software is abstract and intangible and is not constrained by physical manufacturing limits.",
    options: [
      "Software process",
      "Essential attributes of good software",
      "Nature of software",
      "Software crisis",
    ],
    answer: "C",
    explanation:
      "The correct term is Nature of software because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
    options: [
      "Framework activities",
      "Software process",
      "Professional software",
      "Software deterioration",
    ],
    answer: "C",
    explanation:
      "The correct term is Professional software because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A structured set of activities needed to specify, develop, validate, and evolve software.",
    options: [
      "Professional software",
      "Framework activities",
      "Software process",
      "Nature of software",
    ],
    answer: "C",
    explanation:
      "The correct term is Software process because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Generic process activities such as communication, planning, modeling, construction, and deployment.",
    options: [
      "Software engineering",
      "Essential attributes of good software",
      "Software deterioration",
      "Framework activities",
    ],
    answer: "D",
    explanation:
      "The correct term is Framework activities because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Maintainability, dependability/security, efficiency, and acceptability/usability.",
    options: [
      "Nature of software",
      "Software deterioration",
      "Essential attributes of good software",
      "Software process",
    ],
    answer: "C",
    explanation:
      "The correct term is Essential attributes of good software because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software does not wear out physically but deteriorates because changes increase complexity.",
    options: [
      "Software crisis",
      "Framework activities",
      "Software deterioration",
      "Essential attributes of good software",
    ],
    answer: "C",
    explanation:
      "The correct term is Software deterioration because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software products built for a broad market and many customers.",
    options: [
      "Generic software",
      "Feature creep",
      "Platform",
      "Project-based software",
    ],
    answer: "A",
    explanation:
      "The correct term is Generic software because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software developed for a specific customer or organization.",
    options: [
      "Product software engineering",
      "Project-based software",
      "Generic software",
      "Custom software",
    ],
    answer: "D",
    explanation:
      "The correct term is Custom software because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software driven by customer requirements and developed under contract or dedicated project conditions.",
    options: [
      "Rapid delivery",
      "Project-based software",
      "Platform",
      "Generic software",
    ],
    answer: "B",
    explanation:
      "The correct term is Project-based software because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
    options: [
      "Project-based software",
      "Rapid delivery",
      "Generic software",
      "Product software engineering",
    ],
    answer: "D",
    explanation:
      "The correct term is Product software engineering because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A simple statement that defines the essence of the product to be developed.",
    options: [
      "Product software engineering",
      "Generic software",
      "Product vision",
      "Custom software",
    ],
    answer: "C",
    explanation:
      "The correct term is Product vision because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A software product that includes functionality on which other applications can be built.",
    options: [
      "Feature creep",
      "Product software engineering",
      "Platform",
      "Rapid delivery",
    ],
    answer: "C",
    explanation:
      "The correct term is Platform because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Adding features in response to requests without checking general usefulness or better alternatives.",
    options: [
      "Feature creep",
      "Custom software",
      "Project-based software",
      "Platform",
    ],
    answer: "A",
    explanation:
      "The correct term is Feature creep because it matches that definition.",
  },
  {
    topic: "Software Products",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Fast release of software products to capture market opportunity and user feedback.",
    options: [
      "Rapid delivery",
      "Product vision",
      "Product software engineering",
      "Project-based software",
    ],
    answer: "A",
    explanation:
      "The correct term is Rapid delivery because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Ability to respond quickly and effectively to change while still delivering useful software.",
    options: [
      "Working software over documentation",
      "Incremental delivery",
      "Agile limitation",
      "Agility",
    ],
    answer: "D",
    explanation:
      "The correct term is Agility because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A call to uncover better ways of developing software by doing it and helping others do it.",
    options: [
      "Incremental delivery",
      "Agile manifesto",
      "Customer collaboration",
      "Agile suitability",
    ],
    answer: "B",
    explanation:
      "The correct term is Agile manifesto because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile values working software more than comprehensive documentation, though documentation still has a role.",
    options: [
      "Agile limitation",
      "Agility",
      "Working software over documentation",
      "Agile manifesto",
    ],
    answer: "C",
    explanation:
      "The correct term is Working software over documentation because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
    options: [
      "Agility",
      "Agile suitability",
      "Agile limitation",
      "Customer collaboration",
    ],
    answer: "D",
    explanation:
      "The correct term is Customer collaboration because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile prefers adapting plans and software when needs change.",
    options: [
      "Responding to change",
      "Agility",
      "Agile limitation",
      "Working software over documentation",
    ],
    answer: "A",
    explanation:
      "The correct term is Responding to change because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software is delivered in small usable increments.",
    options: [
      "Customer collaboration",
      "Agile suitability",
      "Agile manifesto",
      "Incremental delivery",
    ],
    answer: "D",
    explanation:
      "The correct term is Incremental delivery because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile fits environments with changing requirements and close customer feedback.",
    options: [
      "Agile suitability",
      "Incremental delivery",
      "Agility",
      "Responding to change",
    ],
    answer: "A",
    explanation:
      "The correct term is Agile suitability because it matches that definition.",
  },
  {
    topic: "Agile",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
    options: [
      "Agile limitation",
      "Working software over documentation",
      "Agile suitability",
      "Agility",
    ],
    answer: "A",
    explanation:
      "The correct term is Agile limitation because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Prioritized list of desired product work items.",
    options: ["XP values", "Sprint", "Product backlog", "Daily scrum"],
    answer: "C",
    explanation:
      "The correct term is Product backlog because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A fixed time-box in Scrum during which selected backlog items are implemented.",
    options: ["Sprint", "Person-hours", "Daily scrum", "Product backlog"],
    answer: "A",
    explanation:
      "The correct term is Sprint because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A potentially usable version of the product produced at the end of an iteration or sprint.",
    options: [
      "Acceptance testing",
      "Extreme Programming",
      "Increment",
      "Sprint",
    ],
    answer: "C",
    explanation:
      "The correct term is Increment because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Short daily meeting for team synchronization.",
    options: [
      "Person-hours",
      "Acceptance testing",
      "Extreme Programming",
      "Daily scrum",
    ],
    answer: "D",
    explanation:
      "The correct term is Daily scrum because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A measure of effort estimating how long one person would take to implement a backlog item.",
    options: [
      "Extreme Programming",
      "Person-hours",
      "Daily scrum",
      "XP values",
    ],
    answer: "B",
    explanation:
      "The correct term is Person-hours because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An agile approach that emphasizes disciplined coding practices and fast feedback.",
    options: ["Extreme Programming", "Increment", "Sprint", "Daily scrum"],
    answer: "A",
    explanation:
      "The correct term is Extreme Programming because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Communication, simplicity, feedback, courage, and respect.",
    options: ["Person-hours", "Sprint", "XP values", "Increment"],
    answer: "C",
    explanation:
      "The correct term is XP values because it matches that definition.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing used to confirm that delivered functionality satisfies agreed needs.",
    options: [
      "XP values",
      "Acceptance testing",
      "Extreme Programming",
      "Person-hours",
    ],
    answer: "B",
    explanation:
      "The correct term is Acceptance testing because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An element that implements a coherent set of functionality.",
    options: [
      "Feature design knowledge",
      "Persona",
      "Feature",
      "User interface simplicity",
    ],
    answer: "C",
    explanation:
      "The correct term is Feature because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A narrative describing how a user or group of users might use a system.",
    options: ["User interface simplicity", "Feature", "Scenario", "Story"],
    answer: "C",
    explanation:
      "The correct term is Scenario because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A short user-centered requirement expressed in simple terms.",
    options: ["Persona", "Feature", "User interface simplicity", "Story"],
    answer: "D",
    explanation:
      "The correct term is Story because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A representation of a typical user used to guide design.",
    options: [
      "Story",
      "Persona",
      "Feature design knowledge",
      "Feature qualities",
    ],
    answer: "B",
    explanation:
      "The correct term is Persona because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Useful features are independent, coherent, and relevant.",
    options: ["Feature qualities", "Feature", "Scenario", "Persona"],
    answer: "A",
    explanation:
      "The correct term is Feature qualities because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Interfaces should not be unnecessarily complex.",
    options: [
      "Story",
      "User interface simplicity",
      "Feature design knowledge",
      "Persona",
    ],
    answer: "B",
    explanation:
      "The correct term is User interface simplicity because it matches that definition.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
    options: [
      "Scenario",
      "User interface simplicity",
      "Feature design knowledge",
      "Feature qualities",
    ],
    answer: "C",
    explanation:
      "The correct term is Feature design knowledge because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A linear process model in which activities are performed largely in sequence.",
    options: [
      "Spiral model",
      "Concurrent model",
      "Waterfall model",
      "Model selection",
    ],
    answer: "C",
    explanation:
      "The correct term is Waterfall model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model that delivers the system in a series of increments.",
    options: [
      "Waterfall model",
      "Software evolution",
      "Incremental model",
      "Prototyping model",
    ],
    answer: "C",
    explanation:
      "The correct term is Incremental model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model in which an early working version is built to clarify needs and ideas.",
    options: [
      "Component-based development",
      "Incremental model",
      "Prototyping model",
      "Concurrent model",
    ],
    answer: "C",
    explanation:
      "The correct term is Prototyping model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A risk-driven iterative model that combines prototyping with controlled stages.",
    options: [
      "Evolutionary models",
      "Prototyping model",
      "Model selection",
      "Spiral model",
    ],
    answer: "D",
    explanation:
      "The correct term is Spiral model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model that allows software activities to occur in parallel and move through different states.",
    options: [
      "Prescriptive models",
      "Concurrent model",
      "Spiral model",
      "Component-based development",
    ],
    answer: "B",
    explanation:
      "The correct term is Concurrent model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Building software by selecting, adapting, and integrating reusable components.",
    options: [
      "Unified Process",
      "Spiral model",
      "Component-based development",
      "Prescriptive models",
    ],
    answer: "C",
    explanation:
      "The correct term is Component-based development because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model that uses mathematically based specification and verification.",
    options: [
      "Incremental model",
      "Concurrent model",
      "Prescriptive models",
      "Formal methods model",
    ],
    answer: "D",
    explanation:
      "The correct term is Formal methods model because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
    options: [
      "Model selection",
      "Formal methods model",
      "Evolutionary models",
      "Unified Process",
    ],
    answer: "D",
    explanation:
      "The correct term is Unified Process because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Process models that define a planned, structured way of developing software.",
    options: [
      "Prescriptive models",
      "Formal methods model",
      "Evolutionary models",
      "Software evolution",
    ],
    answer: "A",
    explanation:
      "The correct term is Prescriptive models because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Process models that evolve the software through repeated cycles and feedback.",
    options: [
      "Spiral model",
      "Evolutionary models",
      "Concurrent model",
      "Waterfall model",
    ],
    answer: "B",
    explanation:
      "The correct term is Evolutionary models because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Modification of software after delivery to meet changing needs or contexts.",
    options: [
      "Concurrent model",
      "Prescriptive models",
      "Software evolution",
      "Component-based development",
    ],
    answer: "C",
    explanation:
      "The correct term is Software evolution because it matches that definition.",
  },
  {
    topic: "Process Models",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
    options: [
      "Prescriptive models",
      "Model selection",
      "Software evolution",
      "Formal methods model",
    ],
    answer: "B",
    explanation:
      "The correct term is Model selection because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
    options: [
      "Requirements engineering",
      "Analysis",
      "Non-functional requirement",
      "Domain requirement",
    ],
    answer: "A",
    explanation:
      "The correct term is Requirements engineering because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Anyone who affects or is affected by the system.",
    options: [
      "System requirement",
      "Validation",
      "Requirements engineering",
      "Stakeholder",
    ],
    answer: "D",
    explanation:
      "The correct term is Stakeholder because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Gathering requirements from stakeholders and other sources.",
    options: [
      "Functional requirement",
      "Requirements management",
      "Elicitation",
      "SRS",
    ],
    answer: "C",
    explanation:
      "The correct term is Elicitation because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Organizing, refining, and modeling gathered requirements.",
    options: [
      "Stakeholder",
      "Requirements engineering",
      "Elicitation work products",
      "Analysis",
    ],
    answer: "D",
    explanation:
      "The correct term is Analysis because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
    options: [
      "Validation",
      "System requirement",
      "Requirements management",
      "Negotiation",
    ],
    answer: "D",
    explanation:
      "The correct term is Negotiation because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Checking that requirements are correct, complete, consistent, realistic, and testable.",
    options: [
      "Validation",
      "Stakeholder",
      "Non-functional requirement",
      "Elicitation work products",
    ],
    answer: "A",
    explanation:
      "The correct term is Validation because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Controlling requirement changes and maintaining traceability over time.",
    options: [
      "Requirements management",
      "Elicitation",
      "Requirements engineering",
      "Elicitation work products",
    ],
    answer: "A",
    explanation:
      "The correct term is Requirements management because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A statement of a service or function the system must provide.",
    options: [
      "User requirement",
      "Negotiation",
      "Functional requirement",
      "Requirements management",
    ],
    answer: "C",
    explanation:
      "The correct term is Functional requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A constraint or quality attribute such as performance, reliability, or security.",
    options: [
      "SRS",
      "Negotiation",
      "Requirements management",
      "Non-functional requirement",
    ],
    answer: "D",
    explanation:
      "The correct term is Non-functional requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A requirement that arises from the application domain.",
    options: [
      "Analysis",
      "SRS",
      "Functional requirement",
      "Domain requirement",
    ],
    answer: "D",
    explanation:
      "The correct term is Domain requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: High-level statement of services and constraints understandable by users.",
    options: [
      "User requirement",
      "Elicitation",
      "Stakeholder",
      "Elicitation work products",
    ],
    answer: "A",
    explanation:
      "The correct term is User requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Detailed, precise description of system functions and constraints for developers.",
    options: [
      "System requirement",
      "Requirements engineering",
      "SRS",
      "Stakeholder",
    ],
    answer: "A",
    explanation:
      "The correct term is System requirement because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software Requirements Specification document.",
    options: [
      "SRS",
      "Requirements management",
      "Elicitation work products",
      "Stakeholder",
    ],
    answer: "A",
    explanation: "The correct term is SRS because it matches that definition.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
    options: [
      "Requirements management",
      "Elicitation work products",
      "Requirements engineering",
      "Domain requirement",
    ],
    answer: "B",
    explanation:
      "The correct term is Elicitation work products because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Unified Modeling Language, a standard visual language for software modeling.",
    options: ["Scenario-based model", "Class diagram", "Data model", "UML"],
    answer: "D",
    explanation: "The correct term is UML because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model based on use cases and user interactions.",
    options: [
      "Model-driven engineering",
      "Behavioral model",
      "Class-oriented model",
      "Scenario-based model",
    ],
    answer: "D",
    explanation:
      "The correct term is Scenario-based model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing data objects, attributes, and relationships.",
    options: [
      "Data model",
      "Scenario-based model",
      "Activity diagram",
      "Flow-oriented model",
    ],
    answer: "A",
    explanation:
      "The correct term is Data model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing analysis classes, attributes, operations, and relationships.",
    options: [
      "State diagram",
      "Structural model",
      "Behavioral model",
      "Class-oriented model",
    ],
    answer: "D",
    explanation:
      "The correct term is Class-oriented model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing how information moves and is transformed.",
    options: [
      "Activity diagram",
      "Flow-oriented model",
      "Scenario-based model",
      "Data model",
    ],
    answer: "B",
    explanation:
      "The correct term is Flow-oriented model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Model showing states, events, and dynamic behavior.",
    options: [
      "Structural model",
      "Activity diagram",
      "Flow-oriented model",
      "Behavioral model",
    ],
    answer: "D",
    explanation:
      "The correct term is Behavioral model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: UML diagram showing classes and their relationships.",
    options: [
      "State diagram",
      "Behavioral model",
      "Class diagram",
      "Behavioral vs structural",
    ],
    answer: "C",
    explanation:
      "The correct term is Class diagram because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: UML diagram showing workflow or processing sequence.",
    options: [
      "Structural model",
      "Flow-oriented model",
      "UML",
      "Activity diagram",
    ],
    answer: "D",
    explanation:
      "The correct term is Activity diagram because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: UML diagram showing states and transitions of an object or system.",
    options: [
      "Structural model",
      "Class-oriented model",
      "State diagram",
      "Flow-oriented model",
    ],
    answer: "C",
    explanation:
      "The correct term is State diagram because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A model emphasizing static organization.",
    options: [
      "Structural model",
      "Data model",
      "Class diagram",
      "Behavioral vs structural",
    ],
    answer: "A",
    explanation:
      "The correct term is Structural model because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Behavioral models show change over time; structural models show static organization.",
    options: [
      "State diagram",
      "UML",
      "Behavioral vs structural",
      "Structural model",
    ],
    answer: "C",
    explanation:
      "The correct term is Behavioral vs structural because it matches that definition.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An approach that gives models a central role in development and possible code generation.",
    options: [
      "Model-driven engineering",
      "Flow-oriented model",
      "Activity diagram",
      "Behavioral vs structural",
    ],
    answer: "A",
    explanation:
      "The correct term is Model-driven engineering because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: The fundamental organization of a system, its components, relationships, and guiding principles.",
    options: [
      "Patterns",
      "Information hiding",
      "Software architecture",
      "Modularity",
    ],
    answer: "C",
    explanation:
      "The correct term is Software architecture because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An architecture in which system functionality is organized into layers.",
    options: [
      "Information hiding",
      "Layered architecture",
      "Refactoring",
      "Data/class design",
    ],
    answer: "B",
    explanation:
      "The correct term is Layered architecture because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An architecture in which data passes through a sequence of transformation components.",
    options: [
      "Refinement",
      "Data/class design",
      "Pipe-and-filter",
      "Interface design",
    ],
    answer: "C",
    explanation:
      "The correct term is Pipe-and-filter because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Design activity that defines data structures and classes.",
    options: [
      "Layered architecture",
      "Data/class design",
      "Information hiding",
      "Modularity",
    ],
    answer: "B",
    explanation:
      "The correct term is Data/class design because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Design activity that defines how users or components interact with the system.",
    options: [
      "Layered architecture",
      "Interface design",
      "Refinement",
      "Data/class design",
    ],
    answer: "B",
    explanation:
      "The correct term is Interface design because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Focusing on the essential while suppressing unnecessary detail.",
    options: [
      "Patterns",
      "Abstraction",
      "Data/class design",
      "Layered architecture",
    ],
    answer: "B",
    explanation:
      "The correct term is Abstraction because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Decomposing software into manageable components.",
    options: [
      "Software architecture",
      "Modularity",
      "Abstraction",
      "Separation of concerns",
    ],
    answer: "B",
    explanation:
      "The correct term is Modularity because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Structuring software so different concerns are handled separately.",
    options: [
      "Layered architecture",
      "Separation of concerns",
      "Data/class design",
      "Interface design",
    ],
    answer: "B",
    explanation:
      "The correct term is Separation of concerns because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Concealing design decisions likely to change behind stable interfaces.",
    options: [
      "Layered architecture",
      "Information hiding",
      "Software architecture",
      "Abstraction",
    ],
    answer: "B",
    explanation:
      "The correct term is Information hiding because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Elaborating design detail in steps from abstract to concrete.",
    options: [
      "Pipe-and-filter",
      "Refinement",
      "Interface design",
      "Software architecture",
    ],
    answer: "B",
    explanation:
      "The correct term is Refinement because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Improving internal structure without changing observable behavior.",
    options: [
      "Abstraction",
      "Layered architecture",
      "Refactoring",
      "Interface design",
    ],
    answer: "C",
    explanation:
      "The correct term is Refactoring because it matches that definition.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Reusable solutions to recurring design problems.",
    options: [
      "Abstraction",
      "Layered architecture",
      "Patterns",
      "Software architecture",
    ],
    answer: "C",
    explanation:
      "The correct term is Patterns because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software delivered over a network from remote infrastructure.",
    options: [
      "Cloud-based software",
      "Privacy",
      "Data exchange issue",
      "Data transfer issue",
    ],
    answer: "A",
    explanation:
      "The correct term is Cloud-based software because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Data location and regulatory rules may restrict where personal data can be stored.",
    options: [
      "Multi-tenant system",
      "Reliability",
      "SaaS regulation issue",
      "Data transfer issue",
    ],
    answer: "C",
    explanation:
      "The correct term is SaaS regulation issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Network speed can limit response time when software relies on heavy data transfer.",
    options: [
      "Data transfer issue",
      "Authentication design",
      "Multi-instance system",
      "Safety",
    ],
    answer: "A",
    explanation:
      "The correct term is Data transfer issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Organizations may hesitate to hand over sensitive data to an external provider.",
    options: [
      "Reliability",
      "Safety",
      "Multi-instance system",
      "Data security issue",
    ],
    answer: "D",
    explanation:
      "The correct term is Data security issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Cloud systems need accessible APIs when data must move between services.",
    options: [
      "Data exchange issue",
      "Reliability",
      "Privacy",
      "Authentication design",
    ],
    answer: "A",
    explanation:
      "The correct term is Data exchange issue because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Service software may use local authentication, social login, or federated authentication.",
    options: [
      "Safety",
      "Data transfer issue",
      "Data security issue",
      "Authentication design",
    ],
    answer: "D",
    explanation:
      "The correct term is Authentication design because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A single running system instance serves multiple customers.",
    options: [
      "Multi-tenant system",
      "Data exchange issue",
      "Reliability",
      "Privacy",
    ],
    answer: "A",
    explanation:
      "The correct term is Multi-tenant system because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Separate copies of the system and database are allocated to different users or organizations.",
    options: [
      "Multi-instance system",
      "SaaS regulation issue",
      "Authentication design",
      "Multi-tenant system",
    ],
    answer: "A",
    explanation:
      "The correct term is Multi-instance system because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: An architecture based on small, independent services that collaborate.",
    options: ["Microservices", "Privacy", "Safety", "Reliability"],
    answer: "A",
    explanation:
      "The correct term is Microservices because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Probability that software performs required functions without failure for a specified time.",
    options: [
      "Data transfer issue",
      "Reliability",
      "Safety",
      "Multi-instance system",
    ],
    answer: "B",
    explanation:
      "The correct term is Reliability because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Property of avoiding or controlling harm-causing conditions.",
    options: [
      "Privacy",
      "Safety",
      "Data security issue",
      "Multi-instance system",
    ],
    answer: "B",
    explanation:
      "The correct term is Safety because it matches that definition.",
  },
  {
    topic: "Cloud, Microservices, Security, Reliability",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Protection of personal or sensitive information from inappropriate access or disclosure.",
    options: [
      "Multi-tenant system",
      "Data transfer issue",
      "Safety",
      "Privacy",
    ],
    answer: "D",
    explanation:
      "The correct term is Privacy because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: The degree to which software meets stated requirements and implicit expectations.",
    options: [
      "Cost of quality",
      "Validation testing",
      "Software quality",
      "SQA",
    ],
    answer: "C",
    explanation:
      "The correct term is Software quality because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A set of product quality dimensions such as performance, features, reliability, conformance, durability, serviceability, aesthetics, and perceived quality.",
    options: [
      "Software quality",
      "Integration testing",
      "Cost of quality",
      "Garvin dimensions",
    ],
    answer: "D",
    explanation:
      "The correct term is Garvin dimensions because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Pressure to release quickly and cheaply can conflict with the desire for high quality.",
    options: [
      "Unit testing",
      "Verification and validation",
      "Software quality",
      "Quality dilemma",
    ],
    answer: "D",
    explanation:
      "The correct term is Quality dilemma because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Costs associated with prevention, appraisal, and internal and external failures.",
    options: [
      "Unit testing",
      "System testing",
      "Cost of quality",
      "Verification and validation",
    ],
    answer: "C",
    explanation:
      "The correct term is Cost of quality because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Quality is supported by sound methods, good project management, quality control, and quality assurance.",
    options: [
      "System testing",
      "Achieving quality",
      "Validation testing",
      "Software quality",
    ],
    answer: "B",
    explanation:
      "The correct term is Achieving quality because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software Quality Assurance: activities that ensure processes and products conform to standards and plans.",
    options: ["Integration testing", "System testing", "SQA", "Testing"],
    answer: "C",
    explanation: "The correct term is SQA because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Execution and evaluation intended to reveal defects and build confidence in the software.",
    options: [
      "Testing",
      "Cost of quality",
      "Validation testing",
      "Unit testing",
    ],
    answer: "A",
    explanation:
      "The correct term is Testing because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Verification asks whether we built the product right; validation asks whether we built the right product.",
    options: [
      "Quality dilemma",
      "Verification and validation",
      "Garvin dimensions",
      "Software quality",
    ],
    answer: "B",
    explanation:
      "The correct term is Verification and validation because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing individual components or units.",
    options: [
      "Achieving quality",
      "Testing",
      "Software quality",
      "Unit testing",
    ],
    answer: "D",
    explanation:
      "The correct term is Unit testing because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing interactions among combined components.",
    options: [
      "Integration testing",
      "Achieving quality",
      "Verification and validation",
      "SQA",
    ],
    answer: "A",
    explanation:
      "The correct term is Integration testing because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing to confirm software satisfies requirements.",
    options: [
      "Software quality",
      "Validation testing",
      "Garvin dimensions",
      "SQA",
    ],
    answer: "B",
    explanation:
      "The correct term is Validation testing because it matches that definition.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Testing the complete integrated system.",
    options: ["Software quality", "Garvin dimensions", "SQA", "System testing"],
    answer: "D",
    explanation:
      "The correct term is System testing because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Integration of software development with deployment and operational support by closely connected teams.",
    options: ["DevOps", "Four Ps", "Continuous deployment", "Team toxicity"],
    answer: "A",
    explanation:
      "The correct term is DevOps because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Repository-based control of versions, changes, branching, and merging.",
    options: [
      "Four Ps",
      "Source code management",
      "Coordination approaches",
      "Ethical principles",
    ],
    answer: "B",
    explanation:
      "The correct term is Source code management because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Frequent integration of code changes into a shared baseline followed by automated build/testing.",
    options: [
      "Coordination approaches",
      "Infrastructure as code",
      "Continuous integration",
      "Four Ps",
    ],
    answer: "C",
    explanation:
      "The correct term is Continuous integration because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Automatic updating of the deployed version after changes pass the pipeline, especially for cloud services.",
    options: [
      "DevOps metrics",
      "Team toxicity",
      "Source code management",
      "Continuous deployment",
    ],
    answer: "D",
    explanation:
      "The correct term is Continuous deployment because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Defining infrastructure in machine-readable form so it can be provisioned automatically.",
    options: [
      "DevOps",
      "Continuous deployment",
      "Continuous integration",
      "Infrastructure as code",
    ],
    answer: "D",
    explanation:
      "The correct term is Infrastructure as code because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Measures such as deployment frequency, failed deployment rate, and mean time to recovery.",
    options: [
      "Source code management",
      "Continuous integration",
      "Continuous deployment",
      "DevOps metrics",
    ],
    answer: "D",
    explanation:
      "The correct term is DevOps metrics because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: People, Product, Process, and Project.",
    options: [
      "Infrastructure as code",
      "Four Ps",
      "Ethical principles",
      "Continuous integration",
    ],
    answer: "B",
    explanation:
      "The correct term is Four Ps because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: A harmful team environment that reduces trust, motivation, and effectiveness.",
    options: [
      "Coordination approaches",
      "Team toxicity",
      "Ethical principles",
      "Four Ps",
    ],
    answer: "B",
    explanation:
      "The correct term is Team toxicity because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Formal impersonal, formal interpersonal, and informal interpersonal methods of project coordination.",
    options: [
      "Coordination approaches",
      "DevOps",
      "Team toxicity",
      "Continuous deployment",
    ],
    answer: "A",
    explanation:
      "The correct term is Coordination approaches because it matches that definition.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Easy",
    question:
      "Which term best matches this description: Software professionals should act with honesty, integrity, competence, and public responsibility.",
    options: [
      "DevOps",
      "Ethical principles",
      "DevOps metrics",
      "Continuous deployment",
    ],
    answer: "B",
    explanation:
      "The correct term is Ethical principles because it matches that definition.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Software engineering?",
    options: [
      "Software does not wear out physically but deteriorates because changes increase complexity.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
    ],
    answer: "C",
    explanation:
      "Software engineering is best described as: Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Software crisis?",
    options: [
      "The difficulty of building large systems that were reliable, on time, and within budget.",
      "Software does not wear out physically but deteriorates because changes increase complexity.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
    ],
    answer: "A",
    explanation:
      "Software crisis is best described as: The difficulty of building large systems that were reliable, on time, and within budget.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Nature of software?",
    options: [
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
      "Software is abstract and intangible and is not constrained by physical manufacturing limits.",
      "Maintainability, dependability/security, efficiency, and acceptability/usability.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
    ],
    answer: "B",
    explanation:
      "Nature of software is best described as: Software is abstract and intangible and is not constrained by physical manufacturing limits.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Professional software?",
    options: [
      "Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
      "Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
    ],
    answer: "A",
    explanation:
      "Professional software is best described as: Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Software process?",
    options: [
      "The difficulty of building large systems that were reliable, on time, and within budget.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
      "Engineering discipline concerned with all aspects of software production, from specification to maintenance.",
    ],
    answer: "C",
    explanation:
      "Software process is best described as: A structured set of activities needed to specify, develop, validate, and evolve software.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Framework activities?",
    options: [
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
      "Software does not wear out physically but deteriorates because changes increase complexity.",
      "Software is abstract and intangible and is not constrained by physical manufacturing limits.",
    ],
    answer: "A",
    explanation:
      "Framework activities is best described as: Generic process activities such as communication, planning, modeling, construction, and deployment.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Essential attributes of good software?",
    options: [
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
      "Generic process activities such as communication, planning, modeling, construction, and deployment.",
      "Software is abstract and intangible and is not constrained by physical manufacturing limits.",
      "Maintainability, dependability/security, efficiency, and acceptability/usability.",
    ],
    answer: "D",
    explanation:
      "Essential attributes of good software is best described as: Maintainability, dependability/security, efficiency, and acceptability/usability.",
  },
  {
    topic: "Foundations",
    difficulty: "Medium",
    question: "What best describes Software deterioration?",
    options: [
      "Software intended for use by someone other than its developer, usually built by teams and maintained over time.",
      "The difficulty of building large systems that were reliable, on time, and within budget.",
      "A structured set of activities needed to specify, develop, validate, and evolve software.",
      "Software does not wear out physically but deteriorates because changes increase complexity.",
    ],
    answer: "D",
    explanation:
      "Software deterioration is best described as: Software does not wear out physically but deteriorates because changes increase complexity.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Generic software?",
    options: [
      "Fast release of software products to capture market opportunity and user feedback.",
      "Adding features in response to requests without checking general usefulness or better alternatives.",
      "Software products built for a broad market and many customers.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
    ],
    answer: "C",
    explanation:
      "Generic software is best described as: Software products built for a broad market and many customers.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Custom software?",
    options: [
      "Software developed for a specific customer or organization.",
      "Software driven by customer requirements and developed under contract or dedicated project conditions.",
      "A software product that includes functionality on which other applications can be built.",
      "Fast release of software products to capture market opportunity and user feedback.",
    ],
    answer: "A",
    explanation:
      "Custom software is best described as: Software developed for a specific customer or organization.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Project-based software?",
    options: [
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
      "Software driven by customer requirements and developed under contract or dedicated project conditions.",
      "Software developed for a specific customer or organization.",
      "Fast release of software products to capture market opportunity and user feedback.",
    ],
    answer: "B",
    explanation:
      "Project-based software is best described as: Software driven by customer requirements and developed under contract or dedicated project conditions.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Product software engineering?",
    options: [
      "Software driven by customer requirements and developed under contract or dedicated project conditions.",
      "A software product that includes functionality on which other applications can be built.",
      "A simple statement that defines the essence of the product to be developed.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
    ],
    answer: "D",
    explanation:
      "Product software engineering is best described as: Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Product vision?",
    options: [
      "A simple statement that defines the essence of the product to be developed.",
      "Fast release of software products to capture market opportunity and user feedback.",
      "Software developed for a specific customer or organization.",
      "Software driven by customer requirements and developed under contract or dedicated project conditions.",
    ],
    answer: "A",
    explanation:
      "Product vision is best described as: A simple statement that defines the essence of the product to be developed.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Platform?",
    options: [
      "A simple statement that defines the essence of the product to be developed.",
      "A software product that includes functionality on which other applications can be built.",
      "Software developed for a specific customer or organization.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
    ],
    answer: "B",
    explanation:
      "Platform is best described as: A software product that includes functionality on which other applications can be built.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Feature creep?",
    options: [
      "A software product that includes functionality on which other applications can be built.",
      "Adding features in response to requests without checking general usefulness or better alternatives.",
      "Software developed for a specific customer or organization.",
      "Development driven by a business opportunity and a planned product roadmap rather than a single customer contract.",
    ],
    answer: "B",
    explanation:
      "Feature creep is best described as: Adding features in response to requests without checking general usefulness or better alternatives.",
  },
  {
    topic: "Software Products",
    difficulty: "Medium",
    question: "What best describes Rapid delivery?",
    options: [
      "Fast release of software products to capture market opportunity and user feedback.",
      "A software product that includes functionality on which other applications can be built.",
      "Software products built for a broad market and many customers.",
      "Software developed for a specific customer or organization.",
    ],
    answer: "A",
    explanation:
      "Rapid delivery is best described as: Fast release of software products to capture market opportunity and user feedback.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Agility?",
    options: [
      "Ability to respond quickly and effectively to change while still delivering useful software.",
      "Agile prefers adapting plans and software when needs change.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
    ],
    answer: "A",
    explanation:
      "Agility is best described as: Ability to respond quickly and effectively to change while still delivering useful software.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Agile manifesto?",
    options: [
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Agile prefers adapting plans and software when needs change.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
    ],
    answer: "A",
    explanation:
      "Agile manifesto is best described as: A call to uncover better ways of developing software by doing it and helping others do it.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Working software over documentation?",
    options: [
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Agile fits environments with changing requirements and close customer feedback.",
    ],
    answer: "C",
    explanation:
      "Working software over documentation is best described as: Agile values working software more than comprehensive documentation, though documentation still has a role.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Customer collaboration?",
    options: [
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
      "Agile prefers adapting plans and software when needs change.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Software is delivered in small usable increments.",
    ],
    answer: "A",
    explanation:
      "Customer collaboration is best described as: Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Responding to change?",
    options: [
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
      "Agile prefers adapting plans and software when needs change.",
      "Agile fits environments with changing requirements and close customer feedback.",
      "A call to uncover better ways of developing software by doing it and helping others do it.",
    ],
    answer: "B",
    explanation:
      "Responding to change is best described as: Agile prefers adapting plans and software when needs change.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Incremental delivery?",
    options: [
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
      "Agile prefers adapting plans and software when needs change.",
      "Software is delivered in small usable increments.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
    ],
    answer: "C",
    explanation:
      "Incremental delivery is best described as: Software is delivered in small usable increments.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Agile suitability?",
    options: [
      "Agile fits environments with changing requirements and close customer feedback.",
      "Ability to respond quickly and effectively to change while still delivering useful software.",
      "A call to uncover better ways of developing software by doing it and helping others do it.",
      "Agile values working software more than comprehensive documentation, though documentation still has a role.",
    ],
    answer: "A",
    explanation:
      "Agile suitability is best described as: Agile fits environments with changing requirements and close customer feedback.",
  },
  {
    topic: "Agile",
    difficulty: "Medium",
    question: "What best describes Agile limitation?",
    options: [
      "Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
      "Ability to respond quickly and effectively to change while still delivering useful software.",
      "Agile prefers adapting plans and software when needs change.",
      "Agile favors continuous collaboration with users or customers over rigid contract negotiation.",
    ],
    answer: "A",
    explanation:
      "Agile limitation is best described as: Agile is less suitable when heavy regulation, large distributed teams, or safety-critical demands require extensive formality.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Product backlog?",
    options: [
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "Prioritized list of desired product work items.",
      "A measure of effort estimating how long one person would take to implement a backlog item.",
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
    ],
    answer: "B",
    explanation:
      "Product backlog is best described as: Prioritized list of desired product work items.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Sprint?",
    options: [
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
      "A measure of effort estimating how long one person would take to implement a backlog item.",
    ],
    answer: "B",
    explanation:
      "Sprint is best described as: A fixed time-box in Scrum during which selected backlog items are implemented.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Increment?",
    options: [
      "Communication, simplicity, feedback, courage, and respect.",
      "A potentially usable version of the product produced at the end of an iteration or sprint.",
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "Prioritized list of desired product work items.",
    ],
    answer: "B",
    explanation:
      "Increment is best described as: A potentially usable version of the product produced at the end of an iteration or sprint.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Daily scrum?",
    options: [
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
      "Communication, simplicity, feedback, courage, and respect.",
      "Short daily meeting for team synchronization.",
      "A measure of effort estimating how long one person would take to implement a backlog item.",
    ],
    answer: "C",
    explanation:
      "Daily scrum is best described as: Short daily meeting for team synchronization.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Person-hours?",
    options: [
      "Communication, simplicity, feedback, courage, and respect.",
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
      "A measure of effort estimating how long one person would take to implement a backlog item.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
    ],
    answer: "C",
    explanation:
      "Person-hours is best described as: A measure of effort estimating how long one person would take to implement a backlog item.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Extreme Programming?",
    options: [
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "Short daily meeting for team synchronization.",
      "Communication, simplicity, feedback, courage, and respect.",
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
    ],
    answer: "D",
    explanation:
      "Extreme Programming is best described as: An agile approach that emphasizes disciplined coding practices and fast feedback.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes XP values?",
    options: [
      "Communication, simplicity, feedback, courage, and respect.",
      "Prioritized list of desired product work items.",
      "A fixed time-box in Scrum during which selected backlog items are implemented.",
      "An agile approach that emphasizes disciplined coding practices and fast feedback.",
    ],
    answer: "A",
    explanation:
      "XP values is best described as: Communication, simplicity, feedback, courage, and respect.",
  },
  {
    topic: "Scrum and XP",
    difficulty: "Medium",
    question: "What best describes Acceptance testing?",
    options: [
      "Short daily meeting for team synchronization.",
      "Communication, simplicity, feedback, courage, and respect.",
      "Testing used to confirm that delivered functionality satisfies agreed needs.",
      "Prioritized list of desired product work items.",
    ],
    answer: "C",
    explanation:
      "Acceptance testing is best described as: Testing used to confirm that delivered functionality satisfies agreed needs.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Feature?",
    options: [
      "An element that implements a coherent set of functionality.",
      "Interfaces should not be unnecessarily complex.",
      "A narrative describing how a user or group of users might use a system.",
      "A short user-centered requirement expressed in simple terms.",
    ],
    answer: "A",
    explanation:
      "Feature is best described as: An element that implements a coherent set of functionality.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Scenario?",
    options: [
      "A short user-centered requirement expressed in simple terms.",
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "Interfaces should not be unnecessarily complex.",
      "A narrative describing how a user or group of users might use a system.",
    ],
    answer: "D",
    explanation:
      "Scenario is best described as: A narrative describing how a user or group of users might use a system.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Story?",
    options: [
      "A representation of a typical user used to guide design.",
      "A short user-centered requirement expressed in simple terms.",
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "A narrative describing how a user or group of users might use a system.",
    ],
    answer: "B",
    explanation:
      "Story is best described as: A short user-centered requirement expressed in simple terms.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Persona?",
    options: [
      "Useful features are independent, coherent, and relevant.",
      "A narrative describing how a user or group of users might use a system.",
      "A representation of a typical user used to guide design.",
      "An element that implements a coherent set of functionality.",
    ],
    answer: "C",
    explanation:
      "Persona is best described as: A representation of a typical user used to guide design.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Feature qualities?",
    options: [
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "Interfaces should not be unnecessarily complex.",
      "An element that implements a coherent set of functionality.",
      "Useful features are independent, coherent, and relevant.",
    ],
    answer: "D",
    explanation:
      "Feature qualities is best described as: Useful features are independent, coherent, and relevant.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes User interface simplicity?",
    options: [
      "Useful features are independent, coherent, and relevant.",
      "A short user-centered requirement expressed in simple terms.",
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "Interfaces should not be unnecessarily complex.",
    ],
    answer: "D",
    explanation:
      "User interface simplicity is best described as: Interfaces should not be unnecessarily complex.",
  },
  {
    topic: "Features, Stories, Scenarios",
    difficulty: "Medium",
    question: "What best describes Feature design knowledge?",
    options: [
      "Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
      "Interfaces should not be unnecessarily complex.",
      "An element that implements a coherent set of functionality.",
      "A representation of a typical user used to guide design.",
    ],
    answer: "A",
    explanation:
      "Feature design knowledge is best described as: Feature design draws on user knowledge, domain knowledge, product knowledge, and technology knowledge.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Waterfall model?",
    options: [
      "A linear process model in which activities are performed largely in sequence.",
      "A model that uses mathematically based specification and verification.",
      "Modification of software after delivery to meet changing needs or contexts.",
      "A risk-driven iterative model that combines prototyping with controlled stages.",
    ],
    answer: "A",
    explanation:
      "Waterfall model is best described as: A linear process model in which activities are performed largely in sequence.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Incremental model?",
    options: [
      "Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
      "A model that delivers the system in a series of increments.",
      "Process models that evolve the software through repeated cycles and feedback.",
      "An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
    ],
    answer: "B",
    explanation:
      "Incremental model is best described as: A model that delivers the system in a series of increments.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Prototyping model?",
    options: [
      "Process models that evolve the software through repeated cycles and feedback.",
      "Modification of software after delivery to meet changing needs or contexts.",
      "A model in which an early working version is built to clarify needs and ideas.",
      "A linear process model in which activities are performed largely in sequence.",
    ],
    answer: "C",
    explanation:
      "Prototyping model is best described as: A model in which an early working version is built to clarify needs and ideas.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Spiral model?",
    options: [
      "A risk-driven iterative model that combines prototyping with controlled stages.",
      "Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
      "Process models that evolve the software through repeated cycles and feedback.",
      "A model that uses mathematically based specification and verification.",
    ],
    answer: "A",
    explanation:
      "Spiral model is best described as: A risk-driven iterative model that combines prototyping with controlled stages.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Concurrent model?",
    options: [
      "A model that allows software activities to occur in parallel and move through different states.",
      "A model that delivers the system in a series of increments.",
      "Process models that define a planned, structured way of developing software.",
      "Modification of software after delivery to meet changing needs or contexts.",
    ],
    answer: "A",
    explanation:
      "Concurrent model is best described as: A model that allows software activities to occur in parallel and move through different states.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Component-based development?",
    options: [
      "Modification of software after delivery to meet changing needs or contexts.",
      "Process models that evolve the software through repeated cycles and feedback.",
      "Building software by selecting, adapting, and integrating reusable components.",
      "A model that uses mathematically based specification and verification.",
    ],
    answer: "C",
    explanation:
      "Component-based development is best described as: Building software by selecting, adapting, and integrating reusable components.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Formal methods model?",
    options: [
      "A model that uses mathematically based specification and verification.",
      "Building software by selecting, adapting, and integrating reusable components.",
      "A model in which an early working version is built to clarify needs and ideas.",
      "A risk-driven iterative model that combines prototyping with controlled stages.",
    ],
    answer: "A",
    explanation:
      "Formal methods model is best described as: A model that uses mathematically based specification and verification.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Unified Process?",
    options: [
      "A model that uses mathematically based specification and verification.",
      "Process models that evolve the software through repeated cycles and feedback.",
      "Building software by selecting, adapting, and integrating reusable components.",
      "An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
    ],
    answer: "D",
    explanation:
      "Unified Process is best described as: An iterative process framework organized into phases such as inception, elaboration, construction, and transition.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Prescriptive models?",
    options: [
      "Modification of software after delivery to meet changing needs or contexts.",
      "Process models that define a planned, structured way of developing software.",
      "Building software by selecting, adapting, and integrating reusable components.",
      "A model that allows software activities to occur in parallel and move through different states.",
    ],
    answer: "B",
    explanation:
      "Prescriptive models is best described as: Process models that define a planned, structured way of developing software.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Evolutionary models?",
    options: [
      "Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
      "A risk-driven iterative model that combines prototyping with controlled stages.",
      "A model that allows software activities to occur in parallel and move through different states.",
      "Process models that evolve the software through repeated cycles and feedback.",
    ],
    answer: "D",
    explanation:
      "Evolutionary models is best described as: Process models that evolve the software through repeated cycles and feedback.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Software evolution?",
    options: [
      "Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
      "Modification of software after delivery to meet changing needs or contexts.",
      "A model that delivers the system in a series of increments.",
      "Process models that evolve the software through repeated cycles and feedback.",
    ],
    answer: "B",
    explanation:
      "Software evolution is best described as: Modification of software after delivery to meet changing needs or contexts.",
  },
  {
    topic: "Process Models",
    difficulty: "Medium",
    question: "What best describes Model selection?",
    options: [
      "A model that allows software activities to occur in parallel and move through different states.",
      "A model that delivers the system in a series of increments.",
      "Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
      "A model that uses mathematically based specification and verification.",
    ],
    answer: "C",
    explanation:
      "Model selection is best described as: Choice of process model should depend on project size, risk, requirements stability, and domain constraints.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Requirements engineering?",
    options: [
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "Gathering requirements from stakeholders and other sources.",
    ],
    answer: "C",
    explanation:
      "Requirements engineering is best described as: The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Stakeholder?",
    options: [
      "Software Requirements Specification document.",
      "Anyone who affects or is affected by the system.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "A requirement that arises from the application domain.",
    ],
    answer: "B",
    explanation:
      "Stakeholder is best described as: Anyone who affects or is affected by the system.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Elicitation?",
    options: [
      "Controlling requirement changes and maintaining traceability over time.",
      "A requirement that arises from the application domain.",
      "Gathering requirements from stakeholders and other sources.",
      "Software Requirements Specification document.",
    ],
    answer: "C",
    explanation:
      "Elicitation is best described as: Gathering requirements from stakeholders and other sources.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Analysis?",
    options: [
      "Controlling requirement changes and maintaining traceability over time.",
      "A constraint or quality attribute such as performance, reliability, or security.",
      "Organizing, refining, and modeling gathered requirements.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
    ],
    answer: "C",
    explanation:
      "Analysis is best described as: Organizing, refining, and modeling gathered requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Negotiation?",
    options: [
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "Software Requirements Specification document.",
      "Gathering requirements from stakeholders and other sources.",
      "A statement of a service or function the system must provide.",
    ],
    answer: "A",
    explanation:
      "Negotiation is best described as: Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Validation?",
    options: [
      "Organizing, refining, and modeling gathered requirements.",
      "Checking that requirements are correct, complete, consistent, realistic, and testable.",
      "Software Requirements Specification document.",
      "Gathering requirements from stakeholders and other sources.",
    ],
    answer: "B",
    explanation:
      "Validation is best described as: Checking that requirements are correct, complete, consistent, realistic, and testable.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Requirements management?",
    options: [
      "Controlling requirement changes and maintaining traceability over time.",
      "High-level statement of services and constraints understandable by users.",
      "A requirement that arises from the application domain.",
      "Anyone who affects or is affected by the system.",
    ],
    answer: "A",
    explanation:
      "Requirements management is best described as: Controlling requirement changes and maintaining traceability over time.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Functional requirement?",
    options: [
      "Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
      "Checking that requirements are correct, complete, consistent, realistic, and testable.",
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "A statement of a service or function the system must provide.",
    ],
    answer: "D",
    explanation:
      "Functional requirement is best described as: A statement of a service or function the system must provide.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Non-functional requirement?",
    options: [
      "The activities involved in discovering, analyzing, documenting, validating, and managing requirements.",
      "A constraint or quality attribute such as performance, reliability, or security.",
      "Detailed, precise description of system functions and constraints for developers.",
      "Organizing, refining, and modeling gathered requirements.",
    ],
    answer: "B",
    explanation:
      "Non-functional requirement is best described as: A constraint or quality attribute such as performance, reliability, or security.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Domain requirement?",
    options: [
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "A constraint or quality attribute such as performance, reliability, or security.",
      "A requirement that arises from the application domain.",
      "Gathering requirements from stakeholders and other sources.",
    ],
    answer: "C",
    explanation:
      "Domain requirement is best described as: A requirement that arises from the application domain.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes User requirement?",
    options: [
      "High-level statement of services and constraints understandable by users.",
      "A constraint or quality attribute such as performance, reliability, or security.",
      "Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
      "Anyone who affects or is affected by the system.",
    ],
    answer: "A",
    explanation:
      "User requirement is best described as: High-level statement of services and constraints understandable by users.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes System requirement?",
    options: [
      "Organizing, refining, and modeling gathered requirements.",
      "Resolving conflicts among competing stakeholder needs to reach an agreed set of requirements.",
      "Detailed, precise description of system functions and constraints for developers.",
      "A statement of a service or function the system must provide.",
    ],
    answer: "C",
    explanation:
      "System requirement is best described as: Detailed, precise description of system functions and constraints for developers.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes SRS?",
    options: [
      "Controlling requirement changes and maintaining traceability over time.",
      "High-level statement of services and constraints understandable by users.",
      "Software Requirements Specification document.",
      "Checking that requirements are correct, complete, consistent, realistic, and testable.",
    ],
    answer: "C",
    explanation:
      "SRS is best described as: Software Requirements Specification document.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What best describes Elicitation work products?",
    options: [
      "Organizing, refining, and modeling gathered requirements.",
      "High-level statement of services and constraints understandable by users.",
      "Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
      "A requirement that arises from the application domain.",
    ],
    answer: "C",
    explanation:
      "Elicitation work products is best described as: Outputs may include statements of need, stakeholder lists, scenarios, use cases, and preliminary models.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes UML?",
    options: [
      "UML diagram showing classes and their relationships.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "UML diagram showing states and transitions of an object or system.",
      "Behavioral models show change over time; structural models show static organization.",
    ],
    answer: "B",
    explanation:
      "UML is best described as: Unified Modeling Language, a standard visual language for software modeling.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Scenario-based model?",
    options: [
      "Model based on use cases and user interactions.",
      "Model showing data objects, attributes, and relationships.",
      "Behavioral models show change over time; structural models show static organization.",
      "UML diagram showing workflow or processing sequence.",
    ],
    answer: "A",
    explanation:
      "Scenario-based model is best described as: Model based on use cases and user interactions.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Data model?",
    options: [
      "An approach that gives models a central role in development and possible code generation.",
      "UML diagram showing workflow or processing sequence.",
      "Model showing how information moves and is transformed.",
      "Model showing data objects, attributes, and relationships.",
    ],
    answer: "D",
    explanation:
      "Data model is best described as: Model showing data objects, attributes, and relationships.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Class-oriented model?",
    options: [
      "UML diagram showing states and transitions of an object or system.",
      "An approach that gives models a central role in development and possible code generation.",
      "Behavioral models show change over time; structural models show static organization.",
      "Model showing analysis classes, attributes, operations, and relationships.",
    ],
    answer: "D",
    explanation:
      "Class-oriented model is best described as: Model showing analysis classes, attributes, operations, and relationships.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Flow-oriented model?",
    options: [
      "An approach that gives models a central role in development and possible code generation.",
      "A model emphasizing static organization.",
      "Model showing states, events, and dynamic behavior.",
      "Model showing how information moves and is transformed.",
    ],
    answer: "D",
    explanation:
      "Flow-oriented model is best described as: Model showing how information moves and is transformed.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Behavioral model?",
    options: [
      "Model showing states, events, and dynamic behavior.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "An approach that gives models a central role in development and possible code generation.",
      "Model showing how information moves and is transformed.",
    ],
    answer: "A",
    explanation:
      "Behavioral model is best described as: Model showing states, events, and dynamic behavior.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Class diagram?",
    options: [
      "A model emphasizing static organization.",
      "Model showing analysis classes, attributes, operations, and relationships.",
      "Model showing states, events, and dynamic behavior.",
      "UML diagram showing classes and their relationships.",
    ],
    answer: "D",
    explanation:
      "Class diagram is best described as: UML diagram showing classes and their relationships.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Activity diagram?",
    options: [
      "Model showing data objects, attributes, and relationships.",
      "UML diagram showing classes and their relationships.",
      "Model showing states, events, and dynamic behavior.",
      "UML diagram showing workflow or processing sequence.",
    ],
    answer: "D",
    explanation:
      "Activity diagram is best described as: UML diagram showing workflow or processing sequence.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes State diagram?",
    options: [
      "UML diagram showing states and transitions of an object or system.",
      "Model showing how information moves and is transformed.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "Model showing states, events, and dynamic behavior.",
    ],
    answer: "A",
    explanation:
      "State diagram is best described as: UML diagram showing states and transitions of an object or system.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Structural model?",
    options: [
      "Model showing states, events, and dynamic behavior.",
      "Unified Modeling Language, a standard visual language for software modeling.",
      "A model emphasizing static organization.",
      "Behavioral models show change over time; structural models show static organization.",
    ],
    answer: "C",
    explanation:
      "Structural model is best described as: A model emphasizing static organization.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Behavioral vs structural?",
    options: [
      "Model based on use cases and user interactions.",
      "Behavioral models show change over time; structural models show static organization.",
      "Model showing states, events, and dynamic behavior.",
      "Model showing analysis classes, attributes, operations, and relationships.",
    ],
    answer: "B",
    explanation:
      "Behavioral vs structural is best described as: Behavioral models show change over time; structural models show static organization.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What best describes Model-driven engineering?",
    options: [
      "Model showing how information moves and is transformed.",
      "An approach that gives models a central role in development and possible code generation.",
      "Model showing data objects, attributes, and relationships.",
      "UML diagram showing classes and their relationships.",
    ],
    answer: "B",
    explanation:
      "Model-driven engineering is best described as: An approach that gives models a central role in development and possible code generation.",
  },

  // --- NEW ADVANCED QUIZ QUESTIONS ---

  {
    topic: "Cloud and Modern Architecture",
    difficulty: "Hard",
    question: "In the context of Cloud Computing, what defines Infrastructure as a Service (IaaS)?",
    options: [
      "The consumer manages the applications and perhaps the operating system, while the provider manages the underlying hardware, servers, and storage.",
      "The provider manages all aspects of the application, including the interface and data storage.",
      "The consumer writes code for specific functions that are triggered by events, with no server management.",
      "The provider provides a development platform including languages and libraries, while the consumer manages the app life cycle.",
    ],
    answer: "A",
    explanation: "IaaS gives the consumer control over operating systems, storage, and deployed applications, while the provider controls the physical infrastructure.",
  },
  {
    topic: "Cloud and Modern Architecture",
    difficulty: "Hard",
    question: "What is the primary characteristic of Platform as a Service (PaaS)?",
    options: [
      "Users pay only for the execution time of individual code functions.",
      "The provider delivers a pre-configured development and deployment environment, including runtime libraries and middleware.",
      "Hardware is virtualized and provided as a raw resource.",
      "Data is automatically synchronized across multiple organizational tenants.",
    ],
    answer: "B",
    explanation: "PaaS provides a platform allowing customers to develop, run, and manage applications without the complexity of building and maintaining the infrastructure.",
  },
  {
    topic: "Cloud and Modern Architecture",
    difficulty: "Hard",
    question: "What is a major security challenge unique to Multi-tenant SaaS environments?",
    options: [
      "Physical theft of servers from the data center.",
      "Information leakage or data 'bleeding' between different organizational tenants using the same database.",
      "Slow network speeds causing packet loss.",
      "Lack of support for mobile devices.",
    ],
    answer: "B",
    explanation: "In multi-tenant systems, ensuring that one customer cannot see another customer's data is a critical and complex security concern.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Hard",
    question: "According to the ACM/IEEE Software Engineering Code of Ethics, what is the highest priority for a software engineer?",
    options: [
      "Satisfying the employer's requirements at all costs.",
      "Ensuring the product is delivered on time, regardless of minor safety bugs.",
      "Acting consistently with the public interest.",
      "Advancing the engineer's personal career and reputation.",
    ],
    answer: "C",
    explanation: "Principle 1 of the Code of Ethics states that software engineers shall act consistently with the public interest.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Hard",
    question: "What does 'Brooks's Law' state regarding software project management?",
    options: [
      "Software complexity increases exponentially with the number of modules.",
      "Adding manpower to a late software project makes it later.",
      "The cost of fixing a bug increases the later it is found in the lifecycle.",
      "A developer's productivity is halved for every interruption.",
    ],
    answer: "B",
    explanation: "Brooks's Law highlights that the communication overhead of bringing new people onto a late project often outweighs their contribution.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Hard",
    question: "What is 'Cyclomatic Complexity' used to measure?",
    options: [
      "The number of lines of code in a program.",
      "The number of linearly independent paths through a program's source code.",
      "The speed at which a program executes a specific loop.",
      "The number of users that can simultaneously access a system.",
    ],
    answer: "B",
    explanation: "Cyclomatic complexity provides a quantitative measure of the logical complexity of a program, indicating how many test cases are needed.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Hard",
    question: "What is the primary purpose of 'Requirements Negotiation'?",
    options: [
      "To convince the customer that the developer's idea is better.",
      "To resolve conflicts between stakeholders and reach an agreed set of requirements that are feasible within budget.",
      "To determine which developer will work on which requirement.",
      "To finalize the legal contract and payment terms.",
    ],
    answer: "B",
    explanation: "Negotiation ensures that all stakeholders agree on a realistic and achievable set of requirements.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Hard",
    question: "In software design, what is 'Information Hiding'?",
    options: [
      "Encrypting the source code to prevent competitors from reading it.",
      "Concealing internal design decisions or data structures behind stable interfaces to limit change impact.",
      "Restricting user access to administrative features.",
      "Storing sensitive data in hidden partitions on the disk.",
    ],
    answer: "B",
    explanation: "Information hiding (encapsulation) reduces coupling by ensuring that one module's internal changes don't require changes in others.",
  },
  {
    topic: "Cloud and Modern Architecture",
    difficulty: "Medium",
    question: "What is 'Infrastructure as Code' (IaC)?",
    options: [
      "Writing manual instructions for IT staff to follow.",
      "Managing and provisioning infrastructure through machine-readable definition files.",
      "Hard-coding IP addresses directly into the application source code.",
      "Outsourcing all server management to a third-party company.",
    ],
    answer: "B",
    explanation: "IaC allows infrastructure to be treated like software, enabling version control and automated deployment.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "What is 'Regression Testing'?",
    options: [
      "Testing a system to see how many errors it can generate per hour.",
      "Re-testing previously verified software after changes to ensure no new bugs were introduced.",
      "Testing the system beyond its operational limits.",
      "Asking users to provide feedback on the UI design.",
    ],
    answer: "B",
    explanation: "Regression testing ensures that updates or bug fixes haven't 'broken' existing features.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Hard",
    question: "What is the 'Cost of Quality' component related to find and fix bugs before release?",
    options: [
      "Prevention costs.",
      "Internal failure costs.",
      "Appraisal costs.",
      "External failure costs.",
    ],
    answer: "B",
    explanation: "Internal failure costs are incurred when defects are found by the team before the product reaches the customer.",
  },
  {
    topic: "DevOps, Teams, Ethics",
    difficulty: "Medium",
    question: "In Software Project Management, what are the four 'Ps'?",
    options: [
      "Programming, Planning, Proofing, Publishing.",
      "People, Product, Process, Project.",
      "Performance, Price, Portability, Precision.",
      "Prioritization, Procurement, Prototyping, Packaging.",
    ],
    answer: "B",
    explanation: "The 4 Ps represent the critical elements that must be managed for a successful software project.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Hard",
    question: "What is the main goal of 'Refactoring'?",
    options: [
      "To add new features requested by the client.",
      "To improve the internal structure of code without changing its external behavior.",
      "To rewrite the software into a different programming language.",
      "To reduce the size of the compiled executable file.",
    ],
    answer: "B",
    explanation: "Refactoring improves maintainability and readability by cleaning up technical debt.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Medium",
    question: "What is a 'Non-functional Requirement'?",
    options: [
      "A feature that is not yet implemented in the system.",
      "A constraint on the system's operation or a quality attribute like security or performance.",
      "A requirement that the user doesn't actually need.",
      "A bug report from a previous version of the software.",
    ],
    answer: "B",
    explanation: "Non-functional requirements specify *how* the system should behave, rather than *what* it should do.",
  },
  {
    topic: "Modern Technology",
    difficulty: "Hard",
    question: "Which cloud deployment model provides the most control but the highest maintenance effort?",
    options: [
      "Public Cloud.",
      "Private Cloud.",
      "Hybrid Cloud.",
      "SaaS.",
    ],
    answer: "B",
    explanation: "A Private Cloud is dedicated to one organization, offering total control over security and infrastructure but requiring full internal management.",
  },
  {
    topic: "Process Models",
    difficulty: "Hard",
    question: "In the Unified Process (UP), what happens during the 'Inception' phase?",
    back: "The team defines the scope of the project and determines its feasibility.",
    options: [
      "The team codes the entire system.",
      "The team defines the scope, basic architecture, and feasibility of the project.",
      "The software is handed over to the customer.",
      "Final testing and bug fixing occur.",
    ],
    answer: "B",
    explanation: "Inception is about establishing the business case and scope, not full-scale construction.",
  },
  {
    topic: "Modeling and UML",
    difficulty: "Medium",
    question: "What is 'Multiplicity' in a UML class diagram?",
    options: [
      "The number of classes in the diagram.",
      "The number of instances of one class that can be linked to one instance of another class.",
      "The speed at which objects are created at runtime.",
      "The number of subclasses inherited from a parent class.",
    ],
    answer: "B",
    explanation: "Multiplicity (e.g., 1..*) defines the quantitative relationship between associated classes.",
  },
  {
    topic: "Design and Architecture",
    difficulty: "Hard",
    question: "What is the benefit of 'Separation of Concerns'?",
    options: [
      "It makes the software faster to execute.",
      "It improves maintainability by ensuring each part of the program addresses a distinct concern.",
      "It allows the program to run on multiple operating systems.",
      "It reduces the amount of memory consumed by the application.",
    ],
    answer: "B",
    explanation: "By isolating functionalities, changes in one area are less likely to impact others.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Medium",
    question: "What is 'Equivalence Partitioning' in testing?",
    options: [
      "Dividing the development team into equal groups for peer review.",
      "Dividing input data into classes that are expected to be processed similarly.",
      "Ensuring that all functions have the same number of lines of code.",
      "Calculating the average number of errors per module.",
    ],
    answer: "B",
    explanation: "Equivalence partitioning reduces the number of test cases needed while maintaining effective coverage.",
  },
  {
    topic: "Modern Technology",
    difficulty: "Medium",
    question: "What is 'Containerization'?",
    options: [
      "Storing old server hardware in physical shipping containers.",
      "A lightweight form of individual OS virtualization allowing apps to run in isolated environments.",
      "The process of putting software into physical boxes for retail sale.",
      "A technique for compressing large database files.",
    ],
    answer: "B",
    explanation: "Containers (like Docker) provide portable, isolated environments for software to run consistently across any infrastructure.",
  },
  // --- MASTERY LEVEL & EXAM STRATEGY ---
  {
    topic: "Exam Strategy",
    difficulty: "Hard",
    question: "What is the 'Master Formula' for structuring a distinction-level long-form answer in MIT 817?",
    options: [
      "Definition → Explanation → Real-World Example → Diagram.",
      "Bulleted list of every fact you know about the topic.",
      "A single summary paragraph followed by a conclusion.",
      "Write as much code as possible to show technical skill.",
    ],
    answer: "A",
    explanation: "The 'Definition → Explanation → Example → Diagram' structure shows the examiner both theoretical knowledge and practical application, which is required for a Distinction.",
  },
  {
    topic: "Foundations",
    difficulty: "Hard",
    question: "Software 'does not wear out' like hardware, yet it still 'deteriorates'. What is the root cause of this deterioration?",
    options: [
      "Friction between electrical components in the server.",
      "The build-up of unhandled exceptions in the CPU.",
      "The accumulation of changes over time that increases complexity and breaks dependencies.",
      "Exposure to cosmic radiation in data centers.",
    ],
    answer: "C",
    explanation: "Because software is abstract, it deteriorates when constant modifications (to meet new needs) increase its internal complexity and cause it to lose its original modularity.",
  },
  {
    topic: "Foundations",
    difficulty: "Hard",
    question: "What is the correct hierarchical order of the 'Software Engineering Layers'?",
    options: [
      "Tools → Methods → Process → Quality Focus.",
      "Quality Focus → Process → Methods → Tools.",
      "Process → Quality Focus → Tools → Methods.",
      "Methods → Tools → Quality Focus → Process.",
    ],
    answer: "B",
    explanation: "Quality is the MINDSET (foundation), Process is the FRAMEWORK, Methods are the TECHNICAL steps, and Tools are the SUPPORT.",
  },
  {
    topic: "Requirements Engineering",
    difficulty: "Hard",
    question: "What is the 'Master Flow' of tasks within the Requirements Engineering phase?",
    options: [
      "Coding → Testing → Validation → Management.",
      "Inception → Elaboration → Construction → Transition.",
      "Elicitation → Analysis → Modeling → Negotiation → Validation → Management.",
      "Planning → Modeling → Construction → Deployment.",
    ],
    answer: "C",
    explanation: "The 6-step flow (E-A-M-N-V-M) is the standard professional structure for turning vague stakeholder needs into a precise SRS.",
  },
  {
    topic: "Quality and Testing",
    difficulty: "Hard",
    question: "How does the 'Quality Dilemma' impact a professional software engineering project?",
    options: [
      "It makes it impossible to release any software that has bugs.",
      "It involves choosing between a 'Perfect' product (unrealistic/expensive) and a 'Good Enough' product (meets needs safely/efficiently).",
      "It forces the engineer to prioritize the client's pride over the public interest.",
      "It requires that 100% of the budget be spent on testing.",
    ],
    answer: "B",
    explanation: "Professional SE is about finding the 'Sweet Spot'—software that is fast and cheap enough to be useful, but high-quality enough to be safe and dependable.",
  },
  {
    topic: "Project Management",
    difficulty: "Hard",
    question: "Which of the following causes the most significant number of 'failed' software projects in the industry?",
    options: [
      "Slow internet speeds in the development team's office.",
      "Using an older version of the Python programming language.",
      "People and communication issues (toxic culture, unclear goals, lack of trust).",
      "The lack of high-performance graphics cards.",
    ],
    answer: "C",
    explanation: "While technical bugs exist, most total project failures are attributed to the 'People' factor (one of the 4 Ps)—poor communication and lack of stakeholder alignment.",
  },
];
