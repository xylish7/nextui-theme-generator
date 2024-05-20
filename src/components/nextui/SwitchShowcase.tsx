import { Switch } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUISize } from "shared/types";

export default function SwitchShowcase() {
  return (
    <ShowcaseComponent defaultVariant="solid" sizes={sizes} name="Switch">
      <Switch defaultSelected color="default">
        Default
      </Switch>
      <Switch defaultSelected color="primary">
        Primary
      </Switch>
      <Switch defaultSelected color="secondary">
        Secondary
      </Switch>
      <Switch defaultSelected color="success">
        Success
      </Switch>
      <Switch defaultSelected color="warning">
        Warning
      </Switch>
      <Switch defaultSelected color="danger">
        Danger
      </Switch>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
