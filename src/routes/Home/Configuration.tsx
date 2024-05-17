import { useContext, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import ColorPicker from "components/ColorPicker";
import { CopyButton } from "components/CopyButton";
import { cssVars } from "lib/cssVars";
import { darkThemeColors, lightThemeColors } from "shared/theme-colors";
import { NextUIConfig } from "shared/types";
import { ThemeContext } from "providers/ThemeProvider";
import { NextUIConfigContext } from "providers/NextUIConfigProvider";

export default function Configuration() {
  const { nextUIConfig, setNextUIConfig } = useContext(NextUIConfigContext);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    cssVars.set("primary", nextUIConfig.primary, theme);
    cssVars.set("secondary", nextUIConfig.secondary, theme);
    cssVars.set("success", nextUIConfig.success, theme);
    cssVars.set("warning", nextUIConfig.warning, theme);
    cssVars.set("danger", nextUIConfig.danger, theme);
  }, [nextUIConfig, theme]);

  function generateConfig(nextUIConfig: NextUIConfig) {
    return {
      themes: {
        light: {
          colors: {
            primary: lightThemeColors[nextUIConfig.primary],
            secondary: lightThemeColors[nextUIConfig.secondary],
            success: lightThemeColors[nextUIConfig.success],
            warning: lightThemeColors[nextUIConfig.warning],
            danger: lightThemeColors[nextUIConfig.danger],
          },
        },
        dark: {
          colors: {
            primary: darkThemeColors[nextUIConfig.primary],
            secondary: darkThemeColors[nextUIConfig.secondary],
            success: darkThemeColors[nextUIConfig.success],
            warning: darkThemeColors[nextUIConfig.warning],
            danger: darkThemeColors[nextUIConfig.danger],
          },
        },
      },
    };
  }

  return (
    <Card className="max-w-xs w-full p-2 h-min relative md:sticky md:top-28 z-30">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
        <CopyButton data={generateConfig(nextUIConfig)} />
      </CardHeader>
      <CardBody>
        <span className="font-semibold mb-2">Main colors</span>
        <div className="grid grid-cols-2 flex-wrap gap-4">
          <ColorPicker
            color="primary"
            label="Primary"
            onSelect={(color) => setNextUIConfig({ primary: color })}
          />
          <ColorPicker
            color="secondary"
            label="Secondary"
            onSelect={(color) => setNextUIConfig({ secondary: color })}
          />
          <ColorPicker
            color="success"
            label="Success"
            onSelect={(color) => setNextUIConfig({ success: color })}
          />
          <ColorPicker
            color="warning"
            label="Warning"
            onSelect={(color) => setNextUIConfig({ warning: color })}
          />
          <ColorPicker
            color="danger"
            label="Danger"
            onSelect={(color) => setNextUIConfig({ danger: color })}
          />
        </div>
      </CardBody>
    </Card>
  );
}
