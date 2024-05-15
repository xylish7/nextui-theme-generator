import {
  Button,
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import { GithubLogo, Moon, Sun, Tree } from "@phosphor-icons/react";

import logo from "assets/logo.png";
import { ThemeContext } from "providers/ThemeProvider";
import { useContext } from "react";

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

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
            as={Link}
            href="https://indiedev.pro"
            isExternal
            isIconOnly
            variant="light"
          >
            <Tree size={24} />
          </Button>
          <Button
            as={Link}
            href="https://github.com/xylish7/nextui-theme-generator"
            isExternal
            isIconOnly
            variant="light"
          >
            <GithubLogo size={24} />
          </Button>
          <Button
            isIconOnly
            variant="light"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <Moon size={24} /> : <Sun size={24} />}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
}
