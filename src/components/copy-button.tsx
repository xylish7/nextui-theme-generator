import { useState } from "react";
import {
  Button,
  ButtonProps,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { ThemeType } from "shared/types";
import { Check, Copy, Moon, Sun } from "@phosphor-icons/react";

interface CopyButtonProps extends Omit<ButtonProps, "onCopy"> {
  onCopy: (theme: ThemeType) => void;
}

export function CopyButton({ onCopy, ...rest }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  function handleCopy(theme: ThemeType) {
    onCopy(theme);

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly {...rest}>
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Copy configuration">
        <DropdownItem
          startContent={<Sun size={18} />}
          onPress={() => handleCopy("light")}
          key="light"
        >
          Light config
        </DropdownItem>
        <DropdownItem
          startContent={<Moon size={18} />}
          onPress={() => handleCopy("dark")}
          key="dark"
        >
          Dark config
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
}
