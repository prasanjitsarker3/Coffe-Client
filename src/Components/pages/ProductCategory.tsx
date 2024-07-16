"use client";
import React from "react";
import { useGetAllCategoryQuery } from "../Redux/AdminApi/TeaCategory/teaCategoryApi";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CategorySkeleton } from "../ChartSkeleton/TotalSkeleton";
import TextAnimation from "../Utlities/TextAnimation";

interface CategoryItem {
  id: string;
  name: string;
  icon: string;
}

const ProductCategory = () => {
  const { data, isLoading, isError } = useGetAllCategoryQuery({});

  if (isLoading) {
    return <CategorySkeleton />;
  }

  if (isError) {
    return <h1>Error loading categories</h1>;
  }

  return (
    <div className="md:px-24 px-6 py-12">
      <div className="py-5 text-4xl text-center">
        <TextAnimation title="Explore Our Tea and Coffee Categories" />
      </div>
      <div className="grid-cols-2 md:grid-cols-6 grid gap-5">
        {data?.data?.map((item: CategoryItem) => (
          <Link key={item.id} href={`/tea/category/${item.id}`}>
            <motion.div
              className="relative cursor-pointer group p-4 border  border-slate-100 bg-white rounded-lg text-[#00cd71]"
              whileHover={{
                scale: 1.05,
                transition: {
                  duration: 0.5,
                  ease: "easeInOut",
                },
              }}
            >
              <div className="flex justify-center md:h-[100px] h-[150px] w-full">
                <Image
                  width={500}
                  height={500}
                  src={item.icon}
                  alt={`${item.name} icon`}
                />
              </div>
              <h1 className="text-center mt-2 ">{item.name}</h1>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;
