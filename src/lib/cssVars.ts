import { ColorType, Config, FontSizes, ThemeColor } from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";
import { BRAND_COLORS_ID, FONT_SIZES_ID } from "shared/constants";

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

function setFontSize(type: keyof FontSizes, value: string) {
  const el = document.getElementById(FONT_SIZES_ID);

  if (!el) {
    return;
  }

  el.style.setProperty(`--nextui-font-size-${type}`, `${value}rem`);
}

export function setCssVars(config: Config) {
  setColor("primary", generateThemeColor(config.brandColors.primary));
  setColor("secondary", generateThemeColor(config.brandColors.secondary));
  setColor("success", generateThemeColor(config.brandColors.success));
  setColor("warning", generateThemeColor(config.brandColors.warning));
  setColor("danger", generateThemeColor(config.brandColors.danger));
  setFontSize("tiny", config.fontSizes.tiny);
  setFontSize("small", config.fontSizes.small);
  setFontSize("medium", config.fontSizes.medium);
  setFontSize("large", config.fontSizes.large);
}
