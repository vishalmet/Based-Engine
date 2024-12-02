import Marquee from "react-fast-marquee";

const videoData = [
  { videoSrc: 'https://youtube.com/watch?v=fvq7cy3HtYI', content: 'Apt Survival is an intense online game built with the Apt Engine. Players start with 100 health and must collect all 10 collectibles while managing their health, which drains as they move. Can you survive and gather them all before your health runs out?"' },
  { videoSrc: 'https://youtube.com/watch?v=GpgEEeAacn0', content: 'Onchain Breakout is an innovative and immersive blockchain-based game developed using the AptEngine, a powerful game engine designed for creating dynamic, real-time experiences. This game blends the classic mechanics of the beloved Breakout game with the unique capabilities of blockchain technology, offering players a seamless fusion of nostalgia and cutting-edge innovation.' },
  // { videoSrc: 'https://www.youtube.com/watch?v=dyUmgWxPKwc', content: 'Unlock the future of gaming with our cutt qing-edge game engine. Designed for developers, by developers, AptEngine offers seamless integration, powerful tools, and endless possibilities. Join the revolution and bring your game ideas to life on the blockchain.' },
  // Add more video data with URLs here
];

const Tutorials = () => {
  return (
    <div className="mt-10">
      <div className="relative bg-black text-white flex justify-center items-center brandy-font p-4 border-y-2 border-white h-24 lg:h-32">
        <p className="z-10 text-xl md:text-3xl lg:text-6xl bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 rounded p-3">
          ✦ Game Walkthrough ✦
        </p>
        <div className="absolute top-0 left-0 w-full h-full flex items-center">
          <Marquee gradient={false} className="text-xs md:text-xl lg:text-2xl">
            <p className=" mr-72  ">A Step-by-Step Showcase</p>
            <p>Export Your Game as .exe</p>
          </Marquee>
        </div>
      </div>
      <div className="pt-10 min-h-screen">
        <div className=" mx-auto">
          <div className="flex-row flex-wrap space-y-6">
            {videoData.map((video, index) => (
              <div className=" ">
              <div key={index} className="flex-row md:flex border-2 gradient-border items-center shadow-lg mx-auto overflow-hidden w-[90%] md:w-[80%] p-6 ">
                <div className="flex-shrink-0">
                  <iframe
                    className="w-fit md:w-[500px] h-[200px] sm:h-[300px] lg:h-[315px]"
                    src={`https://www.youtube.com/embed/${video.videoSrc.split('v=')[1]?.split('&')[0]}?autoplay=1`}
                    title={`YouTube video player ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className=" md:p-4 text-center">
                  <p>{video.content}</p>
                </div>
              </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;
