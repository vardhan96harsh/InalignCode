
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import three from "../assets/3.svg";
import four from "../assets/4.svg";
import five from "../assets/5.svg";
import oneo from "../assets/one1.svg";
import twoo from "../assets/two2.svg";
import threeo from "../assets/three3.svg";
import fouro from "../assets/four4.svg";
import fiveo from "../assets/five5.svg";

const HowItWorks = () => {
  return (
    <section
      id="how"
      className="min-h-[100dvh] px-6 md:px-10 lg:px-20 xl 2xl:px-[110px] py-12 md:py-20 2xl:py-44 bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white flex items-center justify-center"
    >
      <div className="w-full text-center">
        <h2 className="text-2xl md:text-4xl xl:text-4xl 2xl:text-6xl font-bold mb-4">
          How <span className="text-[#FE5868]">Inalign</span> Works
        </h2>
        <p className="text-sm md:text-lg xl:text-xl 2xl:text-2xl text-white max-w-3xl 2xl:max-w-5xl mx-auto mb-20">
          Inalign is designed to seamlessly integrate AI-driven voice
          interactions into your business operations. Here's how:
        </p>

        <div className=" gap-20 md:gap-16 xl:gap-20 2xl:gap-40 flex flex-col md:flex-row mb-20 w-[200px] md:w-[650px] xl:w-[960px] 2xl:w-[1300px] mx-auto">
          {/* Step 1 */}
          <div className="bg-white/5 flex backdrop-blur-md p-4 md:p-4 xl:p-5 rounded-xl border border-white/10 relative">
            <img
              src={one}
              className=" h-20 w-20 md:h-20 md:w-20  xl:h-32 xl:w-32 absolute bottom-[-10px] md:bottom-[-10px] xl:bottom-[-15px] left-[-60px] xl:left-[-80px]"
            ></img>
            <div className="text-left">
              <h3 className="text-lg md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                Define Your Objectives
              </h3>
              <p className="text-sm md:text-sm xl:text-base 2xl:text-lg text-white">
                Identify the specific use cases: be it customer support, lead
                qualification, appointment scheduling, or feedback collection.
              </p>
            </div>

            <img
              src={oneo}
              className="h-32 w-32 xl:h-40 xl:w-40 absolute top-[-90px] right-[-80px] md:top-[-70px] md:right-[-60px] xl:top-[-90px] xl:right-[-80px]"
            ></img>
          </div>

          {/* Step 2 */}
          <div className="bg-white/5 flex backdrop-blur-md p-5 rounded-xl border border-white/10 relative">
            <img
              src={two}
              className="h-24 w-24 md:h-20 md:w-20 xl:h-32 xl:w-32 absolute bottom-[-10px] left-[-60px] xl:bottom-[-15px]  xl:left-[-80px]"
            ></img>
            <div className="text-left">
              <h3 className="text-lg md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                Design Conversational Flows
              </h3>
              <p className="text-sm md:text-sm xl:text-base 2xl:text-lg text-white">
                Collaborate with our team to craft natural, multilingual
                dialogues tailored to your audience, ensuring context-aware and
                human-like interactions.
              </p>
            </div>

            <img
              src={twoo}
              className="h-32 w-32   xl:h-40 xl:w-40 absolute top-[-90px] right-[-80px] md:top-[-70px] md:right-[-60px] xl:top-[-90px] xl:right-[-80px]"
            ></img>
          </div>

          {/* Step 3 */}
          <div className="bg-white/5 flex backdrop-blur-md p-6 rounded-xl border border-white/10 relative">
            <img
              src={three}
              className="h-24 w-24 md:h-20 md:w-20  xl:h-32 xl:w-32 absolute bottom-[-10px] xl:bottom-[-15px] left-[-60px] xl:left-[-80px]"
            ></img>
            <div className="text-left">
              <h3 className="text-lg   md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                Integrate with Existing Systems
              </h3>
              <p className="text-sm md:text-sm xl:text-base 2xl:text-lg text-white">
                Connect Inalign to your CRM, ticketing systems, or other
                platforms to enable real-time data exchange and workflow
                automation.
              </p>
            </div>

            <img
              src={threeo}
              className="h-32 w-32 xl:h-40 xl:w-40 absolute  top-[-90px] right-[-80px] md:top-[-70px] md:right-[-60px] xl:top-[-90px] xl:right-[-80px]"
            ></img>
          </div>

          {/* Step 4 */}
        </div>
        <div className="gap-20 xl:gap-36 flex flex-col md:flex-row w-[200px] md:w-[450px]  xl:w-[800px] 2xl:w-[800px] mx-auto">
          <div className="bg-white/5 flex backdrop-blur-md p-8 rounded-xl border border-white/10 relative">
            <img
              src={four}
              className="h-24 w-24  xl:h-32 xl:w-32 absolute bottom-[-10px] xl:bottom-[-15px] left-[-60px] xl:left-[-80px]"
            ></img>
            <div className="text-left">
              <h3 className="text-lg md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                Deploy at Scale
              </h3>
              <p className="text-sm md:text-sm  xl:text-lg text-white">
                Once tested, launch Inalign to handle high volumes of voice
                interactions, ensuring consistent performance and reliability.
              </p>
            </div>

            <img
              src={fouro}
              className="h-32 w-32 xl:h-40 xl:w-40 absolute  top-[-90px] right-[-80px] md:top-[-70px] md:right-[-60px] xl:top-[-90px] xl:right-[-80px]"
            ></img>
          </div>
          {/* Step 5 */}
          <div className="bg-white/5 flex backdrop-blur-md p-8 rounded-xl border border-white/10 relative">
            <img
              src={five}
              className=" h-24 w-24  xl:h-32 xl:w-32 absolute bottom-[-10px] xl:bottom-[-15px] left-[-60px] xl:left-[-80px]"
            ></img>
            <div className="text-left">
              <h3 className="text-lg md:text-lg xl:text-xl 2xl:text-2xl font-bold mb-2">
                Monitor and Optimize
              </h3>
              <p className="text-sm md:text-sm xl:text-base 2xl:text-lg text-white">
                Utilize built-in analytics to track performance metrics, gather
                insights, and continuously refine the voice agent for improved
                outcomes.
              </p>
            </div>

            <img
              src={fiveo}
              className="h-32 w-32 xl:h-40 xl:w-40 absolute  top-[-90px] right-[-80px] md:top-[-70px] md:right-[-60px] xl:top-[-90px] xl:right-[-80px]"
            ></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
