import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const data = [
  { date: '11 Jan', value: 9 },
  { date: '26 Jan', value: 6 },
  { date: '11 Feb', value: 3 },
  { date: '11 Mar', value: 5 },
  { date: '26 Mar', value: 7 },
  { date: '11 Apr', value: 10 },
  { date: '26 Apr', value: 8 },
  { date: '11 May', value: 5 },
  { date: '26 May', value: 6 },
  { date: '11 Jun', value: 6 },
]

const payments = [
  { id: 1, date: '1 Dec 2024', amount: '$10,000', status: 'Paid' },
  { id: 2, date: '1 Jan 2025', amount: '$10,000', status: 'Paid' },
  { id: 3, date: '1 Feb 2025', amount: '$10,000', status: 'Pending' },
  { id: 4, date: '1 Mar 2025', amount: '$10,000', status: 'Upcoming' },
]

const Repayments = () => {
  return (
    <div id='repayment' className="min-h-screen bg-[#F8F8F8] py-10 px-4 md:px-16">
      <div className="bg-white p-6 md:p-10 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold mb-8 text-center">Repayments</h2>

        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={data}>
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#7D4CFF" />
          </BarChart>
        </ResponsiveContainer>

        <div className="mt-8 overflow-x-auto">
          <table className="w-full text-sm text-left border-separate border-spacing-y-3">
            <thead>
              <tr className="text-gray-500">
                <th className="px-4">Payments</th>
                <th className="px-4">Due date</th>
                <th className="px-4">Amount</th>
                <th className="px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {payments.map((row) => (
                <tr key={row.id} className="bg-[#F9F9F9] rounded-xl">
                  <td className="px-4 py-3 rounded-l-xl">{row.id}</td>
                  <td className="px-4 py-3">{row.date}</td>
                  <td className="px-4 py-3">{row.amount}</td>
                  <td className="px-4 py-3 rounded-r-xl">{row.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Repayments
