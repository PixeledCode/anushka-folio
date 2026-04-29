export const homePage = {
  heroGreeting: "Hi, I'm Anushka —",
  heroTagline: "Product Designer & Number-Crunching Storyteller",
  popoverQuote:
    "Author John Allen Paulos’s fondly dedicates his book ‘A Mathematician Reads the Newspaper’ to storytelling number-crunchers and number-crunching storytellers.",
  cursorTooltipText: "sometimes animals and birds",
  bioDomains:
    "I have worked on design, research, and strategy for tech products from domains like **Lending, Data Exchange, Health, Agricultural Trading, Fraud Prevention,** and more.",
  bioExperience:
    "I have **5+ years of experience**, a background in public policy, and expertise in designing for social impact. I strive to create inclusive, accessible interfaces for **data products** and **enterprise solutions**.",
};

export const collaborateTitles = [
  "product owners",
  "project managers",
  "researchers",
  "govt officials",
  "data engineers",
  "developers",
];

export const marqueeCompanies: { src: string; alt: string }[] = [
  { src: "/companies/1.png", alt: "company 1" },
  { src: "/companies/2.png", alt: "company 2" },
  { src: "/companies/3.png", alt: "company 3" },
  { src: "/companies/4.png", alt: "company 4" },
  { src: "/companies/5.png", alt: "company 5" },
  { src: "/companies/6.png", alt: "company 6" },
  { src: "/companies/7.png", alt: "company 7" },
  { src: "/companies/8.png", alt: "company 8" },
];

export const musings: {
  title: string;
  subtitle: string;
  image: string;
  locationTag?: string;
  statsTag?: string;
}[] = [
  {
    title: "Policy in Action Fellow @ YLAC",
    subtitle:
      "I learned public policy basics and drafted recommendations to optimise student's entry into UG medical education in India.",
    image: "/ylac.png",
    locationTag: "Delhi",
    statsTag: "50+ Professionals, 1 Designer",
  },
  {
    title: "Visiting Faculty @ Srishti Manipal",
    subtitle:
      "I facilitated the course 'Information Visualisation' over 6 weeks for 25 third-year undergraduate students.",
    image: "/smi.png",
    locationTag: "Bengaluru",
  },
  {
    title: "Yatri @ Jagriti Yatra",
    subtitle:
      "I lived on a train for 15 days and explored India to better understand the 1 billion people we design for every day.",
    image: "/jy.png",
    locationTag: "8000 KM across 10 States",
    statsTag: "500 People on 1 train",
  },
];

export const about = {
  paragraphs: [
    "I graduated from 🎓 **Srishti in 2020** with a B.Des in Industrial Design. Originally from Pune, I am now **based in 📍 Bengaluru**.",
    "After exploring the realm of enterprise products, I made a shift into the impact sector. Alongside hands-on design work, I have led teams, managed client interactions, drafted product maps, created project timelines, and handled shipping and delivery seamlessly.",
  ],
};

export const workPage = {
  headerDescription:
    "Alongside **hands-on design** work, I lead teams, manage **stakeholder interactions**, draft **product maps**, create project timelines, and handle **shipping** and delivery seamlessly **across teams** - design, engineering, product, and data.",
  projects: [
    {
      title: "SAVii",
      description:
        "SAVii is a salary-linked financial wellness platform that serves as an ethical alternative to exploitative lending for blue-collar workers in the Philippines, giving employers a way to offer loans, insurance, and education directly through payroll. I led design on key growth modules — refinance, reloan, quick loans, and referrals — with a data-driven approach to drive adoption and retention.",
      time: "2025",
      tags: ["loan app", "growth strategy", "data-driven design"],
      link: "https://www.parallelhq.com/work/savii-parallel",
      image: "/savii-card.png",
    },
    {
      title: "Avifauna",
      description:
        "We built a unified bird monitoring platform for BNHS to replace decades of fragmented field data living across handwritten forms, spreadsheets, and decentralised systems. I brought data product experience to a design-first team, applying schema-level thinking to inform UX decisions.",
      time: "2024",
      tags: ["zero-to-one", "data exchange", "system design"],
      link: "https://www.parallelhq.com/work/bnhs-parallel",
      image: "/avifauna-card.png",
    },
    {
      title: "Dharini",
      description:
        "Dharini is a disease-agnostic environmental surveillance platform that bridges fragmented field data, lab workflows, and real-time decision-making to support India's goal of achieving FMD-free status. I led research and client interaction, mapping information flows across stakeholders to ensure the information architecture reflected how data actually moves through the system, supporting modularity and scalability.",
      time: "2024",
      tags: ["zero-to-one", "disease surveillance", "data exchange"],
      image: "/dharini-card.png",
    },
  ],
};

export const workExperience: {
  title: string;
  subtitle: string;
  link: string;
  current?: boolean;
}[] = [
  {
    title: "EPIC World (2025-Present)",
    subtitle: "Lead Designer",
    link: "https://www.epicworld.com/",
    current: true,
  },
  {
    title: "Parallel HQ (2023-25)",
    subtitle: "Sr. Product Designer",
    link: "https://www.parallelhq.com",
  },
  {
    title: "Srishti Manipal (2024)",
    subtitle: "Visiting Faculty",
    link: "https://srishtimanipalinstitute.in",
  },
  {
    title: "CivicDataLab (2023)",
    subtitle: "Sr. Product Designer",
    link: "https://civicdatalab.in",
  },
  {
    title: "f1studioz (2021-22)",
    subtitle: "UX Designer",
    link: "https://f1studioz.com",
  },
];
