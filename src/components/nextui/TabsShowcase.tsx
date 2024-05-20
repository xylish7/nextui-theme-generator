import { Tab, Tabs } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import {
  NextUIColor,
  NextUIRadius,
  NextUISize,
  NextUIVariant,
} from "shared/types";

export default function TabsShowcase() {
  const colors: NextUIColor[] = [
    "default",
    "primary",
    "secondary",
    "success",
    "warning",
    "danger",
  ];

  return (
    <ShowcaseComponent
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
      name="Tabs"
    >
      {colors.map((color) => (
        <Tabs key={color} color={color} aria-label="Tabs colors" radius="full">
          <Tab key="photos" title="Photos" />
          <Tab key="music" title="Music" />
          <Tab key="videos" title="Videos" />
        </Tabs>
      ))}
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["solid", "bordered", "light", "underlined"];
