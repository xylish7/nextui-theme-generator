import { ColorType, Config, ThemeColor } from "shared/types";
import hexToHsl from "utils/colors";
import { generateThemeColor } from "./colors";

function setColor(colorType: ColorType, themeColor: ThemeColor) {
  Object.keys(themeColor).forEach((key) => {
    if (key === "DEFAULT") {
      document.documentElement.style.setProperty(
        `--nextui-${colorType}`,
        hexToHsl(themeColor[key as keyof ThemeColor])
      );
    } else {
      document.documentElement.style.setProperty(
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
