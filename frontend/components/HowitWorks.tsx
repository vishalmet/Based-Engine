import Marquee from "react-fast-marquee";

const HowitWorks = () => {
  return (
    <div className=" ">
      <div className="relative bg-black text-white flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
        <p className=" z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded p-3">✦ How It Works ✦</p>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <Marquee gradient={false} className="text-xs md:text-xl lg:text-2xl">
            Build, Deploy, and Play On-Chain with VortexEngine!
          </Marquee>
        </div>
      </div>
      <div className=" space-y-4 md:flex justify-center md:gap-20 mx-4 pt-6 md:pt-16">
        <div className=" flex justify-center">
          <div className="card w-[320px] md:w-[450px] h-[200px] md:h-[250px] flex justify-center items-center relative">
            <div className="bg bg-transparent hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 w-[310px] md:w-[440px] h-[190px] md:h-[240px] flex justify-center items-center relative">
              <div className="items-center p-2 lg:p-4">
                <div>
                  <p className=" brandy-font text-4xl md:text-7xl text-center">1</p>
                  <p className=" text-xl md:text-2xl font-semibold brandy-font text-center">Onboarding</p>
                  <p className="text-center">
                    Use our dynamic wallet integration to securely connect your preferred crypto wallet
                  </p>
                </div>
              </div>
            </div>
            <div className="blob w-[320px] md:w-[450px] h-[200px] md:h-[250px] absolute top-0 left-0"></div>
          </div>
        </div>

        <div className=" flex justify-center">
          <div className="card w-[320px] md:w-[450px] h-[200px] md:h-[250px] flex justify-center items-center relative">
            <div className="bg bg-transparent hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 w-[310px] md:w-[440px] h-[190px] md:h-[240px] flex justify-center items-center relative">
              <div className="items-center p-4">
                <div>
                  <p className=" brandy-font text-4xl md:text-7xl text-center">2</p>
                  <p className=" text-xl md:text-2xl brandy-font font-semibold text-center">
                    Build a Game using aptEngine
                  </p>
                  <p className="text-center">
                    Utilize aptEngine to develop your on-chain game with powerful, seamless tools.
                  </p>
                </div>
              </div>
            </div>
            <div className="blob w-[320px] md:w-[450px] h-[200px] md:h-[250px] absolute top-0 left-0"></div>
          </div>
        </div>
      </div>

      <div className=" flex  justify-center pt-4 md:pt-20">
        <div className="card w-[320px] md:w-[450px] h-[200px] md:h-[250px] flex justify-center items-center relative">
          <div className="bg bg-transparent hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 w-[310px] md:w-[440px] h-[190px] md:h-[240px] flex justify-center items-center relative">
            <div className="items-center p-4">
              <div>
                <p className=" brandy-font text-4xl md:text-7xl text-center">3</p>
                <p className=" text-xl md:text-2xl font-semibold brandy-font text-center">Deploy Your Game On-Chain</p>
                <p className="text-center">
                  Launch your game on the blockchain to make it accessible to the community.
                </p>
              </div>
            </div>
          </div>
          <div className="blob w-[320px] md:w-[450px] h-[200px] md:h-[250px] absolute top-0 left-0"></div>
        </div>
      </div>
      <div className=" flex justify-center pt-10">
        <a href="https://manis-organization-2.gitbook.io/vortexdocs" target="_blank" className=" text-white text-base lg:text-xl bg-transparent backdrop-blur-2xl backdrop-filter hover:scale-105 transform transition-transform duration-100 hover:shadow-xl hover:bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 p-3 rounded-xl  border-2 brandy-font border-white custom-border-radius">
          View Docs
        </a>
      </div>
    </div>
  );
};

export default HowitWorks;
