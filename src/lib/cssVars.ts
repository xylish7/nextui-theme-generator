import { ColorType, Config, ThemeColor } from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";

function setColor(colorType: ColorType, themeColor: ThemeColor) {
  const el = document.getElementById("theme-generator");

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

export function setCssVars(config: Config) {
  setColor("primary", generateThemeColor(config.brandColors.primary));
  setColor("secondary", generateThemeColor(config.brandColors.secondary));
  setColor("success", generateThemeColor(config.brandColors.success));
  setColor("warning", generateThemeColor(config.brandColors.warning));
  setColor("danger", generateThemeColor(config.brandColors.danger));
}
