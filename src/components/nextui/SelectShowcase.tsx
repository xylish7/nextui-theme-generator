import { Select, SelectItem } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import {
  NextUIColor,
  NextUIRadius,
  NextUISize,
  NextUIVariant,
} from "shared/types";

export default function SelectShowcase() {
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
      defaultVariant="bordered"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
      name="Select"
    >
      {colors.map((color) => (
        <Select
          key={color}
          color={color}
          label="Favorite Animal"
          placeholder="Select an animal"
          defaultSelectedKeys={["cat"]}
          className="max-w-xs"
        >
          {animals.map((animal) => (
            <SelectItem key={animal.value} value={animal.value}>
              {animal.label}
            </SelectItem>
          ))}
        </Select>
      ))}
    </ShowcaseComponent>
  );
}

const animals = [
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
const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["faded", "bordered", "flat", "underlined"];
