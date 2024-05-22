import { getConfig, initialConfig } from "lib/configuration";
import { storage } from "lib/local-storage";
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
  resetConfig: (theme: Theme) => Config;
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

export const ConfigContext = createContext<ConfigProviderI>({
  config: getConfig(),
  resetConfig: () => initialConfig,
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
  const [config, setConfig] = useState<Config>(getConfig());

  useEffect(() => {
    const savedConfig = storage.getConfiguration();
    if (savedConfig) {
      setConfig(savedConfig);
    }
  }, []);

  const resetConfig = useCallback((theme: Theme) => {
    let newConfig = initialConfig;
    setConfig((prev) => {
      newConfig = {
        ...prev,
        [theme]: initialConfig[theme],
      };
      return newConfig;
    });
    return newConfig;
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
      resetConfig,
      config,
      setBaseColor,
      setBorderWidth,
      setBrandColor,
      setLineHeight,
      setFontSize,
      setRadius,
    }),
    [
      resetConfig,
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
