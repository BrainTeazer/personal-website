import { fontConfig } from "$lib/common/data/theme/typography";
import { Github, Linkedin, Mail, Phone } from "lucide-svelte";

export default {
  imgSrc: "./profile.jpeg",
  name: "Ayam Banjade",
  prelim: "Programmer | Student | Neophile",
  contactItems: [
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/ayambanjade",
      icon: Linkedin,
    },
    {
      name: "github",
      link: "https://github.com/BrainTeazer",
      icon: Github,
    },
    {
      name: "mail",
      link: "mailto:ayam.banjade@gmail.com",
      icon: Mail,
    },
    {
      name: "phone",
      link: "tel:+4915752730515",
      icon: Phone,
    },
  ],
} as const;
