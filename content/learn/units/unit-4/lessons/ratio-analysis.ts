import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "what-ratio-analysis-does",
    name: "What ratio analysis does",
    intro: "Four families of ratios, and how to read one fairly.",
    before: {
      q: "Firm A earns ₹4,20,000 a year and firm B earns ₹9,00,000. Is B the better business?",
      choices: [
        { label: "Yes, it earns more", reveal: "Not necessarily. B may be many times larger, or may owe far more. Profit has to be set against sales, assets or owners’ money." },
        { label: "Not enough to say", reveal: "Right. A ratio puts the profit beside what produced it, so firms of different sizes can be compared." },
      ],
    },
    lead: "A ratio divides one figure from the accounts by another. Liquidity, profitability, activity and solvency ratios each answer one question, and a ratio is only read against the firm’s own past, similar firms or a standard.",
    check: [
      ask("Which family of ratios tells you whether a firm can pay what it owes in the next twelve months?", "Liquidity ratios", ["Profitability ratios", "Activity ratios", "Solvency ratios"], "Solvency looks at the long run, activity at how fast assets turn over, and profitability at earnings. Liquidity is about near-term payment."),
      ask("A firm’s current ratio is 1.8 : 1. Which comparison tells you most?", "Its own past years and similar firms in the same trade", ["The same ratio of a firm in a different industry", "The 2 : 1 convention alone", "Its sales figure for the year"], "A convention such as 2 : 1 is only a starting point. Trend and inter-firm comparison show whether 1.8 is normal for this kind of business."),
      ask("Which of these is a solvency ratio?", "Interest coverage", ["Inventory turnover", "Gross profit ratio", "Current ratio"], "Interest coverage, debt-to-equity and the debt ratio test long-term stability. The others belong to activity, profitability and liquidity."),
    ],
    lens: [],
    reflect: "Think of a shop you know. Which one ratio would you look at first to judge whether it will still be there in three years, and why that one?",
    summary: {
      points: [
        "A ratio divides one accounting figure by another so that firms and years can be compared.",
        "Four families: liquidity, profitability, activity (turnover) and solvency.",
        "Read a ratio against the firm’s trend, similar firms and a standard, never alone.",
        "Ratios use past accrual figures; they show that something looks odd, not why.",
      ],
      memory: "Short-term, earning, efficiency, long-term.",
    },
  },
  {
    blockId: "uses-types-and-limits-of-ratios",
    name: "Uses, types and limits of ratios",
    intro: "Where the figures come from, who uses them, and where ratios mislead.",
    before: {
      q: "Firm A earns ₹50,000 on sales of ₹5,00,000. Firm B earns ₹1,00,000 on sales of ₹50,00,000. Which is the more profitable on its sales?",
      choices: [
        { label: "B, its profit is bigger", reveal: "B’s profit is twice as large, but it keeps only 2 paise per rupee of sales. A keeps 10 paise." },
        { label: "A, it keeps 10% of sales", reveal: "Right. A keeps 10% of its sales and B only 2%. A figure means little until it is set against a related figure." },
      ],
    },
    lead: "Ratios are classed as income statement, balance sheet or composite by where the figures come from, and as liquidity, profitability, activity or solvency by purpose. They ignore qualitative factors and are only as sound as the accounts.",
    check: [
      ask("The debtors turnover ratio uses credit sales and debtors. It is a…", "Composite ratio", ["Income statement ratio", "Balance sheet ratio", "Solvency ratio"], "Credit sales come from the statement of profit and loss and debtors from the balance sheet, so it mixes the two."),
      ask("Firm A earns ₹50,000 on sales of ₹5,00,000. Its net profit ratio is…", "10%", ["1%", "50%", "₹50,000"], "₹50,000 ÷ ₹5,00,000 × 100 = 10%."),
      ask("Which is a limitation of ratio analysis?", "It leaves out qualitative factors such as management quality", ["It cannot be computed", "It uses only non-money figures", "It always agrees with the cash flow"], "Ratios are built from money figures, so qualitative factors do not appear."),
    ],
    lens: [],
    reflect: "If a firm’s ratios all improved this year, what would you ask to make sure the improvement is real?",
    summary: {
      points: [
        "Traditional: income statement, balance sheet, composite. Functional: liquidity, profitability, activity, solvency.",
        "Different users want different ratios: short-term creditors liquidity, long-term lenders solvency.",
        "Advantages: simpler statements, trends, control, links between parts.",
        "Limits: qualitative factors, single-year ratios, defective accounting data.",
      ],
      memory: "Where the figures come from, and what the ratio tests.",
    },
  },
  {
    blockId: "liquidity-ratios",
    name: "Liquidity ratios",
    intro: "Current, quick and cash ratios, worked on Kaveri Auto Parts.",
    before: {
      q: "Kaveri’s stock is ₹8,00,000 of its ₹18,00,000 current assets. If stock sold slowly, would it still pay its bills?",
      choices: [
        { label: "Yes, comfortably", reveal: "Leave the stock out and ₹10,00,000 remains against ₹8,00,000 due. That is the quick ratio, 1.25, and it is why the answer is yes." },
        { label: "No, stock is most of it", reveal: "Stock is under half of the current assets here. The quick ratio, which leaves it out, still comes to 1.25." },
      ],
    },
    lead: "The current ratio is current assets ÷ current liabilities, the quick ratio leaves out inventory, and the cash ratio uses cash alone. For Kaveri they are 2.25, 1.25 and 0.5.",
    check: [
      ask("Kaveri has current assets of ₹18,00,000, inventory of ₹8,00,000 and current liabilities of ₹8,00,000. Its quick ratio is…", "1.25 : 1", ["2.25 : 1", "0.5 : 1", "1 : 1"], "(₹18,00,000 − ₹8,00,000) ÷ ₹8,00,000 = 1.25. The 2.25 figure is the current ratio, which keeps the inventory in."),
      ask("Why does the quick ratio leave out inventory?", "Stock can take months to become cash and may sell below cost", ["Stock is not an asset", "Stock is always worthless", "Inventory is a long-term item"], "Stock is a current asset, but it is the slowest to turn into cash. The quick ratio counts only what can be paid out soon."),
      ask("A firm has current assets of ₹6,00,000, of which ₹3,60,000 is stock, and current liabilities of ₹3,00,000. Its quick ratio is…", "0.8 : 1", ["2 : 1", "1.2 : 1", "0.5 : 1"], "(₹6,00,000 − ₹3,60,000) ÷ ₹3,00,000 = 0.8. The current ratio, 2 : 1, looks fine, and the quick ratio shows it leans on selling stock."),
      ask("Closing stock is ₹8,00,000 and working capital ₹10,00,000. The stock-working capital ratio is…", "0.8 (80%)", ["1.25", "0.2", "8"], "₹8,00,000 ÷ ₹10,00,000 = 0.8. Four-fifths of the working capital rests on stock."),
    ],
    lens: [],
    reflect: "If a supplier asked you to pay this week, what would you sell or collect first? That is the order in which assets count as liquid.",
    summary: {
      points: [
        "Current ratio = Current assets ÷ Current liabilities; convention about 2 : 1.",
        "Quick ratio = (Current assets − Inventory) ÷ Current liabilities; about 1 : 1.",
        "Cash ratio = Cash and equivalents ÷ Current liabilities.",
        "A very high ratio can mean idle cash, slow stock or unpaid debtors.",
      ],
      memory: "Current: all. Quick: no stock. Cash: cash only.",
    },
  },
  {
    blockId: "profitability-ratios",
    name: "Profitability ratios",
    intro: "Margins, returns on assets and equity, and the P/E ratio.",
    before: {
      q: "Kaveri sold ₹50,00,000 and kept ₹4,20,000. Is that a good year?",
      choices: [
        { label: "Yes, it made a profit", reveal: "A profit alone does not say. It is 8.4 paise per rupee of sales, 10.5% of assets and 17.5% of the owners’ money, and these are what to compare." },
        { label: "Depends what it is set against", reveal: "Right. Against sales it is 8.4%, against assets 10.5% and against equity 17.5%." },
      ],
    },
    lead: "Gross and net profit ratios divide by sales, return on assets by total assets and return on equity by shareholders’ funds. For Kaveri they are 30%, 8.4%, 10.5% and 17.5%.",
    check: [
      ask("Kaveri’s net profit is ₹4,20,000 and shareholders’ equity is ₹24,00,000. Its return on equity is…", "17.5%", ["10.5%", "8.4%", "30%"], "₹4,20,000 ÷ ₹24,00,000 × 100 = 17.5%. The 10.5% figure divides by total assets of ₹40,00,000 instead."),
      ask("Why is Kaveri’s return on equity higher than its return on assets?", "Part of the assets are paid for with debt, so equity is the smaller base", ["Equity earns more than assets", "Tax is lower on equity", "Sales are counted twice"], "The same profit is divided by ₹24,00,000 of equity rather than ₹40,00,000 of assets. Borrowing therefore raises ROE, and the risk."),
      ask("Kaveri’s net profit is ₹4,20,000 and it has 1,00,000 shares priced at ₹63. Its P/E ratio is…", "15", ["0.067", "4.2", "63"], "Earnings per share are ₹4.20, and ₹63 ÷ ₹4.20 = 15. The ₹4.20 itself is the EPS, not the ratio."),
    ],
    lens: [],
    reflect: "A jeweller and a vegetable seller both earn 10% on assets. How can they reach it in such different ways, and which is more fragile?",
    summary: {
      points: [
        "Gross profit ratio = Gross profit ÷ Net sales × 100 (30% here).",
        "Net profit ratio = Net profit ÷ Net sales × 100 (8.4%).",
        "ROA = Net profit ÷ Total assets (10.5%); ROE = Net profit ÷ Equity (17.5%).",
        "P/E = Share price ÷ EPS (15); a high ROE built on heavy debt is not a safe one.",
      ],
      memory: "Gross, net, assets, equity: the base moves from sales to what is invested.",
    },
  },
  {
    blockId: "operating-profit-and-roce",
    name: "Operating ratio, capital employed and EPS",
    intro: "What running the business takes, and what the long-term money earns.",
    before: {
      q: "Kaveri’s gross profit is ₹15,00,000 but its operating profit is ₹7,00,000. What accounts for the gap?",
      choices: [
        { label: "Tax", reveal: "Tax is taken after operating profit. The gap is the running expenses of ₹8,00,000, such as administration and selling." },
        { label: "Operating expenses", reveal: "Right. ₹15,00,000 − ₹8,00,000 = ₹7,00,000. The operating ratio brings these costs together with the cost of goods." },
      ],
    },
    lead: "Operating ratio = (cost of goods + operating expenses) ÷ sales; operating profit ratio is its complement. ROCE = EBIT ÷ capital employed. EPS is profit after preference dividend ÷ equity shares.",
    check: [
      ask("Cost of goods sold ₹35,00,000, operating expenses ₹8,00,000 and sales ₹50,00,000. The operating ratio is…", "86%", ["70%", "14%", "16%"], "(₹35,00,000 + ₹8,00,000) ÷ ₹50,00,000 = 86%. The 14% is the operating profit ratio."),
      ask("EBIT is ₹7,00,000, equity ₹24,00,000 and long-term debt ₹8,00,000. ROCE is…", "About 21.9%", ["29.2%", "17.5%", "8.4%"], "Capital employed is ₹32,00,000, and ₹7,00,000 ÷ ₹32,00,000 = 21.9%. Dividing by equity alone gives 29.2%."),
      ask("Profit is ₹4,20,000 on 1,00,000 shares. After a bonus issue of one share for four, EPS becomes…", "₹3.36", ["₹4.20", "₹5.25", "₹4.00"], "₹4,20,000 ÷ 1,25,000 = ₹3.36. Profit did not change; it was spread over more shares."),
    ],
    lens: [],
    reflect: "A firm’s ROCE is 9% and its loan costs 11%. Should it expand using the loan?",
    summary: {
      points: [
        "Operating ratio + operating profit ratio = 100%.",
        "ROCE = EBIT ÷ (Debt + Equity) × 100, also Fixed assets + Working capital.",
        "EPS = (Profit after tax − Preference dividend) ÷ Equity shares.",
        "A bonus issue lowers EPS without lowering profit.",
      ],
      memory: "Operating ratio plus operating profit ratio makes 100.",
    },
  },
  {
    blockId: "activity-ratios",
    name: "Activity (turnover) ratios",
    intro: "How fast stock, debtors, creditors and assets turn over.",
    before: {
      q: "Kaveri carries ₹8,00,000 of stock and sells ₹35,00,000 worth at cost in a year. How long does a unit sit on the shelf?",
      choices: [
        { label: "About a year", reveal: "Far less. Average stock is ₹7,00,000 and it is used up five times a year, which is about 73 days." },
        { label: "A couple of months", reveal: "Right. Stock turns five times a year, about 73 days on the shelf." },
      ],
    },
    lead: "Turnover is sales or cost divided by an average balance, and 365 divided by it gives days. Kaveri turns stock 5 times (73 days), debtors 8 times (45.6 days) and creditors 8.22 times (44.4 days).",
    check: [
      ask("A firm’s cost of goods sold is ₹9,00,000 and its average inventory is ₹1,50,000. Inventory turnover is…", "6 times", ["0.17 times", "9 times", "60 times"], "₹9,00,000 ÷ ₹1,50,000 = 6. Dividing the other way gives 0.17, and it would mean nothing as a turnover."),
      ask("Kaveri’s debtors turnover is 8 times. About how many days does it take to collect?", "45.6 days", ["8 days", "365 days", "91 days"], "365 ÷ 8 = 45.6 days. The 8 itself is a count of times a year, not days."),
      ask("Inventory turnover is calculated on cost of goods sold rather than sales because…", "Stock is carried at cost, so the numerator should be at cost too", ["Sales are not reliable", "Cost is always the larger figure", "Inventory includes the profit"], "Dividing sales (which include profit) by stock at cost overstates the speed. Using cost compares like with like."),
      ask("Sales are ₹6,40,000, gross profit is 25% on cost, and average stock is ₹60,000. Stock turnover is about…", "8.5 times", ["10.7 times", "2.7 times", "6.4 times"], "Cost of goods sold is ₹6,40,000 × 100/125 = ₹5,12,000, and ₹5,12,000 ÷ ₹60,000 = 8.5 times. Using sales as the numerator gives 10.7."),
    ],
    lens: [],
    reflect: "A vegetable seller’s debtors are close to zero and her creditors wait a day. Why can she run on a tiny balance sheet while a machine builder cannot?",
    summary: {
      points: [
        "Inventory turnover = Cost of goods sold ÷ Average inventory.",
        "Debtors turnover = Net credit sales ÷ Average receivables; creditors turnover uses credit purchases.",
        "Asset turnover = Net sales ÷ Total assets (1.25 for Kaveri).",
        "Days = 365 ÷ turnover; stock days + debtors days − creditors days is the cash cycle.",
      ],
      memory: "Stock on cost, debtors on credit sales, creditors on purchases, assets on sales.",
    },
  },
  {
    blockId: "solvency-ratios",
    name: "Solvency ratios",
    intro: "Debt against owners’ money, against assets and against profit.",
    before: {
      q: "Kaveri owes lenders ₹10,00,000. Is that too much?",
      choices: [
        { label: "Yes, it is a lot", reveal: "A lot is not the test. Against ₹24,00,000 of owners’ money it is 42 paise per rupee, and operating profit is seven times the interest." },
        { label: "Depends on its means", reveal: "Right. Lenders hold a quarter of the assets, and profit covers the interest seven times." },
      ],
    },
    lead: "Debt-to-equity divides debt by owners’ funds, the debt ratio by total assets, and interest coverage divides operating profit by interest. Kaveri’s are 0.42, 0.25 and 7 times.",
    check: [
      ask("Kaveri’s operating profit is ₹7,00,000 and interest is ₹1,00,000. Interest coverage is…", "7 times", ["6 times", "0.14 times", "7 per cent"], "₹7,00,000 ÷ ₹1,00,000 = 7. Subtracting the interest first would give 6, but the formula uses operating profit before interest."),
      ask("A firm has debt of ₹6,00,000 and shareholders’ equity of ₹4,00,000. Its debt-to-equity ratio is…", "1.5", ["0.6", "0.67", "10"], "₹6,00,000 ÷ ₹4,00,000 = 1.5. The 0.6 figure divides debt by debt plus equity, which is a different ratio."),
      ask("A firm borrows at 10% and earns 18% on the money. What is the effect on its owners?", "Their return rises, and so does their risk", ["Their return rises and risk is unchanged", "Their return falls", "Nothing changes"], "The 8% spread goes to the owners, so ROE rises. Interest is fixed, however, so a poor year hurts them more."),
      ask("Shareholders’ funds ₹24,00,000 and total assets ₹40,00,000. The proprietary ratio is…", "0.6", ["1.67", "0.42", "0.4"], "₹24,00,000 ÷ ₹40,00,000 = 0.6, so owners paid for 60% of the assets. 1.67 is the inverse."),
    ],
    lens: [],
    reflect: "You are asked to lend your savings to a friend’s shop. Which of the three ratios would you ask to see first, and what would make you refuse?",
    summary: {
      points: [
        "Debt-to-equity = Total debt ÷ Equity (0.42 for Kaveri).",
        "Debt ratio = Total debt ÷ Total assets (0.25).",
        "Interest coverage = EBIT ÷ Interest (7 times).",
        "Debt is not bad in itself; it magnifies both gains and losses.",
      ],
      memory: "Debt against owners, against assets, and profit against interest.",
    },
  },
];

export default lessons;
