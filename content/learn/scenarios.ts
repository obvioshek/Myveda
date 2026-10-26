// "Apply it": short workplace situations where the reader chooses the idea
// that helps most, for /learn/apply. Recall and multiple choice test whether a
// reader knows an idea; these test whether they can see where it applies.
// Each names its options by chapter and concept, so it always links to the
// lesson, and, where one fits, a classical passage that met the same problem.
// The build checks every chapter, concept and passage named here.

import { chapterBySlug, chapterPath, passageHref } from "./index";

export const APPLY_PATH = "/learn/apply";

/** The situations whose best idea is taught in this chapter. */
export const scenariosFor = (slug: string) => SCENARIOS.filter(s => s.options[s.answer].slug === slug);

type Option = { slug: string; block: string };
export type Scenario = {
  id: string;
  title: string;
  situation: string;
  ask: string;
  options: Option[];
  /** Index of the idea that helps most. */
  answer: number;
  why: string;
  passage?: { slug: string; pairing: number; note: string };
};

export const SCENARIOS: Scenario[] = [
  {
    id: "fest-clash", title: "The fest that clashed with exams",
    situation: "A college fest committee in Pune books a venue and prints posters, then finds the date falls in the university's exam week. Half the volunteers drop out. The convenor says, “We'll sort it out as we go.”",
    ask: "Which idea would have prevented this?",
    options: [{ slug: "functions-of-management", block: "planning" }, { slug: "functions-of-management", block: "controlling" }, { slug: "functions-of-management", block: "directing" }],
    answer: 0,
    why: "Planning comes first: setting the objective and checking its premises, such as the academic calendar, before committing money and people. Controlling would only have caught the problem after the posters were printed, and no style of directing fixes a date that was never checked.",
    passage: { slug: "functions-of-management", pairing: 1, note: "The Tirukkuṟaḷ names the convenor's mistake: deciding to “think after we begin” is a fault." },
  },
  {
    id: "cinema-price", title: "The cinema that raised its prices",
    situation: "A Mumbai cinema raises weekday tickets from ₹200 to ₹260 to earn more. Weekday attendance falls by 40%, and the weekday takings drop.",
    ask: "Which idea should the manager have checked first?",
    options: [{ slug: "elasticity-of-demand", block: "using-elasticity-in-decisions" }, { slug: "marginal-costing-and-cvp-analysis", block: "break-even-and-cvp-analysis" }, { slug: "pricing-decisions", block: "price-quality-strategies" }],
    answer: 0,
    why: "Price elasticity of demand. A 30% rise in price met a 40% fall in tickets, an elasticity of about 1.3, so demand is elastic and a higher price brings in less (₹260 × 60 is less than ₹200 × 100). Break-even analysis is about costs, not about how buyers respond, and price-quality positioning is about what a price says, not how many will pay it.",
  },
  {
    id: "unapproved-use", title: "The target and the patients",
    situation: "A pharmaceutical sales manager is told to promote a drug for a use it isn't approved for, to meet the quarter's target. Refusing may cost her bonus; agreeing may harm patients.",
    ask: "Which idea helps her see the choice clearly?",
    options: [{ slug: "business-ethics-and-csr", block: "ethical-issue-and-ethical-dilemma" }, { slug: "decision-making", block: "types-of-decision" }, { slug: "corporate-governance", block: "corporate-governance-theories" }],
    answer: 0,
    why: "It is an ethical dilemma: obligations that pull in different directions, where any choice costs something. Naming it so lets her weigh it with the approaches to ethical decisions, by duty, consequences and character. Knowing the type of decision, or the agency problem behind the target, explains the pressure but doesn't resolve it.",
    passage: { slug: "business-ethics-and-csr", pairing: 4, note: "The Gītā opens with the same state of mind: Arjuna, torn between duty and kin, says he is confused about what is right and asks for guidance." },
  },
  {
    id: "silent-engineers", title: "The meeting where everyone agreed",
    situation: "At a Bengaluru start-up, the founder's ideas are always approved in meetings, and nobody raises doubts. A launch fails on a problem two engineers had noticed but didn't mention.",
    ask: "What went wrong in the group?",
    options: [{ slug: "group-behaviour-and-leadership", block: "group-dynamics" }, { slug: "group-behaviour-and-leadership", block: "belbins-team-roles" }, { slug: "group-behaviour-and-leadership", block: "team-building-and-tuckmans-stages" }],
    answer: 0,
    why: "Groupthink: a close group, a strong leader and pressure to agree, so doubts go unspoken. The remedies are a named devil's advocate, the leader speaking last, and inviting dissent. Team roles and the stages of team building matter, but the failure here is the silence.",
    passage: { slug: "group-behaviour-and-leadership", pairing: 3, note: "The Kuṟaḷ asks who could ruin a ruler who keeps advisers willing to rebuke him: people who speak up are the protection." },
  },
  {
    id: "nephew", title: "The nephew in charge of production",
    situation: "A family-run garment exporter in Tiruppur makes the owner's nephew head of production without an interview or a trial. Output falls, and experienced supervisors begin to leave.",
    ask: "Which idea should the firm have followed?",
    options: [{ slug: "recruitment-and-selection", block: "recruitment-planning-strategy-and-policy" }, { slug: "performance-management-and-appraisal", block: "rater-errors-and-fair-appraisal" }, { slug: "group-behaviour-and-leadership", block: "leadership" }],
    answer: 0,
    why: "A recruitment policy that fills posts on merit, with the job's requirements set first and every candidate tested against them. Fair appraisal and good leadership come later; the harm was done at the hiring.",
    passage: { slug: "recruitment-and-selection", pairing: 4, note: "The Kuṟaḷ says that choosing the unfit out of fondness leads to every kind of folly." },
  },
  {
    id: "raise", title: "The same rating, a different raise",
    situation: "Two analysts at a Gurugram bank get the same rating. One finds out the other got a larger raise because she negotiated harder. He starts doing the minimum.",
    ask: "Which idea explains his reaction?",
    options: [{ slug: "organisational-justice-and-whistleblowing", block: "adams-equity-theory" }, { slug: "values-learning-and-motivation", block: "goal-setting-theory" }, { slug: "emotions-and-stress", block: "emotional-labour-and-emotional-intelligence" }],
    answer: 0,
    why: "Equity theory: people compare what they put in and get out with someone like them. Feeling under-rewarded, he restores the balance the one way he can, by putting in less. Goals and emotional labour don't explain why the comparison stung.",
    passage: { slug: "organisational-justice-and-whistleblowing", pairing: 1, note: "The Kuṟaḷ asks a ruler to regard each person by their worth, which is what the analyst felt was missing." },
  },
  {
    id: "call-target", title: "One target, two reactions",
    situation: "A call-centre team in Noida gets a new target of 40 calls a shift. Some agents shrug it off. Others can't sleep and start calling in sick.",
    ask: "Which idea helps the team leader most?",
    options: [{ slug: "emotions-and-stress", block: "why-people-feel-stress-differently" }, { slug: "group-behaviour-and-leadership", block: "types-of-teams-and-team-effectiveness" }, { slug: "interpersonal-behaviour", block: "transactional-analysis" }],
    answer: 0,
    why: "The same stressor is felt differently: how people appraise it, their experience, personality and support all differ. That points the leader to individual responses, such as talking to those struggling and adjusting their load, rather than one answer for all.",
    passage: { slug: "emotions-and-stress", pairing: 5, note: "The Gītā's “contacts come and go” offers a reading on why the same event can unsettle one person and not another." },
  },
  {
    id: "bakery", title: "How many cakes before a profit?",
    situation: "A Jaipur bakery's fixed costs are ₹60,000 a month. Each cake sells for ₹500 and costs ₹300 in ingredients and packing. The owner wants to know how many cakes she must sell each month before she makes any profit.",
    ask: "Which idea answers her question?",
    options: [{ slug: "marginal-costing-and-cvp-analysis", block: "break-even-and-cvp-analysis" }, { slug: "ratio-analysis", block: "liquidity-ratios" }, { slug: "budgeting-and-budgetary-control", block: "fixed-flexible-and-zero-based-budgets" }],
    answer: 0,
    why: "Break-even analysis. Each cake contributes ₹200 (₹500 − ₹300) towards fixed costs, so she breaks even at ₹60,000 ÷ ₹200 = 300 cakes a month; the 301st earns the first profit. Liquidity ratios say whether she can pay her bills, and a flexible budget adjusts to the volume she sells, but neither gives the break-even volume.",
  },
  {
    id: "delivery", title: "Few rivals, thin profits",
    situation: "A food-delivery start-up in Kochi has only one direct rival, yet barely makes money. Restaurants list on both apps and bargain over commission, and customers switch for a ₹20 coupon.",
    ask: "Which tool shows why profits are thin?",
    options: [{ slug: "external-analysis", block: "porters-five-forces" }, { slug: "portfolio-analysis", block: "bcg-matrix" }, { slug: "growth-strategies", block: "ansoff-matrix" }],
    answer: 0,
    why: "Porter's five forces. Rivalry is low, but suppliers (the restaurants) and buyers (customers who switch for little) both have strong bargaining power, and together they take the profit. The BCG matrix sorts a portfolio of businesses, and the Ansoff matrix sets out routes to growth; neither explains the squeeze.",
    passage: { slug: "external-analysis", pairing: 2, note: "The Kuṟaḷ asks a ruler to weigh more than the rival: what the deed demands, one's own strength, the opponent's and the allies'." },
  },
  {
    id: "gym", title: "January's members, April's empty gym",
    situation: "A Chennai gym signs up hundreds of members every January. By April most have stopped coming, and few renew. The owner spends more on advertising each year.",
    ask: "Which idea should the owner turn to?",
    options: [{ slug: "customer-relationship-marketing", block: "customer-retention-and-loyalty" }, { slug: "segmentation-targeting-and-positioning", block: "market-segmentation" }, { slug: "pricing-decisions", block: "setting-the-price" }],
    answer: 0,
    why: "Customer retention. Winning a new member usually costs far more than keeping one, so the money is better spent on what keeps members coming: following up on missed visits, progress checks and a reason to renew. Segmentation and pricing matter, but the leak is after the sign-up.",
    passage: { slug: "customer-relationship-marketing", pairing: 1, note: "Rahīm's couplet says a snapped thread of love won't join again, and if it does, a knot remains: a relationship is easier to keep than to mend." },
  },
  {
    id: "pumps", title: "Where should the pump maker grow?",
    situation: "A Coimbatore pump maker sells only in India. It could sell its existing pumps in East Africa, or design solar pumps for Indian farmers. The board asks which carries more risk.",
    ask: "Which tool frames the choice?",
    options: [{ slug: "growth-strategies", block: "ansoff-matrix" }, { slug: "growth-strategies", block: "integration-strategies" }, { slug: "external-analysis", block: "pestel-analysis" }],
    answer: 0,
    why: "The Ansoff matrix: selling existing products in a new market is market development, and new products for an existing market is product development, each with its own risk; doing both at once would be diversification, the riskiest. Integration is about owning more of the supply chain, and PESTEL scans the environment once a market is chosen.",
    passage: { slug: "growth-strategies", pairing: 1, note: "The Kuṟaḷ warns that one who climbs past the branch's tip falls: a reading on how far from home to reach at once." },
  },
  {
    id: "skincare", title: "Skincare for “everyone”",
    situation: "A new Ayurvedic skincare brand advertises to “everyone aged 18 to 60” across India. The message reaches many people and persuades almost none.",
    ask: "Which idea should come before the next campaign?",
    options: [{ slug: "segmentation-targeting-and-positioning", block: "targeting" }, { slug: "pricing-decisions", block: "pricing-strategies" }, { slug: "customer-relationship-marketing", block: "customer-retention-and-loyalty" }],
    answer: 0,
    why: "Targeting: choosing the segments the brand can serve best, and speaking to them, rather than to everyone at once. Pricing and retention follow from knowing who the customer is.",
    passage: { slug: "segmentation-targeting-and-positioning", pairing: 0, note: "The Kuṟaḷ advises knowing the assembly before speaking to it." },
  },
];

