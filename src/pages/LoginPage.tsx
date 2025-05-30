import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
export function LoginPage() {
  const [userType, setUserType] = useState<'business' | 'provider'>('business');
  return <AuthLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Don't have an account?{' '}
            <Link to="/signup" className="font-semibold text-blue-600 hover:text-blue-500">
              Sign up
            </Link>
          </p>
        </div>
        <div className="flex space-x-4">
          <button onClick={() => setUserType('business')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${userType === 'business' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
            Business
          </button>
          <button onClick={() => setUserType('provider')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium ${userType === 'provider' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
            Logistics Provider
          </button>
        </div>
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input id="email" name="email" type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2">
              <input id="password" name="password" type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-600" />
              <label htmlFor="remember-me" className="ml-3 block text-sm leading-6 text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm leading-6">
              <a href="#" className="font-semibold text-blue-600 hover:text-blue-500">
                Forgot password?
              </a>
            </div>
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>;
}