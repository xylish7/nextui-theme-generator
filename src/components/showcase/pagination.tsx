import { Pagination as HeroUIPagination } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIRadius, HeroUISize, HeroUIVariant } from "shared/types";

export function Pagination() {
  return (
    <ShowcaseComponent
      defaultVariant="light"
      name="Pagination"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      <HeroUIPagination color="default" page={1} total={10}>
        Default
      </HeroUIPagination>
      <HeroUIPagination color="primary" page={1} total={10}>
        Primary
      </HeroUIPagination>
      <HeroUIPagination color="secondary" page={1} total={10}>
        Secondary
      </HeroUIPagination>
      <HeroUIPagination color="success" page={1} total={10}>
        Success
      </HeroUIPagination>
      <HeroUIPagination color="warning" page={1} total={10}>
        Warning
      </HeroUIPagination>
      <HeroUIPagination color="danger" page={1} total={10}>
        Danger
      </HeroUIPagination>
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = ["faded", "bordered", "light", "flat"];
