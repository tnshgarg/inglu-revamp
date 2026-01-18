"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const brands = [
  "/brands/Adda 52_idBB1WViVa_0.svg",
  "/brands/AllEvents_idb7JE_sKb_0.png",
  "/brands/BookMyShow_id_NUAGErP_0.svg",
  "/brands/CoinDCX_id5Hba0WA9_0.svg",
  "/brands/Domino Pizza_Symbol_0.svg",
  "/brands/EY_Logo_0.svg",
  "/brands/NIVEA_Logo_0.svg",
  "/brands/id1QPWxL1T_1768670363451.png",
  "/brands/idA5H0e4IJ_logos.png",
  "/brands/idCFao-InK_logos.jpeg",
  "/brands/idjTgoEF92_logos.png",
  "/brands/idkKRykW4z_1768670691079.jpeg",
  "/brands/pizza-hut.svg",
];

const BrandCarousel = () => {
  return (
    <section className="bg-white py-16 overflow-hidden"> {/* Reduced vertical padding */}
      <div className="container mx-auto px-4 mb-8 text-center">
        <h3 className="text-inglu-black/50 uppercase tracking-[0.2em] text-sm font-bold">
          Trusted by Industry Leaders
        </h3>
      </div>
      
      <div className="flex relative">
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
         
        <motion.div
          className="flex gap-16 items-center flex-nowrap"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate brands for seamless loop */}
          {[...brands, ...brands].map((src, index) => (
            <div
              key={index}
              className="relative w-32 h-16 flex-shrink-0 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={src}
                alt="Brand Logo"
                fill
                className="object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandCarousel;
