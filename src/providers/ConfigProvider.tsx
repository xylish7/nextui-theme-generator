import { colors } from "@nextui-org/react";
import { getConfiguration } from "lib/local-storage";
import {
  useState,
  createContext,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { ColorsConfig, Config, LayoutConfig, Theme } from "shared/types";

export interface ConfigProviderI {
  config: Config;
  setBaseColor: (
    newConfig: Partial<ColorsConfig["baseColor"]>,
    theme: Theme
  ) => void;
  setBorderWidth: (newConfig: Partial<LayoutConfig["borderWidth"]>) => void;
  setBrandColor: (
    newConfig: Partial<ColorsConfig["brandColor"]>,
    theme: Theme
  ) => void;
  setLineHeight: (newConfig: Partial<LayoutConfig["lineHeight"]>) => void;
  setFontSize: (newConfig: Partial<LayoutConfig["fontSize"]>) => void;
  setRadius: (newConfig: Partial<LayoutConfig["radius"]>) => void;
}

const initialConfig: Config = {
  light: {
    brandColor: {
      default: colors.zinc[300],
      primary: colors.blue[500],
      secondary: colors.purple[500],
      success: colors.green[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
    },
    baseColor: {
      foreground: colors.black,
      background: colors.white,
    },
  },
  dark: {
    brandColor: {
      default: colors.zinc[700],
      primary: colors.blue[500],
      secondary: colors.purple[500],
      success: colors.green[500],
      warning: colors.yellow[500],
      danger: colors.red[500],
    },
    baseColor: {
      foreground: colors.white,
      background: colors.black,
    },
  },
  layout: {
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
  },
};

export const ConfigContext = createContext<ConfigProviderI>({
  config: initialConfig,
  setBaseColor: () => {},
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
  console.log("🚀 ~ ConfigProvider ~ config:", config);

  useEffect(() => {
    const savedConfig = getConfiguration();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  }, []);

  const setBrandColor = useCallback(
    (newConfig: Partial<ColorsConfig["brandColor"]>, theme: Theme) => {
      setConfig((prev) => ({
        ...prev,
        [theme]: {
          ...prev[theme],
          brandColor: {
            ...prev[theme].brandColor,
            ...newConfig,
          },
        },
      }));
    },
    []
  );

  const setBaseColor = useCallback(
    (newConfig: Partial<ColorsConfig["baseColor"]>, theme: Theme) => {
      setConfig((prev) => ({
        ...prev,
        [theme]: {
          ...prev[theme],
          baseColor: {
            ...prev[theme].baseColor,
            ...newConfig,
          },
        },
      }));
    },
    []
  );

  const setBorderWidth = useCallback(
    (newBorderWidths: Partial<LayoutConfig["borderWidth"]>) =>
      setConfig((prev) => ({
        ...prev,
        layout: {
          ...prev.layout,
          borderWidth: {
            ...prev.layout.borderWidth,
            ...newBorderWidths,
          },
        },
      })),
    []
  );

  const setLineHeight = useCallback(
    (newLineHeights: Partial<LayoutConfig["lineHeight"]>) =>
      setConfig((prev) => ({
        ...prev,
        layout: {
          ...prev.layout,
          lineHeight: {
            ...prev.layout.lineHeight,
            ...newLineHeights,
          },
        },
      })),
    []
  );

  const setFontSize = useCallback(
    (newFontSizes: Partial<LayoutConfig["fontSize"]>) =>
      setConfig((prev) => ({
        ...prev,
        layout: {
          ...prev.layout,
          fontSize: {
            ...prev.layout.fontSize,
            ...newFontSizes,
          },
        },
      })),
    []
  );

  const setRadius = useCallback(
    (newRadius: Partial<LayoutConfig["radius"]>) =>
      setConfig((prev) => ({
        ...prev,
        layout: {
          ...prev.layout,
          radius: {
            ...prev.layout.radius,
            ...newRadius,
          },
        },
      })),
    []
  );

  const contextValue = useMemo(
    () => ({
      config,
      setBaseColor,
      setBorderWidth,
      setBrandColor,
      setLineHeight,
      setFontSize,
      setRadius,
    }),
    [
      config,
      setBaseColor,
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
