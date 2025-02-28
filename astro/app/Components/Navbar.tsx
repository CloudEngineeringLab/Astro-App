"use client"
import React, {useState} from 'react'
import Link from 'next/link'


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <nav className="bg-purple-700 text-white fixed w-[100%] top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <Link href="/">
                <span className="text-xl font-semibold cursor-pointer">✨ AstroApp</span>
              </Link>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className="hover:bg-purple-600 px-3 py-2 rounded-md">Home</Link>
                <Link href="/Horoscope" className="hover:bg-purple-600 px-3 py-2 rounded-md">Daily Horoscope</Link>
                <Link href="/Zodiac" className="hover:bg-purple-600 px-3 py-2 rounded-md">Zodiac Signs</Link>
                <Link href="/Compatibility" className="hover:bg-purple-600 px-3 py-2 rounded-md">Compatibility</Link>
                
                {/* Sign up/Log in button */}
                <Link 
                  href="/Login" 
                  className="bg-white text-purple-700 font-medium px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Sign up / Log in
                </Link>
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
                <Link href="/" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Home</Link>
                <Link href="/Horoscope" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Daily Horoscope</Link>
                <Link href="/Zodiac" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Zodiac Signs</Link>
                <Link href="/Compatibility" className="block hover:bg-purple-600 px-3 py-2 rounded-md">Compatibility</Link>
                
                {/* Sign up/Log in button for mobile */}
                <Link 
                  href="/Login" 
                  className="block bg-white text-purple-700 font-medium px-3 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
                >
                  Sign up / Log in
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>
  )
}

export default Navbar
