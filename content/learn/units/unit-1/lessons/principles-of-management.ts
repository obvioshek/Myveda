import { ask, type Lesson } from "@/content/learn/lesson-kit";

const principles: Lesson[] = [
  {
    blockId: "what-is-management",
    name: "What management is",
    intro: "Getting things done through people, effectively and efficiently.",
    before: {
      q: "A team meets its sales target but overspends its budget by half. Was it well managed?",
      choices: [
        { label: "Yes, it hit the target", reveal: "Only half-way. It was effective, since it reached the goal, but not efficient, since it wasted resources. Management asks for both." },
        { label: "Not entirely", reveal: "Right. It was effective, since it reached the goal, but not efficient, since it wasted resources. Management asks for both." },
      ],
    },
    lead: "Management is getting things done through and with people, reaching goals effectively and with the least waste.",
    check: [
      ask("Who defined management as \"the art of getting things done through people\"?", "Mary Parker Follett", ["Peter Drucker", "Henri Fayol", "F. W. Taylor"], "Follett's short definition; Koontz added \"through and with people in formally organised groups\"."),
      ask("Doing the right things, so that goals are reached, is…", "Effectiveness", ["Efficiency", "Coordination", "Control"], "Effectiveness is reaching the goal; efficiency is reaching it with the least waste."),
      ask("Which level of management turns policy into departmental plans and links top and bottom?", "Middle management", ["Top management", "First-line management", "The board of directors"], "Top management sets objectives and policy; first-line management directs day-to-day work."),
    ],
    lens: [],
    reflect: "Think of a group you belong to. Is it more effective or more efficient, and what would improve the weaker one?",
    summary: {
      points: [
        "Management is getting things done through and with people.",
        "Effective: reaching the goal. Efficient: with the least waste.",
        "Nature: goal-oriented, continuous, universal, a group activity, intangible, multidisciplinary, both art and science.",
        "Levels: top (policy), middle (plans and coordination), first-line (day-to-day work).",
      ],
      memory: "Right things (effective), done right (efficient), through people.",
    },
  },
  {
    blockId: "fayols-14-principles",
    name: "Fayol's 14 principles",
    intro: "How a whole enterprise should be arranged and run.",
    before: {
      q: "Should a manager hold more authority than the responsibility they answer for?",
      choices: [
        { label: "More authority", reveal: "Fayol disagreed. His second principle ties the two together: the right to command comes with an equal duty to answer for results." },
        { label: "An equal duty", reveal: "That is Fayol's view. Authority and responsibility is his second principle: the right to command comes with an equal duty to answer for results." },
      ],
    },
    lead: "Fayol starts from the whole organisation and asks how it should be arranged and run.",
    check: [
      {
        q: "Which principle says each employee should receive orders from only one superior?",
        options: ["Unity of direction", "Unity of command", "Scalar chain", "Order"],
        answer: 1,
        why: "Unity of command is principle 4. Unity of direction (5) is different: one plan and one leader for activities with the same objective.",
      },
      {
        q: "Compared with Taylor, where does Fayol start?",
        options: ["The individual task", "The whole organisation", "Worker incentives", "Time and motion study"],
        answer: 1,
        why: "Fayol wrote from the top of the organisation downward. Taylor worked from the shop floor upward.",
      },
      {
        q: "What is the scalar chain?",
        options: ["An unbroken line of authority from top to bottom", "Pay that is fair to employer and employee", "Materials and people each in their proper place", "Freedom to propose and carry out plans"],
        answer: 0,
        why: "Scalar chain is principle 9. Fair pay is remuneration (7), the proper place is order (10), and freedom to propose plans is initiative (13).",
      },
    ],
    lens: [
      { pairing: 0, adds: "Fit between a person's nature and the task, not only output and skill.", differs: "The traditional varṇa reading of svadharma is contested, so take it as fit between person and task. Fayol's division of work is about raising output." },
      { pairing: 1, adds: "Power is held against an obligation to deliver results for others.", differs: "Kauṭilya speaks of a ruler and the people he rules. Fayol speaks of a manager and an organisation." },
      { pairing: 2, adds: "Shared movement, speech and purpose as the ground of team spirit.", differs: "The hymn is a prayer for concord among people. It does not set out reporting lines or plans." },
      { pairing: 3, adds: "Sustained effort as the root of prosperity, with resolve and enthusiasm in the doer.", differs: "Kauṭilya's line is about effort that sustains wealth. Fayol's initiative is the freedom to propose and carry out plans." },
      { pairing: 7, adds: "Equal regard for all, named as a mark of the wise.", differs: "Fayol's equity joins kindness with justice in managing staff. The Gītā verses describe an inner vision, not workplace rules." },
    ],
    reflect: "Which of the fourteen principles is hardest to keep in a team you have worked in, and why?",
    summary: {
      points: [
        "Fourteen principles in four groups: work and authority; direction and organisational interest; structure and order; people and team spirit.",
        "Authority comes with an equal duty to answer for results.",
        "Unity of command: one superior for each employee. Unity of direction: one plan and one leader for each objective.",
        "Scalar chain: an unbroken line of authority from top to bottom.",
      ],
      memory: "Four groups: work and authority, direction and interest, structure and order, people and team spirit.",
    },
  },
  {
    blockId: "taylors-scientific-management",
    name: "Taylor's scientific management",
    intro: "Replacing rule of thumb with study and measurement.",
    before: {
      q: "Should a worker's pay depend only on how much they produce?",
      choices: [
        { label: "Yes", reveal: "That is Taylor's piece-rate system, which links pay directly to output. It is one of his seven elements." },
        { label: "Not only", reveal: "Taylor included incentive and piece-rate, but alongside scientific selection and training, standard methods, and cooperation between managers and workers." },
      ],
    },
    lead: "Taylor starts from the individual task and replaces guesswork with measurement.",
    check: [
      {
        q: "What is functional foremanship?",
        options: ["One generalist foreman supervises every task", "Several specialist foremen supervise each worker, one per kind of task", "Workers choose their own foreman", "Foremen set the company's strategy"],
        answer: 1,
        why: "Instead of one generalist supervisor, a worker answers to specialists for each kind of task.",
      },
      {
        q: "Which of these is NOT one of Taylor's elements?",
        options: ["Time and motion study", "Piece-rate incentive", "Unity of command", "Standardisation and simplification"],
        answer: 2,
        why: "Unity of command is Fayol's fourth principle. Taylor's seven are science not rule of thumb, harmony, scientific selection and training, functional foremanship, incentive and piece-rate, standardisation, and time and motion study.",
      },
      {
        q: "What does a time and motion study do?",
        options: ["Breaks a job into steps, removes wasted movement and sets an output standard", "Sets pay by seniority", "Groups jobs by function", "Measures customer satisfaction"],
        answer: 0,
        why: "It breaks a job into steps, removes wasted movement and sets an output standard.",
      },
    ],
    lens: [
      { pairing: 4, adds: "Doing the work well is itself named as the aim.", differs: "The Gītā defines yoga as skill in action. It does not prescribe time and motion study or measured standards." },
      { pairing: 5, adds: "A stance toward reward that a pay scheme cannot supply.", differs: "The two work at different layers: piece-rate is how a firm designs pay, while the Gītā speaks of the worker's inner stance toward results." },
    ],
    reflect: "Where would measuring the work help you most, and where would it get in the way?",
    summary: {
      points: [
        "Seven elements: science not rule of thumb, harmony, scientific selection and training, functional foremanship, incentive and piece-rate, standardisation and simplification, time and motion study.",
        "Starting point: the individual task. Main concern: how to perform work efficiently.",
        "Contribution: scientific work methods.",
      ],
      memory: "Fayol manages the organisation. Taylor optimises the work.",
    },
  },
  {
    blockId: "katzs-three-managerial-skills",
    name: "Katz's three managerial skills",
    intro: "Technical, human and conceptual skill, in different amounts at different levels.",
    before: {
      q: "Which skill matters most at the very top of an organisation?",
      choices: [
        { label: "Technical skill", reveal: "Technical skill leans toward lower management. At the top, Katz's emphasis is on conceptual skill: seeing the organisation as a whole." },
        { label: "Conceptual skill", reveal: "Yes. Lower management leans on technical skill, middle management on human skill with a balance of all three, and top management on conceptual. Human skill matters at every level." },
      ],
    },
    lead: "A manager needs three skills, and the mix changes with rank.",
    check: [
      {
        q: "Which of these was NOT one of Katz's three skills?",
        options: ["Technical skill", "Human skill", "Design skill", "Conceptual skill"],
        answer: 2,
        why: "Design skill is not one of Katz's three. They are technical, human and conceptual.",
      },
      {
        q: "Seeing the organisation as a whole and connecting strategy to its parts is which skill?",
        options: ["Technical skill", "Human skill", "Conceptual skill", "Operational skill"],
        answer: 2,
        why: "That is conceptual skill.",
      },
      {
        q: "Which skill matters at every level?",
        options: ["Technical skill", "Human skill", "Conceptual skill", "Financial skill"],
        answer: 1,
        why: "Human skill is leading, motivating and resolving conflict, and it matters at every level.",
      },
    ],
    lens: [
      { pairing: 6, adds: "Example as the way a leader influences others, and seeing one undivided reality as the clear kind of knowledge.", differs: "The verses describe leading by example and a vision of unity. They are not a taxonomy of skills." },
    ],
    reflect: "Which of the three skills would you most like to build, and what could you do this month to build it?",
    summary: {
      points: [
        "Technical skill is knowing the work: methods, tools and specialised knowledge.",
        "Human skill is leading, motivating and resolving conflict, and it matters at every level.",
        "Conceptual skill is seeing the organisation as a whole and connecting strategy to its parts.",
        "Design skill is not one of Katz's three.",
      ],
      memory: "Lower: technical. Middle: human (a balance). Top: conceptual.",
    },
  },
  {
    blockId: "mintzbergs-managerial-roles",
    name: "Mintzberg's managerial roles",
    intro: "Ten roles in three groups: relationships, information and decisions.",
    before: {
      q: "What does a manager do for most of the day?",
      choices: [
        { label: "Make decisions", reveal: "Decisions matter, but they are one of three groups. Mintzberg also counts interpersonal roles (relationships and status) and informational roles (gathering and passing on information)." },
        { label: "Relate, inform, decide", reveal: "Yes. Mintzberg groups the work into interpersonal, informational and decisional roles." },
      ],
    },
    lead: "What managers do falls into three groups of roles: relationships, information and decisions.",
    check: [
      {
        q: "Figurehead, leader and liaison belong to which group?",
        options: ["Interpersonal", "Informational", "Decisional", "Technical"],
        answer: 0,
        why: "They are the interpersonal roles, about relationships and status.",
      },
      {
        q: "Which of these is a decisional role?",
        options: ["Monitor", "Spokesperson", "Negotiator", "Liaison"],
        answer: 2,
        why: "Negotiator, alongside entrepreneur, disturbance handler and resource allocator.",
      },
    ],
    lens: [],
    reflect: "Which of these ten roles do you play most often in a group you belong to?",
    summary: {
      points: [
        "Interpersonal roles: figurehead, leader, liaison. About relationships and status.",
        "Informational roles: monitor, disseminator, spokesperson. About gathering and passing on information.",
        "Decisional roles: entrepreneur, disturbance handler, resource allocator, negotiator. About choices and action.",
      ],
      memory: "Relate, inform, decide.",
    },
  },
];

export default principles;
