import Skills from "./Skills";
import { isDesktop } from "react-device-detect";
import Icons from "../assets/icons/tech/TechIcons";
import { InView } from "react-intersection-observer";

export default function TechSection() {
  return (
    <>
      <p className='text-xl text-left'>Here's what I'm good at</p>
      <Skills />
      <p className='text-xl text-left'>Here's what I've worked with</p>
      <InView as={"div"} triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            className={`m-auto flex flex-wrap justify-center gap-2 ${isDesktop ? "w-9/12" : "w-full"}`}
          >
            {Icons.map((icon: any, index) => {
              return (
                <div
                  ref={ref}
                  key={index}
                  style={{ animationDelay: `${index * 100}` }}
                  className={`flex justify-center items-center rounded-full transition-all duration-700 ${isDesktop ? "w-24 h-24 p-2" : "w-16 h-16"} ${inView ? "opacity-100" : "opacity-0"}`}
                >
                  <img src={icon} />
                </div>
              );
            })}
          </div>
        )}
      </InView>
    </>
  );
}
