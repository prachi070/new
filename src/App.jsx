import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Overview from './pages/Overview'
import Highlight from './pages/Highlight'
import Repayments from './pages/Repayments'
import Asset from './pages/Asset'
import Structure from './pages/Structure'
import Underwriters from './pages/Underwriters'
import PoolActivity from './pages/PoolActivity'
import Deposit from './pages/Deposit'
import IndexPage from './pages/IndexPage'
const App = () => {
  return (
    <div className="flex flex-col">
      <Navbar/>
      <Hero/>

      <div className="flex flex-col md:flex-row w-full">
  {/* Left Section */}
  <div className="w-full md:w-[60%] bg-[#F8F8F8]">
  <IndexPage/>
    <Overview />
    <Highlight />
    <Repayments />
    <Asset />
    <Structure />
    <Underwriters />
    <PoolActivity />
  </div>

  {/* Right Section */}
  <div className="w-full md:w-[40%] bg-gray-100">
    <Deposit />
  </div>
</div>

    </div>
  )
}

export default App
