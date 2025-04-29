import { Checkbox as HeroUICheckbox } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIRadius, HeroUISize } from "shared/types";

export function Checkbox() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Checkbox"
      radiuses={radiuses}
      sizes={sizes}
    >
      <HeroUICheckbox defaultSelected color="default">
        Default
      </HeroUICheckbox>
      <HeroUICheckbox defaultSelected color="primary">
        Primary
      </HeroUICheckbox>
      <HeroUICheckbox defaultSelected color="secondary">
        Secondary
      </HeroUICheckbox>
      <HeroUICheckbox defaultSelected color="success">
        Success
      </HeroUICheckbox>
      <HeroUICheckbox defaultSelected color="warning">
        Warning
      </HeroUICheckbox>
      <HeroUICheckbox defaultSelected color="danger">
        Danger
      </HeroUICheckbox>
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
