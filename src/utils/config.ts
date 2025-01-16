import { HeroUIPluginConfig } from "@heroui/theme";
import { readableColor } from "color2k";

import { Config } from "../shared/types";
import {
  defaultDarkColorWeight,
  defaultLightColorWeight,
} from "../shared/constants";

import { generateThemeColor } from "./colors";

/**
 * Generate plugin configuration
 */
export function generatePluginConfig(config: Config): HeroUIPluginConfig {
  const layout: HeroUIPluginConfig["layout"] = {
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
    disabledOpacity: config.layout.otherParams.disabledOpacity,
    dividerWeight: config.layout.otherParams.dividerWeight,
    hoverOpacity: config.layout.otherParams.hoverOpacity,
  };

  return {
    themes: {
      light: {
        colors: {
          default: generateThemeColor(
            config.light.brandColor.default,
            "light",
            defaultLightColorWeight
          ),
          primary: generateThemeColor(
            config.light.brandColor.primary,
            "light",
            defaultLightColorWeight
          ),
          secondary: generateThemeColor(
            config.light.brandColor.secondary,
            "light",
            defaultLightColorWeight
          ),
          success: generateThemeColor(
            config.light.brandColor.success,
            "light",
            defaultLightColorWeight
          ),
          warning: generateThemeColor(
            config.light.brandColor.warning,
            "light",
            defaultLightColorWeight
          ),
          danger: generateThemeColor(
            config.light.brandColor.danger,
            "light",
            defaultLightColorWeight
          ),
          background: config.light.baseColor.background,
          foreground: generateThemeColor(
            config.light.baseColor.foreground,
            "light",
            defaultLightColorWeight
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
      },
      dark: {
        colors: {
          default: generateThemeColor(
            config.dark.brandColor.default,
            "dark",
            defaultDarkColorWeight
          ),
          primary: generateThemeColor(
            config.dark.brandColor.primary,
            "dark",
            defaultDarkColorWeight
          ),
          secondary: generateThemeColor(
            config.dark.brandColor.secondary,
            "dark",
            defaultDarkColorWeight
          ),
          success: generateThemeColor(
            config.dark.brandColor.success,
            "dark",
            defaultDarkColorWeight
          ),
          warning: generateThemeColor(
            config.dark.brandColor.warning,
            "dark",
            defaultDarkColorWeight
          ),
          danger: generateThemeColor(
            config.dark.brandColor.danger,
            "dark",
            defaultDarkColorWeight
          ),
          background: config.dark.baseColor.background,
          foreground: generateThemeColor(
            config.dark.baseColor.foreground,
            "dark",
            defaultDarkColorWeight
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
      },
    },
    layout,
  };
}
