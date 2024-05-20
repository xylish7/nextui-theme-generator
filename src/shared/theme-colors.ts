// import { readableColor } from "color2k";
// import { colors } from "./colors";
// import { swapColorValues } from "utils/colors";

// export const lightThemeColors = Object.entries(colors).reduce(
//   (acc, [colorName, colorShades]) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (acc as any)[colorName] = {
//       ...colorShades,
//       foreground: readableColor(colorShades[500]),
//       DEFAULT: colorShades[500],
//     };
//     return acc;
//   },
//   {}
// );

// export const darkThemeColors = Object.entries(colors).reduce(
//   (acc, [colorName, colorShades]) => {
//     // eslint-disable-next-line @typescript-eslint/no-explicit-any
//     (acc as any)[colorName] = {
//       ...swapColorValues(colorShades),
//       foreground: readableColor(colorShades[500]),
//       DEFAULT: colorShades[500],
//     };
//     return acc;
//   },
//   {}
// );
