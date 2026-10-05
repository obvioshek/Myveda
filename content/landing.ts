// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse Modernist site design (v2)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

export const NAV = [
  { href: "#explore", label: "Explore" },
  { href: "#chapters", label: "Chapters" },
  { href: "#inside", label: "Sample concept" },
  { href: "#together", label: "Community" },
  { href: "#practice", label: "For exam students" },
  { href: "#about", label: "About" },
];

// Three question cards. Each pairs a specific fact with an open question. A card
// either opens the area search for its concept (`search`) or the sample concept.
// Add a card only after its source has been verified.
export const QUESTIONS = [
  { n: "01", fact: "Long before modern auditing, the Arthashastra listed 40 ways officials could embezzle funds.", question: "Which of them still happen today?", concept: "Internal audit", ref: "Arthaśāstra 2.8", search: "internal audit" },
  { n: "02", fact: "Kautilya tested a minister’s integrity in secret before giving him office.", question: "Would his method be acceptable today?", concept: "Selection", ref: "Arthaśāstra 1.10", search: null },
  { n: "03", fact: "The Gita says your right is to the action, never to its fruits.", question: "So why do modern firms pay for results?", concept: "Motivation", ref: "Bhagavad Gītā 2.47", search: "motivation" },
];

export const STEPS = [
  { name: "Core Idea", line: "What it means, how it works, its types and the key thinkers" },
  { name: "Check Yourself", line: "A few quick questions, with exam practice if you want it" },
  { name: "Ancient Lens", line: "A short story, the original verse, what it adds, and where it differs" },
  { name: "Reflect & Discuss", line: "One question to think about, and others’ answers to compare" },
  { name: "One-page Summary", line: "The whole idea on one screen, to keep or share" },
];

// The ten areas, each with a guiding question and the concepts the search
// looks through. Exam unit tags are deliberately not shown for now.
export const AREAS = [
  { n: "I", name: "Foundations of Management & Ethics", question: "How do good managers decide, and decide rightly?", concepts: ["planning", "organising", "delegation", "decision making", "control", "ethics", "CSR", "management thought"] },
  { n: "II", name: "People & Organisations", question: "Why do people give their best to some leaders and not others?", concepts: ["motivation", "leadership", "teams", "culture", "personality", "perception", "conflict", "power", "change"] },
  { n: "III", name: "Managing People at Work", question: "How do you choose, develop and keep the right people?", concepts: ["recruitment", "selection", "training", "performance appraisal", "compensation", "industrial relations"] },
  { n: "IV", name: "Accounting & Financial Management", question: "What do the numbers really say about a business?", concepts: ["financial statements", "ratio analysis", "working capital", "cost accounting", "budgeting", "internal audit"] },
  { n: "V", name: "Corporate Finance & Investment", question: "Where should money go, and at what risk?", concepts: ["capital budgeting", "cost of capital", "dividend policy", "portfolio", "risk and return", "derivatives"] },
  { n: "VI", name: "Strategy & Marketing", question: "How does an organisation win, and keep winning?", concepts: ["SWOT", "competitive advantage", "five forces", "marketing mix", "segmentation", "positioning", "pricing"] },
  { n: "VII", name: "Consumers, Brands & Supply Chains", question: "Why do people buy, and how does it reach them?", concepts: ["consumer behaviour", "branding", "supply chain", "logistics", "retail", "distribution"] },
  { n: "VIII", name: "Numbers & Decisions", question: "How do you decide well when the data is uncertain?", concepts: ["statistics", "probability", "hypothesis testing", "regression", "linear programming", "research methods"] },
  { n: "IX", name: "Global Business & Technology", question: "What changes when business crosses borders and screens?", concepts: ["international business", "FDI", "exchange rates", "WTO", "e-commerce", "information systems"] },
  { n: "X", name: "Entrepreneurship & Small Business", question: "How does an idea become an enterprise?", concepts: ["startups", "business plan", "MSME", "innovation", "venture capital", "family business"] },
];

// The ten texts. Period, genre and translation are left out until they are
// filled in and verified.
export const TEXTS = ["Arthaśāstra", "Bhagavad Gītā", "Tirukkuṟaḷ", "Ṛgveda", "Upaniṣads", "Vidura Nīti", "Pañcatantra", "Hitopadeśa", "Nītiśataka", "Śukranīti"];

export const COMPARE = [
  { label: "Tested first", modern: "Ability: knowledge, skills and fit for the role.", ancient: "Character: honesty and loyalty under temptation." },
  { label: "How", modern: "Screening, tests, interviews and reference checks, with the candidate’s knowledge.", ancient: "Secret trials by the king’s agents, through four temptations." },
  { label: "What follows", modern: "The strongest candidate is offered the role.", ancient: "The role depends on which tests he passed." },
];

