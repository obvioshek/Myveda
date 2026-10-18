import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "funds-and-the-flow-of-funds",
    name: "Funds and the flow of funds",
    intro: "Why ‘funds’ means working capital, and what makes funds flow.",
    before: {
      q: "A firm pays a creditor ₹50,000 in cash. Have funds flowed out?",
      choices: [
        { label: "Yes, cash left", reveal: "Cash did leave, but a creditor also fell by the same amount. Both are current accounts, so working capital is unchanged." },
        { label: "No, working capital is the same", reveal: "Right. Cash and creditors are both current. Funds flow only when a current and a non-current account are touched." },
      ],
    },
    lead: "In a fund flow statement, ‘funds’ means working capital, current assets less current liabilities. Working capital changes only when a transaction touches one current account and one non-current account.",
    check: [
      ask("In a fund flow statement, the word ‘funds’ means…", "Working capital", ["Cash in hand", "Share capital", "Total assets"], "Cash is only one part of working capital. Funds here is current assets less current liabilities."),
      ask("Which transaction is a flow of funds?", "Equity shares issued for cash", ["Goods bought on credit", "Creditors paid in cash", "A machine bought by issuing shares"], "Cash is current and share capital is non-current. In the other three, both accounts are current (first two) or both non-current (the machine)."),
      ask("A firm buys a plot by issuing shares of the same value to the seller. In a fund flow statement this is…", "Not shown, because both accounts are non-current", ["A source of funds", "An application of funds", "A fall in working capital"], "Land and share capital are both non-current, so working capital is untouched."),
    ],
    lens: [],
    reflect: "Pick a transaction from your own household, such as paying a loan instalment from your salary. Which accounts does it touch, and would it count as a flow of funds?",
    summary: {
      points: [
        "Funds = working capital = current assets − current liabilities.",
        "A flow of funds is a change in working capital.",
        "Only current ↔ non-current transactions move funds.",
        "Cash is only part of working capital; the cash flow statement covers cash.",
      ],
      memory: "Cross the line, move the funds.",
    },
  },
  {
    blockId: "schedule-of-changes-in-working-capital",
    name: "Schedule of changes in working capital",
    intro: "Working out what changed in the current items, with the four rules.",
    before: {
      q: "Creditors rise by ₹10,000. Does working capital go up or down?",
      choices: [
        { label: "Up, the firm has more money", reveal: "A higher creditors figure is a larger claim on the firm, so the net current assets left over are smaller. Working capital falls." },
        { label: "Down, a claim has grown", reveal: "Right. A rise in a current liability lowers working capital by the same amount." },
      ],
    },
    lead: "A rise in a current asset or a fall in a current liability raises working capital; the opposite lowers it. For Narmada, stock and debtors rose ₹70,000, while cash fell ₹10,000 and creditors rose ₹10,000, a net rise of ₹50,000.",
    check: [
      ask("Debtors rise from ₹80,000 to ₹1,10,000. The effect on working capital is…", "An increase of ₹30,000", ["A decrease of ₹30,000", "An increase of ₹1,10,000", "No effect"], "A current asset has risen by ₹30,000, which raises working capital by that amount."),
      ask("Current assets rise by ₹60,000 and current liabilities rise by ₹10,000. Working capital…", "Rises by ₹50,000", ["Rises by ₹70,000", "Falls by ₹50,000", "Rises by ₹60,000"], "₹60,000 − ₹10,000 = ₹50,000. The liabilities’ rise takes away from the assets’ rise."),
      ask("Narmada’s working capital was ₹2,50,000 last year and ₹3,00,000 this year. The schedule’s result is…", "A net increase of ₹50,000", ["A net decrease of ₹50,000", "A net increase of ₹3,00,000", "A net increase of ₹5,50,000"], "₹3,00,000 − ₹2,50,000 = ₹50,000. The sources and applications statement must reach the same figure."),
    ],
    lens: [],
    reflect: "If working capital rises but the extra is all in unsold stock, would you call that good news? What else would you look at?",
    summary: {
      points: [
        "Current asset up → working capital up; current asset down → down.",
        "Current liability up → working capital down; current liability down → up.",
        "The schedule uses current items only, for two balance sheet dates.",
        "Its net result must equal the gap between sources and applications.",
      ],
      memory: "Assets up, working capital up. Liabilities up, working capital down.",
    },
  },
  {
    blockId: "sources-and-applications-of-funds",
    name: "Sources and applications of funds",
    intro: "Where long-term money came from, and where it went.",
    before: {
      q: "A firm adds back depreciation of ₹40,000 to find funds from operations. Does depreciation bring in funds?",
      choices: [
        { label: "Yes, it is a source", reveal: "No. Depreciation used no working capital when it was deducted. It is added back only to undo the deduction." },
        { label: "No, it is just added back", reveal: "Right. The funds come from sales. Depreciation is added back because it was deducted without using any funds." },
      ],
    },
    lead: "The statement sets long-term sources (funds from operations, shares, loans, sale of assets) against applications (assets bought, loans repaid, dividends). The gap is the change in working capital. Narmada: ₹3,00,000 against ₹2,50,000, a ₹50,000 rise.",
    check: [
      ask("Profit before tax is ₹2,00,000, depreciation ₹40,000 and tax paid ₹60,000. Funds from operations are…", "₹1,80,000", ["₹2,40,000", "₹1,40,000", "₹1,00,000"], "₹2,00,000 + ₹40,000 − ₹60,000 = ₹1,80,000. ₹2,40,000 ignores the tax."),
      ask("Which of these is an application of funds?", "Repayment of a long-term loan", ["Issue of equity shares", "Sale of an old machine", "Funds from operations"], "The other three bring funds in. Repaying a long-term loan sends long-term money out."),
      ask("Sources are ₹3,00,000 and applications are ₹2,50,000. The statement shows…", "An increase in working capital of ₹50,000", ["A decrease in working capital of ₹50,000", "A profit of ₹50,000", "A cash balance of ₹50,000"], "When sources exceed applications, the extra has gone into working capital."),
    ],
    lens: [],
    reflect: "If you were reading the statement of a firm that funded a long-term machine out of short-term borrowing, what would you expect to see, and why would a lender worry?",
    summary: {
      points: [
        "Sources: funds from operations, issue of shares or debentures, long-term loans, sale of fixed assets.",
        "Applications: purchase of fixed assets, repaying loans, dividends, losses.",
        "Sources − Applications = change in working capital.",
        "Add back non-fund charges such as depreciation; they are not sources.",
      ],
      memory: "Long-term in is a source, long-term out is an application.",
    },
  },
];

export default lessons;
