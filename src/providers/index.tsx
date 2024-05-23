import ThemeProvider from "./ThemeProvider";
import ConfigProvider from "./ConfigProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <ConfigProvider>{children}</ConfigProvider>;
    </ThemeProvider>
  );
}
