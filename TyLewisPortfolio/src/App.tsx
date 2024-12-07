import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import { useRef } from "react";
import TechSection from "./components/TechSection";
import Resume from "./components/Resume";
import { isDesktop } from "react-device-detect";
import _aboutMe from "./assets/copy/aboutme.json";
import _booBoo from "./assets/images/booboo.jpeg";
import Hero from "./components/Hero";

function App() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const aboutMeParagraphs = _aboutMe.paragraphs;
  return (
    <>
      <Background />
      <Hero />
      <Navbar sliderRef={sliderRef} />
      <div className='flex flex-col items-center gap-4'>
        <Card title='Ty Lewis' id='about'>
          <div>
            <img
              src={_booBoo}
              className={` ${
                isDesktop ? "w-52" : "w-24"
              } float-right mx-4 bg-inherit rounded-3xl transition duration-300 shadow-lg hover:shadow-2xl`}
            />
            {aboutMeParagraphs.map((p) => {
              return (
                <p className='text-left indent-4 text-xl leading-tight my-4'>
                  {p}
                </p>
              );
            })}
          </div>
        </Card>
        <Card title='Technology' id='tech'>
          <TechSection />
        </Card>
        <Card title='Projects' id='projects'>
          <p>This section will contain highlights of projects I've built</p>
        </Card>
        <Card title='Resume' id='resume'>
          <Resume />
        </Card>
        <Card title='Contact' id='contact'>
          <p>This section will contain contact information</p>
        </Card>
      </div>
    </>
  );
}

export default App;
