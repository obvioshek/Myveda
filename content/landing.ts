// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse Modernist site design (v2)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

// The community lives in the app. Signed-in members land on their home;
// anyone else is sent to sign in first.
export const COMMUNITY_HREF = "/home";

// The header links: the chapters (with their drop-down), the two reference pages,
// the community, and the footer's "about" block.
export const NAV = [
  { href: "#chapters", label: "Chapters" },
  { href: "/learn/glossary", label: "Glossary" },
  { href: "/learn/revision", label: "Revision" },
  { href: COMMUNITY_HREF, label: "Community" },
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

// What the community offers, as the app actually works (see the README's product
// table): keep each line true to a feature that exists.
export const COMMUNITY_POINTS = [
  { name: "Ask about a concept", line: "Answers are grouped by how they help: the one that helped, ones that build on it, and the views that disagree." },
  { name: "Read with others", line: "Circles, boards, cohorts and practice groups, each with its own threads and rules." },
  { name: "Know what is sourced", line: "Posts keep what is documented, with its source, apart from what is told." },
  { name: "Quiet by design", line: "No counts or trending alerts, and notifications held overnight, from 10 pm to 8 am." },
];

// The texts the chapters quote from. Add one here only once a chapter cites it.
export const TEXTS = ["Arthaśāstra", "Bhagavad Gītā", "Tirukkuṟaḷ", "Ṛgveda", "Atharvaveda", "Upaniṣads", "Manusmṛti", "Yoga Sūtras"];
