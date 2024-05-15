import { useState, createContext, useMemo, useCallback } from "react";
import { NextUIConfig } from "shared/types";

export interface NextUIConfigProviderI {
  nextUIConfig: NextUIConfig;
  setNextUIConfig: (newConfig: Partial<NextUIConfig>) => void;
}

export const NextUIConfigContext = createContext<NextUIConfigProviderI>({
  nextUIConfig: {
    primary: "blue",
    secondary: "purple",
    success: "green",
    warning: "yellow",
    danger: "red",
  },
  setNextUIConfig: () => {},
});

interface NextUIConfigProviderProps {
  children: React.ReactNode;
}

export default function NextUIConfigProvider({
  children,
}: NextUIConfigProviderProps) {
  const [nextUIConfig, setConfig] = useState<NextUIConfig>({
    primary: "blue",
    secondary: "purple",
    success: "green",
    warning: "yellow",
    danger: "red",
  });

  const setNextUIConfig = useCallback(
    (newConfig: Partial<NextUIConfig>) =>
      setConfig((prevConfig) => ({
        ...prevConfig,
        ...newConfig,
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      nextUIConfig,
      setNextUIConfig,
    }),
    [nextUIConfig, setNextUIConfig]
  );

  return (
    <NextUIConfigContext.Provider value={contextValue}>
      {children}
    </NextUIConfigContext.Provider>
  );
}
