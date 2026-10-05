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
    lead: "Elasticity compares the percentage change in quantity with the percentage change in its cause.",
    check: [
      ask("Price elasticity of demand (PED) is…", "% change in quantity demanded ÷ % change in price", ["% change in price ÷ % change in quantity demanded", "Change in income ÷ change in price", "Quantity × price"], "PED above 1 is elastic, equal to 1 unitary, below 1 inelastic."),
      ask("Income rises 10% and demand rises 15%. What is YED, and what kind of good?", "1.5, a luxury good", ["0.67, a necessity", "1.5, an inferior good", "15, a normal good"], "YED above 1 means a luxury; between 0 and 1 a necessity; below 0 an inferior good."),
      ask("Coffee price rises 20% and tea demand rises 10%. What is XED?", "+0.5, so they are substitutes", ["−0.5, so they are complements", "+2, so they are substitutes", "0, so they are unrelated"], "A positive cross elasticity means substitutes."),
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
      ask("PED equal to 1 is called…", "Unitary", ["Elastic", "Inelastic", "Perfectly elastic"], "Quantity changes in proportion to price."),
      ask("A vertical demand curve is…", "Perfectly inelastic", ["Perfectly elastic", "Unitary", "Elastic"], "Quantity does not change at any price."),
      ask("A flatter demand curve means demand is…", "More elastic: quantity changes more than price", ["More inelastic", "Unitary", "Zero"], "A steeper curve is more inelastic."),
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
        { label: "Insulin", reveal: "No. Necessities are inelastic and luxuries elastic, as the chapter's example of insulin against a luxury car shows." },
        { label: "The luxury car", reveal: "Yes. Necessities are inelastic and luxuries elastic: insulin against a luxury car." },
      ],
    },
    lead: "Substitutes, the nature of the good, share of income, time and durability decide how elastic demand is.",
    check: [
      ask("More close substitutes mean demand is…", "More elastic", ["Less elastic", "Unaffected", "Perfectly inelastic"], "Butter against margarine is the example."),
      ask("Over a longer period, demand becomes…", "More elastic, as consumers adjust", ["Less elastic", "Unitary", "Zero"], "Petrol is the example."),
      ask("Which is more elastic?", "A house", ["Salt", "Bread", "Insulin"], "Expensive items are more elastic than cheap ones: a house against salt."),
    ],
    lens: [
      { pairing: 0, adds: "Food named as the base of life: do not disparage it, and make it abundant.", differs: "The classical texts have no measure of responsiveness, so the link is thematic: food as a necessity whose demand barely moves with price." },
    ],
    reflect: "Think of a good whose price rose. What made you able, or unable, to switch?",
    summary: {
      points: [
        "Substitutes: more close substitutes mean more elastic demand.",
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
      ask("With elastic demand, which action raises revenue?", "A price cut", ["A price rise", "Neither", "Both"], "With inelastic demand, a price rise raises revenue."),
      ask("Taxing which kind of good raises more revenue?", "Inelastic goods", ["Elastic goods", "Unitary goods", "Luxury goods"], "Buyers of inelastic goods barely change what they buy."),
      ask("What does YED support?", "Market segmentation, and showing which products grow with incomes", ["Price ceilings", "Wage setting", "Quality control"], "Cross elasticity guides bundling of complements and competition analysis against substitutes."),
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
