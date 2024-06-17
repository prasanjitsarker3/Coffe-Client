"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Button,
  Badge,
} from "@nextui-org/react";

import Link from "next/link";
import { ThemeSwitcher } from "../Lib/ThemeSwitcher";
import { ShoppingBag } from "lucide-react";
import useAuthUser from "../Lib/authUser";
import { useAppDispatch, useAppSelector } from "../Redux/Provider/hook";
import { logOut } from "../Redux/authSlice";
import { logoutUser } from "../Server/logoutUser";
import { useRouter } from "next/navigation";
import { RootState } from "../Redux/store";

const NavbarSec = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isInvisible, setIsInvisible] = React.useState(false);
  const user = useAuthUser();
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.cart.items);
  console.log("Length", items.length);

  const routesMap: Record<string, string> = {
    USER: "/dashboard",
    ADMIN: "/dashboard/admin",
  };

  const handleLogoutUser = () => {
    dispatch(logOut());
    logoutUser(router);
  };

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className="bg-background bg-none backdrop-filter-none bg-opacity-0 backdrop-saturate-0 backdrop-blur-0 shadow-none"
        maxWidth="2xl"
      >
        <NavbarContent className="">
          <NavbarBrand>
            <p className="font-bold text-inherit primary">ACME</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className=" primary font-semibold">
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem isActive className=" primary font-semibold">
            <Link href="/tea">Tea</Link>
          </NavbarItem>
          <NavbarItem className=" primary font-semibold">
            <Link href="/about">About</Link>
          </NavbarItem>
          <NavbarItem className=" primary font-semibold">
            <Link href={"/product"}>
              <Badge
                color="danger"
                size="sm"
                content={(items && items.length) || 0}
                isInvisible={isInvisible}
                shape="circle"
              >
                <ShoppingBag size={20} />
              </Badge>
            </Link>
          </NavbarItem>
          <NavbarItem isActive className=" primary font-semibold">
            {user && <Link href={routesMap[user?.role]}>Dashboard</Link>}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="">
          <NavbarItem className="hidden lg:flex">
            <ThemeSwitcher />
            {!user ? (
              <Link href="/login">
                <Button color="primary" variant="flat">
                  Sign In
                </Button>
              </Link>
            ) : (
              <Button
                onClick={handleLogoutUser}
                className=" text-white border border-red-500 bg-red-400"
                variant="flat"
              >
                Sign Out
              </Button>
            )}
          </NavbarItem>

          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
          />
        </NavbarContent>

        <NavbarMenu>
          {menuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link href="/">{item}</Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarSec;
