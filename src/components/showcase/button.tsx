import { Button as NextUIButton } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { NextUIRadius, NextUISize, NextUIVariant } from "shared/types";

export function Button() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Button"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      <NextUIButton color="default">Default</NextUIButton>
      <NextUIButton color="primary">Primary</NextUIButton>
      <NextUIButton color="secondary">Secondary</NextUIButton>
      <NextUIButton color="success">Success</NextUIButton>
      <NextUIButton color="warning">Warning</NextUIButton>
      <NextUIButton color="danger">Danger</NextUIButton>
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = [
  "solid",
  "faded",
  "bordered",
  "light",
  "flat",
  "ghost",
  "shadow",
];
