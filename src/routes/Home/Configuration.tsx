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
import { COLORS_ID, BASE_COLOR_ID } from "shared/constants";
import { ThemeContext } from "providers/ThemeProvider";

export default function Configuration() {
  const { theme } = useContext(ThemeContext);

  const {
    config,
    setBaseColor,
    setBorderWidth,
    setBrandColor,
    setLineHeight,
    setFontSize,
    setRadius,
  } = useContext(ConfigContext);
  useEffect(() => {
    setCssVars(config, theme);
  }, [config, theme]);

  return (
    <Card className="max-w-xs w-full p-2 h-min relative md:sticky md:top-28 z-30 md:h-[calc(100vh-10rem)]">
      <CardHeader className="flex justify-between">
        <span className="font-semibold text-lg">NextUI Configuration</span>
        <CopyButton getData={() => generateConfig(config)} />
      </CardHeader>
      <CardBody className="flex flex-col gap-8">
        <ConfigurationSection id={COLORS_ID} title="Brand colors">
          <ColorPicker
            hexColor={config[theme].brandColor.default}
            label="Default"
            type="default"
            onChange={(hexColor) => setBrandColor({ default: hexColor }, theme)}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.primary}
            label="Primary"
            type="primary"
            onChange={(hexColor) => setBrandColor({ primary: hexColor }, theme)}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.secondary}
            label="Secondary"
            type="secondary"
            onChange={(hexColor) =>
              setBrandColor({ secondary: hexColor }, theme)
            }
          />
          <ColorPicker
            hexColor={config[theme].brandColor.success}
            label="Success"
            type="success"
            onChange={(hexColor) => setBrandColor({ success: hexColor }, theme)}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.warning}
            label="Warning"
            type="warning"
            onChange={(hexColor) => setBrandColor({ warning: hexColor }, theme)}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.danger}
            label="Danger"
            type="danger"
            onChange={(hexColor) => setBrandColor({ danger: hexColor }, theme)}
          />
        </ConfigurationSection>

        <ConfigurationSection id={BASE_COLOR_ID} title="Base colors">
          <ColorPicker
            hexColor={config[theme].baseColor.background}
            label="Background"
            type="background"
            onChange={(hexColor) =>
              setBaseColor({ background: hexColor }, theme)
            }
          />
          <ColorPicker
            hexColor={config[theme].baseColor.foreground}
            label="Foreground"
            type="foreground"
            onChange={(hexColor) =>
              setBaseColor({ foreground: hexColor }, theme)
            }
          />
        </ConfigurationSection>

        <ConfigurationSection title="Font size (rem)">
          <NumberInput
            label="Tiny"
            value={config.layout.fontSize.tiny}
            onChange={(value) => setFontSize({ tiny: value })}
          />
          <NumberInput
            label="Small"
            value={config.layout.fontSize.small}
            onChange={(value) => setFontSize({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.layout.fontSize.medium}
            onChange={(value) => setFontSize({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.layout.fontSize.large}
            onChange={(value) => setFontSize({ large: value })}
          />
        </ConfigurationSection>

        <ConfigurationSection title="Line height (rem)">
          <NumberInput
            label="Tiny"
            value={config.layout.lineHeight.tiny}
            onChange={(value) => setLineHeight({ tiny: value })}
          />
          <NumberInput
            label="Small"
            value={config.layout.lineHeight.small}
            onChange={(value) => setLineHeight({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.layout.lineHeight.medium}
            onChange={(value) => setLineHeight({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.layout.lineHeight.large}
            onChange={(value) => setLineHeight({ large: value })}
          />
        </ConfigurationSection>

        <ConfigurationSection cols={3} title="Radius (rem)">
          <NumberInput
            label="Small"
            value={config.layout.radius.small}
            onChange={(value) => setRadius({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.layout.radius.medium}
            onChange={(value) => setRadius({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.layout.radius.large}
            onChange={(value) => setRadius({ large: value })}
          />
        </ConfigurationSection>

        <ConfigurationSection cols={3} title="Border width (px)">
          <NumberInput
            label="Small"
            value={config.layout.borderWidth.small}
            onChange={(value) => setBorderWidth({ small: value })}
          />
          <NumberInput
            label="Medium"
            value={config.layout.borderWidth.medium}
            onChange={(value) => setBorderWidth({ medium: value })}
          />
          <NumberInput
            label="Large"
            value={config.layout.borderWidth.large}
            onChange={(value) => setBorderWidth({ large: value })}
          />
        </ConfigurationSection>
      </CardBody>
    </Card>
  );
}

function generateConfig(config: Config): NextUIPluginConfig {
  const layout = {
    fontSize: {
      tiny: `${config.layout.fontSize.tiny}rem`,
      small: `${config.layout.fontSize.small}rem`,
      medium: `${config.layout.fontSize.medium}rem`,
      large: `${config.layout.fontSize.large}rem`,
    },
    lineHeight: {
      tiny: `${config.layout.lineHeight.tiny}rem`,
      small: `${config.layout.lineHeight.small}rem`,
      medium: `${config.layout.lineHeight.medium}rem`,
      large: `${config.layout.lineHeight.large}rem`,
    },
    radius: {
      small: `${config.layout.radius.small}rem`,
      medium: `${config.layout.radius.medium}rem`,
      large: `${config.layout.radius.large}rem`,
    },
    borderWidth: {
      small: `${config.layout.borderWidth.small}px`,
      medium: `${config.layout.borderWidth.medium}px`,
      large: `${config.layout.borderWidth.large}px`,
    },
  };

  return {
    themes: {
      light: {
        colors: {
          default: generateThemeColor(config.light.brandColor.default, "light"),
          primary: generateThemeColor(config.light.brandColor.primary, "light"),
          secondary: generateThemeColor(
            config.light.brandColor.secondary,
            "light"
          ),
          success: generateThemeColor(config.light.brandColor.success, "light"),
          warning: generateThemeColor(config.light.brandColor.warning, "light"),
          danger: generateThemeColor(config.light.brandColor.danger, "light"),
          background: config.light.baseColor.background,
          foreground: generateThemeColor(
            config.light.baseColor.foreground,
            "light"
          ),
        },
        layout,
      },
      dark: {
        colors: {
          default: generateThemeColor(config.dark.brandColor.default, "dark"),
          primary: generateThemeColor(config.dark.brandColor.primary, "dark"),
          secondary: generateThemeColor(
            config.dark.brandColor.secondary,
            "dark"
          ),
          success: generateThemeColor(config.dark.brandColor.success, "dark"),
          warning: generateThemeColor(config.dark.brandColor.warning, "dark"),
          danger: generateThemeColor(config.dark.brandColor.danger, "dark"),
          background: config.dark.baseColor.background,
          foreground: generateThemeColor(
            config.dark.baseColor.foreground,
            "dark"
          ),
        },
        layout,
      },
    },
  };
}
