import React, { useState } from 'react';

const tabs = [
  'Overview',
  'Highlights',
  'Repayment',
  'Assets',
  'Structure',
  'Underwriters',
  'PoolActivity'
];

const IndexPage = () => {
  const [activeTab, setActiveTab] = useState('Overview');

  const handleScroll = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="sticky top-0 z-50 bg-white px-4 py-2 flex gap-4 overflow-x-auto border-b border-gray-200">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => handleScroll(tab)}
          className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300
            ${
              activeTab === tab
                ? 'bg-[#7052E7] text-white shadow-md'
                : 'text-gray-700 hover:bg-purple-100'
            }
          `}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default IndexPage;
