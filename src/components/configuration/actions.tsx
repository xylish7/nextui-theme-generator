import { useState } from "react";
import { Button, Tooltip } from "@heroui/react";
import {
  ArrowCounterClockwise,
  Check,
  Copy,
  Moon,
  Sun,
} from "@phosphor-icons/react";

import { ThemeType } from "shared/types";

interface ActionsProps {
  theme: ThemeType;
  onCopy: () => unknown;
  onResetTheme: () => void;
  onToggleTheme: () => void;
}

export function Actions({
  theme,
  onCopy,
  onResetTheme,
  onToggleTheme,
}: ActionsProps) {
  const [copied, setCopied] = useState(false);
  const isLight = theme === "light";

  /**
   * Handle the copying of the configuration.
   */
  function handleCopyConfig() {
    navigator.clipboard.writeText(JSON.stringify(onCopy(), null, 2));

    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex gap-2">
      <Tooltip content={isLight ? "Dark" : "Light"}>
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onClick={onToggleTheme}
        >
          {isLight ? <Moon size={20} /> : <Sun size={20} />}
        </Button>
      </Tooltip>
      <Tooltip content="Reset theme">
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onClick={onResetTheme}
        >
          <ArrowCounterClockwise size={20} />
        </Button>
      </Tooltip>
      <Tooltip content="Copy configuration">
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          onClick={handleCopyConfig}
        >
          {copied ? <Check size={20} /> : <Copy size={20} />}
        </Button>
      </Tooltip>
    </div>
  );
}
