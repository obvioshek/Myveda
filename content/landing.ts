// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse Modernist site design (v2)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

// The community lives in the app. Signed-in members land on their home;
// anyone else is sent to sign in first.
export const COMMUNITY_HREF = "/home";

// The header links: the chapters (with their menu), the two reference pages
// and the community section of the home page, which shows how it works before
// anyone is asked to sign in.
export const NAV = [
  { href: "#chapters", label: "Chapters" },
  { href: "/learn/glossary", label: "Glossary" },
  { href: "/learn/revision", label: "Revision" },
  { href: "#community", label: "Community" },
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

// The notes beside the example thread, numbered to match its markers. Each is
// a rule the app enforces (see the README's "Rules the backend enforces"): keep
// them true to it.
export const COMMUNITY_NOTES = [
  { name: "Grouped, never ranked", line: "Replies sit under how they relate: answers, builds on, disagrees. Nothing climbs by votes." },
  { name: "Every claim says what it rests on", line: "Lived, Told and My view say so plainly. Documented needs a source that points to a page or an entry." },
  { name: "Disagreeing needs a reason", line: "Said up front, so the argument is about the idea." },
  { name: "Helpful is private", line: "The writer is thanked in their inbox. Nobody sees a total, not even them." },
  { name: "You choose the label", line: "The app may suggest one; you always have the last word." },
];

// The texts and voices the chapters quote, with the language each passage is
// shown in. Add one here only once a chapter cites it.
export const TEXTS: { name: string; lang: string }[] = [
  { name: "Arthaśāstra", lang: "Sanskrit" },
  { name: "Bhagavad Gītā", lang: "Sanskrit" },
  { name: "Ṛgveda and Atharvaveda", lang: "Sanskrit" },
  { name: "Upaniṣads", lang: "Sanskrit" },
  { name: "Manusmṛti", lang: "Sanskrit" },
  { name: "Yoga Sūtras", lang: "Sanskrit" },
  { name: "Tattvārtha Sūtra", lang: "Sanskrit, Jain" },
  { name: "Bodhicaryāvatāra", lang: "Sanskrit and Tibetan" },
  { name: "Dhammapada", lang: "Pali" },
  { name: "Tirukkuṟaḷ", lang: "Tamil" },
  { name: "Guru Granth Sahib", lang: "Punjabi" },
  { name: "Kabīr and Rahīm", lang: "Hindi" },
  { name: "Tukārām", lang: "Marathi" },
  { name: "Tagore", lang: "Bengali" },
  { name: "Nārāyaṇa Guru", lang: "Malayalam" },
  { name: "Basavaṇṇa", lang: "Kannada" },
  { name: "Vēmana", lang: "Telugu" },
];
