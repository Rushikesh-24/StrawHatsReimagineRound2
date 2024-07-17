"use client"

import Image from 'next/image'
import Back from "../../../public/back.png"
import EOS from "../../../public/cameras/eos.png"
import Thread from "../../../public/rope.svg"
import { Engine, Bodies, MouseConstraint, Composite, Events, Body, Composites, Constraint, Render, Runner, Mouse } from 'matter-js';
import { createBox } from '@/utils/createBox';
import { useEffectOnce } from 'react-use';
import { useState } from 'react'

function Cameras() {
    const [scroll, setScroll] = useState({scrollX:0, max:1});
    useEffectOnce(()=>{

        if(window.innerWidth <= 768) return;
        var engine = Engine.create();

        let boxes:any = []
        let boxBodies:any = [];
        let xCoords = [window.innerWidth/2.5, 1.3*window.innerWidth, 2*1.1*window.innerWidth, 2*1.6*window.innerWidth]
        const cards = document.querySelectorAll(".bg-pic");
        const width = parseInt(getComputedStyle(cards[0]).width.slice(0, -2));
        const height = parseInt(getComputedStyle(cards[0]).height.slice(0, -2));

        document.querySelectorAll(".bg-pic").forEach((element,i)=>{
            const box = createBox(element, height, width, xCoords[i])
            boxes.push(box)
            boxBodies.push(box.body)
            element.addEventListener("mouseover",()=>{
                //boxBodies[i].collisionFilter.category = 0b10;
            })
        })

        const mouseConstraint = MouseConstraint.create(
            engine,{
                collisionFilter: {mask: 0b1},
            }
        );
        const roof = Bodies.rectangle(
            0, 0, xCoords.length*2*window.innerWidth, 40, {isStatic: true, density:100}
        );

        
        Events.on(engine, 'beforeUpdate', function() {
        
            
            
        });
        const container = document.querySelector(".bg-concrete");
        container?.addEventListener("mousewheel",(evt:any)=>{
            window?.scrollBy(evt.deltaY, evt.deltaX);
            setScroll({scrollX:window.scrollX, max:container.clientWidth - window.innerWidth})
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
    })



  return (
    <div className='h-screen w-[400vw] max-w-screen scroll-smooth overflow-hidden bg-concrete'>
        <div className='absolute -top-[5%] -left-[10%] flex items-end'>
            <Image 
              src={Thread.src}
              height={Thread.height}
              width={Thread.width}
              alt=''
              className='mt-2'
            />
            <Image 
              src={Thread.src}
              height={Thread.height}
              width={Thread.width}
              alt=''
              className='mt-2 -ml-5'
            />
            <Image 
              src={Thread.src}
              height={Thread.height}
              width={Thread.width}
              alt=''
              className='mt-2 -ml-5'
            />
            <Image 
              src={Thread.src}
              height={Thread.height}
              width={Thread.width}
              alt=''
              className='mt-2 -ml-5'
            />
        </div>
        <Pic />
        <Pic />
        <Pic />
        <Pic />
        <div className='text-white fixed bottom-10 right-10 font-silk text-4xl'>
            <p>[{scroll.scrollX > 0 && "<-"}CATEGORIES {scroll.scrollX < scroll.max && "->"}]</p>
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
            <div onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className='bg-pic z-10 select-none cursor-move absolute group w-[73.05vw] h-[63.675vw] lg:w-[48.7vw] lg:h-[42.45vw] font-silk text-black py-3 px-5'>
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
                        className='mt-2 absolute duration-500 group-hover:scale-50 group-hover:-translate-x-[35%]'
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