"use client";
import React, { useState } from 'react';
import { X, Mail, Lock, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'login' | 'signup';
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, defaultTab = 'login' }) => {
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl w-full max-w-md overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        <div className="flex flex-col">
          {/* Header Image/Banner */}
          <div className="h-32 bg-inglu-black relative overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20"></div>
             <Image 
                src="/logo.webp" 
                alt="Inglu" 
                width={120} 
                height={50} 
                className="brightness-0 invert opacity-90 relative z-10"
             />
             {/* Decorative circles */}
             <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
             <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>

          <div className="p-8">
            {/* Tabs */}
            <div className="flex p-1 bg-gray-100 rounded-xl mb-8">
              <button 
                onClick={() => setActiveTab('login')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                  activeTab === 'login' 
                    ? 'bg-white text-inglu-black shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                LOGIN
              </button>
              <button 
                onClick={() => setActiveTab('signup')}
                className={`flex-1 py-2.5 text-sm font-bold rounded-lg transition-all ${
                  activeTab === 'signup' 
                    ? 'bg-white text-inglu-black shadow-sm' 
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                SIGN UP
              </button>
            </div>

            {/* Form */}
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              {activeTab === 'signup' && (
                <div className="space-y-1">
                  <label className="text-xs font-bold text-gray-500 uppercase ml-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="email" 
                    placeholder="you@example.com"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-500 uppercase ml-1">Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input 
                    type="password" 
                    placeholder="••••••••"
                    className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium"
                  />
                </div>
              </div>

              <button className="mt-4 w-full py-4 bg-inglu-black text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-black/90 transition-all shadow-lg hover:shadow-xl active:scale-[0.98]">
                {activeTab === 'login' ? 'Login to Account' : 'Create Account'}
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-center text-xs text-gray-400 mt-4 font-medium">
                By continuing, you agree to our Terms of Service & Privacy Policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
