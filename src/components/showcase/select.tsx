import { Select as NextUI, SelectItem } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import {
  NextUIColor,
  NextUIRadius,
  NextUISize,
  NextUIVariant,
} from "shared/types";

export function Select() {
  return (
    <ShowcaseComponent
      defaultVariant="bordered"
      name="Select"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      {colors.map((color) => (
        <NextUI
          key={color}
          className="max-w-xs"
          color={color}
          defaultSelectedKeys={["cat"]}
          label="Favorite Animal"
          placeholder="Select an animal"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </NextUI>
      ))}
    </ShowcaseComponent>
  );
}

const animals: { label: string; value: string }[] = [
  {
    label: "Cat",
    value: "cat",
  },
  {
    label: "Dog",
    value: "dog",
  },
  {
    label: "Bird",
    value: "bird",
  },
  {
    label: "Fish",
    value: "fish",
  },
  {
    label: "Rabbit",
    value: "rabbit",
  },
];
const colors: NextUIColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["faded", "bordered", "flat", "underlined"];
