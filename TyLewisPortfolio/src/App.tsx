import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Background />
      <div
        style={{
          width: "80vw",
        }}
        className='h-screen overflow-y-scroll m-auto no-scrollbar my-8 p-8'
      >
        <Navbar />
        <Card title='Ty Lewis'>
          <h1>Hi! &#128075;</h1>
          <p>
            I'm still working on this website. Check back soon for more
            information about me and the things I'm working on. Here's a list of
            other places to find me:
          </p>
          <ul>
            <li>
              <a href='https://www.linkedin.com/in/ty-lewis/'>
                My LinkedIn Profile
              </a>
            </li>
            <li>
              <a href='https://github.com/tylerelk'>My GitHub</a>
            </li>
          </ul>
        </Card>
      </div>
    </>
  );
}

export default App;
