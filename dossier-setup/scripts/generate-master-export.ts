import fs from "node:fs";
import path from "node:path";


let photoDataUrl = "";
try {
  photoDataUrl = fs.readFileSync(
    path.join(process.cwd(), "scratch/profile_photo.txt"),
    "utf8"
  ).trim();
} catch (e) {
  try {
    photoDataUrl = fs.readFileSync(
      "C:/Users/rishi/.gemini/antigravity/brain/a6a086ed-8ece-428f-9800-4a86ae182d6a/scratch/profile_photo.txt",
      "utf8"
    ).trim();
  } catch (err) {}
}

const now = new Date().toISOString();

// Skills list
const skillsList = [
  "Python", "Java", "TypeScript", "JavaScript", "Go", "SQL", "C", "HTML5", "CSS3",
  "FastAPI", "Spring Boot", "React", "Next.js", "Node.js", "Flask", "Hibernate/JPA",
  "REST APIs", "Microservices", "Pydantic", "Webhooks",
  "PyTorch", "ONNX Runtime", "Transformers", "Large Language Models (LLMs)", "LangChain",
  "RAG", "ChromaDB", "Cross-Encoder Reranking", "RAGAS", "Scikit-learn", "OpenCV",
  "Prompt Engineering", "AI Agents",
  "PostgreSQL", "MySQL", "Redis", "Supabase", "Firebase Firestore", "SQLite",
  "Pandas", "NumPy", "Google OR-Tools (CP-SAT)", "ETL Pipelines",
  "Docker", "Kubernetes", "AWS", "Oracle Cloud (OCI)", "Microsoft Azure", "CI/CD",
  "Git", "GitHub", "Linux", "Postman",
  "Data Structures & Algorithms", "System Design", "Software Architecture",
  "Object-Oriented Programming (OOP)", "SOLID Principles", "Automated Testing", "pytest",
  "Agile / SDLC", "Root Cause Analysis"
];

const skills = skillsList.map((name, idx) => ({
  id: `skill_${idx + 1}`,
  name,
  sort: idx,
  createdAt: now,
}));

const skillMap = new Map(skills.map(s => [s.name.toLowerCase(), s.id]));

function getSkillIds(names: string[]) {
  return names.map(n => skillMap.get(n.toLowerCase())).filter(Boolean) as string[];
}

const languages = [
  { id: "lang_1", name: "English", level: "C2", sort: 0, createdAt: now },
  { id: "lang_2", name: "Tamil", level: "NATIVE", sort: 1, createdAt: now },
  { id: "lang_3", name: "Hindi", level: "B1", sort: 2, createdAt: now },
  { id: "lang_4", name: "Japanese", level: "B1", sort: 3, createdAt: now },
  { id: "lang_5", name: "Malayalam", level: "A2", sort: 4, createdAt: now },
];

