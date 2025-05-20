import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { HowItWorks } from '../components/HowItWorks';
import { Features } from '../components/Features';
import { Testimonials } from '../components/Testimonials';
import { CallToAction } from '../components/CallToAction';
import { Footer } from '../components/Footer';
export function LandingPage() {
  return <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow">
        <Hero />
        <HowItWorks />
        <Features />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>;
}