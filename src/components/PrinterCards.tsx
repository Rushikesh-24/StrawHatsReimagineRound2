"use client";
import { easeInOut, motion, useAnimation } from "framer-motion";
import { Silkscreen } from "next/font/google";
import Link from "next/link";
import { useState, useEffect } from "react";

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  display: "swap",
  subsets: ["latin"],
});

const randomLetter = () => {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters[Math.floor(Math.random() * letters.length)];
};

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

  const handleClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    const sequence = ()=> {
    Zoomcontrols.start({
      scale: isOpen ? 50 : 1,
      transition: { duration: 2 },
    });
    setPageTransition(true);
    }
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

  const handleMouseMove = (e: any) => {
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
      className={`h-[100vh] w-[95vw] bg-white rounded-3xl pt-20 flex flex-col items-center relative ${
        isOpen ? "px-0" : "px-5"
      }`}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`${silkScreen.className} font-normal text-left sm:text-[14.5rem] text-3xl text-white mix-blend-difference w-full z-10`}
        style={{ textAlign: "left" }}
      >
        {text.join("")}
      </div>
      <div className="flex justify-center items-center mt-8">
        <motion.div
          className="relative -top-14 size-[35rem] rounded-full flex items-center justify-center border-b-8 border-black -rotate-[30deg]"
          animate={controls}
        ></motion.div>
        <motion.div
          className={`size-[30rem] rounded-full bg-black flex flex-col justify-center items-center absolute bottom-[4.8rem]`}
          onClick={handleClick}
          animate={Zoomcontrols}
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
      {isOpen && pageTransition && (
        <>
          <motion.div
           className="absolute bottom-0 -left-10 transform z-20 bg-white h-[70vh] w-[40vw] flex flex-col gap-14 items-center pt-14"
           initial={{ z: -20, opacity: 0}}
           animate={{ z: 0, opacity: 1}}
           transition={{delay: 0.5, ease: easeInOut}}>>
            <img src="/printer1straight.png" alt="" className="size-80"/>
            <div className={`flex justify-center items-center gap-5 text-black text-xl ${silkScreen.className}`}><p>{`[  `}</p><Link href={"/"} className="underline">BUY NOW</Link><p>{`  ]`}</p></div>

          </motion.div>
          <motion.div
           className="absolute top-0 -right-10 bg-white h-48 w-[40vw]"
           initial={{ z: -20, opacity: 0}}
           animate={{ z: 0, opacity: 1}}
           transition={{delay: 0.5, ease: easeInOut}}>

          </motion.div>
        </>
      )}
    </div>
  );
};

export default PrinterCards;
