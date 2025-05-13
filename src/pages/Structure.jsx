import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const Structure = () => {
  const chartData = {
    labels: ["Senior", "Junior"],
    datasets: [
      {
        label: "APR",
        data: [80, 20],
        backgroundColor: ["#845EF7", "#E5DBFF"],
        borderWidth: 0,
      },
    ],
  };

  const chartOptions = {
    cutout: "70%",
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div id="structure" className="p-6 md:p-12 text-black bg-white min-h-[400px]">
      <h1 className="text-3xl font-semibold mb-8 text-center">Structure</h1>

      {/* Chart and Tranche Table */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative">
          <Doughnut data={chartData} options={chartOptions} />
          <div className="absolute inset-0 flex items-center justify-center text-xl font-bold">
            14% <span className="text-sm ml-1">APR</span>
          </div>
        </div>

        {/* Row-wise Table */}
        <div className="w-full overflow-auto">
          <table className="table-auto w-full text-sm border border-gray-200 rounded-lg">
            <thead className="bg-gray-50">
              <tr>
                <th className="p-3 text-left">Details</th>
                <th className="p-3 text-left">
                  Senior Tranche
                  <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                    Fixed Yield
                  </span>
                </th>
                <th className="p-3 text-left">
                  Junior Tranche
                  <span className="ml-2 text-xs bg-gray-100 px-2 py-0.5 rounded">
                    Variable Yield
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="p-3 font-medium">Allocation</td>
                <td className="p-3">80%</td>
                <td className="p-3">20%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">APY</td>
                <td className="p-3">14%</td>
                <td className="p-3">19%</td>
              </tr>
              <tr className="border-t">
                <td className="p-3 font-medium">TVL</td>
                <td className="p-3">336K USD</td>
                <td className="p-3">5M USD</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Details Description Table */}
      <div className=" mt-5 border rounded-lg overflow-hidden shadow-sm">
        <table className="table-auto w-full text-sm border-t">
          <thead className="bg-gray-50">
            <tr>
              <th className="p-3 text-left">Details</th>
              <th className="p-3 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 font-medium">Pool Type</td>
              <td className="p-3">Senior Tranche</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Investor Protections</td>
              <td className="p-3">20-25% first-loss coverage</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Collateralization</td>
              <td className="p-3">
                Yes, This loan is secured with real-world, off-chain assets as collateral.
              </td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-medium">Legal Documents</td>
              <td className="p-3 text-blue-600 underline cursor-pointer">
                Senior Pool Agreement
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Structure;
