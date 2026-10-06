import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-strategy-is",
    name: "What strategy is",
    intro: "A plan for using limited resources to reach objectives in an uncertain world.",
    before: {
      q: "Is strategy mainly about running today's routine operations well?",
      choices: [
        { label: "Yes", reveal: "Not quite. Strategy deals with long-term developments such as new products, methods and markets, not routine operations. It is needed because the future cannot be foreseen." },
        { label: "No", reveal: "Right. Strategy deals with long-term developments such as new products, methods and markets, not routine operations. It is needed because the future cannot be foreseen." },
      ],
    },
    lead: "Strategy is an organisation's plan for using its limited resources to reach its objectives in an uncertain world.",
    check: [
      ask("Thompson and Strickland describe strategy as…", "The means by which the ends are achieved", ["Being different in a unique mix of value", "A stream of routine operations", "The organisation's way of seeing the world"], "Strategy is the actions (means) by which the objectives (ends) are achieved."),
      ask("In Porter's 1996 view, strategy is about…", "Being different", ["Copying the best rival", "Cutting every cost", "Avoiding long-term plans"], "Deliberately choosing a different set of activities to deliver a unique mix of value."),
      ask("Which is one of Mintzberg's five Ps of strategy?", "Ploy", ["Price", "Promotion", "Product"], "The five Ps are plan, ploy, pattern, position and perspective."),
    ],
    lens: [
      { pairing: 0, adds: "A rule to weigh what will be lost, what will be gained and what yield will follow before any action.", differs: "The couplet is a general rule for any action. Strategy adds long-term objectives, the allocation of an organisation's resources and the expected moves of customers, competitors and employees." },
    ],
    reflect: "Think of a brand you buy often. What long-term choice about products or markets does its strategy seem to rest on?",
    summary: {
      points: [
        "Strategy integrates activities, commits resources for the long term and anticipates customers, competitors and employees.",
        "Chandler: long-term goals plus courses of action and resources; Porter (1996): being different.",
        "Mintzberg's five Ps: plan, ploy, pattern, position, perspective.",
      ],
      memory: "Strategy bridges the gap between where we are and where we want to be.",
    },
  },
  {
    blockId: "what-strategic-management-is",
    name: "What strategic management is",
    intro: "The stream of decisions and actions that develop and carry out strategies.",
    before: {
      q: "Is strategic management only for large businesses?",
      choices: [
        { label: "Only businesses", reveal: "No. Strategic management is found in businesses, cooperatives, government bodies and non-profits alike." },
        { label: "Any organisation", reveal: "Right. Strategic management is found in businesses, cooperatives, government bodies and non-profits alike." },
      ],
    },
    lead: "Strategic management formulates, implements and evaluates cross-functional decisions so an organisation reaches its objectives.",
    check: [
      ask("Fred R. David calls strategic management the art and science of…", "Formulating, implementing and evaluating cross-functional decisions", ["Forecasting next year's sales", "Running one department efficiently", "Optimising today's trends for tomorrow"], "It integrates management, marketing, finance, operations, R&D and information systems."),
      ask("In the narrower sense, strategic planning means…", "Formulation only", ["Formulation, implementation and evaluation", "Evaluation only", "Long-range budgeting"], "Strategic management covers all three: formulation, implementation and evaluation."),
      ask("In David's contrast, long-range planning tries to…", "Optimise for tomorrow the trends of today", ["Exploit and create new opportunities", "Renew organisations", "Replace strategy altogether"], "Strategic management seeks to exploit and create new and different opportunities."),
    ],
    lens: [],
    reflect: "Pick a non-profit or government body you know. What would formulating, implementing and evaluating a strategy look like there?",
    summary: {
      points: [
        "A stream of decisions and actions, in businesses, cooperatives, government bodies and non-profits.",
        "It covers formulation, implementation and evaluation; strategic planning in the narrow sense is formulation only.",
        "It exploits and creates new opportunities, where long-range planning optimises today's trends.",
      ],
      memory: "Formulate, implement, evaluate, across every function.",
    },
  },
  {
    blockId: "strategic-management-process",
    name: "The strategic management process",
    intro: "Four steps in order, revisited as conditions change.",
    before: {
      q: "Once a strategy has been evaluated, is the process finished?",
      choices: [
        { label: "Finished", reveal: "Not quite. Evaluation feeds back into scanning, so the process is a continuing cycle and strategy is adjusted as conditions change." },
        { label: "It starts again", reveal: "Right. Evaluation feeds back into scanning, so the process is a continuing cycle and strategy is adjusted as conditions change." },
      ],
    },
    lead: "Scan the environment, formulate, implement and evaluate, then begin again.",
    check: [
      ask("What is the first step of the strategic management process?", "Environmental scanning", ["Strategy formulation", "Strategy implementation", "Strategy evaluation"], "Scanning collects information on strengths, weaknesses, opportunities and threats."),
      ask("Designing the structure and allocating resources belong to…", "Strategy implementation", ["Environmental scanning", "Strategy formulation", "Strategy evaluation"], "Implementation puts the chosen strategy into action."),
      ask("The aim of the process is strategic alignment, meaning…", "Resources, structure and capabilities support long-term objectives", ["Every department sets its own goals", "Strategy never changes", "Only finance is measured"], "The process makes the organisation's resources, structure and capabilities support its objectives."),
    ],
    lens: [
      { pairing: 1, adds: "Before acting, look at how the work will end, the obstacles in its way and the gain it will bring.", differs: "The couplet is about a single undertaking. The process is a continuing cycle of four formal steps in which evaluation feeds back into scanning." },
    ],
    reflect: "Think of a shop or app you use that changed course recently. Which step of the process do you think triggered the change?",
    summary: {
      points: [
        "Step 1 scanning, step 2 formulation, step 3 implementation, step 4 evaluation.",
        "It is a continuing cycle: evaluation feeds back into scanning.",
        "Its aim is strategic alignment of resources, structure and capabilities with objectives.",
      ],
      memory: "Scan, formulate, implement, evaluate, and begin again.",
    },
  },
  {
    blockId: "modes-of-strategic-decision-making",
    name: "Modes of strategic decision-making",
    intro: "How strategy actually gets made: by a founder, by bargaining, by analysis or by learning.",
    before: {
      q: "Does the strategy an organisation follows always match the one it intended?",
      choices: [
        { label: "Always", reveal: "Not usually. The realised strategy is usually a mix of deliberate and emergent strategy, and some intended strategy is never realised." },
        { label: "Not always", reveal: "Right. The realised strategy is usually a mix of deliberate and emergent strategy, and some intended strategy is never realised." },
      ],
    },
    lead: "Strategy can be planned, improvised, bargained over or learned along the way.",
    check: [
      ask("In which mode does one powerful founder make bold, risky decisions guided by a personal vision?", "Entrepreneurial", ["Adaptive", "Planning", "Logical incrementalism"], "The search for opportunities comes first; problems are secondary."),
      ask("Lindblom's ‘muddling through’ describes which mode?", "Adaptive", ["Entrepreneurial", "Planning", "Deliberate"], "Reactive, step-by-step solutions with much bargaining, typical of universities and large hospitals."),
      ask("Who added logical incrementalism as a fourth mode?", "James Brian Quinn", ["Henry Mintzberg", "Charles Lindblom", "James Waters"], "In Strategies for Change (1980): a clear mission, then strategy emerges through experiment and partial commitments."),
    ],
    lens: [],
    reflect: "Think of a start-up or family business you know. Which mode best describes how its strategy gets made?",
    summary: {
      points: [
        "Mintzberg's three modes: entrepreneurial, adaptive and planning.",
        "Quinn's logical incrementalism: set the mission, then learn through partial commitments.",
        "Realised strategy is usually a mix of deliberate and emergent strategy.",
      ],
      memory: "Strategy can be planned, improvised, bargained over or learned along the way.",
    },
  },
];

export default lessons;
