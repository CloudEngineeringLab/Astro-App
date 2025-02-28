'use client';
import Link from 'next/link';
import { useState } from 'react';
import ZodiacSign from './Components/ZodiacSign';

export default function Home() {


  return (
    <div className="min-h-screen bg-slate-50">
      

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="py-16 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-purple-800 mb-4">
            Discover Your Cosmic Path
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Unlock the mysteries of the stars and understand your destiny
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300 hover:cursor-pointer">
            Get Your Free Reading
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🌙</div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Daily Horoscope</h3>
            <p className="text-gray-600">Get your personalized daily insights and guidance from the stars.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">⭐</div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Zodiac Compatibility</h3>
            <p className="text-gray-600">Discover how your sign connects with others in love and friendship.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-3xl mb-4">🔮</div>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Personal Reading</h3>
            <p className="text-gray-600">Get detailed insights about your life path and future possibilities.</p>
          </div>
        </div>

        {/* Zodiac Signs Section */}
        <div className="py-12">
          <h2 className="text-3xl font-bold text-purple-800 text-center mb-8">
            Explore Your Zodiac Sign
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {ZodiacSign.map((zodiac) => (
              <div key={zodiac.name} className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-300 text-center cursor-pointer">
                <div className="text-3xl mb-2">{zodiac.sign}</div>
                <div className="text-purple-800 font-medium">{zodiac.name}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-purple-100 rounded-2xl p-8 my-12 text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-purple-800 mb-4">
            Ready to Explore the Cosmos?
          </h2>
          <p className="text-gray-600 mb-6">
            Sign up now and receive your personalized astrological reading
          </p>
          <button className="bg-purple-700 text-white px-8 py-3 rounded-full hover:bg-purple-600 transition-colors duration-300">
            Start Your Journey
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