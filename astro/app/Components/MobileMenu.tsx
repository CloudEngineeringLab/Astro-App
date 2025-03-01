"use client"
import React, {useState} from 'react'
import Link from 'next/link';

const MobileMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
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
    </>
  )
}

export default MobileMenu
