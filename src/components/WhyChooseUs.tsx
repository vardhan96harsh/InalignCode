
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";


const WhyChooseUs = () => {
  return (
    <section className="py-20 2xl:py-40 px-6 bg-gradient-to-br from-[#5B1D91] via-[#2A0E56] to-[#0D0B3C] text-white text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl 2xl:text-5xl   font-bold mb-10">
        Why Choose <span className="text-[#FE5868]">Inalign?</span>
      </h2>

      {/* Comparison Table Container */}
      <div className="max-w-4xl 2xl:max-w-7xl mx-auto bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden border border-[#58a6ff] ">
        <table className="w-full text-left text-sm md:text-base 2xl:text-2xl">
          <thead>
            <tr className="bg-white/5 ">
              <th className="px-6 py-4 font-semibold">Feature</th>
              <th className="px-6 py-4 font-semibold ">Inalign</th>
              <th className="px-6 py-4 font-semibold ">Traditional Call Center</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            <tr>
              <td className="px-6 py-4">24/7 Availability</td>
              <td className=" px-10   "><FaCheck /></td>
              <td className=" px-20 "><ImCross /></td>
            </tr>
            <tr>
              <td className="px-6 py-4">Handles 1000+ calls at once</td>
              <td className="px-10 "><FaCheck /></td>
              <td className="px-20 "><ImCross /></td>
            </tr>
            <tr>
              <td className="px-6 py-4 ">Cost per conversation</td>
              <td className="px-10   font-semibold">$ Low</td>
              <td className="px-20 ">$ $ High</td>
            </tr>
            <tr>
              <td className="px-6 py-4 ">Improves over time</td>
              <td className=" px-10  "><FaCheck /></td>
              <td className="px-20  "><ImCross />
</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WhyChooseUs;
