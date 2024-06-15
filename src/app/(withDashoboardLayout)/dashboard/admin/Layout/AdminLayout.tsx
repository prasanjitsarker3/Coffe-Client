"use client";

import { NavbarWrapper } from "@/Components/Common/DashboardNavbar";
import { AdminSidebarWrapper } from "@/Components/DashboardHelpers/AdminSideBar";

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <AdminSidebarWrapper></AdminSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
