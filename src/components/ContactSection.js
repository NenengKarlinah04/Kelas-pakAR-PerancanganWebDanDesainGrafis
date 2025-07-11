// src/components/ContactSection.jsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, Instagram, ShoppingCart } from "lucide-react";
import { ASSETS } from "@/data/assets";

export const ContactSection = () => {
  const { whatsappNumber, instagramUsername, marketplaceLink, tagline } =
    ASSETS.contact;
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Halo Raos Saji, saya ingin bertanya.`
  )}`;
  const instagramLink = `https://instagram.com/${instagramUsername}`;

  return (
    <section id="contact" className="py-20 bg-[#8B4513]">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold mb-2">Contact Person</h2>
        <p className="text-lg text-gray-300 mb-8 italic">&quot;{tagline}&quot;</p>

        <div className="flex flex-wrap justify-center gap-6">
          {/* Tombol WhatsApp */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="bg-[#25D366] p-4 rounded-full">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <span className="font-semibold">WhatsApp</span>
          </motion.a>

          {/* Tombol Instagram */}
          <motion.a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1, y: -5 }}
            className="flex flex-col items-center space-y-2 p-4 rounded-lg hover:bg-white/10 transition-colors"
          >
            <div className="bg-gradient-to-br from-yellow-400 via-red-500 to-purple-600 p-4 rounded-full">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <span className="font-semibold">Instagram</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};
