import { createContext, useState, ReactNode } from "react";

/* Definir el tipo para el contexto */
type ThemeContextType = {
  theme: string | undefined;
  setTheme: (theme: string) => void;
};
const defaultThemeContext: ThemeContextType = {
  theme: "futuristic-minimalist",
  setTheme: () => {},
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContext);

/* Crear el contexto */

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("futuristic-minimalist");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
