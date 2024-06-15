"use client";
import CategoryTable from "@/Components/AdminPage/Category/Categorytable";
import {
  useCreateCategoryMutation,
  useGetAllCategoryQuery,
} from "@/Components/Redux/AdminApi/TeaCategory/teaCategoryApi";
import { FileUploader } from "@/Components/Utlities/FileUploader";
import { imgUrlCreate } from "@/Components/Utlities/fileSendImgDB";
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
import { PlusIcon, UploadIcon } from "lucide-react";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

const imageToken = "fd868decd9f90f9dbfa35322ae2d7341";

const TeaCategoryPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { data, isLoading } = useGetAllCategoryQuery(undefined);
  const [file, setFile] = useState<File | null>(null);
  const [categoryName, setCategoryName] = useState("");
  const [createCategory, { isLoading: creating }] = useCreateCategoryMutation();

  const handleCreateCategory = async (onClose: () => void) => {
    const toastId = toast.loading("Creating Category...");

    const img = await imgUrlCreate(file);
    const newData = {
      name: categoryName,
      icon: img,
    };

    try {
      const res = await createCategory(newData);
      if (res?.data?.statusCode === 201) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        onClose();
      } else {
        //@ts-ignore
        toast.error(res?.message || res?.data?.message, {
          id: toastId,
          duration: 2000,
        });
        onClose();
      }
    } catch (err: any) {
      console.log(err?.message);
      onClose();
    }
  };

  return (
    <div className="py-8 px-6">
      <div className="mb-3">
        <Button
          onPress={onOpen}
          color="primary"
          variant="solid"
          endContent={<PlusIcon />}
          size="sm"
        >
          Add New
        </Button>
        <Modal size="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Modal Title
                </ModalHeader>
                <ModalBody>
                  <Input
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    size={"md"}
                    type="text"
                    label="Category Name"
                  />
                  <FileUploader file={file} setFile={setFile} />
                </ModalBody>
                <ModalFooter>
                  <Button
                    disabled={creating}
                    onClick={() => handleCreateCategory(onClose)}
                    fullWidth={true}
                    color="primary"
                  >
                    Submit
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </div>
      <CategoryTable data={data?.data} />
    </div>
  );
};

export default TeaCategoryPage;
