import React from "react";
import image1 from "../assets/Highlight1.png";
import image2 from "../assets/Highlight2.png";
import image3 from "../assets/Highlight3.png";
import image4 from "../assets/Highlight4.png";

const highlights = [
  {
    image: image1,
    title: "Secure & Collateralized",
    description:
      "The pool is overcollateralized with real-world assets, ensuring risk protection. Assets include commercial real estate, SME loans, and structured finance products.",
  },
  {
    image: image2,
    title: "Investor Protection",
    description:
      "20-25% first-loss capital ensures investors are protected from defaults. Senior tranche structure prioritizes investor repayments.",
  },
  {
    image: image3,
    title: "Global & Diversified",
    description:
      "Borrowers span 15+ countries across multiple sectors. Industries include supply chain financing, renewable energy, and fintech lending.",
  },
  {
    image: image4,
    title: "Transparent & Monitored",
    description:
      "Investors receive quarterly financial reports and real-time loan tracking. Data rooms provide access to borrower financials and risk metrics.",
  },
];

const Highlight = () => {
  return (
    <div id="highlights" className="bg-[#F8F8F8] text-black p-6 md:p-12 min-h-screen">
      <h1 className="text-3xl font-semibold mb-10 text-center">Highlights</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="w-full p-4  bg-white rounded-xl shadow hover:shadow-md transition-all duration-300 flex flex-col items-center"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-10 h-10 object-contain mb-4"
            />
            <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
              {item.title}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 text-left w-full pl-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
