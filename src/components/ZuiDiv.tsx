import React, { FC, useRef, useState } from "react";
import {
  useMotionValue,
  useScroll,
  useVelocity,
  useSpring,
  useTransform,
  wrap,
  useAnimationFrame,
  motion,
} from "framer-motion";
import ceo from "../../public/CEO.png";
import eos from "../../public/EOSR1.png";
import people from "../../public/People.png";
import Image from "next/image";

interface ParallaxDivsProps {
  baseVelocity?: number;
  children: React.ReactNode;
}

const ParallaxDivs: FC<ParallaxDivsProps> = ({ baseVelocity = 100, children }) => {
  const [baseVelocity2, setbaseVelocity] = useState(baseVelocity)
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });
  const x = useTransform(baseX, (v) => `${wrap(100, -100, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity2 * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax whitespace-nowrap flex flex-nowrap w-full h-full">
      <motion.div
        className="scroller flex whitespace-nowrap w-full h-full transition-all ease-linear"
        style={{ x }}
        
      >
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <motion.div
            onHoverStart={()=>setbaseVelocity(0)}
        onHoverEnd={()=>setbaseVelocity(baseVelocity)}
              key={index}
              className="md:w-full h-full flex justify-between mx-4 space-x-4 md:space-x-8 gap-2"
            >
              {children}
            </motion.div>
          ))}
      </motion.div>
    </div>
  );
};

export const ParallaxDiv: FC = () => {
  return (
    <motion.div className="w-full h-[40%] pointer-events-auto flex justify-center items-center z-[999]"
    initial={{scale:0}}
    animate={{scale:1}}
    transition={{duration:1,delay:0.3,ease:"easeInOut"}}
    >
      <ParallaxDivs baseVelocity={-10}>
        <motion.div
          className="size-64 flex flex-col relative group justify-center items-center"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-[10%] text-3xl flex items-center justify-center text-black font-bold">
            THE LAUNCH
          </div>
          <div className="w-full h-[90%] relative flex items-center justify-center rounded-md">
          <Image
            src={eos}
            alt=""
            className="w-full h-full object-cover rounded-md group-hover:opacity-70"
            placeholder="blur"
          />
          <p className="group-hover:flex hidden absolute w-full h-full top-1/2 justify-center items-end left-1/2 transform -translate-x-1/2 -translate-y-1/2  text-wrap text-center bg-black bg-opacity-70 rounded-md">Canon Elevates Legacy with EOS R1 & EOS R5 Mark II: Unveils the Next Gen Innovations in Filmmaking & Photography</p>
          </div>
          
        </motion.div>
        <motion.div
          className="size-64 flex flex-col group"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-[90%] flex p-2 bg-black rounded-md">
            <div className="h-full w-1/5 text-base whitespace-nowrap flex justify-center items-center flex-col">
              <p>P</p>
              <p>R</p>
              <p>E</p>
              <p>S</p>
              <p>I</p>
              <p>D</p>
              <p>E</p>
              <p>N</p>
              <p>T</p>
            </div>
            <div className="h-full w-4/5 flex flex-col justify-center items-center p-2 relative">
              <p className="text-center text-6xl">CEO</p>
              <Image
                src={ceo}
                alt=""
                className="object-cover group-hover:opacity-10 transition-opacity"
                placeholder="blur"
              />
              <p className="w-full text-wrap absolute text-end bottom-0 -left-2 text-sm hidden group-hover:flex group-hover:transition-all ease-in-out duration-150">Canon India Appoints Toshiaki Nomura as New President & CEO to Drive Future Growth of the Company</p>
            </div>
          </div>
          <div className="w-full h-[10%] text-3xl flex items-center justify-center text-black font-bold">
            APPOINTED
          </div>
        </motion.div>
        <motion.div
          className="size-64 flex flex-col"
          initial={{z:0}}
          whileHover={{ scale: 1.2 ,z:1000}}
          transition={{ duration: 0.3 }}
        >
          <div className="w-full h-[10%] text-3xl flex items-center justify-center text-black font-bold">
            Enhanced
          </div>
          <div className="w-full h-[90%] flex flex-col bg-black p-2 rounded-md">
            <div className="w-full h-[30%] text-left text-wrap text-xs">
              Enhances Its Apprenticeship Training Program Under Skill India Initiative
            </div>
            <Image
              src={people}
              alt=""
              className="w-full h-[70%] object-cover rounded-md"
              placeholder="blur"
            />
          </div>
        </motion.div>
      </ParallaxDivs>
    </motion.div>
  );
};
