// @ts-nocheck
"use client"
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import Back from "../../public/back1.jpg"
import { motion, useScroll, useTransform } from 'framer-motion';
import { isDivInView } from '@/utils/isInView';

function PicExpandSection({container}) {
  const c = useRef(null);
  const [sect, setSect] = useState(1)
  const heroimg = useTransform(() => sect) 
  const SCALE = 0.01;
  useEffect(()=>{
    if(c.current){
        c?.current?.addEventListener('mousewheel', (event) => {
                if(isDivInView("#pic")){
                    if(event.deltaY > 0) setSect((prev)=>prev < 2.5 ? prev+SCALE : prev)
                }
                if(event.deltaY < 0) setSect((prev)=>prev < 1 ? 1 : prev-SCALE)
            
        });
    }
    return () => c?.current?.removeEventListener('mousewheel', ()=>{})
  },[])

  return (
    <div ref={c} data-scroll-section>
            <div className='h-[200vh] flex flex-col justify-center items-center font-bebas'>
                <p className='text-8xl text-center mb-20'>Get the best out of <br/> our unique chemistry</p>
                <motion.div id="pic" style={{ scale: heroimg, rotate:(heroimg.get()*5 < 10) ? -10+heroimg.get()*5 : 0 }} className='bg-pic z-10 /shrink select-none cursor-move group w-[73.05vw] h-[63.675vw]  flex-shrink-0 xl:w-[48.7vw] xl:h-[42.45vw] font-bebas text-black py-3 px-5' >
                    <p>{100}</p>
                    <p className="text-[3.4rem] font-bold flex justify-between items-center">{"Interchangeable"}
                        <span className='hidden group-hover:flex gap-5 items-center '>
                            <button>{"<"}</button>
                            <button>{">"}</button>
                        </span>
                    </p>
                    <p className='text-3xl mt-'>{"LENS CAMERAS"}</p>
                    <div style={{height:Back.height-120}} className='relative flex items-center justify-center pointer-events-none'>
                        <div>
                            <Image 
                                src={Back.src}
                                height={Back.height}
                                width={Back.width}
                                alt=''
                                className='mt-2 group-hover:brightness-50 duration-500 w-full absolute left-0 top-0'
                            />
                        </div>
                    
                    </div>
                </motion.div>
            </div>
   
    </div>
  )
}

export default PicExpandSection


function Pic(){
    const [isHovering, setIsHovering] = useState(false)
   
    let cameras = [
        {
            name:"EOS R100",
            info:"(RF-S18-45mm f/4.5-6.3 IS STM)",
            points:[
                "Approx. 24.1MP APS-C CMOS sensor & approx. 356g (body)",
                "Up to 6.5 frames per second with Eye Detection AF",
                "4K 25p & HD 120p with Movie Digital IS",
            ]
        }
    ]
    

    return(
            <motion.div className='bg-pic z-10 /shrink select-none cursor-move group w-[73.05vw] h-[63.675vw]  flex-shrink-0 xl:w-[48.7vw] xl:h-[42.45vw] font-bebas text-black py-3 px-5' >
                <p className="text-[3.4rem] font-bold flex justify-between items-center">{isHovering ? cameras[0].name : "Interchangeable"}
                    <span className='hidden group-hover:flex gap-5 items-center '>
                        <button>{"<"}</button>
                        <button>{">"}</button>
                    </span>
                </p>
                <p className='text-3xl mt-'>{isHovering ? cameras[0].info : "LENS CAMERAS"}</p>
                <div style={{height:Back.height-120}} className='relative flex items-center justify-center pointer-events-none'>
                    <div>
                        <Image 
                            src={Back.src}
                            height={Back.height}
                            width={Back.width}
                            alt=''
                            className='mt-2 group-hover:brightness-50 duration-500 w-full absolute left-0 top-0'
                        />
                    </div>
                  
                </div>
            </motion.div>
    )
}