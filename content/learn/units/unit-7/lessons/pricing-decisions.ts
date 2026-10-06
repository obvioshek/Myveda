import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "pricing-objectives-and-factors",
    name: "Pricing objectives and factors",
    intro: "Why a firm prices as it does, and what limits the price.",
    before: {
      q: "Which element of the marketing mix brings in revenue?",
      choices: [
        { label: "Promotion", reveal: "Promotion is a cost. Price is the only element of the mix that produces revenue; the others are costs." },
        { label: "Price", reveal: "Right. Price is the only element of the mix that produces revenue; the others are costs." },
      ],
    },
    lead: "Price is set within limits: costs give the floor, customer value the ceiling, competitors the range between.",
    check: [
      ask("A firm sets a low price to attract buyers quickly and gain share. Its objective is…", "Maximum market share", ["Maximum market skimming", "Survival", "Product-quality leadership"], "It expects lower unit costs with volume."),
      ask("What sets the floor for price?", "Costs", ["Customers' perceived value", "Competitors' prices", "Government regulation"], "Perceived value and demand set the ceiling."),
      ask("Which is an external factor affecting price?", "Competitors' prices and offers", ["Costs", "Brand image", "The rest of the marketing mix"], "Costs, objectives, the mix and brand image are internal."),
    ],
    lens: [
      { pairing: 0, adds: "Manu's rule that rates be fixed after weighing goods' arrival and dispatch, storage, and gain and loss, and reviewed publicly every five nights or fortnight.", differs: "The verse describes prices set by the ruler. Modern pricing is set by firms, with objectives such as share or skimming and Kotler and Keller's six steps." },
    ],
    reflect: "Think of something you bought recently. Which pricing objective do you think the seller was pursuing?",
    summary: {
      points: [
        "Price is the only revenue-producing element of the mix.",
        "Objectives: survival, maximum current profit, maximum market share, maximum skimming, product-quality leadership.",
        "Internal factors (costs, objectives, mix, brand image) and external ones (value and demand, competitors, economy, regulation, channels).",
        "Other objectives: deter entrants, keep channel support, run a promotion, help sell other products.",
      ],
      memory: "Costs set the floor, customer value the ceiling, competitors the range between.",
    },
  },
  {
    blockId: "setting-the-price",
    name: "Setting the price",
    intro: "How buyers read prices, and Kotler and Keller's six steps.",
    before: {
      q: "Do buyers react to the price a seller states, or to the price they perceive?",
      choices: [
        { label: "The stated price", reveal: "Decisions rest on how buyers perceive prices, read against past purchases, advertising, friends and the point of sale." },
        { label: "The perceived price", reveal: "Right. Buyers interpret prices; a price below their lower threshold even signals poor quality." },
      ],
    },
    lead: "Price is set in six steps, between a floor set by cost and a ceiling set by customer value.",
    check: [
      ask("In the three Cs model, the ceiling price is set by…", "Customers' perceived value", ["The company's costs", "Competitors' prices", "Government"], "Costs set the floor; competitors' prices are an orienting point."),
      ask("Starting from the price the market will pay and designing the product to meet the cost that allows is…", "Target costing", ["Mark-up pricing", "Going-rate pricing", "Sealed-bid pricing"], "It belongs to step 3, estimating costs."),
      ask("Which is a competition-based pricing method?", "Going-rate pricing", ["Perceived-value pricing", "Target-return pricing", "Mark-up pricing"], "Sealed-bid pricing is the other competition-based method."),
    ],
    lens: [],
    reflect: "Think of a product whose price made you doubt its quality because it was too low. What was your lower price threshold?",
    summary: {
      points: [
        "Buyers act on perceived prices, with lower and upper price thresholds.",
        "Six steps: objective, demand, costs, competitors, method, final price.",
        "Methods: cost-based (mark-up, target-return), value-based (perceived value, value pricing), competition-based (going-rate, sealed-bid).",
      ],
      memory: "Objective, demand, costs, competitors, method, final price.",
    },
  },
  {
    blockId: "pricing-strategies",
    name: "Pricing strategies",
    intro: "Methods from cost-plus to bundles.",
    before: {
      q: "Does penetration pricing mean launching low and then raising the price?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. Penetration aims to win share with a low price; it does not require a later rise, and many penetration prices stay low." },
        { label: "No", reveal: "Right. Penetration aims to win share with a low price; it does not require a later rise, and many penetration prices stay low." },
      ],
    },
    lead: "Firms choose among cost-, value- and competition-based methods, and launch strategies such as skimming and penetration.",
    check: [
      ask("Pricing at or near competitors' prices is…", "Going-rate pricing", ["Value-based pricing", "Cost-plus pricing", "Target-return pricing"], "It suits commodities and oligopolies."),
      ask("Skimming suits a product that is…", "Innovative, with buyers willing to pay", ["Sold in a price-sensitive market", "A commodity", "Bought only on going rates"], "Few competitors able to enter quickly also helps."),
      ask("Peak and off-peak fares are an example of…", "Differential pricing", ["Bundle pricing", "Psychological pricing", "Penetration pricing"], "Different prices for different times, not reflecting cost differences."),
    ],
    lens: [],
    reflect: "Find an odd price like ₹99 or a bundle offer you have seen. Which strategy is it, and did it work on you?",
    summary: {
      points: [
        "Cost-plus, target-return, value-based and going-rate methods.",
        "Skim when buyers pay for novelty; penetrate when volume lowers cost.",
        "Psychological, differential and bundle pricing use perception, segments and combinations.",
      ],
      memory: "Skim when buyers pay for novelty; penetrate when volume lowers cost.",
    },
  },
  {
    blockId: "adapting-the-price",
    name: "Adapting the price",
    intro: "Price structures for places, buyers, times and promotions.",
    before: {
      q: "Does a firm usually earn the same profit on every unit it sells?",
      choices: [
        { label: "Yes", reveal: "Seldom. Discounts, allowances and promotional support mean the profit varies from unit to unit." },
        { label: "Seldom", reveal: "Right. Firms build a price structure, and discounts and allowances change the profit on each unit." },
      ],
    },
    lead: "Firms adapt price by geography, discounts and allowances, promotions and differentiated pricing.",
    check: [
      ask("A seller paid fully in cash who agrees to spend a substantial amount in the buyer's country has made…", "An offset", ["A barter", "A buyback arrangement", "A compensation deal"], "In a buyback the seller accepts products made with the equipment it supplied."),
      ask("A discount to channel members who sell, store and keep records is a…", "Functional (trade) discount", ["Seasonal discount", "Quantity discount", "Cash discount"], "It pays for functions the channel performs."),
      ask("Cutting the price of well-known brands to draw shoppers into a store is…", "Loss-leader pricing", ["Image pricing", "Location pricing", "Psychological discounting"], "It is a form of promotional pricing."),
      ask("Lower museum fees for students are an example of…", "Customer-segment pricing", ["Product-form pricing", "Channel pricing", "Time pricing"], "Different customer groups pay different prices for the same thing."),
    ],
    lens: [],
    reflect: "Find two prices you paid recently that were adapted by time, place or customer group. Which kind of differentiated pricing was each?",
    summary: {
      points: [
        "Geographical pricing, including countertrade: barter, compensation deals, buyback arrangements and offsets.",
        "Discounts and allowances: cash, quantity, functional, seasonal, and allowances.",
        "Promotional pricing and differentiated pricing (customer-segment, product-form, image, channel, location, time).",
      ],
      memory: "Geography, discounts, promotions, differentiation.",
    },
  },
  {
    blockId: "price-quality-strategies",
    name: "Price-quality strategies",
    intro: "Kotler's nine combinations of price and quality.",
    before: {
      q: "Can a high-price, high-quality brand and a low-price, low-quality brand both succeed in one market?",
      choices: [
        { label: "No", reveal: "They can. The diagonal strategies, premium, medium-value and economy, can coexist so long as there are buyers who want each." },
        { label: "Yes", reveal: "Right. The diagonal strategies can coexist when each has its own buyers." },
      ],
    },
    lead: "A product's place on the price-quality map should match price to quality, or give more quality for the price.",
    check: [
      ask("High quality at a low price is the…", "Super-value strategy", ["Premium strategy", "Economy strategy", "Good-value strategy"], "Strategies 2, 3 and 6 attack the diagonal by giving more quality for the price."),
      ask("Low quality at a high price is the…", "Rip-off strategy", ["False-economy strategy", "Overcharging strategy", "Economy strategy"], "Overpriced strategies leave customers feeling cheated."),
      ask("Why are the overcharging, rip-off and false-economy strategies hard to sustain?", "Customers feel cheated and complain", ["They are illegal everywhere", "They need high quality", "They cost the most to produce"], "They charge more than the quality is worth."),
    ],
    lens: [],
    reflect: "Place two brands you know on the price-quality map. Which of the nine strategies is each following?",
    summary: {
      points: [
        "Buyers who lack information take price as a signal of quality.",
        "Diagonal strategies (premium, medium-value, economy) can coexist.",
        "High-value, super-value and good-value attack the diagonal; overcharging, rip-off and false economy overprice and are hard to sustain.",
      ],
      memory: "Price should match quality; more quality for the price attacks.",
    },
  },
];

export default lessons;
