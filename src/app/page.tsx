"use client"
import Hero from "@/components/Hero";
import Scroll from "@/components/Scroll";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Printer from "@/components/Printers";
import Cameras from "@/components/Cameras";
import AboutUs from "@/components/AboutUs";
import { use, useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import MotionCameras from "@/components/MotionCameras";
import Cursor2 from "@/components/NewComponents/Cursor2";
import Hero2 from "@/components/NewComponents/Hero2";
import CamerasSection from "@/components/CamerasSection";
import SideScroll from "@/components/SideScroll";
import Products from "@/components/Products";
import CameraModel2 from "@/components/NewComponents/CanonModel2";
import Printer2 from "@/components/NewComponents/Printer2";

export default function Home() {
  const containerRef = useRef(null)

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          smartphone:{
            smooth:true,
          },
          tablet:{
            smooth:true
          },
          // ... all available Locomotive Scroll instance options 
        }
      }
      watch={
        [
          //..all the dependencies you want to watch to update the scroll.
          //  Basicaly, you would want to watch page/location changes
          //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
        ]
      }
      containerRef={containerRef}
    >
    <div data-scroll-container id="ho" ref={containerRef} className="font-contrail bg-red-canon">
      <Cursor2/>
      <Hero2/>
      <MotionCameras />
      <CameraModel2/>
      <Products />
      {/* <SideScroll /> */}
      <Printer2/>
    </div>
    </LocomotiveScrollProvider>
  );
}
