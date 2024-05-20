import { Input } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIColor, NextUISize, NextUIVariant } from "shared/types";

export default function InputShowcase() {
  return (
    <ShowcaseComponent
      defaultVariant="faded"
      sizes={sizes}
      variants={variants}
      name="Input"
    >
      {colors.map((color) => (
        <Input
          key={color}
          type="email"
          color={color}
          label="Email"
          placeholder="Enter your email"
          defaultValue="junior@nextui.org"
          className="max-w-[220px]"
        />
      ))}
    </ShowcaseComponent>
  );
}

const colors: NextUIColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["flat", "bordered", "underlined", "faded"];
