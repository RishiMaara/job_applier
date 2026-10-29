# Rishikesh AV — Live Profile & Portfolio (Vercel Ready)

A modern, high-performance personal profile and engineering portfolio built with **Next.js 16 (Turbopack)**, **Tailwind CSS v4**, and **Single-User Owner Authentication**.

---

## Features

* **Public View (Recruiters & Engineers):**
  * **Interactive Hero:** Professional headline, photo, relocation status, and live social links.
  * **Metrics Bar:** 738+ LeetCode problems solved, Top 5 IIT Bombay Hackathon, Rank #26 in Naukri CodeQuezt, 430+ automated tests.
  * **Work Experience:** Detailed production achievements at D Trade Capital, Pc World, and Vyukshathriya Technologix.
  * **10 Featured Systems & Projects:** AmongResolver (Razorpay Buildathon), MediSphere SaaS, LinkForge (Go + Redis), Dragonn (Snapdragon AI Lab), Research Paper RAG Bot, Exoplanet Detection, Pixel to Panel, Smart Inventory, and more.
  * **Categorized Technical Skills:** Languages, Web/Microservices, AI/GenAI/ML, Databases, DevOps/Cloud, Engineering Fundamentals.
  * **Education & Certifications:** SNS College of Technology, EBG Matric HSS, Oracle Cloud, Databricks, and AWS credentials.

* **Owner-Only Private Portal (Password Protected):**
  * Click **"Owner Login"** anywhere on the site (or in the navbar/footer).
  * Sign in with your owner password (default local: `rishi2026`).
  * Unlocks the **Owner Portal**:
    * **11 Private Master Facts & AI Context** for job tailoring.
    * **Application Pipeline Tracker**: Add and manage applications, interview stages, and private notes.
    * **Master Export Access**: One-click access to download `dossier-master-export.json`.
    * **Secure Logout**: Clears your encrypted session cookie.

---

## Quick Start (Local)

1. Navigate to the project directory:
   ```bash
   cd profile-live
   ```

2. Run development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Deploying to Vercel (Free & Instant)

### Option 1: Via GitHub & Vercel Dashboard (Recommended)

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Rishikesh AV Live Profile"
   git remote add origin https://github.com/RishiMaara/profile-live.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New..." → "Project"**.
3. Import your `profile-live` repository.
4. Under **Environment Variables**, add:
   * `ADMIN_PASSWORD`: Your secret password to access your owner dashboard.
   * `SESSION_SECRET`: A random 32+ character string for JWT session encryption.
5. Click **Deploy**! Your site is live in ~30 seconds with a free `.vercel.app` domain and SSL.

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```
Follow the prompts and add your environment variables when requested.
