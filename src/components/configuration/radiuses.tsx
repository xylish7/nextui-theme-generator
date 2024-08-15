import { ConfigSection } from "components/config-section";
import { NumberInput } from "components/number-input";
import { ThemeBuilderContext } from "providers/theme-builder";
import { useContext } from "react";

import { Config } from "shared/types";
import { setCssRadius } from "utils/css-vars";

interface RadiusesProps {
  config: Config;
}

export function Radiuses({ config }: RadiusesProps) {
  const { setRadius } = useContext(ThemeBuilderContext);

  return (
    <ConfigSection cols={3} title="Radius (rem)">
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
    </ConfigSection>
  );
}
