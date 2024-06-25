import React from "react";
import { Button } from "@nextui-org/react";
import { TreePalm } from "lucide-react";

const Banner = () => {
  return (
    <div className="relative h-[100vh] -mt-16 w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/19669266-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50  text-white">
        <div className=" h-full flex  items-center">
          <div className=" md:px-24 px-6">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-[#00cd71]">
              Organic <span className=" text-[#00864a]">Tea & Coffee</span>{" "}
              Haven
            </h1>
            <div>
              <p className="text-lg md:text-2xl mb-1">
                Experience the rich flavors and aromas of our organic tea and
                coffee collections
              </p>
              <p className="text-lg md:text-2xl mb-8">
                Handpicked and ethically sourced for the best taste.
              </p>
            </div>
            <button className=" border-2 py-2 px-5 rounded-md border-white flex items-center gap-3">
              Shop Now{" "}
              <TreePalm size={20} className=" text-[#00cd71] font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
