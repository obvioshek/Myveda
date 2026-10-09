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
    lead: "Management is getting work done through people, reaching the goal (effective) without wasting time, money or effort (efficient).",
    check: [
      ask("Who defined management as \"the art of getting things done through people\"?", "Mary Parker Follett", ["Peter Drucker", "Harold Koontz", "Dalton E. McFarland"], "It is Follett's short definition. Koontz is the tempting choice, but his version adds \"through and with people in formally organised groups\"."),
      ask("A fest committee sells all 2,000 tickets it planned, but spends ₹6 lakh against a budget of ₹4 lakh. It was…", "Effective but not efficient", ["Efficient but not effective", "Both effective and efficient", "Neither effective nor efficient"], "It reached its goal, so it was effective. It overspent by 50%, so it was not efficient. \"Efficient but not effective\" describes the opposite case: money saved, goal missed."),
      ask("A method works well in a Pune auto-parts plant. What does management's universality say about copying it to a hospital?", "The principles apply widely, but the method must be adapted", ["The method will work unchanged, since management is universal", "Management principles do not apply to hospitals", "Only the hospital's top managers can use it"], "Universal means the principles apply to every kind of organisation, not that a method can be copied unchanged. Management is an inexact science: its principles are guides that depend on people and circumstances."),
    ],
    lens: [],
    reflect: "Think of a group you belong to. Is it more effective or more efficient, and what would improve the weaker one?",
    summary: {
      points: [
        "Management is getting work done through and with people. Koontz and Weihrich: designing and maintaining an environment in which people in groups efficiently accomplish selected aims.",
        "Effective: doing the right things, so the goal is met. Efficient: doing things right, with the least waste.",
        "Nature: goal-oriented, continuous, universal, a group activity, intangible, multidisciplinary, both art and science; many marks of a profession, but no licence.",
        "Levels: top (objectives, policy, strategy), middle (plans and coordination), first-line (day-to-day work).",
      ],
      memory: "Right things (effective), done right (efficient), through people.",
    },
  },
  {
    blockId: "fayols-14-principles",
    name: "Fayol's 14 principles",
    intro: "Fourteen flexible guidelines for arranging and running a whole enterprise.",
    before: {
      q: "Should a manager hold more authority than the responsibility they answer for?",
      choices: [
        { label: "More authority", reveal: "Fayol disagreed. His second principle ties the two together: the right to command comes with an equal duty to answer for results." },
        { label: "An equal duty", reveal: "That is Fayol's view. Authority and responsibility is his second principle: the right to command comes with an equal duty to answer for results." },
      ],
    },
    lead: "Fayol starts from the whole organisation and offers fourteen principles, in four groups, as flexible guides to judgement.",
    check: [
      ask("Which principle says each employee should receive orders from only one superior?", "Unity of command", ["Unity of direction", "Scalar chain", "Centralisation"], "Unity of command is principle 4 and is about a person: one boss each. Unity of direction (5) is about an activity: one plan and one head for each objective."),
      ask("An approval in a firm climbs five levels to the top and comes down five more to reach a colleague at the same level. Fayol's remedy is…", "The gang plank, with both superiors agreeing and kept informed", ["Unity of command, so only one boss gives orders", "Centralisation, so the top decides everything", "Division of work, so each person specialises"], "The gang plank lets two people at the same level deal directly, while the scalar chain stays respected. Unity of command is the tempting choice, but it solves clashing orders, not slow ones."),
      ask("A firm makes scooters and tractors, each line with its own head and its own plan. Which principle does that follow?", "Unity of direction", ["Unity of command", "Order", "Esprit de corps"], "Unity of direction gives one plan and one head to each group of activities with the same objective. Unity of command would be about each employee having one boss, which this case does not mention."),
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
        "Unity of command: one boss for each person. Unity of direction: one plan and one head for each objective.",
        "Scalar chain: an unbroken line of authority. The gang plank lets equals deal directly, with their superiors' knowledge.",
        "Six groups of activities: technical, commercial, financial, security, accounting and managerial.",
        "The principles are flexible guides, and they can pull against each other (Simon's \"proverbs\" criticism).",
      ],
      memory: "Command: one boss. Direction: one plan. Gang plank: a shortcut with permission.",
    },
  },
  {
    blockId: "taylors-scientific-management",
    name: "Taylor's scientific management",
    intro: "Replacing rule of thumb with study and measurement.",
    before: {
      q: "Should a worker's pay depend only on how much they produce?",
      choices: [
        { label: "Yes", reveal: "That is close to Taylor's differential piece-rate, which links pay to output. But it is only one of his seven elements." },
        { label: "Not only", reveal: "Taylor included the differential piece-rate, but alongside scientific selection and training, standard methods, and cooperation between managers and workers." },
      ],
    },
    lead: "Taylor starts from the individual task: study it, find the best method, train people in it and pay for results.",
    check: [
      ask("Which of these is NOT one of Taylor's elements of scientific management?", "Unity of command", ["Functional foremanship", "Differential piece-rate", "Time and motion study"], "Unity of command is Fayol's fourth principle. Functional foremanship is Taylor's, and it actually breaks unity of command by giving a worker eight specialist bosses."),
      ask("A plant studies a job, removes needless movements, then times the improved job to set a standard output. In what order did it use Taylor's tools?", "Motion study, then time study", ["Time study, then motion study", "Functional foremanship, then piece-rate", "Standardisation, then selection"], "Motion study removes needless movements first; time study then times the improved job to set the standard. Timing first would build the wasted movements into the standard."),
      ask("Standard: 10 pieces a day. Rate: ₹50 a piece at or above standard, ₹40 below it. What does a worker who makes 9 pieces earn?", "₹360", ["₹450", "₹400", "₹500"], "Nine pieces is below standard, so the lower rate applies: 9 × ₹40 = ₹360. ₹450 uses the higher rate, which is paid only for meeting the standard."),
    ],
    lens: [
      { pairing: 4, adds: "Doing the work well is itself named as the aim.", differs: "The Gītā defines yoga as skill in action. It does not prescribe time and motion study or measured standards." },
      { pairing: 5, adds: "A stance toward reward that a pay scheme cannot supply.", differs: "The two work at different layers: piece-rate is how a firm designs pay, while the Gītā speaks of the worker's inner stance toward results." },
    ],
    reflect: "Where would measuring the work help you most, and where would it get in the way?",
    summary: {
      points: [
        "Seven elements: science not rule of thumb, harmony, scientific selection and training, functional foremanship, differential piece-rate, standardisation and simplification, time and motion study.",
        "Functional foremanship: eight specialist foremen, four in planning and four on the shop floor. It breaks unity of command.",
        "Differential piece-rate: a higher rate for meeting the standard, a lower rate for falling short.",
        "Taylor starts from the task; Fayol from the whole organisation. Criticism: workers seen mainly as responding to pay.",
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
        { label: "Technical skill", reveal: "Technical skill weighs most at the first line. At the top, Katz's emphasis is on conceptual skill: seeing the organisation as a whole." },
        { label: "Conceptual skill", reveal: "Yes. Lower management leans on technical skill, middle management on human skill with a balance of all three, and top management on conceptual. Human skill matters at every level." },
      ],
    },
    lead: "A manager needs technical, human and conceptual skill, and the mix shifts from technical to conceptual with rank.",
    check: [
      ask("Which of these is NOT one of Katz's three skills?", "Design skill", ["Technical skill", "Human skill", "Conceptual skill"], "Katz's three are technical, human and conceptual. Design skill was added later by Koontz and Weihrich, which is why it looks familiar."),
      ask("A managing director judges whether customers' shift to electric vehicles will make some of the plant's parts obsolete. Which skill is she using?", "Conceptual skill", ["Technical skill", "Human skill", "Design skill"], "Seeing the organisation as a whole and how it depends on its environment is conceptual skill. Technical skill is tempting because the parts are technical, but she is judging the business, not running a machine."),
      ask("The best salesperson is promoted to branch manager and struggles. Which skill does she most likely need to build?", "Human skill: leading, motivating and resolving conflict", ["Technical skill: knowing the products better", "Conceptual skill: setting the bank's strategy", "None: skills are inborn, not learnt"], "She already has technical skill, which is why she was the best seller. Managing a branch asks for working with and through people. Skills, unlike talent, can be learnt."),
    ],
    lens: [
      { pairing: 6, adds: "Example as the way a leader influences others, and seeing one undivided reality as the clear kind of knowledge.", differs: "The verses describe leading by example and a vision of unity. They are not a taxonomy of skills." },
    ],
    reflect: "Which of the three skills would you most like to build, and what could you do this month to build it?",
    summary: {
      points: [
        "Technical skill: knowing the work. It weighs most at the first line.",
        "Human skill: working with and through people. It matters at every level, most of all in the middle.",
        "Conceptual skill: seeing the organisation as a whole. It weighs most at the top.",
        "Design skill is not one of Katz's three; Koontz and Weihrich added it later.",
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
        { label: "Plan quietly", reveal: "That is the folklore Mintzberg challenged. Watching five chief executives, he found brief, varied and fragmented activity." },
        { label: "Relate, inform, decide", reveal: "Yes. Mintzberg found fragmented work, and grouped it into interpersonal, informational and decisional roles." },
      ],
    },
    lead: "Watching managers at work, Mintzberg found fragmented activity and named ten roles in three groups: interpersonal, informational and decisional.",
    check: [
      ask("Figurehead, leader and liaison belong to which group of Mintzberg's roles?", "Interpersonal", ["Informational", "Decisional", "Conceptual"], "They are the interpersonal roles, which come from formal authority and status. Informational is tempting because liaison builds contacts, but the role itself is about the relationships."),
      ask("A branch manager reads a circular from the regional office and then shares it with her staff at the morning huddle. Which roles is she playing, in order?", "Monitor, then disseminator", ["Spokesperson, then monitor", "Liaison, then leader", "Disseminator, then spokesperson"], "The monitor brings information in; the disseminator passes it around inside. The spokesperson sends information outside, which she did not do here."),
      ask("A store manager settles a customer's complaint about a failed delivery. Which role is that?", "Disturbance handler", ["Negotiator", "Entrepreneur", "Resource allocator"], "Taking corrective action in disputes and crises is the disturbance handler role. Negotiator is tempting, but it means representing the unit in formal bargaining with unions, suppliers, customers or government."),
    ],
    lens: [],
    reflect: "Which of these ten roles do you play most often in a group you belong to?",
    summary: {
      points: [
        "Mintzberg watched five chief executives and found brief, varied and fragmented work (The Nature of Managerial Work, 1973).",
        "Interpersonal: figurehead, leader, liaison. Informational: monitor, disseminator, spokesperson.",
        "Decisional: entrepreneur, disturbance handler, resource allocator, negotiator.",
        "Authority gives contacts, contacts give information, and information is what the manager decides with.",
      ],
      memory: "Relate, inform, decide: 3, 3 and 4.",
    },
  },
];

export default principles;
