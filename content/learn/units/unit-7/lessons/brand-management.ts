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
    lead: "Brand equity is the added value a brand gives a product in customers' minds; brand value is its worth in money.",
    check: [
      ask("If customers respond no differently to a branded product than to an unbranded one, the product is…", "Essentially a commodity", ["A strong brand", "A licensed product", "A sub-brand"], "Competition will then probably be based on price."),
      ask("What sits at the top of Keller's brand equity pyramid?", "Resonance", ["Salience", "Imagery", "Judgements"], "Salience, then performance and imagery, then judgements and feelings, then resonance."),
      ask("Which is one of Aaker's (1991) components of brand equity?", "Perceived quality", ["Brand value", "Price elasticity", "Brand line"], "Aaker lists loyalty, awareness, perceived quality, associations and other proprietary assets."),
    ],
    lens: [
      { pairing: 0, adds: "The view that to give and to live with renown is the only real gain of a life.", differs: "The couplet speaks of a person's good name earned through generosity. Brand equity is a commercial measure, with models such as Aaker's components and Keller's pyramid." },
    ],
    reflect: "Name a brand you would pay a premium for. What in your mind makes it worth more than an unbranded version?",
    summary: {
      points: [
        "A brand identifies one seller's goods and differentiates them from competitors.",
        "Keller: customer-based brand equity is the differential effect of brand knowledge on consumer response.",
        "Aaker's components and Keller's pyramid (salience, meaning, response, resonance) are two models of equity.",
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
    lead: "Equity models describe what a strong brand is made of and the steps by which it is built.",
    check: [
      ask("In the BrandAsset Valuator, energised differentiation and relevance together give…", "Brand strength", ["Brand stature", "Brand resonance", "Brand salience"], "Esteem and knowledge together give brand stature."),
      ask("The top level of the BrandZ brand dynamics pyramid is…", "Bonding", ["Presence", "Performance", "Advantage"], "Bonded consumers spend more on the brand."),
      ask("In Keller's resonance model, the base building block is…", "Salience", ["Resonance", "Feelings", "Imagery"], "Resonance is at the top."),
      ask("Which is NOT one of Aaker's five components of brand equity?", "Brand stature", ["Brand loyalty", "Perceived quality", "Brand associations"], "Stature belongs to the BrandAsset Valuator."),
    ],
    lens: [],
    reflect: "Choose a brand you are loyal to. Which level of the BrandZ pyramid are you at, and what moved you there?",
    summary: {
      points: [
        "BAV: differentiation, relevance, esteem, knowledge; strength and stature form the power grid.",
        "BrandZ: presence, relevance, performance, advantage, bonding.",
        "Keller: identity, meaning, response, relationships, on six blocks from salience to resonance; Aaker: five assets.",
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
    lead: "Kotler and Armstrong's four brand decisions: positioning, name selection, sponsorship and development.",
    check: [
      ask("A store's own brand is a…", "Private brand", ["Manufacturer's brand", "Licensed brand", "Co-brand"], "Sponsorship options are manufacturer's, private, licensed or co-branding."),
      ask("Under which naming strategy does one product's failure not harm the company name?", "Individual names", ["Blanket family name", "Separate family names", "Corporate name with individual names"], "Each product carries its own separate name."),
      ask("All the brand lines a seller offers make up its…", "Brand mix", ["Brand line", "Branded variants", "Family brand"], "A brand line is all products under one brand."),
    ],
    lens: [],
    reflect: "Pick a company with many products. Which naming strategy does it use, and why might it have chosen it?",
    summary: {
      points: [
        "Position on attributes, benefits or, strongest, beliefs and values.",
        "A good name is easy to say, distinctive, extendable, translatable and legally protectable.",
        "Sponsorship: manufacturer's, private, licensed or co-branding; development: line extensions, brand extensions, multibrands, new brands.",
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
    lead: "A brand portfolio uses several brands in a category, each with a role.",
    check: [
      ask("A brand positioned against competitors so the flagship can keep its position is a…", "Flanker brand", ["Cash cow", "Prestige brand", "Licensed brand"], "Flankers are also called fighter brands."),
      ask("A low-priced brand that draws customers in to be traded up later is a…", "Low-end entry brand", ["High-end prestige brand", "Flanker brand", "Private label"], "Retailers like these traffic builders."),
      ask("Which is a reason to have several brands in one category?", "To keep variety-seeking consumers who would otherwise switch", ["To reduce shelf space", "To avoid all internal competition", "To raise advertising costs"], "Others: more shelf space, internal competition, economies of scale."),
    ],
    lens: [],
    reflect: "Pick a carmaker or a consumer-goods firm. Which of its brands is a flanker, which a prestige brand, and which an entry brand?",
    summary: {
      points: [
        "A brand portfolio is all the brands and lines a firm offers in a category or segment.",
        "Reasons: shelf presence, variety-seekers, internal competition, economies of scale.",
        "Roles: flankers, cash cows, low-end entry brands, high-end prestige brands.",
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
    lead: "A brand extension uses a parent brand to launch a new product, with lower risk and cost but a danger of dilution.",
    check: [
      ask("New brands in an existing category, to capture different segments, are…", "Multibrands", ["Line extensions", "Brand extensions", "New brands"], "In the grid, new brand plus existing category gives multibrands."),
      ask("A lower-priced brand launched to protect the flagship is a…", "Fighter brand", ["Sub-brand", "Master brand", "Co-brand"], "Also called a flanker brand."),
      ask("When an extension blurs the brand's meaning, the result is…", "Brand dilution", ["Brand resonance", "Co-branding", "Brand salience"], "Dilution is one of the limitations of brand extension."),
    ],
    lens: [
      { pairing: 1, adds: "The saying that goodness of mind brings prosperity and good company brings every kind of renown.", differs: "The couplet is about a person's associates. Co-branding is a deliberate partnership that puts two established brands on one product." },
      { pairing: 2, adds: "The image of a fault in the well-born standing out like the spot on the moon high in the sky.", differs: "Its subject is conduct and lineage. Brand dilution is a specific risk of extension, alongside confusion, retailer resistance and cannibalisation." },
    ],
    reflect: "Think of a brand that has stretched into a new category. Did the extension strengthen the parent brand or blur it?",
    summary: {
      points: [
        "Parent, family or master brands, and sub-brands such as Cadbury Dairy Milk Silk.",
        "Grid: line extensions, brand extensions, multibrands, new brands; fighter brands protect the flagship.",
        "Gains: lower risk, lower cost, wider coverage. Risks: dilution, confusion, retailer resistance, cannibalisation.",
        "Co-branding puts two established brands on one product.",
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
    lead: "Brand loyalty is commitment to buy again and recommend; Aaker arranged its levels in a pyramid.",
    check: [
      ask("Price-sensitive buyers with no loyalty to any brand are…", "Switchers", ["Habitual buyers", "Brand likers", "Committed buyers"], "Switchers are the base of Aaker's pyramid."),
      ask("Buyers who like the brand and regard it as a friend are…", "Brand likers", ["Committed buyers", "Habitual buyers", "Switchers"], "They are level 4, just below committed buyers."),
    ],
    lens: [
      { pairing: 3, adds: "Friends whose bond grew from love do not withdraw it even when the friend brings them harm.", differs: "The couplet describes friendship between people. Aaker's pyramid sets out five levels of a customer's tie to a brand." },
    ],
    reflect: "Pick a brand you buy regularly. Where on Aaker's pyramid do you sit, and what would move you up or down?",
    summary: {
      points: [
        "Loyalty: buying again and recommending despite competitors' efforts.",
        "Aaker (1991): switchers, habitual buyers, satisfied buyers with switching costs, brand likers, committed buyers.",
        "The order follows Aaker, not the garbled glossary in the source sheet.",
      ],
      memory: "Switchers, habitual, switching costs, likers, committed.",
    },
  },
];

export default lessons;
