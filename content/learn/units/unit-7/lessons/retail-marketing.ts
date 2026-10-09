import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "retailing-and-store-retailers",
    name: "Retailing and store retailers",
    intro: "Selling to final consumers, and the kinds of store that do it.",
    before: {
      q: "Is a sale to a business for its own use a retail sale?",
      choices: [
        { label: "Yes", reveal: "No. Retailing is selling goods or services directly to final consumers for their personal, non-business use." },
        { label: "No", reveal: "Right. Retailing is selling goods or services directly to final consumers for their personal, non-business use." },
      ],
    },
    lead: "Retailing is the last sale in the channel, to people who use the product themselves; store retailers are classified by service, product line, price and organisation.",
    check: [
      ask("A narrow but deep product line with expert advice describes a…", "Specialty store", ["Department store", "Convenience store", "Superstore"], "A specialty store goes deep in one narrow line and adds expert advice. A superstore can also go deep in one line (a category killer), but it is a very large store, not a narrow specialist."),
      ask("A shoe manufacturer opens a factory outlet and sells its own shoes to shoppers. What is it doing?", "Retailing, though the firm is a manufacturer", ["Wholesaling, because it is a manufacturer", "Direct marketing, because no store is involved", "Nothing new: only retailers can retail"], "Any organisation selling to final consumers for personal use is retailing, whatever it calls itself. Being a manufacturer does not make the sale wholesale: the buyer is the final consumer."),
      ask("Store A sells ₹1 lakh a day at a 20% margin; store B sells ₹4 lakh a day at an 8% margin. Which earns more gross margin in rupees?", "Store B: ₹32,000 against ₹20,000", ["Store A: its margin is higher", "Both earn the same", "Store B: ₹40,000 against ₹20,000"], "₹4,00,000 × 8% = ₹32,000; ₹1,00,000 × 20% = ₹20,000. A higher percentage does not mean more rupees when volume is four times lower. ₹40,000 would need a 10% margin."),
    ],
    lens: [
      { pairing: 0, adds: "A superintendent who makes and stamps standard weights and measures, and fines for traders who cheat buyers.", differs: "The passage concerns a state's control of traders. Retail marketing adds the classification of stores by service, product line, price and organisation." },
    ],
    reflect: "Where do you buy groceries? Place that store by its service level and its type, and say what it does that the list does not capture.",
    summary: {
      points: [
        "Retailing: selling directly to final consumers for personal, non-business use; anyone can do it.",
        "The retailer is the final link in the channel and passes feedback back up.",
        "Service levels: self-service, self-selection, limited service, full service.",
        "Store types range from specialty and department stores to supermarkets, discounters and superstores with category killers.",
        "Low margin with high volume can earn more rupees than high margin with low volume.",
      ],
      memory: "By service, by product line, by price, by organisation.",
    },
  },
  {
    blockId: "non-store-and-corporate-retailing",
    name: "Non-store and corporate retailing",
    intro: "Selling without a store, and how retailers organise.",
    before: {
      q: "Can independent retailers get the buying power of a chain?",
      choices: [
        { label: "No", reveal: "They can. A voluntary chain organised by a wholesaler, or a retailer cooperative with central buying, gives independents group buying." },
        { label: "Yes", reveal: "Right. A voluntary chain organised by a wholesaler, or a retailer cooperative with central buying, gives independents group buying." },
      ],
    },
    lead: "Retail also happens without stores, and retailers combine as chains, cooperatives, franchises and conglomerates to gain buying power and scale.",
    check: [
      ask("A retail firm owned by its customers, who contribute capital, vote on policy and receive dividends, is a…", "Consumer cooperative", ["Retailer cooperative", "Voluntary chain", "Franchise organisation"], "Only a consumer cooperative is owned by its customers. A retailer cooperative is owned by independent retailers who buy together."),
      ask("A wholesaler signs up forty independent grocers for group buying and common displays. This is a…", "Voluntary chain", ["Retailer cooperative", "Corporate chain", "Consumer cooperative"], "The wholesaler organises it, which makes it a voluntary chain. In a retailer cooperative the retailers set up the buying body themselves; in a corporate chain one owner owns every outlet."),
      ask("A store sells a branded pack at ₹100 that costs it ₹80, and its own label at ₹90 that costs it ₹60. Which earns more per pack, and why might it push the own label?", "The own label: ₹30 against ₹20, and the shopper pays less", ["The brand: it sells at a higher price", "Both earn ₹20 per pack", "The own label: ₹10 more on the selling price"], "Margins are ₹100 − ₹80 = ₹20 and ₹90 − ₹60 = ₹30. A higher selling price does not mean a higher margin; what matters is price minus cost."),
    ],
    lens: [],
    reflect: "Name a franchise outlet near you. What does the franchisee get from the franchisor's brand and system, and what freedom does it give up?",
    summary: {
      points: [
        "Non-store: direct selling (in person), direct marketing (through media), automatic vending, buying services.",
        "Corporate forms: corporate and voluntary chains, retailer and consumer cooperatives, franchises, conglomerates.",
        "Voluntary chain: organised by a wholesaler. Retailer cooperative: organised by the retailers. Consumer cooperative: owned by customers.",
        "Private labels give the retailer control of price and quality, higher margins and loyalty.",
      ],
      memory: "Chain, voluntary chain, cooperative, franchise, conglomerate.",
    },
  },
  {
    blockId: "trends-in-indian-retail",
    name: "Trends in Indian and world retail",
    intro: "Organised, online, digital and reaching smaller towns.",
    before: {
      q: "Is the neighbourhood kirana store being left behind?",
      choices: [
        { label: "Left behind", reveal: "Not simply. Kiranas are modernising, adding self-service, home delivery, credit and digital ordering, and they keep the edge of personal service." },
        { label: "Modernising", reveal: "Right. Kiranas are adding self-service, home delivery, credit and digital ordering, and they keep the edge of personal service." },
      ],
    },
    lead: "Indian retail is growing more organised, online and digital and is spreading into smaller cities, while kiranas adapt rather than disappear.",
    check: [
      ask("FDI in single-brand retail is allowed up to…", "100 per cent through the automatic route", ["51 per cent with government approval", "26 per cent through the automatic route", "100 per cent with government approval"], "Single-brand retail has allowed 100 per cent through the automatic route since 2018. The 51 per cent limit with approval applies to multi-brand retail, since 2012."),
      ask("A supermarket, a kirana and an online grocer all compete for the same family's monthly shopping. This trend is called…", "Intertype competition", ["Shopper marketing", "Convenience shopping", "Kirana modernisation"], "Different kinds of store competing for the same buyers is intertype competition. Shopper marketing is about influencing buyers at the point of purchase."),
      ask("A foreign group wants to open supermarkets in India selling many brands. Which rule applies?", "Multi-brand: up to 51 per cent, with government approval", ["Single-brand: 100 per cent, automatic route", "No foreign ownership is allowed in retail", "Multi-brand: 100 per cent, automatic route"], "A supermarket selling many brands is multi-brand retail. The automatic 100 per cent route is for a firm selling only its own brand."),
    ],
    lens: [],
    reflect: "How has the way your family shops changed in the last few years? Which trend explains it, and what has the local kirana done in response?",
    summary: {
      points: [
        "Organised retail: registered chains; unorganised: kiranas, owner-run shops and vendors.",
        "Demographic change, convenience, online retail, technology and digital payments drive change; kiranas are modernising.",
        "FDI: 100 per cent single-brand (automatic, 2018); up to 51 per cent multi-brand (approval, 2012).",
        "Worldwide: new combinations, intertype competition, giant and global retailers, shopper marketing, store experience.",
      ],
      memory: "Organised, online, digital and reaching smaller towns.",
    },
  },
];

export default lessons;
