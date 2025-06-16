import WaveDivider from "./WaveDivider";

import h1i from "../assets/hbg.jpg";
import wav from "../assets/wav.svg";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

// type MessagePart = { text: string; className?: string };
// type FullMessage = MessagePart[];

// const messages: FullMessage[] = [
//   // [
//   //   { text: "Hi, I'm", className: "text-white font-medium" },
//   //   { text: " Inalign.", className: "text-[#FE5868] font-bold" },
//   //   { text: " Want me to close your next 1,000 leads while you sleep?" },
//   // ],
//   [
//     { text: "Inalign", className: "text-[#FE5868] font-bold" },
//     { text: " is not just another chatbot." },
//   ],
//   [
//     { text: "It speaks. ", className: "text-[#FE5868] font-bold" },
//     { text: "It thinks. " },
//     { text: "It remembers.", className: "text-white font-medium" },
//   ],
//   [
//     { text: "It handles your ", className: "text-white" },
//     { text: "customer calls", className: "text-[#FE5868] font-bold" },
//     { text: ", converts leads, and never misses an opportunity." },
//   ],
// ];

// const TypingText = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);
//   const [displayedParts, setDisplayedParts] = useState<MessagePart[]>([]);
//   const [isDeleting, setIsDeleting] = useState(false);
//   const [pauseBeforeDelete, setPauseBeforeDelete] = useState(false);

//   const currentMessage = messages[currentIndex];
//   const flatMessage = currentMessage.map((part) => part.text).join("");

//   useEffect(() => {
//     if (pauseBeforeDelete) return;

//     const timeout = setTimeout(() => {
//       if (!isDeleting) {
//         if (charIndex < flatMessage.length) {
//           setCharIndex((prev) => prev + 1);
//         } else {
//           setPauseBeforeDelete(true);
//           setTimeout(() => {
//             setPauseBeforeDelete(false);
//             setIsDeleting(true);
//           }, 1000);
//         }
//       } else {
//         if (charIndex > 0) {
//           setCharIndex((prev) => prev - 1);
//         } else {
//           setIsDeleting(false);
//           setCurrentIndex((prev) => (prev + 1) % messages.length);
//         }
//       }
//     }, isDeleting ? 15 : 80);

//     return () => clearTimeout(timeout);
//   }, [charIndex, isDeleting, currentIndex, pauseBeforeDelete]);

//   useEffect(() => {
//     let accumulatedLength = 0;
//     const updatedParts: MessagePart[] = [];

//     for (const part of currentMessage) {
//       const partText = part.text;
//       if (charIndex <= accumulatedLength + partText.length) {
//         const visibleText = partText.slice(
//           0,
//           Math.max(0, charIndex - accumulatedLength)
//         );
//         if (visibleText) {
//           updatedParts.push({ text: visibleText, className: part.className });
//         }
//         break;
//       } else {
//         updatedParts.push({ text: partText, className: part.className });
//         accumulatedLength += partText.length;
//       }
//     }

//     setDisplayedParts(updatedParts);
//   }, [charIndex, currentIndex]);

//   return (
//     <p className="text-lg md:text-xl min-h-[60px] transition-all duration-300">
//       {displayedParts.map((part, i) => (
//         <span key={i} className={part.className}>
//           {part.text}
//         </span>
//       ))}
//       <span className="animate-pulse">|</span>
//     </p>
//   );
// };

