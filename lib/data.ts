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
        "Built to support India's ambitious goal of achieving FMD-free status by 2025, the platform integrates data collected by field workers, streamlines testing workflows for diagnostic labs, and offers real-time analytics to inform decision-making.",
      time: "2025",
      tags: ["loan app", "growth strategy", "data-driven design"],
      image:
        "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Avifauna",
      description:
        "A tool to create, and maintain a central data repository for researcher across all avian projects at Bombay Natural History Society.",
      time: "2024",
      tags: ["zero-to-one", "data exchange", "system design"],
      image:
        "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Dharini",
      description:
        "Built to support India's ambitious goal of achieving FMD-free status by 2025, the platform integrates data collected by field workers, streamlines testing workflows for diagnostic labs, and offers real-time analytics to inform decision-making.",
      time: "2024",
      tags: ["zero-to-one", "loan app", "growth strategy", "data-driven design"],
      image:
        "https://images.unsplash.com/photo-1776255076699-d2dc33434b16?q=80&w=2320&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
