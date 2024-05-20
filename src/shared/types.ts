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

export interface ThemeColor extends ColorShades {
  foreground: string;
  DEFAULT: string;
}

export type NextUIColor =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export type NextUISize = "sm" | "md" | "lg";

export type NextUIVariant =
  | "dot"
  | "solid"
  | "faded"
  | "bordered"
  | "light"
  | "flat"
  | "ghost"
  | "shadow"
  | "underlined";

export type NextUIRadius = "none" | "sm" | "md" | "lg" | "full";

export interface Repo {
  name: string;
  owner: string;
  stars: number;
  updatedAt: string;
}

export type ColorType =
  | "default"
  | "primary"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface Config {
  brandColor: BrandColor;
  fontSize: FontSize;
  lineHeight: LineHeight;
}

export interface BrandColor {
  primary: string;
  secondary: string;
  success: string;
  warning: string;
  danger: string;
}

export interface FontSize {
  tiny: string;
  small: string;
  medium: string;
  large: string;
}

export interface LineHeight {
  tiny: string;
  small: string;
  medium: string;
  large: string;
}
