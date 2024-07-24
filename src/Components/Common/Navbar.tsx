"use client";
import React, { useEffect, useState } from "react";
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
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { RootState } from "../Redux/store";
import Image from "next/image";
import useAuthUser from "../Lib/authUser";
import { useAppDispatch, useAppSelector } from "../Redux/Provider/hook";
import { logOut } from "../Redux/authSlice";
import { logoutUser } from "../Server/logoutUser";

const NavbarSec = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isInvisible, setIsInvisible] = React.useState(false);
  const user = useAuthUser();
  const dispatch = useAppDispatch();
  const items = useAppSelector((state: RootState) => state.cart.items);
  const [scrolling, setScrolling] = useState(false);

  const routesMap: Record<string, string> = {
    USER: "/dashboard",
    ADMIN: "/dashboard/admin",
  };

  const handleLogoutUser = () => {
    dispatch(logOut());
    logoutUser(router, "/");
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar
        onMenuOpenChange={setIsMenuOpen}
        className={`${
          scrolling
            ? " fixed w-full z-40 bg-white text-[#00864a] backdrop-filter-none  backdrop-saturate-0 backdrop-blur-0 shadow-none md:px-24 px-8"
            : "bg-background primary fixed w-full z-40 bg-none backdrop-filter-none bg-opacity-0 backdrop-saturate-0 backdrop-blur-0 shadow-none md:px-24 px-8"
        }`}
        maxWidth="full"
      >
        <NavbarContent className="">
          <NavbarBrand className="flex items-center cursor-pointer">
            <Image
              src={"https://cdn-icons-png.flaticon.com/128/10021/10021745.png"}
              width={30}
              height={30}
              alt=""
            />
            <p className="font-bold text-inherit pt-1">The Daily Cup</p>
          </NavbarBrand>
        </NavbarContent>

        <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem className="  font-semibold">
            <Link href="/">Home</Link>
          </NavbarItem>
          <NavbarItem isActive className="  font-semibold">
            <Link href="/tea">Tea</Link>
          </NavbarItem>
          <NavbarItem className="  font-semibold">
            <Link href="/about">About</Link>
          </NavbarItem>
          <NavbarItem className="  font-semibold">
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
          <NavbarItem isActive className=" font-semibold">
            {user && <Link href={routesMap[user?.role]}>Dashboard</Link>}
          </NavbarItem>
        </NavbarContent>

        <NavbarContent justify="end" className="">
          <NavbarItem className="hidden lg:flex">
            {/* <ThemeSwitcher /> */}
            {!user ? (
              <Link href="/login">
                <Button
                  size="sm"
                  className="text-white bg-blue-500"
                  variant="flat"
                >
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
          <NavbarContent className=" flex flex-col" justify="center">
            <NavbarItem className="  font-semibold">
              <Link href="/">Home</Link>
            </NavbarItem>
            <NavbarItem isActive className="  font-semibold">
              <Link href="/tea">Tea</Link>
            </NavbarItem>
            <NavbarItem className="  font-semibold">
              <Link href="/about">About</Link>
            </NavbarItem>
            <NavbarItem className="  font-semibold">
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
            <NavbarItem isActive className=" font-semibold">
              {user && <Link href={routesMap[user?.role]}>Dashboard</Link>}
            </NavbarItem>

            <NavbarItem className="">
              {!user ? (
                <Link href="/login">
                  <Button color="primary" variant="flat">
                    Sign In
                  </Button>
                </Link>
              ) : (
                <Button
                  size="sm"
                  onClick={handleLogoutUser}
                  className=" text-white border border-red-500 bg-red-400"
                  variant="flat"
                >
                  Sign Out
                </Button>
              )}
            </NavbarItem>
          </NavbarContent>
        </NavbarMenu>
      </Navbar>
    </div>
  );
};

export default NavbarSec;
