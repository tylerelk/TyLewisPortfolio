import booBoo from "./assets/images/booboo.jpeg";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <a href='https://github.com/tylerelk' target='_blank'>
          <img
            src={booBoo}
            style={{
              width: "20%",
              borderRadius: "20px",
            }}
          />
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
