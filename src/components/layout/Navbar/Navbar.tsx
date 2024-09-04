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

interface MenuItem {
  href: string;
  name: string;
  isActive: boolean;
}

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
          <RouterLink to="/" className="font-bold  p-2 rounded-e-md">
            &lt;Brian /&gt;
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="start">
        <NavbarBrand>
          <RouterLink to="/" className="font-bold  p-2 rounded-e-md ">
            &lt;Brian /&gt;
          </RouterLink>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 gap-x-8 " justify="end">
        {menuItems.map((item: MenuItem, index: number) => (
          <NavbarItem key={`${item}-${index}`}>
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
        </NavbarMenu>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Navbar;
