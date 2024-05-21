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

function setBorderWidth(
  type: keyof LayoutConfig["borderWidth"],
  value: string
) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-border-width-${type}`, `${value}px`);
}

function setColor(colorType: ColorPickerType, themeColor: ThemeColor) {
  const brandColorsEl = document.getElementById(COLORS_ID);
  const commonColorsEl = document.getElementById(BASE_COLOR_ID);
  const showcaseEl = document.getElementById(SHOWCASE_ID);

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

function setBackground(value: string) {
  const showcaseEl = document.getElementById(SHOWCASE_ID);
  const baseColor = document.getElementById(BASE_COLOR_ID);
  baseColor?.style.setProperty("--nextui-background", hexToHsl(value));
  showcaseEl?.style.setProperty("--nextui-background", hexToHsl(value));
}

function setFontSize(type: keyof LayoutConfig["fontSize"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-font-size-${type}`, `${value}rem`);
}

function setLineHeight(type: keyof LayoutConfig["lineHeight"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-line-height-${type}`, `${value}rem`);
}

function setRadius(type: keyof LayoutConfig["radius"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);
  el?.style.setProperty(`--nextui-radius-${type}`, `${value}rem`);
}

export function setCssVars(config: Config, theme: Theme) {
  setColor(
    "default",
    generateThemeColor(config[theme].brandColor.default, theme)
  );
  setColor(
    "primary",
    generateThemeColor(config[theme].brandColor.primary, theme)
  );
  setColor(
    "secondary",
    generateThemeColor(config[theme].brandColor.secondary, theme)
  );
  setColor(
    "success",
    generateThemeColor(config[theme].brandColor.success, theme)
  );
  setColor(
    "warning",
    generateThemeColor(config[theme].brandColor.warning, theme)
  );
  setColor(
    "danger",
    generateThemeColor(config[theme].brandColor.danger, theme)
  );
  setColor(
    "foreground",
    generateThemeColor(config[theme].baseColor.foreground, theme)
  );
  setBackground(config[theme].baseColor.background);
  setFontSize("tiny", config.layout.fontSize.tiny);
  setFontSize("small", config.layout.fontSize.small);
  setFontSize("medium", config.layout.fontSize.medium);
  setFontSize("large", config.layout.fontSize.large);
  setLineHeight("tiny", config.layout.lineHeight.tiny);
  setLineHeight("small", config.layout.lineHeight.small);
  setLineHeight("medium", config.layout.lineHeight.medium);
  setLineHeight("large", config.layout.lineHeight.large);
  setRadius("small", config.layout.radius.small);
  setRadius("medium", config.layout.radius.medium);
  setRadius("large", config.layout.radius.large);
  setBorderWidth("small", config.layout.borderWidth.small);
  setBorderWidth("medium", config.layout.borderWidth.medium);
  setBorderWidth("large", config.layout.borderWidth.large);
}
