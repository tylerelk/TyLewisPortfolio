import { useRef } from "react";
import AboutIcon from "../assets/icons/about.svg";
import TechIcon from "../assets/icons/technology.svg";
import ProjectsIcon from "../assets/icons/projects.svg";
import ResumeIcon from "../assets/icons/resume.svg";
import ContactIcon from "../assets/icons/contact.svg";
import { isDesktop } from "react-device-detect";
import "./Navbar.css";

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

export default function Navbar() {
  const iconRefs = useRef<(HTMLLIElement | null)[]>([]);

  const handleIconClick = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    const section = document.getElementById(navItems[index].path);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 10,
        behavior: "smooth",
      });
    }
  };

  return (
    <div
      className={`sticky top-2 ml-2 p-1 scale-50 bg-gray-600 border-transparent border-2 transition duration-200 rounded-full max-w-min bg-opacity-10 hover:border-slate-200 hover:bg-opacity-60 hover:scale-100 z-10 `}
    >
      <ul
        id='navbar-sections'
        className='relative flex gap-2 p-2 justify-around'
      >
        {navItems.map((item, index) => {
          return (
            <li
              key={item.name}
              className='relative flex justify-center items-center w-16 h-16 perspective'
              ref={(el) => (iconRefs.current[index] = el)}
            >
              <a
                href={item.path}
                onClick={(e) => handleIconClick(e, index)}
                className='flex items-center justify-center w-full h-full'
              >
                <div className='icon-container'>
                  <div className='icon-front'>
                    <img
                      src={item.icon}
                      className={`block ${
                        isDesktop
                          ? "w-8 h-8"
                          : "w-10 h-10 bg-white bg-opacity-50 rounded-full p-1"
                      }`}
                      alt={item.name}
                    />
                  </div>
                  <div className='icon-back'>
                    <p className='text-sm rotate-180'>{item.name}</p>
                  </div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