const Home = () => {
  return (
    <section id="home" className="min-h-[100dvh] w-full py-8 ">
      <div className="inset-0 bg-opacity-20" />

      <div className="flex flex-col md:flex-row items-center w-full px-14 py-20 md:py-0 2xl:py-20 md:px-10 lg:px-[100px] xl:px-[102px] 2xl:px-[101px]">
        {/* Left Content with motion */}
        <motion.div
          className="text-white md:w-1/2 md:space-y-8 space-y-2 z-20 md:mt-16"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h1 className="text-2xl md:text-[32px] lg:text-[34px] xl:text-[45px] 2xl:text-7xl leading-tight font-medium">
            Your Smartest AI Agent <br />
            Sounds <span className="text-[#FE5868] font-bold">
              100% Human
            </span>, <br />
            Works 10x Faster.
          </h1>
          {/* <TypingText /> */}

          <h3 className="lg:text-lg xl:text-xl 2xl:text-2xl w-full md:w-full">
            <span className="text-[#FE5868] text-2xl  font-bold">Inalign </span>
            converts leads, answers customer calls, and delivers natural voice
            conversations 24/7 — all without a human agent.
          </h3>
          <div className="flex gap-4 2xl:gap-6">
            <a
              href="#"
              className="  border border-white text-white 2xl:text-2xl px-6  py-2 rounded hover:bg-white hover:text-purple-700 transition"
            >
              Learn More
            </a>
            <Link
              to="bookdemo"
              smooth={true}
              duration={500}
              className="bg-white text-purple-800 font-semibold 2xl:text-2xl px-6 py-2 rounded hover:bg-gray-100 transition cursor-pointer"
            >
              Book Demo
            </Link>
          </div>
        </motion.div>

        {/* Right Card with motion */}
        <motion.div
          className=" relative ml-0 xl:ml-20  2xl:ml-28 mt-17 md:w-1/2 z-10 flex  md:justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
        >
          <div className="w-fit">
            <div className="relative w-fit ml-[-50px] md:ml-0">
              <div className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-purple-800 via-pink-700 to-indigo-600 -z-10 shadow-[0_0_30px_1px_#FE5868]"></div>
              <img
                src={h1i}
                alt="3D Model"
                className="h-80 xl:h-96 2xl:h-[550px] object-contain rounded-[30px] border border-white border-opacity-10 shadow-inner"
              />
            </div>

            <div className="absolute top-2 right-[-50px]  lg:top-5 md:top-3 md:right-3 lg:right-6 xl:top-4  xl:right-4 2xl:top-8 2xl:right-20 bg-white/10 backdrop-blur-md rounded-xl px-4 2xl:px-7 py-3 2xl:py-4 shadow-md flex items-center gap-3">
              <div className="bg-white text-purple-600 rounded-full w-8 h-8 2xl:w-12 2xl:h-12 flex items-center justify-center">
                <svg
                  className="w-4 h-4 2xl:w-8 2xl:h-8"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 4l10 6-10 6V4z" />
                </svg>
              </div>
              <div className="text-white text-xs 2xl:text-xl">
                <p className="mb-1">Listen Demo!</p>
                <p className="text-sm font-semiboldv 2xl:text-2xl">3:16 min</p>
              </div>
            </div>

            <div className="absolute top-20 md:top-20 2xl:top-[140px] right-[-50px] md:right-6 2xl:right-[90px]">
              <img src={wav} alt="Wave" className="h-8 2xl:h-12" />
            </div>

            <div className="absolute bottom-2 right-[-40px] lg:bottom-3  md:bottom-2 xl:bottom-4 2xl:bottom-5 xl:right-4 2xl:right-20 bg-white/10 backdrop-blur-md rounded-2xl p-2 xl:p-4  text-white w-[200px] lg:w-[190px] xl:w-[280px] 2xl:w-[320px] shadow-md">
              <h3 className="lg:text-sm xl:text-xl 2xl:text-2xl font-bold mb-1">
                20x
              </h3>
              <p className="text-xs xl:text-sm 2xl:text-lg font-semibold">
                Boost Efficiency and Productivity
              </p>
              <p className="text-[10px] xl:text-xs 2xl:text-md mt-1">
                Work Smarter with Voice AI <br />
                Automate tasks, save time, and get more done – effortlessly.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-[-100px] 2xl:bottom-[-50px] left-0 w-full z-1">
        <WaveDivider />
      </div>
    </section>
  );
};

export default Home;
