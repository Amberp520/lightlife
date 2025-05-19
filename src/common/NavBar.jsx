import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CiMenuFries, 
  // CiClose 
} from "react-icons/ci";
import { useState } from "react";
import logo from "../assets/logo2.png";

export default function NavBar() {
  const navOptions = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/about" },
    { title: "Events", link: "/events" },
    { title: "Contact us", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-md shadow-md sticky z-[999] w-full top-0 left-0 flex justify-between items-center px-7 py-5"
      >
        <Link className="overflow-x-hidden" to="/">
          <img
            className="relative -left-9 h-[50px] w-[150px] object-cover"
            src={logo}
            alt="Logo"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10 justify-between">
          {navOptions.map((option, index) => (
            <Link
              to={option.link}
              key={index}
              className="text-[15px] hover:text-primary transition-colors"
            >
              {option.title}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="p-2 text-black">
            {isOpen ? (
              <CiMenuFries className="w-6 h-6" />
            ) : (
              <CiMenuFries className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Desktop Donate Button */}
        <div className="hidden lg:flex text-[15px] font-semibold items-center gap-5 justify-between">
          <Link
            to="/donate"
            className="py-2 px-4 rounded-sm bg-primary text-white hover:bg-primary-dark transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            className="flex flex-col gap-5 lg:hidden fixed px-10 h-screen w-full bg-white shadow-lg z-[200] top-[0] pt-[106px] left-0"
          >
            {navOptions.map((item, i) => (
              <Link
                to={item.link}
                key={i}
                onClick={toggleMenu}
                className="text-[16px] text-gray-800 hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
            <div className="flex flex-col w-full gap-3 mt-5">
              <Link
                onClick={toggleMenu}
                to="/donate"
                className="py-2 w-full flex justify-center bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}