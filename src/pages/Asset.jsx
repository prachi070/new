import React from 'react'
import { FaInfoCircle } from "react-icons/fa";


const Asset = () => {
  return (
        <div id='assets' className="p-6 md:p-12 text-black bg-white min-h-[400px]">

          {/* Heading */}
          <h1 className="text-3xl font-semibold text-center mb-6">Assets</h1>
    
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <h2 className="text-xl font-medium flex items-center gap-1">
                Fintech Agency LLC 
              </h2>
            </div>
            <p className="text-md font-normal mb-4">Fintech Agency LLC Finance specialises in offering liquidity services tailored for Small and Medium Businesses (SMBs) with an annual revenue threshold of at least $50 million.</p>
          </div>
    
          {/* Info Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-3  mt-8">
            {/* Box 1 */}
            <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-l-2xl rounded-r-none shadow-lg flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px]">
              <div className="flex items-center gap-1">
                <p className="text-sm sm:text-lg font-semibold text-black">
                  Asset Value
                </p>
                <FaInfoCircle className="text-gray-500 text-sm" />
              </div>
              <p className="text-xs sm:text-base text-black">$25M</p>
            </div>
    
            {/* Box 2 */}
            <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3  shadow-lg flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px]">
              <div className="flex items-center gap-1">
                <p className="text-sm sm:text-lg font-semibold text-black">
                  Asset Type
                </p>
                <FaInfoCircle className="text-gray-500 text-sm" />
              </div>
              <p className="text-xs sm:text-base text-black">Invoice</p>
            </div>
    
            {/* Box 3 */}
            <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-r-2xl rounded-l-none shadow-lg flex flex-col items-center justify-center min-w-[80px] sm:min-w-[100px]">
              <div className="flex items-center gap-1">
                <p className="text-sm sm:text-lg font-semibold text-black">
                Maturity Date
                </p>
                <FaInfoCircle className="text-gray-500 text-sm" />
              </div>
              <p className="text-xs sm:text-base text-black">Apr 06, 2025</p>
            </div>
          </div>
        </div>
  )
}

export default Asset
