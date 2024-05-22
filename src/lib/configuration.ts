import { NextUIPluginConfig, colors } from "@nextui-org/react";

import { Config } from "shared/types";
import { generateThemeColor } from "./colors";
import { storage } from "./local-storage";

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
        },
        layout,
      },
    },
  };
}
