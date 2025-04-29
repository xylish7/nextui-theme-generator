import { Switch as HeroUISwitch } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUISize } from "shared/types";

export function Switch() {
  return (
    <ShowcaseComponent defaultVariant="solid" name="Switch" sizes={sizes}>
      <HeroUISwitch defaultSelected color="default">
        Default
      </HeroUISwitch>
      <HeroUISwitch defaultSelected color="primary">
        Primary
      </HeroUISwitch>
      <HeroUISwitch defaultSelected color="secondary">
        Secondary
      </HeroUISwitch>
      <HeroUISwitch defaultSelected color="success">
        Success
      </HeroUISwitch>
      <HeroUISwitch defaultSelected color="warning">
        Warning
      </HeroUISwitch>
      <HeroUISwitch defaultSelected color="danger">
        Danger
      </HeroUISwitch>
    </ShowcaseComponent>
  );
}

const sizes: HeroUISize[] = ["sm", "md", "lg"];
