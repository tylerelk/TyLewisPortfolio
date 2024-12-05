import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import HorizontalSlider from "./components/HorizontalSlider";
import { useRef } from "react";
import TechSection from "./components/TechSection";

function App() {
  const sliderRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Background />
      <Navbar sliderRef={sliderRef} />
      <HorizontalSlider sliderRef={sliderRef}>
        <Card title='About Me' id='about'>
          <p>This section will contain the "About Me" section</p>
        </Card>
        <Card title='Technology' id='tech'>
          <TechSection />
        </Card>
        <Card title='Projects' id='projects'>
          <p>This section will contain highlights of projects I've built</p>
        </Card>
        <Card title='Resume' id='resume'>
          <p>This section will contain my resume</p>
        </Card>
        <Card title='Contact' id='contact'>
          <p>This section will contain contact information</p>
        </Card>
      </HorizontalSlider>
    </>
  );
}

export default App;
