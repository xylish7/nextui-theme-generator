import { ColorType, Config, ThemeColor } from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";
import { BRAND_COLORS_ID, SHOWCASE_ID } from "shared/constants";

function setBorderWidth(type: keyof Config["borderWidth"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-border-width-${type}`, `${value}px`);
}

function setColor(colorType: ColorType, themeColor: ThemeColor) {
  const brandColorsEl = document.getElementById(BRAND_COLORS_ID);
  const showcaseEl = document.getElementById(SHOWCASE_ID);

  Object.keys(themeColor).forEach((key) => {
    const value = hexToHsl(themeColor[key as keyof ThemeColor]);
    if (key === "DEFAULT") {
      brandColorsEl?.style.setProperty(`--nextui-${colorType}`, value);
      showcaseEl?.style.setProperty(`--nextui-${colorType}`, value);
    } else {
      brandColorsEl?.style.setProperty(`--nextui-${colorType}-${key}`, value);
      showcaseEl?.style.setProperty(`--nextui-${colorType}-${key}`, value);
    }
  });
}

function setFontSize(type: keyof Config["fontSize"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-font-size-${type}`, `${value}rem`);
}

function setLineHeight(type: keyof Config["lineHeight"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-line-height-${type}`, `${value}rem`);
}

function setRadius(type: keyof Config["radius"], value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-radius-${type}`, `${value}rem`);
}

export function setCssVars(config: Config) {
  setColor("primary", generateThemeColor(config.brandColor.primary));
  setColor("secondary", generateThemeColor(config.brandColor.secondary));
  setColor("success", generateThemeColor(config.brandColor.success));
  setColor("warning", generateThemeColor(config.brandColor.warning));
  setColor("danger", generateThemeColor(config.brandColor.danger));
  setFontSize("tiny", config.fontSize.tiny);
  setFontSize("small", config.fontSize.small);
  setFontSize("medium", config.fontSize.medium);
  setFontSize("large", config.fontSize.large);
  setLineHeight("tiny", config.lineHeight.tiny);
  setLineHeight("small", config.lineHeight.small);
  setLineHeight("medium", config.lineHeight.medium);
  setLineHeight("large", config.lineHeight.large);
  setRadius("small", config.radius.small);
  setRadius("medium", config.radius.medium);
  setRadius("large", config.radius.large);
  setBorderWidth("small", config.borderWidth.small);
  setBorderWidth("medium", config.borderWidth.medium);
  setBorderWidth("large", config.borderWidth.large);
}
