import { Button, Link } from "@heroui/react";
import { GithubLogo, Warning } from "@phosphor-icons/react";
import { ArrowsClockwise } from "@phosphor-icons/react/dist/ssr";

export default function ErrorFallback() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full">
      <Warning className="text-warning mb-4" size={72} weight="duotone" />
      <h1 className="text-4xl text-default-500">Oops...</h1>
      <span className="text-2xl text-default-500 font-semibold mb-8 mt-2">
        Something went wrong
      </span>
      <div className="flex gap-4 mt-6">
        <Button
          color="primary"
          onPress={() => {
            localStorage.clear();
            window.location.reload();
          }}
          size="lg"
          variant="ghost"
        >
          <ArrowsClockwise size={28} /> Clear Storage and Refresh
        </Button>
        <Button
          color="secondary"
          as={Link}
          href="https://github.com/xylish7/nextui-theme-generator/issues/new"
          isExternal
          size="lg"
          startContent={<GithubLogo size={28} />}
          variant="ghost"
        >
          Report on github
        </Button>
      </div>
    </div>
  );
}
