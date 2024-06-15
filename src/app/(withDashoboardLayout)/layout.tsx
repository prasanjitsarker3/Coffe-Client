import React from "react";
import DashboardProviderLayout from "./layout/DashboardProvider";

const DashboardMainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <DashboardProviderLayout>{children}</DashboardProviderLayout>
    </div>
  );
};

export default DashboardMainLayout;
