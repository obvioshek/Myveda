import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "measuring-elasticity",
    name: "Measuring elasticity: PED, YED and XED",
    intro: "How strongly quantity demanded responds to price, income and related prices.",
    before: {
      q: "If price rises 10% and quantity demanded falls 20%, is demand elastic?",
      choices: [
        { label: "Yes, elastic", reveal: "Yes: PED = 20% ÷ 10% = 2, which is above 1, so demand is elastic." },
        { label: "No, inelastic", reveal: "Not here: PED = 20% ÷ 10% = 2, which is above 1, so demand is elastic." },
      ],
    },
    lead: "Elasticity measures how strongly buyers react to a change, in percentages, so it works for any product.",
    check: [
      ask("Price elasticity of demand (PED) is…", "% change in quantity demanded ÷ % change in price", ["% change in price ÷ % change in quantity demanded", "Change in quantity ÷ change in price", "Quantity × price"], "It compares percentages. Change in quantity ÷ change in price is the slope, which depends on the units used."),
      ask("A chai stall raises its price from ₹10 to ₹12 and sales fall from 200 cups to 180. What happens to its takings?", "They rise, from ₹2,000 to ₹2,160", ["They fall, because fewer cups are sold", "They stay the same", "They fall to ₹1,800"], "Sales fell 10% while price rose 20%: PED = −0.5, inelastic, so the higher price more than makes up for the lost cups. ₹1,800 is what happens if sales fall to 150."),
      ask("Petrol rises 10% and two-wheeler sales fall 4%. What is the cross elasticity, and what does it say?", "−0.4: they are complements", ["+0.4: they are substitutes", "−2.5: they are complements", "0.4: demand is inelastic"], "A negative cross elasticity means the goods are used together. −2.5 divides the wrong way round: XED is % change in quantity ÷ % change in the other good's price."),
    ],
    lens: [],
    reflect: "Which product you buy would barely change if its price rose, and which would you drop?",
    summary: {
      points: [
        "PED = % change in quantity demanded ÷ % change in price. Above 1 elastic, 1 unitary, below 1 inelastic.",
        "YED = % change in quantity demanded ÷ % change in income. Above 1 luxury, 0 to 1 necessity, below 0 inferior.",
        "XED = % change in quantity of A ÷ % change in price of B. Positive: substitutes. Negative: complements.",
      ],
      memory: "PED: own price. YED: income. XED: another good's price.",
    },
  },
  {
    blockId: "methods-of-measuring-price-elasticity",
    name: "Methods of measuring price elasticity",
    intro: "Proportionate, point, arc and total outlay.",
    before: {
      q: "Price falls and total spending on the good rises. Is demand elastic or inelastic?",
      choices: [
        { label: "Elastic", reveal: "Yes. Quantity rose proportionately more than price fell, so spending went up: elasticity is greater than 1." },
        { label: "Inelastic", reveal: "No. If spending rises when price falls, quantity rose proportionately more than price fell: demand is elastic." },
      ],
    },
    lead: "Price elasticity is measured by the proportionate, point, arc and total outlay methods.",
    check: [
      ask("At the midpoint of a straight-line demand curve, elasticity is…", "1", ["0", "Infinite", "The same as at every other point"], "Point elasticity = lower segment ÷ upper segment, equal at the midpoint. It is not the same everywhere: the slope is constant, elasticity is not."),
      ask("A kirana store cuts the price of biscuits from ₹20 to ₹18, and daily sales rise from 100 to 130 packets. By the total outlay method, demand is…", "Elastic: spending rose from ₹2,000 to ₹2,340", ["Inelastic: the price fell", "Unitary: both changed", "Inelastic: quantity rose only 30"], "When price falls and total spending rises, quantity rose proportionately more than price fell."),
      ask("Price rises from ₹10 to ₹12 and quantity falls from 200 to 150. What is the arc elasticity?", "About −1.57", ["−1.25", "−2", "−0.5"], "Arc: (−50 ÷ 175) ÷ (2 ÷ 11) = −1.57. −1.25 and −2 are the proportionate method measured from each end; the arc method exists to avoid that disagreement."),
    ],
    lens: [],
    reflect: "Think of something whose price went up recently. Did you spend more or less on it in total, and what does that say about your elasticity?",
    summary: {
      points: [
        "Proportionate: e = (ΔQ/Q) ÷ (ΔP/P).",
        "Point: lower segment ÷ upper segment; 1 at the midpoint, ∞ and 0 at the ends.",
        "Arc: the midpoint formula, the same both ways.",
        "Total outlay (Marshall): spending up when price falls means elastic.",
      ],
      memory: "Watch the spending: price down, spending up means elastic.",
    },
  },
  {
    blockId: "five-degrees-of-price-elasticity",
    name: "Five degrees of price elasticity",
    intro: "From perfectly elastic to perfectly inelastic.",
    before: {
      q: "If a tiny price rise cuts quantity demanded to zero, how elastic is demand?",
      choices: [
        { label: "Perfectly elastic", reveal: "Yes. PED is infinite and the curve is horizontal." },
        { label: "Perfectly inelastic", reveal: "No. Perfectly inelastic means quantity does not change at any price. This case is perfectly elastic: a horizontal curve." },
      ],
    },
    lead: "Elasticity runs from perfectly elastic (infinite) to perfectly inelastic (zero).",
    check: [
      ask("A vertical demand curve is…", "Perfectly inelastic", ["Perfectly elastic", "Unitary", "Elastic"], "Quantity does not change at any price. A horizontal curve is the opposite: perfectly elastic."),
      ask("A wheat farmer can sell any amount at the mandi price but nothing above it. The demand curve the farmer faces is…", "Perfectly elastic", ["Perfectly inelastic", "Unitary", "Inelastic"], "One small seller cannot move the market price: charge a little more and buyers go elsewhere, so the curve is horizontal."),
      ask("Two demand curves pass through the same point. One is flatter. At that point, the flatter one is…", "More elastic", ["Less elastic", "Equally elastic", "Unitary"], "At the same price and quantity, a flatter curve means quantity reacts more. Comparing steepness only works at a shared point."),
    ],
    lens: [],
    reflect: "Which everyday good has a nearly vertical demand curve for you?",
    summary: {
      points: [
        "Perfectly elastic: PED infinite, horizontal curve.",
        "Elastic: above 1, flatter curve. Unitary: equal to 1.",
        "Inelastic: below 1, steeper curve. Perfectly inelastic: 0, vertical curve.",
      ],
      memory: "Flat is elastic. Steep is inelastic.",
    },
  },
  {
    blockId: "what-makes-demand-elastic",
    name: "What makes demand elastic",
    intro: "Five things that make buyers more or less sensitive to price.",
    before: {
      q: "Which is more elastic: demand for insulin, or for a luxury car?",
      choices: [
        { label: "Insulin", reveal: "No. Necessities are inelastic and luxuries elastic: people buy the insulin they need whatever it costs." },
        { label: "The luxury car", reveal: "Yes. Necessities are inelastic and luxuries elastic: insulin against a luxury car." },
      ],
    },
    lead: "Substitutes, the nature of the good, share of income, time and durability decide how elastic demand is; a single brand is always more elastic than its category.",
    check: [
      ask("More close substitutes mean demand is…", "More elastic", ["Less elastic", "Unaffected", "Perfectly inelastic"], "Buyers can switch easily, so they react more to a price change."),
      ask("Which is more elastic: demand for one brand of tea, or for tea as a whole?", "One brand of tea", ["Tea as a whole", "Both the same", "Neither: tea is a necessity"], "A single brand has many close substitutes in other brands. Tea as a whole has few, so its demand is much less elastic."),
      ask("Petrol prices rise sharply. Why does demand fall more after three years than after three weeks?", "Over time people find alternatives, such as CNG, electric vehicles or the metro", ["Petrol becomes a luxury", "Incomes always fall", "The demand curve becomes vertical"], "Time lets buyers adjust. In the short run most people still have to commute the same way."),
    ],
    lens: [
      { pairing: 0, adds: "Food named as the base of life: do not disparage it, and make it abundant.", differs: "The classical texts have no measure of responsiveness, so the link is thematic: food as a necessity whose demand barely moves with price." },
    ],
    reflect: "Think of a good whose price rose. What made you able, or unable, to switch?",
    summary: {
      points: [
        "Substitutes: more close substitutes mean more elastic demand. One brand is more elastic than the whole category.",
        "Nature of the good: necessities are inelastic, luxuries elastic.",
        "Share of income: expensive items are more elastic. Time: demand is more elastic over a longer period.",
        "Durability: durable goods are more elastic than non-durable goods.",
      ],
      memory: "Substitutes, necessity, share of income, time, durability.",
    },
  },
  {
    blockId: "using-elasticity-in-decisions",
    name: "Using elasticity in decisions",
    intro: "Pricing, taxation, bundling and forecasting.",
    before: {
      q: "If demand is inelastic, will a price rise raise revenue?",
      choices: [
        { label: "Yes", reveal: "Yes. With inelastic demand a price rise raises revenue; with elastic demand it is a price cut that does." },
        { label: "No", reveal: "In fact yes: with inelastic demand a price rise raises revenue. With elastic demand a price cut raises it." },
      ],
    },
    lead: "Elasticity guides pricing, taxation, bundling and revenue forecasts.",
    check: [
      ask("With elastic demand, which action raises revenue?", "A price cut", ["A price rise", "Neither", "Both"], "Quantity rises proportionately more than price falls. With inelastic demand, it is a price rise that raises revenue."),
      ask("Why do governments put high taxes on tobacco?", "Demand is inelastic, so sales fall little and tax revenue holds up", ["Demand is elastic, so the tax stops all sales", "Tobacco is a luxury", "Cross elasticity with food is high"], "Habit makes tobacco demand inelastic. A tax on an elastic good would shrink the base it is levied on."),
      ask("You raise a price 8% and volume falls 3%. Should you expect revenue to rise or fall?", "Rise, by about 4.8%", ["Fall, because volume fell", "Rise by 8%", "Fall by 3%"], "Elasticity is about −0.375, inelastic. Revenue changes by 1.08 × 0.97 = 1.048, a rise of about 4.8%. Whether to raise it again depends on competitors and the longer run."),
    ],
    lens: [
      { pairing: 1, adds: "A state that does not leave shortages to chance: it regulates traders' margins and prescribes relief in calamity.", differs: "The chapter offers this as a reading: the Arthaśāstra shows the practice, not elasticity analysis." },
    ],
    reflect: "Choose a product you know. Would you raise or cut its price, and what does elasticity say?",
    summary: {
      points: [
        "Pricing: elastic demand, a price cut raises revenue; inelastic demand, a price rise raises revenue.",
        "Taxation: taxing inelastic goods raises more revenue.",
        "Cross elasticity guides bundling of complements and analysis of competition from substitutes.",
        "YED supports market segmentation and shows which products grow with incomes.",
      ],
      memory: "Elastic: cut price to raise revenue. Inelastic: raise it.",
    },
  },
];

export default lessons;
