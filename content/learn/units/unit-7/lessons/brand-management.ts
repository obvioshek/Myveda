import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "brands-and-brand-equity",
    name: "Brands and brand equity",
    intro: "What a brand adds in customers' minds, and what it is worth in money.",
    before: {
      q: "Are brand equity and brand value the same thing?",
      choices: [
        { label: "Yes", reveal: "They differ. Brand equity is the added value a brand gives a product in customers' minds; brand value is the brand's financial worth." },
        { label: "No", reveal: "Right. Brand equity is the added value in customers' minds (trust, preference, loyalty); brand value is the brand's financial worth." },
      ],
    },
    lead: "A brand tells buyers who made a product; brand equity is the extra value that name adds in their minds, and brand value is its worth in money.",
    check: [
      ask("If customers respond no differently to a branded product than to an unbranded one, the product is…", "Essentially a commodity", ["A strong brand", "A licensed product", "A sub-brand"], "With no difference in response there is no brand equity, so competition will probably be on price. A strong brand is the opposite case: knowing the name changes how buyers respond."),
      ask("A company is sold, and the buyer puts a price of ₹500 crore on its brand name alone. That figure is the brand's…", "Brand value", ["Brand equity", "Brand promise", "Brand knowledge"], "A money figure put on the brand is its value. Brand equity is the added value in customers' minds, which shows in how they respond, not in a price tag."),
      ask("A branded pack of tea sells for ₹260 and an unbranded pack of the same tea for ₹220. If the brand sells 50,000 packs a month, its monthly premium is…", "₹20 lakh", ["₹2 lakh", "₹2 crore", "₹1.3 crore"], "The premium is ₹40 a pack, and ₹40 × 50,000 = ₹20,00,000, or ₹20 lakh. ₹1.3 crore is the brand's whole monthly sales, not the extra it earns from its name."),
    ],
    lens: [
      { pairing: 0, adds: "The view that to give and to live with renown is the only real gain of a life.", differs: "The couplet speaks of a person's good name earned through generosity. Brand equity is a commercial measure, with models such as Aaker's components and Keller's pyramid." },
    ],
    reflect: "Name a brand you would pay a premium for. What in your mind makes it worth more than an unbranded version?",
    summary: {
      points: [
        "AMA: a brand identifies one seller's goods and differentiates them from competitors.",
        "Keller: customer-based brand equity is the differential effect of brand knowledge on consumer response.",
        "Equity lives in customers' minds; value is a money figure. Equity can be positive or negative.",
        "Aaker's five components and Keller's pyramid (salience, meaning, response, resonance) are two models of equity.",
      ],
      memory: "Equity lives in customers' minds; value is what the brand is worth in money.",
    },
  },
  {
    blockId: "brand-equity-models",
    name: "Brand equity models",
    intro: "BAV, BrandZ, Keller's resonance model and Aaker's model.",
    before: {
      q: "Does a well-known brand always have strong brand equity?",
      choices: [
        { label: "Yes", reveal: "Not necessarily. In the BrandAsset Valuator, declining brands show high knowledge but lower esteem, relevance and differentiation." },
        { label: "No", reveal: "Right. A declining brand can be widely known yet weak in esteem, relevance and differentiation." },
      ],
    },
    lead: "Equity models split a brand's strength into parts, so a manager can see which part is weak and what to build next.",
    check: [
      ask("In the BrandAsset Valuator, energised differentiation and relevance together give…", "Brand strength", ["Brand stature", "Brand resonance", "Brand salience"], "Strength looks forward and predicts growth. Stature is the other pair, esteem and knowledge, and reports on past performance."),
      ask("A hair-oil brand is known in every household, but young buyers find it old-fashioned and no different from others. On the BAV power grid, this is the pattern of a…", "Declining brand", ["New brand", "Leadership brand", "Brand with high strength"], "High knowledge with low relevance and differentiation marks a declining brand. A new brand shows the reverse: more differentiation and energy than knowledge."),
      ask("A shopper keeps a biscuit brand on her short-list because it performs acceptably, but sees no edge over rivals. On the BrandZ pyramid, which level should the marketer move her to next?", "Advantage", ["Bonding", "Relevance", "Presence"], "She is at performance, so the next level up is advantage. Bonding is the top, but a buyer reaches it only after seeing an advantage."),
    ],
    lens: [],
    reflect: "Choose a brand you are loyal to. Which level of the BrandZ pyramid are you at, and what moved you there?",
    summary: {
      points: [
        "BAV: differentiation, relevance, esteem, knowledge; strength (forward) and stature (backward) form the power grid.",
        "BrandZ: presence, relevance, performance, advantage, bonding.",
        "Keller: identity, meaning, response, relationships, on six blocks from salience to resonance.",
        "Aaker: equity as assets and liabilities, under five heads.",
      ],
      memory: "BAV's four pillars, BrandZ's pyramid, Keller's resonance, Aaker's five assets.",
    },
  },
  {
    blockId: "brand-strategy-decisions",
    name: "Major brand strategy decisions",
    intro: "Position, name, sponsor and develop the brand.",
    before: {
      q: "What is the strongest basis for positioning a brand?",
      choices: [
        { label: "Product attributes", reveal: "Attributes are the weakest of the three. The strongest positioning rests on beliefs and values that carry emotional weight." },
        { label: "Beliefs and values", reveal: "Right. Positioning on beliefs and values that carry emotional weight is stronger than on attributes or benefits." },
      ],
    },
    lead: "Kotler and Armstrong's four brand decisions: how to position the brand, what to name it, whose name it carries, and how it grows.",
    check: [
      ask("A supermarket's own-label masala is a…", "Private (store) brand", ["Manufacturer's brand", "Licensed brand", "Co-brand"], "The retailer's own name is a private or store brand. A manufacturer's brand carries the maker's name, and a licensed brand uses a name leased from another owner."),
      ask("A firm wants every product to stand alone, so that one product's failure cannot harm the company name. Which naming strategy fits?", "Individual names", ["Blanket family name", "Corporate name with individual names", "Separate family names"], "Only individual names keep the company name off the product. A corporate name with individual names still links every product to the company."),
      ask("Which positioning line for a masala brand would be hardest for rivals to copy?", "‘Cook for your family the way your mother did’", ["‘No added colour’", "‘Tastes like spices ground at home’", "‘Now in a resealable pack’"], "Beliefs and values carry emotional weight and are the strongest level. ‘No added colour’ is an attribute, the easiest level to copy."),
    ],
    lens: [],
    reflect: "Pick a company with many products. Which naming strategy does it use, and why might it have chosen it?",
    summary: {
      points: [
        "Four decisions: positioning, name selection, sponsorship, development.",
        "Position on attributes, benefits or, strongest, beliefs and values.",
        "Sponsorship: manufacturer's, private, licensed or co-branding.",
        "Naming: individual, blanket family, separate family, or corporate with individual names.",
      ],
      memory: "Position, name, sponsor, develop.",
    },
  },
  {
    blockId: "brand-portfolios",
    name: "Brand portfolios",
    intro: "Why firms keep several brands, and the roles they play.",
    before: {
      q: "Why would a firm keep a brand whose sales are falling?",
      choices: [
        { label: "It wouldn't", reveal: "It might. A cash-cow brand can stay profitable with almost no marketing support, so the firm milks its remaining equity." },
        { label: "To milk it", reveal: "Right. A cash-cow brand stays profitable with almost no marketing support." },
      ],
    },
    lead: "A brand portfolio is all the brands a firm sells in one market, each with a job: to fight, to earn, to draw buyers in, or to add prestige.",
    check: [
      ask("A brand kept on sale despite falling sales, because it stays profitable with almost no marketing support, is a…", "Cash cow", ["Flanker brand", "Low-end entry brand", "High-end prestige brand"], "The firm milks the cash cow's remaining equity. A flanker is the opposite: an active brand launched to fight a rival."),
      ask("A premium detergent maker launches a cheaper second brand only to fight a price-cutting rival. The second brand is a…", "Flanker brand", ["Low-end entry brand", "Cash cow", "High-end prestige brand"], "A flanker exists to protect the flagship from a rival. An entry brand is also cheap, but its job is to draw new buyers in and trade them up later."),
      ask("Dropping one of a firm's five shampoo brands would raise its total profit. What does this suggest?", "The portfolio is too big", ["The portfolio is too small", "The firm should add a flanker", "The dropped brand must be the flagship"], "If profit rises when a brand is dropped, the firm has more brands than it needs. A portfolio is too small when adding a brand would raise profit."),
    ],
    lens: [],
    reflect: "Pick a carmaker or a consumer-goods firm. Which of its brands is a flanker, which a prestige brand, and which an entry brand?",
    summary: {
      points: [
        "A brand portfolio is all the brands and lines a firm offers in a category or segment.",
        "Reasons: shelf space, variety-seekers, internal competition, economies of scale.",
        "Roles: flankers, cash cows, low-end entry brands, high-end prestige brands.",
        "Too big if dropping a brand raises profit; too small if adding one would.",
      ],
      memory: "Flankers, cash cows, entry brands, prestige brands.",
    },
  },
  {
    blockId: "brand-extensions",
    name: "Brand extensions",
    intro: "Using an established brand to launch something new.",
    before: {
      q: "A noodle brand launches ketchup. Is that a line extension?",
      choices: [
        { label: "Yes", reveal: "It is a category extension: the brand enters a different product category. A line extension stays in the same category, such as a new noodle variety." },
        { label: "No, a category one", reveal: "Right. Entering a different category is a category extension; a new noodle variety would be a line extension." },
      ],
    },
    lead: "A brand extension uses a known name to launch a new product: lower cost and risk, but a danger of blurring what the name means.",
    check: [
      ask("New brand names in an existing category, used to capture different segments, are…", "Multibrands", ["Line extensions", "Brand extensions", "New brands"], "New name plus existing category gives multibrands. ‘New brands’ is the cell where both the name and the category are new."),
      ask("A noodle brand launches ketchup under the same name. In Kotler and Armstrong's grid, this is a…", "Brand extension", ["Line extension", "Multibrand", "Co-brand"], "An existing name in a new category is a brand extension. A line extension stays in the same category, such as a new noodle flavour."),
      ask("A new ketchup sells 10 lakh bottles a month. 4 lakh of those buyers left the firm's own older sauce, but were about to switch to a rival anyway. This is…", "Pre-emptive cannibalisation", ["Brand dilution", "A product failure", "Co-branding"], "40% of the sales came from the firm's own product, but those buyers would have been lost anyway, so the cannibalisation is pre-emptive. Dilution is a blurring of the brand's meaning, not a shift in sales."),
    ],
    lens: [
      { pairing: 1, adds: "The saying that goodness of mind brings prosperity and good company brings every kind of renown.", differs: "The couplet is about a person's associates. Co-branding is a deliberate partnership that puts two established brands on one product." },
      { pairing: 2, adds: "The image of a fault in the well-born standing out like the spot on the moon high in the sky.", differs: "Its subject is conduct and lineage. Brand dilution is a specific risk of extension, alongside confusion, retailer resistance and cannibalisation." },
    ],
    reflect: "Think of a brand that has stretched into a new category. Did the extension strengthen the parent brand or blur it?",
    summary: {
      points: [
        "Parent, family or master brands, and sub-brands such as Cadbury Dairy Milk Silk.",
        "Grid: line extensions, brand extensions, multibrands, new brands.",
        "Gains: lower risk, lower cost, wider coverage. Risks: dilution, confusion, retailer resistance, cannibalisation.",
        "Kotler and Keller use ‘brand extension’ for both line and category extensions; Kotler and Armstrong for a new category only.",
      ],
      memory: "Extend the line, extend the brand, add brands, or start anew.",
    },
  },
  {
    blockId: "brand-loyalty",
    name: "Brand loyalty",
    intro: "Aaker's pyramid, from switchers to committed buyers.",
    before: {
      q: "A buyer keeps buying a brand only because changing would cost time and money. Is that the top of the loyalty pyramid?",
      choices: [
        { label: "Yes", reveal: "That is level 3, satisfied buyers with switching costs. Above them come brand likers and, at the top, committed buyers who are proud to recommend the brand." },
        { label: "No, the middle", reveal: "Right. That is level 3. Above it come brand likers and, at the top, committed buyers who are proud to use and recommend the brand." },
      ],
    },
    lead: "Brand loyalty is a firm commitment to buy again and recommend; Aaker arranged its levels in a pyramid from switchers to committed buyers.",
    check: [
      ask("Price-sensitive buyers with no loyalty to any brand are…", "Switchers", ["Habitual buyers", "Brand likers", "Committed buyers"], "Switchers are the base of Aaker's pyramid. Habitual buyers, one level up, stay because they have no reason to change, not because of price."),
      ask("A customer keeps using one tea stall only because she would lose the free tenth cup on her loyalty card. Which level is she at?", "Satisfied buyer with switching costs", ["Habitual buyer", "Brand liker", "Committed buyer"], "Losing the free cup is a switching cost, so she is at level 3. A habitual buyer stays out of convenience and would lose nothing by changing."),
      ask("Which customer shows the highest level of brand loyalty?", "One who is proud to use the brand and recommends it to friends", ["One who buys it every week out of habit", "One who stays to keep loyalty-card points", "One who buys it whenever it is on offer"], "Pride and recommendation mark committed buyers, the top level. Buying every week out of habit is repeat buying, which is only level 2."),
    ],
    lens: [
      { pairing: 3, adds: "Friends whose bond grew from love do not withdraw it even when the friend brings them harm.", differs: "The couplet describes friendship between people. Aaker's pyramid sets out five levels of a customer's tie to a brand." },
    ],
    reflect: "Pick a brand you buy regularly. Where on Aaker's pyramid do you sit, and what would move you up or down?",
    summary: {
      points: [
        "Loyalty: a commitment to buy again and recommend, despite rivals' efforts.",
        "Aaker (1991): switchers, habitual buyers, satisfied buyers with switching costs, brand likers, committed buyers.",
        "Repeat buying is not the same as loyalty; the order follows Aaker, and study notes often muddle it.",
      ],
      memory: "Switchers, habitual, switching costs, likers, committed.",
    },
  },
];

export default lessons;
