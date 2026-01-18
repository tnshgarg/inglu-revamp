"use client";

import React from 'react';

const ScrollingBanner = () => {
  return (
    <div className="w-full bg-gray-50 py-12 overflow-hidden flex whitespace-nowrap relative">
      <div className="animate-marquee inline-block">
        <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
        <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
         <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
      </div>
      <div className="animate-marquee inline-block absolute top-0 py-12" aria-hidden="true" style={{ left: '100%' }}>
         <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
        <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
         <span className="text-4xl md:text-6xl font-display font-bold text-inglu-black mx-4">
          EDUCATION + ENHANCEMENT + ENTERTAINMENT <span className="mx-4">★</span>
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;
