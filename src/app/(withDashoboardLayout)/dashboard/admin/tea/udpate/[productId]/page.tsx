"use client";
import PTCustomSelect from "@/Components/ReactHook/CustomSelect";
import FromProvider from "@/Components/ReactHook/FormProvider";
import PTDatePicker from "@/Components/ReactHook/PTDatePicker";
import PTMultiSelect from "@/Components/ReactHook/SelectMul";
import PTSingleSelect from "@/Components/ReactHook/SingleSelect";
import PTInput from "@/Components/ReactHook/TInput";
import PTTextArea from "@/Components/ReactHook/TeaxtArea";
import { useGetAllCategoryQuery } from "@/Components/Redux/AdminApi/TeaCategory/teaCategoryApi";
import {
  useSingleProductQuery,
  useUpdateSingleProductMutation,
} from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { convertCalendarToISODate } from "@/Components/Utlities/InputDateFormate";
import { imgUrlCreate } from "@/Components/Utlities/fileSendImgDB";
import ImageUploader from "@/Components/Utlities/imageUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

type IPrams = {
  params: {
    productId: string;
  };
};

const UpdateProduct = (params: IPrams) => {
  const router = useRouter();
  const { data, isLoading } = useSingleProductQuery(params.params.productId);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { data: categoryData } = useGetAllCategoryQuery({});
  const [updateSingleProduct, { isLoading: updating }] =
    useUpdateSingleProductMutation();

  const defaultData = {
    // date: parseDate(new Date().toISOString().split("T")[0]),
    name: data?.data?.name,
    price: data?.data?.price,
    size: data?.data?.size,
    discount: data?.data?.discount,
    description: data?.data?.description,
    buyPackage: data?.data?.buyPackage,
    packageDate: parseDate(new Date().toISOString().split("T")[0]),
    expiryDate: parseDate(new Date().toISOString().split("T")[0]),
    location: data?.data?.location,
    isSpecial: data?.data?.isSpecial,
    categoryId: data?.data?.categoryId,
  };

  const handleUpdateProduct = async (values: FieldValues) => {
    const toastId = toast.loading("Creating product...");
    if (typeof values.size === "string") {
      values.size = values.size.split(",").map((si) => si.trim());
    }
    values.price = Number(values.price);
    values.discount = Number(values.discount);
    if (values.packageDate) {
      values.packageDate = convertCalendarToISODate(values.packageDate);
    }
    if (values.expiryDate) {
      values.expiryDate = convertCalendarToISODate(values.expiryDate);
    }

    const img = await imgUrlCreate(selectedFile);
    const updatedDate = {
      ...values,
      image: img,
    };
    try {
      const res = await updateSingleProduct({
        id: params.params.productId,
        item: updatedDate,
      });
      console.log("Checking", res);
      if (res?.data?.statusCode === 201) {
        toast.success(res?.data?.message, { id: toastId, duration: 2000 });
        router.refresh();
        router.push("/dashboard/admin/tea");
      } else {
        //@ts-ignore
        toast.error(res?.message || res?.data?.message, {
          id: toastId,
          duration: 2000,
        });
      }
    } catch (err: any) {
      console.log("Error", err?.message);
    }
  };

  return (
    <div className="py-8 px-8">
      {data?.data && (
        <FromProvider
          onSubmit={handleUpdateProduct}
          defaultValues={data?.data && defaultData}
        >
          <div className=" border-1 border-gray-100 shadow-md rounded-md">
            <div className=" grid md:grid-cols-3 gap-8  p-5">
              <PTInput name="name" label="Product Name" />
              <PTInput name="price" label="Product Price" type="number" />
              <PTInput name="discount" label="Product Discount" type="number" />
              <PTMultiSelect
                name="size"
                label="Sizes"
                items={["250g", "500g", "1kg"]}
                required={true}
              />
              <PTSingleSelect
                name="buyPackage"
                label="Product Package"
                items={["Box", "Bag", "Tin"]}
              />
              <PTSingleSelect
                name="isSpecial"
                label="Product Special"
                items={["Tea", "Coffee"]}
              />
              <PTCustomSelect
                name="categoryId"
                label="Product Category"
                items={categoryData?.data}
              />
              <PTDatePicker name="packageDate" label="Package Date" />
              <PTDatePicker name="expiryDate" label="Expiry Date" />
              <PTTextArea name="location" label="Product Location" />
              <PTTextArea name="description" label="Product Description" />
              <ImageUploader
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
              />
            </div>
            <div className=" w-72 mx-auto py-3">
              <Button type="submit" color="primary">
                Update Product Data
              </Button>
            </div>
          </div>
        </FromProvider>
      )}
    </div>
  );
};

export default UpdateProduct;
