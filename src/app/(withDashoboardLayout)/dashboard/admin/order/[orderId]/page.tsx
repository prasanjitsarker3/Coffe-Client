"use client";
import {
  useGetSingleOrderQuery,
  useOrderStatusUpdateMutation,
} from "@/components/Redux/AdminApi/Order/orderApi";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "sonner";

const OrderDetailPage = (params: any) => {
  const orderId = params?.params?.orderId;
  const { data, isLoading } = useGetSingleOrderQuery(orderId);
  const router = useRouter();
  const OrderStatus = ["INPROGRESS", "COMFIRM", "DELIVERY", "CANCELED"];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedStatus, setSelectedStatus] = useState("");
  const [updateStatus] = useOrderStatusUpdateMutation();

  const handleChange = (value: any) => {
    setSelectedStatus(value);
  };

  const handleSubmit = async (onClose: () => void) => {
    const toastId = toast.loading("Status Update Processing...");
    const statusData = {
      status: selectedStatus,
    };
    try {
      const res = await updateStatus({ id: orderId, body: statusData });
      if (res?.data?.statusCode === 200) {
        onClose();
        router.push("/dashboard/admin/order");
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
      } else {
        toast.error("Select Status", { id: toastId, duration: 1000 });
        onClose();
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error("Error updating status", { id: toastId, duration: 1000 });
    }
  };

  if (isLoading) {
    return <h1 className="text-center text-2xl">Loading ....</h1>;
  }

  const order = data?.data;

  if (!order) {
    return (
      <h1 className="text-center text-2xl text-red-500">No order found</h1>
    );
  }

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-semibold mb-4 text-[#00cd71]">
        Order Details
      </h1>
      <div className=" w-full flex fle-col md:flex-row gap-12  border-2 border-blue-700 rounded-md shadow-md p-5">
        <div className="md:w-1/3 w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <div className=" space-y-4">
            <p>
              <strong>Name:</strong> {order.user.name}
            </p>
            <p>
              <strong>Email:</strong> {order.user.email}
            </p>
            <p>
              <strong>Address:</strong> {order.address}
            </p>
            <p>
              <strong>Contact:</strong> {order.contact}
            </p>
          </div>
        </div>
        <div className="md:w-1/3 w-full mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Order Information</h2>
          <div className=" space-y-2">
            <p>
              <strong>Order ID:</strong> {order.id}
            </p>
            <p>
              <strong>Total Price:</strong> ${order.totalPrice}
            </p>
            <p>
              <strong>Status:</strong> {order.status}
            </p>
            <p>
              <strong>Payment Status:</strong> {order.paymentStatus}
            </p>
          </div>
        </div>
        {order?.payment && (
          <div className="md:w-1/3 w-full mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
            <div className=" space-y-2">
              <p>
                <strong>Amount:</strong> ${order.payment.amount}
              </p>
              <p>
                <strong>Payment Method:</strong> {order.payment.pay}
              </p>
              <p>
                <strong>Transaction ID:</strong> {order.payment.transactionId}
              </p>
              <p>
                <strong>Created At:</strong>{" "}
                {new Date(order.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className=" pt-6">
        <div className="bg-white p-6 border-2 border-blue-600 rounded-lg shadow-lg mb-6">
          <h2 className="text-2xl font-semibold mb-4">Products</h2>
          <div className=" flex flex-col md:flex-row">
            {order.products.map((item: any, index: number) => (
              <div key={index} className="border p-4 mb-4 rounded-lg">
                <p>
                  <strong>Product Name:</strong> {item.product.name}
                </p>
                <p>
                  <strong>Quantity:</strong> {item.quantity}
                </p>
                <p>
                  <strong>Size:</strong> {item.size}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className=" flex justify-center w-72 mx-auto">
        {" "}
        <Button
          onClick={onOpen}
          className=" mt-0 pt-0 w-full flex justify-center bg-[#00cd71] text-white"
        >
          Order Confirm
        </Button>
      </div>

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
                Update Order Status
              </ModalHeader>
              <ModalBody>
                <p>
                  Update the status of the order for{" "}
                  <strong>{order.user.name}</strong>.
                </p>
                <Select
                  label="Select Status"
                  value={selectedStatus}
                  // defaultSelectedKeys={[OrderStatus[0]]}
                  onChange={(e) => handleChange(e.target.value)}
                >
                  {OrderStatus.map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={() => handleSubmit(onClose)}>
                  Update Status
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default OrderDetailPage;
