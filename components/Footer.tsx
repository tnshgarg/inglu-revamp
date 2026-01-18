import React from 'react';
import { Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-inglu-black text-white pt-24 pb-12 rounded-t-[40px] mt-[-60px] relative z-20">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-32">
           {/* Contact Button & Address */}
            <div className="flex flex-col gap-6">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">INGLU GLOBAL</h3>
                <div className="flex flex-col gap-4 text-gray-400 font-medium">
                   <p>Connecting students with the best opportunities nationwide.</p>
                   <div className="flex flex-col gap-1">
                      <p className="font-bold text-white">HEADQUARTERS</p>
                      <p>New Delhi, India</p>
                   </div>
                   <div className="flex flex-col gap-1">
                      <p className="font-bold text-white">CONTACT</p>
                      <p>info@ingluglobal.in</p>
                      <p>+91 7827808413</p>
                   </div>
                </div>
            </div>
           {/* Navigation Links */}
           <div className="flex flex-wrap gap-8 md:gap-12">
              {['HOME', 'INTERNSHIPS', 'STORE', 'CONTACT'].map((link) => (
                <a key={link} href={`#${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="font-display font-bold uppercase tracking-wider hover:text-gray-300 transition-colors">
                  {link}
                </a>
              ))}
           </div>
        </div>

        {/* Big Email */}
        <div className="border-b border-white/10 pb-12 mb-12">
           <h2 className="text-[8vw] md:text-[9vw] font-display font-bold leading-none tracking-tight text-center md:text-right break-all md:break-normal bg-gradient-to-b from-white to-gray-500 bg-clip-text text-transparent opacity-90">
             INFO@INGLUGLOBAL.IN
           </h2>
        </div>

        {/* Bottom Section */}
         <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold uppercase tracking-wider text-gray-500">
            <p>© 2026 INGLU GLOBAL</p>
            <div className="flex gap-8">
               <a href="#" className="hover:text-white transition-colors">TERMS AND CONDITIONS</a>
               <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            </div>
         </div>
      </div>
    </footer>
  );
};

export default Footer;
