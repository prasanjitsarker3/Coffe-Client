/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { useGetAllCategoryQuery } from "@/components/Redux/AdminApi/TeaCategory/teaCategoryApi";
import {
  useDeleteSingleProductMutation,
  useGetAllProductQuery,
} from "@/components/Redux/AdminApi/TeaManament/teaManageApi";
import { dateFormatter } from "@/components/Utlities/dateFormater";
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
  Select,
  SelectItem,
} from "@nextui-org/react";
import {
  DeleteIcon,
  EditIcon,
  EyeIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
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
const TeaTable = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isSpecial, setIsSpecial] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  // Implement Tea Data
  useEffect(() => {
    if (searchTerm.length > 0) {
      setIsSpecial("");
      setCategoryId("");
    }
  }, [searchTerm]);

  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  if (!searchTerm.length) {
    if (isSpecial) query["isSpecial"] = isSpecial;
    if (categoryId) query["categoryId"] = categoryId;
  }

  const { data: productData, isLoading } = useGetAllProductQuery(query);
  const { data: categories, isLoading: categoryLoad } = useGetAllCategoryQuery(
    {}
  );
  const [deleteSingleProduct] = useDeleteSingleProductMutation();
  // End Tea Data

  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const data = productData?.data?.result;
  const metaData = productData?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage); // Update page state when page changes
  };

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
      <div className=" flex justify-between items-center gap-12 pb-3">
        <Input
          isClearable
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:max-w-[44%]"
          placeholder="Search by name..."
          startContent={<SearchIcon />}
        />
        <Select
          value={isSpecial}
          onChange={(e) => setIsSpecial(e.target.value)}
          size="sm"
          label="Filter By Special"
          className="max-w-xs"
        >
          <SelectItem value="" key={""}>
            All
          </SelectItem>
          <SelectItem value="Tea" key={"Tea"}>
            Tea
          </SelectItem>
          <SelectItem value="Coffee" key={"Coffee"}>
            Coffee
          </SelectItem>
        </Select>

        <Select
          size="sm"
          label="Filter By Category"
          className="max-w-xs"
          value={categoryId}
          onChange={(e) => setCategoryId(e.target.value)}
        >
          <SelectItem value="" key={""}>
            All
          </SelectItem>
          {categories?.data?.map((item: any) => (
            <SelectItem key={item.id} value={item.id}>
              {item.name}
            </SelectItem>
          ))}
        </Select>
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

export default TeaTable;
