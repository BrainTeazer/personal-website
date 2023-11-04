import type { Theme } from "./theme";

export const lightTheme: Theme = {
  background: "bg-slate-100",
  onBackgroundVariant: "text-zinc-500",
  onBackground: "text-black",
  secondary: "bg-rose-500",
  onSecondary: "text-black",
  boxShadow: "shadow-card-light",
  border: "border-black",
  hover: "bg-hover-dark",
} as const;
