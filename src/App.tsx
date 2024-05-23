import { NextUIProvider } from "@nextui-org/react";
import ErrorBoundary from "components/ErrorBoundary";
import ErrorFallback from "components/ErrorFallback";
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
