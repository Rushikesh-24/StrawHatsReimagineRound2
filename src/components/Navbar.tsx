"use client";
import { Silkscreen } from "next/font/google";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MenuItem from "./MenuItem";

// Define SilkScreen font
const silkScreen = Silkscreen({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const randomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

interface NavbarProps {
  page: string;
}

const Navbar: React.FC<NavbarProps> = ({ page }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(page.split("").map(() => randomLetter()));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSettling, setIsSettling] = useState(false);

  useEffect(() => {
    let randomizeInterval: NodeJS.Timeout;
    let settleInterval: NodeJS.Timeout;
    let initialTimeout: NodeJS.Timeout;

    if (!isSettling) {
      // Randomization Phase
      randomizeInterval = setInterval(() => {
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? page[index] : randomLetter()
          )
        );
      }, 100);

      initialTimeout = setTimeout(() => {
        clearInterval(randomizeInterval);
        setIsSettling(true);
        setCurrentIndex(0);
      }, 2000);
    } else {
      // Settling Phase
      settleInterval = setInterval(() => {
        setText((prevText) => {
          const newText = [...prevText];
          newText[currentIndex] = page[currentIndex];
          return newText;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === page.length) {
          clearInterval(settleInterval);
        }
      }, 500);

      // After randomization
      setTimeout(() => {
        clearInterval(settleInterval);
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? page[index] : randomLetter()
          )
        );
        const finalSettleInterval = setInterval(() => {
          setText((prevText) => {
            const newText = [...prevText];
            newText[currentIndex] = page[currentIndex];
            return newText;
          });
          setCurrentIndex((prevIndex) => prevIndex + 1);
          if (currentIndex === page.length) {
            clearInterval(finalSettleInterval);
          }
        }, 500);
      }, 1000);
    }

    return () => {
      clearInterval(randomizeInterval);
      clearInterval(settleInterval);
      clearTimeout(initialTimeout);
    };
  }, [isSettling, currentIndex, page]);

  return (
    <>
      {/* Navbar Header */}
      <div className="flex justify-between items-center fixed z-20 sm:px-14 px-2 w-full sm:h-24 h-16 bg-transparent">
        <div className={`${silkScreen.className} font-normal sm:text-7xl text-3xl text-center text-white`}>
          {text.join("")}
        </div>
        {/* Hamburger Button */}
        <motion.button
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={`sm:size-14 size-8 relative flex flex-col sm:gap-1 gap-[2px] justify-center ${isOpen ? "mt-5" : ""}`}
          animate={isOpen ? "open" : "closed"}
        >
          {/* Hamburger Icon */}
          <motion.div
            className="h-1 sm:w-4 w-2 ml-1 bg-white"
            variants={{
              open: { scale: 0 },
              closed: { scale: 1 },
            }}
          ></motion.div>
          <motion.div
            className={`w-full bg-white ${isOpen ? "rounded-sm sm:h-2 h-1" : "rounded-t-sm h-2"}`}
            variants={{
              open: { rotate: "45deg" },
              closed: { rotate: "0deg" },
            }}
          ></motion.div>
          <motion.div
            className={`w-full bg-white absolute ${isOpen ? "rounded-sm sm:h-2 h-1" : "rounded-t-sm h-2"}`}
            variants={{
              open: { rotate: "-45deg", top: "30%" },
              closed: { rotate: "0deg", opacity: 0 },
            }}
          ></motion.div>
          <motion.div
            className="w-full h-2 bg-white"
            variants={{
              open: { scale: 0 },
              closed: { scale: 1 },
            }}
          ></motion.div>
          <motion.div
            className="w-full h-2 bg-white rounded-b-sm"
            variants={{
              open: { scale: 0 },
              closed: { scale: 1 },
            }}
          ></motion.div>
          <motion.div
            className="sm:size-6 size-4 rounded-full bg-white border-2 border-black absolute top-[35%] left-[25%]"
            variants={{
              open: { scale: 0 },
              closed: { scale: 1 },
            }}
          ></motion.div>
        </motion.button>
      </div>

      {/* Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed left-0 w-full h-screen place-content-center flex flex-col items-center justify-center z-10 bg-black"
            initial={{ opacity: 0, x: 1000 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -1000 }}
            transition={{ duration: 0.5 }}
          >
            <MenuItem href="/menu-item-1">Menu Item 1</MenuItem>
            <MenuItem href="/menu-item-2">Menu Item 2</MenuItem>
            <MenuItem href="/menu-item-3">Menu Item 3</MenuItem>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;