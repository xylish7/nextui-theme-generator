import { Button, Tooltip } from "@nextui-org/react";
import { Check, Copy } from "@phosphor-icons/react";
import { useState } from "react";

interface CopyButtonProps {
  data: unknown;
}

export function CopyButton({ data }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  function handleCopyConfig() {
    navigator.clipboard.writeText(JSON.stringify(data, null, 2));

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <Tooltip content="Copy">
      <Button
        color="primary"
        isIconOnly
        size="sm"
        variant="flat"
        onClick={handleCopyConfig}
      >
        {copied ? <Check size={18} /> : <Copy size={18} />}
      </Button>
    </Tooltip>
  );
}
