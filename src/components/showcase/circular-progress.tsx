import { CircularProgress as NextUICircularProgress } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { NextUISize } from "shared/types";

export function CircularProgress() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="CircularProgress"
      sizes={sizes}
    >
      <NextUICircularProgress aria-label="default" color="default">
        Default
      </NextUICircularProgress>
      <NextUICircularProgress aria-label="primary" color="primary">
        Primary
      </NextUICircularProgress>
      <NextUICircularProgress aria-label="secondary" color="secondary">
        Secondary
      </NextUICircularProgress>
      <NextUICircularProgress aria-label="success" color="success">
        Success
      </NextUICircularProgress>
      <NextUICircularProgress aria-label="warning" color="warning">
        Warning
      </NextUICircularProgress>
      <NextUICircularProgress aria-label="danger" color="danger">
        Danger
      </NextUICircularProgress>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
