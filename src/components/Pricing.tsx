import { useState } from "react";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";


const plans = [
  {
    name: "Free Plan",
    price: "$00",
    PiWheelchairMotionThin: "",
    oldPrice: null,
    features: [
      { text: "Access to core HR features", included: true },
      { text: "Employee record management", included: true },
      { text: "Basic reporting tools", included: true },
      { text: "Manage up to 10 team members", included: true },

    ],
    button: "Cancel",
    buttonStyle: "border border-white text-white hover:bg-white hover:text-purple-800",
  },
  {
    name: "Standard Plan",
    price: "$22",
    oldPrice: "$26",
    yearly: "$228 billed yearly",
    features: [
      { text: "Access to core HR features", included: true },
      { text: "Employee record management", included: true },
      { text: "Basic reporting tools", included: true },
      { text: "Manage up to 10 team members", included: true },
 
    ],
    button: "Start 7-day Free Trial",
    buttonStyle: "bg-white text-purple-900 hover:bg-gray-100 font-semibold",
  },
  {
    name: "Enterprise Plan",
    price: "$34",
    yearly: "$408 billed yearly",
    oldPrice: null,
    features: [
      { text: "Access to core HR features", included: true },
      { text: "Employee record management", included: true },
      { text: "Basic reporting tools", included: true },
      { text: "Manage up to 10 team members", included: true },
     
    ],
    button: "Start 7-day Free Trial",
    buttonStyle: "border border-white text-white hover:bg-white hover:text-purple-800",
  },
];

const Pricing = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section
      id="pricing"
      className="px-4 md:px-[85px] 2xl:px-[120px] py-10 2xl:py-20 bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 text-white"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl 2xl:text-6xl font-bold mb-2">Pricing</h2>
        <p className="text-lg 2xl:text-2xl  text-gray-300 max-w-2xl mx-auto">
          Choose a plan that suits your business — flexible pricing for startups, enterprises, and everything in between.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-[35px] 2xl:px-40 items-stretch">
        {plans.map((plan, i) => (
          <div
            key={i}
            onClick={() => setSelectedIndex(i)}
            className={`cursor-pointer flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 shadow-xl 
              ${selectedIndex === i ? "scale-105 border-4 border-yellow-400" : "border border-white border-opacity-10"}
              h-[500px] sm:h-[550px] md:h-[350px] lg:h-[400px] xl:h-[450px] 2xl:h-[580px]
            `}
            style={{
              background: `linear-gradient(to bottom, rgba(125, 36, 207, 0.9), rgba(59, 17, 145, 0.95), rgba(0, 0, 90, 1))`,
            }}
          >
            <div>
              <h3 className="text-xl 2xl:text-3xl font-bold mb-1">{plan.name}</h3>
              {plan.oldPrice && (
                <p className="text-lg 2xl:text-2xl line-through opacity-50">{plan.oldPrice}</p>
              )}
              <p className="text-4xl 2xl:text-5xl font-bold text-yellow-400 mt-1">
                {plan.price}
                <span className="text-base 2xl:text-lg text-white font-normal"> /month</span>
              </p>
              <p className="text-sm 2xl:text-lg text-gray-300 mb-6">{plan.yearly}</p>

              <ul className="space-y-3 text-sm 2xl:text-lg mb-6 2xl:mb-10">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {f.included ? (
                      <FaCheckCircle className="text-green-400" />
                    ) : (
                      <FaTimesCircle className="text-pink-500" />
                    )}
                    <span>{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              className={`w-full py-2  rounded-lg transition-all ${plan.buttonStyle}`}
            >
              {plan.button}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
