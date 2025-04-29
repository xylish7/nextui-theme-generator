import { Card, CardBody, Link } from "@heroui/react";
import { Info as InfoIcon } from "@phosphor-icons/react";

export default function Info() {
  return (
    <Card className="mb-12 max-w-max mx-auto">
      <CardBody className="flex items-center p-6">
        <InfoIcon className="text-primary" size={28} />
        <p className="mt-3">
          This is a theme generator for the{" "}
          <Link href="https://nextui.org/" isExternal>
            HeroUI
          </Link>{" "}
          component library.
        </p>
      </CardBody>
    </Card>
  );
}
