import { useContext, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@nextui-org/react";

import ColorPicker from "components/ColorPicker";
import { CopyButton } from "components/CopyButton";
import ConfigurationSection from "components/ConfigurationSection";
import NumberInput from "components/NumberInput";
import { ConfigContext } from "providers/ConfigProvider";
import { generateConfig } from "lib/configuration";
import {
  setCssColor,
  setAllCssVars,
  setCssBackground,
  setCssLineHeight,
  setCssRadius,
  setCssFontSize,
  setCssBorderWidth,
} from "lib/css-vars";
import { COLORS_ID, BASE_COLOR_ID } from "shared/constants";
import { ThemeContext } from "providers/ThemeProvider";
import usePrevious from "hooks/usePrevious";

export default function Configuration() {
  const { theme } = useContext(ThemeContext);
  const prevTheme = usePrevious(theme);

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
    if (prevTheme !== theme) {
      setAllCssVars(config, theme);
    }
  }, [config, theme, prevTheme]);

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
            onChange={(hexColor) => {
              setBrandColor({ default: hexColor }, theme);
              setCssColor("default", hexColor, theme);
            }}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.primary}
            label="Primary"
            type="primary"
            onChange={(hexColor) => {
              setBrandColor({ primary: hexColor }, theme);
              setCssColor("primary", hexColor, theme);
            }}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.secondary}
            label="Secondary"
            type="secondary"
            onChange={(hexColor) => {
              setBrandColor({ secondary: hexColor }, theme);
              setCssColor("secondary", hexColor, theme);
            }}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.success}
            label="Success"
            type="success"
            onChange={(hexColor) => {
              setBrandColor({ success: hexColor }, theme);
              setCssColor("success", hexColor, theme);
            }}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.warning}
            label="Warning"
            type="warning"
            onChange={(hexColor) => {
              setBrandColor({ warning: hexColor }, theme);
              setCssColor("warning", hexColor, theme);
            }}
          />
          <ColorPicker
            hexColor={config[theme].brandColor.danger}
            label="Danger"
            type="danger"
            onChange={(hexColor) => {
              setBrandColor({ danger: hexColor }, theme);
              setCssColor("danger", hexColor, theme);
            }}
          />
        </ConfigurationSection>

        <ConfigurationSection id={BASE_COLOR_ID} title="Base colors">
          <ColorPicker
            hexColor={config[theme].baseColor.background}
            label="Background"
            type="background"
            onChange={(hexColor) => {
              setBaseColor({ background: hexColor }, theme);
              setCssBackground(hexColor);
            }}
          />
          <ColorPicker
            hexColor={config[theme].baseColor.foreground}
            label="Foreground"
            type="foreground"
            onChange={(hexColor) => {
              setBaseColor({ foreground: hexColor }, theme);
              setCssColor("foreground", hexColor, theme);
            }}
          />
        </ConfigurationSection>

        <ConfigurationSection title="Font size (rem)">
          <NumberInput
            label="Tiny"
            value={config.layout.fontSize.tiny}
            onChange={(value) => {
              setFontSize({ tiny: value });
              setCssFontSize("tiny", value);
            }}
          />
          <NumberInput
            label="Small"
            value={config.layout.fontSize.small}
            onChange={(value) => {
              setFontSize({ small: value });
              setCssFontSize("small", value);
            }}
          />
          <NumberInput
            label="Medium"
            value={config.layout.fontSize.medium}
            onChange={(value) => {
              setFontSize({ medium: value });
              setCssFontSize("medium", value);
            }}
          />
          <NumberInput
            label="Large"
            value={config.layout.fontSize.large}
            onChange={(value) => {
              setFontSize({ large: value });
              setCssFontSize("large", value);
            }}
          />
        </ConfigurationSection>

        <ConfigurationSection title="Line height (rem)">
          <NumberInput
            label="Tiny"
            value={config.layout.lineHeight.tiny}
            onChange={(value) => {
              setLineHeight({ tiny: value });
              setCssLineHeight("tiny", value);
            }}
          />
          <NumberInput
            label="Small"
            value={config.layout.lineHeight.small}
            onChange={(value) => {
              setLineHeight({ small: value });
              setCssLineHeight("small", value);
            }}
          />
          <NumberInput
            label="Medium"
            value={config.layout.lineHeight.medium}
            onChange={(value) => {
              setLineHeight({ medium: value });
              setCssLineHeight("medium", value);
            }}
          />
          <NumberInput
            label="Large"
            value={config.layout.lineHeight.large}
            onChange={(value) => {
              setLineHeight({ large: value });
              setCssLineHeight("large", value);
            }}
          />
        </ConfigurationSection>

        <ConfigurationSection cols={3} title="Radius (rem)">
          <NumberInput
            label="Small"
            value={config.layout.radius.small}
            onChange={(value) => {
              setRadius({ small: value });
              setCssRadius("small", value);
            }}
          />
          <NumberInput
            label="Medium"
            value={config.layout.radius.medium}
            onChange={(value) => {
              setRadius({ medium: value });
              setCssRadius("medium", value);
            }}
          />
          <NumberInput
            label="Large"
            value={config.layout.radius.large}
            onChange={(value) => {
              setRadius({ large: value });
              setCssRadius("large", value);
            }}
          />
        </ConfigurationSection>

        <ConfigurationSection cols={3} title="Border width (px)">
          <NumberInput
            label="Small"
            value={config.layout.borderWidth.small}
            onChange={(value) => {
              setBorderWidth({ small: value });
              setCssBorderWidth("small", value);
            }}
          />
          <NumberInput
            label="Medium"
            value={config.layout.borderWidth.medium}
            onChange={(value) => {
              setBorderWidth({ medium: value });
              setCssBorderWidth("medium", value);
            }}
          />
          <NumberInput
            label="Large"
            value={config.layout.borderWidth.large}
            onChange={(value) => {
              setBorderWidth({ large: value });
              setCssBorderWidth("large", value);
            }}
          />
        </ConfigurationSection>
      </CardBody>
    </Card>
  );
}
