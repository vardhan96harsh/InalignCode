
import Aboutbg from "../assets/Aboutbg.png";

import a1 from "../assets/a1.png";
import a2 from "../assets/a2.png";
import a3 from "../assets/a3.png";

const AboutUs = () => {
  return (
    <>
      {/* 🧠 Floating animation added inside component */}
      <style>
        {`
          @keyframes floatUpDown {
            0%, 100% {
              transform: translate(-50%, -55%);
            }
            50% {
              transform: translate(-50%, -45%);
            }
          }

          .float-animation {
            animation: floatUpDown 4s ease-in-out infinite;
          }
        `}
      </style>

      <section
        id="about"
        className="relative px-[50px]  lg:px-[112px] xl:px-[112px] 2xl:px-[105px] py-10 md:py-32 text-white bg-gradient-to-b from-purple-920 via-[#3B1191] to-[#200870] overflow-hidden z-0"
      >
        <div className="  grid md:grid-cols-2 gap-[10px] xl:gap-[50px] 2xl:gap-[100px] ">
          {/* Left Text Content */}
          <div>
            <h2 className="text-4xl 2xl:text-7xl font-bold mb-4">About Us</h2>
            <h3 className="text-2xl 2xl:text-3xl font-semibold mb-6">
              We Don’t Just Build AI – We Give It a Voice.
            </h3>
            <p className="text-white mb-4 leading-7 xl:text-xl  2xl:text-2xl">
              At <span className="text-[#FE5868] text-xl xl:text-2xl 2xl:text-3xl font-bold">Inalign</span>, we believe voice is the most powerful human connector.
              That’s why we’ve built an AI voice agent so natural, so intelligent,
              and so seamless — most people can’t tell it apart from a human.
            </p>
            <p className="text-white mb-8 xl:text-xl 2xl:text-2xl">
              Whether it's handling a sales inquiry, solving a support issue, or
              following up with a potential lead, our AI doesn’t just talk — it engages, understands, and builds relationships. All in real time, and at scale.​
            </p>
          </div>

          {/* Right Logo with animation */}
          <div className="relative  flex  w-full">
            <img
              src={Aboutbg}
              alt="Inalign Background"
              className=" xl:w-[500px] xl:h-[300px] xl:left-[353px]  2xl:w-[700px] 2xl:h-[500px]  object-contain "
            />
<div className="flex flex-col  absolute top-1/2 left-[150px] md:left-[180px] lg:left-[320px] xl:left-[328px] 2xl:left-[455px] transform -translate-x-1/2 -translate-y-1/2  gap-6 2xl:gap-12  mx-auto">
          {/* Card 1 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 xl:p-2 2xl:p-4 w-[310px] 2xl:w-[490px] flex justify-start items-center text-center shadow-md border border-white/10 gap-4 md:gap-8">
            <img src={a1} alt="a1" className=" h-[35px] xl:h-[50px] 2xl:h-[70px] ml-4" />
            <p className="text-white font-medium text-xl 2xl:text-3xl">Engages</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 2xl:p-4 w-[310px] 2xl:w-[490px] flex justify-start items-center text-center shadow-md border border-white/10 gap-4 xl:gap-8">
            <img src={a2} alt="a2" className="h-[35px] xl:h-[50px] 2xl:h-[70px] ml-4" />
            <p className="text-white font-medium text-xl 2xl:text-3xl">Build Relationships</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/20 backdrop-blur-md rounded-xl p-2 2xl:p-4 w-[310px] 2xl:w-[490px] flex justify-start items-center text-center shadow-md border border-white/10 gap-4 xl:gap-8">
            <img src={a3} alt="a3" className=" h-[35px] xl:h-[50px] 2xl:h-[70px] ml-4" />
            <p className="text-white font-medium text-xl 2xl:text-3xl">Understands</p>
          </div>
        </div>
            
          </div>
        </div>

       
        

        {/* Features Row */}
        

        {/* Bottom Caption */}
       
      </section>
    </>
  );
};

export default AboutUs;
