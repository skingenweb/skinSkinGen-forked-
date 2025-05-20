"use client";
import type { NavbarProps } from "@heroui/react";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Divider,
} from "@heroui/react";
import { cn } from "@heroui/react";
import Image from "next/image";

const menuItems = [
  "Nosotros",
  "Productos",
  "Eventos",
  "Contacto",
  "Lanzamientos",
];

export default function NavBarComponent(props: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <Navbar
      {...props}
      classNames={{
        base: cn("border-default-100", {
          "bg-default-200/50 dark:bg-default-100/50": isMenuOpen,
        }),
        wrapper: "w-full justify-center",
        item: "hidden md:flex",
      }}
      height="80px"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      {/* Left Content */}
      <NavbarBrand>
        <div className="rounded-full text-background">
          <Image
            src="/logoSkin.svg"
            alt="SkinGen Colombia"
            width={150}
            height={80}
            className="mx-auto"
            onClick={() => (window.location.href = "/")}
          />
        </div>
      </NavbarBrand>

      {/* Center Content */}
      <NavbarContent justify="start">
        <NavbarItem>
          <Link
            className="text-black hover:text-gray-300 hover:cursor-pointer"
            href="/nosotros"
            size="lg"
          >
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black hover:text-gray-300"
            href="/productos"
            size="lg"
          >
            Productos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black hover:text-gray-300"
            href="/lanzamientos"
            size="lg"
          >
            Proximos Lanzamientos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black hover:text-gray-300"
            href="/eventos"
            size="lg"
          >
            Eventos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className="text-black hover:text-gray-300"
            href="https://wa.me/573185797100"
            size="lg"
          >
            Contacto
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenuToggle className="text-black md:hidden" />

      <NavbarMenu className="top-[calc(var(--navbar-height)_-_1px)] max-h-fit bg-default-200/50 pb-6 pt-6 shadow-medium backdrop-blur-md backdrop-saturate-150 dark:bg-default-100/50">
        {menuItems.map((item, index) => {
          const isContacto = item === "contacto";
          const href = isContacto ? "https://wa.me/573185797100" : `/${item}`;

          return (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                className="mb-2 w-full text-default-500"
                href={href}
                size="md"
              >
                {item}
              </Link>
              {index < menuItems.length - 1 && (
                <Divider className="opacity-50" />
              )}
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </Navbar>
  );
}
