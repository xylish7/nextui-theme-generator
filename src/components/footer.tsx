import { Link } from "@heroui/react";
import meLogo from "assets/me.png";

export default function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl my-20 px-6 flex-grow">
      <div className="flex items-center justify-center mt-8">
        <img
          alt="Indie Dev logo"
          className="w-7 h-auto mr-3 rounded-full"
          src={meLogo}
        />
        <span className="text-default-600">
          Made by{" "}
          <Link href="https://filipf.com" isExternal>
            FilipF
          </Link>
        </span>
      </div>
    </footer>
  );
}
