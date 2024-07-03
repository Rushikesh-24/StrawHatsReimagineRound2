'use client'
import { AnimationControls, motion, useAnimation } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import Image from 'next/image';
import camera from '../../public/canon.png'
import { Sacramento } from "next/font/google";

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

  useEffect(() => {
    const sequence = async () => {
      await controls.start({ opacity: 1, scale: 0.4, transition: { duration: 2 } });
      setShowFlash(true);
      await controls.start({ opacity: 1, transition: { duration: 0.8 } });
      await controls.start({ opacity: 0, transition: { duration: 0.8 } });
      setShowFlash(false);
      setZoomInLens(true);
      await new Promise(resolve => setTimeout(resolve, 3000)); // Delay to show zoom effect
      setShowContent(true);
    };
    sequence();
  }, [controls]);

  if (showContent) {
    return (
      <div className="relative flex justify-center items-center h-screen bg-black">
        {children}
      </div>
    );
  }

  return (
    <div className="relative flex justify-center items-center h-screen bg-black overflow-hidden">
      {!zoomInLens && (
        <motion.div
          className={`absolute text-white z-10 font-normal text-7xl leading-[110px] ${font.className}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Smile...
        </motion.div>
      )}
      {showFlash && (
        <motion.div
          className="absolute inset-0 bg-white z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <motion.div
        className={`${zoomInLens ? 'absolute -inset-36 z-20 transform' : 'relative'} flex justify-start`}
        initial={{ opacity: 0, scale: 0.2 }}
        animate={zoomInLens ? { opacity: 0.85, scale: 3.9,x:-1000,y:330 } : controls}
        transition={{ duration: 1 }}
      >
        <Image src={camera} alt="Camera" layout={zoomInLens ? "fill" : "intrinsic"} objectFit={zoomInLens ? "cover" : "contain"} className={`${zoomInLens ? '-inset-44':''}`}/>
      </motion.div>
    </div>
  );
};

export default CameraAnimation;
