import {
  Button,
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";
import { GithubLogo, Tree } from "@phosphor-icons/react";

import logo from "assets/logo.png";
import useRepo from "hooks/use-repo";

export default function Navbar() {
  const stars = useRepo("xylish7", "nextui-theme-generator") ?? 0;

  return (
    <HeroUINavbar maxWidth="xl">
      <NavbarBrand className="flex items-center">
        <img
          className="w-9 h-auto mr-2 border-2 border-white rounded-lg"
          src={logo}
        />
        <span className="font-bold text-inherit text-xl mb-0.5">
          HeroUI <span className="hidden sm:inline">ThemeGen</span>
          <span className="sm:hidden">TG</span>
        </span>
      </NavbarBrand>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            href="https://github.com/xylish7/nextui-theme-generator"
            isExternal
            size="sm"
            variant="bordered"
          >
            <GithubLogo size={18} />
            {stars} {stars > 1 ? "Stars" : "Star"}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="https://filipf.com"
            isExternal
            isIconOnly
            variant="light"
          >
            <Tree size={24} />
          </Button>
        </NavbarItem>
      </NavbarContent>
    </HeroUINavbar>
  );
}
