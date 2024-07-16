"use client"

import Image from 'next/image'
import EOS from "../../../public/eos.png"
import Thread from "../../../public/thread.svg"
import { Engine, Bodies, MouseConstraint, Composite, Events, Body, Composites, Constraint, Render, Runner } from 'matter-js';
import { createBox } from '@/utils/createBox';
import { useEffectOnce } from 'react-use';

function Cameras() {
    useEffectOnce(()=>{

        if(window.innerWidth <= 768) return;
        var engine = Engine.create();

        let boxes:any = []
        let boxBodies:any = [];
        let xCoords = [500, 1400]
        const cards = document.querySelectorAll(".bg-pic");
        const width = parseInt(getComputedStyle(cards[0]).width.slice(0, -2));
        const height = parseInt(getComputedStyle(cards[0]).height.slice(0, -2));

        document.querySelectorAll(".bg-pic").forEach((element,i)=>{
            const box = createBox(element, height, width, xCoords[i])
            boxes.push(box)
            boxBodies.push(box.body)
        })

        const mouseConstraint = MouseConstraint.create(
            engine
        );
        const roof = Bodies.rectangle(
            0, 0, 2*window.innerWidth, 20, {isStatic: true}
        );

        /*const bridgeLeftConstraint = Constraint.create({ 
            pointA: { x: 0, y: 50 }, 
            bodyB: bridge.bodies[0], 
            pointB: { x: -25, y: 0 },
            length: 2,
            stiffness: 0
        })

        const bridgeRightConstraint = Constraint.create({ 
            pointA: { x: 1400, y: 50 }, 
            bodyB: bridge.bodies[bridge.bodies.length - 1], 
            pointB: { x: 25, y: 0 },
            length: 2,
            stiffness: 0
        })*/

       
            let boxConstraints:any = [];
            xCoords.forEach((x, i)=>{
                const boxConstraint = Constraint.create({ 
                    pointA: { x: 0, y: -100 },
                    bodyA:boxBodies[i],  
                    pointB: { x, y: window.innerHeight/3 },
                    length: 100,
                    stiffness: 0,
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
    <div className='h-screen w-screen max-w-screen overflow-hidden bg-concrete'>
        <Pic />
        <Pic />
    </div>
  )
}






function Pic(){
    return(
        <>
            <Image 
              src={Thread.src}
              height={Thread.height}
              width={Thread.width}
              alt=''
              className='mt-2 absolute -top-[20%] -left-[20%]'
            />
            <div className='bg-pic z-10 select-none cursor-move absolute w-[48.7vw] h-[42.45vw] font-silk text-black py-3 px-5'>
                <p className="text-[3.4rem] font-bold">Interchangeable</p>
                <p className='text-4xl mt-'>LENS CAMERAS</p>
                <Image 
                    src={EOS.src}
                    height={EOS.height}
                    width={EOS.width}
                    alt=''
                    className='mt-2'
                />
            </div>
        </>
    )
}

export default Cameras