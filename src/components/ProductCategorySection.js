// src/components/ProductCategorySection.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MenuCard } from './MenuCard';

export const ProductCategorySection = ({ category, onCardClick, isFirst }) => {
  return (
    <section 
      id={category.id} 
      // Memberi warna latar belakang yang berbeda untuk section pertama
      className={`py-20 ${isFirst ? 'bg-gradient-to-b from-[#FAD7A0] to-[#F5E8DA]' : 'bg-[#F5E8DA]'}`}
    >
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-extrabold text-center text-[#8B4513] mb-12"
        >
          {category.name}
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {category.items.map((item) => (
            <MenuCard 
              key={item.id} 
              item={item} 
              onCardClick={onCardClick} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};