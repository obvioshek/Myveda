import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-green-hrm-is",
    name: "What green HRM is",
    intro: "Using people management to make the workplace greener.",
    before: {
      q: "Does a firm go green mainly by buying better machines and fittings?",
      choices: [
        { label: "Yes", reveal: "Machines help, but people decide whether they are used well. Green HRM works on that human side." },
        { label: "No", reveal: "Right. Technology matters, but attitudes, skills and daily habits decide the result. That is the ground of green HRM." },
      ],
    },
    lead: "Green HRM uses HR policies and practices to build green attitudes, skills and behaviour, so that employees save resources and the firm becomes more sustainable.",
    check: [
      ask("Which description fits green HRM best?", "HR policies, practices and systems that encourage green behaviour among employees", ["Fitting energy-efficient machines and lights across the factory", "A share of profit given to tree-planting in nearby villages", "A rule that all new staff must hold an environmental degree"], "Green HRM works through people management. Efficient machines are technology, handled by engineers and facilities teams, and village projects are CSR spending. Neither changes how employees behave at work."),
      ask("A board reviews environmental results every quarter, and executive bonuses depend on them. Which of the five dimensions is this?", "Green management and governance", ["Green workplace", "Green function or process model", "Green workforce"], "Board accountability, incentives and reporting belong to governance. Green workplace covers buildings, locations and virtual work, which is the tempting choice, but it says nothing about who answers for results."),
      ask("A plant trained every operator in saving energy, but its old machines cannot be switched off between jobs. In the AMO model, which element is missing?", "Opportunity: operators cannot act on what they know", ["Ability: operators lack the skill", "Motivation: nobody gains from lower use", "Awareness: operators do not know the firm's aims"], "The training supplied ability, but the machines block action, so opportunity is missing. Ability is the tempting answer, but these operators already have the skill."),
    ],
    lens: [],
    reflect: "Name one habit at your workplace that wastes energy or paper. Which HR tool could change it: selection, training, appraisal or pay?",
    summary: {
      points: [
        "Green HRM: HR policies, practices and systems that encourage green behaviour, so that the organisation is environmentally sensitive, resource-efficient and socially responsible.",
        "It is the people side of environmental management: attitudes, skills and daily habits. Engineers and facilities teams handle the technology.",
        "The chain: green HR practices, green employee behaviour, resource efficiency, environmental sustainability.",
        "One framework taught in Indian courses lists five dimensions: green products and services, workforce, workplace, function or process model, management and governance.",
        "Limits: the definitions are broad, and much evidence rests on what employees report. Sustainable HRM is the wider idea.",
      ],
      memory: "People change habits; habits change resource use.",
    },
  },
  {
    blockId: "green-hr-policies-across-the-hr-cycle",
    name: "Green HR policies across the HR cycle",
    intro: "One environmental aim, repeated at every stage of the employee's journey.",
    before: {
      q: "If a firm tells new joiners to save paper but never mentions it again, will the habit last?",
      choices: [
        { label: "Yes", reveal: "Rarely. A message at one stage fades unless appraisal, training and pay repeat it." },
        { label: "No", reveal: "Right. A green policy at one stage fades unless the other stages say the same thing." },
      ],
    },
    lead: "Green HR policy adds an environmental aim to sourcing, recruitment and selection, orientation, learning and development, performance management, and pay and rewards.",
    check: [
      ask("Which action is a green policy at the sourcing and acquisition stage?", "Putting green targets into managers' job descriptions and environmental awareness into the competency model", ["Taking applications online and holding first-round interviews by video", "Spending day one of induction on the firm's green culture", "Giving a bonus to the branch that uses the least paper"], "Sourcing and acquisition writes the green requirement into the role before hiring. Online applications belong to recruitment and selection, which is the tempting choice because it is also about hiring."),
      ask("An auto-parts plant wants shift supervisors to answer for energy use per shift. Which policy fits first?", "Performance management: add energy use per shift to supervisors' goals and appraisal", ["Orientation: show new supervisors a film on energy saving", "Recruitment: ask applicants to send their resumes by email", "Rewards: give every employee the same festival gift"], "Indicators and targets that make a person answerable belong to performance management. A reward can then pay on the results, but a flat gift for everyone is linked to no one's results."),
      ask("A bank with 80 branches uses 400 reams of paper per branch each year and aims to cut its use by 25%. How many reams must it save?", "8,000", ["32,000", "24,000", "100"], "Total use is 80 × 400 = 32,000 reams, and 25% of that is 8,000. 32,000 is the whole use, 24,000 is what remains after the cut, and 100 is the cut for one branch."),
    ],
    lens: [],
    reflect: "Which stage of the HR cycle in your organisation would you change first to support a green aim, and who would own the change?",
    summary: {
      points: [
        "Six stages: sourcing and acquisition, recruitment and selection, orientation, learning and development, performance management, compensation and rewards.",
        "Sourcing puts green targets in job descriptions and awareness in the competency model. Recruitment uses online applications, e-resumes and video interviews.",
        "Orientation builds a green culture. Learning and development builds green skills, with job rotation through green assignments.",
        "Performance management sets green indicators and targets. Rewards recognise green skills and results, and link executive pay to emission and renewable-energy targets.",
        "A policy states the aim; a practice is what people actually do.",
      ],
      memory: "Recruit, orient, train, measure, reward, retain.",
    },
  },
  {
    blockId: "green-hr-practices-and-how-to-measure-them",
    name: "Green HR practices and how to measure them",
    intro: "What firms actually do, and the numbers that show it worked.",
    before: {
      q: "A firm trained 90% of its staff in energy saving. Has it cut its energy use?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. Training is activity. Only the electricity meter shows the result." },
        { label: "Not yet known", reveal: "Right. Training is activity, and the result shows only in a measure of energy used." },
      ],
    },
    lead: "Paperless HR, virtual meetings, recycling, green commuting and flexible work cut resource use, and green KPIs at three levels (activity, behaviour, result) show whether they work.",
    check: [
      ask("Which of these is a result-level green KPI?", "Electricity used per employee", ["Share of staff who attended the green workshop", "Number of green suggestions submitted", "Number of video interviews held"], "A result KPI measures resource use itself. Workshop attendance and interviews held are activity, and suggestions are behaviour, so they show effort, not outcome."),
      ask("A call centre moves its staff to work from home two days a week but keeps every office floor lit and cooled. What can be said of its green effect?", "Travel falls, but the net effect is unclear, since energy use may only move to homes", ["It surely lowers emissions, because staff travel less", "It has no environmental effect, because the work is unchanged", "It counts as a result KPI, because trips are fewer"], "Flexible work cuts commuting, but the office still uses power and homes use more, so the net effect must be measured. 'Surely lowers' is the tempting claim; energy use can shift rather than fall."),
      ask("A campus used 4,000,000 kWh with 2,000 employees in year 1, and 4,500,000 kWh with 2,500 employees in year 2. What do the figures show?", "Use per employee fell from 2,000 to 1,800 kWh, but the total rose", ["Use per employee rose, because the total rose", "Use per employee stayed at 2,000 kWh", "Both the total and the use per employee fell"], "4,500,000 ÷ 2,500 = 1,800 kWh, down from 4,000,000 ÷ 2,000 = 2,000. The total still rose by 12.5%. Dividing year 2's total by year 1's headcount gives 2,250, the mistake behind the first option."),
    ],
    lens: [],
    reflect: "Pick one green practice at your workplace. Which activity, behaviour and result measure would you use for it?",
    summary: {
      points: [
        "Practices: paperless HR, virtual meetings and interviews, energy saving, recycling, green commuting, flexible work, green rewards and employee involvement.",
        "Green KPIs work at three levels: activity (did we do it), behaviour (do people act differently), result (did resource use fall).",
        "Set a baseline and report use per employee and the total. Each figure alone can mislead.",
        "Activity is not impact: training 90% of staff is not a lower electricity bill.",
        "Flexible work can shift energy use rather than cut it. Exams pair green workplace with resource efficiency and flexible work with lower travel emissions.",
      ],
      memory: "Do it, see it, count it: activity, behaviour, result.",
    },
  },
  {
    blockId: "limits-of-green-hrm-and-links-to-csr",
    name: "Limits of green HRM, and links to CSR",
    intro: "Greenwashing, resistance and cost, and where green HRM sits in CSR and the sustainability goals.",
    before: {
      q: "If every green claim a firm makes contains some truth, can it still be greenwashing?",
      choices: [
        { label: "No", reveal: "It can. Greenwashing is a misleading impression of how green the firm is, and half-truths can create one." },
        { label: "Yes", reveal: "Right. A misleading impression is enough, even when each claim holds some truth." },
      ],
    },
    lead: "Greenwashing, employee resistance, cost and weak proof limit green HRM, and it links to CSR, to the legal minimum and to the UN Sustainable Development Goals.",
    check: [
      ask("What is greenwashing?", "Giving a misleading impression that the firm is greener than it is", ["Reporting environmental results to the board every quarter", "Spending part of the CSR budget on an environmental project", "Training staff to cut harmful chemicals in production"], "Greenwashing is a false or misleading impression of how green a firm is. The other three are real actions, which a firm can honestly report."),
      ask("A careers page promises 'a fully green workplace', yet the office has no recycling and no green targets. Which limit does this show?", "Greenwashing: the claim runs ahead of the practice, so new joiners may leave", ["Employee resistance: staff refuse to follow the green rules", "Cost: the green programme has overrun its budget", "Weak proof: the studies behind green HRM are unreliable"], "A promise that the workplace does not keep is greenwashing, and it can raise early quitting. Resistance is the tempting answer, but nobody has refused anything here; the rules do not exist."),
      ask("A green HR programme costs ₹10 lakh a year and saves ₹6 lakh in energy and paper. What should the manager conclude?", "On savings alone it loses ₹4 lakh, so the case must rest on gains that are harder to count", ["It pays for itself, because the savings are positive", "It must be cancelled, because green HRM always has to pay back", "It gains ₹4 lakh, because costs exceed savings by that amount"], "₹10 lakh minus ₹6 lakh leaves a ₹4 lakh shortfall. Gains such as compliance, reputation and retention may still justify it, but the manager should say so openly. The last option reads the gap as a gain."),
    ],
    lens: [],
    reflect: "Think of a green claim your organisation makes. Can it name the baseline, the target, the owner and what happens if the target is missed?",
    summary: {
      points: [
        "Greenwashing: a false or misleading impression of how green the firm is. Test it with baseline, target, owner and consequence.",
        "Resistance: green rules add effort or look imposed. Explain the reason, involve staff, give tools, show results and offer alternatives.",
        "Cost: costs come first and savings later. If savings fall short, say so and rest the case on gains that are harder to count.",
        "Green HRM is one part of CSR, not the whole. Legal limits on pollution are the minimum it aims to go beyond.",
        "Goals: green HRM bears on SDG 12 (responsible consumption and production), 13 (climate action), 7 (clean energy), and 8 through fair work.",
      ],
      memory: "Claim only what you can count.",
    },
  },
];

export default lessons;
