"use client";
import { X } from "lucide-react";
const PaymentFail = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center bg-opacity-50 backdrop-blur-md"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <div className="bg-white bg-opacity-40 px-12 py-8 flex flex-col text-center justify-center rounded-md shadow-md w-96">
        <div className="flex flex-col justify-center items-center mx-auto space-y-3 ">
          <X className="text-red-500 w-12 h-12 flex justify-center border-2 border-red-500 rounded-full" />
          <h1 className=" text-red-500 text-2xl ">Payment Fail</h1>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
