//@ts-nocheck
import { projects } from "@/utils/ProductsData"
import { useEffect, useState } from "react"
import Scene from "./ProjectScene"
import Lenis from 'lenis'

export default function Products() {
    const [activeMenu, setActiveMenu] = useState(null)
  useEffect( () => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])
  return (
    <main data-scroll-section className="hover-remove">
      <div className='relative mix-blend-difference z-10 text-white h-screen w-full'>
        <ul onMouseLeave={() => {setActiveMenu(null)}} className='border-b'>
            {
            projects.map( (project, i) => {
                return (
                <li onMouseOver={() => {setActiveMenu(i)}} key={project.title} className='text-[4vw] p-5 border-t'>
                    <p>{project.title}</p>
                </li>
                )
            })
            }
        </ul>
      </div>
      <Scene activeMenu={activeMenu}/>
  
    </main>
    
  )
}