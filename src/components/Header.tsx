import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link to="/" className="text-xl font-bold text-blue-600">
                LogiConnect
              </Link>
            </div>
          </div>
          <nav className="hidden md:ml-6 md:flex md:space-x-8">
            <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              How It Works
            </a>
            <a href="#features" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Features
            </a>
            <a href="#testimonials" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Testimonials
            </a>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login" className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-medium">
              Sign Up
            </Link>
          </div>
          <div className="flex md:hidden">
            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileMenuOpen && <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#how-it-works" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              How It Works
            </a>
            <a href="#features" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Features
            </a>
            <a href="#testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Testimonials
            </a>
            <a href="#" className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50">
              Login
            </a>
            <a href="#" className="block w-full text-center px-3 py-2 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md">
              Sign Up
            </a>
          </div>
        </div>}
    </header>;
}