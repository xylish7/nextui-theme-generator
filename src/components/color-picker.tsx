import {
  Button,
  ButtonProps,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Drop } from "@phosphor-icons/react";
import { useState } from "react";
import { colors } from "shared/colors";
import { ColorName } from "shared/types";

interface ColorPickerProps {
  color: ButtonProps["color"];
  label: string;
  onSelect: (color: ColorName) => void;
}

export default function ColorPicker({
  color,
  label,
  onSelect,
}: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);

  function handleSelect(color: ColorName) {
    onSelect(color);
    setIsOpen(false);
  }

  return (
    <div>
      <Popover isOpen={isOpen} placement="bottom" onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Button color={color} size="lg" variant="solid">
            <Drop size={24} weight="duotone" />
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-wrap gap-2 max-w-40">
            {Object.entries(colors).map(([colorName, colorShades]) => (
              <Button
                aria-label={colorName}
                isIconOnly
                key={colorName}
                size="sm"
                style={{ backgroundColor: colorShades["500"] }}
                onClick={() => handleSelect(colorName as ColorName)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
