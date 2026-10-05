import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "corporate-governance-theories",
    name: "Corporate governance",
    intro: "How a company is directed and controlled.",
    before: {
      q: "Should managers be trusted to act for the company, or watched?",
      choices: [
        { label: "Watched", reveal: "That is agency theory: managers (agents) may act in their own interest against the shareholders (principals), so audits and performance incentives manage the conflict." },
        { label: "Trusted", reveal: "That is stewardship theory: managers are trustworthy stewards of the company, not self-interested agents." },
      ],
    },
    lead: "Corporate governance is the system by which a company is directed and controlled so that stakeholder interests are balanced.",
    check: [
      ask("Agency theory manages the conflict between managers and shareholders through…", "Audits and performance incentives", ["Trust alone", "Government orders", "Profit sharing alone"], "Managers are agents who may act in their own interest."),
      ask("Stewardship theory sees the manager as…", "A trustworthy steward of the company", ["A self-interested agent", "A rival to the board", "A regulator"], "Not a self-interested agent."),
      ask("The OECD Principles cover…", "Shareholder rights, equitable treatment, transparency and the role of stakeholders", ["Tax rates", "Trade tariffs", "Wage scales"], "They are international governance guidelines."),
    ],
    lens: [
      { pairing: 0, adds: "Officials who handle funds will find it hard not to take some, and so audits, rotation of posts and an accounts office.", differs: "Kauṭilya prescribes safeguards for a state's officials. Agency theory is about managers and shareholders." },
      { pairing: 1, adds: "All of this is pervaded by the divine: enjoy through renunciation, without coveting anyone's wealth.", differs: "The Īśa Upaniṣad opens with a statement about the world. Reading it as wealth held in trust gives the stewardship stance." },
      { pairing: 2, adds: "The head of an institution measures success by the welfare of those it serves.", differs: "Kauṭilya's line is about a ruler's happiness and his subjects'. The chapter reads it as a governance principle." },
    ],
    reflect: "In an organisation you know, are managers more like agents or like stewards, and what shows it?",
    summary: {
      points: [
        "Corporate governance: the rules, practices and processes by which a company is directed and controlled, balancing stakeholder interests.",
        "Agency theory: managers may act against shareholders; audits and incentives manage the conflict.",
        "Stewardship theory: managers are trustworthy stewards of the company.",
        "OECD Principles: shareholder rights, equitable treatment, transparency and the role of stakeholders.",
      ],
      memory: "Agency: watch. Stewardship: trust.",
    },
  },
  {
    blockId: "value-based-organisation-vbo",
    name: "Value-based organisation (VBO)",
    intro: "Values that shape culture, leadership and strategy.",
    before: {
      q: "Does a value-based organisation put profit first?",
      choices: [
        { label: "Yes", reveal: "Not first. In a VBO ethical values shape culture, leadership and strategy, and societal contribution ranks alongside profit." },
        { label: "No", reveal: "Right. In a VBO ethical values shape culture, leadership and strategy, and societal contribution ranks alongside profit." },
      ],
    },
    lead: "In a value-based organisation, ethical values shape culture, leadership and strategy.",
    check: [
      ask("What sits at the top of a VBO's hierarchy?", "The vision statement", ["Profit", "A rulebook", "A budget"], "The vision statement is the long-term aspirational direction."),
      ask("A core success factor of a VBO is…", "Trust", ["Scale", "Speed", "Low prices"], "Trust."),
      ask("Trust is built through…", "Consistent ethical conduct and shared values", ["Advertising", "Discounts", "Size"], "That is how a VBO builds it."),
    ],
    lens: [
      { pairing: 3, adds: "“Truth alone triumphs, not falsehood”: trust built on consistently truthful conduct.", differs: "The Muṇḍaka line is a statement about truth, which the national motto draws on. Transparency in disclosure is the practice the chapter names." },
      { pairing: 4, adds: "A common aim, a common heart and a common mind, so that all may live well together.", differs: "The Saṃjñāna hymn is a prayer for concord. A vision statement is a written, long-term direction for an organisation." },
    ],
    reflect: "What is the stated vision of an organisation you know, and does its conduct match it?",
    summary: {
      points: [
        "A VBO is an organisation in which ethical values shape culture, leadership and strategy.",
        "Societal contribution ranks alongside profit.",
        "The vision statement, the long-term aspirational direction, is at the top of its hierarchy.",
        "Trust is a core success factor, built through consistent ethical conduct and shared values.",
      ],
      memory: "Values first shape the vision; conduct builds the trust.",
    },
  },
];

export default lessons;
