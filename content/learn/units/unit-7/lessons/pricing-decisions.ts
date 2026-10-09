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
    lead: "Price is what buyers give up for a product; it sits between a floor set by cost and a ceiling set by customer value, and the firm's objective decides where.",
    check: [
      ask("What sets the floor for price, and what sets the ceiling?", "Costs set the floor; customers' perceived value sets the ceiling", ["Competitors set the floor; costs set the ceiling", "Demand sets the floor; government sets the ceiling", "Brand image sets the floor; costs set the ceiling"], "Below cost the firm loses on each unit; above perceived value few buy. Competitors' prices sit in between as a point of comparison, not as the floor."),
      ask("A baker's cake costs ₹300 to make and rivals charge ₹450 to ₹550. She prices at ₹450 to win buyers quickly, expecting her unit cost to fall as volume grows. Her objective is…", "Maximum market share", ["Maximum market skimming", "Product-quality leadership", "Survival"], "A low price to gain share fast, counting on lower unit costs with volume, is the market-share objective. Skimming would start near the top of the range, not the bottom."),
      ask("A small firm faces overcapacity and a price war. It cuts its price to just above its variable cost. Is this sensible as a long-term plan?", "No; survival pricing keeps it going for a while, but it must later cover fixed costs too", ["Yes; covering variable cost is always enough", "No; a firm must never price below full cost", "Yes; it maximises current profit"], "Survival pricing covers variable costs and some fixed costs to get through a bad patch. Pricing below full cost is allowed for a time, which is why 'never' is wrong, but it cannot last."),
    ],
    lens: [
      { pairing: 0, adds: "Manu's rule that rates be fixed after weighing goods' arrival and dispatch, storage, and gain and loss, and reviewed publicly every five nights or fortnight.", differs: "The verse describes prices set by the ruler. Modern pricing is set by firms, with objectives such as share or skimming and Kotler and Keller's six steps." },
    ],
    reflect: "Think of something you bought recently. Which pricing objective do you think the seller was pursuing?",
    summary: {
      points: [
        "Price is the sum of the values customers give up; it is the only revenue-producing element of the mix.",
        "Objectives: survival, maximum current profit, maximum market share, maximum skimming, product-quality leadership.",
        "Costs set the floor, customer value and demand the ceiling, competitors' prices a point of comparison between.",
        "Internal factors (costs, objectives, mix, brand image) and external ones (value and demand, competitors, economy, regulation, channels).",
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
    lead: "Buyers judge prices against reference prices in their minds; firms set price in six steps, from objective to final figure.",
    check: [
      ask("Starting from the price the market will pay and designing the product to meet the cost that allows is…", "Target costing", ["Mark-up pricing", "Going-rate pricing", "Target-return pricing"], "Target costing works back from price to cost. Mark-up pricing does the opposite: it starts from cost and adds a margin."),
      ask("A shopper sees a pressure cooker at ₹299 and assumes it must be poorly made. The price has fallen below her…", "Lower price threshold", ["Upper price threshold", "Going rate", "Break-even price"], "Below the lower threshold a price signals poor quality. Above the upper threshold the product seems not worth the money."),
      ask("Unit cost is ₹1,300 and the firm wants a 20% mark-up on the selling price. What is the mark-up price?", "₹1,625", ["₹1,560", "₹1,500", "₹1,320"], "₹1,300 ÷ (1 − 0.20) = ₹1,625, and 20% of ₹1,625 is ₹325. ₹1,560 adds 20% to cost instead of taking 20% of the selling price."),
    ],
    lens: [],
    reflect: "Think of a product whose price made you doubt its quality because it was too low. What was your lower price threshold?",
    summary: {
      points: [
        "Buyers act on perceived prices, judged against reference prices, with lower and upper thresholds.",
        "Six steps: objective, demand, costs, competitors, method, final price.",
        "Methods: cost-based (mark-up, target-return, break-even), value-based (perceived value, value pricing), competition-based (going-rate, sealed-bid).",
        "Mark-up price = unit cost ÷ (1 − return on sales); target-return price = unit cost + (return × capital) ÷ unit sales.",
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
    lead: "Firms price from cost, value or rivals, and launch new products by skimming (high, then lower) or penetration (low to win share).",
    check: [
      ask("Pricing at or near competitors' prices is…", "Going-rate pricing", ["Value-based pricing", "Cost-plus pricing", "Premium pricing"], "Going-rate pricing follows rivals, and suits commodities and oligopolies. Premium pricing deliberately sits above them."),
      ask("A firm launches a new gadget that few rivals can copy soon, and some buyers will pay a lot to own it first. Which launch strategy fits?", "Market skimming", ["Market penetration", "Everyday low pricing", "Customary pricing"], "Skimming suits innovative products, buyers willing to pay, and few competitors able to enter quickly. Penetration suits price-sensitive markets where costs fall with volume."),
      ask("A brand prices permanently above its nearest rivals to signal quality. Is that skimming?", "No; it is premium pricing, because the price is not meant to come down", ["Yes; any high price is skimming", "No; it is penetration pricing", "Yes; because it targets early adopters"], "A skimming price starts high and is lowered over time. A premium price stays above rivals for good."),
    ],
    lens: [],
    reflect: "Find an odd price like ₹99 or a bundle offer you have seen. Which strategy is it, and did it work on you?",
    summary: {
      points: [
        "Cost-plus, target-return, value-based and going-rate set price from cost, return, value or rivals.",
        "Skimming starts high and cuts in steps; penetration starts low to win share and need not rise later.",
        "Premium, customary, EDLP, psychological, differential and bundle pricing use image, habit, perception, segments and combinations.",
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
    lead: "Firms adapt one list price by geography, discounts and allowances, promotions and differentiated pricing.",
    check: [
      ask("A seller paid fully in cash who agrees to spend a substantial amount in the buyer's country has made…", "An offset", ["A barter", "A buyback arrangement", "A compensation deal"], "An offset is paid in full in cash. In a buyback the seller accepts part payment in products made with the equipment it supplied."),
      ask("A distributor gets a ₹1,00,000 bill on terms of ‘2/10, net 30’ and pays on day 8. How much does it pay?", "₹98,000", ["₹1,00,000", "₹70,000", "₹80,000"], "Paying within 10 days earns the 2% cash discount: ₹1,00,000 − ₹2,000. The full ₹1,00,000 is due only if it pays after day 10, within 30 days."),
      ask("A courier charges more to deliver to a remote hill town because the trip costs more. Is this price discrimination?", "No; the higher price reflects a real difference in cost", ["Yes; two buyers pay two prices", "Yes; it is location pricing", "No; it is a seasonal discount"], "Price discrimination means prices that do not reflect a proportional difference in costs. Location pricing, such as stadium seats, charges differently though each costs the same to provide."),
    ],
    lens: [],
    reflect: "Find two prices you paid recently that were adapted by time, place or customer group. Which kind of differentiated pricing was each?",
    summary: {
      points: [
        "Geographical pricing, including countertrade: barter, compensation deals, buyback arrangements and offsets.",
        "Discounts and allowances: cash, quantity, functional, seasonal, and allowances.",
        "Promotional pricing, from loss leaders to psychological discounting.",
        "Differentiated pricing (customer-segment, product-form, image, channel, location, time) is price discrimination: prices not proportional to cost.",
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
      ask("High quality at a low price is the…", "Super-value strategy", ["Premium strategy", "Economy strategy", "Good-value strategy"], "Super-value is high quality, low price. Economy also has a low price, but with low quality, so it sits on the diagonal."),
      ask("A brand sells an ordinary-quality mixer at the price of the best machines. Which strategy is it following?", "Overcharging", ["Premium", "Medium-value", "Rip-off"], "Medium quality at a high price is overcharging. Rip-off is low quality at a high price, which is worse still."),
      ask("Why are the overcharging, rip-off and false-economy strategies hard to sustain?", "Customers feel they paid more than the quality was worth, and complain", ["They need the highest quality", "They cost the most to produce", "They cannot coexist with any other strategy"], "All three overprice the product for its quality. Cost is not the problem: they charge more than the quality is worth."),
    ],
    lens: [],
    reflect: "Place two brands you know on the price-quality map. Which of the nine strategies is each following?",
    summary: {
      points: [
        "Buyers who lack information take price as a signal of quality.",
        "Diagonal strategies (premium, medium-value, economy) can coexist.",
        "High-value, super-value and good-value attack the diagonal; overcharging, rip-off and false economy overprice and are hard to sustain.",
      ],
      memory: "Diagonal coexists, above it attacks, below it overprices.",
    },
  },
];

export default lessons;
