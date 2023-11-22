// export type Theme = {
//   primary: string;
//   primaryVariant: string;
//   secondary: string;
//   background: string;
//   surface: string;
//   error: string;
//   onPrimary: string;
//   onSecondary: string;
//   onBackground: string;
//   onSurface: string;
//   onError: string;
//   highEmphasis: string;
//   mediumEmphasis: string;
// };

export type Theme = {
  background: string;
  onBackground: string;
  onBackgroundVariant: string;
  secondary: string;
  onSecondary: string;
  hover: string;
  boxShadow: string;
  border: string;
};

export const lightTheme: Theme = {
  background: "bg-[#f1f5f9]",
  onBackgroundVariant: "text-zinc-500",
  onBackground: "text-black",
  secondary: "bg-rose-500",
  onSecondary: "text-black",
  boxShadow: "shadow-card-light",
  border: "border-black",
  hover: "bg-hover-dark",
} as const;

export const darkTheme: Theme = {
  background: "bg-[#0e0a06]",
  onBackground: "text-[#ffffff]",
  onBackgroundVariant: "text-[#eeeeee]",
  secondary: "bg-secondary-dark",
  onSecondary: "text-onSecondary-dark",
  boxShadow: "shadow-card-dark",
  border: "border-white",
  hover: "bg-hover-dark",
} as const;
