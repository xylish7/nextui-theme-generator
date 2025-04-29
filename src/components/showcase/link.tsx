import { Link as HeroUILink } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUISize } from "shared/types";

export function Link() {
  return (
    <ShowcaseComponent defaultVariant="solid" name="Link" sizes={sizes}>
      <HeroUILink color="foreground" href="#">
        Default
      </HeroUILink>
      <HeroUILink color="primary" href="#">
        Primary
      </HeroUILink>
      <HeroUILink color="secondary" href="#">
        Secondary
      </HeroUILink>
      <HeroUILink color="success" href="#">
        Success
      </HeroUILink>
      <HeroUILink color="warning" href="#">
        Warning
      </HeroUILink>
      <HeroUILink color="danger" href="#">
        Danger
      </HeroUILink>
    </ShowcaseComponent>
  );
}

const sizes: HeroUISize[] = ["sm", "md", "lg"];
