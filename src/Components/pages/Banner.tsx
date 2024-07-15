"use client";
import React from "react";
import { Button } from "@nextui-org/react";
import { TreePalm } from "lucide-react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="relative h-[100vh]  w-full">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/video/19669266-hd_1280_720_25fps.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-60  text-white">
        <div className=" h-full flex  items-center">
          <div className=" md:px-24 px-6">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-1 vigaRegular"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "100% 50%" }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                style={{
                  background:
                    "linear-gradient(90deg, #00F260, #00cd71, #00864a)",
                  backgroundSize: "200%",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Organic Tea & Coffee Haven
              </motion.h1>
            </motion.div>
            <div>
              <p className="text-lg md:text-2xl mb-1 text-white">
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
