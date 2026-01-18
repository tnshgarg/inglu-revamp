import React from 'react';
import { Users, BookOpen, Gamepad2, Heart } from 'lucide-react';

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "STUDENTS EDUCATED",
      description: "Empowering youth through impactful courses.",
      color: "text-blue",
      bgColor: "bg-blue/10",
      iconColor: "text-blue"
    },
    {
      icon: BookOpen,
      value: "100K+",
      label: "INTERNSHIP OPPORTUNITIES",
      description: "Real-world experience for the next generation.",
      color: "text-mint",
      bgColor: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: Gamepad2,
      value: "1000+",
      label: "BRANDS PARTNERED",
      description: "Delivering youth marketing services to leaders.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
      iconColor: "text-orange-500"
    },
    {
      icon: Heart,
      value: "500+",
      label: "EVENTS ORGANIZED",
      description: "Inspiring young minds across the country.",
      color: "text-purple",
      bgColor: "bg-pink-400/10",
      iconColor: "text-pink-400"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col space-y-3 text-center items-center">
            <div className={`p-3 rounded-lg ${stat.bgColor} w-fit`}>
              <stat.icon className={`w-8 h-8 ${stat.iconColor}`} strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-4xl font-display font-bold text-inglu-black mb-1">
                {stat.value}
              </h3>
              <p className="text-sm font-bold text-inglu-black tracking-wide uppercase mb-2">
                {stat.label}
              </p>
              <p className="text-gray-600 text-sm leading-relaxed max-w-[250px]">
                {stat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
