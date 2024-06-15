"use client";
import { SidebarContext } from "@/Components/DashboardHelpers/layoutContext";
import React, { useState } from "react";

const DashboardProviderLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const handleToggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  return (
    <SidebarContext.Provider
      value={{
        collapsed: sidebarOpen,
        setCollapsed: handleToggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export default DashboardProviderLayout;
