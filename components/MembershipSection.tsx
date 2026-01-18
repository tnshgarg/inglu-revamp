"use client";
import React, { useState } from 'react';
import { Check, Crown, Ticket, Users } from 'lucide-react';
import AuthModal from './AuthModal';

const MembershipSection = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <section className="container mx-auto px-4 py-24">
       <div className="bg-inglu-black rounded-[40px] p-8 md:p-16 text-center text-white relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple/20 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue/20 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto">
             <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/10 mb-8 backdrop-blur-sm">
               <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
                 <Crown className="w-4 h-4 text-yellow" /> EXCLUSIVE CLUB
               </span>
             </div>
             
             <h2 className="text-5xl md:text-7xl font-display font-bold leading-[0.9] mb-8">
               UNLOCK THE FULL <br />
               <span className="text-blue">INGLU EXPERIENCE</span>
             </h2>

             <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
               Join the elite community of students. Get priority access to events, exclusive discounts on trips, and premium certification courses.
             </p>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-16">
                 {/* Card 1 */}
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-blue/20 text-blue flex items-center justify-center mb-4">
                       <Ticket className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Priority Event Access</h3>
                    <p className="text-sm text-gray-400">Never miss a concert or workshop. Get tickets before everyone else.</p>
                 </div>
                 {/* Card 2 */}
                 <div className="bg-white/5 border border-white/10 rounded-2xl p-6 text-left hover:bg-white/10 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-purple/20 text-purple flex items-center justify-center mb-4">
                       <Users className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-xl mb-2">Networking Dinners</h3>
                    <p className="text-sm text-gray-400">Exclusive invites to dinner with founders and industry leaders.</p>
                 </div>
             </div>

             {/* YouTube Embed */}
             <div className="mb-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl max-w-3xl mx-auto aspect-video">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/UUxRK9Nk4v0?si=OdbG5X8_S_T4gJk_" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
             </div>

             <button 
               onClick={() => setIsAuthOpen(true)}
               className="px-12 py-5 bg-white text-inglu-black font-bold uppercase tracking-wide text-sm rounded-full hover:bg-gray-200 transition-all hover:scale-105 shadow-xl shadow-white/10"
             >
               BECOME A MEMBER
             </button>
             <p className="mt-4 text-xs text-gray-500 font-bold tracking-widest uppercase">Starting at just ₹99/Month</p>
          </div>
       </div>

       {/* Auth Modal */}
       <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </section>
  );
};

export default MembershipSection;
