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

import { useEffect, useState } from "react";
import Logo from "./logo/Logo";
import RedesSociales from "./redes/RedesSociales";
import ThemeController from "./thtmeController/ThemeController";

interface MenuItem {
  href: string;
  name: string;
  isActive: boolean;
}

const Navbar = () => {
  const initialMenuItems = [
    { name: "Home", href: "/", isActive: true },
    { name: "Projects", href: "/projects", isActive: false },
    { name: "Skills", href: "/skills", isActive: false },
    { name: "Experience", href: "/experience", isActive: false },
    { name: "Contact", href: "/contact", isActive: false },
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
        console.log("Menu item", item.href, "href");
        console.log(`Menu item ${index}, ${item.name} clicked`);
        return { ...item, isActive: true };
      }
      return { ...item, isActive: false };
    });
    setMenuItems(newMenuItems);
  };

  return (
    <NextUINavbar
      className="futuristic-minimalist bg-background"
      disableAnimation={false}
      isBordered={true}
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent
        className="sm:hidden pr-3 futuristic-minimalist"
        justify="center"
      >
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="start">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 gap-x-8 " justify="end">
        {menuItems.map((item: MenuItem, index: number) => (
          <NavbarItem
            key={`${item}-${index}`}
            className="link hover:-translate-y-0.5 transition-all dutaion-300 hover:scale-105"
          >
            <Link
              as={RouterLink}
              to={item.href}
              color={item.isActive ? "secondary" : "foreground"}
              size="sm"
              onPress={() => handleMenuItemClick(index)}
            >
              {item.name}
            </Link>
          </NavbarItem>
        ))}
        {/* DIVIDER */}
        <Divider className="w-0.5 h-7 bg-content3" orientation="vertical" />
        {/* Redes sociales */}
        <NavbarItem className="flex gap-2">
          <RedesSociales style="redes" />
        </NavbarItem>
        {/* DIVIDER Y THEME CONTROLLER */}
        <Divider className="w-0.5 h-7 bg-content3" orientation="vertical" />
        <NavbarItem className="flex gap-2 hover:-translate-y-0.5 transition-all dutaion-300 hover:scale-100">
          <ThemeController />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu className="futuristic-minimalist sm:hidden flex">
        {menuItems.map((item: MenuItem, index: number) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              as={RouterLink}
              to={item.href}
              color={item.isActive ? "secondary" : "foreground"}
              size="md"
              onPress={() => handleMenuItemClick(index)}
            >
              {item.name}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarItem className="flex gap-2 hover:-translate-y-0.5 transition-all dutaion-300 hover:scale-100">
          <RedesSociales style="redes" />
        </NavbarItem>
        <NavbarItem className="flex gap-2 hover:-translate-y-0.5 transition-all dutaion-300 hover:scale-100">
          <ThemeController />
        </NavbarItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
