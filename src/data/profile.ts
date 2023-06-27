export type profileProp = {
  imgSrc: string;
  name: string;
  prelim: string;
  description: string;
  buttonText: string;
  resumeSrc: string;
  links: any;
};

export default {
  imgSrc: "./profile.jpeg",
  name: "Ayam Banjade",
  prelim: "Programmer | Music enjoyer | Neophile",
  description: `I am an undergrad studying Computer Science. I am an open-source enthusiast and enjoy learning/trying out new things, whether cutting-edge or just something I want to try.
    I love music and the command line. `,
  buttonText: "Resume",
  resumeSrc: "./documents/Ayam_Banjade_Resume_2023_JUNE.pdf",
  links: {
    linkedin: "https://www.linkedin.com/in/ayambanjade",
    github: "https://github.com/BrainTeazer",
    mail: "mailto:ayam.banjade@gmail.com",
  },
} as const;
