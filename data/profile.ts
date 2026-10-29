export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  bullets: string[];
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: "AI & ML" | "Full-Stack" | "Systems & Backend" | "Computer Vision";
  description: string;
  bullets: string[];
  stack: string[];
  githubUrl?: string;
  liveUrl?: string;
  badge?: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  grade?: string;
  details: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  badgeUrl?: string;
}

export interface ApplicationTrackerItem {
  id: string;
  company: string;
  role: string;
  status: "Draft" | "Applied" | "Interviewing" | "Offer" | "Archived";
  date: string;
  notes: string;
}

export const masterProfileData = {
  name: "Rishikesh AV",
  title: "Software Engineer & AI/ML Engineer",
  subtitle: "Full-Stack Development, Distributed Systems & Real-Time ML Inference",
  headline: "B.Tech AI & ML (2027) | Ex-AI Engineer Intern @ D Trade Capital | 738+ LeetCode",
  email: "rishirudhm@gmail.com",
  phone: "+91 7904808788",
  location: "Madurai, Tamil Nadu, India",
  relocationStatus: "Open to Relocate (Bangalore, Hyderabad, Mumbai, Remote)",
  avatar: "/avatar.jpg",
  
  socials: {
    github: "https://github.com/RishiMaara",
    linkedin: "https://www.linkedin.com/in/rishi-kesh-av",
    portfolio: "https://rishikesh-av-portfolio.lovable.app",
    leetcode: "https://leetcode.com/u/AVRishikesh_23",
  },

  summary: `Software engineer with hands-on production experience in Java, Python, TypeScript, Go, and React/Next.js across the full Software Development Life Cycle (SDLC). Currently engineering real-time ML inference services (Transformer models, ONNX Runtime, Redis caching) and LLM-integrated automation tools (Claude API, LangChain, RAG) in the financial and risk domain at D Trade Capital. Active competitive programmer with 738+ solved LeetCode problems, Top 5 finalist at IIT Bombay Hackathon, and ranked #26 out of 9,600+ in Naukri Campus CodeQuezt.`,

  stats: [
    { label: "LeetCode Solved", value: "738+", detail: "Arrays, Trees, Graphs, DP" },
    { label: "Naukri CodeQuezt", value: "#26", detail: "Top 0.2% of 9,600+ engineers" },
    { label: "IIT Bombay Hackathon", value: "Top 5", detail: "Finalist team" },
    { label: "Automated Tests", value: "430+", detail: "pytest unit, API & integration" },
    { label: "Academic CGPA", value: "8.5 / 10", detail: "B.Tech AI & ML (2027)" },
  ],

  experiences: [
    {
      id: "exp-1",
      role: "Software Engineer — AI/ML",
      company: "D Trade Capital",
      location: "Remote",
      period: "Feb 2026 – Present",
      current: true,
      skills: ["Python", "FastAPI", "React", "TypeScript", "PyTorch", "ONNX Runtime", "Redis", "Claude API", "LangChain", "pytest", "Docker"],
      bullets: [
        "Owned the model-inference microservice of a multi-developer behavioral risk engine end-to-end, building an object-oriented service layer behind a FastAPI REST API that validates 20 input features as JSON and delivers low-latency predictions to downstream services.",
        "Designed, trained, and benchmarked Transformer sequence-to-sequence models and Gradient Boosting ensembles in PyTorch on tick-level trading data for real-time anomaly detection, replacing fixed rule-based triggers with adaptive ML risk scores.",
        "Optimized inference performance using ONNX Runtime and Redis caching to achieve sub-10 ms latency under concurrent live trading data streams.",
        "Integrated Large Language Models (LLMs via Claude API and LangChain) into risk analysis pipelines for automated anomaly report synthesis, summarization, and context-aware decision support for risk governance reviewers.",
        "Engineered real-time data ingestion and processing pipelines with Pandas, NumPy, and Pydantic to detect subtle behavioral risk markers including overtrading, loss-chasing, and trader fatigue.",
        "Collaborated with 2 teammates to establish strict API contracts, traced production issues to root cause, authored module documentation, and maintained 430+ automated pytest unit, integration, and regression suites."
      ]
    },
    {
      id: "exp-2",
      role: "Machine Learning Intern",
      company: "Pc World",
      location: "Madurai, India",
      period: "Jun 2025 – Sep 2025",
      current: false,
      skills: ["Python", "Scikit-learn", "Pandas", "NumPy", "Cross-Validation", "ETL Pipelines"],
      bullets: [
        "Built and delivered end-to-end Python machine learning data pipelines on real-world datasets, covering data ingestion, cleaning, preprocessing, feature extraction, cross-validation, and model evaluation.",
        "Applied systematic hyperparameter tuning, feature engineering, and independent evaluation metrics (precision, recall, ROC-AUC) across predictive models to improve accuracy and ensure model generalization.",
        "Implemented detail-oriented data-quality validation checks and iterative debugging workflows, documenting model performance benchmarks for the engineering team."
      ]
    },
    {
      id: "exp-3",
      role: "Software Development Intern",
      company: "Vyukshathriya Technologix Pvt Ltd",
      location: "Madurai, Tamil Nadu, India",
      period: "Jul 2024 – Sep 2024",
      current: false,
      skills: ["JavaScript", "React", "REST APIs", "Agile / Scrum", "Git"],
      bullets: [
        "Built and integrated responsive UI components with backend RESTful APIs, improving user interaction and data handling across client web applications.",
        "Collaborated in an Agile development team, breaking features into actionable sprint tasks, participating in code reviews, and working closely with QA for defect resolution.",
        "Authored technical documentation, handled structured API payloads, and gained hands-on experience in full SDLC deployment workflows."
      ]
    }
  ] as ExperienceItem[],

  projects: [
    {
      id: "proj-1",
      title: "AmongResolver — Multi-Source Reconciliation Engine",
      category: "AI & ML",
      badge: "Razorpay AI Buildathon 2026",
      description: "Automated 6-stage financial reconciliation pipeline powered by Google OR-Tools CP-SAT solver and LLM exception diagnosis.",
      stack: ["Python", "FastAPI", "Google OR-Tools", "React", "TypeScript", "Pydantic", "Docker", "pytest"],
      githubUrl: "https://github.com/RishiMaara/Among_Resolver",
      bullets: [
        "Formulated financial reconciliation as entity resolution followed by combinatorial optimization: an identity-linkage stage and Google OR-Tools CP-SAT solver narrowed a 50,000-record pool to 55 candidates in under 3.1 seconds with 0 false clears.",
        "Integrated payment gateway exports, bank statements, and ERP ledgers with webhook-based ERP write-back.",
        "Added LLM-assisted exception diagnosis and semantic fallback matching for records the deterministic solver could not match, maintaining an immutable audit trail.",
        "Backed by 430+ automated tests (335 backend pytest tests and 95 frontend tests)."
      ]
    },
    {
      id: "proj-2",
      title: "MediSphere — Smart Hospital Management SaaS Platform",
      category: "Full-Stack",
      badge: "Full-Stack SaaS",
      description: "Multi-tenant healthcare SaaS platform with patient records, billing, scheduling, and role-based access control.",
      stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "REST APIs"],
      liveUrl: "https://medisphere-rishi.netlify.app",
      bullets: [
        "Engineered multi-tenant healthcare SaaS platform integrating patient management, appointment scheduling, EHR records, and billing workflows.",
        "Designed and implemented role-based access control (RBAC) architecture for secure multi-tier user permissions across administrators, doctors, receptionists, and patients.",
        "Architected scalable REST APIs and optimized PostgreSQL schemas for high-concurrency real-time workflows."
      ]
    },
    {
      id: "proj-3",
      title: "LinkForge — Distributed URL Shortener & Link Analytics SaaS",
      category: "Systems & Backend",
      badge: "Go + Redis",
      description: "High-throughput distributed link shortener with branded links, QR code generation, and real-time click stream analytics.",
      stack: ["Go (Golang)", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST APIs"],
      liveUrl: "https://linkforge-rishi.netlify.app",
      bullets: [
        "Built a high-performance distributed URL shortener and link management SaaS featuring branded links, QR code generation, and low-latency redirection in Go.",
        "Engineered real-time traffic analytics dashboards monitoring clicks, referral sources, geographical distribution, and device metrics with per-link performance reporting.",
        "Implemented distributed Redis caching and rate-limiting middleware to sustain heavy concurrent traffic; containerized services with Docker."
      ]
    },
    {
      id: "proj-4",
      title: "Dragonn — Snapdragon AI Lab Challenge 2026",
      category: "AI & ML",
      badge: "Snapdragon AI Lab",
      description: "On-device NPU model scanner, converter, and validator alongside an optimized Whisper speech recognition application.",
      stack: ["Python", "PyTorch", "ONNX Runtime", "Whisper Speech AI", "Qualcomm AI Stack"],
      githubUrl: "https://github.com/RishiMaara/Dragonn",
      bullets: [
        "Built an on-device NPU model scanner, converter, and validator alongside an optimized Whisper speech recognition application for the Snapdragon AI Lab Challenge 2026.",
        "Benchmarked model latency and memory footprints across quantized on-device architectures to maximize edge inference performance."
      ]
    },
    {
      id: "proj-5",
      title: "Research Paper Answer Bot — RAG Assistant",
      category: "AI & ML",
      badge: "GenAI Capstone",
      description: "Retrieval-augmented QA pipeline over research PDFs with ChromaDB embeddings, cross-encoder reranking, and RAGAS metrics.",
      stack: ["Python", "LangChain", "Claude API", "ChromaDB", "Cross-Encoder", "RAGAS"],
      githubUrl: "https://github.com/RishiMaara",
      bullets: [
        "Developed a retrieval-augmented generation (RAG) system ingesting academic research paper PDFs, segmenting text, and generating dense vector embeddings stored in ChromaDB.",
        "Integrated cross-encoder reranking to enhance retrieved context relevance before prompting Claude with carefully engineered system prompts and few-shot examples.",
        "Evaluated retrieval precision, faithfulness, and answer relevance using the RAGAS framework to iteratively optimize chunking strategies and prompt templates."
      ]
    },
    {
      id: "proj-6",
      title: "Exoplanet Detection System & Model Validation Framework",
      category: "AI & ML",
      badge: "NASA Kepler Data",
      description: "Machine learning classifier detecting confirmed exoplanets from NASA Kepler light curves under 99:1 class imbalance.",
      stack: ["Python", "Scikit-learn", "Pandas", "Random Forest", "Model Validation"],
      liveUrl: "https://nasa-exoplanet-predicter.vercel.app",
      bullets: [
        "Built a machine learning validation framework on NASA Kepler light-curve data, training Random Forest classifiers to predict confirmed exoplanets under extreme 99:1 class imbalance.",
        "Applied probability-based feature selection, ROC-AUC optimization, and precision-recall calibration to control detection thresholds.",
        "Deployed an interactive web prototype on Vercel with feature importance visualization."
      ]
    },
    {
      id: "proj-7",
      title: "Pixel to Panel — Manga-to-Animation Computer Vision Pipeline",
      category: "Computer Vision",
      badge: "OpenCV + ffmpeg",
      description: "Classical CV pipeline segmenting scanned manga pages into isolated panels and rendering MP4 animations with parallax motion.",
      stack: ["Python", "OpenCV", "NumPy", "ffmpeg", "Computer Vision"],
      githubUrl: "https://github.com/RishiMaara",
      bullets: [
        "Designed an automated computer vision pipeline converting raw comic and manga pages into structured, isolated panels using adaptive thresholding, morphological filtering, and contour detection.",
        "Extended the pipeline to image-to-video generation by applying dynamic Ken Burns and parallax camera motion to segmented panels, rendered to MP4 with ffmpeg.",
        "Constructed a synthetic ground-truth dataset with known panel geometry to systematically benchmark and validate segmentation accuracy."
      ]
    },
    {
      id: "proj-8",
      title: "Smart Inventory & Order Management System",
      category: "Systems & Backend",
      badge: "Java + Spring Boot",
      description: "Enterprise layered Controller-Service-Repository architecture with role-based access control and transactional integrity.",
      stack: ["Java", "Spring Boot", "Hibernate / JPA", "MySQL", "REST APIs", "Postman"],
      githubUrl: "https://github.com/RishiMaara",
      bullets: [
        "Architected enterprise RESTful APIs following a layered Controller–Service–Repository design pattern in Java and Spring Boot.",
        "Implemented role-based access control, input validation, custom exception hierarchies, and transactional database integrity with Hibernate/JPA and MySQL.",
        "Developed comprehensive Postman test collections for automated API verification."
      ]
    },
    {
      id: "proj-9",
      title: "LinguGen — Interactive English Learning Platform",
      category: "Full-Stack",
      badge: "React + Flask",
      description: "Interactive language learning web platform featuring structured curriculum modules, dynamic quizzes, and progress analytics.",
      stack: ["React", "TypeScript", "Flask", "SQLite", "REST APIs"],
      liveUrl: "https://bit.ly/lingugen",
      bullets: [
        "Developed an interactive language learning web platform featuring structured curriculum modules, dynamic quizzes, and real-time learner progress dashboards.",
        "Designed RESTful API endpoints in Flask with SQLite to track student assessment metrics, identify learning gaps, and deliver tailored performance feedback."
      ]
    },
    {
      id: "proj-10",
      title: "Coding Director — Interactive Developer Learning Platform",
      category: "Full-Stack",
      badge: "Next.js + Postgres",
      description: "Developer education platform combining interactive coding exercises, typing muscle-memory drills, and progress tracking.",
      stack: ["React", "Next.js", "TypeScript", "PostgreSQL"],
      liveUrl: "https://bit.ly/codingdirector-rishi",
      bullets: [
        "Engineered a full-stack developer education platform combining interactive coding exercises, typing muscle-memory drills, and gamified progress milestones.",
        "Implemented cloud-synchronized state management, automated evaluation checks, and comprehensive analytics tracking skill progression."
      ]
    }
  ] as ProjectItem[],

  skillCategories: [
    {
      title: "Programming Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "Go (Golang)", "SQL", "C", "HTML5", "CSS3"]
    },
    {
      title: "Web & Microservices",
      skills: ["FastAPI", "Spring Boot", "React.js", "Next.js", "Node.js", "Flask", "Hibernate / JPA", "REST APIs", "Pydantic", "Webhooks"]
    },
    {
      title: "AI, GenAI & ML",
      skills: ["PyTorch", "ONNX Runtime", "Transformers (Seq2Seq)", "LangChain", "RAG", "Claude API", "ChromaDB", "Cross-Encoder Reranking", "RAGAS", "Scikit-learn", "OpenCV", "Prompt Engineering"]
    },
    {
      title: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "Redis (Caching & Queues)", "Supabase", "Firebase Firestore", "SQLite", "Pandas", "NumPy", "OR-Tools CP-SAT"]
    },
    {
      title: "DevOps & Cloud",
      skills: ["Docker", "Kubernetes", "AWS Cloud", "Oracle Cloud (OCI)", "Microsoft Azure", "CI/CD", "Git", "GitHub", "Linux", "Postman"]
    },
    {
      title: "Engineering Fundamentals",
      skills: ["Data Structures & Algorithms", "System Design", "Software Architecture", "OOP", "SOLID Principles", "pytest", "Agile / Scrum", "Root Cause Analysis"]
    }
  ] as SkillCategory[],

  education: [
    {
      degree: "Bachelor of Technology (B.Tech) — Artificial Intelligence & Machine Learning",
      institution: "SNS College of Technology, Coimbatore",
      period: "2023 – May 2027 (Expected)",
      grade: "CGPA: 8.5 / 10",
      details: "Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning, Linear Algebra, Probability & Statistics, Software Engineering, System Design."
    },
    {
      degree: "Higher Secondary Certificate (HSC) & SSLC",
      institution: "EBG Matric Higher Secondary School, Madurai",
      period: "2008 – 2023",
      grade: "80%",
      details: "Academic foundation in Mathematics, Physics, Chemistry, and Computer Science."
    }
  ] as EducationItem[],

  certifications: [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
      issuer: "Oracle",
      date: "Oct 2025"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      date: "Sep 2025"
    },
    {
      title: "Databricks Accredited Generative AI Fundamentals",
      issuer: "Databricks",
      date: "Sep 2025"
    },
    {
      title: "AWS Academy Graduate — Generative AI Foundations",
      issuer: "Amazon Web Services",
      date: "Sep 2025"
    }
  ] as CertificationItem[],

  languages: [
    { language: "English", level: "Fluent / Professional (C2)" },
    { language: "Tamil", level: "Native" },
    { language: "Hindi", level: "Intermediate (B1)" },
    { language: "Japanese", level: "Intermediate (B1)" },
    { language: "Malayalam", level: "Elementary (A2)" }
  ],

  // -------------------------------------------------------------
  // OWNER-ONLY PRIVATE DATA (Visible only when authenticated)
  // -------------------------------------------------------------
  ownerPrivateData: {
    privateFacts: [
      "Targeting Software Engineer (SWE/SDE), AI/ML Engineer, and Full-Stack roles.",
      "738+ LeetCode problems solved across Trees, Graphs, Dynamic Programming, and Arrays.",
      "Ranked #26 nationwide out of 9,600+ participants in Naukri Campus CodeQuezt contest.",
      "Top 5 Finalist at IIT Bombay Hackathon.",
      "Finalist in Razorpay AI Buildathon 2026 (AmongResolver reconciliation engine).",
      "Holds 4 cloud & AI certifications (Oracle Data Science, Oracle AI, Databricks GenAI, AWS GenAI).",
      "Available for immediate internship or full-time graduation joining (May 2027).",
      "Open to relocation across India (Bangalore, Mumbai, Hyderabad, Pune, Chennai) or global remote.",
      "Hands-on production latency tuning experience: achieved sub-10 ms inference with ONNX and Redis at D Trade Capital.",
      "Expertise in bridging classical software engineering (Java/Spring Boot, Go, OOP) with modern AI systems (PyTorch, RAG, Claude API).",
      "Dossier master export JSON backup available in workspace root: dossier-master-export.json."
    ],
    starterApplications: [
      {
        id: "app-1",
        company: "JPMorgan Chase & Co.",
        role: "Software Engineer — Model Risk Governance & Review (MRGR)",
        status: "Interviewing",
        date: "2026-10-20",
        notes: "MRGR resume tailored. Highlighted Transformer seq2seq models, automated testing, and risk pipeline from D Trade Capital."
      },
      {
        id: "app-2",
        company: "Razorpay",
        role: "Software Development Engineer (Backend / Platform)",
        status: "Applied",
        date: "2026-10-25",
        notes: "Buildathon winner entry: AmongResolver (CP-SAT solver, 430+ tests, 0 false clears)."
      },
      {
        id: "app-3",
        company: "Tata Consultancy Services (TCS)",
        role: "Python / GenAI / ML Engineer",
        status: "Applied",
        date: "2026-10-22",
        notes: "FastAPI microservices, RAGAS retrieval evaluation, Claude API prompt engineering."
      }
    ] as ApplicationTrackerItem[]
  }
};
