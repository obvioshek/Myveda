import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "target-costing",
    name: "Target costing",
    intro: "Start from the price the market will pay and work back to cost.",
    before: {
      q: "A mixer-grinder costs ₹2,650 to make. Rivals sell for ₹3,000, and the firm wants 20% profit on price. Should it raise its price or cut its cost?",
      choices: [
        { label: "Raise the price", reveal: "Customers will not pay more than the market price. Cost-plus gives ₹3,180, which is above it." },
        { label: "Cut the cost", reveal: "Right. At ₹3,000 and a 20% margin, the cost must be ₹2,400, so ₹250 must be designed out." },
      ],
    },
    lead: "Target cost = selling price − desired profit. The price is fixed by the market, so the cost is the thing to change, and most of it is set in design.",
    check: [
      ask("The market price is ₹3,000 and the desired profit is 20% of price. The target cost is…", "₹2,400", ["₹2,500", "₹3,600", "₹600"], "20% of ₹3,000 is ₹600, and ₹3,000 − ₹600 = ₹2,400."),
      ask("The first design costs ₹2,650 against a target of ₹2,400. The cost gap to close is…", "₹250", ["₹600", "₹2,400", "₹550"], "₹2,650 − ₹2,400 = ₹250 per unit."),
      ask("How does target costing differ from cost-plus pricing?", "It starts from the market price and works back to a cost", ["It adds a profit margin to cost", "It ignores the market price", "It prices after production"], "Cost-plus starts from cost; target costing starts from price."),
    ],
    lens: [],
    reflect: "Think of a product you buy often. Which feature could its maker remove without you noticing, and what would that save?",
    summary: {
      points: [
        "Target cost = Selling price − Desired profit.",
        "Price is set by the market, so cost is managed from the design stage.",
        "Steps: research, maximum cost, design, adjust, improve, approve, record, implement.",
        "Benefits: profit, innovation, customer satisfaction, efficient production.",
      ],
      memory: "Price first, profit second, cost is what is left.",
    },
  },
  {
    blockId: "kaizen-costing",
    name: "Kaizen costing",
    intro: "Continuous improvement, a little each month.",
    before: {
      q: "A product launched at its target cost. A year later rivals have cut costs. What does the firm need?",
      choices: [
        { label: "Hold cost steady", reveal: "Holding steady while rivals improve shrinks the margin. Cost must keep falling." },
        { label: "A steady reduction", reveal: "Right. Kaizen costing sets a small reduction target each period and checks results against it." },
      ],
    },
    lead: "Kaizen is continuous improvement. Kaizen costing sets regular cost-reduction targets for existing products, reviews variances each period, and removes the seven wastes. It differs from re-engineering, which is a one-off radical change.",
    check: [
      ask("Unit cost is ₹2,400 with a target of ₹20 off each month. The target for month 3 is…", "₹2,340", ["₹2,380", "₹2,360", "₹2,320"], "₹2,400 − 3 × ₹20 = ₹2,340."),
      ask("Which is one of the seven wastes?", "Waiting and idle time", ["Fair wages", "Quality checks that find defects", "Training"], "The seven wastes are over-production, inventory, waiting, defects, motion, transportation and over-processing."),
      ask("Kaizen costing focuses on…", "Cost reduction rather than cost control", ["Cost control rather than reduction", "Price increases", "One-off radical change"], "Standard costing controls cost at a set level. Kaizen costing lowers the level continually."),
    ],
    lens: [],
    reflect: "What small improvement could you make this week in a routine task, and what waste would it remove?",
    summary: {
      points: [
        "Kaizen: continuous improvement by everyone, in small steps.",
        "Kaizen costing: regular cost-reduction targets and variance review.",
        "Seven wastes: over-production, inventory, waiting, defects, motion, transportation, over-processing.",
        "Different from re-engineering (radical) and from standard costing (fixed yardstick).",
      ],
      memory: "Small cuts, every month, by everyone.",
    },
  },
  {
    blockId: "just-in-time",
    name: "Just-in-time (JIT)",
    intro: "Inventory is waste.",
    before: {
      q: "A firm holds ₹12,00,000 of stock at a 20% yearly carrying cost. What does holding it cost?",
      choices: [
        { label: "₹2,40,000 a year", reveal: "Right. 20% of ₹12,00,000 is ₹2,40,000 a year in storage, insurance, interest and spoilage." },
        { label: "Nothing, it is an asset", reveal: "Stock is an asset, but it carries storage, insurance, interest and spoilage cost every year." },
      ],
    },
    lead: "JIT brings materials and parts exactly when needed and makes goods to order. Its slogan is ‘inventory is waste’. It grew at Toyota, and works in production, inventory, services and information.",
    check: [
      ask("JIT cuts average stock from ₹12,00,000 to ₹3,00,000 at 20% carrying cost. The yearly saving is…", "₹1,80,000", ["₹2,40,000", "₹60,000", "₹9,00,000"], "Carrying cost falls from ₹2,40,000 to ₹60,000, a saving of ₹1,80,000. The ₹9,00,000 is the stock released."),
      ask("The slogan of JIT is…", "Inventory is waste", ["Stock protects you", "Make more than you need", "Buy in bulk"], "JIT treats stock as a waste that hides problems."),
      ask("A main risk of JIT is…", "A supply failure stops production at once", ["Stock builds up", "Costs rise with stock", "Too many suppliers"], "With no buffer stock, one late delivery halts the line."),
    ],
    lens: [],
    reflect: "What would you need to be sure of before cutting stock to almost nothing in a factory that depends on a distant supplier?",
    summary: {
      points: [
        "JIT: the right unit, in the right quantity, at the right time.",
        "Origin: Toyota; Taiichi Ohno.",
        "Four environments: production, inventory, services, information.",
        "Needs reliable suppliers, steady quality and tight schedules.",
      ],
      memory: "The right unit, in the right quantity, at the right time.",
    },
  },
];

export default lessons;
