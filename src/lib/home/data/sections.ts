import { Book, Briefcase, Code, Home } from "lucide-svelte";

export default [
  {
    id: "profile",
    icon: Home,
  },
  {
    id: "skills",
    icon: Book,
  },
  {
    id: "projects",
    icon: Code,
  },
  {
    id: "experiences",
    icon: Briefcase,
  },
] as const;
