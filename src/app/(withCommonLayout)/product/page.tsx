"use client";
import { useGetAllProductQuery } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { useAppSelector } from "@/Components/Redux/Provider/hook";
import { RootState } from "@/Components/Redux/store";
import React from "react";

interface Product {
  filter(arg0: (product: any) => boolean): unknown;
  id: string;
  categoryId: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  discountPrice: number;
  isSpecial: string;
  location: string;
  image: string;
  buyPackage: string;
  size: string[];
  createdAt: string;
  updatedAt: string;
  packageDate: string;
  expiryDate: string;
  isDelete: boolean;
  sellCount: number;
}

const ProductAdd = () => {
  const items = useAppSelector((state: RootState) => state.cart.items);
  const { data, isLoading } = useGetAllProductQuery({});

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!data || !items.length) {
    return <div>No products available</div>;
  }
  const products: Product[] = data.data.result;
  const reduxData = products.filter((product) =>
    //@ts-ignore
    items.includes(product.id)
  );

  console.log(reduxData);
  return <div></div>;
};

export default ProductAdd;
