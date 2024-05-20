import { Select, SelectItem } from "@nextui-org/react";
import { Children, cloneElement, useState } from "react";
import { NextUIRadius, NextUISize, NextUIVariant } from "shared/types";

interface ShowcaseComponentProps {
  children: React.ReactElement[];
  defaultVariant: NextUIVariant;
  name: string;
  radiuses?: NextUIRadius[];
  sizes?: NextUISize[];
  variants?: NextUIVariant[];
}

export default function ShowcaseComponent({
  children,
  defaultVariant,
  name,
  radiuses = [],
  sizes = [],
  variants = [],
}: ShowcaseComponentProps) {
  const [variant, setVariant] = useState<NextUIVariant>(defaultVariant);
  const [size, setSize] = useState<NextUISize>("md");
  const [radius, setRadius] = useState<NextUIRadius>("md");

  return (
    <div className="p-6 border border-default rounded-lg">
      <span className="text-xl font-semibold">{name}</span>
      <div className="flex flex-wrap gap-2 mt-4">
        {variants.length ? (
          <Select
            className="w-32"
            defaultSelectedKeys={[variant]}
            label="Variant"
            labelPlacement="outside"
            selectedKeys={[variant]}
            size="sm"
            onChange={(e) =>
              setVariant((e.target.value as NextUIVariant) || "solid")
            }
          >
            {defaultVariants
              .filter((variant) => variants.includes(variant.value))
              .map((variant) => (
                <SelectItem key={variant.value} value={variant.value}>
                  {variant.label}
                </SelectItem>
              ))}
          </Select>
        ) : null}
        {sizes.length ? (
          <Select
            className="w-32"
            label="Size"
            labelPlacement="outside"
            defaultSelectedKeys={[size]}
            selectedKeys={[size]}
            size="sm"
            onChange={(e) => setSize((e.target.value as NextUISize) || "md")}
          >
            {defaultSizes
              .filter((size) => sizes.includes(size.value))
              .map((size) => (
                <SelectItem key={size.value} value={size.value}>
                  {size.label}
                </SelectItem>
              ))}
          </Select>
        ) : null}
        {radiuses.length ? (
          <Select
            className="w-32"
            label="Radius"
            labelPlacement="outside"
            defaultSelectedKeys={[radius]}
            selectedKeys={[radius]}
            size="sm"
            onChange={(e) => setRadius((e.target.value as NextUISize) || "md")}
          >
            {defaultRadiuses
              .filter((radius) => radiuses.includes(radius.value))
              .map((radius) => (
                <SelectItem key={radius.value} value={radius.value}>
                  {radius.label}
                </SelectItem>
              ))}
          </Select>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {Children.map(children, (child) =>
          cloneElement(child, { radius, size, variant })
        )}
      </div>
    </div>
  );
}

const defaultRadiuses: { label: string; value: NextUIRadius }[] = [
  { label: "None", value: "none" },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
  { label: "Full", value: "full" },
];

const defaultVariants: { label: string; value: NextUIVariant }[] = [
  { label: "Dot", value: "dot" },
  { label: "Solid", value: "solid" },
  { label: "Faded", value: "faded" },
  { label: "Bordered", value: "bordered" },
  { label: "Light", value: "light" },
  { label: "Flat", value: "flat" },
  { label: "Ghost", value: "ghost" },
  { label: "Shadow", value: "shadow" },
  { label: "Underlined", value: "underlined" },
];

const defaultSizes: { label: string; value: NextUISize }[] = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];
