import { Sprout } from "lucide-react";
import Image from "next/image";
import React from "react";

const PackInfo = () => {
  return (
    <div className=" md:px-24 px-8 py-20">
      <div className=" flex flex-col md:flex-row w-full">
        <div className=" md:w-1/2 w-full bg-[#EAEFE6] p-10">
          <div className=" flex  gap-12">
            <div className=" flex items-center justify-center relative h-12 w-12 bg-red-300 rounded-full">
              <Sprout size={30} className=" rounded-full" />
            </div>
            <div>
              <h1>Benefiting you</h1>
              <p>From sleep support to focus, energy,</p>
              <p>confidence, calm, and more.</p>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 w-full bg-[#2E524A]"></div>
      </div>
    </div>
  );
};

export default PackInfo;
