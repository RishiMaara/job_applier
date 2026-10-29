# Master Career Profile — Rishikesh AV

> Consolidated from 32 specialized resumes located in `C:\Users\rishi\OneDrive\Documents\Resumes`.  
> Prepared for direct integration into **Dossier** (`dossier-master-export.json`).

---

## 1. Basics & Contact Information

* **Full Name:** Rishikesh AV
* **Headline:** Software Engineer & AI/ML Engineer | Full-Stack & Distributed Systems
* **Email:** [rishirudhm@gmail.com](mailto:rishirudhm@gmail.com)
* **Phone:** +91 7904808788
* **Location:** Madurai, Tamil Nadu, India *(Open to relocate / Remote)*
* **LinkedIn:** [linkedin.com/in/rishi-kesh-av](https://www.linkedin.com/in/rishi-kesh-av)
* **GitHub:** [github.com/RishiMaara](https://github.com/RishiMaara)
* **Portfolio:** [rishikesh-av-portfolio.lovable.app](https://rishikesh-av-portfolio.lovable.app)
* **LeetCode:** [leetcode.com/u/AVRishikesh_23](https://leetcode.com/u/AVRishikesh_23) *(738+ solved)*

### Professional Summary
Software engineer (B.Tech AI & ML, graduating May 2027) with hands-on production experience in Java, Python, TypeScript, Go, and React/Next.js across the full Software Development Life Cycle (SDLC). Experienced in designing scalable REST APIs, microservices, and event-driven data pipelines with 430+ automated tests. Currently engineering real-time ML inference services (Transformer models, ONNX Runtime, Redis caching) and LLM-integrated automation tools (Claude API, LangChain, RAG) in the financial risk domain at D Trade Capital. Active competitive programmer with 738+ solved LeetCode problems, Top 5 finalist at IIT Bombay Hackathon, and ranked #26 nationwide out of 9,600+ in Naukri Campus CodeQuezt.

---

## 2. Technical Skills

* **Programming Languages:** Python, Java, TypeScript, JavaScript, Go, SQL, C, HTML5, CSS3
* **Web & Frameworks:** FastAPI, Spring Boot, React, Next.js, Node.js, Express, Flask, Hibernate/JPA, REST APIs, Microservices, Webhooks, Pydantic
* **AI, Machine Learning & GenAI:** PyTorch, ONNX Runtime, Transformers (Sequence-to-Sequence), Large Language Models (LLMs), LangChain, RAG, ChromaDB, Cross-Encoder Reranking, RAGAS, Scikit-learn, OpenCV, Prompt Engineering, AI Agents
* **Data & Storage:** PostgreSQL, MySQL, Redis (caching & pub/sub), Supabase, Firebase Firestore, SQLite, Pandas, NumPy, ETL Pipelines, Google OR-Tools (CP-SAT solver)
* **DevOps & Cloud:** Docker, Kubernetes, AWS, Oracle Cloud Infrastructure (OCI), Microsoft Azure, CI/CD, Git, GitHub, Linux, Postman
* **Core Practices & Architecture:** Data Structures & Algorithms (DSA), System Design, Software Architecture, Object-Oriented Programming (OOP), SOLID Principles, Automated Testing (pytest, unit & integration testing), Agile / Scrum, Code Review, Root Cause Analysis

---

## 3. Languages

* **English:** Fluent (C2)
* **Tamil:** Native
* **Hindi:** Intermediate (B1)
* **Japanese:** Intermediate (B1)
* **Malayalam:** Elementary (A2)

---

## 4. Professional Experience

### **D Trade Capital** — Software Engineer — AI/ML *(Part-Time, Remote)*
**Feb 2026 – Present** | *Python, FastAPI, React, TypeScript, PyTorch, ONNX Runtime, Redis, LLM Integration, Docker, pytest*

* **Microservice Ownership:** Owned the model-inference microservice of a multi-developer behavioral risk engine end-to-end, building an object-oriented service layer behind a FastAPI REST API that validates 20 input features as JSON and delivers low-latency predictions to downstream services.
* **Transformer & ML Modeling:** Designed, trained, and benchmarked Transformer sequence-to-sequence models and Gradient Boosting ensembles in PyTorch on tick-level trading data for real-time anomaly detection, replacing fixed rule-based triggers with adaptive ML risk scores.
* **High-Throughput Optimization:** Optimized inference performance using ONNX Runtime and Redis caching to achieve sub-10 ms latency under concurrent live trading data streams.
* **LLM Integration:** Integrated Large Language Models (LLMs via Claude API and LangChain) into risk analysis pipelines for automated anomaly report synthesis, summarization, and context-aware decision support for risk governance reviewers.
* **Real-Time Data Pipelines:** Engineered real-time data ingestion and processing pipelines with Pandas, NumPy, and Pydantic to detect subtle behavioral risk markers including overtrading, loss-chasing, and trader fatigue.
* **Quality & Collaboration:** Collaborated with 2 teammates to establish strict API contracts, traced production issues to root cause, authored module documentation, and maintained 430+ automated pytest unit, integration, and regression suites.

---

### **Pc World** — Machine Learning Intern
**Jun 2025 – Sep 2025** | *Python, Scikit-learn, Pandas, NumPy, Cross-Validation*

* **End-to-End Pipelines:** Built and delivered end-to-end Python machine learning data pipelines on real-world datasets, covering data ingestion, cleaning, preprocessing, feature extraction, cross-validation, and model evaluation.
* **Evaluation & Tuning:** Applied systematic hyperparameter tuning, feature engineering, and independent evaluation metrics (precision, recall, ROC-AUC) across predictive models to improve accuracy and ensure model generalization.
* **Data Quality Checks:** Implemented detail-oriented data-quality validation checks and iterative debugging workflows, documenting model performance benchmarks for the engineering team.

---

### **Vyukshathriya Technologix Pvt Ltd** — Software Development Intern
**Jul 2024 – Sep 2024** | *JavaScript, React, REST APIs, Web Applications, Agile/SDLC*

* **Frontend & API Coordination:** Built and integrated responsive UI components with backend RESTful APIs, improving user interaction and data handling across client web applications.
* **Agile Collaboration:** Collaborated in an Agile development team, breaking features into actionable sprint tasks, participating in code reviews, and working closely with QA for defect resolution.
* **SDLC & Documentation:** Authored technical documentation, handled structured API payloads, and gained hands-on experience in full SDLC deployment workflows.

---

## 5. Key Projects

### **1. AmongResolver — Multi-Source Reconciliation Engine**
* **Event:** Razorpay AI Buildathon 2026
* **Repository:** [github.com/RishiMaara/Among_Resolver](https://github.com/RishiMaara/Among_Resolver)
* **Stack:** *Python, FastAPI, Google OR-Tools (CP-SAT), React, TypeScript, Pydantic, Docker, LLMs, LangChain*
* **Impact:** 
  * Architected a modular 6-stage reconciliation pipeline (ingestion, fee decomposition, subset-sum matching, fuzzy fallback, LLM-assisted exception diagnosis, audit trail) integrating payment gateway exports, bank statements, and ERP ledgers with webhook-based ERP write-back.
  * Formulated financial reconciliation as entity resolution followed by combinatorial optimization: an identity-linkage stage and Google OR-Tools CP-SAT solver narrowed a 50,000-record pool to 55 candidates in under 3.1 seconds with 0 false clears.
  * Added LLM-assisted exception diagnosis and semantic fallback matching for records the deterministic solver could not match, maintaining an immutable audit trail for every resolution.
  * Backed by 430+ automated tests (335 backend pytest tests and 95 frontend tests) across unit, API, and end-to-end integration paths.

### **2. MediSphere — Smart Hospital Management SaaS Platform**
* **Live Demo:** [medisphere-rishi.netlify.app](https://medisphere-rishi.netlify.app)
* **Stack:** *Next.js, React, TypeScript, PostgreSQL, Supabase, Tailwind CSS, REST APIs*
* **Impact:**
  * Developed a full-stack multi-tenant healthcare SaaS platform integrating patient management, appointment scheduling, EHR records, billing/payment workflows, and laboratory/pharmacy operations.
  * Designed and implemented role-based access control (RBAC) architecture for secure multi-tier user permissions across administrators, doctors, receptionists, and patients.
  * Architected scalable REST APIs and optimized PostgreSQL schemas for high-concurrency real-time healthcare workflows.

### **3. LinkForge — Distributed URL Shortener & Link Analytics SaaS**
* **Live Demo:** [linkforge-rishi.netlify.app](https://linkforge-rishi.netlify.app)
* **Stack:** *Go (Golang), TypeScript, PostgreSQL, Redis, Docker, REST APIs*
* **Impact:**
  * Built a high-performance distributed URL shortener and link management SaaS featuring branded links, QR code generation, and low-latency redirection in Go.
  * Engineered real-time traffic analytics dashboards monitoring clicks, referral sources, geographical distribution, and device metrics with per-link performance reporting.
  * Implemented distributed Redis caching and rate-limiting middleware to sustain heavy concurrent traffic; containerized services with Docker.

### **4. Dragonn — Snapdragon AI Lab Challenge 2026**
* **Repository:** [github.com/RishiMaara/Dragonn](https://github.com/RishiMaara/Dragonn)
* **Stack:** *Python, PyTorch, ONNX Runtime, Whisper Speech AI, Qualcomm AI Stack*
* **Impact:**
  * Built an on-device NPU model scanner, converter, and validator alongside an optimized Whisper speech recognition application for the Snapdragon AI Lab Challenge 2026.
  * Benchmarked model latency and memory footprints across quantized on-device architectures to maximize edge inference performance.

### **5. Research Paper Answer Bot — RAG Assistant**
* **Context:** GenAI Pinnacle Plus Capstone Project
* **Stack:** *Python, LangChain, Anthropic Claude API, ChromaDB, RAGAS, Cross-Encoder*
* **Impact:**
  * Developed a retrieval-augmented generation (RAG) system ingesting academic research paper PDFs, segmenting text, and generating dense vector embeddings stored in ChromaDB.
  * Integrated cross-encoder reranking to enhance retrieved context relevance before prompting Claude with carefully engineered system prompts and few-shot examples.
  * Evaluated retrieval precision, faithfulness, and answer relevance using the RAGAS framework to iteratively optimize chunking strategies and prompt templates.

### **6. Exoplanet Detection System & Model Validation Framework**
* **Live Demo:** [nasa-exoplanet-predicter.vercel.app](https://nasa-exoplanet-predicter.vercel.app)
* **Stack:** *Python, Scikit-learn, Pandas, Random Forest, Model Validation*
* **Impact:**
  * Built a machine learning validation framework on NASA Kepler light-curve data, training Random Forest classifiers to predict confirmed exoplanets under extreme 99:1 class imbalance.
  * Applied probability-based feature selection, ROC-AUC optimization, and precision-recall calibration to minimize false positives and control detection thresholds.
  * Performed feature importance analysis to interpret light-curve planetary transit signals.

### **7. Pixel to Panel — Manga-to-Animation Computer Vision Pipeline**
* **Stack:** *Python, OpenCV, NumPy, ffmpeg, Computer Vision*
* **Impact:**
  * Designed an automated computer vision pipeline converting raw comic and manga pages into structured, isolated panels using adaptive thresholding, morphological filtering, and contour detection.
  * Extended the pipeline to image-to-video generation by applying dynamic Ken Burns and parallax camera motion to segmented panels, rendered to MP4 with ffmpeg.
  * Constructed a synthetic ground-truth dataset with known panel geometry to systematically benchmark and validate segmentation accuracy.

### **8. Smart Inventory & Order Management System**
* **Stack:** *Java, Spring Boot, Hibernate / JPA, MySQL, Postman*
* **Impact:**
  * Architected enterprise RESTful APIs following a layered Controller–Service–Repository design pattern in Java and Spring Boot.
  * Implemented role-based access control, input validation, custom exception hierarchies, and transactional database integrity with Hibernate/JPA and MySQL.
  * Developed comprehensive Postman test collections for automated API verification and documentation.

### **9. LinguGen — Interactive English Learning Platform**
* **Live Demo:** [bit.ly/lingugen](https://bit.ly/lingugen)
* **Stack:** *React, TypeScript, Flask, SQLite, REST APIs*
* **Impact:**
  * Developed an interactive language learning web platform featuring structured curriculum modules, dynamic quizzes, and real-time learner progress dashboards.

### **10. Coding Director — Interactive Developer Learning Platform**
* **Live Demo:** [bit.ly/codingdirector-rishi](https://bit.ly/codingdirector-rishi)
* **Stack:** *React, Next.js, TypeScript, PostgreSQL*
* **Impact:**
  * Engineered a full-stack developer education platform combining interactive coding exercises, typing muscle-memory drills, and gamified progress milestones.

---

## 6. Education

* **SNS College of Technology, Coimbatore**
  * **Degree:** Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning
  * **Period:** 2023 – May 2027 *(Current)*
  * **CGPA:** 8.5 / 10
  * **Coursework:** Data Structures & Algorithms, Object-Oriented Programming (OOP), Database Management Systems (DBMS), Operating Systems, Computer Networks, Machine Learning, Linear Algebra, Probability & Statistics, Software Engineering, System Design.

* **EBG Matric Higher Secondary School, Madurai**
  * **Degree:** Higher Secondary Certificate (HSC) & SSLC
  * **Period:** 2008 – 2023
  * **Score:** 80% in HSC (Mathematics, Physics, Chemistry, Computer Science).

---

## 7. Certifications & Achievements

### **Certifications:**
* **Oracle Cloud Infrastructure 2025 Certified Data Science Professional** *(Oracle, Oct 2025)*
* **Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate** *(Oracle, Sep 2025)*
* **Databricks Accredited Generative AI Fundamentals** *(Databricks, Sep 2025)*
* **AWS Academy Graduate — Generative AI Foundations** *(Amazon Web Services, Sep 2025)*

### **Honors & Competitions:**
* **LeetCode:** 738+ solved problems across Trees, Graphs, Dynamic Programming, and Arrays.
* **Naukri Campus CodeQuezt:** Ranked #26 nationwide out of 9,600+ participants.
* **IIT Bombay Hackathon:** Top 5 Finalist.
* **Hackathons & Competitions:** Razorpay AI Buildathon 2026, Smart India Hackathon (SIH), Accenture Innovation Challenge, NIT Trichy 36-hour AI Hackathon (Tata Centre for AI/ML).

