import { CircularProgress as HeroUICircularProgress } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUISize } from "shared/types";

export function CircularProgress() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="CircularProgress"
      sizes={sizes}
    >
      <HeroUICircularProgress aria-label="default" color="default">
        Default
      </HeroUICircularProgress>
      <HeroUICircularProgress aria-label="primary" color="primary">
        Primary
      </HeroUICircularProgress>
      <HeroUICircularProgress aria-label="secondary" color="secondary">
        Secondary
      </HeroUICircularProgress>
      <HeroUICircularProgress aria-label="success" color="success">
        Success
      </HeroUICircularProgress>
      <HeroUICircularProgress aria-label="warning" color="warning">
        Warning
      </HeroUICircularProgress>
      <HeroUICircularProgress aria-label="danger" color="danger">
        Danger
      </HeroUICircularProgress>
    </ShowcaseComponent>
  );
}

const sizes: HeroUISize[] = ["sm", "md", "lg"];
