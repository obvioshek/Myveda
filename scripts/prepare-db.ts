// Brings the database up to date before a deploy is built (see "vercel-build"):
// pending migrations, then the onboarding topic list. Only production deploys do this — a preview build for an unmerged
// branch must never migrate the live database — and a build with no database
// configured skips it: the landing page works without one.
import "dotenv/config";
import { execSync } from "node:child_process";

const target = process.env.VERCEL_ENV; // production | preview | development; unset outside Vercel

// What the deploy is about to connect with, so a bad DATABASE_URL can be told
// apart from a bad password in the build log. The password is never printed.
function describe(raw: string) {
  let u: URL;
  try {
    u = new URL(raw);
  } catch {
    return "DATABASE_URL is not a valid address (check for quotes, spaces or a leading DATABASE_URL=)";
  }
  const password = decodeURIComponent(u.password);
  const problems = [
    /\[|\]/.test(password) && "contains [ or ] (was [YOUR-PASSWORD] replaced, brackets included?)",
    /PASSWORD/.test(password) && "still contains a placeholder",
    /\s/.test(password) && "contains a space",
    !password && "is empty",
  ].filter(Boolean);
  return `connecting as ${decodeURIComponent(u.username)} to ${u.hostname}:${u.port || 5432}${u.pathname}` +
    ` (sslmode=${u.searchParams.get("sslmode") ?? "unset"}, password: ${password.length} characters` +
    `${problems.length ? "; password " + problems.join(", ") : ""})`;
}

if (!process.env.DATABASE_URL) {
  console.log("[prepare-db] no DATABASE_URL; skipped");
} else if (target && target !== "production") {
  console.log(`[prepare-db] ${target} build; the database is only changed by production deploys`);
} else {
  console.log(`[prepare-db] ${describe(process.env.DATABASE_URL)}`);
  for (const step of ["prisma db migrate", "tsx prisma/seed-app.ts --topics-only"]) {
    console.log(`[prepare-db] ${step}`);
    execSync(`npx ${step}`, { stdio: "inherit" });
  }
}
