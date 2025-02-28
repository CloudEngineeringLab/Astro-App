'use client';
import { useState } from 'react';

export default function Login() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'google'

  return (
    <div className="min-h-screen bg-slate-50">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
              Welcome
            </h1>
            
            {/* Login Method Tabs */}
            <div className="flex mb-6 border-b">
              <button 
                className={`flex-1 py-3 font-medium text-center ${loginMethod === 'email' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
                onClick={() => setLoginMethod('email')}
              >
                Sign in with Email
              </button>
              <button 
                className={`flex-1 py-3 font-medium text-center ${loginMethod === 'google' ? 'text-purple-700 border-b-2 border-purple-700' : 'text-gray-500'}`}
                onClick={() => setLoginMethod('google')}
              >
                Sign in with Google
              </button>
            </div>

            {loginMethod === 'email' ? (
              <form className="space-y-4">
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="••••••••"
                    required
                  />
                </div>

                {/* Date of Birth */}
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    id="dob"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Time of Birth */}
                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                    Time of Birth
                  </label>
                  <input
                    type="time"
                    id="time"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-purple-700 text-white py-3 px-4 rounded-md hover:bg-purple-600 transition-colors duration-300 font-medium"
                >
                  Log In
                </button>
              </form>
            ) : (
              <div className="text-center">
                <button
                  className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors duration-300 font-medium mb-4 hover:cursor-pointer"
                >
                  <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Continue with Google
                </button>
                
                {/* Instructions for Google login */}
                <p className="text-sm text-gray-600 mt-4">
                  You'll still need to provide your birth details after connecting with Google
                </p>
              </div>
            )}

            {/* Forgot Password & Sign Up Links */}
            <div className="mt-6 text-center text-sm">
              <a href="#" className="text-purple-700 hover:underline">Forgot password?</a>
              <span className="mx-2 text-gray-500">•</span>
              <a href="#" className="text-purple-700 hover:underline">Create an account</a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
          <p>✨ AstroApp - Your Daily Guide to the Stars</p>
          <p className="mt-2 text-sm">© 2024 AstroApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}