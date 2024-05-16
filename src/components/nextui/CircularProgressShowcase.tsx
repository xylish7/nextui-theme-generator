import { CircularProgress } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { Size } from "shared/types";

export default function CircularProgressShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      sizes={sizes}
      name="CircularProgress"
    >
      <CircularProgress color="default">Default</CircularProgress>
      <CircularProgress color="primary">Primary</CircularProgress>
      <CircularProgress color="secondary">Secondary</CircularProgress>
      <CircularProgress color="success">Success</CircularProgress>
      <CircularProgress color="warning">Warning</CircularProgress>
      <CircularProgress color="danger">Danger</CircularProgress>
    </ShowcaseComponent>
  );
}

const sizes: Size[] = ["sm", "md", "lg"];
