const projectPath = "./projects/";

export type projectProps = {
  title: string;
  imgSrc: string;
  description: string;
  languages: readonly string[];
  source: string;
};

export default [
  {
    title: "Rippit",
    imgSrc: projectPath + "whiteclaws.png",
    // description: "Fullstack forum website built using PHP, Javascript, HTML, CSS (Bootstrap), jQuery, MySQL, MongoDB",
    description: "Fullstack forum website",
    languages: ["PHP", "Javascript", "MySQL", "MongoDB", "Bootstrap"],
    source: "https://github.com/BrainTeazer/Rippit",
  },
  {
    title: "Bug World",
    imgSrc: projectPath + "bug.svg",
    // description: "Simulation game written in Javavscript, HTML, and CSS. Developed assembler, parser, simulator, and GUI. Implemented test cases using Jest",
    description: "Bug simulation game (assembler, parser, simulator, and GUI)",
    languages: ["Javascript", "Jest"],
    source: "https://github.com/BrainTeazer/bug-world",
  },
  {
    title: "Room Booking System",
    imgSrc: projectPath + "booking.png",
    description: "CLI room booking system ",
    languages: ["Java"],
    source: "https://github.com/BrainTeazer/java-room-booking-system",
  },
  {
    title: "Spam Email Extractor",
    imgSrc: projectPath + "uci.png",
    description: "Extracts 57 email attributes based on UCI's Spambase Data Set",
    languages: ["C++"],
    source: "https://github.com/BrainTeazer/spam-email-extractor",
  },
  {
    title: "Stochastic Methods Lab",
    imgSrc: projectPath + "stochastic.png",
    description: "Stochastic models related to financial mathematics",
    languages: ["Python"],
    source: "https://github.com/BrainTeazer/stochastic-methods-lab",
  },
  {
    title: "Mars Photo App",
    imgSrc: projectPath + "mars.png",
    description: "App displaying Mars' surface photos taken by NASA rovers",
    languages: ["Kotlin"],
    source: "https://github.com/BrainTeazer/marsphotos-demo-kotlin",
  },
  {
    title: "Source Code",
    imgSrc: projectPath + "source.png",
    description: "Source code of personal website hosted on Github Pages",
    languages: ["Typescript", "Svelte", "Tailwind CSS"],
    source: "https://github.com/BrainTeazer/brainteazer.github.io/tree/svelte-ts",
  },
] as const;
