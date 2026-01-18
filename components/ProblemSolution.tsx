import React from 'react';
import { MessageSquare, Zap, Users, ArrowLeftRight } from 'lucide-react';

const ProblemSolution = () => {
  const problems = [
    {
      icon: MessageSquare,
      text: "LACK OF PRACTICAL SKILLS",
      color: "bg-blue/20",
      iconColor: "text-blue",
      border: "border-blue"
    },
    {
      icon: Zap,
      text: "NO REAL-WORLD EXPERIENCE",
      color: "bg-green-100",
      iconColor: "text-green-600",
      border: "border-green-200"
    },
    {
      icon: Users,
      text: "LIMITED NETWORKING OPPORTUNITIES",
      color: "bg-orange-100",
      iconColor: "text-orange-500",
      border: "border-orange-200"  
    },
    {
      icon: ArrowLeftRight,
      text: "FEELING LOST IN CAREER PATH",
      color: "bg-pink-100",
      iconColor: "text-pink-400",
      border: "border-pink-200"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-gray-50">
            <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs">★</span> PROBLEM & SOLUTION
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9]">
            WHY <span className="text-gray-400">STUDENT LIFE</span> <br />
            FEELS <br />
            <span className="relative inline-block">
              <span className="relative z-10">CONFUSING?</span>
              <div className="absolute inset-0 bg-green-500/20 -skew-y-2 -rotate-2 scale-110 z-0 rounded-md"></div>
               {/* Brush stroke simulation */}
               <svg className="absolute w-full h-full left-0 top-0 text-green-500/30 -z-10 scale-125" viewBox="0 0 100 100" preserveAspectRatio="none"> 
                  {/* Abstract brush path could go here but simple bg is cleaner for now */}
               </svg>
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-lg">
            We bridge the gap between college and career with expert workshops, internships, and a vibrant community.
          </p>

          <div className="flex flex-wrap gap-4">
             <button className="px-8 py-3 bg-inglu-black text-white font-bold uppercase tracking-wide text-sm rounded hover:bg-black/80 transition-colors">
              LEARN MORE
            </button>
             <button className="px-8 py-3 bg-gray-100 text-inglu-black font-bold uppercase tracking-wide text-sm rounded hover:bg-gray-200 transition-colors">
              WATCH VIDEO
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-4">
          {problems.map((item, index) => (
            <div key={index} className={`flex items-center gap-4 p-6 rounded-2xl ${item.color} transition-transform hover:-translate-y-1`}>
              <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              <span className="font-display font-bold text-xl md:text-2xl text-inglu-black uppercase tracking-wide">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
