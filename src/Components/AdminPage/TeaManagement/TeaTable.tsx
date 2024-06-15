"use client";

import { useDeleteSingleProductMutation } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { dateFormatter } from "@/Components/Utlities/dateFormater";
import {
  Avatar,
  Chip,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  Table,
  Input,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Pagination,
} from "@nextui-org/react";
import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback } from "react";
import { toast } from "sonner";

const columns = [
  { name: "NAME", uid: "name" },
  { name: "Price", uid: "price" },
  { name: "Package", uid: "buyPackage" },
  { name: "Size", uid: "size" },
  { name: "Date", uid: "packageDate" },
  { name: "Sell", uid: "sellCount" },
  { name: "ACTIONS", uid: "actions" },
];

type IProps = {
  data: any;
  meta: any;
};
const TeaTable = ({ data, meta }: IProps) => {
  const [deleteSingleProduct] = useDeleteSingleProductMutation();
  const renderCell = useCallback((data: any, columnKey: React.Key) => {
    const cellValue = data[columnKey as any];

    const handleDeleteProduct = async (id: string) => {
      try {
        const res = await deleteSingleProduct(id);
        if (res?.data?.statusCode === 200) {
          toast.success(res?.data?.message);
        } else {
          //@ts-ignore
          toast.error(res?.message || res?.data?.message);
        }
      } catch (err: any) {
        console.log("Error", err?.message);
      }
    };

    switch (columnKey) {
      case "name":
        return (
          <div className="flex items-center gap-2">
            <Avatar src={data?.image} size="sm" />
            <div>
              <p className="font-bold">{data?.name}</p>
              <p className="text-sm text-gray-500">{data?.isSpecial}</p>
            </div>
          </div>
        );
      case "price":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 capitalize">
              Price: <span className=" font-bold">{data?.price}</span>
            </p>
            <p className="text-sm text-gray-500 capitalize">
              Discount: <span className=" font-bold">{data?.discount}</span>
            </p>
          </div>
        );
      case "size":
        return (
          <div className="flex flex-col">
            {data.size && (
              <div className="flex gap-1">
                {data.size.map((sizeItem: string, index: number) => (
                  <p key={index} className="text-sm text-gray-500 capitalize">
                    {sizeItem}
                  </p>
                ))}
              </div>
            )}
          </div>
        );

      case "packageDate":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 capitalize">
              {dateFormatter(data?.packageDate)}
            </p>
            <p className="text-sm text-gray-500 capitalize">
              {dateFormatter(data?.expiryDate)}
            </p>
          </div>
        );
      case "sell":
        return (
          <div className="flex flex-col">
            <p className="text-sm text-gray-500 capitalize">
              {data?.sellCount}
            </p>
          </div>
        );
      case "actions":
        return (
          <div className="flex items-center gap-2">
            <Tooltip content="Details">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href={`/dashboard/admin/tea/${data?.id}`}>
                  <EyeIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip content="Edit user">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                <Link href={`/dashboard/admin/tea/udpate/${data?.id}`}>
                  <EditIcon />
                </Link>
              </span>
            </Tooltip>
            <Tooltip content="Delete user">
              <span className="text-lg text-danger cursor-pointer active:opacity-50">
                <DeleteIcon onClick={() => handleDeleteProduct(data.id)} />
              </span>
            </Tooltip>
          </div>
        );
      default:
        return cellValue;
    }
  }, []);

  return (
    <div className=" py-8 px-6">
      <div className=" flex justify-between items-center pb-3">
        <Input
          isClearable
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<SearchIcon />}
        />
        <Dropdown>
          <DropdownTrigger>
            <Button variant="bordered" className="capitalize">
              Filter
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
          >
            <DropdownItem key="text">Text</DropdownItem>
            <DropdownItem key="number">Number</DropdownItem>
            <DropdownItem key="date">Date</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Link href={"/dashboard/admin/tea/create"}>
          <Button color="primary" endContent={<PlusIcon />}>
            Add New
          </Button>
        </Link>
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
          {data &&
            data?.map((item: any) => (
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
      <div className=" flex justify-center py-3">
        <Pagination showControls total={10} initialPage={1} />
      </div>
    </div>
  );
};

export default TeaTable;
