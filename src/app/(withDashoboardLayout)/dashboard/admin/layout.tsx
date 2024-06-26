import { Metadata } from "next";
import React from "react";
import AdminLayout from "./Layout/AdminLayout";

export const metadata: Metadata = {
  title: "User Dashboard",
  description: "Generated by create next app",
};

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return <AdminLayout>{children}</AdminLayout>;
};

export default AdminDashboardLayout;
