"use client";
import { useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Randomizer from "./Randomizer";
import Link from "next/link";
import { Contrail_One } from "next/font/google";

const Contrail = Contrail_One({
  display: "swap",
  subsets: ["latin"],
  weight: ["400"],
});

const refs = [
  {
    name: "Behance",
    link: "/",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    link: "https://twitter.com/",
  },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center fixed z-50 sm:px-14 px-2 w-screen sm:h-24 h-16">
        <div
          className={`${Contrail.className} font-normal sm:text-7xl text-3xl text-center text-white ${isOpen ? "opacity-0" : ""}`}
        >
          <Randomizer page={"CAMERAS"} />
        </div>
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`sm:size-14 size-8 relative flex flex-col sm:gap-1 gap-[2px] justify-center ${
            isOpen ? "mt-5" : ""
          }`}
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="h-1 sm:w-4 w-2 ml-1 bg-white mix-blend-difference"
            variants={{
              open: {
                scale: 0,
              },
              closed: {
                scale: 1,
              },
            }}
          ></motion.div>
          <motion.div
            className={`w-full bg-white mix-blend-difference ${
              isOpen ? "rounded-sm sm:h-2 h-1" : "rounded-t-sm h-2"
            }`}
            variants={{
              open: {
                rotate: "45deg",
              },
              closed: {
                rotate: "0deg",
              },
            }}
          ></motion.div>
          <motion.div
            className={`w-full bg-white absolute mix-blend-difference ${
              isOpen ? "rounded-sm sm:h-2 h-1" : "rounded-t-sm h-2"
            }`}
            variants={{
              open: {
                rotate: "-45deg",
                top: "30%",
              },
              closed: {
                rotate: "0deg",
                opacity: 0,
              },
            }}
          ></motion.div>
          <motion.div
            className="w-full h-2 bg-white mix-blend-difference"
            variants={{
              open: {
                scale: 0,
              },
              closed: {
                scale: 1,
              },
            }}
          ></motion.div>
          <motion.div
            className="w-full h-2 bg-white rounded-b-sm mix-blend-difference"
            variants={{
              open: {
                scale: 0,
              },
              closed: {
                scale: 1,
              },
            }}
          ></motion.div>
          <motion.div
            className="sm:size-6 size-4 rounded-full bg-white border-2 border-black absolute top-[35%] left-[25%]"
            variants={{
              open: {
                scale: 0,
              },
              closed: {
                scale: 1,
              },
            }}
          ></motion.div>
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 w-screen sm:h-screen h-full place-content-center flex flex-col items-center justify-center z-40 bg-black"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex sm:flex-row flex-col sm:justify-center justify-between items-center sm:gap-0 gap-10 h-full w-full sm:pt-20 pt-10">
              <div className="flex sm:flex-col flex-col-reverse sm:items-end items-center justify-between w-1/2 sm:h-full gap-4">
                <div className="sm:h-96 h-64 sm:w-3/4 w-[90vw] flex justify-center items-center">
                  <video
                    className="h-full w-full object-cover rounded-lg"
                    src="/videoplayback.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <motion.div
                 className={`flex sm:flex-col flex-row ${Contrail.className} sm:mb-20 md:px-48 items-start sm:text-2xl text-xl sm:h-32 h-14 sm:w-full gap-4`}
                 initial={{ opacity: 0 }}
                 animate={{ opacity: 1 }}
                 transition={{ delay: 1, ease: easeInOut }}>
                  <Link href={""} target={"blank"} className="hover:text-red-500">
                    <Randomizer page={"BEHANCE"} />
                  </Link>
                  <Link href={"https://www.instagram.com/canonindia_official/"} target={"blank"} className="hover:text-red-500">
                    <Randomizer page={"INSTAGRAM"} />
                  </Link>
                  <Link href={"https://www.facebook.com/canonindia/"} target={"blank"} className="hover:text-red-500">
                    <Randomizer page={"FACEBOOK"} />
                  </Link>
                  <Link href={"https://x.com/Canon_India"} target={"blank"} className="hover:text-red-500">
                    <Randomizer page={"TWITTER"} />
                  </Link>
                </motion.div>
              </div>
              <div
                className={`flex flex-col items-center gap-5 ${Contrail.className} font-normal lg:text-8xl md:text-6xl text-5xl w-1/2 h-full`}
              >
                {refs.map((ref, index) => {
                  return (
                    <motion.a
                     key={index}
                     href={ref.link} 
                     target={"blank"}
                     initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 20,
                        delay: 0.5*index,
                      }}
                     className="hover:text-red-500">
                      <Randomizer page={ref.name} />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
