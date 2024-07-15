"use client";
import OrderChart from "@/Components/AdminPage/MetaData/OrderChart";
import OrderMonthChart from "@/Components/AdminPage/MetaData/OrderMonthChart";
import ProductChart from "@/Components/AdminPage/MetaData/ProductChart";
import TotalSkeleton from "@/Components/ChartSkeleton/TotalSkeleton";
import { useTotalMetaDataQuery } from "@/Components/Redux/AdminApi/metaApi";
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
import React from "react";

const AdminDashboardPage = () => {
  const { data, isLoading } = useTotalMetaDataQuery(undefined);
  if (isLoading) {
    <TotalSkeleton />;
  }
  const meta = data?.data ?? [];
  console.log("Meta", meta);
  console.log(meta);

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
    // </div>
  );
};

export default AdminDashboardPage;
