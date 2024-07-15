/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useDeleteOrderMutation } from "@/Components/Redux/AdminApi/Order/orderApi";
import { useGetUserOrderQuery } from "@/Components/Redux/UserApi/userOrderApi";
import { dateFormatter } from "@/Components/Utlities/dateFormater";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Textarea,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import {
  Check,
  DeleteIcon,
  Eye,
  Locate,
  MapPin,
  Pencil,
  Phone,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

const columns = [
  { name: "PRODUCT", uid: "products" },
  { name: "TOTAL AMOUNT", uid: "totalPrice" },
  { name: "DELIVERY DATE", uid: "createdAt" },
  { name: "STATUS", uid: "status" },
  { name: "REVIEW", uid: "actions" },
];

const ReviewPage = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [searchTerm, setSearchTerm] = useState("");
  const reviewValue = useRef(null);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  const { data, isLoading } = useGetUserOrderQuery(query);
  const [deleteOrder, { isLoading: deleting }] = useDeleteOrderMutation();
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const orderData =
    data?.data?.result?.filter((item: any) => item?.status === "DELIVERY") ??
    [];
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleReview = (onClose: () => void) => {
    //@ts-ignore
    const res = reviewValue?.current.value;
    if (res.length > 0) {
      toast.success("Review Send");
      onClose();
    }
  };
  const renderCell = React.useCallback(
    (orderData: any, columnKey: React.Key) => {
      const cellValue = orderData[columnKey as any];

      const totalQuantity = orderData.products.reduce(
        (total: any, product: { quantity: any }) => total + product.quantity,
        0
      );

      switch (columnKey) {
        case "products":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">
                {/* Total Product::{orderData.products.length} */}
                {orderData?.products?.map((item: any, index: number) => (
                  <div key={index}>
                    <p>{item?.product.name}</p>
                  </div>
                ))}
              </p>
            </div>
          );
        case "totalPrice":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">$ {orderData?.totalPrice}</p>
            </div>
          );
        case "createdAt":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">
                {dateFormatter(orderData?.createdAt)}
              </p>
            </div>
          );
        case "status":
          return (
            <p className=" w-full flex items-center gap-4 text-green-800 text-center rounded-lg p-1">
              <Check size={15} />
              Complete
            </p>
          );

        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="View Product">
                <span
                  onClick={onOpen}
                  className="text-lg flex items-center gap-2 text-default-400 cursor-pointer active:opacity-50"
                >
                  <Pencil />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );
  return (
    <div className=" py-8 px-8">
      <div className=" flex justify-between py-3">
        <Input
          size="md"
          isClearable
          className=" w-60"
          placeholder="Search by name..."
          startContent={<SearchIcon />}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Table isStriped aria-label="Example table with custom cells">
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No Data Found"}>
          {orderData &&
            orderData?.map((item: { id: React.Key | null | undefined }) => (
              <TableRow key={item.id}>
                {columns.map((column) => (
                  <TableCell key={column.uid}>
                    {renderCell(item, column.uid)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <div className=" flex justify-center py-3">
        <Pagination
          total={countPage}
          page={page}
          showControls
          onChange={handlePageChange}
        />
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
              <ModalHeader className="flex flex-col gap-1">Review</ModalHeader>
              <ModalBody>
                <Textarea
                  ref={reviewValue}
                  rows={3}
                  placeholder="Given review..."
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onClick={() => handleReview(onClose)}>
                  Send Review
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default ReviewPage;
