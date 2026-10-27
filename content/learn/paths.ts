// Two ways into the chapters besides the syllabus order, for the chapter index
// (/learn): a short path for someone new to management, and a list of
// problems a working manager might arrive with, each answered by a few
// chapters. Slugs are checked when the site is built.

import { chapterBySlug } from "./index";

export const START_PATH: { slug: string; why: string }[] = [
  { slug: "principles-of-management", why: "What management is, who first wrote about it, and the roles and skills it takes." },
  { slug: "functions-of-management", why: "What managers do: planning, organising, staffing, directing, coordinating, controlling." },
  { slug: "values-learning-and-motivation", why: "Why people act as they do, and what moves them." },
  { slug: "group-behaviour-and-leadership", why: "How groups form, and what leading one involves." },
  { slug: "strategy-and-strategic-management", why: "How a whole organisation chooses where to go." },
  { slug: "marketing-concepts", why: "How a firm decides what to offer, and to whom." },
];

export const PROBLEMS: { problem: string; slugs: string[] }[] = [
  { problem: "Setting a price", slugs: ["elasticity-of-demand", "pricing-decisions", "market-structures"] },
  { problem: "Choosing where to compete", slugs: ["external-analysis", "internal-analysis", "portfolio-analysis"] },
  { problem: "Leading a team", slugs: ["group-behaviour-and-leadership", "values-learning-and-motivation", "interpersonal-behaviour"] },
  { problem: "Hiring the right people", slugs: ["job-analysis-evaluation-and-design", "recruitment-and-selection", "human-resource-planning"] },
  { problem: "Keeping customers", slugs: ["customer-relationship-marketing", "brand-management", "services-marketing"] },
  { problem: "Growing the business", slugs: ["growth-strategies", "cooperation-internationalisation-and-retrenchment", "product-decisions"] },
  { problem: "Making a hard call", slugs: ["decision-making", "business-ethics-and-csr", "strategic-decisions-and-levels-of-strategy"] },
  { problem: "Handling pressure and conflict", slugs: ["emotions-and-stress", "organisational-justice-and-whistleblowing", "organisational-culture-and-climate"] },
  { problem: "Handling a union or a dispute", slugs: ["industrial-relations", "trade-unions-and-collective-bargaining", "labour-welfare-and-social-security"] },
  { problem: "Managing performance and careers", slugs: ["performance-management-and-appraisal", "career-planning-and-development", "talent-management-and-skill-development"] },
  { problem: "Reading a company's accounts", slugs: ["preparation-of-financial-statements", "ratio-analysis", "cash-flow-statement"] },
  { problem: "Costing and pricing a product", slugs: ["cost-accounting-and-cost-sheet", "activity-based-and-life-cycle-costing", "marginal-costing-and-cvp-analysis"] },
  { problem: "Cutting costs", slugs: ["target-costing-kaizen-costing-and-jit", "standard-costing-and-variance-analysis", "budgeting-and-budgetary-control"] },
  { problem: "Funding the business", slugs: ["sources-of-finance", "cost-of-capital", "capital-structure-theories"] },
  { problem: "Leading a change", slugs: ["organisation-development-and-change", "organisational-culture-and-climate", "employee-engagement-and-work-life-balance"] },
];

const missing = [...START_PATH.map(p => p.slug), ...PROBLEMS.flatMap(p => p.slugs)].filter(s => !chapterBySlug(s));
if (missing.length) throw new Error(`paths.ts names chapters that do not exist: ${missing.join(", ")}`);
