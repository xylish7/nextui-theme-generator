import { Link } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUISize } from "shared/types";

export default function LinkShowcase() {
  return (
    <ShowcaseComponent defaultVariant="solid" sizes={sizes} name="Link">
      <Link href="#" color="foreground">
        Default
      </Link>
      <Link href="#" color="primary">
        Primary
      </Link>
      <Link href="#" color="secondary">
        Secondary
      </Link>
      <Link href="#" color="success">
        Success
      </Link>
      <Link href="#" color="warning">
        Warning
      </Link>
      <Link href="#" color="danger">
        Danger
      </Link>
    </ShowcaseComponent>
  );
}

const sizes: NextUISize[] = ["sm", "md", "lg"];
