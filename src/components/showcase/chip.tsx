import { Chip as HeroUIChip } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUISize, HeroUIVariant } from "shared/types";

export function Chip() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Chip"
      sizes={sizes}
      variants={variants}
    >
      <HeroUIChip color="default">Default</HeroUIChip>
      <HeroUIChip color="primary">Primary</HeroUIChip>
      <HeroUIChip color="secondary">Secondary</HeroUIChip>
      <HeroUIChip color="success">Success</HeroUIChip>
      <HeroUIChip color="warning">Warning</HeroUIChip>
      <HeroUIChip color="danger">Danger</HeroUIChip>
    </ShowcaseComponent>
  );
}

const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = [
  "solid",
  "bordered",
  "light",
  "flat",
  "faded",
  "shadow",
  "dot",
];
