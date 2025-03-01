// 'use client';
// import { useState } from 'react';
// import { GoogleSigninBtn } from '../Components/Buttons';
import { auth } from '@/auth';
import LoginMethodTab from '../Components/LoginMethodTab';
import { SignoutBtn } from '../Components/Buttons';
import MobileMenu from '../Components/MobileMenu';

export default async function Login() {
  const session = await auth();

  return (
    <div className="min-h-screen bg-slate-50">


      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">

            {session && session.user ? (
              <>
              <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
              Welcome {session.user.name}
              
            </h1>
            <SignoutBtn/>
            </>
            ) : (
              <>
              <h1 className="text-3xl font-bold text-purple-800 text-center mb-6">
              Log in
            </h1>
            <LoginMethodTab/>
            </>
            )}
            
            
            
            {/* Login Method Tabs */}
            
            <MobileMenu/>
            

            
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