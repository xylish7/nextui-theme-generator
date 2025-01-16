import { colors } from "@heroui/theme";
import { initialLayout } from "shared/constants";
import { Config } from "shared/types";

export const autumn: Config = {
  light: {
    brandColor: {
      default: "#8d7e72",
      primary: "#a02242",
      secondary: "#bc4645",
      success: "#499380",
      warning: "#e97f14",
      danger: "#e0350d",
    },
    baseColor: {
      foreground: "#2c1c01",
      background: "#fffdf9",
      content1: "#f6e9ec",
      content2: "#e7c8d0",
      content3: "#deb2bd",
      content4: "#d49caa",
    },
    otherColor: {
      divider: "#111111",
      focus: "#a02242",
      overlay: colors.black,
    },
  },
  dark: {
    brandColor: {
      default: "#403738",
      primary: "#a02242",
      secondary: "#bc4645",
      success: "#499380",
      warning: "#e97f14",
      danger: "#e0350d",
    },
    baseColor: {
      foreground: "#ffe8ea",
      background: "#080202",
      content1: "#20070d",
      content2: "#300a14",
      content3: "#400e1a",
      content4: "#501121",
    },
    otherColor: {
      divider: colors.white,
      focus: "#a02242",
      overlay: colors.white,
    },
  },
  layout: initialLayout,
};
