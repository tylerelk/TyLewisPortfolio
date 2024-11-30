import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  title: string;
}

const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <>
      <div className='card bg-gray-50 w-1/2 rounded-2xl m-auto my-10 shadow-2xl'>
        <div className='card-title mb-3'>
          <p className='text-5xl  text-black font-thin border-b-2 text-left'>
            {title}
          </p>
        </div>
        <div className='card-content flex text-black'>{children}</div>
      </div>
    </>
  );
};

export default Card;