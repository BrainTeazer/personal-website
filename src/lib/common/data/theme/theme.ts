export type Theme = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  error: string;
  onPrimary: string;
  onSecondary: string;
  onBackground: string;
  onSurface: string;
  onError: string;
  hoverOnBackground: string;
  hoverPrimary: string;
  hoverOnPrimary: string;
  hoverSecondary: string;
  border: string;
  boxShadow: string;
};

export const lightTheme: Theme = {
  primary: "bg-[#d1d5db]",
  secondary: "bg-[#f4a384]",
  background: "bg-[#f5f5f7]",
  surface: "bg-[#fbfbfd]",
  error: "bg-[#b00020]",
  onPrimary: "text-[#77797b]",
  onSecondary: "text-[#000000]",
  onBackground: "text-[#1d1d1f]",
  onSurface: "text-[#1d1d1f]",
  onError: "text-[#000000]",
  hoverOnBackground: "hover:text-[#000000]",
  hoverPrimary: "hover:bg-[#000000]",
  hoverOnPrimary: "hover:text-[#d1d5db]",
  hoverSecondary: "hover:bg-[]",
  border: "border-[#333333]",
  boxShadow: "shadow-card-light",
} as const;

export const darkTheme: Theme = {
  primary: "bg-[#e0e4e9]",
  secondary: "bg-[#404754]",
  background: "bg-[#212737]",
  surface: "bg-[#212737]",
  error: "bg-[#b00020]",
  onPrimary: "text-[#ffffff]",
  onSecondary: "text-[#ffffff]",
  onBackground: "text-[#eaedf3]",
  onSurface: "text-[#ffffff]",
  onError: "text-[#ffffff]",
  hoverOnBackground: "hover:text-[]",
  hoverPrimary: "hover:bg-[]",
  hoverOnPrimary: "hover:bg-[#d1d5db]",
  hoverSecondary: "hover:bg-[]",
  border: "border-[#ffffff]",
  boxShadow: "shadow-card-light",
} as const;
