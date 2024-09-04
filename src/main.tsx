import { StrictMode, useContext } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./context/Theme.tsx";
import { ThemeContext } from "./context/Theme.tsx";

const Main = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme} text-foreground`}>
      <App />
    </main>
  );
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <Main />
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
