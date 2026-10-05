import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "types-of-structure",
    name: "Types of structure",
    intro: "Seven formal structures, each trading a strength for a challenge.",
    before: {
      q: "Can a person report to two managers and the structure still work?",
      choices: [
        { label: "No", reveal: "A matrix structure does exactly this: dual reporting to a function and a project manager. Its strength is collaboration; its challenge is dual authority." },
        { label: "Yes", reveal: "That is the matrix structure: dual reporting to a function and a project manager. Its strength is collaboration; its challenge is dual authority." },
      ],
    },
    lead: "Each structure groups people differently, and each has a strength and a challenge.",
    check: [
      ask("Which structure groups people by specialised functions, and risks silos?", "Functional", ["Divisional", "Matrix", "Virtual"], "Functional: efficiency and specialisation, with the challenge of functional silos."),
      ask("Which structure uses dual reporting?", "Matrix", ["Lean", "Hierarchical", "Hybrid"], "Matrix: function and project manager."),
      ask("What is holacracy?", "Self-managed teams and circles that decide collectively", ["Top-down authority", "Dispersed teams linked by technology", "A flat structure with waste eliminated"], "Holacracy is one of the informal and flexible forms."),
    ],
    lens: [
      { pairing: 2, adds: "Each domain (treasury, mines, trade, agriculture, accounts) under its own head, with defined duties and audit.", differs: "The Arthaśāstra describes the departments of a state. The chapter's functional structure is a way to group a firm's specialised functions." },
      { pairing: 3, adds: "Group assemblies in which decisions were made by discussion.", differs: "The text describes assemblies of a polity, so the comparison with self-managed circles is loose, and the chapter offers it only as a reading." },
    ],
    reflect: "Which structure does your workplace use, and which of its challenges do you see?",
    summary: {
      points: [
        "Functional: efficiency, but silos. Divisional: flexibility, but duplication. Matrix: collaboration, but dual authority.",
        "Hierarchical: clear authority, but slow adaptation. Virtual: flexibility, but technology dependence.",
        "Lean: autonomy, but managerial overload. Hybrid: adaptability, but complexity.",
        "Flexible forms: network, flat, holacracy, team-based and boundaryless.",
      ],
      memory: "Every structure trades a strength for a challenge.",
    },
  },
  {
    blockId: "span-of-control-and-charts",
    name: "Span of control and charts",
    intro: "How many people one manager supervises, and how to draw the result.",
    before: {
      q: "Does a wider span of control mean closer supervision?",
      choices: [
        { label: "Yes", reveal: "No. A wide span means many subordinates per manager and fewer levels: faster decisions and more autonomy, but limited supervision." },
        { label: "No", reveal: "Right. A wide span means faster decisions and more autonomy, but manager overload and limited supervision." },
      ],
    },
    lead: "The span of control sets the shape of the hierarchy: wide and flat, or narrow and tall.",
    check: [
      ask("A wide span of control has…", "Many subordinates per manager and fewer levels", ["Few subordinates per manager and more levels", "Dual reporting lines", "No managers at all"], "A narrow span is the opposite: close supervision and better coordination, but slower decisions and more bureaucracy."),
      ask("What does an organisational chart show?", "Who reports to whom", ["The firm's profits", "Who earns the most", "A list of customers"], "Hierarchical, flat, matrix and divisional charts all show reporting."),
      ask("The organising process runs from purpose and goals through…", "Inputs, activities and tasks, to outputs, with monitoring and a feedback loop", ["Planning to controlling only", "Hiring to firing", "Buying to selling"], "Feedback drives improvement."),
    ],
    lens: [
      { pairing: 1, adds: "A layered administration with a regular ratio: officers over one village, ten, twenty, a hundred and a thousand.", differs: "Manu prescribes tiers of local administration for a polity. The chapter's span of control is about how many people one manager supervises." },
      { pairing: 4, adds: "A cycle with inputs, transformation, outputs and a return, which whoever refuses to turn lives in vain.", differs: "The Gītā's wheel of sacrifice is a picture of exchange between beings and nature. The chapter's process is a way to organise work." },
    ],
    reflect: "How many people report to your manager, and what does that do to how decisions are made?",
    summary: {
      points: [
        "Wide span: faster decisions, lower managerial cost, greater autonomy. Costs: manager overload, limited supervision.",
        "Narrow span: close supervision, better coordination. Costs: slower decisions, higher cost, bureaucracy.",
        "An organisational chart shows who reports to whom.",
        "The organising process: purpose and goals, inputs, activities and tasks, outputs, then monitoring and feedback.",
      ],
      memory: "Wide and fast, or narrow and close.",
    },
  },
  {
    blockId: "delegation-and-decentralisation",
    name: "Delegation and decentralisation",
    intro: "Passing on a task, and spreading decisions across the organisation.",
    before: {
      q: "If a manager delegates a task, who answers for the result?",
      choices: [
        { label: "The subordinate alone", reveal: "Not alone. The superior retains ultimate accountability." },
        { label: "The superior still", reveal: "Yes. Responsibility and authority pass down, but the superior retains ultimate accountability." },
      ],
    },
    lead: "Delegation is about the person. Decentralisation is about the system.",
    check: [
      ask("Which term means the duty to do the work?", "Responsibility", ["Authority", "Accountability", "Autonomy"], "Responsibility is the duty to do the work, authority the power to decide, and accountability answering for results."),
      ask("Which has the broader scope?", "Decentralisation", ["Delegation", "Both equally", "Neither"], "Delegation transfers specific authority; decentralisation distributes authority across the organisation."),
      ask("What is the short formula for delegation?", "Responsibility, authority, action, accountability", ["Plan, organise, staff, direct, control", "Division, order, unity, equity", "Input, output, feedback, noise"], "A sound delegation also provides training, guidance, trust and feedback."),
    ],
    lens: [
      { pairing: 0, adds: "The case for helpers: appoint counsellors and listen to them.", differs: "Kauṭilya argues about a ruler governing a state. The chapter's delegation also stresses training, guidance, trust and feedback." },
    ],
    reflect: "What is one task you could delegate, and what would you still answer for?",
    summary: {
      points: [
        "Delegation passes responsibility and authority for a task from superior to subordinate.",
        "The superior keeps ultimate accountability.",
        "Decentralisation spreads decision-making power across the organisation: functional, geographic, product- or service-based, or market-based.",
        "Delegation: narrow, a task, an individual. Decentralisation: broad, the organisation, a unit.",
      ],
      memory: "Delegation is about the person; decentralisation is about the system.",
    },
  },
];

export default lessons;
