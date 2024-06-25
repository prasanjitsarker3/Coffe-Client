"use client";

import { useState } from "react";
import Image from "next/image";
import { Tabs, Tab } from "@nextui-org/react";

const teaSteps = [
  {
    title: "Step 1",
    heading: "Harvesting",
    description:
      "The first step in tea and coffee processing is harvesting the leaves and beans.",
    img: "https://img.freepik.com/free-photo/tea-pickers-working-kerela-india_53876-42847.jpg?t=st=1719340254~exp=1719343854~hmac=1d0f52edff1dd4acd0ac79ded18d7213534863b7a13adac2f72cfd4a5f5f9fe0&w=740", // replace with your image path
  },
  {
    title: "Step 2",
    heading: "Withering",
    description: "The leaves are withered to remove excess moisture.",
    img: "https://as1.ftcdn.net/v2/jpg/02/49/70/10/1000_F_249701052_jIBQ878I9o2hJTKa695jUw3cW32xMkbw.jpg", // replace with your image path
  },
  {
    title: "Step 3",
    heading: "Rolling",
    description: "The leaves are rolled to release enzymes and essential oils.",
    img: "https://images.unsplash.com/photo-1433891248364-3ce993ff0e92?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image path
  },
  {
    title: "Step 4",
    heading: "Fermentation",
    description: "The leaves are fermented to develop the flavor.",
    img: "https://images.unsplash.com/photo-1627764611688-2d07255e995e?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image path
  },
  {
    title: "Step 5",
    heading: "Drying",
    description: "The leaves are dried to stop the fermentation process.",
    img: "https://media.istockphoto.com/id/1005801042/photo/tea-leaves-drying.jpg?s=1024x1024&w=is&k=20&c=BXQYTtee6MKzra3Mpv6MnjVm_ueOaMb4biPbqXdvIy4=", // replace with your image path
  },
  {
    title: "Step 6",
    heading: "Sorting and Packaging",
    description:
      "The final step involves sorting the leaves and packaging them for sale.",
    img: "https://plus.unsplash.com/premium_photo-1681302765374-85a6681d634f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image path
  },
];

const coffeeSteps = [
  {
    title: "Step 1",
    heading: "Harvesting",
    description: "The first step in coffee processing is harvesting the beans.",
    img: "https://media.istockphoto.com/id/1488847801/photo/women-picking-tea-leaves-on-a-lush-plantation-assam-india.jpg?s=1024x1024&w=is&k=20&c=gchOvf3s7_S3BNVstpRbcPLQblxJcNim6z9ITeoySW4=", // replace with your image path
  },
  {
    title: "Step 2",
    heading: "Processing",
    description: "The beans are processed to remove the outer layers.",
    img: "https://images.unsplash.com/photo-1442411210769-b95c4632195e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // replace with your image path
  },
  {
    title: "Step 3",
    heading: "Drying",
    description: "The beans are dried to the optimal moisture content.",
    img: "https://img.freepik.com/premium-photo/high-angle-view-coffee-beans-container_1048944-26828364.jpg?w=740", // replace with your image path
  },
  {
    title: "Step 4",
    heading: "Milling",
    description: "The dried beans are milled to remove any remaining layers.",
    img: "https://img.freepik.com/premium-photo/close-up-coffee-grinder-with-coffee-beans-spilling-out-it-generative-ai_901003-64601.jpg?w=740", // replace with your image path
  },
  {
    title: "Step 5",
    heading: "Roasting",
    description: "The beans are roasted to bring out the flavor.",
    img: "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740", // replace with your image path
  },
  {
    title: "Step 6",
    heading: "Grinding and Brewing",
    description:
      "The final step involves grinding the beans and brewing the coffee.",
    img: "https://img.freepik.com/free-photo/view-vintage-coffee-grinder_23-2150315148.jpg?t=st=1719345082~exp=1719348682~hmac=bc35ec21e1e9c82b5d2c2b300bb4becb132fb7ddcede5e5e05fda1e858d2683b&w=740", // replace with your image path
  },
];

const Timeline = () => {
  const [activeTab, setActiveTab] = useState("tea");

  const steps = activeTab === "tea" ? teaSteps : coffeeSteps;

  return (
    <div className="md:px-24 px-8 py-16">
      <Tabs
        className=" flex justify-center pb-12"
        //@ts-ignore
        onChange={(index) => setActiveTab(index === 0 ? "tea" : "coffee")}
      >
        <Tab title="Tea">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {teaSteps.map((step, index) => (
              <div key={index} className=" relative group">
                <div className="flex flex-col items-center border  border-slate-200 p-3 h-44 rounded-md">
                  <div className="relative h-20 w-20">
                    <Image
                      src={step.img}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{step.heading}</h3>
                </div>
                <div className="absolute inset-0 rounded-md  bg-black bg-opacity-70  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center ">
                  <p className=" px-3">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Tab>
        <Tab title="Coffee">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {coffeeSteps.map((step, index) => (
              <div key={index} className=" relative group">
                <div className="flex flex-col items-center border bg-gradient-to-r from-[#26ae60] via-[#2ecc72] to-[#019031] animate-gradient border-slate-200 p-3 h-44 rounded-md">
                  <div className="relative h-20 w-20">
                    <Image
                      src={step.img}
                      alt={step.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-full"
                    />
                  </div>
                  <h3 className="text-xl font-bold mt-4">{step.heading}</h3>
                </div>
                <div className="absolute inset-0 rounded-md  bg-black bg-opacity-70  opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white text-center ">
                  <p className=" px-3">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default Timeline;
