import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "marginal-costing",
    name: "Marginal costing and contribution",
    intro: "Why fixed costs wait in the period, and what contribution means.",
    before: {
      q: "A pump costs ₹30 to make and sells for ₹50. Fixed costs are ₹1,20,000 a year. Is each pump sold a profit of ₹20?",
      choices: [
        { label: "Yes, ₹20 profit", reveal: "Not yet. ₹20 is the contribution. It must first cover the ₹1,20,000 of fixed costs." },
        { label: "No, ₹20 is contribution", reveal: "Right. Each pump adds ₹20 towards fixed costs. Only after the fixed costs are covered is it profit." },
      ],
    },
    lead: "Marginal costing counts only variable costs as the cost of a product. Contribution is sales less variable cost, and profit is contribution less fixed costs.",
    check: [
      ask("A pump sells for ₹50 and has a variable cost of ₹30. The P/V ratio is…", "40%", ["60%", "20%", "67%"], "Contribution per unit is ₹20, and ₹20 ÷ ₹50 = 40%. 60% is the variable cost as a share of the price."),
      ask("Sales are ₹4,00,000, variable cost ₹2,40,000 and fixed costs ₹1,20,000. Profit is…", "₹40,000", ["₹1,60,000", "₹2,80,000", "₹1,20,000"], "Contribution is ₹1,60,000, and ₹1,60,000 − ₹1,20,000 = ₹40,000."),
      ask("A firm makes 10,000 units, sells 8,000 and has ₹1,20,000 of fixed cost. Absorption profit exceeds marginal profit by…", "₹24,000", ["₹1,20,000", "₹0", "₹60,000"], "2,000 unsold units each carry ₹12 of fixed cost forward, so ₹24,000 of cost is deferred to the next year."),
    ],
    lens: [],
    reflect: "If your pay depended on reported profit under absorption costing, what would tempt you at year-end? How does marginal costing remove that?",
    summary: {
      points: [
        "Contribution = Sales − Variable cost; per unit = Price − Variable cost per unit.",
        "P/V ratio = Contribution ÷ Sales × 100.",
        "Profit = Contribution − Fixed costs.",
        "Absorption costing carries fixed cost into stock, so its profit is higher when stock rises.",
      ],
      memory: "Variable costs go in the product; fixed costs wait in the period.",
    },
  },
  {
    blockId: "marginal-cost-features-and-limits",
    name: "Marginal cost, its features and limits",
    intro: "The extra cost of one more unit, and what the method can and cannot do.",
    before: {
      q: "100 articles cost ₹50,000 and 101 cost ₹50,450. What is the marginal cost?",
      choices: [
        { label: "₹500", reveal: "That would be the average cost of the 101 articles, about ₹500. The marginal cost is the change, ₹450." },
        { label: "₹450", reveal: "Right. ₹50,450 − ₹50,000 = ₹450, the extra cost of the 101st article." },
      ],
    },
    lead: "Marginal cost is the extra cost of one more unit, its variable cost. Under marginal costing only variable costs go into products, stock is valued at variable cost, and fixed costs are charged to the period.",
    check: [
      ask("In marginal costing, closing stock is valued at…", "Variable cost only", ["Full cost including fixed overhead", "Selling price", "Fixed cost only"], "No fixed overhead is carried forward in stock. That is why marginal and absorption profits differ."),
      ask("A product sells 10,000 units with a contribution of ₹4 a unit. Its contribution is…", "₹40,000", ["₹4,000", "₹4,00,000", "₹10,000"], "10,000 × ₹4 = ₹40,000. Contribution is spread over fixed cost and profit."),
      ask("Contributions of three products are ₹40,000, ₹50,000 and ₹30,000, and fixed costs are ₹80,000. Profit is…", "₹40,000", ["₹1,20,000", "₹80,000", "₹2,00,000"], "Total contribution is ₹1,20,000, and ₹1,20,000 − ₹80,000 = ₹40,000."),
    ],
    lens: [],
    reflect: "A product earns only ₹0.50 a unit in contribution. Why might dropping it still reduce profit?",
    summary: {
      points: [
        "Marginal cost = variable cost of one more unit; also called variable or contributory costing.",
        "Features: only variable costs in product cost; fixed costs charged to the period; stock at variable cost.",
        "Advantages: decision data, profit planning, no arbitrary fixed-cost sharing.",
        "Limits: semi-variable costs are hard to split; ignores fixed costs in decisions; not for published accounts.",
      ],
      memory: "Extra unit, extra variable cost; fixed cost waits for the contribution.",
    },
  },
  {
    blockId: "break-even-and-cvp-analysis",
    name: "Break-even and CVP analysis",
    intro: "The point of no profit and no loss, and the safety margin above it.",
    before: {
      q: "Fixed costs are ₹1,20,000 and each pump adds ₹20 of contribution. How many pumps are needed before the firm stops losing money?",
      choices: [
        { label: "6,000", reveal: "Right. ₹1,20,000 ÷ ₹20 = 6,000 pumps, or ₹3,00,000 of sales." },
        { label: "2,400", reveal: "That would be ₹1,20,000 ÷ ₹50, dividing by the price rather than the contribution. The right figure is 6,000." },
      ],
    },
    lead: "Break-even is fixed costs ÷ contribution per unit (6,000 pumps), or fixed costs ÷ P/V ratio in rupees (₹3,00,000). The margin of safety is actual sales less break-even sales.",
    check: [
      ask("Fixed costs are ₹1,20,000 and the P/V ratio is 40%. Break-even sales are…", "₹3,00,000", ["₹48,000", "₹1,20,000", "₹4,80,000"], "₹1,20,000 ÷ 0.40 = ₹3,00,000. Multiplying by 0.40 would give ₹48,000."),
      ask("Sales are ₹4,00,000 and break-even sales are ₹3,00,000. The margin of safety is…", "₹1,00,000, or 25% of sales", ["₹3,00,000", "₹1,00,000, or 33% of sales", "₹7,00,000"], "₹4,00,000 − ₹3,00,000 = ₹1,00,000, and ₹1,00,000 ÷ ₹4,00,000 = 25%."),
      ask("To earn a profit of ₹1,00,000, with fixed costs ₹1,20,000 and contribution ₹20 a pump, the firm must sell…", "11,000 pumps", ["5,000 pumps", "6,000 pumps", "1,00,000 pumps"], "(₹1,20,000 + ₹1,00,000) ÷ ₹20 = 11,000 pumps. 5,000 is the pumps needed for the profit alone."),
    ],
    lens: [],
    reflect: "Think of a business you know, such as a tea stall. What would its fixed costs be, and how many cups must it sell before it earns anything?",
    summary: {
      points: [
        "Break-even (units) = Fixed costs ÷ Contribution per unit.",
        "Break-even (₹) = Fixed costs ÷ P/V ratio.",
        "Margin of safety = Actual sales − Break-even sales.",
        "Target profit: add the desired profit to fixed costs before dividing.",
      ],
      memory: "Break-even is where contribution equals fixed cost.",
    },
  },
  {
    blockId: "cvp-relationships-and-angle-of-incidence",
    name: "Relationships in CVP and the angle of incidence",
    intro: "The identities that answer most break-even questions.",
    before: {
      q: "Sales rise from ₹3,60,000 to ₹4,00,000 and profit from ₹24,000 to ₹40,000. What is the P/V ratio?",
      choices: [
        { label: "10%", reveal: "That would be profit over sales. The P/V ratio comes from the change: ₹16,000 ÷ ₹40,000." },
        { label: "40%", reveal: "Right. Change in profit ÷ change in sales = ₹16,000 ÷ ₹40,000 = 40%." },
      ],
    },
    lead: "S − V = F + P. At break-even C = F; in the margin of safety C = P. P/V ratio = change in profit ÷ change in sales, and margin of safety = profit ÷ P/V ratio.",
    check: [
      ask("Profit is ₹40,000 and the P/V ratio is 40%. The margin of safety is…", "₹1,00,000", ["₹16,000", "₹40,000", "₹1,60,000"], "₹40,000 ÷ 0.40 = ₹1,00,000. Contribution on the margin of safety is all profit."),
      ask("At the break-even point, contribution equals…", "Fixed cost", ["Profit", "Sales", "Variable cost"], "At break-even there is no profit, so contribution only covers fixed cost."),
      ask("A wide angle of incidence on a break-even chart means…", "Profit grows fast once break-even is passed", ["Profit grows slowly", "There is no break-even", "Fixed costs are zero"], "A wide angle means the sales line is much steeper than the cost line, so profit builds quickly."),
    ],
    lens: [],
    reflect: "If a firm shifts its sales to a product with a higher P/V ratio, what happens to break-even sales?",
    summary: {
      points: [
        "Marginal cost equation: S − V = F + P; C = F + P.",
        "At break-even C = F; in the margin of safety C = P.",
        "P/V ratio = Change in profit ÷ Change in sales; MoS = Profit ÷ P/V.",
        "Angle of incidence: the angle at which sales cut total cost; wide means high profit-earning capacity.",
      ],
      memory: "Break-even: contribution equals fixed cost. Above it: contribution equals profit.",
    },
  },
  {
    blockId: "marginal-costing-for-decisions",
    name: "Using marginal costing for decisions",
    intro: "Ask what changes, and ignore what stays.",
    before: {
      q: "A buyer offers ₹40 a pump for 1,000 pumps, below the full cost of ₹42. The factory has spare capacity. Should the firm refuse?",
      choices: [
        { label: "Yes, it is below cost", reveal: "The ₹42 includes ₹12 of fixed cost that is incurred anyway. Each pump adds ₹10 over its ₹30 variable cost." },
        { label: "No, it adds contribution", reveal: "Right. ₹40 − ₹30 = ₹10 on each of 1,000 pumps, so ₹10,000 of extra profit, if the capacity is truly spare." },
      ],
    },
    lead: "In a short-term decision, only costs and revenues that change count. Fixed costs that continue either way are left out. Special orders, make-or-buy and shutdown are the main cases.",
    check: [
      ask("An export order of 1,000 units at ₹40 uses spare capacity. Variable cost is ₹30. The extra profit is…", "₹10,000", ["₹40,000", "₹30,000", "Nil"], "(₹40 − ₹30) × 1,000 = ₹10,000, with no extra fixed cost."),
      ask("Full cost of a part is ₹42 (variable ₹30, fixed ₹12, which continues). A supplier offers it at ₹38. The firm should…", "Make it, since buying adds ₹8 a unit", ["Buy it, since ₹38 is less than ₹42", "Buy it, since it saves ₹4", "Be indifferent"], "Making adds ₹30 of extra cost. Buying adds ₹38. The fixed ₹12 stays whichever way it decides."),
      ask("A special order should be refused, even with spare capacity, if…", "It would lead regular customers to demand the same low price", ["The price is above the variable cost", "It brings in contribution", "The firm has idle machines"], "Contribution alone is not the test. Spill-over to the regular market can cost more than the order earns."),
    ],
    lens: [],
    reflect: "A hotel has empty rooms in the monsoon. What would make a half-price offer a good idea, and what would make it a mistake?",
    summary: {
      points: [
        "Use only the costs and revenues that change with the decision.",
        "Special order: accept if price exceeds variable cost, there is spare capacity and no spill-over.",
        "Make or buy: compare the avoidable cost, not the full cost.",
        "Marginal pricing cannot be the rule for every sale; fixed costs must be recovered.",
      ],
      memory: "Ask what changes. Ignore what stays.",
    },
  },
];

export default lessons;
