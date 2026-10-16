import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-and-objectives-of-hrm",
    name: "Meaning and objectives of HRM",
    intro: "Acquiring, developing, motivating and retaining people.",
    before: {
      q: "Is HRM mainly about hiring?",
      choices: [
        { label: "Mainly", reveal: "Hiring is one part. HRM acquires, develops, motivates and retains people, and aligns them with strategy." },
        { label: "Much more", reveal: "Right. HRM acquires, develops, motivates and retains people to achieve organisational goals." },
      ],
    },
    lead: "HRM is everything an organisation does to find, grow, motivate and keep the people it needs, serving personal, organisational and wider objectives.",
    check: [
      ask("Work-life balance is which kind of HRM objective?", "Personal", ["Organisational", "Other (society and the law)", "Strategic"], "Personal objectives serve the employee: training, career development, work-life balance. Productivity and talent management are organisational objectives, which serve the firm."),
      ask("A Pune plant gives new operators a month of training on a new machine. Which of the four HRM verbs is this?", "Develop", ["Acquire", "Motivate", "Retain"], "Training builds skills, so it is developing. Acquiring is finding and hiring the operators in the first place, which had already happened."),
      ask("A plant asks its staff for long overtime to meet a big order. Which pair of HRM objectives is most directly in tension?", "Productivity against work-life balance", ["Legal compliance against fairness", "Training against career development", "Talent management against workforce planning"], "Overtime raises output, an organisational objective, but cuts into work-life balance, a personal one. Training and career development usually point the same way."),
    ],
    lens: [
      { pairing: 0, adds: "Judge that this person can do this task by these means, then entrust it to them.", differs: "The Kuṟaḷ gives a single rule for assigning work. HRM builds a whole system around it: planning, development, reward and retention." },
    ],
    reflect: "Which of the four (acquire, develop, motivate, retain) does your organisation do least well?",
    summary: {
      points: [
        "HRM: acquiring, developing, motivating and retaining employees to achieve organisational goals.",
        "Aims: performance, welfare, alignment with strategy.",
        "Objectives: personal (the employee), organisational (the firm), and other (law and society: compliance, diversity, fairness).",
        "Every manager does HRM; the HR department designs the systems.",
        "The objectives can conflict, and HRM has to choose between them.",
      ],
      memory: "Acquire, develop, motivate, retain.",
    },
  },
  {
    blockId: "evolution-of-hrm",
    name: "Evolution of HRM",
    intro: "From control, to people, to strategy.",
    before: {
      q: "Did HR departments exist in the early factories?",
      choices: [
        { label: "Yes", reveal: "Not as we know them. Early factories focused on supervision and discipline; personnel departments spread widely only after the Second World War." },
        { label: "No", reveal: "Right. Personnel departments grew in the 1940s and 1950s; strategic HRM became the dominant approach from the 2000s." },
      ],
    },
    lead: "HRM moved in eight stages through three broad shifts: controlling workers, caring for them as people, and aligning them with strategy.",
    check: [
      ask("Which stage is linked to Elton Mayo, social factors and morale?", "Human relations (1920s–1930s)", ["Scientific management", "Modern HRM", "Strategic HRM"], "Mayo's reading of the Hawthorne studies put morale and the work group at the centre. Scientific management is Taylor's stage, about efficiency and standard methods."),
      ask("A call centre times every call and sets a standard handling time for each agent. Which stage's methods is it using?", "Scientific management", ["Human relations", "Post-war personnel", "TQM and globalisation"], "Timing work and setting standard methods comes from Taylor. Human relations would look at morale and the work group instead."),
      ask("Which statement about the eight stages is most accurate?", "They overlap, and older practices survive alongside newer ones", ["Each stage fully replaced the one before it", "Every firm today works at the strategic stage", "The dates mark exact turning points"], "The stages are a teaching device: many small firms still work at the personnel stage. Treating the dates as exact turning points is the tempting error."),
    ],
    lens: [],
    reflect: "Which stage does the HR function in an organisation you know still resemble?",
    summary: {
      points: [
        "Pre-industrial, Industrial Revolution, scientific management (Taylor), human relations (Mayo).",
        "Post-war personnel, modern HRM, TQM and globalisation, strategic HRM.",
        "Three broad shifts: control, people, strategy.",
        "Each stage left something behind; the stages overlap rather than replace each other.",
      ],
      memory: "Control, efficiency, human relations, personnel, HRM, strategic HR.",
    },
  },
  {
    blockId: "functions-of-hrm",
    name: "Functions of HRM",
    intro: "Eight things HR does, from before hiring to the next generation of leaders.",
    before: {
      q: "Is succession planning part of HR's job?",
      choices: [
        { label: "No", reveal: "It is: “prepare” is one of the eight functions, through career and succession planning." },
        { label: "Yes", reveal: "Right. Preparing future talent and leadership continuity is one of the eight functions." },
      ],
    },
    lead: "HRM works through eight functions: plan, acquire, develop, evaluate, reward, relate, protect and prepare.",
    check: [
      ask("Performance appraisal belongs to which function?", "Evaluate", ["Develop", "Reward", "Relate"], "Appraisal assesses performance, so it is evaluate. It feeds reward, but reward itself is compensation management."),
      ask("A kirana chain owner puts a first-aid kit in each store and teaches staff to stack heavy sacks safely. Which function is this?", "Protect", ["Relate", "Develop", "Prepare"], "Health, safety and well-being make up protect. Teaching safe stacking looks like training, but its purpose is safety, not job skills."),
      ask("In Flippo's classic split, which of these is a managerial function of HR rather than an operative one?", "Controlling", ["Procurement", "Compensation", "Separation"], "Planning, organising, directing and controlling are managerial. Procurement, development, compensation, integration, maintenance and separation are operative."),
    ],
    lens: [],
    reflect: "Which of the eight functions have you experienced directly as an employee or intern?",
    summary: {
      points: [
        "Plan (HR planning), acquire (recruitment and selection), develop (training).",
        "Evaluate (appraisal), reward (compensation), relate (employee relations).",
        "Protect (safety and welfare), prepare (career and succession planning).",
        "Flippo: managerial functions (plan, organise, direct, control) against operative ones.",
      ],
      memory: "Plan, acquire, develop, evaluate, reward, relate, protect, prepare.",
    },
  },
  {
    blockId: "roles-of-hrm-and-the-hr-manager",
    name: "Roles of HRM and of the HR manager",
    intro: "Three roles of the HR function and seven of the HR manager.",
    before: {
      q: "Is the HR manager's job only to apply company rules?",
      choices: [
        { label: "Yes", reveal: "That is one part, the service role. The HR manager also advises, counsels, mediates, speaks for the company and drives change." },
        { label: "No", reveal: "Right. The HR manager plays several roles, from counsellor and mediator to change agent." },
      ],
    },
    lead: "The HR function advises, frames policy and provides services; the HR manager also acts as counsellor, mediator, spokesperson, problem solver and change agent.",
    check: [
      ask("Which role of the HR function covers payroll, disciplinary records and other personnel services?", "Service role", ["Advisory role", "Functional role", "Humanitarian role"], "The service role puts policies and procedures into effect through services such as payroll. The advisory role gives management advice, and the functional role frames policy."),
      ask("Two departments quarrel over shared staff, and the HR manager brings both heads to one table to settle it. Which role is this?", "Mediator", ["Counsellor", "Spokesperson", "Humanitarian"], "A mediator acts as peacemaker between individuals, groups or management. A counsellor would advise one employee on a personal or career problem."),
      ask("A firm has a rule: fill senior posts from within where possible. It also lays down who is told of the vacancy and who interviews. Which statement is right?", "The rule is a policy; the steps are a procedure", ["Both are policies", "The rule is a procedure; the steps are a policy", "Both are procedures"], "A policy is a general guide to decisions, and a procedure gives the steps for applying it. Swapping them is the tempting error."),
    ],
    lens: [],
    reflect: "Which of the seven roles would be hardest for you to play alongside the others?",
    summary: {
      points: [
        "The HR function has three roles: advisory, functional and service.",
        "A policy is a general guide to decisions; a procedure sets out the steps for applying it.",
        "The HR manager's seven roles: humanitarian, counsellor, mediator, spokesperson, problem solver, change agent and manager of manpower.",
        "The roles can conflict: the counsellor needs trust, the spokesperson speaks for management.",
      ],
      memory: "Advise, frame, serve; and seven hats for the manager.",
    },
  },
  {
    blockId: "approaches-to-hrm",
    name: "Approaches to HRM, and how HRM differs",
    intro: "Ten approaches; HRM against personnel management and OB.",
    before: {
      q: "Is HRM just a new name for personnel management?",
      choices: [
        { label: "Yes", reveal: "In theory, no. Personnel management is administrative and reactive; HRM is strategic and proactive. Critics add that in practice the gap is often smaller than the labels suggest." },
        { label: "No", reveal: "Right. HRM is strategic and proactive; personnel management is administrative and reactive." },
      ],
    },
    lead: "Approaches range from administering records to treating people as a source of advantage; HRM is strategic where personnel management is administrative.",
    check: [
      ask("Which approach says HR practices depend on the situation, with no single best way?", "Contingency (best fit)", ["Best practices", "Resource-based view", "Traditional"], "Contingency says it depends on the firm's situation and strategy. Best practices says the opposite: some practices work almost everywhere."),
      ask("A small software firm cannot match big rivals' benefits, so it offers faster responsibility and flexible hours instead. Which approach is it following?", "Contingency (best fit)", ["Best practices", "Traditional", "Human relations"], "Designing HR around its own situation is best fit. Copying the big firms' benefits would be the best-practices answer."),
      ask("A firm's HR department mainly runs payroll, keeps records and handles grievances. How is it best described?", "Personnel management, whatever its name", ["Strategic HRM", "A high-performance work system", "Evidence-based HRM"], "Payroll, records and grievance handling are the narrow, reactive scope of personnel management. Calling the department HR does not make it strategic."),
    ],
    lens: [],
    reflect: "Which approach would you use if you set up an HR function from scratch, and why?",
    summary: {
      points: [
        "Approaches: traditional, human relations, HRD, contingency, strategic, high-performance, best practices, RBV, employee-centric, evidence-based.",
        "Best practices: one way works everywhere. Contingency: it depends. RBV: people as a hard-to-copy resource.",
        "HRM is strategic and proactive; personnel management administrative and reactive.",
        "HRM asks how to manage people; OB asks why people behave as they do.",
      ],
      memory: "HRM manages; OB understands.",
    },
  },
  {
    blockId: "perspectives-on-hrm",
    name: "Four perspectives on HRM",
    intro: "Normative, critical, behavioural and systems views.",
    before: {
      q: "When a firm says it values its people, is that always what it practises?",
      choices: [
        { label: "Always", reveal: "Not always. The critical perspective points to a gap between the soft language many firms use and the hard control they practise." },
        { label: "Not always", reveal: "Right. The critical perspective studies this gap between rhetoric and reality." },
      ],
    },
    lead: "Four lenses explain HRM: the normative (hard and soft models), the critical (rhetoric against reality), the behavioural (behaviour links strategy to results) and the systems (inputs, work and outputs).",
    check: [
      ask("Which perspective argues that firms speak the soft language of development but practise hard control?", "Critical", ["Normative", "Behavioural", "Systems"], "The critical perspective reacts against the normative view and points to this gap. The normative perspective is the one that sets out the hard and soft models."),
      ask("A firm that wants to innovate hires, trains and rewards people for creativity, cooperation and willingness to take risks. Which perspective is it using?", "Behavioural", ["Systems", "Critical", "Normative (hard)"], "The behavioural view picks HR practices to bring out the behaviours the strategy needs. The systems view would instead ask about competence, behaviour and the environment as parts of an input–output cycle."),
      ask("A firm promises five training days, managers release staff for only two, and employees believe training goes to favourites. Which gap does this show?", "Between intended, actual and perceived HR practices", ["Between hard HRM and soft HRM", "Between input and output in a system", "Between the Michigan and Harvard models"], "Planned training is the intended practice, the two days are the actual practice, and the belief about favourites is the perceived practice. The other gaps are real ideas but do not describe this case."),
    ],
    lens: [],
    reflect: "Think of an organisation you know. Is its HR language soft and its practice hard, or do the two match?",
    summary: {
      points: [
        "Normative: how HRM should be done, through the hard (Michigan) and soft (Harvard) models.",
        "Critical: a gap between rhetoric and reality.",
        "Behavioural: employee behaviour links strategy to performance.",
        "Systems: input, throughput and output in an environment; HRM manages competence, behaviour and environment contact.",
        "Standard causal chain: strategy, HR strategy, practices, outcomes, performance; practices can be intended, actual or perceived.",
      ],
      memory: "Should, doubt, behave, system.",
    },
  },
  {
    blockId: "influences-on-hrm-and-recent-trends",
    name: "Influences on HRM and recent trends",
    intro: "Forces inside and outside the firm, and six trends HR must handle.",
    before: {
      q: "Does the HR department alone decide its objectives?",
      choices: [
        { label: "Yes", reveal: "No. They follow the firm's corporate, operational, marketing and financial strategies and outside forces such as the market, the law and technology." },
        { label: "No", reveal: "Right. Internal strategies and external forces shape what HR is asked to do." },
      ],
    },
    lead: "HR objectives follow the firm's own strategies and outside forces, and trends such as downsizing and contingent work give HR new tasks.",
    check: [
      ask("A change in the law on working hours affects workforce planning and pay. Which kind of influence is it?", "External: political and legal", ["Internal: corporate objectives", "External: market changes", "Internal: financial strategies"], "Laws are outside the firm and political and legal in kind. Corporate objectives and financial strategies are set inside the firm."),
      ask("A firm closes a management level and cuts staff to run lean. What should HR do first?", "Communicate facts early, so that rumour does not fill the gap", ["Start a continuous improvement programme", "Hire contingent staff without planning", "Wait until the cuts are complete before saying anything"], "Early, factual communication limits rumour. Waiting leaves the gap for rumour to fill."),
      ask("A bakery redesigns its whole flow from order to delivery instead of refining one step each month. What is this?", "Re-engineering", ["Continuous improvement", "Downsizing", "A contingent workforce"], "A radical redesign of how the work is done is re-engineering. Continuous improvement is steady, small and permanent."),
    ],
    lens: [],
    reflect: "Which outside force is changing the work of HR most in the sector you know best?",
    summary: {
      points: [
        "Internal influences: corporate, operational, marketing and financial strategies.",
        "External influences: market, economic, technological, social, and political and legal changes.",
        "Trends: rising expectations and turnover, downsizing, continuous improvement, re-engineering, contingent workforce and decentralised work sites.",
        "Continuous improvement is incremental; re-engineering is radical.",
      ],
      memory: "Inside strategies, outside forces, then the trends.",
    },
  },
];

export default lessons;
