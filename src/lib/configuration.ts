import { NextUIPluginConfig } from "@nextui-org/react";

import { Config } from "shared/types";
import { generateThemeColor } from "./colors";

export function generateConfig(config: Config): NextUIPluginConfig {
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
