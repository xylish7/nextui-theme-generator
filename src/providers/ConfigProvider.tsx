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
  resetConfig: (theme: Theme, sync: boolean) => Config;
  setBaseColor: (
    newConfig: Partial<ColorsConfig["baseColor"]>,
    theme: Theme
  ) => void;
  setBorderWidth: (newConfig: Partial<LayoutConfig["borderWidth"]>) => void;
  setBrandColor: (
    newConfig: Partial<ColorsConfig["brandColor"]>,
    theme: Theme,
    sync: boolean
  ) => void;
  setLineHeight: (newConfig: Partial<LayoutConfig["lineHeight"]>) => void;
  setFontSize: (newConfig: Partial<LayoutConfig["fontSize"]>) => void;
  setOtherColor: (
    newConfig: Partial<ColorsConfig["otherColor"]>,
    theme: Theme,
    sync: boolean
  ) => void;
  setOtherParams: (newConfig: Partial<LayoutConfig["otherParams"]>) => void;
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
  setOtherColor: () => {},
  setOtherParams: () => {},
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

  const resetConfig = useCallback((theme: Theme, sync: boolean) => {
    let newConfig = initialConfig;
    setConfig((prev) => {
      newConfig = sync
        ? newConfig
        : {
            ...prev,
            [theme]: newConfig[theme],
            layout: newConfig.layout,
          };
      return newConfig;
    });
    return newConfig;
  }, []);

  const setBrandColor = useCallback(
    (
      newConfig: Partial<ColorsConfig["brandColor"]>,
      theme: Theme,
      sync: boolean
    ) => {
      setConfig((prev) =>
        sync
          ? {
              ...prev,
              light: {
                ...prev.light,
                brandColor: {
                  ...prev.light.brandColor,
                  ...newConfig,
                },
              },
              dark: {
                ...prev.dark,
                brandColor: {
                  ...prev.dark.brandColor,
                  ...newConfig,
                },
              },
            }
          : {
              ...prev,
              [theme]: {
                ...prev[theme],
                brandColor: {
                  ...prev[theme].brandColor,
                  ...newConfig,
                },
              },
            }
      );
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

  const setOtherColor = useCallback(
    (
      newConfig: Partial<ColorsConfig["otherColor"]>,
      theme: Theme,
      sync: boolean
    ) => {
      setConfig((prev) =>
        sync
          ? {
              ...prev,
              light: {
                ...prev.light,
                otherColor: {
                  ...prev.light.otherColor,
                  ...newConfig,
                },
              },
              dark: {
                ...prev.dark,
                otherColor: {
                  ...prev.dark.otherColor,
                  ...newConfig,
                },
              },
            }
          : {
              ...prev,
              [theme]: {
                ...prev[theme],
                otherColor: {
                  ...prev[theme].otherColor,
                  ...newConfig,
                },
              },
            }
      );
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

  const setOtherParams = useCallback(
    (newOtherParams: Partial<LayoutConfig["otherParams"]>) =>
      setConfig((prev) => ({
        ...prev,
        layout: {
          ...prev.layout,
          otherParams: {
            ...prev.layout.otherParams,
            ...newOtherParams,
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
      setOtherColor,
      setOtherParams,
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
      setOtherColor,
      setOtherParams,
      setRadius,
    ]
  );

  return (
    <ConfigContext.Provider value={contextValue}>
      {children}
    </ConfigContext.Provider>
  );
}
