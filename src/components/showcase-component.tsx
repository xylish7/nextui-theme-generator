import { Children, cloneElement, useState } from "react";
import { Select, SelectItem } from "@heroui/react";

import {
  NextUIColor,
  NextUIRadius,
  NextUISize,
  NextUIVariant,
} from "../shared/types";

interface ShowcaseComponentProps {
  children: React.ReactElement | React.ReactElement[];
  colors?: NextUIColor[];
  defaultVariant?: NextUIVariant;
  id?: string;
  name: string;
  radiuses?: NextUIRadius[];
  sizes?: NextUISize[];
  variants?: NextUIVariant[];
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
  const [color, setColor] = useState<NextUIColor>("default");
  const [variant, setVariant] = useState<NextUIVariant | undefined>(
    defaultVariant
  );
  const [size, setSize] = useState<NextUISize>("md");
  const [radius, setRadius] = useState<NextUIRadius>("md");

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
              setColor((e.target.value as NextUIColor) || "default")
            }
          >
            {defaultColors
              .filter((color) => colors.includes(color.value))
              .map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.label}
                </SelectItem>
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
            defaultSelectedKeys={[size]}
            label="Size"
            labelPlacement="outside"
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
            defaultSelectedKeys={[radius]}
            label="Radius"
            labelPlacement="outside"
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

const defaultColors: { label: string; value: NextUIColor }[] = [
  { label: "Default", value: "default" },
  { label: "Primary", value: "primary" },
  { label: "Secondary", value: "secondary" },
  { label: "Success", value: "success" },
  { label: "Warning", value: "warning" },
  { label: "Danger", value: "danger" },
];
