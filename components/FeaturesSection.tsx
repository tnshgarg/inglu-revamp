import React from 'react';
import Image from 'next/image';

const FeaturesSection = () => {
  const features = [
    {
      title: "INGLU EVENTS",
      description: "We curate, organize, and partner with the most happening events. From artist management to production, we create unforgettable experiences.",
      image: "/features/guidance.png",
      alt: "Inglu Events",
      reversed: false
    },
    {
      title: "INGLU EDUCATION",
      description: "Skill-based learning that matters. We provide courses and certifications that help you grow practically for your future career.",
      image: "/features/milestones.png",
      alt: "Inglu Education",
      reversed: true
    },
    {
      title: "INGLU CREATORS & E-SPORTS",
      description: "Empowering budding creators and gamers. Whether it's competitive gaming or creative expression, we provide the platform you need to shine.",
      image: "/features/playful.png",
      alt: "Inglu Creators",
      reversed: false
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 space-y-20">
       {/* Section Title */}
      <div className="text-center mb-16">
         <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-gray-50 mb-6">
            <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs">★</span> SEGMENTS
            </span>
          </div>
        <h2 className="text-5xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9]">
          DISCOVER OUR <br />
           <span className="relative inline-block">
              <span className="relative z-10">DIVERSE WORLD</span>
              {/* Blue Brush stroke */}
              <div className="absolute inset-0 bg-blue/20 -skew-y-1 -rotate-1 scale-110 z-0 rounded-md top-2 h-[80%]"></div>
           </span>
        </h2>
         <p className="text-gray-600 mt-8 max-w-2xl mx-auto text-lg">
          From education and events to gaming and travel, Inglu offers a segment for every passion.
        </p>
      </div>

      {features.map((feature, index) => (
        <div key={index} className={`flex flex-col ${feature.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>
          {/* Image Side */}
          <div className="flex-1 w-full flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square">
               <Image 
                 src={feature.image} 
                 alt={feature.alt}
                 fill
                 className="object-contain"
               />
            </div>
          </div>

          {/* Text Side */}
          <div className="flex-1 space-y-6">
            <h3 className="text-4xl md:text-5xl font-display font-bold text-inglu-black uppercase leading-none">
              {feature.title}
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {feature.description}
            </p>
             <button className="px-8 py-3 bg-inglu-black text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-black/80 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default FeaturesSection;
