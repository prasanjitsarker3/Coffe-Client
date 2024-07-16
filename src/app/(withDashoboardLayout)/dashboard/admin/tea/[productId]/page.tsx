"use client";
import { useSingleProductQuery } from "@/components/Redux/AdminApi/TeaManament/teaManageApi";
import { dateFormatter } from "@/components/Utlities/dateFormater";
import { Skeleton } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

interface Params {
  params: {
    productId: string;
  };
}

const TeaDetailsPage = ({ params }: Params) => {
  const { data, isLoading } = useSingleProductQuery(params.productId);
  const singleData = data?.data;

  return (
    <div className="py-8 px-8 ">
      {isLoading ? (
        <div className=" w-full">
          <Skeleton className="rounded-lg w-full">
            <div className=" h-72 rounded-lg bg-default-300"></div>
          </Skeleton>
        </div>
      ) : (
        <div className=" border-1 border-gray-50 shadow-md rounded-md p-5">
          <h1 className="text-xl font-bold py-3">Tea Details Page</h1>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="md:col-span-1">
              <Image
                src={singleData?.image}
                alt={singleData?.name}
                width={500}
                height={500}
                className="w-full h-auto"
              />
            </div>

            <div className="space-y-2">
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Name: {singleData?.name}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Category: {singleData?.category?.name}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Special: {singleData?.isSpecial}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Packing: {singleData?.buyPackage}
              </h2>
            </div>
            <div className="space-y-2">
              {/* <div className="flex items-center space-x-2">
            {singleData?.size.map((item: any, index: number) => (
              <span key={index} className="text-sm bg-gray-200 p-2 rounded">
                {item}
              </span>
            ))}
          </div> */}
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Price: {singleData?.price}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Discount: {singleData?.discount}%
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Discount Price: {singleData?.discountPrice}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Total Sell: {singleData?.sellCount}
              </h2>
            </div>
            <div className="space-y-2">
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Package D: {dateFormatter(singleData?.packageDate)}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Expiry D: {dateFormatter(singleData?.expiryDate)}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Location: {singleData?.location}
              </h2>
              <h2 className="text-lg font-semibold bg-gray-200 p-2">
                Description: {singleData?.description}
              </h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeaDetailsPage;
