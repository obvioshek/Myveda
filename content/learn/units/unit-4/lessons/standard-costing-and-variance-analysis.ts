import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "standard-costing-and-variances",
    name: "Standard costing and variances",
    intro: "A yardstick for cost, and the gaps that show where to look.",
    before: {
      q: "A plant spent ₹6,04,850 against a standard cost of ₹5,58,000 for the output it made. Is knowing the ₹46,850 gap enough?",
      choices: [
        { label: "Yes, it is over budget", reveal: "The total says there is a problem, not where. The variances split it into material, labour and overhead causes." },
        { label: "No, I need the causes", reveal: "Right. Splitting the gap into price, usage, rate, efficiency and overhead parts shows what to follow up." },
      ],
    },
    lead: "Standard costing compares predetermined costs with actual costs. Variance = Standard − Actual; favourable if actual is less, adverse if more. Each total variance is the sum of its parts.",
    check: [
      ask("The standard cost of the actual output is ₹5,58,000 and the actual cost is ₹6,04,850. The total variance is…", "₹46,850 adverse", ["₹46,850 favourable", "₹5,58,000 adverse", "₹11,62,850"], "Standard is less than actual, so the variance is adverse by ₹6,04,850 − ₹5,58,000 = ₹46,850."),
      ask("Which is the correct order of steps in standard costing?", "Set the standard, measure actual, compare, find the causes, act", ["Measure actual, set the standard, act, compare", "Compare, set the standard, measure actual, act", "Act, find the causes, compare, set the standard"], "A standard must exist before actual cost can be compared with it, and action follows analysis."),
      ask("Standard cost is the yardstick for…", "The output actually made", ["The output budgeted", "Last year’s output", "The sales target"], "Comparing with a budget for a different output mixes a volume effect into every variance."),
    ],
    lens: [],
    reflect: "Think of a household budget for groceries. Which gap would be a price variance and which a usage variance?",
    summary: {
      points: [
        "Standard cost: predetermined cost under good conditions.",
        "Variance = Standard cost − Actual cost; F if actual is lower, A if higher.",
        "MCV = MPV + MUV; LCV = LRV + LEV + LITV; VOCV = VOEV + VOEEV; FOCV = FOEV + FOVV.",
        "A variance is a question to investigate, not a verdict.",
      ],
      memory: "Set, measure, compare, find the cause, act.",
    },
  },
  {
    blockId: "material-and-labour-variances",
    name: "Material and labour variances",
    intro: "Price against usage, rate against efficiency and idle time.",
    before: {
      q: "A firm paid ₹52 a kg for steel instead of ₹50 and used 3,800 kg where 3,600 was the standard. Is that one variance or two?",
      choices: [
        { label: "One, it cost more", reveal: "There are two causes: price paid and quantity used. Each belongs to a different manager, so the variance is split." },
        { label: "Two, price and usage", reveal: "Right. Price is ₹7,600 adverse, and usage ₹10,000 adverse." },
      ],
    },
    lead: "Material: price variance = AQ × (SP − AP); usage variance = SP × (SQ − AQ). Labour: rate = AH × (SR − AR); efficiency = SR × (SH − AH worked); idle time = idle hours × SR. Idle time is always adverse.",
    check: [
      ask("Standard price ₹50, actual price ₹52, actual quantity 3,800 kg. The material price variance is…", "₹7,600 adverse", ["₹7,600 favourable", "₹2 adverse", "₹10,000 adverse"], "3,800 × (₹50 − ₹52) = −₹7,600. Paying more than the standard is adverse."),
      ask("Standard quantity for the output is 3,600 kg, actual is 3,800 kg and standard price is ₹50. The usage variance is…", "₹10,000 adverse", ["₹10,000 favourable", "₹7,600 adverse", "₹1,80,000 adverse"], "₹50 × (3,600 − 3,800) = −₹10,000. More material was used than the standard allows."),
      ask("150 hours were paid for but idle during a power cut, at a standard rate of ₹80. The idle time variance is…", "₹12,000 adverse", ["₹12,000 favourable", "₹150 adverse", "Nil, as no work was done"], "150 × ₹80 = ₹12,000. Idle time is paid time with no output, so it is always adverse."),
    ],
    lens: [],
    reflect: "Who would you ask about a price variance, and who about a usage variance? Why must they not be the same question?",
    summary: {
      points: [
        "MPV = AQ × (SP − AP); MUV = SP × (SQ − AQ); MCV is their sum.",
        "LRV = AH × (SR − AR); LEV = SR × (SH − AH worked); LITV = idle hours × SR.",
        "SQ and SH are the standards for the actual output.",
        "Mix and yield together make up the usage variance when several materials are used.",
      ],
      memory: "Price for what you pay, usage for what you use.",
    },
  },
  {
    blockId: "overhead-variances",
    name: "Overhead variances",
    intro: "Expenditure, efficiency and volume.",
    before: {
      q: "Fixed overhead was ₹1,22,000 against ₹1,20,000 budgeted, and the plant made fewer units than planned. Is all the shortfall overspending?",
      choices: [
        { label: "Yes, it spent more", reveal: "Only ₹2,000 was overspending. The larger part is that fewer units than planned were made to absorb the fixed cost." },
        { label: "No, part is volume", reveal: "Right. ₹2,000 is expenditure and ₹12,000 is the volume gap, a planning effect." },
      ],
    },
    lead: "Variable overhead splits into expenditure and efficiency. Fixed overhead splits into expenditure (budgeted − actual) and volume (standard − budgeted). The standard is for the actual output.",
    check: [
      ask("Budgeted fixed overhead is ₹1,20,000 and actual is ₹1,22,000. The fixed overhead expenditure variance is…", "₹2,000 adverse", ["₹2,000 favourable", "₹12,000 adverse", "₹1,22,000 adverse"], "₹1,20,000 − ₹1,22,000 = −₹2,000. The firm spent more than budgeted."),
      ask("Standard fixed overhead for the actual output is ₹1,08,000 and the budget is ₹1,20,000. The volume variance is…", "₹12,000 adverse", ["₹12,000 favourable", "₹2,000 adverse", "₹14,000 adverse"], "Standard − Budgeted = ₹1,08,000 − ₹1,20,000 = −₹12,000. Less was made than budgeted, so fixed cost was under-recovered."),
      ask("Fixed overhead expenditure −₹2,000 and volume −₹12,000. The fixed overhead cost variance is…", "₹14,000 adverse", ["₹10,000 adverse", "₹14,000 favourable", "₹2,000 adverse"], "FOCV = FOEV + FOVV = −₹2,000 − ₹12,000 = −₹14,000."),
    ],
    lens: [],
    reflect: "A plant makes half its planned output because demand fell. Is the large volume variance the factory manager’s fault?",
    summary: {
      points: [
        "VOEV = AH × (SR − AR); VOEEV = SR × (SH − AH).",
        "FOEV = Budgeted − Actual; FOVV = Standard − Budgeted; FOCV = Standard − Actual.",
        "Standard fixed overhead = standard hours for actual output × standard rate.",
        "A volume variance tests the plan more than the spending.",
      ],
      memory: "Variable: spend and speed. Fixed: spend and volume.",
    },
  },
];

export default lessons;
