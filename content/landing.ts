// Copy and demo data for the landing page, kept out of the components so the
// words can change without touching markup. Everything here is example
// content: no real member, post or count appears on the landing page.

export type LabelKey = "asking" | "documented" | "lived" | "told" | "view";

export const LABEL_NAME: Record<LabelKey, string> = {
  asking: "Asking",
  documented: "Documented",
  lived: "Lived",
  told: "Told",
  view: "My view",
};

export const LABEL_ICON: Record<LabelKey, string> = {
  asking: "M4 5h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-8l-4.5 3.5V17H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M9.8 9.3a2.3 2.3 0 1 1 3.2 2.1c-.6.3-1 .8-1 1.4 M12 14.8v0",
  documented: "M3 5.5c3-1 6-.8 9 1.2 3-2 6-2.2 9-1.2v13c-3-1-6-.8-9 1.2-3-2-6-2.2-9-1.2z M12 6.7v13.2",
  lived: "M8 3.5c1.6 0 2.5 2 2.5 4.5S9.6 12.5 8 12.5 5.5 10.5 5.5 8 6.4 3.5 8 3.5z M6.5 15.5h3 M16 7.5c1.6 0 2.5 2 2.5 4.5s-.9 4.5-2.5 4.5-2.5-2-2.5-4.5.9-4.5 2.5-4.5z M14.5 19.5h3",
  told: "M5 7h5v4.5c0 3-1.7 5-4.5 6 M14 7h5v4.5c0 3-1.7 5-4.5 6",
  view: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12z M12 9.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 1 0 0-5z",
};

export const CONTACT_EMAIL = "admin@myvedaverse.in";

export const NAV = [
  { href: "#different", label: "What's different" },
  { href: "#try", label: "Try it" },
  { href: "#trust", label: "How it's run" },
  { href: "#faq", label: "Questions" },
];

export const REACTIONS = ["Helpful", "Made me think", "Relatable"];

export const SWAPS = [
  {
    was: "public like and follower counts",
    title: "Reactions reach the person, not a scoreboard.",
    how: "Tap Helpful, Made me think or Relatable. The author sees it. Nobody sees a total.",
    ui: "reaction" as const,
  },
  {
    was: "a feed that never ends",
    title: "A feed with a natural stopping point.",
    how: "When you've seen everything from the people and topics you follow, it says so. No autoplay.",
    ui: "end" as const,
  },
  {
    was: "opinion and fact look identical",
    title: "Every post says what it rests on.",
    how: "A source, something you lived, something you were told, or your own view. One tap when you post.",
    ui: "labels" as const,
  },
  {
    was: "resharing strips the original",
    title: "Your take travels with the original.",
    how: "Share with a few words of your own. The post you're responding to stays attached, intact.",
    ui: "share" as const,
  },
  {
    was: "the sharpest reply wins",
    title: "Understand first, then disagree.",
    how: "To argue with someone, first put their view in your own words. When they say it's fair, your reply opens.",
    ui: "restate" as const,
  },
];

export const LABEL_EXAMPLES: { k: LabelKey; what: string; example: string }[] = [
  { k: "asking", what: "A question you want answered. It goes to people who said they know the topic.", example: "Why do some traditions survive after we forget why they began?" },
  { k: "documented", what: "Can be checked against a record. Needs a specific source readers can open.", example: "Rani-ki-Vav in Patan is on the UNESCO World Heritage List." },
  { k: "lived", what: "Happened to you, or in front of you.", example: "I learned to swim at thirty-four. The water wasn't the hard part." },
  { k: "told", what: "Heard, passed down, commonly said. Family stories live here.", example: "My dadi said weddings moved to the night in unsafe centuries." },
  { k: "view", what: "Your opinion, or your reading of something. Welcome, and marked as one.", example: "A healthy workplace is one where you can say ‘I don't know.’" },
];

export const POLL = {
  question: "Should financial literacy be taught in school?",
  options: [
    { label: "Yes, as its own subject", pct: 46 },
    { label: "Yes, inside maths classes", pct: 29 },
    { label: "Better learned at home", pct: 25 },
  ],
};

export const RINGS: { who: string; desc: string }[] = [
  { who: "Only you", desc: "Private notes stay yours unless you choose to share them." },
  { who: "A small group", desc: "A few people you pick by name." },
  { who: "Your communities", desc: "Members of the communities you've joined." },
  { who: "People you've met", desc: "People you've talked with here." },
  { who: "Anyone", desc: "Visible to anyone who finds your profile." },
];

export const CIRCLES = [
  { name: "Big Questions", fmt: "Open to join · notes kept", week: "are we living in a simulation, and would it change anything?", hosts: "Rohan Das and Meera Nair" },
  { name: "Why Do We Do This?", fmt: "Open to join · notes kept", week: "why do families in the same city eat so differently?", hosts: "Kamala Devi and Asha Verma" },
  { name: "First-time Managers", fmt: "Members only · stays inside", week: "what makes a workplace genuinely healthy?", hosts: "Kabir Shah and Sana Qureshi" },
  { name: "Local: Ahmedabad", fmt: "Open to neighbours · posts fade after 7 days", week: "weekend heritage walks, and which stepwells open early.", hosts: "Nidhi Parekh" },
];

export const CLAIMS = [
  { claim: "A feed that ends can feel better than one that doesn't.", test: "If people stop coming back because the feed ends, we change the feed, not the metric." },
  { claim: "Restating a view before rebutting it improves understanding.", test: "If independent reviewers can't tell those conversations from ordinary ones, the step goes." },
  { claim: "Private reactions keep people posting.", test: "If contribution drops without public counts, we say so and rethink." },
];

export const ROADMAP = [
  { title: "Now: early access", body: "Invited members are posting, asking and trying circles on the web.", now: true },
  { title: "Next: the early list", body: "Invitations go out in small groups, and the first members start the first circles." },
  { title: "Then: open web beta", body: "Posting, circles and the feed, shaped by the people using them." },
  { title: "Later: Android and iOS", body: "Once the web version is working well." },
];

export const FIRST_TEN = [
  { title: "Pick topics", body: "Your first feed starts there" },
  { title: "Choose quiet hours", body: "Notifications wait until morning" },
  { title: "Ask one question", body: "It goes to people who know the topic" },
  { title: "Set privacy", body: "By moving it, not by reading it" },
];

export const FAQ: { q: string; a: string; etymology?: true }[] = [
  { q: "Is this a religious app?", a: "No. It's a social platform. People talk about food, work, books, cities, science, family and ideas. Nobody is asked to believe anything, and nobody is mocked for what they believe." },
  { q: "Do I need to know anything about Indian culture?", a: "No. The team is in India and Indian life comes up naturally, because it's part of many members' lives. If you're curious, you're welcome." },
  { q: "Why “Veda Verse”?", a: "Veda comes from the Sanskrit root vid, to know. Verse comes from the Latin versus, a turning or a line. We liked the idea of knowing things one turn at a time, together.", etymology: true },
  { q: "Without likes, how will I know anyone read my post?", a: "People can react privately with Helpful, Made me think or Relatable, and you'll see who and why. You just won't be ranked against anyone else." },
  { q: "Will AI write posts?", a: "People write posts. The assistant can help you start a reply or summarise a thread, and anything software helped create is labelled." },
  { q: "When can I join?", a: "Invitations go out in stages, starting with the early list. You'll get one email when yours is ready, and nothing before then. If you already have an invitation, sign in with the email it was sent to." },
];
