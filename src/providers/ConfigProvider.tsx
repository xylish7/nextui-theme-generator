import { colors } from "@nextui-org/react";
import { useState, createContext, useMemo, useCallback } from "react";
import { Config } from "shared/types";

export interface ConfigProviderI {
  config: Config;
  setBorderWidth: (newConfig: Partial<Config["borderWidth"]>) => void;
  setBrandColor: (newConfig: Partial<Config["brandColor"]>) => void;
  setLineHeight: (newConfig: Partial<Config["lineHeight"]>) => void;
  setFontSize: (newConfig: Partial<Config["fontSize"]>) => void;
  setRadius: (newConfig: Partial<Config["radius"]>) => void;
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
  radius: {
    small: "0.5",
    medium: "0.75",
    large: "0.875",
  },
  borderWidth: {
    small: "1",
    medium: "2",
    large: "3",
  },
};

export const ConfigContext = createContext<ConfigProviderI>({
  config: initialConfig,
  setBorderWidth: () => {},
  setBrandColor: () => {},
  setLineHeight: () => {},
  setFontSize: () => {},
  setRadius: () => {},
});

interface ConfigProviderProps {
  children: React.ReactNode;
}

export default function ConfigProvider({ children }: ConfigProviderProps) {
  const [config, setConfig] = useState<Config>(initialConfig);

  const setBorderWidth = useCallback(
    (newBorderWidths: Partial<Config["borderWidth"]>) =>
      setConfig((prev) => ({
        ...prev,
        borderWidth: {
          ...prev.borderWidth,
          ...newBorderWidths,
        },
      })),
    []
  );

  const setBrandColor = useCallback(
    (newBrandColors: Partial<Config["brandColor"]>) =>
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
    (newLineHeights: Partial<Config["lineHeight"]>) =>
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
    (newFontSizes: Partial<Config["fontSize"]>) =>
      setConfig((prev) => ({
        ...prev,
        fontSize: {
          ...prev.fontSize,
          ...newFontSizes,
        },
      })),
    []
  );

  const setRadius = useCallback(
    (newRadius: Partial<Config["radius"]>) =>
      setConfig((prev) => ({
        ...prev,
        radius: {
          ...prev.radius,
          ...newRadius,
        },
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      config,
      setBorderWidth,
      setBrandColor,
      setLineHeight,
      setFontSize,
      setRadius,
    }),
    [
      config,
      setBorderWidth,
      setBrandColor,
      setLineHeight,
      setFontSize,
      setRadius,
    ]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
