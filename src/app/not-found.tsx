import TextAnimation from "@/components/Utlities/TextAnimation";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <div>
      <div
        className=" min-h-screen bg-cover bg-center bg-opacity-50 backdrop-blur-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="bg-black w-full flex  items-center justify-center  h-screen bg-opacity-40 ">
          <div className=" text-center space-y-3">
            <h1 className="md:text-6xl lg:text-6xl text-3xl font-bold vigaRegular text-red-500">
              Page Not Found !
            </h1>
            <h2 className="md:text-3xl text-xl text-white">
              We apologize, the page you requested seems to be missing. Would
              you like to return to the homepage?
            </h2>
            <div className=" pt-5">
              <Link
                href="/"
                className="px-4 py-2  text-white bg-[#003249] font-semibold rounded-md shadow-md"
              >
                Go Back Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
