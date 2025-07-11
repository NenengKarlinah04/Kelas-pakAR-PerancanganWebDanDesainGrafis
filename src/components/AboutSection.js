// src/components/AboutSection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ASSETS } from '@/data/assets';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Kolom Kiri: Teks About */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl font-bold text-[#8B4513] mb-4">Tentang:</h2>
            <p className="text-gray-600 leading-relaxed">{ASSETS.aboutText}</p>
          </motion.div>

          {/* Kolom Kanan: Kotak Keunggulan Produk */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-[#FDEBD0] p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-bold text-[#8B4513] mb-6">Keunggulan Produk Kami</h3>
            <div className="space-y-4">
              {ASSETS.productDescriptions.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="flex items-start"
                >
                  <div className="flex-shrink-0 bg-[#E29A5E] text-white rounded-full h-8 w-8 flex items-center justify-center mr-4">
                    <span>{index + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#8B4513]">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};