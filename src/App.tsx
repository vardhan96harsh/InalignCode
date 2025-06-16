import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import HowItWorks from "./components/HowItWorks";
// import Pricing from "./components/Pricing";
// import Contact from "./components/Contact";
import BookDemo from "./components/BookDemo";
// import WaveDivider from "./components/WaveDivider";
// import UseCase from "./components/UseCase";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";
// import Aivoice from "./components/AiVoice";
import WhyInAlign from "./components/WhyInalign";
import Divider from "./components/WaveDivider2";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatMake from "./components/WhatMake";

function App() {
  return (
    <div className="bg-gradient-to-br from-purple-800 via-purple-900 to-indigo-900 min-h-screen text-white scroll-smooth max-w-[1900px] mx-auto">
      <Navbar />
      <Home />

      <AboutUs />
      <div className="relative bg-gradient-to-br from-[#080870] via-[#2A0E56] to-[#712bd3] overflow-visible">
        {/* Section 1 */}
        <div className="relative z-20">
          <WhyInAlign />
          <WhyChooseUs/>

          {/* Wave Divider that overlaps into Aivoice */}
          <div className="absolute top-30 left-0 w-full z-[-1] ">
            <Divider />
          </div>
        </div>

        {/* Section 2 */}
        {/* <div className="relative z-20 pt-[60px]"> */}
          {/* Add top padding to compensate for the negative offset */}
          {/* <Aivoice /> */}
        {/* </div> */}
      </div>
      <WhatMake/>

      <HowItWorks />
{/* <Pricing /> */}
      <Testimonials />
      <BookDemo /> 
      
      {/* <Pricing />
      <Testimonials />
      <BookDemo /> */}
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
