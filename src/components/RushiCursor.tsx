import React, { useEffect } from 'react'
import {gsap} from 'gsap'

const Cursor2 = () => {
  useEffect(() => {
    const cursor = document.getElementById('custom-cursor');
    const links = document.querySelectorAll('a')
    const cursorText = document.querySelector('.rushi-cursor-text') as HTMLElement;
    const onMouseMove = (event: MouseEvent) => {
      const {clientX, clientY} = event;
      gsap.to(cursor,{x: clientX, y: clientY})
    }
    const onMouseEnterLink = (event: MouseEvent) => {
      const link = event.target as HTMLElement;
      if(link.classList.contains('view')){
        gsap.to(cursor,{scale:4})
        if (cursorText) {
          cursorText.style.display = 'block';
        }else{
          gsap.to(cursor,{scale:4})
        }
      }
    }
    const onMouseLeaveLink = () => {
      gsap.to(cursor,{scale:1})
      cursorText.style.display = 'none'
    }
    document.addEventListener('mousemove',onMouseMove)
    links.forEach((link)=>{
      link.addEventListener('mouseenter',onMouseEnterLink)
      link.addEventListener('mouseleave',onMouseLeaveLink)
    })
  })
  return (
    <div id='custom-cursor' className='rushi-cursor'>
        <span className='rushi-cursor-text'>View</span>
    </div>
  )
}

export default Cursor2