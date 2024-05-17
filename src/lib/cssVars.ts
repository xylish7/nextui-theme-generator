import { darkThemeColors, lightThemeColors } from "shared/theme-colors";
import { ColorName, ColorVariant, Theme, ThemeColor } from "shared/types";
import hexToHsl from "utils/colors";

function setMainColors(
  colorVariant: ColorVariant,
  color: ColorName,
  theme: Theme
) {
  const themeColor =
    theme === "light" ? lightThemeColors[color] : darkThemeColors[color];

  Object.keys(themeColor).forEach((key) => {
    if (key === "DEFAULT") {
      document.documentElement.style.setProperty(
        `--nextui-${colorVariant}`,
        hexToHsl(themeColor[key as keyof ThemeColor])
      );
    } else {
      document.documentElement.style.setProperty(
        `--nextui-${colorVariant}-${key}`,
        hexToHsl(themeColor[key as keyof ThemeColor])
      );
    }
  });
}

export const cssVars = {
  set: setMainColors,
};
