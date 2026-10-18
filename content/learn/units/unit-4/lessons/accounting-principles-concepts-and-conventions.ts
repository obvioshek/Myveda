import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "entity-money-measurement-and-cost",
    name: "Entity, money measurement and cost",
    intro: "Whose money is it, what gets counted, and at what price.",
    before: {
      q: "Ravi pays his daughter’s school fee from his shop’s cash. Is that a cost of running the shop?",
      choices: [
        { label: "Yes, the cash left the shop", reveal: "The cash did leave, but the fee is Ravi’s own spending. The accounts keep the owner and the business apart, so it is a drawing, not a shop expense." },
        { label: "No, it is Ravi’s own spending", reveal: "Right. The books treat the shop as separate from its owner, so this is a drawing that lowers his capital." },
      ],
    },
    lead: "The books treat a business as separate from its owner, record only what has a money value, and show assets at what was paid for them.",
    check: [
      ask("Ravi pays his daughter’s school fee of ₹5,000 from the shop’s cash. Which concept says this is not a business expense?", "Business entity", ["Money measurement", "Cost", "Matching"], "Money measurement is about what can be valued in money; the fee has a money value. What matters here is that it is the owner’s spending, which entity keeps apart from the shop’s."),
      ask("A machine bought for ₹5,00,000 could now be sold for ₹6,50,000. Under the cost concept the books show it at…", "₹5,00,000, less depreciation", ["₹6,50,000", "₹6,50,000, with ₹1,50,000 counted as profit", "Whatever a valuer says each year"], "Cost is what was paid, shown less depreciation over time. A higher market value is not recorded, and it is not profit until the asset is sold."),
      ask("Ravi puts ₹5,00,000 into his shop and later draws ₹5,000 for personal use. What is his capital in the shop now?", "₹4,95,000", ["₹5,05,000", "₹5,00,000", "₹5,000"], "A drawing lowers capital. ₹5,05,000 adds it, ₹5,00,000 ignores it, and ₹5,000 is the drawing itself."),
    ],
    lens: [],
    reflect: "Think of something important to a business you know that no balance sheet shows, such as a skilled worker or a loyal customer. Why can’t it be recorded?",
    summary: {
      points: [
        "Entity: the business is separate from its owner. Owner’s money put in is capital; owner’s withdrawals are drawings.",
        "Money measurement: only what has a reliable money value is recorded.",
        "Cost: assets are shown at what was paid, not at later market value.",
        "Cost is objective but understates old assets in inflation.",
      ],
      memory: "Entity: the owner stands apart. Money: only what a rupee can measure. Cost: what you paid.",
    },
  },
  {
    blockId: "dual-aspect-and-the-accounting-equation",
    name: "Dual aspect and the accounting equation",
    intro: "Why every entry has two sides, and why the books balance.",
    before: {
      q: "Ravi buys ₹2,00,000 of goods on credit. No cash moves. Do the books change?",
      choices: [
        { label: "No, no cash moved", reveal: "They do change. Stock rises by ₹2,00,000 and so does what he owes the supplier. Accounting records obligations as well as cash." },
        { label: "Yes, two things change", reveal: "Right. An asset (stock) and a liability (creditors) both rise by ₹2,00,000, so the two sides still agree." },
      ],
    },
    lead: "Every transaction has two sides of equal size, so assets always equal liabilities plus capital.",
    check: [
      ask("Which of these makes assets and liabilities both rise?", "Buying goods on credit", ["Paying a supplier in cash", "Buying furniture for cash", "The owner withdrawing cash"], "Furniture for cash swaps one asset for another. Paying a supplier lowers an asset and a liability. A withdrawal lowers an asset and capital."),
      ask("Ravi owes his supplier ₹2,00,000 and pays ₹1,50,000. What does he owe now?", "₹50,000", ["₹2,00,000", "₹3,50,000", "₹1,50,000"], "Paying reduces the amount owed: ₹2,00,000 − ₹1,50,000 = ₹50,000. ₹3,50,000 adds the payment, and ₹1,50,000 is the amount paid."),
      ask("A trial balance agrees. Does that prove every entry is correct?", "No; an entry posted to the wrong account still balances", ["Yes; if the two sides agree, nothing can be wrong", "Yes, provided the business has no liabilities", "Yes, but only for a company"], "Debits equal credits even when an amount goes to the wrong account or a whole transaction is left out. The check shows arithmetic, not truth."),
    ],
    lens: [],
    reflect: "Pick a purchase you made recently. What were its two sides: what did you gain, and what did you give up or owe?",
    summary: {
      points: [
        "Dual aspect: every transaction has a debit and an equal credit.",
        "Assets = Liabilities + Capital, and it holds after every transaction.",
        "Debit increases assets and expenses; credit increases liabilities, capital and income.",
        "Balanced books can still hold wrong entries.",
      ],
      memory: "Two sides, one amount: debit equals credit.",
    },
  },
  {
    blockId: "going-concern-and-periodicity",
    name: "Going concern and periodicity",
    intro: "Why assets are spread over their lives, and why accounts come in yearly slices.",
    before: {
      q: "A mill expects to run for decades. Should its machine be shown at what a scrap dealer would pay today?",
      choices: [
        { label: "Yes, that is its true value", reveal: "The mill is not selling the machine; it is using it. Showing scrap value would treat a working business as if it were closing." },
        { label: "No, it is used, not sold", reveal: "Right. The accounts assume the business goes on, so the machine’s cost is spread over the years it is used." },
      ],
    },
    lead: "Accounts assume the business will carry on, so they spread the cost of assets over their use, and they cut its long life into equal periods so progress can be measured.",
    check: [
      ask("Why does a firm depreciate a machine over ten years instead of valuing it at what a scrap dealer would pay today?", "Going concern: it will use the machine, not sell it", ["Periodicity: accounts must be one year long", "Money measurement: scrap value cannot be measured", "Conservatism: always value at the lowest figure"], "Periodicity decides the length of the reporting period, not how an asset is valued. The reason here is that the firm expects to carry on and use the machine."),
      ask("A machine costs ₹7,00,000, plus ₹70,000 to transport and install. Its life is ten years with no scrap value. Straight-line depreciation a year is…", "₹77,000", ["₹70,000", "₹7,700", "₹7,70,000"], "The cost is ₹7,70,000, including transport and installation, and ₹7,70,000 ÷ 10 = ₹77,000. ₹70,000 leaves out the ₹70,000 of extra cost."),
      ask("A company is likely to close within months. How must its accounts be prepared?", "On a different basis from going concern, with that basis disclosed", ["On the usual going-concern basis, with no comment", "They need not be prepared", "On the cash basis"], "Going concern is an assumption, not a promise. When it fails the accounts change basis, and the reader must be told."),
    ],
    lens: [
      { pairing: 0, adds: "Accounts at fixed times and in a fixed form, kept by an accounts office that penalised officials who did not present them.", differs: "The accounts office served a king’s treasury, not a business, and the passage does not describe yearly business reporting; the link is to the habit of fixed-time accounts." },
    ],
    reflect: "Your household has a long life too. What would you count differently if you measured your finances monthly, yearly or only at the end of your life?",
    summary: {
      points: [
        "Going concern: the business is assumed to continue, so assets are valued for use and depreciated.",
        "Periodicity: a business’s life is divided into equal periods; in India the financial year is 1 April to 31 March.",
        "If going concern fails, the basis changes and must be disclosed.",
        "Periods force estimates, and the year-end cut-off matters.",
      ],
      memory: "Going concern: the business goes on, so spread the cost. Periodicity: cut the life into years.",
    },
  },
  {
    blockId: "realisation-accrual-and-matching",
    name: "Realisation, accrual and matching",
    intro: "Count a sale when it is earned and a cost when it is used, not when cash moves.",
    before: {
      q: "A sale is delivered on 28 March and paid for on 10 April. Which year’s income is it?",
      choices: [
        { label: "The year the cash arrives", reveal: "That is the cash view. Accrual counts the sale when it is earned, which was on delivery in March." },
        { label: "The year it was delivered", reveal: "Right. Under realisation and accrual, revenue belongs to the period in which it was earned." },
      ],
    },
    lead: "Revenue is counted when earned and costs when used, and each period’s costs are matched with the revenue they helped earn.",
    check: [
      ask("A sale is delivered on 28 March and paid for on 10 April, in a year ending 31 March. Under the accrual concept it is…", "Revenue of the year ending 31 March", ["Revenue of the next year, when cash arrives", "Revenue only once the whole bill is paid", "Not revenue until the customer has used the goods"], "Accrual counts revenue when it is earned, not when cash is received. Delivery in March makes it that year’s revenue."),
      ask("Meera buys 1,000 sarees at ₹800 and sells 800 at ₹1,200. The cost of goods sold, matched to these sales, is…", "₹6,40,000", ["₹8,00,000", "₹9,60,000", "₹1,60,000"], "Only the 800 sarees sold are matched with the sales: 800 × ₹800 = ₹6,40,000. ₹8,00,000 is all the purchases, and ₹1,60,000 is the unsold stock carried forward."),
      ask("Sales are ₹9,60,000, cost of goods sold ₹6,40,000, and a year’s rent ₹1,20,000, of which ₹10,000 is unpaid. What is the accrual profit?", "₹2,00,000", ["₹2,10,000", "₹3,20,000", "₹40,000"], "₹9,60,000 − ₹6,40,000 − ₹1,20,000 = ₹2,00,000. ₹2,10,000 counts only the rent paid, ₹3,20,000 leaves rent out, and ₹40,000 deducts all purchases, not just those sold."),
    ],
    lens: [],
    reflect: "Think of a shop you know that sells on credit. Why might it look profitable on paper and still be short of cash?",
    summary: {
      points: [
        "Realisation: revenue is counted when earned, not when cash is received.",
        "Accrual: revenues and costs are counted when they occur, in the period they belong to.",
        "Matching: set each period’s costs against the revenue they earned.",
        "Profit is not cash; credit sales and unsold stock tie cash up.",
      ],
      memory: "Earn it, count it. Use it, count it. Match cost to the sale.",
    },
  },
  {
    blockId: "accounting-conventions",
    name: "The four conventions",
    intro: "Disclosure, consistency, conservatism and materiality.",
    before: {
      q: "A firm switches its depreciation method and profit jumps. Should readers be told?",
      choices: [
        { label: "No, the books are the firm’s business", reveal: "Accounts exist for readers such as lenders and investors. A change that moves profit must be disclosed so they can judge it." },
        { label: "Yes, and the reason too", reveal: "Right. Consistency says methods should not change without cause, and disclosure says a change and its effect must be shown." },
      ],
    },
    lead: "Conventions are the long-standing habits that keep accounts honest and comparable: tell all that matters, stay consistent, be cautious, and leave out trivia.",
    check: [
      ask("A trader’s stock cost ₹2,40,000 and could now be sold, after costs, for ₹2,10,000. At what value does it go into the accounts?", "₹2,10,000", ["₹2,40,000", "₹2,25,000", "₹30,000"], "The rule is the lower of cost and net realisable value, so ₹2,10,000, and the loss of ₹30,000 is recognised now."),
      ask("The same stock could instead be sold, after costs, for ₹2,70,000. At what value does it go into the accounts?", "₹2,40,000", ["₹2,70,000", "₹30,000", "₹2,55,000"], "Gains are not anticipated. The stock stays at cost, and the ₹30,000 appears only when it is sold."),
      ask("A company changes its depreciation method to show a higher profit and says nothing. Which convention is broken most clearly?", "Consistency, because the method changed without a stated reason", ["Materiality", "Conservatism, because profit went up", "Business entity"], "Conservatism is about recognising losses early, not about a method change. A change without reason or disclosure breaks consistency, and disclosure too."),
    ],
    lens: [],
    reflect: "Which of the four conventions would matter most to you if you were a bank deciding whether to lend to a firm, and why?",
    summary: {
      points: [
        "Disclosure: show all material facts, such as contingent liabilities in the notes.",
        "Consistency: use the same methods each year; justify and disclose changes.",
        "Conservatism: anticipate no profit, provide for all possible losses; stock at lower of cost and net realisable value.",
        "Materiality: detail only what could change a user’s decision.",
      ],
      memory: "Disclose it. Keep it consistent. Provide for losses, not for gains. Ignore the trivial.",
    },
  },
  {
    blockId: "accounting-standards-in-india",
    name: "Accounting standards in India",
    intro: "Who sets the rules, and the difference between AS and Ind AS.",
    before: {
      q: "Two firms buy identical machines and write them off over five and twenty years. Can their profits be compared?",
      choices: [
        { label: "Yes, profit is profit", reveal: "Not reliably. Different treatments make profits differ even when the business is identical, which is why standards exist." },
        { label: "No, the treatments differ", reveal: "Right. Standards fix how similar items are recorded, measured and shown, so that firms can be compared." },
      ],
    },
    lead: "Accounting standards are official rules for how items are recorded and shown; ICAI recommends them, the Government notifies them, and India has two sets, AS and Ind AS.",
    check: [
      ask("Which pair deals with cash flow statements?", "AS 3 and Ind AS 7", ["AS 9 and Ind AS 115", "AS 2 and Ind AS 116", "AS 19 and Ind AS 110"], "AS 9 and Ind AS 115 are revenue, AS 2 is inventories and Ind AS 116 is leases, and AS 19 is leases while Ind AS 110 is consolidation."),
      ask("After ICAI recommends a standard for companies, who notifies it?", "The Central Government, after consulting NFRA", ["ICAI alone", "SEBI", "The Reserve Bank of India"], "Under section 133 of the Companies Act, 2013, the Central Government prescribes the standards. ICAI recommends and NFRA is consulted."),
      ask("A listed company asks which set of standards it must follow. The answer is…", "Ind AS", ["AS, because AS is mandatory for every company", "Neither; listed companies follow only SEBI rules", "Either, by choice"], "Ind AS apply to listed companies and to larger unlisted ones; other companies follow AS."),
    ],
    lens: [],
    reflect: "Why might a small firm and a large listed company be given different sets of rules for the same accounting question?",
    summary: {
      points: [
        "Standards fix how items are recorded, measured, shown and disclosed.",
        "ICAI recommends; the Central Government notifies under section 133 of the Companies Act, 2013, after consulting NFRA.",
        "AS 2, 3, 9, 19, 20 and Ind AS 109, 110, 113, 115, 116 are the numbers to recall.",
        "Ind AS follow IFRS; they apply to listed and larger unlisted companies.",
      ],
      memory: "ICAI recommends, the Government notifies. AS for most, Ind AS for the large and listed.",
    },
  },
];

export default lessons;
