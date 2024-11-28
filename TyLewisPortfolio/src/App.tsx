import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Ty Lewis</h1>
      <div className='card'>
        <p>Software Engineer</p>
      </div>
      <p className='read-the-docs'>Personal website coming soon.</p>
    </>
  );
}

export default App;
