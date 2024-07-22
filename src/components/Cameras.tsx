//@ts-nocheck
"use client"

import Image from 'next/image'
import Back from "../../public/back.png"
import EOS from "../../public/cameras/eos.png"
import Thread from "../../public/rope.svg"
import { Engine, Bodies, MouseConstraint, Composite, Events, Constraint } from 'matter-js';
import { createBox } from '@/utils/createBox';
import { useEffectOnce } from 'react-use';
import { useState } from 'react'
import { isDivInView } from '@/utils/isInView'
import Sticker1 from "../../public/sticker.png"
import Sticker2 from "../../public/sticker2.png"

function Cameras() {
    const [scroll, setScroll] = useState({scrollX:0, max:1});
    /*useEffectOnce(()=>{

        if(window.innerWidth <= 768) return;
        setTimeout(()=>{
            var engine = Engine.create();
            let calc = window.innerWidth/2.5
            let boxes:any = []
            let boxBodies:any = [];
            let xCoords = [(window.innerWidth/4), window.innerWidth/2.5, window.innerWidth/2.5, window.innerWidth/2.5]
            let baseY=20;
            const cards = document.querySelectorAll(".bg-pic");
            const width = parseInt(getComputedStyle(cards[0]).width.slice(0, -2));
            const height = parseInt(getComputedStyle(cards[0]).height.slice(0, -2));

            document.querySelectorAll(".bg-pic").forEach((element,i)=>{
                const box = createBox(element, height, width, xCoords[i], i*1000)
                boxes.push(box)
                boxBodies.push(box.body)
                /*element.addEventListener("",()=>{
                    //boxBodies[i].collisionFilter.category = 0b10;
                })
            })

            const mouseConstraint = MouseConstraint.create(
                engine,{
                    element: document.querySelector(".bg-concrete"),
                    collisionFilter: {mask: 0b1},
                }
            );


            
            Events.on(engine, 'beforeUpdate', function() {
            
                
                
            });
            /*const container = document.querySelector(".outscroll");
            const innerContainer = document.querySelector(".outscroll > div");
            container?.addEventListener("mousewheel",(evt:any)=>{
                    let ans = isDivInView(".outscroll");
                    if(!ans || ((container.scrollLeft === (innerContainer.clientWidth - window.innerWidth) && evt.deltaY > 0) || container.scrollLeft === 0 && evt.deltaY < 0)){
                        window?.scrollBy(evt.deltaX, evt.deltaY);
                    }
                    if(ans){
                        container?.scrollBy(evt.deltaY, 0);
                        setScroll({scrollX:window.scrollX, max:container.clientWidth - window.innerWidth})
                    }
                
            })
            
                let boxConstraints:any = [];
                xCoords.forEach((x, i)=>{
                    const boxConstraint = Constraint.create({ 
                        pointA: { x: 0, y: -100 },
                        bodyA:boxBodies[i],  
                        pointB: { x, y:i*1000 + 400 },
                        length: 10,
                        stiffness: 1,
                        damping:1
                    })
                    boxConstraints.push(boxConstraint);
                })
            
                
            Composite.add(
                engine.world, [ ...boxBodies, mouseConstraint, ...boxConstraints]
            );
            
            (function rerender() {
                boxes.forEach((box:any)=>{
                    box.render()
                })
                Engine.update(engine);
                
                requestAnimationFrame(rerender);
            })();
        },2000)
    })*/



  return (
  
        <div data-scroll-section className='min-h-[450vh] w-screen timed-dimension scroll-smooth relative flex flex-col items-center gap-y-20 font-silk bg-concrete'>
           <p className='text-6xl text-center pt-10'>[MODELS]</p>
           <Pic top={"5%"} left={"5%"}/>
           <Image src={Sticker1.src} height={Sticker1.height} width={Sticker1.width} alt='sticker' className='md:absolute hidden md:block md:right-[15%] md:top-[10%] md:rotate-12' />
           <Pic top={"30%"} left={"45%"}/>
           <Image src={Sticker2.src} height={Sticker2.height-200} width={Sticker2.width-200} alt='sticker' className='md:absolute hidden md:block md:left-[15%] md:top-[35%] md:rotate-12' />
           <Pic top={"55%"} left={"5%"}/>
           <Image src={Sticker1.src} height={Sticker1.height} width={Sticker1.width} alt='sticker' className='md:absolute hidden md:block md:right-[15%] md:top-[60%] md:rotate-12' />
           <Pic top={"80%"} left={"45%"}/>
           <Image src={Sticker2.src} height={Sticker2.height-200} width={Sticker2.width-200} alt='sticker' className='md:absolute hidden md:block md:left-[15%] md:top-[85%] md:rotate-12' />
        </div>
   
  )
}






function Pic({top,left}){
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
            <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className='bg-pic z-10 /shrink md:absolute select-none cursor-move group w-[73.05vw] h-[63.675vw] xl:w-[48.7vw] xl:h-[42.45vw] font-silk text-black py-3 px-5' style={{top:top,left:left, rotate:left === "5%" ? "-2.5deg" : "2.5deg"}}>
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

export default Cameras