"use client"
import Image from 'next/image'
import Photographer from "../../public/photographer.png"
import Photographer2 from "../../public/photographer2.png"

function MotionCameras() {
  return (
    <div data-scroll-section className='h-screen relative will-change-transform flex justify-center items-center'>
        <p className='absolute hidden md:block left-[1.5%] bottom-[8%] font-bebas text-4xl -rotate-90'>SCROLL DOWN</p>
        <div data-scroll data-scroll-speed={10} className='bg-red-canon hidden md:block absolute left-[8%] group'>
            <Image 
                src={Photographer.src}
                height={Photographer.height}
                width={Photographer.width-120}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 left-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100'>Josh P Brutton</p>
        </div>
        <div data-scroll data-scroll-speed={1} className='bg-red-canon absolute top-[5%] right-[1%]'>
            <Image 
                src={Photographer2.src}
                height={Photographer2.height}
                width={Photographer2.width-80}
                alt=''
                objectFit='cover'
                className=' !mix-blend-hard-light object-contain'
            />
            <p className='uppercase text-3xl font-bebas'>Imaging Masterpiece</p>
        </div>
        <div className='text-[6rem] md:text-[18rem] font-normal z-10 relative'>
            <p className='text-4xl absolute top-[-10%] md:top-[2%] left-[30%] font-bebas'>MOTION PERFECTION</p>
            <p className='absolute hidden md:block -translate-x-[2%] -translate-y-[5%] text-stroke-white text-transparent z-10'>CAMERAS</p>
            <p className='z-20 relative'>CAMERAS</p>
        </div>
    </div>
  )
}

export default MotionCameras