import { useEffect, useState } from "react";
import { Theme } from "shared/types";

export default function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return { theme, toggleTheme };
}
