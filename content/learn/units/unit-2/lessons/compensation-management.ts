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
    lead: "Compensation rewards contribution through monetary and non-monetary rewards.",
    check: [
      ask("Which is a monetary reward?", "An incentive", ["Recognition", "A perk", "Flexible hours"], "Monetary rewards are wages, incentives and bonuses."),
      ask("Which is an objective of compensation management?", "Ensuring equity", ["Increasing turnover", "Reducing motivation", "Avoiding the law"], "Others: attract, retain, motivate, improve productivity, comply."),
    ],
    lens: [
      { pairing: 0, adds: "Effort earns the wages of one's labour, even when fate denies the result.", differs: "The Kuṟaḷ speaks of effort and its reward in general. Compensation management designs pay to attract, retain and motivate." },
    ],
    reflect: "Which non-monetary reward matters most to you, and does your workplace offer it?",
    summary: {
      points: [
        "Compensation: rewarding employees for their contribution.",
        "Monetary: wages, incentives, bonuses. Non-monetary: benefits, recognition, perks.",
        "Objectives: attract, retain, motivate, equity, productivity, compliance.",
      ],
      memory: "Reward, motivate, retain, ensure equity.",
    },
  },
  {
    blockId: "the-employees-compensation-act-1923",
    name: "The Employees' Compensation Act, 1923",
    intro: "Protection for injury and occupational disease.",
    before: {
      q: "If a worker dies in a workplace accident, can their family claim compensation?",
      choices: [
        { label: "No", reveal: "They can: the Act provides compensation to the widow, children and other eligible dependants." },
        { label: "Yes", reveal: "Right. Dependants can claim under the Act." },
      ],
    },
    lead: "The Act makes employers liable for injury arising out of and in the course of employment.",
    check: [
      ask("Which does the Act cover?", "Accidents, occupational diseases and employment-related death", ["Only accidents on public roads", "Only illnesses outside work", "Salary disputes"], "Injury must arise out of and in the course of employment."),
      ask("The amount of compensation depends on…", "The injury, the percentage of disability, the wage level and the worker's age", ["The employer's profits", "The employee's age alone", "The number of years of service only"], "Age enters through the statutory 'relevant factor', alongside the injury, the disability and the wage."),
    ],
    lens: [
      { pairing: 1, adds: "Provision that the families of servants who die at their work receive their food and wages.", differs: "Kauṭilya provides for a royal administration's servants. The Act gives a legal right to compensation across industries." },
    ],
    reflect: "Why might a worker not report a small workplace injury, and why should they?",
    summary: {
      points: [
        "Financial protection for employees injured at work or suffering occupational diseases.",
        "Employer liability; dependants' claims; medical examination; prompt notice; penalties.",
        "Amount depends on injury, disability percentage, wage level and age.",
      ],
      memory: "Injury at work brings compensation.",
    },
  },
  {
    blockId: "incentive-plans",
    name: "Incentive plans",
    intro: "Linking pay to performance.",
    before: {
      q: "Under the Halsey plan, who keeps the value of the time a worker saves?",
      choices: [
        { label: "The employer", reveal: "It is shared: the worker gets the time wage plus 50% of the time saved; the employer keeps the rest." },
        { label: "It is shared", reveal: "Right. The worker receives 50% of the value of the time saved." },
      ],
    },
    lead: "Each plan rewards efficiency differently, from shared savings to differential piece rates.",
    check: [
      ask("Which plan pays a bonus equal to the time wage multiplied by the ratio of time saved to standard time?", "Rowan plan", ["Halsey plan", "Gantt task and bonus system", "Bedaux plan"], "Rowan: T × R + ((S − T) ÷ S) × T × R."),
      ask("Which plan uses two piece rates, higher above the standard and lower below it?", "Taylor's differential piece rate", ["Emerson's efficiency plan", "Halsey plan", "Rowan plan"], "A strong incentive that may cause stress."),
      ask("A worker takes 6 hours for a 10-hour job at ₹50 an hour. Halsey earnings are…", "₹400", ["₹300", "₹500", "₹350"], "6 × 50 + 50% × 4 × 50 = 300 + 100 = ₹400."),
    ],
    lens: [],
    reflect: "Which incentive plan would you prefer as an employee, and which as an employer?",
    summary: {
      points: [
        "Halsey: time wage plus 50% of time saved. Rowan: bonus = time wage × share of standard time saved.",
        "Bedaux: base pay plus Bedaux points. Emerson: bonus rising with efficiency from two-thirds.",
        "Gantt: time rate plus a bonus for meeting the standard. Taylor: differential piece rates.",
      ],
      memory: "Halsey shares, Rowan proportions, Taylor differentiates.",
    },
  },
];

export default lessons;
