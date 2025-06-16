// import germanImg from "../assets/ger.png";
// import chineseImg from "../assets/chain.png";
// import m from "../assets/m.jpg"; // small user photo
// import ud from "../assets/ud.png";
// import du from "../assets/du.png";
// import { Link } from "react-scroll";


// const AiVoice = () => {
//     return (
//         <section id="usecase" className="px-[10px]  xl:px-[100px] py-20 2xl:py-44 text-white bg-transparent ">
//       <div className=" flex flex-col md:flex-row gap-10 2xl:gap-16 items-center px-[10px]">
//         {/* Left Side: Image Block */}
//         <div className="relative w-[400px] h-[300px] xl:w-[500px] xl:h-[400px] 2xl:w-[600px] 2xl:h-[550px] rounded-[30px] bg-gradient-to-br from-[#30175b] via-[#4c1d95] to-[#1e1b4b] p-4 2xl:p-6 shadow-2xl border border-[#ffffff20]">
//           {/* German Speaker */}
//           <div className="absolute top-10 left-12 2xl:left-16  items-center gap-2">
//             <img
//               src={germanImg}
//               alt="German Language"
//               className="w-32 h-32 2xl:w-40 2xl:h-40 rounded-full ml-4 2xl:ml-6 object-cover  border-purple-300"
//             />
            
//             <div className="flex flex-col mt-4">
//               <div className=" items-center gap-2">
                
//                 <span className="text-xl 2xl:text-2xl text-white">
//                   German  Language
//                 </span>
//                  <div className="w-12 h-12 ml-12 mt-4 2xl:mt-6 2xl:ml-16 rounded-full bg-white flex items-center justify-center text-purple-600 text-2xl font-bold">
//                   ▶
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Chinese Speaker */}
//           <div className="absolute bottom-10 2xl:bottom-24 right-5  2xl:right-10 items-center gap-2">
//             <img
//               src={chineseImg}
//               alt="Chinese Language"
//               className="w-32 h-32 2xl:w-40 2xl:h-40 rounded-full ml-5 object-cover  border-purple-300"
//             />
//             <div className="flex mt-4 flex-col">
//               <div className="items-center gap-2">
                
//                 <span className="text-xl 2xl:text-2xl text-white">
//                   Chinese  Language
//                 </span>
//                 <div className="w-12 h-12 ml-14 2xl:ml-18 rounded-full mt-4 bg-white flex items-center justify-center text-purple-600 text-2xl font-bold">
//                   ▶
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* First Arrow: Top-right to bottom-left */}
//           <img
//             src={ud}
//             alt="Arrow"
//             className="absolute top-72 2xl:top-86 right-[170px] 2xl:right-[240px] w-36 h-24 2xl:w-52 2xl:h-28"
//           ></img>

//           {/* Second Arrow: Bottom-left to top-right */}
//           <img
//             src={du}
//             alt="Arrow"
//             className=" absolute top-[30px] left-[200px] 2xl:left-[250px] w-36 h-20 2xl:w-52 2xl:h-24"
//           ></img>
//         </div>

//         {/* Right Side: Text Content */}
//         <div className="max-w-xl 2xl:max-w-4xl px-[10px] z-10">
//           <h2 className="text-3xl md:text-4xl 2xl:text-[60px] font-bold mb-4">
//             AI Voice Translation for Global Storytelling
//           </h2>
//           <p className="text-white mb-4 2xl:text-2xl">
//             Resemble’s AI Voice Generator goes beyond traditional
//             voiceovers—bringing your content to life with natural-sounding
//             voices that speak every language like a local.
//           </p>
//           <p className="text-white mb-6 2xl:text-2xl">
//             Whether you need a voice that simply sounds good, or one that
//             resonates across cultures, we offer diverse, multilingual voice
//             talents—all available remotely.
//           </p>

//           <Link
//   to="bookdemo"
//   smooth={true}
//   duration={500}
//   className="bg-white text-purple-700 px-5 py-3 rounded-full font-medium hover:bg-purple-100 transition mb-4 cursor-pointer inline-block"
// >
//   Request a demo →
// </Link>


//           <div className="flex items-center gap-3 mt-2">
//             <img
//               src={m}
//               alt="user"
//               className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full object-cover"
//             />
//             <div>
//               <span className="text-[#FE5868] font-bold text-xl 2xl:text-2xl">10K</span>
//               <p className="text-sm 2xl:text-xl">people are using already!</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     )
    
// }

// export default AiVoice