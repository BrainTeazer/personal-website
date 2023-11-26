import { Github, Linkedin, Mail, Phone } from "lucide-svelte";

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
  contactItems: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ayambanjade",
      icon: Linkedin,
      hoverColor: "hover:text-blue-500",
    },
    {
      name: "github",
      link: "https://github.com/BrainTeazer",
      icon: Github,
      hoverColor: "hover:text-slate-500",
    },
    {
      name: "mail",
      link: "mailto:ayam.banjade@gmail.com",
      icon: Mail,
      hoverColor: "hover:text-green-500",
    },
    {
      name: "phone",
      link: "tel:+4915752730515",
      icon: Phone,
      hoverColor: "hover:text-gray-500",
    },
  ],
} as const;
