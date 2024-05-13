import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@nextui-org/react";
import { Drop } from "@phosphor-icons/react";
import { useState } from "react";
import { colors } from "shared/constants";
import { Color } from "shared/types";

interface ColorPickerProps {
  label: string;
  onSelect: (color: Color) => void;
}

export default function ColorPicker({ label, onSelect }: ColorPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [color, setColor] = useState<Color>("Blue");
  const shades = colors[color];

  function handleSelect(color: Color) {
    onSelect(color);
    setColor(color);
    setIsOpen(false);
  }

  return (
    <div>
      <Popover isOpen={isOpen} placement="bottom" onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <Button
            size="lg"
            style={{ color: shades.foreground, backgroundColor: shades[500] }}
            variant="flat"
          >
            <Drop style={{ color: shades[900] }} size={24} weight="duotone" />
            {label}
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <div className="flex flex-wrap gap-2 max-w-40">
            {Object.entries(colors).map(([color, shades]) => (
              <Button
                aria-label={color}
                isIconOnly
                size="sm"
                style={{ backgroundColor: shades["500"] }}
                onClick={() => handleSelect(color as Color)}
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
