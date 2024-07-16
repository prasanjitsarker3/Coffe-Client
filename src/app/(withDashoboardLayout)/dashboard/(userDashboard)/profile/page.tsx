"use client";
import {
  useGetMeQuery,
  useUpdateProfileInfoMutation,
} from "@/components/Redux/AdminApi/User/userApi";
import { imgUrlCreate } from "@/components/Utlities/fileSendImgDB";
import ImageUploader from "@/components/Utlities/imageUploader";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import { Pencil } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

const UserProfile = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const { data, isLoading } = useGetMeQuery(undefined);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [updateProfile, { isLoading: Updating }] =
    useUpdateProfileInfoMutation();
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const user = data?.data;
  console.log(user);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data: any) => {
    const toastId = toast.loading("Updating...");
    try {
      const img = await imgUrlCreate(selectedFile);
      const updateData = {
        profilePhoto: img,
        address: data?.address,
        name: data?.name,
      };
      const res = await updateProfile(updateData);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data.message, { id: toastId, duration: 2000 });
        onClose();
        reset();
      } else {
        toast.error(res?.data?.message, { id: toastId, duration: 2000 });
      }
    } catch (err: any) {
      console.log(err?.message);
    }
  };
  return (
    <div>
      <div className=" static w-[70%] mx-auto mt-32">
        {/* Banner Photo */}
        <div className="relative w-3/4 h-full mx-auto">
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex justify-center h-[200px] w-[200px] rounded-full">
            <Image
              src={
                user?.profilePhoto ||
                "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.2060036261.1681297115&semt=sph"
              }
              alt="profile"
              width={300}
              height={300}
              className="rounded-full"
            />
          </div>
        </div>

        {/* Information Section */}
        <div className=" w-full bg-slate-100 shadow-md ">
          <div className="pt-20">
            <div className=" grid md:grid-cols-3 p-10 w-full">
              <h1 className=" font-exotwo text-xl ">Name: {user?.name}</h1>
              <h1 className=" font-exotwo text-xl ">Email: {user?.email}</h1>
              <h1 className=" font-exotwo text-xl ">Role: User</h1>
              <h1 className=" font-exotwo text-xl ">Status: Active</h1>
              <h1 className=" font-exotwo text-xl ">
                Address: {user?.address || "N/A"}
              </h1>
              <h1 className=" font-exotwo text-xl ">
                Contact: {user?.contact || "N/A"}
              </h1>
            </div>
            <div className=" pb-5 flex justify-center ">
              <Button
                onClick={onOpen}
                color="primary"
                className=" flex items-center gap-3"
              >
                Update <Pencil size={20} />
              </Button>
            </div>
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
                    Update User Information
                  </ModalHeader>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <ModalBody>
                      <Input placeholder="Name" {...register("name")} />
                      <Input placeholder="Address" {...register("address")} />
                      <Input placeholder="Contact" {...register("contact")} />
                      <ImageUploader
                        selectedFile={selectedFile}
                        setSelectedFile={setSelectedFile}
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                      <Button type="submit" color="primary">
                        Update Profile
                      </Button>
                    </ModalFooter>
                  </form>
                </>
              )}
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
