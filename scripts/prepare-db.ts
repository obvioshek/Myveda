// Brings the database up to date before a deploy is built (see "vercel-build"):
// pending migrations, the onboarding topic list, then Supabase's Data API
// closed. Only production deploys do this — a preview build for an unmerged
// branch must never migrate the live database — and a build with no database
// configured skips it, since the site then runs on its demo content.
import "dotenv/config";
import { execSync } from "node:child_process";

const target = process.env.VERCEL_ENV; // production | preview | development; unset outside Vercel

if (!process.env.DATABASE_URL) {
  console.log("[prepare-db] no DATABASE_URL; skipped");
} else if (target && target !== "production") {
  console.log(`[prepare-db] ${target} build; the database is only changed by production deploys`);
} else {
  for (const step of ["prisma db migrate", "tsx prisma/seed-app.ts --topics-only", "tsx scripts/lock-data-api.ts"]) {
    console.log(`[prepare-db] ${step}`);
    execSync(`npx ${step}`, { stdio: "inherit" });
  }
}
