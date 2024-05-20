import { useContext, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  NextUIPluginConfig,
} from "@nextui-org/react";

import ColorPicker from "components/ColorPicker";
import { CopyButton } from "components/CopyButton";
import { ConfigContext } from "providers/ConfigProvider";
import { generateThemeColor } from "lib/colors";
import { setCssVars } from "lib/cssVars";
import { Config } from "shared/types";
import ConfigurationSection from "components/ConfigurationSection";
import NumberInput from "components/NumberInput";
import { BRAND_COLORS_ID } from "shared/constants";

export default function Configuration() {
  const { config, setBrandColor, setFontSize } = useContext(ConfigContext);
  useEffect(() => {
    setCssVars(config);
  }, [config]);

  return (
    <Card className="max-w-xs w-full p-2 h-min relative md:sticky md:top-28 z-30">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
        <CopyButton data={generateConfig(config)} />
      </CardHeader>
      <CardBody className="flex flex-col gap-8">
        <ConfigurationSection id={BRAND_COLORS_ID} title="Brand colors">
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
        </ConfigurationSection>

        <ConfigurationSection title="Font size (rem)">
          <NumberInput
            label="Tiny"
            value={config.fontSizes.tiny}
            onChange={(value) => setFontSize({ tiny: value })}
          />
          <NumberInput
            label="Small"
            value={config.fontSizes.small}
            onChange={(value) => setFontSize({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.fontSizes.medium}
            onChange={(value) => setFontSize({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.fontSizes.large}
            onChange={(value) => setFontSize({ large: value })}
          />
        </ConfigurationSection>
      </CardBody>
    </Card>
  );
}

function generateConfig(config: Config): NextUIPluginConfig {
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
        layout: {
          fontSize: {
            tiny: `${config.fontSizes.tiny}rem`,
            small: `${config.fontSizes.small}rem`,
            medium: `${config.fontSizes.medium}rem`,
            large: `${config.fontSizes.large}rem`,
          },
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
        layout: {
          fontSize: {
            tiny: `${config.fontSizes.tiny}rem`,
            small: `${config.fontSizes.small}rem`,
            medium: `${config.fontSizes.medium}rem`,
            large: `${config.fontSizes.large}rem`,
          },
        },
      },
    },
  };
}
