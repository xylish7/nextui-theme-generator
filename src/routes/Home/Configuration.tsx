import { useContext, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import ColorPicker from "components/ColorPicker";
import { CopyButton } from "components/CopyButton";
import { ConfigContext } from "providers/ConfigProvider";
import { generateThemeColor } from "lib/colors";
import { setCssVars } from "lib/cssVars";
import { Config } from "shared/types";

export default function Configuration() {
  const { config, setBrandColor } = useContext(ConfigContext);
  useEffect(() => {
    setCssVars(config);
  }, [config]);

  function generateConfig(config: Config) {
    return {
      themes: {
        light: {
          colors: {
            primary: generateThemeColor(config.brandColors.primary),
            secondary: generateThemeColor(config.brandColors.secondary),
            success: generateThemeColor(config.brandColors.success),
            warning: generateThemeColor(config.brandColors.warning),
            danger: generateThemeColor(config.brandColors.danger),
          },
        },
        dark: {
          colors: {
            primary: generateThemeColor(config.brandColors.primary),
            secondary: generateThemeColor(config.brandColors.secondary),
            success: generateThemeColor(config.brandColors.success),
            warning: generateThemeColor(config.brandColors.warning),
            danger: generateThemeColor(config.brandColors.danger),
          },
        },
      },
    };
  }

  return (
    <Card className="max-w-xs w-full p-2 h-min relative md:sticky md:top-28 z-30">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
        <CopyButton data={generateConfig(config)} />
      </CardHeader>
      <CardBody>
        <span className="font-semibold mb-2">Brand colors</span>
        <div className="grid grid-cols-2 flex-wrap gap-4">
          <ColorPicker
            hexColor={config.brandColors.primary}
            label="Primary"
            type="primary"
            onChange={(hexColor) => setBrandColor({ primary: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColors.secondary}
            label="Secondary"
            type="secondary"
            onChange={(hexColor) => setBrandColor({ secondary: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColors.success}
            label="Success"
            type="success"
            onChange={(hexColor) => setBrandColor({ success: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColors.warning}
            label="Warning"
            type="warning"
            onChange={(hexColor) => setBrandColor({ warning: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColors.danger}
            label="Danger"
            type="danger"
            onChange={(hexColor) => setBrandColor({ danger: hexColor })}
          />
        </div>
      </CardBody>
    </Card>
  );
}
