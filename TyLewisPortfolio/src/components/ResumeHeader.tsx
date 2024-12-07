import { isMobile } from "react-device-detect";

interface HeaderProps {
  title: string;
  startColor: string;
  endColor: string;
}

const ResumeHeader: React.FC<HeaderProps> = ({
  title,
  startColor,
  endColor,
}) => {
  return (
    <h1
      className={`w-full mb-4 font-black text-transparent bg-clip-text bg-gradient-to-r ${startColor} ${endColor} ${
        isMobile ? "text-center text-4xl" : "text-right text-6xl"
      }`}
    >
      {title}
    </h1>
  );
};

export default ResumeHeader;
