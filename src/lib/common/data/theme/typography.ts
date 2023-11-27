export type Typography = {
  heading: string;
  subheading: string;
  small: string;
  medium: string;
  large: string;

  headingHoverOpacity: string;
  fontFamilySerif: string;
};

export const fontConfig: Typography = {
  heading: "text-4xl",
  subheading: "text-2xl",
  small: "text-sm",
  medium: "text-xl",
  large: "text-2xl",
  headingHoverOpacity: "hover:opacity-70",
  fontFamilySerif: "font-ibm-plex-serif",
};