const experience = [
  {
    id: "exp_1",
    role: "Software Engineer — AI/ML",
    company: "D Trade Capital",
    location: "Remote",
    startYear: 2026,
    startMonth: 2,
    endYear: null,
    endMonth: null,
    current: true,
    bullets: [
      "Owned the model-inference microservice of a multi-developer behavioral risk engine end-to-end, building an object-oriented service layer behind a FastAPI REST API that validates 20 input features as JSON and delivers low-latency predictions to downstream services.",
      "Designed, trained, and benchmarked Transformer sequence-to-sequence models and Gradient Boosting ensembles in PyTorch on tick-level trading data for real-time anomaly detection, replacing fixed rule-based triggers with adaptive ML risk scores.",
      "Optimized inference performance using ONNX Runtime and Redis caching to achieve sub-10 ms latency under concurrent live trading data streams.",
      "Integrated Large Language Models (LLMs via Claude API and LangChain) into risk analysis pipelines for automated anomaly report synthesis, summarization, and context-aware decision support for risk governance reviewers.",
      "Engineered real-time data ingestion and processing pipelines with Pandas, NumPy, and Pydantic to detect subtle behavioral risk markers including overtrading, loss-chasing, and trader fatigue.",
      "Collaborated with 2 teammates to establish strict API contracts, traced production issues to root cause, authored module documentation, and maintained 430+ automated pytest unit, integration, and regression suites."
    ].join("\n"),
    sort: 0,
    skillIds: getSkillIds(["Python", "FastAPI", "React", "TypeScript", "PyTorch", "ONNX Runtime", "Redis", "Large Language Models (LLMs)", "LangChain", "pytest", "Docker", "REST APIs", "Microservices"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "exp_2",
    role: "Machine Learning Intern",
    company: "Pc World",
    location: "Madurai, India",
    startYear: 2025,
    startMonth: 6,
    endYear: 2025,
    endMonth: 9,
    current: false,
    bullets: [
      "Built and delivered end-to-end Python machine learning data pipelines on real-world datasets, covering data ingestion, cleaning, preprocessing, feature extraction, cross-validation, and model evaluation.",
      "Applied systematic hyperparameter tuning, feature engineering, and independent evaluation metrics (precision, recall, ROC-AUC) across predictive models to improve accuracy and ensure model generalization.",
      "Implemented detail-oriented data-quality validation checks and iterative debugging workflows, documenting model performance benchmarks for the engineering team."
    ].join("\n"),
    sort: 1,
    skillIds: getSkillIds(["Python", "Scikit-learn", "Pandas", "NumPy", "Automated Testing", "ETL Pipelines"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "exp_3",
    role: "Software Development Intern",
    company: "Vyukshathriya Technologix Pvt Ltd",
    location: "Madurai, Tamil Nadu, India",
    startYear: 2024,
    startMonth: 7,
    endYear: 2024,
    endMonth: 9,
    current: false,
    bullets: [
      "Built and integrated responsive UI components with backend RESTful APIs, improving user interaction and data handling across client web applications.",
      "Collaborated in an Agile development team, breaking features into actionable sprint tasks, participating in code reviews, and working closely with QA for defect resolution.",
      "Authored technical documentation, handled structured API payloads, and gained hands-on experience in full SDLC deployment workflows."
    ].join("\n"),
    sort: 2,
    skillIds: getSkillIds(["JavaScript", "React", "REST APIs", "Agile / SDLC", "Git"]),
    createdAt: now,
    updatedAt: now,
  }
];

const projects = [
  {
    id: "proj_1",
    name: "AmongResolver – Multi-Source Reconciliation Engine",
    link: "https://github.com/RishiMaara/Among_Resolver",
    startYear: 2026,
    startMonth: 1,
    endYear: 2026,
    endMonth: 2,
    current: false,
    bullets: [
      "Architected a modular 6-stage reconciliation pipeline (ingestion, fee decomposition, subset-sum matching, fuzzy fallback, LLM-assisted exception diagnosis, audit trail) integrating payment gateway exports, bank statements, and ERP ledgers with webhook-based ERP write-back.",
      "Formulated financial reconciliation as entity resolution followed by combinatorial optimization: an identity-linkage stage and Google OR-Tools CP-SAT solver narrowed a 50,000-record pool to 55 candidates in under 3.1 seconds with 0 false clears.",
      "Added LLM-assisted exception diagnosis and semantic fallback matching for records the deterministic solver could not match, maintaining an immutable audit trail for every resolution.",
      "Backed by 430+ automated tests (335 backend pytest tests and 95 frontend tests) across unit, API, and end-to-end integration paths; delivered working proof-of-concept for the Razorpay AI Buildathon 2026."
    ].join("\n"),
    sort: 0,
    skillIds: getSkillIds(["Python", "FastAPI", "Google OR-Tools (CP-SAT)", "React", "TypeScript", "Pydantic", "Docker", "Large Language Models (LLMs)", "LangChain", "pytest"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_2",
    name: "MediSphere – Smart Hospital Management SaaS Platform",
    link: "https://medisphere-rishi.netlify.app",
    startYear: 2024,
    startMonth: 10,
    endYear: 2025,
    endMonth: 1,
    current: false,
    bullets: [
      "Developed a full-stack multi-tenant healthcare SaaS platform integrating patient management, appointment scheduling, EHR records, billing/payment workflows, and laboratory/pharmacy operations.",
      "Designed and implemented a role-based access control (RBAC) architecture for secure multi-tier user permissions across administrators, doctors, receptionists, and patients.",
      "Architected scalable REST APIs and optimized PostgreSQL schemas with Supabase for high-concurrency real-time healthcare workflows."
    ].join("\n"),
    sort: 1,
    skillIds: getSkillIds(["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "REST APIs", "System Design"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_3",
    name: "LinkForge – Distributed URL Shortener & Link Analytics SaaS",
    link: "https://linkforge-rishi.netlify.app",
    startYear: 2024,
    startMonth: 8,
    endYear: 2024,
    endMonth: 11,
    current: false,
    bullets: [
      "Built a high-performance distributed URL shortener and link management SaaS featuring branded links, QR code generation, and low-latency redirection in Go.",
      "Engineered real-time traffic analytics dashboards monitoring clicks, referral sources, geographical distribution, and device metrics with per-link performance reporting.",
      "Implemented distributed Redis caching and rate-limiting middleware to sustain heavy concurrent traffic; containerized services with Docker for cross-platform deployment."
    ].join("\n"),
    sort: 2,
    skillIds: getSkillIds(["Go", "TypeScript", "PostgreSQL", "Redis", "Docker", "REST APIs"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_4",
    name: "Dragonn – Snapdragon AI Lab Challenge 2026",
    link: "https://github.com/RishiMaara/Dragonn",
    startYear: 2026,
    startMonth: 1,
    endYear: 2026,
    endMonth: 2,
    current: false,
    bullets: [
      "Built an on-device NPU model scanner, converter, and validator alongside an optimized Whisper speech recognition application for the Snapdragon AI Lab Challenge 2026.",
      "Benchmarked model latency and memory footprints across quantized on-device architectures to maximize edge inference performance."
    ].join("\n"),
    sort: 3,
    skillIds: getSkillIds(["Python", "PyTorch", "ONNX Runtime", "Large Language Models (LLMs)"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_5",
    name: "Research Paper Answer Bot – RAG Assistant",
    link: "https://github.com/RishiMaara",
    startYear: 2025,
    startMonth: 7,
    endYear: 2025,
    endMonth: 9,
    current: false,
    bullets: [
      "Developed a retrieval-augmented generation (RAG) system ingesting academic research paper PDFs, segmenting text, and generating dense vector embeddings stored in ChromaDB.",
      "Integrated cross-encoder reranking to enhance retrieved context relevance before prompting Claude with carefully engineered system prompts and few-shot examples.",
      "Evaluated retrieval precision, faithfulness, and answer relevance using the RAGAS framework to iteratively optimize chunking strategies and prompt templates."
    ].join("\n"),
    sort: 4,
    skillIds: getSkillIds(["Python", "LangChain", "ChromaDB", "Cross-Encoder Reranking", "RAGAS", "RAG", "Prompt Engineering"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_6",
    name: "Exoplanet Detection System & Model Validation Framework",
    link: "https://nasa-exoplanet-predicter.vercel.app",
    startYear: 2025,
    startMonth: 9,
    endYear: 2025,
    endMonth: 10,
    current: false,
    bullets: [
      "Built a machine learning validation framework on NASA Kepler light-curve data, training Random Forest classifiers to predict confirmed exoplanets under extreme 99:1 class imbalance.",
      "Applied probability-based feature selection, ROC-AUC optimization, and precision-recall calibration to minimize false positives and control detection thresholds.",
      "Performed feature importance analysis to interpret light-curve planetary transit signals and deployed an interactive web prototype on Vercel."
    ].join("\n"),
    sort: 5,
    skillIds: getSkillIds(["Python", "Scikit-learn", "Pandas", "NumPy"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_7",
    name: "Pixel to Panel – Manga-to-Animation Computer Vision Pipeline",
    link: "https://github.com/RishiMaara",
    startYear: 2023,
    startMonth: 12,
    endYear: 2024,
    endMonth: 6,
    current: false,
    bullets: [
      "Designed an automated computer vision pipeline converting raw comic and manga pages into structured, isolated panels using adaptive thresholding, morphological filtering, and contour detection.",
      "Extended the pipeline to image-to-video generation by applying dynamic Ken Burns and parallax camera motion to segmented panels, rendered to MP4 with ffmpeg.",
      "Constructed a synthetic ground-truth dataset with known panel geometry to systematically benchmark and validate segmentation accuracy."
    ].join("\n"),
    sort: 6,
    skillIds: getSkillIds(["Python", "OpenCV", "NumPy"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_8",
    name: "Smart Inventory & Order Management System",
    link: "https://github.com/RishiMaara",
    startYear: 2024,
    startMonth: 3,
    endYear: 2024,
    endMonth: 6,
    current: false,
    bullets: [
      "Architected enterprise RESTful APIs following a layered Controller–Service–Repository design pattern in Java and Spring Boot.",
      "Implemented role-based access control, input validation, custom exception hierarchies, and transactional database integrity with Hibernate/JPA and MySQL.",
      "Developed comprehensive Postman test collections for automated API verification and documentation."
    ].join("\n"),
    sort: 7,
    skillIds: getSkillIds(["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "REST APIs", "Postman", "Object-Oriented Programming (OOP)"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_9",
    name: "LinguGen – Interactive English Learning Platform",
    link: "https://bit.ly/lingugen",
    startYear: 2024,
    startMonth: 5,
    endYear: 2024,
    endMonth: 7,
    current: false,
    bullets: [
      "Developed an interactive language learning web platform featuring structured curriculum modules, dynamic quizzes, and real-time learner progress dashboards.",
      "Designed RESTful API endpoints in Flask with SQLite to track student assessment metrics, identify learning gaps, and deliver tailored performance feedback."
    ].join("\n"),
    sort: 8,
    skillIds: getSkillIds(["React", "TypeScript", "Flask", "SQLite", "REST APIs"]),
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "proj_10",
    name: "Coding Director – Interactive Developer Learning Platform",
    link: "https://bit.ly/codingdirector-rishi",
    startYear: 2025,
    startMonth: 1,
    endYear: 2025,
    endMonth: 3,
    current: false,
    bullets: [
      "Engineered a full-stack developer education platform combining interactive coding exercises, typing muscle-memory drills, and gamified progress milestones.",
      "Implemented cloud-synchronized state management, automated evaluation checks, and comprehensive analytics tracking skill progression."
    ].join("\n"),
    sort: 9,
    skillIds: getSkillIds(["React", "Next.js", "TypeScript", "PostgreSQL"]),
    createdAt: now,
    updatedAt: now,
  }
];

const education = [
  {
    id: "edu_1",
    degree: "B.Tech in Artificial Intelligence & Machine Learning",
    school: "SNS College of Technology, Coimbatore",
    startYear: 2023,
    startMonth: 8,
    endYear: 2027,
    endMonth: 5,
    current: true,
    notes: "CGPA: 8.5 / 10. Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning, Linear Algebra, Probability & Statistics, Software Engineering, System Design.",
    sort: 0,
    createdAt: now,
    updatedAt: now,
  },
  {
    id: "edu_2",
    degree: "Higher Secondary Certificate (HSC) & SSLC",
    school: "EBG Matric Higher Secondary School, Madurai",
    startYear: 2008,
    startMonth: 6,
    endYear: 2023,
    endMonth: 5,
    current: false,
    notes: "Achieved 80% in Higher Secondary Certificate (HSC) with Mathematics, Physics, Chemistry, and Computer Science.",
    sort: 1,
    createdAt: now,
    updatedAt: now,
  }
];

const factsList = [
  "Solved 738+ LeetCode problems covering Trees, Graphs, Dynamic Programming, and Arrays (Profile: leetcode.com/u/AVRishikesh_23).",
  "Ranked #26 nationwide out of 9,600+ participants in the Naukri Campus CodeQuezt contest.",
  "Top 5 Finalist at the IIT Bombay Hackathon.",
  "Finalist / participant in Razorpay AI Buildathon 2026, Smart India Hackathon (SIH), Accenture Innovation Challenge, and NIT Trichy 36-hour AI Hackathon (Tata Centre for AI/ML).",
  "Certified: Oracle Cloud Infrastructure 2025 Certified Data Science Professional (Oct 2025).",
  "Certified: Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate (Sep 2025).",
  "Certified: Databricks Accredited Generative AI Fundamentals (Sep 2025).",
  "Certified: AWS Academy Graduate – Generative AI Foundations (Sep 2025).",
  "Portfolio website: https://rishikesh-av-portfolio.lovable.app",
  "GitHub profile: https://github.com/RishiMaara",
  "Location: Madurai, Tamil Nadu, India; fully open to relocate and work remotely."
];

const facts = factsList.map((text, idx) => ({
  id: `fact_${idx + 1}`,
  text,
  sort: idx,
  createdAt: now,
  updatedAt: now,
}));

const fields = [
  { key: "name", value: "Rishikesh AV" },
  { key: "headline", value: "Software Engineer & AI/ML Engineer | Full-Stack & Distributed Systems" },
  { key: "email", value: "rishirudhm@gmail.com" },
  { key: "phone", value: "+91 7904808788" },
  { key: "city", value: "Madurai, Tamil Nadu" },
  { key: "country", value: "India" },
  { key: "website", value: "https://rishikesh-av-portfolio.lovable.app" },
  { key: "linkedin", value: "https://www.linkedin.com/in/rishi-kesh-av" },
  {
    key: "summary",
    value: "Software engineer (B.Tech AI & ML, 2027) with hands-on production experience in Java, Python, TypeScript, Go, and React/Next.js across the full SDLC. Experienced in designing scalable REST APIs, microservices, and event-driven data pipelines with 430+ automated tests. Currently engineering real-time ML inference services (Transformer models, ONNX Runtime, Redis caching) and LLM-integrated automation tools (Claude API, LangChain, RAG) in the financial and risk domain at D Trade Capital. Active problem solver with 738+ solved LeetCode problems, Top 5 finalist at IIT Bombay Hackathon, and ranked #26 of 9,600+ in Naukri Campus CodeQuezt."
  },
  { key: "showAge", value: "false" }
];

if (photoDataUrl) {
  fields.push({ key: "photo", value: photoDataUrl });
  fields.push({ key: "photoOnResumes", value: "true" });
}

const dossierExport = {
  format: "dossier-export",
  schemaVersion: 5,
  appVersion: "1.9.2",
  exportedAt: now,
  profile: {
    fields,
    skills,
    languages,
    experience,
    projects,
    education,
    publications: [],
    references: [],
    facts,
  },
  themes: [],
  settings: [],
  applications: [],
  postings: [],
  searches: [],
  agentCandidates: [],
  startups: [],
  startupBlocks: [],
};

const jsonStr = JSON.stringify(dossierExport, null, 2);
const outPath = path.join(process.cwd(), "dossier-master-export.json");
fs.writeFileSync(outPath, jsonStr, "utf8");
console.log(`Saved master export to ${outPath}`);

