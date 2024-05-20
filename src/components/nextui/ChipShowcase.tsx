import { Chip } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUISize, NextUIVariant } from "shared/types";

export default function ChipShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      sizes={sizes}
      variants={variants}
      name="Chip"
    >
      <Chip color="default">Default</Chip>
      <Chip color="primary">Primary</Chip>
      <Chip color="secondary">Secondary</Chip>
      <Chip color="success">Success</Chip>
      <Chip color="warning">Warning</Chip>
      <Chip color="danger">Danger</Chip>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];

const variants: NextUIVariant[] = [
  "solid",
  "bordered",
  "light",
  "flat",
  "faded",
  "shadow",
  "dot",
];
