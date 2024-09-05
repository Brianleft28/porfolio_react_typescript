import { createContext, useState, ReactNode, useEffect } from "react";

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
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || "futuristic-minimalist";
  });
  useEffect(() => {
    // Guardar el valor del tema en el localStorage cada vez que cambie
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
