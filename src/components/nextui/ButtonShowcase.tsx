import { Button } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIRadius, NextUISize, NextUIVariant } from "shared/types";

export default function ButtonShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
      name="Button"
    >
      <Button color="default">Default</Button>
      <Button color="primary">Primary</Button>
      <Button color="secondary">Secondary</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
      <Button color="danger">Danger</Button>
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
