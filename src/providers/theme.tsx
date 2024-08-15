import {
  useState,
  createContext,
  useMemo,
  useEffect,
  useCallback,
} from "react";
import { ThemeType } from "shared/types";
import { storage } from "utils/local-storage";

export interface ThemeContextI {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

export const ThemeContext = createContext<ThemeContextI>({
  theme: "light",
  setTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<ThemeType>(
    storage.getTheme() ?? "dark"
  );

  const setTheme = useCallback((theme: ThemeType) => {
    setThemeState(theme);
    storage.setTheme(theme);
  }, []);

  useEffect(() => {
    document.getElementsByTagName("html")[0].style.backgroundColor = "";
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}
