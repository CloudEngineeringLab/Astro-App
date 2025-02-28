'use client';
import React, { useState } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <nav className="bg-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <span className="text-xl font-semibold">✨ AstroApp</span>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <a href="/" className="hover:bg-purple-600 px-3 py-2 rounded-md">Home</a>
                <a href="/horoscope" className="hover:bg-purple-600 px-3 py-2 rounded-md">Daily Horoscope</a>
                <a href="/zodiac" className="hover:bg-purple-600 px-3 py-2 rounded-md">Zodiac Signs</a>
                <a href="/compatibility" className="hover:bg-purple-600 px-3 py-2 rounded-md">Compatibility</a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-purple-600"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a href="/" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Home</a>
                <a href="/horoscope" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Daily Horoscope</a>
                <a href="/zodiac" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Zodiac Signs</a>
                <a href="/compatibility" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Compatibility</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1>Hello World</h1>
      </main>
    </div>
  );
} 