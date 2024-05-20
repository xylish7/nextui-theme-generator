import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import {
  NextUIColor,
  NextUIRadius,
  NextUISize,
  NextUIVariant,
} from "shared/types";

export default function BreadcrumbsShowcase() {
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
      defaultVariant="solid"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
      name="Breadcrumbs"
    >
      {colors.map((color) => (
        <Breadcrumbs
          key={color}
          color={color === "default" ? "foreground" : color}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </Breadcrumbs>
      ))}
    </ShowcaseComponent>
  );
}

const radiuses: NextUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: NextUISize[] = ["sm", "md", "lg"];
const variants: NextUIVariant[] = ["solid", "bordered", "light"];
