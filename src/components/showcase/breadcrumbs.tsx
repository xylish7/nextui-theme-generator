import {
  BreadcrumbItem,
  Breadcrumbs as HeroUIBreadcrumbs,
} from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import {
  HeroUIColor,
  HeroUIRadius,
  HeroUISize,
  HeroUIVariant,
} from "shared/types";

export function Breadcrumbs() {
  const colors: HeroUIColor[] = [
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
      name="Breadcrumbs"
      radiuses={radiuses}
      sizes={sizes}
      variants={variants}
    >
      {colors.map((color) => (
        <HeroUIBreadcrumbs
          key={color}
          color={color === "default" ? "foreground" : color}
        >
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Music</BreadcrumbItem>
          <BreadcrumbItem>Artist</BreadcrumbItem>
          <BreadcrumbItem>Album</BreadcrumbItem>
          <BreadcrumbItem>Song</BreadcrumbItem>
        </HeroUIBreadcrumbs>
      ))}
    </ShowcaseComponent>
  );
}

const radiuses: HeroUIRadius[] = ["none", "sm", "md", "lg", "full"];
const sizes: HeroUISize[] = ["sm", "md", "lg"];
const variants: HeroUIVariant[] = ["solid", "bordered", "light"];
