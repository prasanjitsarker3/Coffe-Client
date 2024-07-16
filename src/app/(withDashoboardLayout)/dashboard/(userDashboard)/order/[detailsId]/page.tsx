"use client";
import { SingleProductSkeleton } from "@/Components/ChartSkeleton/TotalSkeleton";
import { useGetSingleOrderQuery } from "@/Components/Redux/AdminApi/Order/orderApi";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const ProductDetails = (params: { params: any }) => {
  const orderId = params.params.detailsId;
  const { data, isLoading } = useGetSingleOrderQuery(orderId);
  if (isLoading) {
    <SingleProductSkeleton />;
  }
  const order = data?.data;

  if (!order) {
    return <SingleProductSkeleton />;
  }
  return (
    <div className=" w-[70%] mx-auto mt-5">
      <div className="  border-2 border-gray-200  p-10">
        <h1 className=" py-3  text-slate-800">Order Tracking Id:{order?.id}</h1>
        <div>
          <div className=" grid md:grid-cols-2 gap-3">
            <h1 className=" border border-slate-100 bg-gray-50 p-1">
              Name:{order?.user?.name}
            </h1>
            <h1 className=" border border-slate-100 bg-gray-50 p-1">
              Email:{order?.user?.email}
            </h1>
            <h1 className=" border border-slate-100 bg-gray-50 p-1">
              Address:{order?.address}
            </h1>
            <h1 className=" border border-slate-100 bg-gray-50 p-1">
              Contact:{order?.contact}
            </h1>

            <div>
              <div className=" flex items-center justify-between border border-slate-100 bg-gray-50 p-1">
                <h1>Name</h1> <h1>Quantity</h1> <h1>Size</h1> <h1>Price</h1>
              </div>
              {order?.products?.map((item: any, index: number) => (
                <div
                  key={index}
                  className=" flex items-center justify-between space-y-3"
                >
                  <h1>{item?.product.name}</h1>
                  <h1>{item?.quantity}</h1>
                  <h1>{item?.size}</h1>
                  <h1>{item?.product.price}</h1>
                </div>
              ))}
            </div>
            <div>
              <h1 className=" border border-slate-100 bg-gray-50 p-1">
                Status:{order?.status}
              </h1>
              {order?.payment && (
                <div className=" space-y-2 mt-2">
                  <h1 className=" border border-slate-100 bg-gray-50 p-1">
                    Transaction:{order?.payment?.transactionId}
                  </h1>
                  <h1 className=" border border-slate-100 bg-gray-50 p-1">
                    Payment:{order?.payment?.pay}
                  </h1>
                  <h1 className=" border border-slate-100 bg-gray-50 p-1">
                    Amount:{order?.payment?.amount}
                  </h1>
                </div>
              )}
            </div>
            <h1 className=" border border-slate-100 bg-gray-50 p-1 font-semibold text-right">
              Total Price: $ {order?.totalPrice}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
