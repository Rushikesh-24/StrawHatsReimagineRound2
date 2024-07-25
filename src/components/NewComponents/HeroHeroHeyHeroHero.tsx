import { Alex_Brush, Nanum_Brush_Script } from 'next/font/google'
import React from 'react'

const bs = Alex_Brush({
    weight: ["400"],
    display: "swap",
    subsets: ["latin"]
});
  
function HeroHeroHeyHeroHero() {
  return (
    <div data-scroll-section className='h-screen w-screen bg-red-canon font-bebas flex items-center justify-center overflow-hidden'>
        <span data-scroll data-scroll-direction="horizontal" data-scroll-speed={5} className=' text-[70vw] font-medium text-[#720A0B] m-0 p-0 mt-28 relative z-10'>CO</span>
        <span data-scroll data-scroll-speed={-5} className=' text-[140vw] font-medium text-[#C70B0D] m-0 p-0 mt-96 absolute'>CO</span>
        <p data-scroll data-scroll-direction="horizontal" data-scroll-speed={-5} className='absolute  text-[#720A0B] text-[16.5vw] tracking-widest ml-28 font-semibold'>ANON</p>
        <p className={`text-white ${bs.className} text-6xl absolute text-center z-10`}>
            <span className='text-4xl font-semibold block'>delighting you always</span>
        </p>
        <p className='text-white absolute text-4xl bottom-10 z-10'>CAPTURING EVERY <span className={`text-white ${bs.className} text-7xl font-semibold mx-2`}>canon</span> OF YOUR LIFETIME</p>
        <p className='absolute text-8xl top-[20%] left-[1%] text-[#720A0B]'>KYOSE</p>
        <p className='absolute text-[10vw] bottom-[5%] left-[0%] text-[#720A0B]' style={{writingMode: "vertical-rl"}}>1997</p>
        <p className='absolute text-4xl bottom-[5%] right-[12%] text-[#720A0B] rotate-180' style={{writingMode: "vertical-lr"}}>{'"living and working together for common good"'}</p>
        <p className='absolute text-5xl top-[5%] right-[0%] text-[#720A0B] rotate-180' style={{writingMode: "vertical-lr"}}>MEGA TANK</p>
    </div>
  )
}

export default HeroHeroHeyHeroHero