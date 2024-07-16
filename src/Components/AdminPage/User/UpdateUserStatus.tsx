"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Pencil } from "lucide-react";
import { toast } from "sonner";
import { useRoleUpdateMutation } from "@/components/Redux/AdminApi/User/userApi";

const items = ["SUPPER_ADMIN", "ADMIN", "USER"];
const UpdateUserStatus = (userData: any) => {
  const data = userData?.userData;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [roles, setRoles] = useState(data?.role || null);
  const [roleUpdate, isLoading] = useRoleUpdateMutation();

  const handleChangeRole = async (onClose: () => void) => {
    const toastId = toast.loading("Role Update Processing...");
    const roleData = {
      role: roles,
    };
    try {
      const res = await roleUpdate({ id: data.id, body: roleData });
      if (res?.data?.statusCode === 200) {
        onClose();
        toast.success(res?.data?.message, { id: toastId, duration: 1000 });
      } else {
        toast.error(res?.data?.message, { id: toastId, duration: 1000 });
      }
    } catch (err: any) {
      console.log(err?.message);
      toast.error("Error updating roles", { id: toastId, duration: 1000 });
    }
  };

  return (
    <div>
      <Pencil onClick={onOpen} />
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
                {data?.name} Role Change
              </ModalHeader>
              <ModalBody>
                <Select
                  isRequired
                  fullWidth={true}
                  defaultSelectedKeys={[data?.role]}
                  placeholder="Select a role"
                  aria-label="User role selection"
                  value={roles}
                  onChange={(e) => setRoles(e.target.value)}
                >
                  {items.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onClick={() => handleChangeRole(onClose)}
                >
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default UpdateUserStatus;
