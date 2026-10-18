import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "classifying-sources-of-finance",
    name: "Classifying sources of finance",
    intro: "Five ways to sort where money can come from.",
    before: {
      q: "A tea estate needs ₹30 lakh for machinery that lasts twenty years. Should it use a three-month loan?",
      choices: [
        { label: "Yes, it is cheaper", reveal: "It would have to be refinanced every three months. A long-lived asset needs long-term funds." },
        { label: "No, match the term", reveal: "Right. Match the life of the funds with the life of the need." },
      ],
    },
    lead: "Sources can be sorted by period (long, medium, short), ownership (owned or borrowed), generation (internal or external), nature (fixed or working capital) and control. Match the life of the funds to the life of the need.",
    check: [
      ask("Retained earnings are…", "Long-term, owned and internal", ["Short-term, borrowed and external", "Medium-term, owned and external", "Long-term, borrowed and internal"], "They are profits kept in the firm. They belong to the owners and come from inside."),
      ask("A new issue of equity shares is…", "External and owned", ["Internal and borrowed", "External and borrowed", "Internal and owned"], "It brings money from outside, but gives the new shareholders ownership, so it is owned capital."),
      ask("Short-term sources are generally for…", "Working capital and day-to-day needs", ["Buying land and buildings", "Funding a 20-year plant", "Redeeming debentures"], "Trade credit, overdraft and bills discounting fund stock, wages and bills, not fixed assets."),
    ],
    lens: [],
    reflect: "Think of a loan you or someone you know has taken. Which of the five bases would classify it, and was the term matched to the need?",
    summary: {
      points: [
        "Five bases: time, ownership, origin, nature, control.",
        "Long-term: over 5 years; medium: 1–5 years; short: up to 1 year.",
        "Owned capital is permanent; borrowed capital is repayable with interest.",
        "‘External’ does not always mean ‘borrowed’.",
      ],
      memory: "Time, ownership, origin, nature, control.",
    },
  },
  {
    blockId: "owned-sources-of-finance",
    name: "Owned sources of finance",
    intro: "Equity, preference shares and retained earnings.",
    before: {
      q: "A founder wants money without a repayment date. What does she give up?",
      choices: [
        { label: "Nothing, it is free", reveal: "Equity has no repayment date, but the new owners share control and profit." },
        { label: "Some control and profit", reveal: "Right. Owned capital has no fixed repayment, but owners share the profit and the vote." },
      ],
    },
    lead: "Equity shares carry ownership, votes and a variable dividend. Preference shares carry a fixed dividend and priority, usually without a vote. Retained earnings are profits reinvested.",
    check: [
      ask("Which source carries a fixed dividend and ranks before equity, usually without voting rights?", "Preference shares", ["Equity shares", "Retained earnings", "Debentures"], "Preference shares are a hybrid of equity and debt. Debentures are loans, not shares."),
      ask("An advantage of retained earnings is that they…", "Need no issue, no outsiders and no repayment", ["Are unlimited in amount", "Have no cost at all", "Carry a fixed interest rate"], "They are limited to what the firm earns, and they have an opportunity cost: the dividend forgone."),
      ask("The main drawback of equity for the founder is…", "Dilution of control", ["A fixed interest burden", "A repayment date", "A tax-deductible cost"], "New shareholders share votes and profit. Equity carries no interest and no repayment."),
    ],
    lens: [],
    reflect: "A family-run firm wants ₹2 crore and wants to keep control. Which owned source suits it, and what would it give up?",
    summary: {
      points: [
        "Equity: ownership, votes, variable dividend; highest risk and cost.",
        "Preference: fixed dividend, priority over equity, usually no vote.",
        "Retained earnings: internal, cheap to raise, but with an opportunity cost.",
        "Preference shares are shares, not debt, and dividends are not tax-deductible.",
      ],
      memory: "Equity shares the risk, preference shares the order, retention shares nothing.",
    },
  },
  {
    blockId: "borrowed-and-short-term-sources",
    name: "Borrowed and short-term sources",
    intro: "Debentures, loans, trade credit, leases and the rest.",
    before: {
      q: "A trader holds a ₹1,00,000 bill due in three months but needs cash now. What can she do?",
      choices: [
        { label: "Wait for the due date", reveal: "She can, but a bank will pay now for a discount. That is bills discounting." },
        { label: "Discount it with a bank", reveal: "Right. At 12% a year for three months, the bank deducts ₹3,000 and pays ₹97,000." },
      ],
    },
    lead: "Borrowed sources are repayable, with interest. Debentures, loans and deposits fund the longer term; trade credit, discounting, commercial paper and factoring fund the short term. A lessee only uses an asset; a hire purchaser becomes the owner after the last instalment.",
    check: [
      ask("A bank discounts a ₹1,00,000 bill, due in 3 months, at 12% a year. The trader receives…", "₹97,000", ["₹88,000", "₹1,03,000", "₹99,000"], "The discount is ₹1,00,000 × 12% × 3/12 = ₹3,000, so the trader gets ₹97,000."),
      ask("Ownership of an asset passes to the buyer after the last instalment under…", "Hire purchase", ["Lease financing", "Bills discounting", "Commercial paper"], "In a lease, ownership does not pass. In hire purchase, it does."),
      ask("Receivables sold to a financial institution for immediate cash are called…", "Factoring", ["Commercial paper", "A debenture", "Trade credit"], "Factoring turns debtors into cash at once. Commercial paper is a short-term unsecured note issued by large firms."),
    ],
    lens: [],
    reflect: "Terms of 2/10 net 30 cost about 37% a year if the discount is skipped. If you can borrow at 14%, what would you do?",
    summary: {
      points: [
        "Long-term: debentures and bonds, long bank loans.",
        "Medium-term: public deposits, hire purchase, leases.",
        "Short-term: trade credit, overdraft, bills discounting, commercial paper, factoring.",
        "Interest on debt is tax-deductible; dividends are not.",
      ],
      memory: "Match the life of the money to the life of the need.",
    },
  },
];

export default lessons;
