import { readableColor } from "color2k";
import { COLOR_WEIGHT } from "shared/constants";
import { ColorShades, Theme, ThemeColor } from "shared/types";
import { swapColorValues } from "utils/colors";
import Values from "values.js";

export function colorValuesToRgb(value: Values) {
  return `rgba(${value.rgb.join(", ")}, ${value.alpha})`;
}

export function generateThemeColor(color: string, theme: Theme): ThemeColor {
  const values = new Values(color);
  const colorValues = values.all(COLOR_WEIGHT);
  const shades = colorValues
    .slice(0, colorValues.length - 1)
    .reduce((acc, shadeValue, index) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (acc as any)[index === 0 ? 50 : index * 100] = rgbToHex(shadeValue.rgb);
      return acc;
    }, {} as ColorShades);

  return {
    ...(theme === "light" ? shades : swapColorValues(shades)),
    foreground: readableColor(shades[500]),
    DEFAULT: shades[500],
  };
}

function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex([r, g, b]: number[]): string {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export function isValidHexColor(hex: string) {
  return /^#[0-9A-F]{6}$/i.test(hex);
}
