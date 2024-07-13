"use client";
import { AnimationControls, motion, useAnimation } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import Image from "next/image";
import camera from "../../public/canon.png";
import { Sacramento } from "next/font/google";
import { TextGenerateEffect } from "./TextGenerate";

const font = Sacramento({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

interface CameraAnimationProps {
  children: ReactNode;
}

const CameraAnimation: React.FC<CameraAnimationProps> = ({ children }) => {
  const controls: AnimationControls = useAnimation();
  const [showFlash, setShowFlash] = useState(false);
  const [zoomInLens, setZoomInLens] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadWebsite = async () => {
      await new Promise((resolve) => setTimeout(resolve, 3000));
      setLoading(false);
    };
    const sequence = async () => {
      await controls.start({
        opacity: 1,
        scale: 0.4,
        transition: { duration: 2, delay: 1.2 },
      });
      setShowFlash(true);
      await controls.start({ opacity: 1, transition: { duration: 0.7 } });
      await controls.start({ opacity: 0, transition: { duration: 0.7 } });
      setShowFlash(false);
      setZoomInLens(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowContent(true);
    };

    loadWebsite().then(() => {
      sequence();
    });
  }, [controls]);

  if (showContent) {
    return (
      <motion.div
        className="relative flex justify-center items-center h-screen bg-black"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 0.9, 1] }}
        transition={{ duration: 2, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
      {loading && (
        <div
          className={`absolute text-white z-10 font-medium text-7xl leading-[110px]  ${font.className}`}
        >
          <TextGenerateEffect words="Smile..." />
        </div>
      )}
      {showFlash && (
        <motion.div
          className="absolute inset-0 z-10 blur-sm"
          initial={{ opacity: 0, scale: 1 ,backgroundColor:"white"}}
          animate={{ opacity: [1, 0.8, 0.6, 0.4, 0], scale: 1 ,backgroundColor:"black"}}
          transition={{
            duration: 0.1,
            repeat: 1,
            repeatType: "reverse",
            opacity: [0, 0.4, 0.6, 0.8, 1],
          }}
        />
      )}
      <motion.div
        className={`${
          zoomInLens ? "absolute -inset-36 z-20 transform" : "relative"
        } flex justify-start`}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={
          zoomInLens ? { opacity: 0.85, scale: 4, x: -1000, y: 330 } : controls
        }
        transition={{ duration: 1, opacity: 0.3 }}
      >
        <Image
          src={camera}
          alt="Camera"
          layout={zoomInLens ? "fill" : "intrinsic"}
          objectFit={zoomInLens ? "cover" : "contain"}
          className={`${zoomInLens ? "-inset-44" : ""}`}
          loading="eager"
        />
        <div
          className={`absolute inset-0 bg-black ${
            zoomInLens ? "bg-opacity-65" : "bg-opacity-80 "
          }`}
        ></div>
      </motion.div>
    </div>
  );
};

export default CameraAnimation;
