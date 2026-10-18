import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "net-income-and-net-operating-income-theories",
    name: "Net income and net operating income theories",
    intro: "Two opposite answers on whether debt changes a firm’s value.",
    before: {
      q: "Debt costs 10% and equity 15%. Should a firm use as much debt as it can?",
      choices: [
        { label: "Yes, it is cheaper", reveal: "That is the net income view. The net operating income view says the saving is cancelled when shareholders demand more for the added risk." },
        { label: "Not if equity gets riskier", reveal: "Right. That is the net operating income view: debt up, Ke up, Ko unchanged." },
      ],
    },
    lead: "NI theory: Ke and Kd fixed, so more debt lowers Ko and raises value. NOI theory: Ko fixed, so value = EBIT ÷ Ko whatever the debt.",
    check: [
      ask("Under the NOI theory, EBIT is ₹6,00,000 and Ko is 12%. The value of the firm is…", "₹50,00,000", ["₹72,00,000", "₹6,00,000", "₹40,00,000"], "V = EBIT ÷ Ko = ₹6,00,000 ÷ 0.12 = ₹50,00,000. Dividing by 15% would give the ₹40,00,000 of the NI no-debt case."),
      ask("Which is the right order of logic under the NI approach?", "Ke and Kd are constant; leverage lowers Ko; lower Ko raises value; value is maximised by maximum debt", ["Leverage raises Ko; value falls; Ke rises", "Value is constant; Ko rises; Kd rises", "Ke rises; Ko is constant; value is constant"], "NI assumes constant costs, so the cheaper debt lowers the average cost and so raises value."),
      ask("Under NOI, debt rises from nil to ₹20,00,000, with Ko 12% and Kd 10%, and equity falls to ₹30,00,000. Ke is…", "About 13.3%", ["12%", "10%", "15%"], "Earnings for equity are ₹6,00,000 − ₹2,00,000 = ₹4,00,000, and ₹4,00,000 ÷ ₹30,00,000 = 13.3%."),
    ],
    lens: [],
    reflect: "If a lender charged 10% up to ₹20 lakh and 14% beyond, which theory would the pattern support?",
    summary: {
      points: [
        "NI: debt up → Ko down → value up; in theory 100% debt.",
        "NOI: debt up → Ke up → Ko constant → value constant; V = EBIT ÷ Ko.",
        "Both rest on assumptions about investors, not proof.",
        "Real firms lie between them.",
      ],
      memory: "NI: more debt, more value. NOI: more debt, same value.",
    },
  },
  {
    blockId: "modigliani-miller-and-leverage-irrelevance",
    name: "Modigliani–Miller and leverage irrelevance",
    intro: "Why the mix does not matter without taxes, and what changes with them.",
    before: {
      q: "An investor wants the return of a levered share but only unlevered ones exist. Is she stuck?",
      choices: [
        { label: "Yes, she cannot get it", reveal: "She can borrow herself and buy more of the unlevered share. That ‘homemade leverage’ replicates the levered return." },
        { label: "No, she can borrow herself", reveal: "Right. Investors can create leverage on their own, so they will not pay extra for a firm to do it." },
      ],
    },
    lead: "Proposition I: with no taxes, VL = VU. Proposition II: Ke = Ko + (Ko − Kd) × D/E. With taxes, VL = VU + T × D.",
    check: [
      ask("Ko = 12%, Kd = 10%, D/E = 0.67. By Proposition II, Ke is…", "About 13.3%", ["12%", "14%", "10%"], "12% + (12% − 10%) × 0.67 = 13.3%."),
      ask("An unlevered firm is worth ₹50,00,000. With tax at 25% and permanent debt of ₹20,00,000, the levered firm is worth…", "₹55,00,000", ["₹50,00,000", "₹70,00,000", "₹45,00,000"], "The tax shield is 25% × ₹20,00,000 = ₹5,00,000, so VL = ₹50,00,000 + ₹5,00,000."),
      ask("Without taxes, the M–M theory says that the WACC…", "Stays constant at any debt-equity ratio", ["Falls steadily as debt rises", "Rises steadily as debt rises", "Is zero"], "Cheaper debt is offset exactly by the dearer equity, so the overall cost is unchanged."),
    ],
    lens: [],
    reflect: "A firm’s owners say, ‘debt is 10% and equity 15%, so more debt must cut our cost.’ What does Proposition II say is missing?",
    summary: {
      points: [
        "No taxes: VL = VU; capital structure is irrelevant.",
        "Ke rises with leverage: Ke = Ko + (Ko − Kd) × D/E.",
        "With taxes: VL = VU + T × D; debt adds value via the interest tax shield.",
        "Homemade leverage: investors can borrow themselves, so the firm’s mix adds nothing.",
      ],
      memory: "Without taxes: irrelevant. With taxes: debt gives a shield.",
    },
  },
  {
    blockId: "trade-off-pecking-order-agency-and-market-timing",
    name: "Trade-off, pecking order, agency and market timing",
    intro: "Four explanations for the mixes real firms choose.",
    before: {
      q: "A profitable firm has little debt, though debt gives a tax saving. Is it making a mistake?",
      choices: [
        { label: "Yes, it is wasting a tax saving", reveal: "Maybe, but pecking order theory says a firm with plenty of retained profit has no need to borrow." },
        { label: "Not necessarily", reveal: "Right. Firms with enough internal funds often avoid both debt and new equity." },
      ],
    },
    lead: "Trade-off balances the tax shield against distress costs. Pecking order prefers internal funds, then debt, then equity. Agency cost uses debt to discipline managers. Market timing issues equity when it is overvalued.",
    check: [
      ask("Under the pecking order theory, new equity is used…", "Last, when internal funds and debt are not enough", ["First, to avoid debt", "Only to pay dividends", "In equal proportion to debt"], "Managers know more than outsiders, so a new issue sends a negative signal. Retained earnings come first, then debt."),
      ask("The trade-off theory sets the optimal debt ratio where…", "The marginal tax benefit equals the marginal cost of distress", ["Debt is 100%", "There is no debt", "Equity cost equals debt cost"], "Beyond that point, each extra rupee of debt costs more than the tax it saves."),
      ask("According to the agency cost theory, debt’s fixed payments…", "Discipline managers, but monitoring costs offset some of the gain", ["Remove all conflicts", "Have no effect on managers", "Always raise the share price"], "Debt takes cash out of managers’ control, but covenants and risk-shifting add costs."),
    ],
    lens: [
      { pairing: 0, adds: "Officials who handle funds will find it hard not to take some, so audits, rotation of posts and an accounts office are prescribed.", differs: "The text is about the king’s officials, not company managers. The link to the way debt disciplines managers in agency cost theory is a reading." },
    ],
    reflect: "A family firm has no outside shareholders and a trusted manager. Which of the four theories matters least to it, and which matters most?",
    summary: {
      points: [
        "Trade-off: tax shield ↔ distress costs.",
        "Pecking order: internal funds → debt → equity (Myers and Majluf).",
        "Agency cost: debt discipline ↔ monitoring costs and conflicts.",
        "Market timing: issue equity when overvalued, buy back when undervalued.",
      ],
      memory: "Trade off the shield, peck from inside, discipline with debt, time the market.",
    },
  },
];

export default lessons;
