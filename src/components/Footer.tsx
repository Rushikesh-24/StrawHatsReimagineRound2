import Link from "next/link";
import React from "react";
import { Bebas_Neue, Contrail_One } from "next/font/google";

const bebas = Bebas_Neue({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const contrail = Contrail_One({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <footer data-scroll-section className="h-screen w-screen flex flex-col justify-center gap-10 bg-[#DF0C13] relative z-10 overflow-hidden">
      <div className="flex items-start lg:justify-end justify-center sm:py-5 relative z-20">
        <div className="lg:w-5/6 w-full h-3/4  flex flex-wrap">
          {/* First Row */}
          <div className="lg:w-1/3 pl-4">
            <h1 className={`font-normal lg:text-7xl sm:text-6xl text-xl font-bebas`}>
              PRODUCTS
            </h1>
            <ul className={`mt-4 text-[#B8B8B8] ${contrail.className}`}>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Cameras</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Printers</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Others</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3 px-4">
            <h1 className={`font-normal lg:text-7xl sm:text-6xl text-xl font-bebas`}>
              SERVICES
            </h1>
            <ul className={`mt-4 text-[#B8B8B8] ${contrail.className}`}>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Anti-Counterfeit</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Where to Buy</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Service Network</Link>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/3">
            <h1 className={`font-normal lg:text-7xl sm:text-6xl text-xl font-bebas`}>
              YOUR CANON + YOU
            </h1>
            <ul className={`mt-4 text-[#B8B8B8] ${contrail.className}`}>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Your Canon + You</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Camera Catalogue</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Printer Catalogue</Link>
              </li>
            </ul>
          </div>

          {/* Second Row */}
          <div className="w-1/2 px-4 mt-8">
            <h1 className={`font-normal lg:text-7xl  sm:text-6xl text-xl font-bebas`}>
              COMPANY
            </h1>
            <ul className={`lg:mt-4 text-[#B8B8B8] ${contrail.className}`}>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">About Us</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Commitment to Sustainability</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Press Room</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Terms of Use</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">Privacy Policy</Link>
              </li>
              <li className="lg:text-4xl sm:text-2xl text-sm">
                <Link href="#" className="relative z-30">FAQ</Link>
              </li>
            </ul>
          </div>
          <div className="w-1/2 px-4 mt-8">
            <h1 className={`font-normal lg:text-7xl sm:text-6xl text-xl ${bebas.className}`}>
              SOCIAL HANDLES
            </h1>
            {/* <ul className={`mt-4 text-[#B8B8B8] ${contrail.className}`}>
      <li className="text-4xl">
        <Link href="#">Facebook</Link>
      </li>
      <li className="text-4xl">
        <Link href="#">Twitter</Link>
      </li>
      <li className="text-4xl">
        <Link href="#">Instagram</Link>
      </li>
      <li className="text-4xl">
        <Link href="#">LinkedIn</Link>
      </li>
    </ul> */}
          </div>
        </div>
      </div>
      <div className="text-center h-20 w-full relative z-20">
        <p className="text-sm">
          COPYRIGHT © 2024 CANON INDIA PVT LTD. ALL RIGHTS RESERVED.
        </p>
      </div>
      <div className={`text-[#720A0B] absolute -left-72 rotate-90 font-bold text-[16rem] tracking-widest ${bebas.className} z-10`}>
        <h1>CANON</h1>
      </div>
      <div className={`text-[#720A0B] absolute  left-96 rotate-90 font-bold text-[90rem] tracking-widest font-bebas z-10`}>
        <h1>O</h1>
      </div>
      <div className={`absolute -right-10 -bottom-36 rounded-full flex justify-center items-center bg-[#720A0B] text-[#CA4849] size-96 rotate-animation font-bold text-9xl font-bebas`} style={{clipPath: "inset(0px 0px -50% 0px)"}}>
        <h1>CANON</h1>
      </div>
    </footer>
  );
};

export default Footer;
