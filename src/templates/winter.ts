import { colors } from "@heroui/theme";
import { initialLayout } from "shared/constants";
import { Config } from "shared/types";

export const winter: Config = {
  light: {
    brandColor: {
      default: "#c9c9c9",
      primary: "#0069ff",
      secondary: "#463AA2",
      success: "#81CFD1",
      warning: "#EFD7BB",
      danger: "#E58B8B",
    },
    baseColor: {
      foreground: "#040111",
      background: "#fafaff",
      content1: "#f2f8ff",
      content2: "#d9e9ff",
      content3: "#bfdaff",
      content4: "#a6cbff",
    },
    otherColor: {
      divider: "#111111",
      focus: "#0069ff",
      overlay: colors.black,
    },
  },
  dark: {
    brandColor: {
      default: "#282f38",
      primary: "#0069ff",
      secondary: "#463AA2",
      success: "#81CFD1",
      warning: "#EFD7BB",
      danger: "#E58B8B",
    },
    baseColor: {
      foreground: "#e8e8ff",
      background: "#030208",
      content1: "#001026",
      content2: "#001533",
      content3: "#001a40",
      content4: "#00204d",
    },
    otherColor: {
      divider: colors.white,
      focus: "#0069ff",
      overlay: colors.white,
    },
  },
  layout: initialLayout,
};
