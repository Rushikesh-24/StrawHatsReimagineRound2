'use client'
import React, { useEffect, useState } from "react";
import { Silkscreen } from "next/font/google"
import { ModelViewer } from "./CanonModel";
import dynamic from "next/dynamic";

const silkScreen = Silkscreen({
  weight: ["400", "700"],
  // display: ["swap"],
  subsets: ["latin"],
});

const Hero = () => {
  const backgroundStyle = {
    backgroundImage: "url(/heroBg.png)"
  };

  return (
    <div data-scroll-section className={`h-screen w-screen flex  bg-heroimage font-silk relative`}>
      <ModelViewer/>
    </div>

  );
};

export default Hero;
