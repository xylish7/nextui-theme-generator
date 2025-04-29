import { Avatar as HeroUIAvatar } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIRadius, HeroUISize } from "shared/types";

export function Avatar() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Avatar"
      radiuses={radiuses}
      sizes={sizes}
    >
      <HeroUIAvatar
        isBordered
        color="default"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Default
      </HeroUIAvatar>
      <HeroUIAvatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Primary
      </HeroUIAvatar>
      <HeroUIAvatar
        isBordered
        color="secondary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Secondary
      </HeroUIAvatar>
      <HeroUIAvatar
        isBordered
        color="success"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Success
      </HeroUIAvatar>
      <HeroUIAvatar
        isBordered
        color="warning"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Warning
      </HeroUIAvatar>
      <HeroUIAvatar
        isBordered
        color="danger"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Danger
      </HeroUIAvatar>
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
