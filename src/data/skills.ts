const logoPath = "./src/lib/assets/logos/";

export type skillProps = {
  name: string;
  imgSrc: string;
};

export default [
  {
    name: "C",
    imgSrc: logoPath + "c.svg",
  },
  {
    name: "C++",
    imgSrc: logoPath + "cpp.svg",
  },
  {
    name: "Javascript",
    imgSrc: logoPath + "js.svg",
  },
  {
    name: "Typescript",
    imgSrc: logoPath + "typescript.svg",
  },
  {
    name: "Python",
    imgSrc: logoPath + "python.svg",
  },
  {
    name: "Rust",
    imgSrc: logoPath + "rust.svg",
  },
  {
    name: "PHP",
    imgSrc: logoPath + "php.svg",
  },
  {
    name: "Flutter",
    imgSrc: logoPath + "flutter.png",
  },
  {
    name: "React",
    imgSrc: logoPath + "react.svg",
  },
  {
    name: "Java",
    imgSrc: logoPath + "java.png",
  },
  {
    name: "Kotlin",
    imgSrc: logoPath + "kotlin.svg",
  },
  {
    name: "Next.js",
    imgSrc: logoPath + "nextjs-light.png",
  },
  {
    name: "Svelte",
    imgSrc: logoPath + "svelte.svg",
  },
  {
    name: "MySQL",
    imgSrc: logoPath + "mysql.svg",
  },
  {
    name: "MongoDB",
    imgSrc: logoPath + "mongodb.svg",
  },
  {
    name: "Figma",
    imgSrc: logoPath + "figma.svg",
  },
  {
    name: "Linux",
    imgSrc: logoPath + "linux.svg",
  },
] as const;
