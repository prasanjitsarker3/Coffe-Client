import React from "react";
import { Button } from "@nextui-org/react";

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
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center  text-white">
        <div className=" flex flex-col justify-start items-center text-left">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Organic Tea Company
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Experience the best organic tea from around the world.
          </p>
          <button className=" border-2 py-2 px-5 rounded-md border-white">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
