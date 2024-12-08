import { isDesktop } from "react-device-detect";
import _meAndChloe from "../assets/images/ty-and-chloe-line-art.svg";
import Bestagon from "./Bestagon";

export default function Hero() {
  return (
    <>
      <div
        id='hero'
        className={`w-screen h-screen flex items-center justify-center relative ${isDesktop ? "bg-hero-background" : "bg-gradient-to-b from-black via-gray-800 to-transparent"}`}
      >
        {isDesktop && <Bestagon />}
        <div
          className={`w-9/12 bg-gray-50 rounded-3xl shadow-2xl shadow-pink-300 p-4 flex justify-between items-center animate-fade-in`}
        >
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <h1 className='text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-teal-400'>
                Hi!
              </h1>
              {isDesktop && <span className='text-9xl'>👋</span>}
            </div>
            <p
              className={`m-auto text-lg text-black ${isDesktop ? "w-3/4" : "w-full"}`}
            >
              I'm Ty, a software engineer with hands-on experience in
              healthcare, I now specialize in front-end development using
              JavaScript, TypeScript, and React. I'm passionate about creating
              intuitive solutions that bridge the gap between healthcare and
              technology.
            </p>
          </div>
          {isDesktop && (
            <img
              src={_meAndChloe}
              className='rotate-90 w-96 h-72 rounded-3xl border-2 border-slate-500 bg-slate-200 object-cover'
            />
          )}
        </div>
      </div>
    </>
  );
}
