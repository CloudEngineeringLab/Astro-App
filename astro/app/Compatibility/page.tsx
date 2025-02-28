'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ZodiacSigns } from '../Components/ZodiacSign';

export default function Compatibility() {
  const [firstSign, setFirstSign] = useState<{ name: string; dateRange: string; sign: string; symbolName: string; element: string; modality: string; rulingPlanet: string; description: string } | null>(null);
  const [secondSign, setSecondSign] = useState<{ name: string; dateRange: string; sign: string; symbolName: string; element: string; modality: string; rulingPlanet: string; description: string } | null>(null);
  const [compatibilityResult, setCompatibilityResult] = useState<{ score: number; description: string; sign1: { name: string; sign: string }; sign2: { name: string; sign: string } } | null>(null);

  // Simple compatibility data (this would be more extensive in a real app)
  const getCompatibility = (sign1: { name: string; sign: string }, sign2: { name: string; sign: string }) => {
    // Simplified compatibility logic based on elements
    const elements = {
      Aries: 'Fire', 
      Taurus: 'Earth', 
      Gemini: 'Air', 
      Cancer: 'Water',
      Leo: 'Fire', 
      Virgo: 'Earth', 
      Libra: 'Air', 
      Scorpio: 'Water',
      Sagittarius: 'Fire', 
      Capricorn: 'Earth', 
      Aquarius: 'Air', 
      Pisces: 'Water'
    };

    const sign1Element = elements[sign1.name as keyof typeof elements];
    const sign2Element = elements[sign2.name as keyof typeof elements];
    
    let score, description;
    
    // Element compatibility
    if (sign1.name === sign2.name) {
      // Same sign
      score = 75;
      description = `Two ${sign1.name} individuals understand each other deeply, sharing the same strengths and weaknesses. While this creates an immediate bond, you may amplify each other's challenges as well.`;
    } else if (sign1Element === sign2Element) {
      // Same element
      score = 85;
      description = `${sign1.name} and ${sign2.name} share the ${sign1Element} element, creating a natural harmony and understanding between you. You approach life with similar energy and values.`;
    } else if (
      (sign1Element === 'Fire' && sign2Element === 'Air') ||
      (sign1Element === 'Air' && sign2Element === 'Fire') ||
      (sign1Element === 'Water' && sign2Element === 'Earth') ||
      (sign1Element === 'Earth' && sign2Element === 'Water')
    ) {
      // Complementary elements
      score = 90;
      description = `${sign1.name} (${sign1Element}) and ${sign2.name} (${sign2Element}) have complementary elements that enhance each other. You balance and strengthen one another's qualities.`;
    } else if (
      (sign1Element === 'Fire' && sign2Element === 'Water') ||
      (sign1Element === 'Water' && sign2Element === 'Fire') ||
      (sign1Element === 'Earth' && sign2Element === 'Air') ||
      (sign1Element === 'Air' && sign2Element === 'Earth')
    ) {
      // Challenging elements
      score = 65;
      description = `${sign1.name} (${sign1Element}) and ${sign2.name} (${sign2Element}) have elements that can challenge each other. With understanding and patience, these differences can lead to growth and balance.`;
    } else {
      // Neutral
      score = 75;
      description = `${sign1.name} and ${sign2.name} have a balanced relationship with both harmonious aspects and challenges to overcome.`;
    }

    return {
      score,
      description,
      sign1,
      sign2
    };
  };

  const checkCompatibility = () => {
    if (firstSign && secondSign) {
      setCompatibilityResult(getCompatibility(firstSign, secondSign));
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header with navigation */}
      <header className="bg-purple-800 text-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">AstroApp</Link>
          <nav>
            <ul className="flex space-x-6">
              <li><Link href="/" className="hover:text-purple-200">Home</Link></li>
              <li><Link href="/compatibility" className="font-bold border-b-2 border-white">Compatibility</Link></li>
              <li><Link href="#" className="hover:text-purple-200">Daily Horoscope</Link></li>
              <li><Link href="#" className="hover:text-purple-200">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            Zodiac Compatibility
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover how your stars align with others in love, friendship, and beyond
          </p>
        </div>

        {/* Compatibility Calculator */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">
            Check Your Compatibility
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* First Sign Selection */}
            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-4">Select Your Sign</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ZodiacSigns.map((zodiac) => (
                  <div 
                    key={`first-${zodiac.name}`}
                    onClick={() => setFirstSign(zodiac)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 text-center ${
                      firstSign?.name === zodiac.name 
                        ? 'bg-purple-700 text-white shadow-md' 
                        : 'bg-purple-100 hover:bg-purple-200'
                    }`}
                  >
                    <div className="text-2xl mb-1">{zodiac.sign}</div>
                    <div className="font-medium">{zodiac.name}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Sign Selection */}
            <div>
              <h3 className="text-lg font-medium text-purple-700 mb-4">Select Their Sign</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ZodiacSigns.map((zodiac) => (
                  <div 
                    key={`second-${zodiac.name}`}
                    onClick={() => setSecondSign(zodiac)}
                    className={`p-3 rounded-lg cursor-pointer transition-all duration-300 text-center ${
                      secondSign?.name === zodiac.name 
                        ? 'bg-purple-700 text-white shadow-md' 
                        : 'bg-purple-100 hover:bg-purple-200'
                    }`}
                  >
                    <div className="text-2xl mb-1">{zodiac.sign}</div>
                    <div className="font-medium">{zodiac.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={checkCompatibility}
              disabled={!firstSign || !secondSign}
              className={`px-8 py-3 rounded-full transition-colors duration-300 ${
                firstSign && secondSign 
                  ? 'bg-purple-700 text-white hover:bg-purple-600' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Check Compatibility
            </button>
          </div>
        </div>

        {/* Compatibility Results */}
        {compatibilityResult && (
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 mb-12 text-center">
            <div className="flex justify-center items-center space-x-4 mb-6">
              <div className="text-center">
                <div className="text-4xl mb-2">{compatibilityResult.sign1.sign}</div>
                <div className="text-purple-800 font-medium">{compatibilityResult.sign1.name}</div>
              </div>
              <div className="text-3xl text-purple-700">❤️</div>
              <div className="text-center">
                <div className="text-4xl mb-2">{compatibilityResult.sign2.sign}</div>
                <div className="text-purple-800 font-medium">{compatibilityResult.sign2.name}</div>
              </div>
            </div>
            
            <div className="mb-6">
              <div className="text-2xl font-bold text-purple-800 mb-2">
                Compatibility Score: {compatibilityResult.score}%
              </div>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                <div 
                  className="bg-purple-700 h-4 rounded-full" 
                  style={{ width: `${compatibilityResult.score}%` }}
                ></div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              {compatibilityResult.description}
            </p>
            
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors duration-300">
              Get Detailed Analysis
            </button>
          </div>
        )}

        {/* Other Compatibility Insights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Love Compatibility</h3>
            <p className="text-gray-600 mb-4">
              Your zodiac sign can reveal profound insights about your romantic relationships. 
              Understanding the elemental and planetary influences helps navigate the complex 
              waters of love.
            </p>
            <Link href="#" className="text-purple-700 font-medium hover:underline">
              Learn more about romance in the stars →
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">Friendship Compatibility</h3>
            <p className="text-gray-600 mb-4">
              Even the closest friendships can benefit from astrological insight. Discover 
              how your zodiac signs influence your communication, loyalty, and understanding 
              of each other.
            </p>
            <Link href="#" className="text-purple-700 font-medium hover:underline">
              Explore friendship connections →
            </Link>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-100 rounded-2xl p-8 my-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-purple-800 mb-4">
            Want a Personalized Compatibility Reading?
          </h2>
          <p className="text-gray-600 mb-6">
            Our astrologers can provide detailed insights about your specific relationship
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
            Get Professional Reading
          </button>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-8 mt-12">
          <div className="text-center text-gray-600">
            <p>✨ AstroApp - Your Daily Guide to the Stars</p>
            <p className="mt-2 text-sm">© 2024 AstroApp. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}