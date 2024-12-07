import { ReactNode } from "react";
import { isDesktop } from "react-device-detect";

interface CardProps {
  children: ReactNode;
  title: string;
  id: string;
}

const Card: React.FC<CardProps> = ({ children, title, id }) => {
  return (
    <>
      <div
        className={`card relative min-h-96 bg-card-background rounded-2xl pb-36 m-auto shadow-2xl p-4 ${
          isDesktop ? "w-1/2" : "w-11/12"
        }`}
        id={id}
      >
        <div className='card-title mb-3'>
          <p className='text-5xl  text-black font-thin border-b-2 text-left'>
            {title}
          </p>
        </div>
        <div className='card-content flex flex-col text-black'>{children}</div>
      </div>
    </>
  );
};

export default Card;
