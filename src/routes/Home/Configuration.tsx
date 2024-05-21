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
  const { config, setBrandColor, setLineHeight, setFontSize, setRadius } =
    useContext(ConfigContext);
  useEffect(() => {
    setCssVars(config);
  }, [config]);

  return (
    <Card className="max-w-xs w-full p-2 h-min relative md:sticky md:top-28 z-30">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
        <CopyButton getData={() => generateConfig(config)} />
      </CardHeader>
      <CardBody className="flex flex-col gap-8">
        <ConfigurationSection id={BRAND_COLORS_ID} title="Brand colors">
          <ColorPicker
            hexColor={config.brandColor.primary}
            label="Primary"
            type="primary"
            onChange={(hexColor) => setBrandColor({ primary: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColor.secondary}
            label="Secondary"
            type="secondary"
            onChange={(hexColor) => setBrandColor({ secondary: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColor.success}
            label="Success"
            type="success"
            onChange={(hexColor) => setBrandColor({ success: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColor.warning}
            label="Warning"
            type="warning"
            onChange={(hexColor) => setBrandColor({ warning: hexColor })}
          />
          <ColorPicker
            hexColor={config.brandColor.danger}
            label="Danger"
            type="danger"
            onChange={(hexColor) => setBrandColor({ danger: hexColor })}
          />
        </ConfigurationSection>

        <ConfigurationSection title="Font size (rem)">
          <NumberInput
            label="Tiny"
            value={config.fontSize.tiny}
            onChange={(value) => setFontSize({ tiny: value })}
          />
          <NumberInput
            label="Small"
            value={config.fontSize.small}
            onChange={(value) => setFontSize({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.fontSize.medium}
            onChange={(value) => setFontSize({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.fontSize.large}
            onChange={(value) => setFontSize({ large: value })}
          />
        </ConfigurationSection>

        <ConfigurationSection title="Line height (rem)">
          <NumberInput
            label="Tiny"
            value={config.lineHeight.tiny}
            onChange={(value) => setLineHeight({ tiny: value })}
          />
          <NumberInput
            label="Small"
            value={config.lineHeight.small}
            onChange={(value) => setLineHeight({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.lineHeight.medium}
            onChange={(value) => setLineHeight({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.lineHeight.large}
            onChange={(value) => setLineHeight({ large: value })}
          />
        </ConfigurationSection>

        <ConfigurationSection cols={3} title="Radius (rem)">
          <NumberInput
            label="Small"
            value={config.radius.small}
            onChange={(value) => setRadius({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.radius.medium}
            onChange={(value) => setRadius({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.radius.large}
            onChange={(value) => setRadius({ large: value })}
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
          primary: generateThemeColor(config.brandColor.primary),
          secondary: generateThemeColor(config.brandColor.secondary),
          success: generateThemeColor(config.brandColor.success),
          warning: generateThemeColor(config.brandColor.warning),
          danger: generateThemeColor(config.brandColor.danger),
        },
        layout: {
          fontSize: {
            tiny: `${config.fontSize.tiny}rem`,
            small: `${config.fontSize.small}rem`,
            medium: `${config.fontSize.medium}rem`,
            large: `${config.fontSize.large}rem`,
          },
          lineHeight: {
            tiny: `${config.lineHeight.tiny}rem`,
            small: `${config.lineHeight.small}rem`,
            medium: `${config.lineHeight.medium}rem`,
            large: `${config.lineHeight.large}rem`,
          },
          radius: {
            small: `${config.radius.small}rem`,
            medium: `${config.radius.medium}rem`,
            large: `${config.radius.large}rem`,
          },
        },
      },
      dark: {
        colors: {
          primary: generateThemeColor(config.brandColor.primary),
          secondary: generateThemeColor(config.brandColor.secondary),
          success: generateThemeColor(config.brandColor.success),
          warning: generateThemeColor(config.brandColor.warning),
          danger: generateThemeColor(config.brandColor.danger),
        },
        layout: {
          fontSize: {
            tiny: `${config.fontSize.tiny}rem`,
            small: `${config.fontSize.small}rem`,
            medium: `${config.fontSize.medium}rem`,
            large: `${config.fontSize.large}rem`,
          },
          lineHeight: {
            tiny: `${config.lineHeight.tiny}rem`,
            small: `${config.lineHeight.small}rem`,
            medium: `${config.lineHeight.medium}rem`,
            large: `${config.lineHeight.large}rem`,
          },
          radius: {
            small: `${config.radius.small}rem`,
            medium: `${config.radius.medium}rem`,
            large: `${config.radius.large}rem`,
          },
        },
      },
    },
  };
}
