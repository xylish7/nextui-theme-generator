import NextUIConfigProvider from "./NextUIConfigProvider";
import ThemeProvider from "./ThemeProvider";

interface ProvidersProps {
  children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <NextUIConfigProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </NextUIConfigProvider>
  );
}
