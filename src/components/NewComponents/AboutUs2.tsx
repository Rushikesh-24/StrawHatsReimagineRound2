import React from 'react'

const AboutUs2 = () => {
  return (
    <div data-scroll-section className='w-screen h-screen font-contrail relative overflow-hidden flex'>
        <div className='w-[150%] lg:h-2/3 md:h-1/3 h-1/4 -rotate-[30deg] bg-[#5E0000] absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 '/>
        <h2 className='text-[#5E0000] md:text-[13rem] text-9xl absolute top-0 left-0'>ABOUT</h2>
        <div className='size-[70%] bg-[#9A1E1E] rounded-[50px] absolute right-[5%] bottom-[5%] '>
          <div className='size-full flex flex-col justify-around sm:text-2xl text-base items-center p-12 select-none relative'>
          <p className='text-left view'>Canon India Pvt. Ltd. is the sales and marketing subsidiary of Canon Inc., a world leader in imaging technologies</p>
          <p className='text-right view'>Canon India markets a comprehensive range of sophisticated contemporary digital imaging products and solutions in India. </p>
          <p className='text-left view'>In sync with its corporate tagline- ‘Delighting You Always’, reinforced by World-class technology, Canon offers an extended product portfolio. </p>
        <div className='sm:text-9xl text-7xl z-10 absolute sm:-top-[10%] -top-[5%] -left-[15%]'>about</div>
        <div className='sm:text-[25rem] text-[10rem] absolute z-10 -left-[15%]  sm:top-[30%] top-[25%] pointer-events-none'>u</div>
        <div className='sm:text-[25rem] text-[10rem] absolute z-10 -right-[5%]  sm:bottom-[15%] bottom-[25%] pointer-events-none'>s</div>
          </div>
        </div>

    </div>
  )
}

export default AboutUs2