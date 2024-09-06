import { MdLanguage } from "react-icons/md";
/* import switch */
import { Switch } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../../../../context/Lang";

const LangController = () => {

  const {lang, setLang} = useContext(LangContext);
  const [isSelected, setIsSelected] = useState(() => {
    const savedLang = localStorage.getItem("lang");
    return savedLang === "es";
  });
  useEffect(() => {
    // Guardar el valor del idioma en el localStorage cada vez que cambie
    localStorage.setItem("lang", isSelected ? "es" : "en");
  }, [isSelected]);
  
  const handleLangChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsSelected(checked);
    if (checked) {
      setLang("es");
      localStorage.setItem("lang", "es");
    } else {
      setLang("en");
      localStorage.setItem("lang", "en");
    }
    console.log("isChecked", checked);
    console.log("lang", lang);
  }
    return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <Switch 
        size="lg"
        isSelected={isSelected}
        onChange={(e) => handleLangChange(e)}
        color="secondary"
        startContent={<MdLanguage />}
        endContent={<MdLanguage />}      
      />
        
      <p className="text-small text-default-500">{isSelected ? "Español" : "English"}</p>
    </div>

  )
}
export default LangController