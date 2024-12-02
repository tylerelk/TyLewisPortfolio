import React, { forwardRef, ReactNode } from "react";

interface SliderProps {
  children: ReactNode;
  sliderRef: React.RefObject<HTMLDivElement>;
}

const HorizontalSlider = forwardRef<HTMLDivElement, SliderProps>(
  ({ children, sliderRef }, ref) => {
    return (
      <>
        <div
          ref={sliderRef}
          id='slider'
          className='h-screen overflow-auto no-scrollbar m-auto my-4 flex scroll-smooth snap-x snap-mandatory rounded-xl'
          style={{ width: "90vw" }}
        >
          {React.Children.map(children, (child, index) => (
            <>
              <div
                key={index}
                className='min-h-full min-w-full max-h-fit snap-start overflow-auto no-scrollbar rounded-xl'
              >
                {child}
              </div>
            </>
          ))}
        </div>
      </>
    );
  }
);

export default HorizontalSlider;
