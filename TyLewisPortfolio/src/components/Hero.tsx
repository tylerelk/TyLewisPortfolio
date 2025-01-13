import { useEffect, useState } from "react";
import { isDesktop, isMobile } from "react-device-detect";
import _meAndChloe from "../assets/images/ty-and-chloe-line-art.svg";
import Bestagon from "./Bestagon";
import _bullets from "../assets/data/aboutme.json";

export default function Hero() {
  const [isShifted, setIsShifted] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShifted(true);
    }, 500);
    return () => {
      clearTimeout(timer);
    };
  });
  return (
    <>
      <div
        id='hero'
        className={`w-screen h-screen flex items-center justify-center relative ${isDesktop ? "bg-hero-background" : ""}`}
      >
        {isDesktop && <Bestagon />}
        <div
          className={`bg-card-background rounded-3xl shadow-xl shadow-teal-400 p-10 flex ${isMobile ? "animate-fade-in" : ""}`}
        >
          <div
            className={`flex items-center ${isMobile ? "flex-col" : "gap-10"}`}
          >
            <div className={`flex flex-col justify-around`}>
              <h1 className='text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-teal-400'>
                Hi!
              </h1>
              <h2 className='text-7xl font-thin text-transparent bg-clip-text bg-gradient-to-b from-teal-400 to-pink-500'>
                I'm Ty
              </h2>
            </div>
            <ul
              className={`mt-5 text-2xl font-black font-mono text-right transform transition-all duration-1000 ease-in-out ${isShifted ? "opacity-100" : "opacity-0"}`}
            >
              <span className='border-b-2'>a Software Engineer</span>
              {isDesktop &&
                _bullets["hero-section"].map((b) => {
                  return <li className='font-thin text-sm leading-6'>{b}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
