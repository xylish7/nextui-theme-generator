import { Input as NextUIInput } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { NextUIColor, NextUISize, NextUIVariant } from "shared/types";

export function Input() {
  return (
    <ShowcaseComponent
      defaultVariant="faded"
      name="Input"
      sizes={sizes}
      variants={variants}
    >
      {colors.map((color) => (
        <NextUIInput
          key={color}
          className="max-w-[220px]"
          color={color}
          defaultValue="junior@nextui.org"
          label="Email"
          placeholder="Enter your email"
          type="email"
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
