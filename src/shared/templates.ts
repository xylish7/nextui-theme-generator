import { colors } from "@nextui-org/react";
import { Config } from "./types";
import {
  initialDarkTheme,
  initialLayout,
  initialLightTheme,
} from "lib/configuration";

const nextui: Config = {
  light: initialLightTheme,
  dark: initialDarkTheme,
  layout: initialLayout,
};

const coffee: Config = {
  light: {
    brandColor: {
      default: "#f3d7b2",
      primary: "#db924b",
      secondary: "#5a8486",
      success: "#9db787",
      warning: "#ffd25f",
      danger: "#fc9581",
    },
    baseColor: {
      foreground: "#a27225",
      background: "#fff2e1",
      content1: "#fff2e0",
      content2: "#ffe9cc",
      content3: "#ffe0b8",
      content4: "#ffd7a3",
    },
    otherColor: {
      divider: "#111111",
      focus: "#db924b",
      overlay: colors.black,
    },
  },
  dark: {
    brandColor: {
      default: "#5a4c5a",
      primary: "#db924b",
      secondary: "#5a8486",
      success: "#9db787",
      warning: "#ffd25f",
      danger: "#fc9581",
    },
    baseColor: {
      foreground: "#c59f60",
      background: "#20161F",
      content1: "#2c1f2b",
      content2: "#3e2b3c",
      content3: "#50374d",
      content4: "#62435f",
    },
    otherColor: {
      divider: colors.white,
      focus: "#db924b",
      overlay: colors.white,
    },
  },
  layout: initialLayout,
};

const emerald: Config = {
  light: {
    brandColor: {
      default: "#66cc8a",
      primary: "#66cc8a",
      secondary: "#377cfb",
      success: "#00a96e",
      warning: "#ffbe00",
      danger: "#ff5861",
    },
    baseColor: initialLightTheme.baseColor,
    otherColor: { ...initialLightTheme.otherColor, focus: "#66cc8a" },
  },
  dark: {
    brandColor: {
      default: "#485248",
      primary: "#66cc8a",
      secondary: "#377cfb",
      success: "#00a96e",
      warning: "#ffbe00",
      danger: "#ff5861",
    },
    baseColor: initialDarkTheme.baseColor,
    otherColor: { ...initialDarkTheme.otherColor, focus: "#66cc8a" },
  },
  layout: initialLayout,
};

export const templates: Array<Template> = [
  { label: "Coffee", name: "coffee", value: coffee },
  { label: "Emerald", name: "emerald", value: emerald },
  { label: "NextUI", name: "nextui", value: nextui },
];

export interface Template {
  label: string;
  name: ThemeTemplate;
  value: Config;
}

export type ThemeTemplate = "coffee" | "emerald" | "nextui";
