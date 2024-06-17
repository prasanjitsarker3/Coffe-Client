import { Metadata } from "next";
import React from "react";
import UserLayout from "./Layout/UserLayout";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Generated by create next app",
};

const UserDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <UserLayout>{children}</UserLayout>
    </div>
  );
};

export default UserDashboardLayout;