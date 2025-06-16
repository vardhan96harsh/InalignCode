import w1 from "../assets/w1.svg";
import w2 from "../assets/w2.svg";
import w3 from "../assets/w3.svg";
import w4 from "../assets/w4.svg";

const WhyInalign = () => {
  return (
    <section
      id="usecase"
      className="px-6 sm:px-10 md:px-14 lg:px-20 2xl:px-[100px] py-16 md:py-24 2xl:py-44 text-white text-center"
    >
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-[55px] font-semibold mb-12 md:mb-20 2xl:mb-40">
        Why <span className="text-[#FE5868] font-bold">Inalign</span> Is Smarter Than a Human Agent
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[13px] border-white/20 lg:border-r last:border-r-0">
          <img src={w1} alt="" className="w-20 h-20 2xl:w-36 2xl:h-36 mb-4 2xl:mb-6" />
          <h3 className="text-xl 2xl:text-3xl font-bold mb-2">It Remembers <br /> Everything</h3>
          <p className="text-sm 2xl:text-xl text-white">
            Remembers all past conversations, customer preferences, and history.
          </p>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[13px] border-white/20 lg:border-r last:border-r-0">
          <img src={w2} alt="" className="w-20 h-20 xl:w-20 xl:h-20 2xl:w-36 2xl:h-36 mb-4 2xl:mb-6" />
          <h3 className="text-xl 2xl:text-3xl font-bold mb-2">It Responds <br /> Instantly</h3>
          <p className="text-sm 2xl:text-xl text-white">
            Handles 1 or 10,000 calls at once – with zero wait time. No hold music. No call drops.
          </p>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[13px] border-white/20 lg:border-r last:border-r-0">
          <img src={w3} alt="" className="w-20 h-20 2xl:w-32 2xl:h-32 mb-4 2xl:mb-6" />
          <h3 className="text-xl 2xl:text-3xl font-bold mb-2">It Gets Smarter <br /> Every Day</h3>
          <p className="text-sm 2xl:text-xl text-white">
            Learns from each conversation. Improves automatically. Better today than yesterday.
          </p>
        </div>

        {/* Card 4 */}
        <div className="flex flex-col items-center px-4 sm:px-6 md:px-8 lg:px-[13px]">
          <img src={w4} alt="" className="w-20 h-20 2xl:w-32 2xl:h-32 mb-4 2xl:mb-6" />
          <h3 className="text-xl 2xl:text-3xl font-bold mb-2">It Speaks<br /> Their Language</h3>
          <p className="text-sm 2xl:text-xl text-white">
           Switches languages on the fly — no lag, no confusion. Be local, even at global scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyInalign;
