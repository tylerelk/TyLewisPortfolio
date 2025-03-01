import { useState, useEffect, ReactNode } from "react";
import "./Loader.css";
import { isDesktop, isMobile } from "react-device-detect";
import icon from "../assets/icons/loader-icon.apng";

interface LoaderProps {
  children: ReactNode;
}

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const handleWindowLoad = () => {
      setIsLoading(false);
    };
    window.addEventListener("load", handleWindowLoad);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => {
      window.removeEventListener("load", handleWindowLoad);
      clearTimeout(timer);
    };
  });

  if (!isClient) {
    return <div>{children}</div>;
  }

  return (
    <>
      <div>
        {isLoading && isDesktop ? (
          <div className='fixed w-full h-full bg-black flex flex-col justify-center items-center transition-all duration-200'>
            <img src={icon} alt='' />
            <h1
              className={`bg-gradient-to-b from-purple-600 to-teal-500 text-transparent bg-clip-text ${isMobile ? "text-md" : "text-3xl"}`}
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
