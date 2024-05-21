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

export type ColorPickerType =
  | "background"
  | "danger"
  | "default"
  | "foreground"
  | "primary"
  | "secondary"
  | "success"
  | "warning";

export interface Config {
  light: ColorsConfig;
  dark: ColorsConfig;
  layout: LayoutConfig;
}

export interface ColorsConfig {
  brandColor: {
    default: string;
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    danger: string;
  };
  baseColor: {
    foreground: string;
    background: string;
  };
}

export interface LayoutConfig {
  fontSize: {
    tiny: string;
    small: string;
    medium: string;
    large: string;
  };
  lineHeight: {
    tiny: string;
    small: string;
    medium: string;
    large: string;
  };
  radius: {
    small: string;
    medium: string;
    large: string;
  };
  borderWidth: {
    small: string;
    medium: string;
    large: string;
  };
}
