import { Code as HeroUICode } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIRadius, HeroUISize } from "shared/types";

export function Code() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Code"
      radiuses={radiuses}
      sizes={sizes}
    >
      <HeroUICode color="default">npm install @heroui/react</HeroUICode>
      <HeroUICode color="primary">npm install @heroui/react</HeroUICode>
      <HeroUICode color="secondary">npm install @heroui/react</HeroUICode>
      <HeroUICode color="success">npm install @heroui/react</HeroUICode>
      <HeroUICode color="warning">npm install @heroui/react</HeroUICode>
      <HeroUICode color="danger">npm install @heroui/react</HeroUICode>
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
