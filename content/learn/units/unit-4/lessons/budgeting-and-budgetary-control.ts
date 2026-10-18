import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "budgeting-and-budgetary-control",
    name: "Budgeting and budgetary control",
    intro: "The plan, and the checking that makes it work.",
    before: {
      q: "A firm prepares a careful budget in April and never looks at it again. Has it practised budgetary control?",
      choices: [
        { label: "Yes, it has a budget", reveal: "It has a budget, which is the plan. Control is the continuing comparison of actual with the plan, and acting on the gaps." },
        { label: "No, only the budget", reveal: "Right. Without comparison and corrective action, the budget is only a forecast." },
      ],
    },
    lead: "A budget is a quantitative plan for a period. Budgetary control compares actual with budget, analyses variances and takes corrective action, in a loop that revises the next plan.",
    check: [
      ask("Which is the correct order in budgetary control?", "Set objectives, prepare budgets, compare actual, analyse variances, act", ["Compare actual, set objectives, prepare budgets, act", "Act, prepare budgets, analyse variances, compare actual", "Prepare budgets, act, set objectives, compare actual"], "Objectives come first, then the budgets. Only then can actual results be compared and the variances analysed and acted on."),
      ask("The one limit that decides which budget is drawn up first is called…", "The key (or limiting) budget factor", ["The master budget", "The flexible budget", "The cash budget"], "For many firms it is sales; for others it is material or plant capacity."),
      ask("Which is not a function of a budget?", "Increasing the firm’s selling price automatically", ["Planning", "Coordination", "Control"], "A budget plans, coordinates, controls and helps evaluate performance. It does not change prices by itself."),
    ],
    lens: [],
    reflect: "Think of your own monthly spending. What is your key budget factor, and what do you do when actual spending drifts from plan?",
    summary: {
      points: [
        "Budgeting: a financial plan for a period; budgetary control: compare, find variances, act.",
        "Functions: planning, coordination, control, performance evaluation, discipline.",
        "Steps: objectives, budgets, comparison, variance analysis, corrective action.",
        "The key budget factor is the limit that fixes the first budget.",
      ],
      memory: "Plan, act, compare, correct.",
    },
  },
  {
    blockId: "functional-budgets-and-the-master-budget",
    name: "Functional budgets and the master budget",
    intro: "How the sales plan drives production, purchases and cash.",
    before: {
      q: "A firm will sell 12,000 fans, has 1,500 in stock and wants 2,000 at year-end. Should it make 12,000?",
      choices: [
        { label: "Yes, as many as it sells", reveal: "It wants stock to rise by 500, so it must make 500 more than it sells: 12,500." },
        { label: "No, it needs more", reveal: "Right. Production = Sales + Closing stock − Opening stock = 12,000 + 2,000 − 1,500 = 12,500." },
      ],
    },
    lead: "Each function has a budget. Production = sales + closing stock − opening stock. Purchases = material needed + closing material − opening material. The master budget consolidates them all.",
    check: [
      ask("Sales 12,000 units, opening stock 1,500, closing stock 2,000. The production budget is…", "12,500 units", ["12,000 units", "11,500 units", "13,500 units"], "12,000 + 2,000 − 1,500 = 12,500. Adding opening stock instead gives 11,500."),
      ask("Production needs 25,000 kg of material, opening stock is 3,000 kg and closing stock is 4,000 kg. Purchases are…", "26,000 kg", ["25,000 kg", "24,000 kg", "32,000 kg"], "25,000 + 4,000 − 3,000 = 26,000. The same rule as for finished goods."),
      ask("A cash budget shows opening cash ₹50,000, receipts ₹3,00,000 and payments ₹3,20,000. Closing cash is…", "₹30,000", ["₹70,000", "₹6,70,000", "₹20,000"], "₹50,000 + ₹3,00,000 − ₹3,20,000 = ₹30,000. If the firm wants ₹40,000, it needs to plan an overdraft."),
    ],
    lens: [],
    reflect: "A firm that sells mostly in four months of the year must make all year. Which budget will show the strain, and what would you do about it?",
    summary: {
      points: [
        "Sales budget → production budget → materials and purchase budgets → cash budget.",
        "Units to produce = Sales + Closing stock − Opening stock.",
        "Cash budget methods: receipts and payments, adjusted profit and loss, balance sheet.",
        "The master budget is a summary of all, with a projected profit and loss account and balance sheet.",
      ],
      memory: "Sales first, then production, then purchases; cash tells whether it can be paid.",
    },
  },
  {
    blockId: "fixed-flexible-and-zero-based-budgets",
    name: "Fixed, flexible and zero-based budgets",
    intro: "Why a budget should flex, and when it should start again.",
    before: {
      q: "A plant budgeted ₹4,20,000 for 10,000 units. It made 8,000 units and spent ₹3,70,000. Did it save ₹50,000?",
      choices: [
        { label: "Yes, ₹50,000 saved", reveal: "That compares with the cost of 10,000 units. For 8,000 units, the allowed cost is ₹3,60,000, so it spent ₹10,000 too much." },
        { label: "No, it overspent", reveal: "Right. The flexible budget for 8,000 units is ₹3,60,000, so ₹3,70,000 is ₹10,000 adverse." },
      ],
    },
    lead: "A fixed budget does not change with activity. A flexible budget is recalculated for the actual output, which allows a fair comparison. Zero-based budgeting asks every item to be justified again.",
    check: [
      ask("Variable cost is ₹30 a unit and fixed cost ₹1,20,000. The flexible budget for 8,000 units is…", "₹3,60,000", ["₹4,20,000", "₹2,40,000", "₹1,20,000"], "8,000 × ₹30 = ₹2,40,000, plus ₹1,20,000 fixed = ₹3,60,000. ₹4,20,000 is the budget for 10,000 units."),
      ask("Actual cost is ₹3,70,000 and the flexible budget is ₹3,60,000. The variance is…", "₹10,000 adverse", ["₹10,000 favourable", "₹50,000 favourable", "₹60,000 adverse"], "Actual is more than the budget for the work done, so the variance is adverse."),
      ask("Which is the first step in zero-based budgeting?", "Identify the decision units", ["Rank the packages", "Approve the funding", "Copy last year’s figures"], "The organisation is divided into decision units, then packages are written, ranked and funded."),
    ],
    lens: [],
    reflect: "Which of your own regular costs have you never questioned? What would a zero-based review of them ask?",
    summary: {
      points: [
        "Fixed budget: unchanged with activity; simple but rigid.",
        "Flexible budget: recalculated for actual output; used for fair variance analysis.",
        "ZBB: identify decision units, develop packages, rank them, approve and fund.",
        "Zero-based means no assumption that past costs are justified.",
      ],
      memory: "Fixed is rigid; flexible follows the work; zero-based starts again.",
    },
  },
];

export default lessons;
