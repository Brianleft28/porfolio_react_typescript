import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider } from "./context/Theme.tsx";
import MainComponent from "./MainComponent.tsx";
import { LangProvider } from "./context/Lang.tsx";
import { CategoryProvider } from "./context/Category.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <LangProvider>
          <CategoryProvider>
           <MainComponent />
          </CategoryProvider>
        </LangProvider>
      </ThemeProvider>
    </NextUIProvider>
  </StrictMode>
);
