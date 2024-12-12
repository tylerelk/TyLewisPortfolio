import "./TechSection.css";
import Skills from "./Skills";
import { isDesktop } from "react-device-detect";
import Icons from "../assets/icons/tech/TechIcons";

export default function TechSection() {
  return (
    <>
      <p className='text-xl text-left'>Here's what I'm good at</p>
      <Skills />
      <p className='text-xl text-left'>Here's what I've worked with</p>
      <div
        className={`m-auto flex flex-wrap justify-center gap-2 ${isDesktop ? "w-9/12" : "w-full"}`}
      >
        {Icons.map((icon: any, index) => {
          return (
            <div
              key={index}
              className={` flex justify-center items-center border-8 border-gray-100 rounded-full transition-all duration-200  ${isDesktop ? "iconSquare w-32 h-32 grayscale p-8 hover:bg-white hover:border-0" : "w-16 h-16"}`}
            >
              <img src={icon} alt='' />
            </div>
          );
        })}
      </div>
    </>
  );
}
