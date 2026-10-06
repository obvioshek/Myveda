import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "characteristics-of-services",
    name: "Services and their characteristics",
    intro: "Five features that make services different from goods.",
    before: {
      q: "Can an airline sell yesterday's empty seat today?",
      choices: [
        { label: "Yes, later", reveal: "No. Services are perishable: they cannot be stored, so unused capacity is lost. Airlines respond with differential pricing and reservations." },
        { label: "No, it is lost", reveal: "Right. Services are perishable: they cannot be stored, so unused capacity is lost. Airlines respond with differential pricing and reservations." },
      ],
    },
    lead: "A service is an essentially intangible act or performance that does not result in the ownership of anything.",
    check: [
      ask("A doctor's consultation is produced and consumed at the same time. This is…", "Inseparability", ["Intangibility", "Variability", "Perishability"], "The provider is part of the service, so the people who deliver it must be trained."),
      ask("Restaurant service varies with who provides it, when and where. This is…", "Variability (heterogeneity)", ["Inseparability", "Lack of ownership", "Perishability"], "The response is to standardise processes, train staff and track satisfaction."),
      ask("How do marketers respond to intangibility?", "Make it tangible with evidence such as facilities, staff and testimonials", ["Use differential pricing", "Build membership schemes", "Hire part-time staff"], "Differential pricing and part-time staff answer perishability."),
    ],
    lens: [],
    reflect: "Think of a service you use, such as a bank or a coaching class. Which of the five characteristics causes it the most trouble?",
    summary: {
      points: [
        "Services marketing creates value through experiences, processes and interactions.",
        "Five characteristics: intangibility, inseparability, variability, perishability, lack of ownership.",
        "Each has a marketing response, from tangible evidence to matching supply and demand.",
      ],
      memory: "Intangible, inseparable, variable, perishable, not owned.",
    },
  },
  {
    blockId: "services-marketing-mix",
    name: "The services marketing mix: 7Ps",
    intro: "Three more Ps added to the four for services.",
    before: {
      q: "Are the 4Ps enough to market a service?",
      choices: [
        { label: "Yes", reveal: "Booms and Bitner (1981) thought not, and added people, process and physical evidence to make seven Ps." },
        { label: "No", reveal: "Right. Booms and Bitner (1981) added people, process and physical evidence to make seven Ps." },
      ],
    },
    lead: "The services mix adds people, process and physical evidence to product, price, place and promotion.",
    check: [
      ask("Who added the three extra Ps for services?", "Bernard Booms and Mary Jo Bitner", ["Parasuraman, Zeithaml and Berry", "Webster and Wind", "Henry Assael"], "They did so in 1981."),
      ask("A booking system belongs to which P?", "Process", ["People", "Place", "Physical evidence"], "Process is the procedures and flow by which the service is delivered."),
      ask("Offices, uniforms and brochures are examples of…", "Physical evidence", ["Promotion", "Product", "People"], "Physical evidence is the setting and tangible cues."),
    ],
    lens: [],
    reflect: "Visit a café or bank in your mind. Which of people, process and physical evidence does it handle best?",
    summary: {
      points: [
        "The 4Ps: product, price, place, promotion.",
        "Three added Ps: people, process, physical evidence (Booms and Bitner, 1981).",
        "People include everyone who takes part in delivering the service.",
      ],
      memory: "The 4Ps plus people, process and physical evidence.",
    },
  },
  {
    blockId: "service-quality-and-servqual",
    name: "Service quality and SERVQUAL",
    intro: "Quality measured as the gap between expectation and perception.",
    before: {
      q: "Is service quality simply how good the service is?",
      choices: [
        { label: "Yes", reveal: "SERVQUAL measures it differently: as the gap between what customers expected and what they perceived, on five dimensions." },
        { label: "It is a gap", reveal: "Right. SERVQUAL measures quality as the gap between customers' expectations and their perceptions of performance, on five dimensions." },
      ],
    },
    lead: "SERVQUAL measures service quality as the gap between expectations and perceptions on five dimensions: RATER.",
    check: [
      ask("Performing the promised service dependably and accurately is…", "Reliability", ["Assurance", "Responsiveness", "Empathy"], "Responsiveness is the willingness to help and give prompt service."),
      ask("The gap between the specifications and the service actually delivered is the…", "Delivery gap", ["Knowledge gap", "Standards gap", "Communication gap"], "It is gap 3 in the gaps model."),
      ask("The range between desired and adequate service, where variation goes largely unnoticed, is the…", "Zone of tolerance", ["Customer gap", "Evoked set", "Expectancy disconfirmation"], "Zeithaml, Berry and Parasuraman (1993)."),
    ],
    lens: [
      { pairing: 0, adds: "A saying that help given in time of need, however small, is greater than the world.", differs: "The couplet is about kindness between people. Responsiveness is one of five measured dimensions of a service firm's quality." },
    ],
    reflect: "Recall a service that let you down. Which RATER dimension failed, and which gap caused it?",
    summary: {
      points: [
        "SERVQUAL (1988): reliability, assurance, tangibles, empathy, responsiveness.",
        "Gaps model: knowledge, standards, delivery and communication gaps lead to the customer gap.",
        "Zone of tolerance; satisfaction models such as Oliver's expectancy disconfirmation.",
      ],
      memory: "Reliability, Assurance, Tangibles, Empathy, Responsiveness.",
    },
  },
  {
    blockId: "the-service-triangle",
    name: "The service triangle",
    intro: "Company, employees and customers, linked by three kinds of marketing.",
    before: {
      q: "Is marketing only what a company says to its customers?",
      choices: [
        { label: "Yes", reveal: "That is only external marketing. The service triangle adds internal marketing to employees and interactive marketing between employees and customers." },
        { label: "No", reveal: "Right. Besides external marketing to customers, there is internal marketing to employees and interactive marketing between employees and customers." },
      ],
    },
    lead: "The service triangle links company, employees and customers; each side is a kind of marketing, and all three are needed.",
    check: [
      ask("Hiring, training and motivating staff to serve customers well is…", "Internal marketing", ["External marketing", "Interactive marketing", "Relationship pricing"], "It runs between the company and its employees."),
      ask("Where are promises kept or broken?", "In interactive marketing, the service encounter", ["In external marketing", "In internal marketing", "In the brochure"], "Interactive marketing runs between employees and customers."),
    ],
    lens: [
      { pairing: 1, adds: "The anicham flower withers when smelt, but a guest withers at the host's cold look.", differs: "The couplet concerns a host's hospitality. Interactive marketing is one side of a triangle that also needs internal and external marketing." },
    ],
    reflect: "Think of a shop or office you visit. Which side of its triangle is weakest: promise, enable or deliver?",
    summary: {
      points: [
        "Internal marketing: company to employees; building a service culture.",
        "External marketing: company to customers; making promises.",
        "Interactive marketing: employees to customers; keeping promises in the service encounter.",
      ],
      memory: "Internal, external, interactive: promise, enable, deliver.",
    },
  },
];

export default lessons;
