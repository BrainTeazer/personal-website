const projectPath = "src/lib/assets/projects/";

export type projectProps = {
  title: string;
  imgSrc: string;
  description: string;
  source: string;
};

export default [
  {
    title: "Rippit",
    imgSrc: projectPath + "whiteclaws.png",
    description: "Fullstack forum website built using PHP, Javascript, HTML, CSS (Bootstrap), jQuery, MySQL, MongoDB",
    source: "https://github.com/BrainTeazer/Rippit",
  },
  {
    title: "Bug World",
    imgSrc: projectPath + "bug.svg",
    description: "Simulation game written in Javavscript, HTML, and CSS. Developed assembler, parser, simulator, and GUI. Implemented test cases using Jest",
    source: "https://github.com/BrainTeazer/bug-world",
  },
  {
    title: "Room Booking System",
    imgSrc: projectPath + "booking.png",
    description: "Java-based CLI room booking system ",
    source: "https://github.com/BrainTeazer/java-room-booking-system",
  },
  {
    title: "Spam Email Extractor",
    imgSrc: projectPath + "uci.png",
    description: "Written in C++. Extracts 57 email attributes based on UCI's Spambase Data Set",
    source: "https://github.com/BrainTeazer/spam-email-extractor",
  },
  {
    title: "Stochastic Methods Lab",
    imgSrc: projectPath + "stochastic.png",
    description: "Stochastic models related to financial mathematics written in Python.",
    source: "https://github.com/BrainTeazer/stochastic-methods-lab",
  },
  {
    title: "Mars Photo App",
    imgSrc: projectPath + "mars.png",
    description: "Kotlin app displaying Mars' surface photos taken by NASA rovers",
    source: "https://github.com/BrainTeazer/marsphotos-demo-kotlin",
  },
  {
    title: "Source Code",
    imgSrc: projectPath + "source.png",
    description: "Source code of personal website hosted on Github Pages written in Typescript, Svelte, and Tailwind CSS",
    source: "https://github.com/BrainTeazer/brainteazer.github.io",
  },
] as const;
