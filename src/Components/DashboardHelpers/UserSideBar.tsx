"use client";

import {
  Car,
  Cog,
  DollarSign,
  History,
  Home,
  PackageCheck,
  PencilLine,
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./layoutContext";
import { Sidebar } from "./sidebar.style";
import { SidebarItem } from "./SidebarItem";
import { CollapseItems } from "./CollapseItems";
import { SidebarMenu } from "./SidebarMenu";

export const UserSidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? <div className={Sidebar.Overlay()} /> : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        {/* <div className={Sidebar.Header()}>
          {" "}
          <Link className="flex" href="/">
            <Cog />
            <p className="font-bold text-inherit px-4">APOLLO GEARS</p>
          </Link>
        </div> */}

        <div className="flex flex-col justify-between h-full bg-white shadow-2xl rounded-md  pt-3">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<Home />}
              isActive={pathname === "/dashboard"}
              href="/dashboard"
            />
            <SidebarMenu title="Main Menu">
              {/* <SidebarItem
                isActive={pathname === "/dashboard/rent-car"}
                title="Card Products"
                icon={<ShoppingCart />}
                href="/dashboard/rent-car"
              /> */}
              <SidebarItem
                isActive={pathname === "/dashboard/order"}
                href="/dashboard/order"
                title="Order Products"
                icon={<ShoppingBag />}
              />
              <SidebarItem
                isActive={pathname === "/dashboard/delivery"}
                href="/dashboard/delivery"
                title="Delivery Status"
                icon={<PackageCheck />}
              />
              <SidebarItem
                isActive={pathname === "/dashboard/review"}
                href="/dashboard/review"
                title="Review Product"
                icon={<Star />}
              />
              <SidebarItem
                isActive={pathname === "/dashboard/profile"}
                title="User Profile"
                href="/dashboard/profile"
                icon={<User />}
              />
              <SidebarItem
                isActive={pathname === "/dashboard/change-password"}
                title="Change Password"
                href="/dashboard/change-password"
                icon={<PencilLine />}
              />
              <SidebarItem
                isActive={pathname === "/"}
                href="/"
                title="Home"
                icon={<Home />}
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
