import { createContext, useEffect, useState } from "react";

export type Lang = "en" | "es";

type LangContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

const LangContext = createContext<LangContextType>({
  lang: "en",
  setLang: () => {},
});

const LangProvider = ({ children }: { children: React.ReactNode }) => {
  const [lang, setLang] = useState<Lang>(() => {
    const savedLang = localStorage.getItem("lang") as Lang;
    return savedLang || "en";
  });

  useEffect(() => {
    // Guardar el valor del tema en el localStorage cada vez que cambie
    localStorage.setItem("lang", lang);
  }, [lang]);

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
};

export { LangProvider, LangContext };
