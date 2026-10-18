import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "cost-accounting-and-its-purpose",
    name: "Cost accounting and its purpose",
    intro: "What it is for, and how it differs from financial accounting.",
    before: {
      q: "A weaver is told ₹2,400 is a fair price for a saree. What must she know first?",
      choices: [
        { label: "What others charge", reveal: "That helps, but it does not tell her whether she is losing money. She needs her own cost per saree." },
        { label: "What one saree costs her", reveal: "Right. Cost accounting finds that cost and sets a floor under the price." },
      ],
    },
    lead: "Cost accounting records, classifies and controls costs to find the cost per unit and to support management’s decisions. Financial accounting reports to outsiders.",
    check: [
      ask("Who mainly uses cost accounting information?", "Management", ["Regulators", "Investors only", "Tax authorities only"], "Cost accounting serves internal control and decisions. Financial accounting serves investors and regulators."),
      ask("A firm makes garments in lots of 500 of one design. The costing method that fits is…", "Batch costing", ["Process costing", "Contract costing", "Job costing for a single order"], "Batch costing suits products made in distinct lots. Process costing is for continuous output, and contract costing for long projects."),
      ask("Which of these is a technique rather than a method of costing?", "Marginal costing", ["Job costing", "Process costing", "Batch costing"], "Methods follow how the product is made. Standard costing, marginal costing, budgetary control and uniform costing are techniques."),
    ],
    lens: [],
    reflect: "A street food seller wants to raise her price. Which costs would she need to know first?",
    summary: {
      points: [
        "Cost accounting: record, classify, analyse and control costs.",
        "Aims: cost control, pricing, inventory valuation, profitability, budgeting.",
        "Methods: job, batch, process, contract, ABC. Techniques: standard, marginal, budgetary, uniform.",
        "It serves management; financial accounting serves outsiders.",
      ],
      memory: "Methods follow the product; techniques follow the question.",
    },
  },
  {
    blockId: "types-and-elements-of-cost",
    name: "Types and elements of cost",
    intro: "Fixed, variable, direct and indirect, and the four elements.",
    before: {
      q: "A bakery pays the same rent whether it bakes 100 or 1,000 loaves. Is rent a fixed or a variable cost?",
      choices: [
        { label: "Fixed", reveal: "Right. It stays the same however much is baked, within a range of output." },
        { label: "Variable", reveal: "No. A variable cost, like flour, grows with output. Rent stays the same." },
      ],
    },
    lead: "Costs behave as fixed, variable or semi-variable, and can be direct or indirect. Prime cost = direct material + direct labour + direct expenses; total cost = prime cost + overheads.",
    check: [
      ask("An electricity bill has a fixed charge of ₹2,000 and ₹5 per unit used. At 400 units the bill is…", "₹4,000", ["₹2,000", "₹2,005", "₹8,000"], "₹2,000 + 400 × ₹5 = ₹4,000. Such a cost is semi-variable."),
      ask("A supervisor’s monthly salary is…", "Fixed and indirect", ["Variable and direct", "Variable and indirect", "Fixed and direct"], "The salary does not change with output, and the supervisor cannot be traced to one product."),
      ask("Direct material is ₹4,20,000, direct labour ₹2,00,000 and direct expenses ₹30,000. Prime cost is…", "₹6,50,000", ["₹6,20,000", "₹4,50,000", "₹2,30,000"], "₹4,20,000 + ₹2,00,000 + ₹30,000 = ₹6,50,000. Overheads are not part of prime cost."),
    ],
    lens: [],
    reflect: "List three costs of running a household as if it were a small business, and label each as fixed or variable.",
    summary: {
      points: [
        "Fixed: constant with output. Variable: moves with output. Semi-variable: both.",
        "Direct: traceable to a product. Indirect: not.",
        "Elements: material, labour, expenses and overheads.",
        "Prime cost = DM + DL + direct expenses; total cost = prime cost + overheads.",
      ],
      memory: "Fixed is stuck, variable follows; direct is traced, indirect is shared.",
    },
  },
  {
    blockId: "preparing-a-cost-sheet",
    name: "Preparing a cost sheet",
    intro: "From prime cost to selling price, stage by stage.",
    before: {
      q: "Madurai Handlooms made 4,000 pieces at a total cost of ₹8,80,000. What is the cost of one piece?",
      choices: [
        { label: "₹220", reveal: "Right. ₹8,80,000 ÷ 4,000 = ₹220, and the cost sheet shows how that is built up." },
        { label: "₹264", reveal: "That is the selling price with a 20% profit. The cost of one piece is ₹220." },
      ],
    },
    lead: "A cost sheet runs: prime cost, factory cost (add factory overheads), cost of production (add administrative overheads), total cost (add selling overheads) and selling price (add profit).",
    check: [
      ask("Opening material ₹50,000, purchases ₹4,50,000 and closing material ₹80,000. Material consumed is…", "₹4,20,000", ["₹5,80,000", "₹4,50,000", "₹5,00,000"], "₹50,000 + ₹4,50,000 − ₹80,000 = ₹4,20,000. Closing stock was not used."),
      ask("Cost of production is ₹8,40,000 and selling overheads ₹40,000. A profit of 20% on cost gives a selling price of…", "₹10,56,000", ["₹10,08,000", "₹10,20,000", "₹11,00,000"], "Total cost is ₹8,80,000. Profit is ₹1,76,000 and the price is ₹10,56,000. The ₹10,08,000 figure leaves out the selling overheads."),
      ask("A price gives a profit of ₹1,76,000 on a selling price of ₹10,56,000. As a percentage of the selling price, the profit is…", "About 16.7%", ["20%", "10%", "17.6%"], "₹1,76,000 ÷ ₹10,56,000 = 16.7%. It is 20% only of the cost of ₹8,80,000."),
    ],
    lens: [],
    reflect: "Why are finished goods in stock valued at the cost of production rather than at total cost?",
    summary: {
      points: [
        "Prime cost + factory overheads = factory cost.",
        "Factory cost + administrative overheads = cost of production.",
        "Cost of production + selling and distribution overheads = total cost.",
        "Total cost + profit = selling price; check whether profit is on cost or on sales.",
      ],
      memory: "Prime, factory, production, sales, price.",
    },
  },
];

export default lessons;
