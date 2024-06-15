"use client";
import { NavbarWrapper } from "@/Components/Common/DashboardNavbar";
import { UserSidebarWrapper } from "@/Components/DashboardHelpers/UserSideBar";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <UserSidebarWrapper></UserSidebarWrapper>
      <NavbarWrapper>{children}</NavbarWrapper>
    </div>
  );
}
