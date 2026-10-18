import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "financial-management-and-its-objectives",
    name: "Financial management and its objectives",
    intro: "Three decisions, and what the manager is trying to achieve.",
    before: {
      q: "A garment unit has orders to double output. What must its owner decide?",
      choices: [
        { label: "Only whether to buy machines", reveal: "That is one decision. She must also decide how to pay for them and whether to take any profit out this year." },
        { label: "Invest, finance and distribute", reveal: "Right. These are the three decisions of financial management: investment, financing and dividend." },
      ],
    },
    lead: "Financial management plans, raises, uses and controls a firm’s funds. Its objectives are profit maximisation, wealth maximisation, liquidity and risk minimisation, and its decisions are investment, financing and dividend.",
    check: [
      ask("Which question belongs to the financing decision?", "How should the project be paid for: debt or equity?", ["Which machine should we buy?", "How much of the profit should we pay out?", "What did we earn last year?"], "The financing decision is the debt-equity mix. The machine is investment; the payout is dividend; last year’s earnings are reporting."),
      ask("Wealth maximisation differs from profit maximisation because it…", "Considers the timing, size and risk of future cash flows", ["Ignores profit altogether", "Looks only at this year", "Is only for listed firms"], "Profit maximisation looks at one year’s profit. Wealth maximisation looks at the value of the business, which depends on the cash flows over time and their risk."),
      ask("‘Maintaining enough cash for short-term liabilities’ is which objective?", "Liquidity management", ["Risk minimisation", "Wealth maximisation", "Profit maximisation"], "It concerns paying what is due in the near term. Risk minimisation is identifying and reducing threats."),
    ],
    lens: [],
    reflect: "A founder could take a big dividend or reinvest in a new plant. Which objective is she serving in each case?",
    summary: {
      points: [
        "Financial management: planning, raising, using and controlling funds.",
        "Objectives: profit maximisation, wealth maximisation, liquidity, risk minimisation.",
        "Three decisions: investment, financing, dividend.",
        "Wealth maximisation is the preferred objective in most textbooks.",
      ],
      memory: "Where to invest, how to raise, how much to give back.",
    },
  },
  {
    blockId: "functions-scope-and-role-of-the-financial-manager",
    name: "Functions, scope and role of the financial manager",
    intro: "Seven functions, and the person who carries them out.",
    before: {
      q: "Is the financial manager just the firm’s accountant?",
      choices: [
        { label: "Yes, same job", reveal: "They work closely, but the accountant records what happened. The financial manager decides what to do next." },
        { label: "No, the job looks forward", reveal: "Right. The financial manager plans, raises and invests funds, and advises on risk." },
      ],
    },
    lead: "The functions are planning and forecasting, investment, financing, liquidity and working capital, risk management, dividend policy, and reporting. The financial manager plans, raises capital, controls, advises and ensures compliance.",
    check: [
      ask("Evaluating projects using NPV, IRR and payback belongs to which function?", "Investment decision (capital budgeting)", ["Liquidity management", "Dividend policy", "Risk management"], "Capital budgeting is the function that judges long-term projects."),
      ask("Which of these is part of the financial manager’s role?", "Budget control and variance analysis", ["Selecting the firm’s products", "Setting employees’ pay scales alone", "Drawing the factory layout"], "Monitoring and control, through budgets and variance analysis, is part of the role."),
      ask("Hedging, insurance and diversification are tools of…", "Risk management", ["Dividend policy", "Capital budgeting", "Working capital management"], "They reduce exposure to market and credit risks."),
    ],
    lens: [
      { pairing: 0, adds: "All of this is pervaded by the divine; enjoy through renunciation, and do not covet anyone’s wealth.", differs: "The text speaks of wealth in general, not of a firm’s funds. The link to a financial manager’s stewardship of other people’s money is a reading, not what the Upaniṣad discusses." },
    ],
    reflect: "If a firm’s money belongs to others, what would it mean for a financial manager to act as a steward of it?",
    summary: {
      points: [
        "Seven functions: planning, investment, financing, liquidity, risk, dividend, reporting.",
        "The manager plans, raises capital, controls, advises and ensures compliance.",
        "The accountant records the past; the financial manager decides the next step.",
        "Liquidity is the function that fails first.",
      ],
      memory: "Plan, invest, fund, keep liquid, cover risk, pay out, report.",
    },
  },
  {
    blockId: "capital-budgeting-and-dividend-policy",
    name: "Capital budgeting and dividend policy",
    intro: "Payback, NPV and IRR, and the dividend decision.",
    before: {
      q: "A machine costs ₹10 lakh and returns ₹4 lakh a year for four years. Is ₹16 lakh for ₹10 lakh a clear win?",
      choices: [
        { label: "Yes, ₹6 lakh profit", reveal: "Not quite. The ₹16 lakh arrives over four years, and later rupees are worth less. NPV discounts them to compare fairly." },
        { label: "Not until it is discounted", reveal: "Right. At 12% the inflows are worth about ₹12.15 lakh today, so the NPV is about ₹2.15 lakh." },
      ],
    },
    lead: "Payback is the time to recover the outlay, NPV is discounted inflows less the outlay (accept if positive), and IRR is the rate at which NPV is zero (accept if above the required return). Residual dividend policy pays out only what is left after good projects are funded.",
    check: [
      ask("A machine costs ₹10,00,000 and returns ₹4,00,000 a year. The payback period is…", "2.5 years", ["4 years", "0.4 years", "25 years"], "₹10,00,000 ÷ ₹4,00,000 = 2.5 years."),
      ask("A project has an NPV of −₹1,49,500 at the firm’s cost of capital. The firm should…", "Reject it", ["Accept it", "Accept it if payback is short", "Accept it if IRR is above zero"], "A negative NPV means the discounted inflows are less than the outlay, so the project destroys value."),
      ask("Profit is ₹10,00,000 and good projects need ₹6,00,000. Under the residual theory, the dividend is…", "₹4,00,000", ["₹6,00,000", "₹10,00,000", "Nil"], "Projects are funded first from profit, and only the remainder, ₹4,00,000, is paid out."),
    ],
    lens: [],
    reflect: "Why can a project that pays back quickly still be a poor one?",
    summary: {
      points: [
        "Payback ignores the time value of money and cash flows after recovery.",
        "NPV > 0: accept. IRR > cost of capital: accept.",
        "The cost of capital is the discount rate for NPV and the hurdle for IRR.",
        "Residual theory: pay out only what remains after funding good projects.",
      ],
      memory: "Positive NPV adds value; IRR above the cost of capital agrees.",
    },
  },
];

export default lessons;
