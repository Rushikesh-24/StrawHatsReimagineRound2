"use client";
import {
  easeInOut,
  motion,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import { Silkscreen } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";
import MenuItem from "./MenuItem";

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const randomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

const slides = [
  {
    content: [
      "Print, Scan, Copy",
      "Print Speed (A4, ISO): up to 11 / 6 images per minute (mono/colour)",
      "USB 2.0",
      "Recommended Monthly Print Volume: 150 - 1 500 pages",
    ],
    image: "/printer1straight.png",
  },
  {
    content: [
      "High Resolution Printing",
      "Wireless Connectivity",
      "Automatic Duplex Printing",
      "Energy Efficient",
    ],
    image: "/printer2straight.png",
  },
];

const PrinterCards = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("PIXMA".split("").map(() => randomLetter()));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSettling, setIsSettling] = useState(false);
  const controls = useAnimation();
  const Zoomcontrols = useAnimation();
  const [rotationDirection, setRotationDirection] = useState(1);
  const [rotationSpeed, setRotationSpeed] = useState(10);
  const [pageTransition, setPageTransition] = useState(false);
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleNext = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrevious = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const sequence = () => {
      Zoomcontrols.start({
        scale: isOpen ? 50 : 1,
        transition: { duration: 2 },
      });
      setPageTransition(true);
    };
    sequence();
  }, [isOpen, Zoomcontrols]);

  useEffect(() => {
    let randomizeInterval;
    let settleInterval;
    let initialTimeout;

    if (!isSettling) {
      // Randomization Phase
      randomizeInterval = setInterval(() => {
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? "PIXMA"[index] : randomLetter()
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
          newText[currentIndex] = "PIXMA"[currentIndex];
          return newText;
        });
        setCurrentIndex((prevIndex) => prevIndex + 1);
        if (currentIndex === "PIXMA".length) {
          clearInterval(settleInterval);
        }
      }, 500);

      // After randomization
      setTimeout(() => {
        clearInterval(settleInterval);
        setText((prevText) =>
          prevText.map((char, index) =>
            index < currentIndex ? "PIXMA"[index] : randomLetter()
          )
        );
        const finalSettleInterval = setInterval(() => {
          setText((prevText) => {
            const newText = [...prevText];
            newText[currentIndex] = "PIXMA"[currentIndex];
            return newText;
          });
          setCurrentIndex((prevIndex) => prevIndex + 1);
          if (currentIndex === "PIXMA".length) {
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
  }, [isSettling, currentIndex]);

  const handleMouseMove = (e) => {
    const boundingRect = e.currentTarget.getBoundingClientRect();
    const centerX = boundingRect.left + boundingRect.width / 2;
    if (e.clientX < centerX) {
      setRotationDirection(1); // Clockwise
    } else {
      setRotationDirection(-1); // Anticlockwise
    }
  };

  const handleScroll = () => {
    setRotationSpeed(1); // Increase rotation speed by 10 times
    setTimeout(() => {
      setRotationSpeed(10); // Reset rotation speed after 2 seconds
    }, 2000);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    controls.start({
      rotate: rotationDirection * 360,
      transition: { repeat: Infinity, duration: rotationSpeed, ease: "linear" },
    });
  }, [rotationDirection, controls, rotationSpeed]);

  return (
    <div
      className={`h-[100vh] w-[95vw] bg-white rounded-3xl flex flex-col items-center relative ${
        isOpen ? "px-0 pt-10" : "px-5 pt-20"
      }`}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`${silkScreen.className} font-normal text-left ${
          isOpen ? "sm:text-[10rem]" : "sm:text-[14.5rem]"
        } text-3xl text-white mix-blend-difference w-full z-10`}
        style={{ textAlign: "left" }}
      >
        {text.join("")}
      </div>
      <div className="flex justify-center items-center mt-8">
        <motion.div
          className="relative -top-14 size-[35rem] rounded-full flex items-center justify-center border-b-8 border-black -rotate-[30deg]"
          animate={pageTransition ? "" : controls}
        ></motion.div>
        <motion.div
          className={`size-[30rem] rounded-full bg-black flex flex-col justify-center items-center absolute bottom-[4.8rem]`}
          onClick={handleClick}
          animate={isOpen ? "" : Zoomcontrols}
        >
          <img
            src="/printer1.png"
            alt=""
            className={`size-96 ${isOpen ? "hidden" : "flex"}`}
          />
          <p
            className={`${silkScreen.className} text-white ${
              isOpen ? "hidden" : "flex"
            }`}
          >
            CLICK TO EXPLORE
          </p>
        </motion.div>
      </div>
      <div
        className={`${silkScreen.className} font-normal text-right text-black w-full absolute bottom-5 right-5`}
      >
        SCROLL TO SEE OTHER CATEGORIES
      </div>
      <AnimatePresence>
        {isOpen && pageTransition && (
          <>
            <motion.div
              className="absolute bottom-0 -left-10 transform z-20 bg-white h-[75vh] w-[35vw] flex flex-col gap-14 items-center pt-14"
              initial={{ z: -20, opacity: 0 }}
              animate={{ z: 0, opacity: 1 }}
              exit={{ z: -20, opacity: 0 }}
              transition={{ delay: 0.5, ease: easeInOut }}
            >
              <AnimatePresence wait>
                <motion.img
                  key={slideIndex}
                  src={slides[slideIndex].image}
                  alt=""
                  className="size-80"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                />
              </AnimatePresence>
              <div
                className={`flex justify-center items-center gap-5 text-black text-xl ${silkScreen.className}`}
              >
                <p>{`[  `}</p>
                <Link href={"/"} className="underline">
                  BUY NOW
                </Link>
                <p>{`  ]`}</p>
              </div>
            </motion.div>
            <motion.div
              className="absolute top-0 -right-10 bg-white h-32 w-[40vw] flex justify-end items-center pr-5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.5, ease: easeInOut }}
            >
              <motion.button
                onClick={() => {
                  setIsHamOpen(!isHamOpen);
                }}
                className={`sm:size-14 size-8 relative flex flex-col sm:gap-1 gap-[2px] justify-center z-50 ${
                  isHamOpen ? "mt-5" : ""
                }`}
                animate={isHamOpen ? "open" : "closed"}
              >
                {/* Hamburger Icon */}
                <motion.div
                  className="h-1 sm:w-4 w-2 ml-1 bg-black"
                  variants={{
                    open: { scale: 0 },
                    closed: { scale: 1 },
                  }}
                ></motion.div>
                <motion.div
                  className={`w-full ${
                    isHamOpen
                      ? "rounded-sm sm:h-2 h-1 bg-white"
                      : "rounded-t-sm h-2 bg-black"
                  }`}
                  variants={{
                    open: { rotate: "45deg" },
                    closed: { rotate: "0deg" },
                  }}
                ></motion.div>
                <motion.div
                  className={`w-full absolute ${
                    isHamOpen
                      ? "rounded-sm sm:h-2 h-1 bg-white"
                      : "rounded-t-sm h-2 bg-black"
                  }`}
                  variants={{
                    open: { rotate: "-45deg", top: "30%" },
                    closed: { rotate: "0deg", opacity: 0 },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-2 bg-black"
                  variants={{
                    open: { scale: 0 },
                    closed: { scale: 1 },
                  }}
                ></motion.div>
                <motion.div
                  className="w-full h-2 bg-black rounded-b-sm"
                  variants={{
                    open: { scale: 0 },
                    closed: { scale: 1 },
                  }}
                ></motion.div>
                <motion.div
                  className="sm:size-6 size-4 rounded-full bg-black border-2 border-white absolute top-[35%] left-[25%]"
                  variants={{
                    open: { scale: 0 },
                    closed: { scale: 1 },
                  }}
                ></motion.div>
              </motion.button>
              {/* Menu Items */}
              <AnimatePresence>
                {isHamOpen && (
                  <motion.div
                    className="fixed left-0 top-0 w-full h-screen place-content-center flex flex-col items-center justify-center z-40 bg-black"
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
            </motion.div>
            <motion.div
             className="flex flex-col items-center absolute -right-10 bottom-0 h-[80vh] w-[65vw] pt-14 gap-5"
             initial={{ z: -20, opacity: 0 }}
             animate={{ z: 0, opacity: 1 }}
             exit={{ z: -20, opacity: 0 }}
             transition={{ delay: 0.5, ease: easeInOut }}>
              <div
                className={`${silkScreen.className} font-normal text-left sm:text-[10rem] text-3xl text-[#434343] mix-blend-difference w-full`}
                style={{ textAlign: "left" }}
              >
                G4770
              </div>
              <AnimatePresence wait>
                <motion.div
                  key={slideIndex}
                  className={`flex flex-col gap-5 text-2xl ${silkScreen.className} font-normal text-left h-40 w-full mt-20 pl-4`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  {slides[slideIndex].content.map((text, index) => (
                    <p key={index}>{text}</p>
                  ))}
                </motion.div>
              </AnimatePresence>
              <div className="w-full h-28 flex justify-end items-center mt-16 pr-16">
                <FaCaretLeft className="text-6xl cursor-pointer" onClick={handlePrevious} />
                <FaCaretRight className="text-6xl cursor-pointer" onClick={handleNext} />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PrinterCards;
