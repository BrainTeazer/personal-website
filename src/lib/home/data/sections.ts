import Book from "$lib/common/components/icons/Book.svelte";
import Home from "$lib/common/components/icons/Home.svelte";
import Code from "$lib/common/components/icons/Code.svelte";
import Briefcase from "$lib/common/components/icons/Briefcase.svelte";

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
