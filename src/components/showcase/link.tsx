import { Link as NextUILink } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { NextUISize } from "shared/types";

export function Link() {
  return (
    <ShowcaseComponent defaultVariant="solid" name="Link" sizes={sizes}>
      <NextUILink color="foreground" href="#">
        Default
      </NextUILink>
      <NextUILink color="primary" href="#">
        Primary
      </NextUILink>
      <NextUILink color="secondary" href="#">
        Secondary
      </NextUILink>
      <NextUILink color="success" href="#">
        Success
      </NextUILink>
      <NextUILink color="warning" href="#">
        Warning
      </NextUILink>
      <NextUILink color="danger" href="#">
        Danger
      </NextUILink>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
