import { Select, SelectItem } from "@nextui-org/react";
import { Children, cloneElement, useState } from "react";
import { Size, Variant } from "shared/types";

interface ShowcaseComponentProps {
  children: React.ReactElement[];
  defaultVariant: Variant;
  name: string;
  sizes?: Size[];
  variants?: Variant[];
}

export default function ShowcaseComponent({
  children,
  defaultVariant,
  name,
  sizes = [],
  variants = [],
}: ShowcaseComponentProps) {
  const [variant, setVariant] = useState<Variant>(defaultVariant);
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
          {defaultVariants
            .filter((variant) => variants.includes(variant.value))
            .map((variant) => (
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
          {defaultSizes
            .filter((size) => sizes.includes(size.value))
            .map((size) => (
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

const defaultVariants: { label: string; value: Variant }[] = [
  { label: "Dot", value: "dot" },
  { label: "Solid", value: "solid" },
  { label: "Faded", value: "faded" },
  { label: "Bordered", value: "bordered" },
  { label: "Light", value: "light" },
  { label: "Flat", value: "flat" },
  { label: "Ghost", value: "ghost" },
  { label: "Shadow", value: "shadow" },
];

const defaultSizes: { label: string; value: Size }[] = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];