const concepts = (slug: string) => chapterBySlug(slug)?.blocks ?? [];

/** A scenario's options, with the names and addresses pages show. */
export function scenarioView(s: Scenario) {
  return {
    ...s,
    options: s.options.map(o => {
      const c = chapterBySlug(o.slug)!;
      const b = concepts(o.slug).find(x => x.id === o.block)!;
      return { name: b.title ?? c.title, chapter: c.short ?? c.title, unitN: c.unitN, href: `${chapterPath(o.slug)}#${o.block}` };
    }),
    passage: s.passage && (() => {
      const p = chapterBySlug(s.passage.slug)!.pairings[s.passage.pairing];
      return { ...s.passage, modern: p.modern, classic: p.classic ?? "", quote: p.quote ?? "", kind: p.kind, href: passageHref(s.passage.slug, s.passage.pairing) };
    })(),
  };
}

// Checked when the site is built.
{
  const bad: string[] = [];
  for (const s of SCENARIOS) {
    for (const o of s.options) if (!concepts(o.slug).some(b => b.id === o.block)) bad.push(`${s.id}: ${o.slug}#${o.block}`);
    if (s.answer < 0 || s.answer >= s.options.length) bad.push(`${s.id}: answer out of range`);
    if (s.passage && !chapterBySlug(s.passage.slug)?.pairings[s.passage.pairing]?.quote) bad.push(`${s.id}: passage ${s.passage.slug} ${s.passage.pairing}`);
  }
  if (bad.length) throw new Error(`scenarios.ts names missing content:\n- ${bad.join("\n- ")}`);
}
