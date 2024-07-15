import { Check, DollarSign, ShoppingBag } from "lucide-react";
import React from "react";

const UserDashboardPage = () => {
  return (
    <div>
      <div
        className="w-full min-h-screen bg-cover bg-center bg-opacity-50 backdrop-blur-md"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1491497895121-1334fc14d8c9?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className=" w-full mx-auto">
          <div className="grid md:grid-cols-3 gap-6 p-12">
            <div className="w-[300px] text-[#00cd71] space-y-3 font-exotwo bg-white bg-opacity-40 px-12 py-8 rounded-md shadow-md flex flex-col items-center">
              <h1 className="   font-bold text-3xl">0</h1>
              <ShoppingBag size={24} />
              <h1 className="  font-bold text-2xl">Total Order</h1>
            </div>
            <div className="w-[300px] text-[#00cd71] space-y-3 font-exotwo bg-white bg-opacity-40 px-12 py-8 rounded-md shadow-md flex flex-col items-center">
              <h1 className="   font-bold text-3xl">0</h1>
              <Check size={24} />
              <h1 className=" font-bold text-2xl">Delivery</h1>
            </div>
            <div className="w-[300px] text-[#00cd71] space-y-3 font-exotwo bg-white bg-opacity-40 px-12 py-8 rounded-md shadow-md flex flex-col items-center">
              <h1 className="  font-bold text-3xl">0</h1>
              <DollarSign size={24} />
              <h1 className="  font-bold text-2xl">Total Amount</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
