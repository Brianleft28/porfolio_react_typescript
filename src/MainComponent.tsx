import { useContext } from "react";
import App from "./App.tsx";
import { ThemeContext } from "./context/Theme.tsx";

const MainComponent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`${theme} text-foreground`}>
      <App />
    </main>
  );
};

export default MainComponent;