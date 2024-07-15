"use client";
import {
  useGetSingleOrderQuery,
  useGetSingleOrderSendMailMutation,
  useOrderStatusUpdateMutation,
} from "@/Components/Redux/AdminApi/Order/orderApi";
import emailSender from "@/Components/Utlities/emailSender";
import { generateOrderEmail } from "@/Components/Utlities/generateOrderEmail";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

const EmailSending = (params: any) => {
  const orderId = params.params.orderId;
  const { data, isLoading } = useGetSingleOrderQuery(orderId);
  const [sendEmail] = useGetSingleOrderSendMailMutation();
  const router = useRouter();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const deliveryData = data?.data;
  if (!deliveryData) {
    return <h1>No Order Data Found</h1>;
  }
  const handleEmailSend = async () => {
    const toastId = toast.loading("Processing...");
    try {
      const res = await sendEmail(orderId);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        router.push("/dashboard/admin/delivery");
      } else {
        toast.error("Select Status", { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error("Error updating status", { id: toastId, duration: 1000 });
    }
  };

  return (
    <div className="p-10">
      <div className=" w-full ">
        <div className="mt-6 w-full flex justify-center items-center">
          <div className=" border-2 border-slate-300 py-12 px-16">
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
              {deliveryData.products.map((productItem: any, index: number) => (
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
              ))}
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
                onClick={handleEmailSend}
                color="primary"
              >
                Delivery & Send Mail
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailSending;
