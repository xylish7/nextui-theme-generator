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

function setPrimaryColor(color: ColorName) {
  document.documentElement.style.setProperty(
    "--nextui-primary",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-primary-600",
    hexToHsl(lightThemeColors[color][600])
  );

  document.documentElement.style.setProperty(
    "--nextui-primary-foreground",
    hexToHsl(lightThemeColors[color].foreground)
  );
}

function setSecondaryColor(color: ColorName) {
  document.documentElement.style.setProperty(
    "--nextui-secondary",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-secondary-600",
    hexToHsl(lightThemeColors[color][600])
  );

  document.documentElement.style.setProperty(
    "--nextui-secondary-foreground",
    hexToHsl(lightThemeColors[color].foreground)
  );
}

function setSuccessColor(color: ColorName) {
  document.documentElement.style.setProperty(
    "--nextui-success",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-success-600",
    hexToHsl(lightThemeColors[color][600])
  );
  document.documentElement.style.setProperty(
    "--nextui-success-foreground",
    hexToHsl(lightThemeColors[color].foreground)
  );
}

function setWarningColor(color: ColorName) {
  document.documentElement.style.setProperty(
    "--nextui-warning",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-warning-600",
    hexToHsl(lightThemeColors[color][600])
  );

  document.documentElement.style.setProperty(
    "--nextui-warning-foreground",
    hexToHsl(lightThemeColors[color].foreground)
  );
}

function setDangerColor(color: ColorName) {
  document.documentElement.style.setProperty(
    "--nextui-danger",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-danger-500",
    hexToHsl(lightThemeColors[color][500])
  );
  document.documentElement.style.setProperty(
    "--nextui-danger-600",
    hexToHsl(lightThemeColors[color][600])
  );

  document.documentElement.style.setProperty(
    "--nextui-danger-foreground",
    hexToHsl(lightThemeColors[color].foreground)
  );
}

export const cssVars = {
  set: setMainColors,
  setPrimaryColor,
  setSecondaryColor,
  setSuccessColor,
  setWarningColor,
  setDangerColor,
};
