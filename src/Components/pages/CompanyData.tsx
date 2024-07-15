"use client";
import { useState, useCallback } from "react";
import CountUp from "react-countup";
import { Parallax } from "react-parallax";
import ScrollTrigger from "react-scroll-trigger";

const ParallaxData: React.FC = () => {
  const [count, setCount] = useState(false);
  const [visible, setVisible] = useState(false);

  const onEnterViewport = useCallback(() => {
    setVisible(true);
  }, []);

  const onExitViewport = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <div className=" py-24 md:px-24">
      <Parallax
        blur={1}
        bgImage="https://img.freepik.com/free-photo/tea-plantation-south-korea-bright-green-bushes-are-green-tea_1101-2475.jpg?t=st=1719430781~exp=1719434381~hmac=69b86c7875c6314ff2a61c1e45ba4fdefd418482b27fb8fcdb728e8e06ffad0d&w=740"
        bgImageAlt="the cat"
        strength={300}
      >
        <div className="grid md:grid-cols-4 gap-12  md:px-12 py-20 bg-black bg-opacity-15">
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && (
                  <CountUp start={0} end={100} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Unique Tea & Coffee Varieties
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && (
                  <CountUp start={0} end={500} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Satisfied Customers
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && <CountUp start={0} end={20} duration={2} delay={0} />}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Countries Served
            </h1>
          </div>
          <div className="text-white flex flex-col justify-center items-center space-y-2">
            <ScrollTrigger
              onEnter={() => setCount(true)}
              onExit={() => setCount(false)}
            >
              <p className="text-6xl poppins-semibold">
                {count && (
                  <CountUp start={0} end={1000} duration={2} delay={0} />
                )}{" "}
                +
              </p>
            </ScrollTrigger>
            <h1 className="poppins-regular pt-2 text-xl border border-[#009975] px-2 py-1 rounded-md">
              Happy Customers
            </h1>
          </div>
        </div>
      </Parallax>
      <ScrollTrigger onEnter={onEnterViewport} onExit={onExitViewport}>
        <div className={`container ${visible ? "container-animate" : ""}`} />
      </ScrollTrigger>
    </div>
  );
};

export default ParallaxData;
