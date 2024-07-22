'use client'
import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Silkscreen } from "next/font/google"

const Scroll = () => {
  const { scrollY } = useScroll();
  const sliderHeight = useTransform(scrollY, [0, 1], ["0%","100%"]);
  return (
    <div className={`font-silk fixed z-10 bottom-10 left-20 text-4xl w-14 h-72 flex justify-center items-center gap-5`}
    >
      <div className='h-3/4 w-1/5 border border-white bg-red-600  relative'>
      <motion.div 
          className="absolute bottom-0 w-full h-full bg-white" 
          style={{ height: sliderHeight }} 
        />
      </div>
      <div className='h-full w-3/5 flex flex-col items-center justify-center gap-1'>
      <p>S</p>
      <p>C</p>
      <p>R</p>
      <p>O</p>
      <p>L</p>
      <p>L</p>
      </div>
    </div>
  )
}

export default Scroll