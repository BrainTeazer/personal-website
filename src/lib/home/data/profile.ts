export type profileProp = {
  imgSrc: string;
  name: string;
  prelim: string;
  description: string;
  buttonText: string;
  resumeSrc: string;
  links: any;
};

const date = new Date();

export default {
  imgSrc: "./profile.jpeg",
  name: "Ayam Banjade",
  prelim: "Programmer | Student | Neophile",
  description: `
    I am an undergrad CS student
    and an open-source enthusiast.
    I enjoy learning/trying out new things, whether cutting-edge or just something I want to try.
    I love music, playing sports, and the command line.
  `,
  buttonText: "Resume",
  resumeSrc: `./documents/Ayam_Banjade_Resume_${date.getFullYear()}_${date.toLocaleString("default", { month: "long" })}.pdf`,
  links: {
    linkedin: "https://www.linkedin.com/in/ayambanjade",
    github: "https://github.com/BrainTeazer",
    mail: "mailto:ayam.banjade@gmail.com",
    number: "tel:+4915752730515",
  },
} as const;