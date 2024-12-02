import { ReactNode } from "react";

interface GradientBackgroundProps {
  children: ReactNode;
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({ children }) => {
  return (
    <div className=" ">
      <div className="relative w-full md:min-h-screen  bg-gradient-to-bl from-purple-900 to-black overflow-hidden">
        <div className="absolute top-0 left-0 w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-70 animate-gradient1"></div>
        <div className="absolute top-1/4 left-0 w-[150px] h-[150px] md:w-[400px] md:h-[400px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-70 animate-gradient1"></div>
        <div className="absolute top-1/4 left-1/2 w-[150px] h-[150px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-purple-800 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-70 animate-gradient2"></div>
        <div className="absolute bottom-0 right-0 w-[150px] h-[150px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-blue-500 to-green-500 rounded-full blur-3xl opacity-70 animate-gradient3"></div>
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  );
};

export default GradientBackground;
