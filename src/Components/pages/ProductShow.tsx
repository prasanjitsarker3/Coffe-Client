"use client";
import React, { useEffect, useState } from "react";
import { useGetAllProductQuery } from "../Redux/AdminApi/TeaManament/teaManageApi";
import {
  Card,
  CardBody,
  CardHeader,
  Chip,
  Input,
  Pagination,
  Select,
  SelectItem,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import {
  Box,
  EyeIcon,
  Heart,
  MapPinned,
  SearchIcon,
  ShoppingCart,
} from "lucide-react";
import SideProductShow from "./UsingPage/SideProductShow";
import { useGetAllCategoryQuery } from "../Redux/AdminApi/TeaCategory/teaCategoryApi";
import Link from "next/link";
import DiscountProduct from "./UsingPage/DiscountProduct";
import { toast } from "sonner";
import { useAppDispatch } from "../Redux/Provider/hook";
import { addToCart } from "../Redux/cartSlice";
import { ProductSkeleton } from "../ChartSkeleton/TotalSkeleton";
import { motion } from "framer-motion";

const ProductShow = () => {
  const dispatch = useAppDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSpecial, setIsSpecial] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [page, setPage] = useState(1);
  const [limit] = useState(6);

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

  const { data, isLoading } = useGetAllProductQuery(query);
  const { data: categories, isLoading: categoryLoad } = useGetAllCategoryQuery(
    {}
  );

  if (isLoading) {
    return (
      <h1>
        <ProductSkeleton />
      </h1>
    );
  }

  const products = data?.data?.result;
  const metaData = data?.data?.meta;
  const total = metaData?.total || 0;
  const countPage = Math.ceil(total / limit);

  const handlePageChange = (newPage: number) => {
    setPage(newPage); // Update page state when page changes
  };

  const handleAddToCart = (productId: any) => {
    dispatch(addToCart(productId));
    toast.success("Successfully");
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full py-12 md:px-24 px-6">
      <div className="md:w-[30%] w-full">
        <SideProductShow />
        <DiscountProduct />
      </div>
      <div className="md:w-[70%] w-full">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 pb-5">
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
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {products &&
            products.map((product: any) => (
              <motion.div
                key={product.id}
                className="relative cursor-pointer group p-4 border rounded-lg  bg-gradient-to-b from-white to-gray-200 hover:bg-gradient-to-t hover:from-gray-100 hover:to-white"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <div className="lg:h-[150px] md:h-[150px] h-[200px] w-full relative">
                  <Image
                    alt={product.name}
                    className="object-cover"
                    src={
                      product.image ||
                      "https://nextui.org/images/hero-card-complete.jpeg"
                    }
                    layout="fill" // This makes the image cover the parent div
                  />
                  <div className="absolute top-0 right-0 p-1 bg-black text-white rounded-tl-lg">
                    <span className="text-sm font-bold">
                      {product?.discount} %
                    </span>
                  </div>
                </div>
                <div className="pb-0 pt-2 flex-col items-start">
                  <h4 className="font-semibold text-sm text-[#019031]">
                    {product.name}
                  </h4>
                  <div className="flex justify-between items-center">
                    <small className="text-default-500">
                      {product.isSpecial}
                    </small>
                    <small className="text-default-500">
                      $ {product.price}
                    </small>
                  </div>
                  <div className="flex justify-between items-center">
                    <small className="text-default-500 flex items-center gap-2">
                      <MapPinned size={15} className="text-blue-600" />
                      {product.location}
                    </small>
                    <small className="text-default-500 flex items-center gap-2">
                      <Box size={15} className="text-blue-600" />
                      {product.size[0]}
                    </small>
                  </div>
                  <div className="pt-2 flex justify-between items-center">
                    <Link href={`/tea/details/${product.id}`}>
                      <Chip
                        endContent={<ShoppingCart size={18} />}
                        variant="flat"
                        color="default"
                        size="md"
                      >
                        See / Order{" "}
                      </Chip>
                    </Link>
                    <div
                      onClick={() => handleAddToCart(product.id)}
                      className="bg-slate-300 rounded-full p-2"
                    >
                      <Tooltip content="Add To Card">
                        <Heart size={15} />
                      </Tooltip>
                    </div>
                  </div>
                </div>
                {/* <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div> */}
              </motion.div>
            ))}
        </div>
        <div className="py-5 flex justify-center w-full mx-auto">
          <Pagination
            total={countPage}
            page={page}
            showControls
            onChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
