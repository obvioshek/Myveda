import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "functions-of-management-posdc",
    name: "The functions of management",
    intro: "Five linked functions that repeat in a cycle, with coordination running through them.",
    before: {
      q: "When a manager finds a gap between results and plan, what happens next?",
      choices: [
        { label: "The cycle ends", reveal: "Not quite. Controlling measures results, compares them with the plan and corrects the gap, which feeds the next round of planning." },
        { label: "Back to planning", reveal: "Yes. Controlling measures results, compares them with the plan and corrects the gap, which feeds the next round of planning." },
      ],
    },
    lead: "Every manager plans, organises, staffs, directs and controls, in a cycle that coordination runs through.",
    check: [
      ask("Whose list of management functions is POSDCORB?", "Luther Gulick", ["Henri Fayol", "George R. Terry", "Koontz and O'Donnell"], "Gulick (1937): planning, organising, staffing, directing, co-ordinating, reporting and budgeting. Koontz and O'Donnell's five-function list is the tempting choice, but it has no reporting or budgeting."),
      ask("After a college fest, the committee compares its spending and footfall with the plan and uses the lessons for next year. Which function is it performing?", "Controlling", ["Planning", "Coordinating", "Directing"], "Measuring results against the plan and correcting the gap is controlling. Planning is tempting because the lessons feed next year's plan, but that is what controlling hands on, not what it is."),
      ask("Which writer's list includes staffing as a separate function?", "Koontz and O'Donnell", ["Henri Fayol", "George R. Terry", "None of the classical writers"], "Koontz and O'Donnell, like Gulick, name staffing. Fayol's list is plan, organise, command, co-ordinate and control, and Terry's is plan, organise, actuate and control: neither names staffing."),
    ],
    lens: [
      { pairing: 0, adds: "A ruler's work named as a cycle of duties: create, gather, guard and allocate resources.", differs: "The couplet describes a king's duties over wealth. The functions of management are a general list for any organisation." },
    ],
    reflect: "Which of the five functions takes most of your time in a group project, and which gets neglected?",
    summary: {
      points: [
        "Fayol: plan, organise, command, co-ordinate, control. Gulick: POSDCORB. Terry: plan, organise, actuate, control.",
        "Koontz and O'Donnell's five, the most widely used list: planning, organising, staffing, directing, controlling.",
        "Controlling corrects the gap, and its findings feed the next round of planning.",
        "Coordination runs through all five: the essence of management, not a separate step.",
      ],
      memory: "Plan, organise, staff, direct, control, then round again.",
    },
  },
  {
    blockId: "planning",
    name: "Planning",
    intro: "Deciding in advance what to do, how, when and by whom.",
    before: {
      q: "Can a manager control performance without a plan?",
      choices: [
        { label: "Yes", reveal: "Not really. Control compares results with a standard, and the standard comes from the plan. That is why planning is called the primary function." },
        { label: "No", reveal: "Right. Control compares results with a standard, and the standard comes from the plan. That is why planning is called the primary function." },
      ],
    },
    lead: "Planning decides in advance what to do, how, when and by whom, through eight steps; every other function follows from it.",
    check: [
      ask("Assumptions about the future on which a plan rests are called…", "Planning premises", ["Objectives", "Policies", "Derivative plans"], "Premises are assumptions about conditions, external (economy, competition) or internal (resources). Objectives are the tempting choice, but an objective is the result aimed for, not an assumption."),
      ask("A kirana store decides to stock up on credit for Diwali. It then plans to hire two helpers and arrange cash to pay the wholesaler. What are these two plans?", "Supporting (derivative) plans", ["Planning premises", "Contingency plans", "Objectives"], "They make the chosen alternative work, which is step 7. A contingency plan would be a fallback if conditions change, such as a second wholesaler."),
      ask("A store owner expects Diwali demand to peak in the last five days. Is this a forecast or a plan?", "A forecast, which feeds the planning premises", ["A plan, since it is about the future", "An objective, since it names a period", "A contingency plan for late demand"], "A forecast estimates what will happen; planning decides what to do about it. Being about the future does not make something a plan."),
    ],
    lens: [
      { pairing: 1, adds: "Thinking before the deed, and the fault of starting first and thinking later.", differs: "The couplet is a rule for any undertaking. Planning in management adds objectives, premises and a formal eight-step process." },
    ],
    reflect: "Think of a recent plan that went wrong. Which planning premise turned out to be false?",
    summary: {
      points: [
        "Planning is the primary function: goal-oriented, all-pervasive, forward-looking, continuous and a matter of choice.",
        "Types by level, by focus (strategic, tactical, operational, contingency) and by time.",
        "Eight steps: need, objectives, premises, alternatives, evaluation, selection, supporting plans, implementation.",
        "A forecast estimates what will happen; a plan decides what to do about it.",
      ],
      memory: "Think first, then act; plan first, then everything else.",
    },
  },
  {
    blockId: "organising",
    name: "Organising",
    intro: "Arranging work, people and resources so the plan can be carried out.",
    before: {
      q: "Planning decides what to do. What does organising decide?",
      choices: [
        { label: "How it will be done", reveal: "Yes. Organising decides the tasks, who does them, how they are grouped, who reports to whom and where decisions are made." },
        { label: "Whether to do it", reveal: "That is still planning. Organising decides the tasks, who does them, how they are grouped, who reports to whom and where decisions are made." },
      ],
    },
    lead: "Organising identifies and groups the work, assigns duties and authority, and sets who reports to whom.",
    check: [
      ask("Combining related activities into departments or units is called…", "Departmentalisation", ["Delegation", "Decentralisation", "Coordination"], "It is step 2 of organising. Delegation is tempting, but it is about handing authority to a position, which is step 3."),
      ask("A chai owner with three outlets puts buying and accounts at the centre, and making, serving and cash at each outlet. Which step of organising is this?", "Grouping activities", ["Identifying activities", "Assigning duties and authority", "Establishing reporting relationships"], "The owner is combining related activities into units. Identifying came first, when the tasks were listed; reporting comes last, when helpers are told to report to the outlet head."),
      ask("A firm has drawn up all its positions and reporting lines, but half the positions are empty. Which function must now act?", "Staffing", ["Organising", "Planning", "Controlling"], "Organising creates the positions; staffing fills them with people. More organising would only redraw the chart."),
    ],
    lens: [
      { pairing: 2, adds: "Five things to weigh before acting: means, instruments, time, the deed and the place.", differs: "The couplet is advice to one person about to act. Organising builds a lasting structure of departments and reporting lines." },
    ],
    reflect: "In a team you know, is it clear who reports to whom? What problem shows up when it isn't?",
    summary: {
      points: [
        "Organising brings together physical, financial and human resources (Allen: identify and group the work, delegate, establish relationships).",
        "Planning says what; organising says how: tasks, who does them, grouping, reporting and where decisions are made.",
        "Four steps: identify activities, group them, assign duties and authority, set reporting relationships.",
        "Organising creates positions; staffing fills them. Its result is the organisation structure.",
      ],
      memory: "Identify, group, assign, relate.",
    },
  },
  {
    blockId: "staffing",
    name: "Staffing",
    intro: "Filling the structure with the right people, and keeping it filled.",
    before: {
      q: "Is staffing over once the right person has been hired?",
      choices: [
        { label: "Yes", reveal: "No. Staffing goes on: placement, orientation, training, compensation, appraisal, and promotion or transfer keep the structure well filled." },
        { label: "No", reveal: "Right. Staffing goes on: placement, orientation, training, compensation, appraisal, and promotion or transfer keep the structure well filled." },
      ],
    },
    lead: "Staffing puts the right person in the right job, in eight steps from manpower planning to career planning, and keeps the structure filled.",
    check: [
      ask("What is the first step in the staffing process?", "Manpower planning", ["Recruitment", "Selection", "Placement"], "First estimate how many people, and of what kind, are needed. Recruitment is the tempting answer, but you cannot look for people before you know how many you need."),
      ask("A new line needs 40 operators, and 10 can move across from an older line. Advertising brings 300 applications. How many must selection choose?", "30, about one in ten applicants", ["40, one for each position", "10, the ones already working", "300, all the applicants"], "Manpower planning first nets off the 10 internal moves: 40 − 10 = 30. Choosing 40 forgets that a quarter of the posts are already covered."),
      ask("A plant runs advertisements and visits ITIs to get as many suitable people as possible to apply. This is…", "Recruitment", ["Selection", "Placement", "Orientation"], "Recruitment widens the pool. Selection then narrows it, rejecting most applicants to choose the few who fit."),
    ],
    lens: [
      { pairing: 3, adds: "The quality to look for in anyone employed: the judgement to weigh good and harm, and a leaning toward the good.", differs: "The couplet names a quality of character. Staffing is a sequence of steps from manpower planning to career planning." },
    ],
    reflect: "Which step of staffing do you think organisations most often rush, and what does it cost them?",
    summary: {
      points: [
        "Koontz and O'Donnell: manning the structure through selection, appraisal and development. Today largely HRM's work.",
        "Steps: manpower planning, recruitment, selection, placement and orientation.",
        "Then training and development, compensation, appraisal, and promotion, transfer and career planning.",
        "Recruitment widens the pool; selection narrows it.",
      ],
      memory: "Plan, find, choose, place, grow, pay, rate, move.",
    },
  },
  {
    blockId: "directing",
    name: "Directing and leadership styles",
    intro: "Turning plans into action through supervision, motivation, communication and leadership.",
    before: {
      q: "A team of experienced specialists works best when the leader…",
      choices: [
        { label: "Decides everything", reveal: "That is the autocratic style: fast, but it stifles experts. For self-driven specialists, a democratic or laissez-faire style usually works better." },
        { label: "Gives them room", reveal: "Usually, yes. Democratic and laissez-faire styles suit experienced, self-driven people; the autocratic style suits a crisis or a team that needs clear guidance." },
      ],
    },
    lead: "Directing turns plans into action through supervision, motivation, communication and leadership, and the right style depends on the situation.",
    check: [
      ask("The four elements of directing are supervision, motivation, communication and…", "Leadership", ["Budgeting", "Departmentalisation", "Recruitment"], "Directing works through people: overseeing, encouraging, informing and influencing them. Budgeting belongs to planning and control, not to directing."),
      ask("A bank branch's system goes down at month-end and the queue grows. The manager decides alone who handles which customers. Which style is this, and does it fit?", "Autocratic, and it fits a crisis", ["Democratic, since the staff are involved", "Laissez-faire, since staff act on their own", "Autocratic, and it never fits"], "She decides alone, which is autocratic, and its strength is fast decisions in a crisis. It is a weakness only when overused, so \"never fits\" is wrong."),
      ask("A manager pays a bonus to each officer who meets the quarter's loan target and withholds it from those who miss. Which style is she using?", "Transactional", ["Transformational", "Autocratic", "Laissez-faire"], "Rewards and penalties for meeting set goals are transactional. Autocratic is tempting, but it describes who decides, not a trade of rewards for results."),
    ],
    lens: [
      { pairing: 4, adds: "Willing following won by kind words and generous care, not by force.", differs: "The couplet praises a ruler's manner. Leadership styles are a range of methods suited to different followers and situations." },
    ],
    reflect: "Which leadership style brings out your best work, and which style do you fall into under pressure?",
    summary: {
      points: [
        "Elements of directing: supervision, motivation, communication, leadership.",
        "Autocratic, democratic and laissez-faire styles (Lewin, 1939).",
        "Transactional and transformational leadership (Burns, 1978).",
        "No single style is best: it depends on the leader, the followers and the culture.",
      ],
      memory: "Direct through people: oversee, encourage, inform, influence.",
    },
  },
  {
    blockId: "coordinating",
    name: "Coordinating",
    intro: "Bringing every effort into line toward one purpose.",
    before: {
      q: "Production makes more than sales can sell. Which function failed?",
      choices: [
        { label: "Coordination", reveal: "Yes. Production and sales each did their own work, but nobody brought their efforts into line. Horizontal coordination was missing." },
        { label: "Staffing", reveal: "Probably not. Both departments did their work; nobody brought their efforts into line. That is a failure of horizontal coordination." },
      ],
    },
    lead: "Coordination fits everyone's work together toward one purpose, and runs through every function.",
    check: [
      ask("Who defined coordination as the orderly arrangement of group effort to provide unity of action?", "Mooney and Reiley", ["Koontz and O'Donnell", "Henri Fayol", "Luther Gulick"], "The definition is Mooney and Reiley's. Koontz and O'Donnell are the tempting choice: they called coordination the essence of management, but did not give this definition."),
      ask("A store's marketing and warehouse heads agree stock levels before the Diwali advertisement is booked. Which of Follett's principles is this?", "Early start", ["Continuity", "Direct contact", "Reciprocal relating"], "They coordinate while plans are still being made, not after the advertisement runs. Direct contact is also present, but the point of the timing is the early start."),
      ask("Every team in a store is willing and hard-working, yet the sale fails because their efforts clash. What was missing?", "Coordination", ["Cooperation", "Staffing", "Motivation"], "Cooperation is willingness to help, and the teams had it. Coordination is the manager's deliberate arranging of their efforts, and that was missing."),
    ],
    lens: [
      { pairing: 5, adds: "Shared movement, shared speech and one mind: unity of action as an ideal.", differs: "The hymn prays for concord. Coordination arranges it through plans, structure, communication and committees." },
    ],
    reflect: "Where in an organisation you know do two departments work hard but against each other?",
    summary: {
      points: [
        "Mooney and Reiley: the orderly arrangement of group effort for unity of action.",
        "The essence of management (Koontz and O'Donnell); one of Fayol's five elements; the CO in POSDCORB.",
        "Kinds: internal and external, vertical and horizontal.",
        "Follett: direct contact, early start, reciprocal relating, continuity. Cooperation is willingness; coordination is arrangement.",
      ],
      memory: "Many efforts, one direction.",
    },
  },
  {
    blockId: "controlling",
    name: "Controlling",
    intro: "Measuring performance against standards and correcting the gap.",
    before: {
      q: "Is a good control system only about catching mistakes after they happen?",
      choices: [
        { label: "Yes", reveal: "Not only. Control corrects past deviations, but good control also looks ahead to prevent them, and its findings feed the next plan." },
        { label: "No", reveal: "Right. Control corrects past deviations, but good control also looks ahead to prevent them, and its findings feed the next plan." },
      ],
    },
    lead: "Controlling sets standards, measures performance, compares the two and corrects the deviation, in a loop that feeds the next plan.",
    check: [
      ask("A manager attends only to the deviations that are significant and leaves the small ones alone. This is called…", "Management by exception", ["Benchmarking", "Budgetary control", "Break-even analysis"], "It saves managers' time for the deviations that matter. Budgetary control is tempting, but it is a technique for comparing spending with a budget, not a rule about which deviations to act on."),
      ask("A plant compares its cost per piece with the lowest in its industry. Which control technique is this?", "Benchmarking", ["Ratio analysis", "Personal observation", "Break-even analysis"], "Benchmarking compares performance with the best in the field. Ratio analysis checks the firm's own financial health, not a comparison with others."),
      ask("Standard: 10,000 pieces at ₹50 each. Actual: 9,000 pieces for ₹4.95 lakh. What was the cost per piece, and is it on standard?", "₹55: ₹5 (10%) over standard", ["₹49.50: under standard", "₹50: on standard", "₹45: under standard"], "₹4,95,000 ÷ 9,000 = ₹55. ₹49.50 divides by the planned 10,000 pieces instead of the 9,000 actually made, which hides the overspend."),
    ],
    lens: [
      { pairing: 6, adds: "A check from outside: someone able to point out the errors of the person in charge.", differs: "The couplet is about a ruler's advisers. Control builds the check into standards, reports and correction." },
      { pairing: 7, adds: "The first controller sits inside the person, with measured habits in eating, rest and work.", differs: "Controlling in management compares results with a standard and corrects. The Gītā speaks of self-mastery, not of a plan-against-actual cycle." },
    ],
    reflect: "What standard do you hold your own work to, and how do you find out when you've missed it?",
    summary: {
      points: [
        "Process: set standards, measure, compare, take corrective action, then back to the plan.",
        "Planning sets the standard; control checks against it and feeds the next plan.",
        "Control is continuous, at every level, action-oriented, and looks ahead as well as back.",
        "Techniques: observation, reports and MIS, budgets, ratios and ROI, break-even, benchmarking.",
      ],
      memory: "Set, measure, compare, correct.",
    },
  },
];

export default lessons;
