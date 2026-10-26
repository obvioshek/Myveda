// The site's pages in three groups, by what the reader came to do: learn,
// practise, or keep track. The header's menu on phones and the footer both
// list these, so a page is found in the same place from anywhere. Keep each
// group short; a page that fits none probably belongs in an existing one.

export type NavLink = { href: string; label: string; lang?: string };
export type NavGroup = { id: string; label: string; links: NavLink[] };

export const SITE_MAP: NavGroup[] = [
  {
    id: "learn",
    label: "Learn",
    links: [
      { href: "/learn/start", label: "Start here" },
      { href: "/learn", label: "All chapters" },
      { href: "/learn/glossary", label: "Glossary" },
      { href: "/learn/texts", label: "The classical texts" },
      { href: "/learn/reading-guide", label: "Reading guide" },
      { href: "/learn/weekly", label: "One idea a week" },
      { href: "/hi", label: "हिंदी", lang: "hi" },
    ],
  },
  {
    id: "practise",
    label: "Practise",
    links: [
      { href: "/learn/practice", label: "Practice and review" },
      { href: "/learn/revision", label: "Revision sheets" },
      { href: "/learn/formulas", label: "Formula sheet" },
      { href: "/learn/check", label: "Where should I start?" },
      { href: "/learn/apply", label: "Apply it at work" },
      { href: "/learn/quiz", label: "Make a quiz" },
    ],
  },
  {
    id: "you",
    label: "Your study",
    links: [
      { href: "/learn/progress", label: "Your progress" },
      { href: "/learn/plan", label: "Study plan" },
      { href: "/learn/map", label: "Map of the chapters" },
      { href: "/learn/transfer", label: "Move to another device" },
      { href: "/#community", label: "Community" },
    ],
  },
];

/** About the site itself: for the footer's last line. */
export const ABOUT_LINKS: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/learn/corrections", label: "Corrections" },
  { href: "/privacy", label: "Privacy" },
  { href: "/feed.xml", label: "Feed" },
];
