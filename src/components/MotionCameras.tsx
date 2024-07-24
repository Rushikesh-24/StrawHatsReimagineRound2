"use client"
import Image from 'next/image'
import Photographer from "../../public/photographer.png"
import Photographer2 from "../../public/photographer2.png"
import OutlineText from './OutlineText'

function MotionCameras() {
  return (
    <div data-scroll-section className='h-screen relative will-change-transform flex justify-center items-center'>
        <p className='absolute hidden md:block left-[1.5%] bottom-[8%] font-bebas text-4xl -rotate-90'>SCROLL DOWN</p>
        <div data-scroll data-scroll-speed={8} className='bg-red-canon hidden md:block absolute left-[8%] group'>
            <Image 
                src={Photographer.src}
                height={Photographer.height}
                width={Photographer.width-120}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 left-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100 view'>Josh P Brutton</p>
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
        <OutlineText text='CAMERAS' upper='MOTION PERFECTION'/>
    </div>
  )
}

export default MotionCameras