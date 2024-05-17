export type ColorName =
  | "slate"
  | "gray"
  | "zinc"
  | "neutral"
  | "stone"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

export interface ColorShades {
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
}

export type Theme = "light" | "dark";

export interface ThemeColor {
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
  foreground: string;
  DEFAULT: string;
}

export type ColorVariant =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface NextUIConfig {
  primary: ColorName;
  secondary: ColorName;
  success: ColorName;
  warning: ColorName;
  danger: ColorName;
}

export type Size = "sm" | "md" | "lg";

export type Variant =
  | "dot"
  | "solid"
  | "faded"
  | "bordered"
  | "light"
  | "flat"
  | "ghost"
  | "shadow"
  | "underlined";

export type Radius = "none" | "sm" | "md" | "lg" | "full";

export interface Repo {
  name: string;
  owner: string;
  stars: number;
  updatedAt: string;
}
