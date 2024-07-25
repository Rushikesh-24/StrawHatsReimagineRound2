"use client";
import React from "react";
import { motion } from "framer-motion";

const Scroll = ({ text, value }: {text:string, value:boolean}) => {
  const Text = text.split(" ");
  return (
    <div className="my-3 flex">
      <div className="flex w-full overflow-hidden">
        <motion.div className="flex whitespace-nowrap">
          <motion.div
            className="flex"
            animate={{ x: value ? "-100%" : "0%" }}
            initial={{ x: value ? "0%" : "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              yoyo: Infinity,
              ease: "linear",
            }}
          >
            {Text.map((word:string, index:number) => (
              <p
                className={`sm:text-6xl p-2 sm:mx-2 text-2xl mx-1 ${index%2 === 0 ? "font-contrail" : "font-bebas"}`}
                key={index}
              >
                {word}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="left-full flex"
            animate={{ x: value ? "-100%" : "0%" }}
            initial={{ x: value ? "0%" : "-100%" }}
            transition={{
              duration: 15,
              repeat: Infinity,
              yoyo: Infinity,
              ease: "linear",
            }}
          >
            {Text.map((word: string, index: number) => (
              <p
                className={`sm:text-6xl p-2 sm:mx-2 text-2xl mx-1 ${index%2 === 0 ? "font-contrail" : "font-bebas"}`}
                key={index}
              >
                {word}
              </p>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Scroll;
