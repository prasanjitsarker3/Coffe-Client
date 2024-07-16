/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useDeleteOrderMutation } from "@/components/Redux/AdminApi/Order/orderApi";
import { useGetUserOrderQuery } from "@/components/Redux/UserApi/userOrderApi";
import { dateFormatter } from "@/components/Utlities/dateFormater";
import {
  Button,
  Input,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import {
  DeleteIcon,
  Eye,
  Locate,
  MapPin,
  Phone,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const columns = [
  { name: "PRODUCT", uid: "products" },
  { name: "CONTACT", uid: "contact" },
  { name: "TOTAL AMOUNT", uid: "totalPrice" },
  { name: "PAYMENT", uid: "paymentStatus" },
  { name: "ORDER DATE", uid: "createdAt" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const OrderPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
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
  console.log("Data", data?.data?.result);
  const orderData = data?.data?.result;
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteOrder = async (id: string) => {
    try {
      const res = await deleteOrder(id);
      console.log("res", res);
      if (res?.data?.statusCode === 200) {
        toast.success(res?.data?.message);
      } else {
        toast.error(res?.data?.message);
      }
    } catch (err: any) {
      console.log(err?.message);
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
        case "contact":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" flex items-center gap-1">
                <MapPin size={15} /> {orderData.address}
              </p>
              <p className=" font-medium flex items-center gap-1">
                <Phone size={12} /> {orderData.contact}
              </p>
            </div>
          );
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
        case "paymentStatus":
          return (
            <div className=" flex flex-col tex-sm ">
              <p>{(orderData?.payment && orderData.payment?.pay) || "N/A"}</p>
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
            <div className="flex flex-col">
              <p>{orderData?.status}</p>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="View Product">
                <Link href={`/dashboard/order/${orderData.id}`}>
                  <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                    <Eye />
                  </span>
                </Link>
              </Tooltip>
              <Tooltip color="danger" content="Delete Product">
                <span
                  onClick={() => handleDeleteOrder(orderData.id)}
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                >
                  <DeleteIcon />
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
    </div>
  );
};

export default OrderPage;
