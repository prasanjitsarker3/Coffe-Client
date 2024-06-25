"use client";
import React from "react";
import { useGetAllCategoryQuery } from "../Redux/AdminApi/TeaCategory/teaCategoryApi";
import Image from "next/image";
import Link from "next/link";

const ProductCategory = () => {
  const { data, isLoading } = useGetAllCategoryQuery({});
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className=" md:px-24 px-6 py-12">
      <h1 className="py-5 text-2xl text-center text-[#00cd71]">
        Find the Perfect Product Category That Matches Your Preferences and
        Requirements
      </h1>
      <div className="grid-cols-2 md:grid-cols-6 grid gap-5">
        {data?.data?.map((item: any) => (
          <Link key={item.id} href={`/tea/category/${item.id}`}>
            <div
              key={item.id}
              className="relative cursor-pointer group p-4 border rounded-lg transition-all duration-300 ease-in-out bg-gradient-to-b from-white to-gray-200 hover:bg-gradient-to-t hover:from-gray-100 hover:to-white"
            >
              <div className="flex justify-center md:h-[100px] h-[150px] w-full">
                <Image
                  width={500}
                  height={500} // Added height to prevent layout shift
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className=""
                />
              </div>
              <h1 className="text-center mt-2">{item.name}</h1>
              <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
