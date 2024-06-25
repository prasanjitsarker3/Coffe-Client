"use client";
import { useSingleProductQuery } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { useAppDispatch } from "@/Components/Redux/Provider/hook";
import { addToCart } from "@/Components/Redux/cartSlice";
import SimilarProduct from "@/Components/pages/UsingPage/SimilarProduct";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";

interface IProps {
  params: {
    detailsId: string;
  };
}

const DetailsPage = ({ params }: IProps) => {
  const detailsId = params.detailsId;
  const { data: singleProduct, isLoading } = useSingleProductQuery(detailsId);
  const dispatch = useAppDispatch();
  const router = useRouter();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const {
    id,
    name,
    image,
    description,
    price,
    size,
    discount,
    discountPrice,
    buyPackage,
    packageDate,
    location,
    expiryDate,
    sellCount,
    isSpecial,
    category,
  } = singleProduct?.data || {};
  const isInStock = true;
  const handleOrderProduct = (productId: string) => {
    dispatch(addToCart(productId));
    toast.success("Successfully");
    router.push("/product");
  };

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col md:flex-row justify-center w-full border-2 border-blue-500 py-8">
        <div className="md:w-1/2 w-full flex justify-center md:justify-center  relative h-72">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="rounded-md shadow-lg border-gray-50 border object-cover"
          />
        </div>
        <div className="md:w-1/2 w-full flex flex-col justify-center pr-8">
          <div className=" space-y-1">
            <h1 className="text-2xl font-bold text-gray-800">{name}</h1>
            <p className="text-lg font-medium text-gray-600 mt-2">
              {description}
            </p>
            <div className=" flex justify-between">
              <div>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Special: <span className="text-gray-800">{isSpecial}</span>
                </p>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Category:{" "}
                  <span className="text-gray-800">{category?.name}</span>
                </p>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Location: <span className="text-gray-800">{location}</span>
                </p>

                <p className="text-lg font-medium mt-2">
                  Stock:{" "}
                  <span
                    className={`font-semibold ${
                      isInStock ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {isInStock ? "In Stock" : "Out of Stock"}
                  </span>
                </p>
              </div>
              <div>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Price:{" "}
                  <span className="line-through text-red-600">${price}</span>{" "}
                  <span className="text-green-600">
                    ${discountPrice} ({discount}% off)
                  </span>
                </p>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Sizes: {size?.join(", ")}
                </p>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Package Date: {new Date(packageDate).toLocaleDateString()}
                </p>
                <p className="text-lg font-medium text-gray-600 mt-2">
                  Expiry Date: {new Date(expiryDate).toLocaleDateString()}
                </p>
                {/* <p className="text-lg font-medium text-gray-600 mt-2">
                  Sold: {sellCount} 
                </p> */}
              </div>
            </div>
            <Button onClick={() => handleOrderProduct(id)} className=" w-full">
              Order Now
            </Button>
          </div>
        </div>
      </div>
      <SimilarProduct />
    </div>
  );
};

export default DetailsPage;
