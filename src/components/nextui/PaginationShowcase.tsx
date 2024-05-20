import { Pagination } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIRadius, NextUISize, NextUIVariant } from "shared/types";

export default function PaginationShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="light"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
      name="Pagination"
    >
      <Pagination page={1} total={10} color="default">
        Default
      </Pagination>
      <Pagination page={1} total={10} color="primary">
        Primary
      </Pagination>
      <Pagination page={1} total={10} color="secondary">
        Secondary
      </Pagination>
      <Pagination page={1} total={10} color="success">
        Success
      </Pagination>
      <Pagination page={1} total={10} color="warning">
        Warning
      </Pagination>
      <Pagination page={1} total={10} color="danger">
        Danger
      </Pagination>
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["faded", "bordered", "light", "flat"];
