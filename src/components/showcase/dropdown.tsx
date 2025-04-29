import {
  Dropdown as HeroUIDropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";

import { ShowcaseComponent } from "components/showcase-component";
import { HeroUIColor, HeroUIVariant } from "shared/types";

export function Dropdown() {
  return (
    <ShowcaseComponent
      defaultVariant="solid"
      name="Dropdown"
      variants={variants}
    >
      {colors.map((color) => (
        <DropdownContent key={color} color={color} />
      ))}
    </ShowcaseComponent>
  );
}

interface DropdownContentProps {
  color: HeroUIColor;
  variant?: Extract<
    HeroUIVariant,
    "solid" | "faded" | "bordered" | "light" | "flat" | "shadow"
  >;
}

function DropdownContent({ color, variant }: DropdownContentProps) {
  return (
    <HeroUIDropdown>
      <DropdownTrigger>
        <Button className="capitalize" color={color} variant={variant}>
          {color}
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={color}
        variant={variant}
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </HeroUIDropdown>
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
const variants: HeroUIVariant[] = [
  "solid",
  "faded",
  "bordered",
  "light",
  "flat",
  "shadow",
];
