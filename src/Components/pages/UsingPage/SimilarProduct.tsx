"use client";
import React, { useState } from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { useGetAllProductQuery } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { Heart } from "lucide-react";

const SimilarProduct = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  const [likedItems, setLikedItems] = useState<{ [key: number]: boolean }>({});

  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const product = data?.data?.result;

  const handleLikeClick = (index: number) => {
    setLikedItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="py-24">
      <h1 className=" text-2xl font-medium py-3">Similar Products</h1>
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
              <b>{item.name}</b>
              <p className="text-default-500">$ {item.price}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SimilarProduct;
