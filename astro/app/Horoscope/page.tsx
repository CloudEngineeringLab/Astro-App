import React from 'react'

const page = () => {
  return (
    <div className="bg-slate-50 py-16 mt-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    {/* Header */}
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold text-purple-800 mb-3">Your Daily Cosmic Guidance</h2>
      <p className="text-xl text-gray-600">Find wisdom in the stars with personalized insights for your sign</p>
    </div>
    
    {/* Sign Selector */}
    <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Select Your Sign</h3>
          <p className="text-gray-600">Get your personalized horoscope for today</p>
        </div>
        <div className="relative">
          <select 
            className="bg-purple-100 text-purple-800 font-medium px-6 py-3 rounded-full appearance-none pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option>Aries (Mar 21 - Apr 19)</option>
            <option>Taurus (Apr 20 - May 20)</option>
            <option>Gemini (May 21 - Jun 20)</option>
            <option>Cancer (Jun 21 - Jul 22)</option>
            <option>Leo (Jul 23 - Aug 22)</option>
            <option>Virgo (Aug 23 - Sep 22)</option>
            <option>Libra (Sep 23 - Oct 22)</option>
            <option>Scorpio (Oct 23 - Nov 21)</option>
            <option>Sagittarius (Nov 22 - Dec 21)</option>
            <option>Capricorn (Dec 22 - Jan 19)</option>
            <option>Aquarius (Jan 20 - Feb 18)</option>
            <option>Pisces (Feb 19 - Mar 20)</option>
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-purple-800">
            ▼
          </div>
        </div>
      </div>
    </div>
    
    {/* Horoscope Card */}
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Card Header */}
      <div className="bg-purple-700 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-4xl mr-4">♈</div>
            <div>
              <h3 className="text-2xl font-bold">Aries</h3>
              <p className="text-purple-200">March 1, 2025</p>
            </div>
          </div>
          <div className="bg-purple-600 px-4 py-2 rounded-full text-sm">
            Today&apos;s Mood: Energetic
          </div>
        </div>
      </div>
      
      {/* Card Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Horoscope */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold text-purple-800 mb-4">Your Daily Cosmic Message</h4>
            <p className="text-gray-700 mb-4">
              The stars are aligned in your favor today, Aries. Your natural leadership abilities will shine, and those around you will look to you for guidance. It&apos;s an excellent day for starting new projects or taking the initiative in ongoing ones.
            </p>
            <p className="text-gray-700 mb-4">
              Mars, your ruling planet, forms a harmonious aspect with Jupiter, expanding your horizons and boosting your confidence. Be bold but avoid being impulsive—take a moment to plan before you leap.
            </p>
            <p className="text-gray-700">
              In relationships, your passionate nature is heightened. Express your feelings openly, but remember to listen as well as speak. A meaningful conversation could lead to deeper understanding.
            </p>
          </div>
          
          {/* Stats & Lucky Elements */}
          <div className="bg-purple-50 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-purple-800 mb-4">Cosmic Insights</h4>
            
            {/* Lucky Numbers */}
            <div className="mb-6">
              <p className="text-purple-800 font-medium mb-2">Lucky Numbers</p>
              <div className="flex space-x-2">
                {[3, 7, 15, 24, 36].map(num => (
                  <div key={num} className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-purple-800 font-medium">
                    {num}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Compatibility */}
            <div className="mb-6">
              <p className="text-purple-800 font-medium mb-2">Best Match Today</p>
              <div className="flex items-center">
                <div className="text-2xl mr-2">♌</div>
                <span className="text-gray-700">Leo</span>
              </div>
            </div>
            
            {/* Lucky Elements */}
            <div>
              <p className="text-purple-800 font-medium mb-2">Lucky Elements</p>
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Color:</span>
                  <div className="w-4 h-4 rounded-full bg-red-500"></div>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Gem:</span>
                  <span>Ruby</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Element:</span>
                  <span>Fire</span>
                </div>
                <div className="flex items-center">
                  <span className="text-gray-700 mr-2">Planet:</span>
                  <span>Mars</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Card Footer */}
      <div className="border-t border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <button className="flex items-center text-purple-700 hover:text-purple-500 transition-colors">
              <span className="mr-1">♥</span> Save
            </button>
            <button className="flex items-center text-purple-700 hover:text-purple-500 transition-colors">
              <span className="mr-1">↗</span> Share
            </button>
          </div>
          <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
            Get Extended Reading
          </button>
        </div>
      </div>
    </div>
    
    {/* Navigational Pills */}
    <div className="flex flex-wrap justify-center gap-2 mt-10">
      <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">
        Tomorrow&apos;s Preview
      </button>
      <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">
        Weekly Forecast
      </button>
      <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">
        Monthly Overview
      </button>
      <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">
        Love Compatibility
      </button>
      <button className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full hover:bg-purple-200 transition-colors">
        Career Insights
      </button>
    </div>
  </div>
</div>
  )
}

export default page
