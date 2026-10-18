import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "components-of-the-final-accounts",
    name: "What the final accounts contain",
    intro: "The five statements, and the question each one answers.",
    before: {
      q: "A bank asks a company for its accounts before lending. Is one statement enough?",
      choices: [
        { label: "Yes, the profit figure is enough", reveal: "Profit alone hides cash, debts and what the owners have put in. A profitable company can still be short of cash, so the banker needs the other statements." },
        { label: "No, each answers a different question", reveal: "Right. Position, performance, cash and owners’ funds are separate questions, and the notes explain the figures." },
      ],
    },
    lead: "A company’s final accounts have five parts: the balance sheet shows position on a date, the profit and loss account performance, the cash flow statement cash, the statement of changes in equity owners’ funds, and the notes the detail.",
    check: [
      ask("Which statement shows what a company has and owes on a single date?", "The Balance Sheet", ["The Statement of Profit and Loss", "The Cash Flow Statement", "The Statement of Changes in Equity"], "The profit and loss account and the cash flow statement cover a period. Only the balance sheet is a snapshot on one date."),
      ask("A company’s equity is ₹8,00,000 at the start of the year. It earns ₹2,10,000, issues shares for ₹1,50,000 and pays ₹30,000 in dividends. Closing equity is…", "₹11,30,000", ["₹12,60,000", "₹11,90,000", "₹8,30,000"], "₹8,00,000 + ₹2,10,000 + ₹1,50,000 − ₹30,000 = ₹11,30,000. ₹12,60,000 adds the dividend instead of subtracting it."),
      ask("A company earned a profit of ₹2,10,000, yet its cash rose by ₹2,50,000. What does this show?", "Profit and cash are different; other items moved cash too", ["The accounts must contain an error", "Profit and cash always move together", "The balance sheet is wrong"], "Cash also changes with share issues, loans, asset purchases and the build-up of receivables and stock. Profit is measured on the accrual basis, cash on the cash basis."),
    ],
    lens: [
      { pairing: 0, adds: "A list of the heads of the state’s revenue, paired with an accounts office that records income and expenditure.", differs: "It describes a state’s revenue, not a business’s profit, and it is not a statement in the modern sense; the link to a profit and loss account is a reading." },
    ],
    reflect: "If you could ask a company for only one of its five statements before lending it money, which would you ask for, and which question would you still be unable to answer?",
    summary: {
      points: [
        "Balance sheet: position on a date; Assets = Liabilities + Equity.",
        "Profit and loss: performance over a period; Income − Expenses = Profit.",
        "Cash flow: Closing cash = Opening cash + Net change; changes in equity: Opening + Profit + Shares − Dividends = Closing.",
        "Notes explain the figures; Schedule III sets the company layout.",
      ],
      memory: "Position at a date, performance over a period, cash by activity, owners’ funds, and notes.",
    },
  },
  {
    blockId: "from-the-first-entry-to-the-statements",
    name: "From first entry to finished statements",
    intro: "The eight steps from a bill to a signed balance sheet.",
    before: {
      q: "A trial balance agrees. Can the statements be drawn straight from it?",
      choices: [
        { label: "Yes, it is complete", reveal: "Not yet. Year-end adjustments, such as depreciation and outstanding expenses, must still be made, and the trial balance may hide errors." },
        { label: "No, adjustments come first", reveal: "Right. The trial balance is a check; adjustments follow, a second trial balance is made, and then the statements." },
      ],
    },
    lead: "Transactions are journalled, posted to ledgers and checked in a trial balance; at year-end they are adjusted, the statements are drawn, and the board approves them.",
    check: [
      ask("Which book lists transactions in date order as they happen?", "The journal", ["The ledger", "The trial balance", "The balance sheet"], "The ledger groups entries by account. The trial balance is a check on the ledger. The journal is the book of first entry, in date order."),
      ask("In Ravi’s store the cash account has ₹5,00,000 on the debit side and ₹1,00,000 and ₹1,50,000 on the credit side. Its balance is…", "₹2,50,000 debit", ["₹7,50,000 debit", "₹2,50,000 credit", "₹5,00,000 debit"], "Debits less credits: ₹5,00,000 − ₹2,50,000 = ₹2,50,000, a debit balance because cash is an asset."),
      ask("A repair of ₹20,000 is debited to Buildings as if it were an addition. The trial balance still agrees. This is an error of…", "Principle", ["Omission", "Commission", "Compensation"], "Both sides of the entry were recorded, so nothing was omitted, and the right kind of account was not confused. The transaction was put in the wrong class: an expense treated as an asset."),
    ],
    lens: [],
    reflect: "Think of the records your family keeps for the year, such as bills, bank statements and receipts. Which step of the cycle would be hardest to do well, and why?",
    summary: {
      points: [
        "Steps: record, journal, ledger, trial balance, adjust, adjusted trial balance, statements, approval.",
        "Steps 1 to 4 run through the year; 5 to 8 at year-end.",
        "The trial balance proves arithmetic only: omission, commission, principle and compensating errors can hide in it.",
        "The board approves the statements, and the statutory auditor reports on them.",
      ],
      memory: "Record, journal, ledger, test, adjust, retest, report, approve.",
    },
  },
  {
    blockId: "year-end-adjustments",
    name: "Year-end adjustments",
    intro: "Depreciation, accruals, prepayments and provisions.",
    before: {
      q: "On 31 March the electricity for March has not been billed. Should the year’s cost include it?",
      choices: [
        { label: "No, it has not been billed", reveal: "The power was used in March, so it is a cost of this year whether or not the bill has come. That is the accrual and matching idea." },
        { label: "Yes, it was used this year", reveal: "Right. An outstanding expense is added, and it appears as a liability at year-end." },
      ],
    },
    lead: "Before the statements are drawn, the books are corrected for wear on assets, costs owed or paid in advance, and debts unlikely to be collected.",
    check: [
      ask("A one-year insurance premium of ₹24,000 was paid on 1 January and fully charged as an expense. At 31 March, the amount to carry forward as prepaid is…", "₹18,000", ["₹6,000", "₹24,000", "₹2,000"], "Nine of twelve months remain: ₹24,000 × 9 ÷ 12 = ₹18,000. ₹6,000 is the part already used."),
      ask("A machine costs ₹7,70,000 and is depreciated at 10% on the written-down value. Depreciation in year two is…", "₹69,300", ["₹77,000", "₹7,700", "₹70,000"], "After year one the machine stands at ₹7,70,000 − ₹77,000 = ₹6,93,000, and 10% of that is ₹69,300. ₹77,000 is the year-one charge."),
      ask("Debtors are ₹5,00,000 and 4% are expected to prove bad. Which entry is correct?", "Debit Bad debts ₹20,000; credit Provision for doubtful debts ₹20,000", ["Debit Provision ₹5,00,000; credit Debtors ₹5,00,000", "Debit Cash ₹20,000; credit Bad debts ₹20,000", "Debit Reserve ₹20,000; credit Debtors ₹20,000"], "A provision charges the expected loss to profit and sets up a provision account. No cash moves and no reserve is touched."),
    ],
    lens: [],
    reflect: "Pick a long-lived thing you own, such as a laptop or a motorcycle. How many years would you spread its cost over, and what would change if you guessed longer?",
    summary: {
      points: [
        "Depreciation allocates an asset’s cost over its useful life; it sets no cash aside.",
        "Outstanding expense: add it. Prepaid expense: remove the part for the future.",
        "Accrued income is earned not received; unearned income is received in advance.",
        "A provision is charged to profit for a likely loss; a reserve is profit kept back.",
      ],
      memory: "Wear it, owe it, prepay it, doubt it.",
    },
  },
];

export default lessons;
