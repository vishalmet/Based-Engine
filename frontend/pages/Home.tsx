// import Navbar from "@/components/Navbar";
import HowitWorks from "@/components/HowitWorks";
// import Illustration from "../../public/illustrations.json";
// import Lottie from "lottie-react";
import Tutorials from "@/components/Tutorials";

const Home: React.FC = () => {
  return (
    <div className=" min-h-screen overflow-hidden bricolage-font ">
      {/* <GradientBackground> */}
      <div className=" bg-gradient-radial from-[#f8f8f8] via-[#2a2a2a] to-[#2a2a2a]">
        {/* <Navbar /> */}
        <div className=" flex justify-center items-center min-h-screen" id="home">
          <div className="pt-20  mx-6 md:mx-16 lg:mx-32 items-center">
            <div className=" ">
              {/* <div className=" w-[350px] lg:w-full lg:max-w-[550px] h-auto mx-auto">
                <Lottie animationData={Illustration} loop={true} />
              </div> */}
            </div>
            <div className=" items-center text-[#2a2a2a]">
              <p className=" text-3xl md:text-5xl lg:text-7xl brandy-font font-bold text-center bg-[#f8f8f8]/80 rounded-t w-fit mx-auto p-2">
                aptEngine.
              </p>
              <p className="max-w-[40%] mx-auto p-2 text-center text-base md:text-xl bg-[#2a2a2a]/80 rounded text-[#f8f8f8]">
                Unlock the future of gaming with our cutting-edge game engine. Designed for developers, by developers,
                VortexEngine offers seamless integration, powerful tools, and endless possibilities. Join the revolution
                and bring your game ideas to life on the blockchain.
              </p>
              <div className=" flex justify-center pt-6 pb-10 md:pb-0">
                <a href="https://manis-organization-2.gitbook.io/vortexdocs" target="_blank"  className=" text-white text-base lg:text-xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 rounded-xl  border-2 brandy-font border-white custom-border-radius">
                  Explore More
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
      {/* </GradientBackground> */}
      <div className="" id="howitworks">
        <HowitWorks />
      </div>
      <div className="" id="walkthrough">
        <Tutorials />
      </div>
      <div className="text-center mt-6 text-sm text-gray-400 p-3">
          &copy; 2024 Your Company. All rights reserved.
        </div>
    </div>
  );
};

export default Home;
