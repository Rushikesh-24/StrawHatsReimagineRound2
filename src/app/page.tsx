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
import PicExpandSection from "@/components/PicExpandSection";
import CameraCategories from "@/components/CameraCategories";
import CameraModel2 from "@/components/NewComponents/CanonModel2";
import Printer2 from "@/components/NewComponents/Printer2";
import AboutUs2 from "@/components/NewComponents/AboutUs2";
import useLoadingManager from "@/components/NewComponents/LoadingManager";
import Loader from "./Loading";
import Sustainability from "@/components/NewComponents/Sustainability";

export default function Home() {
  const containerRef = useRef(null)
  const { loading, progress } = useLoadingManager();

  return (
    <>
     {loading && <Loader progress={progress} />}
     {!loading && (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true,
          smartphone:{
            smooth:false,
          },
          tablet:{
            smooth:false
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
      <Navbar />
      <Cursor2/>
      <Navbar/>
      <Hero2/>
      <MotionCameras />
      <CameraCategories />
      <Products />
      <PicExpandSection container={containerRef}/>
      <div data-scroll-section className="bg-red-canon h-screen">

      </div>
      <CameraModel2/>
      {/* <SideScroll /> */}
      <Printer2/>
      <AboutUs2/>
      <Sustainability/>
    </div>
    </LocomotiveScrollProvider>)}
    </>
    
  );
}
