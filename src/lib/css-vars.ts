import {
  ColorPickerType,
  Config,
  LayoutConfig,
  Theme,
  ThemeColor,
} from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";
import { COLORS_ID, BASE_COLOR_ID, SHOWCASE_ID } from "shared/constants";
import { readableColor } from "color2k";

export function setCssColor(
  colorType: ColorPickerType,
  value: string,
  theme: Theme
) {
  const brandColorsEl = document.getElementById(COLORS_ID);
  const commonColorsEl = document.getElementById(BASE_COLOR_ID);
  const showcaseEl = document.getElementById(SHOWCASE_ID);
  const themeColor = generateThemeColor(value, theme);

  Object.keys(themeColor).forEach((key) => {
    const value = hexToHsl(themeColor[key as keyof ThemeColor]);
    if (key === "DEFAULT") {
      brandColorsEl?.style.setProperty(`--nextui-${colorType}`, value);
      commonColorsEl?.style.setProperty(`--nextui-${colorType}`, value);
      showcaseEl?.style.setProperty(`--nextui-${colorType}`, value);
    } else {
      brandColorsEl?.style.setProperty(`--nextui-${colorType}-${key}`, value);
      commonColorsEl?.style.setProperty(`--nextui-${colorType}-${key}`, value);
      showcaseEl?.style.setProperty(`--nextui-${colorType}-${key}`, value);
    }
  });
}

export function setCssBackground(value: string) {
  const showcaseEl = document.getElementById(SHOWCASE_ID);
  const baseColor = document.getElementById(BASE_COLOR_ID);
  const hslValue = hexToHsl(value);

  baseColor?.style.setProperty("--nextui-background", hslValue);
  showcaseEl?.style.setProperty("--nextui-background", hslValue);
}

export function setCssFontSize(
  type: keyof LayoutConfig["fontSize"],
  value: string
) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-font-size-${type}`, `${value}rem`);
}

export function setCssLineHeight(
  type: keyof LayoutConfig["lineHeight"],
  value: string
) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-line-height-${type}`, `${value}rem`);
}

export function setCssRadius(
  type: keyof LayoutConfig["radius"],
  value: string
) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-radius-${type}`, `${value}rem`);
}

export function setCssBorderWidth(
  type: keyof LayoutConfig["borderWidth"],
  value: string
) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-border-width-${type}`, `${value}px`);
}

export function setCssContentColor(level: 1 | 2 | 3 | 4, value: string) {
  const showcaseEl = document.getElementById(SHOWCASE_ID);
  const baseColorEl = document.getElementById(BASE_COLOR_ID);
  const hslValue = hexToHsl(value);

  showcaseEl?.style.setProperty(`--nextui-content${level}`, hslValue);
  showcaseEl?.style.setProperty(
    `--nextui-content${level}-foreground`,
    hexToHsl(readableColor(value))
  );
  baseColorEl?.style.setProperty(`--nextui-content${level}`, hslValue);
  baseColorEl?.style.setProperty(
    `--nextui-content${level}-foreground`,
    hexToHsl(readableColor(value))
  );
}

export function setAllCssVars(config: Config, theme: Theme) {
  setCssColor("default", config[theme].brandColor.default, theme);
  setCssColor("primary", config[theme].brandColor.primary, theme);
  setCssColor("secondary", config[theme].brandColor.secondary, theme);
  setCssColor("success", config[theme].brandColor.success, theme);
  setCssColor("warning", config[theme].brandColor.warning, theme);
  setCssColor("danger", config[theme].brandColor.danger, theme);
  setCssColor("foreground", config[theme].baseColor.foreground, theme);
  setCssContentColor(1, config[theme].baseColor.content1);
  setCssContentColor(2, config[theme].baseColor.content2);
  setCssContentColor(3, config[theme].baseColor.content3);
  setCssContentColor(4, config[theme].baseColor.content4);
  setCssBackground(config[theme].baseColor.background);
  setCssFontSize("tiny", config.layout.fontSize.tiny);
  setCssFontSize("small", config.layout.fontSize.small);
  setCssFontSize("medium", config.layout.fontSize.medium);
  setCssFontSize("large", config.layout.fontSize.large);
  setCssLineHeight("tiny", config.layout.lineHeight.tiny);
  setCssLineHeight("small", config.layout.lineHeight.small);
  setCssLineHeight("medium", config.layout.lineHeight.medium);
  setCssLineHeight("large", config.layout.lineHeight.large);
  setCssRadius("small", config.layout.radius.small);
  setCssRadius("medium", config.layout.radius.medium);
  setCssRadius("large", config.layout.radius.large);
  setCssBorderWidth("small", config.layout.borderWidth.small);
  setCssBorderWidth("medium", config.layout.borderWidth.medium);
  setCssBorderWidth("large", config.layout.borderWidth.large);
}
