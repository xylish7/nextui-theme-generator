import { colors } from "@nextui-org/react";
import { useState, createContext, useMemo, useCallback } from "react";
import { BrandColors, Config } from "shared/types";

export interface ConfigProviderI {
  config: Config;
  setBrandColor: (newConfig: Partial<BrandColors>) => void;
}

const initialConfig: Config = {
  brandColors: {
    primary: colors.blue[500],
    secondary: colors.purple[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    danger: colors.red[500],
  },
};

export const ConfigContext = createContext<ConfigProviderI>({
  config: initialConfig,
  setBrandColor: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export default function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useState<Config>(initialConfig);

  const setBrandColor = useCallback(
    (newBrandColors: Partial<BrandColors>) =>
      setConfig((prev) => ({
        ...prev,
        brandColors: {
          ...prev.brandColors,
          ...newBrandColors,
        },
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      config,
      setBrandColor,
    }),
    [config, setBrandColor]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
