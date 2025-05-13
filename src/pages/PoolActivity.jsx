import React from "react";

const poolData = [
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
  },
  {
    wallet: "0x90eh...94w9",
    txType: "Invest",
    amount: "+$ 6.7K USDC",
    date: "5 Mar, 2025",
  },
];

const PoolActivity = () => {
  return (
    <div id="poolactivity" className="p-6 md:p-12 text-black bg-white min-h-[400px]">
      <h2 className="text-3xl font-semibold mb-8 text-center">Pool Activity</h2>

      <input
        type="text"
        placeholder="Search by address"
        className="w-full max-w-lg border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring focus:border-blue-400"
      />

      {/* Make table scrollable horizontally on smaller screens */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-gray-500 text-left text-sm">
              <th className="py-2">Wallet</th>
              <th className="py-2">Tx Type</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Date</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {poolData.map((item, index) => (
              <tr key={index} className="text-sm text-gray-800">
                <td className="py-3 flex items-center gap-2">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                    alt="wallet"
                    className="w-6 h-6 rounded-full"
                  />
                  <span className="text-blue-600 underline cursor-pointer">{item.wallet}</span>
                </td>
                <td className="py-3">{item.txType}</td>
                <td className="py-3">{item.amount}</td>
                <td className="py-3">{item.date}</td>
                <td className="py-3">
                  <button className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
                    Tx ↗
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination footer */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-sm text-gray-600">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <span>Rows per page</span>
          <select className="border border-gray-300 rounded px-2 py-1 focus:outline-none">
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>

        <div className="flex items-center gap-3">
          <span>1-1 of 1 wallet</span>
          <button className="text-gray-400 hover:text-gray-700 text-lg">&lt;</button>
          <button className="text-gray-400 hover:text-gray-700 text-lg">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PoolActivity;
