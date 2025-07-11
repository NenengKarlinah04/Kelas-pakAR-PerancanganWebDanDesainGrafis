// src/components/HeroSection.jsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ASSETS } from "@/data/assets";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="bg-gradient-to-b from-[#FDEBD0] to-[#FAD7A0] min-h-screen flex flex-col"
    >
      {/* Area Teks */}
      <div className="container mx-auto px-6 flex-grow flex flex-col justify-center items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-[#8B4513] mb-4"
        >
          Rasa Otentik, Kualitas Terbaik
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          className="text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Nikmati sajian istimewa dari dapur Raos Saji, dibuat dengan cinta dan
          bahan-bahan segar pilihan.
        </motion.p>
      </div>

      {/* Area Panggung Produk */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="w-full"
      >
        <div className="relative h-56 md:h-80 flex justify-center items-end">
          {/* Panggung */}
          <div className="absolute bottom-0 h-40 w-4/5 md:w-1/2 bg-[#D35400] rounded-t-full shadow-2xl"></div>

          {/* Gambar Produk */}
          {ASSETS.heroProducts.map((product, index) => {
            // ** LOGIKA POSISI KARTU REMI **
            let styles = {};

            if (index === 0) {
              // Kartu Kiri
              styles = {
                left: "50%",
                bottom: "20%",
                x: "-90%",
                rotate: -15,
                zIndex: 2,
              };
            } else if (index === 1) {
              // Kartu Tengah (Paling Atas)
              styles = {
                left: "50%",
                bottom: "25%",
                x: "-50%",
                rotate: 0,
                zIndex: 3,
              };
            } else {
              // Kartu Kanan
              styles = {
                left: "50%",
                bottom: "20%",
                x: "-10%",
                rotate: 15,
                zIndex: 2,
              };
            }

            return (
              <motion.div
                key={product.id}
                // PERUBAHAN: Menambahkan ukuran responsif
                className="absolute w-[160px] h-[160px] md:w-[220px] md:h-[220px]"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  x: styles.x || 0,
                  rotate: styles.rotate,
                }}
                transition={{
                  duration: 0.8,
                  delay: 1.5 + index * 0.2,
                  ease: "easeOut",
                }}
                style={{
                  transformOrigin: "bottom center",
                  left: styles.left,
                  bottom: styles.bottom,
                  zIndex: styles.zIndex,
                }}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={220} // Menggunakan ukuran terbesar untuk kualitas
                  height={220}
                  className="shadow-lg rounded-lg object-contain"
                  onError={(e) => {
                    e.currentTarget.src = `https://placehold.co/220x220/E29A5E/FFFFFF?text=Produk+${
                      index + 1
                    }`;
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};
