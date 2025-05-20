import React from 'react';
import { Link } from 'react-router-dom';
interface AuthLayoutProps {
  children: React.ReactNode;
}
export function AuthLayout({
  children
}: AuthLayoutProps) {
  return <div className="min-h-screen bg-gray-50">
      <div className="flex min-h-full flex-1 flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <Link to="/" className="flex justify-center">
            <span className="text-2xl font-bold text-blue-600">
              LogiConnect
            </span>
          </Link>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-[480px]">
          <div className="bg-white px-6 py-12 shadow sm:rounded-lg sm:px-12">
            {children}
          </div>
        </div>
      </div>
    </div>;
}