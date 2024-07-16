"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useGetAllProductQuery } from "@/components/Redux/AdminApi/TeaManament/teaManageApi";
import { Heart } from "lucide-react";
import { toast } from "sonner";
import { SimilarProductSkeleton } from "@/components/ChartSkeleton/TotalSkeleton";

const SimilarProduct = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  if (isLoading) {
    return <SimilarProductSkeleton />;
  }

  const product = data?.data?.result;

  const handleLikeClick = (index: number) => {
    setLikedItems((prev) => {
      const updatedLikedItems = {
        ...prev,
        [index]: !prev[index],
      };
      if (updatedLikedItems[index]) {
        toast.success("Added to cart", { duration: 1000 });
      } else {
        toast.error("Removed from cart", { duration: 1000 });
      }
      return updatedLikedItems;
    });
  };

  console.log("Data", product);

  return (
    <div className="py-24 ">
      <h1 className=" text-3xl vigaRegular py-3 text-[#00cd71]">
        Similar Products
      </h1>
      <div className=" grid grid-cols-2 sm:grid-cols-4 gap-8">
        {product.slice(0, 8).map((item: any, index: number) => (
          <Card
            shadow="sm"
            key={index}
            isPressable
            onPress={() => console.log("item pressed")}
          >
            <CardBody className="overflow-visible p-0 relative">
              <Image
                shadow="sm"
                radius="lg"
                width="100%"
                alt={item.title}
                className="w-full object-cover h-[140px]"
                src={item.image}
              />
              <div
                className="absolute top-2 right-2 cursor-pointer z-50"
                onClick={() => handleLikeClick(index)}
              >
                <Heart
                  size={24}
                  color={likedItems[index] ? "red" : "gray"}
                  fill={likedItems[index] ? "red" : "none"}
                />
              </div>
            </CardBody>
            <CardFooter className="text-small justify-between">
              <b className="text-[#00cd71]">{item.name}</b>
              <p className="text-default-500">$ {item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
