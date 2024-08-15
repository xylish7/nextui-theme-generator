import { useContext } from "react";

import { ConfigSection } from "components/config-section";
import { NumberInput } from "components/number-input";
import { ThemeBuilderContext } from "providers/theme-builder";
import { Config } from "shared/types";
import { setCssBorderWidth } from "utils/css-vars";

interface BorderWidthsProps {
  config: Config;
}

export function BorderWidths({ config }: BorderWidthsProps) {
  const { setBorderWidth } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection cols={3} title="Border width (px)">
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
    </ConfigSection>
  );
}
