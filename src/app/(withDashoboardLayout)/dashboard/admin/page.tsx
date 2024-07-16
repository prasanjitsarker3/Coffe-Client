"use client";
import TotalSkeleton from "@/components/ChartSkeleton/TotalSkeleton";
import { useTotalMetaDataQuery } from "@/components/Redux/AdminApi/metaApi";
import {
  Check,
  Coffee,
  DollarSign,
  Loader,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  User,
} from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const OrderChart = dynamic(
  () => import("@/components/AdminPage/MetaData/OrderChart"),
  { ssr: false }
);
const OrderMonthChart = dynamic(
  () => import("@/components/AdminPage/MetaData/OrderMonthChart"),
  { ssr: false }
);
const ProductChart = dynamic(
  () => import("@/components/AdminPage/MetaData/ProductChart"),
  { ssr: false }
);

const AdminDashboardPage = () => {
  const { data, isLoading, error } = useTotalMetaDataQuery(undefined);
  if (isLoading) {
    <TotalSkeleton />;
  }
  const meta = data?.data ?? [];
  if (error) {
    return <h1>Error fetching data</h1>;
  }
  if (!meta || meta.length === 0) {
    return <TotalSkeleton />;
  }

  return (
    <div>
      {meta ? (
        <div className=" grid md:grid-cols-4 gap-12 p-10">
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[0] ?? 0}</h1>
            <Coffee size={24} />
            <h1 className="  font-bold text-lg">Total Products</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[1] ?? 0}</h1>
            <ShoppingCart size={24} />
            <h1 className="  font-bold text-lg">Ongoing Order</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[2] ?? 0}</h1>
            <Check size={24} />
            <h1 className="  font-bold text-lg">Order Delivered</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[3] ?? 0}</h1>
            <Loader size={24} />
            <h1 className="  font-bold text-lg">Order Pending</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[4] ?? 0}</h1>
            <ShoppingBag size={24} />
            <h1 className="  font-bold text-lg">Total Sell</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">
              {meta[5]?._sum?.totalPrice ?? 0}
            </h1>
            <DollarSign size={24} />
            <h1 className="  font-bold text-lg">Total Amount</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[6] ?? 0}</h1>
            <Trash2 size={24} />
            <h1 className="  font-bold text-lg">Cancel Order</h1>
          </div>
          <div className=" text-white space-y-3 font-exotwo bg-blue-500 p-3 rounded-md shadow-md flex flex-col items-center">
            <h1 className="   font-bold text-lg">{meta[7] ?? 0}</h1>
            <User size={24} />
            <h1 className="  font-bold text-lg">Total Users</h1>
          </div>
        </div>
      ) : (
        <TotalSkeleton />
      )}

      <div className=" grid md:grid-cols-2 gap-12 px-10">
        <ProductChart />
        <OrderChart />
      </div>
      <div className=" p-10">
        <OrderMonthChart />
      </div>
    </div>
  );
};

export default AdminDashboardPage;
