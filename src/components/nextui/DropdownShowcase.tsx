import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import ShowcaseComponent from "components/ShowcaseComponent";
import { NextUIColor, NextUIVariant } from "shared/types";

export default function DropdownShowcase() {
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
      variants={variants}
      name="Dropdown"
    >
      {colors.map((color) => (
        <DropdownContent key={color} color={color} />
      ))}
    </ShowcaseComponent>
  );
}

const variants: NextUIVariant[] = [
  "solid",
  "faded",
  "bordered",
  "light",
  "flat",
  "shadow",
];

interface DropdownContentProps {
  color: NextUIColor;
  variant?: Extract<
    NextUIVariant,
    "solid" | "faded" | "bordered" | "light" | "flat" | "shadow"
  >;
}

const DropdownContent = ({ color, variant }: DropdownContentProps) => (
  <Dropdown>
    <DropdownTrigger>
      <Button color={color} variant={variant} className="capitalize">
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
  </Dropdown>
);
