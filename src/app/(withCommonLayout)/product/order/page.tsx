"use client";
import useAuthUser from "@/components/Lib/authUser";
import FromProvider from "@/components/ReactHook/FormProvider";
import PTInput from "@/components/ReactHook/TInput";
import {
  useCashOnPaymentMutation,
  useCreateOrderMutation,
  useOnlinePaymentMutation,
} from "@/components/Redux/AdminApi/Order/orderApi";
import { clearCart } from "@/components/Redux/cartSlice";
import { clearCheckoutData } from "@/components/Redux/checkoutSlice";
import {
  useAppDispatch,
  useAppSelector,
} from "@/components/Redux/Provider/hook";
import { RootState } from "@/components/Redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validation = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z.string({ required_error: "Email is required" }),
  contact: z.string({ required_error: "Contact is required" }),
  address: z.string({ required_error: "Address is required" }),
});

const ProductOrderPage = () => {
  const items = useAppSelector((state: RootState) => state.checkout);
  const router = useRouter();
  const user = useAuthUser();
  const [createOrder, { isLoading }] = useCreateOrderMutation();
  const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();
  const [orderId, setOrderId] = useState<string | null>(null);
  const [cashOnPayment, { isLoading: cashLoading }] =
    useCashOnPaymentMutation();
  const [onlinePayment, { isLoading: onlinePaying }] =
    useOnlinePaymentMutation();
  const dispatch = useAppDispatch();

  const defaultValue = {
    name: user.name,
    email: user.email,
  };
  const handleCreateTea = async (values: FieldValues) => {
    const orderData = {
      ...items,
      userId: user?.id,
      contact: values.contact,
      address: values.address,
    };

    try {
      const res = await createOrder(orderData);
      if (res?.data?.statusCode === 201) {
        setOrderId(res?.data?.data?.id);
        onOpen();
      } else {
        console.log(res);
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const handleCashOnPayment = async () => {
    const cashData = {
      orderId: orderId,
      amount: items.totalPrice,
    };
    try {
      const res = await cashOnPayment(cashData);
      if (res?.data?.statusCode === 201) {
        dispatch(clearCart());
        dispatch(clearCheckoutData());
        onClose();
        router.push("/");
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message || "Something went wrong");
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };

  const handleOnlinePayment = async () => {
    try {
      console.log("Id", orderId);
      //@ts-ignore
      const res = await onlinePayment(orderId);
      console.log("Check", res);
      if (res?.data?.data?.paymentUrl) {
        console.log(res.data.data.paymentUrl);
        router.push(res.data.data.paymentUrl);
        dispatch(clearCart());
        dispatch(clearCheckoutData());
        onClose();

        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message || "Something went wrong");
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };
  return (
    <div className=" pt-24 bg-slate-100 h-screen">
      <div className=" flex justify-center gap-12 ">
        <div className="border-2 border-blue-500 m-3 p-4 rounded-lg bg-white shadow-lg">
          <FromProvider
            onSubmit={handleCreateTea}
            resolver={zodResolver(validation)}
            defaultValues={defaultValue}
          >
            <div className=" grid md:grid-cols-2 gap-6 w-full">
              <PTInput name="name" label="Name" />
              <PTInput name="email" label="Email" />
              <PTInput name="contact" label="Contact Number" />
              <PTInput name="address" label="Delivery Address" />
            </div>
            <div>
              <Button
                type="submit"
                disabled={isLoading}
                isDisabled={isLoading}
                className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
              >
                Confirm Order
              </Button>
              <button className="w-full py-2 mt-4 text-white bg-red-500 rounded-lg hover:bg-red-600 transition">
                Cancel Order
              </button>
            </div>
          </FromProvider>
        </div>
        <div>
          <div className=" h-72 border-2 border-blue-500 m-3 p-4 rounded-lg bg-white shadow-lg">
            <div className="space-y-3 text-gray-800">
              <h1 className="text-xl font-semibold">Order Summary</h1>

              <div className="flex justify-between">
                <span>Item Count:</span>
                <span>{items && items.products.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Product Price:</span>
                <span>$ {items && items.totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Open Section */}
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          isDismissable={false}
          isKeyboardDismissDisabled={true}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Payment Method Select
                </ModalHeader>
                <ModalBody>
                  <p>Total Payment: ${items.totalPrice}</p>
                </ModalBody>
                <ModalFooter className=" mb-5">
                  <Button
                    fullWidth={true}
                    onClick={handleCashOnPayment}
                    color="secondary"
                    isDisabled={cashLoading}
                    disabled={cashLoading}
                  >
                    Cash On Payment
                  </Button>
                  <Button
                    fullWidth={true}
                    onClick={handleOnlinePayment}
                    isDisabled={onlinePaying}
                    disabled={onlinePaying}
                    color="primary"
                  >
                    Online Payment
                  </Button>
                  <p
                    className="text-yellow-500 bg-yellow-100 border border-yellow-400 rounded-lg px-4 py-3 relative"
                    role="alert"
                  >
                    <span className="block sm:inline">
                      After Online payment, the URL refreshes.
                    </span>
                    <span className="absolute top-0 right-0 border-l-4 border-yellow-500 text-yellow-600 p-2">
                      Please note that SSL IPN URLs are not supported on Vercel
                      deployments.
                    </span>
                  </p>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};

export default ProductOrderPage;
