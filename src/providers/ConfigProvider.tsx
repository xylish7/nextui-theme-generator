import { colors } from "@nextui-org/react";
import { useState, createContext, useMemo, useCallback } from "react";
import { BrandColor, Config, FontSize, LineHeight } from "shared/types";

export interface ConfigProviderI {
  config: Config;
  setBrandColor: (newConfig: Partial<BrandColor>) => void;
  setLineHeight: (newConfig: Partial<LineHeight>) => void;
  setFontSize: (newConfig: Partial<FontSize>) => void;
}

const initialConfig: Config = {
  brandColor: {
    primary: colors.blue[500],
    secondary: colors.purple[500],
    success: colors.green[500],
    warning: colors.yellow[500],
    danger: colors.red[500],
  },
  fontSize: {
    tiny: "0.75",
    small: "0.875",
    medium: "1",
    large: "1.125",
  },
  lineHeight: {
    tiny: "1",
    small: "1.25",
    medium: "1.5",
    large: "1.75",
  },
};

export const ConfigContext = createContext<ConfigProviderI>({
  config: initialConfig,
  setBrandColor: () => {},
  setLineHeight: () => {},
  setFontSize: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export default function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useState<Config>(initialConfig);

  const setBrandColor = useCallback(
    (newBrandColors: Partial<BrandColor>) =>
      setConfig((prev) => ({
        ...prev,
        brandColor: {
          ...prev.brandColor,
          ...newBrandColors,
        },
      })),
    []
  );

  const setLineHeight = useCallback(
    (newLineHeights: Partial<LineHeight>) =>
      setConfig((prev) => ({
        ...prev,
        lineHeight: {
          ...prev.lineHeight,
          ...newLineHeights,
        },
      })),
    []
  );

  const setFontSize = useCallback(
    (newFontSizes: Partial<FontSize>) =>
      setConfig((prev) => ({
        ...prev,
        fontSize: {
          ...prev.fontSize,
          ...newFontSizes,
        },
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      config,
      setBrandColor,
      setLineHeight,
      setFontSize,
    }),
    [config, setBrandColor, setLineHeight, setFontSize]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
