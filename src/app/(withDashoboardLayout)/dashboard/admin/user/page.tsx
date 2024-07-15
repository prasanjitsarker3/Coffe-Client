"use client";
import UpdateUserStatus from "@/Components/AdminPage/User/UpdateUserStatus";
import {
  useDeleteUserMutation,
  useGetAllUserQuery,
} from "@/Components/Redux/AdminApi/User/userApi";
import { dateFormatter } from "@/Components/Utlities/dateFormater";
import {
  Button,
  Input,
  Pagination,
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
import { DeleteIcon, Pencil, SearchIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

const columns = [
  { name: "PHOTO", uid: "profilePhoto" },
  { name: "NAME", uid: "name" },
  { name: "EMAIL", uid: "email" },
  { name: "LOGIN DATE", uid: "createdAt" },
  { name: "STATUS", uid: "status" },
  { name: "ROLE", uid: "role" },
  { name: "ACTIONS", uid: "actions" },
];

const UserDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

  useEffect(() => {
    if (searchTerm.length > 0) {
      setRole("");
    }
  }, [searchTerm]);

  const query: Record<string, any> = {
    searchTerm,
    page,
    limit,
  };

  if (!searchTerm.length) {
    if (role) query["role"] = role;
  }
  const { data, isLoading } = useGetAllUserQuery(query);
  const [deleteUser] = useDeleteUserMutation();
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  const userData = data?.data?.data;
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleDeleteOrder = async (id: string) => {
    try {
      const res = await deleteUser(id);
      console.log("Check", res);
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
    (userData: any, columnKey: React.Key) => {
      const cellValue = userData[columnKey as any];

      switch (columnKey) {
        case "profilePhoto":
          return (
            <div className=" flex items-center ">
              <Image
                src={
                  userData?.profilePhoto ||
                  "https://img.freepik.com/free-vector/user-circles-set_78370-4704.jpg?ga=GA1.1.2060036261.1681297115&semt=sph"
                }
                width={50}
                height={50}
                alt=""
              />
            </div>
          );
        case "name":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">{userData?.name}</p>
            </div>
          );
        case "email":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">{userData?.email}</p>
            </div>
          );
        case "createdAt":
          return (
            <div className=" flex flex-col tex-sm ">
              <p className=" font-medium">
                {dateFormatter(userData?.createdAt)}
              </p>
            </div>
          );
        case "status":
          return <div className="flex flex-col">{userData?.status}</div>;
        case "role":
          return <div className="flex flex-col">{userData?.role}</div>;

        case "actions":
          return (
            <div className=" flex items-center gap-4">
              <Tooltip content="Update Role">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <UpdateUserStatus userData={userData} />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete User">
                <span
                  onClick={() => handleDeleteOrder(userData.id)}
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
    <div className=" p-10">
      <div className=" flex items-center gap-10  pb-5 w-1/3">
        <Input
          placeholder="Searching..."
          isClearable
          onChange={(e) => setSearchTerm(e.target.value)}
          startContent={<SearchIcon />}
        />
        <Select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="Select Role"
          aria-label="User role selection"
          className="max-w-xs"
        >
          <SelectItem value="" key={""}>
            All
          </SelectItem>
          <SelectItem value="ADMIN" key={"ADMIN"}>
            ADMIN
          </SelectItem>
          <SelectItem value="USER" key={"USER"}>
            USER
          </SelectItem>
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
          {userData &&
            userData?.map((item: { id: React.Key | null | undefined }) => (
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

export default UserDashboard;
