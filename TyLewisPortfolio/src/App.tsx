import "./App.css";
import Background from "./components/Background";
import Card from "./components/Card";

function App() {
  return (
    <>
      <Background />
      <div
        style={{
          width: "80vw",
        }}
        className='h-screen overflow-y-scroll m-auto no-scrollbar my-8'
      >
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
        <Card title='Test Title'>
          <p>Test Content</p>
        </Card>
      </div>
    </>
  );
}

export default App;
