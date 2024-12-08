import "./Bestagon.css";

export default function Bestagon() {
  return (
    <>
      <div className='hexagon absolute top-10 right-10 text-xs flex items-center justify-center bg-pink-500'>
        <a
          className=' text-pink-500 w-3/4 hover:text-teal-300'
          href='https://www.youtube.com/watch?v=thOifuHs6eY'
          target='_blank'
        >
          Hexagon?
          <br />
          The Bestagon
        </a>
      </div>
    </>
  );
}
