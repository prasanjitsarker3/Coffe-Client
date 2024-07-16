"use client";
import { NavbarWrapper } from "@/components/Common/DashboardNavbar";
import { UserSidebarWrapper } from "@/components/DashboardHelpers/UserSideBar";

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
