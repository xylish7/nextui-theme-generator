import { readableColor } from "color2k";
import Values from "values.js";

import {
  ColorShades,
  ThemeType,
  ThemeColor,
  ColorPickerType,
} from "../shared/types";
import {
  colorWeight,
  defaultDarkColorWeight,
  defaultLightColorWeight,
} from "../shared/constants";

/**
 * Convert color values to RGB
 */
export function colorValuesToRgb(value: Values) {
  return `rgba(${value.rgb.join(", ")}, ${value.alpha})`;
}

export function generateShades(color: string, weight: number) {
  const values = new Values(color);
  const colorValues = values.all(weight);

  return colorValues
    .slice(0, colorValues.length - 1)
    .reduce((acc, shadeValue, index) => {
      (acc as any)[index === 0 ? 50 : index * 100] = rgbToHex(shadeValue.rgb);

      return acc;
    }, {} as ColorShades);
}

/**
 * Generate theme color
 */
export function generateThemeColor(
  color: string,
  theme: ThemeType,
  weight: number
): ThemeColor {
  const lightShades = generateShades(color, weight);
  const darkShades = swapColorValues(lightShades);
  const baseColor = theme === "light" ? lightShades[500] : lightShades[500];

  return {
    ...(theme === "light" ? lightShades : darkShades),
    foreground: readableColor(baseColor),
    DEFAULT: baseColor,
  };
}

/**
 * Convert hex color to HSL
 */
export function hexToHsl(hex: string) {
  // Convert hex to RGB first
  const [r, g, b] = hexToRgb(hex);

  // Normalize RGB values
  const normalizedR = r / 255;
  const normalizedG = g / 255;
  const normalizedB = b / 255;

  // Find the maximum and minimum values of R, G, B
  const max = Math.max(normalizedR, normalizedG, normalizedB);
  const min = Math.min(normalizedR, normalizedG, normalizedB);

  // Calculate the lightness
  const lightness = (max + min) / 2;

  // If the maximum and minimum are equal, there is no saturation
  if (max === min) {
    return `${0} ${0}% ${lightness * 100}%`;
  }

  // Calculate the saturation
  let saturation = 0;

  if (lightness < 0.5) {
    saturation = (max - min) / (max + min);
  } else {
    saturation = (max - min) / (2 - max - min);
  }

  // Calculate the hue
  let hue;

  if (max === normalizedR) {
    hue = (normalizedG - normalizedB) / (max - min);
  } else if (max === normalizedG) {
    hue = 2 + (normalizedB - normalizedR) / (max - min);
  } else {
    hue = 4 + (normalizedR - normalizedG) / (max - min);
  }

  hue *= 60;
  if (hue < 0) hue += 360;

  return `${hue.toFixed(2)} ${(saturation * 100).toFixed(2)}% ${(
    lightness * 100
  ).toFixed(2)}%`;
}

/**
 * Get the color weight
 */
export function getColorWeight(colorType: ColorPickerType, theme: ThemeType) {
  if (colorType === "default") {
    return theme === "dark" ? defaultDarkColorWeight : defaultLightColorWeight;
  }

  return colorWeight;
}

/**
 * Convert RGB value to hex
 */
function rgbValueToHex(c: number) {
  const hex = c.toString(16);

  return hex.length == 1 ? "0" + hex : hex;
}

/**
 * Convert RGB to hex
 */
function rgbToHex([r, g, b]: number[]): string {
  return "#" + rgbValueToHex(r) + rgbValueToHex(g) + rgbValueToHex(b);
}

/**
 * Convert hex color to RGB
 */
function hexToRgb(hex: string): number[] {
  // Convert hex to RGB first
  let r = 0,
    g = 0,
    b = 0;

  if (hex.length === 4) {
    r = parseInt(hex[1] + hex[1], 16);
    g = parseInt(hex[2] + hex[2], 16);
    b = parseInt(hex[3] + hex[3], 16);
  } else if (hex.length === 7) {
    r = parseInt(hex.slice(1, 3), 16);
    g = parseInt(hex.slice(3, 5), 16);
    b = parseInt(hex.slice(5, 7), 16);
  } else {
    throw new Error("Invalid hex color format");
  }

  return [r, g, b];
}

export function swapColorValues(colors: ColorShades) {
  const swappedColors: Partial<ColorShades> = {};
  const keys = Object.keys(colors) as unknown as Array<keyof ColorShades>;
  const length = keys.length;

  for (let i = 0; i < length / 2; i++) {
    const key1 = keys[i];
    const key2 = keys[length - 1 - i];

    swappedColors[key1] = colors[key2];
    swappedColors[key2] = colors[key1];
  }
  if (length % 2 !== 0) {
    const middleKey = keys[Math.floor(length / 2)];
    swappedColors[middleKey] = colors[middleKey];
  }

  return swappedColors as ColorShades;
}
