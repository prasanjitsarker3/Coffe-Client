"use client";
import React, { useState } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  User,
  Avatar,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Input,
  ModalFooter,
  Button,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import { dateFormatter } from "@/Components/Utlities/dateFormater";
import { useDeleteCategoryMutation } from "@/Components/Redux/AdminApi/TeaCategory/teaCategoryApi";
import { toast } from "sonner";
import { FileUploader } from "@/Components/Utlities/FileUploader";

type IProps = {
  data: Array<{
    id: string;
    name: string;
    icon: string;
    createdAt: string;
    updateAt: string;
    isDeleted: boolean;
  }>;
};

const columns = [
  { name: "ICON", uid: "icon" },
  { name: "NAME", uid: "name" },
  { name: "CREATED AT", uid: "createdAt" },
  { name: "ACTIONS", uid: "actions" },
];

const CategoryTable = ({ data }: IProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const {
    isOpen: isEditModalOpen,
    onOpen: onEditModalOpen,
    onClose: onEditModalClose,
  } = useDisclosure();
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null
  );
  const [categoryName, setCategoryName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [deleteCategory, { isLoading }] = useDeleteCategoryMutation();
  const renderCell = React.useCallback((data: any, columnKey: React.Key) => {
    const cellValue = data[columnKey as any];

    const handleDelete = async (id: string) => {
      const toastId = toast.loading("Deleting...");
      try {
        const res = await deleteCategory(id);
        console.log(res);
        if (res?.data?.statusCode === 200) {
          toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        } else {
          //@ts-ignore
          toast.error(res?.message || res?.data?.message, {
            id: toastId,
            duration: 2000,
          });
        }
      } catch (err: any) {
        console.log(err?.message);
      }
    };

    const handleEdit = (id: string) => {
      setSelectedCategoryId(id);
      onEditModalOpen();
    };

    switch (columnKey) {
      case "icon":
        return <Avatar src={data?.icon} size="md" />;
      case "createdAt":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-sm capitalize">
              {dateFormatter(data?.createdAt)}
            </p>
          </div>
        );

      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Edit item">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <EditIcon onClick={() => handleEdit(data.id)} />
              </span>
            </Tooltip>
            <Tooltip color="danger" content="Delete item">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => handleDelete(data.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  const handleUpdatedCategory = async () => {
    const toastId = toast.loading("Updating Category...");
    try {
      console.log("Updating category with ID:", selectedCategoryId);
      toast.success("Category updated successfully!", {
        id: toastId,
        duration: 2000,
      });
      onEditModalClose();
    } catch (error) {
      console.error("Failed to update category:", error);
      toast.error("Failed to update category. Please try again later.", {
        id: toastId,
        duration: 2000,
      });
    }
  };

  return (
    <div>
      <Table isStriped aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              //   css={{ width: "25%" }}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No Data Found"}>
          {data &&
            data?.map((item) => (
              <TableRow key={item.id}>
                {columns.map((column) => (
                  <TableCell key={column.uid} className="w-[25%">
                    {renderCell(item, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Modal size="sm" isOpen={isEditModalOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Edit Category
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
              onClick={handleUpdatedCategory}
              fullWidth={true}
              color="primary"
            >
              Submit
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default CategoryTable;
