import { Avatar } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIRadius, NextUISize } from "shared/types";

export default function AvatarShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      name="Avatar"
    >
      <Avatar
        isBordered
        color="default"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Default
      </Avatar>
      <Avatar
        isBordered
        color="primary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Primary
      </Avatar>
      <Avatar
        isBordered
        color="secondary"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Secondary
      </Avatar>
      <Avatar
        isBordered
        color="success"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Success
      </Avatar>
      <Avatar
        isBordered
        color="warning"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Warning
      </Avatar>
      <Avatar
        isBordered
        color="danger"
        src="https://i.pravatar.cc/150?u=a04258114e29026708c"
      >
        Danger
      </Avatar>
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
