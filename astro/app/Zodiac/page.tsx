// pages/zodiac-signs.js
"use client"
import {ZodiacSigns, zodiacFacts} from '../Components/ZodiacSign';

import { useState } from 'react';

interface ZodiacSign {
    name: string;
    element: string;
    sign: string;
    dateRange: string;
    modality: string;
    rulingPlanet: string;
    symbolName: string;
    description: string;
  }

export default function App() {
  const [filter, setFilter] = useState('all');
  
  // Filter the zodiac signs based on selected element
  const filteredSigns = filter === 'all' 
    ? ZodiacSigns 
    : ZodiacSigns.filter(sign => sign.element.toLowerCase() === filter.split(' ')[0].toLowerCase());

  return (
    <div className="min-h-screen bg-slate-50 mt-16">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-800 mb-4">Explore the Zodiac Signs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the unique traits, elements, and cosmic influences that shape each of the twelve zodiac signs
          </p>
        </div>
        
        {/* Signs Filter */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-12">
          <div className="flex flex-wrap gap-3 justify-center">
            <button 
              className={`px-4 py-2 rounded-full transition-colors hover:cursor-pointer ${filter === 'all' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              onClick={() => setFilter('all')}
            >
              All Signs
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors hover:cursor-pointer ${filter === 'fire signs' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              onClick={() => setFilter('fire signs')}
            >
              Fire Signs
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors hover:cursor-pointer ${filter === 'earth signs' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              onClick={() => setFilter('earth signs')}
            >
              Earth Signs
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors hover:cursor-pointer ${filter === 'air signs' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              onClick={() => setFilter('air signs')}
            >
              Air Signs
            </button>
            <button 
              className={`px-4 py-2 rounded-full transition-colors hover:cursor-pointer ${filter === 'water signs' ? 'bg-purple-700 text-white' : 'bg-purple-100 text-purple-800 hover:bg-purple-200'}`}
              onClick={() => setFilter('water signs')}
            >
              Water Signs
            </button>
          </div>
        </div>
        
        {/* Zodiac Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredSigns.map((sign) => (
            <ZodiacCard key={sign.name} sign={sign} />
          ))}
        </div>
        
        {/* Facts Section */}
        <div className="bg-purple-100 rounded-2xl p-8 my-16">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Zodiac Facts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {zodiacFacts.map((fact, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">{fact.title}</h3>
                <p className="text-gray-700">{fact.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-purple-700 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Discover How the Stars Influence Your Life
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Get a personalized reading to understand how your zodiac sign shapes your personality, relationships, and life path
          </p>
          <button className="bg-white text-purple-800 px-8 py-3 rounded-full hover:bg-purple-100 transition-colors duration-300 font-medium">
            Get Your Personalized Reading
          </button>
        </div>
      </main>
    </div>
  );
}

// Zodiac Card Component


function ZodiacCard({ sign }: { sign: ZodiacSign }) {
  const getGradient = (element: string) => {
    switch(element.toLowerCase()) {
      case 'fire':
        return 'from-red-500 to-orange-500';
      case 'earth':
        return 'from-green-600 to-emerald-500';
      case 'air':
        return 'from-yellow-400 to-amber-500';
      case 'water':
        return 'from-blue-500 to-cyan-500';
      default:
        return 'from-purple-500 to-indigo-500';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`bg-gradient-to-r ${getGradient(sign.element)} p-6 text-white flex items-center justify-between`}>
        <div className="flex items-center">
          <div className="text-4xl mr-3">{sign.sign}</div>
          <div>
            <h2 className="text-2xl font-bold">{sign.name}</h2>
            <p>{sign.dateRange}</p>
          </div>
        </div>
        <div className="bg-white/20 px-3 py-1 rounded-full text-sm backdrop-blur-sm">{sign.element} Sign</div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
          <div>
            <p className="text-purple-800 font-medium">Element</p>
            <p className="text-gray-700">{sign.element}</p>
          </div>
          <div>
            <p className="text-purple-800 font-medium">Modality</p>
            <p className="text-gray-700">{sign.modality}</p>
          </div>
          <div>
            <p className="text-purple-800 font-medium">Ruling Planet</p>
            <p className="text-gray-700">{sign.rulingPlanet}</p>
          </div>
          <div>
            <p className="text-purple-800 font-medium">Symbol</p>
            <p className="text-gray-700">{sign.symbolName}</p>
          </div>
        </div>
        <p className="text-gray-700 mb-4">
          {sign.description}
        </p>
        <button className="w-full bg-purple-100 text-purple-800 font-medium py-2 rounded-lg hover:bg-purple-200 transition-colors">
          Explore {sign.name}
        </button>
      </div>
    </div>
  );
}