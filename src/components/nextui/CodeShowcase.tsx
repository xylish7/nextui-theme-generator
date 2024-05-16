import { Code } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { Radius, Size } from "shared/types";

export default function CodeShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      name="Code"
    >
      <Code color="default">npm install @nextui-org/react</Code>
      <Code color="primary">npm install @nextui-org/react</Code>
      <Code color="secondary">npm install @nextui-org/react</Code>
      <Code color="success">npm install @nextui-org/react</Code>
      <Code color="warning">npm install @nextui-org/react</Code>
      <Code color="danger">npm install @nextui-org/react</Code>
    </ShowcaseComponent>
  );
}

const radiuses: Radius[] = ["none", "sm", "md", "lg", "full"];
const sizes: Size[] = ["sm", "md", "lg"];
