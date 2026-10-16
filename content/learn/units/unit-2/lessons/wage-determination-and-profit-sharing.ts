import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "wage-salary-and-the-wage-concepts",
    name: "Wage, salary and the wage concepts",
    intro: "Wage and salary, and the minimum, fair and living wage.",
    before: {
      q: "Is a minimum wage the same as a wage just enough to survive?",
      choices: [
        { label: "Yes", reveal: "Not quite. The minimum wage must also keep the worker efficient and allow some education, medical care and amenities." },
        { label: "No", reveal: "Right. The minimum wage covers more than bare survival: efficiency, and some education and medical care." },
      ],
    },
    lead: "Minimum, fair and living wage form a ladder: the minimum is the floor, the fair wage lies above it up to the industry's capacity to pay, and the living wage is the aim.",
    check: [
      ask("In the Committee on Fair Wages' scheme, which wage lies between the minimum wage and the living wage?", "The fair wage", ["The subsistence wage", "The real wage", "The take-home wage"], "The fair wage starts at the minimum and stops at the industry's capacity to pay. The subsistence wage belongs to a wage theory, not to this scheme."),
      ask("A union says a mill's pay cannot give a family frugal comfort, schooling for children and security in old age. Which standard is it using?", "The living wage", ["The minimum wage", "The fair wage", "The dearness allowance"], "Frugal comfort and insurance against old age mark the living wage. The minimum wage is the tempting answer, but it covers basic needs and efficiency, with only some education and medical care."),
      ask("A wage board is fixing a fair wage for the cement industry. Which fact sets the upper limit it can reach?", "The industry's capacity to pay", ["The cost of a family's bare food, clothing and shelter", "The highest wage paid anywhere in the country", "The wage that workers say they would like"], "A fair wage rises no higher than the industry can pay. The cost of bare necessities is the lower limit, which is the minimum wage."),
    ],
    lens: [
      { pairing: 0, adds: "Enough for the family, with something over for a guest.", differs: "Kabir prays for modest means. A living wage is a standard that an employer or the law sets, and it has to be paid for out of what the firm can bear." },
    ],
    reflect: "Which of the eight influences on pay matters most in the job you know best, and which matters least?",
    summary: {
      points: [
        "A wage is pay by the hour, day or week; a salary is a fixed monthly or annual sum, whatever hours are worked.",
        "Minimum wage: the floor, owed whatever the industry's capacity to pay. Fair wage: between minimum and living. Living wage: frugal comfort, an aim.",
        "Eight influences on pay: ability to pay, labour supply and demand, prevailing rate, cost of living, the living-wage idea, productivity, union power, job requirements.",
        "The concepts say what a wage should be; the theories explain what sets it.",
        "In India the Code on Wages, 2019 consolidates four older laws, including minimum wages and bonus.",
      ],
      memory: "Minimum is the floor, living is the aim, fair sits between.",
    },
  },
  {
    blockId: "theories-of-wage-determination",
    name: "Theories of wage determination",
    intro: "Seven explanations of what sets wages, and who gave them.",
    before: {
      q: "Does a higher wage always mean a firm will hire the same number of people?",
      choices: [
        { label: "Yes", reveal: "Marginal productivity theory says otherwise: at a higher wage, fewer workers are worth hiring." },
        { label: "No", reveal: "Right. A firm hires only while the last worker adds at least the wage, so a higher wage means fewer workers." },
      ],
    },
    lead: "Subsistence, wage fund, surplus value, residual claimant, marginal productivity, bargaining and behavioural theories each explain part of wages, and none explains all of it.",
    check: [
      ask("Who is usually credited with the wage fund theory?", "J. S. Mill, building on Adam Smith and earlier writers", ["David Ricardo", "Karl Marx", "Francis A. Walker"], "Mill set out the wage fund doctrine in 1848. Ricardo is the name tied to the subsistence idea, so he is the tempting wrong answer."),
      ask("The going wage is ₹600 a day. A fifth tailor would add ₹500 of output a day. What does marginal productivity theory advise?", "Do not hire: the fifth tailor adds less than the wage", ["Hire: any extra output raises total sales", "Hire, because the first tailor added more than ₹600", "Raise the wage to ₹500 and then hire"], "The firm hires while the last worker adds at least the wage, and ₹500 is below ₹600. The first tailor's higher output does not matter; only the last worker counts."),
      ask("A fixed fund of ₹60 lakh a month pays 300 workers. 100 more workers join and the fund stays the same. What average wage does the wage fund theory give?", "₹15,000", ["₹20,000", "₹60,000", "₹16,000"], "The fund divided by 400 workers is 60 lakh ÷ 400 = ₹15,000. ₹20,000 was the average before the new workers joined."),
    ],
    lens: [],
    reflect: "In your last pay negotiation, or one you know of, which theory was each side really using?",
    summary: {
      points: [
        "Subsistence (associated with Ricardo; the name iron law is Lassalle's): wages settle at the natural price of labour.",
        "Wage fund (Mill): wage = a fixed fund ÷ number of workers. Surplus value (Marx): workers add more value than the wage replaces.",
        "Residual claimant (Walker): wage = output − (rent + interest + profit). Marginal productivity (Clark, Wicksteed): hire until the last worker's output equals the wage.",
        "Bargaining (Davidson): strength decides where the wage falls in a range. Behavioural: fairness, comparison and status matter, as in Jaques's felt-fair pay.",
        "No theory is complete: market and productivity set a range; bargaining and fairness place the wage in it.",
      ],
      memory: "Ricardo survives, Mill funds, Marx surplus, Walker leftover, Clark margin, Davidson bargains.",
    },
  },
  {
    blockId: "profit-sharing",
    name: "Profit sharing",
    intro: "A pre-agreed share of profit, on top of wages.",
    before: {
      q: "If an employer announces a profit-linked payment each Diwali, depending on how the year went, is it profit sharing?",
      choices: [
        { label: "Yes", reveal: "Not in the textbook sense. Profit sharing needs a share fixed in advance by agreement, on a continuing basis." },
        { label: "No", reveal: "Right. A payment the employer decides afresh each year is a bonus, not profit sharing." },
      ],
    },
    lead: "Profit sharing pays employees a share of profit fixed in advance by agreement, in addition to regular wages, in cash, shares or deferred form.",
    check: [
      ask("What makes a payment profit sharing and not just a bonus?", "The share of profit is fixed in advance by agreement, so only the amount varies", ["The employer decides the amount each year after seeing the accounts", "It is paid only in the form of company shares", "It replaces the employees' regular wages"], "A fixed percentage, agreed beforehand, is the core of profit sharing. Paying in shares is only one of three forms, and profit sharing is always in addition to wages."),
      ask("A firm credits each employee's profit share to a retirement account, to be paid when the employee retires. Which form is this?", "Deferred distribution", ["Cash distribution", "Distribution in company shares", "Distribution by merit rating"], "Money held back until retirement is deferred. Merit rating is a basis for dividing the pool, not a form of payment."),
      ask("A firm shares 8% of a ₹60 lakh profit among employees in proportion to wages. The wage bill is ₹1.5 crore. What does an employee earning ₹2.4 lakh receive?", "₹7,680", ["₹4,80,000", "₹19,200", "₹3,200"], "The pool is 8% of 60 lakh = ₹4.8 lakh, which is 3.2% of the ₹1.5 crore wage bill, and 3.2% of ₹2.4 lakh is ₹7,680. ₹4.8 lakh is the whole pool, not one person's share."),
    ],
    lens: [
      { pairing: 1, adds: "Sharing comes first, before one's own meal.", differs: "The couplet speaks of generosity. Profit sharing is a rule agreed in advance, tied to the firm's results and paid in cash, shares or deferred form." },
    ],
    reflect: "Would profit sharing work better in a firm of 15 people or of 5,000, and why?",
    summary: {
      points: [
        "Profit sharing: an agreement by which employees receive a share, fixed in advance, of the profits, in addition to regular wages.",
        "Forms: cash (current), company shares, deferred. Bases of division: service, percentage of wages, merit rating, attendance, performance, general record.",
        "Unlike a bonus, the rule is agreed in advance and continuing; only the amount varies with profit.",
        "Limits: weak link between one person's effort and profit, no payout in poor years, doubts about the accounts.",
      ],
      memory: "Fixed share, variable amount, on top of wages.",
    },
  },
  {
    blockId: "taylor-merrick-and-bedaux-plans",
    name: "Taylor, Merrick and Bedaux plans",
    intro: "Piece-rate plans with steps, and a point system.",
    before: {
      q: "Under a differential piece rate, does a worker who makes one piece fewer than the standard lose just one piece's pay?",
      choices: [
        { label: "Yes", reveal: "No. Under Taylor's plan the whole day's output is paid at the lower rate, so the loss is far larger." },
        { label: "No", reveal: "Right. Falling short moves every piece to the lower rate, so one piece can cost hundreds of rupees." },
      ],
    },
    lead: "Taylor pays two rates and Merrick three, with no guaranteed wage in either; Bedaux pays a time wage plus 75 per cent of the time saved, counted in B points.",
    check: [
      ask("Under Merrick's multiple piece rate, what does a worker at 90 per cent of standard output get?", "110% of the basic piece rate", ["The basic piece rate", "120% of the basic piece rate", "A guaranteed time wage and nothing more"], "Merrick pays the basic rate below 83%, 110% from 83% to 100%, and 120% above 100%. 120% applies only above the standard."),
      ask("The standard time is 8 hours (480 B's). A worker takes 6 hours at ₹20 an hour. What are the Bedaux earnings?", "₹150", ["₹160", "₹140", "₹190"], "The time wage is 6 × 20 = ₹120, the time saved is 2 hours worth ₹40, and 75% of ₹40 is ₹30, giving ₹150. ₹160 is the standard time paid at the rate, and ₹190 adds the bonus to that."),
      ask("In the block's example, the standard is 40 pieces, with ₹50 a piece at or above it and ₹40 below it under Taylor's plan. How much more does a worker earn by making 40 pieces instead of 39?", "₹440", ["₹50", "₹40", "₹400"], "40 × 50 = ₹2,000 against 39 × 40 = ₹1,560, a gap of ₹440, since all 40 pieces get the higher rate. ₹400 is the gap against a straight rate of ₹40, not against 39 pieces."),
    ],
    lens: [],
    reflect: "Where would you place the cut-off in a piece-rate plan for your own team's work, and why there?",
    summary: {
      points: [
        "Taylor: two piece rates, higher at or above the standard, lower below it; no guaranteed wage; a sharp jump at the standard.",
        "Merrick: three rates, basic below 83% of standard, 110% from 83% to 100%, 120% above 100%; no guaranteed wage; smaller steps than Taylor.",
        "Bedaux: Earnings = T × R + 75% × (S − T) × R, with time in B points; the base is the time taken, not the standard.",
        "All three need a fair standard from work study, and inspection of quality.",
      ],
      memory: "Taylor two rates, Merrick three, Bedaux 75 per cent of time saved.",
    },
  },
  {
    blockId: "group-incentive-plans",
    name: "Group incentive plans",
    intro: "One bonus for a shared result.",
    before: {
      q: "Can a bonus be fair if no single worker's output can be measured?",
      choices: [
        { label: "No", reveal: "It can, by paying on the group's result. That is what group incentive plans do." },
        { label: "Yes", reveal: "Right. Group plans pay one bonus for the shared result, at the cost of a weaker link to each person's effort." },
      ],
    },
    lead: "Priestman measures group output against a standard, Scanlon measures the labour-cost ratio and draws on suggestions, and profit sharing measures profit.",
    check: [
      ask("The Scanlon plan bases its bonus on…", "Labour cost as a share of sales value, with employee suggestion committees", ["The percentage rise in output over a standard, paid as a share of wages", "A fixed share of the firm's profit", "The time saved on each individual job"], "Scanlon watches the labour-cost ratio. The rise-in-output rule belongs to Priestman's plan, which is the tempting wrong answer."),
      ask("A plant's standard is 2,500 units a month and it makes 2,750. Under the textbook Priestman rule, what bonus does a worker on ₹24,000 receive?", "₹2,400", ["₹2,182", "₹250", "₹4,800"], "The rise is 250 ÷ 2,500 = 10%, and 10% of ₹24,000 is ₹2,400. ₹2,182 comes from dividing by the actual output, not the standard."),
      ask("Why might a group plan suit a bottling line better than an individual plan?", "No single worker's output can be measured, and the work is a chain", ["Group plans always cost the employer less", "Group plans tie each person's pay more closely to their own effort", "Group plans need no standard or ratio at all"], "On a chain, one person's output depends on others, so only the group's result is fair to measure. The link to individual effort is weaker, not stronger, which is the plan's main risk."),
    ],
    lens: [],
    reflect: "Where in an organisation you know does a result depend on a team, so that an individual bonus would feel unfair?",
    summary: {
      points: [
        "A group incentive plan pays one bonus pool to a whole team or plant, shared among its members.",
        "Priestman: bonus as a percentage of wages equals the percentage rise in output over the standard.",
        "Scanlon: labour cost against sales value; the saving is shared by an agreed split, with employee suggestion committees.",
        "Profit sharing is also a group plan, measured by profit.",
        "Risk: a weak link between one person's effort and the bonus, so some may ride on others.",
      ],
      memory: "Priestman output, Scanlon cost ratio, profit sharing profit.",
    },
  },
];

export default lessons;
