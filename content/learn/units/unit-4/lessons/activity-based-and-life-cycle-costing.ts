import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "activity-based-costing-concepts",
    name: "Activity-based costing: the ideas",
    intro: "Pools, drivers and why volume alone can mislead.",
    before: {
      q: "A factory sets up machines far more often for a low-volume custom product. Charged by labour hours, will that product look cheaper or dearer than it is?",
      choices: [
        { label: "Dearer, it is small", reveal: "Overhead by labour hours follows volume, and the custom product has little. It looks cheaper than the set-ups and inspections it causes." },
        { label: "Cheaper than it is", reveal: "Right. Volume-based sharing hides the cost of its many set-ups, which ABC brings out." },
      ],
    },
    lead: "ABC traces costs to activities and then to products by cost drivers. The driver rate is the cost of the pool divided by the driver units. Drivers may be transaction, duration or intensity drivers.",
    check: [
      ask("A set-up pool costs ₹2,40,000 and there are 40 set-ups. The cost driver rate is…", "₹6,000 a set-up", ["₹2,40,000", "₹40", "₹9,60,00,000"], "₹2,40,000 ÷ 40 = ₹6,000. The pool is the money; the driver units are the 40 set-ups."),
      ask("Counting the number of inspections performed uses which kind of driver?", "A transaction driver", ["A duration driver", "An intensity driver", "A volume driver"], "A transaction driver counts how many times an activity is done. A duration driver counts the time it takes."),
      ask("ABC is most useful when…", "There are many products and overhead is a large share of cost", ["There is one product and little overhead", "All costs are direct", "Costs are all fixed"], "With one product and little overhead, the way overhead is shared barely matters."),
    ],
    lens: [],
    reflect: "Think of a restaurant with a few dishes that need much more preparation than others. What would an activity-based view say about the price of those dishes?",
    summary: {
      points: [
        "ABC: resources → activities → products, by cost drivers.",
        "Cost pool: indirect costs with similar behaviour. Cost driver: the cause of the cost.",
        "Driver rate = Pool cost ÷ Driver units.",
        "Drivers: transaction (count), duration (time), intensity (direct charge).",
      ],
      memory: "Activities cause costs; products use activities.",
    },
  },
  {
    blockId: "steps-and-levels-in-abc",
    name: "The steps of ABC and a worked example",
    intro: "Four steps and four levels, worked on Hosur Gears.",
    before: {
      q: "ABC and traditional costing both share ₹6,00,000 of overhead between two products. Does ABC change the total?",
      choices: [
        { label: "Yes, it finds more cost", reveal: "No. The total is the same. Only the split between products changes." },
        { label: "No, only the split", reveal: "Right. ₹6,00,000 is shared differently, by cause rather than by labour hours." },
      ],
    },
    lead: "The steps are: identify activities, assign costs to pools, select drivers, and charge products by use. The levels are unit, batch, product and facility. For Hosur Gears, the custom gear’s overhead is ₹296 a unit under ABC against ₹120 traditionally.",
    check: [
      ask("A product has 30 batches and the set-up rate is ₹6,000 a batch. Its set-up cost is…", "₹1,80,000", ["₹6,000", "₹30", "₹2,40,000"], "30 × ₹6,000 = ₹1,80,000. ₹2,40,000 is the pool for all products."),
      ask("Which is a batch-level activity?", "Machine set-up", ["Machining each unit", "Plant security", "Designing a new product"], "A set-up occurs once per batch. Machining each unit is unit-level, designing is product-level and security is facility-level."),
      ask("The custom gear sells for ₹300 and has ₹100 of direct cost and ₹296 of ABC overhead per unit. Its profit per unit is…", "A loss of ₹96", ["A profit of ₹96", "A profit of ₹200", "A profit of ₹4"], "₹300 − ₹100 − ₹296 = −₹96. Traditional costing, with ₹120 of overhead, would have shown a profit of ₹80."),
    ],
    lens: [],
    reflect: "If ABC shows a product loses money, what could you do besides raising its price?",
    summary: {
      points: [
        "Four steps: identify activities; pool costs; choose drivers; charge products.",
        "Four levels: unit, batch, product, facility.",
        "ABC changes the split of overhead, not the total.",
        "Facility-level costs still have no true driver.",
      ],
      memory: "Pool the cost, find the driver, charge by use.",
    },
  },
  {
    blockId: "life-cycle-costing",
    name: "Life-cycle costing",
    intro: "The cost of owning, not just the cost of buying.",
    before: {
      q: "Machine Y costs ₹3,00,000 less than Machine X but costs more each year to run. Is Y the cheaper machine?",
      choices: [
        { label: "Yes, it costs less", reveal: "Over five years it costs ₹19,00,000 against ₹16,50,000 for X once running costs and the final sale are counted." },
        { label: "Only after running costs", reveal: "Right. Over its life Y costs more, even though it is cheaper to buy." },
      ],
    },
    lead: "Life-cycle costing adds every cost from first idea to disposal, usually discounted. Product life-cycle costing covers a product in the market; project (whole-life) costing covers a physical asset.",
    check: [
      ask("Machine X: price ₹10,00,000, running ₹1,50,000 a year for 5 years, sale ₹1,00,000. Undiscounted life-cycle cost is…", "₹16,50,000", ["₹10,00,000", "₹17,50,000", "₹7,50,000"], "₹10,00,000 + ₹7,50,000 − ₹1,00,000 = ₹16,50,000. The sale at the end reduces the cost."),
      ask("Project life-cycle costing is about…", "Acquiring, using, maintaining and disposing of a physical asset", ["Only the purchase price", "The sales of a product in the market", "Only research and design"], "It covers all the costs of an asset from purchase to disposal."),
      ask("Most of a product’s lifetime cost is committed at which stage?", "Design", ["Disposal", "Selling", "Distribution"], "Design and specification fix most of the later costs, even though they are spent later."),
    ],
    lens: [],
    reflect: "Think of something you bought mainly on price. What running or disposal costs did you not count at the time?",
    summary: {
      points: [
        "Life cycle cost = acquire + operate + support + dispose, usually discounted.",
        "Product LCC: research to withdrawal. Project LCC: purchase to disposal of an asset.",
        "Uses: choose between assets, judge benefits, build accurate budgets.",
        "The cheapest asset to buy is not always the cheapest to own.",
      ],
      memory: "Count the cost of owning, not just the cost of buying.",
    },
  },
];

export default lessons;
