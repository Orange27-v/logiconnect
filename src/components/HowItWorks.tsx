import React from 'react';
import { PackageOpen, Truck, Shield, CheckCircle } from 'lucide-react';
export function HowItWorks() {
  const steps = [{
    title: 'Request Delivery',
    description: 'Businesses submit delivery requests with all necessary details including pickup, delivery, and package information.',
    icon: <PackageOpen className="h-10 w-10 text-blue-500" />
  }, {
    title: 'Get Matched',
    description: 'Qualified logistics companies bid on your delivery request or get automatically matched based on your requirements.',
    icon: <Truck className="h-10 w-10 text-blue-500" />
  }, {
    title: 'Secure Payment',
    description: 'Payment is held in escrow until delivery is completed successfully, protecting both parties.',
    icon: <Shield className="h-10 w-10 text-blue-500" />
  }, {
    title: 'Delivery Confirmation',
    description: 'Once delivery is confirmed, payment is released to the logistics company and the transaction is complete.',
    icon: <CheckCircle className="h-10 w-10 text-blue-500" />
  }];
  return <section id="how-it-works" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            How It Works
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple, Secure, Efficient
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our platform connects businesses with trusted logistics partners
            through a simple four-step process.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {steps.map((step, index) => <div key={index} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-white border border-blue-100 text-white">
                    {step.icon}
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {step.title}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  {step.description}
                </dd>
              </div>)}
          </dl>
        </div>
      </div>
    </section>;
}