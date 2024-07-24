import React from "react";
import { Contrail_One } from "next/font/google";
import { Bebas_Neue } from "next/font/google";
import HeroBg from "../../../public/HeroBgnew.png";
import Image from "next/image";
import { motion } from "framer-motion";
const contrail_One = Contrail_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-silk",
});
const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
  variable: "--font-bebas",
});
const Hero2 = () => {
  return (
    <div
      data-scroll-section
      className="bg-[#DF0C13] w-screen h-screen flex flex-col relative overflow-hidden"
    >
      <div className="w-full h-[70vh] relative ">
        <h1
          className={`text-black ${contrail_One.className} xl:text-[30rem] lg:text-[25rem] md:text-[20rem] sm:text-[15rem] text-[10rem] size-full text-end line-clamp-1 flex lg:justify-end justify-center items-center font-extrabold outline-white`}
        >
          CANON
        </h1>
        <h2
          className={`absolute top-24 right-0 ${bebas.className} sm:text-8xl text-6xl sm:mix-blend-difference`}
        >
          CAPTURING EVERY
        </h2>
        <h2
          className={`absolute ${bebas.className} lg:left-1/3 lg:top-[70%] md:top-[80%] md:left-1/4 top-[80%] sm:text-8xl text-6xl line-clamp-1 sm:mix-blend-difference `}
        >
          OF YOUR LIFETIME
        </h2>
      </div>
      <div className="w-full h-[30vh] bg-black flex justify-end items-center pr-6 ">
        <Image
          src={HeroBg}
          alt=""
          className={`absolute sm:w-[35%] w-1/2 bottom-0 sm:left-10 left-0`}
        />
        <p className={`${contrail_One.className} w-1/2 text-end text-xl view`}>
          At Canon, the CSR endeavors are driven by its corporate philosophy of
          ‘Kyosei’, embodying the spirit of ‘living and working together for
          common good’.
        </p>
      </div>
      <div
        className={`absolute size-full -z-10 ${bebas.className} text-[#720A0B] whitespace-nowrap`}
      >
        <div className="size-full relative -z-10">
          <p className="absolute -bottom-[80%] left-0 text-[80rem] line-clamp-1 hover:hidden">
            C
          </p>
          <p className="absolute rotate-180 left-1/3 -top-40 text-[26rem] line-clamp-1">
            A
          </p>

          <p className="rotate-90 absolute right-[20%] -top-40 text-[22rem]">
            N
          </p>
          <p className="rotate-90 absolute right-[40%] -top-40 text-[22rem]">
            N
          </p>
          <p className="rotate-90 absolute right-1/4 -top-2/4 text-[80rem] whitespace-nowrap line-clamp-1">
            O
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
