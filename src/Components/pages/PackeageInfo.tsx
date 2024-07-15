import { Divider } from "@nextui-org/react";
import {
  BadgeDollarSign,
  Gem,
  Gift,
  Package,
  Slack,
  Sprout,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import image from "../../../public/image/black-tea-bag-vector-realistic-product-placement-mock-up-3d-detailed-illustration-tea-leaves-infusions.png";

const PackInfo = () => {
  return (
    <div className=" md:px-24 px-8 py-20 relative flex flex-col items-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className=" md:w-1/2 w-full bg-[#EAEFE6] p-10">
          <div className=" flex items-center gap-8">
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <Sprout size={32} className=" rounded-full text-[#2E524A]" />
            </div>
            <div className="text-[#2E524A] ">
              <h1 className=" text-[#2E524A] vigaRegular text-xl pb-2">
                Benefiting you
              </h1>
              <p className=" font-exotwo text-base ">
                From sleep support to focus, energy,
              </p>
              <p className=" font-exotwo text-base">
                confidence, calm, and more.
              </p>
            </div>
          </div>
          <Divider className="my-8 bg-[#2E524A]" />
          <div className=" flex items-center gap-8">
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <Package size={25} className=" rounded-full text-[#2E524A]" />
            </div>
            <div className="text-[#2E524A] ">
              <h1 className=" text-[#2E524A] vigaRegular text-xl pb-2">
                Eco package
              </h1>
              <p className=" font-exotwo text-base ">
                Our tube packaging is 100%
              </p>
              <p className=" font-exotwo text-base">
                biodegradable + refillable, plastic-free
              </p>
            </div>
          </div>
          <Divider className="my-8 bg-[#2E524A]" />
          <div className=" flex items-center gap-8">
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <Gem size={25} className=" rounded-full text-[#2E524A]" />
            </div>
            <div className="text-[#2E524A] ">
              <h1 className=" text-[#2E524A] vigaRegular text-xl pb-2">
                Highest quality
              </h1>
              <p className=" font-exotwo text-base ">
                Our delicious teas using only the finest
              </p>
              <p className=" font-exotwo text-base">
                organic or wild harvested ingredients.
              </p>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 w-full bg-[#2E524A] p-10">
          <div className=" flex items-center justify-end gap-8">
            <div className="text-white text-right">
              <h1 className=" vigaRegular text-xl pb-2">
                Loyal-Tea&Coffee Rewards
              </h1>
              <p className=" font-exotwo text-base ">
                Your all access pass to exclusive
              </p>
              <p className=" font-exotwo text-base">rewards and more.</p>
            </div>
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <Gift size={32} className=" rounded-full text-[#2E524A]" />
            </div>
          </div>
          <Divider className="my-8 bg-[#EAEFE6]" />
          <div className=" flex items-center justify-end gap-8">
            <div className="text-white text-right">
              <h1 className=" vigaRegular text-xl pb-2">Brand Ambassadors</h1>
              <p className=" font-exotwo text-base ">
                Earn commissions from all qualifying
              </p>
              <p className=" font-exotwo text-base">purchases.</p>
            </div>
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <Slack size={32} className=" rounded-full text-[#2E524A]" />
            </div>
          </div>
          <Divider className="my-8 bg-[#EAEFE6]" />
          <div className=" flex items-center justify-end gap-8">
            <div className="text-white text-right">
              <h1 className=" vigaRegular text-xl pb-2">Wholesale </h1>
              <p className=" font-exotwo text-base ">
                A way to bolster your bottom line quickly
              </p>
              <p className=" font-exotwo text-base">and easily</p>
            </div>
            <div className=" flex items-center justify-center relative h-16 w-16 bg-white rounded-full">
              <BadgeDollarSign
                size={32}
                className=" rounded-full text-[#2E524A]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 flex justify-center items-center w-full  mt-12">
        <Image
          className=" md:block hidden"
          src={image}
          alt="Black tea bag"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default PackInfo;
