import TextAnimation from "@/Components/Utlities/TextAnimation";
import React from "react";

const AboutBanner = () => {
  return (
    <div
      className=" min-h-screen bg-cover bg-center bg-opacity-50 backdrop-blur-md"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-black w-full flex items-center h-screen bg-opacity-40 ">
        <div className=" md:px-24 px-8 space-y-5">
          <div className="md:text-6xl lg:text-6xls text-3xl font-bold vigaRegular ">
            <TextAnimation title="Discover Your Perfect Cup" />
          </div>
          <h2 className="md:text-3xl text-xl text-white">
            We are passionate about coffee and tea, offering a curated selection
            of premium beans, loose leaf teas, and brewing accessories.
          </h2>
          <button className="mt-8 px-4 py-2 border border-white  text-white font-semibold rounded-md shadow-md">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;
