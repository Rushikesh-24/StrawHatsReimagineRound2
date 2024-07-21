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

function Cameras() {
    const [scroll, setScroll] = useState({scrollX:0, max:1});
    useEffectOnce(()=>{

        if(window.innerWidth <= 768) return;
        setTimeout(()=>{
            var engine = Engine.create();
            let calc = window.innerWidth/2.5
            let boxes:any = []
            let boxBodies:any = [];
            let xCoords = [window.innerWidth/2.5, window.innerWidth+calc, 2*window.innerWidth+calc, 3*window.innerWidth+calc]
            const cards = document.querySelectorAll(".bg-pic");
            const width = parseInt(getComputedStyle(cards[0]).width.slice(0, -2));
            const height = parseInt(getComputedStyle(cards[0]).height.slice(0, -2));

            document.querySelectorAll(".bg-pic").forEach((element,i)=>{
                const box = createBox(element, height, width, xCoords[i])
                boxes.push(box)
                boxBodies.push(box.body)
                /*element.addEventListener("",()=>{
                    //boxBodies[i].collisionFilter.category = 0b10;
                })*/
            })

            const mouseConstraint = MouseConstraint.create(
                engine,{
                    element: document.querySelector(".outscroll > div"),
                    collisionFilter: {mask: 0b1},
                }
            );
            const roof = Bodies.rectangle(
                0, 0, xCoords.length*2*window.innerWidth, 50, {isStatic: true, density:200}
            );

            
            Events.on(engine, 'beforeUpdate', function() {
            
                
                
            });
            const container = document.querySelector(".outscroll");
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
                        pointB: { x, y: window.innerHeight/3.5 },
                        length: 100,
                        stiffness: 1,
                        damping:0.5,
                        render:{
                            visible:true
                        }
                    })
                    boxConstraints.push(boxConstraint);
                })
            
                
            Composite.add(
                engine.world, [ ...boxBodies, roof, mouseConstraint,  ...boxConstraints]
            );
            
            (function rerender() {
                boxes.forEach((box:any)=>{
                    box.render()
                })
                Engine.update(engine);
                
                requestAnimationFrame(rerender);
            })();
        },2000)
    })



  return (
    <div className='relative outscroll h-screen w-screen overflow-y-hidden'>
        <div className='h-screen w-[400vw] timed-dimension scroll-smooth flex items-center  bg-concrete'>
            <div className='absolute -top-[5%] -left-[0%] flex items-end'>
                <Image 
                src={Thread.src}
                height={Thread.height}
                width={Thread.width}
                alt=''
                className='mt-2 w-screen'
                />
                <Image 
                src={Thread.src}
                height={Thread.height}
                width={Thread.width}
                alt=''
                className='mt-2 -ml-5 w-screen'
                />
                <Image 
                src={Thread.src}
                height={Thread.height}
                width={Thread.width}
                alt=''
                className='mt-2 -ml-5 w-screen'
                />
                <Image 
                src={Thread.src}
                height={Thread.height}
                width={Thread.width}
                alt=''
                className='mt-2 -ml-5 w-screen'
                />
            </div>
            <Pic />
            <Pic />
            <Pic />
            <Pic />
            {/*<div className='text-white absolute bottom-10 right-10 font-silk text-4xl'>
                <p>[{scroll.scrollX > 0 && "<-"}CATEGORIES {scroll.scrollX < scroll.max && "->"}]</p>
            </div>*/}
        </div>
    </div>
  )
}






function Pic(){
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
            <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className='bg-pic z-10 shrink select-none cursor-move absolute left-[25%] group w-[73.05vw] h-[63.675vw] xl:w-[48.7vw] xl:h-[42.45vw] font-silk text-black py-3 px-5'>
                <p className="text-[3.4rem] font-bold flex justify-between items-center">{isHovering ? cameras[0].name : "Interchangeable"}
                    <span className='hidden group-hover:flex gap-5 items-center '>
                        <button>{"<"}</button>
                        <button>{">"}</button>
                    </span>
                </p>
                <p className='text-3xl mt-'>{isHovering ? cameras[0].info : "LENS CAMERAS"}</p>
                <div className='relative flex items-center justify-center pointer-events-none'>
                    <div>
                    <Image 
                        src={Back.src}
                        height={Back.height}
                        width={Back.width}
                        alt=''
                        className='mt-2 group-hover:brightness-50 duration-500'
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