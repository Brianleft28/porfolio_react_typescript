import { Switch } from "@nextui-org/react";
import { useContext, useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaSun } from "react-icons/fa";
import { ThemeContext } from "../../../../context/Theme";

const ThemeController = () => {
  const [isChecked, setIsChecked] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
    if (isChecked) {
      setTheme("futuristic-minimalist");
    } else {
      setTheme("futuristic-minimalist-light");
    }
    console.log("isChecked", isChecked);
    console.log("theme", theme);
  };
  return (
    <Switch
      size="lg"
      onChange={handleChange}
      color="secondary"
      endContent={<BsFillMoonStarsFill />}
      startContent={<FaSun />}
    ></Switch>
  );
};

export default ThemeController;
