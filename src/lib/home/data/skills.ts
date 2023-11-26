const iconsPath = "./icons/";

export type skillProps = {
  name: string;
  imgSrc: string;
};

export default [
  {
    name: "C",
    imgSrc: iconsPath + "c.svg",
  },
  {
    name: "C++",
    imgSrc: iconsPath + "cpp.svg",
  },
  {
    name: "Javascript",
    imgSrc: iconsPath + "javascript.svg",
  },
  {
    name: "Typescript",
    imgSrc: iconsPath + "typescript.svg",
  },
  {
    name: "Python",
    imgSrc: iconsPath + "python.svg",
  },
  {
    name: "Rust",
    imgSrc: iconsPath + "rust.svg",
  },
  {
    name: "PHP",
    imgSrc: iconsPath + "php.svg",
  },
  {
    name: "Flutter",
    imgSrc: iconsPath + "flutter.svg",
  },
  {
    name: "React",
    imgSrc: iconsPath + "react.svg",
  },
  {
    name: "Java",
    imgSrc: iconsPath + "java.svg",
  },
  {
    name: "Kotlin",
    imgSrc: iconsPath + "kotlin.svg",
  },
  {
    name: "Svelte",
    imgSrc: iconsPath + "svelte.svg",
  },
  {
    name: "MySQL",
    imgSrc: iconsPath + "mysql.svg",
  },
  {
    name: "MongoDB",
    imgSrc: iconsPath + "mongodb.svg",
  },
  {
    name: "Figma",
    imgSrc: iconsPath + "figma.svg",
  },
  {
    name: "Linux",
    imgSrc: iconsPath + "linux.svg",
  },
] as const;
