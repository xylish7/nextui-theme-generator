import { Checkbox } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIRadius, NextUISize } from "shared/types";

export default function CheckboxShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      name="Checkbox"
    >
      <Checkbox defaultSelected color="default">
        Default
      </Checkbox>
      <Checkbox defaultSelected color="primary">
        Primary
      </Checkbox>
      <Checkbox defaultSelected color="secondary">
        Secondary
      </Checkbox>
      <Checkbox defaultSelected color="success">
        Success
      </Checkbox>
      <Checkbox defaultSelected color="warning">
        Warning
      </Checkbox>
      <Checkbox defaultSelected color="danger">
        Danger
      </Checkbox>
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
