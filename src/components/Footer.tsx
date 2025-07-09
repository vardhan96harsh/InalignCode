import { Link } from "react-scroll";

import ft from "../assets/fobg.svg";
import lg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="w-full text-white relative overflow-hidden py-2 px-6 sm:px-10 md:px-14 lg:px-[80px] xl:px-[112px]">
    
      <div className="absolute hidden md:block top-0 left-0 w-full mt-10">
        <img src={ft} alt="Footer Wave" className="w-full object-cover opacity-50" />
      </div>


      <div className="relative z-10 mx-auto flex flex-col md:flex-row  gap-10 xl:gap-[360px] items-center">
       
        <div className="w-1/3">
          <h4 className="font-semibold text-lg 2xl:text-2xl mb-4">Company</h4>
          <ul className="space-y-2 text-sm 2xl:text-lg text-white">
            <li>
              <Link to="home" smooth={true} duration={500} className="cursor-pointer">
                Home
              </Link>
            </li>
            <li>
              <Link to="about" smooth={true} duration={500} className="cursor-pointer">
                About Us
              </Link>
            </li>
            <li>
              <Link to="bookdemo" smooth={true} duration={500} className="cursor-pointer">
                Book a Demo
              </Link>
            </li>
          </ul>
        </div>

       
        <div className="w-1/3">
          <h4 className="font-semibold text-lg 2xl:text-2xl mb-4">Info</h4>
          <ul className="space-y-2 text-sm 2xl:text-lg text-white">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 3 - Tools */}
        <div className="w-1/3">
          <h4 className="font-semibold text-lg 2xl:text-2xl mb-4">Tools</h4>
          <ul className="space-y-2 text-sm 2xl:text-lg text-white">
            <li><a href="#">AI Human Call</a></li>
            <li>
              <a href="mailto:amitg@inalign.ai" className="cursor-pointer hover:underline">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      
      <div className="my-8 border-t border-white w-full max-w-8xl mx-auto z-50"></div>

      
      <div className="relative flex flex-col md:flex-row  justify-between items-center max-w-6xl 2xl:max-w-7xl mx-auto text-sm text-white gap-4 z-10 text-center md:text-left">
     
        <div className="flex items-center gap-2">
          <img src={lg} className="w-7 2xl:w-10" alt="Inalign Logo" />
          <span className="font-semibold text-[#FE5868] text-lg 2xl:text-2xl">Inalign</span>
        </div>

       
        <div className="2xl:text-lg">
          © 2025 Inalign. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
