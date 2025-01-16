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
      <NextUICircularProgress color="default">Default</NextUICircularProgress>
      <NextUICircularProgress color="primary">Primary</NextUICircularProgress>
      <NextUICircularProgress color="secondary">
        Secondary
      </NextUICircularProgress>
      <NextUICircularProgress color="success">Success</NextUICircularProgress>
      <NextUICircularProgress color="warning">Warning</NextUICircularProgress>
      <NextUICircularProgress color="danger">Danger</NextUICircularProgress>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
