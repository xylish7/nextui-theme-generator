import { NextUIProvider } from "@nextui-org/react";
import ThemeProvider from "./ThemeProvider";

import ConfigProvider from "./ConfigProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIProvider>
      <ThemeProvider>
        <ConfigProvider>{children}</ConfigProvider>;
      </ThemeProvider>
    </NextUIProvider>
  );
}
