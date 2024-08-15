import { useContext } from "react";

import { ConfigSection } from "components/config-section";
import { NumberInput } from "components/number-input";
import { ThemeBuilderContext } from "providers/theme-builder";
import { Config } from "shared/types";
import { setCssLineHeight } from "utils/css-vars";

interface LineHeightsProps {
  config: Config;
}

export function LineHeights({ config }: LineHeightsProps) {
  const { setLineHeight } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection title="Line height (rem)">
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
    </ConfigSection>
  );
}
