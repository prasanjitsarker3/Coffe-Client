"use client";

import {
  Car,
  Cog,
  Component,
  DollarSign,
  HandCoins,
  History,
  Home,
  PackageCheck,
  PencilLine,
  ShoppingBag,
  ShoppingCart,
  Star,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSidebarContext } from "./layoutContext";
import { Sidebar } from "./sidebar.style";
import { SidebarItem } from "./SidebarItem";
import { CollapseItems } from "./CollapseItems";
import { SidebarMenu } from "./SidebarMenu";

export const AdminSidebarWrapper = () => {
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
        <div className="flex flex-col justify-between h-full bg-white shadow-2xl rounded-md  pt-3">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<Home />}
              isActive={pathname === "/dashboard/admin"}
              href="/dashboard/admin"
            />
            <SidebarMenu title="Main Menu">
              <SidebarItem
                isActive={pathname === "/dashboard/admin/category"}
                title="Tea Category"
                icon={<Component />}
                href="/dashboard/admin/category"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/tea"}
                title="Tea Management"
                icon={<ShoppingCart />}
                href="/dashboard/admin/tea"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/order"}
                title="Order Management"
                icon={<ShoppingBag />}
                href="/dashboard/admin/order"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/delivery"}
                title="Delivery Manage"
                icon={<PackageCheck />}
                href="/dashboard/admin/delivery"
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/user"}
                title="User Management"
                href="/dashboard/admin/user"
                icon={<Users />}
              />
              <SidebarItem
                isActive={pathname === "/dashboard/admin/change-password"}
                title="Change Password"
                href="/dashboard/admin/change-password"
                icon={<PencilLine />}
              />
              <SidebarItem
                isActive={pathname === "/reports"}
                title="Home"
                icon={<Home />}
                href="/"
              />
            </SidebarMenu>
          </div>
        </div>
      </div>
    </aside>
  );
};
