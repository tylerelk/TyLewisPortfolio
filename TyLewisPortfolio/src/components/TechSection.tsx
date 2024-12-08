import "./TechSection.css";
import Skills from "./Skills";

export default function TechSection() {
  const icons = Object.values(
    import.meta.glob("../assets/icons/tech/*.svg", {
      eager: true,
      query: "?raw",
    })
  );
  return (
    <>
      <p className='text-xl text-left'>Here's what I'm good at</p>
      <Skills />
      <p className='text-xl text-left'>Here's what I've worked with</p>
      <div className={`m-auto flex flex-wrap justify-center gap-2 w-11/12`}>
        {icons.map((icon: any, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: icon.default }}
              className={`iconSquare w-24 h-24 flex justify-center items-center p-2 bg-slate-50 rounded-3xl transition-all duration-200 grayscale`}
            ></div>
          );
        })}
      </div>
    </>
  );
}
