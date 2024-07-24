'use client'
import { useRef, useEffect, MouseEvent } from 'react';

export default function Home() {
  const path = useRef<SVGPathElement>(null);
  let progress = 0;
  let x = 0.5;
  let time = Math.PI / 2;
  let reqId: number | null = null;

  useEffect(() => {
    setPath(progress);
  }, []);

  const setPath = (progress: number) => {
    const width = window.innerWidth * 0.7;
    if (path.current) {
      path.current.setAttributeNS(null, "d", `M0 250 Q${width * x} ${250 + progress}, ${width} 250`);
    }
  }

  const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

  const manageMouseEnter = () => {
    if (reqId !== null) {
      cancelAnimationFrame(reqId);
      resetAnimation();
    }
  }

  const manageMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { movementY, clientX } = e;
    if (path.current) {
      const pathBound = path.current.getBoundingClientRect();
      x = (clientX - pathBound.left) / pathBound.width;
      progress += movementY;
      setPath(progress);
    }
  }

  const manageMouseLeave = () => {
    animateOut();
  }

  const animateOut = () => {
    const newProgress = progress * Math.sin(time);
    progress = lerp(progress, 0, 0.025);
    time += 0.2;
    setPath(newProgress);
    if (Math.abs(progress) > 0.75) {
      reqId = requestAnimationFrame(animateOut);
    } else {
      resetAnimation();
    }
  }

  const resetAnimation = () => {
    time = Math.PI / 2;
    progress = 0;
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black text-white">
      <div className="flex flex-col items-end w-[70vw]">
        <div className="relative w-full mb-20">
          <div 
            onMouseEnter={manageMouseEnter} 
            onMouseMove={manageMouseMove} 
            onMouseLeave={manageMouseLeave} 
            className="relative h-10 w-full z-10"
          ></div>
          <svg className="absolute top-[-250px] w-full h-[500px]">
            <path ref={path} className="stroke-white stroke-1 fill-none"></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
