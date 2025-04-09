import { Link } from "react-router-dom";
import logo from "../assets/logo2.png";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
const NavBar = () => {
  const navOptions = ["Home", "About us", "Events", "Contact us"];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const removeMenu = () => {
    toggleMenu();
  };

  return (
    <div className="h-20 sticky top-0 left-0 z-[100] flex items-center justify-between glass py-4 px-5">
      <img src={logo} alt="Logo" className="w-[12rem] object-cover" />
      <div className="hidden lg:flex items-center gap-20">
        <div className="flex items-center gap-10">
          {navOptions.map((item, i) => (
            <p key={i}>{item}</p>
          ))}
        </div>
        <div className="text-[14px] bg-primary text-white w-fit py-2 px-4 rounded-md">
          Donate Now
        </div>
      </div>
      <div className="relative block lg:hidden">
        {/* Burger Button */}
        <button
          onClick={toggleMenu}
          className={`p-2 text-black rounded focus:outline-none`}
        >
          {/* Burger Icon */}
          <CiMenuFries />
        </button>

        {/* Dropdown Menu */}
        <div
          className={`absolute translate-y-1 -right-5 top-[44px] w-40 bg-white text-gray-800 rounded-bl-md shadow-lg overflow-hidden z-20 ${
            isOpen ? "" : "hidden"
          }`}
        >
          {navOptions.map((text, i) => (
            <Link
              to={`#${text}`}
              key={i}
              onClick={i === 4 ? removeMenu : toggleMenu}
              className={`transition duration-500 flex justify-between items-center w-full px-4 py-2 hover:bg-gray-200`}
            >
              <div className="w-full z-10">{text}</div>
            </Link>
          ))}
          <div className="text-[14px] text-center bg-primary cursor-pointer text-white w-full rounded-tl-md py-2 px-4">
            Donate Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
