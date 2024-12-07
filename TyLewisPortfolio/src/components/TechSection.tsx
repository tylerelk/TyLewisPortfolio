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
      <div className={`m-auto flex flex-wrap justify-center gap-2 w-9/12`}>
        {icons.map((icon: any, index) => {
          return (
            <div
              key={index}
              dangerouslySetInnerHTML={{ __html: icon.default }}
              className={`iconSquare w-40 h-32 flex justify-center items-center p-8 border-8 border-gray-100 rounded-3xl transition-all duration-200 grayscale`}
            ></div>
          );
        })}
      </div>
    </>
  );
}