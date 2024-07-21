import React, { FC, useRef } from "react";
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
import { Silkscreen, Vibes } from "next/font/google";


const vibes = Vibes({
    weight: ["400"],
    subsets: ["latin"],
    display: "swap",
  });

const silkScreen = Silkscreen({
    weight: ["400", "700"],
    subsets: ["latin"],
  });
  interface ParallaxTextProps {
    baseVelocity?: number;
    text1:string
    text2:string;
  }

const ParallaxText: FC<ParallaxTextProps> = ({ baseVelocity = 100,text1,text2 }) => {
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
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });
  return (
    <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap ">
      <motion.div
        className="scroller md:text-9xl text-6xl flex whitespace-nowrap flex-nowrap"
        style={{ x }}
      >
        {Array(4)
          .fill(null)
          .map((_, index) => (
            <span
              key={index}
              className={`block ${silkScreen.className} whitespace-nowrap flex flex-row justify-center items-center`}
            >
              <span className={`${vibes.className} text-6xl text-center mb-2 mx-4 ${text2=="and"?"mx-12":"mx-7"} flex justify-end items-center`}>{text2}</span>
              <span className={`${silkScreen.className} text-center mb-2 mx-4`}>{text1}</span>
            </span>
          ))}
      </motion.div>
    </div>
  );
}

const MovingText = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <section className="h-full flex justify-center items-center">
      <ParallaxText baseVelocity={props.text2 =="and"?15:-15} text1={props.text1} text2={props.text2}/>
    </section>
  );
};

export default MovingText;
