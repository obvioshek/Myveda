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
    lead: "Strategy is a plan for using limited resources to reach long-term aims when the future, and other people's moves, cannot be foreseen.",
    check: [
      ask("Thompson and Strickland describe strategy as…", "The means by which the ends are achieved", ["Being different in a unique mix of value", "The basic long-term goals of an enterprise", "The organisation's way of seeing the world"], "Thompson and Strickland put it as means (actions) toward ends (objectives). Being different is Porter's 1996 view, the most tempting confusion."),
      ask("Over ten years a kirana owner has always stocked local brands first, without ever deciding to. In Mintzberg's five Ps, this is strategy as…", "Pattern", ["Plan", "Ploy", "Position"], "A pattern is consistency in a stream of actions, intended or not. It is not a plan, because nothing was decided in advance."),
      ask("Two chai chains copy each other's best practices until both run equally well. In Porter's 1996 terms, what do they lack?", "A strategy: neither does anything different", ["Operational effectiveness", "A long-range plan", "Enough resources"], "Doing the same things better is operational effectiveness, and both chains have it. Strategy means doing different activities, or similar ones in different ways."),
    ],
    lens: [
      { pairing: 0, adds: "A rule to weigh what will be lost, what will be gained and what yield will follow before any action.", differs: "The couplet is a general rule for any action. Strategy adds long-term objectives, the allocation of an organisation's resources and the expected moves of customers, competitors and employees." },
    ],
    reflect: "Think of a brand you buy often. What long-term choice about products or markets does its strategy seem to rest on?",
    summary: {
      points: [
        "Strategy integrates activities, commits resources for the long term and anticipates customers, competitors and employees.",
        "Chandler (1962): long-term goals plus courses of action and resources. Thompson and Strickland: means to ends. Porter (1996): being different.",
        "Mintzberg's five Ps (1987): plan, ploy, pattern, position, perspective.",
        "Operational effectiveness, doing the same things better, is not strategy: rivals can copy it.",
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
    lead: "Strategic management is the whole job of formulating a strategy, implementing it and evaluating it, across every function.",
    check: [
      ask("Fred R. David calls strategic management the art and science of…", "Formulating, implementing and evaluating cross-functional decisions", ["Forecasting next year's sales from past trends", "Running one department as efficiently as possible", "Optimising for tomorrow the trends of today"], "His definition covers all three stages, across functions. Optimising today's trends is how David describes long-range planning, the tempting mix-up."),
      ask("A bakery chain's sales have grown every year, so it plans two more shops of the same kind. In David's contrast, this is…", "Long-range planning", ["Strategic management", "Strategy evaluation", "An emergent strategy"], "It projects today's trend into tomorrow. Strategic management would ask whether a new opportunity, such as online breakfast orders, calls for something different."),
      ask("A firm writes a fine five-year plan, but no budget, shop or job changes. Which part of strategic management is missing?", "Implementation and evaluation", ["Formulation", "Environmental scanning", "Strategic planning"], "The plan shows formulation was done. Strategic planning in the narrow sense is formulation only, which is exactly what this firm stopped at."),
    ],
    lens: [],
    reflect: "Pick a non-profit or government body you know. What would formulating, implementing and evaluating a strategy look like there?",
    summary: {
      points: [
        "A stream of decisions and actions, in businesses, cooperatives, government bodies and non-profits.",
        "David: formulating, implementing and evaluating cross-functional decisions; strategic planning in the narrow sense is formulation only.",
        "It exploits and creates new opportunities, where long-range planning optimises today's trends.",
        "Its result is a strategic plan: hard choices among good alternatives that commit the firm.",
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
    lead: "Scan the environment, formulate a strategy, implement it and evaluate it, then begin again.",
    check: [
      ask("What is the first step of the strategic management process?", "Environmental scanning", ["Strategy formulation", "Strategy implementation", "Strategy evaluation"], "Scanning collects information on strengths, weaknesses, opportunities and threats. Formulation comes second: a strategy cannot be chosen before the situation is studied."),
      ask("A tiffin service re-plans its delivery routes, buys two scooters and starts taking orders on a messaging app. Which step is this?", "Strategy implementation", ["Strategy formulation", "Environmental scanning", "Strategy evaluation"], "Allocating resources and setting up processes put a chosen strategy into action. Formulation was the earlier choice to deliver to homes."),
      ask("A month into the new plan, the owner finds one delivery area loses money and drops it. What does this show about the process?", "Evaluation feeds back, so the strategy is adjusted", ["The strategy was formulated wrongly and has failed", "Scanning was skipped at the start", "Implementation should never change a strategy"], "Measuring performance and taking corrective action is evaluation, and it feeds back into the cycle. A correction is the process working, not proof of failure."),
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
        "Fred David's model has three stages and treats scanning as part of formulation.",
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
    lead: "Strategy gets made in different ways: by a founder, by bargaining, by analysis or by learning, and what is realised mixes the deliberate with the emergent.",
    check: [
      ask("Lindblom's ‘muddling through’ describes which of Mintzberg's modes?", "Adaptive", ["Entrepreneurial", "Planning", "Logical incrementalism"], "Reactive, step-by-step solutions with much bargaining, typical of universities and large hospitals. Logical incrementalism also moves in steps, but toward a clear mission set first."),
      ask("A company's top team sets a clear mission, then tests a new market with one city and two products before committing further. Which mode is this?", "Logical incrementalism", ["Adaptive mode", "Entrepreneurial mode", "Planning mode"], "A clear mission first, then partial commitments and learning: Quinn's logical incrementalism. The adaptive mode has no clear goal, only bargaining over today's problems."),
      ask("Unplanned tractor-parts orders grow to ₹30 crore of a parts maker's ₹120 crore sales. What share is this, and what kind of strategy?", "A quarter; an emergent strategy", ["A third; an emergent strategy", "A quarter; a deliberate strategy", "A quarter; an unrealised strategy"], "30 ÷ 120 = 0.25, a quarter. Nobody intended it, so it is emergent; it would be deliberate only if it had been planned in advance."),
    ],
    lens: [],
    reflect: "Think of a start-up or family business you know. Which mode best describes how its strategy gets made?",
    summary: {
      points: [
        "Mintzberg's three modes (1973): entrepreneurial, adaptive and planning.",
        "Adaptive mode is Lindblom's ‘muddling through’ (1959).",
        "Quinn's logical incrementalism (1980): set the mission, then learn through partial commitments.",
        "Mintzberg and Waters (1985): realised strategy mixes deliberate and emergent strategy; some intended strategy is never realised.",
      ],
      memory: "Strategy can be planned, improvised, bargained over or learned along the way.",
    },
  },
];

export default lessons;
