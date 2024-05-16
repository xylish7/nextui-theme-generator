import { Switch } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { Size } from "shared/types";

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

const sizes: Size[] = ["sm", "md", "lg"];
