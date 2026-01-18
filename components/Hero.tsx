"use client";
import Image from "next/image";
import { ArrowRight, ArrowRightCircle, Play, Star } from "lucide-react";
import Navbar from "./Navbar";
import FadeIn from "./FadeIn";

export default function Hero() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden flex flex-col font-sans bg-grid-pattern">
      {/* Navigation */}
      <Navbar />

      {/* Main Content - Full Width Grid */}
      <main className="flex-grow grid lg:grid-cols-2 w-full pt-16 lg:pt-16">
        
        {/* Left Visuals (Illustration) - Edge to Edge */}
        <div className="relative order-2 lg:order-1 h-[50vh] lg:h-auto w-full flex items-center justify-center overflow-hidden">
             {/* Abstract background blobs for depth */}
          <div className="absolute top-0 left-0 w-full h-full bg-mint/10 blur-3xl rounded-full -z-10 transform -translate-x-10 scale-110"></div>
          
           {/* 
              In a real scenario, we'd want a "collage" image that bleeds to the edges. 
              We'll scale the existing one to feel "fuller" in this space.
           */}
          <FadeIn delay={0.2} direction="right" className="relative z-10 w-full h-full p-8 lg:p-16 flex items-center justify-center">
             <Image 
               src="/hero-illustration.png" 
               alt="Students Connecting" 
               width={800} 
               height={800}
               className="object-contain max-h-full"
               priority
             />
          </FadeIn>

           {/* Floating 'Sticker' Elements */}
           <FadeIn delay={0.6} className="absolute bottom-10 left-10 hidden md:block z-20">
              <div className="animate-float-slow bg-blue p-4 rounded-xl rotate-[-6deg] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <span className="font-display text-3xl uppercase text-white">Fun!</span>
              </div>
           </FadeIn>
           
           <FadeIn delay={0.8} className="absolute top-20 right-10 hidden md:block z-20">
              <div className="animate-float-delayed bg-purple p-4 rounded-full rotate-[12deg] border-[3px] border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <Star className="w-10 h-10 text-white fill-current" />
              </div>
           </FadeIn>
        </div>

        {/* Right Content */}
        <div className="order-1 lg:order-2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 lg:px-20 py-12 space-y-8 bg-white relative z-10">
          
          <FadeIn direction="up">
            <div className="w-fit border border-gray-200 rounded-full px-4 py-1 flex items-center gap-2 mb-2 shadow-sm">
               <Star size={14} fill="black" />
               <span className="text-xs font-bold tracking-widest uppercase text-gray-600">Best Student Services</span>
            </div>
            
            <h1 className="font-display text-[5rem] xl:text-[7rem] leading-[0.85] uppercase text-inglu-black tracking-tighter">
              WORLD'S <br/>
              FASTEST <br/>
              <span className="relative inline-block z-10">
                  GROWING
                  <span className="absolute -z-10 bottom-2 left-0 h-4 bg-purple/40 -rotate-1 rounded-sm animate-highlight"></span>
              </span> <br/>
              YOUTH COMMUNITY
            </h1>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
             <p className="text-lg md:text-xl font-medium text-gray-500 max-w-lg leading-relaxed">
              Join India's most vibrant student community. Access premium notes, exclusive internships, and events that shape your future.
             </p>
          </FadeIn>

          {/* WhatsApp Funnel CTA */}
          <FadeIn delay={0.4} direction="up">
             <div className="flex flex-col sm:flex-row items-center gap-6 pt-6">
                <button 
                   onClick={() => window.open('https://web.whatsapp.com/send?phone=919990461299&text=Hello!%20I%27m%20using%20INGLU%20GLOBAL%20website%20need%20your%20help', '_blank')}
                   className="group flex items-center gap-3 bg-[#25D366] text-white px-6 py-3.5 rounded-full hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg shadow-green-500/20 active:scale-95"
                >
                   <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                   </svg>
                   <span className="font-bold font-display text-lg tracking-wide">Join Community</span>
                </button>
                
                <p className="text-sm font-medium text-gray-500 border-l-2 border-gray-200 pl-4 py-1 max-w-xs leading-relaxed">
                   <span className="text-gray-900 font-bold">450+ Students</span> already joined for notes & internships.
                </p>
             </div>
          </FadeIn>
        </div>

      </main>
    </div>
  );
}
