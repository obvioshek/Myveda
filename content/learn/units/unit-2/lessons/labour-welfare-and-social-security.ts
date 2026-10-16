import { ask, type Lesson } from "@/content/learn/lesson-kit";

const lessons: Lesson[] = [
  {
    blockId: "labour-welfare-and-its-theories",
    name: "Labour welfare and its theories",
    intro: "Care for workers beyond wages, and the seven reasons employers give it.",
    before: {
      q: "Does an employer who builds a canteen always do it out of kindness?",
      choices: [
        { label: "Always", reveal: "Not always. Motives differ: the law, faith, calm, image or output can each be the reason." },
        { label: "Not always", reveal: "Right. The seven theories of labour welfare are seven different motives." },
      ],
    },
    lead: "Labour welfare is care for workers over and above wages, and its seven theories (policing, religious, philanthropic, paternalistic, placating, public relations, functional) are seven motives for giving it.",
    check: [
      ask("Which theory says that employers will not act unless forced, so the state must fix a minimum standard?", "Policing theory", ["Placating theory", "Paternalistic theory", "Functional theory"], "Under the policing theory, the state does the policing by setting a legal minimum. The placating theory is about calming organised workers, not about the law."),
      ask("An owner announces a new canteen and sports ground the week before wage talks, hoping to calm the workers. Which theory fits?", "Placating theory", ["Public relations theory", "Philanthropic theory", "Functional theory"], "Placating uses timely welfare gestures to calm organised, demanding workers. Public relations aims at the firm's image with workers and the public, not at calming a union before talks."),
      ask("Which statement about the paternalistic or trusteeship theory is correct?", "The employer holds the business in trust for workers and society and acts as their guardian; Gandhi's trusteeship is a related but wider idea", ["Employers help workers only when the state forces them to do so", "Welfare is a way to build goodwill and a good image with the public", "Welfare works only when workers choose the facilities themselves"], "The theory pictures workers as wards of a guardian employer. Gandhi's idea is about holding wealth for society and is not the same thing. Forcing employers is the policing theory."),
    ],
    lens: [
      { pairing: 0, adds: "Taking without giving back is treated as a fault.", differs: "The verse concerns sacrifice and the cycle between gods and people. Welfare theories differ on why an employer should give: duty, charity, pressure, goodwill or productivity." },
    ],
    reflect: "Think of a welfare scheme you know. Which motive do you think lies behind it, and would workers agree?",
    summary: {
      points: [
        "Labour welfare: services, facilities and amenities for workers, over and above wages, from employers, unions, government and other bodies.",
        "Aims: health, comfort and morale for workers; a steadier workforce and better relations for employers.",
        "Seven theories (motives): policing, religious, philanthropic, paternalistic or trusteeship, placating, public relations, functional.",
        "Religious, philanthropic and paternalistic motives treat welfare as a favour, not a right.",
        "Trusteeship theory is related to Gandhi's trusteeship but is narrower.",
      ],
      memory: "Law, faith, love, guardianship, calm, image, output.",
    },
  },
  {
    blockId: "types-of-welfare-facilities",
    name: "Types of welfare facilities",
    intro: "Five types, sorted by place and by who provides them.",
    before: {
      q: "Can one welfare facility belong to two types at once?",
      choices: [
        { label: "No", reveal: "It can. Place and provider are two separate ways of sorting, so a canteen can be both intra-mural and statutory." },
        { label: "Yes", reveal: "Right. Intra-mural and extra-mural sort by place; statutory, voluntary and mutual sort by who." },
      ],
    },
    lead: "Intra-mural and extra-mural facilities are sorted by place; statutory, voluntary and mutual ones by who provides or requires them.",
    check: [
      ask("A facility provided inside the factory premises, such as a first-aid room, is called…", "Intra-mural", ["Extra-mural", "Mutual", "Voluntary"], "Intra-mural means inside the workplace. Extra-mural is outside it; voluntary says who provides, not where."),
      ask("The workers of a factory run their own cooperative credit society, and the employer plays little part. Which type is this?", "Mutual", ["Voluntary", "Statutory", "Intra-mural"], "Mutual facilities come from the workers' own effort. Voluntary facilities come from the employer's choice, which is the tempting mix-up."),
      ask("A large factory has a canteen that the law requires. How is it best classed?", "Both intra-mural and statutory, because the two classifications use different bases", ["Statutory only, because the law decides it", "Voluntary, because the employer runs it", "Extra-mural, because workers use it in breaks"], "Place and provider are separate ways to sort, so one facility can carry both labels. The canteen is inside the workplace and required by law. It is not voluntary, because the employer has no choice."),
    ],
    lens: [],
    reflect: "List the welfare facilities at a workplace you know and tag each by place and by provider.",
    summary: {
      points: [
        "By place: intra-mural (inside the workplace) and extra-mural (outside it).",
        "By provider: statutory (required by law), voluntary (employer's choice), mutual (workers' own effort).",
        "Examples: drinking water, canteen, crèche, rest rooms and first aid are intra-mural; housing, recreation and education are extra-mural.",
        "The Factories Act's basic amenities are now consolidated in the Occupational Safety, Health and Working Conditions Code, 2020.",
        "Not every extra-mural facility is voluntary; plantation law requires housing.",
      ],
      memory: "Place: in or out. Provider: law, employer, workers.",
    },
  },
  {
    blockId: "social-security-in-india",
    name: "Social security in India",
    intro: "A safety net against the breaks in a working life, and the Indian instruments.",
    before: {
      q: "Do wages alone protect a worker who falls ill for three months?",
      choices: [
        { label: "Yes", reveal: "No. Wages stop when work stops, which is why social security exists." },
        { label: "No", reveal: "Right. Social security gives money or care when earning stops for sickness, childbirth, injury, old age or unemployment." },
      ],
    },
    lead: "Social security protects workers when earnings stop; India's provident fund, state insurance, gratuity, maternity benefit and employee compensation are now consolidated in the Code on Social Security, 2020.",
    check: [
      ask("Which instrument is a lump sum that the employer alone pays in recognition of long service?", "Gratuity", ["Provident fund", "Employees' state insurance", "Maternity benefit"], "Gratuity is paid by the employer alone for long service. The provident fund is built from contributions by both employee and employer."),
      ask("A woman employee is about to have a child and will be away from work. Which instrument protects her pay and care around childbirth?", "Maternity benefit", ["Gratuity", "Provident fund", "Employees' compensation"], "Maternity benefit gives paid leave and medical care around childbirth. Employees' compensation is for harm caused by work, and childbirth is not that."),
      ask("A student writes: 'The Code on Social Security, 2020 means the provident fund and gratuity no longer exist.' What is wrong with this?", "The Code consolidates the older laws and carries the benefits forward; it does not remove them", ["Nothing; the Code ended all those benefits", "The Code applies only to gig workers", "The Code has not yet come into force"], "The Code, in force since 21 November 2025, brings the older laws into one place. The benefits continue. It also reaches gig and platform workers, but not only them."),
    ],
    lens: [],
    reflect: "Does everyone who works for your organisation, including contract staff, have these protections? How would you check?",
    summary: {
      points: [
        "Social security: protection against lost earnings from sickness, maternity, injury, old age and unemployment.",
        "Instruments: provident fund (retirement savings), employees' state insurance (medical and cash benefits), gratuity (employer's lump sum), maternity benefit, employee compensation (injury caused by work).",
        "The Code on Social Security, 2020, in force since 21 November 2025, consolidates the older laws; older exam questions use the old Acts' names.",
        "Welfare is facilities at or near work; social security protects income and health against life risks.",
        "Coverage gaps remain, especially for informal workers.",
      ],
      memory: "Provident fund, ESI, gratuity, maternity, compensation: one Code.",
    },
  },
];

export default lessons;
