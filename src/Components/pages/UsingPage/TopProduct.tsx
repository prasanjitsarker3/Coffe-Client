"use client";
import { useGetAllProductQuery } from "@/Components/Redux/AdminApi/TeaManament/teaManageApi";
import { addToCart } from "@/Components/Redux/cartSlice";
import { Chip } from "@nextui-org/react";
import { Box, EyeIcon, MapPinned, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

const TopProduct = () => {
  const { data, isLoading } = useGetAllProductQuery({});
  const dispatch = useDispatch();
  if (isLoading) {
    return <h1>Loading</h1>;
  }

  const products = data?.data?.result;

  const handleAddToCart = (productId: any) => {
    console.log("Check", productId);
    dispatch(addToCart(productId));
    toast.success("Successfully");
  };

  return (
    <div className=" md:px-24 px-6 py-8">
      <h1 className=" py-5 text-bold text-lg ">Top Product</h1>
      <div className="grid md:grid-cols-5 gap-8">
        {products &&
          products.slice(0, 5).map((product: any) => (
            <div
              key={product.id}
              className="relative cursor-pointer group p-4 border rounded-lg transition-all duration-300 ease-in-out "
            >
              <div className="h-[100px] w-full relative bg-red-400">
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
                  <small className="text-default-500">$ {product.price}</small>
                </div>
                {/* <div className="flex justify-between items-center">
                  <small className="text-default-500 flex items-center gap-2">
                    <MapPinned size={15} className="text-blue-600" />
                    {product.location}
                  </small>
                  <small className="text-default-500 flex items-center gap-2">
                    <Box size={15} className="text-blue-600" />
                    {product.size[0]}
                  </small>
                </div> */}
                <div className="pt-2 flex justify-between items-center">
                  <Chip
                    endContent={<EyeIcon size={18} />}
                    variant="flat"
                    color="default"
                  >
                    See More{" "}
                  </Chip>
                  <div
                    onClick={() => handleAddToCart(product.id)}
                    className="bg-slate-300 rounded-full p-2"
                  >
                    <ShoppingCart size={15} />
                  </div>
                </div>
              </div>
              {/* <div className="absolute inset-0 border-2 border-transparent rounded-lg group-hover:border-blue-500 transition-all duration-300 ease-in-out"></div> */}
            </div>
          ))}
      </div>
    </div>
  );
};

export default TopProduct;
