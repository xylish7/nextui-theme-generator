import {
  ColorType,
  Config,
  FontSize,
  LineHeight,
  ThemeColor,
} from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";
import { BRAND_COLORS_ID, SHOWCASE_ID } from "shared/constants";

function setColor(colorType: ColorType, themeColor: ThemeColor) {
  const el = document.getElementById(BRAND_COLORS_ID);

  if (!el) {
    return;
  }

  Object.keys(themeColor).forEach((key) => {
    if (key === "DEFAULT") {
      el.style.setProperty(
        `--nextui-${colorType}`,
        hexToHsl(themeColor[key as keyof ThemeColor])
      );
    } else {
      el.style.setProperty(
        `--nextui-${colorType}-${key}`,
        hexToHsl(themeColor[key as keyof ThemeColor])
      );
    }
  });
}

function setFontSize(type: keyof FontSize, value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-font-size-${type}`, `${value}rem`);
}

function setLineHeight(type: keyof LineHeight, value: string) {
  const el = document.getElementById(SHOWCASE_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-line-height-${type}`, value);
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
}
