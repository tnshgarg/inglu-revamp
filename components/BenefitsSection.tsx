import React from 'react';
import Image from 'next/image';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "EDUCATION",
      image: "/benefits/guides.png", // Keeping placeholder for now, ideally update
      alt: "Education symbol"
    },
    {
      title: "ENHANCEMENT",
      image: "/benefits/roadmaps.png",
      alt: "Enhancement symbol"
    },
    {
      title: "ENTERTAINMENT",
      image: "/benefits/community.png",
      alt: "Entertainment symbol"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-3xl">
           <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
            <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs">★</span> OUR METHOD
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9]">
            EXPERIENCE THE <br />
            <span className="relative inline-block">
              <span className="relative z-10">E3 MODEL</span>
               {/* Purple Brush stroke */}
              <div className="absolute inset-0 bg-purple/20 -skew-y-1 -rotate-1 scale-110 z-0 rounded-md top-2 h-[80%]"></div>
            </span>
          </h2>
        </div>
        
        <button className="px-8 py-3 bg-inglu-black text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-black/80 transition-colors shrink-0 self-start md:self-end">
          LEARN MORE
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {benefits.map((benefit, index) => (
          <div key={index} className="bg-black rounded-3xl overflow-hidden aspect-[4/5] relative group border border-gray-800">
             <div className="absolute top-6 left-6 z-10">
               <h3 className="text-white font-display font-bold text-3xl uppercase max-w-[200px] leading-none">
                 {benefit.title}
               </h3>
             </div>
             
             <div className="absolute inset-0 top-16 flex items-end justify-center p-0">
                <div className="relative w-full h-[85%] transition-transform duration-500 group-hover:scale-105">
                   <Image
                     src={benefit.image}
                     alt={benefit.alt}
                     fill
                     className="object-cover"
                   />
                </div>
             </div>
             {/* Gradient Overlay for text readability if needed */}
             <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent pointer-events-none"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BenefitsSection;
