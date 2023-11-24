import { GithubIcon, LinkedinIcon, MailIcon, PhoneIcon } from "svelte-feather-icons";

export type profileProp = {
  imgSrc: string;
  name: string;
  prelim: string;
  description: string;
  contactItems: contactItemProp[];
};

export type contactItemProp = {
  name: string;
  link: string;
  icon: ConstructorOfATypedSvelteComponent;
  hoverColor: string;
};

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
  contactItems: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ayambanjade",
      icon: LinkedinIcon,
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "github",
      link: "https://github.com/BrainTeazer",
      icon: GithubIcon,
      hoverColor: "hover:text-slate-500",
    },
    {
      name: "mail",
      link: "mailto:ayam.banjade@gmail.com",
      icon: MailIcon,
      hoverColor: "hover:text-green-500",
    },
    {
      name: "phone",
      link: "tel:+4915752730515",
      icon: PhoneIcon,
      hoverColor: "hover:text-gray-500",
    },
  ],
} as const;
