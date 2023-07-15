const logoPath = "./logos/";

export type skillProps = {
  name: string;
  imgSrc: string;
};

export default [
  {
    name: "C",
    // imgSrc: logoPath + "c.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png",
  },
  {
    name: "C++",
    // imgSrc: logoPath + "cpp.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/180320cffc25f4ed1bbdfd33d4db3a66eeeeb358/topics/cpp/cpp.png",
  },
  {
    name: "Javascript",
    // imgSrc: logoPath + "js.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
  },
  {
    name: "Typescript",
    // imgSrc: logoPath + "typescript.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
  },
  {
    name: "Python",
    // imgSrc: logoPath + "python.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png",
  },
  {
    name: "Rust",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/rust/rust.png",
  },
  {
    name: "PHP",
    // imgSrc: logoPath + "php.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png",
  },
  {
    name: "Flutter",
    // imgSrc: logoPath + "flutter.png",
    imgSrc: "https://raw.githubusercontent.com/github/explore/cebd63002168a05a6a642f309227eefeccd92950/topics/flutter/flutter.png",
  },
  {
    name: "React",
    // imgSrc: logoPath + "react.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
  },
  {
    name: "Java",
    // imgSrc: logoPath + "java.png",
    imgSrc: "https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png",
  },
  {
    name: "Kotlin",
    // imgSrc: logoPath + "kotlin.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/4479d2a2c854198cb00160f8593519c14dc3b905/topics/kotlin/kotlin.png",
  },
  {
    name: "Next.js",
    // imgSrc: logoPath + "nextjs-light.png",
    imgSrc: "https://raw.githubusercontent.com/github/explore/28b02bbc9ad9f7a503c43775aebeb515dc2da5fc/topics/nextjs/nextjs.png",
  },
  {
    name: "Svelte",
    // imgSrc: logoPath + "svelte.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/42198dc9113595ddd22cc12771bb719c8cf08b67/topics/svelte/svelte.png",
  },
  {
    name: "MySQL",
    // imgSrc: logoPath + "mysql.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mysql/mysql.png",
  },
  {
    name: "MongoDB",
    // imgSrc: logoPath + "mongodb.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png",
  },
  {
    name: "Figma",
    // imgSrc: logoPath + "figma.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/05d0f0dfceafd861bdf2b53559399dae7b2e2d8b/topics/figma/figma.png",
  },
  {
    name: "Linux",
    // imgSrc: logoPath + "linux.svg",
    imgSrc: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/linux/linux.png",
  },
  
] as const;
