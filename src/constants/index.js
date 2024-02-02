import {
  mobile,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  gpt3,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "/about",
    title: "About",
  },
  {
    id: "/projects",
    title: "Projects",
  },
  {
    id: "/experience",
    title: "Experience",
  },
  {
    id: "/tech",
    title: "Tech",
  },
  {
    id: "/contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS Developer",
    icon: mobile,
  },

  {
    title: "Crypto Trader",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Education :",
    company_name: "Bachelor's degree  (B.Tech)",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2014 - April 2018",
    points: [
      "Bachelor of Technology (B.Tech) in Mechanical Engineering",
      "Sethu Institute Of Technology",
      "Madurai,Tamilnadu",
    ],
  },
  {
    title: "COVID 19 Precaution Work",
    company_name: "MADURAI CORPORATION",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2020 - Dec 2020",
    points: [
      "Ensuring Compliance with Health Guidelines",
      "Implementing protocols for isolating people who develop COVID-19 symptoms at area and reporting cases to relevant health authorities.",
    ],
  },
  {
    title: "Sales Executive",
    company_name: "SKS HEALD WIRES",
    icon: shopify,
    iconBg: "#383E56",
    date: "May 2021 - Jan 2023",
    points: [
      "Coordinated with textile companies to create orders for machinery-based spare parts.",
      "Ensured product availability and provided quality assurance to secure orders.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "FreeLancher",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Self-Study: I started my learning journey by exploring various online resources and tutorials on web development. I took advantage of platforms like youtube, Coursera, and freeCodeCamp to learn HTML, CSS, JavaScript,react.js,redux and other essential web development technologies",
      "Building Personal Projects: I actively engaged in building personal projects to apply the concepts I learned. Creating portfolio websites,  and web applications helped me solidify my understanding of web development concepts and allowed me to showcase my work to potential employers",
    ],
  },
];

const projects = [
  {
    name: "Restaurant",
    description:
      " This project considers on Functional components and their reuseability, React file and folder structure,fundamental CSS properties Flex, media queries for responsiveness on all devices, CSS BEM Model",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "CSS BEM MODEL",
        color: "green-text-gradient",
      },
      {
        name: "UI Design",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/thiru49/Gerchit",
  },
  {
    name: "Portfolio",
    description:
      "Web application that enables user to showcase their projects and personal Experience",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/thiru49/Portfolio",
  },
  {
    name: "GPT-3",
    description:
      "We are building safe and beneficial AGI, but will also consider our mission fulfilled if our work aids others to achieve this outcome..",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "UI/UX",
        color: "green-text-gradient",
      },
      {
        name: "TailWindCss",
        color: "pink-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
