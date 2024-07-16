"use client";

import { NavbarWrapper } from "@/components/Common/DashboardNavbar";
import { AdminSidebarWrapper } from "@/components/DashboardHelpers/AdminSideBar";

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
