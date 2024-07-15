"use client";
import { useGetSingleOrderQuery } from "@/Components/Redux/AdminApi/Order/orderApi";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { usePDF } from "react-to-pdf";

const VoiceDownload = (params: any) => {
  const orderId = params.params.orderId;
  const { data, isLoading } = useGetSingleOrderQuery(orderId);
  const { toPDF, targetRef } = usePDF({ filename: "order.pdf" });
  const router = useRouter();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  const deliveryData = data?.data;
  if (!deliveryData) {
    return <h1>No Order Data Found</h1>;
  }
  const handleDownload = () => {
    toPDF();
    router.push("/dashboard/admin/delivery");
  };
  return (
    <div>
      <div className="p-10">
        <div className=" w-full ">
          <div className="mt-6 w-full flex justify-center items-center">
            <div
              ref={targetRef}
              className=" border-2 border-slate-300 py-12 px-16"
            >
              <h1 className="text-center text-2xl ">
                The Daily Cup of Tea & Coffee
              </h1>
              <h2 className="text-xl font-semibold">Order Details</h2>
              <div className="mt-2 space-y-1">
                <p>Name:{deliveryData.user.name}</p>
                <p>Email:{deliveryData.user.email}</p>
                <p>Contact: {deliveryData.contact}</p>
                <p>Address: {deliveryData.address}</p>
                {/* <p>
              <strong>Transaction ID:</strong> {deliveryData.transactionId}
            </p> */}
              </div>
              <div className="mt-1">
                {deliveryData.products.map(
                  (productItem: any, index: number) => (
                    <div key={index} className=" flex items-center  gap-12">
                      <div className=" flex items-center gap-5 space-y-1">
                        <p>{productItem.product.name}</p>
                        <p>{productItem.size}</p>
                        <p>Q: {productItem.quantity}</p>
                      </div>
                      <div>
                        <p>${productItem.product.price}</p>
                      </div>
                    </div>
                  )
                )}
              </div>
              <div>
                {deliveryData?.payment && (
                  <div className=" space-y-1">
                    <p>Payment: {deliveryData?.payment?.pay}</p>
                    <p>Transaction: {deliveryData?.payment?.transactionId}</p>
                  </div>
                )}
              </div>
              <div className="my-2 border-b border-gray-200 px-12"></div>
              <div className="flex justify-between  items-center">
                <h2 className="text-base font-semibold">Total Price</h2>
                <p>${deliveryData.totalPrice}</p>
              </div>
              <div className=" pt-2 w-full">
                <Button
                  fullWidth={true}
                  size="sm"
                  onClick={handleDownload}
                  color="primary"
                >
                  Order Voice Download
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VoiceDownload;
