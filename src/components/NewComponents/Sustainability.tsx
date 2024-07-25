import React from 'react'
import sustain1 from '../../../public/sustain1.png'
import sustain2 from '../../../public/sustain2.png'
import Image from 'next/image'
const Sustainability = () => {
  return (
    <div data-scroll-section className='w-screen h-screen relative overflow-hidden flex justify-center sm:items-end items-center'>
        <div className='sm:w-[200%] w-[300%] lg:h-2/3 md:h-1/3 h-1/4 rotate-90 bg-[#5E0000] absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>
        <h2 className='text-[#720A0B] md:text-[20rem] text-9xl absolute sm:top-1/4 top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-contrail z-10'>SUSTAINABILITY</h2>
        <h2 className='sm:text-9xl text-4xl  absolute sm:top-1/4 top-[10%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap font-contrail z-20'>sustainability</h2>
        <div data-scroll data-scroll-speed={1} className='bg-red-canon absolute sm:top-[5%] sm:left-[5%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group'>
            <Image 
                src={sustain1.src}
                height={sustain1.height/8}
                width={sustain1.width/8}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 right-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100 view select-none'>Plant More Trees</p>
        </div>
        <div data-scroll data-scroll-speed={2} className='bg-red-canon absolute bottom-[5%] right-[5%] group md:flex hidden'>
            <Image 
                src={sustain2.src}
                height={sustain2.height/8}
                width={sustain2.width/7}
                alt=''
                objectFit='cover'
                className=' !mix-blend-color-burn object-contain'
            />
            <p className='text-white z-10 right-[5%] bottom-[2%] -mt-10 absolute opacity-0 duration-500 group-hover:opacity-100 view select-none'>Plant More Trees</p>
        </div>
        <div className='w-full h-1/2 text-center px-20 sm:text-2xl text-base z-30 flex justify-around items-center flex-col'>
        <p>Canon India takes pride to be socially inclined and focused towards its efficient and sustainable CSR projects.</p>
        <p>Canon takes pride in not only bringing quality products to the market; but also, in contributing towards minimizing the environmental burden, through the effective application of green technologies. </p>
        <p>Canon focuses on the development of resource conserving products that are smaller, lighter, and easier to recycle.</p>
        </div>
    </div>
  )
}

export default Sustainability