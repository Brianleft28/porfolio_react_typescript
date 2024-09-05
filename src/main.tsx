import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./context/Theme.tsx";
import MainComponent from "./MainComponent.tsx";



createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <MainComponent />
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
