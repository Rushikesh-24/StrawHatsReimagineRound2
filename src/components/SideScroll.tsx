import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useEffect } from 'react'

function SideScroll() {
  
  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to("#hello > h1",{
        transform:"translateX(-90%)",
        scrollTrigger:{
            trigger:"#hello > h1",
            scroller:"#ho",
            markers:true,
            start:"top 0%",
            end:"top 10s0%",
            pin:true
        }
    })
  },[])

  return (
    <div id="hello" data-scroll-section className='scroll-sec relative bg-green-500  border-t'>
        <h1 className='text-[50rem]'>eScroll</h1>
    </div>
  )
}

export default SideScroll