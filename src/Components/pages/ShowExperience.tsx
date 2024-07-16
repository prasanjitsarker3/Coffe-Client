import React from "react";
import EXPERIENCE from "./EXPERIENCE";
import { TreePalm } from "lucide-react";
import TextAnimation from "../Utlities/TextAnimation";

const ShowExperience = () => {
  return (
    <div className=" w-full flex flex-col md:flex-row gap-12 py-16 md:px-24 px-8">
      <div className=" md:w-4/12 w-full">
        <div className=" space-y-3">
          <div className=" font-bold text-3xl">
            <TextAnimation title="Experience" />
          </div>

          <h1 className=" text-3xl font-bold text-slate-700">
            The Story Behind Our Leaf & Bean House
          </h1>
          <p className=" text-base text-slate-700 text-justify pb-3">
            Our selection extends beyond tea and coffee to include the
            ever-popular bubble tea. Originating in Taiwan, this customizable
            beverage allows you to choose from freshly brewed teas, a wide
            variety of exotic and natural fruit flavors, and chewy tapioca
            pearls, all served chilled..
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
