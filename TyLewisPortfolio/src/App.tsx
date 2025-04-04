import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import TechSection from "./components/TechSection";
import Resume from "./components/Resume";
import { isDesktop } from "react-device-detect";
import _aboutMe from "./assets/data/aboutme.json";
import _booBoo from "./assets/images/booboo.jpeg";
import Hero from "./components/Hero";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Loader from "./components/Loader";

function App() {
  const aboutMeParagraphs = _aboutMe.paragraphs;

  return (
    <>
      <Loader>
        <Background />
        <Hero />
        {isDesktop && <Navbar />}
        <div className='flex flex-col items-center gap-4 pb-10'>
          <Card title='About Me' id='about'>
            <div>
              <img
                src={_booBoo}
                className={` ${
                  isDesktop ? "w-52 float-right" : "w-40 mx-auto"
                } mx-4 bg-inherit rounded-3xl transition duration-300 shadow-lg hover:shadow-2xl`}
              />
              {aboutMeParagraphs.map((p) => {
                return (
                  <p
                    key={aboutMeParagraphs.indexOf(p)}
                    className='text-left indent-4 text-xl leading-tight my-4'
                  >
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
            <Projects />
          </Card>
          <Card title='Resume' id='resume'>
            <Resume />
          </Card>
          <Card title='Contact' id='contact'>
            <Contact />
          </Card>
        </div>
      </Loader>
    </>
  );
}

export default App;
