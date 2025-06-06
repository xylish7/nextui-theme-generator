import { useContext } from "react";

import { ColorPicker } from "components/color-picker";
import { ConfigSection } from "components/config-section";
import { ThemeBuilderContext } from "providers/theme-builder";
import { baseColorsId } from "shared/constants";
import { Config, ThemeType } from "shared/types";
import {
  setCssBackground,
  setCssColor,
  setCssContentColor,
} from "utils/css-vars";

interface BaseColorsProps {
  config: Config;
  theme: ThemeType;
}

export function BaseColors({ config, theme }: BaseColorsProps) {
  const { setBaseColor } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection id={baseColorsId} title="Base colors">
      <ColorPicker
        hexColor={config[theme].baseColor.background}
        label="Background"
        type="background"
        onChange={(hexColor) => setCssBackground(hexColor)}
        onClose={(hexColor) => setBaseColor({ background: hexColor }, theme)}
      />
      <ColorPicker
        hexColor={config[theme].baseColor.foreground}
        label="Foreground"
        type="foreground"
        onChange={(hexColor) => setCssColor("foreground", hexColor, theme)}
        onClose={(hexColor) => setBaseColor({ foreground: hexColor }, theme)}
      />
      <ColorPicker
        hexColor={config[theme].baseColor.content1}
        label="Content 1"
        type="content1"
        onChange={(hexColor) => setCssContentColor(1, hexColor)}
        onClose={(hexColor) => setBaseColor({ content1: hexColor }, theme)}
      />
      <ColorPicker
        hexColor={config[theme].baseColor.content2}
        label="Content 2"
        type="content2"
        onChange={(hexColor) => setCssContentColor(2, hexColor)}
        onClose={(hexColor) => setBaseColor({ content2: hexColor }, theme)}
      />
      <ColorPicker
        hexColor={config[theme].baseColor.content3}
        label="Content 3"
        type="content3"
        onChange={(hexColor) => setCssContentColor(3, hexColor)}
        onClose={(hexColor) => setBaseColor({ content3: hexColor }, theme)}
      />
      <ColorPicker
        hexColor={config[theme].baseColor.content4}
        label="Content 4"
        type="content4"
        onChange={(hexColor) => setCssContentColor(4, hexColor)}
        onClose={(hexColor) => setBaseColor({ content4: hexColor }, theme)}
      />
    </ConfigSection>
  );
}
