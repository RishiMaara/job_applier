import fs from "node:fs";
import crypto from "node:crypto";
import { hashPassword } from "../src/lib/auth/password-hash.ts";

async function main() {
  const defaultPass = "dossier123";
  const passHash = await hashPassword(defaultPass);
  const dossierSecret = crypto.randomBytes(32).toString("base64");
  const postgresPassword = crypto.randomBytes(16).toString("hex");

  const envContent = `# Dossier Environment Configuration
# Sign in with password: ${defaultPass} (Hash below)
DOSSIER_PASSWORD=${passHash}
DOSSIER_SECRET=${dossierSecret}

# PostgreSQL Database Configuration
POSTGRES_USER=postgres
POSTGRES_PASSWORD=${postgresPassword}
POSTGRES_DB=dossier
POSTGRES_PORT=5432
DATABASE_URL="postgresql://postgres:${postgresPassword}@localhost:5432/dossier"

# Optional telemetry (off by default)
DOSSIER_TELEMETRY=off
`;

  fs.writeFileSync(".env", envContent, "utf8");
  console.log("Successfully created .env with password: " + defaultPass);
}

main().catch(console.error);
