// src/components/DetailModal.jsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { X, Phone, Plus, Minus } from "lucide-react";
import Image from "next/image";
import { ASSETS } from "@/data/assets";

export const DetailModal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(1);

  if (!item) return null;

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity(prev => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  const whatsappLink = `https://wa.me/${
    ASSETS.contact.whatsappNumber
  }?text=${encodeURIComponent(
    `Halo Raos Saji, saya ingin order ${item.name} sebanyak ${quantity} porsi.`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-[100] flex items-center justify-center p-4"
    >
      <motion.div
        layoutId={item.id} // Penting untuk animasi dari kartu
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl w-full max-w-lg overflow-hidden"
      >
        <div className="relative">
          <Image
            src={item.imageSrc}
            alt={item.name}
            width={500}
            height={300}
            className="w-full h-72 object-cover"
            onError={(e) => {
              e.currentTarget.src = `https://placehold.co/500x300/F5CBA7/8B4513?text=${item.name.replace(
                /\s/g,
                "+"
              )}`;
            }}
          />
          <button
            onClick={onClose}
            className="absolute top-3 right-3 bg-white/70 rounded-full p-2 hover:bg-white transition-colors"
          >
            <X className="w-5 h-5 text-gray-700" />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-[#8B4513]">{item.name}</h2>
          <p className="text-2xl font-semibold text-gray-800 mt-2">
            {item.price}
          </p>
          <p className="text-gray-600 mt-4 leading-relaxed">
            {item.description}
          </p>

          {/* Quantity Selector */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Jumlah Pesanan
            </label>
            <div className="flex items-center justify-center space-x-4">
              <button
                onClick={() => handleQuantityChange("decrease")}
                disabled={quantity <= 1}
                className="bg-gray-200 hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed text-gray-700 rounded-full p-2 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-2xl font-bold text-[#8B4513] min-w-[3rem] text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange("increase")}
                className="bg-[#8B4513] hover:bg-[#A0522D] text-white rounded-full p-2 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 w-full bg-[#25D366] text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
          >
            <Phone className="w-5 h-5 mr-3" />
            Pesan via WhatsApp
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};
