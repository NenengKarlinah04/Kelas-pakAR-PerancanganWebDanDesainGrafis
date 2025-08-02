// src/components/Navbar.jsx
"use client"; // Komponen ini interaktif, jadi kita tandai sebagai Client Component

import React from "react";
// import Image from "next/image";
import { ASSETS } from "@/data/assets"; // Mengambil data aset

export const Navbar = () => {
  // Fungsi untuk scroll ke section tertentu
  const scrollToSection = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <img
          src={ASSETS.logo}
          alt="Logo Raos Saji"
          width={100}
          height={40}
          className="h-12 w-auto"
          onError={(e) => {
            e.currentTarget.src =
              "https://placehold.co/100x40/FFF/E29A5E?text=RAOS+SAJI&font=poppins";
          }}
        />

        {/* Menu Navigasi untuk Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-[#E29A5E] transition-colors duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("menu-baso-aci")}
            className="text-gray-700 hover:text-[#E29A5E] transition-colors duration-300"
          >
            Menu
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-gray-700 hover:text-[#E29A5E] transition-colors duration-300"
          >
            Contact
          </button>
        </div>

        {/* Tombol Order untuk Mobile */}
        <button
          onClick={() => scrollToSection("menu-baso-aci")}
          className="md:hidden bg-[#E29A5E] text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-opacity-90 transition-transform duration-300 hover:scale-105"
        >
          Order Now
        </button>
      </div>
    </nav>
  );
};
