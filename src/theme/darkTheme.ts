import type { Theme } from "./theme";

export const darkTheme: Theme = {
  background: "bg-[#171219]",
  onBackground: "text-[#ffffff]",
  onBackgroundVariant: "text-[#eeeeee]",
  secondary: "bg-secondary-dark",
  onSecondary: "text-onSecondary-dark",
  boxShadow: "shadow-card-dark",
  border: "border-white",
  hover: "bg-hover-dark",
} as const;
