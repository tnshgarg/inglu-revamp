import React from 'react';
import { ArrowRight, Briefcase, GraduationCap, Users } from 'lucide-react';
import Image from 'next/image';

const InternshipSection = () => {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
           <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-blue/10 mb-2">
            <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2 text-blue">
              <span className="text-xs">★</span> CAREER KICKSTARTER
            </span>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9]">
            FIND YOUR DREAM <br />
            <span className="relative inline-block">
              <span className="relative z-10">INTERNSHIP</span>
               <div className="absolute inset-0 bg-blue/20 -skew-y-1 -rotate-1 scale-110 z-0 rounded-md top-2 h-[80%]"></div>
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
            Gain real-world experience, build your resume, and get hired by top companies. We connect students with the best opportunities across India.
          </p>

          <div className="space-y-4">
             {[
               { icon: Briefcase, text: "100+ Partner Companies" },
               { icon: GraduationCap, text: "Certificate of Completion" },
               { icon: Users, text: "Mentorship from Industry Experts" }
             ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                   <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-inglu-black" />
                   </div>
                   <span className="font-bold text-gray-700">{item.text}</span>
                </div>
             ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="flex items-center justify-center gap-2 px-8 py-4 bg-inglu-black text-white font-bold uppercase tracking-wide text-sm rounded-xl hover:bg-black/80 transition-all hover:scale-105 shadow-lg shadow-blue/20">
                BROWSE OPPORTUNITIES <ArrowRight className="w-4 h-4" />
            </button>
             <button className="flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-bold uppercase tracking-wide text-sm rounded-xl hover:bg-[#20bd5a] transition-all hover:scale-105 shadow-lg border-2 border-transparent">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg> 
                CHAT WITH COUNSELOR
            </button>
          </div>
        </div>

        {/* Right Visual / Form Placeholder */}
        <div className="relative">
           <div className="absolute inset-0 bg-gradient-to-tr from-blue/20 to-purple/20 rounded-3xl transform rotate-3"></div>
           <div className="bg-white border border-gray-100 rounded-3xl p-8 relative shadow-xl">
              <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
                 <span className="font-display font-bold text-2xl text-inglu-black">TOP DOMAINS</span>
                 <span className="text-xs font-bold bg-green-100 text-green-700 px-3 py-1 rounded-full animate-pulse">LIVE NOW</span>
              </div>
              
              <div className="space-y-4">
                 {[
                   { name: "Digital Marketing", count: "120+ Openings", color: "bg-blue/10 text-blue" },
                   { name: "Human Resources", count: "85+ Openings", color: "bg-purple/10 text-purple" },
                   { name: "Web Development", count: "50+ Openings", color: "bg-orange-100 text-orange-500" },
                   { name: "Content Writing", count: "200+ Openings", color: "bg-green-100 text-green-600" },
                 ].map((domain, i) => (
                    <div key={i} className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group border border-transparent hover:border-gray-100">
                       <div className="flex items-center gap-4">
                          <div className={`w-10 h-10 rounded-lg ${domain.color} flex items-center justify-center font-bold text-lg`}>
                             {domain.name[0]}
                          </div>
                          <div>
                             <h4 className="font-bold text-inglu-black">{domain.name}</h4>
                             <p className="text-xs text-gray-400 font-medium">{domain.count}</p>
                          </div>
                       </div>
                       <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-inglu-black transition-colors" />
                    </div>
                 ))}
              </div>

               <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                  <p className="text-xs text-gray-400 font-medium uppercase tracking-wider mb-2">Join 50,000+ Students</p>
                  <div className="flex justify-center -space-x-2">
                     {[1,2,3,4].map((_, i) => (
                        <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
                     ))}
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
