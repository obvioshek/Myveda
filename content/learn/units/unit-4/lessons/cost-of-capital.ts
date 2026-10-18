import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "cost-of-capital-concept",
    name: "The cost of capital",
    intro: "The minimum return investors need.",
    before: {
      q: "A firm earns a 9% return on a project funded at a cost of 12%. Is it better off?",
      choices: [
        { label: "Yes, 9% is positive", reveal: "It earns less than its funds cost, so it loses value even though the project makes a profit." },
        { label: "No, it earns less than it costs", reveal: "Right. A project must earn at least the cost of capital to add value." },
      ],
    },
    lead: "The cost of capital is the return investors require for supplying funds. A project earning above it adds value; one below it destroys value. Riskier investments need higher returns.",
    check: [
      ask("The opportunity cost of using retained earnings is called…", "An implicit cost", ["An explicit cost", "A marginal cost", "A specific cost"], "Retained profit has no direct payment, but shareholders forgo the return they could have earned on the dividend."),
      ask("A higher tax rate makes the after-tax cost of debt…", "Lower", ["Higher", "Unchanged", "Equal to the cost of equity"], "Interest is tax-deductible, so a higher rate gives a bigger tax shield and a lower cost."),
      ask("Which statement matches the risk and return rule?", "Higher risk, higher required return, higher cost of capital", ["Higher risk, lower required return", "Risk and cost are unrelated", "Lower risk, higher cost"], "Investors need more compensation for taking more risk."),
    ],
    lens: [],
    reflect: "Why might a firm’s overall WACC be the wrong discount rate for a project much riskier than its usual work?",
    summary: {
      points: [
        "Cost of capital: the required return of providers of finance.",
        "Explicit: paid in cash. Implicit: opportunity cost. Specific: one source. WACC: all, weighted.",
        "Factors: risk, capital structure, dividend policy, tax, market conditions, credit rating.",
        "Accept projects that earn more than the cost of capital.",
      ],
      memory: "Risk up, required return up, cost of capital up.",
    },
  },
  {
    blockId: "specific-costs-of-capital",
    name: "Specific costs of capital",
    intro: "Pricing debt, preference, equity and retained earnings one at a time.",
    before: {
      q: "A ₹100 debenture pays 10% interest and nets ₹95 after issue costs. What does it cost, before tax?",
      choices: [
        { label: "10%", reveal: "The firm only received ₹95 but pays ₹10 a year, so the cost is a little more: 10 ÷ 95 = 10.5%." },
        { label: "About 10.5%", reveal: "Right. Interest is divided by the net proceeds, not the face value." },
      ],
    },
    lead: "Kd = I(1 − T) ÷ NP; Kp = Dp ÷ NP; Ke = D1 ÷ P0 + g, or E1 ÷ P0, or Rf + β(Rm − Rf); Kr ≈ Ke.",
    check: [
      ask("A ₹100 debenture pays ₹10 interest and nets ₹95. At a 25% tax rate, the after-tax cost of debt is…", "7.9%", ["10.5%", "7.5%", "10%"], "₹10 × (1 − 0.25) ÷ ₹95 = 7.9%. The 10.5% figure is before tax."),
      ask("Next dividend ₹6, price ₹100, growth 4%. The cost of equity by the dividend growth model is…", "10%", ["6%", "4%", "24%"], "6 ÷ 100 + 0.04 = 10%. The 6% is only the dividend yield."),
      ask("Risk-free rate 7%, beta 1.2, market return 12%. Ke under CAPM is…", "13%", ["14.4%", "8.4%", "12%"], "7 + 1.2 × (12 − 7) = 13%. Using 12% would ignore the share’s own risk."),
    ],
    lens: [],
    reflect: "Three methods give three different costs of equity. What does each one assume, and which would you trust for a firm that pays no dividend?",
    summary: {
      points: [
        "Kd after tax = I(1 − T) ÷ NP; Kp = Dp ÷ NP.",
        "Ke by dividend growth, earnings yield or CAPM.",
        "Kr ≈ Ke: retained profit has an opportunity cost.",
        "Use net proceeds (after issue costs) in the denominator.",
      ],
      memory: "Debt after tax, preference on net proceeds, equity by one of three routes.",
    },
  },
  {
    blockId: "weighted-average-cost-of-capital",
    name: "Weighted average cost of capital",
    intro: "One average rate for all the firm’s money.",
    before: {
      q: "A firm has debt at 10%, preference capital at 12% and equity at 15%. Is its average cost the middle figure, 12%?",
      choices: [
        { label: "Yes, the middle one", reveal: "Only if each source supplied an equal share. The average is weighted by how much each source supplies." },
        { label: "No, it depends on the weights", reveal: "Right. With 40% debt, 10% preference and 50% equity, it comes to 12.7%." },
      ],
    },
    lead: "WACC = Σ (weight × cost). With debt ₹2,00,000 at 10%, preference ₹50,000 at 12% and equity ₹2,50,000 at 15%, the weights are 0.40, 0.10 and 0.50, and WACC = 4.0% + 1.2% + 7.5% = 12.7%.",
    check: [
      ask("The weight of equity in ₹2,00,000 debt, ₹50,000 preference and ₹2,50,000 equity is…", "0.50", ["0.40", "0.25", "0.10"], "₹2,50,000 ÷ ₹5,00,000 = 0.50."),
      ask("The weighted cost of the debt (₹2,00,000 at 10%) in a total of ₹5,00,000 is…", "4.0%", ["10%", "2.0%", "8.0%"], "Weight 0.40 × 10% = 4.0%."),
      ask("A project returns 14% and the firm’s WACC is 12.7%. The project…", "Has the potential to add value", ["Destroys value", "Should be rejected", "Is exactly break-even"], "A project earning more than the cost of capital adds value, if the cash flows are reliable and the risk is typical."),
    ],
    lens: [],
    reflect: "Why does the marginal cost of capital often rise as a firm raises more money?",
    summary: {
      points: [
        "WACC = wdKd + wpKp + weKe + wrKr; weights sum to 1.",
        "Debt is taken after tax.",
        "Project return above WACC adds value; below it reduces value.",
        "Marginal cost of capital is the cost of the next increment.",
      ],
      memory: "Weight each cost by its share, then add.",
    },
  },
];

export default lessons;
