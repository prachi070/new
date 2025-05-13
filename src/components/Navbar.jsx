import React, { useState } from "react";
import { FaRegBell } from "react-icons/fa";
import logo from "../assets/logo.png";
import plogo from "../assets/plogo.png";
import profile from "../assets/profile.png";
import anotherprofile from "../assets/anotherprofile.png";

const Navbar = () => {
  // State for toggling the hamburger menu
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-white shadow-md px-4 sm:px-6 py-3">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        {/* Left Side: Hamburger Icon (Visible only on small screens) */}
        <div className="sm:hidden flex items-center w-full justify-between">
          {/* Hamburger Icon */}
          <button onClick={toggleMenu} className="text-gray-600 hover:text-black">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Center Section: Logo and Links (Visible only on larger screens) */}
        <div className="flex items-center space-x-1 sm:space-x-4 sm:flex sm:flex-row sm:mb-0 w-full sm:w-auto hidden sm:flex">
          <div className="flex items-center space-x-1">
            <img src={logo} alt="Logo" className="h-8 w-auto" />
            <span className="text-gray-800 font-bold text-xl">Qiro</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={plogo} alt="Logo" className="h-3 w-auto" />
            <span className="text-gray-800 font-bold text-sm">Pools</span>
          </div>
          <div className="flex items-center space-x-1">
            <img src={plogo} alt="Logo" className="h-3 w-auto" />
            <span className="text-gray-800 font-bold text-sm">Position</span>
          </div>
        </div>

        {/* Right Side: Bell + Profile + Logo With Text (Visible only on larger screens) */}
        <div className="flex items-center space-x-5 sm:space-x-6 hidden sm:flex">
          <FaRegBell className="h-5 w-5 text-gray-600 cursor-pointer hover:text-black" />

          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 border border-[#CAC4D0] p-2 rounded-full">
              <img src={anotherprofile} alt="Another Profile" className="h-8 w-auto" />
              <span className="text-sm font-semibold text-gray-600">0x48ce...ht56</span>
            </div>
            <img src={profile} alt="Profile" className="h-8 w-auto rounded-full" />
          </div>
        </div>
      </div>

      {/* Mobile Menu: Show if isMenuOpen is true */}
      {isMenuOpen && (
        <div className="sm:hidden mt-4 flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <img src={plogo} alt="Pools Logo" className="h-5 w-auto" />
            <span className="text-gray-800 font-bold text-sm">Pools</span>
          </div>
          <div className="flex items-center space-x-2">
            <img src={plogo} alt="Position Logo" className="h-5 w-auto" />
            <span className="text-gray-800 font-bold text-sm">Position</span>
          </div>

          <div className="flex items-center space-x-2">
            <img src={anotherprofile} alt="Another Profile" className="h-8 w-auto" />
            <span className="text-sm font-semibold text-gray-600">0x48ce...ht56</span>
          </div>

          <div className="flex items-center space-x-2">
            <img src={profile} alt="Profile" className="h-8 w-auto rounded-full" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
