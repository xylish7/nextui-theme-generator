import { useContext } from "react";

import { ColorPicker } from "components/color-picker";
import { ConfigSection } from "components/config-section";
import { ThemeBuilderContext } from "providers/theme-builder";
import { otherColorsId } from "shared/constants";
import { Config, ThemeType } from "shared/types";
import { setCssOtherColor } from "utils/css-vars";

interface OtherColorsProps {
  config: Config;
  syncIcon: React.ReactNode;
  syncThemes: boolean;
  theme: ThemeType;
}

export function OtherColors({
  config,
  syncIcon,
  syncThemes,
  theme,
}: OtherColorsProps) {
  const { setOtherColor } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection id={otherColorsId} title="Other colors">
      <ColorPicker
        hexColor={config[theme].otherColor.focus}
        icon={syncIcon}
        label="Focus"
        type="focus"
        onChange={(hexColor) => setCssOtherColor("focus", hexColor)}
        onClose={(hexColor) =>
          setOtherColor({ focus: hexColor }, theme, syncThemes)
        }
      />
      <ColorPicker
        hexColor={config[theme].otherColor.overlay}
        label="Overlay"
        type="overlay"
        onChange={(hexColor) => setCssOtherColor("overlay", hexColor)}
        onClose={(hexColor) =>
          setOtherColor({ overlay: hexColor }, theme, false)
        }
      />
      <ColorPicker
        hexColor={config[theme].otherColor.divider}
        label="Divider"
        type="divider"
        onChange={(hexColor) => setCssOtherColor("divider", hexColor)}
        onClose={(hexColor) =>
          setOtherColor({ divider: hexColor }, theme, false)
        }
      />
    </ConfigSection>
  );
}
