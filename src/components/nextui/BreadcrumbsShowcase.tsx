import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

import ShowcaseComponent from "components/ShowcaseComponent";
import { ColorVariant, Radius, Size, Variant } from "shared/types";

export default function BreadcrumbsShowCase() {
  const colors: ColorVariant[] = [
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

const radiuses: Radius[] = ["none", "sm", "md", "lg", "full"];
const sizes: Size[] = ["sm", "md", "lg"];
const variants: Variant[] = ["solid", "bordered", "light"];
