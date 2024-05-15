import { Input } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { ColorVariant, Size, Variant } from "shared/types";

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

const colors: ColorVariant[] = [
  "default",
  "primary",
  "secondary",
  "success",
  "warning",
  "danger",
];
const sizes: Size[] = ["sm", "md", "lg"];
const variants: Variant[] = ["flat", "bordered", "underlined", "faded"];
