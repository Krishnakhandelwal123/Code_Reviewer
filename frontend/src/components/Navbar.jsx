import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { FiAlertCircle, FiMenu, FiX } from "react-icons/fi";
import { useAuthStore } from '../Store/AuthStore.js';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const logout = useAuthStore((state) => state.logout);

  const handleclick = () => logout();

  useEffect(() => {
    document.body.style.overflow = isOpen || mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, mobileMenuOpen]);

  return (
    <nav className="h-16 sm:h-20 lg:h-24 bg-black flex items-center justify-between px-4 sm:px-6 lg:px-8 relative z-50">
      <div className="flex items-center gap-3 sm:gap-6 lg:gap-9">
        <img className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12" src="/logo.png" alt="Logo" />
        <ul className="hidden lg:flex text-white gap-6 lg:gap-9 text-sm sm:text-base lg:text-[18px]">
          {["Home", "Features", "About", "Contact"].map((item, i) => (
            <li key={i} className="relative group">
              <Link 
                to={`/${item.toLowerCase().replace(" ", "")}`} 
                className="relative z-10 cursor-pointer hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </Link>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-5">
        <button
          onClick={handleclick}
          className="border-2 border-white text-sm lg:text-[18px] px-4 lg:px-6 py-2 rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
        >
          Logout
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-sm lg:text-[18px] relative group cursor-pointer hover:text-gray-300 transition-colors duration-200"
        >
          <span className="relative z-10">Support Us</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-in-out group-hover:w-full"></span>
        </button>
      </div>

      {/* Tablet Buttons */}
      <div className="hidden sm:flex lg:hidden items-center gap-3">
        <button
          onClick={handleclick}
          className="border-2 border-white text-sm px-3 py-1.5 rounded-full text-white hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
        >
          Logout
        </button>
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-sm cursor-pointer hover:text-gray-300 transition-colors duration-200"
        >
          Support Us
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="sm:hidden flex items-center gap-3">
        <button 
          onClick={() => setIsOpen(true)} 
          className="text-white text-lg cursor-pointer hover:text-gray-300 transition-colors duration-200"
        >
          💖
        </button>
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          className="text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors duration-200"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            />
            
            {/* Menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 w-4/5 sm:w-3/4 h-full bg-black text-white z-50 p-6 flex flex-col gap-6 lg:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end">
                <button 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-white text-2xl cursor-pointer hover:text-gray-300 transition-colors duration-200"
                >
                  <FiX />
                </button>
              </div>
              
              {/* Menu items */}
              <div className="flex flex-col gap-6 mt-8">
                {["Home", "Features", "About Us", "Contact Us"].map((item, i) => (
                  <Link
                    key={i}
                    to={`/${item.toLowerCase().replace(" ", "")}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xl cursor-pointer hover:text-gray-300 transition-colors duration-200 border-b border-gray-800 pb-2"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              
              {/* Mobile buttons */}
              <div className="flex flex-col gap-4 mt-auto">
                <button
                  onClick={() => {
                    handleclick();
                    setMobileMenuOpen(false);
                  }}
                  className="border-2 border-white text-white text-lg py-3 rounded-full hover:bg-white hover:text-black transition-all duration-200 cursor-pointer"
                >
                  Logout
                </button>
                <button
                  onClick={() => {
                    setIsOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  className="text-white text-lg cursor-pointer hover:text-gray-300 transition-colors duration-200"
                >
                  Support Us
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Modal */}
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
};

export default Navbar;

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="bg-slate-900/20 backdrop-blur p-4 sm:p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll cursor-pointer"
        >
          <motion.div
            initial={{ scale: 0, rotate: "12.5deg" }}
            animate={{ scale: 1, rotate: "0deg" }}
            exit={{ scale: 0, rotate: "0deg" }}
            onClick={(e) => e.stopPropagation()}
            className="bg-gradient-to-br from-gray-600 to-indigo-800 text-white p-4 sm:p-6 rounded-lg w-full max-w-sm sm:max-w-lg shadow-xl cursor-default relative overflow-hidden"
          >
            <FiAlertCircle className="text-white/10 rotate-12 text-[150px] sm:text-[250px] absolute z-0 -top-12 sm:-top-24 -left-12 sm:-left-24" />
            <div className="relative z-10">
              <div className="bg-white w-12 h-12 sm:w-16 sm:h-16 mb-2 rounded-full text-2xl sm:text-3xl text-indigo-600 grid place-items-center mx-auto">
                <FiAlertCircle />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-center mb-2">
                One more thing!
              </h3>
              <p className="text-center mb-6 text-sm sm:text-base">
                Why do programmers prefer dark mode?
                Because light attracts bugs. 😄
              </p>
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-transparent hover:bg-white/10 transition-colors text-white font-semibold w-full py-2 rounded cursor-pointer"
                >
                  Nah, go back
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="bg-white hover:opacity-90 transition-opacity text-indigo-600 font-semibold w-full py-2 rounded cursor-pointer"
                >
                  Understood!
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
