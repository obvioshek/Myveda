import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "why-accounting-standards-matter",
    name: "Why accounting standards matter, and who makes them",
    intro: "Common rules, two sets in India, and who does what.",
    before: {
      q: "Two honest firms ship goods on 3 April but invoice them on 28 March. One counts the sale this year, the other next year. Who is right?",
      choices: [
        { label: "Both can be", reveal: "Without a rule, both can be defended. A standard on revenue says when a sale counts, so firms report alike." },
        { label: "Only a standard can say", reveal: "Right. Accounting standards fix when and how items are recorded so that similar events are treated the same way." },
      ],
    },
    lead: "Accounting standards give uniformity, comparability, transparency and guidance for auditors. India has two sets, AS and Ind AS. Ind AS are converged with IFRS: in harmony with them, not a copy. ICAI drafts, NFRA advises and the Ministry of Corporate Affairs notifies.",
    check: [
      ask("‘Convergence’ with IFRS means…", "Aiming for harmony with IFRS, with changes where Indian conditions need them", ["Copying IFRS word for word", "Ignoring IFRS", "Adopting IFRS only for banks"], "Convergence is not complete adoption. India kept the right to modify a standard where necessary."),
      ask("Who notifies Ind AS as rules?", "The Ministry of Corporate Affairs", ["The IASB", "A stock exchange", "The company’s auditor"], "ICAI drafts and NFRA advises, but the Ministry of Corporate Affairs notifies the standards."),
      ask("Which is a main purpose of accounting standards?", "Comparability of statements across firms and years", ["To raise firms’ profits", "To remove the need for audits", "To fix share prices"], "Standards do not change profit or replace audit. They make accounts comparable and reliable."),
    ],
    lens: [],
    reflect: "If you were an investor comparing two firms that each followed a different set of rules, what would you need to check first?",
    summary: {
      points: [
        "Reasons: uniformity, transparency, global alignment, fraud prevention, guidance for auditors.",
        "Two sets in India: AS (2006 Rules) and Ind AS (2015 Rules, converged with IFRS).",
        "Convergence means harmony, not copying.",
        "ICAI drafts, NFRA advises, the Ministry notifies.",
      ],
      memory: "ICAI drafts, NFRA advises, MCA notifies; convergence is harmony, not copying.",
    },
  },
  {
    blockId: "ind-as-ifrs-and-phased-adoption",
    name: "Ind AS, IFRS and the phases of adoption",
    intro: "How Indian and international standards differ, and who came in when.",
    before: {
      q: "A foreign investor wants to compare an Indian company with a European one. What would help most?",
      choices: [
        { label: "Both using IFRS-based rules", reveal: "Right. That is the point of converging Indian standards with IFRS: accounts can be read side by side." },
        { label: "Both using the same currency", reveal: "Currency can be converted. The harder problem is that different rules measure the same event differently." },
      ],
    },
    lead: "IFRS are issued by the IASB. Ind AS are notified by the Ministry of Corporate Affairs and apply in phases from 1 April 2016, by net worth and listing. In India the balance sheet format is set by Schedule III.",
    check: [
      ask("Who issues IFRS?", "The International Accounting Standards Board", ["The Ministry of Corporate Affairs", "ICAI alone", "NFRA"], "The IASB issues IFRS under the oversight of the IFRS Foundation. The Ministry of Corporate Affairs notifies Ind AS."),
      ask("Which sets the layout of a company’s balance sheet in India?", "Schedule III of the Companies Act", ["IFRS 1", "The company’s own choice", "A stock exchange"], "Ind AS companies follow Division II of Schedule III."),
      ask("Ind AS were first made mandatory for the largest companies from…", "1 April 2016", ["1 April 2006", "1 April 2020", "1 April 2012"], "Phase I began on 1 April 2016, with further phases in later years. Check the current rules for the limits."),
    ],
    lens: [],
    reflect: "Why might a small company prefer to stay with the older Accounting Standards even if it could adopt Ind AS?",
    summary: {
      points: [
        "IFRS: IASB, global. Ind AS: notified by the Ministry, India only.",
        "Both require a statement of compliance; Indian layouts come from Schedule III.",
        "Phases started on 1 April 2016, by net worth and listing; thresholds have been amended.",
        "Ind AS use more fair values and estimates, so they depend more on judgement.",
      ],
      memory: "IASB makes IFRS; the Ministry notifies Ind AS; companies join by phase.",
    },
  },
  {
    blockId: "main-standards-and-their-counterparts",
    name: "The main standards and their counterparts",
    intro: "Which standard covers which topic.",
    before: {
      q: "A question names ‘AS 29’ and another ‘Ind AS 37’. Are they about the same thing?",
      choices: [
        { label: "No, different topics", reveal: "They are the same topic: provisions, contingent liabilities and contingent assets, in the old and new series." },
        { label: "Yes, the same topic", reveal: "Right. Ind AS 37 and AS 29 both cover provisions and contingencies, though their detail differs." },
      ],
    },
    lead: "Most Ind AS have an AS on the same topic: Ind AS 2 and AS 2 (inventories), 7 and AS 3 (cash flows), 16 and AS 10 (property, plant and equipment), 33 and AS 20 (EPS), 36 and AS 28 (impairment), 37 and AS 29 (provisions), 115 and AS 9 (revenue), 116 and AS 19 (leases).",
    check: [
      ask("Which Ind AS deals with cash flows?", "Ind AS 7", ["Ind AS 2", "Ind AS 16", "Ind AS 33"], "Ind AS 7 is the Statement of Cash Flows, matching AS 3."),
      ask("Ind AS 36 and AS 28 both deal with…", "Impairment of assets", ["Inventories", "Leases", "Earnings per share"], "They require an asset to be written down if it is carried at more than it can recover."),
      ask("A machine is in the books at ₹40 lakh but can recover only ₹32 lakh. The impairment loss is…", "₹8 lakh", ["₹32 lakh", "₹40 lakh", "Nil"], "₹40 lakh − ₹32 lakh = ₹8 lakh, the amount carried above what can be recovered."),
    ],
    lens: [],
    reflect: "Why can a table that pairs old and new standards by topic hide real differences between them?",
    summary: {
      points: [
        "Ind AS 2/AS 2, 7/AS 3, 10/AS 4, 16/AS 10, 19/AS 15, 33/AS 20, 36/AS 28, 37/AS 29, 38/AS 26.",
        "Ind AS 115 matches AS 9 (revenue); Ind AS 116 matches AS 19 (leases).",
        "Ind AS 109, 110 and 113 have no full AS counterpart.",
        "Always check a pairing against the standard; some notes print wrong pairs.",
      ],
      memory: "Same topic, different number, different content.",
    },
  },
];

export default lessons;
