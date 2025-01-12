import { isDesktop, isMobile } from "react-device-detect";
import _meAndChloe from "../assets/images/ty-and-chloe-line-art.svg";
import Bestagon from "./Bestagon";
import _resume from "../assets/data/resume.json";

export default function Hero() {
  return (
    <>
      <div
        id='hero'
        className={`w-screen h-screen flex items-center justify-center relative ${isDesktop ? "bg-hero-background" : "bg-gradient-to-b from-black via-gray-800 to-transparent"}`}
      >
        {isDesktop && <Bestagon />}
        <div
          className={`w-7/12 bg-card-background rounded-3xl shadow-2xl shadow-teal-400 p-6 ${isMobile ? 'animate-fade-in' : ''}`}
        >
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <h1 className='text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-teal-400'>
                Hi!
              </h1>
            </div>
            <p
              className={`m-auto text-lg text-black ${isDesktop ? "w-3/4" : "w-full"}`}
            >
              {_resume.sections.summary.content}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
