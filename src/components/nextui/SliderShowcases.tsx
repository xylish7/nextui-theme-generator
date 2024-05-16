import { Slider } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { ColorVariant, Radius, Size } from "shared/types";

export default function SliderShowcase() {
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
      name="Slider"
    >
      {colors.map((color) => (
        <Slider
          key={color}
          color={color === "default" ? "foreground" : color}
          step={0.01}
          maxValue={1}
          minValue={0}
          defaultValue={0.7}
          aria-label="Temperature"
          className="max-w-md"
        />
      ))}
    </ShowcaseComponent>
  );
}

const radiuses: Radius[] = ["none", "sm", "md", "lg", "full"];
const sizes: Size[] = ["sm", "md", "lg"];
