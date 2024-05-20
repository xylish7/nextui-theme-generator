import { colors } from "@nextui-org/react";
import { useState, createContext, useMemo, useCallback } from "react";
import { BrandColors, Config, FontSizes } from "shared/types";

export interface ConfigProviderI {
  config: Config;
  setBrandColor: (newConfig: Partial<BrandColors>) => void;
  setFontSize: (newConfig: Partial<FontSizes>) => void;
}

const initialConfig: Config = {
  brandColors: {
    primary: colors.blue[500],
    secondary: colors.purple[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    danger: colors.red[500],
  },
  fontSizes: {
    tiny: "0.75",
    small: "0.875",
    medium: "1",
    large: "1.25",
  },
};

export const ConfigContext = createContext<ConfigProviderI>({
  config: initialConfig,
  setBrandColor: () => {},
  setFontSize: () => {},
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

  const setFontSize = useCallback(
    (newFontSizes: Partial<Config["fontSizes"]>) =>
      setConfig((prev) => ({
        ...prev,
        fontSizes: {
          ...prev.fontSizes,
          ...newFontSizes,
        },
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      config,
      setBrandColor,
      setFontSize,
    }),
    [config, setBrandColor, setFontSize]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
