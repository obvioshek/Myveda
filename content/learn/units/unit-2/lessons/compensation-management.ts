import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-and-objectives-of-compensation",
    name: "Meaning and objectives of compensation",
    intro: "Rewarding contribution, in money and otherwise.",
    before: {
      q: "Is recognition part of compensation?",
      choices: [
        { label: "No, only money", reveal: "It is: non-monetary rewards (benefits, recognition, perks) are part of compensation alongside wages, incentives and bonuses." },
        { label: "Yes", reveal: "Right. Compensation includes non-monetary rewards such as benefits, recognition and perks." },
      ],
    },
    lead: "Compensation is the whole reward for work, money and more, designed to attract, keep and motivate people fairly.",
    check: [
      ask("Which of these is a monetary reward?", "An incentive", ["Recognition", "A perk", "A benefit"], "Monetary rewards are wages, incentives and bonuses. Benefits can cost the employer money, but they are classed with recognition and perks as non-monetary rewards."),
      ask("A Pune software firm loses three developers in a month to a rival that pays ₹1.5 lakh a year more. Which objective is failing?", "Retaining employees, through a lack of external equity", ["Complying with the law", "Internal equity between grades", "Improving productivity"], "The developers left because a rival paid more for similar work: pay is unfair against the market. Internal equity is about fairness between jobs inside the firm."),
      ask("A manager plans to raise everyone's pay to fix low motivation among staff who stay but coast. What does Herzberg's theory suggest?", "Better pay prevents dissatisfaction but will not, alone, create lasting motivation", ["Higher pay is the surest way to lasting motivation", "Pay has no effect on how staff feel", "Pay should be cut to make staff work harder"], "In Herzberg's theory pay is a hygiene factor: poor pay causes dissatisfaction, but good pay alone does not motivate. Saying pay has no effect goes too far the other way."),
    ],
    lens: [
      { pairing: 0, adds: "Effort earns the wages of one's labour, even when fate denies the result.", differs: "The Kuṟaḷ speaks of effort and its reward in general. Compensation management designs pay to attract, retain and motivate." },
    ],
    reflect: "Which non-monetary reward matters most to you, and does your workplace offer it?",
    summary: {
      points: [
        "Compensation management: rewarding employees for their contribution.",
        "Monetary: wages, incentives, bonuses. Non-monetary: benefits, recognition, perks.",
        "Objectives: attract, retain, motivate, equity, productivity, compliance.",
        "Internal equity is fairness between jobs inside the firm; external equity is fairness against the market.",
        "Pay is a hygiene factor: it prevents dissatisfaction but does not motivate on its own.",
      ],
      memory: "Reward, motivate, retain, ensure equity.",
    },
  },
  {
    blockId: "the-employees-compensation-act-1923",
    name: "The Employees' Compensation Act, 1923",
    intro: "Protection for injury, occupational disease and death at work.",
    before: {
      q: "If a worker dies in a workplace accident, can their family claim compensation?",
      choices: [
        { label: "No", reveal: "They can: the Act provides compensation to the widow, children and other eligible dependants." },
        { label: "Yes", reveal: "Right. Dependants can claim under the Act." },
      ],
    },
    lead: "The employer must pay compensation for injury arising out of and in the course of employment.",
    check: [
      ask("Which does the Act cover?", "Accidents, occupational diseases and employment-related death", ["Only accidents on public roads", "Only illnesses outside work", "Disputes over salary"], "The Act covers harm linked to work. Salary disputes are about pay for work, which is the other meaning of compensation."),
      ask("A press operator at a Pune plant injures his hand on the press during his shift. Is the employer liable under the Act?", "Yes: the injury arose out of and in the course of employment", ["No: only deaths are covered by the Act", "No: the Act covers only occupational diseases", "Yes, but only if the operator was careless"], "The injury happened at work, during the job, and the work caused it, so both parts of the test hold. The Act covers accidents, not only deaths or diseases."),
      ask("Two workers suffer the same injury. Why might they receive different amounts?", "The amount also depends on each worker's monthly wage and age", ["The amount depends on the employer's profits", "The amount depends on years of service alone", "The amount is fixed by the injury alone"], "The amount depends on the injury, the percentage of disability, the monthly wage and age (through the relevant factor). The same injury does not fix the same amount."),
    ],
    lens: [
      { pairing: 1, adds: "Provision that the families of servants who die at their work receive their food and wages.", differs: "Kauṭilya provides for a royal administration's servants. The Act gives a legal right to compensation across industries." },
    ],
    reflect: "Why might a worker not report a small workplace injury, and why should they?",
    summary: {
      points: [
        "Financial protection for employees injured at work or suffering occupational diseases.",
        "Test: injury arising out of and in the course of employment; both parts must hold.",
        "Employer liability; dependants' claims; medical examination; prompt notice; penalties.",
        "Amount depends on injury, disability percentage, monthly wage and age.",
        "The Code on Social Security, 2020 now replaces the Act.",
      ],
      memory: "Injury at work brings compensation.",
    },
  },
  {
    blockId: "incentive-plans",
    name: "Incentive plans",
    intro: "Linking pay to performance: who gets the value of time saved.",
    before: {
      q: "Under the Halsey plan, who keeps the value of the time a worker saves?",
      choices: [
        { label: "The employer", reveal: "It is shared: the worker gets the time wage plus 50% of the time saved; the employer keeps the rest." },
        { label: "It is shared", reveal: "Right. The worker receives 50% of the value of the time saved." },
      ],
    },
    lead: "Most classic plans pay a time wage plus a bonus for beating a standard; they differ in how that bonus is worked out.",
    check: [
      ask("Which plan uses two piece rates, higher above the standard and lower below it?", "Taylor's differential piece rate", ["Emerson's efficiency plan", "Gantt task and bonus system", "Rowan plan"], "Taylor's plan pays a higher piece rate above the standard and a lower one below it, with no guaranteed wage. Gantt guarantees a time rate and adds a fixed bonus for meeting the standard."),
      ask("A worker saves 60% of the standard time on a job. Which plan pays the bigger bonus?", "Halsey, because more than half the standard time is saved", ["Rowan, because its bonus always beats Halsey's", "Rowan, because its bonus keeps rising with time saved", "Both pay the same whenever time is saved"], "Rowan pays more only while less than half the standard time is saved. Its bonus peaks at 50% saved and then falls, while Halsey's keeps rising."),
      ask("Standard time is 8 hours, the worker takes 6, and the rate is ₹40 an hour. What are the earnings under the Rowan plan?", "₹300", ["₹280", "₹320", "₹260"], "Time wage 6 × 40 = ₹240; bonus (2 ÷ 8) × 240 = ₹60; total ₹300. ₹320 comes from multiplying by the standard time instead of the time taken; ₹280 is the Halsey figure."),
    ],
    lens: [],
    reflect: "Which incentive plan would you prefer as an employee, and which as an employer?",
    summary: {
      points: [
        "Halsey: time wage plus 50% of time saved. Rowan: bonus = time wage × share of standard time saved.",
        "Rowan pays more below 50% time saved, Halsey above; they are equal at 50%.",
        "Bedaux: base pay plus Bedaux points. Emerson: bonus rising with efficiency from two-thirds.",
        "Gantt: time rate plus a bonus for meeting the standard. Taylor: differential piece rates, no guaranteed wage.",
      ],
      memory: "Halsey shares, Rowan proportions, Taylor differentiates.",
    },
  },
];

export default lessons;
