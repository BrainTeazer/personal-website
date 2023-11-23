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
};

export const lightTheme: Theme = {
  primary: "#e0e4e9",
  secondary: "#f4a384",
  background: "#f1f5f9",
  surface: "#f1f5f8",
  error: "#b00020",
  onPrimary: "#77797b",
  onSecondary: "#000000",
  onBackground: "#000000",
  onSurface: "#000000",
  onError: "#000000",
} as const;

export const darkTheme: Theme = {
  primary: "#e0e4e9",
  secondary: "#404754",
  background: "#212737",
  surface: "#212737",
  error: "#b00020",
  onPrimary: "#ffffff",
  onSecondary: "#ffffff",
  onBackground: "#eaedf3",
  onSurface: "#ffffff",
  onError: "#ffffff",
} as const;
