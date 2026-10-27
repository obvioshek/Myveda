// The site's pages in three groups, by what the reader came to do: learn,
// practise, or keep track. The header's menu on phones and the footer both
// list these, so a page is found in the same place from anywhere. Keep each
// group short; a page that fits none probably belongs in an existing one.
// A label is the page's name: a noun phrase in sentence case (only "Start
// here" is a verb), and the page's eyebrow repeats it, so the words a reader
// clicked are the first words they see.

export type NavLink = {
  href: string;
  label: string;
  lang?: string;
  /** What the page is for, in a line: shown in search results. */
  about?: string;
  /** Words a reader might search for it by (content/learn/search.ts). */
  also?: string;
};
export type NavGroup = { id: string; label: string; links: NavLink[] };

export const SITE_MAP: NavGroup[] = [
  {
    id: "learn",
    label: "Learn",
    links: [
      { href: "/learn/start", label: "Start here", about: "A 15-minute walk: five ideas, each beside a classical passage", also: "beginner new introduction begin walk tour how it works five-step" },
      { href: "/learn", label: "All chapters", about: "Every chapter, by unit, with a path for beginners and an index by problem", also: "chapters syllabus contents units index course list" },
      { href: "/learn/glossary", label: "Glossary", about: "Short definitions of every term, with Anki and spreadsheet downloads", also: "glossary dictionary definitions terms meaning words anki csv" },
      { href: "/learn/texts", label: "The classical texts", about: "The 21 texts and poets the chapters quote, on a timeline", also: "texts classics books sources scriptures timeline sanskrit tamil" },
      { href: "/learn/reading-guide", label: "Reading guide", about: "How to say the names, and the words that don't translate", also: "pronounce pronunciation diacritics spelling transliteration names" },
      { href: "/learn/weekly", label: "One idea a week", about: "A new pair each Monday, on the site, by email or by feed", also: "weekly email newsletter subscribe rss feed monday" },
      { href: "/hi", label: "हिंदी", lang: "hi", about: "The Hindi edition", also: "hindi hindi edition language bhasha" },
    ],
  },
  {
    id: "practise",
    label: "Practise",
    links: [
      { href: "/learn/practice", label: "Practice and review", about: "Mixed questions, mock tests, term cards, and spaced review of what you miss", also: "practice practise questions mcq test mock exam flashcards cards review spaced repetition" },
      { href: "/learn/revision", label: "Revision sheets", about: "Each chapter on a page: the key points and one line to remember", also: "revision revise notes summary summaries cheat sheet print" },
      { href: "/learn/formulas", label: "Formula sheet", about: "Every formula the chapters use, with worked examples", also: "formula formulas equations ratios calculations worked examples numericals" },
      { href: "/learn/check", label: "Level check", about: "A 10-minute check: what to skim and what to read first in each unit", also: "where should i start placement test level diagnostic where to begin check" },
      { href: "/learn/apply", label: "Workplace situations", about: "12 situations at work: choose the idea that helps most", also: "apply it at work application case study cases situations scenarios workplace" },
      { href: "/learn/quiz", label: "Quiz maker", about: "Choose questions for a class or a study group, and share one link", also: "make a quiz teacher class classroom worksheet question paper share" },
    ],
  },
  {
    id: "you",
    label: "Keep track",
    links: [
      { href: "/learn/progress", label: "Your progress", about: "What you have done, what is due for review, and your weak spots", also: "progress dashboard stats score done completed weak" },
      { href: "/learn/plan", label: "Study plan", about: "A week-by-week plan to your exam date, for your calendar", also: "plan planner schedule timetable calendar exam date deadline" },
      { href: "/learn/map", label: "Map of the chapters", about: "Which chapters build on which", also: "map connections graph related links prerequisites" },
      { href: "/learn/transfer", label: "Backup and transfer", about: "Move your progress to another phone or computer, or keep a copy", also: "move to another device transfer move device sync backup export import phone laptop" },
      { href: "/#community", label: "Community", about: "Ask and answer, saying what each answer rests on", also: "community forum discuss discussion ask questions members" },
    ],
  },
];

/** About the site itself: for the footer's last line. */
export const ABOUT_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/learn/corrections", label: "Corrections", about: "Every correction since publishing, with its date", also: "corrections errata mistakes errors fixes changes" },
  { href: "/privacy", label: "Privacy", about: "What is kept, where, and for how long", also: "privacy data cookies tracking" },
  { href: "/feed.xml", label: "Feed", about: "One idea a week, as an RSS feed", also: "rss feed atom reader" },
];
