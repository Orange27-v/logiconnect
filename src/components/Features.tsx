import React from 'react';
import { ShieldCheck, Clock, DollarSign, Users } from 'lucide-react';
export function Features() {
  const features = [{
    title: 'Secure Payments',
    description: 'Our escrow system ensures that payments are only released when deliveries are completed successfully.',
    icon: <ShieldCheck className="h-6 w-6 text-blue-500" />
  }, {
    title: 'Real-time Tracking',
    description: 'Track your deliveries in real-time from pickup to delivery with our advanced tracking system.',
    icon: <Clock className="h-6 w-6 text-blue-500" />
  }, {
    title: 'Competitive Pricing',
    description: 'Get the best rates through our competitive marketplace of verified logistics providers.',
    icon: <DollarSign className="h-6 w-6 text-blue-500" />
  }, {
    title: 'Verified Partners',
    description: 'All logistics companies undergo thorough KYC verification to ensure reliability and trustworthiness.',
    icon: <Users className="h-6 w-6 text-blue-500" />
  }];
  return <section id="features" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Features
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything You Need in One Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our comprehensive logistics platform provides all the tools needed
            for successful deliveries.
          </p>
        </div>
        <div className="mt-10">
          <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature, index) => <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-50 text-white">
                    {feature.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {feature.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {feature.description}
                </dd>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}