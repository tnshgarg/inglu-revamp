import React from 'react';
import Image from 'next/image';
import { Apple, Play } from 'lucide-react';
import FadeIn from './FadeIn';

const AppDownloadSection = () => {
  return (
    <section className="container mx-auto px-4 py-20 text-center overflow-hidden">
       <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white mb-8">
          <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="text-xs">★</span> GET THE APP
          </span>
        </div>
      
      <FadeIn direction="up">
        <h2 className="text-6xl md:text-8xl font-display font-bold text-inglu-black leading-[0.9] mb-8 relative z-10">
          YOUR BEST YOUTH <br />
          YEARS <span className="relative inline-block">
            <span className="relative z-10">START NOW</span>
             {/* Yellow Highlight */}
             <div className="absolute inset-0 bg-yellow-300/60 -skew-y-1 -rotate-1 scale-110 z-0 rounded-md top-2 h-[80%] blur-sm"></div>
          </span>
        </h2>
      </FadeIn>

      <FadeIn delay={0.2} direction="up">
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto mb-12">
          Join the thousands of students already transforming their futures with Inglu.
        </p>
      </FadeIn>

      <FadeIn delay={0.4} direction="up">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-24 relative z-10">
          <button className="flex items-center gap-3 px-6 py-4 bg-inglu-black text-white rounded-xl hover:bg-black/80 transition-all hover:scale-105">
             <Apple fill="white" className="w-6 h-6" />
             <div className="text-left">
               <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">GET THE</div>
               <div className="text-sm font-bold leading-none">APPSTORE</div>
             </div>
          </button>
           <button className="flex items-center gap-3 px-6 py-4 bg-inglu-black text-white rounded-xl hover:bg-black/80 transition-all hover:scale-105">
             <Play fill="white" className="w-6 h-6 border-l" />
             <div className="text-left">
               <div className="text-[10px] uppercase font-bold tracking-wider opacity-70">GET THE</div>
               <div className="text-sm font-bold leading-none">PLAYSTORE</div>
             </div>
          </button>
        </div>
      </FadeIn>
    </section>
  );
};

export default AppDownloadSection;
