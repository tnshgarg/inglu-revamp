"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import AuthModal from './AuthModal';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAuthOpen, setIsAuthOpen] = useState(false);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300">
                <div className="max-w-7xl mx-auto flex justify-between items-center bg-white/70 backdrop-blur-xl p-3 pr-4 rounded-full border border-white/20 shadow-sm ring-1 ring-black/5">
                    
                    {/* Logo */}
                    <div className="flex items-center gap-2 pl-2">
                        <Image 
                            src="/logo.webp" 
                            alt="Inglu Global" 
                            width={140} 
                            height={56} 
                            className="h-14 w-auto object-contain"
                            priority
                        />
                    </div>

                    {/* Desktop Links */}
                    <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                        <a href="#" className="hover:text-inglu-black transition-colors">Home</a>
                        <a href="#internships" className="hover:text-inglu-black transition-colors">Internships</a>
                        <a href="#store-section" className="hover:text-inglu-black transition-colors">Store</a>
                        <a href="#footer" className="hover:text-inglu-black transition-colors">Contact</a>
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                         <button 
                            onClick={() => setIsAuthOpen(true)}
                            className="px-6 py-2.5 bg-inglu-black text-white rounded-full text-xs font-bold hover:bg-black/80 transition-all shadow-lg shadow-black/10"
                         >
                            LOGIN
                         </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-inglu-black">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-24 left-4 right-4 bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4">
                         <div className="flex flex-col gap-4 text-center font-medium text-lg text-gray-600">
                            <a href="#" onClick={() => setIsOpen(false)}>Home</a>
                            <a href="#internships" onClick={() => setIsOpen(false)}>Internships</a>
                            <a href="#store-section" onClick={() => setIsOpen(false)}>Store</a>
                         </div>
                         <button 
                            onClick={() => { setIsOpen(false); setIsAuthOpen(true); }}
                            className="w-full py-4 bg-inglu-black text-white rounded-xl font-bold"
                         >
                            Login
                         </button>
                    </div>
                )}
            </nav>

            {/* Auth Modal */}
            <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
        </>
    );
};

export default Navbar;
