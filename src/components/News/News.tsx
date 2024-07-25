import React from "react";
import Scroll from "../WordBelt";

const News = () => {
  return (
    <div>
      <div
        className={`text-[#720A0B] absolute -top-[20rem] sm:left-[30rem] left-96 rotate-45 font-bold text-[70rem] tracking-widest font-bebas z-10 overflow-x-hidden`}
      >
        <h1>O</h1>
      </div>
      <div
        className={`text-[#720A0B] absolute -left-72 top-80 rotate-90 font-bold text-[16rem] tracking-widest font-bebas`}
      >
        <h1>CANON</h1>
      </div>
      {/* <ZuiNews /> */}
      <div className=" h-80 w-60 absolute bg-[#7F1616] sm:top-32 top-10 sm:left-80 z-10 rounded-2xl flex flex-col justify-between">
        <div className="flex-col justify-between font-bebas text-5xl px-2">
          <h2 className="text-left">CEO</h2>
          <h2 className="text-right text-[#A86B6B]">PRESIDENT</h2>
        </div>
        <div className="h-3/4 w-full flex justify-center items-center overflow-hidden rounded-b-2xl">
          <img src="CEO.png" alt="ceo" className="size-full object-center"/>
        </div>
      </div>
      <div className=" h-80 w-60 absolute bg-[#7F1616] sm:top-[35rem] top-96 sm:left-[30rem] left-10 z-10 rounded-2xl flex flex-col justify-between">
      <div className="flex-col justify-between font-bebas text-5xl px-5 py-1">
          <h2 className="text-left">ENHANCED</h2>
          <h2 className="text-right text-[#A86B6B]">PLANS</h2>
        </div>
        <div className="h-3/4 w-full flex justify-center items-center overflow-hidden rounded-b-2xl">
          <img src="People.png" alt="people" className="h-80 object-center object-cover"/>
        </div>
      </div>
      <div className=" h-80 w-60 absolute bg-[#7F1616] sm:top-80 top-[45rem] sm:left-[50rem] left-20 z-10 rounded-2xl flex flex-col justify-between">
      <div className="flex-col justify-between font-bebas text-5xl px-5 py-1">
          <h2 className="text-left">THE</h2>
          <h2 className="text-right text-[#A86B6B]">LAUNCH</h2>
        </div>
        <div className="h-3/4 w-full flex justify-center items-center overflow-hidden rounded-b-2xl">
          <img src="Canon_leadership 1.png" alt="ceo" className="size-full object-center"/>
        </div>
      </div>
      <div className="w-[60rem] sm:h-60 absolute -right-96 sm:top-80 bg-[#5E0000] sm:rotate-90 rotate-45 flex justify-center items-center">
      <Scroll
          text={
            "press releases news releases"
          }
          value={true}
        />
      </div>
    </div>
  );
};

export default News;
