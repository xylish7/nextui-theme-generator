import { Select as HeroUISelect, SelectItem } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import {
  HeroUIColor,
  HeroUIRadius,
  HeroUISize,
  HeroUIVariant,
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
        <HeroUISelect
          key={color}
          className="max-w-xs"
          color={color}
          defaultSelectedKeys={["cat"]}
          label="Favorite Animal"
          placeholder="Select an animal"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value}>{animal.label}</SelectItem>
          ))}
        </HeroUISelect>
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
const variants: HeroUIVariant[] = ["faded", "bordered", "flat", "underlined"];
