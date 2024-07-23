import Image from "next/image"
import Back from "../../public/back.png"
import EOS from "../../public/cameras/eos.png"

import React, { useState } from 'react'

function CamerasSection() {
  return (
    <div id="stick" data-scroll-section>
        <div data-scroll data-scroll-speed="50" data-scroll-direction="horizontal"  className="flex justify-start gap-10 items-center w-screen h-screen">
            <Pic />
            <Pic />
            <Pic />
            <Pic />
            <Pic />
        </div>
    </div>
  )
}

export default CamerasSection

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
        <>
            <div   className='bg-pic z-10 /shrink select-none cursor-move group w-[73.05vw] h-[63.675vw]  flex-shrink-0 xl:w-[48.7vw] xl:h-[42.45vw] font-silk text-black py-3 px-5' >
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
                    <Image 
                        src={EOS.src}
                        height={EOS.height-100}
                        width={EOS.width-100}
                        alt=''
                        className='mt-2 fader absolute duration-500 group-hover:scale-50 group-hover:-translate-x-[35%]'
                    />
                    <div className='hidden text-xl flex-col gap-10 group-hover:flex text-white absolute w-1/2 right-10'>
                        <p>Approx. 24.1MP APS-C CMOS sensor & approx. 356g (body)</p>
                        <p>Up to 6.5 frames per second with Eye Detection AF</p>
                        <p>4K 25p & HD 120p with Movie Digital IS</p>
                    </div>

                    <div className='absolute hidden group-hover:block bottom-5 right-5 cursor-pointer text-white underline text-2xl'>
                        [BUY NOW]
                    </div>
                </div>
            </div>
        </>
    )
}