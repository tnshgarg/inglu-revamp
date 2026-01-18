"use client";

import React from 'react';
import { BookOpen, Rocket, Music, ArrowDown } from 'lucide-react';

const ConceptSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
         <span className="text-xs font-bold text-gray-400 tracking-widest uppercase mb-4 block">Our Unique Approach</span>
         <h2 className="text-5xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9]">
            THE <span className="text-blue">3E MODEL</span>
         </h2>
         <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
            A holistic ecosystem designed to help you Learn, Grow, and Belong.
         </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Education */}
        <div 
            onClick={() => scrollToSection('store-section')}
            className="group relative bg-blue/5 border border-blue/10 rounded-3xl p-8 hover:bg-blue/10 transition-all cursor-pointer hover:scale-[1.02] duration-300"
        >
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-blue flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-display font-bold text-inglu-black mb-3">EDUCATION</h3>
            <p className="text-gray-600 mb-8 min-h-[60px]">
                Ace your college exams with curated PYQs, notes, and expert academic guides.
            </p>
            <div className="flex items-center gap-2 text-blue font-bold text-sm uppercase tracking-wide">
                <span>Go to Store</span> <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
        </div>

         {/* Enhancement */}
         <div 
             onClick={() => scrollToSection('internship-section')}
             className="group relative bg-purple/5 border border-purple/10 rounded-3xl p-8 hover:bg-purple/10 transition-all cursor-pointer hover:scale-[1.02] duration-300 transform md:-translate-y-4 shadow-xl shadow-purple/5"
         >
            <div className="absolute top-4 right-4 bg-purple text-white text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-wider">Most Popular</div>
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-purple flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Rocket className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-display font-bold text-inglu-black mb-3">ENHANCEMENT</h3>
            <p className="text-gray-600 mb-8 min-h-[60px]">
                Build your resume with internships, workshops, and real-world skills.
            </p>
            <div className="flex items-center gap-2 text-purple font-bold text-sm uppercase tracking-wide">
                <span>Find Internships</span> <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
        </div>

         {/* Entertainment */}
         <div 
            onClick={() => scrollToSection('membership-section')}
            className="group relative bg-pink-500/5 border border-pink-200 rounded-3xl p-8 hover:bg-pink-100 transition-all cursor-pointer hover:scale-[1.02] duration-300"
         >
            <div className="w-14 h-14 rounded-2xl bg-white shadow-sm text-pink-500 flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform">
                <Music className="w-7 h-7" />
            </div>
            <h3 className="text-3xl font-display font-bold text-inglu-black mb-3">ENTERTAINMENT</h3>
            <p className="text-gray-600 mb-8 min-h-[60px]">
                Join the most happening student community. Events, trips, and parties.
            </p>
            <div className="flex items-center gap-2 text-pink-500 font-bold text-sm uppercase tracking-wide">
                <span>Join the Club</span> <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
        </div>
      </div>
    </section>
  );
};

export default ConceptSection;
