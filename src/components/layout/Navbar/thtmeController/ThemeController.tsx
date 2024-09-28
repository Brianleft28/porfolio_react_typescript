import { Switch } from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "../../../../context/Theme";

const ThemeController = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const [isChecked, setIsChecked] = useState(() => {
    const savedIsChecked = localStorage.getItem("isChecked");
    return savedIsChecked === "true"; 
  });
  
  useEffect(() => {
    localStorage.setItem("isChecked", isChecked.toString());
  }, [isChecked]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setIsChecked(checked);
    if (checked) {
      setTheme("futuristic-minimalist");
      localStorage.setItem("isChecked", "true");
    } else {
      setTheme("futuristic-minimalist-light");
    }
    console.log("isChecked", checked);
    console.log("theme", theme);
  };
  return (
    <Switch
      size="lg"
      isSelected={isChecked}
      onChange={handleChange}
      color="secondary"
      endContent={<BsFillMoonStarsFill />}
      startContent={<FaSun />}
    ></Switch>
  );
};

export default ThemeController;
