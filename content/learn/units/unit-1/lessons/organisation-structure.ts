import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "types-of-structure",
    name: "Types of structure",
    intro: "How a firm groups its people, and what each way of grouping costs.",
    before: {
      q: "Can a person report to two managers and the structure still work?",
      choices: [
        { label: "No", reveal: "A matrix structure does exactly this: dual reporting to a function and a project manager. Its strength is collaboration; its challenge is dual authority." },
        { label: "Yes", reveal: "That is the matrix structure: dual reporting to a function and a project manager. Its strength is collaboration; its challenge is dual authority." },
      ],
    },
    lead: "A structure sets who does what, who reports to whom and who decides; each type buys one strength at the price of one challenge.",
    check: [
      ask("Which structure gives an employee two bosses, a function head and a project head?", "Matrix", ["Divisional", "Functional", "Line"], "Dual reporting is the mark of the matrix, and it is why the matrix breaks unity of command. In a divisional structure each person still has one boss, inside the division."),
      ask("A Pune auto-parts firm sets up separate brakes, clutches and harness units, each with its own production and sales team. This is a…", "Divisional structure, which risks duplicating functions", ["Functional structure, which risks functional silos", "Matrix structure, which risks dual authority", "Virtual structure, which risks technology dependence"], "Grouping by product, with each unit repeating the same functions, is divisional, and its cost is duplication. A functional structure would have one production head for all three products."),
      ask("A firm's functional heads argue every week over which of its three products gets machine time, and nobody answers for each product's profit. What do these signs suggest?", "It has outgrown its functional structure; a divisional or hybrid one may fit better", ["It needs more functional heads to share the arguments", "It should move to a line form with no specialists at all", "It should change nothing, since arguments show healthy collaboration"], "Fights over shared resources and no one owning a product's profit are the usual signs a functional structure has been outgrown. Adding functional heads only adds more silos to argue between."),
    ],
    lens: [
      { pairing: 2, adds: "Each domain (treasury, mines, trade, agriculture, accounts) under its own head, with defined duties and audit.", differs: "The Arthaśāstra describes the departments of a state. The chapter's functional structure is a way to group a firm's specialised functions." },
      { pairing: 3, adds: "Group assemblies in which decisions were made by discussion.", differs: "The text describes assemblies of a polity, so the comparison with self-managed circles is loose, and the chapter offers it only as a reading." },
    ],
    reflect: "Which structure does your workplace use, and which of its challenges do you see?",
    summary: {
      points: [
        "Structure: how job tasks are formally divided, grouped and coordinated (Robbins and Judge).",
        "Functional: efficiency, but silos. Divisional: flexibility, but duplication. Matrix: collaboration, but dual authority.",
        "Hierarchical: clear authority, but slow adaptation. Virtual: flexibility, but technology dependence. Lean: autonomy, but overload. Hybrid: adaptability, but complexity.",
        "Flexible forms: network, flat, holacracy, team-based and boundaryless.",
        "Structure follows strategy (Chandler, 1962): diversified firms tend to move to divisional structures.",
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
    lead: "Line is one chain of command; line-and-staff adds advisers who do not command; Taylor's functional form lets several specialists command the same worker.",
    check: [
      ask("Which form breaks unity of command?", "Taylor's functional organisation", ["Line organisation", "Line-and-staff organisation", "Committee organisation"], "Under Taylor's scheme several specialist foremen each give orders to the same worker. Line-and-staff keeps unity of command, because the staff only advise."),
      ask("A transport company's cost accountant works out the cost per kilometre and advises the owner, but cannot give orders to drivers. The accountant holds…", "A staff position", ["A line position", "A functional foreman's post", "A committee seat"], "Advising the line without commanding it is staff. If the accountant could order drivers to change routes, the firm would be moving toward Taylor's functional form."),
      ask("A software firm faces customer needs that change every few months. Which structure do Burns and Stalker's findings point to?", "Organic: few rules, decentralised decisions, lateral communication", ["Mechanistic: rigid rules, centralised decisions, vertical communication", "Line: a single chain of command with no specialists", "Committee: every decision taken jointly by managers"], "Organic structures suit a changing environment; mechanistic ones suit stable conditions. A rigid, centralised structure would be slowest to respond to the changes."),
    ],
    lens: [],
    reflect: "In an organisation you know, where does the informal organisation help the formal one, and where does it work against it?",
    summary: {
      points: [
        "Line (scalar, military): one chain of command; simple and quick, but short of specialists.",
        "Line-and-staff: staff advise, line commands; risk of line-staff conflict.",
        "Functional (Taylor): eight specialist foremen; breaks unity of command. Committee and project forms.",
        "Mechanistic suits stable conditions, organic suits change (Burns and Stalker, 1961).",
        "The informal organisation grows from friendships and speaks through the grapevine.",
      ],
      memory: "Line commands, staff advise, Taylor's foremen each command one part.",
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
    lead: "Authority is the right to decide, responsibility the duty to perform, accountability answering for results. Authority flows down, the other two flow up, and authority should match responsibility.",
    check: [
      ask("Barnard's acceptance theory says authority comes from…", "The subordinates who accept it", ["The manager's position in the hierarchy", "Personal expertise alone", "Ownership of the firm"], "Barnard (1938) held that an order has authority only if it is accepted; orders inside the zone of indifference are accepted without question. Position as the source is the formal, classical theory."),
      ask("During a Diwali sale a store manager lets the floor supervisor approve discounts up to ₹2,000 a bill. The discounts are later found to be misused. Who answers to the regional manager?", "The store manager, who keeps ultimate responsibility", ["Only the floor supervisor, who approved them", "Nobody, since the authority was passed down", "The regional manager's own finance team"], "The supervisor answers to the store manager, but delegating does not remove the store manager's own accountability upward. Ultimate responsibility cannot be passed on."),
      ask("A branch manager must cut bad loans but cannot refuse loans pushed by her regional office. What is the problem, in this chapter's terms?", "Responsibility without matching authority, so she cannot act", ["Authority without responsibility, which invites misuse", "An order outside her zone of indifference", "Functional authority used by a staff specialist"], "Parity requires authority to match responsibility. Authority without responsibility is the reverse case, and it leads to misuse rather than to a manager who cannot act."),
    ],
    lens: [],
    reflect: "Have you ever been responsible for something without the authority to do it? What happened?",
    summary: {
      points: [
        "Authority: the right to decide. Responsibility: the duty to perform. Accountability: answering for results.",
        "Sources: formal (position), acceptance (Barnard, 1938; zone of indifference), competence.",
        "Line authority commands, staff authority advises, functional authority directs one activity in other departments.",
        "Parity: authority should match responsibility (Fayol; Urwick's correspondence). Ultimate responsibility cannot be delegated.",
        "Authority comes with a post; power is the wider ability to influence.",
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
    lead: "Span of control is the number of people reporting to one manager; it sets the hierarchy's shape, wide and flat or narrow and tall.",
    check: [
      ask("Span of control is…", "The number of people who report directly to one manager", ["The number of levels in the hierarchy", "The range of decisions a manager may take", "The number of departments in the firm"], "The span is width; the number of levels is height. For the same number of people, wider spans mean fewer levels."),
      ask("A firm widens its spans of control from 4 to 8 without changing its staff. What should it expect?", "Fewer levels and faster decisions, but less close supervision", ["More levels and closer supervision", "Higher managerial cost and more bureaucracy", "No change in the number of managers"], "Wider spans flatten the hierarchy and cut managers, so decisions speed up. Closer supervision and more levels come with narrow spans, not wide ones."),
      ask("A firm has 64 sales staff and a span of 4 at every level. How many managers does it need?", "21", ["16", "9", "20"], "64 ÷ 4 = 16, then 16 ÷ 4 = 4, then 4 ÷ 4 = 1: 16 + 4 + 1 = 21. 16 counts only the first-line managers, and 9 is the answer for a span of 8."),
    ],
    lens: [
      { pairing: 1, adds: "A layered administration: officers over one village, ten, twenty, a hundred and a thousand, each reporting upward.", differs: "Manu prescribes tiers of local administration for a polity. The chapter's span of control is about how many people one manager supervises." },
      { pairing: 4, adds: "A cycle with inputs, transformation, outputs and a return, which whoever refuses to turn lives in vain.", differs: "The Gītā's wheel of sacrifice is a picture of exchange between beings and nature. The chapter's process is a way to organise work." },
    ],
    reflect: "How many people report to your manager, and what does that do to how decisions are made?",
    summary: {
      points: [
        "Span of control: the number of subordinates one manager supervises.",
        "Wide span: flat, faster decisions, lower cost, more autonomy; but overload and limited supervision.",
        "Narrow span: tall, close supervision, better coordination; but slower decisions, higher cost, bureaucracy.",
        "Charts show who reports to whom: hierarchical, flat, matrix, divisional, team-based.",
        "Organising process: purpose and goals, inputs, activities and tasks, outputs, monitoring and feedback.",
      ],
      memory: "Wide and flat, or narrow and tall.",
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
    lead: "Graicunas counted direct single, direct group and cross relationships, which grow exponentially as subordinates are added; Urwick drew a limit of five or six where work interlocks.",
    check: [
      ask("Urwick held that no superior can directly supervise more than about…", "Five or six subordinates whose work interlocks", ["Two or three subordinates of any kind", "Ten to twelve subordinates whose work interlocks", "Twenty subordinates doing routine work"], "Urwick's rule is five or, at most, six, and only where the subordinates' work interlocks. Where work is independent, wider spans are workable."),
      ask("Which team could one supervisor run with a span well above Urwick's five or six?", "Bank tellers doing independent, routine work with clear procedures", ["Engineers whose designs must fit closely together", "A new team in a fast-changing market", "Staff spread across several cities with poor links"], "Simple, standardised, independent work with clear plans allows a wide span. Interlocking work, fast change and scattered staff all call for a narrower one."),
      ask("Using R = n[2^(n−1) + n − 1], how many relationships does a manager with 4 subordinates have?", "44", ["16", "20", "100"], "4 × (2³ + 4 − 1) = 4 × 11 = 44: 4 direct single, 28 direct group and 12 cross. 100 is the answer for five subordinates."),
    ],
    lens: [],
    reflect: "How many people could you supervise well at once, and what would let you handle more?",
    summary: {
      points: [
        "Graicunas (1933): R = n[2^(n−1) + n − 1].",
        "Three kinds: direct single (n), direct group n(2^(n−1) − 1), cross n(n − 1).",
        "4 → 44, 5 → 100, 6 → 222, 7 → 490, 8 → 1,080 relationships.",
        "Urwick: five, or at most six, where work interlocks.",
        "Span depends on competence, the work, plans, change, technology, dispersion and decentralisation; delayering widens spans.",
      ],
      memory: "Add one person, and the relationships more than double.",
    },
  },
  {
    blockId: "delegation-and-decentralisation",
    name: "Delegation and decentralisation",
    intro: "Passing on a task, and spreading decisions across the organisation.",
    before: {
      q: "If a manager delegates a task, who answers for the result?",
      choices: [
        { label: "The subordinate alone", reveal: "Not alone. The subordinate answers to the manager, but the manager retains ultimate accountability." },
        { label: "The superior still", reveal: "Yes. Responsibility and authority pass down, but the superior retains ultimate accountability." },
      ],
    },
    lead: "Delegation hands one person a task and the authority for it, while the manager still answers for the result; decentralisation spreads decisions across the whole organisation.",
    check: [
      ask("When a manager delegates a task, what stays with the manager?", "Ultimate accountability for the result", ["The authority needed to do the task", "The duty to do the work personally", "Nothing; everything passes down"], "Responsibility and authority for the task pass to the subordinate. The manager's own accountability upward cannot be passed on."),
      ask("A branch manager lets a loan officer approve gold loans up to ₹2 lakh. A ₹1.5 lakh loan goes bad. Who answers to the regional office for it?", "The branch manager, though the officer answers to her", ["Only the loan officer, who approved it", "The regional office, which set the policy", "No one, since the loan was within the limit"], "The officer is accountable to the branch manager for his decision, but she stays accountable to the regional office for every loan the branch makes."),
      ask("A manager hands a junior a project with no limits and no information, and never checks on it. In this chapter's terms, that is…", "Abdication, not delegation", ["Decentralisation of authority", "Sound delegation, since authority passed", "Functional authority over the project"], "Delegation needs clear limits, support and checks. Handing a task over and walking away is abdication, and the manager still answers for what goes wrong."),
    ],
    lens: [
      { pairing: 0, adds: "The case for helpers: appoint counsellors and listen to them.", differs: "Kauṭilya argues about a ruler governing a state. The chapter's delegation also stresses training, guidance, trust and feedback." },
    ],
    reflect: "What is one task you could delegate, and what would you still answer for?",
    summary: {
      points: [
        "Delegation passes responsibility and authority for a task from superior to subordinate.",
        "Responsibility → authority → action → accountability; the superior keeps ultimate accountability.",
        "Sound delegation: training, guidance, trust, feedback, clear limits and check-ins.",
        "Decentralisation spreads decisions across the organisation: functional, geographic, product- or service-based, or market-based.",
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
    lead: "Centralisation keeps authority at central points; decentralisation pushes it to the lowest level able to use it. Every firm mixes the two, decision by decision.",
    check: [
      ask("Whose definitions call centralisation the systematic reservation of authority at central points?", "Louis A. Allen", ["Henri Fayol", "Chester Barnard", "Ernest Dale"], "Allen defined both terms. Ernest Dale is the tempting answer, but he gave the tests for measuring the degree of decentralisation, not these definitions."),
      ask("A restaurant chain fixes its menu and hygiene standards at head office, but lets branch managers set rosters and festival specials. The chain is…", "Centralised on some decisions and decentralised on others", ["Fully centralised", "Fully decentralised", "Decentralised simply because it has many branches"], "It is a matter of degree, decided decision by decision. Having many branches says where offices are, not where decisions are made."),
      ask("By Dale's tests, which change makes a firm more decentralised?", "Branch decisions need less checking by head office", ["Head office approves more of the branches' decisions", "Fewer functions are decided in the branches", "More branches open, but every decision stays central"], "Dale's tests look at how many and how important the decisions made lower down are, how many functions they cover, and how little they are checked above. Opening branches alone changes none of these."),
    ],
    lens: [],
    reflect: "Which decisions in an organisation you know should move closer to the people who carry them out?",
    summary: {
      points: [
        "Allen: centralisation reserves authority at central points; decentralisation delegates all but that to the lowest levels.",
        "A matter of degree; Dale's four tests measure it.",
        "Centralisation: uniformity and control. Decentralisation: speed, initiative and management development.",
        "Factors: size, cost of decisions, need for uniformity, philosophy, managers available, controls, change.",
        "Decentralisation is about where decisions are made, not how many branches there are.",
      ],
      memory: "Keep the few at the centre; push the rest down.",
    },
  },
];

export default lessons;
