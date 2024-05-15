import { Card, CardBody, CardHeader } from "@nextui-org/react";
import ColorPicker from "components/ColorPicker";
import { Layout } from "components/layout";
import { CopyButton } from "components/CopyButton";
import { useContext, useEffect } from "react";
import { cssVars } from "lib/cssVars";
import { darkThemeColors, lightThemeColors } from "shared/theme-colors";
import { NextUIConfig } from "shared/types";
import { ThemeContext } from "providers/ThemeProvider";
import ButtonShowCase from "components/nextui/ButtonShowcase";
import ChipShowcase from "components/nextui/ChipShowcase";
import { NextUIConfigContext } from "providers/NextUIConfigProvider";
import InputShowcase from "components/nextui/InputShowcase";

export default function Home() {
  const { nextUIConfig, setNextUIConfig } = useContext(NextUIConfigContext);
  const { theme } = useContext(ThemeContext);

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

  useEffect(() => {
    cssVars.set("primary", nextUIConfig.primary, theme);
    cssVars.set("secondary", nextUIConfig.secondary, theme);
    cssVars.set("success", nextUIConfig.success, theme);
    cssVars.set("warning", nextUIConfig.warning, theme);
    cssVars.set("danger", nextUIConfig.danger, theme);
  }, [nextUIConfig, theme]);

  return (
    <Layout>
      <div className="flex gap-6">
        <Card className="max-w-xs w-full p-2 h-min sticky top-28">
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

        <div className="grid grid-cols-1 gap-4 w-full">
          <ButtonShowCase />
          <ChipShowcase />
          <InputShowcase />
        </div>
      </div>
    </Layout>
  );
}
