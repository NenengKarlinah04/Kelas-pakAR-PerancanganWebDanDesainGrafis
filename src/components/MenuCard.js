// src/components/MenuCard.jsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export const MenuCard = ({ item, onCardClick }) => {
  return (
    <motion.div
      layoutId={item.id} // Penting untuk animasi ke modal
      onClick={() => onCardClick(item)}
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      className="bg-white rounded-xl overflow-hidden shadow-lg cursor-pointer group"
    >
      <div className="overflow-hidden h-56">
        <Image 
          src={item.imageSrc} 
          alt={item.name} 
          width={400} 
          height={400} 
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.currentTarget.src = `https://placehold.co/400x400/F5CBA7/8B4513?text=${item.name.replace(/\s/g,'+')}`; }}
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-bold text-[#8B4513]">{item.name}</h3>
        <p className="text-gray-800 font-semibold mt-1">{item.price}</p>
      </div>
    </motion.div>
  );
};