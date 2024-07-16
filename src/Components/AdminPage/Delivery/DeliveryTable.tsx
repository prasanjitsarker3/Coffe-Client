"use client";
import {
  useDeleteOrderMutation,
  useGetAllOrderDeliveryQuery,
  useGetAllOrderQuery,
} from "@/components/Redux/AdminApi/Order/orderApi";
import { dateFormatter } from "@/components/Utlities/dateFormater";
import {
  Button,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, Eye } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "sonner";

const columns = [
  { name: "USER", uid: "user" },
  { name: "PRODUCT", uid: "products" },
  { name: "TOTAL AMOUNT", uid: "totalPrice" },
  { name: "PAYMENT", uid: "paymentStatus" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const DeliveryTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  const { data, isLoading } = useGetAllOrderDeliveryQuery(query);
  const [deleteOrder, { isLoading: deleting }] = useDeleteOrderMutation();

  const orderData = data?.data?.result;
  const metaData = data?.data?.meta;
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };
  const handleDelete = async (id: string) => {
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
        case "user":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">{orderData.user?.name}</p>
              <p>{orderData.user?.email}</p>
            </div>
          );
        case "products":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">
                Total Product::{orderData.products.length}
              </p>
              <p>T Quantity:{totalQuantity}</p>
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
              <p className=" font-medium">Status:{orderData.paymentStatus}</p>
              <p>
                Way:{(orderData?.payment && orderData.payment?.pay) || "N/A"}
              </p>
            </div>
          );
        case "status":
          return <div className="flex flex-col">{orderData?.status}</div>;

        case "actions":
          return (
            <div className=" flex gap-2">
              {orderData?.status == "COMFIRM" ? (
                <Link href={`/dashboard/admin/delivery/email/${orderData.id}`}>
                  <Button size="sm" color="primary">
                    Delivery | Email Send
                  </Button>
                </Link>
              ) : (
                <Button size="sm" color="success">
                  Delivery On Going
                </Button>
              )}

              <Link href={`/dashboard/admin/delivery/voice/${orderData.id}`}>
                {" "}
                <Button size="sm" color="secondary">
                  Voice Download
                </Button>
              </Link>
              <Button
                onClick={() => handleDelete(orderData.id)}
                size="sm"
                color="danger"
              >
                Cancel Order
              </Button>
            </div>
          );
        default:
          return cellValue;
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <div className=" p-10">
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

export default DeliveryTable;
