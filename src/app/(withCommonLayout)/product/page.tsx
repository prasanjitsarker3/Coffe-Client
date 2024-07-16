"use client";
import { ShowProductSkeleton } from "@/components/ChartSkeleton/TotalSkeleton";
import useAuthUser from "@/components/Lib/authUser";
import { useGetAllProductQuery } from "@/components/Redux/AdminApi/TeaManament/teaManageApi";
import {
  useAppDispatch,
  useAppSelector,
} from "@/components/Redux/Provider/hook";
import { clearCart, removeFromCart } from "@/components/Redux/cartSlice";
import { setCheckoutData } from "@/components/Redux/checkoutSlice";
import { RootState } from "@/components/Redux/store";
import TopProduct from "@/components/pages/UsingPage/TopProduct";
import { Button, Select, SelectItem } from "@nextui-org/react"; // Ensure SelectItem is imported
import { Delete, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";

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
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetAllProductQuery({});
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>(
    {}
  );

  if (!items) {
    router.push("/");
  }
  useEffect(() => {
    const initialQuantities: { [key: string]: number } = {};
    items.forEach((id: any) => {
      initialQuantities[id] = 1;
    });
    setQuantities(initialQuantities);
  }, [items]);

  if (isLoading) {
    return (
      <div className=" pt-12">
        <ShowProductSkeleton />
      </div>
    );
  }

  const products: Product[] = data.data.result;
  const productIdsInCart = items.map((item) => item.productId);
  const reduxData = products.filter((product) =>
    productIdsInCart.includes(product.id)
  ); // Filter products based on cart product IDs

  const handleQuantityChange = (id: string, change: number) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 1) + change, 1),
    }));
  };

  const totalItemCount = reduxData.reduce(
    (acc, item) => acc + (quantities[item.id] || 1),
    0
  );

  const totalDiscount = reduxData.reduce(
    (acc, item) => acc + item.discount * (quantities[item.id] || 1),
    0
  );

  const totalPrice = reduxData.reduce(
    (acc, item) =>
      acc + (item.price - item.discount) * (quantities[item.id] || 1),
    0
  );

  const handleSizeChange = (productId: string, size: string) => {
    setSelectedSizes((prev) => ({
      ...prev,
      [productId]: size,
    }));
  };

  const handleCheckout = () => {
    router.refresh();
    const totalPrice =
      reduxData.reduce(
        (sum, item) => sum + item.price * (quantities[item.id] || 1),
        0
      ) + 60;
    const products = reduxData.map((item) => ({
      productId: item.id,
      quantity: quantities[item.id] || 1,
      size: selectedSizes[item.id] || item.size[0],
      // size: selectedSizes[item.id] || item.size[0],
    }));

    const checkoutData = { totalPrice, products };
    dispatch(setCheckoutData(checkoutData));
    router.push("/product/order");
  };
  return (
    <div>
      <div className="md:px-24 pt-20">
        <div>
          {!(!data || !items.length) ? (
            <div className="flex flex-col md:flex-row justify-center w-full gap-12">
              <div className=" md:w-[70%] w-full">
                {reduxData.map((item) => (
                  <div key={item.id} className=" relative">
                    <div
                      // key={item.id}
                      className="flex items-center justify-around gap-3 py-3 w-full border-2 border-blue-500 m-3 p-4 rounded-lg bg-white shadow-lg"
                    >
                      <div className="relative md:h-[100px] h-[70px] w-[140px] md:w-[200px]">
                        <Image
                          src={item.image}
                          alt=""
                          width={500}
                          height={500}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="space-y-3 text-base text-[#2a286e]">
                        <h1>Name: {item?.name}</h1>
                        <h1>Special: {item?.isSpecial}</h1>
                        <h1>Price: {item?.price}</h1>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center md:gap-6 gap-2">
                          <button
                            className=" bg-blue-600 rounded-full p-1 cursor-pointer text-white"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={quantities[item.id] === 1}
                          >
                            <Minus />
                          </button>
                          {quantities[item.id] || 1}
                          <button
                            onClick={() => handleQuantityChange(item.id, 1)}
                            className="bg-blue-600 rounded-full p-1 cursor-pointer text-white"
                          >
                            <Plus />
                          </button>
                        </div>
                        <div className="md:w-40 w-24">
                          <Select
                            defaultSelectedKeys={item.size[0]}
                            label="Product Size"
                            size="sm"
                            onChange={(event) =>
                              handleSizeChange(item.id, event.target.value)
                            }
                          >
                            {item?.size &&
                              item?.size.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                          </Select>
                        </div>
                      </div>
                    </div>
                    <div
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className=" h-6 w-6 flex justify-center items-center rounded-full cursor-pointer absolute top-0 right-0 -mr-5 bg-red-500 text-white"
                    >
                      <Delete size={15} />{" "}
                    </div>
                  </div>
                ))}
              </div>
              <div className="md:w-[30%] w-full h-96 border-2 border-blue-500 m-3 p-4 rounded-lg bg-white shadow-lg">
                <div className="space-y-3 text-gray-800">
                  <h1 className="text-xl font-semibold">Order Summary</h1>
                  <div className="flex justify-between">
                    <span>Product Price:</span>
                    <span>${totalPrice.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Item Count:</span>
                    <span>{totalItemCount}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Discount:</span>
                    <span>${totalDiscount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Charge:</span>
                    <span>$60.00</span>
                  </div>
                  <div className="flex justify-between font-semibold text-lg">
                    <span>Total Price:</span>
                    <span>${(totalPrice + 60).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={handleCheckout}
                    className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
                  >
                    Check Out Order
                  </button>
                  <Button
                    fullWidth={true}
                    color="danger"
                    onClick={() => dispatch(clearCart())}
                  >
                    Clear Cart Data
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <h1 className="text-3xl vigaRegular text-center text-red-500">
              No product cards available
            </h1>
          )}
        </div>
      </div>
      <TopProduct />
    </div>
  );
};

export default ProductAdd;
