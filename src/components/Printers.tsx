'use client'
import React, { useEffect } from "react";
import { Silkscreen } from "next/font/google"
import { TextGenerateEffect } from "./TextGenerate";


const Printer = () => {
  
  return (
    <div data-scroll-section className="flex w-screen">
      <div
        className={`h-screen w-1/2 flex bg-print1 bg-fixed font-silk relative`}
      >
        
      </div>
      <div
        className={`h-screen w-1/2 bg-black font-silk relative text-3xl flex flex-col items-center justify-center`}
      >
        <TextGenerateEffect words="Stunning Clarity"/>
        <TextGenerateEffect words="Dynamic Range"/>
        <TextGenerateEffect words="Professional-Grade Lenses"/>
        <TextGenerateEffect words="High Resolution"/>
      </div>
    </div>
  );
};

export default Printer;
