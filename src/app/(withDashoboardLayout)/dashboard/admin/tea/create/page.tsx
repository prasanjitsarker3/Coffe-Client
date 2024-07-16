"use client";
import PTCustomSelect from "@/components/ReactHook/CustomSelect";
import FromProvider from "@/components/ReactHook/FormProvider";
import PTDatePicker from "@/components/ReactHook/PTDatePicker";
import PTMultiSelect from "@/components/ReactHook/SelectMul";
import PTSingleSelect from "@/components/ReactHook/SingleSelect";
import PTInput from "@/components/ReactHook/TInput";
import PTTextArea from "@/components/ReactHook/TeaxtArea";
import { useGetAllCategoryQuery } from "@/components/Redux/AdminApi/TeaCategory/teaCategoryApi";
import { useCreateProductMutation } from "@/components/Redux/AdminApi/TeaManament/teaManageApi";
import { convertCalendarToISODate } from "@/components/Utlities/InputDateFormate";
import { imgUrlCreate } from "@/components/Utlities/fileSendImgDB";
import ImageUploader from "@/components/Utlities/imageUploader";
import { zodResolver } from "@hookform/resolvers/zod";
import { parseDate } from "@internationalized/date";
import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const validation = z.object({
  name: z.string({ required_error: "Name is required" }),
  price: z.string({ required_error: "Price is required" }),
  discount: z.string({ required_error: "Discount is required" }),
  size: z.string({ required_error: "Size is required" }),
  buyPackage: z.string({ required_error: "Package is required" }),
  isSpecial: z.string({ required_error: "Special is required" }),
  categoryId: z.string({ required_error: "Category is required" }),
  date: z.any({ required_error: "Date is required" }),
  packageDate: z.any({ required_error: "Date is required" }),
  expiryDate: z.any({ required_error: "Date is required" }),
  location: z.string({ required_error: "Location is required" }),
  description: z.string({ required_error: "Description is required" }),
});

const defaultValue = {
  size: [] as string[],
  packageDate: parseDate(new Date().toISOString().split("T")[0]),
  expiryDate: parseDate(new Date().toISOString().split("T")[0]),
};

const CreateTeaPage = () => {
  const { data, isLoading } = useGetAllCategoryQuery(undefined);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [createProduct, { isLoading: creating }] = useCreateProductMutation();
  const router = useRouter();

  const handleCreateTea = async (values: FieldValues) => {
    const toastId = toast.loading("Creating product...");
    if (typeof values.size === "string") {
      values.size = values.size.split(",").map((si) => si.trim());
    }
    console.log(values.size);
    values.price = Number(values.price);
    values.discount = Number(values.discount);
    values.packageDate = convertCalendarToISODate(values.packageDate);
    values.expiryDate = convertCalendarToISODate(values.expiryDate);
    console.log("Data", values);
    const img = await imgUrlCreate(selectedFile);
    const postData = {
      ...values,
      image: img,
    };

    try {
      const res = await createProduct(postData);
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
    <div className="py-8 px-6">
      <div className="border-2 border-gray-100 rounded-md shadow-lg p-5">
        <h1>Create New Product</h1>

        <FromProvider
          onSubmit={handleCreateTea}
          resolver={zodResolver(validation)}
          defaultValues={defaultValue}
        >
          <div className="grid md:grid-cols-3 gap-8">
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
              items={data?.data}
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
          <div className="py-3 w-60 mx-auto">
            <Button
              disabled={creating}
              color="primary"
              type="submit"
              className="w-full"
              fullWidth={true}
            >
              Submit
            </Button>
          </div>
        </FromProvider>
      </div>
    </div>
  );
};

export default CreateTeaPage;
