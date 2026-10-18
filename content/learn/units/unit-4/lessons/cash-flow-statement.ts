import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "cash-and-the-three-activities",
    name: "Cash and the three activities",
    intro: "Operating, investing and financing, and what is left out.",
    before: {
      q: "A company shows a profit of ₹50 lakh but cannot pay its wages. How can that happen?",
      choices: [
        { label: "The accounts must be wrong", reveal: "Not necessarily. Profit counts sales when made, not when paid, so the money may be tied up in stock and unpaid bills." },
        { label: "Profit is not the same as cash", reveal: "Right. Sales on credit, stock bought and loans repaid all use cash that profit does not show." },
      ],
    },
    lead: "A cash flow statement sorts every cash flow into operating, investing or financing activity. Their total is the change in cash and cash equivalents; non-cash transactions are left out.",
    check: [
      ask("Which is a financing activity?", "Payment of a dividend", ["Cash sale of goods", "Purchase of a machine", "Interest received on an investment"], "Dividends are paid to the owners, so they belong to financing. A cash sale is operating; buying a machine and interest received are investing."),
      ask("A machine is bought by issuing shares to the seller. In the cash flow statement it is…", "Left out, as no cash moved", ["An investing outflow", "A financing inflow", "An operating outflow"], "Only transactions that use cash or cash equivalents are included. Non-cash deals are disclosed elsewhere."),
      ask("The purchase of shares is an operating activity for…", "A share broker", ["Every company", "A manufacturer", "A bank customer"], "For a broker, dealing in shares is the main business, so it is operating. For a manufacturer it is investing."),
    ],
    lens: [],
    reflect: "Look at your own bank account for the last month. Which of your cash flows would be operating, which investing and which financing, if your household were a firm?",
    summary: {
      points: [
        "Operating: the main business, including tax; investing: long-term assets; financing: owners and lenders.",
        "Cash includes cash in hand, demand deposits and cash equivalents.",
        "Non-cash transactions are excluded.",
        "The class of an item depends on the firm’s business.",
      ],
      memory: "Operating: the business. Investing: the assets. Financing: owners and lenders.",
    },
  },
  {
    blockId: "direct-and-indirect-method",
    name: "Direct and indirect method",
    intro: "Two routes to the same operating cash flow.",
    before: {
      q: "Profit before tax is ₹2,00,000 and stock rose by ₹40,000. Should the stock rise raise or lower the operating cash?",
      choices: [
        { label: "Raise it, stock is an asset", reveal: "Cash was spent on the stock and is not coming back until it is sold, so operating cash falls." },
        { label: "Lower it, cash is tied up", reveal: "Right. An increase in a current asset is cash locked up in it, so it is subtracted." },
      ],
    },
    lead: "The direct method adds up cash received and paid. The indirect method starts with profit before tax, adds back non-cash charges and adjusts for working capital. For Narmada both give ₹1,80,000 before tax and ₹1,20,000 after.",
    check: [
      ask("Profit before tax is ₹2,00,000 and depreciation ₹40,000. Operating profit before working capital changes is…", "₹2,40,000", ["₹1,60,000", "₹2,00,000", "₹40,000"], "Depreciation was deducted without any cash going out, so it is added back."),
      ask("Operating profit is ₹2,40,000, stock rises ₹40,000, debtors rise ₹30,000 and creditors rise ₹10,000. Cash generated from operations is…", "₹1,80,000", ["₹2,40,000", "₹1,20,000", "₹3,20,000"], "₹2,40,000 − ₹40,000 − ₹30,000 + ₹10,000 = ₹1,80,000. A rise in an asset is subtracted; a rise in a liability is added."),
      ask("Which section differs between the direct and indirect methods?", "Operating activities only", ["Investing activities only", "Financing activities only", "All three sections"], "Investing and financing flows are listed the same way in both. Only the operating section is built differently."),
    ],
    lens: [],
    reflect: "A shop is selling more than ever on credit. Which method would show you the problem faster, and which line would you look at first?",
    summary: {
      points: [
        "Indirect: profit before tax + non-cash items ± working capital changes − tax paid.",
        "Direct: cash received from customers − cash paid to suppliers and employees − tax.",
        "A rise in a current asset lowers cash; a rise in a current liability raises it.",
        "Both methods give the same answer.",
      ],
      memory: "Asset up, cash down. Liability up, cash up.",
    },
  },
  {
    blockId: "fund-flow-versus-cash-flow",
    name: "Fund flow versus cash flow",
    intro: "Why working capital can rise while cash falls.",
    before: {
      q: "Narmada’s working capital rose by ₹50,000 in a year. Did its cash rise too?",
      choices: [
        { label: "Yes, by the same amount", reveal: "No. Cash fell by ₹10,000. The rise was in stock and debtors, which are not cash." },
        { label: "Not necessarily, it fell", reveal: "Right. Cash fell by ₹10,000 while working capital rose, because the rise sat in stock and debtors." },
      ],
    },
    lead: "The fund flow statement explains the change in working capital, the cash flow statement the change in cash. Narmada’s working capital rose ₹50,000 and its cash fell ₹10,000; both statements are right.",
    check: [
      ask("Narmada’s operating cash is ₹1,20,000, investing −₹1,50,000 and financing +₹20,000. The net change in cash is…", "−₹10,000", ["+₹10,000", "−₹1,10,000", "₹0"], "₹1,20,000 − ₹1,50,000 + ₹20,000 = −₹10,000. Opening cash was ₹1,10,000, so closing cash is ₹1,00,000."),
      ask("A firm sells goods on credit. What happens to working capital and to cash this year?", "Working capital rises; cash is unchanged until the debtor pays", ["Both rise", "Working capital falls; cash rises", "Neither changes"], "A debtor is a current asset, so working capital rises. No cash has come in yet."),
      ask("Which statement classifies flows into operating, investing and financing?", "The cash flow statement", ["The fund flow statement", "The schedule of working capital changes", "The trial balance"], "The fund flow statement lists sources and applications. Only the cash flow statement sorts by activity."),
    ],
    lens: [
      { pairing: 0, adds: "Even a narrow income does no harm so long as the outflow is not wider than the inflow.", differs: "The couplet speaks of a ruler’s or household’s treasury. A cash flow statement tests the same inflow-against-outflow idea for a business, but with defined activities and a defined cash fund." },
    ],
    reflect: "If a bank had to choose between lending to a firm with rising working capital and falling cash, and one with steady cash and flat working capital, which would you choose?",
    summary: {
      points: [
        "Funds = working capital; cash = cash and equivalents.",
        "Operating + Investing + Financing = Net change in cash.",
        "Closing cash = Opening cash + Net change.",
        "A firm can grow working capital while its cash falls.",
      ],
      memory: "Funds for the structure, cash for the survival.",
    },
  },
];

export default lessons;
