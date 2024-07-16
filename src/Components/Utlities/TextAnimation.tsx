"use client";
import React from "react";
import { motion } from "framer-motion";

const TextAnimation = ({ title }: { title: any }) => {
  return (
    <div>
      <motion.h1
        initial={{ backgroundPosition: "0% 50%" }}
        animate={{ backgroundPosition: "100% 50%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          background: "linear-gradient(90deg, #00F260, #0575E6, #00F260)",
          backgroundSize: "200%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        {title}
      </motion.h1>
    </div>
  );
};

export default TextAnimation;
