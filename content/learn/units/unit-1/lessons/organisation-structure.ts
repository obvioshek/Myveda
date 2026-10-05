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
    blockId: "forms-of-organisation",
    name: "Line, line-and-staff and other forms",
    intro: "The classical forms, and two ways of describing a structure.",
    before: {
      q: "A manager gets expert advice from a legal adviser who cannot give orders to the manager's team. Which form is that?",
      choices: [
        { label: "Line-and-staff", reveal: "Yes. Staff specialists advise; line managers keep the authority to command, so unity of command is kept." },
        { label: "Functional", reveal: "No. In Taylor's functional form specialists give orders directly to workers. Advice without command is line-and-staff." },
      ],
    },
    lead: "Line organisation is a single chain of command; line-and-staff adds advisers; Taylor's functional form lets specialists command.",
    check: [
      ask("Which form breaks unity of command?", "Functional (Taylor)", ["Line", "Line-and-staff", "Committee"], "Several specialist foremen each direct the same worker."),
      ask("A temporary team from several departments, disbanded when the goal is met, is a…", "Project organisation", ["Line organisation", "Committee", "Informal organisation"], "It is built around one time-bound goal."),
      ask("Burns and Stalker's organic structure suits…", "A changing environment", ["A stable environment", "Strict rules", "Narrow spans"], "Mechanistic structures suit stable conditions."),
    ],
    lens: [],
    reflect: "In an organisation you know, where does the informal organisation help the formal one, and where does it work against it?",
    summary: {
      points: [
        "Line: one chain of command; simple but short of specialists.",
        "Line-and-staff: staff advise, line commands; risk of line-staff conflict.",
        "Functional (Taylor): specialists command; breaks unity of command. Committee and project forms.",
        "Mechanistic vs organic (Burns and Stalker, 1961); formal vs informal organisation.",
      ],
      memory: "Line commands, staff advise, function specialises.",
    },
  },
  {
    blockId: "authority-responsibility-and-accountability",
    name: "Authority, responsibility and accountability",
    intro: "Who may decide, who must do it, and who answers for it.",
    before: {
      q: "Can a manager hand over responsibility for a task entirely, along with the authority?",
      choices: [
        { label: "Yes", reveal: "Not entirely. The subordinate takes on responsibility for the task, but the manager's own ultimate responsibility and accountability to the superior remain." },
        { label: "No", reveal: "Right. The subordinate takes on responsibility for the task, but the manager's own ultimate responsibility and accountability to the superior remain." },
      ],
    },
    lead: "Authority is the right to decide, responsibility the obligation to perform, accountability answering for results; authority should match responsibility.",
    check: [
      ask("Barnard's acceptance theory says authority comes from…", "The subordinates who accept it", ["Ownership of the firm", "Personal expertise alone", "The law"], "Chester Barnard (1938); orders within the zone of indifference are accepted without question."),
      ask("Which flows upward?", "Accountability", ["Authority", "Line authority", "Functional authority"], "Authority flows downward; responsibility and accountability flow upward."),
      ask("Responsibility without matching authority leads to…", "A person unable to act", ["Misuse of power", "Too much discipline", "Faster decisions"], "Authority without responsibility invites misuse; the reverse leaves a person unable to act."),
    ],
    lens: [],
    reflect: "Have you ever been responsible for something without the authority to do it? What happened?",
    summary: {
      points: [
        "Authority: the right to decide. Responsibility: the duty to perform. Accountability: answering for results.",
        "Theories: formal, acceptance (Barnard, 1938), competence.",
        "Line, staff and functional authority.",
        "Parity: authority should match responsibility; ultimate responsibility cannot be delegated.",
      ],
      memory: "Authority down, accountability up, and the two should match.",
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
      { pairing: 1, adds: "A layered administration: officers over one village, ten, twenty, a hundred and a thousand, each reporting upward.", differs: "Manu prescribes tiers of local administration for a polity. The chapter's span of control is about how many people one manager supervises." },
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
    blockId: "span-of-control-graicunas-and-urwick",
    name: "How wide a span: Graicunas and Urwick",
    intro: "Why relationships multiply faster than subordinates.",
    before: {
      q: "A manager with 6 subordinates takes on a 7th. Roughly how much do the possible relationships grow?",
      choices: [
        { label: "By about a sixth", reveal: "Far more. By Graicunas's formula they rise from 222 to 490, more than doubling." },
        { label: "More than double", reveal: "Yes. By Graicunas's formula they rise from 222 to 490." },
      ],
    },
    lead: "Graicunas showed that relationships grow exponentially as subordinates are added, so a span has a practical limit.",
    check: [
      ask("Using R = n[2^(n−1) + n − 1], how many relationships does a manager with 4 subordinates have?", "44", ["16", "20", "100"], "4 × (2³ + 4 − 1) = 4 × 11 = 44."),
      ask("Urwick held that no superior can directly supervise more than about…", "Five or six subordinates whose work interlocks", ["Two or three subordinates", "Ten to twelve subordinates", "Twenty subordinates"], "The limit applies where the subordinates' work interlocks."),
      ask("Which factor allows a wider span?", "Competent, well-trained subordinates", ["Complex, varied work", "Rapidly changing conditions", "Widely scattered staff"], "The others call for a narrower span."),
    ],
    lens: [],
    reflect: "How many people could you supervise well at once, and what would let you handle more?",
    summary: {
      points: [
        "Graicunas (1933): R = n[2^(n−1) + n − 1].",
        "4 → 44, 5 → 100, 6 → 222, 7 → 490 relationships.",
        "Urwick: five or six where work interlocks.",
        "Span depends on competence, the work, plans, change, technology, dispersion and decentralisation.",
      ],
      memory: "Add one person, double the relationships.",
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
  {
    blockId: "centralisation-and-decentralisation",
    name: "Centralisation and decentralisation",
    intro: "Where decisions are kept, and how far down they go.",
    before: {
      q: "Is any real organisation completely centralised or completely decentralised?",
      choices: [
        { label: "Yes", reveal: "No. Some decisions are always kept at the centre and some always made lower down; it is a matter of degree." },
        { label: "No", reveal: "Right. Some decisions are always kept at the centre and some always made lower down; it is a matter of degree." },
      ],
    },
    lead: "Centralisation keeps authority at central points; decentralisation pushes it to the lowest level able to use it. It is a matter of degree.",
    check: [
      ask("Developing future managers is an advantage of…", "Decentralisation", ["Centralisation", "Line organisation", "Narrow spans"], "Managers lower down learn by making real decisions."),
      ask("Uniform policies and tight control are advantages of…", "Centralisation", ["Decentralisation", "Delayering", "Informal organisation"], "Decentralisation gains speed and initiative but loses some uniformity."),
      ask("Whose definitions call centralisation the systematic reservation of authority at central points?", "Louis A. Allen", ["Henri Fayol", "Chester Barnard", "Ernest Dale"], "Ernest Dale gave tests for the degree of decentralisation."),
    ],
    lens: [],
    reflect: "Which decisions in an organisation you know should move closer to the people who carry them out?",
    summary: {
      points: [
        "Allen: centralisation reserves authority; decentralisation delegates it to the lowest level able to use it.",
        "A matter of degree; Dale's tests measure it.",
        "Centralisation: uniformity and control. Decentralisation: speed, initiative and management development.",
        "Factors: size, cost of decisions, need for uniformity, philosophy, managers available, controls, change.",
      ],
      memory: "Keep the few at the centre; push the rest down.",
    },
  },
];

export default lessons;
