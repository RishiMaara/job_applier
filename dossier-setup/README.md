# Dossier Setup & Master Data

This directory contains the self-hosted **Dossier** Docker configuration files, setup scripts, and master profile exports.

---

## Files Included

1. **`dossier-master-export.json`**:
   The full Schema v5 Dossier export containing Rishikesh AV's complete profile (basics, 58 skills, 5 languages, 3 work experience roles, 10 key projects, education, and 11 facts for Dossier's AI).
2. **`compose.production.yml`**:
   Production Docker Compose configuration pulling `ghcr.io/aientech/dossier:latest` with PostgreSQL 18.
3. **`compose.yml`**:
   Development Docker Compose file.
4. **`MASTER_PROFILE.md`**:
   Human-readable master profile reference.
5. **`scripts/setup-env.ts`**:
   Script to generate argon2id password hashes and cryptographic secrets for `.env`.
6. **`scripts/generate-master-export.ts`**:
   Script to compile the master export JSON.

---

## How to Run Dossier Locally

1. Open Docker Desktop.
2. Copy `.env.example` to `.env` in this directory.
3. Configure `DOSSIER_PASSWORD` (hash), `DOSSIER_SECRET`, and `POSTGRES_PASSWORD`.
4. Start the containers:
   ```bash
   docker compose -f compose.production.yml up -d
   ```
5. Open `http://localhost:3000` and sign in.
6. Go to **Settings → Restore from backup / Import** and select `dossier-master-export.json`.
