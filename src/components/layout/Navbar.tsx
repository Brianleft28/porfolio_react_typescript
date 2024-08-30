import {
  Navbar as NextUINavbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";

import { Link as RouterLink } from "react-router-dom";

import { useEffect, useState } from "react";

const Navbar = () => {
  const initialMenuItems = [
    { name: "About", href: "/about", isActive: false },
    { name: "Projects", href: "/projects", isActive: false },
    { name: "Skills", href: "/skills", isActive: false },
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
    const newMenuItems = menuItems.map((item, i) => {
      console.log(`Menu item ${index} clicked`);
      console.log("Menu item", item.href);
      if (i === index) {
        return { ...item, isActive: true };
      }
      return { ...item, isActive: false };
    });
    setMenuItems(newMenuItems);
  };

  return (
    <NextUINavbar disableAnimation isBordered>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">&lt;Brian /&gt;</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="start">
        <p className="font-bold text-inherit">&lt;Brian /&gt;</p>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="end">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <RouterLink to={item.href} as={"div6"}>
              <Link
                color={item.isActive ? "primary" : "foreground"}
                size="md"
                onPress={() => handleMenuItemClick(index)}
              >
                {item.name}
              </Link>
            </RouterLink>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <RouterLink to={item.href}>
              <Link
                color={item.isActive ? "primary" : "foreground"}
                size="md"
                onPress={() => handleMenuItemClick(index)}
              >
                {item.name}
              </Link>
            </RouterLink>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </NextUINavbar>
  );
};

export default Navbar;
