"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:px-24 px-8 w-full mx-auto">
        <div className="md:flex md:justify-center">
          <div className="md:text-start text-center">
            <h1 className="text-2xl font-bold mb-4">The Daily Cup</h1>
            <p className="text-gray-400 hover:text-white">
              Experience the rich flavors and aromas of our organic tea and
              coffee collections.
            </p>
          </div>
        </div>
        <div className="  md:flex md:justify-center">
          <div className=" md:text-start text-center">
            <h1 className="text-2xl font-bold mb-4">Company</h1>
            <Link href="/tea" className="block text-gray-400 hover:text-white">
              Tea Products
            </Link>
            <Link
              href="/about"
              className="block text-gray-400 hover:text-white"
            >
              About Us
            </Link>
          </div>
        </div>
        <div className=" md:flex md:justify-center">
          <div className="md:text-start text-center">
            <h1 className="text-2xl font-bold mb-4">Location</h1>
            <h2 className="text-gray-400 hover:text-white ">
              Mirpur 12, Dhaka
            </h2>
            <h2 className="text-gray-400 hover:text-white">
              Dhaka, Bangladesh
            </h2>
          </div>
        </div>
        <div className=" w-full mx-auto flex justify-center">
          <div>
            <h1 className="text-2xl font-bold mb-4">Follow Us</h1>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.facebook.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Facebook size={24} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Linkedin size={24} />
              </motion.a>
              <motion.a
                href="https://www.instagram.com"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-400 hover:text-white"
              >
                <Instagram size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
