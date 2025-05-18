import { Link, colors } from "@heroui/react";
import indieDevLogo from "assets/indie-dev-logo.png";

export default function Footer() {
  return (
    <footer className="container mx-auto max-w-7xl my-20 px-6 flex-grow">
      <div className="flex items-center justify-center mt-8">
        <img
          alt="Indie Dev logo"
          className="w-7 h-auto mr-3"
          src={indieDevLogo}
        />
        <span className="text-default-600">
          Made by{" "}
          <Link
            href="https://filipf.com"
            style={{ color: colors.purple[500] }}
            isExternal
          >
            IndieDev
          </Link>
        </span>
      </div>
    </footer>
  );
}
