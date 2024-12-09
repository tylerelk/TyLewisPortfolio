import { useState, useEffect, ReactNode } from "react";
import "./Loader.css";
import { isMobile } from "react-device-detect";

interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const handleWindowLoad = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
    };
    window.addEventListener("load", handleWindowLoad);
    return () => {
      window.removeEventListener("load", handleWindowLoad);
    };
  });
  return (
    <>
      <div>
        {isLoading ? (
          <div className='fixed w-full h-full bg-black flex justify-center items-center transition-all duration-200'>
            <h1
              className={`bg-gradient-to-b from-teal-300 to-yellow-500 text-transparent bg-clip-text ${isMobile ? "text-3xl" : "text-9xl"}`}
            >
              Loading...
            </h1>
          </div>
        ) : (
          <div>{children}</div>
        )}
      </div>
    </>
  );
};

export default Loader;
