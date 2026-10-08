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
    lead: "A strategic decision is a big, hard-to-reverse choice that commits major resources and sets the organisation's direction and scope.",
    check: [
      ask("In Ansoff's scheme, administrative decisions are…", "Made by middle management, medium term and periodic", ["Made by top management, long term and one-off", "Made by operating managers, short term and daily", "Made by the board, medium term and daily"], "Administrative decisions sit between the other two. Study notes sometimes swap them with operational decisions, which are short term and daily."),
      ask("A Pune auto-parts maker has decided to make parts for electric vehicles. It now sets up a new division and moves engineers and budget into it. That second step is…", "An administrative decision", ["A strategic decision", "An operational decision", "An emergent strategy"], "Organising resources and people to carry out a strategy is administrative. The strategic choice was to enter electric-vehicle parts; scheduling shifts would be operational."),
      ask("A factory replaces a worn-out machine with the same model for ₹40 lakh. Is this a strategic decision?", "No: it changes neither direction nor scope", ["Yes: it costs a lot of money", "Yes: it is made by senior managers", "No: only boards make strategic decisions"], "Cost alone does not make a decision strategic. What matters is whether it changes what the organisation does, for whom, and how hard it is to reverse."),
    ],
    lens: [],
    reflect: "Think of a big decision a company you know made recently. Which characteristics of a strategic decision does it show?",
    summary: {
      points: [
        "Strategic decisions commit major resources, define scope, involve major change, are made at the top and carry risk.",
        "Ansoff: strategic (long term, infrequent), administrative (medium term, periodic), operational (short term, daily).",
        "Example: enter a new line or compete on cost (strategic), reorganise to do it (administrative), schedule shifts (operational).",
        "Strategic is not the same as expensive; and strategy can also emerge from many small decisions.",
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
      ask("Which level answers ‘Which industries and markets should we be in?’", "Corporate", ["Business", "Functional", "Operational"], "Corporate strategy chooses the businesses and divides resources among them. Business strategy, the tempting answer, asks how one business competes."),
      ask("A family group owns cement, hotels and a dairy. The dairy's head decides to win local customers with fresher delivery than rivals. This is…", "Business-level strategy", ["Corporate-level strategy", "Functional strategy", "Operational strategy"], "How one business competes in its market is business strategy, made by the SBU head. Deciding whether to keep the dairy at all would be corporate."),
      ask("A business competes on low cost, but its HR head plans to hire far more staff than rivals for a premium service. What is wrong?", "The functional strategy does not support the business strategy", ["Nothing: functional heads set their own aims", "The corporate strategy is too broad", "Operational targets are missing"], "Functional strategies must fit the business strategy. A low-cost business needs a lean workforce; departments do not set aims of their own."),
    ],
    lens: [],
    reflect: "Pick a diversified group you know. Name one decision at its corporate level and one at the level of one of its businesses.",
    summary: {
      points: [
        "Corporate: which industries and markets, and how to divide resources; made by top management and the board.",
        "Business: how this business competes; made by SBU heads.",
        "Functional: how each department supports the business strategy. Operational: how a plant, territory or section meets immediate targets.",
        "Each level is formulated in line with the one above; in a single-business firm corporate and business merge.",
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
    lead: "A business wins by choosing to compete on low cost or on being different, across the broad market or in a narrow segment.",
    check: [
      ask("Meeting a narrow segment's special needs better than broad competitors is…", "Differentiation focus", ["Cost leadership", "Differentiation", "Cost focus"], "Narrow target plus uniqueness is differentiation focus. Cost focus also targets a narrow segment, but wins on lower cost."),
      ask("A sweet shop in one city makes only sugar-free sweets for diabetic customers and charges more for them. Which generic strategy is this?", "Differentiation focus", ["Cost focus", "Cost leadership", "Stuck in the middle"], "A narrow segment served with a special product at a premium is differentiation focus. Cost focus would serve the segment more cheaply."),
      ask("A chai stall sells neither the cheapest cup nor a special one, and loses customers to both rivals. Porter's diagnosis?", "Stuck in the middle, with no clear advantage", ["A sound blue ocean strategy", "A focus strategy", "A sustainable competitive advantage"], "Without committing to cost or uniqueness, a firm risks having no advantage. Being small, as the stall is, does not make it a focus strategy."),
    ],
    lens: [
      { pairing: 0, adds: "The crocodile prevails in deep water and is overcome out of it: choose the ground where your strengths decide the contest.", differs: "The couplet is about choosing a battleground. A focus strategy is a choice of market segment, made on cost or uniqueness." },
    ],
    reflect: "Think of a brand you buy. Is it competing on low cost or on being different, and in a broad market or a narrow segment?",
    summary: {
      points: [
        "Business strategy uses competitive and cooperative strategies to gain an advantage; it must be sustainable to last.",
        "Porter's generic strategies: cost leadership, differentiation, cost focus, differentiation focus; avoid being stuck in the middle.",
        "Blue ocean strategy creates uncontested space; key success factors decide who can compete.",
        "Focus is a deliberate choice of segment, not just being small.",
      ],
      memory: "Low cost or different; broad or focused.",
    },
  },
];

export default lessons;
