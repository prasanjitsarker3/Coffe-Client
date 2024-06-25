import React from "react";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { TreePalm } from "lucide-react";

const DiscountProduct = () => {
  return (
    <div className="relative mt-8">
      <div className="relative h-[100%] w-full overflow-hidden group">
        <Image
          src="https://img.freepik.com/free-photo/top-view-brown-coffee-seeds-with-choco-bars-cup-coffee_140725-27779.jpg?t=st=1719258401~exp=1719262001~hmac=cee7c3e6ee85e3b8d179996bf3859e2039c06ba824f0e62be65225baae723329&w=740"
          alt="Tea"
          width={500}
          height={500}
          objectFit="cover"
          className="rounded-lg transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute bottom-0 left-0 right-0  text-[#00cd71] p-4 text-center transform transition-opacity duration-500 group-hover:opacity-100">
          <h1 className="pb-1 text-lg font-semibold">Up To 50% Off</h1>
          <div className=" flex justify-center">
            <button className=" border-b-2 py-1 px-5 rounded-md text-[#00cd71]  flex justify-center items-center gap-3">
              Shop Now{" "}
              <TreePalm size={20} className=" text-[#00cd71] font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountProduct;
