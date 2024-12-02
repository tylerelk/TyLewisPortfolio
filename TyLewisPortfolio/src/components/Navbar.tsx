import { useState, useRef } from "react";
import AboutIcon from "../assets/icons/about.svg";
import TechIcon from "../assets/icons/technology.svg";
import ProjectsIcon from "../assets/icons/projects.svg";
import ResumeIcon from "../assets/icons/resume.svg";
import ContactIcon from "../assets/icons/contact.svg";
import { isDesktop } from "react-device-detect";

const navItems = [
  {
    path: "about",
    name: "About",
    icon: AboutIcon,
  },
  {
    path: "tech",
    name: "Technology",
    icon: TechIcon,
  },
  {
    path: "projects",
    name: "Projects",
    icon: ProjectsIcon,
  },
  {
    path: "resume",
    name: "Resume",
    icon: ResumeIcon,
  },
  {
    path: "contact",
    name: "Contact",
    icon: ContactIcon,
  },
];

export default function Navbar({
  sliderRef,
}: {
  sliderRef: React.RefObject<HTMLDivElement>;
}) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  const [ballPosition, setBallPosition] = useState<number>(0);
  const iconRefs = useRef<(HTMLLIElement | null)[]>([]);
  const navbarRect = document
    .getElementById("navbar-sections")
    ?.getBoundingClientRect();

  const handleHover = (index: number) => {
    setSelectedIndex(index);

    if (iconRefs.current[index]) {
      const rect = iconRefs.current[index].getBoundingClientRect();
      const relativePosition = rect.left - navbarRect!.left;
      setBallPosition(relativePosition);
    }
  };

  const handleIconClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const target = sliderRef.current;
    if (target) {
      const sectionWidth = target.scrollWidth / navItems.length;
      target.scrollTo({
        left: sectionWidth * index,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`mx-auto mt-4 p-1 bg-gray-600 border-transparent border-2 transition duration-200 rounded-full ${
        isDesktop
          ? "w-1/3 bg-opacity-30 hover:border-gray-200"
          : "w-full absolute bottom-0 left-0"
      }`}
    >
      <ul
        id='navbar-sections'
        className='relative flex gap-2 p-2 justify-around'
      >
        {navItems.map((item, index) => {
          return (
            <li
              key={item.name}
              className='relative flex justify-center items-center w-10 h-10'
              onMouseOver={() => handleHover(index)}
              ref={(el) => (iconRefs.current[index] = el)}
            >
              <a
                href={item.path}
                onClick={(e) => handleIconClick(e, index)}
                className='flex items-center justify-center w-full h-full'
              >
                <img
                  src={item.icon}
                  className={`block ${
                    isDesktop
                      ? "w-8 h-8"
                      : "w-10 h-10 bg-white bg-opacity-50 rounded-full p-1"
                  }`}
                  alt={item.name}
                />
              </a>
            </li>
          );
        })}
        <span
          id='navbar-ball'
          className={`rounded-full w-10 h-10 bg-white absolute translate-x-0 -z-10 left-auto ${
            isDesktop ? "bg-opacity-50" : "bg-opacity-0"
          }`}
          style={{
            left: ballPosition,
            transition: "left 300ms cubic-bezier(.36,.61,.31,1.4)",
          }}
        ></span>
      </ul>
      <div>
        {selectedIndex !== null && (
          <div className='text-white text-2xl w-full text-center font-thin tracking-widest'>
            {navItems[selectedIndex].name}
          </div>
        )}
      </div>
    </div>
  );
}
