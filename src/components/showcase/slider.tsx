import { Slider as HeroUISlider } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIColor, HeroUIRadius, HeroUISize } from "shared/types";

export function Slider() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Slider"
      radiuses={radiuses}
      sizes={sizes}
    >
      {colors.map((color) => (
        <HeroUISlider
          key={color}
          aria-label="Temperature"
          className="max-w-md"
          color={color === "default" ? "foreground" : color}
          defaultValue={0.7}
          maxValue={1}
          minValue={0}
          step={0.01}
        />
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
