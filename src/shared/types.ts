export type Color =
  | "Slate"
  | "Gray"
  | "Zinc"
  | "Neutral"
  | "Stone"
  | "Red"
  | "Orange"
  | "Amber"
  | "Yellow"
  | "Lime"
  | "Green"
  | "Emerald"
  | "Teal"
  | "Cyan"
  | "Sky"
  | "Blue"
  | "Indigo"
  | "Violet"
  | "Purple"
  | "Fuchsia"
  | "Pink"
  | "Rose";

export interface Shade {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  DEFAULT: string;
  foreground: string;
}

export type Theme = "light" | "dark";
