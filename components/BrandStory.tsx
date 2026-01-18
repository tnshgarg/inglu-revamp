"use client";
import React from 'react';
import { Sparkles, Quote } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="flex justify-center mb-8">
             <Quote className="w-12 h-12 text-blue-200 fill-current opacity-50 rotate-180" />
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-inglu-black leading-[0.9] mx-auto uppercase tracking-wide">
            "Inglu isn't just a community, it's a <span className="text-blue px-1">Launchpad</span> for dreams. We bridge the gap between <span className="text-purple border-b-4 border-purple/30 px-1">classroom variable</span> and <span className="text-blue border-b-4 border-blue/30 px-1">corporate reality</span>."
          </h2>

          <div className="mt-12 flex items-center justify-center gap-4">
             <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-gray-300"></div>
             <p className="font-sans font-bold text-sm tracking-widest text-gray-400 uppercase">Our Philosophy</p>
             <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-gray-300"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
