import React from 'react';
export function Testimonials() {
  const testimonials = [{
    content: "This platform has transformed how we handle our logistics. The escrow system gives us peace of mind, and we've reduced delivery costs by 20%.",
    author: 'Sarah Johnson',
    role: 'Operations Manager, TechRetail Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    content: 'As a logistics provider, this platform has helped us grow our business by connecting us with new clients and streamlining our payment process.',
    author: 'Michael Chen',
    role: 'CEO, FastTrack Logistics',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }, {
    content: "The verification process gave us confidence in the logistics partners we work with. We've had zero issues since we started using this platform.",
    author: 'Emily Rodriguez',
    role: 'Supply Chain Director, Global Foods',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }];
  return <section id="testimonials" className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">
            Testimonials
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Businesses and Logistics Partners
          </p>
        </div>
        <div className="mt-12 space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="lg:col-span-1">
              <div className="h-full bg-white shadow rounded-lg p-8 flex flex-col">
                <div className="flex-grow">
                  <blockquote>
                    <p className="text-lg text-gray-500">
                      "{testimonial.content}"
                    </p>
                  </blockquote>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={testimonial.image} alt="" />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {testimonial.author}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}