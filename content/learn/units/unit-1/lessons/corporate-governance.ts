import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "corporate-governance-theories",
    name: "Corporate governance",
    intro: "How a company is directed and controlled, and how owners keep managers working for them.",
    before: {
      q: "Should managers be trusted to act for the company, or watched?",
      choices: [
        { label: "Watched", reveal: "That is agency theory: managers (agents) may act in their own interest against the shareholders (principals), so audits and performance incentives manage the conflict." },
        { label: "Trusted", reveal: "That is stewardship theory: managers are trustworthy stewards of the company, not self-interested agents." },
      ],
    },
    lead: "Corporate governance is the system by which companies are directed and controlled, so that the people who run a company answer to the people it serves.",
    check: [
      ask("In agency theory, who is the principal and who is the agent?", "Shareholders are the principals; managers are the agents", ["Managers are the principals; shareholders are the agents", "The board is the principal; the auditors are the agents", "Customers are the principals; employees are the agents"], "Shareholders own the company and hire managers to run it, so the managers act as their agents. The reversed pairing is the common slip: the owner is always the principal."),
      ask("A CEO's bonus depends only on this year's profit, so she puts off machine maintenance to lift it. Which governance step fits agency theory best?", "Link her pay to performance over several years and have the audit committee review maintenance", ["Give her more authority and fewer controls, as a trusted steward", "Remove the bonus and pay a fixed salary with no review", "Let the managers decide their own pay targets"], "Agency theory says monitor and align: longer-term incentives plus oversight make the short-term trade less attractive. Giving more freedom is the stewardship answer, which assumes the problem away."),
      ask("In many Indian companies a promoter family holds control. Where does the sharpest governance conflict then often lie?", "Between controlling and minority shareholders", ["Between the board and the auditors", "Between shareholders and customers", "Between managers and the government"], "When a family controls the company, the managers usually answer to it, so the risk is that the family serves itself at the cost of small shareholders. The classic owner–manager split matters less there."),
    ],
    lens: [
      { pairing: 0, adds: "Officials who handle funds will find it hard not to take some, and so audits, rotation of posts and an accounts office.", differs: "Kauṭilya prescribes safeguards for a state's officials. Agency theory is about managers and shareholders." },
      { pairing: 1, adds: "All of this is pervaded by the divine: enjoy through renunciation, without coveting anyone's wealth.", differs: "The Īśa Upaniṣad opens with a statement about the world. Reading it as wealth held in trust gives the stewardship stance." },
      { pairing: 2, adds: "The head of an institution measures success by the welfare of those it serves.", differs: "Kauṭilya's line is about a ruler's happiness and his subjects'. The chapter reads it as a governance principle." },
    ],
    reflect: "In an organisation you know, are managers more like agents or like stewards, and what shows it?",
    summary: {
      points: [
        "Corporate governance is the system by which companies are directed and controlled (Cadbury Report, 1992).",
        "Shareholders elect the board; the board appoints and oversees managers; reports flow back up.",
        "Agency theory: managers may act against shareholders, so monitor and align through audits, independent directors and incentives.",
        "Stewardship theory: managers are trustworthy stewards, so empower them.",
        "OECD Principles: shareholder rights, equitable treatment, transparency and disclosure, the role of stakeholders, and the board's responsibilities.",
      ],
      memory: "Agency: watch. Stewardship: trust.",
    },
  },
  {
    blockId: "value-based-organisation-vbo",
    name: "Value-based organisation (VBO)",
    intro: "Values that shape culture, leadership and strategy, with vision at the top and trust at the core.",
    before: {
      q: "Does a value-based organisation put profit first?",
      choices: [
        { label: "Yes", reveal: "Not first. In a VBO ethical values shape culture, leadership and strategy, and societal contribution ranks alongside profit." },
        { label: "No", reveal: "Right. In a VBO ethical values shape culture, leadership and strategy, and societal contribution ranks alongside profit." },
      ],
    },
    lead: "In a value-based organisation, shared values, not only rules and targets, decide how people behave.",
    check: [
      ask("What sits at the top of a VBO's hierarchy?", "The vision statement", ["The mission statement", "The code of conduct", "The annual budget"], "The vision statement is the long-term aspirational direction, and everything below turns it into something concrete. The mission is the tempting answer, but it says what the organisation does now, so it sits below the vision."),
      ask("Two firms have the same written rule on supplier gifts. In one, staff quietly accept gifts; in the other, they hand them back unasked. What explains the difference?", "Their shared values, not their written rules", ["Their written rules, which differ in detail", "Their size and number of staff", "Their profit levels that year"], "The rulebook is the same in both firms, so it cannot explain the difference. What differs is what people actually value and do when nobody checks."),
      ask("A firm's posters say \"safety first\", but managers reward staff who skip checks to meet deadlines. What is the likely result?", "Cynicism, because the stated values are not lived", ["Stronger trust, because the values are on display", "No effect, because posters and decisions are separate", "Better safety, because staff read the posters"], "Values count only if decisions follow them. Values that leaders do not live by breed cynicism faster than having no values at all, and trust is lost through visible breaches like this."),
    ],
    lens: [
      { pairing: 3, adds: "“Truth alone triumphs, not falsehood”: trust built on consistently truthful conduct.", differs: "The Muṇḍaka line is a statement about truth, which the national motto draws on. Transparency in disclosure is the practice the chapter names." },
      { pairing: 4, adds: "A common aim, a common heart and a common mind, so that all may live well together.", differs: "The Saṃjñāna hymn is a prayer for concord. A vision statement is a written, long-term direction for an organisation." },
    ],
    reflect: "What is the stated vision of an organisation you know, and does its conduct match it?",
    summary: {
      points: [
        "A VBO is an organisation in which ethical values shape culture, leadership and strategy.",
        "Societal contribution ranks alongside profit, not after it.",
        "The vision statement, the long-term aspirational direction, is at the top of its hierarchy.",
        "Trust is a core success factor, built through consistent ethical conduct and lost through visible breaches.",
      ],
      memory: "Values set the vision; conduct earns the trust.",
    },
  },
];

export default lessons;
