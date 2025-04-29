import { Children, cloneElement, useState } from "react";
import { Select, SelectItem } from "@heroui/react";

import {
  HeroUIColor,
  HeroUIRadius,
  HeroUISize,
  HeroUIVariant,
} from "../shared/types";

interface ShowcaseComponentProps {
  children: React.ReactElement | React.ReactElement[];
  colors?: HeroUIColor[];
  defaultVariant?: HeroUIVariant;
  id?: string;
  name: string;
  radiuses?: HeroUIRadius[];
  sizes?: HeroUISize[];
  variants?: HeroUIVariant[];
}

export function ShowcaseComponent({
  children,
  colors = [],
  defaultVariant,
  id,
  name,
  radiuses = [],
  sizes = [],
  variants = [],
}: ShowcaseComponentProps) {
  const [color, setColor] = useState<HeroUIColor>("default");
  const [variant, setVariant] = useState<HeroUIVariant | undefined>(
    defaultVariant
  );
  const [size, setSize] = useState<HeroUISize>("md");
  const [radius, setRadius] = useState<HeroUIRadius>("md");

  return (
    <div
      className="bg-background text-foreground p-6 border border-default rounded-lg"
      id={id}
    >
      <span className="text-xl font-semibold">{name}</span>
      <div className="flex flex-wrap gap-2 mt-4">
        {colors.length ? (
          <Select
            className="w-32"
            defaultSelectedKeys={[color]}
            label="Color"
            labelPlacement="outside"
            selectedKeys={[color]}
            size="sm"
            onChange={(e) =>
              setColor((e.target.value as HeroUIColor) || "default")
            }
          >
            {defaultColors
              .filter((color) => colors.includes(color.value))
              .map((color) => (
                <SelectItem key={color.value}>{color.label}</SelectItem>
              ))}
          </Select>
        ) : null}
        {variants.length ? (
          <Select
            className="w-32"
            defaultSelectedKeys={variant ? [variant] : variant}
            label="Variant"
            labelPlacement="outside"
            selectedKeys={variant ? [variant] : variant}
            size="sm"
            onChange={(e) =>
              setVariant((e.target.value as HeroUIVariant) || "solid")
            }
          >
            {defaultVariants
              .filter((variant) => variants.includes(variant.value))
              .map((variant) => (
                <SelectItem key={variant.value}>{variant.label}</SelectItem>
              ))}
          </Select>
        ) : null}
        {sizes.length ? (
          <Select
            className="w-32"
            defaultSelectedKeys={[size]}
            label="Size"
            labelPlacement="outside"
            selectedKeys={[size]}
            size="sm"
            onChange={(e) => setSize((e.target.value as HeroUISize) || "md")}
          >
            {defaultSizes
              .filter((size) => sizes.includes(size.value))
              .map((size) => (
                <SelectItem key={size.value}>{size.label}</SelectItem>
              ))}
          </Select>
        ) : null}
        {radiuses.length ? (
          <Select
            className="w-32"
            defaultSelectedKeys={[radius]}
            label="Radius"
            labelPlacement="outside"
            selectedKeys={[radius]}
            size="sm"
            onChange={(e) => setRadius((e.target.value as HeroUISize) || "md")}
          >
            {defaultRadiuses
              .filter((radius) => radiuses.includes(radius.value))
              .map((radius) => (
                <SelectItem key={radius.value}>{radius.label}</SelectItem>
              ))}
          </Select>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-4 mt-8">
        {Children.map(children, (child) =>
          cloneElement(child, {
            ...(colors.length ? { color } : {}),
            radius,
            size,
            variant,
          })
        )}
      </div>
    </div>
  );
}

const defaultRadiuses: { label: string; value: HeroUIRadius }[] = [
  { label: "None", value: "none" },
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
  { label: "Full", value: "full" },
];

const defaultVariants: { label: string; value: HeroUIVariant }[] = [
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

const defaultSizes: { label: string; value: HeroUISize }[] = [
  { label: "Small", value: "sm" },
  { label: "Medium", value: "md" },
  { label: "Large", value: "lg" },
];

const defaultColors: { label: string; value: HeroUIColor }[] = [
  { label: "Default", value: "default" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Success", value: "success" },
  { label: "Warning", value: "warning" },
  { label: "Danger", value: "danger" },
];
