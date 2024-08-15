import { ConfigSection } from "components/config-section";
import { NumberInput } from "components/number-input";
import { ThemeBuilderContext } from "providers/theme-builder";
import { useContext } from "react";

import { Config } from "shared/types";
import { setCssFontSize } from "utils/css-vars";

interface FontSizesProps {
  config: Config;
}

export function FontSizes({ config }: FontSizesProps) {
  const { setFontSize } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection title="Font size (rem)">
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
    </ConfigSection>
  );
}
