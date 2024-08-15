import { NextUIProvider } from "@nextui-org/react";
import ErrorBoundary from "components/error-boundary";
import ErrorFallback from "components/error-fallback";
import Providers from "providers";
import Home from "routes/Home";

function App() {
  return (
    <NextUIProvider>
      <ErrorBoundary fallback={<ErrorFallback />}>
        <Providers>
          <Home />
        </Providers>
      </ErrorBoundary>
    </NextUIProvider>
  );
}

export default App;
