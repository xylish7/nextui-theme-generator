import { Select, SelectItem } from "@nextui-org/react";
import { Children, cloneElement, useState } from "react";

interface ShowcaseComponentProps {
  children: React.ReactElement[];
  name: string;
}

export default function ShowcaseComponent({
  children,
  name,
}: ShowcaseComponentProps) {
  const [variant, setVariant] = useState<Variant>("solid");
  const [size, setSize] = useState<Size>("md");

  return (
    <div className="p-6 border border-default rounded-lg">
      <span className="text-xl font-semibold">{name}</span>
      <div className="flex gap-2 mt-4">
        <Select
          className="w-32"
          defaultSelectedKeys={[variant]}
          label="Variant"
          labelPlacement="outside"
          selectedKeys={[variant]}
          size="sm"
          onChange={(e) => setVariant((e.target.value as Variant) || "solid")}
        >
          {variants.map((variant) => (
            <SelectItem key={variant.value} value={variant.value}>
              {variant.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          className="w-32"
          label="Size"
          labelPlacement="outside"
          defaultSelectedKeys={[size]}
          selectedKeys={[size]}
          size="sm"
          onChange={(e) => setSize((e.target.value as Size) || "md")}
        >
          {sizes.map((size) => (
            <SelectItem key={size.value} value={size.value}>
              {size.label}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {Children.map(children, (child) =>
          cloneElement(child, { size, variant })
        )}
      </div>
    </div>
  );
}

const variants: { label: string; value: Variant }[] = [
  { label: "Solid", value: "solid" },
  { label: "Faded", value: "faded" },
  { label: "Bordered", value: "bordered" },
  { label: "Light", value: "light" },
  { label: "Flat", value: "flat" },
  { label: "Ghost", value: "ghost" },
  { label: "Shadow", value: "shadow" },
];

const sizes: { label: string; value: Size }[] = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];

type Size = "sm" | "md" | "lg";

type Variant =
  | "solid"
  | "faded"
  | "bordered"
  | "light"
  | "flat"
  | "ghost"
  | "shadow";
