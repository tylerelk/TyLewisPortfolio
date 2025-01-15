import { ReactNode } from "react";
import { isDesktop } from "react-device-detect";
import "./Card.css";
import { InView } from "react-intersection-observer";

interface CardProps {
  children: ReactNode;
  title: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ children, title, id }) => {
  return (
    <>
      <InView as={"div"} rootMargin='-10%' triggerOnce={true}>
        {({ inView, ref }) => (
          <div
            ref={ref}
            className={`card relative min-h-96 bg-gray-50 rounded-2xl m-auto shadow-2xl p-8 transition-opacity duration-500 ease-in  ${
              isDesktop ? "w-1/2" : "w-11/12"
            } ${inView ? "opacity-100" : "opacity-0"}`}
            id={id}
          >
            <div className='card-title mb-3'>
              <p className='text-5xl  text-black font-thin border-b-2 border-pink-300 text-left'>
                {title}
              </p>
            </div>
            <div className='card-content flex flex-col text-black'>
              {children}
            </div>
          </div>
        )}
      </InView>
    </>
  );
};

export default Card;
