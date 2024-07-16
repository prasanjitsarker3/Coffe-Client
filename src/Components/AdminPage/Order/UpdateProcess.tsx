"use client";
import { useOrderStatusUpdateMutation } from "@/components/Redux/AdminApi/Order/orderApi";
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
import { EditIcon } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

interface Product {
  id: string;
  address: string;
  contact: string;
  createdAt: string;
  payment: string | null;
  paymentStatus: string;
  products: Array<any>;
  status: any;
  totalPrice: number;
  transactionId: string;
  updatedAt: string;
  user: {
    name: string;
    email: string;
  };
  userId: string;
}

const UpdateProcess = ({ product }: { product: any }) => {
  const OrderStatus = ["INPROGRESS", "COMFIRM", "DELIVERY", "CANCELED"];

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectStatus, setSelectedStatus] = useState("");
  const [updateStatus, isLoading] = useOrderStatusUpdateMutation();

  const handleChange = (value: any) => {
    setSelectedStatus(value);
  };

  const handleSubmit = async (onClose: () => void) => {
    const toastId = toast.loading("Status Update Processing...");
    const statusData = {
      status: selectStatus,
    };
    try {
      const res = await updateStatus({ id: product.id, body: statusData });
      if (res?.data?.statusCode === 200) {
        onClose();
        toast.success(res?.data?.message, { id: toastId, duration: 1000 });
      } else {
        toast.error("Select Status", { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error("Error updating status", { id: toastId, duration: 1000 });
    }
  };

  return (
    <div>
      <EditIcon onClick={onOpen} />

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
                  <strong>{product.user.name}</strong>.
                </p>
                <Select
                  label="Select Status"
                  value={selectStatus}
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

export default UpdateProcess;
