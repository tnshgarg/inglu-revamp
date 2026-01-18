"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

const words = ["EDUCATION", "ENHANCEMENT", "ENTERTAINMENT"];

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= words.length) {
      const timer = setTimeout(() => {
        onComplete();
      }, 500); // Wait a bit after the last word
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 1200); // Duration each word is shown

    return () => clearTimeout(timer);
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-white flex items-center justify-center text-inglu-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
    >
      <AnimatePresence mode="wait">
        {currentIndex < words.length && (
          <motion.h1
            key={words[currentIndex]}
            className="text-5xl md:text-8xl font-display font-bold tracking-wider"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {words[currentIndex]}
          </motion.h1>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingScreen;
