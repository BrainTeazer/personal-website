export type ProjectItem = {
  title: string;
  description: string;
  toolset: readonly string[];
  source: string;
};

export default [
  {
    title: "Rippit",
    description: "Fullstack forum website",
    toolset: ["PHP", "Javascript", "MySQL", "MongoDB", "Bootstrap"],
    source: "https://github.com/BrainTeazer/Rippit",
  },
  {
    title: "Bug World",
    description:
      "Client-side bug simulation game (GUI, assembler, parser, simulator)",
    toolset: ["Javascript", "HTML", "CSS", "Jest"],
    source: "https://github.com/BrainTeazer/bug-world",
  },
  {
    title: "Room Booking System",
    description: "CLI room booking system ",
    toolset: ["Java"],
    source: "https://github.com/BrainTeazer/java-room-booking-system",
  },
  {
    title: "Spam Email Extractor",
    description:
      "Extracts 57 email attributes based on UCI's Spambase Data Set",
    toolset: ["C++"],
    source: "https://github.com/BrainTeazer/spam-email-extractor",
  },
  {
    title: "Stochastic Methods Lab",
    description: "Stochastic models related to financial mathematics",
    toolset: ["Python", "NumPy", "Pandas"],
    source: "https://github.com/BrainTeazer/stochastic-methods-lab",
  },
  {
    title: "Mars Photo App",
    description: "App displaying Mars' surface photos taken by NASA rovers",
    toolset: ["Kotlin", "Moshi", "Coil", "Retrofit"],
    source: "https://github.com/BrainTeazer/marsphotos-demo-kotlin",
  },
  {
    title: "Todo App",
    description: "Multi-page todo app",
    toolset: ["Flutter"],
    source: "https://github.com/BrainTeazer/todo_app_flutter",
  },
  {
    title: "Weather App",
    description: "Multi-page weather app",
    toolset: ["Flutter"],
    source: "https://github.com/BrainTeazer/weather_app_flutter",
  },
  {
    title: "Source Code",
    description: "Source code of personal website hosted on Github Pages",
    toolset: ["Typescript", "Svelte", "Tailwind CSS"],
    source: "https://github.com/BrainTeazer/personal-website",
  },
] as const;
