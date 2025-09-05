import { Link } from "react-scroll";
import logo from "../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "how", label: "How it Works" },
    // { id: "pricing", label: "Pricing" },
    { id: "bookdemo", label: "Book Demo" },
    // { id: "contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0  w-full z-50 bg-transparent px-6 md:px-20 2xl:px-20 py-4 flex items-center gap-[150px] md:gap-[100px] lg:gap-[240px] xl:gap-[498px] 2xl:gap-[570px] text-white backdrop-blur-md max-w-[1900] mx-auto">
      {/* Logo */}
  <Link to="home" smooth={true} duration={500} className="cursor-pointer">   <div className="flex items-center space-x-4 ml-6">
        <img
          src={logo}
          alt="Logo"
          className="h-12 sm:h-14 md:h-12 lg:h-10 xl:h-12  2xl:h-16 w-auto"
        />
        <span className="text-[#FE5868] text-3xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-4xl font-semibold">
          Inalign
        </span>
      </div></Link> 

      {/* Hamburger Button - Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 8h16M4 16h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 mr-2  text-[16px] 2xl:text-[24px] tracking-wide">
        {menuItems.map((item) => (
          <li key={item.id}>
            <Link
              to={item.id}
              smooth={true}
              duration={500}
              className="cursor-pointer capitalize hover:text-[#FE5868] transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="absolute top-18 left-0 w-full  bg-opacity-95 flex flex-col items-center space-y-4 py-6 md:hidden text-white bg-[#FE5868] text-base font-medium">
          {menuItems.map((item) => (
            <li key={item.id}>
              <Link
                to={item.id}
                smooth={true}
                duration={500}
                onClick={() => setIsOpen(false)} // Close on click
                className="cursor-pointer capitalize hover:text-purple-300 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
