import type { Theme } from "./theme";

export const darkTheme: Theme = {
  background: "bg-dark",
  onBackground: "text-white",
  onBackgroundVariant: "text-zinc-500",
  secondary: "bg-secondary-dark",
  onSecondary: "text-onSecondary-dark",
  boxShadow: "shadow-card-dark",
  border: "border-white",
  hover: "bg-hover-dark",
} as const;
