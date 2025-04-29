import { Button as HeroUIButton } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIRadius, HeroUISize, HeroUIVariant } from "shared/types";

export function Button() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Button"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      <HeroUIButton color="default">Default</HeroUIButton>
      <HeroUIButton color="primary">Primary</HeroUIButton>
      <HeroUIButton color="secondary">Secondary</HeroUIButton>
      <HeroUIButton color="success">Success</HeroUIButton>
      <HeroUIButton color="warning">Warning</HeroUIButton>
      <HeroUIButton color="danger">Danger</HeroUIButton>
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = [
  "solid",
  "faded",
  "bordered",
  "light",
  "flat",
  "ghost",
  "shadow",
];
