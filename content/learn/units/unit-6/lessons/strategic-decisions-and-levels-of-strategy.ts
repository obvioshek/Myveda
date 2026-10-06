import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "strategic-decisions",
    name: "What makes a decision strategic",
    intro: "Few, far-reaching decisions made at the top, set against administrative and operational ones.",
    before: {
      q: "Is scheduling next week's shifts a strategic decision?",
      choices: [
        { label: "Yes", reveal: "No. Scheduling shifts is operational: short term, daily and routine. Strategic decisions concern the direction, scope and growth of the whole organisation." },
        { label: "No", reveal: "Right. Scheduling shifts is operational: short term, daily and routine. Strategic decisions concern the direction, scope and growth of the whole organisation." },
      ],
    },
    lead: "Strategic decisions commit major resources, define scope and shape the organisation's future direction.",
    check: [
      ask("In Ansoff's scheme, who makes administrative decisions?", "Middle management", ["Top management", "Lower and operating management", "Shareholders"], "Administrative decisions are medium term and periodic, guided by strategic decisions."),
      ask("How often are strategic decisions made?", "Infrequently, often one-off", ["Daily", "Periodically", "Every week"], "Administrative decisions are periodic; operational ones are daily and routine."),
      ask("Reorganising departments and staffing to compete on cost is…", "An administrative decision", ["A strategic decision", "An operational decision", "A vision statement"], "Deciding to compete on cost is strategic; ordering materials within the budget is operational."),
    ],
    lens: [],
    reflect: "Think of a big decision a company you know made recently. Which characteristics of a strategic decision does it show?",
    summary: {
      points: [
        "Strategic decisions commit major resources, define scope, involve major change, are made at the top and carry risk.",
        "Ansoff: strategic (long term, infrequent), administrative (medium term, periodic), operational (short term, daily).",
        "Example: compete on cost (strategic), reorganise to do it (administrative), schedule shifts (operational).",
      ],
      memory: "Strategic decisions are few, far-reaching and hard to reverse.",
    },
  },
  {
    blockId: "levels-of-strategy",
    name: "Four levels of strategy",
    intro: "Corporate, business, functional and operational strategy in a diversified company.",
    before: {
      q: "In a single-business firm, are there still separate corporate and business strategies?",
      choices: [
        { label: "Yes, always", reveal: "Not quite. In a single-business firm the corporate and business levels merge." },
        { label: "They merge", reveal: "Right. In a single-business firm the corporate and business levels merge. The four levels apply in a diversified company." },
      ],
    },
    lead: "Corporate strategy says where to compete, business strategy how to compete, and functional and operational strategies how to deliver.",
    check: [
      ask("Which level answers ‘How should this business compete in its market?’", "Business", ["Corporate", "Functional", "Operational"], "It is made by the heads of strategic business units."),
      ask("Who makes corporate strategy?", "Top management and the board", ["Heads of SBUs", "Functional heads", "Field managers"], "It sets long-term direction for every business under the umbrella."),
      ask("A lean HR strategy that supports a low-cost business is an example of…", "Functional strategy", ["Corporate strategy", "Operational strategy", "Blue ocean strategy"], "Functional strategies support the business strategy."),
    ],
    lens: [],
    reflect: "Pick a diversified group you know. Name one decision at its corporate level and one at the level of one of its businesses.",
    summary: {
      points: [
        "Corporate: which industries and markets, and how to divide resources.",
        "Business: how this business competes; functional: how each department supports it.",
        "Operational: how a plant, territory or section meets immediate targets.",
      ],
      memory: "Corporate: where to compete. Business: how to compete. Functional and operational: how to deliver.",
    },
  },
  {
    blockId: "business-level-strategy",
    name: "Business-level strategy: competing and cooperating",
    intro: "How a business unit gains an advantage: Porter's generic strategies and beyond.",
    before: {
      q: "Is trying to do everything at once a safe competitive strategy?",
      choices: [
        { label: "Safe", reveal: "Not according to Porter. A firm that tries to do everything without committing to one generic strategy risks being stuck in the middle, with no clear advantage." },
        { label: "Risky", reveal: "Right. Porter warned that a firm trying to do everything without committing to one generic strategy risks being stuck in the middle, with no clear advantage." },
      ],
    },
    lead: "Compete on low cost or on being different, across the broad market or in a narrow segment.",
    check: [
      ask("Meeting a narrow segment's special needs better than broad competitors is…", "Differentiation focus", ["Cost leadership", "Differentiation", "Cost focus"], "Cost focus serves the segment at lower cost instead."),
      ask("Blue ocean strategy aims to…", "Create uncontested market space", ["Win price wars in existing markets", "Copy the market leader", "Serve only the lowest-cost segment"], "Kim and Mauborgne (2005): leave the ‘red oceans’ where rivals fight."),
      ask("A sustainable competitive advantage is one that…", "Rivals cannot quickly copy", ["Lasts one season", "Depends on low prices only", "Every firm shares"], "Lasting success needs an advantage rivals cannot quickly copy."),
    ],
    lens: [
      { pairing: 0, adds: "The crocodile prevails in deep water and is overcome out of it: choose the ground where your strengths decide the contest.", differs: "The couplet is about choosing a battleground. A focus strategy is a choice of market segment, made on cost or uniqueness." },
    ],
    reflect: "Think of a brand you buy. Is it competing on low cost or on being different, and in a broad market or a narrow segment?",
    summary: {
      points: [
        "Business strategy uses competitive and cooperative strategies to gain an advantage.",
        "Porter's generic strategies: cost leadership, differentiation, cost focus, differentiation focus; avoid being stuck in the middle.",
        "Blue ocean strategy creates uncontested space; key success factors decide who can compete.",
      ],
      memory: "Low cost or different; broad or focused.",
    },
  },
];

export default lessons;
