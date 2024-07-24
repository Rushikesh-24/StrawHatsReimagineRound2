"use client"
import Image from 'next/image'
import Printer0 from "../../../public/printer1.png"
import Printer1 from "../../../public/printer2.png"

function Printer2() {
  return (
    <div data-scroll-section className='h-screen relative will-change-transform flex justify-center items-center'>
        <p className='absolute hidden md:block right-[1.5%] bottom-[8%] font-bebas text-4xl -rotate-90'>SCROLL DOWN</p>
        <p className={`font-bebas absolute lg:text-[90rem] md:text-[70rem] sm:text-[50rem] text-[40rem] text-[#720A0B] rotate-90 z-10 opacity-70 pointer-events-none`}>N</p>
        <div data-scroll data-scroll-speed={2} className='bg-red-canon hidden md:block absolute left-[8%] top-[10%] group'>
            <Image 
                src={Printer0.src}
                height={Printer0.height/10}
                width={Printer0.width/10}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 left-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100 view'>Canon Pixma</p>
        </div>
        <div data-scroll data-scroll-speed={1} className='bg-red-canon absolute bottom-[5%] right-[10%] group'>
            <Image 
                src={Printer1.src}
                height={Printer1.height/8}
                width={Printer1.width/8}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 right-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100 view'>Wireless Printing</p>
        </div>
        <div className='text-[6rem] md:text-[18rem] font-normal z-10 relative'>
            <p className='text-4xl absolute top-[-10%] md:top-[2%] right-[10%] font-bebas view'>VIVID EXPRESSIONS</p>
            <p className='absolute hidden md:block -translate-x-[2%] -translate-y-[5%] text-stroke-white text-transparent z-10'>PRINTERS</p>
            <p className='z-20 relative'>PRINTERS</p>
            <p className='text-4xl absolute bottom-[-10%] md:bottom-[10%] left-[5%] font-bebas view'>BRIGHT COLORS</p>
        </div>
    </div>
  )
}

export default Printer2