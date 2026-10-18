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
    blockId: "standards-and-the-case-for-standard-costing",
    name: "Standards, and the case for standard costing",
    intro: "What a standard is, the kinds there are, and where it suits.",
    before: {
      q: "A cement plant’s monthly cost varies a little. Without a standard, can you say whether that is bad luck or poor control?",
      choices: [
        { label: "Yes, compare with last month", reveal: "Last month may itself have been poor. A yardstick set in advance, for efficient working, is what lets you judge." },
        { label: "No, I need a yardstick", reveal: "Right. A standard cost says what the cost should be, so the gap can be judged." },
      ],
    },
    lead: "A standard cost is a predetermined cost for a set of working conditions: what it should be, unlike an estimate, which is what it will be. Standards can be ideal, basic, current, expected or normal, and suit repetitive, standard products.",
    check: [
      ask("Which describes a ‘current’ standard?", "Set for a short period and reflecting present conditions", ["Assumes no waste at all", "Never changed from the base year", "An average of past years"], "Current standards are widely used for control. Ideal assumes no waste, basic is never revised, and normal averages the past."),
      ask("Standard costing suits which firm best?", "A cement plant making the same product all year", ["A firm making one-off custom machines", "A consultant billing by the hour", "A start-up with no product yet"], "Repetitive, standardised products allow stable standards. Jobbing work makes a standard for each job too costly."),
      ask("Management by exception means…", "Attention goes to the variances that are large or repeated", ["Every variance is investigated equally", "Only favourable variances are studied", "Variances are ignored"], "The variance flags results that depart from the standard, so effort goes where it is most needed."),
    ],
    lens: [],
    reflect: "If standards were set from above without asking the managers judged on them, what would you expect to happen?",
    summary: {
      points: [
        "Standard cost: predetermined cost based on a technical estimate for stated conditions.",
        "Standard says what cost should be; estimate says what it will be.",
        "Kinds: ideal, basic, current, expected, normal.",
        "Best for repetitive products; poor for jobbing work.",
      ],
      memory: "Standard: should be. Estimate: will be.",
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
      ask("Standard rate ₹3 an hour, actual rate ₹3.50, and 300 hours worked. The labour rate variance is…", "₹150 adverse", ["₹150 favourable", "₹60 favourable", "₹90 adverse"], "300 × (₹3 − ₹3.50) = −₹150. Paying more than the standard rate is adverse."),
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
      ask("Variable overhead variance is ₹1,650 adverse and fixed overhead variance ₹14,000 adverse. The overhead cost variance is…", "₹15,650 adverse", ["₹12,350 adverse", "₹15,650 favourable", "₹14,000 adverse"], "The overhead cost variance is recovered less actual overhead, the sum of the variable and fixed parts: −₹1,650 − ₹14,000 = −₹15,650."),
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
  {
    blockId: "sales-variances",
    name: "Sales variances",
    intro: "Splitting a revenue gap into price and volume.",
    before: {
      q: "A firm budgeted 1,000 units at ₹50 and sold 900 at ₹52. Revenue is ₹3,200 short. Was it price or volume?",
      choices: [
        { label: "Price, it charged too much", reveal: "The higher price actually added ₹1,800. The loss came from selling 100 fewer, worth ₹5,000 at the standard price." },
        { label: "Volume, partly offset by price", reveal: "Right. Volume lost ₹5,000, and the higher price gained ₹1,800, a net loss of ₹3,200." },
      ],
    },
    lead: "Sales price variance = actual quantity × (actual price − standard price). Sales volume variance = standard price × (actual quantity − budgeted quantity). Together they make the sales value variance. For sales, above budget is favourable.",
    check: [
      ask("Actual sales are 900 units at ₹52 and the standard price is ₹50. The sales price variance is…", "₹1,800 favourable", ["₹1,800 adverse", "₹100 favourable", "₹5,000 adverse"], "900 × (₹52 − ₹50) = +₹1,800. A higher price than standard is favourable for sales."),
      ask("Budgeted quantity is 1,000, actual is 900 and the standard price is ₹50. The sales volume variance is…", "₹5,000 adverse", ["₹5,000 favourable", "₹4,500 adverse", "₹3,200 adverse"], "₹50 × (900 − 1,000) = −₹5,000. Fewer units were sold than budgeted."),
      ask("Sales price +₹1,800 and volume −₹5,000. The sales value variance is…", "₹3,200 adverse", ["₹6,800 favourable", "₹3,200 favourable", "₹6,800 adverse"], "+₹1,800 − ₹5,000 = −₹3,200, which agrees with actual ₹46,800 less budget ₹50,000."),
    ],
    lens: [],
    reflect: "A firm raises its price and sells fewer units. How would you tell whether the price rise paid?",
    summary: {
      points: [
        "Sales value variance = Actual sales − Budgeted sales.",
        "Price variance = Actual quantity × (Actual price − Standard price).",
        "Volume variance = Standard price × (Actual quantity − Budgeted quantity).",
        "Sign rule for sales: actual above standard is favourable, the opposite of costs.",
      ],
      memory: "Sales: actual minus standard, so above is favourable.",
    },
  },
];

export default lessons;
