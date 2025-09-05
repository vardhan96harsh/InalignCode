
import line from "../assets/line.svg";
import  brain from "../assets/brain.png";
import navigation from "../assets/navigation.png";
import auto from "../assets/automation.png";
import language from "../assets/laguage.png";
import interaction from "../assets/interaction.png";
import growth from "../assets/groth.png";
import network from "../assets/network.png";

const WhatMake = () => {
  return (
    <section
      id="usecase"
      className="px-6 md:px-[100px] py-20 xl:py-24 2xl:py-20 text-white bg-gradient-to-br from-[#5B1D91] via-[#2A0E56] to-[#0D0B3C] text-center"
    >
      {/* Header */}
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl font-bold mb-4">
        What Makes Us Different?
      </h2>
      <p className="text-white max-w-6xl 2xl:max-w-7xl text-lg xl:text-xl 2xl:text-2xl mx-auto mb-6">
        Unlike traditional bots or IVRs that frustrate users, Inalign brings
        life-like intelligence to every interaction.
        <br />
        Our technology is built on <span className="text-2xl">7</span>  <span className="text-[#FE5868] font-bold"> core capabilities:</span>
      </p>

      {/* I.N.A.L.I.G.N. */}
      <h3 className="text-[#FE5868] text-3xl  md:text-2xl 2xl:text-4xl font-bold md:mb-12">
        I.N.A.L.I.G.N.
      </h3>
      
        <div className="relative hidden md:block">
          <img src={line} alt="" />
          {/* Core Icons */}
          <div className="absolute  w-full flex  items-center   top-1/3  transform  space-x-4  -translate-y-1/3">
            <div className="w-1/8 ml-4">
           <img src={brain} alt="robot" className="w-16 h-16 mt-[40px] text-white mx-auto"  />
              <p className="font-medium mt-[20px] text-xl 2xl:text-2xl">Intelligence</p>
             
            </div>
            <div className="w-1/8">
              <p className="font-medium mt-[-50px] text-xl 2xl:text-2xl ">Navigation</p>
              <img src={navigation} alt="robot" className="w-16 h-16 mt-[20px] text-white mx-auto"  />
            
    
            </div>
            <div className="w-1/8">
             <img src={auto} alt="robot" className="w-16 h-16 mt-[40px] text-white mx-auto"  />
              <p className="font-medium mt-[20px] text-xl 2xl:text-2xl">Automation</p>
      
            </div>
            <div className="w-1/8">
             <p className="font-medium mt-[-50px] text-xl  2xl:text-2xl">Language</p>
              <img src={language} alt="robot" className="w-16 h-16  text-white mx-auto mt-[20px]"  />
             
 
            </div>
            <div className="w-1/8">
              <img src={interaction} alt="robot" className="w-16 h-16  text-white mx-auto mt-[40px]"  />
              <p className="font-medium mt-[20px] text-xl 2xl:text-2xl">Interaction</p>
      
            </div>
            <div className="w-1/8">
              <p className="font-medium mt-[-50px] text-xl 2xl:text-2xl">Growth</p>
              <img src={growth} alt="robot" className="w-16 h-16  text-white mx-auto mt-[20px]"  />
            
   
            </div>
            <div className="w-1/8 ">
              <img src={network} alt="robot" className="w-16 h-16  text-white mx-auto mt-[40px] "  />
              <p className="font-medium mt-[20px] text-xl 2xl:text-2xl">Network</p>
       
            </div>
          </div>
        </div>
      

      {/* Sub-description */}
      <p className="text-white max-w-3xl 2xl:max-w-5xl mx-auto mt-6 md:mt-20 text-xl 2xl:text-2xl">
        These aren’t just buzzwords. They are the building blocks of our AI —
        designed to make your conversations smarter, faster, and more
        human than ever before.
      </p>

      {/* Our Mission */}
      <h3 className="text-2xl md:text-3xl xl:text-4xl 2xl:text-5xl font-bold mb-6 mt-10">Our Mission</h3>
      <p className="text-white max-w-2xl 2xl:max-w-5xl mx-auto text-xl 2xl:text-2xl">
        To empower businesses with a voice agent that doesn’t just respond — it
        represents your brand with empathy, clarity, and speed.
      </p>
    </section>
  );
};

export default WhatMake;
