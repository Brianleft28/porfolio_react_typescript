import "./Navbar.css";
import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Divider,
} from "@nextui-org/react";

import { Link as RouterLink } from "react-router-dom";
import LangController from "./langController/LangController";
import { useContext, useEffect, useState } from "react";
import Logo from "./logo/Logo";
import RedesSociales from "./redes/RedesSociales";
import ThemeController from "./thtmeController/ThemeController";
import { ThemeContext } from "../../../context/Theme";
import { LangContext } from "../../../context/Lang";

type Lang = "en" | "es";

interface MenuItem {
  name: { [key in Lang]: string };
  href: string;
  isActive: boolean;
}

const Navbar = () => {
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LangContext);

  const initialMenuItems = [
    {
      name: { en: "Projects", es: "Proyectos" },
      href: "/projects",
      isActive: false,
    },
    {
      name: { en: "Skills", es: "Habilidades" },
      href: "/skills",
      isActive: false,
    },
    {
      name: { en: "Experience", es: "Experiencia" },
      href: "/experience",
      isActive: false,
    },
    {
      name: { en: "Contact", es: "Contacto" },
      href: "/contact",
      isActive: false,
    },
  ];

  const [menuItems, setMenuItems] = useState(() => {
    const savedMenuItems = localStorage.getItem("menuItems");
    return savedMenuItems ? JSON.parse(savedMenuItems) : initialMenuItems;
  });

  useEffect(() => {
    localStorage.setItem("menuItems", JSON.stringify(menuItems));
  }, [menuItems]);

  const handleMenuItemClick = (index: number) => {
    const newMenuItems = menuItems.map((item: MenuItem, i: number) => {
      if (i === index) {
        return { ...item, isActive: true };
      }
      return { ...item, isActive: false };
    });
    setMenuItems(newMenuItems);
  };

  const desactiveMenuItems = () => {
    const newMenuItems = menuItems.map((item: MenuItem) => {
      return { ...item, isActive: false };
    });
    setMenuItems(newMenuItems);
  };

  return (
    <NextUINavbar
      className={`${theme} selection:bg-none`}
      disableAnimation={false}
      isBlurred={true}
      isBordered={false}
      position="sticky"
      maxWidth="xl"
    >
      <NavbarContent className="flex sm:flex lg:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand onClick={desactiveMenuItems}>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      {/* Navbar Content SM */}
      <NavbarContent
        onClick={desactiveMenuItems}
        className="hidden sm:flex gap-4 "
        justify="start"
      >
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>
      {/* Navbar Content XL */}
      <NavbarContent
        className="hidden sm:flex md:flex gap-4 gap-x-8 "
        justify="end"
      >
        {menuItems.map((item: MenuItem, index: number) => (
          <NavbarItem
            key={`${item.name[lang]}-${index} `}
            className="link hover:-translate-y-0.5 transition-all duration-300 hover:scale-105"
          >
            <Link
              as={RouterLink}
              to={item.href}
              color={item.isActive ? "secondary" : "foreground"}
              size="sm"
              onPress={() => handleMenuItemClick(index)}
            >
              {item.name[lang]}
            </Link>
          </NavbarItem>
        ))}
        {/* DIVIDER */}
        <Divider
          className="w-0.5 h-7 bg-divider hidden lg:flex"
          orientation="vertical"
        />
        {/* Redes sociales */}
        <NavbarItem className="gap-2 hidden lg:flex">
          <RedesSociales style="redes" />
        </NavbarItem>
        {/* DIVIDER Y THEME CONTROLLER */}

        <Divider
          className="w-0.5 h-7 bg-divider hidden lg:hidden xl:flex"
          orientation="vertical"
        />
        <NavbarItem className="hidden xl:flex">
          <ThemeController />
        </NavbarItem>
        {/* DIVIDER Y LANG CONTROLLER */}
        <Divider
          className="w-0.5 h-7 bg-divider hidden lg:hidden xl:flex"
          orientation="vertical"
        />
        <NavbarItem className="hidden  xl:flex">
          <LangController />
        </NavbarItem>
      </NavbarContent>

      {/* Navbar Menu Mobile */}
      <NavbarMenu
        className={`${theme} bg-transparent flex items-center justify-start sm:flex lg:hidden`}
      >
        <div className="flex items-center justify-center">
          <Divider className="w-52 md:hidden flex mt-3 h-0.5 bg-divider" />
        </div>
        {menuItems.map((item: MenuItem, index: number) => (
          <NavbarMenuItem
            className="items-center justify-center flex"
            key={`${item}-${index}`}
          >
            <Link
              as={RouterLink}
              to={item.href}
              color={item.isActive ? "secondary" : "foreground"}
              size="md"
              onPress={() => handleMenuItemClick(index)}
              className="md:hidden sm:hidden  justify-center items-center mb-3 md:mb-0"
            >
              {item.name[lang]}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex flex-col justify-center items-center ">
          <Divider className="w-52 mb-3 h-0.5 bg-divider" />
          <div className=" text-foreground md:text-2xl font-secondary">
            Mis redes
          </div>
          <NavbarItem className="flex gap-2 hover:-translate-y-0.5 transition-all">
            <RedesSociales style="redes" />
          </NavbarItem>
        </div>
        <div className="flex flex-col justify-center items-center ">
          <Divider className="w-52 mb-3 h-0.5 bg-divider" />
          <NavbarItem className="flex gap-2 hover:-translate-y-0.5 transition-all">
            <ThemeController />
            <LangController />
          </NavbarItem>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
