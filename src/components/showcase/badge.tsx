import { Avatar as HeroUIAvatar, Badge as HeroUIBadge } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUISize, HeroUIVariant } from "shared/types";

export function Badge() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Badge"
      sizes={sizes}
      variants={variants}
    >
      <HeroUIBadge color="default" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
      <HeroUIBadge color="primary" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
      <HeroUIBadge color="secondary" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
      <HeroUIBadge color="success" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
      <HeroUIBadge color="warning" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
      <HeroUIBadge color="danger" content="3">
        <HeroUIAvatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </HeroUIBadge>
    </ShowcaseComponent>
  );
}

const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = ["solid", "faded", "flat", "shadow"];
