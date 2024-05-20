import ConfigProvider from "./ConfigProvider";
import ThemeProvider from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ConfigProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ConfigProvider>
  );
}
