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
          <p>This is where I'll place "About Me" content</p>
        </Card>
      </div>
    </>
  );
}

export default App;
