import _meAndChloe from "../assets/images/ty-and-chloe-line-art.svg";

export default function Hero() {
  return (
    <>
      <div className='w-screen h-screen bg-hero-background flex items-center justify-center'>
        <div
          className={`w-9/12 bg-gray-50 rounded-3xl shadow-2xl shadow-pink-300 p-4 flex justify-between items-center`}
        >
          <div className='flex flex-col items-center'>
            <div className='flex gap-2'>
              <h1 className='text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-500 to-teal-400'>
                Hi!
              </h1>
              <span className='text-9xl'>👋</span>
            </div>
            <p className='m-auto text-lg w-3/4 text-black'>
              I'm Ty, a software engineer with hands-on experience in
              healthcare, I now specialize in front-end development using
              JavaScript, TypeScript, and React. I'm passionate about creating
              intuitive solutions that bridge the gap between healthcare and
              technology.
            </p>
          </div>
          <img
            src={_meAndChloe}
            className='rotate-90 w-96 h-72 rounded-3xl border-2 border-slate-500 bg-slate-200 object-cover'
          />
        </div>
      </div>
    </>
  );
}
