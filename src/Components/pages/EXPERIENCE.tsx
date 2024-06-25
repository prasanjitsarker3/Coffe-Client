"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const EXPERIENCE = () => {
  const [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(1);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial call to set correct slides per view

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        pagination={{
          type: "custom",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/deliciously-blending-nature-s-finest-roast-coffee-beans-roast-machine-ar-32_983420-222884.jpg?w=740"
                }
                alt={"Rost"}
                layout="fill"
                objectFit="cover"
                className=" rounded-lg shadow-lg transform transition-transform duration-500 group-hover:rounded-lg group-hover:scale-110"
              />
              <div
                className=" w-32 absolute bottom-0 top-60 backdrop-blur-2xl text-[#00cd71] "
                style={{ borderRadius: "0px 100px 0px 0px" }}
              >
                <h1 className=" text-center pt-3 ">Green Tea</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: red !important;
          background: white !important;
          border-radius: 50%;
          width: 40px;
          height: 40px;
        }
      `}</style> */}
    </div>
  );
};

export default EXPERIENCE;
