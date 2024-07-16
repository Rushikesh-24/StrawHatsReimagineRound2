'use client'
import React, { useEffect } from "react";
import { Silkscreen } from "next/font/google"

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const Hero = () => {
  
  return (
    <div
      className={`h-screen w-screen flex bg-heroimage ${silkScreen.className} relative`}
    >
      <div className="hover-detect flex justify-start items-center bg-opacity-40 border-white border w-80 h-20 group cursor-pointer absolute bottom-28 right-28 overflow-hidden flex-row hover:bg-white /hover:flex-row-reverse transition-all ease-in-out duration-100 bg-black text-white">
      <div className="w-0 group-hover:w-1/4 h-full duration-500 group-hover:flex group-hover:translate-y-0 group-hover:translate-x-0 translate-y-full -translate-x-full justify-center items-center stroke-black bg-white  ">
          <svg
            width="37"
            height="43"
            viewBox="0 0 37 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=""
          >
            <line y1="4.7666" x2="37.0046" y2="4.7666" strokeWidth="8" />
            <line
              x1="33.0024"
              y1="43.0046"
              x2="33.0024"
              y2="6"
              strokeWidth="8"
            />
            <line
              x1="5.80187"
              y1="32.0887"
              x2="31.9681"
              y2="5.9225"
              strokeWidth="10"
            />
          </svg>
        </div>
        <div className="text-5xl w-3/4 h-full flex justify-center items-center bg-opacity-40 group-hover:text-black group-hover:bg-white duration-100">
          EXPLORE
        </div>
        <div className="w-1/4 h-full group-hover:w-[0%] overflow-hidden flex justify-center items-center stroke-black bg-white  group-hover:stroke-white">
          <svg
            width="37"
            height="43"
            viewBox="0 0 37 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="duration-500 group-hover:-translate-y-full group-hover:translate-x-full"
          >
            <line y1="4.7666" x2="37.0046" y2="4.7666" strokeWidth="8" />
            <line
              x1="33.0024"
              y1="43.0046"
              x2="33.0024"
              y2="6"
              strokeWidth="8"
            />
            <line
              x1="5.80187"
              y1="32.0887"
              x2="31.9681"
              y2="5.9225"
              strokeWidth="10"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
