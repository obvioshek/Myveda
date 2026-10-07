// Two ways into the chapters besides the syllabus order, for the chapter index
// (/learn): a short path for someone new to management, and a list of
// problems a working manager might arrive with, each answered by a few
// chapters. Slugs are checked when the site is built.

import { chapterBySlug } from "./index";

export const START_PATH: { slug: string; why: string }[] = [
  { slug: "principles-of-management", why: "What management is, the classical writers, and the roles and skills it takes." },
  { slug: "functions-of-management", why: "The work itself: planning, organising, staffing, directing, coordinating, controlling." },
  { slug: "values-learning-and-motivation", why: "Why people act as they do, and what moves them." },
  { slug: "group-behaviour-and-leadership", why: "How groups form, and what leading one involves." },
  { slug: "strategy-and-strategic-management", why: "How a whole organisation chooses where to go." },
  { slug: "marketing-concepts", why: "How it decides what to offer, and to whom." },
];

export const PROBLEMS: { problem: string; slugs: string[] }[] = [
  { problem: "Setting a price", slugs: ["elasticity-of-demand", "pricing-decisions", "market-structures"] },
  { problem: "Choosing where to compete", slugs: ["external-analysis", "internal-analysis", "portfolio-analysis"] },
  { problem: "Leading a team", slugs: ["group-behaviour-and-leadership", "values-learning-and-motivation", "interpersonal-behaviour"] },
  { problem: "Hiring the right people", slugs: ["job-analysis-evaluation-and-design", "recruitment-and-selection", "human-resource-planning"] },
  { problem: "Keeping customers", slugs: ["customer-relationship-marketing", "brand-management", "services-marketing"] },
  { problem: "Growing the business", slugs: ["growth-strategies", "cooperation-internationalisation-and-retrenchment", "product-decisions"] },
  { problem: "Making a hard call", slugs: ["decision-making", "business-ethics-and-csr", "strategic-decisions-and-levels-of-strategy"] },
  { problem: "Pressure and conflict at work", slugs: ["emotions-and-stress", "organisational-justice-and-whistleblowing", "organisational-culture-and-climate"] },
];

const missing = [...START_PATH.map(p => p.slug), ...PROBLEMS.flatMap(p => p.slugs)].filter(s => !chapterBySlug(s));
if (missing.length) throw new Error(`paths.ts names chapters that do not exist: ${missing.join(", ")}`);
