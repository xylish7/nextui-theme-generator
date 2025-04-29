import { Tab, Tabs as HeroUITabs } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import {
  HeroUIColor,
  HeroUIRadius,
  HeroUISize,
  HeroUIVariant,
} from "shared/types";

export function Tabs() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Tabs"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      {colors.map((color) => (
        <HeroUITabs
          key={color}
          aria-label="Tabs colors"
          color={color}
          radius="full"
        >
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </HeroUITabs>
      ))}
    </ShowcaseComponent>
  );
}

const colors: HeroUIColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = ["solid", "bordered", "light", "underlined"];
