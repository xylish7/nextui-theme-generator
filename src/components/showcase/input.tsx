import { Input as HeroUIInput } from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIColor, HeroUISize, HeroUIVariant } from "shared/types";

export function Input() {
  return (
    <ShowcaseComponent
      defaultVariant="faded"
      name="Input"
      sizes={sizes}
      variants={variants}
    >
      {colors.map((color) => (
        <HeroUIInput
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

const colors: HeroUIColor[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = ["flat", "bordered", "underlined", "faded"];
