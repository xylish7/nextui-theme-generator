import { cssVars } from "lib/cssVars";
import { useEffect, useState } from "react";
import { darkThemeColors, lightThemeColors } from "shared/theme-colors";
import { ColorName } from "shared/types";

export function useNextUIConfig() {
  const [nextUIRawConfig, setConfig] = useState<NextUIConfig>({
    primary: "blue",
    secondary: "purple",
    success: "green",
    warning: "yellow",
    danger: "red",
  });

  function setNextUIConfig(newConfig: Partial<NextUIConfig>) {
    setConfig((prevConfig) => ({
      ...prevConfig,
      ...newConfig,
    }));
  }

  function generateConfig() {
    return {
      themes: {
        light: {
          colors: {
            primary: lightThemeColors[nextUIRawConfig.primary],
            secondary: lightThemeColors[nextUIRawConfig.secondary],
            success: lightThemeColors[nextUIRawConfig.success],
            warning: lightThemeColors[nextUIRawConfig.warning],
            danger: lightThemeColors[nextUIRawConfig.danger],
          },
        },
        dark: {
          colors: {
            primary: darkThemeColors[nextUIRawConfig.primary],
            secondary: darkThemeColors[nextUIRawConfig.secondary],
            success: darkThemeColors[nextUIRawConfig.success],
            warning: darkThemeColors[nextUIRawConfig.warning],
            danger: darkThemeColors[nextUIRawConfig.danger],
          },
        },
      },
    };
  }

  useEffect(() => {
    cssVars.setPrimaryColor(nextUIRawConfig.primary);
    cssVars.setSecondaryColor(nextUIRawConfig.secondary);
    cssVars.setSuccessColor(nextUIRawConfig.success);
    cssVars.setWarningColor(nextUIRawConfig.warning);
    cssVars.setDangerColor(nextUIRawConfig.danger);
  }, [nextUIRawConfig]);

  return { nextUIConfig: generateConfig(), setNextUIConfig };
}

interface NextUIConfig {
  primary: ColorName;
  secondary: ColorName;
  success: ColorName;
  warning: ColorName;
  danger: ColorName;
}
