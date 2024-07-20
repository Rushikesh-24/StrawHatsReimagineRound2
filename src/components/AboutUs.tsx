"use client";
import React, { useEffect, useState, useRef } from "react";
import { Silkscreen } from "next/font/google";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import MovingText from "./Zui";
import { ParallaxDiv } from "./ZuiDiv";

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  subsets: ["latin"],
});

interface AboutUsProps {
  data: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
  }[];
}

const AboutUs: React.FC<AboutUsProps> = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: ref });

  useEffect(() => {
    return scrollYProgress.onChange((progress) => {
      const newIndex = Math.min(
        Math.floor(progress * data.length),
        data.length - 1
      );
      setCurrentIndex(newIndex);
    });
  }, [scrollYProgress, data.length]);

  useEffect(() => {
    console.log(currentIndex);
  }, [currentIndex]);

  return (
    <div className={`w-screen h-screen ${silkScreen.className}`}>
      <div
        ref={ref}
        className="w-full h-screen overflow-y-auto overflow-x-hidden relative"
      >
        <div className="w-full h-[500vh] flex flex-col justify-center items-center relative z-20 bg-yellow-300">
          <motion.div className="fixed pointer-events-none top-0 left-0 w-full h-screen flex justify-center items-center bg-white">
            <motion.div
              className={`w-3/4 h-4/6 transition-all duration-700 ease-in-out bg-black rounded-[3rem] relative flex flex-col justify-around p-4 items-center`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                width: currentIndex >= 3 ? "100vw" : "75%",
                height: currentIndex >= 3 ? "100vh" : "66.666667%",
                borderRadius: currentIndex >= 3 ? "0" : "3rem",
                justifyContent: currentIndex >= 3 ? "center" : "space-around",
              }}
            >
              <AnimatePresence mode="wait">
                <motion.h1
                  key={data[currentIndex].title}
                  className={`text-center text-white lg:text-9xl md:text-6xl sm:text-5xl text-3xl absolute lg:-top-2 -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-1 w-screen mix-blend-difference`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data[currentIndex].title}
                </motion.h1>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={data[currentIndex].paragraph1}
                  className="mt-10 text-sm md:text-lg md:mt-20 mr-20 ml-5 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data[currentIndex].paragraph1}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={data[currentIndex].paragraph2}
                  className="mt-10 text-sm md:text-lg md:mt-20 ml-20 mr-5 text-right"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data[currentIndex].paragraph2}
                </motion.div>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.div
                  key={data[currentIndex].paragraph3}
                  className="mt-10 text-sm md:text-lg md:mt-20 mr-20 ml-5 text-left"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {data[currentIndex].paragraph3}
                </motion.div>
              </AnimatePresence>
              <motion.div
                className="absolute bg-white transition-all  ease-in-out mix-blend-difference w-1/3 h-10 -right-20 top-[35%]"
                initial={{ x: 100, scaleY: 1, opacity: 1, y: 0 }}
                animate={{
                  x: currentIndex === 1 ? 60 : currentIndex == 2 ? -450 : -1000,
                  scaleY: currentIndex == 2 ? 4.05 : currentIndex > 2 ? 0.1 : 1,
                  opacity: currentIndex > 2 ? 0 : 1,
                }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                style={{
                  mixBlendMode:
                    currentIndex > 1
                      ? currentIndex > 2
                        ? "color"
                        : "lighten"
                      : "difference",
                  display: currentIndex > 2 ? "hidden" : "flex",
                }}
              />
              <motion.div
                className="absolute transition-all  ease-in-out bg-white mix-blend-difference w-1/3 h-10 -left-20 bottom-40"
                initial={{ x: -100, scaleY: 1, y: 0, opacity: 1 }}
                animate={{
                  x: currentIndex === 1 ? -60 : currentIndex === 2 ? 445 : 1000,
                  scaleY: currentIndex == 2 ? 4.05 : currentIndex > 2 ? 0.1 : 1,
                  opacity: currentIndex > 2 ? 0 : 1,
                }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                style={{
                  mixBlendMode:
                    currentIndex > 1
                      ? currentIndex > 2
                        ? "color"
                        : "lighten"
                      : "difference",
                  display: currentIndex > 2 ? "hidden" : "flex",
                }}
              />
              {currentIndex > 2 && (
                <motion.div
                  className="bg-white flex justify-between py-7 flex-col items-center w-full h-1/2 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  initial={{ opacity: 0.7, width: "20%", height: "50%" }}
                  animate={{
                    opacity: 1,
                    width: "100%",
                    height: currentIndex > 3 ? "100%" : "50%",
                  }}
                  transition={{ duration: 0.5, damping: 4, ease: "easeInOut" }}
                >
                  {currentIndex > 4 && (
                    <>
                      <motion.div
                        className="w-full md:h-1/4 sm:h-1/5 h-1/6 bg-black"
                        initial={{ x: "100%" }}
                        animate={{ x: "0%" }}
                        transition={{
                          duration: 0.5,
                          damping: 4,
                          ease: "easeInOut",
                        }}
                      >
                        <MovingText text1="News" text2="and" text3="" />
                      </motion.div>
                      <ParallaxDiv/>
                      <motion.div
                        className="w-full md:h-1/4 sm:h-1/5 h-1/6 bg-black "
                        initial={{ x: "-100%" }}
                        animate={{ x: "0%" }}
                        transition={{
                          duration: 0.5,
                          damping: 4,
                          ease: "easeInOut",
                        }}
                      >
                        <MovingText text1="Press" text2="release" text3="" />
                      </motion.div>
                    </>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
