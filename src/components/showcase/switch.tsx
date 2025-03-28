import { Switch as NextUISwitch } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { NextUISize } from "shared/types";

export function Switch() {
  return (
    <ShowcaseComponent defaultVariant="solid" name="Switch" sizes={sizes}>
      <NextUISwitch defaultSelected color="default">
        Default
      </NextUISwitch>
      <NextUISwitch defaultSelected color="primary">
        Primary
      </NextUISwitch>
      <NextUISwitch defaultSelected color="secondary">
        Secondary
      </NextUISwitch>
      <NextUISwitch defaultSelected color="success">
        Success
      </NextUISwitch>
      <NextUISwitch defaultSelected color="warning">
        Warning
      </NextUISwitch>
      <NextUISwitch defaultSelected color="danger">
        Danger
      </NextUISwitch>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
