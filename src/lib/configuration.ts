import { NextUIPluginConfig, colors } from "@nextui-org/react";

import { Config } from "shared/types";
import { generateThemeColor } from "./colors";
import { storage } from "./local-storage";
import { readableColor } from "color2k";

export const initialConfig: Config = {
  light: {
    brandColor: {
      default: colors.zinc[300],
      primary: colors.blue[500],
      secondary: colors.purple[500],
      success: colors.green[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
    },
    baseColor: {
      foreground: colors.black,
      background: colors.white,
      content1: colors.white,
      content2: colors.zinc[100],
      content3: colors.zinc[200],
      content4: colors.zinc[300],
    },
    otherColor: {
      divider: "#111111",
      focus: colors.blue[500],
      overlay: colors.black,
    },
  },
  dark: {
    brandColor: {
      default: colors.zinc[700],
      primary: colors.blue[500],
      secondary: colors.purple[500],
      success: colors.green[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
    },
    baseColor: {
      foreground: colors.white,
      background: colors.black,
      content1: colors.zinc[900],
      content2: colors.zinc[800],
      content3: colors.zinc[700],
      content4: colors.zinc[600],
    },
    otherColor: {
      divider: colors.white,
      focus: colors.blue[500],
      overlay: colors.white,
    },
  },
  layout: {
    fontSize: {
      tiny: "0.75",
      small: "0.875",
      medium: "1",
      large: "1.125",
    },
    lineHeight: {
      tiny: "1",
      small: "1.25",
      medium: "1.5",
      large: "1.75",
    },
    radius: {
      small: "0.5",
      medium: "0.75",
      large: "0.875",
    },
    borderWidth: {
      small: "1",
      medium: "2",
      large: "3",
    },
  },
};

export function getConfig(): Config {
  return storage.getConfiguration() ?? initialConfig;
}

export function getNextUIPluginConfig(config: Config): NextUIPluginConfig {
  const layout = {
    fontSize: {
      tiny: `${config.layout.fontSize.tiny}rem`,
      small: `${config.layout.fontSize.small}rem`,
      medium: `${config.layout.fontSize.medium}rem`,
      large: `${config.layout.fontSize.large}rem`,
    },
    lineHeight: {
      tiny: `${config.layout.lineHeight.tiny}rem`,
      small: `${config.layout.lineHeight.small}rem`,
      medium: `${config.layout.lineHeight.medium}rem`,
      large: `${config.layout.lineHeight.large}rem`,
    },
    radius: {
      small: `${config.layout.radius.small}rem`,
      medium: `${config.layout.radius.medium}rem`,
      large: `${config.layout.radius.large}rem`,
    },
    borderWidth: {
      small: `${config.layout.borderWidth.small}px`,
      medium: `${config.layout.borderWidth.medium}px`,
      large: `${config.layout.borderWidth.large}px`,
    },
  };

  return {
    themes: {
      light: {
        colors: {
          default: generateThemeColor(config.light.brandColor.default, "light"),
          primary: generateThemeColor(config.light.brandColor.primary, "light"),
          secondary: generateThemeColor(
            config.light.brandColor.secondary,
            "light"
          ),
          success: generateThemeColor(config.light.brandColor.success, "light"),
          warning: generateThemeColor(config.light.brandColor.warning, "light"),
          danger: generateThemeColor(config.light.brandColor.danger, "light"),
          background: config.light.baseColor.background,
          foreground: generateThemeColor(
            config.light.baseColor.foreground,
            "light"
          ),
          content1: {
            DEFAULT: config.light.baseColor.content1,
            foreground: readableColor(config.light.baseColor.content1),
          },
          content2: {
            DEFAULT: config.light.baseColor.content2,
            foreground: readableColor(config.light.baseColor.content2),
          },
          content3: {
            DEFAULT: config.light.baseColor.content3,
            foreground: readableColor(config.light.baseColor.content3),
          },
          content4: {
            DEFAULT: config.light.baseColor.content4,
            foreground: readableColor(config.light.baseColor.content4),
          },
          focus: config.light.otherColor.focus,
          overlay: config.light.otherColor.overlay,
          divider: config.light.otherColor.divider,
        },
        layout,
      },
      dark: {
        colors: {
          default: generateThemeColor(config.dark.brandColor.default, "dark"),
          primary: generateThemeColor(config.dark.brandColor.primary, "dark"),
          secondary: generateThemeColor(
            config.dark.brandColor.secondary,
            "dark"
          ),
          success: generateThemeColor(config.dark.brandColor.success, "dark"),
          warning: generateThemeColor(config.dark.brandColor.warning, "dark"),
          danger: generateThemeColor(config.dark.brandColor.danger, "dark"),
          background: config.dark.baseColor.background,
          foreground: generateThemeColor(
            config.dark.baseColor.foreground,
            "dark"
          ),
          content1: {
            DEFAULT: config.dark.baseColor.content1,
            foreground: readableColor(config.dark.baseColor.content1),
          },
          content2: {
            DEFAULT: config.dark.baseColor.content2,
            foreground: readableColor(config.dark.baseColor.content2),
          },
          content3: {
            DEFAULT: config.dark.baseColor.content3,
            foreground: readableColor(config.dark.baseColor.content3),
          },
          content4: {
            DEFAULT: config.dark.baseColor.content4,
            foreground: readableColor(config.dark.baseColor.content4),
          },
          focus: config.dark.otherColor.focus,
          overlay: config.dark.otherColor.overlay,
          divider: config.dark.otherColor.divider,
        },
        layout,
      },
    },
  };
}
