import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
export function SignupPage() {
  const [userType, setUserType] = useState<'business' | 'provider'>('business');
  return <AuthLayout>
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
          </h2>
          <p className="mt-2 text-sm leading-6 text-gray-500">
            Already have an account?{' '}
            <Link to="/login" className="font-semibold text-blue-600 hover:text-blue-500">
              Sign in
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
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input type="text" name="first-name" id="first-name" autoComplete="given-name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input type="text" name="last-name" id="last-name" autoComplete="family-name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>
          </div>
          {userType === 'business' ? <div>
              <label htmlFor="company" className="block text-sm font-medium leading-6 text-gray-900">
                Company name
              </label>
              <div className="mt-2">
                <input type="text" name="company" id="company" autoComplete="organization" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div> : <div>
              <label htmlFor="logistics-company" className="block text-sm font-medium leading-6 text-gray-900">
                Logistics company name
              </label>
              <div className="mt-2">
                <input type="text" name="logistics-company" id="logistics-company" autoComplete="organization" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
              </div>
            </div>}
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
              <input id="password" name="password" type="password" autoComplete="new-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 px-3" />
            </div>
          </div>
          <div>
            <button type="submit" className="flex w-full justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
              Create account
            </button>
          </div>
        </form>
      </div>
    </AuthLayout>;
}