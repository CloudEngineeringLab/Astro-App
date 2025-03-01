"use client"
import React, {useState} from "react";
import { GoogleSigninBtn } from "./Buttons";

const LoginMethodTab = () => {
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'google'
  return (
    <>
    <div className="flex mb-6 border-b">
      <button
        className={`flex-1 py-3 font-medium text-center ${
          loginMethod === "email"
            ? "text-purple-700 border-b-2 border-purple-700"
            : "text-gray-500"
        }`}
        onClick={() => setLoginMethod("email")}
      >
        Sign in with Email
      </button>
      <button
        className={`flex-1 py-3 font-medium text-center ${
          loginMethod === "google"
            ? "text-purple-700 border-b-2 border-purple-700"
            : "text-gray-500"
        }`}
        onClick={() => setLoginMethod("google")}
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
                <GoogleSigninBtn/>
                
                {/* Instructions for Google login */}
                <p className="text-sm text-gray-600 mt-4">
                  You&apos;ll still need to provide your birth details after connecting with Google
                </p>
              </div>
            )}
            {/* Forgot Password & Sign Up Links */}
            <div className="mt-6 text-center text-sm">
              <a href="#" className="text-purple-700 hover:underline">Forgot password?</a>
              <span className="mx-2 text-gray-500">•</span>
              <a href="#" className="text-purple-700 hover:underline">Create an account</a>
            </div>

    </>
  );
};

export default LoginMethodTab;
