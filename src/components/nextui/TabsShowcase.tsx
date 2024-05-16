import { Tab, Tabs } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { ColorVariant, Radius, Size, Variant } from "shared/types";

export default function TabsShowcase() {
  const colors: ColorVariant[] = [
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

const radiuses: Radius[] = ["none", "sm", "md", "lg", "full"];
const sizes: Size[] = ["sm", "md", "lg"];
const variants: Variant[] = ["solid", "bordered", "light", "underlined"];
