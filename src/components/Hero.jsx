import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosGlobe } from "react-icons/io";
import { MdOutlineArrowBack, MdOutlineArrowOutward } from "react-icons/md";

import backgroundImage from "../assets/background.png"; // Ensure this path is correct

const Hero = () => {
  return (
    <div
      className="w-full h-auto sm:h-[500px] bg-cover bg-center relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>

      {/* Content */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full h-full px-4 sm:px-6 py-8 relative z-10">
        
        {/* Left Section */}
        <div className="text-white w-full md:w-3/5">
          <MdOutlineArrowBack className="mb-2 text-xl" />
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Featured Loan</h2>

          {/* Title and Contract */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl font-bold">Fintech Agency LLC</h1>
            <span className="flex items-center text-base underline font-medium mt-2 sm:mt-3">
              Contract
              <MdOutlineArrowOutward className="ml-1 text-lg" />
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-white max-w-full sm:max-w-2xl">
            Hello Finance specializes in offering liquidity services tailored for Small and Medium Businesses (SMBs) with an annual revenue threshold of at least $50 million.
          </p>

          {/* Info Boxes */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-10">
            {/* Box 1 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg px-4 py-2 rounded-lg shadow-lg flex flex-col items-center min-w-[100px]">
              <p className="text-sm sm:text-base font-semibold">Estimated APY</p>
              <p className="text-xs sm:text-sm">14%</p>
            </div>

            {/* Box 2 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg px-4 py-2 rounded-lg shadow-lg flex flex-col items-center min-w-[100px]">
              <p className="text-sm sm:text-base font-semibold">Minimum Investment</p>
              <p className="text-xs sm:text-sm">$100K</p>
            </div>

            {/* Box 3 */}
            <div className="bg-white bg-opacity-20 backdrop-blur-lg px-4 py-2 rounded-lg shadow-lg flex flex-col items-center min-w-[100px]">
              <p className="text-sm sm:text-base font-semibold">Total Value Locked</p>
              <p className="text-xs sm:text-sm">$5M</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="w-full md:w-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 md:gap-4 mt-6 md:mt-0 md:absolute md:bottom-6 md:right-6">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-black hover:border-black transition text-white"
          >
            <FaLinkedin className="text-xl" />
            <span className="text-sm font-semibold">LinkedIn</span>
          </a>

          {/* Twitter */}
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-black hover:border-black transition text-white"
          >
            <FaXTwitter className="text-xl" />
            <span className="text-sm font-semibold">Twitter</span>
          </a>

          {/* Website */}
          <a
            href="https://www.qiro.fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-4 py-2 border-2 border-white rounded-lg hover:bg-black hover:border-black transition text-white"
          >
            <IoIosGlobe className="text-xl" />
            <span className="text-sm font-semibold">Website</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
