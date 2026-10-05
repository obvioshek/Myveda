// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse landing design (v4)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

// Page sections are numbered in Devanagari (१–६) so they never collide with the
// Roman numerals that belong to the ten areas.
export const SECTIONS = [
  { id: "s1", num: "१", label: "Questions" },
  { id: "s2", num: "२", label: "A look inside" },
  { id: "s3", num: "३", label: "How it’s taught" },
  { id: "s4", num: "४", label: "Ten areas" },
  { id: "s5", num: "५", label: "The texts" },
  { id: "s6", num: "६", label: "Together" },
] as const;

export const NAV = [
  { href: "#s4", label: "Explore" },
  { href: "#s5", label: "Ancient Lens" },
  { href: "#s6", label: "Community" },
  { href: "#about", label: "About" },
];

// Three question cards. Each pairs a specific fact with an open question and
// links to a concept. Add a card only after its source has been verified.
export const QUESTIONS = [
  {
    fact: "Long before modern auditing, the Arthashastra listed 40 ways officials could embezzle funds.",
    question: "Which of them still happen today?",
    concept: "Internal audit",
    ref: "Arthaśāstra 2.8",
    tone: "terracotta" as const,
  },
  {
    fact: "Kautilya tested a minister’s integrity in secret before giving him office.",
    question: "Would his method be acceptable today?",
    concept: "Selection",
    ref: "Arthaśāstra 1.10",
    tone: "sage" as const,
  },
  {
    fact: "The Gita says your right is to the action, never to its fruits.",
    question: "So why do modern firms pay for results?",
    concept: "Motivation",
    ref: "Bhagavad Gītā 2.47",
    tone: "terracotta" as const,
  },
];

export const STEPS = [
  { name: "Core Idea", line: "What it means, how it works, its types and the key thinkers", seen: true },
  { name: "Check Yourself", line: "A few quick questions, with exam practice if you want it", seen: false },
  { name: "Ancient Lens", line: "A short story, the original verse, what it adds, and where it differs", seen: true },
  { name: "Reflect & Discuss", line: "One question to think about, and others’ answers to compare", seen: true },
  { name: "One-page Summary", line: "The whole idea on one screen, to keep or share", seen: false },
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

export const SEARCH_HINTS = ["motivation", "SWOT", "working capital"];

// Ten texts. `start` is the one concept to begin with; it stays empty until a
// verified concept exists for that text. Period, genre and translation are left
// out until they are filled in.
export const TEXTS = [
  { name: "Arthaśāstra", script: "अर्थशास्त्र", desc: "Kauṭilya’s treatise on statecraft, economy and administration.", start: "Selection" },
  { name: "Bhagavad Gītā", script: "भगवद्गीता", desc: "A dialogue on duty and action, set on the eve of battle in the Mahābhārata.", start: "Motivation" },
  { name: "Tirukkuṟaḷ", script: "திருக்குறள்", desc: "Tiruvaḷḷuvar’s 1,330 couplets on virtue, wealth and love.", start: null },
  { name: "Ṛgveda", script: "ऋग्वेद", desc: "The oldest of the Vedas, and the source of this site’s motto.", start: null },
  { name: "Upaniṣads", script: "उपनिषद्", desc: "Dialogues on the self, on knowledge and on what is real.", start: null },
  { name: "Vidura Nīti", script: "विदुरनीति", desc: "Vidura’s counsel to King Dhṛtarāṣṭra, from the Mahābhārata.", start: null },
  { name: "Pañcatantra", script: "पञ्चतन्त्र", desc: "Animal fables written to teach princes practical judgement.", start: null },
  { name: "Hitopadeśa", script: "हितोपदेश", desc: "Fables of friendship, alliance and conflict.", start: null },
  { name: "Nītiśataka", script: "नीतिशतक", desc: "Bhartṛhari’s hundred verses on conduct and judgement.", start: null },
  { name: "Śukranīti", script: "शुक्रनीति", desc: "A treatise on polity and administration attributed to Śukra.", start: null },
];

export const COMPARE = [
  { label: "Tested first", modern: "Ability: knowledge, skills and fit for the role.", ancient: "Character: honesty and loyalty under temptation." },
  { label: "How", modern: "Screening, tests, interviews and reference checks, with the candidate’s knowledge.", ancient: "Secret trials by the king’s agents, through four temptations." },
  { label: "What follows", modern: "The strongest candidate is offered the role.", ancient: "The role depends on which tests he passed." },
];

export const PRACTICE = ["Practice questions", "One-page summaries", "A progress tracker", "A revision shelf"];
