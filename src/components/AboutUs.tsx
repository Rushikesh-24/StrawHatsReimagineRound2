"use client";
import React, { useEffect, useState, useRef } from "react";
import { Silkscreen } from "next/font/google";
import { motion, AnimatePresence, useScroll } from "framer-motion";

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
      const newIndex = Math.min(Math.floor(progress * data.length), data.length - 1);
      setCurrentIndex(newIndex);
    });
  }, [scrollYProgress, data.length]);

  useEffect(() => {
    if (currentIndex === 2) {
      const timer = setTimeout(() => {
        setAnimationComplete(true);
      }, 700); // Adjust delay as necessary
      return () => clearTimeout(timer);
    } else {
      setAnimationComplete(false);
    }
  }, [currentIndex]);

  return (
    <div className={`w-screen h-screen overflow-hidden ${silkScreen.className}`}>
      <div ref={ref} className="w-full h-full overflow-y-scroll">
        <div className="w-full h-[300vh] flex flex-col justify-center items-center">
          <div className="fixed top-0 w-full h-screen flex justify-center items-center bg-white">
            <div className="w-3/4 h-4/6 bg-black rounded-[3rem] relative flex flex-col justify-around p-4">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={data[currentIndex].title}
                  className={`text-center text-white lg:text-9xl md:text-7xl text-6xl absolute lg:-top-2 -top-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 line-clamp-1 w-screen mix-blend-difference`}
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
                className="absolute bg-white mix-blend-difference w-1/3 h-10 -right-20 top-[35%] z-50"
                initial={{ x: 100 }}
                animate={{ x: currentIndex === 1 ? 60 : -1000 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bg-white mix-blend-difference w-1/3 h-10 -left-20 bottom-40 z-50"
                initial={{ x: -100 }}
                animate={{ x: currentIndex === 1 ? -60 : 1000 }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
