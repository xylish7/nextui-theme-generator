import { Button } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { Size, Variant } from "shared/types";

export default function ButtonShowCase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
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

const sizes: Size[] = ["sm", "md", "lg"];

const variants: Variant[] = [
  "solid",
  "faded",
  "bordered",
  "light",
  "flat",
  "ghost",
  "shadow",
];
