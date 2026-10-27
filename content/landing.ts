// Copy for the landing page, kept out of the components so the words can
// change without touching markup. It follows the Veda Verse Modernist site design (v2)
// and its copy review: every verse shown is cited, nothing is invented, and a
// slot with no verified content stays empty rather than showing a placeholder.

export const CONTACT_EMAIL = "admin@myvedaverse.in";

// What the site is, in the words every footer uses (the home page's and
// PageShell's), so the site describes itself the same way everywhere.
export const SITE_ABOUT = "Management concepts in plain words, each read beside India’s classical texts. Made by an independent team in India.";

// The community lives in the app. Signed-in members land on their home;
// anyone else is sent to sign in first.
export const COMMUNITY_HREF = "/home";

// The notes beside the example thread, numbered to match its markers. Each is
// a rule the app enforces (see the README's "Rules the backend enforces"): keep
// them true to it. Each name is a short sentence, so the five read as a set.
export const COMMUNITY_NOTES = [
  { name: "Replies are grouped, never ranked", line: "Each sits under how it relates: answers, builds on, disagrees. Nothing climbs by votes." },
  { name: "Every answer says what it rests on", line: "Lived, Told and My view say so plainly. Documented needs a source that points to a page or an entry." },
  { name: "Disagreeing needs a reason", line: "It comes first, so the argument stays on the idea." },
  { name: "Helpful is private", line: "The writer is thanked in their inbox. Nobody sees a total, not even them." },
  { name: "You choose the label", line: "The app may suggest one; you always have the last word." },
];
