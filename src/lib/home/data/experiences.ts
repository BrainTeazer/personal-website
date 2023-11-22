export type experienceProp = {
  title: string;
  organization: any;
  date: Date[]; // Date(Year, Month - 1) e.g for 2023 Jan: Date(2023, 0)
  description: string[];
  keywords: string[];
};

export default [
  {
    title: "Werkstudent Software Engineering",
    organization: { name: "Bertrandt Technology (formerly Philotech)", href: "https://www.philotech.net/" },
    date: [new Date(2023, 7)],
    description: [],
    keywords: ["Software Engineering", "STM32", "C", "Embedded Systems", "Aerospace", "Documentation", "Documentation Analysis"],
  },
  {
    title: `Teaching Assistant - Numerical Methods`,
    organization: { name: "Constructor University Bremen", href: "https://constructor.university/" },
    date: [new Date(2023, 1), new Date(2023, 5)],
    description: [
      `Created and solved challenging problems and helped 100+ students with numerical methods and their implementations in Python`,
      `Streamlined the grading process by developing Python scripts transforming and simplifying complex CSV files`,
    ],
    keywords: ["Numerical Methods", "CSV", "Python"],
  },
  {
    title: "Teaching Assistant - Programming in C/C++",
    organization: { name: "Constructor University Bremen", href: "https://constructor.university/" },
    date: [new Date(2022, 8), new Date(2022, 11)],
    description: [`Debugged and validated C/C++ code, providing comprehensive tutorials to 200+ students on programming concepts`],
    keywords: ["C", "C++", "Pointers", "Makefiles", "Header Files", "Templates", "OOP", "Macros", "Dynamic Memory Allocation", "Data Structures"],
  },
  {
    title: "Teaching Assistant - Introduction to CS",
    organization: { name: "Constructor University Bremen", href: "https://constructor.university/" },
    date: [new Date(2022, 8), new Date(2022, 11)],
    description: [`Coordinated and led tutorials addressing students' inquiries in computer science foundations`],
    keywords: ["Haskell", "Assembly", "Boolean Algebra", "Hoare Logic", "Digital Circuit Design"],
  },
];
