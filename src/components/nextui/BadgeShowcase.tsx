import { Avatar, Badge } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { Size, Variant } from "shared/types";

export default function BadgeShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      sizes={sizes}
      variants={variants}
      name="Badge"
    >
      <Badge content="3" color="default">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge content="3" color="primary">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge content="3" color="secondary">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge content="3" color="success">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge content="3" color="warning">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
      <Badge content="3" color="danger">
        <Avatar src="https://i.pravatar.cc/300?u=a042581f4e29026709d" />
      </Badge>
    </ShowcaseComponent>
  );
}

const sizes: Size[] = ["sm", "md", "lg"];
const variants: Variant[] = ["solid", "faded", "flat", "shadow"];
