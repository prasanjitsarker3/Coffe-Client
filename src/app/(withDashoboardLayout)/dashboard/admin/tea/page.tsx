"use client";

import TeaTable from "@/Components/AdminPage/TeaManagement/TeaTable";
import { useGetAllProductQuery } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { Button, Input } from "@nextui-org/react";
import { Metadata } from "next";
import React from "react";

const TeaManagePage = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  if (isLoading) {
    <h1>Loading...</h1>;
  }
  console.log(data?.data?.result);
  const productData = data?.data?.result;
  const metaData = data?.data?.meta;
  return (
    <div>
      <TeaTable data={productData} meta={metaData} />
    </div>
  );
};

export default TeaManagePage;
