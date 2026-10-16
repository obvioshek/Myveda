import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "meaning-and-objectives-of-compensation",
    name: "Meaning and objectives of compensation",
    intro: "Rewarding contribution, in money and otherwise.",
    before: {
      q: "Is recognition part of compensation?",
      choices: [
        { label: "No, only money", reveal: "It is: non-monetary rewards such as recognition are part of compensation, alongside wages, incentives, bonuses and benefits." },
        { label: "Yes", reveal: "Right. Compensation includes non-monetary rewards such as recognition and praise, as well as money and benefits." },
      ],
    },
    lead: "Compensation is the whole reward for work, money and more, designed to attract, keep and motivate people fairly.",
    check: [
      ask("Which of these is a direct monetary reward?", "An incentive", ["Recognition", "Praise at a meeting", "A challenging project"], "Direct monetary rewards are wages, incentives and bonuses. Recognition, praise and the work itself are non-monetary. Benefits such as insurance would be indirect monetary rewards."),
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
        "Direct monetary: wages, incentives, bonuses. Indirect monetary: benefits and perks. Non-monetary: recognition, the work itself.",
        "Objectives: attract, retain, motivate, equity, productivity, compliance.",
        "Internal equity is fairness between jobs inside the firm; external equity is fairness against the market.",
        "Pay is a hygiene factor: it prevents dissatisfaction but does not motivate on its own.",
      ],
      memory: "Reward, motivate, retain, ensure equity.",
    },
  },
  {
    blockId: "components-of-the-pay-package",
    name: "Components of the pay package",
    intro: "Basic pay, allowances, incentives and benefits: what a payslip is made of.",
    before: {
      q: "A recruit is offered ₹48,000 a month but receives less in his bank account. Why?",
      choices: [
        { label: "The employer paid less than promised", reveal: "Not necessarily: the ₹48,000 is gross salary, and deductions such as tax and the employee's provident fund come off before the money is paid." },
        { label: "Deductions came off the gross salary", reveal: "Right. Take-home salary is gross salary minus deductions." },
      ],
    },
    lead: "Pay has four components: wage or salary, dearness and other allowances, incentives, and fringe benefits with perquisites. Take-home pay is gross pay minus deductions.",
    check: [
      ask("What is the main purpose of dearness allowance?", "To protect real wages when prices rise", ["To reward output above a standard", "To pay for renting a house", "To reward senior executives only"], "Dearness allowance is a cost-of-living allowance that follows prices. Rewarding output above a standard is the job of an incentive; rent is the job of house rent allowance."),
      ask("A monthly payslip shows gross salary ₹60,000, with deductions of provident fund ₹4,000, income tax ₹5,000 and professional tax ₹200. What is the take-home salary?", "₹50,800", ["₹55,000", "₹54,800", "₹51,000"], "Deductions total 4,000 + 5,000 + 200 = ₹9,200, and 60,000 − 9,200 = ₹50,800. ₹54,800 forgets the provident fund; ₹51,000 forgets the professional tax."),
      ask("Two job offers have the same gross pay. One has a low basic pay and large allowances. What follows?", "It gives more cash now but smaller provident fund and gratuity later", ["It gives larger provident fund and gratuity", "It gives exactly the same benefits in the long run", "It raises the employer's cost to company without any effect on the employee"], "Provident fund and gratuity are worked out on basic pay plus dearness allowance. Large allowances therefore leave smaller retirement benefits, though the Code on Wages limits how far this can go."),
    ],
    lens: [
      { pairing: 2, adds: "Pay has long been more than one number: coin and goods each met a different need.", differs: "Manu fixes the rates by rank. The chapter explains how basic pay, allowances and deductions are put together, and why take-home pay is less than the quoted figure." },
    ],
    reflect: "Look at your own payslip. Which line would you change first, and why?",
    summary: {
      points: [
        "Four components: wage or salary, dearness and other allowances, incentives, fringe benefits and perquisites.",
        "Dearness allowance is the cost-of-living allowance; HRA, CCA, medical, education and conveyance allowances each meet one cost.",
        "Gross salary minus deductions is take-home salary; cost to company also includes the employer's contributions.",
        "Provident fund and gratuity follow basic pay plus DA, so the split between basic pay and allowances matters.",
      ],
      memory: "Gross less deductions is take-home; CTC is more than gross.",
    },
  },
  {
    blockId: "fringe-benefits-and-perquisites",
    name: "Fringe benefits and perquisites",
    intro: "Rewards beyond pay: for all employees, and for senior executives.",
    before: {
      q: "Is a company car for a general manager a fringe benefit or a perquisite?",
      choices: [
        { label: "A fringe benefit", reveal: "In the exam sense, a benefit tied to rank and available only to top executives is a perquisite. Fringe benefits go to employees generally." },
        { label: "A perquisite", reveal: "Right. Perquisites are special benefits for top executives." },
      ],
    },
    lead: "Fringe benefits go to employees generally, as extras on top of pay. Perquisites are special extras for senior executives, such as a car, a flat or stock options.",
    check: [
      ask("Which is a perquisite rather than a fringe benefit?", "A stock option scheme for senior executives", ["Provident fund for all employees", "Gratuity after long service", "Group health insurance for all staff"], "Perquisites are special benefits for top executives, such as stock options. Provident fund, gratuity and group insurance are fringe benefits given to employees generally."),
      ask("An executive holds options to buy 500 shares at ₹200 each. After vesting, the share is worth ₹260. What is her gain before tax?", "₹30,000", ["₹60,000", "₹1,00,000", "₹1,30,000"], "She pays 500 × 200 = ₹1,00,000 for shares worth 500 × 260 = ₹1,30,000, a gain of ₹30,000. ₹1,30,000 is the value of the shares, not the gain."),
      ask("A firm wants its young single workers and its parents to value its benefits equally. What is a sensible step?", "Offer a menu of benefits from which each employee chooses", ["Give every employee the same benefits", "Replace all benefits with a small pay rise", "Give benefits to senior executives only"], "A flexible or cafeteria plan lets each person pick what suits them, so the money is better valued. Identical benefits suit some people and not others, and perks for executives alone widen the status gap."),
    ],
    lens: [
      { pairing: 3, adds: "Help at the hard moments of life is an old part of what an employer gives, beyond the wage.", differs: "The sūtra leaves the help to the king's goodwill and names three kinds. Modern benefits are defined by contract or law, such as provident fund, gratuity and insurance, and the firm costs each one." },
      { pairing: 4, adds: "Welfare has two halves: supplying what is missing and protecting what is held.", differs: "The Gītā gives yogakṣema as a promise from above. In a firm it is a cost the employer chooses to carry, and perquisites for senior staff are a separate matter." },
    ],
    reflect: "Which benefit would you value more than a pay rise, and which would you give up?",
    summary: {
      points: [
        "Fringe benefits: extras beyond wages for employees generally, such as provident fund, gratuity, medical care, insurance and paid leave.",
        "Perquisites: special benefits for top executives, such as a company car, a furnished house, stock options and club membership.",
        "Statutory benefits are required by law; voluntary benefits are the employer's choice.",
        "A stock option is the right to buy shares later at a price fixed today; the gain is market price minus option price.",
      ],
      memory: "Fringes for all, perks for the top.",
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
