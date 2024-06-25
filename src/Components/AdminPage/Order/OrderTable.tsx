import { useGetAllOrderQuery } from "@/Components/Redux/AdminApi/Order/orderApi";
import { dateFormatter } from "@/Components/Utlities/dateFormater";
import {
  Button,
  Input,
  Select,
  SelectItem,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
} from "@nextui-org/react";
import { DeleteIcon, EditIcon, SearchIcon } from "lucide-react";
import React from "react";

const columns = [
  { name: "USER", uid: "user" },
  { name: "CONTACT", uid: "contact" },
  { name: "PRODUCT", uid: "products" },
  { name: "TOTAL AMOUNT", uid: "totalPrice" },
  { name: "CREATED AT", uid: "createdAt" },
  { name: "STATUS", uid: "status" },
  { name: "ACTIONS", uid: "actions" },
];

const OrderTable = () => {
  const { data, isLoading } = useGetAllOrderQuery({});
  const orderData = data?.data?.result;
  const metaData = data?.data?.meta;
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log("Data", orderData);
  console.log("Meta", metaData);
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
        case "contact":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">PH:{orderData.contact}</p>
              <p>AD:{orderData.address}</p>
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
              <Button size="sm" color="secondary">
                {orderData?.status}
              </Button>
            </div>
          );

        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Edit item">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete item">
                <span className="text-lg text-danger cursor-pointer active:opacity-50">
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
        />
        <Select size="sm" label="Filter" className=" w-60">
          <SelectItem key={"First"}>First</SelectItem>
          <SelectItem key={"Second"}>Second</SelectItem>
          <SelectItem key={"All"}>All</SelectItem>
        </Select>
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
    </div>
  );
};

export default OrderTable;
