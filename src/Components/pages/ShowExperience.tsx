import React from "react";
import EXPERIENCE from "./EXPERIENCE";
import { TreePalm } from "lucide-react";

const ShowExperience = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row gap-12 py-16 md:px-24 px-8">
      <div className=" md:w-4/12 w-full">
        <div className=" space-y-3">
          <h1 className=" font-bold text-2xl text-[#00cd71]">Experience</h1>
          <h1 className=" text-3xl font-bold text-slate-700">
            The Story Behind Our Ocha House
          </h1>
          <p className=" text-base text-slate-700 text-justify">
            We also specialize in bubble tea, a beverage originating from Taiwan
            that combines freshly brewed teas with a large variety of exotic
            natural fruit concentrates, served cold with delicious chewy tapioca
            pearls.
          </p>
          <button className=" border-2 py-2 px-5 rounded-md border-[#00cd71] flex items-center gap-3">
            Shop Now{" "}
            <TreePalm size={20} className=" text-[#00cd71] font-bold" />
          </button>
        </div>
      </div>
      <div className="md:w-8/12 w-full">
        <EXPERIENCE />
      </div>
    </div>
  );
};

export default ShowExperience;
