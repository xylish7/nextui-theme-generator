import { HeroUIProvider } from "@heroui/react";
import ErrorBoundary from "components/error-boundary";
import ErrorFallback from "components/error-fallback";
import Providers from "providers";
import Home from "routes/Home";

function App() {
  return (
    <HeroUIProvider>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Providers>
          <Home />
        </Providers>
      </ErrorBoundary>
    </HeroUIProvider>
  );
}

export default App;
