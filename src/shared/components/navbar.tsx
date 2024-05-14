import {
  Button,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import { Moon, Sun } from "@phosphor-icons/react";

import useTheme from "hooks/useTheme";
import logo from "assets/logo.png";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <NextUINavbar maxWidth="xl">
      <NavbarBrand className="flex items-center">
        <img
          className="w-9 h-auto mr-2 border-2 border-white rounded-lg"
          src={logo}
        />
        <span className="font-bold text-inherit text-xl mb-0.5">
          NextUI ThemeGen
        </span>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="primary"
            isIconOnly
            variant="flat"
            onClick={toggleTheme}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
