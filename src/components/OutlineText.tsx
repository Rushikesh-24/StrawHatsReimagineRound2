import React from 'react'

function OutlineText({text, upper}:{text:string, upper?:string}) {
  return (
    <div className='text-[6rem] md:text-[18rem] group font-normal z-10 relative'>
        <p className='text-4xl absolute top-[-10%] md:top-[2%] left-[30%] font-bebas'>{upper}</p>
        <p className='absolute hidden md:block duration-500 -translate-x-[2%] -translate-y-[5%] group-hover:-translate-x-[0%] group-hover:-translate-y-[0%]  text-stroke-white text-transparent z-10'>{text}</p>
        <p className='z-20 relative'>{text}</p>
    </div>
  )
}

export default OutlineText