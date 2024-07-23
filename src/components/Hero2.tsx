import React from 'react'
import { Contrail_One } from 'next/font/google'
import { Bebas_Neue } from 'next/font/google';
import HeroBg from '../../public/HeroBgnew.png'
import Image from 'next/image';
const contrail_One = Contrail_One({
    weight: ["400"],
    display: "swap",
    subsets: ["latin"],
    variable:"--font-silk"
  });
  const bebas= Bebas_Neue({
    weight: ["400"],
    display: "swap",
    subsets: ["latin"],
    variable:"--font-bebas"
  });
const Hero2 = () => {
  return (
    <div data-scroll-section className='bg-[#DF0C13] w-screen h-screen flex flex-col '>
        <div className='w-full h-[70vh] relative'>
            <h1 className={`text-black ${contrail_One.className} xl:text-[30rem] lg:text-[25rem] md:text-[20rem] sm:text-[15rem] text-[10rem] size-full text-end line-clamp-1 flex lg:justify-end justify-center items-center font-extrabold`}>CANON</h1>
            <h2 className={`absolute top-24 right-0 ${bebas.className} sm:text-8xl text-6xl sm:mix-blend-difference`}>CAPTURING EVERY</h2>
            <h2 className={`absolute ${bebas.className} lg:left-1/3 lg:top-[70%] md:top-[80%] md:left-1/4 top-[80%] sm:text-8xl text-6xl line-clamp-1 sm:mix-blend-difference`}>OF YOUR LIFETIME</h2>
        </div>
        <div className='w-full h-[30vh] bg-black flex justify-end items-center pr-6'>
            <Image src={HeroBg} alt='' className={`absolute sm:w-[35%] w-1/2 bottom-0 left-10`}/>
            <p className={`${contrail_One.className} w-1/2 text-end text-xl view`}>At Canon, the CSR endeavors are driven by its corporate philosophy of ‘Kyosei’, embodying the spirit of ‘living and working together for common good’.</p>
        </div>
    </div>
  )
}

export default Hero2