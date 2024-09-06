import { ReactNode, useContext } from "react";
import Navbar from "./Navbar/Navbar";
import { ThemeContext } from "../../context/Theme";
interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative font-primary bg-content1">
      <div
        className={`absolute inset-0 ${
          theme === "futuristic-minimalist"
            ? 'bg-[url("https://i.pinimg.com/originals/3a/53/45/3a5345282d5c54527960980be86c4fde.jpg")]'
            : 'bg-[url("https://static.vecteezy.com/system/resources/previews/007/163/126/non_2x/abstract-black-and-white-background-backdrop-cover-design-element-with-squares-squares-with-shadow-pattern-template-for-creating-covers-banners-cards-posters-and-other-designs-vector.jpg")]'
        } bg-cover bg-center opacity-25`}
      ></div>
      <Navbar />
      <div
        className={`relative min-h-[calc(100vh-65px)] overflow-hidden lg:px-24 md:px-20 px-10 p-3 justify-center items-center flex`}
      >
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
