import ThemeProvider from "./theme";
import ThemeBuilderProvider from "./theme-builder";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <ThemeBuilderProvider>{children}</ThemeBuilderProvider>
    </ThemeProvider>
  );
}
