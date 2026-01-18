import React from 'react';
import { Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Inglu helped me find my first internship and gave me the confidence to network with industry leaders. Truly a game changer.",
      name: "ARYAN S.",
      sub: "Student, Delhi University",
      initial: "A",
      color: "bg-blue"
    },
    {
      text: "The events are not just fun but also great for learning. I made so many friends and learned skills I couldn't find in college.",
      name: "PRIYA K.",
      sub: "Student, Mumbai University",
      initial: "P",
      color: "bg-purple"
    },
    {
      text: "From workshops to trips, Inglu has been the highlight of my college life. I feel ready for the corporate world now.",
      name: "RAHUL M.",
      sub: "Engineering Student",
      initial: "R",
      color: "bg-blue"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-24 bg-gray-50/50">
       <div className="text-center mb-16">
         <div className="inline-block px-4 py-2 rounded-full border border-gray-200 bg-white mb-6">
            <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="text-xs">★</span> TESTIMONIALS
            </span>
          </div>
         <h2 className="text-5xl md:text-7xl font-display font-bold text-inglu-black leading-[0.9] max-w-4xl mx-auto">
            TRUSTED <span className="relative inline-block">
              <span className="relative z-10">BY STUDENTS</span>
              {/* Purple Brush stroke */}
              <div className="absolute inset-0 bg-purple/20 -skew-y-1 -rotate-1 scale-110 z-0 rounded-md top-4 h-[60%]"></div>
            </span> <br />
            ACROSS INDIA
        </h2>
         <p className="text-gray-600 mt-6">
            Building fluent futures for 50,000+ learners and counting.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-between h-full">
            <div>
               <Quote className="text-gray-200 w-12 h-12 mb-6 fill-current" />
               <p className="text-gray-700 font-medium text-lg mb-8 leading-relaxed">
                 {t.text}
               </p>
            </div>
            
            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
               <div className={`w-12 h-12 rounded-full ${t.color} flex items-center justify-center text-white font-bold text-xl`}>
                 {t.initial}
               </div>
               <div>
                  <h4 className="font-bold text-inglu-black font-display tracking-wide uppercase">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wide">{t.sub}</p>
               </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
