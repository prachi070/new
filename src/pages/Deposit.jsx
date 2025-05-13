import React, { useState } from "react";
import { FaCheckCircle } from 'react-icons/fa';
import { MdArrowOutward } from "react-icons/md";
import { IoMdCopy } from "react-icons/io";
const Deposit = () => {
  const [amount, setAmount] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showImageBox, setShowImageBox] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
    const [isDeposit, setIsDeposit] = useState(true);
  const isAmountValid = parseFloat(amount) > 0;

  const handleContinue = () => {
    setShowModal(false);
    setShowConfirmModal(true);

    setTimeout(() => {
      setShowConfirmModal(false); // Hide confirmation modal after 5 seconds
      setShowImageBox(true); // Show image box
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white min-h-screen text-gray-800 font-sans">
    {/* Deposit and Withdraw Toggle */}
      <div className="flex justify-between mb-4">
        <button
          onClick={() => setIsDeposit(true)}
          className={`w-1/2 py-2 text-center font-semibold rounded-3xl ${isDeposit ? 'bg-[#7052E7] text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Deposit
        </button>
        <button
          onClick={() => setIsDeposit(false)}
          className={`w-1/2 py-2 text-center font-semibold rounded-3xl ${!isDeposit ? 'bg-[#7052E7] text-white' : 'bg-gray-200 text-gray-700'}`}
        >
          Withdraw
        </button>
      </div>

      {/* Deposit Box */}
      <div className="bg-gray-100 rounded-xl p-4 shadow-sm mb-6">
        <div className="text-sm text-gray-500">Deposit USDC</div>

        <div className="flex justify-between items-end mt-2">
          <div>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="text-4xl font-semibold bg-transparent outline-none w-full text-gray-800"
            />
            <p className="text-sm text-gray-400">${amount || "0"}</p>
          </div>
          <button
            className="bg-purple-200 text-purple-700 text-sm px-3 py-1 rounded-lg font-medium"
            onClick={() => setAmount("100000")} // Optional: Set to MAX value
          >
            MAX
          </button>
        </div>

        <p className="text-right text-xs text-gray-400 mt-1">
          {amount || "0.00"} USDC
        </p>
      </div>


    

      {/* Investment Info */}
      <div className="bg-gray-50 rounded-xl p-4 shadow-sm mb-6 space-y-3">
        <div>
          <p className="text-xs text-gray-500">Minimum Investments</p>
          <p className="text-lg font-medium text-gray-800">100K</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Lockup Period</p>
          <p className="text-lg font-medium text-gray-800">28 Days</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">APY</p>
          <p className="text-lg font-medium text-gray-800">7.87%</p>
        </div>
      </div>

      {/* Enter Amount Button */}

      <button
        onClick={() => setShowModal(true)}
        disabled={!isAmountValid}
        className={`w-full py-3 rounded-xl font-semibold text-center transition ${
          isAmountValid
            ? "bg-[#7052E7] text-white hover:bg-purple-700"
            : "bg-gray-200 text-gray-500 cursor-not-allowed"
        }`}
      >
        {isAmountValid ? (isDeposit ? "Deposit" : "Withdraw") : "Enter an Amount"}
      </button>

      {/* Activity Section */}
      <div className="mt-8">
        <h3 className="text-sm font-medium text-gray-600 mb-3">My Activity</h3>

        <div className="bg-white shadow-md p-4 rounded-xl flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 grid place-content-center text-white text-xs font-bold">
              🪙
            </div>
            <span className="text-sm text-gray-700 font-medium">
              0x9102...e3e7
            </span>
          </div>
          <div className="text-right">
            <p className="text-sm text-red-500 font-semibold">- $69.33 USDC</p>
            <p className="text-xs text-gray-400">Mar 1, 2025</p>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-lg relative">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-black"
              onClick={() => setShowModal(false)}
            >
              ✖
            </button>
            <h2 className="text-xl font-semibold text-center mb-4">
  {isDeposit ? "Review Deposit" : "Review Withdrawal"}
</h2>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <p className="text-sm font-medium">Fintech Agency LLC</p>
              </div>

              <div className="flex justify-between items-center text-lg">
                <p className="font-semibold">
                  {parseFloat(amount).toFixed(2)} USDC
                </p>
                <span className="text-sm bg-gray-100 px-2 py-1 rounded-md text-gray-700">
                  ${amount}
                </span>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <p>Tranche</p>
                <p className="text-black font-medium">Senior Tranche</p>
              </div>

              <div className="flex justify-between text-sm text-gray-500">
                <p>Rate (USDC)</p>
                <p className="text-black font-medium">1 USDC = 1.07900 QSR</p>
              </div>

              <p className="text-xs text-gray-400">
                By confirming this transaction, you agree to the{" "}
                <span className="underline cursor-pointer">Terms of Use</span>{" "}
                and the service provisions relating to the morpho Vault.
              </p>

              <button
                className="w-full py-3 mt-2 bg-purple-600 text-white rounded-xl font-semibold hover:bg-purple-700"
                onClick={handleContinue}
              >
                Continue to Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Second Modal: Confirm Box */}
      {showConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-xl relative border border-gray-200">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
              onClick={() => setShowConfirmModal(false)}
            >
              ✖
            </button>

            <h2 className="text-xl font-semibold text-center mb-4">
  {isDeposit ? "Confirm Deposit" : "Confirm Withdrawal"}
</h2>

            <div className="space-y-5">
              {/* Header Card */}
              <div className="bg-[#F5F3FF] p-4 rounded-xl flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Fintech Agency LLC</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-lg font-bold">
                      {parseFloat(amount || 0).toFixed(2)} USDC
                    </p>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">
                      ${parseFloat(amount || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Info */}
              <p className="text-sm text-gray-600">
                Approve deposit of {parseFloat(amount || 0).toFixed(2)} USDC
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                <div className="h-full bg-purple-600 w-1/2 transition-all"></div>
              </div>

              <p className="text-xs text-gray-500 text-center">
                Signature 1 / 2 – Proceed in your wallet
              </p>
            </div>
          </div>
        </div>
      )}

      {showImageBox && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md mx-4 p-6 rounded-2xl shadow-xl relative border border-gray-200">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-black text-xl"
              onClick={() => setShowImageBox(false)}
            >
              ✖
            </button>

<h2 className="text-xl font-bold text-center mb-4 flex items-center">
  <FaCheckCircle className="text-green-500 mr-2" /> {isDeposit ? " Deposit Successfull" : " Withdrawal Successfull"}
</h2>

           <h2 className="text-xl font-bold text-center mb-4 flex items-center">
  
</h2>

            <div className="space-y-5">
              {/* Header Card */}
              <div className="bg-[#F5F3FF] p-4 rounded-xl flex items-center space-x-4">
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Fintech Agency LLC</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <p className="text-lg font-bold">
                      {parseFloat(amount || 0).toFixed(2)} USDC
                    </p>
                    <span className="bg-gray-200 text-gray-700 text-xs px-2 py-0.5 rounded">
                      ${parseFloat(amount || 0).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Progress Info */}
              <p className="text-sm text-gray-600 flex justify-between items-center">
  <span>Gas Fees</span> 
  <span className="text-right">0.1%</span>
</p>

{/* Progress Bar */}
<div className="flex justify-between items-center">
  <span>Tx Hash</span> 
  <span className="flex">
  <span>0x48Ybuy8c9e04u</span>
  <span><MdArrowOutward /></span>
  <span><IoMdCopy /></span>
  </span>
</div>


        
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default Deposit;
