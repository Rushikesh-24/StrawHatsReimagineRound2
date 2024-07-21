"use client"
import React, { useEffect, useRef, useState } from 'react'

function Cursor() {
  const [cursorState, setCursorState] = useState("cursor")

  const handleCursor = (element:HTMLElement | null, x:number, y:number) => {
    if(element){
        element.style.top = y+"px";
        element.style.left = x+"px";
    }
  };

  useEffect(()=>{
    const cursor = document.getElementById("cursor");
    window.addEventListener("mousemove",(e)=>{
        window.requestAnimationFrame(()=>handleCursor(cursor, e.x, e.y));
    })

    let hoverElement = Array.from(document.querySelectorAll('.hover-detect'))
    
    hoverElement.forEach((element) => {

        element.addEventListener('mouseenter', () => {
            setCursorState("cursor-hovering")
        })

        element.addEventListener('mouseleave', () => {
            setCursorState("")
        })

    })

    return () => window.removeEventListener("mousemove", ()=>{})
  },[])

  
  
  return (
    <div id={"cursor"} className={`${cursorState} pointer-events-none overflow-hidden outline outline-1 outline-[#D9D9D9]  -translate-x-1/2 -translate-y-1/2 size-20 fixed rounded-full duration-100 z-50 ease-in-out transition-all hidden md:flex`}>
        <svg id="t1" width="102" height="49" viewBox="0 0 102 49" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M101.781 47.9891L0.162598 48.6698L25.7605 0.204102C58.3995 2.33882 86.5167 21.0443 101.781 47.9891Z" fill="#D9D9D9"/>
        </svg>
        <svg id="t2" width="80" height="89" viewBox="0 0 80 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M79.8248 0.410699L28.9343 88.37L0.11476 41.748C18.4895 14.6882 48.8608 -0.0784734 79.8248 0.410699Z" fill="#D9D9D9"/>
        </svg>
        <svg id="t3" width="64" height="91" viewBox="0 0 64 91" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.9156 0.534922L63.8744 89.0267L9.07657 90.1957C-4.91288 60.6295 -2.22153 26.9661 13.9156 0.534922Z" fill="#D9D9D9"/>
        </svg>
        <svg id="t4" width="103" height="50" viewBox="0 0 103 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.564249 0.884905L102.184 1.09038L76.1648 49.331C43.5456 46.9117 15.5927 27.9618 0.564249 0.884905Z" fill="#D9D9D9"/>
        </svg>
        <svg id="t5" width="81" height="89" viewBox="0 0 81 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.9471 88.6168L50.9936 0.174597L80.2579 46.5186C62.143 73.753 31.9144 88.8097 0.9471 88.6168Z" fill="#D9D9D9"/>
        </svg>
        <svg id="t6" width="66" height="90" viewBox="0 0 66 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M53.5885 89.9978L0.508219 3.3423L55.2296 0.221466C70.2637 29.2704 68.7736 63.0084 53.5885 89.9978Z" fill="#D9D9D9"/>
        </svg>
    </div>
  )
}

export default Cursor