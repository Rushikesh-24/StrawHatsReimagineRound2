"use client";
import { Silkscreen } from "next/font/google";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center fixed z-10 px-14 w-full h-24 bg-black">
        <div
          className={`${silkScreen.className} font-normal text-7xl text-center text-white`}
        >
          CAMERAS
        </div>
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className="size-14 relative flex flex-col gap-1 justify-center"
          animate={isOpen ? "open" : "closed"}
        >
          <motion.div
            className="h-1 w-4 ml-1 bg-white"
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
            className="w-full h-2 bg-white rounded-t-sm"
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
            className="w-full h-2 bg-white rounded-t-sm absolute"
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
            className="w-full h-2 bg-white"
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
            className="w-full h-2 bg-white rounded-b-sm"
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
            className="size-6 rounded-full bg-white border-2 border-black absolute top-[35%] left-[25%]"
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
          className="fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center"
          initial={{ opacity: 0, x: 1000 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -1000 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-4xl mb-4">Menu Item 1</div>
          <div className="text-4xl mb-4">Menu Item 2</div>
          <div className="text-4xl">Menu Item 3</div>
        </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
