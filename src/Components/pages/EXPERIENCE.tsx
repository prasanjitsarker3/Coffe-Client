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
                  "https://img.freepik.com/premium-photo/tea-picking-farmers_12091-120.jpg?w=740"
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
                <h1 className=" text-center pt-3 ">Field Process</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/free-photo/front-view-tea-herbal-concept-with-copy-space_23-2148555200.jpg?t=st=1719424701~exp=1719428301~hmac=4f82fdaf4cd3de484c4e39a58c4eeb110897642be97bc2761dbed03edd832426&w=360"
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
                  "https://img.freepik.com/free-photo/delicious-coffee-beans-cup_23-2150691429.jpg?t=st=1719424799~exp=1719428399~hmac=671a595a49da7e60100ddc8dbe9f422dc630066008454edc3e2fd6e7a7b05368&w=360"
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
                <h1 className=" text-center pt-3 ">Black Coffee</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/free-photo/man-workers-collecting-holding-coffee-beans-harvesting-fresh-soft-colours_1268-29288.jpg?t=st=1719425183~exp=1719428783~hmac=95629473b334a9fd6583ccf65e0c0a0bcc1f91d5e6a49566b81f7d53cfdba237&w=740"
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
                <h1 className=" text-center pt-3 ">Beans Harvesting</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/young-indian-farmer-greenhouse-poly-house_75648-3436.jpg?w=740"
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
                <h1 className=" text-center pt-3 ">Poly House</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" relative group">
            <div className="relative h-72 overflow-hidden ">
              <Image
                src={
                  "https://img.freepik.com/premium-photo/topdown-view-coffee-roasting-machine-action-capturing-beans-as-they-tumble_891336-54467.jpg?w=740"
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
                <h1 className=" text-center pt-3 ">Single Estate</h1>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default EXPERIENCE;
