// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse Modernist site design (v2)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

// The community lives in the app. Signed-in members land on their home;
// anyone else is sent to sign in first.
export const COMMUNITY_HREF = "/home";

export const NAV = [
  { href: "#chapters", label: "Chapters" },
  { href: "#steps", label: "How it works" },
  { href: COMMUNITY_HREF, label: "Community" },
  { href: "#practice", label: "For exam students" },
  { href: "#about", label: "About" },
];

// Three question cards. Each pairs a fact from a classical text with an open
// question, and leads to the lesson where that passage is read: `chapter` is the
// chapter's slug and `pairing` the passage's index in it. Add a card only once
// its passage is in a chapter.
export const QUESTIONS = [
  { n: "01", fact: "The Arthashastra says catching an official who embezzles is as hard as telling when a fish drinks water.", question: "Is the agency problem older than the company?", concept: "Corporate governance", ref: "Arthaśāstra 2.9", chapter: "corporate-governance", pairing: 0 },
  { n: "02", fact: "Kautilya tested a minister’s integrity in secret before assigning him to a post.", question: "Would his method be acceptable today?", concept: "Selection", ref: "Arthaśāstra 1.10", chapter: "recruitment-and-selection", pairing: 1 },
  { n: "03", fact: "The Tirukkural asks who could ever ruin a ruler who keeps friends willing to rebuke him.", question: "Why do teams still punish the person who disagrees?", concept: "Groupthink", ref: "Tirukkuṟaḷ 447", chapter: "group-behaviour-and-leadership", pairing: 3 },
];

export const STEPS = [
  { name: "Core Idea", line: "What it means, how it works, its types and the thinkers behind it" },
  { name: "Check Yourself", line: "A few quick questions, each answered with the reasoning" },
  { name: "Ancient Lens", line: "A cited passage, what it adds, and where it differs" },
  { name: "Reflect & Discuss", line: "One question to sit with, and a place to write your answer" },
  { name: "One-page Summary", line: "The whole idea in a few lines, to revise from or share" },
];

// The texts the chapters quote from. Add one here only once a chapter cites it.
export const TEXTS = ["Arthaśāstra", "Bhagavad Gītā", "Tirukkuṟaḷ", "Ṛgveda", "Atharvaveda", "Upaniṣads", "Manusmṛti", "Yoga Sūtras"];
