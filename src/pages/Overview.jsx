import React, { useState, useRef, useEffect } from "react";
import { FaInfoCircle } from "react-icons/fa";

const Overview = () => {
  const [progress, setProgress] = useState(80);
  const [isDragging, setIsDragging] = useState(false);
  const barRef = useRef(null);
  const totalAmount = 4000000;

  const updateProgressFromEvent = (e) => {
    if (!barRef.current) return;

    const rect = barRef.current.getBoundingClientRect();
    const clientX = e.type.includes("mouse") ? e.clientX : e.touches[0].clientX;
    const offsetX = clientX - rect.left;
    let newProgress = Math.max(0, Math.min((offsetX / rect.width) * 100, 100));
    setProgress(Math.round(newProgress));
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgressFromEvent(e);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        updateProgressFromEvent(e);
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("touchmove", handleMouseMove);
    window.addEventListener("touchend", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging]);

  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format((progress / 100) * totalAmount);

  return (
    <div id="overview" className="p-6 md:p-12 text-black bg-white min-h-[400px]">
      <h1 className="text-3xl font-semibold mb-6 text-center">Overview</h1>

      <div className="mb-8">
        <div className="flex items-center space-x-2 mb-2">
          <h2 className="text-xl font-medium flex items-center gap-1">
            Pool Capacity <FaInfoCircle className="text-gray-500 text-sm" />
          </h2>
        </div>
        <p className="text-2xl font-bold mb-4">{formattedAmount}</p>

        {/* Clickable and Draggable Progress Bar */}
        <div
          ref={barRef}
          className="w-full bg-gray-200 rounded-full h-4 relative mb-4 cursor-pointer"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div
            className="h-4 rounded-full"
            style={{
              width: `${progress}%`,
              backgroundColor: "#732EFE",
              transition: isDragging ? "none" : "width 0.2s ease",
            }}
          ></div>
          <span
            className="absolute right-2 -top-7 text-xs font-semibold px-2 py-0.5"
            style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
          >
            {progress}% filled
          </span>
        </div>
      </div>

      {/* Info Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
        <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-l-2xl rounded-r-none shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <p className="text-sm sm:text-lg font-semibold text-black">
              Estimated APY
            </p>
            <FaInfoCircle className="text-gray-500 text-sm" />
          </div>
          <p className="text-xs sm:text-base text-black">14%</p>
        </div>

        <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <p className="text-sm sm:text-lg font-semibold text-black">
              Capital Formation
            </p>
            <FaInfoCircle className="text-gray-500 text-sm" />
          </div>
          <p className="text-xs sm:text-base text-black">30 Days</p>
        </div>

        <div className="bg-white border border-gray-300 px-3 sm:px-6 py-2 sm:py-3 rounded-r-2xl rounded-l-none shadow-lg flex flex-col items-center justify-center">
          <div className="flex items-center gap-1">
            <p className="text-sm sm:text-lg font-semibold text-black">
              Loan Term
            </p>
            <FaInfoCircle className="text-gray-500 text-sm" />
          </div>
          <p className="text-xs sm:text-base text-black">4 Days</p>
        </div>
      </div>
    </div>
  );
};

export default Overview;
