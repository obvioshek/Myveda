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
    lead: "Retailing sells to final consumers; store retailers are classified by service, product line, relative prices and organisation.",
    check: [
      ask("A narrow but deep product line with expert advice describes a…", "Specialty store", ["Department store", "Convenience store", "Superstore"], "A department store runs several product lines as separate departments."),
      ask("Leftover, surplus or irregular branded goods sold below regular prices are found in an…", "Off-price retailer", ["Hard discounter", "Catalogue showroom", "Specialty store"], "Factory outlets are an example."),
      ask("Supermarkets are classified by…", "Product line", ["Amount of service", "Relative prices", "Organisation"], "Kotler and Armstrong use all four bases."),
    ],
    lens: [
      { pairing: 0, adds: "A superintendent who makes and stamps standard weights and measures, and fines for traders who cheat buyers.", differs: "The passage concerns a state's control of traders. Retail marketing adds the classification of stores by service, product line, price and organisation." },
    ],
    reflect: "Where do you buy groceries? Place that store by its service level and its type.",
    summary: {
      points: [
        "The retailer is the final link in the channel and passes feedback back up.",
        "Service levels: self-service, self-selection, limited service, full service.",
        "Store types range from specialty and department stores to superstores and category killers.",
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
    lead: "Retail also happens without stores, and retailers organise as chains, cooperatives, franchises and conglomerates.",
    check: [
      ask("A retail firm owned by its customers, who share the profits, is a…", "Consumer cooperative", ["Retailer cooperative", "Voluntary chain", "Franchise organisation"], "A retailer cooperative is owned by independent retailers."),
      ask("Personal selling at home or work, including multi-level marketing, is…", "Direct selling", ["Direct marketing", "Automatic vending", "Buying service"], "Direct marketing uses mail, telemarketing, TV shopping and the internet."),
      ask("What do private labels give a retailer?", "More control over price and quality, and higher margins", ["Lower margins", "Less customer loyalty", "No control over quality"], "They also build stronger customer loyalty."),
    ],
    lens: [],
    reflect: "Name a franchise outlet near you. What does the franchisee get from the franchisor's brand and system?",
    summary: {
      points: [
        "Non-store: direct selling, direct marketing, automatic vending, buying services.",
        "Corporate forms: corporate and voluntary chains, cooperatives, franchises, conglomerates.",
        "Private labels give control, margins and loyalty.",
      ],
      memory: "Chain, voluntary chain, cooperative, franchise, conglomerate.",
    },
  },
  {
    blockId: "trends-in-indian-retail",
    name: "Recent trends in Indian retail",
    intro: "Organised, online, digital and reaching smaller towns.",
    before: {
      q: "Is the neighbourhood kirana store being left behind?",
      choices: [
        { label: "Left behind", reveal: "Not simply. Kiranas are modernising, adding self-service, home delivery, credit and digital ordering." },
        { label: "Modernising", reveal: "Right. Kiranas are adding self-service, home delivery, credit and digital ordering." },
      ],
    },
    lead: "Indian retail is growing more organised, online and digital, and is spreading into smaller cities.",
    check: [
      ask("FDI in single-brand retail is allowed up to…", "100 per cent through the automatic route", ["51 per cent with approval", "26 per cent only", "Not allowed"], "Since 2018; multi-brand retail allows up to 51 per cent with government approval."),
      ask("Growth into Tier-II and Tier-III cities is the trend called…", "Expansion", ["Convenience shopping", "Partnerships", "Demographic change"], "Convenience shopping refers to malls and one-stop organised retail."),
      ask("Cards, UPI and digital wallets reducing cash use are the trend of…", "Digital payments", ["Technology", "Online retail", "Smarter consumers"], "Technology here means barcode scanners, CCTV, signage and automation."),
    ],
    lens: [],
    reflect: "How has the way your family shops changed in the last few years? Which trend explains it?",
    summary: {
      points: [
        "Demographic change and convenience shopping drive organised retail.",
        "Online retail, technology and digital payments are reshaping stores; kiranas are modernising.",
        "FDI: 100 per cent single-brand (automatic, 2018); up to 51 per cent multi-brand (approval, 2012).",
      ],
      memory: "Organised, online, digital and reaching smaller towns.",
    },
  },
];

export default lessons;
