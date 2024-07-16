"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import TextAnimation from "../Utlities/TextAnimation";

const teaSteps = [
  {
    title: "Step 1",
    heading: "Harvesting",
    description:
      "The first step in tea and coffee processing is harvesting the leaves and beans.",
    img: "https://cdn-icons-png.flaticon.com/128/9951/9951893.png",
  },
  {
    title: "Step 2",
    heading: "Withering",
    description: "The leaves are withered to remove excess moisture.",
    img: "https://cdn-icons-png.flaticon.com/128/6041/6041557.png", // replace with your image path
  },
  {
    title: "Step 3",
    heading: "Rolling",
    description: "The leaves are rolled to release enzymes and essential oils.",
    img: "https://cdn-icons-png.flaticon.com/128/4864/4864869.png", // replace with your image path
  },
  {
    title: "Step 4",
    heading: "Fermentation",
    description: "The leaves are fermented to develop the flavor.",
    img: "https://cdn-icons-png.flaticon.com/128/6542/6542823.png", // replace with your image path
  },
  {
    title: "Step 5",
    heading: "Drying",
    description: "The leaves are dried to stop the fermentation process.",
    img: "https://cdn-icons-png.flaticon.com/128/2784/2784317.png", // replace with your image path
  },
  {
    title: "Step 6",
    heading: "Sorting and Packaging",
    description:
      "The final step involves sorting the leaves and packaging them for sale.",
    img: "https://cdn-icons-png.flaticon.com/128/5867/5867391.png", // replace with your image path
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
  return (
    <div className="md:px-24 px-8 py-16">
      <div className="text-3xl font-bold text-center mb-8">
        <TextAnimation title="Tea and Coffee Processing" />
      </div>
      <div className=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-12">
        {teaSteps?.map((item) => (
          <motion.div
            key={item.title}
            className=" border border-slate-200 p-5 shadow-sm rounded"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, duration: 0.5 }}
          >
            <div className="  space-y-2">
              <div className=" flex justify-center items-center">
                <Image src={item.img} alt="" width={50} height={50} />
              </div>
              <h1 className=" text-xl font-exotwo font-semibold text-center text-[#00864a]">
                {item.heading}
              </h1>
              <p className="font-exotwo text-slate-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
